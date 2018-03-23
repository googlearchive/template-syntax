define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__internal__copy_on_write_map = Object.create(_root);
  const $_get = dartx._get;
  const $containsKey = dartx.containsKey;
  const $containsValue = dartx.containsValue;
  const $forEach = dartx.forEach;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $keys = dartx.keys;
  const $length = dartx.length;
  const $values = dartx.values;
  const $_set = dartx._set;
  const $addAll = dartx.addAll;
  const $clear = dartx.clear;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  const $toString = dartx.toString;
  const $cast = dartx.cast;
  const $map = dartx.map;
  const $retype = dartx.retype;
  const $addEntries = dartx.addEntries;
  const $removeWhere = dartx.removeWhere;
  const $update = dartx.update;
  const $updateAll = dartx.updateAll;
  const $entries = dartx.entries;
  let IterableOfObject = () => (IterableOfObject = dart.constFn(core.Iterable$(core.Object)))();
  src__internal__copy_on_write_map._MapFactory$ = dart.generic((K, V) => {
    const _MapFactory = dart.typedef('_MapFactory', () => dart.fnType(core.Map$(K, V), []));
    return _MapFactory;
  });
  src__internal__copy_on_write_map._MapFactory = src__internal__copy_on_write_map._MapFactory$();
  const _map = Symbol('_map');
  const _mapFactory = Symbol('_mapFactory');
  const _copyBeforeWrite = Symbol('_copyBeforeWrite');
  const _maybeCopyBeforeWrite = Symbol('_maybeCopyBeforeWrite');
  const _is_CopyOnWriteMap_default = Symbol('_is_CopyOnWriteMap_default');
  src__internal__copy_on_write_map.CopyOnWriteMap$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let KAndVTovoid = () => (KAndVTovoid = dart.constFn(dart.fnType(dart.void, [K, V])))();
    let KAndVToObject = () => (KAndVToObject = dart.constFn(dart.fnType(core.Object, [K, V])))();
    let KAndVTobool = () => (KAndVTobool = dart.constFn(dart.fnType(core.bool, [K, V])))();
    let VoidToMapOfK$V = () => (VoidToMapOfK$V = dart.constFn(dart.fnType(MapOfK$V(), [])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class CopyOnWriteMap extends core.Object {
      _get(key) {
        return this[_map][$_get](key);
      }
      cast(K2, V2) {
        dart.throw(new core.UnimplementedError.new('cast'));
      }
      containsKey(key) {
        return this[_map][$containsKey](key);
      }
      containsValue(value) {
        return this[_map][$containsValue](value);
      }
      get entries() {
        dart.throw(new core.UnimplementedError.new('entries'));
      }
      forEach(f) {
        return this[_map][$forEach](f);
      }
      get isEmpty() {
        return this[_map][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map][$isNotEmpty];
      }
      get keys() {
        return this[_map][$keys];
      }
      get length() {
        return this[_map][$length];
      }
      map(K2, V2, transform) {
        dart.throw(new core.UnimplementedError.new('map'));
      }
      retype(K2, V2) {
        dart.throw(new core.UnimplementedError.new('retype'));
      }
      get values() {
        return this[_map][$values];
      }
      _set(key, value) {
        K._check(key);
        V._check(value);
        this[_maybeCopyBeforeWrite]();
        this[_map][$_set](key, value);
        return value;
      }
      addAll(other) {
        MapOfK$V()._check(other);
        this[_maybeCopyBeforeWrite]();
        this[_map][$addAll](other);
      }
      addEntries(entries) {
        dart.throw(new core.UnimplementedError.new('addEntries'));
      }
      clear() {
        this[_maybeCopyBeforeWrite]();
        this[_map][$clear]();
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        this[_maybeCopyBeforeWrite]();
        return this[_map][$putIfAbsent](key, ifAbsent);
      }
      remove(key) {
        this[_maybeCopyBeforeWrite]();
        return this[_map][$remove](key);
      }
      removeWhere(test) {
        dart.throw(new core.UnimplementedError.new('removeWhere'));
      }
      toString() {
        return dart.toString(this[_map]);
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        dart.throw(new core.UnimplementedError.new('update'));
      }
      updateAll(update) {
        KAndVToV()._check(update);
        dart.throw(new core.UnimplementedError.new('updateAll'));
      }
      [_maybeCopyBeforeWrite]() {
        if (!dart.test(this[_copyBeforeWrite])) return;
        this[_copyBeforeWrite] = false;
        this[_map] = this[_mapFactory] != null ? (() => {
          let _ = this[_mapFactory]();
          _[$addAll](this[_map]);
          return _;
        })() : MapOfK$V().from(this[_map]);
      }
    }
    (CopyOnWriteMap.new = function(map, mapFactory) {
      if (mapFactory === void 0) mapFactory = null;
      this[_map] = map;
      this[_mapFactory] = mapFactory;
      this[_copyBeforeWrite] = true;
    }).prototype = CopyOnWriteMap.prototype;
    CopyOnWriteMap.prototype[dart.isMap] = true;
    dart.addTypeTests(CopyOnWriteMap);
    CopyOnWriteMap.prototype[_is_CopyOnWriteMap_default] = true;
    CopyOnWriteMap[dart.implements] = () => [MapOfK$V()];
    dart.setMethodSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getMethods(CopyOnWriteMap.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [KAndVTovoid()]),
      [$forEach]: dart.fnType(dart.void, [KAndVTovoid()]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [KAndVToObject()]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [KAndVToObject()]]),
      retype: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$retype]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      addEntries: dart.fnType(dart.void, [IterableOfObject()]),
      [$addEntries]: dart.fnType(dart.void, [IterableOfObject()]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [KAndVTobool()]),
      [$removeWhere]: dart.fnType(dart.void, [KAndVTobool()]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object]),
      [_maybeCopyBeforeWrite]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getGetters(CopyOnWriteMap.__proto__),
      entries: dart.fnType(core.Iterable$(core.Null), []),
      [$entries]: dart.fnType(core.Iterable$(core.Null), []),
      isEmpty: dart.fnType(core.bool, []),
      [$isEmpty]: dart.fnType(core.bool, []),
      isNotEmpty: dart.fnType(core.bool, []),
      [$isNotEmpty]: dart.fnType(core.bool, []),
      keys: dart.fnType(core.Iterable$(K), []),
      [$keys]: dart.fnType(core.Iterable$(K), []),
      length: dart.fnType(core.int, []),
      [$length]: dart.fnType(core.int, []),
      values: dart.fnType(core.Iterable$(V), []),
      [$values]: dart.fnType(core.Iterable$(V), [])
    }));
    dart.setFieldSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getFields(CopyOnWriteMap.__proto__),
      [_mapFactory]: dart.finalFieldType(VoidToMapOfK$V()),
      [_copyBeforeWrite]: dart.fieldType(core.bool),
      [_map]: dart.fieldType(MapOfK$V())
    }));
    dart.defineExtensionMethods(CopyOnWriteMap, [
      '_get',
      'cast',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'retype',
      '_set',
      'addAll',
      'addEntries',
      'clear',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'toString',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return CopyOnWriteMap;
  });
  src__internal__copy_on_write_map.CopyOnWriteMap = src__internal__copy_on_write_map.CopyOnWriteMap$();
  dart.addTypeTests(src__internal__copy_on_write_map.CopyOnWriteMap, _is_CopyOnWriteMap_default);
  dart.trackLibraries("packages/built_collection/src/internal/copy_on_write_map.ddc", {
    "package:built_collection/src/internal/copy_on_write_map.dart": src__internal__copy_on_write_map
  }, '{"version":3,"sourceRoot":"","sources":["copy_on_write_map.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;WAgBgB,GAAU;cAAK,WAAI,QAAC,GAAG;MAAC;;AAMpC,mBAAM,IAAI,2BAAkB,CAAC;MAC/B;kBAGiB,GAAU;cAAK,WAAI,cAAY,CAAC,GAAG;MAAC;oBAGlC,KAAY;cAAK,WAAI,gBAAc,CAAC,KAAK;MAAC;;AAQ3D,mBAAM,IAAI,2BAAkB,CAAC;MAC/B;cAGa,CAAsB;cAAK,WAAI,UAAQ,CAAC,CAAC;MAAC;;cAGnC,WAAI,UAAQ;;;cAGT,WAAI,aAAW;;;cAGd,WAAI,OAAK;;;cAGf,WAAI,SAAO;;kBAKL,SAAgC;AAGtD,mBAAM,IAAI,2BAAkB,CAAC;MAC/B;;AAME,mBAAM,IAAI,2BAAkB,CAAC;MAC/B;;cAG0B,WAAI,SAAO;;WAKnB,GAAK,EAAE,KAAO;iBAAZ;iBAAO;AACzB,mCAAqB;AACrB,kBAAI,QAAC,GAAG,EAAI,KAAK;cAFM,MAAO;MAGhC;aAGY,KAAe;0BAAL;AACpB,mCAAqB;AACrB,kBAAI,SAAO,CAAC,KAAK;MACnB;iBAKgB,OAAwB;AAGtC,mBAAM,IAAI,2BAAkB,CAAC;MAC/B;;AAIE,mCAAqB;AACrB,kBAAI,QAAM;MACZ;kBAGc,GAAK,EAAE,QAAY;iBAAjB;yBAAO;AACrB,mCAAqB;AACrB,cAAO,WAAI,cAAY,CAAC,GAAG,EAAE,QAAQ;MACvC;aAGS,GAAU;AACjB,mCAAqB;AACrB,cAAO,WAAI,SAAO,CAAC,GAAG;MACxB;kBAKiB,IAAyB;AACxC,mBAAM,IAAI,2BAAkB,CAAC;MAC/B;;6BAGqB,UAAI;MAAW;aAK3B,GAAK,EAAE,MAAiB;iBAAtB;sBAAO;YAAoB;;AACpC,mBAAM,IAAI,2BAAkB,CAAC;MAC/B;gBAKe,MAAwB;0BAAtB;AACf,mBAAM,IAAI,2BAAkB,CAAC;MAC/B;;AAKE,uBAAK,sBAAgB,GAAE;AACvB,8BAAgB,GAAG;AACnB,kBAAI,GAAG,iBAAW,IAAI;kBACf,iBAAW;qBAAW,UAAI;;eAC3B,AAAI,eAAc,CAAC,UAAI;MAC/B;;mCAxIoB,GAAI,EAAQ,UAAW;UAAX,UAAW,aAAX,UAAW;MAAvB,UAAI,GAAJ,GAAI;MAAQ,iBAAW,GAAX,UAAW;MAAK,sBAAgB,GAAG;IAAI","file":"copy_on_write_map.ddc.js"}');
  // Exports:
  return {
    src__internal__copy_on_write_map: src__internal__copy_on_write_map
  };
});

//# sourceMappingURL=copy_on_write_map.ddc.js.map
