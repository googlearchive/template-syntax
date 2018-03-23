define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/src/laminate/components/modal/modal_controller_directive', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/laminate/overlay/overlay.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/src/laminate/components/modal/modal_controller_directive.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, modal_controller_directive, modal, overlay_service, deferred_content_aware, reflector, angular, deferred_content_aware$, overlay, async_action, modal_controller_directive$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__laminate__components__modal__modal_controller_directive = modal_controller_directive.src__laminate__components__modal__modal_controller_directive;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const src__laminate__overlay__overlay_service = overlay_service.src__laminate__overlay__overlay_service;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const laminate__overlay__overlay$46template = overlay.laminate__overlay__overlay$46template;
  const model__action__async_action$46template = async_action.model__action__async_action$46template;
  const src__laminate__components__modal__modal_controller_directive$46template = modal_controller_directive$.src__laminate__components__modal__modal_controller_directive$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const laminate__components__modal__modal$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfModalComponent = () => (AppViewOfModalComponent = dart.constFn(src__core__linker__app_view.AppView$(laminate__components__modal__modal.ModalComponent)))();
  let AppViewAndintToAppViewOfModalComponent = () => (AppViewAndintToAppViewOfModalComponent = dart.constFn(dart.fnType(AppViewOfModalComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfModalComponent = () => (ComponentRefOfModalComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(laminate__components__modal__modal.ModalComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfModalComponent = () => (ComponentFactoryOfModalComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(laminate__components__modal__modal.ModalComponent)))();
  let VoidToGlobalModalStack = () => (VoidToGlobalModalStack = dart.constFn(dart.fnType(laminate__components__modal__modal.GlobalModalStack, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(laminate__components__modal__modal$46template, {
    /*laminate__components__modal__modal$46template.styles$ModalComponent*/get styles$ModalComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_1 = Symbol('_appEl_1');
  const _ModalControllerDirective_1_9 = Symbol('_ModalControllerDirective_1_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  laminate__components__modal__modal$46template.ViewModalComponent0 = class ViewModalComponent0 extends src__core__linker__app_view.AppView$(laminate__components__modal__modal.ModalComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('    ');
      parentRenderNode[$append](_text_0);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], laminate__components__modal__modal$46template.viewFactory_ModalComponent1);
      this[_ModalControllerDirective_1_9] = new src__laminate__components__modal__modal_controller_directive.ModalControllerDirective.new(_TemplateRef_1_8, this[_appEl_1]);
      let _text_2 = html.Text.new('\n  ');
      parentRenderNode[$append](_text_2);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__laminate__components__modal__modal_controller_directive.ModalControllerDirective) && 1 === nodeIndex) {
        return this[_ModalControllerDirective_1_9];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.resolvedOverlayRef;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_ModalControllerDirective_1_9].overlay = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      this[_ModalControllerDirective_1_9].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let currVal_1 = this.ctx.uniquePaneId;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this.rootEl, 'pane-id', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
    }
  };
  (laminate__components__modal__modal$46template.ViewModalComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_ModalControllerDirective_1_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    laminate__components__modal__modal$46template.ViewModalComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('modal'));
    let t = laminate__components__modal__modal$46template.ViewModalComponent0._renderType;
    t == null ? laminate__components__modal__modal$46template.ViewModalComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, laminate__components__modal__modal$46template.styles$ModalComponent) : t;
    this.setupComponentType(laminate__components__modal__modal$46template.ViewModalComponent0._renderType);
  }).prototype = laminate__components__modal__modal$46template.ViewModalComponent0.prototype;
  dart.addTypeTests(laminate__components__modal__modal$46template.ViewModalComponent0);
  dart.setMethodSignature(laminate__components__modal__modal$46template.ViewModalComponent0, () => ({
    __proto__: dart.getMethods(laminate__components__modal__modal$46template.ViewModalComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(laminate__components__modal__modal.ModalComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(laminate__components__modal__modal$46template.ViewModalComponent0, () => ({
    __proto__: dart.getFields(laminate__components__modal__modal$46template.ViewModalComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_ModalControllerDirective_1_9]: dart.fieldType(src__laminate__components__modal__modal_controller_directive.ModalControllerDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(laminate__components__modal__modal$46template.ViewModalComponent0, {
    /*laminate__components__modal__modal$46template.ViewModalComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  laminate__components__modal__modal$46template.viewFactory_ModalComponent0 = function(parentView, parentIndex) {
    return new laminate__components__modal__modal$46template.ViewModalComponent0.new(parentView, parentIndex);
  };
  dart.fn(laminate__components__modal__modal$46template.viewFactory_ModalComponent0, AppViewAndintToAppViewOfModalComponent());
  laminate__components__modal__modal$46template._ViewModalComponent1 = class _ViewModalComponent1 extends src__core__linker__app_view.AppView$(laminate__components__modal__modal.ModalComponent) {
    build() {
      let _text_0 = html.Text.new('\n      ');
      let _text_1 = html.Text.new('\n    ');
      this.init((() => {
        let _ = [_text_0];
        _[$addAll](core.Iterable._check(this.projectableNodes[$_get](0)));
        _[$addAll]([_text_1]);
        return _;
      })(), null);
      return null;
    }
  };
  (laminate__components__modal__modal$46template._ViewModalComponent1.new = function(parentView, parentIndex) {
    laminate__components__modal__modal$46template._ViewModalComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = laminate__components__modal__modal$46template.ViewModalComponent0._renderType;
  }).prototype = laminate__components__modal__modal$46template._ViewModalComponent1.prototype;
  dart.addTypeTests(laminate__components__modal__modal$46template._ViewModalComponent1);
  dart.setMethodSignature(laminate__components__modal__modal$46template._ViewModalComponent1, () => ({
    __proto__: dart.getMethods(laminate__components__modal__modal$46template._ViewModalComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(laminate__components__modal__modal.ModalComponent), [])
  }));
  laminate__components__modal__modal$46template.viewFactory_ModalComponent1 = function(parentView, parentIndex) {
    return new laminate__components__modal__modal$46template._ViewModalComponent1.new(parentView, parentIndex);
  };
  dart.fn(laminate__components__modal__modal$46template.viewFactory_ModalComponent1, AppViewAndintToAppViewOfModalComponent());
  dart.defineLazy(laminate__components__modal__modal$46template, {
    /*laminate__components__modal__modal$46template.styles$ModalComponentHost*/get styles$ModalComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _ModalComponent_0_5 = Symbol('_ModalComponent_0_5');
  laminate__components__modal__modal$46template._ViewModalComponentHost0 = class _ViewModalComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new laminate__components__modal__modal$46template.ViewModalComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ModalComponent_0_5] = new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_ModalComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfModalComponent()).new(0, this, this.rootEl, this[_ModalComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(laminate__components__modal__modal.ModalComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(laminate__components__modal__modal.Modal)) && 0 === nodeIndex) {
        return this[_ModalComponent_0_5];
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
      this[_ModalComponent_0_5].ngOnDestroy();
    }
  };
  (laminate__components__modal__modal$46template._ViewModalComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ModalComponent_0_5] = null;
    laminate__components__modal__modal$46template._ViewModalComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = laminate__components__modal__modal$46template._ViewModalComponentHost0.prototype;
  dart.addTypeTests(laminate__components__modal__modal$46template._ViewModalComponentHost0);
  dart.setMethodSignature(laminate__components__modal__modal$46template._ViewModalComponentHost0, () => ({
    __proto__: dart.getMethods(laminate__components__modal__modal$46template._ViewModalComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(laminate__components__modal__modal$46template._ViewModalComponentHost0, () => ({
    __proto__: dart.getFields(laminate__components__modal__modal$46template._ViewModalComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(laminate__components__modal__modal$46template.ViewModalComponent0),
    [_ModalComponent_0_5]: dart.fieldType(laminate__components__modal__modal.ModalComponent)
  }));
  laminate__components__modal__modal$46template.viewFactory_ModalComponentHost0 = function(parentView, parentIndex) {
    return new laminate__components__modal__modal$46template._ViewModalComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(laminate__components__modal__modal$46template.viewFactory_ModalComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(laminate__components__modal__modal$46template, {
    /*laminate__components__modal__modal$46template.ModalComponentNgFactory*/get ModalComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfModalComponent()).new('modal', laminate__components__modal__modal$46template.viewFactory_ModalComponentHost0, laminate__components__modal__modal$46template._ModalComponentMetadata));
    },
    /*laminate__components__modal__modal$46template._ModalComponentMetadata*/get _ModalComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*laminate__components__modal__modal$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  laminate__components__modal__modal$46template.initReflector = function() {
    if (dart.test(laminate__components__modal__modal$46template._visited)) {
      return;
    }
    laminate__components__modal__modal$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), dart.fn(() => new laminate__components__modal__modal.GlobalModalStack.new(), VoidToGlobalModalStack()));
    src__di__reflector.registerComponent(dart.wrapType(laminate__components__modal__modal.ModalComponent), laminate__components__modal__modal$46template.ModalComponentNgFactory);
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    laminate__overlay__overlay$46template.initReflector();
    model__action__async_action$46template.initReflector();
    src__laminate__components__modal__modal_controller_directive$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(laminate__components__modal__modal$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/laminate/components/modal/modal.template.ddc", {
    "package:angular_components/laminate/components/modal/modal.template.dart": laminate__components__modal__modal$46template
  }, '{"version":3,"sourceRoot":"","sources":["modal.template.dart"],"names":[],"mappings":"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","file":"modal.template.ddc.js"}');
  // Exports:
  return {
    laminate__components__modal__modal$46template: laminate__components__modal__modal$46template
  };
});

//# sourceMappingURL=modal.template.ddc.js.map
