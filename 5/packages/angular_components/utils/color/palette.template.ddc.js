define(['dart_sdk', 'packages/angular_components/utils/color/material.template'], function(dart_sdk, material) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__color__material$46template = material.utils__color__material$46template;
  const _root = Object.create(null);
  const utils__color__palette$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(utils__color__palette$46template, {
    /*utils__color__palette$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__color__palette$46template.initReflector = function() {
    if (dart.test(utils__color__palette$46template._visited)) {
      return;
    }
    utils__color__palette$46template._visited = true;
    utils__color__material$46template.initReflector();
    utils__color__material$46template.initReflector();
  };
  dart.fn(utils__color__palette$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/utils/color/palette.template.ddc", {
    "package:angular_components/utils/color/palette.template.dart": utils__color__palette$46template
  }, '{"version":3,"sourceRoot":"","sources":["palette.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,yCAAQ;YAAG;;;;;AAEb,kBAAI,yCAAQ,GAAE;AACZ;;AAEF,gDAAW;AAEX,IAAM,+CAAa;AACnB,IAAM,+CAAa;EACrB","file":"palette.template.ddc.js"}');
  // Exports:
  return {
    utils__color__palette$46template: utils__color__palette$46template
  };
});

//# sourceMappingURL=palette.template.ddc.js.map
