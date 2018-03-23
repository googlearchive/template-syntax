define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/src/laminate/popup/popup_source.template', 'packages/angular_components/src/laminate/popup/popup_state.template'], function(dart_sdk, angular, popup_source, popup_state) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const src__laminate__popup__popup_source$46template = popup_source.src__laminate__popup__popup_source$46template;
  const src__laminate__popup__popup_state$46template = popup_state.src__laminate__popup__popup_state$46template;
  const _root = Object.create(null);
  const src__laminate__popup__popup_interface$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__popup__popup_interface$46template, {
    /*src__laminate__popup__popup_interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__popup__popup_interface$46template.initReflector = function() {
    if (dart.test(src__laminate__popup__popup_interface$46template._visited)) {
      return;
    }
    src__laminate__popup__popup_interface$46template._visited = true;
    angular$46template.initReflector();
    src__laminate__popup__popup_source$46template.initReflector();
    src__laminate__popup__popup_state$46template.initReflector();
  };
  dart.fn(src__laminate__popup__popup_interface$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_interface.template.ddc", {
    "package:angular_components/src/laminate/popup/popup_interface.template.dart": src__laminate__popup__popup_interface$46template
  }, '{"version":3,"sourceRoot":"","sources":["popup_interface.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAeI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,0DAAa;EACrB","file":"popup_interface.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_interface$46template: src__laminate__popup__popup_interface$46template
  };
});

//# sourceMappingURL=popup_interface.template.ddc.js.map
