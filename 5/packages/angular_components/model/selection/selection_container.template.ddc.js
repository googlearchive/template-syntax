define(['dart_sdk', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template'], function(dart_sdk, selection_model, selection_options, has_factory) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options.model__selection__selection_options$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const _root = Object.create(null);
  const model__selection__selection_container$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__selection__selection_container$46template, {
    /*model__selection__selection_container$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__selection__selection_container$46template.initReflector = function() {
    if (dart.test(model__selection__selection_container$46template._visited)) {
      return;
    }
    model__selection__selection_container$46template._visited = true;
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
  };
  dart.fn(model__selection__selection_container$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/selection/selection_container.template.ddc", {
    "package:angular_components/model/selection/selection_container.template.dart": model__selection__selection_container$46template
  }, '{"version":3,"sourceRoot":"","sources":["selection_container.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAcI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,0DAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,+CAAa;EACrB","file":"selection_container.template.ddc.js"}');
  // Exports:
  return {
    model__selection__selection_container$46template: model__selection__selection_container$46template
  };
});

//# sourceMappingURL=selection_container.template.ddc.js.map
