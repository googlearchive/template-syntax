define(['dart_sdk', 'packages/angular/angular.template'], function(dart_sdk, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const mixins__track_layout_changes$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(mixins__track_layout_changes$46template, {
    /*mixins__track_layout_changes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  mixins__track_layout_changes$46template.initReflector = function() {
    if (dart.test(mixins__track_layout_changes$46template._visited)) {
      return;
    }
    mixins__track_layout_changes$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.fn(mixins__track_layout_changes$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/mixins/track_layout_changes.template.ddc", {
    "package:angular_components/mixins/track_layout_changes.template.dart": mixins__track_layout_changes$46template
  }, '{"version":3,"sourceRoot":"","sources":["track_layout_changes.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAM,gCAAa;EACrB","file":"track_layout_changes.template.ddc.js"}');
  // Exports:
  return {
    mixins__track_layout_changes$46template: mixins__track_layout_changes$46template
  };
});

//# sourceMappingURL=track_layout_changes.template.ddc.js.map
