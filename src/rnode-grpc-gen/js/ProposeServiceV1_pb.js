/* eslint-disable */
// source: ProposeServiceV1.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var ServiceError_pb = require('./ServiceError_pb.js');
goog.object.extend(proto, ServiceError_pb);
var ProposeServiceCommon_pb = require('./ProposeServiceCommon_pb.js');
goog.object.extend(proto, ProposeServiceCommon_pb);
var scalapb_scalapb_pb = require('./scalapb/scalapb_pb.js');
goog.object.extend(proto, scalapb_scalapb_pb);
goog.exportSymbol('proto.casper.v1.ProposeResponse', null, global);
goog.exportSymbol('proto.casper.v1.ProposeResponse.MessageCase', null, global);
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
proto.casper.v1.ProposeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.casper.v1.ProposeResponse.oneofGroups_);
};
goog.inherits(proto.casper.v1.ProposeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.casper.v1.ProposeResponse.displayName = 'proto.casper.v1.ProposeResponse';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.casper.v1.ProposeResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.casper.v1.ProposeResponse.MessageCase = {
  MESSAGE_NOT_SET: 0,
  ERROR: 1,
  RESULT: 2
};

/**
 * @return {proto.casper.v1.ProposeResponse.MessageCase}
 */
proto.casper.v1.ProposeResponse.prototype.getMessageCase = function() {
  return /** @type {proto.casper.v1.ProposeResponse.MessageCase} */(jspb.Message.computeOneofCase(this, proto.casper.v1.ProposeResponse.oneofGroups_[0]));
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
proto.casper.v1.ProposeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.casper.v1.ProposeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.casper.v1.ProposeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.casper.v1.ProposeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && ServiceError_pb.ServiceError.toObject(includeInstance, f),
    result: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.casper.v1.ProposeResponse}
 */
proto.casper.v1.ProposeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.casper.v1.ProposeResponse;
  return proto.casper.v1.ProposeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.casper.v1.ProposeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.casper.v1.ProposeResponse}
 */
proto.casper.v1.ProposeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ServiceError_pb.ServiceError;
      reader.readMessage(value,ServiceError_pb.ServiceError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
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
proto.casper.v1.ProposeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.casper.v1.ProposeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.casper.v1.ProposeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.casper.v1.ProposeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ServiceError_pb.ServiceError.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ServiceError error = 1;
 * @return {?proto.ServiceError}
 */
proto.casper.v1.ProposeResponse.prototype.getError = function() {
  return /** @type{?proto.ServiceError} */ (
    jspb.Message.getWrapperField(this, ServiceError_pb.ServiceError, 1));
};


/**
 * @param {?proto.ServiceError|undefined} value
 * @return {!proto.casper.v1.ProposeResponse} returns this
*/
proto.casper.v1.ProposeResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.casper.v1.ProposeResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.casper.v1.ProposeResponse} returns this
 */
proto.casper.v1.ProposeResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.casper.v1.ProposeResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string result = 2;
 * @return {string}
 */
proto.casper.v1.ProposeResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.casper.v1.ProposeResponse} returns this
 */
proto.casper.v1.ProposeResponse.prototype.setResult = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.casper.v1.ProposeResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.casper.v1.ProposeResponse} returns this
 */
proto.casper.v1.ProposeResponse.prototype.clearResult = function() {
  return jspb.Message.setOneofField(this, 2, proto.casper.v1.ProposeResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.casper.v1.ProposeResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.casper.v1);
