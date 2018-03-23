define(['dart_sdk', 'packages/built_collection/src/iterable', 'packages/quiver/collection', 'packages/built_collection/src/internal/copy_on_write_map', 'packages/quiver/core'], function(dart_sdk, iterable, collection, copy_on_write_map, core) {
  'use strict';
  const core$ = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__set = iterable.src__set;
  const collection$ = collection.collection;
  const src__internal__copy_on_write_map = copy_on_write_map.src__internal__copy_on_write_map;
  const core$0 = core.core;
  const _root = Object.create(null);
  const src__set_multimap = Object.create(_root);
  const $_set = dartx._set;
  const $runtimeType = dartx.runtimeType;
  const $toList = dartx.toList;
  const $hashCode = dartx.hashCode;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $keys = dartx.keys;
  const $sort = dartx.sort;
  const $toString = dartx.toString;
  const $containsKey = dartx.containsKey;
  const $contains = dartx.contains;
  const $forEach = dartx.forEach;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $length = dartx.length;
  const $expand = dartx.expand;
  const $values = dartx.values;
  const $_equals = dartx._equals;
  const $remove = dartx.remove;
  const $clear = dartx.clear;
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let dynamicTodynamic$ = () => (dynamicTodynamic$ = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let dynamicTodynamic$0 = () => (dynamicTodynamic$0 = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  const _overridenHashCode = Symbol('_overridenHashCode');
  const _map = Symbol('_map');
  const _emptySet = Symbol('_emptySet');
  const _hashCode = Symbol('_hashCode');
  const _keys = Symbol('_keys');
  const _values = Symbol('_values');
  let const$;
  const _is_BuiltSetMultimap_default = Symbol('_is_BuiltSetMultimap_default');
  src__set_multimap.BuiltSetMultimap$ = dart.generic((K, V) => {
    let BuiltSetMultimapOfK$V = () => (BuiltSetMultimapOfK$V = dart.constFn(src__set_multimap.BuiltSetMultimap$(K, V)))();
    let _BuiltSetMultimapOfK$V = () => (_BuiltSetMultimapOfK$V = dart.constFn(src__set_multimap._BuiltSetMultimap$(K, V)))();
    let SetMultimapBuilderOfK$V = () => (SetMultimapBuilderOfK$V = dart.constFn(src__set_multimap.SetMultimapBuilder$(K, V)))();
    let CopyOnWriteMapOfK$BuiltSetOfV = () => (CopyOnWriteMapOfK$BuiltSetOfV = dart.constFn(src__internal__copy_on_write_map.CopyOnWriteMap$(K, BuiltSetOfV())))();
    let KToint = () => (KToint = dart.constFn(dart.fnType(core$.int, [K])))();
    let MapOfK$IterableOfV = () => (MapOfK$IterableOfV = dart.constFn(core$.Map$(K, IterableOfV())))();
    let KAndBuiltSetOfVToNull = () => (KAndBuiltSetOfVToNull = dart.constFn(dart.fnType(core$.Null, [K, BuiltSetOfV()])))();
    let SetMultimapBuilderOfK$VTodynamic = () => (SetMultimapBuilderOfK$VTodynamic = dart.constFn(dart.fnType(dart.dynamic, [SetMultimapBuilderOfK$V()])))();
    let KAndVTovoid = () => (KAndVTovoid = dart.constFn(dart.fnType(dart.void, [K, V])))();
    let KAndIterableOfVTovoid = () => (KAndIterableOfVTovoid = dart.constFn(dart.fnType(dart.void, [K, IterableOfV()])))();
    let MapOfK$BuiltSetOfV = () => (MapOfK$BuiltSetOfV = dart.constFn(core$.Map$(K, BuiltSetOfV())))();
    let IterableOfK = () => (IterableOfK = dart.constFn(core$.Iterable$(K)))();
    let BuiltSetOfV = () => (BuiltSetOfV = dart.constFn(src__set.BuiltSet$(V)))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core$.Iterable$(V)))();
    let VToNull = () => (VToNull = dart.constFn(dart.fnType(core$.Null, [V])))();
    let BuiltSetOfVToBuiltSetOfV = () => (BuiltSetOfVToBuiltSetOfV = dart.constFn(dart.fnType(BuiltSetOfV(), [BuiltSetOfV()])))();
    class BuiltSetMultimap extends core$.Object {
      static new(multimap) {
        if (multimap === void 0) multimap = const$ || (const$ = dart.constMap(dart.dynamic, dart.dynamic, []));
        if (src__set_multimap._BuiltSetMultimap.is(multimap) && dart.test(multimap.hasExactKeyAndValueTypes(dart.wrapType(K), dart.wrapType(V)))) {
          return BuiltSetMultimapOfK$V().as(multimap);
        } else if (core$.Map.is(multimap) || collection$.SetMultimap.is(multimap) || src__set_multimap.BuiltSetMultimap.is(multimap)) {
          return new (_BuiltSetMultimapOfK$V()).copyAndCheck(core$.Iterable._check(dart.dload(multimap, 'keys')), dart.fn(k => dart.dindex(multimap, k), dynamicTodynamic$()));
        } else {
          dart.throw(new core$.ArgumentError.new('expected Map, SetMultimap or BuiltSetMultimap, ' + dart.str`got ${dart.runtimeType(multimap)}`));
        }
      }
      static build(updates) {
        return (() => {
          let _ = SetMultimapBuilderOfK$V().new();
          _.update(updates);
          return _;
        })().build();
      }
      toBuilder() {
        return SetMultimapBuilderOfK$V().new(this);
      }
      rebuild(updates) {
        return (() => {
          let _ = this.toBuilder();
          _.update(updates);
          return _;
        })().build();
      }
      toMap() {
        return new (CopyOnWriteMapOfK$BuiltSetOfV()).new(this[_map]);
      }
      get hashCode() {
        if (this[_hashCode] == null) {
          this[_hashCode] = core$0.hashObjects((() => {
            let _ = this[_map][$keys][$map](core$.int, dart.fn(key => core$0.hash2(dart.hashCode(key), dart.hashCode(this[_map][$_get](key))), KToint()))[$toList]({growable: false});
            _[$sort]();
            return _;
          })());
        }
        return this[_hashCode];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__set_multimap.BuiltSetMultimap.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(dart.dindex(other, key), this._get(key))) return false;
        }
        return true;
      }
      asMap() {
        return MapOfK$IterableOfV().unmodifiable(this[_map]);
      }
      toString() {
        return dart.toString(this[_map]);
      }
      _get(key) {
        let result = this[_map][$_get](key);
        return result == null ? this[_emptySet] : result;
      }
      containsKey(key) {
        return this[_map][$containsKey](key);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      forEach(f) {
        this[_map][$forEach](dart.fn((key, values) => {
          values.forEach(dart.fn(value => {
            f(key, value);
          }, VToNull()));
        }, KAndBuiltSetOfVToNull()));
      }
      forEachKey(f) {
        this[_map][$forEach](dart.fn((key, values) => {
          f(key, values);
        }, KAndBuiltSetOfVToNull()));
      }
      get isEmpty() {
        return this[_map][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map][$isNotEmpty];
      }
      get keys() {
        if (this[_keys] == null) {
          this[_keys] = this[_map][$keys];
        }
        return this[_keys];
      }
      get length() {
        return this[_map][$length];
      }
      get values() {
        if (this[_values] == null) {
          this[_values] = this[_map][$values][$expand](V, dart.fn(x => x, BuiltSetOfVToBuiltSetOfV()));
        }
        return this[_values];
      }
    }
    (BuiltSetMultimap.__ = function(map) {
      this[_emptySet] = BuiltSetOfV().new();
      this[_hashCode] = null;
      this[_keys] = null;
      this[_values] = null;
      this[_map] = map;
      if (dart.equals(dart.wrapType(K), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new('explicit key type required, ' + 'for example "new BuiltSetMultimap<int, int>"'));
      }
      if (dart.equals(dart.wrapType(V), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new('explicit value type required,' + ' for example "new BuiltSetMultimap<int, int>"'));
      }
    }).prototype = BuiltSetMultimap.prototype;
    dart.addTypeTests(BuiltSetMultimap);
    BuiltSetMultimap.prototype[_is_BuiltSetMultimap_default] = true;
    dart.setMethodSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getMethods(BuiltSetMultimap.__proto__),
      toBuilder: dart.fnType(src__set_multimap.SetMultimapBuilder$(K, V), []),
      rebuild: dart.fnType(src__set_multimap.BuiltSetMultimap$(K, V), [SetMultimapBuilderOfK$VTodynamic()]),
      toMap: dart.fnType(core$.Map$(K, src__set.BuiltSet$(V)), []),
      _equals: dart.fnType(core$.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core$.bool, [dart.dynamic]),
      asMap: dart.fnType(core$.Map$(K, core$.Iterable$(V)), []),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      _get: dart.fnType(src__set.BuiltSet$(V), [core$.Object]),
      containsKey: dart.fnType(core$.bool, [core$.Object]),
      containsValue: dart.fnType(core$.bool, [core$.Object]),
      forEach: dart.fnType(dart.void, [KAndVTovoid()]),
      forEachKey: dart.fnType(dart.void, [KAndIterableOfVTovoid()])
    }));
    dart.setGetterSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getGetters(BuiltSetMultimap.__proto__),
      hashCode: dart.fnType(core$.int, []),
      [$hashCode]: dart.fnType(core$.int, []),
      isEmpty: dart.fnType(core$.bool, []),
      isNotEmpty: dart.fnType(core$.bool, []),
      keys: dart.fnType(core$.Iterable$(K), []),
      length: dart.fnType(core$.int, []),
      values: dart.fnType(core$.Iterable$(V), [])
    }));
    dart.setFieldSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getFields(BuiltSetMultimap.__proto__),
      [_map]: dart.finalFieldType(MapOfK$BuiltSetOfV()),
      [_emptySet]: dart.finalFieldType(BuiltSetOfV()),
      [_hashCode]: dart.fieldType(core$.int),
      [_keys]: dart.fieldType(IterableOfK()),
      [_values]: dart.fieldType(IterableOfV())
    }));
    dart.defineExtensionMethods(BuiltSetMultimap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltSetMultimap, ['hashCode']);
    return BuiltSetMultimap;
  });
  src__set_multimap.BuiltSetMultimap = src__set_multimap.BuiltSetMultimap$();
  dart.addTypeTests(src__set_multimap.BuiltSetMultimap, _is_BuiltSetMultimap_default);
  const _is__BuiltSetMultimap_default = Symbol('_is__BuiltSetMultimap_default');
  src__set_multimap._BuiltSetMultimap$ = dart.generic((K, V) => {
    let LinkedMapOfK$BuiltSetOfV = () => (LinkedMapOfK$BuiltSetOfV = dart.constFn(_js_helper.LinkedMap$(K, BuiltSetOfV())))();
    let BuiltSetOfV = () => (BuiltSetOfV = dart.constFn(src__set.BuiltSet$(V)))();
    class _BuiltSetMultimap extends src__set_multimap.BuiltSetMultimap$(K, V) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.equals(dart.wrapType(K), key) && dart.equals(dart.wrapType(V), value);
      }
    }
    (_BuiltSetMultimap.withSafeMap = function(map) {
      _BuiltSetMultimap.__proto__.__.call(this, map);
    }).prototype = _BuiltSetMultimap.prototype;
    (_BuiltSetMultimap.copyAndCheck = function(keys, lookup) {
      _BuiltSetMultimap.__proto__.__.call(this, new (LinkedMapOfK$BuiltSetOfV()).new());
      for (let key of keys) {
        if (K.is(key)) {
          this[_map][$_set](key, BuiltSetOfV().new(core$.Iterable._check(dart.dcall(lookup, key))));
        } else {
          dart.throw(new core$.ArgumentError.new(dart.str`map contained invalid key: ${key}`));
        }
      }
    }).prototype = _BuiltSetMultimap.prototype;
    dart.addTypeTests(_BuiltSetMultimap);
    _BuiltSetMultimap.prototype[_is__BuiltSetMultimap_default] = true;
    dart.setMethodSignature(_BuiltSetMultimap, () => ({
      __proto__: dart.getMethods(_BuiltSetMultimap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(core$.bool, [core$.Type, core$.Type])
    }));
    return _BuiltSetMultimap;
  });
  src__set_multimap._BuiltSetMultimap = src__set_multimap._BuiltSetMultimap$();
  dart.addTypeTests(src__set_multimap._BuiltSetMultimap, _is__BuiltSetMultimap_default);
  const _is_OverriddenHashcodeBuiltSetMultimap_default = Symbol('_is_OverriddenHashcodeBuiltSetMultimap_default');
  src__set_multimap.OverriddenHashcodeBuiltSetMultimap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltSetMultimap extends src__set_multimap._BuiltSetMultimap$(K, V) {
      get hashCode() {
        return this[_overridenHashCode];
      }
    }
    (OverriddenHashcodeBuiltSetMultimap.new = function(map, overridenHashCode) {
      this[_overridenHashCode] = overridenHashCode;
      OverriddenHashcodeBuiltSetMultimap.__proto__.copyAndCheck.call(this, core$.Iterable._check(dart.dload(map, 'keys')), dart.fn(k => dart.dindex(map, k), dynamicTodynamic()));
    }).prototype = OverriddenHashcodeBuiltSetMultimap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltSetMultimap);
    OverriddenHashcodeBuiltSetMultimap.prototype[_is_OverriddenHashcodeBuiltSetMultimap_default] = true;
    dart.setFieldSignature(OverriddenHashcodeBuiltSetMultimap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltSetMultimap.__proto__),
      [_overridenHashCode]: dart.finalFieldType(core$.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltSetMultimap, ['hashCode']);
    return OverriddenHashcodeBuiltSetMultimap;
  });
  src__set_multimap.OverriddenHashcodeBuiltSetMultimap = src__set_multimap.OverriddenHashcodeBuiltSetMultimap$();
  dart.addTypeTests(src__set_multimap.OverriddenHashcodeBuiltSetMultimap, _is_OverriddenHashcodeBuiltSetMultimap_default);
  const _builtMap = Symbol('_builtMap');
  const _builtMapOwner = Symbol('_builtMapOwner');
  const _builderMap = Symbol('_builderMap');
  const _checkGenericTypeParameter = Symbol('_checkGenericTypeParameter');
  let const$0;
  const _setOwner = Symbol('_setOwner');
  const _setWithCopyAndCheck = Symbol('_setWithCopyAndCheck');
  const _makeWriteableCopy = Symbol('_makeWriteableCopy');
  const _checkKey = Symbol('_checkKey');
  const _checkValue = Symbol('_checkValue');
  const _getValuesBuilder = Symbol('_getValuesBuilder');
  const _is_SetMultimapBuilder_default = Symbol('_is_SetMultimapBuilder_default');
  src__set_multimap.SetMultimapBuilder$ = dart.generic((K, V) => {
    let SetMultimapBuilderOfK$V = () => (SetMultimapBuilderOfK$V = dart.constFn(src__set_multimap.SetMultimapBuilder$(K, V)))();
    let _BuiltSetMultimapOfK$V = () => (_BuiltSetMultimapOfK$V = dart.constFn(src__set_multimap._BuiltSetMultimap$(K, V)))();
    let SetMultimapOfK$V = () => (SetMultimapOfK$V = dart.constFn(collection$.SetMultimap$(K, V)))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core$.Null, [K, V])))();
    let MapOfK$BuiltSetOfV = () => (MapOfK$BuiltSetOfV = dart.constFn(core$.Map$(K, BuiltSetOfV())))();
    let LinkedMapOfK$SetBuilderOfV = () => (LinkedMapOfK$SetBuilderOfV = dart.constFn(_js_helper.LinkedMap$(K, SetBuilderOfV())))();
    let LinkedMapOfK$BuiltSetOfV = () => (LinkedMapOfK$BuiltSetOfV = dart.constFn(_js_helper.LinkedMap$(K, BuiltSetOfV())))();
    let SetMultimapBuilderOfK$VTodynamic = () => (SetMultimapBuilderOfK$VTodynamic = dart.constFn(dart.fnType(dart.dynamic, [SetMultimapBuilderOfK$V()])))();
    let MapOfK$SetBuilderOfV = () => (MapOfK$SetBuilderOfV = dart.constFn(core$.Map$(K, SetBuilderOfV())))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core$.Iterable$(V)))();
    let VToNull = () => (VToNull = dart.constFn(dart.fnType(core$.Null, [V])))();
    let SetBuilderOfV = () => (SetBuilderOfV = dart.constFn(src__set.SetBuilder$(V)))();
    let BuiltSetOfV = () => (BuiltSetOfV = dart.constFn(src__set.BuiltSet$(V)))();
    class SetMultimapBuilder extends core$.Object {
      static new(multimap) {
        if (multimap === void 0) multimap = const$0 || (const$0 = dart.constMap(dart.dynamic, dart.dynamic, []));
        let _ = new (SetMultimapBuilderOfK$V())._uninitialized();
        _.replace(multimap);
        return _;
      }
      build() {
        if (this[_builtMapOwner] == null) {
          for (let key of this[_builderMap][$keys]) {
            let builtSet = this[_builderMap][$_get](key).build();
            if (dart.test(builtSet.isEmpty)) {
              this[_builtMap][$remove](key);
            } else {
              this[_builtMap][$_set](key, builtSet);
            }
          }
          this[_builtMapOwner] = new (_BuiltSetMultimapOfK$V()).withSafeMap(this[_builtMap]);
        }
        return this[_builtMapOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(multimap) {
        if (_BuiltSetMultimapOfK$V().is(multimap)) {
          this[_setOwner](multimap);
        } else if (core$.Map.is(multimap) || collection$.SetMultimap.is(multimap) || src__set_multimap.BuiltSetMultimap.is(multimap)) {
          this[_setWithCopyAndCheck](core$.Iterable._check(dart.dload(multimap, 'keys')), dart.fn(k => dart.dindex(multimap, k), dynamicTodynamic$0()));
        } else {
          dart.throw(new core$.ArgumentError.new('expected Map, SetMultimap or BuiltSetMultimap, ' + dart.str`got ${dart.runtimeType(multimap)}`));
        }
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.fnType(K, [T])._check(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.fnType(V, [T])._check(value);
        let values = opts && 'values' in opts ? opts.values : null;
        dart.fnType(IterableOfV(), [T])._check(values);
        if (value != null && values != null) {
          dart.throw(new core$.ArgumentError.new('expected value or values to be set, got both'));
        }
        if (key == null) key = dart.fn(x => K.as(x), dart.fnType(K, [T]));
        if (values != null) {
          for (let element of iterable) {
            this.addValues(key(element), values(element));
          }
        } else {
          if (value == null) value = dart.fn(x => V.as(x), dart.fnType(V, [T]));
          for (let element of iterable) {
            this.add(key(element), value(element));
          }
        }
      }
      add(key, value) {
        K._check(key);
        V._check(value);
        this[_makeWriteableCopy]();
        this[_checkKey](key);
        this[_checkValue](value);
        this[_getValuesBuilder](key).add(value);
      }
      addValues(key, values) {
        K._check(key);
        IterableOfV()._check(values);
        values[$forEach](dart.fn(value => {
          this.add(key, value);
        }, VToNull()));
      }
      addAll(other) {
        SetMultimapOfK$V()._check(other);
        other.forEach(dart.fn((key, value) => {
          this.add(key, value);
        }, KAndVToNull()));
      }
      remove(key, value) {
        V._check(value);
        if (K.is(key)) {
          this[_makeWriteableCopy]();
          this[_getValuesBuilder](key).remove(value);
        }
      }
      removeAll(key) {
        if (K.is(key)) {
          this[_makeWriteableCopy]();
          this[_builtMap] = this[_builtMap];
          this[_builderMap][$_set](key, SetBuilderOfV().new());
        }
      }
      clear() {
        this[_makeWriteableCopy]();
        this[_builtMap][$clear]();
        this[_builderMap][$clear]();
      }
      [_getValuesBuilder](key) {
        K._check(key);
        let result = this[_builderMap][$_get](key);
        if (result == null) {
          let builtValues = this[_builtMap][$_get](key);
          if (builtValues == null) {
            result = SetBuilderOfV().new();
          } else {
            result = builtValues.toBuilder();
          }
          this[_builderMap][$_set](key, result);
        }
        return result;
      }
      [_makeWriteableCopy]() {
        if (this[_builtMapOwner] != null) {
          this[_builtMap] = MapOfK$BuiltSetOfV().from(this[_builtMap]);
          this[_builtMapOwner] = null;
        }
      }
      [_setOwner](builtSetMultimap) {
        _BuiltSetMultimapOfK$V()._check(builtSetMultimap);
        this[_builtMapOwner] = builtSetMultimap;
        this[_builtMap] = builtSetMultimap[_map];
        this[_builderMap] = new (LinkedMapOfK$SetBuilderOfV()).new();
      }
      [_setWithCopyAndCheck](keys, lookup) {
        this[_builtMapOwner] = null;
        this[_builtMap] = new (LinkedMapOfK$BuiltSetOfV()).new();
        this[_builderMap] = new (LinkedMapOfK$SetBuilderOfV()).new();
        for (let key of keys) {
          if (K.is(key)) {
            for (let value of core$.Iterable._check(dart.dcall(lookup, key))) {
              if (V.is(value)) {
                this.add(key, value);
              } else {
                dart.throw(new core$.ArgumentError.new(dart.str`map contained invalid value: ${value}, for key ${key}`));
              }
            }
          } else {
            dart.throw(new core$.ArgumentError.new(dart.str`map contained invalid key: ${key}`));
          }
        }
      }
      [_checkGenericTypeParameter]() {
        if (dart.equals(dart.wrapType(K), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new('explicit key type required, ' + 'for example "new SetMultimapBuilder<int, int>"'));
        }
        if (dart.equals(dart.wrapType(V), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new('explicit value type required, ' + 'for example "new SetMultimapBuilder<int, int>"'));
        }
      }
      [_checkKey](key) {
        K._check(key);
        if (key == null) {
          dart.throw(new core$.ArgumentError.new(dart.str`invalid key: ${key}`));
        }
      }
      [_checkValue](value) {
        V._check(value);
        if (value == null) {
          dart.throw(new core$.ArgumentError.new(dart.str`invalid value: ${value}`));
        }
      }
    }
    (SetMultimapBuilder._uninitialized = function() {
      this[_builtMap] = null;
      this[_builtMapOwner] = null;
      this[_builderMap] = null;
      this[_checkGenericTypeParameter]();
    }).prototype = SetMultimapBuilder.prototype;
    dart.addTypeTests(SetMultimapBuilder);
    SetMultimapBuilder.prototype[_is_SetMultimapBuilder_default] = true;
    dart.setMethodSignature(SetMultimapBuilder, () => ({
      __proto__: dart.getMethods(SetMultimapBuilder.__proto__),
      build: dart.fnType(src__set_multimap.BuiltSetMultimap$(K, V), []),
      update: dart.fnType(dart.void, [SetMultimapBuilderOfK$VTodynamic()]),
      replace: dart.fnType(dart.void, [dart.dynamic]),
      addIterable: dart.gFnType(T => [dart.void, [core$.Iterable$(T)], {key: core$.Object, value: core$.Object, values: core$.Object}]),
      add: dart.fnType(dart.void, [core$.Object, core$.Object]),
      addValues: dart.fnType(dart.void, [core$.Object, core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      remove: dart.fnType(dart.void, [core$.Object, core$.Object]),
      removeAll: dart.fnType(dart.void, [core$.Object]),
      clear: dart.fnType(dart.void, []),
      [_getValuesBuilder]: dart.fnType(src__set.SetBuilder$(V), [core$.Object]),
      [_makeWriteableCopy]: dart.fnType(dart.void, []),
      [_setOwner]: dart.fnType(dart.void, [core$.Object]),
      [_setWithCopyAndCheck]: dart.fnType(dart.void, [core$.Iterable, core$.Function]),
      [_checkGenericTypeParameter]: dart.fnType(dart.void, []),
      [_checkKey]: dart.fnType(dart.void, [core$.Object]),
      [_checkValue]: dart.fnType(dart.void, [core$.Object])
    }));
    dart.setFieldSignature(SetMultimapBuilder, () => ({
      __proto__: dart.getFields(SetMultimapBuilder.__proto__),
      [_builtMap]: dart.fieldType(MapOfK$BuiltSetOfV()),
      [_builtMapOwner]: dart.fieldType(_BuiltSetMultimapOfK$V()),
      [_builderMap]: dart.fieldType(MapOfK$SetBuilderOfV())
    }));
    return SetMultimapBuilder;
  });
  src__set_multimap.SetMultimapBuilder = src__set_multimap.SetMultimapBuilder$();
  dart.addTypeTests(src__set_multimap.SetMultimapBuilder, _is_SetMultimapBuilder_default);
  dart.trackLibraries("packages/built_collection/src/set_multimap.ddc", {
    "package:built_collection/src/set_multimap.dart": src__set_multimap
  }, '{"version":3,"sourceRoot":"","sources":["set_multimap/built_set_multimap.dart","set_multimap.dart","set_multimap/set_multimap_builder.dart"],"names":[],"mappings":"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","file":"set_multimap.ddc.js"}');
  // Exports:
  return {
    src__set_multimap: src__set_multimap
  };
});

//# sourceMappingURL=set_multimap.ddc.js.map
