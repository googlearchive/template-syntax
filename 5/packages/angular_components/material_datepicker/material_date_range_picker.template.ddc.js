define(['dart_sdk', 'packages/angular_components/material_datepicker/material_date_range_picker.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/src/laminate/popup/popup_source_directive', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/popup_ref', 'packages/angular_components/material_datepicker/material_date_range_picker', 'packages/angular_components/material_datepicker/next_prev_buttons.template', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/material_datepicker/date_range_editor.template', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/quiver/time', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/preset.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/date_formatter.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_date_range_picker$46scss$46css, view_type, constants, view, app_view_utils, material_popup, app_view, button_decorator, button_decorator$, dom_service, keyboard_only_focus_indicator, dom_popup_source, reference, popup_source_directive, ng_if, dropdown_button, dropdown_button$, material_popup$, popup_hierarchy, ng_zone, overlay_service, zindexer, alignment, opaque_token, popup_size_provider, element_ref, deferred_content_aware, material_dropdown_base, popup_ref, material_date_range_picker, next_prev_buttons, next_prev_buttons$, focus_trap, focus_trap$, date_range_editor, managed_zone, date_range_editor$, time, material_button, dark_theme, material_button$, reflector, angular, deferred_content, keyboard_only_focus_indicator$, glyph, alignment$, popup, comparison, module, preset, range, keyboard_handler_mixin, date, date_formatter, observable, properties, dom_service$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_date_range_picker$46scss$46css$46shim = material_date_range_picker$46scss$46css.material_datepicker__material_date_range_picker$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const src__laminate__popup__popup_source_directive = popup_source_directive.src__laminate__popup__popup_source_directive;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_select__dropdown_button$46template = dropdown_button.material_select__dropdown_button$46template;
  const material_select__dropdown_button = dropdown_button$.material_select__dropdown_button;
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
  const material_datepicker__material_date_range_picker = material_date_range_picker.material_datepicker__material_date_range_picker;
  const material_datepicker__next_prev_buttons$46template = next_prev_buttons.material_datepicker__next_prev_buttons$46template;
  const material_datepicker__next_prev_buttons = next_prev_buttons$.material_datepicker__next_prev_buttons;
  const focus__focus_trap$46template = focus_trap.focus__focus_trap$46template;
  const focus__focus_trap = focus_trap$.focus__focus_trap;
  const material_datepicker__date_range_editor$46template = date_range_editor.material_datepicker__date_range_editor$46template;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const material_datepicker__date_range_editor = date_range_editor$.material_datepicker__date_range_editor;
  const time$ = time.time;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const content__deferred_content$46template = deferred_content.content__deferred_content$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_datepicker__comparison$46template = comparison.material_datepicker__comparison$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const material_datepicker__preset$46template = preset.material_datepicker__preset$46template;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const model__a11y__keyboard_handler_mixin$46template = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const model__date__date_formatter$46template = date_formatter.model__date__date_formatter$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_datepicker__material_date_range_picker$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $isNotEmpty = dartx.isNotEmpty;
  const $text = dartx.text;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let AppViewOfMaterialDateRangePickerComponent = () => (AppViewOfMaterialDateRangePickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent)))();
  let AppViewAndintToAppViewOfMaterialDateRangePickerComponent = () => (AppViewAndintToAppViewOfMaterialDateRangePickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialDateRangePickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let ComponentRefOfMaterialDateRangePickerComponent = () => (ComponentRefOfMaterialDateRangePickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialDateRangePickerComponent = () => (ComponentFactoryOfMaterialDateRangePickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__material_date_range_picker$46template, {
    /*material_datepicker__material_date_range_picker$46template.styles$MaterialDateRangePickerComponent*/get styles$MaterialDateRangePickerComponent() {
      return dart.constList([material_datepicker__material_date_range_picker$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_focusOnClose_1_0_isDirty = Symbol('_query_focusOnClose_1_0_isDirty');
  const _query_MaterialPopupComponent_1_1_isDirty = Symbol('_query_MaterialPopupComponent_1_1_isDirty');
  const _el_0 = Symbol('_el_0');
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_6');
  const _PopupSourceDirective_0_7 = Symbol('_PopupSourceDirective_0_7');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _DropdownButtonComponent_3_5 = Symbol('_DropdownButtonComponent_3_5');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _el_6 = Symbol('_el_6');
  const _compView_6 = Symbol('_compView_6');
  const _appEl_6 = Symbol('_appEl_6');
  const _MaterialPopupComponent_6_8 = Symbol('_MaterialPopupComponent_6_8');
  const __PopupHierarchy_6_11 = Symbol('__PopupHierarchy_6_11');
  const __PopupRef_6_12 = Symbol('__PopupRef_6_12');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _PopupHierarchy_6_11 = Symbol('_PopupHierarchy_6_11');
  const _PopupRef_6_12 = Symbol('_PopupRef_6_12');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  const _handle_click_0_3 = Symbol('_handle_click_0_3');
  let const$4;
  material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0 = class ViewMaterialDateRangePickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    get [_PopupHierarchy_6_11]() {
      if (this[__PopupHierarchy_6_11] == null) {
        this[__PopupHierarchy_6_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_6_8]);
      }
      return this[__PopupHierarchy_6_11];
    }
    get [_PopupRef_6_12]() {
      if (this[__PopupRef_6_12] == null) {
        this[__PopupRef_6_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_6_8]);
      }
      return this[__PopupRef_6_12];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_0], 'buttonDecorator', '');
      this[_el_0].className = 'main-content';
      this.createAttr(this[_el_0], 'keyboardOnlyFocusIndicator', '');
      this.createAttr(this[_el_0], 'popupSource', '');
      this.createAttr(this[_el_0], 'role', 'button');
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_PopupSourceDirective_0_7] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_el_0], utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)));
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_el_2] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0]);
      this[_el_2].className = 'main-line';
      this.addShimE(this[_el_2]);
      this[_compView_3] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      this[_el_2][$append](this[_el_3]);
      this[_el_3].className = 'menu-lookalike primary-range';
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_DropdownButtonComponent_3_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
      this[_compView_3].create(this[_DropdownButtonComponent_3_5], [const$ || (const$ = dart.constList([], dart.dynamic))]);
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_2][$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2);
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3);
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this[_compView_6] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 6);
      this[_el_6] = this[_compView_6].rootEl;
      parentRenderNode[$append](this[_el_6]);
      this.createAttr(this[_el_6], 'enforceSpaceConstraints', '');
      this.addShimC(html.HtmlElement._check(this[_el_6]));
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, this[_el_6]);
      this[_MaterialPopupComponent_6_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions'))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_6].ref, this[_appEl_6], new src__core__linker__element_ref.ElementRef.new(this[_el_6]));
      let _anchor_7 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 6, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4);
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this[_compView_6].create(this[_MaterialPopupComponent_6_8], [const$2 || (const$2 = dart.constList([], dart.dynamic)), JSArrayOfViewContainer().of([this[_appEl_7]]), const$3 || (const$3 = dart.constList([], dart.dynamic))]);
      this[_el_0][$addEventListener]('focus', this.eventHandler0(html.Event, dart.bind(this.ctx, 'initEditor')));
      this[_el_0][$addEventListener]('mouseenter', this.eventHandler0(html.Event, dart.bind(this.ctx, 'initEditor')));
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_3)));
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]('keyup', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]('mousedown', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'open')));
      let subscription_1 = this[_MaterialPopupComponent_6_8].onOpen.listen(this.eventHandler0(core.Null, dart.bind(this.ctx, 'open')));
      let subscription_2 = this[_MaterialPopupComponent_6_8].onClose.listen(this.eventHandler0(core.Null, dart.bind(this.ctx, 'close')));
      this.ctx.focusOnClose = this[_KeyboardOnlyFocusIndicatorDirective_0_6];
      this.ctx.popup = this[_MaterialPopupComponent_6_8];
      this.init(const$4 || (const$4 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_select__dropdown_button.DropdownButtonComponent) && 3 === nodeIndex) {
        return this[_DropdownButtonComponent_3_5];
      }
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_ButtonDirective_0_5].instance;
      }
      if (token === dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_KeyboardOnlyFocusIndicatorDirective_0_6];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_PopupSourceDirective_0_7];
      }
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_MaterialPopupComponent_6_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_PopupHierarchy_6_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_PopupRef_6_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_button = this[_PopupSourceDirective_0_7];
      this[_NgIf_1_9].ngIf = dart.test(_ctx.hasTitle) && dart.test(_ctx.presets[$isNotEmpty]);
      changed = false;
      let currVal_1 = _ctx.formattedRange;
      if (!(this[_expr_1] == currVal_1)) {
        this[_DropdownButtonComponent_3_5].buttonText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (!(this[_expr_2] == currVal_2)) {
        this[_DropdownButtonComponent_3_5].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.error;
      if (!(this[_expr_3] == currVal_3)) {
        this[_DropdownButtonComponent_3_5].error = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_NgIf_4_9].ngIf = _ctx.showNextPrevButtons;
      this[_NgIf_5_9].ngIf = _ctx.hasComparison;
      if (firstCheck) {
        this[_MaterialPopupComponent_6_8].enforceSpaceConstraints = true;
      }
      let currVal_7 = _ctx.overlapAlignments;
      if (!core.identical(this[_expr_7], currVal_7)) {
        this[_MaterialPopupComponent_6_8].preferredPositions = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = local_button;
      if (!core.identical(this[_expr_8], currVal_8)) {
        this[_MaterialPopupComponent_6_8].source = currVal_8;
        this[_expr_8] = currVal_8;
      }
      this[_NgIf_7_9].ngIf = _ctx.isEditorCreated;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      this[_compView_6].detectHostChanges(firstCheck);
      this[_compView_3].detectChanges();
      this[_compView_6].detectChanges();
      if (firstCheck) {
        this[_PopupSourceDirective_0_7].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_MaterialPopupComponent_6_8].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_4];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_5];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_6];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_7];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_compView_3];
      t$3 == null ? null : t$3.destroy();
      let t$4 = this[_compView_6];
      t$4 == null ? null : t$4.destroy();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_MaterialPopupComponent_6_8].ngOnDestroy();
    }
    [_handle_click_0_3]($event) {
      this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].hideOutline();
    }
    detectHostChanges(firstCheck) {
      let currVal_10 = this.ctx.compact;
      if (!(this[_expr_10] == currVal_10)) {
        this.updateElemClass(this.rootEl, 'compact', currVal_10);
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = this.ctx.disabled;
      if (!(this[_expr_11] == currVal_11)) {
        this.updateElemClass(this.rootEl, 'disabled', currVal_11);
        this[_expr_11] = currVal_11;
      }
    }
  };
  (material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new = function(parentView, parentIndex) {
    this[_query_focusOnClose_1_0_isDirty] = true;
    this[_query_MaterialPopupComponent_1_1_isDirty] = true;
    this[_el_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_DropdownButtonComponent_3_5] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_el_6] = null;
    this[_compView_6] = null;
    this[_appEl_6] = null;
    this[_MaterialPopupComponent_6_8] = null;
    this[__PopupHierarchy_6_11] = null;
    this[__PopupRef_6_12] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-date-range-picker'));
    let t = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType;
    t == null ? material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__material_date_range_picker$46template.styles$MaterialDateRangePickerComponent) : t;
    this.setupComponentType(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType);
  }).prototype = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_0_3]: dart.fnType(dart.void, [dart.dynamic]),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setGetterSignature(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getGetters(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    [_PopupHierarchy_6_11]: dart.fnType(dart.dynamic, []),
    [_PopupRef_6_12]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    [_query_focusOnClose_1_0_isDirty]: dart.fieldType(core.bool),
    [_query_MaterialPopupComponent_1_1_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_PopupSourceDirective_0_7]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_2]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_3_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_6]: dart.fieldType(html.Element),
    [_compView_6]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_6_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_6_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_6_12]: dart.fieldType(dart.dynamic),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.String),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, {
    /*material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent0, AppViewAndintToAppViewOfMaterialDateRangePickerComponent());
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1 = class _ViewMaterialDateRangePickerComponent1 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'range-title';
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.rangeTitle;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType;
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1, AppViewAndintToAppViewOfMaterialDateRangePickerComponent());
  const _compView_0 = Symbol('_compView_0');
  const _NextPrevComponent_0_5 = Symbol('_NextPrevComponent_0_5');
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2 = class _ViewMaterialDateRangePickerComponent2 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      this[_compView_0] = new material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'next-prev-buttons';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_NextPrevComponent_0_5] = new material_datepicker__next_prev_buttons.NextPrevComponent.new(this[_compView_0].ref);
      this[_compView_0].create(this[_NextPrevComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__next_prev_buttons.NextPrevComponent) && 0 === nodeIndex) {
        return this[_NextPrevComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(_ctx.model == null)) {
          this[_NextPrevComponent_0_5].model = _ctx.model;
          changed = true;
        }
      }
      let currVal_0 = _ctx.disabled;
      if (!(this[_expr_0] == currVal_0)) {
        this[_NextPrevComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_NextPrevComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_NextPrevComponent_0_5] = null;
    this[_expr_0] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType;
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0),
    [_NextPrevComponent_0_5]: dart.fieldType(material_datepicker__next_prev_buttons.NextPrevComponent),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2, AppViewAndintToAppViewOfMaterialDateRangePickerComponent());
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3 = class _ViewMaterialDateRangePickerComponent3 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'comparison-title';
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.formattedComparison;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType;
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3, AppViewAndintToAppViewOfMaterialDateRangePickerComponent());
  const _FocusTrapComponent_0_5 = Symbol('_FocusTrapComponent_0_5');
  const _query_AutoFocusDirective_0_0_isDirty = Symbol('_query_AutoFocusDirective_0_0_isDirty');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _DateRangeEditorComponent_1_5 = Symbol('_DateRangeEditorComponent_1_5');
  const _el_5 = Symbol('_el_5');
  const _compView_5 = Symbol('_compView_5');
  const _AcxDarkTheme_5_5 = Symbol('_AcxDarkTheme_5_5');
  const _MaterialButtonComponent_5_6 = Symbol('_MaterialButtonComponent_5_6');
  const _text_6 = Symbol('_text_6');
  const _el_7 = Symbol('_el_7');
  const _compView_7 = Symbol('_compView_7');
  const _AcxDarkTheme_7_5 = Symbol('_AcxDarkTheme_7_5');
  const _MaterialButtonComponent_7_6 = Symbol('_MaterialButtonComponent_7_6');
  const _text_8 = Symbol('_text_8');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_9 = Symbol('_expr_9');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  const _expr_14 = Symbol('_expr_14');
  const _expr_15 = Symbol('_expr_15');
  let const$5;
  let const$6;
  let const$7;
  const _handle_trigger_5_0 = Symbol('_handle_trigger_5_0');
  const _handle_trigger_7_0 = Symbol('_handle_trigger_7_0');
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4 = class _ViewMaterialDateRangePickerComponent4 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      this[_compView_0] = new focus__focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'popup-contents';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_FocusTrapComponent_0_5] = new focus__focus_trap.FocusTrapComponent.new();
      this[_compView_1] = new material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_DateRangeEditorComponent_1_5] = new material_datepicker__date_range_editor.DateRangeEditorComponent.new(new src__core__linker__element_ref.ElementRef.new(this[_el_1]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), src__utils__angular__managed_zone__managed_zone.ManagedZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), this.parentView.viewData.parentIndex)), material_datepicker__date_range_editor.DateRangeEditorHost._check(this.parentView.parentView.injectorGet(dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorHost), this.parentView.viewData.parentIndex, null)), time$.Clock._check(this.parentView.parentView.injectorGet(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.parentView.viewData.parentIndex, null)), time$.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time$.Clock), this.parentView.viewData.parentIndex)));
      this[_compView_1].create(this[_DateRangeEditorComponent_1_5], []);
      let doc = html.document;
      this[_el_2] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_2].className = 'apply-bar';
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this[_el_3].className = 'separator';
      this.addShimC(this[_el_3]);
      let _text_4 = html.Text.new(' ');
      this[_el_3][$append](_text_4);
      this[_compView_5] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 5);
      this[_el_5] = this[_compView_5].rootEl;
      this[_el_2][$append](this[_el_5]);
      this[_el_5].className = 'cancel';
      this.addShimC(html.HtmlElement._check(this[_el_5]));
      this[_AcxDarkTheme_5_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$6 || (const$6 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('acxDarkTheme'))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_5_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_5]), this[_AcxDarkTheme_5_5], this[_compView_5].ref);
      this[_text_6] = html.Text.new('');
      this[_compView_5].create(this[_MaterialButtonComponent_5_6], [JSArrayOfText().of([this[_text_6]])]);
      this[_compView_7] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 7);
      this[_el_7] = this[_compView_7].rootEl;
      this[_el_2][$append](this[_el_7]);
      this[_el_7].className = 'apply';
      this.addShimC(html.HtmlElement._check(this[_el_7]));
      this[_AcxDarkTheme_7_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('acxDarkTheme'))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_7_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_7]), this[_AcxDarkTheme_7_5], this[_compView_7].ref);
      this[_text_8] = html.Text.new('');
      this[_compView_7].create(this[_MaterialButtonComponent_7_6], [JSArrayOfText().of([this[_text_8]])]);
      this[_compView_0].create(this[_FocusTrapComponent_0_5], [(() => {
          let _ = [this[_el_1]];
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](0)));
          _[$addAll]([this[_el_2]]);
          return _;
        })()]);
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      this[_el_0][$addEventListener]('keydown', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
      this[_el_0][$addEventListener]('keyup', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
      let subscription_0 = this[_DateRangeEditorComponent_1_5].presetRangeSelected.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'onRangeClicked')));
      let subscription_1 = this[_MaterialButtonComponent_5_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_5_0)));
      let subscription_2 = this[_MaterialButtonComponent_7_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_7_0)));
      this.init([this[_el_0]], [subscription_0, subscription_1, subscription_2]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorComponent) && 1 === nodeIndex) {
        return this[_DateRangeEditorComponent_1_5];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_AcxDarkTheme_5_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective)) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_MaterialButtonComponent_5_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_AcxDarkTheme_7_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective)) && 7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_MaterialButtonComponent_7_6];
      }
      if (token === dart.wrapType(focus__focus_trap.FocusTrapComponent) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_FocusTrapComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (!(_ctx.model == null)) {
          this[_DateRangeEditorComponent_1_5].model = _ctx.model;
        }
      }
      let currVal_2 = _ctx.supportsClearRange;
      if (!(this[_expr_2] == currVal_2)) {
        this[_DateRangeEditorComponent_1_5].supportsClearRange = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.supportsCustomRange;
      if (!(this[_expr_3] == currVal_3)) {
        this[_DateRangeEditorComponent_1_5].supportsCustomRange = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.relativeDaysToToday;
      if (!(this[_expr_4] == currVal_4)) {
        this[_DateRangeEditorComponent_1_5].relativeDaysToToday = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.allowHighlightUpdates;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_DateRangeEditorComponent_1_5].allowHighlightUpdates = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.supportsComparison;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_DateRangeEditorComponent_1_5].supportsComparison = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.compact;
      if (!core.identical(this[_expr_7], currVal_7)) {
        this[_DateRangeEditorComponent_1_5].compact = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.supportsDaysInputs;
      if (!core.identical(this[_expr_8], currVal_8)) {
        this[_DateRangeEditorComponent_1_5].supportsDaysInputs = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.presets;
      if (!core.identical(this[_expr_9], currVal_9)) {
        this[_DateRangeEditorComponent_1_5].presets = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.minDate;
      if (!core.identical(this[_expr_10], currVal_10)) {
        this[_DateRangeEditorComponent_1_5].minDate = currVal_10;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.maxDate;
      if (!core.identical(this[_expr_11], currVal_11)) {
        this[_DateRangeEditorComponent_1_5].maxDate = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.isCalendarCreated;
      if (!core.identical(this[_expr_12], currVal_12)) {
        this[_DateRangeEditorComponent_1_5].isCalendarCreated = currVal_12;
        this[_expr_12] = currVal_12;
      }
      if (firstCheck) {
        this[_DateRangeEditorComponent_1_5].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_7].markAsCheckOnce();
      }
      let currVal_0 = _ctx.compact;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_0], 'compact', currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_1].detectHostChanges(firstCheck);
      let currVal_13 = _ctx.applyBarVisible;
      if (!(this[_expr_13] == currVal_13)) {
        this.updateClass(this[_el_2], 'visible', currVal_13);
        this[_expr_13] = currVal_13;
      }
      this[_compView_5].detectHostChanges(firstCheck);
      let l = _ctx.cancelButtonMsg;
      let currVal_14 = l != null ? l : '';
      if (!(this[_expr_14] === currVal_14)) {
        this[_text_6][$text] = currVal_14;
        this[_expr_14] = currVal_14;
      }
      this[_compView_7].detectHostChanges(firstCheck);
      let l$ = _ctx.applyButtonMsg;
      let currVal_15 = l$ != null ? l$ : '';
      if (!(this[_expr_15] === currVal_15)) {
        this[_text_8][$text] = currVal_15;
        this[_expr_15] = currVal_15;
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      this[_compView_5].detectChanges();
      this[_compView_7].detectChanges();
      if (firstCheck) {
        this[_DateRangeEditorComponent_1_5].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_5];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_7];
      t$1 == null ? null : t$1.destroy();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_5_0]($event) {
      this.ctx.cancel();
      dart.dsend($event, 'preventDefault');
    }
    [_handle_trigger_7_0]($event) {
      this.ctx.apply(html.UIEvent._check($event));
      dart.dsend($event, 'preventDefault');
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    this[_query_AutoFocusDirective_0_0_isDirty] = true;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_DateRangeEditorComponent_1_5] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_compView_5] = null;
    this[_AcxDarkTheme_5_5] = null;
    this[_MaterialButtonComponent_5_6] = null;
    this[_text_6] = null;
    this[_el_7] = null;
    this[_compView_7] = null;
    this[_AcxDarkTheme_7_5] = null;
    this[_MaterialButtonComponent_7_6] = null;
    this[_text_8] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._renderType;
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_5_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_7_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(focus__focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_0_5]: dart.fieldType(focus__focus_trap.FocusTrapComponent),
    [_query_AutoFocusDirective_0_0_isDirty]: dart.fieldType(core.bool),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0),
    [_DateRangeEditorComponent_1_5]: dart.fieldType(material_datepicker__date_range_editor.DateRangeEditorComponent),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.Element),
    [_compView_5]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_5_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_5_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_text_6]: dart.fieldType(html.Text),
    [_el_7]: dart.fieldType(html.Element),
    [_compView_7]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_7_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_7_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_text_8]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(core.bool),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4, AppViewAndintToAppViewOfMaterialDateRangePickerComponent());
  dart.defineLazy(material_datepicker__material_date_range_picker$46template, {
    /*material_datepicker__material_date_range_picker$46template.styles$MaterialDateRangePickerComponentHost*/get styles$MaterialDateRangePickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialDateRangePickerComponent_0_5 = Symbol('_MaterialDateRangePickerComponent_0_5');
  let const$8;
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0 = class _ViewMaterialDateRangePickerComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDateRangePickerComponent_0_5] = new material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.new(time$.Clock._check(this.injectorGet(const$8 || (const$8 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.viewData.parentIndex, null)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialDateRangePickerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialDateRangePickerComponent()).new(0, this, this.rootEl, this[_MaterialDateRangePickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) || token === dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorHost)) && 0 === nodeIndex) {
        return this[_MaterialDateRangePickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialDateRangePickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialDateRangePickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDateRangePickerComponent_0_5] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0),
    [_MaterialDateRangePickerComponent_0_5]: dart.fieldType(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_datepicker__material_date_range_picker$46template, {
    /*material_datepicker__material_date_range_picker$46template.MaterialDateRangePickerComponentNgFactory*/get MaterialDateRangePickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialDateRangePickerComponent()).new('material-date-range-picker', material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0, material_datepicker__material_date_range_picker$46template._MaterialDateRangePickerComponentMetadata));
    },
    /*material_datepicker__material_date_range_picker$46template._MaterialDateRangePickerComponentMetadata*/get _MaterialDateRangePickerComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_datepicker__material_date_range_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_date_range_picker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_date_range_picker$46template._visited)) {
      return;
    }
    material_datepicker__material_date_range_picker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), material_datepicker__material_date_range_picker$46template.MaterialDateRangePickerComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus_trap$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    glyph__glyph$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_datepicker__comparison$46template.initReflector();
    material_datepicker__date_range_editor$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    material_datepicker__next_prev_buttons$46template.initReflector();
    material_datepicker__preset$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_select__dropdown_button$46template.initReflector();
    model__a11y__keyboard_handler_mixin$46template.initReflector();
    model__date__date$46template.initReflector();
    model__date__date_formatter$46template.initReflector();
    model__observable__observable$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(material_datepicker__material_date_range_picker$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_range_picker.template.ddc", {
    "package:angular_components/material_datepicker/material_date_range_picker.template.dart": material_datepicker__material_date_range_picker$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_date_range_picker.template.dart"],"names":[],"mappings":"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","file":"material_date_range_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_range_picker$46template: material_datepicker__material_date_range_picker$46template
  };
});

//# sourceMappingURL=material_date_range_picker.template.ddc.js.map
