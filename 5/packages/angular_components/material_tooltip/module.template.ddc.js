define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular/src/core/di/decorators', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/angular.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, reflector, module, tooltip_controller, decorators, disposer, angular, tooltip_controller$, disposer$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const material_tooltip__module = module.material_tooltip__module;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const src__core__di__decorators = decorators.src__core__di__decorators;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const angular$46template = angular.angular$46template;
  const src__material_tooltip__tooltip_controller$46template = tooltip_controller$.src__material_tooltip__tooltip_controller$46template;
  const utils__disposer__disposer$46template = disposer$.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_tooltip__module$46template = Object.create(_root);
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_tooltip__module$46template, {
    /*material_tooltip__module$46template._visited*/get _visited() {
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
  material_tooltip__module$46template.initReflector = function() {
    if (dart.test(material_tooltip__module$46template._visited)) {
      return;
    }
    material_tooltip__module$46template._visited = true;
    src__di__reflector.registerDependencies(material_tooltip__module.createTooltipController, const$4 || (const$4 = dart.constList([const$1 || (const$1 = dart.constList([dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), const$ || (const$ = dart.const(new src__core__di__decorators.SkipSelf.new())), const$0 || (const$0 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object)), const$3 || (const$3 = dart.constList([dart.wrapType(utils__disposer__disposer.Disposer), const$2 || (const$2 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    src__material_tooltip__tooltip_controller$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(material_tooltip__module$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_tooltip/module.template.ddc", {
    "package:angular_components/material_tooltip/module.template.dart": material_tooltip__module$46template
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAiBI,4CAAQ;YAAG;;;;;;;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAO,uCAAoB,CAAC,gDAAuB,EAAE,sCACnD,sCAAW,0EAAiB,EAAE,mCAAM,sCAAe,MAAI,qCAAM,sCAAe,sBAC5E,sCAAW,iDAAQ,EAAE,qCAAM,sCAAe;AAE5C,IAAM,gCAAa;AACnB,IAAM,kEAAa;AACnB,IAAM,kDAAa;EACrB","file":"module.template.ddc.js"}');
  // Exports:
  return {
    material_tooltip__module$46template: material_tooltip__module$46template
  };
});

//# sourceMappingURL=module.template.ddc.js.map
