define(['dart_sdk', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular/src/core/di/decorators', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/di/providers'], function(dart_sdk, tooltip_controller, decorators, disposer, providers) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const src__core__di__decorators = decorators.src__core__di__decorators;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__di__providers = providers.src__di__providers;
  const _root = Object.create(null);
  const material_tooltip__module = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let TooltipControllerAndDisposerToTooltipController = () => (TooltipControllerAndDisposerToTooltipController = dart.constFn(dart.fnType(src__material_tooltip__tooltip_controller.TooltipController, [src__material_tooltip__tooltip_controller.TooltipController, utils__disposer__disposer.Disposer])))();
  dart.defineLazy(material_tooltip__module, {
    /*material_tooltip__module.materialTooltipBindings*/get materialTooltipBindings() {
      return dart.constList([dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController)], core.Type);
    },
    /*material_tooltip__module.tooltipControllerBinding*/get tooltipControllerBinding() {
      return dart.const(src__di__providers.Provider.new(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), {useFactory: material_tooltip__module.createTooltipController, deps: dart.constList([dart.constList([dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), dart.const(new src__core__di__decorators.Optional.new()), dart.const(new src__core__di__decorators.SkipSelf.new())], core.Object), dart.constList([dart.wrapType(utils__disposer__disposer.Disposer), dart.const(new src__core__di__decorators.Optional.new())], core.Object)], core.Object)}));
    },
    /*material_tooltip__module._singletonController*/get _singletonController() {
      return null;
    },
    set _singletonController(_) {}
  });
  material_tooltip__module.createTooltipController = function(controller, disposer) {
    if (controller != null) return controller;
    if (material_tooltip__module._singletonController != null) return material_tooltip__module._singletonController;
    material_tooltip__module._singletonController = new src__material_tooltip__tooltip_controller.TooltipController.new();
    disposer == null ? null : disposer.addFunction(dart.fn(() => {
      material_tooltip__module._singletonController = null;
    }, VoidToNull()));
    return material_tooltip__module._singletonController;
  };
  dart.fn(material_tooltip__module.createTooltipController, TooltipControllerAndDisposerToTooltipController());
  dart.trackLibraries("packages/angular_components/material_tooltip/module.ddc", {
    "package:angular_components/material_tooltip/module.dart": material_tooltip__module
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAQM,gDAAuB;YAAG,iBAAO,0EAAiB;;MAWlD,iDAAwB;YAAG,YAAM,+BAAQ,CAAC,0EAAiB,eACjD,gDAAuB,QAC7B,gBACJ,gBAAO,0EAAiB,EAAE,eAAM,sCAAQ,KAAI,eAAM,sCAAQ,oBAC1D,gBAAO,iDAAQ,EAAE,eAAM,sCAAQ;;MAKnB,6CAAoB;;;;;8DAIlC,UAAoD,EACpD,QAA6B;AAG/B,QAAI,UAAU,IAAI,MAAM,MAAO,WAAU;AAEzC,QAAI,6CAAoB,IAAI,MAAM,MAAO,8CAAoB;AAE7D,oDAAuB,IAAI,+DAAiB;AAC5C,YAAQ,kBAAR,QAAQ,YAAa,CAAC;AACpB,sDAAuB;;AAEzB,UAAO,8CAAoB;EAC7B","file":"module.ddc.js"}');
  // Exports:
  return {
    material_tooltip__module: material_tooltip__module
  };
});

//# sourceMappingURL=module.ddc.js.map
