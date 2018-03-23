define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils__async__simple_stream = Object.create(_root);
  const $add = dartx.add;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $clear = dartx.clear;
  const $removeAt = dartx.removeAt;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let JSArrayOfSimpleStream = () => (JSArrayOfSimpleStream = dart.constFn(_interceptors.JSArray$(src__utils__async__simple_stream.SimpleStream)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FnTovoid = () => (FnTovoid = dart.constFn(dart.fnType(dart.void, [VoidTodynamic()])))();
  src__utils__async__simple_stream.StreamCallContextFunc = dart.typedef('StreamCallContextFunc', () => dart.fnType(dart.void, [VoidTodynamic()]));
  src__utils__async__simple_stream.StreamCallbackFunc$ = dart.generic(T => {
    const StreamCallbackFunc = dart.typedef('StreamCallbackFunc', () => dart.fnType(dart.void, [T]));
    return StreamCallbackFunc;
  });
  src__utils__async__simple_stream.StreamCallbackFunc = src__utils__async__simple_stream.StreamCallbackFunc$();
  src__utils__async__simple_stream.SubscriptionChangeListener$ = dart.generic(T => {
    const SubscriptionChangeListener = dart.typedef('SubscriptionChangeListener', () => dart.fnType(dart.void, [async.StreamSubscription$(T)]));
    return SubscriptionChangeListener;
  });
  src__utils__async__simple_stream.SubscriptionChangeListener = src__utils__async__simple_stream.SubscriptionChangeListener$();
  const _isSync = Symbol('_isSync');
  const _runInZone = Symbol('_runInZone');
  const _onListen = Symbol('_onListen');
  const _onCancel = Symbol('_onCancel');
  const _subscriptions = Symbol('_subscriptions');
  const _itemsToSend = Symbol('_itemsToSend');
  const _subscriptionRemoved = Symbol('_subscriptionRemoved');
  const _sendItem = Symbol('_sendItem');
  const _sendAsync = Symbol('_sendAsync');
  const _cleanUp = Symbol('_cleanUp');
  const _stream = Symbol('_stream');
  const _add = Symbol('_add');
  const _onError = Symbol('_onError');
  const _cancelOnError = Symbol('_cancelOnError');
  const _closeSubscription = Symbol('_closeSubscription');
  const _scheduleCleanup = Symbol('_scheduleCleanup');
  const _is_SimpleStream_default = Symbol('_is_SimpleStream_default');
  src__utils__async__simple_stream.SimpleStream$ = dart.generic(T => {
    let SimpleStreamSubscriptionOfT = () => (SimpleStreamSubscriptionOfT = dart.constFn(src__utils__async__simple_stream.SimpleStreamSubscription$(T)))();
    let JSArrayOfSimpleStreamSubscriptionOfT = () => (JSArrayOfSimpleStreamSubscriptionOfT = dart.constFn(_interceptors.JSArray$(SimpleStreamSubscriptionOfT())))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let ListOfSimpleStreamSubscriptionOfT = () => (ListOfSimpleStreamSubscriptionOfT = dart.constFn(core.List$(SimpleStreamSubscriptionOfT())))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let StreamSubscriptionOfTTovoid = () => (StreamSubscriptionOfTTovoid = dart.constFn(dart.fnType(dart.void, [StreamSubscriptionOfT()])))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class SimpleStream extends async.StreamView$(T) {
      get isBroadcast() {
        return this[isBroadcast];
      }
      set isBroadcast(value) {
        super.isBroadcast = value;
      }
      get isSync() {
        return this[_isSync];
      }
      asBroadcastStream(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        if (onListen != null || onCancel != null) {
          dart.throw(new core.UnsupportedError.new('Not supported outside constructor.'));
        }
        return this;
      }
      get stream() {
        return this;
      }
      add(item) {
        T._check(item);
        if (!dart.test(this.hasListener)) return;
        if (dart.test(this[_isSync])) {
          this[_sendItem](this[_subscriptions], item);
        } else {
          let schedule = false;
          if (this[_itemsToSend] == null) {
            this[_itemsToSend] = JSArrayOfT().of([]);
            schedule = true;
          }
          this[_itemsToSend][$add](item);
          if (schedule) {
            async.scheduleMicrotask(dart.bind(this, _sendAsync));
          }
        }
      }
      static _cleanupTask() {
        for (let i = 0; i < dart.notNull(src__utils__async__simple_stream.SimpleStream._cleanupStreams[$length]); i++) {
          src__utils__async__simple_stream.SimpleStream._cleanupStreams[$_get](i)[_cleanUp]();
        }
        src__utils__async__simple_stream.SimpleStream._cleanupStreams[$clear]();
      }
      [_cleanUp]() {
        if (dart.test(this.hasListener)) {
          let listeners = this[_subscriptions];
          let lastSubscription = null;
          let i = dart.notNull(listeners[$length]) - 1;
          while (i >= 0) {
            let stream = listeners[$_get](i)[_stream];
            if (stream == null) {
              lastSubscription = listeners[$removeAt](i);
            }
            i--;
          }
          if (dart.test(listeners[$isEmpty]) && lastSubscription != null && this[_onCancel] != null) {
            this[_onCancel](lastSubscription);
          }
        }
        this[_subscriptionRemoved] = false;
      }
      [_sendItem](listeners, item, len) {
        ListOfSimpleStreamSubscriptionOfT()._check(listeners);
        T._check(item);
        if (len === void 0) len = -1;
        if (len === -1) {
          len = listeners[$length];
        }
        for (let i = 0; i < dart.notNull(len); i++) {
          listeners[$_get](i)[_add](item);
        }
      }
      addError(errorEvent, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (!dart.test(this.hasListener)) return;
        let listeners = this[_subscriptions];
        let len = listeners[$length];
        for (let i = 0; i < dart.notNull(len); i++) {
          let sub = listeners[$_get](i);
          let callback = sub[_onError];
          if (sub[_cancelOnError] === true) {
            sub[_closeSubscription]();
          }
          if (callback != null) {
            if (dynamicAnddynamicTodynamic().is(callback)) {
              dart.dcall(callback, errorEvent, stackTrace);
            } else if (dynamicTodynamic().is(callback)) {
              dart.dcall(callback, errorEvent);
            }
          }
        }
      }
      close() {
        if (this[_subscriptions] != null) {
          let listeners = this[_subscriptions];
          this[_subscriptions] = null;
          for (let i = 0; i < dart.notNull(listeners[$length]); i++) {
            listeners[$_get](i)[_closeSubscription]();
          }
        }
      }
      get isClosed() {
        return this[_subscriptions] == null;
      }
      get hasListener() {
        return this[_subscriptions] != null && dart.test(this[_subscriptions][$isNotEmpty]);
      }
      [_sendAsync]() {
        let listeners = this[_subscriptions];
        let sendList = this[_itemsToSend];
        this[_itemsToSend] = null;
        if (listeners != null) {
          let len = listeners[$length];
          for (let i = 0; i < dart.notNull(sendList[$length]); i++) {
            let item = sendList[$_get](i);
            this[_sendItem](listeners, item, len);
          }
        }
      }
      [_scheduleCleanup](subscription) {
        SimpleStreamSubscriptionOfT()._check(subscription);
        if (!dart.test(this[_subscriptionRemoved])) {
          this[_subscriptionRemoved] = true;
          src__utils__async__simple_stream.SimpleStream._cleanupStreams[$add](this);
          if (src__utils__async__simple_stream.SimpleStream._cleanupStreams[$length] === 1) {
            async.scheduleMicrotask(dart.tagStatic(src__utils__async__simple_stream.SimpleStream, '_cleanupTask'));
          }
        }
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (!(this[_subscriptions] != null)) dart.assertFailed();
        let contextFunc = null;
        if (dart.test(this[_runInZone])) {
          contextFunc = dart.gbind(dart.bind(async.Zone.current, 'run'), dart.dynamic);
        }
        let sub = new (SimpleStreamSubscriptionOfT()).new(this, onData, onDone, onError, cancelOnError, contextFunc);
        this[_subscriptions][$add](sub);
        if (this[_onListen] != null && this[_subscriptions][$length] === 1) {
          this[_onListen](sub);
        }
        return sub;
      }
    }
    (SimpleStream.new = function(opts) {
      let isSync = opts && 'isSync' in opts ? opts.isSync : false;
      let runInZone = opts && 'runInZone' in opts ? opts.runInZone : false;
      this[_onListen] = null;
      this[_onCancel] = null;
      this[isBroadcast] = true;
      this[_subscriptions] = JSArrayOfSimpleStreamSubscriptionOfT().of([]);
      this[_itemsToSend] = null;
      this[_subscriptionRemoved] = false;
      this[_isSync] = isSync;
      this[_runInZone] = runInZone;
      SimpleStream.__proto__.new.call(this, dart.const(StreamOfT().empty()));
    }).prototype = SimpleStream.prototype;
    (SimpleStream.broadcast = function(opts) {
      let isSync = opts && 'isSync' in opts ? opts.isSync : false;
      let runInZone = opts && 'runInZone' in opts ? opts.runInZone : false;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      this[isBroadcast] = true;
      this[_subscriptions] = JSArrayOfSimpleStreamSubscriptionOfT().of([]);
      this[_itemsToSend] = null;
      this[_subscriptionRemoved] = false;
      this[_isSync] = isSync;
      this[_runInZone] = runInZone;
      this[_onListen] = onListen;
      this[_onCancel] = onCancel;
      SimpleStream.__proto__.new.call(this, dart.const(StreamOfT().empty()));
    }).prototype = SimpleStream.prototype;
    dart.addTypeTests(SimpleStream);
    SimpleStream.prototype[_is_SimpleStream_default] = true;
    const isBroadcast = Symbol("SimpleStream.isBroadcast");
    SimpleStream[dart.implements] = () => [EventSinkOfT()];
    dart.setMethodSignature(SimpleStream, () => ({
      __proto__: dart.getMethods(SimpleStream.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      [_cleanUp]: dart.fnType(dart.void, []),
      [_sendItem]: dart.fnType(dart.void, [core.Object, core.Object], [core.int]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, []),
      [_sendAsync]: dart.fnType(dart.void, []),
      [_scheduleCleanup]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setStaticMethodSignature(SimpleStream, () => ({_cleanupTask: dart.fnType(dart.void, [])}));
    dart.setGetterSignature(SimpleStream, () => ({
      __proto__: dart.getGetters(SimpleStream.__proto__),
      isSync: dart.fnType(core.bool, []),
      stream: dart.fnType(async.Stream$(T), []),
      isClosed: dart.fnType(core.bool, []),
      hasListener: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(SimpleStream, () => ({
      __proto__: dart.getFields(SimpleStream.__proto__),
      [_isSync]: dart.finalFieldType(core.bool),
      [_runInZone]: dart.finalFieldType(core.bool),
      [_onListen]: dart.fieldType(StreamSubscriptionOfTTovoid()),
      [_onCancel]: dart.fieldType(StreamSubscriptionOfTTovoid()),
      isBroadcast: dart.finalFieldType(core.bool),
      [_subscriptions]: dart.fieldType(ListOfSimpleStreamSubscriptionOfT()),
      [_itemsToSend]: dart.fieldType(ListOfT()),
      [_subscriptionRemoved]: dart.fieldType(core.bool)
    }));
    return SimpleStream;
  });
  src__utils__async__simple_stream.SimpleStream = src__utils__async__simple_stream.SimpleStream$();
  dart.defineLazy(src__utils__async__simple_stream.SimpleStream, {
    /*src__utils__async__simple_stream.SimpleStream._cleanupStreams*/get _cleanupStreams() {
      return JSArrayOfSimpleStream().of([]);
    },
    set _cleanupStreams(_) {}
  });
  dart.addTypeTests(src__utils__async__simple_stream.SimpleStream, _is_SimpleStream_default);
  const _lastItem = Symbol('_lastItem');
  const _is_LastStateStream_default = Symbol('_is_LastStateStream_default');
  src__utils__async__simple_stream.LastStateStream$ = dart.generic(T => {
    let SimpleStreamSubscriptionOfT = () => (SimpleStreamSubscriptionOfT = dart.constFn(src__utils__async__simple_stream.SimpleStreamSubscription$(T)))();
    let JSArrayOfSimpleStreamSubscriptionOfT = () => (JSArrayOfSimpleStreamSubscriptionOfT = dart.constFn(_interceptors.JSArray$(SimpleStreamSubscriptionOfT())))();
    class LastStateStream extends src__utils__async__simple_stream.SimpleStream$(T) {
      add(item) {
        T._check(item);
        this[_lastItem] = item;
        super.add(item);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        let sub = SimpleStreamSubscriptionOfT()._check(super.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError}));
        if (this[_lastItem] != null) {
          if (dart.test(this[_isSync])) {
            this[_sendItem](JSArrayOfSimpleStreamSubscriptionOfT().of([sub]), this[_lastItem]);
          } else if (this[_itemsToSend] == null) {
            async.scheduleMicrotask(dart.fn(() => {
              this[_sendItem](JSArrayOfSimpleStreamSubscriptionOfT().of([sub]), this[_lastItem]);
            }, VoidToNull()));
          }
        }
        return sub;
      }
    }
    (LastStateStream.new = function(opts) {
      let isSync = opts && 'isSync' in opts ? opts.isSync : false;
      let runInZone = opts && 'runInZone' in opts ? opts.runInZone : false;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      this[_lastItem] = null;
      LastStateStream.__proto__.broadcast.call(this, {isSync: isSync, runInZone: runInZone, onListen: onListen, onCancel: onCancel});
    }).prototype = LastStateStream.prototype;
    dart.addTypeTests(LastStateStream);
    LastStateStream.prototype[_is_LastStateStream_default] = true;
    dart.setMethodSignature(LastStateStream, () => ({
      __proto__: dart.getMethods(LastStateStream.__proto__),
      add: dart.fnType(dart.void, [core.Object])
    }));
    dart.setFieldSignature(LastStateStream, () => ({
      __proto__: dart.getFields(LastStateStream.__proto__),
      [_lastItem]: dart.fieldType(T)
    }));
    return LastStateStream;
  });
  src__utils__async__simple_stream.LastStateStream = src__utils__async__simple_stream.LastStateStream$();
  dart.addTypeTests(src__utils__async__simple_stream.LastStateStream, _is_LastStateStream_default);
  const _is_EmptySimpleStream_default = Symbol('_is_EmptySimpleStream_default');
  src__utils__async__simple_stream.EmptySimpleStream$ = dart.generic(T => {
    let SimpleStreamSubscriptionOfT = () => (SimpleStreamSubscriptionOfT = dart.constFn(src__utils__async__simple_stream.SimpleStreamSubscription$(T)))();
    class EmptySimpleStream extends src__utils__async__simple_stream.SimpleStream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return SimpleStreamSubscriptionOfT()._empty();
      }
    }
    (EmptySimpleStream.new = function(isSync) {
      if (isSync === void 0) isSync = false;
      EmptySimpleStream.__proto__.new.call(this, {isSync: isSync});
    }).prototype = EmptySimpleStream.prototype;
    dart.addTypeTests(EmptySimpleStream);
    EmptySimpleStream.prototype[_is_EmptySimpleStream_default] = true;
    return EmptySimpleStream;
  });
  src__utils__async__simple_stream.EmptySimpleStream = src__utils__async__simple_stream.EmptySimpleStream$();
  dart.addTypeTests(src__utils__async__simple_stream.EmptySimpleStream, _is_EmptySimpleStream_default);
  const _callback = Symbol('_callback');
  const _doneCallback = Symbol('_doneCallback');
  const _contextFunc = Symbol('_contextFunc');
  const _is_SimpleStreamSubscription_default = Symbol('_is_SimpleStreamSubscription_default');
  src__utils__async__simple_stream.SimpleStreamSubscription$ = dart.generic(T => {
    let SimpleStreamSubscriptionOfT = () => (SimpleStreamSubscriptionOfT = dart.constFn(src__utils__async__simple_stream.SimpleStreamSubscription$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let SimpleStreamOfT = () => (SimpleStreamOfT = dart.constFn(src__utils__async__simple_stream.SimpleStream$(T)))();
    class SimpleStreamSubscription extends core.Object {
      get isPaused() {
        return this[isPaused];
      }
      set isPaused(value) {
        super.isPaused = value;
      }
      static _empty() {
        return new (SimpleStreamSubscriptionOfT()).new(null, null, null, null, false, null);
      }
      cancel() {
        if (this[_stream] != null) {
          let stream = this[_stream];
          this[_doneCallback] = null;
          this[_closeSubscription]();
          stream[_scheduleCleanup](this);
        }
        return null;
      }
      [_closeSubscription]() {
        this[_stream] = null;
        this[_callback] = null;
        this[_onError] = null;
        if (this[_doneCallback] != null) {
          dart.dcall(this[_doneCallback]);
          this[_doneCallback] = null;
        }
      }
      [_add](data) {
        T._check(data);
        if (this[_callback] != null) {
          if (this[_contextFunc] != null) {
            this[_contextFunc](dart.fn(() => this[_callback](data), VoidTovoid()));
          } else {
            this[_callback](data);
          }
        }
      }
      onData(handleData) {
        if (this[_stream] != null) {
          this[_callback] = handleData;
        }
      }
      onError(handleError) {
        if (this[_stream] != null) {
          this[_onError] = handleError;
        }
      }
      onDone(handleDone) {
        if (this[_stream] != null) {
          this[_doneCallback] = handleDone;
        }
      }
      pause(resumeSignal) {
        if (resumeSignal === void 0) resumeSignal = null;
        return dart.throw(new core.UnsupportedError.new('Not supported.'));
      }
      resume() {
        dart.throw(new core.UnsupportedError.new('Not supported.'));
      }
      asFuture(S, futureValue) {
        if (futureValue === void 0) futureValue = null;
        dart.throw(new core.UnsupportedError.new('Not supported.'));
      }
    }
    (SimpleStreamSubscription.new = function(stream, callback, doneCallback, onError, cancelOnError, contextFunc) {
      this[isPaused] = false;
      this[_stream] = stream;
      this[_callback] = callback;
      this[_doneCallback] = doneCallback;
      this[_onError] = onError;
      this[_cancelOnError] = cancelOnError;
      this[_contextFunc] = contextFunc;
    }).prototype = SimpleStreamSubscription.prototype;
    SimpleStreamSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(SimpleStreamSubscription);
    SimpleStreamSubscription.prototype[_is_SimpleStreamSubscription_default] = true;
    const isPaused = Symbol("SimpleStreamSubscription.isPaused");
    SimpleStreamSubscription[dart.implements] = () => [StreamSubscriptionOfT()];
    dart.setMethodSignature(SimpleStreamSubscription, () => ({
      __proto__: dart.getMethods(SimpleStreamSubscription.__proto__),
      cancel: dart.fnType(async.Future, []),
      [_closeSubscription]: dart.fnType(dart.void, []),
      [_add]: dart.fnType(dart.void, [core.Object]),
      onData: dart.fnType(dart.void, [TTovoid()]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [VoidTovoid()]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      asFuture: dart.gFnType(S => [async.Future$(S), [], [S]])
    }));
    dart.setFieldSignature(SimpleStreamSubscription, () => ({
      __proto__: dart.getFields(SimpleStreamSubscription.__proto__),
      isPaused: dart.finalFieldType(core.bool),
      [_stream]: dart.fieldType(SimpleStreamOfT()),
      [_callback]: dart.fieldType(TTovoid()),
      [_contextFunc]: dart.fieldType(FnTovoid()),
      [_doneCallback]: dart.fieldType(core.Function),
      [_onError]: dart.fieldType(core.Function),
      [_cancelOnError]: dart.fieldType(core.bool)
    }));
    return SimpleStreamSubscription;
  });
  src__utils__async__simple_stream.SimpleStreamSubscription = src__utils__async__simple_stream.SimpleStreamSubscription$();
  dart.addTypeTests(src__utils__async__simple_stream.SimpleStreamSubscription, _is_SimpleStreamSubscription_default);
  dart.trackLibraries("packages/angular_components/src/utils/async/simple_stream.ddc", {
    "package:angular_components/src/utils/async/simple_stream.dart": src__utils__async__simple_stream
  }, '{"version":3,"sourceRoot":"","sources":["simple_stream.dart"],"names":[],"mappings":"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","file":"simple_stream.ddc.js"}');
  // Exports:
  return {
    src__utils__async__simple_stream: src__utils__async__simple_stream
  };
});

//# sourceMappingURL=simple_stream.ddc.js.map
