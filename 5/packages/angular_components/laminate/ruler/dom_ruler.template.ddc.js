define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/angular.template', 'packages/angular_components/src/laminate/ruler/ruler_interface.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, reflector, dom_ruler, dom_service, angular, ruler_interface, dom_service$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const angular$46template = angular.angular$46template;
  const src__laminate__ruler__ruler_interface$46template = ruler_interface.src__laminate__ruler__ruler_interface$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const _root = Object.create(null);
  const laminate__ruler__dom_ruler$46template = Object.create(_root);
  let DocumentAndDomServiceToDomRuler = () => (DocumentAndDomServiceToDomRuler = dart.constFn(dart.fnType(laminate__ruler__dom_ruler.DomRuler, [html.Document, utils__browser__dom_service__dom_service.DomService])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let DocumentAndDomServiceToDomRulerImpl = () => (DocumentAndDomServiceToDomRulerImpl = dart.constFn(dart.fnType(laminate__ruler__dom_ruler.DomRulerImpl, [html.Document, utils__browser__dom_service__dom_service.DomService])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(laminate__ruler__dom_ruler$46template, {
    /*laminate__ruler__dom_ruler$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  laminate__ruler__dom_ruler$46template.initReflector = function() {
    if (dart.test(laminate__ruler__dom_ruler$46template._visited)) {
      return;
    }
    laminate__ruler__dom_ruler$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(laminate__ruler__dom_ruler.DomRuler), dart.fn((p0, p1) => laminate__ruler__dom_ruler.DomRuler.new(p0, p1), DocumentAndDomServiceToDomRuler()));
    src__di__reflector.registerDependencies(dart.wrapType(laminate__ruler__dom_ruler.DomRuler), const$1 || (const$1 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(html.Document)], core.Object)), const$0 || (const$0 = dart.constList([dart.wrapType(utils__browser__dom_service__dom_service.DomService)], core.Object))], ListOfObject())));
    src__di__reflector.registerFactory(dart.wrapType(laminate__ruler__dom_ruler.DomRulerImpl), dart.fn((p0, p1) => new laminate__ruler__dom_ruler.DomRulerImpl.new(p0, p1), DocumentAndDomServiceToDomRulerImpl()));
    src__di__reflector.registerDependencies(dart.wrapType(laminate__ruler__dom_ruler.DomRulerImpl), const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.constList([dart.wrapType(html.Document)], core.Object)), const$3 || (const$3 = dart.constList([dart.wrapType(utils__browser__dom_service__dom_service.DomService)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    src__laminate__ruler__ruler_interface$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.fn(laminate__ruler__dom_ruler$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/laminate/ruler/dom_ruler.template.ddc", {
    "package:angular_components/laminate/ruler/dom_ruler.template.dart": laminate__ruler__dom_ruler$46template
  }, '{"version":3,"sourceRoot":"","sources":["dom_ruler.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAoBI,8CAAQ;YAAG;;;;;;;;;;;AAEb,kBAAI,8CAAQ,GAAE;AACZ;;AAEF,qDAAW;AAEX,IAAO,kCAAe,CAAC,kDAAQ,EAAE,SAAC,EAAe,EAAE,EAAiB,KAAK,AAAI,uCAAQ,CAAC,EAAE,EAAE,EAAE;AAC5F,IAAO,uCAAoB,CAAC,kDAAQ,EAAE,sCACpC,oCAAW,4BAAQ,kBACnB,sCAAW,kEAAU;AAEvB,IAAO,kCAAe,CAAC,sDAAY,EAAE,SAAC,EAAe,EAAE,EAAiB,KAAK,IAAI,2CAAY,CAAC,EAAE,EAAE,EAAE;AACpG,IAAO,uCAAoB,CAAC,sDAAY,EAAE,sCACxC,sCAAW,4BAAQ,kBACnB,sCAAW,kEAAU;AAEvB,IAAM,gCAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,iEAAa;EACrB","file":"dom_ruler.template.ddc.js"}');
  // Exports:
  return {
    laminate__ruler__dom_ruler$46template: laminate__ruler__dom_ruler$46template
  };
});

//# sourceMappingURL=dom_ruler.template.ddc.js.map
