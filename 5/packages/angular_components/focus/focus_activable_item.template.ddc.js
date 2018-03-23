define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template'], function(dart_sdk, angular, focus) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const _root = Object.create(null);
  const focus__focus_activable_item$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(focus__focus_activable_item$46template, {
    /*focus__focus_activable_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  focus__focus_activable_item$46template.initReflector = function() {
    if (dart.test(focus__focus_activable_item$46template._visited)) {
      return;
    }
    focus__focus_activable_item$46template._visited = true;
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
  };
  dart.fn(focus__focus_activable_item$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/focus/focus_activable_item.template.ddc", {
    "package:angular_components/focus/focus_activable_item.template.dart": focus__focus_activable_item$46template
  }, '{"version":3,"sourceRoot":"","sources":["focus_activable_item.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,qCAAa;EACrB","file":"focus_activable_item.template.ddc.js"}');
  // Exports:
  return {
    focus__focus_activable_item$46template: focus__focus_activable_item$46template
  };
});

//# sourceMappingURL=focus_activable_item.template.ddc.js.map
