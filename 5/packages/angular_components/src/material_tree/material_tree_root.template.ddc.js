define(['dart_sdk', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/ui/has_factory.template'], function(dart_sdk, select, selection_container, has_factory) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container.model__selection__selection_container$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const _root = Object.create(null);
  const src__material_tree__material_tree_root$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tree__material_tree_root$46template, {
    /*src__material_tree__material_tree_root$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_root$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_root$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_root$46template._visited = true;
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
  };
  dart.fn(src__material_tree__material_tree_root$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tree/material_tree_root.template.ddc", {
    "package:angular_components/src/material_tree/material_tree_root.template.dart": src__material_tree__material_tree_root$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_root.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAcI,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAM,iDAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,+CAAa;EACrB","file":"material_tree_root.template.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_root$46template: src__material_tree__material_tree_root$46template
  };
});

//# sourceMappingURL=material_tree_root.template.ddc.js.map
