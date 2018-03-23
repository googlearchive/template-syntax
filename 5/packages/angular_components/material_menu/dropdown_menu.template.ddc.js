define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/src/laminate/popup/popup_source_directive', 'packages/angular_components/material_menu/material_menu.template', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/material_menu/dropdown_menu', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/material_menu/menu_popup_wrapper.template', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, view_type, constants, view, app_view_utils, dropdown_button, dropdown_button$, dom_popup_source, reference, popup_source_directive, material_menu, material_menu$, dropdown_menu, app_view, reflector, angular, focus, menu_popup_wrapper, material_popup, focusable_mixin, disposer) {
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
  const material_select__dropdown_button$46template = dropdown_button.material_select__dropdown_button$46template;
  const material_select__dropdown_button = dropdown_button$.material_select__dropdown_button;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const src__laminate__popup__popup_source_directive = popup_source_directive.src__laminate__popup__popup_source_directive;
  const material_menu__menu_popup$46template = material_menu.material_menu__menu_popup$46template;
  const material_menu__menu_popup = material_menu$.material_menu__menu_popup;
  const material_menu__dropdown_menu = dropdown_menu.material_menu__dropdown_menu;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const material_menu__menu_popup_wrapper$46template = menu_popup_wrapper.material_menu__menu_popup_wrapper$46template;
  const material_popup__material_popup$46template = material_popup.material_popup__material_popup$46template;
  const mixins__focusable_mixin$46template = focusable_mixin.mixins__focusable_mixin$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_menu__dropdown_menu$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfDropdownMenuComponent = () => (AppViewOfDropdownMenuComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__dropdown_menu.DropdownMenuComponent)))();
  let AppViewAndintToAppViewOfDropdownMenuComponent = () => (AppViewAndintToAppViewOfDropdownMenuComponent = dart.constFn(dart.fnType(AppViewOfDropdownMenuComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfDropdownMenuComponent = () => (ComponentRefOfDropdownMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__dropdown_menu.DropdownMenuComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDropdownMenuComponent = () => (ComponentFactoryOfDropdownMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__dropdown_menu.DropdownMenuComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_menu__dropdown_menu$46template, {
    /*material_menu__dropdown_menu$46template.styles$DropdownMenuComponent*/get styles$DropdownMenuComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _query_DropdownButtonComponent_1_0_isDirty = Symbol('_query_DropdownButtonComponent_1_0_isDirty');
  const _query_MenuPopupComponent_1_1_isDirty = Symbol('_query_MenuPopupComponent_1_1_isDirty');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _DropdownButtonComponent_1_5 = Symbol('_DropdownButtonComponent_1_5');
  const _PopupSourceDirective_1_6 = Symbol('_PopupSourceDirective_1_6');
  const _el_5 = Symbol('_el_5');
  const _compView_5 = Symbol('_compView_5');
  const _MenuPopupComponent_5_5 = Symbol('_MenuPopupComponent_5_5');
  const _PopupSourceDirective_5_6 = Symbol('_PopupSourceDirective_5_6');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _handle_trigger_1_0 = Symbol('_handle_trigger_1_0');
  const _handle_isExpandedChange_5_0 = Symbol('_handle_isExpandedChange_5_0');
  let const$;
  material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0 = class ViewDropdownMenuComponent0 extends src__core__linker__app_view.AppView$(material_menu__dropdown_menu.DropdownMenuComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('\n');
      parentRenderNode[$append](_text_0);
      this[_compView_1] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this.createAttr(this[_el_1], 'popupSource', '');
      this[_DropdownButtonComponent_1_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
      this[_PopupSourceDirective_1_6] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_1]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)));
      let _text_2 = html.Text.new('\n  ');
      let _text_3 = html.Text.new('\n');
      this[_compView_1].create(this[_DropdownButtonComponent_1_5], [(() => {
          let _ = [_text_2];
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](0)));
          _[$addAll]([_text_3]);
          return _;
        })()]);
      let _text_4 = html.Text.new('\n');
      parentRenderNode[$append](_text_4);
      this[_compView_5] = new material_menu__menu_popup$46template.ViewMenuPopupComponent0.new(this, 5);
      this[_el_5] = this[_compView_5].rootEl;
      parentRenderNode[$append](this[_el_5]);
      this[_MenuPopupComponent_5_5] = new material_menu__menu_popup.MenuPopupComponent.new();
      this[_PopupSourceDirective_5_6] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_5]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)));
      let _text_6 = html.Text.new('\n  ');
      let _text_7 = html.Text.new('\n');
      this[_compView_5].create(this[_MenuPopupComponent_5_5], [(() => {
          let _ = [_text_6];
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](1)));
          _[$addAll]([_text_7]);
          return _;
        })()]);
      let _text_8 = html.Text.new('\n');
      parentRenderNode[$append](_text_8);
      let subscription_0 = this[_DropdownButtonComponent_1_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_1_0)));
      let subscription_1 = this[_MenuPopupComponent_5_5].isExpandedChange.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_isExpandedChange_5_0)));
      this.ctx.dropdownButton = this[_DropdownButtonComponent_1_5];
      this.ctx.menuPopup = this[_MenuPopupComponent_5_5];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_select__dropdown_button.DropdownButtonComponent) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_DropdownButtonComponent_1_5];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupSourceDirective_1_6];
      }
      if (token === dart.wrapType(material_menu__menu_popup.MenuPopupComponent) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_MenuPopupComponent_5_5];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_PopupSourceDirective_5_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_toggle = this[_PopupSourceDirective_1_6];
      changed = false;
      let currVal_0 = _ctx.buttonText;
      if (!(this[_expr_0] == currVal_0)) {
        this[_DropdownButtonComponent_1_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (!(this[_expr_1] == currVal_1)) {
        this[_DropdownButtonComponent_1_5].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.menu;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MenuPopupComponent_5_5].menu = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.preferredPositions;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_MenuPopupComponent_5_5].preferredPositions = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.isExpanded;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_MenuPopupComponent_5_5].isExpanded = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.width;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_MenuPopupComponent_5_5].width = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = local_toggle;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_MenuPopupComponent_5_5].popupSource = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_compView_1].detectChanges();
      this[_compView_5].detectChanges();
      if (firstCheck) {
        this[_PopupSourceDirective_1_6].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_PopupSourceDirective_5_6].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
      let t$ = this[_compView_5];
      t$ == null ? null : t$.destroy();
      this[_PopupSourceDirective_1_6].ngOnDestroy();
      this[_PopupSourceDirective_5_6].ngOnDestroy();
    }
    [_handle_trigger_1_0]($event) {
      this.ctx.isExpanded = true;
    }
    [_handle_isExpandedChange_5_0]($event) {
      this.ctx.isExpanded = $event;
    }
  };
  (material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.new = function(parentView, parentIndex) {
    this[_query_DropdownButtonComponent_1_0_isDirty] = true;
    this[_query_MenuPopupComponent_1_1_isDirty] = true;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_DropdownButtonComponent_1_5] = null;
    this[_PopupSourceDirective_1_6] = null;
    this[_el_5] = null;
    this[_compView_5] = null;
    this[_MenuPopupComponent_5_5] = null;
    this[_PopupSourceDirective_5_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('dropdown-menu'));
    let t = material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0._renderType;
    t == null ? material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, material_menu__dropdown_menu$46template.styles$DropdownMenuComponent) : t;
    this.setupComponentType(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0._renderType);
  }).prototype = material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.prototype;
  dart.addTypeTests(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0);
  dart.setMethodSignature(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0, () => ({
    __proto__: dart.getMethods(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__dropdown_menu.DropdownMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_isExpandedChange_5_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0, () => ({
    __proto__: dart.getFields(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__),
    [_query_DropdownButtonComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_query_MenuPopupComponent_1_1_isDirty]: dart.fieldType(core.bool),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_1_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    [_PopupSourceDirective_1_6]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_el_5]: dart.fieldType(html.Element),
    [_compView_5]: dart.fieldType(material_menu__menu_popup$46template.ViewMenuPopupComponent0),
    [_MenuPopupComponent_5_5]: dart.fieldType(material_menu__menu_popup.MenuPopupComponent),
    [_PopupSourceDirective_5_6]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0, {
    /*material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_menu__dropdown_menu$46template.viewFactory_DropdownMenuComponent0 = function(parentView, parentIndex) {
    return new material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_menu__dropdown_menu$46template.viewFactory_DropdownMenuComponent0, AppViewAndintToAppViewOfDropdownMenuComponent());
  dart.defineLazy(material_menu__dropdown_menu$46template, {
    /*material_menu__dropdown_menu$46template.styles$DropdownMenuComponentHost*/get styles$DropdownMenuComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _DropdownMenuComponent_0_5 = Symbol('_DropdownMenuComponent_0_5');
  material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0 = class _ViewDropdownMenuComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DropdownMenuComponent_0_5] = new material_menu__dropdown_menu.DropdownMenuComponent.new(this[_compView_0].ref);
      this[_compView_0].create(this[_DropdownMenuComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDropdownMenuComponent()).new(0, this, this.rootEl, this[_DropdownMenuComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_menu__dropdown_menu.DropdownMenuComponent) && 0 === nodeIndex) {
        return this[_DropdownMenuComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_DropdownMenuComponent_0_5].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_DropdownMenuComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DropdownMenuComponent_0_5] = null;
    material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0.prototype;
  dart.addTypeTests(material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0);
  dart.setMethodSignature(material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0),
    [_DropdownMenuComponent_0_5]: dart.fieldType(material_menu__dropdown_menu.DropdownMenuComponent)
  }));
  material_menu__dropdown_menu$46template.viewFactory_DropdownMenuComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_menu__dropdown_menu$46template.viewFactory_DropdownMenuComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_menu__dropdown_menu$46template, {
    /*material_menu__dropdown_menu$46template.DropdownMenuComponentNgFactory*/get DropdownMenuComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDropdownMenuComponent()).new('dropdown-menu', material_menu__dropdown_menu$46template.viewFactory_DropdownMenuComponentHost0, material_menu__dropdown_menu$46template._DropdownMenuComponentMetadata));
    },
    /*material_menu__dropdown_menu$46template._DropdownMenuComponentMetadata*/get _DropdownMenuComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_menu__dropdown_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__dropdown_menu$46template.initReflector = function() {
    if (dart.test(material_menu__dropdown_menu$46template._visited)) {
      return;
    }
    material_menu__dropdown_menu$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__dropdown_menu.DropdownMenuComponent), material_menu__dropdown_menu$46template.DropdownMenuComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    material_menu__menu_popup$46template.initReflector();
    material_menu__menu_popup_wrapper$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_select__dropdown_button$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(material_menu__dropdown_menu$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_menu/dropdown_menu.template.ddc", {
    "package:angular_components/material_menu/dropdown_menu.template.dart": material_menu__dropdown_menu$46template
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_menu.template.dart"],"names":[],"mappings":";;;;QA8Da,IAAO;;;;;;QACA,iCAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAvBR,oEAA4B;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;AA4B/C,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAa,UARJ,AAQc,AAAI,IARX,SAQuB,CAAC;AACxC,sBAAgB,SAAO,CAAC,OAAO;AAC/B,uBAAW,GAAG,IAAI,4EAAoC,CAAC,MAAM;AAC7D,iBAAK,GAAG,iBAAW,OAAO;AAC1B,sBAAgB,SAAO,CAAC,WAAK;AAC7B,qBAAU,CAAC,WAAK,EAAE,eAAe;AACjC,wCAA4B,GAAG,IAAI,4DAA+B;AAClE,qCAAyB,GAAG,IAAI,qEAA4B,qEAAC,eAAU,YAAY,CAAU,2EAAqB,EAAE,aAAQ,YAAY,IAf/H,AAekI,IAf3H,oBAe2H,WAAK,kEAAE,eAAU,YAAY,CAAU,sEAAkB,EAAE,aAAQ,YAAY,EAAE;AAC5N,UAAa,UAhBJ,AAgBc,AAAI,IAhBX,SAgBuB,CAAC;AACxC,UAAa,UAjBJ,AAiBc,AAAI,IAjBX,SAiBuB,CAAC;AACxC,uBAAW,OAAO,CAAC,kCAA4B,EAAE;kBAC/C,CAAU,OAAO;0CAAU,qBAAgB,QAAC;qBAAY,CAAC,OAAO;;;AAElE,UAAa,UArBJ,AAqBc,AAAI,IArBX,SAqBuB,CAAC;AACxC,sBAAgB,SAAO,CAAC,OAAO;AAC/B,uBAAW,GAAG,IAAI,gEAA+B,CAAC,MAAM;AACxD,iBAAK,GAAG,iBAAW,OAAO;AAC1B,sBAAgB,SAAO,CAAC,WAAK;AAC7B,mCAAuB,GAAG,IAAI,gDAA0B;AACxD,qCAAyB,GAAG,IAAI,qEAA4B,qEAAC,eAAU,YAAY,CAAU,2EAAqB,EAAE,aAAQ,YAAY,IA3B/H,AA2BkI,IA3B3H,oBA2B2H,WAAK,kEAAE,eAAU,YAAY,CAAU,sEAAkB,EAAE,aAAQ,YAAY,EAAE;AAC5N,UAAa,UA5BJ,AA4Bc,AAAI,IA5BX,SA4BuB,CAAC;AACxC,UAAa,UA7BJ,AA6Bc,AAAI,IA7BX,SA6BuB,CAAC;AACxC,uBAAW,OAAO,CAAC,6BAAuB,EAAE;kBAC1C,CAAU,OAAO;0CAAU,qBAAgB,QAAC;qBAAY,CAAC,OAAO;;;AAElE,UAAa,UAjCJ,AAiCc,AAAI,IAjCX,SAiCuB,CAAC;AACxC,sBAAgB,SAAO,CAAC,OAAO;AAC/B,UAAM,iBAAiB,kCAA4B,QAAQ,OAAO,CAAC,kBAAa,CAnCvE,IAAO,UAAP,IAAO,UAmCiE,oCAAmB;AACpG,UAAM,iBAAiB,6BAAuB,iBAAiB,OAAO,CAAC,kBAAa,uBAAC,6CAA4B;AACjH,cAAG,eAAe,GAAG,kCAA4B;AACjD,cAAG,UAAU,GAAG,6BAAuB;AACvC,eAAI,CAAC,uDAAU,CAAC,cAAc,EAAE,cAAc;AAC9C,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAU,uEAAuB,IAAO,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI,GAAM;AACjG,cAAO,mCAA4B;;AAErC,UAAK,AAAU,KAAK,KAAU,gFAAoB,IAAO,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI,GAAM;AAC9F,cAAO,gCAAyB;;AAElC,UAAK,AAAU,KAAK,KAAU,2DAAkB,IAAO,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI,GAAM;AAC5F,cAAO,8BAAuB;;AAEhC,UAAK,AAAU,KAAK,KAAU,gFAAoB,IAAO,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI,GAAM;AAC9F,cAAO,gCAAyB;;AAElC,YAAO,eAAc;IACvB;;AAIE,UAAoC,OAAO,QAAG;AAC9C,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,UAAmC,eAAe,+BAAyB;AAC3E,aAAO,GAAG;AACV,UAAM,YAAY,IAAI,WAAW;AACjC,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,0CAA4B,WAAW,GAAG,SAAS;AACnD,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,SAAS;AAC/B,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,0CAA4B,SAAS,GAAG,SAAS;AACjD,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,aAAO,GAAG;AACV,UAAM,YAAY,IAAI,KAAK;AAC3B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qCAAuB,KAAK,GAAG,SAAS;AACxC,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,mBAAmB;AACzC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qCAAuB,mBAAmB,GAAG,SAAS;AACtD,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,WAAW;AACjC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qCAAuB,WAAW,GAAG,SAAS;AAC9C,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,MAAM;AAC5B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qCAAuB,MAAM,GAAG,SAAS;AACzC,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,YAAY;AAC9B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qCAAuB,YAAY,GAAG,SAAS;AAC/C,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;AACzB,uBAAW,cAAc;AACzB,UAAI,UAAU,EAAE;AACd,uCAAyB,gBAAgB;;AAE3C,UAAI,UAAU,EAAE;AACd,uCAAyB,gBAAgB;;IAE7C;;AAIE,+BAAW;;AACX,gCAAW;;AACX,qCAAyB,YAAY;AACrC,qCAAyB,YAAY;IACvC;0BAEyB,MAAM;AAC7B,cAAG,WAAW,GAAG;IACnB;mCAEkC,MAAM;AACtC,cAAG,WAAW,GAAG,MAAM;IACzB;;qFA7I2B,UAA2B,EAAE,WAAe;IAlBlE,gDAA0C,GAAG;IAC7C,2CAAqC,GAAG;IAC7B,WAAK;IACgB,iBAAW;IAChB,kCAA4B;IAC/B,+BAAyB;IACtC,WAAK;IACW,iBAAW;IAChB,6BAAuB;IACrB,+BAAyB;IAC/C,aAAO;IACT,aAAO;IACR,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;AAEgE,gGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AACzK,eAAM,GAAG,IAAO,oBAAP,AAAA,AAAQ,IAAD,SAAS,gBAAc,CAAC;AACxC,0FAAW;gBAAX,8EAAW,GAAK,AAAA,AAAS,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,KAAK,EAAE,oEAA4B;AAC/G,2BAAkB,CAAC,8EAAW;EAChC;;;;;;;;;;;;;;;4BAHW,IAAO;;;;4BAAP,IAAO;;;;;;;;;;;;;MAFS,8EAAW;;;;;wFAiJkC,UAA2B,EAAE,WAAe;AACpH,UAAO,KAAI,sEAA0B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;MAEoB,wEAAgC;YAAG;;;;;;;AAQnD,uBAAW,GAAG,IAAI,sEAA0B,CAAC,MAAM;AACnD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,sCAA0B,GAAG,IAAI,sDAA6B,CAAC,iBAAW,IAAI;AAC9E,uBAAW,OAAO,CAAC,gCAA0B,EAAE,qBAAgB;AAC/D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,2CAA2C,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACpG;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAU,iEAAqB,IAAM,MAAK,SAAS,EAAI;AACzE,cAAO,iCAA0B;;AAEnC,YAAO,eAAc;IACvB;;AAIE,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;AACzB,UAAI,UAAU,EAAE;AACd,wCAA0B,gBAAgB;;IAE9C;;AAIE,+BAAW;;AACX,sCAA0B,YAAY;IACxC;;0FApCgC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,gCAA0B;AACwB,qGAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;4FAuCjI,UAA2B,EAAE,WAAe;AACzF,UAAO,KAAI,2EAA+B,CAAC,UAAU,EAAE,WAAW;EACpE;;;MAEsD,sEAA8B;YAAG,gBAAM,+CAA+C,CAAC,iBAAiB,8EAAsC,EAAE,sEAA8B;;MAC9N,sEAA8B;YAAG;;MACnC,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAO,oCAAiB,CAAC,iEAAqB,EAAE,sEAA8B;AAC9E,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,yDAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,kDAAa;EACrB","file":"dropdown_menu.template.ddc.js"}');
  // Exports:
  return {
    material_menu__dropdown_menu$46template: material_menu__dropdown_menu$46template
  };
});

//# sourceMappingURL=dropdown_menu.template.ddc.js.map
