define(['dart_sdk', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular/angular.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, deferred_content_aware, angular, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const content__deferred_content_aware$46template = deferred_content_aware.content__deferred_content_aware$46template;
  const angular$46template = angular.angular$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const content__deferred_content$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(content__deferred_content$46template, {
    /*content__deferred_content$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  content__deferred_content$46template.initReflector = function() {
    if (dart.test(content__deferred_content$46template._visited)) {
      return;
    }
    content__deferred_content$46template._visited = true;
    content__deferred_content_aware$46template.initReflector();
    angular$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(content__deferred_content$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/content/deferred_content.template.ddc", {
    "package:angular_components/content/deferred_content.template.dart": content__deferred_content$46template
  }, '{"version":3,"sourceRoot":"","sources":["deferred_content.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAeI,6CAAQ;YAAG;;;;;AAEb,kBAAI,6CAAQ,GAAE;AACZ;;AAEF,oDAAW;AAEX,IAAM,wDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,kDAAa;EACrB","file":"deferred_content.template.ddc.js"}');
  // Exports:
  return {
    content__deferred_content$46template: content__deferred_content$46template
  };
});

//# sourceMappingURL=deferred_content.template.ddc.js.map
