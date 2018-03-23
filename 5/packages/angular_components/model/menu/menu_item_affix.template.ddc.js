define(['dart_sdk', 'packages/angular_components/model/ui/icon.template'], function(dart_sdk, icon) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const _root = Object.create(null);
  const model__menu__menu_item_affix$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__menu__menu_item_affix$46template, {
    /*model__menu__menu_item_affix$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__menu__menu_item_affix$46template.initReflector = function() {
    if (dart.test(model__menu__menu_item_affix$46template._visited)) {
      return;
    }
    model__menu__menu_item_affix$46template._visited = true;
    model__ui__icon$46template.initReflector();
  };
  dart.fn(model__menu__menu_item_affix$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/menu/menu_item_affix.template.ddc", {
    "package:angular_components/model/menu/menu_item_affix.template.dart": model__menu__menu_item_affix$46template
  }, '{"version":3,"sourceRoot":"","sources":["menu_item_affix.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAM,wCAAa;EACrB","file":"menu_item_affix.template.ddc.js"}');
  // Exports:
  return {
    model__menu__menu_item_affix$46template: model__menu__menu_item_affix$46template
  };
});

//# sourceMappingURL=menu_item_affix.template.ddc.js.map
