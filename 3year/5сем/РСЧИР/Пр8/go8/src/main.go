package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/gorilla/securecookie"
	"github.com/joho/godotenv"
	"log"
	"net/http"
	"os"
	"sync"
	"time"
)

var (
	mu             sync.Mutex
	secureCookie   *securecookie.SecureCookie
	linearResponse string
	concResponse   string
)

func main() {
	r := mux.NewRouter()
	if err := godotenv.Load("./file.env"); err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}
	r.HandleFunc("/api/store", linearStoreHandler).Methods("POST")
	r.HandleFunc("/api/retrieve", linearRetrieveHandler).Methods("GET")
	r.HandleFunc("/api/conc-store", concurrentStoreHandler).Methods("POST")

	port := os.Getenv("PORT")
	hashKey := []byte(os.Getenv("COOKIE_HASH_KEY"))
	blockKey := []byte(os.Getenv("COOKIE_BLOCK_KEY"))

	secureCookie = securecookie.New(hashKey, blockKey)

	log.Printf("Listening on port %s\n", port)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe(port, nil))
}

func linearStoreHandler(w http.ResponseWriter, r *http.Request) {
	data := map[string]string{}
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	log.Println("new POST request")
	linearResponse = data["input"]
	log.Println(linearResponse)

	http.SetCookie(w, createCookie(linearResponse))
	fmt.Fprintln(w, linearResponse)

}

func concurrentStoreHandler(w http.ResponseWriter, r *http.Request) {
	data := map[string]string{}
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	log.Println("Hello from mutex")
	time.Sleep(5 * time.Second)
	linearResponse = data["input"]
	http.SetCookie(w, createCookie(linearResponse))
	fmt.Fprintln(w, linearResponse)
	coka := createCookie(linearResponse)
	log.Println(coka)

}

func linearRetrieveHandler(w http.ResponseWriter, r *http.Request) {
	cookieName := os.Getenv("COOKIE_NAME")

	cookie, err := r.Cookie(cookieName)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	value := make(map[string]string)
	log.Println(value)
	if err = secureCookie.Decode(cookieName, cookie.Value, &value); err == nil {
		concResponse = value["input"]
		log.Println(concResponse)

		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3535")
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST")
		w.Header().Set("Access-Control-Allow-Headers: Content-Type", "*")
		fmt.Fprintln(w, concResponse)
	} else {
		http.Error(w, err.Error(), http.StatusBadRequest)
	}
	log.Println("new GET request")
}

func createCookie(input string) *http.Cookie {
	cookieName := os.Getenv("COOKIE_NAME")

	value := map[string]string{
		"input": input,
	}
	encoded, err := secureCookie.Encode(cookieName, value)
	if err != nil {
		log.Printf("Error encoding cookie: %v", err)
	}
	cookie := &http.Cookie{
		Name:     cookieName,
		Value:    encoded,
		Path:     "/",
		HttpOnly: true,
		Secure:   true,
	}
	log.Printf("Name: %s Value: %s ", cookieName, encoded)
	return cookie
}
