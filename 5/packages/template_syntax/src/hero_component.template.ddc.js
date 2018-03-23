define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/template_syntax/src/hero_component', 'packages/angular/src/common/pipes/date_pipe', 'packages/angular/src/common/pipes/number_pipe', 'packages/angular/src/di/reflector', 'packages/template_syntax/src/hero.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, hero_component, date_pipe, number_pipe, reflector, hero, angular) {
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
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__hero_component = hero_component.src__hero_component;
  const src__common__pipes__date_pipe = date_pipe.src__common__pipes__date_pipe;
  const src__common__pipes__number_pipe = number_pipe.src__common__pipes__number_pipe;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero$46template = hero.src__hero$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroComponent = () => (AppViewOfHeroComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_component.HeroComponent)))();
  let AppViewAndintToAppViewOfHeroComponent = () => (AppViewAndintToAppViewOfHeroComponent = dart.constFn(dart.fnType(AppViewOfHeroComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroComponent = () => (ComponentRefOfHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_component.HeroComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroComponent = () => (ComponentFactoryOfHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_component.HeroComponent)))();
  let dynamicAndStringToString = () => (dynamicAndStringToString = dart.constFn(dart.fnType(core.String, [dart.dynamic, core.String])))();
  let AppViewOfBigHeroComponent = () => (AppViewOfBigHeroComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_component.BigHeroComponent)))();
  let AppViewAndintToAppViewOfBigHeroComponent = () => (AppViewAndintToAppViewOfBigHeroComponent = dart.constFn(dart.fnType(AppViewOfBigHeroComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfBigHeroComponent = () => (ComponentRefOfBigHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_component.BigHeroComponent)))();
  let ComponentFactoryOfBigHeroComponent = () => (ComponentFactoryOfBigHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_component.BigHeroComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_component$46template, {
    /*src__hero_component$46template.styles$HeroComponent*/get styles$HeroComponent() {
      return dart.constList(['button._ngcontent-%COMP% { margin-left:8px; } div._ngcontent-%COMP% { margin:8px 0; } img._ngcontent-%COMP% { height:24px; }'], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _text_3 = Symbol('_text_3');
  const _text_5 = Symbol('_text_5');
  const _el_6 = Symbol('_el_6');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  src__hero_component$46template.ViewHeroComponent0 = class ViewHeroComponent0 extends src__core__linker__app_view.AppView$(src__hero_component.HeroComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'img', this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0]);
      this.addShimE(this[_el_2]);
      this[_text_3] = html.Text.new('');
      this[_el_2][$append](this[_text_3]);
      let _text_4 = html.Text.new(' ');
      this[_el_2][$append](_text_4);
      this[_text_5] = html.Text.new('');
      this[_el_2][$append](this[_text_5]);
      this[_el_6] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this.addShimC(this[_el_6]);
      let _text_7 = html.Text.new('Delete');
      this[_el_6][$append](_text_7);
      this[_el_6][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'delete')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.heroImageUrl;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this.setProp(this[_el_1], 'src', src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.lineThrough;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_el_2].style[$setProperty]('text-decoration', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let l$ = _ctx.prefix;
      let currVal_2 = l$ != null ? l$ : '';
      if (!(this[_expr_2] === currVal_2)) {
        this[_text_3][$text] = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.hero == null ? null : _ctx.hero.name);
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_text_5][$text] = core.String._check(currVal_3);
        this[_expr_3] = currVal_3;
      }
    }
  };
  (src__hero_component$46template.ViewHeroComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_text_3] = null;
    this[_text_5] = null;
    this[_el_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    src__hero_component$46template.ViewHeroComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-hero'));
    let t = src__hero_component$46template.ViewHeroComponent0._renderType;
    t == null ? src__hero_component$46template.ViewHeroComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__hero_component$46template.styles$HeroComponent) : t;
    this.setupComponentType(src__hero_component$46template.ViewHeroComponent0._renderType);
  }).prototype = src__hero_component$46template.ViewHeroComponent0.prototype;
  dart.addTypeTests(src__hero_component$46template.ViewHeroComponent0);
  dart.setMethodSignature(src__hero_component$46template.ViewHeroComponent0, () => ({
    __proto__: dart.getMethods(src__hero_component$46template.ViewHeroComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_component.HeroComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_component$46template.ViewHeroComponent0, () => ({
    __proto__: dart.getFields(src__hero_component$46template.ViewHeroComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_text_3]: dart.fieldType(html.Text),
    [_text_5]: dart.fieldType(html.Text),
    [_el_6]: dart.fieldType(html.ButtonElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__hero_component$46template.ViewHeroComponent0, {
    /*src__hero_component$46template.ViewHeroComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_component$46template.viewFactory_HeroComponent0 = function(parentView, parentIndex) {
    return new src__hero_component$46template.ViewHeroComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_component$46template.viewFactory_HeroComponent0, AppViewAndintToAppViewOfHeroComponent());
  dart.defineLazy(src__hero_component$46template, {
    /*src__hero_component$46template.styles$HeroComponentHost*/get styles$HeroComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroComponent_0_5 = Symbol('_HeroComponent_0_5');
  src__hero_component$46template._ViewHeroComponentHost0 = class _ViewHeroComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_component$46template.ViewHeroComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroComponent_0_5] = new src__hero_component.HeroComponent.new();
      this[_compView_0].create(this[_HeroComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroComponent()).new(0, this, this.rootEl, this[_HeroComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_HeroComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_component$46template._ViewHeroComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroComponent_0_5] = null;
    src__hero_component$46template._ViewHeroComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_component$46template._ViewHeroComponentHost0.prototype;
  dart.addTypeTests(src__hero_component$46template._ViewHeroComponentHost0);
  dart.setMethodSignature(src__hero_component$46template._ViewHeroComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_component$46template._ViewHeroComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_component$46template._ViewHeroComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_component$46template._ViewHeroComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_component$46template.ViewHeroComponent0),
    [_HeroComponent_0_5]: dart.fieldType(src__hero_component.HeroComponent)
  }));
  src__hero_component$46template.viewFactory_HeroComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_component$46template._ViewHeroComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_component$46template.viewFactory_HeroComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_component$46template, {
    /*src__hero_component$46template.HeroComponentNgFactory*/get HeroComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroComponent()).new('my-hero', src__hero_component$46template.viewFactory_HeroComponentHost0, src__hero_component$46template._HeroComponentMetadata));
    },
    /*src__hero_component$46template.styles$BigHeroComponent*/get styles$BigHeroComponent() {
      return dart.constList(['.detail._ngcontent-%COMP% { border:1px solid black; padding:4px; max-width:450px; }', 'img._ngcontent-%COMP% { float:left; margin-right:8px; height:100px; }'], dart.dynamic);
    }
  });
  const _el_3 = Symbol('_el_3');
  const _text_4 = Symbol('_text_4');
  const _el_5 = Symbol('_el_5');
  const _text_7 = Symbol('_text_7');
  const _el_8 = Symbol('_el_8');
  const _text_10 = Symbol('_text_10');
  const _el_11 = Symbol('_el_11');
  const _text_13 = Symbol('_text_13');
  const _el_14 = Symbol('_el_14');
  const _el_16 = Symbol('_el_16');
  const _text_17 = Symbol('_text_17');
  const _el_18 = Symbol('_el_18');
  const _text_20 = Symbol('_text_20');
  const _el_21 = Symbol('_el_21');
  const _el_22 = Symbol('_el_22');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _pipe_date_0 = Symbol('_pipe_date_0');
  const _pipe_date_0_0 = Symbol('_pipe_date_0_0');
  const _pipe_currency_1 = Symbol('_pipe_currency_1');
  const _pipe_currency_1_0 = Symbol('_pipe_currency_1_0');
  let const$0;
  src__hero_component$46template.ViewBigHeroComponent0 = class ViewBigHeroComponent0 extends src__core__linker__app_view.AppView$(src__hero_component.BigHeroComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'detail';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'img', this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'b', this[_el_2]);
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new('');
      this[_el_3][$append](this[_text_4]);
      this[_el_5] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_5]);
      let _text_6 = html.Text.new('Name: ');
      this[_el_5][$append](_text_6);
      this[_text_7] = html.Text.new('');
      this[_el_5][$append](this[_text_7]);
      this[_el_8] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_8]);
      let _text_9 = html.Text.new('Emotion: ');
      this[_el_8][$append](_text_9);
      this[_text_10] = html.Text.new('');
      this[_el_8][$append](this[_text_10]);
      this[_el_11] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_11]);
      let _text_12 = html.Text.new('Birthdate: ');
      this[_el_11][$append](_text_12);
      this[_text_13] = html.Text.new('');
      this[_el_11][$append](this[_text_13]);
      this[_el_14] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_14]);
      let _text_15 = html.Text.new('Web:');
      this[_el_14][$append](_text_15);
      this[_el_16] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_14]));
      this.createAttr(this[_el_16], 'target', '_blank');
      this.addShimC(this[_el_16]);
      this[_text_17] = html.Text.new('');
      this[_el_16][$append](this[_text_17]);
      this[_el_18] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_18]);
      let _text_19 = html.Text.new('Rate/hr: ');
      this[_el_18][$append](_text_19);
      this[_text_20] = html.Text.new('');
      this[_el_18][$append](this[_text_20]);
      this[_el_21] = src__core__linker__app_view.createAndAppend(doc, 'br', this[_el_0]);
      this.createAttr(this[_el_21], 'clear', 'all');
      this.addShimE(this[_el_21]);
      this[_el_22] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this.addShimC(this[_el_22]);
      let _text_23 = html.Text.new('Delete');
      this[_el_22][$append](_text_23);
      this[_el_22][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'delete')));
      this[_pipe_date_0] = new src__common__pipes__date_pipe.DatePipe.new();
      this[_pipe_date_0_0] = src__core__linker__app_view_utils.pureProxy2(core.String, dart.dynamic, core.String, dart.bind(this[_pipe_date_0], 'transform'));
      this[_pipe_currency_1] = new src__common__pipes__number_pipe.CurrencyPipe.new();
      this[_pipe_currency_1_0] = src__core__linker__app_view_utils.pureProxy2(core.String, dart.dynamic, core.String, dart.bind(this[_pipe_currency_1], 'transform'));
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.heroImageUrl);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setProp(this[_el_1], 'src', src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.hero == null ? null : _ctx.hero.name);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_4][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.hero == null ? null : _ctx.hero.name);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_7][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.hero == null ? null : _ctx.hero.emotion);
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_text_10][$text] = core.String._check(currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = src__core__linker__app_view_utils.interpolate0(dart.dcall(this[_pipe_date_0_0], _ctx.hero == null ? null : _ctx.hero.birthdate, 'longDate'));
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_text_13][$text] = core.String._check(currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = src__core__linker__app_view_utils.interpolate0(_ctx.hero == null ? null : _ctx.hero.url);
      if (!core.identical(this[_expr_5], currVal_5)) {
        this.setProp(this[_el_16], 'href', src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = src__core__linker__app_view_utils.interpolate0(_ctx.hero == null ? null : _ctx.hero.url);
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_text_17][$text] = core.String._check(currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = src__core__linker__app_view_utils.interpolate0(dart.dcall(this[_pipe_currency_1_0], _ctx.hero == null ? null : _ctx.hero.rate, 'EUR'));
      if (!core.identical(this[_expr_7], currVal_7)) {
        this[_text_20][$text] = core.String._check(currVal_7);
        this[_expr_7] = currVal_7;
      }
    }
  };
  (src__hero_component$46template.ViewBigHeroComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_el_5] = null;
    this[_text_7] = null;
    this[_el_8] = null;
    this[_text_10] = null;
    this[_el_11] = null;
    this[_text_13] = null;
    this[_el_14] = null;
    this[_el_16] = null;
    this[_text_17] = null;
    this[_el_18] = null;
    this[_text_20] = null;
    this[_el_21] = null;
    this[_el_22] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_pipe_date_0] = null;
    this[_pipe_date_0_0] = null;
    this[_pipe_currency_1] = null;
    this[_pipe_currency_1_0] = null;
    src__hero_component$46template.ViewBigHeroComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-big-hero'));
    let t = src__hero_component$46template.ViewBigHeroComponent0._renderType;
    t == null ? src__hero_component$46template.ViewBigHeroComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__hero_component$46template.styles$BigHeroComponent) : t;
    this.setupComponentType(src__hero_component$46template.ViewBigHeroComponent0._renderType);
  }).prototype = src__hero_component$46template.ViewBigHeroComponent0.prototype;
  dart.addTypeTests(src__hero_component$46template.ViewBigHeroComponent0);
  dart.setMethodSignature(src__hero_component$46template.ViewBigHeroComponent0, () => ({
    __proto__: dart.getMethods(src__hero_component$46template.ViewBigHeroComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_component.BigHeroComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_component$46template.ViewBigHeroComponent0, () => ({
    __proto__: dart.getFields(src__hero_component$46template.ViewBigHeroComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_el_5]: dart.fieldType(html.DivElement),
    [_text_7]: dart.fieldType(html.Text),
    [_el_8]: dart.fieldType(html.DivElement),
    [_text_10]: dart.fieldType(html.Text),
    [_el_11]: dart.fieldType(html.DivElement),
    [_text_13]: dart.fieldType(html.Text),
    [_el_14]: dart.fieldType(html.DivElement),
    [_el_16]: dart.fieldType(html.AnchorElement),
    [_text_17]: dart.fieldType(html.Text),
    [_el_18]: dart.fieldType(html.DivElement),
    [_text_20]: dart.fieldType(html.Text),
    [_el_21]: dart.fieldType(html.Element),
    [_el_22]: dart.fieldType(html.ButtonElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_pipe_date_0]: dart.fieldType(src__common__pipes__date_pipe.DatePipe),
    [_pipe_date_0_0]: dart.fieldType(dynamicAndStringToString()),
    [_pipe_currency_1]: dart.fieldType(src__common__pipes__number_pipe.CurrencyPipe),
    [_pipe_currency_1_0]: dart.fieldType(dynamicAndStringToString())
  }));
  dart.defineLazy(src__hero_component$46template.ViewBigHeroComponent0, {
    /*src__hero_component$46template.ViewBigHeroComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_component$46template.viewFactory_BigHeroComponent0 = function(parentView, parentIndex) {
    return new src__hero_component$46template.ViewBigHeroComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_component$46template.viewFactory_BigHeroComponent0, AppViewAndintToAppViewOfBigHeroComponent());
  dart.defineLazy(src__hero_component$46template, {
    /*src__hero_component$46template.styles$BigHeroComponentHost*/get styles$BigHeroComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _BigHeroComponent_0_5 = Symbol('_BigHeroComponent_0_5');
  src__hero_component$46template._ViewBigHeroComponentHost0 = class _ViewBigHeroComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_component$46template.ViewBigHeroComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_BigHeroComponent_0_5] = new src__hero_component.BigHeroComponent.new();
      this[_compView_0].create(this[_BigHeroComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfBigHeroComponent()).new(0, this, this.rootEl, this[_BigHeroComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_BigHeroComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_component$46template._ViewBigHeroComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_BigHeroComponent_0_5] = null;
    src__hero_component$46template._ViewBigHeroComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_component$46template._ViewBigHeroComponentHost0.prototype;
  dart.addTypeTests(src__hero_component$46template._ViewBigHeroComponentHost0);
  dart.setMethodSignature(src__hero_component$46template._ViewBigHeroComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_component$46template._ViewBigHeroComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_component$46template._ViewBigHeroComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_component$46template._ViewBigHeroComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_component$46template.ViewBigHeroComponent0),
    [_BigHeroComponent_0_5]: dart.fieldType(src__hero_component.BigHeroComponent)
  }));
  src__hero_component$46template.viewFactory_BigHeroComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_component$46template._ViewBigHeroComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_component$46template.viewFactory_BigHeroComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_component$46template, {
    /*src__hero_component$46template.BigHeroComponentNgFactory*/get BigHeroComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfBigHeroComponent()).new('my-big-hero', src__hero_component$46template.viewFactory_BigHeroComponentHost0, src__hero_component$46template._BigHeroComponentMetadata));
    },
    /*src__hero_component$46template._HeroComponentMetadata*/get _HeroComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_component$46template._BigHeroComponentMetadata*/get _BigHeroComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_component$46template.initReflector = function() {
    if (dart.test(src__hero_component$46template._visited)) {
      return;
    }
    src__hero_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_component.HeroComponent), src__hero_component$46template.HeroComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__hero_component.BigHeroComponent), src__hero_component$46template.BigHeroComponentNgFactory);
    src__hero$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__hero_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/template_syntax/src/hero_component.template.ddc", {
    "package:template_syntax/src/hero_component.template.dart": src__hero_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_component.template.dart"],"names":[],"mappings":"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","file":"hero_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_component$46template: src__hero_component$46template
  };
});

//# sourceMappingURL=hero_component.template.ddc.js.map
