define(['dart_sdk', 'packages/angular_components/material_tab/tab_button.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_tab/tab_button', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular_components/material_tab/tab_mixin.template'], function(dart_sdk, tab_button$46scss$46css, view_type, constants, view, app_view_utils, app_view, material_ripple, material_ripple$, tab_button, reflector, angular, material_button_base, tab_mixin) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tab__tab_button$46scss$46css$46shim = tab_button$46scss$46css.material_tab__tab_button$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const material_tab__tab_button = tab_button.material_tab__tab_button;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const material_button__material_button_base$46template = material_button_base.material_button__material_button_base$46template;
  const material_tab__tab_mixin$46template = tab_mixin.material_tab__tab_mixin$46template;
  const _root = Object.create(null);
  const material_tab__tab_button$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfTabButtonComponent = () => (AppViewOfTabButtonComponent = dart.constFn(src__core__linker__app_view.AppView$(material_tab__tab_button.TabButtonComponent)))();
  let AppViewAndintToAppViewOfTabButtonComponent = () => (AppViewAndintToAppViewOfTabButtonComponent = dart.constFn(dart.fnType(AppViewOfTabButtonComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfTabButtonComponent = () => (ComponentRefOfTabButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_tab__tab_button.TabButtonComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfTabButtonComponent = () => (ComponentFactoryOfTabButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_tab__tab_button.TabButtonComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_tab__tab_button$46template, {
    /*material_tab__tab_button$46template.styles$TabButtonComponent*/get styles$TabButtonComponent() {
      return dart.constList([material_tab__tab_button$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _MaterialRippleComponent_2_5 = Symbol('_MaterialRippleComponent_2_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  let const$;
  material_tab__tab_button$46template.ViewTabButtonComponent0 = class ViewTabButtonComponent0 extends src__core__linker__app_view.AppView$(material_tab__tab_button.TabButtonComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'content';
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this[_compView_2] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      parentRenderNode[$append](this[_el_2]);
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_MaterialRippleComponent_2_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(html.HtmlElement._check(this[_el_2]));
      this[_compView_2].create(this[_MaterialRippleComponent_2_5], []);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      _rootEl[$addEventListener]('mousedown', this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseDown')));
      _rootEl[$addEventListener]('mouseup', this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseUp')));
      _rootEl[$addEventListener]('focus', this.eventHandler1(html.Event, html.UIEvent, dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]('blur', this.eventHandler1(html.Event, html.UIEvent, dart.bind(_ctx, 'onBlur')));
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.label);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_2];
      t == null ? null : t.destroy();
      this[_MaterialRippleComponent_2_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let currVal_1 = this.ctx.tabIndex;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setProp(this.rootEl, 'tabIndex', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.ctx.disabledStr;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this.setAttr(this.rootEl, 'aria-disabled', currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = this.ctx.disabled;
      if (!(this[_expr_3] == currVal_3)) {
        this.updateElemClass(this.rootEl, 'is-disabled', currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = this.ctx.visualFocus;
      if (!(this[_expr_4] == currVal_4)) {
        this.updateElemClass(this.rootEl, 'focus', currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = dart.test(this.ctx.isActive) || dart.test(this.ctx.isMouseDown);
      if (!(this[_expr_5] === currVal_5)) {
        this.updateElemClass(this.rootEl, 'active', currVal_5);
        this[_expr_5] = currVal_5;
      }
    }
  };
  (material_tab__tab_button$46template.ViewTabButtonComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_MaterialRippleComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_tab__tab_button$46template.ViewTabButtonComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('tab-button'));
    this.createAttr(this.rootEl, 'role', 'tab');
    let t = material_tab__tab_button$46template.ViewTabButtonComponent0._renderType;
    t == null ? material_tab__tab_button$46template.ViewTabButtonComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_tab__tab_button$46template.styles$TabButtonComponent) : t;
    this.setupComponentType(material_tab__tab_button$46template.ViewTabButtonComponent0._renderType);
  }).prototype = material_tab__tab_button$46template.ViewTabButtonComponent0.prototype;
  dart.addTypeTests(material_tab__tab_button$46template.ViewTabButtonComponent0);
  dart.setMethodSignature(material_tab__tab_button$46template.ViewTabButtonComponent0, () => ({
    __proto__: dart.getMethods(material_tab__tab_button$46template.ViewTabButtonComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__tab_button.TabButtonComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_tab__tab_button$46template.ViewTabButtonComponent0, () => ({
    __proto__: dart.getFields(material_tab__tab_button$46template.ViewTabButtonComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_2_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_tab__tab_button$46template.ViewTabButtonComponent0, {
    /*material_tab__tab_button$46template.ViewTabButtonComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_tab__tab_button$46template.viewFactory_TabButtonComponent0 = function(parentView, parentIndex) {
    return new material_tab__tab_button$46template.ViewTabButtonComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_tab__tab_button$46template.viewFactory_TabButtonComponent0, AppViewAndintToAppViewOfTabButtonComponent());
  dart.defineLazy(material_tab__tab_button$46template, {
    /*material_tab__tab_button$46template.styles$TabButtonComponentHost*/get styles$TabButtonComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _TabButtonComponent_0_5 = Symbol('_TabButtonComponent_0_5');
  material_tab__tab_button$46template._ViewTabButtonComponentHost0 = class _ViewTabButtonComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_tab__tab_button$46template.ViewTabButtonComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TabButtonComponent_0_5] = new material_tab__tab_button.TabButtonComponent.new(this.rootEl);
      this[_compView_0].create(this[_TabButtonComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfTabButtonComponent()).new(0, this, this.rootEl, this[_TabButtonComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_tab__tab_button.TabButtonComponent) && 0 === nodeIndex) {
        return this[_TabButtonComponent_0_5];
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
    }
  };
  (material_tab__tab_button$46template._ViewTabButtonComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TabButtonComponent_0_5] = null;
    material_tab__tab_button$46template._ViewTabButtonComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_tab__tab_button$46template._ViewTabButtonComponentHost0.prototype;
  dart.addTypeTests(material_tab__tab_button$46template._ViewTabButtonComponentHost0);
  dart.setMethodSignature(material_tab__tab_button$46template._ViewTabButtonComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab__tab_button$46template._ViewTabButtonComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_tab__tab_button$46template._ViewTabButtonComponentHost0, () => ({
    __proto__: dart.getFields(material_tab__tab_button$46template._ViewTabButtonComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_tab__tab_button$46template.ViewTabButtonComponent0),
    [_TabButtonComponent_0_5]: dart.fieldType(material_tab__tab_button.TabButtonComponent)
  }));
  material_tab__tab_button$46template.viewFactory_TabButtonComponentHost0 = function(parentView, parentIndex) {
    return new material_tab__tab_button$46template._ViewTabButtonComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_tab__tab_button$46template.viewFactory_TabButtonComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_tab__tab_button$46template, {
    /*material_tab__tab_button$46template.TabButtonComponentNgFactory*/get TabButtonComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfTabButtonComponent()).new('tab-button', material_tab__tab_button$46template.viewFactory_TabButtonComponentHost0, material_tab__tab_button$46template._TabButtonComponentMetadata));
    },
    /*material_tab__tab_button$46template._TabButtonComponentMetadata*/get _TabButtonComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_tab__tab_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tab__tab_button$46template.initReflector = function() {
    if (dart.test(material_tab__tab_button$46template._visited)) {
      return;
    }
    material_tab__tab_button$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_tab__tab_button.TabButtonComponent), material_tab__tab_button$46template.TabButtonComponentNgFactory);
    angular$46template.initReflector();
    material_button__material_button_base$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    material_tab__tab_mixin$46template.initReflector();
  };
  dart.fn(material_tab__tab_button$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_tab/tab_button.template.ddc", {
    "package:angular_components/material_tab/tab_button.template.dart": material_tab__tab_button$46template
  }, '{"version":3,"sourceRoot":"","sources":["tab_button.template.dart"],"names":[],"mappings":"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","file":"tab_button.template.ddc.js"}');
  // Exports:
  return {
    material_tab__tab_button$46template: material_tab__tab_button$46template
  };
});

//# sourceMappingURL=tab_button.template.ddc.js.map
