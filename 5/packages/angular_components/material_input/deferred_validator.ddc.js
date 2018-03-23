define(['dart_sdk', 'packages/angular_forms/src/directives/validators'], function(dart_sdk, validators) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model = validators.src__model;
  const src__validators = validators.src__validators;
  const _root = Object.create(null);
  const material_input__deferred_validator = Object.create(_root);
  const $contains = dartx.contains;
  const $add = dartx.add;
  const $remove = dartx.remove;
  const $length = dartx.length;
  const $single = dartx.single;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let AbstractControlToMapOfString$dynamic = () => (AbstractControlToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [src__model.AbstractControl])))();
  let JSArrayOfAbstractControlToMapOfString$dynamic = () => (JSArrayOfAbstractControlToMapOfString$dynamic = dart.constFn(_interceptors.JSArray$(AbstractControlToMapOfString$dynamic())))();
  let ListOfAbstractControlToMapOfString$dynamic = () => (ListOfAbstractControlToMapOfString$dynamic = dart.constFn(core.List$(AbstractControlToMapOfString$dynamic())))();
  material_input__deferred_validator._ValidatorFn = dart.typedef('_ValidatorFn', () => dart.fnType(core.Map$(core.String, dart.dynamic), [src__model.AbstractControl]));
  const _delegates = Symbol('_delegates');
  const _validator = Symbol('_validator');
  material_input__deferred_validator.DeferredValidator = class DeferredValidator extends core.Object {
    add(validation) {
      if (!!dart.test(this[_delegates][$contains](validation))) dart.assertFailed();
      this[_delegates][$add](validation);
      this[_validator] = null;
    }
    remove(validation) {
      if (!dart.test(this[_delegates][$contains](validation))) dart.assertFailed();
      this[_delegates][$remove](validation);
      this[_validator] = null;
    }
    call(control) {
      if (this[_validator] == null) {
        let numDelegates = this[_delegates][$length];
        if (numDelegates === 0) return null;
        this[_validator] = dart.notNull(numDelegates) > 1 ? src__validators.Validators.compose(this[_delegates]) : this[_delegates][$single];
      }
      return this[_validator](control);
    }
  };
  material_input__deferred_validator.DeferredValidator.prototype[dart._runtimeType] = material_input__deferred_validator.DeferredValidator;
  (material_input__deferred_validator.DeferredValidator.new = function callableClass() {
    if (typeof this !== "function") {
      function self(...args) {
        return self.call.apply(self, args);
      }
      self.__proto__ = this.__proto__;
      callableClass.call(self);
      return self;
    }
    this[_delegates] = JSArrayOfAbstractControlToMapOfString$dynamic().of([]);
    this[_validator] = null;
  }).prototype = material_input__deferred_validator.DeferredValidator.prototype;
  dart.addTypeTests(material_input__deferred_validator.DeferredValidator);
  dart.setMethodSignature(material_input__deferred_validator.DeferredValidator, () => ({
    __proto__: dart.getMethods(material_input__deferred_validator.DeferredValidator.__proto__),
    add: dart.fnType(dart.void, [AbstractControlToMapOfString$dynamic()]),
    remove: dart.fnType(dart.void, [AbstractControlToMapOfString$dynamic()]),
    call: dart.fnType(core.Map$(core.String, dart.dynamic), [src__model.AbstractControl])
  }));
  dart.setFieldSignature(material_input__deferred_validator.DeferredValidator, () => ({
    __proto__: dart.getFields(material_input__deferred_validator.DeferredValidator.__proto__),
    [_delegates]: dart.finalFieldType(ListOfAbstractControlToMapOfString$dynamic()),
    [_validator]: dart.fieldType(AbstractControlToMapOfString$dynamic())
  }));
  dart.trackLibraries("packages/angular_components/material_input/deferred_validator.ddc", {
    "package:angular_components/material_input/deferred_validator.dart": material_input__deferred_validator
  }, '{"version":3,"sourceRoot":"","sources":["deferred_validator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;QAsBW,UAAuB;AAE9B,WAAO,WAAC,gBAAU,WAAS,CAAC,UAAU;AACtC,sBAAU,MAAI,CAAC,UAAU;AACzB,sBAAU,GAAG;IACf;WAEY,UAAuB;AACjC,qBAAO,gBAAU,WAAS,CAAC,UAAU;AACrC,sBAAU,SAAO,CAAC,UAAU;AAC5B,sBAAU,GAAG;IACf;SAE0B,OAAuB;AAC/C,UAAI,gBAAU,IAAI,MAAM;AACtB,YAAM,eAAe,gBAAU,SAAO;AACtC,YAAI,YAAY,KAAI,GAAG,MAAO;AAI9B,wBAAU,GACN,AAAa,aAAb,YAAY,IAAG,IAAI,0BAAU,QAAQ,CAAC,gBAAU,IAAI,gBAAU,SAAO;;AAE3E,YAAO,iBAAU,CAAC,OAAO;IAC3B;;;;;;;;;;;;IA3ByB,gBAAU,GAAG;IACzB,gBAAU;EA2BzB","file":"deferred_validator.ddc.js"}');
  // Exports:
  return {
    material_input__deferred_validator: material_input__deferred_validator
  };
});

//# sourceMappingURL=deferred_validator.ddc.js.map
