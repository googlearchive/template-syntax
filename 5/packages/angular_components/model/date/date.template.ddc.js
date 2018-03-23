define(['dart_sdk', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/comparators/comparators.template'], function(dart_sdk, observable, comparators) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const utils__comparators__comparators$46template = comparators.utils__comparators__comparators$46template;
  const _root = Object.create(null);
  const model__date__date$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__date__date$46template, {
    /*model__date__date$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__date__date$46template.initReflector = function() {
    if (dart.test(model__date__date$46template._visited)) {
      return;
    }
    model__date__date$46template._visited = true;
    model__observable__observable$46template.initReflector();
    utils__comparators__comparators$46template.initReflector();
  };
  dart.fn(model__date__date$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/date/date.template.ddc", {
    "package:angular_components/model/date/date.template.dart": model__date__date$46template
  }, '{"version":3,"sourceRoot":"","sources":["date.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAgBI,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAM,sDAAa;AACnB,IAAM,wDAAa;EACrB","file":"date.template.ddc.js"}');
  // Exports:
  return {
    model__date__date$46template: model__date__date$46template
  };
});

//# sourceMappingURL=date.template.ddc.js.map
