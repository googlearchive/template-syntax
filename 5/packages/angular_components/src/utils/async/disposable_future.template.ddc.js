define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const src__utils__async__disposable_future$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__utils__async__disposable_future$46template, {
    /*src__utils__async__disposable_future$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__async__disposable_future$46template.initReflector = function() {
    if (dart.test(src__utils__async__disposable_future$46template._visited)) {
      return;
    }
    src__utils__async__disposable_future$46template._visited = true;
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(src__utils__async__disposable_future$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/utils/async/disposable_future.template.ddc", {
    "package:angular_components/src/utils/async/disposable_future.template.dart": src__utils__async__disposable_future$46template
  }, '{"version":3,"sourceRoot":"","sources":["disposable_future.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,wDAAQ;YAAG;;;;;AAEb,kBAAI,wDAAQ,GAAE;AACZ;;AAEF,+DAAW;AAEX,IAAM,kDAAa;EACrB","file":"disposable_future.template.ddc.js"}');
  // Exports:
  return {
    src__utils__async__disposable_future$46template: src__utils__async__disposable_future$46template
  };
});

//# sourceMappingURL=disposable_future.template.ddc.js.map
