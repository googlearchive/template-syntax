define(['dart_sdk', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/selection/select', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/src/material_tree/material_tree_expand_state', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/src/material_tree/material_tree_root', 'packages/angular/src/core/change_detection/change_detector_ref', 'packages/angular_components/src/utils/async/disposable_future'], function(dart_sdk, selection_options, disposer, select, selectable, material_tree_expand_state, selection_model, has_renderer, app_view, material_tree_root, change_detector_ref, disposable_future) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const model__selection__select = select.model__selection__select;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const src__material_tree__material_tree_expand_state = material_tree_expand_state.src__material_tree__material_tree_expand_state;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__material_tree__material_tree_root = material_tree_root.src__material_tree__material_tree_root;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const src__utils__async__disposable_future = disposable_future.src__utils__async__disposable_future;
  const _root = Object.create(null);
  const src__material_tree__material_tree_node = Object.create(_root);
  const $clear = dartx.clear;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  src__material_tree__material_tree_node.IsExpandable$ = dart.generic(T => {
    const IsExpandable = dart.typedef('IsExpandable', () => dart.fnType(core.bool, [T]));
    return IsExpandable;
  });
  src__material_tree__material_tree_node.IsExpandable = src__material_tree__material_tree_node.IsExpandable$();
  const _root$ = Symbol('_root');
  const _changeDetector = Symbol('_changeDetector');
  const _expandedNodes = Symbol('_expandedNodes');
  const _disposer = Symbol('_disposer');
  const _EMPTY_OPTION_GROUP = Symbol('_EMPTY_OPTION_GROUP');
  const _expandAll = Symbol('_expandAll');
  const _group = Symbol('_group');
  const _parent = Symbol('_parent');
  const _isExpandable = Symbol('_isExpandable');
  const _selectable = Symbol('_selectable');
  let const$;
  const _is_MaterialTreeNode_default = Symbol('_is_MaterialTreeNode_default');
  src__material_tree__material_tree_node.MaterialTreeNode$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    let IterableOfOptionGroupOfT = () => (IterableOfOptionGroupOfT = dart.constFn(core.Iterable$(OptionGroupOfT())))();
    let LinkedMapOfT$IterableOfOptionGroupOfT = () => (LinkedMapOfT$IterableOfOptionGroupOfT = dart.constFn(_js_helper.LinkedMap$(T, IterableOfOptionGroupOfT())))();
    let TTobool = () => (TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    let _NotAParentOfT$IterableOfOptionGroupOfT = () => (_NotAParentOfT$IterableOfOptionGroupOfT = dart.constFn(src__material_tree__material_tree_node._NotAParent$(T, IterableOfOptionGroupOfT())))();
    let ParentOfT$IterableOfOptionGroupOfT = () => (ParentOfT$IterableOfOptionGroupOfT = dart.constFn(model__selection__select.Parent$(T, IterableOfOptionGroupOfT())))();
    let SelectableOfT = () => (SelectableOfT = dart.constFn(src__model__selection__interfaces__selectable.Selectable$(T)))();
    let _AlwaysSelectableOfT = () => (_AlwaysSelectableOfT = dart.constFn(src__material_tree__material_tree_node._AlwaysSelectable$(T)))();
    let FutureOfIterableOfOptionGroupOfT = () => (FutureOfIterableOfOptionGroupOfT = dart.constFn(async.Future$(IterableOfOptionGroupOfT())))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    let MapOfT$IterableOfOptionGroupOfT = () => (MapOfT$IterableOfOptionGroupOfT = dart.constFn(core.Map$(T, IterableOfOptionGroupOfT())))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(src__material_tree__material_tree_root.MaterialTreeRoot$(T)))();
    class MaterialTreeNode extends core.Object {
      get expandAll() {
        return this[_expandAll];
      }
      set expandAll(expandAll) {
        this[_expandAll] = expandAll;
        dart.test(expandAll) ? this.expandAllOptions() : this.clearExpansions();
      }
      get allowParentSingleSelection() {
        return this[allowParentSingleSelection];
      }
      set allowParentSingleSelection(value) {
        this[allowParentSingleSelection] = value;
      }
      get group() {
        return this[_group];
      }
      set group(group) {
        OptionGroupOfT()._check(group);
        this[_disposer].dispose();
        this[_group] = group;
        if (!dart.test(this.expandAll)) {
          this[_expandedNodes][$clear]();
        }
        for (let key of group) {
          let manualExpand = false;
          if (src__material_tree__material_tree_expand_state.MaterialTreeExpandState.is(key)) {
            manualExpand = key.expanded;
            this[_disposer].addStreamSubscription(core.bool, key.expandEvents.listen(dart.fn(newVal => {
              if (newVal == this[_expandedNodes][$containsKey](key)) return;
              if (dart.test(newVal))
                this.expandOption(key);
              else
                this.closeOption(key);
            }, boolToNull())));
          }
          if (dart.test(this.expandAll) || dart.test(manualExpand)) {
            this.expandOption(key);
          }
        }
        this[_changeDetector].markForCheck();
      }
      clearExpansions() {
        this[_expandedNodes][$clear]();
        for (let option of this.group) {
          this.setExpandedState(option, false);
        }
        this[_changeDetector].markForCheck();
      }
      expandAllOptions() {
        for (let key of this.group) {
          this.expandOption(key);
        }
      }
      hasChildren(option) {
        T._check(option);
        return this[_parent].hasChildren(option);
      }
      isExpandable(option) {
        T._check(option);
        return this[_isExpandable](option);
      }
      isExpanded(option) {
        T._check(option);
        return this[_expandedNodes][$containsKey](option);
      }
      get isReadOnly() {
        return dart.equals(this[_root$].selection, const$ || (const$ = dart.const(model__selection__selection_model.SelectionModel.new())));
      }
      get isMultiSelect() {
        return model__selection__selection_model.MultiSelectionModel.is(this[_root$].selection);
      }
      isSelectable(option) {
        T._check(option);
        return (dart.test(this.isMultiSelect) || dart.test(this.allowParentSingleSelection)) && this[_selectable].getSelectable(option) === src__model__selection__interfaces__selectable.SelectableOption.Selectable || !dart.test(this.isExpandable(option)) && this[_selectable].getSelectable(option) === src__model__selection__interfaces__selectable.SelectableOption.Selectable;
      }
      showDisabledCheckbox(option) {
        return this[_selectable].getSelectable(T._check(option)) === src__model__selection__interfaces__selectable.SelectableOption.Disabled && !dart.test(this.hasChildren(T._check(option)));
      }
      isSelected(option) {
        T._check(option);
        return this[_root$].selection.isSelected(option);
      }
      getChildGroups(option) {
        return this[_expandedNodes][$_get](option);
      }
      expandOption(option) {
        return async.async(IterableOfOptionGroupOfT(), (function* expandOption() {
          T._check(option);
          let childGroups = (yield this[_parent].childrenOf(option));
          this.setExpandedState(option, true);
          if (dart.test(this.expandAll) && childGroups != null) {
            for (let group of childGroups) {
              for (let option of group) {
                this.expandOption(option);
              }
            }
          }
          this[_changeDetector].markForCheck();
          return this[_expandedNodes][$_set](option, childGroups);
        }).bind(this));
      }
      closeOption(option) {
        T._check(option);
        let previousState = this[_expandedNodes][$remove](option);
        this.setExpandedState(option, false);
        this[_changeDetector].markForCheck();
        return previousState != null;
      }
      setExpandedState(option, state) {
        T._check(option);
        if (src__material_tree__material_tree_expand_state.MaterialTreeExpandState.is(option)) {
          option.expanded = state;
        }
      }
      toggleExpansion(option) {
        T._check(option);
        let didClose = this.closeOption(option);
        if (!dart.test(didClose)) {
          return this.expandOption(option);
        }
        return FutureOfIterableOfOptionGroupOfT().value();
      }
      setSelectionState(option, state) {
        T._check(option);
        if (this.isSelected(option) == state) return state;
        if (!dart.test(state)) {
          return !dart.test(this[_root$].selection.deselect(option));
        } else {
          return this[_root$].selection.select(option);
        }
      }
      toggleSelectionRangeInclusive(firstNode, lastNode, isSelection) {
        T._check(firstNode);
        T._check(lastNode);
        if (!dart.test(this.group.contains(firstNode)) || !dart.test(this.group.contains(lastNode))) return;
        let isCurrentlyToggling = false;
        for (let node of this.group) {
          if (!dart.equals(node, firstNode) && !dart.equals(node, lastNode) && !isCurrentlyToggling) {
            continue;
          }
          if (dart.test(isSelection)) {
            this[_root$].selection.select(node);
          } else {
            this[_root$].selection.deselect(node);
          }
          if (dart.equals(node, firstNode) || dart.equals(node, lastNode)) {
            if (!isCurrentlyToggling) {
              isCurrentlyToggling = true;
            } else {
              break;
            }
          }
        }
      }
      get useComponentRenderer() {
        return this[_root$].factoryRenderer != null || this[_root$].componentRenderer != null;
      }
      get useItemRenderer() {
        return !dart.test(this.useComponentRenderer);
      }
      get showSelectionState() {
        return dart.test(this.isMultiSelect) || !dart.test(this[_root$].optimizeForDropdown);
      }
      getComponentType(option) {
        return this[_root$].componentRenderer != null ? dart.dsend(this[_root$], 'componentRenderer', option) : null;
      }
      getComponentFactory(option) {
        return this[_root$].factoryRenderer != null ? dart.dsend(this[_root$], 'factoryRenderer', option) : null;
      }
      getOptionAsText(option) {
        T._check(option);
        let l = TToString()._check(this[_root$].itemRenderer);
        let itemRenderer = l != null ? l : model__ui__has_renderer.defaultItemRenderer;
        return itemRenderer(option);
      }
      onDestroy() {
        this[_disposer].dispose();
        this[_disposer] = null;
      }
    }
    (MaterialTreeNode.new = function(root, changeDetector, opts) {
      let isExpandable = opts && 'isExpandable' in opts ? opts.isExpandable : null;
      this[_EMPTY_OPTION_GROUP] = new (OptionGroupOfT()).new(dart.constList([], T));
      this[_expandAll] = false;
      this[_group] = null;
      this[_parent] = null;
      this[_isExpandable] = null;
      this[_selectable] = null;
      this[allowParentSingleSelection] = false;
      this[_root$] = root;
      this[_changeDetector] = changeDetector;
      this[_expandedNodes] = new (LinkedMapOfT$IterableOfOptionGroupOfT()).new();
      this[_disposer] = new utils__disposer__disposer.Disposer.multi();
      this[_group] = this[_EMPTY_OPTION_GROUP];
      if (!dart.test(this[_root$].supportsHierarchy)) {
        this[_isExpandable] = dart.fn(_ => false, TTobool());
        this[_parent] = dart.const(new (_NotAParentOfT$IterableOfOptionGroupOfT()).new());
      } else {
        this[_isExpandable] = isExpandable != null ? isExpandable : dart.bind(this, 'hasChildren');
        this[_parent] = ParentOfT$IterableOfOptionGroupOfT().as(this[_root$].options);
      }
      if (src__model__selection__interfaces__selectable.Selectable.is(this[_root$].options)) {
        this[_selectable] = SelectableOfT().as(this[_root$].options);
      } else {
        this[_selectable] = dart.const(new (_AlwaysSelectableOfT()).new());
      }
    }).prototype = MaterialTreeNode.prototype;
    dart.addTypeTests(MaterialTreeNode);
    MaterialTreeNode.prototype[_is_MaterialTreeNode_default] = true;
    const allowParentSingleSelection = Symbol("MaterialTreeNode.allowParentSingleSelection");
    dart.setMethodSignature(MaterialTreeNode, () => ({
      __proto__: dart.getMethods(MaterialTreeNode.__proto__),
      clearExpansions: dart.fnType(dart.void, []),
      expandAllOptions: dart.fnType(dart.void, []),
      hasChildren: dart.fnType(core.bool, [core.Object]),
      isExpandable: dart.fnType(core.bool, [core.Object]),
      isExpanded: dart.fnType(core.bool, [core.Object]),
      isSelectable: dart.fnType(core.bool, [core.Object]),
      showDisabledCheckbox: dart.fnType(core.bool, [dart.dynamic]),
      isSelected: dart.fnType(core.bool, [core.Object]),
      getChildGroups: dart.fnType(core.Iterable$(model__selection__selection_options.OptionGroup), [dart.dynamic]),
      expandOption: dart.fnType(async.Future$(core.Iterable$(model__selection__selection_options.OptionGroup$(T))), [core.Object]),
      closeOption: dart.fnType(core.bool, [core.Object]),
      setExpandedState: dart.fnType(dart.void, [core.Object, core.bool]),
      toggleExpansion: dart.fnType(async.Future$(core.Iterable$(model__selection__selection_options.OptionGroup$(T))), [core.Object]),
      setSelectionState: dart.fnType(core.bool, [core.Object, core.bool]),
      toggleSelectionRangeInclusive: dart.fnType(dart.void, [core.Object, core.Object, core.bool]),
      getComponentType: dart.fnType(core.Type, [dart.dynamic]),
      getComponentFactory: dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic]),
      getOptionAsText: dart.fnType(core.String, [core.Object]),
      onDestroy: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialTreeNode, () => ({
      __proto__: dart.getGetters(MaterialTreeNode.__proto__),
      expandAll: dart.fnType(core.bool, []),
      group: dart.fnType(model__selection__selection_options.OptionGroup$(T), []),
      isReadOnly: dart.fnType(core.bool, []),
      isMultiSelect: dart.fnType(core.bool, []),
      useComponentRenderer: dart.fnType(core.bool, []),
      useItemRenderer: dart.fnType(core.bool, []),
      showSelectionState: dart.fnType(core.bool, [])
    }));
    dart.setSetterSignature(MaterialTreeNode, () => ({
      __proto__: dart.getSetters(MaterialTreeNode.__proto__),
      expandAll: dart.fnType(dart.void, [core.bool]),
      group: dart.fnType(dart.void, [OptionGroupOfT()])
    }));
    dart.setFieldSignature(MaterialTreeNode, () => ({
      __proto__: dart.getFields(MaterialTreeNode.__proto__),
      [_EMPTY_OPTION_GROUP]: dart.finalFieldType(OptionGroupOfT()),
      [_expandedNodes]: dart.finalFieldType(MapOfT$IterableOfOptionGroupOfT()),
      [_disposer]: dart.fieldType(utils__disposer__disposer.Disposer),
      [_root$]: dart.finalFieldType(MaterialTreeRootOfT()),
      [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
      [_expandAll]: dart.fieldType(core.bool),
      [_group]: dart.fieldType(OptionGroupOfT()),
      [_parent]: dart.fieldType(ParentOfT$IterableOfOptionGroupOfT()),
      [_isExpandable]: dart.fieldType(TTobool()),
      [_selectable]: dart.fieldType(SelectableOfT()),
      allowParentSingleSelection: dart.fieldType(core.bool)
    }));
    return MaterialTreeNode;
  });
  src__material_tree__material_tree_node.MaterialTreeNode = src__material_tree__material_tree_node.MaterialTreeNode$();
  dart.addTypeTests(src__material_tree__material_tree_node.MaterialTreeNode, _is_MaterialTreeNode_default);
  const _is__AlwaysSelectable_default = Symbol('_is__AlwaysSelectable_default');
  src__material_tree__material_tree_node._AlwaysSelectable$ = dart.generic(T => {
    let SelectableOfT = () => (SelectableOfT = dart.constFn(src__model__selection__interfaces__selectable.Selectable$(T)))();
    class _AlwaysSelectable extends core.Object {
      getSelectable(item) {
        T._check(item);
        return src__model__selection__interfaces__selectable.SelectableOption.Selectable;
      }
    }
    (_AlwaysSelectable.new = function() {
    }).prototype = _AlwaysSelectable.prototype;
    dart.addTypeTests(_AlwaysSelectable);
    _AlwaysSelectable.prototype[_is__AlwaysSelectable_default] = true;
    _AlwaysSelectable[dart.implements] = () => [SelectableOfT()];
    dart.setMethodSignature(_AlwaysSelectable, () => ({
      __proto__: dart.getMethods(_AlwaysSelectable.__proto__),
      getSelectable: dart.fnType(src__model__selection__interfaces__selectable.SelectableOption, [core.Object])
    }));
    return _AlwaysSelectable;
  });
  src__material_tree__material_tree_node._AlwaysSelectable = src__material_tree__material_tree_node._AlwaysSelectable$();
  dart.addTypeTests(src__material_tree__material_tree_node._AlwaysSelectable, _is__AlwaysSelectable_default);
  const _is__NotAParent_default = Symbol('_is__NotAParent_default');
  src__material_tree__material_tree_node._NotAParent$ = dart.generic((P, C) => {
    let ParentOfP$C = () => (ParentOfP$C = dart.constFn(model__selection__select.Parent$(P, C)))();
    class _NotAParent extends core.Object {
      hasChildren(item) {
        P._check(item);
        return false;
      }
      childrenOf(parent, filterQuery) {
        P._check(parent);
        if (filterQuery === void 0) filterQuery = null;
        dart.throw(new core.UnsupportedError.new('Does not support hierarchy'));
      }
    }
    (_NotAParent.new = function() {
    }).prototype = _NotAParent.prototype;
    dart.addTypeTests(_NotAParent);
    _NotAParent.prototype[_is__NotAParent_default] = true;
    _NotAParent[dart.implements] = () => [ParentOfP$C()];
    dart.setMethodSignature(_NotAParent, () => ({
      __proto__: dart.getMethods(_NotAParent.__proto__),
      hasChildren: dart.fnType(core.bool, [core.Object]),
      childrenOf: dart.fnType(src__utils__async__disposable_future.DisposableFuture$(C), [core.Object], [core.Object])
    }));
    return _NotAParent;
  });
  src__material_tree__material_tree_node._NotAParent = src__material_tree__material_tree_node._NotAParent$();
  dart.addTypeTests(src__material_tree__material_tree_node._NotAParent, _is__NotAParent_default);
  dart.trackLibraries("packages/angular_components/src/material_tree/material_tree_node.ddc", {
    "package:angular_components/src/material_tree/material_tree_node.dart": src__material_tree__material_tree_node
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_node.dart"],"names":[],"mappings":"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","file":"material_tree_node.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_node: src__material_tree__material_tree_node
  };
});

//# sourceMappingURL=material_tree_node.ddc.js.map
