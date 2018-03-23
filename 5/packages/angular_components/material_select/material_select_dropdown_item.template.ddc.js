define(['dart_sdk', 'packages/angular_components/material_select/material_select_dropdown_item.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_select/material_select_dropdown_item', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular/src/core/linker/dynamic_component_loader', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/material_select/activation_handler.template', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, material_select_dropdown_item$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_if, material_select_dropdown_item, material_checkbox, material_checkbox$, glyph, glyph$, dynamic_component, dynamic_component_loader, dynamic_component$, dom_service, material_dropdown_base, activation_handler, selection_container, has_renderer, reflector, angular, activation_handler$, material_select_item, material_dropdown_base$, selection_container$, has_renderer$, dom_service$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_select_dropdown_item$46scss$46css$46shim = material_select_dropdown_item$46scss$46css.material_select__material_select_dropdown_item$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_select__material_select_dropdown_item = material_select_dropdown_item.material_select__material_select_dropdown_item;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const glyph__glyph = glyph$.glyph__glyph;
  const dynamic_component__dynamic_component$46template = dynamic_component.dynamic_component__dynamic_component$46template;
  const src__core__linker__dynamic_component_loader = dynamic_component_loader.src__core__linker__dynamic_component_loader;
  const dynamic_component__dynamic_component = dynamic_component$.dynamic_component__dynamic_component;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const material_select__activation_handler$46template = activation_handler$.material_select__activation_handler$46template;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const model__selection__selection_container$46template = selection_container$.model__selection__selection_container$46template;
  const model__ui__has_renderer$46template = has_renderer$.model__ui__has_renderer$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const _root = Object.create(null);
  const material_select__material_select_dropdown_item$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialSelectDropdownItemComponent = () => (AppViewOfMaterialSelectDropdownItemComponent = dart.constFn(src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent)))();
  let AppViewAndintToAppViewOfMaterialSelectDropdownItemComponent = () => (AppViewAndintToAppViewOfMaterialSelectDropdownItemComponent = dart.constFn(dart.fnType(AppViewOfMaterialSelectDropdownItemComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialSelectDropdownItemComponent = () => (ComponentRefOfMaterialSelectDropdownItemComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialSelectDropdownItemComponent = () => (ComponentFactoryOfMaterialSelectDropdownItemComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_select__material_select_dropdown_item$46template, {
    /*material_select__material_select_dropdown_item$46template.styles$MaterialSelectDropdownItemComponent*/get styles$MaterialSelectDropdownItemComponent() {
      return dart.constList([material_select__material_select_dropdown_item$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  let const$;
  material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0 = class ViewMaterialSelectDropdownItemComponent0 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent1);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _text_1 = html.Text.new('\n \n');
      parentRenderNode[$append](_text_1);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent2);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _text_3 = html.Text.new('\n \n');
      parentRenderNode[$append](_text_3);
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent6);
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = html.Text.new('\n \n');
      parentRenderNode[$append](_text_5);
      let _anchor_6 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent7);
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this.project(parentRenderNode, 0);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]('mouseenter', this.eventHandler0(html.Event, dart.bind(_ctx, 'onMouseEnter')));
      _rootEl[$addEventListener]('mouseleave', this.eventHandler0(html.Event, dart.bind(_ctx, 'onMouseLeave')));
      _rootEl[$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      _rootEl[$addEventListener]('mousedown', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'preventTextSelectionIfShiftKey')));
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = !dart.test(_ctx.supportsMultiSelect) && dart.test(_ctx.isSelected);
      this[_NgIf_2_9].ngIf = dart.test(_ctx.supportsMultiSelect) && !dart.test(_ctx.hideCheckbox);
      this[_NgIf_4_9].ngIf = _ctx.valueHasLabel;
      this[_NgIf_6_9].ngIf = _ctx.componentType != null || _ctx.componentFactory != null;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_4];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_6];
      t$1 == null ? null : t$1.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.role == null)) {
          this.setAttr(this.rootEl, 'role', this.ctx.role == null ? null : dart.toString(this.ctx.role));
        }
      }
      let currVal_4 = this.ctx.tabIndex;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this.setProp(this.rootEl, 'tabIndex', currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = this.ctx.active;
      if (!(this[_expr_5] == currVal_5)) {
        this.updateElemClass(this.rootEl, 'active', currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = this.ctx.disabledStr;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this.setAttr(this.rootEl, 'aria-disabled', currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = this.ctx.disabled;
      if (!(this[_expr_7] == currVal_7)) {
        this.updateElemClass(this.rootEl, 'is-disabled', currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = this.ctx.disabled;
      if (!(this[_expr_8] == currVal_8)) {
        this.updateElemClass(this.rootEl, 'disabled', currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = this.ctx.isHidden;
      if (!(this[_expr_9] == currVal_9)) {
        this.updateElemClass(this.rootEl, 'hidden', currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = this.ctx.isSelected;
      if (!(this[_expr_10] == currVal_10)) {
        this.updateElemClass(this.rootEl, 'selected', currVal_10);
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = this.ctx.supportsMultiSelect;
      if (!(this[_expr_11] == currVal_11)) {
        this.updateElemClass(this.rootEl, 'multiselect', currVal_11);
        this[_expr_11] = currVal_11;
      }
    }
  };
  (material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-select-dropdown-item'));
    this.createAttr(this.rootEl, 'role', 'option');
    this.rootEl.className = 'item';
    this.rootEl.tabIndex = 0;
    let t = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
    t == null ? material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_select__material_select_dropdown_item$46template.styles$MaterialSelectDropdownItemComponent) : t;
    this.setupComponentType(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType);
  }).prototype = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.prototype;
  dart.addTypeTests(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0);
  dart.setMethodSignature(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0, () => ({
    __proto__: dart.getMethods(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0, () => ({
    __proto__: dart.getFields(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0, {
    /*material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent0 = function(parentView, parentIndex) {
    return new material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent0, AppViewAndintToAppViewOfMaterialSelectDropdownItemComponent());
  const _el_0 = Symbol('_el_0');
  const _expr_0 = Symbol('_expr_0');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1 = class _ViewMaterialSelectDropdownItemComponent1 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'selected-accent mixin';
      this.addShimC(this[_el_0]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.selectedMessage;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this[_el_0], 'aria-label', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_expr_0] = null;
    material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
  }).prototype = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1.prototype;
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1);
  dart.setMethodSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1, () => ({
    __proto__: dart.getMethods(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1, () => ({
    __proto__: dart.getFields(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent1 = function(parentView, parentIndex) {
    return new material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent1, AppViewAndintToAppViewOfMaterialSelectDropdownItemComponent());
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2 = class _ViewMaterialSelectDropdownItemComponent2 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent3);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _text_1 = html.Text.new('\n   \n  ');
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent4);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init([this[_appEl_0], _text_1, this[_appEl_2]], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = !dart.test(_ctx.useCheckMarks);
      this[_NgIf_2_9].ngIf = _ctx.useCheckMarks;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
  }).prototype = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2.prototype;
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2);
  dart.setMethodSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2, () => ({
    __proto__: dart.getMethods(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2, () => ({
    __proto__: dart.getFields(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent2 = function(parentView, parentIndex) {
    return new material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent2, AppViewAndintToAppViewOfMaterialSelectDropdownItemComponent());
  const _compView_0 = Symbol('_compView_0');
  const _MaterialCheckboxComponent_0_5 = Symbol('_MaterialCheckboxComponent_0_5');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  let const$0;
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3 = class _ViewMaterialSelectDropdownItemComponent3 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent) {
    build() {
      this[_compView_0] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].tabIndex = -1;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialCheckboxComponent_0_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, null, '-1', null);
      this[_compView_0].create(this[_MaterialCheckboxComponent_0_5], [const$0 || (const$0 = dart.constList([], dart.dynamic))]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_1 = _ctx.disabled;
      if (!(this[_expr_1] == currVal_1)) {
        this[_MaterialCheckboxComponent_0_5].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.isSelected;
      if (!(this[_expr_2] == currVal_2)) {
        this[_MaterialCheckboxComponent_0_5].checked = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = dart.test(_ctx.isSelected) ? _ctx.selectedMessage : _ctx.notSelectedMessage;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this[_el_0], 'aria-label', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialCheckboxComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
  }).prototype = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3.prototype;
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3);
  dart.setMethodSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3, () => ({
    __proto__: dart.getMethods(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3, () => ({
    __proto__: dart.getFields(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_0_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent3 = function(parentView, parentIndex) {
    return new material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent3, AppViewAndintToAppViewOfMaterialSelectDropdownItemComponent());
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4 = class _ViewMaterialSelectDropdownItemComponent4 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'check-container';
      this.addShimE(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent5);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.isSelected;
      this[_appEl_1].detectChangesInNestedViews();
      let currVal_0 = dart.test(_ctx.isSelected) ? _ctx.selectedMessage : _ctx.notSelectedMessage;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this[_el_0], 'aria-label', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
  }).prototype = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4.prototype;
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4);
  dart.setMethodSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4, () => ({
    __proto__: dart.getMethods(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4, () => ({
    __proto__: dart.getFields(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent4 = function(parentView, parentIndex) {
    return new material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent4, AppViewAndintToAppViewOfMaterialSelectDropdownItemComponent());
  const _GlyphComponent_0_5 = Symbol('_GlyphComponent_0_5');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5 = class _ViewMaterialSelectDropdownItemComponent5 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent) {
    build() {
      this[_compView_0] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'baseline', '');
      this[_el_0].className = 'check';
      this.createAttr(this[_el_0], 'icon', 'check');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_GlyphComponent_0_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_GlyphComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_GlyphComponent_0_5].icon = 'check';
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
  (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_GlyphComponent_0_5] = null;
    material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
  }).prototype = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5.prototype;
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5);
  dart.setMethodSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5, () => ({
    __proto__: dart.getMethods(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5, () => ({
    __proto__: dart.getFields(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_0_5]: dart.fieldType(glyph__glyph.GlyphComponent)
  }));
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent5 = function(parentView, parentIndex) {
    return new material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent5, AppViewAndintToAppViewOfMaterialSelectDropdownItemComponent());
  const _text_1 = Symbol('_text_1');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6 = class _ViewMaterialSelectDropdownItemComponent6 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'label';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.valueLabel);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
  }).prototype = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6.prototype;
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6);
  dart.setMethodSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6, () => ({
    __proto__: dart.getMethods(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6, () => ({
    __proto__: dart.getFields(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent6 = function(parentView, parentIndex) {
    return new material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent6, AppViewAndintToAppViewOfMaterialSelectDropdownItemComponent());
  const _DynamicComponent_0_8 = Symbol('_DynamicComponent_0_8');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7 = class _ViewMaterialSelectDropdownItemComponent7 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent) {
    build() {
      this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'dynamic-item';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_DynamicComponent_0_8] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]);
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
      changed = false;
      let currVal_0 = _ctx.componentType;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_DynamicComponent_0_8].componentType = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.componentFactory;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_DynamicComponent_0_8].componentFactory = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.value;
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
  (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_DynamicComponent_0_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
  }).prototype = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7.prototype;
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7);
  dart.setMethodSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7, () => ({
    __proto__: dart.getMethods(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7, () => ({
    __proto__: dart.getFields(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent7 = function(parentView, parentIndex) {
    return new material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent7, AppViewAndintToAppViewOfMaterialSelectDropdownItemComponent());
  dart.defineLazy(material_select__material_select_dropdown_item$46template, {
    /*material_select__material_select_dropdown_item$46template.styles$MaterialSelectDropdownItemComponentHost*/get styles$MaterialSelectDropdownItemComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialSelectDropdownItemComponent_0_5 = Symbol('_MaterialSelectDropdownItemComponent_0_5');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0 = class _ViewMaterialSelectDropdownItemComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialSelectDropdownItemComponent_0_5] = new material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.new(this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.viewData.parentIndex, null)), this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialSelectDropdownItemComponent()).new(0, this, this.rootEl, this[_MaterialSelectDropdownItemComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent) || token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
        return this[_MaterialSelectDropdownItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialSelectDropdownItemComponent_0_5].ngOnDestroy();
    }
  };
  (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSelectDropdownItemComponent_0_5] = null;
    material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0.prototype;
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0);
  dart.setMethodSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0, () => ({
    __proto__: dart.getMethods(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0, () => ({
    __proto__: dart.getFields(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0),
    [_MaterialSelectDropdownItemComponent_0_5]: dart.fieldType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent)
  }));
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponentHost0 = function(parentView, parentIndex) {
    return new material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_select__material_select_dropdown_item$46template, {
    /*material_select__material_select_dropdown_item$46template.MaterialSelectDropdownItemComponentNgFactory*/get MaterialSelectDropdownItemComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSelectDropdownItemComponent()).new('material-select-dropdown-item', material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponentHost0, material_select__material_select_dropdown_item$46template._MaterialSelectDropdownItemComponentMetadata));
    },
    /*material_select__material_select_dropdown_item$46template._MaterialSelectDropdownItemComponentMetadata*/get _MaterialSelectDropdownItemComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_select__material_select_dropdown_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_select_dropdown_item$46template.initReflector = function() {
    if (dart.test(material_select__material_select_dropdown_item$46template._visited)) {
      return;
    }
    material_select__material_select_dropdown_item$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), material_select__material_select_dropdown_item$46template.MaterialSelectDropdownItemComponentNgFactory);
    angular$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    glyph__glyph$46template.initReflector();
    material_checkbox__material_checkbox$46template.initReflector();
    material_select__activation_handler$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.fn(material_select__material_select_dropdown_item$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_select/material_select_dropdown_item.template.ddc", {
    "package:angular_components/material_select/material_select_dropdown_item.template.dart": material_select__material_select_dropdown_item$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_select_dropdown_item.template.dart"],"names":[],"mappings":"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","file":"material_select_dropdown_item.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_dropdown_item$46template: material_select__material_select_dropdown_item$46template
  };
});

//# sourceMappingURL=material_select_dropdown_item.template.ddc.js.map
