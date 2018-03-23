define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/overlay/module.template', 'packages/angular_components/src/laminate/popup/dom_popup_source.template'], function(dart_sdk, angular, alignment, module, dom_popup_source) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const laminate__enums__alignment$46template = alignment.laminate__enums__alignment$46template;
  const laminate__overlay__module$46template = module.laminate__overlay__module$46template;
  const src__laminate__popup__dom_popup_source$46template = dom_popup_source.src__laminate__popup__dom_popup_source$46template;
  const _root = Object.create(null);
  const laminate__popup__module$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(laminate__popup__module$46template, {
    /*laminate__popup__module$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  laminate__popup__module$46template.initReflector = function() {
    if (dart.test(laminate__popup__module$46template._visited)) {
      return;
    }
    laminate__popup__module$46template._visited = true;
    angular$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__overlay__module$46template.initReflector();
    src__laminate__popup__dom_popup_source$46template.initReflector();
  };
  dart.fn(laminate__popup__module$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/laminate/popup/module.template.ddc", {
    "package:angular_components/laminate/popup/module.template.dart": laminate__popup__module$46template
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAgBI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,+DAAa;EACrB","file":"module.template.ddc.js"}');
  // Exports:
  return {
    laminate__popup__module$46template: laminate__popup__module$46template
  };
});

//# sourceMappingURL=module.template.ddc.js.map
