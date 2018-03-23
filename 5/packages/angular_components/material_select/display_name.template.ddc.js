define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/model/ui/display_name.template', 'packages/angular_components/model/ui/has_renderer.template'], function(dart_sdk, angular, display_name, has_renderer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const model__ui__display_name$46template = display_name.model__ui__display_name$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const _root = Object.create(null);
  const material_select__display_name$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_select__display_name$46template, {
    /*material_select__display_name$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__display_name$46template.initReflector = function() {
    if (dart.test(material_select__display_name$46template._visited)) {
      return;
    }
    material_select__display_name$46template._visited = true;
    angular$46template.initReflector();
    model__ui__display_name$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
  };
  dart.fn(material_select__display_name$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_select/display_name.template.ddc", {
    "package:angular_components/material_select/display_name.template.dart": material_select__display_name$46template
  }, '{"version":3,"sourceRoot":"","sources":["display_name.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAcI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,gDAAa;EACrB","file":"display_name.template.ddc.js"}');
  // Exports:
  return {
    material_select__display_name$46template: material_select__display_name$46template
  };
});

//# sourceMappingURL=display_name.template.ddc.js.map
