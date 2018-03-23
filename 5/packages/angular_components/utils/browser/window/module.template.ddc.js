define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/utils/browser/window/module', 'packages/angular/angular.template'], function(dart_sdk, reflector, module, angular) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const utils__browser__window__module = module.utils__browser__window__module;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const utils__browser__window__module$46template = Object.create(_root);
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(utils__browser__window__module$46template, {
    /*utils__browser__window__module$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  utils__browser__window__module$46template.initReflector = function() {
    if (dart.test(utils__browser__window__module$46template._visited)) {
      return;
    }
    utils__browser__window__module$46template._visited = true;
    src__di__reflector.registerDependencies(utils__browser__window__module.getLocation, const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(html.Window)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
  };
  dart.fn(utils__browser__window__module$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/utils/browser/window/module.template.ddc", {
    "package:angular_components/utils/browser/window/module.template.dart": utils__browser__window__module$46template
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAaI,kDAAQ;YAAG;;;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAO,uCAAoB,CAAC,0CAAW,EAAE,sCACvC,oCAAW,0BAAM;AAEnB,IAAM,gCAAa;EACrB","file":"module.template.ddc.js"}');
  // Exports:
  return {
    utils__browser__window__module$46template: utils__browser__window__module$46template
  };
});

//# sourceMappingURL=module.template.ddc.js.map
