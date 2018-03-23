define(['dart_sdk', 'packages/angular_components/model/date/date.template'], function(dart_sdk, date) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__date__date$46template = date.model__date__date$46template;
  const _root = Object.create(null);
  const model__date__date_formatter$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__date__date_formatter$46template, {
    /*model__date__date_formatter$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__date__date_formatter$46template.initReflector = function() {
    if (dart.test(model__date__date_formatter$46template._visited)) {
      return;
    }
    model__date__date_formatter$46template._visited = true;
    model__date__date$46template.initReflector();
  };
  dart.fn(model__date__date_formatter$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/date/date_formatter.template.ddc", {
    "package:angular_components/model/date/date_formatter.template.dart": model__date__date_formatter$46template
  }, '{"version":3,"sourceRoot":"","sources":["date_formatter.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,0CAAa;EACrB","file":"date_formatter.template.ddc.js"}');
  // Exports:
  return {
    model__date__date_formatter$46template: model__date__date_formatter$46template
  };
});

//# sourceMappingURL=date_formatter.template.ddc.js.map
