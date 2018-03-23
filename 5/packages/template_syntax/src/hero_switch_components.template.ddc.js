define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/template_syntax/src/hero_switch_components', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/di/reflector', 'packages/template_syntax/src/hero.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, hero_switch_components, app_view, reflector, hero, angular) {
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
  const src__hero_switch_components = hero_switch_components.src__hero_switch_components;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero$46template = hero.src__hero$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_switch_components$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHappyHeroComponent = () => (AppViewOfHappyHeroComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_switch_components.HappyHeroComponent)))();
  let AppViewAndintToAppViewOfHappyHeroComponent = () => (AppViewAndintToAppViewOfHappyHeroComponent = dart.constFn(dart.fnType(AppViewOfHappyHeroComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHappyHeroComponent = () => (ComponentRefOfHappyHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_switch_components.HappyHeroComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHappyHeroComponent = () => (ComponentFactoryOfHappyHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_switch_components.HappyHeroComponent)))();
  let AppViewOfSadHeroComponent = () => (AppViewOfSadHeroComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_switch_components.SadHeroComponent)))();
  let AppViewAndintToAppViewOfSadHeroComponent = () => (AppViewAndintToAppViewOfSadHeroComponent = dart.constFn(dart.fnType(AppViewOfSadHeroComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfSadHeroComponent = () => (ComponentRefOfSadHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_switch_components.SadHeroComponent)))();
  let ComponentFactoryOfSadHeroComponent = () => (ComponentFactoryOfSadHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_switch_components.SadHeroComponent)))();
  let AppViewOfConfusedHeroComponent = () => (AppViewOfConfusedHeroComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_switch_components.ConfusedHeroComponent)))();
  let AppViewAndintToAppViewOfConfusedHeroComponent = () => (AppViewAndintToAppViewOfConfusedHeroComponent = dart.constFn(dart.fnType(AppViewOfConfusedHeroComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfConfusedHeroComponent = () => (ComponentRefOfConfusedHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_switch_components.ConfusedHeroComponent)))();
  let ComponentFactoryOfConfusedHeroComponent = () => (ComponentFactoryOfConfusedHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_switch_components.ConfusedHeroComponent)))();
  let AppViewOfUnknownHeroComponent = () => (AppViewOfUnknownHeroComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_switch_components.UnknownHeroComponent)))();
  let AppViewAndintToAppViewOfUnknownHeroComponent = () => (AppViewAndintToAppViewOfUnknownHeroComponent = dart.constFn(dart.fnType(AppViewOfUnknownHeroComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfUnknownHeroComponent = () => (ComponentRefOfUnknownHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_switch_components.UnknownHeroComponent)))();
  let ComponentFactoryOfUnknownHeroComponent = () => (ComponentFactoryOfUnknownHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_switch_components.UnknownHeroComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_switch_components$46template, {
    /*src__hero_switch_components$46template.styles$HappyHeroComponent*/get styles$HappyHeroComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__hero_switch_components$46template.ViewHappyHeroComponent0 = class ViewHappyHeroComponent0 extends src__core__linker__app_view.AppView$(src__hero_switch_components.HappyHeroComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('Wow. You like ');
      parentRenderNode[$append](_text_0);
      this[_text_1] = html.Text.new('');
      parentRenderNode[$append](this[_text_1]);
      let _text_2 = html.Text.new('. What a happy hero ... just like you.');
      parentRenderNode[$append](_text_2);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.hero.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__hero_switch_components$46template.ViewHappyHeroComponent0.new = function(parentView, parentIndex) {
    this[_text_1] = null;
    this[_expr_0] = null;
    src__hero_switch_components$46template.ViewHappyHeroComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('happy-hero'));
    let t = src__hero_switch_components$46template.ViewHappyHeroComponent0._renderType;
    t == null ? src__hero_switch_components$46template.ViewHappyHeroComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__hero_switch_components$46template.styles$HappyHeroComponent) : t;
    this.setupComponentType(src__hero_switch_components$46template.ViewHappyHeroComponent0._renderType);
  }).prototype = src__hero_switch_components$46template.ViewHappyHeroComponent0.prototype;
  dart.addTypeTests(src__hero_switch_components$46template.ViewHappyHeroComponent0);
  dart.setMethodSignature(src__hero_switch_components$46template.ViewHappyHeroComponent0, () => ({
    __proto__: dart.getMethods(src__hero_switch_components$46template.ViewHappyHeroComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_switch_components.HappyHeroComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_switch_components$46template.ViewHappyHeroComponent0, () => ({
    __proto__: dart.getFields(src__hero_switch_components$46template.ViewHappyHeroComponent0.__proto__),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__hero_switch_components$46template.ViewHappyHeroComponent0, {
    /*src__hero_switch_components$46template.ViewHappyHeroComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_switch_components$46template.viewFactory_HappyHeroComponent0 = function(parentView, parentIndex) {
    return new src__hero_switch_components$46template.ViewHappyHeroComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_switch_components$46template.viewFactory_HappyHeroComponent0, AppViewAndintToAppViewOfHappyHeroComponent());
  dart.defineLazy(src__hero_switch_components$46template, {
    /*src__hero_switch_components$46template.styles$HappyHeroComponentHost*/get styles$HappyHeroComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HappyHeroComponent_0_5 = Symbol('_HappyHeroComponent_0_5');
  src__hero_switch_components$46template._ViewHappyHeroComponentHost0 = class _ViewHappyHeroComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_switch_components$46template.ViewHappyHeroComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HappyHeroComponent_0_5] = new src__hero_switch_components.HappyHeroComponent.new();
      this[_compView_0].create(this[_HappyHeroComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHappyHeroComponent()).new(0, this, this.rootEl, this[_HappyHeroComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_switch_components$46template._ViewHappyHeroComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HappyHeroComponent_0_5] = null;
    src__hero_switch_components$46template._ViewHappyHeroComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_switch_components$46template._ViewHappyHeroComponentHost0.prototype;
  dart.addTypeTests(src__hero_switch_components$46template._ViewHappyHeroComponentHost0);
  dart.setMethodSignature(src__hero_switch_components$46template._ViewHappyHeroComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_switch_components$46template._ViewHappyHeroComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_switch_components$46template._ViewHappyHeroComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_switch_components$46template._ViewHappyHeroComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_switch_components$46template.ViewHappyHeroComponent0),
    [_HappyHeroComponent_0_5]: dart.fieldType(src__hero_switch_components.HappyHeroComponent)
  }));
  src__hero_switch_components$46template.viewFactory_HappyHeroComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_switch_components$46template._ViewHappyHeroComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_switch_components$46template.viewFactory_HappyHeroComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_switch_components$46template, {
    /*src__hero_switch_components$46template.HappyHeroComponentNgFactory*/get HappyHeroComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHappyHeroComponent()).new('happy-hero', src__hero_switch_components$46template.viewFactory_HappyHeroComponentHost0, src__hero_switch_components$46template._HappyHeroComponentMetadata));
    },
    /*src__hero_switch_components$46template.styles$SadHeroComponent*/get styles$SadHeroComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  let const$0;
  src__hero_switch_components$46template.ViewSadHeroComponent0 = class ViewSadHeroComponent0 extends src__core__linker__app_view.AppView$(src__hero_switch_components.SadHeroComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('You like ');
      parentRenderNode[$append](_text_0);
      this[_text_1] = html.Text.new('');
      parentRenderNode[$append](this[_text_1]);
      let _text_2 = html.Text.new('? Such a sad hero. Are you sad too?');
      parentRenderNode[$append](_text_2);
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.hero.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__hero_switch_components$46template.ViewSadHeroComponent0.new = function(parentView, parentIndex) {
    this[_text_1] = null;
    this[_expr_0] = null;
    src__hero_switch_components$46template.ViewSadHeroComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('sad-hero'));
    let t = src__hero_switch_components$46template.ViewSadHeroComponent0._renderType;
    t == null ? src__hero_switch_components$46template.ViewSadHeroComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__hero_switch_components$46template.styles$SadHeroComponent) : t;
    this.setupComponentType(src__hero_switch_components$46template.ViewSadHeroComponent0._renderType);
  }).prototype = src__hero_switch_components$46template.ViewSadHeroComponent0.prototype;
  dart.addTypeTests(src__hero_switch_components$46template.ViewSadHeroComponent0);
  dart.setMethodSignature(src__hero_switch_components$46template.ViewSadHeroComponent0, () => ({
    __proto__: dart.getMethods(src__hero_switch_components$46template.ViewSadHeroComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_switch_components.SadHeroComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_switch_components$46template.ViewSadHeroComponent0, () => ({
    __proto__: dart.getFields(src__hero_switch_components$46template.ViewSadHeroComponent0.__proto__),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__hero_switch_components$46template.ViewSadHeroComponent0, {
    /*src__hero_switch_components$46template.ViewSadHeroComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_switch_components$46template.viewFactory_SadHeroComponent0 = function(parentView, parentIndex) {
    return new src__hero_switch_components$46template.ViewSadHeroComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_switch_components$46template.viewFactory_SadHeroComponent0, AppViewAndintToAppViewOfSadHeroComponent());
  dart.defineLazy(src__hero_switch_components$46template, {
    /*src__hero_switch_components$46template.styles$SadHeroComponentHost*/get styles$SadHeroComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _SadHeroComponent_0_5 = Symbol('_SadHeroComponent_0_5');
  src__hero_switch_components$46template._ViewSadHeroComponentHost0 = class _ViewSadHeroComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_switch_components$46template.ViewSadHeroComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_SadHeroComponent_0_5] = new src__hero_switch_components.SadHeroComponent.new();
      this[_compView_0].create(this[_SadHeroComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfSadHeroComponent()).new(0, this, this.rootEl, this[_SadHeroComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_switch_components$46template._ViewSadHeroComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_SadHeroComponent_0_5] = null;
    src__hero_switch_components$46template._ViewSadHeroComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_switch_components$46template._ViewSadHeroComponentHost0.prototype;
  dart.addTypeTests(src__hero_switch_components$46template._ViewSadHeroComponentHost0);
  dart.setMethodSignature(src__hero_switch_components$46template._ViewSadHeroComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_switch_components$46template._ViewSadHeroComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_switch_components$46template._ViewSadHeroComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_switch_components$46template._ViewSadHeroComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_switch_components$46template.ViewSadHeroComponent0),
    [_SadHeroComponent_0_5]: dart.fieldType(src__hero_switch_components.SadHeroComponent)
  }));
  src__hero_switch_components$46template.viewFactory_SadHeroComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_switch_components$46template._ViewSadHeroComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_switch_components$46template.viewFactory_SadHeroComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_switch_components$46template, {
    /*src__hero_switch_components$46template.SadHeroComponentNgFactory*/get SadHeroComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfSadHeroComponent()).new('sad-hero', src__hero_switch_components$46template.viewFactory_SadHeroComponentHost0, src__hero_switch_components$46template._SadHeroComponentMetadata));
    },
    /*src__hero_switch_components$46template.styles$ConfusedHeroComponent*/get styles$ConfusedHeroComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  let const$1;
  src__hero_switch_components$46template.ViewConfusedHeroComponent0 = class ViewConfusedHeroComponent0 extends src__core__linker__app_view.AppView$(src__hero_switch_components.ConfusedHeroComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('Are you as confused as ');
      parentRenderNode[$append](_text_0);
      this[_text_1] = html.Text.new('');
      parentRenderNode[$append](this[_text_1]);
      let _text_2 = html.Text.new('?');
      parentRenderNode[$append](_text_2);
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.hero.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__hero_switch_components$46template.ViewConfusedHeroComponent0.new = function(parentView, parentIndex) {
    this[_text_1] = null;
    this[_expr_0] = null;
    src__hero_switch_components$46template.ViewConfusedHeroComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('confused-hero'));
    let t = src__hero_switch_components$46template.ViewConfusedHeroComponent0._renderType;
    t == null ? src__hero_switch_components$46template.ViewConfusedHeroComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__hero_switch_components$46template.styles$ConfusedHeroComponent) : t;
    this.setupComponentType(src__hero_switch_components$46template.ViewConfusedHeroComponent0._renderType);
  }).prototype = src__hero_switch_components$46template.ViewConfusedHeroComponent0.prototype;
  dart.addTypeTests(src__hero_switch_components$46template.ViewConfusedHeroComponent0);
  dart.setMethodSignature(src__hero_switch_components$46template.ViewConfusedHeroComponent0, () => ({
    __proto__: dart.getMethods(src__hero_switch_components$46template.ViewConfusedHeroComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_switch_components.ConfusedHeroComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_switch_components$46template.ViewConfusedHeroComponent0, () => ({
    __proto__: dart.getFields(src__hero_switch_components$46template.ViewConfusedHeroComponent0.__proto__),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__hero_switch_components$46template.ViewConfusedHeroComponent0, {
    /*src__hero_switch_components$46template.ViewConfusedHeroComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_switch_components$46template.viewFactory_ConfusedHeroComponent0 = function(parentView, parentIndex) {
    return new src__hero_switch_components$46template.ViewConfusedHeroComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_switch_components$46template.viewFactory_ConfusedHeroComponent0, AppViewAndintToAppViewOfConfusedHeroComponent());
  dart.defineLazy(src__hero_switch_components$46template, {
    /*src__hero_switch_components$46template.styles$ConfusedHeroComponentHost*/get styles$ConfusedHeroComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ConfusedHeroComponent_0_5 = Symbol('_ConfusedHeroComponent_0_5');
  src__hero_switch_components$46template._ViewConfusedHeroComponentHost0 = class _ViewConfusedHeroComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_switch_components$46template.ViewConfusedHeroComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ConfusedHeroComponent_0_5] = new src__hero_switch_components.ConfusedHeroComponent.new();
      this[_compView_0].create(this[_ConfusedHeroComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfConfusedHeroComponent()).new(0, this, this.rootEl, this[_ConfusedHeroComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_switch_components$46template._ViewConfusedHeroComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ConfusedHeroComponent_0_5] = null;
    src__hero_switch_components$46template._ViewConfusedHeroComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_switch_components$46template._ViewConfusedHeroComponentHost0.prototype;
  dart.addTypeTests(src__hero_switch_components$46template._ViewConfusedHeroComponentHost0);
  dart.setMethodSignature(src__hero_switch_components$46template._ViewConfusedHeroComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_switch_components$46template._ViewConfusedHeroComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_switch_components$46template._ViewConfusedHeroComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_switch_components$46template._ViewConfusedHeroComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_switch_components$46template.ViewConfusedHeroComponent0),
    [_ConfusedHeroComponent_0_5]: dart.fieldType(src__hero_switch_components.ConfusedHeroComponent)
  }));
  src__hero_switch_components$46template.viewFactory_ConfusedHeroComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_switch_components$46template._ViewConfusedHeroComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_switch_components$46template.viewFactory_ConfusedHeroComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_switch_components$46template, {
    /*src__hero_switch_components$46template.ConfusedHeroComponentNgFactory*/get ConfusedHeroComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfConfusedHeroComponent()).new('confused-hero', src__hero_switch_components$46template.viewFactory_ConfusedHeroComponentHost0, src__hero_switch_components$46template._ConfusedHeroComponentMetadata));
    },
    /*src__hero_switch_components$46template.styles$UnknownHeroComponent*/get styles$UnknownHeroComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _text_0 = Symbol('_text_0');
  let const$2;
  src__hero_switch_components$46template.ViewUnknownHeroComponent0 = class ViewUnknownHeroComponent0 extends src__core__linker__app_view.AppView$(src__hero_switch_components.UnknownHeroComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_text_0] = html.Text.new('');
      parentRenderNode[$append](this[_text_0]);
      this.init(const$2 || (const$2 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.message;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_0][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__hero_switch_components$46template.ViewUnknownHeroComponent0.new = function(parentView, parentIndex) {
    this[_text_0] = null;
    this[_expr_0] = null;
    src__hero_switch_components$46template.ViewUnknownHeroComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('unknown-hero'));
    let t = src__hero_switch_components$46template.ViewUnknownHeroComponent0._renderType;
    t == null ? src__hero_switch_components$46template.ViewUnknownHeroComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__hero_switch_components$46template.styles$UnknownHeroComponent) : t;
    this.setupComponentType(src__hero_switch_components$46template.ViewUnknownHeroComponent0._renderType);
  }).prototype = src__hero_switch_components$46template.ViewUnknownHeroComponent0.prototype;
  dart.addTypeTests(src__hero_switch_components$46template.ViewUnknownHeroComponent0);
  dart.setMethodSignature(src__hero_switch_components$46template.ViewUnknownHeroComponent0, () => ({
    __proto__: dart.getMethods(src__hero_switch_components$46template.ViewUnknownHeroComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_switch_components.UnknownHeroComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_switch_components$46template.ViewUnknownHeroComponent0, () => ({
    __proto__: dart.getFields(src__hero_switch_components$46template.ViewUnknownHeroComponent0.__proto__),
    [_text_0]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__hero_switch_components$46template.ViewUnknownHeroComponent0, {
    /*src__hero_switch_components$46template.ViewUnknownHeroComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_switch_components$46template.viewFactory_UnknownHeroComponent0 = function(parentView, parentIndex) {
    return new src__hero_switch_components$46template.ViewUnknownHeroComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_switch_components$46template.viewFactory_UnknownHeroComponent0, AppViewAndintToAppViewOfUnknownHeroComponent());
  dart.defineLazy(src__hero_switch_components$46template, {
    /*src__hero_switch_components$46template.styles$UnknownHeroComponentHost*/get styles$UnknownHeroComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _UnknownHeroComponent_0_5 = Symbol('_UnknownHeroComponent_0_5');
  src__hero_switch_components$46template._ViewUnknownHeroComponentHost0 = class _ViewUnknownHeroComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_switch_components$46template.ViewUnknownHeroComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_UnknownHeroComponent_0_5] = new src__hero_switch_components.UnknownHeroComponent.new();
      this[_compView_0].create(this[_UnknownHeroComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfUnknownHeroComponent()).new(0, this, this.rootEl, this[_UnknownHeroComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_switch_components$46template._ViewUnknownHeroComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_UnknownHeroComponent_0_5] = null;
    src__hero_switch_components$46template._ViewUnknownHeroComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_switch_components$46template._ViewUnknownHeroComponentHost0.prototype;
  dart.addTypeTests(src__hero_switch_components$46template._ViewUnknownHeroComponentHost0);
  dart.setMethodSignature(src__hero_switch_components$46template._ViewUnknownHeroComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_switch_components$46template._ViewUnknownHeroComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_switch_components$46template._ViewUnknownHeroComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_switch_components$46template._ViewUnknownHeroComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_switch_components$46template.ViewUnknownHeroComponent0),
    [_UnknownHeroComponent_0_5]: dart.fieldType(src__hero_switch_components.UnknownHeroComponent)
  }));
  src__hero_switch_components$46template.viewFactory_UnknownHeroComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_switch_components$46template._ViewUnknownHeroComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_switch_components$46template.viewFactory_UnknownHeroComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_switch_components$46template, {
    /*src__hero_switch_components$46template.UnknownHeroComponentNgFactory*/get UnknownHeroComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfUnknownHeroComponent()).new('unknown-hero', src__hero_switch_components$46template.viewFactory_UnknownHeroComponentHost0, src__hero_switch_components$46template._UnknownHeroComponentMetadata));
    },
    /*src__hero_switch_components$46template._HappyHeroComponentMetadata*/get _HappyHeroComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_switch_components$46template._SadHeroComponentMetadata*/get _SadHeroComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_switch_components$46template._ConfusedHeroComponentMetadata*/get _ConfusedHeroComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_switch_components$46template._UnknownHeroComponentMetadata*/get _UnknownHeroComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_switch_components$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_switch_components$46template.initReflector = function() {
    if (dart.test(src__hero_switch_components$46template._visited)) {
      return;
    }
    src__hero_switch_components$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_switch_components.HappyHeroComponent), src__hero_switch_components$46template.HappyHeroComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__hero_switch_components.SadHeroComponent), src__hero_switch_components$46template.SadHeroComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__hero_switch_components.ConfusedHeroComponent), src__hero_switch_components$46template.ConfusedHeroComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__hero_switch_components.UnknownHeroComponent), src__hero_switch_components$46template.UnknownHeroComponentNgFactory);
    src__hero$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__hero_switch_components$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/template_syntax/src/hero_switch_components.template.ddc", {
    "package:template_syntax/src/hero_switch_components.template.dart": src__hero_switch_components$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_switch_components.template.dart"],"names":[],"mappings":"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","file":"hero_switch_components.template.ddc.js"}');
  // Exports:
  return {
    src__hero_switch_components$46template: src__hero_switch_components$46template
  };
});

//# sourceMappingURL=hero_switch_components.template.ddc.js.map
