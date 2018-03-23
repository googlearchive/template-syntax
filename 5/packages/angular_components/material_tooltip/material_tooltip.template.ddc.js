define(['dart_sdk', 'packages/angular_components/src/material_tooltip/icon_tooltip.template', 'packages/angular_components/src/material_tooltip/ink_tooltip.template', 'packages/angular_components/src/material_tooltip/paper_tooltip.template', 'packages/angular_components/src/material_tooltip/tooltip.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular_components/src/material_tooltip/tooltip_source.template', 'packages/angular_components/src/material_tooltip/tooltip_target.template'], function(dart_sdk, icon_tooltip, ink_tooltip, paper_tooltip, tooltip, tooltip_controller, tooltip_source, tooltip_target) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tooltip__icon_tooltip$46template = icon_tooltip.src__material_tooltip__icon_tooltip$46template;
  const src__material_tooltip__ink_tooltip$46template = ink_tooltip.src__material_tooltip__ink_tooltip$46template;
  const src__material_tooltip__paper_tooltip$46template = paper_tooltip.src__material_tooltip__paper_tooltip$46template;
  const src__material_tooltip__tooltip$46template = tooltip.src__material_tooltip__tooltip$46template;
  const src__material_tooltip__tooltip_controller$46template = tooltip_controller.src__material_tooltip__tooltip_controller$46template;
  const src__material_tooltip__tooltip_source$46template = tooltip_source.src__material_tooltip__tooltip_source$46template;
  const src__material_tooltip__tooltip_target$46template = tooltip_target.src__material_tooltip__tooltip_target$46template;
  const _root = Object.create(null);
  const material_tooltip__material_tooltip$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_tooltip__material_tooltip$46template, {
    /*material_tooltip__material_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tooltip__material_tooltip$46template.initReflector = function() {
    if (dart.test(material_tooltip__material_tooltip$46template._visited)) {
      return;
    }
    material_tooltip__material_tooltip$46template._visited = true;
    src__material_tooltip__icon_tooltip$46template.initReflector();
    src__material_tooltip__ink_tooltip$46template.initReflector();
    src__material_tooltip__paper_tooltip$46template.initReflector();
    src__material_tooltip__tooltip$46template.initReflector();
    src__material_tooltip__tooltip_controller$46template.initReflector();
    src__material_tooltip__tooltip_source$46template.initReflector();
    src__material_tooltip__tooltip_target$46template.initReflector();
  };
  dart.fn(material_tooltip__material_tooltip$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_tooltip/material_tooltip.template.ddc", {
    "package:angular_components/material_tooltip/material_tooltip.template.dart": material_tooltip__material_tooltip$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tooltip.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAeI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,4DAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,kEAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,8DAAa;EACrB","file":"material_tooltip.template.ddc.js"}');
  // Exports:
  return {
    material_tooltip__material_tooltip$46template: material_tooltip__material_tooltip$46template
  };
});

//# sourceMappingURL=material_tooltip.template.ddc.js.map
