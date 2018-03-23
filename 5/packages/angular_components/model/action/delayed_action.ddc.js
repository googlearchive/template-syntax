define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const model__action__delayed_action = Object.create(_root);
  let CompleterOfbool = () => (CompleterOfbool = dart.constFn(async.Completer$(core.bool)))();
  let FutureOrOfbool = () => (FutureOrOfbool = dart.constFn(async.FutureOr$(core.bool)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  model__action__delayed_action.Callback = dart.typedef('Callback', () => dart.fnType(dart.void, []));
  const _duration = Symbol('_duration');
  const _callback = Symbol('_callback');
  const _timer = Symbol('_timer');
  const _completer = Symbol('_completer');
  const _reset = Symbol('_reset');
  const _wrappedCallback = Symbol('_wrappedCallback');
  model__action__delayed_action.DelayedAction = class DelayedAction extends core.Object {
    [_wrappedCallback]() {
      this[_callback]();
      this[_reset](true);
    }
    start() {
      if (this[_timer] == null) {
        this[_completer] = CompleterOfbool().new();
        this[_timer] = async.Timer.new(this[_duration], dart.bind(this, _wrappedCallback));
      }
      return this[_completer].future;
    }
    cancel() {
      this[_reset](false);
    }
    doNow() {
      this[_wrappedCallback]();
    }
    restart() {
      this.cancel();
      return this.start();
    }
    [_reset](complete) {
      let t = this[_timer];
      t == null ? null : t.cancel();
      this[_timer] = null;
      let t$ = this[_completer];
      t$ == null ? null : t$.complete(FutureOrOfbool()._check(complete));
      this[_completer] = null;
    }
  };
  (model__action__delayed_action.DelayedAction.new = function(duration, callback) {
    this[_timer] = null;
    this[_completer] = null;
    this[_duration] = duration;
    this[_callback] = callback;
  }).prototype = model__action__delayed_action.DelayedAction.prototype;
  dart.addTypeTests(model__action__delayed_action.DelayedAction);
  dart.setMethodSignature(model__action__delayed_action.DelayedAction, () => ({
    __proto__: dart.getMethods(model__action__delayed_action.DelayedAction.__proto__),
    [_wrappedCallback]: dart.fnType(dart.void, []),
    start: dart.fnType(async.Future$(core.bool), []),
    cancel: dart.fnType(dart.void, []),
    doNow: dart.fnType(dart.void, []),
    restart: dart.fnType(async.Future$(core.bool), []),
    [_reset]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(model__action__delayed_action.DelayedAction, () => ({
    __proto__: dart.getFields(model__action__delayed_action.DelayedAction.__proto__),
    [_callback]: dart.finalFieldType(VoidTovoid()),
    [_duration]: dart.finalFieldType(core.Duration),
    [_timer]: dart.fieldType(async.Timer),
    [_completer]: dart.fieldType(CompleterOfbool())
  }));
  dart.trackLibraries("packages/angular_components/model/action/delayed_action.ddc", {
    "package:angular_components/model/action/delayed_action.dart": model__action__delayed_action
  }, '{"version":3,"sourceRoot":"","sources":["delayed_action.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAoBI,qBAAS;AACT,kBAAM,CAAC;IACT;;AAOE,UAAI,YAAM,IAAI,MAAM;AAClB,wBAAU,GAAG,AAAI,qBAAe;AAChC,oBAAM,GAAG,AAAI,eAAK,CAAC,eAAS,EAAE,iCAAgB;;AAEhD,YAAO,iBAAU,OAAO;IAC1B;;AAIE,kBAAM,CAAC;IACT;;AAIE,4BAAgB;IAClB;;AAIE,iBAAM;AACN,YAAO,WAAK;IACd;aAEY,QAAQ;AAClB,0BAAM;;AACN,kBAAM,GAAG;AACT,+BAAU;8DAAW,QAAQ;AAC7B,sBAAU,GAAG;IACf;;8DAxCmB,QAAS,EAAO,QAAS;IAHtC,YAAM;IACI,gBAAU;IAEP,eAAS,GAAT,QAAS;IAAO,eAAS,GAAT,QAAS;EAAC","file":"delayed_action.ddc.js"}');
  // Exports:
  return {
    model__action__delayed_action: model__action__delayed_action
  };
});

//# sourceMappingURL=delayed_action.ddc.js.map
