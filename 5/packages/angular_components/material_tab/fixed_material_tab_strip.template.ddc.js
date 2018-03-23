define(['dart_sdk', 'packages/angular_components/material_tab/fixed_material_tab_strip.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/focus/focus_list', 'packages/angular_components/focus/focus_list.template', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/focus/focus', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_components/material_tab/tab_button.template', 'packages/angular_components/focus/focus_item', 'packages/angular_components/focus/focus_item.template', 'packages/angular_components/material_tab/tab_button', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/material_tab/tab_change_event.template'], function(dart_sdk, fixed_material_tab_strip$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_zone, focus_list, focus_list$, ng_for, focus, fixed_material_tab_strip, tab_button, focus_item, focus_item$, tab_button$, opaque_token, reflector, angular, rtl_annotation, tab_change_event) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tab__fixed_material_tab_strip$46scss$46css$46shim = fixed_material_tab_strip$46scss$46css.material_tab__fixed_material_tab_strip$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const focus__focus_list = focus_list.focus__focus_list;
  const focus__focus_list$46template = focus_list$.focus__focus_list$46template;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const focus__focus = focus.focus__focus;
  const material_tab__fixed_material_tab_strip = fixed_material_tab_strip.material_tab__fixed_material_tab_strip;
  const material_tab__tab_button$46template = tab_button.material_tab__tab_button$46template;
  const focus__focus_item = focus_item.focus__focus_item;
  const focus__focus_item$46template = focus_item$.focus__focus_item$46template;
  const material_tab__tab_button = tab_button$.material_tab__tab_button;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const annotations__rtl_annotation$46template = rtl_annotation.annotations__rtl_annotation$46template;
  const material_tab__tab_change_event$46template = tab_change_event.material_tab__tab_change_event$46template;
  const _root = Object.create(null);
  const material_tab__fixed_material_tab_strip$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfFocusableItem = () => (JSArrayOfFocusableItem = dart.constFn(_interceptors.JSArray$(focus__focus.FocusableItem)))();
  let ListOfFocusableItem = () => (ListOfFocusableItem = dart.constFn(core.List$(focus__focus.FocusableItem)))();
  let _ViewFixedMaterialTabStripComponent1ToListOfFocusableItem = () => (_ViewFixedMaterialTabStripComponent1ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1])))();
  let AppViewOfFixedMaterialTabStripComponent = () => (AppViewOfFixedMaterialTabStripComponent = dart.constFn(src__core__linker__app_view.AppView$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  let AppViewAndintToAppViewOfFixedMaterialTabStripComponent = () => (AppViewAndintToAppViewOfFixedMaterialTabStripComponent = dart.constFn(dart.fnType(AppViewOfFixedMaterialTabStripComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfFixedMaterialTabStripComponent = () => (ComponentRefOfFixedMaterialTabStripComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfFixedMaterialTabStripComponent = () => (ComponentFactoryOfFixedMaterialTabStripComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_tab__fixed_material_tab_strip$46template, {
    /*material_tab__fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponent*/get styles$FixedMaterialTabStripComponent() {
      return dart.constList([material_tab__fixed_material_tab_strip$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _FocusListDirective_0_5 = Symbol('_FocusListDirective_0_5');
  const _query_FocusableItem_0_0_isDirty = Symbol('_query_FocusableItem_0_0_isDirty');
  const _el_1 = Symbol('_el_1');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgFor_2_9 = Symbol('_NgFor_2_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  const _FocusableItem_0_7 = Symbol('_FocusableItem_0_7');
  material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0 = class ViewFixedMaterialTabStripComponent0 extends src__core__linker__app_view.AppView$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'navi-bar';
      this.createAttr(this[_el_0], 'focusList', '');
      this.createAttr(this[_el_0], 'role', 'tablist');
      this.addShimC(this[_el_0]);
      this[_FocusListDirective_0_5] = new focus__focus_list$46template.FocusListDirectiveNgCd.new(new focus__focus_list.FocusListDirective.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), 'tablist'));
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'tab-indicator';
      this.addShimC(this[_el_1]);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_tab__fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent1);
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus__focus_list.FocusListDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_FocusListDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.tabLabels;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_NgFor_2_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_NgFor_2_9].ngDoCheck();
      this[_appEl_2].detectChangesInNestedViews();
      if (dart.test(this[_query_FocusableItem_0_0_isDirty])) {
        this[_FocusListDirective_0_5].instance.listItems = this[_appEl_2].mapNestedViews(focus__focus.FocusableItem, material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, dart.fn(nestedView => JSArrayOfFocusableItem().of([nestedView[_FocusableItem_0_7]]), _ViewFixedMaterialTabStripComponent1ToListOfFocusableItem()));
        this[_query_FocusableItem_0_0_isDirty] = false;
      }
      this[_FocusListDirective_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_0 = _ctx.tabIndicatorTransform;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_el_1].style[$setProperty]('transform', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      this[_FocusListDirective_0_5].instance.ngOnDestroy();
    }
  };
  (material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_FocusListDirective_0_5] = null;
    this[_query_FocusableItem_0_0_isDirty] = true;
    this[_el_1] = null;
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-tab-strip'));
    this.rootEl.className = 'themeable';
    let t = material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._renderType;
    t == null ? material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_tab__fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponent) : t;
    this.setupComponentType(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._renderType);
  }).prototype = material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.prototype;
  dart.addTypeTests(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0);
  dart.setMethodSignature(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, () => ({
    __proto__: dart.getMethods(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, () => ({
    __proto__: dart.getFields(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_FocusListDirective_0_5]: dart.fieldType(focus__focus_list$46template.FocusListDirectiveNgCd),
    [_query_FocusableItem_0_0_isDirty]: dart.fieldType(core.bool),
    [_el_1]: dart.fieldType(html.DivElement),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, {
    /*material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_tab__fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent0 = function(parentView, parentIndex) {
    return new material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_tab__fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent0, AppViewAndintToAppViewOfFixedMaterialTabStripComponent());
  const _compView_0 = Symbol('_compView_0');
  const _FocusItemDirective_0_5 = Symbol('_FocusItemDirective_0_5');
  const _TabButtonComponent_0_6 = Symbol('_TabButtonComponent_0_6');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1 = class _ViewFixedMaterialTabStripComponent1 extends src__core__linker__app_view.AppView$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent) {
    build() {
      this[_compView_0] = new material_tab__tab_button$46template.ViewTabButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'tab-button';
      this.createAttr(this[_el_0], 'focusItem', '');
      this.createAttr(this[_el_0], 'role', 'tab');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_FocusItemDirective_0_5] = new focus__focus_item$46template.FocusItemDirectiveNgCd.new(new focus__focus_item.FocusItemDirective.new(html.HtmlElement._check(this[_el_0]), 'tab'));
      this[_TabButtonComponent_0_6] = new material_tab__tab_button.TabButtonComponent.new(this[_el_0]);
      this[_FocusableItem_0_7] = this[_FocusItemDirective_0_5].instance;
      this[_compView_0].create(this[_TabButtonComponent_0_6], []);
      this[_el_0][$addEventListener]('keydown', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_FocusItemDirective_0_5].instance, 'keydown')));
      let subscription_0 = this[_TabButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_tab__tab_button.TabButtonComponent) && 0 === nodeIndex) {
        return this[_TabButtonComponent_0_6];
      }
      if (token === dart.wrapType(focus__focus.FocusableItem) && 0 === nodeIndex) {
        return this[_FocusableItem_0_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_idx = core.int._check(this.locals[$_get]('index'));
      let local_tabLabel = core.String._check(this.locals[$_get]('$implicit'));
      let currVal_2 = local_tabLabel;
      if (!(this[_expr_2] == currVal_2)) {
        this[_TabButtonComponent_0_6].label = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.activeTabIndex == local_idx;
      if (!(this[_expr_3] === currVal_3)) {
        this[_TabButtonComponent_0_6].isActive = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_0 = _ctx.tabId(local_idx);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setProp(this[_el_0], 'id', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.activeStr(local_idx);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this[_el_0], 'aria-selected', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_FocusItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.as(this.parentView)[_query_FocusableItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_idx = core.int._check(this.locals[$_get]('index'));
      this.ctx.switchTo(local_idx);
    }
  };
  (material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_FocusItemDirective_0_5] = null;
    this[_TabButtonComponent_0_6] = null;
    this[_FocusableItem_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null, 'index', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._renderType;
  }).prototype = material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.prototype;
  dart.addTypeTests(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1);
  dart.setMethodSignature(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, () => ({
    __proto__: dart.getMethods(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, () => ({
    __proto__: dart.getFields(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_tab__tab_button$46template.ViewTabButtonComponent0),
    [_FocusItemDirective_0_5]: dart.fieldType(focus__focus_item$46template.FocusItemDirectiveNgCd),
    [_TabButtonComponent_0_6]: dart.fieldType(material_tab__tab_button.TabButtonComponent),
    [_FocusableItem_0_7]: dart.fieldType(focus__focus_item.FocusItemDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_3]: dart.fieldType(core.bool)
  }));
  material_tab__fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent1 = function(parentView, parentIndex) {
    return new material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_tab__fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent1, AppViewAndintToAppViewOfFixedMaterialTabStripComponent());
  dart.defineLazy(material_tab__fixed_material_tab_strip$46template, {
    /*material_tab__fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponentHost*/get styles$FixedMaterialTabStripComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _FixedMaterialTabStripComponent_0_5 = Symbol('_FixedMaterialTabStripComponent_0_5');
  let const$0;
  material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0 = class _ViewFixedMaterialTabStripComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_FixedMaterialTabStripComponent_0_5] = new material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0].ref, core.bool._check(this.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('isRtl'))), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_FixedMaterialTabStripComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfFixedMaterialTabStripComponent()).new(0, this, this.rootEl, this[_FixedMaterialTabStripComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent) && 0 === nodeIndex) {
        return this[_FixedMaterialTabStripComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FixedMaterialTabStripComponent_0_5] = null;
    material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.prototype;
  dart.addTypeTests(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0);
  dart.setMethodSignature(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0, () => ({
    __proto__: dart.getFields(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0),
    [_FixedMaterialTabStripComponent_0_5]: dart.fieldType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent)
  }));
  material_tab__fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponentHost0 = function(parentView, parentIndex) {
    return new material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_tab__fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_tab__fixed_material_tab_strip$46template, {
    /*material_tab__fixed_material_tab_strip$46template.FixedMaterialTabStripComponentNgFactory*/get FixedMaterialTabStripComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfFixedMaterialTabStripComponent()).new('material-tab-strip', material_tab__fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponentHost0, material_tab__fixed_material_tab_strip$46template._FixedMaterialTabStripComponentMetadata));
    },
    /*material_tab__fixed_material_tab_strip$46template._FixedMaterialTabStripComponentMetadata*/get _FixedMaterialTabStripComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_tab__fixed_material_tab_strip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tab__fixed_material_tab_strip$46template.initReflector = function() {
    if (dart.test(material_tab__fixed_material_tab_strip$46template._visited)) {
      return;
    }
    material_tab__fixed_material_tab_strip$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent), material_tab__fixed_material_tab_strip$46template.FixedMaterialTabStripComponentNgFactory);
    angular$46template.initReflector();
    annotations__rtl_annotation$46template.initReflector();
    focus__focus_item$46template.initReflector();
    focus__focus_list$46template.initReflector();
    material_tab__tab_button$46template.initReflector();
    material_tab__tab_change_event$46template.initReflector();
  };
  dart.fn(material_tab__fixed_material_tab_strip$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_tab/fixed_material_tab_strip.template.ddc", {
    "package:angular_components/material_tab/fixed_material_tab_strip.template.dart": material_tab__fixed_material_tab_strip$46template
  }, '{"version":3,"sourceRoot":"","sources":["fixed_material_tab_strip.template.dart"],"names":[],"mappings":"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","file":"fixed_material_tab_strip.template.ddc.js"}');
  // Exports:
  return {
    material_tab__fixed_material_tab_strip$46template: material_tab__fixed_material_tab_strip$46template
  };
});

//# sourceMappingURL=fixed_material_tab_strip.template.ddc.js.map
