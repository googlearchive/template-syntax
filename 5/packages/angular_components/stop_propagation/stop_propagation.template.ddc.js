define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/events/events.template'], function(dart_sdk, angular, events) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const _root = Object.create(null);
  const stop_propagation__stop_propagation$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(stop_propagation__stop_propagation$46template, {
    /*stop_propagation__stop_propagation$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  stop_propagation__stop_propagation$46template.initReflector = function() {
    if (dart.test(stop_propagation__stop_propagation$46template._visited)) {
      return;
    }
    stop_propagation__stop_propagation$46template._visited = true;
    angular$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
  };
  dart.fn(stop_propagation__stop_propagation$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/stop_propagation/stop_propagation.template.ddc", {
    "package:angular_components/stop_propagation/stop_propagation.template.dart": stop_propagation__stop_propagation$46template
  }, '{"version":3,"sourceRoot":"","sources":["stop_propagation.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAcI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,uDAAa;EACrB","file":"stop_propagation.template.ddc.js"}');
  // Exports:
  return {
    stop_propagation__stop_propagation$46template: stop_propagation__stop_propagation$46template
  };
});

//# sourceMappingURL=stop_propagation.template.ddc.js.map
