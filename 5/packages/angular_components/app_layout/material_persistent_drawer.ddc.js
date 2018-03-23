define(['dart_sdk', 'packages/angular_components/app_layout/material_drawer_base'], function(dart_sdk, material_drawer_base) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_layout__material_drawer_base = material_drawer_base.app_layout__material_drawer_base;
  const _root = Object.create(null);
  const app_layout__material_persistent_drawer = Object.create(_root);
  app_layout__material_persistent_drawer.MaterialPersistentDrawerDirective = class MaterialPersistentDrawerDirective extends app_layout__material_drawer_base.MaterialDrawerBase {};
  (app_layout__material_persistent_drawer.MaterialPersistentDrawerDirective.new = function() {
    app_layout__material_persistent_drawer.MaterialPersistentDrawerDirective.__proto__.new.call(this);
  }).prototype = app_layout__material_persistent_drawer.MaterialPersistentDrawerDirective.prototype;
  dart.addTypeTests(app_layout__material_persistent_drawer.MaterialPersistentDrawerDirective);
  dart.trackLibraries("packages/angular_components/app_layout/material_persistent_drawer.ddc", {
    "package:angular_components/app_layout/material_persistent_drawer.dart": app_layout__material_persistent_drawer
  }, '{"version":3,"sourceRoot":"","sources":["material_persistent_drawer.dart"],"names":[],"mappings":";;;;;;;;;;AAqCwC;EAAO","file":"material_persistent_drawer.ddc.js"}');
  // Exports:
  return {
    app_layout__material_persistent_drawer: app_layout__material_persistent_drawer
  };
});

//# sourceMappingURL=material_persistent_drawer.ddc.js.map
