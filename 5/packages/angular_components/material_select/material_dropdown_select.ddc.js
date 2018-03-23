define(['dart_sdk', 'packages/angular_components/model/a11y/active_item', 'packages/angular_components/utils/angular/css/css', 'packages/angular_components/model/ui/template_support', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/material_select/material_select_base', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/mixins/button_wrapper', 'packages/angular_components/mixins/track_layout_changes', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/material_select/shift_click_selection', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/change_detection/change_detection_util', 'packages/angular/src/core/linker/app_view'], function(dart_sdk, active_item, css, template_support, alignment, selection_options, selection_model, selectable, material_select_base, material_dropdown_base, button_wrapper, track_layout_changes, keyboard_handler_mixin, shift_click_selection, popup_size_provider, lifecycle_hooks, change_detection_util, app_view) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__a11y__active_item = active_item.model__a11y__active_item;
  const utils__angular__css__css = css.utils__angular__css__css;
  const model__ui__template_support = template_support.model__ui__template_support;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const material_select__material_select_base = material_select_base.material_select__material_select_base;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const mixins__button_wrapper = button_wrapper.mixins__button_wrapper;
  const mixins__track_layout_changes = track_layout_changes.mixins__track_layout_changes;
  const model__a11y__keyboard_handler_mixin = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const material_select__shift_click_selection = shift_click_selection.material_select__shift_click_selection;
  const src__laminate__popup__popup_size_provider = popup_size_provider.src__laminate__popup__popup_size_provider;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detection_util = change_detection_util.src__core__change_detection__change_detection_util;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const _root = Object.create(null);
  const material_select__material_dropdown_select = Object.create(_root);
  const $classes = dartx.classes;
  const $isNotEmpty = dartx.isNotEmpty;
  const $last = dartx.last;
  const $first = dartx.first;
  const $insert = dartx.insert;
  const $isEmpty = dartx.isEmpty;
  const $containsKey = dartx.containsKey;
  const $single = dartx.single;
  const $_get = dartx._get;
  const $toLowerCase = dartx.toLowerCase;
  const $_set = dartx._set;
  const $startsWith = dartx.startsWith;
  let StreamControllerOfFocusEvent = () => (StreamControllerOfFocusEvent = dart.constFn(async.StreamController$(html.FocusEvent)))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let ListOfOptionGroup = () => (ListOfOptionGroup = dart.constFn(core.List$(model__selection__selection_options.OptionGroup)))();
  let ListOfOptionGroupToNull = () => (ListOfOptionGroupToNull = dart.constFn(dart.fnType(core.Null, [ListOfOptionGroup()])))();
  let ListOfSelectionChangeRecord = () => (ListOfSelectionChangeRecord = dart.constFn(core.List$(model__selection__selection_model.SelectionChangeRecord)))();
  let ListOfSelectionChangeRecordToNull = () => (ListOfSelectionChangeRecordToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecord()])))();
  let LinkedMapOfdynamic$String = () => (LinkedMapOfdynamic$String = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, core.String)))();
  let dynamicAndStringTobool = () => (dynamicAndStringTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic, core.String])))();
  let dynamicToString$ = () => (dynamicToString$ = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let IdentityMapOfint$String = () => (IdentityMapOfint$String = dart.constFn(_js_helper.IdentityMap$(core.int, core.String)))();
  let MapOfString$SimpleChange = () => (MapOfString$SimpleChange = dart.constFn(core.Map$(core.String, src__core__change_detection__change_detection_util.SimpleChange)))();
  let dynamicToType = () => (dynamicToType = dart.constFn(dart.fnType(core.Type, [dart.dynamic])))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  const _popupSizeDelegate = Symbol('_popupSizeDelegate');
  const _optionsListener = Symbol('_optionsListener');
  const _selectionListener = Symbol('_selectionListener');
  const _deselectOnActivate = Symbol('_deselectOnActivate');
  const _focus = Symbol('_focus');
  const _blur = Symbol('_blur');
  const _updateActiveModel = Symbol('_updateActiveModel');
  const _setInitialActiveItem = Symbol('_setInitialActiveItem');
  const _handleNavigationKey = Symbol('_handleNavigationKey');
  const _handleKeyboardTrigger = Symbol('_handleKeyboardTrigger');
  const _enteredKeys = Symbol('_enteredKeys');
  const _charCodeToString = Symbol('_charCodeToString');
  material_select__material_dropdown_select.ActivateItemOnKeyPressMixin = class ActivateItemOnKeyPressMixin extends core.Object {
    activateOnKeyPress(activeModel, charCode, options, itemRenderer, selection) {
      if (itemRenderer == null || options == null) return;
      let key = this[_charCodeToString](charCode);
      let optionsList = options.optionsList;
      let searchMap = new (LinkedMapOfdynamic$String()).new();
      let startsWith = (option, keys) => {
        if (option == null) return false;
        let searchString = searchMap[$_get](option);
        if (searchString == null) {
          searchString = dart.dcall(itemRenderer, option)[$toLowerCase]();
          searchMap[$_set](option, searchString);
        }
        return searchString[$startsWith](keys);
      };
      dart.fn(startsWith, dynamicAndStringTobool());
      let maybeSelectOption = (option, keys) => {
        if (dart.test(dart.dcall(startsWith, option, keys))) {
          activeModel.activate(option);
          selection == null ? null : selection.select(option);
          this[_enteredKeys] = keys;
          return true;
        }
        return false;
      };
      dart.fn(maybeSelectOption, dynamicAndStringTobool());
      if (this[_enteredKeys][$isNotEmpty]) {
        let keys = dart.notNull(this[_enteredKeys]) + dart.notNull(key);
        for (let option of optionsList) {
          if (dart.test(dart.dcall(maybeSelectOption, option, keys))) return;
        }
      }
      if (dart.test(dart.dcall(startsWith, activeModel.activeItem, key))) {
        if (dart.test(dart.dcall(maybeSelectOption, activeModel.peekNext, key))) return;
      }
      for (let option of optionsList) {
        if (dart.test(dart.dcall(maybeSelectOption, option, key))) return;
      }
      this.resetEnteredKeys();
    }
    resetEnteredKeys() {
      this[_enteredKeys] = '';
    }
    [_charCodeToString](charCode) {
      let key = material_select__material_dropdown_select.ActivateItemOnKeyPressMixin._charCodeMap[$_get](charCode);
      if (key == null) {
        key = core.String.fromCharCode(charCode)[$toLowerCase]();
        material_select__material_dropdown_select.ActivateItemOnKeyPressMixin._charCodeMap[$_set](charCode, key);
      }
      return key;
    }
  };
  (material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.new = function() {
    this[_enteredKeys] = '';
  }).prototype = material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.prototype;
  dart.addTypeTests(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin);
  dart.setMethodSignature(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.__proto__),
    activateOnKeyPress: dart.fnType(dart.void, [model__a11y__active_item.ActiveItemModel, core.int, model__selection__selection_options.SelectionOptions, dynamicToString$(), model__selection__selection_model.SelectionModel]),
    resetEnteredKeys: dart.fnType(dart.void, []),
    [_charCodeToString]: dart.fnType(core.String, [core.int])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.__proto__),
    [_enteredKeys]: dart.fieldType(core.String)
  }));
  dart.defineLazy(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin, {
    /*material_select__material_dropdown_select.ActivateItemOnKeyPressMixin._charCodeMap*/get _charCodeMap() {
      return new (IdentityMapOfint$String()).new();
    },
    set _charCodeMap(_) {}
  });
  const MaterialSelectBase_MaterialDropdownBase$ = class MaterialSelectBase_MaterialDropdownBase extends material_select__material_select_base.MaterialSelectBase {};
  (MaterialSelectBase_MaterialDropdownBase$.new = function() {
    mixins__material_dropdown_base.MaterialDropdownBase.new.call(this);
    MaterialSelectBase_MaterialDropdownBase$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_MaterialDropdownBase$.prototype;
  dart.mixinMembers(MaterialSelectBase_MaterialDropdownBase$, mixins__material_dropdown_base.MaterialDropdownBase);
  const MaterialSelectBase_MaterialButtonWrapper$ = class MaterialSelectBase_MaterialButtonWrapper extends MaterialSelectBase_MaterialDropdownBase$ {};
  (MaterialSelectBase_MaterialButtonWrapper$.new = function() {
    mixins__button_wrapper.MaterialButtonWrapper.new.call(this);
    MaterialSelectBase_MaterialButtonWrapper$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_MaterialButtonWrapper$.prototype;
  dart.mixinMembers(MaterialSelectBase_MaterialButtonWrapper$, mixins__button_wrapper.MaterialButtonWrapper);
  const MaterialSelectBase_TrackLayoutChangesMixin$ = class MaterialSelectBase_TrackLayoutChangesMixin extends MaterialSelectBase_MaterialButtonWrapper$ {};
  (MaterialSelectBase_TrackLayoutChangesMixin$.new = function() {
    mixins__track_layout_changes.TrackLayoutChangesMixin.new.call(this);
    MaterialSelectBase_TrackLayoutChangesMixin$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_TrackLayoutChangesMixin$.prototype;
  dart.mixinMembers(MaterialSelectBase_TrackLayoutChangesMixin$, mixins__track_layout_changes.TrackLayoutChangesMixin);
  const MaterialSelectBase_KeyboardHandlerMixin$ = class MaterialSelectBase_KeyboardHandlerMixin extends MaterialSelectBase_TrackLayoutChangesMixin$ {};
  (MaterialSelectBase_KeyboardHandlerMixin$.new = function() {
    model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
    MaterialSelectBase_KeyboardHandlerMixin$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_KeyboardHandlerMixin$.prototype;
  dart.mixinMembers(MaterialSelectBase_KeyboardHandlerMixin$, model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin);
  const MaterialSelectBase_ActivateItemOnKeyPressMixin$ = class MaterialSelectBase_ActivateItemOnKeyPressMixin extends MaterialSelectBase_KeyboardHandlerMixin$ {};
  (MaterialSelectBase_ActivateItemOnKeyPressMixin$.new = function() {
    material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.new.call(this);
    MaterialSelectBase_ActivateItemOnKeyPressMixin$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_ActivateItemOnKeyPressMixin$.prototype;
  dart.mixinMembers(MaterialSelectBase_ActivateItemOnKeyPressMixin$, material_select__material_dropdown_select.ActivateItemOnKeyPressMixin);
  const MaterialSelectBase_ShiftClickSelectionMixin$ = class MaterialSelectBase_ShiftClickSelectionMixin extends MaterialSelectBase_ActivateItemOnKeyPressMixin$ {};
  (MaterialSelectBase_ShiftClickSelectionMixin$.new = function() {
    material_select__shift_click_selection.ShiftClickSelectionMixin.new.call(this);
    MaterialSelectBase_ShiftClickSelectionMixin$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_ShiftClickSelectionMixin$.prototype;
  dart.mixinMembers(MaterialSelectBase_ShiftClickSelectionMixin$, material_select__shift_click_selection.ShiftClickSelectionMixin);
  material_select__material_dropdown_select.MaterialDropdownSelectComponent = class MaterialDropdownSelectComponent extends MaterialSelectBase_ShiftClickSelectionMixin$ {
    get trackByIndexFn() {
      return this[trackByIndexFn];
    }
    set trackByIndexFn(value) {
      super.trackByIndexFn = value;
    }
    get activeModel() {
      return this[activeModel];
    }
    set activeModel(value) {
      super.activeModel = value;
    }
    get deselectLabel() {
      return this[deselectLabel];
    }
    set deselectLabel(value) {
      this[deselectLabel] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get showButtonBorder() {
      return this[showButtonBorder];
    }
    set showButtonBorder(value) {
      this[showButtonBorder] = value;
    }
    set deselectOnActivate(value) {
      this[_deselectOnActivate] = value;
    }
    get deselectOnActivate() {
      return dart.test(this.isMultiSelect) || dart.test(this[_deselectOnActivate]);
    }
    get labelRenderer() {
      return this[labelRenderer];
    }
    set labelRenderer(value) {
      this[labelRenderer] = value;
    }
    get labelFactory() {
      return this[labelFactory];
    }
    set labelFactory(value) {
      this[labelFactory] = value;
    }
    get hasCustomLabelRenderer() {
      return this.labelRenderer != null || this.labelFactory != null;
    }
    get popupClassName() {
      return this[popupClassName];
    }
    set popupClassName(value) {
      super.popupClassName = value;
    }
    set componentRenderer(value) {
      super.componentRenderer = value;
    }
    get componentRenderer() {
      return super.componentRenderer;
    }
    set factoryRenderer(value) {
      super.factoryRenderer = value;
    }
    get factoryRenderer() {
      return super.factoryRenderer;
    }
    set itemRenderer(value) {
      super.itemRenderer = dart.fn(item => core.String._check(dart.dcall(value, item)), dynamicToString());
    }
    get itemRenderer() {
      return super.itemRenderer;
    }
    set width(value) {
      super.width = value;
    }
    get width() {
      return super.width;
    }
    set visible(value) {
      super.visible = value;
      this.resetEnteredKeys();
    }
    get visible() {
      return super.visible;
    }
    set options(newOptions) {
      super.options = newOptions;
      this[_updateActiveModel]();
      this[_setInitialActiveItem]();
      let t = this[_optionsListener];
      t == null ? null : t.cancel();
      let t$ = this.options;
      let t$0 = t$ == null ? null : t$.stream;
      this[_optionsListener] = t$0 == null ? null : t$0.listen(dart.fn(_ => {
        this[_updateActiveModel]();
        this[_setInitialActiveItem]();
      }, ListOfOptionGroupToNull()));
    }
    get options() {
      return super.options;
    }
    get focus() {
      return this[_focus].stream;
    }
    get blur() {
      return this[_blur].stream;
    }
    onFocus(event) {
      this[_focus].add(event);
    }
    onBlur(event) {
      this[_blur].add(event);
    }
    set selection(newSelection) {
      super.selection = newSelection;
      this[_setInitialActiveItem]();
      let t = this[_selectionListener];
      t == null ? null : t.cancel();
      let t$ = this.selection;
      let t$0 = t$ == null ? null : t$.selectionChanges;
      this[_selectionListener] = t$0 == null ? null : t$0.listen(dart.fn(changes => {
        let added = dart.test(changes[$last].added[$isNotEmpty]) ? changes[$last].added[$first] : null;
        if (added != null && !dart.test(this.activeModel.isActive(added))) {
          this.activeModel.activate(added);
        }
      }, ListOfSelectionChangeRecordToNull()));
    }
    get selection() {
      return super.selection;
    }
    [_updateActiveModel]() {
      let items = core.List.from((() => {
        let t = this.options;
        let l = t == null ? null : t.optionsList;
        return l != null ? l : [];
      })());
      if (dart.test(this.showDeselectItem)) {
        items[$insert](0, this.deselectLabel);
      }
      this.activeModel.items = items;
    }
    [_setInitialActiveItem]() {
      if (this.selection == null || dart.test(this.selection.selectedValues[$isEmpty])) {
        this.activeModel.activate(null);
      } else if (this.activeModel.activeItem == null || dart.test(this.showDeselectItem) && dart.equals(this.activeModel.activeItem, this.deselectLabel) || !dart.test(this.selection.isSelected(this.activeModel.activeItem))) {
        this.activeModel.activate(this.selection.selectedValues[$first]);
      }
    }
    [_handleNavigationKey](event, activateFunction) {
      if (dart.test(this.disabled)) return;
      event.preventDefault();
      dart.dcall(activateFunction);
      if (!dart.test(this.visible) && this.selection != null && dart.test(this.isSingleSelect) && this.activeModel.activeItem != null) {
        this.selection.select(this.activeModel.activeItem);
      }
    }
    handleUpKey(event) {
      this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activatePrevious'));
    }
    handleDownKey(event) {
      this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateNext'));
    }
    handleLeftKey(event) {
      this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activatePrevious'));
    }
    handleRightKey(event) {
      this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateNext'));
    }
    handlePageUp(event) {
      this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateFirst'));
    }
    handlePageDown(event) {
      this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateLast'));
    }
    [_handleKeyboardTrigger]() {
      if (dart.test(this.disabled)) return;
      if (!dart.test(this.visible)) {
        this.open();
      } else {
        let item = this.activeModel.activeItem;
        if (item != null && this.selection != null) {
          if (dart.equals(item, this.deselectLabel)) {
            this.deselectCurrentSelection();
          } else if (!dart.test(this.selection.isSelected(item))) {
            this.selection.select(item);
          } else if (dart.test(this.deselectOnActivate)) {
            this.selection.deselect(item);
          }
        }
        if (dart.test(this.isSingleSelect)) this.close();
      }
    }
    handleEnterKey(event) {
      this[_handleKeyboardTrigger]();
    }
    handleSpaceKey(event) {
      this[_handleKeyboardTrigger]();
    }
    handleClick(event) {
      if (!html.MouseEvent.is(event)) return;
      if (!dart.test(this.disabled)) this.toggle();
    }
    handleEscapeKey(event) {
      if (dart.test(this.visible)) {
        this.close();
        event.stopPropagation();
      }
    }
    handleCharCodeKey(event) {
      if (this.itemRenderer != null && this.options != null && !dart.test(this.disabled)) {
        this.activateOnKeyPress(this.activeModel, event.charCode, this.options, this.itemRenderer, !dart.test(this.visible) && dart.test(this.isSingleSelect) ? this.selection : null);
      }
    }
    ngOnChanges(changes) {
      if (dart.test(changes[$containsKey]('disabled')) && dart.test(this.disabled)) {
        this.close();
      }
    }
    ngOnDestroy() {
      let t = this[_optionsListener];
      t == null ? null : t.cancel();
      let t$ = this[_selectionListener];
      t$ == null ? null : t$.cancel();
    }
    getMaxHeight(positionY, viewportHeight) {
      if (this[_popupSizeDelegate] != null) {
        return this[_popupSizeDelegate].getMaxHeight(positionY, viewportHeight);
      } else {
        return 400;
      }
    }
    getMaxWidth(positionX, viewportWidth) {
      if (this[_popupSizeDelegate] != null) {
        return this[_popupSizeDelegate].getMaxWidth(positionX, viewportWidth);
      } else {
        return 448;
      }
    }
    isOptionDisabled(item) {
      if (src__model__selection__interfaces__selectable.Selectable.is(this.options)) {
        return src__model__selection__interfaces__selectable.Selectable.as(this.options).getSelectable(item) !== src__model__selection__interfaces__selectable.SelectableOption.Selectable;
      }
      return false;
    }
    isOptionHidden(item) {
      if (src__model__selection__interfaces__selectable.Selectable.is(this.options)) {
        return src__model__selection__interfaces__selectable.Selectable.as(this.options).getSelectable(item) === src__model__selection__interfaces__selectable.SelectableOption.Hidden;
      }
      return false;
    }
    get showDeselectItem() {
      return !dart.test(this.isMultiSelect) && (() => {
        let t = this.deselectLabel;
        return t == null ? null : t[$isNotEmpty];
      })() === true;
    }
    get isDeselectItemSelected() {
      return this.selection.isEmpty;
    }
    deselectCurrentSelection() {
      if (dart.test(this.selection.isNotEmpty)) {
        this.selection.deselect(this.selection.selectedValues[$single]);
      }
    }
  };
  (material_select__material_dropdown_select.MaterialDropdownSelectComponent.new = function(idGenerator, popupSizeDelegate, rtl, popupClass, element) {
    this[trackByIndexFn] = model__ui__template_support.indexIdentityFn;
    this[_optionsListener] = null;
    this[_selectionListener] = null;
    this[deselectLabel] = null;
    this[error] = null;
    this[showButtonBorder] = null;
    this[_deselectOnActivate] = true;
    this[labelRenderer] = null;
    this[labelFactory] = null;
    this[_focus] = StreamControllerOfFocusEvent().broadcast({sync: true});
    this[_blur] = StreamControllerOfFocusEvent().broadcast({sync: true});
    this[_popupSizeDelegate] = popupSizeDelegate;
    this[activeModel] = new model__a11y__active_item.ActiveItemModel.new(idGenerator);
    this[popupClassName] = utils__angular__css__css.constructEncapsulatedCss(popupClass, element[$classes]);
    material_select__material_dropdown_select.MaterialDropdownSelectComponent.__proto__.new.call(this);
    this.isRtl = rtl;
    this.preferredPositions = laminate__enums__alignment.RelativePosition.overlapAlignments;
    this.iconName = 'arrow_drop_down';
  }).prototype = material_select__material_dropdown_select.MaterialDropdownSelectComponent.prototype;
  dart.addTypeTests(material_select__material_dropdown_select.MaterialDropdownSelectComponent);
  const trackByIndexFn = Symbol("MaterialDropdownSelectComponent.trackByIndexFn");
  const activeModel = Symbol("MaterialDropdownSelectComponent.activeModel");
  const deselectLabel = Symbol("MaterialDropdownSelectComponent.deselectLabel");
  const error = Symbol("MaterialDropdownSelectComponent.error");
  const showButtonBorder = Symbol("MaterialDropdownSelectComponent.showButtonBorder");
  const labelRenderer = Symbol("MaterialDropdownSelectComponent.labelRenderer");
  const labelFactory = Symbol("MaterialDropdownSelectComponent.labelFactory");
  const popupClassName = Symbol("MaterialDropdownSelectComponent.popupClassName");
  material_select__material_dropdown_select.MaterialDropdownSelectComponent[dart.implements] = () => [src__laminate__popup__popup_size_provider.PopupSizeProvider, src__core__metadata__lifecycle_hooks.OnChanges, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_select__material_dropdown_select.MaterialDropdownSelectComponent, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select.MaterialDropdownSelectComponent.__proto__),
    onFocus: dart.fnType(dart.void, [html.FocusEvent]),
    onBlur: dart.fnType(dart.void, [html.FocusEvent]),
    [_updateActiveModel]: dart.fnType(dart.void, []),
    [_setInitialActiveItem]: dart.fnType(dart.void, []),
    [_handleNavigationKey]: dart.fnType(dart.void, [html.KeyboardEvent, core.Function]),
    [_handleKeyboardTrigger]: dart.fnType(dart.void, []),
    handleClick: dart.fnType(dart.void, [html.UIEvent]),
    ngOnChanges: dart.fnType(dart.dynamic, [MapOfString$SimpleChange()]),
    ngOnDestroy: dart.fnType(dart.dynamic, []),
    getMaxHeight: dart.fnType(core.num, [core.num, core.num]),
    getMaxWidth: dart.fnType(core.num, [core.num, core.num]),
    isOptionDisabled: dart.fnType(core.bool, [core.Object]),
    isOptionHidden: dart.fnType(core.bool, [core.Object]),
    deselectCurrentSelection: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_select__material_dropdown_select.MaterialDropdownSelectComponent, () => ({
    __proto__: dart.getGetters(material_select__material_dropdown_select.MaterialDropdownSelectComponent.__proto__),
    deselectOnActivate: dart.fnType(core.bool, []),
    hasCustomLabelRenderer: dart.fnType(core.bool, []),
    focus: dart.fnType(async.Stream$(html.FocusEvent), []),
    blur: dart.fnType(async.Stream$(html.FocusEvent), []),
    showDeselectItem: dart.fnType(core.bool, []),
    isDeselectItemSelected: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(material_select__material_dropdown_select.MaterialDropdownSelectComponent, () => ({
    __proto__: dart.getSetters(material_select__material_dropdown_select.MaterialDropdownSelectComponent.__proto__),
    deselectOnActivate: dart.fnType(dart.void, [core.bool]),
    componentRenderer: dart.fnType(dart.void, [dynamicToType()]),
    factoryRenderer: dart.fnType(dart.void, [dynamicToComponentFactory()]),
    itemRenderer: dart.fnType(dart.void, [core.Function]),
    options: dart.fnType(dart.void, [model__selection__selection_options.SelectionOptions]),
    selection: dart.fnType(dart.void, [model__selection__selection_model.SelectionModel])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select.MaterialDropdownSelectComponent, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select.MaterialDropdownSelectComponent.__proto__),
    trackByIndexFn: dart.finalFieldType(core.Function),
    activeModel: dart.finalFieldType(model__a11y__active_item.ActiveItemModel),
    [_optionsListener]: dart.fieldType(async.StreamSubscription),
    [_selectionListener]: dart.fieldType(async.StreamSubscription),
    [_popupSizeDelegate]: dart.finalFieldType(src__laminate__popup__popup_size_provider.PopupSizeProvider),
    deselectLabel: dart.fieldType(core.String),
    error: dart.fieldType(core.String),
    showButtonBorder: dart.fieldType(core.bool),
    [_deselectOnActivate]: dart.fieldType(core.bool),
    labelRenderer: dart.fieldType(dynamicToType()),
    labelFactory: dart.fieldType(dynamicToComponentFactory()),
    popupClassName: dart.finalFieldType(core.String),
    [_focus]: dart.fieldType(StreamControllerOfFocusEvent()),
    [_blur]: dart.fieldType(StreamControllerOfFocusEvent())
  }));
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select.ddc", {
    "package:angular_components/material_select/material_dropdown_select.dart": material_select__material_dropdown_select
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select.dart"],"names":[],"mappings":"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","file":"material_dropdown_select.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select: material_select__material_dropdown_select
  };
});

//# sourceMappingURL=material_dropdown_select.ddc.js.map
