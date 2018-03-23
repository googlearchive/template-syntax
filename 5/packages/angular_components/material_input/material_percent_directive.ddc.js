define(['dart_sdk', 'packages/intl/intl'], function(dart_sdk, intl) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const _root = Object.create(null);
  const material_input__material_percent_directive = Object.create(_root);
  const $keys = dartx.keys;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const _replaceErrorMessage = Symbol('_replaceErrorMessage');
  material_input__material_percent_directive.MaterialPercentInputDirective = class MaterialPercentInputDirective extends core.Object {
    [_replaceErrorMessage](errors) {
      let overrides = null;
      for (let key of material_input__material_percent_directive.MaterialPercentInputDirective._errorOverrides[$keys]) {
        if (dart.test(material_input__material_percent_directive.MaterialPercentInputDirective._errorOverrides[$containsKey](key))) {
          let t = overrides;
          t == null ? overrides = MapOfString$dynamic().from(errors) : t;
          dart.dsetindex(overrides, key, material_input__material_percent_directive.MaterialPercentInputDirective._errorOverrides[$_get](key));
        }
      }
      let result = overrides != null ? overrides : errors;
      return MapOfString$dynamic()._check(this.percentErrorRenderer != null ? dart.dcall(this.percentErrorRenderer, result) : result);
    }
    get percentErrorRenderer() {
      return this[percentErrorRenderer];
    }
    set percentErrorRenderer(value) {
      this[percentErrorRenderer] = value;
    }
    static get _negativePercentageErrMsg() {
      return intl$.Intl.message('Percentages must be positive', {desc: 'Validation error message when input precentage is negative, it ' + 'must be a positive number.'});
    }
    static get _percentTooSmallErrMsg() {
      return intl$.Intl.message('Enter a larger number', {desc: 'Validation error message for when the input percentage is too ' + 'small', meaning: 'Validation error message for when the input percentage is ' + 'too small'});
    }
    static get _percentTooLargeErrMsg() {
      return intl$.Intl.message('Enter a smaller number', {desc: 'Validation error message for when the input percentage is too ' + 'large', meaning: 'Validation error message for when the input percentage is ' + 'too large'});
    }
  };
  (material_input__material_percent_directive.MaterialPercentInputDirective.new = function(input, element) {
    this[percentErrorRenderer] = null;
    input.rightAlign = true;
    input.trailingText = '%';
    element.dir = 'ltr';
    input.errorRenderer = dart.bind(this, _replaceErrorMessage);
  }).prototype = material_input__material_percent_directive.MaterialPercentInputDirective.prototype;
  dart.addTypeTests(material_input__material_percent_directive.MaterialPercentInputDirective);
  const percentErrorRenderer = Symbol("MaterialPercentInputDirective.percentErrorRenderer");
  dart.setMethodSignature(material_input__material_percent_directive.MaterialPercentInputDirective, () => ({
    __proto__: dart.getMethods(material_input__material_percent_directive.MaterialPercentInputDirective.__proto__),
    [_replaceErrorMessage]: dart.fnType(core.Map$(core.String, dart.dynamic), [MapOfString$dynamic()])
  }));
  dart.setFieldSignature(material_input__material_percent_directive.MaterialPercentInputDirective, () => ({
    __proto__: dart.getFields(material_input__material_percent_directive.MaterialPercentInputDirective.__proto__),
    percentErrorRenderer: dart.fieldType(core.Function)
  }));
  dart.defineLazy(material_input__material_percent_directive.MaterialPercentInputDirective, {
    /*material_input__material_percent_directive.MaterialPercentInputDirective._errorOverrides*/get _errorOverrides() {
      return new (IdentityMapOfString$String()).from(["non-negative", material_input__material_percent_directive.MaterialPercentInputDirective._negativePercentageErrMsg, "lower-bound-number", material_input__material_percent_directive.MaterialPercentInputDirective._percentTooSmallErrMsg, "upper-bound-number", material_input__material_percent_directive.MaterialPercentInputDirective._percentTooLargeErrMsg]);
    },
    set _errorOverrides(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_input/material_percent_directive.ddc", {
    "package:angular_components/material_input/material_percent_directive.dart": material_input__material_percent_directive
  }, '{"version":3,"sourceRoot":"","sources":["material_percent_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;2BAoC4C,MAA2B;AACnE,UAAI;AACJ,eAAS,MAAO,yFAAe,OAAK,EAAE;AACpC,sBAAI,wFAAe,cAAY,CAAC,GAAG,IAAG;AACpC,2BAAS;sBAAT,SAAS,GAAK,AAAI,0BAAyB,CAAC,MAAM;AAClD,kCAAS,EAAC,GAAG,EAAI,wFAAe,QAAC,GAAG;;;AAGxC,UAAM,SAAS,SAAS,WAAT,SAAS,GAAI,MAAM;AAClC,0CAAO,AAAC,yBAAoB,IAAI,kBAC1B,yBAAoB,EAAC,MAAM,IAC3B,MAAM;IACd;IAQS;;;;;;;YAQsC,WAAI,QAAQ,CACvD,uCACM,oEACF;IAA6B;;YAGjC,WAAI,QAAQ,CAAC,gCACH,mEACF,kBACK,+DACL;IAAY;;YAGpB,WAAI,QAAQ,CAAC,iCACH,mEACF,kBACK,+DACL;IAAY;;2FArDpB,KAA4B,EAAE,OAAmB;IA4B5C,0BAAoB;AA3B3B,SAAK,WAAW,GAAG;AACnB,SAAK,aAAa,GAAG;AACrB,WAAO,IAAI,GAAG;AACd,SAAK,cAAc,GAAG,qCAAoB;EAC5C;;;;;;;;;;;;MAyB2B,wFAAe;YAAG,0CAC3C,cAAkC,EAAE,kGAAyB,EAC7D,oBAA6B,EAAE,+FAAsB,EACrD,oBAA6B,EAAE,+FAAsB","file":"material_percent_directive.ddc.js"}');
  // Exports:
  return {
    material_input__material_percent_directive: material_input__material_percent_directive
  };
});

//# sourceMappingURL=material_percent_directive.ddc.js.map
