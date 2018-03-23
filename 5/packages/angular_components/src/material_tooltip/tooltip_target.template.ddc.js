define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/src/material_tooltip/tooltip_source.template'], function(dart_sdk, angular, popup, delayed_action, tooltip_controller, events, tooltip_source) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const model__action__delayed_action$46template = delayed_action.model__action__delayed_action$46template;
  const src__material_tooltip__tooltip_controller$46template = tooltip_controller.src__material_tooltip__tooltip_controller$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const src__material_tooltip__tooltip_source$46template = tooltip_source.src__material_tooltip__tooltip_source$46template;
  const _root = Object.create(null);
  const src__material_tooltip__tooltip_target$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tooltip__tooltip_target$46template, {
    /*src__material_tooltip__tooltip_target$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tooltip__tooltip_target$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__tooltip_target$46template._visited)) {
      return;
    }
    src__material_tooltip__tooltip_target$46template._visited = true;
    angular$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    model__action__delayed_action$46template.initReflector();
    src__material_tooltip__tooltip_controller$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    src__material_tooltip__tooltip_source$46template.initReflector();
  };
  dart.fn(src__material_tooltip__tooltip_target$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tooltip/tooltip_target.template.ddc", {
    "package:angular_components/src/material_tooltip/tooltip_target.template.dart": src__material_tooltip__tooltip_target$46template
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_target.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAsBI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,kEAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,8DAAa;EACrB","file":"tooltip_target.template.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip_target$46template: src__material_tooltip__tooltip_target$46template
  };
});

//# sourceMappingURL=tooltip_target.template.ddc.js.map
