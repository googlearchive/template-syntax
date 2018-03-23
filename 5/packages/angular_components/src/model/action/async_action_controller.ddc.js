define(['dart_sdk', 'packages/angular_components/src/model/action/async_action'], function(dart_sdk, async_action) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model__action__async_action = async_action.src__model__action__async_action;
  const _root = Object.create(null);
  const src__model__action__async_action_controller = Object.create(_root);
  const $any = dartx.any;
  let CompleterOfbool = () => (CompleterOfbool = dart.constFn(async.Completer$(core.bool)))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let JSArrayOfFutureOfbool = () => (JSArrayOfFutureOfbool = dart.constFn(_interceptors.JSArray$(FutureOfbool())))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let boolToFuture = () => (boolToFuture = dart.constFn(dart.fnType(async.Future, [core.bool])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let ListOfbool = () => (ListOfbool = dart.constFn(core.List$(core.bool)))();
  let ListOfboolTobool = () => (ListOfboolTobool = dart.constFn(dart.fnType(core.bool, [ListOfbool()])))();
  let VoidToFutureOfbool = () => (VoidToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let ListOfFuture = () => (ListOfFuture = dart.constFn(core.List$(async.Future)))();
  let ListOfFutureOfbool = () => (ListOfFutureOfbool = dart.constFn(core.List$(FutureOfbool())))();
  src__model__action__async_action_controller.Executor = dart.typedef('Executor', () => dart.fnType(dart.dynamic, []));
  src__model__action__async_action_controller.OnCancelFunction = dart.typedef('OnCancelFunction', () => dart.fnType(dart.dynamic, []));
  const _executeCompleter = Symbol('_executeCompleter');
  const _deferCompleter = Symbol('_deferCompleter');
  const _executionDeferrals = Symbol('_executionDeferrals');
  const _futureCancellations = Symbol('_futureCancellations');
  const _locked = Symbol('_locked');
  const _cancelled = Symbol('_cancelled');
  const _done = Symbol('_done');
  const _action = Symbol('_action');
  const _executeAndAttach = Symbol('_executeAndAttach');
  const _maybeWait = Symbol('_maybeWait');
  const _attachFuture = Symbol('_attachFuture');
  const _shouldCancel = Symbol('_shouldCancel');
  const _is_AsyncActionController_default = Symbol('_is_AsyncActionController_default');
  src__model__action__async_action_controller.AsyncActionController$ = dart.generic(V => {
    let CompleterOfV = () => (CompleterOfV = dart.constFn(async.Completer$(V)))();
    let AsyncActionOfV = () => (AsyncActionOfV = dart.constFn(src__model__action__async_action.AsyncAction$(V)))();
    let dynamicToV = () => (dynamicToV = dart.constFn(dart.fnType(V, [dart.dynamic])))();
    let FutureOfV = () => (FutureOfV = dart.constFn(async.Future$(V)))();
    let FutureOrOfV = () => (FutureOrOfV = dart.constFn(async.FutureOr$(V)))();
    class AsyncActionController extends core.Object {
      get action() {
        if (this[_action] == null) {
          this[_action] = new (AsyncActionOfV()).new(this[_executeCompleter].future, this[_deferCompleter].future, this[_futureCancellations], this[_executionDeferrals], dart.fn(() => this[_locked], VoidTobool()), dart.fn(() => this[_cancelled], VoidTobool()), dart.fn(() => this[_done], VoidTobool()));
        }
        return this[_action];
      }
      execute(exec, opts) {
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let valueOnCancel = opts && 'valueOnCancel' in opts ? opts.valueOnCancel : null;
        V._check(valueOnCancel);
        return async.Future.microtask(dart.fn(() => {
          if (dart.test(this[_locked])) {
            dart.throw(new core.StateError.new('Cannot execute, execution already in process.'));
          }
          this[_locked] = true;
          return this[_shouldCancel]().then(dart.dynamic, dart.fn(shouldCancel => {
            this[_cancelled] = shouldCancel;
            let shouldProceed = !dart.test(this[_cancelled]);
            this[_deferCompleter].complete(shouldProceed);
            if (shouldProceed) {
              return this[_maybeWait]().then(dart.dynamic, dart.fn(_ => {
                this[_executeAndAttach](exec);
              }, dynamicToNull()));
            } else {
              this[_done] = true;
              if (onCancel == null) {
                this[_executeCompleter].complete(valueOnCancel);
              } else {
                let cancelRes = onCancel();
                if (!async.Future.is(cancelRes)) {
                  this[_executeCompleter].complete(valueOnCancel);
                } else {
                  this[_attachFuture](FutureOfV()._check(dart.dsend(cancelRes, 'then', dart.fn(_ => valueOnCancel, dynamicToV()))));
                }
              }
            }
          }, boolToFuture()));
        }, VoidToFuture()));
      }
      [_maybeWait]() {
        return async.Future.wait(dart.dynamic, this[_executionDeferrals]);
      }
      [_shouldCancel]() {
        return FutureOfbool().microtask(dart.fn(() => async.Future.wait(core.bool, this[_futureCancellations]).then(core.bool, dart.fn(results => results[$any](dart.fn(cancel => cancel === true, boolTobool())), ListOfboolTobool())), VoidToFutureOfbool()));
      }
      [_executeAndAttach](exec) {
        let execResult = dart.dcall(exec);
        this[_done] = true;
        if (async.Future.is(execResult)) {
          this[_attachFuture](FutureOfV()._check(execResult));
        } else {
          this[_executeCompleter].complete(FutureOrOfV()._check(execResult));
        }
      }
      [_attachFuture](future) {
        FutureOfV()._check(future);
        future.then(dart.void, dart.bind(this[_executeCompleter], 'complete')).catchError(dart.bind(this[_executeCompleter], 'completeError'));
      }
    }
    (AsyncActionController.new = function() {
      this[_executeCompleter] = CompleterOfV().new();
      this[_deferCompleter] = CompleterOfbool().new();
      this[_executionDeferrals] = JSArrayOfFuture().of([]);
      this[_futureCancellations] = JSArrayOfFutureOfbool().of([]);
      this[_locked] = false;
      this[_cancelled] = false;
      this[_done] = false;
      this[_action] = null;
    }).prototype = AsyncActionController.prototype;
    dart.addTypeTests(AsyncActionController);
    AsyncActionController.prototype[_is_AsyncActionController_default] = true;
    dart.setMethodSignature(AsyncActionController, () => ({
      __proto__: dart.getMethods(AsyncActionController.__proto__),
      execute: dart.fnType(async.Future, [VoidTodynamic()], {onCancel: VoidTodynamic(), valueOnCancel: core.Object}),
      [_maybeWait]: dart.fnType(async.Future, []),
      [_shouldCancel]: dart.fnType(async.Future$(core.bool), []),
      [_executeAndAttach]: dart.fnType(dart.void, [dart.dynamic]),
      [_attachFuture]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(AsyncActionController, () => ({
      __proto__: dart.getGetters(AsyncActionController.__proto__),
      action: dart.fnType(src__model__action__async_action.AsyncAction$(V), [])
    }));
    dart.setFieldSignature(AsyncActionController, () => ({
      __proto__: dart.getFields(AsyncActionController.__proto__),
      [_executeCompleter]: dart.finalFieldType(CompleterOfV()),
      [_deferCompleter]: dart.finalFieldType(CompleterOfbool()),
      [_executionDeferrals]: dart.finalFieldType(ListOfFuture()),
      [_futureCancellations]: dart.finalFieldType(ListOfFutureOfbool()),
      [_locked]: dart.fieldType(core.bool),
      [_cancelled]: dart.fieldType(core.bool),
      [_done]: dart.fieldType(core.bool),
      [_action]: dart.fieldType(AsyncActionOfV())
    }));
    return AsyncActionController;
  });
  src__model__action__async_action_controller.AsyncActionController = src__model__action__async_action_controller.AsyncActionController$();
  dart.addTypeTests(src__model__action__async_action_controller.AsyncActionController, _is_AsyncActionController_default);
  dart.trackLibraries("packages/angular_components/src/model/action/async_action_controller.ddc", {
    "package:angular_components/src/model/action/async_action_controller.dart": src__model__action__async_action_controller
  }, '{"version":3,"sourceRoot":"","sources":["async_action_controller.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwCI,YAAI,aAAO,IAAI,MAAM;AACnB,uBAAO,GAAG,IAAI,sBAAc,CACxB,uBAAiB,OAAO,EACxB,qBAAe,OAAO,EACtB,0BAAoB,EACpB,yBAAmB,EACnB,cAAM,aAAO,iBACb,cAAM,gBAAU,iBAChB,cAAM,WAAK;;AAEjB,cAAO,cAAO;MAChB;cASe,IAAa;YAAoB;YAAY;;AAM1D,cAAO,AAAI,uBAAgB,CAAC;AAC1B,wBAAI,aAAO,GAAE;AACX,uBAAM,IAAI,mBAAU,CAAC;;AAEvB,uBAAO,GAAG;AAGV,gBAAO,oBAAa,OAAO,eAAC,QAAC,YAAY;AACvC,4BAAU,GAAG,YAAY;AACzB,gBAAI,gBAAgB,WAAC,gBAAU;AAC/B,iCAAe,SAAS,CAAC,aAAa;AACtC,gBAAI,aAAa,EAAE;AAEjB,oBAAO,iBAAU,OAAO,eAAC,QAAC,CAAC;AACzB,uCAAiB,CAAC,IAAI;;mBAEnB;AACL,yBAAK,GAAG;AAIR,kBAAI,QAAQ,IAAI,MAAM;AACpB,uCAAiB,SAAS,CAAC,aAAa;qBACnC;AACL,oBAAI,YAAY,QAAQ;AACxB,qCAAI,SAAS,GAAa;AACxB,yCAAiB,SAAS,CAAC,aAAa;uBACnC;AAIL,qCAAa,+BAAC,SAAS,UAAM,QAAC,CAAC,IAAK,aAAa;;;;;;MAM7D;;AAIE,cAAO,aAAM,KAAK,eAAC,yBAAmB;MACxC;;AAME,cAAO,AAAI,yBAAgB,CAAC,cACnB,YAAM,KACJ,YAAC,0BAAoB,MACrB,YAAC,QAAC,OAAO,IAAK,OAAO,MAAI,CAAC,QAAC,MAAM,IACzB,MAAM,KAAI;MAG/B;0BAEuB,IAAyC;AAC9D,YAAI,wBAAa,IAAI;AACrB,mBAAK,GAAG;AACR,4BAAI,UAAU,GAAY;AACxB,6BAAa,oBAAC,UAAU;eACnB;AACL,iCAAiB,SAAS,sBAAC,UAAU;;MAEzC;sBAEmB,MAAgB;2BAAN;AAC3B,cAAM,KACG,sBAAC,uBAAiB,yBACZ,WAAC,uBAAiB;MACnC;;;MAnHM,uBAAiB,GAAG,AAAI,kBAAY;MAIpC,qBAAe,GAAG,AAAI,qBAAe;MAGrC,yBAAmB,GAAG;MAGtB,0BAAoB,GAAG;MAGxB,aAAO,GAAG;MACV,gBAAU,GAAG;MACb,WAAK,GAAG;MAgBE,aAAO;IAqFxB","file":"async_action_controller.ddc.js"}');
  // Exports:
  return {
    src__model__action__async_action_controller: src__model__action__async_action_controller
  };
});

//# sourceMappingURL=async_action_controller.ddc.js.map
