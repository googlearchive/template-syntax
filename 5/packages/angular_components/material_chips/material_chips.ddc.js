define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, disposer, selection_model, has_renderer, lifecycle_hooks, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_chips__material_chips = Object.create(_root);
  const $toString = dartx.toString;
  let ListOfSelectionChangeRecord = () => (ListOfSelectionChangeRecord = dart.constFn(core.List$(model__selection__selection_model.SelectionChangeRecord)))();
  let ListOfSelectionChangeRecordToNull = () => (ListOfSelectionChangeRecordToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecord()])))();
  let StreamSubscriptionOfListOfSelectionChangeRecord = () => (StreamSubscriptionOfListOfSelectionChangeRecord = dart.constFn(async.StreamSubscription$(ListOfSelectionChangeRecord())))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  const _changeDetector = Symbol('_changeDetector');
  const _disposer = Symbol('_disposer');
  const _selectionModel = Symbol('_selectionModel');
  let const$;
  const _itemRenderer = Symbol('_itemRenderer');
  material_chips__material_chips.MaterialChipsComponent = class MaterialChipsComponent extends core.Object {
    get removable() {
      return this[removable];
    }
    set removable(value) {
      this[removable] = value;
    }
    set selectionModel(model) {
      this[_selectionModel] = model;
      this[_disposer].dispose();
      this[_disposer].addDisposable(StreamSubscriptionOfListOfSelectionChangeRecord(), this[_selectionModel].selectionChanges.listen(dart.fn(_ => {
        this[_changeDetector].markForCheck();
      }, ListOfSelectionChangeRecordToNull())));
    }
    get selectionModel() {
      return this[_selectionModel];
    }
    set itemRenderer(value) {
      this[_itemRenderer] = value;
    }
    get itemRenderer() {
      return this[_itemRenderer];
    }
    get selectedItems() {
      return this.selectionModel.selectedValues;
    }
    static _defaultItemRenderer(value) {
      return value == null ? null : dart.toString(value);
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (material_chips__material_chips.MaterialChipsComponent.new = function(changeDetector) {
    this[_disposer] = new utils__disposer__disposer.Disposer.multi();
    this[removable] = true;
    this[_selectionModel] = const$ || (const$ = dart.const(model__selection__selection_model.SelectionModel.new()));
    this[_itemRenderer] = dart.tagStatic(material_chips__material_chips.MaterialChipsComponent, '_defaultItemRenderer');
    this[_changeDetector] = changeDetector;
  }).prototype = material_chips__material_chips.MaterialChipsComponent.prototype;
  dart.addTypeTests(material_chips__material_chips.MaterialChipsComponent);
  const removable = Symbol("MaterialChipsComponent.removable");
  material_chips__material_chips.MaterialChipsComponent[dart.implements] = () => [model__ui__has_renderer.HasRenderer, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_chips__material_chips.MaterialChipsComponent, () => ({
    __proto__: dart.getMethods(material_chips__material_chips.MaterialChipsComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(material_chips__material_chips.MaterialChipsComponent, () => ({_defaultItemRenderer: dart.fnType(core.String, [core.Object])}));
  dart.setGetterSignature(material_chips__material_chips.MaterialChipsComponent, () => ({
    __proto__: dart.getGetters(material_chips__material_chips.MaterialChipsComponent.__proto__),
    selectionModel: dart.fnType(model__selection__selection_model.SelectionModel, []),
    itemRenderer: dart.fnType(dart.fnType(core.String, [dart.dynamic]), []),
    selectedItems: dart.fnType(core.Iterable, [])
  }));
  dart.setSetterSignature(material_chips__material_chips.MaterialChipsComponent, () => ({
    __proto__: dart.getSetters(material_chips__material_chips.MaterialChipsComponent.__proto__),
    selectionModel: dart.fnType(dart.void, [model__selection__selection_model.SelectionModel]),
    itemRenderer: dart.fnType(dart.void, [dynamicToString()])
  }));
  dart.setFieldSignature(material_chips__material_chips.MaterialChipsComponent, () => ({
    __proto__: dart.getFields(material_chips__material_chips.MaterialChipsComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    removable: dart.fieldType(core.bool),
    [_selectionModel]: dart.fieldType(model__selection__selection_model.SelectionModel),
    [_itemRenderer]: dart.fieldType(dynamicToString())
  }));
  dart.trackLibraries("packages/angular_components/material_chips/material_chips.ddc", {
    "package:angular_components/material_chips/material_chips.dart": material_chips__material_chips
  }, '{"version":3,"sourceRoot":"","sources":["material_chips.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;IAgDO;;;;;;uBAQc,KAAoB;AACrC,2BAAe,GAAG,KAAK;AACvB,MACE,AAAE,uBAAO;MACT,AAAE,6BAAa,oDAAC,qBAAe,iBAAiB,OAAO,CAAC,QAAC,CAAC;AACxD,6BAAe,aAAa;;IAElC;;YAEqC,sBAAe;;qBAanC,KAAkB;AACjC,yBAAa,GAAG,KAAK;IACvB;;YAIiC,oBAAa;;;YAEhB,oBAAc,eAAe;;gCAGxB,KAAY;YAAK,MAAK,gCAAL,KAAK;IAAY;;AAMnE,qBAAS,QAAQ;IACnB;;wEAL4B,cAAe;IA/C5B,eAAS,GAAG,IAAI,wCAAc;IAIxC,eAAS,GAAG;IAKF,qBAAe,GAAG,+BAAM,oDAAc;IA6BxC,mBAAa,GAAG,6FAAoB;IASrB,qBAAe,GAAf,cAAe;EAAC","file":"material_chips.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chips: material_chips__material_chips
  };
});

//# sourceMappingURL=material_chips.ddc.js.map
