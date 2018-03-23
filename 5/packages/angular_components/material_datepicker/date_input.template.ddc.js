define(['dart_sdk', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular/angular.template', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, calendar, module, angular, material_input, date, properties, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__calendar$46template = calendar.material_datepicker__calendar$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const angular$46template = angular.angular$46template;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_datepicker__date_input$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__date_input$46template, {
    /*material_datepicker__date_input$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__date_input$46template.initReflector = function() {
    if (dart.test(material_datepicker__date_input$46template._visited)) {
      return;
    }
    material_datepicker__date_input$46template._visited = true;
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    angular$46template.initReflector();
    material_input__material_input$46template.initReflector();
    model__date__date$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(material_datepicker__date_input$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/date_input.template.ddc", {
    "package:angular_components/material_datepicker/date_input.template.dart": material_datepicker__date_input$46template
  }, '{"version":3,"sourceRoot":"","sources":["date_input.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAyBI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAM,sDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,kDAAa;EACrB","file":"date_input.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_input$46template: material_datepicker__date_input$46template
  };
});

//# sourceMappingURL=date_input.template.ddc.js.map
