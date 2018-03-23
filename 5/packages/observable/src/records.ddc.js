define(['dart_sdk', 'packages/observable/src/internal', 'packages/collection/src/equality', 'packages/quiver/core'], function(dart_sdk, internal, equality, core) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__internal = internal.src__internal;
  const src__equality = equality.src__equality;
  const core$0 = core.core;
  const _root = Object.create(null);
  const src__records = Object.create(_root);
  const $length = dartx.length;
  const $getRange = dartx.getRange;
  const $removeRange = dartx.removeRange;
  const $insertAll = dartx.insertAll;
  const $_equals = dartx._equals;
  const $toString = dartx.toString;
  const $hashCode = dartx.hashCode;
  const $remove = dartx.remove;
  const $_set = dartx._set;
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core$.bool, [])))();
  src__records.ChangeRecord = class ChangeRecord extends core$.Object {};
  (src__records.ChangeRecord.new = function() {
  }).prototype = src__records.ChangeRecord.prototype;
  dart.addTypeTests(src__records.ChangeRecord);
  dart.defineLazy(src__records.ChangeRecord, {
    /*src__records.ChangeRecord.ANY*/get ANY() {
      return dart.constList([dart.const(new src__records.ChangeRecord.new())], src__records.ChangeRecord);
    },
    /*src__records.ChangeRecord.NONE*/get NONE() {
      return dart.constList([], src__records.ChangeRecord);
    }
  });
  const _assertValidState = Symbol('_assertValidState');
  let const$;
  let const$0;
  const _is_ListChangeRecord_default = Symbol('_is_ListChangeRecord_default');
  src__records.ListChangeRecord$ = dart.generic(E => {
    let ListChangeRecordOfE = () => (ListChangeRecordOfE = dart.constFn(src__records.ListChangeRecord$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core$.List$(E)))();
    class ListChangeRecord extends core$.Object {
      get addedCount() {
        return this[addedCount$];
      }
      set addedCount(value) {
        super.addedCount = value;
      }
      get index() {
        return this[index$];
      }
      set index(value) {
        super.index = value;
      }
      get object() {
        return this[object$];
      }
      set object(value) {
        super.object = value;
      }
      get removed() {
        return this[removed$];
      }
      set removed(value) {
        super.removed = value;
      }
      static new(object, index, opts) {
        let removed = opts && 'removed' in opts ? opts.removed : dart.constList([], E);
        let addedCount = opts && 'addedCount' in opts ? opts.addedCount : 0;
        return new (ListChangeRecordOfE()).__(object, index, removed, addedCount);
      }
      get added() {
        return this.addedCount === 0 ? dart.constList([], E) : this.object[$getRange](this.index, dart.notNull(this.index) + dart.notNull(this.addedCount));
      }
      apply(list) {
        ListOfE()._check(list);
        list[$removeRange](this.index, dart.notNull(this.index) + dart.notNull(this.removed[$length]));
        list[$insertAll](this.index, this.object[$getRange](this.index, dart.notNull(this.index) + dart.notNull(this.addedCount)));
      }
      [_assertValidState]() {
        if (!dart.test(dart.fn(() => {
          if (this.object == null) {
            dart.throw(new core$.ArgumentError.notNull('object'));
          }
          if (this.index == null) {
            dart.throw(new core$.ArgumentError.notNull('index'));
          }
          if (this.removed == null) {
            dart.throw(new core$.ArgumentError.notNull('removed'));
          }
          if (this.addedCount == null || dart.notNull(this.addedCount) < 0) {
            dart.throw(new core$.ArgumentError.new(dart.str`Invalid \`addedCount\`: ${this.addedCount}`));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed();
      }
      indexChanged(reference) {
        if (dart.notNull(reference) < dart.notNull(this.index)) return false;
        if (this.addedCount != this.removed[$length]) return true;
        return dart.notNull(reference) < dart.notNull(this.index) + dart.notNull(this.addedCount);
      }
      _equals(o) {
        if (o == null) return false;
        if (ListChangeRecordOfE().is(o)) {
          return this.object == o.object && this.index == o.index && this.addedCount == o.addedCount && dart.test((const$ || (const$ = dart.const(new src__equality.ListEquality.new()))).equals(this.removed, o.removed));
        }
        return false;
      }
      get hashCode() {
        return core$0.hash4(this.object, this.index, this.addedCount, (const$0 || (const$0 = dart.const(new src__equality.ListEquality.new()))).hash(this.removed));
      }
      toString() {
        return '' + dart.str`#<${dart.wrapType(src__records.ListChangeRecord)} index: ${this.index}, ` + dart.str`removed: ${this.removed}, ` + dart.str`addedCount: ${this.addedCount}>`;
      }
    }
    (ListChangeRecord.add = function(object, index, addedCount) {
      this[object$] = object;
      this[index$] = index;
      this[addedCount$] = addedCount;
      this[removed$] = dart.constList([], E);
      this[_assertValidState]();
    }).prototype = ListChangeRecord.prototype;
    (ListChangeRecord.remove = function(object, index, removed) {
      this[object$] = object;
      this[index$] = index;
      this[removed$] = src__internal.freezeInDevMode(E, removed);
      this[addedCount$] = 0;
      this[_assertValidState]();
    }).prototype = ListChangeRecord.prototype;
    (ListChangeRecord.replace = function(object, index, removed, addedCount) {
      if (addedCount === void 0) addedCount = null;
      this[object$] = object;
      this[index$] = index;
      this[removed$] = src__internal.freezeInDevMode(E, removed);
      this[addedCount$] = addedCount != null ? addedCount : removed[$length];
      this[_assertValidState]();
    }).prototype = ListChangeRecord.prototype;
    (ListChangeRecord.__ = function(object, index, removed, addedCount) {
      this[object$] = object;
      this[index$] = index;
      this[removed$] = removed;
      this[addedCount$] = addedCount;
      this[_assertValidState]();
    }).prototype = ListChangeRecord.prototype;
    dart.addTypeTests(ListChangeRecord);
    ListChangeRecord.prototype[_is_ListChangeRecord_default] = true;
    const addedCount$ = Symbol("ListChangeRecord.addedCount");
    const index$ = Symbol("ListChangeRecord.index");
    const object$ = Symbol("ListChangeRecord.object");
    const removed$ = Symbol("ListChangeRecord.removed");
    ListChangeRecord[dart.implements] = () => [src__records.ChangeRecord];
    dart.setMethodSignature(ListChangeRecord, () => ({
      __proto__: dart.getMethods(ListChangeRecord.__proto__),
      apply: dart.fnType(dart.void, [core$.Object]),
      [_assertValidState]: dart.fnType(dart.void, []),
      indexChanged: dart.fnType(core$.bool, [core$.int]),
      _equals: dart.fnType(core$.bool, [core$.Object]),
      [$_equals]: dart.fnType(core$.bool, [core$.Object]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, [])
    }));
    dart.setGetterSignature(ListChangeRecord, () => ({
      __proto__: dart.getGetters(ListChangeRecord.__proto__),
      added: dart.fnType(core$.Iterable$(E), []),
      hashCode: dart.fnType(core$.int, []),
      [$hashCode]: dart.fnType(core$.int, [])
    }));
    dart.setFieldSignature(ListChangeRecord, () => ({
      __proto__: dart.getFields(ListChangeRecord.__proto__),
      addedCount: dart.finalFieldType(core$.int),
      index: dart.finalFieldType(core$.int),
      object: dart.finalFieldType(ListOfE()),
      removed: dart.finalFieldType(ListOfE())
    }));
    dart.defineExtensionMethods(ListChangeRecord, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ListChangeRecord, ['hashCode']);
    return ListChangeRecord;
  });
  src__records.ListChangeRecord = src__records.ListChangeRecord$();
  dart.addTypeTests(src__records.ListChangeRecord, _is_ListChangeRecord_default);
  const _is_MapChangeRecord_default = Symbol('_is_MapChangeRecord_default');
  src__records.MapChangeRecord$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core$.Map$(K, V)))();
    let MapChangeRecordOfK$V = () => (MapChangeRecordOfK$V = dart.constFn(src__records.MapChangeRecord$(K, V)))();
    class MapChangeRecord extends core$.Object {
      get key() {
        return this[key$];
      }
      set key(value) {
        super.key = value;
      }
      get oldValue() {
        return this[oldValue$];
      }
      set oldValue(value) {
        super.oldValue = value;
      }
      get newValue() {
        return this[newValue$];
      }
      set newValue(value) {
        super.newValue = value;
      }
      get isInsert() {
        return this[isInsert];
      }
      set isInsert(value) {
        super.isInsert = value;
      }
      get isRemove() {
        return this[isRemove];
      }
      set isRemove(value) {
        super.isRemove = value;
      }
      apply(map) {
        MapOfK$V()._check(map);
        if (dart.test(this.isRemove)) {
          map[$remove](this.key);
        } else {
          map[$_set](this.key, this.newValue);
        }
      }
      _equals(o) {
        if (o == null) return false;
        if (MapChangeRecordOfK$V().is(o)) {
          return dart.equals(this.key, o.key) && dart.equals(this.oldValue, o.oldValue) && dart.equals(this.newValue, o.newValue) && this.isInsert == o.isInsert && this.isRemove == o.isRemove;
        }
        return false;
      }
      get hashCode() {
        return core$0.hashObjects([this.key, this.oldValue, this.newValue, this.isInsert, this.isRemove]);
      }
      toString() {
        let kind = dart.test(this.isInsert) ? 'insert' : dart.test(this.isRemove) ? 'remove' : 'set';
        return dart.str`#<MapChangeRecord ${kind} ${this.key} from ${this.oldValue} to ${this.newValue}`;
      }
    }
    (MapChangeRecord.new = function(key, oldValue, newValue) {
      this[key$] = key;
      this[oldValue$] = oldValue;
      this[newValue$] = newValue;
      this[isInsert] = false;
      this[isRemove] = false;
    }).prototype = MapChangeRecord.prototype;
    (MapChangeRecord.insert = function(key, newValue) {
      this[key$] = key;
      this[newValue$] = newValue;
      this[isInsert] = true;
      this[isRemove] = false;
      this[oldValue$] = null;
    }).prototype = MapChangeRecord.prototype;
    (MapChangeRecord.remove = function(key, oldValue) {
      this[key$] = key;
      this[oldValue$] = oldValue;
      this[isInsert] = false;
      this[isRemove] = true;
      this[newValue$] = null;
    }).prototype = MapChangeRecord.prototype;
    dart.addTypeTests(MapChangeRecord);
    MapChangeRecord.prototype[_is_MapChangeRecord_default] = true;
    const key$ = Symbol("MapChangeRecord.key");
    const oldValue$ = Symbol("MapChangeRecord.oldValue");
    const newValue$ = Symbol("MapChangeRecord.newValue");
    const isInsert = Symbol("MapChangeRecord.isInsert");
    const isRemove = Symbol("MapChangeRecord.isRemove");
    MapChangeRecord[dart.implements] = () => [src__records.ChangeRecord];
    dart.setMethodSignature(MapChangeRecord, () => ({
      __proto__: dart.getMethods(MapChangeRecord.__proto__),
      apply: dart.fnType(dart.void, [core$.Object]),
      _equals: dart.fnType(core$.bool, [core$.Object]),
      [$_equals]: dart.fnType(core$.bool, [core$.Object]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, [])
    }));
    dart.setGetterSignature(MapChangeRecord, () => ({
      __proto__: dart.getGetters(MapChangeRecord.__proto__),
      hashCode: dart.fnType(core$.int, []),
      [$hashCode]: dart.fnType(core$.int, [])
    }));
    dart.setFieldSignature(MapChangeRecord, () => ({
      __proto__: dart.getFields(MapChangeRecord.__proto__),
      key: dart.finalFieldType(K),
      oldValue: dart.finalFieldType(V),
      newValue: dart.finalFieldType(V),
      isInsert: dart.finalFieldType(core$.bool),
      isRemove: dart.finalFieldType(core$.bool)
    }));
    dart.defineExtensionMethods(MapChangeRecord, ['_equals', 'toString']);
    dart.defineExtensionAccessors(MapChangeRecord, ['hashCode']);
    return MapChangeRecord;
  });
  src__records.MapChangeRecord = src__records.MapChangeRecord$();
  dart.addTypeTests(src__records.MapChangeRecord, _is_MapChangeRecord_default);
  const _is_PropertyChangeRecord_default = Symbol('_is_PropertyChangeRecord_default');
  src__records.PropertyChangeRecord$ = dart.generic(T => {
    class PropertyChangeRecord extends core$.Object {
      get object() {
        return this[object$];
      }
      set object(value) {
        super.object = value;
      }
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get oldValue() {
        return this[oldValue$];
      }
      set oldValue(value) {
        super.oldValue = value;
      }
      get newValue() {
        return this[newValue$];
      }
      set newValue(value) {
        super.newValue = value;
      }
      toString() {
        return '' + dart.str`#<${dart.wrapType(src__records.PropertyChangeRecord)} ${this.name} from ${this.oldValue} to: ${this.newValue}`;
      }
    }
    (PropertyChangeRecord.new = function(object, name, oldValue, newValue) {
      this[object$] = object;
      this[name$] = name;
      this[oldValue$] = oldValue;
      this[newValue$] = newValue;
    }).prototype = PropertyChangeRecord.prototype;
    dart.addTypeTests(PropertyChangeRecord);
    PropertyChangeRecord.prototype[_is_PropertyChangeRecord_default] = true;
    const object$ = Symbol("PropertyChangeRecord.object");
    const name$ = Symbol("PropertyChangeRecord.name");
    const oldValue$ = Symbol("PropertyChangeRecord.oldValue");
    const newValue$ = Symbol("PropertyChangeRecord.newValue");
    PropertyChangeRecord[dart.implements] = () => [src__records.ChangeRecord];
    dart.setMethodSignature(PropertyChangeRecord, () => ({
      __proto__: dart.getMethods(PropertyChangeRecord.__proto__),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, [])
    }));
    dart.setFieldSignature(PropertyChangeRecord, () => ({
      __proto__: dart.getFields(PropertyChangeRecord.__proto__),
      object: dart.finalFieldType(core$.Object),
      name: dart.finalFieldType(core$.Symbol),
      oldValue: dart.finalFieldType(T),
      newValue: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(PropertyChangeRecord, ['toString']);
    return PropertyChangeRecord;
  });
  src__records.PropertyChangeRecord = src__records.PropertyChangeRecord$();
  dart.addTypeTests(src__records.PropertyChangeRecord, _is_PropertyChangeRecord_default);
  dart.trackLibraries("packages/observable/src/records.ddc", {
    "package:observable/src/records.dart": src__records
  }, '{"version":3,"sourceRoot":"","sources":["records.dart","records/list_change_record.dart","records/map_change_record.dart","records/property_change_record.dart"],"names":[],"mappings":"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","file":"records.ddc.js"}');
  // Exports:
  return {
    src__records: src__records
  };
});

//# sourceMappingURL=records.ddc.js.map
