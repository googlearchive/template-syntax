define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular/angular.template'], function(dart_sdk, has_renderer, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const model__ui__has_factory$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__ui__has_factory$46template, {
    /*model__ui__has_factory$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__ui__has_factory$46template.initReflector = function() {
    if (dart.test(model__ui__has_factory$46template._visited)) {
      return;
    }
    model__ui__has_factory$46template._visited = true;
    model__ui__has_renderer$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(model__ui__has_factory$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/ui/has_factory.template.ddc", {
    "package:angular_components/model/ui/has_factory.template.dart": model__ui__has_factory$46template
  }, '{"version":3,"sourceRoot":"","sources":["has_factory.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,gDAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,gCAAa;EACrB","file":"has_factory.template.ddc.js"}');
  // Exports:
  return {
    model__ui__has_factory$46template: model__ui__has_factory$46template
  };
});

//# sourceMappingURL=has_factory.template.ddc.js.map
