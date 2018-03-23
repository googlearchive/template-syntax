define(['dart_sdk', 'packages/angular_components/framework_stabilizers/testability.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, testability, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework_stabilizers__testability$46template = testability.framework_stabilizers__testability$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service.utils__browser__dom_service__dom_service$46template;
  const _root = Object.create(null);
  const utils__browser__dom_service__dom_service_webdriver_testability$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(utils__browser__dom_service__dom_service_webdriver_testability$46template, {
    /*utils__browser__dom_service__dom_service_webdriver_testability$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__browser__dom_service__dom_service_webdriver_testability$46template.initReflector = function() {
    if (dart.test(utils__browser__dom_service__dom_service_webdriver_testability$46template._visited)) {
      return;
    }
    utils__browser__dom_service__dom_service_webdriver_testability$46template._visited = true;
    framework_stabilizers__testability$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.fn(utils__browser__dom_service__dom_service_webdriver_testability$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability.template.ddc", {
    "package:angular_components/utils/browser/dom_service/dom_service_webdriver_testability.template.dart": utils__browser__dom_service__dom_service_webdriver_testability$46template
  }, '{"version":3,"sourceRoot":"","sources":["dom_service_webdriver_testability.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAYI,kFAAQ;YAAG;;;;;AAEb,kBAAI,kFAAQ,GAAE;AACZ;;AAEF,yFAAW;AAEX,IAAM,2DAAa;AACnB,IAAM,iEAAa;EACrB","file":"dom_service_webdriver_testability.template.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_service__dom_service_webdriver_testability$46template: utils__browser__dom_service__dom_service_webdriver_testability$46template
  };
});

//# sourceMappingURL=dom_service_webdriver_testability.template.ddc.js.map
