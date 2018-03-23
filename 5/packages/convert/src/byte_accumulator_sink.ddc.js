define(['dart_sdk', 'packages/typed_data/typed_buffers'], function(dart_sdk, typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const _root = Object.create(null);
  const src__byte_accumulator_sink = Object.create(_root);
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  const _buffer = Symbol('_buffer');
  const _isClosed = Symbol('_isClosed');
  src__byte_accumulator_sink.ByteAccumulatorSink = class ByteAccumulatorSink extends convert.ByteConversionSinkBase {
    get bytes() {
      return typed_data.Uint8List.view(this[_buffer].buffer, 0, this[_buffer].length);
    }
    get isClosed() {
      return this[_isClosed];
    }
    clear() {
      this[_buffer].clear();
    }
    add(bytes) {
      ListOfint()._check(bytes);
      if (dart.test(this[_isClosed])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer].addAll(bytes);
    }
    addSlice(chunk, start, end, isLast) {
      if (dart.test(this[_isClosed])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer].addAll(chunk, start, end);
      if (dart.test(isLast)) this[_isClosed] = true;
    }
    close() {
      this[_isClosed] = true;
    }
  };
  (src__byte_accumulator_sink.ByteAccumulatorSink.new = function() {
    this[_buffer] = new typed_buffers$.Uint8Buffer.new();
    this[_isClosed] = false;
    src__byte_accumulator_sink.ByteAccumulatorSink.__proto__.new.call(this);
  }).prototype = src__byte_accumulator_sink.ByteAccumulatorSink.prototype;
  dart.addTypeTests(src__byte_accumulator_sink.ByteAccumulatorSink);
  dart.setMethodSignature(src__byte_accumulator_sink.ByteAccumulatorSink, () => ({
    __proto__: dart.getMethods(src__byte_accumulator_sink.ByteAccumulatorSink.__proto__),
    clear: dart.fnType(dart.void, []),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__byte_accumulator_sink.ByteAccumulatorSink, () => ({
    __proto__: dart.getGetters(src__byte_accumulator_sink.ByteAccumulatorSink.__proto__),
    bytes: dart.fnType(typed_data.Uint8List, []),
    isClosed: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__byte_accumulator_sink.ByteAccumulatorSink, () => ({
    __proto__: dart.getFields(src__byte_accumulator_sink.ByteAccumulatorSink.__proto__),
    [_buffer]: dart.finalFieldType(typed_buffers$.Uint8Buffer),
    [_isClosed]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/convert/src/byte_accumulator_sink.ddc", {
    "package:convert/src/byte_accumulator_sink.dart": src__byte_accumulator_sink
  }, '{"version":3,"sourceRoot":"","sources":["byte_accumulator_sink.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;YAiByB,AAAI,0BAAc,CAAC,aAAO,OAAO,EAAE,GAAG,aAAO,OAAO;IAAC;;YAKvD,gBAAS;;;AAO5B,mBAAO,MAAM;IACf;QAES,KAAe;yBAAL;AACjB,oBAAI,eAAS,GAAE;AACb,mBAAM,IAAI,mBAAU,CAAC;;AAGvB,mBAAO,OAAO,CAAC,KAAK;IACtB;aAEc,KAAe,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AAC5D,oBAAI,eAAS,GAAE;AACb,mBAAM,IAAI,mBAAU,CAAC;;AAGvB,mBAAO,OAAO,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG;AAChC,oBAAI,MAAM,GAAE,eAAS,GAAG;IAC1B;;AAGE,qBAAS,GAAG;IACd;;;IAhCM,aAAO,GAAG,IAAI,8BAAW;IAI3B,eAAS,GAAG;;EA6BlB","file":"byte_accumulator_sink.ddc.js"}');
  // Exports:
  return {
    src__byte_accumulator_sink: src__byte_accumulator_sink
  };
});

//# sourceMappingURL=byte_accumulator_sink.ddc.js.map
