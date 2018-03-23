define(['dart_sdk', 'packages/angular_components/utils/browser/events/events.template'], function(dart_sdk, events) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const _root = Object.create(null);
  const model__a11y__keyboard_handler_mixin$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__a11y__keyboard_handler_mixin$46template, {
    /*model__a11y__keyboard_handler_mixin$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__a11y__keyboard_handler_mixin$46template.initReflector = function() {
    if (dart.test(model__a11y__keyboard_handler_mixin$46template._visited)) {
      return;
    }
    model__a11y__keyboard_handler_mixin$46template._visited = true;
    utils__browser__events__events$46template.initReflector();
  };
  dart.fn(model__a11y__keyboard_handler_mixin$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/a11y/keyboard_handler_mixin.template.ddc", {
    "package:angular_components/model/a11y/keyboard_handler_mixin.template.dart": model__a11y__keyboard_handler_mixin$46template
  }, '{"version":3,"sourceRoot":"","sources":["keyboard_handler_mixin.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,uDAAQ;YAAG;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAM,uDAAa;EACrB","file":"keyboard_handler_mixin.template.ddc.js"}');
  // Exports:
  return {
    model__a11y__keyboard_handler_mixin$46template: model__a11y__keyboard_handler_mixin$46template
  };
});

//# sourceMappingURL=keyboard_handler_mixin.template.ddc.js.map
