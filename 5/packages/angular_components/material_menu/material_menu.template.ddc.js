define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_button/material_button.template', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/material_tooltip/tooltip', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/src/laminate/popup/popup_source_directive', 'packages/angular/src/common/directives/ng_if', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/material_menu/menu_popup_wrapper.template', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_menu/menu_item_groups.scss.css.shim', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_activable_item', 'packages/angular_components/model/menu/menu', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/popup/popup_ref', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_select/material_select_item', 'packages/angular/src/common/directives/ng_class', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/highlighted_text/highlighted_text.template', 'packages/angular_components/highlighted_text/highlighted_text', 'packages/angular_components/material_menu/menu_item_affix_list.template', 'packages/angular_components/material_menu/menu_root', 'packages/angular_components/material_menu/menu_item_affix_list', 'packages/angular_components/model/menu/menu_item_affix', 'packages/observable/src/observable_list', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus_activable_item.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/material_menu/menu_root.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/model/menu/selectable_menu.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/highlighted_text_model.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_menu/menu_popup.scss.css.shim', 'packages/angular_components/laminate/popup/popup.template'], function(dart_sdk, view_type, constants, view, app_view_utils, module, tooltip_controller, disposer, material_button, app_view, opaque_token, dark_theme, material_button$, dom_popup_source, tooltip, reference, popup_source_directive, ng_if, button_decorator, material_menu, material_icon, material_icon$, reflector, angular, focus, menu_popup_wrapper, material_popup, material_tooltip, focusable_mixin, menu, disposer$, menu_item_groups$46scss$46css, focus_trap, focus_trap$, ng_for, focus$, focus_activable_item, menu$, button_decorator$, material_select_item, dom_service, modal, popup_ref, material_dropdown_base, activation_handler, material_select_item$, ng_class, selection_container, has_renderer, highlighted_text, highlighted_text$, menu_item_affix_list, menu_root, menu_item_affix_list$, menu_item_affix, observable_list, material_popup$, popup_hierarchy, ng_zone, overlay_service, zindexer, alignment, popup_size_provider, element_ref, deferred_content, deferred_content_aware, material_list, material_list$, id_generator, deferred_content$, focus_activable_item$, alignment$, menu_root$, material_dropdown_base$, active_item, delayed_action, selectable_menu, select, selection_model, highlighted_text_model, properties, id_generator$, menu_popup$46scss$46css, popup) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_tooltip__module = module.material_tooltip__module;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const src__material_tooltip__tooltip = tooltip.src__material_tooltip__tooltip;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const src__laminate__popup__popup_source_directive = popup_source_directive.src__laminate__popup__popup_source_directive;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const material_menu__menu_popup = material_menu.material_menu__menu_popup;
  const material_menu__material_menu = material_menu.material_menu__material_menu;
  const material_menu__menu_item_groups = material_menu.material_menu__menu_item_groups;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const material_menu__menu_popup_wrapper$46template = menu_popup_wrapper.material_menu__menu_popup_wrapper$46template;
  const material_popup__material_popup$46template = material_popup.material_popup__material_popup$46template;
  const material_tooltip__material_tooltip$46template = material_tooltip.material_tooltip__material_tooltip$46template;
  const mixins__focusable_mixin$46template = focusable_mixin.mixins__focusable_mixin$46template;
  const model__menu__menu$46template = menu.model__menu__menu$46template;
  const utils__disposer__disposer$46template = disposer$.utils__disposer__disposer$46template;
  const material_menu__menu_item_groups$46scss$46css$46shim = menu_item_groups$46scss$46css.material_menu__menu_item_groups$46scss$46css$46shim;
  const focus__focus_trap$46template = focus_trap.focus__focus_trap$46template;
  const focus__focus_trap = focus_trap$.focus__focus_trap;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const focus__focus = focus$.focus__focus;
  const focus__focus_activable_item = focus_activable_item.focus__focus_activable_item;
  const model__menu__menu = menu$.model__menu__menu;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const src__laminate__popup__popup_ref = popup_ref.src__laminate__popup__popup_ref;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const src__common__directives__ng_class = ng_class.src__common__directives__ng_class;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const highlighted_text__highlighted_text$46template = highlighted_text.highlighted_text__highlighted_text$46template;
  const highlighted_text__highlighted_text = highlighted_text$.highlighted_text__highlighted_text;
  const material_menu__menu_item_affix_list$46template = menu_item_affix_list.material_menu__menu_item_affix_list$46template;
  const material_menu__menu_root = menu_root.material_menu__menu_root;
  const material_menu__menu_item_affix_list = menu_item_affix_list$.material_menu__menu_item_affix_list;
  const model__menu__menu_item_affix = menu_item_affix.model__menu__menu_item_affix;
  const src__observable_list = observable_list.src__observable_list;
  const material_popup__material_popup = material_popup$.material_popup__material_popup;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_service.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__laminate__popup__popup_size_provider = popup_size_provider.src__laminate__popup__popup_size_provider;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const content__deferred_content = deferred_content.content__deferred_content;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list = material_list$.material_list__material_list;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const focus__focus_activable_item$46template = focus_activable_item$.focus__focus_activable_item$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const material_menu__menu_root$46template = menu_root$.material_menu__menu_root$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const model__a11y__active_item$46template = active_item.model__a11y__active_item$46template;
  const model__action__delayed_action$46template = delayed_action.model__action__delayed_action$46template;
  const model__menu__selectable_menu$46template = selectable_menu.model__menu__selectable_menu$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__ui__highlighted_text_model$46template = highlighted_text_model.model__ui__highlighted_text_model$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const utils__id_generator__id_generator$46template = id_generator$.utils__id_generator__id_generator$46template;
  const material_menu__menu_popup$46scss$46css$46shim = menu_popup$46scss$46css.material_menu__menu_popup$46scss$46css$46shim;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const _root = Object.create(null);
  const material_menu__material_menu$46template = Object.create(_root);
  const material_menu__menu_item_groups$46template = Object.create(_root);
  const material_menu__menu_popup$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $toString = dartx.toString;
  const $text = dartx.text;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfMenuPopupComponent = () => (JSArrayOfMenuPopupComponent = dart.constFn(_interceptors.JSArray$(material_menu__menu_popup.MenuPopupComponent)))();
  let ListOfMenuPopupComponent = () => (ListOfMenuPopupComponent = dart.constFn(core.List$(material_menu__menu_popup.MenuPopupComponent)))();
  let _ViewMaterialMenuComponent3ToListOfMenuPopupComponent = () => (_ViewMaterialMenuComponent3ToListOfMenuPopupComponent = dart.constFn(dart.fnType(ListOfMenuPopupComponent(), [material_menu__material_menu$46template._ViewMaterialMenuComponent3])))();
  let AppViewOfMaterialMenuComponent = () => (AppViewOfMaterialMenuComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__material_menu.MaterialMenuComponent)))();
  let AppViewAndintToAppViewOfMaterialMenuComponent = () => (AppViewAndintToAppViewOfMaterialMenuComponent = dart.constFn(dart.fnType(AppViewOfMaterialMenuComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialMenuComponent = () => (ComponentRefOfMaterialMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__material_menu.MaterialMenuComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialMenuComponent = () => (ComponentFactoryOfMaterialMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__material_menu.MaterialMenuComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let JSArrayOfAutoFocusDirective = () => (JSArrayOfAutoFocusDirective = dart.constFn(_interceptors.JSArray$(focus__focus.AutoFocusDirective)))();
  let ListOfAutoFocusDirective = () => (ListOfAutoFocusDirective = dart.constFn(core.List$(focus__focus.AutoFocusDirective)))();
  let _ViewMenuItemGroupsComponent13ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent13ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13])))();
  let _ViewMenuItemGroupsComponent12ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent12ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12])))();
  let JSArrayOfListOfAutoFocusDirective = () => (JSArrayOfListOfAutoFocusDirective = dart.constFn(_interceptors.JSArray$(ListOfAutoFocusDirective())))();
  let _ViewMenuItemGroupsComponent6ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent6ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6])))();
  let _ViewMenuItemGroupsComponent5ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent5ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5])))();
  let _ViewMenuItemGroupsComponent4ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent4ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4])))();
  let _ViewMenuItemGroupsComponent1ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent1ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1])))();
  let JSArrayOfFocusableActivateItem = () => (JSArrayOfFocusableActivateItem = dart.constFn(_interceptors.JSArray$(focus__focus_activable_item.FocusableActivateItem)))();
  let ListOfFocusableActivateItem = () => (ListOfFocusableActivateItem = dart.constFn(core.List$(focus__focus_activable_item.FocusableActivateItem)))();
  let _ViewMenuItemGroupsComponent6ToListOfFocusableActivateItem = () => (_ViewMenuItemGroupsComponent6ToListOfFocusableActivateItem = dart.constFn(dart.fnType(ListOfFocusableActivateItem(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6])))();
  let _ViewMenuItemGroupsComponent5ToListOfFocusableActivateItem = () => (_ViewMenuItemGroupsComponent5ToListOfFocusableActivateItem = dart.constFn(dart.fnType(ListOfFocusableActivateItem(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5])))();
  let _ViewMenuItemGroupsComponent4ToListOfFocusableActivateItem = () => (_ViewMenuItemGroupsComponent4ToListOfFocusableActivateItem = dart.constFn(dart.fnType(ListOfFocusableActivateItem(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4])))();
  let _ViewMenuItemGroupsComponent1ToListOfFocusableActivateItem = () => (_ViewMenuItemGroupsComponent1ToListOfFocusableActivateItem = dart.constFn(dart.fnType(ListOfFocusableActivateItem(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1])))();
  let AppViewOfMenuItemGroupsComponent = () => (AppViewOfMenuItemGroupsComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent)))();
  let AppViewAndintToAppViewOfMenuItemGroupsComponent = () => (AppViewAndintToAppViewOfMenuItemGroupsComponent = dart.constFn(dart.fnType(AppViewOfMenuItemGroupsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ObservableListOfMenuItemAffix = () => (ObservableListOfMenuItemAffix = dart.constFn(src__observable_list.ObservableList$(model__menu__menu_item_affix.MenuItemAffix)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let ComponentRefOfMenuItemGroupsComponent = () => (ComponentRefOfMenuItemGroupsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent)))();
  let ComponentFactoryOfMenuItemGroupsComponent = () => (ComponentFactoryOfMenuItemGroupsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__menu_item_groups.MenuItemGroupsComponent)))();
  let JSArrayOfMenuItemGroupsComponent = () => (JSArrayOfMenuItemGroupsComponent = dart.constFn(_interceptors.JSArray$(material_menu__menu_item_groups.MenuItemGroupsComponent)))();
  let ListOfMenuItemGroupsComponent = () => (ListOfMenuItemGroupsComponent = dart.constFn(core.List$(material_menu__menu_item_groups.MenuItemGroupsComponent)))();
  let _ViewMenuPopupComponent1ToListOfMenuItemGroupsComponent = () => (_ViewMenuPopupComponent1ToListOfMenuItemGroupsComponent = dart.constFn(dart.fnType(ListOfMenuItemGroupsComponent(), [material_menu__menu_popup$46template._ViewMenuPopupComponent1])))();
  let AppViewOfMenuPopupComponent = () => (AppViewOfMenuPopupComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__menu_popup.MenuPopupComponent)))();
  let AppViewAndintToAppViewOfMenuPopupComponent = () => (AppViewAndintToAppViewOfMenuPopupComponent = dart.constFn(dart.fnType(AppViewOfMenuPopupComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMenuPopupComponent = () => (ComponentRefOfMenuPopupComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__menu_popup.MenuPopupComponent)))();
  let ComponentFactoryOfMenuPopupComponent = () => (ComponentFactoryOfMenuPopupComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__menu_popup.MenuPopupComponent)))();
  dart.defineLazy(material_menu__material_menu$46template, {
    /*material_menu__material_menu$46template.styles$MaterialMenuComponent*/get styles$MaterialMenuComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _query_MaterialButtonComponent_1_0_isDirty = Symbol('_query_MaterialButtonComponent_1_0_isDirty');
  const _query_MenuPopupComponent_1_1_isDirty = Symbol('_query_MenuPopupComponent_1_1_isDirty');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _appEl_1 = Symbol('_appEl_1');
  const _AcxDarkTheme_1_8 = Symbol('_AcxDarkTheme_1_8');
  const _MaterialButtonComponent_1_9 = Symbol('_MaterialButtonComponent_1_9');
  const _MaterialTooltipDirective_1_10 = Symbol('_MaterialTooltipDirective_1_10');
  const _PopupSourceDirective_1_11 = Symbol('_PopupSourceDirective_1_11');
  const __TooltipController_1_13 = Symbol('__TooltipController_1_13');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _appEl_9 = Symbol('_appEl_9');
  const _NgIf_9_9 = Symbol('_NgIf_9_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _TooltipController_1_13 = Symbol('_TooltipController_1_13');
  let const$;
  let const$0;
  const _MenuPopupComponent_0_5 = Symbol('_MenuPopupComponent_0_5');
  material_menu__material_menu$46template.ViewMaterialMenuComponent0 = class ViewMaterialMenuComponent0 extends src__core__linker__app_view.AppView$(material_menu__material_menu.MaterialMenuComponent) {
    get [_TooltipController_1_13]() {
      if (this[__TooltipController_1_13] == null) {
        this[__TooltipController_1_13] = material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)));
      }
      return this[__TooltipController_1_13];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('\n');
      parentRenderNode[$append](_text_0);
      this[_compView_1] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this[_el_1].className = 'trigger-button';
      this.createAttr(this[_el_1], 'popupSource', '');
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_AcxDarkTheme_1_8] = new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new('acxDarkTheme'))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_1_9] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_1]), this[_AcxDarkTheme_1_8], this[_compView_1].ref);
      this[_MaterialTooltipDirective_1_10] = new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_appEl_1], html.HtmlElement._check(this[_el_1]), this[_appEl_1], this[_compView_1].ref, html.Window._check(this.parentView.injectorGet(dart.wrapType(html.Window), this.viewData.parentIndex)));
      this[_PopupSourceDirective_1_11] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_1]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)));
      let _text_2 = html.Text.new('\n  ');
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], material_menu__material_menu$46template.viewFactory_MaterialMenuComponent1);
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = html.Text.new('\n  ');
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 1, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], material_menu__material_menu$46template.viewFactory_MaterialMenuComponent2);
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _text_6 = html.Text.new('\n  ');
      let _text_7 = html.Text.new('\n');
      this[_compView_1].create(this[_MaterialButtonComponent_1_9], [(() => {
          let _ = [_text_2, this[_appEl_3], _text_4, this[_appEl_5], _text_6];
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](0)));
          _[$addAll]([_text_7]);
          return _;
        })()]);
      let _text_8 = html.Text.new('\n');
      parentRenderNode[$append](_text_8);
      let _anchor_9 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_9);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, null, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], material_menu__material_menu$46template.viewFactory_MaterialMenuComponent3);
      this[_NgIf_9_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _text_10 = html.Text.new('\n');
      parentRenderNode[$append](_text_10);
      let subscription_0 = this[_MaterialButtonComponent_1_9].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'handleButtonClick')));
      this.ctx.button = this[_MaterialButtonComponent_1_9];
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_AcxDarkTheme_1_8];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_MaterialButtonComponent_1_9];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_PopupSourceDirective_1_11];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_TooltipController_1_13];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_2 = _ctx.disabled;
      if (!(this[_expr_2] == currVal_2)) {
        this[_MaterialButtonComponent_1_9].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_3 = _ctx.tooltipText;
      if (!(this[_expr_3] == currVal_3)) {
        this[_MaterialTooltipDirective_1_10].text = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.hasTooltip;
      if (!(this[_expr_4] == currVal_4)) {
        this[_MaterialTooltipDirective_1_10].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (firstCheck) {
        this[_MaterialTooltipDirective_1_10].ngOnInit();
      }
      this[_NgIf_3_9].ngIf = _ctx.menu.uiIcon != null;
      this[_NgIf_5_9].ngIf = _ctx.buttonText != null;
      this[_NgIf_9_9].ngIf = _ctx.hasSubmenu;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      if (dart.test(this[_query_MenuPopupComponent_1_1_isDirty])) {
        this.ctx.menuPopup = dart.test(this[_appEl_9].mapNestedViews(material_menu__menu_popup.MenuPopupComponent, material_menu__material_menu$46template._ViewMaterialMenuComponent3, dart.fn(nestedView => JSArrayOfMenuPopupComponent().of([nestedView[_MenuPopupComponent_0_5]]), _ViewMaterialMenuComponent3ToListOfMenuPopupComponent()))[$isNotEmpty]) ? this[_appEl_9].mapNestedViews(material_menu__menu_popup.MenuPopupComponent, material_menu__material_menu$46template._ViewMaterialMenuComponent3, dart.fn(nestedView => JSArrayOfMenuPopupComponent().of([nestedView[_MenuPopupComponent_0_5]]), _ViewMaterialMenuComponent3ToListOfMenuPopupComponent()))[$first] : null;
        this[_query_MenuPopupComponent_1_1_isDirty] = false;
      }
      let currVal_0 = _ctx.ariaLabel;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this[_el_1], 'aria-label', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.hasIcon;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(this[_el_1], 'icon', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      if (firstCheck) {
        this[_MaterialTooltipDirective_1_10].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_PopupSourceDirective_1_11].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_5];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_9];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_compView_1];
      t$2 == null ? null : t$2.destroy();
      this[_MaterialTooltipDirective_1_10].ngOnDestroy();
      this[_PopupSourceDirective_1_11].ngOnDestroy();
    }
  };
  (material_menu__material_menu$46template.ViewMaterialMenuComponent0.new = function(parentView, parentIndex) {
    this[_query_MaterialButtonComponent_1_0_isDirty] = true;
    this[_query_MenuPopupComponent_1_1_isDirty] = true;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_appEl_1] = null;
    this[_AcxDarkTheme_1_8] = null;
    this[_MaterialButtonComponent_1_9] = null;
    this[_MaterialTooltipDirective_1_10] = null;
    this[_PopupSourceDirective_1_11] = null;
    this[__TooltipController_1_13] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    material_menu__material_menu$46template.ViewMaterialMenuComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-menu'));
    let t = material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType;
    t == null ? material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, material_menu__material_menu$46template.styles$MaterialMenuComponent) : t;
    this.setupComponentType(material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType);
  }).prototype = material_menu__material_menu$46template.ViewMaterialMenuComponent0.prototype;
  dart.addTypeTests(material_menu__material_menu$46template.ViewMaterialMenuComponent0);
  dart.setMethodSignature(material_menu__material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getMethods(material_menu__material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_menu.MaterialMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getGetters(material_menu__material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    [_TooltipController_1_13]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_menu__material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getFields(material_menu__material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    [_query_MaterialButtonComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_query_MenuPopupComponent_1_1_isDirty]: dart.fieldType(core.bool),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_AcxDarkTheme_1_8]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_1_9]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_MaterialTooltipDirective_1_10]: dart.fieldType(src__material_tooltip__tooltip.MaterialTooltipDirective),
    [_PopupSourceDirective_1_11]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [__TooltipController_1_13]: dart.fieldType(dart.dynamic),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_9_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.String),
    [_expr_4]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_menu__material_menu$46template.ViewMaterialMenuComponent0, {
    /*material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_menu__material_menu$46template.viewFactory_MaterialMenuComponent0 = function(parentView, parentIndex) {
    return new material_menu__material_menu$46template.ViewMaterialMenuComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_menu__material_menu$46template.viewFactory_MaterialMenuComponent0, AppViewAndintToAppViewOfMaterialMenuComponent());
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialIconComponent_0_5 = Symbol('_MaterialIconComponent_0_5');
  material_menu__material_menu$46template._ViewMaterialMenuComponent1 = class _ViewMaterialMenuComponent1 extends src__core__linker__app_view.AppView$(material_menu__material_menu.MaterialMenuComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      let _text_1 = html.Text.new('\n  ');
      this[_compView_0].create(this[_MaterialIconComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.menu.uiIcon;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialIconComponent_0_5].icon = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
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
  (material_menu__material_menu$46template._ViewMaterialMenuComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    material_menu__material_menu$46template._ViewMaterialMenuComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType;
  }).prototype = material_menu__material_menu$46template._ViewMaterialMenuComponent1.prototype;
  dart.addTypeTests(material_menu__material_menu$46template._ViewMaterialMenuComponent1);
  dart.setMethodSignature(material_menu__material_menu$46template._ViewMaterialMenuComponent1, () => ({
    __proto__: dart.getMethods(material_menu__material_menu$46template._ViewMaterialMenuComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_menu.MaterialMenuComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__material_menu$46template._ViewMaterialMenuComponent1, () => ({
    __proto__: dart.getFields(material_menu__material_menu$46template._ViewMaterialMenuComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_menu__material_menu$46template.viewFactory_MaterialMenuComponent1 = function(parentView, parentIndex) {
    return new material_menu__material_menu$46template._ViewMaterialMenuComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_menu__material_menu$46template.viewFactory_MaterialMenuComponent1, AppViewAndintToAppViewOfMaterialMenuComponent());
  const _text_1 = Symbol('_text_1');
  material_menu__material_menu$46template._ViewMaterialMenuComponent2 = class _ViewMaterialMenuComponent2 extends src__core__linker__app_view.AppView$(material_menu__material_menu.MaterialMenuComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.buttonText;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_menu__material_menu$46template._ViewMaterialMenuComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_menu__material_menu$46template._ViewMaterialMenuComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType;
  }).prototype = material_menu__material_menu$46template._ViewMaterialMenuComponent2.prototype;
  dart.addTypeTests(material_menu__material_menu$46template._ViewMaterialMenuComponent2);
  dart.setMethodSignature(material_menu__material_menu$46template._ViewMaterialMenuComponent2, () => ({
    __proto__: dart.getMethods(material_menu__material_menu$46template._ViewMaterialMenuComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_menu.MaterialMenuComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__material_menu$46template._ViewMaterialMenuComponent2, () => ({
    __proto__: dart.getFields(material_menu__material_menu$46template._ViewMaterialMenuComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_menu__material_menu$46template.viewFactory_MaterialMenuComponent2 = function(parentView, parentIndex) {
    return new material_menu__material_menu$46template._ViewMaterialMenuComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_menu__material_menu$46template.viewFactory_MaterialMenuComponent2, AppViewAndintToAppViewOfMaterialMenuComponent());
  const _PopupSourceDirective_0_6 = Symbol('_PopupSourceDirective_0_6');
  const _handle_isExpandedChange_0_0 = Symbol('_handle_isExpandedChange_0_0');
  material_menu__material_menu$46template._ViewMaterialMenuComponent3 = class _ViewMaterialMenuComponent3 extends src__core__linker__app_view.AppView$(material_menu__material_menu.MaterialMenuComponent) {
    build() {
      this[_compView_0] = new material_menu__menu_popup$46template.ViewMenuPopupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_MenuPopupComponent_0_5] = new material_menu__menu_popup.MenuPopupComponent.new();
      this[_PopupSourceDirective_0_6] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_0]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)));
      let _text_1 = html.Text.new('\n  ');
      let _text_2 = html.Text.new('\n');
      this[_compView_0].create(this[_MenuPopupComponent_0_5], [(() => {
          let _ = [_text_1];
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](1)));
          _[$addAll]([_text_2]);
          return _;
        })()]);
      let subscription_0 = this[_MenuPopupComponent_0_5].isExpandedChange.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_isExpandedChange_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_menu__menu_popup.MenuPopupComponent) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MenuPopupComponent_0_5];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_PopupSourceDirective_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_toggle = material_menu__material_menu$46template.ViewMaterialMenuComponent0.as(this.parentView)[_PopupSourceDirective_1_11];
      changed = false;
      let currVal_0 = _ctx.menu;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MenuPopupComponent_0_5].menu = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.preferredPositions;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_MenuPopupComponent_0_5].preferredPositions = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.isExpanded;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MenuPopupComponent_0_5].isExpanded = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.width;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_MenuPopupComponent_0_5].width = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = local_toggle;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_MenuPopupComponent_0_5].popupSource = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_PopupSourceDirective_0_6].ngAfterViewInit();
      }
    }
    dirtyParentQueriesInternal() {
      material_menu__material_menu$46template.ViewMaterialMenuComponent0.as(this.parentView)[_query_MenuPopupComponent_1_1_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_PopupSourceDirective_0_6].ngOnDestroy();
    }
    [_handle_isExpandedChange_0_0]($event) {
      this.ctx.isExpanded = $event;
    }
  };
  (material_menu__material_menu$46template._ViewMaterialMenuComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MenuPopupComponent_0_5] = null;
    this[_PopupSourceDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    material_menu__material_menu$46template._ViewMaterialMenuComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType;
  }).prototype = material_menu__material_menu$46template._ViewMaterialMenuComponent3.prototype;
  dart.addTypeTests(material_menu__material_menu$46template._ViewMaterialMenuComponent3);
  dart.setMethodSignature(material_menu__material_menu$46template._ViewMaterialMenuComponent3, () => ({
    __proto__: dart.getMethods(material_menu__material_menu$46template._ViewMaterialMenuComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_menu.MaterialMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_isExpandedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_menu__material_menu$46template._ViewMaterialMenuComponent3, () => ({
    __proto__: dart.getFields(material_menu__material_menu$46template._ViewMaterialMenuComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_menu__menu_popup$46template.ViewMenuPopupComponent0),
    [_MenuPopupComponent_0_5]: dart.fieldType(material_menu__menu_popup.MenuPopupComponent),
    [_PopupSourceDirective_0_6]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  material_menu__material_menu$46template.viewFactory_MaterialMenuComponent3 = function(parentView, parentIndex) {
    return new material_menu__material_menu$46template._ViewMaterialMenuComponent3.new(parentView, parentIndex);
  };
  dart.fn(material_menu__material_menu$46template.viewFactory_MaterialMenuComponent3, AppViewAndintToAppViewOfMaterialMenuComponent());
  dart.defineLazy(material_menu__material_menu$46template, {
    /*material_menu__material_menu$46template.styles$MaterialMenuComponentHost*/get styles$MaterialMenuComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialMenuComponent_0_5 = Symbol('_MaterialMenuComponent_0_5');
  material_menu__material_menu$46template._ViewMaterialMenuComponentHost0 = class _ViewMaterialMenuComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_menu__material_menu$46template.ViewMaterialMenuComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialMenuComponent_0_5] = new material_menu__material_menu.MaterialMenuComponent.new();
      this[_compView_0].create(this[_MaterialMenuComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialMenuComponent()).new(0, this, this.rootEl, this[_MaterialMenuComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_menu__material_menu.MaterialMenuComponent) && 0 === nodeIndex) {
        return this[_MaterialMenuComponent_0_5];
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
        this[_MaterialMenuComponent_0_5].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialMenuComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__material_menu$46template._ViewMaterialMenuComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialMenuComponent_0_5] = null;
    material_menu__material_menu$46template._ViewMaterialMenuComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__material_menu$46template._ViewMaterialMenuComponentHost0.prototype;
  dart.addTypeTests(material_menu__material_menu$46template._ViewMaterialMenuComponentHost0);
  dart.setMethodSignature(material_menu__material_menu$46template._ViewMaterialMenuComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__material_menu$46template._ViewMaterialMenuComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__material_menu$46template._ViewMaterialMenuComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__material_menu$46template._ViewMaterialMenuComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_menu__material_menu$46template.ViewMaterialMenuComponent0),
    [_MaterialMenuComponent_0_5]: dart.fieldType(material_menu__material_menu.MaterialMenuComponent)
  }));
  material_menu__material_menu$46template.viewFactory_MaterialMenuComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__material_menu$46template._ViewMaterialMenuComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_menu__material_menu$46template.viewFactory_MaterialMenuComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_menu__material_menu$46template, {
    /*material_menu__material_menu$46template.MaterialMenuComponentNgFactory*/get MaterialMenuComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialMenuComponent()).new('material-menu', material_menu__material_menu$46template.viewFactory_MaterialMenuComponentHost0, material_menu__material_menu$46template._MaterialMenuComponentMetadata));
    },
    /*material_menu__material_menu$46template._MaterialMenuComponentMetadata*/get _MaterialMenuComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_menu__material_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__material_menu$46template.initReflector = function() {
    if (dart.test(material_menu__material_menu$46template._visited)) {
      return;
    }
    material_menu__material_menu$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__material_menu.MaterialMenuComponent), material_menu__material_menu$46template.MaterialMenuComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_menu__menu_popup$46template.initReflector();
    material_menu__menu_popup_wrapper$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_tooltip__material_tooltip$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
    model__menu__menu$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(material_menu__material_menu$46template.initReflector, VoidTovoid());
  dart.defineLazy(material_menu__menu_item_groups$46template, {
    /*material_menu__menu_item_groups$46template.styles$MenuItemGroupsComponent*/get styles$MenuItemGroupsComponent() {
      return dart.constList([material_menu__menu_item_groups$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_FocusableActivateItem_1_0_isDirty = Symbol('_query_FocusableActivateItem_1_0_isDirty');
  const _el_1$ = Symbol('_el_1');
  const _compView_1$ = Symbol('_compView_1');
  const _FocusTrapComponent_1_5 = Symbol('_FocusTrapComponent_1_5');
  const _query_AutoFocusDirective_1_0_isDirty = Symbol('_query_AutoFocusDirective_1_0_isDirty');
  const _appEl_3$ = Symbol('_appEl_3');
  const _NgFor_3_9 = Symbol('_NgFor_3_9');
  const _expr_0$ = Symbol('_expr_0');
  const _expr_1$ = Symbol('_expr_1');
  const _expr_2$ = Symbol('_expr_2');
  let const$1;
  const _AutoFocusDirective_1_8 = Symbol('_AutoFocusDirective_1_8');
  const _AutoFocusDirective_2_5 = Symbol('_AutoFocusDirective_2_5');
  const _appEl_2 = Symbol('_appEl_2');
  const _appEl_14 = Symbol('_appEl_14');
  const _appEl_1$ = Symbol('_appEl_1');
  const _appEl_4 = Symbol('_appEl_4');
  const _FocusableActivateItem_1_14 = Symbol('_FocusableActivateItem_1_14');
  material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0 = class ViewMenuItemGroupsComponent0 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('\n');
      parentRenderNode[$append](_text_0);
      this[_compView_1$] = new focus__focus_trap$46template.ViewFocusTrapComponent0.new(this, 1);
      this[_el_1$] = this[_compView_1$].rootEl;
      parentRenderNode[$append](this[_el_1$]);
      this.addShimC(html.HtmlElement._check(this[_el_1$]));
      this[_FocusTrapComponent_1_5] = new focus__focus_trap.FocusTrapComponent.new();
      let _text_2 = html.Text.new('\n  ');
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_3$] = new src__core__linker__view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3$], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent1);
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3$], _TemplateRef_3_8);
      let _text_4 = html.Text.new('\n');
      this[_compView_1$].create(this[_FocusTrapComponent_1_5], [JSArrayOfObject().of([_text_2, this[_appEl_3$], _text_4])]);
      let _text_5 = html.Text.new('\n');
      parentRenderNode[$append](_text_5);
      this[_el_1$][$addEventListener]('focus', this.eventHandler1(html.Event, html.FocusEvent, dart.bind(this.ctx, 'onFocus')));
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]('mouseover', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'onMouseOver')));
      _rootEl[$addEventListener]('mouseout', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'onMouseOut')));
      _rootEl[$addEventListener]('keydown', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeydown')));
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus__focus_trap.FocusTrapComponent) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_FocusTrapComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_2 = _ctx.menu.itemGroups;
      if (!core.identical(this[_expr_2$], currVal_2)) {
        this[_NgFor_3_9].ngForOf = currVal_2;
        this[_expr_2$] = currVal_2;
      }
      this[_NgFor_3_9].ngDoCheck();
      this[_appEl_3$].detectChangesInNestedViews();
      if (dart.test(this[_query_AutoFocusDirective_1_0_isDirty])) {
        this[_FocusTrapComponent_1_5].autoFocus = dart.test(this[_appEl_3$].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1, dart.fn(nestedView => nestedView[_appEl_4].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4, dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5, dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6, dart.fn(nestedView => src__core__linker__app_view_utils.flattenNodes(focus__focus.AutoFocusDirective, JSArrayOfListOfAutoFocusDirective().of([JSArrayOfAutoFocusDirective().of([nestedView[_AutoFocusDirective_1_8]]), nestedView[_appEl_14].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12, dart.fn(nestedView => nestedView[_appEl_2].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13, dart.fn(nestedView => JSArrayOfAutoFocusDirective().of([nestedView[_AutoFocusDirective_2_5]]), _ViewMenuItemGroupsComponent13ToListOfAutoFocusDirective())), _ViewMenuItemGroupsComponent12ToListOfAutoFocusDirective()))])), _ViewMenuItemGroupsComponent6ToListOfAutoFocusDirective())), _ViewMenuItemGroupsComponent5ToListOfAutoFocusDirective())), _ViewMenuItemGroupsComponent4ToListOfAutoFocusDirective())), _ViewMenuItemGroupsComponent1ToListOfAutoFocusDirective()))[$isNotEmpty]) ? this[_appEl_3$].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1, dart.fn(nestedView => nestedView[_appEl_4].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4, dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5, dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6, dart.fn(nestedView => src__core__linker__app_view_utils.flattenNodes(focus__focus.AutoFocusDirective, JSArrayOfListOfAutoFocusDirective().of([JSArrayOfAutoFocusDirective().of([nestedView[_AutoFocusDirective_1_8]]), nestedView[_appEl_14].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12, dart.fn(nestedView => nestedView[_appEl_2].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13, dart.fn(nestedView => JSArrayOfAutoFocusDirective().of([nestedView[_AutoFocusDirective_2_5]]), _ViewMenuItemGroupsComponent13ToListOfAutoFocusDirective())), _ViewMenuItemGroupsComponent12ToListOfAutoFocusDirective()))])), _ViewMenuItemGroupsComponent6ToListOfAutoFocusDirective())), _ViewMenuItemGroupsComponent5ToListOfAutoFocusDirective())), _ViewMenuItemGroupsComponent4ToListOfAutoFocusDirective())), _ViewMenuItemGroupsComponent1ToListOfAutoFocusDirective()))[$first] : null;
        this[_query_AutoFocusDirective_1_0_isDirty] = false;
      }
      if (dart.test(this[_query_FocusableActivateItem_1_0_isDirty])) {
        this.ctx.focusableItems = this[_appEl_3$].mapNestedViews(focus__focus_activable_item.FocusableActivateItem, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1, dart.fn(nestedView => nestedView[_appEl_4].mapNestedViews(focus__focus_activable_item.FocusableActivateItem, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4, dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(focus__focus_activable_item.FocusableActivateItem, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5, dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(focus__focus_activable_item.FocusableActivateItem, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6, dart.fn(nestedView => JSArrayOfFocusableActivateItem().of([nestedView[_FocusableActivateItem_1_14]]), _ViewMenuItemGroupsComponent6ToListOfFocusableActivateItem())), _ViewMenuItemGroupsComponent5ToListOfFocusableActivateItem())), _ViewMenuItemGroupsComponent4ToListOfFocusableActivateItem())), _ViewMenuItemGroupsComponent1ToListOfFocusableActivateItem()));
        this[_query_FocusableActivateItem_1_0_isDirty] = false;
      }
      let currVal_0 = _ctx.isMouseDriven;
      if (!(this[_expr_0$] == currVal_0)) {
        this.updateElemClass(this[_el_1$], 'mouse-driven', currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = !dart.test(_ctx.isMouseDriven);
      if (!(this[_expr_1$] === currVal_1)) {
        this.updateElemClass(this[_el_1$], 'keyboard-driven', currVal_1);
        this[_expr_1$] = currVal_1;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_3$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_1$];
      t$ == null ? null : t$.destroy();
      this[_FocusTrapComponent_1_5].ngOnDestroy();
    }
  };
  (material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.new = function(parentView, parentIndex) {
    this[_query_FocusableActivateItem_1_0_isDirty] = true;
    this[_el_1$] = null;
    this[_compView_1$] = null;
    this[_FocusTrapComponent_1_5] = null;
    this[_query_AutoFocusDirective_1_0_isDirty] = true;
    this[_appEl_3$] = null;
    this[_NgFor_3_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('menu-item-groups'));
    let t = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
    t == null ? material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_menu__menu_item_groups$46template.styles$MenuItemGroupsComponent) : t;
    this.setupComponentType(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType);
  }).prototype = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0);
  dart.setMethodSignature(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__),
    [_query_FocusableActivateItem_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_1$]: dart.fieldType(html.Element),
    [_compView_1$]: dart.fieldType(focus__focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_1_5]: dart.fieldType(focus__focus_trap.FocusTrapComponent),
    [_query_AutoFocusDirective_1_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_3$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(core.bool),
    [_expr_2$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0, {
    /*material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent0 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent0, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  const _el_0$ = Symbol('_el_0');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1 = class _ViewMenuItemGroupsComponent1 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0$].className = 'group';
      this.createAttr(this[_el_0$], 'group', '');
      this.createAttr(this[_el_0$], 'role', 'menu');
      this.addShimC(this[_el_0$]);
      let _text_1 = html.Text.new('\n    ');
      this[_el_0$][$append](_text_1);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0$][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent2);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _text_3 = html.Text.new('\n    ');
      this[_el_0$][$append](_text_3);
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0$][$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent4);
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = html.Text.new('\n  ');
      this[_el_0$][$append](_text_5);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__menu__menu.MenuItemGroup._check(this.locals[$_get]('$implicit'));
      this[_NgIf_2_9].ngIf = local_group.hasLabel;
      this[_NgIf_4_9].ngIf = !dart.test(local_group.isCollapsible) || dart.test(local_group.isExpanded);
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      let currVal_0 = local_group.hasSeparator;
      if (!(this[_expr_0$] == currVal_0)) {
        this.updateClass(this[_el_0$], 'has-separator', currVal_0);
        this[_expr_0$] = currVal_0;
      }
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_4];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null, 'index', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__),
    [_el_0$]: dart.fieldType(html.DivElement),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$]: dart.fieldType(core.bool)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent1 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent1, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _el_2 = Symbol('_el_2');
  const _text_4 = Symbol('_text_4');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2 = class _ViewMenuItemGroupsComponent2 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = html.DivElement._check(doc[$createElement]('div'));
      this.createAttr(this[_el_0$], 'buttonDecorator', '');
      this[_el_0$].className = 'group-header';
      this.createAttr(this[_el_0$], 'role', 'button');
      this.addShimC(this[_el_0$]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0$]));
      let _text_1 = html.Text.new('\n      ');
      this[_el_0$][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0$]);
      this[_el_2].className = 'group-label';
      this.addShimC(this[_el_2]);
      let _text_3 = html.Text.new('\n        ');
      this[_el_2][$append](_text_3);
      this[_text_4] = html.Text.new('');
      this[_el_2][$append](this[_text_4]);
      let _text_5 = html.Text.new('\n      ');
      this[_el_2][$append](_text_5);
      let _text_6 = html.Text.new('\n      ');
      this[_el_0$][$append](_text_6);
      let _anchor_7 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0$][$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent3);
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = html.Text.new('\n    ');
      this[_el_0$][$append](_text_8);
      this[_el_0$][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0$][$addEventListener]('keypress', this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0$]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let local_group = model__menu__menu.MenuItemGroup._check(this.parentView.locals[$_get]('$implicit'));
      this[_NgIf_7_9].ngIf = local_group.isCollapsible;
      this[_appEl_7].detectChangesInNestedViews();
      let currVal_0 = local_group.isCollapsible;
      if (!(this[_expr_0$] == currVal_0)) {
        this.updateClass(this[_el_0$], 'is-collapsible', currVal_0);
        this[_expr_0$] = currVal_0;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0$]);
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_group.uiDisplayName);
      if (!core.identical(this[_expr_1$], currVal_1)) {
        this[_text_4][$text] = core.String._check(currVal_1);
        this[_expr_1$] = currVal_1;
      }
    }
    destroyInternal() {
      let t = this[_appEl_7];
      t == null ? null : t.destroyNestedViews();
    }
    [_handle_trigger_0_0]($event) {
      let local_group = model__menu__menu.MenuItemGroup._check(this.parentView.locals[$_get]('$implicit'));
      this.ctx.toggleExpansionIfCollapsible(local_group);
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_ButtonDirective_0_5] = null;
    this[_el_2] = null;
    this[_text_4] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__),
    [_el_0$]: dart.fieldType(html.DivElement),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_el_2]: dart.fieldType(html.DivElement),
    [_text_4]: dart.fieldType(html.Text),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent2 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent2, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  const _compView_0$ = Symbol('_compView_0');
  const _MaterialIconComponent_0_5$ = Symbol('_MaterialIconComponent_0_5');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3 = class _ViewMenuItemGroupsComponent3 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = 'expansion-icon';
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialIconComponent_0_5$] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0$]));
      let _text_1 = html.Text.new('\n      ');
      this[_compView_0$].create(this[_MaterialIconComponent_0_5$], []);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      let local_group = model__menu__menu.MenuItemGroup._check(this.parentView.parentView.locals[$_get]('$implicit'));
      changed = false;
      let currVal_1 = dart.test(local_group.isExpanded) ? 'expand_less' : 'expand_more';
      if (!(this[_expr_1$] === currVal_1)) {
        this[_MaterialIconComponent_0_5$].icon = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      let currVal_0 = local_group.isExpanded;
      if (!(this[_expr_0$] == currVal_0)) {
        this.updateElemClass(this[_el_0$], 'expanded', currVal_0);
        this[_expr_0$] = currVal_0;
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent3 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent3, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4 = class _ViewMenuItemGroupsComponent4 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let _text_0 = html.Text.new('\n      ');
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent5);
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1$], _TemplateRef_1_8);
      let _text_2 = html.Text.new('\n    ');
      this.init([_text_0, this[_appEl_1$], _text_2], null);
      return null;
    }
    detectChangesInternal() {
      let local_group = model__menu__menu.MenuItemGroup._check(this.parentView.locals[$_get]('$implicit'));
      let currVal_0 = local_group;
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      this[_NgFor_1_9].ngDoCheck();
      this[_appEl_1$].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1$];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4.new = function(parentView, parentIndex) {
    this[_appEl_1$] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent4 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent4, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5 = class _ViewMenuItemGroupsComponent5 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let _text_0 = html.Text.new('\n        ');
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent6);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _text_2 = html.Text.new('\n      ');
      this.init([_text_0, this[_appEl_1$], _text_2], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_item = this.locals[$_get]('$implicit');
      this[_NgIf_1_9].ngIf = _ctx.isItemVisible(model__menu__menu.MenuItem._check(local_item));
      this[_appEl_1$].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1$];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5.new = function(parentView, parentIndex) {
    this[_appEl_1$] = null;
    this[_NgIf_1_9] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null, 'index', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent5 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent5, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  const _FocusActivableItemDirective_1_9 = Symbol('_FocusActivableItemDirective_1_9');
  const _MaterialTooltipDirective_1_10$ = Symbol('_MaterialTooltipDirective_1_10');
  const _MaterialSelectItemComponent_1_11 = Symbol('_MaterialSelectItemComponent_1_11');
  const _NgClass_1_12 = Symbol('_NgClass_1_12');
  const _PopupSourceDirective_1_13 = Symbol('_PopupSourceDirective_1_13');
  const __TooltipController_1_17 = Symbol('__TooltipController_1_17');
  const _NgIf_3_9$ = Symbol('_NgIf_3_9');
  const _appEl_5$ = Symbol('_appEl_5');
  const _NgIf_5_9$ = Symbol('_NgIf_5_9');
  const _appEl_9$ = Symbol('_appEl_9');
  const _NgIf_9_9$ = Symbol('_NgIf_9_9');
  const _appEl_11 = Symbol('_appEl_11');
  const _NgIf_11_9 = Symbol('_NgIf_11_9');
  const _NgIf_14_9 = Symbol('_NgIf_14_9');
  const _expr_3$ = Symbol('_expr_3');
  const _expr_4$ = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  const _expr_15 = Symbol('_expr_15');
  const _expr_16 = Symbol('_expr_16');
  const _expr_19 = Symbol('_expr_19');
  const _TooltipController_1_17 = Symbol('_TooltipController_1_17');
  const _handle_trigger_1_0 = Symbol('_handle_trigger_1_0');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6 = class _ViewMenuItemGroupsComponent6 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    get [_TooltipController_1_17]() {
      if (this[__TooltipController_1_17] == null) {
        this[__TooltipController_1_17] = material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)));
      }
      return this[__TooltipController_1_17];
    }
    build() {
      let _text_0 = html.Text.new('\n          ');
      this[_compView_1$] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1$] = this[_compView_1$].rootEl;
      this[_el_1$].className = 'menu-item item';
      this.createAttr(this[_el_1$], 'closeOnActivate', 'false');
      this.createAttr(this[_el_1$], 'popupSource', '');
      this.createAttr(this[_el_1$], 'role', 'menuitem');
      this.createAttr(this[_el_1$], 'useCheckMarks', 'true');
      this.addShimC(html.HtmlElement._check(this[_el_1$]));
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, null, this, this[_el_1$]);
      this[_AutoFocusDirective_1_8] = new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_1$]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), focus__focus.Focusable._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(focus__focus.Focusable), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_ref.PopupRef), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)));
      this[_FocusActivableItemDirective_1_9] = new focus__focus_activable_item.FocusActivableItemDirective.new(html.HtmlElement._check(this[_el_1$]));
      this[_MaterialTooltipDirective_1_10$] = new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_appEl_1$], html.HtmlElement._check(this[_el_1$]), this[_appEl_1$], this[_compView_1$].ref, html.Window._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentView.parentView.viewData.parentIndex)));
      this[_MaterialSelectItemComponent_1_11] = new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1$]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_1$].ref);
      this[_NgClass_1_12] = new src__common__directives__ng_class.NgClass.new(this[_el_1$]);
      this[_PopupSourceDirective_1_13] = new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), html.HtmlElement._check(this[_el_1$]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)));
      this[_FocusableActivateItem_1_14] = this[_FocusActivableItemDirective_1_9];
      let _text_2 = html.Text.new('\n            ');
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_3$] = new src__core__linker__view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3$], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent7);
      this[_NgIf_3_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3$], _TemplateRef_3_8);
      let _text_4 = html.Text.new('\n            ');
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_5$] = new src__core__linker__view_container.ViewContainer.new(5, 1, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5$], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent8);
      this[_NgIf_5_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5$], _TemplateRef_5_8);
      let _text_6 = html.Text.new('\n            ');
      let _anchor_7 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 1, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent9);
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = html.Text.new('\n            ');
      let _anchor_9 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_9$] = new src__core__linker__view_container.ViewContainer.new(9, 1, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9$], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent10);
      this[_NgIf_9_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_9$], _TemplateRef_9_8);
      let _text_10 = html.Text.new('\n            ');
      let _anchor_11 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_11] = new src__core__linker__view_container.ViewContainer.new(11, 1, this, _anchor_11);
      let _TemplateRef_11_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_11], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent11);
      this[_NgIf_11_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let _text_12 = html.Text.new('\n          ');
      this[_compView_1$].create(this[_MaterialSelectItemComponent_1_11], [JSArrayOfObject().of([_text_2, this[_appEl_3$], _text_4, this[_appEl_5$], _text_6, this[_appEl_7], _text_8, this[_appEl_9$], _text_10, this[_appEl_11], _text_12])]);
      let _text_13 = html.Text.new('\n          ');
      let _anchor_14 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_14] = new src__core__linker__view_container.ViewContainer.new(14, null, this, _anchor_14);
      let _TemplateRef_14_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_14], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent12);
      this[_NgIf_14_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_14], _TemplateRef_14_8);
      let _text_15 = html.Text.new('\n        ');
      let subscription_0 = this[_MaterialSelectItemComponent_1_11].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_1_0)));
      this.init([_text_0, this[_appEl_1$], _text_13, this[_appEl_14], _text_15], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus__focus_activable_item.FocusActivableItemDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 12) {
        return this[_FocusActivableItemDirective_1_9];
      }
      if ((token === dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent) || token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 12) {
        return this[_MaterialSelectItemComponent_1_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 12) {
        return this[_PopupSourceDirective_1_13];
      }
      if (token === dart.wrapType(focus__focus_activable_item.FocusableActivateItem) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 12) {
        return this[_FocusableActivateItem_1_14];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 12) {
        return this[_TooltipController_1_17];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_i = core.int._check(this.parentView.parentView.parentView.locals[$_get]('index'));
      let local_j = core.int._check(this.parentView.locals[$_get]('index'));
      let local_item = this.parentView.locals[$_get]('$implicit');
      let local_group = model__menu__menu.MenuItemGroup._check(this.parentView.parentView.parentView.locals[$_get]('$implicit'));
      let currVal_6 = _ctx.hasAutoFocus(_ctx.activeModel == null ? null : _ctx.activeModel.id(local_item));
      if (!(this[_expr_6] == currVal_6)) {
        this[_AutoFocusDirective_1_8].autoFocus = currVal_6;
        this[_expr_6] = currVal_6;
      }
      if (firstCheck) {
        this[_AutoFocusDirective_1_8].ngOnInit();
      }
      let currVal_7 = _ctx.activeModel == null ? null : _ctx.activeModel.id(local_item);
      if (!(this[_expr_7] == currVal_7)) {
        this[_FocusActivableItemDirective_1_9].key = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.tooltipPositions;
      if (!core.identical(this[_expr_8], currVal_8)) {
        this[_MaterialTooltipDirective_1_10$].positions = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = dart.dload(local_item, 'tooltip');
      if (!core.identical(this[_expr_9], currVal_9)) {
        this[_MaterialTooltipDirective_1_10$].text = core.String._check(currVal_9);
        this[_expr_9] = core.String._check(currVal_9);
      }
      let currVal_10 = dart.dload(local_item, 'showTooltip');
      if (!core.identical(this[_expr_10], currVal_10)) {
        this[_MaterialTooltipDirective_1_10$].canShow = core.bool._check(currVal_10);
        this[_expr_10] = core.bool._check(currVal_10);
      }
      if (firstCheck) {
        this[_MaterialTooltipDirective_1_10$].ngOnInit();
      }
      if (firstCheck) {
        this[_MaterialSelectItemComponent_1_11].useCheckMarks = 'true';
        this[_MaterialSelectItemComponent_1_11].closeOnActivate = 'false';
      }
      let currVal_11 = _ctx.isItemActive(model__menu__menu.MenuItem._check(local_item));
      if (!(this[_expr_11] == currVal_11)) {
        this[_MaterialSelectItemComponent_1_11].active = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (!(this[_expr_12] === currVal_12)) {
        this[_MaterialSelectItemComponent_1_11].disabled = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.getItemValue(model__menu__menu.MenuItem._check(local_item));
      if (!core.identical(this[_expr_13], currVal_13)) {
        this[_MaterialSelectItemComponent_1_11].value = currVal_13;
        this[_expr_13] = currVal_13;
      }
      let currVal_15 = _ctx.shouldSelectItemOnClick(model__menu__menu.MenuItem._check(local_item));
      if (!(this[_expr_15] == currVal_15)) {
        this[_MaterialSelectItemComponent_1_11].selectOnActivate = currVal_15;
        this[_expr_15] = currVal_15;
      }
      let currVal_16 = _ctx.getSelectionModel(local_group);
      if (!core.identical(this[_expr_16], currVal_16)) {
        this[_MaterialSelectItemComponent_1_11].selection = currVal_16;
        this[_expr_16] = currVal_16;
      }
      if (firstCheck) {
        this[_NgClass_1_12].initialClasses = 'menu-item';
      }
      let currVal_19 = dart.dload(local_item, 'cssClasses');
      if (!core.identical(this[_expr_19], currVal_19)) {
        this[_NgClass_1_12].rawClass = currVal_19;
        this[_expr_19] = currVal_19;
      }
      this[_NgClass_1_12].ngDoCheck();
      this[_NgIf_3_9$].ngIf = core.bool._check(dart.dload(local_item, 'hasIcon'));
      this[_NgIf_5_9$].ngIf = _ctx.hasHighlight;
      this[_NgIf_7_9].ngIf = !dart.test(_ctx.hasHighlight);
      this[_NgIf_9_9$].ngIf = core.bool._check(dart.dload(dart.dload(local_item, 'itemSuffixes'), 'isNotEmpty'));
      this[_NgIf_11_9].ngIf = core.bool._check(dart.dload(local_item, 'hasSubMenu'));
      this[_NgIf_14_9].ngIf = core.bool._check(dart.dload(local_item, 'hasSubMenu'));
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_3$].detectChangesInNestedViews();
      this[_appEl_5$].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9$].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      this[_appEl_14].detectChangesInNestedViews();
      let currVal_0 = local_i;
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this.setAttr(this[_el_1$], 'data-group-index', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = local_j;
      if (!core.identical(this[_expr_1$], currVal_1)) {
        this.setAttr(this[_el_1$], 'data-item-index', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = _ctx.activeModel == null ? null : _ctx.activeModel.id(local_item);
      if (!core.identical(this[_expr_2$], currVal_2)) {
        this.setAttr(this[_el_1$], 'id', currVal_2 == null ? null : dart.toString(currVal_2));
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = _ctx.isSubMenuVisible(model__menu__menu.MenuItem._check(local_item));
      if (!(this[_expr_3$] == currVal_3)) {
        this.updateElemClass(this[_el_1$], 'is-menu-parent', currVal_3);
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (!(this[_expr_4$] === currVal_4)) {
        this.setAttr(this[_el_1$], 'aria-disabled', currVal_4[$toString]());
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = dart.dload(local_item, 'hasSubMenu');
      if (!core.identical(this[_expr_5], currVal_5)) {
        this.setAttr(this[_el_1$], 'aria-haspopup', currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      this[_compView_1$].detectHostChanges(firstCheck);
      this[_compView_1$].detectChanges();
      if (firstCheck) {
        this[_MaterialTooltipDirective_1_10$].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_PopupSourceDirective_1_13].ngAfterViewInit();
      }
    }
    dirtyParentQueriesInternal() {
      material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.as(this.parentView.parentView.parentView.parentView)[_query_AutoFocusDirective_1_0_isDirty] = true;
      material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.as(this.parentView.parentView.parentView.parentView)[_query_FocusableActivateItem_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_appEl_1$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_3$];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_5$];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_7];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_9$];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_appEl_11];
      t$3 == null ? null : t$3.destroyNestedViews();
      let t$4 = this[_appEl_14];
      t$4 == null ? null : t$4.destroyNestedViews();
      let t$5 = this[_compView_1$];
      t$5 == null ? null : t$5.destroy();
      this[_AutoFocusDirective_1_8].ngOnDestroy();
      this[_MaterialTooltipDirective_1_10$].ngOnDestroy();
      this[_MaterialSelectItemComponent_1_11].ngOnDestroy();
      this[_NgClass_1_12].ngOnDestroy();
      this[_PopupSourceDirective_1_13].ngOnDestroy();
    }
    [_handle_trigger_1_0]($event) {
      let local_item = this.parentView.locals[$_get]('$implicit');
      let local_group = model__menu__menu.MenuItemGroup._check(this.parentView.parentView.parentView.locals[$_get]('$implicit'));
      this.ctx.handleSelectItemTrigger(model__menu__menu.MenuItem._check(local_item), local_group, html.UIEvent._check($event));
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.new = function(parentView, parentIndex) {
    this[_el_1$] = null;
    this[_compView_1$] = null;
    this[_appEl_1$] = null;
    this[_AutoFocusDirective_1_8] = null;
    this[_FocusActivableItemDirective_1_9] = null;
    this[_MaterialTooltipDirective_1_10$] = null;
    this[_MaterialSelectItemComponent_1_11] = null;
    this[_NgClass_1_12] = null;
    this[_PopupSourceDirective_1_13] = null;
    this[_FocusableActivateItem_1_14] = null;
    this[__TooltipController_1_17] = null;
    this[_appEl_3$] = null;
    this[_NgIf_3_9$] = null;
    this[_appEl_5$] = null;
    this[_NgIf_5_9$] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_9$] = null;
    this[_NgIf_9_9$] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_appEl_14] = null;
    this[_NgIf_14_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_15] = null;
    this[_expr_16] = null;
    this[_expr_19] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getGetters(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    [_TooltipController_1_17]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    [_el_1$]: dart.fieldType(html.Element),
    [_compView_1$]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_AutoFocusDirective_1_8]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_FocusActivableItemDirective_1_9]: dart.fieldType(focus__focus_activable_item.FocusActivableItemDirective),
    [_MaterialTooltipDirective_1_10$]: dart.fieldType(src__material_tooltip__tooltip.MaterialTooltipDirective),
    [_MaterialSelectItemComponent_1_11]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_NgClass_1_12]: dart.fieldType(src__common__directives__ng_class.NgClass),
    [_PopupSourceDirective_1_13]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_FocusableActivateItem_1_14]: dart.fieldType(focus__focus_activable_item.FocusActivableItemDirective),
    [__TooltipController_1_17]: dart.fieldType(dart.dynamic),
    [_appEl_3$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_5$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_9$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_9_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_11]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_11_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_14]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_14_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(core.bool),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.String),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(core.String),
    [_expr_10]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.bool),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(core.bool),
    [_expr_16]: dart.fieldType(dart.dynamic),
    [_expr_19]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent6 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent6, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7 = class _ViewMenuItemGroupsComponent7 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = 'material-list-item-primary';
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialIconComponent_0_5$] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0$]));
      let _text_1 = html.Text.new('\n            ');
      this[_compView_0$].create(this[_MaterialIconComponent_0_5$], []);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      let local_item = this.parentView.parentView.locals[$_get]('$implicit');
      changed = false;
      let currVal_0 = dart.dload(local_item, 'icon');
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_MaterialIconComponent_0_5$].icon = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5$] = null;
    this[_expr_0$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent7 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent7, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  const _compView_2 = Symbol('_compView_2');
  const _HighlightedTextComponent_2_5 = Symbol('_HighlightedTextComponent_2_5');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8 = class _ViewMenuItemGroupsComponent8 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = doc[$createElement]('span');
      this[_el_0$].className = 'menu-item-label';
      this.addShimE(this[_el_0$]);
      let _text_1 = html.Text.new('\n              ');
      this[_el_0$][$append](_text_1);
      this[_compView_2] = new highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this[_el_0$][$append](this[_el_2]);
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_HighlightedTextComponent_2_5] = new highlighted_text__highlighted_text.HighlightedTextComponent.new();
      let _text_3 = html.Text.new('\n              ');
      this[_compView_2].create(this[_HighlightedTextComponent_2_5], []);
      let _text_4 = html.Text.new('\n            ');
      this[_el_0$][$append](_text_4);
      this.init0(this[_el_0$]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(highlighted_text__highlighted_text.HighlightedTextComponent) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_HighlightedTextComponent_2_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_item = this.parentView.parentView.locals[$_get]('$implicit');
      changed = false;
      let currVal_0 = _ctx.highlighted(core.String._check(dart.dload(local_item, 'uiDisplayName')));
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_HighlightedTextComponent_2_5].segments = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_2];
      t == null ? null : t.destroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_HighlightedTextComponent_2_5] = null;
    this[_expr_0$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0),
    [_HighlightedTextComponent_2_5]: dart.fieldType(highlighted_text__highlighted_text.HighlightedTextComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent8 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent8, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  const _text_2 = Symbol('_text_2');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9 = class _ViewMenuItemGroupsComponent9 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = doc[$createElement]('span');
      this[_el_0$].className = 'menu-item-label';
      this.addShimE(this[_el_0$]);
      let _text_1 = html.Text.new('\n              ');
      this[_el_0$][$append](_text_1);
      this[_text_2] = html.Text.new('');
      this[_el_0$][$append](this[_text_2]);
      let _text_3 = html.Text.new('\n            ');
      this[_el_0$][$append](_text_3);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let local_item = this.parentView.parentView.locals[$_get]('$implicit');
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dload(local_item, 'uiDisplayName'));
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0$] = currVal_0;
      }
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_text_2] = null;
    this[_expr_0$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent9 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent9, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  const _MenuItemAffixListComponent_0_5 = Symbol('_MenuItemAffixListComponent_0_5');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10 = class _ViewMenuItemGroupsComponent10 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = 'suffix-list';
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MenuItemAffixListComponent_0_5] = new material_menu__menu_item_affix_list.MenuItemAffixListComponent.new(this[_compView_0$].ref, material_menu__menu_root.MenuRoot._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_menu__menu_root.MenuRoot), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)));
      let _text_1 = html.Text.new('\n            ');
      this[_compView_0$].create(this[_MenuItemAffixListComponent_0_5], []);
      this.init0(this[_el_0$]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_menu__menu_item_affix_list.MenuItemAffixListComponent) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MenuItemAffixListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let local_item = this.parentView.parentView.locals[$_get]('$implicit');
      changed = false;
      let currVal_0 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (!(this[_expr_0$] === currVal_0)) {
        this[_MenuItemAffixListComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = dart.dload(local_item, 'itemSuffixes');
      if (!core.identical(this[_expr_1$], currVal_1)) {
        this[_MenuItemAffixListComponent_0_5].items = ObservableListOfMenuItemAffix()._check(currVal_1);
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
      this[_MenuItemAffixListComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MenuItemAffixListComponent_0_5] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0),
    [_MenuItemAffixListComponent_0_5]: dart.fieldType(material_menu__menu_item_affix_list.MenuItemAffixListComponent),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent10 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent10, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11 = class _ViewMenuItemGroupsComponent11 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = 'material-list-item-secondary submenu-icon';
      this.createAttr(this[_el_0$], 'icon', 'arrow_drop_down');
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialIconComponent_0_5$] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0$]));
      let _text_1 = html.Text.new('\n            ');
      this[_compView_0$].create(this[_MaterialIconComponent_0_5$], []);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_0_5$].icon = 'arrow_drop_down';
        changed = true;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent11 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent11, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  const _appEl_0 = Symbol('_appEl_0');
  const _MaterialPopupComponent_0_8 = Symbol('_MaterialPopupComponent_0_8');
  const __PopupRef_0_10 = Symbol('__PopupRef_0_10');
  const __PopupHierarchy_0_12 = Symbol('__PopupHierarchy_0_12');
  const _DeferredContentDirective_2_9 = Symbol('_DeferredContentDirective_2_9');
  const _PopupRef_0_10 = Symbol('_PopupRef_0_10');
  const _PopupHierarchy_0_12 = Symbol('_PopupHierarchy_0_12');
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  const _handle_visibleChange_0_0 = Symbol('_handle_visibleChange_0_0');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12 = class _ViewMenuItemGroupsComponent12 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    get [_PopupRef_0_10]() {
      if (this[__PopupRef_0_10] == null) {
        this[__PopupRef_0_10] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_10];
    }
    get [_PopupHierarchy_0_12]() {
      if (this[__PopupHierarchy_0_12] == null) {
        this[__PopupHierarchy_0_12] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_12];
    }
    build() {
      this[_compView_0$] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this.createAttr(this[_el_0$], 'enforceSpaceConstraints', '');
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0$]);
      this[_MaterialPopupComponent_0_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const$2 || (const$2 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions'))), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), core.bool._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'))), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0$].ref, this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(this[_el_0$]));
      let _text_1 = html.Text.new('\n            ');
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent13);
      this[_DeferredContentDirective_2_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_2], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8]);
      let _text_3 = html.Text.new('\n          ');
      this[_compView_0$].create(this[_MaterialPopupComponent_0_8], [const$4 || (const$4 = dart.constList([], dart.dynamic)), JSArrayOfObject().of([_text_1, this[_appEl_2], _text_3]), const$5 || (const$5 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_MaterialPopupComponent_0_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_visibleChange_0_0)));
      this.init([this[_appEl_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialPopupComponent_0_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupRef_0_10];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupHierarchy_0_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_subMenuSource = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.as(this.parentView)[_PopupSourceDirective_1_13];
      let local_item = this.parentView.parentView.locals[$_get]('$implicit');
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].autoDismiss = false;
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
      }
      let currVal_2 = _ctx.preferredSubMenuPositions;
      if (!core.identical(this[_expr_2$], currVal_2)) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_2;
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = local_subMenuSource;
      if (!core.identical(this[_expr_3$], currVal_3)) {
        this[_MaterialPopupComponent_0_8].source = currVal_3;
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = _ctx.isSubMenuVisible(model__menu__menu.MenuItem._check(local_item));
      if (!(this[_expr_4$] == currVal_4)) {
        this[_MaterialPopupComponent_0_8].visible = currVal_4;
        this[_expr_4$] = currVal_4;
      }
      if (firstCheck) {
        this[_DeferredContentDirective_2_9].preserveDimensions = true;
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0$];
      t$0 == null ? null : t$0.destroy();
      this[_DeferredContentDirective_2_9].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
    [_handle_visibleChange_0_0]($event) {
      let local_item = this.parentView.parentView.locals[$_get]('$implicit');
      this.ctx.onSubMenuVisibilityChanged(model__menu__menu.MenuItem._check(local_item), core.bool._check($event));
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupRef_0_10] = null;
    this[__PopupHierarchy_0_12] = null;
    this[_appEl_2] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_visibleChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12, () => ({
    __proto__: dart.getGetters(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__),
    [_PopupRef_0_10]: dart.fnType(dart.dynamic, []),
    [_PopupHierarchy_0_12]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupRef_0_10]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_2_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(core.bool)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent12 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent12, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  const _MaterialListComponent_0_5 = Symbol('_MaterialListComponent_0_5');
  const _MenuItemGroupsComponent_2_6 = Symbol('_MenuItemGroupsComponent_2_6');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13 = class _ViewMenuItemGroupsComponent13 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = 'item-group-list';
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialListComponent_0_5] = new material_list__material_list.MaterialListComponent.new();
      let _text_1 = html.Text.new('\n              ');
      this[_compView_2] = new material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this.createAttr(this[_el_2], 'autoFocus', '');
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_AutoFocusDirective_2_5] = new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_2]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), focus__focus.Focusable._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(focus__focus.Focusable), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.as(this.parentView)[_PopupRef_0_10]));
      this[_MenuItemGroupsComponent_2_6] = material_menu__menu_item_groups.MenuItemGroupsComponent.new(material_menu__menu_root.MenuRoot._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_menu__menu_root.MenuRoot), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_2].ref, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.as(this.parentView)[_MaterialPopupComponent_0_8], utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)));
      let _text_3 = html.Text.new('\n              ');
      this[_compView_2].create(this[_MenuItemGroupsComponent_2_6], []);
      let _text_4 = html.Text.new('\n            ');
      this[_compView_0$].create(this[_MaterialListComponent_0_5], [JSArrayOfNode().of([_text_1, this[_el_2], _text_4])]);
      let subscription_0 = this[_MenuItemGroupsComponent_2_6].selected.listen(this.eventHandler1(model__menu__menu.MenuItem, model__menu__menu.MenuItem, dart.bind(this.ctx, 'onSubMenuItemSelected')));
      this.init([this[_el_0$]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_menu__menu_item_groups.MenuItemGroupsComponent) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MenuItemGroupsComponent_2_6];
      }
      if (token === dart.wrapType(material_list__material_list.MaterialListComponent) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_MaterialListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_item = this.parentView.parentView.parentView.locals[$_get]('$implicit');
      changed = false;
      let currVal_0 = _ctx.menu.width;
      if (!core.identical(this[_expr_0$], currVal_0)) {
        this[_MaterialListComponent_0_5].width = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_AutoFocusDirective_2_5].autoFocus = true;
      }
      if (firstCheck) {
        this[_AutoFocusDirective_2_5].ngOnInit();
      }
      changed = false;
      let currVal_2 = dart.dload(local_item, 'subMenu');
      if (!core.identical(this[_expr_2$], currVal_2)) {
        this[_MenuItemGroupsComponent_2_6].menu = model__menu__menu.MenuModel._check(currVal_2);
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = _ctx.isKeyboardOpenedSubmenu;
      if (!core.identical(this[_expr_3$], currVal_3)) {
        this[_MenuItemGroupsComponent_2_6].activateFirstItemOnInit = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MenuItemGroupsComponent_2_6].ngOnInit();
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      this[_compView_2].detectChanges();
    }
    dirtyParentQueriesInternal() {
      material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.as(this.parentView.parentView.parentView.parentView.parentView.parentView)[_query_AutoFocusDirective_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
      let t$ = this[_compView_2];
      t$ == null ? null : t$.destroy();
      this[_AutoFocusDirective_2_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_2_6].ngOnDestroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MaterialListComponent_0_5] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_AutoFocusDirective_2_5] = null;
    this[_MenuItemGroupsComponent_2_6] = null;
    this[_expr_0$] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_0_5]: dart.fieldType(material_list__material_list.MaterialListComponent),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0),
    [_AutoFocusDirective_2_5]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_MenuItemGroupsComponent_2_6]: dart.fieldType(material_menu__menu_item_groups.MenuItemGroupsComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent13 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent13, AppViewAndintToAppViewOfMenuItemGroupsComponent());
  dart.defineLazy(material_menu__menu_item_groups$46template, {
    /*material_menu__menu_item_groups$46template.styles$MenuItemGroupsComponentHost*/get styles$MenuItemGroupsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MenuItemGroupsComponent_0_5 = Symbol('_MenuItemGroupsComponent_0_5');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0 = class _ViewMenuItemGroupsComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0$] = new material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MenuItemGroupsComponent_0_5] = material_menu__menu_item_groups.MenuItemGroupsComponent.new(material_menu__menu_root.MenuRoot._check(this.injectorGet(dart.wrapType(material_menu__menu_root.MenuRoot), this.viewData.parentIndex)), this[_compView_0$].ref, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null)));
      this[_compView_0$].create(this[_MenuItemGroupsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMenuItemGroupsComponent()).new(0, this, this.rootEl, this[_MenuItemGroupsComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_menu__menu_item_groups.MenuItemGroupsComponent) && 0 === nodeIndex) {
        return this[_MenuItemGroupsComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MenuItemGroupsComponent_0_5].ngOnInit();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
      this[_MenuItemGroupsComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MenuItemGroupsComponent_0_5] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0),
    [_MenuItemGroupsComponent_0_5]: dart.fieldType(material_menu__menu_item_groups.MenuItemGroupsComponent)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_menu__menu_item_groups$46template, {
    /*material_menu__menu_item_groups$46template.MenuItemGroupsComponentNgFactory*/get MenuItemGroupsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMenuItemGroupsComponent()).new('menu-item-groups', material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponentHost0, material_menu__menu_item_groups$46template._MenuItemGroupsComponentMetadata));
    },
    /*material_menu__menu_item_groups$46template._MenuItemGroupsComponentMetadata*/get _MenuItemGroupsComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_menu__menu_item_groups$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__menu_item_groups$46template.initReflector = function() {
    if (dart.test(material_menu__menu_item_groups$46template._visited)) {
      return;
    }
    material_menu__menu_item_groups$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__menu_item_groups.MenuItemGroupsComponent), material_menu__menu_item_groups$46template.MenuItemGroupsComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__focus_activable_item$46template.initReflector();
    focus__focus_trap$46template.initReflector();
    highlighted_text__highlighted_text$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_list__material_list$46template.initReflector();
    material_menu__material_menu$46template.initReflector();
    material_menu__menu_item_affix_list$46template.initReflector();
    material_menu__menu_root$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    material_tooltip__material_tooltip$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__a11y__active_item$46template.initReflector();
    model__action__delayed_action$46template.initReflector();
    model__menu__menu$46template.initReflector();
    model__menu__selectable_menu$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__ui__highlighted_text_model$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.fn(material_menu__menu_item_groups$46template.initReflector, VoidTovoid());
  dart.defineLazy(material_menu__menu_popup$46template, {
    /*material_menu__menu_popup$46template.styles$MenuPopupComponent*/get styles$MenuPopupComponent() {
      return dart.constList([material_menu__menu_popup$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_MenuItemGroupsComponent_1_0_isDirty = Symbol('_query_MenuItemGroupsComponent_1_0_isDirty');
  const _el_1$0 = Symbol('_el_1');
  const _compView_1$0 = Symbol('_compView_1');
  const _appEl_1$0 = Symbol('_appEl_1');
  const _MaterialPopupComponent_1_8 = Symbol('_MaterialPopupComponent_1_8');
  const __PopupRef_1_10 = Symbol('__PopupRef_1_10');
  const __PopupHierarchy_1_12 = Symbol('__PopupHierarchy_1_12');
  const _appEl_4$ = Symbol('_appEl_4');
  const _DeferredContentDirective_4_9 = Symbol('_DeferredContentDirective_4_9');
  const _expr_1$0 = Symbol('_expr_1');
  const _expr_2$0 = Symbol('_expr_2');
  const _expr_3$0 = Symbol('_expr_3');
  const _PopupRef_1_10 = Symbol('_PopupRef_1_10');
  const _PopupHierarchy_1_12 = Symbol('_PopupHierarchy_1_12');
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  const _handle_visibleChange_1_0 = Symbol('_handle_visibleChange_1_0');
  let const$10;
  const _MenuItemGroupsComponent_2_8 = Symbol('_MenuItemGroupsComponent_2_8');
  material_menu__menu_popup$46template.ViewMenuPopupComponent0 = class ViewMenuPopupComponent0 extends src__core__linker__app_view.AppView$(material_menu__menu_popup.MenuPopupComponent) {
    get [_PopupRef_1_10]() {
      if (this[__PopupRef_1_10] == null) {
        this[__PopupRef_1_10] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_1_8]);
      }
      return this[__PopupRef_1_10];
    }
    get [_PopupHierarchy_1_12]() {
      if (this[__PopupHierarchy_1_12] == null) {
        this[__PopupHierarchy_1_12] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_1_8]);
      }
      return this[__PopupHierarchy_1_12];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new('\n');
      parentRenderNode[$append](_text_0);
      this[_compView_1$0] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 1);
      this[_el_1$0] = this[_compView_1$0].rootEl;
      parentRenderNode[$append](this[_el_1$0]);
      this.createAttr(this[_el_1$0], 'enforceSpaceConstraints', '');
      this.addShimC(html.HtmlElement._check(this[_el_1$0]));
      this[_appEl_1$0] = new src__core__linker__view_container.ViewContainer.new(1, null, this, this[_el_1$0]);
      this[_MaterialPopupComponent_1_8] = new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$6 || (const$6 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions'))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_1$0].ref, this[_appEl_1$0], new src__core__linker__element_ref.ElementRef.new(this[_el_1$0]));
      let _text_2 = html.Text.new('\n  ');
      let _text_3 = html.Text.new('\n  ');
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_4$] = new src__core__linker__view_container.ViewContainer.new(4, 1, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4$], material_menu__menu_popup$46template.viewFactory_MenuPopupComponent1);
      this[_DeferredContentDirective_4_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_4$], _TemplateRef_4_8, this[_MaterialPopupComponent_1_8]);
      let _text_5 = html.Text.new('\n');
      this[_compView_1$0].create(this[_MaterialPopupComponent_1_8], [const$8 || (const$8 = dart.constList([], dart.dynamic)), (() => {
          let _ = [_text_2];
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](0)));
          _[$addAll]([_text_3, this[_appEl_4$], _text_5]);
          return _;
        })(), const$9 || (const$9 = dart.constList([], dart.dynamic))]);
      let _text_6 = html.Text.new('\n');
      parentRenderNode[$append](_text_6);
      let subscription_0 = this[_MaterialPopupComponent_1_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_visibleChange_1_0)));
      this.init(const$10 || (const$10 = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_MaterialPopupComponent_1_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_PopupRef_1_10];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_PopupHierarchy_1_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialPopupComponent_1_8].enforceSpaceConstraints = true;
      }
      let currVal_1 = _ctx.preferredPositions;
      if (!core.identical(this[_expr_1$0], currVal_1)) {
        this[_MaterialPopupComponent_1_8].preferredPositions = currVal_1;
        this[_expr_1$0] = currVal_1;
      }
      let currVal_2 = _ctx.popupSource;
      if (!core.identical(this[_expr_2$0], currVal_2)) {
        this[_MaterialPopupComponent_1_8].source = currVal_2;
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = _ctx.isExpanded;
      if (!(this[_expr_3$0] == currVal_3)) {
        this[_MaterialPopupComponent_1_8].visible = currVal_3;
        this[_expr_3$0] = currVal_3;
      }
      if (firstCheck) {
        this[_DeferredContentDirective_4_9].preserveDimensions = true;
      }
      this[_appEl_1$0].detectChangesInNestedViews();
      this[_appEl_4$].detectChangesInNestedViews();
      if (dart.test(this[_query_MenuItemGroupsComponent_1_0_isDirty])) {
        this.ctx.menuItemGroups = dart.test(this[_appEl_4$].mapNestedViews(material_menu__menu_item_groups.MenuItemGroupsComponent, material_menu__menu_popup$46template._ViewMenuPopupComponent1, dart.fn(nestedView => JSArrayOfMenuItemGroupsComponent().of([nestedView[_MenuItemGroupsComponent_2_8]]), _ViewMenuPopupComponent1ToListOfMenuItemGroupsComponent()))[$isNotEmpty]) ? this[_appEl_4$].mapNestedViews(material_menu__menu_item_groups.MenuItemGroupsComponent, material_menu__menu_popup$46template._ViewMenuPopupComponent1, dart.fn(nestedView => JSArrayOfMenuItemGroupsComponent().of([nestedView[_MenuItemGroupsComponent_2_8]]), _ViewMenuPopupComponent1ToListOfMenuItemGroupsComponent()))[$first] : null;
        this[_query_MenuItemGroupsComponent_1_0_isDirty] = false;
      }
      this[_compView_1$0].detectHostChanges(firstCheck);
      this[_compView_1$0].detectChanges();
      if (firstCheck) {
        this[_MaterialPopupComponent_1_8].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_1$0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_4$];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_1$0];
      t$0 == null ? null : t$0.destroy();
      this[_DeferredContentDirective_4_9].ngOnDestroy();
      this[_MaterialPopupComponent_1_8].ngOnDestroy();
    }
    [_handle_visibleChange_1_0]($event) {
      this.ctx.isExpanded = $event;
    }
  };
  (material_menu__menu_popup$46template.ViewMenuPopupComponent0.new = function(parentView, parentIndex) {
    this[_query_MenuItemGroupsComponent_1_0_isDirty] = true;
    this[_el_1$0] = null;
    this[_compView_1$0] = null;
    this[_appEl_1$0] = null;
    this[_MaterialPopupComponent_1_8] = null;
    this[__PopupRef_1_10] = null;
    this[__PopupHierarchy_1_12] = null;
    this[_appEl_4$] = null;
    this[_DeferredContentDirective_4_9] = null;
    this[_expr_1$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    material_menu__menu_popup$46template.ViewMenuPopupComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('menu-popup'));
    let t = material_menu__menu_popup$46template.ViewMenuPopupComponent0._renderType;
    t == null ? material_menu__menu_popup$46template.ViewMenuPopupComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_menu__menu_popup$46template.styles$MenuPopupComponent) : t;
    this.setupComponentType(material_menu__menu_popup$46template.ViewMenuPopupComponent0._renderType);
  }).prototype = material_menu__menu_popup$46template.ViewMenuPopupComponent0.prototype;
  dart.addTypeTests(material_menu__menu_popup$46template.ViewMenuPopupComponent0);
  dart.setMethodSignature(material_menu__menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getMethods(material_menu__menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_popup.MenuPopupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_visibleChange_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_menu__menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getGetters(material_menu__menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    [_PopupRef_1_10]: dart.fnType(dart.dynamic, []),
    [_PopupHierarchy_1_12]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_menu__menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getFields(material_menu__menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    [_query_MenuItemGroupsComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_1$0]: dart.fieldType(html.Element),
    [_compView_1$0]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_1$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_1_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupRef_1_10]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_1_12]: dart.fieldType(dart.dynamic),
    [_appEl_4$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_4_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_1$0]: dart.fieldType(dart.dynamic),
    [_expr_2$0]: dart.fieldType(dart.dynamic),
    [_expr_3$0]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_menu__menu_popup$46template.ViewMenuPopupComponent0, {
    /*material_menu__menu_popup$46template.ViewMenuPopupComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_menu__menu_popup$46template.viewFactory_MenuPopupComponent0 = function(parentView, parentIndex) {
    return new material_menu__menu_popup$46template.ViewMenuPopupComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_popup$46template.viewFactory_MenuPopupComponent0, AppViewAndintToAppViewOfMenuPopupComponent());
  const _el_0$0 = Symbol('_el_0');
  const _compView_0$0 = Symbol('_compView_0');
  const _MaterialListComponent_0_5$ = Symbol('_MaterialListComponent_0_5');
  const _el_2$ = Symbol('_el_2');
  const _compView_2$ = Symbol('_compView_2');
  const _AutoFocusDirective_2_5$ = Symbol('_AutoFocusDirective_2_5');
  const _MenuRootDirective_2_6 = Symbol('_MenuRootDirective_2_6');
  const _MenuRoot_2_7 = Symbol('_MenuRoot_2_7');
  const _expr_0$0 = Symbol('_expr_0');
  material_menu__menu_popup$46template._ViewMenuPopupComponent1 = class _ViewMenuPopupComponent1 extends src__core__linker__app_view.AppView$(material_menu__menu_popup.MenuPopupComponent) {
    build() {
      this[_compView_0$0] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootEl;
      this[_el_0$0].className = 'item-group-list';
      this.addShimC(html.HtmlElement._check(this[_el_0$0]));
      this[_MaterialListComponent_0_5$] = new material_list__material_list.MaterialListComponent.new();
      let _text_1 = html.Text.new('\n    ');
      this[_compView_2$] = new material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 2);
      this[_el_2$] = this[_compView_2$].rootEl;
      this.createAttr(this[_el_2$], 'autoFocus', '');
      this.createAttr(this[_el_2$], 'menu-root', '');
      this.createAttr(this[_el_2$], 'preventCloseOnPressLeft', '');
      this.addShimC(html.HtmlElement._check(this[_el_2$]));
      this[_AutoFocusDirective_2_5$] = new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_2$]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), focus__focus.Focusable._check(this.parentView.parentView.injectorGet(dart.wrapType(focus__focus.Focusable), this.parentView.viewData.parentIndex, null)), laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(material_menu__menu_popup$46template.ViewMenuPopupComponent0.as(this.parentView)[_PopupRef_1_10]));
      this[_MenuRootDirective_2_6] = new material_menu__menu_root.MenuRootDirective.new(material_menu__menu_popup$46template.ViewMenuPopupComponent0.as(this.parentView)[_MaterialPopupComponent_1_8]);
      this[_MenuRoot_2_7] = this[_MenuRootDirective_2_6];
      this[_MenuItemGroupsComponent_2_8] = material_menu__menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRoot_2_7], this[_compView_2$].ref, material_menu__menu_popup$46template.ViewMenuPopupComponent0.as(this.parentView)[_MaterialPopupComponent_1_8], utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.viewData.parentIndex, null)));
      let _text_3 = html.Text.new('\n    ');
      this[_compView_2$].create(this[_MenuItemGroupsComponent_2_8], []);
      let _text_4 = html.Text.new('\n  ');
      this[_compView_0$0].create(this[_MaterialListComponent_0_5$], [JSArrayOfNode().of([_text_1, this[_el_2$], _text_4])]);
      this.init0(this[_el_0$0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_menu__menu_root.MenuRootDirective) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MenuRootDirective_2_6];
      }
      if (token === dart.wrapType(material_menu__menu_root.MenuRoot) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MenuRoot_2_7];
      }
      if (token === dart.wrapType(material_menu__menu_item_groups.MenuItemGroupsComponent) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MenuItemGroupsComponent_2_8];
      }
      if (token === dart.wrapType(material_list__material_list.MaterialListComponent) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_MaterialListComponent_0_5$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.width;
      if (!core.identical(this[_expr_0$0], currVal_0)) {
        this[_MaterialListComponent_0_5$].width = currVal_0;
        changed = true;
        this[_expr_0$0] = currVal_0;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_AutoFocusDirective_2_5$].autoFocus = true;
      }
      if (firstCheck) {
        this[_AutoFocusDirective_2_5$].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MenuItemGroupsComponent_2_8].preventCloseOnPressLeft = '';
        changed = true;
      }
      let currVal_2 = _ctx.menu;
      if (!core.identical(this[_expr_2$0], currVal_2)) {
        this[_MenuItemGroupsComponent_2_8].menu = currVal_2;
        changed = true;
        this[_expr_2$0] = currVal_2;
      }
      if (changed) {
        this[_compView_2$].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MenuItemGroupsComponent_2_8].ngOnInit();
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
      this[_compView_2$].detectChanges();
    }
    dirtyParentQueriesInternal() {
      material_menu__menu_popup$46template.ViewMenuPopupComponent0.as(this.parentView)[_query_MenuItemGroupsComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_2$];
      t$ == null ? null : t$.destroy();
      this[_AutoFocusDirective_2_5$].ngOnDestroy();
      this[_MenuItemGroupsComponent_2_8].ngOnDestroy();
    }
  };
  (material_menu__menu_popup$46template._ViewMenuPopupComponent1.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_compView_0$0] = null;
    this[_MaterialListComponent_0_5$] = null;
    this[_el_2$] = null;
    this[_compView_2$] = null;
    this[_AutoFocusDirective_2_5$] = null;
    this[_MenuRootDirective_2_6] = null;
    this[_MenuRoot_2_7] = null;
    this[_MenuItemGroupsComponent_2_8] = null;
    this[_expr_0$0] = null;
    this[_expr_2$0] = null;
    material_menu__menu_popup$46template._ViewMenuPopupComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_popup$46template.ViewMenuPopupComponent0._renderType;
  }).prototype = material_menu__menu_popup$46template._ViewMenuPopupComponent1.prototype;
  dart.addTypeTests(material_menu__menu_popup$46template._ViewMenuPopupComponent1);
  dart.setMethodSignature(material_menu__menu_popup$46template._ViewMenuPopupComponent1, () => ({
    __proto__: dart.getMethods(material_menu__menu_popup$46template._ViewMenuPopupComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_popup.MenuPopupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_popup$46template._ViewMenuPopupComponent1, () => ({
    __proto__: dart.getFields(material_menu__menu_popup$46template._ViewMenuPopupComponent1.__proto__),
    [_el_0$0]: dart.fieldType(html.Element),
    [_compView_0$0]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_0_5$]: dart.fieldType(material_list__material_list.MaterialListComponent),
    [_el_2$]: dart.fieldType(html.Element),
    [_compView_2$]: dart.fieldType(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0),
    [_AutoFocusDirective_2_5$]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_MenuRootDirective_2_6]: dart.fieldType(material_menu__menu_root.MenuRootDirective),
    [_MenuRoot_2_7]: dart.fieldType(material_menu__menu_root.MenuRootDirective),
    [_MenuItemGroupsComponent_2_8]: dart.fieldType(material_menu__menu_item_groups.MenuItemGroupsComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_2$0]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_popup$46template.viewFactory_MenuPopupComponent1 = function(parentView, parentIndex) {
    return new material_menu__menu_popup$46template._ViewMenuPopupComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_popup$46template.viewFactory_MenuPopupComponent1, AppViewAndintToAppViewOfMenuPopupComponent());
  dart.defineLazy(material_menu__menu_popup$46template, {
    /*material_menu__menu_popup$46template.styles$MenuPopupComponentHost*/get styles$MenuPopupComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MenuPopupComponent_0_5$ = Symbol('_MenuPopupComponent_0_5');
  material_menu__menu_popup$46template._ViewMenuPopupComponentHost0 = class _ViewMenuPopupComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0$0] = new material_menu__menu_popup$46template.ViewMenuPopupComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_MenuPopupComponent_0_5$] = new material_menu__menu_popup.MenuPopupComponent.new();
      this[_compView_0$0].create(this[_MenuPopupComponent_0_5$], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMenuPopupComponent()).new(0, this, this.rootEl, this[_MenuPopupComponent_0_5$]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_menu__menu_popup.MenuPopupComponent) && 0 === nodeIndex) {
        return this[_MenuPopupComponent_0_5$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
    }
  };
  (material_menu__menu_popup$46template._ViewMenuPopupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_MenuPopupComponent_0_5$] = null;
    material_menu__menu_popup$46template._ViewMenuPopupComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__menu_popup$46template._ViewMenuPopupComponentHost0.prototype;
  dart.addTypeTests(material_menu__menu_popup$46template._ViewMenuPopupComponentHost0);
  dart.setMethodSignature(material_menu__menu_popup$46template._ViewMenuPopupComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__menu_popup$46template._ViewMenuPopupComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_popup$46template._ViewMenuPopupComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__menu_popup$46template._ViewMenuPopupComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(material_menu__menu_popup$46template.ViewMenuPopupComponent0),
    [_MenuPopupComponent_0_5$]: dart.fieldType(material_menu__menu_popup.MenuPopupComponent)
  }));
  material_menu__menu_popup$46template.viewFactory_MenuPopupComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__menu_popup$46template._ViewMenuPopupComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_menu__menu_popup$46template.viewFactory_MenuPopupComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_menu__menu_popup$46template, {
    /*material_menu__menu_popup$46template.MenuPopupComponentNgFactory*/get MenuPopupComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMenuPopupComponent()).new('menu-popup', material_menu__menu_popup$46template.viewFactory_MenuPopupComponentHost0, material_menu__menu_popup$46template._MenuPopupComponentMetadata));
    },
    /*material_menu__menu_popup$46template._MenuPopupComponentMetadata*/get _MenuPopupComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_menu__menu_popup$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__menu_popup$46template.initReflector = function() {
    if (dart.test(material_menu__menu_popup$46template._visited)) {
      return;
    }
    material_menu__menu_popup$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__menu_popup.MenuPopupComponent), material_menu__menu_popup$46template.MenuPopupComponentNgFactory);
    angular$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_list__material_list$46template.initReflector();
    material_menu__menu_item_groups$46template.initReflector();
    material_menu__menu_popup_wrapper$46template.initReflector();
    material_menu__menu_root$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
    model__menu__menu$46template.initReflector();
  };
  dart.fn(material_menu__menu_popup$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_menu/material_menu.template.ddc", {
    "package:angular_components/material_menu/material_menu.template.dart": material_menu__material_menu$46template,
    "package:angular_components/material_menu/menu_item_groups.template.dart": material_menu__menu_item_groups$46template,
    "package:angular_components/material_menu/menu_popup.template.dart": material_menu__menu_popup$46template
  }, '{"version":3,"sourceRoot":"","sources":["menu_popup.template.dart","menu_item_groups.template.dart","material_menu.template.dart"],"names":[],"mappings":"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","file":"material_menu.template.ddc.js"}');
  // Exports:
  return {
    material_menu__material_menu$46template: material_menu__material_menu$46template,
    material_menu__menu_item_groups$46template: material_menu__menu_item_groups$46template,
    material_menu__menu_popup$46template: material_menu__menu_popup$46template
  };
});

//# sourceMappingURL=material_menu.template.ddc.js.map
