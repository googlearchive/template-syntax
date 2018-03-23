define(['dart_sdk', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/laminate/enums/visibility', 'packages/angular_components/laminate/portal/portal', 'packages/angular_components/src/laminate/overlay/overlay_state', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/overlay/zindexer'], function(dart_sdk, opaque_token, visibility, portal, overlay_state, dom_ruler, dom_service, imperative_view, zindexer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const laminate__enums__visibility = visibility.laminate__enums__visibility;
  const laminate__portal__portal = portal.laminate__portal__portal;
  const src__laminate__overlay__overlay_state = overlay_state.src__laminate__overlay__overlay_state;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const _root = Object.create(null);
  const src__laminate__overlay__render__overlay_dom_render_service = Object.create(_root);
  const $_set = dartx._set;
  const $attributes = dartx.attributes;
  const $add = dartx.add;
  const $minWidth = dartx.minWidth;
  const $zIndex = dartx.zIndex;
  const $parent = dartx.parent;
  const $classes = dartx.classes;
  const $append = dartx.append;
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let JSArrayOfRectangleOfnum = () => (JSArrayOfRectangleOfnum = dart.constFn(_interceptors.JSArray$(RectangleOfnum())))();
  let StreamOfRectangleOfnum = () => (StreamOfRectangleOfnum = dart.constFn(async.Stream$(RectangleOfnum())))();
  let dynamicToRectangleOfnum = () => (dynamicToRectangleOfnum = dart.constFn(dart.fnType(RectangleOfnum(), [dart.dynamic])))();
  let FutureOfRectangleOfnum = () => (FutureOfRectangleOfnum = dart.constFn(async.Future$(RectangleOfnum())))();
  let dynamicToHtmlElement = () => (dynamicToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [dart.dynamic])))();
  let FutureOfHtmlElement = () => (FutureOfHtmlElement = dart.constFn(async.Future$(html.HtmlElement)))();
  dart.defineLazy(src__laminate__overlay__render__overlay_dom_render_service, {
    /*src__laminate__overlay__render__overlay_dom_render_service.overlayContainerName*/get overlayContainerName() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName'));
    },
    /*src__laminate__overlay__render__overlay_dom_render_service.overlayContainerToken*/get overlayContainerToken() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer'));
    },
    /*src__laminate__overlay__render__overlay_dom_render_service.overlayContainerParent*/get overlayContainerParent() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent'));
    },
    /*src__laminate__overlay__render__overlay_dom_render_service.overlaySyncDom*/get overlaySyncDom() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlaySyncDom'));
    },
    /*src__laminate__overlay__render__overlay_dom_render_service.overlayRepositionLoop*/get overlayRepositionLoop() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop'));
    }
  });
  const _containerName = Symbol('_containerName');
  const _domRuler = Symbol('_domRuler');
  const _domService = Symbol('_domService');
  const _imperativeViewUtils = Symbol('_imperativeViewUtils');
  const _useDomSynchronously = Symbol('_useDomSynchronously');
  const _useRepositionLoop = Symbol('_useRepositionLoop');
  const _zIndexer = Symbol('_zIndexer');
  const _lastZIndex = Symbol('_lastZIndex');
  const _uniqueId = Symbol('_uniqueId');
  const _createUniqueId = Symbol('_createUniqueId');
  src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService = class OverlayDomRenderService extends core.Object {
    get containerElement() {
      return this[containerElement$];
    }
    set containerElement(value) {
      super.containerElement = value;
    }
    [_createUniqueId]() {
      return dart.str`${this[_containerName]}-${this[_uniqueId] = dart.notNull(this[_uniqueId]) + 1}`;
    }
    applyState(state, pane) {
      return async.async(dart.dynamic, (function* applyState() {
        if (!dart.test(this[_useDomSynchronously])) {
          return this[_domService].onWrite().then(dart.dynamic, dart.fn(_ => {
            this.applyStateSync(state, pane);
          }, dynamicToNull()));
        } else {
          this.applyStateSync(state, pane);
        }
      }).bind(this));
    }
    applyStateSync(state, pane) {
      let cssClasses = JSArrayOfString().of([]);
      if (dart.test(state.captureEvents)) {
        cssClasses[$add]('modal');
      }
      if (dart.equals(state.visibility, laminate__enums__visibility.Visibility.Visible)) cssClasses[$add]('visible');
      this[_domRuler].updateSync(pane, {cssClasses: cssClasses, width: state.width, height: state.height, top: state.top, left: state.left, bottom: state.bottom, right: state.right, visibility: state.visibility, position: state.position, useCssTransform: !dart.test(this[_useRepositionLoop])});
      if (state.minWidth != null) {
        pane.style[$minWidth] = dart.str`${state.minWidth}px`;
      }
      if (state.zIndex != null) {
        pane.style[$zIndex] = dart.str`${state.zIndex}`;
      }
      if (pane[$parent] != null) {
        if (this[_lastZIndex] != this[_zIndexer].peek()) {
          this[_lastZIndex] = this[_zIndexer].pop();
        }
        this[_domRuler].updateSync(pane[$parent], {zIndex: this[_lastZIndex]});
      }
    }
    measureSize(pane, opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      let sync = opts && 'sync' in opts ? opts.sync : false;
      if (dart.test(track)) {
        return this[_domRuler].track(pane);
      } else {
        if (!dart.test(sync)) {
          return this[_domRuler].measure(pane).asStream();
        }
        return StreamOfRectangleOfnum().fromIterable(JSArrayOfRectangleOfnum().of([this[_domRuler].measureSync(pane)]));
      }
    }
    measureContainer() {
      if (!dart.test(this[_useDomSynchronously])) {
        return this[_domService].onWrite().then(RectangleOfnum(), dart.fn(_ => this.containerElement.getBoundingClientRect(), dynamicToRectangleOfnum()));
      } else {
        return FutureOfRectangleOfnum().value(this.containerElement.getBoundingClientRect());
      }
    }
    createOverlayPane(state) {
      if (state === void 0) state = src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService._defaultConfig;
      let pane = html.DivElement.new();
      pane[$attributes][$_set]('pane-id', this[_createUniqueId]());
      pane[$classes].add("pane");
      this.applyStateSync(state, pane);
      if (!dart.test(this[_useDomSynchronously])) {
        return this[_domService].onWrite().then(html.HtmlElement, dart.fn(_ => {
          this.containerElement[$append](pane);
          return pane;
        }, dynamicToHtmlElement()));
      } else {
        this.containerElement[$append](pane);
        return FutureOfHtmlElement().value(pane);
      }
    }
    createOverlayPaneSync(state) {
      if (state === void 0) state = src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService._defaultConfig;
      let pane = html.DivElement.new();
      pane[$attributes][$_set]('pane-id', this[_createUniqueId]());
      pane[$classes].add("pane");
      this.applyStateSync(state, pane);
      this.containerElement[$append](pane);
      return pane;
    }
    createPortalHost(hostContainer) {
      return new laminate__portal__portal.DomPortalHost.new(hostContainer, this[_imperativeViewUtils]);
    }
  };
  (src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new = function(styleConfig, containerElement, containerName, domRuler, domService, imperativeViewUtils, useDomSynchronously, useRepositionLoop, zIndexer) {
    this[_lastZIndex] = null;
    this[_uniqueId] = 0;
    this[containerElement$] = containerElement;
    this[_containerName] = containerName;
    this[_domRuler] = domRuler;
    this[_domService] = domService;
    this[_imperativeViewUtils] = imperativeViewUtils;
    this[_useDomSynchronously] = useDomSynchronously;
    this[_useRepositionLoop] = useRepositionLoop;
    this[_zIndexer] = zIndexer;
    this.containerElement[$attributes][$_set]('name', this[_containerName]);
    styleConfig.registerStyles();
    this[_lastZIndex] = this[_zIndexer].peek();
  }).prototype = src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.prototype;
  dart.addTypeTests(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService);
  const containerElement$ = Symbol("OverlayDomRenderService.containerElement");
  dart.setMethodSignature(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, () => ({
    __proto__: dart.getMethods(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.__proto__),
    [_createUniqueId]: dart.fnType(core.String, []),
    applyState: dart.fnType(async.Future, [src__laminate__overlay__overlay_state.OverlayState, html.HtmlElement]),
    applyStateSync: dart.fnType(dart.void, [src__laminate__overlay__overlay_state.OverlayState, html.HtmlElement]),
    measureSize: dart.fnType(async.Stream$(math.Rectangle$(core.num)), [html.HtmlElement], {track: core.bool, sync: core.bool}),
    measureContainer: dart.fnType(async.Future$(math.Rectangle$(core.num)), []),
    createOverlayPane: dart.fnType(async.Future$(html.HtmlElement), [], [src__laminate__overlay__overlay_state.OverlayState]),
    createOverlayPaneSync: dart.fnType(html.HtmlElement, [], [src__laminate__overlay__overlay_state.OverlayState]),
    createPortalHost: dart.fnType(laminate__portal__portal.PortalHost, [html.HtmlElement])
  }));
  dart.setFieldSignature(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, () => ({
    __proto__: dart.getFields(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.__proto__),
    containerElement: dart.finalFieldType(html.HtmlElement),
    [_containerName]: dart.finalFieldType(core.String),
    [_domRuler]: dart.finalFieldType(laminate__ruler__dom_ruler.DomRuler),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_imperativeViewUtils]: dart.finalFieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils),
    [_useDomSynchronously]: dart.finalFieldType(core.bool),
    [_useRepositionLoop]: dart.finalFieldType(core.bool),
    [_zIndexer]: dart.finalFieldType(laminate__overlay__zindexer.ZIndexer),
    [_lastZIndex]: dart.fieldType(core.int),
    [_uniqueId]: dart.fieldType(core.int)
  }));
  dart.defineLazy(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, {
    /*src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService._defaultConfig*/get _defaultConfig() {
      return dart.const(src__laminate__overlay__overlay_state.OverlayState.new());
    },
    /*src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService._paneClassName*/get _paneClassName() {
      return 'pane';
    }
  });
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/render/overlay_dom_render_service.ddc", {
    "package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart": src__laminate__overlay__render__overlay_dom_render_service
  }, '{"version":3,"sourceRoot":"","sources":["overlay_dom_render_service.dart"],"names":[],"mappings":"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","file":"overlay_dom_render_service.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__render__overlay_dom_render_service: src__laminate__overlay__render__overlay_dom_render_service
  };
});

//# sourceMappingURL=overlay_dom_render_service.ddc.js.map
