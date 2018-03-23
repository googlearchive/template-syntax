define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/laminate/overlay/overlay.template', 'packages/angular_components/laminate/portal/portal.template'], function(dart_sdk, angular, overlay, portal) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const laminate__overlay__overlay$46template = overlay.laminate__overlay__overlay$46template;
  const laminate__portal__portal$46template = portal.laminate__portal__portal$46template;
  const _root = Object.create(null);
  const src__laminate__components__modal__modal_controller_directive$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__components__modal__modal_controller_directive$46template, {
    /*src__laminate__components__modal__modal_controller_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__components__modal__modal_controller_directive$46template.initReflector = function() {
    if (dart.test(src__laminate__components__modal__modal_controller_directive$46template._visited)) {
      return;
    }
    src__laminate__components__modal__modal_controller_directive$46template._visited = true;
    angular$46template.initReflector();
    laminate__overlay__overlay$46template.initReflector();
    laminate__portal__portal$46template.initReflector();
  };
  dart.fn(src__laminate__components__modal__modal_controller_directive$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/components/modal/modal_controller_directive.template.ddc", {
    "package:angular_components/src/laminate/components/modal/modal_controller_directive.template.dart": src__laminate__components__modal__modal_controller_directive$46template
  }, '{"version":3,"sourceRoot":"","sources":["modal_controller_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAcI,gFAAQ;YAAG;;;;;AAEb,kBAAI,gFAAQ,GAAE;AACZ;;AAEF,uFAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,iDAAa;EACrB","file":"modal_controller_directive.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__components__modal__modal_controller_directive$46template: src__laminate__components__modal__modal_controller_directive$46template
  };
});

//# sourceMappingURL=modal_controller_directive.template.ddc.js.map
