define(['dart_sdk', 'packages/angular_components/material_select/material_dropdown_select.template', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, material_dropdown_select, angular, selection_model, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_dropdown_select$46template = material_dropdown_select.material_select__material_dropdown_select$46template;
  const angular$46template = angular.angular$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const material_select__material_dropdown_select_accessor$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_select__material_dropdown_select_accessor$46template, {
    /*material_select__material_dropdown_select_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_dropdown_select_accessor$46template.initReflector = function() {
    if (dart.test(material_select__material_dropdown_select_accessor$46template._visited)) {
      return;
    }
    material_select__material_dropdown_select_accessor$46template._visited = true;
    material_select__material_dropdown_select$46template.initReflector();
    angular$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(material_select__material_dropdown_select_accessor$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select_accessor.template.ddc", {
    "package:angular_components/material_select/material_dropdown_select_accessor.template.dart": material_select__material_dropdown_select_accessor$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select_accessor.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAkBI,sEAAQ;YAAG;;;;;AAEb,kBAAI,sEAAQ,GAAE;AACZ;;AAEF,6EAAW;AAEX,IAAM,kEAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,sCAAa;EACrB","file":"material_dropdown_select_accessor.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select_accessor$46template: material_select__material_dropdown_select_accessor$46template
  };
});

//# sourceMappingURL=material_dropdown_select_accessor.template.ddc.js.map
