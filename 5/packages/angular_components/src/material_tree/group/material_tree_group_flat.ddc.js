define(['dart_sdk', 'packages/angular_components/src/material_tree/material_tree_node', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/model/selection/selection_model'], function(dart_sdk, material_tree_node, material_dropdown_base, selection_model) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tree__material_tree_node = material_tree_node.src__material_tree__material_tree_node;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const _root = Object.create(null);
  const src__material_tree__group__material_tree_group_flat = Object.create(_root);
  src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent = class MaterialTreeGroupFlatListComponent extends src__material_tree__material_tree_node.MaterialTreeNode {
    get isMaterialTreeGroup() {
      return this[isMaterialTreeGroup];
    }
    set isMaterialTreeGroup(value) {
      super.isMaterialTreeGroup = value;
    }
  };
  (src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent.new = function(root, changeDetector) {
    this[isMaterialTreeGroup] = true;
    src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent.__proto__.new.call(this, root, changeDetector);
  }).prototype = src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent);
  const isMaterialTreeGroup = Symbol("MaterialTreeGroupFlatListComponent.isMaterialTreeGroup");
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent.__proto__),
    isMaterialTreeGroup: dart.finalFieldType(core.bool)
  }));
  const _dropdownHandle = Symbol('_dropdownHandle');
  src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent = class MaterialTreeGroupFlatRadioComponent extends src__material_tree__material_tree_node.MaterialTreeNode {
    get selectionModel() {
      return this[selectionModel];
    }
    set selectionModel(value) {
      super.selectionModel = value;
    }
    get isMaterialTreeGroup() {
      return this[isMaterialTreeGroup$];
    }
    set isMaterialTreeGroup(value) {
      super.isMaterialTreeGroup = value;
    }
    setSelectionState(option, state) {
      let retVal = super.setSelectionState(option, state);
      this[_dropdownHandle] == null ? null : this[_dropdownHandle].close();
      return retVal;
    }
  };
  (src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent.new = function(root, changeDetector, dropdownHandle) {
    if (dropdownHandle === void 0) dropdownHandle = null;
    this[isMaterialTreeGroup$] = true;
    this[_dropdownHandle] = dropdownHandle;
    this[selectionModel] = root.selection;
    src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent.__proto__.new.call(this, root, changeDetector);
  }).prototype = src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent);
  const selectionModel = Symbol("MaterialTreeGroupFlatRadioComponent.selectionModel");
  const isMaterialTreeGroup$ = Symbol("MaterialTreeGroupFlatRadioComponent.isMaterialTreeGroup");
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent.__proto__),
    setSelectionState: dart.fnType(core.bool, [dart.dynamic, core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent.__proto__),
    [_dropdownHandle]: dart.finalFieldType(mixins__material_dropdown_base.DropdownHandle),
    selectionModel: dart.finalFieldType(model__selection__selection_model.SelectionModel),
    isMaterialTreeGroup: dart.finalFieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent = class MaterialTreeGroupFlatCheckComponent extends src__material_tree__material_tree_node.MaterialTreeNode {
    get isMaterialTreeGroup() {
      return this[isMaterialTreeGroup$0];
    }
    set isMaterialTreeGroup(value) {
      super.isMaterialTreeGroup = value;
    }
  };
  (src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent.new = function(root, changeDetector, dropdownHandle) {
    if (dropdownHandle === void 0) dropdownHandle = null;
    this[isMaterialTreeGroup$0] = true;
    this[_dropdownHandle] = dropdownHandle;
    src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent.__proto__.new.call(this, root, changeDetector);
  }).prototype = src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent);
  const isMaterialTreeGroup$0 = Symbol("MaterialTreeGroupFlatCheckComponent.isMaterialTreeGroup");
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent.__proto__),
    [_dropdownHandle]: dart.finalFieldType(mixins__material_dropdown_base.DropdownHandle),
    isMaterialTreeGroup: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/src/material_tree/group/material_tree_group_flat.ddc", {
    "package:angular_components/src/material_tree/group/material_tree_group_flat.dart": src__material_tree__group__material_tree_group_flat
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_group_flat.dart"],"names":[],"mappings":";;;;;;;;;;;IAkCa;;;;;;;yGALP,IAAqB,EAAE,cAAgC;IAKhD,yBAAmB,GAAG;AAJ3B,oHAAM,IAAI,EAAE,cAAc;EAAC;;;;;;;;;IA8BZ;;;;;;IAUV;;;;;;sBAGY,MAAM,EAAE,KAAU;AACvC,UAAI,SAAS,uBAAuB,CAAC,MAAM,EAAE,KAAK;AAClD,2BAAe,kBAAf,qBAAe,MAAO;AACtB,YAAO,OAAM;IACf;;0GAdI,IAAqB,EAAE,cAAgC,EACrC,cAAe;QAAf,cAAe,aAAf,cAAe;IAM1B,0BAAmB,GAAG;IANX,qBAAe,GAAf,cAAe;IAC1B,oBAAc,GAAG,IAAI,UAAU;AACpC,qHAAM,IAAI,EAAE,cAAc;EAAC;;;;;;;;;;;;;;;IA0CtB;;;;;;;0GANP,IAAqB,EAAE,cAAgC,EACrC,cAAe;QAAf,cAAe,aAAf,cAAe;IAK1B,2BAAmB,GAAG;IALX,qBAAe,GAAf,cAAe;AAC/B,qHAAM,IAAI,EAAE,cAAc;EAAC","file":"material_tree_group_flat.ddc.js"}');
  // Exports:
  return {
    src__material_tree__group__material_tree_group_flat: src__material_tree__group__material_tree_group_flat
  };
});

//# sourceMappingURL=material_tree_group_flat.ddc.js.map
