define(['dart_sdk', 'packages/angular_components/src/laminate/enums/base'], function(dart_sdk, base) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__enums__base = base.src__laminate__enums__base;
  const _root = Object.create(null);
  const laminate__enums__alignment = Object.create(_root);
  const $left = dartx.left;
  const $width = dartx.width;
  const $top = dartx.top;
  const $height = dartx.height;
  const $toLowerCase = dartx.toLowerCase;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  let StringAnddynamicTovoid = () => (StringAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [core.String, dart.dynamic])))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let IdentityMapOfString$Alignment = () => (IdentityMapOfString$Alignment = dart.constFn(_js_helper.IdentityMap$(core.String, laminate__enums__alignment.Alignment)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const _displayName = Symbol('_displayName');
  const _cssPropertyValue = Symbol('_cssPropertyValue');
  laminate__enums__alignment.Alignment = class Alignment extends core.Object {
    static parse(displayName) {
      if (displayName == null || displayName === 'start') {
        return laminate__enums__alignment.Alignment.Start;
      } else if (displayName === 'center') {
        return laminate__enums__alignment.Alignment.Center;
      } else if (displayName === 'end') {
        return laminate__enums__alignment.Alignment.End;
      } else if (displayName === 'before') {
        return laminate__enums__alignment.Alignment.Before;
      } else if (displayName === 'after') {
        return laminate__enums__alignment.Alignment.After;
      } else {
        dart.throw(new core.ArgumentError.value(displayName, 'displayName'));
      }
    }
    apply(setProperty) {
      dart.dcall(setProperty, 'align-items', this[_cssPropertyValue]);
    }
    get requiresContentSizeToPosition() {
      return !this._equals(laminate__enums__alignment.Alignment.Start);
    }
    calcLeft(sourceRect, contentRect) {
      if (contentRect === void 0) contentRect = null;
      if (dart.test(this.requiresContentSizeToPosition) && contentRect == null) {
        dart.throw(new core.ArgumentError.notNull('contentRect'));
      }
      let left = sourceRect[$left];
      if (this._equals(laminate__enums__alignment.Alignment.Center)) {
        left = dart.notNull(left) + (dart.notNull(sourceRect[$width]) / 2 - dart.notNull(contentRect[$width]) / 2);
      } else if (this._equals(laminate__enums__alignment.Alignment.End)) {
        left = dart.notNull(left) + (dart.notNull(sourceRect[$width]) - dart.notNull(contentRect[$width]));
      }
      return left;
    }
    calcTop(sourceRect, contentRect) {
      if (contentRect === void 0) contentRect = null;
      if (dart.test(this.requiresContentSizeToPosition) && contentRect == null) {
        dart.throw(new core.ArgumentError.notNull('contentRect'));
      }
      let top = sourceRect[$top];
      if (this._equals(laminate__enums__alignment.Alignment.Center)) {
        top = dart.notNull(top) + (dart.notNull(sourceRect[$height]) / 2 - dart.notNull(contentRect[$height]) / 2);
      } else if (this._equals(laminate__enums__alignment.Alignment.End)) {
        top = dart.notNull(top) + (dart.notNull(sourceRect[$height]) - dart.notNull(contentRect[$height]));
      }
      return top;
    }
    get cssClassX() {
      return dart.str`align-x-${this[_displayName][$toLowerCase]()}`;
    }
    get cssClassY() {
      return dart.str`align-y-${this[_displayName][$toLowerCase]()}`;
    }
    toString() {
      return dart.str`Alignment {${this[_displayName]}}`;
    }
  };
  (laminate__enums__alignment.Alignment.new = function(displayName, cssPropertyValue) {
    this[_displayName] = displayName;
    this[_cssPropertyValue] = cssPropertyValue;
  }).prototype = laminate__enums__alignment.Alignment.prototype;
  dart.addTypeTests(laminate__enums__alignment.Alignment);
  laminate__enums__alignment.Alignment[dart.implements] = () => [src__laminate__enums__base.ElementStyleEnum];
  dart.setMethodSignature(laminate__enums__alignment.Alignment, () => ({
    __proto__: dart.getMethods(laminate__enums__alignment.Alignment.__proto__),
    apply: dart.fnType(dart.void, [StringAnddynamicTovoid()]),
    calcLeft: dart.fnType(core.num, [RectangleOfnum()], [RectangleOfnum()]),
    calcTop: dart.fnType(core.num, [RectangleOfnum()], [RectangleOfnum()])
  }));
  dart.setGetterSignature(laminate__enums__alignment.Alignment, () => ({
    __proto__: dart.getGetters(laminate__enums__alignment.Alignment.__proto__),
    requiresContentSizeToPosition: dart.fnType(core.bool, []),
    cssClassX: dart.fnType(core.String, []),
    cssClassY: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(laminate__enums__alignment.Alignment, () => ({
    __proto__: dart.getFields(laminate__enums__alignment.Alignment.__proto__),
    [_displayName]: dart.finalFieldType(core.String),
    [_cssPropertyValue]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(laminate__enums__alignment.Alignment, ['toString']);
  dart.defineLazy(laminate__enums__alignment.Alignment, {
    /*laminate__enums__alignment.Alignment.Before*/get Before() {
      return dart.const(new laminate__enums__alignment.BeforeCustomAlignment.new());
    },
    /*laminate__enums__alignment.Alignment.Start*/get Start() {
      return dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start'));
    },
    /*laminate__enums__alignment.Alignment.Center*/get Center() {
      return dart.const(new laminate__enums__alignment.Alignment.new('Center', 'center'));
    },
    /*laminate__enums__alignment.Alignment.End*/get End() {
      return dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end'));
    },
    /*laminate__enums__alignment.Alignment.After*/get After() {
      return dart.const(new laminate__enums__alignment.AfterCustomAlignment.new());
    }
  });
  laminate__enums__alignment._CustomAlignment = class _CustomAlignment extends laminate__enums__alignment.Alignment {
    apply(setProperty) {
      dart.throw(new core.UnsupportedError.new('Cannot be reflected as a CSS style.'));
    }
    get cssClassX() {
      return this[cssClassX];
    }
    set cssClassX(value) {
      super.cssClassX = value;
    }
    get cssClassY() {
      return this[cssClassY];
    }
    set cssClassY(value) {
      super.cssClassY = value;
    }
  };
  (laminate__enums__alignment._CustomAlignment.new = function(displayName) {
    this[cssClassX] = '';
    this[cssClassY] = '';
    laminate__enums__alignment._CustomAlignment.__proto__.new.call(this, displayName, null);
  }).prototype = laminate__enums__alignment._CustomAlignment.prototype;
  dart.addTypeTests(laminate__enums__alignment._CustomAlignment);
  const cssClassX = Symbol("_CustomAlignment.cssClassX");
  const cssClassY = Symbol("_CustomAlignment.cssClassY");
  dart.setFieldSignature(laminate__enums__alignment._CustomAlignment, () => ({
    __proto__: dart.getFields(laminate__enums__alignment._CustomAlignment.__proto__),
    cssClassX: dart.finalFieldType(core.String),
    cssClassY: dart.finalFieldType(core.String)
  }));
  laminate__enums__alignment.BeforeCustomAlignment = class BeforeCustomAlignment extends laminate__enums__alignment._CustomAlignment {
    get requiresContentSizeToPosition() {
      return this[requiresContentSizeToPosition];
    }
    set requiresContentSizeToPosition(value) {
      super.requiresContentSizeToPosition = value;
    }
    calcLeft(sourceRect, contentRect) {
      if (contentRect === void 0) contentRect = null;
      return dart.notNull(sourceRect[$left]) + -dart.notNull(contentRect[$width]);
    }
    calcTop(sourceRect, contentRect) {
      if (contentRect === void 0) contentRect = null;
      return dart.notNull(sourceRect[$top]) - dart.notNull(contentRect[$height]);
    }
  };
  (laminate__enums__alignment.BeforeCustomAlignment.new = function() {
    this[requiresContentSizeToPosition] = true;
    laminate__enums__alignment.BeforeCustomAlignment.__proto__.new.call(this, 'Before');
  }).prototype = laminate__enums__alignment.BeforeCustomAlignment.prototype;
  dart.addTypeTests(laminate__enums__alignment.BeforeCustomAlignment);
  const requiresContentSizeToPosition = Symbol("BeforeCustomAlignment.requiresContentSizeToPosition");
  dart.setFieldSignature(laminate__enums__alignment.BeforeCustomAlignment, () => ({
    __proto__: dart.getFields(laminate__enums__alignment.BeforeCustomAlignment.__proto__),
    requiresContentSizeToPosition: dart.finalFieldType(core.bool)
  }));
  laminate__enums__alignment.AfterCustomAlignment = class AfterCustomAlignment extends laminate__enums__alignment._CustomAlignment {
    get requiresContentSizeToPosition() {
      return this[requiresContentSizeToPosition$];
    }
    set requiresContentSizeToPosition(value) {
      super.requiresContentSizeToPosition = value;
    }
    calcLeft(sourceRect, contentRect) {
      if (contentRect === void 0) contentRect = null;
      return dart.notNull(sourceRect[$left]) + dart.notNull(sourceRect[$width]);
    }
    calcTop(sourceRect, contentRect) {
      if (contentRect === void 0) contentRect = null;
      return dart.notNull(sourceRect[$top]) + dart.notNull(sourceRect[$height]);
    }
  };
  (laminate__enums__alignment.AfterCustomAlignment.new = function() {
    this[requiresContentSizeToPosition$] = false;
    laminate__enums__alignment.AfterCustomAlignment.__proto__.new.call(this, 'After');
  }).prototype = laminate__enums__alignment.AfterCustomAlignment.prototype;
  dart.addTypeTests(laminate__enums__alignment.AfterCustomAlignment);
  const requiresContentSizeToPosition$ = Symbol("AfterCustomAlignment.requiresContentSizeToPosition");
  dart.setFieldSignature(laminate__enums__alignment.AfterCustomAlignment, () => ({
    __proto__: dart.getFields(laminate__enums__alignment.AfterCustomAlignment.__proto__),
    requiresContentSizeToPosition: dart.finalFieldType(core.bool)
  }));
  const _flipAlignment = Symbol('_flipAlignment');
  const _flipAnimation = Symbol('_flipAnimation');
  laminate__enums__alignment.RelativePosition = class RelativePosition extends core.Object {
    get originX() {
      return this[originX$];
    }
    set originX(value) {
      super.originX = value;
    }
    get originY() {
      return this[originY$];
    }
    set originY(value) {
      super.originY = value;
    }
    get animationOrigin() {
      return this[animationOrigin$];
    }
    set animationOrigin(value) {
      super.animationOrigin = value;
    }
    flipRelativePosition() {
      return new laminate__enums__alignment.RelativePosition.new({originX: this[_flipAlignment](this.originX), originY: this.originY, animationOrigin: this[_flipAnimation](this.animationOrigin)});
    }
    [_flipAlignment](alignment) {
      if (dart.equals(alignment, laminate__enums__alignment.Alignment.Start)) return laminate__enums__alignment.Alignment.End;
      if (dart.equals(alignment, laminate__enums__alignment.Alignment.End)) return laminate__enums__alignment.Alignment.Start;
      if (dart.equals(alignment, laminate__enums__alignment.Alignment.Before)) return laminate__enums__alignment.Alignment.After;
      if (dart.equals(alignment, laminate__enums__alignment.Alignment.After)) return laminate__enums__alignment.Alignment.Before;
      return alignment;
    }
    [_flipAnimation](animationOrigin) {
      return dart.test(laminate__enums__alignment._AnimationOrigins.flippedAnimationOrigins[$containsKey](animationOrigin)) ? laminate__enums__alignment._AnimationOrigins.flippedAnimationOrigins[$_get](animationOrigin) : animationOrigin;
    }
    toString() {
      return 'RelativePosition ' + dart.notNull(new (IdentityMapOfString$Alignment()).from(['originX', this.originX, 'originY', this.originY])[$toString]());
    }
  };
  (laminate__enums__alignment.RelativePosition.new = function(opts) {
    let originX = opts && 'originX' in opts ? opts.originX : laminate__enums__alignment.Alignment.Start;
    let originY = opts && 'originY' in opts ? opts.originY : laminate__enums__alignment.Alignment.Start;
    let animationOrigin = opts && 'animationOrigin' in opts ? opts.animationOrigin : laminate__enums__alignment._AnimationOrigins.DOWN_RIGHT;
    this[originX$] = originX;
    this[originY$] = originY;
    this[animationOrigin$] = animationOrigin;
  }).prototype = laminate__enums__alignment.RelativePosition.prototype;
  dart.addTypeTests(laminate__enums__alignment.RelativePosition);
  const originX$ = Symbol("RelativePosition.originX");
  const originY$ = Symbol("RelativePosition.originY");
  const animationOrigin$ = Symbol("RelativePosition.animationOrigin");
  dart.setMethodSignature(laminate__enums__alignment.RelativePosition, () => ({
    __proto__: dart.getMethods(laminate__enums__alignment.RelativePosition.__proto__),
    flipRelativePosition: dart.fnType(laminate__enums__alignment.RelativePosition, []),
    [_flipAlignment]: dart.fnType(laminate__enums__alignment.Alignment, [laminate__enums__alignment.Alignment]),
    [_flipAnimation]: dart.fnType(core.String, [core.String])
  }));
  dart.setFieldSignature(laminate__enums__alignment.RelativePosition, () => ({
    __proto__: dart.getFields(laminate__enums__alignment.RelativePosition.__proto__),
    originX: dart.finalFieldType(laminate__enums__alignment.Alignment),
    originY: dart.finalFieldType(laminate__enums__alignment.Alignment),
    animationOrigin: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(laminate__enums__alignment.RelativePosition, ['toString']);
  dart.defineLazy(laminate__enums__alignment.RelativePosition, {
    /*laminate__enums__alignment.RelativePosition.overlapAlignments*/get overlapAlignments() {
      return dart.constList([dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Start, originY: laminate__enums__alignment.Alignment.Start})), dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.End, originY: laminate__enums__alignment.Alignment.Start, animationOrigin: laminate__enums__alignment._AnimationOrigins.DOWN_LEFT})), dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Start, originY: laminate__enums__alignment.Alignment.End, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP_RIGHT})), dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.End, originY: laminate__enums__alignment.Alignment.End, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP_LEFT})), dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Center, originY: laminate__enums__alignment.Alignment.Start, animationOrigin: laminate__enums__alignment._AnimationOrigins.DOWN})), dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Center, originY: laminate__enums__alignment.Alignment.End, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP}))], laminate__enums__alignment.RelativePosition);
    },
    /*laminate__enums__alignment.RelativePosition.InlinePositions*/get InlinePositions() {
      return dart.constList([laminate__enums__alignment.RelativePosition.InlineBottom, laminate__enums__alignment.RelativePosition.InlineBottomLeft, laminate__enums__alignment.RelativePosition.InlineBottomRight, laminate__enums__alignment.RelativePosition.InlineTop, laminate__enums__alignment.RelativePosition.InlineTopLeft, laminate__enums__alignment.RelativePosition.InlineTopRight], laminate__enums__alignment.RelativePosition);
    },
    /*laminate__enums__alignment.RelativePosition.InlineBottom*/get InlineBottom() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: laminate__enums__alignment._AnimationOrigins.DOWN}));
    },
    /*laminate__enums__alignment.RelativePosition.InlineTop*/get InlineTop() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originY: laminate__enums__alignment.Alignment.End, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP}));
    },
    /*laminate__enums__alignment.RelativePosition.InlineBottomLeft*/get InlineBottomLeft() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.End, animationOrigin: laminate__enums__alignment._AnimationOrigins.DOWN_LEFT}));
    },
    /*laminate__enums__alignment.RelativePosition.InlineTopLeft*/get InlineTopLeft() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.End, originY: laminate__enums__alignment.Alignment.End, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP_LEFT}));
    },
    /*laminate__enums__alignment.RelativePosition.InlineBottomRight*/get InlineBottomRight() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Start, animationOrigin: laminate__enums__alignment._AnimationOrigins.DOWN_RIGHT}));
    },
    /*laminate__enums__alignment.RelativePosition.InlineTopRight*/get InlineTopRight() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Start, originY: laminate__enums__alignment.Alignment.End, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP_RIGHT}));
    },
    /*laminate__enums__alignment.RelativePosition.OffsetPositions*/get OffsetPositions() {
      return dart.constList([laminate__enums__alignment.RelativePosition.OffsetBottomRight, laminate__enums__alignment.RelativePosition.OffsetBottomLeft, laminate__enums__alignment.RelativePosition.OffsetTopRight, laminate__enums__alignment.RelativePosition.OffsetTopLeft], laminate__enums__alignment.RelativePosition);
    },
    /*laminate__enums__alignment.RelativePosition.OffsetBottomRight*/get OffsetBottomRight() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.After, originY: laminate__enums__alignment.Alignment.After, animationOrigin: laminate__enums__alignment._AnimationOrigins.DOWN_RIGHT}));
    },
    /*laminate__enums__alignment.RelativePosition.OffsetBottomLeft*/get OffsetBottomLeft() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Before, originY: laminate__enums__alignment.Alignment.After, animationOrigin: laminate__enums__alignment._AnimationOrigins.DOWN_LEFT}));
    },
    /*laminate__enums__alignment.RelativePosition.OffsetTopRight*/get OffsetTopRight() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.After, originY: laminate__enums__alignment.Alignment.Before, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP_RIGHT}));
    },
    /*laminate__enums__alignment.RelativePosition.OffsetTopLeft*/get OffsetTopLeft() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Before, originY: laminate__enums__alignment.Alignment.Before, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP_LEFT}));
    },
    /*laminate__enums__alignment.RelativePosition.ComprehensiveOffsetPositions*/get ComprehensiveOffsetPositions() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentCardinal, laminate__enums__alignment.RelativePosition.AdjacentTopEdge, laminate__enums__alignment.RelativePosition.AdjacentRightEdge, laminate__enums__alignment.RelativePosition.AdjacentBottomEdge, laminate__enums__alignment.RelativePosition.AdjacentLeftEdge, laminate__enums__alignment.RelativePosition.OffsetPositions], ListOfRelativePosition());
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentCardinal*/get AdjacentCardinal() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentTop, laminate__enums__alignment.RelativePosition.AdjacentRight, laminate__enums__alignment.RelativePosition.AdjacentBottom, laminate__enums__alignment.RelativePosition.AdjacentLeft], laminate__enums__alignment.RelativePosition);
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentTopEdge*/get AdjacentTopEdge() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentTop, laminate__enums__alignment.RelativePosition.AdjacentTopLeft, laminate__enums__alignment.RelativePosition.AdjacentTopRight], laminate__enums__alignment.RelativePosition);
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentTopLeft*/get AdjacentTopLeft() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Start, originY: laminate__enums__alignment.Alignment.Before, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP_RIGHT}));
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentTop*/get AdjacentTop() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Center, originY: laminate__enums__alignment.Alignment.Before, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP}));
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentTopRight*/get AdjacentTopRight() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.End, originY: laminate__enums__alignment.Alignment.Before, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP_LEFT}));
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentRightEdge*/get AdjacentRightEdge() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentRight, laminate__enums__alignment.RelativePosition.AdjacentRightTop, laminate__enums__alignment.RelativePosition.AdjacentRightBottom], laminate__enums__alignment.RelativePosition);
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentRightTop*/get AdjacentRightTop() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.After, originY: laminate__enums__alignment.Alignment.Start, animationOrigin: laminate__enums__alignment._AnimationOrigins.DOWN_RIGHT}));
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentRight*/get AdjacentRight() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.After, originY: laminate__enums__alignment.Alignment.Center, animationOrigin: laminate__enums__alignment._AnimationOrigins.RIGHT}));
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentRightBottom*/get AdjacentRightBottom() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.After, originY: laminate__enums__alignment.Alignment.End, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP_RIGHT}));
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentBottomEdge*/get AdjacentBottomEdge() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentBottom, laminate__enums__alignment.RelativePosition.AdjacentBottomLeft, laminate__enums__alignment.RelativePosition.AdjacentBottomRight], laminate__enums__alignment.RelativePosition);
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentBottomRight*/get AdjacentBottomRight() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.End, originY: laminate__enums__alignment.Alignment.After, animationOrigin: laminate__enums__alignment._AnimationOrigins.DOWN_LEFT}));
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentBottom*/get AdjacentBottom() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Center, originY: laminate__enums__alignment.Alignment.After, animationOrigin: laminate__enums__alignment._AnimationOrigins.DOWN}));
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentBottomLeft*/get AdjacentBottomLeft() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Start, originY: laminate__enums__alignment.Alignment.After, animationOrigin: laminate__enums__alignment._AnimationOrigins.DOWN_RIGHT}));
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentLeftEdge*/get AdjacentLeftEdge() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentLeft, laminate__enums__alignment.RelativePosition.AdjacentLeftTop, laminate__enums__alignment.RelativePosition.AdjacentLeftBottom], laminate__enums__alignment.RelativePosition);
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentLeftBottom*/get AdjacentLeftBottom() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Before, originY: laminate__enums__alignment.Alignment.End, animationOrigin: laminate__enums__alignment._AnimationOrigins.UP_LEFT}));
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentLeft*/get AdjacentLeft() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Before, originY: laminate__enums__alignment.Alignment.Center, animationOrigin: laminate__enums__alignment._AnimationOrigins.LEFT}));
    },
    /*laminate__enums__alignment.RelativePosition.AdjacentLeftTop*/get AdjacentLeftTop() {
      return dart.const(new laminate__enums__alignment.RelativePosition.new({originX: laminate__enums__alignment.Alignment.Before, originY: laminate__enums__alignment.Alignment.Start, animationOrigin: laminate__enums__alignment._AnimationOrigins.DOWN_LEFT}));
    }
  });
  laminate__enums__alignment._AnimationOrigins = class _AnimationOrigins extends core.Object {};
  (laminate__enums__alignment._AnimationOrigins.new = function() {
  }).prototype = laminate__enums__alignment._AnimationOrigins.prototype;
  dart.addTypeTests(laminate__enums__alignment._AnimationOrigins);
  dart.defineLazy(laminate__enums__alignment._AnimationOrigins, {
    /*laminate__enums__alignment._AnimationOrigins.UP_LEFT*/get UP_LEFT() {
      return 'bottom right';
    },
    /*laminate__enums__alignment._AnimationOrigins.UP*/get UP() {
      return 'bottom center';
    },
    /*laminate__enums__alignment._AnimationOrigins.UP_RIGHT*/get UP_RIGHT() {
      return 'bottom left';
    },
    /*laminate__enums__alignment._AnimationOrigins.LEFT*/get LEFT() {
      return 'center right';
    },
    /*laminate__enums__alignment._AnimationOrigins.OUTWARD*/get OUTWARD() {
      return 'center left';
    },
    /*laminate__enums__alignment._AnimationOrigins.RIGHT*/get RIGHT() {
      return 'center left';
    },
    /*laminate__enums__alignment._AnimationOrigins.DOWN_LEFT*/get DOWN_LEFT() {
      return 'top right';
    },
    /*laminate__enums__alignment._AnimationOrigins.DOWN*/get DOWN() {
      return 'top center';
    },
    /*laminate__enums__alignment._AnimationOrigins.DOWN_RIGHT*/get DOWN_RIGHT() {
      return 'top left';
    },
    /*laminate__enums__alignment._AnimationOrigins.flippedAnimationOrigins*/get flippedAnimationOrigins() {
      return new (IdentityMapOfString$String()).from([laminate__enums__alignment._AnimationOrigins.UP_LEFT, laminate__enums__alignment._AnimationOrigins.UP_RIGHT, laminate__enums__alignment._AnimationOrigins.UP_RIGHT, laminate__enums__alignment._AnimationOrigins.UP_LEFT, laminate__enums__alignment._AnimationOrigins.LEFT, laminate__enums__alignment._AnimationOrigins.RIGHT, laminate__enums__alignment._AnimationOrigins.RIGHT, laminate__enums__alignment._AnimationOrigins.LEFT, laminate__enums__alignment._AnimationOrigins.DOWN_LEFT, laminate__enums__alignment._AnimationOrigins.DOWN_RIGHT, laminate__enums__alignment._AnimationOrigins.DOWN_RIGHT, laminate__enums__alignment._AnimationOrigins.DOWN_LEFT]);
    },
    set flippedAnimationOrigins(_) {}
  });
  dart.trackLibraries("packages/angular_components/laminate/enums/alignment.ddc", {
    "package:angular_components/laminate/enums/alignment.dart": laminate__enums__alignment
  }, '{"version":3,"sourceRoot":"","sources":["alignment.dart"],"names":[],"mappings":"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","file":"alignment.ddc.js"}');
  // Exports:
  return {
    laminate__enums__alignment: laminate__enums__alignment
  };
});

//# sourceMappingURL=alignment.ddc.js.map
