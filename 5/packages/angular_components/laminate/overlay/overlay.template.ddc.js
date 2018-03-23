define(['dart_sdk', 'packages/angular_components/src/laminate/overlay/overlay_ref.template', 'packages/angular_components/src/laminate/overlay/overlay_service.template', 'packages/angular_components/src/laminate/overlay/overlay_state.template', 'packages/angular_components/src/laminate/overlay/render/overlay_dom_render_service.template'], function(dart_sdk, overlay_ref, overlay_service, overlay_state, overlay_dom_render_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__overlay__overlay_ref$46template = overlay_ref.src__laminate__overlay__overlay_ref$46template;
  const src__laminate__overlay__overlay_service$46template = overlay_service.src__laminate__overlay__overlay_service$46template;
  const src__laminate__overlay__overlay_state$46template = overlay_state.src__laminate__overlay__overlay_state$46template;
  const src__laminate__overlay__render__overlay_dom_render_service$46template = overlay_dom_render_service.src__laminate__overlay__render__overlay_dom_render_service$46template;
  const _root = Object.create(null);
  const laminate__overlay__overlay$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(laminate__overlay__overlay$46template, {
    /*laminate__overlay__overlay$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  laminate__overlay__overlay$46template.initReflector = function() {
    if (dart.test(laminate__overlay__overlay$46template._visited)) {
      return;
    }
    laminate__overlay__overlay$46template._visited = true;
    src__laminate__overlay__overlay_ref$46template.initReflector();
    src__laminate__overlay__overlay_service$46template.initReflector();
    src__laminate__overlay__overlay_state$46template.initReflector();
    src__laminate__overlay__render__overlay_dom_render_service$46template.initReflector();
  };
  dart.fn(laminate__overlay__overlay$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/laminate/overlay/overlay.template.ddc", {
    "package:angular_components/laminate/overlay/overlay.template.dart": laminate__overlay__overlay$46template
  }, '{"version":3,"sourceRoot":"","sources":["overlay.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAYI,8CAAQ;YAAG;;;;;AAEb,kBAAI,8CAAQ,GAAE;AACZ;;AAEF,qDAAW;AAEX,IAAM,4DAAa;AACnB,IAAM,gEAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,mFAAa;EACrB","file":"overlay.template.ddc.js"}');
  // Exports:
  return {
    laminate__overlay__overlay$46template: laminate__overlay__overlay$46template
  };
});

//# sourceMappingURL=overlay.template.ddc.js.map
