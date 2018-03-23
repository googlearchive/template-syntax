define(['dart_sdk', 'packages/angular_components/material_button/material_button_base', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, material_button_base, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button__material_button_base = material_button_base.material_button__material_button_base;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_button__material_fab = Object.create(_root);
  const _changeDetector = Symbol('_changeDetector');
  material_button__material_fab.MaterialFabComponent = class MaterialFabComponent extends material_button__material_button_base.MaterialButtonBase {
    get isPressed() {
      return dart.test(this.isMouseDown) || dart.test(this.focused);
    }
    focusedStateChanged() {
      this[_changeDetector].markForCheck();
    }
  };
  (material_button__material_fab.MaterialFabComponent.new = function(element, changeDetector) {
    this[_changeDetector] = changeDetector;
    material_button__material_fab.MaterialFabComponent.__proto__.new.call(this, element);
  }).prototype = material_button__material_fab.MaterialFabComponent.prototype;
  dart.addTypeTests(material_button__material_fab.MaterialFabComponent);
  dart.setGetterSignature(material_button__material_fab.MaterialFabComponent, () => ({
    __proto__: dart.getGetters(material_button__material_fab.MaterialFabComponent.__proto__),
    isPressed: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(material_button__material_fab.MaterialFabComponent, () => ({
    __proto__: dart.getFields(material_button__material_fab.MaterialFabComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef)
  }));
  dart.trackLibraries("packages/angular_components/material_button/material_fab.ddc", {
    "package:angular_components/material_button/material_fab.dart": material_button__material_fab
  }, '{"version":3,"sourceRoot":"","sources":["material_fab.dart"],"names":[],"mappings":";;;;;;;;;;;;YAsEoC,WAAZ,gBAAW,eAAI,YAAO;;;AAI1C,2BAAe,aAAa;IAC9B;;qEARqB,OAAmB,EAAO,cAAe;IAAf,qBAAe,GAAf,cAAe;AACxD,gFAAM,OAAO;EAAC","file":"material_fab.ddc.js"}');
  // Exports:
  return {
    material_button__material_fab: material_button__material_fab
  };
});

//# sourceMappingURL=material_fab.ddc.js.map
