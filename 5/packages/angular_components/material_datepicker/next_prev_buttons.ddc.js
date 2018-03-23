define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/intl/intl', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/src/material_datepicker/sequential', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, disposer, intl, lifecycle_hooks, sequential, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const intl$ = intl.intl;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__material_datepicker__sequential = sequential.src__material_datepicker__sequential;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_datepicker__next_prev_buttons = Object.create(_root);
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  const _changeDetector = Symbol('_changeDetector');
  const _modelListeners = Symbol('_modelListeners');
  const _model = Symbol('_model');
  const _hasNext = Symbol('_hasNext');
  const _hasPrev = Symbol('_hasPrev');
  material_datepicker__next_prev_buttons.NextPrevComponent = class NextPrevComponent extends core.Object {
    set model(newModel) {
      this[_modelListeners].dispose();
      this[_model] = newModel;
      let t = newModel == null ? null : newModel.hasNext;
      let l = t == null ? null : t.value;
      this[_hasNext] = l != null ? l : false;
      let t$ = newModel == null ? null : newModel.hasPrev;
      let l$ = t$ == null ? null : t$.value;
      this[_hasPrev] = l$ != null ? l$ : false;
      if (newModel != null) {
        this[_modelListeners].addStreamSubscription(core.bool, newModel.hasNext.stream.listen(dart.fn(newValue => {
          this[_hasNext] = newValue;
          this[_changeDetector].markForCheck();
        }, boolToNull())));
        this[_modelListeners].addStreamSubscription(core.bool, newModel.hasPrev.stream.listen(dart.fn(newValue => {
          this[_hasPrev] = newValue;
          this[_changeDetector].markForCheck();
        }, boolToNull())));
      }
    }
    get nextLabel() {
      return this[nextLabel];
    }
    set nextLabel(value) {
      this[nextLabel] = value;
    }
    get prevLabel() {
      return this[prevLabel];
    }
    set prevLabel(value) {
      this[prevLabel] = value;
    }
    get hasNext() {
      return this[_hasNext];
    }
    get hasPrev() {
      return this[_hasPrev];
    }
    next() {
      if (!dart.test(this.isNextDisabled)) this[_model].next();
    }
    prev() {
      if (!dart.test(this.isPrevDisabled)) this[_model].prev();
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get isPrevDisabled() {
      return dart.test(this.disabled) || !dart.test(this.hasPrev);
    }
    get isNextDisabled() {
      return dart.test(this.disabled) || !dart.test(this.hasNext);
    }
    static get _genericNextMsg() {
      return intl$.Intl.message('Next', {name: '_genericNextMsg', meaning: 'For a button which moves to the next item', desc: 'Label for a button to move to the next item of some series.'});
    }
    static get _genericPrevMsg() {
      return intl$.Intl.message('Previous', {name: '_genericPrevMsg', meaning: 'For a button which moves to the previous item', desc: 'Label for a button to move to the previous item of some series.'});
    }
    ngOnDestroy() {
      this[_modelListeners].dispose();
    }
  };
  (material_datepicker__next_prev_buttons.NextPrevComponent.new = function(changeDetector) {
    this[_modelListeners] = new utils__disposer__disposer.Disposer.multi();
    this[_model] = null;
    this[_hasNext] = false;
    this[_hasPrev] = false;
    this[nextLabel] = material_datepicker__next_prev_buttons.NextPrevComponent._genericNextMsg;
    this[prevLabel] = material_datepicker__next_prev_buttons.NextPrevComponent._genericPrevMsg;
    this[disabled] = false;
    this[_changeDetector] = changeDetector;
  }).prototype = material_datepicker__next_prev_buttons.NextPrevComponent.prototype;
  dart.addTypeTests(material_datepicker__next_prev_buttons.NextPrevComponent);
  const nextLabel = Symbol("NextPrevComponent.nextLabel");
  const prevLabel = Symbol("NextPrevComponent.prevLabel");
  const disabled = Symbol("NextPrevComponent.disabled");
  material_datepicker__next_prev_buttons.NextPrevComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_datepicker__next_prev_buttons.NextPrevComponent, () => ({
    __proto__: dart.getMethods(material_datepicker__next_prev_buttons.NextPrevComponent.__proto__),
    next: dart.fnType(dart.void, []),
    prev: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker__next_prev_buttons.NextPrevComponent, () => ({
    __proto__: dart.getGetters(material_datepicker__next_prev_buttons.NextPrevComponent.__proto__),
    hasNext: dart.fnType(core.bool, []),
    hasPrev: dart.fnType(core.bool, []),
    isPrevDisabled: dart.fnType(core.bool, []),
    isNextDisabled: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(material_datepicker__next_prev_buttons.NextPrevComponent, () => ({
    __proto__: dart.getSetters(material_datepicker__next_prev_buttons.NextPrevComponent.__proto__),
    model: dart.fnType(dart.void, [src__material_datepicker__sequential.Sequential])
  }));
  dart.setFieldSignature(material_datepicker__next_prev_buttons.NextPrevComponent, () => ({
    __proto__: dart.getFields(material_datepicker__next_prev_buttons.NextPrevComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_modelListeners]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_model]: dart.fieldType(src__material_datepicker__sequential.Sequential),
    [_hasNext]: dart.fieldType(core.bool),
    [_hasPrev]: dart.fieldType(core.bool),
    nextLabel: dart.fieldType(core.String),
    prevLabel: dart.fieldType(core.String),
    disabled: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/next_prev_buttons.ddc", {
    "package:angular_components/material_datepicker/next_prev_buttons.dart": material_datepicker__next_prev_buttons
  }, '{"version":3,"sourceRoot":"","sources":["next_prev_buttons.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;cA8DY,QAAmB;AAC3B,2BAAe,QAAQ;AACvB,kBAAM,GAAG,QAAQ;AACjB,cAAW,QAAQ,kBAAR,QAAQ,QAAS;;oBAApB,mBAA+B;AACvC,eAAW,QAAQ,kBAAR,QAAQ,QAAS;;oBAApB,qBAA+B;AAEvC,UAAI,QAAQ,IAAI,MAAM;AACpB,QACE,AAAE,2CAAqB,YAAC,QAAQ,QAAQ,OAAO,OAAO,CAAC,QAAC,QAAQ;AAC9D,wBAAQ,GAAG,QAAQ;AACnB,+BAAe,aAAa;;QAE9B,AAAE,2CAAqB,YAAC,QAAQ,QAAQ,OAAO,OAAO,CAAC,QAAC,QAAQ;AAC9D,wBAAQ,GAAG,QAAQ;AACnB,+BAAe,aAAa;;;IAGpC;IAKO;;;;;;IAKA;;;;;;;YAEa,eAAQ;;;YACR,eAAQ;;;AAG1B,qBAAK,mBAAc,GAAE,YAAM,KAAK;IAClC;;AAGE,qBAAK,mBAAc,GAAE,YAAM,KAAK;IAClC;IAIK;;;;;;;YAG+B,WAAT,aAAQ,gBAAK,YAAO;;;YAGX,WAAT,aAAQ,gBAAK,YAAO;;;YAEV,WAAI,QAAQ,CAAC,eACxC,4BACG,mDACH;IAA8D;;YAEnC,WAAI,QAAQ,CAAC,mBACxC,4BACG,uDACH;IAAkE;;AAI1E,2BAAe,QAAQ;IACzB;;2EAnEuB,cAAe;IALvB,qBAAe,GAAG,IAAI,wCAAc;IACxC,YAAM;IACZ,cAAQ,GAAG;IACX,cAAQ,GAAG;IA4BT,eAAS,GAAG,wEAAe;IAK3B,eAAS,GAAG,wEAAe;IAe7B,cAAQ,GAAG;IA9CO,qBAAe,GAAf,cAAe;EAAC","file":"next_prev_buttons.ddc.js"}');
  // Exports:
  return {
    material_datepicker__next_prev_buttons: material_datepicker__next_prev_buttons
  };
});

//# sourceMappingURL=next_prev_buttons.ddc.js.map
