define(['dart_sdk', 'packages/angular_components/src/utils/async/zoned_async', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/disposer/disposable_callback', 'packages/angular/src/core/zone/ng_zone'], function(dart_sdk, zoned_async, disposer, disposable_callback, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils__async__zoned_async = zoned_async.src__utils__async__zoned_async;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const utils__disposer__disposable_callback = disposable_callback.utils__disposer__disposable_callback;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const _root = Object.create(null);
  const utils__browser__dom_service__dom_service = Object.create(_root);
  const $cancelAnimationFrame = dartx.cancelAnimationFrame;
  const $requestAnimationFrame = dartx.requestAnimationFrame;
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $clear = dartx.clear;
  const $onAnimationEnd = dartx.onAnimationEnd;
  const $onResize = dartx.onResize;
  const $onTransitionEnd = dartx.onTransitionEnd;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $truncate = dartx.truncate;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfVoidTovoid = () => (JSArrayOfVoidTovoid = dart.constFn(_interceptors.JSArray$(VoidTovoid())))();
  let ObjectToNull = () => (ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let CompleterOfnum = () => (CompleterOfnum = dart.constFn(async.Completer$(core.num)))();
  let numToNull = () => (numToNull = dart.constFn(dart.fnType(core.Null, [core.num])))();
  let ZonedFutureOfnum = () => (ZonedFutureOfnum = dart.constFn(src__utils__async__zoned_async.ZonedFuture$(core.num)))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidTovoid$ = () => (VoidTovoid$ = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamicTovoid$ = () => (dynamicTovoid$ = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let numTovoid = () => (numTovoid = dart.constFn(dart.fnType(dart.void, [core.num])))();
  let ListOfVoidTovoid = () => (ListOfVoidTovoid = dart.constFn(core.List$(VoidTovoid())))();
  let FutureOfnum = () => (FutureOfnum = dart.constFn(async.Future$(core.num)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  utils__browser__dom_service__dom_service.DomReadWriteFn = dart.typedef('DomReadWriteFn', () => dart.fnType(dart.void, []));
  utils__browser__dom_service__dom_service.RequestAnimationFrame = dart.typedef('RequestAnimationFrame', () => dart.fnType(async.Future$(core.num), []));
  const _ngZone = Symbol('_ngZone');
  const _window = Symbol('_window');
  const _domReadQueue = Symbol('_domReadQueue');
  const _domWriteQueue = Symbol('_domWriteQueue');
  const _rootZone = Symbol('_rootZone');
  const _insideDigest = Symbol('_insideDigest');
  const _layoutObserveRead = Symbol('_layoutObserveRead');
  const _scheduledProcessQueue = Symbol('_scheduledProcessQueue');
  const _onLayoutChangedController = Symbol('_onLayoutChangedController');
  const _onLayoutChangedStream = Symbol('_onLayoutChangedStream');
  const _onQueuesProcessedController = Symbol('_onQueuesProcessedController');
  const _onQueuesProcessedStream = Symbol('_onQueuesProcessedStream');
  const _nextFrameId = Symbol('_nextFrameId');
  const _nextFrameCompleter = Symbol('_nextFrameCompleter');
  const _nextFrameFuture = Symbol('_nextFrameFuture');
  const _state = Symbol('_state');
  const _crossAppInitialized = Symbol('_crossAppInitialized');
  const _onIdleController = Symbol('_onIdleController');
  const _onIdleStream = Symbol('_onIdleStream');
  const _idleTimerMillis = Symbol('_idleTimerMillis');
  const _idleTimer = Symbol('_idleTimer');
  const _inDispatchTurnDoneEvent = Symbol('_inDispatchTurnDoneEvent');
  const _writeQueueChangedLayout = Symbol('_writeQueueChangedLayout');
  const _resetIdleTimer = Symbol('_resetIdleTimer');
  const _scheduleInQueue = Symbol('_scheduleInQueue');
  const _scheduleProcessQueue = Symbol('_scheduleProcessQueue');
  const _processQueue = Symbol('_processQueue');
  const _scheduleOnLayoutChanged = Symbol('_scheduleOnLayoutChanged');
  const _processQueues = Symbol('_processQueues');
  const _listenOnLayoutEvents = Symbol('_listenOnLayoutEvents');
  const _onLayoutObserve = Symbol('_onLayoutObserve');
  const _cancelIdleTimer = Symbol('_cancelIdleTimer');
  utils__browser__dom_service__dom_service.DomService = class DomService extends core.Object {
    get isDomMutatedPredicate() {
      return this[isDomMutatedPredicate];
    }
    set isDomMutatedPredicate(value) {
      this[isDomMutatedPredicate] = value;
    }
    get resetIsDomMutated() {
      return this[resetIsDomMutated];
    }
    set resetIsDomMutated(value) {
      this[resetIsDomMutated] = value;
    }
    init() {
      if (dart.test(this[_crossAppInitialized])) return;
      this[_crossAppInitialized] = true;
      this[_ngZone].runOutsideAngular(dart.fn(() => {
        this[_ngZone].onEventDone.listen(dart.fn(_ => {
          if (this.isDomMutatedPredicate == null || dart.test(this.isDomMutatedPredicate())) {
            this[_inDispatchTurnDoneEvent] = true;
            this[_window].dispatchEvent(html.Event.new("doms-turn"));
            this[_inDispatchTurnDoneEvent] = false;
            if (this.isDomMutatedPredicate != null && dart.test(this.isDomMutatedPredicate())) {
              this[_writeQueueChangedLayout] = true;
            }
            if (this.resetIsDomMutated != null) {
              dart.dcall(this.resetIsDomMutated);
            }
          }
        }, ObjectToNull()));
      }, VoidToNull()));
    }
    get isReadingDom() {
      return this[_state] === utils__browser__dom_service__dom_service.DomServiceState.Reading;
    }
    get isWritingDom() {
      return this[_state] === utils__browser__dom_service__dom_service.DomServiceState.Writing;
    }
    leap(opts) {
      let highResTimer = opts && 'highResTimer' in opts ? opts.highResTimer : null;
      let steps = opts && 'steps' in opts ? opts.steps : 1;
      this[_ngZone].run(core.Null, dart.fn(() => {
      }, VoidToNull()));
      while (dart.dtest(dart.dsend(steps, '>', 0))) {
        if (this[_nextFrameFuture] == null) return;
        if (highResTimer == null) {
          highResTimer = new core.DateTime.now().millisecondsSinceEpoch;
        }
        if (!(this[_nextFrameCompleter] != null)) dart.assertFailed();
        let completer = this[_nextFrameCompleter];
        this[_window][$cancelAnimationFrame](this[_nextFrameId]);
        this[_nextFrameFuture] = null;
        this[_nextFrameCompleter] = null;
        completer.complete(highResTimer);
        steps = dart.dsend(steps, '-', 1);
      }
    }
    get nextFrame() {
      if (this[_nextFrameFuture] == null) {
        if (!(this[_nextFrameCompleter] == null)) dart.assertFailed();
        let completer = CompleterOfnum().sync();
        this[_nextFrameCompleter] = completer;
        this[_ngZone].runOutsideAngular(dart.fn(() => {
          this.init();
          this[_nextFrameId] = this[_window][$requestAnimationFrame](dart.fn(highResTimer => {
            if (dart.test(completer.isCompleted)) return;
            if (completer._equals(this[_nextFrameCompleter])) {
              this[_nextFrameFuture] = null;
              this[_nextFrameCompleter] = null;
            }
            completer.complete(highResTimer);
          }, numToNull()));
        }, VoidToNull()));
        this[_nextFrameFuture] = new (ZonedFutureOfnum()).new(completer.future, dart.bind(this[_ngZone], 'runOutsideAngular'));
      }
      return this[_nextFrameFuture];
    }
    get onIdle() {
      if (this[_onIdleStream] == null) {
        this[_onIdleController] = async.StreamController.broadcast({sync: true, onListen: dart.bind(this, _resetIdleTimer), onCancel: dart.bind(this, _resetIdleTimer)});
        this[_onIdleStream] = new src__utils__async__zoned_async.ZonedStream.new(this[_onIdleController].stream, dart.bind(this[_ngZone], 'runOutsideAngular'));
      }
      return this[_onIdleStream];
    }
    scheduleRead(fn) {
      if (this[_state] === utils__browser__dom_service__dom_service.DomServiceState.Reading) {
        fn();
        return utils__disposer__disposer.Disposable.Noop;
      }
      let callback = new utils__disposer__disposable_callback.DisposableCallback.new(fn);
      this[_scheduleInQueue](dart.bind(callback, 'call'), this[_domReadQueue]);
      return callback;
    }
    scheduleWrite(fn) {
      if (this[_state] === utils__browser__dom_service__dom_service.DomServiceState.Writing) {
        fn();
        return utils__disposer__disposer.Disposable.Noop;
      }
      let callback = new utils__disposer__disposable_callback.DisposableCallback.new(fn);
      this[_scheduleInQueue](dart.bind(callback, 'call'), this[_domWriteQueue]);
      return callback;
    }
    [_scheduleInQueue](fn, queue) {
      queue[$add](fn);
      this[_scheduleProcessQueue]();
    }
    onRead() {
      let completer = async.Completer.sync();
      this.scheduleRead(dart.bind(completer, 'complete'));
      return new src__utils__async__zoned_async.ZonedFuture.new(completer.future, dart.bind(this[_ngZone], 'runOutsideAngular'));
    }
    onWrite() {
      let completer = async.Completer.sync();
      this.scheduleWrite(dart.bind(completer, 'complete'));
      return new src__utils__async__zoned_async.ZonedFuture.new(completer.future, dart.bind(this[_ngZone], 'runOutsideAngular'));
    }
    [_processQueues]() {
      if (!(this[_state] === utils__browser__dom_service__dom_service.DomServiceState.Idle)) dart.assertFailed();
      if (dart.test(this[_domReadQueue][$isEmpty]) && dart.test(this[_domWriteQueue][$isEmpty])) {
        this[_scheduledProcessQueue] = false;
        return;
      }
      this[_state] = utils__browser__dom_service__dom_service.DomServiceState.Reading;
      this[_processQueue](this[_domReadQueue]);
      this[_state] = utils__browser__dom_service__dom_service.DomServiceState.Writing;
      let previousWriteQueueLength = this[_processQueue](this[_domWriteQueue]);
      this[_writeQueueChangedLayout] = dart.notNull(previousWriteQueueLength) > 0;
      this[_state] = utils__browser__dom_service__dom_service.DomServiceState.Idle;
      if (dart.test(this[_writeQueueChangedLayout])) {
        this[_scheduleOnLayoutChanged]();
      }
      this[_scheduledProcessQueue] = false;
      if (dart.test(this[_domReadQueue][$isNotEmpty]) || dart.test(this[_domWriteQueue][$isNotEmpty])) {
        this[_scheduleProcessQueue]();
      } else if (this[_onQueuesProcessedController] != null) {
        this[_onQueuesProcessedController].add(this);
      }
    }
    [_processQueue](queue) {
      let previousLength = queue[$length];
      for (let i = 0; i < dart.notNull(queue[$length]); i++) {
        let fn = queue[$_get](i);
        if (fn == null) continue;
        fn();
      }
      if (!(queue[$length] == previousLength)) dart.assertFailed();
      queue[$clear]();
      return previousLength;
    }
    get onQueuesProcessed() {
      if (this[_onQueuesProcessedStream] == null) {
        this[_onQueuesProcessedController] = async.StreamController.broadcast({sync: true});
        this[_onQueuesProcessedStream] = new src__utils__async__zoned_async.ZonedStream.new(this[_onQueuesProcessedController].stream, dart.bind(this[_ngZone], 'runOutsideAngular'));
      }
      return this[_onQueuesProcessedStream];
    }
    get onLayoutChanged() {
      if (this[_onLayoutChangedStream] == null) {
        this[_onLayoutChangedController] = async.StreamController.broadcast({sync: true});
        this[_onLayoutChangedStream] = new src__utils__async__zoned_async.ZonedStream.new(this[_onLayoutChangedController].stream, dart.bind(this[_ngZone], 'runOutsideAngular'));
        this[_ngZone].runOutsideAngular(dart.fn(() => {
          this[_ngZone].onTurnStart.listen(dart.fn(_ => {
            if (this[_state] !== utils__browser__dom_service__dom_service.DomServiceState.Idle) return;
            this[_insideDigest] = true;
          }, ObjectToNull()));
          this[_ngZone].onEventDone.listen(dart.fn(_ => {
            if (this[_state] !== utils__browser__dom_service__dom_service.DomServiceState.Idle) return;
            this[_insideDigest] = false;
            if (this.isDomMutatedPredicate == null || dart.test(this.isDomMutatedPredicate()) || dart.test(this[_writeQueueChangedLayout])) {
              this[_scheduleOnLayoutChanged]();
              this[_writeQueueChangedLayout] = false;
            }
          }, ObjectToNull()));
          this[_listenOnLayoutEvents](this[_window][$onAnimationEnd]);
          this[_listenOnLayoutEvents](this[_window][$onResize]);
          this[_listenOnLayoutEvents](this[_window][$onTransitionEnd]);
          this[_window][$addEventListener]("doms-turn", dart.fn(_ => {
            if (!dart.test(this[_inDispatchTurnDoneEvent])) {
              this[_scheduleOnLayoutChanged]();
            }
          }, EventToNull()));
        }, VoidToNull()));
      }
      return this[_onLayoutChangedStream];
    }
    [_listenOnLayoutEvents](events) {
      if (events == null) return;
      events.listen(dart.fn(_ => this[_scheduleOnLayoutChanged](), dynamicTovoid()));
    }
    trackLayoutChange(T, fn, callback, opts) {
      let framesToStabilize = opts && 'framesToStabilize' in opts ? opts.framesToStabilize : 1;
      let runInAngularZone = opts && 'runInAngularZone' in opts ? opts.runInAngularZone : false;
      let trackerCallback = callback;
      if (dart.test(runInAngularZone)) {
        trackerCallback = dart.fn(value => {
          this[_ngZone].run(dart.void, dart.fn(() => callback(T._check(value)), VoidTovoid$()));
        }, dynamicToNull());
      }
      let tracker = new utils__browser__dom_service__dom_service._ChangeTracker.new(this, fn, trackerCallback, framesToStabilize);
      return this.onLayoutChanged.listen(dart.fn(_ => tracker[_onLayoutObserve](), dynamicTovoid$()));
    }
    addLayoutObserver(domReadCallback) {
      return this.onLayoutChanged.listen(dart.fn(_ => domReadCallback(), dynamicTovoid()));
    }
    describeStability() {
      return new (IdentityMapOfString$Object()).from(['_insideDigest', this[_insideDigest], '_scheduledProcessQueue', this[_scheduledProcessQueue], '_layoutObserveRead', this[_layoutObserveRead] != null, '_nextFrameFuture', this[_nextFrameFuture] != null, '_domReadQueue', this[_domReadQueue][$length], '_domWriteQueue', this[_domWriteQueue][$length]])[$toString]();
    }
    get hasPendingUpdate() {
      return dart.test(this[_insideDigest]) || dart.test(this[_scheduledProcessQueue]) || this[_layoutObserveRead] != null || this[_nextFrameFuture] != null || dart.test(this[_domReadQueue][$isNotEmpty]) || dart.test(this[_domWriteQueue][$isNotEmpty]);
    }
    get isStable() {
      return !dart.test(this.hasPendingUpdate);
    }
    [_scheduleProcessQueue]() {
      if (!dart.test(this[_scheduledProcessQueue])) {
        this[_scheduledProcessQueue] = true;
        this.nextFrame.then(dart.void, dart.fn(_ => this[_processQueues](), numTovoid()));
      }
    }
    requestLayoutFrame() {
      this[_scheduleOnLayoutChanged]();
    }
    [_scheduleOnLayoutChanged]() {
      if (this[_layoutObserveRead] != null) return;
      let hasLayoutListener = (() => {
        let t = this[_onLayoutChangedController];
        return t == null ? null : t.hasListener;
      })() === true;
      let hasIdleListener = (() => {
        let t = this[_onIdleController];
        return t == null ? null : t.hasListener;
      })() === true;
      if (!hasLayoutListener && !hasIdleListener) return;
      if (dart.test(this.isReadingDom)) {
        this.scheduleWrite(dart.fn(() => {
        }, VoidToNull()));
        return;
      }
      this[_layoutObserveRead] = this.scheduleRead(dart.fn(() => {
        this[_layoutObserveRead] = null;
        if (this[_onLayoutChangedController] != null) {
          this[_onLayoutChangedController].add(this);
        }
        this[_resetIdleTimer]();
      }, VoidToNull()));
    }
    get state() {
      return this[_state];
    }
    [_resetIdleTimer]() {
      if (this[_onIdleController] == null) return;
      this[_idleTimerMillis] = dart.notNull(this[_idleTimerMillis]) + 100;
      this[_idleTimerMillis] = math.min(core.int, 4000, this[_idleTimerMillis]);
      this[_cancelIdleTimer]();
      if (!dart.test(this[_onIdleController].hasListener)) return;
      this[_rootZone].run(core.Null, dart.fn(() => {
        this[_idleTimerMillis] = math.max(core.int, 400, this[_idleTimerMillis]);
        this[_idleTimer] = async.Timer.new(new core.Duration.new({milliseconds: this[_idleTimerMillis]}), dart.fn(() => {
          this[_idleTimer] = null;
          this[_idleTimerMillis] = (dart.notNull(this[_idleTimerMillis]) / 2)[$truncate]();
          this[_onIdleController].add(null);
          this[_scheduleOnLayoutChanged]();
        }, VoidToNull()));
      }, VoidToNull()));
    }
    [_cancelIdleTimer]() {
      if (this[_idleTimer] != null) {
        this[_idleTimer].cancel();
        this[_idleTimer] = null;
      }
    }
    set rootZone(value) {
      this[_rootZone] = value;
    }
  };
  (utils__browser__dom_service__dom_service.DomService.new = function(ngZone, window) {
    this[_domReadQueue] = JSArrayOfVoidTovoid().of([]);
    this[_domWriteQueue] = JSArrayOfVoidTovoid().of([]);
    this[_rootZone] = async.Zone.ROOT;
    this[_insideDigest] = false;
    this[_layoutObserveRead] = null;
    this[_scheduledProcessQueue] = false;
    this[_onLayoutChangedController] = null;
    this[_onLayoutChangedStream] = null;
    this[_onQueuesProcessedController] = null;
    this[_onQueuesProcessedStream] = null;
    this[_nextFrameId] = -1;
    this[_nextFrameCompleter] = null;
    this[_nextFrameFuture] = null;
    this[_state] = utils__browser__dom_service__dom_service.DomServiceState.Idle;
    this[_crossAppInitialized] = false;
    this[_onIdleController] = null;
    this[_onIdleStream] = null;
    this[_idleTimerMillis] = 4000;
    this[_idleTimer] = null;
    this[_inDispatchTurnDoneEvent] = false;
    this[isDomMutatedPredicate] = null;
    this[resetIsDomMutated] = null;
    this[_writeQueueChangedLayout] = false;
    this[_ngZone] = ngZone;
    this[_window] = window;
  }).prototype = utils__browser__dom_service__dom_service.DomService.prototype;
  dart.addTypeTests(utils__browser__dom_service__dom_service.DomService);
  const isDomMutatedPredicate = Symbol("DomService.isDomMutatedPredicate");
  const resetIsDomMutated = Symbol("DomService.resetIsDomMutated");
  dart.setMethodSignature(utils__browser__dom_service__dom_service.DomService, () => ({
    __proto__: dart.getMethods(utils__browser__dom_service__dom_service.DomService.__proto__),
    init: dart.fnType(dart.void, []),
    leap: dart.fnType(dart.void, [], {highResTimer: core.num, steps: dart.dynamic}),
    scheduleRead: dart.fnType(utils__disposer__disposer.Disposable, [VoidTovoid()]),
    scheduleWrite: dart.fnType(utils__disposer__disposer.Disposable, [VoidTovoid()]),
    [_scheduleInQueue]: dart.fnType(dart.void, [VoidTovoid(), ListOfVoidTovoid()]),
    onRead: dart.fnType(async.Future, []),
    onWrite: dart.fnType(async.Future, []),
    [_processQueues]: dart.fnType(dart.void, []),
    [_processQueue]: dart.fnType(core.int, [ListOfVoidTovoid()]),
    [_listenOnLayoutEvents]: dart.fnType(dart.void, [async.Stream]),
    trackLayoutChange: dart.gFnType(T => [async.StreamSubscription, [dart.fnType(T, []), dart.fnType(dart.void, [T])], {framesToStabilize: core.int, runInAngularZone: core.bool}]),
    addLayoutObserver: dart.fnType(async.StreamSubscription, [VoidTovoid()]),
    describeStability: dart.fnType(core.String, []),
    [_scheduleProcessQueue]: dart.fnType(dart.void, []),
    requestLayoutFrame: dart.fnType(dart.void, []),
    [_scheduleOnLayoutChanged]: dart.fnType(dart.void, []),
    [_resetIdleTimer]: dart.fnType(dart.void, []),
    [_cancelIdleTimer]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(utils__browser__dom_service__dom_service.DomService, () => ({
    __proto__: dart.getGetters(utils__browser__dom_service__dom_service.DomService.__proto__),
    isReadingDom: dart.fnType(core.bool, []),
    isWritingDom: dart.fnType(core.bool, []),
    nextFrame: dart.fnType(async.Future$(core.num), []),
    onIdle: dart.fnType(async.Stream, []),
    onQueuesProcessed: dart.fnType(async.Stream, []),
    onLayoutChanged: dart.fnType(async.Stream, []),
    hasPendingUpdate: dart.fnType(core.bool, []),
    isStable: dart.fnType(core.bool, []),
    state: dart.fnType(utils__browser__dom_service__dom_service.DomServiceState, [])
  }));
  dart.setSetterSignature(utils__browser__dom_service__dom_service.DomService, () => ({
    __proto__: dart.getSetters(utils__browser__dom_service__dom_service.DomService.__proto__),
    rootZone: dart.fnType(dart.void, [async.Zone])
  }));
  dart.setFieldSignature(utils__browser__dom_service__dom_service.DomService, () => ({
    __proto__: dart.getFields(utils__browser__dom_service__dom_service.DomService.__proto__),
    [_domReadQueue]: dart.finalFieldType(ListOfVoidTovoid()),
    [_domWriteQueue]: dart.finalFieldType(ListOfVoidTovoid()),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_window]: dart.finalFieldType(html.Window),
    [_rootZone]: dart.fieldType(async.Zone),
    [_insideDigest]: dart.fieldType(core.bool),
    [_layoutObserveRead]: dart.fieldType(utils__disposer__disposer.Disposable),
    [_scheduledProcessQueue]: dart.fieldType(core.bool),
    [_onLayoutChangedController]: dart.fieldType(async.StreamController),
    [_onLayoutChangedStream]: dart.fieldType(async.Stream),
    [_onQueuesProcessedController]: dart.fieldType(async.StreamController),
    [_onQueuesProcessedStream]: dart.fieldType(async.Stream),
    [_nextFrameId]: dart.fieldType(core.int),
    [_nextFrameCompleter]: dart.fieldType(async.Completer),
    [_nextFrameFuture]: dart.fieldType(FutureOfnum()),
    [_state]: dart.fieldType(utils__browser__dom_service__dom_service.DomServiceState),
    [_crossAppInitialized]: dart.fieldType(core.bool),
    [_onIdleController]: dart.fieldType(async.StreamController),
    [_onIdleStream]: dart.fieldType(async.Stream),
    [_idleTimerMillis]: dart.fieldType(core.int),
    [_idleTimer]: dart.fieldType(async.Timer),
    [_inDispatchTurnDoneEvent]: dart.fieldType(core.bool),
    isDomMutatedPredicate: dart.fieldType(VoidTobool()),
    resetIsDomMutated: dart.fieldType(core.Function),
    [_writeQueueChangedLayout]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(utils__browser__dom_service__dom_service.DomService, {
    /*utils__browser__dom_service__dom_service.DomService._TURN_DONE_EVENT_TYPE*/get _TURN_DONE_EVENT_TYPE() {
      return 'doms-turn';
    },
    /*utils__browser__dom_service__dom_service.DomService._MAX_IDLE_TIMER_MILLIS*/get _MAX_IDLE_TIMER_MILLIS() {
      return 4000;
    },
    /*utils__browser__dom_service__dom_service.DomService._MIN_IDLE_TIMER_MILLIS*/get _MIN_IDLE_TIMER_MILLIS() {
      return 400;
    },
    /*utils__browser__dom_service__dom_service.DomService._IDLE_TIMER_INC_MILLIS*/get _IDLE_TIMER_INC_MILLIS() {
      return 100;
    }
  });
  utils__browser__dom_service__dom_service.DomServiceState = class DomServiceState extends core.Object {
    toString() {
      return {
        0: "DomServiceState.Idle",
        1: "DomServiceState.Writing",
        2: "DomServiceState.Reading"
      }[this.index];
    }
  };
  (utils__browser__dom_service__dom_service.DomServiceState.new = function(x) {
    this.index = x;
  }).prototype = utils__browser__dom_service__dom_service.DomServiceState.prototype;
  dart.addTypeTests(utils__browser__dom_service__dom_service.DomServiceState);
  dart.setFieldSignature(utils__browser__dom_service__dom_service.DomServiceState, () => ({
    __proto__: dart.getFields(utils__browser__dom_service__dom_service.DomServiceState.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(utils__browser__dom_service__dom_service.DomServiceState, ['toString']);
  utils__browser__dom_service__dom_service.DomServiceState.Idle = dart.const(new utils__browser__dom_service__dom_service.DomServiceState.new(0));
  utils__browser__dom_service__dom_service.DomServiceState.Writing = dart.const(new utils__browser__dom_service__dom_service.DomServiceState.new(1));
  utils__browser__dom_service__dom_service.DomServiceState.Reading = dart.const(new utils__browser__dom_service__dom_service.DomServiceState.new(2));
  utils__browser__dom_service__dom_service.DomServiceState.values = dart.constList([utils__browser__dom_service__dom_service.DomServiceState.Idle, utils__browser__dom_service__dom_service.DomServiceState.Writing, utils__browser__dom_service__dom_service.DomServiceState.Reading], utils__browser__dom_service__dom_service.DomServiceState);
  const _domService = Symbol('_domService');
  const _fn = Symbol('_fn');
  const _callback = Symbol('_callback');
  const _framesToStabilize = Symbol('_framesToStabilize');
  const _lastValue = Symbol('_lastValue');
  const _stableFrameCounter = Symbol('_stableFrameCounter');
  utils__browser__dom_service__dom_service._ChangeTracker = class _ChangeTracker extends core.Object {
    [_onLayoutObserve]() {
      let value = dart.dcall(this[_fn]);
      if (!dart.equals(value, this[_lastValue])) {
        this[_lastValue] = value;
        this[_stableFrameCounter] = this[_framesToStabilize];
      }
      if (this[_stableFrameCounter] === 0) return;
      this[_stableFrameCounter] = dart.notNull(this[_stableFrameCounter]) - 1;
      if (this[_stableFrameCounter] === 0) {
        this[_domService].scheduleRead(dart.fn(() => {
          dart.dcall(this[_callback], this[_lastValue]);
        }, VoidToNull()));
      } else {
        this[_domService].requestLayoutFrame();
      }
    }
  };
  (utils__browser__dom_service__dom_service._ChangeTracker.new = function(domService, fn, callback, framesToStabilize) {
    this[_lastValue] = null;
    this[_stableFrameCounter] = 0;
    this[_domService] = domService;
    this[_fn] = fn;
    this[_callback] = callback;
    this[_framesToStabilize] = framesToStabilize;
    if (!(dart.notNull(this[_framesToStabilize]) > 0)) dart.assertFailed();
  }).prototype = utils__browser__dom_service__dom_service._ChangeTracker.prototype;
  dart.addTypeTests(utils__browser__dom_service__dom_service._ChangeTracker);
  dart.setMethodSignature(utils__browser__dom_service__dom_service._ChangeTracker, () => ({
    __proto__: dart.getMethods(utils__browser__dom_service__dom_service._ChangeTracker.__proto__),
    [_onLayoutObserve]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(utils__browser__dom_service__dom_service._ChangeTracker, () => ({
    __proto__: dart.getFields(utils__browser__dom_service__dom_service._ChangeTracker.__proto__),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_fn]: dart.finalFieldType(core.Function),
    [_callback]: dart.finalFieldType(core.Function),
    [_framesToStabilize]: dart.finalFieldType(core.int),
    [_lastValue]: dart.fieldType(dart.dynamic),
    [_stableFrameCounter]: dart.fieldType(core.int)
  }));
  utils__browser__dom_service__dom_service.IsDomMutatedPredicate = dart.typedef('IsDomMutatedPredicate', () => dart.fnType(core.bool, []));
  dart.trackLibraries("packages/angular_components/utils/browser/dom_service/dom_service.ddc", {
    "package:angular_components/utils/browser/dom_service/dom_service.dart": utils__browser__dom_service__dom_service
  }, '{"version":3,"sourceRoot":"","sources":["dom_service.dart"],"names":[],"mappings":"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","file":"dom_service.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_service__dom_service: utils__browser__dom_service__dom_service
  };
});

//# sourceMappingURL=dom_service.ddc.js.map
