define(['dart_sdk', 'packages/angular_components/material_datepicker/next_prev_buttons.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/src/material_datepicker/sequential.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, next_prev_buttons$46scss$46css, view_type, constants, view, app_view_utils, app_view, glyph, glyph$, next_prev_buttons, reflector, angular, sequential, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__next_prev_buttons$46scss$46css$46shim = next_prev_buttons$46scss$46css.material_datepicker__next_prev_buttons$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const glyph__glyph = glyph$.glyph__glyph;
  const material_datepicker__next_prev_buttons = next_prev_buttons.material_datepicker__next_prev_buttons;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const src__material_datepicker__sequential$46template = sequential.src__material_datepicker__sequential$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_datepicker__next_prev_buttons$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfNextPrevComponent = () => (AppViewOfNextPrevComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__next_prev_buttons.NextPrevComponent)))();
  let AppViewAndintToAppViewOfNextPrevComponent = () => (AppViewAndintToAppViewOfNextPrevComponent = dart.constFn(dart.fnType(AppViewOfNextPrevComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfNextPrevComponent = () => (ComponentRefOfNextPrevComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__next_prev_buttons.NextPrevComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfNextPrevComponent = () => (ComponentFactoryOfNextPrevComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__next_prev_buttons.NextPrevComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__next_prev_buttons$46template, {
    /*material_datepicker__next_prev_buttons$46template.styles$NextPrevComponent*/get styles$NextPrevComponent() {
      return dart.constList([material_datepicker__next_prev_buttons$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _GlyphComponent_1_5 = Symbol('_GlyphComponent_1_5');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _GlyphComponent_3_5 = Symbol('_GlyphComponent_3_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  let const$;
  const _handle_click__ = Symbol('_handle_click__');
  const _handle_keypress__ = Symbol('_handle_keypress__');
  material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0 = class ViewNextPrevComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__next_prev_buttons.NextPrevComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', parentRenderNode));
      this[_el_0].className = 'prev';
      this.addShimC(this[_el_0]);
      this[_compView_1] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.createAttr(this[_el_1], 'icon', 'navigate_before');
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_GlyphComponent_1_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_GlyphComponent_1_5], []);
      this[_el_2] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', parentRenderNode));
      this[_el_2].className = 'next';
      this.addShimC(this[_el_2]);
      this[_compView_3] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      this[_el_2][$append](this[_el_3]);
      this.createAttr(this[_el_3], 'icon', 'navigate_next');
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_GlyphComponent_3_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_3]));
      this[_compView_3].create(this[_GlyphComponent_3_5], []);
      this[_el_0][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'prev')));
      this[_el_2][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'next')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click__)));
      _rootEl[$addEventListener]('keypress', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_keypress__)));
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_GlyphComponent_1_5].icon = 'navigate_before';
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_GlyphComponent_3_5].icon = 'navigate_next';
        changed = true;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isPrevDisabled;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateClass(this[_el_0], 'disabled', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.isPrevDisabled);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this[_el_0], 'aria-disabled', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(dart.test(_ctx.isPrevDisabled) ? 0 - 1 : 0);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this.setAttr(this[_el_0], 'tabindex', currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.prevLabel;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this.setAttr(this[_el_1], 'aria-label', currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
      let currVal_5 = _ctx.isNextDisabled;
      if (!(this[_expr_5] == currVal_5)) {
        this.updateClass(this[_el_2], 'disabled', currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = src__core__linker__app_view_utils.interpolate0(_ctx.isNextDisabled);
      if (!core.identical(this[_expr_6], currVal_6)) {
        this.setAttr(this[_el_2], 'aria-disabled', currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = src__core__linker__app_view_utils.interpolate0(dart.test(_ctx.isNextDisabled) ? 0 - 1 : 0);
      if (!core.identical(this[_expr_7], currVal_7)) {
        this.setAttr(this[_el_2], 'tabindex', currVal_7 == null ? null : dart.toString(currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.nextLabel;
      if (!core.identical(this[_expr_8], currVal_8)) {
        this.setAttr(this[_el_3], 'aria-label', currVal_8 == null ? null : dart.toString(currVal_8));
        this[_expr_8] = currVal_8;
      }
      this[_compView_1].detectChanges();
      this[_compView_3].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
      let t$ = this[_compView_3];
      t$ == null ? null : t$.destroy();
    }
    [_handle_click__]($event) {
      return core.bool._check(dart.dsend($event, 'stopPropagation'));
    }
    [_handle_keypress__]($event) {
      return core.bool._check(dart.dsend($event, 'stopPropagation'));
    }
  };
  (material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_GlyphComponent_1_5] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_GlyphComponent_3_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('next-prev-buttons'));
    let t = material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0._renderType;
    t == null ? material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__next_prev_buttons$46template.styles$NextPrevComponent) : t;
    this.setupComponentType(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0._renderType);
  }).prototype = material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.prototype;
  dart.addTypeTests(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0);
  dart.setMethodSignature(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__next_prev_buttons.NextPrevComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click__]: dart.fnType(core.bool, [dart.dynamic]),
    [_handle_keypress__]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.__proto__),
    [_el_0]: dart.fieldType(html.ButtonElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_1_5]: dart.fieldType(glyph__glyph.GlyphComponent),
    [_el_2]: dart.fieldType(html.ButtonElement),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_3_5]: dart.fieldType(glyph__glyph.GlyphComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0, {
    /*material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__next_prev_buttons$46template.viewFactory_NextPrevComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__next_prev_buttons$46template.viewFactory_NextPrevComponent0, AppViewAndintToAppViewOfNextPrevComponent());
  dart.defineLazy(material_datepicker__next_prev_buttons$46template, {
    /*material_datepicker__next_prev_buttons$46template.styles$NextPrevComponentHost*/get styles$NextPrevComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _NextPrevComponent_0_5 = Symbol('_NextPrevComponent_0_5');
  material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0 = class _ViewNextPrevComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_NextPrevComponent_0_5] = new material_datepicker__next_prev_buttons.NextPrevComponent.new(this[_compView_0].ref);
      this[_compView_0].create(this[_NextPrevComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfNextPrevComponent()).new(0, this, this.rootEl, this[_NextPrevComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__next_prev_buttons.NextPrevComponent) && 0 === nodeIndex) {
        return this[_NextPrevComponent_0_5];
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
      this[_NextPrevComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_NextPrevComponent_0_5] = null;
    material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0);
  dart.setMethodSignature(material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0),
    [_NextPrevComponent_0_5]: dart.fieldType(material_datepicker__next_prev_buttons.NextPrevComponent)
  }));
  material_datepicker__next_prev_buttons$46template.viewFactory_NextPrevComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__next_prev_buttons$46template.viewFactory_NextPrevComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_datepicker__next_prev_buttons$46template, {
    /*material_datepicker__next_prev_buttons$46template.NextPrevComponentNgFactory*/get NextPrevComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfNextPrevComponent()).new('next-prev-buttons', material_datepicker__next_prev_buttons$46template.viewFactory_NextPrevComponentHost0, material_datepicker__next_prev_buttons$46template._NextPrevComponentMetadata));
    },
    /*material_datepicker__next_prev_buttons$46template._NextPrevComponentMetadata*/get _NextPrevComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_datepicker__next_prev_buttons$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__next_prev_buttons$46template.initReflector = function() {
    if (dart.test(material_datepicker__next_prev_buttons$46template._visited)) {
      return;
    }
    material_datepicker__next_prev_buttons$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__next_prev_buttons.NextPrevComponent), material_datepicker__next_prev_buttons$46template.NextPrevComponentNgFactory);
    angular$46template.initReflector();
    glyph__glyph$46template.initReflector();
    src__material_datepicker__sequential$46template.initReflector();
    src__material_datepicker__sequential$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(material_datepicker__next_prev_buttons$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/next_prev_buttons.template.ddc", {
    "package:angular_components/material_datepicker/next_prev_buttons.template.dart": material_datepicker__next_prev_buttons$46template
  }, '{"version":3,"sourceRoot":"","sources":["next_prev_buttons.template.dart"],"names":[],"mappings":"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","file":"next_prev_buttons.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__next_prev_buttons$46template: material_datepicker__next_prev_buttons$46template
  };
});

//# sourceMappingURL=next_prev_buttons.template.ddc.js.map
