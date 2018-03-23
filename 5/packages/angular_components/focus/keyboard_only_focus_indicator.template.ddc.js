define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, angular, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service.utils__browser__dom_service__dom_service$46template;
  const _root = Object.create(null);
  const focus__keyboard_only_focus_indicator$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(focus__keyboard_only_focus_indicator$46template, {
    /*focus__keyboard_only_focus_indicator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  focus__keyboard_only_focus_indicator$46template.initReflector = function() {
    if (dart.test(focus__keyboard_only_focus_indicator$46template._visited)) {
      return;
    }
    focus__keyboard_only_focus_indicator$46template._visited = true;
    angular$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.fn(focus__keyboard_only_focus_indicator$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/focus/keyboard_only_focus_indicator.template.ddc", {
    "package:angular_components/focus/keyboard_only_focus_indicator.template.dart": focus__keyboard_only_focus_indicator$46template
  }, '{"version":3,"sourceRoot":"","sources":["keyboard_only_focus_indicator.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,wDAAQ;YAAG;;;;;AAEb,kBAAI,wDAAQ,GAAE;AACZ;;AAEF,+DAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,iEAAa;EACrB","file":"keyboard_only_focus_indicator.template.ddc.js"}');
  // Exports:
  return {
    focus__keyboard_only_focus_indicator$46template: focus__keyboard_only_focus_indicator$46template
  };
});

//# sourceMappingURL=keyboard_only_focus_indicator.template.ddc.js.map
