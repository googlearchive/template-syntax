define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/src/laminate/popup/dom_popup_source.template', 'packages/angular_components/src/laminate/popup/popup_source.template', 'packages/angular_components/utils/angular/reference/reference.template'], function(dart_sdk, angular, alignment, dom_popup_source, popup_source, reference) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const laminate__enums__alignment$46template = alignment.laminate__enums__alignment$46template;
  const src__laminate__popup__dom_popup_source$46template = dom_popup_source.src__laminate__popup__dom_popup_source$46template;
  const src__laminate__popup__popup_source$46template = popup_source.src__laminate__popup__popup_source$46template;
  const utils__angular__reference__reference$46template = reference.utils__angular__reference__reference$46template;
  const _root = Object.create(null);
  const src__laminate__popup__popup_source_directive$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__popup__popup_source_directive$46template, {
    /*src__laminate__popup__popup_source_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__popup__popup_source_directive$46template.initReflector = function() {
    if (dart.test(src__laminate__popup__popup_source_directive$46template._visited)) {
      return;
    }
    src__laminate__popup__popup_source_directive$46template._visited = true;
    angular$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    src__laminate__popup__dom_popup_source$46template.initReflector();
    src__laminate__popup__popup_source$46template.initReflector();
    utils__angular__reference__reference$46template.initReflector();
  };
  dart.fn(src__laminate__popup__popup_source_directive$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_source_directive.template.ddc", {
    "package:angular_components/src/laminate/popup/popup_source_directive.template.dart": src__laminate__popup__popup_source_directive$46template
  }, '{"version":3,"sourceRoot":"","sources":["popup_source_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAqBI,gEAAQ;YAAG;;;;;AAEb,kBAAI,gEAAQ,GAAE;AACZ;;AAEF,uEAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,6DAAa;EACrB","file":"popup_source_directive.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_source_directive$46template: src__laminate__popup__popup_source_directive$46template
  };
});

//# sourceMappingURL=popup_source_directive.template.ddc.js.map
