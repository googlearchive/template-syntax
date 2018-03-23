define(['dart_sdk', 'packages/angular_components/material_tab/material_tab.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_tab/material_tab', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_tab$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_if, material_tab, id_generator, deferred_content_aware, reflector, angular, deferred_content_aware$, focus, id_generator$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tab__material_tab$46scss$46css$46shim = material_tab$46scss$46css.material_tab__material_tab$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_tab__material_tab = material_tab.material_tab__material_tab;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const utils__id_generator__id_generator$46template = id_generator$.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const material_tab__material_tab$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialTabComponent = () => (AppViewOfMaterialTabComponent = dart.constFn(src__core__linker__app_view.AppView$(material_tab__material_tab.MaterialTabComponent)))();
  let AppViewAndintToAppViewOfMaterialTabComponent = () => (AppViewAndintToAppViewOfMaterialTabComponent = dart.constFn(dart.fnType(AppViewOfMaterialTabComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTabComponent = () => (ComponentRefOfMaterialTabComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab.MaterialTabComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTabComponent = () => (ComponentFactoryOfMaterialTabComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_tab__material_tab.MaterialTabComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_tab__material_tab$46template, {
    /*material_tab__material_tab$46template.styles$MaterialTabComponent*/get styles$MaterialTabComponent() {
      return dart.constList([material_tab__material_tab$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  material_tab__material_tab$46template.ViewMaterialTabComponent0 = class ViewMaterialTabComponent0 extends src__core__linker__app_view.AppView$(material_tab__material_tab.MaterialTabComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], material_tab__material_tab$46template.viewFactory_MaterialTabComponent1);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.active;
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let currVal_1 = this.ctx.panelId;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this.rootEl, 'id', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.ctx.tabId;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this.setAttr(this.rootEl, 'aria-labelledby', currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = this.ctx.active;
      if (!(this[_expr_3] == currVal_3)) {
        this.updateElemClass(this.rootEl, 'material-tab', currVal_3);
        this[_expr_3] = currVal_3;
      }
    }
  };
  (material_tab__material_tab$46template.ViewMaterialTabComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_tab__material_tab$46template.ViewMaterialTabComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-tab'));
    this.createAttr(this.rootEl, 'role', 'tabpanel');
    let t = material_tab__material_tab$46template.ViewMaterialTabComponent0._renderType;
    t == null ? material_tab__material_tab$46template.ViewMaterialTabComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_tab__material_tab$46template.styles$MaterialTabComponent) : t;
    this.setupComponentType(material_tab__material_tab$46template.ViewMaterialTabComponent0._renderType);
  }).prototype = material_tab__material_tab$46template.ViewMaterialTabComponent0.prototype;
  dart.addTypeTests(material_tab__material_tab$46template.ViewMaterialTabComponent0);
  dart.setMethodSignature(material_tab__material_tab$46template.ViewMaterialTabComponent0, () => ({
    __proto__: dart.getMethods(material_tab__material_tab$46template.ViewMaterialTabComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab.MaterialTabComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_tab__material_tab$46template.ViewMaterialTabComponent0, () => ({
    __proto__: dart.getFields(material_tab__material_tab$46template.ViewMaterialTabComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_tab__material_tab$46template.ViewMaterialTabComponent0, {
    /*material_tab__material_tab$46template.ViewMaterialTabComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_tab__material_tab$46template.viewFactory_MaterialTabComponent0 = function(parentView, parentIndex) {
    return new material_tab__material_tab$46template.ViewMaterialTabComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_tab__material_tab$46template.viewFactory_MaterialTabComponent0, AppViewAndintToAppViewOfMaterialTabComponent());
  const _el_0 = Symbol('_el_0');
  material_tab__material_tab$46template._ViewMaterialTabComponent1 = class _ViewMaterialTabComponent1 extends src__core__linker__app_view.AppView$(material_tab__material_tab.MaterialTabComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'tab-content';
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 0);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (material_tab__material_tab$46template._ViewMaterialTabComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    material_tab__material_tab$46template._ViewMaterialTabComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_tab__material_tab$46template.ViewMaterialTabComponent0._renderType;
  }).prototype = material_tab__material_tab$46template._ViewMaterialTabComponent1.prototype;
  dart.addTypeTests(material_tab__material_tab$46template._ViewMaterialTabComponent1);
  dart.setMethodSignature(material_tab__material_tab$46template._ViewMaterialTabComponent1, () => ({
    __proto__: dart.getMethods(material_tab__material_tab$46template._ViewMaterialTabComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab.MaterialTabComponent), [])
  }));
  dart.setFieldSignature(material_tab__material_tab$46template._ViewMaterialTabComponent1, () => ({
    __proto__: dart.getFields(material_tab__material_tab$46template._ViewMaterialTabComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_tab__material_tab$46template.viewFactory_MaterialTabComponent1 = function(parentView, parentIndex) {
    return new material_tab__material_tab$46template._ViewMaterialTabComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_tab__material_tab$46template.viewFactory_MaterialTabComponent1, AppViewAndintToAppViewOfMaterialTabComponent());
  dart.defineLazy(material_tab__material_tab$46template, {
    /*material_tab__material_tab$46template.styles$MaterialTabComponentHost*/get styles$MaterialTabComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialTabComponent_0_5 = Symbol('_MaterialTabComponent_0_5');
  material_tab__material_tab$46template._ViewMaterialTabComponentHost0 = class _ViewMaterialTabComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_tab__material_tab$46template.ViewMaterialTabComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTabComponent_0_5] = new material_tab__material_tab.MaterialTabComponent.new(this.rootEl, utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTabComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTabComponent()).new(0, this, this.rootEl, this[_MaterialTabComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_tab__material_tab.MaterialTabComponent) || token === dart.wrapType(material_tab__material_tab.Tab) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 0 === nodeIndex) {
        return this[_MaterialTabComponent_0_5];
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
  (material_tab__material_tab$46template._ViewMaterialTabComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTabComponent_0_5] = null;
    material_tab__material_tab$46template._ViewMaterialTabComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_tab__material_tab$46template._ViewMaterialTabComponentHost0.prototype;
  dart.addTypeTests(material_tab__material_tab$46template._ViewMaterialTabComponentHost0);
  dart.setMethodSignature(material_tab__material_tab$46template._ViewMaterialTabComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab__material_tab$46template._ViewMaterialTabComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_tab__material_tab$46template._ViewMaterialTabComponentHost0, () => ({
    __proto__: dart.getFields(material_tab__material_tab$46template._ViewMaterialTabComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_tab__material_tab$46template.ViewMaterialTabComponent0),
    [_MaterialTabComponent_0_5]: dart.fieldType(material_tab__material_tab.MaterialTabComponent)
  }));
  material_tab__material_tab$46template.viewFactory_MaterialTabComponentHost0 = function(parentView, parentIndex) {
    return new material_tab__material_tab$46template._ViewMaterialTabComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_tab__material_tab$46template.viewFactory_MaterialTabComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_tab__material_tab$46template, {
    /*material_tab__material_tab$46template.MaterialTabComponentNgFactory*/get MaterialTabComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTabComponent()).new('material-tab', material_tab__material_tab$46template.viewFactory_MaterialTabComponentHost0, material_tab__material_tab$46template._MaterialTabComponentMetadata));
    },
    /*material_tab__material_tab$46template._MaterialTabComponentMetadata*/get _MaterialTabComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_tab__material_tab$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tab__material_tab$46template.initReflector = function() {
    if (dart.test(material_tab__material_tab$46template._visited)) {
      return;
    }
    material_tab__material_tab$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_tab__material_tab.MaterialTabComponent), material_tab__material_tab$46template.MaterialTabComponentNgFactory);
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    focus__focus$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.fn(material_tab__material_tab$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_tab/material_tab.template.ddc", {
    "package:angular_components/material_tab/material_tab.template.dart": material_tab__material_tab$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tab.template.dart"],"names":[],"mappings":"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","file":"material_tab.template.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab$46template: material_tab__material_tab$46template
  };
});

//# sourceMappingURL=material_tab.template.ddc.js.map
