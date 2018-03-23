define(['dart_sdk', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/accepts_width.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/angular/properties/properties.template'], function(dart_sdk, selection_container, selection_model, accepts_width, has_renderer, properties) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__selection_container$46template = selection_container.model__selection__selection_container$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__ui__accepts_width$46template = accepts_width.model__ui__accepts_width$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const _root = Object.create(null);
  const material_select__material_select_base$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_select__material_select_base$46template, {
    /*material_select__material_select_base$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_select_base$46template.initReflector = function() {
    if (dart.test(material_select__material_select_base$46template._visited)) {
      return;
    }
    material_select__material_select_base$46template._visited = true;
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__ui__accepts_width$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
  };
  dart.fn(material_select__material_select_base$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_select/material_select_base.template.ddc", {
    "package:angular_components/material_select/material_select_base.template.dart": material_select__material_select_base$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_select_base.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAkBI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,8DAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,+DAAa;EACrB","file":"material_select_base.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_base$46template: material_select__material_select_base$46template
  };
});

//# sourceMappingURL=material_select_base.template.ddc.js.map
