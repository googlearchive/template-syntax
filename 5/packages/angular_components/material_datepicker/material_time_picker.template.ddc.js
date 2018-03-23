define(['dart_sdk', 'packages/angular_components/material_datepicker/material_time_picker.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_select/material_dropdown_select.template', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives/ng_model', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_forms/src/directives/control_container', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/material_select/activation_handler', 'packages/angular/src/core/change_detection/change_detection_util', 'packages/angular_components/material_datepicker/material_time_picker', 'packages/quiver/time', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/string_selection_options.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_time_picker$46scss$46css, view_type, constants, view, app_view_utils, material_dropdown_select, id_generator, popup_size_provider, opaque_token, material_dropdown_select$, app_view, material_input, deferred_validator, ng_model, material_input$, material_input_default_value_accessor, control_container, reference, focus, base_material_input, material_dropdown_base, has_renderer, deferred_content_aware, selection_container, activation_handler, change_detection_util, material_time_picker, time, reflector, angular, module, keyboard_handler_mixin, select, selection_model, string_selection_options, properties, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_time_picker$46scss$46css$46shim = material_time_picker$46scss$46css.material_datepicker__material_time_picker$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_select__material_dropdown_select$46template = material_dropdown_select.material_select__material_dropdown_select$46template;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const src__laminate__popup__popup_size_provider = popup_size_provider.src__laminate__popup__popup_size_provider;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const material_select__material_dropdown_select = material_dropdown_select$.material_select__material_dropdown_select;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const material_input__material_input = material_input$.material_input__material_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus = focus.focus__focus;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const src__core__change_detection__change_detection_util = change_detection_util.src__core__change_detection__change_detection_util;
  const material_datepicker__material_time_picker = material_time_picker.material_datepicker__material_time_picker;
  const time$ = time.time;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const model__a11y__keyboard_handler_mixin$46template = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__string_selection_options$46template = string_selection_options.model__selection__string_selection_options$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_datepicker__material_time_picker$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $_set = dartx._set;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let IdentityMapOfString$SimpleChange = () => (IdentityMapOfString$SimpleChange = dart.constFn(_js_helper.IdentityMap$(core.String, src__core__change_detection__change_detection_util.SimpleChange)))();
  let AppViewOfMaterialTimePickerComponent = () => (AppViewOfMaterialTimePickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_time_picker.MaterialTimePickerComponent)))();
  let AppViewAndintToAppViewOfMaterialTimePickerComponent = () => (AppViewAndintToAppViewOfMaterialTimePickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialTimePickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTimePickerComponent = () => (ComponentRefOfMaterialTimePickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_time_picker.MaterialTimePickerComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTimePickerComponent = () => (ComponentFactoryOfMaterialTimePickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_time_picker.MaterialTimePickerComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__material_time_picker$46template, {
    /*material_datepicker__material_time_picker$46template.styles$MaterialTimePickerComponent*/get styles$MaterialTimePickerComponent() {
      return dart.constList([material_datepicker__material_time_picker$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialDropdownSelectComponent_0_5 = Symbol('_MaterialDropdownSelectComponent_0_5');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _DeferredValidator_3_5 = Symbol('_DeferredValidator_3_5');
  const _NgValidators_3_6 = Symbol('_NgValidators_3_6');
  const _NgModel_3_7 = Symbol('_NgModel_3_7');
  const _NgControl_3_8 = Symbol('_NgControl_3_8');
  const _MaterialInputComponent_3_9 = Symbol('_MaterialInputComponent_3_9');
  const _BaseMaterialInput_3_10 = Symbol('_BaseMaterialInput_3_10');
  const _MaterialInputDefaultValueAccessor_3_11 = Symbol('_MaterialInputDefaultValueAccessor_3_11');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  const _expr_14 = Symbol('_expr_14');
  const _expr_15 = Symbol('_expr_15');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  const _handle_visibleChange_0_0 = Symbol('_handle_visibleChange_0_0');
  const _handle_ngModelChange_3_2 = Symbol('_handle_ngModelChange_3_2');
  let const$6;
  let const$7;
  material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0 = class ViewMaterialTimePickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_time_picker.MaterialTimePickerComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialDropdownSelectComponent_0_5] = new material_select__material_dropdown_select.MaterialDropdownSelectComponent.new(utils__id_generator__id_generator.IdGenerator._check(this.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), core.bool._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new('isRtl'))), this.viewData.parentIndex, null)), null, html.HtmlElement._check(this[_el_0]));
      let doc = html.document;
      this[_el_1] = html.DivElement._check(doc[$createElement]('div'));
      this.createAttr(this[_el_1], 'header', '');
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_2].className = 'time-input-box';
      this.addShimC(this[_el_2]);
      this[_compView_3] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      this[_el_2][$append](this[_el_3]);
      this.createAttr(this[_el_3], 'type', 'text');
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_DeferredValidator_3_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_3_6] = [this[_DeferredValidator_3_5]];
      this[_NgModel_3_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_3_6], null);
      this[_NgControl_3_8] = this[_NgModel_3_7];
      this[_MaterialInputComponent_3_9] = new material_input__material_input.MaterialInputComponent.new('text', null, this[_NgControl_3_8], this[_compView_3].ref, this[_DeferredValidator_3_5]);
      this[_BaseMaterialInput_3_10] = this[_MaterialInputComponent_3_9];
      this[_MaterialInputDefaultValueAccessor_3_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_3_10], this[_NgControl_3_8]);
      this[_compView_3].create(this[_MaterialInputComponent_3_9], [const$0 || (const$0 = dart.constList([], dart.dynamic))]);
      this[_compView_0].create(this[_MaterialDropdownSelectComponent_0_5], [const$1 || (const$1 = dart.constList([], dart.dynamic)), JSArrayOfDivElement().of([this[_el_1]]), const$2 || (const$2 = dart.constList([], dart.dynamic)), const$3 || (const$3 = dart.constList([], dart.dynamic)), const$4 || (const$4 = dart.constList([], dart.dynamic)), const$5 || (const$5 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_MaterialDropdownSelectComponent_0_5].visibleStream.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_visibleChange_0_0)));
      this[_el_1][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
      this[_el_1][$addEventListener]('keydown', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onInputBoxKeyDown')));
      let subscription_1 = this[_NgModel_3_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_3_2)));
      let subscription_2 = this[_MaterialInputComponent_3_9].onKeypress.listen(this.eventHandler1(core.String, core.String, dart.bind(this.ctx, 'onTextChange')));
      let subscription_3 = this[_MaterialInputComponent_3_9].onBlur.listen(this.eventHandler0(html.FocusEvent, dart.bind(this.ctx, 'onBlur')));
      this.init(const$6 || (const$6 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2, subscription_3]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 3 === nodeIndex) {
        return this[_DeferredValidator_3_5];
      }
      if (token === (const$7 || (const$7 = dart.const(new src__core__di__opaque_token.MultiToken.new('NgValidators')))) && 3 === nodeIndex) {
        return this[_NgValidators_3_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 3 === nodeIndex) {
        return this[_NgModel_3_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 3 === nodeIndex) {
        return this[_NgControl_3_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus.Focusable)) && 3 === nodeIndex) {
        return this[_MaterialInputComponent_3_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 3 === nodeIndex) {
        return this[_BaseMaterialInput_3_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 3 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_3_11];
      }
      if ((token === dart.wrapType(material_select__material_dropdown_select.MaterialDropdownSelectComponent) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(model__selection__selection_container.SelectionContainer) || token === dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider) || token === dart.wrapType(material_select__activation_handler.ActivationHandler)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialDropdownSelectComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let changes = null;
      let firstCheck = this.cdState === 0;
      changes = null;
      if (firstCheck) {
        this[_MaterialDropdownSelectComponent_0_5].popupMatchInputWidth = false;
        let t = changes;
        t == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t;
        changes[$_set]('popupMatchInputWidth', new src__core__change_detection__change_detection_util.SimpleChange.new(null, false));
        this[_MaterialDropdownSelectComponent_0_5].slide = 'y';
        let t$ = changes;
        t$ == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t$;
        changes[$_set]('slide', new src__core__change_detection__change_detection_util.SimpleChange.new(null, 'y'));
        if (!(dart.bind(_ctx, 'renderTime') === null)) {
          this[_MaterialDropdownSelectComponent_0_5].itemRenderer = dart.bind(_ctx, 'renderTime');
          let t$0 = changes;
          t$0 == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t$0;
          changes[$_set]('itemRenderer', new src__core__change_detection__change_detection_util.SimpleChange.new(null, dart.bind(_ctx, 'renderTime')));
        }
      }
      let currVal_0 = _ctx.dropdownText;
      if (!(this[_expr_0] == currVal_0)) {
        this[_MaterialDropdownSelectComponent_0_5].buttonText = currVal_0;
        let t$1 = changes;
        t$1 == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t$1;
        changes[$_set]('buttonText', new src__core__change_detection__change_detection_util.SimpleChange.new(this[_expr_0], currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (!(this[_expr_1] == currVal_1)) {
        this[_MaterialDropdownSelectComponent_0_5].disabled = currVal_1;
        let t$2 = changes;
        t$2 == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t$2;
        changes[$_set]('disabled', new src__core__change_detection__change_detection_util.SimpleChange.new(this[_expr_1], currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_4 = _ctx.popupVisible;
      if (!(this[_expr_4] == currVal_4)) {
        this[_MaterialDropdownSelectComponent_0_5].visible = currVal_4;
        let t$3 = changes;
        t$3 == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t$3;
        changes[$_set]('visible', new src__core__change_detection__change_detection_util.SimpleChange.new(this[_expr_4], currVal_4));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.error;
      if (!(this[_expr_5] == currVal_5)) {
        this[_MaterialDropdownSelectComponent_0_5].error = currVal_5;
        let t$4 = changes;
        t$4 == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t$4;
        changes[$_set]('error', new src__core__change_detection__change_detection_util.SimpleChange.new(this[_expr_5], currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_7 = _ctx.timeOptions;
      if (!core.identical(this[_expr_7], currVal_7)) {
        this[_MaterialDropdownSelectComponent_0_5].options = currVal_7;
        let t$5 = changes;
        t$5 == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t$5;
        changes[$_set]('options', new src__core__change_detection__change_detection_util.SimpleChange.new(this[_expr_7], currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.selectedTime;
      if (!core.identical(this[_expr_8], currVal_8)) {
        this[_MaterialDropdownSelectComponent_0_5].selection = currVal_8;
        let t$6 = changes;
        t$6 == null ? changes = new (IdentityMapOfString$SimpleChange()).new() : t$6;
        changes[$_set]('selection', new src__core__change_detection__change_detection_util.SimpleChange.new(this[_expr_8], currVal_8));
        this[_expr_8] = currVal_8;
      }
      if (!(changes == null)) {
        this[_MaterialDropdownSelectComponent_0_5].ngOnChanges(changes);
      }
      changed = false;
      this[_NgModel_3_7].model = _ctx.timeInputText;
      this[_NgModel_3_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_3_7].ngOnInit();
      }
      changed = false;
      let currVal_10 = _ctx.inputPlaceholderMsg;
      if (!(this[_expr_10] == currVal_10)) {
        this[_MaterialInputComponent_3_9].label = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.displayErrorPanel;
      if (!(this[_expr_11] == currVal_11)) {
        this[_MaterialInputComponent_3_9].displayBottomPanel = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.disabled;
      if (!(this[_expr_12] == currVal_12)) {
        this[_MaterialInputComponent_3_9].disabled = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.inputError;
      if (!(this[_expr_13] == currVal_13)) {
        this[_MaterialInputComponent_3_9].error = currVal_13;
        changed = true;
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.inputPlaceholderMsg;
      if (!(this[_expr_14] == currVal_14)) {
        this[_MaterialInputComponent_3_9].requiredErrorMsg = currVal_14;
        changed = true;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.required;
      if (!(this[_expr_15] == currVal_15)) {
        this[_MaterialInputComponent_3_9].required = currVal_15;
        changed = true;
        this[_expr_15] = currVal_15;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      this[_compView_3].detectChanges();
      if (firstCheck) {
        this[_MaterialInputComponent_3_9].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_3];
      t$ == null ? null : t$.destroy();
      this[_MaterialInputComponent_3_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_3_11].ngOnDestroy();
      this[_MaterialDropdownSelectComponent_0_5].ngOnDestroy();
    }
    [_handle_visibleChange_0_0]($event) {
      this.ctx.popupVisible = core.bool._check($event);
    }
    [_handle_ngModelChange_3_2]($event) {
      this.ctx.timeInputText = core.String._check($event);
    }
  };
  (material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialDropdownSelectComponent_0_5] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_DeferredValidator_3_5] = null;
    this[_NgValidators_3_6] = null;
    this[_NgModel_3_7] = null;
    this[_NgControl_3_8] = null;
    this[_MaterialInputComponent_3_9] = null;
    this[_BaseMaterialInput_3_10] = null;
    this[_MaterialInputDefaultValueAccessor_3_11] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-time-picker'));
    let t = material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0._renderType;
    t == null ? material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__material_time_picker$46template.styles$MaterialTimePickerComponent) : t;
    this.setupComponentType(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0._renderType);
  }).prototype = material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0);
  dart.setMethodSignature(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_time_picker.MaterialTimePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_visibleChange_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_3_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0),
    [_MaterialDropdownSelectComponent_0_5]: dart.fieldType(material_select__material_dropdown_select.MaterialDropdownSelectComponent),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_3_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_3_6]: dart.fieldType(core.List),
    [_NgModel_3_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_3_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_3_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_3_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_3_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.String),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(core.String),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.bool),
    [_expr_13]: dart.fieldType(core.String),
    [_expr_14]: dart.fieldType(core.String),
    [_expr_15]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0, {
    /*material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__material_time_picker$46template.viewFactory_MaterialTimePickerComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_time_picker$46template.viewFactory_MaterialTimePickerComponent0, AppViewAndintToAppViewOfMaterialTimePickerComponent());
  dart.defineLazy(material_datepicker__material_time_picker$46template, {
    /*material_datepicker__material_time_picker$46template.styles$MaterialTimePickerComponentHost*/get styles$MaterialTimePickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTimePickerComponent_0_5 = Symbol('_MaterialTimePickerComponent_0_5');
  let const$8;
  material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0 = class _ViewMaterialTimePickerComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTimePickerComponent_0_5] = new material_datepicker__material_time_picker.MaterialTimePickerComponent.new(time$.Clock._check(this.injectorGet(const$8 || (const$8 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialTimePickerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTimePickerComponent()).new(0, this, this.rootEl, this[_MaterialTimePickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__material_time_picker.MaterialTimePickerComponent) && 0 === nodeIndex) {
        return this[_MaterialTimePickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialTimePickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialTimePickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTimePickerComponent_0_5] = null;
    material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0),
    [_MaterialTimePickerComponent_0_5]: dart.fieldType(material_datepicker__material_time_picker.MaterialTimePickerComponent)
  }));
  material_datepicker__material_time_picker$46template.viewFactory_MaterialTimePickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_time_picker$46template.viewFactory_MaterialTimePickerComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_datepicker__material_time_picker$46template, {
    /*material_datepicker__material_time_picker$46template.MaterialTimePickerComponentNgFactory*/get MaterialTimePickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTimePickerComponent()).new('material-time-picker', material_datepicker__material_time_picker$46template.viewFactory_MaterialTimePickerComponentHost0, material_datepicker__material_time_picker$46template._MaterialTimePickerComponentMetadata));
    },
    /*material_datepicker__material_time_picker$46template._MaterialTimePickerComponentMetadata*/get _MaterialTimePickerComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_datepicker__material_time_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_time_picker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_time_picker$46template._visited)) {
      return;
    }
    material_datepicker__material_time_picker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_time_picker.MaterialTimePickerComponent), material_datepicker__material_time_picker$46template.MaterialTimePickerComponentNgFactory);
    angular$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    material_input__material_input$46template.initReflector();
    material_select__material_dropdown_select$46template.initReflector();
    model__a11y__keyboard_handler_mixin$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__string_selection_options$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(material_datepicker__material_time_picker$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/material_time_picker.template.ddc", {
    "package:angular_components/material_datepicker/material_time_picker.template.dart": material_datepicker__material_time_picker$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_time_picker.template.dart"],"names":[],"mappings":"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","file":"material_time_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_time_picker$46template: material_datepicker__material_time_picker$46template
  };
});

//# sourceMappingURL=material_time_picker.template.ddc.js.map
