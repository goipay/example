package listener

import (
	"context"
	"errors"
	"log"
	"math/rand"
	"sync/atomic"
	"testing"
	"time"

	"github.com/chekist32/go-monero/daemon"
	"github.com/chekist32/goipay/test"
	"github.com/google/uuid"
	"github.com/rs/zerolog"
	"github.com/stretchr/testify/assert"
)

func TestBlockChan(t *testing.T) {
	t.Parallel()

	t.Run("Check NewBlockChan Func", func(t *testing.T) {
		d := new(test.MockXMRDaemonRpcClient)
		xmr := NewDaemonRpcClientExecutor(d, zerolog.DefaultContextLogger)

		expectedBlockResult := daemon.GetBlockResult{
			BlockDetails: daemon.BlockDetails{
				Timestamp: rand.Uint32(),
			},
		}

		blockCnAmount := atomic.Int32{}
		blockCnAmount.Store(0)

		blockCn := xmr.NewBlockChan()
		xmr.newBlockChns.Range(func(key string, value chan daemon.GetBlockResult) bool {
			go func() {
				blockCnAmount.Add(1)
				value <- expectedBlockResult
			}()

			return true
		})

		actualBlockResult := daemon.GetBlockResult{}
		select {
		case actualBlockResult = <-blockCn:
			break
		case <-time.After(MIN_SYNC_TIMEOUT):
			log.Fatal(errors.New("Timeout has been expired"))
		}

		assert.Equal(t, int32(1), blockCnAmount.Load())
		assert.Equal(t, expectedBlockResult, actualBlockResult)
	})
}

func TestTxPoolChan(t *testing.T) {
	t.Parallel()

	t.Run("Check NewTxPoolChan Func", func(t *testing.T) {
		d := new(test.MockXMRDaemonRpcClient)
		xmr := NewDaemonRpcClientExecutor(d, zerolog.DefaultContextLogger)

		expectedMoneroTx := daemon.MoneroTx{
			IdHash: uuid.NewString(),
		}

		txPoolCnAmount := atomic.Int32{}
		txPoolCnAmount.Store(0)

		txPoolCn := xmr.NewTxPoolChan()
		xmr.txPoolChns.Range(func(key string, value chan daemon.MoneroTx) bool {
			go func() {
				txPoolCnAmount.Add(1)
				value <- expectedMoneroTx
			}()

			return true
		})

		actualMoneroTx := daemon.MoneroTx{}
		select {
		case actualMoneroTx = <-txPoolCn:
			break
		case <-time.After(MIN_SYNC_TIMEOUT):
			log.Fatal(errors.New("Timeout has been expired"))
		}

		assert.Equal(t, int32(1), txPoolCnAmount.Load())
		assert.Equal(t, expectedMoneroTx, actualMoneroTx)
	})
}

func TestSyncBlock(t *testing.T) {
	t.Parallel()

	t.Run("Succesfull syncBlock", func(t *testing.T) {
		lastBlockHeight := rand.Uint64()
		d := new(test.MockXMRDaemonRpcClient)
		d.On("GetLastBlockHeader", true).Return(
			&daemon.JsonRpcGenericResponse[daemon.GetBlockHeaderResult]{
				Result: daemon.GetBlockHeaderResult{
					BlockHeader: daemon.BlockHeader{
						Height: lastBlockHeight,
					},
				},
			},
			error(nil),
		)

		expectedBlockResult := daemon.GetBlockResult{
			BlockDetails: daemon.BlockDetails{
				Timestamp: rand.Uint32(),
			},
		}
		d.On("GetBlockByHeight", true, lastBlockHeight-1).Return(
			&daemon.JsonRpcGenericResponse[daemon.GetBlockResult]{
				Result: expectedBlockResult,
			},
			error(nil),
		)

		xmr := NewDaemonRpcClientExecutor(d, &zerolog.Logger{})
		xmr.blockSync.lastBlockHeight.Store(lastBlockHeight - 1)
		blockCn := xmr.NewBlockChan()

		ctx := context.Background()
		xmr.syncBlock(ctx)

		actualBlockResult := daemon.GetBlockResult{}
		select {
		case actualBlockResult = <-blockCn:
			break
		case <-time.After(MIN_SYNC_TIMEOUT):
			log.Fatal(errors.New("Timeout has been expired"))
		}

		assert.Equal(t, lastBlockHeight, xmr.blockSync.lastBlockHeight.Load())
		assert.Equal(t, expectedBlockResult, actualBlockResult)
	})

	t.Run("MIN_SYNC_TIMEOUT exceeded", func(t *testing.T) {
		lastBlockHeight := rand.Uint64()
		d := new(test.MockXMRDaemonRpcClient)
		d.On("GetLastBlockHeader", true).Return(
			&daemon.JsonRpcGenericResponse[daemon.GetBlockHeaderResult]{
				Result: daemon.GetBlockHeaderResult{
					BlockHeader: daemon.BlockHeader{
						Height: lastBlockHeight,
					},
				},
			},
			error(nil),
		)

		expectedBlockResult := daemon.GetBlockResult{
			BlockDetails: daemon.BlockDetails{
				Timestamp: rand.Uint32(),
			},
		}
		d.On("GetBlockByHeight", true, lastBlockHeight-1).Return(
			&daemon.JsonRpcGenericResponse[daemon.GetBlockResult]{
				Result: expectedBlockResult,
			},
			error(nil),
		)

		xmr := NewDaemonRpcClientExecutor(d, &zerolog.Logger{})
		xmr.blockSync.lastBlockHeight.Store(lastBlockHeight - 1)
		_ = xmr.NewBlockChan()

		ctx := context.Background()
		xmr.syncBlock(ctx)

		<-time.After(MIN_SYNC_TIMEOUT + 1*time.Second)

		cnCount := 0
		xmr.newBlockChns.Range(func(key string, value chan daemon.GetBlockResult) bool {
			cnCount++
			return true
		})

		assert.Equal(t, 0, cnCount)
	})

}

