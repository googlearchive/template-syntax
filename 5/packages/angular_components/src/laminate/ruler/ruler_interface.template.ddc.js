define(['dart_sdk', 'packages/angular_components/laminate/enums/position.template', 'packages/angular_components/laminate/enums/visibility.template'], function(dart_sdk, position, visibility) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__position$46template = position.laminate__enums__position$46template;
  const laminate__enums__visibility$46template = visibility.laminate__enums__visibility$46template;
  const _root = Object.create(null);
  const src__laminate__ruler__ruler_interface$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__ruler__ruler_interface$46template, {
    /*src__laminate__ruler__ruler_interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__ruler__ruler_interface$46template.initReflector = function() {
    if (dart.test(src__laminate__ruler__ruler_interface$46template._visited)) {
      return;
    }
    src__laminate__ruler__ruler_interface$46template._visited = true;
    laminate__enums__position$46template.initReflector();
    laminate__enums__visibility$46template.initReflector();
  };
  dart.fn(src__laminate__ruler__ruler_interface$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/ruler/ruler_interface.template.ddc", {
    "package:angular_components/src/laminate/ruler/ruler_interface.template.dart": src__laminate__ruler__ruler_interface$46template
  }, '{"version":3,"sourceRoot":"","sources":["ruler_interface.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAcI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,kDAAa;AACnB,IAAM,oDAAa;EACrB","file":"ruler_interface.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__ruler__ruler_interface$46template: src__laminate__ruler__ruler_interface$46template
  };
});

//# sourceMappingURL=ruler_interface.template.ddc.js.map
