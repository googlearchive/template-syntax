define(['dart_sdk', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular_components/src/laminate/popup/popup_source', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/focus/focus', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/material_button/material_button', 'packages/quiver/core', 'packages/angular_components/model/menu/menu', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular_components/model/action/delayed_action', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/menu/selectable_menu', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/menu/menu_item_affix', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/a11y/active_item', 'packages/angular/src/core/change_detection/change_detector_ref', 'packages/angular_components/focus/focus_activable_item', 'packages/angular_components/material_menu/menu_root', 'packages/angular_components/mixins/material_dropdown_base'], function(dart_sdk, focusable_mixin, menu_popup_wrapper, popup_source, disposer, focus, lifecycle_hooks, material_button, core, menu, highlighted_text_model, delayed_action, properties, id_generator, selectable_menu, selectable, menu_item_affix, selection_model, alignment, active_item, change_detector_ref, focus_activable_item, menu_root, material_dropdown_base) {
  'use strict';
  const core$ = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mixins__focusable_mixin = focusable_mixin.mixins__focusable_mixin;
  const material_menu__menu_popup_wrapper = menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const src__laminate__popup__popup_source = popup_source.src__laminate__popup__popup_source;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const focus__focus = focus.focus__focus;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const material_button__material_button = material_button.material_button__material_button;
  const core$0 = core.core;
  const model__menu__menu = menu.model__menu__menu;
  const model__ui__highlighted_text_model = highlighted_text_model.model__ui__highlighted_text_model;
  const model__action__delayed_action = delayed_action.model__action__delayed_action;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const model__menu__selectable_menu = selectable_menu.model__menu__selectable_menu;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const model__menu__menu_item_affix = menu_item_affix.model__menu__menu_item_affix;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const model__a11y__active_item = active_item.model__a11y__active_item;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const focus__focus_activable_item = focus_activable_item.focus__focus_activable_item;
  const material_menu__menu_root = menu_root.material_menu__menu_root;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const _root = Object.create(null);
  const material_menu__menu_popup = Object.create(_root);
  const material_menu__material_menu = Object.create(_root);
  const material_menu__menu_item_groups = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $target = dartx.target;
  const $attributes = dartx.attributes;
  const $parent = dartx.parent;
  const $toList = dartx.toList;
  const $any = dartx.any;
  let StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core$.Null)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core$.Null, [core$.bool])))();
  let OptionalOfString = () => (OptionalOfString = dart.constFn(core$0.Optional$(core$.String)))();
  let StreamControllerOfMenuItem = () => (StreamControllerOfMenuItem = dart.constFn(async.StreamController$(model__menu__menu.MenuItem)))();
  let ListOfHighlightedTextSegment = () => (ListOfHighlightedTextSegment = dart.constFn(core$.List$(model__ui__highlighted_text_model.HighlightedTextSegment)))();
  let IdentityMapOfString$ListOfHighlightedTextSegment = () => (IdentityMapOfString$ListOfHighlightedTextSegment = dart.constFn(_js_helper.IdentityMap$(core$.String, ListOfHighlightedTextSegment())))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core$.Null, [dart.dynamic])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core$.String)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core$.bool, [core$.String])))();
  let MenuItemAffixTobool = () => (MenuItemAffixTobool = dart.constFn(dart.fnType(core$.bool, [model__menu__menu_item_affix.MenuItemAffix])))();
  let ListOfFocusableActivateItem = () => (ListOfFocusableActivateItem = dart.constFn(core$.List$(focus__focus_activable_item.FocusableActivateItem)))();
  let MapOfString$ListOfHighlightedTextSegment = () => (MapOfString$ListOfHighlightedTextSegment = dart.constFn(core$.Map$(core$.String, ListOfHighlightedTextSegment())))();
  const Object_FocusableMixin$ = class Object_FocusableMixin extends core$.Object {};
  (Object_FocusableMixin$.new = function() {
    mixins__focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$.prototype;
  dart.mixinMembers(Object_FocusableMixin$, mixins__focusable_mixin.FocusableMixin);
  const Object_MenuPopupWrapper$ = class Object_MenuPopupWrapper extends Object_FocusableMixin$ {};
  (Object_MenuPopupWrapper$.new = function() {
    material_menu__menu_popup_wrapper.MenuPopupWrapper.new.call(this);
    Object_MenuPopupWrapper$.__proto__.new.call(this);
  }).prototype = Object_MenuPopupWrapper$.prototype;
  dart.mixinMembers(Object_MenuPopupWrapper$, material_menu__menu_popup_wrapper.MenuPopupWrapper);
  material_menu__menu_popup.MenuPopupComponent = class MenuPopupComponent extends Object_MenuPopupWrapper$ {
    get popupSource() {
      return this[popupSource];
    }
    set popupSource(value) {
      this[popupSource] = value;
    }
    set menuItemGroups(groups) {
      this.focusable = groups;
    }
  };
  (material_menu__menu_popup.MenuPopupComponent.new = function() {
    this[popupSource] = null;
    material_menu__menu_popup.MenuPopupComponent.__proto__.new.call(this);
  }).prototype = material_menu__menu_popup.MenuPopupComponent.prototype;
  dart.addTypeTests(material_menu__menu_popup.MenuPopupComponent);
  const popupSource = Symbol("MenuPopupComponent.popupSource");
  dart.setSetterSignature(material_menu__menu_popup.MenuPopupComponent, () => ({
    __proto__: dart.getSetters(material_menu__menu_popup.MenuPopupComponent.__proto__),
    menuItemGroups: dart.fnType(dart.void, [material_menu__menu_item_groups.MenuItemGroupsComponent])
  }));
  dart.setFieldSignature(material_menu__menu_popup.MenuPopupComponent, () => ({
    __proto__: dart.getFields(material_menu__menu_popup.MenuPopupComponent.__proto__),
    popupSource: dart.fieldType(src__laminate__popup__popup_source.PopupSource)
  }));
  const _onTrigger = Symbol('_onTrigger');
  const _disposer = Symbol('_disposer');
  const _button = Symbol('_button');
  const _menuPopup = Symbol('_menuPopup');
  const _focusTarget = Symbol('_focusTarget');
  const Object_FocusableMixin$$ = class Object_FocusableMixin$0 extends core$.Object {};
  (Object_FocusableMixin$$.new = function() {
    mixins__focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$$.prototype;
  dart.mixinMembers(Object_FocusableMixin$$, mixins__focusable_mixin.FocusableMixin);
  const Object_MenuPopupWrapper$$ = class Object_MenuPopupWrapper$0 extends Object_FocusableMixin$$ {};
  (Object_MenuPopupWrapper$$.new = function() {
    material_menu__menu_popup_wrapper.MenuPopupWrapper.new.call(this);
    Object_MenuPopupWrapper$$.__proto__.new.call(this);
  }).prototype = Object_MenuPopupWrapper$$.prototype;
  dart.mixinMembers(Object_MenuPopupWrapper$$, material_menu__menu_popup_wrapper.MenuPopupWrapper);
  material_menu__material_menu.MaterialMenuComponent = class MaterialMenuComponent extends Object_MenuPopupWrapper$$ {
    get buttonText() {
      return this[buttonText];
    }
    set buttonText(value) {
      this[buttonText] = value;
    }
    get closeMenuOnClick() {
      return this[closeMenuOnClick];
    }
    set closeMenuOnClick(value) {
      this[closeMenuOnClick] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get ariaLabel() {
      return this[ariaLabel];
    }
    set ariaLabel(value) {
      this[ariaLabel] = value;
    }
    get onTrigger() {
      return this[_onTrigger].stream;
    }
    get tooltipText() {
      let t = this.menu;
      return t == null ? null : t.tooltipText;
    }
    get hasTooltip() {
      let t = this.menu;
      let l = t == null ? null : t.hasTooltip;
      return l != null ? l : false;
    }
    get hasSubmenu() {
      let t = this.menu;
      let t$ = t == null ? null : t.itemGroups;
      let l = t$ == null ? null : t$[$isNotEmpty];
      return l != null ? l : false;
    }
    get hasIcon() {
      return (() => {
        let t = this.menu;
        return t == null ? null : t.uiIcon;
      })() != null ? 'true' : null;
    }
    handleButtonClick() {
      this.isExpanded = dart.test(this.closeMenuOnClick) ? !dart.test(this.isExpanded) : true;
      this[_onTrigger].add(null);
    }
    set button(b) {
      this[_button] = b;
    }
    set menuPopup(m) {
      this[_menuPopup] = m;
    }
    get [_focusTarget]() {
      return focus__focus.Focusable._check(dart.test(this.disabled) ? null : dart.test(this.isExpanded) ? this[_menuPopup] : this[_button]);
    }
    ngAfterViewInit() {
      this.focusable = this[_focusTarget];
      this[_disposer].addStreamSubscription(core$.bool, this.isExpandedChange.listen(dart.fn(_ => {
        this.focusable = this[_focusTarget];
      }, boolToNull())));
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (material_menu__material_menu.MaterialMenuComponent.new = function() {
    this[_onTrigger] = StreamControllerOfNull().new();
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[buttonText] = null;
    this[closeMenuOnClick] = false;
    this[disabled] = false;
    this[ariaLabel] = null;
    this[_button] = null;
    this[_menuPopup] = null;
    material_menu__material_menu.MaterialMenuComponent.__proto__.new.call(this);
  }).prototype = material_menu__material_menu.MaterialMenuComponent.prototype;
  dart.addTypeTests(material_menu__material_menu.MaterialMenuComponent);
  const buttonText = Symbol("MaterialMenuComponent.buttonText");
  const closeMenuOnClick = Symbol("MaterialMenuComponent.closeMenuOnClick");
  const disabled = Symbol("MaterialMenuComponent.disabled");
  const ariaLabel = Symbol("MaterialMenuComponent.ariaLabel");
  material_menu__material_menu.MaterialMenuComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_menu__material_menu.MaterialMenuComponent, () => ({
    __proto__: dart.getMethods(material_menu__material_menu.MaterialMenuComponent.__proto__),
    handleButtonClick: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__material_menu.MaterialMenuComponent, () => ({
    __proto__: dart.getGetters(material_menu__material_menu.MaterialMenuComponent.__proto__),
    onTrigger: dart.fnType(async.Stream$(core$.Null), []),
    tooltipText: dart.fnType(core$.String, []),
    hasTooltip: dart.fnType(core$.bool, []),
    hasSubmenu: dart.fnType(core$.bool, []),
    hasIcon: dart.fnType(core$.String, []),
    [_focusTarget]: dart.fnType(focus__focus.Focusable, [])
  }));
  dart.setSetterSignature(material_menu__material_menu.MaterialMenuComponent, () => ({
    __proto__: dart.getSetters(material_menu__material_menu.MaterialMenuComponent.__proto__),
    button: dart.fnType(dart.void, [material_button__material_button.MaterialButtonComponent]),
    menuPopup: dart.fnType(dart.void, [material_menu__menu_popup.MenuPopupComponent])
  }));
  dart.setFieldSignature(material_menu__material_menu.MaterialMenuComponent, () => ({
    __proto__: dart.getFields(material_menu__material_menu.MaterialMenuComponent.__proto__),
    [_onTrigger]: dart.finalFieldType(StreamControllerOfNull()),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    buttonText: dart.fieldType(core$.String),
    closeMenuOnClick: dart.fieldType(core$.bool),
    disabled: dart.fieldType(core$.bool),
    ariaLabel: dart.fieldType(core$.String),
    [_button]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_menuPopup]: dart.fieldType(material_menu__menu_popup.MenuPopupComponent)
  }));
  const _dropdownHandle = Symbol('_dropdownHandle');
  const _menuRoot = Symbol('_menuRoot');
  const _changeDetector = Symbol('_changeDetector');
  const _idGenerator = Symbol('_idGenerator');
  const _closeOnPressLeft = Symbol('_closeOnPressLeft');
  const _isMouseDriven = Symbol('_isMouseDriven');
  const _activeModel = Symbol('_activeModel');
  const _activeModelChange = Symbol('_activeModelChange');
  const _activateFirstItemOnInit = Symbol('_activateFirstItemOnInit');
  const _subMenuOpener = Symbol('_subMenuOpener');
  const _hoveredItem = Symbol('_hoveredItem');
  const _submenuParent = Symbol('_submenuParent');
  const _autoFocusItemId = Symbol('_autoFocusItemId');
  let const$;
  const _selected = Symbol('_selected');
  const _highlight = Symbol('_highlight');
  const _highlightCache = Symbol('_highlightCache');
  const _openSubMenuOnHover = Symbol('_openSubMenuOnHover');
  const _itemForTarget = Symbol('_itemForTarget');
  const _activeHoveredItemIfNone = Symbol('_activeHoveredItemIfNone');
  const _focusActiveItem = Symbol('_focusActiveItem');
  const _openSubMenu = Symbol('_openSubMenu');
  const _triggerAffixShortcutActions = Symbol('_triggerAffixShortcutActions');
  const _createActiveMenuModelIfNone = Symbol('_createActiveMenuModelIfNone');
  material_menu__menu_item_groups.MenuItemGroupsComponent = class MenuItemGroupsComponent extends core$.Object {
    get menu() {
      return this[menu$];
    }
    set menu(value) {
      this[menu$] = value;
    }
    get focusableItems() {
      return this[focusableItems];
    }
    set focusableItems(value) {
      this[focusableItems] = value;
    }
    get preferredSubMenuPositions() {
      return material_menu__menu_item_groups._preferredSubMenuPositions;
    }
    get tooltipPositions() {
      return material_menu__menu_item_groups._tooltipPositions;
    }
    get width() {
      let t = this.menu;
      let l = t == null ? null : t.width;
      return l != null ? l : 0;
    }
    set preventCloseOnPressLeft(value) {
      this[_closeOnPressLeft] = !dart.test(utils__angular__properties__properties.getBool(value));
    }
    get isMouseDriven() {
      return this[_isMouseDriven];
    }
    set activeModel(v) {
      this[_activeModel] = v;
      let t = this[_activeModelChange];
      t == null ? null : t.cancel();
      this[_activeModelChange] = v.modelChanged.listen(dart.fn(_ => {
        this[_changeDetector].markForCheck();
      }, dynamicToNull()));
    }
    get activeModel() {
      return this[_activeModel];
    }
    set activateFirstItemOnInit(activate) {
      this[_activateFirstItemOnInit] = utils__angular__properties__properties.getBool(activate);
    }
    get isKeyboardOpenedSubmenu() {
      return this[isKeyboardOpenedSubmenu];
    }
    set isKeyboardOpenedSubmenu(value) {
      this[isKeyboardOpenedSubmenu] = value;
    }
    get selected() {
      return this[_selected].stream;
    }
    get highlighter() {
      return this[highlighter];
    }
    set highlighter(value) {
      this[highlighter] = value;
    }
    set highlight(value) {
      this[_highlight] = value;
      this[_highlightCache] = new (IdentityMapOfString$ListOfHighlightedTextSegment()).new();
    }
    get hasHighlight() {
      let t = this[_highlight];
      let l = t == null ? null : t[$isNotEmpty];
      return l != null ? l : false;
    }
    static new(menuRoot, changeDetector, dropdownHandle, idGenerator) {
      return new material_menu__menu_item_groups.MenuItemGroupsComponent.__(dropdownHandle, menuRoot, changeDetector, idGenerator != null ? idGenerator : new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID());
    }
    highlighted(input) {
      if (dart.test(this[_highlightCache][$containsKey](input))) return this[_highlightCache][$_get](input);
      return this[_highlightCache][$_set](input, this.highlighter.highlight(input, JSArrayOfString().of([this[_highlight]])));
    }
    onMouseOver(event) {
      this[_isMouseDriven] = true;
      let item = this[_itemForTarget](event[$target]);
      if (item == null) return;
      this.activeModel.activate(null);
      this[_hoveredItem] = item;
      this[_subMenuOpener].start();
    }
    onMouseOut(event) {
      this[_isMouseDriven] = false;
      let item = this[_itemForTarget](event[$target]);
      if (item == null) return;
      if (dart.equals(item, this[_hoveredItem])) {
        this[_hoveredItem] = null;
      }
      this[_subMenuOpener].cancel();
    }
    onSubMenuItemSelected(item) {
      this[_selected].add(item);
    }
    select(item, group) {
      dart.dsend(item, 'nullAwareActionHandler');
      this[_selected].add(item);
      if (!model__menu__selectable_menu.MenuItemGroupWithSelection.is(group) || dart.test(model__menu__selectable_menu.MenuItemGroupWithSelection.as(group).shouldCloseMenuOnSelection)) {
        this[_menuRoot] == null ? null : this[_menuRoot].closeHierarchy();
      }
    }
    handleKeydown(event, opts) {
      let shouldPreventDefault = opts && 'shouldPreventDefault' in opts ? opts.shouldPreventDefault : true;
      this[_isMouseDriven] = false;
      if (event.keyCode === html.KeyCode.TAB) return;
      let keyCode = event.keyCode;
      let activeMenuItem = model__menu__menu.MenuItem.as(this.activeModel.activeItem);
      switch (keyCode) {
        case html.KeyCode.UP:
        {
          this[_activeHoveredItemIfNone]();
          this.activeModel.activatePrevious();
          this[_focusActiveItem]();
          break;
        }
        case html.KeyCode.DOWN:
        {
          this[_activeHoveredItemIfNone]();
          this.activeModel.activateNext();
          this[_focusActiveItem]();
          break;
        }
        case html.KeyCode.RIGHT:
        {
          if ((activeMenuItem == null ? null : activeMenuItem.hasSubMenu) === true) {
            this[_openSubMenu](model__menu__menu.MenuItem.as(this.activeModel.activeItem), {isOpenedByKeyboard: true});
          }
          break;
        }
        case html.KeyCode.LEFT:
        {
          if (dart.test(this[_closeOnPressLeft])) {
            this[_dropdownHandle].close();
          }
          break;
        }
        case html.KeyCode.ESC:
        {
          this[_dropdownHandle].close();
          break;
        }
        default:
        {
          if (!dart.test(this[_triggerAffixShortcutActions](activeMenuItem, keyCode))) {
            shouldPreventDefault = false;
          }
          break;
        }
      }
      if (dart.test(shouldPreventDefault)) event.preventDefault();
    }
    [_openSubMenu](item, opts) {
      let isOpenedByKeyboard = opts && 'isOpenedByKeyboard' in opts ? opts.isOpenedByKeyboard : false;
      if (!dart.test(item.enabled)) return;
      if (!dart.test(this.activeModel.isActive(item))) {
        this.activeModel.activate(item);
      }
      this.isKeyboardOpenedSubmenu = isOpenedByKeyboard;
      this[_submenuParent] = dart.test(item.hasSubMenu) ? item : null;
    }
    [_itemForTarget](target) {
      if (!html.Element.is(target)) return null;
      let element = html.Element.as(target);
      while (element != null) {
        if (element[$attributes][$_get]('role') === 'menuitem') {
          let group = this.menu.itemGroups[$_get](core$.int.parse(element[$attributes][$_get]('data-group-index')));
          let item = model__menu__menu.MenuItem._check(group._get(core$.int.parse(element[$attributes][$_get]('data-item-index'))));
          return item;
        }
        element = element[$parent];
      }
      return null;
    }
    onFocus(event) {
      let item = this[_itemForTarget](event[$target]);
      if (item == null) return;
      let t = this.activeModel;
      t == null ? null : t.activate(item);
    }
    handleSelectItemTrigger(item, group, event) {
      if (item == null || !dart.test(item.enabled)) return;
      if (dart.test(item.hasSubMenu)) {
        this[_openSubMenu](item, {isOpenedByKeyboard: html.KeyboardEvent.is(event)});
      } else {
        this.select(item, group);
      }
    }
    onSubMenuVisibilityChanged(item, visible) {
      if (!dart.test(visible) && dart.equals(item, this[_submenuParent])) {
        this[_submenuParent] = null;
        if (dart.test(this[_isMouseDriven])) return;
        this[_focusActiveItem]();
      }
    }
    toggleExpansionIfCollapsible(group) {
      if (dart.test(group.isCollapsible)) {
        group.isExpanded = !dart.test(group.isExpanded);
      }
    }
    ngOnInit() {
      this[_createActiveMenuModelIfNone]();
    }
    ngOnDestroy() {
      let t = this[_activeModelChange];
      t == null ? null : t.cancel();
      this[_activeModelChange] = null;
    }
    getSelectionModel(group) {
      return model__menu__selectable_menu.MenuItemGroupWithSelection.is(group) ? group.selectionModel : null;
    }
    getItemValue(item) {
      return model__menu__selectable_menu.SelectableMenuItem.is(item) ? item.value : null;
    }
    shouldSelectItemOnClick(item) {
      return model__menu__selectable_menu.SelectableMenuItem.is(item) && dart.test(item.shouldSelectOnItemClick);
    }
    isItemVisible(item) {
      return model__menu__selectable_menu.SelectableMenuItem.is(item) ? item.selectableState !== src__model__selection__interfaces__selectable.SelectableOption.Hidden : true;
    }
    isItemActive(item) {
      return dart.equals((() => {
        let t = this.activeModel;
        return t == null ? null : t.activeItem;
      })(), item);
    }
    hasAutoFocus(itemId) {
      return this[_autoFocusItemId].transform(core$.bool, dart.fn(id => id == itemId, StringTobool())).or(false);
    }
    isSubMenuVisible(item) {
      return dart.equals(item, this[_submenuParent]);
    }
    [_activeHoveredItemIfNone]() {
      if (this.activeModel.activeItem == null && this[_hoveredItem] != null) {
        this.activeModel.activate(this[_hoveredItem]);
      }
    }
    [_triggerAffixShortcutActions](item, keyCode) {
      if (item == null || !dart.test(item.enabled)) return false;
      let matching = item.itemSuffixes.where(dart.fn(suffix => suffix.hasShortcutKeyCode(keyCode), MenuItemAffixTobool()))[$toList]();
      for (let suffix of matching)
        suffix.triggerShortcutAction();
      if (dart.test(matching[$any](dart.fn(suffix => suffix.shouldCloseMenuOnTrigger, MenuItemAffixTobool())))) {
        this[_menuRoot].closeHierarchy();
      }
      return matching[$isNotEmpty];
    }
    [_createActiveMenuModelIfNone]() {
      if (this.menu != null && this.activeModel == null) {
        this.activeModel = new model__menu__menu.ActiveMenuItemModel.new(this[_idGenerator], {menu: this.menu, filterOutUnselectableItems: true});
        if (dart.test(this[_activateFirstItemOnInit])) {
          this[_autoFocusItemId] = new (OptionalOfString()).of(this.activeModel.id(this.activeModel.activeItem));
        } else {
          this.activeModel.activate(null);
        }
      }
    }
    [_focusActiveItem]() {
      if (this.activeModel.activeItem == null) return;
      for (let item of this.focusableItems) {
        if (item.key == this.activeModel.activeId) {
          item.focus();
          break;
        }
      }
    }
    focus() {
      this[_focusActiveItem]();
    }
    [_openSubMenuOnHover]() {
      this[_openSubMenu](this[_hoveredItem]);
      this[_changeDetector].markForCheck();
    }
  };
  (material_menu__menu_item_groups.MenuItemGroupsComponent.__ = function(dropdownHandle, menuRoot, changeDetector, idGenerator) {
    this[menu$] = null;
    this[focusableItems] = null;
    this[_closeOnPressLeft] = true;
    this[_isMouseDriven] = false;
    this[_activeModel] = null;
    this[_activeModelChange] = null;
    this[_activateFirstItemOnInit] = false;
    this[_subMenuOpener] = null;
    this[_hoveredItem] = null;
    this[_submenuParent] = null;
    this[_autoFocusItemId] = const$ || (const$ = dart.const(new (OptionalOfString()).absent()));
    this[isKeyboardOpenedSubmenu] = false;
    this[_selected] = StreamControllerOfMenuItem().broadcast();
    this[highlighter] = null;
    this[_highlight] = null;
    this[_highlightCache] = new (IdentityMapOfString$ListOfHighlightedTextSegment()).new();
    this[_dropdownHandle] = dropdownHandle;
    this[_menuRoot] = menuRoot;
    this[_changeDetector] = changeDetector;
    this[_idGenerator] = idGenerator;
    this[_subMenuOpener] = new model__action__delayed_action.DelayedAction.new(material_menu__menu_item_groups.MenuItemGroupsComponent._menuDelay, dart.bind(this, _openSubMenuOnHover));
  }).prototype = material_menu__menu_item_groups.MenuItemGroupsComponent.prototype;
  dart.addTypeTests(material_menu__menu_item_groups.MenuItemGroupsComponent);
  const menu$ = Symbol("MenuItemGroupsComponent.menu");
  const focusableItems = Symbol("MenuItemGroupsComponent.focusableItems");
  const isKeyboardOpenedSubmenu = Symbol("MenuItemGroupsComponent.isKeyboardOpenedSubmenu");
  const highlighter = Symbol("MenuItemGroupsComponent.highlighter");
  material_menu__menu_item_groups.MenuItemGroupsComponent[dart.implements] = () => [focus__focus.Focusable, src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_menu__menu_item_groups.MenuItemGroupsComponent, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups.MenuItemGroupsComponent.__proto__),
    highlighted: dart.fnType(core$.List$(model__ui__highlighted_text_model.HighlightedTextSegment), [core$.String]),
    onMouseOver: dart.fnType(dart.void, [html.MouseEvent]),
    onMouseOut: dart.fnType(dart.void, [html.MouseEvent]),
    onSubMenuItemSelected: dart.fnType(dart.void, [model__menu__menu.MenuItem]),
    select: dart.fnType(dart.void, [model__menu__menu.MenuItem, model__menu__menu.MenuItemGroup]),
    handleKeydown: dart.fnType(dart.void, [html.KeyboardEvent], {shouldPreventDefault: core$.bool}),
    [_openSubMenu]: dart.fnType(dart.void, [model__menu__menu.MenuItem], {isOpenedByKeyboard: core$.bool}),
    [_itemForTarget]: dart.fnType(model__menu__menu.MenuItem, [html.EventTarget]),
    onFocus: dart.fnType(dart.void, [html.FocusEvent]),
    handleSelectItemTrigger: dart.fnType(dart.void, [model__menu__menu.MenuItem, model__menu__menu.MenuItemGroup, html.UIEvent]),
    onSubMenuVisibilityChanged: dart.fnType(dart.void, [model__menu__menu.MenuItem, core$.bool]),
    toggleExpansionIfCollapsible: dart.fnType(dart.void, [model__menu__menu.MenuItemGroup]),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    getSelectionModel: dart.fnType(model__selection__selection_model.SelectionModel, [model__menu__menu.MenuItemGroup]),
    getItemValue: dart.fnType(dart.dynamic, [model__menu__menu.MenuItem]),
    shouldSelectItemOnClick: dart.fnType(core$.bool, [model__menu__menu.MenuItem]),
    isItemVisible: dart.fnType(core$.bool, [model__menu__menu.MenuItem]),
    isItemActive: dart.fnType(core$.bool, [model__menu__menu.MenuItem]),
    hasAutoFocus: dart.fnType(core$.bool, [core$.String]),
    isSubMenuVisible: dart.fnType(core$.bool, [model__menu__menu.MenuItem]),
    [_activeHoveredItemIfNone]: dart.fnType(dart.void, []),
    [_triggerAffixShortcutActions]: dart.fnType(core$.bool, [model__menu__menu.MenuItem, core$.int]),
    [_createActiveMenuModelIfNone]: dart.fnType(dart.void, []),
    [_focusActiveItem]: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    [_openSubMenuOnHover]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__menu_item_groups.MenuItemGroupsComponent, () => ({
    __proto__: dart.getGetters(material_menu__menu_item_groups.MenuItemGroupsComponent.__proto__),
    preferredSubMenuPositions: dart.fnType(core$.List$(laminate__enums__alignment.RelativePosition), []),
    tooltipPositions: dart.fnType(core$.List$(laminate__enums__alignment.RelativePosition), []),
    width: dart.fnType(core$.int, []),
    isMouseDriven: dart.fnType(core$.bool, []),
    activeModel: dart.fnType(model__a11y__active_item.ActiveItemModel, []),
    selected: dart.fnType(async.Stream$(model__menu__menu.MenuItem), []),
    hasHighlight: dart.fnType(core$.bool, [])
  }));
  dart.setSetterSignature(material_menu__menu_item_groups.MenuItemGroupsComponent, () => ({
    __proto__: dart.getSetters(material_menu__menu_item_groups.MenuItemGroupsComponent.__proto__),
    preventCloseOnPressLeft: dart.fnType(dart.void, [dart.dynamic]),
    activeModel: dart.fnType(dart.void, [model__a11y__active_item.ActiveItemModel]),
    activateFirstItemOnInit: dart.fnType(dart.void, [dart.dynamic]),
    highlight: dart.fnType(dart.void, [core$.String])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups.MenuItemGroupsComponent, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups.MenuItemGroupsComponent.__proto__),
    [_idGenerator]: dart.finalFieldType(utils__id_generator__id_generator.IdGenerator),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    menu: dart.fieldType(model__menu__menu.MenuModel),
    focusableItems: dart.fieldType(ListOfFocusableActivateItem()),
    [_closeOnPressLeft]: dart.fieldType(core$.bool),
    [_isMouseDriven]: dart.fieldType(core$.bool),
    [_activeModel]: dart.fieldType(model__a11y__active_item.ActiveItemModel),
    [_activeModelChange]: dart.fieldType(async.StreamSubscription),
    [_activateFirstItemOnInit]: dart.fieldType(core$.bool),
    [_menuRoot]: dart.finalFieldType(material_menu__menu_root.MenuRoot),
    [_dropdownHandle]: dart.fieldType(mixins__material_dropdown_base.DropdownHandle),
    [_subMenuOpener]: dart.fieldType(model__action__delayed_action.DelayedAction),
    [_hoveredItem]: dart.fieldType(model__menu__menu.MenuItem),
    [_submenuParent]: dart.fieldType(model__menu__menu.MenuItem),
    [_autoFocusItemId]: dart.fieldType(OptionalOfString()),
    isKeyboardOpenedSubmenu: dart.fieldType(core$.bool),
    [_selected]: dart.finalFieldType(StreamControllerOfMenuItem()),
    highlighter: dart.fieldType(model__ui__highlighted_text_model.TextHighlighter),
    [_highlight]: dart.fieldType(core$.String),
    [_highlightCache]: dart.fieldType(MapOfString$ListOfHighlightedTextSegment())
  }));
  dart.defineLazy(material_menu__menu_item_groups.MenuItemGroupsComponent, {
    /*material_menu__menu_item_groups.MenuItemGroupsComponent._menuDelay*/get _menuDelay() {
      return dart.const(new core$.Duration.new({milliseconds: 400}));
    }
  });
  dart.defineLazy(material_menu__menu_item_groups, {
    /*material_menu__menu_item_groups._preferredSubMenuPositions*/get _preferredSubMenuPositions() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentRightTop, laminate__enums__alignment.RelativePosition.AdjacentRight, laminate__enums__alignment.RelativePosition.AdjacentRightBottom, laminate__enums__alignment.RelativePosition.AdjacentLeftTop, laminate__enums__alignment.RelativePosition.AdjacentLeft, laminate__enums__alignment.RelativePosition.AdjacentLeftBottom], laminate__enums__alignment.RelativePosition);
    },
    /*material_menu__menu_item_groups._tooltipPositions*/get _tooltipPositions() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentRight, laminate__enums__alignment.RelativePosition.AdjacentLeft], laminate__enums__alignment.RelativePosition);
    }
  });
  dart.trackLibraries("packages/angular_components/material_menu/material_menu.ddc", {
    "package:angular_components/material_menu/menu_popup.dart": material_menu__menu_popup,
    "package:angular_components/material_menu/material_menu.dart": material_menu__material_menu,
    "package:angular_components/material_menu/menu_item_groups.dart": material_menu__menu_item_groups
  }, '{"version":3,"sourceRoot":"","sources":["menu_popup.dart","material_menu.dart","menu_item_groups.dart"],"names":[],"mappings":"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","file":"material_menu.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_popup: material_menu__menu_popup,
    material_menu__material_menu: material_menu__material_menu,
    material_menu__menu_item_groups: material_menu__menu_item_groups
  };
});

//# sourceMappingURL=material_menu.ddc.js.map
