define(['dart_sdk', 'packages/angular_components/material_input/base_material_input.template', 'packages/angular/angular.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, base_material_input, angular, disposer, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_input__base_material_input$46template = base_material_input.material_input__base_material_input$46template;
  const angular$46template = angular.angular$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const material_input__material_input_default_value_accessor$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_input__material_input_default_value_accessor$46template, {
    /*material_input__material_input_default_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_input__material_input_default_value_accessor$46template.initReflector = function() {
    if (dart.test(material_input__material_input_default_value_accessor$46template._visited)) {
      return;
    }
    material_input__material_input_default_value_accessor$46template._visited = true;
    material_input__base_material_input$46template.initReflector();
    angular$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(material_input__material_input_default_value_accessor$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_input/material_input_default_value_accessor.template.ddc", {
    "package:angular_components/material_input/material_input_default_value_accessor.template.dart": material_input__material_input_default_value_accessor$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_input_default_value_accessor.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAiBI,yEAAQ;YAAG;;;;;AAEb,kBAAI,yEAAQ,GAAE;AACZ;;AAEF,gFAAW;AAEX,IAAM,4DAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,sCAAa;EACrB","file":"material_input_default_value_accessor.template.ddc.js"}');
  // Exports:
  return {
    material_input__material_input_default_value_accessor$46template: material_input__material_input_default_value_accessor$46template
  };
});

//# sourceMappingURL=material_input_default_value_accessor.template.ddc.js.map
