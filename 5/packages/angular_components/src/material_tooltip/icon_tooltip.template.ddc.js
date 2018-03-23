define(['dart_sdk', 'packages/angular_components/src/material_tooltip/icon_tooltip.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/src/material_tooltip/paper_tooltip', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/material_tooltip/tooltip_target', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/src/material_tooltip/paper_tooltip.template', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/theme/dark_theme', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/theme/dark_theme.template', 'packages/angular_components/src/material_tooltip/tooltip_target.template'], function(dart_sdk, icon_tooltip$46scss$46css, view_type, constants, view, app_view_utils, paper_tooltip, material_icon, app_view, dom_popup_source, tooltip_target, material_icon$, dom_service, keyboard_only_focus_indicator, paper_tooltip$, module, tooltip_controller, disposer, deferred_content_aware, icon_tooltip, opaque_token, dark_theme, reflector, angular, deferred_content_aware$, keyboard_only_focus_indicator$, dark_theme$, tooltip_target$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tooltip__icon_tooltip$46scss$46css$46shim = icon_tooltip$46scss$46css.src__material_tooltip__icon_tooltip$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__material_tooltip__paper_tooltip = paper_tooltip.src__material_tooltip__paper_tooltip;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const src__material_tooltip__tooltip_target = tooltip_target.src__material_tooltip__tooltip_target;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const src__material_tooltip__paper_tooltip$46template = paper_tooltip$.src__material_tooltip__paper_tooltip$46template;
  const material_tooltip__module = module.material_tooltip__module;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__material_tooltip__icon_tooltip = icon_tooltip.src__material_tooltip__icon_tooltip;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const theme__dark_theme$46template = dark_theme$.theme__dark_theme$46template;
  const src__material_tooltip__tooltip_target$46template = tooltip_target$.src__material_tooltip__tooltip_target$46template;
  const _root = Object.create(null);
  const src__material_tooltip__icon_tooltip$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialIconTooltipComponent = () => (AppViewOfMaterialIconTooltipComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent)))();
  let AppViewAndintToAppViewOfMaterialIconTooltipComponent = () => (AppViewAndintToAppViewOfMaterialIconTooltipComponent = dart.constFn(dart.fnType(AppViewOfMaterialIconTooltipComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialIconTooltipComponent = () => (ComponentRefOfMaterialIconTooltipComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialIconTooltipComponent = () => (ComponentFactoryOfMaterialIconTooltipComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tooltip__icon_tooltip$46template, {
    /*src__material_tooltip__icon_tooltip$46template.styles$MaterialIconTooltipComponent*/get styles$MaterialIconTooltipComponent() {
      return dart.constList([src__material_tooltip__icon_tooltip$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_tooltipRef_1_0_isDirty = Symbol('_query_tooltipRef_1_0_isDirty');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _appEl_1 = Symbol('_appEl_1');
  const _ClickableTooltipTargetDirective_1_8 = Symbol('_ClickableTooltipTargetDirective_1_8');
  const _MaterialIconComponent_1_9 = Symbol('_MaterialIconComponent_1_9');
  const _KeyboardOnlyFocusIndicatorDirective_1_10 = Symbol('_KeyboardOnlyFocusIndicatorDirective_1_10');
  const _el_4 = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _TooltipController_4_5 = Symbol('_TooltipController_4_5');
  const _MaterialPaperTooltipComponent_4_6 = Symbol('_MaterialPaperTooltipComponent_4_6');
  const __Tooltip_4_7 = Symbol('__Tooltip_4_7');
  const _expr_1 = Symbol('_expr_1');
  const _expr_3 = Symbol('_expr_3');
  const _Tooltip_4_7 = Symbol('_Tooltip_4_7');
  let const$;
  let const$0;
  const _handle_click_1_2 = Symbol('_handle_click_1_2');
  const _handle_blur_1_4 = Symbol('_handle_blur_1_4');
  let const$1;
  src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0 = class ViewMaterialIconTooltipComponent0 extends src__core__linker__app_view.AppView$(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent) {
    get [_Tooltip_4_7]() {
      if (this[__Tooltip_4_7] == null) {
        this[__Tooltip_4_7] = src__material_tooltip__paper_tooltip.getTooltipHandle(this[_MaterialPaperTooltipComponent_4_6]);
      }
      return this[__Tooltip_4_7];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('    ');
      parentRenderNode[$append](_text_0);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this.createAttr(this[_el_1], 'clickableTooltipTarget', '');
      this.createAttr(this[_el_1], 'keyboardOnlyFocusIndicator', '');
      this[_el_1].tabIndex = 0;
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_ClickableTooltipTargetDirective_1_8] = new src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_appEl_1], html.HtmlElement._check(this[_el_1]), this[_compView_1].ref);
      this[_MaterialIconComponent_1_9] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_KeyboardOnlyFocusIndicatorDirective_1_10] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_1]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      let _text_2 = html.Text.new('\n    ');
      this[_compView_1].create(this[_MaterialIconComponent_1_9], []);
      let _text_3 = html.Text.new('\n    ');
      parentRenderNode[$append](_text_3);
      this[_compView_4] = new src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      parentRenderNode[$append](this[_el_4]);
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_TooltipController_4_5] = material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)));
      this[_MaterialPaperTooltipComponent_4_6] = new src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.new(src__material_tooltip__tooltip_controller.TooltipController._check(this[_TooltipController_4_5]), this[_compView_4].ref, html.HtmlElement._check(this[_el_4]), null);
      let _text_5 = html.Text.new('\n      ');
      let _text_6 = html.Text.new('\n    ');
      this[_compView_4].create(this[_MaterialPaperTooltipComponent_4_6], [const$ || (const$ = dart.constList([], dart.dynamic)), (() => {
          let _ = [_text_5];
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](0)));
          _[$addAll]([_text_6]);
          return _;
        })(), const$0 || (const$0 = dart.constList([], dart.dynamic))]);
      this[_el_1][$addEventListener]('mouseover', this.eventHandler0(html.Event, dart.bind(this[_ClickableTooltipTargetDirective_1_8], 'onMouseOver')));
      this[_el_1][$addEventListener]('mouseleave', this.eventHandler0(html.Event, dart.bind(this[_ClickableTooltipTargetDirective_1_8], 'onMouseLeave')));
      this[_el_1][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_1_2)));
      this[_el_1][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ClickableTooltipTargetDirective_1_8], 'kbTrigger')));
      this[_el_1][$addEventListener]('blur', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_blur_1_4)));
      this[_el_1][$addEventListener]('keyup', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_10], 'resetOutline')));
      this[_el_1][$addEventListener]('mousedown', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_10], 'hideOutline')));
      this.ctx.tooltipBehavior = this[_ClickableTooltipTargetDirective_1_8];
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_ClickableTooltipTargetDirective_1_8];
      }
      if (token === dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_KeyboardOnlyFocusIndicatorDirective_1_10];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_TooltipController_4_5];
      }
      if ((token === dart.wrapType(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_MaterialPaperTooltipComponent_4_6];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.Tooltip) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_Tooltip_4_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_tooltipRef = this[_ClickableTooltipTargetDirective_1_8];
      changed = false;
      if (firstCheck) {
        if (!(_ctx.icon == null)) {
          this[_MaterialIconComponent_1_9].icon = _ctx.icon;
          changed = true;
        }
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      let currVal_3 = local_tooltipRef;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_MaterialPaperTooltipComponent_4_6].tooltipRef = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      this[_appEl_1].detectChangesInNestedViews();
      if (firstCheck) {
        if (!(_ctx.iconSize == null)) {
          this.setAttr(this[_el_1], 'size', _ctx.iconSize == null ? null : dart.toString(_ctx.iconSize));
        }
      }
      let currVal_1 = _ctx.helpTooltipLabel;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this[_el_1], 'aria-label', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_compView_1].detectChanges();
      this[_compView_4].detectChanges();
      if (firstCheck) {
        this[_ClickableTooltipTargetDirective_1_8].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_4];
      t$0 == null ? null : t$0.destroy();
      this[_ClickableTooltipTargetDirective_1_8].ngOnDestroy();
    }
    [_handle_click_1_2]($event) {
      this[_ClickableTooltipTargetDirective_1_8].onClick();
      this[_KeyboardOnlyFocusIndicatorDirective_1_10].hideOutline();
    }
    [_handle_blur_1_4]($event) {
      this[_ClickableTooltipTargetDirective_1_8].onBlur(html.FocusEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_1_10].resetOutline();
    }
  };
  (src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.new = function(parentView, parentIndex) {
    this[_query_tooltipRef_1_0_isDirty] = true;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_appEl_1] = null;
    this[_ClickableTooltipTargetDirective_1_8] = null;
    this[_MaterialIconComponent_1_9] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_1_10] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_TooltipController_4_5] = null;
    this[_MaterialPaperTooltipComponent_4_6] = null;
    this[__Tooltip_4_7] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-icon-tooltip'));
    let t = src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0._renderType;
    t == null ? src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tooltip__icon_tooltip$46template.styles$MaterialIconTooltipComponent) : t;
    this.setupComponentType(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0._renderType);
  }).prototype = src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.prototype;
  dart.addTypeTests(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0);
  dart.setMethodSignature(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0, () => ({
    __proto__: dart.getMethods(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_1_2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_blur_1_4]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0, () => ({
    __proto__: dart.getGetters(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__),
    [_Tooltip_4_7]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0, () => ({
    __proto__: dart.getFields(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__),
    [_query_tooltipRef_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_ClickableTooltipTargetDirective_1_8]: dart.fieldType(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective),
    [_MaterialIconComponent_1_9]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_KeyboardOnlyFocusIndicatorDirective_1_10]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0),
    [_TooltipController_4_5]: dart.fieldType(dart.dynamic),
    [_MaterialPaperTooltipComponent_4_6]: dart.fieldType(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent),
    [__Tooltip_4_7]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0, {
    /*src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tooltip__icon_tooltip$46template.viewFactory_MaterialIconTooltipComponent0 = function(parentView, parentIndex) {
    return new src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tooltip__icon_tooltip$46template.viewFactory_MaterialIconTooltipComponent0, AppViewAndintToAppViewOfMaterialIconTooltipComponent());
  dart.defineLazy(src__material_tooltip__icon_tooltip$46template, {
    /*src__material_tooltip__icon_tooltip$46template.styles$MaterialIconTooltipComponentHost*/get styles$MaterialIconTooltipComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _MaterialIconTooltipComponent_0_6 = Symbol('_MaterialIconTooltipComponent_0_6');
  let const$2;
  src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0 = class _ViewMaterialIconTooltipComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AcxDarkTheme_0_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('acxDarkTheme'))), this.viewData.parentIndex, null)));
      this[_MaterialIconTooltipComponent_0_6] = new src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.new(this[_AcxDarkTheme_0_5], this.rootEl, null, null);
      this[_compView_0].create(this[_MaterialIconTooltipComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialIconTooltipComponent()).new(0, this, this.rootEl, this[_MaterialIconTooltipComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 === nodeIndex) {
        return this[_AcxDarkTheme_0_5];
      }
      if (token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) && 0 === nodeIndex) {
        return this[_MaterialIconTooltipComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialIconTooltipComponent_0_6] = null;
    src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.prototype;
  dart.addTypeTests(src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0);
  dart.setMethodSignature(src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialIconTooltipComponent_0_6]: dart.fieldType(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent)
  }));
  src__material_tooltip__icon_tooltip$46template.viewFactory_MaterialIconTooltipComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tooltip__icon_tooltip$46template.viewFactory_MaterialIconTooltipComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__material_tooltip__icon_tooltip$46template, {
    /*src__material_tooltip__icon_tooltip$46template.MaterialIconTooltipComponentNgFactory*/get MaterialIconTooltipComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialIconTooltipComponent()).new('material-icon-tooltip', src__material_tooltip__icon_tooltip$46template.viewFactory_MaterialIconTooltipComponentHost0, src__material_tooltip__icon_tooltip$46template._MaterialIconTooltipComponentMetadata));
    },
    /*src__material_tooltip__icon_tooltip$46template._MaterialIconTooltipComponentMetadata*/get _MaterialIconTooltipComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tooltip__icon_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tooltip__icon_tooltip$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__icon_tooltip$46template._visited)) {
      return;
    }
    src__material_tooltip__icon_tooltip$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent), src__material_tooltip__icon_tooltip$46template.MaterialIconTooltipComponentNgFactory);
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    theme__dark_theme$46template.initReflector();
    src__material_tooltip__paper_tooltip$46template.initReflector();
    src__material_tooltip__tooltip_target$46template.initReflector();
  };
  dart.fn(src__material_tooltip__icon_tooltip$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tooltip/icon_tooltip.template.ddc", {
    "package:angular_components/src/material_tooltip/icon_tooltip.template.dart": src__material_tooltip__icon_tooltip$46template
  }, '{"version":3,"sourceRoot":"","sources":["icon_tooltip.template.dart"],"names":[],"mappings":"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","file":"icon_tooltip.template.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__icon_tooltip$46template: src__material_tooltip__icon_tooltip$46template
  };
});

//# sourceMappingURL=icon_tooltip.template.ddc.js.map
