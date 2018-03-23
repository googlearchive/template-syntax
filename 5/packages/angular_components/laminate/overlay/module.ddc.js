define(['dart_sdk', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular/src/di/providers', 'packages/angular_components/src/laminate/overlay/render/overlay_dom_render_service', 'packages/angular_components/src/laminate/overlay/render/overlay_style_config', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/laminate/overlay/zindexer'], function(dart_sdk, imperative_view, dom_ruler, angular_2, managed_zone, angular_2$, providers, overlay_dom_render_service, overlay_style_config, overlay_service, module, zindexer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const src__di__providers = providers.src__di__providers;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_dom_render_service.src__laminate__overlay__render__overlay_dom_render_service;
  const src__laminate__overlay__render__overlay_style_config = overlay_style_config.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__overlay_service = overlay_service.src__laminate__overlay__overlay_service;
  const utils__browser__window__module = module.utils__browser__window__module;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const _root = Object.create(null);
  const laminate__overlay__module = Object.create(_root);
  const $classes = dartx.classes;
  const $append = dartx.append;
  const $_set = dartx._set;
  const $attributes = dartx.attributes;
  let StringAndHtmlElementAnddynamicToHtmlElement = () => (StringAndHtmlElementAnddynamicToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [core.String, html.HtmlElement, dart.dynamic])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let StringAndHtmlElementToHtmlElement = () => (StringAndHtmlElementToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [core.String, html.HtmlElement])))();
  let DocumentAnddynamicToHtmlElement = () => (DocumentAnddynamicToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [html.Document, dart.dynamic])))();
  laminate__overlay__module.getDefaultContainer = function(name, parent, container) {
    if (container != null) return html.HtmlElement._check(container);
    let element = parent.querySelector('#default-acx-overlay-container');
    if (element == null) {
      element = html.DivElement.new();
      element.id = 'default-acx-overlay-container';
      element[$classes].add('acx-overlay-container');
      parent[$append](element);
    }
    element[$attributes][$_set]('container-name', name);
    return html.HtmlElement._check(element);
  };
  dart.fn(laminate__overlay__module.getDefaultContainer, StringAndHtmlElementAnddynamicToHtmlElement());
  laminate__overlay__module.getDefaultContainerName = function(containerName) {
    return core.String._check(containerName != null ? containerName : 'default');
  };
  dart.fn(laminate__overlay__module.getDefaultContainerName, dynamicToString());
  laminate__overlay__module.getDebugContainer = function(name, parent) {
    let element = laminate__overlay__module.getDefaultContainer(name, parent, null);
    element[$classes].add('debug');
    return element;
  };
  dart.fn(laminate__overlay__module.getDebugContainer, StringAndHtmlElementToHtmlElement());
  laminate__overlay__module.getOverlayContainerParent = function(document, containerParent) {
    return html.HtmlElement._check(containerParent != null ? containerParent : document.querySelector('body'));
  };
  dart.fn(laminate__overlay__module.getOverlayContainerParent, DocumentAnddynamicToHtmlElement());
  dart.defineLazy(laminate__overlay__module, {
    /*laminate__overlay__module.overlayBindings*/get overlayBindings() {
      return dart.constList([dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), dart.wrapType(laminate__ruler__dom_ruler.DomRuler), utils__browser__dom_service__angular_2.domServiceBinding, dart.const(src__di__providers.Provider.new(dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), {useClass: dart.wrapType(utils__angular__managed_zone__angular_2.Angular2ManagedZone)})), dart.const(src__di__providers.Provider.new(src__laminate__overlay__render__overlay_dom_render_service.overlayContainerName, {useFactory: laminate__overlay__module.getDefaultContainerName})), dart.const(src__di__providers.Provider.new(src__laminate__overlay__render__overlay_dom_render_service.overlayContainerToken, {useFactory: laminate__overlay__module.getDefaultContainer})), dart.const(src__di__providers.Provider.new(src__laminate__overlay__render__overlay_dom_render_service.overlayContainerParent, {useFactory: laminate__overlay__module.getOverlayContainerParent})), dart.const(src__di__providers.Provider.new(src__laminate__overlay__render__overlay_dom_render_service.overlaySyncDom, {useValue: true})), dart.const(src__di__providers.Provider.new(src__laminate__overlay__render__overlay_dom_render_service.overlayRepositionLoop, {useValue: true})), dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService), dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig), dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), utils__browser__window__module.windowBindings, dart.wrapType(laminate__overlay__zindexer.ZIndexer)], core.Object);
    },
    /*laminate__overlay__module.overlayDebugBindings*/get overlayDebugBindings() {
      return dart.constList([laminate__overlay__module.overlayBindings, dart.const(src__di__providers.Provider.new(src__laminate__overlay__render__overlay_dom_render_service.overlayContainerToken, {useFactory: laminate__overlay__module.getDebugContainer}))], core.Object);
    }
  });
  dart.trackLibraries("packages/angular_components/laminate/overlay/module.ddc", {
    "package:angular_components/laminate/overlay/module.dart": laminate__overlay__module
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;2DA4BI,IAAyC,EACzC,MAAkD,EAClD,SAAgE;AAClE,QAAI,SAAS,IAAI,MAAM,+BAAO,SAAS;AAEvC,QAAI,UAAU,MAAM,cAAc,CAAC;AACnC,QAAI,OAAO,IAAI,MAAM;AACnB,aAAO,GAAG,AAAI,mBAAU;MAAxB,OAAO,MACE;MADT,OAAO,eAES;AAChB,YAAM,SAAO,CAAC,OAAO;;AAEvB,WAAO,aAAW,QAAC,kBAAoB,IAAI;AAC3C,mCAAO,OAAO;EAChB;;+DAII,aAAmE;AACrE,8BAAO,aAAa,WAAb,aAAa,GAAI;EAC1B;;yDAI8B,IAAyC,EACnE,MAAkD;AACpD,QAAI,UAAU,6CAAmB,CAAC,IAAI,EAAE,MAAM,EAAE;AAChD,WAAO,UAAQ,IAAI,CAAC;AACpB,UAAO,QAAO;EAChB;;iEAGsC,QAAiB,EACnD,eAAuE;AACzE,mCAAO,eAAe,WAAf,eAAe,GAAI,QAAQ,cAAc,CAAC;EACnD;;;MAGM,yCAAe;YAAG,iBACtB,sFAAsB,EACtB,kDAAQ,EACR,wDAAiB,EACjB,WAAM,+BAAQ,CAAC,0EAAW,aAAY,0EAAmB,KACzD,WAAM,+BAAQ,CAAC,+EAAoB,eAAc,iDAAuB,KACxE,WAAM,+BAAQ,CAAC,gFAAqB,eAAc,6CAAmB,KACrE,WAAM,+BAAQ,CAAC,iFAAsB,eAAc,mDAAyB,KAE5E,WAAM,+BAAQ,CAAC,yEAAc,aAAY,SACzC,WAAM,+BAAQ,CAAC,gFAAqB,aAAY,SAChD,iGAAuB,EACvB,sFAAkB,EAClB,qEAAc,EACd,6CAAc,EACd,mDAAQ;;MAIJ,8CAAoB;YAAG,iBAC3B,yCAAe,EACf,WAAM,+BAAQ,CAAC,gFAAqB,eAAc,2CAAiB","file":"module.ddc.js"}');
  // Exports:
  return {
    laminate__overlay__module: laminate__overlay__module
  };
});

//# sourceMappingURL=module.ddc.js.map
