define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/material_input_error_keys.template', 'packages/angular_components/material_input/material_number_accessor.template'], function(dart_sdk, angular, material_input, material_input_error_keys, material_number_accessor) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__material_input_error_keys$46template = material_input_error_keys.material_input__material_input_error_keys$46template;
  const material_input__material_number_accessor$46template = material_number_accessor.material_input__material_number_accessor$46template;
  const _root = Object.create(null);
  const material_input__material_percent_directive$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_input__material_percent_directive$46template, {
    /*material_input__material_percent_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_input__material_percent_directive$46template.initReflector = function() {
    if (dart.test(material_input__material_percent_directive$46template._visited)) {
      return;
    }
    material_input__material_percent_directive$46template._visited = true;
    angular$46template.initReflector();
    material_input__material_input$46template.initReflector();
    material_input__material_input_error_keys$46template.initReflector();
    material_input__material_number_accessor$46template.initReflector();
  };
  dart.fn(material_input__material_percent_directive$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_input/material_percent_directive.template.ddc", {
    "package:angular_components/material_input/material_percent_directive.template.dart": material_input__material_percent_directive$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_percent_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAiBI,8DAAQ;YAAG;;;;;AAEb,kBAAI,8DAAQ,GAAE;AACZ;;AAEF,qEAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,kEAAa;AACnB,IAAM,iEAAa;EACrB","file":"material_percent_directive.template.ddc.js"}');
  // Exports:
  return {
    material_input__material_percent_directive$46template: material_input__material_percent_directive$46template
  };
});

//# sourceMappingURL=material_percent_directive.template.ddc.js.map
