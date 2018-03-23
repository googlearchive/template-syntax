define(['dart_sdk', 'packages/angular_components/model/ui/highlighted_text_model.template'], function(dart_sdk, highlighted_text_model) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__highlighted_text_model$46template = highlighted_text_model.model__ui__highlighted_text_model$46template;
  const _root = Object.create(null);
  const model__ui__highlight_provider$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__ui__highlight_provider$46template, {
    /*model__ui__highlight_provider$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__ui__highlight_provider$46template.initReflector = function() {
    if (dart.test(model__ui__highlight_provider$46template._visited)) {
      return;
    }
    model__ui__highlight_provider$46template._visited = true;
    model__ui__highlighted_text_model$46template.initReflector();
  };
  dart.fn(model__ui__highlight_provider$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/ui/highlight_provider.template.ddc", {
    "package:angular_components/model/ui/highlight_provider.template.dart": model__ui__highlight_provider$46template
  }, '{"version":3,"sourceRoot":"","sources":["highlight_provider.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,0DAAa;EACrB","file":"highlight_provider.template.ddc.js"}');
  // Exports:
  return {
    model__ui__highlight_provider$46template: model__ui__highlight_provider$46template
  };
});

//# sourceMappingURL=highlight_provider.template.ddc.js.map
