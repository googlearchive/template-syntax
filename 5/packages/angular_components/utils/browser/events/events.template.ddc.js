define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template'], function(dart_sdk, angular, feature_detector) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const utils__browser__feature_detector__feature_detector$46template = feature_detector.utils__browser__feature_detector__feature_detector$46template;
  const _root = Object.create(null);
  const utils__browser__events__events$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(utils__browser__events__events$46template, {
    /*utils__browser__events__events$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__browser__events__events$46template.initReflector = function() {
    if (dart.test(utils__browser__events__events$46template._visited)) {
      return;
    }
    utils__browser__events__events$46template._visited = true;
    angular$46template.initReflector();
    utils__browser__feature_detector__feature_detector$46template.initReflector();
  };
  dart.fn(utils__browser__events__events$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/utils/browser/events/events.template.ddc", {
    "package:angular_components/utils/browser/events/events.template.dart": utils__browser__events__events$46template
  }, '{"version":3,"sourceRoot":"","sources":["events.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAgBI,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,2EAAa;EACrB","file":"events.template.ddc.js"}');
  // Exports:
  return {
    utils__browser__events__events$46template: utils__browser__events__events$46template
  };
});

//# sourceMappingURL=events.template.ddc.js.map
