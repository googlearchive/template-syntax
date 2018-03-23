define(['dart_sdk', 'packages/crypto/src/digest'], function(dart_sdk, digest) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__digest = digest.src__digest;
  const _root = Object.create(null);
  const src__digest_sink = Object.create(_root);
  const _value = Symbol('_value');
  src__digest_sink.DigestSink = class DigestSink extends core.Sink$(src__digest.Digest) {
    get value() {
      if (!(this[_value] != null)) dart.assertFailed();
      return this[_value];
    }
    add(value) {
      src__digest.Digest._check(value);
      if (!(this[_value] == null)) dart.assertFailed();
      this[_value] = value;
    }
    close() {
      if (!(this[_value] != null)) dart.assertFailed();
    }
  };
  (src__digest_sink.DigestSink.new = function() {
    this[_value] = null;
  }).prototype = src__digest_sink.DigestSink.prototype;
  dart.addTypeTests(src__digest_sink.DigestSink);
  dart.setMethodSignature(src__digest_sink.DigestSink, () => ({
    __proto__: dart.getMethods(src__digest_sink.DigestSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__digest_sink.DigestSink, () => ({
    __proto__: dart.getGetters(src__digest_sink.DigestSink.__proto__),
    value: dart.fnType(src__digest.Digest, [])
  }));
  dart.setFieldSignature(src__digest_sink.DigestSink, () => ({
    __proto__: dart.getFields(src__digest_sink.DigestSink.__proto__),
    [_value]: dart.fieldType(src__digest.Digest)
  }));
  dart.trackLibraries("packages/crypto/src/digest_sink.ddc", {
    "package:crypto/src/digest_sink.dart": src__digest_sink
  }, '{"version":3,"sourceRoot":"","sources":["digest_sink.dart"],"names":[],"mappings":";;;;;;;;;;;AAUI,YAAO,YAAM,IAAI;AACjB,YAAO,aAAM;IACf;QAQS,KAAY;gCAAL;AACd,YAAO,YAAM,IAAI;AACjB,kBAAM,GAAG,KAAK;IAChB;;AAIE,YAAO,YAAM,IAAI;IACnB;;;IAdO,YAAM;EAef","file":"digest_sink.ddc.js"}');
  // Exports:
  return {
    src__digest_sink: src__digest_sink
  };
});

//# sourceMappingURL=digest_sink.ddc.js.map
