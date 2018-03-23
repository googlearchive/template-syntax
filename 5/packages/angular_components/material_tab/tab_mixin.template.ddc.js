define(['dart_sdk', 'packages/angular/angular.template'], function(dart_sdk, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const material_tab__tab_mixin$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_tab__tab_mixin$46template, {
    /*material_tab__tab_mixin$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tab__tab_mixin$46template.initReflector = function() {
    if (dart.test(material_tab__tab_mixin$46template._visited)) {
      return;
    }
    material_tab__tab_mixin$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.fn(material_tab__tab_mixin$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_tab/tab_mixin.template.ddc", {
    "package:angular_components/material_tab/tab_mixin.template.dart": material_tab__tab_mixin$46template
  }, '{"version":3,"sourceRoot":"","sources":["tab_mixin.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAM,gCAAa;EACrB","file":"tab_mixin.template.ddc.js"}');
  // Exports:
  return {
    material_tab__tab_mixin$46template: material_tab__tab_mixin$46template
  };
});

//# sourceMappingURL=tab_mixin.template.ddc.js.map
