define(['dart_sdk', 'packages/observable/src/records', 'packages/observable/src/change_notifier', 'packages/angular_components/src/model/selection/interfaces/selectable'], function(dart_sdk, records, change_notifier, selectable) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__records = records.src__records;
  const src__observable = change_notifier.src__observable;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const _root = Object.create(null);
  const src__model__selection__delegating_selection_model = Object.create(_root);
  const src__model__selection__radio_group_single_selection_model = Object.create(_root);
  const model__selection__selection_model = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $first = dartx.first;
  const $isNotEmpty = dartx.isNotEmpty;
  const $last = dartx.last;
  const $hashCode = dartx.hashCode;
  const $toList = dartx.toList;
  const $where = dartx.where;
  const $add = dartx.add;
  const $toString = dartx.toString;
  const $clear = dartx.clear;
  let ObjectToObject = () => (ObjectToObject = dart.constFn(dart.fnType(core.Object, [core.Object])))();
  let ObservableOfChangeRecord = () => (ObservableOfChangeRecord = dart.constFn(src__observable.Observable$(src__records.ChangeRecord)))();
  let ListOfChangeRecord = () => (ListOfChangeRecord = dart.constFn(core.List$(src__records.ChangeRecord)))();
  let StreamOfListOfChangeRecord = () => (StreamOfListOfChangeRecord = dart.constFn(async.Stream$(ListOfChangeRecord())))();
  let StreamControllerOfSelectableChangeRecord = () => (StreamControllerOfSelectableChangeRecord = dart.constFn(async.StreamController$(model__selection__selection_model.SelectableChangeRecord)))();
  const _delegateModel = Symbol('_delegateModel');
  const _is_DelegatingSelectionModel_default = Symbol('_is_DelegatingSelectionModel_default');
  src__model__selection__delegating_selection_model.DelegatingSelectionModel$ = dart.generic(T => {
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    class DelegatingSelectionModel extends core.Object {
      clear() {
        this[_delegateModel].clear();
      }
      select(value) {
        T._check(value);
        return this[_delegateModel].select(value);
      }
      deselect(value) {
        T._check(value);
        return this[_delegateModel].deselect(value);
      }
      isSelected(value) {
        T._check(value);
        return this[_delegateModel].isSelected(value);
      }
      get isEmpty() {
        return this[_delegateModel].isEmpty;
      }
      get isNotEmpty() {
        return this[_delegateModel].isNotEmpty;
      }
      get selectedValues() {
        return this[_delegateModel].selectedValues;
      }
      get changes() {
        return this[_delegateModel].changes;
      }
      deliverChanges() {
        return this[_delegateModel].deliverChanges();
      }
      notifyChange(changeRecord) {
        if (changeRecord === void 0) changeRecord = null;
        this[_delegateModel].notifyChange(changeRecord);
      }
      notifyPropertyChange(T, field, oldValue, newValue) {
        this[_delegateModel].notifyPropertyChange(T, field, oldValue, newValue);
        return newValue;
      }
      get hasObservers() {
        return this[_delegateModel].hasObservers;
      }
      observed() {
        return this[_delegateModel].observed();
      }
      unobserved() {
        return this[_delegateModel].unobserved();
      }
      deliverSelectionChanges() {
        return this[_delegateModel].deliverSelectionChanges();
      }
      notifySelectionChange(opts) {
        let added = opts && 'added' in opts ? opts.added : dart.constList([], T);
        IterableOfT()._check(added);
        let removed = opts && 'removed' in opts ? opts.removed : dart.constList([], T);
        IterableOfT()._check(removed);
        this[_delegateModel].notifySelectionChange({added: added, removed: removed});
      }
      get hasSelectionObservers() {
        return this[_delegateModel].hasSelectionObservers;
      }
      get selectionChanges() {
        return this[_delegateModel].selectionChanges;
      }
    }
    (DelegatingSelectionModel.new = function(delegateModel) {
      this[_delegateModel] = delegateModel;
    }).prototype = DelegatingSelectionModel.prototype;
    dart.addTypeTests(DelegatingSelectionModel);
    DelegatingSelectionModel.prototype[_is_DelegatingSelectionModel_default] = true;
    DelegatingSelectionModel[dart.implements] = () => [SelectionModelOfT()];
    dart.setMethodSignature(DelegatingSelectionModel, () => ({
      __proto__: dart.getMethods(DelegatingSelectionModel.__proto__),
      clear: dart.fnType(dart.void, []),
      select: dart.fnType(core.bool, [core.Object]),
      deselect: dart.fnType(core.bool, [core.Object]),
      isSelected: dart.fnType(core.bool, [core.Object]),
      deliverChanges: dart.fnType(core.bool, []),
      notifyChange: dart.fnType(dart.void, [], [src__records.ChangeRecord]),
      notifyPropertyChange: dart.gFnType(T => [T, [core.Symbol, T, T]]),
      observed: dart.fnType(dart.void, []),
      unobserved: dart.fnType(dart.void, []),
      deliverSelectionChanges: dart.fnType(core.bool, []),
      notifySelectionChange: dart.fnType(dart.void, [], {added: core.Object, removed: core.Object})
    }));
    dart.setGetterSignature(DelegatingSelectionModel, () => ({
      __proto__: dart.getGetters(DelegatingSelectionModel.__proto__),
      isEmpty: dart.fnType(core.bool, []),
      isNotEmpty: dart.fnType(core.bool, []),
      selectedValues: dart.fnType(core.Iterable$(T), []),
      changes: dart.fnType(async.Stream$(core.List$(src__records.ChangeRecord)), []),
      hasObservers: dart.fnType(core.bool, []),
      hasSelectionObservers: dart.fnType(core.bool, []),
      selectionChanges: dart.fnType(async.Stream$(core.List$(model__selection__selection_model.SelectionChangeRecord$(T))), [])
    }));
    dart.setFieldSignature(DelegatingSelectionModel, () => ({
      __proto__: dart.getFields(DelegatingSelectionModel.__proto__),
      [_delegateModel]: dart.finalFieldType(SelectionModelOfT())
    }));
    return DelegatingSelectionModel;
  });
  src__model__selection__delegating_selection_model.DelegatingSelectionModel = src__model__selection__delegating_selection_model.DelegatingSelectionModel$();
  dart.addTypeTests(src__model__selection__delegating_selection_model.DelegatingSelectionModel, _is_DelegatingSelectionModel_default);
  const _is_DelegatingMultiSelectionModel_default = Symbol('_is_DelegatingMultiSelectionModel_default');
  src__model__selection__delegating_selection_model.DelegatingMultiSelectionModel$ = dart.generic(T => {
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let MultiSelectionModelOfT = () => (MultiSelectionModelOfT = dart.constFn(model__selection__selection_model.MultiSelectionModel$(T)))();
    class DelegatingMultiSelectionModel extends src__model__selection__delegating_selection_model.DelegatingSelectionModel$(T) {
      selectAll(values) {
        IterableOfT()._check(values);
        MultiSelectionModelOfT().as(this[_delegateModel]).selectAll(values);
      }
      deselectAll(values) {
        IterableOfT()._check(values);
        MultiSelectionModelOfT().as(this[_delegateModel]).deselectAll(values);
      }
    }
    (DelegatingMultiSelectionModel.new = function(delegateModel) {
      DelegatingMultiSelectionModel.__proto__.new.call(this, delegateModel);
    }).prototype = DelegatingMultiSelectionModel.prototype;
    dart.addTypeTests(DelegatingMultiSelectionModel);
    DelegatingMultiSelectionModel.prototype[_is_DelegatingMultiSelectionModel_default] = true;
    DelegatingMultiSelectionModel[dart.implements] = () => [MultiSelectionModelOfT()];
    dart.setMethodSignature(DelegatingMultiSelectionModel, () => ({
      __proto__: dart.getMethods(DelegatingMultiSelectionModel.__proto__),
      selectAll: dart.fnType(dart.void, [core.Object]),
      deselectAll: dart.fnType(dart.void, [core.Object])
    }));
    return DelegatingMultiSelectionModel;
  });
  src__model__selection__delegating_selection_model.DelegatingMultiSelectionModel = src__model__selection__delegating_selection_model.DelegatingMultiSelectionModel$();
  dart.addTypeTests(src__model__selection__delegating_selection_model.DelegatingMultiSelectionModel, _is_DelegatingMultiSelectionModel_default);
  const _is_RadioGroupSingleSelectionModel_default = Symbol('_is_RadioGroupSingleSelectionModel_default');
  src__model__selection__radio_group_single_selection_model.RadioGroupSingleSelectionModel$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    class RadioGroupSingleSelectionModel extends src__model__selection__delegating_selection_model.DelegatingSelectionModel$(T) {
      clear() {}
      deselect(value) {
        T._check(value);
        return false;
      }
      get selectedValue() {
        return dart.test(this.selectedValues[$isEmpty]) ? null : this.selectedValues[$first];
      }
    }
    (RadioGroupSingleSelectionModel.new = function(initialValue) {
      if (initialValue === void 0) initialValue = null;
      RadioGroupSingleSelectionModel.__proto__.new.call(this, SelectionModelOfT().withList({selectedValues: initialValue == null ? dart.constList([], T) : JSArrayOfT().of([initialValue])}));
    }).prototype = RadioGroupSingleSelectionModel.prototype;
    dart.addTypeTests(RadioGroupSingleSelectionModel);
    RadioGroupSingleSelectionModel.prototype[_is_RadioGroupSingleSelectionModel_default] = true;
    dart.setMethodSignature(RadioGroupSingleSelectionModel, () => ({
      __proto__: dart.getMethods(RadioGroupSingleSelectionModel.__proto__),
      deselect: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(RadioGroupSingleSelectionModel, () => ({
      __proto__: dart.getGetters(RadioGroupSingleSelectionModel.__proto__),
      selectedValue: dart.fnType(T, [])
    }));
    return RadioGroupSingleSelectionModel;
  });
  src__model__selection__radio_group_single_selection_model.RadioGroupSingleSelectionModel = src__model__selection__radio_group_single_selection_model.RadioGroupSingleSelectionModel$();
  dart.addTypeTests(src__model__selection__radio_group_single_selection_model.RadioGroupSingleSelectionModel, _is_RadioGroupSingleSelectionModel_default);
  model__selection__selection_model.KeyProvider$ = dart.generic(T => {
    const KeyProvider = dart.typedef('KeyProvider', () => dart.fnType(core.Object, [T]));
    return KeyProvider;
  });
  model__selection__selection_model.KeyProvider = model__selection__selection_model.KeyProvider$();
  model__selection__selection_model.MatchCallback = dart.typedef('MatchCallback', () => dart.fnType(async.Future$(core.List), [core.String]));
  model__selection__selection_model._defaultKeyProvider = function(o) {
    return o;
  };
  dart.fn(model__selection__selection_model._defaultKeyProvider, ObjectToObject());
  const _is_SelectionModel_default = Symbol('_is_SelectionModel_default');
  model__selection__selection_model.SelectionModel$ = dart.generic(T => {
    let _NoopSelectionModelImplOfT = () => (_NoopSelectionModelImplOfT = dart.constFn(model__selection__selection_model._NoopSelectionModelImpl$(T)))();
    let _MultiSelectionModelImplOfT = () => (_MultiSelectionModelImplOfT = dart.constFn(model__selection__selection_model._MultiSelectionModelImpl$(T)))();
    let _SingleSelectionModelImplOfT = () => (_SingleSelectionModelImplOfT = dart.constFn(model__selection__selection_model._SingleSelectionModelImpl$(T)))();
    let SelectionObservableOfT = () => (SelectionObservableOfT = dart.constFn(model__selection__selection_model.SelectionObservable$(T)))();
    class SelectionModel extends core.Object {
      static new() {
        return new (_NoopSelectionModelImplOfT()).new();
      }
      static withList(opts) {
        let selectedValues = opts && 'selectedValues' in opts ? opts.selectedValues : dart.constList([], T);
        let keyProvider = opts && 'keyProvider' in opts ? opts.keyProvider : model__selection__selection_model._defaultKeyProvider;
        let allowMulti = opts && 'allowMulti' in opts ? opts.allowMulti : false;
        if (selectedValues == null) {
          dart.throw(new core.ArgumentError.notNull('selectedValues'));
        }
        if (dart.test(allowMulti)) {
          return new (_MultiSelectionModelImplOfT()).new(selectedValues, keyProvider);
        } else {
          return new (_SingleSelectionModelImplOfT()).new(dart.test(selectedValues[$isNotEmpty]) ? selectedValues[$last] : null, keyProvider);
        }
      }
      get isNotEmpty() {
        return !dart.test(this.isEmpty);
      }
    }
    (SelectionModel[dart.mixinNew] = function() {
    }).prototype = SelectionModel.prototype;
    dart.addTypeTests(SelectionModel);
    SelectionModel.prototype[_is_SelectionModel_default] = true;
    SelectionModel[dart.implements] = () => [ObservableOfChangeRecord(), SelectionObservableOfT()];
    dart.setGetterSignature(SelectionModel, () => ({
      __proto__: dart.getGetters(SelectionModel.__proto__),
      isNotEmpty: dart.fnType(core.bool, [])
    }));
    return SelectionModel;
  });
  model__selection__selection_model.SelectionModel = model__selection__selection_model.SelectionModel$();
  dart.addTypeTests(model__selection__selection_model.SelectionModel, _is_SelectionModel_default);
  const _is_MultiSelectionModel_default = Symbol('_is_MultiSelectionModel_default');
  model__selection__selection_model.MultiSelectionModel$ = dart.generic(T => {
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let MultiSelectionModelOfT = () => (MultiSelectionModelOfT = dart.constFn(model__selection__selection_model.MultiSelectionModel$(T)))();
    class MultiSelectionModel extends model__selection__selection_model.SelectionModel$(T) {
      static new(opts) {
        let selectedValues = opts && 'selectedValues' in opts ? opts.selectedValues : dart.constList([], T);
        let keyProvider = opts && 'keyProvider' in opts ? opts.keyProvider : model__selection__selection_model._defaultKeyProvider;
        return MultiSelectionModelOfT()._check(SelectionModelOfT().withList({selectedValues: selectedValues, keyProvider: keyProvider, allowMulti: true}));
      }
    }
    dart.addTypeTests(MultiSelectionModel);
    MultiSelectionModel.prototype[_is_MultiSelectionModel_default] = true;
    return MultiSelectionModel;
  });
  model__selection__selection_model.MultiSelectionModel = model__selection__selection_model.MultiSelectionModel$();
  dart.addTypeTests(model__selection__selection_model.MultiSelectionModel, _is_MultiSelectionModel_default);
  const _is_SelectionChangeRecord_default = Symbol('_is_SelectionChangeRecord_default');
  model__selection__selection_model.SelectionChangeRecord$ = dart.generic(T => {
    let _SelectionChangeRecordImplOfT = () => (_SelectionChangeRecordImplOfT = dart.constFn(model__selection__selection_model._SelectionChangeRecordImpl$(T)))();
    class SelectionChangeRecord extends src__records.ChangeRecord {
      static new(opts) {
        return _SelectionChangeRecordImplOfT().new(opts);
      }
    }
    dart.addTypeTests(SelectionChangeRecord);
    SelectionChangeRecord.prototype[_is_SelectionChangeRecord_default] = true;
    return SelectionChangeRecord;
  });
  model__selection__selection_model.SelectionChangeRecord = model__selection__selection_model.SelectionChangeRecord$();
  dart.addTypeTests(model__selection__selection_model.SelectionChangeRecord, _is_SelectionChangeRecord_default);
  const _is_SelectableChangeRecord_default = Symbol('_is_SelectableChangeRecord_default');
  model__selection__selection_model.SelectableChangeRecord$ = dart.generic(T => {
    let _SelectableChangeRecordImplOfT = () => (_SelectableChangeRecordImplOfT = dart.constFn(model__selection__selection_model._SelectableChangeRecordImpl$(T)))();
    class SelectableChangeRecord extends src__records.ChangeRecord {
      static new() {
        return new (_SelectableChangeRecordImplOfT()).new();
      }
    }
    dart.addTypeTests(SelectableChangeRecord);
    SelectableChangeRecord.prototype[_is_SelectableChangeRecord_default] = true;
    return SelectableChangeRecord;
  });
  model__selection__selection_model.SelectableChangeRecord = model__selection__selection_model.SelectableChangeRecord$();
  dart.addTypeTests(model__selection__selection_model.SelectableChangeRecord, _is_SelectableChangeRecord_default);
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  const _selectionChangeController = Symbol('_selectionChangeController');
  const _selectionChangeRecords = Symbol('_selectionChangeRecords');
  const _is_SelectionChangeNotifier_default = Symbol('_is_SelectionChangeNotifier_default');
  model__selection__selection_model.SelectionChangeNotifier$ = dart.generic(T => {
    let SelectionChangeRecordOfT = () => (SelectionChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(T)))();
    let UnmodifiableListViewOfSelectionChangeRecordOfT = () => (UnmodifiableListViewOfSelectionChangeRecordOfT = dart.constFn(collection.UnmodifiableListView$(SelectionChangeRecordOfT())))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let JSArrayOfSelectionChangeRecordOfT = () => (JSArrayOfSelectionChangeRecordOfT = dart.constFn(_interceptors.JSArray$(SelectionChangeRecordOfT())))();
    let ListOfSelectionChangeRecordOfT = () => (ListOfSelectionChangeRecordOfT = dart.constFn(core.List$(SelectionChangeRecordOfT())))();
    let StreamControllerOfListOfSelectionChangeRecordOfT = () => (StreamControllerOfListOfSelectionChangeRecordOfT = dart.constFn(async.StreamController$(ListOfSelectionChangeRecordOfT())))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    class SelectionChangeNotifier extends core.Object {
      deliverSelectionChanges() {
        if (dart.test(this.hasSelectionObservers) && this[_selectionChangeRecords] != null && dart.test(this[_selectionChangeRecords][$isNotEmpty])) {
          let records = new (UnmodifiableListViewOfSelectionChangeRecordOfT()).new(this[_selectionChangeRecords]);
          this[_selectionChangeRecords] = null;
          this[_selectionChangeController].add(records);
          return true;
        } else {
          return false;
        }
      }
      notifySelectionChange(opts) {
        let added = opts && 'added' in opts ? opts.added : dart.constList([], T);
        IterableOfT()._check(added);
        let removed = opts && 'removed' in opts ? opts.removed : dart.constList([], T);
        IterableOfT()._check(removed);
        if (dart.test(this.hasSelectionObservers)) {
          let record = SelectionChangeRecordOfT().new({added: added, removed: removed});
          if (this[_selectionChangeRecords] == null) {
            this[_selectionChangeRecords] = JSArrayOfSelectionChangeRecordOfT().of([]);
            async.scheduleMicrotask(dart.bind(this, 'deliverSelectionChanges'));
          }
          this[_selectionChangeRecords][$add](record);
        }
      }
      get hasSelectionObservers() {
        return this[_selectionChangeController] != null && dart.test(this[_selectionChangeController].hasListener);
      }
      get selectionChanges() {
        if (this[_selectionChangeController] == null) {
          this[_selectionChangeController] = StreamControllerOfListOfSelectionChangeRecordOfT().broadcast({sync: true});
        }
        return this[_selectionChangeController].stream;
      }
    }
    (SelectionChangeNotifier.new = function() {
      this[_selectionChangeController] = null;
      this[_selectionChangeRecords] = null;
    }).prototype = SelectionChangeNotifier.prototype;
    dart.addTypeTests(SelectionChangeNotifier);
    SelectionChangeNotifier.prototype[_is_SelectionChangeNotifier_default] = true;
    SelectionChangeNotifier[dart.implements] = () => [SelectionModelOfT()];
    dart.setMethodSignature(SelectionChangeNotifier, () => ({
      __proto__: dart.getMethods(SelectionChangeNotifier.__proto__),
      deliverSelectionChanges: dart.fnType(core.bool, []),
      notifySelectionChange: dart.fnType(dart.void, [], {added: core.Object, removed: core.Object})
    }));
    dart.setGetterSignature(SelectionChangeNotifier, () => ({
      __proto__: dart.getGetters(SelectionChangeNotifier.__proto__),
      hasSelectionObservers: dart.fnType(core.bool, []),
      selectionChanges: dart.fnType(async.Stream$(core.List$(model__selection__selection_model.SelectionChangeRecord$(T))), [])
    }));
    dart.setFieldSignature(SelectionChangeNotifier, () => ({
      __proto__: dart.getFields(SelectionChangeNotifier.__proto__),
      [_selectionChangeController]: dart.fieldType(StreamControllerOfListOfSelectionChangeRecordOfT()),
      [_selectionChangeRecords]: dart.fieldType(ListOfSelectionChangeRecordOfT())
    }));
    return SelectionChangeNotifier;
  });
  model__selection__selection_model.SelectionChangeNotifier = model__selection__selection_model.SelectionChangeNotifier$();
  dart.addTypeTests(model__selection__selection_model.SelectionChangeNotifier, _is_SelectionChangeNotifier_default);
  const _is__MultiSelectionModelImpl_default = Symbol('_is__MultiSelectionModelImpl_default');
  model__selection__selection_model._MultiSelectionModelImpl$ = dart.generic(T => {
    let TAndTTobool = () => (TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    let TToint = () => (TToint = dart.constFn(dart.fnType(core.int, [T])))();
    let LinkedHashSetOfT = () => (LinkedHashSetOfT = dart.constFn(collection.LinkedHashSet$(T)))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let TTobool = () => (TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    let MultiSelectionModelOfT = () => (MultiSelectionModelOfT = dart.constFn(model__selection__selection_model.MultiSelectionModel$(T)))();
    const Observable_SelectionChangeNotifier$ = class Observable_SelectionChangeNotifier extends src__observable.Observable$(src__records.ChangeRecord) {};
    (Observable_SelectionChangeNotifier$.new = function() {
      model__selection__selection_model.SelectionChangeNotifier$(T).new.call(this);
      Observable_SelectionChangeNotifier$.__proto__.new.call(this);
    }).prototype = Observable_SelectionChangeNotifier$.prototype;
    dart.mixinMembers(Observable_SelectionChangeNotifier$, model__selection__selection_model.SelectionChangeNotifier$(T));
    class _MultiSelectionModelImpl extends Observable_SelectionChangeNotifier$ {
      clear() {
        if (dart.test(this.selectedValues.isNotEmpty)) {
          let removedItems = this.selectedValues.toList({growable: false});
          this.selectedValues.clear();
          this.notifyPropertyChange(core.bool, const$ || (const$ = dart.const(core.Symbol.new('isEmpty'))), false, true);
          this.notifyPropertyChange(core.bool, const$0 || (const$0 = dart.const(core.Symbol.new('isNotEmpty'))), true, false);
          this.notifySelectionChange({removed: removedItems});
        }
      }
      deselect(value) {
        T._check(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.new());
        }
        if (dart.test(this.selectedValues.remove(value))) {
          if (dart.test(this.isEmpty)) {
            this.notifyPropertyChange(core.bool, const$1 || (const$1 = dart.const(core.Symbol.new('isEmpty'))), false, true);
            this.notifyPropertyChange(core.bool, const$2 || (const$2 = dart.const(core.Symbol.new('isNotEmpty'))), true, false);
          }
          this.notifySelectionChange({removed: JSArrayOfT().of([value])});
          return true;
        }
        return false;
      }
      select(value) {
        T._check(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.new());
        }
        if (dart.test(this.selectedValues.add(value))) {
          if (this.selectedValues.length === 1) {
            this.notifyPropertyChange(core.bool, const$3 || (const$3 = dart.const(core.Symbol.new('isEmpty'))), true, false);
            this.notifyPropertyChange(core.bool, const$4 || (const$4 = dart.const(core.Symbol.new('isNotEmpty'))), false, true);
          }
          this.notifySelectionChange({added: JSArrayOfT().of([value])});
          return true;
        } else {
          return false;
        }
      }
      selectAll(values) {
        IterableOfT()._check(values);
        if (values == null) {
          dart.throw(new core.ArgumentError.new());
        }
        let toAdd = values[$where](dart.fn(v => !dart.test(this.selectedValues.contains(v)), TTobool()))[$toList]();
        if (dart.test(toAdd[$isEmpty])) return;
        let wasEmpty = this.isEmpty;
        this.selectedValues.addAll(toAdd);
        if (dart.test(wasEmpty) && dart.test(this.isNotEmpty)) {
          this.notifyPropertyChange(core.bool, const$5 || (const$5 = dart.const(core.Symbol.new('isEmpty'))), true, false);
          this.notifyPropertyChange(core.bool, const$6 || (const$6 = dart.const(core.Symbol.new('isNotEmpty'))), false, true);
        }
        this.notifySelectionChange({added: toAdd});
      }
      deselectAll(values) {
        IterableOfT()._check(values);
        if (values == null) {
          dart.throw(new core.ArgumentError.new());
        }
        let toRemove = values[$where](dart.fn(v => this.selectedValues.contains(v), TTobool()))[$toList]();
        if (dart.test(toRemove[$isEmpty])) return;
        let wasNotEmpty = this.isNotEmpty;
        this.selectedValues.removeAll(toRemove);
        if (dart.test(wasNotEmpty) && dart.test(this.isEmpty)) {
          this.notifyPropertyChange(core.bool, const$7 || (const$7 = dart.const(core.Symbol.new('isEmpty'))), false, true);
          this.notifyPropertyChange(core.bool, const$8 || (const$8 = dart.const(core.Symbol.new('isNotEmpty'))), true, false);
        }
        this.notifySelectionChange({removed: toRemove});
      }
      isSelected(value) {
        T._check(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.new());
        }
        return this.selectedValues.contains(value);
      }
      get isEmpty() {
        return this.selectedValues.isEmpty;
      }
      get isNotEmpty() {
        return this.selectedValues.isNotEmpty;
      }
    }
    (_MultiSelectionModelImpl.new = function(initialSelection, keyProvider) {
      let _ = LinkedHashSetOfT().new({equals: dart.fn((a, b) => dart.equals(keyProvider(a), keyProvider(b)), TAndTTobool()), hashCode: dart.fn(o => dart.hashCode(keyProvider(o)), TToint())});
      _.addAll(initialSelection);
      this.selectedValues = _;
      _MultiSelectionModelImpl.__proto__.new.call(this);
    }).prototype = _MultiSelectionModelImpl.prototype;
    dart.addTypeTests(_MultiSelectionModelImpl);
    _MultiSelectionModelImpl.prototype[_is__MultiSelectionModelImpl_default] = true;
    _MultiSelectionModelImpl[dart.implements] = () => [MultiSelectionModelOfT()];
    dart.setMethodSignature(_MultiSelectionModelImpl, () => ({
      __proto__: dart.getMethods(_MultiSelectionModelImpl.__proto__),
      clear: dart.fnType(dart.void, []),
      deselect: dart.fnType(core.bool, [core.Object]),
      select: dart.fnType(core.bool, [core.Object]),
      selectAll: dart.fnType(dart.void, [core.Object]),
      deselectAll: dart.fnType(dart.void, [core.Object]),
      isSelected: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(_MultiSelectionModelImpl, () => ({
      __proto__: dart.getGetters(_MultiSelectionModelImpl.__proto__),
      isEmpty: dart.fnType(core.bool, []),
      isNotEmpty: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(_MultiSelectionModelImpl, () => ({
      __proto__: dart.getFields(_MultiSelectionModelImpl.__proto__),
      selectedValues: dart.finalFieldType(LinkedHashSetOfT())
    }));
    return _MultiSelectionModelImpl;
  });
  model__selection__selection_model._MultiSelectionModelImpl = model__selection__selection_model._MultiSelectionModelImpl$();
  dart.addTypeTests(model__selection__selection_model._MultiSelectionModelImpl, _is__MultiSelectionModelImpl_default);
  let const$9;
  const _is__NoopSelectionModelImpl_default = Symbol('_is__NoopSelectionModelImpl_default');
  model__selection__selection_model._NoopSelectionModelImpl$ = dart.generic(T => {
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let SelectionChangeRecordOfT = () => (SelectionChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(T)))();
    let ListOfSelectionChangeRecordOfT = () => (ListOfSelectionChangeRecordOfT = dart.constFn(core.List$(SelectionChangeRecordOfT())))();
    let StreamOfListOfSelectionChangeRecordOfT = () => (StreamOfListOfSelectionChangeRecordOfT = dart.constFn(async.Stream$(ListOfSelectionChangeRecordOfT())))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class _NoopSelectionModelImpl extends core.Object {
      deliverSelectionChanges() {
        return false;
      }
      notifySelectionChange(opts) {
        let added = opts && 'added' in opts ? opts.added : null;
        IterableOfT()._check(added);
        let removed = opts && 'removed' in opts ? opts.removed : null;
        IterableOfT()._check(removed);
      }
      get changes() {
        return StreamOfListOfChangeRecord().fromIterable(const$9 || (const$9 = dart.constList([], ListOfChangeRecord())));
      }
      deliverChanges() {
        return false;
      }
      notifyChange(_) {
        if (_ === void 0) _ = null;
      }
      notifyPropertyChange(T, field, oldValue, newValue) {
        return null;
      }
      observed() {}
      unobserved() {}
      clear() {}
      select(_) {
        T._check(_);
        return false;
      }
      deselect(_) {
        T._check(_);
        return false;
      }
      isSelected(_) {
        T._check(_);
        return false;
      }
      get selectionChanges() {
        return StreamOfListOfSelectionChangeRecordOfT().fromIterable(dart.constList([], ListOfSelectionChangeRecordOfT()));
      }
    }
    (_NoopSelectionModelImpl.new = function() {
      this.hasSelectionObservers = false;
      this.hasObservers = false;
      this.isEmpty = true;
      this.isNotEmpty = false;
      this.selectedValues = dart.constList([], T);
    }).prototype = _NoopSelectionModelImpl.prototype;
    dart.addTypeTests(_NoopSelectionModelImpl);
    _NoopSelectionModelImpl.prototype[_is__NoopSelectionModelImpl_default] = true;
    _NoopSelectionModelImpl[dart.implements] = () => [SelectionModelOfT()];
    dart.setMethodSignature(_NoopSelectionModelImpl, () => ({
      __proto__: dart.getMethods(_NoopSelectionModelImpl.__proto__),
      deliverSelectionChanges: dart.fnType(core.bool, []),
      notifySelectionChange: dart.fnType(dart.void, [], {added: core.Object, removed: core.Object}),
      deliverChanges: dart.fnType(core.bool, []),
      notifyChange: dart.fnType(dart.void, [], [src__records.ChangeRecord]),
      notifyPropertyChange: dart.gFnType(T => [T, [core.Symbol, T, T]]),
      observed: dart.fnType(dart.void, []),
      unobserved: dart.fnType(dart.void, []),
      clear: dart.fnType(dart.void, []),
      select: dart.fnType(core.bool, [core.Object]),
      deselect: dart.fnType(core.bool, [core.Object]),
      isSelected: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(_NoopSelectionModelImpl, () => ({
      __proto__: dart.getGetters(_NoopSelectionModelImpl.__proto__),
      changes: dart.fnType(async.Stream$(core.List$(src__records.ChangeRecord)), []),
      selectionChanges: dart.fnType(async.Stream$(core.List$(model__selection__selection_model.SelectionChangeRecord$(T))), [])
    }));
    dart.setFieldSignature(_NoopSelectionModelImpl, () => ({
      __proto__: dart.getFields(_NoopSelectionModelImpl.__proto__),
      hasSelectionObservers: dart.finalFieldType(core.bool),
      hasObservers: dart.finalFieldType(core.bool),
      isEmpty: dart.finalFieldType(core.bool),
      isNotEmpty: dart.finalFieldType(core.bool),
      selectedValues: dart.finalFieldType(ListOfT())
    }));
    return _NoopSelectionModelImpl;
  });
  model__selection__selection_model._NoopSelectionModelImpl = model__selection__selection_model._NoopSelectionModelImpl$();
  dart.addTypeTests(model__selection__selection_model._NoopSelectionModelImpl, _is__NoopSelectionModelImpl_default);
  const _selectableChangeController = Symbol('_selectableChangeController');
  const _selectableChangeRecord = Symbol('_selectableChangeRecord');
  const _hasSelectableObservers = Symbol('_hasSelectableObservers');
  const _deliverSelectableChange = Symbol('_deliverSelectableChange');
  let const$10;
  const _is_SelectableChangeNotifier_default = Symbol('_is_SelectableChangeNotifier_default');
  model__selection__selection_model.SelectableChangeNotifier$ = dart.generic(T => {
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let SelectableWithCompositionOfT = () => (SelectableWithCompositionOfT = dart.constFn(src__model__selection__interfaces__selectable.SelectableWithComposition$(T)))();
    class SelectableChangeNotifier extends core.Object {
      [_deliverSelectableChange]() {
        if (dart.test(this[_hasSelectableObservers]) && this[_selectableChangeRecord] != null) {
          this[_selectableChangeController].add(this[_selectableChangeRecord]);
          this[_selectableChangeRecord] = null;
        }
      }
      notifySelectableChange() {
        if (dart.test(this[_hasSelectableObservers]) && this[_selectableChangeRecord] == null) {
          this[_selectableChangeRecord] = const$10 || (const$10 = dart.const(model__selection__selection_model.SelectableChangeRecord.new()));
          async.scheduleMicrotask(dart.bind(this, _deliverSelectableChange));
        }
      }
      get [_hasSelectableObservers]() {
        return this[_selectableChangeController] != null && dart.test(this[_selectableChangeController].hasListener);
      }
      get selectableChanges() {
        if (this[_selectableChangeController] == null) {
          this[_selectableChangeController] = StreamControllerOfSelectableChangeRecord().broadcast({sync: true});
        }
        return this[_selectableChangeController].stream;
      }
    }
    (SelectableChangeNotifier.new = function() {
      this[_selectableChangeController] = null;
      this[_selectableChangeRecord] = null;
    }).prototype = SelectableChangeNotifier.prototype;
    dart.addTypeTests(SelectableChangeNotifier);
    SelectableChangeNotifier.prototype[_is_SelectableChangeNotifier_default] = true;
    SelectableChangeNotifier[dart.implements] = () => [SelectionModelOfT(), SelectableWithCompositionOfT()];
    dart.setMethodSignature(SelectableChangeNotifier, () => ({
      __proto__: dart.getMethods(SelectableChangeNotifier.__proto__),
      [_deliverSelectableChange]: dart.fnType(dart.void, []),
      notifySelectableChange: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(SelectableChangeNotifier, () => ({
      __proto__: dart.getGetters(SelectableChangeNotifier.__proto__),
      [_hasSelectableObservers]: dart.fnType(core.bool, []),
      selectableChanges: dart.fnType(async.Stream$(model__selection__selection_model.SelectableChangeRecord), [])
    }));
    dart.setFieldSignature(SelectableChangeNotifier, () => ({
      __proto__: dart.getFields(SelectableChangeNotifier.__proto__),
      [_selectableChangeController]: dart.fieldType(StreamControllerOfSelectableChangeRecord()),
      [_selectableChangeRecord]: dart.fieldType(model__selection__selection_model.SelectableChangeRecord)
    }));
    return SelectableChangeNotifier;
  });
  model__selection__selection_model.SelectableChangeNotifier = model__selection__selection_model.SelectableChangeNotifier$();
  dart.addTypeTests(model__selection__selection_model.SelectableChangeNotifier, _is_SelectableChangeNotifier_default);
  const _is__SelectableChangeRecordImpl_default = Symbol('_is__SelectableChangeRecordImpl_default');
  model__selection__selection_model._SelectableChangeRecordImpl$ = dart.generic(T => {
    let SelectableChangeRecordOfT = () => (SelectableChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectableChangeRecord$(T)))();
    class _SelectableChangeRecordImpl extends core.Object {}
    (_SelectableChangeRecordImpl.new = function() {
    }).prototype = _SelectableChangeRecordImpl.prototype;
    dart.addTypeTests(_SelectableChangeRecordImpl);
    _SelectableChangeRecordImpl.prototype[_is__SelectableChangeRecordImpl_default] = true;
    _SelectableChangeRecordImpl[dart.implements] = () => [SelectableChangeRecordOfT()];
    return _SelectableChangeRecordImpl;
  });
  model__selection__selection_model._SelectableChangeRecordImpl = model__selection__selection_model._SelectableChangeRecordImpl$();
  dart.addTypeTests(model__selection__selection_model._SelectableChangeRecordImpl, _is__SelectableChangeRecordImpl_default);
  const _is_SelectionObservable_default = Symbol('_is_SelectionObservable_default');
  model__selection__selection_model.SelectionObservable$ = dart.generic(T => {
    class SelectionObservable extends core.Object {}
    (SelectionObservable.new = function() {
    }).prototype = SelectionObservable.prototype;
    dart.addTypeTests(SelectionObservable);
    SelectionObservable.prototype[_is_SelectionObservable_default] = true;
    return SelectionObservable;
  });
  model__selection__selection_model.SelectionObservable = model__selection__selection_model.SelectionObservable$();
  dart.addTypeTests(model__selection__selection_model.SelectionObservable, _is_SelectionObservable_default);
  const _is__SelectionChangeRecordImpl_default = Symbol('_is__SelectionChangeRecordImpl_default');
  model__selection__selection_model._SelectionChangeRecordImpl$ = dart.generic(T => {
    let UnmodifiableListViewOfT = () => (UnmodifiableListViewOfT = dart.constFn(collection.UnmodifiableListView$(T)))();
    let _SelectionChangeRecordImplOfT = () => (_SelectionChangeRecordImplOfT = dart.constFn(model__selection__selection_model._SelectionChangeRecordImpl$(T)))();
    let SelectionChangeRecordOfT = () => (SelectionChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    class _SelectionChangeRecordImpl extends src__records.ChangeRecord {
      static new(opts) {
        let added = opts && 'added' in opts ? opts.added : null;
        let removed = opts && 'removed' in opts ? opts.removed : null;
        added = added != null ? new (UnmodifiableListViewOfT()).new(added) : dart.constList([], T);
        removed = removed != null ? new (UnmodifiableListViewOfT()).new(removed) : dart.constList([], T);
        return new (_SelectionChangeRecordImplOfT()).__(added, removed);
      }
      toString() {
        return dart.str`SelectionChangeRecord{added: ${this.added}, removed: ${this.removed}}`;
      }
    }
    (_SelectionChangeRecordImpl.__ = function(added, removed) {
      this.added = added;
      this.removed = removed;
      _SelectionChangeRecordImpl.__proto__.new.call(this);
    }).prototype = _SelectionChangeRecordImpl.prototype;
    dart.addTypeTests(_SelectionChangeRecordImpl);
    _SelectionChangeRecordImpl.prototype[_is__SelectionChangeRecordImpl_default] = true;
    _SelectionChangeRecordImpl[dart.implements] = () => [SelectionChangeRecordOfT()];
    dart.setMethodSignature(_SelectionChangeRecordImpl, () => ({
      __proto__: dart.getMethods(_SelectionChangeRecordImpl.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setFieldSignature(_SelectionChangeRecordImpl, () => ({
      __proto__: dart.getFields(_SelectionChangeRecordImpl.__proto__),
      added: dart.finalFieldType(IterableOfT()),
      removed: dart.finalFieldType(IterableOfT())
    }));
    dart.defineExtensionMethods(_SelectionChangeRecordImpl, ['toString']);
    return _SelectionChangeRecordImpl;
  });
  model__selection__selection_model._SelectionChangeRecordImpl = model__selection__selection_model._SelectionChangeRecordImpl$();
  dart.addTypeTests(model__selection__selection_model._SelectionChangeRecordImpl, _is__SelectionChangeRecordImpl_default);
  const _keyOf = Symbol('_keyOf');
  const _selectedValues = Symbol('_selectedValues');
  const _selectedKey = Symbol('_selectedKey');
  let const$11;
  let const$12;
  const _isKeySelected = Symbol('_isKeySelected');
  let const$13;
  let const$14;
  const _is__SingleSelectionModelImpl_default = Symbol('_is__SingleSelectionModelImpl_default');
  model__selection__selection_model._SingleSelectionModelImpl$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let TToObject = () => (TToObject = dart.constFn(dart.fnType(core.Object, [T])))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    const Observable_SelectionChangeNotifier$ = class Observable_SelectionChangeNotifier extends src__observable.Observable$(src__records.ChangeRecord) {};
    (Observable_SelectionChangeNotifier$.new = function() {
      model__selection__selection_model.SelectionChangeNotifier$(T).new.call(this);
      Observable_SelectionChangeNotifier$.__proto__.new.call(this);
    }).prototype = Observable_SelectionChangeNotifier$.prototype;
    dart.mixinMembers(Observable_SelectionChangeNotifier$, model__selection__selection_model.SelectionChangeNotifier$(T));
    class _SingleSelectionModelImpl extends Observable_SelectionChangeNotifier$ {
      clear() {
        if (dart.test(this[_selectedValues][$isNotEmpty])) {
          this.deselect(this[_selectedValues][$first]);
        }
      }
      select(value) {
        T._check(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.notNull('value'));
        }
        let newKey = this[_keyOf](value);
        if (dart.equals(newKey, this[_selectedKey])) {
          return false;
        }
        let previousValue = dart.test(this[_selectedValues][$isEmpty]) ? null : this[_selectedValues][$first];
        let removedItems = dart.constList([], T);
        this[_selectedKey] = newKey;
        this[_selectedValues][$clear]();
        this[_selectedValues][$add](value);
        if (previousValue == null) {
          this.notifyPropertyChange(core.bool, const$11 || (const$11 = dart.const(core.Symbol.new('isEmpty'))), true, false);
          this.notifyPropertyChange(core.bool, const$12 || (const$12 = dart.const(core.Symbol.new('isNotEmpty'))), false, true);
        } else {
          removedItems = JSArrayOfT().of([previousValue]);
        }
        this.notifySelectionChange({added: JSArrayOfT().of([value]), removed: removedItems});
        return true;
      }
      deselect(value) {
        T._check(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.notNull('value'));
        }
        if (dart.test(this[_selectedValues][$isEmpty]) || !dart.test(this[_isKeySelected](value))) {
          return false;
        }
        let previousValue = dart.test(this[_selectedValues][$isEmpty]) ? null : this[_selectedValues][$first];
        let removedItems = dart.constList([], T);
        this[_selectedKey] = null;
        this[_selectedValues][$clear]();
        if (previousValue != null) {
          this.notifyPropertyChange(core.bool, const$13 || (const$13 = dart.const(core.Symbol.new('isEmpty'))), false, true);
          this.notifyPropertyChange(core.bool, const$14 || (const$14 = dart.const(core.Symbol.new('isNotEmpty'))), true, false);
          removedItems = JSArrayOfT().of([previousValue]);
        }
        this.notifySelectionChange({added: JSArrayOfT().of([]), removed: removedItems});
        return true;
      }
      [_isKeySelected](value) {
        T._check(value);
        return dart.equals(this[_keyOf](value), this[_selectedKey]);
      }
      isSelected(value) {
        T._check(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.notNull('value'));
        }
        return this[_isKeySelected](value);
      }
      get isEmpty() {
        return this[_selectedValues][$isEmpty];
      }
      get isNotEmpty() {
        return this[_selectedValues][$isNotEmpty];
      }
      get selectedValues() {
        return this[_selectedValues];
      }
    }
    (_SingleSelectionModelImpl.new = function(selectedValue, keyOf) {
      this[_selectedValues] = JSArrayOfT().of([]);
      this[_selectedKey] = null;
      this[_keyOf] = keyOf;
      _SingleSelectionModelImpl.__proto__.new.call(this);
      if (selectedValue != null) {
        this[_selectedKey] = this[_keyOf](selectedValue);
        this[_selectedValues][$add](selectedValue);
      }
    }).prototype = _SingleSelectionModelImpl.prototype;
    dart.addTypeTests(_SingleSelectionModelImpl);
    _SingleSelectionModelImpl.prototype[_is__SingleSelectionModelImpl_default] = true;
    _SingleSelectionModelImpl[dart.implements] = () => [SelectionModelOfT()];
    dart.setMethodSignature(_SingleSelectionModelImpl, () => ({
      __proto__: dart.getMethods(_SingleSelectionModelImpl.__proto__),
      clear: dart.fnType(dart.void, []),
      select: dart.fnType(core.bool, [core.Object]),
      deselect: dart.fnType(core.bool, [core.Object]),
      [_isKeySelected]: dart.fnType(core.bool, [core.Object]),
      isSelected: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(_SingleSelectionModelImpl, () => ({
      __proto__: dart.getGetters(_SingleSelectionModelImpl.__proto__),
      isEmpty: dart.fnType(core.bool, []),
      isNotEmpty: dart.fnType(core.bool, []),
      selectedValues: dart.fnType(core.Iterable$(T), [])
    }));
    dart.setFieldSignature(_SingleSelectionModelImpl, () => ({
      __proto__: dart.getFields(_SingleSelectionModelImpl.__proto__),
      [_keyOf]: dart.finalFieldType(TToObject()),
      [_selectedValues]: dart.finalFieldType(ListOfT()),
      [_selectedKey]: dart.fieldType(dart.dynamic)
    }));
    return _SingleSelectionModelImpl;
  });
  model__selection__selection_model._SingleSelectionModelImpl = model__selection__selection_model._SingleSelectionModelImpl$();
  dart.addTypeTests(model__selection__selection_model._SingleSelectionModelImpl, _is__SingleSelectionModelImpl_default);
  dart.trackLibraries("packages/angular_components/model/selection/selection_model.ddc", {
    "package:angular_components/src/model/selection/delegating_selection_model.dart": src__model__selection__delegating_selection_model,
    "package:angular_components/src/model/selection/radio_group_single_selection_model.dart": src__model__selection__radio_group_single_selection_model,
    "package:angular_components/model/selection/selection_model.dart": model__selection__selection_model
  }, '{"version":3,"sourceRoot":"","sources":["../../src/model/selection/delegating_selection_model.dart","../../src/model/selection/radio_group_single_selection_model.dart","selection_model.dart","../../src/model/selection/selection_change_notifier.dart","../../src/model/selection/multi_selection_model_impl.dart","../../src/model/selection/noop_selection_model_impl.dart","../../src/model/selection/selectable_change_notifier.dart","../../src/model/selection/single_selection_model_impl.dart"],"names":[],"mappings":"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","file":"selection_model.ddc.js"}');
  // Exports:
  return {
    src__model__selection__delegating_selection_model: src__model__selection__delegating_selection_model,
    src__model__selection__radio_group_single_selection_model: src__model__selection__radio_group_single_selection_model,
    model__selection__selection_model: model__selection__selection_model
  };
});

//# sourceMappingURL=selection_model.ddc.js.map
