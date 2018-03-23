define(['dart_sdk', 'packages/quiver/core', 'packages/angular_components/laminate/enums/visibility', 'packages/angular_components/laminate/enums/position', 'packages/angular_components/src/utils/async/async_update_scheduler'], function(dart_sdk, core, visibility, position, async_update_scheduler) {
  'use strict';
  const core$ = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$0 = core.core;
  const laminate__enums__visibility = visibility.laminate__enums__visibility;
  const laminate__enums__position = position.laminate__enums__position;
  const src__utils__async__async_update_scheduler = async_update_scheduler.src__utils__async__async_update_scheduler;
  const _root = Object.create(null);
  const src__laminate__overlay__overlay_state = Object.create(_root);
  const $toString = dartx.toString;
  let OverlayStateAndOverlayStateTobool = () => (OverlayStateAndOverlayStateTobool = dart.constFn(dart.fnType(core$.bool, [src__laminate__overlay__overlay_state.OverlayState, src__laminate__overlay__overlay_state.OverlayState])))();
  let OverlayStateToint = () => (OverlayStateToint = dart.constFn(dart.fnType(core$.int, [src__laminate__overlay__overlay_state.OverlayState])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core$.String, core$.Object)))();
  src__laminate__overlay__overlay_state._stateEquals = function(a, b) {
    if (a == b) return true;
    return a.captureEvents == b.captureEvents && a.left == b.left && a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.width == b.width && a.minWidth == b.minWidth && a.height == b.height && a.zIndex == b.zIndex && dart.equals(a.position, b.position);
  };
  dart.lazyFn(src__laminate__overlay__overlay_state._stateEquals, () => OverlayStateAndOverlayStateTobool());
  src__laminate__overlay__overlay_state._stateHashCode = function(a) {
    return core$0.hashObjects([a.captureEvents, a.left, a.top, a.right, a.bottom, a.width, a.minWidth, a.height, a.zIndex, a.position]);
  };
  dart.lazyFn(src__laminate__overlay__overlay_state._stateHashCode, () => OverlayStateToint());
  src__laminate__overlay__overlay_state.OverlayState = class OverlayState extends core$.Object {
    static new(opts) {
      return new src__laminate__overlay__overlay_state._ImmutableOverlayState.new(opts);
    }
  };
  (src__laminate__overlay__overlay_state.OverlayState[dart.mixinNew] = function() {
  }).prototype = src__laminate__overlay__overlay_state.OverlayState.prototype;
  dart.addTypeTests(src__laminate__overlay__overlay_state.OverlayState);
  dart.defineLazy(src__laminate__overlay__overlay_state.OverlayState, {
    /*src__laminate__overlay__overlay_state.OverlayState.Dialog*/get Dialog() {
      return dart.const(src__laminate__overlay__overlay_state.OverlayState.new({captureEvents: true, top: 0, bottom: 0, left: 0, right: 0}));
    }
  });
  let const$;
  src__laminate__overlay__overlay_state._ImmutableOverlayState = class _ImmutableOverlayState extends core$.Object {
    _equals(o) {
      if (o == null) return false;
      return src__laminate__overlay__overlay_state.OverlayState.is(o) && dart.test(src__laminate__overlay__overlay_state._stateEquals(this, o));
    }
    get hashCode() {
      return src__laminate__overlay__overlay_state._stateHashCode(this);
    }
    get onUpdate() {
      return const$ || (const$ = dart.const(async.Stream.empty()));
    }
    toString() {
      return 'ImmutableOverlayState ' + dart.notNull(new (IdentityMapOfString$Object()).from(['captureEvents', this.captureEvents, 'left', this.left, 'top', this.top, 'right', this.right, 'bottom', this.bottom, 'width', this.width, 'height', this.height, 'visibility', this.visibility, 'zIndex', this.zIndex, 'position', this.position])[$toString]());
    }
  };
  (src__laminate__overlay__overlay_state._ImmutableOverlayState.new = function(opts) {
    let captureEvents = opts && 'captureEvents' in opts ? opts.captureEvents : false;
    let left = opts && 'left' in opts ? opts.left : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let right = opts && 'right' in opts ? opts.right : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let zIndex = opts && 'zIndex' in opts ? opts.zIndex : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : laminate__enums__visibility.Visibility.None;
    let position = opts && 'position' in opts ? opts.position : null;
    this.captureEvents = captureEvents;
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.width = width;
    this.minWidth = minWidth;
    this.height = height;
    this.zIndex = zIndex;
    this.visibility = visibility;
    this.position = position;
  }).prototype = src__laminate__overlay__overlay_state._ImmutableOverlayState.prototype;
  dart.addTypeTests(src__laminate__overlay__overlay_state._ImmutableOverlayState);
  src__laminate__overlay__overlay_state._ImmutableOverlayState[dart.implements] = () => [src__laminate__overlay__overlay_state.OverlayState];
  dart.setGetterSignature(src__laminate__overlay__overlay_state._ImmutableOverlayState, () => ({
    __proto__: dart.getGetters(src__laminate__overlay__overlay_state._ImmutableOverlayState.__proto__),
    onUpdate: dart.fnType(async.Stream, [])
  }));
  dart.setFieldSignature(src__laminate__overlay__overlay_state._ImmutableOverlayState, () => ({
    __proto__: dart.getFields(src__laminate__overlay__overlay_state._ImmutableOverlayState.__proto__),
    captureEvents: dart.finalFieldType(core$.bool),
    left: dart.finalFieldType(core$.num),
    top: dart.finalFieldType(core$.num),
    right: dart.finalFieldType(core$.num),
    bottom: dart.finalFieldType(core$.num),
    width: dart.finalFieldType(core$.num),
    minWidth: dart.finalFieldType(core$.num),
    height: dart.finalFieldType(core$.num),
    visibility: dart.finalFieldType(laminate__enums__visibility.Visibility),
    zIndex: dart.finalFieldType(core$.int),
    position: dart.finalFieldType(laminate__enums__position.Position)
  }));
  dart.defineExtensionMethods(src__laminate__overlay__overlay_state._ImmutableOverlayState, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__laminate__overlay__overlay_state._ImmutableOverlayState, ['hashCode']);
  const _asyncScheduler = Symbol('_asyncScheduler');
  const _captureEvents = Symbol('_captureEvents');
  const _left = Symbol('_left');
  const _top = Symbol('_top');
  const _right = Symbol('_right');
  const _bottom = Symbol('_bottom');
  const _width = Symbol('_width');
  const _minWidth = Symbol('_minWidth');
  const _height = Symbol('_height');
  const _zIndex = Symbol('_zIndex');
  const _visibility = Symbol('_visibility');
  const _position = Symbol('_position');
  src__laminate__overlay__overlay_state.MutableOverlayState = class MutableOverlayState extends core$.Object {
    static from(other) {
      if (other == null) return new src__laminate__overlay__overlay_state.MutableOverlayState.new();
      if (src__laminate__overlay__overlay_state.MutableOverlayState.is(other)) return other;
      return new src__laminate__overlay__overlay_state.MutableOverlayState.new({captureEvents: other.captureEvents, left: other.left, top: other.top, right: other.right, bottom: other.bottom, width: other.width, minWidth: other.minWidth, height: other.height, zIndex: other.zIndex, visibility: other.visibility, position: other.position});
    }
    _equals(o) {
      if (o == null) return false;
      return src__laminate__overlay__overlay_state.OverlayState.is(o) && dart.test(src__laminate__overlay__overlay_state._stateEquals(this, o));
    }
    get hashCode() {
      return src__laminate__overlay__overlay_state._stateHashCode(this);
    }
    get onUpdate() {
      return this[_asyncScheduler].onUpdate;
    }
    get captureEvents() {
      return this[_captureEvents];
    }
    set captureEvents(captureEvents) {
      if (this[_captureEvents] != captureEvents) {
        this[_captureEvents] = captureEvents;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get left() {
      return this[_left];
    }
    set left(left) {
      if (this[_left] != left) {
        this[_left] = left;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get top() {
      return this[_top];
    }
    set top(top) {
      if (this[_top] != top) {
        this[_top] = top;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get right() {
      return this[_right];
    }
    set right(right) {
      if (this[_right] != right) {
        this[_right] = right;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get bottom() {
      return this[_bottom];
    }
    set bottom(bottom) {
      if (this[_bottom] != bottom) {
        this[_bottom] = bottom;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get width() {
      return this[_width];
    }
    set width(width) {
      if (this[_width] != width) {
        this[_width] = width;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get minWidth() {
      return this[_minWidth];
    }
    set minWidth(minWidth) {
      if (this[_minWidth] != minWidth) {
        this[_minWidth] = minWidth;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get height() {
      return this[_height];
    }
    set height(height) {
      if (this[_height] != height) {
        this[_height] = height;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get zIndex() {
      return this[_zIndex];
    }
    set zIndex(zIndex) {
      if (this[_zIndex] != zIndex) {
        this[_zIndex] = zIndex;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get visibility() {
      return this[_visibility];
    }
    set visibility(visibility) {
      if (!dart.equals(this[_visibility], visibility)) {
        this[_visibility] = visibility;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get position() {
      return this[_position];
    }
    set position(position) {
      if (!dart.equals(this[_position], position)) {
        this[_position] = position;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    toString() {
      return 'MutableOverlayState ' + dart.notNull(new (IdentityMapOfString$Object()).from(['captureEvents', this.captureEvents, 'left', this.left, 'top', this.top, 'right', this.right, 'bottom', this.bottom, 'width', this.width, 'minWidth', this.minWidth, 'height', this.height, 'zIndex', this.zIndex, 'visibility', this.visibility, 'position', this.position])[$toString]());
    }
  };
  (src__laminate__overlay__overlay_state.MutableOverlayState.new = function(opts) {
    let captureEvents = opts && 'captureEvents' in opts ? opts.captureEvents : false;
    let left = opts && 'left' in opts ? opts.left : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let right = opts && 'right' in opts ? opts.right : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let zIndex = opts && 'zIndex' in opts ? opts.zIndex : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : laminate__enums__visibility.Visibility.None;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_asyncScheduler] = new src__utils__async__async_update_scheduler.AsyncUpdateScheduler.new();
    this[_captureEvents] = null;
    this[_left] = null;
    this[_top] = null;
    this[_right] = null;
    this[_bottom] = null;
    this[_width] = null;
    this[_minWidth] = null;
    this[_height] = null;
    this[_zIndex] = null;
    this[_visibility] = null;
    this[_position] = null;
    this[_captureEvents] = captureEvents;
    this[_left] = left;
    this[_top] = top;
    this[_right] = right;
    this[_bottom] = bottom;
    this[_width] = width;
    this[_minWidth] = minWidth;
    this[_height] = height;
    this[_zIndex] = zIndex;
    this[_visibility] = visibility;
  }).prototype = src__laminate__overlay__overlay_state.MutableOverlayState.prototype;
  dart.addTypeTests(src__laminate__overlay__overlay_state.MutableOverlayState);
  src__laminate__overlay__overlay_state.MutableOverlayState[dart.implements] = () => [src__laminate__overlay__overlay_state.OverlayState];
  dart.setGetterSignature(src__laminate__overlay__overlay_state.MutableOverlayState, () => ({
    __proto__: dart.getGetters(src__laminate__overlay__overlay_state.MutableOverlayState.__proto__),
    onUpdate: dart.fnType(async.Stream, []),
    captureEvents: dart.fnType(core$.bool, []),
    left: dart.fnType(core$.num, []),
    top: dart.fnType(core$.num, []),
    right: dart.fnType(core$.num, []),
    bottom: dart.fnType(core$.num, []),
    width: dart.fnType(core$.num, []),
    minWidth: dart.fnType(core$.num, []),
    height: dart.fnType(core$.num, []),
    zIndex: dart.fnType(core$.int, []),
    visibility: dart.fnType(laminate__enums__visibility.Visibility, []),
    position: dart.fnType(laminate__enums__position.Position, [])
  }));
  dart.setSetterSignature(src__laminate__overlay__overlay_state.MutableOverlayState, () => ({
    __proto__: dart.getSetters(src__laminate__overlay__overlay_state.MutableOverlayState.__proto__),
    captureEvents: dart.fnType(dart.void, [core$.bool]),
    left: dart.fnType(dart.void, [core$.num]),
    top: dart.fnType(dart.void, [core$.num]),
    right: dart.fnType(dart.void, [core$.num]),
    bottom: dart.fnType(dart.void, [core$.num]),
    width: dart.fnType(dart.void, [core$.num]),
    minWidth: dart.fnType(dart.void, [core$.num]),
    height: dart.fnType(dart.void, [core$.num]),
    zIndex: dart.fnType(dart.void, [core$.int]),
    visibility: dart.fnType(dart.void, [laminate__enums__visibility.Visibility]),
    position: dart.fnType(dart.void, [laminate__enums__position.Position])
  }));
  dart.setFieldSignature(src__laminate__overlay__overlay_state.MutableOverlayState, () => ({
    __proto__: dart.getFields(src__laminate__overlay__overlay_state.MutableOverlayState.__proto__),
    [_asyncScheduler]: dart.finalFieldType(src__utils__async__async_update_scheduler.AsyncUpdateScheduler),
    [_captureEvents]: dart.fieldType(core$.bool),
    [_left]: dart.fieldType(core$.num),
    [_top]: dart.fieldType(core$.num),
    [_right]: dart.fieldType(core$.num),
    [_bottom]: dart.fieldType(core$.num),
    [_width]: dart.fieldType(core$.num),
    [_minWidth]: dart.fieldType(core$.num),
    [_height]: dart.fieldType(core$.num),
    [_zIndex]: dart.fieldType(core$.int),
    [_visibility]: dart.fieldType(laminate__enums__visibility.Visibility),
    [_position]: dart.fieldType(laminate__enums__position.Position)
  }));
  dart.defineExtensionMethods(src__laminate__overlay__overlay_state.MutableOverlayState, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__laminate__overlay__overlay_state.MutableOverlayState, ['hashCode']);
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/overlay_state.ddc", {
    "package:angular_components/src/laminate/overlay/overlay_state.dart": src__laminate__overlay__overlay_state
  }, '{"version":3,"sourceRoot":"","sources":["overlay_state.dart"],"names":[],"mappings":"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","file":"overlay_state.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__overlay_state: src__laminate__overlay__overlay_state
  };
});

//# sourceMappingURL=overlay_state.ddc.js.map
