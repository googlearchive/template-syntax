define(['dart_sdk', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/src/laminate/overlay/overlay_state', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/render/overlay_dom_render_service', 'packages/logging/logging'], function(dart_sdk, overlay_ref, overlay_state, ng_zone, overlay_dom_render_service, logging) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__overlay__overlay_ref = overlay_ref.src__laminate__overlay__overlay_ref;
  const src__laminate__overlay__overlay_state = overlay_state.src__laminate__overlay__overlay_state;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_dom_render_service.src__laminate__overlay__render__overlay_dom_render_service;
  const logging$ = logging.logging;
  const _root = Object.create(null);
  const src__laminate__overlay__overlay_service = Object.create(_root);
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const _ngZone = Symbol('_ngZone');
  const _useDomSynchronously = Symbol('_useDomSynchronously');
  const _renderService = Symbol('_renderService');
  const _createRef = Symbol('_createRef');
  const _measurePane = Symbol('_measurePane');
  src__laminate__overlay__overlay_service.OverlayService = class OverlayService extends core.Object {
    createOverlayRef(initialState) {
      return async.async(src__laminate__overlay__overlay_ref.OverlayRef, (function* createOverlayRef() {
        if (initialState === void 0) initialState = src__laminate__overlay__overlay_service.OverlayService._defaultState;
        let pane = (yield this[_renderService].createOverlayPane(initialState));
        return this[_createRef](pane, initialState);
      }).bind(this));
    }
    createOverlayRefSync(initialState) {
      if (initialState === void 0) initialState = src__laminate__overlay__overlay_service.OverlayService._defaultState;
      let pane = this[_renderService].createOverlayPaneSync(initialState);
      return this[_createRef](pane, initialState);
    }
    measureContainer() {
      return this[_renderService].measureContainer();
    }
    [_createRef](pane, state) {
      return new src__laminate__overlay__overlay_ref.OverlayRef.new(dart.bind(this[_renderService], 'applyState'), dart.bind(this, _measurePane), this[_renderService].createPortalHost(pane), this[_renderService].containerElement, pane, dart.bind(this[_ngZone], 'runOutsideAngular'), {state: state});
    }
    [_measurePane](pane, opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      return this[_renderService].measureSize(pane, {track: track, sync: this[_useDomSynchronously]});
    }
  };
  (src__laminate__overlay__overlay_service.OverlayService.new = function(ngZone, useDomSynchronously, renderService, existingInstance) {
    this[_ngZone] = ngZone;
    this[_useDomSynchronously] = useDomSynchronously;
    this[_renderService] = renderService;
    if (!dart.test(dart.fn(() => {
      if (existingInstance != null) {
        src__laminate__overlay__overlay_service.OverlayService._logger.severe('OverlayService must be a singleton: ' + 'Check that there is no nested overlayBindings or popupBindings');
      }
      return true;
    }, VoidTobool())())) dart.assertFailed();
  }).prototype = src__laminate__overlay__overlay_service.OverlayService.prototype;
  dart.addTypeTests(src__laminate__overlay__overlay_service.OverlayService);
  dart.setMethodSignature(src__laminate__overlay__overlay_service.OverlayService, () => ({
    __proto__: dart.getMethods(src__laminate__overlay__overlay_service.OverlayService.__proto__),
    createOverlayRef: dart.fnType(async.Future$(src__laminate__overlay__overlay_ref.OverlayRef), [], [src__laminate__overlay__overlay_state.OverlayState]),
    createOverlayRefSync: dart.fnType(src__laminate__overlay__overlay_ref.OverlayRef, [], [src__laminate__overlay__overlay_state.OverlayState]),
    measureContainer: dart.fnType(async.Future$(math.Rectangle$(core.num)), []),
    [_createRef]: dart.fnType(src__laminate__overlay__overlay_ref.OverlayRef, [html.HtmlElement, src__laminate__overlay__overlay_state.OverlayState]),
    [_measurePane]: dart.fnType(async.Stream$(math.Rectangle$(core.num)), [html.HtmlElement], {track: core.bool})
  }));
  dart.setFieldSignature(src__laminate__overlay__overlay_service.OverlayService, () => ({
    __proto__: dart.getFields(src__laminate__overlay__overlay_service.OverlayService.__proto__),
    [_useDomSynchronously]: dart.finalFieldType(core.bool),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_renderService]: dart.finalFieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService)
  }));
  dart.defineLazy(src__laminate__overlay__overlay_service.OverlayService, {
    /*src__laminate__overlay__overlay_service.OverlayService._defaultState*/get _defaultState() {
      return dart.const(src__laminate__overlay__overlay_state.OverlayState.new());
    },
    /*src__laminate__overlay__overlay_service.OverlayService._logger*/get _logger() {
      return logging$.Logger.new('OverlayService');
    }
  });
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/overlay_service.ddc", {
    "package:angular_components/src/laminate/overlay/overlay_service.dart": src__laminate__overlay__overlay_service
  }, '{"version":3,"sourceRoot":"","sources":["overlay_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;qBA2BO,YAAyC;AAAG;qCAA/B,eAAe,oEAAa;AAC5C,YAAY,QAAO,MAAM,oBAAc,kBAAkB,CAAC,YAAY;AACtE,cAAO,iBAAU,CAAC,IAAI,EAAE,YAAY;MACtC;;yBAKiC,YAAyC;mCAA5B,eAAe,oEAAa;AACxE,UAAY,OAAO,oBAAc,sBAAsB,CAAC,YAAY;AACpE,YAAO,iBAAU,CAAC,IAAI,EAAE,YAAY;IACtC;;YAQI,qBAAc,iBAAiB;IAAE;iBASf,IAAgB,EAAE,KAAkB;YAAK,KAAI,kDAAU,WACzE,oBAAc,iBACd,6BAAY,EACZ,oBAAc,iBAAiB,CAAC,IAAI,GACpC,oBAAc,iBAAiB,EAC/B,IAAI,YACJ,aAAO,gCACA,KAAK;IAAC;mBAGmB,IAAgB;UAAQ,+CAAO;AACjE,YAAO,qBAAc,YAAY,CAAC,IAAI,UAC3B,KAAK,QAAQ,0BAAoB;IAC9C;;yEAGS,MAAO,EACiB,mBAAoB,EAC5C,aAAc,EACnB,gBAAuD;IAHlD,aAAO,GAAP,MAAO;IACiB,0BAAoB,GAApB,mBAAoB;IAC5C,oBAAc,GAAd,aAAc;AAErB,mBAAO;AAEL,UAAI,gBAAgB,IAAI,MAAM;AAC5B,sEAAO,OAAO,CAAC,yCACX;;AAEN,YAAO;;EAEX;;;;;;;;;;;;;;;;;MAnCa,oEAAa;YAAG,YAAM,sDAAY;;MAClC,8DAAO;YAAG,AAAI,oBAAM,CAAC","file":"overlay_service.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__overlay_service: src__laminate__overlay__overlay_service
  };
});

//# sourceMappingURL=overlay_service.ddc.js.map
