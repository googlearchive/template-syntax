define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__id_generator__id_generator$46template = id_generator.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const model__a11y__active_item$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__a11y__active_item$46template, {
    /*model__a11y__active_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__a11y__active_item$46template.initReflector = function() {
    if (dart.test(model__a11y__active_item$46template._visited)) {
      return;
    }
    model__a11y__active_item$46template._visited = true;
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.fn(model__a11y__active_item$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/a11y/active_item.template.ddc", {
    "package:angular_components/model/a11y/active_item.template.dart": model__a11y__active_item$46template
  }, '{"version":3,"sourceRoot":"","sources":["active_item.template.dart"],"names":[],"mappings":";;;;;;;;;;MAaI,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAM,0DAAa;EACrB","file":"active_item.template.ddc.js"}');
  // Exports:
  return {
    model__a11y__active_item$46template: model__a11y__active_item$46template
  };
});

//# sourceMappingURL=active_item.template.ddc.js.map
