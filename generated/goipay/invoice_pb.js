// source: invoice.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var crypto_pb = require('./crypto_pb.js');
goog.object.extend(proto, crypto_pb);
goog.exportSymbol('proto.invoice.v1.CreateInvoiceRequest', null, global);
goog.exportSymbol('proto.invoice.v1.CreateInvoiceResponse', null, global);
goog.exportSymbol('proto.invoice.v1.Invoice', null, global);
goog.exportSymbol('proto.invoice.v1.InvoiceStatusStreamRequest', null, global);
goog.exportSymbol('proto.invoice.v1.InvoiceStatusStreamResponse', null, global);
goog.exportSymbol('proto.invoice.v1.InvoiceStatusType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.invoice.v1.Invoice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.invoice.v1.Invoice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.invoice.v1.Invoice.displayName = 'proto.invoice.v1.Invoice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.invoice.v1.CreateInvoiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.invoice.v1.CreateInvoiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.invoice.v1.CreateInvoiceRequest.displayName = 'proto.invoice.v1.CreateInvoiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.invoice.v1.CreateInvoiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.invoice.v1.CreateInvoiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.invoice.v1.CreateInvoiceResponse.displayName = 'proto.invoice.v1.CreateInvoiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.invoice.v1.InvoiceStatusStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.invoice.v1.InvoiceStatusStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.invoice.v1.InvoiceStatusStreamRequest.displayName = 'proto.invoice.v1.InvoiceStatusStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.invoice.v1.InvoiceStatusStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.invoice.v1.InvoiceStatusStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.invoice.v1.InvoiceStatusStreamResponse.displayName = 'proto.invoice.v1.InvoiceStatusStreamResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.invoice.v1.Invoice.prototype.toObject = function(opt_includeInstance) {
  return proto.invoice.v1.Invoice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.invoice.v1.Invoice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.invoice.v1.Invoice.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cryptoaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    requiredamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    actualamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    confirmationsrequired: jspb.Message.getFieldWithDefault(msg, 6, 0),
    createdat: (f = msg.getCreatedat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    confirmedat: (f = msg.getConfirmedat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 9, 0),
    expiresat: (f = msg.getExpiresat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    txid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.invoice.v1.Invoice}
 */
proto.invoice.v1.Invoice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.invoice.v1.Invoice;
  return proto.invoice.v1.Invoice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.invoice.v1.Invoice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.invoice.v1.Invoice}
 */
proto.invoice.v1.Invoice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCryptoaddress(value);
      break;
    case 3:
      var value = /** @type {!proto.crypto.v1.CoinType} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRequiredamount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setActualamount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConfirmationsrequired(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedat(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConfirmedat(value);
      break;
    case 9:
      var value = /** @type {!proto.invoice.v1.InvoiceStatusType} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiresat(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.invoice.v1.Invoice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.invoice.v1.Invoice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.invoice.v1.Invoice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.invoice.v1.Invoice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCryptoaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getRequiredamount();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getActualamount();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getConfirmationsrequired();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getCreatedat();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConfirmedat();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getExpiresat();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.invoice.v1.Invoice.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.invoice.v1.Invoice} returns this
 */
proto.invoice.v1.Invoice.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cryptoAddress = 2;
 * @return {string}
 */
proto.invoice.v1.Invoice.prototype.getCryptoaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.invoice.v1.Invoice} returns this
 */
proto.invoice.v1.Invoice.prototype.setCryptoaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional crypto.v1.CoinType coin = 3;
 * @return {!proto.crypto.v1.CoinType}
 */
proto.invoice.v1.Invoice.prototype.getCoin = function() {
  return /** @type {!proto.crypto.v1.CoinType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.crypto.v1.CoinType} value
 * @return {!proto.invoice.v1.Invoice} returns this
 */
proto.invoice.v1.Invoice.prototype.setCoin = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional double requiredAmount = 4;
 * @return {number}
 */
proto.invoice.v1.Invoice.prototype.getRequiredamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.invoice.v1.Invoice} returns this
 */
proto.invoice.v1.Invoice.prototype.setRequiredamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double actualAmount = 5;
 * @return {number}
 */
proto.invoice.v1.Invoice.prototype.getActualamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.invoice.v1.Invoice} returns this
 */
proto.invoice.v1.Invoice.prototype.setActualamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint32 confirmationsRequired = 6;
 * @return {number}
 */
