define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template'], function(dart_sdk, angular, angular_2) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const utils__browser__dom_service__angular_2$46template = angular_2.utils__browser__dom_service__angular_2$46template;
  const _root = Object.create(null);
  const utils__showhide__showhide$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(utils__showhide__showhide$46template, {
    /*utils__showhide__showhide$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__showhide__showhide$46template.initReflector = function() {
    if (dart.test(utils__showhide__showhide$46template._visited)) {
      return;
    }
    utils__showhide__showhide$46template._visited = true;
    angular$46template.initReflector();
    utils__browser__dom_service__angular_2$46template.initReflector();
  };
  dart.fn(utils__showhide__showhide$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/utils/showhide/showhide.template.ddc", {
    "package:angular_components/utils/showhide/showhide.template.dart": utils__showhide__showhide$46template
  }, '{"version":3,"sourceRoot":"","sources":["showhide.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAeI,6CAAQ;YAAG;;;;;AAEb,kBAAI,6CAAQ,GAAE;AACZ;;AAEF,oDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,+DAAa;EACrB","file":"showhide.template.ddc.js"}');
  // Exports:
  return {
    utils__showhide__showhide$46template: utils__showhide__showhide$46template
  };
});

//# sourceMappingURL=showhide.template.ddc.js.map
