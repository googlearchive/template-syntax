define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__laminate__enums__base = Object.create(_root);
  src__laminate__enums__base.SetPropertyFn = dart.typedef('SetPropertyFn', () => dart.fnType(dart.void, [core.String, dart.dynamic]));
  src__laminate__enums__base.ElementStyleEnum = class ElementStyleEnum extends core.Object {};
  (src__laminate__enums__base.ElementStyleEnum.new = function() {
  }).prototype = src__laminate__enums__base.ElementStyleEnum.prototype;
  dart.addTypeTests(src__laminate__enums__base.ElementStyleEnum);
  dart.trackLibraries("packages/angular_components/src/laminate/enums/base.ddc", {
    "package:angular_components/src/laminate/enums/base.dart": src__laminate__enums__base
  }, '{"version":3,"sourceRoot":"","sources":["base.dart"],"names":[],"mappings":";;;;;;;;;;EAUA","file":"base.ddc.js"}');
  // Exports:
  return {
    src__laminate__enums__base: src__laminate__enums__base
  };
});

//# sourceMappingURL=base.ddc.js.map
