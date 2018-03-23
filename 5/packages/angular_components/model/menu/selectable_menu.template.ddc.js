define(['dart_sdk', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/icon.template'], function(dart_sdk, menu, select, selection_model, has_renderer, icon) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__menu__menu$46template = menu.model__menu__menu$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const _root = Object.create(null);
  const model__menu__selectable_menu$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__menu__selectable_menu$46template, {
    /*model__menu__selectable_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__menu__selectable_menu$46template.initReflector = function() {
    if (dart.test(model__menu__selectable_menu$46template._visited)) {
      return;
    }
    model__menu__selectable_menu$46template._visited = true;
    model__menu__menu$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    model__ui__icon$46template.initReflector();
  };
  dart.fn(model__menu__selectable_menu$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/menu/selectable_menu.template.ddc", {
    "package:angular_components/model/menu/selectable_menu.template.dart": model__menu__selectable_menu$46template
  }, '{"version":3,"sourceRoot":"","sources":["selectable_menu.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAsBI,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAM,0CAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,wCAAa;EACrB","file":"selectable_menu.template.ddc.js"}');
  // Exports:
  return {
    model__menu__selectable_menu$46template: model__menu__selectable_menu$46template
  };
});

//# sourceMappingURL=selectable_menu.template.ddc.js.map
