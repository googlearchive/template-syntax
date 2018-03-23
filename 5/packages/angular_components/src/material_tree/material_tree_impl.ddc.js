define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/src/material_tree/material_tree_root', 'packages/angular_components/model/selection/selection_options', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/src/material_tree/material_tree_rendering_options', 'packages/angular_components/src/material_tree/group/material_tree_group'], function(dart_sdk, selection_model, selection_container, material_tree_root, selection_options, app_view, material_tree_rendering_options, material_tree_group) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const src__material_tree__material_tree_root = material_tree_root.src__material_tree__material_tree_root;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__material_tree__material_tree_rendering_options = material_tree_rendering_options.src__material_tree__material_tree_rendering_options;
  const src__material_tree__group__material_tree_group = material_tree_group.src__material_tree__group__material_tree_group;
  const _root = Object.create(null);
  const src__material_tree__material_tree_impl = Object.create(_root);
  let dynamicToType = () => (dynamicToType = dart.constFn(dart.fnType(core.Type, [dart.dynamic])))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let ListOfMaterialTreeGroupComponent = () => (ListOfMaterialTreeGroupComponent = dart.constFn(core.List$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let const$;
  let const$0;
  const SelectionContainer_MaterialTreeRoot$ = class SelectionContainer_MaterialTreeRoot extends model__selection__selection_container.SelectionContainer {};
  (SelectionContainer_MaterialTreeRoot$.new = function() {
    src__material_tree__material_tree_root.MaterialTreeRoot.new.call(this);
    SelectionContainer_MaterialTreeRoot$.__proto__.new.call(this);
  }).prototype = SelectionContainer_MaterialTreeRoot$.prototype;
  dart.mixinMembers(SelectionContainer_MaterialTreeRoot$, src__material_tree__material_tree_root.MaterialTreeRoot);
  src__material_tree__material_tree_impl.MaterialTreeComponent = class MaterialTreeComponent extends SelectionContainer_MaterialTreeRoot$ {
    get optimizeForDropdown() {
      return this[optimizeForDropdown];
    }
    set optimizeForDropdown(value) {
      this[optimizeForDropdown] = value;
    }
    get renderingOptions() {
      return this[renderingOptions$];
    }
    set renderingOptions(value) {
      super.renderingOptions = value;
    }
    set componentRenderer(value) {
      super.componentRenderer = value;
    }
    get componentRenderer() {
      return super.componentRenderer;
    }
    set factoryRenderer(value) {
      super.factoryRenderer = value;
    }
    get factoryRenderer() {
      return super.factoryRenderer;
    }
    set itemRenderer(value) {
      super.itemRenderer = value;
    }
    get itemRenderer() {
      return super.itemRenderer;
    }
    set options(value) {
      super.options = value;
    }
    get options() {
      return super.options;
    }
    set selection(value) {
      super.selection = value;
    }
    get selection() {
      return super.selection;
    }
    get expandAll() {
      return this[expandAll];
    }
    set expandAll(value) {
      this[expandAll] = value;
    }
    get allowParentSingleSelection() {
      return this[allowParentSingleSelection];
    }
    set allowParentSingleSelection(value) {
      this[allowParentSingleSelection] = value;
    }
    shouldExpand(group, index) {
      if (this.renderingOptions == null) return this.expandAll;
      return dart.test(this.expandAll) || dart.test(this.renderingOptions.shouldExpand(group, index));
    }
    maxInitialOptionsShown(group, index) {
      if (this.renderingOptions == null) return null;
      return this.renderingOptions.maxInitialOptionsShown(group, index);
    }
    get treeGroupNodes() {
      return this[treeGroupNodes];
    }
    set treeGroupNodes(value) {
      this[treeGroupNodes] = value;
    }
    collapseAllTreeGroups() {
      for (let tree of this.treeGroupNodes) {
        tree.clearExpansions();
      }
    }
    get showFlatCheck() {
      return model__selection__selection_model.MultiSelectionModel.is(this.selection);
    }
    get showFlatList() {
      return dart.equals(this.selection, const$0 || (const$0 = dart.const(model__selection__selection_model.SelectionModel.new())));
    }
    get showFlatRadio() {
      return !dart.test(this.showFlatList) && !dart.test(this.showFlatCheck);
    }
    get role() {
      if (dart.test(this.supportsHierarchy)) {
        return "tree";
      } else if (dart.test(this.showFlatCheck) || dart.test(this.showFlatRadio)) {
        return "listbox";
      } else {
        return "list";
      }
    }
  };
  (src__material_tree__material_tree_impl.MaterialTreeComponent.new = function(parentTreeRoot, renderingOptions) {
    this[expandAll] = false;
    this[allowParentSingleSelection] = false;
    this[treeGroupNodes] = null;
    this[renderingOptions$] = renderingOptions;
    this[optimizeForDropdown] = (parentTreeRoot == null ? null : parentTreeRoot.optimizeForDropdown) === true;
    src__material_tree__material_tree_impl.MaterialTreeComponent.__proto__.new.call(this);
    this.selection = const$ || (const$ = dart.const(model__selection__selection_model.SelectionModel.new()));
  }).prototype = src__material_tree__material_tree_impl.MaterialTreeComponent.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl.MaterialTreeComponent);
  const optimizeForDropdown = Symbol("MaterialTreeComponent.optimizeForDropdown");
  const renderingOptions$ = Symbol("MaterialTreeComponent.renderingOptions");
  const expandAll = Symbol("MaterialTreeComponent.expandAll");
  const allowParentSingleSelection = Symbol("MaterialTreeComponent.allowParentSingleSelection");
  const treeGroupNodes = Symbol("MaterialTreeComponent.treeGroupNodes");
  dart.setMethodSignature(src__material_tree__material_tree_impl.MaterialTreeComponent, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl.MaterialTreeComponent.__proto__),
    shouldExpand: dart.fnType(core.bool, [model__selection__selection_options.OptionGroup, core.int]),
    maxInitialOptionsShown: dart.fnType(core.int, [model__selection__selection_options.OptionGroup, core.int]),
    collapseAllTreeGroups: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tree__material_tree_impl.MaterialTreeComponent, () => ({
    __proto__: dart.getGetters(src__material_tree__material_tree_impl.MaterialTreeComponent.__proto__),
    showFlatCheck: dart.fnType(core.bool, []),
    showFlatList: dart.fnType(core.bool, []),
    showFlatRadio: dart.fnType(core.bool, []),
    role: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(src__material_tree__material_tree_impl.MaterialTreeComponent, () => ({
    __proto__: dart.getSetters(src__material_tree__material_tree_impl.MaterialTreeComponent.__proto__),
    componentRenderer: dart.fnType(dart.void, [dynamicToType()]),
    factoryRenderer: dart.fnType(dart.void, [dynamicToComponentFactory()]),
    itemRenderer: dart.fnType(dart.void, [dynamicToString()]),
    options: dart.fnType(dart.void, [model__selection__selection_options.SelectionOptions]),
    selection: dart.fnType(dart.void, [model__selection__selection_model.SelectionModel])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl.MaterialTreeComponent, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl.MaterialTreeComponent.__proto__),
    optimizeForDropdown: dart.fieldType(core.bool),
    renderingOptions: dart.finalFieldType(src__material_tree__material_tree_rendering_options.MaterialTreeRenderingOptions),
    expandAll: dart.fieldType(core.bool),
    allowParentSingleSelection: dart.fieldType(core.bool),
    treeGroupNodes: dart.fieldType(ListOfMaterialTreeGroupComponent())
  }));
  dart.trackLibraries("packages/angular_components/src/material_tree/material_tree_impl.ddc", {
    "package:angular_components/src/material_tree/material_tree_impl.dart": src__material_tree__material_tree_impl
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_impl.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;IAsEO;;;;;;IAE8B;;;;;;0BAUb,KAAuB;AAC3C,6BAAuB,GAAG,KAAK;IACjC;;;;wBAIoB,KAAqB;AACvC,2BAAqB,GAAG,KAAK;IAC/B;;;;qBAIiB,KAAkB;AACjC,wBAAkB,GAAG,KAAK;IAC5B;;;;gBAIY,KAAsB;AAChC,mBAAa,GAAG,KAAK;IACvB;;;;kBAIc,KAAoB;AAChC,qBAAe,GAAG,KAAK;IACzB;;;;IAGK;;;;;;IAIA;;;;;;iBAMa,KAAiB,EAAE,KAAS;AAC5C,UAAI,qBAAgB,IAAI,MAAM,MAAO,eAAS;AAE9C,YAAiB,WAAV,cAAS,eAAI,qBAAgB,aAAa,CAAC,KAAK,EAAE,KAAK;IAChE;2BAM2B,KAAiB,EAAE,KAAS;AACrD,UAAI,qBAAgB,IAAI,MAAM,MAAO;AAErC,YAAO,sBAAgB,uBAAuB,CAAC,KAAK,EAAE,KAAK;IAC7D;IAGiC;;;;;;;AAO/B,eAAS,OAAQ,oBAAc,EAAE;AAC/B,YAAI,gBAAgB;;IAExB;;sEAG0B,cAAS;IAAuB;;yBAGjC,cAAS,EAAI,iCAAM,oDAAc;IAAE;;YAGpB,YAAb,iBAAY,gBAAK,kBAAa;;;AAIvD,oBAAI,sBAAiB,GAAE;AACrB,cAAO;YACF,eAAI,kBAAa,eAAI,kBAAa,GAAE;AACzC,cAAO;aACF;AACL,cAAO;;IAEX;;+EA9FsB,cAAuD,EACzE,gBAAyC;IAoCxC,eAAS,GAAG;IAIZ,gCAA0B,GAAG;IAuBD,oBAAc;IA/DlB,uBAAgB,GAAhB,gBAAgB;IACvC,yBAAmB,IAAG,cAAc,kBAAd,cAAc,oBAAqB,MAAI;;AACjE,kBAAS,GAAG,+BAAM,oDAAc;EAClC","file":"material_tree_impl.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_impl: src__material_tree__material_tree_impl
  };
});

//# sourceMappingURL=material_tree_impl.ddc.js.map
