define(['dart_sdk', 'packages/quiver/core'], function(dart_sdk, core) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$0 = core.core;
  const _root = Object.create(null);
  const model__ui__display_name = Object.create(_root);
  const $hashCode = dartx.hashCode;
  const $toString = dartx.toString;
  const $_equals = dartx._equals;
  model__ui__display_name.HasUIDisplayName = class HasUIDisplayName extends core$.Object {};
  (model__ui__display_name.HasUIDisplayName.new = function() {
  }).prototype = model__ui__display_name.HasUIDisplayName.prototype;
  dart.addTypeTests(model__ui__display_name.HasUIDisplayName);
  const _is_LabeledValue_default = Symbol('_is_LabeledValue_default');
  model__ui__display_name.LabeledValue$ = dart.generic(T => {
    let LabeledValueOfT = () => (LabeledValueOfT = dart.constFn(model__ui__display_name.LabeledValue$(T)))();
    class LabeledValue extends core$.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get uiDisplayName() {
        return this[uiDisplayName$];
      }
      set uiDisplayName(value) {
        super.uiDisplayName = value;
      }
      static format(value, formatter) {
        return new (LabeledValueOfT()).new(value, formatter.format(value));
      }
      toString() {
        return this.uiDisplayName;
      }
      get hashCode() {
        return core$0.hash2(dart.hashCode(this.value), dart.hashCode(this.uiDisplayName));
      }
      _equals(o) {
        if (o == null) return false;
        return model__ui__display_name.LabeledValue.is(o) && o.uiDisplayName == this.uiDisplayName && dart.equals(o.value, this.value);
      }
    }
    (LabeledValue.new = function(value, uiDisplayName) {
      this[value$] = value;
      this[uiDisplayName$] = uiDisplayName;
    }).prototype = LabeledValue.prototype;
    dart.addTypeTests(LabeledValue);
    LabeledValue.prototype[_is_LabeledValue_default] = true;
    const value$ = Symbol("LabeledValue.value");
    const uiDisplayName$ = Symbol("LabeledValue.uiDisplayName");
    LabeledValue[dart.implements] = () => [model__ui__display_name.HasUIDisplayName];
    dart.setMethodSignature(LabeledValue, () => ({
      __proto__: dart.getMethods(LabeledValue.__proto__),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      _equals: dart.fnType(core$.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core$.bool, [dart.dynamic])
    }));
    dart.setGetterSignature(LabeledValue, () => ({
      __proto__: dart.getGetters(LabeledValue.__proto__),
      hashCode: dart.fnType(core$.int, []),
      [$hashCode]: dart.fnType(core$.int, [])
    }));
    dart.setFieldSignature(LabeledValue, () => ({
      __proto__: dart.getFields(LabeledValue.__proto__),
      value: dart.finalFieldType(T),
      uiDisplayName: dart.finalFieldType(core$.String)
    }));
    dart.defineExtensionMethods(LabeledValue, ['toString', '_equals']);
    dart.defineExtensionAccessors(LabeledValue, ['hashCode']);
    return LabeledValue;
  });
  model__ui__display_name.LabeledValue = model__ui__display_name.LabeledValue$();
  dart.addTypeTests(model__ui__display_name.LabeledValue, _is_LabeledValue_default);
  dart.trackLibraries("packages/angular_components/model/ui/display_name.ddc", {
    "package:angular_components/model/ui/display_name.dart": model__ui__display_name
  }, '{"version":3,"sourceRoot":"","sources":["display_name.dart"],"names":[],"mappings":";;;;;;;;;;;;;EAUA;;;;;;MAMU;;;;;;MAGK;;;;;;oBAMe,KAAO,EAAE,SAAmB;AAAE,cACtD,KAAI,uBAAY,CAAC,KAAK,EAAE,SAAS,OAAO,CAAC,KAAK;MAAE;;cAG/B,mBAAa;;;cAGd,aAAK,eAAC,UAAK,iBAAW,kBAAa;MAAU;cAGhD,CAAC;YAAD,CAAC;cACwC,yCAAtD,CAAC,KAAoB,CAAC,cAAc,IAAI,kBAAa,gBAAI,CAAC,MAAM,EAAI,UAAK;;;iCAf1D,KAAU,EAAE,aAAkB;MAAzB,YAAK,GAAL,KAAK;MAAO,oBAAa,GAAb,aAAa;IAAC","file":"display_name.ddc.js"}');
  // Exports:
  return {
    model__ui__display_name: model__ui__display_name
  };
});

//# sourceMappingURL=display_name.ddc.js.map
