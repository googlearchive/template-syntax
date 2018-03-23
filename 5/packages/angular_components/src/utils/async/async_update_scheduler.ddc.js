define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils__async__async_update_scheduler = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  src__utils__async__async_update_scheduler.OnUpdateCallback = dart.typedef('OnUpdateCallback', () => dart.fnType(dart.void, []));
  const _updateCallback = Symbol('_updateCallback');
  const _isUpdateScheduled = Symbol('_isUpdateScheduled');
  const _onUpdateStreamController = Symbol('_onUpdateStreamController');
  src__utils__async__async_update_scheduler.AsyncUpdateScheduler = class AsyncUpdateScheduler extends core.Object {
    get onUpdate() {
      if (this[_onUpdateStreamController] == null) {
        this[_onUpdateStreamController] = async.StreamController.broadcast({sync: true});
      }
      return this[_onUpdateStreamController].stream;
    }
    scheduleUpdate() {
      if (!dart.test(this[_isUpdateScheduled])) {
        this[_isUpdateScheduled] = true;
        async.scheduleMicrotask(dart.fn(() => {
          this[_isUpdateScheduled] = false;
          if (this[_updateCallback] != null) {
            this[_updateCallback]();
          }
          if (this[_onUpdateStreamController] != null) {
            this[_onUpdateStreamController].add(null);
          }
        }, VoidToNull()));
      }
    }
  };
  (src__utils__async__async_update_scheduler.AsyncUpdateScheduler.new = function(updateCallback) {
    if (updateCallback === void 0) updateCallback = null;
    this[_isUpdateScheduled] = false;
    this[_onUpdateStreamController] = null;
    this[_updateCallback] = updateCallback;
  }).prototype = src__utils__async__async_update_scheduler.AsyncUpdateScheduler.prototype;
  dart.addTypeTests(src__utils__async__async_update_scheduler.AsyncUpdateScheduler);
  dart.setMethodSignature(src__utils__async__async_update_scheduler.AsyncUpdateScheduler, () => ({
    __proto__: dart.getMethods(src__utils__async__async_update_scheduler.AsyncUpdateScheduler.__proto__),
    scheduleUpdate: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__utils__async__async_update_scheduler.AsyncUpdateScheduler, () => ({
    __proto__: dart.getGetters(src__utils__async__async_update_scheduler.AsyncUpdateScheduler.__proto__),
    onUpdate: dart.fnType(async.Stream, [])
  }));
  dart.setFieldSignature(src__utils__async__async_update_scheduler.AsyncUpdateScheduler, () => ({
    __proto__: dart.getFields(src__utils__async__async_update_scheduler.AsyncUpdateScheduler.__proto__),
    [_updateCallback]: dart.finalFieldType(VoidTovoid()),
    [_isUpdateScheduled]: dart.fieldType(core.bool),
    [_onUpdateStreamController]: dart.fieldType(async.StreamController)
  }));
  dart.trackLibraries("packages/angular_components/src/utils/async/async_update_scheduler.ddc", {
    "package:angular_components/src/utils/async/async_update_scheduler.dart": src__utils__async__async_update_scheduler
  }, '{"version":3,"sourceRoot":"","sources":["async_update_scheduler.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAsDI,UAAI,+BAAyB,IAAI,MAAM;AACrC,uCAAyB,GAAG,AAAI,gCAA0B,QAAO;;AAEnE,YAAO,gCAAyB,OAAO;IACzC;;AAME,qBAAK,wBAAkB,GAAE;AACvB,gCAAkB,GAAG;AACrB,+BAAiB,CAAC;AAChB,kCAAkB,GAAG;AACrB,cAAI,qBAAe,IAAI,MAAM;AAC3B,iCAAe;;AAEjB,cAAI,+BAAyB,IAAI,MAAM;AACrC,2CAAyB,IAAI,CAAC;;;;IAItC;;iFAzB2B,cAAe;QAAf,cAAe,aAAf,cAAe;IAJrC,wBAAkB,GAAG;IACT,+BAAyB;IAGf,qBAAe,GAAf,cAAe;EAAE","file":"async_update_scheduler.ddc.js"}');
  // Exports:
  return {
    src__utils__async__async_update_scheduler: src__utils__async__async_update_scheduler
  };
});

//# sourceMappingURL=async_update_scheduler.ddc.js.map
