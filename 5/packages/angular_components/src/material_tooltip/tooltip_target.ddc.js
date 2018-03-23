define(['dart_sdk', 'packages/angular_components/src/material_tooltip/tooltip_source', 'packages/angular_components/model/action/delayed_action', 'packages/angular_components/src/laminate/popup/popup_source_directive', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/change_detection/change_detector_ref', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/utils/browser/events/events'], function(dart_sdk, tooltip_source, delayed_action, popup_source_directive, tooltip_controller, app_view, change_detector_ref, lifecycle_hooks, events) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tooltip__tooltip_source = tooltip_source.src__material_tooltip__tooltip_source;
  const model__action__delayed_action = delayed_action.model__action__delayed_action;
  const src__laminate__popup__popup_source_directive = popup_source_directive.src__laminate__popup__popup_source_directive;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const src__core__linker__view_container_ref = app_view.src__core__linker__view_container_ref;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const utils__browser__events__events = events.utils__browser__events__events;
  const _root = Object.create(null);
  const src__material_tooltip__tooltip_target = Object.create(_root);
  const $relatedTarget = dartx.relatedTarget;
  const $parent = dartx.parent;
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  const _changeDetector = Symbol('_changeDetector');
  const _tooltipActivate = Symbol('_tooltipActivate');
  const _show = Symbol('_show');
  const _isMouseInside = Symbol('_isMouseInside');
  const _tooltip = Symbol('_tooltip');
  const _element = Symbol('_element');
  src__material_tooltip__tooltip_target.TooltipTarget = class TooltipTarget extends src__laminate__popup__popup_source_directive.PopupSourceDirective {
    get viewContainerRef() {
      return this[viewContainerRef$];
    }
    set viewContainerRef(value) {
      super.viewContainerRef = value;
    }
    setTooltip(component) {
      this[_tooltip] = component;
    }
    set popupId(id) {
      super.popupId = id;
      if (id == null) return;
      this[_element].setAttribute('aria-describedby', id);
    }
  };
  (src__material_tooltip__tooltip_target.TooltipTarget.new = function(domPopupSourceFactory, viewContainerRef, element) {
    this[_tooltip] = null;
    this[viewContainerRef$] = viewContainerRef;
    this[_element] = element;
    src__material_tooltip__tooltip_target.TooltipTarget.__proto__.new.call(this, domPopupSourceFactory, element, null);
  }).prototype = src__material_tooltip__tooltip_target.TooltipTarget.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_target.TooltipTarget);
  const viewContainerRef$ = Symbol("TooltipTarget.viewContainerRef");
  dart.setMethodSignature(src__material_tooltip__tooltip_target.TooltipTarget, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_target.TooltipTarget.__proto__),
    setTooltip: dart.fnType(dart.void, [src__material_tooltip__tooltip_controller.Tooltip])
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip_target.TooltipTarget, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_target.TooltipTarget.__proto__),
    [_tooltip]: dart.fieldType(src__material_tooltip__tooltip_controller.Tooltip),
    viewContainerRef: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_element]: dart.finalFieldType(html.HtmlElement)
  }));
  src__material_tooltip__tooltip_target.TooltipBehavior = class TooltipBehavior extends src__material_tooltip__tooltip_target.TooltipTarget {
    get tooltipActivate() {
      return this[_tooltipActivate].stream.distinct();
    }
    showTooltipWithDelay() {
      this[_show].start();
    }
    showTooltip() {
      this[_show].cancel();
      this[_changeDetector].markForCheck();
      this[_tooltipActivate].add(true);
      let t = this[_tooltip];
      t == null ? null : t.activate();
    }
    hideTooltip(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      this[_show].cancel();
      this[_tooltipActivate].add(false);
      let t = this[_tooltip];
      t == null ? null : t.deactivate({immediate: immediate});
    }
    onMouseOver() {
      if (dart.test(this[_isMouseInside])) return;
      this[_isMouseInside] = true;
      this.showTooltipWithDelay();
    }
    onMouseLeave() {
      this[_isMouseInside] = false;
      this.hideTooltip();
    }
  };
  (src__material_tooltip__tooltip_target.TooltipBehavior.new = function(domPopupSourceFactory, viewContainerRef, element, changeDetector) {
    this[_tooltipActivate] = StreamControllerOfbool().broadcast({sync: true});
    this[_show] = null;
    this[_isMouseInside] = false;
    this[_changeDetector] = changeDetector;
    src__material_tooltip__tooltip_target.TooltipBehavior.__proto__.new.call(this, domPopupSourceFactory, viewContainerRef, element);
    this[_show] = new model__action__delayed_action.DelayedAction.new(src__material_tooltip__tooltip_source.tooltipShowDelay, dart.bind(this, 'showTooltip'));
  }).prototype = src__material_tooltip__tooltip_target.TooltipBehavior.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_target.TooltipBehavior);
  dart.setMethodSignature(src__material_tooltip__tooltip_target.TooltipBehavior, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_target.TooltipBehavior.__proto__),
    showTooltipWithDelay: dart.fnType(dart.void, []),
    showTooltip: dart.fnType(dart.void, []),
    hideTooltip: dart.fnType(dart.void, [], {immediate: core.bool}),
    onMouseOver: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tooltip__tooltip_target.TooltipBehavior, () => ({
    __proto__: dart.getGetters(src__material_tooltip__tooltip_target.TooltipBehavior.__proto__),
    tooltipActivate: dart.fnType(async.Stream$(core.bool), [])
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip_target.TooltipBehavior, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_target.TooltipBehavior.__proto__),
    [_tooltipActivate]: dart.finalFieldType(StreamControllerOfbool()),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_show]: dart.fieldType(model__action__delayed_action.DelayedAction),
    [_isMouseInside]: dart.fieldType(core.bool)
  }));
  src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective = class MaterialTooltipTargetDirective extends src__material_tooltip__tooltip_target.TooltipBehavior {
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
    }
    ngOnDestroy() {
      this.element = null;
    }
  };
  (src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective.new = function(domPopupSourceFactory, viewContainerRef, element, changeDetector) {
    this[element$] = null;
    src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective.__proto__.new.call(this, domPopupSourceFactory, viewContainerRef, element, changeDetector);
    this.element = element;
  }).prototype = src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective);
  const element$ = Symbol("MaterialTooltipTargetDirective.element");
  src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_target.MaterialTooltipTargetDirective.__proto__),
    element: dart.fieldType(html.HtmlElement)
  }));
  const _tooltipSubscription = Symbol('_tooltipSubscription');
  const _tooltipVisible = Symbol('_tooltipVisible');
  const _toggleVisibility = Symbol('_toggleVisibility');
  src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective = class ClickableTooltipTargetDirective extends src__material_tooltip__tooltip_target.TooltipBehavior {
    get element() {
      return this[element$0];
    }
    set element(value) {
      this[element$0] = value;
    }
    onBlur(event) {
      if (event[$relatedTarget] == null) return;
      let el = null;
      for (el = html.HtmlElement._check(event[$relatedTarget]); el[$parent] != null; el = html.HtmlElement._check(el[$parent])) {
        if (el.className === "acx-overlay-container") return;
      }
      this.hideTooltip({immediate: true});
    }
    onClick() {
      this[_toggleVisibility]();
    }
    [_toggleVisibility]() {
      if (dart.test(this[_tooltipVisible])) {
        this.hideTooltip({immediate: true});
      } else {
        this.showTooltip();
      }
    }
    kbTrigger(event) {
      if (event.keyCode === html.KeyCode.ENTER || dart.test(utils__browser__events__events.isSpaceKey(event))) {
        this[_toggleVisibility]();
        event.preventDefault();
      }
    }
    ngOnDestroy() {
      this.element = null;
      this[_tooltipSubscription].cancel();
    }
  };
  (src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.new = function(domPopupSourceFactory, viewContainerRef, element, changeDetector) {
    this[_tooltipSubscription] = null;
    this[element$0] = null;
    this[_tooltipVisible] = false;
    src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.__proto__.new.call(this, domPopupSourceFactory, viewContainerRef, element, changeDetector);
    this.element = element;
    this[_tooltipSubscription] = this.tooltipActivate.listen(dart.fn(visible => {
      this[_tooltipVisible] = visible;
    }, boolToNull()));
  }).prototype = src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective);
  const element$0 = Symbol("ClickableTooltipTargetDirective.element");
  src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.__proto__),
    onBlur: dart.fnType(dart.void, [html.FocusEvent]),
    onClick: dart.fnType(dart.void, []),
    [_toggleVisibility]: dart.fnType(dart.void, []),
    kbTrigger: dart.fnType(dart.void, [html.KeyboardEvent]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.__proto__),
    [_tooltipSubscription]: dart.fieldType(async.StreamSubscription),
    element: dart.fieldType(html.HtmlElement),
    [_tooltipVisible]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/src/material_tooltip/tooltip_target.ddc", {
    "package:angular_components/src/material_tooltip/tooltip_target.dart": src__material_tooltip__tooltip_target
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_target.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsNyB;;;;;;eAQP,SAAiB;AAC/B,oBAAQ,GAAG,SAAS;IACtB;gBAGY,EAAS;AACnB,mBAAa,GAAG,EAAE;AAClB,UAAI,EAAE,IAAI,MAAM;AAChB,oBAAQ,aAAa,CAAC,oBAAoB,EAAE;IAC9C;;sEAdc,qBAA2C,EACrD,gBAAqB,EACU,OAAQ;IANnC,cAAQ;IAKP,uBAAgB,GAAhB,gBAAgB;IAAO,cAAQ,GACL,OAAQ;AAArC,iFAAM,qBAAqB,EAAE,OAAQ,EAA2B;EAAK;;;;;;;;;;;;;;;YA/IvC,uBAAgB,OAAO,SAAS;IAAE;;AAYpE,iBAAK,MAAM;IACb;;AAGE,iBAAK,OAAO;AACZ,2BAAe,aAAa;AAC5B,4BAAgB,IAAI,CAAC;AACrB,4BAAQ;;IACV;;UAEuB,2DAAW;AAChC,iBAAK,OAAO;AACZ,4BAAgB,IAAI,CAAC;AACrB,4BAAQ;kDAAwB,SAAS;IAC3C;;AAGE,oBAAI,oBAAc,GAAE;AACpB,0BAAc,GAAG;AACjB,+BAAoB;IACtB;;AAGE,0BAAc,GAAG;AACjB,sBAAW;IACb;;wEAlCI,qBAA2C,EAC3C,gBAAiC,EACjC,OAAmB,EACd,cAAe;IAdlB,sBAAgB,GAAG,AAAI,kCAAgC,QAAO;IAEtD,WAAK;IAGd,oBAAc,GAAG;IASb,qBAAe,GAAf,cAAe;AAClB,mFAAM,qBAAqB,EAAE,gBAAgB,EAAE,OAAO;AAC1D,eAAK,GAAG,IAAI,+CAAa,CAAC,sDAAgB,EAAE,8BAAW;EACzD;;;;;;;;;;;;;;;;;;;;;;IAtCY;;;;;;;AAcV,kBAAO,GAAG;IACZ;;uFAZI,qBAA2C,EAC3C,gBAAiC,EACjC,OAAmB,EACnB,cAAgC;IANxB,cAAO;AAOb,kGACI,qBAAqB,EAAE,gBAAgB,EAAE,OAAO,EAAE,cAAc;AACxE,gBAAY,GAAG,OAAO;EACxB;;;;;;;;;;;;;;;;IA+FY;;;;;;WAgBA,KAAgB;AAE1B,UAAI,KAAK,gBAAc,IAAI,MAAM;AAGjC,UAAY;AACZ,WAAK,EAAE,2BAAG,KAAK,gBAAc,GAAE,EAAE,SAAO,IAAI,MAAM,EAAE,2BAAG,EAAE,SAAO,GAAE;AAChE,YAAI,EAAE,UAAU,KAAI,yBAAyB;;AAG/C,sBAAW,aAAY;IACzB;;AAGE,6BAAiB;IACnB;;AAGE,oBAAI,qBAAe,GAAE;AACnB,wBAAW,aAAY;aAClB;AACL,wBAAW;;IAEf;cAEe,KAAmB;AAChC,UAAI,KAAK,QAAQ,KAAI,YAAO,MAAM,cAAI,yCAAU,CAAC,KAAK,IAAG;AACvD,+BAAiB;AAEjB,aAAK,eAAe;;IAExB;;AAIE,kBAAO,GAAG;AACV,gCAAoB,OAAO;IAC7B;;wFAjDI,qBAA2C,EAC3C,gBAAiC,EACjC,OAAmB,EACnB,cAAgC;IARjB,0BAAoB;IAC3B,eAAO;IACd,qBAAe,GAAG;AAOjB,mGACI,qBAAqB,EAAE,gBAAgB,EAAE,OAAO,EAAE,cAAc;AACxE,gBAAY,GAAG,OAAO;AACtB,8BAAoB,GAAG,oBAAe,OAAO,CAAC,QAAC,OAAO;AACpD,2BAAe,GAAG,OAAO;;EAE7B","file":"tooltip_target.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip_target: src__material_tooltip__tooltip_target
  };
});

//# sourceMappingURL=tooltip_target.ddc.js.map
