define(['dart_sdk', 'packages/angular_components/src/model/action/async_action.template'], function(dart_sdk, async_action) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model__action__async_action$46template = async_action.src__model__action__async_action$46template;
  const _root = Object.create(null);
  const src__model__action__delegating_async_action$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__model__action__delegating_async_action$46template, {
    /*src__model__action__delegating_async_action$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__model__action__delegating_async_action$46template.initReflector = function() {
    if (dart.test(src__model__action__delegating_async_action$46template._visited)) {
      return;
    }
    src__model__action__delegating_async_action$46template._visited = true;
    src__model__action__async_action$46template.initReflector();
  };
  dart.fn(src__model__action__delegating_async_action$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/model/action/delegating_async_action.template.ddc", {
    "package:angular_components/src/model/action/delegating_async_action.template.dart": src__model__action__delegating_async_action$46template
  }, '{"version":3,"sourceRoot":"","sources":["delegating_async_action.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,+DAAQ;YAAG;;;;;AAEb,kBAAI,+DAAQ,GAAE;AACZ;;AAEF,sEAAW;AAEX,IAAM,yDAAa;EACrB","file":"delegating_async_action.template.ddc.js"}');
  // Exports:
  return {
    src__model__action__delegating_async_action$46template: src__model__action__delegating_async_action$46template
  };
});

//# sourceMappingURL=delegating_async_action.template.ddc.js.map
