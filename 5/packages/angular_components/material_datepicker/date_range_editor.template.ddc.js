define(['dart_sdk', 'packages/angular_components/material_datepicker/date_range_editor.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/angular_components/material_select/material_select.template', 'packages/angular_components/material_select/material_select', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/glyph/glyph', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/material_tooltip/tooltip', 'packages/angular_components/material_datepicker/preset', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_button/material_button.template', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/src/laminate/popup/popup_source_directive', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/src/laminate/popup/popup_ref', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives/ng_model', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_forms/src/directives/control_container', 'packages/angular_components/focus/focus', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/src/material_datepicker/comparison_range_editor.template', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular_components/material_datepicker/date_range_input.template', 'packages/angular_components/material_datepicker/date_range_input', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_datepicker/next_prev_buttons.template', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular_components/material_datepicker/material_calendar_picker.template', 'packages/quiver/time', 'packages/angular_components/utils/showhide/showhide', 'packages/angular_components/material_datepicker/material_month_picker.template', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/preset.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/date_formatter.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/src/material_datepicker/date_range_editor_model.template', 'packages/angular_components/utils/angular/managed_zone/interface.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/showhide/showhide.template'], function(dart_sdk, date_range_editor$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_if, material_calendar_picker, material_month_picker, date_range_editor, material_select, material_select$, ng_for, has_renderer, selection_container, material_select_item, dom_service, material_dropdown_base, activation_handler, material_select_item$, glyph, button_decorator, button_decorator$, glyph$, module, tooltip_controller, disposer, dom_popup_source, tooltip, preset, material_popup, material_button, opaque_token, dark_theme, material_button$, reference, popup_source_directive, material_popup$, popup_hierarchy, ng_zone, overlay_service, zindexer, alignment, popup_size_provider, element_ref, deferred_content_aware, popup_ref, material_input, deferred_validator, ng_model, material_input$, material_input_default_value_accessor, control_container, focus, base_material_input, comparison_range_editor, comparison_range_editor$, date_range_input, date_range_input$, date, calendar, keyboard_only_focus_indicator, next_prev_buttons, next_prev_buttons$, material_calendar_picker$, time, showhide, material_month_picker$, managed_zone, reflector, angular, focus$, keyboard_only_focus_indicator$, popup, calendar$, module$, preset$, range, material_ripple, material_tooltip, date$, date_formatter, observable, date_range_editor_model, $interface, properties, dom_service$, showhide$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__date_range_editor$46scss$46css$46shim = date_range_editor$46scss$46css.material_datepicker__date_range_editor$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_datepicker__material_calendar_picker = material_calendar_picker.material_datepicker__material_calendar_picker;
  const material_datepicker__material_month_picker = material_month_picker.material_datepicker__material_month_picker;
  const material_datepicker__date_range_editor = date_range_editor.material_datepicker__date_range_editor;
  const material_select__material_select$46template = material_select.material_select__material_select$46template;
  const material_select__material_select = material_select$.material_select__material_select;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const glyph__glyph = glyph$.glyph__glyph;
  const material_tooltip__module = module.material_tooltip__module;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const src__material_tooltip__tooltip = tooltip.src__material_tooltip__tooltip;
  const material_datepicker__preset = preset.material_datepicker__preset;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const src__laminate__popup__popup_source_directive = popup_source_directive.src__laminate__popup__popup_source_directive;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_service.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__laminate__popup__popup_size_provider = popup_size_provider.src__laminate__popup__popup_size_provider;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__laminate__popup__popup_ref = popup_ref.src__laminate__popup__popup_ref;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const material_input__material_input = material_input$.material_input__material_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const focus__focus = focus.focus__focus;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const src__material_datepicker__comparison_range_editor$46template = comparison_range_editor.src__material_datepicker__comparison_range_editor$46template;
  const src__material_datepicker__comparison_range_editor = comparison_range_editor$.src__material_datepicker__comparison_range_editor;
  const material_datepicker__date_range_input$46template = date_range_input.material_datepicker__date_range_input$46template;
  const material_datepicker__date_range_input = date_range_input$.material_datepicker__date_range_input;
  const model__date__date = date.model__date__date;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const material_datepicker__next_prev_buttons$46template = next_prev_buttons.material_datepicker__next_prev_buttons$46template;
  const material_datepicker__next_prev_buttons = next_prev_buttons$.material_datepicker__next_prev_buttons;
  const material_datepicker__material_calendar_picker$46template = material_calendar_picker$.material_datepicker__material_calendar_picker$46template;
  const time$ = time.time;
  const utils__showhide__showhide = showhide.utils__showhide__showhide;
  const material_datepicker__material_month_picker$46template = material_month_picker$.material_datepicker__material_month_picker$46template;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus$.focus__focus$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_datepicker__calendar$46template = calendar$.material_datepicker__calendar$46template;
  const material_datepicker__module$46template = module$.material_datepicker__module$46template;
  const material_datepicker__preset$46template = preset$.material_datepicker__preset$46template;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_tooltip__material_tooltip$46template = material_tooltip.material_tooltip__material_tooltip$46template;
  const model__date__date$46template = date$.model__date__date$46template;
  const model__date__date_formatter$46template = date_formatter.model__date__date_formatter$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const src__material_datepicker__date_range_editor_model$46template = date_range_editor_model.src__material_datepicker__date_range_editor_model$46template;
  const utils__angular__managed_zone__interface$46template = $interface.utils__angular__managed_zone__interface$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__showhide__showhide$46template = showhide$.utils__showhide__showhide$46template;
  const _root = Object.create(null);
  const material_datepicker__date_range_editor$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $text = dartx.text;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfMaterialCalendarPickerComponent = () => (JSArrayOfMaterialCalendarPickerComponent = dart.constFn(_interceptors.JSArray$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let ListOfMaterialCalendarPickerComponent = () => (ListOfMaterialCalendarPickerComponent = dart.constFn(core.List$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let _ViewDateRangeEditorComponent18ToListOfMaterialCalendarPickerComponent = () => (_ViewDateRangeEditorComponent18ToListOfMaterialCalendarPickerComponent = dart.constFn(dart.fnType(ListOfMaterialCalendarPickerComponent(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18])))();
  let _ViewDateRangeEditorComponent11ToListOfMaterialCalendarPickerComponent = () => (_ViewDateRangeEditorComponent11ToListOfMaterialCalendarPickerComponent = dart.constFn(dart.fnType(ListOfMaterialCalendarPickerComponent(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11])))();
  let JSArrayOfMaterialMonthPickerComponent = () => (JSArrayOfMaterialMonthPickerComponent = dart.constFn(_interceptors.JSArray$(material_datepicker__material_month_picker.MaterialMonthPickerComponent)))();
  let ListOfMaterialMonthPickerComponent = () => (ListOfMaterialMonthPickerComponent = dart.constFn(core.List$(material_datepicker__material_month_picker.MaterialMonthPickerComponent)))();
  let _ViewDateRangeEditorComponent19ToListOfMaterialMonthPickerComponent = () => (_ViewDateRangeEditorComponent19ToListOfMaterialMonthPickerComponent = dart.constFn(dart.fnType(ListOfMaterialMonthPickerComponent(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19])))();
  let _ViewDateRangeEditorComponent11ToListOfMaterialMonthPickerComponent = () => (_ViewDateRangeEditorComponent11ToListOfMaterialMonthPickerComponent = dart.constFn(dart.fnType(ListOfMaterialMonthPickerComponent(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11])))();
  let AppViewOfDateRangeEditorComponent = () => (AppViewOfDateRangeEditorComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent)))();
  let AppViewAndintToAppViewOfDateRangeEditorComponent = () => (AppViewAndintToAppViewOfDateRangeEditorComponent = dart.constFn(dart.fnType(AppViewOfDateRangeEditorComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let JSArrayOfSelectionItem = () => (JSArrayOfSelectionItem = dart.constFn(_interceptors.JSArray$(model__selection__selection_container.SelectionItem)))();
  let ListOfSelectionItem = () => (ListOfSelectionItem = dart.constFn(core.List$(model__selection__selection_container.SelectionItem)))();
  let _ViewDateRangeEditorComponent2ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent2ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2])))();
  let _ViewDateRangeEditorComponent3ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent3ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3])))();
  let _ViewDateRangeEditorComponent8ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent8ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8])))();
  let _ViewDateRangeEditorComponent7ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent7ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7])))();
  let JSArrayOfListOfSelectionItem = () => (JSArrayOfListOfSelectionItem = dart.constFn(_interceptors.JSArray$(ListOfSelectionItem())))();
  let _ViewDateRangeEditorComponent6ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent6ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6])))();
  let _ViewDateRangeEditorComponent9ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent9ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let ComponentRefOfDateRangeEditorComponent = () => (ComponentRefOfDateRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDateRangeEditorComponent = () => (ComponentFactoryOfDateRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__date_range_editor.DateRangeEditorComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__date_range_editor$46template, {
    /*material_datepicker__date_range_editor$46template.styles$DateRangeEditorComponent*/get styles$DateRangeEditorComponent() {
      return dart.constList([material_datepicker__date_range_editor$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_MaterialCalendarPickerComponent_1_0_isDirty = Symbol('_query_MaterialCalendarPickerComponent_1_0_isDirty');
  const _query_MaterialMonthPickerComponent_1_1_isDirty = Symbol('_query_MaterialMonthPickerComponent_1_1_isDirty');
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  const _MaterialCalendarPickerComponent_0_5 = Symbol('_MaterialCalendarPickerComponent_0_5');
  const _appEl_10 = Symbol('_appEl_10');
  const _MaterialMonthPickerComponent_0_5 = Symbol('_MaterialMonthPickerComponent_0_5');
  const _appEl_11 = Symbol('_appEl_11');
  material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0 = class ViewDateRangeEditorComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent1);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent11);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = dart.test(_ctx.presets[$isNotEmpty]) && dart.test(_ctx.shouldShowPredefinedList);
      this[_NgIf_1_9].ngIf = dart.test(_ctx.supportsCustomRange) && dart.test(_ctx.shouldShowCustomDateRangeColumn);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      if (dart.test(this[_query_MaterialCalendarPickerComponent_1_0_isDirty])) {
        this.ctx.calendarPicker = dart.test(this[_appEl_1].mapNestedViews(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, dart.fn(nestedView => nestedView[_appEl_10].mapNestedViews(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18, dart.fn(nestedView => JSArrayOfMaterialCalendarPickerComponent().of([nestedView[_MaterialCalendarPickerComponent_0_5]]), _ViewDateRangeEditorComponent18ToListOfMaterialCalendarPickerComponent())), _ViewDateRangeEditorComponent11ToListOfMaterialCalendarPickerComponent()))[$isNotEmpty]) ? this[_appEl_1].mapNestedViews(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, dart.fn(nestedView => nestedView[_appEl_10].mapNestedViews(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18, dart.fn(nestedView => JSArrayOfMaterialCalendarPickerComponent().of([nestedView[_MaterialCalendarPickerComponent_0_5]]), _ViewDateRangeEditorComponent18ToListOfMaterialCalendarPickerComponent())), _ViewDateRangeEditorComponent11ToListOfMaterialCalendarPickerComponent()))[$first] : null;
        this[_query_MaterialCalendarPickerComponent_1_0_isDirty] = false;
      }
      if (dart.test(this[_query_MaterialMonthPickerComponent_1_1_isDirty])) {
        this.ctx.monthSelector = dart.test(this[_appEl_1].mapNestedViews(material_datepicker__material_month_picker.MaterialMonthPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, dart.fn(nestedView => nestedView[_appEl_11].mapNestedViews(material_datepicker__material_month_picker.MaterialMonthPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19, dart.fn(nestedView => JSArrayOfMaterialMonthPickerComponent().of([nestedView[_MaterialMonthPickerComponent_0_5]]), _ViewDateRangeEditorComponent19ToListOfMaterialMonthPickerComponent())), _ViewDateRangeEditorComponent11ToListOfMaterialMonthPickerComponent()))[$isNotEmpty]) ? this[_appEl_1].mapNestedViews(material_datepicker__material_month_picker.MaterialMonthPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, dart.fn(nestedView => nestedView[_appEl_11].mapNestedViews(material_datepicker__material_month_picker.MaterialMonthPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19, dart.fn(nestedView => JSArrayOfMaterialMonthPickerComponent().of([nestedView[_MaterialMonthPickerComponent_0_5]]), _ViewDateRangeEditorComponent19ToListOfMaterialMonthPickerComponent())), _ViewDateRangeEditorComponent11ToListOfMaterialMonthPickerComponent()))[$first] : null;
        this[_query_MaterialMonthPickerComponent_1_1_isDirty] = false;
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1];
      t$ == null ? null : t$.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let currVal_2 = this.ctx.compact;
      if (!(this[_expr_2] == currVal_2)) {
        this.updateElemClass(this.rootEl, 'compact', currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
  };
  (material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.new = function(parentView, parentIndex) {
    this[_query_MaterialCalendarPickerComponent_1_0_isDirty] = true;
    this[_query_MaterialMonthPickerComponent_1_1_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_2] = null;
    material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('date-range-editor'));
    let t = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
    t == null ? material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__date_range_editor$46template.styles$DateRangeEditorComponent) : t;
    this.setupComponentType(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType);
  }).prototype = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__),
    [_query_MaterialCalendarPickerComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_query_MaterialMonthPickerComponent_1_1_isDirty]: dart.fieldType(core.bool),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, {
    /*material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent0, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialSelectComponent_0_5 = Symbol('_MaterialSelectComponent_0_5');
  const _query_SelectionItem_0_0_isDirty = Symbol('_query_SelectionItem_0_0_isDirty');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _el_3 = Symbol('_el_3');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgFor_4_9 = Symbol('_NgFor_4_9');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_4 = Symbol('_expr_4');
  const _SelectionItem_1_6 = Symbol('_SelectionItem_1_6');
  const _SelectionItem_0_10 = Symbol('_SelectionItem_0_10');
  const _appEl_3 = Symbol('_appEl_3');
  const _SelectionItem_5_6 = Symbol('_SelectionItem_5_6');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1 = class _ViewDateRangeEditorComponent1 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_select__material_select$46template.ViewMaterialSelectComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'preset-list';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialSelectComponent_0_5] = new material_select__material_select.MaterialSelectComponent.new();
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent2);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent3);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let doc = html.document;
      this[_el_3] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_3].className = 'group';
      this.addShimC(this[_el_3]);
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_3][$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 3, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent6);
      this[_NgFor_4_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent9);
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent10);
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_0].create(this[_MaterialSelectComponent_0_5], [JSArrayOfObject().of([this[_appEl_1], this[_appEl_2], this[_el_3], this[_appEl_5], this[_appEl_6]])]);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_select__material_select.MaterialSelectComponent) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(model__selection__selection_container.SelectionContainer)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_MaterialSelectComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialSelectComponent_0_5].width = 0;
      }
      this[_NgIf_1_9].ngIf = _ctx.supportsClearRange;
      this[_NgIf_2_9].ngIf = _ctx.supportsCustomRange;
      let currVal_4 = _ctx.presets;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_NgFor_4_9].ngForOf = currVal_4;
        this[_expr_4] = currVal_4;
      }
      this[_NgFor_4_9].ngDoCheck();
      this[_NgIf_5_9].ngIf = _ctx.supportsDaysInputs;
      this[_NgIf_6_9].ngIf = _ctx.supportsComparison;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      if (dart.test(this[_query_SelectionItem_0_0_isDirty])) {
        this[_MaterialSelectComponent_0_5].selectItems = src__core__linker__app_view_utils.flattenNodes(model__selection__selection_container.SelectionItem, JSArrayOfListOfSelectionItem().of([this[_appEl_1].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_SelectionItem_1_6]]), _ViewDateRangeEditorComponent2ToListOfSelectionItem())), this[_appEl_2].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_SelectionItem_1_6]]), _ViewDateRangeEditorComponent3ToListOfSelectionItem())), this[_appEl_4].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, dart.fn(nestedView => src__core__linker__app_view_utils.flattenNodes(model__selection__selection_container.SelectionItem, JSArrayOfListOfSelectionItem().of([JSArrayOfSelectionItem().of([nestedView[_SelectionItem_0_10]]), nestedView[_appEl_2].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, dart.fn(nestedView => nestedView[_appEl_3].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_SelectionItem_0_10]]), _ViewDateRangeEditorComponent8ToListOfSelectionItem())), _ViewDateRangeEditorComponent7ToListOfSelectionItem()))])), _ViewDateRangeEditorComponent6ToListOfSelectionItem())), this[_appEl_5].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_SelectionItem_1_6], nestedView[_SelectionItem_5_6]]), _ViewDateRangeEditorComponent9ToListOfSelectionItem()))]));
        this[_query_SelectionItem_0_0_isDirty] = false;
      }
      let currVal_0 = _ctx.isBasic;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_0], 'basic-preset-list', currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_4];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_5];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_6];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_compView_0];
      t$3 == null ? null : t$3.destroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialSelectComponent_0_5] = null;
    this[_query_SelectionItem_0_0_isDirty] = true;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_el_3] = null;
    this[_appEl_4] = null;
    this[_NgFor_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_4] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select$46template.ViewMaterialSelectComponent0),
    [_MaterialSelectComponent_0_5]: dart.fieldType(material_select__material_select.MaterialSelectComponent),
    [_query_SelectionItem_0_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_3]: dart.fieldType(html.DivElement),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_4_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent1 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent1, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialSelectItemComponent_1_5 = Symbol('_MaterialSelectItemComponent_1_5');
  const _text_2 = Symbol('_text_2');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2 = class _ViewDateRangeEditorComponent2 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'group';
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialSelectItemComponent_1_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_1].ref);
      this[_SelectionItem_1_6] = this[_MaterialSelectItemComponent_1_5];
      this[_text_2] = html.Text.new('');
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_5], [JSArrayOfText().of([this[_text_2]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'onClearRangeClicked')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MaterialSelectItemComponent_1_5];
      }
      if (token === dart.wrapType(model__selection__selection_container.SelectionItem) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_SelectionItem_1_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      this[_compView_1].detectHostChanges(firstCheck);
      let l = _ctx.clearRangeMsg;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_2][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_1].detectChanges();
    }
    dirtyParentQueriesInternal() {
      material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.as(this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    this[_SelectionItem_1_6] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_SelectionItem_1_6]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent2 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent2, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _el_2 = Symbol('_el_2');
  const _text_3 = Symbol('_text_3');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _expr_3 = Symbol('_expr_3');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3 = class _ViewDateRangeEditorComponent3 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'group';
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.createAttr(this[_el_1], 'closeOnActivate', 'false');
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialSelectItemComponent_1_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_1].ref);
      this[_SelectionItem_1_6] = this[_MaterialSelectItemComponent_1_5];
      this[_el_2] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_2]);
      this[_text_3] = html.Text.new('');
      this[_el_2][$append](this[_text_3]);
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_2][$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent4);
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 1, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent5);
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_5], [JSArrayOfObject().of([this[_el_2], this[_appEl_5]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'onCustomClicked')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_MaterialSelectItemComponent_1_5];
      }
      if (token === dart.wrapType(model__selection__selection_container.SelectionItem) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_SelectionItem_1_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialSelectItemComponent_1_5].closeOnActivate = 'false';
      }
      let currVal_0 = _ctx.isCustomRangeSelected;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialSelectItemComponent_1_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgIf_4_9].ngIf = dart.test(_ctx.isBasic) && dart.test(_ctx.isCustomRangeSelected);
      this[_NgIf_5_9].ngIf = _ctx.isBasic;
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_1].detectHostChanges(firstCheck);
      let currVal_2 = dart.test(_ctx.isBasic) && !dart.test(_ctx.isCustomRangeSelected);
      if (!(this[_expr_2] === currVal_2)) {
        this.updateClass(this[_el_2], 'custom-tab-left', currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = dart.test(_ctx.isBasic) && dart.test(_ctx.isCustomRangeSelected);
      if (!(this[_expr_3] === currVal_3)) {
        this.updateClass(this[_el_2], 'custom_tab-left-selected', currVal_3);
        this[_expr_3] = currVal_3;
      }
      let l = _ctx.customRangeMsg;
      let currVal_4 = l != null ? l : '';
      if (!(this[_expr_4] === currVal_4)) {
        this[_text_3][$text] = currVal_4;
        this[_expr_4] = currVal_4;
      }
      this[_compView_1].detectChanges();
    }
    dirtyParentQueriesInternal() {
      material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.as(this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_4];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_5];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_1];
      t$0 == null ? null : t$0.destroy();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    this[_SelectionItem_1_6] = null;
    this[_el_2] = null;
    this[_text_3] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_SelectionItem_1_6]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_el_2]: dart.fieldType(html.DivElement),
    [_text_3]: dart.fieldType(html.Text),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent3 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent3, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _text_1 = Symbol('_text_1');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4 = class _ViewDateRangeEditorComponent4 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'custom_range_desc';
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.customRangeDescription;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent4 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent4, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _GlyphComponent_0_6 = Symbol('_GlyphComponent_0_6');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5 = class _ViewDateRangeEditorComponent5 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'buttonDecorator', '');
      this[_el_0].className = 'expend-more';
      this.createAttr(this[_el_0], 'icon', 'expand_more');
      this.createAttr(this[_el_0], 'role', 'button');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0]));
      this[_GlyphComponent_0_6] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_GlyphComponent_0_6], []);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_GlyphComponent_0_6].icon = 'expand_more';
        changed = true;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_GlyphComponent_0_6] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_GlyphComponent_0_6]: dart.fieldType(glyph__glyph.GlyphComponent)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent5 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent5, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _MaterialSelectItemComponent_0_8 = Symbol('_MaterialSelectItemComponent_0_8');
  const _MaterialTooltipDirective_0_9 = Symbol('_MaterialTooltipDirective_0_9');
  const __TooltipController_0_11 = Symbol('__TooltipController_0_11');
  const _expr_1 = Symbol('_expr_1');
  const _expr_5 = Symbol('_expr_5');
  const _TooltipController_0_11 = Symbol('_TooltipController_0_11');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6 = class _ViewDateRangeEditorComponent6 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    get [_TooltipController_0_11]() {
      if (this[__TooltipController_0_11] == null) {
        this[__TooltipController_0_11] = material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.parentView.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.viewData.parentIndex, null)));
      }
      return this[__TooltipController_0_11];
    }
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'closeOnActivate', 'false');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialSelectItemComponent_0_8] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
      this[_MaterialTooltipDirective_0_9] = new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.viewData.parentIndex)), this[_appEl_0], html.HtmlElement._check(this[_el_0]), this[_appEl_0], this[_compView_0].ref, html.Window._check(this.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.viewData.parentIndex)));
      this[_SelectionItem_0_10] = this[_MaterialSelectItemComponent_0_8];
      this[_text_1] = html.Text.new('');
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent7);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_8], [JSArrayOfObject().of([this[_text_1], this[_appEl_2]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_0_8].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_appEl_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MaterialSelectItemComponent_0_8];
      }
      if (token === dart.wrapType(model__selection__selection_container.SelectionItem) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_SelectionItem_0_10];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_TooltipController_0_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_preset = material_datepicker__preset.DatepickerPreset._check(this.locals[$_get]('$implicit'));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_8].closeOnActivate = 'false';
      }
      let currVal_0 = !dart.test(_ctx.isValid(local_preset));
      if (!(this[_expr_0] === currVal_0)) {
        this[_MaterialSelectItemComponent_0_8].disabled = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isSelected(local_preset.range);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_MaterialSelectItemComponent_0_8].selected = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_3 = _ctx.rangeDisabledTooltip;
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialTooltipDirective_0_9].text = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = !dart.test(_ctx.isValid(local_preset));
      if (!(this[_expr_4] === currVal_4)) {
        this[_MaterialTooltipDirective_0_9].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (firstCheck) {
        this[_MaterialTooltipDirective_0_9].ngOnInit();
      }
      this[_NgIf_2_9].ngIf = local_preset.alternatives != null && dart.test(local_preset.alternatives[$isNotEmpty]);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_5 = src__core__linker__app_view_utils.interpolate0(local_preset.title);
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_text_1][$text] = core.String._check(currVal_5);
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialTooltipDirective_0_9].ngAfterViewInit();
      }
    }
    dirtyParentQueriesInternal() {
      material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.as(this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0];
      t$0 == null ? null : t$0.destroy();
      this[_MaterialSelectItemComponent_0_8].ngOnDestroy();
      this[_MaterialTooltipDirective_0_9].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_preset = material_datepicker__preset.DatepickerPreset._check(this.locals[$_get]('$implicit'));
      this.ctx.onRangeClicked(html.UIEvent._check($event), local_preset.range);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialSelectItemComponent_0_8] = null;
    this[_MaterialTooltipDirective_0_9] = null;
    this[_SelectionItem_0_10] = null;
    this[__TooltipController_0_11] = null;
    this[_text_1] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    [_TooltipController_0_11]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialSelectItemComponent_0_8]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_MaterialTooltipDirective_0_9]: dart.fieldType(src__material_tooltip__tooltip.MaterialTooltipDirective),
    [_SelectionItem_0_10]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [__TooltipController_0_11]: dart.fieldType(dart.dynamic),
    [_text_1]: dart.fieldType(html.Text),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.String),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent6 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent6, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _MaterialButtonComponent_0_6 = Symbol('_MaterialButtonComponent_0_6');
  const _PopupSourceDirective_0_7 = Symbol('_PopupSourceDirective_0_7');
  const _GlyphComponent_1_5 = Symbol('_GlyphComponent_1_5');
  const _compView_2 = Symbol('_compView_2');
  const _MaterialPopupComponent_2_8 = Symbol('_MaterialPopupComponent_2_8');
  const __PopupHierarchy_2_11 = Symbol('__PopupHierarchy_2_11');
  const __PopupRef_2_12 = Symbol('__PopupRef_2_12');
  const _NgFor_3_9 = Symbol('_NgFor_3_9');
  const _expr_6 = Symbol('_expr_6');
  const _PopupHierarchy_2_11 = Symbol('_PopupHierarchy_2_11');
  const _PopupRef_2_12 = Symbol('_PopupRef_2_12');
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  const _handle_keypress_0_1 = Symbol('_handle_keypress_0_1');
  const _handle_trigger_0_2 = Symbol('_handle_trigger_0_2');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7 = class _ViewDateRangeEditorComponent7 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
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
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'alignPositionX', 'after');
      this.createAttr(this[_el_0], 'alignPositionY', 'start');
      this[_el_0].className = 'preset-dropdown-button';
      this.createAttr(this[_el_0], 'icon', '');
      this.createAttr(this[_el_0], 'popupSource', '');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('acxDarkTheme'))), this.parentView.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), this[_AcxDarkTheme_0_5], this[_compView_0].ref);
      this[_PopupSourceDirective_0_7] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.viewData.parentIndex)), html.HtmlElement._check(this[_el_0]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.parentView.parentView.viewData.parentIndex, null)));
      this[_compView_1] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.createAttr(this[_el_1], 'icon', 'arrow_drop_down');
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_GlyphComponent_1_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_GlyphComponent_1_5], []);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfElement().of([this[_el_1]])]);
      this[_compView_2] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, this[_el_2]);
      this[_MaterialPopupComponent_2_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.parentView.parentView.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.parentView.parentView.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.parentView.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.parentView.parentView.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.parentView.parentView.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.parentView.parentView.injectorGet(const$1 || (const$1 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions'))), this.parentView.parentView.viewData.parentIndex)), core.bool._check(this.parentView.parentView.parentView.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'))), this.parentView.parentView.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.parentView.parentView.viewData.parentIndex, null)), this[_compView_2].ref, this[_appEl_2], new src__core__linker__element_ref.ElementRef.new(this[_el_2]));
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent8);
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this[_compView_2].create(this[_MaterialPopupComponent_2_8], [const$3 || (const$3 = dart.constList([], dart.dynamic)), JSArrayOfViewContainer().of([this[_appEl_3]]), const$4 || (const$4 = dart.constList([], dart.dynamic))]);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_keypress_0_1)));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_2)));
      this.init([this[_el_0], this[_appEl_2]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialButtonComponent_0_6];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_PopupSourceDirective_0_7];
      }
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialPopupComponent_2_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupHierarchy_2_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupRef_2_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_menuSource = this[_PopupSourceDirective_0_7];
      let local_preset = material_datepicker__preset.DatepickerPreset._check(this.parentView.locals[$_get]('$implicit'));
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_PopupSourceDirective_0_7].alignX = 'after';
        this[_PopupSourceDirective_0_7].alignY = 'start';
      }
      changed = false;
      if (firstCheck) {
        this[_GlyphComponent_1_5].icon = 'arrow_drop_down';
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialPopupComponent_2_8].offsetX = 9;
        if (!(0 - 4 === null)) {
          this[_MaterialPopupComponent_2_8].offsetY = 0 - 4;
        }
      }
      let currVal_5 = local_menuSource;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_MaterialPopupComponent_2_8].source = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = local_preset.alternatives;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_NgFor_3_9].ngForOf = currVal_6;
        this[_expr_6] = currVal_6;
      }
      this[_NgFor_3_9].ngDoCheck();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
      if (firstCheck) {
        this[_PopupSourceDirective_0_7].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_MaterialPopupComponent_2_8].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_1];
      t$1 == null ? null : t$1.destroy();
      let t$2 = this[_compView_2];
      t$2 == null ? null : t$2.destroy();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_MaterialPopupComponent_2_8].ngOnDestroy();
    }
    [_handle_click_0_0]($event) {
      dart.dsend($event, 'stopPropagation');
    }
    [_handle_keypress_0_1]($event) {
      dart.dsend($event, 'stopPropagation');
    }
    [_handle_trigger_0_2]($event) {
      let local_popup = this[_MaterialPopupComponent_2_8];
      local_popup.toggle();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_GlyphComponent_1_5] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_appEl_2] = null;
    this[_MaterialPopupComponent_2_8] = null;
    this[__PopupHierarchy_2_11] = null;
    this[__PopupRef_2_12] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_keypress_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_0_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    [_PopupHierarchy_2_11]: dart.fnType(dart.dynamic, []),
    [_PopupRef_2_12]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_PopupSourceDirective_0_7]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_1_5]: dart.fieldType(glyph__glyph.GlyphComponent),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_2_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_2_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_2_12]: dart.fieldType(dart.dynamic),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent7 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent7, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const __TooltipController_0_12 = Symbol('__TooltipController_0_12');
  const _TooltipController_0_12 = Symbol('_TooltipController_0_12');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8 = class _ViewDateRangeEditorComponent8 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    get [_TooltipController_0_12]() {
      if (this[__TooltipController_0_12] == null) {
        this[__TooltipController_0_12] = material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.as(this.parentView.parentView)[_TooltipController_0_11]), utils__disposer__disposer.Disposer._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.parentView.parentView.viewData.parentIndex, null)));
      }
      return this[__TooltipController_0_12];
    }
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'preset-dropdown-item item';
      this.createAttr(this[_el_0], 'closeOnActivate', 'false');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialSelectItemComponent_0_8] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.viewData.parentIndex)), material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.as(this.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
      this[_MaterialTooltipDirective_0_9] = new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.viewData.parentIndex)), this[_appEl_0], html.HtmlElement._check(this[_el_0]), this[_appEl_0], this[_compView_0].ref, html.Window._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentView.viewData.parentIndex)));
      this[_SelectionItem_0_10] = this[_MaterialSelectItemComponent_0_8];
      this[_text_1] = html.Text.new('');
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_8], [JSArrayOfText().of([this[_text_1]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_0_8].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_appEl_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialSelectItemComponent_0_8];
      }
      if (token === dart.wrapType(model__selection__selection_container.SelectionItem) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_SelectionItem_0_10];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_TooltipController_0_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_alternative = this.locals[$_get]('$implicit');
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_8].closeOnActivate = 'false';
      }
      let currVal_0 = !dart.test(_ctx.isValid(material_datepicker__preset.DatepickerPreset._check(local_alternative)));
      if (!(this[_expr_0] === currVal_0)) {
        this[_MaterialSelectItemComponent_0_8].disabled = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isAlternativePresetSelected(material_datepicker__preset.DatepickerPreset._check(local_alternative));
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_MaterialSelectItemComponent_0_8].selected = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_3 = _ctx.rangeDisabledTooltip;
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialTooltipDirective_0_9].text = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = !dart.test(_ctx.isValid(material_datepicker__preset.DatepickerPreset._check(local_alternative)));
      if (!(this[_expr_4] === currVal_4)) {
        this[_MaterialTooltipDirective_0_9].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (firstCheck) {
        this[_MaterialTooltipDirective_0_9].ngOnInit();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_5 = src__core__linker__app_view_utils.interpolate0(dart.dload(local_alternative, 'shortTitle'));
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_text_1][$text] = core.String._check(currVal_5);
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialTooltipDirective_0_9].ngAfterViewInit();
      }
    }
    dirtyParentQueriesInternal() {
      material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.as(this.parentView.parentView.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_MaterialSelectItemComponent_0_8].ngOnDestroy();
      this[_MaterialTooltipDirective_0_9].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_preset = material_datepicker__preset.DatepickerPreset._check(this.parentView.parentView.locals[$_get]('$implicit'));
      let local_alternative = this.locals[$_get]('$implicit');
      this.ctx.onAlternativePresetClicked(html.UIEvent._check($event), local_preset, material_datepicker__preset.DatepickerPreset._check(local_alternative));
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialSelectItemComponent_0_8] = null;
    this[_MaterialTooltipDirective_0_9] = null;
    this[_SelectionItem_0_10] = null;
    this[__TooltipController_0_12] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    [_TooltipController_0_12]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialSelectItemComponent_0_8]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_MaterialTooltipDirective_0_9]: dart.fieldType(src__material_tooltip__tooltip.MaterialTooltipDirective),
    [_SelectionItem_0_10]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [__TooltipController_0_12]: dart.fieldType(dart.dynamic),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.String),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent8 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent8, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _DeferredValidator_2_5 = Symbol('_DeferredValidator_2_5');
  const _NgValidators_2_6 = Symbol('_NgValidators_2_6');
  const _NgModel_2_7 = Symbol('_NgModel_2_7');
  const _NgControl_2_8 = Symbol('_NgControl_2_8');
  const _MaterialInputComponent_2_9 = Symbol('_MaterialInputComponent_2_9');
  const _BaseMaterialInput_2_10 = Symbol('_BaseMaterialInput_2_10');
  const _MaterialInputDefaultValueAccessor_2_11 = Symbol('_MaterialInputDefaultValueAccessor_2_11');
  const _text_4 = Symbol('_text_4');
  const _el_5 = Symbol('_el_5');
  const _compView_5 = Symbol('_compView_5');
  const _MaterialSelectItemComponent_5_5 = Symbol('_MaterialSelectItemComponent_5_5');
  const _el_6 = Symbol('_el_6');
  const _compView_6 = Symbol('_compView_6');
  const _DeferredValidator_6_5 = Symbol('_DeferredValidator_6_5');
  const _NgValidators_6_6 = Symbol('_NgValidators_6_6');
  const _NgModel_6_7 = Symbol('_NgModel_6_7');
  const _NgControl_6_8 = Symbol('_NgControl_6_8');
  const _MaterialInputComponent_6_9 = Symbol('_MaterialInputComponent_6_9');
  const _BaseMaterialInput_6_10 = Symbol('_BaseMaterialInput_6_10');
  const _MaterialInputDefaultValueAccessor_6_11 = Symbol('_MaterialInputDefaultValueAccessor_6_11');
  const _el_7 = Symbol('_el_7');
  const _text_8 = Symbol('_text_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_11 = Symbol('_expr_11');
  let const$5;
  let const$6;
  const _handle_trigger_1_0 = Symbol('_handle_trigger_1_0');
  const _handle_click_2_0 = Symbol('_handle_click_2_0');
  const _handle_ngModelChange_2_1 = Symbol('_handle_ngModelChange_2_1');
  const _handle_trigger_5_0 = Symbol('_handle_trigger_5_0');
  const _handle_click_6_0 = Symbol('_handle_click_6_0');
  const _handle_ngModelChange_6_1 = Symbol('_handle_ngModelChange_6_1');
  let const$7;
  let const$8;
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9 = class _ViewDateRangeEditorComponent9 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'days group';
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this[_el_1].className = 'days-input days-to-today item';
      this.createAttr(this[_el_1], 'closeOnActivate', 'false');
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialSelectItemComponent_1_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_1].ref);
      this[_SelectionItem_1_6] = this[_MaterialSelectItemComponent_1_5];
      this[_compView_2] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_DeferredValidator_2_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_2_6] = [this[_DeferredValidator_2_5]];
      this[_NgModel_2_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_2_6], null);
      this[_NgControl_2_8] = this[_NgModel_2_7];
      this[_MaterialInputComponent_2_9] = new material_input__material_input.MaterialInputComponent.new(null, null, this[_NgControl_2_8], this[_compView_2].ref, this[_DeferredValidator_2_5]);
      this[_BaseMaterialInput_2_10] = this[_MaterialInputComponent_2_9];
      this[_MaterialInputDefaultValueAccessor_2_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_2_10], this[_NgControl_2_8]);
      this[_compView_2].create(this[_MaterialInputComponent_2_9], [const$5 || (const$5 = dart.constList([], dart.dynamic))]);
      this[_el_3] = doc[$createElement]('span');
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new('');
      this[_el_3][$append](this[_text_4]);
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_5], [JSArrayOfElement().of([this[_el_2], this[_el_3]])]);
      this[_compView_5] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 5);
      this[_el_5] = this[_compView_5].rootEl;
      this[_el_0][$append](this[_el_5]);
      this[_el_5].className = 'days-input days-to-yesterday item';
      this.createAttr(this[_el_5], 'closeOnActivate', 'false');
      this.addShimC(html.HtmlElement._check(this[_el_5]));
      this[_MaterialSelectItemComponent_5_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_5]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_5].ref);
      this[_SelectionItem_5_6] = this[_MaterialSelectItemComponent_5_5];
      this[_compView_6] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 6);
      this[_el_6] = this[_compView_6].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_6]));
      this[_DeferredValidator_6_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_6_6] = [this[_DeferredValidator_6_5]];
      this[_NgModel_6_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_6_6], null);
      this[_NgControl_6_8] = this[_NgModel_6_7];
      this[_MaterialInputComponent_6_9] = new material_input__material_input.MaterialInputComponent.new(null, null, this[_NgControl_6_8], this[_compView_6].ref, this[_DeferredValidator_6_5]);
      this[_BaseMaterialInput_6_10] = this[_MaterialInputComponent_6_9];
      this[_MaterialInputDefaultValueAccessor_6_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_6_10], this[_NgControl_6_8]);
      this[_compView_6].create(this[_MaterialInputComponent_6_9], [const$6 || (const$6 = dart.constList([], dart.dynamic))]);
      this[_el_7] = doc[$createElement]('span');
      this.addShimE(this[_el_7]);
      this[_text_8] = html.Text.new('');
      this[_el_7][$append](this[_text_8]);
      this[_compView_5].create(this[_MaterialSelectItemComponent_5_5], [JSArrayOfElement().of([this[_el_6], this[_el_7]])]);
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_1_0)));
      this[_el_2][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_2_0)));
      let subscription_1 = this[_NgModel_2_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_2_1)));
      let subscription_2 = this[_MaterialSelectItemComponent_5_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_5_0)));
      this[_el_6][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_6_0)));
      let subscription_3 = this[_NgModel_6_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_6_1)));
      this.init([this[_el_0]], [subscription_0, subscription_1, subscription_2, subscription_3]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 2 === nodeIndex) {
        return this[_DeferredValidator_2_5];
      }
      if (token === (const$7 || (const$7 = dart.const(new src__core__di__opaque_token.MultiToken.new('NgValidators')))) && 2 === nodeIndex) {
        return this[_NgValidators_2_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 2 === nodeIndex) {
        return this[_NgModel_2_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 2 === nodeIndex) {
        return this[_NgControl_2_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus.Focusable)) && 2 === nodeIndex) {
        return this[_MaterialInputComponent_2_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 2 === nodeIndex) {
        return this[_BaseMaterialInput_2_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 2 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_2_11];
      }
      if ((token === dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_MaterialSelectItemComponent_1_5];
      }
      if (token === dart.wrapType(model__selection__selection_container.SelectionItem) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_SelectionItem_1_6];
      }
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 6 === nodeIndex) {
        return this[_DeferredValidator_6_5];
      }
      if (token === (const$8 || (const$8 = dart.const(new src__core__di__opaque_token.MultiToken.new('NgValidators')))) && 6 === nodeIndex) {
        return this[_NgValidators_6_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 6 === nodeIndex) {
        return this[_NgModel_6_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 6 === nodeIndex) {
        return this[_NgControl_6_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus.Focusable)) && 6 === nodeIndex) {
        return this[_MaterialInputComponent_6_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 6 === nodeIndex) {
        return this[_BaseMaterialInput_6_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 6 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_6_11];
      }
      if ((token === dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_MaterialSelectItemComponent_5_5];
      }
      if (token === dart.wrapType(model__selection__selection_container.SelectionItem) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_SelectionItem_5_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialSelectItemComponent_1_5].closeOnActivate = 'false';
      }
      let currVal_0 = _ctx.isSelected(_ctx.daysToTodayRange);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialSelectItemComponent_1_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      changed = false;
      this[_NgModel_2_7].model = _ctx.daysToToday;
      this[_NgModel_2_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_2_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_2_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_3 = _ctx.maxDaysInputLength;
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialInputComponent_2_9].maxCount = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialSelectItemComponent_5_5].closeOnActivate = 'false';
      }
      let currVal_6 = _ctx.isSelected(_ctx.daysToYesterdayRange);
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_MaterialSelectItemComponent_5_5].selected = currVal_6;
        this[_expr_6] = currVal_6;
      }
      changed = false;
      this[_NgModel_6_7].model = _ctx.daysToYesterday;
      this[_NgModel_6_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_6_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_6_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_9 = _ctx.maxDaysInputLength;
      if (!(this[_expr_9] == currVal_9)) {
        this[_MaterialInputComponent_6_9].maxCount = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      this[_compView_1].detectHostChanges(firstCheck);
      let l = _ctx.daysToTodayMsg;
      let currVal_5 = l != null ? l : '';
      if (!(this[_expr_5] === currVal_5)) {
        this[_text_4][$text] = currVal_5;
        this[_expr_5] = currVal_5;
      }
      this[_compView_5].detectHostChanges(firstCheck);
      let l$ = _ctx.daysToYesterdayMsg;
      let currVal_11 = l$ != null ? l$ : '';
      if (!(this[_expr_11] === currVal_11)) {
        this[_text_8][$text] = currVal_11;
        this[_expr_11] = currVal_11;
      }
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_5].detectChanges();
      this[_compView_6].detectChanges();
      if (firstCheck) {
        this[_MaterialInputComponent_2_9].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_MaterialInputComponent_6_9].ngAfterViewInit();
      }
    }
    dirtyParentQueriesInternal() {
      material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.as(this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
      material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.as(this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
      let t$ = this[_compView_2];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_5];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_6];
      t$1 == null ? null : t$1.destroy();
      this[_MaterialInputComponent_2_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_2_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
      this[_MaterialInputComponent_6_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_6_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_5_5].ngOnDestroy();
    }
    [_handle_trigger_1_0]($event) {
      this.ctx.onRangeClicked(html.UIEvent._check($event), this.ctx.daysToTodayRange);
    }
    [_handle_click_2_0]($event) {
      dart.dsend($event, 'stopPropagation');
    }
    [_handle_ngModelChange_2_1]($event) {
      this.ctx.daysToToday = core.String._check($event);
    }
    [_handle_trigger_5_0]($event) {
      this.ctx.onRangeClicked(html.UIEvent._check($event), this.ctx.daysToYesterdayRange);
    }
    [_handle_click_6_0]($event) {
      dart.dsend($event, 'stopPropagation');
    }
    [_handle_ngModelChange_6_1]($event) {
      this.ctx.daysToYesterday = core.String._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    this[_SelectionItem_1_6] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_DeferredValidator_2_5] = null;
    this[_NgValidators_2_6] = null;
    this[_NgModel_2_7] = null;
    this[_NgControl_2_8] = null;
    this[_MaterialInputComponent_2_9] = null;
    this[_BaseMaterialInput_2_10] = null;
    this[_MaterialInputDefaultValueAccessor_2_11] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_el_5] = null;
    this[_compView_5] = null;
    this[_MaterialSelectItemComponent_5_5] = null;
    this[_SelectionItem_5_6] = null;
    this[_el_6] = null;
    this[_compView_6] = null;
    this[_DeferredValidator_6_5] = null;
    this[_NgValidators_6_6] = null;
    this[_NgModel_6_7] = null;
    this[_NgControl_6_8] = null;
    this[_MaterialInputComponent_6_9] = null;
    this[_BaseMaterialInput_6_10] = null;
    this[_MaterialInputDefaultValueAccessor_6_11] = null;
    this[_el_7] = null;
    this[_text_8] = null;
    this[_expr_0] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_9] = null;
    this[_expr_11] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_2_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_2_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_5_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_6_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_6_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_SelectionItem_1_6]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_2_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_2_6]: dart.fieldType(core.List),
    [_NgModel_2_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_2_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_2_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_2_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_2_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_el_5]: dart.fieldType(html.Element),
    [_compView_5]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_5_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_SelectionItem_5_6]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_el_6]: dart.fieldType(html.Element),
    [_compView_6]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_6_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_6_6]: dart.fieldType(core.List),
    [_NgModel_6_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_6_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_6_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_6_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_6_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_el_7]: dart.fieldType(html.Element),
    [_text_8]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.int),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(core.int),
    [_expr_11]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent9 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent9, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _ComparisonRangeEditorComponent_1_5 = Symbol('_ComparisonRangeEditorComponent_1_5');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10 = class _ViewDateRangeEditorComponent10 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'comparison group';
      this.addShimC(this[_el_0]);
      this[_compView_1] = new src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_ComparisonRangeEditorComponent_1_5] = new src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.new();
      this[_compView_1].create(this[_ComparisonRangeEditorComponent_1_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) && 1 === nodeIndex) {
        return this[_ComparisonRangeEditorComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.model;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_ComparisonRangeEditorComponent_1_5].model = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_ComparisonRangeEditorComponent_1_5] = null;
    this[_expr_0] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0),
    [_ComparisonRangeEditorComponent_1_5]: dart.fieldType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent10 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent10, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _anchor_2 = Symbol('_anchor_2');
  const _el_2_0 = Symbol('_el_2_0');
  const _el_4 = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _DateRangeInputComponent_4_5 = Symbol('_DateRangeInputComponent_4_5');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _anchor_8 = Symbol('_anchor_8');
  const _el_8_0 = Symbol('_el_8_0');
  const _el_9 = Symbol('_el_9');
  const _NgIf_10_9 = Symbol('_NgIf_10_9');
  const _NgIf_11_9 = Symbol('_NgIf_11_9');
  const _expr_7 = Symbol('_expr_7');
  const _expr_12 = Symbol('_expr_12');
  const _handle_rangeChange_4_1 = Symbol('_handle_rangeChange_4_1');
  const _handle_stateChange_4_0 = Symbol('_handle_stateChange_4_0');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11 = class _ViewDateRangeEditorComponent11 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'right-column';
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent12);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_anchor_2] = html.Comment._check(src__core__linker__app_view.ngAnchor[$clone](false));
      this[_el_0][$append](this[_anchor_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_3].className = 'range-input';
      this.addShimC(this[_el_3]);
      this[_compView_4] = new material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_3][$append](this[_el_4]);
      this[_el_4].className = 'range';
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_DateRangeInputComponent_4_5] = new material_datepicker__date_range_input.DateRangeInputComponent.new(this[_compView_4].ref);
      this[_compView_4].create(this[_DateRangeInputComponent_4_5], []);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent14);
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent15);
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent16);
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this[_anchor_8] = html.Comment._check(src__core__linker__app_view.ngAnchor[$clone](false));
      this[_el_0][$append](this[_anchor_8]);
      this[_el_9] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_9].className = 'picker-container';
      this.addShimC(this[_el_9]);
      let _anchor_10 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_9][$append](_anchor_10);
      this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, 9, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent18);
      this[_NgIf_10_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      let _anchor_11 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_9][$append](_anchor_11);
      this[_appEl_11] = new src__core__linker__view_container.ViewContainer.new(11, 9, this, _anchor_11);
      let _TemplateRef_11_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_11], material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent19);
      this[_NgIf_11_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let subscription_0 = this[_DateRangeInputComponent_4_5].rangeChange.listen(this.eventHandler1(model__date__date.DateRange, model__date__date.DateRange, dart.bind(this, _handle_rangeChange_4_1)));
      let subscription_1 = this[_DateRangeInputComponent_4_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_4_0)));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__date_range_input.DateRangeInputComponent) && 4 === nodeIndex) {
        return this[_DateRangeInputComponent_4_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_1_9].ngIf = _ctx.isBasic;
      let currVal_1 = _ctx.isBasic === true;
      if (!(this[_expr_1] === currVal_1)) {
        if (currVal_1) {
          let doc = html.document;
          this[_el_2_0] = html.DivElement._check(doc[$createElement]('div'));
          this[_el_2_0].className = 'content-separator';
          this.addShimC(this[_el_2_0]);
          this.addInlinedNodes(this[_anchor_2], JSArrayOfNode().of([this[_el_2_0]]));
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_2_0]]));
        }
        this[_expr_1] = currVal_1;
      }
      changed = false;
      let currVal_2 = _ctx.model.rangeId;
      if (!(this[_expr_2] == currVal_2)) {
        this[_DateRangeInputComponent_4_5].rangeId = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.maxDate;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_DateRangeInputComponent_4_5].maxDate = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.minDate;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_DateRangeInputComponent_4_5].minDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.model.range.value;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_DateRangeInputComponent_4_5].range = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.isClearRangeSelected;
      if (!(this[_expr_6] == currVal_6)) {
        this[_DateRangeInputComponent_4_5].isClearRangeSelected = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.model.calendar.value;
      if (!core.identical(this[_expr_7], currVal_7)) {
        this[_DateRangeInputComponent_4_5].state = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_DateRangeInputComponent_4_5].ngOnInit();
      }
      this[_NgIf_5_9].ngIf = _ctx.model.comparisonEnabled;
      this[_NgIf_6_9].ngIf = _ctx.model.comparisonEnabled;
      this[_NgIf_7_9].ngIf = _ctx.supportsMonthSelector;
      let currVal_11 = !dart.test(_ctx.isCalendarCreated) === true;
      if (!(this[_expr_11] === currVal_11)) {
        if (currVal_11) {
          let doc = html.document;
          this[_el_8_0] = html.DivElement._check(doc[$createElement]('div'));
          this[_el_8_0].className = 'calendar-placeholder';
          this.addShimC(this[_el_8_0]);
          this.addInlinedNodes(this[_anchor_8], JSArrayOfNode().of([this[_el_8_0]]));
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_8_0]]));
        }
        this[_expr_11] = currVal_11;
      }
      this[_NgIf_10_9].ngIf = _ctx.isCalendarCreated;
      this[_NgIf_11_9].ngIf = _ctx.supportsMonthSelector;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      let currVal_12 = _ctx.compact;
      if (!(this[_expr_12] == currVal_12)) {
        this.updateClass(this[_el_9], 'compact', currVal_12);
        this[_expr_12] = currVal_12;
      }
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_5];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_6];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_7];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_10];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_appEl_11];
      t$3 == null ? null : t$3.destroyNestedViews();
      let t$4 = this[_compView_4];
      t$4 == null ? null : t$4.destroy();
      this[_DateRangeInputComponent_4_5].ngOnDestroy();
    }
    [_handle_stateChange_4_0]($event) {
      this.ctx.model.calendar.value = material_datepicker__calendar.CalendarState._check($event);
    }
    [_handle_rangeChange_4_1]($event) {
      this.ctx.model.range.value = model__date__date.DateRange._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_anchor_2] = null;
    this[_el_2_0] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_DateRangeInputComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_anchor_8] = null;
    this[_el_8_0] = null;
    this[_el_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_expr_1] = false;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_11] = false;
    this[_expr_12] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_stateChange_4_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_rangeChange_4_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_anchor_2]: dart.fieldType(html.Comment),
    [_el_2_0]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0),
    [_DateRangeInputComponent_4_5]: dart.fieldType(material_datepicker__date_range_input.DateRangeInputComponent),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_anchor_8]: dart.fieldType(html.Comment),
    [_el_8_0]: dart.fieldType(html.DivElement),
    [_el_9]: dart.fieldType(html.DivElement),
    [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_10_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_11]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_11_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.bool)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent11 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent11, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _compView_3 = Symbol('_compView_3');
  const _GlyphComponent_3_5 = Symbol('_GlyphComponent_3_5');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12 = class _ViewDateRangeEditorComponent12 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.createAttr(this[_el_0], 'buttonDecorator', '');
      this[_el_0].className = 'button-decorator';
      this.createAttr(this[_el_0], 'role', 'button');
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0]));
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'custom-tab-right';
      this.addShimC(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      this[_compView_3] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      this[_el_0][$append](this[_el_3]);
      this[_el_3].className = 'expand-less';
      this.createAttr(this[_el_3], 'icon', 'expand_less');
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_GlyphComponent_3_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_3]));
      this[_compView_3].create(this[_GlyphComponent_3_5], []);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'disableCustomMode')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_GlyphComponent_3_5].icon = 'expand_less';
        changed = true;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      let l = _ctx.customRangeMsg;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_2][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_3].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_3];
      t == null ? null : t.destroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_GlyphComponent_3_5] = null;
    this[_expr_0] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_el_1]: dart.fieldType(html.DivElement),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_3_5]: dart.fieldType(glyph__glyph.GlyphComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent12 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent12, AppViewAndintToAppViewOfDateRangeEditorComponent());
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14 = class _ViewDateRangeEditorComponent14 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
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
      let l = _ctx.comparisonHeaderMsg;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent14 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent14, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _DateRangeInputComponent_1_5 = Symbol('_DateRangeInputComponent_1_5');
  const _handle_rangeChange_1_1 = Symbol('_handle_rangeChange_1_1');
  const _handle_stateChange_1_0 = Symbol('_handle_stateChange_1_0');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15 = class _ViewDateRangeEditorComponent15 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'range-input';
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this[_el_1].className = 'comparison inputs';
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_DateRangeInputComponent_1_5] = new material_datepicker__date_range_input.DateRangeInputComponent.new(this[_compView_1].ref);
      this[_compView_1].create(this[_DateRangeInputComponent_1_5], []);
      let subscription_0 = this[_DateRangeInputComponent_1_5].rangeChange.listen(this.eventHandler1(model__date__date.DateRange, model__date__date.DateRange, dart.bind(this, _handle_rangeChange_1_1)));
      let subscription_1 = this[_DateRangeInputComponent_1_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_1_0)));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__date_range_input.DateRangeInputComponent) && 1 === nodeIndex) {
        return this[_DateRangeInputComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.model.comparisonId;
      if (!(this[_expr_0] == currVal_0)) {
        this[_DateRangeInputComponent_1_5].rangeId = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.model.maxDate;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_DateRangeInputComponent_1_5].maxDate = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.model.minDate;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_DateRangeInputComponent_1_5].minDate = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.model.comparison.value;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_DateRangeInputComponent_1_5].range = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.isClearRangeSelected;
      if (!(this[_expr_4] == currVal_4)) {
        this[_DateRangeInputComponent_1_5].isClearRangeSelected = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.model.calendar.value;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_DateRangeInputComponent_1_5].state = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_DateRangeInputComponent_1_5].ngOnInit();
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
      this[_DateRangeInputComponent_1_5].ngOnDestroy();
    }
    [_handle_stateChange_1_0]($event) {
      this.ctx.model.calendar.value = material_datepicker__calendar.CalendarState._check($event);
    }
    [_handle_rangeChange_1_1]($event) {
      this.ctx.model.comparison.value = model__date__date.DateRange._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_DateRangeInputComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_stateChange_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_rangeChange_1_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0),
    [_DateRangeInputComponent_1_5]: dart.fieldType(material_datepicker__date_range_input.DateRangeInputComponent),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent15 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent15, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _ButtonDirective_1_5 = Symbol('_ButtonDirective_1_5');
  const _KeyboardOnlyFocusIndicatorDirective_1_6 = Symbol('_KeyboardOnlyFocusIndicatorDirective_1_6');
  const _GlyphComponent_4_5 = Symbol('_GlyphComponent_4_5');
  const _NextPrevComponent_5_5 = Symbol('_NextPrevComponent_5_5');
  const _handle_click_1_1 = Symbol('_handle_click_1_1');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16 = class _ViewDateRangeEditorComponent16 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'month-selector-toolbar';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.createAttr(this[_el_1], 'buttonDecorator', '');
      this[_el_1].className = 'month-selector-dropdown';
      this.createAttr(this[_el_1], 'keyboardOnlyFocusIndicator', '');
      this.createAttr(this[_el_1], 'role', 'button');
      this.addShimC(this[_el_1]);
      this[_ButtonDirective_1_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_1]));
      this[_KeyboardOnlyFocusIndicatorDirective_1_6] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_1], utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
      this[_el_2] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_1]);
      this[_el_2].className = 'visible-month';
      this.addShimE(this[_el_2]);
      this[_text_3] = html.Text.new('');
      this[_el_2][$append](this[_text_3]);
      this[_compView_4] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_1][$append](this[_el_4]);
      this[_el_4].className = 'month-selector-dropdown-icon';
      this.createAttr(this[_el_4], 'icon', 'arrow_drop_down');
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_GlyphComponent_4_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_4]));
      this[_compView_4].create(this[_GlyphComponent_4_5], []);
      this[_compView_5] = new material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 5);
      this[_el_5] = this[_compView_5].rootEl;
      this[_el_0][$append](this[_el_5]);
      this[_el_5].className = 'next-prev-range';
      this.addShimC(html.HtmlElement._check(this[_el_5]));
      this[_NextPrevComponent_5_5] = new material_datepicker__next_prev_buttons.NextPrevComponent.new(this[_compView_5].ref);
      this[_compView_5].create(this[_NextPrevComponent_5_5], []);
      this[_el_1][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_1_1)));
      this[_el_1][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_1_5].instance, 'handleKeyPress')));
      this[_el_1][$addEventListener]('keyup', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'resetOutline')));
      this[_el_1][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'resetOutline')));
      this[_el_1][$addEventListener]('mousedown', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'hideOutline')));
      let subscription_0 = this[_ButtonDirective_1_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'onMonthSelectorDropdownClicked')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_ButtonDirective_1_5].instance;
      }
      if (token === dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_KeyboardOnlyFocusIndicatorDirective_1_6];
      }
      if (token === dart.wrapType(material_datepicker__next_prev_buttons.NextPrevComponent) && 5 === nodeIndex) {
        return this[_NextPrevComponent_5_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_GlyphComponent_4_5].icon = 'arrow_drop_down';
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      changed = false;
      let currVal_3 = _ctx.nextPrevModel;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_NextPrevComponent_5_5].model = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_ButtonDirective_1_5].detectHostChanges(this, this[_el_1]);
      let l = _ctx.visibleMonthName;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_3][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.showMonthSelector;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateElemClass(this[_el_4], 'flipped', currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_4].detectChanges();
      this[_compView_5].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_4];
      t == null ? null : t.destroy();
      let t$ = this[_compView_5];
      t$ == null ? null : t$.destroy();
      this[_NextPrevComponent_5_5].ngOnDestroy();
    }
    [_handle_click_1_1]($event) {
      this[_ButtonDirective_1_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_1_6].hideOutline();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_ButtonDirective_1_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_1_6] = null;
    this[_el_2] = null;
    this[_text_3] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_GlyphComponent_4_5] = null;
    this[_el_5] = null;
    this[_compView_5] = null;
    this[_NextPrevComponent_5_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_1_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_ButtonDirective_1_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_1_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_el_2]: dart.fieldType(html.Element),
    [_text_3]: dart.fieldType(html.Text),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_4_5]: dart.fieldType(glyph__glyph.GlyphComponent),
    [_el_5]: dart.fieldType(html.Element),
    [_compView_5]: dart.fieldType(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0),
    [_NextPrevComponent_5_5]: dart.fieldType(material_datepicker__next_prev_buttons.NextPrevComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent16 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent16, AppViewAndintToAppViewOfDateRangeEditorComponent());
  const _ShowHideDirective_0_6 = Symbol('_ShowHideDirective_0_6');
  let const$9;
  const _handle_stateChange_0_1 = Symbol('_handle_stateChange_0_1');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18 = class _ViewDateRangeEditorComponent18 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'picker calendar';
      this.createAttr(this[_el_0], 'mode', 'date-range');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialCalendarPickerComponent_0_5] = new material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.new(time$.Clock._check(this.parentView.parentView.injectorGet(const$9 || (const$9 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.parentView.viewData.parentIndex, null)), time$.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time$.Clock), this.parentView.viewData.parentIndex)), 'date-range');
      this[_ShowHideDirective_0_6] = new utils__showhide__showhide.ShowHideDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialCalendarPickerComponent_0_5], []);
      let subscription_0 = this[_MaterialCalendarPickerComponent_0_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_0_1)));
      let subscription_1 = this[_MaterialCalendarPickerComponent_0_5].visibleMonth.listen(this.eventHandler1(model__date__date.Date, model__date__date.Date, dart.bind(this.ctx, 'onVisibleMonthChange')));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent) && 0 === nodeIndex) {
        return this[_MaterialCalendarPickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_1 = _ctx.model.calendar.value;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_MaterialCalendarPickerComponent_0_5].state = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.allowHighlightUpdates;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MaterialCalendarPickerComponent_0_5].allowHighlightUpdates = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.minDate;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_MaterialCalendarPickerComponent_0_5].minDate = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.maxDate;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_MaterialCalendarPickerComponent_0_5].maxDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.compact;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_MaterialCalendarPickerComponent_0_5].compact = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialCalendarPickerComponent_0_5].ngOnInit();
      }
      let currVal_6 = !dart.test(_ctx.showMonthSelector);
      if (!(this[_expr_6] === currVal_6)) {
        this[_ShowHideDirective_0_6].visible = currVal_6;
        this[_expr_6] = currVal_6;
      }
      if (firstCheck) {
        this[_ShowHideDirective_0_6].ngOnInit();
      }
      let currVal_0 = _ctx.popupHandle;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setProp(this[_el_0], 'popupHandle', currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialCalendarPickerComponent_0_5].ngAfterViewInit();
      }
    }
    dirtyParentQueriesInternal() {
      material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.as(this.parentView.parentView)[_query_MaterialCalendarPickerComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialCalendarPickerComponent_0_5].ngOnDestroy();
      this[_ShowHideDirective_0_6].ngOnDestroy();
    }
    [_handle_stateChange_0_1]($event) {
      this.ctx.model.calendar.value = material_datepicker__calendar.CalendarState._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialCalendarPickerComponent_0_5] = null;
    this[_ShowHideDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_stateChange_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0),
    [_MaterialCalendarPickerComponent_0_5]: dart.fieldType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent),
    [_ShowHideDirective_0_6]: dart.fieldType(utils__showhide__showhide.ShowHideDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent18 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent18, AppViewAndintToAppViewOfDateRangeEditorComponent());
  let const$10;
  const _handle_stateChange_0_0 = Symbol('_handle_stateChange_0_0');
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19 = class _ViewDateRangeEditorComponent19 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'picker month-selector';
      this.createAttr(this[_el_0], 'mode', 'single-date');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialMonthPickerComponent_0_5] = new material_datepicker__material_month_picker.MaterialMonthPickerComponent.new(time$.Clock._check(this.parentView.parentView.injectorGet(const$10 || (const$10 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.parentView.viewData.parentIndex, null)), 'single-date');
      this[_ShowHideDirective_0_6] = new utils__showhide__showhide.ShowHideDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialMonthPickerComponent_0_5], []);
      let subscription_0 = this[_MaterialMonthPickerComponent_0_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__material_month_picker.MaterialMonthPickerComponent) && 0 === nodeIndex) {
        return this[_MaterialMonthPickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.minDate;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialMonthPickerComponent_0_5].minDate = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.maxDate;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_MaterialMonthPickerComponent_0_5].maxDate = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.monthSelectorState;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MaterialMonthPickerComponent_0_5].state = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialMonthPickerComponent_0_5].ngOnInit();
      }
      let currVal_3 = _ctx.showMonthSelector;
      if (!(this[_expr_3] == currVal_3)) {
        this[_ShowHideDirective_0_6].visible = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (firstCheck) {
        this[_ShowHideDirective_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialMonthPickerComponent_0_5].ngAfterViewInit();
      }
    }
    dirtyParentQueriesInternal() {
      material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.as(this.parentView.parentView)[_query_MaterialMonthPickerComponent_1_1_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialMonthPickerComponent_0_5].ngOnDestroy();
      this[_ShowHideDirective_0_6].ngOnDestroy();
    }
    [_handle_stateChange_0_0]($event) {
      this.ctx.monthSelectorState = material_datepicker__calendar.CalendarState._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialMonthPickerComponent_0_5] = null;
    this[_ShowHideDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._renderType;
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_stateChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0),
    [_MaterialMonthPickerComponent_0_5]: dart.fieldType(material_datepicker__material_month_picker.MaterialMonthPickerComponent),
    [_ShowHideDirective_0_6]: dart.fieldType(utils__showhide__showhide.ShowHideDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent19 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent19, AppViewAndintToAppViewOfDateRangeEditorComponent());
  dart.defineLazy(material_datepicker__date_range_editor$46template, {
    /*material_datepicker__date_range_editor$46template.styles$DateRangeEditorComponentHost*/get styles$DateRangeEditorComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _DateRangeEditorComponent_0_5 = Symbol('_DateRangeEditorComponent_0_5');
  let const$11;
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0 = class _ViewDateRangeEditorComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DateRangeEditorComponent_0_5] = new material_datepicker__date_range_editor.DateRangeEditorComponent.new(new src__core__linker__element_ref.ElementRef.new(this.rootEl), utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), src__utils__angular__managed_zone__managed_zone.ManagedZone._check(this.injectorGet(dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), this.viewData.parentIndex)), material_datepicker__date_range_editor.DateRangeEditorHost._check(this.injectorGet(dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorHost), this.viewData.parentIndex, null)), time$.Clock._check(this.injectorGet(const$11 || (const$11 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.viewData.parentIndex, null)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)));
      this[_compView_0].create(this[_DateRangeEditorComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDateRangeEditorComponent()).new(0, this, this.rootEl, this[_DateRangeEditorComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorComponent) && 0 === nodeIndex) {
        return this[_DateRangeEditorComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_DateRangeEditorComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_DateRangeEditorComponent_0_5].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DateRangeEditorComponent_0_5] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0),
    [_DateRangeEditorComponent_0_5]: dart.fieldType(material_datepicker__date_range_editor.DateRangeEditorComponent)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_datepicker__date_range_editor$46template, {
    /*material_datepicker__date_range_editor$46template.DateRangeEditorComponentNgFactory*/get DateRangeEditorComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDateRangeEditorComponent()).new('date-range-editor', material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0, material_datepicker__date_range_editor$46template._DateRangeEditorComponentMetadata));
    },
    /*material_datepicker__date_range_editor$46template._DateRangeEditorComponentMetadata*/get _DateRangeEditorComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_datepicker__date_range_editor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__date_range_editor$46template.initReflector = function() {
    if (dart.test(material_datepicker__date_range_editor$46template._visited)) {
      return;
    }
    material_datepicker__date_range_editor$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorComponent), material_datepicker__date_range_editor$46template.DateRangeEditorComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    glyph__glyph$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__date_range_input$46template.initReflector();
    material_datepicker__material_calendar_picker$46template.initReflector();
    material_datepicker__material_month_picker$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    material_datepicker__next_prev_buttons$46template.initReflector();
    material_datepicker__preset$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    material_input__material_input$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    material_select__material_select$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    material_tooltip__material_tooltip$46template.initReflector();
    model__date__date$46template.initReflector();
    model__date__date_formatter$46template.initReflector();
    model__observable__observable$46template.initReflector();
    src__material_datepicker__comparison_range_editor$46template.initReflector();
    src__material_datepicker__date_range_editor_model$46template.initReflector();
    src__material_datepicker__date_range_editor_model$46template.initReflector();
    utils__angular__managed_zone__interface$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__showhide__showhide$46template.initReflector();
  };
  dart.fn(material_datepicker__date_range_editor$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_editor.template.ddc", {
    "package:angular_components/material_datepicker/date_range_editor.template.dart": material_datepicker__date_range_editor$46template
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor.template.dart"],"names":[],"mappings":"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","file":"date_range_editor.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_editor$46template: material_datepicker__date_range_editor$46template
  };
});

//# sourceMappingURL=date_range_editor.template.ddc.js.map
