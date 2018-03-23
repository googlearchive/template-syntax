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
  const src__sha256 = Object.create(_root);
  const $_set = dartx._set;
  const $rightShift = dartx['>>'];
  const $leftShift = dartx['<<'];
  const $length = dartx.length;
  const $_get = dartx._get;
  let SinkOfDigest = () => (SinkOfDigest = dart.constFn(core.Sink$(src__digest.Digest)))();
  dart.defineLazy(src__sha256, {
    /*src__sha256.sha256*/get sha256() {
      return new src__sha256.Sha256.__();
    }
  });
  src__sha256.Sha256 = class Sha256 extends src__hash.Hash {
    get blockSize() {
      return this[blockSize];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    newInstance() {
      return new src__sha256.Sha256.__();
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return convert.ByteConversionSink.from(new src__sha256._Sha256Sink.new(sink));
    }
  };
  (src__sha256.Sha256.__ = function() {
    this[blockSize] = 16 * 4;
    src__sha256.Sha256.__proto__.new.call(this);
  }).prototype = src__sha256.Sha256.prototype;
  dart.addTypeTests(src__sha256.Sha256);
  const blockSize = Symbol("Sha256.blockSize");
  dart.setMethodSignature(src__sha256.Sha256, () => ({
    __proto__: dart.getMethods(src__sha256.Sha256.__proto__),
    newInstance: dart.fnType(src__sha256.Sha256, []),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  dart.setFieldSignature(src__sha256.Sha256, () => ({
    __proto__: dart.getFields(src__sha256.Sha256.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__sha256, {
    /*src__sha256._noise*/get _noise() {
      return dart.constList([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], core.int);
    }
  });
  const _extended = Symbol('_extended');
  const _rotr32 = Symbol('_rotr32');
  const _ch = Symbol('_ch');
  const _maj = Symbol('_maj');
  const _bsig0 = Symbol('_bsig0');
  const _bsig1 = Symbol('_bsig1');
  const _ssig0 = Symbol('_ssig0');
  const _ssig1 = Symbol('_ssig1');
  src__sha256._Sha256Sink = class _Sha256Sink extends src__hash_sink.HashSink {
    [_rotr32](n, x) {
      return (x[$rightShift](n) | x[$leftShift](32 - dart.notNull(n)) & 4294967295) >>> 0;
    }
    [_ch](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) ^ ~dart.notNull(x) & 4294967295 & dart.notNull(z)) >>> 0;
    }
    [_maj](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) ^ dart.notNull(x) & dart.notNull(z) ^ dart.notNull(y) & dart.notNull(z)) >>> 0;
    }
    [_bsig0](x) {
      return (dart.notNull(this[_rotr32](2, x)) ^ dart.notNull(this[_rotr32](13, x)) ^ dart.notNull(this[_rotr32](22, x))) >>> 0;
    }
    [_bsig1](x) {
      return (dart.notNull(this[_rotr32](6, x)) ^ dart.notNull(this[_rotr32](11, x)) ^ dart.notNull(this[_rotr32](25, x))) >>> 0;
    }
    [_ssig0](x) {
      return (dart.notNull(this[_rotr32](7, x)) ^ dart.notNull(this[_rotr32](18, x)) ^ x[$rightShift](3)) >>> 0;
    }
    [_ssig1](x) {
      return (dart.notNull(this[_rotr32](17, x)) ^ dart.notNull(this[_rotr32](19, x)) ^ x[$rightShift](10)) >>> 0;
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed();
      for (let i = 0; i < 16; i++) {
        this[_extended][$_set](i, chunk[$_get](i));
      }
      for (let i = 16; i < 64; i++) {
        this[_extended][$_set](i, src__utils.add32(src__utils.add32(this[_ssig1](this[_extended][$_get](i - 2)), this[_extended][$_get](i - 7)), src__utils.add32(this[_ssig0](this[_extended][$_get](i - 15)), this[_extended][$_get](i - 16))));
      }
      let a = this.digest[$_get](0);
      let b = this.digest[$_get](1);
      let c = this.digest[$_get](2);
      let d = this.digest[$_get](3);
      let e = this.digest[$_get](4);
      let f = this.digest[$_get](5);
      let g = this.digest[$_get](6);
      let h = this.digest[$_get](7);
      for (let i = 0; i < 64; i++) {
        let temp1 = src__utils.add32(src__utils.add32(h, this[_bsig1](e)), src__utils.add32(this[_ch](e, f, g), src__utils.add32(src__sha256._noise[$_get](i), this[_extended][$_get](i))));
        let temp2 = src__utils.add32(this[_bsig0](a), this[_maj](a, b, c));
        h = g;
        g = f;
        f = e;
        e = src__utils.add32(d, temp1);
        d = c;
        c = b;
        b = a;
        a = src__utils.add32(temp1, temp2);
      }
      this.digest[$_set](0, src__utils.add32(a, this.digest[$_get](0)));
      this.digest[$_set](1, src__utils.add32(b, this.digest[$_get](1)));
      this.digest[$_set](2, src__utils.add32(c, this.digest[$_get](2)));
      this.digest[$_set](3, src__utils.add32(d, this.digest[$_get](3)));
      this.digest[$_set](4, src__utils.add32(e, this.digest[$_get](4)));
      this.digest[$_set](5, src__utils.add32(f, this.digest[$_get](5)));
      this.digest[$_set](6, src__utils.add32(g, this.digest[$_get](6)));
      this.digest[$_set](7, src__utils.add32(h, this.digest[$_get](7)));
    }
  };
  (src__sha256._Sha256Sink.new = function(sink) {
    this.digest = typed_data.Uint32List.new(8);
    this[_extended] = typed_data.Uint32List.new(64);
    src__sha256._Sha256Sink.__proto__.new.call(this, sink, 16);
    this.digest[$_set](0, 1779033703);
    this.digest[$_set](1, 3144134277);
    this.digest[$_set](2, 1013904242);
    this.digest[$_set](3, 2773480762);
    this.digest[$_set](4, 1359893119);
    this.digest[$_set](5, 2600822924);
    this.digest[$_set](6, 528734635);
    this.digest[$_set](7, 1541459225);
  }).prototype = src__sha256._Sha256Sink.prototype;
  dart.addTypeTests(src__sha256._Sha256Sink);
  dart.setMethodSignature(src__sha256._Sha256Sink, () => ({
    __proto__: dart.getMethods(src__sha256._Sha256Sink.__proto__),
    [_rotr32]: dart.fnType(core.int, [core.int, core.int]),
    [_ch]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_maj]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_bsig0]: dart.fnType(core.int, [core.int]),
    [_bsig1]: dart.fnType(core.int, [core.int]),
    [_ssig0]: dart.fnType(core.int, [core.int]),
    [_ssig1]: dart.fnType(core.int, [core.int]),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setFieldSignature(src__sha256._Sha256Sink, () => ({
    __proto__: dart.getFields(src__sha256._Sha256Sink.__proto__),
    digest: dart.finalFieldType(typed_data.Uint32List),
    [_extended]: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.trackLibraries("packages/crypto/src/sha256.ddc", {
    "package:crypto/src/sha256.dart": src__sha256
  }, '{"version":3,"sourceRoot":"","sources":["sha256.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MAiBM,kBAAM;YAAG,KAAI,qBAAQ;;;;IAUf;;;;;;;YAIc,KAAI,qBAAQ;IAAE;2BAGI,IAAiB;4BAAJ;YACnD,AAAI,gCAAuB,CAAC,IAAI,2BAAW,CAAC,IAAI;IAAE;;;IAR5C,eAAS,GAAG,AAAG,KAAE,CAAY;;EAE7B;;;;;;;;;;;;;MAUI,kBAAM;YAAG,iBACvB,YAAY,YAAY,YAAY,YAAY,WAAY,YAC5D,YAAY,YAAY,YAAY,WAAY,WAAY,YAC5D,YAAY,YAAY,YAAY,YAAY,YAAY,YAC5D,WAAY,WAAY,WAAY,YAAY,YAAY,YAC5D,YAAY,YAAY,YAAY,YAAY,YAAY,YAC5D,WAAY,WAAY,WAAY,WAAY,YAAY,YAC5D,YAAY,YAAY,YAAY,YAAY,YAAY,YAC5D,YAAY,YAAY,YAAY,YAAY,YAAY,WAC5D,WAAY,WAAY,WAAY,WAAY,WAAY,YAC5D,YAAY,YAAY,YAAY,YAAY,YAAY,YAC5D,YAAY,YAAY,YAAY;;;;;;;;;;;;cAmCxB,CAAK,EAAE,CAAK;YAAK,EAAC,AAAE,AAAM,CAAP,cAAI,CAAC,IAAM,AAAE,AAAa,CAAd,aAAK,AAAG,kBAAE,CAAC,KAAK,UAAM;IAAC;UAC1D,CAAK,EAAE,CAAK,EAAE,CAAK;YAAK,EAAG,AAAK,aAAP,CAAC,iBAAG,CAAC,IAAM,AAAG,AAAU,cAAZ,CAAC,IAAG,UAAM,gBAAI,CAAC;IAAC;WACpD,CAAK,EAAE,CAAK,EAAE,CAAK;YAAK,EAAG,AAAK,AAAU,aAAjB,CAAC,iBAAG,CAAC,IAAO,aAAF,CAAC,iBAAG,CAAC,IAAO,aAAF,CAAC,iBAAG,CAAC;IAAC;aACjD,CAAK;YAAK,EAAc,AAAiB,aAA/B,aAAO,CAAC,GAAG,CAAC,kBAAI,aAAO,CAAC,IAAI,CAAC,kBAAI,aAAO,CAAC,IAAI,CAAC;IAAC;aACzD,CAAK;YAAK,EAAc,AAAiB,aAA/B,aAAO,CAAC,GAAG,CAAC,kBAAI,aAAO,CAAC,IAAI,CAAC,kBAAI,aAAO,CAAC,IAAI,CAAC;IAAC;aACzD,CAAK;YAAK,EAAc,AAAiB,aAA/B,aAAO,CAAC,GAAG,CAAC,kBAAI,aAAO,CAAC,IAAI,CAAC,KAAK,AAAE,CAAD,cAAI;IAAE;aACnD,CAAK;YAAK,EAAe,AAAiB,aAAhC,aAAO,CAAC,IAAI,CAAC,kBAAI,aAAO,CAAC,IAAI,CAAC,KAAK,AAAE,CAAD,cAAI;IAAG;eAGhD,KAAgB;AAC9B,YAAO,KAAK,SAAO,KAAI;AAGvB,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,IAAI,CAAC,IAAI;AAC3B,uBAAS,QAAC,CAAC,EAAI,KAAK,QAAC,CAAC;;AAExB,eAAS,IAAI,IAAI,AAAE,CAAD,GAAG,IAAI,CAAC,IAAI;AAC5B,uBAAS,QAAC,CAAC,EAAI,gBAAK,CAAC,gBAAK,CAAC,YAAM,CAAC,eAAS,QAAC,AAAE,CAAD,GAAG,KAAK,eAAS,QAAC,AAAE,CAAD,GAAG,KAC/D,gBAAK,CAAC,YAAM,CAAC,eAAS,QAAC,AAAE,CAAD,GAAG,MAAM,eAAS,QAAC,AAAE,CAAD,GAAG;;AAIrD,UAAI,IAAI,WAAM,QAAC;AACf,UAAI,IAAI,WAAM,QAAC;AACf,UAAI,IAAI,WAAM,QAAC;AACf,UAAI,IAAI,WAAM,QAAC;AACf,UAAI,IAAI,WAAM,QAAC;AACf,UAAI,IAAI,WAAM,QAAC;AACf,UAAI,IAAI,WAAM,QAAC;AACf,UAAI,IAAI,WAAM,QAAC;AAEf,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,IAAI,CAAC,IAAI;AAC3B,YAAI,QAAQ,gBAAK,CAAC,gBAAK,CAAC,CAAC,EAAE,YAAM,CAAC,CAAC,IAC/B,gBAAK,CAAC,SAAG,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,gBAAK,CAAC,kBAAM,QAAC,CAAC,GAAG,eAAS,QAAC,CAAC;AACpD,YAAI,QAAQ,gBAAK,CAAC,YAAM,CAAC,CAAC,GAAG,UAAI,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC;AACzC,SAAC,GAAG,CAAC;AACL,SAAC,GAAG,CAAC;AACL,SAAC,GAAG,CAAC;AACL,SAAC,GAAG,gBAAK,CAAC,CAAC,EAAE,KAAK;AAClB,SAAC,GAAG,CAAC;AACL,SAAC,GAAG,CAAC;AACL,SAAC,GAAG,CAAC;AACL,SAAC,GAAG,gBAAK,CAAC,KAAK,EAAE,KAAK;;AAIxB,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;AAC5B,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;AAC5B,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;AAC5B,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;AAC5B,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;AAC5B,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;AAC5B,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;AAC5B,iBAAM,QAAC,GAAK,gBAAK,CAAC,CAAC,EAAE,WAAM,QAAC;IAC9B;;0CAxEY,IAAiB;IARvB,WAAM,GAAG,AAAI,yBAAU,CAAC;IASxB,eAAS,GAAG,AAAI,yBAAU,CAAC;AAC3B,qDAAM,IAAI,EAAE;AAGhB,eAAM,QAAC,GAAK;AACZ,eAAM,QAAC,GAAK;AACZ,eAAM,QAAC,GAAK;AACZ,eAAM,QAAC,GAAK;AACZ,eAAM,QAAC,GAAK;AACZ,eAAM,QAAC,GAAK;AACZ,eAAM,QAAC,GAAK;AACZ,eAAM,QAAC,GAAK;EACd","file":"sha256.ddc.js"}');
  // Exports:
  return {
    src__sha256: src__sha256
  };
});

//# sourceMappingURL=sha256.ddc.js.map
