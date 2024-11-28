// package: crypto.v1
// file: crypto.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class XmrKeysUpdateRequest extends jspb.Message { 
    getPrivviewkey(): string;
    setPrivviewkey(value: string): XmrKeysUpdateRequest;
    getPubspendkey(): string;
    setPubspendkey(value: string): XmrKeysUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XmrKeysUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: XmrKeysUpdateRequest): XmrKeysUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XmrKeysUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XmrKeysUpdateRequest;
    static deserializeBinaryFromReader(message: XmrKeysUpdateRequest, reader: jspb.BinaryReader): XmrKeysUpdateRequest;
}

export namespace XmrKeysUpdateRequest {
    export type AsObject = {
        privviewkey: string,
        pubspendkey: string,
    }
}

export class XmrKeys extends jspb.Message { 
    getPrivviewkey(): string;
    setPrivviewkey(value: string): XmrKeys;
    getPubspendkey(): string;
    setPubspendkey(value: string): XmrKeys;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XmrKeys.AsObject;
    static toObject(includeInstance: boolean, msg: XmrKeys): XmrKeys.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XmrKeys, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XmrKeys;
    static deserializeBinaryFromReader(message: XmrKeys, reader: jspb.BinaryReader): XmrKeys;
}

export namespace XmrKeys {
    export type AsObject = {
        privviewkey: string,
        pubspendkey: string,
    }
}

export enum CoinType {
    XMR = 0,
    BTC = 1,
    LTC = 2,
    ETH = 3,
    TON = 4,
}
