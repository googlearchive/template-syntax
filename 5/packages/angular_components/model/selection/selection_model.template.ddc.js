define(['dart_sdk', 'packages/angular_components/src/model/selection/interfaces/selectable.template'], function(dart_sdk, selectable) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model__selection__interfaces__selectable$46template = selectable.src__model__selection__interfaces__selectable$46template;
  const _root = Object.create(null);
  const src__model__selection__radio_group_single_selection_model$46template = Object.create(_root);
  const src__model__selection__delegating_selection_model$46template = Object.create(_root);
  const model__selection__selection_model$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__model__selection__radio_group_single_selection_model$46template, {
    /*src__model__selection__radio_group_single_selection_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__model__selection__radio_group_single_selection_model$46template.initReflector = function() {
    if (dart.test(src__model__selection__radio_group_single_selection_model$46template._visited)) {
      return;
    }
    src__model__selection__radio_group_single_selection_model$46template._visited = true;
    src__model__selection__delegating_selection_model$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
  };
  dart.fn(src__model__selection__radio_group_single_selection_model$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__model__selection__delegating_selection_model$46template, {
    /*src__model__selection__delegating_selection_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__model__selection__delegating_selection_model$46template.initReflector = function() {
    if (dart.test(src__model__selection__delegating_selection_model$46template._visited)) {
      return;
    }
    src__model__selection__delegating_selection_model$46template._visited = true;
    model__selection__selection_model$46template.initReflector();
  };
  dart.fn(src__model__selection__delegating_selection_model$46template.initReflector, VoidTovoid());
  dart.defineLazy(model__selection__selection_model$46template, {
    /*model__selection__selection_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__selection__selection_model$46template.initReflector = function() {
    if (dart.test(model__selection__selection_model$46template._visited)) {
      return;
    }
    model__selection__selection_model$46template._visited = true;
    src__model__selection__delegating_selection_model$46template.initReflector();
    src__model__selection__interfaces__selectable$46template.initReflector();
    src__model__selection__radio_group_single_selection_model$46template.initReflector();
  };
  dart.fn(model__selection__selection_model$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/selection/selection_model.template.ddc", {
    "package:angular_components/src/model/selection/radio_group_single_selection_model.template.dart": src__model__selection__radio_group_single_selection_model$46template,
    "package:angular_components/src/model/selection/delegating_selection_model.template.dart": src__model__selection__delegating_selection_model$46template,
    "package:angular_components/model/selection/selection_model.template.dart": model__selection__selection_model$46template
  }, '{"version":3,"sourceRoot":"","sources":["../../src/model/selection/radio_group_single_selection_model.template.dart","../../src/model/selection/delegating_selection_model.template.dart","selection_model.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAYI,6EAAQ;YAAG;;;;;AAEb,kBAAI,6EAAQ,GAAE;AACZ;;AAEF,oFAAW;AAEX,IAAM,0EAAa;AACnB,IAAM,0DAAa;EACrB;;;MCTI,qEAAQ;YAAG;;;;;AAEb,kBAAI,qEAAQ,GAAE;AACZ;;AAEF,4EAAW;AAEX,IAAM,0DAAa;EACrB;;;MCLI,qDAAQ;YAAG;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAM,0EAAa;AACnB,IAAM,sEAAa;AACnB,IAAM,kFAAa;EACrB","file":"selection_model.template.ddc.js"}');
  // Exports:
  return {
    src__model__selection__radio_group_single_selection_model$46template: src__model__selection__radio_group_single_selection_model$46template,
    src__model__selection__delegating_selection_model$46template: src__model__selection__delegating_selection_model$46template,
    model__selection__selection_model$46template: model__selection__selection_model$46template
  };
});

//# sourceMappingURL=selection_model.template.ddc.js.map
