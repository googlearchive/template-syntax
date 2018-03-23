define(['dart_sdk', 'packages/angular_components/material_radio/material_radio_group.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_radio/material_radio', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_radio/material_radio.scss.css.shim', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/utils/browser/events/events.template'], function(dart_sdk, material_radio_group$46scss$46css, view_type, constants, view, app_view_utils, material_radio, app_view, ng_zone, reflector, angular, focus, selection_model, disposer, angular_forms, material_radio$46scss$46css, material_icon, material_icon$, ng_if, material_ripple, material_ripple$, icon, events) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_radio__material_radio_group$46scss$46css$46shim = material_radio_group$46scss$46css.material_radio__material_radio_group$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_radio__material_radio_group = material_radio.material_radio__material_radio_group;
  const material_radio__material_radio = material_radio.material_radio__material_radio;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const material_radio__material_radio$46scss$46css$46shim = material_radio$46scss$46css.material_radio__material_radio$46scss$46css$46shim;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const _root = Object.create(null);
  const material_radio__material_radio_group$46template = Object.create(_root);
  const material_radio__material_radio$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialRadioGroupComponent = () => (AppViewOfMaterialRadioGroupComponent = dart.constFn(src__core__linker__app_view.AppView$(material_radio__material_radio_group.MaterialRadioGroupComponent)))();
  let AppViewAndintToAppViewOfMaterialRadioGroupComponent = () => (AppViewAndintToAppViewOfMaterialRadioGroupComponent = dart.constFn(dart.fnType(AppViewOfMaterialRadioGroupComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfMaterialRadioComponent = () => (JSArrayOfMaterialRadioComponent = dart.constFn(_interceptors.JSArray$(material_radio__material_radio.MaterialRadioComponent)))();
  let ComponentRefOfMaterialRadioGroupComponent = () => (ComponentRefOfMaterialRadioGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio_group.MaterialRadioGroupComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialRadioGroupComponent = () => (ComponentFactoryOfMaterialRadioGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_radio__material_radio_group.MaterialRadioGroupComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let AppViewOfMaterialRadioComponent = () => (AppViewOfMaterialRadioComponent = dart.constFn(src__core__linker__app_view.AppView$(material_radio__material_radio.MaterialRadioComponent)))();
  let AppViewAndintToAppViewOfMaterialRadioComponent = () => (AppViewAndintToAppViewOfMaterialRadioComponent = dart.constFn(dart.fnType(AppViewOfMaterialRadioComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialRadioComponent = () => (ComponentRefOfMaterialRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio.MaterialRadioComponent)))();
  let ComponentFactoryOfMaterialRadioComponent = () => (ComponentFactoryOfMaterialRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_radio__material_radio.MaterialRadioComponent)))();
  dart.defineLazy(material_radio__material_radio_group$46template, {
    /*material_radio__material_radio_group$46template.styles$MaterialRadioGroupComponent*/get styles$MaterialRadioGroupComponent() {
      return dart.constList([material_radio__material_radio_group$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  let const$;
  material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0 = class ViewMaterialRadioGroupComponent0 extends src__core__linker__app_view.AppView$(material_radio__material_radio_group.MaterialRadioGroupComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.project(parentRenderNode, 0);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new = function(parentView, parentIndex) {
    material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-radio-group'));
    this.createAttr(this.rootEl, 'role', 'radiogroup');
    this.rootEl.tabIndex = -1;
    let t = material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._renderType;
    t == null ? material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_radio__material_radio_group$46template.styles$MaterialRadioGroupComponent) : t;
    this.setupComponentType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._renderType);
  }).prototype = material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.prototype;
  dart.addTypeTests(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0);
  dart.setMethodSignature(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0, () => ({
    __proto__: dart.getMethods(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio_group.MaterialRadioGroupComponent), [])
  }));
  dart.defineLazy(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0, {
    /*material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_radio__material_radio_group$46template.viewFactory_MaterialRadioGroupComponent0 = function(parentView, parentIndex) {
    return new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_radio__material_radio_group$46template.viewFactory_MaterialRadioGroupComponent0, AppViewAndintToAppViewOfMaterialRadioGroupComponent());
  dart.defineLazy(material_radio__material_radio_group$46template, {
    /*material_radio__material_radio_group$46template.styles$MaterialRadioGroupComponentHost*/get styles$MaterialRadioGroupComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialRadioGroupComponent_0_5 = Symbol('_MaterialRadioGroupComponent_0_5');
  const _query_MaterialRadioComponent_0_0_isDirty = Symbol('_query_MaterialRadioComponent_0_0_isDirty');
  material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0 = class _ViewMaterialRadioGroupComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialRadioGroupComponent_0_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      this[_MaterialRadioGroupComponent_0_5].list = JSArrayOfMaterialRadioComponent().of([]);
      this[_compView_0].create(this[_MaterialRadioGroupComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialRadioGroupComponent()).new(0, this, this.rootEl, this[_MaterialRadioGroupComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 0 === nodeIndex) {
        return this[_MaterialRadioGroupComponent_0_5];
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
        this[_MaterialRadioGroupComponent_0_5].ngAfterContentInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialRadioGroupComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRadioGroupComponent_0_5] = null;
    this[_query_MaterialRadioComponent_0_0_isDirty] = true;
    material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.prototype;
  dart.addTypeTests(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0);
  dart.setMethodSignature(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0, () => ({
    __proto__: dart.getMethods(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0, () => ({
    __proto__: dart.getFields(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_0_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_0_0_isDirty]: dart.fieldType(core.bool)
  }));
  material_radio__material_radio_group$46template.viewFactory_MaterialRadioGroupComponentHost0 = function(parentView, parentIndex) {
    return new material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_radio__material_radio_group$46template.viewFactory_MaterialRadioGroupComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_radio__material_radio_group$46template, {
    /*material_radio__material_radio_group$46template.MaterialRadioGroupComponentNgFactory*/get MaterialRadioGroupComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialRadioGroupComponent()).new('material-radio-group', material_radio__material_radio_group$46template.viewFactory_MaterialRadioGroupComponentHost0, material_radio__material_radio_group$46template._MaterialRadioGroupComponentMetadata));
    },
    /*material_radio__material_radio_group$46template._MaterialRadioGroupComponentMetadata*/get _MaterialRadioGroupComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_radio__material_radio_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_radio__material_radio_group$46template.initReflector = function() {
    if (dart.test(material_radio__material_radio_group$46template._visited)) {
      return;
    }
    material_radio__material_radio_group$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent), material_radio__material_radio_group$46template.MaterialRadioGroupComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    material_radio__material_radio$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(material_radio__material_radio_group$46template.initReflector, VoidTovoid());
  dart.defineLazy(material_radio__material_radio$46template, {
    /*material_radio__material_radio$46template.styles$MaterialRadioComponent*/get styles$MaterialRadioComponent() {
      return dart.constList([material_radio__material_radio$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialIconComponent_1_5 = Symbol('_MaterialIconComponent_1_5');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _el_3 = Symbol('_el_3');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  let const$0;
  material_radio__material_radio$46template.ViewMaterialRadioComponent0 = class ViewMaterialRadioComponent0 extends src__core__linker__app_view.AppView$(material_radio__material_radio.MaterialRadioComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'icon-container';
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.createAttr(this[_el_1], 'aria-hidden', 'true');
      this[_el_1].className = 'icon';
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5], []);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_radio__material_radio$46template.viewFactory_MaterialRadioComponent1);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_3].className = 'content';
      this.addShimC(this[_el_3]);
      this.project(this[_el_3], 0);
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      _rootEl[$addEventListener]('keydown', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyDown')));
      _rootEl[$addEventListener]('keyup', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyUp')));
      _rootEl[$addEventListener]('focus', this.eventHandler0(html.Event, dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(_ctx, 'onBlur')));
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_3 = _ctx.icon;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_MaterialIconComponent_1_5].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.disabled);
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = _ctx.showFocus;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateClass(this[_el_0], 'focus', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.checked;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateClass(this[_el_0], 'checked', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (!(this[_expr_2] == currVal_2)) {
        this.updateClass(this[_el_0], 'disabled', currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.role == null)) {
          this.setAttr(this.rootEl, 'role', this.ctx.role == null ? null : dart.toString(this.ctx.role));
        }
      }
      let currVal_6 = this.ctx.disabled;
      if (!(this[_expr_6] == currVal_6)) {
        this.updateElemClass(this.rootEl, 'disabled', currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = this.ctx.tabIndex;
      if (!core.identical(this[_expr_7], currVal_7)) {
        this.setAttr(this.rootEl, 'tabindex', currVal_7 == null ? null : dart.toString(currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = this.ctx.disabled;
      if (!core.identical(this[_expr_8], currVal_8)) {
        this.setAttr(this.rootEl, 'aria-disabled', currVal_8 == null ? null : dart.toString(currVal_8));
        this[_expr_8] = currVal_8;
      }
    }
  };
  (material_radio__material_radio$46template.ViewMaterialRadioComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_el_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    material_radio__material_radio$46template.ViewMaterialRadioComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-radio'));
    this.rootEl.className = 'themeable';
    let t = material_radio__material_radio$46template.ViewMaterialRadioComponent0._renderType;
    t == null ? material_radio__material_radio$46template.ViewMaterialRadioComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_radio__material_radio$46template.styles$MaterialRadioComponent) : t;
    this.setupComponentType(material_radio__material_radio$46template.ViewMaterialRadioComponent0._renderType);
  }).prototype = material_radio__material_radio$46template.ViewMaterialRadioComponent0.prototype;
  dart.addTypeTests(material_radio__material_radio$46template.ViewMaterialRadioComponent0);
  dart.setMethodSignature(material_radio__material_radio$46template.ViewMaterialRadioComponent0, () => ({
    __proto__: dart.getMethods(material_radio__material_radio$46template.ViewMaterialRadioComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio.MaterialRadioComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_radio__material_radio$46template.ViewMaterialRadioComponent0, () => ({
    __proto__: dart.getFields(material_radio__material_radio$46template.ViewMaterialRadioComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_3]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_radio__material_radio$46template.ViewMaterialRadioComponent0, {
    /*material_radio__material_radio$46template.ViewMaterialRadioComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_radio__material_radio$46template.viewFactory_MaterialRadioComponent0 = function(parentView, parentIndex) {
    return new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_radio__material_radio$46template.viewFactory_MaterialRadioComponent0, AppViewAndintToAppViewOfMaterialRadioComponent());
  const _compView_0$ = Symbol('_compView_0');
  const _MaterialRippleComponent_0_5 = Symbol('_MaterialRippleComponent_0_5');
  material_radio__material_radio$46template._ViewMaterialRadioComponent1 = class _ViewMaterialRadioComponent1 extends src__core__linker__app_view.AppView$(material_radio__material_radio.MaterialRadioComponent) {
    build() {
      this[_compView_0$] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      this[_el_0] = this[_compView_0$].rootEl;
      this[_el_0].className = 'ripple';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRippleComponent_0_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0$].create(this[_MaterialRippleComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio__material_radio$46template._ViewMaterialRadioComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0$] = null;
    this[_MaterialRippleComponent_0_5] = null;
    material_radio__material_radio$46template._ViewMaterialRadioComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_radio__material_radio$46template.ViewMaterialRadioComponent0._renderType;
  }).prototype = material_radio__material_radio$46template._ViewMaterialRadioComponent1.prototype;
  dart.addTypeTests(material_radio__material_radio$46template._ViewMaterialRadioComponent1);
  dart.setMethodSignature(material_radio__material_radio$46template._ViewMaterialRadioComponent1, () => ({
    __proto__: dart.getMethods(material_radio__material_radio$46template._ViewMaterialRadioComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio.MaterialRadioComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_radio__material_radio$46template._ViewMaterialRadioComponent1, () => ({
    __proto__: dart.getFields(material_radio__material_radio$46template._ViewMaterialRadioComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_0_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent)
  }));
  material_radio__material_radio$46template.viewFactory_MaterialRadioComponent1 = function(parentView, parentIndex) {
    return new material_radio__material_radio$46template._ViewMaterialRadioComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_radio__material_radio$46template.viewFactory_MaterialRadioComponent1, AppViewAndintToAppViewOfMaterialRadioComponent());
  dart.defineLazy(material_radio__material_radio$46template, {
    /*material_radio__material_radio$46template.styles$MaterialRadioComponentHost*/get styles$MaterialRadioComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialRadioComponent_0_5 = Symbol('_MaterialRadioComponent_0_5');
  material_radio__material_radio$46template._ViewMaterialRadioComponentHost0 = class _ViewMaterialRadioComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0$] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(this.rootEl, this[_compView_0$].ref, material_radio__material_radio_group.MaterialRadioGroupComponent._check(this.injectorGet(dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent), this.viewData.parentIndex, null)), null, null);
      this[_compView_0$].create(this[_MaterialRadioComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialRadioComponent()).new(0, this, this.rootEl, this[_MaterialRadioComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialRadioComponent_0_5] = null;
    material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.prototype;
  dart.addTypeTests(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0);
  dart.setMethodSignature(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0, () => ({
    __proto__: dart.getMethods(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0, () => ({
    __proto__: dart.getFields(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
    [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent)
  }));
  material_radio__material_radio$46template.viewFactory_MaterialRadioComponentHost0 = function(parentView, parentIndex) {
    return new material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_radio__material_radio$46template.viewFactory_MaterialRadioComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_radio__material_radio$46template, {
    /*material_radio__material_radio$46template.MaterialRadioComponentNgFactory*/get MaterialRadioComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialRadioComponent()).new('material-radio', material_radio__material_radio$46template.viewFactory_MaterialRadioComponentHost0, material_radio__material_radio$46template._MaterialRadioComponentMetadata));
    },
    /*material_radio__material_radio$46template._MaterialRadioComponentMetadata*/get _MaterialRadioComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_radio__material_radio$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_radio__material_radio$46template.initReflector = function() {
    if (dart.test(material_radio__material_radio$46template._visited)) {
      return;
    }
    material_radio__material_radio$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_radio__material_radio.MaterialRadioComponent), material_radio__material_radio$46template.MaterialRadioComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_radio__material_radio_group$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    model__ui__icon$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(material_radio__material_radio$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_radio/material_radio.template.ddc", {
    "package:angular_components/material_radio/material_radio_group.template.dart": material_radio__material_radio_group$46template,
    "package:angular_components/material_radio/material_radio.template.dart": material_radio__material_radio$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_radio.template.dart","material_radio_group.template.dart"],"names":[],"mappings":"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","file":"material_radio.template.ddc.js"}');
  // Exports:
  return {
    material_radio__material_radio_group$46template: material_radio__material_radio_group$46template,
    material_radio__material_radio$46template: material_radio__material_radio$46template
  };
});

//# sourceMappingURL=material_radio.template.ddc.js.map
