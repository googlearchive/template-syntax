define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/model/ui/icon.template'], function(dart_sdk, angular, icon) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const _root = Object.create(null);
  const mixins__button_wrapper$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(mixins__button_wrapper$46template, {
    /*mixins__button_wrapper$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  mixins__button_wrapper$46template.initReflector = function() {
    if (dart.test(mixins__button_wrapper$46template._visited)) {
      return;
    }
    mixins__button_wrapper$46template._visited = true;
    angular$46template.initReflector();
    model__ui__icon$46template.initReflector();
  };
  dart.fn(mixins__button_wrapper$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/mixins/button_wrapper.template.ddc", {
    "package:angular_components/mixins/button_wrapper.template.dart": mixins__button_wrapper$46template
  }, '{"version":3,"sourceRoot":"","sources":["button_wrapper.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAYI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,wCAAa;EACrB","file":"button_wrapper.template.ddc.js"}');
  // Exports:
  return {
    mixins__button_wrapper$46template: mixins__button_wrapper$46template
  };
});

//# sourceMappingURL=button_wrapper.template.ddc.js.map
