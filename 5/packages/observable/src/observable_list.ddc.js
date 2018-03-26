define(['dart_sdk', 'packages/observable/src/records', 'packages/observable/src/differs', 'packages/observable/src/change_notifier'], function(dart_sdk, records, differs, change_notifier) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__records = records.src__records;
  const src__differs = differs.src__differs;
  const src__observable = change_notifier.src__observable;
  const _root = Object.create(null);
  const src__observable_list = Object.create(_root);
  const $cast = dartx.cast;
  const $length = dartx.length;
  const $toList = dartx.toList;
  const $getRange = dartx.getRange;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $sublist = dartx.sublist;
  const $setAll = dartx.setAll;
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  const $removeRange = dartx.removeRange;
  const $setRange = dartx.setRange;
  const $isNotEmpty = dartx.isNotEmpty;
  const $replaceRange = dartx.replaceRange;
  const $retype = dartx.retype;
  const $insertAll = dartx.insertAll;
  const $insert = dartx.insert;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let ListOfListChangeRecord = () => (ListOfListChangeRecord = dart.constFn(core.List$(src__records.ListChangeRecord)))();
  const _list = Symbol('_list');
  const _listRecords = Symbol('_listRecords');
  const _listChanges = Symbol('_listChanges');
  const _notifyChangeLength = Symbol('_notifyChangeLength');
  const _notifyListChange = Symbol('_notifyListChange');
  const _rangeCheck = Symbol('_rangeCheck');
  let const$;
  let const$0;
  let const$1;
  const _is_ObservableList_default = Symbol('_is_ObservableList_default');
  src__observable_list.ObservableList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let ListChangeRecordOfE = () => (ListChangeRecordOfE = dart.constFn(src__records.ListChangeRecord$(E)))();
    let ListOfListChangeRecordOfE = () => (ListOfListChangeRecordOfE = dart.constFn(core.List$(ListChangeRecordOfE())))();
    let StreamControllerOfListOfListChangeRecordOfE = () => (StreamControllerOfListOfListChangeRecordOfE = dart.constFn(async.StreamController$(ListOfListChangeRecordOfE())))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let JSArrayOfListChangeRecordOfE = () => (JSArrayOfListChangeRecordOfE = dart.constFn(_interceptors.JSArray$(ListChangeRecordOfE())))();
    let UnmodifiableListViewOfListChangeRecordOfE = () => (UnmodifiableListViewOfListChangeRecordOfE = dart.constFn(collection.UnmodifiableListView$(ListChangeRecordOfE())))();
    const ListBase_Observable$ = class ListBase_Observable extends collection.ListBase$(E) {};
    (ListBase_Observable$.new = function() {
      src__observable.Observable$(src__records.ChangeRecord).new.call(this);
    }).prototype = ListBase_Observable$.prototype;
    dart.mixinMembers(ListBase_Observable$, src__observable.Observable$(src__records.ChangeRecord));
    class ObservableList extends ListBase_Observable$ {
      static castFrom(S, T, source) {
        return new (src__observable_list.ObservableList$(T))._spy(source[_list][$cast](T));
      }
      cast(T) {
        if (src__observable_list.ObservableList$(T).is(this)) {
          return src__observable_list.ObservableList$(T).as(this);
        }
        return this.retype(T);
      }
      retype(T) {
        return src__observable_list.ObservableList.castFrom(E, T, this);
      }
      get listChanges() {
        if (this[_listChanges] == null) {
          this[_listChanges] = StreamControllerOfListOfListChangeRecordOfE().broadcast({sync: true, onCancel: dart.fn(() => {
              this[_listChanges] = null;
            }, VoidToNull())});
        }
        return this[_listChanges].stream;
      }
      get hasListObservers() {
        return this[_listChanges] != null && dart.test(this[_listChanges].hasListener);
      }
      get length() {
        return this[_list][$length];
      }
      set length(value) {
        let len = this[_list][$length];
        if (len == value) return;
        this[_notifyChangeLength](len, value);
        if (dart.test(this.hasListObservers)) {
          if (dart.notNull(value) < dart.notNull(len)) {
            this[_notifyListChange](value, {removed: this[_list][$getRange](value, len)[$toList]()});
          } else {
            this[_notifyListChange](len, {addedCount: dart.notNull(value) - dart.notNull(len)});
          }
        }
        this[_list][$length] = value;
      }
      _get(index) {
        return this[_list][$_get](index);
      }
      _set(index, value) {
        E._check(value);
        let oldValue = this[_list][$_get](index);
        if (dart.test(this.hasListObservers) && !dart.equals(oldValue, value)) {
          this[_notifyListChange](index, {addedCount: 1, removed: JSArrayOfE().of([oldValue])});
        }
        this[_list][$_set](index, value);
        return value;
      }
      get isEmpty() {
        return super.isEmpty;
      }
      get isNotEmpty() {
        return super.isNotEmpty;
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        if (!core.List.is(iterable) && !core.Set.is(iterable)) {
          iterable = iterable[$toList]();
        }
        let length = iterable[$length];
        if (dart.test(this.hasListObservers) && dart.notNull(length) > 0) {
          this[_notifyListChange](index, {addedCount: length, removed: this[_list][$sublist](index, length)});
        }
        this[_list][$setAll](index, iterable);
      }
      add(value) {
        E._check(value);
        let len = this[_list][$length];
        this[_notifyChangeLength](len, dart.notNull(len) + 1);
        if (dart.test(this.hasListObservers)) {
          this[_notifyListChange](len, {addedCount: 1});
        }
        this[_list][$add](value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        let len = this[_list][$length];
        this[_list][$addAll](iterable);
        this[_notifyChangeLength](len, this[_list][$length]);
        let added = dart.notNull(this[_list][$length]) - dart.notNull(len);
        if (dart.test(this.hasListObservers) && added > 0) {
          this[_notifyListChange](len, {addedCount: added});
        }
      }
      remove(element) {
        for (let i = 0; i < dart.notNull(this.length); i++) {
          if (dart.equals(this._get(i), element)) {
            this.removeRange(i, i + 1);
            return true;
          }
        }
        return false;
      }
      removeRange(start, end) {
        this[_rangeCheck](start, end);
        let rangeLength = dart.notNull(end) - dart.notNull(start);
        let len = this[_list][$length];
        this[_notifyChangeLength](len, dart.notNull(len) - rangeLength);
        if (dart.test(this.hasListObservers) && rangeLength > 0) {
          this[_notifyListChange](start, {removed: this[_list][$getRange](start, end)[$toList]()});
        }
        this[_list][$removeRange](start, end);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this.length)) {
          dart.throw(new core.RangeError.range(index, 0, this.length));
        }
        if (!core.List.is(iterable) && !core.Set.is(iterable)) {
          iterable = iterable[$toList]();
        }
        let insertionLength = iterable[$length];
        let len = this[_list][$length];
        this[_list][$length] = dart.notNull(this[_list][$length]) + dart.notNull(insertionLength);
        this[_list][$setRange](dart.notNull(index) + dart.notNull(insertionLength), this.length, this, index);
        this[_list][$setAll](index, iterable);
        this[_notifyChangeLength](len, this[_list][$length]);
        if (dart.test(this.hasListObservers) && dart.notNull(insertionLength) > 0) {
          this[_notifyListChange](index, {addedCount: insertionLength});
        }
      }
      insert(index, element) {
        E._check(element);
        if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this.length)) {
          dart.throw(new core.RangeError.range(index, 0, this.length));
        }
        if (index == this.length) {
          this.add(element);
          return;
        }
        if (!core.int.is(index)) dart.throw(new core.ArgumentError.new(index));
        this[_list][$length] = dart.notNull(this[_list][$length]) + 1;
        this[_list][$setRange](dart.notNull(index) + 1, this.length, this, index);
        this[_notifyChangeLength](dart.notNull(this[_list][$length]) - 1, this[_list][$length]);
        if (dart.test(this.hasListObservers)) {
          this[_notifyListChange](index, {addedCount: 1});
        }
        this[_list][$_set](index, element);
      }
      removeAt(index) {
        let result = this._get(index);
        this.removeRange(index, dart.notNull(index) + 1);
        return result;
      }
      [_rangeCheck](start, end) {
        if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(this.length)) {
          dart.throw(new core.RangeError.range(start, 0, this.length));
        }
        if (dart.notNull(end) < dart.notNull(start) || dart.notNull(end) > dart.notNull(this.length)) {
          dart.throw(new core.RangeError.range(end, start, this.length));
        }
      }
      [_notifyListChange](index, opts) {
        let removed = opts && 'removed' in opts ? opts.removed : dart.constList([], E);
        ListOfE()._check(removed);
        let addedCount = opts && 'addedCount' in opts ? opts.addedCount : 0;
        if (!dart.test(this.hasListObservers)) return;
        if (this[_listRecords] == null) {
          this[_listRecords] = JSArrayOfListChangeRecordOfE().of([]);
          async.scheduleMicrotask(dart.bind(this, 'deliverListChanges'));
        }
        this[_listRecords][$add](ListChangeRecordOfE().new(this, index, {removed: removed, addedCount: addedCount}));
      }
      [_notifyChangeLength](oldValue, newValue) {
        this.notifyPropertyChange(core.int, const$ || (const$ = dart.const(core.Symbol.new('length'))), oldValue, newValue);
        this.notifyPropertyChange(core.bool, const$0 || (const$0 = dart.const(core.Symbol.new('isEmpty'))), oldValue === 0, newValue === 0);
        this.notifyPropertyChange(core.bool, const$1 || (const$1 = dart.const(core.Symbol.new('isNotEmpty'))), oldValue !== 0, newValue !== 0);
      }
      discardListChanges() {
        if (this[_listRecords] != null) this[_listRecords] = JSArrayOfListChangeRecordOfE().of([]);
      }
      deliverListChanges() {
        if (this[_listRecords] == null) return false;
        let records = src__differs.projectListSplices(E, this, this[_listRecords]);
        this[_listRecords] = null;
        if (dart.test(this.hasListObservers) && dart.test(records[$isNotEmpty])) {
          this[_listChanges].add(new (UnmodifiableListViewOfListChangeRecordOfE()).new(records));
          return true;
        }
        return false;
      }
      static calculateChangeRecords(E, oldValue, newValue) {
        return new (src__differs.ListDiffer$(E)).new().diff(oldValue, newValue);
      }
      static applyChangeRecords(previous, current, changeRecords) {
        if (previous == current) {
          dart.throw(new core.ArgumentError.new("can't use same list for previous and current"));
        }
        for (let change of changeRecords) {
          let addEnd = dart.notNull(change.index) + dart.notNull(change.addedCount);
          let removeEnd = dart.notNull(change.index) + dart.notNull(change.removed[$length]);
          let addedItems = current[$getRange](change.index, addEnd);
          previous[$replaceRange](change.index, removeEnd, addedItems);
        }
      }
    }
    (ObservableList.new = function(length) {
      if (length === void 0) length = null;
      this[_listRecords] = null;
      this[_listChanges] = null;
      this[_list] = length != null ? ListOfE().new(length) : JSArrayOfE().of([]);
      ObservableList.__proto__.new.call(this);
    }).prototype = ObservableList.prototype;
    (ObservableList.withLength = function(length) {
      ObservableList.new.call(this, length);
    }).prototype = ObservableList.prototype;
    (ObservableList.from = function(other) {
      this[_listRecords] = null;
      this[_listChanges] = null;
      this[_list] = ListOfE().from(other);
      ObservableList.__proto__.new.call(this);
    }).prototype = ObservableList.prototype;
    (ObservableList._spy = function(other) {
      this[_listRecords] = null;
      this[_listChanges] = null;
      this[_list] = other;
      ObservableList.__proto__.new.call(this);
    }).prototype = ObservableList.prototype;
    dart.addTypeTests(ObservableList);
    ObservableList.prototype[_is_ObservableList_default] = true;
    dart.setMethodSignature(ObservableList, () => ({
      __proto__: dart.getMethods(ObservableList.__proto__),
      cast: dart.gFnType(T => [src__observable_list.ObservableList$(T), []]),
      [$cast]: dart.gFnType(T => [src__observable_list.ObservableList$(T), []]),
      retype: dart.gFnType(T => [src__observable_list.ObservableList$(T), []]),
      [$retype]: dart.gFnType(T => [src__observable_list.ObservableList$(T), []]),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      setAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$setAll]: dart.fnType(dart.void, [core.int, core.Object]),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      [_rangeCheck]: dart.fnType(dart.void, [core.int, core.int]),
      [_notifyListChange]: dart.fnType(dart.void, [core.int], {removed: core.Object, addedCount: core.int}),
      [_notifyChangeLength]: dart.fnType(dart.void, [core.int, core.int]),
      discardListChanges: dart.fnType(dart.void, []),
      deliverListChanges: dart.fnType(core.bool, [])
    }));
    dart.setStaticMethodSignature(ObservableList, () => ({
      castFrom: dart.gFnType((S, T) => [src__observable_list.ObservableList$(T), [src__observable_list.ObservableList$(S)]]),
      calculateChangeRecords: dart.gFnType(E => [core.List$(src__records.ListChangeRecord$(E)), [core.List$(E), core.List$(E)]]),
      applyChangeRecords: dart.fnType(dart.void, [ListOfObject(), ListOfObject(), ListOfListChangeRecord()])
    }));
    dart.setGetterSignature(ObservableList, () => ({
      __proto__: dart.getGetters(ObservableList.__proto__),
      listChanges: dart.fnType(async.Stream$(core.List$(src__records.ListChangeRecord$(E))), []),
      hasListObservers: dart.fnType(core.bool, []),
      length: dart.fnType(core.int, []),
      [$length]: dart.fnType(core.int, [])
    }));
    dart.setSetterSignature(ObservableList, () => ({
      __proto__: dart.getSetters(ObservableList.__proto__),
      length: dart.fnType(dart.void, [core.int]),
      [$length]: dart.fnType(dart.void, [core.int])
    }));
    dart.setFieldSignature(ObservableList, () => ({
      __proto__: dart.getFields(ObservableList.__proto__),
      [_listRecords]: dart.fieldType(ListOfListChangeRecordOfE()),
      [_listChanges]: dart.fieldType(StreamControllerOfListOfListChangeRecordOfE()),
      [_list]: dart.finalFieldType(ListOfE())
    }));
    dart.defineExtensionMethods(ObservableList, [
      'cast',
      'retype',
      '_get',
      '_set',
      'setAll',
      'add',
      'addAll',
      'remove',
      'removeRange',
      'insertAll',
      'insert',
      'removeAt'
    ]);
    dart.defineExtensionAccessors(ObservableList, ['length', 'isEmpty', 'isNotEmpty']);
    return ObservableList;
  });
  src__observable_list.ObservableList = src__observable_list.ObservableList$();
  dart.addTypeTests(src__observable_list.ObservableList, _is_ObservableList_default);
  dart.trackLibraries("packages/observable/src/observable_list.ddc", {
    "package:observable/src/observable_list.dart": src__observable_list
  }, '{"version":3,"sourceRoot":"","sources":["observable_list.dart"],"names":[],"mappings":"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","file":"observable_list.ddc.js"}');
  // Exports:
  return {
    src__observable_list: src__observable_list
  };
});

//# sourceMappingURL=observable_list.ddc.js.map
