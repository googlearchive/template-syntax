define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const observable = Object.create(_root);
  dart.trackLibraries("packages/observable/observable.ddc", {
    "package:observable/observable.dart": observable
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"observable.ddc.js"}');
  // Exports:
  return {
    observable: observable
  };
});

//# sourceMappingURL=observable.ddc.js.map
