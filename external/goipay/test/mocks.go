package test

import (
	"github.com/chekist32/go-monero/daemon"
	"github.com/stretchr/testify/mock"
)

type MockXMRDaemonRpcClient struct {
	mock.Mock
}

func (m *MockXMRDaemonRpcClient) GetLastBlockHeader(includeHex bool) (*daemon.JsonRpcGenericResponse[daemon.GetBlockHeaderResult], error) {
	args := m.Called(includeHex)
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.GetBlockHeaderResult]), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetBlockByHeight(includeHex bool, height uint64) (*daemon.JsonRpcGenericResponse[daemon.GetBlockResult], error) {
	args := m.Called(includeHex, height)
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.GetBlockResult]), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetTransactionPool() (*daemon.GetTransactionPoolResponse, error) {
	args := m.Called()
	return args.Get(0).(*daemon.GetTransactionPoolResponse), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetBlockByHash(fillPowHash bool, hash string) (*daemon.JsonRpcGenericResponse[daemon.GetBlockResult], error) {
	args := m.Called()
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.GetBlockResult]), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetBlockCount() (*daemon.JsonRpcGenericResponse[daemon.GetBlockCountResult], error) {
	args := m.Called()
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.GetBlockCountResult]), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetBlockHeaderByHash(fillPowHash bool, hash string) (*daemon.JsonRpcGenericResponse[daemon.GetBlockHeaderResult], error) {
	args := m.Called()
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.GetBlockHeaderResult]), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetBlockHeaderByHeight(fillPowHash bool, height uint64) (*daemon.JsonRpcGenericResponse[daemon.GetBlockHeaderResult], error) {
	args := m.Called()
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.GetBlockHeaderResult]), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetBlockHeadersRange(fillPowHash bool, startHeight uint64, endHeight uint64) (*daemon.JsonRpcGenericResponse[daemon.GetBlockHeadersRangeResult], error) {
	args := m.Called()
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.GetBlockHeadersRangeResult]), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetBlockTemplate(wallet string, reverseSize uint64) (*daemon.JsonRpcGenericResponse[daemon.GetBlockTemplateResult], error) {
	args := m.Called()
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.GetBlockTemplateResult]), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetCurrentHeight() (*daemon.GetHeightResponse, error) {
	args := m.Called()
	return args.Get(0).(*daemon.GetHeightResponse), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetFeeEstimate() (*daemon.JsonRpcGenericResponse[daemon.GetFeeEstimateResult], error) {
	args := m.Called()
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.GetFeeEstimateResult]), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetInfo() (*daemon.JsonRpcGenericResponse[daemon.GetInfoResult], error) {
	args := m.Called()
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.GetInfoResult]), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetTransactions(txHashes []string, decodeAsJson bool, prune bool, split bool) (*daemon.GetTransactionsResponse, error) {
	args := m.Called()
	return args.Get(0).(*daemon.GetTransactionsResponse), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) GetVersion() (*daemon.JsonRpcGenericResponse[daemon.GetVersionResult], error) {
	args := m.Called()
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.GetVersionResult]), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) OnGetBlockHash(height uint64) (*daemon.JsonRpcGenericResponse[daemon.OnGetBlockHashResult], error) {
	args := m.Called()
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.OnGetBlockHashResult]), args.Error(1)
}
func (m *MockXMRDaemonRpcClient) SetRpcConnection(connection *daemon.RpcConnection) {}
func (m *MockXMRDaemonRpcClient) SubmitBlock(blobData []string) (*daemon.JsonRpcGenericResponse[daemon.SubmitBlockResult], error) {
	args := m.Called()
	return args.Get(0).(*daemon.JsonRpcGenericResponse[daemon.SubmitBlockResult]), args.Error(1)
}

// type MockDbQueries struct {
// 	mock.Mock
// }

