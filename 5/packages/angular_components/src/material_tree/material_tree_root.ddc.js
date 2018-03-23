define(['dart_sdk', 'packages/angular_components/model/selection/select', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/has_factory'], function(dart_sdk, select, selection_container, has_renderer, has_factory) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__select = select.model__selection__select;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__ui__has_factory = has_factory.model__ui__has_factory;
  const _root = Object.create(null);
  const src__material_tree__material_tree_root = Object.create(_root);
  let HasComponentRendererOfRendersValue$dynamic = () => (HasComponentRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_renderer.HasComponentRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  let HasFactoryRendererOfRendersValue$dynamic = () => (HasFactoryRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_factory.HasFactoryRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  const _is_MaterialTreeRoot_default = Symbol('_is_MaterialTreeRoot_default');
  src__material_tree__material_tree_root.MaterialTreeRoot$ = dart.generic(T => {
    let SelectionContainerOfT = () => (SelectionContainerOfT = dart.constFn(model__selection__selection_container.SelectionContainer$(T)))();
    class MaterialTreeRoot extends core.Object {
      get isFiltered() {
        return this[isFiltered];
      }
      set isFiltered(value) {
        this[isFiltered] = value;
      }
      get optimizeForDropdown() {
        return false;
      }
      get supportsFiltering() {
        return model__selection__select.Filterable.is(this.options);
      }
      get supportsHierarchy() {
        return model__selection__select.Parent.is(this.options);
      }
      get allowParentSingleSelection() {
        return false;
      }
      get previouslyToggledNode() {
        return this[previouslyToggledNode];
      }
      set previouslyToggledNode(value) {
        this[previouslyToggledNode] = T._check(value);
      }
    }
    (MaterialTreeRoot.new = function() {
      this[isFiltered] = false;
      this[previouslyToggledNode] = null;
    }).prototype = MaterialTreeRoot.prototype;
    dart.addTypeTests(MaterialTreeRoot);
    MaterialTreeRoot.prototype[_is_MaterialTreeRoot_default] = true;
    const isFiltered = Symbol("MaterialTreeRoot.isFiltered");
    const previouslyToggledNode = Symbol("MaterialTreeRoot.previouslyToggledNode");
    MaterialTreeRoot[dart.implements] = () => [SelectionContainerOfT(), HasComponentRendererOfRendersValue$dynamic(), HasFactoryRendererOfRendersValue$dynamic()];
    dart.setGetterSignature(MaterialTreeRoot, () => ({
      __proto__: dart.getGetters(MaterialTreeRoot.__proto__),
      optimizeForDropdown: dart.fnType(core.bool, []),
      supportsFiltering: dart.fnType(core.bool, []),
      supportsHierarchy: dart.fnType(core.bool, []),
      allowParentSingleSelection: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(MaterialTreeRoot, () => ({
      __proto__: dart.getFields(MaterialTreeRoot.__proto__),
      isFiltered: dart.fieldType(core.bool),
      previouslyToggledNode: dart.fieldType(T)
    }));
    return MaterialTreeRoot;
  });
  src__material_tree__material_tree_root.MaterialTreeRoot = src__material_tree__material_tree_root.MaterialTreeRoot$();
  dart.addTypeTests(src__material_tree__material_tree_root.MaterialTreeRoot, _is_MaterialTreeRoot_default);
  dart.trackLibraries("packages/angular_components/src/material_tree/material_tree_root.ddc", {
    "package:angular_components/src/material_tree/material_tree_root.dart": src__material_tree__material_tree_root
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_root.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAYO;;;;;;;cAG2B;MAAK;;sDAKP,YAAO;MAAc;;kDAOrB,YAAO;MAAU;;cAQR;MAAK;MAG1C;;;;;;;;MA1BG,gBAAU,GAAG;MA0BhB,2BAAqB;IACzB","file":"material_tree_root.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_root: src__material_tree__material_tree_root
  };
});

//# sourceMappingURL=material_tree_root.ddc.js.map
