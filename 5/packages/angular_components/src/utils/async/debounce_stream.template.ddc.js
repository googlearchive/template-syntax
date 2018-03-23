define(['dart_sdk', 'packages/angular_components/utils/rate_limit_utils/rate_limit_utils.template', 'packages/angular_components/src/utils/async/rate_limit.template'], function(dart_sdk, rate_limit_utils, rate_limit) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__rate_limit_utils__rate_limit_utils$46template = rate_limit_utils.utils__rate_limit_utils__rate_limit_utils$46template;
  const src__utils__async__rate_limit$46template = rate_limit.src__utils__async__rate_limit$46template;
  const _root = Object.create(null);
  const src__utils__async__debounce_stream$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__utils__async__debounce_stream$46template, {
    /*src__utils__async__debounce_stream$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__async__debounce_stream$46template.initReflector = function() {
    if (dart.test(src__utils__async__debounce_stream$46template._visited)) {
      return;
    }
    src__utils__async__debounce_stream$46template._visited = true;
    utils__rate_limit_utils__rate_limit_utils$46template.initReflector();
    src__utils__async__rate_limit$46template.initReflector();
  };
  dart.fn(src__utils__async__debounce_stream$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/utils/async/debounce_stream.template.ddc", {
    "package:angular_components/src/utils/async/debounce_stream.template.dart": src__utils__async__debounce_stream$46template
  }, '{"version":3,"sourceRoot":"","sources":["debounce_stream.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,kEAAa;AACnB,IAAM,sDAAa;EACrB","file":"debounce_stream.template.ddc.js"}');
  // Exports:
  return {
    src__utils__async__debounce_stream$46template: src__utils__async__debounce_stream$46template
  };
});

//# sourceMappingURL=debounce_stream.template.ddc.js.map
