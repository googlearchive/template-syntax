define(['dart_sdk', 'packages/angular_components/material_input/material_input_error_keys.template', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, material_input_error_keys, angular, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_input__material_input_error_keys$46template = material_input_error_keys.material_input__material_input_error_keys$46template;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const material_input__material_number_validators$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_input__material_number_validators$46template, {
    /*material_input__material_number_validators$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_input__material_number_validators$46template.initReflector = function() {
    if (dart.test(material_input__material_number_validators$46template._visited)) {
      return;
    }
    material_input__material_number_validators$46template._visited = true;
    material_input__material_input_error_keys$46template.initReflector();
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(material_input__material_number_validators$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_input/material_number_validators.template.ddc", {
    "package:angular_components/material_input/material_number_validators.template.dart": material_input__material_number_validators$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_number_validators.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAeI,8DAAQ;YAAG;;;;;AAEb,kBAAI,8DAAQ,GAAE;AACZ;;AAEF,qEAAW;AAEX,IAAM,kEAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,sCAAa;EACrB","file":"material_number_validators.template.ddc.js"}');
  // Exports:
  return {
    material_input__material_number_validators$46template: material_input__material_number_validators$46template
  };
});

//# sourceMappingURL=material_number_validators.template.ddc.js.map
