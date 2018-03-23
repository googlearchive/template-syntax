define(['dart_sdk', 'packages/convert/src/utils'], function(dart_sdk, utils) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const _root = Object.create(null);
  const src__hex__decoder = Object.create(_root);
  const $isEven = dartx.isEven;
  const $truncate = dartx.truncate;
  const $codeUnits = dartx.codeUnits;
  const $_set = dartx._set;
  const $length = dartx.length;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  let ListOfintAndintAndint__Toint = () => (ListOfintAndintAndint__Toint = dart.constFn(dart.fnType(core.int, [ListOfint(), core.int, core.int, ListOfint(), core.int])))();
  dart.defineLazy(src__hex__decoder, {
    /*src__hex__decoder.hexDecoder*/get hexDecoder() {
      return dart.const(new src__hex__decoder.HexDecoder.__());
    }
  });
  src__hex__decoder.HexDecoder = class HexDecoder extends convert.Converter$(core.String, core.List$(core.int)) {
    convert(string) {
      core.String._check(string);
      if (!string.length[$isEven]) {
        dart.throw(new core.FormatException.new("Invalid input length, must be even.", string, string.length));
      }
      let bytes = typed_data.Uint8List.new((string.length / 2)[$truncate]());
      src__hex__decoder._decode(string[$codeUnits], 0, string.length, bytes, 0);
      return bytes;
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new src__hex__decoder._HexDecoderSink.new(sink);
    }
  };
  (src__hex__decoder.HexDecoder.__ = function() {
    src__hex__decoder.HexDecoder.__proto__.new.call(this);
  }).prototype = src__hex__decoder.HexDecoder.prototype;
  dart.addTypeTests(src__hex__decoder.HexDecoder);
  dart.setMethodSignature(src__hex__decoder.HexDecoder, () => ({
    __proto__: dart.getMethods(src__hex__decoder.HexDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.StringConversionSink, [core.Object])
  }));
  const _sink = Symbol('_sink');
  const _lastDigit = Symbol('_lastDigit');
  const _close = Symbol('_close');
  src__hex__decoder._HexDecoderSink = class _HexDecoderSink extends convert.StringConversionSinkBase {
    addSlice(string, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, string.length);
      if (start == end) {
        if (dart.test(isLast)) this[_close](string, end);
        return;
      }
      let codeUnits = string[$codeUnits];
      let bytes = null;
      let bytesStart = null;
      if (this[_lastDigit] == null) {
        bytes = typed_data.Uint8List.new(((dart.notNull(end) - dart.notNull(start)) / 2)[$truncate]());
        bytesStart = 0;
      } else {
        let hexPairs = ((dart.notNull(end) - dart.notNull(start) - 1) / 2)[$truncate]();
        bytes = typed_data.Uint8List.new(1 + hexPairs);
        bytes[$_set](0, dart.notNull(this[_lastDigit]) + dart.notNull(src__utils.digitForCodeUnit(codeUnits, start)));
        start = dart.notNull(start) + 1;
        bytesStart = 1;
      }
      this[_lastDigit] = src__hex__decoder._decode(codeUnits, start, end, bytes, bytesStart);
      this[_sink].add(bytes);
      if (dart.test(isLast)) this[_close](string, end);
    }
    asUtf8Sink(allowMalformed) {
      return new src__hex__decoder._HexDecoderByteSink.new(this[_sink]);
    }
    close() {
      return this[_close]();
    }
    [_close](string, index) {
      if (string === void 0) string = null;
      if (index === void 0) index = null;
      if (this[_lastDigit] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", string, index));
      }
      this[_sink].close();
    }
  };
  (src__hex__decoder._HexDecoderSink.new = function(sink) {
    this[_lastDigit] = null;
    this[_sink] = sink;
  }).prototype = src__hex__decoder._HexDecoderSink.prototype;
  dart.addTypeTests(src__hex__decoder._HexDecoderSink);
  dart.setMethodSignature(src__hex__decoder._HexDecoderSink, () => ({
    __proto__: dart.getMethods(src__hex__decoder._HexDecoderSink.__proto__),
    addSlice: dart.fnType(dart.void, [core.String, core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [core.String, core.int])
  }));
  dart.setFieldSignature(src__hex__decoder._HexDecoderSink, () => ({
    __proto__: dart.getFields(src__hex__decoder._HexDecoderSink.__proto__),
    [_sink]: dart.finalFieldType(SinkOfListOfint()),
    [_lastDigit]: dart.fieldType(core.int)
  }));
  src__hex__decoder._HexDecoderByteSink = class _HexDecoderByteSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      if (start == end) {
        if (dart.test(isLast)) this[_close](chunk, end);
        return;
      }
      let bytes = null;
      let bytesStart = null;
      if (this[_lastDigit] == null) {
        bytes = typed_data.Uint8List.new(((dart.notNull(end) - dart.notNull(start)) / 2)[$truncate]());
        bytesStart = 0;
      } else {
        let hexPairs = ((dart.notNull(end) - dart.notNull(start) - 1) / 2)[$truncate]();
        bytes = typed_data.Uint8List.new(1 + hexPairs);
        bytes[$_set](0, dart.notNull(this[_lastDigit]) + dart.notNull(src__utils.digitForCodeUnit(chunk, start)));
        start = dart.notNull(start) + 1;
        bytesStart = 1;
      }
      this[_lastDigit] = src__hex__decoder._decode(chunk, start, end, bytes, bytesStart);
      this[_sink].add(bytes);
      if (dart.test(isLast)) this[_close](chunk, end);
    }
    close() {
      return this[_close]();
    }
    [_close](chunk, index) {
      if (chunk === void 0) chunk = null;
      if (index === void 0) index = null;
      if (this[_lastDigit] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", chunk, index));
      }
      this[_sink].close();
    }
  };
  (src__hex__decoder._HexDecoderByteSink.new = function(sink) {
    this[_lastDigit] = null;
    this[_sink] = sink;
    src__hex__decoder._HexDecoderByteSink.__proto__.new.call(this);
  }).prototype = src__hex__decoder._HexDecoderByteSink.prototype;
  dart.addTypeTests(src__hex__decoder._HexDecoderByteSink);
  dart.setMethodSignature(src__hex__decoder._HexDecoderByteSink, () => ({
    __proto__: dart.getMethods(src__hex__decoder._HexDecoderByteSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [ListOfint(), core.int])
  }));
  dart.setFieldSignature(src__hex__decoder._HexDecoderByteSink, () => ({
    __proto__: dart.getFields(src__hex__decoder._HexDecoderByteSink.__proto__),
    [_sink]: dart.finalFieldType(SinkOfListOfint()),
    [_lastDigit]: dart.fieldType(core.int)
  }));
  src__hex__decoder._decode = function(codeUnits, sourceStart, sourceEnd, destination, destinationStart) {
    let destinationIndex = destinationStart;
    for (let i = sourceStart; dart.notNull(i) < dart.notNull(sourceEnd) - 1; i = dart.notNull(i) + 2) {
      let firstDigit = src__utils.digitForCodeUnit(codeUnits, i);
      let secondDigit = src__utils.digitForCodeUnit(codeUnits, dart.notNull(i) + 1);
      destination[$_set]((() => {
        let x = destinationIndex;
        destinationIndex = dart.notNull(x) + 1;
        return x;
      })(), 16 * dart.notNull(firstDigit) + dart.notNull(secondDigit));
    }
    if ((dart.notNull(sourceEnd) - dart.notNull(sourceStart))[$isEven]) return null;
    return 16 * dart.notNull(src__utils.digitForCodeUnit(codeUnits, dart.notNull(sourceEnd) - 1));
  };
  dart.fn(src__hex__decoder._decode, ListOfintAndintAndint__Toint());
  dart.trackLibraries("packages/convert/src/hex/decoder.ddc", {
    "package:convert/src/hex/decoder.dart": src__hex__decoder
  }, '{"version":3,"sourceRoot":"","sources":["decoder.dart"],"names":[],"mappings":"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","file":"decoder.ddc.js"}');
  // Exports:
  return {
    src__hex__decoder: src__hex__decoder
  };
});

//# sourceMappingURL=decoder.ddc.js.map
