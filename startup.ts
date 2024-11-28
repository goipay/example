import { RegisterUserRequest, RegisterUserResponse, UpdateCryptoKeysRequest, UpdateCryptoKeysResponse } from '@/generated/goipay/user_pb'
import { userGrpcClient } from '@/lib/grpc-clients'
import { getEnvOrThrow } from '@/lib/utils'
import { XmrKeysUpdateRequest } from '@/generated/goipay/crypto_pb'
import { promisify } from 'util'
import { userId } from '@/lib/const'
;(async () => {
    const registerUserPromise = promisify(userGrpcClient.registerUser.bind(userGrpcClient)) as (
        request: RegisterUserRequest
    ) => Promise<RegisterUserResponse>

    try {
        const res = await registerUserPromise(new RegisterUserRequest().setUserid(userId))
        console.log(res.toObject())
    } catch (err) {
        console.error(err)
    }

    const updateKeysPromise = promisify(userGrpcClient.updateCryptoKeys.bind(userGrpcClient)) as (
        request: UpdateCryptoKeysRequest
    ) => Promise<UpdateCryptoKeysResponse>

    try {
        await updateKeysPromise(
            new UpdateCryptoKeysRequest()
                .setUserid(userId)
                .setXmrreq(new XmrKeysUpdateRequest().setPrivviewkey(getEnvOrThrow('XMR_PRIV_VIEW')).setPubspendkey(getEnvOrThrow('XMR_PUB_SPEND')))
        )
        console.log('Keys Updated')
    } catch (err) {
        console.error(err)
    }
})()
