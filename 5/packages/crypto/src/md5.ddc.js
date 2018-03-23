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
  const src__md5 = Object.create(_root);
  const $_set = dartx._set;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $modulo = dartx['%'];
  let SinkOfDigest = () => (SinkOfDigest = dart.constFn(core.Sink$(src__digest.Digest)))();
  dart.defineLazy(src__md5, {
    /*src__md5.md5*/get md5() {
      return new src__md5.MD5.__();
    }
  });
  src__md5.MD5 = class MD5 extends src__hash.Hash {
    get blockSize() {
      return this[blockSize];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return convert.ByteConversionSink.from(new src__md5._MD5Sink.new(sink));
    }
  };
  (src__md5.MD5.__ = function() {
    this[blockSize] = 16 * 4;
    src__md5.MD5.__proto__.new.call(this);
  }).prototype = src__md5.MD5.prototype;
  dart.addTypeTests(src__md5.MD5);
  const blockSize = Symbol("MD5.blockSize");
  dart.setMethodSignature(src__md5.MD5, () => ({
    __proto__: dart.getMethods(src__md5.MD5.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  dart.setFieldSignature(src__md5.MD5, () => ({
    __proto__: dart.getFields(src__md5.MD5.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__md5, {
    /*src__md5._noise*/get _noise() {
      return dart.constList([3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745], core.int);
    },
    /*src__md5._shiftAmounts*/get _shiftAmounts() {
      return dart.constList([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21], core.int);
    }
  });
  src__md5._MD5Sink = class _MD5Sink extends src__hash_sink.HashSink {
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed();
      let a = this.digest[$_get](0);
      let b = this.digest[$_get](1);
      let c = this.digest[$_get](2);
      let d = this.digest[$_get](3);
      let e = null;
      let f = null;
      for (let i = 0; i < 64; i++) {
        if (i < 16) {
          e = (dart.notNull(b) & dart.notNull(c) | ~dart.notNull(b) & 4294967295 & dart.notNull(d)) >>> 0;
          f = i;
        } else if (i < 32) {
          e = (dart.notNull(d) & dart.notNull(b) | ~dart.notNull(d) & 4294967295 & dart.notNull(c)) >>> 0;
          f = (5 * i + 1)[$modulo](16);
        } else if (i < 48) {
          e = (dart.notNull(b) ^ dart.notNull(c) ^ dart.notNull(d)) >>> 0;
          f = (3 * i + 5)[$modulo](16);
        } else {
          e = (dart.notNull(c) ^ (dart.notNull(b) | ~dart.notNull(d) & 4294967295)) >>> 0;
          f = (7 * i)[$modulo](16);
        }
        let temp = d;
        d = c;
        c = b;
        b = src__utils.add32(b, src__utils.rotl32(src__utils.add32(src__utils.add32(a, e), src__utils.add32(src__md5._noise[$_get](i), chunk[$_get](f))), src__md5._shiftAmounts[$_get](i)));
        a = temp;
      }
      this.digest[$_set](0, src__utils.add32(a, this.digest[$_get](0)));
      this.digest[$_set](1, src__utils.add32(b, this.digest[$_get](1)));
      this.digest[$_set](2, src__utils.add32(c, this.digest[$_get](2)));
      this.digest[$_set](3, src__utils.add32(d, this.digest[$_get](3)));
    }
  };
  (src__md5._MD5Sink.new = function(sink) {
    this.digest = typed_data.Uint32List.new(4);
    src__md5._MD5Sink.__proto__.new.call(this, sink, 16, {endian: typed_data.Endianness.LITTLE_ENDIAN});
    this.digest[$_set](0, 1732584193);
    this.digest[$_set](1, 4023233417);
    this.digest[$_set](2, 2562383102);
    this.digest[$_set](3, 271733878);
  }).prototype = src__md5._MD5Sink.prototype;
  dart.addTypeTests(src__md5._MD5Sink);
  dart.setMethodSignature(src__md5._MD5Sink, () => ({
    __proto__: dart.getMethods(src__md5._MD5Sink.__proto__),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setFieldSignature(src__md5._MD5Sink, () => ({
    __proto__: dart.getFields(src__md5._MD5Sink.__proto__),
    digest: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.trackLibraries("packages/crypto/src/md5.ddc", {
    "package:crypto/src/md5.dart": src__md5
  }, '{"version":3,"sourceRoot":"","sources":["md5.dart"],"names":[],"mappings":"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","file":"md5.ddc.js"}');
  // Exports:
  return {
    src__md5: src__md5
  };
});

//# sourceMappingURL=md5.ddc.js.map
