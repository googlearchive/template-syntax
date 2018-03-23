define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular/src/core/zone/ng_zone'], function(dart_sdk, events, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events = events.utils__browser__events__events;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const _root = Object.create(null);
  const auto_dismiss__auto_dismiss = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  const _zone = Symbol('_zone');
  const _click = Symbol('_click');
  const _ignoreClicks = Symbol('_ignoreClicks');
  const _autoDismissable = Symbol('_autoDismissable');
  const _listenForClicks = Symbol('_listenForClicks');
  auto_dismiss__auto_dismiss.AutoDismissDirective = class AutoDismissDirective extends core.Object {
    get autoDismissable() {
      return this[_autoDismissable];
    }
    set autoDismissable(b) {
      this[_autoDismissable] = b;
      this[_ignoreClicks] = this[_autoDismissable];
      this[_click].first.then(dart.dynamic, dart.bind(this, _listenForClicks));
      this[_zone].runOutsideAngular(dart.fn(() => async.Timer.run(dart.bind(this, _listenForClicks)), VoidTovoid()));
    }
    get dismiss() {
      return this[_click].where(dart.fn(_ => dart.test(this[_autoDismissable]) && !dart.test(this[_ignoreClicks]), dynamicTobool()));
    }
    [_listenForClicks](_) {
      if (_ === void 0) _ = null;
      return this[_ignoreClicks] = false;
    }
  };
  (auto_dismiss__auto_dismiss.AutoDismissDirective.new = function(element, zone) {
    this[_ignoreClicks] = false;
    this[_autoDismissable] = false;
    this[_zone] = zone;
    this[_click] = utils__browser__events__events.triggersOutside(element);
  }).prototype = auto_dismiss__auto_dismiss.AutoDismissDirective.prototype;
  dart.addTypeTests(auto_dismiss__auto_dismiss.AutoDismissDirective);
  dart.setMethodSignature(auto_dismiss__auto_dismiss.AutoDismissDirective, () => ({
    __proto__: dart.getMethods(auto_dismiss__auto_dismiss.AutoDismissDirective.__proto__),
    [_listenForClicks]: dart.fnType(dart.dynamic, [], [dart.dynamic])
  }));
  dart.setGetterSignature(auto_dismiss__auto_dismiss.AutoDismissDirective, () => ({
    __proto__: dart.getGetters(auto_dismiss__auto_dismiss.AutoDismissDirective.__proto__),
    autoDismissable: dart.fnType(core.bool, []),
    dismiss: dart.fnType(async.Stream, [])
  }));
  dart.setSetterSignature(auto_dismiss__auto_dismiss.AutoDismissDirective, () => ({
    __proto__: dart.getSetters(auto_dismiss__auto_dismiss.AutoDismissDirective.__proto__),
    autoDismissable: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(auto_dismiss__auto_dismiss.AutoDismissDirective, () => ({
    __proto__: dart.getFields(auto_dismiss__auto_dismiss.AutoDismissDirective.__proto__),
    [_click]: dart.finalFieldType(async.Stream),
    [_zone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_ignoreClicks]: dart.fieldType(core.bool),
    [_autoDismissable]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/auto_dismiss/auto_dismiss.ddc", {
    "package:angular_components/auto_dismiss/auto_dismiss.dart": auto_dismiss__auto_dismiss
  }, '{"version":3,"sourceRoot":"","sources":["auto_dismiss.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;YAuC8B,uBAAgB;;wBAIxB,CAAM;AACxB,4BAAgB,GAAG,CAAC;AAKpB,yBAAa,GAAG,sBAAgB;AAChC,kBAAM,MAAM,KAAK,eAAC,iCAAgB;AAGlC,iBAAK,kBAAkB,CAAC,cAAM,WAAK,IAAI,CAAC,iCAAgB;IAC1D;;YAIsB,aAAM,MAAM,CAAC,QAAC,CAAC,IAAsB,UAAjB,sBAAgB,gBAAK,mBAAa;IAAC;uBAE3D,CAAC;wBAAD;YAAO,oBAAa,GAAG;IAAK;;kEA1BzB,OAAmB,EAAO,IAAK;IAG/C,mBAAa,GAAG;IAChB,sBAAgB,GAAG;IAJuB,WAAK,GAAL,IAAK;IAC9C,YAAM,GAAG,8CAAe,CAAC,OAAO;EAAC","file":"auto_dismiss.ddc.js"}');
  // Exports:
  return {
    auto_dismiss__auto_dismiss: auto_dismiss__auto_dismiss
  };
});

//# sourceMappingURL=auto_dismiss.ddc.js.map
