define(['dart_sdk', 'packages/angular_components/button_decorator/button_decorator.scss.css.shim', 'packages/angular_components/material_select/dropdown_button.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/mixins/button_wrapper.template', 'packages/angular_components/mixins/focusable_mixin.template'], function(dart_sdk, button_decorator$46scss$46css, dropdown_button$46scss$46css, view_type, constants, view, app_view_utils, app_view, button_decorator, button_decorator$, dom_service, keyboard_only_focus_indicator, ng_if, dropdown_button, glyph, glyph$, reflector, angular, keyboard_only_focus_indicator$, button_wrapper, focusable_mixin) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const button_decorator__button_decorator$46scss$46css$46shim = button_decorator$46scss$46css.button_decorator__button_decorator$46scss$46css$46shim;
  const material_select__dropdown_button$46scss$46css$46shim = dropdown_button$46scss$46css.material_select__dropdown_button$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_select__dropdown_button = dropdown_button.material_select__dropdown_button;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const glyph__glyph = glyph$.glyph__glyph;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const mixins__button_wrapper$46template = button_wrapper.mixins__button_wrapper$46template;
  const mixins__focusable_mixin$46template = focusable_mixin.mixins__focusable_mixin$46template;
  const _root = Object.create(null);
  const material_select__dropdown_button$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfDropdownButtonComponent = () => (AppViewOfDropdownButtonComponent = dart.constFn(src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent)))();
  let AppViewAndintToAppViewOfDropdownButtonComponent = () => (AppViewAndintToAppViewOfDropdownButtonComponent = dart.constFn(dart.fnType(AppViewOfDropdownButtonComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfDropdownButtonComponent = () => (ComponentRefOfDropdownButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDropdownButtonComponent = () => (ComponentFactoryOfDropdownButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__dropdown_button.DropdownButtonComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_select__dropdown_button$46template, {
    /*material_select__dropdown_button$46template.styles$DropdownButtonComponent*/get styles$DropdownButtonComponent() {
      return dart.constList([button_decorator__button_decorator$46scss$46css$46shim.styles, material_select__dropdown_button$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_ButtonDirective_1_0_isDirty = Symbol('_query_ButtonDirective_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_6');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _handle_blur_0_1 = Symbol('_handle_blur_0_1');
  const _handle_click_0_2 = Symbol('_handle_click_0_2');
  let const$;
  material_select__dropdown_button$46template.ViewDropdownButtonComponent0 = class ViewDropdownButtonComponent0 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_0], 'buttonDecorator', '');
      this[_el_0].className = 'button';
      this.createAttr(this[_el_0], 'keyboardOnlyFocusIndicator', '');
      this.createAttr(this[_el_0], 'role', 'button');
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent1);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.project(this[_el_0], 0);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent2);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent3);
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this[_el_0][$addEventListener]('focus', this.eventHandler1(html.Event, html.FocusEvent, dart.bind(this.ctx, 'handleFocus')));
      this[_el_0][$addEventListener]('blur', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_blur_0_1)));
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_2)));
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]('keyup', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]('mousedown', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
      this.ctx.button = this[_ButtonDirective_0_5].instance;
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_ButtonDirective_0_5].instance;
      }
      if (token === dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_KeyboardOnlyFocusIndicatorDirective_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_3 = _ctx.disabled;
      if (!(this[_expr_3] == currVal_3)) {
        this[_ButtonDirective_0_5].instance.disabled = currVal_3;
        this[_expr_3] = currVal_3;
      }
      this[_NgIf_1_9].ngIf = _ctx.buttonText != null;
      this[_NgIf_2_9].ngIf = _ctx.buttonIcon != null;
      this[_NgIf_3_9].ngIf = _ctx.invalid;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      let currVal_0 = _ctx.buttonAriaLabel;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this[_el_0], 'aria-label', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.showButtonBorder;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateClass(this[_el_0], 'border', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.invalid;
      if (!(this[_expr_2] == currVal_2)) {
        this.updateClass(this[_el_0], 'invalid', currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_3];
      t$0 == null ? null : t$0.destroyNestedViews();
    }
    [_handle_blur_0_1]($event) {
      this.ctx.handleBlur(html.FocusEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].resetOutline();
    }
    [_handle_click_0_2]($event) {
      this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].hideOutline();
    }
  };
  (material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new = function(parentView, parentIndex) {
    this[_query_ButtonDirective_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_select__dropdown_button$46template.ViewDropdownButtonComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('dropdown-button'));
    let t = material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType;
    t == null ? material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_select__dropdown_button$46template.styles$DropdownButtonComponent) : t;
    this.setupComponentType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType);
  }).prototype = material_select__dropdown_button$46template.ViewDropdownButtonComponent0.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template.ViewDropdownButtonComponent0);
  dart.setMethodSignature(material_select__dropdown_button$46template.ViewDropdownButtonComponent0, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template.ViewDropdownButtonComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_blur_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_0_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template.ViewDropdownButtonComponent0, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template.ViewDropdownButtonComponent0.__proto__),
    [_query_ButtonDirective_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_select__dropdown_button$46template.ViewDropdownButtonComponent0, {
    /*material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent0 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent0, AppViewAndintToAppViewOfDropdownButtonComponent());
  const _text_1 = Symbol('_text_1');
  material_select__dropdown_button$46template._ViewDropdownButtonComponent1 = class _ViewDropdownButtonComponent1 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'button-text';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.buttonText);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_select__dropdown_button$46template._ViewDropdownButtonComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_select__dropdown_button$46template._ViewDropdownButtonComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType;
  }).prototype = material_select__dropdown_button$46template._ViewDropdownButtonComponent1.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template._ViewDropdownButtonComponent1);
  dart.setMethodSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent1, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template._ViewDropdownButtonComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent1, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template._ViewDropdownButtonComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent1 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template._ViewDropdownButtonComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent1, AppViewAndintToAppViewOfDropdownButtonComponent());
  const _compView_0 = Symbol('_compView_0');
  const _GlyphComponent_0_5 = Symbol('_GlyphComponent_0_5');
  material_select__dropdown_button$46template._ViewDropdownButtonComponent2 = class _ViewDropdownButtonComponent2 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      this[_compView_0] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'icon';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_GlyphComponent_0_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_GlyphComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.buttonIcon;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_GlyphComponent_0_5].icon = currVal_0;
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
    }
  };
  (material_select__dropdown_button$46template._ViewDropdownButtonComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_GlyphComponent_0_5] = null;
    this[_expr_0] = null;
    material_select__dropdown_button$46template._ViewDropdownButtonComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType;
  }).prototype = material_select__dropdown_button$46template._ViewDropdownButtonComponent2.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template._ViewDropdownButtonComponent2);
  dart.setMethodSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent2, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template._ViewDropdownButtonComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent2, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template._ViewDropdownButtonComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_0_5]: dart.fieldType(glyph__glyph.GlyphComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent2 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template._ViewDropdownButtonComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent2, AppViewAndintToAppViewOfDropdownButtonComponent());
  material_select__dropdown_button$46template._ViewDropdownButtonComponent3 = class _ViewDropdownButtonComponent3 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'error-text';
      this.createAttr(this[_el_0], 'role', 'alert');
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.invalid;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateClass(this[_el_0], 'invalid', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(!dart.test(_ctx.invalid));
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this[_el_0], 'aria-hidden', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let l = _ctx.error;
      let currVal_2 = l != null ? l : '';
      if (!(this[_expr_2] === currVal_2)) {
        this[_text_1][$text] = currVal_2;
        this[_expr_2] = currVal_2;
      }
    }
  };
  (material_select__dropdown_button$46template._ViewDropdownButtonComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_select__dropdown_button$46template._ViewDropdownButtonComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__dropdown_button$46template.ViewDropdownButtonComponent0._renderType;
  }).prototype = material_select__dropdown_button$46template._ViewDropdownButtonComponent3.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template._ViewDropdownButtonComponent3);
  dart.setMethodSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent3, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template._ViewDropdownButtonComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent3, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template._ViewDropdownButtonComponent3.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent3 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template._ViewDropdownButtonComponent3.new(parentView, parentIndex);
  };
  dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent3, AppViewAndintToAppViewOfDropdownButtonComponent());
  dart.defineLazy(material_select__dropdown_button$46template, {
    /*material_select__dropdown_button$46template.styles$DropdownButtonComponentHost*/get styles$DropdownButtonComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _DropdownButtonComponent_0_5 = Symbol('_DropdownButtonComponent_0_5');
  material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0 = class _ViewDropdownButtonComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DropdownButtonComponent_0_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
      this[_compView_0].create(this[_DropdownButtonComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDropdownButtonComponent()).new(0, this, this.rootEl, this[_DropdownButtonComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_select__dropdown_button.DropdownButtonComponent) && 0 === nodeIndex) {
        return this[_DropdownButtonComponent_0_5];
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
  (material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DropdownButtonComponent_0_5] = null;
    material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0);
  dart.setMethodSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_0_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent)
  }));
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponentHost0 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_select__dropdown_button$46template, {
    /*material_select__dropdown_button$46template.DropdownButtonComponentNgFactory*/get DropdownButtonComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDropdownButtonComponent()).new('dropdown-button', material_select__dropdown_button$46template.viewFactory_DropdownButtonComponentHost0, material_select__dropdown_button$46template._DropdownButtonComponentMetadata));
    },
    /*material_select__dropdown_button$46template._DropdownButtonComponentMetadata*/get _DropdownButtonComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_select__dropdown_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__dropdown_button$46template.initReflector = function() {
    if (dart.test(material_select__dropdown_button$46template._visited)) {
      return;
    }
    material_select__dropdown_button$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__dropdown_button.DropdownButtonComponent), material_select__dropdown_button$46template.DropdownButtonComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    glyph__glyph$46template.initReflector();
    mixins__button_wrapper$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
  };
  dart.fn(material_select__dropdown_button$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_select/dropdown_button.template.ddc", {
    "package:angular_components/material_select/dropdown_button.template.dart": material_select__dropdown_button$46template
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_button.template.dart"],"names":[],"mappings":"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","file":"dropdown_button.template.ddc.js"}');
  // Exports:
  return {
    material_select__dropdown_button$46template: material_select__dropdown_button$46template
  };
});

//# sourceMappingURL=dropdown_button.template.ddc.js.map