proto.invoice.v1.Invoice.prototype.getConfirmationsrequired = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.invoice.v1.Invoice} returns this
 */
proto.invoice.v1.Invoice.prototype.setConfirmationsrequired = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp createdAt = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.invoice.v1.Invoice.prototype.getCreatedat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.invoice.v1.Invoice} returns this
*/
proto.invoice.v1.Invoice.prototype.setCreatedat = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.invoice.v1.Invoice} returns this
 */
proto.invoice.v1.Invoice.prototype.clearCreatedat = function() {
  return this.setCreatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.invoice.v1.Invoice.prototype.hasCreatedat = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp confirmedAt = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.invoice.v1.Invoice.prototype.getConfirmedat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.invoice.v1.Invoice} returns this
*/
proto.invoice.v1.Invoice.prototype.setConfirmedat = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.invoice.v1.Invoice} returns this
 */
proto.invoice.v1.Invoice.prototype.clearConfirmedat = function() {
  return this.setConfirmedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.invoice.v1.Invoice.prototype.hasConfirmedat = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional InvoiceStatusType status = 9;
 * @return {!proto.invoice.v1.InvoiceStatusType}
 */
proto.invoice.v1.Invoice.prototype.getStatus = function() {
  return /** @type {!proto.invoice.v1.InvoiceStatusType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.invoice.v1.InvoiceStatusType} value
 * @return {!proto.invoice.v1.Invoice} returns this
 */
proto.invoice.v1.Invoice.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp expiresAt = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.invoice.v1.Invoice.prototype.getExpiresat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.invoice.v1.Invoice} returns this
*/
proto.invoice.v1.Invoice.prototype.setExpiresat = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.invoice.v1.Invoice} returns this
 */
proto.invoice.v1.Invoice.prototype.clearExpiresat = function() {
  return this.setExpiresat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.invoice.v1.Invoice.prototype.hasExpiresat = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string txId = 11;
 * @return {string}
 */
proto.invoice.v1.Invoice.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.invoice.v1.Invoice} returns this
 */
proto.invoice.v1.Invoice.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string userId = 12;
 * @return {string}
 */
proto.invoice.v1.Invoice.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.invoice.v1.Invoice} returns this
 */
proto.invoice.v1.Invoice.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.invoice.v1.CreateInvoiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.invoice.v1.CreateInvoiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.invoice.v1.CreateInvoiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.invoice.v1.CreateInvoiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    timeout: jspb.Message.getFieldWithDefault(msg, 4, 0),
    confirmations: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.invoice.v1.CreateInvoiceRequest}
 */
proto.invoice.v1.CreateInvoiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.invoice.v1.CreateInvoiceRequest;
  return proto.invoice.v1.CreateInvoiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.invoice.v1.CreateInvoiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.invoice.v1.CreateInvoiceRequest}
 */
proto.invoice.v1.CreateInvoiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {!proto.crypto.v1.CoinType} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeout(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConfirmations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.invoice.v1.CreateInvoiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.invoice.v1.CreateInvoiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.invoice.v1.CreateInvoiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.invoice.v1.CreateInvoiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getConfirmations();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string userId = 1;
 * @return {string}
 */
proto.invoice.v1.CreateInvoiceRequest.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.invoice.v1.CreateInvoiceRequest} returns this
 */
proto.invoice.v1.CreateInvoiceRequest.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional crypto.v1.CoinType coin = 2;
 * @return {!proto.crypto.v1.CoinType}
 */
proto.invoice.v1.CreateInvoiceRequest.prototype.getCoin = function() {
  return /** @type {!proto.crypto.v1.CoinType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.crypto.v1.CoinType} value
 * @return {!proto.invoice.v1.CreateInvoiceRequest} returns this
 */
proto.invoice.v1.CreateInvoiceRequest.prototype.setCoin = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double amount = 3;
 * @return {number}
 */
proto.invoice.v1.CreateInvoiceRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.invoice.v1.CreateInvoiceRequest} returns this
 */
proto.invoice.v1.CreateInvoiceRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional uint64 timeout = 4;
 * @return {number}
 */
proto.invoice.v1.CreateInvoiceRequest.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.invoice.v1.CreateInvoiceRequest} returns this
 */
proto.invoice.v1.CreateInvoiceRequest.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 confirmations = 5;
 * @return {number}
 */
