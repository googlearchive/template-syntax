define(['dart_sdk', 'packages/angular/angular.template'], function(dart_sdk, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const theme__module$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(theme__module$46template, {
    /*theme__module$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  theme__module$46template.initReflector = function() {
    if (dart.test(theme__module$46template._visited)) {
      return;
    }
    theme__module$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.fn(theme__module$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/theme/module.template.ddc", {
    "package:angular_components/theme/module.template.dart": theme__module$46template
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,iCAAQ;YAAG;;;;;AAEb,kBAAI,iCAAQ,GAAE;AACZ;;AAEF,wCAAW;AAEX,IAAM,gCAAa;EACrB","file":"module.template.ddc.js"}');
  // Exports:
  return {
    theme__module$46template: theme__module$46template
  };
});

//# sourceMappingURL=module.template.ddc.js.map
