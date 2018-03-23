define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template'], function(dart_sdk, angular, focus) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const _root = Object.create(null);
  const mixins__focusable_mixin$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(mixins__focusable_mixin$46template, {
    /*mixins__focusable_mixin$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  mixins__focusable_mixin$46template.initReflector = function() {
    if (dart.test(mixins__focusable_mixin$46template._visited)) {
      return;
    }
    mixins__focusable_mixin$46template._visited = true;
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
  };
  dart.fn(mixins__focusable_mixin$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/mixins/focusable_mixin.template.ddc", {
    "package:angular_components/mixins/focusable_mixin.template.dart": mixins__focusable_mixin$46template
  }, '{"version":3,"sourceRoot":"","sources":["focusable_mixin.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAcI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,qCAAa;EACrB","file":"focusable_mixin.template.ddc.js"}');
  // Exports:
  return {
    mixins__focusable_mixin$46template: mixins__focusable_mixin$46template
  };
});

//# sourceMappingURL=focusable_mixin.template.ddc.js.map
