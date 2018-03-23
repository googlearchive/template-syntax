define(['dart_sdk', 'packages/angular/angular.template'], function(dart_sdk, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const utils__angular__reference__reference$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(utils__angular__reference__reference$46template, {
    /*utils__angular__reference__reference$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__angular__reference__reference$46template.initReflector = function() {
    if (dart.test(utils__angular__reference__reference$46template._visited)) {
      return;
    }
    utils__angular__reference__reference$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.fn(utils__angular__reference__reference$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/utils/angular/reference/reference.template.ddc", {
    "package:angular_components/utils/angular/reference/reference.template.dart": utils__angular__reference__reference$46template
  }, '{"version":3,"sourceRoot":"","sources":["reference.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,wDAAQ;YAAG;;;;;AAEb,kBAAI,wDAAQ,GAAE;AACZ;;AAEF,+DAAW;AAEX,IAAM,gCAAa;EACrB","file":"reference.template.ddc.js"}');
  // Exports:
  return {
    utils__angular__reference__reference$46template: utils__angular__reference__reference$46template
  };
});

//# sourceMappingURL=reference.template.ddc.js.map
