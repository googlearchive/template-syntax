define(['dart_sdk', 'packages/built_collection/src/iterable', 'packages/quiver/collection', 'packages/built_collection/src/internal/copy_on_write_map', 'packages/quiver/core'], function(dart_sdk, iterable, collection, copy_on_write_map, core) {
  'use strict';
  const core$ = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__list = iterable.src__list;
  const collection$ = collection.collection;
  const src__internal__copy_on_write_map = copy_on_write_map.src__internal__copy_on_write_map;
  const core$0 = core.core;
  const _root = Object.create(null);
  const src__list_multimap = Object.create(_root);
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
  const _emptyList = Symbol('_emptyList');
  const _hashCode = Symbol('_hashCode');
  const _keys = Symbol('_keys');
  const _values = Symbol('_values');
  let const$;
  const _is_BuiltListMultimap_default = Symbol('_is_BuiltListMultimap_default');
  src__list_multimap.BuiltListMultimap$ = dart.generic((K, V) => {
    let BuiltListMultimapOfK$V = () => (BuiltListMultimapOfK$V = dart.constFn(src__list_multimap.BuiltListMultimap$(K, V)))();
    let _BuiltListMultimapOfK$V = () => (_BuiltListMultimapOfK$V = dart.constFn(src__list_multimap._BuiltListMultimap$(K, V)))();
    let ListMultimapBuilderOfK$V = () => (ListMultimapBuilderOfK$V = dart.constFn(src__list_multimap.ListMultimapBuilder$(K, V)))();
    let CopyOnWriteMapOfK$BuiltListOfV = () => (CopyOnWriteMapOfK$BuiltListOfV = dart.constFn(src__internal__copy_on_write_map.CopyOnWriteMap$(K, BuiltListOfV())))();
    let KToint = () => (KToint = dart.constFn(dart.fnType(core$.int, [K])))();
    let MapOfK$IterableOfV = () => (MapOfK$IterableOfV = dart.constFn(core$.Map$(K, IterableOfV())))();
    let KAndBuiltListOfVToNull = () => (KAndBuiltListOfVToNull = dart.constFn(dart.fnType(core$.Null, [K, BuiltListOfV()])))();
    let ListMultimapBuilderOfK$VTodynamic = () => (ListMultimapBuilderOfK$VTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ListMultimapBuilderOfK$V()])))();
    let KAndVTovoid = () => (KAndVTovoid = dart.constFn(dart.fnType(dart.void, [K, V])))();
    let KAndIterableOfVTovoid = () => (KAndIterableOfVTovoid = dart.constFn(dart.fnType(dart.void, [K, IterableOfV()])))();
    let MapOfK$BuiltListOfV = () => (MapOfK$BuiltListOfV = dart.constFn(core$.Map$(K, BuiltListOfV())))();
    let IterableOfK = () => (IterableOfK = dart.constFn(core$.Iterable$(K)))();
    let BuiltListOfV = () => (BuiltListOfV = dart.constFn(src__list.BuiltList$(V)))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core$.Iterable$(V)))();
    let VToNull = () => (VToNull = dart.constFn(dart.fnType(core$.Null, [V])))();
    let BuiltListOfVToBuiltListOfV = () => (BuiltListOfVToBuiltListOfV = dart.constFn(dart.fnType(BuiltListOfV(), [BuiltListOfV()])))();
    class BuiltListMultimap extends core$.Object {
      static new(multimap) {
        if (multimap === void 0) multimap = const$ || (const$ = dart.constMap(dart.dynamic, dart.dynamic, []));
        if (src__list_multimap._BuiltListMultimap.is(multimap) && dart.test(multimap.hasExactKeyAndValueTypes(dart.wrapType(K), dart.wrapType(V)))) {
          return BuiltListMultimapOfK$V().as(multimap);
        } else if (core$.Map.is(multimap) || collection$.ListMultimap.is(multimap) || src__list_multimap.BuiltListMultimap.is(multimap)) {
          return new (_BuiltListMultimapOfK$V()).copyAndCheck(core$.Iterable._check(dart.dload(multimap, 'keys')), dart.fn(k => dart.dindex(multimap, k), dynamicTodynamic$()));
        } else {
          dart.throw(new core$.ArgumentError.new('expected Map, ListMultimap or BuiltListMultimap, ' + dart.str`got ${dart.runtimeType(multimap)}`));
        }
      }
      static build(updates) {
        return (() => {
          let _ = ListMultimapBuilderOfK$V().new();
          _.update(updates);
          return _;
        })().build();
      }
      toBuilder() {
        return ListMultimapBuilderOfK$V().new(this);
      }
      rebuild(updates) {
        return (() => {
          let _ = this.toBuilder();
          _.update(updates);
          return _;
        })().build();
      }
      toMap() {
        return new (CopyOnWriteMapOfK$BuiltListOfV()).new(this[_map]);
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
        if (!src__list_multimap.BuiltListMultimap.is(other)) return false;
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
      asMap() {
        return MapOfK$IterableOfV().unmodifiable(this[_map]);
      }
      _get(key) {
        let result = this[_map][$_get](key);
        return result == null ? this[_emptyList] : result;
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
        }, KAndBuiltListOfVToNull()));
      }
      forEachKey(f) {
        this[_map][$forEach](dart.fn((key, values) => {
          f(key, values);
        }, KAndBuiltListOfVToNull()));
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
          this[_values] = this[_map][$values][$expand](V, dart.fn(x => x, BuiltListOfVToBuiltListOfV()));
        }
        return this[_values];
      }
    }
    (BuiltListMultimap.__ = function(map) {
      this[_emptyList] = BuiltListOfV().new();
      this[_hashCode] = null;
      this[_keys] = null;
      this[_values] = null;
      this[_map] = map;
      if (dart.equals(dart.wrapType(K), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new('explicit key type required, ' + 'for example "new BuiltListMultimap<int, int>"'));
      }
      if (dart.equals(dart.wrapType(V), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new('explicit value type required,' + ' for example "new BuiltListMultimap<int, int>"'));
      }
    }).prototype = BuiltListMultimap.prototype;
    dart.addTypeTests(BuiltListMultimap);
    BuiltListMultimap.prototype[_is_BuiltListMultimap_default] = true;
    dart.setMethodSignature(BuiltListMultimap, () => ({
      __proto__: dart.getMethods(BuiltListMultimap.__proto__),
      toBuilder: dart.fnType(src__list_multimap.ListMultimapBuilder$(K, V), []),
      rebuild: dart.fnType(src__list_multimap.BuiltListMultimap$(K, V), [ListMultimapBuilderOfK$VTodynamic()]),
      toMap: dart.fnType(core$.Map$(K, src__list.BuiltList$(V)), []),
      _equals: dart.fnType(core$.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core$.bool, [dart.dynamic]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      asMap: dart.fnType(core$.Map$(K, core$.Iterable$(V)), []),
      _get: dart.fnType(src__list.BuiltList$(V), [core$.Object]),
      containsKey: dart.fnType(core$.bool, [core$.Object]),
      containsValue: dart.fnType(core$.bool, [core$.Object]),
      forEach: dart.fnType(dart.void, [KAndVTovoid()]),
      forEachKey: dart.fnType(dart.void, [KAndIterableOfVTovoid()])
    }));
    dart.setGetterSignature(BuiltListMultimap, () => ({
      __proto__: dart.getGetters(BuiltListMultimap.__proto__),
      hashCode: dart.fnType(core$.int, []),
      [$hashCode]: dart.fnType(core$.int, []),
      isEmpty: dart.fnType(core$.bool, []),
      isNotEmpty: dart.fnType(core$.bool, []),
      keys: dart.fnType(core$.Iterable$(K), []),
      length: dart.fnType(core$.int, []),
      values: dart.fnType(core$.Iterable$(V), [])
    }));
    dart.setFieldSignature(BuiltListMultimap, () => ({
      __proto__: dart.getFields(BuiltListMultimap.__proto__),
      [_map]: dart.finalFieldType(MapOfK$BuiltListOfV()),
      [_emptyList]: dart.finalFieldType(BuiltListOfV()),
      [_hashCode]: dart.fieldType(core$.int),
      [_keys]: dart.fieldType(IterableOfK()),
      [_values]: dart.fieldType(IterableOfV())
    }));
    dart.defineExtensionMethods(BuiltListMultimap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltListMultimap, ['hashCode']);
    return BuiltListMultimap;
  });
  src__list_multimap.BuiltListMultimap = src__list_multimap.BuiltListMultimap$();
  dart.addTypeTests(src__list_multimap.BuiltListMultimap, _is_BuiltListMultimap_default);
  const _is__BuiltListMultimap_default = Symbol('_is__BuiltListMultimap_default');
  src__list_multimap._BuiltListMultimap$ = dart.generic((K, V) => {
    let LinkedMapOfK$BuiltListOfV = () => (LinkedMapOfK$BuiltListOfV = dart.constFn(_js_helper.LinkedMap$(K, BuiltListOfV())))();
    let BuiltListOfV = () => (BuiltListOfV = dart.constFn(src__list.BuiltList$(V)))();
    class _BuiltListMultimap extends src__list_multimap.BuiltListMultimap$(K, V) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.equals(dart.wrapType(K), key) && dart.equals(dart.wrapType(V), value);
      }
    }
    (_BuiltListMultimap.withSafeMap = function(map) {
      _BuiltListMultimap.__proto__.__.call(this, map);
    }).prototype = _BuiltListMultimap.prototype;
    (_BuiltListMultimap.copyAndCheck = function(keys, lookup) {
      _BuiltListMultimap.__proto__.__.call(this, new (LinkedMapOfK$BuiltListOfV()).new());
      for (let key of keys) {
        if (K.is(key)) {
          this[_map][$_set](key, BuiltListOfV().new(core$.Iterable._check(dart.dcall(lookup, key))));
        } else {
          dart.throw(new core$.ArgumentError.new(dart.str`map contained invalid key: ${key}`));
        }
      }
    }).prototype = _BuiltListMultimap.prototype;
    dart.addTypeTests(_BuiltListMultimap);
    _BuiltListMultimap.prototype[_is__BuiltListMultimap_default] = true;
    dart.setMethodSignature(_BuiltListMultimap, () => ({
      __proto__: dart.getMethods(_BuiltListMultimap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(core$.bool, [core$.Type, core$.Type])
    }));
    return _BuiltListMultimap;
  });
  src__list_multimap._BuiltListMultimap = src__list_multimap._BuiltListMultimap$();
  dart.addTypeTests(src__list_multimap._BuiltListMultimap, _is__BuiltListMultimap_default);
  const _is_OverriddenHashcodeBuiltListMultimap_default = Symbol('_is_OverriddenHashcodeBuiltListMultimap_default');
  src__list_multimap.OverriddenHashcodeBuiltListMultimap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltListMultimap extends src__list_multimap._BuiltListMultimap$(K, V) {
      get hashCode() {
        return this[_overridenHashCode];
      }
    }
    (OverriddenHashcodeBuiltListMultimap.new = function(map, overridenHashCode) {
      this[_overridenHashCode] = overridenHashCode;
      OverriddenHashcodeBuiltListMultimap.__proto__.copyAndCheck.call(this, core$.Iterable._check(dart.dload(map, 'keys')), dart.fn(k => dart.dindex(map, k), dynamicTodynamic()));
    }).prototype = OverriddenHashcodeBuiltListMultimap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltListMultimap);
    OverriddenHashcodeBuiltListMultimap.prototype[_is_OverriddenHashcodeBuiltListMultimap_default] = true;
    dart.setFieldSignature(OverriddenHashcodeBuiltListMultimap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltListMultimap.__proto__),
      [_overridenHashCode]: dart.finalFieldType(core$.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltListMultimap, ['hashCode']);
    return OverriddenHashcodeBuiltListMultimap;
  });
  src__list_multimap.OverriddenHashcodeBuiltListMultimap = src__list_multimap.OverriddenHashcodeBuiltListMultimap$();
  dart.addTypeTests(src__list_multimap.OverriddenHashcodeBuiltListMultimap, _is_OverriddenHashcodeBuiltListMultimap_default);
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
  const _is_ListMultimapBuilder_default = Symbol('_is_ListMultimapBuilder_default');
  src__list_multimap.ListMultimapBuilder$ = dart.generic((K, V) => {
    let ListMultimapBuilderOfK$V = () => (ListMultimapBuilderOfK$V = dart.constFn(src__list_multimap.ListMultimapBuilder$(K, V)))();
    let _BuiltListMultimapOfK$V = () => (_BuiltListMultimapOfK$V = dart.constFn(src__list_multimap._BuiltListMultimap$(K, V)))();
    let ListMultimapOfK$V = () => (ListMultimapOfK$V = dart.constFn(collection$.ListMultimap$(K, V)))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core$.Null, [K, V])))();
    let MapOfK$BuiltListOfV = () => (MapOfK$BuiltListOfV = dart.constFn(core$.Map$(K, BuiltListOfV())))();
    let LinkedMapOfK$ListBuilderOfV = () => (LinkedMapOfK$ListBuilderOfV = dart.constFn(_js_helper.LinkedMap$(K, ListBuilderOfV())))();
    let LinkedMapOfK$BuiltListOfV = () => (LinkedMapOfK$BuiltListOfV = dart.constFn(_js_helper.LinkedMap$(K, BuiltListOfV())))();
    let ListMultimapBuilderOfK$VTodynamic = () => (ListMultimapBuilderOfK$VTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ListMultimapBuilderOfK$V()])))();
    let MapOfK$ListBuilderOfV = () => (MapOfK$ListBuilderOfV = dart.constFn(core$.Map$(K, ListBuilderOfV())))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core$.Iterable$(V)))();
    let VToNull = () => (VToNull = dart.constFn(dart.fnType(core$.Null, [V])))();
    let ListBuilderOfV = () => (ListBuilderOfV = dart.constFn(src__list.ListBuilder$(V)))();
    let BuiltListOfV = () => (BuiltListOfV = dart.constFn(src__list.BuiltList$(V)))();
    class ListMultimapBuilder extends core$.Object {
      static new(multimap) {
        if (multimap === void 0) multimap = const$0 || (const$0 = dart.constMap(dart.dynamic, dart.dynamic, []));
        let _ = new (ListMultimapBuilderOfK$V())._uninitialized();
        _.replace(multimap);
        return _;
      }
      build() {
        if (this[_builtMapOwner] == null) {
          for (let key of this[_builderMap][$keys]) {
            let builtList = this[_builderMap][$_get](key).build();
            if (dart.test(builtList.isEmpty)) {
              this[_builtMap][$remove](key);
            } else {
              this[_builtMap][$_set](key, builtList);
            }
          }
          this[_builtMapOwner] = new (_BuiltListMultimapOfK$V()).withSafeMap(this[_builtMap]);
        }
        return this[_builtMapOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(multimap) {
        if (_BuiltListMultimapOfK$V().is(multimap)) {
          this[_setOwner](multimap);
        } else if (core$.Map.is(multimap) || collection$.ListMultimap.is(multimap) || src__list_multimap.BuiltListMultimap.is(multimap)) {
          this[_setWithCopyAndCheck](core$.Iterable._check(dart.dload(multimap, 'keys')), dart.fn(k => dart.dindex(multimap, k), dynamicTodynamic$0()));
        } else {
          dart.throw(new core$.ArgumentError.new('expected Map, ListMultimap or BuiltListMultimap, ' + dart.str`got ${dart.runtimeType(multimap)}`));
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
        ListMultimapOfK$V()._check(other);
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
          this[_builderMap][$_set](key, ListBuilderOfV().new());
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
            result = ListBuilderOfV().new();
          } else {
            result = builtValues.toBuilder();
          }
          this[_builderMap][$_set](key, result);
        }
        return result;
      }
      [_makeWriteableCopy]() {
        if (this[_builtMapOwner] != null) {
          this[_builtMap] = MapOfK$BuiltListOfV().from(this[_builtMap]);
          this[_builtMapOwner] = null;
        }
      }
      [_setOwner](builtListMultimap) {
        _BuiltListMultimapOfK$V()._check(builtListMultimap);
        this[_builtMapOwner] = builtListMultimap;
        this[_builtMap] = builtListMultimap[_map];
        this[_builderMap] = new (LinkedMapOfK$ListBuilderOfV()).new();
      }
      [_setWithCopyAndCheck](keys, lookup) {
        this[_builtMapOwner] = null;
        this[_builtMap] = new (LinkedMapOfK$BuiltListOfV()).new();
        this[_builderMap] = new (LinkedMapOfK$ListBuilderOfV()).new();
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
          dart.throw(new core$.UnsupportedError.new('explicit key type required, ' + 'for example "new ListMultimapBuilder<int, int>"'));
        }
        if (dart.equals(dart.wrapType(V), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new('explicit value type required, ' + 'for example "new ListMultimapBuilder<int, int>"'));
        }
      }
      [_checkKey](key) {
        K._check(key);
        if (key == null) {
          dart.throw(new core$.ArgumentError.new('null key'));
        }
      }
      [_checkValue](value) {
        V._check(value);
        if (value == null) {
          dart.throw(new core$.ArgumentError.new('null value'));
        }
      }
    }
    (ListMultimapBuilder._uninitialized = function() {
      this[_builtMap] = null;
      this[_builtMapOwner] = null;
      this[_builderMap] = null;
      this[_checkGenericTypeParameter]();
    }).prototype = ListMultimapBuilder.prototype;
    dart.addTypeTests(ListMultimapBuilder);
    ListMultimapBuilder.prototype[_is_ListMultimapBuilder_default] = true;
    dart.setMethodSignature(ListMultimapBuilder, () => ({
      __proto__: dart.getMethods(ListMultimapBuilder.__proto__),
      build: dart.fnType(src__list_multimap.BuiltListMultimap$(K, V), []),
      update: dart.fnType(dart.void, [ListMultimapBuilderOfK$VTodynamic()]),
      replace: dart.fnType(dart.void, [dart.dynamic]),
      addIterable: dart.gFnType(T => [dart.void, [core$.Iterable$(T)], {key: core$.Object, value: core$.Object, values: core$.Object}]),
      add: dart.fnType(dart.void, [core$.Object, core$.Object]),
      addValues: dart.fnType(dart.void, [core$.Object, core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      remove: dart.fnType(dart.void, [core$.Object, core$.Object]),
      removeAll: dart.fnType(dart.void, [core$.Object]),
      clear: dart.fnType(dart.void, []),
      [_getValuesBuilder]: dart.fnType(src__list.ListBuilder$(V), [core$.Object]),
      [_makeWriteableCopy]: dart.fnType(dart.void, []),
      [_setOwner]: dart.fnType(dart.void, [core$.Object]),
      [_setWithCopyAndCheck]: dart.fnType(dart.void, [core$.Iterable, core$.Function]),
      [_checkGenericTypeParameter]: dart.fnType(dart.void, []),
      [_checkKey]: dart.fnType(dart.void, [core$.Object]),
      [_checkValue]: dart.fnType(dart.void, [core$.Object])
    }));
    dart.setFieldSignature(ListMultimapBuilder, () => ({
      __proto__: dart.getFields(ListMultimapBuilder.__proto__),
      [_builtMap]: dart.fieldType(MapOfK$BuiltListOfV()),
      [_builtMapOwner]: dart.fieldType(_BuiltListMultimapOfK$V()),
      [_builderMap]: dart.fieldType(MapOfK$ListBuilderOfV())
    }));
    return ListMultimapBuilder;
  });
  src__list_multimap.ListMultimapBuilder = src__list_multimap.ListMultimapBuilder$();
  dart.addTypeTests(src__list_multimap.ListMultimapBuilder, _is_ListMultimapBuilder_default);
  dart.trackLibraries("packages/built_collection/src/list_multimap.ddc", {
    "package:built_collection/src/list_multimap.dart": src__list_multimap
  }, '{"version":3,"sourceRoot":"","sources":["list_multimap/built_list_multimap.dart","list_multimap.dart","list_multimap/list_multimap_builder.dart"],"names":[],"mappings":"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","file":"list_multimap.ddc.js"}');
  // Exports:
  return {
    src__list_multimap: src__list_multimap
  };
});

//# sourceMappingURL=list_multimap.ddc.js.map
