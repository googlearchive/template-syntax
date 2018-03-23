define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/template_syntax/src/sizer_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, sizer_component, reflector, angular) {
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
  const src__sizer_component = sizer_component.src__sizer_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__sizer_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfSizerComponent = () => (AppViewOfSizerComponent = dart.constFn(src__core__linker__app_view.AppView$(src__sizer_component.SizerComponent)))();
  let AppViewAndintToAppViewOfSizerComponent = () => (AppViewAndintToAppViewOfSizerComponent = dart.constFn(dart.fnType(AppViewOfSizerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfSizerComponent = () => (ComponentRefOfSizerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__sizer_component.SizerComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfSizerComponent = () => (ComponentFactoryOfSizerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__sizer_component.SizerComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__sizer_component$46template, {
    /*src__sizer_component$46template.styles$SizerComponent*/get styles$SizerComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_3 = Symbol('_el_3');
  const _el_5 = Symbol('_el_5');
  const _text_7 = Symbol('_text_7');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  src__sizer_component$46template.ViewSizerComponent0 = class ViewSizerComponent0 extends src__core__linker__app_view.AppView$(src__sizer_component.SizerComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_1] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      let _text_2 = html.Text.new('-');
      this[_el_1][$append](_text_2);
      this[_el_3] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      let _text_4 = html.Text.new('+');
      this[_el_3][$append](_text_4);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, 'label', this[_el_0]);
      let _text_6 = html.Text.new('FontSize: ');
      this[_el_5][$append](_text_6);
      this[_text_7] = html.Text.new('');
      this[_el_5][$append](this[_text_7]);
      let _text_8 = html.Text.new('px');
      this[_el_5][$append](_text_8);
      this[_el_1][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'dec')));
      this[_el_3][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'inc')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = dart.notNull(_ctx.size) <= dart.notNull(_ctx.minSize);
      if (!(this[_expr_0] === currVal_0)) {
        this.setProp(this[_el_1], 'disabled', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = dart.notNull(_ctx.size) >= dart.notNull(_ctx.maxSize);
      if (!(this[_expr_1] === currVal_1)) {
        this.setProp(this[_el_3], 'disabled', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.size;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_el_5].style[$setProperty]('font-size', (currVal_2 == null ? null : dart.toString(currVal_2)) == null ? null : dart.notNull(currVal_2 == null ? null : dart.toString(currVal_2)) + 'px');
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.size);
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_text_7][$text] = core.String._check(currVal_3);
        this[_expr_3] = currVal_3;
      }
    }
  };
  (src__sizer_component$46template.ViewSizerComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_text_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    src__sizer_component$46template.ViewSizerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-sizer'));
    let t = src__sizer_component$46template.ViewSizerComponent0._renderType;
    t == null ? src__sizer_component$46template.ViewSizerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__sizer_component$46template.styles$SizerComponent) : t;
    this.setupComponentType(src__sizer_component$46template.ViewSizerComponent0._renderType);
  }).prototype = src__sizer_component$46template.ViewSizerComponent0.prototype;
  dart.addTypeTests(src__sizer_component$46template.ViewSizerComponent0);
  dart.setMethodSignature(src__sizer_component$46template.ViewSizerComponent0, () => ({
    __proto__: dart.getMethods(src__sizer_component$46template.ViewSizerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__sizer_component.SizerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__sizer_component$46template.ViewSizerComponent0, () => ({
    __proto__: dart.getFields(src__sizer_component$46template.ViewSizerComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.ButtonElement),
    [_el_3]: dart.fieldType(html.ButtonElement),
    [_el_5]: dart.fieldType(html.Element),
    [_text_7]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__sizer_component$46template.ViewSizerComponent0, {
    /*src__sizer_component$46template.ViewSizerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__sizer_component$46template.viewFactory_SizerComponent0 = function(parentView, parentIndex) {
    return new src__sizer_component$46template.ViewSizerComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__sizer_component$46template.viewFactory_SizerComponent0, AppViewAndintToAppViewOfSizerComponent());
  dart.defineLazy(src__sizer_component$46template, {
    /*src__sizer_component$46template.styles$SizerComponentHost*/get styles$SizerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _SizerComponent_0_5 = Symbol('_SizerComponent_0_5');
  src__sizer_component$46template._ViewSizerComponentHost0 = class _ViewSizerComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__sizer_component$46template.ViewSizerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_SizerComponent_0_5] = new src__sizer_component.SizerComponent.new();
      this[_compView_0].create(this[_SizerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfSizerComponent()).new(0, this, this.rootEl, this[_SizerComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__sizer_component$46template._ViewSizerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_SizerComponent_0_5] = null;
    src__sizer_component$46template._ViewSizerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__sizer_component$46template._ViewSizerComponentHost0.prototype;
  dart.addTypeTests(src__sizer_component$46template._ViewSizerComponentHost0);
  dart.setMethodSignature(src__sizer_component$46template._ViewSizerComponentHost0, () => ({
    __proto__: dart.getMethods(src__sizer_component$46template._ViewSizerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__sizer_component$46template._ViewSizerComponentHost0, () => ({
    __proto__: dart.getFields(src__sizer_component$46template._ViewSizerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__sizer_component$46template.ViewSizerComponent0),
    [_SizerComponent_0_5]: dart.fieldType(src__sizer_component.SizerComponent)
  }));
  src__sizer_component$46template.viewFactory_SizerComponentHost0 = function(parentView, parentIndex) {
    return new src__sizer_component$46template._ViewSizerComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__sizer_component$46template.viewFactory_SizerComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__sizer_component$46template, {
    /*src__sizer_component$46template.SizerComponentNgFactory*/get SizerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfSizerComponent()).new('my-sizer', src__sizer_component$46template.viewFactory_SizerComponentHost0, src__sizer_component$46template._SizerComponentMetadata));
    },
    /*src__sizer_component$46template._SizerComponentMetadata*/get _SizerComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__sizer_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__sizer_component$46template.initReflector = function() {
    if (dart.test(src__sizer_component$46template._visited)) {
      return;
    }
    src__sizer_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__sizer_component.SizerComponent), src__sizer_component$46template.SizerComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__sizer_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/template_syntax/src/sizer_component.template.ddc", {
    "package:template_syntax/src/sizer_component.template.dart": src__sizer_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["sizer_component.template.dart"],"names":[],"mappings":"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","file":"sizer_component.template.ddc.js"}');
  // Exports:
  return {
    src__sizer_component$46template: src__sizer_component$46template
  };
});

//# sourceMappingURL=sizer_component.template.ddc.js.map
