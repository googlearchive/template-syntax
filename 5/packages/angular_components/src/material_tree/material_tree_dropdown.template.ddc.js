define(['dart_sdk', 'packages/angular_components/src/material_tree/material_tree_dropdown.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/src/laminate/popup/popup_source_directive', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/popup_ref', 'packages/angular_components/src/material_tree/material_tree_filter', 'packages/angular_components/src/material_tree/material_tree_dropdown', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/src/material_tree/material_tree_filter.template', 'packages/angular_components/src/material_tree/material_tree_root', 'packages/angular_components/src/material_tree/material_tree_impl.template', 'packages/angular_components/src/material_tree/material_tree_impl', 'packages/angular_components/focus/focus', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/src/material_tree/material_tree_root.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, material_tree_dropdown$46scss$46css, view_type, constants, view, app_view_utils, material_popup, app_view, dom_service, keyboard_only_focus_indicator, dom_popup_source, reference, popup_source_directive, ng_if, material_popup$, popup_hierarchy, ng_zone, overlay_service, zindexer, alignment, opaque_token, popup_size_provider, element_ref, deferred_content, deferred_content_aware, material_dropdown_base, popup_ref, material_tree_filter, material_tree_dropdown, material_icon, material_icon$, material_tree_filter$, material_tree_root, material_tree_impl, material_tree_impl$, focus, reflector, angular, deferred_content$, focus$, keyboard_only_focus_indicator$, alignment$, material_dropdown_base$, select, selection_container, selection_model, selection_options, has_renderer, material_tree_root$, dom_service$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tree__material_tree_dropdown$46scss$46css$46shim = material_tree_dropdown$46scss$46css.src__material_tree__material_tree_dropdown$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const src__laminate__popup__popup_source_directive = popup_source_directive.src__laminate__popup__popup_source_directive;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
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
  const src__material_tree__material_tree_filter = material_tree_filter.src__material_tree__material_tree_filter;
  const src__material_tree__material_tree_dropdown = material_tree_dropdown.src__material_tree__material_tree_dropdown;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const src__material_tree__material_tree_filter$46template = material_tree_filter$.src__material_tree__material_tree_filter$46template;
  const src__material_tree__material_tree_root = material_tree_root.src__material_tree__material_tree_root;
  const src__material_tree__material_tree_impl$46template = material_tree_impl.src__material_tree__material_tree_impl$46template;
  const src__material_tree__material_tree_impl = material_tree_impl$.src__material_tree__material_tree_impl;
  const focus__focus = focus.focus__focus;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const focus__focus$46template = focus$.focus__focus$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container.model__selection__selection_container$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options.model__selection__selection_options$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const src__material_tree__material_tree_root$46template = material_tree_root$.src__material_tree__material_tree_root$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const _root = Object.create(null);
  const src__material_tree__material_tree_dropdown$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfMaterialTreeFilterComponent = () => (JSArrayOfMaterialTreeFilterComponent = dart.constFn(_interceptors.JSArray$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let ListOfMaterialTreeFilterComponent = () => (ListOfMaterialTreeFilterComponent = dart.constFn(core.List$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let _ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent = () => (_ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(ListOfMaterialTreeFilterComponent(), [src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3])))();
  let _ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent = () => (_ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(ListOfMaterialTreeFilterComponent(), [src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4])))();
  let JSArrayOfListOfMaterialTreeFilterComponent = () => (JSArrayOfListOfMaterialTreeFilterComponent = dart.constFn(_interceptors.JSArray$(ListOfMaterialTreeFilterComponent())))();
  let AppViewOfMaterialTreeDropdownComponent = () => (AppViewOfMaterialTreeDropdownComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeDropdownComponent = () => (AppViewAndintToAppViewOfMaterialTreeDropdownComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeDropdownComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeDropdownComponent = () => (ComponentRefOfMaterialTreeDropdownComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTreeDropdownComponent = () => (ComponentFactoryOfMaterialTreeDropdownComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template.styles$MaterialTreeDropdownComponent*/get styles$MaterialTreeDropdownComponent() {
      return dart.constList([src__material_tree__material_tree_dropdown$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_MaterialTreeFilterComponent_1_0_isDirty = Symbol('_query_MaterialTreeFilterComponent_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _KeyboardOnlyFocusIndicatorDirective_0_5 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_5');
  const _PopupSourceDirective_0_6 = Symbol('_PopupSourceDirective_0_6');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _el_4 = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _appEl_4 = Symbol('_appEl_4');
  const _MaterialPopupComponent_4_8 = Symbol('_MaterialPopupComponent_4_8');
  const __PopupHierarchy_4_11 = Symbol('__PopupHierarchy_4_11');
  const __PopupRef_4_12 = Symbol('__PopupRef_4_12');
  const _el_5 = Symbol('_el_5');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _appEl_7 = Symbol('_appEl_7');
  const _DeferredContentDirective_7_9 = Symbol('_DeferredContentDirective_7_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_8 = Symbol('_expr_8');
  const _PopupHierarchy_4_11 = Symbol('_PopupHierarchy_4_11');
  const _PopupRef_4_12 = Symbol('_PopupRef_4_12');
  let const$;
  let const$0;
  let const$1;
  const _handle_focus_0_0 = Symbol('_handle_focus_0_0');
  const _handle_click_0_1 = Symbol('_handle_click_0_1');
  const _handle_visibleChange_4_1 = Symbol('_handle_visibleChange_4_1');
  let const$2;
  const _MaterialTreeFilterComponent_0_5 = Symbol('_MaterialTreeFilterComponent_0_5');
  src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0 = class ViewMaterialTreeDropdownComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    get [_PopupHierarchy_4_11]() {
      if (this[__PopupHierarchy_4_11] == null) {
        this[__PopupHierarchy_4_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_4_8]);
      }
      return this[__PopupHierarchy_4_11];
    }
    get [_PopupRef_4_12]() {
      if (this[__PopupRef_4_12] == null) {
        this[__PopupRef_4_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_4_8]);
      }
      return this[__PopupRef_4_12];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'button';
      this.createAttr(this[_el_0], 'keyboardOnlyFocusIndicator', '');
      this.createAttr(this[_el_0], 'popupSource', '');
      this.addShimC(this[_el_0]);
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_PopupSourceDirective_0_6] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_el_0], utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)));
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3);
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this[_compView_4] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      parentRenderNode[$append](this[_el_4]);
      this.createAttr(this[_el_4], 'enforceSpaceConstraints', '');
      this.createAttr(this[_el_4], 'trackLayoutChanges', '');
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, this[_el_4]);
      this[_MaterialPopupComponent_4_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions'))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_4].ref, this[_appEl_4], new src__core__linker__element_ref.ElementRef.new(this[_el_4]));
      this[_el_5] = html.DivElement._check(doc[$createElement]('div'));
      this.createAttr(this[_el_5], 'header', '');
      this.addShimC(this[_el_5]);
      this.project(this[_el_5], 0);
      let _anchor_6 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_5][$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 5, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4);
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 4, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5);
      this[_DeferredContentDirective_7_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_7], _TemplateRef_7_8, this[_MaterialPopupComponent_4_8]);
      this[_compView_4].create(this[_MaterialPopupComponent_4_8], [JSArrayOfDivElement().of([this[_el_5]]), JSArrayOfViewContainer().of([this[_appEl_7]]), const$1 || (const$1 = dart.constList([], dart.dynamic))]);
      this[_el_0][$addEventListener]('focus', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_focus_0_0)));
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_1)));
      this[_el_0][$addEventListener]('keyup', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0][$addEventListener]('mousedown', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
      let subscription_0 = this[_MaterialPopupComponent_4_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_visibleChange_4_1)));
      let subscription_1 = this[_MaterialPopupComponent_4_8].onOpened.listen(this.eventHandler0(core.Null, dart.bind(this.ctx, 'focus')));
      this.init(const$2 || (const$2 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_KeyboardOnlyFocusIndicatorDirective_0_5];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupSourceDirective_0_6];
      }
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_MaterialPopupComponent_4_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_PopupHierarchy_4_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_PopupRef_4_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_button = this[_PopupSourceDirective_0_6];
      this[_NgIf_1_9].ngIf = !dart.test(_ctx.showFilterInsideButton);
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.showFilterInsideButton);
      this[_NgIf_3_9].ngIf = _ctx.showFilterInsideButton;
      if (firstCheck) {
        this[_MaterialPopupComponent_4_8].enforceSpaceConstraints = true;
        this[_MaterialPopupComponent_4_8].trackLayoutChanges = true;
      }
      let currVal_5 = _ctx.popupPositions;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_MaterialPopupComponent_4_8].preferredPositions = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = local_button;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_MaterialPopupComponent_4_8].source = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = _ctx.visible;
      if (!(this[_expr_8] == currVal_8)) {
        this[_MaterialPopupComponent_4_8].visible = currVal_8;
        this[_expr_8] = currVal_8;
      }
      this[_NgIf_6_9].ngIf = dart.test(_ctx.supportsFiltering) && dart.test(_ctx.showFilterInsidePopup);
      if (firstCheck) {
        this[_DeferredContentDirective_7_9].preserveDimensions = true;
      }
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      if (dart.test(this[_query_MaterialTreeFilterComponent_1_0_isDirty])) {
        this.ctx.materialTreeFilterComponent = dart.test(src__core__linker__app_view_utils.flattenNodes(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, JSArrayOfListOfMaterialTreeFilterComponent().of([this[_appEl_3].mapNestedViews(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5]]), _ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent())), this[_appEl_6].mapNestedViews(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5]]), _ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent()))]))[$isNotEmpty]) ? src__core__linker__app_view_utils.flattenNodes(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, JSArrayOfListOfMaterialTreeFilterComponent().of([this[_appEl_3].mapNestedViews(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5]]), _ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent())), this[_appEl_6].mapNestedViews(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5]]), _ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent()))]))[$first] : null;
        this[_query_MaterialTreeFilterComponent_1_0_isDirty] = false;
      }
      let currVal_0 = !dart.test(_ctx.showFilterInsideButton);
      if (!(this[_expr_0] === currVal_0)) {
        this.updateClass(this[_el_0], 'border', currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_4].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      if (firstCheck) {
        this[_PopupSourceDirective_0_6].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_MaterialPopupComponent_4_8].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_3];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_4];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_6];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_appEl_7];
      t$3 == null ? null : t$3.destroyNestedViews();
      let t$4 = this[_compView_4];
      t$4 == null ? null : t$4.destroy();
      this[_PopupSourceDirective_0_6].ngOnDestroy();
      this[_DeferredContentDirective_7_9].ngOnDestroy();
      this[_MaterialPopupComponent_4_8].ngOnDestroy();
    }
    [_handle_focus_0_0]($event) {
      this.ctx.visible = true;
    }
    [_handle_click_0_1]($event) {
      this.ctx.visible = !dart.test(this.ctx.visible);
      this[_KeyboardOnlyFocusIndicatorDirective_0_5].hideOutline();
    }
    [_handle_visibleChange_4_1]($event) {
      this.ctx.visible = core.bool._check($event);
    }
  };
  (src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.new = function(parentView, parentIndex) {
    this[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
    this[_PopupSourceDirective_0_6] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_appEl_4] = null;
    this[_MaterialPopupComponent_4_8] = null;
    this[__PopupHierarchy_4_11] = null;
    this[__PopupRef_4_12] = null;
    this[_el_5] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_DeferredContentDirective_7_9] = null;
    this[_expr_0] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-tree-dropdown'));
    let t = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
    t == null ? src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__material_tree_dropdown$46template.styles$MaterialTreeDropdownComponent) : t;
    this.setupComponentType(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType);
  }).prototype = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_focus_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_visibleChange_4_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, () => ({
    __proto__: dart.getGetters(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.__proto__),
    [_PopupHierarchy_4_11]: dart.fnType(dart.dynamic, []),
    [_PopupRef_4_12]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.__proto__),
    [_query_MaterialTreeFilterComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_PopupSourceDirective_0_6]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_4_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_4_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_4_12]: dart.fieldType(dart.dynamic),
    [_el_5]: dart.fieldType(html.DivElement),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_7_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, {
    /*src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent0, AppViewAndintToAppViewOfMaterialTreeDropdownComponent());
  const _text_1 = Symbol('_text_1');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1 = class _ViewMaterialTreeDropdownComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'button-text';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.placeholder;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1, AppViewAndintToAppViewOfMaterialTreeDropdownComponent());
  const _compView_0 = Symbol('_compView_0');
  const _MaterialIconComponent_0_5 = Symbol('_MaterialIconComponent_0_5');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2 = class _ViewMaterialTreeDropdownComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'icon';
      this.createAttr(this[_el_0], 'icon', 'arrow_drop_down');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_0_5].icon = 'arrow_drop_down';
        changed = true;
      }
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
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2, AppViewAndintToAppViewOfMaterialTreeDropdownComponent());
  const _expr_1 = Symbol('_expr_1');
  const _handle_filter_0_0 = Symbol('_handle_filter_0_0');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3 = class _ViewMaterialTreeDropdownComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0] = new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialTreeFilterComponent_0_5] = new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeFilterComponent_0_5], []);
      let subscription_0 = this[_MaterialTreeFilterComponent_0_5].onFiltered.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_filter_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.placeholder;
      if (!(this[_expr_0] == currVal_0)) {
        this[_MaterialTreeFilterComponent_0_5].placeholder = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.filterableOptions;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_MaterialTreeFilterComponent_0_5].filterable = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.as(this.parentView)[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
    [_handle_filter_0_0]($event) {
      this.ctx.visible = true;
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialTreeFilterComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_filter_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
    [_MaterialTreeFilterComponent_0_5]: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3, AppViewAndintToAppViewOfMaterialTreeDropdownComponent());
  const _expr_2 = Symbol('_expr_2');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4 = class _ViewMaterialTreeDropdownComponent4 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0] = new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'search-box';
      this.createAttr(this[_el_0], 'leadingGlyph', 'search');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialTreeFilterComponent_0_5] = new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeFilterComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialTreeFilterComponent_0_5].leadingGlyph = 'search';
      }
      let currVal_1 = _ctx.placeholder;
      if (!(this[_expr_1] == currVal_1)) {
        this[_MaterialTreeFilterComponent_0_5].placeholder = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.filterableOptions;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MaterialTreeFilterComponent_0_5].filterable = currVal_2;
        this[_expr_2] = currVal_2;
      }
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.as(this.parentView)[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialTreeFilterComponent_0_5] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
    [_MaterialTreeFilterComponent_0_5]: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4, AppViewAndintToAppViewOfMaterialTreeDropdownComponent());
  const _MaterialTreeComponent_0_5 = Symbol('_MaterialTreeComponent_0_5');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5 = class _ViewMaterialTreeDropdownComponent5 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) {
    build() {
      this[_compView_0] = new src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialTreeComponent_0_5] = new src__material_tree__material_tree_impl.MaterialTreeComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex, null)), null);
      this[_compView_0].create(this[_MaterialTreeComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(src__material_tree__material_tree_impl.MaterialTreeComponent) || token === dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot)) && 0 === nodeIndex) {
        return this[_MaterialTreeComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.expandAll;
      if (!(this[_expr_0] == currVal_0)) {
        this[_MaterialTreeComponent_0_5].expandAll = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.componentRenderer;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_MaterialTreeComponent_0_5].componentRenderer = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.itemRenderer;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MaterialTreeComponent_0_5].itemRenderer = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.options;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_MaterialTreeComponent_0_5].options = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.selection;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_MaterialTreeComponent_0_5].selection = currVal_4;
        this[_expr_4] = currVal_4;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialTreeComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._renderType;
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0),
    [_MaterialTreeComponent_0_5]: dart.fieldType(src__material_tree__material_tree_impl.MaterialTreeComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5, AppViewAndintToAppViewOfMaterialTreeDropdownComponent());
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template.styles$MaterialTreeDropdownComponentHost*/get styles$MaterialTreeDropdownComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeDropdownComponent_0_5 = Symbol('_MaterialTreeDropdownComponent_0_5');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0 = class _ViewMaterialTreeDropdownComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTreeDropdownComponent_0_5] = new src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent.new(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialTreeDropdownComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeDropdownComponent()).new(0, this, this.rootEl, this[_MaterialTreeDropdownComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) || token === dart.wrapType(focus__focus.Focusable) || token === dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot)) && 0 === nodeIndex) {
        return this[_MaterialTreeDropdownComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialTreeDropdownComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTreeDropdownComponent_0_5] = null;
    src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0);
  dart.setMethodSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0),
    [_MaterialTreeDropdownComponent_0_5]: dart.fieldType(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)
  }));
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template.MaterialTreeDropdownComponentNgFactory*/get MaterialTreeDropdownComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeDropdownComponent()).new('material-tree-dropdown', src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0, src__material_tree__material_tree_dropdown$46template._MaterialTreeDropdownComponentMetadata));
    },
    /*src__material_tree__material_tree_dropdown$46template._MaterialTreeDropdownComponentMetadata*/get _MaterialTreeDropdownComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__material_tree_dropdown$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_dropdown$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_dropdown$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_dropdown$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), src__material_tree__material_tree_dropdown$46template.MaterialTreeDropdownComponentNgFactory);
    src__material_tree__material_tree_impl$46template.initReflector();
    angular$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    src__material_tree__material_tree_filter$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.fn(src__material_tree__material_tree_dropdown$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tree/material_tree_dropdown.template.ddc", {
    "package:angular_components/src/material_tree/material_tree_dropdown.template.dart": src__material_tree__material_tree_dropdown$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_dropdown.template.dart"],"names":[],"mappings":"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","file":"material_tree_dropdown.template.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_dropdown$46template: src__material_tree__material_tree_dropdown$46template
  };
});

//# sourceMappingURL=material_tree_dropdown.template.ddc.js.map
