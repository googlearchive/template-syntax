define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer'], function(dart_sdk, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const _root = Object.create(null);
  const src__utils__angular__managed_zone__managed_zone = Object.create(_root);
  const $toString = dartx.toString;
  let IdentityMapOfString$bool = () => (IdentityMapOfString$bool = dart.constFn(_js_helper.IdentityMap$(core.String, core.bool)))();
  src__utils__angular__managed_zone__managed_zone.ManagedZone = class ManagedZone extends core.Object {};
  (src__utils__angular__managed_zone__managed_zone.ManagedZone.new = function() {
  }).prototype = src__utils__angular__managed_zone__managed_zone.ManagedZone.prototype;
  dart.addTypeTests(src__utils__angular__managed_zone__managed_zone.ManagedZone);
  src__utils__angular__managed_zone__managed_zone.ManagedZone[dart.implements] = () => [utils__disposer__disposer.Disposable];
  const _onTurnDoneController = Symbol('_onTurnDoneController');
  const _onTurnStartController = Symbol('_onTurnStartController');
  const _onEventDoneController = Symbol('_onEventDoneController');
  const _isRunning = Symbol('_isRunning');
  src__utils__angular__managed_zone__managed_zone.ManagedZoneBase = class ManagedZoneBase extends src__utils__angular__managed_zone__managed_zone.ManagedZone {
    capturedTurnStart(event) {
      this[_isRunning] = true;
      if (this[_onTurnStartController] != null) {
        this[_onTurnStartController].add(null);
      }
    }
    capturedTurnDone(event) {
      this[_isRunning] = false;
      if (this[_onTurnDoneController] != null) {
        this[_onTurnDoneController].add(null);
      }
    }
    capturedEventDone(event) {
      if (this[_onEventDoneController] != null) {
        this[_onEventDoneController].add(null);
      }
    }
    get isRunning() {
      return this[_isRunning];
    }
    dispose() {}
    get inInnerZone() {
      return dart.equals(async.Zone.current, this.innerZone);
    }
    get inOuterZone() {
      return dart.equals(async.Zone.current, this.outerZone);
    }
    get onTurnStart() {
      if (this[_onTurnStartController] == null) {
        this[_onTurnStartController] = async.StreamController.broadcast({sync: true});
      }
      return this[_onTurnStartController].stream;
    }
    get onTurnDone() {
      if (this[_onTurnDoneController] == null) {
        this[_onTurnDoneController] = async.StreamController.broadcast({sync: true});
      }
      return this[_onTurnDoneController].stream;
    }
    get onEventDone() {
      if (this[_onEventDoneController] == null) {
        this[_onEventDoneController] = async.StreamController.broadcast({sync: true});
      }
      return this[_onEventDoneController].stream;
    }
    runInside(T, fn) {
      if (dart.test(this.inInnerZone)) {
        return fn();
      } else {
        return this.innerZone.run(T, fn);
      }
    }
    runOutside(T, fn) {
      if (dart.test(this.inOuterZone)) {
        return fn();
      } else {
        return this.outerZone.run(T, fn);
      }
    }
    toString() {
      return 'ManagedZone ' + dart.notNull(new (IdentityMapOfString$bool()).from(['inInnerZone', this.inInnerZone, 'inOuterZone', this.inOuterZone])[$toString]());
    }
  };
  (src__utils__angular__managed_zone__managed_zone.ManagedZoneBase.new = function() {
    this[_onTurnDoneController] = null;
    this[_onTurnStartController] = null;
    this[_onEventDoneController] = null;
    this[_isRunning] = false;
  }).prototype = src__utils__angular__managed_zone__managed_zone.ManagedZoneBase.prototype;
  dart.addTypeTests(src__utils__angular__managed_zone__managed_zone.ManagedZoneBase);
  dart.setMethodSignature(src__utils__angular__managed_zone__managed_zone.ManagedZoneBase, () => ({
    __proto__: dart.getMethods(src__utils__angular__managed_zone__managed_zone.ManagedZoneBase.__proto__),
    capturedTurnStart: dart.fnType(dart.void, [dart.dynamic]),
    capturedTurnDone: dart.fnType(dart.void, [dart.dynamic]),
    capturedEventDone: dart.fnType(dart.void, [dart.dynamic]),
    dispose: dart.fnType(dart.void, []),
    runInside: dart.gFnType(T => [T, [dart.fnType(T, [])]]),
    runOutside: dart.gFnType(T => [T, [dart.fnType(T, [])]])
  }));
  dart.setGetterSignature(src__utils__angular__managed_zone__managed_zone.ManagedZoneBase, () => ({
    __proto__: dart.getGetters(src__utils__angular__managed_zone__managed_zone.ManagedZoneBase.__proto__),
    isRunning: dart.fnType(core.bool, []),
    inInnerZone: dart.fnType(core.bool, []),
    inOuterZone: dart.fnType(core.bool, []),
    onTurnStart: dart.fnType(async.Stream, []),
    onTurnDone: dart.fnType(async.Stream, []),
    onEventDone: dart.fnType(async.Stream, [])
  }));
  dart.setFieldSignature(src__utils__angular__managed_zone__managed_zone.ManagedZoneBase, () => ({
    __proto__: dart.getFields(src__utils__angular__managed_zone__managed_zone.ManagedZoneBase.__proto__),
    [_onTurnDoneController]: dart.fieldType(async.StreamController),
    [_onTurnStartController]: dart.fieldType(async.StreamController),
    [_onEventDoneController]: dart.fieldType(async.StreamController),
    [_isRunning]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__utils__angular__managed_zone__managed_zone.ManagedZoneBase, ['toString']);
  dart.trackLibraries("packages/angular_components/src/utils/angular/managed_zone/managed_zone.ddc", {
    "package:angular_components/src/utils/angular/managed_zone/managed_zone.dart": src__utils__angular__managed_zone__managed_zone
  }, '{"version":3,"sourceRoot":"","sources":["managed_zone.dart"],"names":[],"mappings":";;;;;;;;;;;;;;EA6DA;;;;;;;;sBAYyB,KAAa;AAClC,sBAAU,GAAG;AACb,UAAI,4BAAsB,IAAI,MAAM;AAClC,oCAAsB,IAAI,CAAC;;IAE/B;qBAEsB,KAAa;AACjC,sBAAU,GAAG;AACb,UAAI,2BAAqB,IAAI,MAAM;AACjC,mCAAqB,IAAI,CAAC;;IAE9B;sBAEuB,KAAa;AAClC,UAAI,4BAAsB,IAAI,MAAM;AAClC,oCAAsB,IAAI,CAAC;;IAE/B;;YAGsB,iBAAU;;eAGhB;;yBAGQ,UAAI,QAAQ,EAAI,cAAS;;;yBAGzB,UAAI,QAAQ,EAAI,cAAS;;;AAI/C,UAAI,4BAAsB,IAAI,MAAM;AAClC,oCAAsB,GAAG,AAAI,gCAA0B,QAAO;;AAEhE,YAAO,6BAAsB,OAAO;IACtC;;AAIE,UAAI,2BAAqB,IAAI,MAAM;AACjC,mCAAqB,GAAG,AAAI,gCAA0B,QAAO;;AAE/D,YAAO,4BAAqB,OAAO;IACrC;;AAIE,UAAI,4BAAsB,IAAI,MAAM;AAClC,oCAAsB,GAAG,AAAI,gCAA0B,QAAO;;AAEhE,YAAO,6BAAsB,OAAO;IACtC;iBAGe,EAAM;AACnB,oBAAI,gBAAW,GAAE;AACf,cAAO,GAAE;aACJ;AACL,cAAO,eAAS,IAAI,IAAC,EAAE;;IAE3B;kBAGgB,EAAM;AACpB,oBAAI,gBAAW,GAAE;AACf,cAAO,GAAE;aACJ;AACL,cAAO,eAAS,IAAI,IAAC,EAAE;;IAE3B;;YAII,AAAe,+BACf,uCAAC,eAAe,gBAAW,EAAE,eAAe,gBAAW,aAAU;IAAE;;;IArFtD,2BAAqB;IACrB,4BAAsB;IACtB,4BAAsB;IAIlC,gBAAU,GAAG;EAgFpB","file":"managed_zone.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__managed_zone__managed_zone: src__utils__angular__managed_zone__managed_zone
  };
});

//# sourceMappingURL=managed_zone.ddc.js.map
