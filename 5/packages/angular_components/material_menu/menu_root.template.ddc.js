define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/mixins/material_dropdown_base.template'], function(dart_sdk, angular, material_dropdown_base) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base.mixins__material_dropdown_base$46template;
  const _root = Object.create(null);
  const material_menu__menu_root$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_menu__menu_root$46template, {
    /*material_menu__menu_root$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__menu_root$46template.initReflector = function() {
    if (dart.test(material_menu__menu_root$46template._visited)) {
      return;
    }
    material_menu__menu_root$46template._visited = true;
    angular$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
  };
  dart.fn(material_menu__menu_root$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_menu/menu_root.template.ddc", {
    "package:angular_components/material_menu/menu_root.template.dart": material_menu__menu_root$46template
  }, '{"version":3,"sourceRoot":"","sources":["menu_root.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAYI,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,uDAAa;EACrB","file":"menu_root.template.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_root$46template: material_menu__menu_root$46template
  };
});

//# sourceMappingURL=menu_root.template.ddc.js.map
