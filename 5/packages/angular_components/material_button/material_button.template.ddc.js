define(['dart_sdk', 'packages/angular_components/material_button/material_button.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_button/material_button', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/src/di/reflector', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular/angular.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/theme/dark_theme.template'], function(dart_sdk, material_button$46scss$46css, view_type, constants, view, app_view_utils, app_view, material_ripple, material_ripple$, material_button, opaque_token, dark_theme, button_decorator, reflector, material_button_base, angular, button_decorator$, dark_theme$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button__material_button$46scss$46css$46shim = material_button$46scss$46css.material_button__material_button$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const material_button__material_button = material_button.material_button__material_button;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const src__di__reflector = reflector.src__di__reflector;
  const material_button__material_button_base$46template = material_button_base.material_button__material_button_base$46template;
  const angular$46template = angular.angular$46template;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const theme__dark_theme$46template = dark_theme$.theme__dark_theme$46template;
  const _root = Object.create(null);
  const material_button__material_button$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialButtonComponent = () => (AppViewOfMaterialButtonComponent = dart.constFn(src__core__linker__app_view.AppView$(material_button__material_button.MaterialButtonComponent)))();
  let AppViewAndintToAppViewOfMaterialButtonComponent = () => (AppViewAndintToAppViewOfMaterialButtonComponent = dart.constFn(dart.fnType(AppViewOfMaterialButtonComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialButtonComponent = () => (ComponentRefOfMaterialButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_button__material_button.MaterialButtonComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialButtonComponent = () => (ComponentFactoryOfMaterialButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_button__material_button.MaterialButtonComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_button__material_button$46template, {
    /*material_button__material_button$46template.styles$MaterialButtonComponent*/get styles$MaterialButtonComponent() {
      return dart.constList([material_button__material_button$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialRippleComponent_1_5 = Symbol('_MaterialRippleComponent_1_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  let const$;
  material_button__material_button$46template.ViewMaterialButtonComponent0 = class ViewMaterialButtonComponent0 extends src__core__linker__app_view.AppView$(material_button__material_button.MaterialButtonComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'content';
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 0);
      this[_compView_1] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialRippleComponent_1_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_MaterialRippleComponent_1_5], []);
      this[_el_1][$addEventListener]('mousedown', this.eventHandler1(html.Event, html.Event, dart.bind(this.ctx, 'onMouseDown')));
      this[_el_1][$addEventListener]('mouseup', this.eventHandler1(html.Event, html.Event, dart.bind(this.ctx, 'onMouseUp')));
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
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
      this[_MaterialRippleComponent_1_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let currVal_0 = this.ctx.tabIndex;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setProp(this.rootEl, 'tabIndex', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.ctx.disabledStr;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this.rootEl, 'aria-disabled', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.ctx.disabled;
      if (!(this[_expr_2] == currVal_2)) {
        this.updateElemClass(this.rootEl, 'is-disabled', currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = dart.test(this.ctx.disabled) ? '' : null;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this.setAttr(this.rootEl, 'disabled', currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = dart.test(this.ctx.raised) ? '' : null;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this.setAttr(this.rootEl, 'raised', currVal_4 == null ? null : dart.toString(currVal_4));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = this.ctx.visualFocus;
      if (!(this[_expr_5] == currVal_5)) {
        this.updateElemClass(this.rootEl, 'is-focused', currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = this.ctx.zElevation;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this.setAttr(this.rootEl, 'elevation', currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
    }
  };
  (material_button__material_button$46template.ViewMaterialButtonComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialRippleComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_button__material_button$46template.ViewMaterialButtonComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-button'));
    this.createAttr(this.rootEl, 'role', 'button');
    this.createAttr(this.rootEl, 'animated', 'true');
    let t = material_button__material_button$46template.ViewMaterialButtonComponent0._renderType;
    t == null ? material_button__material_button$46template.ViewMaterialButtonComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_button__material_button$46template.styles$MaterialButtonComponent) : t;
    this.setupComponentType(material_button__material_button$46template.ViewMaterialButtonComponent0._renderType);
  }).prototype = material_button__material_button$46template.ViewMaterialButtonComponent0.prototype;
  dart.addTypeTests(material_button__material_button$46template.ViewMaterialButtonComponent0);
  dart.setMethodSignature(material_button__material_button$46template.ViewMaterialButtonComponent0, () => ({
    __proto__: dart.getMethods(material_button__material_button$46template.ViewMaterialButtonComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_button__material_button.MaterialButtonComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_button__material_button$46template.ViewMaterialButtonComponent0, () => ({
    __proto__: dart.getFields(material_button__material_button$46template.ViewMaterialButtonComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_1_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_button__material_button$46template.ViewMaterialButtonComponent0, {
    /*material_button__material_button$46template.ViewMaterialButtonComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_button__material_button$46template.viewFactory_MaterialButtonComponent0 = function(parentView, parentIndex) {
    return new material_button__material_button$46template.ViewMaterialButtonComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_button__material_button$46template.viewFactory_MaterialButtonComponent0, AppViewAndintToAppViewOfMaterialButtonComponent());
  dart.defineLazy(material_button__material_button$46template, {
    /*material_button__material_button$46template.styles$MaterialButtonComponentHost*/get styles$MaterialButtonComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _MaterialButtonComponent_0_6 = Symbol('_MaterialButtonComponent_0_6');
  let const$0;
  material_button__material_button$46template._ViewMaterialButtonComponentHost0 = class _ViewMaterialButtonComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AcxDarkTheme_0_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('acxDarkTheme'))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(this.rootEl, this[_AcxDarkTheme_0_5], this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialButtonComponent()).new(0, this, this.rootEl, this[_MaterialButtonComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 === nodeIndex) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective)) && 0 === nodeIndex) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_button__material_button$46template._ViewMaterialButtonComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    material_button__material_button$46template._ViewMaterialButtonComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_button__material_button$46template._ViewMaterialButtonComponentHost0.prototype;
  dart.addTypeTests(material_button__material_button$46template._ViewMaterialButtonComponentHost0);
  dart.setMethodSignature(material_button__material_button$46template._ViewMaterialButtonComponentHost0, () => ({
    __proto__: dart.getMethods(material_button__material_button$46template._ViewMaterialButtonComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_button__material_button$46template._ViewMaterialButtonComponentHost0, () => ({
    __proto__: dart.getFields(material_button__material_button$46template._ViewMaterialButtonComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent)
  }));
  material_button__material_button$46template.viewFactory_MaterialButtonComponentHost0 = function(parentView, parentIndex) {
    return new material_button__material_button$46template._ViewMaterialButtonComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_button__material_button$46template.viewFactory_MaterialButtonComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_button__material_button$46template, {
    /*material_button__material_button$46template.MaterialButtonComponentNgFactory*/get MaterialButtonComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialButtonComponent()).new('material-button', material_button__material_button$46template.viewFactory_MaterialButtonComponentHost0, material_button__material_button$46template._MaterialButtonComponentMetadata));
    },
    /*material_button__material_button$46template._MaterialButtonComponentMetadata*/get _MaterialButtonComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_button__material_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_button__material_button$46template.initReflector = function() {
    if (dart.test(material_button__material_button$46template._visited)) {
      return;
    }
    material_button__material_button$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_button__material_button.MaterialButtonComponent), material_button__material_button$46template.MaterialButtonComponentNgFactory);
    material_button__material_button_base$46template.initReflector();
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    theme__dark_theme$46template.initReflector();
  };
  dart.fn(material_button__material_button$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_button/material_button.template.ddc", {
    "package:angular_components/material_button/material_button.template.dart": material_button__material_button$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_button.template.dart"],"names":[],"mappings":"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","file":"material_button.template.ddc.js"}');
  // Exports:
  return {
    material_button__material_button$46template: material_button__material_button$46template
  };
});

//# sourceMappingURL=material_button.template.ddc.js.map
