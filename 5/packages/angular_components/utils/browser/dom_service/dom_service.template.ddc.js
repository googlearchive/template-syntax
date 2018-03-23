define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/disposer/disposable_callback.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, angular, async, disposable_callback, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const utils__disposer__disposable_callback$46template = disposable_callback.utils__disposer__disposable_callback$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const utils__browser__dom_service__dom_service$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(utils__browser__dom_service__dom_service$46template, {
    /*utils__browser__dom_service__dom_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__browser__dom_service__dom_service$46template.initReflector = function() {
    if (dart.test(utils__browser__dom_service__dom_service$46template._visited)) {
      return;
    }
    utils__browser__dom_service__dom_service$46template._visited = true;
    angular$46template.initReflector();
    utils__async__async$46template.initReflector();
    utils__disposer__disposable_callback$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(utils__browser__dom_service__dom_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/utils/browser/dom_service/dom_service.template.ddc", {
    "package:angular_components/utils/browser/dom_service/dom_service.template.dart": utils__browser__dom_service__dom_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["dom_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAoBI,4DAAQ;YAAG;;;;;AAEb,kBAAI,4DAAQ,GAAE;AACZ;;AAEF,mEAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,kDAAa;EACrB","file":"dom_service.template.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_service__dom_service$46template: utils__browser__dom_service__dom_service$46template
  };
});

//# sourceMappingURL=dom_service.template.ddc.js.map
