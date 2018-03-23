define(['dart_sdk', 'packages/angular_components/focus/focus_trap.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/focus/focus_trap', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/utils/browser/dom_iterator/dom_iterator.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, focus_trap$46scss$46css, view_type, constants, view, app_view_utils, app_view, focus_trap, reflector, angular, focus, dom_iterator, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus__focus_trap$46scss$46css$46shim = focus_trap$46scss$46css.focus__focus_trap$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const focus__focus_trap = focus_trap.focus__focus_trap;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const utils__browser__dom_iterator__dom_iterator$46template = dom_iterator.utils__browser__dom_iterator__dom_iterator$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const focus__focus_trap$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfFocusTrapComponent = () => (AppViewOfFocusTrapComponent = dart.constFn(src__core__linker__app_view.AppView$(focus__focus_trap.FocusTrapComponent)))();
  let AppViewAndintToAppViewOfFocusTrapComponent = () => (AppViewAndintToAppViewOfFocusTrapComponent = dart.constFn(dart.fnType(AppViewOfFocusTrapComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfFocusTrapComponent = () => (ComponentRefOfFocusTrapComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(focus__focus_trap.FocusTrapComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfFocusTrapComponent = () => (ComponentFactoryOfFocusTrapComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(focus__focus_trap.FocusTrapComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(focus__focus_trap$46template, {
    /*focus__focus_trap$46template.styles$FocusTrapComponent*/get styles$FocusTrapComponent() {
      return dart.constList([focus__focus_trap$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_FocusContentWrapper_1_0_isDirty = Symbol('_query_FocusContentWrapper_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _FocusContentWrapper_1_5 = Symbol('_FocusContentWrapper_1_5');
  const _el_2 = Symbol('_el_2');
  let const$;
  focus__focus_trap$46template.ViewFocusTrapComponent0 = class ViewFocusTrapComponent0 extends src__core__linker__app_view.AppView$(focus__focus_trap.FocusTrapComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].tabIndex = 0;
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_1], 'focusContentWrapper', '');
      this.createAttr(this[_el_1], 'style', 'outline: none');
      this[_el_1].tabIndex = -1;
      this.addShimC(this[_el_1]);
      this[_FocusContentWrapper_1_5] = new focus__focus_trap.FocusContentWrapper.new(this[_el_1]);
      this.project(this[_el_1], 0);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_2].tabIndex = 0;
      this.addShimC(this[_el_2]);
      this[_el_0][$addEventListener]('focus', this.eventHandler0(html.Event, dart.bind(this.ctx, 'focusLast')));
      this[_el_2][$addEventListener]('focus', this.eventHandler0(html.Event, dart.bind(this.ctx, 'focusFirst')));
      this.ctx.content = this[_FocusContentWrapper_1_5];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus__focus_trap.FocusContentWrapper) && 1 === nodeIndex) {
        return this[_FocusContentWrapper_1_5];
      }
      return notFoundResult;
    }
  };
  (focus__focus_trap$46template.ViewFocusTrapComponent0.new = function(parentView, parentIndex) {
    this[_query_FocusContentWrapper_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_FocusContentWrapper_1_5] = null;
    this[_el_2] = null;
    focus__focus_trap$46template.ViewFocusTrapComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('focus-trap'));
    let t = focus__focus_trap$46template.ViewFocusTrapComponent0._renderType;
    t == null ? focus__focus_trap$46template.ViewFocusTrapComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, focus__focus_trap$46template.styles$FocusTrapComponent) : t;
    this.setupComponentType(focus__focus_trap$46template.ViewFocusTrapComponent0._renderType);
  }).prototype = focus__focus_trap$46template.ViewFocusTrapComponent0.prototype;
  dart.addTypeTests(focus__focus_trap$46template.ViewFocusTrapComponent0);
  dart.setMethodSignature(focus__focus_trap$46template.ViewFocusTrapComponent0, () => ({
    __proto__: dart.getMethods(focus__focus_trap$46template.ViewFocusTrapComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(focus__focus_trap.FocusTrapComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setFieldSignature(focus__focus_trap$46template.ViewFocusTrapComponent0, () => ({
    __proto__: dart.getFields(focus__focus_trap$46template.ViewFocusTrapComponent0.__proto__),
    [_query_FocusContentWrapper_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_FocusContentWrapper_1_5]: dart.fieldType(focus__focus_trap.FocusContentWrapper),
    [_el_2]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(focus__focus_trap$46template.ViewFocusTrapComponent0, {
    /*focus__focus_trap$46template.ViewFocusTrapComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  focus__focus_trap$46template.viewFactory_FocusTrapComponent0 = function(parentView, parentIndex) {
    return new focus__focus_trap$46template.ViewFocusTrapComponent0.new(parentView, parentIndex);
  };
  dart.fn(focus__focus_trap$46template.viewFactory_FocusTrapComponent0, AppViewAndintToAppViewOfFocusTrapComponent());
  dart.defineLazy(focus__focus_trap$46template, {
    /*focus__focus_trap$46template.styles$FocusTrapComponentHost*/get styles$FocusTrapComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _FocusTrapComponent_0_5 = Symbol('_FocusTrapComponent_0_5');
  const _query_AutoFocusDirective_0_0_isDirty = Symbol('_query_AutoFocusDirective_0_0_isDirty');
  focus__focus_trap$46template._ViewFocusTrapComponentHost0 = class _ViewFocusTrapComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new focus__focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_FocusTrapComponent_0_5] = new focus__focus_trap.FocusTrapComponent.new();
      this[_compView_0].create(this[_FocusTrapComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfFocusTrapComponent()).new(0, this, this.rootEl, this[_FocusTrapComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus__focus_trap.FocusTrapComponent) && 0 === nodeIndex) {
        return this[_FocusTrapComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
  };
  (focus__focus_trap$46template._ViewFocusTrapComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    this[_query_AutoFocusDirective_0_0_isDirty] = true;
    focus__focus_trap$46template._ViewFocusTrapComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = focus__focus_trap$46template._ViewFocusTrapComponentHost0.prototype;
  dart.addTypeTests(focus__focus_trap$46template._ViewFocusTrapComponentHost0);
  dart.setMethodSignature(focus__focus_trap$46template._ViewFocusTrapComponentHost0, () => ({
    __proto__: dart.getMethods(focus__focus_trap$46template._ViewFocusTrapComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(focus__focus_trap$46template._ViewFocusTrapComponentHost0, () => ({
    __proto__: dart.getFields(focus__focus_trap$46template._ViewFocusTrapComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(focus__focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_0_5]: dart.fieldType(focus__focus_trap.FocusTrapComponent),
    [_query_AutoFocusDirective_0_0_isDirty]: dart.fieldType(core.bool)
  }));
  focus__focus_trap$46template.viewFactory_FocusTrapComponentHost0 = function(parentView, parentIndex) {
    return new focus__focus_trap$46template._ViewFocusTrapComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(focus__focus_trap$46template.viewFactory_FocusTrapComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(focus__focus_trap$46template, {
    /*focus__focus_trap$46template.FocusTrapComponentNgFactory*/get FocusTrapComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfFocusTrapComponent()).new('focus-trap', focus__focus_trap$46template.viewFactory_FocusTrapComponentHost0, focus__focus_trap$46template._FocusTrapComponentMetadata));
    },
    /*focus__focus_trap$46template._FocusTrapComponentMetadata*/get _FocusTrapComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*focus__focus_trap$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  focus__focus_trap$46template.initReflector = function() {
    if (dart.test(focus__focus_trap$46template._visited)) {
      return;
    }
    focus__focus_trap$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(focus__focus_trap.FocusTrapComponent), focus__focus_trap$46template.FocusTrapComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    utils__browser__dom_iterator__dom_iterator$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(focus__focus_trap$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/focus/focus_trap.template.ddc", {
    "package:angular_components/focus/focus_trap.template.dart": focus__focus_trap$46template
  }, '{"version":3,"sourceRoot":"","sources":["focus_trap.template.dart"],"names":[],"mappings":"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","file":"focus_trap.template.ddc.js"}');
  // Exports:
  return {
    focus__focus_trap$46template: focus__focus_trap$46template
  };
});

//# sourceMappingURL=focus_trap.template.ddc.js.map
