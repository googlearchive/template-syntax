define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/src/laminate/popup/popup_source.template'], function(dart_sdk, alignment, popup_source) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__alignment$46template = alignment.laminate__enums__alignment$46template;
  const src__laminate__popup__popup_source$46template = popup_source.src__laminate__popup__popup_source$46template;
  const _root = Object.create(null);
  const src__laminate__popup__popup_state$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__popup__popup_state$46template, {
    /*src__laminate__popup__popup_state$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__popup__popup_state$46template.initReflector = function() {
    if (dart.test(src__laminate__popup__popup_state$46template._visited)) {
      return;
    }
    src__laminate__popup__popup_state$46template._visited = true;
    laminate__enums__alignment$46template.initReflector();
    src__laminate__popup__popup_source$46template.initReflector();
  };
  dart.fn(src__laminate__popup__popup_state$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_state.template.ddc", {
    "package:angular_components/src/laminate/popup/popup_state.template.dart": src__laminate__popup__popup_state$46template
  }, '{"version":3,"sourceRoot":"","sources":["popup_state.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAeI,qDAAQ;YAAG;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAM,mDAAa;AACnB,IAAM,2DAAa;EACrB","file":"popup_state.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_state$46template: src__laminate__popup__popup_state$46template
  };
});

//# sourceMappingURL=popup_state.template.ddc.js.map
