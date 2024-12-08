// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var invoice_pb = require('./invoice_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var crypto_pb = require('./crypto_pb.js');

function serialize_invoice_v1_CreateInvoiceRequest(arg) {
  if (!(arg instanceof invoice_pb.CreateInvoiceRequest)) {
    throw new Error('Expected argument of type invoice.v1.CreateInvoiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_invoice_v1_CreateInvoiceRequest(buffer_arg) {
  return invoice_pb.CreateInvoiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_invoice_v1_CreateInvoiceResponse(arg) {
  if (!(arg instanceof invoice_pb.CreateInvoiceResponse)) {
    throw new Error('Expected argument of type invoice.v1.CreateInvoiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_invoice_v1_CreateInvoiceResponse(buffer_arg) {
  return invoice_pb.CreateInvoiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_invoice_v1_InvoiceStatusStreamRequest(arg) {
  if (!(arg instanceof invoice_pb.InvoiceStatusStreamRequest)) {
    throw new Error('Expected argument of type invoice.v1.InvoiceStatusStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_invoice_v1_InvoiceStatusStreamRequest(buffer_arg) {
  return invoice_pb.InvoiceStatusStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_invoice_v1_InvoiceStatusStreamResponse(arg) {
  if (!(arg instanceof invoice_pb.InvoiceStatusStreamResponse)) {
    throw new Error('Expected argument of type invoice.v1.InvoiceStatusStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_invoice_v1_InvoiceStatusStreamResponse(buffer_arg) {
  return invoice_pb.InvoiceStatusStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var InvoiceServiceService = exports.InvoiceServiceService = {
  createInvoice: {
    path: '/invoice.v1.InvoiceService/CreateInvoice',
    requestStream: false,
    responseStream: false,
    requestType: invoice_pb.CreateInvoiceRequest,
    responseType: invoice_pb.CreateInvoiceResponse,
    requestSerialize: serialize_invoice_v1_CreateInvoiceRequest,
    requestDeserialize: deserialize_invoice_v1_CreateInvoiceRequest,
    responseSerialize: serialize_invoice_v1_CreateInvoiceResponse,
    responseDeserialize: deserialize_invoice_v1_CreateInvoiceResponse,
  },
  invoiceStatusStream: {
    path: '/invoice.v1.InvoiceService/InvoiceStatusStream',
    requestStream: false,
    responseStream: true,
    requestType: invoice_pb.InvoiceStatusStreamRequest,
    responseType: invoice_pb.InvoiceStatusStreamResponse,
    requestSerialize: serialize_invoice_v1_InvoiceStatusStreamRequest,
    requestDeserialize: deserialize_invoice_v1_InvoiceStatusStreamRequest,
    responseSerialize: serialize_invoice_v1_InvoiceStatusStreamResponse,
    responseDeserialize: deserialize_invoice_v1_InvoiceStatusStreamResponse,
  },
};

exports.InvoiceServiceClient = grpc.makeGenericClientConstructor(InvoiceServiceService);
