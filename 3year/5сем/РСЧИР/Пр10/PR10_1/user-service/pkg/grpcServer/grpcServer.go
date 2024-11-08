package grpcServer

import (
	"PR10_1/user-service/pkg/api"
	"PR10_1/user-service/pkg/postgre"
	"context"
	"fmt"
	"gorm.io/gorm"
)

type PrGRPCServer struct {
	api.UnimplementedUserServiceServer
	db postgre.Storage
}

func NewGRPCServer(db *gorm.DB) *PrGRPCServer {
	return &PrGRPCServer{
		db: postgre.NewUserServiceStorage(db),
	}
}

// UpdateUsername ...
func (p *PrGRPCServer) UpdateUsername(ctx context.Context, req *api.UpdateUsernameRequest) (*api.UpdateUsernameResponse, error) {

	return &api.UpdateUsernameResponse{
		IsSuccessful: false,
	}, nil

}

// InsertUser ...
func (p *PrGRPCServer) InsertUser(ctx context.Context, req *api.InsertUserRequest) (*api.InsertUserResponse, error) {
	user := postgre.User{
		Username: req.User.Username,
		Password: req.User.Password,
		Name:     req.User.Name,
	}

	_, err := p.db.InsertUser(ctx, user)
	if err != nil {
		return &api.InsertUserResponse{
			Result: &api.InsertUserResponse_IsSuccessful{
				IsSuccessful: fmt.Sprintf("%v", err),
			},
		}, err
	}

	return &api.InsertUserResponse{
		Result: &api.InsertUserResponse_User{
			User: &api.User{
				Username: user.Username,
			},
		},
	}, nil
}

// DeleteUser ...
func (p *PrGRPCServer) DeleteUser(ctx context.Context, req *api.DeleteUserRequest) (*api.DeleteUserResponse, error) {
	if err := p.db.DeleteUser(ctx, req.Id); err != nil {
		return &api.DeleteUserResponse{
			IsSuccessful: false,
		}, err
	}
	return &api.DeleteUserResponse{
		IsSuccessful: true,
	}, nil
}
