define(['dart_sdk', 'packages/angular_components/app_layout/material_temporary_drawer.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/app_layout/material_temporary_drawer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/src/di/reflector', 'packages/angular_components/app_layout/material_drawer_base.template', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template'], function(dart_sdk, material_temporary_drawer$46scss$46css, view_type, constants, view, app_view_utils, app_view, material_temporary_drawer, deferred_content_aware, reflector, material_drawer_base, angular, deferred_content_aware$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_layout__material_temporary_drawer$46scss$46css$46shim = material_temporary_drawer$46scss$46css.app_layout__material_temporary_drawer$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const app_layout__material_temporary_drawer = material_temporary_drawer.app_layout__material_temporary_drawer;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__di__reflector = reflector.src__di__reflector;
  const app_layout__material_drawer_base$46template = material_drawer_base.app_layout__material_drawer_base$46template;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const _root = Object.create(null);
  const app_layout__material_temporary_drawer$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialTemporaryDrawerComponent = () => (AppViewOfMaterialTemporaryDrawerComponent = dart.constFn(src__core__linker__app_view.AppView$(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent)))();
  let AppViewAndintToAppViewOfMaterialTemporaryDrawerComponent = () => (AppViewAndintToAppViewOfMaterialTemporaryDrawerComponent = dart.constFn(dart.fnType(AppViewOfMaterialTemporaryDrawerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTemporaryDrawerComponent = () => (ComponentRefOfMaterialTemporaryDrawerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTemporaryDrawerComponent = () => (ComponentFactoryOfMaterialTemporaryDrawerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(app_layout__material_temporary_drawer$46template, {
    /*app_layout__material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponent*/get styles$MaterialTemporaryDrawerComponent() {
      return dart.constList([app_layout__material_temporary_drawer$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  let const$;
  app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0 = class ViewMaterialTemporaryDrawerComponent0 extends src__core__linker__app_view.AppView$(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'drawer-content';
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 0);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(_ctx, 'toggle')));
      return null;
    }
    [_handle_click_0_0]($event) {
      dart.dsend($event, 'stopPropagation');
    }
    detectHostChanges(firstCheck) {
      let currVal_0 = !dart.test(this.ctx.visible);
      if (!(this[_expr_0] === currVal_0)) {
        this.updateElemClass(this.rootEl, 'mat-drawer-collapsed', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.ctx.visible;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateElemClass(this.rootEl, 'mat-drawer-expanded', currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-drawer'));
    let t = app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._renderType;
    t == null ? app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, app_layout__material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponent) : t;
    this.setupComponentType(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._renderType);
  }).prototype = app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.prototype;
  dart.addTypeTests(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0);
  dart.setMethodSignature(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, () => ({
    __proto__: dart.getMethods(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent), []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, () => ({
    __proto__: dart.getFields(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, {
    /*app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_layout__material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponent0 = function(parentView, parentIndex) {
    return new app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new(parentView, parentIndex);
  };
  dart.fn(app_layout__material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponent0, AppViewAndintToAppViewOfMaterialTemporaryDrawerComponent());
  dart.defineLazy(app_layout__material_temporary_drawer$46template, {
    /*app_layout__material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponentHost*/get styles$MaterialTemporaryDrawerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialTemporaryDrawerComponent_0_5 = Symbol('_MaterialTemporaryDrawerComponent_0_5');
  app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0 = class _ViewMaterialTemporaryDrawerComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTemporaryDrawerComponent_0_5] = new app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent.new();
      this[_compView_0].create(this[_MaterialTemporaryDrawerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTemporaryDrawerComponent()).new(0, this, this.rootEl, this[_MaterialTemporaryDrawerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 0 === nodeIndex) {
        return this[_MaterialTemporaryDrawerComponent_0_5];
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
        this[_MaterialTemporaryDrawerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTemporaryDrawerComponent_0_5] = null;
    app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.prototype;
  dart.addTypeTests(app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0);
  dart.setMethodSignature(app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0, () => ({
    __proto__: dart.getMethods(app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0, () => ({
    __proto__: dart.getFields(app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0),
    [_MaterialTemporaryDrawerComponent_0_5]: dart.fieldType(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent)
  }));
  app_layout__material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponentHost0 = function(parentView, parentIndex) {
    return new app_layout__material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(app_layout__material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(app_layout__material_temporary_drawer$46template, {
    /*app_layout__material_temporary_drawer$46template.MaterialTemporaryDrawerComponentNgFactory*/get MaterialTemporaryDrawerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTemporaryDrawerComponent()).new('material-drawer[temporary]', app_layout__material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponentHost0, app_layout__material_temporary_drawer$46template._MaterialTemporaryDrawerComponentMetadata));
    },
    /*app_layout__material_temporary_drawer$46template._MaterialTemporaryDrawerComponentMetadata*/get _MaterialTemporaryDrawerComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*app_layout__material_temporary_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_layout__material_temporary_drawer$46template.initReflector = function() {
    if (dart.test(app_layout__material_temporary_drawer$46template._visited)) {
      return;
    }
    app_layout__material_temporary_drawer$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent), app_layout__material_temporary_drawer$46template.MaterialTemporaryDrawerComponentNgFactory);
    app_layout__material_drawer_base$46template.initReflector();
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
  };
  dart.fn(app_layout__material_temporary_drawer$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/app_layout/material_temporary_drawer.template.ddc", {
    "package:angular_components/app_layout/material_temporary_drawer.template.dart": app_layout__material_temporary_drawer$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_temporary_drawer.template.dart"],"names":[],"mappings":"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","file":"material_temporary_drawer.template.ddc.js"}');
  // Exports:
  return {
    app_layout__material_temporary_drawer$46template: app_layout__material_temporary_drawer$46template
  };
});

//# sourceMappingURL=material_temporary_drawer.template.ddc.js.map
