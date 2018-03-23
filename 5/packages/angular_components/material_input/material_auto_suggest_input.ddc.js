define(['dart_sdk', 'packages/angular_components/model/a11y/active_item', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/ui/template_support', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/selection/string_selection_options', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/selection/select', 'packages/angular_components/material_select/material_select_base', 'packages/angular_components/material_input/input_wrapper', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/mixins/highlight_assistant_mixin', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_components/focus/focus', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/has_factory', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/material_input/material_input', 'packages/angular_components/src/utils/async/disposable_future', 'packages/angular_forms/src/directives/control_container'], function(dart_sdk, active_item, selection_model, template_support, id_generator, string_selection_options, selection_options, properties, selectable, select, material_select_base, input_wrapper, keyboard_handler_mixin, highlight_assistant_mixin, control_value_accessor, focus, lifecycle_hooks, has_renderer, has_factory, material_dropdown_base, popup_size_provider, app_view, alignment, material_input, disposable_future, control_container) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__a11y__active_item = active_item.model__a11y__active_item;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const model__ui__template_support = template_support.model__ui__template_support;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const model__selection__string_selection_options = string_selection_options.model__selection__string_selection_options;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const model__selection__select = select.model__selection__select;
  const material_select__material_select_base = material_select_base.material_select__material_select_base;
  const material_input__input_wrapper = input_wrapper.material_input__input_wrapper;
  const model__a11y__keyboard_handler_mixin = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const mixins__highlight_assistant_mixin = highlight_assistant_mixin.mixins__highlight_assistant_mixin;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const focus__focus = focus.focus__focus;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__ui__has_factory = has_factory.model__ui__has_factory;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__laminate__popup__popup_size_provider = popup_size_provider.src__laminate__popup__popup_size_provider;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const material_input__material_input = material_input.material_input__material_input;
  const src__utils__async__disposable_future = disposable_future.src__utils__async__disposable_future;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const _root = Object.create(null);
  const material_input__material_auto_suggest_input = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $firstWhere = dartx.firstWhere;
  const $values = dartx.values;
  const $sort = dartx.sort;
  const $first = dartx.first;
  const $isEmpty = dartx.isEmpty;
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  let StreamControllerOfFocusEvent = () => (StreamControllerOfFocusEvent = dart.constFn(async.StreamController$(html.FocusEvent)))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfSelectionChangeRecord = () => (ListOfSelectionChangeRecord = dart.constFn(core.List$(model__selection__selection_model.SelectionChangeRecord)))();
  let ListOfSelectionChangeRecordToNull = () => (ListOfSelectionChangeRecordToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecord()])))();
  let ListOfOptionGroup = () => (ListOfOptionGroup = dart.constFn(core.List$(model__selection__selection_options.OptionGroup)))();
  let ListOfOptionGroupToNull = () => (ListOfOptionGroupToNull = dart.constFn(dart.fnType(core.Null, [ListOfOptionGroup()])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let HasComponentRendererOfRendersValue$dynamic = () => (HasComponentRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_renderer.HasComponentRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  let HasFactoryRendererOfRendersValue$dynamic = () => (HasFactoryRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_factory.HasFactoryRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  let dynamic__Todynamic = () => (dynamic__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let dynamicToType = () => (dynamicToType = dart.constFn(dart.fnType(core.Type, [dart.dynamic])))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  material_input__material_auto_suggest_input._InputChangeCallback = dart.typedef('_InputChangeCallback', () => dart.fnType(core.String, [core.String]));
  const _cd = Symbol('_cd');
  const _popupSizeDelegate = Symbol('_popupSizeDelegate');
  const _defaultSelection = Symbol('_defaultSelection');
  const _isInitialized = Symbol('_isInitialized');
  const _showPopup = Symbol('_showPopup');
  const _focusPending = Symbol('_focusPending');
  const _input = Symbol('_input');
  const _callback = Symbol('_callback');
  const _sorted = Symbol('_sorted');
  const _suggestions = Symbol('_suggestions');
  const _refreshOptions = Symbol('_refreshOptions');
  const _inputText = Symbol('_inputText');
  const _inputChange = Symbol('_inputChange');
  const _lastSelectedItem = Symbol('_lastSelectedItem');
  const _lastFilterFuture = Symbol('_lastFilterFuture');
  const _filterScheduled = Symbol('_filterScheduled');
  const _isDisposed = Symbol('_isDisposed');
  const _limit = Symbol('_limit');
  const _popupPositions = Symbol('_popupPositions');
  const _selectionListener = Symbol('_selectionListener');
  const _optionsListener = Symbol('_optionsListener');
  const _showPopupController = Symbol('_showPopupController');
  const _onClear = Symbol('_onClear');
  const _isFocused = Symbol('_isFocused');
  const _onFocus = Symbol('_onFocus');
  const _onBlur = Symbol('_onBlur');
  const _filterSuggestions = Symbol('_filterSuggestions');
  const _setInitialActiveItem = Symbol('_setInitialActiveItem');
  const MaterialSelectBase_MaterialInputWrapper$ = class MaterialSelectBase_MaterialInputWrapper extends material_select__material_select_base.MaterialSelectBase {};
  (MaterialSelectBase_MaterialInputWrapper$.new = function callableClass() {
    if (typeof this !== "function") {
      function self(...args) {
        return self.call.apply(self, args);
      }
      self.__proto__ = this.__proto__;
      callableClass.call(self);
      return self;
    }
    material_input__input_wrapper.MaterialInputWrapper.new.call(this);
    MaterialSelectBase_MaterialInputWrapper$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_MaterialInputWrapper$.prototype;
  dart.mixinMembers(MaterialSelectBase_MaterialInputWrapper$, material_input__input_wrapper.MaterialInputWrapper);
  const MaterialSelectBase_KeyboardHandlerMixin$ = class MaterialSelectBase_KeyboardHandlerMixin extends MaterialSelectBase_MaterialInputWrapper$ {};
  (MaterialSelectBase_KeyboardHandlerMixin$.new = function callableClass() {
    if (typeof this !== "function") {
      function self(...args) {
        return self.call.apply(self, args);
      }
      self.__proto__ = this.__proto__;
      callableClass.call(self);
      return self;
    }
    model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
    MaterialSelectBase_KeyboardHandlerMixin$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_KeyboardHandlerMixin$.prototype;
  dart.mixinMembers(MaterialSelectBase_KeyboardHandlerMixin$, model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin);
  const MaterialSelectBase_HighlightAssistantMixin$ = class MaterialSelectBase_HighlightAssistantMixin extends MaterialSelectBase_KeyboardHandlerMixin$ {};
  (MaterialSelectBase_HighlightAssistantMixin$.new = function callableClass() {
    if (typeof this !== "function") {
      function self(...args) {
        return self.call.apply(self, args);
      }
      self.__proto__ = this.__proto__;
      callableClass.call(self);
      return self;
    }
    mixins__highlight_assistant_mixin.HighlightAssistantMixin.new.call(this);
    MaterialSelectBase_HighlightAssistantMixin$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_HighlightAssistantMixin$.prototype;
  dart.mixinMembers(MaterialSelectBase_HighlightAssistantMixin$, mixins__highlight_assistant_mixin.HighlightAssistantMixin);
  material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent = class MaterialAutoSuggestInputComponent extends MaterialSelectBase_HighlightAssistantMixin$ {
    get popupId() {
      return this[popupId];
    }
    set popupId(value) {
      super.popupId = value;
    }
    get inputId() {
      return this[inputId];
    }
    set inputId(value) {
      super.inputId = value;
    }
    get activeModel() {
      return this[activeModel];
    }
    set activeModel(value) {
      super.activeModel = value;
    }
    get shouldClearOnSelection() {
      return this[shouldClearOnSelection];
    }
    set shouldClearOnSelection(value) {
      this[shouldClearOnSelection] = value;
    }
    get closeOnActivate() {
      return this[closeOnActivate];
    }
    set closeOnActivate(value) {
      this[closeOnActivate] = value;
    }
    get hideCheckbox() {
      return this[hideCheckbox];
    }
    set hideCheckbox(value) {
      this[hideCheckbox] = value;
    }
    get enforceSpaceConstraints() {
      return this[enforceSpaceConstraints];
    }
    set enforceSpaceConstraints(value) {
      this[enforceSpaceConstraints] = value;
    }
    get constrainToViewport() {
      return this[constrainToViewport];
    }
    set constrainToViewport(value) {
      this[constrainToViewport] = value;
    }
    get initialActivateSelection() {
      return this[initialActivateSelection];
    }
    set initialActivateSelection(value) {
      this[initialActivateSelection] = value;
    }
    get filterSuggestions() {
      return this[filterSuggestions];
    }
    set filterSuggestions(value) {
      this[filterSuggestions] = value;
    }
    get popupShadowCssClass() {
      return this[popupShadowCssClass];
    }
    set popupShadowCssClass(value) {
      this[popupShadowCssClass] = value;
    }
    get popupMatchInputWidth() {
      return this[popupMatchInputWidth];
    }
    set popupMatchInputWidth(value) {
      this[popupMatchInputWidth] = value;
    }
    get slide() {
      return this[slide];
    }
    set slide(value) {
      this[slide] = value;
    }
    get showClearIcon() {
      return this[showClearIcon];
    }
    set showClearIcon(value) {
      this[showClearIcon] = value;
    }
    get clearIconTooltip() {
      return this[clearIconTooltip];
    }
    set clearIconTooltip(value) {
      this[clearIconTooltip] = value;
    }
    get hasClearIconTooltip() {
      let t = this.clearIconTooltip;
      let l = t == null ? null : t[$isNotEmpty];
      return l != null ? l : false;
    }
    get emptyPlaceholder() {
      return this[emptyPlaceholder];
    }
    set emptyPlaceholder(value) {
      this[emptyPlaceholder] = value;
    }
    set suggestions(value) {
      this[_suggestions] = value;
      this[_refreshOptions] = true;
    }
    get suggestion() {
      return this[_suggestions];
    }
    set itemRenderer(value) {
      return super.itemRenderer = value;
    }
    get itemRenderer() {
      return super.itemRenderer;
    }
    set componentRenderer(value) {
      return super.componentRenderer = value;
    }
    set factoryRenderer(value) {
      return super.factoryRenderer = value;
    }
    set sorted(value) {
      this[_sorted] = value;
      this[_refreshOptions] = true;
    }
    get sorted() {
      return this[_sorted];
    }
    get trackByIndexFn() {
      return this[trackByIndexFn];
    }
    set trackByIndexFn(value) {
      super.trackByIndexFn = value;
    }
    static new(cd, idGenerator, popupSizeDelegate) {
      return new material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent.protected(cd, idGenerator != null ? idGenerator : new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID(), popupSizeDelegate);
    }
    get textChanged() {
      return this[_inputChange].stream;
    }
    get errorText() {
      if (this.error != null) return this.error;
      if ((() => {
        let t = this[_cd];
        let t$ = t == null ? null : t.control;
        return t$ == null ? null : t$.errors;
      })() != null) {
        let errorMap = this[_cd].control.errors;
        let stringValue = errorMap[$values][$firstWhere](dart.fn(v => typeof v == 'string' && v[$isNotEmpty], dynamicTobool()), {orElse: dart.fn(() => null, VoidToNull())});
        if (stringValue != null) return core.String.as(stringValue);
      }
      return null;
    }
    ngAfterChanges() {
      if (dart.test(this[_refreshOptions])) {
        let optionsList = core.List.from(this[_suggestions]);
        if (dart.test(this[_sorted])) {
          optionsList[$sort]();
        }
        this.options = new model__selection__string_selection_options.StringSelectionOptions.new(optionsList, {toFilterableString: this.itemRenderer});
        this[_refreshOptions] = false;
      }
    }
    set selection(selection) {
      super.selection = selection;
      if (dart.test(this.isSingleSelect) && dart.test(selection.selectedValues[$isNotEmpty])) {
        this[_lastSelectedItem] = selection.selectedValues[$first];
        if (dart.test(this[_isInitialized])) {
          this.inputText = dart.dcall(this.itemRenderer, this[_lastSelectedItem]);
        }
      }
      let t = this[_selectionListener];
      t == null ? null : t.cancel();
      this[_selectionListener] = selection.selectionChanges.listen(dart.fn(_ => {
        if (dart.test(this.shouldClearOnSelection)) {
          this.inputText = '';
        } else if (dart.test(this.isSingleSelect)) {
          let selectedItem = dart.test(selection.selectedValues[$isNotEmpty]) ? selection.selectedValues[$first] : null;
          if (!dart.equals(this[_lastSelectedItem], selectedItem)) {
            this[_lastSelectedItem] = selectedItem;
            this.inputText = this[_lastSelectedItem] != null ? dart.dcall(this.itemRenderer, this[_lastSelectedItem]) : '';
          }
        }
      }, ListOfSelectionChangeRecordToNull()));
    }
    get selection() {
      return super.selection;
    }
    set options(options) {
      if (options == null) return;
      super.options = options;
      this[_filterSuggestions]();
      this.activeModel.items = options.optionsList;
      let t = this[_optionsListener];
      t == null ? null : t.cancel();
      this[_optionsListener] = options.stream.listen(dart.fn(_ => {
        this.activeModel.items = options.optionsList;
        this[_setInitialActiveItem]();
      }, ListOfOptionGroupToNull()));
    }
    get options() {
      return super.options;
    }
    set limit(value) {
      let newLimit = utils__angular__properties__properties.getInt(value);
      if (this[_limit] != newLimit) {
        this[_limit] = newLimit;
        this[_filterSuggestions]();
      }
    }
    get visibleSuggestionGroups() {
      return this.options.optionGroups;
    }
    get hasOptions() {
      return this.options.optionsList[$isNotEmpty];
    }
    get showLoadingSpinner() {
      return dart.test(this.loading) && dart.test(this.options.optionsList[$isEmpty]);
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
    isOptionDisabled(item) {
      return src__model__selection__interfaces__selectable.Selectable.is(this.options) && src__model__selection__interfaces__selectable.Selectable.as(this.options).getSelectable(item) !== src__model__selection__interfaces__selectable.SelectableOption.Selectable;
    }
    get highlightOptions() {
      return this[highlightOptions];
    }
    set highlightOptions(value) {
      this[highlightOptions] = value;
    }
    get componentRenderer() {
      return dart.test(this.highlightOptions) && super.componentRenderer == null && super.factoryRenderer == null ? this.highlightComponentRenderer : super.componentRenderer;
    }
    get factoryRenderer() {
      return dart.test(this.highlightOptions) && super.factoryRenderer == null && super.componentRenderer == null ? this.highlightFactoryRenderer : super.factoryRenderer;
    }
    get showPopupChange() {
      return this[_showPopupController].stream;
    }
    get showPopup() {
      return dart.test(this[_showPopup]) && !dart.test(this.disabled);
    }
    set showPopup(value) {
      if (value != this[_showPopup]) {
        this[_showPopup] = value;
        this[_showPopupController].add(this[_showPopup]);
        this[_setInitialActiveItem]();
      }
      if (!dart.test(this[_showPopup]) && !dart.test(this[_isFocused])) {
        this[_onBlur].add(null);
      }
    }
    get loading() {
      return this[loading];
    }
    set loading(value) {
      this[loading] = value;
    }
    get showEmptyPlaceholder() {
      return this.emptyPlaceholder[$isNotEmpty] && dart.test(this.options.optionsList[$isEmpty]) && !dart.test(this.showLoadingSpinner);
    }
    get popupPositions() {
      return this[_popupPositions];
    }
    set popupPositions(positions) {
      if ((positions == null ? null : positions[$isNotEmpty]) === true) {
        this[_popupPositions] = positions;
      } else {
        this[_popupPositions] = material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent._defaultPopupPositions;
      }
    }
    get inputText() {
      return this[_inputText];
    }
    set inputText(inputText) {
      let t = inputText;
      t == null ? inputText = '' : t;
      if (inputText == this[_inputText]) {
        return;
      }
      if (!dart.equals(this.selection, this[_defaultSelection]) && !dart.test(this.shouldClearOnSelection) && this[_lastSelectedItem] != null) {
        if (inputText != dart.dcall(this.itemRenderer, this[_lastSelectedItem])) {
          this.selection.deselect(this[_lastSelectedItem]);
          this[_lastSelectedItem] = null;
        }
      }
      this[_inputText] = inputText;
      this[_inputChange].add(inputText);
      this[_filterSuggestions]();
      if (this[_callback] != null) this[_callback](inputText);
    }
    get onClear() {
      return this[_onClear].stream;
    }
    onClearIcon() {
      this[_onClear].add(null);
      this.showPopup = false;
      this.inputText = '';
    }
    get onFocus() {
      return this[_onFocus].stream;
    }
    handleFocus(event) {
      this.showPopup = true;
      this[_onFocus].add(event);
      this[_isFocused] = true;
    }
    get onBlur() {
      return this[_onBlur].stream;
    }
    handleBlur(event) {
      this[_isFocused] = false;
      if ((!dart.test(this.showPopup) || !dart.test(this.hasOptions)) && this[_onBlur] != null) {
        this[_onBlur].add(null);
      }
    }
    [_filterSuggestions]() {
      if (dart.test(this[_filterScheduled]) || !dart.test(this.filterSuggestions) || !model__selection__select.Filterable.is(this.options)) {
        return;
      }
      this[_filterScheduled] = true;
      async.scheduleMicrotask(dart.fn(() => {
        if (dart.test(this[_isDisposed])) return;
        this[_filterScheduled] = false;
        let t = this[_lastFilterFuture];
        t == null ? null : t.dispose();
        this[_lastFilterFuture] = model__selection__select.Filterable.as(this.options).filter(this[_inputText], {limit: this[_limit]});
      }, VoidToNull()));
    }
    [_setInitialActiveItem]() {
      if (!dart.test(this.showPopup) || !dart.test(this.initialActivateSelection)) return;
      if (this.selection == null || dart.test(this.selection.selectedValues[$isEmpty])) {
        this.activeModel.activate(null);
      } else if (this.activeModel.activeItem == null || !dart.test(this.selection.isSelected(this.activeModel.activeItem))) {
        this.activeModel.activate(this.selection.selectedValues[$first]);
      }
    }
    handleEnterKey(event) {
      if (!dart.test(this.showPopup)) {
        this.showPopup = true;
      } else {
        let item = this.activeModel.activeItem;
        if (item != null && !dart.test(this.isOptionDisabled(item))) {
          this.onListItemSelected(item);
        }
      }
    }
    handleUpKey(event) {
      if (dart.test(this.showPopup)) {
        event.preventDefault();
        this.activeModel.activatePrevious();
      }
    }
    handleDownKey(event) {
      if (dart.test(this.showPopup)) {
        event.preventDefault();
        this.activeModel.activateNext();
      }
    }
    handlePageUp(event) {
      if (dart.test(this.showPopup)) {
        event.preventDefault();
        this.activeModel.activateFirst();
      }
    }
    handlePageDown(event) {
      if (dart.test(this.showPopup)) {
        event.preventDefault();
        this.activeModel.activateLast();
      }
    }
    handleEscapeKey(event) {
      if (dart.test(this.showPopup)) {
        this.showPopup = false;
        event.stopPropagation();
      }
    }
    call(_) {
      return null;
    }
    writeValue(newValue) {
      this.inputText = core.String.as(newValue);
    }
    registerOnChange(callback) {
      this[_callback] = StringToString().as(callback);
    }
    registerOnTouched(_) {}
    set input(input) {
      this[_input] = input;
      if (dart.test(this[_focusPending])) {
        this[_focusPending] = false;
        this[_input].focus();
      }
    }
    focus() {
      if (this[_input] == null) {
        this[_focusPending] = true;
      } else {
        this[_input].focus();
      }
    }
    onListItemSelected(suggestion) {
      if (dart.test(this.isSingleSelect)) {
        this.showPopup = false;
      }
      if (dart.test(this.selection.isSelected(suggestion))) {
        this.selection.deselect(suggestion);
      } else {
        this.selection.select(suggestion);
      }
    }
    ngOnInit() {
      this[_isInitialized] = true;
      async.scheduleMicrotask(dart.fn(() => {
        if (this.inputText[$isEmpty] && this[_lastSelectedItem] != null) {
          this.inputText = dart.dcall(this.itemRenderer, this[_lastSelectedItem]);
        }
      }, VoidToNull()));
    }
    ngOnDestroy() {
      this[_isDisposed] = true;
      let t = this[_selectionListener];
      t == null ? null : t.cancel();
      let t$ = this[_optionsListener];
      t$ == null ? null : t$.cancel();
      let t$0 = this[_lastFilterFuture];
      t$0 == null ? null : t$0.dispose();
    }
    get autoDismiss() {
      return this[autoDismiss];
    }
    set autoDismiss(value) {
      this[autoDismiss] = value;
    }
    close() {
      this.showPopup = false;
    }
    open() {
      this.showPopup = true;
    }
    toggle() {
      this.showPopup = !dart.test(this.showPopup);
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
  };
  material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent.prototype[dart._runtimeType] = material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent;
  (material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent.protected = function callableClass(cd, idGenerator, popupSizeDelegate) {
    if (typeof this !== "function") {
      function self(...args) {
        return self.call.apply(self, args);
      }
      self.__proto__ = this.__proto__;
      callableClass.call(self, cd, idGenerator, popupSizeDelegate);
      return self;
    }
    if (popupSizeDelegate === void 0) popupSizeDelegate = null;
    this[_defaultSelection] = model__selection__selection_model.SelectionModel.withList();
    this[_isInitialized] = false;
    this[shouldClearOnSelection] = false;
    this[closeOnActivate] = true;
    this[hideCheckbox] = false;
    this[enforceSpaceConstraints] = true;
    this[constrainToViewport] = false;
    this[_showPopup] = false;
    this[_focusPending] = false;
    this[_input] = null;
    this[_callback] = null;
    this[_sorted] = true;
    this[_suggestions] = [];
    this[_refreshOptions] = false;
    this[_inputText] = '';
    this[_inputChange] = StreamControllerOfString().broadcast({sync: true});
    this[_lastSelectedItem] = null;
    this[_lastFilterFuture] = null;
    this[_filterScheduled] = false;
    this[_isDisposed] = false;
    this[initialActivateSelection] = false;
    this[_limit] = 10;
    this[filterSuggestions] = true;
    this[popupShadowCssClass] = '';
    this[popupMatchInputWidth] = false;
    this[_popupPositions] = material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent._defaultPopupPositions;
    this[_selectionListener] = null;
    this[_optionsListener] = null;
    this[slide] = null;
    this[showClearIcon] = false;
    this[clearIconTooltip] = null;
    this[emptyPlaceholder] = '';
    this[trackByIndexFn] = model__ui__template_support.indexIdentityFn;
    this[labelRenderer] = null;
    this[labelFactory] = null;
    this[highlightOptions] = true;
    this[_showPopupController] = StreamControllerOfbool().broadcast({sync: true});
    this[loading] = false;
    this[_onClear] = StreamControllerOfNull().broadcast({sync: true});
    this[_isFocused] = false;
    this[_onFocus] = StreamControllerOfFocusEvent().broadcast({sync: true});
    this[_onBlur] = StreamControllerOfNull().broadcast({sync: true});
    this[autoDismiss] = true;
    this[_cd] = cd;
    this[_popupSizeDelegate] = popupSizeDelegate;
    this[activeModel] = new model__a11y__active_item.ActiveItemModel.new(idGenerator, {loop: true});
    this[popupId] = idGenerator.nextId();
    this[inputId] = idGenerator.nextId();
    material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent.__proto__.new.call(this);
    if (this[_cd] != null) {
      this[_cd].valueAccessor = this;
    }
    this.selection = this[_defaultSelection];
  }).prototype = material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent.prototype;
  dart.addTypeTests(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent);
  const popupId = Symbol("MaterialAutoSuggestInputComponent.popupId");
  const inputId = Symbol("MaterialAutoSuggestInputComponent.inputId");
  const activeModel = Symbol("MaterialAutoSuggestInputComponent.activeModel");
  const shouldClearOnSelection = Symbol("MaterialAutoSuggestInputComponent.shouldClearOnSelection");
  const closeOnActivate = Symbol("MaterialAutoSuggestInputComponent.closeOnActivate");
  const hideCheckbox = Symbol("MaterialAutoSuggestInputComponent.hideCheckbox");
  const enforceSpaceConstraints = Symbol("MaterialAutoSuggestInputComponent.enforceSpaceConstraints");
  const constrainToViewport = Symbol("MaterialAutoSuggestInputComponent.constrainToViewport");
  const initialActivateSelection = Symbol("MaterialAutoSuggestInputComponent.initialActivateSelection");
  const filterSuggestions = Symbol("MaterialAutoSuggestInputComponent.filterSuggestions");
  const popupShadowCssClass = Symbol("MaterialAutoSuggestInputComponent.popupShadowCssClass");
  const popupMatchInputWidth = Symbol("MaterialAutoSuggestInputComponent.popupMatchInputWidth");
  const slide = Symbol("MaterialAutoSuggestInputComponent.slide");
  const showClearIcon = Symbol("MaterialAutoSuggestInputComponent.showClearIcon");
  const clearIconTooltip = Symbol("MaterialAutoSuggestInputComponent.clearIconTooltip");
  const emptyPlaceholder = Symbol("MaterialAutoSuggestInputComponent.emptyPlaceholder");
  const trackByIndexFn = Symbol("MaterialAutoSuggestInputComponent.trackByIndexFn");
  const labelRenderer = Symbol("MaterialAutoSuggestInputComponent.labelRenderer");
  const labelFactory = Symbol("MaterialAutoSuggestInputComponent.labelFactory");
  const highlightOptions = Symbol("MaterialAutoSuggestInputComponent.highlightOptions");
  const loading = Symbol("MaterialAutoSuggestInputComponent.loading");
  const autoDismiss = Symbol("MaterialAutoSuggestInputComponent.autoDismiss");
  material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, focus__focus.Focusable, src__core__metadata__lifecycle_hooks.AfterChanges, src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy, model__ui__has_renderer.HasRenderer, HasComponentRendererOfRendersValue$dynamic(), HasFactoryRendererOfRendersValue$dynamic(), mixins__material_dropdown_base.DropdownHandle, src__laminate__popup__popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent, () => ({
    __proto__: dart.getMethods(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent.__proto__),
    ngAfterChanges: dart.fnType(dart.dynamic, []),
    isOptionDisabled: dart.fnType(core.bool, [core.Object]),
    onClearIcon: dart.fnType(dart.void, []),
    handleFocus: dart.fnType(dart.void, [html.FocusEvent]),
    handleBlur: dart.fnType(dart.void, [html.FocusEvent]),
    [_filterSuggestions]: dart.fnType(dart.void, []),
    [_setInitialActiveItem]: dart.fnType(dart.void, []),
    call: dart.fnType(dart.dynamic, [dart.dynamic]),
    writeValue: dart.fnType(dart.void, [dart.dynamic]),
    registerOnChange: dart.fnType(dart.void, [dynamic__Todynamic()]),
    registerOnTouched: dart.fnType(dart.void, [VoidTodynamic()]),
    focus: dart.fnType(dart.void, []),
    onListItemSelected: dart.fnType(dart.void, [dart.dynamic]),
    ngOnInit: dart.fnType(dart.dynamic, []),
    ngOnDestroy: dart.fnType(dart.dynamic, []),
    close: dart.fnType(dart.void, []),
    open: dart.fnType(dart.void, []),
    toggle: dart.fnType(dart.void, []),
    getMaxHeight: dart.fnType(core.num, [core.num, core.num]),
    getMaxWidth: dart.fnType(core.num, [core.num, core.num])
  }));
  dart.setGetterSignature(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent, () => ({
    __proto__: dart.getGetters(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent.__proto__),
    hasClearIconTooltip: dart.fnType(core.bool, []),
    suggestion: dart.fnType(core.List, []),
    sorted: dart.fnType(core.bool, []),
    textChanged: dart.fnType(async.Stream$(core.String), []),
    errorText: dart.fnType(core.String, []),
    visibleSuggestionGroups: dart.fnType(core.List$(model__selection__selection_options.OptionGroup), []),
    hasOptions: dart.fnType(core.bool, []),
    showLoadingSpinner: dart.fnType(core.bool, []),
    hasCustomLabelRenderer: dart.fnType(core.bool, []),
    componentRenderer: dart.fnType(dart.fnType(core.Type, [dart.dynamic]), []),
    factoryRenderer: dart.fnType(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic]), []),
    showPopupChange: dart.fnType(async.Stream$(core.bool), []),
    showPopup: dart.fnType(core.bool, []),
    showEmptyPlaceholder: dart.fnType(core.bool, []),
    popupPositions: dart.fnType(core.List$(laminate__enums__alignment.RelativePosition), []),
    onClear: dart.fnType(async.Stream$(core.Null), []),
    onFocus: dart.fnType(async.Stream$(html.FocusEvent), []),
    onBlur: dart.fnType(async.Stream$(core.Null), [])
  }));
  dart.setSetterSignature(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent, () => ({
    __proto__: dart.getSetters(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent.__proto__),
    suggestions: dart.fnType(dart.void, [core.List]),
    itemRenderer: dart.fnType(dart.void, [dynamicToString()]),
    componentRenderer: dart.fnType(dart.void, [dynamicToType()]),
    factoryRenderer: dart.fnType(dart.void, [dynamicToComponentFactory()]),
    sorted: dart.fnType(dart.void, [core.bool]),
    selection: dart.fnType(dart.void, [model__selection__selection_model.SelectionModel]),
    options: dart.fnType(dart.void, [model__selection__selection_options.SelectionOptions]),
    limit: dart.fnType(dart.void, [dart.dynamic]),
    showPopup: dart.fnType(dart.void, [core.bool]),
    popupPositions: dart.fnType(dart.void, [ListOfRelativePosition()]),
    input: dart.fnType(dart.void, [material_input__material_input.MaterialInputComponent])
  }));
  dart.setFieldSignature(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent, () => ({
    __proto__: dart.getFields(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent.__proto__),
    [_defaultSelection]: dart.finalFieldType(model__selection__selection_model.SelectionModel),
    popupId: dart.finalFieldType(core.String),
    inputId: dart.finalFieldType(core.String),
    activeModel: dart.finalFieldType(model__a11y__active_item.ActiveItemModel),
    [_isInitialized]: dart.fieldType(core.bool),
    shouldClearOnSelection: dart.fieldType(core.bool),
    closeOnActivate: dart.fieldType(core.bool),
    hideCheckbox: dart.fieldType(core.bool),
    enforceSpaceConstraints: dart.fieldType(core.bool),
    constrainToViewport: dart.fieldType(core.bool),
    [_showPopup]: dart.fieldType(core.bool),
    [_focusPending]: dart.fieldType(core.bool),
    [_input]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_callback]: dart.fieldType(StringToString()),
    [_sorted]: dart.fieldType(core.bool),
    [_suggestions]: dart.fieldType(core.List),
    [_refreshOptions]: dart.fieldType(core.bool),
    [_inputText]: dart.fieldType(core.String),
    [_inputChange]: dart.finalFieldType(StreamControllerOfString()),
    [_lastSelectedItem]: dart.fieldType(core.Object),
    [_lastFilterFuture]: dart.fieldType(src__utils__async__disposable_future.DisposableFuture),
    [_filterScheduled]: dart.fieldType(core.bool),
    [_isDisposed]: dart.fieldType(core.bool),
    initialActivateSelection: dart.fieldType(core.bool),
    [_limit]: dart.fieldType(core.int),
    filterSuggestions: dart.fieldType(core.bool),
    popupShadowCssClass: dart.fieldType(core.String),
    popupMatchInputWidth: dart.fieldType(core.bool),
    [_popupPositions]: dart.fieldType(ListOfRelativePosition()),
    [_selectionListener]: dart.fieldType(async.StreamSubscription),
    [_optionsListener]: dart.fieldType(async.StreamSubscription),
    slide: dart.fieldType(core.String),
    showClearIcon: dart.fieldType(core.bool),
    clearIconTooltip: dart.fieldType(core.String),
    emptyPlaceholder: dart.fieldType(core.String),
    trackByIndexFn: dart.finalFieldType(core.Function),
    [_popupSizeDelegate]: dart.finalFieldType(src__laminate__popup__popup_size_provider.PopupSizeProvider),
    [_cd]: dart.fieldType(src__directives__ng_control.NgControl),
    labelRenderer: dart.fieldType(dynamicToType()),
    labelFactory: dart.fieldType(dynamicToComponentFactory()),
    highlightOptions: dart.fieldType(core.bool),
    [_showPopupController]: dart.finalFieldType(StreamControllerOfbool()),
    loading: dart.fieldType(core.bool),
    [_onClear]: dart.finalFieldType(StreamControllerOfNull()),
    [_isFocused]: dart.fieldType(core.bool),
    [_onFocus]: dart.finalFieldType(StreamControllerOfFocusEvent()),
    [_onBlur]: dart.finalFieldType(StreamControllerOfNull()),
    autoDismiss: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent, {
    /*material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent._defaultPopupPositions*/get _defaultPopupPositions() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentBottomLeft, laminate__enums__alignment.RelativePosition.AdjacentBottomRight, laminate__enums__alignment.RelativePosition.AdjacentTopLeft, laminate__enums__alignment.RelativePosition.AdjacentTopRight], laminate__enums__alignment.RelativePosition);
    }
  });
  dart.trackLibraries("packages/angular_components/material_input/material_auto_suggest_input.ddc", {
    "package:angular_components/material_input/material_auto_suggest_input.dart": material_input__material_auto_suggest_input
  }, '{"version":3,"sourceRoot":"","sources":["material_auto_suggest_input.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwLe;;;;;;IACA;;;;;;IAIS;;;;;;IAMjB;;;;;;IAIA;;;;;;IAIA;;;;;;IAKA;;;;;;IAIA;;;;;;IAkCA;;;;;;IAQA;;;;;;IAIE;;;;;;IAKF;;;;;;IAaE;;;;;;IAMF;;;;;;IAIE;;;;;;;cAEyB,qBAAgB;;6BAAgB;IAAK;IAI9D;;;;;;oBAOS,KAAU;AACxB,wBAAY,GAAG,KAAK;AACpB,2BAAe,GAAG;IACpB;;YAEuB,mBAAY;;qBAMlB,KAA2B;YAAK,mBAAkB,GAAG,KAAK;;;;;0BAOrD,KAAuB;YACzC,wBAAuB,GAAG,KAAK;;wBAKf,KAAqB;YAAK,sBAAqB,GAAG,KAAK;;eAKhE,KAAU;AACnB,mBAAO,GAAG,KAAK;AACf,2BAAe,GAAG;IACpB;;YAEmB,cAAO;;IAIX;;;;;;eAYP,EAAgC,EAChC,WAAmC,EACnC,iBAA2D;AAAE,YACjE,KAAI,uFAA2C,CAC3C,EAAE,EACF,WAAW,WAAX,WAAW,GAAI,IAAI,gEAA8B,IACjD,iBAAiB;IAAC;;YAeQ,mBAAY,OAAO;;;AAMnD,UAAI,UAAK,IAAI,MAAM,MAAO,WAAK;AAC/B;gBAAI,SAAG;;;cAAqB,MAAM;AAChC,YAAqB,WAAW,SAAG,QAAQ,OAAO;AAClD,YAAI,cAAc,QAAQ,SAAO,aAAW,CACvC,QAAC,CAAC,IAAmB,OAAb,CAAC,gBAAe,CAAC,aAAW,6BAC7B,cAAM;AAClB,YAAI,WAAW,IAAI,MAAM,sBAAO,WAAW;;AAE7C,YAAO;IACT;;AAME,oBAAI,qBAAe,GAAE;AACnB,YAAI,cAAc,AAAI,cAAS,CAAC,kBAAY;AAC5C,sBAAI,aAAO,GAAE;AACX,qBAAW,OAAK;;AAElB,oBAAO,GAAG,IAAI,qEAAsB,CAAC,WAAW,uBACxB,iBAAY;AACpC,6BAAe,GAAG;;IAEtB;kBAIc,SAAwB;AACpC,qBAAe,GAAG,SAAS;AAE3B,oBAAI,mBAAc,eAAI,SAAS,eAAe,aAAW,GAAE;AACzD,+BAAiB,GAAG,SAAS,eAAe,QAAM;AAClD,sBAAI,oBAAc,GAAE;AAClB,wBAAS,cAAG,iBAAY,EAAC,uBAAiB;;;AAG9C,sCAAkB;;AAClB,8BAAkB,GAAG,SAAS,iBAAiB,OAAO,CAAC,QAAC,CAAC;AAGvD,sBAAI,2BAAsB,GAAE;AAC1B,wBAAS,GAAG;cACP,eAAI,mBAAc,GAAE;AACzB,cAAI,yBAAe,SAAS,eAAe,aAAW,IAChD,SAAS,eAAe,QAAM,GAC9B;AAEN,2BAAI,uBAAiB,EAAI,YAAY,GAAE;AACrC,mCAAiB,GAAG,YAAY;AAChC,0BAAS,GACL,uBAAiB,IAAI,kBAAO,iBAAY,EAAC,uBAAiB,IAAI;;;;IAI1E;;;;gBAIY,OAAwB;AAClC,UAAI,OAAO,IAAI,MAAM;AACrB,mBAAa,GAAG,OAAO;AACvB,8BAAkB;AAClB,sBAAW,MAAM,GAAG,OAAO,YAAY;AACvC,oCAAgB;;AAChB,4BAAgB,GAAG,OAAO,OAAO,OAAO,CAAC,QAAC,CAAC;AACzC,wBAAW,MAAM,GAAG,OAAO,YAAY;AACvC,mCAAqB;;IAEzB;;;;cAGU,KAAa;AACrB,UAAI,WAAW,6CAAM,CAAC,KAAK;AAC3B,UAAI,YAAM,IAAI,QAAQ,EAAE;AACtB,oBAAM,GAAG,QAAQ;AACjB,gCAAkB;;IAEtB;;YAGiD,aAAO,aAAa;;;YAE9C,aAAO,YAAY,aAAW;;;YAEd,WAAR,YAAO,eAAI,YAAO,YAAY,UAAQ;;IAKnD;;;;;;IAIF;;;;;;;YAIZ,AAAsB,mBAAT,IAAI,QAAQ,iBAAY,IAAI;IAAI;qBAI3B,IAAW;YACP,6DAAtB,YAAO,KACP,4DAAC,YAAO,eAA6B,CAAC,IAAI,MACtC,8DAAgB,WAAW;;IAK9B;;;;;;;uBAGsC,qBAAgB,KACnD,uBAAuB,IAAI,QAC3B,qBAAqB,IAAI,OAC3B,+BAA0B,GAC1B,uBAAuB;;;uBAGU,qBAAgB,KAC/C,qBAAqB,IAAI,QACzB,uBAAuB,IAAI,OAC7B,6BAAwB,GACxB,qBAAqB;;;YAMS,2BAAoB,OAAO;;;YAE9B,WAAX,gBAAU,gBAAK,aAAQ;;kBAG/B,KAAU;AACtB,UAAI,KAAK,IAAI,gBAAU,EAAE;AACvB,wBAAU,GAAG,KAAK;AAClB,kCAAoB,IAAI,CAAC,gBAAU;AACnC,mCAAqB;;AAGvB,qBAAK,gBAAU,gBAAK,gBAAU,GAAE;AAC9B,qBAAO,IAAI,CAAC;;IAEhB;IAGK;;;;;;;YAGD,AAC4B,sBADZ,aAAW,cAC3B,YAAO,YAAY,UAAQ,gBAC1B,uBAAkB;;;YAEsB,sBAAe;;uBAGzC,SAAgC;AACjD,WAAI,SAAS,kBAAT,SAAS,aAAY,MAAI,MAAM;AACjC,6BAAe,GAAG,SAAS;aACtB;AACL,6BAAe,GAAG,oGAAsB;;IAE5C;;YAGwB,iBAAU;;kBAIpB,SAAgB;AAC5B,uBAAS;kBAAT,SAAS,GAAK;AAEd,UAAI,SAAS,IAAI,gBAAU,EAAE;AAC3B;;AAGF,uBAAI,cAAS,EAAI,uBAAiB,gBAC7B,2BAAsB,KACvB,uBAAiB,IAAI,MAAM;AAK7B,YAAI,SAAS,eAAI,iBAAY,EAAC,uBAAiB,GAAG;AAChD,wBAAS,SAAS,CAAC,uBAAiB;AACpC,iCAAiB,GAAG;;;AAGxB,sBAAU,GAAG,SAAS;AACtB,wBAAY,IAAI,CAAC,SAAS;AAC1B,8BAAkB;AAClB,UAAI,eAAS,IAAI,MAAM,eAAS,CAAC,SAAS;IAC5C;;YAG4B,eAAQ,OAAO;;;AAIzC,oBAAQ,IAAI,CAAC;AACb,oBAAS,GAAG;AACZ,oBAAS,GAAG;IACd;;YAKuC,eAAQ,OAAO;;gBAGrC,KAAqB;AACpC,oBAAS,GAAG;AACZ,oBAAQ,IAAI,CAAC,KAAK;AAClB,sBAAU,GAAG;IACf;;YAG2B,cAAO,OAAO;;eAGzB,KAAqB;AACnC,sBAAU,GAAG;AACb,sBAAM,cAAS,gBAAK,eAAU,MAAK,aAAO,IAAI,MAAM;AAClD,qBAAO,IAAI,CAAC;;IAEhB;;AAIE,oBAAI,sBAAgB,gBAAK,sBAAiB,6CAAI,YAAO,GAAiB;AACpE;;AAEF,4BAAgB,GAAG;AACnB,6BAAiB,CAAC;AAChB,sBAAI,iBAAW,GAAE;AACjB,8BAAgB,GAAG;AACnB,uCAAiB;;AACjB,+BAAiB,GACb,uCAAC,YAAO,QAAsB,CAAC,gBAAU,UAAS,YAAM;;IAEhE;;AAGE,qBAAK,cAAS,gBAAK,6BAAwB,GAAE;AAE7C,UAAI,cAAS,IAAI,kBAAQ,cAAS,eAAe,UAAQ,GAAE;AACzD,wBAAW,SAAS,CAAC;YAChB,KAAI,gBAAW,WAAW,IAAI,mBAChC,cAAS,WAAW,CAAC,gBAAW,WAAW,IAAG;AAGjD,wBAAW,SAAS,CAAC,cAAS,eAAe,QAAM;;IAEvD;mBAGoB,KAAwB;AAC1C,qBAAK,cAAS,GAAE;AACd,sBAAS,GAAG;aACP;AACL,YAAI,OAAO,gBAAW,WAAW;AACjC,YAAI,IAAI,IAAI,mBAAS,qBAAgB,CAAC,IAAI,IAAG;AAC3C,iCAAkB,CAAC,IAAI;;;IAG7B;gBAGiB,KAAwB;AACvC,oBAAI,cAAS,GAAE;AACb,aAAK,eAAe;AACpB,wBAAW,iBAAiB;;IAEhC;kBAGmB,KAAwB;AACzC,oBAAI,cAAS,GAAE;AACb,aAAK,eAAe;AACpB,wBAAW,aAAa;;IAE5B;iBAGkB,KAAwB;AACxC,oBAAI,cAAS,GAAE;AACb,aAAK,eAAe;AACpB,wBAAW,cAAc;;IAE7B;mBAGoB,KAAwB;AAC1C,oBAAI,cAAS,GAAE;AACb,aAAK,eAAe;AACpB,wBAAW,aAAa;;IAE5B;oBAGqB,KAAwB;AAC3C,oBAAI,cAAS,GAAE;AACb,sBAAS,GAAG;AACZ,aAAK,gBAAgB;;IAEzB;SAIK,CAAC;AAEJ,YAAO;IACT;eAGgB,QAAQ;AACtB,oBAAS,kBAAG,QAAQ;IACtB;qBAGsB,QAAQ;AAC5B,qBAAS,uBAAG,QAAQ;IACtB;sBAGuB,CAAC,GAExB;cAGU,KAA4B;AACpC,kBAAM,GAAG,KAAK;AACd,oBAAI,mBAAa,GAAE;AACjB,2BAAa,GAAG;AAChB,oBAAM,MAAM;;IAEhB;;AAIE,UAAI,YAAM,IAAI,MAAM;AAElB,2BAAa,GAAG;aACX;AACL,oBAAM,MAAM;;IAEhB;uBAEwB,UAAU;AAChC,oBAAI,mBAAc,GAAE;AAClB,sBAAS,GAAG;;AAEd,oBAAI,cAAS,WAAW,CAAC,UAAU,IAAG;AACpC,sBAAS,SAAS,CAAC,UAAU;aACxB;AACL,sBAAS,OAAO,CAAC,UAAU;;IAE/B;;AAIE,0BAAc,GAAG;AACjB,6BAAiB,CAAC;AAChB,YAAI,cAAS,UAAQ,IAAI,uBAAiB,IAAI,MAAM;AAClD,wBAAS,cAAG,iBAAY,EAAC,uBAAiB;;;IAGhD;;AAIE,uBAAW,GAAG;AACd,sCAAkB;;AAClB,qCAAgB;;AAChB,uCAAiB;;IACnB;IAGK;;;;;;;AAIH,oBAAS,GAAG;IACd;;AAIE,oBAAS,GAAG;IACd;;AAIE,oBAAS,GAAG,WAAC,cAAS;IACxB;iBAGiB,SAAa,EAAE,cAAkB;AAChD,UAAI,wBAAkB,IAAI,MAAM;AAC9B,cAAO,yBAAkB,aAAa,CAAC,SAAS,EAAE,cAAc;aAC3D;AAEL,cAAO;;IAEX;gBAGgB,SAAa,EAAE,aAAiB;AAC9C,UAAI,wBAAkB,IAAI,MAAM;AAC9B,cAAO,yBAAkB,YAAY,CAAC,SAAS,EAAE,aAAa;aACzD;AAGL,cAAO;;IAEX;;;oHAnbiD,EAAG,EAAE,WAAuB,EACnE,iBAAkB;;;;;;+BADqB,EAAG,EAAE,WAAuB,EACnE,iBAAkB;;;QAAlB,iBAAkB,aAAlB,iBAAkB;IAhLP,uBAAiB,GAAG,AAAI,yDAAuB;IAS/D,oBAAc,GAAG;IAIjB,4BAAsB,GAAG;IAIzB,qBAAe,GAAG;IAIlB,kBAAY,GAAG;IAKf,6BAAuB,GAAG;IAI1B,yBAAmB,GAAG;IAEtB,gBAAU,GAAG;IACb,mBAAa,GAAG;IACE,YAAM;IACR,eAAS;IACzB,aAAO,GAAG;IACV,kBAAY,GAAG;IACf,qBAAe,GAAG;IAGhB,gBAAU,GAAG;IAGd,kBAAY,GAAG,AAAI,oCAAkC,QAAO;IAI3D,uBAAiB;IAGP,uBAAiB;IAG7B,sBAAgB,GAAG;IAEnB,iBAAW,GAAG;IAQd,8BAAwB,GAAG;IAI5B,YAAM,GAAG;IAIR,uBAAiB,GAAG;IAIlB,yBAAmB,GAAG;IAKxB,0BAAoB,GAAG;IAGL,qBAAe,GAAG,oGAAsB;IAG5C,wBAAkB;IAGlB,sBAAgB;IAI5B,WAAK;IAMP,mBAAa,GAAG;IAId,sBAAgB;IAMhB,sBAAgB,GAAG;IA6CX,oBAAc,GAAG,2CAAe;IAiI7B,mBAAa;IAIf,kBAAY;IAgBvB,sBAAgB,GAAG;IAgBlB,0BAAoB,GAAG,AAAI,kCAAgC,QAAO;IAsBnE,aAAO,GAAG;IAkDT,cAAQ,GAAG,AAAI,kCAAgC,QAAO;IAQvD,gBAAU,GAAG;IAIZ,cAAQ,GAAG,AAAI,wCAA2C,QAAO;IAUjE,aAAO,GAAG,AAAI,kCAAgC,QAAO;IAgKtD,iBAAW,GAAG;IA/Y8B,SAAG,GAAH,EAAG;IAC1C,wBAAkB,GAAlB,iBAAkB;IACtB,iBAAW,GAAG,IAAI,4CAAe,CAAC,WAAW,SAAQ;IACrD,aAAO,GAAG,WAAW,OAAO;IAC5B,aAAO,GAAG,WAAW,OAAO;;AAChC,QAAI,SAAG,IAAI,MAAM;AACf,eAAG,cAAc,GAAG;;AAEtB,kBAAS,GAAG,uBAAiB;EAC/B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA/LoC,oGAAsB;YAAG,iBAC3D,2CAAgB,mBAAmB,EACnC,2CAAgB,oBAAoB,EACpC,2CAAgB,gBAAgB,EAChC,2CAAgB,iBAAiB","file":"material_auto_suggest_input.ddc.js"}');
  // Exports:
  return {
    material_input__material_auto_suggest_input: material_input__material_auto_suggest_input
  };
});

//# sourceMappingURL=material_auto_suggest_input.ddc.js.map
