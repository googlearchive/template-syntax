define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/focus/focus', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_menu/material_menu'], function(dart_sdk, disposer, focus, focusable_mixin, menu_popup_wrapper, lifecycle_hooks, dropdown_button, material_menu) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const focus__focus = focus.focus__focus;
  const mixins__focusable_mixin = focusable_mixin.mixins__focusable_mixin;
  const material_menu__menu_popup_wrapper = menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const material_select__dropdown_button = dropdown_button.material_select__dropdown_button;
  const material_menu__menu_popup = material_menu.material_menu__menu_popup;
  const _root = Object.create(null);
  const material_menu__dropdown_menu = Object.create(_root);
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  const _disposer = Symbol('_disposer');
  const _disabled = Symbol('_disabled');
  const _dropdownStyle = Symbol('_dropdownStyle');
  const _focusTarget = Symbol('_focusTarget');
  const Object_FocusableMixin$ = class Object_FocusableMixin extends core.Object {};
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
  material_menu__dropdown_menu.DropdownMenuComponent = class DropdownMenuComponent extends Object_MenuPopupWrapper$ {
    ngOnDestroy() {
      this[_disposer].dispose();
    }
    ngAfterViewInit() {
      this.focusable = this[_focusTarget];
    }
    get buttonText() {
      return this[buttonText];
    }
    set buttonText(value) {
      this[buttonText] = value;
    }
    get disabled() {
      return this[_disabled];
    }
    set disabled(d) {
      this[_disabled] = d;
      this.focusable = this[_focusTarget];
    }
    get dropdownStyle() {
      return this[_dropdownStyle];
    }
    get dropdownButton() {
      return this[dropdownButton];
    }
    set dropdownButton(value) {
      this[dropdownButton] = value;
    }
    get menuPopup() {
      return this[menuPopup];
    }
    set menuPopup(value) {
      this[menuPopup] = value;
    }
    get [_focusTarget]() {
      return focus__focus.Focusable._check(dart.test(this.disabled) ? null : dart.test(this.isExpanded) ? this.menuPopup : this.dropdownButton);
    }
  };
  (material_menu__dropdown_menu.DropdownMenuComponent.new = function(_changeDetector) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[buttonText] = null;
    this[_disabled] = false;
    this[_dropdownStyle] = false;
    this[dropdownButton] = null;
    this[menuPopup] = null;
    material_menu__dropdown_menu.DropdownMenuComponent.__proto__.new.call(this);
    this[_disposer].addStreamSubscription(core.bool, this.isExpandedChange.listen(dart.fn(_ => {
      this.focusable = this[_focusTarget];
      _changeDetector.markForCheck();
    }, boolToNull())));
  }).prototype = material_menu__dropdown_menu.DropdownMenuComponent.prototype;
  dart.addTypeTests(material_menu__dropdown_menu.DropdownMenuComponent);
  const buttonText = Symbol("DropdownMenuComponent.buttonText");
  const dropdownButton = Symbol("DropdownMenuComponent.dropdownButton");
  const menuPopup = Symbol("DropdownMenuComponent.menuPopup");
  material_menu__dropdown_menu.DropdownMenuComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_menu__dropdown_menu.DropdownMenuComponent, () => ({
    __proto__: dart.getMethods(material_menu__dropdown_menu.DropdownMenuComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__dropdown_menu.DropdownMenuComponent, () => ({
    __proto__: dart.getGetters(material_menu__dropdown_menu.DropdownMenuComponent.__proto__),
    disabled: dart.fnType(core.bool, []),
    dropdownStyle: dart.fnType(core.bool, []),
    [_focusTarget]: dart.fnType(focus__focus.Focusable, [])
  }));
  dart.setSetterSignature(material_menu__dropdown_menu.DropdownMenuComponent, () => ({
    __proto__: dart.getSetters(material_menu__dropdown_menu.DropdownMenuComponent.__proto__),
    disabled: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_menu__dropdown_menu.DropdownMenuComponent, () => ({
    __proto__: dart.getFields(material_menu__dropdown_menu.DropdownMenuComponent.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    buttonText: dart.fieldType(core.String),
    [_disabled]: dart.fieldType(core.bool),
    [_dropdownStyle]: dart.fieldType(core.bool),
    dropdownButton: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    menuPopup: dart.fieldType(material_menu__menu_popup.MenuPopupComponent)
  }));
  dart.trackLibraries("packages/angular_components/material_menu/dropdown_menu.ddc", {
    "package:angular_components/material_menu/dropdown_menu.dart": material_menu__dropdown_menu
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_menu.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6CI,qBAAS,QAAQ;IACnB;;AAIE,oBAAS,GAAG,kBAAY;IAC1B;IAIO;;;;;;;YAIc,gBAAS;;iBAGjB,CAAM;AACjB,qBAAS,GAAG,CAAC;AACb,oBAAS,GAAG,kBAAY;IAC1B;;YAE0B,qBAAc;;IAIhB;;;;;;IAGL;;;;;;;qDAGf,aAAQ,IAAG,iBAAQ,eAAU,IAAG,cAAS,GAAG,mBAAc;IAAC;;qEA3CzC,eAAiC;IAFjD,eAAS,GAAG,IAAI,0CAAgB;IAuB/B,gBAAU;IAEZ,eAAS,GAAG;IAWZ,oBAAc,GAAG;IAGE,oBAAc;IAGnB,eAAS;;AArC1B,mBAAS,sBAAsB,YAAC,qBAAgB,OAAO,CAAC,QAAC,CAAC;AACxD,oBAAS,GAAG,kBAAY;AACxB,qBAAe,aAAa;;EAEhC","file":"dropdown_menu.ddc.js"}');
  // Exports:
  return {
    material_menu__dropdown_menu: material_menu__dropdown_menu
  };
});

//# sourceMappingURL=dropdown_menu.ddc.js.map
