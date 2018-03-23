define(['dart_sdk', 'packages/angular_components/src/model/action/async_action'], function(dart_sdk, async_action) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model__action__async_action = async_action.src__model__action__async_action;
  const _root = Object.create(null);
  const src__model__action__delegating_async_action = Object.create(_root);
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  const _is_DelegatingAsyncAction_default = Symbol('_is_DelegatingAsyncAction_default');
  src__model__action__delegating_async_action.DelegatingAsyncAction$ = dart.generic(V => {
    let AsyncActionOfV = () => (AsyncActionOfV = dart.constFn(src__model__action__async_action.AsyncAction$(V)))();
    class DelegatingAsyncAction extends core.Object {
      get cancelled() {
        return this.delegate.cancelled;
      }
      get isDone() {
        return this.delegate.isDone;
      }
      get onDone() {
        return this.delegate.onDone;
      }
      get onDefer() {
        return this.delegate.onDefer;
      }
      cancelIf(whetherToCancel) {
        return this.delegate.cancelIf(whetherToCancel);
      }
      cancel() {
        return this.delegate.cancel();
      }
      defer(executionDeferral) {
        return this.delegate.defer(executionDeferral);
      }
    }
    (DelegatingAsyncAction.new = function() {
    }).prototype = DelegatingAsyncAction.prototype;
    dart.addTypeTests(DelegatingAsyncAction);
    DelegatingAsyncAction.prototype[_is_DelegatingAsyncAction_default] = true;
    DelegatingAsyncAction[dart.implements] = () => [AsyncActionOfV()];
    dart.setMethodSignature(DelegatingAsyncAction, () => ({
      __proto__: dart.getMethods(DelegatingAsyncAction.__proto__),
      cancelIf: dart.fnType(dart.void, [FutureOfbool()]),
      cancel: dart.fnType(dart.void, []),
      defer: dart.fnType(dart.void, [async.Future])
    }));
    dart.setGetterSignature(DelegatingAsyncAction, () => ({
      __proto__: dart.getGetters(DelegatingAsyncAction.__proto__),
      cancelled: dart.fnType(core.bool, []),
      isDone: dart.fnType(core.bool, []),
      onDone: dart.fnType(async.Future$(V), []),
      onDefer: dart.fnType(async.Future$(core.bool), [])
    }));
    return DelegatingAsyncAction;
  });
  src__model__action__delegating_async_action.DelegatingAsyncAction = src__model__action__delegating_async_action.DelegatingAsyncAction$();
  dart.addTypeTests(src__model__action__delegating_async_action.DelegatingAsyncAction, _is_DelegatingAsyncAction_default);
  dart.trackLibraries("packages/angular_components/src/model/action/delegating_async_action.ddc", {
    "package:angular_components/src/model/action/delegating_async_action.dart": src__model__action__delegating_async_action
  }, '{"version":3,"sourceRoot":"","sources":["delegating_async_action.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;cAawB,cAAQ,UAAU;;;cAErB,cAAQ,OAAO;;;cAEV,cAAQ,OAAO;;;cAEX,cAAQ,QAAQ;;eAE9B,eAA4B;cACtC,cAAQ,SAAS,CAAC,eAAe;MAAC;;cAErB,cAAQ,OAAO;MAAE;YAEvB,iBAAwB;cAAK,cAAQ,MAAM,CAAC,iBAAiB;MAAC;;;IAC3E","file":"delegating_async_action.ddc.js"}');
  // Exports:
  return {
    src__model__action__delegating_async_action: src__model__action__delegating_async_action
  };
});

//# sourceMappingURL=delegating_async_action.ddc.js.map
