define(['dart_sdk', 'packages/angular_components/material_select/material_select.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_select/material_select', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/src/di/reflector', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular/angular.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/utils/angular/properties/properties.template'], function(dart_sdk, material_select$46scss$46css, view_type, constants, view, app_view_utils, material_list, material_list$, app_view, ng_if, material_select, ng_for, selection_options, material_select_item, dom_service, material_dropdown_base, activation_handler, material_select_item$, selection_container, has_renderer, reflector, material_select_base, angular, select, selection_container$, selection_model, selection_options$, has_factory, has_renderer$, template_support, properties) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_select$46scss$46css$46shim = material_select$46scss$46css.material_select__material_select$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list = material_list$.material_list__material_list;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_select__material_select = material_select.material_select__material_select;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const src__di__reflector = reflector.src__di__reflector;
  const material_select__material_select_base$46template = material_select_base.material_select__material_select_base$46template;
  const angular$46template = angular.angular$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container$.model__selection__selection_container$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options$.model__selection__selection_options$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const model__ui__has_renderer$46template = has_renderer$.model__ui__has_renderer$46template;
  const model__ui__template_support$46template = template_support.model__ui__template_support$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const _root = Object.create(null);
  const material_select__material_select$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialSelectComponent = () => (AppViewOfMaterialSelectComponent = dart.constFn(src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent)))();
  let AppViewAndintToAppViewOfMaterialSelectComponent = () => (AppViewAndintToAppViewOfMaterialSelectComponent = dart.constFn(dart.fnType(AppViewOfMaterialSelectComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let intAnddynamicToObject = () => (intAnddynamicToObject = dart.constFn(dart.fnType(core.Object, [core.int, dart.dynamic])))();
  let JSArrayOfSelectionItem = () => (JSArrayOfSelectionItem = dart.constFn(_interceptors.JSArray$(model__selection__selection_container.SelectionItem)))();
  let ComponentRefOfMaterialSelectComponent = () => (ComponentRefOfMaterialSelectComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialSelectComponent = () => (ComponentFactoryOfMaterialSelectComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__material_select.MaterialSelectComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template.styles$MaterialSelectComponent*/get styles$MaterialSelectComponent() {
      return dart.constList([material_select__material_select$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialListComponent_0_5 = Symbol('_MaterialListComponent_0_5');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  material_select__material_select$46template.ViewMaterialSelectComponent0 = class ViewMaterialSelectComponent0 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialListComponent_0_5] = new material_list__material_list.MaterialListComponent.new();
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_select__material_select$46template.viewFactory_MaterialSelectComponent1);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_compView_0].create(this[_MaterialListComponent_0_5], [(() => {
          let _ = [this.projectableNodes[$_get](0)];
          _[$addAll]([this[_appEl_1]]);
          return _;
        })()]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_list__material_list.MaterialListComponent) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.width;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialListComponent_0_5].width = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_NgIf_1_9].ngIf = _ctx.options != null;
      this[_appEl_1].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
    }
    detectHostChanges(firstCheck) {
      let currVal_2 = this.ctx.disabledStr;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this.setAttr(this.rootEl, 'aria-disabled', currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
    }
  };
  (material_select__material_select$46template.ViewMaterialSelectComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialListComponent_0_5] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    material_select__material_select$46template.ViewMaterialSelectComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-select'));
    this.createAttr(this.rootEl, 'role', 'listbox');
    let t = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
    t == null ? material_select__material_select$46template.ViewMaterialSelectComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_select__material_select$46template.styles$MaterialSelectComponent) : t;
    this.setupComponentType(material_select__material_select$46template.ViewMaterialSelectComponent0._renderType);
  }).prototype = material_select__material_select$46template.ViewMaterialSelectComponent0.prototype;
  dart.addTypeTests(material_select__material_select$46template.ViewMaterialSelectComponent0);
  dart.setMethodSignature(material_select__material_select$46template.ViewMaterialSelectComponent0, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template.ViewMaterialSelectComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_select__material_select$46template.ViewMaterialSelectComponent0, () => ({
    __proto__: dart.getFields(material_select__material_select$46template.ViewMaterialSelectComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_0_5]: dart.fieldType(material_list__material_list.MaterialListComponent),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_select__material_select$46template.ViewMaterialSelectComponent0, {
    /*material_select__material_select$46template.ViewMaterialSelectComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_select__material_select$46template.viewFactory_MaterialSelectComponent0 = function(parentView, parentIndex) {
    return new material_select__material_select$46template.ViewMaterialSelectComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponent0, AppViewAndintToAppViewOfMaterialSelectComponent());
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  material_select__material_select$46template._ViewMaterialSelectComponent1 = class _ViewMaterialSelectComponent1 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'options-wrapper';
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_select__material_select$46template.viewFactory_MaterialSelectComponent2);
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (!(_ctx.trackByIndexFn == null)) {
          this[_NgFor_1_9].ngForTrackBy = intAnddynamicToObject()._check(_ctx.trackByIndexFn);
        }
      }
      let currVal_0 = _ctx.options.optionGroups;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_1_9].ngDoCheck();
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_select__material_select$46template._ViewMaterialSelectComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    material_select__material_select$46template._ViewMaterialSelectComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
  }).prototype = material_select__material_select$46template._ViewMaterialSelectComponent1.prototype;
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent1);
  dart.setMethodSignature(material_select__material_select$46template._ViewMaterialSelectComponent1, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template._ViewMaterialSelectComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select$46template._ViewMaterialSelectComponent1, () => ({
    __proto__: dart.getFields(material_select__material_select$46template._ViewMaterialSelectComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_select$46template.viewFactory_MaterialSelectComponent1 = function(parentView, parentIndex) {
    return new material_select__material_select$46template._ViewMaterialSelectComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponent1, AppViewAndintToAppViewOfMaterialSelectComponent());
  material_select__material_select$46template._ViewMaterialSelectComponent2 = class _ViewMaterialSelectComponent2 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.createAttr(this[_el_0], 'group', '');
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_select__material_select$46template.viewFactory_MaterialSelectComponent3);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]('$implicit'));
      this[_NgIf_1_9].ngIf = local_group.isNotEmpty;
      this[_appEl_1].detectChangesInNestedViews();
      let currVal_0 = local_group.isEmpty;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateClass(this[_el_0], 'empty', currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_select__material_select$46template._ViewMaterialSelectComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    material_select__material_select$46template._ViewMaterialSelectComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
  }).prototype = material_select__material_select$46template._ViewMaterialSelectComponent2.prototype;
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent2);
  dart.setMethodSignature(material_select__material_select$46template._ViewMaterialSelectComponent2, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template._ViewMaterialSelectComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select$46template._ViewMaterialSelectComponent2, () => ({
    __proto__: dart.getFields(material_select__material_select$46template._ViewMaterialSelectComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  material_select__material_select$46template.viewFactory_MaterialSelectComponent2 = function(parentView, parentIndex) {
    return new material_select__material_select$46template._ViewMaterialSelectComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponent2, AppViewAndintToAppViewOfMaterialSelectComponent());
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _expr_1 = Symbol('_expr_1');
  material_select__material_select$46template._ViewMaterialSelectComponent3 = class _ViewMaterialSelectComponent3 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], material_select__material_select$46template.viewFactory_MaterialSelectComponent4);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_select__material_select$46template.viewFactory_MaterialSelectComponent5);
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init([this[_appEl_0], this[_appEl_1]], null);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.locals[$_get]('$implicit'));
      this[_NgIf_0_9].ngIf = local_group.hasLabel;
      let currVal_1 = local_group;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_NgFor_1_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_NgFor_1_9].ngDoCheck();
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (material_select__material_select$46template._ViewMaterialSelectComponent3.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_1] = null;
    material_select__material_select$46template._ViewMaterialSelectComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
  }).prototype = material_select__material_select$46template._ViewMaterialSelectComponent3.prototype;
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent3);
  dart.setMethodSignature(material_select__material_select$46template._ViewMaterialSelectComponent3, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template._ViewMaterialSelectComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select$46template._ViewMaterialSelectComponent3, () => ({
    __proto__: dart.getFields(material_select__material_select$46template._ViewMaterialSelectComponent3.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_select$46template.viewFactory_MaterialSelectComponent3 = function(parentView, parentIndex) {
    return new material_select__material_select$46template._ViewMaterialSelectComponent3.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponent3, AppViewAndintToAppViewOfMaterialSelectComponent());
  const _text_1 = Symbol('_text_1');
  material_select__material_select$46template._ViewMaterialSelectComponent4 = class _ViewMaterialSelectComponent4 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this.createAttr(this[_el_0], 'label', '');
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__selection__selection_options.OptionGroup._check(this.parentView.parentView.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_group.uiDisplayName);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_select__material_select$46template._ViewMaterialSelectComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_select__material_select$46template._ViewMaterialSelectComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
  }).prototype = material_select__material_select$46template._ViewMaterialSelectComponent4.prototype;
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent4);
  dart.setMethodSignature(material_select__material_select$46template._ViewMaterialSelectComponent4, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template._ViewMaterialSelectComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select$46template._ViewMaterialSelectComponent4, () => ({
    __proto__: dart.getFields(material_select__material_select$46template._ViewMaterialSelectComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_select$46template.viewFactory_MaterialSelectComponent4 = function(parentView, parentIndex) {
    return new material_select__material_select$46template._ViewMaterialSelectComponent4.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponent4, AppViewAndintToAppViewOfMaterialSelectComponent());
  const _MaterialSelectItemComponent_0_5 = Symbol('_MaterialSelectItemComponent_0_5');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  let const$0;
  material_select__material_select$46template._ViewMaterialSelectComponent5 = class _ViewMaterialSelectComponent5 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialSelectItemComponent_0_5] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_5], [const$0 || (const$0 = dart.constList([], dart.dynamic))]);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent) || token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
        return this[_MaterialSelectItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_item = this.locals[$_get]('$implicit');
      let currVal_0 = dart.test(_ctx.disabled) || dart.test(_ctx.isOptionDisabled(local_item));
      if (!(this[_expr_0] === currVal_0)) {
        this[_MaterialSelectItemComponent_0_5].disabled = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.componentRenderer;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_MaterialSelectItemComponent_0_5].componentRenderer = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.factoryRenderer;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MaterialSelectItemComponent_0_5].factoryRenderer = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_item;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_MaterialSelectItemComponent_0_5].value = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.itemRenderer;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_MaterialSelectItemComponent_0_5].itemRenderer = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.selection;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_MaterialSelectItemComponent_0_5].selection = currVal_5;
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialSelectItemComponent_0_5].ngOnDestroy();
    }
  };
  (material_select__material_select$46template._ViewMaterialSelectComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialSelectItemComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_select__material_select$46template._ViewMaterialSelectComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
  }).prototype = material_select__material_select$46template._ViewMaterialSelectComponent5.prototype;
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent5);
  dart.setMethodSignature(material_select__material_select$46template._ViewMaterialSelectComponent5, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template._ViewMaterialSelectComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select$46template._ViewMaterialSelectComponent5, () => ({
    __proto__: dart.getFields(material_select__material_select$46template._ViewMaterialSelectComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_0_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic)
  }));
  material_select__material_select$46template.viewFactory_MaterialSelectComponent5 = function(parentView, parentIndex) {
    return new material_select__material_select$46template._ViewMaterialSelectComponent5.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponent5, AppViewAndintToAppViewOfMaterialSelectComponent());
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template.styles$MaterialSelectComponentHost*/get styles$MaterialSelectComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialSelectComponent_0_5 = Symbol('_MaterialSelectComponent_0_5');
  const _query_SelectionItem_0_0_isDirty = Symbol('_query_SelectionItem_0_0_isDirty');
  material_select__material_select$46template._ViewMaterialSelectComponentHost0 = class _ViewMaterialSelectComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_select__material_select$46template.ViewMaterialSelectComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialSelectComponent_0_5] = new material_select__material_select.MaterialSelectComponent.new();
      this[_MaterialSelectComponent_0_5].selectItems = JSArrayOfSelectionItem().of([]);
      this[_compView_0].create(this[_MaterialSelectComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialSelectComponent()).new(0, this, this.rootEl, this[_MaterialSelectComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_select__material_select.MaterialSelectComponent) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(model__selection__selection_container.SelectionContainer)) && 0 === nodeIndex) {
        return this[_MaterialSelectComponent_0_5];
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
  (material_select__material_select$46template._ViewMaterialSelectComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSelectComponent_0_5] = null;
    this[_query_SelectionItem_0_0_isDirty] = true;
    material_select__material_select$46template._ViewMaterialSelectComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_select__material_select$46template._ViewMaterialSelectComponentHost0.prototype;
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponentHost0);
  dart.setMethodSignature(material_select__material_select$46template._ViewMaterialSelectComponentHost0, () => ({
    __proto__: dart.getMethods(material_select__material_select$46template._ViewMaterialSelectComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__material_select$46template._ViewMaterialSelectComponentHost0, () => ({
    __proto__: dart.getFields(material_select__material_select$46template._ViewMaterialSelectComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_select__material_select$46template.ViewMaterialSelectComponent0),
    [_MaterialSelectComponent_0_5]: dart.fieldType(material_select__material_select.MaterialSelectComponent),
    [_query_SelectionItem_0_0_isDirty]: dart.fieldType(core.bool)
  }));
  material_select__material_select$46template.viewFactory_MaterialSelectComponentHost0 = function(parentView, parentIndex) {
    return new material_select__material_select$46template._ViewMaterialSelectComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template.MaterialSelectComponentNgFactory*/get MaterialSelectComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSelectComponent()).new('material-select', material_select__material_select$46template.viewFactory_MaterialSelectComponentHost0, material_select__material_select$46template._MaterialSelectComponentMetadata));
    },
    /*material_select__material_select$46template._MaterialSelectComponentMetadata*/get _MaterialSelectComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_select__material_select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_select$46template.initReflector = function() {
    if (dart.test(material_select__material_select$46template._visited)) {
      return;
    }
    material_select__material_select$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__material_select.MaterialSelectComponent), material_select__material_select$46template.MaterialSelectComponentNgFactory);
    material_select__material_select_base$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    angular$46template.initReflector();
    material_list__material_list$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    model__ui__template_support$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
  };
  dart.fn(material_select__material_select$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_select/material_select.template.ddc", {
    "package:angular_components/material_select/material_select.template.dart": material_select__material_select$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_select.template.dart"],"names":[],"mappings":";;;;QAuSc,IAAO;;;;QA9OuC,oDAAO;;;;QAc/C,iCAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAdR,0EAA8B;YAAG,iBAAO,AAAQ,oDAAD,OAAO;;;;;;;;;;;;;AAmBtE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,uBAAW,GAAG,IAAI,sEAAkC,CAAC,MAAM;AAC3D,iBAAK,GAAG,iBAAW,OAAO;AAC1B,sBAAgB,SAAO,CAAC,WAAK;AAC7B,mBAAQ,CAAC,AAsNC,IAAO,oBAtNR,WAAK;AACd,sCAA0B,GAAG,IAAI,sDAA6B;AAC9D,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,gFAAoC;AAC7F,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,uBAAW,OAAO,CAAC,gCAA0B,EAAE;kBAC7C,CAAU,qBAAgB,QAAC;qBAAY,CAAC,cAAQ;;;AAElD,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAU,iEAAqB,IAAO,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI,GAAM;AAC/F,cAAO,iCAA0B;;AAEnC,YAAO,eAAc;IACvB;;AAIE,UAAsC,OAAO,QAAG;AAChD,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,aAAO,GAAG;AACV,UAAM,YAAY,IAAI,MAAM;AAC5B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wCAA0B,MAAM,GAAG,SAAS;AAC5C,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,qBAAS,KAAK,GAAI,IAAI,QAAQ,IAAI;AAClC,oBAAQ,2BAA2B;AACnC,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;IAC3B;;AAIE,4BAAQ;;AACR,gCAAW;;IACb;sBAEuB,UAAe;AACpC,UAAM,YAAY,QAAG,YAAY;AACjC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,oBAAO,CAAC,WAAM,EAAE,iBAAiB,SAAS,gCAAT,SAAS;AAC1C,qBAAO,GAAG,SAAS;;IAEvB;;2FAnE6B,UAA2B,EAAE,WAAe;IARzD,WAAK;IACc,iBAAW;IAChB,gCAA0B;IAC1C,cAAQ;IACjB,eAAS;IACV,aAAO;IACP,aAAO;AAEkE,sGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC7K,eAAM,GAAG,AAkOC,IAAO,oBAlOR,AAAQ,AAkOP,IAAO,SAlOQ,gBAAc,CAAC;AACxC,mBAAU,CAAC,WAAM,EAAE,QAAQ;AAC3B,gGAAW;gBAAX,oFAAW,GAAK,AAAA,AAAS,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,0EAA8B;AACrH,2BAAkB,CAAC,oFAAW;EAChC;;;;;;;;;;;;4BA8NY,IAAO;;;;;;;;;MApOQ,oFAAW;;;;;8FAuEsC,UAA2B,EAAE,WAAe;AACxH,UAAO,KAAI,4EAA4B,CAAC,UAAU,EAAE,WAAW;EACjE;;;;;AAYI,UAAI,MAAc,AA+IR,IAAO,SA/IS;AAC1B,iBAAK,GAAG,AA8IE,IAAO,mBA9IT,GAAG,gBAAc,CAAC;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,gFAAoC;AAC7F,sBAAU,GAAG,IAAI,yCAAc,CAAC,cAAQ,EAAE,gBAAgB;AAC1D,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAsC,OAAO,QAAG;AAChD,UAAK,aAAc,YAAY,KAAI;AACnC,UAAI,UAAU,EAAE;AACd,cAAK,AAAU,IAAI,eAAe,IAAE,OAAO;AACzC,UAAC,gBAAU,aAAa,kCAAG,IAAI,eAAe;;;AAGlD,UAAM,YAAY,IAAI,QAAQ,aAAa;AAC3C,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,sBAAU,UAAU;AACpB,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;IACV;;4FAvC8B,UAA2B,EAAE,WAAe;IAJvD,WAAK;IACV,cAAQ;IACP,gBAAU;IACrB,aAAO;AACmE,uGAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC7K,sBAAa,GAAG,wEAA4B,YAAY;EAC1D;;;;;;;;;;4BAkJY,IAAO;;;;;8FA1GyD,UAA2B,EAAE,WAAe;AACxH,UAAO,KAAI,6EAA6B,CAAC,UAAU,EAAE,WAAW;EAClE;;;;AAYI,UAAI,MAAc,AA4FR,IAAO,SA5FS;AAC1B,iBAAK,GAAG,AA2FE,IAAO,mBA3FT,GAAG,gBAAc,CAAC;AAC1B,qBAAU,CAAC,WAAK,EAAE,SAAS;AAC3B,mBAAQ,CAAC,WAAK;AACd,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,gFAAoC;AAC7F,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAoC,qEAAc,WAAM,QAAC;AACzD,qBAAS,KAAK,GAAG,WAAW,WAAW;AACvC,oBAAQ,2BAA2B;AACnC,UAAM,YAAY,WAAW,QAAQ;AACrC,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,wBAAW,CAAC,WAAK,EAAE,SAAS,SAAS;AACrC,qBAAO,GAAG,SAAS;;IAEvB;;AAIE,4BAAQ;;IACV;;4FAjC8B,UAA2B,EAAE,WAAe;IAJvD,WAAK;IACV,cAAQ;IACjB,eAAS;IACT,aAAO;AACkE,uGAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC/L,sBAAa,GAAG,wEAA4B,YAAY;EAC1D;;;;;;;;;;4BA+FY,IAAO;;;;;8FA7DyD,UAA2B,EAAE,WAAe;AACxH,UAAO,KAAI,6EAA6B,CAAC,UAAU,EAAE,WAAW;EAClE;;;;;;;AAaI,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACrD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,gFAAoC;AAC7F,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACrD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,gFAAoC;AAC7F,sBAAU,GAAG,IAAI,yCAAc,CAAC,cAAQ,EAAE,gBAAgB;AAC1D,eAAI,CAAC,CAAC,cAAQ,EAAE,cAAQ,GAAG;AAC3B,YAAO;IACT;;AAIE,UAAoC,qEAAc,eAAU,OAAO,QAAC;AACpE,qBAAS,KAAK,GAAG,WAAW,SAAS;AACrC,UAAM,YAAY,WAAW;AAC7B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,sBAAU,UAAU;AACpB,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;AACR,6BAAQ;;IACV;;4FAnC8B,UAA2B,EAAE,WAAe;IAL5D,cAAQ;IACjB,eAAS;IACA,cAAQ;IACP,gBAAU;IACrB,aAAO;AACmE,uGAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC7K,sBAAa,GAAG,wEAA4B,YAAY;EAC1D;;;;;;;;;;;;;;;;8FAoC4E,UAA2B,EAAE,WAAe;AACxH,UAAO,KAAI,6EAA6B,CAAC,UAAU,EAAE,WAAW;EAClE;;;;;AAWI,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,qBAAU,CAAC,WAAK,EAAE,SAAS;AAC3B,mBAAQ,CAAC,WAAK;AACd,mBAAO,GAJG,AAIA,AAAI,IAJG,SAIS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAoC,qEAAc,eAAU,WAAW,OAAO,QAAC;AAC/E,UAAM,YA7OU,AA6OE,AAAS,iCA7OH,aA6Oe,CAAC,WAAW,cAAc;AACjE,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;4FAvB8B,UAA2B,EAAE,WAAe;IAH1D,WAAK;IACR,aAAO;IAChB,aAAO;AACmE,uGAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC7K,sBAAa,GAAG,wEAA4B,YAAY;EAC1D;;;;;;;;;4BAGY,IAAO;8BAAP,IAAO;;;8FAqByD,UAA2B,EAAE,WAAe;AACxH,UAAO,KAAI,6EAA6B,CAAC,UAAU,EAAE,WAAW;EAClE;;;;;;;;;AAiBI,uBAAW,GAAG,IAAI,qFAAyC,CAAC,MAAM;AAClE,iBAAK,GAAG,iBAAW,OAAO;AAC1B,mBAAQ,CA1CE,AA0CD,IA1CQ,oBA0CR,WAAK;AACd,4CAAgC,GAAG,IAAI,qEAAoC,CA3CjE,AA2CkE,IA3C3D,oBA2C2D,WAAK,8DAAE,eAAU,WAAW,WAAW,WAAW,WAAW,YAAY,CAAU,kEAAU,EAAE,eAAU,WAAW,WAAW,WAAW,SAAS,YAAY,yDAAG,eAAU,WAAW,WAAW,WAAW,WAAW,YAAY,CAAU,4DAAc,EAAE,eAAU,WAAW,WAAW,WAAW,SAAS,YAAY,EAAE,qEAAO,eAAU,WAAW,WAAW,WAAW,WAAW,YAAY,CAAU,oEAAiB,EAAE,eAAU,WAAW,WAAW,WAAW,SAAS,YAAY,EAAE,QAAO,iBAAW,IAAI;AAC1kB,uBAAW,OAAO,CAAC,sCAAgC,EAAE,CAAC;AACtD,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,WAAO,AAAU,KAAK,KAAW,gFAA2B,IAAK,AAAU,KAAK,KAAW,kEAAa,IAAM,AAAU,KAAK,KAAW,kDAAW,KAAO,MAAK,SAAS,EAAI;AAC1K,cAAO,uCAAgC;;AAEzC,YAAO,eAAc;IACvB;;AAIE,UAAsC,OAAO,QAAG;AAChD,UAAK,aAAc,YAAY,KAAI;AACnC,UAAM,aAAa,WAAM,QAAC;AAC1B,UAAM,YAA2B,UAAd,IAAI,SAAS,eAAI,IAAI,iBAAiB,CAAC,UAAU;AACpE,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,8CAAgC,SAAS,GAAG,SAAS;AACrD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,kBAAkB;AACxC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,8CAAgC,kBAAkB,GAAG,SAAS;AAC9D,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,gBAAgB;AACtC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,8CAAgC,gBAAgB,GAAG,SAAS;AAC5D,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,UAAU;AAC5B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,8CAAgC,MAAM,GAAG,SAAS;AAClD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,aAAa;AACnC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,8CAAgC,aAAa,GAAG,SAAS;AACzD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU;AAChC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,8CAAgC,UAAU,GAAG,SAAS;AACtD,qBAAO,GAAG,SAAS;;AAErB,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;AACX,4CAAgC,YAAY;IAC9C;;4FAjE8B,UAA2B,EAAE,WAAe;IAT1D,WAAK;IACqB,iBAAW;IAChB,sCAAgC;IAChE,aAAO;IACR,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;AACmE,uGAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC/L,sBAAa,GAAG,wEAA4B,YAAY;EAC1D;;;;;;;;;;;4BArCY,IAAO;;;;;;;;;;8FAuGyD,UAA2B,EAAE,WAAe;AACxH,UAAO,KAAI,6EAA6B,CAAC,UAAU,EAAE,WAAW;EAClE;;;MAEoB,8EAAkC;YAAG;;;;;;;AASrD,uBAAW,GAAG,IAAI,4EAA4B,CAAC,MAAM;AACrD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,wCAA4B,GAAG,IAAI,4DAA+B;AAClE,wCAA4B,YAAY,GAAG;AAC3C,uBAAW,OAAO,CAAC,kCAA4B,EAAE,qBAAgB;AACjE,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,6CAA6C,CAAC,GAAG,MAAM,WAAM,EAAE,kCAA4B;IACxG;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,WAAO,AAAU,KAAK,KAAU,uEAAuB,IAAK,AAAU,KAAK,KAAW,kDAAW,IAAM,AAAU,KAAK,KAAW,uEAAkB,KAAO,MAAK,SAAS,EAAI;AAC1K,cAAO,mCAA4B;;AAErC,YAAO,eAAc;IACvB;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;gGA9BkC,UAA2B,EAAE,WAAe;IAHjD,iBAAW;IACR,kCAA4B;IACvD,sCAAgC,GAAG;AAC0C,2GAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;;kGAiCjI,UAA2B,EAAE,WAAe;AAC3F,UAAO,KAAI,iFAAiC,CAAC,UAAU,EAAE,WAAW;EACtE;;;MAEwD,4EAAgC;YAAG,gBAAM,iDAAiD,CAAC,mBAAmB,oFAAwC,EAAE,4EAAgC;;MAC1O,4EAAgC;YAAG;;MACrC,oDAAQ;YAAG;;;;;AAEb,kBAAI,oDAAQ,GAAE;AACZ;;AAEF,2DAAW;AAEX,IAAO,oCAAiB,CAAC,uEAAuB,EAAE,4EAAgC;AAClF,IAAM,8DAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,qDAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,gDAAa;AACnB,IAAO,oDAAa;AACpB,IAAO,+DAAa;EACtB","file":"material_select.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select$46template: material_select__material_select$46template
  };
});

//# sourceMappingURL=material_select.template.ddc.js.map
