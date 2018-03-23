define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const core$ = Object.create(_root);
  const $hashCode = dartx.hashCode;
  const $fold = dartx.fold;
  const $rightShift = dartx['>>'];
  const $iterator = dartx.iterator;
  const $_equals = dartx._equals;
  let dynamicAnddynamic__Todynamic = () => (dynamicAnddynamic__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic], [dart.dynamic, dart.dynamic])))();
  let intAnddynamicToint = () => (intAnddynamicToint = dart.constFn(dart.fnType(core.int, [core.int, dart.dynamic])))();
  let IterableToint = () => (IterableToint = dart.constFn(dart.fnType(core.int, [core.Iterable])))();
  let dynamicAnddynamicToint = () => (dynamicAnddynamicToint = dart.constFn(dart.fnType(core.int, [dart.dynamic, dart.dynamic])))();
  let dynamicAnddynamicAnddynamicToint = () => (dynamicAnddynamicAnddynamicToint = dart.constFn(dart.fnType(core.int, [dart.dynamic, dart.dynamic, dart.dynamic])))();
  let dynamicAnddynamicAnddynamic__Toint = () => (dynamicAnddynamicAnddynamic__Toint = dart.constFn(dart.fnType(core.int, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let intAndintToint = () => (intAndintToint = dart.constFn(dart.fnType(core.int, [core.int, core.int])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  core$.firstNonNull = function(o1, o2, o3, o4) {
    if (o3 === void 0) o3 = null;
    if (o4 === void 0) o4 = null;
    if (o1 != null) return o1;
    if (o2 != null) return o2;
    if (o3 != null) return o3;
    if (o4 != null) return o4;
    dart.throw(new core.ArgumentError.new('All arguments were null'));
  };
  dart.fn(core$.firstNonNull, dynamicAnddynamic__Todynamic());
  core$.hashObjects = function(objects) {
    return core$._finish(objects[$fold](core.int, 0, dart.fn((h, i) => core$._combine(h, dart.hashCode(i)), intAnddynamicToint())));
  };
  dart.fn(core$.hashObjects, IterableToint());
  core$.hash2 = function(a, b) {
    return core$._finish(core$._combine(core$._combine(0, dart.hashCode(a)), dart.hashCode(b)));
  };
  dart.fn(core$.hash2, dynamicAnddynamicToint());
  core$.hash3 = function(a, b, c) {
    return core$._finish(core$._combine(core$._combine(core$._combine(0, dart.hashCode(a)), dart.hashCode(b)), dart.hashCode(c)));
  };
  dart.fn(core$.hash3, dynamicAnddynamicAnddynamicToint());
  core$.hash4 = function(a, b, c, d) {
    return core$._finish(core$._combine(core$._combine(core$._combine(core$._combine(0, dart.hashCode(a)), dart.hashCode(b)), dart.hashCode(c)), dart.hashCode(d)));
  };
  dart.fn(core$.hash4, dynamicAnddynamicAnddynamic__Toint());
  core$._combine = function(hash, value) {
    hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
    hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
    return (dart.notNull(hash) ^ hash[$rightShift](6)) >>> 0;
  };
  dart.fn(core$._combine, intAndintToint());
  core$._finish = function(hash) {
    hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
    hash = (dart.notNull(hash) ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
  };
  dart.fn(core$._finish, intToint());
  const _value = Symbol('_value');
  const _is_Optional_default = Symbol('_is_Optional_default');
  core$.Optional$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let OptionalOfT = () => (OptionalOfT = dart.constFn(core$.Optional$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class Optional extends collection.IterableBase$(T) {
      get isPresent() {
        return this[_value] != null;
      }
      get value() {
        if (this[_value] == null) {
          dart.throw(new core.StateError.new('value called on absent Optional.'));
        }
        return this[_value];
      }
      ifPresent(ifPresent) {
        if (dart.test(this.isPresent)) {
          ifPresent(this[_value]);
        }
      }
      ifAbsent(ifAbsent) {
        if (!dart.test(this.isPresent)) {
          ifAbsent();
        }
      }
      or(defaultValue) {
        T._check(defaultValue);
        if (defaultValue == null) {
          dart.throw(new core.ArgumentError.new('defaultValue must not be null.'));
        }
        return this[_value] == null ? defaultValue : this[_value];
      }
      get orNull() {
        return this[_value];
      }
      transform(S, transformer) {
        return this[_value] == null ? new (core$.Optional$(S)).absent() : new (core$.Optional$(S)).of(transformer(this[_value]));
      }
      get iterator() {
        return dart.test(this.isPresent) ? JSArrayOfT().of([this[_value]])[$iterator] : IterableOfT().empty()[$iterator];
      }
      get hashCode() {
        return dart.hashCode(this[_value]);
      }
      _equals(o) {
        if (o == null) return false;
        return OptionalOfT().is(o) && dart.equals(o[_value], this[_value]);
      }
      toString() {
        return this[_value] == null ? 'Optional { absent }' : dart.str`Optional { value: ${this[_value]} }`;
      }
    }
    (Optional.absent = function() {
      this[_value] = null;
      Optional.__proto__.new.call(this);
    }).prototype = Optional.prototype;
    (Optional.of = function(value) {
      this[_value] = value;
      Optional.__proto__.new.call(this);
      if (this[_value] == null) dart.throw(new core.ArgumentError.new('Must not be null.'));
    }).prototype = Optional.prototype;
    (Optional.fromNullable = function(value) {
      this[_value] = value;
      Optional.__proto__.new.call(this);
    }).prototype = Optional.prototype;
    dart.addTypeTests(Optional);
    Optional.prototype[_is_Optional_default] = true;
    dart.setMethodSignature(Optional, () => ({
      __proto__: dart.getMethods(Optional.__proto__),
      ifPresent: dart.fnType(dart.void, [TTovoid()]),
      ifAbsent: dart.fnType(dart.void, [VoidTovoid()]),
      or: dart.fnType(T, [core.Object]),
      transform: dart.gFnType(S => [core$.Optional$(S), [dart.fnType(S, [T])]]),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.setGetterSignature(Optional, () => ({
      __proto__: dart.getGetters(Optional.__proto__),
      isPresent: dart.fnType(core.bool, []),
      value: dart.fnType(T, []),
      orNull: dart.fnType(T, []),
      iterator: dart.fnType(core.Iterator$(T), []),
      [$iterator]: dart.fnType(core.Iterator$(T), []),
      hashCode: dart.fnType(core.int, []),
      [$hashCode]: dart.fnType(core.int, [])
    }));
    dart.setFieldSignature(Optional, () => ({
      __proto__: dart.getFields(Optional.__proto__),
      [_value]: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(Optional, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Optional, ['iterator', 'hashCode']);
    return Optional;
  });
  core$.Optional = core$.Optional$();
  dart.addTypeTests(core$.Optional, _is_Optional_default);
  dart.trackLibraries("packages/quiver/core.ddc", {
    "package:quiver/core.dart": core$
  }, '{"version":3,"sourceRoot":"","sources":["core.dart","src/core/hash.dart","src/core/optional.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;gCA0Ba,EAAE,EAAE,EAAE,EAAG,EAAE,EAAE,EAAE;uBAAN;uBAAI;AACxB,QAAI,EAAE,IAAI,MAAM,MAAO,GAAE;AACzB,QAAI,EAAE,IAAI,MAAM,MAAO,GAAE;AACzB,QAAI,EAAE,IAAI,MAAM,MAAO,GAAE;AACzB,QAAI,EAAE,IAAI,MAAM,MAAO,GAAE;AACzB,eAAM,IAAI,sBAAa,CAAC;EAC1B;;+BCfgB,OAAgB;UAC5B,cAAO,CAAC,OAAO,OAAK,WAAC,GAAG,SAAC,CAAC,EAAE,CAAC,KAAK,cAAQ,CAAC,CAAC,gBAAE,CAAC;EAAY;;yBAGrD,CAAC,EAAE,CAAC;UAAK,cAAO,CAAC,cAAQ,CAAC,cAAQ,CAAC,iBAAG,CAAC,kBAAY,CAAC;EAAW;;yBAG/D,CAAC,EAAE,CAAC,EAAE,CAAC;UAAK,cAAO,CACzB,cAAQ,CAAC,cAAQ,CAAC,cAAQ,CAAC,iBAAG,CAAC,kBAAY,CAAC,kBAAY,CAAC;EAAW;;yBAG9D,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC;UAAK,cAAO,CAAC,cAAQ,CACrC,cAAQ,CAAC,cAAQ,CAAC,cAAQ,CAAC,iBAAG,CAAC,kBAAY,CAAC,kBAAY,CAAC,kBACzD,CAAC;EAAW;;4BAIH,IAAQ,EAAE,KAAS;AAC9B,QAAI,GAAG,AAAW,YAAQ,aAAL,IAAI,iBAAG,KAAK;AACjC,QAAI,GAAG,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,sBAAE,IAAI,MAAK;AACpD,UAAO,EAAK,aAAL,IAAI,IAAI,AAAK,IAAD,cAAI;EACzB;;2BAEY,IAAQ;AAClB,QAAI,GAAG,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,wBAAE,IAAI,MAAK;AACpD,QAAI,GAAG,CAAK,aAAL,IAAI,IAAI,AAAK,IAAD,cAAI;AACvB,UAAO,AAAW,aAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,qBAAE,IAAI,MAAK;EACtD;;;;;;;;;;;cCJwB,aAAM,IAAI;MAAI;;AAMlC,YAAI,YAAW,IAAI,MAAM;AACvB,qBAAM,IAAI,mBAAU,CAAC;;AAEvB,cAAO,aAAM;MACf;gBAGe,SAAuB;AACpC,sBAAI,cAAS,GAAE;AACb,mBAAS,CAAC,YAAM;;MAEpB;eAGc,QAAe;AAC3B,uBAAK,cAAS,GAAE;AACd,kBAAQ;;MAEZ;SAOK,YAAc;iBAAZ;AACL,YAAI,YAAY,IAAI,MAAM;AACxB,qBAAM,IAAI,sBAAa,CAAC;;AAE1B,cAAO,aAAM,IAAI,OAAO,YAAY,GAAG,YAAM;MAC/C;;cAGgB,aAAM;;mBAOG,WAAsB;AAC7C,cAAO,aAAM,IAAI,OACX,IAAI,2BAAe,KACnB,IAAI,uBAAW,CAAC,WAAW,CAAC,YAAM;MAC1C;;yBAII,cAAS,IAAG,iBAAI,YAAM,aAAU,GAAG,AAAI,mBAAiB,aAAW;;;6BAGnD,YAAM;MAAS;cAGlB,CAAC;YAAD,CAAC;cAAsB,kBAAjB,CAAC,iBAAmB,CAAC,QAAO,EAAI,YAAM;;;AAG3D,cAAO,aAAM,IAAI,OACX,wBACA,6BAAqB,YAAM;MACnC;;;MAjF0B,YAAM,GAAG;;IAAI;4BAK3B,KAAO;MAAS,YAAM,GAAG,KAAK;;AACxC,UAAI,YAAW,IAAI,MAAM,WAAM,IAAI,sBAAa,CAAC;IACnD;sCAK4B,KAAO;MAAS,YAAM,GAAG,KAAK","file":"core.ddc.js"}');
  // Exports:
  return {
    core: core$
  };
});

//# sourceMappingURL=core.ddc.js.map
