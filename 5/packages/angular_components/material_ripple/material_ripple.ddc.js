define(['dart_sdk', 'packages/angular_components/utils/color/material', 'packages/angular_components/utils/browser/feature_detector/feature_detector', 'packages/angular_components/utils/browser/events/events', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, material, feature_detector, events, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__color__material = material.utils__color__material;
  const utils__browser__feature_detector__feature_detector = feature_detector.utils__browser__feature_detector__feature_detector;
  const utils__browser__events__events = events.utils__browser__events__events;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const material_ripple__material_ripple = Object.create(_root);
  const $clone = dartx.clone;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $append = dartx.append;
  const $width = dartx.width;
  const $height = dartx.height;
  const $left = dartx.left;
  const $top = dartx.top;
  const $animate = dartx.animate;
  const $client = dartx.client;
  const $addEventListener = dartx.addEventListener;
  const $removeEventListener = dartx.removeEventListener;
  let intAndintAndHtmlElement__Tovoid = () => (intAndintAndHtmlElement__Tovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.int, html.HtmlElement, core.bool])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let JSArrayOfMapOfString$dynamic = () => (JSArrayOfMapOfString$dynamic = dart.constFn(_interceptors.JSArray$(MapOfString$dynamic())))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let DivElementAndboolAndRectangleOfnum__Tovoid = () => (DivElementAndboolAndRectangleOfnum__Tovoid = dart.constFn(dart.fnType(dart.void, [html.DivElement, core.bool, RectangleOfnum(), core.int, core.int])))();
  let ListOfDivElement = () => (ListOfDivElement = dart.constFn(core.List$(html.DivElement)))();
  let IdentityMapOfString$double = () => (IdentityMapOfString$double = dart.constFn(_js_helper.IdentityMap$(core.String, core.double)))();
  let MapOfString$double = () => (MapOfString$double = dart.constFn(core.Map$(core.String, core.double)))();
  let JSArrayOfMapOfString$double = () => (JSArrayOfMapOfString$double = dart.constFn(_interceptors.JSArray$(MapOfString$double())))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let EventTodynamic = () => (EventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Event])))();
  dart.defineLazy(material_ripple__material_ripple, {
    /*material_ripple__material_ripple._rippleDiameter*/get _rippleDiameter() {
      return 256;
    },
    /*material_ripple__material_ripple._rippleRadius*/get _rippleRadius() {
      return 256 / 2;
    },
    /*material_ripple__material_ripple._minOpacity*/get _minOpacity() {
      return 0.0;
    },
    /*material_ripple__material_ripple._maxOpacity*/get _maxOpacity() {
      return utils__color__material.rippleOpacity;
    },
    /*material_ripple__material_ripple._maxRipples*/get _maxRipples() {
      return 3;
    },
    /*material_ripple__material_ripple._numRipples*/get _numRipples() {
      return 0;
    },
    set _numRipples(_) {},
    /*material_ripple__material_ripple._rippleIndex*/get _rippleIndex() {
      return 0;
    },
    set _rippleIndex(_) {},
    /*material_ripple__material_ripple._ripplePool*/get _ripplePool() {
      return null;
    },
    set _ripplePool(_) {},
    /*material_ripple__material_ripple._rippleTemplate*/get _rippleTemplate() {
      return null;
    },
    set _rippleTemplate(_) {},
    /*material_ripple__material_ripple._opacityTiming*/get _opacityTiming() {
      return null;
    },
    set _opacityTiming(_) {},
    /*material_ripple__material_ripple._opacityKeyframes*/get _opacityKeyframes() {
      return null;
    },
    set _opacityKeyframes(_) {},
    /*material_ripple__material_ripple._transformTiming*/get _transformTiming() {
      return null;
    },
    set _transformTiming(_) {}
  });
  material_ripple__material_ripple._createRipple = function(clientX, clientY, container, center) {
    let rect = container.getBoundingClientRect();
    let ripple = null;
    if (dart.notNull(material_ripple__material_ripple._numRipples) < 3) {
      ripple = html.DivElement.as(material_ripple__material_ripple._rippleTemplate[$clone](false));
      material_ripple__material_ripple._ripplePool[$_set](material_ripple__material_ripple._rippleIndex, html.DivElement._check(ripple));
      material_ripple__material_ripple._numRipples = dart.notNull(material_ripple__material_ripple._numRipples) + 1;
    } else {
      ripple = material_ripple__material_ripple._ripplePool[$_get](material_ripple__material_ripple._rippleIndex);
      dart.dsend(ripple, 'remove');
    }
    if ((material_ripple__material_ripple._rippleIndex = dart.notNull(material_ripple__material_ripple._rippleIndex) + 1) === 3) material_ripple__material_ripple._rippleIndex = 0;
    if (dart.test(utils__browser__feature_detector__feature_detector.supportsAnimationApi)) {
      material_ripple__material_ripple._applyAnimation(html.DivElement._check(ripple), center, rect, clientX, clientY);
    } else {
      material_ripple__material_ripple._applyFallbackAnimation(html.DivElement._check(ripple), center, rect, clientX, clientY);
    }
    container[$append](html.Node._check(ripple));
  };
  dart.fn(material_ripple__material_ripple._createRipple, intAndintAndHtmlElement__Tovoid());
  material_ripple__material_ripple._applyAnimation = function(ripple, center, rect, clientX, clientY) {
    let containerWidth = rect[$width];
    let containerHeight = rect[$height];
    let maxDimension = dart.notNull(containerWidth) > dart.notNull(containerHeight) ? containerWidth : containerHeight;
    let minScale = dart.notNull(maxDimension) * 0.6 / 256;
    let maxRadius = math.sqrt(math.pow(dart.notNull(containerWidth) / 2, 2) + math.pow(dart.notNull(containerHeight) / 2, 2)) + 10;
    let maxScale = maxRadius / material_ripple__material_ripple._rippleRadius;
    let top = null;
    let left = null;
    let initialTransform = null;
    let finalTransform = null;
    if (dart.test(center)) {
      top = dart.str`calc(50% - ${material_ripple__material_ripple._rippleRadius}px)`;
      left = dart.str`calc(50% - ${material_ripple__material_ripple._rippleRadius}px)`;
      initialTransform = dart.str`scale(${minScale})`;
      finalTransform = dart.str`scale(${maxScale})`;
    } else {
      let offsetX = dart.notNull(clientX) - dart.notNull(rect[$left]) - material_ripple__material_ripple._rippleRadius;
      let offsetY = dart.notNull(clientY) - dart.notNull(rect[$top]) - material_ripple__material_ripple._rippleRadius;
      let driftX = dart.notNull(containerWidth) / 2 - material_ripple__material_ripple._rippleRadius - offsetX;
      let driftY = dart.notNull(containerHeight) / 2 - material_ripple__material_ripple._rippleRadius - offsetY;
      top = dart.str`${offsetY}px`;
      left = dart.str`${offsetX}px`;
      initialTransform = dart.str`translate(0, 0) scale(${minScale})`;
      finalTransform = dart.str`translate(${driftX}px, ${driftY}px) scale(${maxScale})`;
    }
    let transformKeyframes = JSArrayOfMapOfString$dynamic().of([new (IdentityMapOfString$dynamic()).from(['transform', initialTransform]), new (IdentityMapOfString$dynamic()).from(['transform', finalTransform])]);
    ripple.style.cssText = dart.str`top: ${top}; left: ${left}; transform: ${finalTransform}`;
    ripple[$animate](material_ripple__material_ripple._opacityKeyframes, material_ripple__material_ripple._opacityTiming);
    ripple[$animate](transformKeyframes, material_ripple__material_ripple._transformTiming);
  };
  dart.fn(material_ripple__material_ripple._applyAnimation, DivElementAndboolAndRectangleOfnum__Tovoid());
  material_ripple__material_ripple._applyFallbackAnimation = function(ripple, center, rect, clientX, clientY) {
    let top = null;
    let left = null;
    if (dart.test(center)) {
      top = dart.str`calc(50% - ${material_ripple__material_ripple._rippleRadius}px)`;
      left = dart.str`calc(50% - ${material_ripple__material_ripple._rippleRadius}px)`;
    } else {
      let offsetX = dart.notNull(clientX) - dart.notNull(rect[$left]) - material_ripple__material_ripple._rippleRadius;
      let offsetY = dart.notNull(clientY) - dart.notNull(rect[$top]) - material_ripple__material_ripple._rippleRadius;
      top = dart.str`${offsetY}px`;
      left = dart.str`${offsetX}px`;
    }
    ripple.style[$top] = core.String._check(top);
    ripple.style[$left] = core.String._check(left);
  };
  dart.fn(material_ripple__material_ripple._applyFallbackAnimation, DivElementAndboolAndRectangleOfnum__Tovoid());
  const _element = Symbol('_element');
  const _onMouseDown = Symbol('_onMouseDown');
  const _onKeyDown = Symbol('_onKeyDown');
  material_ripple__material_ripple.MaterialRippleComponent = class MaterialRippleComponent extends core.Object {
    get center() {
      return this[center];
    }
    set center(value) {
      this[center] = value;
    }
    ngOnDestroy() {
      this[_element][$removeEventListener]('mousedown', this[_onMouseDown]);
      this[_element][$removeEventListener]('keydown', this[_onKeyDown]);
    }
  };
  (material_ripple__material_ripple.MaterialRippleComponent.new = function(element) {
    this[_onMouseDown] = null;
    this[_onKeyDown] = null;
    this[center] = false;
    this[_element] = element;
    let t = material_ripple__material_ripple._ripplePool;
    t == null ? material_ripple__material_ripple._ripplePool = ListOfDivElement().new(3) : t;
    let t$ = material_ripple__material_ripple._opacityTiming;
    t$ == null ? material_ripple__material_ripple._opacityTiming = new (IdentityMapOfString$double()).from(['duration', 300.0]) : t$;
    let t$0 = material_ripple__material_ripple._opacityKeyframes;
    t$0 == null ? material_ripple__material_ripple._opacityKeyframes = JSArrayOfMapOfString$double().of([new (IdentityMapOfString$double()).from(['opacity', material_ripple__material_ripple._minOpacity]), new (IdentityMapOfString$double()).from(['opacity', material_ripple__material_ripple._maxOpacity, 'offset', 0.25]), new (IdentityMapOfString$double()).from(['opacity', material_ripple__material_ripple._maxOpacity, 'offset', 0.5]), new (IdentityMapOfString$double()).from(['opacity', material_ripple__material_ripple._minOpacity])]) : t$0;
    let t$1 = material_ripple__material_ripple._transformTiming;
    t$1 == null ? material_ripple__material_ripple._transformTiming = new (IdentityMapOfString$dynamic()).from(['duration', 225.0, 'easing', 'cubic-bezier(0.4, 0.0, 0.2, 1)']) : t$1;
    if (material_ripple__material_ripple._rippleTemplate == null) {
      let className = dart.test(utils__browser__feature_detector__feature_detector.supportsAnimationApi) ? '__acx-ripple' : '__acx-ripple fallback';
      material_ripple__material_ripple._rippleTemplate = (() => {
        let _ = html.DivElement.new();
        _.className = className;
        return _;
      })();
    }
    this[_onMouseDown] = dart.fn(e => {
      let clientX = html.MouseEvent.as(e)[$client].x;
      let clientY = html.MouseEvent.as(e)[$client].y;
      material_ripple__material_ripple._createRipple(dart.asInt(clientX), dart.asInt(clientY), this[_element], this.center);
    }, EventToNull());
    this[_onKeyDown] = dart.fn(e => {
      if (!dart.test(utils__browser__events__events.isKeyboardTrigger(html.KeyboardEvent._check(e)))) return;
      material_ripple__material_ripple._createRipple(0, 0, this[_element], true);
    }, EventToNull());
    this[_element][$addEventListener]('mousedown', this[_onMouseDown]);
    this[_element][$addEventListener]('keydown', this[_onKeyDown]);
  }).prototype = material_ripple__material_ripple.MaterialRippleComponent.prototype;
  dart.addTypeTests(material_ripple__material_ripple.MaterialRippleComponent);
  const center = Symbol("MaterialRippleComponent.center");
  material_ripple__material_ripple.MaterialRippleComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_ripple__material_ripple.MaterialRippleComponent, () => ({
    __proto__: dart.getMethods(material_ripple__material_ripple.MaterialRippleComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_ripple__material_ripple.MaterialRippleComponent, () => ({
    __proto__: dart.getFields(material_ripple__material_ripple.MaterialRippleComponent.__proto__),
    [_element]: dart.finalFieldType(html.HtmlElement),
    [_onMouseDown]: dart.fieldType(EventTodynamic()),
    [_onKeyDown]: dart.fieldType(EventTodynamic()),
    center: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_ripple/material_ripple.ddc", {
    "package:angular_components/material_ripple/material_ripple.dart": material_ripple__material_ripple
  }, '{"version":3,"sourceRoot":"","sources":["material_ripple.dart"],"names":[],"mappings":"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","file":"material_ripple.ddc.js"}');
  // Exports:
  return {
    material_ripple__material_ripple: material_ripple__material_ripple
  };
});

//# sourceMappingURL=material_ripple.ddc.js.map
