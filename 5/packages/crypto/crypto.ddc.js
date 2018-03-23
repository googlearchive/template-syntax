define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const crypto = Object.create(_root);
  dart.trackLibraries("packages/crypto/crypto.ddc", {
    "package:crypto/crypto.dart": crypto
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"crypto.ddc.js"}');
  // Exports:
  return {
    crypto: crypto
  };
});

//# sourceMappingURL=crypto.ddc.js.map
