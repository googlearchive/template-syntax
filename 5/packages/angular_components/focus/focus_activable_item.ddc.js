define(['dart_sdk', 'packages/angular_components/focus/focus'], function(dart_sdk, focus) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus__focus = focus.focus__focus;
  const _root = Object.create(null);
  const focus__focus_activable_item = Object.create(_root);
  focus__focus_activable_item.FocusActivableItemDirective = class FocusActivableItemDirective extends focus__focus.RootFocusable {
    get key() {
      return this[key];
    }
    set key(value) {
      this[key] = value;
    }
  };
  (focus__focus_activable_item.FocusActivableItemDirective.new = function(root) {
    this[key] = null;
    focus__focus_activable_item.FocusActivableItemDirective.__proto__.new.call(this, root);
  }).prototype = focus__focus_activable_item.FocusActivableItemDirective.prototype;
  dart.addTypeTests(focus__focus_activable_item.FocusActivableItemDirective);
  const key = Symbol("FocusActivableItemDirective.key");
  focus__focus_activable_item.FocusActivableItemDirective[dart.implements] = () => [focus__focus_activable_item.FocusableActivateItem];
  dart.setFieldSignature(focus__focus_activable_item.FocusActivableItemDirective, () => ({
    __proto__: dart.getFields(focus__focus_activable_item.FocusActivableItemDirective.__proto__),
    key: dart.fieldType(core.String)
  }));
  focus__focus_activable_item.FocusableActivateItem = class FocusableActivateItem extends core.Object {};
  (focus__focus_activable_item.FocusableActivateItem.new = function() {
  }).prototype = focus__focus_activable_item.FocusableActivateItem.prototype;
  dart.addTypeTests(focus__focus_activable_item.FocusableActivateItem);
  focus__focus_activable_item.FocusableActivateItem[dart.implements] = () => [focus__focus.Focusable];
  dart.trackLibraries("packages/angular_components/focus/focus_activable_item.ddc", {
    "package:angular_components/focus/focus_activable_item.dart": focus__focus_activable_item
  }, '{"version":3,"sourceRoot":"","sources":["focus_activable_item.dart"],"names":[],"mappings":";;;;;;;;;IA0BS;;;;;;;0EAEqB,IAAgB;IAFrC,SAAG;AAEsC,qFAAM,IAAI;EAAC;;;;;;;;;;EAM7D","file":"focus_activable_item.ddc.js"}');
  // Exports:
  return {
    focus__focus_activable_item: focus__focus_activable_item
  };
});

//# sourceMappingURL=focus_activable_item.ddc.js.map
