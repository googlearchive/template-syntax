define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, angular, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service.utils__browser__dom_service__dom_service$46template;
  const _root = Object.create(null);
  const model__a11y__active_item_mixin$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__a11y__active_item_mixin$46template, {
    /*model__a11y__active_item_mixin$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__a11y__active_item_mixin$46template.initReflector = function() {
    if (dart.test(model__a11y__active_item_mixin$46template._visited)) {
      return;
    }
    model__a11y__active_item_mixin$46template._visited = true;
    angular$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.fn(model__a11y__active_item_mixin$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/a11y/active_item_mixin.template.ddc", {
    "package:angular_components/model/a11y/active_item_mixin.template.dart": model__a11y__active_item_mixin$46template
  }, '{"version":3,"sourceRoot":"","sources":["active_item_mixin.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAcI,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,iEAAa;EACrB","file":"active_item_mixin.template.ddc.js"}');
  // Exports:
  return {
    model__a11y__active_item_mixin$46template: model__a11y__active_item_mixin$46template
  };
});

//# sourceMappingURL=active_item_mixin.template.ddc.js.map
