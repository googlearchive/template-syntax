define(['dart_sdk', 'packages/angular/src/core/di/opaque_token', 'packages/intl/intl', 'packages/angular_components/src/material_tree/material_tree_node', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/material_tree/material_tree_root'], function(dart_sdk, opaque_token, intl, material_tree_node, lifecycle_hooks, selection_options, material_dropdown_base, material_tree_root) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const intl$ = intl.intl;
  const src__material_tree__material_tree_node = material_tree_node.src__material_tree__material_tree_node;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__material_tree__material_tree_root = material_tree_root.src__material_tree__material_tree_root;
  const _root = Object.create(null);
  const src__material_tree__group__material_tree_group = Object.create(_root);
  dart.defineLazy(src__material_tree__group__material_tree_group, {
    /*src__material_tree__group__material_tree_group.materialTreeLeftPaddingToken*/get materialTreeLeftPaddingToken() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'));
    }
  });
  const _root$ = Symbol('_root');
  const _dropdownHandle = Symbol('_dropdownHandle');
  const _maxInitialOptionsShown = Symbol('_maxInitialOptionsShown');
  const _visibleGroup = Symbol('_visibleGroup');
  const _sliceOptionGroup = Symbol('_sliceOptionGroup');
  src__material_tree__group__material_tree_group.MaterialTreeGroupComponent = class MaterialTreeGroupComponent extends src__material_tree__material_tree_node.MaterialTreeNode {
    get level() {
      return this[level];
    }
    set level(value) {
      this[level] = value;
    }
    get parentHasCheckbox() {
      return this[parentHasCheckbox];
    }
    set parentHasCheckbox(value) {
      this[parentHasCheckbox] = value;
    }
    get allowParentSingleSelection() {
      return this[allowParentSingleSelection];
    }
    set allowParentSingleSelection(value) {
      this[allowParentSingleSelection] = value;
    }
    get maxInitialOptionsShown() {
      return this[_maxInitialOptionsShown];
    }
    set maxInitialOptionsShown(value) {
      this[_maxInitialOptionsShown] = value;
      if (this[_maxInitialOptionsShown] != null) {
        this[_sliceOptionGroup](this[_maxInitialOptionsShown]);
      }
    }
    get visibleGroup() {
      return this[_visibleGroup];
    }
    get fixedPadding() {
      return this[fixedPadding];
    }
    set fixedPadding(value) {
      super.fixedPadding = value;
    }
    set expandAll(value) {
      super.expandAll = value;
    }
    get expandAll() {
      return super.expandAll;
    }
    get isMaterialTreeGroup() {
      return this[isMaterialTreeGroup];
    }
    set isMaterialTreeGroup(value) {
      super.isMaterialTreeGroup = value;
    }
    showCheckbox(option) {
      return dart.test(this.showSelectionState) && (dart.test(this.isSelectable(option)) || dart.test(this.showDisabledCheckbox(option)));
    }
    getIndent(option) {
      let padding = 0;
      if (dart.notNull(this.level) > 0) {
        padding = dart.notNull(padding) + (dart.notNull(this.level) - 1) * dart.notNull(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.rowIndentationStep);
        if (!dart.test(this.showCheckbox(option)) || dart.test(this.parentHasCheckbox)) {
          padding = dart.notNull(padding) + dart.notNull(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.checkboxWidth);
        }
      }
      return dart.str`${padding}px`;
    }
    handleExpansion(e, option) {
      this.toggleExpansion(option);
      e.stopPropagation();
    }
    handleSelectionOrExpansion(e, option) {
      if (!dart.test(this.isExpandable(option)) && dart.test(this.isSelectable(option)) || dart.test(this.allowParentSingleSelection) && dart.test(this.isSelectable(option)) || dart.test(this.isMultiSelect) && dart.test(this.isSelectable(option))) {
        let previouslyToggledNode = this[_root$].previouslyToggledNode;
        this[_root$].previouslyToggledNode = option;
        this.setSelectionState(option, !dart.test(this.isSelected(option)));
        if (dart.test(this.isMultiSelect) && previouslyToggledNode != null && html.MouseEvent.is(e) && dart.test(e.shiftKey)) {
          this.toggleSelectionRangeInclusive(previouslyToggledNode, option, this.isSelected(previouslyToggledNode));
        }
        if (!dart.test(this.isMultiSelect) && !dart.test(this.allowParentSingleSelection)) {
          this[_dropdownHandle] == null ? null : this[_dropdownHandle].close();
        }
      } else {
        this.toggleExpansion(option);
      }
      e.stopPropagation();
    }
    [_sliceOptionGroup](end) {
      if (dart.notNull(end) < dart.notNull(this.group.length)) {
        this[_visibleGroup] = this.group.slicedOptionGroup(0, end);
      } else {
        this[_visibleGroup] = this.group;
      }
    }
    set group(_group) {
      super.group = _group;
      if (this[_maxInitialOptionsShown] == null) {
        this[_visibleGroup] = this.group;
        return;
      }
      this[_sliceOptionGroup](this[_maxInitialOptionsShown]);
    }
    get group() {
      return super.group;
    }
    viewMoreOptions(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this[_visibleGroup] = this.group;
    }
    get viewMoreLinkVisible() {
      return this[_maxInitialOptionsShown] != null && !(this[_visibleGroup] == this.group);
    }
    ngOnDestroy() {
      this.onDestroy();
    }
    get viewMoreMsg() {
      return this[viewMoreMsg];
    }
    set viewMoreMsg(value) {
      super.viewMoreMsg = value;
    }
    static get _viewMoreMsg() {
      return intl$.Intl.message('View more', {desc: 'Label for a link that allows user to see the collapsed options.'});
    }
  };
  (src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.new = function(root, changeDetector, dropdownHandle, constantLeftPadding) {
    if (dropdownHandle === void 0) dropdownHandle = null;
    if (constantLeftPadding === void 0) constantLeftPadding = null;
    this[level] = 0;
    this[parentHasCheckbox] = false;
    this[allowParentSingleSelection] = false;
    this[_maxInitialOptionsShown] = null;
    this[_visibleGroup] = null;
    this[isMaterialTreeGroup] = true;
    this[viewMoreMsg] = src__material_tree__group__material_tree_group.MaterialTreeGroupComponent._viewMoreMsg;
    this[_root$] = root;
    this[_dropdownHandle] = dropdownHandle;
    this[fixedPadding] = dart.str`${constantLeftPadding != null ? constantLeftPadding : src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.defaultConstantLeftPadding}px`;
    src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.__proto__.new.call(this, root, changeDetector);
  }).prototype = src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent);
  const level = Symbol("MaterialTreeGroupComponent.level");
  const parentHasCheckbox = Symbol("MaterialTreeGroupComponent.parentHasCheckbox");
  const allowParentSingleSelection = Symbol("MaterialTreeGroupComponent.allowParentSingleSelection");
  const fixedPadding = Symbol("MaterialTreeGroupComponent.fixedPadding");
  const isMaterialTreeGroup = Symbol("MaterialTreeGroupComponent.isMaterialTreeGroup");
  const viewMoreMsg = Symbol("MaterialTreeGroupComponent.viewMoreMsg");
  src__material_tree__group__material_tree_group.MaterialTreeGroupComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.__proto__),
    showCheckbox: dart.fnType(core.bool, [dart.dynamic]),
    getIndent: dart.fnType(core.String, [dart.dynamic]),
    handleExpansion: dart.fnType(dart.void, [html.Event, core.Object]),
    handleSelectionOrExpansion: dart.fnType(dart.void, [html.Event, core.Object]),
    [_sliceOptionGroup]: dart.fnType(dart.void, [core.int]),
    viewMoreOptions: dart.fnType(dart.void, [html.Event]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, () => ({
    __proto__: dart.getGetters(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.__proto__),
    maxInitialOptionsShown: dart.fnType(core.int, []),
    visibleGroup: dart.fnType(model__selection__selection_options.OptionGroup, []),
    viewMoreLinkVisible: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, () => ({
    __proto__: dart.getSetters(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.__proto__),
    maxInitialOptionsShown: dart.fnType(dart.void, [core.int]),
    expandAll: dart.fnType(dart.void, [core.bool]),
    group: dart.fnType(dart.void, [model__selection__selection_options.OptionGroup])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.__proto__),
    [_dropdownHandle]: dart.finalFieldType(mixins__material_dropdown_base.DropdownHandle),
    level: dart.fieldType(core.int),
    parentHasCheckbox: dart.fieldType(core.bool),
    allowParentSingleSelection: dart.fieldType(core.bool),
    [_root$]: dart.finalFieldType(src__material_tree__material_tree_root.MaterialTreeRoot),
    [_maxInitialOptionsShown]: dart.fieldType(core.int),
    [_visibleGroup]: dart.fieldType(model__selection__selection_options.OptionGroup),
    fixedPadding: dart.finalFieldType(core.String),
    isMaterialTreeGroup: dart.finalFieldType(core.bool),
    viewMoreMsg: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, {
    /*src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.defaultConstantLeftPadding*/get defaultConstantLeftPadding() {
      return 24;
    },
    /*src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.baseGridStep*/get baseGridStep() {
      return 8;
    },
    /*src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.rowIndentationStep*/get rowIndentationStep() {
      return dart.notNull(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.baseGridStep) * 5;
    },
    /*src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.checkboxWidth*/get checkboxWidth() {
      return dart.notNull(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.baseGridStep) * 5;
    }
  });
  dart.trackLibraries("packages/angular_components/src/material_tree/group/material_tree_group.ddc", {
    "package:angular_components/src/material_tree/group/material_tree_group.dart": src__material_tree__group__material_tree_group
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_group.dart"],"names":[],"mappings":"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","file":"material_tree_group.ddc.js"}');
  // Exports:
  return {
    src__material_tree__group__material_tree_group: src__material_tree__group__material_tree_group
  };
});

//# sourceMappingURL=material_tree_group.ddc.js.map
