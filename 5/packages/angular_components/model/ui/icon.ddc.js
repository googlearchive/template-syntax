define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const model__ui__icon = Object.create(_root);
  model__ui__icon.HasIcon = class HasIcon extends core.Object {};
  (model__ui__icon.HasIcon.new = function() {
  }).prototype = model__ui__icon.HasIcon.prototype;
  dart.addTypeTests(model__ui__icon.HasIcon);
  model__ui__icon.HasHoverIcon = class HasHoverIcon extends core.Object {};
  (model__ui__icon.HasHoverIcon.new = function() {
  }).prototype = model__ui__icon.HasHoverIcon.prototype;
  dart.addTypeTests(model__ui__icon.HasHoverIcon);
  model__ui__icon.Icon = class Icon extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
  };
  (model__ui__icon.Icon.new = function(name) {
    this[name$] = name;
  }).prototype = model__ui__icon.Icon.prototype;
  dart.addTypeTests(model__ui__icon.Icon);
  const name$ = Symbol("Icon.name");
  dart.setFieldSignature(model__ui__icon.Icon, () => ({
    __proto__: dart.getFields(model__ui__icon.Icon.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/model/ui/icon.ddc", {
    "package:angular_components/model/ui/icon.dart": model__ui__icon
  }, '{"version":3,"sourceRoot":"","sources":["icon.dart"],"names":[],"mappings":";;;;;;;;;EAOA;;;;EAMA;;;IAKe;;;;;;;uCAEF,IAAS;IAAJ,WAAI,GAAJ,IAAI;EAAC","file":"icon.ddc.js"}');
  // Exports:
  return {
    model__ui__icon: model__ui__icon
  };
});

//# sourceMappingURL=icon.ddc.js.map
