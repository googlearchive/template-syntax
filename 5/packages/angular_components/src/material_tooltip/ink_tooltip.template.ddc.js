define(['dart_sdk', 'packages/angular_components/src/material_tooltip/ink_tooltip.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/src/material_tooltip/ink_tooltip', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/popup_ref', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_tooltip/module.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular_components/src/material_tooltip/tooltip_target.template'], function(dart_sdk, ink_tooltip$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_if, ink_tooltip, material_popup, material_popup$, popup_hierarchy, ng_zone, overlay_service, zindexer, alignment, opaque_token, popup_size_provider, element_ref, deferred_content, deferred_content_aware, material_dropdown_base, popup_ref, module, tooltip_controller, disposer, reflector, angular, deferred_content$, alignment$, popup, module$, tooltip_controller$, tooltip_target) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tooltip__ink_tooltip$46scss$46css$46shim = ink_tooltip$46scss$46css.src__material_tooltip__ink_tooltip$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__material_tooltip__ink_tooltip = ink_tooltip.src__material_tooltip__ink_tooltip;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_service.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__laminate__popup__popup_size_provider = popup_size_provider.src__laminate__popup__popup_size_provider;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const content__deferred_content = deferred_content.content__deferred_content;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__laminate__popup__popup_ref = popup_ref.src__laminate__popup__popup_ref;
  const material_tooltip__module = module.material_tooltip__module;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_tooltip__module$46template = module$.material_tooltip__module$46template;
  const src__material_tooltip__tooltip_controller$46template = tooltip_controller$.src__material_tooltip__tooltip_controller$46template;
  const src__material_tooltip__tooltip_target$46template = tooltip_target.src__material_tooltip__tooltip_target$46template;
  const _root = Object.create(null);
  const src__material_tooltip__ink_tooltip$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialInkTooltipComponent = () => (AppViewOfMaterialInkTooltipComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent)))();
  let AppViewAndintToAppViewOfMaterialInkTooltipComponent = () => (AppViewAndintToAppViewOfMaterialInkTooltipComponent = dart.constFn(dart.fnType(AppViewOfMaterialInkTooltipComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ComponentRefOfMaterialInkTooltipComponent = () => (ComponentRefOfMaterialInkTooltipComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialInkTooltipComponent = () => (ComponentFactoryOfMaterialInkTooltipComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tooltip__ink_tooltip$46template, {
    /*src__material_tooltip__ink_tooltip$46template.styles$MaterialInkTooltipComponent*/get styles$MaterialInkTooltipComponent() {
      return dart.constList([src__material_tooltip__ink_tooltip$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  let const$;
  src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0 = class ViewMaterialInkTooltipComponent0 extends src__core__linker__app_view.AppView$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('        ');
      parentRenderNode[$append](_text_0);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent1);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.popupSource != null;
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-tooltip-text'));
    let t = src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0._renderType;
    t == null ? src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tooltip__ink_tooltip$46template.styles$MaterialInkTooltipComponent) : t;
    this.setupComponentType(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0._renderType);
  }).prototype = src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.prototype;
  dart.addTypeTests(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0);
  dart.setMethodSignature(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0, () => ({
    __proto__: dart.getMethods(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0, () => ({
    __proto__: dart.getFields(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0, {
    /*src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent0 = function(parentView, parentIndex) {
    return new src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent0, AppViewAndintToAppViewOfMaterialInkTooltipComponent());
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _appEl_0 = Symbol('_appEl_0');
  const _MaterialPopupComponent_0_8 = Symbol('_MaterialPopupComponent_0_8');
  const __PopupHierarchy_0_11 = Symbol('__PopupHierarchy_0_11');
  const __PopupRef_0_12 = Symbol('__PopupRef_0_12');
  const _appEl_2 = Symbol('_appEl_2');
  const _DeferredContentDirective_2_9 = Symbol('_DeferredContentDirective_2_9');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_6 = Symbol('_expr_6');
  const _PopupHierarchy_0_11 = Symbol('_PopupHierarchy_0_11');
  const _PopupRef_0_12 = Symbol('_PopupRef_0_12');
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1 = class _ViewMaterialInkTooltipComponent1 extends src__core__linker__app_view.AppView$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent) {
    get [_PopupHierarchy_0_11]() {
      if (this[__PopupHierarchy_0_11] == null) {
        this[__PopupHierarchy_0_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_11];
    }
    get [_PopupRef_0_12]() {
      if (this[__PopupRef_0_12] == null) {
        this[__PopupRef_0_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_12];
    }
    build() {
      this[_compView_0] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'aacmtit-ink-tooltip-shadow';
      this.createAttr(this[_el_0], 'enforceSpaceConstraints', '');
      this.createAttr(this[_el_0], 'ink', '');
      this.createAttr(this[_el_0], 'role', 'tooltip');
      this.createAttr(this[_el_0], 'trackLayoutChanges', '');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialPopupComponent_0_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), 'tooltip', src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions'))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0].ref, this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(this[_el_0]));
      let _text_1 = html.Text.new('\n          ');
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent2);
      this[_DeferredContentDirective_2_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_2], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8]);
      let _text_3 = html.Text.new('\n        ');
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], [const$2 || (const$2 = dart.constList([], dart.dynamic)), JSArrayOfObject().of([_text_1, this[_appEl_2], _text_3]), const$3 || (const$3 = dart.constList([], dart.dynamic))]);
      this.init0(this[_appEl_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialPopupComponent_0_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupHierarchy_0_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupRef_0_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].autoDismiss = false;
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        this[_MaterialPopupComponent_0_8].matchMinSourceWidth = false;
        this[_MaterialPopupComponent_0_8].trackLayoutChanges = true;
        this[_MaterialPopupComponent_0_8].inkBackground = true;
      }
      let currVal_3 = _ctx.positions;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.popupSource;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_MaterialPopupComponent_0_8].source = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_6 = _ctx.showPopup;
      if (!(this[_expr_6] == currVal_6)) {
        this[_MaterialPopupComponent_0_8].visible = currVal_6;
        this[_expr_6] = currVal_6;
      }
      if (firstCheck) {
        this[_DeferredContentDirective_2_9].preserveDimensions = true;
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0];
      t$0 == null ? null : t$0.destroy();
      this[_DeferredContentDirective_2_9].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupHierarchy_0_11] = null;
    this[__PopupRef_0_12] = null;
    this[_appEl_2] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_6] = null;
    src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0._renderType;
  }).prototype = src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.prototype;
  dart.addTypeTests(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1);
  dart.setMethodSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1, () => ({
    __proto__: dart.getMethods(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1, () => ({
    __proto__: dart.getGetters(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.__proto__),
    [_PopupHierarchy_0_11]: dart.fnType(dart.dynamic, []),
    [_PopupRef_0_12]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1, () => ({
    __proto__: dart.getFields(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_0_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_0_12]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_2_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool)
  }));
  src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent1 = function(parentView, parentIndex) {
    return new src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent1, AppViewAndintToAppViewOfMaterialInkTooltipComponent());
  const _text_2 = Symbol('_text_2');
  const _expr_0 = Symbol('_expr_0');
  src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2 = class _ViewMaterialInkTooltipComponent2 extends src__core__linker__app_view.AppView$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'ink-container';
      this.addShimC(this[_el_0]);
      let _text_1 = html.Text.new('\n            ');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      this.project(this[_el_0], 0);
      let _text_3 = html.Text.new('\n          ');
      this[_el_0][$append](_text_3);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.text;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_2][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0._renderType;
  }).prototype = src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2.prototype;
  dart.addTypeTests(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2);
  dart.setMethodSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2, () => ({
    __proto__: dart.getMethods(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2, () => ({
    __proto__: dart.getFields(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent2 = function(parentView, parentIndex) {
    return new src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent2, AppViewAndintToAppViewOfMaterialInkTooltipComponent());
  dart.defineLazy(src__material_tooltip__ink_tooltip$46template, {
    /*src__material_tooltip__ink_tooltip$46template.styles$MaterialInkTooltipComponentHost*/get styles$MaterialInkTooltipComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _TooltipController_0_5 = Symbol('_TooltipController_0_5');
  const _MaterialInkTooltipComponent_0_6 = Symbol('_MaterialInkTooltipComponent_0_6');
  src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0 = class _ViewMaterialInkTooltipComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TooltipController_0_5] = material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)));
      this[_MaterialInkTooltipComponent_0_6] = new src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent.new(src__material_tooltip__tooltip_controller.TooltipController._check(this[_TooltipController_0_5]), this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialInkTooltipComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialInkTooltipComponent()).new(0, this, this.rootEl, this[_MaterialInkTooltipComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 0 === nodeIndex) {
        return this[_TooltipController_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TooltipController_0_5] = null;
    this[_MaterialInkTooltipComponent_0_6] = null;
    src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.prototype;
  dart.addTypeTests(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0);
  dart.setMethodSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tooltip__ink_tooltip$46template.ViewMaterialInkTooltipComponent0),
    [_TooltipController_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialInkTooltipComponent_0_6]: dart.fieldType(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent)
  }));
  src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tooltip__ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__material_tooltip__ink_tooltip$46template, {
    /*src__material_tooltip__ink_tooltip$46template.MaterialInkTooltipComponentNgFactory*/get MaterialInkTooltipComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialInkTooltipComponent()).new('material-tooltip-text', src__material_tooltip__ink_tooltip$46template.viewFactory_MaterialInkTooltipComponentHost0, src__material_tooltip__ink_tooltip$46template._MaterialInkTooltipComponentMetadata));
    },
    /*src__material_tooltip__ink_tooltip$46template._MaterialInkTooltipComponentMetadata*/get _MaterialInkTooltipComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tooltip__ink_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tooltip__ink_tooltip$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__ink_tooltip$46template._visited)) {
      return;
    }
    src__material_tooltip__ink_tooltip$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent), src__material_tooltip__ink_tooltip$46template.MaterialInkTooltipComponentNgFactory);
    angular$46template.initReflector();
    content__deferred_content$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_tooltip__module$46template.initReflector();
    src__material_tooltip__tooltip_controller$46template.initReflector();
    src__material_tooltip__tooltip_target$46template.initReflector();
  };
  dart.fn(src__material_tooltip__ink_tooltip$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tooltip/ink_tooltip.template.ddc", {
    "package:angular_components/src/material_tooltip/ink_tooltip.template.dart": src__material_tooltip__ink_tooltip$46template
  }, '{"version":3,"sourceRoot":"","sources":["ink_tooltip.template.dart"],"names":[],"mappings":"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","file":"ink_tooltip.template.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__ink_tooltip$46template: src__material_tooltip__ink_tooltip$46template
  };
});

//# sourceMappingURL=ink_tooltip.template.ddc.js.map
