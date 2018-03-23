define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/src/laminate/popup/popup_size_provider.template'], function(dart_sdk, angular, alignment, popup_size_provider) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const laminate__enums__alignment$46template = alignment.laminate__enums__alignment$46template;
  const src__laminate__popup__popup_size_provider$46template = popup_size_provider.src__laminate__popup__popup_size_provider$46template;
  const _root = Object.create(null);
  const src__laminate__popup__popup_position_mixin$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__popup__popup_position_mixin$46template, {
    /*src__laminate__popup__popup_position_mixin$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__popup__popup_position_mixin$46template.initReflector = function() {
    if (dart.test(src__laminate__popup__popup_position_mixin$46template._visited)) {
      return;
    }
    src__laminate__popup__popup_position_mixin$46template._visited = true;
    angular$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    src__laminate__popup__popup_size_provider$46template.initReflector();
  };
  dart.fn(src__laminate__popup__popup_position_mixin$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_position_mixin.template.ddc", {
    "package:angular_components/src/laminate/popup/popup_position_mixin.template.dart": src__laminate__popup__popup_position_mixin$46template
  }, '{"version":3,"sourceRoot":"","sources":["popup_position_mixin.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAeI,8DAAQ;YAAG;;;;;AAEb,kBAAI,8DAAQ,GAAE;AACZ;;AAEF,qEAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,kEAAa;EACrB","file":"popup_position_mixin.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_position_mixin$46template: src__laminate__popup__popup_position_mixin$46template
  };
});

//# sourceMappingURL=popup_position_mixin.template.ddc.js.map
