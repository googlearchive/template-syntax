define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/events/events.template'], function(dart_sdk, angular, events) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const _root = Object.create(null);
  const auto_dismiss__auto_dismiss$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(auto_dismiss__auto_dismiss$46template, {
    /*auto_dismiss__auto_dismiss$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  auto_dismiss__auto_dismiss$46template.initReflector = function() {
    if (dart.test(auto_dismiss__auto_dismiss$46template._visited)) {
      return;
    }
    auto_dismiss__auto_dismiss$46template._visited = true;
    angular$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
  };
  dart.fn(auto_dismiss__auto_dismiss$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/auto_dismiss/auto_dismiss.template.ddc", {
    "package:angular_components/auto_dismiss/auto_dismiss.template.dart": auto_dismiss__auto_dismiss$46template
  }, '{"version":3,"sourceRoot":"","sources":["auto_dismiss.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAcI,8CAAQ;YAAG;;;;;AAEb,kBAAI,8CAAQ,GAAE;AACZ;;AAEF,qDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,uDAAa;EACrB","file":"auto_dismiss.template.ddc.js"}');
  // Exports:
  return {
    auto_dismiss__auto_dismiss$46template: auto_dismiss__auto_dismiss$46template
  };
});

//# sourceMappingURL=auto_dismiss.template.ddc.js.map
