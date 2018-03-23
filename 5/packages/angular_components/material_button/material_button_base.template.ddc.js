define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/button_decorator/button_decorator.template'], function(dart_sdk, angular, button_decorator) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const button_decorator__button_decorator$46template = button_decorator.button_decorator__button_decorator$46template;
  const _root = Object.create(null);
  const material_button__material_button_base$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_button__material_button_base$46template, {
    /*material_button__material_button_base$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_button__material_button_base$46template.initReflector = function() {
    if (dart.test(material_button__material_button_base$46template._visited)) {
      return;
    }
    material_button__material_button_base$46template._visited = true;
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
  };
  dart.fn(material_button__material_button_base$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_button/material_button_base.template.ddc", {
    "package:angular_components/material_button/material_button_base.template.dart": material_button__material_button_base$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_button_base.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAcI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,2DAAa;EACrB","file":"material_button_base.template.ddc.js"}');
  // Exports:
  return {
    material_button__material_button_base$46template: material_button__material_button_base$46template
  };
});

//# sourceMappingURL=material_button_base.template.ddc.js.map
