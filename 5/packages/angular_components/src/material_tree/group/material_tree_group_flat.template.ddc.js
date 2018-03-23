define(['dart_sdk', 'packages/angular_components/src/material_tree/group/material_tree_group_flat_list.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/src/material_tree/group/material_tree_group_flat', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular/src/core/linker/dynamic_component_loader', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/src/material_tree/material_tree_root', 'packages/angular_components/src/material_tree/group/material_tree_group_flat_radio.scss.css.shim', 'packages/angular_components/material_radio/material_radio.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/material_radio/material_radio', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/material_tree/group/material_tree_group_flat_check.scss.css.shim', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/src/material_tree/material_tree_node.template', 'packages/angular_components/src/material_tree/material_tree_root.template'], function(dart_sdk, material_tree_group_flat_list$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_for, material_tree_group_flat, ng_if, dynamic_component, dynamic_component_loader, dynamic_component$, material_tree_root, material_tree_group_flat_radio$46scss$46css, material_radio, ng_zone, material_radio$, material_dropdown_base, material_tree_group_flat_check$46scss$46css, material_checkbox, material_checkbox$, reflector, angular, button_decorator, material_dropdown_base$, selection_model, material_tree_node, material_tree_root$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim = material_tree_group_flat_list$46scss$46css.src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__material_tree__group__material_tree_group_flat = material_tree_group_flat.src__material_tree__group__material_tree_group_flat;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const dynamic_component__dynamic_component$46template = dynamic_component.dynamic_component__dynamic_component$46template;
  const src__core__linker__dynamic_component_loader = dynamic_component_loader.src__core__linker__dynamic_component_loader;
  const dynamic_component__dynamic_component = dynamic_component$.dynamic_component__dynamic_component;
  const src__material_tree__material_tree_root = material_tree_root.src__material_tree__material_tree_root;
  const src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim = material_tree_group_flat_radio$46scss$46css.src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim;
  const material_radio__material_radio_group$46template = material_radio.material_radio__material_radio_group$46template;
  const material_radio__material_radio$46template = material_radio.material_radio__material_radio$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const material_radio__material_radio_group = material_radio$.material_radio__material_radio_group;
  const material_radio__material_radio = material_radio$.material_radio__material_radio;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim = material_tree_group_flat_check$46scss$46css.src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const button_decorator__button_decorator$46template = button_decorator.button_decorator__button_decorator$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const src__material_tree__material_tree_node$46template = material_tree_node.src__material_tree__material_tree_node$46template;
  const src__material_tree__material_tree_root$46template = material_tree_root$.src__material_tree__material_tree_root$46template;
  const _root = Object.create(null);
  const src__material_tree__group__material_tree_group_flat$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialTreeGroupFlatListComponent = () => (AppViewOfMaterialTreeGroupFlatListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent = () => (AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeGroupFlatListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeGroupFlatListComponent = () => (ComponentRefOfMaterialTreeGroupFlatListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTreeGroupFlatListComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfMaterialRadioComponent = () => (JSArrayOfMaterialRadioComponent = dart.constFn(_interceptors.JSArray$(material_radio__material_radio.MaterialRadioComponent)))();
  let ListOfMaterialRadioComponent = () => (ListOfMaterialRadioComponent = dart.constFn(core.List$(material_radio__material_radio.MaterialRadioComponent)))();
  let _ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent = () => (_ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent = dart.constFn(dart.fnType(ListOfMaterialRadioComponent(), [src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1])))();
  let AppViewOfMaterialTreeGroupFlatRadioComponent = () => (AppViewOfMaterialTreeGroupFlatRadioComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent = () => (AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeGroupFlatRadioComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeGroupFlatRadioComponent = () => (ComponentRefOfMaterialTreeGroupFlatRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)))();
  let ComponentFactoryOfMaterialTreeGroupFlatRadioComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)))();
  let AppViewOfMaterialTreeGroupFlatCheckComponent = () => (AppViewOfMaterialTreeGroupFlatCheckComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent = () => (AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeGroupFlatCheckComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeGroupFlatCheckComponent = () => (ComponentRefOfMaterialTreeGroupFlatCheckComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)))();
  let ComponentFactoryOfMaterialTreeGroupFlatCheckComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatCheckComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponent*/get styles$MaterialTreeGroupFlatListComponent() {
      return dart.constList([src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0 = class ViewMaterialTreeGroupFlatListComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1);
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.group;
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
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.isMaterialTreeGroup == null)) {
          this.updateElemClass(this.rootEl, 'material-tree-group', this.ctx.isMaterialTreeGroup);
        }
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-tree-group-flat-list'));
    let t = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType;
    t == null ? src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponent) : t;
    this.setupComponentType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, {
    /*src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent0, AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent());
  const _el_0 = Symbol('_el_0');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1 = class _ViewMaterialTreeGroupFlatListComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'material-tree-option';
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.useComponentRenderer;
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.useComponentRenderer);
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1, AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent());
  const _compView_0 = Symbol('_compView_0');
  const _DynamicComponent_0_8 = Symbol('_DynamicComponent_0_8');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2 = class _ViewMaterialTreeGroupFlatListComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'item component';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_DynamicComponent_0_8] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]);
      this[_compView_0].create(this[_DynamicComponent_0_8], []);
      this.init0(this[_appEl_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(dynamic_component__dynamic_component.DynamicComponent) && 0 === nodeIndex) {
        return this[_DynamicComponent_0_8];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]('$implicit');
      changed = false;
      let currVal_0 = _ctx.getComponentType(local_option);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_DynamicComponent_0_8].componentType = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.getComponentFactory(local_option);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_DynamicComponent_0_8].componentFactory = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = local_option;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_DynamicComponent_0_8].value = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8].ngAfterChanges();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_DynamicComponent_0_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2, AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent());
  const _text_1 = Symbol('_text_1');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3 = class _ViewMaterialTreeGroupFlatListComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'item text';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]('$implicit');
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.getOptionAsText(local_option));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3, AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponent());
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponentHost*/get styles$MaterialTreeGroupFlatListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeGroupFlatListComponent_0_5 = Symbol('_MaterialTreeGroupFlatListComponent_0_5');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0 = class _ViewMaterialTreeGroupFlatListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTreeGroupFlatListComponent_0_5] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialTreeGroupFlatListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeGroupFlatListComponent()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatListComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent) && 0 === nodeIndex) {
        return this[_MaterialTreeGroupFlatListComponent_0_5];
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
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTreeGroupFlatListComponent_0_5] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0),
    [_MaterialTreeGroupFlatListComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatListComponentNgFactory*/get MaterialTreeGroupFlatListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupFlatListComponent()).new('material-tree-group-flat-list', src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0, src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatListComponentMetadata));
    },
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponent*/get styles$MaterialTreeGroupFlatRadioComponent() {
      return dart.constList([src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _MaterialRadioGroupComponent_0_5 = Symbol('_MaterialRadioGroupComponent_0_5');
  const _query_MaterialRadioComponent_0_0_isDirty = Symbol('_query_MaterialRadioComponent_0_0_isDirty');
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  let const$0;
  const _MaterialRadioComponent_0_5 = Symbol('_MaterialRadioComponent_0_5');
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0 = class ViewMaterialTreeGroupFlatRadioComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRadioGroupComponent_0_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1);
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this[_compView_0].create(this[_MaterialRadioGroupComponent_0_5], [JSArrayOfViewContainer().of([this[_appEl_1]])]);
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialRadioGroupComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(_ctx.selectionModel == null)) {
          this[_MaterialRadioGroupComponent_0_5].valueSelection = _ctx.selectionModel;
          changed = true;
        }
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_1 = _ctx.group;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_NgFor_1_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_NgFor_1_9].ngDoCheck();
      this[_appEl_1].detectChangesInNestedViews();
      if (dart.test(this[_query_MaterialRadioComponent_0_0_isDirty])) {
        this[_MaterialRadioGroupComponent_0_5].list = this[_appEl_1].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_0_0_isDirty] = false;
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_0_5].ngAfterContentInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_MaterialRadioGroupComponent_0_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.isMaterialTreeGroup == null)) {
          this.updateElemClass(this.rootEl, 'material-tree-group', this.ctx.isMaterialTreeGroup);
        }
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialRadioGroupComponent_0_5] = null;
    this[_query_MaterialRadioComponent_0_0_isDirty] = true;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_1] = null;
    src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-tree-group-flat-radio'));
    let t = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType;
    t == null ? src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponent) : t;
    this.setupComponentType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_0_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_0_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, {
    /*src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent0, AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent());
  const _expr_3 = Symbol('_expr_3');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1 = class _ViewMaterialTreeGroupFlatRadioComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      this[_compView_0] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'material-tree-option tree-selection-state themeable';
      this.createAttr(this[_el_0], 'role', 'option');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.as(this.parentView)[_MaterialRadioGroupComponent_0_5], null, 'option');
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_compView_0].create(this[_MaterialRadioComponent_0_5], [JSArrayOfViewContainer().of([this[_appEl_1], this[_appEl_2]])]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_option = this.locals[$_get]('$implicit');
      changed = false;
      let currVal_2 = local_option;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MaterialRadioComponent_0_5].value = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.isReadOnly;
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialRadioComponent_0_5].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_NgIf_1_9].ngIf = _ctx.useComponentRenderer;
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.useComponentRenderer);
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = _ctx.isSelected(local_option);
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_0], 'selected', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isSelectable(local_option);
      if (!(this[_expr_1] == currVal_1)) {
        this.updateElemClass(this[_el_0], 'selectable', currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.as(this.parentView)[_query_MaterialRadioComponent_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0];
      t$0 == null ? null : t$0.destroy();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialRadioComponent_0_5] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
    [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1, AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent());
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2 = class _ViewMaterialTreeGroupFlatRadioComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'item component';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_DynamicComponent_0_8] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]);
      this[_compView_0].create(this[_DynamicComponent_0_8], []);
      this.init0(this[_appEl_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(dynamic_component__dynamic_component.DynamicComponent) && 0 === nodeIndex) {
        return this[_DynamicComponent_0_8];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]('$implicit');
      changed = false;
      let currVal_0 = _ctx.getComponentType(local_option);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_DynamicComponent_0_8].componentType = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.getComponentFactory(local_option);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_DynamicComponent_0_8].componentFactory = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = local_option;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_DynamicComponent_0_8].value = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8].ngAfterChanges();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_DynamicComponent_0_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2, AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent());
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3 = class _ViewMaterialTreeGroupFlatRadioComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'item text';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]('$implicit');
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.getOptionAsText(local_option));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3, AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponent());
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponentHost*/get styles$MaterialTreeGroupFlatRadioComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeGroupFlatRadioComponent_0_5 = Symbol('_MaterialTreeGroupFlatRadioComponent_0_5');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0 = class _ViewMaterialTreeGroupFlatRadioComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTreeGroupFlatRadioComponent_0_5] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeGroupFlatRadioComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeGroupFlatRadioComponent()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatRadioComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent) && 0 === nodeIndex) {
        return this[_MaterialTreeGroupFlatRadioComponent_0_5];
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
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTreeGroupFlatRadioComponent_0_5] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0),
    [_MaterialTreeGroupFlatRadioComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatRadioComponentNgFactory*/get MaterialTreeGroupFlatRadioComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupFlatRadioComponent()).new('material-tree-group-flat-radio', src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0, src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatRadioComponentMetadata));
    },
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponent*/get styles$MaterialTreeGroupFlatCheckComponent() {
      return dart.constList([src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  let const$1;
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0 = class ViewMaterialTreeGroupFlatCheckComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1);
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.group;
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
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.isMaterialTreeGroup == null)) {
          this.updateElemClass(this.rootEl, 'material-tree-group', this.ctx.isMaterialTreeGroup);
        }
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-tree-group-flat-check'));
    let t = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType;
    t == null ? src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponent) : t;
    this.setupComponentType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, {
    /*src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent0, AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent());
  const _MaterialCheckboxComponent_0_5 = Symbol('_MaterialCheckboxComponent_0_5');
  const _handle_checkedChange_0_0 = Symbol('_handle_checkedChange_0_0');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1 = class _ViewMaterialTreeGroupFlatCheckComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      this[_compView_0] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'material-tree-option tree-selection-state themeable';
      this.createAttr(this[_el_0], 'role', 'option');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialCheckboxComponent_0_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, null, null, 'option');
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_compView_0].create(this[_MaterialCheckboxComponent_0_5], [JSArrayOfViewContainer().of([this[_appEl_1], this[_appEl_2]])]);
      let subscription_0 = this[_MaterialCheckboxComponent_0_5].onChecked.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_checkedChange_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_option = this.locals[$_get]('$implicit');
      changed = false;
      let currVal_2 = dart.test(_ctx.isReadOnly) || dart.test(_ctx.showDisabledCheckbox(local_option));
      if (!(this[_expr_2] === currVal_2)) {
        this[_MaterialCheckboxComponent_0_5].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.isSelected(local_option);
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialCheckboxComponent_0_5].checked = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_NgIf_1_9].ngIf = _ctx.useComponentRenderer;
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.useComponentRenderer);
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = _ctx.isSelected(local_option);
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_0], 'selected', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isSelectable(local_option);
      if (!(this[_expr_1] == currVal_1)) {
        this.updateElemClass(this[_el_0], 'selectable', currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0];
      t$0 == null ? null : t$0.destroy();
    }
    [_handle_checkedChange_0_0]($event) {
      let local_option = this.locals[$_get]('$implicit');
      this.ctx.setSelectionState(local_option, core.bool._check($event));
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialCheckboxComponent_0_5] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_0_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1, AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent());
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2 = class _ViewMaterialTreeGroupFlatCheckComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'item component';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_DynamicComponent_0_8] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]);
      this[_compView_0].create(this[_DynamicComponent_0_8], []);
      this.init0(this[_appEl_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(dynamic_component__dynamic_component.DynamicComponent) && 0 === nodeIndex) {
        return this[_DynamicComponent_0_8];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]('$implicit');
      changed = false;
      let currVal_0 = _ctx.getComponentType(local_option);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_DynamicComponent_0_8].componentType = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.getComponentFactory(local_option);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_DynamicComponent_0_8].componentFactory = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = local_option;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_DynamicComponent_0_8].value = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8].ngAfterChanges();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_DynamicComponent_0_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2, AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent());
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3 = class _ViewMaterialTreeGroupFlatCheckComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'item text';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]('$implicit');
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.getOptionAsText(local_option));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3, AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponent());
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponentHost*/get styles$MaterialTreeGroupFlatCheckComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeGroupFlatCheckComponent_0_5 = Symbol('_MaterialTreeGroupFlatCheckComponent_0_5');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0 = class _ViewMaterialTreeGroupFlatCheckComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTreeGroupFlatCheckComponent_0_5] = new src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeGroupFlatCheckComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeGroupFlatCheckComponent()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatCheckComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent) && 0 === nodeIndex) {
        return this[_MaterialTreeGroupFlatCheckComponent_0_5];
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
  (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTreeGroupFlatCheckComponent_0_5] = null;
    src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0),
    [_MaterialTreeGroupFlatCheckComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)
  }));
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatCheckComponentNgFactory*/get MaterialTreeGroupFlatCheckComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupFlatCheckComponent()).new('material-tree-group-flat-check', src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0, src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatCheckComponentMetadata));
    },
    /*src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatListComponentMetadata*/get _MaterialTreeGroupFlatListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatRadioComponentMetadata*/get _MaterialTreeGroupFlatRadioComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatCheckComponentMetadata*/get _MaterialTreeGroupFlatCheckComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__group__material_tree_group_flat$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.initReflector = function() {
    if (dart.test(src__material_tree__group__material_tree_group_flat$46template._visited)) {
      return;
    }
    src__material_tree__group__material_tree_group_flat$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatListComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatRadioComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatCheckComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    material_checkbox__material_checkbox$46template.initReflector();
    material_radio__material_radio$46template.initReflector();
    material_radio__material_radio_group$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    src__material_tree__material_tree_node$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
  };
  dart.fn(src__material_tree__group__material_tree_group_flat$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tree/group/material_tree_group_flat.template.ddc", {
    "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart": src__material_tree__group__material_tree_group_flat$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_group_flat.template.dart"],"names":[],"mappings":"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","file":"material_tree_group_flat.template.ddc.js"}');
  // Exports:
  return {
    src__material_tree__group__material_tree_group_flat$46template: src__material_tree__group__material_tree_group_flat$46template
  };
});

//# sourceMappingURL=material_tree_group_flat.template.ddc.js.map
