define(['dart_sdk', 'packages/angular_components/utils/color/color.template'], function(dart_sdk, color) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__color__color$46template = color.utils__color__color$46template;
  const _root = Object.create(null);
  const utils__color__material$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(utils__color__material$46template, {
    /*utils__color__material$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__color__material$46template.initReflector = function() {
    if (dart.test(utils__color__material$46template._visited)) {
      return;
    }
    utils__color__material$46template._visited = true;
    utils__color__color$46template.initReflector();
  };
  dart.fn(utils__color__material$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/utils/color/material.template.ddc", {
    "package:angular_components/utils/color/material.template.dart": utils__color__material$46template
  }, '{"version":3,"sourceRoot":"","sources":["material.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,4CAAa;EACrB","file":"material.template.ddc.js"}');
  // Exports:
  return {
    utils__color__material$46template: utils__color__material$46template
  };
});

//# sourceMappingURL=material.template.ddc.js.map
