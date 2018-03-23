define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const utils__disposer__disposable_callback$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(utils__disposer__disposable_callback$46template, {
    /*utils__disposer__disposable_callback$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__disposer__disposable_callback$46template.initReflector = function() {
    if (dart.test(utils__disposer__disposable_callback$46template._visited)) {
      return;
    }
    utils__disposer__disposable_callback$46template._visited = true;
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(utils__disposer__disposable_callback$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/utils/disposer/disposable_callback.template.ddc", {
    "package:angular_components/utils/disposer/disposable_callback.template.dart": utils__disposer__disposable_callback$46template
  }, '{"version":3,"sourceRoot":"","sources":["disposable_callback.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,wDAAQ;YAAG;;;;;AAEb,kBAAI,wDAAQ,GAAE;AACZ;;AAEF,+DAAW;AAEX,IAAM,kDAAa;EACrB","file":"disposable_callback.template.ddc.js"}');
  // Exports:
  return {
    utils__disposer__disposable_callback$46template: utils__disposer__disposable_callback$46template
  };
});

//# sourceMappingURL=disposable_callback.template.ddc.js.map
