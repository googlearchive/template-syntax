define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const material_input__material_input_error_keys = Object.create(_root);
  dart.defineLazy(material_input__material_input_error_keys, {
    /*material_input__material_input_error_keys.positiveIntegerRequiredErrorKey*/get positiveIntegerRequiredErrorKey() {
      return 'positive-number';
    },
    /*material_input__material_input_error_keys.nonNegativeIntegerRequiredErrorKey*/get nonNegativeIntegerRequiredErrorKey() {
      return 'non-negative';
    },
    /*material_input__material_input_error_keys.numberBelowLowerBoundErrorKey*/get numberBelowLowerBoundErrorKey() {
      return 'lower-bound-number';
    },
    /*material_input__material_input_error_keys.numberAboveUpperBoundErrorKey*/get numberAboveUpperBoundErrorKey() {
      return 'upper-bound-number';
    },
    /*material_input__material_input_error_keys.checkIntegerErrorKey*/get checkIntegerErrorKey() {
      return 'check-integer';
    },
    /*material_input__material_input_error_keys.inputNotNumberErrorKey*/get inputNotNumberErrorKey() {
      return 'material-input-number-error';
    }
  });
  dart.trackLibraries("packages/angular_components/material_input/material_input_error_keys.ddc", {
    "package:angular_components/material_input/material_input_error_keys.dart": material_input__material_input_error_keys
  }, '{"version":3,"sourceRoot":"","sources":["material_input_error_keys.dart"],"names":[],"mappings":";;;;;;;;MAIM,yEAA+B;YAAG;;MAClC,4EAAkC;YAAG;;MACrC,uEAA6B;YAAG;;MAChC,uEAA6B;YAAG;;MAChC,8DAAoB;YAAG;;MACvB,gEAAsB;YAAG","file":"material_input_error_keys.ddc.js"}');
  // Exports:
  return {
    material_input__material_input_error_keys: material_input__material_input_error_keys
  };
});

//# sourceMappingURL=material_input_error_keys.ddc.js.map
