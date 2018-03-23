define(['dart_sdk', 'packages/angular_components/material_menu/menu_item_affix_list.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_menu/menu_item_affix_list', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/model/menu/menu_item_affix', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_menu/menu_root', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/material_menu/menu_root.template', 'packages/angular_components/model/menu/menu_item_affix.template', 'packages/angular_components/model/ui/icon.template'], function(dart_sdk, menu_item_affix_list$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_if, menu_item_affix_list, ng_for, menu_item_affix, material_icon, button_decorator, button_decorator$, material_icon$, menu_root, reflector, angular, menu_root$, menu_item_affix$, icon) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_menu__menu_item_affix_list$46scss$46css$46shim = menu_item_affix_list$46scss$46css.material_menu__menu_item_affix_list$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_menu__menu_item_affix_list = menu_item_affix_list.material_menu__menu_item_affix_list;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const model__menu__menu_item_affix = menu_item_affix.model__menu__menu_item_affix;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const material_menu__menu_root = menu_root.material_menu__menu_root;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const material_menu__menu_root$46template = menu_root$.material_menu__menu_root$46template;
  const model__menu__menu_item_affix$46template = menu_item_affix$.model__menu__menu_item_affix$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const _root = Object.create(null);
  const material_menu__menu_item_affix_list$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $_get = dartx._get;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMenuItemAffixListComponent = () => (AppViewOfMenuItemAffixListComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent)))();
  let AppViewAndintToAppViewOfMenuItemAffixListComponent = () => (AppViewAndintToAppViewOfMenuItemAffixListComponent = dart.constFn(dart.fnType(AppViewOfMenuItemAffixListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMenuItemAffixListComponent = () => (ComponentRefOfMenuItemAffixListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMenuItemAffixListComponent = () => (ComponentFactoryOfMenuItemAffixListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__menu_item_affix_list.MenuItemAffixListComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_menu__menu_item_affix_list$46template, {
    /*material_menu__menu_item_affix_list$46template.styles$MenuItemAffixListComponent*/get styles$MenuItemAffixListComponent() {
      return dart.constList([material_menu__menu_item_affix_list$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  let const$;
  material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0 = class ViewMenuItemAffixListComponent0 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('\n');
      parentRenderNode[$append](_text_0);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent1);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = html.Text.new('\n');
      parentRenderNode[$append](_text_2);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.hasAffixes;
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('menu-item-affix-list'));
    let t = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType;
    t == null ? material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_menu__menu_item_affix_list$46template.styles$MenuItemAffixListComponent) : t;
    this.setupComponentType(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType);
  }).prototype = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, {
    /*material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent0 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent0, AppViewAndintToAppViewOfMenuItemAffixListComponent());
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  const _expr_0 = Symbol('_expr_0');
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1 = class _ViewMenuItemAffixListComponent1 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      let _text_0 = html.Text.new('\n  ');
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent2);
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = html.Text.new('\n');
      this.init([_text_0, this[_appEl_1], _text_2], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.affixes;
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
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType;
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent1 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent1, AppViewAndintToAppViewOfMenuItemAffixListComponent());
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2 = class _ViewMenuItemAffixListComponent2 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      let _text_0 = html.Text.new('\n    ');
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent3);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = html.Text.new('\n  ');
      this.init([_text_0, this[_appEl_1], _text_2], null);
      return null;
    }
    detectChangesInternal() {
      let local_affix = model__menu__menu_item_affix.MenuItemAffix._check(this.locals[$_get]('$implicit'));
      this[_NgIf_1_9].ngIf = local_affix.isVisible;
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType;
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent2 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent2, AppViewAndintToAppViewOfMenuItemAffixListComponent());
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3 = class _ViewMenuItemAffixListComponent3 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      let _text_0 = html.Text.new('\n      ');
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent4);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = html.Text.new('\n      ');
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent5);
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = html.Text.new('\n    ');
      this.init([_text_0, this[_appEl_1], _text_2, this[_appEl_3], _text_4], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_affix = model__menu__menu_item_affix.MenuItemAffix._check(this.parentView.locals[$_get]('$implicit'));
      this[_NgIf_1_9].ngIf = _ctx.isIconAffix(local_affix);
      this[_NgIf_3_9].ngIf = _ctx.isCaptionAffix(local_affix);
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType;
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent3 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent3.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent3, AppViewAndintToAppViewOfMenuItemAffixListComponent());
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _MaterialIconComponent_0_6 = Symbol('_MaterialIconComponent_0_6');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4 = class _ViewMenuItemAffixListComponent4 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'baseline', '');
      this.createAttr(this[_el_0], 'buttonDecorator', '');
      this[_el_0].className = 'material-list-item-primary secondary-icon';
      this.createAttr(this[_el_0], 'role', 'button');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0]));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      let _text_1 = html.Text.new('\n      ');
      this[_compView_0].create(this[_MaterialIconComponent_0_6], []);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_affix = model__menu__menu_item_affix.MenuItemAffix._check(this.parentView.parentView.locals[$_get]('$implicit'));
      let currVal_4 = !dart.test(_ctx.isActionIconAffix(local_affix));
      if (!(this[_expr_4] === currVal_4)) {
        this[_ButtonDirective_0_5].instance.disabled = currVal_4;
        this[_expr_4] = currVal_4;
      }
      changed = false;
      let currVal_5 = _ctx.getIcon(local_affix);
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_MaterialIconComponent_0_6].icon = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this.updateElemClass(this[_el_0], 'action-icon', false);
      }
      let currVal_0 = _ctx.getActionIconAriaLabel(_ctx.getIcon(local_affix));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this[_el_0], 'aria-label', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_2 = !dart.test(_ctx.isActionIconAffix(local_affix));
      if (!(this[_expr_2] === currVal_2)) {
        this.updateElemClass(this[_el_0], 'disabled', currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_affix.isVisibleOnHover;
      if (!(this[_expr_3] == currVal_3)) {
        this.updateElemClass(this[_el_0], 'hover-icon', currVal_3);
        this[_expr_3] = currVal_3;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_affix = model__menu__menu_item_affix.MenuItemAffix._check(this.parentView.parentView.locals[$_get]('$implicit'));
      this.ctx.handleActionIconTrigger(this.ctx.getIcon(local_affix), html.Event._check($event));
    }
  };
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType;
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent4 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent4.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent4, AppViewAndintToAppViewOfMenuItemAffixListComponent());
  const _text_2 = Symbol('_text_2');
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5 = class _ViewMenuItemAffixListComponent5 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'material-list-item-primary caption-text';
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('\n        ');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      let _text_3 = html.Text.new('\n      ');
      this[_el_0][$append](_text_3);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_affix = model__menu__menu_item_affix.MenuItemAffix._check(this.parentView.parentView.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.getText(local_affix));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._renderType;
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent5 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent5.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent5, AppViewAndintToAppViewOfMenuItemAffixListComponent());
  dart.defineLazy(material_menu__menu_item_affix_list$46template, {
    /*material_menu__menu_item_affix_list$46template.styles$MenuItemAffixListComponentHost*/get styles$MenuItemAffixListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MenuItemAffixListComponent_0_5 = Symbol('_MenuItemAffixListComponent_0_5');
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0 = class _ViewMenuItemAffixListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MenuItemAffixListComponent_0_5] = new material_menu__menu_item_affix_list.MenuItemAffixListComponent.new(this[_compView_0].ref, material_menu__menu_root.MenuRoot._check(this.injectorGet(dart.wrapType(material_menu__menu_root.MenuRoot), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MenuItemAffixListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMenuItemAffixListComponent()).new(0, this, this.rootEl, this[_MenuItemAffixListComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_menu__menu_item_affix_list.MenuItemAffixListComponent) && 0 === nodeIndex) {
        return this[_MenuItemAffixListComponent_0_5];
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
      this[_MenuItemAffixListComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MenuItemAffixListComponent_0_5] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0),
    [_MenuItemAffixListComponent_0_5]: dart.fieldType(material_menu__menu_item_affix_list.MenuItemAffixListComponent)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_menu__menu_item_affix_list$46template, {
    /*material_menu__menu_item_affix_list$46template.MenuItemAffixListComponentNgFactory*/get MenuItemAffixListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMenuItemAffixListComponent()).new('menu-item-affix-list', material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponentHost0, material_menu__menu_item_affix_list$46template._MenuItemAffixListComponentMetadata));
    },
    /*material_menu__menu_item_affix_list$46template._MenuItemAffixListComponentMetadata*/get _MenuItemAffixListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_menu__menu_item_affix_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__menu_item_affix_list$46template.initReflector = function() {
    if (dart.test(material_menu__menu_item_affix_list$46template._visited)) {
      return;
    }
    material_menu__menu_item_affix_list$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__menu_item_affix_list.MenuItemAffixListComponent), material_menu__menu_item_affix_list$46template.MenuItemAffixListComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_menu__menu_root$46template.initReflector();
    model__menu__menu_item_affix$46template.initReflector();
    model__ui__icon$46template.initReflector();
  };
  dart.fn(material_menu__menu_item_affix_list$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_menu/menu_item_affix_list.template.ddc", {
    "package:angular_components/material_menu/menu_item_affix_list.template.dart": material_menu__menu_item_affix_list$46template
  }, '{"version":3,"sourceRoot":"","sources":["menu_item_affix_list.template.dart"],"names":[],"mappings":";;;;QA8Tc,IAAO;;;QAnR0C,uDAAO;;;;QAQlD,iCAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MARP,gFAAiC;YAAG,iBAAO,AAAQ,uDAAD,OAAO;;;;;;;;AAazE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAa,UAAU,AAAI,AAoQjB,IAAO,SApQsB,CAAC;AACxC,sBAAgB,SAAO,CAAC,OAAO;AAC/B,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,sBAAgB,SAAO,CAAC,SAAS;AACjC,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACrD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,sFAAuC;AAChG,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,UAAa,UAAU,AAAI,AA6PjB,IAAO,SA7PsB,CAAC;AACxC,sBAAgB,SAAO,CAAC,OAAO;AAC/B,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAyC,OAAO,QAAG;AACnD,qBAAS,KAAK,GAAG,IAAI,WAAW;AAChC,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;IACV;;iGAhCgC,UAA2B,EAAE,WAAe;IAH9D,cAAQ;IACjB,eAAS;AAEkE,4GAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AAC9K,eAAM,GAAG,AA4QC,IAAO,oBA5QR,AAAQ,AA4QP,IAAO,SA5QQ,gBAAc,CAAC;AACxC,sGAAW;gBAAX,0FAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,gFAAiC;AACvH,2BAAkB,CAAC,0FAAW;EAChC;;;;;;;;;;;;;;MAL2B,0FAAW;;;;;oGAoC4C,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,kFAA+B,CAAC,UAAU,EAAE,WAAW;EACpE;;;;;;AAWI,UAAa,UAAU,AAAI,AA6NjB,IAAO,SA7NsB,CAAC;AACxC,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACrD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,sFAAuC;AAChG,sBAAU,GAAG,IAAI,yCAAc,CAAC,cAAQ,EAAE,gBAAgB;AAC1D,UAAa,UAAU,AAAI,AAwNjB,IAAO,SAxNsB,CAAC;AACxC,eAAI,CAAC,CAAC,OAAO,EAAE,cAAQ,EAAE,OAAO,GAAG;AACnC,YAAO;IACT;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAAM,YAAY,IAAI,QAAQ;AAC9B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,sBAAU,UAAU;AACpB,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;IACV;;kGA9BiC,UAA2B,EAAE,WAAe;IAH/D,cAAQ;IACP,gBAAU;IACrB,aAAO;AACsE,6GAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,sBAAa,GAAG,8EAA+B,YAAY;EAC7D;;;;;;;;;;;;;;oGA+BkF,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,mFAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;AAUI,UAAa,UAAU,AAAI,AAqLjB,IAAO,SArLsB,CAAC;AACxC,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACrD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,sFAAuC;AAChG,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,UAAa,UAAU,AAAI,AAgLjB,IAAO,SAhLsB,CAAC;AACxC,eAAI,CAAC,CAAC,OAAO,EAAE,cAAQ,EAAE,OAAO,GAAG;AACnC,YAAO;IACT;;AAIE,UAA6B,gEAAc,WAAM,QAAC;AAClD,qBAAS,KAAK,GAAG,WAAW,UAAU;AACtC,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;IACV;;kGAzBiC,UAA2B,EAAE,WAAe;IAF/D,cAAQ;IACjB,eAAS;AACmE,6GAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAClM,sBAAa,GAAG,8EAA+B,YAAY;EAC7D;;;;;;;;;;;;;oGA0BkF,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,mFAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;;;AAYI,UAAa,UAAU,AAAI,AAgJjB,IAAO,SAhJsB,CAAC;AACxC,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACrD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,sFAAuC;AAChG,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,UAAa,UAAU,AAAI,AA2IjB,IAAO,SA3IsB,CAAC;AACxC,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACrD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,sFAAuC;AAChG,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,UAAa,UAAU,AAAI,AAsIjB,IAAO,SAtIsB,CAAC;AACxC,eAAI,CAAC,CAAC,OAAO,EAAE,cAAQ,EAAE,OAAO,EAAE,cAAQ,EAAE,OAAO,GAAG;AACtD,YAAO;IACT;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAA6B,gEAAc,eAAU,OAAO,QAAC;AAC7D,qBAAS,KAAK,GAAG,IAAI,YAAY,CAAC,WAAW;AAC7C,qBAAS,KAAK,GAAG,IAAI,eAAe,CAAC,WAAW;AAChD,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;AACR,6BAAQ;;IACV;;kGAlCiC,UAA2B,EAAE,WAAe;IAJ/D,cAAQ;IACjB,eAAS;IACA,cAAQ;IACjB,eAAS;AACmE,6GAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,sBAAa,GAAG,8EAA+B,YAAY;EAC7D;;;;;;;;;;;;;;;oGAmCkF,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,mFAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;;;;;;;;;;AAiBI,uBAAW,GAAG,IAAI,sEAAmC,CAAC,MAAM;AAC5D,iBAAK,GAAG,iBAAW,OAAO;AAC1B,qBAAU,CAAC,WAAK,EAAE,YAAY;AAC9B,qBAAU,CAAC,WAAK,EAAE,mBAAmB;AACrC,iBAAK,UAAU,GAAG;AAClB,qBAAU,CAAC,WAAK,EAAE,QAAQ;AAC1B,mBAAQ,CAAC,AAuFC,IAAO,oBAvFR,WAAK;AACd,gCAAoB,GAAG,IAAI,qEAA4B,CAAC,IAAI,sDAAwB,CAAC,WAAK;AAC1F,sCAA0B,GAAG,IAAI,sDAA8B,CAAC,AAqFtD,IAAO,oBArF+C,WAAK;AACrE,UAAa,UAAU,AAAI,AAoFjB,IAAO,SApFsB,CAAC;AACxC,uBAAW,OAAO,CAAC,gCAA0B,EAAE;AAC/C,iBAAK,mBAAiB,CAAC,SAAS,kBAAa,CAkFnC,IAAO,QAAP,IAAO,uBAlF6B,0BAAoB,SAAS;AAC3E,iBAAK,mBAAiB,CAAC,YAAY,kBAAa,CAiFtC,IAAO,QAAP,IAAO,0BAjFgC,0BAAoB,SAAS;AAC9E,UAAM,iBAAiB,0BAAoB,SAAS,QAAQ,OAAO,CAAC,kBAAa,CAgFvE,IAAO,UAAP,IAAO,UAhFiE,oCAAmB;AACrG,eAAI,CAAC,CAAC,WAAK,GAAG,CAAC,cAAc;AAC7B,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAW,iEAAe,IAAO,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI,GAAM;AAC1F,cAAO,2BAAoB,SAAS;;AAEtC,YAAO,eAAc;IACvB;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,UAA6B,gEAAc,eAAU,WAAW,OAAO,QAAC;AACxE,UAAW,YAAY,WAAC,IAAI,kBAAkB,CAAC,WAAW;AAC1D,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,kCAAoB,SAAS,SAAS,GAAG,SAAS;AAClD,qBAAO,GAAG,SAAS;;AAErB,aAAO,GAAG;AACV,UAAM,YAAY,IAAI,QAAQ,CAAC,WAAW;AAC1C,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wCAA0B,KAAK,GAAG,SAAS;AAC3C,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,UAAI,UAAU,EAAE;AACd,4BAAe,CAAC,WAAK,EAAE,eAAe;;AAExC,UAAM,YAAY,IAAI,uBAAuB,CAAC,IAAI,QAAQ,CAAC,WAAW;AACtE,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,oBAAO,CAAC,WAAK,EAAE,cAAc,SAAS,gCAAT,SAAS;AACtC,qBAAO,GAAG,SAAS;;AAErB,UAAW,YAAY,WAAC,IAAI,kBAAkB,CAAC,WAAW;AAC1D,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,WAAK,EAAE,YAAY,SAAS;AAC5C,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,WAAW,iBAAiB;AAC9C,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,WAAK,EAAE,cAAc,SAAS;AAC9C,qBAAO,GAAG,SAAS;;AAErB,gCAAoB,kBAAkB,CAAC,iBAAW,EAAE,WAAK;AACzD,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;0BAEyB,MAAM;AAC7B,UAA6B,gEAAc,eAAU,WAAW,OAAO,QAAC;AACxE,cAAG,wBAAwB,CAAC,QAAG,QAAQ,CAAC,WAAW,GAAG,AAiB5C,IAAO,cAjBqC,MAAM;IAC9D;;kGAlFiC,UAA2B,EAAE,WAAe;IAT7D,WAAK;IACe,iBAAW;IAClB,0BAAoB;IAClB,gCAA0B;IACrD,aAAO;IACN,aAAO;IACP,aAAO;IACP,aAAO;IACR,aAAO;AACsE,6GAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,sBAAa,GAAG,8EAA+B,YAAY;EAC7D;;;;;;;;;;;;4BAgGY,IAAO;;;;;;;;;;oGAb+D,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,mFAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;;AAWI,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,UAAa,UAJH,AAIa,AAAI,IAJV,SAIsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GANG,AAMA,AAAI,IANG,SAMS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,UAAa,UARH,AAQa,AAAI,IARV,SAQsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAA6B,gEAAc,eAAU,WAAW,OAAO,QAAC;AACxE,UAAM,YA7RU,AA6RE,AAAQ,iCA7RH,aA6Re,CAAC,IAAI,QAAQ,CAAC,WAAW;AAC/D,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;kGA5BiC,UAA2B,EAAE,WAAe;IAH7D,WAAK;IACR,aAAO;IAChB,aAAO;AACsE,6GAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,sBAAa,GAAG,8EAA+B,YAAY;EAC7D;;;;;;;;;4BAGY,IAAO;8BAAP,IAAO;;;oGA0B+D,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,mFAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;MAEoB,oFAAqC;YAAG;;;;;;AAQxD,uBAAW,GAAG,IAAI,kFAA+B,CAAC,MAAM;AACxD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,2CAA+B,GAAG,IAAI,kEAAkC,CAAC,iBAAW,IAAI,2CAAE,gBAAgB,CAAU,gDAAQ,EAAE,aAAQ,YAAY,EAAE;AACpJ,uBAAW,OAAO,CAAC,qCAA+B,EAAE,qBAAgB;AACpE,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,gDAAgD,CAAC,GAAG,MAAM,WAAM,EAAE,qCAA+B;IAC9G;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAU,6EAA0B,IAAM,MAAK,SAAS,EAAI;AAC9E,cAAO,sCAA+B;;AAExC,YAAO,eAAc;IACvB;;AAIE,UAAK,UAAU;AACf,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;AACX,2CAA+B,YAAY;IAC7C;;sGAhCqC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,qCAA+B;AACmB,iHAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;wGAmCjI,UAA2B,EAAE,WAAe;AAC9F,UAAO,KAAI,uFAAoC,CAAC,UAAU,EAAE,WAAW;EACzE;;;MAE2D,kFAAmC;YAAG,gBAAM,oDAAoD,CAAC,wBAAwB,0FAA2C,EAAE,kFAAmC;;MAC9P,kFAAmC;YAAG;;MACxC,uDAAQ;YAAG;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAO,oCAAiB,CAAC,6EAA0B,EAAE,kFAAmC;AACxF,IAAM,gCAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,qDAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,qDAAa;AACnB,IAAM,wCAAa;EACrB","file":"menu_item_affix_list.template.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_item_affix_list$46template: material_menu__menu_item_affix_list$46template
  };
});

//# sourceMappingURL=menu_item_affix_list.template.ddc.js.map
