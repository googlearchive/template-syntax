define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/angular/properties/properties.template'], function(dart_sdk, angular, properties) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const _root = Object.create(null);
  const mixins__has_tab_index$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(mixins__has_tab_index$46template, {
    /*mixins__has_tab_index$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  mixins__has_tab_index$46template.initReflector = function() {
    if (dart.test(mixins__has_tab_index$46template._visited)) {
      return;
    }
    mixins__has_tab_index$46template._visited = true;
    angular$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
  };
  dart.fn(mixins__has_tab_index$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/mixins/has_tab_index.template.ddc", {
    "package:angular_components/mixins/has_tab_index.template.dart": mixins__has_tab_index$46template
  }, '{"version":3,"sourceRoot":"","sources":["has_tab_index.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,yCAAQ;YAAG;;;;;AAEb,kBAAI,yCAAQ,GAAE;AACZ;;AAEF,gDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,+DAAa;EACrB","file":"has_tab_index.template.ddc.js"}');
  // Exports:
  return {
    mixins__has_tab_index$46template: mixins__has_tab_index$46template
  };
});

//# sourceMappingURL=has_tab_index.template.ddc.js.map
