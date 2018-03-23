define(['dart_sdk', 'packages/angular_components/material_input/material_number_validators', 'packages/angular_components/material_input/material_input', 'packages/angular_components/utils/angular/properties/properties', 'packages/intl/intl', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_forms/src/directives/validators', 'packages/quiver/strings'], function(dart_sdk, material_number_validators, material_input, properties, intl, material_input_default_value_accessor, control_value_accessor, lifecycle_hooks, validators, strings) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_input__material_number_validators = material_number_validators.material_input__material_number_validators;
  const material_input__material_input = material_input.material_input__material_input;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const intl$ = intl.intl;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__model = validators.src__model;
  const src__directives__validators = validators.src__directives__validators;
  const strings$ = strings.strings;
  const _root = Object.create(null);
  const material_input__material_number_accessor = Object.create(_root);
  const $contains = dartx.contains;
  const $toInt = dartx.toInt;
  let FocusEventToNull = () => (FocusEventToNull = dart.constFn(dart.fnType(core.Null, [html.FocusEvent])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamic__Todynamic = () => (dynamic__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  dart.defineLazy(material_input__material_number_accessor, {
    /*material_input__material_number_accessor.materialNumberInputDirectives*/get materialNumberInputDirectives() {
      return dart.constList([dart.wrapType(material_input__material_number_accessor.CheckIntegerValidator), dart.wrapType(material_input__material_number_validators.LowerBoundValidator), dart.wrapType(material_input__material_input.MaterialInputComponent), dart.wrapType(material_input__material_number_accessor.MaterialNumberValueAccessor), dart.wrapType(material_input__material_number_accessor.MaterialNumberValidator), dart.wrapType(material_input__material_number_validators.PositiveNumValidator), dart.wrapType(material_input__material_number_validators.CheckNonNegativeValidator), dart.wrapType(material_input__material_number_validators.UpperBoundValidator)], core.Type);
    }
  });
  const _updateStream = Symbol('_updateStream');
  const _checkInteger = Symbol('_checkInteger');
  const _numberFormat = Symbol('_numberFormat');
  const _parseNumber = Symbol('_parseNumber');
  const writeValue = Symbol("writeValue");
  material_input__material_number_accessor.MaterialNumberValueAccessor = class MaterialNumberValueAccessor extends material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor {
    static new(input, control, numberFormat, changeUpdateAttr, keypressUpdateAttr, integer, blurFormat) {
      let updateStream = null;
      let changeUpdate = utils__angular__properties__properties.getBool(changeUpdateAttr != null ? changeUpdateAttr : false);
      let keypressUpdate = utils__angular__properties__properties.getBool(keypressUpdateAttr != null ? keypressUpdateAttr : false);
      if (!!(dart.test(changeUpdate) && dart.test(keypressUpdate))) dart.assertFailed('Cannot update both on keypress and change.');
      if (dart.test(changeUpdate)) {
        updateStream = input.onChange;
      } else if (dart.test(keypressUpdate)) {
        updateStream = input.onKeypress;
      } else {
        updateStream = input.onBlur;
      }
      let t = numberFormat;
      t == null ? numberFormat = new intl$.NumberFormat.decimalPattern() : t;
      let checkInteger = utils__angular__properties__properties.getBool(integer != null ? integer : false);
      return new material_input__material_number_accessor.MaterialNumberValueAccessor.__(async.Stream._check(updateStream), checkInteger, numberFormat, input, control, utils__angular__properties__properties.getBool(blurFormat != null ? blurFormat : false));
    }
    writeValue(newValue) {
      if (!core.identical(this[_parseNumber](this.input.inputText), newValue)) {
        super.writeValue(newValue == null ? '' : this[_numberFormat].format(newValue));
      }
    }
    registerOnChange(callback) {
      this.disposer.addStreamSubscription(dart.dynamic, this[_updateStream].listen(dart.fn(_ => {
        if (this.input == null) return;
        let rawValue = this.input.inputText;
        let value = this[_parseNumber](rawValue);
        dart.dcall(callback, value, {rawValue: rawValue});
      }, dynamicToNull())));
    }
    [_parseNumber](input) {
      if (input === 'NaN') return null;
      try {
        if (dart.test(this[_checkInteger]) && input[$contains](this[_numberFormat].symbols.DECIMAL_SEP)) {
          return null;
        }
        let value = this[_numberFormat].parse(input);
        return dart.test(this[_checkInteger]) ? value[$toInt]() : value;
      } catch (e) {
        if (core.FormatException.is(e)) {
          return null;
        } else
          throw e;
      }
    }
    [writeValue](newValue) {
      return super.writeValue(newValue);
    }
  };
  (material_input__material_number_accessor.MaterialNumberValueAccessor.__ = function(updateStream, checkInteger, numberFormat, input, control, blurFormat) {
    this[_updateStream] = updateStream;
    this[_checkInteger] = checkInteger;
    this[_numberFormat] = numberFormat;
    material_input__material_number_accessor.MaterialNumberValueAccessor.__proto__.new.call(this, input, control);
    if (dart.test(blurFormat)) {
      this.disposer.addStreamSubscription(html.FocusEvent, input.onBlur.listen(dart.fn(_ => {
        if (input == null) return;
        let parsedNumber = this[_parseNumber](input.inputText);
        if (parsedNumber != null) {
          this[writeValue](this[_numberFormat].format(parsedNumber));
        }
      }, FocusEventToNull())));
    }
  }).prototype = material_input__material_number_accessor.MaterialNumberValueAccessor.prototype;
  dart.addTypeTests(material_input__material_number_accessor.MaterialNumberValueAccessor);
  material_input__material_number_accessor.MaterialNumberValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_input__material_number_accessor.MaterialNumberValueAccessor, () => ({
    __proto__: dart.getMethods(material_input__material_number_accessor.MaterialNumberValueAccessor.__proto__),
    registerOnChange: dart.fnType(dart.void, [dynamic__Todynamic()]),
    [_parseNumber]: dart.fnType(core.num, [core.String])
  }));
  dart.setFieldSignature(material_input__material_number_accessor.MaterialNumberValueAccessor, () => ({
    __proto__: dart.getFields(material_input__material_number_accessor.MaterialNumberValueAccessor.__proto__),
    [_numberFormat]: dart.finalFieldType(intl$.NumberFormat),
    [_updateStream]: dart.finalFieldType(async.Stream),
    [_checkInteger]: dart.finalFieldType(core.bool)
  }));
  material_input__material_number_accessor.MaterialNumberValidator = class MaterialNumberValidator extends core.Object {
    validate(control) {
      if (!src__model.Control.is(control)) dart.assertFailed();
      if (control.value == null && !dart.test(strings$.isBlank(src__model.Control.as(control).rawValue))) {
        return new (IdentityMapOfString$dynamic()).from(["material-input-number-error", material_input__material_number_accessor.MaterialNumberValidator.inputIsNotNumberMsg()]);
      }
      return null;
    }
    static inputIsNotNumberMsg() {
      return intl$.Intl.message('Enter a number', {desc: 'Error message when input is not a number.', meaning: 'Error message when input is not a number.'});
    }
  };
  (material_input__material_number_accessor.MaterialNumberValidator.new = function() {
  }).prototype = material_input__material_number_accessor.MaterialNumberValidator.prototype;
  dart.addTypeTests(material_input__material_number_accessor.MaterialNumberValidator);
  material_input__material_number_accessor.MaterialNumberValidator[dart.implements] = () => [src__directives__validators.Validator];
  dart.setMethodSignature(material_input__material_number_accessor.MaterialNumberValidator, () => ({
    __proto__: dart.getMethods(material_input__material_number_accessor.MaterialNumberValidator.__proto__),
    validate: dart.fnType(core.Map$(core.String, dart.dynamic), [src__model.AbstractControl])
  }));
  dart.setStaticMethodSignature(material_input__material_number_accessor.MaterialNumberValidator, () => ({inputIsNotNumberMsg: dart.fnType(core.String, [])}));
  material_input__material_number_accessor.CheckIntegerValidator = class CheckIntegerValidator extends core.Object {
    validate(abstractControl) {
      if (!src__model.Control.is(abstractControl)) dart.assertFailed('Can only be used with a Control');
      let control = src__model.Control.as(abstractControl);
      if (control.value == null && !dart.test(strings$.isBlank(control.rawValue))) {
        return new (IdentityMapOfString$dynamic()).from(["check-integer", material_input__material_number_accessor.CheckIntegerValidator.numberIsNotIntegerMsg()]);
      }
      return null;
    }
    static numberIsNotIntegerMsg() {
      return intl$.Intl.message('Enter an integer', {desc: 'Error message when input number is not an integer.', meaning: 'Error message when input number is not an integer.'});
    }
  };
  (material_input__material_number_accessor.CheckIntegerValidator.new = function() {
  }).prototype = material_input__material_number_accessor.CheckIntegerValidator.prototype;
  dart.addTypeTests(material_input__material_number_accessor.CheckIntegerValidator);
  material_input__material_number_accessor.CheckIntegerValidator[dart.implements] = () => [src__directives__validators.Validator];
  dart.setMethodSignature(material_input__material_number_accessor.CheckIntegerValidator, () => ({
    __proto__: dart.getMethods(material_input__material_number_accessor.CheckIntegerValidator.__proto__),
    validate: dart.fnType(core.Map$(core.String, dart.dynamic), [src__model.AbstractControl])
  }));
  dart.setStaticMethodSignature(material_input__material_number_accessor.CheckIntegerValidator, () => ({numberIsNotIntegerMsg: dart.fnType(core.String, [])}));
  dart.trackLibraries("packages/angular_components/material_input/material_number_accessor.ddc", {
    "package:angular_components/material_input/material_number_accessor.dart": material_input__material_number_accessor
  }, '{"version":3,"sourceRoot":"","sources":["material_number_accessor.dart"],"names":[],"mappings":"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","file":"material_number_accessor.ddc.js"}');
  // Exports:
  return {
    material_input__material_number_accessor: material_input__material_number_accessor
  };
});

//# sourceMappingURL=material_number_accessor.ddc.js.map