func TestSyncTransactionPool(t *testing.T) {
	t.Parallel()

	t.Run("Succesfull syncTransactionPoll", func(t *testing.T) {
		// 1
		expectedTxs1Map := map[string]daemon.MoneroTx{
			"tx1": {IdHash: "tx1"},
			"tx2": {IdHash: "tx2"},
			"tx3": {IdHash: "tx3"},
			"tx4": {IdHash: "tx4"},
			"tx5": {IdHash: "tx5"},
		}
		expectedTxs1Slice := make([]daemon.MoneroTx, 0)
		for _, tx := range expectedTxs1Map {
			expectedTxs1Slice = append(expectedTxs1Slice, tx)
		}

		d := new(test.MockXMRDaemonRpcClient)
		d.On("GetTransactionPool").Once().Return(
			&daemon.GetTransactionPoolResponse{
				Transactions: expectedTxs1Slice,
			},
			error(nil),
		)

		xmr := NewDaemonRpcClientExecutor(d, &zerolog.Logger{})
		txPoolCn := xmr.NewTxPoolChan()

		xmr.syncTransactionPool()

		txs1 := make(map[string]daemon.MoneroTx, 0)
		for i := 0; i < len(expectedTxs1Map); i++ {
			select {
			case tx := <-txPoolCn:
				txs1[tx.IdHash] = tx
			case <-time.After(MIN_SYNC_TIMEOUT):
				log.Fatal(errors.New("Timeout has been expired"))
			}
		}

		assert.Equal(t, expectedTxs1Map, txs1)
		assert.Condition(t, func() (success bool) {
			for id := range expectedTxs1Map {
				if !xmr.transactionPoolSync.txs[id] {
					return false
				}
			}

			return true
		})

		// 2
		expectedTxs2Map := map[string]daemon.MoneroTx{
			"tx1": {IdHash: "tx1"},
			"tx3": {IdHash: "tx3"},
			"tx5": {IdHash: "tx5"},
			"tx7": {IdHash: "tx7"},
			"tx6": {IdHash: "tx6"},
		}
		expectedTxs2Slice := make([]daemon.MoneroTx, 0)
		for _, tx := range expectedTxs2Map {
			expectedTxs2Slice = append(expectedTxs2Slice, tx)
		}
		d.On("GetTransactionPool").Return(
			&daemon.GetTransactionPoolResponse{
				Transactions: expectedTxs2Slice,
			},
			error(nil),
		)

		xmr.syncTransactionPool()

		txs2 := make(map[string]daemon.MoneroTx, 0)
		for i := 0; i < 2; i++ {
			select {
			case tx := <-txPoolCn:
				txs2[tx.IdHash] = tx
			case <-time.After(MIN_SYNC_TIMEOUT):
				log.Fatal(errors.New("Timeout has been expired"))
			}
		}

		assert.Equal(t, map[string]daemon.MoneroTx{"tx7": {IdHash: "tx7"}, "tx6": {IdHash: "tx6"}}, txs2)
		assert.Condition(t, func() (success bool) {
			for id := range expectedTxs2Map {
				if !xmr.transactionPoolSync.txs[id] {
					return false
				}
			}

			return true
		})
	})

	t.Run("MIN_SYNC_TIMEOUT exceeded", func(t *testing.T) {
		expectedTxs1Map := map[string]daemon.MoneroTx{
			"tx1": {IdHash: "tx1"},
			"tx2": {IdHash: "tx2"},
			"tx3": {IdHash: "tx3"},
			"tx4": {IdHash: "tx4"},
			"tx5": {IdHash: "tx5"},
		}
		expectedTxs1Slice := make([]daemon.MoneroTx, 0)
		for _, tx := range expectedTxs1Map {
			expectedTxs1Slice = append(expectedTxs1Slice, tx)
		}

		d := new(test.MockXMRDaemonRpcClient)
		d.On("GetTransactionPool").Once().Return(
			&daemon.GetTransactionPoolResponse{
				Transactions: expectedTxs1Slice,
			},
			error(nil),
		)

		xmr := NewDaemonRpcClientExecutor(d, &zerolog.Logger{})
		_ = xmr.NewTxPoolChan()

		xmr.syncTransactionPool()
		<-time.After(MIN_SYNC_TIMEOUT + 1*time.Second)

		cnCount := 0
		xmr.txPoolChns.Range(func(key string, value chan daemon.MoneroTx) bool {
			cnCount++
			return true
		})

		assert.Equal(t, 0, cnCount)
	})

}

func TestStartStop(t *testing.T) {
	t.Parallel()

	d := new(test.MockXMRDaemonRpcClient)
	xmr := NewDaemonRpcClientExecutor(d, &zerolog.Logger{})

	xmr.Start(0)
	assert.True(t, xmr.isStarted)

	xmr.Start(0)
	assert.True(t, xmr.isStarted)

	<-time.After(1 * time.Second)
	xmr.Stop()
	<-time.After(1 * time.Second)

	assert.False(t, xmr.isStarted)
}
