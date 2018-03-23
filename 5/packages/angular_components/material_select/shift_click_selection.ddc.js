define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/material_select/activation_handler'], function(dart_sdk, selection_model, activation_handler) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const _root = Object.create(null);
  const material_select__shift_click_selection = Object.create(_root);
  const $indexOf = dartx.indexOf;
  const $forEach = dartx.forEach;
  const $abs = dartx.abs;
  const $take = dartx.take;
  const $skip = dartx.skip;
  const _pivot = Symbol('_pivot');
  const _handleClick = Symbol('_handleClick');
  const _is_ShiftClickSelectionMixin_default = Symbol('_is_ShiftClickSelectionMixin_default');
  material_select__shift_click_selection.ShiftClickSelectionMixin$ = dart.generic(T => {
    let ActivationHandlerOfT = () => (ActivationHandlerOfT = dart.constFn(material_select__activation_handler.ActivationHandler$(T)))();
    class ShiftClickSelectionMixin extends core.Object {
      [_handleClick](e, value) {
        T._check(value);
        let toggleSelection = dart.test(this.selection.isSelected(value)) ? dart.bind(this.selection, 'deselect') : dart.bind(this.selection, 'select');
        if (this[_pivot] == null || !dart.test(e.shiftKey)) {
          toggleSelection(value);
        } else {
          let optionValues = this.options.optionsList;
          let clickedIndex = optionValues[$indexOf](value);
          let pivotIndex = optionValues[$indexOf](this[_pivot]);
          if (pivotIndex === -1) {
            dart.throw(new core.StateError.new(dart.str`pivot item is no longer in the model: ${this[_pivot]}`));
          }
          optionValues[$skip](math.min(core.int, pivotIndex, clickedIndex))[$take]((dart.notNull(pivotIndex) - dart.notNull(clickedIndex))[$abs]() + 1)[$forEach](toggleSelection);
        }
        this[_pivot] = value;
      }
      handle(event, activatedValue) {
        T._check(activatedValue);
        if (!model__selection__selection_model.MultiSelectionModel.is(this.selection) || !html.MouseEvent.is(event)) return false;
        this[_handleClick](html.MouseEvent._check(event), activatedValue);
        return true;
      }
    }
    (ShiftClickSelectionMixin.new = function() {
      this[_pivot] = null;
    }).prototype = ShiftClickSelectionMixin.prototype;
    dart.addTypeTests(ShiftClickSelectionMixin);
    ShiftClickSelectionMixin.prototype[_is_ShiftClickSelectionMixin_default] = true;
    ShiftClickSelectionMixin[dart.implements] = () => [ActivationHandlerOfT()];
    dart.setMethodSignature(ShiftClickSelectionMixin, () => ({
      __proto__: dart.getMethods(ShiftClickSelectionMixin.__proto__),
      [_handleClick]: dart.fnType(dart.void, [html.MouseEvent, core.Object]),
      handle: dart.fnType(core.bool, [html.UIEvent, core.Object])
    }));
    dart.setFieldSignature(ShiftClickSelectionMixin, () => ({
      __proto__: dart.getFields(ShiftClickSelectionMixin.__proto__),
      [_pivot]: dart.fieldType(T)
    }));
    return ShiftClickSelectionMixin;
  });
  material_select__shift_click_selection.ShiftClickSelectionMixin = material_select__shift_click_selection.ShiftClickSelectionMixin$();
  dart.addTypeTests(material_select__shift_click_selection.ShiftClickSelectionMixin, _is_ShiftClickSelectionMixin_default);
  dart.trackLibraries("packages/angular_components/material_select/shift_click_selection.ddc", {
    "package:angular_components/material_select/shift_click_selection.dart": material_select__shift_click_selection
  }, '{"version":3,"sourceRoot":"","sources":["shift_click_selection.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;qBAyBoB,CAAY,EAAE,KAAO;iBAAL;AAChC,YAAI,4BACA,cAAS,WAAW,CAAC,KAAK,eAAI,cAAS,0BAAY,cAAS;AAChE,YAAI,YAAM,IAAI,mBAAS,CAAC,SAAS,GAAE;AACjC,yBAAe,CAAC,KAAK;eAChB;AACL,cAAM,eAAe,YAAO,YAAY;AACxC,cAAM,eAAe,YAAY,UAAQ,CAAC,KAAK;AAC/C,cAAM,aAAa,YAAY,UAAQ,CAAC,YAAM;AAC9C,cAAI,UAAU,KAAI,CAAC,GAAG;AACpB,uBAAM,IAAI,mBAAU,CAAC,iDAAwC,YAAM;;AAErE,sBAAY,OACH,CAAC,QAAG,WAAC,UAAU,EAAE,YAAY,SAC7B,CAAC,AAAkC,CAAtB,aAAX,UAAU,iBAAG,YAAY,QAAK,KAAK,YAClC,CAAC,eAAe;;AAE9B,oBAAM,GAAG,KAAK;MAChB;aAOY,KAAa,EAAE,cAAgB;iBAAd;AAC3B,sEAAI,cAAS,yBAA4B,KAAK,GAAiB,MAAO;AACtE,0BAAY,wBAAC,KAAK,GAAE,cAAc;AAClC,cAAO;MACT;;;MAxCE,YAAM;IAyCV","file":"shift_click_selection.ddc.js"}');
  // Exports:
  return {
    material_select__shift_click_selection: material_select__shift_click_selection
  };
});

//# sourceMappingURL=shift_click_selection.ddc.js.map
