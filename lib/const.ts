import { getEnvOrThrow } from './utils'

export const userId = getEnvOrThrow('USER_ID')
export const goipayAddr = getEnvOrThrow('GOIPAY_ADDRESS')
