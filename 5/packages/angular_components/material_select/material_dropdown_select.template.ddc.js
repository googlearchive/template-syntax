define(['dart_sdk', 'packages/angular_components/material_select/material_dropdown_select.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/src/laminate/popup/popup_source_directive', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/popup_ref', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular/src/common/directives/ng_if', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/material_select/material_select_dropdown_item.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_select/material_select_dropdown_item', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular/src/core/linker/dynamic_component_loader', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_select/activation_handler.template', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular_components/material_select/shift_click_selection.template', 'packages/angular_components/mixins/button_wrapper.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/mixins/track_layout_changes.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_dropdown_select$46scss$46css, view_type, constants, view, app_view_utils, material_popup, dropdown_button, dropdown_button$, dom_popup_source, reference, popup_source_directive, material_popup$, app_view, popup_hierarchy, ng_zone, overlay_service, zindexer, alignment, opaque_token, popup_size_provider, element_ref, deferred_content, deferred_content_aware, material_dropdown_base, popup_ref, material_dropdown_select, material_list, material_list$, ng_if, ng_for, material_select_dropdown_item, dom_service, keyboard_only_focus_indicator, activation_handler, material_select_dropdown_item$, selection_container, has_renderer, selection_options, dynamic_component, dynamic_component_loader, dynamic_component$, id_generator, reflector, angular, rtl_annotation, deferred_content$, deferred_content_aware$, keyboard_only_focus_indicator$, alignment$, popup, activation_handler$, material_select_base, shift_click_selection, button_wrapper, material_dropdown_base$, track_layout_changes, active_item, keyboard_handler_mixin, select, selection_container$, selection_model, selection_options$, has_factory, template_support, css, id_generator$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_dropdown_select$46scss$46css$46shim = material_dropdown_select$46scss$46css.material_select__material_dropdown_select$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const material_select__dropdown_button$46template = dropdown_button.material_select__dropdown_button$46template;
  const material_select__dropdown_button = dropdown_button$.material_select__dropdown_button;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const src__laminate__popup__popup_source_directive = popup_source_directive.src__laminate__popup__popup_source_directive;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
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
  const material_select__material_dropdown_select = material_dropdown_select.material_select__material_dropdown_select;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list = material_list$.material_list__material_list;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const material_select__material_select_dropdown_item$46template = material_select_dropdown_item.material_select__material_select_dropdown_item$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const material_select__material_select_dropdown_item = material_select_dropdown_item$.material_select__material_select_dropdown_item;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const dynamic_component__dynamic_component$46template = dynamic_component.dynamic_component__dynamic_component$46template;
  const src__core__linker__dynamic_component_loader = dynamic_component_loader.src__core__linker__dynamic_component_loader;
  const dynamic_component__dynamic_component = dynamic_component$.dynamic_component__dynamic_component;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const annotations__rtl_annotation$46template = rtl_annotation.annotations__rtl_annotation$46template;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_select__activation_handler$46template = activation_handler$.material_select__activation_handler$46template;
  const material_select__material_select_base$46template = material_select_base.material_select__material_select_base$46template;
  const material_select__shift_click_selection$46template = shift_click_selection.material_select__shift_click_selection$46template;
  const mixins__button_wrapper$46template = button_wrapper.mixins__button_wrapper$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const mixins__track_layout_changes$46template = track_layout_changes.mixins__track_layout_changes$46template;
  const model__a11y__active_item$46template = active_item.model__a11y__active_item$46template;
  const model__a11y__keyboard_handler_mixin$46template = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container$.model__selection__selection_container$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options$.model__selection__selection_options$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const model__ui__template_support$46template = template_support.model__ui__template_support$46template;
  const utils__angular__css__css$46template = css.utils__angular__css__css$46template;
  const utils__id_generator__id_generator$46template = id_generator$.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const material_select__material_dropdown_select$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $length = dartx.length;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let AppViewOfMaterialDropdownSelectComponent = () => (AppViewOfMaterialDropdownSelectComponent = dart.constFn(src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent)))();
  let AppViewAndintToAppViewOfMaterialDropdownSelectComponent = () => (AppViewAndintToAppViewOfMaterialDropdownSelectComponent = dart.constFn(dart.fnType(AppViewOfMaterialDropdownSelectComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let intAnddynamicToObject = () => (intAnddynamicToObject = dart.constFn(dart.fnType(core.Object, [core.int, dart.dynamic])))();
  let ComponentRefOfMaterialDropdownSelectComponent = () => (ComponentRefOfMaterialDropdownSelectComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialDropdownSelectComponent = () => (ComponentFactoryOfMaterialDropdownSelectComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__material_dropdown_select.MaterialDropdownSelectComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_select__material_dropdown_select$46template, {
    /*material_select__material_dropdown_select$46template.styles$MaterialDropdownSelectComponent*/get styles$MaterialDropdownSelectComponent() {
      return dart.constList([material_select__material_dropdown_select$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _DropdownButtonComponent_0_5 = Symbol('_DropdownButtonComponent_0_5');
  const _PopupSourceDirective_0_6 = Symbol('_PopupSourceDirective_0_6');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _appEl_2 = Symbol('_appEl_2');
  const _MaterialPopupComponent_2_8 = Symbol('_MaterialPopupComponent_2_8');
  const __PopupHierarchy_2_11 = Symbol('__PopupHierarchy_2_11');
  const __PopupRef_2_12 = Symbol('__PopupRef_2_12');
  const _el_3 = Symbol('_el_3');
  const _appEl_4 = Symbol('_appEl_4');
  const _DeferredContentDirective_4_9 = Symbol('_DeferredContentDirective_4_9');
  const _el_5 = Symbol('_el_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_9 = Symbol('_expr_9');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  const _expr_14 = Symbol('_expr_14');
  const _expr_15 = Symbol('_expr_15');
  const _expr_16 = Symbol('_expr_16');
  const _PopupHierarchy_2_11 = Symbol('_PopupHierarchy_2_11');
  const _PopupRef_2_12 = Symbol('_PopupRef_2_12');
  let const$;
  let const$0;
  let const$1;
  material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0 = class ViewMaterialDropdownSelectComponent0 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    get [_PopupHierarchy_2_11]() {
      if (this[__PopupHierarchy_2_11] == null) {
        this[__PopupHierarchy_2_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupHierarchy_2_11];
    }
    get [_PopupRef_2_12]() {
      if (this[__PopupRef_2_12] == null) {
        this[__PopupRef_2_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupRef_2_12];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.createAttr(this[_el_0], 'popupSource', '');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_DropdownButtonComponent_0_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
      this[_PopupSourceDirective_0_6] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_0]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)));
      let _text_1 = html.Text.new('\n   ');
      this[_compView_0].create(this[_DropdownButtonComponent_0_5], [(() => {
          let _ = [_text_1];
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](0)));
          return _;
        })()]);
      this[_compView_2] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      parentRenderNode[$append](this[_el_2]);
      this.createAttr(this[_el_2], 'enforceSpaceConstraints', '');
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, this[_el_2]);
      this[_MaterialPopupComponent_2_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions'))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_2].ref, this[_appEl_2], new src__core__linker__element_ref.ElementRef.new(this[_el_2]));
      let doc = html.document;
      this[_el_3] = html.DivElement._check(doc[$createElement]('div'));
      this.createAttr(this[_el_3], 'header', '');
      this.addShimC(this[_el_3]);
      this.project(this[_el_3], 1);
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent1);
      this[_DeferredContentDirective_4_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_4], _TemplateRef_4_8, this[_MaterialPopupComponent_2_8]);
      this[_el_5] = html.DivElement._check(doc[$createElement]('div'));
      this.createAttr(this[_el_5], 'footer', '');
      this.addShimC(this[_el_5]);
      this.project(this[_el_5], 5);
      this[_compView_2].create(this[_MaterialPopupComponent_2_8], [JSArrayOfDivElement().of([this[_el_3]]), JSArrayOfViewContainer().of([this[_appEl_4]]), JSArrayOfDivElement().of([this[_el_5]])]);
      this[_el_0][$addEventListener]('keydown', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      this[_el_0][$addEventListener]('keyup', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
      let subscription_0 = this[_DropdownButtonComponent_0_5].onFocus.listen(this.eventHandler1(html.FocusEvent, html.FocusEvent, dart.bind(this.ctx, 'onFocus')));
      let subscription_1 = this[_DropdownButtonComponent_0_5].onBlur.listen(this.eventHandler1(html.FocusEvent, html.FocusEvent, dart.bind(this.ctx, 'onBlur')));
      let subscription_2 = this[_DropdownButtonComponent_0_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'handleClick')));
      let subscription_3 = this[_MaterialPopupComponent_2_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this.ctx, 'onVisible')));
      this[_el_3][$addEventListener]('keydown', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
      this[_el_3][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      this[_el_3][$addEventListener]('keyup', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
      this[_el_5][$addEventListener]('keydown', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
      this[_el_5][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      this[_el_5][$addEventListener]('keyup', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2, subscription_3]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_select__dropdown_button.DropdownButtonComponent) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_DropdownButtonComponent_0_5];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_PopupSourceDirective_0_6];
      }
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_MaterialPopupComponent_2_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_PopupHierarchy_2_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_PopupRef_2_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_source = this[_PopupSourceDirective_0_6];
      changed = false;
      let currVal_0 = _ctx.buttonText;
      if (!(this[_expr_0] == currVal_0)) {
        this[_DropdownButtonComponent_0_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.buttonAriaLabel;
      if (!(this[_expr_1] == currVal_1)) {
        this[_DropdownButtonComponent_0_5].buttonAriaLabel = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (!(this[_expr_2] == currVal_2)) {
        this[_DropdownButtonComponent_0_5].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.icon;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_DropdownButtonComponent_0_5].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.iconName;
      if (!(this[_expr_4] == currVal_4)) {
        this[_DropdownButtonComponent_0_5].iconName = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.raised;
      if (!(this[_expr_5] == currVal_5)) {
        this[_DropdownButtonComponent_0_5].raised = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.error;
      if (!(this[_expr_6] == currVal_6)) {
        this[_DropdownButtonComponent_0_5].error = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.showButtonBorder;
      if (!(this[_expr_7] == currVal_7)) {
        this[_DropdownButtonComponent_0_5].showButtonBorder = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialPopupComponent_2_8].enforceSpaceConstraints = true;
      }
      let currVal_9 = _ctx.autoDismiss;
      if (!(this[_expr_9] == currVal_9)) {
        this[_MaterialPopupComponent_2_8].autoDismiss = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_11 = _ctx.popupMatchInputWidth;
      if (!(this[_expr_11] == currVal_11)) {
        this[_MaterialPopupComponent_2_8].matchMinSourceWidth = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.preferredPositions;
      if (!core.identical(this[_expr_12], currVal_12)) {
        this[_MaterialPopupComponent_2_8].preferredPositions = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = local_source;
      if (!core.identical(this[_expr_13], currVal_13)) {
        this[_MaterialPopupComponent_2_8].source = currVal_13;
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.trackLayoutChanges;
      if (!(this[_expr_14] == currVal_14)) {
        this[_MaterialPopupComponent_2_8].trackLayoutChanges = currVal_14;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.visible;
      if (!(this[_expr_15] == currVal_15)) {
        this[_MaterialPopupComponent_2_8].visible = currVal_15;
        this[_expr_15] = currVal_15;
      }
      let currVal_16 = _ctx.slide;
      if (!(this[_expr_16] == currVal_16)) {
        this[_MaterialPopupComponent_2_8].slide = currVal_16;
        this[_expr_16] = currVal_16;
      }
      if (firstCheck) {
        this[_DeferredContentDirective_4_9].preserveDimensions = true;
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      if (firstCheck) {
        if (!(_ctx.popupClassName == null)) {
          this[_compView_2].updateChildClass(this[_el_2], _ctx.popupClassName);
        }
      }
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_2].detectChanges();
      if (firstCheck) {
        this[_PopupSourceDirective_0_6].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_MaterialPopupComponent_2_8].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_4];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_2];
      t$1 == null ? null : t$1.destroy();
      this[_PopupSourceDirective_0_6].ngOnDestroy();
      this[_DeferredContentDirective_4_9].ngOnDestroy();
      this[_MaterialPopupComponent_2_8].ngOnDestroy();
    }
  };
  (material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_DropdownButtonComponent_0_5] = null;
    this[_PopupSourceDirective_0_6] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_appEl_2] = null;
    this[_MaterialPopupComponent_2_8] = null;
    this[__PopupHierarchy_2_11] = null;
    this[__PopupRef_2_12] = null;
    this[_el_3] = null;
    this[_appEl_4] = null;
    this[_DeferredContentDirective_4_9] = null;
    this[_el_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_9] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_expr_16] = null;
    material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-dropdown-select'));
    let t = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
    t == null ? material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_select__material_dropdown_select$46template.styles$MaterialDropdownSelectComponent) : t;
    this.setupComponentType(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType);
  }).prototype = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0);
  dart.setMethodSignature(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, () => ({
    __proto__: dart.getGetters(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.__proto__),
    [_PopupHierarchy_2_11]: dart.fnType(dart.dynamic, []),
    [_PopupRef_2_12]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_0_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    [_PopupSourceDirective_0_6]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_2_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_2_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_2_12]: dart.fieldType(dart.dynamic),
    [_el_3]: dart.fieldType(html.DivElement),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_4_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_el_5]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.String),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.String),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(core.bool),
    [_expr_15]: dart.fieldType(core.bool),
    [_expr_16]: dart.fieldType(core.String)
  }));
  dart.defineLazy(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, {
    /*material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent0 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent0, AppViewAndintToAppViewOfMaterialDropdownSelectComponent());
  const _MaterialListComponent_0_5 = Symbol('_MaterialListComponent_0_5');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _handle_mouseout_0_3 = Symbol('_handle_mouseout_0_3');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1 = class _ViewMaterialDropdownSelectComponent1 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      this[_compView_0] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'options-list';
      this.createAttr(this[_el_0], 'tabIndex', '-1');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialListComponent_0_5] = new material_list__material_list.MaterialListComponent.new();
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent2);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_compView_0].create(this[_MaterialListComponent_0_5], [(() => {
          let _ = [this.projectableNodes[$_get](2)];
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](3)));
          _[$addAll]([this[_appEl_1]]);
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](4)));
          return _;
        })()]);
      this[_el_0][$addEventListener]('keydown', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      this[_el_0][$addEventListener]('keyup', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
      this[_el_0][$addEventListener]('mouseout', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseout_0_3)));
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_list__material_list.MaterialListComponent) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.width;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialListComponent_0_5].width = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_NgIf_1_9].ngIf = _ctx.options != null;
      this[_appEl_1].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
    }
    [_handle_mouseout_0_3]($event) {
      this.ctx.activeModel.activate(null);
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialListComponent_0_5] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_mouseout_0_3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_0_5]: dart.fieldType(material_list__material_list.MaterialListComponent),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent1 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent1, AppViewAndintToAppViewOfMaterialDropdownSelectComponent());
  const _NgFor_2_9 = Symbol('_NgFor_2_9');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2 = class _ViewMaterialDropdownSelectComponent2 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'options-wrapper';
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent3);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent4);
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      this[_NgIf_1_9].ngIf = _ctx.showDeselectItem;
      if (firstCheck) {
        if (!(_ctx.trackByIndexFn == null)) {
          this[_NgFor_2_9].ngForTrackBy = intAnddynamicToObject()._check(_ctx.trackByIndexFn);
        }
      }
      let currVal_1 = _ctx.options.optionGroups;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_NgFor_2_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_NgFor_2_9].ngDoCheck();
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_1] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent2 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent2, AppViewAndintToAppViewOfMaterialDropdownSelectComponent());
  const _KeyboardOnlyFocusIndicatorDirective_0_5 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_5');
  const _MaterialSelectDropdownItemComponent_0_6 = Symbol('_MaterialSelectDropdownItemComponent_0_6');
  let const$2;
  const _handle_mouseenter_0_1 = Symbol('_handle_mouseenter_0_1');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3 = class _ViewMaterialDropdownSelectComponent3 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'keyboardOnlyFocusIndicator', '');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.viewData.parentIndex)));
      this[_MaterialSelectDropdownItemComponent_0_6] = new material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.viewData.parentIndex)), null, material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.as(this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_6], [const$2 || (const$2 = dart.constList([], dart.dynamic))]);
      this[_el_0][$addEventListener]('mouseenter', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseenter_0_1)));
      this[_el_0][$addEventListener]('keyup', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0][$addEventListener]('mousedown', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
      this[_el_0][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
      let subscription_0 = this[_MaterialSelectDropdownItemComponent_0_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'deselectCurrentSelection')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective) && 0 === nodeIndex) {
        return this[_KeyboardOnlyFocusIndicatorDirective_0_5];
      }
      if ((token === dart.wrapType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent) || token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
        return this[_MaterialSelectDropdownItemComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_popup = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.as(this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8];
      let currVal_2 = dart.test(local_popup.showPopup) && dart.test(_ctx.activeModel.isActive(_ctx.deselectLabel));
      if (!(this[_expr_2] === currVal_2)) {
        this[_MaterialSelectDropdownItemComponent_0_6].active = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.deselectLabel;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_MaterialSelectDropdownItemComponent_0_6].value = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.isDeselectItemSelected;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_MaterialSelectDropdownItemComponent_0_6].selected = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_0 = _ctx.options.optionGroups[$length] === 1;
      if (!(this[_expr_0] === currVal_0)) {
        this.updateElemClass(this[_el_0], 'empty', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.activeModel.id(_ctx.deselectLabel);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this[_el_0], 'id', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialSelectDropdownItemComponent_0_6].ngOnDestroy();
    }
    [_handle_mouseenter_0_1]($event) {
      this.ctx.activeModel.activate(this.ctx.deselectLabel);
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
    this[_MaterialSelectDropdownItemComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_mouseenter_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0),
    [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_MaterialSelectDropdownItemComponent_0_6]: dart.fieldType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent3 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent3, AppViewAndintToAppViewOfMaterialDropdownSelectComponent());
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4 = class _ViewMaterialDropdownSelectComponent4 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.createAttr(this[_el_0], 'group', '');
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent5);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]('$implicit'));
      this[_NgIf_1_9].ngIf = dart.test(local_group.isNotEmpty) || dart.test(local_group.hasEmptyLabel);
      this[_appEl_1].detectChangesInNestedViews();
      let currVal_0 = dart.test(local_group.isEmpty) && !dart.test(local_group.hasEmptyLabel);
      if (!(this[_expr_0] === currVal_0)) {
        this.updateClass(this[_el_0], 'empty', currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent4 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent4, AppViewAndintToAppViewOfMaterialDropdownSelectComponent());
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5 = class _ViewMaterialDropdownSelectComponent5 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent6);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent7);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent8);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent10);
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this.init([this[_appEl_0], this[_appEl_1], this[_appEl_2], this[_appEl_3]], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.locals[$_get]('$implicit'));
      this[_NgIf_0_9].ngIf = dart.test(local_group.hasLabel) && !dart.test(_ctx.hasCustomLabelRenderer);
      this[_NgIf_1_9].ngIf = _ctx.hasCustomLabelRenderer;
      this[_NgIf_2_9].ngIf = local_group.isNotEmpty;
      this[_NgIf_3_9].ngIf = dart.test(local_group.isEmpty) && dart.test(local_group.hasEmptyLabel);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_2];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_3];
      t$1 == null ? null : t$1.destroyNestedViews();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent5 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent5, AppViewAndintToAppViewOfMaterialDropdownSelectComponent());
  const _text_1 = Symbol('_text_1');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6 = class _ViewMaterialDropdownSelectComponent6 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this.createAttr(this[_el_0], 'label', '');
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.parentView.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_group.uiDisplayName);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent6 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent6, AppViewAndintToAppViewOfMaterialDropdownSelectComponent());
  const _DynamicComponent_0_8 = Symbol('_DynamicComponent_0_8');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7 = class _ViewMaterialDropdownSelectComponent7 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_DynamicComponent_0_8] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]);
      this[_compView_0].create(this[_DynamicComponent_0_8], []);
      this.init0(this[_appEl_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(dynamic_component__dynamic_component.DynamicComponent) && 0 === nodeIndex) {
        return this[_DynamicComponent_0_8];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.parentView.locals[$_get]('$implicit'));
      changed = false;
      let currVal_0 = _ctx.labelRenderer != null ? dart.dsend(_ctx, 'labelRenderer', local_group) : null;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_DynamicComponent_0_8].componentType = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.labelFactory != null ? dart.dsend(_ctx, 'labelFactory', local_group) : null;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_DynamicComponent_0_8].componentFactory = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = local_group;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_DynamicComponent_0_8].value = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8].ngAfterChanges();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8].ngOnDestroy();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_DynamicComponent_0_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent7 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent7, AppViewAndintToAppViewOfMaterialDropdownSelectComponent());
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8 = class _ViewMaterialDropdownSelectComponent8 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent9);
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init0(this[_appEl_0]);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.parentView.locals[$_get]('$implicit'));
      let currVal_0 = local_group;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_0_9].ngDoCheck();
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent8 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent8, AppViewAndintToAppViewOfMaterialDropdownSelectComponent());
  const _expr_8 = Symbol('_expr_8');
  let const$3;
  const _handle_mouseenter_0_0 = Symbol('_handle_mouseenter_0_0');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9 = class _ViewMaterialDropdownSelectComponent9 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'keyboardOnlyFocusIndicator', '');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)));
      this[_MaterialSelectDropdownItemComponent_0_6] = new material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.as(this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_6], [const$3 || (const$3 = dart.constList([], dart.dynamic))]);
      this[_el_0][$addEventListener]('mouseenter', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseenter_0_0)));
      this[_el_0][$addEventListener]('keyup', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0][$addEventListener]('mousedown', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
      this[_el_0][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective) && 0 === nodeIndex) {
        return this[_KeyboardOnlyFocusIndicatorDirective_0_5];
      }
      if ((token === dart.wrapType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent) || token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
        return this[_MaterialSelectDropdownItemComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_item = this.locals[$_get]('$implicit');
      let local_popup = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.as(this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8];
      let currVal_1 = dart.test(local_popup.showPopup) && dart.test(_ctx.activeModel.isActive(local_item));
      if (!(this[_expr_1] === currVal_1)) {
        this[_MaterialSelectDropdownItemComponent_0_6].active = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.isOptionDisabled(local_item);
      if (!(this[_expr_2] == currVal_2)) {
        this[_MaterialSelectDropdownItemComponent_0_6].disabled = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.componentRenderer;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_MaterialSelectDropdownItemComponent_0_6].componentRenderer = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.factoryRenderer;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_MaterialSelectDropdownItemComponent_0_6].factoryRenderer = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.isOptionHidden(local_item);
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_MaterialSelectDropdownItemComponent_0_6].isHidden = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = local_item;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_MaterialSelectDropdownItemComponent_0_6].value = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.itemRenderer;
      if (!core.identical(this[_expr_7], currVal_7)) {
        this[_MaterialSelectDropdownItemComponent_0_6].itemRenderer = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.deselectOnActivate;
      if (!(this[_expr_8] == currVal_8)) {
        this[_MaterialSelectDropdownItemComponent_0_6].deselectOnActivate = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.selection;
      if (!core.identical(this[_expr_9], currVal_9)) {
        this[_MaterialSelectDropdownItemComponent_0_6].selection = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_0 = _ctx.activeModel.id(local_item);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this[_el_0], 'id', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialSelectDropdownItemComponent_0_6].ngOnDestroy();
    }
    [_handle_mouseenter_0_0]($event) {
      let local_item = this.locals[$_get]('$implicit');
      this.ctx.activeModel.activate(local_item);
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
    this[_MaterialSelectDropdownItemComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_mouseenter_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0),
    [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_MaterialSelectDropdownItemComponent_0_6]: dart.fieldType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent9 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent9, AppViewAndintToAppViewOfMaterialDropdownSelectComponent());
  let const$4;
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10 = class _ViewMaterialDropdownSelectComponent10 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'keyboardOnlyFocusIndicator', '');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)));
      this[_MaterialSelectDropdownItemComponent_0_6] = new material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.as(this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_6], [const$4 || (const$4 = dart.constList([], dart.dynamic))]);
      this[_el_0][$addEventListener]('keyup', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
      this[_el_0][$addEventListener]('mousedown', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
      this[_el_0][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective) && 0 === nodeIndex) {
        return this[_KeyboardOnlyFocusIndicatorDirective_0_5];
      }
      if ((token === dart.wrapType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent) || token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
        return this[_MaterialSelectDropdownItemComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.parentView.locals[$_get]('$implicit'));
      if (firstCheck) {
        this[_MaterialSelectDropdownItemComponent_0_6].disabled = true;
      }
      let currVal_1 = local_group.emptyLabel;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_MaterialSelectDropdownItemComponent_0_6].value = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialSelectDropdownItemComponent_0_6].ngOnDestroy();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
    this[_MaterialSelectDropdownItemComponent_0_6] = null;
    this[_expr_1] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0),
    [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_MaterialSelectDropdownItemComponent_0_6]: dart.fieldType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent10 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent10, AppViewAndintToAppViewOfMaterialDropdownSelectComponent());
  dart.defineLazy(material_select__material_dropdown_select$46template, {
    /*material_select__material_dropdown_select$46template.styles$MaterialDropdownSelectComponentHost*/get styles$MaterialDropdownSelectComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialDropdownSelectComponent_0_5 = Symbol('_MaterialDropdownSelectComponent_0_5');
  let const$5;
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0 = class _ViewMaterialDropdownSelectComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDropdownSelectComponent_0_5] = new material_select__material_dropdown_select.MaterialDropdownSelectComponent.new(utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), core.bool._check(this.injectorGet(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('isRtl'))), this.viewData.parentIndex, null)), null, this.rootEl);
      this[_compView_0].create(this[_MaterialDropdownSelectComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialDropdownSelectComponent()).new(0, this, this.rootEl, this[_MaterialDropdownSelectComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_select__material_dropdown_select.MaterialDropdownSelectComponent) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(model__selection__selection_container.SelectionContainer) || token === dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider) || token === dart.wrapType(material_select__activation_handler.ActivationHandler)) && 0 === nodeIndex) {
        return this[_MaterialDropdownSelectComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changes = null;
      changes = null;
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialDropdownSelectComponent_0_5].ngOnDestroy();
    }
  };
  (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDropdownSelectComponent_0_5] = null;
    material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0.prototype;
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0);
  dart.setMethodSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0),
    [_MaterialDropdownSelectComponent_0_5]: dart.fieldType(material_select__material_dropdown_select.MaterialDropdownSelectComponent)
  }));
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponentHost0 = function(parentView, parentIndex) {
    return new material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_select__material_dropdown_select$46template, {
    /*material_select__material_dropdown_select$46template.MaterialDropdownSelectComponentNgFactory*/get MaterialDropdownSelectComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialDropdownSelectComponent()).new('material-dropdown-select', material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponentHost0, material_select__material_dropdown_select$46template._MaterialDropdownSelectComponentMetadata));
    },
    /*material_select__material_dropdown_select$46template._MaterialDropdownSelectComponentMetadata*/get _MaterialDropdownSelectComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_select__material_dropdown_select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_dropdown_select$46template.initReflector = function() {
    if (dart.test(material_select__material_dropdown_select$46template._visited)) {
      return;
    }
    material_select__material_dropdown_select$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__material_dropdown_select.MaterialDropdownSelectComponent), material_select__material_dropdown_select$46template.MaterialDropdownSelectComponentNgFactory);
    angular$46template.initReflector();
    annotations__rtl_annotation$46template.initReflector();
    content__deferred_content$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_list__material_list$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_select__activation_handler$46template.initReflector();
    material_select__dropdown_button$46template.initReflector();
    material_select__material_select_base$46template.initReflector();
    material_select__material_select_dropdown_item$46template.initReflector();
    material_select__shift_click_selection$46template.initReflector();
    mixins__button_wrapper$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    mixins__track_layout_changes$46template.initReflector();
    model__a11y__active_item$46template.initReflector();
    model__a11y__keyboard_handler_mixin$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    model__ui__template_support$46template.initReflector();
    utils__angular__css__css$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.fn(material_select__material_dropdown_select$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select.template.ddc", {
    "package:angular_components/material_select/material_dropdown_select.template.dart": material_select__material_dropdown_select$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select.template.dart"],"names":[],"mappings":"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","file":"material_dropdown_select.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select$46template: material_select__material_dropdown_select$46template
  };
});

//# sourceMappingURL=material_dropdown_select.template.ddc.js.map
