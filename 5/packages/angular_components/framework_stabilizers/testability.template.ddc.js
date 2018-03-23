define(['dart_sdk', 'packages/angular_components/framework_stabilizers/framework_stabilizers.template'], function(dart_sdk, framework_stabilizers) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework_stabilizers__framework_stabilizers$46template = framework_stabilizers.framework_stabilizers__framework_stabilizers$46template;
  const _root = Object.create(null);
  const framework_stabilizers__testability$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(framework_stabilizers__testability$46template, {
    /*framework_stabilizers__testability$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  framework_stabilizers__testability$46template.initReflector = function() {
    if (dart.test(framework_stabilizers__testability$46template._visited)) {
      return;
    }
    framework_stabilizers__testability$46template._visited = true;
    framework_stabilizers__framework_stabilizers$46template.initReflector();
    framework_stabilizers__framework_stabilizers$46template.initReflector();
  };
  dart.fn(framework_stabilizers__testability$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/framework_stabilizers/testability.template.ddc", {
    "package:angular_components/framework_stabilizers/testability.template.dart": framework_stabilizers__testability$46template
  }, '{"version":3,"sourceRoot":"","sources":["testability.template.dart"],"names":[],"mappings":";;;;;;;;;;MAaI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,qEAAa;AACnB,IAAM,qEAAa;EACrB","file":"testability.template.ddc.js"}');
  // Exports:
  return {
    framework_stabilizers__testability$46template: framework_stabilizers__testability$46template
  };
});

//# sourceMappingURL=testability.template.ddc.js.map
