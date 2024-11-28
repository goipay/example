import { UserServiceClient } from '@/generated/goipay/user_grpc_pb'
import { credentials } from '@grpc/grpc-js'
import { InvoiceServiceClient } from '@/generated/goipay/invoice_grpc_pb'
import { goipayAddr } from './const'

export const userGrpcClient = new UserServiceClient(goipayAddr, credentials.createInsecure())
export const invoiceGrpcClient = new InvoiceServiceClient(goipayAddr, credentials.createInsecure())
