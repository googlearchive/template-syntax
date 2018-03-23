define(['dart_sdk', 'packages/angular_components/material_button/material_button_base', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, material_button_base, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button__material_button_base = material_button_base.material_button__material_button_base;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_button__material_button = Object.create(_root);
  const _changeDetector = Symbol('_changeDetector');
  material_button__material_button.MaterialButtonComponent = class MaterialButtonComponent extends material_button__material_button_base.MaterialButtonBase {
    focusedStateChanged() {
      this[_changeDetector].markForCheck();
    }
  };
  (material_button__material_button.MaterialButtonComponent.new = function(element, darktheme, changeDetector) {
    this[_changeDetector] = changeDetector;
    material_button__material_button.MaterialButtonComponent.__proto__.new.call(this, element);
    if (this[_changeDetector] == null) dart.throw(core.Exception.new('Expecting change detector'));
    darktheme.themeElement(element);
  }).prototype = material_button__material_button.MaterialButtonComponent.prototype;
  dart.addTypeTests(material_button__material_button.MaterialButtonComponent);
  dart.setFieldSignature(material_button__material_button.MaterialButtonComponent, () => ({
    __proto__: dart.getFields(material_button__material_button.MaterialButtonComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef)
  }));
  dart.trackLibraries("packages/angular_components/material_button/material_button.ddc", {
    "package:angular_components/material_button/material_button.dart": material_button__material_button
  }, '{"version":3,"sourceRoot":"","sources":["material_button.dart"],"names":[],"mappings":";;;;;;;;;;;;AAsHI,2BAAe,aAAa;IAC9B;;2EAGI,OAAmB,EAAE,SAAsB,EAAO,cAAe;IAAf,qBAAe,GAAf,cAAe;AAC/D,sFAAM,OAAO;AACjB,QAAI,qBAAe,IAAI,MACrB,WAAM,AAAI,kBAAS,CAAC;AACtB,aAAS,aAAa,CAAC,OAAO;EAChC","file":"material_button.ddc.js"}');
  // Exports:
  return {
    material_button__material_button: material_button__material_button
  };
});

//# sourceMappingURL=material_button.ddc.js.map
