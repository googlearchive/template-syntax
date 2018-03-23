define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__percent__encoder = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $toRadixString = dartx.toRadixString;
  const $abs = dartx.abs;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfString = () => (SinkOfString = dart.constFn(core.Sink$(core.String)))();
  let ListOfintAndintAndintToString = () => (ListOfintAndintAndintToString = dart.constFn(dart.fnType(core.String, [ListOfint(), core.int, core.int])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  dart.defineLazy(src__percent__encoder, {
    /*src__percent__encoder.percentEncoder*/get percentEncoder() {
      return dart.const(new src__percent__encoder.PercentEncoder.__());
    }
  });
  src__percent__encoder.PercentEncoder = class PercentEncoder extends convert.Converter$(core.List$(core.int), core.String) {
    convert(bytes) {
      ListOfint()._check(bytes);
      return src__percent__encoder._convert(bytes, 0, bytes[$length]);
    }
    startChunkedConversion(sink) {
      SinkOfString()._check(sink);
      return new src__percent__encoder._PercentEncoderSink.new(sink);
    }
  };
  (src__percent__encoder.PercentEncoder.__ = function() {
    src__percent__encoder.PercentEncoder.__proto__.new.call(this);
  }).prototype = src__percent__encoder.PercentEncoder.prototype;
  dart.addTypeTests(src__percent__encoder.PercentEncoder);
  dart.setMethodSignature(src__percent__encoder.PercentEncoder, () => ({
    __proto__: dart.getMethods(src__percent__encoder.PercentEncoder.__proto__),
    convert: dart.fnType(core.String, [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  const _sink = Symbol('_sink');
  src__percent__encoder._PercentEncoderSink = class _PercentEncoderSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      this[_sink].add(src__percent__encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink].add(src__percent__encoder._convert(chunk, start, end));
      if (dart.test(isLast)) this[_sink].close();
    }
    close() {
      this[_sink].close();
    }
  };
  (src__percent__encoder._PercentEncoderSink.new = function(sink) {
    this[_sink] = sink;
    src__percent__encoder._PercentEncoderSink.__proto__.new.call(this);
  }).prototype = src__percent__encoder._PercentEncoderSink.prototype;
  dart.addTypeTests(src__percent__encoder._PercentEncoderSink);
  dart.setMethodSignature(src__percent__encoder._PercentEncoderSink, () => ({
    __proto__: dart.getMethods(src__percent__encoder._PercentEncoderSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__percent__encoder._PercentEncoderSink, () => ({
    __proto__: dart.getFields(src__percent__encoder._PercentEncoderSink.__proto__),
    [_sink]: dart.finalFieldType(SinkOfString())
  }));
  src__percent__encoder._convert = function(bytes, start, end) {
    let buffer = new core.StringBuffer.new();
    let byteOr = 0;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      byteOr = (dart.notNull(byteOr) | dart.notNull(byte)) >>> 0;
      let letter = (32 | dart.notNull(byte)) >>> 0;
      if (letter >= 97 && letter <= 122 || dart.notNull(byte) >= 48 && dart.notNull(byte) <= 57 || byte === 45 || byte === 46 || byte === 95 || byte === 126) {
        buffer.writeCharCode(byte);
        continue;
      }
      buffer.writeCharCode(37);
      buffer.writeCharCode(src__percent__encoder._codeUnitForDigit((dart.notNull(byte) & 240) >>> 4));
      buffer.writeCharCode(src__percent__encoder._codeUnitForDigit(dart.notNull(byte) & 15));
    }
    if (dart.notNull(byteOr) >= 0 && dart.notNull(byteOr) <= 255) return buffer.toString();
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      if (dart.notNull(byte) >= 0 && dart.notNull(byte) <= 255) continue;
      dart.throw(new core.FormatException.new(dart.str`Invalid byte ${dart.notNull(byte) < 0 ? "-" : ""}0x${byte[$abs]()[$toRadixString](16)}.`, bytes, i));
    }
    dart.throw('unreachable');
  };
  dart.fn(src__percent__encoder._convert, ListOfintAndintAndintToString());
  src__percent__encoder._codeUnitForDigit = function(digit) {
    return dart.notNull(digit) < 10 ? dart.notNull(digit) + 48 : dart.notNull(digit) + 65 - 10;
  };
  dart.fn(src__percent__encoder._codeUnitForDigit, intToint());
  dart.trackLibraries("packages/convert/src/percent/encoder.ddc", {
    "package:convert/src/percent/encoder.dart": src__percent__encoder
  }, '{"version":3,"sourceRoot":"","sources":["encoder.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAWM,oCAAc;YAAG,gBAAM,uCAAgB;;;;YAa5B,KAAe;yBAAL;YAAU,+BAAQ,CAAC,KAAK,EAAE,GAAG,KAAK,SAAO;IAAC;2BAEzB,IAAiB;4BAAJ;YACnD,KAAI,6CAAmB,CAAC,IAAI;IAAC;;;;EALT;;;;;;;;;QAef,KAAe;yBAAL;AACjB,iBAAK,IAAI,CAAC,8BAAQ,CAAC,KAAK,EAAE,GAAG,KAAK,SAAO;IAC3C;aAEc,KAAe,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AAC5D,qBAAU,gBAAgB,CAAC,KAAK,EAAE,GAAG,EAAE,KAAK,SAAO;AACnD,iBAAK,IAAI,CAAC,8BAAQ,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG;AACpC,oBAAI,MAAM,GAAE,WAAK,MAAM;IACzB;;AAGE,iBAAK,MAAM;IACb;;4DAdyB,IAAK;IAAL,WAAK,GAAL,IAAK;;EAAC;;;;;;;;;;;4CAiBjB,KAAe,EAAE,KAAS,EAAE,GAAO;AACjD,QAAI,SAAS,IAAI,qBAAY;AAK7B,QAAI,SAAS;AACb,aAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IA3DhC,GA2DoC;AAChC,UAAI,OAAO,KAAK,QAAC,CAAC;AAClB,YAAM,GAAN,CA7DJ,aA6DI,MAAM,iBAAI,IAAI;AAMd,UAAI,SAAS,CAAA,AAAK,kBAAE,IAAI;AACxB,UAAK,AAAO,MAAD,IAAI,EAAE,IAAI,AAAO,MAAD,IAAI,GAAE,IACvB,aAAL,IAAI,KAAI,EAAE,IAAS,aAAL,IAAI,KAAI,EAAE,IACzB,IAAI,KAAI,EAAK,IACb,IAAI,KAAI,EAAI,IACZ,IAAI,KAAI,EAAW,IACnB,IAAI,KAAI,GAAM,EAAE;AAElB,cAAM,cAAc,CAAC,IAAI;AACzB;;AAGF,YAAM,cAAc,CAAC,EAAQ;AAK7B,YAAM,cAAc,CAAC,uCAAiB,CAAe,CAAR,aAAL,IAAI,IAAG,SAAS;AACxD,YAAM,cAAc,CAAC,uCAAiB,CAAM,aAAL,IAAI,IAAG;;AAGhD,QAAW,aAAP,MAAM,KAAI,KAAY,aAAP,MAAM,KAAI,KAAK,MAAO,OAAM,SAAS;AAGxD,aAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IA3FhC,GA2FoC;AAChC,UAAI,OAAO,KAAK,QAAC,CAAC;AAClB,UAAS,aAAL,IAAI,KAAI,KAAU,aAAL,IAAI,KAAI,KAAM;AAC/B,iBAAM,IAAI,wBAAe,CACrB,wBAAgB,AAAK,aAAL,IAAI,IAAG,IAAI,MAAM,OAAO,IAAI,MAAI,kBAAgB,CAAC,QACjE,KAAK,EAAE,CAAC;;AAGd,eAAM;EACR;;qDAIsB,KAAS;UAAK,AAAM,cAAN,KAAK,IAAG,KAAW,aAAN,KAAK,IAAG,EAAE,GAAS,AAAK,aAAX,KAAK,IAAG,EAAE,GAAG;EAAE","file":"encoder.ddc.js"}');
  // Exports:
  return {
    src__percent__encoder: src__percent__encoder
  };
});

//# sourceMappingURL=encoder.ddc.js.map
