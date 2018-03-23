define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/src/material_tree/material_tree_expand_state.template', 'packages/angular_components/src/material_tree/material_tree_root.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, angular, select, selection_model, selection_options, has_factory, material_tree_expand_state, material_tree_root, async, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options.model__selection__selection_options$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const src__material_tree__material_tree_expand_state$46template = material_tree_expand_state.src__material_tree__material_tree_expand_state$46template;
  const src__material_tree__material_tree_root$46template = material_tree_root.src__material_tree__material_tree_root$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const src__material_tree__material_tree_node$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tree__material_tree_node$46template, {
    /*src__material_tree__material_tree_node$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_node$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_node$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_node$46template._visited = true;
    angular$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    src__material_tree__material_tree_expand_state$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    utils__async__async$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(src__material_tree__material_tree_node$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tree/material_tree_node.template.ddc", {
    "package:angular_components/src/material_tree/material_tree_node.template.dart": src__material_tree__material_tree_node$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_node.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MA4BI,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,uEAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,kDAAa;EACrB","file":"material_tree_node.template.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_node$46template: src__material_tree__material_tree_node$46template
  };
});

//# sourceMappingURL=material_tree_node.template.ddc.js.map
