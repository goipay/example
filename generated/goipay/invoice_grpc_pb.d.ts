// package: invoice.v1
// file: invoice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as invoice_pb from "./invoice_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as crypto_pb from "./crypto_pb";

interface IInvoiceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createInvoice: IInvoiceServiceService_ICreateInvoice;
    invoiceStatusStream: IInvoiceServiceService_IInvoiceStatusStream;
}

interface IInvoiceServiceService_ICreateInvoice extends grpc.MethodDefinition<invoice_pb.CreateInvoiceRequest, invoice_pb.CreateInvoiceResponse> {
    path: "/invoice.v1.InvoiceService/CreateInvoice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<invoice_pb.CreateInvoiceRequest>;
    requestDeserialize: grpc.deserialize<invoice_pb.CreateInvoiceRequest>;
    responseSerialize: grpc.serialize<invoice_pb.CreateInvoiceResponse>;
    responseDeserialize: grpc.deserialize<invoice_pb.CreateInvoiceResponse>;
}
interface IInvoiceServiceService_IInvoiceStatusStream extends grpc.MethodDefinition<invoice_pb.InvoiceStatusStreamRequest, invoice_pb.InvoiceStatusStreamResponse> {
    path: "/invoice.v1.InvoiceService/InvoiceStatusStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<invoice_pb.InvoiceStatusStreamRequest>;
    requestDeserialize: grpc.deserialize<invoice_pb.InvoiceStatusStreamRequest>;
    responseSerialize: grpc.serialize<invoice_pb.InvoiceStatusStreamResponse>;
    responseDeserialize: grpc.deserialize<invoice_pb.InvoiceStatusStreamResponse>;
}

export const InvoiceServiceService: IInvoiceServiceService;

export interface IInvoiceServiceServer extends grpc.UntypedServiceImplementation {
    createInvoice: grpc.handleUnaryCall<invoice_pb.CreateInvoiceRequest, invoice_pb.CreateInvoiceResponse>;
    invoiceStatusStream: grpc.handleServerStreamingCall<invoice_pb.InvoiceStatusStreamRequest, invoice_pb.InvoiceStatusStreamResponse>;
}

export interface IInvoiceServiceClient {
    createInvoice(request: invoice_pb.CreateInvoiceRequest, callback: (error: grpc.ServiceError | null, response: invoice_pb.CreateInvoiceResponse) => void): grpc.ClientUnaryCall;
    createInvoice(request: invoice_pb.CreateInvoiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: invoice_pb.CreateInvoiceResponse) => void): grpc.ClientUnaryCall;
    createInvoice(request: invoice_pb.CreateInvoiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: invoice_pb.CreateInvoiceResponse) => void): grpc.ClientUnaryCall;
    invoiceStatusStream(request: invoice_pb.InvoiceStatusStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<invoice_pb.InvoiceStatusStreamResponse>;
    invoiceStatusStream(request: invoice_pb.InvoiceStatusStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<invoice_pb.InvoiceStatusStreamResponse>;
}

export class InvoiceServiceClient extends grpc.Client implements IInvoiceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createInvoice(request: invoice_pb.CreateInvoiceRequest, callback: (error: grpc.ServiceError | null, response: invoice_pb.CreateInvoiceResponse) => void): grpc.ClientUnaryCall;
    public createInvoice(request: invoice_pb.CreateInvoiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: invoice_pb.CreateInvoiceResponse) => void): grpc.ClientUnaryCall;
    public createInvoice(request: invoice_pb.CreateInvoiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: invoice_pb.CreateInvoiceResponse) => void): grpc.ClientUnaryCall;
    public invoiceStatusStream(request: invoice_pb.InvoiceStatusStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<invoice_pb.InvoiceStatusStreamResponse>;
    public invoiceStatusStream(request: invoice_pb.InvoiceStatusStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<invoice_pb.InvoiceStatusStreamResponse>;
}
