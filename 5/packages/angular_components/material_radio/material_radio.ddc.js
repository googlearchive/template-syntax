define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/focus/focus', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_forms/src/directives/control_container', 'packages/angular_components/model/ui/icon', 'packages/angular_components/utils/browser/events/events', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, disposer, selection_model, focus, control_value_accessor, lifecycle_hooks, ng_zone, control_container, icon, events, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const focus__focus = focus.focus__focus;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const model__ui__icon = icon.model__ui__icon;
  const utils__browser__events__events = events.utils__browser__events__events;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_radio__material_radio_group = Object.create(_root);
  const material_radio__material_radio = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $first = dartx.first;
  const $isNotEmpty = dartx.isNotEmpty;
  const $last = dartx.last;
  const $add = dartx.add;
  const $indexOf = dartx.indexOf;
  const $modulo = dartx['%'];
  const $length = dartx.length;
  const $_get = dartx._get;
  const $target = dartx.target;
  const $_set = dartx._set;
  const $attributes = dartx.attributes;
  let StreamControllerOfObject = () => (StreamControllerOfObject = dart.constFn(async.StreamController$(core.Object)))();
  let SelectionModelOfMaterialRadioComponent = () => (SelectionModelOfMaterialRadioComponent = dart.constFn(model__selection__selection_model.SelectionModel$(material_radio__material_radio.MaterialRadioComponent)))();
  let SelectionChangeRecordOfMaterialRadioComponent = () => (SelectionChangeRecordOfMaterialRadioComponent = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(material_radio__material_radio.MaterialRadioComponent)))();
  let ListOfSelectionChangeRecordOfMaterialRadioComponent = () => (ListOfSelectionChangeRecordOfMaterialRadioComponent = dart.constFn(core.List$(SelectionChangeRecordOfMaterialRadioComponent())))();
  let ListOfSelectionChangeRecordOfMaterialRadioComponentToNull = () => (ListOfSelectionChangeRecordOfMaterialRadioComponentToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecordOfMaterialRadioComponent()])))();
  let ListToNull = () => (ListToNull = dart.constFn(dart.fnType(core.Null, [core.List])))();
  let ObjectToNull = () => (ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))();
  let ListOfMaterialRadioComponent = () => (ListOfMaterialRadioComponent = dart.constFn(core.List$(material_radio__material_radio.MaterialRadioComponent)))();
  let ObjectTodynamic = () => (ObjectTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Object])))();
  let JSArrayOfMaterialRadioComponent = () => (JSArrayOfMaterialRadioComponent = dart.constFn(_interceptors.JSArray$(material_radio__material_radio.MaterialRadioComponent)))();
  let dynamic__Todynamic = () => (dynamic__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let StreamControllerOfFocusMoveEvent = () => (StreamControllerOfFocusMoveEvent = dart.constFn(async.StreamController$(focus__focus.FocusMoveEvent)))();
  let boolTodynamic = () => (boolTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.bool])))();
  const _ngZone = Symbol('_ngZone');
  const _disposer = Symbol('_disposer');
  const _children = Symbol('_children');
  const _contentInit = Symbol('_contentInit');
  const _onChange = Symbol('_onChange');
  const _preselectedValue = Symbol('_preselectedValue');
  const _selected = Symbol('_selected');
  const _resetTabIndex = Symbol('_resetTabIndex');
  const _moveFocus = Symbol('_moveFocus');
  const _moveSelection = Symbol('_moveSelection');
  const _getFocusableChildren = Symbol('_getFocusableChildren');
  const _move = Symbol('_move');
  material_radio__material_radio_group.MaterialRadioGroupComponent = class MaterialRadioGroupComponent extends core.Object {
    get cd() {
      return this[cd$];
    }
    set cd(value) {
      super.cd = value;
    }
    ngAfterContentInit() {
      this[_contentInit] = true;
      if (this[_preselectedValue] != null) {
        this[_ngZone].onEventDone.first.then(core.Null, dart.fn(_ => {
          if (this[_preselectedValue] == null) return;
          this.selected = this[_preselectedValue];
          this[_preselectedValue] = null;
        }, ObjectToNull()));
      } else {
        this[_resetTabIndex]();
      }
    }
    set list(components) {
      this[_children] = ListOfMaterialRadioComponent().from(components);
      for (let child of this[_children]) {
        this[_disposer].addStreamSubscription(focus__focus.FocusMoveEvent, child.focusmove.listen(dart.bind(this, _moveFocus)));
        this[_disposer].addStreamSubscription(focus__focus.FocusMoveEvent, child.selectionmove.listen(dart.bind(this, _moveSelection)));
      }
    }
    ngOnDestroy() {
      return this[_disposer].dispose();
    }
    writeValue(newValue) {
      if (newValue == null) return;
      this.selected = newValue;
    }
    registerOnChange(callback) {
      this[_disposer].addStreamSubscription(core.Object, this.onChange.listen(dart.fn(value => dart.dcall(callback, value), ObjectTodynamic())));
    }
    registerOnTouched(callback) {}
    [_resetTabIndex]() {
      this[_ngZone].onEventDone.first.then(core.Null, dart.fn(_ => {
        if (this[_children] == null) return;
        for (let child of this[_children]) {
          child.tabbable = false;
        }
        let selectedComponent = dart.test(this.componentSelection.selectedValues[$isEmpty]) ? null : this.componentSelection.selectedValues[$first];
        if (selectedComponent != null) {
          selectedComponent.tabbable = true;
        } else if (dart.test(this.focusSelection.isEmpty)) {
          let focusables = this[_getFocusableChildren]();
          if (dart.test(focusables[$isNotEmpty])) {
            focusables[$first].tabbable = true;
            focusables[$last].tabbable = true;
          }
        }
      }, ObjectToNull()));
    }
    get onChange() {
      return this[_onChange].stream;
    }
    get valueSelection() {
      return this[valueSelection];
    }
    set valueSelection(value) {
      this[valueSelection] = value;
    }
    get componentSelection() {
      return this[componentSelection];
    }
    set componentSelection(value) {
      this[componentSelection] = value;
    }
    get focusSelection() {
      return this[focusSelection];
    }
    set focusSelection(value) {
      this[focusSelection] = value;
    }
    set selected(newValue) {
      if (this[_children] != null && dart.test(this[_contentInit])) {
        for (let child of this[_children]) {
          child.checked = dart.equals(child.value, newValue);
        }
        this[_preselectedValue] = null;
      } else {
        this[_preselectedValue] = newValue;
      }
    }
    get selected() {
      return this[_selected];
    }
    [_moveFocus](event) {
      return this[_move](event);
    }
    [_moveSelection](event) {
      return this[_move](event, true);
    }
    [_getFocusableChildren](source) {
      if (source === void 0) source = null;
      let focusableChildren = JSArrayOfMaterialRadioComponent().of([]);
      for (let child of this[_children]) {
        if (!dart.test(child.disabled) || dart.equals(child, source)) {
          focusableChildren[$add](child);
        }
      }
      return focusableChildren;
    }
    [_move](event, moveSelection) {
      if (moveSelection === void 0) moveSelection = false;
      let source = material_radio__material_radio.MaterialRadioComponent._check(event.focusItem);
      let focusableChildren = this[_getFocusableChildren](source);
      let index = focusableChildren[$indexOf](source);
      let newIndex = (dart.notNull(index) + dart.notNull(event.offset))[$modulo](focusableChildren[$length]);
      if (dart.test(moveSelection)) {
        focusableChildren[$_get](newIndex).checked = true;
        focusableChildren[$_get](newIndex).focus();
      } else {
        focusableChildren[$_get](newIndex).focus();
      }
    }
  };
  (material_radio__material_radio_group.MaterialRadioGroupComponent.new = function(ngZone, cd) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_children] = null;
    this[_contentInit] = false;
    this[_onChange] = StreamControllerOfObject().broadcast();
    this[valueSelection] = null;
    this[componentSelection] = SelectionModelOfMaterialRadioComponent().withList();
    this[focusSelection] = SelectionModelOfMaterialRadioComponent().withList();
    this[_preselectedValue] = null;
    this[_selected] = null;
    this[_ngZone] = ngZone;
    this[cd$] = cd;
    this[_disposer].addStreamSubscription(ListOfSelectionChangeRecordOfMaterialRadioComponent(), this.componentSelection.selectionChanges.listen(dart.fn(changes => {
      for (let change of changes) {
        for (let item of change.removed) {
          item.checked = false;
        }
      }
      this[_resetTabIndex]();
      let selectedComponent = dart.test(this.componentSelection.selectedValues[$isEmpty]) ? null : this.componentSelection.selectedValues[$first];
      this[_selected] = selectedComponent == null ? null : selectedComponent.value;
      if (this.valueSelection != null && this[_selected] != null) {
        this.valueSelection.select(this[_selected]);
      }
      this[_onChange].add(this[_selected]);
    }, ListOfSelectionChangeRecordOfMaterialRadioComponentToNull())));
    this[_disposer].addStreamSubscription(ListOfSelectionChangeRecordOfMaterialRadioComponent(), this.focusSelection.selectionChanges.listen(dart.fn(changes => {
      this[_resetTabIndex]();
    }, ListToNull())));
    this.cd == null ? null : this.cd.valueAccessor = this;
  }).prototype = material_radio__material_radio_group.MaterialRadioGroupComponent.prototype;
  dart.addTypeTests(material_radio__material_radio_group.MaterialRadioGroupComponent);
  const cd$ = Symbol("MaterialRadioGroupComponent.cd");
  const valueSelection = Symbol("MaterialRadioGroupComponent.valueSelection");
  const componentSelection = Symbol("MaterialRadioGroupComponent.componentSelection");
  const focusSelection = Symbol("MaterialRadioGroupComponent.focusSelection");
  material_radio__material_radio_group.MaterialRadioGroupComponent[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy, src__core__metadata__lifecycle_hooks.AfterContentInit];
  dart.setMethodSignature(material_radio__material_radio_group.MaterialRadioGroupComponent, () => ({
    __proto__: dart.getMethods(material_radio__material_radio_group.MaterialRadioGroupComponent.__proto__),
    ngAfterContentInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    writeValue: dart.fnType(dart.void, [dart.dynamic]),
    registerOnChange: dart.fnType(dart.void, [dynamic__Todynamic()]),
    registerOnTouched: dart.fnType(dart.void, [VoidTodynamic()]),
    [_resetTabIndex]: dart.fnType(dart.void, []),
    [_moveFocus]: dart.fnType(dart.void, [focus__focus.FocusMoveEvent]),
    [_moveSelection]: dart.fnType(dart.void, [focus__focus.FocusMoveEvent]),
    [_getFocusableChildren]: dart.fnType(core.List$(material_radio__material_radio.MaterialRadioComponent), [], [material_radio__material_radio.MaterialRadioComponent]),
    [_move]: dart.fnType(dart.void, [focus__focus.FocusMoveEvent], [core.bool])
  }));
  dart.setGetterSignature(material_radio__material_radio_group.MaterialRadioGroupComponent, () => ({
    __proto__: dart.getGetters(material_radio__material_radio_group.MaterialRadioGroupComponent.__proto__),
    onChange: dart.fnType(async.Stream$(core.Object), []),
    selected: dart.fnType(dart.dynamic, [])
  }));
  dart.setSetterSignature(material_radio__material_radio_group.MaterialRadioGroupComponent, () => ({
    __proto__: dart.getSetters(material_radio__material_radio_group.MaterialRadioGroupComponent.__proto__),
    list: dart.fnType(dart.void, [ListOfMaterialRadioComponent()]),
    selected: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_radio__material_radio_group.MaterialRadioGroupComponent, () => ({
    __proto__: dart.getFields(material_radio__material_radio_group.MaterialRadioGroupComponent.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    cd: dart.finalFieldType(src__directives__ng_control.NgControl),
    [_children]: dart.fieldType(ListOfMaterialRadioComponent()),
    [_contentInit]: dart.fieldType(core.bool),
    [_onChange]: dart.finalFieldType(StreamControllerOfObject()),
    valueSelection: dart.fieldType(model__selection__selection_model.SelectionModel),
    componentSelection: dart.fieldType(SelectionModelOfMaterialRadioComponent()),
    focusSelection: dart.fieldType(SelectionModelOfMaterialRadioComponent()),
    [_preselectedValue]: dart.fieldType(dart.dynamic),
    [_selected]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_radio__material_radio, {
    /*material_radio__material_radio.uncheckedIcon*/get uncheckedIcon() {
      return dart.const(new model__ui__icon.Icon.new('radio_button_unchecked'));
    },
    /*material_radio__material_radio.checkedIcon*/get checkedIcon() {
      return dart.const(new model__ui__icon.Icon.new('radio_button_checked'));
    }
  });
  const _root$ = Symbol('_root');
  const _changeDetector = Symbol('_changeDetector');
  const _group = Symbol('_group');
  const _disposer$ = Symbol('_disposer');
  const _disabled = Symbol('_disabled');
  const _onChecked = Symbol('_onChecked');
  const _checked = Symbol('_checked');
  const _icon = Symbol('_icon');
  const _tabIndex = Symbol('_tabIndex');
  const _enabledTabIndex = Symbol('_enabledTabIndex');
  const _focusMoveCtrl = Symbol('_focusMoveCtrl');
  const _selectionMoveCtrl = Symbol('_selectionMoveCtrl');
  const _focused = Symbol('_focused');
  const _isKeyboardEvent = Symbol('_isKeyboardEvent');
  const _syncAriaChecked = Symbol('_syncAriaChecked');
  const _updateTabIndex = Symbol('_updateTabIndex');
  const _ariaChecked = Symbol('_ariaChecked');
  material_radio__material_radio.MaterialRadioComponent = class MaterialRadioComponent extends focus__focus.RootFocusable {
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    ngOnDestroy() {
      return this[_disposer$].dispose();
    }
    writeValue(newValue) {
      if (newValue == null) return;
      this.checked = core.bool.as(newValue);
    }
    registerOnChange(callback) {
      this[_disposer$].addStreamSubscription(core.bool, this.onChecked.listen(dart.fn(value => dart.dcall(callback, value), boolTodynamic())));
    }
    registerOnTouched(callback) {}
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    set disabled(disabled) {
      if (this[_disabled] == disabled) return;
      this[_disabled] = disabled;
      this[_updateTabIndex]();
    }
    get disabled() {
      return this[_disabled];
    }
    get onChecked() {
      return this[_onChecked].stream;
    }
    set checked(newValue) {
      if (this[_checked] == newValue) return;
      this[_changeDetector].markForCheck();
      this[_icon] = dart.test(newValue) ? material_radio__material_radio.checkedIcon : material_radio__material_radio.uncheckedIcon;
      if (this[_group] != null) {
        if (dart.test(newValue)) {
          this[_group].componentSelection.select(this);
        } else {
          this[_group].componentSelection.deselect(this);
        }
      }
      this[_checked] = newValue;
      this[_syncAriaChecked]();
      this[_onChecked].add(this[_checked]);
    }
    get checked() {
      return this[_checked];
    }
    get icon() {
      return this[_icon];
    }
    get tabIndex() {
      return dart.str`${this[_tabIndex]}`;
    }
    [_updateTabIndex]() {
      this[_tabIndex] = dart.test(this[_disabled]) ? -1 : this[_enabledTabIndex];
    }
    set tabbable(tabbable) {
      this[_enabledTabIndex] = dart.test(tabbable) ? 0 : -1;
      this[_updateTabIndex]();
      this[_changeDetector].markForCheck();
    }
    get focusmove() {
      return this[_focusMoveCtrl].stream;
    }
    get selectionmove() {
      return this[_selectionMoveCtrl].stream;
    }
    handleKeyDown(event) {
      if (!dart.equals(event[$target], this[_root$])) return;
      let focusEvent = focus__focus.FocusMoveEvent.fromKeyboardEvent(this, event);
      if (focusEvent != null) {
        if (dart.test(event.ctrlKey)) {
          this[_focusMoveCtrl].add(focusEvent);
        } else {
          this[_selectionMoveCtrl].add(focusEvent);
        }
        event.preventDefault();
      }
    }
    handleKeyUp(event) {
      if (!dart.equals(event[$target], this[_root$])) return;
      this[_isKeyboardEvent] = true;
    }
    get showFocus() {
      return dart.test(this[_focused]) && dart.test(this[_isKeyboardEvent]);
    }
    onFocus() {
      this[_focused] = true;
      if (this[_group] != null) {
        this[_group].focusSelection.select(this);
      }
    }
    onBlur() {
      this[_focused] = false;
      if (this[_group] != null) {
        this[_group].focusSelection.deselect(this);
      }
    }
    select() {
      if (dart.test(this.disabled)) return;
      this.checked = true;
    }
    handleClick(mouseEvent) {
      this[_isKeyboardEvent] = false;
      this.select();
    }
    handleKeyPress(event) {
      if (!dart.equals(event[$target], this[_root$])) return;
      if (dart.test(utils__browser__events__events.isSpaceKey(event))) {
        event.preventDefault();
        this[_isKeyboardEvent] = true;
        this.select();
      }
    }
    get [_ariaChecked]() {
      return typeof this.checked == 'boolean' ? dart.str`${this.checked}` : 'mixed';
    }
    [_syncAriaChecked]() {
      if (this[_root$] == null) return;
      this[_root$][$attributes][$_set]('aria-checked', this[_ariaChecked]);
    }
  };
  (material_radio__material_radio.MaterialRadioComponent.new = function(root, changeDetector, group, cd, role) {
    this[_disposer$] = new utils__disposer__disposer.Disposer.oneShot();
    this[value$] = null;
    this[_disabled] = false;
    this[_onChecked] = StreamControllerOfbool().broadcast();
    this[_checked] = false;
    this[_icon] = material_radio__material_radio.uncheckedIcon;
    this[_tabIndex] = 0;
    this[_enabledTabIndex] = 0;
    this[_focusMoveCtrl] = StreamControllerOfFocusMoveEvent().broadcast({sync: true});
    this[_selectionMoveCtrl] = StreamControllerOfFocusMoveEvent().broadcast({sync: true});
    this[_focused] = false;
    this[_isKeyboardEvent] = false;
    this[_root$] = root;
    this[_changeDetector] = changeDetector;
    this[_group] = group;
    this[role$] = role != null ? role : 'radio';
    material_radio__material_radio.MaterialRadioComponent.__proto__.new.call(this, root);
    if (cd != null) {
      cd.valueAccessor = this;
    }
    this[_syncAriaChecked]();
  }).prototype = material_radio__material_radio.MaterialRadioComponent.prototype;
  dart.addTypeTests(material_radio__material_radio.MaterialRadioComponent);
  const role$ = Symbol("MaterialRadioComponent.role");
  const value$ = Symbol("MaterialRadioComponent.value");
  material_radio__material_radio.MaterialRadioComponent[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, focus__focus.FocusableItem, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_radio__material_radio.MaterialRadioComponent, () => ({
    __proto__: dart.getMethods(material_radio__material_radio.MaterialRadioComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    writeValue: dart.fnType(dart.void, [dart.dynamic]),
    registerOnChange: dart.fnType(dart.void, [dynamic__Todynamic()]),
    registerOnTouched: dart.fnType(dart.void, [VoidTodynamic()]),
    [_updateTabIndex]: dart.fnType(dart.void, []),
    handleKeyDown: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleKeyUp: dart.fnType(dart.void, [html.KeyboardEvent]),
    onFocus: dart.fnType(dart.void, []),
    onBlur: dart.fnType(dart.void, []),
    select: dart.fnType(dart.void, []),
    handleClick: dart.fnType(dart.void, [html.MouseEvent]),
    handleKeyPress: dart.fnType(dart.void, [html.KeyboardEvent]),
    [_syncAriaChecked]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_radio__material_radio.MaterialRadioComponent, () => ({
    __proto__: dart.getGetters(material_radio__material_radio.MaterialRadioComponent.__proto__),
    disabled: dart.fnType(core.bool, []),
    onChecked: dart.fnType(async.Stream$(core.bool), []),
    checked: dart.fnType(core.bool, []),
    icon: dart.fnType(model__ui__icon.Icon, []),
    tabIndex: dart.fnType(core.String, []),
    focusmove: dart.fnType(async.Stream$(focus__focus.FocusMoveEvent), []),
    selectionmove: dart.fnType(async.Stream$(focus__focus.FocusMoveEvent), []),
    showFocus: dart.fnType(core.bool, []),
    [_ariaChecked]: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(material_radio__material_radio.MaterialRadioComponent, () => ({
    __proto__: dart.getSetters(material_radio__material_radio.MaterialRadioComponent.__proto__),
    disabled: dart.fnType(dart.void, [core.bool]),
    checked: dart.fnType(dart.void, [core.bool]),
    tabbable: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_radio__material_radio.MaterialRadioComponent, () => ({
    __proto__: dart.getFields(material_radio__material_radio.MaterialRadioComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_disposer$]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_group]: dart.finalFieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_root$]: dart.finalFieldType(html.HtmlElement),
    role: dart.finalFieldType(core.String),
    value: dart.fieldType(dart.dynamic),
    [_disabled]: dart.fieldType(core.bool),
    [_onChecked]: dart.finalFieldType(StreamControllerOfbool()),
    [_checked]: dart.fieldType(core.bool),
    [_icon]: dart.fieldType(model__ui__icon.Icon),
    [_tabIndex]: dart.fieldType(core.int),
    [_enabledTabIndex]: dart.fieldType(core.int),
    [_focusMoveCtrl]: dart.finalFieldType(StreamControllerOfFocusMoveEvent()),
    [_selectionMoveCtrl]: dart.finalFieldType(StreamControllerOfFocusMoveEvent()),
    [_focused]: dart.fieldType(core.bool),
    [_isKeyboardEvent]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_radio/material_radio.ddc", {
    "package:angular_components/material_radio/material_radio_group.dart": material_radio__material_radio_group,
    "package:angular_components/material_radio/material_radio.dart": material_radio__material_radio
  }, '{"version":3,"sourceRoot":"","sources":["material_radio_group.dart","material_radio.dart"],"names":[],"mappings":"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","file":"material_radio.ddc.js"}');
  // Exports:
  return {
    material_radio__material_radio_group: material_radio__material_radio_group,
    material_radio__material_radio: material_radio__material_radio
  };
});

//# sourceMappingURL=material_radio.ddc.js.map
