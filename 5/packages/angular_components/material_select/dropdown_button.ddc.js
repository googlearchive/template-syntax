define(['dart_sdk', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/mixins/button_wrapper', 'packages/angular_components/button_decorator/button_decorator'], function(dart_sdk, focusable_mixin, button_wrapper, button_decorator) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mixins__focusable_mixin = focusable_mixin.mixins__focusable_mixin;
  const mixins__button_wrapper = button_wrapper.mixins__button_wrapper;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const _root = Object.create(null);
  const material_select__dropdown_button = Object.create(_root);
  let StreamControllerOfFocusEvent = () => (StreamControllerOfFocusEvent = dart.constFn(async.StreamController$(html.FocusEvent)))();
  const _button = Symbol('_button');
  const _showButtonBorder = Symbol('_showButtonBorder');
  const _blur = Symbol('_blur');
  const Object_FocusableMixin$ = class Object_FocusableMixin extends core.Object {};
  (Object_FocusableMixin$.new = function() {
    mixins__focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$.prototype;
  dart.mixinMembers(Object_FocusableMixin$, mixins__focusable_mixin.FocusableMixin);
  const Object_MaterialButtonWrapper$ = class Object_MaterialButtonWrapper extends Object_FocusableMixin$ {};
  (Object_MaterialButtonWrapper$.new = function() {
    mixins__button_wrapper.MaterialButtonWrapper.new.call(this);
    Object_MaterialButtonWrapper$.__proto__.new.call(this);
  }).prototype = Object_MaterialButtonWrapper$.prototype;
  dart.mixinMembers(Object_MaterialButtonWrapper$, mixins__button_wrapper.MaterialButtonWrapper);
  material_select__dropdown_button.DropdownButtonComponent = class DropdownButtonComponent extends Object_MaterialButtonWrapper$ {
    set button(b) {
      this[_button] = b;
      this.focusable = b;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get invalid() {
      return this.error != null;
    }
    set showButtonBorder(value) {
      this[_showButtonBorder] = value;
    }
    get showButtonBorder() {
      if (this[_showButtonBorder] != null) return this[_showButtonBorder];
      return this.buttonText != null;
    }
    get onBlur() {
      return this[_blur].stream;
    }
    handleBlur(event) {
      this[_blur].add(event);
    }
    get trigger() {
      return this[_button].trigger;
    }
  };
  (material_select__dropdown_button.DropdownButtonComponent.new = function() {
    this[_button] = null;
    this[error] = null;
    this[_showButtonBorder] = null;
    this[_blur] = StreamControllerOfFocusEvent().new({sync: true});
    material_select__dropdown_button.DropdownButtonComponent.__proto__.new.call(this);
    this.iconName = 'arrow_drop_down';
  }).prototype = material_select__dropdown_button.DropdownButtonComponent.prototype;
  dart.addTypeTests(material_select__dropdown_button.DropdownButtonComponent);
  const error = Symbol("DropdownButtonComponent.error");
  dart.setMethodSignature(material_select__dropdown_button.DropdownButtonComponent, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button.DropdownButtonComponent.__proto__),
    handleBlur: dart.fnType(dart.void, [html.FocusEvent])
  }));
  dart.setGetterSignature(material_select__dropdown_button.DropdownButtonComponent, () => ({
    __proto__: dart.getGetters(material_select__dropdown_button.DropdownButtonComponent.__proto__),
    invalid: dart.fnType(core.bool, []),
    showButtonBorder: dart.fnType(core.bool, []),
    onBlur: dart.fnType(async.Stream$(html.FocusEvent), []),
    trigger: dart.fnType(async.Stream$(html.UIEvent), [])
  }));
  dart.setSetterSignature(material_select__dropdown_button.DropdownButtonComponent, () => ({
    __proto__: dart.getSetters(material_select__dropdown_button.DropdownButtonComponent.__proto__),
    button: dart.fnType(dart.void, [button_decorator__button_decorator.ButtonDirective]),
    showButtonBorder: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_select__dropdown_button.DropdownButtonComponent, () => ({
    __proto__: dart.getFields(material_select__dropdown_button.DropdownButtonComponent.__proto__),
    [_button]: dart.fieldType(button_decorator__button_decorator.ButtonDirective),
    error: dart.fieldType(core.String),
    [_showButtonBorder]: dart.fieldType(core.bool),
    [_blur]: dart.finalFieldType(StreamControllerOfFocusEvent())
  }));
  dart.trackLibraries("packages/angular_components/material_select/dropdown_button.ddc", {
    "package:angular_components/material_select/dropdown_button.dart": material_select__dropdown_button
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;eA2Da,CAAiB;AAC1B,mBAAO,GAAG,CAAC;AACX,oBAAS,GAAG,CAAC;IACf;IAMO;;;;;;;YAEa,WAAK,IAAI;IAAI;yBAIZ,KAAU;AAC7B,6BAAiB,GAAG,KAAK;IAC3B;;AAGE,UAAI,uBAAiB,IAAI,MAAM,MAAO,wBAAiB;AAGvD,YAAO,gBAAU,IAAI;IACvB;;YAKiC,YAAK,OAAO;;eAG7B,KAAgB;AAC9B,iBAAK,IAAI,CAAC,KAAK;IACjB;;YAG+B,cAAO,QAAQ;;;;IAxC9B,aAAO;IAYhB,WAAK;IAiBP,uBAAiB;IAIhB,WAAK,GAAG,AAAI,kCAA4B,QAAO;;AApCnD,iBAAQ,GAAG;EACb","file":"dropdown_button.ddc.js"}');
  // Exports:
  return {
    material_select__dropdown_button: material_select__dropdown_button
  };
});

//# sourceMappingURL=dropdown_button.ddc.js.map
