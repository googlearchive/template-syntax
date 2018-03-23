define(['dart_sdk', 'packages/angular_components/material_datepicker/date_range_input.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_components/material_input/material_input', 'packages/angular/src/core/di/opaque_token', 'packages/quiver/time', 'packages/angular_components/material_datepicker/date_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/model/date/date', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/material_datepicker/date_range_input', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/date_input.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template'], function(dart_sdk, date_range_input$46scss$46css, view_type, constants, view, app_view_utils, material_input, deferred_validator, material_input$, opaque_token, time, date_input, material_input_default_value_accessor, app_view, date, reference, focus, base_material_input, date_range_input, reflector, angular, calendar, date_input$, date$, observable) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__date_range_input$46scss$46css$46shim = date_range_input$46scss$46css.material_datepicker__date_range_input$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const material_input__material_input = material_input$.material_input__material_input;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const time$ = time.time;
  const material_datepicker__date_input = date_input.material_datepicker__date_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const model__date__date = date.model__date__date;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus = focus.focus__focus;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const material_datepicker__date_range_input = date_range_input.material_datepicker__date_range_input;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const material_datepicker__calendar$46template = calendar.material_datepicker__calendar$46template;
  const material_datepicker__date_input$46template = date_input$.material_datepicker__date_input$46template;
  const model__date__date$46template = date$.model__date__date$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const _root = Object.create(null);
  const material_datepicker__date_range_input$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfDateRangeInputComponent = () => (AppViewOfDateRangeInputComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__date_range_input.DateRangeInputComponent)))();
  let AppViewAndintToAppViewOfDateRangeInputComponent = () => (AppViewAndintToAppViewOfDateRangeInputComponent = dart.constFn(dart.fnType(AppViewOfDateRangeInputComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfDateRangeInputComponent = () => (ComponentRefOfDateRangeInputComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_input.DateRangeInputComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDateRangeInputComponent = () => (ComponentFactoryOfDateRangeInputComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__date_range_input.DateRangeInputComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__date_range_input$46template, {
    /*material_datepicker__date_range_input$46template.styles$DateRangeInputComponent*/get styles$DateRangeInputComponent() {
      return dart.constList([material_datepicker__date_range_input$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _DeferredValidator_0_5 = Symbol('_DeferredValidator_0_5');
  const _MaterialInputComponent_0_6 = Symbol('_MaterialInputComponent_0_6');
  const _DateInputDirective_0_7 = Symbol('_DateInputDirective_0_7');
  const _BaseMaterialInput_0_8 = Symbol('_BaseMaterialInput_0_8');
  const _MaterialInputDefaultValueAccessor_0_9 = Symbol('_MaterialInputDefaultValueAccessor_0_9');
  const __NgValidators_0_10 = Symbol('__NgValidators_0_10');
  const _el_1 = Symbol('_el_1');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _DeferredValidator_3_5 = Symbol('_DeferredValidator_3_5');
  const _MaterialInputComponent_3_6 = Symbol('_MaterialInputComponent_3_6');
  const _DateInputDirective_3_7 = Symbol('_DateInputDirective_3_7');
  const _BaseMaterialInput_3_8 = Symbol('_BaseMaterialInput_3_8');
  const _MaterialInputDefaultValueAccessor_3_9 = Symbol('_MaterialInputDefaultValueAccessor_3_9');
  const __NgValidators_3_10 = Symbol('__NgValidators_3_10');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  const _NgValidators_0_10 = Symbol('_NgValidators_0_10');
  const _NgValidators_3_10 = Symbol('_NgValidators_3_10');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  const _handle_dateChange_0_1 = Symbol('_handle_dateChange_0_1');
  const _handle_dateChange_3_1 = Symbol('_handle_dateChange_3_1');
  let const$3;
  let const$4;
  let const$5;
  material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0 = class ViewDateRangeInputComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_input.DateRangeInputComponent) {
    get [_NgValidators_0_10]() {
      if (this[__NgValidators_0_10] == null) {
        this[__NgValidators_0_10] = [this[_DeferredValidator_0_5]];
      }
      return this[__NgValidators_0_10];
    }
    get [_NgValidators_3_10]() {
      if (this[__NgValidators_3_10] == null) {
        this[__NgValidators_3_10] = [this[_DeferredValidator_3_5]];
      }
      return this[__NgValidators_3_10];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this[_el_0].className = 'start date-input themeable';
      this.createAttr(this[_el_0], 'dateParsing', '');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_DeferredValidator_0_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_0_6] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_compView_0].ref, this[_DeferredValidator_0_5]);
      this[_DateInputDirective_0_7] = new material_datepicker__date_input.DateInputDirective.new(time$.Clock._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.viewData.parentIndex, null)), time$.Clock._check(this.parentView.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), this[_MaterialInputComponent_0_6]);
      this[_BaseMaterialInput_0_8] = this[_MaterialInputComponent_0_6];
      this[_MaterialInputDefaultValueAccessor_0_9] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_0_8], null);
      this[_compView_0].create(this[_MaterialInputComponent_0_6], [const$0 || (const$0 = dart.constList([], dart.dynamic))]);
      let doc = html.document;
      this[_el_1] = src__core__linker__app_view.createSpanAndAppend(doc, parentRenderNode);
      this[_el_1].className = 'separator';
      this.addShimE(this[_el_1]);
      let _text_2 = html.Text.new('—');
      this[_el_1][$append](_text_2);
      this[_compView_3] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      parentRenderNode[$append](this[_el_3]);
      this[_el_3].className = 'end date-input themeable';
      this.createAttr(this[_el_3], 'dateParsing', '');
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_DeferredValidator_3_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_3_6] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_compView_3].ref, this[_DeferredValidator_3_5]);
      this[_DateInputDirective_3_7] = new material_datepicker__date_input.DateInputDirective.new(time$.Clock._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.viewData.parentIndex, null)), time$.Clock._check(this.parentView.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), this[_MaterialInputComponent_3_6]);
      this[_BaseMaterialInput_3_8] = this[_MaterialInputComponent_3_6];
      this[_MaterialInputDefaultValueAccessor_3_9] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_3_8], null);
      this[_compView_3].create(this[_MaterialInputComponent_3_6], [const$2 || (const$2 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_MaterialInputComponent_0_6].onFocus.listen(this.eventHandler0(html.FocusEvent, dart.bind(this.ctx, 'onStartFocused')));
      let subscription_1 = this[_DateInputDirective_0_7].dateChange.listen(this.eventHandler1(model__date__date.Date, model__date__date.Date, dart.bind(this, _handle_dateChange_0_1)));
      let subscription_2 = this[_MaterialInputComponent_3_6].onFocus.listen(this.eventHandler0(html.FocusEvent, dart.bind(this.ctx, 'onEndFocused')));
      let subscription_3 = this[_DateInputDirective_3_7].dateChange.listen(this.eventHandler1(model__date__date.Date, model__date__date.Date, dart.bind(this, _handle_dateChange_3_1)));
      this.init(const$3 || (const$3 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2, subscription_3]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 0 === nodeIndex) {
        return this[_DeferredValidator_0_5];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus.Focusable)) && 0 === nodeIndex) {
        return this[_MaterialInputComponent_0_6];
      }
      if (token === dart.wrapType(material_datepicker__date_input.DateInputDirective) && 0 === nodeIndex) {
        return this[_DateInputDirective_0_7];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 0 === nodeIndex) {
        return this[_BaseMaterialInput_0_8];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 0 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_0_9];
      }
      if (token === (const$4 || (const$4 = dart.const(new src__core__di__opaque_token.MultiToken.new('NgValidators')))) && 0 === nodeIndex) {
        return this[_NgValidators_0_10];
      }
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 3 === nodeIndex) {
        return this[_DeferredValidator_3_5];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus.Focusable)) && 3 === nodeIndex) {
        return this[_MaterialInputComponent_3_6];
      }
      if (token === dart.wrapType(material_datepicker__date_input.DateInputDirective) && 3 === nodeIndex) {
        return this[_DateInputDirective_3_7];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 3 === nodeIndex) {
        return this[_BaseMaterialInput_3_8];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 3 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_3_9];
      }
      if (token === (const$5 || (const$5 = dart.const(new src__core__di__opaque_token.MultiToken.new('NgValidators')))) && 3 === nodeIndex) {
        return this[_NgValidators_3_10];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_1 = _ctx.startDateMsg;
      if (!(this[_expr_1] == currVal_1)) {
        this[_MaterialInputComponent_0_6].label = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.isDateInputRequired;
      if (!(this[_expr_2] == currVal_2)) {
        this[_MaterialInputComponent_0_6].required = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_3 = _ctx.startDateFormat;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_DateInputDirective_0_7].dateFormat = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.startMaxDate;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_DateInputDirective_0_7].maxDate = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.minDate;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_DateInputDirective_0_7].minDate = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.start;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_DateInputDirective_0_7].date = currVal_6;
        this[_expr_6] = currVal_6;
      }
      changed = false;
      let currVal_8 = _ctx.endDateMsg;
      if (!(this[_expr_8] == currVal_8)) {
        this[_MaterialInputComponent_3_6].label = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.isDateInputRequired;
      if (!(this[_expr_9] == currVal_9)) {
        this[_MaterialInputComponent_3_6].required = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_DateInputDirective_3_7].rangeEnd = true;
      }
      let currVal_10 = _ctx.endDateFormat;
      if (!core.identical(this[_expr_10], currVal_10)) {
        this[_DateInputDirective_3_7].dateFormat = currVal_10;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.maxDate;
      if (!core.identical(this[_expr_11], currVal_11)) {
        this[_DateInputDirective_3_7].maxDate = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.endMinDate;
      if (!core.identical(this[_expr_12], currVal_12)) {
        this[_DateInputDirective_3_7].minDate = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.end;
      if (!core.identical(this[_expr_13], currVal_13)) {
        this[_DateInputDirective_3_7].date = currVal_13;
        this[_expr_13] = currVal_13;
      }
      let currVal_0 = _ctx.isStartActive;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_0], 'active', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_7 = _ctx.isEndActive;
      if (!(this[_expr_7] == currVal_7)) {
        this.updateElemClass(this[_el_3], 'active', currVal_7);
        this[_expr_7] = currVal_7;
      }
      this[_compView_0].detectChanges();
      this[_compView_3].detectChanges();
      if (firstCheck) {
        this[_MaterialInputComponent_0_6].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_MaterialInputComponent_3_6].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_3];
      t$ == null ? null : t$.destroy();
      this[_MaterialInputComponent_0_6].ngOnDestroy();
      this[_DateInputDirective_0_7].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_0_9].ngOnDestroy();
      this[_MaterialInputComponent_3_6].ngOnDestroy();
      this[_DateInputDirective_3_7].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_3_9].ngOnDestroy();
    }
    [_handle_dateChange_0_1]($event) {
      this.ctx.start = model__date__date.Date._check($event);
    }
    [_handle_dateChange_3_1]($event) {
      this.ctx.end = model__date__date.Date._check($event);
    }
  };
  (material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_DeferredValidator_0_5] = null;
    this[_MaterialInputComponent_0_6] = null;
    this[_DateInputDirective_0_7] = null;
    this[_BaseMaterialInput_0_8] = null;
    this[_MaterialInputDefaultValueAccessor_0_9] = null;
    this[__NgValidators_0_10] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_DeferredValidator_3_5] = null;
    this[_MaterialInputComponent_3_6] = null;
    this[_DateInputDirective_3_7] = null;
    this[_BaseMaterialInput_3_8] = null;
    this[_MaterialInputDefaultValueAccessor_3_9] = null;
    this[__NgValidators_3_10] = null;
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
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('date-range-input'));
    let t = material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._renderType;
    t == null ? material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__date_range_input$46template.styles$DateRangeInputComponent) : t;
    this.setupComponentType(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._renderType);
  }).prototype = material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.prototype;
  dart.addTypeTests(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0);
  dart.setMethodSignature(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_input.DateRangeInputComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_dateChange_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_dateChange_3_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.__proto__),
    [_NgValidators_0_10]: dart.fnType(core.List, []),
    [_NgValidators_3_10]: dart.fnType(core.List, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_0_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_MaterialInputComponent_0_6]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_DateInputDirective_0_7]: dart.fieldType(material_datepicker__date_input.DateInputDirective),
    [_BaseMaterialInput_0_8]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_0_9]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [__NgValidators_0_10]: dart.fieldType(core.List),
    [_el_1]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_3_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_MaterialInputComponent_3_6]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_DateInputDirective_3_7]: dart.fieldType(material_datepicker__date_input.DateInputDirective),
    [_BaseMaterialInput_3_8]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_3_9]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [__NgValidators_3_10]: dart.fieldType(core.List),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(core.String),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0, {
    /*material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__date_range_input$46template.viewFactory_DateRangeInputComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_input$46template.viewFactory_DateRangeInputComponent0, AppViewAndintToAppViewOfDateRangeInputComponent());
  dart.defineLazy(material_datepicker__date_range_input$46template, {
    /*material_datepicker__date_range_input$46template.styles$DateRangeInputComponentHost*/get styles$DateRangeInputComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _DateRangeInputComponent_0_5 = Symbol('_DateRangeInputComponent_0_5');
  material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0 = class _ViewDateRangeInputComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DateRangeInputComponent_0_5] = new material_datepicker__date_range_input.DateRangeInputComponent.new(this[_compView_0].ref);
      this[_compView_0].create(this[_DateRangeInputComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDateRangeInputComponent()).new(0, this, this.rootEl, this[_DateRangeInputComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__date_range_input.DateRangeInputComponent) && 0 === nodeIndex) {
        return this[_DateRangeInputComponent_0_5];
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
        this[_DateRangeInputComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_DateRangeInputComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DateRangeInputComponent_0_5] = null;
    material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0);
  dart.setMethodSignature(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0),
    [_DateRangeInputComponent_0_5]: dart.fieldType(material_datepicker__date_range_input.DateRangeInputComponent)
  }));
  material_datepicker__date_range_input$46template.viewFactory_DateRangeInputComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__date_range_input$46template.viewFactory_DateRangeInputComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_datepicker__date_range_input$46template, {
    /*material_datepicker__date_range_input$46template.DateRangeInputComponentNgFactory*/get DateRangeInputComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDateRangeInputComponent()).new('date-range-input', material_datepicker__date_range_input$46template.viewFactory_DateRangeInputComponentHost0, material_datepicker__date_range_input$46template._DateRangeInputComponentMetadata));
    },
    /*material_datepicker__date_range_input$46template._DateRangeInputComponentMetadata*/get _DateRangeInputComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_datepicker__date_range_input$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__date_range_input$46template.initReflector = function() {
    if (dart.test(material_datepicker__date_range_input$46template._visited)) {
      return;
    }
    material_datepicker__date_range_input$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__date_range_input.DateRangeInputComponent), material_datepicker__date_range_input$46template.DateRangeInputComponentNgFactory);
    angular$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__date_input$46template.initReflector();
    material_input__material_input$46template.initReflector();
    model__date__date$46template.initReflector();
    model__observable__observable$46template.initReflector();
  };
  dart.fn(material_datepicker__date_range_input$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_input.template.ddc", {
    "package:angular_components/material_datepicker/date_range_input.template.dart": material_datepicker__date_range_input$46template
  }, '{"version":3,"sourceRoot":"","sources":["date_range_input.template.dart"],"names":[],"mappings":"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","file":"date_range_input.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_input$46template: material_datepicker__date_range_input$46template
  };
});

//# sourceMappingURL=date_range_input.template.ddc.js.map
