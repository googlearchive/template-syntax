define(['dart_sdk', 'packages/angular_components/reorder_list/reorder_list.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/reorder_list/reorder_list', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/reorder_list/reorder_events.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/keyboard/keyboard.template'], function(dart_sdk, reorder_list$46scss$46css, view_type, constants, view, app_view_utils, app_view, element_ref, reorder_list, ng_zone, reflector, angular, reorder_events, disposer, keyboard) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reorder_list__reorder_list$46scss$46css$46shim = reorder_list$46scss$46css.reorder_list__reorder_list$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const reorder_list__reorder_list = reorder_list.reorder_list__reorder_list;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const reorder_list__reorder_events$46template = reorder_events.reorder_list__reorder_events$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const utils__keyboard__keyboard$46template = keyboard.utils__keyboard__keyboard$46template;
  const _root = Object.create(null);
  const reorder_list__reorder_list$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfReorderListComponent = () => (AppViewOfReorderListComponent = dart.constFn(src__core__linker__app_view.AppView$(reorder_list__reorder_list.ReorderListComponent)))();
  let AppViewAndintToAppViewOfReorderListComponent = () => (AppViewAndintToAppViewOfReorderListComponent = dart.constFn(dart.fnType(AppViewOfReorderListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfReorderItemDirective = () => (JSArrayOfReorderItemDirective = dart.constFn(_interceptors.JSArray$(reorder_list__reorder_list.ReorderItemDirective)))();
  let ComponentRefOfReorderListComponent = () => (ComponentRefOfReorderListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(reorder_list__reorder_list.ReorderListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfReorderListComponent = () => (ComponentFactoryOfReorderListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(reorder_list__reorder_list.ReorderListComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(reorder_list__reorder_list$46template, {
    /*reorder_list__reorder_list$46template.styles$ReorderListComponent*/get styles$ReorderListComponent() {
      return dart.constList([reorder_list__reorder_list$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_placeholder_1_0_isDirty = Symbol('_query_placeholder_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  reorder_list__reorder_list$46template.ViewReorderListComponent0 = class ViewReorderListComponent0 extends src__core__linker__app_view.AppView$(reorder_list__reorder_list.ReorderListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.project(parentRenderNode, 0);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'placeholder';
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 1);
      this.ctx.placeholder = new src__core__linker__element_ref.ElementRef.new(this[_el_0]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = !dart.test(_ctx.showPlaceholder);
      if (!(this[_expr_0] === currVal_0)) {
        this.updateClass(this[_el_0], 'hidden', currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    detectHostChanges(firstCheck) {
      let currVal_1 = this.ctx.verticalItems;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateElemClass(this.rootEl, 'vertical', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.ctx.multiSelect;
      if (!(this[_expr_2] == currVal_2)) {
        this.updateElemClass(this.rootEl, 'multiselect', currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
  };
  (reorder_list__reorder_list$46template.ViewReorderListComponent0.new = function(parentView, parentIndex) {
    this[_query_placeholder_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    reorder_list__reorder_list$46template.ViewReorderListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('reorder-list'));
    this.createAttr(this.rootEl, 'role', 'list');
    this.rootEl.className = 'themeable';
    let t = reorder_list__reorder_list$46template.ViewReorderListComponent0._renderType;
    t == null ? reorder_list__reorder_list$46template.ViewReorderListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, reorder_list__reorder_list$46template.styles$ReorderListComponent) : t;
    this.setupComponentType(reorder_list__reorder_list$46template.ViewReorderListComponent0._renderType);
  }).prototype = reorder_list__reorder_list$46template.ViewReorderListComponent0.prototype;
  dart.addTypeTests(reorder_list__reorder_list$46template.ViewReorderListComponent0);
  dart.setMethodSignature(reorder_list__reorder_list$46template.ViewReorderListComponent0, () => ({
    __proto__: dart.getMethods(reorder_list__reorder_list$46template.ViewReorderListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(reorder_list__reorder_list.ReorderListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(reorder_list__reorder_list$46template.ViewReorderListComponent0, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list$46template.ViewReorderListComponent0.__proto__),
    [_query_placeholder_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(reorder_list__reorder_list$46template.ViewReorderListComponent0, {
    /*reorder_list__reorder_list$46template.ViewReorderListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  reorder_list__reorder_list$46template.viewFactory_ReorderListComponent0 = function(parentView, parentIndex) {
    return new reorder_list__reorder_list$46template.ViewReorderListComponent0.new(parentView, parentIndex);
  };
  dart.fn(reorder_list__reorder_list$46template.viewFactory_ReorderListComponent0, AppViewAndintToAppViewOfReorderListComponent());
  dart.defineLazy(reorder_list__reorder_list$46template, {
    /*reorder_list__reorder_list$46template.styles$ReorderListComponentHost*/get styles$ReorderListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _ReorderListComponent_0_5 = Symbol('_ReorderListComponent_0_5');
  const _query_ReorderItemDirective_0_0_isDirty = Symbol('_query_ReorderItemDirective_0_0_isDirty');
  reorder_list__reorder_list$46template._ViewReorderListComponentHost0 = class _ViewReorderListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new reorder_list__reorder_list$46template.ViewReorderListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ReorderListComponent_0_5] = new reorder_list__reorder_list.ReorderListComponent.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_ReorderListComponent_0_5].items = JSArrayOfReorderItemDirective().of([]);
      this[_compView_0].create(this[_ReorderListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfReorderListComponent()).new(0, this, this.rootEl, this[_ReorderListComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(reorder_list__reorder_list.ReorderListComponent) && 0 === nodeIndex) {
        return this[_ReorderListComponent_0_5];
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
      this[_ReorderListComponent_0_5].ngOnDestroy();
    }
  };
  (reorder_list__reorder_list$46template._ViewReorderListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ReorderListComponent_0_5] = null;
    this[_query_ReorderItemDirective_0_0_isDirty] = true;
    reorder_list__reorder_list$46template._ViewReorderListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = reorder_list__reorder_list$46template._ViewReorderListComponentHost0.prototype;
  dart.addTypeTests(reorder_list__reorder_list$46template._ViewReorderListComponentHost0);
  dart.setMethodSignature(reorder_list__reorder_list$46template._ViewReorderListComponentHost0, () => ({
    __proto__: dart.getMethods(reorder_list__reorder_list$46template._ViewReorderListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(reorder_list__reorder_list$46template._ViewReorderListComponentHost0, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list$46template._ViewReorderListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(reorder_list__reorder_list$46template.ViewReorderListComponent0),
    [_ReorderListComponent_0_5]: dart.fieldType(reorder_list__reorder_list.ReorderListComponent),
    [_query_ReorderItemDirective_0_0_isDirty]: dart.fieldType(core.bool)
  }));
  reorder_list__reorder_list$46template.viewFactory_ReorderListComponentHost0 = function(parentView, parentIndex) {
    return new reorder_list__reorder_list$46template._ViewReorderListComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(reorder_list__reorder_list$46template.viewFactory_ReorderListComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(reorder_list__reorder_list$46template, {
    /*reorder_list__reorder_list$46template.ReorderListComponentNgFactory*/get ReorderListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfReorderListComponent()).new('reorder-list', reorder_list__reorder_list$46template.viewFactory_ReorderListComponentHost0, reorder_list__reorder_list$46template._ReorderListComponentMetadata));
    },
    /*reorder_list__reorder_list$46template._ReorderListComponentMetadata*/get _ReorderListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*reorder_list__reorder_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  reorder_list__reorder_list$46template.initReflector = function() {
    if (dart.test(reorder_list__reorder_list$46template._visited)) {
      return;
    }
    reorder_list__reorder_list$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(reorder_list__reorder_list.ReorderListComponent), reorder_list__reorder_list$46template.ReorderListComponentNgFactory);
    angular$46template.initReflector();
    reorder_list__reorder_events$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    utils__keyboard__keyboard$46template.initReflector();
    reorder_list__reorder_events$46template.initReflector();
  };
  dart.fn(reorder_list__reorder_list$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/reorder_list/reorder_list.template.ddc", {
    "package:angular_components/reorder_list/reorder_list.template.dart": reorder_list__reorder_list$46template
  }, '{"version":3,"sourceRoot":"","sources":["reorder_list.template.dart"],"names":[],"mappings":"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","file":"reorder_list.template.ddc.js"}');
  // Exports:
  return {
    reorder_list__reorder_list$46template: reorder_list__reorder_list$46template
  };
});

//# sourceMappingURL=reorder_list.template.ddc.js.map
