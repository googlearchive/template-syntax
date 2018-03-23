define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const model__observable__observable$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__observable__observable$46template, {
    /*model__observable__observable$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__observable__observable$46template.initReflector = function() {
    if (dart.test(model__observable__observable$46template._visited)) {
      return;
    }
    model__observable__observable$46template._visited = true;
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(model__observable__observable$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/observable/observable.template.ddc", {
    "package:angular_components/model/observable/observable.template.dart": model__observable__observable$46template
  }, '{"version":3,"sourceRoot":"","sources":["observable.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,kDAAa;EACrB","file":"observable.template.ddc.js"}');
  // Exports:
  return {
    model__observable__observable$46template: model__observable__observable$46template
  };
});

//# sourceMappingURL=observable.template.ddc.js.map
