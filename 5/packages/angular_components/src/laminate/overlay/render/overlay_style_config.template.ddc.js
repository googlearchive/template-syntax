define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/src/laminate/overlay/render/overlay_style_config', 'packages/angular/angular.template'], function(dart_sdk, reflector, overlay_style_config, angular) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__laminate__overlay__render__overlay_style_config = overlay_style_config.src__laminate__overlay__render__overlay_style_config;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__laminate__overlay__render__overlay_style_config$46template = Object.create(_root);
  let DocumentToOverlayStyleConfig = () => (DocumentToOverlayStyleConfig = dart.constFn(dart.fnType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, [html.Document])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__overlay__render__overlay_style_config$46template, {
    /*src__laminate__overlay__render__overlay_style_config$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  src__laminate__overlay__render__overlay_style_config$46template.initReflector = function() {
    if (dart.test(src__laminate__overlay__render__overlay_style_config$46template._visited)) {
      return;
    }
    src__laminate__overlay__render__overlay_style_config$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig), dart.fn(p0 => new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(p0), DocumentToOverlayStyleConfig()));
    src__di__reflector.registerDependencies(dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(html.Document)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
  };
  dart.fn(src__laminate__overlay__render__overlay_style_config$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/render/overlay_style_config.template.ddc", {
    "package:angular_components/src/laminate/overlay/render/overlay_style_config.template.dart": src__laminate__overlay__render__overlay_style_config$46template
  }, '{"version":3,"sourceRoot":"","sources":["overlay_style_config.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAaI,wEAAQ;YAAG;;;;;;;AAEb,kBAAI,wEAAQ,GAAE;AACZ;;AAEF,+EAAW;AAEX,IAAO,kCAAe,CAAC,sFAAkB,EAAE,QAAC,EAAe,IAAK,IAAI,2EAAkB,CAAC,EAAE;AACzF,IAAO,uCAAoB,CAAC,sFAAkB,EAAE,sCAC9C,oCAAW,4BAAQ;AAErB,IAAM,gCAAa;EACrB","file":"overlay_style_config.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__render__overlay_style_config$46template: src__laminate__overlay__render__overlay_style_config$46template
  };
});

//# sourceMappingURL=overlay_style_config.template.ddc.js.map
