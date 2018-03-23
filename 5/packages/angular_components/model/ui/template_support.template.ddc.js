define(['dart_sdk', 'packages/angular/angular.template'], function(dart_sdk, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const model__ui__template_support$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__ui__template_support$46template, {
    /*model__ui__template_support$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__ui__template_support$46template.initReflector = function() {
    if (dart.test(model__ui__template_support$46template._visited)) {
      return;
    }
    model__ui__template_support$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.fn(model__ui__template_support$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/ui/template_support.template.ddc", {
    "package:angular_components/model/ui/template_support.template.dart": model__ui__template_support$46template
  }, '{"version":3,"sourceRoot":"","sources":["template_support.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,gCAAa;EACrB","file":"template_support.template.ddc.js"}');
  // Exports:
  return {
    model__ui__template_support$46template: model__ui__template_support$46template
  };
});

//# sourceMappingURL=template_support.template.ddc.js.map
