define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils__async__lazy_stream_controller = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  src__utils__async__lazy_stream_controller.StreamControllerFactory$ = dart.generic(T => {
    const StreamControllerFactory = dart.typedef('StreamControllerFactory', () => dart.fnType(async.StreamController$(T), []));
    return StreamControllerFactory;
  });
  src__utils__async__lazy_stream_controller.StreamControllerFactory = src__utils__async__lazy_stream_controller.StreamControllerFactory$();
  const _streamControllerFactory = Symbol('_streamControllerFactory');
  const _streamController = Symbol('_streamController');
  const _initializeLazy = Symbol('_initializeLazy');
  const _is_LazyStreamController_default = Symbol('_is_LazyStreamController_default');
  src__utils__async__lazy_stream_controller.LazyStreamController$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let VoidToStreamControllerOfT = () => (VoidToStreamControllerOfT = dart.constFn(dart.fnType(StreamControllerOfT(), [])))();
    let LazyStreamControllerOfT = () => (LazyStreamControllerOfT = dart.constFn(src__utils__async__lazy_stream_controller.LazyStreamController$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class LazyStreamController extends core.Object {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        return new (LazyStreamControllerOfT()).__(dart.fn(() => StreamControllerOfT().new({onListen: onListen, onCancel: onCancel, sync: sync}), VoidToStreamControllerOfT()));
      }
      static broadcast(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        return new (LazyStreamControllerOfT()).__(dart.fn(() => StreamControllerOfT().broadcast({onListen: onListen, onCancel: onCancel, sync: sync}), VoidToStreamControllerOfT()));
      }
      [_initializeLazy]() {
        if (this[_streamController] == null) {
          this[_streamController] = this[_streamControllerFactory]();
        }
        return this[_streamController];
      }
      get isClosed() {
        return this[_streamController] != null ? this[_streamController].isClosed : false;
      }
      get hasListener() {
        return this[_streamController] != null ? this[_streamController].hasListener : false;
      }
      get isPaused() {
        return this[_streamController] != null ? this[_streamController].isPaused : false;
      }
      add(event) {
        T._check(event);
        if (this[_streamController] != null) {
          this[_streamController].add(event);
        }
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (this[_streamController] != null) {
          this[_streamController].addError(error, stackTrace);
        }
      }
      addStream(source, opts) {
        StreamOfT()._check(source);
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : true;
        return this[_initializeLazy]().addStream(source, {cancelOnError: cancelOnError});
      }
      close() {
        if (this[_streamController] != null) {
          return this[_streamController].close();
        }
        return async.Future.value();
      }
      get done() {
        return this[_initializeLazy]().done;
      }
      get sink() {
        return this[_initializeLazy]().sink;
      }
      get stream() {
        return this[_initializeLazy]().stream;
      }
      set onListen(onListenHandler) {
        this[_initializeLazy]().onListen = onListenHandler;
      }
      get onListen() {
        return this[_initializeLazy]().onListen;
      }
      set onPause(onPauseHandler) {
        this[_initializeLazy]().onPause = onPauseHandler;
      }
      get onPause() {
        return this[_initializeLazy]().onPause;
      }
      set onResume(onResumeHandler) {
        this[_initializeLazy]().onResume = onResumeHandler;
      }
      get onResume() {
        return this[_initializeLazy]().onResume;
      }
      set onCancel(onCancelHandler) {
        this[_initializeLazy]().onCancel = onCancelHandler;
      }
      get onCancel() {
        return this[_initializeLazy]().onCancel;
      }
    }
    (LazyStreamController.__ = function(streamControllerFactory) {
      this[_streamController] = null;
      this[_streamControllerFactory] = streamControllerFactory;
    }).prototype = LazyStreamController.prototype;
    dart.addTypeTests(LazyStreamController);
    LazyStreamController.prototype[_is_LazyStreamController_default] = true;
    LazyStreamController[dart.implements] = () => [StreamControllerOfT()];
    dart.setMethodSignature(LazyStreamController, () => ({
      __proto__: dart.getMethods(LazyStreamController.__proto__),
      [_initializeLazy]: dart.fnType(async.StreamController$(T), []),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object], {cancelOnError: core.bool}),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(LazyStreamController, () => ({
      __proto__: dart.getGetters(LazyStreamController.__proto__),
      isClosed: dart.fnType(core.bool, []),
      hasListener: dart.fnType(core.bool, []),
      isPaused: dart.fnType(core.bool, []),
      done: dart.fnType(async.Future, []),
      sink: dart.fnType(async.StreamSink$(T), []),
      stream: dart.fnType(async.Stream$(T), []),
      onListen: dart.fnType(dart.fnType(dart.void, []), []),
      onPause: dart.fnType(dart.fnType(dart.void, []), []),
      onResume: dart.fnType(dart.fnType(dart.void, []), []),
      onCancel: dart.fnType(dart.fnType(dart.void, []), [])
    }));
    dart.setSetterSignature(LazyStreamController, () => ({
      __proto__: dart.getSetters(LazyStreamController.__proto__),
      onListen: dart.fnType(dart.void, [VoidTovoid()]),
      onPause: dart.fnType(dart.void, [VoidTovoid()]),
      onResume: dart.fnType(dart.void, [VoidTovoid()]),
      onCancel: dart.fnType(dart.void, [VoidTovoid()])
    }));
    dart.setFieldSignature(LazyStreamController, () => ({
      __proto__: dart.getFields(LazyStreamController.__proto__),
      [_streamControllerFactory]: dart.finalFieldType(VoidToStreamControllerOfT()),
      [_streamController]: dart.fieldType(StreamControllerOfT())
    }));
    return LazyStreamController;
  });
  src__utils__async__lazy_stream_controller.LazyStreamController = src__utils__async__lazy_stream_controller.LazyStreamController$();
  dart.addTypeTests(src__utils__async__lazy_stream_controller.LazyStreamController, _is_LazyStreamController_default);
  dart.trackLibraries("packages/angular_components/src/utils/async/lazy_stream_controller.ddc", {
    "package:angular_components/src/utils/async/lazy_stream_controller.dart": src__utils__async__lazy_stream_controller
  }, '{"version":3,"sourceRoot":"","sources":["lazy_stream_controller.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;YA0BY;YAAiB;YAAiB,4CAAM;AAAQ,AACxD,cAAO,KAAI,8BAAsB,CAAC,cAAM,AAAI,yBAAmB,YACjD,QAAQ,YAAY,QAAQ,QAAQ,IAAI;MACxD;;YAIU;YAAiB;YAAiB,4CAAM;AAAQ,AACxD,cAAO,KAAI,8BAAsB,CAAC,cAAM,AAAI,+BAA6B,YAC3D,QAAQ,YAAY,QAAQ,QAAQ,IAAI;MACxD;;AAKE,YAAI,uBAAiB,IAAI,MAAM;AAC7B,iCAAiB,GAAG,8BAAwB;;AAE9C,cAAO,wBAAiB;MAC1B;;AAIE,cAAO,wBAAiB,IAAI,OAAO,uBAAiB,SAAS,GAAG;MAClE;;AAIE,cAAO,wBAAiB,IAAI,OAAO,uBAAiB,YAAY,GAAG;MACrE;;AAIE,cAAO,wBAAiB,IAAI,OAAO,uBAAiB,SAAS,GAAG;MAClE;UAGS,KAAO;iBAAL;AACT,YAAI,uBAAiB,IAAI,MAAM;AAC7B,iCAAiB,IAAI,CAAC,KAAK;;MAE/B;eAGc,KAAY,EAAG,UAAqB;mCAAV;AACtC,YAAI,uBAAiB,IAAI,MAAM;AAC7B,iCAAiB,SAAS,CAAC,KAAK,EAAE,UAAU;;MAEhD;gBAGiB,MAAgB;2BAAN;YAAc,uEAAe;AACtD,cAAO,sBAAe,YAAY,CAAC,MAAM,kBAAiB,aAAa;MACzE;;AAIE,YAAI,uBAAiB,IAAI,MAAM;AAC7B,gBAAO,wBAAiB,MAAM;;AAEhC,cAAO,AAAI,mBAAY;MACzB;;cAGmB,sBAAe,OAAO;;;cAGf,sBAAe,OAAO;;;cAGxB,sBAAe,SAAS;;mBAGnC,eAAsB;AACjC,6BAAe,WAAW,GAAG,eAAe;MAC9C;;cAGmC,sBAAe,WAAW;;kBAGjD,cAAqB;AAC/B,6BAAe,UAAU,GAAG,cAAc;MAC5C;;cAGkC,sBAAe,UAAU;;mBAG9C,eAAsB;AACjC,6BAAe,WAAW,GAAG,eAAe;MAC9C;;cAGmC,sBAAe,WAAW;;mBAGhD,eAAsB;AACjC,6BAAe,WAAW,GAAG,eAAe;MAC9C;;cAGmC,sBAAe,WAAW;;;wCA1FjC,uBAAwB;MAjBhC,uBAAiB;MAiBT,8BAAwB,GAAxB,uBAAwB;IAAC","file":"lazy_stream_controller.ddc.js"}');
  // Exports:
  return {
    src__utils__async__lazy_stream_controller: src__utils__async__lazy_stream_controller
  };
});

//# sourceMappingURL=lazy_stream_controller.ddc.js.map
