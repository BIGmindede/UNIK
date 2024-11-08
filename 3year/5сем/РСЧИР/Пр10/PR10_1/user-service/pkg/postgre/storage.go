package postgre

import (
	"context"
)

type Storage interface {
	InsertUser(ctx context.Context, usr User) (string, error)
	DeleteUser(ctx context.Context, id int32) error
	UpdateUser(ctx context.Context, username string, id int64) error
}
