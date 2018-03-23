define(['dart_sdk', 'packages/angular_components/material_toggle/material_toggle.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/material_toggle/material_toggle', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/events/events.template'], function(dart_sdk, material_toggle$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_if, material_toggle, reflector, angular, events) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_toggle__material_toggle$46scss$46css$46shim = material_toggle$46scss$46css.material_toggle__material_toggle$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const material_toggle__material_toggle = material_toggle.material_toggle__material_toggle;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const _root = Object.create(null);
  const material_toggle__material_toggle$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialToggleComponent = () => (AppViewOfMaterialToggleComponent = dart.constFn(src__core__linker__app_view.AppView$(material_toggle__material_toggle.MaterialToggleComponent)))();
  let AppViewAndintToAppViewOfMaterialToggleComponent = () => (AppViewAndintToAppViewOfMaterialToggleComponent = dart.constFn(dart.fnType(AppViewOfMaterialToggleComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialToggleComponent = () => (ComponentRefOfMaterialToggleComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_toggle__material_toggle.MaterialToggleComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialToggleComponent = () => (ComponentFactoryOfMaterialToggleComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_toggle__material_toggle.MaterialToggleComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_toggle__material_toggle$46template, {
    /*material_toggle__material_toggle$46template.styles$MaterialToggleComponent*/get styles$MaterialToggleComponent() {
      return dart.constList([material_toggle__material_toggle$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_toggle_1_0_isDirty = Symbol('_query_toggle_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_4 = Symbol('_el_4');
  const _el_5 = Symbol('_el_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _handle_blur_0_0 = Symbol('_handle_blur_0_0');
  const _handle_focus_0_1 = Symbol('_handle_focus_0_1');
  const _handle_mouseenter_0_2 = Symbol('_handle_mouseenter_0_2');
  const _handle_mouseleave_0_3 = Symbol('_handle_mouseleave_0_3');
  let const$;
  material_toggle__material_toggle$46template.ViewMaterialToggleComponent0 = class ViewMaterialToggleComponent0 extends src__core__linker__app_view.AppView$(material_toggle__material_toggle.MaterialToggleComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'material-toggle';
      this.createAttr(this[_el_0], 'role', 'button');
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponent1);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_2].className = 'tgl-container';
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this.createAttr(this[_el_3], 'animated', '');
      this[_el_3].className = 'tgl-bar';
      this.addShimC(this[_el_3]);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this[_el_4].className = 'tgl-btn-container';
      this.addShimC(this[_el_4]);
      this[_el_5] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_4]);
      this.createAttr(this[_el_5], 'animated', '');
      this[_el_5].className = 'tgl-btn';
      this.addShimC(this[_el_5]);
      this.project(this[_el_5], 0);
      this[_el_0][$addEventListener]('blur', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_blur_0_0)));
      this[_el_0][$addEventListener]('focus', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_focus_0_1)));
      this[_el_0][$addEventListener]('mouseenter', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseenter_0_2)));
      this[_el_0][$addEventListener]('mouseleave', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseleave_0_3)));
      this.ctx.toggleElement = this[_el_0];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.hasLabel;
      this[_appEl_1].detectChangesInNestedViews();
      let currVal_0 = _ctx.checked;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateClass(this[_el_0], 'checked', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateClass(this[_el_0], 'disabled', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.disabled) ? '-1' : '0';
      if (!(this[_expr_2] === currVal_2)) {
        this.setAttr(this[_el_0], 'tabindex', currVal_2[$toString]());
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.disabled);
      if (!core.identical(this[_expr_3], currVal_3)) {
        this.setAttr(this[_el_0], 'aria-disabled', currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
      let l = _ctx.ariaLabel;
      let currVal_4 = l != null ? l : '';
      if (!(this[_expr_4] === currVal_4)) {
        this.setAttr(this[_el_0], 'aria-label', currVal_4[$toString]());
        this[_expr_4] = currVal_4;
      }
      let currVal_6 = src__core__linker__app_view_utils.interpolate0(_ctx.shadow_z);
      if (!core.identical(this[_expr_6], currVal_6)) {
        this.setAttr(this[_el_3], 'elevation', currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = src__core__linker__app_view_utils.interpolate0(_ctx.shadow_z);
      if (!core.identical(this[_expr_7], currVal_7)) {
        this.setAttr(this[_el_5], 'elevation', currVal_7 == null ? null : dart.toString(currVal_7));
        this[_expr_7] = currVal_7;
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
    [_handle_blur_0_0]($event) {
      this.ctx.hasFocus = false;
    }
    [_handle_focus_0_1]($event) {
      this.ctx.hasFocus = true;
    }
    [_handle_mouseenter_0_2]($event) {
      this.ctx.isHovered = true;
    }
    [_handle_mouseleave_0_3]($event) {
      this.ctx.isHovered = false;
    }
  };
  (material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new = function(parentView, parentIndex) {
    this[_query_toggle_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-toggle'));
    this.rootEl.className = 'themeable';
    let t = material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._renderType;
    t == null ? material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_toggle__material_toggle$46template.styles$MaterialToggleComponent) : t;
    this.setupComponentType(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._renderType);
  }).prototype = material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.prototype;
  dart.addTypeTests(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0);
  dart.setMethodSignature(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0, () => ({
    __proto__: dart.getMethods(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_toggle__material_toggle.MaterialToggleComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_blur_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_focus_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_mouseenter_0_2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_mouseleave_0_3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0, () => ({
    __proto__: dart.getFields(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.__proto__),
    [_query_toggle_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0, {
    /*material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponent0 = function(parentView, parentIndex) {
    return new material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponent0, AppViewAndintToAppViewOfMaterialToggleComponent());
  const _text_1 = Symbol('_text_1');
  material_toggle__material_toggle$46template._ViewMaterialToggleComponent1 = class _ViewMaterialToggleComponent1 extends src__core__linker__app_view.AppView$(material_toggle__material_toggle.MaterialToggleComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'tgl-lbl';
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.label;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._renderType;
  }).prototype = material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.prototype;
  dart.addTypeTests(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1);
  dart.setMethodSignature(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1, () => ({
    __proto__: dart.getMethods(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_toggle__material_toggle.MaterialToggleComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1, () => ({
    __proto__: dart.getFields(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponent1 = function(parentView, parentIndex) {
    return new material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponent1, AppViewAndintToAppViewOfMaterialToggleComponent());
  dart.defineLazy(material_toggle__material_toggle$46template, {
    /*material_toggle__material_toggle$46template.styles$MaterialToggleComponentHost*/get styles$MaterialToggleComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialToggleComponent_0_5 = Symbol('_MaterialToggleComponent_0_5');
  material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0 = class _ViewMaterialToggleComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialToggleComponent_0_5] = new material_toggle__material_toggle.MaterialToggleComponent.new();
      this[_compView_0].create(this[_MaterialToggleComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialToggleComponent()).new(0, this, this.rootEl, this[_MaterialToggleComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialToggleComponent_0_5].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialToggleComponent_0_5] = null;
    material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.prototype;
  dart.addTypeTests(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0);
  dart.setMethodSignature(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0, () => ({
    __proto__: dart.getMethods(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0, () => ({
    __proto__: dart.getFields(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0),
    [_MaterialToggleComponent_0_5]: dart.fieldType(material_toggle__material_toggle.MaterialToggleComponent)
  }));
  material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponentHost0 = function(parentView, parentIndex) {
    return new material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_toggle__material_toggle$46template, {
    /*material_toggle__material_toggle$46template.MaterialToggleComponentNgFactory*/get MaterialToggleComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialToggleComponent()).new('material-toggle', material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponentHost0, material_toggle__material_toggle$46template._MaterialToggleComponentMetadata));
    },
    /*material_toggle__material_toggle$46template._MaterialToggleComponentMetadata*/get _MaterialToggleComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_toggle__material_toggle$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_toggle__material_toggle$46template.initReflector = function() {
    if (dart.test(material_toggle__material_toggle$46template._visited)) {
      return;
    }
    material_toggle__material_toggle$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_toggle__material_toggle.MaterialToggleComponent), material_toggle__material_toggle$46template.MaterialToggleComponentNgFactory);
    angular$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
  };
  dart.fn(material_toggle__material_toggle$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_toggle/material_toggle.template.ddc", {
    "package:angular_components/material_toggle/material_toggle.template.dart": material_toggle__material_toggle$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_toggle.template.dart"],"names":[],"mappings":"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","file":"material_toggle.template.ddc.js"}');
  // Exports:
  return {
    material_toggle__material_toggle$46template: material_toggle__material_toggle$46template
  };
});

//# sourceMappingURL=material_toggle.template.ddc.js.map
