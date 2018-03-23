define(['dart_sdk', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/material_input_multiline', 'packages/angular_forms/src/directives/ng_model', 'packages/angular_components/utils/angular/properties/properties', 'packages/quiver/strings', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/focus/focus', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/linker/element_ref', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, material_input_default_value_accessor, material_input_multiline, ng_model, properties, strings, base_material_input, focus, reference, lifecycle_hooks, element_ref, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_input__material_input_multiline = material_input_multiline.material_input__material_input_multiline;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const strings$ = strings.strings;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const focus__focus = focus.focus__focus;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_input__material_input = Object.create(_root);
  const $contains = dartx.contains;
  dart.defineLazy(material_input__material_input, {
    /*material_input__material_input.materialInputDirectives*/get materialInputDirectives() {
      return dart.constList([dart.wrapType(material_input__material_input.MaterialInputComponent), dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor), dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor), dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor), dart.wrapType(material_input__material_input_multiline.MaterialMultilineInputComponent), dart.wrapType(src__directives__ng_model.NgModel)], core.Type);
    },
    /*material_input__material_input.materialInputErrorKey*/get materialInputErrorKey() {
      return 'material-input-error';
    }
  });
  const _changeDetector = Symbol('_changeDetector');
  const _leadingText = Symbol('_leadingText');
  const _trailingText = Symbol('_trailingText');
  const _rightAlign = Symbol('_rightAlign');
  let const$;
  material_input__material_input.MaterialInputComponent = class MaterialInputComponent extends material_input__base_material_input.BaseMaterialInput {
    set focusable(value) {
      super.focusable = value;
    }
    get inputEl() {
      return this[inputEl];
    }
    set inputEl(value) {
      this[inputEl] = value;
    }
    get popupSourceEl() {
      return this[popupSourceEl];
    }
    set popupSourceEl(value) {
      this[popupSourceEl] = value;
    }
    get elementRef() {
      return this.popupSourceEl;
    }
    get inputRef() {
      return this.inputEl;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    get multiple() {
      return this[multiple$];
    }
    set multiple(value) {
      this[multiple$] = value;
    }
    get leadingText() {
      return this[_leadingText];
    }
    get hasLeadingText() {
      return strings$.isNotEmpty(this.leadingText);
    }
    set leadingText(value) {
      this[_leadingText] = value;
      this[_changeDetector].markForCheck();
    }
    get leadingGlyph() {
      return this[leadingGlyph];
    }
    set leadingGlyph(value) {
      this[leadingGlyph] = value;
    }
    get hasLeadingGlyph() {
      return strings$.isNotEmpty(this.leadingGlyph);
    }
    get trailingText() {
      return this[_trailingText];
    }
    get hasTrailingText() {
      return strings$.isNotEmpty(this.trailingText);
    }
    set trailingText(value) {
      this[_trailingText] = value;
      this[_changeDetector].markForCheck();
    }
    get trailingGlyph() {
      return this[trailingGlyph];
    }
    set trailingGlyph(value) {
      this[trailingGlyph] = value;
    }
    get hasTrailingGlyph() {
      return strings$.isNotEmpty(this.trailingGlyph);
    }
    get rightAlign() {
      return this[_rightAlign];
    }
    set rightAlign(value) {
      this[_rightAlign] = value;
      this[_changeDetector].markForCheck();
    }
    get numeric() {
      return this.type === "number";
    }
    get labelVisible() {
      return !(dart.test(this.numeric) && dart.test(this.invalid)) && dart.test(super.labelVisible);
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this.inputEl = null;
      this.popupSourceEl = null;
    }
  };
  material_input__material_input.MaterialInputComponent.prototype[dart._runtimeType] = material_input__material_input.MaterialInputComponent;
  (material_input__material_input.MaterialInputComponent.new = function callableClass(type, multiple, cd, changeDetector, validator) {
    if (typeof this !== "function") {
      function self(...args) {
        return self.call.apply(self, args);
      }
      self.__proto__ = this.__proto__;
      callableClass.call(self, type, multiple, cd, changeDetector, validator);
      return self;
    }
    this[inputEl] = null;
    this[popupSourceEl] = null;
    this[type$] = null;
    this[multiple$] = false;
    this[_leadingText] = null;
    this[leadingGlyph] = null;
    this[_trailingText] = null;
    this[trailingGlyph] = null;
    this[_rightAlign] = false;
    this[_changeDetector] = changeDetector;
    material_input__material_input.MaterialInputComponent.__proto__.new.call(this, cd, changeDetector, validator);
    if (type == null) {
      this.type = 'text';
    } else if (dart.test((const$ || (const$ = dart.constList(['number', 'tel'], core.String)))[$contains](type))) {
      this.type = 'text';
    } else {
      this.type = type;
    }
    this.multiple = utils__angular__properties__properties.attributeToBool(multiple);
  }).prototype = material_input__material_input.MaterialInputComponent.prototype;
  dart.addTypeTests(material_input__material_input.MaterialInputComponent);
  const inputEl = Symbol("MaterialInputComponent.inputEl");
  const popupSourceEl = Symbol("MaterialInputComponent.popupSourceEl");
  const type$ = Symbol("MaterialInputComponent.type");
  const multiple$ = Symbol("MaterialInputComponent.multiple");
  const leadingGlyph = Symbol("MaterialInputComponent.leadingGlyph");
  const trailingGlyph = Symbol("MaterialInputComponent.trailingGlyph");
  material_input__material_input.MaterialInputComponent[dart.implements] = () => [focus__focus.Focusable, utils__angular__reference__reference.ReferenceDirective, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setGetterSignature(material_input__material_input.MaterialInputComponent, () => ({
    __proto__: dart.getGetters(material_input__material_input.MaterialInputComponent.__proto__),
    elementRef: dart.fnType(src__core__linker__element_ref.ElementRef, []),
    leadingText: dart.fnType(core.String, []),
    hasLeadingText: dart.fnType(core.bool, []),
    hasLeadingGlyph: dart.fnType(core.bool, []),
    trailingText: dart.fnType(core.String, []),
    hasTrailingText: dart.fnType(core.bool, []),
    hasTrailingGlyph: dart.fnType(core.bool, []),
    rightAlign: dart.fnType(core.bool, []),
    numeric: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(material_input__material_input.MaterialInputComponent, () => ({
    __proto__: dart.getSetters(material_input__material_input.MaterialInputComponent.__proto__),
    leadingText: dart.fnType(dart.void, [core.String]),
    trailingText: dart.fnType(dart.void, [core.String]),
    rightAlign: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_input__material_input.MaterialInputComponent, () => ({
    __proto__: dart.getFields(material_input__material_input.MaterialInputComponent.__proto__),
    [_changeDetector]: dart.fieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    inputEl: dart.fieldType(src__core__linker__element_ref.ElementRef),
    popupSourceEl: dart.fieldType(src__core__linker__element_ref.ElementRef),
    type: dart.fieldType(core.String),
    multiple: dart.fieldType(core.bool),
    [_leadingText]: dart.fieldType(core.String),
    leadingGlyph: dart.fieldType(core.String),
    [_trailingText]: dart.fieldType(core.String),
    trailingGlyph: dart.fieldType(core.String),
    [_rightAlign]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_input/material_input.ddc", {
    "package:angular_components/material_input/material_input.dart": material_input__material_input
  }, '{"version":3,"sourceRoot":"","sources":["material_input.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MAwBM,sDAAuB;YAAG,iBAC9B,oEAAsB,EACtB,sGAAiC,EACjC,mGAA8B,EAC9B,qGAAgC,EAChC,uFAA+B,EAC/B,gDAAO;;MAII,oDAAqB;YAAG;;;;;;;;;kBA0HrB,KAAe;AAC3B,qBAAe,GAAG,KAAK;IACzB;IAGW;;;;;;IAGA;;;;;;;YAIkB,mBAAa;;;YASf,aAAO;;IAM3B;;;;;;IAKF;;;;;;;YAGqB,mBAAY;;;YAEX,oBAAU,CAAC,gBAAW;IAAC;oBAGlC,KAAY;AAC1B,wBAAY,GAAG,KAAK;AAGpB,2BAAe,aAAa;IAC9B;IAIO;;;;;;;YACqB,oBAAU,CAAC,iBAAY;IAAC;;YAGzB,oBAAa;;;YAEZ,oBAAU,CAAC,iBAAY;IAAC;qBAGnC,KAAY;AAC3B,yBAAa,GAAG,KAAK;AAGrB,2BAAe,aAAa;IAC9B;IAIO;;;;;;;YACsB,oBAAU,CAAC,kBAAa;IAAC;;YAK/B,kBAAW;;mBAInB,KAAU;AACvB,uBAAW,GAAG,KAAK;AAGnB,2BAAe,aAAa;IAC9B;;YAuBoB,UAAI,KAAI;IAAQ;;YAGW,aAApB,YAAO,eAAI,YAAO,gBAAK,kBAAkB;;;AAIlE,uBAAiB;AACjB,kBAAO,GAAG;AACV,wBAAa,GAAG;IAClB;;;sFA9BI,IAA8B,EAC9B,QAAsC,EACtC,EAAgC,EAGpB,cAAe,EAD3B,SAA2B;;;;;;+BAJ3B,IAA8B,EAC9B,QAAsC,EACtC,EAAgC,EAGpB,cAAe,EAD3B,SAA2B;;;IApFpB,aAAO;IAGP,mBAAa;IAmBjB,WAAI;IAKN,eAAQ,GAAG;IAIT,kBAAY;IAaZ,kBAAY;IAKZ,mBAAa;IAab,mBAAa;IAOf,iBAAW,GAAG;IAcV,qBAAe,GAER,cAAe;AAAzB,mFAAM,EAAE,EAAE,cAAe,EAAE,SAAS;AACxC,QAAI,IAAI,IAAI,MAAM;AAChB,eAAS,GAAG;UACP,gBAAI,oCAAO,UAAU,iCAAe,CAAC,IAAI,IAAG;AAKjD,eAAS,GAAG;WACP;AACL,eAAS,GAAG,IAAI;;AAElB,iBAAa,GAAG,sDAAe,CAAC,QAAQ;EAC1C","file":"material_input.ddc.js"}');
  // Exports:
  return {
    material_input__material_input: material_input__material_input
  };
});

//# sourceMappingURL=material_input.ddc.js.map
