define(['dart_sdk', 'packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_toggle/material_toggle.template', 'packages/angular_components/material_toggle/material_toggle', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/src/material_datepicker/date_range_editor_model', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/date_range_input.template', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/material_select/material_dropdown_select.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/src/material_datepicker/date_range_editor_model.template'], function(dart_sdk, comparison_range_editor$46scss$46css, view_type, constants, view, app_view_utils, app_view, material_toggle, material_toggle$, ng_if, comparison_range_editor, ng_for, material_select_item, dom_service, material_dropdown_base, activation_handler, material_select_item$, selection_container, has_renderer, date_range_editor_model, reflector, angular, date_range_input, material_list, material_list_item, material_dropdown_select, date, date_range_editor_model$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_datepicker__comparison_range_editor$46scss$46css$46shim = comparison_range_editor$46scss$46css.src__material_datepicker__comparison_range_editor$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_toggle__material_toggle$46template = material_toggle.material_toggle__material_toggle$46template;
  const material_toggle__material_toggle = material_toggle$.material_toggle__material_toggle;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__material_datepicker__comparison_range_editor = comparison_range_editor.src__material_datepicker__comparison_range_editor;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const src__material_datepicker__date_range_editor_model = date_range_editor_model.src__material_datepicker__date_range_editor_model;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const material_datepicker__date_range_input$46template = date_range_input.material_datepicker__date_range_input$46template;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list_item$46template = material_list_item.material_list__material_list_item$46template;
  const material_select__material_dropdown_select$46template = material_dropdown_select.material_select__material_dropdown_select$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const src__material_datepicker__date_range_editor_model$46template = date_range_editor_model$.src__material_datepicker__date_range_editor_model$46template;
  const _root = Object.create(null);
  const src__material_datepicker__comparison_range_editor$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfComparisonRangeEditorComponent = () => (AppViewOfComparisonRangeEditorComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)))();
  let AppViewAndintToAppViewOfComparisonRangeEditorComponent = () => (AppViewAndintToAppViewOfComparisonRangeEditorComponent = dart.constFn(dart.fnType(AppViewOfComparisonRangeEditorComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let ComponentRefOfComparisonRangeEditorComponent = () => (ComponentRefOfComparisonRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfComparisonRangeEditorComponent = () => (ComponentFactoryOfComparisonRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template.styles$ComparisonRangeEditorComponent*/get styles$ComparisonRangeEditorComponent() {
      return dart.constList([src__material_datepicker__comparison_range_editor$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _MaterialToggleComponent_3_5 = Symbol('_MaterialToggleComponent_3_5');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  const _handle_checkedChange_3_0 = Symbol('_handle_checkedChange_3_0');
  let const$0;
  src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0 = class ViewComparisonRangeEditorComponent0 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'comparison-toggle-section';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'compare-header';
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      this[_compView_3] = new material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      this[_el_0][$append](this[_el_3]);
      this[_el_3].className = 'comparison-toggle themeable';
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_MaterialToggleComponent_3_5] = new material_toggle__material_toggle.MaterialToggleComponent.new();
      this[_compView_3].create(this[_MaterialToggleComponent_3_5], [const$ || (const$ = dart.constList([], dart.dynamic))]);
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1);
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let subscription_0 = this[_MaterialToggleComponent_3_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_checkedChange_3_0)));
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_1 = !dart.test(_ctx.model.comparisonSupported);
      if (!(this[_expr_1] === currVal_1)) {
        this[_MaterialToggleComponent_3_5].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.model.comparisonEnabled;
      if (!(this[_expr_2] == currVal_2)) {
        this[_MaterialToggleComponent_3_5].checked = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.comparisonHeaderMsg;
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialToggleComponent_3_5].ariaLabel = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_NgIf_4_9].ngIf = _ctx.model.comparisonEnabled;
      this[_appEl_4].detectChangesInNestedViews();
      let l = _ctx.comparisonHeaderMsg;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_2][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_3].detectChanges();
      if (firstCheck) {
        this[_MaterialToggleComponent_3_5].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_4];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_3];
      t$ == null ? null : t$.destroy();
    }
    [_handle_checkedChange_3_0]($event) {
      this.ctx.model.comparisonEnabled = core.bool._check($event);
    }
  };
  (src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_MaterialToggleComponent_3_5] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('comparison-range-editor'));
    let t = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType;
    t == null ? src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__material_datepicker__comparison_range_editor$46template.styles$ComparisonRangeEditorComponent) : t;
    this.setupComponentType(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType);
  }).prototype = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_3_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0),
    [_MaterialToggleComponent_3_5]: dart.fieldType(material_toggle__material_toggle.MaterialToggleComponent),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, {
    /*src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent0 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent0, AppViewAndintToAppViewOfComparisonRangeEditorComponent());
  const _appEl_1 = Symbol('_appEl_1');
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1 = class _ViewComparisonRangeEditorComponent1 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2);
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.model.validComparisonOptions;
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
  (src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType;
  }).prototype = src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1, AppViewAndintToAppViewOfComparisonRangeEditorComponent());
  const _compView_0 = Symbol('_compView_0');
  const _MaterialSelectItemComponent_0_5 = Symbol('_MaterialSelectItemComponent_0_5');
  const _text_1 = Symbol('_text_1');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2 = class _ViewComparisonRangeEditorComponent2 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'closeOnActivate', 'false');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialSelectItemComponent_0_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
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
      let local_option = src__material_datepicker__date_range_editor_model.ComparisonOption._check(this.locals[$_get]('$implicit'));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_5].closeOnActivate = 'false';
      }
      let currVal_0 = _ctx.model.comparisonOption == local_option;
      if (!(this[_expr_0] === currVal_0)) {
        this[_MaterialSelectItemComponent_0_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.comparisonOptionMsg(local_option));
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
      let local_option = src__material_datepicker__date_range_editor_model.ComparisonOption._check(this.locals[$_get]('$implicit'));
      this.ctx.model.comparisonOption = local_option;
    }
  };
  (src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialSelectItemComponent_0_5] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._renderType;
  }).prototype = src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_0_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2, AppViewAndintToAppViewOfComparisonRangeEditorComponent());
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template.styles$ComparisonRangeEditorComponentHost*/get styles$ComparisonRangeEditorComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ComparisonRangeEditorComponent_0_5 = Symbol('_ComparisonRangeEditorComponent_0_5');
  src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0 = class _ViewComparisonRangeEditorComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ComparisonRangeEditorComponent_0_5] = new src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.new();
      this[_compView_0].create(this[_ComparisonRangeEditorComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfComparisonRangeEditorComponent()).new(0, this, this.rootEl, this[_ComparisonRangeEditorComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) && 0 === nodeIndex) {
        return this[_ComparisonRangeEditorComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ComparisonRangeEditorComponent_0_5] = null;
    src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0),
    [_ComparisonRangeEditorComponent_0_5]: dart.fieldType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)
  }));
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template.ComparisonRangeEditorComponentNgFactory*/get ComparisonRangeEditorComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfComparisonRangeEditorComponent()).new('comparison-range-editor', src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0, src__material_datepicker__comparison_range_editor$46template._ComparisonRangeEditorComponentMetadata));
    },
    /*src__material_datepicker__comparison_range_editor$46template._ComparisonRangeEditorComponentMetadata*/get _ComparisonRangeEditorComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_datepicker__comparison_range_editor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_datepicker__comparison_range_editor$46template.initReflector = function() {
    if (dart.test(src__material_datepicker__comparison_range_editor$46template._visited)) {
      return;
    }
    src__material_datepicker__comparison_range_editor$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), src__material_datepicker__comparison_range_editor$46template.ComparisonRangeEditorComponentNgFactory);
    angular$46template.initReflector();
    material_datepicker__date_range_input$46template.initReflector();
    material_list__material_list$46template.initReflector();
    material_list__material_list_item$46template.initReflector();
    material_select__material_dropdown_select$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    material_toggle__material_toggle$46template.initReflector();
    model__date__date$46template.initReflector();
    src__material_datepicker__date_range_editor_model$46template.initReflector();
  };
  dart.fn(src__material_datepicker__comparison_range_editor$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_datepicker/comparison_range_editor.template.ddc", {
    "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart": src__material_datepicker__comparison_range_editor$46template
  }, '{"version":3,"sourceRoot":"","sources":["comparison_range_editor.template.dart"],"names":[],"mappings":"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","file":"comparison_range_editor.template.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__comparison_range_editor$46template: src__material_datepicker__comparison_range_editor$46template
  };
});

//# sourceMappingURL=comparison_range_editor.template.ddc.js.map
