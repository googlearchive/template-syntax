define(['dart_sdk', 'packages/angular_components/material_button/material_fab.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_button/material_fab', 'packages/angular/src/di/reflector', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular/angular.template'], function(dart_sdk, material_fab$46scss$46css, view_type, constants, view, app_view_utils, app_view, material_ripple, material_ripple$, material_fab, reflector, material_button_base, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button__material_fab$46scss$46css$46shim = material_fab$46scss$46css.material_button__material_fab$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const material_button__material_fab = material_fab.material_button__material_fab;
  const src__di__reflector = reflector.src__di__reflector;
  const material_button__material_button_base$46template = material_button_base.material_button__material_button_base$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const material_button__material_fab$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialFabComponent = () => (AppViewOfMaterialFabComponent = dart.constFn(src__core__linker__app_view.AppView$(material_button__material_fab.MaterialFabComponent)))();
  let AppViewAndintToAppViewOfMaterialFabComponent = () => (AppViewAndintToAppViewOfMaterialFabComponent = dart.constFn(dart.fnType(AppViewOfMaterialFabComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialFabComponent = () => (ComponentRefOfMaterialFabComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_button__material_fab.MaterialFabComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialFabComponent = () => (ComponentFactoryOfMaterialFabComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_button__material_fab.MaterialFabComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_button__material_fab$46template, {
    /*material_button__material_fab$46template.styles$MaterialFabComponent*/get styles$MaterialFabComponent() {
      return dart.constList([material_button__material_fab$46scss$46css$46shim.styles], dart.dynamic);
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
  material_button__material_fab$46template.ViewMaterialFabComponent0 = class ViewMaterialFabComponent0 extends src__core__linker__app_view.AppView$(material_button__material_fab.MaterialFabComponent) {
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
      let currVal_6 = this.ctx.isPressed;
      if (!(this[_expr_6] == currVal_6)) {
        this.updateElemClass(this.rootEl, 'is-pressed', currVal_6);
        this[_expr_6] = currVal_6;
      }
    }
  };
  (material_button__material_fab$46template.ViewMaterialFabComponent0.new = function(parentView, parentIndex) {
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
    material_button__material_fab$46template.ViewMaterialFabComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-fab'));
    this.createAttr(this.rootEl, 'role', 'button');
    this.createAttr(this.rootEl, 'animated', 'true');
    let t = material_button__material_fab$46template.ViewMaterialFabComponent0._renderType;
    t == null ? material_button__material_fab$46template.ViewMaterialFabComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_button__material_fab$46template.styles$MaterialFabComponent) : t;
    this.setupComponentType(material_button__material_fab$46template.ViewMaterialFabComponent0._renderType);
  }).prototype = material_button__material_fab$46template.ViewMaterialFabComponent0.prototype;
  dart.addTypeTests(material_button__material_fab$46template.ViewMaterialFabComponent0);
  dart.setMethodSignature(material_button__material_fab$46template.ViewMaterialFabComponent0, () => ({
    __proto__: dart.getMethods(material_button__material_fab$46template.ViewMaterialFabComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_button__material_fab.MaterialFabComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_button__material_fab$46template.ViewMaterialFabComponent0, () => ({
    __proto__: dart.getFields(material_button__material_fab$46template.ViewMaterialFabComponent0.__proto__),
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
    [_expr_6]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_button__material_fab$46template.ViewMaterialFabComponent0, {
    /*material_button__material_fab$46template.ViewMaterialFabComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_button__material_fab$46template.viewFactory_MaterialFabComponent0 = function(parentView, parentIndex) {
    return new material_button__material_fab$46template.ViewMaterialFabComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_button__material_fab$46template.viewFactory_MaterialFabComponent0, AppViewAndintToAppViewOfMaterialFabComponent());
  dart.defineLazy(material_button__material_fab$46template, {
    /*material_button__material_fab$46template.styles$MaterialFabComponentHost*/get styles$MaterialFabComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialFabComponent_0_5 = Symbol('_MaterialFabComponent_0_5');
  material_button__material_fab$46template._ViewMaterialFabComponentHost0 = class _ViewMaterialFabComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialFabComponent_0_5] = new material_button__material_fab.MaterialFabComponent.new(this.rootEl, this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialFabComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialFabComponent()).new(0, this, this.rootEl, this[_MaterialFabComponent_0_5]);
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
  (material_button__material_fab$46template._ViewMaterialFabComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialFabComponent_0_5] = null;
    material_button__material_fab$46template._ViewMaterialFabComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_button__material_fab$46template._ViewMaterialFabComponentHost0.prototype;
  dart.addTypeTests(material_button__material_fab$46template._ViewMaterialFabComponentHost0);
  dart.setMethodSignature(material_button__material_fab$46template._ViewMaterialFabComponentHost0, () => ({
    __proto__: dart.getMethods(material_button__material_fab$46template._ViewMaterialFabComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_button__material_fab$46template._ViewMaterialFabComponentHost0, () => ({
    __proto__: dart.getFields(material_button__material_fab$46template._ViewMaterialFabComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_0_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent)
  }));
  material_button__material_fab$46template.viewFactory_MaterialFabComponentHost0 = function(parentView, parentIndex) {
    return new material_button__material_fab$46template._ViewMaterialFabComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_button__material_fab$46template.viewFactory_MaterialFabComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_button__material_fab$46template, {
    /*material_button__material_fab$46template.MaterialFabComponentNgFactory*/get MaterialFabComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialFabComponent()).new('material-fab', material_button__material_fab$46template.viewFactory_MaterialFabComponentHost0, material_button__material_fab$46template._MaterialFabComponentMetadata));
    },
    /*material_button__material_fab$46template._MaterialFabComponentMetadata*/get _MaterialFabComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_button__material_fab$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_button__material_fab$46template.initReflector = function() {
    if (dart.test(material_button__material_fab$46template._visited)) {
      return;
    }
    material_button__material_fab$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_button__material_fab.MaterialFabComponent), material_button__material_fab$46template.MaterialFabComponentNgFactory);
    material_button__material_button_base$46template.initReflector();
    angular$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
  };
  dart.fn(material_button__material_fab$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_button/material_fab.template.ddc", {
    "package:angular_components/material_button/material_fab.template.dart": material_button__material_fab$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_fab.template.dart"],"names":[],"mappings":"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","file":"material_fab.template.ddc.js"}');
  // Exports:
  return {
    material_button__material_fab$46template: material_button__material_fab$46template
  };
});

//# sourceMappingURL=material_fab.template.ddc.js.map
