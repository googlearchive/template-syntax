define(['dart_sdk', 'packages/angular_components/material_button/material_button_base', 'packages/angular_components/material_tab/tab_mixin'], function(dart_sdk, material_button_base, tab_mixin) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button__material_button_base = material_button_base.material_button__material_button_base;
  const material_tab__tab_mixin = tab_mixin.material_tab__tab_mixin;
  const _root = Object.create(null);
  const material_tab__tab_button = Object.create(_root);
  const _nativeElement = Symbol('_nativeElement');
  const MaterialButtonBase_TabMixin$ = class MaterialButtonBase_TabMixin extends material_button__material_button_base.MaterialButtonBase {};
  (MaterialButtonBase_TabMixin$.new = function(element) {
    material_tab__tab_mixin.TabMixin.new.call(this);
    MaterialButtonBase_TabMixin$.__proto__.new.call(this, element);
  }).prototype = MaterialButtonBase_TabMixin$.prototype;
  dart.mixinMembers(MaterialButtonBase_TabMixin$, material_tab__tab_mixin.TabMixin);
  material_tab__tab_button.TabButtonComponent = class TabButtonComponent extends MaterialButtonBase_TabMixin$ {
    get nativeElement() {
      return this[_nativeElement];
    }
    get isActive() {
      return this[isActive];
    }
    set isActive(value) {
      this[isActive] = value;
    }
  };
  (material_tab__tab_button.TabButtonComponent.new = function(nativeElement) {
    this[isActive] = null;
    this[_nativeElement] = nativeElement;
    material_tab__tab_button.TabButtonComponent.__proto__.new.call(this, html.HtmlElement._check(nativeElement));
  }).prototype = material_tab__tab_button.TabButtonComponent.prototype;
  dart.addTypeTests(material_tab__tab_button.TabButtonComponent);
  const isActive = Symbol("TabButtonComponent.isActive");
  dart.setGetterSignature(material_tab__tab_button.TabButtonComponent, () => ({
    __proto__: dart.getGetters(material_tab__tab_button.TabButtonComponent.__proto__),
    nativeElement: dart.fnType(html.Element, [])
  }));
  dart.setFieldSignature(material_tab__tab_button.TabButtonComponent, () => ({
    __proto__: dart.getFields(material_tab__tab_button.TabButtonComponent.__proto__),
    [_nativeElement]: dart.finalFieldType(html.Element),
    isActive: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_tab/tab_button.ddc", {
    "package:angular_components/material_tab/tab_button.dart": material_tab__tab_button
  }, '{"version":3,"sourceRoot":"","sources":["tab_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;YAoC+B,qBAAc;;IAItC;;;;;;;8DAP2C,aAAc;IAOzD,cAAQ;IAPW,oBAAc,GAAU,aAAc;AAApB,iGAAM,aAAc;EAAC","file":"tab_button.ddc.js"}');
  // Exports:
  return {
    material_tab__tab_button: material_tab__tab_button
  };
});

//# sourceMappingURL=tab_button.ddc.js.map
