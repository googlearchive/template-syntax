define(['dart_sdk', 'packages/angular_components/src/laminate/overlay/overlay_state', 'packages/angular_components/laminate/enums/visibility', 'packages/angular_components/laminate/portal/portal'], function(dart_sdk, overlay_state, visibility, portal) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__overlay__overlay_state = overlay_state.src__laminate__overlay__overlay_state;
  const laminate__enums__visibility = visibility.laminate__enums__visibility;
  const laminate__portal__portal = portal.laminate__portal__portal;
  const _root = Object.create(null);
  const src__laminate__overlay__overlay_ref = Object.create(_root);
  const $onMouseDown = dartx.onMouseDown;
  const $_get = dartx._get;
  const $attributes = dartx.attributes;
  const $remove = dartx.remove;
  const $width = dartx.width;
  const $height = dartx.height;
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async.Future, [dart.dynamic])))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let StreamOfRectangleOfnum = () => (StreamOfRectangleOfnum = dart.constFn(async.Stream$(RectangleOfnum())))();
  let VoidToStreamOfRectangleOfnum = () => (VoidToStreamOfRectangleOfnum = dart.constFn(dart.fnType(StreamOfRectangleOfnum(), [])))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let OverlayStateAndHtmlElementToFuture = () => (OverlayStateAndHtmlElementToFuture = dart.constFn(dart.fnType(async.Future, [src__laminate__overlay__overlay_state.OverlayState, html.HtmlElement])))();
  let HtmlElement__ToStreamOfRectangleOfnum = () => (HtmlElement__ToStreamOfRectangleOfnum = dart.constFn(dart.fnType(StreamOfRectangleOfnum(), [html.HtmlElement], {track: core.bool})))();
  src__laminate__overlay__overlay_ref.AsyncApplyState$ = dart.generic(E => {
    const AsyncApplyState = dart.typedef('AsyncApplyState', () => dart.fnType(async.Future, [src__laminate__overlay__overlay_state.OverlayState, E]));
    return AsyncApplyState;
  });
  src__laminate__overlay__overlay_ref.AsyncApplyState = src__laminate__overlay__overlay_ref.AsyncApplyState$();
  src__laminate__overlay__overlay_ref.AsyncMeasureSize$ = dart.generic(E => {
    const AsyncMeasureSize = dart.typedef('AsyncMeasureSize', () => dart.fnType(async.Stream$(math.Rectangle$(core.num)), [E], {track: core.bool}));
    return AsyncMeasureSize;
  });
  src__laminate__overlay__overlay_ref.AsyncMeasureSize = src__laminate__overlay__overlay_ref.AsyncMeasureSize$();
  const _asyncApplyState = Symbol('_asyncApplyState');
  const _asyncMeasureSize = Symbol('_asyncMeasureSize');
  const _delegatePortalHost = Symbol('_delegatePortalHost');
  const _runOutsideAngular = Symbol('_runOutsideAngular');
  const _lastVisible = Symbol('_lastVisible');
  const _onVisibleController = Symbol('_onVisibleController');
  const _stateUpdateListener = Symbol('_stateUpdateListener');
  const _applyChanges = Symbol('_applyChanges');
  src__laminate__overlay__overlay_ref.OverlayRef = class OverlayRef extends core.Object {
    get isVisible() {
      return !dart.equals(this.state.visibility, laminate__enums__visibility.Visibility.None);
    }
    get onPanePressed() {
      return this.overlayElement[$onMouseDown];
    }
    measureSizeChanges() {
      return dart.asyncStar(RectangleOfnum(), (function* measureSizeChanges(stream) {
        if (dart.equals(this.state.visibility, laminate__enums__visibility.Visibility.None)) {
          this.state.visibility = laminate__enums__visibility.Visibility.Hidden;
        }
        yield this[_applyChanges]();
        if (stream.addStream(StreamOfRectangleOfnum().as(dart.dcall(this[_runOutsideAngular], dart.fn(() => this[_asyncMeasureSize](this.overlayElement, {track: true}).distinct(dart.tagStatic(src__laminate__overlay__overlay_ref.OverlayRef, '_isEqualSize')), VoidToStreamOfRectangleOfnum()))))) return;
        yield;
      }).bind(this));
    }
    get onVisibleChanged() {
      let t = this[_onVisibleController];
      t == null ? this[_onVisibleController] = StreamControllerOfbool().broadcast({sync: true}) : t;
      return this[_onVisibleController].stream;
    }
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
    get containerElement() {
      return this[containerElement$];
    }
    set containerElement(value) {
      super.containerElement = value;
    }
    get overlayElement() {
      return this[overlayElement$];
    }
    set overlayElement(value) {
      super.overlayElement = value;
    }
    setPreventInteraction(preventInteraction) {
      if (preventInteraction === void 0) preventInteraction = null;
      this.state.captureEvents = preventInteraction != null ? preventInteraction : true;
    }
    setVisible(visible) {
      if (visible === void 0) visible = null;
      this.state.visibility = laminate__enums__visibility.Visibility.fromBoolean(visible != null ? visible : true);
    }
    get uniqueId() {
      return this.overlayElement[$attributes][$_get]('pane-id');
    }
    attach(portal) {
      return this[_delegatePortalHost].attach(portal);
    }
    detach() {
      return this[_delegatePortalHost].detach();
    }
    get hasAttached() {
      return this[_delegatePortalHost].hasAttached;
    }
    dispose() {
      this.overlayElement[$remove]();
      if (this[_onVisibleController] != null) {
        this[_onVisibleController].close();
      }
      if (this[_delegatePortalHost].hasAttached === true) {
        this[_delegatePortalHost].dispose();
      }
      this[_stateUpdateListener].cancel();
    }
    static _isEqualSize(a, b) {
      return a[$width] == b[$width] && a[$height] == b[$height];
    }
    [_applyChanges]() {
      if (this[_lastVisible] != this.isVisible) {
        this[_lastVisible] = this.isVisible;
        if (this[_onVisibleController] != null) {
          this[_onVisibleController].add(this.isVisible);
        }
      }
      return this[_asyncApplyState](this.state, this.overlayElement);
    }
  };
  (src__laminate__overlay__overlay_ref.OverlayRef.new = function(asyncApplyState, asyncMeasureSize, delegatePortalHost, containerElement, overlayElement, runOutsideAngular, opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    this[_lastVisible] = false;
    this[_onVisibleController] = null;
    this[_stateUpdateListener] = null;
    this[_asyncApplyState] = asyncApplyState;
    this[_asyncMeasureSize] = asyncMeasureSize;
    this[_delegatePortalHost] = delegatePortalHost;
    this[containerElement$] = containerElement;
    this[overlayElement$] = overlayElement;
    this[_runOutsideAngular] = runOutsideAngular;
    this[state$] = src__laminate__overlay__overlay_state.MutableOverlayState.from(state);
    this[_stateUpdateListener] = this.state.onUpdate.listen(dart.fn(_ => this[_applyChanges](), dynamicToFuture()));
  }).prototype = src__laminate__overlay__overlay_ref.OverlayRef.prototype;
  dart.addTypeTests(src__laminate__overlay__overlay_ref.OverlayRef);
  const state$ = Symbol("OverlayRef.state");
  const containerElement$ = Symbol("OverlayRef.containerElement");
  const overlayElement$ = Symbol("OverlayRef.overlayElement");
  src__laminate__overlay__overlay_ref.OverlayRef[dart.implements] = () => [laminate__portal__portal.PortalHost];
  dart.setMethodSignature(src__laminate__overlay__overlay_ref.OverlayRef, () => ({
    __proto__: dart.getMethods(src__laminate__overlay__overlay_ref.OverlayRef.__proto__),
    measureSizeChanges: dart.fnType(async.Stream$(math.Rectangle$(core.num)), []),
    setPreventInteraction: dart.fnType(dart.void, [], [core.bool]),
    setVisible: dart.fnType(dart.void, [], [core.bool]),
    attach: dart.fnType(async.Future, [laminate__portal__portal.Portal]),
    detach: dart.fnType(async.Future, []),
    dispose: dart.fnType(dart.void, []),
    [_applyChanges]: dart.fnType(async.Future, [])
  }));
  dart.setStaticMethodSignature(src__laminate__overlay__overlay_ref.OverlayRef, () => ({_isEqualSize: dart.fnType(core.bool, [RectangleOfnum(), RectangleOfnum()])}));
  dart.setGetterSignature(src__laminate__overlay__overlay_ref.OverlayRef, () => ({
    __proto__: dart.getGetters(src__laminate__overlay__overlay_ref.OverlayRef.__proto__),
    isVisible: dart.fnType(core.bool, []),
    onPanePressed: dart.fnType(async.Stream$(html.MouseEvent), []),
    onVisibleChanged: dart.fnType(async.Stream$(core.bool), []),
    uniqueId: dart.fnType(core.String, []),
    hasAttached: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__laminate__overlay__overlay_ref.OverlayRef, () => ({
    __proto__: dart.getFields(src__laminate__overlay__overlay_ref.OverlayRef.__proto__),
    state: dart.finalFieldType(src__laminate__overlay__overlay_state.MutableOverlayState),
    containerElement: dart.finalFieldType(html.HtmlElement),
    overlayElement: dart.finalFieldType(html.HtmlElement),
    [_asyncApplyState]: dart.finalFieldType(OverlayStateAndHtmlElementToFuture()),
    [_asyncMeasureSize]: dart.finalFieldType(HtmlElement__ToStreamOfRectangleOfnum()),
    [_delegatePortalHost]: dart.finalFieldType(laminate__portal__portal.PortalHost),
    [_runOutsideAngular]: dart.finalFieldType(core.Function),
    [_lastVisible]: dart.fieldType(core.bool),
    [_onVisibleController]: dart.fieldType(StreamControllerOfbool()),
    [_stateUpdateListener]: dart.fieldType(async.StreamSubscription)
  }));
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/overlay_ref.ddc", {
    "package:angular_components/src/laminate/overlay/overlay_ref.dart": src__laminate__overlay__overlay_ref
  }, '{"version":3,"sourceRoot":"","sources":["overlay_ref.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BAgCwB,UAAK,WAAW,EAAI,sCAAU,KAAK;;;YAKjB,oBAAc,cAAY;;;AAQ3B;AAIrC,wBAAI,UAAK,WAAW,EAAI,sCAAU,KAAK,GAAE;AACvC,oBAAK,WAAW,GAAG,sCAAU,OAAO;;AAEtC,cAAM,mBAAa;AACnB,oEAAO,wBAAkB,EAAC,cACjB,uBAAiB,CAAC,mBAAc,UAAS,eACnC,CAAC,8EAAY;QAF5B;MAIF;;;AAIE,wCAAoB;+CAAK,AAAI,kCAA0B,QAAO;AAC9D,YAAO,2BAAoB,OAAO;IACpC;IAK0B;;;;;;IAGR;;;;;;IAGA;;;;;;0BAIU,kBAAuB;yCAAlB;AAC/B,gBAAK,cAAc,GAAG,kBAAkB,WAAlB,kBAAkB,GAAI;IAC9C;eAGiB,OAAY;8BAAP;AACpB,gBAAK,WAAW,GAAG,AAAI,kDAAsB,CAAC,OAAO,WAAP,OAAO,GAAI;IAC3D;;YAGuB,oBAAc,aAAW,QAAC;IAAU;WAG7C,MAAa;YAAK,0BAAmB,OAAO,CAAC,MAAM;IAAC;;YAG/C,0BAAmB,OAAO;IAAE;;YAGvB,0BAAmB,YAAY;;;AAIrD,yBAAc,SAAO;AACrB,UAAI,0BAAoB,IAAI,MAAM;AAChC,kCAAoB,MAAM;;AAE5B,UAAI,yBAAmB,YAAY,KAAI,MAAM;AAC3C,iCAAmB,QAAQ;;AAE7B,gCAAoB,OAAO;IAC7B;wBAEyB,CAAW,EAAE,CAAW;AAC/C,YAAO,AAAmB,EAAlB,QAAM,IAAI,CAAC,QAAM,IAAI,CAAC,SAAO,IAAI,CAAC,SAAO;IACnD;;AAeE,UAAI,kBAAY,IAAI,cAAS,EAAE;AAC7B,0BAAY,GAAG,cAAS;AACxB,YAAI,0BAAoB,IAAI,MAAM;AAChC,oCAAoB,IAAI,CAAC,cAAS;;;AAGtC,YAAO,uBAAgB,CAAC,UAAK,EAAE,mBAAc;IAC/C;;iEAGS,eAAgB,EAChB,gBAAiB,EACjB,kBAAmB,EACxB,gBAAqB,EACrB,cAAmB,EACd,iBAAkB;QACT;IAxBb,kBAAY,GAAG;IAEG,0BAAoB;IAGxB,0BAAoB;IAa9B,sBAAgB,GAAhB,eAAgB;IAChB,uBAAiB,GAAjB,gBAAiB;IACjB,yBAAmB,GAAnB,kBAAmB;IACnB,uBAAgB,GAAhB,gBAAgB;IAChB,qBAAc,GAAd,cAAc;IACd,wBAAkB,GAAlB,iBAAkB;IAEhB,YAAK,GAAG,AAAI,8DAAwB,CAAC,KAAK;AACnD,8BAAoB,GAAG,UAAU,SAAS,OAAO,CAAC,QAAC,CAAC,IAAK,mBAAa;EACxE","file":"overlay_ref.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__overlay_ref: src__laminate__overlay__overlay_ref
  };
});

//# sourceMappingURL=overlay_ref.ddc.js.map
