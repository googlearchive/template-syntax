define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/events/events.template'], function(dart_sdk, reflector, popup_hierarchy, angular, events) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const angular$46template = angular.angular$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const _root = Object.create(null);
  const src__laminate__popup__popup_hierarchy$46template = Object.create(_root);
  let VoidToPopupHierarchy = () => (VoidToPopupHierarchy = dart.constFn(dart.fnType(src__laminate__popup__popup_hierarchy.PopupHierarchy, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__popup__popup_hierarchy$46template, {
    /*src__laminate__popup__popup_hierarchy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__popup__popup_hierarchy$46template.initReflector = function() {
    if (dart.test(src__laminate__popup__popup_hierarchy$46template._visited)) {
      return;
    }
    src__laminate__popup__popup_hierarchy$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), dart.fn(() => new src__laminate__popup__popup_hierarchy.PopupHierarchy.new(), VoidToPopupHierarchy()));
    angular$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
  };
  dart.fn(src__laminate__popup__popup_hierarchy$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_hierarchy.template.ddc", {
    "package:angular_components/src/laminate/popup/popup_hierarchy.template.dart": src__laminate__popup__popup_hierarchy$46template
  }, '{"version":3,"sourceRoot":"","sources":["popup_hierarchy.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAeI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAO,kCAAe,CAAC,mEAAc,EAAE,cAAM,IAAI,wDAAc;AAC/D,IAAM,gCAAa;AACnB,IAAM,uDAAa;EACrB","file":"popup_hierarchy.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_hierarchy$46template: src__laminate__popup__popup_hierarchy$46template
  };
});

//# sourceMappingURL=popup_hierarchy.template.ddc.js.map
