define(['dart_sdk', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/async/async.template'], function(dart_sdk, select, selection_options, has_renderer, async) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_options$46template = selection_options.model__selection__selection_options$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const _root = Object.create(null);
  const model__selection__string_selection_options$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__selection__string_selection_options$46template, {
    /*model__selection__string_selection_options$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__selection__string_selection_options$46template.initReflector = function() {
    if (dart.test(model__selection__string_selection_options$46template._visited)) {
      return;
    }
    model__selection__string_selection_options$46template._visited = true;
    model__selection__select$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    utils__async__async$46template.initReflector();
  };
  dart.fn(model__selection__string_selection_options$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/selection/string_selection_options.template.ddc", {
    "package:angular_components/model/selection/string_selection_options.template.dart": model__selection__string_selection_options$46template
  }, '{"version":3,"sourceRoot":"","sources":["string_selection_options.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAiBI,8DAAQ;YAAG;;;;;AAEb,kBAAI,8DAAQ,GAAE;AACZ;;AAEF,qEAAW;AAEX,IAAM,iDAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,4CAAa;EACrB","file":"string_selection_options.template.ddc.js"}');
  // Exports:
  return {
    model__selection__string_selection_options$46template: model__selection__string_selection_options$46template
  };
});

//# sourceMappingURL=string_selection_options.template.ddc.js.map
