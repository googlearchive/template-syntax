define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/angular/imperative_view/imperative_view.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, angular, imperative_view, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const utils__angular__imperative_view__imperative_view$46template = imperative_view.utils__angular__imperative_view__imperative_view$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const laminate__portal__portal$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(laminate__portal__portal$46template, {
    /*laminate__portal__portal$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  laminate__portal__portal$46template.initReflector = function() {
    if (dart.test(laminate__portal__portal$46template._visited)) {
      return;
    }
    laminate__portal__portal$46template._visited = true;
    angular$46template.initReflector();
    utils__angular__imperative_view__imperative_view$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(laminate__portal__portal$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/laminate/portal/portal.template.ddc", {
    "package:angular_components/laminate/portal/portal.template.dart": laminate__portal__portal$46template
  }, '{"version":3,"sourceRoot":"","sources":["portal.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAgBI,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,yEAAa;AACnB,IAAM,kDAAa;EACrB","file":"portal.template.ddc.js"}');
  // Exports:
  return {
    laminate__portal__portal$46template: laminate__portal__portal$46template
  };
});

//# sourceMappingURL=portal.template.ddc.js.map
