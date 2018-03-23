define(['dart_sdk', 'packages/angular_components/src/model/selection/interfaces/selectable.template', 'packages/angular_components/utils/async/async.template'], function(dart_sdk, selectable, async) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model__selection__interfaces__selectable$46template = selectable.src__model__selection__interfaces__selectable$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const _root = Object.create(null);
  const model__selection__select$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__selection__select$46template, {
    /*model__selection__select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__selection__select$46template.initReflector = function() {
    if (dart.test(model__selection__select$46template._visited)) {
      return;
    }
    model__selection__select$46template._visited = true;
    src__model__selection__interfaces__selectable$46template.initReflector();
    utils__async__async$46template.initReflector();
  };
  dart.fn(model__selection__select$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/selection/select.template.ddc", {
    "package:angular_components/model/selection/select.template.dart": model__selection__select$46template
  }, '{"version":3,"sourceRoot":"","sources":["select.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAWI,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAM,sEAAa;AACnB,IAAM,4CAAa;EACrB","file":"select.template.ddc.js"}');
  // Exports:
  return {
    model__selection__select$46template: model__selection__select$46template
  };
});

//# sourceMappingURL=select.template.ddc.js.map
