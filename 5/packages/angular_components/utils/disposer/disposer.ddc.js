define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const utils__disposer__disposer = Object.create(_root);
  const $add = dartx.add;
  const $length = dartx.length;
  const $_get = dartx._get;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfDisposable = () => (JSArrayOfDisposable = dart.constFn(_interceptors.JSArray$(utils__disposer__disposer.Disposable)))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  let JSArrayOfEventSink = () => (JSArrayOfEventSink = dart.constFn(_interceptors.JSArray$(async.EventSink)))();
  let JSArrayOfVoidTovoid = () => (JSArrayOfVoidTovoid = dart.constFn(_interceptors.JSArray$(VoidTovoid())))();
  let ListOfVoidTovoid = () => (ListOfVoidTovoid = dart.constFn(core.List$(VoidTovoid())))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  let ListOfEventSink = () => (ListOfEventSink = dart.constFn(core.List$(async.EventSink)))();
  let ListOfDisposable = () => (ListOfDisposable = dart.constFn(core.List$(utils__disposer__disposer.Disposable)))();
  dart.defineLazy(utils__disposer__disposer, {
    /*utils__disposer__disposer._oneShotDisposerMemoryLeakWarning*/get _oneShotDisposerMemoryLeakWarning() {
      return 'Possible memory leak detected: A disposable should not be added to ' + 'one shot disposers after the dispose() method has been called.';
    }
  });
  utils__disposer__disposer.DisposeFunction = dart.typedef('DisposeFunction', () => dart.fnType(dart.void, []));
  utils__disposer__disposer.Disposable = class Disposable extends core.Object {
    static new(disposeFn) {
      return new utils__disposer__disposer._SingleFunctionDisposable.new(disposeFn);
    }
  };
  (utils__disposer__disposer.Disposable[dart.mixinNew] = function() {
  }).prototype = utils__disposer__disposer.Disposable.prototype;
  dart.addTypeTests(utils__disposer__disposer.Disposable);
  dart.defineLazy(utils__disposer__disposer.Disposable, {
    /*utils__disposer__disposer.Disposable.Noop*/get Noop() {
      return dart.const(new utils__disposer__disposer._NoopDisposable.new());
    }
  });
  utils__disposer__disposer._NoopDisposable = class _NoopDisposable extends core.Object {
    dispose() {}
  };
  (utils__disposer__disposer._NoopDisposable.new = function() {
  }).prototype = utils__disposer__disposer._NoopDisposable.prototype;
  dart.addTypeTests(utils__disposer__disposer._NoopDisposable);
  utils__disposer__disposer._NoopDisposable[dart.implements] = () => [utils__disposer__disposer.Disposable];
  dart.setMethodSignature(utils__disposer__disposer._NoopDisposable, () => ({
    __proto__: dart.getMethods(utils__disposer__disposer._NoopDisposable.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  const _disposeFn = Symbol('_disposeFn');
  utils__disposer__disposer._SingleFunctionDisposable = class _SingleFunctionDisposable extends core.Object {
    dispose() {
      this[_disposeFn]();
    }
  };
  (utils__disposer__disposer._SingleFunctionDisposable.new = function(disposeFn) {
    this[_disposeFn] = disposeFn;
  }).prototype = utils__disposer__disposer._SingleFunctionDisposable.prototype;
  dart.addTypeTests(utils__disposer__disposer._SingleFunctionDisposable);
  utils__disposer__disposer._SingleFunctionDisposable[dart.implements] = () => [utils__disposer__disposer.Disposable];
  dart.setMethodSignature(utils__disposer__disposer._SingleFunctionDisposable, () => ({
    __proto__: dart.getMethods(utils__disposer__disposer._SingleFunctionDisposable.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(utils__disposer__disposer._SingleFunctionDisposable, () => ({
    __proto__: dart.getFields(utils__disposer__disposer._SingleFunctionDisposable.__proto__),
    [_disposeFn]: dart.finalFieldType(VoidTovoid())
  }));
  const _oneShot = Symbol('_oneShot');
  const _disposeFunctions = Symbol('_disposeFunctions');
  const _disposeSubs = Symbol('_disposeSubs');
  const _disposeSinks = Symbol('_disposeSinks');
  const _disposeDisposables = Symbol('_disposeDisposables');
  const _disposeCalled = Symbol('_disposeCalled');
  const _checkIfAlreadyDisposed = Symbol('_checkIfAlreadyDisposed');
  utils__disposer__disposer.Disposer = class Disposer extends core.Object {
    addDisposable(T, disposable) {
      let disposable_ = disposable;
      if (utils__disposer__disposer.Disposable.is(disposable_)) {
        let t = this[_disposeDisposables];
        t == null ? this[_disposeDisposables] = JSArrayOfDisposable().of([]) : t;
        this[_disposeDisposables][$add](utils__disposer__disposer.Disposable.as(disposable));
        this[_checkIfAlreadyDisposed]();
      } else if (async.StreamSubscription.is(disposable_)) {
        this.addStreamSubscription(dart.dynamic, disposable_);
      } else if (async.EventSink.is(disposable_)) {
        this.addEventSink(dart.dynamic, disposable_);
      } else if (VoidTovoid().is(disposable_)) {
        this.addFunction(disposable_);
      } else {
        dart.throw(new core.ArgumentError.value(disposable, 'disposable'));
      }
      return disposable;
    }
    addStreamSubscription(T, disposable) {
      let t = this[_disposeSubs];
      t == null ? this[_disposeSubs] = JSArrayOfStreamSubscription().of([]) : t;
      this[_disposeSubs][$add](disposable);
      this[_checkIfAlreadyDisposed]();
      return disposable;
    }
    addEventSink(T, disposable) {
      let t = this[_disposeSinks];
      t == null ? this[_disposeSinks] = JSArrayOfEventSink().of([]) : t;
      this[_disposeSinks][$add](disposable);
      this[_checkIfAlreadyDisposed]();
      return disposable;
    }
    addFunction(disposable) {
      if (!(disposable != null)) dart.assertFailed();
      let t = this[_disposeFunctions];
      t == null ? this[_disposeFunctions] = JSArrayOfVoidTovoid().of([]) : t;
      this[_disposeFunctions][$add](disposable);
      this[_checkIfAlreadyDisposed]();
      return disposable;
    }
    [_checkIfAlreadyDisposed]() {
      if (!!(dart.test(this[_oneShot]) && dart.test(this[_disposeCalled]))) dart.assertFailed("Possible memory leak detected: A disposable should not be added to one shot disposers after the dispose() method has been called.");
    }
    dispose() {
      if (this[_disposeSubs] != null) {
        let len = this[_disposeSubs][$length];
        for (let i = 0; i < dart.notNull(len); i++) {
          this[_disposeSubs][$_get](i).cancel();
        }
        this[_disposeSubs] = null;
      }
      if (this[_disposeSinks] != null) {
        let len = this[_disposeSinks][$length];
        for (let i = 0; i < dart.notNull(len); i++) {
          this[_disposeSinks][$_get](i).close();
        }
        this[_disposeSinks] = null;
      }
      if (this[_disposeDisposables] != null) {
        let len = this[_disposeDisposables][$length];
        for (let i = 0; i < dart.notNull(len); i++) {
          this[_disposeDisposables][$_get](i).dispose();
        }
        this[_disposeDisposables] = null;
      }
      if (this[_disposeFunctions] != null) {
        let len = this[_disposeFunctions][$length];
        for (let i = 0; i < dart.notNull(len); i++) {
          this[_disposeFunctions][$_get](i)();
        }
        this[_disposeFunctions] = null;
      }
      this[_disposeCalled] = true;
    }
  };
  (utils__disposer__disposer.Disposer.new = function(opts) {
    let oneShot = opts && 'oneShot' in opts ? opts.oneShot : false;
    this[_disposeFunctions] = null;
    this[_disposeSubs] = null;
    this[_disposeSinks] = null;
    this[_disposeDisposables] = null;
    this[_disposeCalled] = false;
    this[_oneShot] = oneShot;
  }).prototype = utils__disposer__disposer.Disposer.prototype;
  (utils__disposer__disposer.Disposer.oneShot = function() {
    this[_disposeFunctions] = null;
    this[_disposeSubs] = null;
    this[_disposeSinks] = null;
    this[_disposeDisposables] = null;
    this[_disposeCalled] = false;
    this[_oneShot] = true;
  }).prototype = utils__disposer__disposer.Disposer.prototype;
  (utils__disposer__disposer.Disposer.multi = function() {
    this[_disposeFunctions] = null;
    this[_disposeSubs] = null;
    this[_disposeSinks] = null;
    this[_disposeDisposables] = null;
    this[_disposeCalled] = false;
    this[_oneShot] = false;
  }).prototype = utils__disposer__disposer.Disposer.prototype;
  dart.addTypeTests(utils__disposer__disposer.Disposer);
  utils__disposer__disposer.Disposer[dart.implements] = () => [utils__disposer__disposer.Disposable];
  dart.setMethodSignature(utils__disposer__disposer.Disposer, () => ({
    __proto__: dart.getMethods(utils__disposer__disposer.Disposer.__proto__),
    addDisposable: dart.gFnType(T => [T, [T]]),
    addStreamSubscription: dart.gFnType(T => [async.StreamSubscription$(T), [async.StreamSubscription$(T)]]),
    addEventSink: dart.gFnType(T => [async.EventSink$(T), [async.EventSink$(T)]]),
    addFunction: dart.fnType(dart.fnType(dart.void, []), [VoidTovoid()]),
    [_checkIfAlreadyDisposed]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(utils__disposer__disposer.Disposer, () => ({
    __proto__: dart.getFields(utils__disposer__disposer.Disposer.__proto__),
    [_disposeFunctions]: dart.fieldType(ListOfVoidTovoid()),
    [_disposeSubs]: dart.fieldType(ListOfStreamSubscription()),
    [_disposeSinks]: dart.fieldType(ListOfEventSink()),
    [_disposeDisposables]: dart.fieldType(ListOfDisposable()),
    [_oneShot]: dart.finalFieldType(core.bool),
    [_disposeCalled]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/utils/disposer/disposer.ddc", {
    "package:angular_components/utils/disposer/disposer.dart": utils__disposer__disposer
  }, '{"version":3,"sourceRoot":"","sources":["disposer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;MAMa,2DAAiC;YAC1C,yEACA;;;;;eAWiB,SAAyB;AAAI,yEAA7B,SAAyB;IAA6B;;;;;;MAHjD,yCAAI;YAAG,gBAAM,6CAAe;;;;eAcpC;;;EAHO;;;;;;;;;;AAcrB,sBAAU;IACZ;;sEAL+B,SAAU;IAAV,gBAAU,GAAV,SAAU;EAAC;;;;;;;;;;;;;;;;;;;qBAgEvB,UAAY;AAI7B,UAAQ,cAAc,UAAU;AAChC,kDAAI,WAAW,GAAgB;AAC7B,yCAAmB;gDAAK;AACxB,iCAAmB,MAAI,yCAAC,UAAU;AAClC,qCAAuB;YAClB,iCAAI,WAAW,GAAwB;AAC5C,kCAAqB,eAAC,WAAW;YAC5B,wBAAI,WAAW,GAAe;AACnC,yBAAY,eAAC,WAAW;YACnB,qBAAI,WAAW,GAAqB;AACzC,wBAAW,CAAC,WAAW;aAClB;AACL,mBAAM,IAAI,wBAAmB,CAAC,UAAU,EAAE;;AAE5C,YAAO,WAAU;IACnB;6BAII,UAAgC;AAClC,gCAAY;uCAAK;AACjB,wBAAY,MAAI,CAAC,UAAU;AAC3B,mCAAuB;AACvB,YAAO,WAAU;IACnB;oBAG6B,UAAuB;AAClD,iCAAa;wCAAK;AAClB,yBAAa,MAAI,CAAC,UAAU;AAC5B,mCAAuB;AACvB,YAAO,WAAU;IACnB;gBAG4B,UAA0B;AACpD,YAAO,UAAU,IAAI;AACrB,qCAAiB;4CAAK;AACtB,6BAAiB,MAAI,CAAC,UAAU;AAChC,mCAAuB;AACvB,YAAO,WAAU;IACnB;;AAIE,WAAO,YAAE,cAAQ,eAAI,oBAAc,sBAAG,mIAAiC;IACzE;;AAIE,UAAI,kBAAY,IAAI,MAAM;AACxB,YAAI,MAAM,kBAAY,SAAO;AAC7B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,GAAG,GAAE,CAAC,IAAI;AAC5B,4BAAY,QAAC,CAAC,QAAQ;;AAExB,0BAAY,GAAG;;AAEjB,UAAI,mBAAa,IAAI,MAAM;AACzB,YAAI,MAAM,mBAAa,SAAO;AAC9B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,GAAG,GAAE,CAAC,IAAI;AAC5B,6BAAa,QAAC,CAAC,OAAO;;AAExB,2BAAa,GAAG;;AAElB,UAAI,yBAAmB,IAAI,MAAM;AAC/B,YAAI,MAAM,yBAAmB,SAAO;AACpC,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,GAAG,GAAE,CAAC,IAAI;AAC5B,mCAAmB,QAAC,CAAC,SAAS;;AAEhC,iCAAmB,GAAG;;AAExB,UAAI,uBAAiB,IAAI,MAAM;AAC7B,YAAI,MAAM,uBAAiB,SAAO;AAClC,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,GAAG,GAAE,CAAC,IAAI;AAC5B,iCAAiB,QAAC,CAAC;;AAErB,+BAAiB,GAAG;;AAEtB,0BAAc,GAAG;IACnB;;;QAjGe,qDAAS;IAVF,uBAAiB;IACd,kBAAY;IACrB,mBAAa;IACZ,yBAAmB;IAE/B,oBAAc,GAAG;IAKY,cAAQ,GAAG,OAAO;;;IAV9B,uBAAiB;IACd,kBAAY;IACrB,mBAAa;IACZ,yBAAmB;IAE/B,oBAAc,GAAG;IAQD,cAAQ,GAAG;EAAI;;IAbd,uBAAiB;IACd,kBAAY;IACrB,mBAAa;IACZ,yBAAmB;IAE/B,oBAAc,GAAG;IAWH,cAAQ,GAAG;EAAK","file":"disposer.ddc.js"}');
  // Exports:
  return {
    utils__disposer__disposer: utils__disposer__disposer
  };
});

//# sourceMappingURL=disposer.ddc.js.map
