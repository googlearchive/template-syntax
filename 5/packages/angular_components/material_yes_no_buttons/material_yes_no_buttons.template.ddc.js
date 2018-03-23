define(['dart_sdk', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular_components/material_spinner/material_spinner.template', 'packages/angular_components/material_spinner/material_spinner', 'packages/angular_components/material_button/material_button.template', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, material_yes_no_buttons$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_if, material_button, material_yes_no_buttons, material_spinner, material_spinner$, material_button$, opaque_token, dark_theme, button_decorator, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_yes_no_buttons__material_yes_no_buttons$46scss$46css$46shim = material_yes_no_buttons$46scss$46css.material_yes_no_buttons__material_yes_no_buttons$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_button__material_button = material_button.material_button__material_button;
  const material_yes_no_buttons__material_yes_no_buttons = material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons;
  const material_spinner__material_spinner$46template = material_spinner.material_spinner__material_spinner$46template;
  const material_spinner__material_spinner = material_spinner$.material_spinner__material_spinner;
  const material_button__material_button$46template = material_button$.material_button__material_button$46template;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const material_yes_no_buttons__material_yes_no_buttons$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfMaterialButtonComponent = () => (JSArrayOfMaterialButtonComponent = dart.constFn(_interceptors.JSArray$(material_button__material_button.MaterialButtonComponent)))();
  let ListOfMaterialButtonComponent = () => (ListOfMaterialButtonComponent = dart.constFn(core.List$(material_button__material_button.MaterialButtonComponent)))();
  let _ViewMaterialYesNoButtonsComponent2ToListOfMaterialButtonComponent = () => (_ViewMaterialYesNoButtonsComponent2ToListOfMaterialButtonComponent = dart.constFn(dart.fnType(ListOfMaterialButtonComponent(), [material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2])))();
  let _ViewMaterialYesNoButtonsComponent3ToListOfMaterialButtonComponent = () => (_ViewMaterialYesNoButtonsComponent3ToListOfMaterialButtonComponent = dart.constFn(dart.fnType(ListOfMaterialButtonComponent(), [material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3])))();
  let AppViewOfMaterialYesNoButtonsComponent = () => (AppViewOfMaterialYesNoButtonsComponent = dart.constFn(src__core__linker__app_view.AppView$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent)))();
  let AppViewAndintToAppViewOfMaterialYesNoButtonsComponent = () => (AppViewAndintToAppViewOfMaterialYesNoButtonsComponent = dart.constFn(dart.fnType(AppViewOfMaterialYesNoButtonsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let ComponentRefOfMaterialYesNoButtonsComponent = () => (ComponentRefOfMaterialYesNoButtonsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialYesNoButtonsComponent = () => (ComponentFactoryOfMaterialYesNoButtonsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_yes_no_buttons__material_yes_no_buttons$46template, {
    /*material_yes_no_buttons__material_yes_no_buttons$46template.styles$MaterialYesNoButtonsComponent*/get styles$MaterialYesNoButtonsComponent() {
      return dart.constList([material_yes_no_buttons__material_yes_no_buttons$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_yesButton_1_0_isDirty = Symbol('_query_yesButton_1_0_isDirty');
  const _query_noButton_1_1_isDirty = Symbol('_query_noButton_1_1_isDirty');
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  let const$;
  const _MaterialButtonComponent_0_6 = Symbol('_MaterialButtonComponent_0_6');
  material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0 = class ViewMaterialYesNoButtonsComponent0 extends src__core__linker__app_view.AppView$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent1);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent2);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent3);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.pending;
      this[_NgIf_1_9].ngIf = !dart.test(_ctx.pending) && dart.test(_ctx.yesDisplayed);
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.pending) && dart.test(_ctx.noDisplayed);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      if (dart.test(this[_query_yesButton_1_0_isDirty])) {
        this.ctx.yesButton = dart.test(this[_appEl_1].mapNestedViews(material_button__material_button.MaterialButtonComponent, material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, dart.fn(nestedView => JSArrayOfMaterialButtonComponent().of([nestedView[_MaterialButtonComponent_0_6]]), _ViewMaterialYesNoButtonsComponent2ToListOfMaterialButtonComponent()))[$isNotEmpty]) ? this[_appEl_1].mapNestedViews(material_button__material_button.MaterialButtonComponent, material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, dart.fn(nestedView => JSArrayOfMaterialButtonComponent().of([nestedView[_MaterialButtonComponent_0_6]]), _ViewMaterialYesNoButtonsComponent2ToListOfMaterialButtonComponent()))[$first] : null;
        this[_query_yesButton_1_0_isDirty] = false;
      }
      if (dart.test(this[_query_noButton_1_1_isDirty])) {
        this.ctx.noButton = dart.test(this[_appEl_2].mapNestedViews(material_button__material_button.MaterialButtonComponent, material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, dart.fn(nestedView => JSArrayOfMaterialButtonComponent().of([nestedView[_MaterialButtonComponent_0_6]]), _ViewMaterialYesNoButtonsComponent3ToListOfMaterialButtonComponent()))[$isNotEmpty]) ? this[_appEl_2].mapNestedViews(material_button__material_button.MaterialButtonComponent, material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, dart.fn(nestedView => JSArrayOfMaterialButtonComponent().of([nestedView[_MaterialButtonComponent_0_6]]), _ViewMaterialYesNoButtonsComponent3ToListOfMaterialButtonComponent()))[$first] : null;
        this[_query_noButton_1_1_isDirty] = false;
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_2];
      t$0 == null ? null : t$0.destroyNestedViews();
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new = function(parentView, parentIndex) {
    this[_query_yesButton_1_0_isDirty] = true;
    this[_query_noButton_1_1_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-yes-no-buttons'));
    let t = material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._renderType;
    t == null ? material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_yes_no_buttons__material_yes_no_buttons$46template.styles$MaterialYesNoButtonsComponent) : t;
    this.setupComponentType(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._renderType);
  }).prototype = material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0);
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.__proto__),
    [_query_yesButton_1_0_isDirty]: dart.fieldType(core.bool),
    [_query_noButton_1_1_isDirty]: dart.fieldType(core.bool),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, {
    /*material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent0 = function(parentView, parentIndex) {
    return new material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent0, AppViewAndintToAppViewOfMaterialYesNoButtonsComponent());
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialSpinnerComponent_1_5 = Symbol('_MaterialSpinnerComponent_1_5');
  material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1 = class _ViewMaterialYesNoButtonsComponent1 extends src__core__linker__app_view.AppView$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'btn spinner';
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialSpinnerComponent_1_5] = new material_spinner__material_spinner.MaterialSpinnerComponent.new();
      this[_compView_1].create(this[_MaterialSpinnerComponent_1_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialSpinnerComponent_1_5] = null;
    material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._renderType;
  }).prototype = material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1);
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0),
    [_MaterialSpinnerComponent_1_5]: dart.fieldType(material_spinner__material_spinner.MaterialSpinnerComponent)
  }));
  material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent1 = function(parentView, parentIndex) {
    return new material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent1, AppViewAndintToAppViewOfMaterialYesNoButtonsComponent());
  const _compView_0 = Symbol('_compView_0');
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$0;
  material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2 = class _ViewMaterialYesNoButtonsComponent2 extends src__core__linker__app_view.AppView$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent) {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'btn btn-yes';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('acxDarkTheme'))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), this[_AcxDarkTheme_0_5], this[_compView_0].ref);
      this[_text_1] = html.Text.new('');
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfText().of([this[_text_1]])]);
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'onYes')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_1 = dart.test(_ctx.yesDisabled) || dart.test(_ctx.disabled);
      if (!(this[_expr_1] === currVal_1)) {
        this[_MaterialButtonComponent_0_6].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.yesRaised) || dart.test(_ctx.raised);
      if (!(this[_expr_2] === currVal_2)) {
        this[_MaterialButtonComponent_0_6].raised = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.yesHighlighted;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_0], 'highlighted', currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let l = _ctx.yesText;
      let currVal_3 = l != null ? l : '';
      if (!(this[_expr_3] === currVal_3)) {
        this[_text_1][$text] = currVal_3;
        this[_expr_3] = currVal_3;
      }
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.as(this.parentView)[_query_yesButton_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._renderType;
  }).prototype = material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2);
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent2 = function(parentView, parentIndex) {
    return new material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent2, AppViewAndintToAppViewOfMaterialYesNoButtonsComponent());
  let const$1;
  material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3 = class _ViewMaterialYesNoButtonsComponent3 extends src__core__linker__app_view.AppView$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent) {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'btn btn-no';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('acxDarkTheme'))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), this[_AcxDarkTheme_0_5], this[_compView_0].ref);
      this[_text_1] = html.Text.new('');
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfText().of([this[_text_1]])]);
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'onNo')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.disabled;
      if (!(this[_expr_0] == currVal_0)) {
        this[_MaterialButtonComponent_0_6].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.raised;
      if (!(this[_expr_1] == currVal_1)) {
        this[_MaterialButtonComponent_0_6].raised = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let l = _ctx.noText;
      let currVal_2 = l != null ? l : '';
      if (!(this[_expr_2] === currVal_2)) {
        this[_text_1][$text] = currVal_2;
        this[_expr_2] = currVal_2;
      }
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.as(this.parentView)[_query_noButton_1_1_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._renderType;
  }).prototype = material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3);
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent3 = function(parentView, parentIndex) {
    return new material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.new(parentView, parentIndex);
  };
  dart.fn(material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent3, AppViewAndintToAppViewOfMaterialYesNoButtonsComponent());
  dart.defineLazy(material_yes_no_buttons__material_yes_no_buttons$46template, {
    /*material_yes_no_buttons__material_yes_no_buttons$46template.styles$MaterialYesNoButtonsComponentHost*/get styles$MaterialYesNoButtonsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialYesNoButtonsComponent_0_5 = Symbol('_MaterialYesNoButtonsComponent_0_5');
  material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0 = class _ViewMaterialYesNoButtonsComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialYesNoButtonsComponent_0_5] = new material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this[_compView_0].create(this[_MaterialYesNoButtonsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialYesNoButtonsComponent()).new(0, this, this.rootEl, this[_MaterialYesNoButtonsComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent) && 0 === nodeIndex) {
        return this[_MaterialYesNoButtonsComponent_0_5];
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
  (material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialYesNoButtonsComponent_0_5] = null;
    material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0);
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0),
    [_MaterialYesNoButtonsComponent_0_5]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent)
  }));
  material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponentHost0 = function(parentView, parentIndex) {
    return new material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_yes_no_buttons__material_yes_no_buttons$46template, {
    /*material_yes_no_buttons__material_yes_no_buttons$46template.MaterialYesNoButtonsComponentNgFactory*/get MaterialYesNoButtonsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialYesNoButtonsComponent()).new('material-yes-no-buttons', material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponentHost0, material_yes_no_buttons__material_yes_no_buttons$46template._MaterialYesNoButtonsComponentMetadata));
    },
    /*material_yes_no_buttons__material_yes_no_buttons$46template._MaterialYesNoButtonsComponentMetadata*/get _MaterialYesNoButtonsComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_yes_no_buttons__material_yes_no_buttons$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_yes_no_buttons__material_yes_no_buttons$46template.initReflector = function() {
    if (dart.test(material_yes_no_buttons__material_yes_no_buttons$46template._visited)) {
      return;
    }
    material_yes_no_buttons__material_yes_no_buttons$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent), material_yes_no_buttons__material_yes_no_buttons$46template.MaterialYesNoButtonsComponentNgFactory);
    angular$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_spinner__material_spinner$46template.initReflector();
  };
  dart.fn(material_yes_no_buttons__material_yes_no_buttons$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template.ddc", {
    "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart": material_yes_no_buttons__material_yes_no_buttons$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_yes_no_buttons.template.dart"],"names":[],"mappings":"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","file":"material_yes_no_buttons.template.ddc.js"}');
  // Exports:
  return {
    material_yes_no_buttons__material_yes_no_buttons$46template: material_yes_no_buttons__material_yes_no_buttons$46template
  };
});

//# sourceMappingURL=material_yes_no_buttons.template.ddc.js.map
