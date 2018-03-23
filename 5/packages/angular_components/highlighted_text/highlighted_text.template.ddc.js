define(['dart_sdk', 'packages/angular_components/highlighted_text/highlighted_text.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/highlighted_text/highlighted_text', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/model/ui/highlighted_text_model.template'], function(dart_sdk, highlighted_text$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_for, highlighted_text, highlighted_text_model, reflector, angular, highlighted_text_model$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const highlighted_text__highlighted_text$46scss$46css$46shim = highlighted_text$46scss$46css.highlighted_text__highlighted_text$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const highlighted_text__highlighted_text = highlighted_text.highlighted_text__highlighted_text;
  const model__ui__highlighted_text_model = highlighted_text_model.model__ui__highlighted_text_model;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const model__ui__highlighted_text_model$46template = highlighted_text_model$.model__ui__highlighted_text_model$46template;
  const _root = Object.create(null);
  const highlighted_text__highlighted_text$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHighlightedTextComponent = () => (AppViewOfHighlightedTextComponent = dart.constFn(src__core__linker__app_view.AppView$(highlighted_text__highlighted_text.HighlightedTextComponent)))();
  let AppViewAndintToAppViewOfHighlightedTextComponent = () => (AppViewAndintToAppViewOfHighlightedTextComponent = dart.constFn(dart.fnType(AppViewOfHighlightedTextComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHighlightedTextComponent = () => (ComponentRefOfHighlightedTextComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_text.HighlightedTextComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHighlightedTextComponent = () => (ComponentFactoryOfHighlightedTextComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(highlighted_text__highlighted_text.HighlightedTextComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(highlighted_text__highlighted_text$46template, {
    /*highlighted_text__highlighted_text$46template.styles$HighlightedTextComponent*/get styles$HighlightedTextComponent() {
      return dart.constList([highlighted_text__highlighted_text$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0 = class ViewHighlightedTextComponent0 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_text.HighlightedTextComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponent1);
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.segments;
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
  (highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('highlighted-text'));
    let t = highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._renderType;
    t == null ? highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, highlighted_text__highlighted_text$46template.styles$HighlightedTextComponent) : t;
    this.setupComponentType(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._renderType);
  }).prototype = highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.prototype;
  dart.addTypeTests(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0);
  dart.setMethodSignature(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_text.HighlightedTextComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0, {
    /*highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponent0 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.new(parentView, parentIndex);
  };
  dart.fn(highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponent0, AppViewAndintToAppViewOfHighlightedTextComponent());
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _expr_1 = Symbol('_expr_1');
  highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1 = class _ViewHighlightedTextComponent1 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_text.HighlightedTextComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'text-segment';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_segment = model__ui__highlighted_text_model.HighlightedTextSegment._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_segment.isHighlighted;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), 'segment-highlight', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_segment.text);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_1][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._renderType;
  }).prototype = highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.prototype;
  dart.addTypeTests(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1);
  dart.setMethodSignature(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_text.HighlightedTextComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponent1 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.new(parentView, parentIndex);
  };
  dart.fn(highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponent1, AppViewAndintToAppViewOfHighlightedTextComponent());
  dart.defineLazy(highlighted_text__highlighted_text$46template, {
    /*highlighted_text__highlighted_text$46template.styles$HighlightedTextComponentHost*/get styles$HighlightedTextComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HighlightedTextComponent_0_5 = Symbol('_HighlightedTextComponent_0_5');
  highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0 = class _ViewHighlightedTextComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HighlightedTextComponent_0_5] = new highlighted_text__highlighted_text.HighlightedTextComponent.new();
      this[_compView_0].create(this[_HighlightedTextComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHighlightedTextComponent()).new(0, this, this.rootEl, this[_HighlightedTextComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(highlighted_text__highlighted_text.HighlightedTextComponent) && 0 === nodeIndex) {
        return this[_HighlightedTextComponent_0_5];
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
  (highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HighlightedTextComponent_0_5] = null;
    highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.prototype;
  dart.addTypeTests(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0);
  dart.setMethodSignature(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0),
    [_HighlightedTextComponent_0_5]: dart.fieldType(highlighted_text__highlighted_text.HighlightedTextComponent)
  }));
  highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponentHost0 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(highlighted_text__highlighted_text$46template, {
    /*highlighted_text__highlighted_text$46template.HighlightedTextComponentNgFactory*/get HighlightedTextComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHighlightedTextComponent()).new('highlighted-text', highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponentHost0, highlighted_text__highlighted_text$46template._HighlightedTextComponentMetadata));
    },
    /*highlighted_text__highlighted_text$46template._HighlightedTextComponentMetadata*/get _HighlightedTextComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*highlighted_text__highlighted_text$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  highlighted_text__highlighted_text$46template.initReflector = function() {
    if (dart.test(highlighted_text__highlighted_text$46template._visited)) {
      return;
    }
    highlighted_text__highlighted_text$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(highlighted_text__highlighted_text.HighlightedTextComponent), highlighted_text__highlighted_text$46template.HighlightedTextComponentNgFactory);
    angular$46template.initReflector();
    model__ui__highlighted_text_model$46template.initReflector();
  };
  dart.fn(highlighted_text__highlighted_text$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_text.template.ddc", {
    "package:angular_components/highlighted_text/highlighted_text.template.dart": highlighted_text__highlighted_text$46template
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_text.template.dart"],"names":[],"mappings":"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","file":"highlighted_text.template.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_text$46template: highlighted_text__highlighted_text$46template
  };
});

//# sourceMappingURL=highlighted_text.template.ddc.js.map
