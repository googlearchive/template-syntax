define(['dart_sdk', 'packages/angular_components/model/menu/menu_item_affix.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/collection/combined_list.template', 'packages/angular_components/model/collection/labeled_list.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/model/ui/display_name.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, menu_item_affix, active_item, combined_list, labeled_list, observable, display_name, icon, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__menu__menu_item_affix$46template = menu_item_affix.model__menu__menu_item_affix$46template;
  const model__a11y__active_item$46template = active_item.model__a11y__active_item$46template;
  const model__collection__combined_list$46template = combined_list.model__collection__combined_list$46template;
  const model__collection__labeled_list$46template = labeled_list.model__collection__labeled_list$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const model__ui__display_name$46template = display_name.model__ui__display_name$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const utils__id_generator__id_generator$46template = id_generator.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const model__menu__menu$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__menu__menu$46template, {
    /*model__menu__menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__menu__menu$46template.initReflector = function() {
    if (dart.test(model__menu__menu$46template._visited)) {
      return;
    }
    model__menu__menu$46template._visited = true;
    model__menu__menu_item_affix$46template.initReflector();
    model__menu__menu_item_affix$46template.initReflector();
    model__a11y__active_item$46template.initReflector();
    model__collection__combined_list$46template.initReflector();
    model__collection__labeled_list$46template.initReflector();
    model__observable__observable$46template.initReflector();
    model__ui__display_name$46template.initReflector();
    model__ui__icon$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.fn(model__menu__menu$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/menu/menu.template.ddc", {
    "package:angular_components/model/menu/menu.template.dart": model__menu__menu$46template
  }, '{"version":3,"sourceRoot":"","sources":["menu.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MA8BI,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAM,qDAAa;AACnB,IAAM,qDAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,yDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,0DAAa;EACrB","file":"menu.template.ddc.js"}');
  // Exports:
  return {
    model__menu__menu$46template: model__menu__menu$46template
  };
});

//# sourceMappingURL=menu.template.ddc.js.map
