define(['dart_sdk', 'packages/angular_components/src/material_tree/group/material_tree_group.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/src/material_tree/group/material_tree_group', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular/src/core/linker/dynamic_component_loader', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/src/material_tree/material_tree_root', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/model/selection/selection_options', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/src/material_tree/material_tree_node.template', 'packages/angular_components/src/material_tree/material_tree_root.template'], function(dart_sdk, material_tree_group$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_for, ng_if, material_tree_group, button_decorator, button_decorator$, dom_service, keyboard_only_focus_indicator, material_checkbox, material_checkbox$, material_icon, material_icon$, dynamic_component, dynamic_component_loader, dynamic_component$, material_tree_root, material_dropdown_base, opaque_token, selection_options, reflector, angular, keyboard_only_focus_indicator$, material_dropdown_base$, selection_options$, material_tree_node, material_tree_root$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tree__group__material_tree_group$46scss$46css$46shim = material_tree_group$46scss$46css.src__material_tree__group__material_tree_group$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__material_tree__group__material_tree_group = material_tree_group.src__material_tree__group__material_tree_group;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const dynamic_component__dynamic_component$46template = dynamic_component.dynamic_component__dynamic_component$46template;
  const src__core__linker__dynamic_component_loader = dynamic_component_loader.src__core__linker__dynamic_component_loader;
  const dynamic_component__dynamic_component = dynamic_component$.dynamic_component__dynamic_component;
  const src__material_tree__material_tree_root = material_tree_root.src__material_tree__material_tree_root;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const model__selection__selection_options$46template = selection_options$.model__selection__selection_options$46template;
  const src__material_tree__material_tree_node$46template = material_tree_node.src__material_tree__material_tree_node$46template;
  const src__material_tree__material_tree_root$46template = material_tree_root$.src__material_tree__material_tree_root$46template;
  const _root = Object.create(null);
  const src__material_tree__group__material_tree_group$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialTreeGroupComponent = () => (AppViewOfMaterialTreeGroupComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupComponent = () => (AppViewAndintToAppViewOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeGroupComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialTreeGroupComponent = () => (ComponentRefOfMaterialTreeGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTreeGroupComponent = () => (ComponentFactoryOfMaterialTreeGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template.styles$MaterialTreeGroupComponent*/get styles$MaterialTreeGroupComponent() {
      return dart.constList([src__material_tree__group__material_tree_group$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0 = class ViewMaterialTreeGroupComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', parentRenderNode));
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1);
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.visibleGroup;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_1_9].ngDoCheck();
      this[_NgIf_2_9].ngIf = _ctx.viewMoreLinkVisible;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      if (dart.test(firstCheck)) {
        if (!(this.ctx.isMaterialTreeGroup == null)) {
          this.updateElemClass(this.rootEl, 'material-tree-group', this.ctx.isMaterialTreeGroup);
        }
      }
    }
  };
  (src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-tree-group'));
    this.createAttr(this.rootEl, 'role', 'group');
    let t = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
    t == null ? src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tree__group__material_tree_group$46template.styles$MaterialTreeGroupComponent) : t;
    this.setupComponentType(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType);
  }).prototype = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.__proto__),
    [_el_0]: dart.fieldType(html.UListElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0, {
    /*src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent0, AppViewAndintToAppViewOfMaterialTreeGroupComponent());
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_6');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _el_4 = Symbol('_el_4');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _appEl_8 = Symbol('_appEl_8');
  const _NgFor_8_9 = Symbol('_NgFor_8_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_12 = Symbol('_expr_12');
  const _handle_click_0_1 = Symbol('_handle_click_0_1');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1 = class _ViewMaterialTreeGroupComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('li');
      this.createAttr(this[_el_0], 'buttonDecorator', '');
      this[_el_0].className = 'material-tree-option';
      this.createAttr(this[_el_0], 'keyboardOnlyFocusIndicator', '');
      this.createAttr(this[_el_0], 'role', 'button');
      this.addShimE(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'material-tree-item';
      this.createAttr(this[_el_1], 'role', 'treeitem');
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_2].className = 'material-tree-shift';
      this.addShimC(this[_el_2]);
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_2][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2);
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this[_el_4].className = 'material-tree-border';
      this.addShimC(this[_el_4]);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_2][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 2, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5);
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_2][$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 2, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6);
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_2][$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 2, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7);
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _anchor_8 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_8);
      this[_appEl_8] = new src__core__linker__view_container.ViewContainer.new(8, 0, this, _anchor_8);
      let _TemplateRef_8_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_8], src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8);
      this[_NgFor_8_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_8], _TemplateRef_8_8);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_1)));
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]('keyup', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]('mousedown', this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_ButtonDirective_0_5].instance;
      }
      if (token === dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_KeyboardOnlyFocusIndicatorDirective_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_option = this.locals[$_get]('$implicit');
      this[_NgIf_3_9].ngIf = _ctx.showCheckbox(local_option);
      this[_NgIf_5_9].ngIf = _ctx.useComponentRenderer;
      this[_NgIf_6_9].ngIf = !dart.test(_ctx.useComponentRenderer);
      this[_NgIf_7_9].ngIf = _ctx.hasChildren(local_option);
      let currVal_12 = _ctx.getChildGroups(local_option);
      if (!core.identical(this[_expr_12], currVal_12)) {
        this[_NgFor_8_9].ngForOf = currVal_12;
        this[_expr_12] = currVal_12;
      }
      this[_NgFor_8_9].ngDoCheck();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      let currVal_0 = _ctx.isSelected(local_option);
      if (!(this[_expr_0] == currVal_0)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), 'selected', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isSelectable(local_option);
      if (!(this[_expr_1] == currVal_1)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), 'selectable', currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_2 = _ctx.getIndent(local_option);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_el_1].style[$setProperty]('padding-left', currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.isSelected(local_option));
      if (!core.identical(this[_expr_3], currVal_3)) {
        this.setAttr(this[_el_1], 'aria-selected', currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
      if (firstCheck) {
        if (!(_ctx.fixedPadding == null)) {
          this[_el_2].style[$setProperty]('padding-left', _ctx.fixedPadding == null ? null : dart.toString(_ctx.fixedPadding));
        }
      }
      let currVal_6 = _ctx.hasChildren(local_option);
      if (!(this[_expr_6] == currVal_6)) {
        this.updateClass(this[_el_4], 'is-parent', currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.isExpanded(local_option);
      if (!(this[_expr_7] == currVal_7)) {
        this.updateClass(this[_el_4], 'is-expanded', currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.level === 0;
      if (!(this[_expr_8] === currVal_8)) {
        this.updateClass(this[_el_4], 'root-border', currVal_8);
        this[_expr_8] = currVal_8;
      }
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_5];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_6];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_7];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_8];
      t$2 == null ? null : t$2.destroyNestedViews();
    }
    [_handle_trigger_0_0]($event) {
      let local_option = this.locals[$_get]('$implicit');
      this.ctx.handleSelectionOrExpansion(html.Event._check($event), local_option);
    }
    [_handle_click_0_1]($event) {
      this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].hideOutline();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_el_4] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_8] = null;
    this[_NgFor_8_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_12] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_4]: dart.fieldType(html.DivElement),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_8]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_8_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1, AppViewAndintToAppViewOfMaterialTreeGroupComponent());
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2 = class _ViewMaterialTreeGroupComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'tree-selection-state';
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]('$implicit');
      this[_NgIf_1_9].ngIf = _ctx.isMultiSelect;
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.isMultiSelect) && dart.test(_ctx.isSelected(local_option));
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2, AppViewAndintToAppViewOfMaterialTreeGroupComponent());
  const _compView_0 = Symbol('_compView_0');
  const _MaterialCheckboxComponent_0_5 = Symbol('_MaterialCheckboxComponent_0_5');
  let const$0;
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3 = class _ViewMaterialTreeGroupComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'tree-selection-state themeable';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialCheckboxComponent_0_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, null, null, null);
      this[_compView_0].create(this[_MaterialCheckboxComponent_0_5], [const$0 || (const$0 = dart.constList([], dart.dynamic))]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_option = this.parentView.parentView.locals[$_get]('$implicit');
      changed = false;
      if (firstCheck) {
        this[_MaterialCheckboxComponent_0_5].readOnly = true;
        changed = true;
      }
      let currVal_0 = dart.test(_ctx.isReadOnly) || dart.test(_ctx.showDisabledCheckbox(local_option));
      if (!(this[_expr_0] === currVal_0)) {
        this[_MaterialCheckboxComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_2 = _ctx.isSelected(local_option);
      if (!(this[_expr_2] == currVal_2)) {
        this[_MaterialCheckboxComponent_0_5].checked = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
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
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialCheckboxComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_0_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3, AppViewAndintToAppViewOfMaterialTreeGroupComponent());
  const _MaterialIconComponent_0_5 = Symbol('_MaterialIconComponent_0_5');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4 = class _ViewMaterialTreeGroupComponent4 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'tree-selection-state';
      this.createAttr(this[_el_0], 'icon', 'check');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_0_5].icon = 'check';
        changed = true;
      }
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
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4, AppViewAndintToAppViewOfMaterialTreeGroupComponent());
  const _appEl_0 = Symbol('_appEl_0');
  const _DynamicComponent_0_8 = Symbol('_DynamicComponent_0_8');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5 = class _ViewMaterialTreeGroupComponent5 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'item component';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_DynamicComponent_0_8] = new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]);
      this[_compView_0].create(this[_DynamicComponent_0_8], []);
      this.init0(this[_appEl_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(dynamic_component__dynamic_component.DynamicComponent) && 0 === nodeIndex) {
        return this[_DynamicComponent_0_8];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]('$implicit');
      changed = false;
      let currVal_0 = _ctx.getComponentType(local_option);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_DynamicComponent_0_8].componentType = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.getComponentFactory(local_option);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_DynamicComponent_0_8].componentFactory = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = local_option;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_DynamicComponent_0_8].value = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_DynamicComponent_0_8].ngAfterChanges();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_DynamicComponent_0_8].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_DynamicComponent_0_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5, AppViewAndintToAppViewOfMaterialTreeGroupComponent());
  const _text_1 = Symbol('_text_1');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6 = class _ViewMaterialTreeGroupComponent6 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'text';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_option = this.parentView.locals[$_get]('$implicit');
      let currVal_0 = !dart.test(_ctx.showDisabledCheckbox(local_option));
      if (!(this[_expr_0] === currVal_0)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), 'item', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.showDisabledCheckbox(local_option);
      if (!(this[_expr_1] == currVal_1)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), 'disabled-item', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.getOptionAsText(local_option));
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_1][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6, AppViewAndintToAppViewOfMaterialTreeGroupComponent());
  const _MaterialIconComponent_0_6 = Symbol('_MaterialIconComponent_0_6');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7 = class _ViewMaterialTreeGroupComponent7 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'buttonDecorator', '');
      this[_el_0].className = 'tree-expansion-state';
      this.createAttr(this[_el_0], 'role', 'button');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0]));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_6], []);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_option = this.parentView.locals[$_get]('$implicit');
      changed = false;
      let currVal_1 = dart.test(_ctx.isExpanded(local_option)) ? 'expand_less' : 'expand_more';
      if (!(this[_expr_1] === currVal_1)) {
        this[_MaterialIconComponent_0_6].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isExpanded(local_option);
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_0], 'expanded', currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_option = this.parentView.locals[$_get]('$implicit');
      this.ctx.handleExpansion(html.Event._check($event), local_option);
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7, AppViewAndintToAppViewOfMaterialTreeGroupComponent());
  const _MaterialTreeGroupComponent_0_5 = Symbol('_MaterialTreeGroupComponent_0_5');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  let const$1;
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8 = class _ViewMaterialTreeGroupComponent8 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = 'child-tree';
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialTreeGroupComponent_0_5] = new src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.parentView.viewData.parentIndex)), this[_compView_0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.viewData.parentIndex, null)), core.int._check(this.parentView.parentView.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'))), this.parentView.parentView.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeGroupComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) && 0 === nodeIndex) {
        return this[_MaterialTreeGroupComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_subGroup = model__selection__selection_options.OptionGroup._check(this.locals[$_get]('$implicit'));
      let local_option = this.parentView.locals[$_get]('$implicit');
      let currVal_0 = local_subGroup;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialTreeGroupComponent_0_5].group = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = dart.notNull(_ctx.level) + 1;
      if (!(this[_expr_1] === currVal_1)) {
        this[_MaterialTreeGroupComponent_0_5].level = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.showCheckbox(local_option);
      if (!(this[_expr_2] == currVal_2)) {
        this[_MaterialTreeGroupComponent_0_5].parentHasCheckbox = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.allowParentSingleSelection;
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialTreeGroupComponent_0_5].allowParentSingleSelection = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.maxInitialOptionsShown;
      if (!(this[_expr_4] == currVal_4)) {
        this[_MaterialTreeGroupComponent_0_5].maxInitialOptionsShown = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.expandAll;
      if (!(this[_expr_5] == currVal_5)) {
        this[_MaterialTreeGroupComponent_0_5].expandAll = currVal_5;
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialTreeGroupComponent_0_5].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialTreeGroupComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0),
    [_MaterialTreeGroupComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.int),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.int),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8, AppViewAndintToAppViewOfMaterialTreeGroupComponent());
  const _el_3 = Symbol('_el_3');
  const _ButtonDirective_3_5 = Symbol('_ButtonDirective_3_5');
  const _text_4 = Symbol('_text_4');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9 = class _ViewMaterialTreeGroupComponent9 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('li');
      this.addShimE(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'view-more-link-item';
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_2].className = 'material-tree-shift';
      this.addShimC(this[_el_2]);
      this[_el_3] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_2]));
      this.createAttr(this[_el_3], 'buttonDecorator', '');
      this[_el_3].className = 'view-more-link';
      this.createAttr(this[_el_3], 'href', '#');
      this.createAttr(this[_el_3], 'role', 'button');
      this.addShimC(this[_el_3]);
      this[_ButtonDirective_3_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_3]));
      this[_text_4] = html.Text.new(this.ctx.viewMoreMsg != null ? this.ctx.viewMoreMsg : '');
      this[_el_3][$append](this[_text_4]);
      this[_el_3][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_3_5].instance, 'handleClick')));
      this[_el_3][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_3_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_3_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'viewMoreOptions')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_ButtonDirective_3_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.getIndent(_ctx.visibleGroup.last);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_el_1].style[$setProperty]('padding-left', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      if (firstCheck) {
        if (!(_ctx.fixedPadding == null)) {
          this[_el_2].style[$setProperty]('padding-left', _ctx.fixedPadding == null ? null : dart.toString(_ctx.fixedPadding));
        }
      }
      this[_ButtonDirective_3_5].detectHostChanges(this, this[_el_3]);
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_ButtonDirective_3_5] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._renderType;
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.AnchorElement),
    [_ButtonDirective_3_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9, AppViewAndintToAppViewOfMaterialTreeGroupComponent());
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template.styles$MaterialTreeGroupComponentHost*/get styles$MaterialTreeGroupComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  let const$2;
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0 = class _ViewMaterialTreeGroupComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTreeGroupComponent_0_5] = new src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0].ref, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), core.int._check(this.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'))), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialTreeGroupComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialTreeGroupComponent()).new(0, this, this.rootEl, this[_MaterialTreeGroupComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent) && 0 === nodeIndex) {
        return this[_MaterialTreeGroupComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialTreeGroupComponent_0_5].ngOnDestroy();
    }
  };
  (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTreeGroupComponent_0_5] = null;
    src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0);
  dart.setMethodSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0),
    [_MaterialTreeGroupComponent_0_5]: dart.fieldType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)
  }));
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template.MaterialTreeGroupComponentNgFactory*/get MaterialTreeGroupComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupComponent()).new('material-tree-group', src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0, src__material_tree__group__material_tree_group$46template._MaterialTreeGroupComponentMetadata));
    },
    /*src__material_tree__group__material_tree_group$46template._MaterialTreeGroupComponentMetadata*/get _MaterialTreeGroupComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__material_tree__group__material_tree_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__group__material_tree_group$46template.initReflector = function() {
    if (dart.test(src__material_tree__group__material_tree_group$46template._visited)) {
      return;
    }
    src__material_tree__group__material_tree_group$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), src__material_tree__group__material_tree_group$46template.MaterialTreeGroupComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    material_checkbox__material_checkbox$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    src__material_tree__material_tree_node$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
  };
  dart.fn(src__material_tree__group__material_tree_group$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tree/group/material_tree_group.template.ddc", {
    "package:angular_components/src/material_tree/group/material_tree_group.template.dart": src__material_tree__group__material_tree_group$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_group.template.dart"],"names":[],"mappings":";;;;QAyvBc,IAAO;;;QA9rB0C,kEAAO;;;;QAalD,iCAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAbR,2FAAiC;YAAG,iBAAO,AAAQ,kEAAD,OAAO;;;;;;;;;;;;AAkBzE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAc,AA0qBR,IAAO,SA1qBS;AAC1B,iBAAK,GAAG,AAyqBE,IAAO,qBAzqBT,2CAAe,CAAC,GAAG,EAAE,MAAM,gBAAgB;AACnD,mBAAQ,CAAC,WAAK;AACd,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,iGAAuC;AAChG,sBAAU,GAAG,IAAI,yCAAa,CAAC,cAAQ,EAAE,gBAAgB;AACzD,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,iGAAuC;AAChG,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAAM,YAAY,IAAI,aAAa;AACnC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,sBAAU,UAAU;AACpB,qBAAS,KAAK,GAAG,IAAI,oBAAoB;AACzC,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;AACR,6BAAQ;;IACV;sBAEuB,UAAe;AACpC,oBAAI,UAAU,GAAE;AACd,cAAK,AAAU,QAAG,oBAAoB,IAAE,OAAO;AAC7C,8BAAe,CAAC,WAAM,EAAE,uBAAuB,QAAG,oBAAoB;;;IAG5E;;4GArDgC,UAA2B,EAAE,WAAe;IAPvD,WAAK;IACZ,cAAQ;IACR,gBAAU;IACV,cAAQ;IACjB,eAAS;IACV,aAAO;AAEqE,uHAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,eAAM,GAAG,AAmrBC,IAAO,oBAnrBR,AAAQ,AAmrBP,IAAO,SAnrBQ,gBAAc,CAAC;AACxC,mBAAU,CAAC,WAAM,EAAE,QAAQ;AAC3B,iHAAW;gBAAX,qGAAW,GAAK,AAAA,AAAS,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,2FAAiC;AACxH,2BAAkB,CAAC,qGAAW;EAChC;;;;;;;;;;;4BA+qBY,IAAO;;;;;;;;MArrBQ,qGAAW;;;;;+GAyD4C,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,6FAA+B,CAAC,UAAU,EAAE,WAAW;EACpE;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgCI,UAAI,MAAc,AA0lBR,IAAO,SA1lBS;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,qBAAU,CAAC,WAAK,EAAE,mBAAmB;AACrC,iBAAK,UAAU,GAAG;AAClB,qBAAU,CAAC,WAAK,EAAE,8BAA8B;AAChD,qBAAU,CAAC,WAAK,EAAE,QAAQ;AAC1B,mBAAQ,CAAC,WAAK;AACd,gCAAoB,GAAG,IAAI,qEAA4B,CAAC,IAAI,sDAAwB,CAAC,WAAK;AAC1F,oDAAwC,GAAG,IAAI,4EAA4C,CAAC,AAklBlF,IAAO,oBAllB2E,WAAK,8DAAE,eAAU,WAAW,YAAY,CAAU,kEAAU,EAAE,eAAU,SAAS,YAAY;AACzL,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACrC,iBAAK,UAAU,GAAG;AAClB,qBAAU,CAAC,WAAK,EAAE,QAAQ;AAC1B,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACrC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,iGAAuC;AAChG,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACrC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,iGAAuC;AAChG,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,iGAAuC;AAChG,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,iGAAuC;AAChG,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,iGAAuC;AAChG,sBAAU,GAAG,IAAI,yCAAa,CAAC,cAAQ,EAAE,gBAAgB;AACzD,iBAAK,mBAAiB,CAAC,SAAS,kBAAa,CA8iBnC,IAAO,QAAP,IAAO,QA9iB6B,kCAAiB;AAC/D,iBAAK,mBAAiB,CAAC,YAAY,kBAAa,CA6iBtC,IAAO,QAAP,IAAO,0BA7iBgC,0BAAoB,SAAS;AAC9E,iBAAK,mBAAiB,CAAC,SAAS,kBAAa,CA4iBnC,IAAO,kBA5iB6B,8CAAwC;AACtF,iBAAK,mBAAiB,CAAC,QAAQ,kBAAa,CA2iBlC,IAAO,kBA3iB4B,8CAAwC;AACrF,iBAAK,mBAAiB,CAAC,aAAa,kBAAa,CA0iBvC,IAAO,kBA1iBiC,8CAAwC;AAC1F,UAAM,iBAAiB,0BAAoB,SAAS,QAAQ,OAAO,CAAC,kBAAa,CAyiBvE,IAAO,UAAP,IAAO,UAziBiE,oCAAmB;AACrG,eAAI,CAAC,CAAC,WAAK,GAAG,CAAC,cAAc;AAC7B,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAW,iEAAe,IAAO,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI,GAAM;AAC1F,cAAO,2BAAoB,SAAS;;AAEtC,UAAK,AAAU,KAAK,KAAW,uFAAmC,IAAO,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI,GAAM;AAC9G,cAAO,+CAAwC;;AAEjD,YAAO,eAAc;IACvB;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAAK,aAAc,YAAY,KAAI;AACnC,UAAc,eAAe,WAAM,QAAC;AACpC,qBAAS,KAAK,GAAG,IAAI,aAAa,CAAC,YAAY;AAC/C,qBAAS,KAAK,GAAG,IAAI,qBAAqB;AAC1C,qBAAS,KAAK,GAAG,WAAC,IAAI,qBAAqB;AAC3C,qBAAS,KAAK,GAAG,IAAI,YAAY,CAAC,YAAY;AAC9C,UAAM,aAAa,IAAI,eAAe,CAAC,YAAY;AACnD,WAAK,eAAU,cAAQ,EAAE,UAAU,GAAG;AACpC,wBAAU,QAAQ,GAAG,UAAU;AAC/B,sBAAQ,GAAG,UAAU;;AAEvB,sBAAU,UAAU;AACpB,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;AACnC,UAAM,YAAY,IAAI,WAAW,CAAC,YAAY;AAC9C,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,wBAAW,CAAC,AAmgBJ,IAAO,oBAngBH,WAAK,GAAE,YAAY,SAAS;AACxC,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,aAAa,CAAC,YAAY;AAChD,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,wBAAW,CAAC,AA8fJ,IAAO,oBA9fH,WAAK,GAAE,cAAc,SAAS;AAC1C,qBAAO,GAAG,SAAS;;AAErB,gCAAoB,kBAAkB,CAAC,MAAM,WAAK;AAClD,UAAM,YAAY,IAAI,UAAU,CAAC,YAAY;AAC7C,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,mBAAK,MAAM,cAAY,CAAC,gBAAgB,SAAS,gCAAT,SAAS;AACjD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YA5LU,AA4LE,AAAS,iCA5LH,aA4Le,CAAC,IAAI,WAAW,CAAC,YAAY;AACpE,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,oBAAO,CAAC,WAAK,EAAE,iBAAiB,SAAS,gCAAT,SAAS;AACzC,qBAAO,GAAG,SAAS;;AAErB,UAAI,UAAU,EAAE;AACd,cAAK,AAAU,IAAI,aAAa,IAAE,OAAO;AACvC,qBAAK,MAAM,cAAY,CAAC,gBAAgB,IAAI,aAAa,gCAAjB,IAAI,aAAa;;;AAG7D,UAAM,YAAY,IAAI,YAAY,CAAC,YAAY;AAC/C,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,wBAAW,CAAC,WAAK,EAAE,aAAa,SAAS;AACzC,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,WAAW,CAAC,YAAY;AAC9C,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,wBAAW,CAAC,WAAK,EAAE,eAAe,SAAS;AAC3C,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAa,IAAI,MAAM,KAAI;AACjC,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,wBAAW,CAAC,WAAK,EAAE,eAAe,SAAS;AAC3C,qBAAO,GAAG,SAAS;;IAEvB;;AAIE,4BAAQ;;AACR,6BAAQ;;AACR,8BAAQ;;AACR,8BAAQ;;AACR,8BAAQ;;IACV;0BAEyB,MAAM;AAC7B,UAAc,eAAe,WAAM,QAAC;AACpC,cAAG,2BAA2B,CAAC,AA+crB,IAAO,cA/cc,MAAM,GAAE,YAAY;IACrD;wBAEuB,MAAM;AAC3B,gCAAoB,SAAS,YAAY,CAAC,AA2chC,IAAO,mBA3cyB,MAAM;AAChD,oDAAwC,YAAY;IACtD;;6GAtJiC,UAA2B,EAAE,WAAe;IAxB7D,WAAK;IACQ,0BAAoB;IACJ,8CAAwC;IAClE,WAAK;IACL,WAAK;IACV,cAAQ;IACjB,eAAS;IACK,WAAK;IACV,cAAQ;IACjB,eAAS;IACA,cAAQ;IACjB,eAAS;IACA,cAAQ;IACjB,eAAS;IACA,cAAQ;IACR,gBAAU;IACnB,aAAO;IACP,aAAO;IACR,aAAO;IACP,aAAO;IACN,aAAO;IACP,aAAO;IACP,aAAO;IACR,cAAQ;AACqE,wHAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAClM,sBAAa,GAAG,yFAA+B,YAAY;EAC7D;;;;;;;;;;;;;4BA6lBY,IAAO;;;4BAAP,IAAO;4BAAP,IAAO;;;4BAAP,IAAO;;;;;;;;;;;;;;;;;;+GAtc+D,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,8FAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;;AAaI,UAAI,MAAc,AAubR,IAAO,SAvbS;AAC1B,iBAAK,GAAG,AAsbE,IAAO,mBAtbT,GAAG,gBAAc,CAAC;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,iGAAuC;AAChG,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,iGAAuC;AAChG,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAAc,eAAe,eAAU,OAAO,QAAC;AAC/C,qBAAS,KAAK,GAAG,IAAI,cAAc;AACnC,qBAAS,KAAK,GAAwB,WAAnB,IAAI,cAAc,eAAI,IAAI,WAAW,CAAC,YAAY;AACrE,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;AACR,6BAAQ;;IACV;;6GArCiC,UAA2B,EAAE,WAAe;IAL1D,WAAK;IACV,cAAQ;IACjB,eAAS;IACA,cAAQ;IACjB,eAAS;AACmE,wHAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,sBAAa,GAAG,yFAA+B,YAAY;EAC7D;;;;;;;;;;4BA0bY,IAAO;;;;;;+GApZ+D,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,8FAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;;;;AAaI,uBAAW,GAAG,IAAI,kFAAuC,CAAC,MAAM;AAChE,iBAAK,GAAG,iBAAW,OAAO;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,AAkYC,IAAO,oBAlYR,WAAK;AACd,0CAA8B,GAAG,IAAI,kEAAkC,CAAC,AAiY9D,IAAO,oBAjYuD,WAAK,GAAE,iBAAW,IAAI,EAAE,MAAM,MAAM;AAC5G,uBAAW,OAAO,CAAC,oCAA8B,EAAE,CAAC;AACpD,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,UAAc,eAAe,eAAU,WAAW,OAAO,QAAC;AAC1D,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,4CAA8B,SAAS,GAAG;AAC1C,eAAO,GAAG;;AAEZ,UAAM,YAA6B,UAAhB,IAAI,WAAW,eAAI,IAAI,qBAAqB,CAAC,YAAY;AAC5E,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,4CAA8B,SAAS,GAAG,SAAS;AACnD,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,WAAW,CAAC,YAAY;AAC9C,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,4CAA8B,QAAQ,GAAG,SAAS;AAClD,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;6GAhDiC,UAA2B,EAAE,WAAe;IAL7D,WAAK;IACmB,iBAAW;IAChB,oCAA8B;IAC5D,aAAO;IACP,aAAO;AACqE,wHAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,sBAAa,GAAG,yFAA+B,YAAY;EAC7D;;;;;;;;;;4BAwYY,IAAO;;;;;;+GAvV+D,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,8FAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;;AAWI,uBAAW,GAAG,IAAI,sEAAmC,CAAC,MAAM;AAC5D,iBAAK,GAAG,iBAAW,OAAO;AAC1B,iBAAK,UAAU,GAAG;AAClB,qBAAU,CAAC,WAAK,EAAE,QAAQ;AAC1B,mBAAQ,CAAC,AAsUC,IAAO,oBAtUR,WAAK;AACd,sCAA0B,GAAG,IAAI,sDAA8B,CAAC,AAqUtD,IAAO,oBArU+C,WAAK;AACrE,uBAAW,OAAO,CAAC,gCAA0B,EAAE;AAC/C,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,wCAA0B,KAAK,GAAG;AAClC,eAAO,GAAG;;AAEZ,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;6GAlCiC,UAA2B,EAAE,WAAe;IAH7D,WAAK;IACe,iBAAW;IAChB,gCAA0B;AACwB,wHAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,sBAAa,GAAG,yFAA+B,YAAY;EAC7D;;;;;;;;;;4BA6UY,IAAO;;;;+GA1S+D,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,8FAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;;;AAeI,uBAAW,GAAG,IAAI,yEAA8B,CAAC,MAAM;AACvD,iBAAK,GAAG,iBAAW,OAAO;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,AAsRC,IAAO,oBAtRR,WAAK;AACd,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,MAAM,MAAM,WAAK;AACjD,iCAAqB,GAAG,IAAI,yDAAyB,wEAAC,eAAU,WAAW,WAAW,YAAY,CAAU,8EAAmB,EAAE,eAAU,WAAW,SAAS,YAAY,IAAG,iBAAW,IAAI,EAAE,cAAQ;AACvM,uBAAW,OAAO,CAAC,2BAAqB,EAAE;AAC1C,gBAAK,CAAC,cAAQ;AACd,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAW,oEAAgB,IAAM,MAAK,SAAS,EAAI;AACrE,cAAO,4BAAqB;;AAE9B,YAAO,eAAc;IACvB;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAAK,UAAU;AACf,UAAc,eAAe,eAAU,OAAO,QAAC;AAC/C,aAAO,GAAG;AACV,UAAM,YAAY,IAAI,iBAAiB,CAAC,YAAY;AACpD,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,mCAAqB,cAAc,GAAG,SAAS;AAC/C,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,oBAAoB,CAAC,YAAY;AACvD,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,mCAAqB,iBAAiB,GAAG,SAAS;AAClD,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,YAAY;AAC9B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,mCAAqB,MAAM,GAAG,SAAS;AACvC,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,mCAAqB,eAAe;;AAEtC,oBAAQ,2BAA2B;AACnC,uBAAW,cAAc;IAC3B;;AAIE,4BAAQ;;AACR,gCAAW;;AACX,iCAAqB,YAAY;IACnC;;6GA5DiC,UAA2B,EAAE,WAAe;IAP7D,WAAK;IACU,iBAAW;IAC5B,cAAQ;IACI,2BAAqB;IAC3C,aAAO;IACP,aAAO;IACP,aAAO;AACsE,wHAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,sBAAa,GAAG,yFAA+B,YAAY;EAC7D;;;;;;;;;;;4BA4RY,IAAO;;;;;;;;+GA/N+D,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,8FAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;;AAaI,UAAI,MAAc,AAgNR,IAAO,SAhNS;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,mBAAO,GAAG,AAAI,AA4MJ,IAAO,SA5MS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAAc,eAAe,eAAU,OAAO,QAAC;AAC/C,UAAW,YAAY,WAAC,IAAI,qBAAqB,CAAC,YAAY;AAC9D,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,wBAAW,CAAC,AAgMJ,IAAO,oBAhMH,WAAK,GAAE,QAAQ,SAAS;AACpC,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,qBAAqB,CAAC,YAAY;AACxD,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,wBAAW,CAAC,AA2LJ,IAAO,oBA3LH,WAAK,GAAE,iBAAiB,SAAS;AAC7C,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAzfU,AAyfE,AAAS,iCAzfH,aAyfe,CAAC,IAAI,gBAAgB,CAAC,YAAY;AACzE,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;6GAlCiC,UAA2B,EAAE,WAAe;IAL7D,WAAK;IACR,aAAO;IACf,aAAO;IACP,aAAO;IACR,aAAO;AACsE,wHAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,sBAAa,GAAG,yFAA+B,YAAY;EAC7D;;;;;;;;;4BAmNY,IAAO;8BAAP,IAAO;;;;;+GAhL+D,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,8FAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;;AAcI,uBAAW,GAAG,IAAI,sEAAmC,CAAC,MAAM;AAC5D,iBAAK,GAAG,iBAAW,OAAO;AAC1B,qBAAU,CAAC,WAAK,EAAE,mBAAmB;AACrC,iBAAK,UAAU,GAAG;AAClB,qBAAU,CAAC,WAAK,EAAE,QAAQ;AAC1B,mBAAQ,CAAC,AA2JC,IAAO,oBA3JR,WAAK;AACd,gCAAoB,GAAG,IAAI,qEAA4B,CAAC,IAAI,sDAAwB,CAAC,WAAK;AAC1F,sCAA0B,GAAG,IAAI,sDAA8B,CAAC,AAyJtD,IAAO,oBAzJ+C,WAAK;AACrE,uBAAW,OAAO,CAAC,gCAA0B,EAAE;AAC/C,iBAAK,mBAAiB,CAAC,SAAS,kBAAa,CAuJnC,IAAO,QAAP,IAAO,uBAvJ6B,0BAAoB,SAAS;AAC3E,iBAAK,mBAAiB,CAAC,YAAY,kBAAa,CAsJtC,IAAO,QAAP,IAAO,0BAtJgC,0BAAoB,SAAS;AAC9E,UAAM,iBAAiB,0BAAoB,SAAS,QAAQ,OAAO,CAAC,kBAAa,CAqJvE,IAAO,UAAP,IAAO,UArJiE,oCAAmB;AACrG,eAAI,CAAC,CAAC,WAAK,GAAG,CAAC,cAAc;AAC7B,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAW,iEAAe,IAAM,MAAK,SAAS,EAAI;AACpE,cAAO,2BAAoB,SAAS;;AAEtC,YAAO,eAAc;IACvB;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAAK,UAAU;AACf,UAAc,eAAe,eAAU,OAAO,QAAC;AAC/C,aAAO,GAAG;AACV,UAAM,sBAAa,IAAI,WAAW,CAAC,YAAY,KAAI,gBAAgB;AACnE,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,wCAA0B,KAAK,GAAG,SAAS;AAC3C,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,UAAM,YAAY,IAAI,WAAW,CAAC,YAAY;AAC9C,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,WAAK,EAAE,YAAY,SAAS;AAC5C,qBAAO,GAAG,SAAS;;AAErB,gCAAoB,kBAAkB,CAAC,iBAAW,EAAE,WAAK;AACzD,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;0BAEyB,MAAM;AAC7B,UAAc,eAAe,eAAU,OAAO,QAAC;AAC/C,cAAG,gBAAgB,CAAC,AAyGV,IAAO,cAzGG,MAAM,GAAE,YAAY;IAC1C;;6GA7DiC,UAA2B,EAAE,WAAe;IAN7D,WAAK;IACe,iBAAW;IAClB,0BAAoB;IAClB,gCAA0B;IACpD,aAAO;IACR,aAAO;AACsE,wHAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,sBAAa,GAAG,yFAA+B,YAAY;EAC7D;;;;;;;;;;;;4BAmKY,IAAO;;;;;;;+GArG+D,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,8FAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;;;;;AAiBI,uBAAW,GAAG,IAAI,6FAA+B,CAAC,MAAM;AACxD,iBAAK,GAAG,iBAAW,OAAO;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,AA+EC,IAAO,oBA/ER,WAAK;AACd,2CAA+B,GAAG,IAAI,6EAAkC,gEAAC,eAAU,WAAW,WAAW,YAAY,CAAU,sEAAgB,EAAE,eAAU,WAAW,SAAS,YAAY,IAAG,iBAAW,IAAI,uDAAE,eAAU,WAAW,WAAW,YAAY,CAAU,4DAAc,EAAE,eAAU,WAAW,SAAS,YAAY,EAAE,wBAAO,eAAU,WAAW,WAAW,YAAY,CAAC,qCAAM,2CAAoB,CAAC,8DAA4D,eAAU,WAAW,SAAS,YAAY,EAAE;AACxf,uBAAW,OAAO,CAAC,qCAA+B,EAAE;AACpD,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAU,wFAA0B,IAAM,MAAK,SAAS,EAAI;AAC9E,cAAO,sCAA+B;;AAExC,YAAO,eAAc;IACvB;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAAK,aAAc,YAAY,KAAI;AACnC,UAAoC,wEAAiB,WAAM,QAAC;AAC5D,UAAc,eAAe,eAAU,OAAO,QAAC;AAC/C,UAAM,YAAY,cAAc;AAChC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,6CAA+B,MAAM,GAAG,SAAS;AACjD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAwB,aAAX,IAAI,MAAM,IAAG;AAChC,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,6CAA+B,MAAM,GAAG,SAAS;AACjD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,aAAa,CAAC,YAAY;AAChD,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,6CAA+B,kBAAkB,GAAG,SAAS;AAC7D,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,2BAA2B;AACjD,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,6CAA+B,2BAA2B,GAAG,SAAS;AACtE,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,uBAAuB;AAC7C,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,6CAA+B,uBAAuB,GAAG,SAAS;AAClE,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU;AAChC,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,6CAA+B,UAAU,GAAG,SAAS;AACrD,qBAAO,GAAG,SAAS;;AAErB,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;AACX,2CAA+B,YAAY;IAC7C;;6GAnEiC,UAA2B,EAAE,WAAe;IAT7D,WAAK;IACW,iBAAW;IACR,qCAA+B;IAC9D,aAAO;IACP,aAAO;IACN,aAAO;IACP,aAAO;IACR,aAAO;IACN,aAAO;AACqE,wHAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAClM,sBAAa,GAAG,yFAA+B,YAAY;EAC7D;;;;;;;;;;;4BAqFY,IAAO;;;;;;;;;;+GAjB+D,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,8FAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;;;;AAeI,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACrC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACrC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,iBAAK,GATK,AASF,IATS,sBAST,2CAAe,CAAC,GAAG,EAAE,KAAK,WAAK;AACvC,qBAAU,CAAC,WAAK,EAAE,mBAAmB;AACrC,iBAAK,UAAU,GAAG;AAClB,qBAAU,CAAC,WAAK,EAAE,QAAQ;AAC1B,qBAAU,CAAC,WAAK,EAAE,QAAQ;AAC1B,mBAAQ,CAAC,WAAK;AACd,gCAAoB,GAAG,IAAI,qEAA4B,CAAC,IAAI,sDAAwB,CAAC,WAAK;AAC1F,mBAAO,GAhBG,AAgBA,AAAI,IAhBG,SAgBS,CAAE,QAAG,YAAY,WAAf,QAAG,YAAY,GAAI;AAC/C,iBAAK,SAAO,CAAC,aAAO;AACpB,iBAAK,mBAAiB,CAAC,SAAS,kBAAa,CAlBnC,IAAO,QAAP,IAAO,uBAkB6B,0BAAoB,SAAS;AAC3E,iBAAK,mBAAiB,CAAC,YAAY,kBAAa,CAnBtC,IAAO,QAAP,IAAO,0BAmBgC,0BAAoB,SAAS;AAC9E,UAAM,iBAAiB,0BAAoB,SAAS,QAAQ,OAAO,CAAC,kBAAa,CApBvE,IAAO,UAAP,IAAO,oBAoBiE,QAAG;AACrF,eAAI,CAAC,CAAC,WAAK,GAAG,CAAC,cAAc;AAC7B,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAW,iEAAe,IAAO,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI,GAAM;AAC1F,cAAO,2BAAoB,SAAS;;AAEtC,YAAO,eAAc;IACvB;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAAK,aAAc,YAAY,KAAI;AACnC,UAAM,YAAY,IAAI,UAAU,CAAC,IAAI,aAAa,KAAK;AACvD,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,mBAAK,MAAM,cAAY,CAAC,gBAAgB,SAAS,gCAAT,SAAS;AACjD,qBAAO,GAAG,SAAS;;AAErB,UAAI,UAAU,EAAE;AACd,cAAK,AAAU,IAAI,aAAa,IAAE,OAAO;AACvC,qBAAK,MAAM,cAAY,CAAC,gBAAgB,IAAI,aAAa,gCAAjB,IAAI,aAAa;;;AAG7D,gCAAoB,kBAAkB,CAAC,MAAM,WAAK;IACpD;;6GArDiC,UAA2B,EAAE,WAAe;IAP7D,WAAK;IACF,WAAK;IACL,WAAK;IACF,WAAK;IACE,0BAAoB;IACpC,aAAO;IAChB,aAAO;AACsE,wHAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,sBAAa,GAAG,yFAA+B,YAAY;EAC7D;;;;;;;;;;4BAGY,IAAO;4BAAP,IAAO;4BAAP,IAAO;4BAAP,IAAO;;8BAAP,IAAO;;;+GAmD+D,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,8FAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;MAEoB,+FAAqC;YAAG;;;;;;AAQxD,uBAAW,GAAG,IAAI,6FAA+B,CAAC,MAAM;AACxD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,2CAA+B,GAAG,IAAI,6EAAkC,gEAAC,gBAAgB,CAAU,sEAAgB,EAAE,aAAQ,YAAY,IAAG,iBAAW,IAAI,uDAAE,gBAAgB,CAAU,4DAAc,EAAE,aAAQ,YAAY,EAAE,wBAAO,gBAAgB,CAAC,qCAAM,2CAAoB,CAAC,8DAA4D,aAAQ,YAAY,EAAE;AAClW,uBAAW,OAAO,CAAC,qCAA+B,EAAE,qBAAgB;AACpE,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,gDAAgD,CAAC,GAAG,MAAM,WAAM,EAAE,qCAA+B;IAC9G;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAU,wFAA0B,IAAM,MAAK,SAAS,EAAI;AAC9E,cAAO,sCAA+B;;AAExC,YAAO,eAAc;IACvB;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;AACX,2CAA+B,YAAY;IAC7C;;iHA9BqC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,qCAA+B;AACmB,4HAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;mHAiCjI,UAA2B,EAAE,WAAe;AAC9F,UAAO,KAAI,kGAAoC,CAAC,UAAU,EAAE,WAAW;EACzE;;;MAE2D,6FAAmC;YAAG,gBAAM,oDAAoD,CAAC,uBAAuB,qGAA2C,EAAE,6FAAmC;;MAC7P,6FAAmC;YAAG;;MACxC,kEAAQ;YAAG;;;;;AAEb,kBAAI,kEAAQ,GAAE;AACZ;;AAEF,yEAAW;AAEX,IAAO,oCAAiB,CAAC,wFAA0B,EAAE,6FAAmC;AACxF,IAAM,gCAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,qDAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,+DAAa;EACrB","file":"material_tree_group.template.ddc.js"}');
  // Exports:
  return {
    src__material_tree__group__material_tree_group$46template: src__material_tree__group__material_tree_group$46template
  };
});

//# sourceMappingURL=material_tree_group.template.ddc.js.map
