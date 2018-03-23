define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const mixins__track_layout_changes = Object.create(_root);
  mixins__track_layout_changes.TrackLayoutChangesMixin = class TrackLayoutChangesMixin extends core.Object {
    get trackLayoutChanges() {
      return this[trackLayoutChanges];
    }
    set trackLayoutChanges(value) {
      this[trackLayoutChanges] = value;
    }
  };
  (mixins__track_layout_changes.TrackLayoutChangesMixin.new = function() {
    this[trackLayoutChanges] = true;
  }).prototype = mixins__track_layout_changes.TrackLayoutChangesMixin.prototype;
  dart.addTypeTests(mixins__track_layout_changes.TrackLayoutChangesMixin);
  const trackLayoutChanges = Symbol("TrackLayoutChangesMixin.trackLayoutChanges");
  dart.setFieldSignature(mixins__track_layout_changes.TrackLayoutChangesMixin, () => ({
    __proto__: dart.getFields(mixins__track_layout_changes.TrackLayoutChangesMixin.__proto__),
    trackLayoutChanges: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/mixins/track_layout_changes.ddc", {
    "package:angular_components/mixins/track_layout_changes.dart": mixins__track_layout_changes
  }, '{"version":3,"sourceRoot":"","sources":["track_layout_changes.dart"],"names":[],"mappings":";;;;;;;;IAeO;;;;;;;;4BAAkB,GAAG;EAC5B","file":"track_layout_changes.ddc.js"}');
  // Exports:
  return {
    mixins__track_layout_changes: mixins__track_layout_changes
  };
});

//# sourceMappingURL=track_layout_changes.ddc.js.map
