// source: crypto.proto
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

goog.exportSymbol('proto.crypto.v1.CoinType', null, global);
goog.exportSymbol('proto.crypto.v1.XmrKeys', null, global);
goog.exportSymbol('proto.crypto.v1.XmrKeysUpdateRequest', null, global);
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
proto.crypto.v1.XmrKeysUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.crypto.v1.XmrKeysUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.crypto.v1.XmrKeysUpdateRequest.displayName = 'proto.crypto.v1.XmrKeysUpdateRequest';
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
proto.crypto.v1.XmrKeys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.crypto.v1.XmrKeys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.crypto.v1.XmrKeys.displayName = 'proto.crypto.v1.XmrKeys';
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
proto.crypto.v1.XmrKeysUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.crypto.v1.XmrKeysUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.crypto.v1.XmrKeysUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.crypto.v1.XmrKeysUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    privviewkey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pubspendkey: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.crypto.v1.XmrKeysUpdateRequest}
 */
proto.crypto.v1.XmrKeysUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.crypto.v1.XmrKeysUpdateRequest;
  return proto.crypto.v1.XmrKeysUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.crypto.v1.XmrKeysUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.crypto.v1.XmrKeysUpdateRequest}
 */
proto.crypto.v1.XmrKeysUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivviewkey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubspendkey(value);
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
proto.crypto.v1.XmrKeysUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.crypto.v1.XmrKeysUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.crypto.v1.XmrKeysUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.crypto.v1.XmrKeysUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrivviewkey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPubspendkey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string privViewKey = 1;
 * @return {string}
 */
proto.crypto.v1.XmrKeysUpdateRequest.prototype.getPrivviewkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.crypto.v1.XmrKeysUpdateRequest} returns this
 */
proto.crypto.v1.XmrKeysUpdateRequest.prototype.setPrivviewkey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string pubSpendKey = 2;
 * @return {string}
 */
proto.crypto.v1.XmrKeysUpdateRequest.prototype.getPubspendkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.crypto.v1.XmrKeysUpdateRequest} returns this
 */
proto.crypto.v1.XmrKeysUpdateRequest.prototype.setPubspendkey = function(value) {
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
proto.crypto.v1.XmrKeys.prototype.toObject = function(opt_includeInstance) {
  return proto.crypto.v1.XmrKeys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.crypto.v1.XmrKeys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.crypto.v1.XmrKeys.toObject = function(includeInstance, msg) {
  var f, obj = {
    privviewkey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pubspendkey: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.crypto.v1.XmrKeys}
 */
proto.crypto.v1.XmrKeys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.crypto.v1.XmrKeys;
  return proto.crypto.v1.XmrKeys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.crypto.v1.XmrKeys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.crypto.v1.XmrKeys}
 */
proto.crypto.v1.XmrKeys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivviewkey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubspendkey(value);
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
proto.crypto.v1.XmrKeys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.crypto.v1.XmrKeys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.crypto.v1.XmrKeys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.crypto.v1.XmrKeys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrivviewkey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPubspendkey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string privViewKey = 1;
 * @return {string}
 */
proto.crypto.v1.XmrKeys.prototype.getPrivviewkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.crypto.v1.XmrKeys} returns this
 */
proto.crypto.v1.XmrKeys.prototype.setPrivviewkey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string pubSpendKey = 2;
 * @return {string}
 */
proto.crypto.v1.XmrKeys.prototype.getPubspendkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.crypto.v1.XmrKeys} returns this
 */
proto.crypto.v1.XmrKeys.prototype.setPubspendkey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.crypto.v1.CoinType = {
  XMR: 0,
  BTC: 1,
  LTC: 2,
  ETH: 3,
  TON: 4
};

goog.object.extend(exports, proto.crypto.v1);
