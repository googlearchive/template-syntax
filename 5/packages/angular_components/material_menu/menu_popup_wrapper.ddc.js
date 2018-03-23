define(['dart_sdk', 'packages/angular_components/model/observable/observable', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/ui/accepts_width', 'packages/angular_components/model/menu/menu'], function(dart_sdk, observable, properties, accepts_width, menu) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__observable__observable = observable.model__observable__observable;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const model__ui__accepts_width = accepts_width.model__ui__accepts_width;
  const model__menu__menu = menu.model__menu__menu;
  const _root = Object.create(null);
  const material_menu__menu_popup_wrapper = Object.create(_root);
  let ObservableReferenceOfbool = () => (ObservableReferenceOfbool = dart.constFn(model__observable__observable.ObservableReference$(core.bool)))();
  const _expanded = Symbol('_expanded');
  const _width = Symbol('_width');
  material_menu__menu_popup_wrapper.MenuPopupWrapper = class MenuPopupWrapper extends core.Object {
    get menu() {
      return this[menu$];
    }
    set menu(value) {
      this[menu$] = value;
    }
    get isExpanded() {
      return this[_expanded].value;
    }
    set isExpanded(value) {
      if (core.identical(this[_expanded].value, value)) return;
      this[_expanded].value = utils__angular__properties__properties.getBool(value);
    }
    get isExpandedChange() {
      return this[_expanded].stream;
    }
    get width() {
      let t = this.menu;
      let l = t == null ? null : t.width;
      return l != null ? l : this[_width];
    }
    set width(val) {
      this[_width] = utils__angular__properties__properties.getInt(val, {defaultValue: 0});
      if (!(dart.notNull(this[_width]) >= 0 && dart.notNull(this[_width]) <= 5)) dart.assertFailed();
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
  };
  (material_menu__menu_popup_wrapper.MenuPopupWrapper.new = function() {
    this[menu$] = null;
    this[_expanded] = new (ObservableReferenceOfbool()).new(false);
    this[_width] = 0;
    this[preferredPositions] = null;
  }).prototype = material_menu__menu_popup_wrapper.MenuPopupWrapper.prototype;
  dart.addTypeTests(material_menu__menu_popup_wrapper.MenuPopupWrapper);
  const menu$ = Symbol("MenuPopupWrapper.menu");
  const preferredPositions = Symbol("MenuPopupWrapper.preferredPositions");
  material_menu__menu_popup_wrapper.MenuPopupWrapper[dart.implements] = () => [model__ui__accepts_width.AcceptsWidth];
  dart.setGetterSignature(material_menu__menu_popup_wrapper.MenuPopupWrapper, () => ({
    __proto__: dart.getGetters(material_menu__menu_popup_wrapper.MenuPopupWrapper.__proto__),
    isExpanded: dart.fnType(core.bool, []),
    isExpandedChange: dart.fnType(async.Stream$(core.bool), []),
    width: dart.fnType(core.int, [])
  }));
  dart.setSetterSignature(material_menu__menu_popup_wrapper.MenuPopupWrapper, () => ({
    __proto__: dart.getSetters(material_menu__menu_popup_wrapper.MenuPopupWrapper.__proto__),
    isExpanded: dart.fnType(dart.void, [dart.dynamic]),
    width: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_menu__menu_popup_wrapper.MenuPopupWrapper, () => ({
    __proto__: dart.getFields(material_menu__menu_popup_wrapper.MenuPopupWrapper.__proto__),
    menu: dart.fieldType(model__menu__menu.MenuModel),
    [_expanded]: dart.finalFieldType(ObservableReferenceOfbool()),
    [_width]: dart.fieldType(core.int),
    preferredPositions: dart.fieldType(core.Iterable)
  }));
  dart.trackLibraries("packages/angular_components/material_menu/menu_popup_wrapper.ddc", {
    "package:angular_components/material_menu/menu_popup_wrapper.dart": material_menu__menu_popup_wrapper
  }, '{"version":3,"sourceRoot":"","sources":["menu_popup_wrapper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAgBY;;;;;;;YAGa,gBAAS,MAAM;;mBAEvB,KAAK;AAClB,yBAAI,eAAS,MAAM,EAAI,KAAK,GAAE;AAC9B,qBAAS,MAAM,GAAG,8CAAO,CAAC,KAAK;IACjC;;YAGqC,gBAAS,OAAO;;;cAYpC,SAAI;;6BAAW,YAAM;;cAI5B,GAAG;AACX,kBAAM,GAAG,6CAAM,CAAC,GAAG,iBAAgB;AACnC,YAAc,AAAK,aAAZ,YAAM,KAAI,KAAY,aAAP,YAAM,KAAI;IAClC;IAQS;;;;;;;;IAtCC,WAAI;IAYR,eAAS,GAAG,IAAI,iCAAyB,CAAC;IAoB5C,YAAM,GAAG;IAMJ,wBAAkB;EAC7B","file":"menu_popup_wrapper.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_popup_wrapper: material_menu__menu_popup_wrapper
  };
});

//# sourceMappingURL=menu_popup_wrapper.ddc.js.map
