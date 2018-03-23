define(['dart_sdk', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/src/material_datepicker/sequential.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, calendar, comparison, range, date, observable, sequential, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__calendar$46template = calendar.material_datepicker__calendar$46template;
  const material_datepicker__comparison$46template = comparison.material_datepicker__comparison$46template;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const src__material_datepicker__sequential$46template = sequential.src__material_datepicker__sequential$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const src__material_datepicker__date_range_editor_model$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_datepicker__date_range_editor_model$46template, {
    /*src__material_datepicker__date_range_editor_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_datepicker__date_range_editor_model$46template.initReflector = function() {
    if (dart.test(src__material_datepicker__date_range_editor_model$46template._visited)) {
      return;
    }
    src__material_datepicker__date_range_editor_model$46template._visited = true;
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__comparison$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    model__date__date$46template.initReflector();
    model__observable__observable$46template.initReflector();
    src__material_datepicker__sequential$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(src__material_datepicker__date_range_editor_model$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_datepicker/date_range_editor_model.template.ddc", {
    "package:angular_components/src/material_datepicker/date_range_editor_model.template.dart": src__material_datepicker__date_range_editor_model$46template
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor_model.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAuBI,qEAAQ;YAAG;;;;;AAEb,kBAAI,qEAAQ,GAAE;AACZ;;AAEF,4EAAW;AAEX,IAAM,sDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,kDAAa;EACrB","file":"date_range_editor_model.template.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__date_range_editor_model$46template: src__material_datepicker__date_range_editor_model$46template
  };
});

//# sourceMappingURL=date_range_editor_model.template.ddc.js.map
