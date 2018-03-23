define(['dart_sdk', 'packages/quiver/core'], function(dart_sdk, core) {
  'use strict';
  const core$ = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$0 = core.core;
  const _root = Object.create(null);
  const utils__color__color = Object.create(_root);
  const $toInt = dartx.toInt;
  const $_get = dartx._get;
  const $split = dartx.split;
  const $length = dartx.length;
  const $truncate = dartx.truncate;
  const $substring = dartx.substring;
  const $last = dartx.last;
  const $modulo = dartx['%'];
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $padLeft = dartx.padLeft;
  const $toRadixString = dartx.toRadixString;
  const $abs = dartx.abs;
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core$.int, [core$.String])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core$.int, [core$.int])))();
  dart.defineLazy(utils__color__color, {
    /*utils__color__color.minimumTextContrast*/get minimumTextContrast() {
      return 4.5;
    },
    /*utils__color__color.minimumLargeTextContrast*/get minimumLargeTextContrast() {
      return 3;
    }
  });
  const _relativeLuminance = Symbol('_relativeLuminance');
  const _alphaString = Symbol('_alphaString');
  utils__color__color.Color = class Color extends core$.Object {
    static fromRgbString(rgb) {
      return utils__color__color.Color.parse(rgb);
    }
    static fromHex(hex) {
      return utils__color__color.Color.parse(hex);
    }
    get red() {
      return this[red$];
    }
    set red(value) {
      super.red = value;
    }
    get green() {
      return this[green$];
    }
    set green(value) {
      super.green = value;
    }
    get blue() {
      return this[blue$];
    }
    set blue(value) {
      super.blue = value;
    }
    get alpha() {
      return this[alpha$];
    }
    set alpha(value) {
      super.alpha = value;
    }
    static _luminanceChannel(v) {
      return dart.notNull(v) <= 0.03928 ? dart.notNull(v) / 12.92 : math.pow((dart.notNull(v) + 0.055) / 1.055, 2.4);
    }
    get [_relativeLuminance]() {
      return dart.notNull(utils__color__color.Color._luminanceChannel(dart.notNull(this.red) / 255)) * 0.2126 + dart.notNull(utils__color__color.Color._luminanceChannel(dart.notNull(this.green) / 255)) * 0.7152 + dart.notNull(utils__color__color.Color._luminanceChannel(dart.notNull(this.blue) / 255)) * 0.0722;
    }
    contrastRatio(background) {
      if (background.alpha !== 1) {
        dart.throw(new core$.ArgumentError.value(background, 'background', 'Cannot calculate contrast against non-opaque backgrounds.'));
      }
      let a = this.alpha === 1 ? this : this.withBackground(background);
      let la = a[_relativeLuminance];
      let lb = background[_relativeLuminance];
      return (math.max(core$.num, la, lb) + 0.05) / (math.min(core$.num, la, lb) + 0.05);
    }
    static _lerpNum(a, b, t) {
      if (dart.notNull(t) < 0.0 || dart.notNull(t) > 1.0) dart.throw(new core$.ArgumentError.value(t, 't'));
      return dart.notNull(a) * (1.0 - dart.notNull(t)) + dart.notNull(b) * dart.notNull(t);
    }
    static lerp(a, b, t) {
      if (a == null && b == null) return null;
      if (a == null) return b.withAlpha(utils__color__color.Color._lerpNum(0, b.alpha, t));
      if (b == null) return a.withAlpha(utils__color__color.Color._lerpNum(a.alpha, 0, t));
      return new utils__color__color.Color.rgba(utils__color__color.Color._lerpNum(a.red, b.red, t)[$toInt](), utils__color__color.Color._lerpNum(a.green, b.green, t)[$toInt](), utils__color__color.Color._lerpNum(a.blue, b.blue, t)[$toInt](), utils__color__color.Color._lerpNum(a.alpha, b.alpha, t));
    }
    static _checkValues(r, g, b, a, s) {
      if (s === void 0) s = null;
      if (dart.notNull(r) < 0 || dart.notNull(r) > 255 || dart.notNull(g) < 0 || dart.notNull(g) > 255 || dart.notNull(b) < 0 || dart.notNull(b) > 255 || dart.notNull(a) < 0 || dart.notNull(a) > 1) {
        dart.throw(new core$.FormatException.new('Invalid color format; value out of bounds.', s));
      }
    }
    static parse(s) {
      switch (s[$_get](0)) {
        case 'r':
        {
          let match = utils__color__color.Color._rgbRE.firstMatch(s);
          if (match == null) break;
          let values = match._get(1)[$split](utils__color__color.Color._separatorRE);
          if (values[$length] !== 3 && values[$length] !== 4) break;
          function color(s) {
            let last = s.length - 1;
            return s[$_get](last) === '%' ? (255 * dart.notNull(core$.int.parse(s[$substring](0, last))) / 100)[$truncate]() : core$.int.parse(s);
          }
          dart.fn(color, StringToint());
          let r = color(values[$_get](0));
          let g = color(values[$_get](1));
          let b = color(values[$_get](2));
          let a = values[$length] === 4 ? core$.num.parse(values[$last]) : 1;
          utils__color__color.Color._checkValues(r, g, b, a, s);
          return new utils__color__color.Color.rgba(r, g, b, a);
        }
        case '#':
        {
          s = s[$substring](1);
          let width = s.length === 6 || s.length === 8 ? 2 : s.length === 3 || s.length === 4 ? 1 : 0;
          if (width === 0) break;
          function hex(position) {
            let start = dart.notNull(position) * width;
            let value = core$.int.parse(s[$substring](start, start + width), {radix: 16});
            return width === 1 ? dart.notNull(value) * 17 : value;
          }
          dart.fn(hex, intToint());
          let r = hex(0);
          let g = hex(1);
          let b = hex(2);
          let a = s.length[$modulo](4) === 0 ? dart.notNull(hex(3)) / 255 : 1;
          utils__color__color.Color._checkValues(r, g, b, a, s);
          return new utils__color__color.Color.rgba(r, g, b, a);
        }
      }
      dart.throw(new core$.FormatException.new('Invalid color format', s));
    }
    withAlpha(a) {
      if (!(dart.notNull(a) >= 0 && dart.notNull(a) <= 1)) dart.assertFailed();
      return new utils__color__color.Color.rgba(this.red, this.green, this.blue, a);
    }
    withBackground(background) {
      return this.alpha === 1 ? this : new utils__color__color.Color.rgba(utils__color__color.Color._lerpNum(background.red, this.red, this.alpha)[$toInt](), utils__color__color.Color._lerpNum(background.green, this.green, this.alpha)[$toInt](), utils__color__color.Color._lerpNum(background.blue, this.blue, this.alpha)[$toInt](), utils__color__color.Color._lerpNum(background.alpha, 1, this.alpha));
    }
    get [_alphaString]() {
      return dart.notNull(this.alpha) < utils__color__color.Color._alphaThreshold ? '0' : this.alpha[$toStringAsFixed](2);
    }
    get rgbString() {
      return this.alpha === 1 ? dart.str`rgb(${this.red},${this.green},${this.blue})` : dart.str`rgba(${this.red},${this.green},${this.blue},${this[_alphaString]})`;
    }
    static _toHex(value) {
      return value[$toInt]()[$toRadixString](16)[$padLeft](2, '0');
    }
    get hexString() {
      return dart.str`#${utils__color__color.Color._toHex(this.red)}${utils__color__color.Color._toHex(this.green)}${utils__color__color.Color._toHex(this.blue)}` + (this.alpha === 1 ? '' : dart.str`${utils__color__color.Color._toHex(255 * dart.notNull(this.alpha))}`);
    }
    toString() {
      return this.rgbString;
    }
    _equals(o) {
      if (o == null) return false;
      return this === o || utils__color__color.Color.is(o) && this.red == o.red && this.green == o.green && this.blue == o.blue && (dart.notNull(this.alpha) - dart.notNull(o.alpha))[$abs]() < utils__color__color.Color._alphaThreshold;
    }
    get hashCode() {
      return core$0.hash4(this.red, this.green, this.blue, this.alpha);
    }
  };
  (utils__color__color.Color.fromRgb = function(r, g, b) {
    utils__color__color.Color.rgb.call(this, r, g, b);
  }).prototype = utils__color__color.Color.prototype;
  (utils__color__color.Color.rgb = function(r, g, b) {
    utils__color__color.Color.rgba.call(this, r, g, b, 1);
  }).prototype = utils__color__color.Color.prototype;
  (utils__color__color.Color.rgba = function(red, green, blue, alpha) {
    this[red$] = red;
    this[green$] = green;
    this[blue$] = blue;
    this[alpha$] = alpha;
  }).prototype = utils__color__color.Color.prototype;
  dart.addTypeTests(utils__color__color.Color);
  const red$ = Symbol("Color.red");
  const green$ = Symbol("Color.green");
  const blue$ = Symbol("Color.blue");
  const alpha$ = Symbol("Color.alpha");
  dart.setMethodSignature(utils__color__color.Color, () => ({
    __proto__: dart.getMethods(utils__color__color.Color.__proto__),
    contrastRatio: dart.fnType(core$.num, [utils__color__color.Color]),
    withAlpha: dart.fnType(utils__color__color.Color, [core$.num]),
    withBackground: dart.fnType(utils__color__color.Color, [utils__color__color.Color])
  }));
  dart.setStaticMethodSignature(utils__color__color.Color, () => ({
    _luminanceChannel: dart.fnType(core$.double, [core$.double]),
    _lerpNum: dart.fnType(core$.num, [core$.num, core$.num, core$.num]),
    lerp: dart.fnType(utils__color__color.Color, [utils__color__color.Color, utils__color__color.Color, core$.num]),
    _checkValues: dart.fnType(dart.void, [core$.int, core$.int, core$.int, core$.num], [core$.String]),
    parse: dart.fnType(utils__color__color.Color, [core$.String]),
    _toHex: dart.fnType(core$.String, [core$.num])
  }));
  dart.setGetterSignature(utils__color__color.Color, () => ({
    __proto__: dart.getGetters(utils__color__color.Color.__proto__),
    [_relativeLuminance]: dart.fnType(core$.num, []),
    [_alphaString]: dart.fnType(core$.String, []),
    rgbString: dart.fnType(core$.String, []),
    hexString: dart.fnType(core$.String, [])
  }));
  dart.setFieldSignature(utils__color__color.Color, () => ({
    __proto__: dart.getFields(utils__color__color.Color.__proto__),
    red: dart.finalFieldType(core$.int),
    green: dart.finalFieldType(core$.int),
    blue: dart.finalFieldType(core$.int),
    alpha: dart.finalFieldType(core$.num)
  }));
  dart.defineExtensionMethods(utils__color__color.Color, ['toString', '_equals']);
  dart.defineExtensionAccessors(utils__color__color.Color, ['hashCode']);
  dart.defineLazy(utils__color__color.Color, {
    /*utils__color__color.Color._alphaThreshold*/get _alphaThreshold() {
      return 0.01;
    },
    /*utils__color__color.Color._rgbRE*/get _rgbRE() {
      return core$.RegExp.new('^rgba?\\((.*)\\)$');
    },
    /*utils__color__color.Color._separatorRE*/get _separatorRE() {
      return core$.RegExp.new(' *, *');
    }
  });
  dart.trackLibraries("packages/angular_components/utils/color/color.ddc", {
    "package:angular_components/utils/color/color.dart": utils__color__color
  }, '{"version":3,"sourceRoot":"","sources":["color.dart"],"names":[],"mappings":"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","file":"color.ddc.js"}');
  // Exports:
  return {
    utils__color__color: utils__color__color
  };
});

//# sourceMappingURL=color.ddc.js.map
