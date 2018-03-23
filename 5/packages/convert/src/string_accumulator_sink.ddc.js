define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__string_accumulator_sink = Object.create(_root);
  const $substring = dartx.substring;
  const _buffer = Symbol('_buffer');
  const _isClosed = Symbol('_isClosed');
  src__string_accumulator_sink.StringAccumulatorSink = class StringAccumulatorSink extends convert.StringConversionSinkBase {
    get string() {
      return dart.toString(this[_buffer]);
    }
    get isClosed() {
      return this[_isClosed];
    }
    clear() {
      this[_buffer].clear();
    }
    add(chunk) {
      core.String._check(chunk);
      if (dart.test(this[_isClosed])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer].write(chunk);
    }
    addSlice(chunk, start, end, isLast) {
      if (dart.test(this[_isClosed])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer].write(chunk[$substring](start, end));
      if (dart.test(isLast)) this[_isClosed] = true;
    }
    close() {
      this[_isClosed] = true;
    }
  };
  (src__string_accumulator_sink.StringAccumulatorSink.new = function() {
    this[_buffer] = new core.StringBuffer.new();
    this[_isClosed] = false;
  }).prototype = src__string_accumulator_sink.StringAccumulatorSink.prototype;
  dart.addTypeTests(src__string_accumulator_sink.StringAccumulatorSink);
  dart.setMethodSignature(src__string_accumulator_sink.StringAccumulatorSink, () => ({
    __proto__: dart.getMethods(src__string_accumulator_sink.StringAccumulatorSink.__proto__),
    clear: dart.fnType(dart.void, []),
    add: dart.fnType(dart.void, [core.Object]),
    addSlice: dart.fnType(dart.void, [core.String, core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__string_accumulator_sink.StringAccumulatorSink, () => ({
    __proto__: dart.getGetters(src__string_accumulator_sink.StringAccumulatorSink.__proto__),
    string: dart.fnType(core.String, []),
    isClosed: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__string_accumulator_sink.StringAccumulatorSink, () => ({
    __proto__: dart.getFields(src__string_accumulator_sink.StringAccumulatorSink.__proto__),
    [_buffer]: dart.finalFieldType(core.StringBuffer),
    [_isClosed]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/convert/src/string_accumulator_sink.ddc", {
    "package:convert/src/string_accumulator_sink.dart": src__string_accumulator_sink
  }, '{"version":3,"sourceRoot":"","sources":["string_accumulator_sink.dart"],"names":[],"mappings":";;;;;;;;;;;;;2BAWuB,aAAO;IAAW;;YAIlB,gBAAS;;;AAO5B,mBAAO,MAAM;IACf;QAES,KAAY;yBAAL;AACd,oBAAI,eAAS,GAAE;AACb,mBAAM,IAAI,mBAAU,CAAC;;AAGvB,mBAAO,MAAM,CAAC,KAAK;IACrB;aAEc,KAAY,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AACzD,oBAAI,eAAS,GAAE;AACb,mBAAM,IAAI,mBAAU,CAAC;;AAGvB,mBAAO,MAAM,CAAC,KAAK,YAAU,CAAC,KAAK,EAAE,GAAG;AACxC,oBAAI,MAAM,GAAE,eAAS,GAAG;IAC1B;;AAGE,qBAAS,GAAG;IACd;;;IAhCM,aAAO,GAAG,IAAI,qBAAY;IAI5B,eAAS,GAAG;EA6BlB","file":"string_accumulator_sink.ddc.js"}');
  // Exports:
  return {
    src__string_accumulator_sink: src__string_accumulator_sink
  };
});

//# sourceMappingURL=string_accumulator_sink.ddc.js.map
