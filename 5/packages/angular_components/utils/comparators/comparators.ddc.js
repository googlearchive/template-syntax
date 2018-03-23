define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const utils__comparators__comparators = Object.create(_root);
  const $compareTo = dartx.compareTo;
  const $runtimeType = dartx.runtimeType;
  const $_equals = dartx._equals;
  const _is_Comparators_default = Symbol('_is_Comparators_default');
  utils__comparators__comparators.Comparators$ = dart.generic(T => {
    let ComparableOfT = () => (ComparableOfT = dart.constFn(core.Comparable$(T)))();
    class Comparators extends core.Object {
      ['<'](other) {
        T._check(other);
        return dart.notNull(this[$compareTo](other)) < 0;
      }
      ['<='](other) {
        T._check(other);
        return dart.notNull(this[$compareTo](other)) <= 0;
      }
      ['>'](other) {
        T._check(other);
        return dart.notNull(this[$compareTo](other)) > 0;
      }
      ['>='](other) {
        T._check(other);
        return dart.notNull(this[$compareTo](other)) >= 0;
      }
      _equals(other) {
        if (other == null) return false;
        return T.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && this[$compareTo](other) === 0;
      }
    }
    (Comparators.new = function() {
    }).prototype = Comparators.prototype;
    dart.addTypeTests(Comparators);
    Comparators.prototype[_is_Comparators_default] = true;
    Comparators[dart.implements] = () => [ComparableOfT()];
    dart.setMethodSignature(Comparators, () => ({
      __proto__: dart.getMethods(Comparators.__proto__),
      '<': dart.fnType(core.bool, [core.Object]),
      '<=': dart.fnType(core.bool, [core.Object]),
      '>': dart.fnType(core.bool, [core.Object]),
      '>=': dart.fnType(core.bool, [core.Object]),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.defineExtensionMethods(Comparators, ['_equals']);
    return Comparators;
  });
  utils__comparators__comparators.Comparators = utils__comparators__comparators.Comparators$();
  dart.addTypeTests(utils__comparators__comparators.Comparators, _is_Comparators_default);
  const _is_ConstComparators_default = Symbol('_is_ConstComparators_default');
  utils__comparators__comparators.ConstComparators$ = dart.generic(T => {
    let ComparableOfT = () => (ComparableOfT = dart.constFn(core.Comparable$(T)))();
    class ConstComparators extends core.Object {
      ['<'](other) {
        T._check(other);
        return dart.notNull(this[$compareTo](other)) < 0;
      }
      ['<='](other) {
        T._check(other);
        return dart.notNull(this[$compareTo](other)) <= 0;
      }
      ['>'](other) {
        T._check(other);
        return dart.notNull(this[$compareTo](other)) > 0;
      }
      ['>='](other) {
        T._check(other);
        return dart.notNull(this[$compareTo](other)) >= 0;
      }
      _equals(other) {
        if (other == null) return false;
        return T.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && this[$compareTo](other) === 0;
      }
    }
    (ConstComparators.new = function() {
    }).prototype = ConstComparators.prototype;
    dart.addTypeTests(ConstComparators);
    ConstComparators.prototype[_is_ConstComparators_default] = true;
    ConstComparators[dart.implements] = () => [ComparableOfT()];
    dart.setMethodSignature(ConstComparators, () => ({
      __proto__: dart.getMethods(ConstComparators.__proto__),
      '<': dart.fnType(core.bool, [core.Object]),
      '<=': dart.fnType(core.bool, [core.Object]),
      '>': dart.fnType(core.bool, [core.Object]),
      '>=': dart.fnType(core.bool, [core.Object]),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.defineExtensionMethods(ConstComparators, ['_equals']);
    return ConstComparators;
  });
  utils__comparators__comparators.ConstComparators = utils__comparators__comparators.ConstComparators$();
  dart.addTypeTests(utils__comparators__comparators.ConstComparators, _is_ConstComparators_default);
  dart.trackLibraries("packages/angular_components/utils/comparators/comparators.ddc", {
    "package:angular_components/utils/comparators/comparators.dart": utils__comparators__comparators
  }, '{"version":3,"sourceRoot":"","sources":["comparators.dart"],"names":[],"mappings":";;;;;;;;;;;;;;YAOkB,KAAO;iBAAL;cAA2B,cAAjB,gBAAS,CAAC,KAAK,KAAI;MAAC;aAE/B,KAAO;iBAAL;cAA2B,cAAjB,gBAAS,CAAC,KAAK,MAAK;MAAC;YAElC,KAAO;iBAAL;cAA2B,cAAjB,gBAAS,CAAC,KAAK,KAAI;MAAC;aAE/B,KAAO;iBAAL;cAA2B,cAAjB,gBAAS,CAAC,KAAK,MAAK;MAAC;cAGjC,KAAK;YAAL,KAAK;cAC6B,MAA/C,KAAK,iBAAS,kBAAW,mBAAI,KAAK,MAAgB,gBAAS,CAAC,KAAK,MAAK;MAAC;;;IAC7E;;;;;;;;;;;;;;;;;;;;;;YAKkB,KAAO;iBAAL;cAA2B,cAAjB,gBAAS,CAAC,KAAK,KAAI;MAAC;aAE/B,KAAO;iBAAL;cAA2B,cAAjB,gBAAS,CAAC,KAAK,MAAK;MAAC;YAElC,KAAO;iBAAL;cAA2B,cAAjB,gBAAS,CAAC,KAAK,KAAI;MAAC;aAE/B,KAAO;iBAAL;cAA2B,cAAjB,gBAAS,CAAC,KAAK,MAAK;MAAC;cAGjC,KAAK;YAAL,KAAK;cAC6B,MAA/C,KAAK,iBAAS,kBAAW,mBAAI,KAAK,MAAgB,gBAAS,CAAC,KAAK,MAAK;MAAC;;;IAXnD","file":"comparators.ddc.js"}');
  // Exports:
  return {
    utils__comparators__comparators: utils__comparators__comparators
  };
});

//# sourceMappingURL=comparators.ddc.js.map
