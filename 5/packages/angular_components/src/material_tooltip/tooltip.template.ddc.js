define(['dart_sdk', 'packages/angular_components/src/material_tooltip/ink_tooltip.template', 'packages/angular/angular.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_tooltip/module.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular_components/src/material_tooltip/tooltip_source.template', 'packages/angular_components/src/material_tooltip/tooltip_target.template'], function(dart_sdk, ink_tooltip, angular, alignment, popup, module, delayed_action, feature_detector, disposer, tooltip_controller, tooltip_source, tooltip_target) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tooltip__ink_tooltip$46template = ink_tooltip.src__material_tooltip__ink_tooltip$46template;
  const angular$46template = angular.angular$46template;
  const laminate__enums__alignment$46template = alignment.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_tooltip__module$46template = module.material_tooltip__module$46template;
  const model__action__delayed_action$46template = delayed_action.model__action__delayed_action$46template;
  const utils__browser__feature_detector__feature_detector$46template = feature_detector.utils__browser__feature_detector__feature_detector$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const src__material_tooltip__tooltip_controller$46template = tooltip_controller.src__material_tooltip__tooltip_controller$46template;
  const src__material_tooltip__tooltip_source$46template = tooltip_source.src__material_tooltip__tooltip_source$46template;
  const src__material_tooltip__tooltip_target$46template = tooltip_target.src__material_tooltip__tooltip_target$46template;
  const _root = Object.create(null);
  const src__material_tooltip__tooltip$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__material_tooltip__tooltip$46template, {
    /*src__material_tooltip__tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tooltip__tooltip$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__tooltip$46template._visited)) {
      return;
    }
    src__material_tooltip__tooltip$46template._visited = true;
    src__material_tooltip__ink_tooltip$46template.initReflector();
    src__material_tooltip__ink_tooltip$46template.initReflector();
    angular$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_tooltip__module$46template.initReflector();
    model__action__delayed_action$46template.initReflector();
    utils__browser__feature_detector__feature_detector$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    src__material_tooltip__tooltip_controller$46template.initReflector();
    src__material_tooltip__tooltip_source$46template.initReflector();
    src__material_tooltip__tooltip_target$46template.initReflector();
  };
  dart.fn(src__material_tooltip__tooltip$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tooltip/tooltip.template.ddc", {
    "package:angular_components/src/material_tooltip/tooltip.template.dart": src__material_tooltip__tooltip$46template
  }, '{"version":3,"sourceRoot":"","sources":["tooltip.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MAiCI,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAM,2DAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,2EAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,kEAAa;AACnB,IAAO,8DAAa;AACpB,IAAO,8DAAa;EACtB","file":"tooltip.template.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip$46template: src__material_tooltip__tooltip$46template
  };
});

//# sourceMappingURL=tooltip.template.ddc.js.map
