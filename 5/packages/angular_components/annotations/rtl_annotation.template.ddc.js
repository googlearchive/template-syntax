define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/annotations/rtl_annotation', 'packages/angular/angular.template'], function(dart_sdk, reflector, rtl_annotation, angular) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const annotations__rtl_annotation = rtl_annotation.annotations__rtl_annotation;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const annotations__rtl_annotation$46template = Object.create(_root);
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(annotations__rtl_annotation$46template, {
    /*annotations__rtl_annotation$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  annotations__rtl_annotation$46template.initReflector = function() {
    if (dart.test(annotations__rtl_annotation$46template._visited)) {
      return;
    }
    annotations__rtl_annotation$46template._visited = true;
    src__di__reflector.registerDependencies(annotations__rtl_annotation.determineRtl, const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(html.Document)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
  };
  dart.fn(annotations__rtl_annotation$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/annotations/rtl_annotation.template.ddc", {
    "package:angular_components/annotations/rtl_annotation.template.dart": annotations__rtl_annotation$46template
  }, '{"version":3,"sourceRoot":"","sources":["rtl_annotation.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAaI,+CAAQ;YAAG;;;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAO,uCAAoB,CAAC,wCAAY,EAAE,sCACxC,oCAAW,4BAAQ;AAErB,IAAM,gCAAa;EACrB","file":"rtl_annotation.template.ddc.js"}');
  // Exports:
  return {
    annotations__rtl_annotation$46template: annotations__rtl_annotation$46template
  };
});

//# sourceMappingURL=rtl_annotation.template.ddc.js.map
