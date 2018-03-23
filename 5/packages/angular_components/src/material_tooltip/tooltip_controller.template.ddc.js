define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular/angular.template'], function(dart_sdk, reflector, tooltip_controller, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__material_tooltip__tooltip_controller$46template = Object.create(_root);
  let VoidToTooltipController = () => (VoidToTooltipController = dart.constFn(dart.fnType(src__material_tooltip__tooltip_controller.TooltipController, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tooltip__tooltip_controller$46template, {
    /*src__material_tooltip__tooltip_controller$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tooltip__tooltip_controller$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__tooltip_controller$46template._visited)) {
      return;
    }
    src__material_tooltip__tooltip_controller$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), dart.fn(() => new src__material_tooltip__tooltip_controller.TooltipController.new(), VoidToTooltipController()));
    angular$46template.initReflector();
  };
  dart.fn(src__material_tooltip__tooltip_controller$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tooltip/tooltip_controller.template.ddc", {
    "package:angular_components/src/material_tooltip/tooltip_controller.template.dart": src__material_tooltip__tooltip_controller$46template
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_controller.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAYI,6DAAQ;YAAG;;;;;AAEb,kBAAI,6DAAQ,GAAE;AACZ;;AAEF,oEAAW;AAEX,IAAO,kCAAe,CAAC,0EAAiB,EAAE,cAAM,IAAI,+DAAiB;AACrE,IAAM,gCAAa;EACrB","file":"tooltip_controller.template.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip_controller$46template: src__material_tooltip__tooltip_controller$46template
  };
});

//# sourceMappingURL=tooltip_controller.template.ddc.js.map
