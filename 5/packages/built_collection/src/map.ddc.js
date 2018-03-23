define(['dart_sdk', 'packages/built_collection/src/internal/copy_on_write_map', 'packages/quiver/core'], function(dart_sdk, copy_on_write_map, core) {
  'use strict';
  const core$ = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__internal__copy_on_write_map = copy_on_write_map.src__internal__copy_on_write_map;
  const core$0 = core.core;
  const _root = Object.create(null);
  const src__map = Object.create(_root);
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
  const $containsValue = dartx.containsValue;
  const $forEach = dartx.forEach;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $length = dartx.length;
  const $values = dartx.values;
  const $_equals = dartx._equals;
  const $addAll = dartx.addAll;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  const $clear = dartx.clear;
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let dynamicTodynamic$ = () => (dynamicTodynamic$ = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let ObjectAndObjectToNull = () => (ObjectAndObjectToNull = dart.constFn(dart.fnType(core$.Null, [core$.Object, core$.Object])))();
  const _overrridenHashCode = Symbol('_overrridenHashCode');
  const _map = Symbol('_map');
  const _mapFactory = Symbol('_mapFactory');
  const _hashCode = Symbol('_hashCode');
  const _keys = Symbol('_keys');
  const _values = Symbol('_values');
  let const$;
  const _is_BuiltMap_default = Symbol('_is_BuiltMap_default');
  src__map.BuiltMap$ = dart.generic((K, V) => {
    let BuiltMapOfK$V = () => (BuiltMapOfK$V = dart.constFn(src__map.BuiltMap$(K, V)))();
    let _BuiltMapOfK$V = () => (_BuiltMapOfK$V = dart.constFn(src__map._BuiltMap$(K, V)))();
    let MapBuilderOfK$V = () => (MapBuilderOfK$V = dart.constFn(src__map.MapBuilder$(K, V)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core$.Map$(K, V)))();
    let CopyOnWriteMapOfK$V = () => (CopyOnWriteMapOfK$V = dart.constFn(src__internal__copy_on_write_map.CopyOnWriteMap$(K, V)))();
    let KToint = () => (KToint = dart.constFn(dart.fnType(core$.int, [K])))();
    let MapBuilderOfK$VTodynamic = () => (MapBuilderOfK$VTodynamic = dart.constFn(dart.fnType(dart.dynamic, [MapBuilderOfK$V()])))();
    let KAndVTovoid = () => (KAndVTovoid = dart.constFn(dart.fnType(dart.void, [K, V])))();
    let VoidToMapOfK$V = () => (VoidToMapOfK$V = dart.constFn(dart.fnType(MapOfK$V(), [])))();
    let IterableOfK = () => (IterableOfK = dart.constFn(core$.Iterable$(K)))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core$.Iterable$(V)))();
    class BuiltMap extends core$.Object {
      static new(map) {
        if (map === void 0) map = const$ || (const$ = dart.constMap(dart.dynamic, dart.dynamic, []));
        if (src__map._BuiltMap.is(map) && dart.test(map.hasExactKeyAndValueTypes(dart.wrapType(K), dart.wrapType(V)))) {
          return BuiltMapOfK$V().as(map);
        } else if (core$.Map.is(map) || src__map.BuiltMap.is(map)) {
          return new (_BuiltMapOfK$V()).copyAndCheck(core$.Iterable._check(dart.dload(map, 'keys')), dart.fn(k => dart.dindex(map, k), dynamicTodynamic$()));
        } else {
          dart.throw(new core$.ArgumentError.new(dart.str`expected Map or BuiltMap, got ${dart.runtimeType(map)}`));
        }
      }
      static build(updates) {
        return (() => {
          let _ = MapBuilderOfK$V().new();
          _.update(updates);
          return _;
        })().build();
      }
      toBuilder() {
        return new (MapBuilderOfK$V())._fromBuiltMap(_BuiltMapOfK$V()._check(this));
      }
      rebuild(updates) {
        return (() => {
          let _ = this.toBuilder();
          _.update(updates);
          return _;
        })().build();
      }
      asMap() {
        return MapOfK$V().unmodifiable(this[_map]);
      }
      toMap() {
        return new (CopyOnWriteMapOfK$V()).new(this[_map], this[_mapFactory]);
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
        if (!src__map.BuiltMap.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(dart.dindex(other, key), this._get(key))) return false;
        }
        return true;
      }
      toString() {
        return dart.toString(this[_map]);
      }
      _get(key) {
        return this[_map][$_get](key);
      }
      containsKey(key) {
        return this[_map][$containsKey](key);
      }
      containsValue(value) {
        return this[_map][$containsValue](value);
      }
      forEach(f) {
        this[_map][$forEach](f);
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
          this[_values] = this[_map][$values];
        }
        return this[_values];
      }
    }
    (BuiltMap.__ = function(mapFactory, map) {
      this[_hashCode] = null;
      this[_keys] = null;
      this[_values] = null;
      this[_mapFactory] = mapFactory;
      this[_map] = map;
      if (dart.equals(dart.wrapType(K), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new('explicit key type required, for example "new BuiltMap<int, int>"'));
      }
      if (dart.equals(dart.wrapType(V), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new('explicit value type required,' + ' for example "new BuiltMap<int, int>"'));
      }
    }).prototype = BuiltMap.prototype;
    dart.addTypeTests(BuiltMap);
    BuiltMap.prototype[_is_BuiltMap_default] = true;
    dart.setMethodSignature(BuiltMap, () => ({
      __proto__: dart.getMethods(BuiltMap.__proto__),
      toBuilder: dart.fnType(src__map.MapBuilder$(K, V), []),
      rebuild: dart.fnType(src__map.BuiltMap$(K, V), [MapBuilderOfK$VTodynamic()]),
      asMap: dart.fnType(core$.Map$(K, V), []),
      toMap: dart.fnType(core$.Map$(K, V), []),
      _equals: dart.fnType(core$.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core$.bool, [dart.dynamic]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      _get: dart.fnType(V, [core$.Object]),
      containsKey: dart.fnType(core$.bool, [core$.Object]),
      containsValue: dart.fnType(core$.bool, [core$.Object]),
      forEach: dart.fnType(dart.void, [KAndVTovoid()])
    }));
    dart.setGetterSignature(BuiltMap, () => ({
      __proto__: dart.getGetters(BuiltMap.__proto__),
      hashCode: dart.fnType(core$.int, []),
      [$hashCode]: dart.fnType(core$.int, []),
      isEmpty: dart.fnType(core$.bool, []),
      isNotEmpty: dart.fnType(core$.bool, []),
      keys: dart.fnType(core$.Iterable$(K), []),
      length: dart.fnType(core$.int, []),
      values: dart.fnType(core$.Iterable$(V), [])
    }));
    dart.setFieldSignature(BuiltMap, () => ({
      __proto__: dart.getFields(BuiltMap.__proto__),
      [_mapFactory]: dart.finalFieldType(VoidToMapOfK$V()),
      [_map]: dart.finalFieldType(MapOfK$V()),
      [_hashCode]: dart.fieldType(core$.int),
      [_keys]: dart.fieldType(IterableOfK()),
      [_values]: dart.fieldType(IterableOfV())
    }));
    dart.defineExtensionMethods(BuiltMap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltMap, ['hashCode']);
    return BuiltMap;
  });
  src__map.BuiltMap = src__map.BuiltMap$();
  dart.addTypeTests(src__map.BuiltMap, _is_BuiltMap_default);
  const _is__BuiltMap_default = Symbol('_is__BuiltMap_default');
  src__map._BuiltMap$ = dart.generic((K, V) => {
    let LinkedMapOfK$V = () => (LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    class _BuiltMap extends src__map.BuiltMap$(K, V) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.equals(dart.wrapType(K), key) && dart.equals(dart.wrapType(V), value);
      }
    }
    (_BuiltMap.withSafeMap = function(mapFactory, map) {
      _BuiltMap.__proto__.__.call(this, mapFactory, map);
    }).prototype = _BuiltMap.prototype;
    (_BuiltMap.copyAndCheck = function(keys, lookup) {
      _BuiltMap.__proto__.__.call(this, null, new (LinkedMapOfK$V()).new());
      for (let key of keys) {
        if (K.is(key)) {
          let value = dart.dcall(lookup, key);
          if (V.is(value)) {
            this[_map][$_set](key, value);
          } else {
            dart.throw(new core$.ArgumentError.new(dart.str`map contained invalid value: ${value}`));
          }
        } else {
          dart.throw(new core$.ArgumentError.new(dart.str`map contained invalid key: ${key}`));
        }
      }
    }).prototype = _BuiltMap.prototype;
    dart.addTypeTests(_BuiltMap);
    _BuiltMap.prototype[_is__BuiltMap_default] = true;
    dart.setMethodSignature(_BuiltMap, () => ({
      __proto__: dart.getMethods(_BuiltMap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(core$.bool, [core$.Type, core$.Type])
    }));
    return _BuiltMap;
  });
  src__map._BuiltMap = src__map._BuiltMap$();
  dart.addTypeTests(src__map._BuiltMap, _is__BuiltMap_default);
  const _is_OverriddenHashcodeBuiltMap_default = Symbol('_is_OverriddenHashcodeBuiltMap_default');
  src__map.OverriddenHashcodeBuiltMap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltMap extends src__map._BuiltMap$(K, V) {
      get hashCode() {
        return this[_overrridenHashCode];
      }
    }
    (OverriddenHashcodeBuiltMap.new = function(map, overrridenHashCode) {
      this[_overrridenHashCode] = overrridenHashCode;
      OverriddenHashcodeBuiltMap.__proto__.copyAndCheck.call(this, core$.Iterable._check(dart.dload(map, 'keys')), dart.fn(k => dart.dindex(map, k), dynamicTodynamic()));
    }).prototype = OverriddenHashcodeBuiltMap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltMap);
    OverriddenHashcodeBuiltMap.prototype[_is_OverriddenHashcodeBuiltMap_default] = true;
    dart.setFieldSignature(OverriddenHashcodeBuiltMap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltMap.__proto__),
      [_overrridenHashCode]: dart.finalFieldType(core$.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltMap, ['hashCode']);
    return OverriddenHashcodeBuiltMap;
  });
  src__map.OverriddenHashcodeBuiltMap = src__map.OverriddenHashcodeBuiltMap$();
  dart.addTypeTests(src__map.OverriddenHashcodeBuiltMap, _is_OverriddenHashcodeBuiltMap_default);
  src__map._MapFactory$ = dart.generic((K, V) => {
    const _MapFactory = dart.typedef('_MapFactory', () => dart.fnType(core$.Map$(K, V), []));
    return _MapFactory;
  });
  src__map._MapFactory = src__map._MapFactory$();
  const _mapOwner = Symbol('_mapOwner');
  const _checkGenericTypeParameter = Symbol('_checkGenericTypeParameter');
  let const$0;
  const _setOwner = Symbol('_setOwner');
  const _createMap = Symbol('_createMap');
  const _setSafeMap = Symbol('_setSafeMap');
  const _checkKey = Symbol('_checkKey');
  const _checkValue = Symbol('_checkValue');
  const _safeMap = Symbol('_safeMap');
  const _checkKeys = Symbol('_checkKeys');
  const _checkValues = Symbol('_checkValues');
  const _is_MapBuilder_default = Symbol('_is_MapBuilder_default');
  src__map.MapBuilder$ = dart.generic((K, V) => {
    let MapBuilderOfK$V = () => (MapBuilderOfK$V = dart.constFn(src__map.MapBuilder$(K, V)))();
    let _BuiltMapOfK$V = () => (_BuiltMapOfK$V = dart.constFn(src__map._BuiltMap$(K, V)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core$.Map$(K, V)))();
    let VoidToMapOfK$V = () => (VoidToMapOfK$V = dart.constFn(dart.fnType(MapOfK$V(), [])))();
    let LinkedMapOfK$V = () => (LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    let MapBuilderOfK$VTodynamic = () => (MapBuilderOfK$VTodynamic = dart.constFn(dart.fnType(dart.dynamic, [MapBuilderOfK$V()])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    class MapBuilder extends core$.Object {
      static new(map) {
        if (map === void 0) map = const$0 || (const$0 = dart.constMap(dart.dynamic, dart.dynamic, []));
        let _ = new (MapBuilderOfK$V())._uninitialized();
        _.replace(map);
        return _;
      }
      build() {
        if (this[_mapOwner] == null) {
          this[_mapOwner] = new (_BuiltMapOfK$V()).withSafeMap(this[_mapFactory], this[_map]);
        }
        return this[_mapOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(map) {
        if (_BuiltMapOfK$V().is(map) && dart.equals(map[_mapFactory], this[_mapFactory])) {
          this[_setOwner](map);
        } else if (src__map.BuiltMap.is(map)) {
          let replacement = this[_createMap]();
          map.forEach(dart.fn((key, value) => {
            replacement[$_set](K.as(key), V.as(value));
          }, ObjectAndObjectToNull()));
          this[_setSafeMap](replacement);
        } else if (core$.Map.is(map)) {
          let replacement = this[_createMap]();
          map[$forEach](dart.fn((key, value) => {
            replacement[$_set](K.as(key), V.as(value));
          }, ObjectAndObjectToNull()));
          this[_setSafeMap](replacement);
        } else {
          dart.throw(new core$.ArgumentError.new(dart.str`expected Map or BuiltMap, got ${dart.runtimeType(map)}`));
        }
      }
      withBase(base) {
        VoidToMapOfK$V()._check(base);
        if (base == null) {
          dart.throw(new core$.ArgumentError.notNull('base'));
        }
        this[_mapFactory] = base;
        this[_setSafeMap]((() => {
          let _ = this[_createMap]();
          _[$addAll](this[_map]);
          return _;
        })());
      }
      withDefaultBase() {
        this[_mapFactory] = null;
        this[_setSafeMap]((() => {
          let _ = this[_createMap]();
          _[$addAll](this[_map]);
          return _;
        })());
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.fnType(K, [T])._check(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.fnType(V, [T])._check(value);
        if (key == null) key = dart.fn(x => K.as(x), dart.fnType(K, [T]));
        if (value == null) value = dart.fn(x => V.as(x), dart.fnType(V, [T]));
        for (let element of iterable) {
          this._set(key(element), value(element));
        }
      }
      _get(key) {
        return this[_map][$_get](key);
      }
      _set(key, value) {
        K._check(key);
        V._check(value);
        this[_checkKey](key);
        this[_checkValue](value);
        this[_safeMap][$_set](key, value);
        return value;
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        this[_checkKey](key);
        this[_safeMap][$putIfAbsent](key, dart.fn(() => {
          let value = ifAbsent();
          this[_checkValue](value);
          return value;
        }, VoidToV()));
      }
      addAll(other) {
        MapOfK$V()._check(other);
        this[_checkKeys](other[$keys]);
        this[_checkValues](other[$values]);
        this[_safeMap][$addAll](other);
      }
      remove(key) {
        this[_safeMap][$remove](key);
      }
      clear() {
        this[_safeMap][$clear]();
      }
      [_setOwner](mapOwner) {
        _BuiltMapOfK$V()._check(mapOwner);
        if (!dart.equals(mapOwner[_mapFactory], this[_mapFactory])) dart.assertFailed("Can't reuse a built map that uses a different base");
        this[_mapOwner] = mapOwner;
        this[_map] = mapOwner[_map];
      }
      [_setSafeMap](map) {
        MapOfK$V()._check(map);
        this[_mapOwner] = null;
        this[_map] = map;
      }
      get [_safeMap]() {
        if (this[_mapOwner] != null) {
          let _ = this[_createMap]();
          _[$addAll](this[_map]);
          this[_map] = _;
          this[_mapOwner] = null;
        }
        return this[_map];
      }
      [_createMap]() {
        return this[_mapFactory] != null ? this[_mapFactory]() : new (LinkedMapOfK$V()).new();
      }
      [_checkGenericTypeParameter]() {
        if (dart.equals(dart.wrapType(K), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new('explicit key type required, for example "new MapBuilder<int, int>"'));
        }
        if (dart.equals(dart.wrapType(V), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new('explicit value type required, ' + 'for example "new MapBuilder<int, int>"'));
        }
      }
      [_checkKey](key) {
        K._check(key);
        if (key == null) {
          dart.throw(new core$.ArgumentError.new('null key'));
        }
      }
      [_checkKeys](keys) {
        for (let key of keys) {
          if (!K.is(key)) {
            dart.throw(new core$.ArgumentError.new(dart.str`invalid key: ${key}`));
          }
        }
      }
      [_checkValue](value) {
        V._check(value);
        if (value == null) {
          dart.throw(new core$.ArgumentError.new('null value'));
        }
      }
      [_checkValues](values) {
        for (let value of values) {
          if (!V.is(value)) {
            dart.throw(new core$.ArgumentError.new(dart.str`invalid value: ${value}`));
          }
        }
      }
    }
    (MapBuilder._uninitialized = function() {
      this[_mapFactory] = null;
      this[_map] = null;
      this[_mapOwner] = null;
      this[_checkGenericTypeParameter]();
    }).prototype = MapBuilder.prototype;
    (MapBuilder._fromBuiltMap = function(map) {
      this[_mapFactory] = map[_mapFactory];
      this[_map] = map[_map];
      this[_mapOwner] = map;
    }).prototype = MapBuilder.prototype;
    dart.addTypeTests(MapBuilder);
    MapBuilder.prototype[_is_MapBuilder_default] = true;
    dart.setMethodSignature(MapBuilder, () => ({
      __proto__: dart.getMethods(MapBuilder.__proto__),
      build: dart.fnType(src__map.BuiltMap$(K, V), []),
      update: dart.fnType(dart.void, [MapBuilderOfK$VTodynamic()]),
      replace: dart.fnType(dart.void, [core$.Object]),
      withBase: dart.fnType(dart.void, [core$.Object]),
      withDefaultBase: dart.fnType(dart.void, []),
      addIterable: dart.gFnType(T => [dart.void, [core$.Iterable$(T)], {key: core$.Object, value: core$.Object}]),
      _get: dart.fnType(V, [core$.Object]),
      _set: dart.fnType(dart.void, [core$.Object, core$.Object]),
      putIfAbsent: dart.fnType(dart.void, [core$.Object, core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      remove: dart.fnType(dart.void, [core$.Object]),
      clear: dart.fnType(dart.void, []),
      [_setOwner]: dart.fnType(dart.void, [core$.Object]),
      [_setSafeMap]: dart.fnType(dart.void, [core$.Object]),
      [_createMap]: dart.fnType(core$.Map$(K, V), []),
      [_checkGenericTypeParameter]: dart.fnType(dart.void, []),
      [_checkKey]: dart.fnType(dart.void, [core$.Object]),
      [_checkKeys]: dart.fnType(dart.void, [core$.Iterable]),
      [_checkValue]: dart.fnType(dart.void, [core$.Object]),
      [_checkValues]: dart.fnType(dart.void, [core$.Iterable])
    }));
    dart.setGetterSignature(MapBuilder, () => ({
      __proto__: dart.getGetters(MapBuilder.__proto__),
      [_safeMap]: dart.fnType(core$.Map$(K, V), [])
    }));
    dart.setFieldSignature(MapBuilder, () => ({
      __proto__: dart.getFields(MapBuilder.__proto__),
      [_mapFactory]: dart.fieldType(VoidToMapOfK$V()),
      [_map]: dart.fieldType(MapOfK$V()),
      [_mapOwner]: dart.fieldType(_BuiltMapOfK$V())
    }));
    return MapBuilder;
  });
  src__map.MapBuilder = src__map.MapBuilder$();
  dart.addTypeTests(src__map.MapBuilder, _is_MapBuilder_default);
  dart.trackLibraries("packages/built_collection/src/map.ddc", {
    "package:built_collection/src/map.dart": src__map
  }, '{"version":3,"sourceRoot":"","sources":["map/built_map.dart","map.dart","map/map_builder.dart"],"names":[],"mappings":"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","file":"map.ddc.js"}');
  // Exports:
  return {
    src__map: src__map
  };
});

//# sourceMappingURL=map.ddc.js.map
