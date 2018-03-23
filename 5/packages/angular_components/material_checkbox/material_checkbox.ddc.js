define(['dart_sdk', 'packages/angular_components/model/ui/icon', 'packages/angular_components/utils/browser/events/events', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_components/focus/focus', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, icon, events, control_value_accessor, focus, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__icon = icon.model__ui__icon;
  const utils__browser__events__events = events.utils__browser__events__events;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const focus__focus = focus.focus__focus;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_checkbox__material_checkbox = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $_set = dartx._set;
  const $attributes = dartx.attributes;
  const $target = dartx.target;
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let dynamic__Todynamic = () => (dynamic__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  dart.defineLazy(material_checkbox__material_checkbox, {
    /*material_checkbox__material_checkbox.uncheckedIcon*/get uncheckedIcon() {
      return dart.const(new model__ui__icon.Icon.new('check_box_outline_blank'));
    },
    /*material_checkbox__material_checkbox.checkedIcon*/get checkedIcon() {
      return dart.const(new model__ui__icon.Icon.new('check_box'));
    },
    /*material_checkbox__material_checkbox.indeterminateIcon*/get indeterminateIcon() {
      return dart.const(new model__ui__icon.Icon.new('indeterminate_check_box'));
    },
    /*material_checkbox__material_checkbox.uncheckedAriaState*/get uncheckedAriaState() {
      return 'false';
    },
    /*material_checkbox__material_checkbox.checkedAriaState*/get checkedAriaState() {
      return 'true';
    },
    /*material_checkbox__material_checkbox.indeterminateAriaState*/get indeterminateAriaState() {
      return 'mixed';
    }
  });
  const _root$ = Symbol('_root');
  const _changeDetector = Symbol('_changeDetector');
  const _defaultTabIndex = Symbol('_defaultTabIndex');
  const _onTouched = Symbol('_onTouched');
  const _onChecked = Symbol('_onChecked');
  const _onIndeterminate = Symbol('_onIndeterminate');
  const _onChange = Symbol('_onChange');
  const _checked = Symbol('_checked');
  const _focused = Symbol('_focused');
  const _isKeyboardEvent = Symbol('_isKeyboardEvent');
  const _checkedStr = Symbol('_checkedStr');
  const _indeterminate = Symbol('_indeterminate');
  const _icon = Symbol('_icon');
  const _syncAriaChecked = Symbol('_syncAriaChecked');
  const _setStates = Symbol('_setStates');
  material_checkbox__material_checkbox.MaterialCheckboxComponent = class MaterialCheckboxComponent extends core.Object {
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    writeValue(newValue) {
      if (newValue == null) return;
      this.checked = core.bool.as(newValue);
    }
    registerOnChange(callback) {
      this.onChecked.listen(dart.fn(checked => dart.dcall(callback, checked), dynamicTodynamic()));
    }
    registerOnTouched(callback) {
      this[_onTouched] = callback;
    }
    get onChecked() {
      return this[_onChecked].stream;
    }
    get onIndeterminate() {
      return this[_onIndeterminate].stream;
    }
    get onChange() {
      return this[_onChange].stream;
    }
    get indeterminateToChecked() {
      return this[indeterminateToChecked];
    }
    set indeterminateToChecked(value) {
      this[indeterminateToChecked] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get tabIndex() {
      return dart.test(this.disabled) ? "-1" : this[_defaultTabIndex];
    }
    set checked(newValue) {
      if (this[_checked] == newValue) return;
      this[_setStates]({checked: newValue});
    }
    get checked() {
      return this[_checked];
    }
    get readOnly() {
      return this[readOnly];
    }
    set readOnly(value) {
      this[readOnly] = value;
    }
    get showFocus() {
      return dart.test(this[_focused]) && dart.test(this[_isKeyboardEvent]);
    }
    get checkedStr() {
      return this[_checkedStr];
    }
    set indeterminate(newValue) {
      if (this[_indeterminate] == newValue) return;
      this[_setStates]({indeterminate: newValue});
    }
    get indeterminate() {
      return this[_indeterminate];
    }
    [_setStates](opts) {
      let checked = opts && 'checked' in opts ? opts.checked : false;
      let indeterminate = opts && 'indeterminate' in opts ? opts.indeterminate : false;
      if (!(!dart.test(checked) || !dart.test(indeterminate))) dart.assertFailed();
      let prevChecked = this[_checked];
      let prevIndeterminate = this[_indeterminate];
      let prevState = this[_checkedStr];
      this[_checked] = checked;
      this[_indeterminate] = indeterminate;
      this[_checkedStr] = dart.test(indeterminate) ? "mixed" : dart.test(this[_checked]) ? "true" : "false";
      this[_icon] = dart.test(this[_indeterminate]) ? material_checkbox__material_checkbox.indeterminateIcon : dart.test(this[_checked]) ? material_checkbox__material_checkbox.checkedIcon : material_checkbox__material_checkbox.uncheckedIcon;
      if (this[_checked] != prevChecked) {
        this[_onChecked].add(this[_checked]);
      }
      if (this[_indeterminate] != prevIndeterminate) {
        this[_onIndeterminate].add(this[_indeterminate]);
      }
      if (this[_checkedStr] != prevState) {
        this[_syncAriaChecked]();
        this[_onChange].add(this[_checkedStr]);
      }
    }
    [_syncAriaChecked]() {
      if (this[_root$] == null) return;
      this[_root$][$attributes][$_set]('aria-checked', this[_checkedStr]);
      this[_changeDetector] == null ? null : this[_changeDetector].markForCheck();
    }
    get icon() {
      return this[_icon];
    }
    get themeColor() {
      return this[themeColor];
    }
    set themeColor(value) {
      this[themeColor] = value;
    }
    get rippleColor() {
      return dart.test(this.checked) ? this.themeColor : '';
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    toggleChecked() {
      if (dart.test(this.disabled) || dart.test(this.readOnly)) return;
      if (!dart.test(this.indeterminate) && !dart.test(this.checked)) {
        this[_setStates]({checked: true});
      } else if (dart.test(this.checked)) {
        this[_setStates]();
      } else {
        if (!dart.test(this.indeterminate)) dart.assertFailed();
        this[_setStates]({checked: this.indeterminateToChecked});
      }
    }
    focus() {
      if (dart.test(this.disabled)) return;
      this[_isKeyboardEvent] = true;
      this[_root$].focus();
    }
    handleKeyUp(event) {
      if (!dart.equals(event[$target], this[_root$])) return;
      this[_isKeyboardEvent] = true;
    }
    handleClick(mouseEvent) {
      if (dart.test(this.disabled)) return;
      this[_isKeyboardEvent] = false;
      this.toggleChecked();
    }
    handleMouseDown(mouseEvent) {
      if (dart.test(this.readOnly)) {
        mouseEvent.preventDefault();
      }
    }
    handleKeyPress(event) {
      if (dart.test(this.disabled)) return;
      if (!dart.equals(event[$target], this[_root$])) return;
      if (dart.test(utils__browser__events__events.isSpaceKey(event))) {
        event.preventDefault();
        this[_isKeyboardEvent] = true;
        this.toggleChecked();
      }
    }
    handleFocus(_) {
      this[_focused] = true;
    }
    handleBlur(event) {
      this[_focused] = false;
      let t = this[_onTouched];
      t == null ? null : dart.dcall(t);
    }
  };
  (material_checkbox__material_checkbox.MaterialCheckboxComponent.new = function(root, changeDetector, cd, hostTabIndex, role) {
    this[_onTouched] = null;
    this[_onChecked] = async.StreamController.broadcast();
    this[_onIndeterminate] = async.StreamController.broadcast();
    this[_onChange] = async.StreamController.broadcast();
    this[indeterminateToChecked] = false;
    this[disabled] = false;
    this[_checked] = false;
    this[readOnly] = false;
    this[_focused] = false;
    this[_isKeyboardEvent] = false;
    this[_checkedStr] = "false";
    this[_indeterminate] = false;
    this[_icon] = material_checkbox__material_checkbox.uncheckedIcon;
    this[themeColor] = null;
    this[label] = null;
    this[_root$] = root;
    this[_changeDetector] = changeDetector;
    this[_defaultTabIndex] = (() => {
      let l = hostTabIndex == null ? null : hostTabIndex[$isNotEmpty];
      return l != null ? l : false;
    })() ? hostTabIndex : '0';
    this[role$] = role != null ? role : 'checkbox';
    if (cd != null) {
      cd.valueAccessor = this;
    }
    this[_syncAriaChecked]();
  }).prototype = material_checkbox__material_checkbox.MaterialCheckboxComponent.prototype;
  dart.addTypeTests(material_checkbox__material_checkbox.MaterialCheckboxComponent);
  const role$ = Symbol("MaterialCheckboxComponent.role");
  const indeterminateToChecked = Symbol("MaterialCheckboxComponent.indeterminateToChecked");
  const disabled = Symbol("MaterialCheckboxComponent.disabled");
  const readOnly = Symbol("MaterialCheckboxComponent.readOnly");
  const themeColor = Symbol("MaterialCheckboxComponent.themeColor");
  const label = Symbol("MaterialCheckboxComponent.label");
  material_checkbox__material_checkbox.MaterialCheckboxComponent[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, focus__focus.Focusable];
  dart.setMethodSignature(material_checkbox__material_checkbox.MaterialCheckboxComponent, () => ({
    __proto__: dart.getMethods(material_checkbox__material_checkbox.MaterialCheckboxComponent.__proto__),
    writeValue: dart.fnType(dart.void, [dart.dynamic]),
    registerOnChange: dart.fnType(dart.void, [dynamic__Todynamic()]),
    registerOnTouched: dart.fnType(dart.void, [VoidTodynamic()]),
    [_setStates]: dart.fnType(dart.void, [], {checked: core.bool, indeterminate: core.bool}),
    [_syncAriaChecked]: dart.fnType(dart.void, []),
    toggleChecked: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    handleKeyUp: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleClick: dart.fnType(dart.void, [html.MouseEvent]),
    handleMouseDown: dart.fnType(dart.void, [html.MouseEvent]),
    handleKeyPress: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleFocus: dart.fnType(dart.void, [dart.dynamic]),
    handleBlur: dart.fnType(dart.void, [html.Event])
  }));
  dart.setGetterSignature(material_checkbox__material_checkbox.MaterialCheckboxComponent, () => ({
    __proto__: dart.getGetters(material_checkbox__material_checkbox.MaterialCheckboxComponent.__proto__),
    onChecked: dart.fnType(async.Stream, []),
    onIndeterminate: dart.fnType(async.Stream, []),
    onChange: dart.fnType(async.Stream, []),
    tabIndex: dart.fnType(core.String, []),
    checked: dart.fnType(core.bool, []),
    showFocus: dart.fnType(core.bool, []),
    checkedStr: dart.fnType(core.String, []),
    indeterminate: dart.fnType(core.bool, []),
    icon: dart.fnType(model__ui__icon.Icon, []),
    rippleColor: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(material_checkbox__material_checkbox.MaterialCheckboxComponent, () => ({
    __proto__: dart.getSetters(material_checkbox__material_checkbox.MaterialCheckboxComponent.__proto__),
    checked: dart.fnType(dart.void, [core.bool]),
    indeterminate: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_checkbox__material_checkbox.MaterialCheckboxComponent, () => ({
    __proto__: dart.getFields(material_checkbox__material_checkbox.MaterialCheckboxComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_root$]: dart.finalFieldType(html.HtmlElement),
    [_defaultTabIndex]: dart.finalFieldType(core.String),
    role: dart.finalFieldType(core.String),
    [_onTouched]: dart.fieldType(core.Function),
    [_onChecked]: dart.finalFieldType(async.StreamController),
    [_onIndeterminate]: dart.finalFieldType(async.StreamController),
    [_onChange]: dart.finalFieldType(async.StreamController),
    indeterminateToChecked: dart.fieldType(core.bool),
    disabled: dart.fieldType(core.bool),
    [_checked]: dart.fieldType(core.bool),
    readOnly: dart.fieldType(core.bool),
    [_focused]: dart.fieldType(core.bool),
    [_isKeyboardEvent]: dart.fieldType(core.bool),
    [_checkedStr]: dart.fieldType(core.String),
    [_indeterminate]: dart.fieldType(core.bool),
    [_icon]: dart.fieldType(model__ui__icon.Icon),
    themeColor: dart.fieldType(core.String),
    label: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/material_checkbox/material_checkbox.ddc", {
    "package:angular_components/material_checkbox/material_checkbox.dart": material_checkbox__material_checkbox
  }, '{"version":3,"sourceRoot":"","sources":["material_checkbox.dart"],"names":[],"mappings":"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","file":"material_checkbox.ddc.js"}');
  // Exports:
  return {
    material_checkbox__material_checkbox: material_checkbox__material_checkbox
  };
});

//# sourceMappingURL=material_checkbox.ddc.js.map
