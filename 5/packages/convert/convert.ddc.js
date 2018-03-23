define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const convert = Object.create(_root);
  dart.trackLibraries("packages/convert/convert.ddc", {
    "package:convert/convert.dart": convert
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"convert.ddc.js"}');
  // Exports:
  return {
    convert: convert
  };
});

//# sourceMappingURL=convert.ddc.js.map
