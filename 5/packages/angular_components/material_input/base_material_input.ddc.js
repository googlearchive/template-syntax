define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/quiver/strings', 'packages/intl/intl', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/focus/focus', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_forms/src/directives/validators', 'packages/angular/src/core/linker/element_ref', 'packages/angular/src/core/change_detection/change_detector_ref', 'packages/angular_forms/src/directives/control_container'], function(dart_sdk, disposer, strings, intl, focusable_mixin, focus, lifecycle_hooks, validators, element_ref, change_detector_ref, control_container) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const strings$ = strings.strings;
  const intl$ = intl.intl;
  const mixins__focusable_mixin = focusable_mixin.mixins__focusable_mixin;
  const focus__focus = focus.focus__focus;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__model = validators.src__model;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const _root = Object.create(null);
  const material_input__base_material_input = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $firstWhere = dartx.firstWhere;
  const $values = dartx.values;
  const $keys = dartx.keys;
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let StreamControllerOfFocusEvent = () => (StreamControllerOfFocusEvent = dart.constFn(async.StreamController$(html.FocusEvent)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let MapOfString$dynamicToMapOfString$dynamic = () => (MapOfString$dynamicToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [MapOfString$dynamic()])))();
  dart.defineLazy(material_input__base_material_input, {
    /*material_input__base_material_input.materialInputErrorKey*/get materialInputErrorKey() {
      return 'material-input-error';
    }
  });
  material_input__base_material_input.ValidityCheck = dart.typedef('ValidityCheck', () => dart.fnType(core.String, [core.String]));
  material_input__base_material_input.CharacterCounter = dart.typedef('CharacterCounter', () => dart.fnType(core.int, [core.String]));
  material_input__base_material_input.BottomPanelState = class BottomPanelState extends core.Object {
    toString() {
      return {
        0: "BottomPanelState.empty",
        1: "BottomPanelState.error",
        2: "BottomPanelState.hint"
      }[this.index];
    }
  };
  (material_input__base_material_input.BottomPanelState.new = function(x) {
    this.index = x;
  }).prototype = material_input__base_material_input.BottomPanelState.prototype;
  dart.addTypeTests(material_input__base_material_input.BottomPanelState);
  dart.setFieldSignature(material_input__base_material_input.BottomPanelState, () => ({
    __proto__: dart.getFields(material_input__base_material_input.BottomPanelState.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(material_input__base_material_input.BottomPanelState, ['toString']);
  material_input__base_material_input.BottomPanelState.empty = dart.const(new material_input__base_material_input.BottomPanelState.new(0));
  material_input__base_material_input.BottomPanelState.error = dart.const(new material_input__base_material_input.BottomPanelState.new(1));
  material_input__base_material_input.BottomPanelState.hint = dart.const(new material_input__base_material_input.BottomPanelState.new(2));
  material_input__base_material_input.BottomPanelState.values = dart.constList([material_input__base_material_input.BottomPanelState.empty, material_input__base_material_input.BottomPanelState.error, material_input__base_material_input.BottomPanelState.hint], material_input__base_material_input.BottomPanelState);
  const _cd = Symbol('_cd');
  const _changeDetector = Symbol('_changeDetector');
  const _disposer = Symbol('_disposer');
  const _invalid = Symbol('_invalid');
  const _validationMessage = Symbol('_validationMessage');
  const _localValidationMessage = Symbol('_localValidationMessage');
  const _required = Symbol('_required');
  const _showHintOnlyOnFocus = Symbol('_showHintOnlyOnFocus');
  const _pristine = Symbol('_pristine');
  const _errorMsg = Symbol('_errorMsg');
  const _error = Symbol('_error');
  const _hintText = Symbol('_hintText');
  const _requiredErrorMsg = Symbol('_requiredErrorMsg');
  const _checkValid = Symbol('_checkValid');
  const _inputTextLength = Symbol('_inputTextLength');
  const _inputText = Symbol('_inputText');
  const _characterCounter = Symbol('_characterCounter');
  const _keypressController = Symbol('_keypressController');
  const _changeController = Symbol('_changeController');
  const _blurController = Symbol('_blurController');
  const _isLocallyValid = Symbol('_isLocallyValid');
  const _validate = Symbol('_validate');
  let const$;
  material_input__base_material_input.BaseMaterialInput = class BaseMaterialInput extends mixins__focusable_mixin.FocusableMixin {
    get emptyState() {
      return this[emptyState];
    }
    set emptyState(value) {
      super.emptyState = value;
    }
    get errorState() {
      return this[errorState];
    }
    set errorState(value) {
      super.errorState = value;
    }
    get hintState() {
      return this[hintState];
    }
    set hintState(value) {
      super.hintState = value;
    }
    get useNativeValidation() {
      return this[useNativeValidation];
    }
    set useNativeValidation(value) {
      this[useNativeValidation] = value;
    }
    get bottomPanelState() {
      return this[bottomPanelState];
    }
    set bottomPanelState(value) {
      this[bottomPanelState] = value;
    }
    get errorMsg() {
      return this[_errorMsg];
    }
    set errorMsg(msg) {
      this[_errorMsg] = msg;
      this.updateBottomPanelState();
    }
    get error() {
      return this[_error];
    }
    set error(error) {
      this[_error] = error;
      this.updateBottomPanelState();
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    get inputAriaLabel() {
      return this[inputAriaLabel];
    }
    set inputAriaLabel(value) {
      this[inputAriaLabel] = value;
    }
    get hintText() {
      return this[_hintText];
    }
    set hintText(value) {
      this[_hintText] = core.String._check(value);
      this.updateBottomPanelState();
    }
    get requiredErrorMsg() {
      return this[_requiredErrorMsg];
    }
    set requiredErrorMsg(value) {
      this[_requiredErrorMsg] = value;
      if ((() => {
        let t = this[_cd];
        return t == null ? null : t.control;
      })() != null) {
        this[_cd].control.updateValueAndValidity();
      }
    }
    get maxCount() {
      return this[maxCount];
    }
    set maxCount(value) {
      this[maxCount] = value;
    }
    get checkValid() {
      return this[_checkValid];
    }
    set checkValid(validFn) {
      if (dart.equals(validFn, this[_checkValid])) return;
      this[_checkValid] = validFn;
      this[_changeDetector].markForCheck();
      if ((() => {
        let t = this[_cd];
        return t == null ? null : t.control;
      })() != null) {
        this[_cd].control.updateValueAndValidity();
      }
      this.updateBottomPanelState();
    }
    get inputTextLength() {
      return this[_inputTextLength];
    }
    get inputText() {
      return this[_inputText];
    }
    set inputText(value) {
      this[_inputText] = value;
      this.updateInputTextLength();
      this[_changeDetector].markForCheck();
    }
    get displayBottomPanel() {
      return this[displayBottomPanel];
    }
    set displayBottomPanel(value) {
      this[displayBottomPanel] = value;
    }
    get errorRenderer() {
      return this[errorRenderer];
    }
    set errorRenderer(value) {
      this[errorRenderer] = value;
    }
    set characterCounter(counterFn) {
      this[_characterCounter] = counterFn;
      this.updateInputTextLength();
    }
    updateInputTextLength() {
      if (this[_inputText] == null) {
        this[_inputTextLength] = 0;
      } else {
        this[_inputTextLength] = this[_characterCounter] != null ? this[_characterCounter](this[_inputText]) : this[_inputText].length;
      }
    }
    get showCharacterCount() {
      return this[showCharacterCount];
    }
    set showCharacterCount(value) {
      this[showCharacterCount] = value;
    }
    ngAfterViewInit() {
      if ((() => {
        let t = this[_cd];
        return t == null ? null : t.control;
      })() != null) {
        this[_disposer].addStreamSubscription(dart.dynamic, this[_cd].control.valueChanges.listen(dart.fn(value => {
          this[_changeDetector].markForCheck();
        }, dynamicToNull())));
        this[_disposer].addStreamSubscription(core.String, this[_cd].control.statusChanges.listen(dart.fn(status => {
          this[_changeDetector].markForCheck();
          this.updateBottomPanelState();
        }, StringToNull())));
      }
    }
    call(_) {
      return this[_isLocallyValid](true);
    }
    [_isLocallyValid](fromFormsApi) {
      if (dart.test(this.required) && dart.test(strings$.isEmpty(this.inputText)) && (dart.test(fromFormsApi) || !dart.test(this[_pristine]))) {
        this[_localValidationMessage] = this.requiredErrorMsg;
        return new (IdentityMapOfString$dynamic()).from(["material-input-error", this[_localValidationMessage]]);
      }
      if (this.maxCount != null && dart.notNull(this.inputTextLength) > dart.notNull(this.maxCount)) {
        this[_localValidationMessage] = this[_errorMsg];
        return new (IdentityMapOfString$dynamic()).from(["material-input-error", this[_localValidationMessage]]);
      }
      if (this.checkValid != null) {
        let _checkValidMessage = this.checkValid(this.inputText);
        if (_checkValidMessage != null) {
          this[_localValidationMessage] = _checkValidMessage;
          return new (IdentityMapOfString$dynamic()).from(["material-input-error", this[_localValidationMessage]]);
        }
      }
      if (dart.test(this[_invalid]) && dart.test(this.useNativeValidation)) {
        this[_localValidationMessage] = this[_validationMessage];
        return new (IdentityMapOfString$dynamic()).from(["material-input-error", this[_localValidationMessage]]);
      }
      this[_localValidationMessage] = null;
      return null;
    }
    get floatingLabel() {
      return this[floatingLabel];
    }
    set floatingLabel(value) {
      this[floatingLabel] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get showHintOnlyOnFocus() {
      return this[_showHintOnlyOnFocus];
    }
    set showHintOnlyOnFocus(value) {
      this[_showHintOnlyOnFocus] = value;
      this.updateBottomPanelState();
    }
    get required() {
      return this[_required];
    }
    set required(required) {
      let prev = this[_required];
      this[_required] = required;
      if (prev != this[_required] && this[_cd] != null) {
        this[_cd].control.updateValueAndValidity();
      }
    }
    get onKeypress() {
      return this[_keypressController].stream;
    }
    get onChange() {
      return this[_changeController].stream;
    }
    get onBlur() {
      return this[_blurController].stream;
    }
    get focused() {
      return this[focused];
    }
    set focused(value) {
      this[focused] = value;
    }
    get underlineAnimated() {
      return this.focused;
    }
    get floatingLabelVisible() {
      return this.floatingLabel;
    }
    get labelAnimated() {
      return dart.test(this.floatingLabelVisible) && (dart.test(this.focused) || dart.test(this.hasVisibleText));
    }
    get labelAnimationReset() {
      return dart.test(this.floatingLabelVisible) && !dart.test(this.focused) && !dart.test(this.hasVisibleText);
    }
    get invalid() {
      if ((() => {
        let t = this[_error];
        let l = t == null ? null : t[$isNotEmpty];
        return l != null ? l : false;
      })()) return true;
      if ((() => {
        let t = this[_cd];
        return t == null ? null : t.control;
      })() != null) {
        return !dart.test(this[_cd].valid) && (dart.test(this[_cd].touched) || dart.test(this[_cd].dirty));
      }
      return this[_isLocallyValid](false) != null;
    }
    get hasVisibleText() {
      let t = this.inputText;
      let l = t == null ? null : t[$isNotEmpty];
      return l != null ? l : false;
    }
    get labelVisible() {
      return dart.test(this.floatingLabelVisible) || !dart.test(this.hasVisibleText);
    }
    get ariaLabel() {
      let l = this.inputAriaLabel;
      return l != null ? l : this.label;
    }
    get errorMessage() {
      if ((() => {
        let t = this[_error];
        let l = t == null ? null : t[$isNotEmpty];
        return l != null ? l : false;
      })()) return this[_error];
      if (this[_cd] != null && (() => {
        let t = this[_cd].control;
        return t == null ? null : t.errors;
      })() != null) {
        let errorMap = this[_cd].control.errors;
        if (this.errorRenderer != null) errorMap = this.errorRenderer(errorMap);
        let stringValue = errorMap[$values][$firstWhere](dart.fn(v => typeof v == 'string' && v[$isNotEmpty], dynamicTobool()), {orElse: dart.fn(() => null, VoidToNull())});
        if (stringValue != null) {
          return core.String.as(stringValue);
        }
        for (let key of errorMap[$keys]) {
          if ("required" === key) {
            return this.requiredErrorMsg;
          }
          if ("maxlength" === key) {
            return this[_errorMsg];
          }
        }
      }
      let l = this[_localValidationMessage];
      return l != null ? l : '';
    }
    get inputRef() {
      return null;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
    inputFocusAction(event) {
      this.focused = true;
      this.handleFocus(html.FocusEvent._check(event));
      this.updateBottomPanelState();
    }
    inputBlurAction(event, valid, validationMessage) {
      this[_validate](valid, validationMessage);
      this[_pristine] = false;
      this.focused = false;
      this[_blurController].add(html.FocusEvent._check(event));
      this.updateBottomPanelState();
    }
    inputChange(newValue, valid, validationMessage) {
      this[_validate](valid, validationMessage);
      this[_pristine] = false;
      this.inputText = core.String._check(newValue);
      this[_changeController].add(core.String._check(newValue));
      this.updateBottomPanelState();
    }
    inputKeypress(newValue, valid, validationMessage) {
      this[_validate](valid, validationMessage);
      this[_pristine] = false;
      this.inputText = core.String._check(newValue);
      this[_keypressController].add(core.String._check(newValue));
      this.updateBottomPanelState();
    }
    [_validate](valid, validationMessage) {
      this[_invalid] = !dart.dtest(valid);
      this[_validationMessage] = core.String._check(validationMessage);
    }
    updateBottomPanelState() {
      let oldState = this.bottomPanelState;
      if (dart.test(this.invalid) && dart.test(strings$.isNotEmpty(this.errorMessage))) {
        this.bottomPanelState = material_input__base_material_input.BottomPanelState.error;
      } else if ((!dart.test(this.showHintOnlyOnFocus) || dart.test(this.focused)) && dart.test(strings$.isNotEmpty(this[_hintText]))) {
        this.bottomPanelState = material_input__base_material_input.BottomPanelState.hint;
      } else {
        this.bottomPanelState = material_input__base_material_input.BottomPanelState.empty;
      }
      if (oldState != this.bottomPanelState) {
        this[_changeDetector].markForCheck();
      }
    }
    selectAll() {
      dart.dsend(this.inputRef.nativeElement, 'select');
    }
    msgCharacterCounter(currentCount, maxCount) {
      return maxCount == null ? dart.str`${currentCount}` : material_input__base_material_input.BaseMaterialInput._msgCharacterCounter(currentCount, maxCount);
    }
    static _msgCharacterCounter(currentCount, maxCount) {
      return intl$.Intl.message(dart.str`${currentCount} / ${maxCount}`, {name: 'BaseMaterialInput__msgCharacterCounter', args: [currentCount, maxCount], desc: 'Character counter shown below a text box in the format "12 / 25"', examples: const$ || (const$ = dart.constMap(core.String, dart.dynamic, ['currentCount', 12, 'maxCount', 25]))});
    }
    static get defaultEmptyMessage() {
      return intl$.Intl.message('Enter a value', {desc: 'Error message when the input is empty and required.'});
    }
  };
  material_input__base_material_input.BaseMaterialInput.prototype[dart._runtimeType] = material_input__base_material_input.BaseMaterialInput;
  (material_input__base_material_input.BaseMaterialInput.new = function callableClass(cd, changeDetector, validator) {
    if (typeof this !== "function") {
      function self(...args) {
        return self.call.apply(self, args);
      }
      self.__proto__ = this.__proto__;
      callableClass.call(self, cd, changeDetector, validator);
      return self;
    }
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[emptyState] = material_input__base_material_input.BottomPanelState.empty;
    this[errorState] = material_input__base_material_input.BottomPanelState.error;
    this[hintState] = material_input__base_material_input.BottomPanelState.hint;
    this[_invalid] = false;
    this[_validationMessage] = null;
    this[_localValidationMessage] = null;
    this[_required] = false;
    this[_showHintOnlyOnFocus] = false;
    this[useNativeValidation] = true;
    this[_pristine] = true;
    this[bottomPanelState] = material_input__base_material_input.BottomPanelState.empty;
    this[_errorMsg] = null;
    this[_error] = null;
    this[label] = null;
    this[inputAriaLabel] = null;
    this[_hintText] = null;
    this[_requiredErrorMsg] = material_input__base_material_input.BaseMaterialInput.defaultEmptyMessage;
    this[maxCount] = null;
    this[_checkValid] = null;
    this[_inputTextLength] = 0;
    this[_inputText] = '';
    this[displayBottomPanel] = true;
    this[errorRenderer] = null;
    this[_characterCounter] = null;
    this[showCharacterCount] = false;
    this[floatingLabel] = false;
    this[disabled] = false;
    this[_keypressController] = StreamControllerOfString().broadcast({sync: true});
    this[_changeController] = StreamControllerOfString().broadcast({sync: true});
    this[_blurController] = StreamControllerOfFocusEvent().broadcast({sync: true});
    this[focused] = false;
    this[_cd] = cd;
    this[_changeDetector] = changeDetector;
    material_input__base_material_input.BaseMaterialInput.__proto__.new.call(this);
    let call = dart.bind(this, 'call');
    validator.add(call);
    this[_disposer].addFunction(dart.fn(() => {
      validator.remove(call);
    }, VoidToNull()));
  }).prototype = material_input__base_material_input.BaseMaterialInput.prototype;
  dart.addTypeTests(material_input__base_material_input.BaseMaterialInput);
  const emptyState = Symbol("BaseMaterialInput.emptyState");
  const errorState = Symbol("BaseMaterialInput.errorState");
  const hintState = Symbol("BaseMaterialInput.hintState");
  const useNativeValidation = Symbol("BaseMaterialInput.useNativeValidation");
  const bottomPanelState = Symbol("BaseMaterialInput.bottomPanelState");
  const label = Symbol("BaseMaterialInput.label");
  const inputAriaLabel = Symbol("BaseMaterialInput.inputAriaLabel");
  const maxCount = Symbol("BaseMaterialInput.maxCount");
  const displayBottomPanel = Symbol("BaseMaterialInput.displayBottomPanel");
  const errorRenderer = Symbol("BaseMaterialInput.errorRenderer");
  const showCharacterCount = Symbol("BaseMaterialInput.showCharacterCount");
  const floatingLabel = Symbol("BaseMaterialInput.floatingLabel");
  const disabled = Symbol("BaseMaterialInput.disabled");
  const focused = Symbol("BaseMaterialInput.focused");
  material_input__base_material_input.BaseMaterialInput[dart.implements] = () => [focus__focus.Focusable, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_input__base_material_input.BaseMaterialInput, () => ({
    __proto__: dart.getMethods(material_input__base_material_input.BaseMaterialInput.__proto__),
    updateInputTextLength: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    call: dart.fnType(core.Map$(core.String, dart.dynamic), [src__model.AbstractControl]),
    [_isLocallyValid]: dart.fnType(core.Map$(core.String, dart.dynamic), [core.bool]),
    ngOnDestroy: dart.fnType(dart.void, []),
    inputFocusAction: dart.fnType(dart.void, [dart.dynamic]),
    inputBlurAction: dart.fnType(dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]),
    inputChange: dart.fnType(dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]),
    inputKeypress: dart.fnType(dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]),
    [_validate]: dart.fnType(dart.void, [dart.dynamic, dart.dynamic]),
    updateBottomPanelState: dart.fnType(dart.void, []),
    selectAll: dart.fnType(dart.void, []),
    msgCharacterCounter: dart.fnType(core.String, [core.int, core.int])
  }));
  dart.setStaticMethodSignature(material_input__base_material_input.BaseMaterialInput, () => ({_msgCharacterCounter: dart.fnType(core.String, [core.int, core.int])}));
  dart.setGetterSignature(material_input__base_material_input.BaseMaterialInput, () => ({
    __proto__: dart.getGetters(material_input__base_material_input.BaseMaterialInput.__proto__),
    errorMsg: dart.fnType(core.String, []),
    error: dart.fnType(core.String, []),
    hintText: dart.fnType(core.String, []),
    requiredErrorMsg: dart.fnType(core.String, []),
    checkValid: dart.fnType(dart.fnType(core.String, [core.String]), []),
    inputTextLength: dart.fnType(core.int, []),
    inputText: dart.fnType(core.String, []),
    showHintOnlyOnFocus: dart.fnType(core.bool, []),
    required: dart.fnType(core.bool, []),
    onKeypress: dart.fnType(async.Stream$(core.String), []),
    onChange: dart.fnType(async.Stream$(core.String), []),
    onBlur: dart.fnType(async.Stream$(html.FocusEvent), []),
    underlineAnimated: dart.fnType(core.bool, []),
    floatingLabelVisible: dart.fnType(core.bool, []),
    labelAnimated: dart.fnType(core.bool, []),
    labelAnimationReset: dart.fnType(core.bool, []),
    invalid: dart.fnType(core.bool, []),
    hasVisibleText: dart.fnType(core.bool, []),
    labelVisible: dart.fnType(core.bool, []),
    ariaLabel: dart.fnType(core.String, []),
    errorMessage: dart.fnType(core.String, []),
    inputRef: dart.fnType(src__core__linker__element_ref.ElementRef, [])
  }));
  dart.setSetterSignature(material_input__base_material_input.BaseMaterialInput, () => ({
    __proto__: dart.getSetters(material_input__base_material_input.BaseMaterialInput.__proto__),
    errorMsg: dart.fnType(dart.void, [core.String]),
    error: dart.fnType(dart.void, [core.String]),
    hintText: dart.fnType(dart.void, [dart.dynamic]),
    requiredErrorMsg: dart.fnType(dart.void, [core.String]),
    checkValid: dart.fnType(dart.void, [StringToString()]),
    inputText: dart.fnType(dart.void, [core.String]),
    characterCounter: dart.fnType(dart.void, [StringToint()]),
    showHintOnlyOnFocus: dart.fnType(dart.void, [core.bool]),
    required: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_input__base_material_input.BaseMaterialInput, () => ({
    __proto__: dart.getFields(material_input__base_material_input.BaseMaterialInput.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    emptyState: dart.finalFieldType(material_input__base_material_input.BottomPanelState),
    errorState: dart.finalFieldType(material_input__base_material_input.BottomPanelState),
    hintState: dart.finalFieldType(material_input__base_material_input.BottomPanelState),
    [_invalid]: dart.fieldType(core.bool),
    [_validationMessage]: dart.fieldType(core.String),
    [_localValidationMessage]: dart.fieldType(core.String),
    [_required]: dart.fieldType(core.bool),
    [_showHintOnlyOnFocus]: dart.fieldType(core.bool),
    useNativeValidation: dart.fieldType(core.bool),
    [_pristine]: dart.fieldType(core.bool),
    [_cd]: dart.fieldType(src__directives__ng_control.NgControl),
    bottomPanelState: dart.fieldType(material_input__base_material_input.BottomPanelState),
    [_errorMsg]: dart.fieldType(core.String),
    [_error]: dart.fieldType(core.String),
    label: dart.fieldType(core.String),
    inputAriaLabel: dart.fieldType(core.String),
    [_hintText]: dart.fieldType(core.String),
    [_requiredErrorMsg]: dart.fieldType(core.String),
    maxCount: dart.fieldType(core.int),
    [_checkValid]: dart.fieldType(StringToString()),
    [_inputTextLength]: dart.fieldType(core.int),
    [_inputText]: dart.fieldType(core.String),
    displayBottomPanel: dart.fieldType(core.bool),
    errorRenderer: dart.fieldType(MapOfString$dynamicToMapOfString$dynamic()),
    [_characterCounter]: dart.fieldType(StringToint()),
    showCharacterCount: dart.fieldType(core.bool),
    floatingLabel: dart.fieldType(core.bool),
    disabled: dart.fieldType(core.bool),
    [_keypressController]: dart.finalFieldType(StreamControllerOfString()),
    [_changeController]: dart.finalFieldType(StreamControllerOfString()),
    [_blurController]: dart.finalFieldType(StreamControllerOfFocusEvent()),
    focused: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_input/base_material_input.ddc", {
    "package:angular_components/material_input/base_material_input.dart": material_input__base_material_input
  }, '{"version":3,"sourceRoot":"","sources":["base_material_input.dart"],"names":[],"mappings":"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","file":"base_material_input.ddc.js"}');
  // Exports:
  return {
    material_input__base_material_input: material_input__base_material_input
  };
});

//# sourceMappingURL=base_material_input.ddc.js.map
