define(['dart_sdk', 'packages/convert/src/percent/encoder', 'packages/convert/src/percent/decoder'], function(dart_sdk, encoder, decoder) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__percent__encoder = encoder.src__percent__encoder;
  const src__percent__decoder = decoder.src__percent__decoder;
  const _root = Object.create(null);
  const src__percent = Object.create(_root);
  dart.defineLazy(src__percent, {
    /*src__percent.percent*/get percent() {
      return dart.const(new src__percent.PercentCodec.__());
    }
  });
  src__percent.PercentCodec = class PercentCodec extends convert.Codec$(core.List$(core.int), core.String) {
    get encoder() {
      return src__percent__encoder.percentEncoder;
    }
    get decoder() {
      return src__percent__decoder.percentDecoder;
    }
  };
  (src__percent.PercentCodec.__ = function() {
    src__percent.PercentCodec.__proto__.new.call(this);
  }).prototype = src__percent.PercentCodec.prototype;
  dart.addTypeTests(src__percent.PercentCodec);
  dart.setGetterSignature(src__percent.PercentCodec, () => ({
    __proto__: dart.getGetters(src__percent.PercentCodec.__proto__),
    encoder: dart.fnType(src__percent__encoder.PercentEncoder, []),
    decoder: dart.fnType(src__percent__decoder.PercentDecoder, [])
  }));
  dart.trackLibraries("packages/convert/src/percent.ddc", {
    "package:convert/src/percent.dart": src__percent
  }, '{"version":3,"sourceRoot":"","sources":["percent.dart"],"names":[],"mappings":";;;;;;;;;;;MAeM,oBAAO;YAAG,gBAAM,4BAAc;;;;;YAkBJ,qCAAc;;;YACd,qCAAc;;;;;EAEtB","file":"percent.ddc.js"}');
  // Exports:
  return {
    src__percent: src__percent
  };
});

//# sourceMappingURL=percent.ddc.js.map
