// package: invoice.v1
// file: invoice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as crypto_pb from "./crypto_pb";

export class Invoice extends jspb.Message { 
    getId(): string;
    setId(value: string): Invoice;
    getCryptoaddress(): string;
    setCryptoaddress(value: string): Invoice;
    getCoin(): crypto_pb.CoinType;
    setCoin(value: crypto_pb.CoinType): Invoice;
    getRequiredamount(): number;
    setRequiredamount(value: number): Invoice;
    getActualamount(): number;
    setActualamount(value: number): Invoice;
    getConfirmationsrequired(): number;
    setConfirmationsrequired(value: number): Invoice;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): Invoice;

    hasConfirmedat(): boolean;
    clearConfirmedat(): void;
    getConfirmedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setConfirmedat(value?: google_protobuf_timestamp_pb.Timestamp): Invoice;
    getStatus(): InvoiceStatusType;
    setStatus(value: InvoiceStatusType): Invoice;

    hasExpiresat(): boolean;
    clearExpiresat(): void;
    getExpiresat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiresat(value?: google_protobuf_timestamp_pb.Timestamp): Invoice;
    getTxid(): string;
    setTxid(value: string): Invoice;
    getUserid(): string;
    setUserid(value: string): Invoice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Invoice.AsObject;
    static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Invoice;
    static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
    export type AsObject = {
        id: string,
        cryptoaddress: string,
        coin: crypto_pb.CoinType,
        requiredamount: number,
        actualamount: number,
        confirmationsrequired: number,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        confirmedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        status: InvoiceStatusType,
        expiresat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        txid: string,
        userid: string,
    }
}

export class CreateInvoiceRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): CreateInvoiceRequest;
    getCoin(): crypto_pb.CoinType;
    setCoin(value: crypto_pb.CoinType): CreateInvoiceRequest;
    getAmount(): number;
    setAmount(value: number): CreateInvoiceRequest;
    getTimeout(): number;
    setTimeout(value: number): CreateInvoiceRequest;
    getConfirmations(): number;
    setConfirmations(value: number): CreateInvoiceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateInvoiceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateInvoiceRequest): CreateInvoiceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateInvoiceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateInvoiceRequest;
    static deserializeBinaryFromReader(message: CreateInvoiceRequest, reader: jspb.BinaryReader): CreateInvoiceRequest;
}

export namespace CreateInvoiceRequest {
    export type AsObject = {
        userid: string,
        coin: crypto_pb.CoinType,
        amount: number,
        timeout: number,
        confirmations: number,
    }
}

export class CreateInvoiceResponse extends jspb.Message { 
    getPaymentid(): string;
    setPaymentid(value: string): CreateInvoiceResponse;
    getAddress(): string;
    setAddress(value: string): CreateInvoiceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateInvoiceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateInvoiceResponse): CreateInvoiceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateInvoiceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateInvoiceResponse;
    static deserializeBinaryFromReader(message: CreateInvoiceResponse, reader: jspb.BinaryReader): CreateInvoiceResponse;
}

export namespace CreateInvoiceResponse {
    export type AsObject = {
        paymentid: string,
        address: string,
    }
}

export class InvoiceStatusStreamRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvoiceStatusStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InvoiceStatusStreamRequest): InvoiceStatusStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvoiceStatusStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvoiceStatusStreamRequest;
    static deserializeBinaryFromReader(message: InvoiceStatusStreamRequest, reader: jspb.BinaryReader): InvoiceStatusStreamRequest;
}

export namespace InvoiceStatusStreamRequest {
    export type AsObject = {
    }
}

export class InvoiceStatusStreamResponse extends jspb.Message { 

    hasInvoice(): boolean;
    clearInvoice(): void;
    getInvoice(): Invoice | undefined;
    setInvoice(value?: Invoice): InvoiceStatusStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvoiceStatusStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InvoiceStatusStreamResponse): InvoiceStatusStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvoiceStatusStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvoiceStatusStreamResponse;
    static deserializeBinaryFromReader(message: InvoiceStatusStreamResponse, reader: jspb.BinaryReader): InvoiceStatusStreamResponse;
}

export namespace InvoiceStatusStreamResponse {
    export type AsObject = {
        invoice?: Invoice.AsObject,
    }
}

export enum InvoiceStatusType {
    PENDING = 0,
    PENDING_MEMPOOL = 1,
    EXPIRED = 2,
    CONFIRMED = 3,
}
