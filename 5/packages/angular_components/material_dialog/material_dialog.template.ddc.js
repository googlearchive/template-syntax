define(['dart_sdk', 'packages/angular_components/material_dialog/material_dialog.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_dialog/material_dialog', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_dialog$46scss$46css, view_type, constants, view, app_view_utils, focus_trap, focus_trap$, app_view, ng_if, material_dialog, dom_service, modal, reflector, angular, modal$, dom_service$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_dialog__material_dialog$46scss$46css$46shim = material_dialog$46scss$46css.material_dialog__material_dialog$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const focus__focus_trap$46template = focus_trap.focus__focus_trap$46template;
  const focus__focus_trap = focus_trap$.focus__focus_trap;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_dialog__material_dialog = material_dialog.material_dialog__material_dialog;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const laminate__components__modal__modal$46template = modal$.laminate__components__modal__modal$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_dialog__material_dialog$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let AppViewOfMaterialDialogComponent = () => (AppViewOfMaterialDialogComponent = dart.constFn(src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent)))();
  let AppViewAndintToAppViewOfMaterialDialogComponent = () => (AppViewAndintToAppViewOfMaterialDialogComponent = dart.constFn(dart.fnType(AppViewOfMaterialDialogComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialDialogComponent = () => (ComponentRefOfMaterialDialogComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialDialogComponent = () => (ComponentFactoryOfMaterialDialogComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_dialog__material_dialog.MaterialDialogComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_dialog__material_dialog$46template, {
    /*material_dialog__material_dialog$46template.styles$MaterialDialogComponent*/get styles$MaterialDialogComponent() {
      return dart.constList([material_dialog__material_dialog$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_main_1_0_isDirty = Symbol('_query_main_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _FocusTrapComponent_0_5 = Symbol('_FocusTrapComponent_0_5');
  const _query_AutoFocusDirective_0_0_isDirty = Symbol('_query_AutoFocusDirective_0_0_isDirty');
  const _el_1 = Symbol('_el_1');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _el_3 = Symbol('_el_3');
  const _text_4 = Symbol('_text_4');
  const _el_5 = Symbol('_el_5');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  let const$;
  material_dialog__material_dialog$46template.ViewMaterialDialogComponent0 = class ViewMaterialDialogComponent0 extends src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new focus__focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_FocusTrapComponent_0_5] = new focus__focus_trap.FocusTrapComponent.new();
      let doc = html.document;
      this[_el_1] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_1].className = 'wrapper';
      this.addShimC(this[_el_1]);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_1][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent1);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_3].className = 'error';
      this.addShimC(this[_el_3]);
      this[_text_4] = html.Text.new('');
      this[_el_3][$append](this[_text_4]);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, 'main', this[_el_1]);
      this.addShimE(this[_el_5]);
      this.project(this[_el_5], 1);
      let _anchor_6 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_1][$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 1, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent2);
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_0].create(this[_FocusTrapComponent_0_5], [JSArrayOfDivElement().of([this[_el_1]])]);
      this[_el_5][$addEventListener]('scroll', this.eventHandler0(html.Event, dart.bind(this.ctx, 'onScroll')));
      this.ctx.main = html.HtmlElement._check(this[_el_5]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus__focus_trap.FocusTrapComponent) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_FocusTrapComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_2_9].ngIf = _ctx.shouldShowHeader;
      this[_NgIf_6_9].ngIf = _ctx.shouldShowFooter;
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_1 = _ctx.error != null;
      if (!(this[_expr_1] === currVal_1)) {
        this.updateClass(this[_el_3], 'expanded', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let l = _ctx.error;
      let currVal_2 = l != null ? l : '';
      if (!(this[_expr_2] === currVal_2)) {
        this[_text_4][$text] = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.shouldShowTopScrollStroke;
      if (!(this[_expr_3] == currVal_3)) {
        this.updateClass(html.HtmlElement._check(this[_el_5]), 'top-scroll-stroke', currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.shouldShowBottomScrollStroke;
      if (!(this[_expr_4] == currVal_4)) {
        this.updateClass(html.HtmlElement._check(this[_el_5]), 'bottom-scroll-stroke', currVal_4);
        this[_expr_4] = currVal_4;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_6];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0];
      t$0 == null ? null : t$0.destroy();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
  };
  (material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new = function(parentView, parentIndex) {
    this[_query_main_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    this[_query_AutoFocusDirective_0_0_isDirty] = true;
    this[_el_1] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_el_5] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-dialog'));
    let t = material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._renderType;
    t == null ? material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_dialog__material_dialog$46template.styles$MaterialDialogComponent) : t;
    this.setupComponentType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._renderType);
  }).prototype = material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.prototype;
  dart.addTypeTests(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0);
  dart.setMethodSignature(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0, () => ({
    __proto__: dart.getFields(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.__proto__),
    [_query_main_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(focus__focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_0_5]: dart.fieldType(focus__focus_trap.FocusTrapComponent),
    [_query_AutoFocusDirective_0_0_isDirty]: dart.fieldType(core.bool),
    [_el_1]: dart.fieldType(html.DivElement),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_3]: dart.fieldType(html.DivElement),
    [_text_4]: dart.fieldType(html.Text),
    [_el_5]: dart.fieldType(html.Element),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0, {
    /*material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent0 = function(parentView, parentIndex) {
    return new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent0, AppViewAndintToAppViewOfMaterialDialogComponent());
  material_dialog__material_dialog$46template._ViewMaterialDialogComponent1 = class _ViewMaterialDialogComponent1 extends src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('header');
      this.addShimE(this[_el_0]);
      this.project(this[_el_0], 0);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._renderType;
  }).prototype = material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.prototype;
  dart.addTypeTests(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1);
  dart.setMethodSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent), [])
  }));
  dart.setFieldSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1, () => ({
    __proto__: dart.getFields(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent1 = function(parentView, parentIndex) {
    return new material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent1, AppViewAndintToAppViewOfMaterialDialogComponent());
  material_dialog__material_dialog$46template._ViewMaterialDialogComponent2 = class _ViewMaterialDialogComponent2 extends src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('footer');
      this.addShimE(this[_el_0]);
      this.project(this[_el_0], 2);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._renderType;
  }).prototype = material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.prototype;
  dart.addTypeTests(material_dialog__material_dialog$46template._ViewMaterialDialogComponent2);
  dart.setMethodSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponent2, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent), [])
  }));
  dart.setFieldSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponent2, () => ({
    __proto__: dart.getFields(material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent2 = function(parentView, parentIndex) {
    return new material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent2, AppViewAndintToAppViewOfMaterialDialogComponent());
  dart.defineLazy(material_dialog__material_dialog$46template, {
    /*material_dialog__material_dialog$46template.styles$MaterialDialogComponentHost*/get styles$MaterialDialogComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialDialogComponent_0_5 = Symbol('_MaterialDialogComponent_0_5');
  material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0 = class _ViewMaterialDialogComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDialogComponent_0_5] = new material_dialog__material_dialog.MaterialDialogComponent.new(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_0].ref, laminate__components__modal__modal.ModalComponent._check(this.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialDialogComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialDialogComponent()).new(0, this, this.rootEl, this[_MaterialDialogComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent) && 0 === nodeIndex) {
        return this[_MaterialDialogComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_MaterialDialogComponent_0_5].ngAfterContentChecked();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialDialogComponent_0_5].ngOnDestroy();
    }
  };
  (material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDialogComponent_0_5] = null;
    material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.prototype;
  dart.addTypeTests(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0);
  dart.setMethodSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0, () => ({
    __proto__: dart.getFields(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0),
    [_MaterialDialogComponent_0_5]: dart.fieldType(material_dialog__material_dialog.MaterialDialogComponent)
  }));
  material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponentHost0 = function(parentView, parentIndex) {
    return new material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_dialog__material_dialog$46template, {
    /*material_dialog__material_dialog$46template.MaterialDialogComponentNgFactory*/get MaterialDialogComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialDialogComponent()).new('material-dialog', material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponentHost0, material_dialog__material_dialog$46template._MaterialDialogComponentMetadata));
    },
    /*material_dialog__material_dialog$46template._MaterialDialogComponentMetadata*/get _MaterialDialogComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_dialog__material_dialog$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_dialog__material_dialog$46template.initReflector = function() {
    if (dart.test(material_dialog__material_dialog$46template._visited)) {
      return;
    }
    material_dialog__material_dialog$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), material_dialog__material_dialog$46template.MaterialDialogComponentNgFactory);
    angular$46template.initReflector();
    focus__focus_trap$46template.initReflector();
    laminate__components__modal__modal$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(material_dialog__material_dialog$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_dialog/material_dialog.template.ddc", {
    "package:angular_components/material_dialog/material_dialog.template.dart": material_dialog__material_dialog$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_dialog.template.dart"],"names":[],"mappings":"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","file":"material_dialog.template.ddc.js"}');
  // Exports:
  return {
    material_dialog__material_dialog$46template: material_dialog__material_dialog$46template
  };
});

//# sourceMappingURL=material_dialog.template.ddc.js.map
