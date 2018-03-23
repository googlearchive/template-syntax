define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/src/material_tree/group/material_tree_group', 'packages/angular_components/src/material_tree/material_tree_impl', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/src/material_tree/group/material_tree_group.template', 'packages/angular_components/src/material_tree/material_tree_root', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/src/material_tree/group/material_tree_group_flat.template', 'packages/angular_components/src/material_tree/group/material_tree_group_flat', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/src/material_tree/material_tree_rendering_options.template', 'packages/angular_components/src/material_tree/material_tree_root.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_if, material_tree_group, material_tree_impl, ng_for, material_tree_group$, material_tree_root, material_dropdown_base, opaque_token, selection_options, material_tree_group_flat, material_tree_group_flat$, reflector, angular, select, selection_container, selection_model, selection_options$, has_factory, material_tree_rendering_options, material_tree_root$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
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
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__material_tree__group__material_tree_group = material_tree_group.src__material_tree__group__material_tree_group;
  const src__material_tree__material_tree_impl = material_tree_impl.src__material_tree__material_tree_impl;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__material_tree__group__material_tree_group$46template = material_tree_group$.src__material_tree__group__material_tree_group$46template;
  const src__material_tree__material_tree_root = material_tree_root.src__material_tree__material_tree_root;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const src__material_tree__group__material_tree_group_flat$46template = material_tree_group_flat.src__material_tree__group__material_tree_group_flat$46template;
  const src__material_tree__group__material_tree_group_flat = material_tree_group_flat$.src__material_tree__group__material_tree_group_flat;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container.model__selection__selection_container$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options$.model__selection__selection_options$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const src__material_tree__material_tree_rendering_options$46template = material_tree_rendering_options.src__material_tree__material_tree_rendering_options$46template;
  const src__material_tree__material_tree_root$46template = material_tree_root$.src__material_tree__material_tree_root$46template;
  const _root = Object.create(null);
  const src__material_tree__material_tree_impl$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $toString = dartx.toString;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfMaterialTreeGroupComponent = () => (JSArrayOfMaterialTreeGroupComponent = dart.constFn(_interceptors.JSArray$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let ListOfMaterialTreeGroupComponent = () => (ListOfMaterialTreeGroupComponent = dart.constFn(core.List$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let _ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent = () => (_ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(ListOfMaterialTreeGroupComponent(), [src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2])))();
  let _ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent = () => (_ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(ListOfMaterialTreeGroupComponent(), [src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1])))();
  let AppViewOfMaterialTreeComponent = () => (AppViewOfMaterialTreeComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeComponent = () => (AppViewAndintToAppViewOfMaterialTreeComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeComponent = () => (ComponentRefOfMaterialTreeComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTreeComponent = () => (ComponentFactoryOfMaterialTreeComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__material_tree_impl.MaterialTreeComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template.styles$MaterialTreeComponent*/get styles$MaterialTreeComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _query_MaterialTreeGroupComponent_1_0_isDirty = Symbol('_query_MaterialTreeGroupComponent_1_0_isDirty');
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  let const$;
  const _MaterialTreeGroupComponent_0_5 = Symbol('_MaterialTreeGroupComponent_0_5');
  src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0 = class ViewMaterialTreeComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent1);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent3);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.supportsHierarchy;
      this[_NgIf_1_9].ngIf = !dart.test(_ctx.supportsHierarchy);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      if (dart.test(this[_query_MaterialTreeGroupComponent_1_0_isDirty])) {
        this.ctx.treeGroupNodes = this[_appEl_0].mapNestedViews(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1, dart.fn(nestedView => nestedView[_appEl_0].mapNestedViews(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2, dart.fn(nestedView => JSArrayOfMaterialTreeGroupComponent().of([nestedView[_MaterialTreeGroupComponent_0_5]]), _ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent())), _ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent()));
        this[_query_MaterialTreeGroupComponent_1_0_isDirty] = false;
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1];
      t$ == null ? null : t$.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let currVal_2 = this.ctx.role;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this.setAttr(this.rootEl, 'role', currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = dart.test(this.ctx.showFlatCheck) ? 'true' : 'false';
      if (!(this[_expr_3] === currVal_3)) {
        this.setAttr(this.rootEl, 'aria-multiselectable', currVal_3[$toString]());
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = dart.test(this.ctx.showFlatList) ? 'true' : 'false';
      if (!(this[_expr_4] === currVal_4)) {
        this.setAttr(this.rootEl, 'aria-readonly', currVal_4[$toString]());
        this[_expr_4] = currVal_4;
      }
    }
  };
  (src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.new = function(parentView, parentIndex) {
    this[_query_MaterialTreeGroupComponent_1_0_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-tree'));
    let t = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
    t == null ? src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__material_tree__material_tree_impl$46template.styles$MaterialTreeComponent) : t;
    this.setupComponentType(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType);
  }).prototype = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.__proto__),
    [_query_MaterialTreeGroupComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, {
    /*src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent0, AppViewAndintToAppViewOfMaterialTreeComponent());
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  const _expr_0 = Symbol('_expr_0');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1 = class _ViewMaterialTreeComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent2);
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init0(this[_appEl_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.options.optionGroups;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_0_9].ngDoCheck();
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent1, AppViewAndintToAppViewOfMaterialTreeComponent());
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _expr_1 = Symbol('_expr_1');
  let const$0;
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2 = class _ViewMaterialTreeComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_MaterialTreeGroupComponent_0_5] = new src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), core.int._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'))), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeGroupComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) && 0 === nodeIndex) {
        return this[_MaterialTreeGroupComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]('$implicit'));
      let local_optionIndex = core.int._check(this.locals[$_get]('index'));
      let currVal_0 = local_group;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialTreeGroupComponent_0_5].group = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.allowParentSingleSelection;
      if (!(this[_expr_1] == currVal_1)) {
        this[_MaterialTreeGroupComponent_0_5].allowParentSingleSelection = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.maxInitialOptionsShown(local_group, local_optionIndex);
      if (!(this[_expr_2] == currVal_2)) {
        this[_MaterialTreeGroupComponent_0_5].maxInitialOptionsShown = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.shouldExpand(local_group, local_optionIndex);
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialTreeGroupComponent_0_5].expandAll = currVal_3;
        this[_expr_3] = currVal_3;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.as(this.parentView.parentView)[_query_MaterialTreeGroupComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialTreeGroupComponent_0_5].ngOnDestroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialTreeGroupComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null, 'index', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0),
    [_MaterialTreeGroupComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.int),
    [_expr_3]: dart.fieldType(core.bool)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent2, AppViewAndintToAppViewOfMaterialTreeComponent());
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3 = class _ViewMaterialTreeComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent4);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent6);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent8);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init([this[_appEl_0], this[_appEl_1], this[_appEl_2]], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.showFlatList;
      this[_NgIf_1_9].ngIf = _ctx.showFlatRadio;
      this[_NgIf_2_9].ngIf = _ctx.showFlatCheck;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_2];
      t$0 == null ? null : t$0.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent3, AppViewAndintToAppViewOfMaterialTreeComponent());
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4 = class _ViewMaterialTreeComponent4 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent5);
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init0(this[_appEl_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.options.optionGroups;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_0_9].ngDoCheck();
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent4 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent4, AppViewAndintToAppViewOfMaterialTreeComponent());
  const _MaterialTreeGroupFlatListComponent_0_5 = Symbol('_MaterialTreeGroupFlatListComponent_0_5');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5 = class _ViewMaterialTreeComponent5 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_MaterialTreeGroupFlatListComponent_0_5] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialTreeGroupFlatListComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) && 0 === nodeIndex) {
        return this[_MaterialTreeGroupFlatListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_group;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialTreeGroupFlatListComponent_0_5].group = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialTreeGroupFlatListComponent_0_5] = null;
    this[_expr_0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0),
    [_MaterialTreeGroupFlatListComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent5 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent5, AppViewAndintToAppViewOfMaterialTreeComponent());
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6 = class _ViewMaterialTreeComponent6 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent7);
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init0(this[_appEl_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.options.optionGroups;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_0_9].ngDoCheck();
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent6 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent6, AppViewAndintToAppViewOfMaterialTreeComponent());
  const _MaterialTreeGroupFlatRadioComponent_0_5 = Symbol('_MaterialTreeGroupFlatRadioComponent_0_5');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7 = class _ViewMaterialTreeComponent7 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_MaterialTreeGroupFlatRadioComponent_0_5] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeGroupFlatRadioComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) && 0 === nodeIndex) {
        return this[_MaterialTreeGroupFlatRadioComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_group;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialTreeGroupFlatRadioComponent_0_5].group = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialTreeGroupFlatRadioComponent_0_5] = null;
    this[_expr_0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0),
    [_MaterialTreeGroupFlatRadioComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent7 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent7, AppViewAndintToAppViewOfMaterialTreeComponent());
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8 = class _ViewMaterialTreeComponent8 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent9);
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init0(this[_appEl_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.options.optionGroups;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_0_9].ngDoCheck();
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent8 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent8, AppViewAndintToAppViewOfMaterialTreeComponent());
  const _MaterialTreeGroupFlatCheckComponent_0_5 = Symbol('_MaterialTreeGroupFlatCheckComponent_0_5');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9 = class _ViewMaterialTreeComponent9 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent) {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_MaterialTreeGroupFlatCheckComponent_0_5] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeGroupFlatCheckComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) && 0 === nodeIndex) {
        return this[_MaterialTreeGroupFlatCheckComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_group = model__selection__selection_options.OptionGroup._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_group;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialTreeGroupFlatCheckComponent_0_5].group = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialTreeGroupFlatCheckComponent_0_5] = null;
    this[_expr_0] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._renderType;
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0),
    [_MaterialTreeGroupFlatCheckComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent9 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent9, AppViewAndintToAppViewOfMaterialTreeComponent());
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template.styles$MaterialTreeComponentHost*/get styles$MaterialTreeComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeComponent_0_5 = Symbol('_MaterialTreeComponent_0_5');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0 = class _ViewMaterialTreeComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTreeComponent_0_5] = new src__material_tree__material_tree_impl.MaterialTreeComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex, null)), null);
      this[_compView_0].create(this[_MaterialTreeComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeComponent()).new(0, this, this.rootEl, this[_MaterialTreeComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(src__material_tree__material_tree_impl.MaterialTreeComponent) || token === dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot)) && 0 === nodeIndex) {
        return this[_MaterialTreeComponent_0_5];
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
  (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTreeComponent_0_5] = null;
    src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0);
  dart.setMethodSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0),
    [_MaterialTreeComponent_0_5]: dart.fieldType(src__material_tree__material_tree_impl.MaterialTreeComponent)
  }));
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template.MaterialTreeComponentNgFactory*/get MaterialTreeComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeComponent()).new('material-tree', src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0, src__material_tree__material_tree_impl$46template._MaterialTreeComponentMetadata));
    },
    /*src__material_tree__material_tree_impl$46template._MaterialTreeComponentMetadata*/get _MaterialTreeComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__material_tree_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_impl$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_impl$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_impl$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__material_tree_impl.MaterialTreeComponent), src__material_tree__material_tree_impl$46template.MaterialTreeComponentNgFactory);
    angular$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    src__material_tree__group__material_tree_group$46template.initReflector();
    src__material_tree__group__material_tree_group_flat$46template.initReflector();
    src__material_tree__material_tree_rendering_options$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
  };
  dart.fn(src__material_tree__material_tree_impl$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tree/material_tree_impl.template.ddc", {
    "package:angular_components/src/material_tree/material_tree_impl.template.dart": src__material_tree__material_tree_impl$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_impl.template.dart"],"names":[],"mappings":"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","file":"material_tree_impl.template.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_impl$46template: src__material_tree__material_tree_impl$46template
  };
});

//# sourceMappingURL=material_tree_impl.template.ddc.js.map
