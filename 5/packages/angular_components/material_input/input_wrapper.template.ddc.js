define(['dart_sdk', 'packages/angular/angular.template'], function(dart_sdk, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const material_input__input_wrapper$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_input__input_wrapper$46template, {
    /*material_input__input_wrapper$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_input__input_wrapper$46template.initReflector = function() {
    if (dart.test(material_input__input_wrapper$46template._visited)) {
      return;
    }
    material_input__input_wrapper$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.fn(material_input__input_wrapper$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_input/input_wrapper.template.ddc", {
    "package:angular_components/material_input/input_wrapper.template.dart": material_input__input_wrapper$46template
  }, '{"version":3,"sourceRoot":"","sources":["input_wrapper.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,gCAAa;EACrB","file":"input_wrapper.template.ddc.js"}');
  // Exports:
  return {
    material_input__input_wrapper$46template: material_input__input_wrapper$46template
  };
});

//# sourceMappingURL=input_wrapper.template.ddc.js.map
