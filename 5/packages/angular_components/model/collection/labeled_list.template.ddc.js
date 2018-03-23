define(['dart_sdk', 'packages/angular_components/model/ui/display_name.template'], function(dart_sdk, display_name) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__display_name$46template = display_name.model__ui__display_name$46template;
  const _root = Object.create(null);
  const model__collection__labeled_list$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__collection__labeled_list$46template, {
    /*model__collection__labeled_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__collection__labeled_list$46template.initReflector = function() {
    if (dart.test(model__collection__labeled_list$46template._visited)) {
      return;
    }
    model__collection__labeled_list$46template._visited = true;
    model__ui__display_name$46template.initReflector();
  };
  dart.fn(model__collection__labeled_list$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/collection/labeled_list.template.ddc", {
    "package:angular_components/model/collection/labeled_list.template.dart": model__collection__labeled_list$46template
  }, '{"version":3,"sourceRoot":"","sources":["labeled_list.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAM,gDAAa;EACrB","file":"labeled_list.template.ddc.js"}');
  // Exports:
  return {
    model__collection__labeled_list$46template: model__collection__labeled_list$46template
  };
});

//# sourceMappingURL=labeled_list.template.ddc.js.map
