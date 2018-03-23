define(['dart_sdk', 'packages/angular_components/material_expansionpanel/material_expansionpanel.template', 'packages/angular/angular.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_expansionpanel, angular, async_action, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_expansionpanel__material_expansionpanel$46template = material_expansionpanel.material_expansionpanel__material_expansionpanel$46template;
  const angular$46template = angular.angular$46template;
  const model__action__async_action$46template = async_action.model__action__async_action$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_expansionpanel__material_expansionpanel_set$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_expansionpanel__material_expansionpanel_set$46template, {
    /*material_expansionpanel__material_expansionpanel_set$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_expansionpanel__material_expansionpanel_set$46template.initReflector = function() {
    if (dart.test(material_expansionpanel__material_expansionpanel_set$46template._visited)) {
      return;
    }
    material_expansionpanel__material_expansionpanel_set$46template._visited = true;
    material_expansionpanel__material_expansionpanel$46template.initReflector();
    angular$46template.initReflector();
    model__action__async_action$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(material_expansionpanel__material_expansionpanel_set$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel_set.template.ddc", {
    "package:angular_components/material_expansionpanel/material_expansionpanel_set.template.dart": material_expansionpanel__material_expansionpanel_set$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel_set.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAgBI,wEAAQ;YAAG;;;;;AAEb,kBAAI,wEAAQ,GAAE;AACZ;;AAEF,+EAAW;AAEX,IAAM,yEAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,kDAAa;EACrB","file":"material_expansionpanel_set.template.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel_set$46template: material_expansionpanel__material_expansionpanel_set$46template
  };
});

//# sourceMappingURL=material_expansionpanel_set.template.ddc.js.map
