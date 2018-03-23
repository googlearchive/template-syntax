define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer'], function(dart_sdk, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const _root = Object.create(null);
  const src__utils__async__disposable_future = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _delegateFuture = Symbol('_delegateFuture');
  const _disposeFn = Symbol('_disposeFn');
  const _wasDisposed = Symbol('_wasDisposed');
  const _is_DisposableFuture_default = Symbol('_is_DisposableFuture_default');
  src__utils__async__disposable_future.DisposableFuture$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let DisposableFutureOfT = () => (DisposableFutureOfT = dart.constFn(src__utils__async__disposable_future.DisposableFuture$(T)))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class DisposableFuture extends core.Object {
      static first(stream) {
        let completer = CompleterOfT().sync();
        let subscription = null;
        subscription = stream.listen(dart.fn(value => {
          subscription.cancel();
          completer.complete(value);
        }, TToNull()), {onError: dart.bind(completer, 'completeError')});
        return new (DisposableFutureOfT()).new(completer.future, dart.bind(subscription, 'cancel'));
      }
      static last(stream) {
        let completer = CompleterOfT().sync();
        let subscription = null;
        let lastValue = null;
        subscription = stream.listen(dart.fn(value => {
          lastValue = value;
        }, TToNull()), {onDone: dart.fn(() => {
            completer.complete(lastValue);
          }, VoidToNull())});
        return new (DisposableFutureOfT()).new(completer.future, dart.bind(subscription, 'cancel'));
      }
      static fromFuture(future) {
        return DisposableFutureOfT().first(future.asStream());
      }
      static fromValue(value) {
        let completer = CompleterOfT().sync();
        let cancelled = false;
        async.scheduleMicrotask(dart.fn(() => {
          if (!cancelled) {
            completer.complete(value);
          }
        }, VoidToNull()));
        return new (DisposableFutureOfT()).new(completer.future, dart.fn(() => {
          cancelled = true;
        }, VoidToNull()));
      }
      dispose() {
        this[_wasDisposed] = true;
        this[_disposeFn]();
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return new (src__utils__async__disposable_future.DisposableFuture$(S)).new(this[_delegateFuture].then(S, dart.fn(v => {
          if (!dart.test(this[_wasDisposed])) {
            return onValue(v);
          }
        }, dart.fnType(async.FutureOr$(S), [T])), {onError: onError}), this[_disposeFn]);
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this[_delegateFuture].catchError(onError, {test: test});
      }
      whenComplete(action) {
        return this[_delegateFuture].whenComplete(dart.fn(() => {
          if (!dart.test(this[_wasDisposed])) {
            action();
          }
        }, VoidToNull()));
      }
      asStream() {
        return this[_delegateFuture].asStream();
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return this[_delegateFuture].timeout(timeLimit, {onTimeout: VoidToFutureOrOfT()._check(onTimeout)});
      }
    }
    (DisposableFuture.new = function(delegateFuture, disposeFn) {
      this[_wasDisposed] = false;
      this[_delegateFuture] = delegateFuture;
      this[_disposeFn] = disposeFn;
    }).prototype = DisposableFuture.prototype;
    DisposableFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(DisposableFuture);
    DisposableFuture.prototype[_is_DisposableFuture_default] = true;
    DisposableFuture[dart.implements] = () => [FutureOfT(), utils__disposer__disposer.Disposable];
    dart.setMethodSignature(DisposableFuture, () => ({
      __proto__: dart.getMethods(DisposableFuture.__proto__),
      dispose: dart.fnType(dart.void, []),
      then: dart.gFnType(S => [src__utils__async__disposable_future.DisposableFuture$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}]),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: ObjectTobool()}),
      whenComplete: dart.fnType(async.Future$(T), [VoidTodynamic()]),
      asStream: dart.fnType(async.Stream$(T), []),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: VoidTodynamic()})
    }));
    dart.setFieldSignature(DisposableFuture, () => ({
      __proto__: dart.getFields(DisposableFuture.__proto__),
      [_delegateFuture]: dart.finalFieldType(FutureOfT()),
      [_disposeFn]: dart.finalFieldType(VoidTovoid()),
      [_wasDisposed]: dart.fieldType(core.bool)
    }));
    return DisposableFuture;
  });
  src__utils__async__disposable_future.DisposableFuture = src__utils__async__disposable_future.DisposableFuture$();
  dart.addTypeTests(src__utils__async__disposable_future.DisposableFuture, _is_DisposableFuture_default);
  dart.trackLibraries("packages/angular_components/src/utils/async/disposable_future.ddc", {
    "package:angular_components/src/utils/async/disposable_future.dart": src__utils__async__disposable_future
  }, '{"version":3,"sourceRoot":"","sources":["disposable_future.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;mBAqBiC,MAAgB;AAAE,AAC/C,YAAM,YAAY,AAAI,mBAAiB;AACvC,YAAmB;AACnB,oBAAY,GAAG,MAAM,OAAO,CAAC,QAAC,KAAK;AACjC,sBAAY,OAAO;AACnB,mBAAS,SAAS,CAAC,KAAK;2CACd,SAAS;AACrB,cAAO,KAAI,2BAAmB,CAAC,SAAS,OAAO,YAAE,YAAY;MAC/D;kBAG8B,MAAgB;AAAE,AAC9C,YAAM,YAAY,AAAI,mBAAiB;AACvC,YAAmB;AACnB,YAAE;AACF,oBAAY,GAAG,MAAM,OAAO,CAAC,QAAC,KAAK;AACjC,mBAAS,GAAG,KAAK;gCACR;AACT,qBAAS,SAAS,CAAC,SAAS;;AAE9B,cAAO,KAAI,2BAAmB,CAAC,SAAS,OAAO,YAAE,YAAY;MAC/D;wBAGoC,MAAgB;AAAE,AACpD,cAAO,AAAI,4BAAyB,CAAC,MAAM,SAAS;MACtD;uBAImC,KAAO;AAAE,AAC1C,YAAM,YAAY,AAAI,mBAAiB;AACvC,YAAK,YAAY;AACjB,+BAAiB,CAAC;AAChB,eAAK,SAAS,EAAE;AACd,qBAAS,SAAS,CAAC,KAAK;;;AAG5B,cAAO,KAAI,2BAAgB,CAAC,SAAS,OAAO,EAAE;AAC5C,mBAAS,GAAG;;MAEhB;;AAIE,0BAAY,GAAG;AACf,wBAAU;MACZ;cAG4B,OAA4B;YAC1C;AACZ,cAAO,KAAI,+DAAgB,CACvB,qBAAe,KAAK,IAAI,QAAC,CAAC;AACxB,yBAAK,kBAAY,GAAE;AACjB,kBAAO,QAAO,CAAC,CAAC;;4DAER,OAAO,IACnB,gBAAU;MAChB;iBAGqB,OAAgB;YAAQ;AAC3C,cAAO,sBAAe,WAAW,CAAC,OAAO,SAAQ,IAAI;MACvD;mBAGuB,MAAQ;AAC7B,cAAO,sBAAe,aAAa,CAAC;AAClC,yBAAK,kBAAY,GAAE;AACjB,kBAAM;;;MAGZ;;cAGwB,sBAAe,SAAS;MAAE;cAGhC,SAAkB;YAAG;AACrC,cAAO,sBAAe,QAAQ,CAAC,SAAS,yCAAa,SAAS;MAChE;;qCApFsB,cAAe,EAAO,SAAU;MAHjD,kBAAY,GAAG;MAGE,qBAAe,GAAf,cAAe;MAAO,gBAAU,GAAV,SAAU;IAAC","file":"disposable_future.ddc.js"}');
  // Exports:
  return {
    src__utils__async__disposable_future: src__utils__async__disposable_future
  };
});

//# sourceMappingURL=disposable_future.ddc.js.map
