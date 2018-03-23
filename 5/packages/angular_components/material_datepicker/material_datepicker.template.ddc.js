define(['dart_sdk', 'packages/angular_components/material_datepicker/material_datepicker.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/src/laminate/popup/popup_source_directive', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/popup_ref', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_datepicker/material_datepicker', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/focus/focus', 'packages/quiver/time', 'packages/angular_components/material_datepicker/date_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_datepicker/material_calendar_picker.template', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular/src/common/directives/ng_class', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/material_input/base_material_input', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_datepicker/range', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/date_input.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/utils/angular/properties/properties.template'], function(dart_sdk, material_datepicker$46scss$46css, view_type, constants, view, app_view_utils, material_popup, app_view, dom_popup_source, reference, popup_source_directive, ng_if, dropdown_button, dropdown_button$, material_popup$, popup_hierarchy, ng_zone, overlay_service, zindexer, alignment, opaque_token, popup_size_provider, element_ref, deferred_content, deferred_content_aware, material_dropdown_base, popup_ref, material_input, material_datepicker, material_input$, deferred_validator, dom_service, modal, focus, time, date_input, material_input_default_value_accessor, material_calendar_picker, material_calendar_picker$, ng_class, date, calendar, base_material_input, ng_for, material_select_item, activation_handler, material_select_item$, selection_container, has_renderer, range, reflector, angular, button_decorator, deferred_content$, focus$, keyboard_only_focus_indicator, glyph, alignment$, popup, calendar$, date_input$, module, range$, material_list_item, focusable_mixin, date$, properties) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_datepicker$46scss$46css$46shim = material_datepicker$46scss$46css.material_datepicker__material_datepicker$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
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
  const content__deferred_content = deferred_content.content__deferred_content;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__laminate__popup__popup_ref = popup_ref.src__laminate__popup__popup_ref;
  const material_input__material_input = material_input.material_input__material_input;
  const material_datepicker__material_datepicker = material_datepicker.material_datepicker__material_datepicker;
  const material_input__material_input$46template = material_input$.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const focus__focus = focus.focus__focus;
  const time$ = time.time;
  const material_datepicker__date_input = date_input.material_datepicker__date_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_datepicker__material_calendar_picker$46template = material_calendar_picker.material_datepicker__material_calendar_picker$46template;
  const material_datepicker__material_calendar_picker = material_calendar_picker$.material_datepicker__material_calendar_picker;
  const src__common__directives__ng_class = ng_class.src__common__directives__ng_class;
  const model__date__date = date.model__date__date;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const material_datepicker__range = range.material_datepicker__range;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const button_decorator__button_decorator$46template = button_decorator.button_decorator__button_decorator$46template;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const focus__focus$46template = focus$.focus__focus$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator$46template;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_datepicker__calendar$46template = calendar$.material_datepicker__calendar$46template;
  const material_datepicker__date_input$46template = date_input$.material_datepicker__date_input$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const material_datepicker__range$46template = range$.material_datepicker__range$46template;
  const material_list__material_list_item$46template = material_list_item.material_list__material_list_item$46template;
  const mixins__focusable_mixin$46template = focusable_mixin.mixins__focusable_mixin$46template;
  const model__date__date$46template = date$.model__date__date$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const _root = Object.create(null);
  const material_datepicker__material_datepicker$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfMaterialInputComponent = () => (JSArrayOfMaterialInputComponent = dart.constFn(_interceptors.JSArray$(material_input__material_input.MaterialInputComponent)))();
  let ListOfMaterialInputComponent = () => (ListOfMaterialInputComponent = dart.constFn(core.List$(material_input__material_input.MaterialInputComponent)))();
  let _ViewMaterialDatepickerComponent2ToListOfMaterialInputComponent = () => (_ViewMaterialDatepickerComponent2ToListOfMaterialInputComponent = dart.constFn(dart.fnType(ListOfMaterialInputComponent(), [material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2])))();
  let AppViewOfMaterialDatepickerComponent = () => (AppViewOfMaterialDatepickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent)))();
  let AppViewAndintToAppViewOfMaterialDatepickerComponent = () => (AppViewAndintToAppViewOfMaterialDatepickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialDatepickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let ComponentRefOfMaterialDatepickerComponent = () => (ComponentRefOfMaterialDatepickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialDatepickerComponent = () => (ComponentFactoryOfMaterialDatepickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_datepicker.MaterialDatepickerComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__material_datepicker$46template, {
    /*material_datepicker__material_datepicker$46template.styles$MaterialDatepickerComponent*/get styles$MaterialDatepickerComponent() {
      return dart.constList([material_datepicker__material_datepicker$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_DropdownButtonComponent_1_0_isDirty = Symbol('_query_DropdownButtonComponent_1_0_isDirty');
  const _query_MaterialInputComponent_1_1_isDirty = Symbol('_query_MaterialInputComponent_1_1_isDirty');
  const _el_0 = Symbol('_el_0');
  const _PopupSourceDirective_0_5 = Symbol('_PopupSourceDirective_0_5');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _DropdownButtonComponent_2_5 = Symbol('_DropdownButtonComponent_2_5');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _appEl_3 = Symbol('_appEl_3');
  const _MaterialPopupComponent_3_8 = Symbol('_MaterialPopupComponent_3_8');
  const __PopupRef_3_10 = Symbol('__PopupRef_3_10');
  const __PopupHierarchy_3_12 = Symbol('__PopupHierarchy_3_12');
  const _appEl_4 = Symbol('_appEl_4');
  const _DeferredContentDirective_4_9 = Symbol('_DeferredContentDirective_4_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_9 = Symbol('_expr_9');
  const _PopupRef_3_10 = Symbol('_PopupRef_3_10');
  const _PopupHierarchy_3_12 = Symbol('_PopupHierarchy_3_12');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  const _handle_visibleChange_3_0 = Symbol('_handle_visibleChange_3_0');
  let const$4;
  const _MaterialInputComponent_4_6 = Symbol('_MaterialInputComponent_4_6');
  material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0 = class ViewMaterialDatepickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    get [_PopupRef_3_10]() {
      if (this[__PopupRef_3_10] == null) {
        this[__PopupRef_3_10] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_3_8]);
      }
      return this[__PopupRef_3_10];
    }
    get [_PopupHierarchy_3_12]() {
      if (this[__PopupHierarchy_3_12] == null) {
        this[__PopupHierarchy_3_12] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_3_8]);
      }
      return this[__PopupHierarchy_3_12];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'main-content';
      this.createAttr(this[_el_0], 'popupSource', '');
      this.addShimC(this[_el_0]);
      this[_PopupSourceDirective_0_5] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_el_0], utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)));
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent1);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_compView_2] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this[_el_0][$append](this[_el_2]);
      this[_el_2].className = 'menu-lookalike primary-range';
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_DropdownButtonComponent_2_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
      this[_compView_2].create(this[_DropdownButtonComponent_2_5], [const$ || (const$ = dart.constList([], dart.dynamic))]);
      this[_compView_3] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      parentRenderNode[$append](this[_el_3]);
      this.createAttr(this[_el_3], 'enforceSpaceConstraints', '');
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, this[_el_3]);
      this[_MaterialPopupComponent_3_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions'))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_3].ref, this[_appEl_3], new src__core__linker__element_ref.ElementRef.new(this[_el_3]));
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 3, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent2);
      this[_DeferredContentDirective_4_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_4], _TemplateRef_4_8, this[_MaterialPopupComponent_3_8]);
      this[_compView_3].create(this[_MaterialPopupComponent_3_8], [const$2 || (const$2 = dart.constList([], dart.dynamic)), JSArrayOfViewContainer().of([this[_appEl_4]]), const$3 || (const$3 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_DropdownButtonComponent_2_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'onTrigger')));
      let subscription_1 = this[_MaterialPopupComponent_3_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_visibleChange_3_0)));
      this.ctx.dropdownButton = this[_DropdownButtonComponent_2_5];
      this.init(const$4 || (const$4 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_select__dropdown_button.DropdownButtonComponent) && 2 === nodeIndex) {
        return this[_DropdownButtonComponent_2_5];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_PopupSourceDirective_0_5];
      }
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_MaterialPopupComponent_3_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_PopupRef_3_10];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_PopupHierarchy_3_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_container = this[_PopupSourceDirective_0_5];
      this[_NgIf_1_9].ngIf = _ctx.presetDates[$isNotEmpty];
      changed = false;
      let currVal_1 = _ctx.formattedDate;
      if (!(this[_expr_1] == currVal_1)) {
        this[_DropdownButtonComponent_2_5].buttonText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (!(this[_expr_2] == currVal_2)) {
        this[_DropdownButtonComponent_2_5].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.error;
      if (!(this[_expr_3] == currVal_3)) {
        this[_DropdownButtonComponent_2_5].error = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialPopupComponent_3_8].enforceSpaceConstraints = true;
      }
      let currVal_5 = _ctx.preferredPositions;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_MaterialPopupComponent_3_8].preferredPositions = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = local_container;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_MaterialPopupComponent_3_8].source = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.popupVisible;
      if (!(this[_expr_7] == currVal_7)) {
        this[_MaterialPopupComponent_3_8].visible = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (firstCheck) {
        this[_DeferredContentDirective_4_9].preserveDimensions = true;
      }
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      if (dart.test(this[_query_MaterialInputComponent_1_1_isDirty])) {
        this.ctx.textInput = dart.test(this[_appEl_4].mapNestedViews(material_input__material_input.MaterialInputComponent, material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2, dart.fn(nestedView => JSArrayOfMaterialInputComponent().of([nestedView[_MaterialInputComponent_4_6]]), _ViewMaterialDatepickerComponent2ToListOfMaterialInputComponent()))[$isNotEmpty]) ? this[_appEl_4].mapNestedViews(material_input__material_input.MaterialInputComponent, material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2, dart.fn(nestedView => JSArrayOfMaterialInputComponent().of([nestedView[_MaterialInputComponent_4_6]]), _ViewMaterialDatepickerComponent2ToListOfMaterialInputComponent()))[$first] : null;
        this[_query_MaterialInputComponent_1_1_isDirty] = false;
      }
      this[_compView_3].detectHostChanges(firstCheck);
      this[_compView_2].detectChanges();
      this[_compView_3].detectChanges();
      if (firstCheck) {
        this[_PopupSourceDirective_0_5].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_MaterialPopupComponent_3_8].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_4];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_compView_2];
      t$1 == null ? null : t$1.destroy();
      let t$2 = this[_compView_3];
      t$2 == null ? null : t$2.destroy();
      this[_PopupSourceDirective_0_5].ngOnDestroy();
      this[_DeferredContentDirective_4_9].ngOnDestroy();
      this[_MaterialPopupComponent_3_8].ngOnDestroy();
    }
    [_handle_visibleChange_3_0]($event) {
      this.ctx.popupVisible = core.bool._check($event);
    }
    detectHostChanges(firstCheck) {
      let currVal_9 = this.ctx.compact;
      if (!(this[_expr_9] == currVal_9)) {
        this.updateElemClass(this.rootEl, 'compact', currVal_9);
        this[_expr_9] = currVal_9;
      }
    }
  };
  (material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.new = function(parentView, parentIndex) {
    this[_query_DropdownButtonComponent_1_0_isDirty] = true;
    this[_query_MaterialInputComponent_1_1_isDirty] = true;
    this[_el_0] = null;
    this[_PopupSourceDirective_0_5] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_DropdownButtonComponent_2_5] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_appEl_3] = null;
    this[_MaterialPopupComponent_3_8] = null;
    this[__PopupRef_3_10] = null;
    this[__PopupHierarchy_3_12] = null;
    this[_appEl_4] = null;
    this[_DeferredContentDirective_4_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_9] = null;
    material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-datepicker'));
    let t = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType;
    t == null ? material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__material_datepicker$46template.styles$MaterialDatepickerComponent) : t;
    this.setupComponentType(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType);
  }).prototype = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_visibleChange_3_0]: dart.fnType(dart.void, [dart.dynamic]),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setGetterSignature(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0, () => ({
    __proto__: dart.getGetters(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__),
    [_PopupRef_3_10]: dart.fnType(dart.dynamic, []),
    [_PopupHierarchy_3_12]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__),
    [_query_DropdownButtonComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_query_MaterialInputComponent_1_1_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_PopupSourceDirective_0_5]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_2_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_3_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupRef_3_10]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_3_12]: dart.fieldType(dart.dynamic),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_4_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.String),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0, {
    /*material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent0, AppViewAndintToAppViewOfMaterialDatepickerComponent());
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1 = class _ViewMaterialDatepickerComponent1 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'primary-label';
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.labelMsg;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType;
  }).prototype = material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent1 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent1, AppViewAndintToAppViewOfMaterialDatepickerComponent());
  const _el_1 = Symbol('_el_1');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _el_4 = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _DeferredValidator_4_5 = Symbol('_DeferredValidator_4_5');
  const _Focusable_4_7 = Symbol('_Focusable_4_7');
  const _AutoFocusDirective_4_8 = Symbol('_AutoFocusDirective_4_8');
  const _DateInputDirective_4_9 = Symbol('_DateInputDirective_4_9');
  const _BaseMaterialInput_4_10 = Symbol('_BaseMaterialInput_4_10');
  const _MaterialInputDefaultValueAccessor_4_11 = Symbol('_MaterialInputDefaultValueAccessor_4_11');
  const __NgValidators_4_12 = Symbol('__NgValidators_4_12');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _el_6 = Symbol('_el_6');
  const _compView_6 = Symbol('_compView_6');
  const _MaterialCalendarPickerComponent_6_5 = Symbol('_MaterialCalendarPickerComponent_6_5');
  const _NgClass_6_6 = Symbol('_NgClass_6_6');
  const _expr_8 = Symbol('_expr_8');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  const _expr_15 = Symbol('_expr_15');
  const _NgValidators_4_12 = Symbol('_NgValidators_4_12');
  let const$5;
  let const$6;
  let const$7;
  const _handle_stateChange_6_0 = Symbol('_handle_stateChange_6_0');
  let const$8;
  material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2 = class _ViewMaterialDatepickerComponent2 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    get [_NgValidators_4_12]() {
      if (this[__NgValidators_4_12] == null) {
        this[__NgValidators_4_12] = [this[_DeferredValidator_4_5]];
      }
      return this[__NgValidators_4_12];
    }
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'popup-content';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'inner-label-wrapper';
      this.addShimC(this[_el_1]);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_1][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent3);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_3].className = 'date-input';
      this.addShimC(this[_el_3]);
      this[_compView_4] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_3][$append](this[_el_4]);
      this.createAttr(this[_el_4], 'autoFocus', '');
      this.createAttr(this[_el_4], 'dateParsing', '');
      this.createAttr(this[_el_4], 'type', 'text');
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_DeferredValidator_4_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_4_6] = new material_input__material_input.MaterialInputComponent.new('text', null, null, this[_compView_4].ref, this[_DeferredValidator_4_5]);
      this[_Focusable_4_7] = this[_MaterialInputComponent_4_6];
      this[_AutoFocusDirective_4_8] = new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_4]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), this[_Focusable_4_7], laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.as(this.parentView)[_PopupRef_3_10]));
      this[_DateInputDirective_4_9] = new material_datepicker__date_input.DateInputDirective.new(time$.Clock._check(this.parentView.parentView.injectorGet(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.parentView.viewData.parentIndex, null)), time$.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time$.Clock), this.parentView.viewData.parentIndex)), this[_MaterialInputComponent_4_6]);
      this[_BaseMaterialInput_4_10] = this[_MaterialInputComponent_4_6];
      this[_MaterialInputDefaultValueAccessor_4_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_4_10], null);
      this[_compView_4].create(this[_MaterialInputComponent_4_6], [const$6 || (const$6 = dart.constList([], dart.dynamic))]);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent4);
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this[_compView_6] = new material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 6);
      this[_el_6] = this[_compView_6].rootEl;
      this[_el_0][$append](this[_el_6]);
      this[_el_6].className = 'calendar-picker';
      this.createAttr(this[_el_6], 'mode', 'single-date');
      this.addShimC(html.HtmlElement._check(this[_el_6]));
      this[_MaterialCalendarPickerComponent_6_5] = new material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.new(time$.Clock._check(this.parentView.parentView.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.parentView.viewData.parentIndex, null)), time$.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time$.Clock), this.parentView.viewData.parentIndex)), 'single-date');
      this[_NgClass_6_6] = new src__common__directives__ng_class.NgClass.new(this[_el_6]);
      this[_compView_6].create(this[_MaterialCalendarPickerComponent_6_5], []);
      let subscription_0 = this[_DateInputDirective_4_9].dateChange.listen(this.eventHandler1(model__date__date.Date, model__date__date.Date, dart.bind(this.ctx, 'setDateFromInput')));
      let subscription_1 = this[_MaterialCalendarPickerComponent_6_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_6_0)));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 4 === nodeIndex) {
        return this[_DeferredValidator_4_5];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective)) && 4 === nodeIndex) {
        return this[_MaterialInputComponent_4_6];
      }
      if (token === dart.wrapType(focus__focus.Focusable) && 4 === nodeIndex) {
        return this[_Focusable_4_7];
      }
      if (token === dart.wrapType(material_datepicker__date_input.DateInputDirective) && 4 === nodeIndex) {
        return this[_DateInputDirective_4_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 4 === nodeIndex) {
        return this[_BaseMaterialInput_4_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 4 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_4_11];
      }
      if (token === (const$8 || (const$8 = dart.const(new src__core__di__opaque_token.MultiToken.new('NgValidators')))) && 4 === nodeIndex) {
        return this[_NgValidators_4_12];
      }
      if (token === dart.wrapType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent) && 6 === nodeIndex) {
        return this[_MaterialCalendarPickerComponent_6_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_2_9].ngIf = _ctx.presetDates[$isNotEmpty];
      changed = false;
      let currVal_2 = _ctx.placeholderMsg;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MaterialInputComponent_4_6].label = core.String._check(currVal_2);
        changed = true;
        this[_expr_2] = core.String._check(currVal_2);
      }
      let currVal_3 = _ctx.required;
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialInputComponent_4_6].required = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_AutoFocusDirective_4_8].autoFocus = true;
      }
      if (firstCheck) {
        this[_AutoFocusDirective_4_8].ngOnInit();
      }
      let currVal_5 = _ctx.outputFormat;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_DateInputDirective_4_9].dateFormat = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.maxDate;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_DateInputDirective_4_9].maxDate = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.minDate;
      if (!core.identical(this[_expr_7], currVal_7)) {
        this[_DateInputDirective_4_9].minDate = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.date;
      if (!core.identical(this[_expr_8], currVal_8)) {
        this[_DateInputDirective_4_9].date = currVal_8;
        this[_expr_8] = currVal_8;
      }
      this[_NgIf_5_9].ngIf = _ctx.presetDates[$isNotEmpty];
      changed = false;
      let currVal_10 = _ctx.calendar;
      if (!core.identical(this[_expr_10], currVal_10)) {
        this[_MaterialCalendarPickerComponent_6_5].state = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.minDate;
      if (!core.identical(this[_expr_11], currVal_11)) {
        this[_MaterialCalendarPickerComponent_6_5].minDate = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.maxDate;
      if (!core.identical(this[_expr_12], currVal_12)) {
        this[_MaterialCalendarPickerComponent_6_5].maxDate = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.compact;
      if (!core.identical(this[_expr_13], currVal_13)) {
        this[_MaterialCalendarPickerComponent_6_5].compact = currVal_13;
        changed = true;
        this[_expr_13] = currVal_13;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialCalendarPickerComponent_6_5].ngOnInit();
      }
      if (firstCheck) {
        this[_NgClass_6_6].initialClasses = 'calendar-picker';
      }
      let currVal_15 = _ctx.calendarWeekRowsStyle;
      if (!core.identical(this[_expr_15], currVal_15)) {
        this[_NgClass_6_6].rawClass = currVal_15;
        this[_expr_15] = currVal_15;
      }
      this[_NgClass_6_6].ngDoCheck();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      let currVal_0 = _ctx.compact;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateClass(this[_el_0], 'compact', currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_6].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_6].detectChanges();
      if (firstCheck) {
        this[_MaterialInputComponent_4_6].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_MaterialCalendarPickerComponent_6_5].ngAfterViewInit();
      }
    }
    dirtyParentQueriesInternal() {
      material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.as(this.parentView)[_query_MaterialInputComponent_1_1_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_5];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_4];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_6];
      t$1 == null ? null : t$1.destroy();
      this[_MaterialInputComponent_4_6].ngOnDestroy();
      this[_AutoFocusDirective_4_8].ngOnDestroy();
      this[_DateInputDirective_4_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_4_11].ngOnDestroy();
      this[_MaterialCalendarPickerComponent_6_5].ngOnDestroy();
      this[_NgClass_6_6].ngOnDestroy();
    }
    [_handle_stateChange_6_0]($event) {
      this.ctx.calendar = material_datepicker__calendar.CalendarState._check($event);
    }
  };
  (material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_DeferredValidator_4_5] = null;
    this[_MaterialInputComponent_4_6] = null;
    this[_Focusable_4_7] = null;
    this[_AutoFocusDirective_4_8] = null;
    this[_DateInputDirective_4_9] = null;
    this[_BaseMaterialInput_4_10] = null;
    this[_MaterialInputDefaultValueAccessor_4_11] = null;
    this[__NgValidators_4_12] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_el_6] = null;
    this[_compView_6] = null;
    this[_MaterialCalendarPickerComponent_6_5] = null;
    this[_NgClass_6_6] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_15] = null;
    material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType;
  }).prototype = material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_stateChange_6_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2, () => ({
    __proto__: dart.getGetters(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__),
    [_NgValidators_4_12]: dart.fnType(core.List, [])
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_4_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_MaterialInputComponent_4_6]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_Focusable_4_7]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_AutoFocusDirective_4_8]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_DateInputDirective_4_9]: dart.fieldType(material_datepicker__date_input.DateInputDirective),
    [_BaseMaterialInput_4_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_4_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [__NgValidators_4_12]: dart.fieldType(core.List),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_6]: dart.fieldType(html.Element),
    [_compView_6]: dart.fieldType(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0),
    [_MaterialCalendarPickerComponent_6_5]: dart.fieldType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent),
    [_NgClass_6_6]: dart.fieldType(src__common__directives__ng_class.NgClass),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent2 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent2, AppViewAndintToAppViewOfMaterialDatepickerComponent());
  material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3 = class _ViewMaterialDatepickerComponent3 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'inner-label';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.labelMsg;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType;
  }).prototype = material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent3 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent3.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent3, AppViewAndintToAppViewOfMaterialDatepickerComponent());
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4 = class _ViewMaterialDatepickerComponent4 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'preset-dates-wrapper';
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent5);
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.presetDates;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_1_9].ngDoCheck();
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType;
  }).prototype = material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent4 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent4.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent4, AppViewAndintToAppViewOfMaterialDatepickerComponent());
  const _compView_0 = Symbol('_compView_0');
  const _MaterialSelectItemComponent_0_5 = Symbol('_MaterialSelectItemComponent_0_5');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5 = class _ViewMaterialDatepickerComponent5 extends src__core__linker__app_view.AppView$(material_datepicker__material_datepicker.MaterialDatepickerComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'closeOnActivate', 'false');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialSelectItemComponent_0_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.viewData.parentIndex)), material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.as(this.parentView.parentView.parentView)[_MaterialPopupComponent_3_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
      this[_text_1] = html.Text.new('');
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_5], [JSArrayOfText().of([this[_text_1]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_0_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent) || token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialSelectItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_presetDate = material_datepicker__range.SingleDayRange._check(this.locals[$_get]('$implicit'));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_5].closeOnActivate = 'false';
      }
      let currVal_0 = _ctx.isPresetDateSelected(local_presetDate);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialSelectItemComponent_0_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_presetDate.title);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_1][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialSelectItemComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_presetDate = material_datepicker__range.SingleDayRange._check(this.locals[$_get]('$implicit'));
      this.ctx.onPresetClicked(local_presetDate);
    }
  };
  (material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialSelectItemComponent_0_5] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0._renderType;
  }).prototype = material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_datepicker.MaterialDatepickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_0_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent5 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponent5.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponent5, AppViewAndintToAppViewOfMaterialDatepickerComponent());
  dart.defineLazy(material_datepicker__material_datepicker$46template, {
    /*material_datepicker__material_datepicker$46template.styles$MaterialDatepickerComponentHost*/get styles$MaterialDatepickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialDatepickerComponent_0_5 = Symbol('_MaterialDatepickerComponent_0_5');
  let const$9;
  material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0 = class _ViewMaterialDatepickerComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDatepickerComponent_0_5] = new material_datepicker__material_datepicker.MaterialDatepickerComponent.new(time$.Clock._check(this.injectorGet(const$9 || (const$9 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialDatepickerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialDatepickerComponent()).new(0, this, this.rootEl, this[_MaterialDatepickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__material_datepicker.MaterialDatepickerComponent) && 0 === nodeIndex) {
        return this[_MaterialDatepickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialDatepickerComponent_0_5].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDatepickerComponent_0_5] = null;
    material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_datepicker$46template.ViewMaterialDatepickerComponent0),
    [_MaterialDatepickerComponent_0_5]: dart.fieldType(material_datepicker__material_datepicker.MaterialDatepickerComponent)
  }));
  material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_datepicker$46template._ViewMaterialDatepickerComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_datepicker__material_datepicker$46template, {
    /*material_datepicker__material_datepicker$46template.MaterialDatepickerComponentNgFactory*/get MaterialDatepickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialDatepickerComponent()).new('material-datepicker', material_datepicker__material_datepicker$46template.viewFactory_MaterialDatepickerComponentHost0, material_datepicker__material_datepicker$46template._MaterialDatepickerComponentMetadata));
    },
    /*material_datepicker__material_datepicker$46template._MaterialDatepickerComponentMetadata*/get _MaterialDatepickerComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_datepicker__material_datepicker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_datepicker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_datepicker$46template._visited)) {
      return;
    }
    material_datepicker__material_datepicker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_datepicker.MaterialDatepickerComponent), material_datepicker__material_datepicker$46template.MaterialDatepickerComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    glyph__glyph$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__date_input$46template.initReflector();
    material_datepicker__material_calendar_picker$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    material_input__material_input$46template.initReflector();
    material_list__material_list_item$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_select__dropdown_button$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
    model__date__date$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
  };
  dart.fn(material_datepicker__material_datepicker$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/material_datepicker.template.ddc", {
    "package:angular_components/material_datepicker/material_datepicker.template.dart": material_datepicker__material_datepicker$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_datepicker.template.dart"],"names":[],"mappings":"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","file":"material_datepicker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_datepicker$46template: material_datepicker__material_datepicker$46template
  };
});

//# sourceMappingURL=material_datepicker.template.ddc.js.map
