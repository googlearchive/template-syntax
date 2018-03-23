define(['dart_sdk', 'packages/convert/src/hex/encoder', 'packages/convert/src/hex/decoder'], function(dart_sdk, encoder, decoder) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hex__encoder = encoder.src__hex__encoder;
  const src__hex__decoder = decoder.src__hex__decoder;
  const _root = Object.create(null);
  const src__hex = Object.create(_root);
  dart.defineLazy(src__hex, {
    /*src__hex.hex*/get hex() {
      return dart.const(new src__hex.HexCodec.__());
    }
  });
  src__hex.HexCodec = class HexCodec extends convert.Codec$(core.List$(core.int), core.String) {
    get encoder() {
      return src__hex__encoder.hexEncoder;
    }
    get decoder() {
      return src__hex__decoder.hexDecoder;
    }
  };
  (src__hex.HexCodec.__ = function() {
    src__hex.HexCodec.__proto__.new.call(this);
  }).prototype = src__hex.HexCodec.prototype;
  dart.addTypeTests(src__hex.HexCodec);
  dart.setGetterSignature(src__hex.HexCodec, () => ({
    __proto__: dart.getGetters(src__hex.HexCodec.__proto__),
    encoder: dart.fnType(src__hex__encoder.HexEncoder, []),
    decoder: dart.fnType(src__hex__decoder.HexDecoder, [])
  }));
  dart.trackLibraries("packages/convert/src/hex.ddc", {
    "package:convert/src/hex.dart": src__hex
  }, '{"version":3,"sourceRoot":"","sources":["hex.dart"],"names":[],"mappings":";;;;;;;;;;;MAeM,YAAG;YAAG,gBAAM,oBAAU;;;;;YASA,6BAAU;;;YACV,6BAAU;;;;;EAElB","file":"hex.ddc.js"}');
  // Exports:
  return {
    src__hex: src__hex
  };
});

//# sourceMappingURL=hex.ddc.js.map
