define(['dart_sdk', 'packages/angular_components/src/material_tree/group/material_tree_group.template', 'packages/angular_components/src/material_tree/material_tree_dropdown.template', 'packages/angular_components/src/material_tree/material_tree_expand_state.template', 'packages/angular_components/src/material_tree/material_tree_impl.template', 'packages/angular_components/src/material_tree/material_tree_rendering_options.template'], function(dart_sdk, material_tree_group, material_tree_dropdown, material_tree_expand_state, material_tree_impl, material_tree_rendering_options) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tree__group__material_tree_group$46template = material_tree_group.src__material_tree__group__material_tree_group$46template;
  const src__material_tree__material_tree_dropdown$46template = material_tree_dropdown.src__material_tree__material_tree_dropdown$46template;
  const src__material_tree__material_tree_expand_state$46template = material_tree_expand_state.src__material_tree__material_tree_expand_state$46template;
  const src__material_tree__material_tree_impl$46template = material_tree_impl.src__material_tree__material_tree_impl$46template;
  const src__material_tree__material_tree_rendering_options$46template = material_tree_rendering_options.src__material_tree__material_tree_rendering_options$46template;
  const _root = Object.create(null);
  const material_tree__material_tree$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_tree__material_tree$46template, {
    /*material_tree__material_tree$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tree__material_tree$46template.initReflector = function() {
    if (dart.test(material_tree__material_tree$46template._visited)) {
      return;
    }
    material_tree__material_tree$46template._visited = true;
    src__material_tree__group__material_tree_group$46template.initReflector();
    src__material_tree__material_tree_dropdown$46template.initReflector();
    src__material_tree__material_tree_expand_state$46template.initReflector();
    src__material_tree__material_tree_impl$46template.initReflector();
    src__material_tree__material_tree_rendering_options$46template.initReflector();
  };
  dart.fn(material_tree__material_tree$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_tree/material_tree.template.ddc", {
    "package:angular_components/material_tree/material_tree.template.dart": material_tree__material_tree$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tree.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAaI,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAM,uEAAa;AACnB,IAAM,mEAAa;AACnB,IAAM,uEAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,4EAAa;EACrB","file":"material_tree.template.ddc.js"}');
  // Exports:
  return {
    material_tree__material_tree$46template: material_tree__material_tree$46template
  };
});

//# sourceMappingURL=material_tree.template.ddc.js.map
