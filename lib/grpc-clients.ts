import { UserServiceClient } from '@/generated/goipay/user_grpc_pb'
import { credentials } from '@grpc/grpc-js'
import { InvoiceServiceClient } from '@/generated/goipay/invoice_grpc_pb'
import { goipayAddr } from './const'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const clientCert = readFileSync(resolve(process.cwd(), './external/goipay/cert/client/client.crt'))
const clientKey = readFileSync(resolve(process.cwd(), './external/goipay/cert/client/client.key'))
const serverCaCert = readFileSync(resolve(process.cwd(), './external/goipay/cert/server/ca.crt'))

const creds = credentials.createSsl(serverCaCert, clientKey, clientCert)

export const userGrpcClient = new UserServiceClient(goipayAddr, creds)
export const invoiceGrpcClient = new InvoiceServiceClient(goipayAddr, creds)
