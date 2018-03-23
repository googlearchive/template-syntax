define(['dart_sdk', 'packages/angular_components/scorecard/scoreboard.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/scorecard/scorecard_bar', 'packages/angular_components/scorecard/scoreboard', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/scorecard/scorecard', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/src/scorecard/scorecard_bar.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/color/palette.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/scorecard/scorecard.template'], function(dart_sdk, scoreboard$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_if, dom_service, opaque_token, scorecard_bar, scoreboard, material_button, dark_theme, material_button$, material_icon, material_icon$, button_decorator, scorecard, reflector, angular, selection_model, scorecard_bar$, angular_2, palette, disposer, scorecard$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scorecard__scoreboard$46scss$46css$46shim = scoreboard$46scss$46css.scorecard__scoreboard$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__scorecard__scorecard_bar = scorecard_bar.src__scorecard__scorecard_bar;
  const scorecard__scoreboard = scoreboard.scorecard__scoreboard;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const scorecard__scorecard = scorecard.scorecard__scorecard;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const src__scorecard__scorecard_bar$46template = scorecard_bar$.src__scorecard__scorecard_bar$46template;
  const utils__browser__dom_service__angular_2$46template = angular_2.utils__browser__dom_service__angular_2$46template;
  const utils__color__palette$46template = palette.utils__color__palette$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const scorecard__scorecard$46template = scorecard$.scorecard__scorecard$46template;
  const _root = Object.create(null);
  const scorecard__scoreboard$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfScoreboardComponent = () => (AppViewOfScoreboardComponent = dart.constFn(src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent)))();
  let AppViewAndintToAppViewOfScoreboardComponent = () => (AppViewAndintToAppViewOfScoreboardComponent = dart.constFn(dart.fnType(AppViewOfScoreboardComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let JSArrayOfScorecardComponent = () => (JSArrayOfScorecardComponent = dart.constFn(_interceptors.JSArray$(scorecard__scorecard.ScorecardComponent)))();
  let ComponentRefOfScoreboardComponent = () => (ComponentRefOfScoreboardComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfScoreboardComponent = () => (ComponentFactoryOfScoreboardComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(scorecard__scoreboard.ScoreboardComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(scorecard__scoreboard$46template, {
    /*scorecard__scoreboard$46template.styles$ScoreboardComponent*/get styles$ScoreboardComponent() {
      return dart.constList([scorecard__scoreboard$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_ScorecardBarDirective_1_0_isDirty = Symbol('_query_ScorecardBarDirective_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _el_2 = Symbol('_el_2');
  const _ScorecardBarDirective_2_5 = Symbol('_ScorecardBarDirective_2_5');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  let const$0;
  scorecard__scoreboard$46template.ViewScoreboardComponent0 = class ViewScoreboardComponent0 extends src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'acx-scoreboard';
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], scorecard__scoreboard$46template.viewFactory_ScoreboardComponent1);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_2].className = 'scorecard-bar';
      this.createAttr(this[_el_2], 'scorecardBar', '');
      this.addShimC(this[_el_2]);
      this[_ScorecardBarDirective_2_5] = new src__scorecard__scorecard_bar.ScorecardBarDirective.new(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_el_2], core.bool._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new('isRtl'))), this.viewData.parentIndex, null)));
      this.project(this[_el_2], 0);
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], scorecard__scoreboard$46template.viewFactory_ScoreboardComponent2);
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this.ctx.scorecardBar = this[_ScorecardBarDirective_2_5];
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__scorecard__scorecard_bar.ScorecardBarDirective) && 2 === nodeIndex) {
        return this[_ScorecardBarDirective_2_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      this[_NgIf_1_9].ngIf = _ctx.isScrollable;
      let currVal_3 = _ctx.isVertical;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_ScorecardBarDirective_2_5].isVertical = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (firstCheck) {
        this[_ScorecardBarDirective_2_5].ngOnInit();
      }
      this[_NgIf_3_9].ngIf = _ctx.isScrollable;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      let currVal_0 = !dart.test(_ctx.isVertical);
      if (!(this[_expr_0] === currVal_0)) {
        this.updateClass(this[_el_0], 'acx-scoreboard-horizontal', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isVertical;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateClass(this[_el_0], 'acx-scoreboard-vertical', currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_ScorecardBarDirective_2_5].ngAfterViewChecked();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3];
      t$ == null ? null : t$.destroyNestedViews();
      this[_ScorecardBarDirective_2_5].ngOnDestroy();
    }
  };
  (scorecard__scoreboard$46template.ViewScoreboardComponent0.new = function(parentView, parentIndex) {
    this[_query_ScorecardBarDirective_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_el_2] = null;
    this[_ScorecardBarDirective_2_5] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    scorecard__scoreboard$46template.ViewScoreboardComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('acx-scoreboard'));
    let t = scorecard__scoreboard$46template.ViewScoreboardComponent0._renderType;
    t == null ? scorecard__scoreboard$46template.ViewScoreboardComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, scorecard__scoreboard$46template.styles$ScoreboardComponent) : t;
    this.setupComponentType(scorecard__scoreboard$46template.ViewScoreboardComponent0._renderType);
  }).prototype = scorecard__scoreboard$46template.ViewScoreboardComponent0.prototype;
  dart.addTypeTests(scorecard__scoreboard$46template.ViewScoreboardComponent0);
  dart.setMethodSignature(scorecard__scoreboard$46template.ViewScoreboardComponent0, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard$46template.ViewScoreboardComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scoreboard$46template.ViewScoreboardComponent0, () => ({
    __proto__: dart.getFields(scorecard__scoreboard$46template.ViewScoreboardComponent0.__proto__),
    [_query_ScorecardBarDirective_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_2]: dart.fieldType(html.DivElement),
    [_ScorecardBarDirective_2_5]: dart.fieldType(src__scorecard__scorecard_bar.ScorecardBarDirective),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(scorecard__scoreboard$46template.ViewScoreboardComponent0, {
    /*scorecard__scoreboard$46template.ViewScoreboardComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  scorecard__scoreboard$46template.viewFactory_ScoreboardComponent0 = function(parentView, parentIndex) {
    return new scorecard__scoreboard$46template.ViewScoreboardComponent0.new(parentView, parentIndex);
  };
  dart.fn(scorecard__scoreboard$46template.viewFactory_ScoreboardComponent0, AppViewAndintToAppViewOfScoreboardComponent());
  const _compView_0 = Symbol('_compView_0');
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _MaterialButtonComponent_0_6 = Symbol('_MaterialButtonComponent_0_6');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialIconComponent_1_5 = Symbol('_MaterialIconComponent_1_5');
  const _expr_2 = Symbol('_expr_2');
  let const$1;
  scorecard__scoreboard$46template._ViewScoreboardComponent1 = class _ViewScoreboardComponent1 extends src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent) {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'scroll-button scroll-back-button';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('acxDarkTheme'))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), this[_AcxDarkTheme_0_5], this[_compView_0].ref);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5], []);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfElement().of([this[_el_1]])]);
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'scrollBack')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.backIconType;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MaterialIconComponent_1_5].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.atScorecardBarStart;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_0], 'hide', currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_1 = _ctx.scrollScorecardBarBack;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this[_el_1], 'aria-label', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
    }
  };
  (scorecard__scoreboard$46template._ViewScoreboardComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    scorecard__scoreboard$46template._ViewScoreboardComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scoreboard$46template.ViewScoreboardComponent0._renderType;
  }).prototype = scorecard__scoreboard$46template._ViewScoreboardComponent1.prototype;
  dart.addTypeTests(scorecard__scoreboard$46template._ViewScoreboardComponent1);
  dart.setMethodSignature(scorecard__scoreboard$46template._ViewScoreboardComponent1, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard$46template._ViewScoreboardComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scoreboard$46template._ViewScoreboardComponent1, () => ({
    __proto__: dart.getFields(scorecard__scoreboard$46template._ViewScoreboardComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scoreboard$46template.viewFactory_ScoreboardComponent1 = function(parentView, parentIndex) {
    return new scorecard__scoreboard$46template._ViewScoreboardComponent1.new(parentView, parentIndex);
  };
  dart.fn(scorecard__scoreboard$46template.viewFactory_ScoreboardComponent1, AppViewAndintToAppViewOfScoreboardComponent());
  let const$2;
  scorecard__scoreboard$46template._ViewScoreboardComponent2 = class _ViewScoreboardComponent2 extends src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent) {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'scroll-button scroll-forward-button';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('acxDarkTheme'))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), this[_AcxDarkTheme_0_5], this[_compView_0].ref);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5], []);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfElement().of([this[_el_1]])]);
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'scrollForward')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.forwardIconType;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MaterialIconComponent_1_5].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.atScorecardBarEnd;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_0], 'hide', currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_1 = _ctx.scrollScorecardBarForward;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this[_el_1], 'aria-label', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
    }
  };
  (scorecard__scoreboard$46template._ViewScoreboardComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    scorecard__scoreboard$46template._ViewScoreboardComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = scorecard__scoreboard$46template.ViewScoreboardComponent0._renderType;
  }).prototype = scorecard__scoreboard$46template._ViewScoreboardComponent2.prototype;
  dart.addTypeTests(scorecard__scoreboard$46template._ViewScoreboardComponent2);
  dart.setMethodSignature(scorecard__scoreboard$46template._ViewScoreboardComponent2, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard$46template._ViewScoreboardComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scoreboard$46template._ViewScoreboardComponent2, () => ({
    __proto__: dart.getFields(scorecard__scoreboard$46template._ViewScoreboardComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scoreboard$46template.viewFactory_ScoreboardComponent2 = function(parentView, parentIndex) {
    return new scorecard__scoreboard$46template._ViewScoreboardComponent2.new(parentView, parentIndex);
  };
  dart.fn(scorecard__scoreboard$46template.viewFactory_ScoreboardComponent2, AppViewAndintToAppViewOfScoreboardComponent());
  dart.defineLazy(scorecard__scoreboard$46template, {
    /*scorecard__scoreboard$46template.styles$ScoreboardComponentHost*/get styles$ScoreboardComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ScoreboardComponent_0_5 = Symbol('_ScoreboardComponent_0_5');
  const _query_ScorecardComponent_0_0_isDirty = Symbol('_query_ScorecardComponent_0_0_isDirty');
  scorecard__scoreboard$46template._ViewScoreboardComponentHost0 = class _ViewScoreboardComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new scorecard__scoreboard$46template.ViewScoreboardComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ScoreboardComponent_0_5] = new scorecard__scoreboard.ScoreboardComponent.new(null, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_0].ref);
      this[_ScoreboardComponent_0_5].scoreCards = JSArrayOfScorecardComponent().of([]);
      this[_compView_0].create(this[_ScoreboardComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfScoreboardComponent()).new(0, this, this.rootEl, this[_ScoreboardComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_ScoreboardComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_ScoreboardComponent_0_5].ngOnDestroy();
    }
  };
  (scorecard__scoreboard$46template._ViewScoreboardComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ScoreboardComponent_0_5] = null;
    this[_query_ScorecardComponent_0_0_isDirty] = true;
    scorecard__scoreboard$46template._ViewScoreboardComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = scorecard__scoreboard$46template._ViewScoreboardComponentHost0.prototype;
  dart.addTypeTests(scorecard__scoreboard$46template._ViewScoreboardComponentHost0);
  dart.setMethodSignature(scorecard__scoreboard$46template._ViewScoreboardComponentHost0, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard$46template._ViewScoreboardComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(scorecard__scoreboard$46template._ViewScoreboardComponentHost0, () => ({
    __proto__: dart.getFields(scorecard__scoreboard$46template._ViewScoreboardComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(scorecard__scoreboard$46template.ViewScoreboardComponent0),
    [_ScoreboardComponent_0_5]: dart.fieldType(scorecard__scoreboard.ScoreboardComponent),
    [_query_ScorecardComponent_0_0_isDirty]: dart.fieldType(core.bool)
  }));
  scorecard__scoreboard$46template.viewFactory_ScoreboardComponentHost0 = function(parentView, parentIndex) {
    return new scorecard__scoreboard$46template._ViewScoreboardComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(scorecard__scoreboard$46template.viewFactory_ScoreboardComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(scorecard__scoreboard$46template, {
    /*scorecard__scoreboard$46template.ScoreboardComponentNgFactory*/get ScoreboardComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfScoreboardComponent()).new('acx-scoreboard', scorecard__scoreboard$46template.viewFactory_ScoreboardComponentHost0, scorecard__scoreboard$46template._ScoreboardComponentMetadata));
    },
    /*scorecard__scoreboard$46template._ScoreboardComponentMetadata*/get _ScoreboardComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*scorecard__scoreboard$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  scorecard__scoreboard$46template.initReflector = function() {
    if (dart.test(scorecard__scoreboard$46template._visited)) {
      return;
    }
    scorecard__scoreboard$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(scorecard__scoreboard.ScoreboardComponent), scorecard__scoreboard$46template.ScoreboardComponentNgFactory);
    angular$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    src__scorecard__scorecard_bar$46template.initReflector();
    utils__browser__dom_service__angular_2$46template.initReflector();
    utils__color__palette$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    scorecard__scorecard$46template.initReflector();
  };
  dart.fn(scorecard__scoreboard$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/scorecard/scoreboard.template.ddc", {
    "package:angular_components/scorecard/scoreboard.template.dart": scorecard__scoreboard$46template
  }, '{"version":3,"sourceRoot":"","sources":["scoreboard.template.dart"],"names":[],"mappings":"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","file":"scoreboard.template.ddc.js"}');
  // Exports:
  return {
    scorecard__scoreboard$46template: scorecard__scoreboard$46template
  };
});

//# sourceMappingURL=scoreboard.template.ddc.js.map
