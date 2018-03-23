define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/src/laminate/popup/popup_source', 'packages/angular_components/src/material_tooltip/tooltip_target', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, alignment, tooltip_controller, popup_source, tooltip_target, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const src__laminate__popup__popup_source = popup_source.src__laminate__popup__popup_source;
  const src__material_tooltip__tooltip_target = tooltip_target.src__material_tooltip__tooltip_target;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const src__material_tooltip__ink_tooltip = Object.create(_root);
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  const _tooltipController = Symbol('_tooltipController');
  const _changeDetector = Symbol('_changeDetector');
  const _tooltipSource = Symbol('_tooltipSource');
  const _controllerProxy = Symbol('_controllerProxy');
  const _showPopup = Symbol('_showPopup');
  src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent = class MaterialInkTooltipComponent extends core.Object {
    get popupSource() {
      return this[_tooltipSource];
    }
    get positions() {
      return this[positions];
    }
    set positions(value) {
      this[positions] = value;
    }
    get showPopup() {
      return this[_showPopup];
    }
    get text() {
      return this[text];
    }
    set text(value) {
      this[text] = value;
    }
    activate() {
      this[_showPopup] = true;
      this[_changeDetector].markForCheck();
    }
    deactivate(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      this[_showPopup] = false;
      this[_changeDetector].markForCheck();
    }
    set tooltipRef(target) {
      if (target == null) return;
      this[_tooltipSource] = target;
      target.setTooltip(this.tooltipHandle);
    }
    get tooltipHandle() {
      let t = this[_controllerProxy];
      return t == null ? this[_controllerProxy] = this[_tooltipController].proxyFor(this) : t;
    }
  };
  (src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.new = function(tooltipController, changeDetector) {
    this[_tooltipSource] = null;
    this[positions] = laminate__enums__alignment.RelativePosition.AdjacentBottomEdge;
    this[_controllerProxy] = null;
    this[_showPopup] = false;
    this[text] = null;
    this[_tooltipController] = tooltipController;
    this[_changeDetector] = changeDetector;
  }).prototype = src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.prototype;
  dart.addTypeTests(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent);
  const positions = Symbol("MaterialInkTooltipComponent.positions");
  const text = Symbol("MaterialInkTooltipComponent.text");
  src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent[dart.implements] = () => [src__material_tooltip__tooltip_controller.Tooltip];
  dart.setMethodSignature(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent, () => ({
    __proto__: dart.getMethods(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.__proto__),
    activate: dart.fnType(dart.void, []),
    deactivate: dart.fnType(dart.void, [], {immediate: core.bool})
  }));
  dart.setGetterSignature(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent, () => ({
    __proto__: dart.getGetters(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.__proto__),
    popupSource: dart.fnType(src__laminate__popup__popup_source.PopupSource, []),
    showPopup: dart.fnType(core.bool, []),
    tooltipHandle: dart.fnType(src__material_tooltip__tooltip_controller.Tooltip, [])
  }));
  dart.setSetterSignature(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent, () => ({
    __proto__: dart.getSetters(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.__proto__),
    tooltipRef: dart.fnType(dart.void, [src__material_tooltip__tooltip_target.TooltipTarget])
  }));
  dart.setFieldSignature(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent, () => ({
    __proto__: dart.getFields(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.__proto__),
    [_tooltipController]: dart.finalFieldType(src__material_tooltip__tooltip_controller.TooltipController),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_tooltipSource]: dart.fieldType(src__laminate__popup__popup_source.PopupSource),
    positions: dart.fieldType(ListOfRelativePosition()),
    [_controllerProxy]: dart.fieldType(src__material_tooltip__tooltip_controller.Tooltip),
    [_showPopup]: dart.fieldType(core.bool),
    text: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/src/material_tooltip/ink_tooltip.ddc", {
    "package:angular_components/src/material_tooltip/ink_tooltip.dart": src__material_tooltip__ink_tooltip
  }, '{"version":3,"sourceRoot":"","sources":["ink_tooltip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;YAsEiC,qBAAc;;IAItB;;;;;;;YAMD,iBAAU;;IAIzB;;;;;;;AAML,sBAAU,GAAG;AACb,2BAAe,aAAa;IAC9B;;UAGsB,2DAAW;AAC/B,sBAAU,GAAG;AACb,2BAAe,aAAa;IAC9B;mBAIe,MAAoB;AACjC,UAAI,MAAM,IAAI,MAAM;AACpB,0BAAc,GAAG,MAAM;AACvB,YAAM,WAAW,CAAC,kBAAa;IACjC;;cAGI,sBAAgB;kDAAK,wBAAkB,SAAS,CAAC;IAAK;;iFAvBzB,iBAAkB,EAAO,cAAe;IAjB7D,oBAAc;IAKH,eAAS,GAAG,2CAAgB,mBAAmB;IAG9D,sBAAgB;IAEnB,gBAAU,GAAG;IAKX,UAAI;IAEsB,wBAAkB,GAAlB,iBAAkB;IAAO,qBAAe,GAAf,cAAe;EAAC","file":"ink_tooltip.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__ink_tooltip: src__material_tooltip__ink_tooltip
  };
});

//# sourceMappingURL=ink_tooltip.ddc.js.map
