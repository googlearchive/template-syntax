define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const js = dart_sdk.js;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const framework_stabilizers__framework_stabilizers = Object.create(_root);
  const $_set = dartx._set;
  const $add = dartx.add;
  const $remove = dartx.remove;
  const $clear = dartx.clear;
  let boolAndStringTovoid = () => (boolAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.bool, core.String])))();
  let FnTovoid = () => (FnTovoid = dart.constFn(dart.fnType(dart.void, [boolAndStringTovoid()])))();
  let IdentityMapOfint$dynamic = () => (IdentityMapOfint$dynamic = dart.constFn(_js_helper.IdentityMap$(core.int, dart.dynamic)))();
  framework_stabilizers__framework_stabilizers.FrameworkStabilizer = dart.typedef('FrameworkStabilizer', () => dart.fnType(dart.void, [boolAndStringTovoid()]));
  framework_stabilizers__framework_stabilizers.IsStableCallback = dart.typedef('IsStableCallback', () => dart.fnType(dart.void, [core.bool, core.String]));
  framework_stabilizers__framework_stabilizers.FrameworkStabilizers = class FrameworkStabilizers extends core.Object {
    static get _frameworkStabilizers() {
      if (dart.global.frameworkStabilizers == null) {
        dart.global.frameworkStabilizers = [];
      }
      return dart.global.frameworkStabilizers;
    }
    static add(fn) {
      let wrappedFn = js.allowInterop(FnTovoid(), fn);
      let id = framework_stabilizers__framework_stabilizers.FrameworkStabilizers._nextId;
      framework_stabilizers__framework_stabilizers.FrameworkStabilizers._nextId = dart.notNull(id) + 1;
      framework_stabilizers__framework_stabilizers.FrameworkStabilizers._idToFrameworkStabilizer[$_set](id, wrappedFn);
      framework_stabilizers__framework_stabilizers.FrameworkStabilizers._frameworkStabilizers[$add](wrappedFn);
      return id;
    }
    static remove(id) {
      let wrappedFn = framework_stabilizers__framework_stabilizers.FrameworkStabilizers._idToFrameworkStabilizer[$remove](id);
      return wrappedFn == null ? false : framework_stabilizers__framework_stabilizers.FrameworkStabilizers._frameworkStabilizers[$remove](wrappedFn);
    }
    static removeAll() {
      framework_stabilizers__framework_stabilizers.FrameworkStabilizers._idToFrameworkStabilizer[$clear]();
      framework_stabilizers__framework_stabilizers.FrameworkStabilizers._frameworkStabilizers[$clear]();
    }
  };
  (framework_stabilizers__framework_stabilizers.FrameworkStabilizers.new = function() {
  }).prototype = framework_stabilizers__framework_stabilizers.FrameworkStabilizers.prototype;
  dart.addTypeTests(framework_stabilizers__framework_stabilizers.FrameworkStabilizers);
  dart.setStaticMethodSignature(framework_stabilizers__framework_stabilizers.FrameworkStabilizers, () => ({
    add: dart.fnType(core.int, [FnTovoid()]),
    remove: dart.fnType(core.bool, [core.int]),
    removeAll: dart.fnType(dart.void, [])
  }));
  dart.defineLazy(framework_stabilizers__framework_stabilizers.FrameworkStabilizers, {
    /*framework_stabilizers__framework_stabilizers.FrameworkStabilizers._idToFrameworkStabilizer*/get _idToFrameworkStabilizer() {
      return new (IdentityMapOfint$dynamic()).new();
    },
    /*framework_stabilizers__framework_stabilizers.FrameworkStabilizers._nextId*/get _nextId() {
      return 0;
    },
    set _nextId(_) {}
  });
  dart.trackLibraries("packages/angular_components/framework_stabilizers/framework_stabilizers.ddc", {
    "package:angular_components/framework_stabilizers/framework_stabilizers.dart": framework_stabilizers__framework_stabilizers
  }, '{"version":3,"sourceRoot":"","sources":["framework_stabilizers.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAmCI,UAAI,gCAAuB,IAAI,MAAM;AACnC,2CAA0B;;AAE5B,YAAO,iCAAuB;IAChC;eAkBe,EAAsB;AACnC,UAAI,YAAY,eAAY,aAAC,EAAE;AAC/B,UAAI,KAAK,yEAAO;MAAP,yEAAO,gBAAZ,MA3DR;AA4DI,gGAAwB,QAAC,EAAE,EAAI,SAAS;AACxC,6FAAqB,MAAI,CAAC,SAAS;AACnC,YAAO,GAAE;IACX;kBAGmB,EAAM;AACvB,UAAI,YAAY,0FAAwB,SAAO,CAAC,EAAE;AAClD,YAAO,UAAS,IAAI,OAAO,QAAQ,uFAAqB,SAAO,CAAC,SAAS;IAC3E;;AAGE,gGAAwB,QAAM;AAC9B,6FAAqB,QAAM;IAC7B;;;EACF;;;;;;;;MA5CiC,0FAAwB;YAAG;;MAC/C,yEAAO;YAAG","file":"framework_stabilizers.ddc.js"}');
  // Exports:
  return {
    framework_stabilizers__framework_stabilizers: framework_stabilizers__framework_stabilizers
  };
});

//# sourceMappingURL=framework_stabilizers.ddc.js.map
