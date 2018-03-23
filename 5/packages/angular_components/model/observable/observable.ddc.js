define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer'], function(dart_sdk, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const _root = Object.create(null);
  const model__observable__observable = Object.create(_root);
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $toString = dartx.toString;
  const $containsKey = dartx.containsKey;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  const $forEach = dartx.forEach;
  const $values = dartx.values;
  const $clear = dartx.clear;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let LinkedMapOfStream$StreamSubscription = () => (LinkedMapOfStream$StreamSubscription = dart.constFn(_js_helper.LinkedMap$(async.Stream, async.StreamSubscription)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let MapOfStream$StreamSubscription = () => (MapOfStream$StreamSubscription = dart.constFn(core.Map$(async.Stream, async.StreamSubscription)))();
  model__observable__observable.EqualsFn$ = dart.generic(T => {
    const EqualsFn = dart.typedef('EqualsFn', () => dart.fnType(core.bool, [T, T]));
    return EqualsFn;
  });
  model__observable__observable.EqualsFn = model__observable__observable.EqualsFn$();
  const _is_ObserveAware_default = Symbol('_is_ObserveAware_default');
  model__observable__observable.ObserveAware$ = dart.generic(T => {
    class ObserveAware extends core.Object {}
    (ObserveAware.new = function() {
    }).prototype = ObserveAware.prototype;
    dart.addTypeTests(ObserveAware);
    ObserveAware.prototype[_is_ObserveAware_default] = true;
    return ObserveAware;
  });
  model__observable__observable.ObserveAware = model__observable__observable.ObserveAware$();
  dart.addTypeTests(model__observable__observable.ObserveAware, _is_ObserveAware_default);
  const _is_Change_default = Symbol('_is_Change_default');
  model__observable__observable.Change$ = dart.generic(T => {
    class Change extends core.Object {
      get previous() {
        return this[previous$];
      }
      set previous(value) {
        super.previous = value;
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        super.next = value;
      }
      _equals(other) {
        if (other == null) return false;
        return model__observable__observable.Change.is(other) && dart.equals(this.previous, other.previous) && dart.equals(this.next, other.next);
      }
      get hashCode() {
        return this.next == null ? 0 : dart.hashCode(this.next);
      }
      toString() {
        return dart.str`Change(${this.previous} ==> ${this.next})`;
      }
    }
    (Change.new = function(previous, next) {
      this[previous$] = previous;
      this[next$] = next;
    }).prototype = Change.prototype;
    dart.addTypeTests(Change);
    Change.prototype[_is_Change_default] = true;
    const previous$ = Symbol("Change.previous");
    const next$ = Symbol("Change.next");
    dart.setMethodSignature(Change, () => ({
      __proto__: dart.getMethods(Change.__proto__),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Change, () => ({
      __proto__: dart.getGetters(Change.__proto__),
      hashCode: dart.fnType(core.int, []),
      [$hashCode]: dart.fnType(core.int, [])
    }));
    dart.setFieldSignature(Change, () => ({
      __proto__: dart.getFields(Change.__proto__),
      previous: dart.finalFieldType(T),
      next: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(Change, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Change, ['hashCode']);
    return Change;
  });
  model__observable__observable.Change = model__observable__observable.Change$();
  dart.addTypeTests(model__observable__observable.Change, _is_Change_default);
  const _is_ChangeAware_default = Symbol('_is_ChangeAware_default');
  model__observable__observable.ChangeAware$ = dart.generic(T => {
    class ChangeAware extends model__observable__observable.ObserveAware$(T) {}
    (ChangeAware.new = function() {
    }).prototype = ChangeAware.prototype;
    dart.addTypeTests(ChangeAware);
    ChangeAware.prototype[_is_ChangeAware_default] = true;
    return ChangeAware;
  });
  model__observable__observable.ChangeAware = model__observable__observable.ChangeAware$();
  dart.addTypeTests(model__observable__observable.ChangeAware, _is_ChangeAware_default);
  const _coalesce = Symbol('_coalesce');
  const _coalesceScheduled = Symbol('_coalesceScheduled');
  const _streamController = Symbol('_streamController');
  const _changeController = Symbol('_changeController');
  const _previous = Symbol('_previous');
  const _next = Symbol('_next');
  const _isInactive = Symbol('_isInactive');
  const _hasStreamListener = Symbol('_hasStreamListener');
  const _hasChangeListener = Symbol('_hasChangeListener');
  const _doCoalesce = Symbol('_doCoalesce');
  const _doNotifyChange = Symbol('_doNotifyChange');
  const _isActive = Symbol('_isActive');
  const _is_ChangeNotificationProvider_default = Symbol('_is_ChangeNotificationProvider_default');
  model__observable__observable.ChangeNotificationProvider$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let ChangeOfT = () => (ChangeOfT = dart.constFn(model__observable__observable.Change$(T)))();
    let StreamControllerOfChangeOfT = () => (StreamControllerOfChangeOfT = dart.constFn(async.StreamController$(ChangeOfT())))();
    let ChangeAwareOfT = () => (ChangeAwareOfT = dart.constFn(model__observable__observable.ChangeAware$(T)))();
    class ChangeNotificationProvider extends core.Object {
      get stream() {
        if (this[_streamController] == null) {
          this[_streamController] = StreamControllerOfT().broadcast({sync: true});
        }
        return this[_streamController].stream;
      }
      get changes() {
        if (this[_changeController] == null) {
          this[_changeController] = StreamControllerOfChangeOfT().broadcast({sync: true});
        }
        return this[_changeController].stream;
      }
      notifyChange(previous, next) {
        if (previous === void 0) previous = null;
        T._check(previous);
        if (next === void 0) next = null;
        T._check(next);
        if (dart.test(this[_isInactive])) return;
        if ((!dart.test(this[_hasStreamListener]) || dart.test(this[_streamController].isClosed)) && (!dart.test(this[_hasChangeListener]) || dart.test(this[_changeController].isClosed))) {
          return;
        }
        if (dart.test(this[_coalesce])) {
          this[_doCoalesce](previous, next);
        } else {
          this[_doNotifyChange](previous, next);
        }
      }
      [_doCoalesce](previous, next) {
        T._check(previous);
        T._check(next);
        if (dart.test(this[_coalesceScheduled])) {
          this[_next] = next;
        } else {
          this[_previous] = previous;
          this[_next] = next;
          this[_coalesceScheduled] = true;
          async.scheduleMicrotask(dart.fn(() => {
            let publishPrev = this[_previous];
            let publishNext = this[_next];
            this[_previous] = null;
            this[_next] = null;
            this[_coalesceScheduled] = false;
            if (dart.test(this[_isActive])) {
              this[_doNotifyChange](publishPrev, publishNext);
            }
          }, VoidToNull()));
        }
      }
      [_doNotifyChange](previous, next) {
        T._check(previous);
        T._check(next);
        if (dart.test(this[_hasStreamListener])) {
          this[_streamController].add(next);
        }
        if (dart.test(this[_hasChangeListener])) {
          this[_changeController].add(new (ChangeOfT()).new(previous, next));
        }
      }
      dispose() {
        if (this[_streamController] != null) {
          this[_streamController].close();
          this[_streamController] = null;
        }
        if (this[_changeController] != null) {
          this[_changeController].close();
          this[_changeController] = null;
        }
      }
      get [_hasStreamListener]() {
        return this[_streamController] != null && dart.test(this[_streamController].hasListener);
      }
      get [_hasChangeListener]() {
        return this[_changeController] != null && dart.test(this[_changeController].hasListener);
      }
      get [_isActive]() {
        return dart.test(this[_hasStreamListener]) || dart.test(this[_hasChangeListener]);
      }
      get [_isInactive]() {
        return !dart.test(this[_isActive]);
      }
    }
    (ChangeNotificationProvider.new = function(coalesce) {
      this[_coalesceScheduled] = false;
      this[_streamController] = null;
      this[_changeController] = null;
      this[_previous] = null;
      this[_next] = null;
      this[_coalesce] = coalesce;
    }).prototype = ChangeNotificationProvider.prototype;
    dart.addTypeTests(ChangeNotificationProvider);
    ChangeNotificationProvider.prototype[_is_ChangeNotificationProvider_default] = true;
    ChangeNotificationProvider[dart.implements] = () => [ChangeAwareOfT(), utils__disposer__disposer.Disposable];
    dart.setMethodSignature(ChangeNotificationProvider, () => ({
      __proto__: dart.getMethods(ChangeNotificationProvider.__proto__),
      notifyChange: dart.fnType(dart.void, [], [core.Object, core.Object]),
      [_doCoalesce]: dart.fnType(dart.void, [core.Object, core.Object]),
      [_doNotifyChange]: dart.fnType(dart.void, [core.Object, core.Object]),
      dispose: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ChangeNotificationProvider, () => ({
      __proto__: dart.getGetters(ChangeNotificationProvider.__proto__),
      stream: dart.fnType(async.Stream$(T), []),
      changes: dart.fnType(async.Stream$(model__observable__observable.Change$(T)), []),
      [_hasStreamListener]: dart.fnType(core.bool, []),
      [_hasChangeListener]: dart.fnType(core.bool, []),
      [_isActive]: dart.fnType(core.bool, []),
      [_isInactive]: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(ChangeNotificationProvider, () => ({
      __proto__: dart.getFields(ChangeNotificationProvider.__proto__),
      [_coalesce]: dart.fieldType(core.bool),
      [_coalesceScheduled]: dart.fieldType(core.bool),
      [_streamController]: dart.fieldType(StreamControllerOfT()),
      [_changeController]: dart.fieldType(StreamControllerOfChangeOfT()),
      [_previous]: dart.fieldType(T),
      [_next]: dart.fieldType(T)
    }));
    return ChangeNotificationProvider;
  });
  model__observable__observable.ChangeNotificationProvider = model__observable__observable.ChangeNotificationProvider$();
  dart.addTypeTests(model__observable__observable.ChangeNotificationProvider, _is_ChangeNotificationProvider_default);
  const _is_ObservableView_default = Symbol('_is_ObservableView_default');
  model__observable__observable.ObservableView$ = dart.generic(T => {
    let ObservableReferenceOfT = () => (ObservableReferenceOfT = dart.constFn(model__observable__observable.ObservableReference$(T)))();
    class ObservableView extends model__observable__observable.ChangeAware$(T) {
      static fromStream(stream, opts) {
        let initialValue = opts && 'initialValue' in opts ? opts.initialValue : null;
        let _ = new (ObservableReferenceOfT()).new(initialValue);
        _.listen(stream);
        return _;
      }
    }
    dart.addTypeTests(ObservableView);
    ObservableView.prototype[_is_ObservableView_default] = true;
    ObservableView[dart.implements] = () => [utils__disposer__disposer.Disposable];
    return ObservableView;
  });
  model__observable__observable.ObservableView = model__observable__observable.ObservableView$();
  dart.addTypeTests(model__observable__observable.ObservableView, _is_ObservableView_default);
  const _is_ObservableViewMixin_default = Symbol('_is_ObservableViewMixin_default');
  model__observable__observable.ObservableViewMixin$ = dart.generic(T => {
    let ChangeOfT = () => (ChangeOfT = dart.constFn(model__observable__observable.Change$(T)))();
    let TToChangeOfT = () => (TToChangeOfT = dart.constFn(dart.fnType(ChangeOfT(), [T])))();
    let ObservableViewOfT = () => (ObservableViewOfT = dart.constFn(model__observable__observable.ObservableView$(T)))();
    class ObservableViewMixin extends core.Object {
      get changes() {
        let last = this.value;
        return this.stream.map(ChangeOfT(), dart.fn(v => {
          let change = new (ChangeOfT()).new(last, v);
          last = v;
          return change;
        }, TToChangeOfT()));
      }
      map(M, mapper) {
        return new (model__observable__observable._MappedView$(T, M)).new(this, mapper);
      }
    }
    (ObservableViewMixin.new = function() {
    }).prototype = ObservableViewMixin.prototype;
    dart.addTypeTests(ObservableViewMixin);
    ObservableViewMixin.prototype[_is_ObservableViewMixin_default] = true;
    ObservableViewMixin[dart.implements] = () => [ObservableViewOfT()];
    dart.setMethodSignature(ObservableViewMixin, () => ({
      __proto__: dart.getMethods(ObservableViewMixin.__proto__),
      map: dart.gFnType(M => [model__observable__observable.ObservableView$(M), [dart.fnType(M, [T])]])
    }));
    dart.setGetterSignature(ObservableViewMixin, () => ({
      __proto__: dart.getGetters(ObservableViewMixin.__proto__),
      changes: dart.fnType(async.Stream$(model__observable__observable.Change$(T)), [])
    }));
    return ObservableViewMixin;
  });
  model__observable__observable.ObservableViewMixin = model__observable__observable.ObservableViewMixin$();
  dart.addTypeTests(model__observable__observable.ObservableViewMixin, _is_ObservableViewMixin_default);
  const _delegate = Symbol('_delegate');
  const _mapper = Symbol('_mapper');
  const _is__MappedView_default = Symbol('_is__MappedView_default');
  model__observable__observable._MappedView$ = dart.generic((I, O) => {
    let ObservableViewOfI = () => (ObservableViewOfI = dart.constFn(model__observable__observable.ObservableView$(I)))();
    let IToO = () => (IToO = dart.constFn(dart.fnType(O, [I])))();
    class _MappedView extends model__observable__observable.ObservableViewMixin$(O) {
      get value() {
        return this[_mapper](this[_delegate].value);
      }
      get stream() {
        return this[_delegate].stream.map(O, this[_mapper]);
      }
      dispose() {}
    }
    (_MappedView.new = function(delegate, mapper) {
      this[_delegate] = delegate;
      this[_mapper] = mapper;
    }).prototype = _MappedView.prototype;
    dart.addTypeTests(_MappedView);
    _MappedView.prototype[_is__MappedView_default] = true;
    dart.setMethodSignature(_MappedView, () => ({
      __proto__: dart.getMethods(_MappedView.__proto__),
      dispose: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_MappedView, () => ({
      __proto__: dart.getGetters(_MappedView.__proto__),
      value: dart.fnType(O, []),
      stream: dart.fnType(async.Stream$(O), [])
    }));
    dart.setFieldSignature(_MappedView, () => ({
      __proto__: dart.getFields(_MappedView.__proto__),
      [_delegate]: dart.finalFieldType(ObservableViewOfI()),
      [_mapper]: dart.finalFieldType(IToO())
    }));
    return _MappedView;
  });
  model__observable__observable._MappedView = model__observable__observable._MappedView$();
  dart.addTypeTests(model__observable__observable._MappedView, _is__MappedView_default);
  const _value = Symbol('_value');
  const _equalsFn = Symbol('_equalsFn');
  const _listenSub = Symbol('_listenSub');
  const _is_ObservableReference_default = Symbol('_is_ObservableReference_default');
  model__observable__observable.ObservableReference$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let TAndTTobool = () => (TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    const ChangeNotificationProvider_ObservableViewMixin$ = class ChangeNotificationProvider_ObservableViewMixin extends model__observable__observable.ChangeNotificationProvider$(T) {};
    (ChangeNotificationProvider_ObservableViewMixin$.new = function(_coalesce) {
      ChangeNotificationProvider_ObservableViewMixin$.__proto__.new.call(this, _coalesce);
    }).prototype = ChangeNotificationProvider_ObservableViewMixin$.prototype;
    dart.mixinMembers(ChangeNotificationProvider_ObservableViewMixin$, model__observable__observable.ObservableViewMixin$(T));
    class ObservableReference extends ChangeNotificationProvider_ObservableViewMixin$ {
      static _defaultEq(a, b) {
        return dart.equals(a, b);
      }
      get value() {
        return this[_value];
      }
      set value(value) {
        T._check(value);
        if (dart.test(this[_equalsFn](this[_value], value))) return;
        let previous = this[_value];
        this[_value] = value;
        this.notifyChange(previous, value);
      }
      listen(stream) {
        StreamOfT()._check(stream);
        let t = this[_listenSub];
        t == null ? null : t.cancel();
        this[_listenSub] = stream.listen(dart.fn(v => {
          this.value = v;
        }, TToNull()));
        return this[_listenSub].asFuture(dart.dynamic);
      }
      dispose() {
        super.dispose();
        let t = this[_listenSub];
        t == null ? null : t.cancel();
        this[_value] = null;
      }
    }
    (ObservableReference.new = function(value, opts) {
      let equalsFn = opts && 'equalsFn' in opts ? opts.equalsFn : dart.tagStatic(model__observable__observable.ObservableReference, '_defaultEq');
      let coalesce = opts && 'coalesce' in opts ? opts.coalesce : false;
      this[_listenSub] = null;
      this[_value] = value;
      this[_equalsFn] = equalsFn;
      ObservableReference.__proto__.new.call(this, coalesce);
    }).prototype = ObservableReference.prototype;
    dart.addTypeTests(ObservableReference);
    ObservableReference.prototype[_is_ObservableReference_default] = true;
    dart.setMethodSignature(ObservableReference, () => ({
      __proto__: dart.getMethods(ObservableReference.__proto__),
      listen: dart.fnType(async.Future, [core.Object])
    }));
    dart.setStaticMethodSignature(ObservableReference, () => ({_defaultEq: dart.fnType(core.bool, [dart.dynamic, dart.dynamic])}));
    dart.setGetterSignature(ObservableReference, () => ({
      __proto__: dart.getGetters(ObservableReference.__proto__),
      value: dart.fnType(T, [])
    }));
    dart.setSetterSignature(ObservableReference, () => ({
      __proto__: dart.getSetters(ObservableReference.__proto__),
      value: dart.fnType(dart.void, [T])
    }));
    dart.setFieldSignature(ObservableReference, () => ({
      __proto__: dart.getFields(ObservableReference.__proto__),
      [_equalsFn]: dart.finalFieldType(TAndTTobool()),
      [_listenSub]: dart.fieldType(async.StreamSubscription),
      [_value]: dart.fieldType(T)
    }));
    return ObservableReference;
  });
  model__observable__observable.ObservableReference = model__observable__observable.ObservableReference$();
  dart.addTypeTests(model__observable__observable.ObservableReference, _is_ObservableReference_default);
  const _withStackTrace = Symbol('_withStackTrace');
  const _subscriptions = Symbol('_subscriptions');
  const _disposer = Symbol('_disposer');
  const _is_ObservableComposite_default = Symbol('_is_ObservableComposite_default');
  model__observable__observable.ObservableComposite$ = dart.generic(T => {
    class ObservableComposite extends model__observable__observable.ChangeNotificationProvider$(T) {
      register(value, opts) {
        let replaces = opts && 'replaces' in opts ? opts.replaces : null;
        let initialNotification = opts && 'initialNotification' in opts ? opts.initialNotification : true;
        if (value == null) return null;
        let replacesStream = replaces == null ? null : replaces.stream;
        this.registerStream(value.stream, {replaces: replacesStream, initialNotification: initialNotification});
        if (utils__disposer__disposer.Disposable.is(value)) {
          this[_disposer].addDisposable(model__observable__observable.ObserveAware, value);
        }
        return value;
      }
      unregister(value) {
        if (value == null) return;
        this.unregisterStream(value.stream);
      }
      registerStream(stream, opts) {
        let replaces = opts && 'replaces' in opts ? opts.replaces : null;
        let initialNotification = opts && 'initialNotification' in opts ? opts.initialNotification : true;
        if (dart.test(this[_subscriptions][$containsKey](stream))) {
          if (!(replaces == null)) dart.assertFailed();
          return stream;
        }
        if (replaces != null) {
          this.unregisterStream(replaces);
        }
        let stackTrace = null;
        if (!dart.test(dart.fn(() => {
          if (dart.test(this[_withStackTrace])) {
            stackTrace = core.StackTrace.current;
          }
          return true;
        }, VoidTobool())())) dart.assertFailed();
        this[_subscriptions][$_set](stream, stream.listen(dart.fn(_ => {
          if (stackTrace != null) {
            core.print(dart.str`Coalescer notified from ${stackTrace}`);
          }
          this.notifyChange();
        }, dynamicToNull())));
        if (dart.test(initialNotification)) {
          this.notifyChange();
        }
        return stream;
      }
      unregisterStream(stream) {
        if (stream == null) return;
        let subs = this[_subscriptions][$remove](stream);
        if (subs != null) {
          subs.cancel();
        }
      }
      dispose() {
        super.dispose();
        this[_subscriptions][$values][$forEach](dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()));
        this[_subscriptions][$clear]();
        this[_disposer].dispose();
      }
    }
    (ObservableComposite.new = function(opts) {
      let coalesce = opts && 'coalesce' in opts ? opts.coalesce : false;
      let values = opts && 'values' in opts ? opts.values : null;
      let withStackTrace = opts && 'withStackTrace' in opts ? opts.withStackTrace : false;
      this[_subscriptions] = new (LinkedMapOfStream$StreamSubscription()).new();
      this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
      this[_withStackTrace] = withStackTrace;
      ObservableComposite.__proto__.new.call(this, coalesce);
      if (values != null) {
        for (let ref of values) {
          this.register(ref);
        }
      }
    }).prototype = ObservableComposite.prototype;
    dart.addTypeTests(ObservableComposite);
    ObservableComposite.prototype[_is_ObservableComposite_default] = true;
    dart.setMethodSignature(ObservableComposite, () => ({
      __proto__: dart.getMethods(ObservableComposite.__proto__),
      register: dart.fnType(model__observable__observable.ObserveAware, [model__observable__observable.ObserveAware], {replaces: model__observable__observable.ObserveAware, initialNotification: core.bool}),
      unregister: dart.fnType(dart.void, [model__observable__observable.ObserveAware]),
      registerStream: dart.fnType(async.Stream, [async.Stream], {replaces: async.Stream, initialNotification: core.bool}),
      unregisterStream: dart.fnType(dart.void, [async.Stream])
    }));
    dart.setFieldSignature(ObservableComposite, () => ({
      __proto__: dart.getFields(ObservableComposite.__proto__),
      [_subscriptions]: dart.fieldType(MapOfStream$StreamSubscription()),
      [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
      [_withStackTrace]: dart.finalFieldType(core.bool)
    }));
    return ObservableComposite;
  });
  model__observable__observable.ObservableComposite = model__observable__observable.ObservableComposite$();
  dart.addTypeTests(model__observable__observable.ObservableComposite, _is_ObservableComposite_default);
  dart.trackLibraries("packages/angular_components/model/observable/observable.ddc", {
    "package:angular_components/model/observable/observable.dart": model__observable__observable
  }, '{"version":3,"sourceRoot":"","sources":["observable.dart"],"names":[],"mappings":"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","file":"observable.ddc.js"}');
  // Exports:
  return {
    model__observable__observable: model__observable__observable
  };
});

//# sourceMappingURL=observable.ddc.js.map