proto.invoice.v1.CreateInvoiceRequest.prototype.getConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.invoice.v1.CreateInvoiceRequest} returns this
 */
proto.invoice.v1.CreateInvoiceRequest.prototype.setConfirmations = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.invoice.v1.CreateInvoiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.invoice.v1.CreateInvoiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.invoice.v1.CreateInvoiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.invoice.v1.CreateInvoiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.invoice.v1.CreateInvoiceResponse}
 */
proto.invoice.v1.CreateInvoiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.invoice.v1.CreateInvoiceResponse;
  return proto.invoice.v1.CreateInvoiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.invoice.v1.CreateInvoiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.invoice.v1.CreateInvoiceResponse}
 */
proto.invoice.v1.CreateInvoiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.invoice.v1.CreateInvoiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.invoice.v1.CreateInvoiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.invoice.v1.CreateInvoiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.invoice.v1.CreateInvoiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string paymentId = 1;
 * @return {string}
 */
proto.invoice.v1.CreateInvoiceResponse.prototype.getPaymentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.invoice.v1.CreateInvoiceResponse} returns this
 */
proto.invoice.v1.CreateInvoiceResponse.prototype.setPaymentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.invoice.v1.CreateInvoiceResponse.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.invoice.v1.CreateInvoiceResponse} returns this
 */
proto.invoice.v1.CreateInvoiceResponse.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.invoice.v1.InvoiceStatusStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.invoice.v1.InvoiceStatusStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.invoice.v1.InvoiceStatusStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.invoice.v1.InvoiceStatusStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.invoice.v1.InvoiceStatusStreamRequest}
 */
proto.invoice.v1.InvoiceStatusStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.invoice.v1.InvoiceStatusStreamRequest;
  return proto.invoice.v1.InvoiceStatusStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.invoice.v1.InvoiceStatusStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.invoice.v1.InvoiceStatusStreamRequest}
 */
proto.invoice.v1.InvoiceStatusStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.invoice.v1.InvoiceStatusStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.invoice.v1.InvoiceStatusStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.invoice.v1.InvoiceStatusStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.invoice.v1.InvoiceStatusStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.invoice.v1.InvoiceStatusStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.invoice.v1.InvoiceStatusStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.invoice.v1.InvoiceStatusStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.invoice.v1.InvoiceStatusStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invoice: (f = msg.getInvoice()) && proto.invoice.v1.Invoice.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.invoice.v1.InvoiceStatusStreamResponse}
 */
proto.invoice.v1.InvoiceStatusStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.invoice.v1.InvoiceStatusStreamResponse;
  return proto.invoice.v1.InvoiceStatusStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.invoice.v1.InvoiceStatusStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.invoice.v1.InvoiceStatusStreamResponse}
 */
proto.invoice.v1.InvoiceStatusStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.invoice.v1.Invoice;
      reader.readMessage(value,proto.invoice.v1.Invoice.deserializeBinaryFromReader);
      msg.setInvoice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.invoice.v1.InvoiceStatusStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.invoice.v1.InvoiceStatusStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.invoice.v1.InvoiceStatusStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.invoice.v1.InvoiceStatusStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvoice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.invoice.v1.Invoice.serializeBinaryToWriter
    );
  }
};


/**
 * optional Invoice invoice = 1;
 * @return {?proto.invoice.v1.Invoice}
 */
proto.invoice.v1.InvoiceStatusStreamResponse.prototype.getInvoice = function() {
  return /** @type{?proto.invoice.v1.Invoice} */ (
    jspb.Message.getWrapperField(this, proto.invoice.v1.Invoice, 1));
};


/**
 * @param {?proto.invoice.v1.Invoice|undefined} value
 * @return {!proto.invoice.v1.InvoiceStatusStreamResponse} returns this
*/
proto.invoice.v1.InvoiceStatusStreamResponse.prototype.setInvoice = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.invoice.v1.InvoiceStatusStreamResponse} returns this
 */
proto.invoice.v1.InvoiceStatusStreamResponse.prototype.clearInvoice = function() {
  return this.setInvoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.invoice.v1.InvoiceStatusStreamResponse.prototype.hasInvoice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.invoice.v1.InvoiceStatusType = {
  PENDING: 0,
  PENDING_MEMPOOL: 1,
  EXPIRED: 2,
  CONFIRMED: 3
};

goog.object.extend(exports, proto.invoice.v1);
