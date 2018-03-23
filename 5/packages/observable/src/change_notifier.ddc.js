define(['dart_sdk', 'packages/observable/src/internal', 'packages/observable/src/records'], function(dart_sdk, internal, records) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__internal = internal.src__internal;
  const src__records = records.src__records;
  const _root = Object.create(null);
  const src__change_notifier = Object.create(_root);
  const src__observable = Object.create(_root);
  const $add = dartx.add;
  const _changes = Symbol('_changes');
  const _scheduled = Symbol('_scheduled');
  const _queue = Symbol('_queue');
  const _is_ChangeNotifier_default = Symbol('_is_ChangeNotifier_default');
  src__change_notifier.ChangeNotifier$ = dart.generic(C => {
    let ListOfC = () => (ListOfC = dart.constFn(core.List$(C)))();
    let StreamControllerOfListOfC = () => (StreamControllerOfListOfC = dart.constFn(async.StreamController$(ListOfC())))();
    let JSArrayOfC = () => (JSArrayOfC = dart.constFn(_interceptors.JSArray$(C)))();
    let ObservableOfC = () => (ObservableOfC = dart.constFn(src__observable.Observable$(C)))();
    class ChangeNotifier extends core.Object {
      get changes() {
        return (() => {
          let t = this[_changes];
          return t == null ? this[_changes] = StreamControllerOfListOfC().broadcast({sync: true, onListen: dart.bind(this, 'observed'), onCancel: dart.bind(this, 'unobserved')}) : t;
        })().stream;
      }
      observed() {}
      unobserved() {
        this[_changes] = this[_queue] = null;
      }
      deliverChanges() {
        let changes = null;
        if (dart.test(this[_scheduled]) && dart.test(this.hasObservers)) {
          if (this[_queue] != null) {
            changes = src__internal.freezeInDevMode(src__records.ChangeRecord, this[_queue]);
            this[_queue] = null;
          } else {
            changes = src__records.ChangeRecord.ANY;
          }
          this[_scheduled] = false;
          this[_changes].add(ListOfC()._check(changes));
        }
        return changes != null;
      }
      get hasObservers() {
        return (() => {
          let t = this[_changes];
          return t == null ? null : t.hasListener;
        })() === true;
      }
      notifyChange(change) {
        if (change === void 0) change = null;
        C._check(change);
        if (!dart.test(this.hasObservers)) {
          return;
        }
        if (change != null) {
          (() => {
            let t = this[_queue];
            return t == null ? this[_queue] = JSArrayOfC().of([]) : t;
          })()[$add](change);
        }
        if (!dart.test(this[_scheduled])) {
          async.scheduleMicrotask(dart.bind(this, 'deliverChanges'));
          this[_scheduled] = true;
        }
      }
      notifyPropertyChange(T, field, oldValue, newValue) {
        dart.throw(new core.UnsupportedError.new('Not supported by ChangeNotifier'));
      }
    }
    (ChangeNotifier.new = function() {
      this[_changes] = null;
      this[_scheduled] = false;
      this[_queue] = null;
    }).prototype = ChangeNotifier.prototype;
    dart.addTypeTests(ChangeNotifier);
    ChangeNotifier.prototype[_is_ChangeNotifier_default] = true;
    ChangeNotifier[dart.implements] = () => [ObservableOfC()];
    dart.setMethodSignature(ChangeNotifier, () => ({
      __proto__: dart.getMethods(ChangeNotifier.__proto__),
      observed: dart.fnType(dart.void, []),
      unobserved: dart.fnType(dart.void, []),
      deliverChanges: dart.fnType(core.bool, []),
      notifyChange: dart.fnType(dart.void, [], [core.Object]),
      notifyPropertyChange: dart.gFnType(T => [T, [core.Symbol, T, T]])
    }));
    dart.setGetterSignature(ChangeNotifier, () => ({
      __proto__: dart.getGetters(ChangeNotifier.__proto__),
      changes: dart.fnType(async.Stream$(core.List$(C)), []),
      hasObservers: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(ChangeNotifier, () => ({
      __proto__: dart.getFields(ChangeNotifier.__proto__),
      [_changes]: dart.fieldType(StreamControllerOfListOfC()),
      [_scheduled]: dart.fieldType(core.bool),
      [_queue]: dart.fieldType(ListOfC())
    }));
    return ChangeNotifier;
  });
  src__change_notifier.ChangeNotifier = src__change_notifier.ChangeNotifier$();
  dart.addTypeTests(src__change_notifier.ChangeNotifier, _is_ChangeNotifier_default);
  src__change_notifier.PropertyChangeNotifier = class PropertyChangeNotifier extends src__change_notifier.ChangeNotifier$(src__records.ChangeRecord) {
    notifyPropertyChange(T, field, oldValue, newValue) {
      if (dart.test(this.hasObservers) && !dart.equals(oldValue, newValue)) {
        this.notifyChange(new (src__records.PropertyChangeRecord$(T)).new(this, field, oldValue, newValue));
      }
      return newValue;
    }
  };
  (src__change_notifier.PropertyChangeNotifier.new = function() {
    src__change_notifier.PropertyChangeNotifier.__proto__.new.call(this);
  }).prototype = src__change_notifier.PropertyChangeNotifier.prototype;
  dart.addTypeTests(src__change_notifier.PropertyChangeNotifier);
  dart.setMethodSignature(src__change_notifier.PropertyChangeNotifier, () => ({
    __proto__: dart.getMethods(src__change_notifier.PropertyChangeNotifier.__proto__),
    notifyPropertyChange: dart.gFnType(T => [T, [core.Symbol, T, T]])
  }));
  const _delegate = Symbol('_delegate');
  const _isNotGeneric = Symbol('_isNotGeneric');
  const _is_Observable_default = Symbol('_is_Observable_default');
  src__observable.Observable$ = dart.generic(C => {
    let ChangeNotifierOfC = () => (ChangeNotifierOfC = dart.constFn(src__change_notifier.ChangeNotifier$(C)))();
    class Observable extends core.Object {
      get changes() {
        return this[_delegate].changes;
      }
      observed() {
        return this[_delegate].observed();
      }
      unobserved() {
        return this[_delegate].unobserved();
      }
      get hasObservers() {
        return this[_delegate].hasObservers;
      }
      deliverChanges() {
        return this[_delegate].deliverChanges();
      }
      notifyPropertyChange(T, field, oldValue, newValue) {
        if (dart.test(this.hasObservers) && !dart.equals(oldValue, newValue)) {
          if (dart.test(this[_isNotGeneric])) {
            this.notifyChange(C.as(new (src__records.PropertyChangeRecord$(T)).new(this, field, oldValue, newValue)));
          } else {
          }
        }
        return newValue;
      }
      notifyChange(change) {
        if (change === void 0) change = null;
        C._check(change);
        return this[_delegate].notifyChange(change);
      }
    }
    (Observable.new = function() {
      this[_delegate] = new (ChangeNotifierOfC()).new();
      this[_isNotGeneric] = dart.equals(dart.wrapType(C), dart.wrapType(dart.dynamic)) || dart.equals(dart.wrapType(C), dart.wrapType(src__records.ChangeRecord));
    }).prototype = Observable.prototype;
    dart.addTypeTests(Observable);
    Observable.prototype[_is_Observable_default] = true;
    dart.setMethodSignature(Observable, () => ({
      __proto__: dart.getMethods(Observable.__proto__),
      observed: dart.fnType(dart.void, []),
      unobserved: dart.fnType(dart.void, []),
      deliverChanges: dart.fnType(core.bool, []),
      notifyPropertyChange: dart.gFnType(T => [T, [core.Symbol, T, T]]),
      notifyChange: dart.fnType(dart.void, [], [core.Object])
    }));
    dart.setGetterSignature(Observable, () => ({
      __proto__: dart.getGetters(Observable.__proto__),
      changes: dart.fnType(async.Stream$(core.List$(C)), []),
      hasObservers: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(Observable, () => ({
      __proto__: dart.getFields(Observable.__proto__),
      [_delegate]: dart.finalFieldType(ChangeNotifierOfC()),
      [_isNotGeneric]: dart.finalFieldType(core.bool)
    }));
    return Observable;
  });
  src__observable.Observable = src__observable.Observable$();
  dart.addTypeTests(src__observable.Observable, _is_Observable_default);
  dart.trackLibraries("packages/observable/src/change_notifier.ddc", {
    "package:observable/src/change_notifier.dart": src__change_notifier,
    "package:observable/src/observable.dart": src__observable
  }, '{"version":3,"sourceRoot":"","sources":["change_notifier.dart","observable.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAyBI;kBAAQ,cAAQ;8CAAK,AAAI,qCAAmC,QACpD,gBACI,2BAAQ,YACR,6BAAU;mBAEX;MACb;kBAMiB;;AAOf,sBAAQ,GAAG,YAAM,GAAG;MACtB;;AAQE,YAAmB;AACnB,sBAAI,gBAAU,eAAI,iBAAY,GAAE;AAC9B,cAAI,YAAM,IAAI,MAAM;AAClB,mBAAO,GAAG,6BAAe,4BAAC,YAAM;AAChC,wBAAM,GAAG;iBACJ;AACL,mBAAO,GAAG,yBAAY,IAAI;;AAE5B,0BAAU,GAAG;AACb,wBAAQ,IAAI,kBAAC,OAAO;;AAEtB,cAAO,QAAO,IAAI;MACpB;;;kBAMyB,cAAQ;;iBAAiB;MAAI;mBAQnC,MAAQ;+BAAN;;AACnB,uBAAK,iBAAY,GAAE;AACjB;;AAEF,YAAI,MAAM,IAAI,MAAM;AAClB;oBAAC,YAAM;8CAAK;oBAAU,CAAC,MAAM;;AAE/B,uBAAK,gBAAU,GAAE;AACf,iCAAiB,CAAC,iCAAc;AAChC,0BAAU,GAAG;;MAEjB;8BAME,KAAY,EACZ,QAAU,EACV,QAAU;AAEV,mBAAM,IAAI,yBAAgB,CAAC;MAC7B;;;MAtF0B,cAAQ;MAE7B,gBAAU,GAAG;MACV,YAAM;IAoFhB;;;;;;;;;;;;;;;;;;;;;;;;;;;;4BAaI,KAAY,EACZ,QAAU,EACV,QAAU;AAEV,oBAAI,iBAAY,kBAAI,QAAQ,EAAI,QAAQ,GAAE;AACxC,yBAAY,CACV,IAAI,2CAAuB,CACzB,MACA,KAAK,EACL,QAAQ,EACR,QAAQ;;AAId,YAAO,SAAQ;IACjB;;;;EACF;;;;;;;;;;;;;cCtGiC,gBAAS,QAAQ;;;cAQ7B,gBAAS,SAAS;MAAE;;cAQlB,gBAAS,WAAW;MAAE;;cAIlB,gBAAS,aAAa;;;cAQtB,gBAAS,eAAe;MAAE;8BAmBjD,KAAY,EACZ,QAAU,EACV,QAAU;AAEV,sBAAI,iBAAY,kBAAI,QAAQ,EAAI,QAAQ,GAAE;AACxC,wBAAI,mBAAa,GAAE;AACjB,6BAAY,MACV,IAAI,2CAAoB,CACtB,MACA,KAAK,EACL,QAAQ,EACR,QAAQ;iBAGP;;;AAMT,cAAO,SAAQ;MACjB;mBAQmB,MAAQ;+BAAN;;cAAY,gBAAS,aAAa,CAAC,MAAM;MAAC;;;MApFvC,eAAS,GAAG,IAAI,yBAAiB;MAG9C,mBAAa,GAAgB,YAAb,gBAAC,EAAI,2BAAO,iBAAI,gBAAC,EAAI,wCAAY;IAkF9D","file":"change_notifier.ddc.js"}');
  // Exports:
  return {
    src__change_notifier: src__change_notifier,
    src__observable: src__observable
  };
});

//# sourceMappingURL=change_notifier.ddc.js.map
