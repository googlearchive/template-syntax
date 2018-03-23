define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, angular, modal, popup, dom_service, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const laminate__components__modal__modal$46template = modal.laminate__components__modal__modal$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const focus__focus$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(focus__focus$46template, {
    /*focus__focus$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  focus__focus$46template.initReflector = function() {
    if (dart.test(focus__focus$46template._visited)) {
      return;
    }
    focus__focus$46template._visited = true;
    angular$46template.initReflector();
    laminate__components__modal__modal$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(focus__focus$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/focus/focus.template.ddc", {
    "package:angular_components/focus/focus.template.dart": focus__focus$46template
  }, '{"version":3,"sourceRoot":"","sources":["focus.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAoBI,gCAAQ;YAAG;;;;;AAEb,kBAAI,gCAAQ,GAAE;AACZ;;AAEF,uCAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,kDAAa;EACrB","file":"focus.template.ddc.js"}');
  // Exports:
  return {
    focus__focus$46template: focus__focus$46template
  };
});

//# sourceMappingURL=focus.template.ddc.js.map
