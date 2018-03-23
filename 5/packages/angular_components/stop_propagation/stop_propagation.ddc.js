define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, events, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events = events.utils__browser__events__events;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const stop_propagation__stop_propagation = Object.create(_root);
  const $onClick = dartx.onClick;
  const $onKeyPress = dartx.onKeyPress;
  const _clickSubscription = Symbol('_clickSubscription');
  const _keyDownSubscription = Symbol('_keyDownSubscription');
  const _handleClick = Symbol('_handleClick');
  const _handleKeyPress = Symbol('_handleKeyPress');
  stop_propagation__stop_propagation.StopPropagationDirective = class StopPropagationDirective extends core.Object {
    ngOnDestroy() {
      let t = this[_clickSubscription];
      t == null ? null : t.cancel();
      let t$ = this[_keyDownSubscription];
      t$ == null ? null : t$.cancel();
    }
    [_handleClick](e) {
      e.stopPropagation();
    }
    [_handleKeyPress](e) {
      if (e.keyCode === html.KeyCode.ENTER || dart.test(utils__browser__events__events.isSpaceKey(e))) {
        e.stopPropagation();
      }
    }
  };
  (stop_propagation__stop_propagation.StopPropagationDirective.new = function(e) {
    this[_clickSubscription] = null;
    this[_keyDownSubscription] = null;
    this[_clickSubscription] = e[$onClick].listen(dart.bind(this, _handleClick));
    this[_keyDownSubscription] = e[$onKeyPress].listen(dart.bind(this, _handleKeyPress));
  }).prototype = stop_propagation__stop_propagation.StopPropagationDirective.prototype;
  dart.addTypeTests(stop_propagation__stop_propagation.StopPropagationDirective);
  stop_propagation__stop_propagation.StopPropagationDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(stop_propagation__stop_propagation.StopPropagationDirective, () => ({
    __proto__: dart.getMethods(stop_propagation__stop_propagation.StopPropagationDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_handleClick]: dart.fnType(dart.void, [html.MouseEvent]),
    [_handleKeyPress]: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setFieldSignature(stop_propagation__stop_propagation.StopPropagationDirective, () => ({
    __proto__: dart.getFields(stop_propagation__stop_propagation.StopPropagationDirective.__proto__),
    [_clickSubscription]: dart.fieldType(async.StreamSubscription),
    [_keyDownSubscription]: dart.fieldType(async.StreamSubscription)
  }));
  dart.trackLibraries("packages/angular_components/stop_propagation/stop_propagation.ddc", {
    "package:angular_components/stop_propagation/stop_propagation.dart": stop_propagation__stop_propagation
  }, '{"version":3,"sourceRoot":"","sources":["stop_propagation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;AA0BI,sCAAkB;;AAClB,yCAAoB;;IACtB;mBAEkB,CAAY;AAC5B,OAAC,gBAAgB;IACnB;sBAEqB,CAAe;AAClC,UAAI,CAAC,QAAQ,KAAI,YAAO,MAAM,cAAI,yCAAU,CAAC,CAAC,IAAG;AAC/C,SAAC,gBAAgB;;IAErB;;8EAnByB,CAAS;IAFf,wBAAkB;IAAE,0BAAoB;AAGzD,4BAAkB,GAAG,CAAC,UAAQ,OAAO,CAAC,6BAAY;AAClD,8BAAoB,GAAG,CAAC,aAAW,OAAO,CAAC,gCAAe;EAC5D","file":"stop_propagation.ddc.js"}');
  // Exports:
  return {
    stop_propagation__stop_propagation: stop_propagation__stop_propagation
  };
});

//# sourceMappingURL=stop_propagation.ddc.js.map
