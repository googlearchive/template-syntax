define(['dart_sdk', 'packages/intl/intl', 'packages/angular_forms/src/directives/validators'], function(dart_sdk, intl, validators) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const src__directives__validators = validators.src__directives__validators;
  const src__model = validators.src__model;
  const _root = Object.create(null);
  const material_input__material_number_validators = Object.create(_root);
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  material_input__material_number_validators.PositiveNumValidator = class PositiveNumValidator extends core.Object {
    get enabled() {
      return this[enabled];
    }
    set enabled(value) {
      this[enabled] = value;
    }
    validate(control) {
      if (!dart.test(this.enabled) || control.value == null) return null;
      if (!core.Comparable.is(control.value)) dart.assertFailed('Value needs to be comparable');
      if (dart.dtest(dart.dsend(control.value, '<=', 0))) {
        return new (IdentityMapOfString$dynamic()).from(["positive-number", material_input__material_number_validators.PositiveNumValidator.numberIsNotPositiveMsg()]);
      }
      return null;
    }
    static numberIsNotPositiveMsg() {
      return intl$.Intl.message('Enter a number greater than 0', {desc: 'Error message when input number is not positive.'});
    }
  };
  (material_input__material_number_validators.PositiveNumValidator.new = function() {
    this[enabled] = true;
  }).prototype = material_input__material_number_validators.PositiveNumValidator.prototype;
  dart.addTypeTests(material_input__material_number_validators.PositiveNumValidator);
  const enabled = Symbol("PositiveNumValidator.enabled");
  material_input__material_number_validators.PositiveNumValidator[dart.implements] = () => [src__directives__validators.Validator];
  dart.setMethodSignature(material_input__material_number_validators.PositiveNumValidator, () => ({
    __proto__: dart.getMethods(material_input__material_number_validators.PositiveNumValidator.__proto__),
    validate: dart.fnType(core.Map$(core.String, dart.dynamic), [src__model.AbstractControl])
  }));
  dart.setStaticMethodSignature(material_input__material_number_validators.PositiveNumValidator, () => ({numberIsNotPositiveMsg: dart.fnType(core.String, [])}));
  dart.setFieldSignature(material_input__material_number_validators.PositiveNumValidator, () => ({
    __proto__: dart.getFields(material_input__material_number_validators.PositiveNumValidator.__proto__),
    enabled: dart.fieldType(core.bool)
  }));
  material_input__material_number_validators.CheckNonNegativeValidator = class CheckNonNegativeValidator extends core.Object {
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      this[enabled$] = value;
    }
    validate(control) {
      if (!dart.test(this.enabled) || control.value == null) return null;
      if (!core.Comparable.is(control.value)) dart.assertFailed('Value needs to be comparable');
      if (dart.dtest(dart.dsend(control.value, '<', 0))) {
        return new (IdentityMapOfString$dynamic()).from(["non-negative", material_input__material_number_validators.CheckNonNegativeValidator.numberIsNegativeMsg()]);
      }
      return null;
    }
    static numberIsNegativeMsg() {
      return intl$.Intl.message('Enter a number that is not negative', {desc: 'Error message when input number is not positive or 0.'});
    }
  };
  (material_input__material_number_validators.CheckNonNegativeValidator.new = function() {
    this[enabled$] = true;
  }).prototype = material_input__material_number_validators.CheckNonNegativeValidator.prototype;
  dart.addTypeTests(material_input__material_number_validators.CheckNonNegativeValidator);
  const enabled$ = Symbol("CheckNonNegativeValidator.enabled");
  material_input__material_number_validators.CheckNonNegativeValidator[dart.implements] = () => [src__directives__validators.Validator];
  dart.setMethodSignature(material_input__material_number_validators.CheckNonNegativeValidator, () => ({
    __proto__: dart.getMethods(material_input__material_number_validators.CheckNonNegativeValidator.__proto__),
    validate: dart.fnType(core.Map$(core.String, dart.dynamic), [src__model.AbstractControl])
  }));
  dart.setStaticMethodSignature(material_input__material_number_validators.CheckNonNegativeValidator, () => ({numberIsNegativeMsg: dart.fnType(core.String, [])}));
  dart.setFieldSignature(material_input__material_number_validators.CheckNonNegativeValidator, () => ({
    __proto__: dart.getFields(material_input__material_number_validators.CheckNonNegativeValidator.__proto__),
    enabled: dart.fieldType(core.bool)
  }));
  const _numberFormat = Symbol('_numberFormat');
  let const$;
  material_input__material_number_validators.LowerBoundValidator = class LowerBoundValidator extends core.Object {
    get lowerBound() {
      return this[lowerBound];
    }
    set lowerBound(value) {
      this[lowerBound] = value;
    }
    validate(control) {
      if (control.value == null || this.lowerBound == null) return null;
      if (!core.Comparable.is(control.value)) dart.assertFailed('Value needs to be Comparable');
      if (dart.dtest(dart.dsend(control.value, '<', this.lowerBound))) {
        let lowerText = this[_numberFormat].format(this.lowerBound);
        return new (IdentityMapOfString$dynamic()).from(["lower-bound-number", material_input__material_number_validators.LowerBoundValidator.numberIsTooSmallMsg(lowerText)]);
      }
      return null;
    }
    static numberIsTooSmallMsg(_lowerBound) {
      return intl$.Intl.message(dart.str`Enter a number ${_lowerBound} or greater`, {name: 'LowerBoundValidator_numberIsTooSmallMsg', args: [_lowerBound], desc: 'Error message when input number is too small.', examples: const$ || (const$ = dart.constMap(core.String, dart.dynamic, ['_lowerBound', 42]))});
    }
  };
  (material_input__material_number_validators.LowerBoundValidator.new = function(format) {
    this[lowerBound] = null;
    let l = format;
    this[_numberFormat] = l != null ? l : new intl$.NumberFormat.decimalPattern();
  }).prototype = material_input__material_number_validators.LowerBoundValidator.prototype;
  dart.addTypeTests(material_input__material_number_validators.LowerBoundValidator);
  const lowerBound = Symbol("LowerBoundValidator.lowerBound");
  material_input__material_number_validators.LowerBoundValidator[dart.implements] = () => [src__directives__validators.Validator];
  dart.setMethodSignature(material_input__material_number_validators.LowerBoundValidator, () => ({
    __proto__: dart.getMethods(material_input__material_number_validators.LowerBoundValidator.__proto__),
    validate: dart.fnType(core.Map$(core.String, dart.dynamic), [src__model.AbstractControl])
  }));
  dart.setStaticMethodSignature(material_input__material_number_validators.LowerBoundValidator, () => ({numberIsTooSmallMsg: dart.fnType(core.String, [core.String])}));
  dart.setFieldSignature(material_input__material_number_validators.LowerBoundValidator, () => ({
    __proto__: dart.getFields(material_input__material_number_validators.LowerBoundValidator.__proto__),
    [_numberFormat]: dart.finalFieldType(intl$.NumberFormat),
    lowerBound: dart.fieldType(core.num)
  }));
  let const$0;
  material_input__material_number_validators.UpperBoundValidator = class UpperBoundValidator extends core.Object {
    get upperBound() {
      return this[upperBound];
    }
    set upperBound(value) {
      this[upperBound] = value;
    }
    validate(control) {
      if (control.value == null) return null;
      if (!core.Comparable.is(control.value)) dart.assertFailed('Value needs to be Comparable');
      if (dart.dtest(dart.dsend(control.value, '>', this.upperBound))) {
        let upperText = this[_numberFormat].format(this.upperBound);
        return new (IdentityMapOfString$dynamic()).from(["upper-bound-number", material_input__material_number_validators.UpperBoundValidator.numberIsTooLargeMsg(upperText)]);
      }
      return null;
    }
    static numberIsTooLargeMsg(_upperBound) {
      return intl$.Intl.message(dart.str`Enter a number ${_upperBound} or smaller`, {name: 'UpperBoundValidator_numberIsTooLargeMsg', args: [_upperBound], desc: 'Error message when number input is too large.', examples: const$0 || (const$0 = dart.constMap(core.String, dart.dynamic, ['_upperBound', 42]))});
    }
  };
  (material_input__material_number_validators.UpperBoundValidator.new = function(format) {
    this[upperBound] = null;
    let l = format;
    this[_numberFormat] = l != null ? l : new intl$.NumberFormat.decimalPattern();
  }).prototype = material_input__material_number_validators.UpperBoundValidator.prototype;
  dart.addTypeTests(material_input__material_number_validators.UpperBoundValidator);
  const upperBound = Symbol("UpperBoundValidator.upperBound");
  material_input__material_number_validators.UpperBoundValidator[dart.implements] = () => [src__directives__validators.Validator];
  dart.setMethodSignature(material_input__material_number_validators.UpperBoundValidator, () => ({
    __proto__: dart.getMethods(material_input__material_number_validators.UpperBoundValidator.__proto__),
    validate: dart.fnType(core.Map$(core.String, dart.dynamic), [src__model.AbstractControl])
  }));
  dart.setStaticMethodSignature(material_input__material_number_validators.UpperBoundValidator, () => ({numberIsTooLargeMsg: dart.fnType(core.String, [core.String])}));
  dart.setFieldSignature(material_input__material_number_validators.UpperBoundValidator, () => ({
    __proto__: dart.getFields(material_input__material_number_validators.UpperBoundValidator.__proto__),
    [_numberFormat]: dart.finalFieldType(intl$.NumberFormat),
    upperBound: dart.fieldType(core.num)
  }));
  dart.trackLibraries("packages/angular_components/material_input/material_number_validators.ddc", {
    "package:angular_components/material_input/material_number_validators.dart": material_input__material_number_validators
  }, '{"version":3,"sourceRoot":"","sources":["material_number_validators.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAuBO;;;;;;aAGyB,OAAuB;AACnD,qBAAK,YAAO,KAAI,OAAO,MAAM,IAAI,MAC/B,MAAO;AACT,8BAAO,OAAO,MAAM,qBAAgB;AACpC,qBAAkB,WAAd,OAAO,MAAM,QAAI,KAAG;AACtB,cAAO,2CAAC,iBAA+B,EAAE,sFAAsB;;AAEjE,YAAO;IACT;;YAGI,WAAI,QAAQ,CAAC,wCACH;IAAmD;;;IAf5D,aAAO,GAAG;EAgBjB;;;;;;;;;;;;;;IAeO;;;;;;aAGyB,OAAuB;AACnD,qBAAK,YAAO,KAAI,OAAO,MAAM,IAAI,MAAM,MAAO;AAC9C,8BAAO,OAAO,MAAM,qBAAgB;AACpC,qBAAkB,WAAd,OAAO,MAAM,OAAG,KAAG;AACrB,cAAO,2CAAC,cAAkC,EAAE,wFAAmB;;AAEjE,YAAO;IACT;;YAGI,WAAI,QAAQ,CAAC,8CACH;IAAwD;;;IAdjE,cAAO,GAAG;EAejB;;;;;;;;;;;;;;;;IAoBM;;;;;;aAG0B,OAAuB;AACnD,UAAI,OAAO,MAAM,IAAI,QAAQ,eAAU,IAAI,MAAM,MAAO;AACxD,8BAAO,OAAO,MAAM,qBAAgB;AACpC,qBAAkB,WAAd,OAAO,MAAM,OAAG,eAAU,IAAE;AAC9B,YAAM,YAAY,mBAAa,OAAO,CAAC,eAAU;AACjD,cAAO,2CAAC,oBAA6B,EAAE,kFAAmB,CAAC,SAAS;;AAEtE,YAAO;IACT;+BAEkC,WAAkB;YAChD,WAAI,QAAQ,CAAC,0BAAiB,WAAW,sBAC/B,iDACA,CAAC,WAAW,SACZ,2DACI,8DAAO,eAAe;IAAI;;iFAvBxB,MAA+B;IAK/C,gBAAU;YAJQ,MAAM;IAAtB,mBAAa,mBAAa,IAAI,iCAA2B;EAAE;;;;;;;;;;;;;;;;IA2C7D;;;;;;aAG0B,OAAuB;AACnD,UAAI,OAAO,MAAM,IAAI,MAAM,MAAO;AAClC,8BAAO,OAAO,MAAM,qBAAgB;AACpC,qBAAkB,WAAd,OAAO,MAAM,OAAG,eAAU,IAAE;AAC9B,YAAM,YAAY,mBAAa,OAAO,CAAC,eAAU;AACjD,cAAO,2CAAC,oBAA6B,EAAE,kFAAmB,CAAC,SAAS;;AAEtE,YAAO;IACT;+BAEkC,WAAkB;YAChD,WAAI,QAAQ,CAAC,0BAAiB,WAAW,sBAC/B,iDACA,CAAC,WAAW,SACZ,2DACI,gEAAO,eAAe;IAAI;;iFAvBxB,MAA+B;IAK/C,gBAAU;YAJQ,MAAM;IAAtB,mBAAa,mBAAa,IAAI,iCAA2B;EAAE","file":"material_number_validators.ddc.js"}');
  // Exports:
  return {
    material_input__material_number_validators: material_input__material_number_validators
  };
});

//# sourceMappingURL=material_number_validators.ddc.js.map
