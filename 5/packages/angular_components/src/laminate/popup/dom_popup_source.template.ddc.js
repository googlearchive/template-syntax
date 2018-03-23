define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular/angular.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/ruler/dom_ruler.template', 'packages/angular_components/src/laminate/popup/popup_source.template'], function(dart_sdk, reflector, dom_popup_source, dom_ruler, angular, rtl_annotation, alignment, dom_ruler$, popup_source) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const angular$46template = angular.angular$46template;
  const annotations__rtl_annotation$46template = rtl_annotation.annotations__rtl_annotation$46template;
  const laminate__enums__alignment$46template = alignment.laminate__enums__alignment$46template;
  const laminate__ruler__dom_ruler$46template = dom_ruler$.laminate__ruler__dom_ruler$46template;
  const src__laminate__popup__popup_source$46template = popup_source.src__laminate__popup__popup_source$46template;
  const _root = Object.create(null);
  const src__laminate__popup__dom_popup_source$46template = Object.create(_root);
  let DomRulerToDomPopupSourceFactory = () => (DomRulerToDomPopupSourceFactory = dart.constFn(dart.fnType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory, [laminate__ruler__dom_ruler.DomRuler])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__popup__dom_popup_source$46template, {
    /*src__laminate__popup__dom_popup_source$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  src__laminate__popup__dom_popup_source$46template.initReflector = function() {
    if (dart.test(src__laminate__popup__dom_popup_source$46template._visited)) {
      return;
    }
    src__laminate__popup__dom_popup_source$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), dart.fn(p0 => new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(p0), DomRulerToDomPopupSourceFactory()));
    src__di__reflector.registerDependencies(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(laminate__ruler__dom_ruler.DomRuler)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    annotations__rtl_annotation$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__ruler__dom_ruler$46template.initReflector();
    src__laminate__popup__popup_source$46template.initReflector();
  };
  dart.fn(src__laminate__popup__dom_popup_source$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/popup/dom_popup_source.template.ddc", {
    "package:angular_components/src/laminate/popup/dom_popup_source.template.dart": src__laminate__popup__dom_popup_source$46template
  }, '{"version":3,"sourceRoot":"","sources":["dom_popup_source.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAuBI,0DAAQ;YAAG;;;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAO,kCAAe,CAAC,2EAAqB,EAAE,QAAC,EAAe,IAAK,IAAI,gEAAqB,CAAC,EAAE;AAC/F,IAAO,uCAAoB,CAAC,2EAAqB,EAAE,sCACjD,oCAAW,kDAAQ;AAErB,IAAM,gCAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,2DAAa;EACrB","file":"dom_popup_source.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__dom_popup_source$46template: src__laminate__popup__dom_popup_source$46template
  };
});

//# sourceMappingURL=dom_popup_source.template.ddc.js.map
