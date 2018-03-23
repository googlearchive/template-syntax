define(['dart_sdk', 'packages/angular_components/model/formatters/formatter.template'], function(dart_sdk, formatter) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__formatters__formatter$46template = formatter.model__formatters__formatter$46template;
  const _root = Object.create(null);
  const model__ui__display_name$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__ui__display_name$46template, {
    /*model__ui__display_name$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__ui__display_name$46template.initReflector = function() {
    if (dart.test(model__ui__display_name$46template._visited)) {
      return;
    }
    model__ui__display_name$46template._visited = true;
    model__formatters__formatter$46template.initReflector();
  };
  dart.fn(model__ui__display_name$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/ui/display_name.template.ddc", {
    "package:angular_components/model/ui/display_name.template.dart": model__ui__display_name$46template
  }, '{"version":3,"sourceRoot":"","sources":["display_name.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAM,qDAAa;EACrB","file":"display_name.template.ddc.js"}');
  // Exports:
  return {
    model__ui__display_name$46template: model__ui__display_name$46template
  };
});

//# sourceMappingURL=display_name.template.ddc.js.map
