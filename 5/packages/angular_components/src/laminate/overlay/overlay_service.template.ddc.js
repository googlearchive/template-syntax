define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/render/overlay_dom_render_service', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/core/di/decorators', 'packages/angular/angular.template', 'packages/angular_components/src/laminate/overlay/overlay_ref.template', 'packages/angular_components/src/laminate/overlay/overlay_state.template', 'packages/angular_components/src/laminate/overlay/render/overlay_dom_render_service.template'], function(dart_sdk, reflector, overlay_service, ng_zone, overlay_dom_render_service, opaque_token, decorators, angular, overlay_ref, overlay_state, overlay_dom_render_service$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__laminate__overlay__overlay_service = overlay_service.src__laminate__overlay__overlay_service;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_dom_render_service.src__laminate__overlay__render__overlay_dom_render_service;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__core__di__decorators = decorators.src__core__di__decorators;
  const angular$46template = angular.angular$46template;
  const src__laminate__overlay__overlay_ref$46template = overlay_ref.src__laminate__overlay__overlay_ref$46template;
  const src__laminate__overlay__overlay_state$46template = overlay_state.src__laminate__overlay__overlay_state$46template;
  const src__laminate__overlay__render__overlay_dom_render_service$46template = overlay_dom_render_service$.src__laminate__overlay__render__overlay_dom_render_service$46template;
  const _root = Object.create(null);
  const src__laminate__overlay__overlay_service$46template = Object.create(_root);
  let NgZoneAndboolAndOverlayDomRenderService__ToOverlayService = () => (NgZoneAndboolAndOverlayDomRenderService__ToOverlayService = dart.constFn(dart.fnType(src__laminate__overlay__overlay_service.OverlayService, [src__core__zone__ng_zone.NgZone, core.bool, src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, src__laminate__overlay__overlay_service.OverlayService])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__overlay__overlay_service$46template, {
    /*src__laminate__overlay__overlay_service$46template._visited*/get _visited() {
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
  let const$5;
  let const$6;
  let const$7;
  src__laminate__overlay__overlay_service$46template.initReflector = function() {
    if (dart.test(src__laminate__overlay__overlay_service$46template._visited)) {
      return;
    }
    src__laminate__overlay__overlay_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), dart.fn((p0, p1, p2, p3) => new src__laminate__overlay__overlay_service.OverlayService.new(p0, p1, p2, p3), NgZoneAndboolAndOverlayDomRenderService__ToOverlayService()));
    src__di__reflector.registerDependencies(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), const$7 || (const$7 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__core__zone__ng_zone.NgZone)], core.Object)), const$2 || (const$2 = dart.constList([const$1 || (const$1 = dart.const(new src__core__di__decorators.Inject.new(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlaySyncDom'))))))], core.Object)), const$3 || (const$3 = dart.constList([dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService)], core.Object)), const$6 || (const$6 = dart.constList([dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), const$4 || (const$4 = dart.const(new src__core__di__decorators.SkipSelf.new())), const$5 || (const$5 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    src__laminate__overlay__overlay_ref$46template.initReflector();
    src__laminate__overlay__overlay_state$46template.initReflector();
    src__laminate__overlay__render__overlay_dom_render_service$46template.initReflector();
  };
  dart.fn(src__laminate__overlay__overlay_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/overlay_service.template.ddc", {
    "package:angular_components/src/laminate/overlay/overlay_service.template.dart": src__laminate__overlay__overlay_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["overlay_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MAyBI,2DAAQ;YAAG;;;;;;;;;;;;;;AAEb,kBAAI,2DAAQ,GAAE;AACZ;;AAEF,kEAAW;AAEX,IAAO,kCAAe,CAAC,qEAAc,EAAE,SAAC,EAAa,EAAE,EAAO,EAAE,EAA8B,EAAE,EAAqB,KAAK,IAAI,0DAAc,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE;AAC3J,IAAO,uCAAoB,CAAC,qEAAc,EAAE,sCAC1C,oCAAW,8CAAM,kBACjB,sCAAO,qCAAM,oCAAa,CAAC,qCAAM,2CAAwB,CAAC,wCAC1D,sCAAW,iGAAuB,kBAClC,sCAAW,qEAAc,EAAE,qCAAM,sCAAe,MAAI,qCAAM,sCAAe;AAE3E,IAAM,gCAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,mFAAa;EACrB","file":"overlay_service.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__overlay_service$46template: src__laminate__overlay__overlay_service$46template
  };
});

//# sourceMappingURL=overlay_service.template.ddc.js.map
