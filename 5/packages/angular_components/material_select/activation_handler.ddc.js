define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const material_select__activation_handler = Object.create(_root);
  const _is_ActivationHandler_default = Symbol('_is_ActivationHandler_default');
  material_select__activation_handler.ActivationHandler$ = dart.generic(T => {
    class ActivationHandler extends core.Object {}
    (ActivationHandler.new = function() {
    }).prototype = ActivationHandler.prototype;
    dart.addTypeTests(ActivationHandler);
    ActivationHandler.prototype[_is_ActivationHandler_default] = true;
    return ActivationHandler;
  });
  material_select__activation_handler.ActivationHandler = material_select__activation_handler.ActivationHandler$();
  dart.addTypeTests(material_select__activation_handler.ActivationHandler, _is_ActivationHandler_default);
  dart.trackLibraries("packages/angular_components/material_select/activation_handler.ddc", {
    "package:angular_components/material_select/activation_handler.dart": material_select__activation_handler
  }, '{"version":3,"sourceRoot":"","sources":["activation_handler.dart"],"names":[],"mappings":";;;;;;;;;;;IAWA","file":"activation_handler.ddc.js"}');
  // Exports:
  return {
    material_select__activation_handler: material_select__activation_handler
  };
});

//# sourceMappingURL=activation_handler.ddc.js.map
