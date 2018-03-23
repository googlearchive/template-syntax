define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__material_tooltip__tooltip_controller = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  src__material_tooltip__tooltip_controller.Tooltip = class Tooltip extends core.Object {};
  (src__material_tooltip__tooltip_controller.Tooltip.new = function() {
  }).prototype = src__material_tooltip__tooltip_controller.Tooltip.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_controller.Tooltip);
  const _activeTooltip = Symbol('_activeTooltip');
  const _closeTimer = Symbol('_closeTimer');
  src__material_tooltip__tooltip_controller.TooltipController = class TooltipController extends core.Object {
    activate(tooltip) {
      if (tooltip == null || dart.equals(tooltip, this[_activeTooltip])) return;
      let t = this[_activeTooltip];
      t == null ? null : t.deactivate();
      tooltip.activate();
      this[_activeTooltip] = tooltip;
    }
    deactivate(tooltip) {
      if (tooltip == null) return;
      let tooltipToClose = tooltip;
      this[_closeTimer] = async.Timer.new(src__material_tooltip__tooltip_controller.keepAliveDuration, dart.fn(() => {
        tooltipToClose.deactivate();
        if (dart.equals(tooltipToClose, this[_activeTooltip])) this[_activeTooltip] = null;
      }, VoidToNull()));
    }
    deactivateImmediately(tooltip) {
      let t = this[_activeTooltip];
      t == null ? null : t.deactivate();
      this[_activeTooltip] = null;
    }
    keepOpen(tooltip) {
      if (!dart.equals(tooltip, this[_activeTooltip])) return;
      let t = this[_closeTimer];
      t == null ? null : t.cancel();
      this[_closeTimer] = null;
    }
    proxyFor(tooltip) {
      return new src__material_tooltip__tooltip_controller._ProxyTooltip.new(tooltip, this);
    }
  };
  (src__material_tooltip__tooltip_controller.TooltipController.new = function() {
    this[_activeTooltip] = null;
    this[_closeTimer] = null;
  }).prototype = src__material_tooltip__tooltip_controller.TooltipController.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_controller.TooltipController);
  dart.setMethodSignature(src__material_tooltip__tooltip_controller.TooltipController, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_controller.TooltipController.__proto__),
    activate: dart.fnType(dart.void, [src__material_tooltip__tooltip_controller.Tooltip]),
    deactivate: dart.fnType(dart.void, [src__material_tooltip__tooltip_controller.Tooltip]),
    deactivateImmediately: dart.fnType(dart.void, [src__material_tooltip__tooltip_controller.Tooltip]),
    keepOpen: dart.fnType(dart.void, [src__material_tooltip__tooltip_controller.Tooltip]),
    proxyFor: dart.fnType(src__material_tooltip__tooltip_controller.Tooltip, [src__material_tooltip__tooltip_controller.Tooltip])
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip_controller.TooltipController, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_controller.TooltipController.__proto__),
    [_activeTooltip]: dart.fieldType(src__material_tooltip__tooltip_controller.Tooltip),
    [_closeTimer]: dart.fieldType(async.Timer)
  }));
  dart.defineLazy(src__material_tooltip__tooltip_controller, {
    /*src__material_tooltip__tooltip_controller.keepAliveDuration*/get keepAliveDuration() {
      return dart.const(new core.Duration.new({milliseconds: 500}));
    }
  });
  const _tooltip = Symbol('_tooltip');
  const _controller = Symbol('_controller');
  src__material_tooltip__tooltip_controller._ProxyTooltip = class _ProxyTooltip extends core.Object {
    activate() {
      this[_controller].activate(this[_tooltip]);
    }
    deactivate(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      if (dart.test(immediate)) {
        this[_controller].deactivateImmediately(this[_tooltip]);
      } else {
        this[_controller].deactivate(this[_tooltip]);
      }
    }
  };
  (src__material_tooltip__tooltip_controller._ProxyTooltip.new = function(tooltip, controller) {
    this[_tooltip] = tooltip;
    this[_controller] = controller;
  }).prototype = src__material_tooltip__tooltip_controller._ProxyTooltip.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_controller._ProxyTooltip);
  src__material_tooltip__tooltip_controller._ProxyTooltip[dart.implements] = () => [src__material_tooltip__tooltip_controller.Tooltip];
  dart.setMethodSignature(src__material_tooltip__tooltip_controller._ProxyTooltip, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_controller._ProxyTooltip.__proto__),
    activate: dart.fnType(dart.void, []),
    deactivate: dart.fnType(dart.void, [], {immediate: core.bool})
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip_controller._ProxyTooltip, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_controller._ProxyTooltip.__proto__),
    [_tooltip]: dart.finalFieldType(src__material_tooltip__tooltip_controller.Tooltip),
    [_controller]: dart.finalFieldType(src__material_tooltip__tooltip_controller.TooltipController)
  }));
  dart.trackLibraries("packages/angular_components/src/material_tooltip/tooltip_controller.ddc", {
    "package:angular_components/src/material_tooltip/tooltip_controller.dart": src__material_tooltip__tooltip_controller
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_controller.dart"],"names":[],"mappings":";;;;;;;;;;;EAoBA;;;;;aAUgB,OAAe;AAC3B,UAAI,OAAO,IAAI,oBAAQ,OAAO,EAAI,oBAAc,GAAE;AAClD,kCAAc;;AACd,MAAwB,AAAE,gBAAQ;0BAApB,GAAG,OAAO;IAC1B;eAMgB,OAAe;AAC7B,UAAI,OAAO,IAAI,MAAM;AAGrB,UAAM,iBAAiB,OAAO;AAC9B,uBAAW,GAAG,AAAI,eAAK,CAAC,2DAAiB,EAAE;AACzC,sBAAc,WAAW;AACzB,wBAAI,cAAc,EAAI,oBAAc,GAAE,oBAAc,GAAG;;IAE3D;0BAG2B,OAAe;AACxC,kCAAc;;AACd,0BAAc,GAAG;IACnB;aAEc,OAAe;AAC3B,uBAAI,OAAO,EAAI,oBAAc,GAAE;AAC/B,+BAAW;;AACX,uBAAW,GAAG;IAChB;aAQiB,OAAe;YAAK,KAAI,2DAAa,CAAC,OAAO,EAAE;IAAK;;;IAL7D,oBAAc;IAGhB,iBAAW;EAGnB;;;;;;;;;;;;;;;;MAEM,2DAAiB;YAAG,gBAAM,iBAAQ,gBAAe;;;;;;;AAUnD,uBAAW,SAAS,CAAC,cAAQ;IAC/B;;UAGsB,2DAAW;AAC/B,oBAAI,SAAS,GAAE;AACb,yBAAW,sBAAsB,CAAC,cAAQ;aACrC;AACL,yBAAW,WAAW,CAAC,cAAQ;;IAEnC;;0EAdmB,OAAQ,EAAO,UAAW;IAA1B,cAAQ,GAAR,OAAQ;IAAO,iBAAW,GAAX,UAAW;EAAC","file":"tooltip_controller.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip_controller: src__material_tooltip__tooltip_controller
  };
});

//# sourceMappingURL=tooltip_controller.ddc.js.map
