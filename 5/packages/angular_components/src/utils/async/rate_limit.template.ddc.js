define(['dart_sdk', 'packages/angular_components/utils/rate_limit_utils/rate_limit_utils.template'], function(dart_sdk, rate_limit_utils) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__rate_limit_utils__rate_limit_utils$46template = rate_limit_utils.utils__rate_limit_utils__rate_limit_utils$46template;
  const _root = Object.create(null);
  const src__utils__async__rate_limit$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__utils__async__rate_limit$46template, {
    /*src__utils__async__rate_limit$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__async__rate_limit$46template.initReflector = function() {
    if (dart.test(src__utils__async__rate_limit$46template._visited)) {
      return;
    }
    src__utils__async__rate_limit$46template._visited = true;
    utils__rate_limit_utils__rate_limit_utils$46template.initReflector();
  };
  dart.fn(src__utils__async__rate_limit$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/utils/async/rate_limit.template.ddc", {
    "package:angular_components/src/utils/async/rate_limit.template.dart": src__utils__async__rate_limit$46template
  }, '{"version":3,"sourceRoot":"","sources":["rate_limit.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,kEAAa;EACrB","file":"rate_limit.template.ddc.js"}');
  // Exports:
  return {
    src__utils__async__rate_limit$46template: src__utils__async__rate_limit$46template
  };
});

//# sourceMappingURL=rate_limit.template.ddc.js.map
