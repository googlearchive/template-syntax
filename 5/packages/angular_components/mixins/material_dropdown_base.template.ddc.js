define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/laminate/enums/alignment.template'], function(dart_sdk, angular, deferred_content_aware, alignment) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware.content__deferred_content_aware$46template;
  const laminate__enums__alignment$46template = alignment.laminate__enums__alignment$46template;
  const _root = Object.create(null);
  const mixins__material_dropdown_base$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(mixins__material_dropdown_base$46template, {
    /*mixins__material_dropdown_base$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  mixins__material_dropdown_base$46template.initReflector = function() {
    if (dart.test(mixins__material_dropdown_base$46template._visited)) {
      return;
    }
    mixins__material_dropdown_base$46template._visited = true;
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
  };
  dart.fn(mixins__material_dropdown_base$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/mixins/material_dropdown_base.template.ddc", {
    "package:angular_components/mixins/material_dropdown_base.template.dart": mixins__material_dropdown_base$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_base.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAeI,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,mDAAa;EACrB","file":"material_dropdown_base.template.ddc.js"}');
  // Exports:
  return {
    mixins__material_dropdown_base$46template: mixins__material_dropdown_base$46template
  };
});

//# sourceMappingURL=material_dropdown_base.template.ddc.js.map
