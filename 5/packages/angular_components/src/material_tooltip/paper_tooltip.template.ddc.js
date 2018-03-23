define(['dart_sdk', 'packages/angular_components/src/material_tooltip/paper_tooltip.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/src/material_tooltip/paper_tooltip', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/popup_ref', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_tooltip/module.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular_components/src/material_tooltip/tooltip_target.template'], function(dart_sdk, paper_tooltip$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_if, material_popup, paper_tooltip, material_popup$, popup_hierarchy, ng_zone, overlay_service, zindexer, alignment, opaque_token, popup_size_provider, element_ref, deferred_content_aware, material_dropdown_base, popup_ref, module, tooltip_controller, disposer, reflector, angular, deferred_content, deferred_content_aware$, alignment$, popup, module$, css, tooltip_controller$, tooltip_target) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tooltip__paper_tooltip$46scss$46css$46shim = paper_tooltip$46scss$46css.src__material_tooltip__paper_tooltip$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const src__material_tooltip__paper_tooltip = paper_tooltip.src__material_tooltip__paper_tooltip;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_service.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__laminate__popup__popup_size_provider = popup_size_provider.src__laminate__popup__popup_size_provider;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__laminate__popup__popup_ref = popup_ref.src__laminate__popup__popup_ref;
  const material_tooltip__module = module.material_tooltip__module;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const content__deferred_content$46template = deferred_content.content__deferred_content$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_tooltip__module$46template = module$.material_tooltip__module$46template;
  const utils__angular__css__css$46template = css.utils__angular__css__css$46template;
  const src__material_tooltip__tooltip_controller$46template = tooltip_controller$.src__material_tooltip__tooltip_controller$46template;
  const src__material_tooltip__tooltip_target$46template = tooltip_target.src__material_tooltip__tooltip_target$46template;
  const _root = Object.create(null);
  const src__material_tooltip__paper_tooltip$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfMaterialPopupComponent = () => (JSArrayOfMaterialPopupComponent = dart.constFn(_interceptors.JSArray$(material_popup__material_popup.MaterialPopupComponent)))();
  let ListOfMaterialPopupComponent = () => (ListOfMaterialPopupComponent = dart.constFn(core.List$(material_popup__material_popup.MaterialPopupComponent)))();
  let _ViewMaterialPaperTooltipComponent1ToListOfMaterialPopupComponent = () => (_ViewMaterialPaperTooltipComponent1ToListOfMaterialPopupComponent = dart.constFn(dart.fnType(ListOfMaterialPopupComponent(), [src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1])))();
  let AppViewOfMaterialPaperTooltipComponent = () => (AppViewOfMaterialPaperTooltipComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent)))();
  let AppViewAndintToAppViewOfMaterialPaperTooltipComponent = () => (AppViewAndintToAppViewOfMaterialPaperTooltipComponent = dart.constFn(dart.fnType(AppViewOfMaterialPaperTooltipComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let ComponentRefOfMaterialPaperTooltipComponent = () => (ComponentRefOfMaterialPaperTooltipComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialPaperTooltipComponent = () => (ComponentFactoryOfMaterialPaperTooltipComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent)))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tooltip__paper_tooltip$46template, {
    /*src__material_tooltip__paper_tooltip$46template.styles$MaterialPaperTooltipComponent*/get styles$MaterialPaperTooltipComponent() {
      return dart.constList([src__material_tooltip__paper_tooltip$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_MaterialPopupComponent_1_0_isDirty = Symbol('_query_MaterialPopupComponent_1_0_isDirty');
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  let const$;
  const _MaterialPopupComponent_0_8 = Symbol('_MaterialPopupComponent_0_8');
  src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0 = class ViewMaterialPaperTooltipComponent0 extends src__core__linker__app_view.AppView$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponent1);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.popupSource != null;
      this[_appEl_0].detectChangesInNestedViews();
      if (dart.test(this[_query_MaterialPopupComponent_1_0_isDirty])) {
        this.ctx.popupChild = dart.test(this[_appEl_0].mapNestedViews(material_popup__material_popup.MaterialPopupComponent, src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, dart.fn(nestedView => JSArrayOfMaterialPopupComponent().of([nestedView[_MaterialPopupComponent_0_8]]), _ViewMaterialPaperTooltipComponent1ToListOfMaterialPopupComponent()))[$isNotEmpty]) ? this[_appEl_0].mapNestedViews(material_popup__material_popup.MaterialPopupComponent, src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, dart.fn(nestedView => JSArrayOfMaterialPopupComponent().of([nestedView[_MaterialPopupComponent_0_8]]), _ViewMaterialPaperTooltipComponent1ToListOfMaterialPopupComponent()))[$first] : null;
        this[_query_MaterialPopupComponent_1_0_isDirty] = false;
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new = function(parentView, parentIndex) {
    this[_query_MaterialPopupComponent_1_0_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-tooltip-card'));
    let t = src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._renderType;
    t == null ? src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tooltip__paper_tooltip$46template.styles$MaterialPaperTooltipComponent) : t;
    this.setupComponentType(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._renderType);
  }).prototype = src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.prototype;
  dart.addTypeTests(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0);
  dart.setMethodSignature(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, () => ({
    __proto__: dart.getMethods(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, () => ({
    __proto__: dart.getFields(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.__proto__),
    [_query_MaterialPopupComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, {
    /*src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponent0 = function(parentView, parentIndex) {
    return new src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponent0, AppViewAndintToAppViewOfMaterialPaperTooltipComponent());
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const __PopupHierarchy_0_11 = Symbol('__PopupHierarchy_0_11');
  const __PopupRef_0_12 = Symbol('__PopupRef_0_12');
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _el_6 = Symbol('_el_6');
  const _el_8 = Symbol('_el_8');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_8 = Symbol('_expr_8');
  const _PopupHierarchy_0_11 = Symbol('_PopupHierarchy_0_11');
  const _PopupRef_0_12 = Symbol('_PopupRef_0_12');
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1 = class _ViewMaterialPaperTooltipComponent1 extends src__core__linker__app_view.AppView$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent) {
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
      this.createAttr(this[_el_0], 'enforceSpaceConstraints', '');
      this.createAttr(this[_el_0], 'role', 'tooltip');
      this.createAttr(this[_el_0], 'trackLayoutChanges', '');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialPopupComponent_0_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), 'tooltip', src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions'))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0].ref, this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(this[_el_0]));
      let _text_1 = html.Text.new('\n  ');
      let doc = html.document;
      this[_el_2] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_2].className = 'paper-container';
      this.addShimC(this[_el_2]);
      let _text_3 = html.Text.new('\n    ');
      this[_el_2][$append](_text_3);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this[_el_4].className = 'header';
      this.addShimC(this[_el_4]);
      this.project(this[_el_4], 0);
      let _text_5 = html.Text.new('\n    ');
      this[_el_2][$append](_text_5);
      this[_el_6] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this[_el_6].className = 'body';
      this.addShimC(this[_el_6]);
      this.project(this[_el_6], 1);
      let _text_7 = html.Text.new('\n    ');
      this[_el_2][$append](_text_7);
      this[_el_8] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this[_el_8].className = 'footer';
      this.addShimC(this[_el_8]);
      this.project(this[_el_8], 2);
      let _text_9 = html.Text.new('\n  ');
      this[_el_2][$append](_text_9);
      let _text_10 = html.Text.new('\n');
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], [const$2 || (const$2 = dart.constList([], dart.dynamic)), JSArrayOfNode().of([_text_1, this[_el_2], _text_10]), const$3 || (const$3 = dart.constList([], dart.dynamic))]);
      this[_el_2][$addEventListener]('mouseover', this.eventHandler0(html.Event, dart.bind(this.ctx, 'onMouseOver')));
      this[_el_2][$addEventListener]('mouseleave', this.eventHandler0(html.Event, dart.bind(this.ctx, 'onMouseLeave')));
      this.init0(this[_appEl_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_MaterialPopupComponent_0_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_PopupHierarchy_0_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
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
        this[_MaterialPopupComponent_0_8].trackLayoutChanges = true;
      }
      let currVal_3 = _ctx.offsetX;
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialPopupComponent_0_8].offsetX = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.offsetY;
      if (!(this[_expr_4] == currVal_4)) {
        this[_MaterialPopupComponent_0_8].offsetY = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.preferredPositions;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.popupSource;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_MaterialPopupComponent_0_8].source = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = _ctx.showPopup;
      if (!(this[_expr_8] == currVal_8)) {
        this[_MaterialPopupComponent_0_8].visible = currVal_8;
        this[_expr_8] = currVal_8;
      }
      this[_appEl_0].detectChangesInNestedViews();
      if (firstCheck) {
        if (!(_ctx.popupClassName == null)) {
          this[_compView_0].updateChildClass(this[_el_0], _ctx.popupClassName);
        }
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].ngAfterViewInit();
      }
    }
    dirtyParentQueriesInternal() {
      src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.as(this.parentView)[_query_MaterialPopupComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupHierarchy_0_11] = null;
    this[__PopupRef_0_12] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_el_6] = null;
    this[_el_8] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._renderType;
  }).prototype = src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.prototype;
  dart.addTypeTests(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1);
  dart.setMethodSignature(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, () => ({
    __proto__: dart.getMethods(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, () => ({
    __proto__: dart.getGetters(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__),
    [_PopupHierarchy_0_11]: dart.fnType(dart.dynamic, []),
    [_PopupRef_0_12]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, () => ({
    __proto__: dart.getFields(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_0_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_0_12]: dart.fieldType(dart.dynamic),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.DivElement),
    [_el_6]: dart.fieldType(html.DivElement),
    [_el_8]: dart.fieldType(html.DivElement),
    [_expr_3]: dart.fieldType(core.int),
    [_expr_4]: dart.fieldType(core.int),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool)
  }));
  src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponent1 = function(parentView, parentIndex) {
    return new src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponent1, AppViewAndintToAppViewOfMaterialPaperTooltipComponent());
  dart.defineLazy(src__material_tooltip__paper_tooltip$46template, {
    /*src__material_tooltip__paper_tooltip$46template.styles$MaterialPaperTooltipComponentHost*/get styles$MaterialPaperTooltipComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _TooltipController_0_5 = Symbol('_TooltipController_0_5');
  const _MaterialPaperTooltipComponent_0_6 = Symbol('_MaterialPaperTooltipComponent_0_6');
  const __Tooltip_0_7 = Symbol('__Tooltip_0_7');
  const _Tooltip_0_7 = Symbol('_Tooltip_0_7');
  src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0 = class _ViewMaterialPaperTooltipComponentHost0 extends src__core__linker__app_view.AppView {
    get [_Tooltip_0_7]() {
      if (this[__Tooltip_0_7] == null) {
        this[__Tooltip_0_7] = src__material_tooltip__paper_tooltip.getTooltipHandle(this[_MaterialPaperTooltipComponent_0_6]);
      }
      return this[__Tooltip_0_7];
    }
    build() {
      this[_compView_0] = new src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TooltipController_0_5] = material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)));
      this[_MaterialPaperTooltipComponent_0_6] = new src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.new(src__material_tooltip__tooltip_controller.TooltipController._check(this[_TooltipController_0_5]), this[_compView_0].ref, this.rootEl, null);
      this[_compView_0].create(this[_MaterialPaperTooltipComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialPaperTooltipComponent()).new(0, this, this.rootEl, this[_MaterialPaperTooltipComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 0 === nodeIndex) {
        return this[_TooltipController_0_5];
      }
      if ((token === dart.wrapType(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 0 === nodeIndex) {
        return this[_MaterialPaperTooltipComponent_0_6];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.Tooltip) && 0 === nodeIndex) {
        return this[_Tooltip_0_7];
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
  (src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TooltipController_0_5] = null;
    this[_MaterialPaperTooltipComponent_0_6] = null;
    this[__Tooltip_0_7] = null;
    src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.prototype;
  dart.addTypeTests(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0);
  dart.setMethodSignature(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, () => ({
    __proto__: dart.getGetters(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__),
    [_Tooltip_0_7]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0),
    [_TooltipController_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialPaperTooltipComponent_0_6]: dart.fieldType(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent),
    [__Tooltip_0_7]: dart.fieldType(dart.dynamic)
  }));
  src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__material_tooltip__paper_tooltip$46template, {
    /*src__material_tooltip__paper_tooltip$46template.MaterialPaperTooltipComponentNgFactory*/get MaterialPaperTooltipComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialPaperTooltipComponent()).new('material-tooltip-card', src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponentHost0, src__material_tooltip__paper_tooltip$46template._MaterialPaperTooltipComponentMetadata));
    },
    /*src__material_tooltip__paper_tooltip$46template._MaterialPaperTooltipComponentMetadata*/get _MaterialPaperTooltipComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tooltip__paper_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$4;
  let const$5;
  src__material_tooltip__paper_tooltip$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__paper_tooltip$46template._visited)) {
      return;
    }
    src__material_tooltip__paper_tooltip$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent), src__material_tooltip__paper_tooltip$46template.MaterialPaperTooltipComponentNgFactory);
    src__di__reflector.registerDependencies(src__material_tooltip__paper_tooltip.getTooltipHandle, const$5 || (const$5 = dart.constList([const$4 || (const$4 = dart.constList([dart.wrapType(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    content__deferred_content$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_tooltip__module$46template.initReflector();
    utils__angular__css__css$46template.initReflector();
    src__material_tooltip__tooltip_controller$46template.initReflector();
    src__material_tooltip__tooltip_target$46template.initReflector();
  };
  dart.fn(src__material_tooltip__paper_tooltip$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tooltip/paper_tooltip.template.ddc", {
    "package:angular_components/src/material_tooltip/paper_tooltip.template.dart": src__material_tooltip__paper_tooltip$46template
  }, '{"version":3,"sourceRoot":"","sources":["paper_tooltip.template.dart"],"names":[],"mappings":"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","file":"paper_tooltip.template.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__paper_tooltip$46template: src__material_tooltip__paper_tooltip$46template
  };
});

//# sourceMappingURL=paper_tooltip.template.ddc.js.map
