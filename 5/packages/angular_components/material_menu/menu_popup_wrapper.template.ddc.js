define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/model/ui/accepts_width.template', 'packages/angular_components/utils/angular/properties/properties.template'], function(dart_sdk, angular, menu, observable, accepts_width, properties) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const model__menu__menu$46template = menu.model__menu__menu$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const model__ui__accepts_width$46template = accepts_width.model__ui__accepts_width$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const _root = Object.create(null);
  const material_menu__menu_popup_wrapper$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_menu__menu_popup_wrapper$46template, {
    /*material_menu__menu_popup_wrapper$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__menu_popup_wrapper$46template.initReflector = function() {
    if (dart.test(material_menu__menu_popup_wrapper$46template._visited)) {
      return;
    }
    material_menu__menu_popup_wrapper$46template._visited = true;
    angular$46template.initReflector();
    model__menu__menu$46template.initReflector();
    model__observable__observable$46template.initReflector();
    model__ui__accepts_width$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
  };
  dart.fn(material_menu__menu_popup_wrapper$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_menu/menu_popup_wrapper.template.ddc", {
    "package:angular_components/material_menu/menu_popup_wrapper.template.dart": material_menu__menu_popup_wrapper$46template
  }, '{"version":3,"sourceRoot":"","sources":["menu_popup_wrapper.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAmBI,qDAAQ;YAAG;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,+DAAa;EACrB","file":"menu_popup_wrapper.template.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_popup_wrapper$46template: material_menu__menu_popup_wrapper$46template
  };
});

//# sourceMappingURL=menu_popup_wrapper.template.ddc.js.map
