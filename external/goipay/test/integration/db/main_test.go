package db_test

import (
	"context"
	"fmt"
	"os"
	"testing"

	"github.com/chekist32/goipay/internal/db"
	"github.com/chekist32/goipay/test"
	"github.com/jackc/pgx/v5/pgxpool"
)

var (
	dbConnPool  *pgxpool.Pool
	dbCoinTypes [5]db.CoinType = [5]db.CoinType{db.CoinTypeXMR, db.CoinTypeBTC, db.CoinTypeLTC, db.CoinTypeETH, db.CoinTypeTON}
)

func TestMain(m *testing.M) {
	dbConn, _, close := test.SpinUpPostgresContainerAndGetPgxpool(fmt.Sprintf("%v/../../../sql/migrations", os.Getenv("PWD")))
	dbConnPool = dbConn
	defer close(context.Background())

	os.Exit(m.Run())
}
