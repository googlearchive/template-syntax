define(['dart_sdk', 'packages/angular_components/model/collection/labeled_list.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, labeled_list, observable, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__collection__labeled_list$46template = labeled_list.model__collection__labeled_list$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const src__model__selection__delegating_selection_options$46template = Object.create(_root);
  const model__selection__selection_options$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__model__selection__delegating_selection_options$46template, {
    /*src__model__selection__delegating_selection_options$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__model__selection__delegating_selection_options$46template.initReflector = function() {
    if (dart.test(src__model__selection__delegating_selection_options$46template._visited)) {
      return;
    }
    src__model__selection__delegating_selection_options$46template._visited = true;
    model__selection__selection_options$46template.initReflector();
  };
  dart.fn(src__model__selection__delegating_selection_options$46template.initReflector, VoidTovoid());
  dart.defineLazy(model__selection__selection_options$46template, {
    /*model__selection__selection_options$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__selection__selection_options$46template.initReflector = function() {
    if (dart.test(model__selection__selection_options$46template._visited)) {
      return;
    }
    model__selection__selection_options$46template._visited = true;
    model__collection__labeled_list$46template.initReflector();
    model__observable__observable$46template.initReflector();
    src__model__selection__delegating_selection_options$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(model__selection__selection_options$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/selection/selection_options.template.ddc", {
    "package:angular_components/src/model/selection/delegating_selection_options.template.dart": src__model__selection__delegating_selection_options$46template,
    "package:angular_components/model/selection/selection_options.template.dart": model__selection__selection_options$46template
  }, '{"version":3,"sourceRoot":"","sources":["../../src/model/selection/delegating_selection_options.template.dart","selection_options.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAWI,uEAAQ;YAAG;;;;;AAEb,kBAAI,uEAAQ,GAAE;AACZ;;AAEF,8EAAW;AAEX,IAAM,4DAAa;EACrB;;;MCHI,uDAAQ;YAAG;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAM,wDAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,4EAAa;AACnB,IAAM,kDAAa;EACrB","file":"selection_options.template.ddc.js"}');
  // Exports:
  return {
    src__model__selection__delegating_selection_options$46template: src__model__selection__delegating_selection_options$46template,
    model__selection__selection_options$46template: model__selection__selection_options$46template
  };
});

//# sourceMappingURL=selection_options.template.ddc.js.map
