define(['dart_sdk', 'packages/crypto/src/digest', 'packages/crypto/src/hash', 'packages/crypto/src/utils', 'packages/crypto/src/hash_sink'], function(dart_sdk, digest, hash, utils, hash_sink) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__digest = digest.src__digest;
  const src__hash = hash.src__hash;
  const src__utils = utils.src__utils;
  const src__hash_sink = hash_sink.src__hash_sink;
  const _root = Object.create(null);
  const src__sha1 = Object.create(_root);
  const $_set = dartx._set;
  const $length = dartx.length;
  const $_get = dartx._get;
  let SinkOfDigest = () => (SinkOfDigest = dart.constFn(core.Sink$(src__digest.Digest)))();
  dart.defineLazy(src__sha1, {
    /*src__sha1.sha1*/get sha1() {
      return new src__sha1.Sha1.__();
    }
  });
  src__sha1.Sha1 = class Sha1 extends src__hash.Hash {
    get blockSize() {
      return this[blockSize];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return convert.ByteConversionSink.from(new src__sha1._Sha1Sink.new(sink));
    }
  };
  (src__sha1.Sha1.__ = function() {
    this[blockSize] = 16 * 4;
    src__sha1.Sha1.__proto__.new.call(this);
  }).prototype = src__sha1.Sha1.prototype;
  dart.addTypeTests(src__sha1.Sha1);
  const blockSize = Symbol("Sha1.blockSize");
  dart.setMethodSignature(src__sha1.Sha1, () => ({
    __proto__: dart.getMethods(src__sha1.Sha1.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  dart.setFieldSignature(src__sha1.Sha1, () => ({
    __proto__: dart.getFields(src__sha1.Sha1.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  const _extended = Symbol('_extended');
  src__sha1._Sha1Sink = class _Sha1Sink extends src__hash_sink.HashSink {
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed();
      let a = this.digest[$_get](0);
      let b = this.digest[$_get](1);
      let c = this.digest[$_get](2);
      let d = this.digest[$_get](3);
      let e = this.digest[$_get](4);
      for (let i = 0; i < 80; i++) {
        if (i < 16) {
          this[_extended][$_set](i, chunk[$_get](i));
        } else {
          this[_extended][$_set](i, src__utils.rotl32((dart.notNull(this[_extended][$_get](i - 3)) ^ dart.notNull(this[_extended][$_get](i - 8)) ^ dart.notNull(this[_extended][$_get](i - 14)) ^ dart.notNull(this[_extended][$_get](i - 16))) >>> 0, 1));
        }
        let newA = src__utils.add32(src__utils.add32(src__utils.rotl32(a, 5), e), this[_extended][$_get](i));
        if (i < 20) {
          newA = src__utils.add32(src__utils.add32(newA, (dart.notNull(b) & dart.notNull(c) | ~dart.notNull(b) & dart.notNull(d)) >>> 0), 1518500249);
        } else if (i < 40) {
          newA = src__utils.add32(src__utils.add32(newA, (dart.notNull(b) ^ dart.notNull(c) ^ dart.notNull(d)) >>> 0), 1859775393);
        } else if (i < 60) {
          newA = src__utils.add32(src__utils.add32(newA, (dart.notNull(b) & dart.notNull(c) | dart.notNull(b) & dart.notNull(d) | dart.notNull(c) & dart.notNull(d)) >>> 0), 2400959708);
        } else {
          newA = src__utils.add32(src__utils.add32(newA, (dart.notNull(b) ^ dart.notNull(c) ^ dart.notNull(d)) >>> 0), 3395469782);
        }
        e = d;
        d = c;
        c = src__utils.rotl32(b, 30);
        b = a;
        a = (dart.notNull(newA) & 4294967295) >>> 0;
      }
      this.digest[$_set](0, src__utils.add32(a, this.digest[$_get](0)));
      this.digest[$_set](1, src__utils.add32(b, this.digest[$_get](1)));
      this.digest[$_set](2, src__utils.add32(c, this.digest[$_get](2)));
      this.digest[$_set](3, src__utils.add32(d, this.digest[$_get](3)));
      this.digest[$_set](4, src__utils.add32(e, this.digest[$_get](4)));
    }
  };
  (src__sha1._Sha1Sink.new = function(sink) {
    this.digest = typed_data.Uint32List.new(5);
    this[_extended] = typed_data.Uint32List.new(80);
    src__sha1._Sha1Sink.__proto__.new.call(this, sink, 16);
    this.digest[$_set](0, 1732584193);
    this.digest[$_set](1, 4023233417);
    this.digest[$_set](2, 2562383102);
    this.digest[$_set](3, 271733878);
    this.digest[$_set](4, 3285377520);
  }).prototype = src__sha1._Sha1Sink.prototype;
  dart.addTypeTests(src__sha1._Sha1Sink);
  dart.setMethodSignature(src__sha1._Sha1Sink, () => ({
    __proto__: dart.getMethods(src__sha1._Sha1Sink.__proto__),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setFieldSignature(src__sha1._Sha1Sink, () => ({
    __proto__: dart.getFields(src__sha1._Sha1Sink.__proto__),
    digest: dart.finalFieldType(typed_data.Uint32List),
    [_extended]: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.trackLibraries("packages/crypto/src/sha1.ddc", {
    "package:crypto/src/sha1.dart": src__sha1
  }, '{"version":3,"sourceRoot":"","sources":["sha1.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAiBM,cAAI;YAAG,KAAI,iBAAM;;;;IAOX;;;;;;2BAKgC,IAAiB;4BAAJ;YACnD,AAAI,gCAAuB,CAAC,IAAI,uBAAS,CAAC,IAAI;IAAE;;;IAN1C,eAAS,GAAG,AAAG,KAAE,CAAY;;EAE/B;;;;;;;;;;;;;eAgCQ,KAAgB;AAC9B,YAAO,KAAK,SAAO,KAAI;AAEvB,UAAI,IAAI,WAAM,QAAC;AACf,UAAI,IAAI,WAAM,QAAC;AACf,UAAI,IAAI,WAAM,QAAC;AACf,UAAI,IAAI,WAAM,QAAC;AACf,UAAI,IAAI,WAAM,QAAC;AAEf,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,IAAI,CAAC,IAAI;AAC3B,YAAI,AAAE,CAAD,GAAG,IAAI;AACV,yBAAS,QAAC,CAAC,EAAI,KAAK,QAAC,CAAC;eACjB;AACL,yBAAS,QAAC,CAAC,EAAI,iBAAM,CACjB,CAAiB,AACI,AACC,aAFtB,eAAS,QAAC,AAAE,CAAD,GAAG,mBACV,eAAS,QAAC,AAAE,CAAD,GAAG,mBACd,eAAS,QAAC,AAAE,CAAD,GAAG,oBACd,eAAS,QAAC,AAAE,CAAD,GAAG,aAClB;;AAGN,YAAI,OAAO,gBAAK,CAAC,gBAAK,CAAC,iBAAM,CAAC,CAAC,EAAE,IAAI,CAAC,GAAG,eAAS,QAAC,CAAC;AACpD,YAAI,AAAE,CAAD,GAAG,IAAI;AACV,cAAI,GAAG,gBAAK,CAAC,gBAAK,CAAC,IAAI,EAAE,CAAG,AAAK,aAAP,CAAC,iBAAG,CAAC,IAAK,AAAG,cAAF,CAAC,iBAAG,CAAC,WAAI;cACzC,KAAI,AAAE,CAAD,GAAG,IAAI;AACjB,cAAI,GAAG,gBAAK,CAAC,gBAAK,CAAC,IAAI,EAAG,CAAE,AAAI,aAAN,CAAC,iBAAG,CAAC,iBAAG,CAAC,WAAI;cAClC,KAAI,AAAE,CAAD,GAAG,IAAI;AACjB,cAAI,GAAG,gBAAK,CAAC,gBAAK,CAAC,IAAI,EAAE,CAAG,AAAK,AAAU,aAAjB,CAAC,iBAAG,CAAC,IAAO,aAAF,CAAC,iBAAG,CAAC,IAAO,aAAF,CAAC,iBAAG,CAAC,WAAI;eAClD;AACL,cAAI,GAAG,gBAAK,CAAC,gBAAK,CAAC,IAAI,EAAE,CAAE,AAAI,aAAN,CAAC,iBAAG,CAAC,iBAAG,CAAC,WAAG;;AAGvC,SAAC,GAAG,CAAC;AACL,SAAC,GAAG,CAAC;AACL,SAAC,GAAG,iBAAM,CAAC,CAAC,EAAE;AACd,SAAC,GAAG,CAAC;AACL,SAAC,GAAG,CAAK,aAAL,IAAI,IAAG,UAAM;;AAGnB,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;AAC5B,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;AAC5B,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;AAC5B,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;AAC5B,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;IAC9B;;sCAvDU,IAAiB;IARrB,WAAM,GAAG,AAAI,yBAAU,CAAC;IASxB,eAAS,GAAG,AAAI,yBAAU,CAAC;AAC3B,iDAAM,IAAI,EAAE;AAChB,eAAM,QAAC,GAAK;AACZ,eAAM,QAAC,GAAK;AACZ,eAAM,QAAC,GAAK;AACZ,eAAM,QAAC,GAAK;AACZ,eAAM,QAAC,GAAK;EACd","file":"sha1.ddc.js"}');
  // Exports:
  return {
    src__sha1: src__sha1
  };
});

//# sourceMappingURL=sha1.ddc.js.map
