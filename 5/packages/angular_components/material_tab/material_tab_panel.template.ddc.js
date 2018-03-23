define(['dart_sdk', 'packages/angular_components/material_tab/material_tab_panel.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_tab/fixed_material_tab_strip.template', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_components/material_tab/tab_change_event', 'packages/angular_components/material_tab/material_tab_panel', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_tab/material_tab', 'packages/angular/src/di/reflector', 'packages/angular_components/material_tab/material_tab.template', 'packages/angular/angular.template', 'packages/angular_components/material_tab/tab_change_event.template'], function(dart_sdk, material_tab_panel$46scss$46css, view_type, constants, view, app_view_utils, fixed_material_tab_strip, opaque_token, fixed_material_tab_strip$, tab_change_event, material_tab_panel, app_view, material_tab, reflector, material_tab$, angular, tab_change_event$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tab__material_tab_panel$46scss$46css$46shim = material_tab_panel$46scss$46css.material_tab__material_tab_panel$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_tab__fixed_material_tab_strip$46template = fixed_material_tab_strip.material_tab__fixed_material_tab_strip$46template;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const material_tab__fixed_material_tab_strip = fixed_material_tab_strip$.material_tab__fixed_material_tab_strip;
  const material_tab__tab_change_event = tab_change_event.material_tab__tab_change_event;
  const material_tab__material_tab_panel = material_tab_panel.material_tab__material_tab_panel;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_tab__material_tab = material_tab.material_tab__material_tab;
  const src__di__reflector = reflector.src__di__reflector;
  const material_tab__material_tab$46template = material_tab$.material_tab__material_tab$46template;
  const angular$46template = angular.angular$46template;
  const material_tab__tab_change_event$46template = tab_change_event$.material_tab__tab_change_event$46template;
  const _root = Object.create(null);
  const material_tab__material_tab_panel$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialTabPanelComponent = () => (AppViewOfMaterialTabPanelComponent = dart.constFn(src__core__linker__app_view.AppView$(material_tab__material_tab_panel.MaterialTabPanelComponent)))();
  let AppViewAndintToAppViewOfMaterialTabPanelComponent = () => (AppViewAndintToAppViewOfMaterialTabPanelComponent = dart.constFn(dart.fnType(AppViewOfMaterialTabPanelComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfTab = () => (JSArrayOfTab = dart.constFn(_interceptors.JSArray$(material_tab__material_tab.Tab)))();
  let ComponentRefOfMaterialTabPanelComponent = () => (ComponentRefOfMaterialTabPanelComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab_panel.MaterialTabPanelComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTabPanelComponent = () => (ComponentFactoryOfMaterialTabPanelComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_tab__material_tab_panel.MaterialTabPanelComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_tab__material_tab_panel$46template, {
    /*material_tab__material_tab_panel$46template.styles$MaterialTabPanelComponent*/get styles$MaterialTabPanelComponent() {
      return dart.constList([material_tab__material_tab_panel$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _FixedMaterialTabStripComponent_0_5 = Symbol('_FixedMaterialTabStripComponent_0_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  let const$0;
  material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0 = class ViewMaterialTabPanelComponent0 extends src__core__linker__app_view.AppView$(material_tab__material_tab_panel.MaterialTabPanelComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_FixedMaterialTabStripComponent_0_5] = new material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0].ref, core.bool._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new('isRtl'))), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_FixedMaterialTabStripComponent_0_5], []);
      this.project(parentRenderNode, 0);
      let subscription_0 = this[_FixedMaterialTabStripComponent_0_5].beforeTabChange.listen(this.eventHandler1(material_tab__tab_change_event.TabChangeEvent, material_tab__tab_change_event.TabChangeEvent, dart.bind(this.ctx, 'onBeforeTabChange')));
      let subscription_1 = this[_FixedMaterialTabStripComponent_0_5].tabChange.listen(this.eventHandler1(material_tab__tab_change_event.TabChangeEvent, material_tab__tab_change_event.TabChangeEvent, dart.bind(this.ctx, 'onTabChange')));
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent) && 0 === nodeIndex) {
        return this[_FixedMaterialTabStripComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.tabIds;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_FixedMaterialTabStripComponent_0_5].tabIds = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.activeTabIndex;
      if (!(this[_expr_1] == currVal_1)) {
        this[_FixedMaterialTabStripComponent_0_5].activeTabIndex = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.tabLabels;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_FixedMaterialTabStripComponent_0_5].tabLabels = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
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
  (material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_FixedMaterialTabStripComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-tab-panel'));
    this.rootEl.className = 'themeable';
    let t = material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._renderType;
    t == null ? material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_tab__material_tab_panel$46template.styles$MaterialTabPanelComponent) : t;
    this.setupComponentType(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._renderType);
  }).prototype = material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.prototype;
  dart.addTypeTests(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0);
  dart.setMethodSignature(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0, () => ({
    __proto__: dart.getMethods(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab_panel.MaterialTabPanelComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0, () => ({
    __proto__: dart.getFields(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0),
    [_FixedMaterialTabStripComponent_0_5]: dart.fieldType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.int),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0, {
    /*material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_tab__material_tab_panel$46template.viewFactory_MaterialTabPanelComponent0 = function(parentView, parentIndex) {
    return new material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_tab__material_tab_panel$46template.viewFactory_MaterialTabPanelComponent0, AppViewAndintToAppViewOfMaterialTabPanelComponent());
  dart.defineLazy(material_tab__material_tab_panel$46template, {
    /*material_tab__material_tab_panel$46template.styles$MaterialTabPanelComponentHost*/get styles$MaterialTabPanelComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTabPanelComponent_0_5 = Symbol('_MaterialTabPanelComponent_0_5');
  const _query_Tab_0_0_isDirty = Symbol('_query_Tab_0_0_isDirty');
  material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0 = class _ViewMaterialTabPanelComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTabPanelComponent_0_5] = new material_tab__material_tab_panel.MaterialTabPanelComponent.new(this[_compView_0].ref);
      this[_MaterialTabPanelComponent_0_5].tabs = JSArrayOfTab().of([]);
      this[_compView_0].create(this[_MaterialTabPanelComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTabPanelComponent()).new(0, this, this.rootEl, this[_MaterialTabPanelComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_tab__material_tab_panel.MaterialTabPanelComponent) && 0 === nodeIndex) {
        return this[_MaterialTabPanelComponent_0_5];
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
        this[_MaterialTabPanelComponent_0_5].ngAfterContentInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTabPanelComponent_0_5] = null;
    this[_query_Tab_0_0_isDirty] = true;
    material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.prototype;
  dart.addTypeTests(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0);
  dart.setMethodSignature(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, () => ({
    __proto__: dart.getFields(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0),
    [_MaterialTabPanelComponent_0_5]: dart.fieldType(material_tab__material_tab_panel.MaterialTabPanelComponent),
    [_query_Tab_0_0_isDirty]: dart.fieldType(core.bool)
  }));
  material_tab__material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0 = function(parentView, parentIndex) {
    return new material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_tab__material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_tab__material_tab_panel$46template, {
    /*material_tab__material_tab_panel$46template.MaterialTabPanelComponentNgFactory*/get MaterialTabPanelComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTabPanelComponent()).new('material-tab-panel', material_tab__material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0, material_tab__material_tab_panel$46template._MaterialTabPanelComponentMetadata));
    },
    /*material_tab__material_tab_panel$46template._MaterialTabPanelComponentMetadata*/get _MaterialTabPanelComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_tab__material_tab_panel$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tab__material_tab_panel$46template.initReflector = function() {
    if (dart.test(material_tab__material_tab_panel$46template._visited)) {
      return;
    }
    material_tab__material_tab_panel$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_tab__material_tab_panel.MaterialTabPanelComponent), material_tab__material_tab_panel$46template.MaterialTabPanelComponentNgFactory);
    material_tab__fixed_material_tab_strip$46template.initReflector();
    material_tab__material_tab$46template.initReflector();
    angular$46template.initReflector();
    material_tab__tab_change_event$46template.initReflector();
  };
  dart.fn(material_tab__material_tab_panel$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_tab/material_tab_panel.template.ddc", {
    "package:angular_components/material_tab/material_tab_panel.template.dart": material_tab__material_tab_panel$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tab_panel.template.dart"],"names":[],"mappings":"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","file":"material_tab_panel.template.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab_panel$46template: material_tab__material_tab_panel$46template
  };
});

//# sourceMappingURL=material_tab_panel.template.ddc.js.map
