package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/gridfs"
	"go.mongodb.org/mongo-driver/mongo/options"
	"io"
	"log"
	"mime/multipart"
	"net/http"
	"os"
	"time"
)

var fs *gridfs.Bucket
var fileCollection *mongo.Collection

type FileInfo struct {
	ID          primitive.ObjectID `bson:"_id"`
	Name        string             `bson:"name"`
	ContentType string             `bson:"contentType"`
	UploadedAt  time.Time          `bson:"uploadedAt"`
	FileID      primitive.ObjectID `bson:"fileID"`
}

func saveFileInfo(filename string, contentType string, fileID primitive.ObjectID) error {
	fileInfo := FileInfo{
		ID:          fileID,
		Name:        filename,
		ContentType: contentType,
		UploadedAt:  time.Now(),
		FileID:      fileID,
	}
	_, err := fileCollection.InsertOne(context.Background(), fileInfo)
	return err
}
func deleteFileGridFS(fileID primitive.ObjectID) error {
	err := fs.Delete(fileID)
	return err
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/files", uploadFileHandler).Methods("POST")
	r.HandleFunc("/file/{fileID}", getFileHandler).Methods("GET")
	r.HandleFunc("/files", getAllFileInfoHandler).Methods("GET")
	r.HandleFunc("/files/{fileID}/info", getFileInfoByIDHandler).Methods("GET")
	r.HandleFunc("/files/{fileID}", updateFile).Methods("PUT")
	r.HandleFunc("/files/{fileID}", deleteFile).Methods("DELETE")

	err := godotenv.Load("./file.env")
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	clientOptions := options.Client().ApplyURI(os.Getenv("MONGO_URI"))
	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	db := client.Database(os.Getenv("MONGO_DB"))
	fs, err = gridfs.NewBucket(db)
	fileCollection = db.Collection("files")
	if err != nil {
		log.Fatal(err)
	}

	defer client.Disconnect(context.Background())

	corsHandler := handlers.CORS(
		handlers.AllowedHeaders([]string{"Content-Type"}),
		handlers.AllowedOrigins([]string{"*"}),
	)(r)

	http.Handle("/", corsHandler)
	port := os.Getenv("PORT")
	fmt.Printf("Server started on port %s", port)
	log.Fatal(http.ListenAndServe(port, nil))
}

func deleteFile(writer http.ResponseWriter, request *http.Request) {
	fileIDParam := mux.Vars(request)["fileID"]
	fileID, err := primitive.ObjectIDFromHex(fileIDParam)
	if err != nil {
		http.Error(writer, "Invalid file ID", http.StatusBadRequest)
	}
	filter := bson.M{
		"_id": fileID,
	}

	err = deleteFileGridFS(fileID)
	_, err = fileCollection.DeleteOne(context.Background(), filter)

	if err != nil {
		log.Printf("Error deleting file: %v", err)
	} else {
		log.Printf("File was deleted successfuly")

	}
	fmt.Fprintf(writer, "File was deleted")
}

func updateFile(writer http.ResponseWriter, request *http.Request) {

	err := request.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(writer, err.Error(), http.StatusBadRequest)
		return
	}

	fileIDParam := mux.Vars(request)["fileID"]
	fileID, err := primitive.ObjectIDFromHex(fileIDParam)

	if err != nil {
		http.Error(writer, "Invalid file ID", http.StatusBadRequest)
		return
	}
	file, header, err := request.FormFile("newFile")

	if err != nil {
		http.Error(writer, err.Error(), http.StatusInternalServerError)
		return
	}
	defer func(file multipart.File) {
		err := file.Close()
		if err != nil {

		}
	}(file)
	err = deleteFileGridFS(fileID)
	if err != nil {
		http.Error(writer, "Error to update file", http.StatusBadRequest)
	} else {
		streamToGridFS, err := fs.OpenUploadStreamWithID(fileID, header.Filename)
		if err != nil {
			http.Error(writer, err.Error(), http.StatusInternalServerError)
			return
		}
		defer func(streamToGridFS *gridfs.UploadStream) {
			err := streamToGridFS.Close()
			if err != nil {

			}
		}(streamToGridFS)

		if _, err := io.Copy(streamToGridFS, file); err != nil {
			http.Error(writer, err.Error(), http.StatusInternalServerError)
			return
		}

		filter := bson.M{"_id": fileID}
		update := bson.M{"$set": bson.M{
			"name":        header.Filename,
			"contentType": header.Header.Get("Content-Type"),
			"uploadedAt":  time.Now(),
		}}
		_, err = fileCollection.UpdateOne(context.Background(), filter, update)

		if err != nil {
			http.Error(writer, err.Error(), http.StatusMultiStatus)
		}

		writer.WriteHeader(http.StatusCreated)
	}

}

func getAllFileInfoHandler(writer http.ResponseWriter, request *http.Request) {
	filter := bson.M{}
	cur, err := fileCollection.Find(context.Background(), filter)
	if err != nil {
		http.Error(writer, err.Error(), http.StatusInternalServerError)
		return
	}
	defer cur.Close(context.Background())

	var fileInfos []FileInfo

	for cur.Next(context.Background()) {
		var fileInfo FileInfo
		if err := cur.Decode(&fileInfo); err != nil {
			http.Error(writer, err.Error(), http.StatusInternalServerError)
			return
		}
		fileInfos = append(fileInfos, fileInfo)
	}

	writer.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(writer).Encode(fileInfos); err != nil {
		http.Error(writer, err.Error(), http.StatusInternalServerError)
	}
}

func uploadFileHandler(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	file, header, err := r.FormFile("file")
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	defer file.Close()

	fileID, err := fs.UploadFromStream(header.Filename, file)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = saveFileInfo(header.Filename, header.Header.Get("Content-Type"), fileID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	fmt.Fprintf(w, "File with name: %s saved in GrifFS with ID %v", header.Filename, fileID)
}

func getFileHandler(writer http.ResponseWriter, request *http.Request) {
	fileIDParam := mux.Vars(request)["fileID"]
	fileID, err := primitive.ObjectIDFromHex(fileIDParam)
	if err != nil {
		http.Error(writer, "Invalid file ID", http.StatusBadRequest)
		return
	}

	stream, err := fs.OpenDownloadStream(fileID)
	if err != nil {
		http.Error(writer, err.Error(), http.StatusNotFound)
		return
	}
	defer stream.Close()

	writer.Header().Set("Content-Disposition", "attachment; filename="+stream.GetFile().Name)

	_, err = io.Copy(writer, stream)
	if err != nil {
		http.Error(writer, err.Error(), http.StatusInternalServerError)
	}
}

func getFileInfoByIDHandler(writer http.ResponseWriter, request *http.Request) {
	fileIDParam := mux.Vars(request)["fileID"]
	fileID, err := primitive.ObjectIDFromHex(fileIDParam)
	if err != nil {
		http.Error(writer, "Invalid file ID", http.StatusBadRequest)
		return
	}
	filter := bson.M{"_id": fileID}
	var fileInfo FileInfo
	err = fileCollection.FindOne(context.Background(), filter).Decode(&fileInfo)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			http.Error(writer, "File not found", http.StatusNotFound)
			return
		} else {
			http.Error(writer, err.Error(), http.StatusInternalServerError)
			return
		}
	}
	writer.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(writer).Encode(fileInfo); err != nil {
		http.Error(writer, err.Error(), http.StatusInternalServerError)
	}
}
