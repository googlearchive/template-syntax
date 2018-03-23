define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/src/laminate/overlay/render/overlay_dom_render_service', 'packages/angular_components/src/laminate/overlay/render/overlay_style_config', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/core/di/decorators', 'packages/angular/angular.template', 'packages/angular_components/laminate/enums/visibility.template', 'packages/angular_components/laminate/overlay/zindexer.template', 'packages/angular_components/laminate/portal/portal.template', 'packages/angular_components/laminate/ruler/dom_ruler.template', 'packages/angular_components/src/laminate/overlay/overlay_state.template', 'packages/angular_components/src/laminate/overlay/render/overlay_style_config.template', 'packages/angular_components/utils/angular/imperative_view/imperative_view.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, reflector, overlay_dom_render_service, overlay_style_config, dom_ruler, dom_service, imperative_view, zindexer, opaque_token, decorators, angular, visibility, zindexer$, portal, dom_ruler$, overlay_state, overlay_style_config$, imperative_view$, dom_service$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_dom_render_service.src__laminate__overlay__render__overlay_dom_render_service;
  const src__laminate__overlay__render__overlay_style_config = overlay_style_config.src__laminate__overlay__render__overlay_style_config;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__core__di__decorators = decorators.src__core__di__decorators;
  const angular$46template = angular.angular$46template;
  const laminate__enums__visibility$46template = visibility.laminate__enums__visibility$46template;
  const laminate__overlay__zindexer$46template = zindexer$.laminate__overlay__zindexer$46template;
  const laminate__portal__portal$46template = portal.laminate__portal__portal$46template;
  const laminate__ruler__dom_ruler$46template = dom_ruler$.laminate__ruler__dom_ruler$46template;
  const src__laminate__overlay__overlay_state$46template = overlay_state.src__laminate__overlay__overlay_state$46template;
  const src__laminate__overlay__render__overlay_style_config$46template = overlay_style_config$.src__laminate__overlay__render__overlay_style_config$46template;
  const utils__angular__imperative_view__imperative_view$46template = imperative_view$.utils__angular__imperative_view__imperative_view$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const _root = Object.create(null);
  const src__laminate__overlay__render__overlay_dom_render_service$46template = Object.create(_root);
  let OverlayStyleConfigAndHtmlElementAndString__ToOverlayDomRenderService = () => (OverlayStyleConfigAndHtmlElementAndString__ToOverlayDomRenderService = dart.constFn(dart.fnType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, [src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, html.HtmlElement, core.String, laminate__ruler__dom_ruler.DomRuler, utils__browser__dom_service__dom_service.DomService, utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, core.bool, core.bool, laminate__overlay__zindexer.ZIndexer])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__laminate__overlay__render__overlay_dom_render_service$46template, {
    /*src__laminate__overlay__render__overlay_dom_render_service$46template._visited*/get _visited() {
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
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  src__laminate__overlay__render__overlay_dom_render_service$46template.initReflector = function() {
    if (dart.test(src__laminate__overlay__render__overlay_dom_render_service$46template._visited)) {
      return;
    }
    src__laminate__overlay__render__overlay_dom_render_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService), dart.fn((p0, p1, p2, p3, p4, p5, p6, p7, p8) => new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(p0, p1, p2, p3, p4, p5, p6, p7, p8), OverlayStyleConfigAndHtmlElementAndString__ToOverlayDomRenderService()));
    src__di__reflector.registerDependencies(dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService), const$16 || (const$16 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig)], core.Object)), const$2 || (const$2 = dart.constList([const$1 || (const$1 = dart.const(new src__core__di__decorators.Inject.new(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer'))))))], core.Object)), const$5 || (const$5 = dart.constList([const$4 || (const$4 = dart.const(new src__core__di__decorators.Inject.new(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName'))))))], core.Object)), const$6 || (const$6 = dart.constList([dart.wrapType(laminate__ruler__dom_ruler.DomRuler)], core.Object)), const$7 || (const$7 = dart.constList([dart.wrapType(utils__browser__dom_service__dom_service.DomService)], core.Object)), const$8 || (const$8 = dart.constList([dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils)], core.Object)), const$11 || (const$11 = dart.constList([const$10 || (const$10 = dart.const(new src__core__di__decorators.Inject.new(const$9 || (const$9 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlaySyncDom'))))))], core.Object)), const$14 || (const$14 = dart.constList([const$13 || (const$13 = dart.const(new src__core__di__decorators.Inject.new(const$12 || (const$12 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'))))))], core.Object)), const$15 || (const$15 = dart.constList([dart.wrapType(laminate__overlay__zindexer.ZIndexer)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    laminate__enums__visibility$46template.initReflector();
    laminate__overlay__zindexer$46template.initReflector();
    laminate__portal__portal$46template.initReflector();
    laminate__ruler__dom_ruler$46template.initReflector();
    src__laminate__overlay__overlay_state$46template.initReflector();
    src__laminate__overlay__render__overlay_style_config$46template.initReflector();
    utils__angular__imperative_view__imperative_view$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.fn(src__laminate__overlay__render__overlay_dom_render_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/render/overlay_dom_render_service.template.ddc", {
    "package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.template.dart": src__laminate__overlay__render__overlay_dom_render_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["overlay_dom_render_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAoCI,8EAAQ;YAAG;;;;;;;;;;;;;;;;;;;;;;;AAEb,kBAAI,8EAAQ,GAAE;AACZ;;AAEF,qFAAW;AAEX,IAAO,kCAAe,CAAC,iGAAuB,EAAE,SAAC,EAAyB,EAAE,EAAkB,EAAE,EAAS,EAAE,EAAe,EAAE,EAAiB,EAAE,EAA6B,EAAE,EAAO,EAAE,EAAO,EAAE,EAAe,KAAK,IAAI,sFAAuB,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE;AAClR,IAAO,uCAAoB,CAAC,iGAAuB,EAAE,wCACnD,oCAAW,sFAAkB,kBAC7B,sCAAO,qCAAM,oCAAa,CAAC,qCAAM,2CAAwB,CAAC,0CAC1D,sCAAO,qCAAM,oCAAa,CAAC,qCAAM,2CAAwB,CAAC,8CAC1D,sCAAW,kDAAQ,kBACnB,sCAAW,kEAAU,kBACrB,sCAAW,sFAAsB,kBACjC,wCAAO,uCAAM,oCAAa,CAAC,qCAAM,2CAAwB,CAAC,wCAC1D,wCAAO,uCAAM,oCAAa,CAAC,uCAAM,2CAAwB,CAAC,+CAC1D,wCAAW,mDAAQ;AAErB,IAAM,gCAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,6EAAa;AACnB,IAAM,yEAAa;AACnB,IAAM,iEAAa;EACrB","file":"overlay_dom_render_service.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__render__overlay_dom_render_service$46template: src__laminate__overlay__render__overlay_dom_render_service$46template
  };
});

//# sourceMappingURL=overlay_dom_render_service.template.ddc.js.map
