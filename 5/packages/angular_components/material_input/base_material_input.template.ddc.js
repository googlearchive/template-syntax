define(['dart_sdk', 'packages/angular_components/material_input/deferred_validator.template', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/forms/error_renderer.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, deferred_validator, angular, focus, error_renderer, focusable_mixin, disposer, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_input__deferred_validator$46template = deferred_validator.material_input__deferred_validator$46template;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const forms__error_renderer$46template = error_renderer.forms__error_renderer$46template;
  const mixins__focusable_mixin$46template = focusable_mixin.mixins__focusable_mixin$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const material_input__base_material_input$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_input__base_material_input$46template, {
    /*material_input__base_material_input$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_input__base_material_input$46template.initReflector = function() {
    if (dart.test(material_input__base_material_input$46template._visited)) {
      return;
    }
    material_input__base_material_input$46template._visited = true;
    material_input__deferred_validator$46template.initReflector();
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    forms__error_renderer$46template.initReflector();
    forms__error_renderer$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(material_input__base_material_input$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_input/base_material_input.template.ddc", {
    "package:angular_components/material_input/base_material_input.template.dart": material_input__base_material_input$46template
  }, '{"version":3,"sourceRoot":"","sources":["base_material_input.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MA2BI,uDAAQ;YAAG;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAM,2DAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,8CAAa;AACnB,IAAM,8CAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,sCAAa;EACrB","file":"base_material_input.template.ddc.js"}');
  // Exports:
  return {
    material_input__base_material_input$46template: material_input__base_material_input$46template
  };
});

//# sourceMappingURL=base_material_input.template.ddc.js.map
