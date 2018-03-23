define(['dart_sdk', 'packages/angular_components/material_expansionpanel/material_expansionpanel.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/material_expansionpanel/material_expansionpanel', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_expansionpanel$46scss$46css, view_type, constants, view, app_view_utils, app_view, material_yes_no_buttons, ng_if, button_decorator, material_expansionpanel, button_decorator$, material_icon, material_icon$, material_yes_no_buttons$, ng_zone, dom_service, deferred_content_aware, reflector, angular, deferred_content_aware$, focus, async_action, dom_service$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_expansionpanel__material_expansionpanel$46scss$46css$46shim = material_expansionpanel$46scss$46css.material_expansionpanel__material_expansionpanel$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_yes_no_buttons__material_yes_no_buttons = material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const material_expansionpanel__material_expansionpanel = material_expansionpanel.material_expansionpanel__material_expansionpanel;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const material_yes_no_buttons__material_yes_no_buttons$46template = material_yes_no_buttons$.material_yes_no_buttons__material_yes_no_buttons$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const model__action__async_action$46template = async_action.model__action__async_action$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_expansionpanel__material_expansionpanel$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $toString = dartx.toString;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfButtonDirective = () => (JSArrayOfButtonDirective = dart.constFn(_interceptors.JSArray$(button_decorator__button_decorator.ButtonDirective)))();
  let ListOfButtonDirective = () => (ListOfButtonDirective = dart.constFn(core.List$(button_decorator__button_decorator.ButtonDirective)))();
  let _ViewMaterialExpansionPanel1ToListOfButtonDirective = () => (_ViewMaterialExpansionPanel1ToListOfButtonDirective = dart.constFn(dart.fnType(ListOfButtonDirective(), [material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1])))();
  let _ViewMaterialExpansionPanel5ToListOfButtonDirective = () => (_ViewMaterialExpansionPanel5ToListOfButtonDirective = dart.constFn(dart.fnType(ListOfButtonDirective(), [material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5])))();
  let JSArrayOfListOfButtonDirective = () => (JSArrayOfListOfButtonDirective = dart.constFn(_interceptors.JSArray$(ListOfButtonDirective())))();
  let AppViewOfMaterialExpansionPanel = () => (AppViewOfMaterialExpansionPanel = dart.constFn(src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  let AppViewAndintToAppViewOfMaterialExpansionPanel = () => (AppViewAndintToAppViewOfMaterialExpansionPanel = dart.constFn(dart.fnType(AppViewOfMaterialExpansionPanel(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialExpansionPanel = () => (ComponentRefOfMaterialExpansionPanel = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialExpansionPanel = () => (ComponentFactoryOfMaterialExpansionPanel = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template, {
    /*material_expansionpanel__material_expansionpanel$46template.styles$MaterialExpansionPanel*/get styles$MaterialExpansionPanel() {
      return dart.constList([material_expansionpanel__material_expansionpanel$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_mainPanel_1_0_isDirty = Symbol('_query_mainPanel_1_0_isDirty');
  const _query_mainContent_1_1_isDirty = Symbol('_query_mainContent_1_1_isDirty');
  const _query_contentWrapper_1_2_isDirty = Symbol('_query_contentWrapper_1_2_isDirty');
  const _query_expandCollapseButton_1_3_isDirty = Symbol('_query_expandCollapseButton_1_3_isDirty');
  const _el_0 = Symbol('_el_0');
  const _KeyUpBoundaryDirective_0_5 = Symbol('_KeyUpBoundaryDirective_0_5');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_4 = Symbol('_el_4');
  const _el_5 = Symbol('_el_5');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _appEl_8 = Symbol('_appEl_8');
  const _NgIf_8_9 = Symbol('_NgIf_8_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  let const$;
  const _ButtonDirective_1_5 = Symbol('_ButtonDirective_1_5');
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0 = class ViewMaterialExpansionPanel0 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'panel themeable';
      this.createAttr(this[_el_0], 'keyupBoundary', '');
      this.createAttr(this[_el_0], 'role', 'group');
      this.addShimC(this[_el_0]);
      this[_KeyUpBoundaryDirective_0_5] = new material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective.new(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel1);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'main', this[_el_0]);
      this.addShimE(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this.addShimC(this[_el_3]);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_3]);
      this[_el_4].className = 'content-wrapper';
      this.addShimC(this[_el_4]);
      this[_el_5] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_4]);
      this[_el_5].className = 'content';
      this.addShimC(this[_el_5]);
      this.project(this[_el_5], 3);
      let _anchor_6 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_4][$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 4, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel5);
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_3][$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 3, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel6);
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _anchor_8 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_3][$append](_anchor_8);
      this[_appEl_8] = new src__core__linker__view_container.ViewContainer.new(8, 3, this, _anchor_8);
      let _TemplateRef_8_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_8], material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel7);
      this[_NgIf_8_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      this.ctx.mainPanel = html.HtmlElement._check(this[_el_2]);
      this.ctx.mainContent = this[_el_3];
      this.ctx.contentWrapper = this[_el_4];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_KeyUpBoundaryDirective_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = !dart.test(_ctx.isExpanded) || !dart.test(_ctx.hideExpandedHeader);
      this[_NgIf_6_9].ngIf = _ctx.shouldShowHiddenHeaderExpandIcon;
      this[_NgIf_7_9].ngIf = !dart.test(_ctx.showSaveCancel);
      this[_NgIf_8_9].ngIf = _ctx.showSaveCancel;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      if (dart.test(this[_query_expandCollapseButton_1_3_isDirty])) {
        this.ctx.expandCollapse = dart.test(src__core__linker__app_view_utils.flattenNodes(button_decorator__button_decorator.ButtonDirective, JSArrayOfListOfButtonDirective().of([this[_appEl_1].mapNestedViews(button_decorator__button_decorator.ButtonDirective, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1, dart.fn(nestedView => JSArrayOfButtonDirective().of([nestedView[_ButtonDirective_1_5].instance]), _ViewMaterialExpansionPanel1ToListOfButtonDirective())), this[_appEl_6].mapNestedViews(button_decorator__button_decorator.ButtonDirective, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, dart.fn(nestedView => JSArrayOfButtonDirective().of([nestedView[_ButtonDirective_0_5].instance]), _ViewMaterialExpansionPanel5ToListOfButtonDirective()))]))[$isNotEmpty]) ? src__core__linker__app_view_utils.flattenNodes(button_decorator__button_decorator.ButtonDirective, JSArrayOfListOfButtonDirective().of([this[_appEl_1].mapNestedViews(button_decorator__button_decorator.ButtonDirective, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1, dart.fn(nestedView => JSArrayOfButtonDirective().of([nestedView[_ButtonDirective_1_5].instance]), _ViewMaterialExpansionPanel1ToListOfButtonDirective())), this[_appEl_6].mapNestedViews(button_decorator__button_decorator.ButtonDirective, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, dart.fn(nestedView => JSArrayOfButtonDirective().of([nestedView[_ButtonDirective_0_5].instance]), _ViewMaterialExpansionPanel5ToListOfButtonDirective()))]))[$first] : null;
        this[_query_expandCollapseButton_1_3_isDirty] = false;
      }
      let currVal_0 = _ctx.name;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this[_el_0], 'aria-label', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isExpanded;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this[_el_0], 'aria-expanded', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.isExpanded;
      if (!(this[_expr_2] == currVal_2)) {
        this.updateClass(this[_el_0], 'open', currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.anotherExpanded;
      if (!(this[_expr_3] == currVal_3)) {
        this.updateClass(this[_el_0], 'background', currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_5 = !dart.test(_ctx.isExpanded);
      if (!(this[_expr_5] === currVal_5)) {
        this.updateClass(html.HtmlElement._check(this[_el_2]), 'hidden', currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.hideExpandedHeader;
      if (!(this[_expr_6] == currVal_6)) {
        this.updateClass(this[_el_4], 'hidden-header', currVal_6);
        this[_expr_6] = currVal_6;
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_6];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_7];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_8];
      t$1 == null ? null : t$1.destroyNestedViews();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new = function(parentView, parentIndex) {
    this[_query_mainPanel_1_0_isDirty] = true;
    this[_query_mainContent_1_1_isDirty] = true;
    this[_query_contentWrapper_1_2_isDirty] = true;
    this[_query_expandCollapseButton_1_3_isDirty] = true;
    this[_el_0] = null;
    this[_KeyUpBoundaryDirective_0_5] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-expansionpanel'));
    let t = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
    t == null ? material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_expansionpanel__material_expansionpanel$46template.styles$MaterialExpansionPanel) : t;
    this.setupComponentType(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType);
  }).prototype = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__),
    [_query_mainPanel_1_0_isDirty]: dart.fieldType(core.bool),
    [_query_mainContent_1_1_isDirty]: dart.fieldType(core.bool),
    [_query_contentWrapper_1_2_isDirty]: dart.fieldType(core.bool),
    [_query_expandCollapseButton_1_3_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_KeyUpBoundaryDirective_0_5]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_2]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.DivElement),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_8]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_8_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, {
    /*material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel0 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new(parentView, parentIndex);
  };
  dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel0, AppViewAndintToAppViewOfMaterialExpansionPanel());
  const _el_1 = Symbol('_el_1');
  const _text_4 = Symbol('_text_4');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _el_6 = Symbol('_el_6');
  const _expr_4 = Symbol('_expr_4');
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1 = class _ViewMaterialExpansionPanel1 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('header');
      this.addShimE(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.createAttr(this[_el_1], 'buttonDecorator', '');
      this[_el_1].className = 'header';
      this.createAttr(this[_el_1], 'role', 'button');
      this.addShimC(this[_el_1]);
      this[_ButtonDirective_1_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_1]));
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_2].className = 'panel-name';
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_2]);
      this[_el_3].className = 'primary-text';
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new('');
      this[_el_3][$append](this[_text_4]);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_2][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 2, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel2);
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this.project(this[_el_2], 0);
      this[_el_6] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_6].className = 'panel-description';
      this.addShimC(this[_el_6]);
      this.project(this[_el_6], 1);
      let _anchor_7 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_1][$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 1, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel3);
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _anchor_8 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_8);
      this[_appEl_8] = new src__core__linker__view_container.ViewContainer.new(8, 0, this, _anchor_8);
      let _TemplateRef_8_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_8], material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel4);
      this[_NgIf_8_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      this[_el_1][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_1_5].instance, 'handleClick')));
      this[_el_1][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_1_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_1_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'handleHeaderClick')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_ButtonDirective_1_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_3 = _ctx.disabled;
      if (!(this[_expr_3] == currVal_3)) {
        this[_ButtonDirective_1_5].instance.disabled = currVal_3;
        this[_expr_3] = currVal_3;
      }
      this[_NgIf_5_9].ngIf = _ctx.secondaryText != null;
      this[_NgIf_7_9].ngIf = _ctx.shouldShowExpandIcon;
      this[_NgIf_8_9].ngIf = !dart.test(_ctx.shouldShowExpandIcon);
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      let currVal_0 = !dart.test(_ctx.isExpanded);
      if (!(this[_expr_0] === currVal_0)) {
        this.updateClass(this[_el_1], 'closed', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disableHeaderExpansion;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateClass(this[_el_1], 'disable-header-expansion', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.headerMsg;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this.setAttr(this[_el_1], 'aria-label', currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      this[_ButtonDirective_1_5].detectHostChanges(this, this[_el_1]);
      let l = _ctx.name;
      let currVal_4 = l != null ? l : '';
      if (!(this[_expr_4] === currVal_4)) {
        this[_text_4][$text] = currVal_4;
        this[_expr_4] = currVal_4;
      }
    }
    dirtyParentQueriesInternal() {
      material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.as(this.parentView)[_query_expandCollapseButton_1_3_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_5];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_7];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_8];
      t$0 == null ? null : t$0.destroyNestedViews();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_ButtonDirective_1_5] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_el_6] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.DivElement),
    [_ButtonDirective_1_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_6]: dart.fieldType(html.DivElement),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_8]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_8_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel1 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.new(parentView, parentIndex);
  };
  dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel1, AppViewAndintToAppViewOfMaterialExpansionPanel());
  const _text_1 = Symbol('_text_1');
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2 = class _ViewMaterialExpansionPanel2 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('p');
      this[_el_0].className = 'secondary-text';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.secondaryText;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel2 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.new(parentView, parentIndex);
  };
  dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel2, AppViewAndintToAppViewOfMaterialExpansionPanel());
  const _compView_0 = Symbol('_compView_0');
  const _MaterialIconComponent_0_6 = Symbol('_MaterialIconComponent_0_6');
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3 = class _ViewMaterialExpansionPanel3 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'buttonDecorator', '');
      this[_el_0].className = 'expand-button';
      this.createAttr(this[_el_0], 'role', 'button');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0]));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_6], []);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'handleExpandIconClick')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_1 = _ctx.expandIcon;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_MaterialIconComponent_0_6].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.shouldFlipExpandIcon;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_0], 'expand-more', currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel3 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.new(parentView, parentIndex);
  };
  dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel3, AppViewAndintToAppViewOfMaterialExpansionPanel());
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4 = class _ViewMaterialExpansionPanel4 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'action';
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 2);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel4 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.new(parentView, parentIndex);
  };
  dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel4, AppViewAndintToAppViewOfMaterialExpansionPanel());
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5 = class _ViewMaterialExpansionPanel5 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'buttonDecorator', '');
      this[_el_0].className = 'expand-button';
      this.createAttr(this[_el_0], 'role', 'button');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0]));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_6], []);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'collapse')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_1 = _ctx.expandIcon;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_MaterialIconComponent_0_6].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.closePanelMsg;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this[_el_0], 'aria-label', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.as(this.parentView)[_query_expandCollapseButton_1_3_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel5 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.new(parentView, parentIndex);
  };
  dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel5, AppViewAndintToAppViewOfMaterialExpansionPanel());
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6 = class _ViewMaterialExpansionPanel6 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'toolbelt';
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 4);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel6 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.new(parentView, parentIndex);
  };
  dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel6, AppViewAndintToAppViewOfMaterialExpansionPanel());
  const _MaterialYesNoButtonsComponent_0_5 = Symbol('_MaterialYesNoButtonsComponent_0_5');
  const _EnterAcceptsDirective_0_6 = Symbol('_EnterAcceptsDirective_0_6');
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7 = class _ViewMaterialExpansionPanel7 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      this[_compView_0] = new material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'action-buttons';
      this.createAttr(this[_el_0], 'reverse', '');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialYesNoButtonsComponent_0_5] = new material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this[_EnterAcceptsDirective_0_6] = new material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective.new(this[_MaterialYesNoButtonsComponent_0_5], this[_el_0], material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.as(this.parentView)[_KeyUpBoundaryDirective_0_5]);
      this[_compView_0].create(this[_MaterialYesNoButtonsComponent_0_5], []);
      let subscription_0 = this[_MaterialYesNoButtonsComponent_0_5].yes.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'doSave')));
      let subscription_1 = this[_MaterialYesNoButtonsComponent_0_5].no.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'doCancel')));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent) && 0 === nodeIndex) {
        return this[_MaterialYesNoButtonsComponent_0_5];
      }
      if (token === dart.wrapType(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective) && 0 === nodeIndex) {
        return this[_EnterAcceptsDirective_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.saveText;
      if (!(this[_expr_0] == currVal_0)) {
        this[_MaterialYesNoButtonsComponent_0_5].yesText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.cancelText;
      if (!(this[_expr_1] == currVal_1)) {
        this[_MaterialYesNoButtonsComponent_0_5].noText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.saveDisabled;
      if (!(this[_expr_2] == currVal_2)) {
        this[_MaterialYesNoButtonsComponent_0_5].yesDisabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.cancelDisplayed;
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialYesNoButtonsComponent_0_5].noDisplayed = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activeSaveCancelAction;
      if (!(this[_expr_4] == currVal_4)) {
        this[_MaterialYesNoButtonsComponent_0_5].pending = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_5 = _ctx.enterAccepts;
      if (!(this[_expr_5] == currVal_5)) {
        this[_EnterAcceptsDirective_0_6].enterAccepts = currVal_5;
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_EnterAcceptsDirective_0_6].ngOnDestroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialYesNoButtonsComponent_0_5] = null;
    this[_EnterAcceptsDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0),
    [_MaterialYesNoButtonsComponent_0_5]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent),
    [_EnterAcceptsDirective_0_6]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel7 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.new(parentView, parentIndex);
  };
  dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel7, AppViewAndintToAppViewOfMaterialExpansionPanel());
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template, {
    /*material_expansionpanel__material_expansionpanel$46template.styles$MaterialExpansionPanelHost*/get styles$MaterialExpansionPanelHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialExpansionPanel_0_5 = Symbol('_MaterialExpansionPanel_0_5');
  const _query_AutoFocusDirective_0_0_isDirty = Symbol('_query_AutoFocusDirective_0_0_isDirty');
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0 = class _ViewMaterialExpansionPanelHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialExpansionPanel_0_5] = new material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_compView_0].ref, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialExpansionPanel_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialExpansionPanel()).new(0, this, this.rootEl, this[_MaterialExpansionPanel_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 0 === nodeIndex) {
        return this[_MaterialExpansionPanel_0_5];
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
        this[_MaterialExpansionPanel_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialExpansionPanel_0_5].ngOnDestroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialExpansionPanel_0_5] = null;
    this[_query_AutoFocusDirective_0_0_isDirty] = true;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__),
    [_compView_0]: dart.fieldType(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0),
    [_MaterialExpansionPanel_0_5]: dart.fieldType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel),
    [_query_AutoFocusDirective_0_0_isDirty]: dart.fieldType(core.bool)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanelHost0 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.new(parentView, parentIndex);
  };
  dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanelHost0, AppViewAndintToAppView());
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template, {
    /*material_expansionpanel__material_expansionpanel$46template.MaterialExpansionPanelNgFactory*/get MaterialExpansionPanelNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialExpansionPanel()).new('material-expansionpanel', material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanelHost0, material_expansionpanel__material_expansionpanel$46template._MaterialExpansionPanelMetadata));
    },
    /*material_expansionpanel__material_expansionpanel$46template._MaterialExpansionPanelMetadata*/get _MaterialExpansionPanelMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_expansionpanel__material_expansionpanel$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_expansionpanel__material_expansionpanel$46template.initReflector = function() {
    if (dart.test(material_expansionpanel__material_expansionpanel$46template._visited)) {
      return;
    }
    material_expansionpanel__material_expansionpanel$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), material_expansionpanel__material_expansionpanel$46template.MaterialExpansionPanelNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    focus__focus$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_yes_no_buttons__material_yes_no_buttons$46template.initReflector();
    model__action__async_action$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(material_expansionpanel__material_expansionpanel$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel.template.ddc", {
    "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart": material_expansionpanel__material_expansionpanel$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel.template.dart"],"names":[],"mappings":"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","file":"material_expansionpanel.template.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel$46template: material_expansionpanel__material_expansionpanel$46template
  };
});

//# sourceMappingURL=material_expansionpanel.template.ddc.js.map
