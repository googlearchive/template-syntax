define(['dart_sdk', 'packages/angular_components/framework_stabilizers/framework_stabilizers'], function(dart_sdk, framework_stabilizers) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework_stabilizers__framework_stabilizers = framework_stabilizers.framework_stabilizers__framework_stabilizers;
  const _root = Object.create(null);
  const framework_stabilizers__testability = Object.create(_root);
  const $contains = dartx.contains;
  const $add = dartx.add;
  const $isNotEmpty = dartx.isNotEmpty;
  const $removeLast = dartx.removeLast;
  let boolAndStringTovoid = () => (boolAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.bool, core.String])))();
  let JSArrayOfboolAndStringTovoid = () => (JSArrayOfboolAndStringTovoid = dart.constFn(_interceptors.JSArray$(boolAndStringTovoid())))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let ListOfboolAndStringTovoid = () => (ListOfboolAndStringTovoid = dart.constFn(core.List$(boolAndStringTovoid())))();
  dart.defineLazy(framework_stabilizers__testability, {
    /*framework_stabilizers__testability.testabilitiesEnabled*/get testabilitiesEnabled() {
      return dart.global.window.location.href[$contains]('enableTestabilities');
    }
  });
  framework_stabilizers__testability.Testability = class Testability extends core.Object {};
  (framework_stabilizers__testability.Testability.new = function() {
  }).prototype = framework_stabilizers__testability.Testability.prototype;
  dart.addTypeTests(framework_stabilizers__testability.Testability);
  const _callbacks = Symbol('_callbacks');
  const _runCallbacksIfStable = Symbol('_runCallbacksIfStable');
  framework_stabilizers__testability.AbstractTestability = class AbstractTestability extends core.Object {
    register() {
      framework_stabilizers__framework_stabilizers.FrameworkStabilizers.add(dart.bind(this, 'whenStable'));
    }
    whenStable(fn) {
      this[_runCallbacksIfStable]({newCallback: fn});
    }
    checkStable() {
      this[_runCallbacksIfStable]();
    }
    [_runCallbacksIfStable](opts) {
      let newCallback = opts && 'newCallback' in opts ? opts.newCallback : null;
      async.Zone.ROOT.run(core.Null, dart.fn(() => {
        if (!dart.test(this.isStable)) {
          if (newCallback != null) this[_callbacks][$add](newCallback);
          return;
        }
        FutureOfNull().new(dart.fn(() => {
          if (newCallback != null) newCallback(false, this.name);
          while (dart.test(this[_callbacks][$isNotEmpty])) {
            this[_callbacks][$removeLast]()(true, this.name);
          }
        }, VoidToNull()));
      }, VoidToNull()));
    }
    get name() {
      return this.toString();
    }
  };
  (framework_stabilizers__testability.AbstractTestability.new = function() {
    this[_callbacks] = JSArrayOfboolAndStringTovoid().of([]);
  }).prototype = framework_stabilizers__testability.AbstractTestability.prototype;
  dart.addTypeTests(framework_stabilizers__testability.AbstractTestability);
  framework_stabilizers__testability.AbstractTestability[dart.implements] = () => [framework_stabilizers__testability.Testability];
  dart.setMethodSignature(framework_stabilizers__testability.AbstractTestability, () => ({
    __proto__: dart.getMethods(framework_stabilizers__testability.AbstractTestability.__proto__),
    register: dart.fnType(dart.void, []),
    whenStable: dart.fnType(dart.void, [boolAndStringTovoid()]),
    checkStable: dart.fnType(dart.void, []),
    [_runCallbacksIfStable]: dart.fnType(dart.void, [], {newCallback: boolAndStringTovoid()})
  }));
  dart.setGetterSignature(framework_stabilizers__testability.AbstractTestability, () => ({
    __proto__: dart.getGetters(framework_stabilizers__testability.AbstractTestability.__proto__),
    name: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(framework_stabilizers__testability.AbstractTestability, () => ({
    __proto__: dart.getFields(framework_stabilizers__testability.AbstractTestability.__proto__),
    [_callbacks]: dart.finalFieldType(ListOfboolAndStringTovoid())
  }));
  framework_stabilizers__testability.NullTestability = class NullTestability extends core.Object {
    register() {}
    whenStable(fn) {
      dart.throw(new core.UnsupportedError.new('not supported by NullTestability'));
    }
    get isStable() {
      dart.throw(new core.UnsupportedError.new('not supported by NullTestability'));
    }
    get name() {
      dart.throw(new core.UnsupportedError.new('not supported by NullTestability'));
    }
  };
  (framework_stabilizers__testability.NullTestability.new = function() {
  }).prototype = framework_stabilizers__testability.NullTestability.prototype;
  dart.addTypeTests(framework_stabilizers__testability.NullTestability);
  framework_stabilizers__testability.NullTestability[dart.implements] = () => [framework_stabilizers__testability.Testability];
  dart.setMethodSignature(framework_stabilizers__testability.NullTestability, () => ({
    __proto__: dart.getMethods(framework_stabilizers__testability.NullTestability.__proto__),
    register: dart.fnType(dart.void, []),
    whenStable: dart.fnType(dart.void, [boolAndStringTovoid()])
  }));
  dart.setGetterSignature(framework_stabilizers__testability.NullTestability, () => ({
    __proto__: dart.getGetters(framework_stabilizers__testability.NullTestability.__proto__),
    isStable: dart.fnType(core.bool, []),
    name: dart.fnType(core.String, [])
  }));
  dart.trackLibraries("packages/angular_components/framework_stabilizers/testability.ddc", {
    "package:angular_components/framework_stabilizers/testability.dart": framework_stabilizers__testability
  }, '{"version":3,"sourceRoot":"","sources":["testability.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MAoBW,uDAAoB;YAAG,iCAAI,WAAS,CAAC;;;;;EAShD;;;;;;AAcI,uEAAoB,IAAI,CAAC,6BAAU;IACrC;eAKgB,EAAmB;AACjC,iCAAqB,eAAc,EAAE;IACvC;;AAME,iCAAqB;IACvB;;UAI6C;AAE3C,gBAAI,KAAK,IAAI,YAAC;AACZ,uBAAK,aAAQ,GAAE;AACb,cAAI,WAAW,IAAI,MAAM,gBAAU,MAAI,CAAC,WAAW;AACnD;;AAGF,QAAI,kBAAM,CAAC;AACT,cAAI,WAAW,IAAI,MAAM,WAAW,CAAC,OAAO,SAAI;AAChD,2BAAO,gBAAU,aAAW,GAAE;AAC5B,YAAC,gBAAU,aAAW,GAAI,MAAM,SAAI;;;;IAI5C;;YAUmB,cAAa;IAAE;;;IAlDL,gBAAU,GAAG;EAmD5C;;;;;;;;;;;;;;;;;;;gBAQE;eAGgB,EAAmB;AACjC,iBAAM,IAAI,yBAAgB,CAAC;IAC7B;;AAIE,iBAAM,IAAI,yBAAgB,CAAC;IAC7B;;AAIE,iBAAM,IAAI,yBAAgB,CAAC;IAC7B;;;EACF","file":"testability.ddc.js"}');
  // Exports:
  return {
    framework_stabilizers__testability: framework_stabilizers__testability
  };
});

//# sourceMappingURL=testability.ddc.js.map
