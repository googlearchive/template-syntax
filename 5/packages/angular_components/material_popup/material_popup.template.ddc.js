define(['dart_sdk', 'packages/angular_components/material_popup/material_popup.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/popup_ref', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/enums/visibility.template', 'packages/angular_components/laminate/overlay/module.template', 'packages/angular_components/laminate/overlay/overlay.template', 'packages/angular_components/laminate/overlay/zindexer.template', 'packages/angular_components/laminate/popup/module.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/ui/toggle.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_popup$46scss$46css, view_type, constants, view, app_view_utils, app_view, material_popup, popup_hierarchy, ng_zone, overlay_service, zindexer, alignment, opaque_token, popup_size_provider, element_ref, deferred_content_aware, material_dropdown_base, popup_ref, reflector, angular, deferred_content_aware$, alignment$, visibility, module, overlay, zindexer$, module$, popup, material_dropdown_base$, toggle, async, disposer, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_popup__material_popup$46scss$46css$46shim = material_popup$46scss$46css.material_popup__material_popup$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_service.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__laminate__popup__popup_size_provider = popup_size_provider.src__laminate__popup__popup_size_provider;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__laminate__popup__popup_ref = popup_ref.src__laminate__popup__popup_ref;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__enums__visibility$46template = visibility.laminate__enums__visibility$46template;
  const laminate__overlay__module$46template = module.laminate__overlay__module$46template;
  const laminate__overlay__overlay$46template = overlay.laminate__overlay__overlay$46template;
  const laminate__overlay__zindexer$46template = zindexer$.laminate__overlay__zindexer$46template;
  const laminate__popup__module$46template = module$.laminate__popup__module$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const model__ui__toggle$46template = toggle.model__ui__toggle$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const utils__id_generator__id_generator$46template = id_generator.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const material_popup__material_popup$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialPopupComponent = () => (AppViewOfMaterialPopupComponent = dart.constFn(src__core__linker__app_view.AppView$(material_popup__material_popup.MaterialPopupComponent)))();
  let AppViewAndintToAppViewOfMaterialPopupComponent = () => (AppViewAndintToAppViewOfMaterialPopupComponent = dart.constFn(dart.fnType(AppViewOfMaterialPopupComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let ComponentRefOfMaterialPopupComponent = () => (ComponentRefOfMaterialPopupComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_popup__material_popup.MaterialPopupComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialPopupComponent = () => (ComponentFactoryOfMaterialPopupComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_popup__material_popup.MaterialPopupComponent)))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_popup__material_popup$46template, {
    /*material_popup__material_popup$46template.styles$MaterialPopupComponent*/get styles$MaterialPopupComponent() {
      return dart.constList([material_popup__material_popup$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_template_1_0_isDirty = Symbol('_query_template_1_0_isDirty');
  const _appEl_1 = Symbol('_appEl_1');
  const _TemplateRef_1_7 = Symbol('_TemplateRef_1_7');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  material_popup__material_popup$46template.ViewMaterialPopupComponent0 = class ViewMaterialPopupComponent0 extends src__core__linker__app_view.AppView$(material_popup__material_popup.MaterialPopupComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('\n');
      parentRenderNode[$append](_text_0);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      this[_TemplateRef_1_7] = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_popup__material_popup$46template.viewFactory_MaterialPopupComponent1);
      let _text_2 = html.Text.new('\n');
      parentRenderNode[$append](_text_2);
      this.ctx.templateRef = this[_TemplateRef_1_7];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectHostChanges(firstCheck) {
      let currVal_0 = this.ctx.paneId;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this.rootEl, 'pane-id', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_popup__material_popup$46template.ViewMaterialPopupComponent0.new = function(parentView, parentIndex) {
    this[_query_template_1_0_isDirty] = true;
    this[_appEl_1] = null;
    this[_TemplateRef_1_7] = null;
    this[_expr_0] = null;
    material_popup__material_popup$46template.ViewMaterialPopupComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-popup'));
    let t = material_popup__material_popup$46template.ViewMaterialPopupComponent0._renderType;
    t == null ? material_popup__material_popup$46template.ViewMaterialPopupComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_popup__material_popup$46template.styles$MaterialPopupComponent) : t;
    this.setupComponentType(material_popup__material_popup$46template.ViewMaterialPopupComponent0._renderType);
  }).prototype = material_popup__material_popup$46template.ViewMaterialPopupComponent0.prototype;
  dart.addTypeTests(material_popup__material_popup$46template.ViewMaterialPopupComponent0);
  dart.setMethodSignature(material_popup__material_popup$46template.ViewMaterialPopupComponent0, () => ({
    __proto__: dart.getMethods(material_popup__material_popup$46template.ViewMaterialPopupComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_popup__material_popup.MaterialPopupComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_popup__material_popup$46template.ViewMaterialPopupComponent0, () => ({
    __proto__: dart.getFields(material_popup__material_popup$46template.ViewMaterialPopupComponent0.__proto__),
    [_query_template_1_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_TemplateRef_1_7]: dart.fieldType(src__core__linker__template_ref.TemplateRef),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_popup__material_popup$46template.ViewMaterialPopupComponent0, {
    /*material_popup__material_popup$46template.ViewMaterialPopupComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_popup__material_popup$46template.viewFactory_MaterialPopupComponent0 = function(parentView, parentIndex) {
    return new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_popup__material_popup$46template.viewFactory_MaterialPopupComponent0, AppViewAndintToAppViewOfMaterialPopupComponent());
  const _el_1 = Symbol('_el_1');
  const _el_3 = Symbol('_el_3');
  const _el_5 = Symbol('_el_5');
  const _el_7 = Symbol('_el_7');
  const _el_11 = Symbol('_el_11');
  const _el_15 = Symbol('_el_15');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  material_popup__material_popup$46template._ViewMaterialPopupComponent1 = class _ViewMaterialPopupComponent1 extends src__core__linker__app_view.AppView$(material_popup__material_popup.MaterialPopupComponent) {
    build() {
      let _text_0 = html.Text.new('\n  ');
      let doc = html.document;
      this[_el_1] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_1].className = 'popup-wrapper mixin';
      this.addShimC(this[_el_1]);
      let _text_2 = html.Text.new('\n      ');
      this[_el_1][$append](_text_2);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_3].className = 'popup';
      this.addShimC(this[_el_3]);
      let _text_4 = html.Text.new('\n          ');
      this[_el_3][$append](_text_4);
      this[_el_5] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_3]);
      this[_el_5].className = 'material-popup-content content';
      this.addShimC(this[_el_5]);
      let _text_6 = html.Text.new('\n              ');
      this[_el_5][$append](_text_6);
      this[_el_7] = src__core__linker__app_view.createAndAppend(doc, 'header', this[_el_5]);
      this.addShimE(this[_el_7]);
      let _text_8 = html.Text.new('\n                  ');
      this[_el_7][$append](_text_8);
      this.project(this[_el_7], 0);
      let _text_9 = html.Text.new('\n              ');
      this[_el_7][$append](_text_9);
      let _text_10 = html.Text.new('\n              ');
      this[_el_5][$append](_text_10);
      this[_el_11] = src__core__linker__app_view.createAndAppend(doc, 'main', this[_el_5]);
      this.addShimE(this[_el_11]);
      let _text_12 = html.Text.new('\n                  ');
      this[_el_11][$append](_text_12);
      this.project(this[_el_11], 1);
      let _text_13 = html.Text.new('\n              ');
      this[_el_11][$append](_text_13);
      let _text_14 = html.Text.new('\n              ');
      this[_el_5][$append](_text_14);
      this[_el_15] = src__core__linker__app_view.createAndAppend(doc, 'footer', this[_el_5]);
      this.addShimE(this[_el_15]);
      let _text_16 = html.Text.new('\n                  ');
      this[_el_15][$append](_text_16);
      this.project(this[_el_15], 2);
      let _text_17 = html.Text.new('\n              ');
      this[_el_15][$append](_text_17);
      let _text_18 = html.Text.new('\n          ');
      this[_el_5][$append](_text_18);
      let _text_19 = html.Text.new('\n      ');
      this[_el_3][$append](_text_19);
      let _text_20 = html.Text.new('\n  ');
      this[_el_1][$append](_text_20);
      let _text_21 = html.Text.new('\n');
      this.init([_text_0, this[_el_1], _text_21], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this.setAttr(this[_el_1], 'role', (_ctx.role != null ? _ctx.role : '')[$toString]());
      }
      let currVal_0 = _ctx.z;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this[_el_1], 'elevation', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.hasBox;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateClass(this[_el_1], 'shadow', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.matchMinSourceWidth;
      if (!(this[_expr_2] == currVal_2)) {
        this.updateClass(this[_el_1], 'full-width', currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.inkBackground;
      if (!(this[_expr_3] == currVal_3)) {
        this.updateClass(this[_el_1], 'ink', currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.slide;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this.setAttr(this[_el_1], 'slide', currVal_4 == null ? null : dart.toString(currVal_4));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.zIndex;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this.setAttr(this[_el_1], 'z-index', currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.transformOrigin;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_el_1].style[$setProperty]('transform-origin', currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.showPopup;
      if (!(this[_expr_7] == currVal_7)) {
        this.updateClass(this[_el_1], 'visible', currVal_7);
        this[_expr_7] = currVal_7;
      }
      let l = _ctx.uniqueId;
      let currVal_8 = l != null ? l : '';
      if (!(this[_expr_8] === currVal_8)) {
        this.setProp(this[_el_1], 'id', currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_10 = _ctx.maxHeight;
      if (!core.identical(this[_expr_10], currVal_10)) {
        this[_el_3].style[$setProperty]('max-height', (currVal_10 == null ? null : dart.toString(currVal_10)) == null ? null : dart.notNull(currVal_10 == null ? null : dart.toString(currVal_10)) + 'px');
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.maxWidth;
      if (!core.identical(this[_expr_11], currVal_11)) {
        this[_el_3].style[$setProperty]('max-width', (currVal_11 == null ? null : dart.toString(currVal_11)) == null ? null : dart.notNull(currVal_11 == null ? null : dart.toString(currVal_11)) + 'px');
        this[_expr_11] = currVal_11;
      }
    }
  };
  (material_popup__material_popup$46template._ViewMaterialPopupComponent1.new = function(parentView, parentIndex) {
    this[_el_1] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_el_7] = null;
    this[_el_11] = null;
    this[_el_15] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    material_popup__material_popup$46template._ViewMaterialPopupComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_popup__material_popup$46template.ViewMaterialPopupComponent0._renderType;
  }).prototype = material_popup__material_popup$46template._ViewMaterialPopupComponent1.prototype;
  dart.addTypeTests(material_popup__material_popup$46template._ViewMaterialPopupComponent1);
  dart.setMethodSignature(material_popup__material_popup$46template._ViewMaterialPopupComponent1, () => ({
    __proto__: dart.getMethods(material_popup__material_popup$46template._ViewMaterialPopupComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_popup__material_popup.MaterialPopupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_popup__material_popup$46template._ViewMaterialPopupComponent1, () => ({
    __proto__: dart.getFields(material_popup__material_popup$46template._ViewMaterialPopupComponent1.__proto__),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.DivElement),
    [_el_7]: dart.fieldType(html.Element),
    [_el_11]: dart.fieldType(html.Element),
    [_el_15]: dart.fieldType(html.Element),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic)
  }));
  material_popup__material_popup$46template.viewFactory_MaterialPopupComponent1 = function(parentView, parentIndex) {
    return new material_popup__material_popup$46template._ViewMaterialPopupComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_popup__material_popup$46template.viewFactory_MaterialPopupComponent1, AppViewAndintToAppViewOfMaterialPopupComponent());
  dart.defineLazy(material_popup__material_popup$46template, {
    /*material_popup__material_popup$46template.styles$MaterialPopupComponentHost*/get styles$MaterialPopupComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _appEl_0 = Symbol('_appEl_0');
  const _MaterialPopupComponent_0_8 = Symbol('_MaterialPopupComponent_0_8');
  const __PopupHierarchy_0_11 = Symbol('__PopupHierarchy_0_11');
  const __PopupRef_0_12 = Symbol('__PopupRef_0_12');
  const _PopupHierarchy_0_11 = Symbol('_PopupHierarchy_0_11');
  const _PopupRef_0_12 = Symbol('_PopupRef_0_12');
  let const$0;
  let const$1;
  material_popup__material_popup$46template._ViewMaterialPopupComponentHost0 = class _ViewMaterialPopupComponentHost0 extends src__core__linker__app_view.AppView {
    get [_PopupHierarchy_0_11]() {
      if (this[__PopupHierarchy_0_11] == null) {
        this[__PopupHierarchy_0_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_11];
    }
    get [_PopupRef_0_12]() {
      if (this[__PopupRef_0_12] == null) {
        this[__PopupRef_0_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_12];
    }
    build() {
      this[_compView_0] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this.rootEl);
      this[_MaterialPopupComponent_0_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions'))), this.viewData.parentIndex)), core.bool._check(this.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0].ref, this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(this.rootEl));
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], this.projectableNodes);
      this.init0(this[_appEl_0]);
      return new (ComponentRefOfMaterialPopupComponent()).new(0, this, this.rootEl, this[_MaterialPopupComponent_0_8]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 0 === nodeIndex) {
        return this[_MaterialPopupComponent_0_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 0 === nodeIndex) {
        return this[_PopupHierarchy_0_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 0 === nodeIndex) {
        return this[_PopupRef_0_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupHierarchy_0_11] = null;
    this[__PopupRef_0_12] = null;
    material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.prototype;
  dart.addTypeTests(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0);
  dart.setMethodSignature(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getMethods(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getGetters(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    [_PopupHierarchy_0_11]: dart.fnType(dart.dynamic, []),
    [_PopupRef_0_12]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getFields(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_0_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_0_12]: dart.fieldType(dart.dynamic)
  }));
  material_popup__material_popup$46template.viewFactory_MaterialPopupComponentHost0 = function(parentView, parentIndex) {
    return new material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_popup__material_popup$46template.viewFactory_MaterialPopupComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_popup__material_popup$46template, {
    /*material_popup__material_popup$46template.MaterialPopupComponentNgFactory*/get MaterialPopupComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialPopupComponent()).new('material-popup', material_popup__material_popup$46template.viewFactory_MaterialPopupComponentHost0, material_popup__material_popup$46template._MaterialPopupComponentMetadata));
    },
    /*material_popup__material_popup$46template._MaterialPopupComponentMetadata*/get _MaterialPopupComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_popup__material_popup$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  material_popup__material_popup$46template.initReflector = function() {
    if (dart.test(material_popup__material_popup$46template._visited)) {
      return;
    }
    material_popup__material_popup$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), material_popup__material_popup$46template.MaterialPopupComponentNgFactory);
    src__di__reflector.registerDependencies(material_popup__material_popup.getHierarchy, const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.constList([dart.wrapType(material_popup__material_popup.MaterialPopupComponent)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_popup__material_popup.getResolvedPopupRef, const$5 || (const$5 = dart.constList([const$4 || (const$4 = dart.constList([dart.wrapType(material_popup__material_popup.MaterialPopupComponent)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__enums__visibility$46template.initReflector();
    laminate__overlay__module$46template.initReflector();
    laminate__overlay__overlay$46template.initReflector();
    laminate__overlay__zindexer$46template.initReflector();
    laminate__popup__module$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__ui__toggle$46template.initReflector();
    utils__async__async$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.fn(material_popup__material_popup$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_popup/material_popup.template.ddc", {
    "package:angular_components/material_popup/material_popup.template.dart": material_popup__material_popup$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_popup.template.dart"],"names":[],"mappings":"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","file":"material_popup.template.ddc.js"}');
  // Exports:
  return {
    material_popup__material_popup$46template: material_popup__material_popup$46template
  };
});

//# sourceMappingURL=material_popup.template.ddc.js.map
