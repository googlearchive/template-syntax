define(['dart_sdk', 'packages/angular_components/model/action/delayed_action', 'packages/intl/intl', 'packages/angular_components/src/laminate/popup/popup_source_directive', 'packages/angular_components/model/ui/toggle', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, delayed_action, intl, popup_source_directive, toggle, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__action__delayed_action = delayed_action.model__action__delayed_action;
  const intl$ = intl.intl;
  const src__laminate__popup__popup_source_directive = popup_source_directive.src__laminate__popup__popup_source_directive;
  const model__ui__toggle = toggle.model__ui__toggle;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const src__material_tooltip__tooltip_source = Object.create(_root);
  dart.defineLazy(src__material_tooltip__tooltip_source, {
    /*src__material_tooltip__tooltip_source.tooltipShowDelay*/get tooltipShowDelay() {
      return dart.const(new core.Duration.new({milliseconds: 600}));
    }
  });
  const _show = Symbol('_show');
  const _isMouseInside = Symbol('_isMouseInside');
  const _focusLatch = Symbol('_focusLatch');
  const _popupRef = Symbol('_popupRef');
  src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective = class MaterialTooltipSourceDirective extends src__laminate__popup__popup_source_directive.PopupSourceDirective {
    get tooltipLabel() {
      return this[tooltipLabel];
    }
    set tooltipLabel(value) {
      super.tooltipLabel = value;
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    activate() {
      this[_popupRef].isOn = true;
    }
    deactivate() {
      this[_show].cancel();
      if (dart.test(this[_popupRef].isOn)) this[_popupRef].isOn = false;
    }
    onFocus() {
      this[_focusLatch] = true;
    }
    onBlur() {
      this[_focusLatch] = false;
      this.deactivate();
    }
    onKeyUp() {
      if (dart.test(this[_focusLatch])) {
        this.activate();
        this[_focusLatch] = false;
      }
    }
    onMouseOver() {
      if (dart.test(this[_isMouseInside])) return;
      this[_isMouseInside] = true;
      this[_show].start();
    }
    onMouseLeave() {
      this[_isMouseInside] = false;
      this.deactivate();
    }
    set toggleable(popupRef) {
      this[_popupRef] = popupRef;
    }
    static get _tooltipLabel() {
      return intl$.Intl.message('Mouseover or press enter on this icon for more information.', {name: 'MaterialTooltipSourceDirective__tooltipLabel', desc: 'Label for help icon which opens a help center tooltip.'});
    }
  };
  (src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.new = function(domPopupSourceFactory, element) {
    this[tooltipLabel] = src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective._tooltipLabel;
    this[_show] = null;
    this[_isMouseInside] = false;
    this[_focusLatch] = false;
    this[_popupRef] = null;
    this[element$] = element;
    src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.__proto__.new.call(this, domPopupSourceFactory, element, null);
    this[_show] = new model__action__delayed_action.DelayedAction.new(src__material_tooltip__tooltip_source.tooltipShowDelay, dart.bind(this, 'activate'));
  }).prototype = src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective);
  const tooltipLabel = Symbol("MaterialTooltipSourceDirective.tooltipLabel");
  const element$ = Symbol("MaterialTooltipSourceDirective.element");
  src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective[dart.implements] = () => [model__ui__toggle.Toggler, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.__proto__),
    activate: dart.fnType(dart.void, []),
    deactivate: dart.fnType(dart.void, []),
    onFocus: dart.fnType(dart.void, []),
    onBlur: dart.fnType(dart.void, []),
    onKeyUp: dart.fnType(dart.void, []),
    onMouseOver: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective, () => ({
    __proto__: dart.getSetters(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.__proto__),
    toggleable: dart.fnType(dart.void, [model__ui__toggle.Toggleable])
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective.__proto__),
    tooltipLabel: dart.finalFieldType(core.String),
    element: dart.finalFieldType(html.HtmlElement),
    [_show]: dart.fieldType(model__action__delayed_action.DelayedAction),
    [_isMouseInside]: dart.fieldType(core.bool),
    [_focusLatch]: dart.fieldType(core.bool),
    [_popupRef]: dart.fieldType(model__ui__toggle.Toggleable)
  }));
  dart.trackLibraries("packages/angular_components/src/material_tooltip/tooltip_source.ddc", {
    "package:angular_components/src/material_tooltip/tooltip_source.dart": src__material_tooltip__tooltip_source
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_source.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAaM,sDAAgB;YAAG,gBAAM,iBAAQ,gBAAe;;;;;;;;IA+B9C;;;;;;IACY;;;;;;;AAehB,qBAAS,KAAK,GAAG;IACnB;;AAIE,iBAAK,OAAO;AACZ,oBAAI,eAAS,KAAK,GAAE,eAAS,KAAK,GAAG;IACvC;;AAIE,uBAAW,GAAG;IAChB;;AAGE,uBAAW,GAAG;AACd,qBAAU;IACZ;;AAGE,oBAAI,iBAAW,GAAE;AACf,qBAAQ;AACR,yBAAW,GAAG;;IAElB;;AAGE,oBAAI,oBAAc,GAAE;AACpB,0BAAc,GAAG;AACjB,iBAAK,MAAM;IACb;;AAGE,0BAAc,GAAG;AACjB,qBAAU;IACZ;mBAGe,QAAmB;AAKhC,qBAAS,GAAG,QAAQ;IACtB;;YAImC,WAAI,QAAQ,CAC3C,sEACM,sDACA;IAAyD;;uFA3D/D,qBAA2C,EAAE,OAAmB;IAR9D,kBAAY,GAAG,kFAAa;IAEpB,WAAK;IAGd,oBAAc,GAAG;IAoBjB,iBAAW,GAAG;IAqCR,eAAS;IArDT,cAAO,GAAG,OAAO;AACtB,kGAAM,qBAAqB,EAAE,OAAO,EAAE;AAC1C,eAAK,GAAG,IAAI,+CAAa,CAAC,sDAAgB,EAAE,2BAAQ;EACtD","file":"tooltip_source.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip_source: src__material_tooltip__tooltip_source
  };
});

//# sourceMappingURL=tooltip_source.ddc.js.map
