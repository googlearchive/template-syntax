define(['dart_sdk', 'packages/angular_components/utils/angular/css/css', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/src/laminate/popup/popup_source', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/src/material_tooltip/tooltip_target', 'packages/angular_components/laminate/enums/alignment', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, css, deferred_content_aware, tooltip_controller, popup_source, material_popup, tooltip_target, alignment, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__angular__css__css = css.utils__angular__css__css;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const src__laminate__popup__popup_source = popup_source.src__laminate__popup__popup_source;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const src__material_tooltip__tooltip_target = tooltip_target.src__material_tooltip__tooltip_target;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const src__material_tooltip__paper_tooltip = Object.create(_root);
  const $classes = dartx.classes;
  let MaterialPaperTooltipComponentTodynamic = () => (MaterialPaperTooltipComponentTodynamic = dart.constFn(dart.fnType(dart.dynamic, [src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent])))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  src__material_tooltip__paper_tooltip.getTooltipHandle = function(tooltip) {
    return tooltip.tooltipHandle;
  };
  dart.lazyFn(src__material_tooltip__paper_tooltip.getTooltipHandle, () => MaterialPaperTooltipComponentTodynamic());
  const _tooltipController = Symbol('_tooltipController');
  const _changeDetector = Symbol('_changeDetector');
  const _tooltipSource = Symbol('_tooltipSource');
  const _visibleCtrl = Symbol('_visibleCtrl');
  const _showPopup = Symbol('_showPopup');
  const _controllerProxy = Symbol('_controllerProxy');
  src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent = class MaterialPaperTooltipComponent extends core.Object {
    get popupClassName() {
      return this[popupClassName];
    }
    set popupClassName(value) {
      super.popupClassName = value;
    }
    get popupSource() {
      return this[_tooltipSource];
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
    get offsetX() {
      return this[offsetX];
    }
    set offsetX(value) {
      this[offsetX] = value;
    }
    get offsetY() {
      return this[offsetY];
    }
    set offsetY(value) {
      this[offsetY] = value;
    }
    get showPopup() {
      return this[_showPopup];
    }
    get contentVisible() {
      return this[_visibleCtrl].stream;
    }
    set popupChild(popup) {
      if (popup == null) return;
      this[_visibleCtrl].addStream(popup.contentVisible);
    }
    deactivate(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      this[_showPopup] = false;
      this[_changeDetector].markForCheck();
    }
    activate() {
      this[_showPopup] = true;
      this[_changeDetector].markForCheck();
    }
    onMouseOver() {
      this[_tooltipController].keepOpen(this);
    }
    onMouseLeave() {
      this[_tooltipController].deactivate(this);
    }
    get tooltipHandle() {
      let t = this[_controllerProxy];
      return t == null ? this[_controllerProxy] = this[_tooltipController].proxyFor(this) : t;
    }
    set tooltipRef(target) {
      if (target == null) return;
      this[_tooltipSource] = target;
      target.setTooltip(this.tooltipHandle);
    }
  };
  (src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.new = function(tooltipController, changeDetector, hostElement, tooltipClass) {
    this[_tooltipSource] = null;
    this[preferredPositions] = src__material_tooltip__paper_tooltip._defaultPositions;
    this[offsetX] = 0;
    this[offsetY] = 0;
    this[_visibleCtrl] = StreamControllerOfbool().broadcast();
    this[_showPopup] = false;
    this[_controllerProxy] = null;
    this[_tooltipController] = tooltipController;
    this[_changeDetector] = changeDetector;
    this[popupClassName] = utils__angular__css__css.constructEncapsulatedCss(tooltipClass, hostElement[$classes]);
  }).prototype = src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.prototype;
  dart.addTypeTests(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent);
  const popupClassName = Symbol("MaterialPaperTooltipComponent.popupClassName");
  const preferredPositions = Symbol("MaterialPaperTooltipComponent.preferredPositions");
  const offsetX = Symbol("MaterialPaperTooltipComponent.offsetX");
  const offsetY = Symbol("MaterialPaperTooltipComponent.offsetY");
  src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent[dart.implements] = () => [content__deferred_content_aware.DeferredContentAware, src__material_tooltip__tooltip_controller.Tooltip];
  dart.setMethodSignature(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent, () => ({
    __proto__: dart.getMethods(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.__proto__),
    deactivate: dart.fnType(dart.void, [], {immediate: core.bool}),
    activate: dart.fnType(dart.void, []),
    onMouseOver: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent, () => ({
    __proto__: dart.getGetters(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.__proto__),
    popupSource: dart.fnType(src__laminate__popup__popup_source.PopupSource, []),
    showPopup: dart.fnType(core.bool, []),
    contentVisible: dart.fnType(async.Stream$(core.bool), []),
    tooltipHandle: dart.fnType(src__material_tooltip__tooltip_controller.Tooltip, [])
  }));
  dart.setSetterSignature(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent, () => ({
    __proto__: dart.getSetters(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.__proto__),
    popupChild: dart.fnType(dart.void, [material_popup__material_popup.MaterialPopupComponent]),
    tooltipRef: dart.fnType(dart.void, [src__material_tooltip__tooltip_target.TooltipTarget])
  }));
  dart.setFieldSignature(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent, () => ({
    __proto__: dart.getFields(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.__proto__),
    popupClassName: dart.finalFieldType(core.String),
    [_tooltipSource]: dart.fieldType(src__laminate__popup__popup_source.PopupSource),
    preferredPositions: dart.fieldType(ListOfRelativePosition()),
    offsetX: dart.fieldType(core.int),
    offsetY: dart.fieldType(core.int),
    [_visibleCtrl]: dart.finalFieldType(StreamControllerOfbool()),
    [_showPopup]: dart.fieldType(core.bool),
    [_tooltipController]: dart.finalFieldType(src__material_tooltip__tooltip_controller.TooltipController),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_controllerProxy]: dart.fieldType(src__material_tooltip__tooltip_controller.Tooltip)
  }));
  dart.defineLazy(src__material_tooltip__paper_tooltip, {
    /*src__material_tooltip__paper_tooltip._defaultPositions*/get _defaultPositions() {
      return dart.constList([laminate__enums__alignment.RelativePosition.OffsetBottomRight, laminate__enums__alignment.RelativePosition.OffsetTopLeft, laminate__enums__alignment.RelativePosition.OffsetBottomLeft, laminate__enums__alignment.RelativePosition.OffsetTopRight], laminate__enums__alignment.RelativePosition);
    }
  });
  dart.trackLibraries("packages/angular_components/src/material_tooltip/paper_tooltip.ddc", {
    "package:angular_components/src/material_tooltip/paper_tooltip.dart": src__material_tooltip__paper_tooltip
  }, '{"version":3,"sourceRoot":"","sources":["paper_tooltip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;mEAoBiB,OAAqC;UAClD,QAAO,cAAc;;;;;;;;;;IAiEV;;;;;;;YAGkB,qBAAc;;IAItB;;;;;;IAInB;;;;;;IAIA;;;;;;;YAEkB,iBAAU;;;YAKG,mBAAY,OAAO;;mBAavC,KAA4B;AACzC,UAAI,KAAK,IAAI,MAAM;AACnB,wBAAY,UAAU,CAAC,KAAK,eAAe;IAC7C;;UAGsB,2DAAW;AAC/B,sBAAU,GAAG;AACb,2BAAe,aAAa;IAC9B;;AAIE,sBAAU,GAAG;AACb,2BAAe,aAAa;IAC9B;;AAGE,8BAAkB,SAAS,CAAC;IAC9B;;AAGE,8BAAkB,WAAW,CAAC;IAChC;;cAKI,sBAAgB;kDAAK,wBAAkB,SAAS,CAAC;IAAK;mBAI3C,MAAoB;AACjC,UAAI,MAAM,IAAI,MAAM;AACpB,0BAAc,GAAG,MAAM;AACvB,YAAM,WAAW,CAAC,kBAAa;IACjC;;qFA1CmC,iBAAkB,EAAO,cAAe,EACvE,WAAuB,EAAE,YAA8C;IA5B/D,oBAAc;IAKH,wBAAkB,GAAG,sDAAiB;IAIzD,aAAO,GAAG;IAIV,aAAO,GAAG;IAIe,kBAAY,GACrC,AAAI,kCAAgC;IAInC,gBAAU,GAAG;IAqCV,sBAAgB;IAhCW,wBAAkB,GAAlB,iBAAkB;IAAO,qBAAe,GAAf,cAAe;IAErE,oBAAc,GACV,iDAAwB,CAAC,YAAY,EAAE,WAAW,UAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA2CjE,sDAAiB;YAAG,iBACxB,2CAAgB,kBAAkB,EAClC,2CAAgB,cAAc,EAC9B,2CAAgB,iBAAiB,EACjC,2CAAgB,eAAe","file":"paper_tooltip.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__paper_tooltip: src__material_tooltip__paper_tooltip
  };
});

//# sourceMappingURL=paper_tooltip.ddc.js.map
