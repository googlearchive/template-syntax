define(['dart_sdk', 'packages/angular_components/laminate/enums/position.template', 'packages/angular_components/laminate/enums/visibility.template', 'packages/angular_components/utils/async/async.template'], function(dart_sdk, position, visibility, async) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__position$46template = position.laminate__enums__position$46template;
  const laminate__enums__visibility$46template = visibility.laminate__enums__visibility$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const _root = Object.create(null);
  const src__laminate__overlay__overlay_state$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__overlay__overlay_state$46template, {
    /*src__laminate__overlay__overlay_state$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__overlay__overlay_state$46template.initReflector = function() {
    if (dart.test(src__laminate__overlay__overlay_state$46template._visited)) {
      return;
    }
    src__laminate__overlay__overlay_state$46template._visited = true;
    laminate__enums__position$46template.initReflector();
    laminate__enums__visibility$46template.initReflector();
    utils__async__async$46template.initReflector();
  };
  dart.fn(src__laminate__overlay__overlay_state$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/overlay_state.template.ddc", {
    "package:angular_components/src/laminate/overlay/overlay_state.template.dart": src__laminate__overlay__overlay_state$46template
  }, '{"version":3,"sourceRoot":"","sources":["overlay_state.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAgBI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,kDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,4CAAa;EACrB","file":"overlay_state.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__overlay_state$46template: src__laminate__overlay__overlay_state$46template
  };
});

//# sourceMappingURL=overlay_state.template.ddc.js.map
