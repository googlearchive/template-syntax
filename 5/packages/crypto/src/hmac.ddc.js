define(['dart_sdk', 'packages/crypto/src/digest_sink', 'packages/crypto/src/digest', 'packages/crypto/src/hash'], function(dart_sdk, digest_sink, digest, hash) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__digest_sink = digest_sink.src__digest_sink;
  const src__digest = digest.src__digest;
  const src__hash = hash.src__hash;
  const _root = Object.create(null);
  const src__hmac = Object.create(_root);
  const $length = dartx.length;
  const $setRange = dartx.setRange;
  const $_set = dartx._set;
  const $_get = dartx._get;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfDigest = () => (SinkOfDigest = dart.constFn(core.Sink$(src__digest.Digest)))();
  const _hash = Symbol('_hash');
  const _key = Symbol('_key');
  src__hmac.Hmac = class Hmac extends convert.Converter$(core.List$(core.int), src__digest.Digest) {
    convert(data) {
      ListOfint()._check(data);
      let innerSink = new src__digest_sink.DigestSink.new();
      let outerSink = this.startChunkedConversion(innerSink);
      outerSink.add(data);
      outerSink.close();
      return innerSink.value;
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return new src__hmac._HmacSink.new(sink, this[_hash], this[_key]);
    }
  };
  (src__hmac.Hmac.new = function(hash, key) {
    this[_hash] = hash;
    this[_key] = typed_data.Uint8List.new(hash.blockSize);
    src__hmac.Hmac.__proto__.new.call(this);
    if (dart.notNull(key[$length]) > dart.notNull(this[_hash].blockSize)) key = this[_hash].convert(key).bytes;
    this[_key][$setRange](0, key[$length], key);
  }).prototype = src__hmac.Hmac.prototype;
  dart.addTypeTests(src__hmac.Hmac);
  dart.setMethodSignature(src__hmac.Hmac, () => ({
    __proto__: dart.getMethods(src__hmac.Hmac.__proto__),
    convert: dart.fnType(src__digest.Digest, [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  dart.setFieldSignature(src__hmac.Hmac, () => ({
    __proto__: dart.getFields(src__hmac.Hmac.__proto__),
    [_hash]: dart.finalFieldType(src__hash.Hash),
    [_key]: dart.finalFieldType(typed_data.Uint8List)
  }));
  const _outerSink = Symbol('_outerSink');
  const _innerResultSink = Symbol('_innerResultSink');
  const _innerSink = Symbol('_innerSink');
  const _isClosed = Symbol('_isClosed');
  src__hmac._HmacSink = class _HmacSink extends convert.ByteConversionSink {
    add(data) {
      ListOfint()._check(data);
      if (dart.test(this[_isClosed])) dart.throw(new core.StateError.new('HMAC is closed'));
      this[_innerSink].add(data);
    }
    addSlice(data, start, end, isLast) {
      if (dart.test(this[_isClosed])) dart.throw(new core.StateError.new('HMAC is closed'));
      this[_innerSink].addSlice(data, start, end, isLast);
    }
    close() {
      if (dart.test(this[_isClosed])) return;
      this[_isClosed] = true;
      this[_innerSink].close();
      this[_outerSink].add(this[_innerResultSink].value.bytes);
      this[_outerSink].close();
    }
  };
  (src__hmac._HmacSink.new = function(sink, hash, key) {
    this[_innerResultSink] = new src__digest_sink.DigestSink.new();
    this[_innerSink] = null;
    this[_isClosed] = false;
    this[_outerSink] = hash.startChunkedConversion(sink);
    src__hmac._HmacSink.__proto__.new.call(this);
    this[_innerSink] = hash.startChunkedConversion(this[_innerResultSink]);
    let padding = typed_data.Uint8List.new(key[$length]);
    for (let i = 0; i < dart.notNull(padding[$length]); i++) {
      padding[$_set](i, (92 ^ dart.notNull(key[$_get](i))) >>> 0);
    }
    this[_outerSink].add(padding);
    for (let i = 0; i < dart.notNull(padding[$length]); i++) {
      padding[$_set](i, (54 ^ dart.notNull(key[$_get](i))) >>> 0);
    }
    this[_innerSink].add(padding);
  }).prototype = src__hmac._HmacSink.prototype;
  dart.addTypeTests(src__hmac._HmacSink);
  dart.setMethodSignature(src__hmac._HmacSink, () => ({
    __proto__: dart.getMethods(src__hmac._HmacSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    addSlice: dart.fnType(dart.void, [ListOfint(), core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hmac._HmacSink, () => ({
    __proto__: dart.getFields(src__hmac._HmacSink.__proto__),
    [_outerSink]: dart.finalFieldType(convert.ByteConversionSink),
    [_innerResultSink]: dart.finalFieldType(src__digest_sink.DigestSink),
    [_innerSink]: dart.fieldType(convert.ByteConversionSink),
    [_isClosed]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/crypto/src/hmac.ddc", {
    "package:crypto/src/hmac.dart": src__hmac
  }, '{"version":3,"sourceRoot":"","sources":["hmac.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;YAwCiB,IAAc;yBAAJ;AACvB,UAAI,YAAY,IAAI,+BAAU;AAC9B,UAAI,YAAY,2BAAsB,CAAC,SAAS;AAChD,eAAS,IAAI,CAAC,IAAI;AAClB,eAAS,MAAM;AACf,YAAO,UAAS,MAAM;IACxB;2BAG0C,IAAiB;4BAAJ;YACnD,KAAI,uBAAS,CAAC,IAAI,EAAE,WAAK,EAAE,UAAI;IAAC;;iCAtB/B,IAAS,EAAE,GAAa;IACvB,WAAK,GAAG,IAAI;IACZ,UAAI,GAAG,AAAI,wBAAS,CAAC,IAAI,UAAU;;AAEvC,QAAe,aAAX,GAAG,SAAO,iBAAG,WAAK,UAAU,GAAE,GAAG,GAAG,WAAK,QAAQ,CAAC,GAAG,OAAO;AAIhE,cAAI,WAAS,CAAC,GAAG,GAAG,SAAO,EAAE,GAAG;EAClC;;;;;;;;;;;;;;;;;QAiDS,IAAc;yBAAJ;AACjB,oBAAI,eAAS,GAAE,WAAM,IAAI,mBAAU,CAAC;AACpC,sBAAU,IAAI,CAAC,IAAI;IACrB;aAGc,IAAc,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AAC3D,oBAAI,eAAS,GAAE,WAAM,IAAI,mBAAU,CAAC;AACpC,sBAAU,SAAS,CAAC,IAAI,EAAE,KAAK,EAAE,GAAG,EAAE,MAAM;IAC9C;;AAIE,oBAAI,eAAS,GAAE;AACf,qBAAS,GAAG;AAEZ,sBAAU,MAAM;AAChB,sBAAU,IAAI,CAAC,sBAAgB,MAAM,MAAM;AAC3C,sBAAU,MAAM;IAClB;;sCAtCU,IAAiB,EAAE,IAAS,EAAE,GAAa;IAR/C,sBAAgB,GAAG,IAAI,+BAAU;IAGpB,gBAAU;IAGxB,eAAS,GAAG;IAGX,gBAAU,GAAG,IAAI,uBAAuB,CAAC,IAAI;;AACjD,oBAAU,GAAG,IAAI,uBAAuB,CAAC,sBAAgB;AAGzD,QAAI,UAAU,AAAI,wBAAS,CAAC,GAAG,SAAO;AACtC,aAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,OAAO,SAAO,GAAE,CAAC,IAAI;AACvC,aAAO,QAAC,CAAC,EAAI,CAAA,AAAK,kBAAE,GAAG,QAAC,CAAC;;AAE3B,oBAAU,IAAI,CAAC,OAAO;AAGtB,aAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,OAAO,SAAO,GAAE,CAAC,IAAI;AACvC,aAAO,QAAC,CAAC,EAAI,CAAA,AAAK,kBAAE,GAAG,QAAC,CAAC;;AAE3B,oBAAU,IAAI,CAAC,OAAO;EACxB","file":"hmac.ddc.js"}');
  // Exports:
  return {
    src__hmac: src__hmac
  };
});

//# sourceMappingURL=hmac.ddc.js.map
