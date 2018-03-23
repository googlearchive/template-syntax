define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/highlighted_text/highlighted_value.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/highlight_assistant.template', 'packages/angular_components/model/ui/highlight_provider.template', 'packages/angular_components/model/ui/highlighted_text_model.template'], function(dart_sdk, angular, highlighted_value, select, selection_container, has_factory, highlight_assistant, highlight_provider, highlighted_text_model) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const highlighted_text__highlighted_value$46template = highlighted_value.highlighted_text__highlighted_value$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container.model__selection__selection_container$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const model__ui__highlight_assistant$46template = highlight_assistant.model__ui__highlight_assistant$46template;
  const model__ui__highlight_provider$46template = highlight_provider.model__ui__highlight_provider$46template;
  const model__ui__highlighted_text_model$46template = highlighted_text_model.model__ui__highlighted_text_model$46template;
  const _root = Object.create(null);
  const mixins__highlight_assistant_mixin$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(mixins__highlight_assistant_mixin$46template, {
    /*mixins__highlight_assistant_mixin$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  mixins__highlight_assistant_mixin$46template.initReflector = function() {
    if (dart.test(mixins__highlight_assistant_mixin$46template._visited)) {
      return;
    }
    mixins__highlight_assistant_mixin$46template._visited = true;
    angular$46template.initReflector();
    highlighted_text__highlighted_value$46template.initReflector();
    highlighted_text__highlighted_value$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    model__ui__highlight_assistant$46template.initReflector();
    model__ui__highlight_provider$46template.initReflector();
    model__ui__highlighted_text_model$46template.initReflector();
  };
  dart.fn(mixins__highlight_assistant_mixin$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/mixins/highlight_assistant_mixin.template.ddc", {
    "package:angular_components/mixins/highlight_assistant_mixin.template.dart": mixins__highlight_assistant_mixin$46template
  }, '{"version":3,"sourceRoot":"","sources":["highlight_assistant_mixin.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MA0BI,qDAAQ;YAAG;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,0DAAa;EACrB","file":"highlight_assistant_mixin.template.ddc.js"}');
  // Exports:
  return {
    mixins__highlight_assistant_mixin$46template: mixins__highlight_assistant_mixin$46template
  };
});

//# sourceMappingURL=highlight_assistant_mixin.template.ddc.js.map
