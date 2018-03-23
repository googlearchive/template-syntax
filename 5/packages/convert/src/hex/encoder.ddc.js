define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__hex__encoder = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $toRadixString = dartx.toRadixString;
  const $abs = dartx.abs;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfString = () => (SinkOfString = dart.constFn(core.Sink$(core.String)))();
  let ListOfintAndintAndintToString = () => (ListOfintAndintAndintToString = dart.constFn(dart.fnType(core.String, [ListOfint(), core.int, core.int])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  dart.defineLazy(src__hex__encoder, {
    /*src__hex__encoder.hexEncoder*/get hexEncoder() {
      return dart.const(new src__hex__encoder.HexEncoder.__());
    }
  });
  src__hex__encoder.HexEncoder = class HexEncoder extends convert.Converter$(core.List$(core.int), core.String) {
    convert(bytes) {
      ListOfint()._check(bytes);
      return src__hex__encoder._convert(bytes, 0, bytes[$length]);
    }
    startChunkedConversion(sink) {
      SinkOfString()._check(sink);
      return new src__hex__encoder._HexEncoderSink.new(sink);
    }
  };
  (src__hex__encoder.HexEncoder.__ = function() {
    src__hex__encoder.HexEncoder.__proto__.new.call(this);
  }).prototype = src__hex__encoder.HexEncoder.prototype;
  dart.addTypeTests(src__hex__encoder.HexEncoder);
  dart.setMethodSignature(src__hex__encoder.HexEncoder, () => ({
    __proto__: dart.getMethods(src__hex__encoder.HexEncoder.__proto__),
    convert: dart.fnType(core.String, [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  const _sink = Symbol('_sink');
  src__hex__encoder._HexEncoderSink = class _HexEncoderSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      this[_sink].add(src__hex__encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink].add(src__hex__encoder._convert(chunk, start, end));
      if (dart.test(isLast)) this[_sink].close();
    }
    close() {
      this[_sink].close();
    }
  };
  (src__hex__encoder._HexEncoderSink.new = function(sink) {
    this[_sink] = sink;
    src__hex__encoder._HexEncoderSink.__proto__.new.call(this);
  }).prototype = src__hex__encoder._HexEncoderSink.prototype;
  dart.addTypeTests(src__hex__encoder._HexEncoderSink);
  dart.setMethodSignature(src__hex__encoder._HexEncoderSink, () => ({
    __proto__: dart.getMethods(src__hex__encoder._HexEncoderSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hex__encoder._HexEncoderSink, () => ({
    __proto__: dart.getFields(src__hex__encoder._HexEncoderSink.__proto__),
    [_sink]: dart.finalFieldType(SinkOfString())
  }));
  src__hex__encoder._convert = function(bytes, start, end) {
    let buffer = typed_data.Uint8List.new((dart.notNull(end) - dart.notNull(start)) * 2);
    let bufferIndex = 0;
    let byteOr = 0;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      byteOr = (dart.notNull(byteOr) | dart.notNull(byte)) >>> 0;
      buffer[$_set](bufferIndex++, src__hex__encoder._codeUnitForDigit((dart.notNull(byte) & 240) >>> 4));
      buffer[$_set](bufferIndex++, src__hex__encoder._codeUnitForDigit(dart.notNull(byte) & 15));
    }
    if (dart.notNull(byteOr) >= 0 && dart.notNull(byteOr) <= 255) return core.String.fromCharCodes(buffer);
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      if (dart.notNull(byte) >= 0 && dart.notNull(byte) <= 255) continue;
      dart.throw(new core.FormatException.new(dart.str`Invalid byte ${dart.notNull(byte) < 0 ? "-" : ""}0x${byte[$abs]()[$toRadixString](16)}.`, bytes, i));
    }
    dart.throw('unreachable');
  };
  dart.fn(src__hex__encoder._convert, ListOfintAndintAndintToString());
  src__hex__encoder._codeUnitForDigit = function(digit) {
    return dart.notNull(digit) < 10 ? dart.notNull(digit) + 48 : dart.notNull(digit) + 97 - 10;
  };
  dart.fn(src__hex__encoder._codeUnitForDigit, intToint());
  dart.trackLibraries("packages/convert/src/hex/encoder.ddc", {
    "package:convert/src/hex/encoder.dart": src__hex__encoder
  }, '{"version":3,"sourceRoot":"","sources":["encoder.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAYM,4BAAU;YAAG,gBAAM,+BAAY;;;;YASpB,KAAe;yBAAL;YAAU,2BAAQ,CAAC,KAAK,EAAE,GAAG,KAAK,SAAO;IAAC;2BAEzB,IAAiB;4BAAJ;YACnD,KAAI,qCAAe,CAAC,IAAI;IAAC;;;;EALT;;;;;;;;;QAeX,KAAe;yBAAL;AACjB,iBAAK,IAAI,CAAC,0BAAQ,CAAC,KAAK,EAAE,GAAG,KAAK,SAAO;IAC3C;aAEc,KAAe,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AAC5D,qBAAU,gBAAgB,CAAC,KAAK,EAAE,GAAG,EAAE,KAAK,SAAO;AACnD,iBAAK,IAAI,CAAC,0BAAQ,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG;AACpC,oBAAI,MAAM,GAAE,WAAK,MAAM;IACzB;;AAGE,iBAAK,MAAM;IACb;;oDAdqB,IAAK;IAAL,WAAK,GAAL,IAAK;;EAAC;;;;;;;;;;;wCAiBb,KAAe,EAAE,KAAS,EAAE,GAAO;AAIjD,QAAI,SAAS,AAAI,wBAAS,CAAe,CAAT,aAAJ,GAAG,iBAAG,KAAK,KAAI;AAC3C,QAAI,cAAc;AAKlB,QAAI,SAAS;AACb,aAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IA5DhC,GA4DoC;AAChC,UAAI,OAAO,KAAK,QAAC,CAAC;AAClB,YAAM,GAAN,CA9DJ,aA8DI,MAAM,iBAAI,IAAI;AAKd,YAAM,QAAC,WAAW,IAAM,mCAAiB,CAAe,CAAR,aAAL,IAAI,IAAG,SAAS;AAC3D,YAAM,QAAC,WAAW,IAAM,mCAAiB,CAAM,aAAL,IAAI,IAAG;;AAGnD,QAAW,aAAP,MAAM,KAAI,KAAY,aAAP,MAAM,KAAI,KAAK,MAAO,AAAI,0BAAoB,CAAC,MAAM;AAGxE,aAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IA1EhC,GA0EoC;AAChC,UAAI,OAAO,KAAK,QAAC,CAAC;AAClB,UAAS,aAAL,IAAI,KAAI,KAAU,aAAL,IAAI,KAAI,KAAM;AAC/B,iBAAM,IAAI,wBAAe,CACrB,wBAAgB,AAAK,aAAL,IAAI,IAAG,IAAI,MAAM,OAAO,IAAI,MAAI,kBAAgB,CAAC,QACjE,KAAK,EAAE,CAAC;;AAGd,eAAM;EACR;;iDAIsB,KAAS;UAAK,AAAM,cAAN,KAAK,IAAG,KAAW,aAAN,KAAK,IAAG,EAAE,GAAS,AAAK,aAAX,KAAK,IAAG,EAAE,GAAG;EAAE","file":"encoder.ddc.js"}');
  // Exports:
  return {
    src__hex__encoder: src__hex__encoder
  };
});

//# sourceMappingURL=encoder.ddc.js.map
