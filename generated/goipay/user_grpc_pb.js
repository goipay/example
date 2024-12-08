// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var crypto_pb = require('./crypto_pb.js');

function serialize_user_v1_RegisterUserRequest(arg) {
  if (!(arg instanceof user_pb.RegisterUserRequest)) {
    throw new Error('Expected argument of type user.v1.RegisterUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_RegisterUserRequest(buffer_arg) {
  return user_pb.RegisterUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_RegisterUserResponse(arg) {
  if (!(arg instanceof user_pb.RegisterUserResponse)) {
    throw new Error('Expected argument of type user.v1.RegisterUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_RegisterUserResponse(buffer_arg) {
  return user_pb.RegisterUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_UpdateCryptoKeysRequest(arg) {
  if (!(arg instanceof user_pb.UpdateCryptoKeysRequest)) {
    throw new Error('Expected argument of type user.v1.UpdateCryptoKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_UpdateCryptoKeysRequest(buffer_arg) {
  return user_pb.UpdateCryptoKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_UpdateCryptoKeysResponse(arg) {
  if (!(arg instanceof user_pb.UpdateCryptoKeysResponse)) {
    throw new Error('Expected argument of type user.v1.UpdateCryptoKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_UpdateCryptoKeysResponse(buffer_arg) {
  return user_pb.UpdateCryptoKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  registerUser: {
    path: '/user.v1.UserService/RegisterUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.RegisterUserRequest,
    responseType: user_pb.RegisterUserResponse,
    requestSerialize: serialize_user_v1_RegisterUserRequest,
    requestDeserialize: deserialize_user_v1_RegisterUserRequest,
    responseSerialize: serialize_user_v1_RegisterUserResponse,
    responseDeserialize: deserialize_user_v1_RegisterUserResponse,
  },
  updateCryptoKeys: {
    path: '/user.v1.UserService/UpdateCryptoKeys',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateCryptoKeysRequest,
    responseType: user_pb.UpdateCryptoKeysResponse,
    requestSerialize: serialize_user_v1_UpdateCryptoKeysRequest,
    requestDeserialize: deserialize_user_v1_UpdateCryptoKeysRequest,
    responseSerialize: serialize_user_v1_UpdateCryptoKeysResponse,
    responseDeserialize: deserialize_user_v1_UpdateCryptoKeysResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
