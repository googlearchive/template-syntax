define(['dart_sdk', 'packages/angular_components/src/model/action/async_action.template', 'packages/angular_components/src/model/action/async_action_controller.template', 'packages/angular_components/src/model/action/delegating_async_action.template'], function(dart_sdk, async_action, async_action_controller, delegating_async_action) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model__action__async_action$46template = async_action.src__model__action__async_action$46template;
  const src__model__action__async_action_controller$46template = async_action_controller.src__model__action__async_action_controller$46template;
  const src__model__action__delegating_async_action$46template = delegating_async_action.src__model__action__delegating_async_action$46template;
  const _root = Object.create(null);
  const model__action__async_action$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__action__async_action$46template, {
    /*model__action__async_action$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model__action__async_action$46template.initReflector = function() {
    if (dart.test(model__action__async_action$46template._visited)) {
      return;
    }
    model__action__async_action$46template._visited = true;
    src__model__action__async_action$46template.initReflector();
    src__model__action__async_action_controller$46template.initReflector();
    src__model__action__delegating_async_action$46template.initReflector();
  };
  dart.fn(model__action__async_action$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/action/async_action.template.ddc", {
    "package:angular_components/model/action/async_action.template.dart": model__action__async_action$46template
  }, '{"version":3,"sourceRoot":"","sources":["async_action.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAWI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,yDAAa;AACnB,IAAM,oEAAa;AACnB,IAAM,oEAAa;EACrB","file":"async_action.template.ddc.js"}');
  // Exports:
  return {
    model__action__async_action$46template: model__action__async_action$46template
  };
});

//# sourceMappingURL=async_action.template.ddc.js.map
