// package: user.v1
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as crypto_pb from "./crypto_pb";

export class RegisterUserRequest extends jspb.Message { 

    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): string | undefined;
    setUserid(value: string): RegisterUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
    static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

export namespace RegisterUserRequest {
    export type AsObject = {
        userid?: string,
    }
}

export class RegisterUserResponse extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): RegisterUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterUserResponse): RegisterUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterUserResponse;
    static deserializeBinaryFromReader(message: RegisterUserResponse, reader: jspb.BinaryReader): RegisterUserResponse;
}

export namespace RegisterUserResponse {
    export type AsObject = {
        userid: string,
    }
}

export class UpdateCryptoKeysRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): UpdateCryptoKeysRequest;

    hasXmrreq(): boolean;
    clearXmrreq(): void;
    getXmrreq(): crypto_pb.XmrKeysUpdateRequest | undefined;
    setXmrreq(value?: crypto_pb.XmrKeysUpdateRequest): UpdateCryptoKeysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCryptoKeysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCryptoKeysRequest): UpdateCryptoKeysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCryptoKeysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCryptoKeysRequest;
    static deserializeBinaryFromReader(message: UpdateCryptoKeysRequest, reader: jspb.BinaryReader): UpdateCryptoKeysRequest;
}

export namespace UpdateCryptoKeysRequest {
    export type AsObject = {
        userid: string,
        xmrreq?: crypto_pb.XmrKeysUpdateRequest.AsObject,
    }
}

export class UpdateCryptoKeysResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCryptoKeysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCryptoKeysResponse): UpdateCryptoKeysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCryptoKeysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCryptoKeysResponse;
    static deserializeBinaryFromReader(message: UpdateCryptoKeysResponse, reader: jspb.BinaryReader): UpdateCryptoKeysResponse;
}

export namespace UpdateCryptoKeysResponse {
    export type AsObject = {
    }
}

export class GetCryptoKeysRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): GetCryptoKeysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCryptoKeysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCryptoKeysRequest): GetCryptoKeysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCryptoKeysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCryptoKeysRequest;
    static deserializeBinaryFromReader(message: GetCryptoKeysRequest, reader: jspb.BinaryReader): GetCryptoKeysRequest;
}

export namespace GetCryptoKeysRequest {
    export type AsObject = {
        userid: string,
    }
}

export class GetCryptoKeysResponse extends jspb.Message { 

    hasXmrkeys(): boolean;
    clearXmrkeys(): void;
    getXmrkeys(): crypto_pb.XmrKeys | undefined;
    setXmrkeys(value?: crypto_pb.XmrKeys): GetCryptoKeysResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCryptoKeysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCryptoKeysResponse): GetCryptoKeysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCryptoKeysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCryptoKeysResponse;
    static deserializeBinaryFromReader(message: GetCryptoKeysResponse, reader: jspb.BinaryReader): GetCryptoKeysResponse;
}

export namespace GetCryptoKeysResponse {
    export type AsObject = {
        xmrkeys?: crypto_pb.XmrKeys.AsObject,
    }
}
