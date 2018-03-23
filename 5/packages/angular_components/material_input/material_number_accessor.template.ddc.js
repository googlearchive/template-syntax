define(['dart_sdk', 'packages/angular_components/material_input/base_material_input.template', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/material_input_default_value_accessor.template', 'packages/angular_components/material_input/material_input_error_keys.template', 'packages/angular_components/material_input/material_number_validators.template', 'packages/angular/angular.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, base_material_input, material_input, material_input_default_value_accessor, material_input_error_keys, material_number_validators, angular, properties, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_input__base_material_input$46template = base_material_input.material_input__base_material_input$46template;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__material_input_default_value_accessor$46template = material_input_default_value_accessor.material_input__material_input_default_value_accessor$46template;
  const material_input__material_input_error_keys$46template = material_input_error_keys.material_input__material_input_error_keys$46template;
  const material_input__material_number_validators$46template = material_number_validators.material_input__material_number_validators$46template;
  const angular$46template = angular.angular$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const material_input__material_number_accessor$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_input__material_number_accessor$46template, {
    /*material_input__material_number_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_input__material_number_accessor$46template.initReflector = function() {
    if (dart.test(material_input__material_number_accessor$46template._visited)) {
      return;
    }
    material_input__material_number_accessor$46template._visited = true;
    material_input__base_material_input$46template.initReflector();
    material_input__material_input$46template.initReflector();
    material_input__material_input$46template.initReflector();
    material_input__material_input_default_value_accessor$46template.initReflector();
    material_input__material_input_error_keys$46template.initReflector();
    material_input__material_number_validators$46template.initReflector();
    material_input__material_number_validators$46template.initReflector();
    angular$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(material_input__material_number_accessor$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_input/material_number_accessor.template.ddc", {
    "package:angular_components/material_input/material_number_accessor.template.dart": material_input__material_number_accessor$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_number_accessor.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MA6BI,4DAAQ;YAAG;;;;;AAEb,kBAAI,4DAAQ,GAAE;AACZ;;AAEF,mEAAW;AAEX,IAAM,4DAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,8EAAa;AACnB,IAAM,kEAAa;AACnB,IAAM,mEAAa;AACnB,IAAM,mEAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,sCAAa;EACrB","file":"material_number_accessor.template.ddc.js"}');
  // Exports:
  return {
    material_input__material_number_accessor$46template: material_input__material_number_accessor$46template
  };
});

//# sourceMappingURL=material_number_accessor.template.ddc.js.map
