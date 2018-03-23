define(['dart_sdk', 'packages/angular_components/model/date/date.template'], function(dart_sdk, date) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__date__date$46template = date.model__date__date$46template;
  const _root = Object.create(null);
  const material_datepicker__calendar$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__calendar$46template, {
    /*material_datepicker__calendar$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__calendar$46template.initReflector = function() {
    if (dart.test(material_datepicker__calendar$46template._visited)) {
      return;
    }
    material_datepicker__calendar$46template._visited = true;
    model__date__date$46template.initReflector();
  };
  dart.fn(material_datepicker__calendar$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/calendar.template.ddc", {
    "package:angular_components/material_datepicker/calendar.template.dart": material_datepicker__calendar$46template
  }, '{"version":3,"sourceRoot":"","sources":["calendar.template.dart"],"names":[],"mappings":";;;;;;;;;;MAYI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,0CAAa;EACrB","file":"calendar.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__calendar$46template: material_datepicker__calendar$46template
  };
});

//# sourceMappingURL=calendar.template.ddc.js.map
