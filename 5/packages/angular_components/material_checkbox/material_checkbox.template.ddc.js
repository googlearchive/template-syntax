define(['dart_sdk', 'packages/angular_components/material_checkbox/material_checkbox.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, material_checkbox$46scss$46css, view_type, constants, view, app_view_utils, app_view, glyph, glyph$, ng_if, material_checkbox, material_ripple, material_ripple$, reflector, angular, focus, icon, events, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_checkbox__material_checkbox$46scss$46css$46shim = material_checkbox$46scss$46css.material_checkbox__material_checkbox$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const glyph__glyph = glyph$.glyph__glyph;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_checkbox__material_checkbox = material_checkbox.material_checkbox__material_checkbox;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const material_checkbox__material_checkbox$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialCheckboxComponent = () => (AppViewOfMaterialCheckboxComponent = dart.constFn(src__core__linker__app_view.AppView$(material_checkbox__material_checkbox.MaterialCheckboxComponent)))();
  let AppViewAndintToAppViewOfMaterialCheckboxComponent = () => (AppViewAndintToAppViewOfMaterialCheckboxComponent = dart.constFn(dart.fnType(AppViewOfMaterialCheckboxComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialCheckboxComponent = () => (ComponentRefOfMaterialCheckboxComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_checkbox__material_checkbox.MaterialCheckboxComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialCheckboxComponent = () => (ComponentFactoryOfMaterialCheckboxComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_checkbox__material_checkbox.MaterialCheckboxComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_checkbox__material_checkbox$46template, {
    /*material_checkbox__material_checkbox$46template.styles$MaterialCheckboxComponent*/get styles$MaterialCheckboxComponent() {
      return dart.constList([material_checkbox__material_checkbox$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _GlyphComponent_1_5 = Symbol('_GlyphComponent_1_5');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _el_3 = Symbol('_el_3');
  const _text_4 = Symbol('_text_4');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_9 = Symbol('_expr_9');
  const _expr_10 = Symbol('_expr_10');
  let const$;
  material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0 = class ViewMaterialCheckboxComponent0 extends src__core__linker__app_view.AppView$(material_checkbox__material_checkbox.MaterialCheckboxComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'icon-container';
      this.addShimC(this[_el_0]);
      this[_compView_1] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.createAttr(this[_el_1], 'aria-hidden', 'true');
      this[_el_1].className = 'icon';
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_GlyphComponent_1_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_GlyphComponent_1_5], []);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_checkbox__material_checkbox$46template.viewFactory_MaterialCheckboxComponent1);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_3].className = 'content';
      this.addShimC(this[_el_3]);
      this[_text_4] = html.Text.new('');
      this[_el_3][$append](this[_text_4]);
      this.project(this[_el_3], 0);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      _rootEl[$addEventListener]('keyup', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyUp')));
      _rootEl[$addEventListener]('focus', this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'handleFocus')));
      _rootEl[$addEventListener]('mousedown', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleMouseDown')));
      _rootEl[$addEventListener]('blur', this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'handleBlur')));
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_3 = _ctx.icon;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_GlyphComponent_1_5].icon = currVal_3;
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
      let currVal_1 = _ctx.themeColor;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_el_1].style[$setProperty]('color', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.checked) || dart.test(_ctx.indeterminate);
      if (!(this[_expr_2] === currVal_2)) {
        this.updateElemClass(this[_el_1], 'filled', currVal_2);
        this[_expr_2] = currVal_2;
      }
      let l = _ctx.label;
      let currVal_5 = l != null ? l : '';
      if (!(this[_expr_5] === currVal_5)) {
        this[_text_4][$text] = currVal_5;
        this[_expr_5] = currVal_5;
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
      let currVal_7 = this.ctx.disabled;
      if (!core.identical(this[_expr_7], currVal_7)) {
        this.setAttr(this.rootEl, 'aria-disabled', currVal_7 == null ? null : dart.toString(currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_9 = this.ctx.tabIndex;
      if (!core.identical(this[_expr_9], currVal_9)) {
        this.setAttr(this.rootEl, 'tabindex', currVal_9 == null ? null : dart.toString(currVal_9));
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = this.ctx.label;
      if (!core.identical(this[_expr_10], currVal_10)) {
        this.setAttr(this.rootEl, 'aria-label', currVal_10 == null ? null : dart.toString(currVal_10));
        this[_expr_10] = currVal_10;
      }
    }
  };
  (material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_GlyphComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-checkbox'));
    this.rootEl.className = 'themeable';
    let t = material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0._renderType;
    t == null ? material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_checkbox__material_checkbox$46template.styles$MaterialCheckboxComponent) : t;
    this.setupComponentType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0._renderType);
  }).prototype = material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.prototype;
  dart.addTypeTests(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0);
  dart.setMethodSignature(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0, () => ({
    __proto__: dart.getMethods(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_checkbox__material_checkbox.MaterialCheckboxComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0, () => ({
    __proto__: dart.getFields(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_1_5]: dart.fieldType(glyph__glyph.GlyphComponent),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_3]: dart.fieldType(html.DivElement),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0, {
    /*material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_checkbox__material_checkbox$46template.viewFactory_MaterialCheckboxComponent0 = function(parentView, parentIndex) {
    return new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_checkbox__material_checkbox$46template.viewFactory_MaterialCheckboxComponent0, AppViewAndintToAppViewOfMaterialCheckboxComponent());
  const _compView_0 = Symbol('_compView_0');
  const _MaterialRippleComponent_0_5 = Symbol('_MaterialRippleComponent_0_5');
  material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1 = class _ViewMaterialCheckboxComponent1 extends src__core__linker__app_view.AppView$(material_checkbox__material_checkbox.MaterialCheckboxComponent) {
    build() {
      this[_compView_0] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'ripple';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRippleComponent_0_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialRippleComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.rippleColor;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_el_0].style[$setProperty]('color', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    this[_expr_0] = null;
    material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0._renderType;
  }).prototype = material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1.prototype;
  dart.addTypeTests(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1);
  dart.setMethodSignature(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1, () => ({
    __proto__: dart.getMethods(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_checkbox__material_checkbox.MaterialCheckboxComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1, () => ({
    __proto__: dart.getFields(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_0_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_checkbox__material_checkbox$46template.viewFactory_MaterialCheckboxComponent1 = function(parentView, parentIndex) {
    return new material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_checkbox__material_checkbox$46template.viewFactory_MaterialCheckboxComponent1, AppViewAndintToAppViewOfMaterialCheckboxComponent());
  dart.defineLazy(material_checkbox__material_checkbox$46template, {
    /*material_checkbox__material_checkbox$46template.styles$MaterialCheckboxComponentHost*/get styles$MaterialCheckboxComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialCheckboxComponent_0_5 = Symbol('_MaterialCheckboxComponent_0_5');
  material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0 = class _ViewMaterialCheckboxComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialCheckboxComponent_0_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(this.rootEl, this[_compView_0].ref, null, null, null);
      this[_compView_0].create(this[_MaterialCheckboxComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialCheckboxComponent()).new(0, this, this.rootEl, this[_MaterialCheckboxComponent_0_5]);
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
  (material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialCheckboxComponent_0_5] = null;
    material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0.prototype;
  dart.addTypeTests(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0);
  dart.setMethodSignature(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0, () => ({
    __proto__: dart.getMethods(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0, () => ({
    __proto__: dart.getFields(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_0_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent)
  }));
  material_checkbox__material_checkbox$46template.viewFactory_MaterialCheckboxComponentHost0 = function(parentView, parentIndex) {
    return new material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_checkbox__material_checkbox$46template.viewFactory_MaterialCheckboxComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_checkbox__material_checkbox$46template, {
    /*material_checkbox__material_checkbox$46template.MaterialCheckboxComponentNgFactory*/get MaterialCheckboxComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialCheckboxComponent()).new('material-checkbox', material_checkbox__material_checkbox$46template.viewFactory_MaterialCheckboxComponentHost0, material_checkbox__material_checkbox$46template._MaterialCheckboxComponentMetadata));
    },
    /*material_checkbox__material_checkbox$46template._MaterialCheckboxComponentMetadata*/get _MaterialCheckboxComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_checkbox__material_checkbox$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_checkbox__material_checkbox$46template.initReflector = function() {
    if (dart.test(material_checkbox__material_checkbox$46template._visited)) {
      return;
    }
    material_checkbox__material_checkbox$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_checkbox__material_checkbox.MaterialCheckboxComponent), material_checkbox__material_checkbox$46template.MaterialCheckboxComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    glyph__glyph$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    model__ui__icon$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(material_checkbox__material_checkbox$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_checkbox/material_checkbox.template.ddc", {
    "package:angular_components/material_checkbox/material_checkbox.template.dart": material_checkbox__material_checkbox$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_checkbox.template.dart"],"names":[],"mappings":"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","file":"material_checkbox.template.ddc.js"}');
  // Exports:
  return {
    material_checkbox__material_checkbox$46template: material_checkbox__material_checkbox$46template
  };
});

//# sourceMappingURL=material_checkbox.template.ddc.js.map
