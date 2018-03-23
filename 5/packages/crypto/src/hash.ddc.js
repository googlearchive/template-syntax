define(['dart_sdk', 'packages/crypto/src/digest_sink', 'packages/crypto/src/digest'], function(dart_sdk, digest_sink, digest) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__digest_sink = digest_sink.src__digest_sink;
  const src__digest = digest.src__digest;
  const _root = Object.create(null);
  const src__hash = Object.create(_root);
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  src__hash.Hash = class Hash extends convert.Converter$(core.List$(core.int), src__digest.Digest) {
    convert(data) {
      ListOfint()._check(data);
      let innerSink = new src__digest_sink.DigestSink.new();
      let outerSink = this.startChunkedConversion(innerSink);
      outerSink.add(data);
      outerSink.close();
      return innerSink.value;
    }
  };
  (src__hash.Hash.new = function() {
    src__hash.Hash.__proto__.new.call(this);
  }).prototype = src__hash.Hash.prototype;
  dart.addTypeTests(src__hash.Hash);
  dart.setMethodSignature(src__hash.Hash, () => ({
    __proto__: dart.getMethods(src__hash.Hash.__proto__),
    convert: dart.fnType(src__digest.Digest, [core.Object])
  }));
  dart.trackLibraries("packages/crypto/src/hash.ddc", {
    "package:crypto/src/hash.dart": src__hash
  }, '{"version":3,"sourceRoot":"","sources":["hash.dart"],"names":[],"mappings":";;;;;;;;;;;;YAwBiB,IAAc;yBAAJ;AACvB,UAAI,YAAY,IAAI,+BAAU;AAC9B,UAAI,YAAY,2BAAsB,CAAC,SAAS;AAChD,eAAS,IAAI,CAAC,IAAI;AAClB,eAAS,MAAM;AACf,YAAO,UAAS,MAAM;IACxB;;;;EATY","file":"hash.ddc.js"}');
  // Exports:
  return {
    src__hash: src__hash
  };
});

//# sourceMappingURL=hash.ddc.js.map