// func (m *MockDbQueries) SetRpcConnection(connection *daemon.RpcConnection) {
// 	db.MockDbQueries{}
// }
// func (m *MockDbQueries) ConfirmInvoiceById(ctx context.Context, id pgtype.UUID) (db.Invoice, error) {
// 	args := m.Called()
// 	return args.Get(0).(db.Invoice), args.Error(1)
// }
// func (m *MockDbQueries) ConfirmInvoiceStatusMempoolById(ctx context.Context, arg db.ConfirmInvoiceStatusMempoolByIdParams) (db.Invoice, error)
// func (m *MockDbQueries) CreateCryptoAddress(ctx context.Context, arg db.CreateCryptoAddressParams) (db.CryptoAddress, error)
// func (m *MockDbQueries) CreateCryptoData(ctx context.Context, arg db.CreateCryptoDataParams) (db.CryptoDatum, error)
// func (m *MockDbQueries) CreateInvoice(ctx context.Context, arg db.CreateInvoiceParams) (db.Invoice, error)
// func (m *MockDbQueries) CreateUser(ctx context.Context) (pgtype.UUID, error)
// func (m *MockDbQueries) CreateUserWithId(ctx context.Context, id pgtype.UUID) (pgtype.UUID, error)
// func (m *MockDbQueries) CreateXMRCryptoData(ctx context.Context, arg db.CreateXMRCryptoDataParams) (db.XmrCryptoDatum, error)
// func (m *MockDbQueries) DeleteAllCryptoAddressByUserIdAndCoin(ctx context.Context, arg db.DeleteAllCryptoAddressByUserIdAndCoinParams) ([]db.CryptoAddress, error)
// func (m *MockDbQueries) ExpireInvoiceById(ctx context.Context, id pgtype.UUID) (db.Invoice, error)
// func (m *MockDbQueries) FindAllInvoicesByIds(ctx context.Context, dollar_1 []pgtype.UUID) ([]db.Invoice, error)
// func (m *MockDbQueries) FindAllPendingInvoices(ctx context.Context) ([]db.Invoice, error)
// func (m *MockDbQueries) FindCryptoCacheByCoin(ctx context.Context, coin db.CoinType) (db.CryptoCache, error)
// func (m *MockDbQueries) FindCryptoDataByUserId(ctx context.Context, userID pgtype.UUID) (db.CryptoDatum, error)
// func (m *MockDbQueries) FindCryptoKeysByUserId(ctx context.Context, userID pgtype.UUID) (db.FindCryptoKeysByUserIdRow, error)
// func (m *MockDbQueries) FindIndicesAndLockXMRCryptoDataById(ctx context.Context, id pgtype.UUID) (db.FindIndicesAndLockXMRCryptoDataByIdRow, error)
// func (m *MockDbQueries) FindKeysAndLockXMRCryptoDataById(ctx context.Context, id pgtype.UUID) (db.FindKeysAndLockXMRCryptoDataByIdRow, error)
// func (m *MockDbQueries) FindNonOccupiedCryptoAddressAndLockByUserIdAndCoin(ctx context.Context, arg db.FindNonOccupiedCryptoAddressAndLockByUserIdAndCoinParams) (db.CryptoAddress, error)
// func (m *MockDbQueries) SetXMRCryptoDataByUserId(ctx context.Context, arg db.SetXMRCryptoDataByUserIdParams) (db.CryptoDatum, error)
// func (m *MockDbQueries) ShiftExpiresAtForNonConfirmedInvoices(ctx context.Context) ([]db.Invoice, error)
// func (m *MockDbQueries) UpdateCryptoCacheByCoin(ctx context.Context, arg db.UpdateCryptoCacheByCoinParams) (db.CryptoCache, error)
// func (m *MockDbQueries) UpdateIndicesXMRCryptoDataById(ctx context.Context, arg db.UpdateIndicesXMRCryptoDataByIdParams) (db.XmrCryptoDatum, error)
// func (m *MockDbQueries) UpdateIsOccupiedByCryptoAddress(ctx context.Context, arg db.UpdateIsOccupiedByCryptoAddressParams) (db.CryptoAddress, error)
// func (m *MockDbQueries) UpdateKeysXMRCryptoDataById(ctx context.Context, arg db.UpdateKeysXMRCryptoDataByIdParams) (db.XmrCryptoDatum, error)
// func (m *MockDbQueries) UserExistsById(ctx context.Context, id pgtype.UUID) (bool, error)
// func (m *MockDbQueries) WithTx(tx pgx.Tx) *MockDbQueries
