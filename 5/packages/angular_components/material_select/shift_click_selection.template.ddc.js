define(['dart_sdk', 'packages/angular_components/material_select/activation_handler.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template'], function(dart_sdk, activation_handler, selection_model, selection_options) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__activation_handler$46template = activation_handler.material_select__activation_handler$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options.model__selection__selection_options$46template;
  const _root = Object.create(null);
  const material_select__shift_click_selection$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_select__shift_click_selection$46template, {
    /*material_select__shift_click_selection$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__shift_click_selection$46template.initReflector = function() {
    if (dart.test(material_select__shift_click_selection$46template._visited)) {
      return;
    }
    material_select__shift_click_selection$46template._visited = true;
    material_select__activation_handler$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
  };
  dart.fn(material_select__shift_click_selection$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_select/shift_click_selection.template.ddc", {
    "package:angular_components/material_select/shift_click_selection.template.dart": material_select__shift_click_selection$46template
  }, '{"version":3,"sourceRoot":"","sources":["shift_click_selection.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAgBI,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAM,4DAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,4DAAa;EACrB","file":"shift_click_selection.template.ddc.js"}');
  // Exports:
  return {
    material_select__shift_click_selection$46template: material_select__shift_click_selection$46template
  };
});

//# sourceMappingURL=shift_click_selection.template.ddc.js.map
