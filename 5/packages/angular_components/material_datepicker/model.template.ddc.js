define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/material_datepicker/model', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular/di.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/material_datepicker/range.template'], function(dart_sdk, reflector, model, comparison, di, observable, range) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const material_datepicker__model = model.material_datepicker__model;
  const material_datepicker__comparison$46template = comparison.material_datepicker__comparison$46template;
  const di$46template = di.di$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const _root = Object.create(null);
  const material_datepicker__model$46template = Object.create(_root);
  let VoidToDatepickerModel = () => (VoidToDatepickerModel = dart.constFn(dart.fnType(material_datepicker__model.DatepickerModel, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__model$46template, {
    /*material_datepicker__model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__model$46template.initReflector = function() {
    if (dart.test(material_datepicker__model$46template._visited)) {
      return;
    }
    material_datepicker__model$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(material_datepicker__model.DatepickerModel), dart.fn(() => new material_datepicker__model.DatepickerModel.new(), VoidToDatepickerModel()));
    material_datepicker__comparison$46template.initReflector();
    material_datepicker__comparison$46template.initReflector();
    di$46template.initReflector();
    model__observable__observable$46template.initReflector();
    material_datepicker__range$46template.initReflector();
  };
  dart.fn(material_datepicker__model$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/model.template.ddc", {
    "package:angular_components/material_datepicker/model.template.dart": material_datepicker__model$46template
  }, '{"version":3,"sourceRoot":"","sources":["model.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAiBI,8CAAQ;YAAG;;;;;AAEb,kBAAI,8CAAQ,GAAE;AACZ;;AAEF,qDAAW;AAEX,IAAO,kCAAe,CAAC,yDAAe,EAAE,cAAM,IAAI,8CAAe;AACjE,IAAM,wDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,2BAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,mDAAa;EACrB","file":"model.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__model$46template: material_datepicker__model$46template
  };
});

//# sourceMappingURL=model.template.ddc.js.map
