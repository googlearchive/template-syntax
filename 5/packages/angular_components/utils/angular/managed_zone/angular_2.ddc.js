define(['dart_sdk', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular/src/core/zone/ng_zone'], function(dart_sdk, managed_zone, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const _root = Object.create(null);
  const utils__angular__managed_zone__angular_2 = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _ngZone = Symbol('_ngZone');
  const _isDisposed = Symbol('_isDisposed');
  utils__angular__managed_zone__angular_2.Angular2ManagedZone = class Angular2ManagedZone extends src__utils__angular__managed_zone__managed_zone.ManagedZoneBase {
    get innerZone() {
      return this[innerZone];
    }
    set innerZone(value) {
      this[innerZone] = value;
    }
    get outerZone() {
      return this[outerZone];
    }
    set outerZone(value) {
      this[outerZone] = value;
    }
    capturedTurnDone(event) {
      if (dart.test(this[_isDisposed])) return;
      super.capturedTurnDone(event);
    }
    capturedEventDone(event) {
      if (dart.test(this[_isDisposed])) return;
      super.capturedEventDone(event);
    }
    dispose() {
      this[_isDisposed] = true;
    }
    get inInnerZone() {
      return !dart.test(this.inOuterZone);
    }
    runInside(T, fn) {
      return this[_ngZone].run(T, fn);
    }
    runOutside(T, fn) {
      return T.as(this[_ngZone].runOutsideAngular(fn));
    }
  };
  (utils__angular__managed_zone__angular_2.Angular2ManagedZone.new = function(ngZone) {
    this[_isDisposed] = false;
    this[innerZone] = null;
    this[outerZone] = null;
    this[_ngZone] = ngZone;
    utils__angular__managed_zone__angular_2.Angular2ManagedZone.__proto__.new.call(this);
    this[_ngZone].runOutsideAngular(dart.fn(() => {
      this.outerZone = async.Zone.current;
      this[_ngZone].onTurnStart.listen(dart.bind(this, 'capturedTurnStart'));
      this[_ngZone].onMicrotaskEmpty.listen(dart.bind(this, 'capturedTurnDone'));
      this[_ngZone].onTurnDone.listen(dart.bind(this, 'capturedEventDone'));
    }, VoidToNull()));
  }).prototype = utils__angular__managed_zone__angular_2.Angular2ManagedZone.prototype;
  dart.addTypeTests(utils__angular__managed_zone__angular_2.Angular2ManagedZone);
  const innerZone = Symbol("Angular2ManagedZone.innerZone");
  const outerZone = Symbol("Angular2ManagedZone.outerZone");
  dart.setFieldSignature(utils__angular__managed_zone__angular_2.Angular2ManagedZone, () => ({
    __proto__: dart.getFields(utils__angular__managed_zone__angular_2.Angular2ManagedZone.__proto__),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_isDisposed]: dart.fieldType(core.bool),
    innerZone: dart.fieldType(async.Zone),
    outerZone: dart.fieldType(async.Zone)
  }));
  dart.trackLibraries("packages/angular_components/utils/angular/managed_zone/angular_2.ddc", {
    "package:angular_components/utils/angular/managed_zone/angular_2.dart": utils__angular__managed_zone__angular_2
  }, '{"version":3,"sourceRoot":"","sources":["angular_2.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAoBO;;;;;;IAGA;;;;;;qBAYiB,KAAa;AACjC,oBAAI,iBAAW,GAAE;AACjB,4BAAsB,CAAC,KAAK;IAC9B;sBAGuB,KAAa;AAClC,oBAAI,iBAAW,GAAE;AACjB,6BAAuB,CAAC,KAAK;IAC/B;;AAIE,uBAAW,GAAG;IAChB;;YAGwB,YAAC,gBAAW;;iBAGrB,EAAM;YAAK,cAAO,IAAI,IAAC,EAAE;IAAC;kBAGzB,EAAM;kBAAK,aAAO,kBAAkB,CAAC,EAAE;IAAM;;8EAjCpC,MAAO;IAR3B,iBAAW,GAAG;IAGd,eAAS;IAGT,eAAS;IAEW,aAAO,GAAP,MAAO;;AAC9B,iBAAO,kBAAkB,CAAC;AACxB,oBAAS,GAAG,UAAI,QAAQ;AACxB,mBAAO,YAAY,OAAO,CAAC,oCAAiB;AAC5C,mBAAO,iBAAiB,OAAO,CAAC,mCAAgB;AAChD,mBAAO,WAAW,OAAO,CAAC,oCAAiB;;EAE/C","file":"angular_2.ddc.js"}');
  // Exports:
  return {
    utils__angular__managed_zone__angular_2: utils__angular__managed_zone__angular_2
  };
});

//# sourceMappingURL=angular_2.ddc.js.map
