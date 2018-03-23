define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const material_input__input_wrapper = Object.create(_root);
  const _label = Symbol('_label');
  const _inputText = Symbol('_inputText');
  material_input__input_wrapper.MaterialInputWrapper = class MaterialInputWrapper extends core.Object {
    get characterCounter() {
      return this[characterCounter];
    }
    set characterCounter(value) {
      this[characterCounter] = value;
    }
    get checkValid() {
      return this[checkValid];
    }
    set checkValid(value) {
      this[checkValid] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get displayBottomPanel() {
      return this[displayBottomPanel];
    }
    set displayBottomPanel(value) {
      this[displayBottomPanel] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get floatingLabel() {
      return this[floatingLabel];
    }
    set floatingLabel(value) {
      this[floatingLabel] = value;
    }
    get hintText() {
      return this[hintText];
    }
    set hintText(value) {
      this[hintText] = value;
    }
    get leadingText() {
      return this[leadingText];
    }
    set leadingText(value) {
      this[leadingText] = value;
    }
    get maxCount() {
      return this[maxCount];
    }
    set maxCount(value) {
      this[maxCount] = value;
    }
    get showHintOnlyOnFocus() {
      return this[showHintOnlyOnFocus];
    }
    set showHintOnlyOnFocus(value) {
      this[showHintOnlyOnFocus] = value;
    }
    get required() {
      return this[required];
    }
    set required(value) {
      this[required] = value;
    }
    get requiredErrorMsg() {
      return this[requiredErrorMsg];
    }
    set requiredErrorMsg(value) {
      this[requiredErrorMsg] = value;
    }
    get rightAlign() {
      return this[rightAlign];
    }
    set rightAlign(value) {
      this[rightAlign] = value;
    }
    get trailingText() {
      return this[trailingText];
    }
    set trailingText(value) {
      this[trailingText] = value;
    }
    get leadingGlyph() {
      return this[leadingGlyph];
    }
    set leadingGlyph(value) {
      this[leadingGlyph] = value;
    }
    get trailingGlyph() {
      return this[trailingGlyph];
    }
    set trailingGlyph(value) {
      this[trailingGlyph] = value;
    }
    get label() {
      return this[_label];
    }
    set label(value) {
      this[_label] = value;
    }
    get inputText() {
      return this[_inputText];
    }
    set inputText(value) {
      this[_inputText] = value;
    }
  };
  (material_input__input_wrapper.MaterialInputWrapper.new = function() {
    this[characterCounter] = null;
    this[checkValid] = null;
    this[disabled] = false;
    this[displayBottomPanel] = true;
    this[error] = null;
    this[floatingLabel] = false;
    this[hintText] = null;
    this[leadingText] = null;
    this[maxCount] = null;
    this[showHintOnlyOnFocus] = false;
    this[required] = false;
    this[requiredErrorMsg] = null;
    this[rightAlign] = false;
    this[trailingText] = null;
    this[leadingGlyph] = null;
    this[trailingGlyph] = null;
    this[_label] = null;
    this[_inputText] = null;
  }).prototype = material_input__input_wrapper.MaterialInputWrapper.prototype;
  dart.addTypeTests(material_input__input_wrapper.MaterialInputWrapper);
  const characterCounter = Symbol("MaterialInputWrapper.characterCounter");
  const checkValid = Symbol("MaterialInputWrapper.checkValid");
  const disabled = Symbol("MaterialInputWrapper.disabled");
  const displayBottomPanel = Symbol("MaterialInputWrapper.displayBottomPanel");
  const error = Symbol("MaterialInputWrapper.error");
  const floatingLabel = Symbol("MaterialInputWrapper.floatingLabel");
  const hintText = Symbol("MaterialInputWrapper.hintText");
  const leadingText = Symbol("MaterialInputWrapper.leadingText");
  const maxCount = Symbol("MaterialInputWrapper.maxCount");
  const showHintOnlyOnFocus = Symbol("MaterialInputWrapper.showHintOnlyOnFocus");
  const required = Symbol("MaterialInputWrapper.required");
  const requiredErrorMsg = Symbol("MaterialInputWrapper.requiredErrorMsg");
  const rightAlign = Symbol("MaterialInputWrapper.rightAlign");
  const trailingText = Symbol("MaterialInputWrapper.trailingText");
  const leadingGlyph = Symbol("MaterialInputWrapper.leadingGlyph");
  const trailingGlyph = Symbol("MaterialInputWrapper.trailingGlyph");
  dart.setGetterSignature(material_input__input_wrapper.MaterialInputWrapper, () => ({
    __proto__: dart.getGetters(material_input__input_wrapper.MaterialInputWrapper.__proto__),
    label: dart.fnType(core.String, []),
    inputText: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(material_input__input_wrapper.MaterialInputWrapper, () => ({
    __proto__: dart.getSetters(material_input__input_wrapper.MaterialInputWrapper.__proto__),
    label: dart.fnType(dart.void, [core.String]),
    inputText: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(material_input__input_wrapper.MaterialInputWrapper, () => ({
    __proto__: dart.getFields(material_input__input_wrapper.MaterialInputWrapper.__proto__),
    characterCounter: dart.fieldType(core.Function),
    checkValid: dart.fieldType(core.Function),
    disabled: dart.fieldType(core.bool),
    displayBottomPanel: dart.fieldType(core.bool),
    error: dart.fieldType(core.String),
    floatingLabel: dart.fieldType(core.bool),
    hintText: dart.fieldType(core.String),
    leadingText: dart.fieldType(core.String),
    maxCount: dart.fieldType(core.int),
    showHintOnlyOnFocus: dart.fieldType(core.bool),
    required: dart.fieldType(core.bool),
    requiredErrorMsg: dart.fieldType(core.String),
    rightAlign: dart.fieldType(core.bool),
    trailingText: dart.fieldType(core.String),
    leadingGlyph: dart.fieldType(core.String),
    trailingGlyph: dart.fieldType(core.String),
    [_label]: dart.fieldType(core.String),
    [_inputText]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/material_input/input_wrapper.ddc", {
    "package:angular_components/material_input/input_wrapper.dart": material_input__input_wrapper
  }, '{"version":3,"sourceRoot":"","sources":["input_wrapper.dart"],"names":[],"mappings":";;;;;;;;;;IAUW;;;;;;IAEA;;;;;;IAEJ;;;;;;IAEA;;;;;;IAEE;;;;;;IAEF;;;;;;IAEE;;;;;;IAEA;;;;;;IAEH;;;;;;IAEC;;;;;;IAEA;;;;;;IAEE;;;;;;IAEF;;;;;;IAEE;;;;;;IAIA;;;;;;IAIA;;;;;;;YAGa,aAAM;;cAGhB,KAAY;AACpB,kBAAM,GAAG,KAAK;IAChB;;YAGwB,iBAAU;;kBAGpB,KAAY;AACxB,sBAAU,GAAG,KAAK;IACpB;;;IAlDS,sBAAgB;IAEhB,gBAAU;IAEd,cAAQ,GAAG;IAEX,wBAAkB,GAAG;IAEnB,WAAK;IAEP,mBAAa,GAAG;IAEd,cAAQ;IAER,iBAAW;IAEd,cAAQ;IAEP,yBAAmB,GAAG;IAEtB,cAAQ,GAAG;IAET,sBAAgB;IAElB,gBAAU,GAAG;IAEX,kBAAY;IAIZ,kBAAY;IAIZ,mBAAa;IAEb,YAAM;IAQN,gBAAU;EAOnB","file":"input_wrapper.ddc.js"}');
  // Exports:
  return {
    material_input__input_wrapper: material_input__input_wrapper
  };
});

//# sourceMappingURL=input_wrapper.ddc.js.map
