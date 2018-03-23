define(['dart_sdk', 'packages/angular_components/src/laminate/enums/base.template'], function(dart_sdk, base) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__enums__base$46template = base.src__laminate__enums__base$46template;
  const _root = Object.create(null);
  const laminate__enums__visibility$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(laminate__enums__visibility$46template, {
    /*laminate__enums__visibility$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  laminate__enums__visibility$46template.initReflector = function() {
    if (dart.test(laminate__enums__visibility$46template._visited)) {
      return;
    }
    laminate__enums__visibility$46template._visited = true;
    src__laminate__enums__base$46template.initReflector();
    src__laminate__enums__base$46template.initReflector();
  };
  dart.fn(laminate__enums__visibility$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/laminate/enums/visibility.template.ddc", {
    "package:angular_components/laminate/enums/visibility.template.dart": laminate__enums__visibility$46template
  }, '{"version":3,"sourceRoot":"","sources":["visibility.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,mDAAa;AACnB,IAAM,mDAAa;EACrB","file":"visibility.template.ddc.js"}');
  // Exports:
  return {
    laminate__enums__visibility$46template: laminate__enums__visibility$46template
  };
});

//# sourceMappingURL=visibility.template.ddc.js.map
