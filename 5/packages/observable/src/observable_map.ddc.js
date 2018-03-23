define(['dart_sdk', 'packages/observable/src/records', 'packages/observable/src/change_notifier', 'packages/dart_internal/extract_type_arguments', 'packages/observable/src/observable_list'], function(dart_sdk, records, change_notifier, extract_type_arguments, observable_list) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__records = records.src__records;
  const src__observable = change_notifier.src__observable;
  const extract_type_arguments$ = extract_type_arguments.extract_type_arguments;
  const src__observable_list = observable_list.src__observable_list;
  const _root = Object.create(null);
  const src__observable_map = Object.create(_root);
  const src__to_observable = Object.create(_root);
  const $cast = dartx.cast;
  const $keys = dartx.keys;
  const $values = dartx.values;
  const $length = dartx.length;
  const $containsValue = dartx.containsValue;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  const $clear = dartx.clear;
  const $entries = dartx.entries;
  const $addEntries = dartx.addEntries;
  const $map = dartx.map;
  const $update = dartx.update;
  const $updateAll = dartx.updateAll;
  const $removeWhere = dartx.removeWhere;
  const $addAll = dartx.addAll;
  const $toString = dartx.toString;
  const $retype = dartx.retype;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  let PropertyChangeRecordOfNull = () => (PropertyChangeRecordOfNull = dart.constFn(src__records.PropertyChangeRecord$(core.Null)))();
  let dynamic__Todynamic = () => (dynamic__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic], {deep: core.bool})))();
  let ObservableOfChangeRecord = () => (ObservableOfChangeRecord = dart.constFn(src__observable.Observable$(src__records.ChangeRecord)))();
  let VoidToObservableMapOfK$V = () => (VoidToObservableMapOfK$V = dart.constFn(dart.gFnType((K, V) => [src__observable_map.ObservableMap$(K, V), []])))();
  let VoidToObservableListOfT = () => (VoidToObservableListOfT = dart.constFn(dart.gFnType(T => [src__observable_list.ObservableList$(T), []])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  const _map = Symbol('_map');
  let const$;
  const _notifyKeysValuesChanged = Symbol('_notifyKeysValuesChanged');
  const _notifyValuesChanged = Symbol('_notifyValuesChanged');
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  const _is_ObservableMap_default = Symbol('_is_ObservableMap_default');
  src__observable_map.ObservableMap$ = dart.generic((K, V) => {
    let LinkedMapOfK$V = () => (LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    let SplayTreeMapOfK$V = () => (SplayTreeMapOfK$V = dart.constFn(collection.SplayTreeMap$(K, V)))();
    let ObservableMapOfK$V = () => (ObservableMapOfK$V = dart.constFn(src__observable_map.ObservableMap$(K, V)))();
    let MapChangeRecordOfK$V = () => (MapChangeRecordOfK$V = dart.constFn(src__records.MapChangeRecord$(K, V)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core.Null, [K, V])))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(MapEntryOfK$V())))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let KAndVTovoid = () => (KAndVTovoid = dart.constFn(dart.fnType(dart.void, [K, V])))();
    let KAndVTobool = () => (KAndVTobool = dart.constFn(dart.fnType(core.bool, [K, V])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let MapChangeRecordOfObject$V = () => (MapChangeRecordOfObject$V = dart.constFn(src__records.MapChangeRecord$(core.Object, V)))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class ObservableMap extends src__observable.Observable$(src__records.ChangeRecord) {
      static castFrom(K, V, K2, V2, source) {
        return new (src__observable_map.ObservableMap$(K2, V2)).spy(source[_map][$cast](K2, V2));
      }
      static from(other) {
        let _ = ObservableMapOfK$V().createFromType(other);
        _.addAll(other);
        return _;
      }
      static createFromType(other) {
        let result = null;
        if (collection.SplayTreeMap.is(other)) {
          result = new (ObservableMapOfK$V()).sorted();
        } else if (collection.LinkedHashMap.is(other)) {
          result = new (ObservableMapOfK$V()).linked();
        } else {
          result = new (ObservableMapOfK$V()).new();
        }
        return result;
      }
      get keys() {
        return this[_map][$keys];
      }
      get values() {
        return this[_map][$values];
      }
      get length() {
        return this[_map][$length];
      }
      get isEmpty() {
        return this.length === 0;
      }
      get isNotEmpty() {
        return !dart.test(this.isEmpty);
      }
      containsValue(value) {
        return this[_map][$containsValue](value);
      }
      containsKey(key) {
        return this[_map][$containsKey](key);
      }
      _get(key) {
        return this[_map][$_get](key);
      }
      _set(key, value) {
        (() => {
          K._check(key);
          V._check(value);
          if (!dart.test(this.hasObservers)) {
            this[_map][$_set](key, value);
            return;
          }
          let len = this[_map][$length];
          let oldValue = this[_map][$_get](key);
          this[_map][$_set](key, value);
          if (len != this[_map][$length]) {
            this.notifyPropertyChange(core.int, const$ || (const$ = dart.const(core.Symbol.new('length'))), len, this[_map][$length]);
            this.notifyChange(new (MapChangeRecordOfK$V()).insert(key, value));
            this[_notifyKeysValuesChanged]();
          } else if (!dart.equals(oldValue, value)) {
            this.notifyChange(new (MapChangeRecordOfK$V()).new(key, oldValue, value));
            this[_notifyValuesChanged]();
          }
        })();
        return value;
      }
      addAll(other) {
        MapOfK$V()._check(other);
        other[$forEach](dart.fn((key, value) => {
          this._set(key, value);
        }, KAndVToNull()));
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        let len = this[_map][$length];
        let result = this[_map][$putIfAbsent](key, ifAbsent);
        if (dart.test(this.hasObservers) && len != this[_map][$length]) {
          this.notifyPropertyChange(core.int, const$0 || (const$0 = dart.const(core.Symbol.new('length'))), len, this[_map][$length]);
          this.notifyChange(new (MapChangeRecordOfK$V()).insert(key, result));
          this[_notifyKeysValuesChanged]();
        }
        return result;
      }
      remove(key) {
        let len = this[_map][$length];
        let result = this[_map][$remove](key);
        if (dart.test(this.hasObservers) && len != this[_map][$length]) {
          this.notifyChange(new (MapChangeRecordOfObject$V()).remove(key, result));
          this.notifyPropertyChange(core.int, const$1 || (const$1 = dart.const(core.Symbol.new('length'))), len, this[_map][$length]);
          this[_notifyKeysValuesChanged]();
        }
        return result;
      }
      clear() {
        let len = this[_map][$length];
        if (dart.test(this.hasObservers) && dart.notNull(len) > 0) {
          this[_map][$forEach](dart.fn((key, value) => {
            this.notifyChange(new (MapChangeRecordOfK$V()).remove(key, value));
          }, KAndVToNull()));
          this.notifyPropertyChange(core.int, const$2 || (const$2 = dart.const(core.Symbol.new('length'))), len, 0);
          this[_notifyKeysValuesChanged]();
        }
        this[_map][$clear]();
      }
      forEach(f) {
        return this[_map][$forEach](f);
      }
      toString() {
        return collection.MapBase.mapToString(this);
      }
      cast(K2, V2) {
        if (src__observable_map.ObservableMap$(K2, V2).is(this)) {
          return src__observable_map.ObservableMap$(K2, V2).as(this);
        }
        return src__observable_map.ObservableMap.castFrom(K, V, K2, V2, this);
      }
      retype(K2, V2) {
        return src__observable_map.ObservableMap.castFrom(K, V, K2, V2, this);
      }
      get entries() {
        return this[_map][$entries];
      }
      addEntries(entries) {
        IterableOfMapEntryOfK$V()._check(entries);
        this[_map][$addEntries](entries);
      }
      map(K2, V2, transform) {
        return this[_map][$map](K2, V2, transform);
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        return this[_map][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAll(update) {
        KAndVToV()._check(update);
        return this[_map][$updateAll](update);
      }
      removeWhere(test) {
        return this[_map][$removeWhere](test);
      }
      [_notifyKeysValuesChanged]() {
        this.notifyChange(new (PropertyChangeRecordOfNull()).new(this, const$3 || (const$3 = dart.const(core.Symbol.new('keys'))), null, null));
        this[_notifyValuesChanged]();
      }
      [_notifyValuesChanged]() {
        this.notifyChange(new (PropertyChangeRecordOfNull()).new(this, const$4 || (const$4 = dart.const(core.Symbol.new('values'))), null, null));
      }
    }
    (ObservableMap.new = function() {
      this[_map] = new (LinkedMapOfK$V()).new();
      ObservableMap.__proto__.new.call(this);
    }).prototype = ObservableMap.prototype;
    (ObservableMap.linked = function() {
      this[_map] = new (LinkedMapOfK$V()).new();
      ObservableMap.__proto__.new.call(this);
    }).prototype = ObservableMap.prototype;
    (ObservableMap.sorted = function() {
      this[_map] = new (SplayTreeMapOfK$V()).new();
      ObservableMap.__proto__.new.call(this);
    }).prototype = ObservableMap.prototype;
    (ObservableMap.spy = function(other) {
      this[_map] = other;
      ObservableMap.__proto__.new.call(this);
    }).prototype = ObservableMap.prototype;
    ObservableMap.prototype[dart.isMap] = true;
    dart.addTypeTests(ObservableMap);
    ObservableMap.prototype[_is_ObservableMap_default] = true;
    ObservableMap[dart.implements] = () => [MapOfK$V()];
    dart.setMethodSignature(ObservableMap, () => ({
      __proto__: dart.getMethods(ObservableMap.__proto__),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      forEach: dart.fnType(dart.void, [KAndVTovoid()]),
      [$forEach]: dart.fnType(dart.void, [KAndVTovoid()]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      cast: dart.gFnType((K2, V2) => [src__observable_map.ObservableMap$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [src__observable_map.ObservableMap$(K2, V2), []]),
      retype: dart.gFnType((K2, V2) => [src__observable_map.ObservableMap$(K2, V2), []]),
      [$retype]: dart.gFnType((K2, V2) => [src__observable_map.ObservableMap$(K2, V2), []]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object]),
      removeWhere: dart.fnType(dart.void, [KAndVTobool()]),
      [$removeWhere]: dart.fnType(dart.void, [KAndVTobool()]),
      [_notifyKeysValuesChanged]: dart.fnType(dart.void, []),
      [_notifyValuesChanged]: dart.fnType(dart.void, [])
    }));
    dart.setStaticMethodSignature(ObservableMap, () => ({castFrom: dart.gFnType((K, V, K2, V2) => [src__observable_map.ObservableMap$(K2, V2), [src__observable_map.ObservableMap$(K, V)]])}));
    dart.setGetterSignature(ObservableMap, () => ({
      __proto__: dart.getGetters(ObservableMap.__proto__),
      keys: dart.fnType(core.Iterable$(K), []),
      [$keys]: dart.fnType(core.Iterable$(K), []),
      values: dart.fnType(core.Iterable$(V), []),
      [$values]: dart.fnType(core.Iterable$(V), []),
      length: dart.fnType(core.int, []),
      [$length]: dart.fnType(core.int, []),
      isEmpty: dart.fnType(core.bool, []),
      [$isEmpty]: dart.fnType(core.bool, []),
      isNotEmpty: dart.fnType(core.bool, []),
      [$isNotEmpty]: dart.fnType(core.bool, []),
      entries: dart.fnType(core.Iterable$(core.MapEntry$(K, V)), []),
      [$entries]: dart.fnType(core.Iterable$(core.MapEntry$(K, V)), [])
    }));
    dart.setFieldSignature(ObservableMap, () => ({
      __proto__: dart.getFields(ObservableMap.__proto__),
      [_map]: dart.finalFieldType(MapOfK$V())
    }));
    dart.defineExtensionMethods(ObservableMap, [
      'containsValue',
      'containsKey',
      '_get',
      '_set',
      'addAll',
      'putIfAbsent',
      'remove',
      'clear',
      'forEach',
      'toString',
      'cast',
      'retype',
      'addEntries',
      'map',
      'update',
      'updateAll',
      'removeWhere'
    ]);
    dart.defineExtensionAccessors(ObservableMap, [
      'keys',
      'values',
      'length',
      'isEmpty',
      'isNotEmpty',
      'entries'
    ]);
    return ObservableMap;
  });
  src__observable_map.ObservableMap = src__observable_map.ObservableMap$();
  dart.addTypeTests(src__observable_map.ObservableMap, _is_ObservableMap_default);
  src__to_observable.toObservable = function(value, opts) {
    let deep = opts && 'deep' in opts ? opts.deep : true;
    return dart.test(deep) ? src__to_observable._toObservableDeep(value) : src__to_observable._toObservableShallow(value);
  };
  dart.fn(src__to_observable.toObservable, dynamic__Todynamic());
  src__to_observable._toObservableShallow = function(value) {
    if (ObservableOfChangeRecord().is(value)) return value;
    if (core.Map.is(value)) {
      return extract_type_arguments$.extractMapTypeArguments(value, dart.fn((K, V) => src__observable_map.ObservableMap$(K, V).from(core.Map$(K, V)._check(value)), VoidToObservableMapOfK$V()));
    }
    if (core.Iterable.is(value)) {
      return extract_type_arguments$.extractIterableTypeArgument(value, dart.fn(T => new (src__observable_list.ObservableList$(T)).from(value), VoidToObservableListOfT()));
    }
    return value;
  };
  dart.fn(src__to_observable._toObservableShallow, dynamicTodynamic());
  src__to_observable._toObservableDeep = function(value) {
    if (ObservableOfChangeRecord().is(value)) return value;
    if (core.Map.is(value)) {
      return extract_type_arguments$.extractMapTypeArguments(value, dart.fn((K, V) => {
        let result = src__observable_map.ObservableMap$(K, V).createFromType(core.Map$(K, V)._check(value));
        value[$forEach](dart.fn((k, v) => {
          result._set(K._check(src__to_observable._toObservableDeep(k)), V._check(src__to_observable._toObservableDeep(v)));
        }, dynamicAnddynamicToNull()));
        return result;
      }, VoidToObservableMapOfK$V()));
    }
    if (core.Iterable.is(value)) {
      return extract_type_arguments$.extractIterableTypeArgument(value, dart.fn(T => {
        let result = new (src__observable_list.ObservableList$(T)).new();
        for (let element of value) {
          result.add(T._check(src__to_observable._toObservableDeep(element)));
        }
        return result;
      }, VoidToObservableListOfT()));
    }
    return value;
  };
  dart.fn(src__to_observable._toObservableDeep, dynamicTodynamic());
  dart.trackLibraries("packages/observable/src/observable_map.ddc", {
    "package:observable/src/observable_map.dart": src__observable_map,
    "package:observable/src/to_observable.dart": src__to_observable
  }, '{"version":3,"sourceRoot":"","sources":["observable_map.dart","to_observable.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oCAkDI,MAA0B;AAE1B,cAAO,KAAI,gDAAyB,CAAC,MAAM,MAAK,OAAK;MACvD;kBAoB2B,KAAe;AAAE,AAC1C,gBAAO,AAAI,mCAAkC,CAAC,KAAK;iBAAU,KAAK;;MACpE;4BAGqC,KAAe;AAAE,AACpD,YAAoB;AACpB,uCAAI,KAAK,GAAkB;AACzB,gBAAM,GAAG,IAAI,6BAA0B;cAClC,iCAAI,KAAK,GAAmB;AACjC,gBAAM,GAAG,IAAI,6BAA0B;eAClC;AACL,gBAAM,GAAG,IAAI,0BAAmB;;AAElC,cAAO,OAAM;MACf;;cAMwB,WAAI,OAAK;;;cAGP,WAAI,SAAO;;;cAGnB,WAAI,SAAO;;;cAGT,YAAM,KAAI;MAAC;;cAGR,YAAC,YAAO;;oBAGZ,KAAY;cAAK,WAAI,gBAAc,CAAC,KAAK;MAAC;kBAG5C,GAAU;cAAK,WAAI,cAAY,CAAC,GAAG;MAAC;WAGvC,GAAU;cAAK,WAAI,QAAC,GAAG;MAAC;WAGpB,GAAK,EAAE,KAAO;;mBAAZ;mBAAO;AACzB,yBAAK,iBAAY,GAAE;AACjB,sBAAI,QAAC,GAAG,EAAI,KAAK;AACjB;;AAGF,cAAI,MAAM,UAAI,SAAO;AACrB,cAAE,WAAW,UAAI,QAAC,GAAG;AAErB,oBAAI,QAAC,GAAG,EAAI,KAAK;AAEjB,cAAI,GAAG,IAAI,UAAI,SAAO,EAAE;AACtB,qCAAoB,WAAC,4DAAS,GAAG,EAAE,UAAI,SAAO;AAC9C,6BAAY,CAAC,IAAI,+BAAsB,CAAC,GAAG,EAAE,KAAK;AAClD,0CAAwB;gBACnB,kBAAI,QAAQ,EAAI,KAAK,GAAE;AAC5B,6BAAY,CAAC,IAAI,4BAAe,CAAC,GAAG,EAAE,QAAQ,EAAE,KAAK;AACrD,sCAAoB;;;cAjBC,MAAO;MAmBhC;aAGY,KAAe;0BAAL;AACpB,aAAK,UAAQ,CAAC,SAAC,GAAK,EAAE,KAAO;AAC3B,oBAAK,GAAG,EAAI,KAAK;;MAErB;kBAGc,GAAK,EAAE,QAAY;iBAAjB;yBAAO;AACrB,YAAI,MAAM,UAAI,SAAO;AACrB,YAAE,SAAS,UAAI,cAAY,CAAC,GAAG,EAAE,QAAQ;AACzC,sBAAI,iBAAY,KAAI,GAAG,IAAI,UAAI,SAAO,EAAE;AACtC,mCAAoB,WAAC,8DAAS,GAAG,EAAE,UAAI,SAAO;AAC9C,2BAAY,CAAC,IAAI,+BAAsB,CAAC,GAAG,EAAE,MAAM;AACnD,wCAAwB;;AAE1B,cAAO,OAAM;MACf;aAGS,GAAU;AACjB,YAAI,MAAM,UAAI,SAAO;AACrB,YAAE,SAAS,UAAI,SAAO,CAAC,GAAG;AAC1B,sBAAI,iBAAY,KAAI,GAAG,IAAI,UAAI,SAAO,EAAE;AACtC,2BAAY,CAAC,IAAI,oCAAsB,CAAC,GAAG,EAAE,MAAM;AACnD,mCAAoB,WAAC,8DAAS,GAAG,EAAE,UAAI,SAAO;AAC9C,wCAAwB;;AAE1B,cAAO,OAAM;MACf;;AAIE,YAAI,MAAM,UAAI,SAAO;AACrB,sBAAI,iBAAY,KAAQ,aAAJ,GAAG,IAAG,GAAG;AAC3B,oBAAI,UAAQ,CAAC,SAAC,GAAG,EAAE,KAAK;AACtB,6BAAY,CAAC,IAAI,+BAAsB,CAAC,GAAG,EAAE,KAAK;;AAEpD,mCAAoB,WAAC,8DAAS,GAAG,EAAE;AACnC,wCAAwB;;AAE1B,kBAAI,QAAM;MACZ;cAGa,CAAsB;cAAK,WAAI,UAAQ,CAAC,CAAC;MAAC;;cAGlC,mBAAO,YAAY,CAAC;MAAK;;AAI5C,0DAAI,OAA+B;AACjC,+DAAO;;AAET,cAAO,kCAAa,SAAS,eAAe;MAC9C;;AAIE,cAAO,kCAAa,SAAS,eAAe;MAC9C;;cAGwC,WAAI,UAAQ;;iBAGpC,OAAgC;yCAAP;AACvC,kBAAI,aAAW,CAAC,OAAO;MACzB;kBAGwB,SAA0C;AAChE,cAAO,WAAI,MAAI,SAAC,SAAS;MAC3B;aAGS,GAAK,EAAE,MAAiB;iBAAtB;sBAAO;YAAoB;;AACpC,cAAO,WAAI,SAAO,CAAC,GAAG,EAAE,MAAM,aAAY,QAAQ;MACpD;gBAGe,MAAwB;0BAAtB;cAA2B,WAAI,YAAU,CAAC,MAAM;MAAC;kBAGjD,IAAyB;cAAK,WAAI,cAAY,CAAC,IAAI;MAAC;;AAKnE,yBAAY,CAAC,IAAI,kCAAoB,CAAC,MAAM,4DAAO,MAAM;AACzD,kCAAoB;MACtB;;AAGE,yBAAY,CAAC,IAAI,kCAAoB,CAAC,MAAM,8DAAS,MAAM;MAC7D;;;MAjLkB,UAAI,GAAG;;IAAmB;;MAGnB,UAAI,GAAG;;IAAyB;;MAGhC,UAAI,GAAG,IAAI,yBAAkB;;IAAE;kCA2BtC,KAAe;MAAI,UAAI,GAAG,KAAK;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6CC9DtC,KAAa;QAAQ,4CAAM;qBACpC,IAAI,IAAG,oCAAiB,CAAC,KAAK,IAAI,uCAAoB,CAAC,KAAK;EAAC;;qDAEpC,KAAa;AACxC,sCAAI,KAAK,GAAgB,MAAO,MAAK;AAErC,oBAAI,KAAK,GAAS;AAChB,YAAO,gDAAuB,CAC1B,KAAK,EAAE,kBAAY,AAAI,6CAAwB,wBAAC,KAAK;;AAG3D,yBAAI,KAAK,GAAc;AACrB,YAAO,oDAA2B,CAC9B,KAAK,EAAE,aAAS,IAAI,8CAAsB,CAAC,KAAK;;AAGtD,UAAO,MAAK;EACd;;kDAE0B,KAAa;AACrC,sCAAI,KAAK,GAAgB,MAAO,MAAK;AAErC,oBAAI,KAAK,GAAS;AAChB,YAAO,gDAAuB,CAAC,KAAK,EAAE;AACpC,YAAI,SAAS,AAAI,uDAAkC,wBAAC,KAAK;AACzD,aAAK,UAAQ,CAAC,SAAC,CAAC,EAAE,CAAC;AACjB,gBAAM,eAAC,oCAAiB,CAAC,CAAC,aAAK,oCAAiB,CAAC,CAAC;;AAEpD,cAAO,OAAM;;;AAIjB,yBAAI,KAAK,GAAc;AACrB,YAAO,oDAA2B,CAAC,KAAK,EAAE;AACxC,YAAI,SAAS,IAAI,6CAAiB;AAClC,iBAAS,UAAW,MAAK,EAAE;AACzB,gBAAM,IAAI,UAAC,oCAAiB,CAAC,OAAO;;AAEtC,cAAO,OAAM;;;AAIjB,UAAO,MAAK;EACd","file":"observable_map.ddc.js"}');
  // Exports:
  return {
    src__observable_map: src__observable_map,
    src__to_observable: src__to_observable
  };
});

//# sourceMappingURL=observable_map.ddc.js.map
