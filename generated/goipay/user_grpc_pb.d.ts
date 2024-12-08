// package: user.v1
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";
import * as crypto_pb from "./crypto_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerUser: IUserServiceService_IRegisterUser;
    updateCryptoKeys: IUserServiceService_IUpdateCryptoKeys;
}

interface IUserServiceService_IRegisterUser extends grpc.MethodDefinition<user_pb.RegisterUserRequest, user_pb.RegisterUserResponse> {
    path: "/user.v1.UserService/RegisterUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.RegisterUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.RegisterUserRequest>;
    responseSerialize: grpc.serialize<user_pb.RegisterUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.RegisterUserResponse>;
}
interface IUserServiceService_IUpdateCryptoKeys extends grpc.MethodDefinition<user_pb.UpdateCryptoKeysRequest, user_pb.UpdateCryptoKeysResponse> {
    path: "/user.v1.UserService/UpdateCryptoKeys";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UpdateCryptoKeysRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UpdateCryptoKeysRequest>;
    responseSerialize: grpc.serialize<user_pb.UpdateCryptoKeysResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UpdateCryptoKeysResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    registerUser: grpc.handleUnaryCall<user_pb.RegisterUserRequest, user_pb.RegisterUserResponse>;
    updateCryptoKeys: grpc.handleUnaryCall<user_pb.UpdateCryptoKeysRequest, user_pb.UpdateCryptoKeysResponse>;
}

export interface IUserServiceClient {
    registerUser(request: user_pb.RegisterUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.RegisterUserResponse) => void): grpc.ClientUnaryCall;
    registerUser(request: user_pb.RegisterUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.RegisterUserResponse) => void): grpc.ClientUnaryCall;
    registerUser(request: user_pb.RegisterUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.RegisterUserResponse) => void): grpc.ClientUnaryCall;
    updateCryptoKeys(request: user_pb.UpdateCryptoKeysRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateCryptoKeysResponse) => void): grpc.ClientUnaryCall;
    updateCryptoKeys(request: user_pb.UpdateCryptoKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateCryptoKeysResponse) => void): grpc.ClientUnaryCall;
    updateCryptoKeys(request: user_pb.UpdateCryptoKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateCryptoKeysResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public registerUser(request: user_pb.RegisterUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.RegisterUserResponse) => void): grpc.ClientUnaryCall;
    public registerUser(request: user_pb.RegisterUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.RegisterUserResponse) => void): grpc.ClientUnaryCall;
    public registerUser(request: user_pb.RegisterUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.RegisterUserResponse) => void): grpc.ClientUnaryCall;
    public updateCryptoKeys(request: user_pb.UpdateCryptoKeysRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateCryptoKeysResponse) => void): grpc.ClientUnaryCall;
    public updateCryptoKeys(request: user_pb.UpdateCryptoKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateCryptoKeysResponse) => void): grpc.ClientUnaryCall;
    public updateCryptoKeys(request: user_pb.UpdateCryptoKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateCryptoKeysResponse) => void): grpc.ClientUnaryCall;
}
