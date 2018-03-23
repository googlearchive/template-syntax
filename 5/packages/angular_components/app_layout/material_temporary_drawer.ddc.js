define(['dart_sdk', 'packages/angular_components/app_layout/material_drawer_base'], function(dart_sdk, material_drawer_base) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_layout__material_drawer_base = material_drawer_base.app_layout__material_drawer_base;
  const _root = Object.create(null);
  const app_layout__material_temporary_drawer = Object.create(_root);
  app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent = class MaterialTemporaryDrawerComponent extends app_layout__material_drawer_base.MaterialDrawerBase {};
  (app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent.new = function() {
    app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent.__proto__.new.call(this, {visible: false});
  }).prototype = app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent.prototype;
  dart.addTypeTests(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent);
  dart.trackLibraries("packages/angular_components/app_layout/material_temporary_drawer.ddc", {
    "package:angular_components/app_layout/material_temporary_drawer.dart": app_layout__material_temporary_drawer
  }, '{"version":3,"sourceRoot":"","sources":["material_temporary_drawer.dart"],"names":[],"mappings":";;;;;;;;;;AAwCuC,8GAAe;EAAM","file":"material_temporary_drawer.ddc.js"}');
  // Exports:
  return {
    app_layout__material_temporary_drawer: app_layout__material_temporary_drawer
  };
});

//# sourceMappingURL=material_temporary_drawer.ddc.js.map
