define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils__async__zoned_async = Object.create(_root);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let VoidTodynamic$ = () => (VoidTodynamic$ = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let FnTodynamic = () => (FnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [VoidTodynamic()])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  src__utils__async__zoned_async.RunInZoneFn = dart.typedef('RunInZoneFn', () => dart.fnType(dart.dynamic, [VoidTodynamic()]));
  const _runInZoneFn = Symbol('_runInZoneFn');
  const _runInZone = Symbol('_runInZone');
  src__utils__async__zoned_async._ZoneRunner = class _ZoneRunner extends core.Object {
    [_runInZone](S, fn) {
      return S.as(this[_runInZoneFn](fn));
    }
  };
  (src__utils__async__zoned_async._ZoneRunner.new = function() {
  }).prototype = src__utils__async__zoned_async._ZoneRunner.prototype;
  dart.addTypeTests(src__utils__async__zoned_async._ZoneRunner);
  dart.setMethodSignature(src__utils__async__zoned_async._ZoneRunner, () => ({
    __proto__: dart.getMethods(src__utils__async__zoned_async._ZoneRunner.__proto__),
    [_runInZone]: dart.gFnType(S => [S, [dart.fnType(S, [])]])
  }));
  const _innerFuture = Symbol('_innerFuture');
  const _is_ZonedFuture_default = Symbol('_is_ZonedFuture_default');
  src__utils__async__zoned_async.ZonedFuture$ = dart.generic(T => {
    let ZonedStreamOfT = () => (ZonedStreamOfT = dart.constFn(src__utils__async__zoned_async.ZonedStream$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let VoidToFutureOfT = () => (VoidToFutureOfT = dart.constFn(dart.fnType(FutureOfT(), [])))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    class ZonedFuture extends src__utils__async__zoned_async._ZoneRunner {
      asStream() {
        return new (ZonedStreamOfT()).new(this[_innerFuture].asStream(), this[_runInZoneFn]);
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this[_runInZone](FutureOfT(), dart.fn(() => this[_innerFuture].catchError(onError, {test: test}), VoidToFutureOfT()));
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return this[_runInZone](async.Future$(S), dart.fn(() => this[_innerFuture].then(S, onValue, {onError: onError}), dart.fnType(async.Future$(S), [])));
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return this[_runInZone](FutureOfT(), dart.fn(() => this[_innerFuture].timeout(timeLimit, {onTimeout: VoidToFutureOrOfT()._check(onTimeout)}), VoidToFutureOfT()));
      }
      whenComplete(action) {
        return this[_runInZone](FutureOfT(), dart.fn(() => this[_innerFuture].whenComplete(action), VoidToFutureOfT()));
      }
    }
    (ZonedFuture.new = function(innerFuture, runInZoneFn) {
      this[_innerFuture] = innerFuture;
      this[_runInZoneFn] = runInZoneFn;
    }).prototype = ZonedFuture.prototype;
    ZonedFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(ZonedFuture);
    ZonedFuture.prototype[_is_ZonedFuture_default] = true;
    ZonedFuture[dart.implements] = () => [FutureOfT()];
    dart.setMethodSignature(ZonedFuture, () => ({
      __proto__: dart.getMethods(ZonedFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: ObjectTobool()}),
      then: dart.gFnType(S => [async.Future$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: VoidTodynamic$()}),
      whenComplete: dart.fnType(async.Future$(T), [VoidTodynamic$()])
    }));
    dart.setFieldSignature(ZonedFuture, () => ({
      __proto__: dart.getFields(ZonedFuture.__proto__),
      [_innerFuture]: dart.finalFieldType(FutureOfT()),
      [_runInZoneFn]: dart.finalFieldType(FnTodynamic())
    }));
    return ZonedFuture;
  });
  src__utils__async__zoned_async.ZonedFuture = src__utils__async__zoned_async.ZonedFuture$();
  dart.addTypeTests(src__utils__async__zoned_async.ZonedFuture, _is_ZonedFuture_default);
  const _innerStream = Symbol('_innerStream');
  const _is_ZonedStream_default = Symbol('_is_ZonedStream_default');
  src__utils__async__zoned_async.ZonedStream$ = dart.generic(T => {
    let ZonedFutureOfT = () => (ZonedFutureOfT = dart.constFn(src__utils__async__zoned_async.ZonedFuture$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let VoidToStreamSubscriptionOfT = () => (VoidToStreamSubscriptionOfT = dart.constFn(dart.fnType(StreamSubscriptionOfT(), [])))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    const Stream__ZoneRunner$ = class Stream__ZoneRunner extends async.Stream$(T) {};
    (Stream__ZoneRunner$.new = function() {
      Stream__ZoneRunner$.__proto__.new.call(this);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$._internal = function() {
      Stream__ZoneRunner$.__proto__._internal.call(this);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$.empty = function() {
      Stream__ZoneRunner$.__proto__.empty.call(this);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$.fromFuture = function(future) {
      Stream__ZoneRunner$.__proto__.fromFuture.call(this, future);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$.fromFutures = function(futures) {
      Stream__ZoneRunner$.__proto__.fromFutures.call(this, futures);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$.fromIterable = function(data) {
      Stream__ZoneRunner$.__proto__.fromIterable.call(this, data);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$.periodic = function(period, computation) {
      Stream__ZoneRunner$.__proto__.periodic.call(this, period, computation);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$.eventTransformed = function(source, mapSink) {
      Stream__ZoneRunner$.__proto__.eventTransformed.call(this, source, mapSink);
    }).prototype = Stream__ZoneRunner$.prototype;
    dart.mixinMembers(Stream__ZoneRunner$, src__utils__async__zoned_async._ZoneRunner);
    class ZonedStream extends Stream__ZoneRunner$ {
      get isBroadcast() {
        return this[_innerStream].isBroadcast;
      }
      get first() {
        return new (ZonedFutureOfT()).new(this[_innerStream].first, dart.gbind(dart.bind(this, _runInZone), dart.dynamic));
      }
      get last() {
        return new (ZonedFutureOfT()).new(this[_innerStream].last, dart.gbind(dart.bind(this, _runInZone), dart.dynamic));
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_runInZone](StreamSubscriptionOfT(), dart.fn(() => this[_innerStream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError}), VoidToStreamSubscriptionOfT()));
      }
    }
    (ZonedStream.new = function(innerStream, runInZoneFn) {
      this[_innerStream] = innerStream;
      this[_runInZoneFn] = runInZoneFn;
      ZonedStream.__proto__.new.call(this);
    }).prototype = ZonedStream.prototype;
    dart.addTypeTests(ZonedStream);
    ZonedStream.prototype[_is_ZonedStream_default] = true;
    dart.setMethodSignature(ZonedStream, () => ({
      __proto__: dart.getMethods(ZonedStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [TTovoid()], {onError: core.Function, onDone: VoidTovoid(), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(ZonedStream, () => ({
      __proto__: dart.getFields(ZonedStream.__proto__),
      [_innerStream]: dart.finalFieldType(StreamOfT()),
      [_runInZoneFn]: dart.finalFieldType(FnTodynamic())
    }));
    return ZonedStream;
  });
  src__utils__async__zoned_async.ZonedStream = src__utils__async__zoned_async.ZonedStream$();
  dart.addTypeTests(src__utils__async__zoned_async.ZonedStream, _is_ZonedStream_default);
  dart.trackLibraries("packages/angular_components/src/utils/async/zoned_async.ddc", {
    "package:angular_components/src/utils/async/zoned_async.dart": src__utils__async__zoned_async
  }, '{"version":3,"sourceRoot":"","sources":["zoned_async.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;oBAakB,EAAM;kBAAK,kBAAY,CAAC,EAAE;IAAM;;;EAClD;;;;;;;;;;;;;;;;AAiCI,cAAO,KAAI,sBAAW,CAAC,kBAAY,SAAS,IAAI,kBAAY;MAC9D;iBAGqB,OAAgB;YAAQ;AAC3C,cAAO,iBAAU,cAAC,cAAM,kBAAY,WAAW,CAAC,OAAO,SAAQ,IAAI;MACrE;cAGkB,OAA4B;YAAY;AACxD,cAAO,iBAAU,mBAAC,cAAM,kBAAY,KAAK,IAAI,OAAO,YAAW,OAAO;MACxE;cAGkB,SAAkB;YAAG;AACrC,cAAO,iBAAU,cAAC,cACT,kBAAY,QAAQ,CAAC,SAAS,yCAAa,SAAS;MAE/D;mBAGuB,MAAQ;AAC7B,cAAO,iBAAU,cAAC,cAAM,kBAAY,aAAa,CAAC,MAAM;MAC1D;;gCA3BiB,WAAY,EAAO,WAAY;MAA/B,kBAAY,GAAZ,WAAY;MAAO,kBAAY,GAAZ,WAAY;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cA4DzB,mBAAY,YAAY;;;AAI9C,cAAO,KAAI,sBAAc,CAAC,kBAAY,MAAM,aAAE,2BAAU;MAC1D;;AAIE,cAAO,KAAI,sBAAc,CAAC,kBAAY,KAAK,aAAE,2BAAU;MACzD;aAG6B,MAAoB;YACnC;YAAc;YAAe;AACzC,cAAO,iBAAU,0BAAC,cACT,kBAAY,OAAO,CAAC,MAAM,YACpB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MAEtE;;gCAtBiB,WAAY,EAAO,WAAY;MAA/B,kBAAY,GAAZ,WAAY;MAAO,kBAAY,GAAZ,WAAY;;IAAC","file":"zoned_async.ddc.js"}');
  // Exports:
  return {
    src__utils__async__zoned_async: src__utils__async__zoned_async
  };
});

//# sourceMappingURL=zoned_async.ddc.js.map
