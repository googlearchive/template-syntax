define(['dart_sdk', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/model/date/date.template'], function(dart_sdk, range, date) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const _root = Object.create(null);
  const material_datepicker__comparison$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__comparison$46template, {
    /*material_datepicker__comparison$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__comparison$46template.initReflector = function() {
    if (dart.test(material_datepicker__comparison$46template._visited)) {
      return;
    }
    material_datepicker__comparison$46template._visited = true;
    material_datepicker__range$46template.initReflector();
    model__date__date$46template.initReflector();
  };
  dart.fn(material_datepicker__comparison$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/comparison.template.ddc", {
    "package:angular_components/material_datepicker/comparison.template.dart": material_datepicker__comparison$46template
  }, '{"version":3,"sourceRoot":"","sources":["comparison.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAM,mDAAa;AACnB,IAAM,0CAAa;EACrB","file":"comparison.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__comparison$46template: material_datepicker__comparison$46template
  };
});

//# sourceMappingURL=comparison.template.ddc.js.map
