define(['dart_sdk', 'packages/angular/angular.template'], function(dart_sdk, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__click_directive$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__click_directive$46template, {
    /*src__click_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__click_directive$46template.initReflector = function() {
    if (dart.test(src__click_directive$46template._visited)) {
      return;
    }
    src__click_directive$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.fn(src__click_directive$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/template_syntax/src/click_directive.template.ddc", {
    "package:template_syntax/src/click_directive.template.dart": src__click_directive$46template
  }, '{"version":3,"sourceRoot":"","sources":["click_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;MAYI,wCAAQ;YAAG;;;;;AAEb,kBAAI,wCAAQ,GAAE;AACZ;;AAEF,+CAAW;AAEX,IAAM,gCAAa;EACrB","file":"click_directive.template.ddc.js"}');
  // Exports:
  return {
    src__click_directive$46template: src__click_directive$46template
  };
});

//# sourceMappingURL=click_directive.template.ddc.js.map
