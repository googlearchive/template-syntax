define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__material_datepicker__sequential = Object.create(_root);
  const _is_Sequential_default = Symbol('_is_Sequential_default');
  src__material_datepicker__sequential.Sequential$ = dart.generic(T => {
    class Sequential extends core.Object {}
    (Sequential.new = function() {
    }).prototype = Sequential.prototype;
    dart.addTypeTests(Sequential);
    Sequential.prototype[_is_Sequential_default] = true;
    return Sequential;
  });
  src__material_datepicker__sequential.Sequential = src__material_datepicker__sequential.Sequential$();
  dart.addTypeTests(src__material_datepicker__sequential.Sequential, _is_Sequential_default);
  dart.trackLibraries("packages/angular_components/src/material_datepicker/sequential.ddc", {
    "package:angular_components/src/material_datepicker/sequential.dart": src__material_datepicker__sequential
  }, '{"version":3,"sourceRoot":"","sources":["sequential.dart"],"names":[],"mappings":";;;;;;;;;;;IAuBA","file":"sequential.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__sequential: src__material_datepicker__sequential
  };
});

//# sourceMappingURL=sequential.ddc.js.map
