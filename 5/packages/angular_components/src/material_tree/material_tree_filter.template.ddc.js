define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_input/material_input', 'packages/angular_components/src/material_tree/material_tree_filter', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives/ng_model', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular/src/core/di/opaque_token', 'packages/angular_forms/src/directives/control_container', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/src/material_tree/material_tree_root', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/src/material_tree/material_tree_root.template', 'packages/angular_components/utils/async/async.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_if, material_input, material_tree_filter, material_input$, deferred_validator, ng_model, material_input_default_value_accessor, opaque_token, control_container, reference, focus, base_material_input, material_tree_root, reflector, angular, select, material_tree_root$, async) {
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
  const material_input__material_input = material_input.material_input__material_input;
  const src__material_tree__material_tree_filter = material_tree_filter.src__material_tree__material_tree_filter;
  const material_input__material_input$46template = material_input$.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus = focus.focus__focus;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const src__material_tree__material_tree_root = material_tree_root.src__material_tree__material_tree_root;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const src__material_tree__material_tree_root$46template = material_tree_root$.src__material_tree__material_tree_root$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const _root = Object.create(null);
  const src__material_tree__material_tree_filter$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfMaterialInputComponent = () => (JSArrayOfMaterialInputComponent = dart.constFn(_interceptors.JSArray$(material_input__material_input.MaterialInputComponent)))();
  let ListOfMaterialInputComponent = () => (ListOfMaterialInputComponent = dart.constFn(core.List$(material_input__material_input.MaterialInputComponent)))();
  let _ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent = () => (_ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent = dart.constFn(dart.fnType(ListOfMaterialInputComponent(), [src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1])))();
  let AppViewOfMaterialTreeFilterComponent = () => (AppViewOfMaterialTreeFilterComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeFilterComponent = () => (AppViewAndintToAppViewOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeFilterComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeFilterComponent = () => (ComponentRefOfMaterialTreeFilterComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTreeFilterComponent = () => (ComponentFactoryOfMaterialTreeFilterComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template.styles$MaterialTreeFilterComponent*/get styles$MaterialTreeFilterComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _query_materialInput_1_0_isDirty = Symbol('_query_materialInput_1_0_isDirty');
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  let const$;
  const _MaterialInputComponent_0_9 = Symbol('_MaterialInputComponent_0_9');
  src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0 = class ViewMaterialTreeFilterComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.hasFilterable;
      this[_appEl_0].detectChangesInNestedViews();
      if (dart.test(this[_query_materialInput_1_0_isDirty])) {
        this.ctx.materialInput = dart.test(this[_appEl_0].mapNestedViews(material_input__material_input.MaterialInputComponent, src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, dart.fn(nestedView => JSArrayOfMaterialInputComponent().of([nestedView[_MaterialInputComponent_0_9]]), _ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent()))[$isNotEmpty]) ? this[_appEl_0].mapNestedViews(material_input__material_input.MaterialInputComponent, src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, dart.fn(nestedView => JSArrayOfMaterialInputComponent().of([nestedView[_MaterialInputComponent_0_9]]), _ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent()))[$first] : null;
        this[_query_materialInput_1_0_isDirty] = false;
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new = function(parentView, parentIndex) {
    this[_query_materialInput_1_0_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-tree-filter'));
    let t = src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType;
    t == null ? src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__material_tree__material_tree_filter$46template.styles$MaterialTreeFilterComponent) : t;
    this.setupComponentType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType);
  }).prototype = src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0);
  dart.setMethodSignature(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__),
    [_query_materialInput_1_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, {
    /*src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent0, AppViewAndintToAppViewOfMaterialTreeFilterComponent());
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _DeferredValidator_0_5 = Symbol('_DeferredValidator_0_5');
  const _NgValidators_0_6 = Symbol('_NgValidators_0_6');
  const _NgModel_0_7 = Symbol('_NgModel_0_7');
  const _NgControl_0_8 = Symbol('_NgControl_0_8');
  const _BaseMaterialInput_0_10 = Symbol('_BaseMaterialInput_0_10');
  const _MaterialInputDefaultValueAccessor_0_11 = Symbol('_MaterialInputDefaultValueAccessor_0_11');
  const _expr_1 = Symbol('_expr_1');
  const _expr_3 = Symbol('_expr_3');
  let const$0;
  const _handle_inputKeyPress_0_1 = Symbol('_handle_inputKeyPress_0_1');
  let const$1;
  src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1 = class _ViewMaterialTreeFilterComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent) {
    build() {
      this[_compView_0] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'style', 'width: 100%;');
      this[_DeferredValidator_0_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_0_6] = [this[_DeferredValidator_0_5]];
      this[_NgModel_0_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_0_6], null);
      this[_NgControl_0_8] = this[_NgModel_0_7];
      this[_MaterialInputComponent_0_9] = new material_input__material_input.MaterialInputComponent.new(null, null, this[_NgControl_0_8], this[_compView_0].ref, this[_DeferredValidator_0_5]);
      this[_BaseMaterialInput_0_10] = this[_MaterialInputComponent_0_9];
      this[_MaterialInputDefaultValueAccessor_0_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_0_10], this[_NgControl_0_8]);
      this[_compView_0].create(this[_MaterialInputComponent_0_9], [const$0 || (const$0 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_MaterialInputComponent_0_9].onFocus.listen(this.eventHandler0(html.FocusEvent, dart.bind(this.ctx, 'handleFocus')));
      let subscription_1 = this[_MaterialInputComponent_0_9].onKeypress.listen(this.eventHandler1(core.String, core.String, dart.bind(this, _handle_inputKeyPress_0_1)));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 0 === nodeIndex) {
        return this[_DeferredValidator_0_5];
      }
      if (token === (const$1 || (const$1 = dart.const(new src__core__di__opaque_token.MultiToken.new('NgValidators')))) && 0 === nodeIndex) {
        return this[_NgValidators_0_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 0 === nodeIndex) {
        return this[_NgModel_0_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 0 === nodeIndex) {
        return this[_NgControl_0_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus.Focusable)) && 0 === nodeIndex) {
        return this[_MaterialInputComponent_0_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 0 === nodeIndex) {
        return this[_BaseMaterialInput_0_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 0 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_0_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_0_7].model = _ctx.inputText;
      this[_NgModel_0_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_0_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_0_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_1 = _ctx.placeholder;
      if (!(this[_expr_1] == currVal_1)) {
        this[_MaterialInputComponent_0_9].label = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_3 = _ctx.leadingGlyph;
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialInputComponent_0_9].leadingGlyph = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialInputComponent_0_9].ngAfterViewInit();
      }
    }
    dirtyParentQueriesInternal() {
      src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.as(this.parentView)[_query_materialInput_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialInputComponent_0_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_0_11].ngOnDestroy();
    }
    [_handle_inputKeyPress_0_1]($event) {
      this.ctx.inputText = core.String._check($event);
    }
  };
  (src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_DeferredValidator_0_5] = null;
    this[_NgValidators_0_6] = null;
    this[_NgModel_0_7] = null;
    this[_NgControl_0_8] = null;
    this[_MaterialInputComponent_0_9] = null;
    this[_BaseMaterialInput_0_10] = null;
    this[_MaterialInputDefaultValueAccessor_0_11] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._renderType;
  }).prototype = src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1);
  dart.setMethodSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_inputKeyPress_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_0_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_0_6]: dart.fieldType(core.List),
    [_NgModel_0_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_0_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_0_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_0_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_0_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_3]: dart.fieldType(core.String)
  }));
  src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1, AppViewAndintToAppViewOfMaterialTreeFilterComponent());
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template.styles$MaterialTreeFilterComponentHost*/get styles$MaterialTreeFilterComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeFilterComponent_0_5 = Symbol('_MaterialTreeFilterComponent_0_5');
  src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0 = class _ViewMaterialTreeFilterComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTreeFilterComponent_0_5] = new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeFilterComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeFilterComponent()).new(0, this, this.rootEl, this[_MaterialTreeFilterComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTreeFilterComponent_0_5] = null;
    src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0);
  dart.setMethodSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
    [_MaterialTreeFilterComponent_0_5]: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)
  }));
  src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template.MaterialTreeFilterComponentNgFactory*/get MaterialTreeFilterComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeFilterComponent()).new('material-tree-filter', src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0, src__material_tree__material_tree_filter$46template._MaterialTreeFilterComponentMetadata));
    },
    /*src__material_tree__material_tree_filter$46template._MaterialTreeFilterComponentMetadata*/get _MaterialTreeFilterComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__material_tree_filter$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_filter$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_filter$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_filter$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), src__material_tree__material_tree_filter$46template.MaterialTreeFilterComponentNgFactory);
    angular$46template.initReflector();
    material_input__material_input$46template.initReflector();
    model__selection__select$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    utils__async__async$46template.initReflector();
  };
  dart.fn(src__material_tree__material_tree_filter$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tree/material_tree_filter.template.ddc", {
    "package:angular_components/src/material_tree/material_tree_filter.template.dart": src__material_tree__material_tree_filter$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_filter.template.dart"],"names":[],"mappings":"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","file":"material_tree_filter.template.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_filter$46template: src__material_tree__material_tree_filter$46template
  };
});

//# sourceMappingURL=material_tree_filter.template.ddc.js.map
