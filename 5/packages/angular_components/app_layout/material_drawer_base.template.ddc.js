define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template'], function(dart_sdk, angular, deferred_content_aware) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware.content__deferred_content_aware$46template;
  const _root = Object.create(null);
  const app_layout__material_drawer_base$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(app_layout__material_drawer_base$46template, {
    /*app_layout__material_drawer_base$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_layout__material_drawer_base$46template.initReflector = function() {
    if (dart.test(app_layout__material_drawer_base$46template._visited)) {
      return;
    }
    app_layout__material_drawer_base$46template._visited = true;
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
  };
  dart.fn(app_layout__material_drawer_base$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/app_layout/material_drawer_base.template.ddc", {
    "package:angular_components/app_layout/material_drawer_base.template.dart": app_layout__material_drawer_base$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_drawer_base.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,oDAAQ;YAAG;;;;;AAEb,kBAAI,oDAAQ,GAAE;AACZ;;AAEF,2DAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,wDAAa;EACrB","file":"material_drawer_base.template.ddc.js"}');
  // Exports:
  return {
    app_layout__material_drawer_base$46template: app_layout__material_drawer_base$46template
  };
});

//# sourceMappingURL=material_drawer_base.template.ddc.js.map
