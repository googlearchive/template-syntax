define(['dart_sdk', 'packages/typed_data/typed_buffers', 'packages/convert/src/utils'], function(dart_sdk, typed_buffers, utils) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const src__utils = utils.src__utils;
  const _root = Object.create(null);
  const src__percent__decoder = Object.create(_root);
  const $codeUnits = dartx.codeUnits;
  const $asUint8List = dartx.asUint8List;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $padLeft = dartx.padLeft;
  const $toRadixString = dartx.toRadixString;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  let ListOfintAndintAndint__Toint = () => (ListOfintAndintAndint__Toint = dart.constFn(dart.fnType(core.int, [ListOfint(), core.int, core.int, typed_buffers$.Uint8Buffer])))();
  let intAndListOfintAndint__Tovoid = () => (intAndListOfintAndint__Tovoid = dart.constFn(dart.fnType(dart.void, [core.int, ListOfint(), core.int, core.int])))();
  dart.defineLazy(src__percent__decoder, {
    /*src__percent__decoder.percentDecoder*/get percentDecoder() {
      return dart.const(new src__percent__decoder.PercentDecoder.__());
    },
    /*src__percent__decoder._lastPercent*/get _lastPercent() {
      return -1;
    }
  });
  src__percent__decoder.PercentDecoder = class PercentDecoder extends convert.Converter$(core.String, core.List$(core.int)) {
    convert(string) {
      core.String._check(string);
      let buffer = new typed_buffers$.Uint8Buffer.new();
      let lastDigit = src__percent__decoder._decode(string[$codeUnits], 0, string.length, buffer);
      if (lastDigit != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", string, string.length));
      }
      return buffer.buffer[$asUint8List](0, buffer.length);
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new src__percent__decoder._PercentDecoderSink.new(sink);
    }
  };
  (src__percent__decoder.PercentDecoder.__ = function() {
    src__percent__decoder.PercentDecoder.__proto__.new.call(this);
  }).prototype = src__percent__decoder.PercentDecoder.prototype;
  dart.addTypeTests(src__percent__decoder.PercentDecoder);
  dart.setMethodSignature(src__percent__decoder.PercentDecoder, () => ({
    __proto__: dart.getMethods(src__percent__decoder.PercentDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.StringConversionSink, [core.Object])
  }));
  const _sink = Symbol('_sink');
  const _lastDigit = Symbol('_lastDigit');
  const _close = Symbol('_close');
  src__percent__decoder._PercentDecoderSink = class _PercentDecoderSink extends convert.StringConversionSinkBase {
    addSlice(string, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, string.length);
      if (start == end) {
        if (dart.test(isLast)) this[_close](string, end);
        return;
      }
      let buffer = new typed_buffers$.Uint8Buffer.new();
      let codeUnits = string[$codeUnits];
      if (this[_lastDigit] === -1) {
        this[_lastDigit] = 16 * dart.notNull(src__utils.digitForCodeUnit(codeUnits, start));
        start = dart.notNull(start) + 1;
        if (start == end) {
          if (dart.test(isLast)) this[_close](string, end);
          return;
        }
      }
      if (this[_lastDigit] != null) {
        buffer.add(dart.notNull(this[_lastDigit]) + dart.notNull(src__utils.digitForCodeUnit(codeUnits, start)));
        start = dart.notNull(start) + 1;
      }
      this[_lastDigit] = src__percent__decoder._decode(codeUnits, start, end, buffer);
      this[_sink].add(buffer.buffer[$asUint8List](0, buffer.length));
      if (dart.test(isLast)) this[_close](string, end);
    }
    asUtf8Sink(allowMalformed) {
      return new src__percent__decoder._PercentDecoderByteSink.new(this[_sink]);
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
  (src__percent__decoder._PercentDecoderSink.new = function(sink) {
    this[_lastDigit] = null;
    this[_sink] = sink;
  }).prototype = src__percent__decoder._PercentDecoderSink.prototype;
  dart.addTypeTests(src__percent__decoder._PercentDecoderSink);
  dart.setMethodSignature(src__percent__decoder._PercentDecoderSink, () => ({
    __proto__: dart.getMethods(src__percent__decoder._PercentDecoderSink.__proto__),
    addSlice: dart.fnType(dart.void, [core.String, core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [core.String, core.int])
  }));
  dart.setFieldSignature(src__percent__decoder._PercentDecoderSink, () => ({
    __proto__: dart.getFields(src__percent__decoder._PercentDecoderSink.__proto__),
    [_sink]: dart.finalFieldType(SinkOfListOfint()),
    [_lastDigit]: dart.fieldType(core.int)
  }));
  src__percent__decoder._PercentDecoderByteSink = class _PercentDecoderByteSink extends convert.ByteConversionSinkBase {
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
      let buffer = new typed_buffers$.Uint8Buffer.new();
      if (this[_lastDigit] === -1) {
        this[_lastDigit] = 16 * dart.notNull(src__utils.digitForCodeUnit(chunk, start));
        start = dart.notNull(start) + 1;
        if (start == end) {
          if (dart.test(isLast)) this[_close](chunk, end);
          return;
        }
      }
      if (this[_lastDigit] != null) {
        buffer.add(dart.notNull(this[_lastDigit]) + dart.notNull(src__utils.digitForCodeUnit(chunk, start)));
        start = dart.notNull(start) + 1;
      }
      this[_lastDigit] = src__percent__decoder._decode(chunk, start, end, buffer);
      this[_sink].add(buffer.buffer[$asUint8List](0, buffer.length));
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
  (src__percent__decoder._PercentDecoderByteSink.new = function(sink) {
    this[_lastDigit] = null;
    this[_sink] = sink;
    src__percent__decoder._PercentDecoderByteSink.__proto__.new.call(this);
  }).prototype = src__percent__decoder._PercentDecoderByteSink.prototype;
  dart.addTypeTests(src__percent__decoder._PercentDecoderByteSink);
  dart.setMethodSignature(src__percent__decoder._PercentDecoderByteSink, () => ({
    __proto__: dart.getMethods(src__percent__decoder._PercentDecoderByteSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [ListOfint(), core.int])
  }));
  dart.setFieldSignature(src__percent__decoder._PercentDecoderByteSink, () => ({
    __proto__: dart.getFields(src__percent__decoder._PercentDecoderByteSink.__proto__),
    [_sink]: dart.finalFieldType(SinkOfListOfint()),
    [_lastDigit]: dart.fieldType(core.int)
  }));
  src__percent__decoder._decode = function(codeUnits, start, end, buffer) {
    let codeUnitOr = 0;
    let sliceStart = start;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let codeUnit = codeUnits[$_get](i);
      if (codeUnits[$_get](i) !== 37) {
        codeUnitOr = (dart.notNull(codeUnitOr) | dart.notNull(codeUnit)) >>> 0;
        continue;
      }
      if (dart.notNull(i) > dart.notNull(sliceStart)) {
        src__percent__decoder._checkForInvalidCodeUnit(codeUnitOr, codeUnits, sliceStart, i);
        buffer.addAll(codeUnits, sliceStart, i);
      }
      i = dart.notNull(i) + 1;
      if (dart.notNull(i) >= dart.notNull(end)) return -1;
      let firstDigit = src__utils.digitForCodeUnit(codeUnits, i);
      i = dart.notNull(i) + 1;
      if (dart.notNull(i) >= dart.notNull(end)) return 16 * dart.notNull(firstDigit);
      let secondDigit = src__utils.digitForCodeUnit(codeUnits, i);
      buffer.add(16 * dart.notNull(firstDigit) + dart.notNull(secondDigit));
      sliceStart = dart.notNull(i) + 1;
    }
    if (dart.notNull(end) > dart.notNull(sliceStart)) {
      src__percent__decoder._checkForInvalidCodeUnit(codeUnitOr, codeUnits, sliceStart, end);
      if (start == sliceStart) {
        buffer.addAll(codeUnits);
      } else {
        buffer.addAll(codeUnits, sliceStart, end);
      }
    }
    return null;
  };
  dart.fn(src__percent__decoder._decode, ListOfintAndintAndint__Toint());
  src__percent__decoder._checkForInvalidCodeUnit = function(codeUnitOr, codeUnits, start, end) {
    if (dart.notNull(codeUnitOr) >= 0 && dart.notNull(codeUnitOr) <= 127) return;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let codeUnit = codeUnits[$_get](i);
      if (dart.notNull(codeUnit) >= 0 && dart.notNull(codeUnit) <= 127) continue;
      dart.throw(new core.FormatException.new("Non-ASCII code unit " + dart.str`U+${codeUnit[$toRadixString](16)[$padLeft](4, '0')}`, codeUnits, i));
    }
  };
  dart.fn(src__percent__decoder._checkForInvalidCodeUnit, intAndListOfintAndint__Tovoid());
  dart.trackLibraries("packages/convert/src/percent/decoder.ddc", {
    "package:convert/src/percent/decoder.dart": src__percent__decoder
  }, '{"version":3,"sourceRoot":"","sources":["decoder.dart"],"names":[],"mappings":"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","file":"decoder.ddc.js"}');
  // Exports:
  return {
    src__percent__decoder: src__percent__decoder
  };
});

//# sourceMappingURL=decoder.ddc.js.map
