define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/material_select/material_dropdown_select'], function(dart_sdk, selection_model, control_value_accessor, lifecycle_hooks, material_dropdown_select) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const material_select__material_dropdown_select = material_dropdown_select.material_select__material_dropdown_select;
  const _root = Object.create(null);
  const material_select__material_dropdown_select_accessor = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $first = dartx.first;
  const $toList = dartx.toList;
  let ListOfSelectionChangeRecord = () => (ListOfSelectionChangeRecord = dart.constFn(core.List$(model__selection__selection_model.SelectionChangeRecord)))();
  let ListOfSelectionChangeRecordToNull = () => (ListOfSelectionChangeRecordToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecord()])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let dynamic__Todynamic = () => (dynamic__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})))();
  const _selectionChangesSub = Symbol('_selectionChangesSub');
  const _select = Symbol('_select');
  const _visibileSub = Symbol('_visibileSub');
  material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor = class BaseDropdownSelectValueAccessor extends core.Object {
    get selectionModel() {
      return this[selectionModel$];
    }
    set selectionModel(value) {
      super.selectionModel = value;
    }
    get initialized() {
      return this[initialized];
    }
    set initialized(value) {
      this[initialized] = value;
    }
    initializeSelectionModel() {
      if (dart.test(this.initialized)) return;
      this.initialized = true;
      if (!(this[_select].selection == null)) dart.assertFailed('Cannot set [selection] when using a Dropdown control value accessor.');
      this[_select].selection = this.selectionModel;
    }
    registerOnTouched(callback) {
      this[_visibileSub] = this[_select].visibleStream.listen(dart.fn(_ => {
        this[_visibileSub].cancel();
        callback();
      }, boolToNull()));
    }
    ngOnDestroy() {
      let t = this[_visibileSub];
      t == null ? null : t.cancel();
    }
  };
  (material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor.new = function(select, selectionModel) {
    this[_visibileSub] = null;
    this[initialized] = false;
    this[_select] = select;
    this[selectionModel$] = selectionModel;
  }).prototype = material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor.prototype;
  dart.addTypeTests(material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor);
  const selectionModel$ = Symbol("BaseDropdownSelectValueAccessor.selectionModel");
  const initialized = Symbol("BaseDropdownSelectValueAccessor.initialized");
  material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor.__proto__),
    initializeSelectionModel: dart.fnType(dart.dynamic, []),
    registerOnTouched: dart.fnType(dart.void, [VoidTodynamic()]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor.__proto__),
    [_select]: dart.finalFieldType(material_select__material_dropdown_select.MaterialDropdownSelectComponent),
    selectionModel: dart.finalFieldType(model__selection__selection_model.SelectionModel),
    [_visibileSub]: dart.fieldType(async.StreamSubscription),
    initialized: dart.fieldType(core.bool)
  }));
  material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor = class DropdownSelectValueAccessor extends material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor {
    registerOnChange(callback) {
      this[_selectionChangesSub] = this.selectionModel.selectionChanges.listen(dart.fn(_ => {
        let value = this.selectionModel.selectedValues == null || dart.test(this.selectionModel.selectedValues[$isEmpty]) ? null : (() => {
          let t = this.selectionModel.selectedValues;
          return t == null ? null : t[$first];
        })();
        dart.dcall(callback, value);
      }, ListOfSelectionChangeRecordToNull()));
    }
    writeValue(newValue) {
      this.initializeSelectionModel();
      if (newValue != null) {
        this.selectionModel.select(newValue);
      } else {
        this.selectionModel.clear();
      }
    }
    ngOnDestroy() {
      let t = this[_selectionChangesSub];
      t == null ? null : t.cancel();
      super.ngOnDestroy();
    }
  };
  (material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor.new = function(select) {
    this[_selectionChangesSub] = null;
    material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor.__proto__.new.call(this, select, model__selection__selection_model.SelectionModel.withList());
  }).prototype = material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor.prototype;
  dart.addTypeTests(material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor);
  material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor.__proto__),
    registerOnChange: dart.fnType(dart.void, [dynamic__Todynamic()]),
    writeValue: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select_accessor.DropdownSelectValueAccessor.__proto__),
    [_selectionChangesSub]: dart.fieldType(async.StreamSubscription)
  }));
  material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor = class MultiDropdownSelectValueAccessor extends material_select__material_dropdown_select_accessor.BaseDropdownSelectValueAccessor {
    get selectionChangesSub() {
      return this[selectionChangesSub];
    }
    set selectionChangesSub(value) {
      this[selectionChangesSub] = value;
    }
    registerOnChange(callback) {
      this.selectionChangesSub = this.selectionModel.selectionChanges.listen(dart.fn(_ => {
        dart.dcall(callback, (() => {
          let t = this.selectionModel.selectedValues;
          return t == null ? null : t[$toList]();
        })());
      }, ListOfSelectionChangeRecordToNull()));
    }
    writeValue(newValue) {
      this.initializeSelectionModel();
      this.selectionModel.clear();
      if (newValue == null) return;
      if (!core.Iterable.is(newValue)) dart.assertFailed('Multi select must be backed by an iterable');
      for (let value of core.Iterable._check(newValue)) {
        this.selectionModel.select(value);
      }
    }
    ngOnDestroy() {
      let t = this.selectionChangesSub;
      t == null ? null : dart.dsend(t, 'cancel');
      super.ngOnDestroy();
    }
  };
  (material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor.new = function(select) {
    this[selectionChangesSub] = null;
    material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor.__proto__.new.call(this, select, model__selection__selection_model.MultiSelectionModel.new());
  }).prototype = material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor.prototype;
  dart.addTypeTests(material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor);
  const selectionChangesSub = Symbol("MultiDropdownSelectValueAccessor.selectionChangesSub");
  material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor.__proto__),
    registerOnChange: dart.fnType(dart.void, [dynamic__Todynamic()]),
    writeValue: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select_accessor.MultiDropdownSelectValueAccessor.__proto__),
    selectionChangesSub: dart.fieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select_accessor.ddc", {
    "package:angular_components/material_select/material_dropdown_select_accessor.dart": material_select__material_dropdown_select_accessor
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select_accessor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;IA+GuB;;;;;;IAEhB;;;;;;;AAMH,oBAAI,gBAAW,GAAE;AACjB,sBAAW,GAAG;AACd,YAAO,aAAO,UAAU,IAAI,yBACxB;AACJ,mBAAO,UAAU,GAAG,mBAAc;IACpC;sBAGuB,QAAQ;AAC7B,wBAAY,GAAG,aAAO,cAAc,OAAO,CAAC,QAAC,CAAC;AAE5C,0BAAY,OAAO;AACnB,gBAAQ;;IAEZ;;AAIE,gCAAY;;IACd;;qGAvBqC,MAAO,EAAE,cAAmB;IAH9C,kBAAY;IAC1B,iBAAW,GAAG;IAEkB,aAAO,GAAP,MAAO;IAAO,qBAAc,GAAd,cAAc;EAAC;;;;;;;;;;;;;;;;;;;qBAlF5C,QAAQ;AAC5B,gCAAoB,GAAG,mBAAc,iBAAiB,OAAO,CAAC,QAAC,CAAC;AAC9D,YAAI,QAAQ,AAAC,mBAAc,eAAe,IAAI,kBACtC,mBAAc,eAAe,UAAQ,IACvC;kBACA,mBAAc,eAAe;;;AACnC,2BAAQ,EAAC,KAAK;;IAElB;eAGgB,QAAQ;AACtB,mCAAwB;AACxB,UAAI,QAAQ,IAAI,MAAM;AACpB,2BAAc,OAAO,CAAC,QAAQ;aACzB;AACL,2BAAc,MAAM;;IAExB;;AAIE,wCAAoB;;AACpB,uBAAiB;IACnB;;iGA5B4B,MAAsC;IAD/C,0BAAoB;AAEjC,4GAAM,MAAM,EAAE,AAAI,yDAAuB;EAAG;;;;;;;;;;;;;IA6C9C;;;;;;qBAMkB,QAAQ;AAC5B,8BAAmB,GAAG,mBAAc,iBAAiB,OAAO,CAAC,QAAC,CAAC;AAC7D,2BAAQ;kBAAC,mBAAc,eAAe;;;;IAE1C;eAGgB,QAAQ;AACtB,mCAAwB;AACxB,yBAAc,MAAM;AACpB,UAAI,QAAQ,IAAI,MAAM;AACtB,4BAAO,QAAQ,qBAAc;AAC7B,eAAW,8BAAS,QAAQ,GAAE;AAC5B,2BAAc,OAAO,CAAC,KAAK;;IAE/B;;AAIE,sCAAmB;;AACnB,uBAAiB;IACnB;;sGAzBiC,MAAsC;IAFnE,yBAAmB;AAGjB,iHAAM,MAAM,EAAE,AAAI,yDAAmB;EAAG","file":"material_dropdown_select_accessor.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select_accessor: material_select__material_dropdown_select_accessor
  };
});

//# sourceMappingURL=material_dropdown_select_accessor.ddc.js.map
