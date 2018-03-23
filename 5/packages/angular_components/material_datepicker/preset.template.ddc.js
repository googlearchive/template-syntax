define(['dart_sdk', 'packages/angular_components/material_datepicker/range.template'], function(dart_sdk, range) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const _root = Object.create(null);
  const material_datepicker__preset$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__preset$46template, {
    /*material_datepicker__preset$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__preset$46template.initReflector = function() {
    if (dart.test(material_datepicker__preset$46template._visited)) {
      return;
    }
    material_datepicker__preset$46template._visited = true;
    material_datepicker__range$46template.initReflector();
  };
  dart.fn(material_datepicker__preset$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/preset.template.ddc", {
    "package:angular_components/material_datepicker/preset.template.dart": material_datepicker__preset$46template
  }, '{"version":3,"sourceRoot":"","sources":["preset.template.dart"],"names":[],"mappings":";;;;;;;;;;MAYI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,mDAAa;EACrB","file":"preset.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__preset$46template: material_datepicker__preset$46template
  };
});

//# sourceMappingURL=preset.template.ddc.js.map
