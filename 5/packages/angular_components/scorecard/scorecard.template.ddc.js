define(['dart_sdk', 'packages/angular_components/scorecard/scorecard.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/scorecard/scorecard', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/color/color.template', 'packages/angular_components/utils/color/palette.template'], function(dart_sdk, scorecard$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_if, scorecard, material_ripple, material_ripple$, material_icon, material_icon$, dom_service, reflector, angular, keyboard_only_focus_indicator, dom_service$, events, color, palette) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scorecard__scorecard$46scss$46css$46shim = scorecard$46scss$46css.scorecard__scorecard$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const scorecard__scorecard = scorecard.scorecard__scorecard;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const utils__color__color$46template = color.utils__color__color$46template;
  const utils__color__palette$46template = palette.utils__color__palette$46template;
  const _root = Object.create(null);
  const scorecard__scorecard$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfScorecardComponent = () => (AppViewOfScorecardComponent = dart.constFn(src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent)))();
  let AppViewAndintToAppViewOfScorecardComponent = () => (AppViewAndintToAppViewOfScorecardComponent = dart.constFn(dart.fnType(AppViewOfScorecardComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfScorecardComponent = () => (ComponentRefOfScorecardComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfScorecardComponent = () => (ComponentFactoryOfScorecardComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(scorecard__scorecard.ScorecardComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(scorecard__scorecard$46template, {
    /*scorecard__scorecard$46template.styles$ScorecardComponent*/get styles$ScorecardComponent() {
      return dart.constList([scorecard__scorecard$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _el_3 = Symbol('_el_3');
  const _text_4 = Symbol('_text_4');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  const _expr_14 = Symbol('_expr_14');
  let const$;
  scorecard__scorecard$46template.ViewScorecardComponent0 = class ViewScorecardComponent0 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], scorecard__scorecard$46template.viewFactory_ScorecardComponent1);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let doc = html.document;
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h3', parentRenderNode);
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      this.project(this[_el_1], 0);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new('');
      this[_el_3][$append](this[_text_4]);
      this.project(this[_el_3], 1);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, null, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], scorecard__scorecard$46template.viewFactory_ScorecardComponent2);
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], scorecard__scorecard$46template.viewFactory_ScorecardComponent3);
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, null, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], scorecard__scorecard$46template.viewFactory_ScorecardComponent5);
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this.project(parentRenderNode, 3);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]('keyup', this.eventHandler0(html.Event, dart.bind(_ctx, 'resetOutline')));
      _rootEl[$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(_ctx, 'resetOutline')));
      _rootEl[$addEventListener]('mousedown', this.eventHandler0(html.Event, dart.bind(_ctx, 'hideOutline')));
      _rootEl[$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeypress')));
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.selectable;
      this[_NgIf_5_9].ngIf = _ctx.suggestionBefore != null;
      this[_NgIf_6_9].ngIf = _ctx.description != null;
      this[_NgIf_7_9].ngIf = _ctx.suggestionAfter != null;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      let l = _ctx.label;
      let currVal_1 = l != null ? l : '';
      if (!(this[_expr_1] === currVal_1)) {
        this[_text_2][$text] = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.tooltip;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this.setProp(this[_el_3], 'title', currVal_2);
        this[_expr_2] = currVal_2;
      }
      let l$ = _ctx.value;
      let currVal_3 = l$ != null ? l$ : '';
      if (!(this[_expr_3] === currVal_3)) {
        this[_text_4][$text] = currVal_3;
        this[_expr_3] = currVal_3;
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_5];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_6];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_7];
      t$1 == null ? null : t$1.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let currVal_7 = dart.test(this.ctx.selectable) ? 0 : null;
      if (!core.identical(this[_expr_7], currVal_7)) {
        this.setAttr(this.rootEl, 'tabindex', currVal_7 == null ? null : dart.toString(currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = dart.test(this.ctx.selectable) ? 'button' : null;
      if (!core.identical(this[_expr_8], currVal_8)) {
        this.setAttr(this.rootEl, 'role', currVal_8 == null ? null : dart.toString(currVal_8));
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = this.ctx.isChangePositive;
      if (!(this[_expr_9] == currVal_9)) {
        this.updateElemClass(this.rootEl, 'is-change-positive', currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = this.ctx.isChangeNegative;
      if (!(this[_expr_10] == currVal_10)) {
        this.updateElemClass(this.rootEl, 'is-change-negative', currVal_10);
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = this.ctx.selectable;
      if (!(this[_expr_11] == currVal_11)) {
        this.updateElemClass(this.rootEl, 'selectable', currVal_11);
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = this.ctx.backgroundStyle;
      if (!core.identical(this[_expr_12], currVal_12)) {
        this.rootEl.style[$setProperty]('background', currVal_12 == null ? null : dart.toString(currVal_12));
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = this.ctx.extraBig;
      if (!(this[_expr_13] == currVal_13)) {
        this.updateElemClass(this.rootEl, 'extra-big', currVal_13);
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = this.ctx.selected;
      if (!(this[_expr_14] == currVal_14)) {
        this.updateElemClass(this.rootEl, 'selected', currVal_14);
        this[_expr_14] = currVal_14;
      }
    }
  };
  (scorecard__scorecard$46template.ViewScorecardComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    scorecard__scorecard$46template.ViewScorecardComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('acx-scorecard'));
    this.rootEl.className = 'themeable';
    let t = scorecard__scorecard$46template.ViewScorecardComponent0._renderType;
    t == null ? scorecard__scorecard$46template.ViewScorecardComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, scorecard__scorecard$46template.styles$ScorecardComponent) : t;
    this.setupComponentType(scorecard__scorecard$46template.ViewScorecardComponent0._renderType);
  }).prototype = scorecard__scorecard$46template.ViewScorecardComponent0.prototype;
  dart.addTypeTests(scorecard__scorecard$46template.ViewScorecardComponent0);
  dart.setMethodSignature(scorecard__scorecard$46template.ViewScorecardComponent0, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template.ViewScorecardComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template.ViewScorecardComponent0, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template.ViewScorecardComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(core.bool),
    [_expr_14]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(scorecard__scorecard$46template.ViewScorecardComponent0, {
    /*scorecard__scorecard$46template.ViewScorecardComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  scorecard__scorecard$46template.viewFactory_ScorecardComponent0 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template.ViewScorecardComponent0.new(parentView, parentIndex);
  };
  dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent0, AppViewAndintToAppViewOfScorecardComponent());
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialRippleComponent_0_5 = Symbol('_MaterialRippleComponent_0_5');
  scorecard__scorecard$46template._ViewScorecardComponent1 = class _ViewScorecardComponent1 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      this[_compView_0] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRippleComponent_0_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialRippleComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    scorecard__scorecard$46template._ViewScorecardComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scorecard$46template.ViewScorecardComponent0._renderType;
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent1.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent1);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent1, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent1, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_0_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent1 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent1.new(parentView, parentIndex);
  };
  dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent1, AppViewAndintToAppViewOfScorecardComponent());
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  scorecard__scorecard$46template._ViewScorecardComponent2 = class _ViewScorecardComponent2 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'suggestion before';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.suggestionBefore;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    scorecard__scorecard$46template._ViewScorecardComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scorecard$46template.ViewScorecardComponent0._renderType;
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent2.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent2);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent2, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent2, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent2 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent2.new(parentView, parentIndex);
  };
  dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent2, AppViewAndintToAppViewOfScorecardComponent());
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _text_3 = Symbol('_text_3');
  scorecard__scorecard$46template._ViewScorecardComponent3 = class _ViewScorecardComponent3 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'description';
      this.addShimE(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], scorecard__scorecard$46template.viewFactory_ScorecardComponent4);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = html.Text.new('\n   ');
      this[_el_0][$append](_text_2);
      this[_text_3] = html.Text.new('');
      this[_el_0][$append](this[_text_3]);
      let _text_4 = html.Text.new(' \n  ');
      this[_el_0][$append](_text_4);
      this.project(this[_el_0], 2);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = dart.test(_ctx.changeGlyph) && _ctx.description !== '' && !dart.test(_ctx.isChangeNeutral);
      this[_appEl_1].detectChangesInNestedViews();
      let l = _ctx.description;
      let currVal_1 = l != null ? l : '';
      if (!(this[_expr_1] === currVal_1)) {
        this[_text_3][$text] = currVal_1;
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_text_3] = null;
    this[_expr_1] = null;
    scorecard__scorecard$46template._ViewScorecardComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scorecard$46template.ViewScorecardComponent0._renderType;
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent3.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent3);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent3, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent3, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_text_3]: dart.fieldType(html.Text),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent3 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent3.new(parentView, parentIndex);
  };
  dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent3, AppViewAndintToAppViewOfScorecardComponent());
  const _MaterialIconComponent_0_5 = Symbol('_MaterialIconComponent_0_5');
  scorecard__scorecard$46template._ViewScorecardComponent4 = class _ViewScorecardComponent4 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'change-glyph';
      this.createAttr(this[_el_0], 'size', 'small');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.changeGlyphIcon;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialIconComponent_0_5].icon = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
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
  (scorecard__scorecard$46template._ViewScorecardComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    scorecard__scorecard$46template._ViewScorecardComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scorecard$46template.ViewScorecardComponent0._renderType;
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent4.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent4);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent4, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent4, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent4 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent4.new(parentView, parentIndex);
  };
  dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent4, AppViewAndintToAppViewOfScorecardComponent());
  scorecard__scorecard$46template._ViewScorecardComponent5 = class _ViewScorecardComponent5 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'suggestion after';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.suggestionAfter;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    scorecard__scorecard$46template._ViewScorecardComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scorecard$46template.ViewScorecardComponent0._renderType;
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent5.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent5);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent5, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent5, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent5 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent5.new(parentView, parentIndex);
  };
  dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent5, AppViewAndintToAppViewOfScorecardComponent());
  dart.defineLazy(scorecard__scorecard$46template, {
    /*scorecard__scorecard$46template.styles$ScorecardComponentHost*/get styles$ScorecardComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ScorecardComponent_0_5 = Symbol('_ScorecardComponent_0_5');
  scorecard__scorecard$46template._ViewScorecardComponentHost0 = class _ViewScorecardComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new scorecard__scorecard$46template.ViewScorecardComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ScorecardComponent_0_5] = new scorecard__scorecard.ScorecardComponent.new(this[_compView_0].ref, this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_ScorecardComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfScorecardComponent()).new(0, this, this.rootEl, this[_ScorecardComponent_0_5]);
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
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ScorecardComponent_0_5] = null;
    scorecard__scorecard$46template._ViewScorecardComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponentHost0.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponentHost0);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponentHost0, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponentHost0, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(scorecard__scorecard$46template.ViewScorecardComponent0),
    [_ScorecardComponent_0_5]: dart.fieldType(scorecard__scorecard.ScorecardComponent)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponentHost0 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(scorecard__scorecard$46template, {
    /*scorecard__scorecard$46template.ScorecardComponentNgFactory*/get ScorecardComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfScorecardComponent()).new('acx-scorecard', scorecard__scorecard$46template.viewFactory_ScorecardComponentHost0, scorecard__scorecard$46template._ScorecardComponentMetadata));
    },
    /*scorecard__scorecard$46template._ScorecardComponentMetadata*/get _ScorecardComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*scorecard__scorecard$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  scorecard__scorecard$46template.initReflector = function() {
    if (dart.test(scorecard__scorecard$46template._visited)) {
      return;
    }
    scorecard__scorecard$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(scorecard__scorecard.ScorecardComponent), scorecard__scorecard$46template.ScorecardComponentNgFactory);
    angular$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    utils__color__color$46template.initReflector();
    utils__color__palette$46template.initReflector();
  };
  dart.fn(scorecard__scorecard$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/scorecard/scorecard.template.ddc", {
    "package:angular_components/scorecard/scorecard.template.dart": scorecard__scorecard$46template
  }, '{"version":3,"sourceRoot":"","sources":["scorecard.template.dart"],"names":[],"mappings":"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","file":"scorecard.template.ddc.js"}');
  // Exports:
  return {
    scorecard__scorecard$46template: scorecard__scorecard$46template
  };
});

//# sourceMappingURL=scorecard.template.ddc.js.map
