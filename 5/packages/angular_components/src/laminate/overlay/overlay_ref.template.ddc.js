define(['dart_sdk', 'packages/angular_components/laminate/enums/visibility.template', 'packages/angular_components/laminate/portal/portal.template', 'packages/angular_components/src/laminate/overlay/overlay_state.template'], function(dart_sdk, visibility, portal, overlay_state) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__visibility$46template = visibility.laminate__enums__visibility$46template;
  const laminate__portal__portal$46template = portal.laminate__portal__portal$46template;
  const src__laminate__overlay__overlay_state$46template = overlay_state.src__laminate__overlay__overlay_state$46template;
  const _root = Object.create(null);
  const src__laminate__overlay__overlay_ref$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__overlay__overlay_ref$46template, {
    /*src__laminate__overlay__overlay_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__overlay__overlay_ref$46template.initReflector = function() {
    if (dart.test(src__laminate__overlay__overlay_ref$46template._visited)) {
      return;
    }
    src__laminate__overlay__overlay_ref$46template._visited = true;
    laminate__enums__visibility$46template.initReflector();
    laminate__portal__portal$46template.initReflector();
    src__laminate__overlay__overlay_state$46template.initReflector();
  };
  dart.fn(src__laminate__overlay__overlay_ref$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/overlay_ref.template.ddc", {
    "package:angular_components/src/laminate/overlay/overlay_ref.template.dart": src__laminate__overlay__overlay_ref$46template
  }, '{"version":3,"sourceRoot":"","sources":["overlay_ref.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAiBI,uDAAQ;YAAG;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,8DAAa;EACrB","file":"overlay_ref.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__overlay_ref$46template: src__laminate__overlay__overlay_ref$46template
  };
});

//# sourceMappingURL=overlay_ref.template.ddc.js.map
