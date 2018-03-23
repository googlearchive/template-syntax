define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__model__action__async_action = Object.create(_root);
  const $add = dartx.add;
  const $clear = dartx.clear;
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let ListOfFutureOfbool = () => (ListOfFutureOfbool = dart.constFn(core.List$(FutureOfbool())))();
  let ListOfFuture = () => (ListOfFuture = dart.constFn(core.List$(async.Future)))();
  const _onDone = Symbol('_onDone');
  const _onDefer = Symbol('_onDefer');
  const _futureCancellations = Symbol('_futureCancellations');
  const _executionDeferrals = Symbol('_executionDeferrals');
  const _lockedGetter = Symbol('_lockedGetter');
  const _cancelledGetter = Symbol('_cancelledGetter');
  const _doneGetter = Symbol('_doneGetter');
  const _syncCancelled = Symbol('_syncCancelled');
  const _waitingForDone = Symbol('_waitingForDone');
  const _is_AsyncAction_default = Symbol('_is_AsyncAction_default');
  src__model__action__async_action.AsyncAction$ = dart.generic(V => {
    let FutureOfV = () => (FutureOfV = dart.constFn(async.Future$(V)))();
    class AsyncAction extends core.Object {
      get [_waitingForDone]() {
        return core.bool._check(dart.dcall(this[_lockedGetter]));
      }
      get cancelled() {
        return dart.test(this[_syncCancelled]) || dart.dtest(dart.dcall(this[_cancelledGetter]));
      }
      get isDone() {
        return core.bool._check(dart.dcall(this[_doneGetter]));
      }
      get onDone() {
        return this[_onDone];
      }
      get onDefer() {
        return this[_onDefer];
      }
      cancelIf(whetherToCancel) {
        if (dart.test(this.cancelled)) return;
        if (dart.test(this.isDone)) {
          dart.throw(new core.StateError.new('Cannot register. Action is complete.'));
        }
        if (dart.test(this[_waitingForDone])) {
          dart.throw(new core.StateError.new('Cannot register. Already waiting.'));
        }
        this[_futureCancellations][$add](whetherToCancel);
      }
      cancel() {
        if (dart.test(this.cancelled)) return;
        if (dart.test(this.isDone)) {
          dart.throw(new core.StateError.new('Cannot register. Action is complete.'));
        }
        if (dart.test(this[_waitingForDone])) {
          dart.throw(new core.StateError.new('Cannot register. Already waiting.'));
        }
        this[_syncCancelled] = true;
        this[_futureCancellations][$clear]();
        this[_futureCancellations][$add](FutureOfbool().value(true));
      }
      defer(executionDeferral) {
        if (dart.test(this.cancelled)) return;
        if (dart.test(this.isDone)) {
          dart.throw(new core.StateError.new('Cannot register. Action is complete.'));
        }
        if (dart.test(this[_waitingForDone])) {
          dart.throw(new core.StateError.new('Cannot register. Already waiting.'));
        }
        this[_executionDeferrals][$add](executionDeferral);
      }
    }
    (AsyncAction.new = function(onDone, onDefer, futureCancellations, executionDeferrals, lockedGetter, cancelledGetter, doneGetter) {
      this[_syncCancelled] = false;
      this[_onDone] = onDone;
      this[_onDefer] = onDefer;
      this[_futureCancellations] = futureCancellations;
      this[_executionDeferrals] = executionDeferrals;
      this[_lockedGetter] = lockedGetter;
      this[_cancelledGetter] = cancelledGetter;
      this[_doneGetter] = doneGetter;
    }).prototype = AsyncAction.prototype;
    dart.addTypeTests(AsyncAction);
    AsyncAction.prototype[_is_AsyncAction_default] = true;
    dart.setMethodSignature(AsyncAction, () => ({
      __proto__: dart.getMethods(AsyncAction.__proto__),
      cancelIf: dart.fnType(dart.void, [FutureOfbool()]),
      cancel: dart.fnType(dart.void, []),
      defer: dart.fnType(dart.void, [async.Future])
    }));
    dart.setGetterSignature(AsyncAction, () => ({
      __proto__: dart.getGetters(AsyncAction.__proto__),
      [_waitingForDone]: dart.fnType(core.bool, []),
      cancelled: dart.fnType(core.bool, []),
      isDone: dart.fnType(core.bool, []),
      onDone: dart.fnType(async.Future$(V), []),
      onDefer: dart.fnType(async.Future$(core.bool), [])
    }));
    dart.setFieldSignature(AsyncAction, () => ({
      __proto__: dart.getFields(AsyncAction.__proto__),
      [_onDone]: dart.finalFieldType(FutureOfV()),
      [_onDefer]: dart.finalFieldType(FutureOfbool()),
      [_futureCancellations]: dart.finalFieldType(ListOfFutureOfbool()),
      [_executionDeferrals]: dart.finalFieldType(ListOfFuture()),
      [_cancelledGetter]: dart.finalFieldType(core.Function),
      [_lockedGetter]: dart.finalFieldType(core.Function),
      [_doneGetter]: dart.finalFieldType(core.Function),
      [_syncCancelled]: dart.fieldType(core.bool)
    }));
    return AsyncAction;
  });
  src__model__action__async_action.AsyncAction = src__model__action__async_action.AsyncAction$();
  dart.addTypeTests(src__model__action__async_action.AsyncAction, _is_AsyncAction_default);
  dart.trackLibraries("packages/angular_components/src/model/action/async_action.ddc", {
    "package:angular_components/src/model/action/async_action.dart": src__model__action__async_action
  }, '{"version":3,"sourceRoot":"","sources":["async_action.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;2CA8E8B,mBAAa;MAAE;;cAYN,WAAf,oBAAc,2BAAI,sBAAgB;MAAE;;2CAGvC,iBAAW;MAAE;;cAIR,cAAO;;;cASH,eAAQ;;eAStB,eAA4B;AAExC,sBAAI,cAAS,GAAE;AAEf,sBAAI,WAAM,GAAE;AACV,qBAAM,IAAI,mBAAU,CAAC;;AAIvB,sBAAI,qBAAe,GAAE;AACnB,qBAAM,IAAI,mBAAU,CAAC;;AAIvB,kCAAoB,MAAI,CAAC,eAAe;MAC1C;;AAOE,sBAAI,cAAS,GAAE;AAGf,sBAAI,WAAM,GAAE;AACV,qBAAM,IAAI,mBAAU,CAAC;;AAGvB,sBAAI,qBAAe,GAAE;AACnB,qBAAM,IAAI,mBAAU,CAAC;;AAGvB,4BAAc,GAAG;AACjB,QACE,AAAE,kCAAK;QACP,AAAE,gCAAG,CAAC,AAAI,oBAAY,CAAC;MAC3B;YAUW,iBAAwB;AAEjC,sBAAI,cAAS,GAAE;AAGf,sBAAI,WAAM,GAAE;AACV,qBAAM,IAAI,mBAAU,CAAC;;AAGvB,sBAAI,qBAAe,GAAE;AACnB,qBAAM,IAAI,mBAAU,CAAC;;AAIvB,iCAAmB,MAAI,CAAC,iBAAiB;MAC3C;;gCAhGS,MAAO,EACP,OAAQ,EACR,mBAAoB,EACpB,kBAAmB,EACnB,YAAa,EACb,eAAgB,EAChB,UAAW;MAVf,oBAAc,GAAG;MAIb,aAAO,GAAP,MAAO;MACP,cAAQ,GAAR,OAAQ;MACR,0BAAoB,GAApB,mBAAoB;MACpB,yBAAmB,GAAnB,kBAAmB;MACnB,mBAAa,GAAb,YAAa;MACb,sBAAgB,GAAhB,eAAgB;MAChB,iBAAW,GAAX,UAAW;IAAC","file":"async_action.ddc.js"}');
  // Exports:
  return {
    src__model__action__async_action: src__model__action__async_action
  };
});

//# sourceMappingURL=async_action.ddc.js.map
