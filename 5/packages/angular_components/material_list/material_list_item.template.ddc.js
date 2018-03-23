define(['dart_sdk', 'packages/angular_components/material_list/material_list_item.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_list/material_list_item', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/a11y/active_item_mixin.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_list_item$46scss$46css, view_type, constants, view, app_view_utils, material_list_item, app_view, dom_service, material_dropdown_base, reflector, angular, button_decorator, material_dropdown_base$, active_item_mixin, dom_service$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_list__material_list_item$46scss$46css$46shim = material_list_item$46scss$46css.material_list__material_list_item$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_list__material_list_item = material_list_item.material_list__material_list_item;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const button_decorator__button_decorator$46template = button_decorator.button_decorator__button_decorator$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const model__a11y__active_item_mixin$46template = active_item_mixin.model__a11y__active_item_mixin$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_list__material_list_item$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialListItemComponent = () => (AppViewOfMaterialListItemComponent = dart.constFn(src__core__linker__app_view.AppView$(material_list__material_list_item.MaterialListItemComponent)))();
  let AppViewAndintToAppViewOfMaterialListItemComponent = () => (AppViewAndintToAppViewOfMaterialListItemComponent = dart.constFn(dart.fnType(AppViewOfMaterialListItemComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialListItemComponent = () => (ComponentRefOfMaterialListItemComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_list__material_list_item.MaterialListItemComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialListItemComponent = () => (ComponentFactoryOfMaterialListItemComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_list__material_list_item.MaterialListItemComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_list__material_list_item$46template, {
    /*material_list__material_list_item$46template.styles$MaterialListItemComponent*/get styles$MaterialListItemComponent() {
      return dart.constList([material_list__material_list_item$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  let const$;
  material_list__material_list_item$46template.ViewMaterialListItemComponent0 = class ViewMaterialListItemComponent0 extends src__core__linker__app_view.AppView$(material_list__material_list_item.MaterialListItemComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.project(parentRenderNode, 0);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]('mouseenter', this.eventHandler0(html.Event, dart.bind(_ctx, 'onMouseEnter')));
      _rootEl[$addEventListener]('mouseleave', this.eventHandler0(html.Event, dart.bind(_ctx, 'onMouseLeave')));
      _rootEl[$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      return null;
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.role == null)) {
          this.setAttr(this.rootEl, 'role', this.ctx.role == null ? null : dart.toString(this.ctx.role));
        }
      }
      let currVal_0 = this.ctx.tabIndex;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setProp(this.rootEl, 'tabIndex', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.ctx.active;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateElemClass(this.rootEl, 'active', currVal_1);
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
      let currVal_4 = this.ctx.disabled;
      if (!(this[_expr_4] == currVal_4)) {
        this.updateElemClass(this.rootEl, 'disabled', currVal_4);
        this[_expr_4] = currVal_4;
      }
    }
  };
  (material_list__material_list_item$46template.ViewMaterialListItemComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    material_list__material_list_item$46template.ViewMaterialListItemComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-list-item'));
    this.createAttr(this.rootEl, 'role', 'button');
    this.rootEl.className = 'item';
    let t = material_list__material_list_item$46template.ViewMaterialListItemComponent0._renderType;
    t == null ? material_list__material_list_item$46template.ViewMaterialListItemComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_list__material_list_item$46template.styles$MaterialListItemComponent) : t;
    this.setupComponentType(material_list__material_list_item$46template.ViewMaterialListItemComponent0._renderType);
  }).prototype = material_list__material_list_item$46template.ViewMaterialListItemComponent0.prototype;
  dart.addTypeTests(material_list__material_list_item$46template.ViewMaterialListItemComponent0);
  dart.setMethodSignature(material_list__material_list_item$46template.ViewMaterialListItemComponent0, () => ({
    __proto__: dart.getMethods(material_list__material_list_item$46template.ViewMaterialListItemComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_list__material_list_item.MaterialListItemComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_list__material_list_item$46template.ViewMaterialListItemComponent0, () => ({
    __proto__: dart.getFields(material_list__material_list_item$46template.ViewMaterialListItemComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_list__material_list_item$46template.ViewMaterialListItemComponent0, {
    /*material_list__material_list_item$46template.ViewMaterialListItemComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_list__material_list_item$46template.viewFactory_MaterialListItemComponent0 = function(parentView, parentIndex) {
    return new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_list__material_list_item$46template.viewFactory_MaterialListItemComponent0, AppViewAndintToAppViewOfMaterialListItemComponent());
  dart.defineLazy(material_list__material_list_item$46template, {
    /*material_list__material_list_item$46template.styles$MaterialListItemComponentHost*/get styles$MaterialListItemComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialListItemComponent_0_5 = Symbol('_MaterialListItemComponent_0_5');
  material_list__material_list_item$46template._ViewMaterialListItemComponentHost0 = class _ViewMaterialListItemComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialListItemComponent_0_5] = new material_list__material_list_item.MaterialListItemComponent.new(this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), null, null);
      this[_compView_0].create(this[_MaterialListItemComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialListItemComponent()).new(0, this, this.rootEl, this[_MaterialListItemComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_list__material_list_item.MaterialListItemComponent) && 0 === nodeIndex) {
        return this[_MaterialListItemComponent_0_5];
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
      this[_MaterialListItemComponent_0_5].ngOnDestroy();
    }
  };
  (material_list__material_list_item$46template._ViewMaterialListItemComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialListItemComponent_0_5] = null;
    material_list__material_list_item$46template._ViewMaterialListItemComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_list__material_list_item$46template._ViewMaterialListItemComponentHost0.prototype;
  dart.addTypeTests(material_list__material_list_item$46template._ViewMaterialListItemComponentHost0);
  dart.setMethodSignature(material_list__material_list_item$46template._ViewMaterialListItemComponentHost0, () => ({
    __proto__: dart.getMethods(material_list__material_list_item$46template._ViewMaterialListItemComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_list__material_list_item$46template._ViewMaterialListItemComponentHost0, () => ({
    __proto__: dart.getFields(material_list__material_list_item$46template._ViewMaterialListItemComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_0_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent)
  }));
  material_list__material_list_item$46template.viewFactory_MaterialListItemComponentHost0 = function(parentView, parentIndex) {
    return new material_list__material_list_item$46template._ViewMaterialListItemComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_list__material_list_item$46template.viewFactory_MaterialListItemComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_list__material_list_item$46template, {
    /*material_list__material_list_item$46template.MaterialListItemComponentNgFactory*/get MaterialListItemComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialListItemComponent()).new('material-list-item', material_list__material_list_item$46template.viewFactory_MaterialListItemComponentHost0, material_list__material_list_item$46template._MaterialListItemComponentMetadata));
    },
    /*material_list__material_list_item$46template._MaterialListItemComponentMetadata*/get _MaterialListItemComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_list__material_list_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_list__material_list_item$46template.initReflector = function() {
    if (dart.test(material_list__material_list_item$46template._visited)) {
      return;
    }
    material_list__material_list_item$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_list__material_list_item.MaterialListItemComponent), material_list__material_list_item$46template.MaterialListItemComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__a11y__active_item_mixin$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(material_list__material_list_item$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_list/material_list_item.template.ddc", {
    "package:angular_components/material_list/material_list_item.template.dart": material_list__material_list_item$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_list_item.template.dart"],"names":[],"mappings":"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","file":"material_list_item.template.ddc.js"}');
  // Exports:
  return {
    material_list__material_list_item$46template: material_list__material_list_item$46template
  };
});

//# sourceMappingURL=material_list_item.template.ddc.js.map
