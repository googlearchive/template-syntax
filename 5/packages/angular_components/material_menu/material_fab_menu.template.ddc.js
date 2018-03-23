define(['dart_sdk', 'packages/angular_components/material_menu/material_fab_menu.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_button/material_fab.template', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/material_tooltip/tooltip', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/src/laminate/popup/popup_source_directive', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/src/common/directives/ng_if', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/material_menu/material_fab_menu', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/popup_ref', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/material_list/material_list_item', 'packages/angular_components/material_menu/material_menu.template', 'packages/angular_components/focus/focus', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/material_menu/menu_root', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/material_menu/material_menu', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_menu/menu_root.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/mixins/track_layout_changes.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/model/observable/observable.template'], function(dart_sdk, material_fab_menu$46scss$46css, view_type, constants, view, app_view_utils, module, tooltip_controller, disposer, material_fab, app_view, material_fab$, dom_popup_source, tooltip, reference, popup_source_directive, material_icon, material_icon$, ng_if, element_ref, material_fab_menu, material_popup, material_popup$, popup_hierarchy, ng_zone, overlay_service, zindexer, alignment, opaque_token, popup_size_provider, deferred_content, deferred_content_aware, material_dropdown_base, popup_ref, material_list_item, dom_service, material_list_item$, material_menu, focus, modal, menu_root, id_generator, material_menu$, reflector, angular, deferred_content$, focus$, alignment$, popup, menu_root$, material_tooltip, track_layout_changes, menu, observable) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_menu__material_fab_menu$46scss$46css$46shim = material_fab_menu$46scss$46css.material_menu__material_fab_menu$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_tooltip__module = module.material_tooltip__module;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const material_button__material_fab$46template = material_fab.material_button__material_fab$46template;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_button__material_fab = material_fab$.material_button__material_fab;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const src__material_tooltip__tooltip = tooltip.src__material_tooltip__tooltip;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const src__laminate__popup__popup_source_directive = popup_source_directive.src__laminate__popup__popup_source_directive;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const material_menu__material_fab_menu = material_fab_menu.material_menu__material_fab_menu;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_service.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__laminate__popup__popup_size_provider = popup_size_provider.src__laminate__popup__popup_size_provider;
  const content__deferred_content = deferred_content.content__deferred_content;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__laminate__popup__popup_ref = popup_ref.src__laminate__popup__popup_ref;
  const material_list__material_list_item$46template = material_list_item.material_list__material_list_item$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const material_list__material_list_item = material_list_item$.material_list__material_list_item;
  const material_menu__menu_item_groups$46template = material_menu.material_menu__menu_item_groups$46template;
  const focus__focus = focus.focus__focus;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const material_menu__menu_root = menu_root.material_menu__menu_root;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const material_menu__menu_item_groups = material_menu$.material_menu__menu_item_groups;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const focus__focus$46template = focus$.focus__focus$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_menu__menu_root$46template = menu_root$.material_menu__menu_root$46template;
  const material_tooltip__material_tooltip$46template = material_tooltip.material_tooltip__material_tooltip$46template;
  const mixins__track_layout_changes$46template = track_layout_changes.mixins__track_layout_changes$46template;
  const model__menu__menu$46template = menu.model__menu__menu$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const _root = Object.create(null);
  const material_menu__material_fab_menu$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let JSArrayOfElementRef = () => (JSArrayOfElementRef = dart.constFn(_interceptors.JSArray$(src__core__linker__element_ref.ElementRef)))();
  let ListOfElementRef = () => (ListOfElementRef = dart.constFn(core.List$(src__core__linker__element_ref.ElementRef)))();
  let _ViewMaterialFabMenuComponent2ToListOfElementRef = () => (_ViewMaterialFabMenuComponent2ToListOfElementRef = dart.constFn(dart.fnType(ListOfElementRef(), [material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2])))();
  let _ViewMaterialFabMenuComponent1ToListOfElementRef = () => (_ViewMaterialFabMenuComponent1ToListOfElementRef = dart.constFn(dart.fnType(ListOfElementRef(), [material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1])))();
  let AppViewOfMaterialFabMenuComponent = () => (AppViewOfMaterialFabMenuComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__material_fab_menu.MaterialFabMenuComponent)))();
  let AppViewAndintToAppViewOfMaterialFabMenuComponent = () => (AppViewAndintToAppViewOfMaterialFabMenuComponent = dart.constFn(dart.fnType(AppViewOfMaterialFabMenuComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ComponentRefOfMaterialFabMenuComponent = () => (ComponentRefOfMaterialFabMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__material_fab_menu.MaterialFabMenuComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialFabMenuComponent = () => (ComponentFactoryOfMaterialFabMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__material_fab_menu.MaterialFabMenuComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_menu__material_fab_menu$46template, {
    /*material_menu__material_fab_menu$46template.styles$MaterialFabMenuComponent*/get styles$MaterialFabMenuComponent() {
      return dart.constList([material_menu__material_fab_menu$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_content_1_0_isDirty = Symbol('_query_content_1_0_isDirty');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _appEl_1 = Symbol('_appEl_1');
  const _MaterialFabComponent_1_8 = Symbol('_MaterialFabComponent_1_8');
  const _MaterialTooltipDirective_1_9 = Symbol('_MaterialTooltipDirective_1_9');
  const _PopupSourceDirective_1_10 = Symbol('_PopupSourceDirective_1_10');
  const __TooltipController_1_11 = Symbol('__TooltipController_1_11');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _MaterialIconComponent_3_5 = Symbol('_MaterialIconComponent_3_5');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _TooltipController_1_11 = Symbol('_TooltipController_1_11');
  let const$;
  const _el_0 = Symbol('_el_0');
  const _appEl_2 = Symbol('_appEl_2');
  material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0 = class ViewMaterialFabMenuComponent0 extends src__core__linker__app_view.AppView$(material_menu__material_fab_menu.MaterialFabMenuComponent) {
    get [_TooltipController_1_11]() {
      if (this[__TooltipController_1_11] == null) {
        this[__TooltipController_1_11] = material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)));
      }
      return this[__TooltipController_1_11];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('\n');
      parentRenderNode[$append](_text_0);
      this[_compView_1] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this.createAttr(this[_el_1], 'popupSource', '');
      this.createAttr(this[_el_1], 'raised', '');
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_MaterialFabComponent_1_8] = new material_button__material_fab.MaterialFabComponent.new(html.HtmlElement._check(this[_el_1]), this[_compView_1].ref);
      this[_MaterialTooltipDirective_1_9] = new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_appEl_1], html.HtmlElement._check(this[_el_1]), this[_appEl_1], this[_compView_1].ref, html.Window._check(this.parentView.injectorGet(dart.wrapType(html.Window), this.viewData.parentIndex)));
      this[_PopupSourceDirective_1_10] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_1]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)));
      let _text_2 = html.Text.new('\n  ');
      this[_compView_3] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_MaterialIconComponent_3_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_3]));
      this[_compView_3].create(this[_MaterialIconComponent_3_5], []);
      let _text_4 = html.Text.new('\n');
      this[_compView_1].create(this[_MaterialFabComponent_1_8], [JSArrayOfNode().of([_text_2, this[_el_3], _text_4])]);
      let _text_5 = html.Text.new('\n');
      parentRenderNode[$append](_text_5);
      let _anchor_6 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent1);
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = html.Text.new('\n');
      parentRenderNode[$append](_text_7);
      let subscription_0 = this[_MaterialFabComponent_1_8].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'trigger')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_PopupSourceDirective_1_10];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_TooltipController_1_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialFabComponent_1_8].raised = true;
        changed = true;
      }
      let currVal_3 = !dart.test(_ctx.isFabEnabled);
      if (!(this[_expr_3] === currVal_3)) {
        this[_MaterialFabComponent_1_8].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (firstCheck) {
        if (!(_ctx.tooltipPositions == null)) {
          this[_MaterialTooltipDirective_1_9].positions = _ctx.tooltipPositions;
        }
      }
      let currVal_6 = _ctx.tooltip;
      if (!(this[_expr_6] == currVal_6)) {
        this[_MaterialTooltipDirective_1_9].text = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.hasTooltip;
      if (!(this[_expr_7] == currVal_7)) {
        this[_MaterialTooltipDirective_1_9].canShow = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (firstCheck) {
        this[_MaterialTooltipDirective_1_9].ngOnInit();
      }
      changed = false;
      let currVal_8 = _ctx.glyph;
      if (!core.identical(this[_expr_8], currVal_8)) {
        this[_MaterialIconComponent_3_5].icon = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_NgIf_6_9].ngIf = _ctx.hasMenu;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      if (dart.test(this[_query_content_1_0_isDirty])) {
        this.ctx.contentElementRef = dart.test(this[_appEl_6].mapNestedViews(src__core__linker__element_ref.ElementRef, material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, dart.fn(nestedView => nestedView[_appEl_2].mapNestedViews(src__core__linker__element_ref.ElementRef, material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2, dart.fn(nestedView => JSArrayOfElementRef().of([new src__core__linker__element_ref.ElementRef.new(nestedView[_el_0])]), _ViewMaterialFabMenuComponent2ToListOfElementRef())), _ViewMaterialFabMenuComponent1ToListOfElementRef()))[$isNotEmpty]) ? this[_appEl_6].mapNestedViews(src__core__linker__element_ref.ElementRef, material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, dart.fn(nestedView => nestedView[_appEl_2].mapNestedViews(src__core__linker__element_ref.ElementRef, material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2, dart.fn(nestedView => JSArrayOfElementRef().of([new src__core__linker__element_ref.ElementRef.new(nestedView[_el_0])]), _ViewMaterialFabMenuComponent2ToListOfElementRef())), _ViewMaterialFabMenuComponent1ToListOfElementRef()))[$first] : null;
        this[_query_content_1_0_isDirty] = false;
      }
      let currVal_0 = _ctx.isFabHidden;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_1], 'invisible', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaLabel;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this[_el_1], 'aria-label', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.naviId;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this.setAttr(this[_el_1], 'navi-id', currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_3].detectChanges();
      if (firstCheck) {
        this[_MaterialTooltipDirective_1_9].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_PopupSourceDirective_1_10].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_6];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_1];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_3];
      t$1 == null ? null : t$1.destroy();
      this[_MaterialTooltipDirective_1_9].ngOnDestroy();
      this[_PopupSourceDirective_1_10].ngOnDestroy();
    }
  };
  (material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.new = function(parentView, parentIndex) {
    this[_query_content_1_0_isDirty] = true;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_appEl_1] = null;
    this[_MaterialFabComponent_1_8] = null;
    this[_MaterialTooltipDirective_1_9] = null;
    this[_PopupSourceDirective_1_10] = null;
    this[__TooltipController_1_11] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_MaterialIconComponent_3_5] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-fab-menu'));
    let t = material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0._renderType;
    t == null ? material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_menu__material_fab_menu$46template.styles$MaterialFabMenuComponent) : t;
    this.setupComponentType(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0._renderType);
  }).prototype = material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.prototype;
  dart.addTypeTests(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0);
  dart.setMethodSignature(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getMethods(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_fab_menu.MaterialFabMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getGetters(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    [_TooltipController_1_11]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getFields(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    [_query_content_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialFabComponent_1_8]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_MaterialTooltipDirective_1_9]: dart.fieldType(src__material_tooltip__tooltip.MaterialTooltipDirective),
    [_PopupSourceDirective_1_10]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [__TooltipController_1_11]: dart.fieldType(dart.dynamic),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_3_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.String),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0, {
    /*material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent0 = function(parentView, parentIndex) {
    return new material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent0, AppViewAndintToAppViewOfMaterialFabMenuComponent());
  const _compView_0 = Symbol('_compView_0');
  const _appEl_0 = Symbol('_appEl_0');
  const _MaterialPopupComponent_0_8 = Symbol('_MaterialPopupComponent_0_8');
  const __PopupRef_0_11 = Symbol('__PopupRef_0_11');
  const __PopupHierarchy_0_12 = Symbol('__PopupHierarchy_0_12');
  const _DeferredContentDirective_2_9 = Symbol('_DeferredContentDirective_2_9');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _PopupRef_0_11 = Symbol('_PopupRef_0_11');
  const _PopupHierarchy_0_12 = Symbol('_PopupHierarchy_0_12');
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1 = class _ViewMaterialFabMenuComponent1 extends src__core__linker__app_view.AppView$(material_menu__material_fab_menu.MaterialFabMenuComponent) {
    get [_PopupRef_0_11]() {
      if (this[__PopupRef_0_11] == null) {
        this[__PopupRef_0_11] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_11];
    }
    get [_PopupHierarchy_0_12]() {
      if (this[__PopupHierarchy_0_12] == null) {
        this[__PopupHierarchy_0_12] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_12];
    }
    build() {
      this[_compView_0] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'autoDismiss', '');
      this.createAttr(this[_el_0], 'enforceSpaceConstraints', '');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialPopupComponent_0_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions'))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0].ref, this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(this[_el_0]));
      let _text_1 = html.Text.new('\n  ');
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent2);
      this[_DeferredContentDirective_2_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_2], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8]);
      let _text_3 = html.Text.new('\n');
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], [const$2 || (const$2 = dart.constList([], dart.dynamic)), JSArrayOfObject().of([_text_1, this[_appEl_2], _text_3]), const$3 || (const$3 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_MaterialPopupComponent_0_8].onClose.listen(this.eventHandler0(core.Null, dart.bind(this.ctx, 'onPopupClosed')));
      let subscription_1 = this[_MaterialPopupComponent_0_8].onOpened.listen(this.eventHandler0(core.Null, dart.bind(this.ctx, 'onPopupOpened')));
      this.init([this[_appEl_0]], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialPopupComponent_0_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupRef_0_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupHierarchy_0_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_source = material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.as(this.parentView)[_PopupSourceDirective_1_10];
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].autoDismiss = true;
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        this[_MaterialPopupComponent_0_8].hasBox = false;
      }
      let currVal_2 = _ctx.preferredPopupPositions;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_source;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_MaterialPopupComponent_0_8].source = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.trackLayoutChanges;
      if (!(this[_expr_4] == currVal_4)) {
        this[_MaterialPopupComponent_0_8].trackLayoutChanges = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.showPopup;
      if (!(this[_expr_5] == currVal_5)) {
        this[_MaterialPopupComponent_0_8].visible = currVal_5;
        this[_expr_5] = currVal_5;
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
  (material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupRef_0_11] = null;
    this[__PopupHierarchy_0_12] = null;
    this[_appEl_2] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0._renderType;
  }).prototype = material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.prototype;
  dart.addTypeTests(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1);
  dart.setMethodSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getMethods(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_fab_menu.MaterialFabMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getGetters(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    [_PopupRef_0_11]: dart.fnType(dart.dynamic, []),
    [_PopupHierarchy_0_12]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getFields(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupRef_0_11]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_2_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent1 = function(parentView, parentIndex) {
    return new material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent1, AppViewAndintToAppViewOfMaterialFabMenuComponent());
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _MaterialListItemComponent_4_5 = Symbol('_MaterialListItemComponent_4_5');
  const _el_6 = Symbol('_el_6');
  const _compView_6 = Symbol('_compView_6');
  const _MaterialIconComponent_6_5 = Symbol('_MaterialIconComponent_6_5');
  const _el_9 = Symbol('_el_9');
  const _compView_9 = Symbol('_compView_9');
  const _AutoFocusDirective_9_5 = Symbol('_AutoFocusDirective_9_5');
  const _MenuRootDirective_9_6 = Symbol('_MenuRootDirective_9_6');
  const _MenuRoot_9_7 = Symbol('_MenuRoot_9_7');
  const _MenuItemGroupsComponent_9_8 = Symbol('_MenuItemGroupsComponent_9_8');
  material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2 = class _ViewMaterialFabMenuComponent2 extends src__core__linker__app_view.AppView$(material_menu__material_fab_menu.MaterialFabMenuComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'menu-content';
      this.createAttr(this[_el_0], 'elevation', '2');
      this.addShimC(this[_el_0]);
      let _text_1 = html.Text.new('\n    ');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_2].className = 'content-wrapper';
      this.addShimC(this[_el_2]);
      let _text_3 = html.Text.new('\n      ');
      this[_el_2][$append](_text_3);
      this[_compView_4] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_2][$append](this[_el_4]);
      this[_el_4].className = 'close-menu item';
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_MaterialListItemComponent_4_5] = new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_4]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.as(this.parentView)[_MaterialPopupComponent_0_8], null, null);
      let _text_5 = html.Text.new('\n        ');
      this[_compView_6] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 6);
      this[_el_6] = this[_compView_6].rootEl;
      this[_el_6].className = 'material-list-item-primary';
      this.createAttr(this[_el_6], 'icon', 'close');
      this.addShimC(html.HtmlElement._check(this[_el_6]));
      this[_MaterialIconComponent_6_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_6]));
      this[_compView_6].create(this[_MaterialIconComponent_6_5], []);
      let _text_7 = html.Text.new('\n      ');
      this[_compView_4].create(this[_MaterialListItemComponent_4_5], [JSArrayOfNode().of([_text_5, this[_el_6], _text_7])]);
      let _text_8 = html.Text.new('\n      ');
      this[_el_2][$append](_text_8);
      this[_compView_9] = new material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 9);
      this[_el_9] = this[_compView_9].rootEl;
      this[_el_2][$append](this[_el_9]);
      this.createAttr(this[_el_9], 'autoFocus', '');
      this[_el_9].className = 'menu-groups';
      this.createAttr(this[_el_9], 'menu-root', '');
      this.createAttr(this[_el_9], 'preventCloseOnPressLeft', '');
      this.addShimC(html.HtmlElement._check(this[_el_9]));
      this[_AutoFocusDirective_9_5] = new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_9]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), focus__focus.Focusable._check(this.parentView.parentView.injectorGet(dart.wrapType(focus__focus.Focusable), this.parentView.viewData.parentIndex, null)), laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.as(this.parentView)[_PopupRef_0_11]));
      this[_MenuRootDirective_9_6] = new material_menu__menu_root.MenuRootDirective.new(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.as(this.parentView)[_MaterialPopupComponent_0_8]);
      this[_MenuRoot_9_7] = this[_MenuRootDirective_9_6];
      this[_MenuItemGroupsComponent_9_8] = material_menu__menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRoot_9_7], this[_compView_9].ref, material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent1.as(this.parentView)[_MaterialPopupComponent_0_8], utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.viewData.parentIndex, null)));
      let _text_10 = html.Text.new('\n      ');
      this[_compView_9].create(this[_MenuItemGroupsComponent_9_8], []);
      let _text_11 = html.Text.new('\n    ');
      this[_el_2][$append](_text_11);
      let _text_12 = html.Text.new('\n  ');
      this[_el_0][$append](_text_12);
      let subscription_0 = this[_MaterialListItemComponent_4_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'hideMenu')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_list__material_list_item.MaterialListItemComponent) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_MaterialListItemComponent_4_5];
      }
      if (token === dart.wrapType(material_menu__menu_root.MenuRootDirective) && 9 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_MenuRootDirective_9_6];
      }
      if (token === dart.wrapType(material_menu__menu_root.MenuRoot) && 9 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_MenuRoot_9_7];
      }
      if (token === dart.wrapType(material_menu__menu_item_groups.MenuItemGroupsComponent) && 9 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_MenuItemGroupsComponent_9_8];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialListItemComponent_4_5].closeOnActivate = false;
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_6_5].icon = 'close';
        changed = true;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_AutoFocusDirective_9_5].autoFocus = true;
      }
      if (firstCheck) {
        this[_AutoFocusDirective_9_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MenuItemGroupsComponent_9_8].preventCloseOnPressLeft = '';
        changed = true;
      }
      let currVal_7 = _ctx.menuItem.subMenu;
      if (!core.identical(this[_expr_7], currVal_7)) {
        this[_MenuItemGroupsComponent_9_8].menu = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      if (changed) {
        this[_compView_9].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MenuItemGroupsComponent_9_8].ngOnInit();
      }
      let currVal_0 = _ctx.menuVisible;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateClass(this[_el_0], 'visible', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.closing;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateClass(this[_el_0], 'closing', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.menuVisible;
      if (!(this[_expr_2] == currVal_2)) {
        this.updateClass(this[_el_2], 'visible', currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.closing;
      if (!(this[_expr_3] == currVal_3)) {
        this.updateClass(this[_el_2], 'closing', currVal_3);
        this[_expr_3] = currVal_3;
      }
      this[_compView_4].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_9].detectChanges();
    }
    dirtyParentQueriesInternal() {
      material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.as(this.parentView.parentView)[_query_content_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_4];
      t == null ? null : t.destroy();
      let t$ = this[_compView_6];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_9];
      t$0 == null ? null : t$0.destroy();
      this[_MaterialListItemComponent_4_5].ngOnDestroy();
      this[_AutoFocusDirective_9_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_9_8].ngOnDestroy();
    }
  };
  (material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_MaterialListItemComponent_4_5] = null;
    this[_el_6] = null;
    this[_compView_6] = null;
    this[_MaterialIconComponent_6_5] = null;
    this[_el_9] = null;
    this[_compView_9] = null;
    this[_AutoFocusDirective_9_5] = null;
    this[_MenuRootDirective_9_6] = null;
    this[_MenuRoot_9_7] = null;
    this[_MenuItemGroupsComponent_9_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_7] = null;
    material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0._renderType;
  }).prototype = material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2.prototype;
  dart.addTypeTests(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2);
  dart.setMethodSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2, () => ({
    __proto__: dart.getMethods(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_fab_menu.MaterialFabMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2, () => ({
    __proto__: dart.getFields(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_4_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_el_6]: dart.fieldType(html.Element),
    [_compView_6]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_6_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_el_9]: dart.fieldType(html.Element),
    [_compView_9]: dart.fieldType(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0),
    [_AutoFocusDirective_9_5]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_MenuRootDirective_9_6]: dart.fieldType(material_menu__menu_root.MenuRootDirective),
    [_MenuRoot_9_7]: dart.fieldType(material_menu__menu_root.MenuRootDirective),
    [_MenuItemGroupsComponent_9_8]: dart.fieldType(material_menu__menu_item_groups.MenuItemGroupsComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic)
  }));
  material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent2 = function(parentView, parentIndex) {
    return new material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponent2, AppViewAndintToAppViewOfMaterialFabMenuComponent());
  dart.defineLazy(material_menu__material_fab_menu$46template, {
    /*material_menu__material_fab_menu$46template.styles$MaterialFabMenuComponentHost*/get styles$MaterialFabMenuComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialFabMenuComponent_0_5 = Symbol('_MaterialFabMenuComponent_0_5');
  material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0 = class _ViewMaterialFabMenuComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialFabMenuComponent_0_5] = new material_menu__material_fab_menu.MaterialFabMenuComponent.new(this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialFabMenuComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialFabMenuComponent()).new(0, this, this.rootEl, this[_MaterialFabMenuComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_menu__material_fab_menu.MaterialFabMenuComponent) && 0 === nodeIndex) {
        return this[_MaterialFabMenuComponent_0_5];
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
      this[_MaterialFabMenuComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialFabMenuComponent_0_5] = null;
    material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.prototype;
  dart.addTypeTests(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0);
  dart.setMethodSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_menu__material_fab_menu$46template.ViewMaterialFabMenuComponent0),
    [_MaterialFabMenuComponent_0_5]: dart.fieldType(material_menu__material_fab_menu.MaterialFabMenuComponent)
  }));
  material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_menu__material_fab_menu$46template, {
    /*material_menu__material_fab_menu$46template.MaterialFabMenuComponentNgFactory*/get MaterialFabMenuComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialFabMenuComponent()).new('material-fab-menu', material_menu__material_fab_menu$46template.viewFactory_MaterialFabMenuComponentHost0, material_menu__material_fab_menu$46template._MaterialFabMenuComponentMetadata));
    },
    /*material_menu__material_fab_menu$46template._MaterialFabMenuComponentMetadata*/get _MaterialFabMenuComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_menu__material_fab_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__material_fab_menu$46template.initReflector = function() {
    if (dart.test(material_menu__material_fab_menu$46template._visited)) {
      return;
    }
    material_menu__material_fab_menu$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__material_fab_menu.MaterialFabMenuComponent), material_menu__material_fab_menu$46template.MaterialFabMenuComponentNgFactory);
    material_menu__menu_item_groups$46template.initReflector();
    angular$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_button__material_fab$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_list__material_list_item$46template.initReflector();
    material_menu__menu_root$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_tooltip__material_tooltip$46template.initReflector();
    mixins__track_layout_changes$46template.initReflector();
    model__menu__menu$46template.initReflector();
    model__observable__observable$46template.initReflector();
  };
  dart.fn(material_menu__material_fab_menu$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_menu/material_fab_menu.template.ddc", {
    "package:angular_components/material_menu/material_fab_menu.template.dart": material_menu__material_fab_menu$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_fab_menu.template.dart"],"names":[],"mappings":"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","file":"material_fab_menu.template.ddc.js"}');
  // Exports:
  return {
    material_menu__material_fab_menu$46template: material_menu__material_fab_menu$46template
  };
});

//# sourceMappingURL=material_fab_menu.template.ddc.js.map
