define(['dart_sdk', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone.template'], function(dart_sdk, managed_zone) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils__angular__managed_zone__managed_zone$46template = managed_zone.src__utils__angular__managed_zone__managed_zone$46template;
  const _root = Object.create(null);
  const utils__angular__managed_zone__interface$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(utils__angular__managed_zone__interface$46template, {
    /*utils__angular__managed_zone__interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__angular__managed_zone__interface$46template.initReflector = function() {
    if (dart.test(utils__angular__managed_zone__interface$46template._visited)) {
      return;
    }
    utils__angular__managed_zone__interface$46template._visited = true;
    src__utils__angular__managed_zone__managed_zone$46template.initReflector();
  };
  dart.fn(utils__angular__managed_zone__interface$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/utils/angular/managed_zone/interface.template.ddc", {
    "package:angular_components/utils/angular/managed_zone/interface.template.dart": utils__angular__managed_zone__interface$46template
  }, '{"version":3,"sourceRoot":"","sources":["interface.template.dart"],"names":[],"mappings":";;;;;;;;;;MASI,2DAAQ;YAAG;;;;;AAEb,kBAAI,2DAAQ,GAAE;AACZ;;AAEF,kEAAW;AAEX,IAAM,wEAAa;EACrB","file":"interface.template.ddc.js"}');
  // Exports:
  return {
    utils__angular__managed_zone__interface$46template: utils__angular__managed_zone__interface$46template
  };
});

//# sourceMappingURL=interface.template.ddc.js.map
