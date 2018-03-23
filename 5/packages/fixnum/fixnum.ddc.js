define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const fixnum = Object.create(_root);
  const $codeUnitAt = dartx.codeUnitAt;
  const $rightShift = dartx['>>'];
  const $modulo = dartx['%'];
  const $truncate = dartx.truncate;
  const $leftShift = dartx['<<'];
  const $compareTo = dartx.compareTo;
  const $bitLength = dartx.bitLength;
  const $toSigned = dartx.toSigned;
  const $toUnsigned = dartx.toUnsigned;
  const $_set = dartx._set;
  const $toDouble = dartx.toDouble;
  const $toString = dartx.toString;
  const $toRadixString = dartx.toRadixString;
  const $_get = dartx._get;
  const $isNegative = dartx.isNegative;
  const $substring = dartx.substring;
  const $floorToDouble = dartx.floorToDouble;
  const $toInt = dartx.toInt;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  fixnum.IntX = class IntX extends core.Object {};
  (fixnum.IntX.new = function() {
  }).prototype = fixnum.IntX.prototype;
  dart.addTypeTests(fixnum.IntX);
  fixnum.IntX[dart.implements] = () => [core.Comparable];
  const _i = Symbol('_i');
  const _toInt = Symbol('_toInt');
  let const$;
  fixnum.Int32 = class Int32 extends core.Object {
    static _decodeDigit(c) {
      if (dart.notNull(c) >= 48 && dart.notNull(c) <= 57) {
        return dart.notNull(c) - 48;
      } else if (dart.notNull(c) >= 97 && dart.notNull(c) <= 122) {
        return dart.notNull(c) - 97 + 10;
      } else if (dart.notNull(c) >= 65 && dart.notNull(c) <= 90) {
        return dart.notNull(c) - 65 + 10;
      } else {
        return -1;
      }
    }
    static _validateRadix(radix) {
      if (2 <= dart.notNull(radix) && dart.notNull(radix) <= 36) return radix;
      dart.throw(new core.RangeError.range(radix, 2, 36, 'radix'));
    }
    static parseRadix(s, radix) {
      fixnum.Int32._validateRadix(radix);
      let x = fixnum.Int32.ZERO;
      for (let i = 0; i < s.length; i++) {
        let c = s[$codeUnitAt](i);
        let digit = fixnum.Int32._decodeDigit(c);
        if (dart.notNull(digit) < 0 || dart.notNull(digit) >= dart.notNull(radix)) {
          dart.throw(new core.FormatException.new(dart.str`Non-radix code unit: ${c}`));
        }
        x = fixnum.Int32._check(x['*'](radix)['+'](digit));
      }
      return x;
    }
    static parseInt(s) {
      return new fixnum.Int32.new(core.int.parse(s));
    }
    static parseHex(s) {
      return fixnum.Int32.parseRadix(s, 16);
    }
    static _bitCount(i) {
      i = dart.notNull(i) - (i[$rightShift](1) & 1431655765);
      i = (dart.notNull(i) & 858993459) + (i[$rightShift](2) & 858993459);
      i = dart.notNull(i) + i[$rightShift](4) & 252645135;
      i = dart.notNull(i) + i[$rightShift](8);
      i = dart.notNull(i) + i[$rightShift](16);
      return dart.notNull(i) & 63;
    }
    static _numberOfLeadingZeros(i) {
      i = (dart.notNull(i) | i[$rightShift](1)) >>> 0;
      i = (dart.notNull(i) | i[$rightShift](2)) >>> 0;
      i = (dart.notNull(i) | i[$rightShift](4)) >>> 0;
      i = (dart.notNull(i) | i[$rightShift](8)) >>> 0;
      i = (dart.notNull(i) | i[$rightShift](16)) >>> 0;
      return fixnum.Int32._bitCount(~dart.notNull(i) >>> 0);
    }
    static _numberOfTrailingZeros(i) {
      return fixnum.Int32._bitCount(((dart.notNull(i) & -dart.notNull(i)) >>> 0) - 1);
    }
    [_toInt](val) {
      if (fixnum.Int32.is(val)) {
        return val[_i];
      } else if (core.int.is(val)) {
        return val;
      }
      dart.throw(new core.ArgumentError.new(val));
    }
    ['+'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['+'](other);
      }
      return new fixnum.Int32.new(dart.notNull(this[_i]) + dart.notNull(this[_toInt](other)));
    }
    ['-'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['-'](other);
      }
      return new fixnum.Int32.new(dart.notNull(this[_i]) - dart.notNull(this[_toInt](other)));
    }
    _negate() {
      return new fixnum.Int32.new(-dart.notNull(this[_i]));
    }
    ['*'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['*'](other);
      }
      return this.toInt64()['*'](other).toInt32();
    }
    ['%'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['%'](other).toInt32();
      }
      return new fixnum.Int32.new(this[_i][$modulo](this[_toInt](other)));
    }
    ['~/'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['~/'](other).toInt32();
      }
      return new fixnum.Int32.new((dart.notNull(this[_i]) / dart.notNull(this[_toInt](other)))[$truncate]());
    }
    remainder(other) {
      if (fixnum.Int64.is(other)) {
        let t = this.toInt64();
        return t['-'](t['~/'](other)['*'](other)).toInt32();
      }
      return fixnum.Int32._check(this['-'](this['~/'](other)['*'](other)));
    }
    ['&'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['&'](other).toInt32();
      }
      return new fixnum.Int32.new((dart.notNull(this[_i]) & dart.notNull(this[_toInt](other))) >>> 0);
    }
    ['|'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['|'](other).toInt32();
      }
      return new fixnum.Int32.new((dart.notNull(this[_i]) | dart.notNull(this[_toInt](other))) >>> 0);
    }
    ['^'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['^'](other).toInt32();
      }
      return new fixnum.Int32.new((dart.notNull(this[_i]) ^ dart.notNull(this[_toInt](other))) >>> 0);
    }
    ['~']() {
      return new fixnum.Int32.new(~dart.notNull(this[_i]) >>> 0);
    }
    ['<<'](n) {
      if (dart.notNull(n) < 0) {
        dart.throw(new core.ArgumentError.new(n));
      }
      if (dart.notNull(n) >= 32) {
        return fixnum.Int32.ZERO;
      }
      return new fixnum.Int32.new(this[_i][$leftShift](n));
    }
    ['>>'](n) {
      if (dart.notNull(n) < 0) {
        dart.throw(new core.ArgumentError.new(n));
      }
      if (dart.notNull(n) >= 32) {
        return dart.test(this.isNegative) ? const$ || (const$ = dart.const(new fixnum.Int32._internal(-1))) : fixnum.Int32.ZERO;
      }
      let value = null;
      if (dart.notNull(this[_i]) >= 0) {
        value = this[_i][$rightShift](n);
      } else {
        value = (this[_i][$rightShift](n) | (4294967295)[$leftShift](32 - dart.notNull(n))) >>> 0;
      }
      return new fixnum.Int32.new(value);
    }
    shiftRightUnsigned(n) {
      if (dart.notNull(n) < 0) {
        dart.throw(new core.ArgumentError.new(n));
      }
      if (dart.notNull(n) >= 32) {
        return fixnum.Int32.ZERO;
      }
      let value = null;
      if (dart.notNull(this[_i]) >= 0) {
        value = this[_i][$rightShift](n);
      } else {
        value = (this[_i][$rightShift](n) & (1)[$leftShift](32 - dart.notNull(n)) - 1) >>> 0;
      }
      return new fixnum.Int32.new(value);
    }
    _equals(other) {
      if (other == null) return false;
      if (fixnum.Int32.is(other)) {
        return this[_i] == other[_i];
      } else if (fixnum.Int64.is(other)) {
        return dart.equals(this.toInt64(), other);
      } else if (core.int.is(other)) {
        return this[_i] == other;
      }
      return false;
    }
    compareTo(other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64().compareTo(other);
      }
      return this[_i][$compareTo](this[_toInt](other));
    }
    ['<'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['<'](other);
      }
      return dart.notNull(this[_i]) < dart.notNull(this[_toInt](other));
    }
    ['<='](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['<='](other);
      }
      return dart.notNull(this[_i]) <= dart.notNull(this[_toInt](other));
    }
    ['>'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['>'](other);
      }
      return dart.notNull(this[_i]) > dart.notNull(this[_toInt](other));
    }
    ['>='](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['>='](other);
      }
      return dart.notNull(this[_i]) >= dart.notNull(this[_toInt](other));
    }
    get isEven() {
      return (dart.notNull(this[_i]) & 1) === 0;
    }
    get isMaxValue() {
      return this[_i] === 2147483647;
    }
    get isMinValue() {
      return this[_i] === -2147483648;
    }
    get isNegative() {
      return dart.notNull(this[_i]) < 0;
    }
    get isOdd() {
      return (dart.notNull(this[_i]) & 1) === 1;
    }
    get isZero() {
      return this[_i] === 0;
    }
    get bitLength() {
      return this[_i][$bitLength];
    }
    get hashCode() {
      return this[_i];
    }
    abs() {
      return dart.notNull(this[_i]) < 0 ? new fixnum.Int32.new(-dart.notNull(this[_i])) : this;
    }
    clamp(lowerLimit, upperLimit) {
      if (dart.test(this['<'](lowerLimit))) {
        if (fixnum.IntX.is(lowerLimit)) return lowerLimit.toInt32();
        if (core.int.is(lowerLimit)) return new fixnum.Int32.new(lowerLimit);
        dart.throw(new core.ArgumentError.new(lowerLimit));
      } else if (dart.test(this['>'](upperLimit))) {
        if (fixnum.IntX.is(upperLimit)) return upperLimit.toInt32();
        if (core.int.is(upperLimit)) return new fixnum.Int32.new(upperLimit);
        dart.throw(new core.ArgumentError.new(upperLimit));
      }
      return this;
    }
    numberOfLeadingZeros() {
      return fixnum.Int32._numberOfLeadingZeros(this[_i]);
    }
    numberOfTrailingZeros() {
      return fixnum.Int32._numberOfTrailingZeros(this[_i]);
    }
    toSigned(width) {
      if (dart.notNull(width) < 1 || dart.notNull(width) > 32) dart.throw(new core.RangeError.range(width, 1, 32));
      return new fixnum.Int32.new(this[_i][$toSigned](width));
    }
    toUnsigned(width) {
      if (dart.notNull(width) < 0 || dart.notNull(width) > 32) dart.throw(new core.RangeError.range(width, 0, 32));
      return new fixnum.Int32.new(this[_i][$toUnsigned](width));
    }
    toBytes() {
      let result = ListOfint().new(4);
      result[$_set](0, dart.notNull(this[_i]) & 255);
      result[$_set](1, dart.notNull(this[_i]) >> 8 & 255);
      result[$_set](2, dart.notNull(this[_i]) >> 16 & 255);
      result[$_set](3, this[_i][$rightShift](24) & 255);
      return result;
    }
    toDouble() {
      return this[_i][$toDouble]();
    }
    toInt() {
      return this[_i];
    }
    toInt32() {
      return this;
    }
    toInt64() {
      return fixnum.Int64.new(this[_i]);
    }
    toString() {
      return dart.toString(this[_i]);
    }
    toHexString() {
      return this[_i][$toRadixString](16);
    }
    toRadixString(radix) {
      return this[_i][$toRadixString](radix);
    }
  };
  (fixnum.Int32._internal = function(i) {
    this[_i] = i;
  }).prototype = fixnum.Int32.prototype;
  (fixnum.Int32.new = function(i) {
    if (i === void 0) i = 0;
    this[_i] = (dart.notNull(i) & 2147483647) - ((dart.notNull(i) & 2147483648) >>> 0);
  }).prototype = fixnum.Int32.prototype;
  dart.addTypeTests(fixnum.Int32);
  fixnum.Int32[dart.implements] = () => [fixnum.IntX];
  dart.setMethodSignature(fixnum.Int32, () => ({
    __proto__: dart.getMethods(fixnum.Int32.__proto__),
    [_toInt]: dart.fnType(core.int, [dart.dynamic]),
    '+': dart.fnType(fixnum.IntX, [dart.dynamic]),
    '-': dart.fnType(fixnum.IntX, [dart.dynamic]),
    _negate: dart.fnType(fixnum.Int32, []),
    '*': dart.fnType(fixnum.IntX, [dart.dynamic]),
    '%': dart.fnType(fixnum.Int32, [dart.dynamic]),
    '~/': dart.fnType(fixnum.Int32, [dart.dynamic]),
    remainder: dart.fnType(fixnum.Int32, [dart.dynamic]),
    '&': dart.fnType(fixnum.Int32, [dart.dynamic]),
    '|': dart.fnType(fixnum.Int32, [dart.dynamic]),
    '^': dart.fnType(fixnum.Int32, [dart.dynamic]),
    '~': dart.fnType(fixnum.Int32, []),
    '<<': dart.fnType(fixnum.Int32, [core.int]),
    '>>': dart.fnType(fixnum.Int32, [core.int]),
    shiftRightUnsigned: dart.fnType(fixnum.Int32, [core.int]),
    compareTo: dart.fnType(core.int, [dart.dynamic]),
    [$compareTo]: dart.fnType(core.int, [dart.dynamic]),
    '<': dart.fnType(core.bool, [dart.dynamic]),
    '<=': dart.fnType(core.bool, [dart.dynamic]),
    '>': dart.fnType(core.bool, [dart.dynamic]),
    '>=': dart.fnType(core.bool, [dart.dynamic]),
    abs: dart.fnType(fixnum.Int32, []),
    clamp: dart.fnType(fixnum.Int32, [dart.dynamic, dart.dynamic]),
    numberOfLeadingZeros: dart.fnType(core.int, []),
    numberOfTrailingZeros: dart.fnType(core.int, []),
    toSigned: dart.fnType(fixnum.Int32, [core.int]),
    toUnsigned: dart.fnType(fixnum.Int32, [core.int]),
    toBytes: dart.fnType(core.List$(core.int), []),
    toDouble: dart.fnType(core.double, []),
    toInt: dart.fnType(core.int, []),
    toInt32: dart.fnType(fixnum.Int32, []),
    toInt64: dart.fnType(fixnum.Int64, []),
    toHexString: dart.fnType(core.String, []),
    toRadixString: dart.fnType(core.String, [core.int])
  }));
  dart.setStaticMethodSignature(fixnum.Int32, () => ({
    _decodeDigit: dart.fnType(core.int, [core.int]),
    _validateRadix: dart.fnType(core.int, [core.int]),
    parseRadix: dart.fnType(fixnum.Int32, [core.String, core.int]),
    parseInt: dart.fnType(fixnum.Int32, [core.String]),
    parseHex: dart.fnType(fixnum.Int32, [core.String]),
    _bitCount: dart.fnType(core.int, [core.int]),
    _numberOfLeadingZeros: dart.fnType(core.int, [core.int]),
    _numberOfTrailingZeros: dart.fnType(core.int, [core.int])
  }));
  dart.setGetterSignature(fixnum.Int32, () => ({
    __proto__: dart.getGetters(fixnum.Int32.__proto__),
    isEven: dart.fnType(core.bool, []),
    isMaxValue: dart.fnType(core.bool, []),
    isMinValue: dart.fnType(core.bool, []),
    isNegative: dart.fnType(core.bool, []),
    isOdd: dart.fnType(core.bool, []),
    isZero: dart.fnType(core.bool, []),
    bitLength: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(fixnum.Int32, () => ({
    __proto__: dart.getFields(fixnum.Int32.__proto__),
    [_i]: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(fixnum.Int32, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(fixnum.Int32, ['hashCode']);
  dart.defineLazy(fixnum.Int32, {
    /*fixnum.Int32.MAX_VALUE*/get MAX_VALUE() {
      return dart.const(new fixnum.Int32._internal(2147483647));
    },
    /*fixnum.Int32.MIN_VALUE*/get MIN_VALUE() {
      return dart.const(new fixnum.Int32._internal(-2147483648));
    },
    /*fixnum.Int32.ZERO*/get ZERO() {
      return dart.const(new fixnum.Int32._internal(0));
    },
    /*fixnum.Int32.ONE*/get ONE() {
      return dart.const(new fixnum.Int32._internal(1));
    },
    /*fixnum.Int32.TWO*/get TWO() {
      return dart.const(new fixnum.Int32._internal(2));
    },
    /*fixnum.Int32._CC_0*/get _CC_0() {
      return 48;
    },
    /*fixnum.Int32._CC_9*/get _CC_9() {
      return 57;
    },
    /*fixnum.Int32._CC_a*/get _CC_a() {
      return 97;
    },
    /*fixnum.Int32._CC_z*/get _CC_z() {
      return 122;
    },
    /*fixnum.Int32._CC_A*/get _CC_A() {
      return 65;
    },
    /*fixnum.Int32._CC_Z*/get _CC_Z() {
      return 90;
    }
  });
  const _l = Symbol('_l');
  const _m = Symbol('_m');
  const _h = Symbol('_h');
  let const$0;
  const _compareTo = Symbol('_compareTo');
  const _toRadixString = Symbol('_toRadixString');
  const _hexDigit = Symbol('_hexDigit');
  fixnum.Int64 = class Int64 extends core.Object {
    static parseRadix(s, radix) {
      return fixnum.Int64._parseRadix(s, fixnum.Int32._validateRadix(radix));
    }
    static _parseRadix(s, radix) {
      let i = 0;
      let negative = false;
      if (s[$_get](0) === '-') {
        negative = true;
        i++;
      }
      let d0 = 0, d1 = 0, d2 = 0;
      for (; i < s.length; i++) {
        let c = s[$codeUnitAt](i);
        let digit = fixnum.Int32._decodeDigit(c);
        if (dart.notNull(digit) < 0 || dart.notNull(digit) >= dart.notNull(radix)) {
          dart.throw(new core.FormatException.new(dart.str`Non-radix char code: ${c}`));
        }
        d0 = d0 * dart.notNull(radix) + dart.notNull(digit);
        let carry = d0[$rightShift](22);
        d0 = 4194303 & d0;
        d1 = d1 * dart.notNull(radix) + carry;
        carry = d1[$rightShift](22);
        d1 = 4194303 & d1;
        d2 = d2 * dart.notNull(radix) + carry;
        d2 = 1048575 & d2;
      }
      if (negative) return fixnum.Int64._negate(d0, d1, d2);
      return fixnum.Int64._masked(d0, d1, d2);
    }
    static parseInt(s) {
      return fixnum.Int64._parseRadix(s, 10);
    }
    static parseHex(s) {
      return fixnum.Int64._parseRadix(s, 16);
    }
    static new(value) {
      if (value === void 0) value = 0;
      let v0 = 0, v1 = 0, v2 = 0;
      let negative = false;
      if (dart.notNull(value) < 0) {
        negative = true;
        value = -dart.notNull(value);
      }
      v2 = (dart.notNull(value) / 17592186044416)[$truncate]();
      value = dart.notNull(value) - v2 * 17592186044416;
      v1 = (dart.notNull(value) / 4194304)[$truncate]();
      value = dart.notNull(value) - v1 * 4194304;
      v0 = value;
      return negative ? fixnum.Int64._negate(4194303 & dart.notNull(v0), 4194303 & v1, 1048575 & v2) : fixnum.Int64._masked(v0, v1, v2);
    }
    static fromBytes(bytes) {
      let top = dart.notNull(bytes[$_get](7)) & 255;
      top = top << 8 >>> 0;
      top = (top | dart.notNull(bytes[$_get](6)) & 255) >>> 0;
      top = top << 8 >>> 0;
      top = (top | dart.notNull(bytes[$_get](5)) & 255) >>> 0;
      top = top << 8 >>> 0;
      top = (top | dart.notNull(bytes[$_get](4)) & 255) >>> 0;
      let bottom = dart.notNull(bytes[$_get](3)) & 255;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | dart.notNull(bytes[$_get](2)) & 255) >>> 0;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | dart.notNull(bytes[$_get](1)) & 255) >>> 0;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | dart.notNull(bytes[$_get](0)) & 255) >>> 0;
      return fixnum.Int64.fromInts(top, bottom);
    }
    static fromBytesBigEndian(bytes) {
      let top = dart.notNull(bytes[$_get](0)) & 255;
      top = top << 8 >>> 0;
      top = (top | dart.notNull(bytes[$_get](1)) & 255) >>> 0;
      top = top << 8 >>> 0;
      top = (top | dart.notNull(bytes[$_get](2)) & 255) >>> 0;
      top = top << 8 >>> 0;
      top = (top | dart.notNull(bytes[$_get](3)) & 255) >>> 0;
      let bottom = dart.notNull(bytes[$_get](4)) & 255;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | dart.notNull(bytes[$_get](5)) & 255) >>> 0;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | dart.notNull(bytes[$_get](6)) & 255) >>> 0;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | dart.notNull(bytes[$_get](7)) & 255) >>> 0;
      return fixnum.Int64.fromInts(top, bottom);
    }
    static fromInts(top, bottom) {
      top = (dart.notNull(top) & 4294967295) >>> 0;
      bottom = (dart.notNull(bottom) & 4294967295) >>> 0;
      let d0 = 4194303 & dart.notNull(bottom);
      let d1 = (4095 & dart.notNull(top)) << 10 | 1023 & bottom[$rightShift](22);
      let d2 = 1048575 & top[$rightShift](12);
      return fixnum.Int64._masked(d0, d1, d2);
    }
    static _promote(value) {
      if (fixnum.Int64.is(value)) {
        return value;
      } else if (core.int.is(value)) {
        return fixnum.Int64.new(value);
      } else if (fixnum.Int32.is(value)) {
        return value.toInt64();
      }
      dart.throw(new core.ArgumentError.value(value));
    }
    ['+'](other) {
      let o = fixnum.Int64._promote(other);
      let sum0 = dart.notNull(this[_l]) + dart.notNull(o[_l]);
      let sum1 = dart.notNull(this[_m]) + dart.notNull(o[_m]) + sum0[$rightShift](22);
      let sum2 = dart.notNull(this[_h]) + dart.notNull(o[_h]) + sum1[$rightShift](22);
      return fixnum.Int64._masked(sum0, sum1, sum2);
    }
    ['-'](other) {
      let o = fixnum.Int64._promote(other);
      return fixnum.Int64._sub(this[_l], this[_m], this[_h], o[_l], o[_m], o[_h]);
    }
    _negate() {
      return fixnum.Int64._negate(this[_l], this[_m], this[_h]);
    }
    ['*'](other) {
      let o = fixnum.Int64._promote(other);
      let a0 = dart.notNull(this[_l]) & 8191;
      let a1 = (this[_l][$rightShift](13) | (dart.notNull(this[_m]) & 15) << 9) >>> 0;
      let a2 = dart.notNull(this[_m]) >> 4 & 8191;
      let a3 = (this[_m][$rightShift](17) | (dart.notNull(this[_h]) & 255) << 5) >>> 0;
      let a4 = (dart.notNull(this[_h]) & 1048320) >>> 8;
      let b0 = dart.notNull(o[_l]) & 8191;
      let b1 = (o[_l][$rightShift](13) | (dart.notNull(o[_m]) & 15) << 9) >>> 0;
      let b2 = dart.notNull(o[_m]) >> 4 & 8191;
      let b3 = (o[_m][$rightShift](17) | (dart.notNull(o[_h]) & 255) << 5) >>> 0;
      let b4 = (dart.notNull(o[_h]) & 1048320) >>> 8;
      let p0 = a0 * b0;
      let p1 = a1 * b0;
      let p2 = a2 * b0;
      let p3 = a3 * b0;
      let p4 = a4 * b0;
      if (b1 !== 0) {
        p1 = p1 + a0 * b1;
        p2 = p2 + a1 * b1;
        p3 = p3 + a2 * b1;
        p4 = p4 + a3 * b1;
      }
      if (b2 !== 0) {
        p2 = p2 + a0 * b2;
        p3 = p3 + a1 * b2;
        p4 = p4 + a2 * b2;
      }
      if (b3 !== 0) {
        p3 = p3 + a0 * b3;
        p4 = p4 + a1 * b3;
      }
      if (b4 !== 0) {
        p4 = p4 + a0 * b4;
      }
      let c00 = p0 & 4194303;
      let c01 = (p1 & 511) << 13;
      let c0 = c00 + c01;
      let c10 = p0[$rightShift](22);
      let c11 = p1[$rightShift](9);
      let c12 = (p2 & 262143) << 4;
      let c13 = (p3 & 31) << 17;
      let c1 = c10 + c11 + c12 + c13;
      let c22 = p2[$rightShift](18);
      let c23 = p3[$rightShift](5);
      let c24 = (p4 & 4095) << 8;
      let c2 = c22 + c23 + c24;
      c1 = c1 + c0[$rightShift](22);
      c2 = c2 + c1[$rightShift](22);
      return fixnum.Int64._masked(c0, c1, c2);
    }
    ['%'](other) {
      return fixnum.Int64._divide(this, other, 3);
    }
    ['~/'](other) {
      return fixnum.Int64._divide(this, other, 1);
    }
    remainder(other) {
      return fixnum.Int64._divide(this, other, 2);
    }
    ['&'](other) {
      let o = fixnum.Int64._promote(other);
      let a0 = (dart.notNull(this[_l]) & dart.notNull(o[_l])) >>> 0;
      let a1 = (dart.notNull(this[_m]) & dart.notNull(o[_m])) >>> 0;
      let a2 = (dart.notNull(this[_h]) & dart.notNull(o[_h])) >>> 0;
      return fixnum.Int64._masked(a0, a1, a2);
    }
    ['|'](other) {
      let o = fixnum.Int64._promote(other);
      let a0 = (dart.notNull(this[_l]) | dart.notNull(o[_l])) >>> 0;
      let a1 = (dart.notNull(this[_m]) | dart.notNull(o[_m])) >>> 0;
      let a2 = (dart.notNull(this[_h]) | dart.notNull(o[_h])) >>> 0;
      return fixnum.Int64._masked(a0, a1, a2);
    }
    ['^'](other) {
      let o = fixnum.Int64._promote(other);
      let a0 = (dart.notNull(this[_l]) ^ dart.notNull(o[_l])) >>> 0;
      let a1 = (dart.notNull(this[_m]) ^ dart.notNull(o[_m])) >>> 0;
      let a2 = (dart.notNull(this[_h]) ^ dart.notNull(o[_h])) >>> 0;
      return fixnum.Int64._masked(a0, a1, a2);
    }
    ['~']() {
      return fixnum.Int64._masked(~dart.notNull(this[_l]) >>> 0, ~dart.notNull(this[_m]) >>> 0, ~dart.notNull(this[_h]) >>> 0);
    }
    ['<<'](n) {
      if (dart.notNull(n) < 0) {
        dart.throw(new core.ArgumentError.value(n));
      }
      if (dart.notNull(n) >= 64) {
        return fixnum.Int64.ZERO;
      }
      let res0 = null, res1 = null, res2 = null;
      if (dart.notNull(n) < 22) {
        res0 = this[_l][$leftShift](n);
        res1 = (this[_m][$leftShift](n) | this[_l][$rightShift](22 - dart.notNull(n))) >>> 0;
        res2 = (this[_h][$leftShift](n) | this[_m][$rightShift](22 - dart.notNull(n))) >>> 0;
      } else if (dart.notNull(n) < 44) {
        res0 = 0;
        res1 = this[_l][$leftShift](dart.notNull(n) - 22);
        res2 = (this[_m][$leftShift](dart.notNull(n) - 22) | this[_l][$rightShift](44 - dart.notNull(n))) >>> 0;
      } else {
        res0 = 0;
        res1 = 0;
        res2 = this[_l][$leftShift](dart.notNull(n) - 44);
      }
      return fixnum.Int64._masked(res0, res1, res2);
    }
    ['>>'](n) {
      if (dart.notNull(n) < 0) {
        dart.throw(new core.ArgumentError.value(n));
      }
      if (dart.notNull(n) >= 64) {
        return dart.test(this.isNegative) ? const$0 || (const$0 = dart.const(new fixnum.Int64._bits(4194303, 4194303, 1048575))) : fixnum.Int64.ZERO;
      }
      let res0 = null, res1 = null, res2 = null;
      let a2 = this[_h];
      let negative = (dart.notNull(a2) & 524288) !== 0;
      if (negative && 4194303 > 1048575) {
        a2 = dart.notNull(a2) + (4194303 - 1048575);
      }
      if (dart.notNull(n) < 22) {
        res2 = fixnum.Int64._shiftRight(a2, n);
        if (negative) {
          res2 = (dart.notNull(res2) | 1048575 & ~(1048575)[$rightShift](n)) >>> 0;
        }
        res1 = (dart.notNull(fixnum.Int64._shiftRight(this[_m], n)) | a2[$leftShift](22 - dart.notNull(n))) >>> 0;
        res0 = (dart.notNull(fixnum.Int64._shiftRight(this[_l], n)) | this[_m][$leftShift](22 - dart.notNull(n))) >>> 0;
      } else if (dart.notNull(n) < 44) {
        res2 = negative ? 1048575 : 0;
        res1 = fixnum.Int64._shiftRight(a2, dart.notNull(n) - 22);
        if (negative) {
          res1 = (dart.notNull(res1) | 4194303 & ~(4194303)[$rightShift](dart.notNull(n) - 22)) >>> 0;
        }
        res0 = (dart.notNull(fixnum.Int64._shiftRight(this[_m], dart.notNull(n) - 22)) | a2[$leftShift](44 - dart.notNull(n))) >>> 0;
      } else {
        res2 = negative ? 1048575 : 0;
        res1 = negative ? 4194303 : 0;
        res0 = fixnum.Int64._shiftRight(a2, dart.notNull(n) - 44);
        if (negative) {
          res0 = (dart.notNull(res0) | 4194303 & ~(4194303)[$rightShift](dart.notNull(n) - 44)) >>> 0;
        }
      }
      return fixnum.Int64._masked(res0, res1, res2);
    }
    shiftRightUnsigned(n) {
      if (dart.notNull(n) < 0) {
        dart.throw(new core.ArgumentError.value(n));
      }
      if (dart.notNull(n) >= 64) {
        return fixnum.Int64.ZERO;
      }
      let res0 = null, res1 = null, res2 = null;
      let a2 = 1048575 & dart.notNull(this[_h]);
      if (dart.notNull(n) < 22) {
        res2 = a2[$rightShift](n);
        res1 = (this[_m][$rightShift](n) | a2[$leftShift](22 - dart.notNull(n))) >>> 0;
        res0 = (this[_l][$rightShift](n) | this[_m][$leftShift](22 - dart.notNull(n))) >>> 0;
      } else if (dart.notNull(n) < 44) {
        res2 = 0;
        res1 = a2[$rightShift](dart.notNull(n) - 22);
        res0 = (this[_m][$rightShift](dart.notNull(n) - 22) | this[_h][$leftShift](44 - dart.notNull(n))) >>> 0;
      } else {
        res2 = 0;
        res1 = 0;
        res0 = a2[$rightShift](dart.notNull(n) - 44);
      }
      return fixnum.Int64._masked(res0, res1, res2);
    }
    _equals(other) {
      if (other == null) return false;
      let o = null;
      if (fixnum.Int64.is(other)) {
        o = other;
      } else if (core.int.is(other)) {
        if (this[_h] === 0 && this[_m] === 0) return this[_l] == other;
        if ((4194303 & dart.notNull(other)) === other) return false;
        o = fixnum.Int64.new(other);
      } else if (fixnum.Int32.is(other)) {
        o = other.toInt64();
      }
      if (o != null) {
        return this[_l] == o[_l] && this[_m] == o[_m] && this[_h] == o[_h];
      }
      return false;
    }
    compareTo(other) {
      return this[_compareTo](other);
    }
    [_compareTo](other) {
      let o = fixnum.Int64._promote(other);
      let signa = this[_h][$rightShift](20 - 1);
      let signb = o[_h][$rightShift](20 - 1);
      if (signa !== signb) {
        return signa === 0 ? 1 : -1;
      }
      if (dart.notNull(this[_h]) > dart.notNull(o[_h])) {
        return 1;
      } else if (dart.notNull(this[_h]) < dart.notNull(o[_h])) {
        return -1;
      }
      if (dart.notNull(this[_m]) > dart.notNull(o[_m])) {
        return 1;
      } else if (dart.notNull(this[_m]) < dart.notNull(o[_m])) {
        return -1;
      }
      if (dart.notNull(this[_l]) > dart.notNull(o[_l])) {
        return 1;
      } else if (dart.notNull(this[_l]) < dart.notNull(o[_l])) {
        return -1;
      }
      return 0;
    }
    ['<'](other) {
      return dart.notNull(this[_compareTo](other)) < 0;
    }
    ['<='](other) {
      return dart.notNull(this[_compareTo](other)) <= 0;
    }
    ['>'](other) {
      return dart.notNull(this[_compareTo](other)) > 0;
    }
    ['>='](other) {
      return dart.notNull(this[_compareTo](other)) >= 0;
    }
    get isEven() {
      return (dart.notNull(this[_l]) & 1) === 0;
    }
    get isMaxValue() {
      return this[_h] === 1048575 >> 1 && this[_m] === 4194303 && this[_l] === 4194303;
    }
    get isMinValue() {
      return this[_h] === 524288 && this[_m] === 0 && this[_l] === 0;
    }
    get isNegative() {
      return (dart.notNull(this[_h]) & 524288) !== 0;
    }
    get isOdd() {
      return (dart.notNull(this[_l]) & 1) === 1;
    }
    get isZero() {
      return this[_h] === 0 && this[_m] === 0 && this[_l] === 0;
    }
    get bitLength() {
      if (dart.test(this.isZero)) return 0;
      let a0 = this[_l], a1 = this[_m], a2 = this[_h];
      if (dart.test(this.isNegative)) {
        a0 = 4194303 & ~dart.notNull(a0);
        a1 = 4194303 & ~dart.notNull(a1);
        a2 = 1048575 & ~dart.notNull(a2);
      }
      if (a2 !== 0) return 44 + a2[$bitLength];
      if (a1 !== 0) return 22 + a1[$bitLength];
      return a0[$bitLength];
    }
    get hashCode() {
      let bottom = ((dart.notNull(this[_m]) & 1023) << 22 | dart.notNull(this[_l])) >>> 0;
      let top = (dart.notNull(this[_h]) << 12 | dart.notNull(this[_m]) >> 10 & 4095) >>> 0;
      return (bottom ^ top) >>> 0;
    }
    abs() {
      return dart.test(this.isNegative) ? this._negate() : this;
    }
    clamp(lowerLimit, upperLimit) {
      let lower = fixnum.Int64._promote(lowerLimit);
      let upper = fixnum.Int64._promote(upperLimit);
      if (dart.test(this['<'](lower))) return lower;
      if (dart.test(this['>'](upper))) return upper;
      return this;
    }
    numberOfLeadingZeros() {
      let b2 = fixnum.Int32._numberOfLeadingZeros(this[_h]);
      if (b2 === 32) {
        let b1 = fixnum.Int32._numberOfLeadingZeros(this[_m]);
        if (b1 === 32) {
          return dart.notNull(fixnum.Int32._numberOfLeadingZeros(this[_l])) + 32;
        } else {
          return dart.notNull(b1) + 20 - (32 - 22);
        }
      } else {
        return dart.notNull(b2) - (32 - 20);
      }
    }
    numberOfTrailingZeros() {
      let zeros = fixnum.Int32._numberOfTrailingZeros(this[_l]);
      if (dart.notNull(zeros) < 32) {
        return zeros;
      }
      zeros = fixnum.Int32._numberOfTrailingZeros(this[_m]);
      if (dart.notNull(zeros) < 32) {
        return 22 + dart.notNull(zeros);
      }
      zeros = fixnum.Int32._numberOfTrailingZeros(this[_h]);
      if (dart.notNull(zeros) < 32) {
        return 44 + dart.notNull(zeros);
      }
      return 64;
    }
    toSigned(width) {
      if (dart.notNull(width) < 1 || dart.notNull(width) > 64) dart.throw(new core.RangeError.range(width, 1, 64));
      if (dart.notNull(width) > 44) {
        return fixnum.Int64._masked(this[_l], this[_m], this[_h][$toSigned](dart.notNull(width) - 44));
      } else if (dart.notNull(width) > 22) {
        let m = this[_m][$toSigned](dart.notNull(width) - 22);
        return m[$isNegative] ? fixnum.Int64._masked(this[_l], m, 1048575) : fixnum.Int64._masked(this[_l], m, 0);
      } else {
        let l = this[_l][$toSigned](width);
        return l[$isNegative] ? fixnum.Int64._masked(l, 4194303, 1048575) : fixnum.Int64._masked(l, 0, 0);
      }
    }
    toUnsigned(width) {
      if (dart.notNull(width) < 0 || dart.notNull(width) > 64) dart.throw(new core.RangeError.range(width, 0, 64));
      if (dart.notNull(width) > 44) {
        let h = this[_h][$toUnsigned](dart.notNull(width) - 44);
        return fixnum.Int64._masked(this[_l], this[_m], h);
      } else if (dart.notNull(width) > 22) {
        let m = this[_m][$toUnsigned](dart.notNull(width) - 22);
        return fixnum.Int64._masked(this[_l], m, 0);
      } else {
        let l = this[_l][$toUnsigned](width);
        return fixnum.Int64._masked(l, 0, 0);
      }
    }
    toBytes() {
      let result = ListOfint().new(8);
      result[$_set](0, dart.notNull(this[_l]) & 255);
      result[$_set](1, dart.notNull(this[_l]) >> 8 & 255);
      result[$_set](2, dart.notNull(this[_m]) << 6 & 252 | dart.notNull(this[_l]) >> 16 & 63);
      result[$_set](3, dart.notNull(this[_m]) >> 2 & 255);
      result[$_set](4, dart.notNull(this[_m]) >> 10 & 255);
      result[$_set](5, dart.notNull(this[_h]) << 4 & 240 | dart.notNull(this[_m]) >> 18 & 15);
      result[$_set](6, dart.notNull(this[_h]) >> 4 & 255);
      result[$_set](7, dart.notNull(this[_h]) >> 12 & 255);
      return result;
    }
    toDouble() {
      return this.toInt()[$toDouble]();
    }
    toInt() {
      let l = this[_l];
      let m = this[_m];
      let h = this[_h];
      if ((dart.notNull(this[_h]) & 524288) !== 0) {
        l = 4194303 & ~dart.notNull(this[_l]);
        m = 4194303 & ~dart.notNull(this[_m]);
        h = 1048575 & ~dart.notNull(this[_h]);
        return -(1 + dart.notNull(l) + 4194304 * dart.notNull(m) + 17592186044416 * dart.notNull(h));
      } else {
        return dart.notNull(l) + 4194304 * dart.notNull(m) + 17592186044416 * dart.notNull(h);
      }
    }
    toInt32() {
      return new fixnum.Int32.new(((dart.notNull(this[_m]) & 1023) << 22 | dart.notNull(this[_l])) >>> 0);
    }
    toInt64() {
      return this;
    }
    toString() {
      return this[_toRadixString](10);
    }
    toHexString() {
      if (dart.test(this.isZero)) return "0";
      let x = this;
      let hexStr = "";
      while (!dart.test(x.isZero)) {
        let digit = dart.notNull(x[_l]) & 15;
        hexStr = dart.str`${this[_hexDigit](digit)}${hexStr}`;
        x = x.shiftRightUnsigned(4);
      }
      return hexStr;
    }
    toRadixString(radix) {
      return this[_toRadixString](fixnum.Int32._validateRadix(radix));
    }
    [_toRadixString](radix) {
      let d0 = this[_l];
      let d1 = this[_m];
      let d2 = this[_h];
      if (d0 === 0 && d1 === 0 && d2 === 0) return '0';
      let sign = '';
      if ((dart.notNull(d2) & 524288) !== 0) {
        sign = '-';
        d0 = 0 - dart.notNull(d0);
        let borrow = dart.notNull(d0) >> 22 & 1;
        d0 = dart.notNull(d0) & 4194303;
        d1 = 0 - dart.notNull(d1) - borrow;
        borrow = dart.notNull(d1) >> 22 & 1;
        d1 = dart.notNull(d1) & 4194303;
        d2 = 0 - dart.notNull(d2) - borrow;
        d2 = dart.notNull(d2) & 1048575;
      }
      let d4 = (dart.notNull(d2) << 4 | d1[$rightShift](18)) >>> 0;
      let d3 = dart.notNull(d1) >> 8 & 1023;
      d2 = (dart.notNull(d1) << 2 | dart.notNull(d0) >> 20) & 1023;
      d1 = dart.notNull(d0) >> 10 & 1023;
      d0 = dart.notNull(d0) & 1023;
      let fatRadix = fixnum.Int64._fatRadixTable[$_get](radix);
      let chunk1 = "", chunk2 = "", chunk3 = "";
      while (!(d4 === 0 && d3 === 0)) {
        let q = (d4 / dart.notNull(fatRadix))[$truncate]();
        let r = d4 - q * dart.notNull(fatRadix);
        d4 = q;
        d3 = d3 + (r << 10 >>> 0);
        q = (d3 / dart.notNull(fatRadix))[$truncate]();
        r = d3 - q * dart.notNull(fatRadix);
        d3 = q;
        d2 = dart.notNull(d2) + (r << 10 >>> 0);
        q = (dart.notNull(d2) / dart.notNull(fatRadix))[$truncate]();
        r = dart.notNull(d2) - q * dart.notNull(fatRadix);
        d2 = q;
        d1 = dart.notNull(d1) + (r << 10 >>> 0);
        q = (dart.notNull(d1) / dart.notNull(fatRadix))[$truncate]();
        r = dart.notNull(d1) - q * dart.notNull(fatRadix);
        d1 = q;
        d0 = dart.notNull(d0) + (r << 10 >>> 0);
        q = (dart.notNull(d0) / dart.notNull(fatRadix))[$truncate]();
        r = dart.notNull(d0) - q * dart.notNull(fatRadix);
        d0 = q;
        if (!(chunk3 === "")) dart.assertFailed();
        chunk3 = chunk2;
        chunk2 = chunk1;
        chunk1 = (dart.notNull(fatRadix) + r)[$toRadixString](radix)[$substring](1);
      }
      let residue = (dart.notNull(d2) << 20 >>> 0) + (dart.notNull(d1) << 10 >>> 0) + dart.notNull(d0);
      let leadingDigits = residue === 0 ? '' : residue[$toRadixString](radix);
      return dart.str`${sign}${leadingDigits}${chunk1}${chunk2}${chunk3}`;
    }
    toDebugString() {
      return dart.str`Int64[_l=${this[_l]}, _m=${this[_m]}, _h=${this[_h]}]`;
    }
    static _masked(a0, a1, a2) {
      return new fixnum.Int64._bits(4194303 & dart.notNull(a0), 4194303 & dart.notNull(a1), 1048575 & dart.notNull(a2));
    }
    static _sub(a0, a1, a2, b0, b1, b2) {
      let diff0 = dart.notNull(a0) - dart.notNull(b0);
      let diff1 = dart.notNull(a1) - dart.notNull(b1) - (diff0 >> 22 & 1);
      let diff2 = dart.notNull(a2) - dart.notNull(b2) - (diff1 >> 22 & 1);
      return fixnum.Int64._masked(diff0, diff1, diff2);
    }
    static _negate(b0, b1, b2) {
      return fixnum.Int64._sub(0, 0, 0, b0, b1, b2);
    }
    [_hexDigit](digit) {
      return "0123456789ABCDEF"[$_get](digit);
    }
    static _shiftRight(x, n) {
      if (dart.notNull(x) >= 0) {
        return x[$rightShift](n);
      } else {
        let shifted = x[$rightShift](n);
        if (shifted >= 2147483648) {
          shifted = shifted - 4294967296;
        }
        return shifted;
      }
    }
    static _divide(a, other, what) {
      let b = fixnum.Int64._promote(other);
      if (dart.test(b.isZero)) {
        dart.throw(new core.IntegerDivisionByZeroException.new());
      }
      if (dart.test(a.isZero)) return fixnum.Int64.ZERO;
      let aNeg = a.isNegative;
      let bNeg = b.isNegative;
      a = a.abs();
      b = b.abs();
      let a0 = a[_l];
      let a1 = a[_m];
      let a2 = a[_h];
      let b0 = b[_l];
      let b1 = b[_m];
      let b2 = b[_h];
      return fixnum.Int64._divideHelper(a0, a1, a2, aNeg, b0, b1, b2, bNeg, what);
    }
    static _divideHelper(a0, a1, a2, aNeg, b0, b1, b2, bNeg, what) {
      let q0 = 0, q1 = 0, q2 = 0;
      let r0 = 0, r1 = 0, r2 = 0;
      if (b2 === 0 && b1 === 0 && dart.notNull(b0) < (1)[$leftShift](30 - 22)) {
        q2 = (dart.notNull(a2) / dart.notNull(b0))[$truncate]();
        let carry = dart.notNull(a2) - q2 * dart.notNull(b0);
        let d1 = dart.notNull(a1) + (carry << 22 >>> 0);
        q1 = (d1 / dart.notNull(b0))[$truncate]();
        carry = d1 - q1 * dart.notNull(b0);
        let d0 = dart.notNull(a0) + (carry << 22 >>> 0);
        q0 = (d0 / dart.notNull(b0))[$truncate]();
        r0 = d0 - q0 * dart.notNull(b0);
      } else {
        let K2 = 17592186044416.0;
        let K1 = 4194304.0;
        let ad = dart.notNull(a0) + K1 * dart.notNull(a1) + K2 * dart.notNull(a2);
        let bd = dart.notNull(b0) + K1 * dart.notNull(b1) + K2 * dart.notNull(b2);
        let qd = (ad / bd)[$floorToDouble]();
        let q2d = (qd / K2)[$floorToDouble]();
        qd = qd - K2 * q2d;
        let q1d = (qd / K1)[$floorToDouble]();
        let q0d = qd - K1 * q1d;
        q2 = q2d[$toInt]();
        q1 = q1d[$toInt]();
        q0 = q0d[$toInt]();
        if (!(q0 + K1 * q1 + K2 * q2 === (ad / bd)[$floorToDouble]())) dart.assertFailed();
        if (!(q2 === 0 || b2 === 0)) dart.assertFailed();
        let p0d = q0d * dart.notNull(b0);
        let p0carry = (p0d / K1)[$floorToDouble]();
        p0d = p0d - p0carry * K1;
        let p1d = q1d * dart.notNull(b0) + q0d * dart.notNull(b1) + p0carry;
        let p1carry = (p1d / K1)[$floorToDouble]();
        p1d = p1d - p1carry * K1;
        let p2d = q2d * dart.notNull(b0) + q1d * dart.notNull(b1) + q0d * dart.notNull(b2) + p1carry;
        if (!(p2d <= 1048575)) dart.assertFailed();
        let diff0 = dart.notNull(a0) - p0d[$toInt]();
        let diff1 = dart.notNull(a1) - p1d[$toInt]() - (diff0 >> 22 & 1);
        let diff2 = dart.notNull(a2) - p2d[$toInt]() - (diff1 >> 22 & 1);
        r0 = 4194303 & diff0;
        r1 = 4194303 & diff1;
        r2 = 1048575 & diff2;
        while (r2 >= 524288 || r2 > dart.notNull(b2) || r2 === b2 && (r1 > dart.notNull(b1) || r1 === b1 && r0 >= dart.notNull(b0))) {
          let m = (r2 & 524288) === 0 ? 1 : -1;
          let d0 = r0 - m * dart.notNull(b0);
          let d1 = r1 - m * (dart.notNull(b1) + (d0 >> 22 & 1));
          let d2 = r2 - m * (dart.notNull(b2) + (d1 >> 22 & 1));
          r0 = 4194303 & d0;
          r1 = 4194303 & d1;
          r2 = 1048575 & d2;
          d0 = q0 + m;
          d1 = q1 + m * (d0 >> 22 & 1);
          d2 = q2 + m * (d1 >> 22 & 1);
          q0 = 4194303 & d0;
          q1 = 4194303 & d1;
          q2 = 1048575 & d2;
        }
      }
      if (!dart.test(fixnum.Int64.ZERO['<='](new fixnum.Int64._bits(r0, r1, r2)))) dart.assertFailed();
      if (!(r2 < dart.notNull(b2) || dart.test(new fixnum.Int64._bits(r0, r1, r2)['<'](new fixnum.Int64._bits(b0, b1, b2))))) dart.assertFailed();
      if (!(what === 1 || what === 3 || what === 2)) dart.assertFailed();
      if (what === 1) {
        if (aNeg != bNeg) return fixnum.Int64._negate(q0, q1, q2);
        return fixnum.Int64._masked(q0, q1, q2);
      }
      if (!dart.test(aNeg)) {
        return fixnum.Int64._masked(r0, r1, r2);
      }
      if (what === 3) {
        if (r0 === 0 && r1 === 0 && r2 === 0) {
          return fixnum.Int64.ZERO;
        } else {
          return fixnum.Int64._sub(b0, b1, b2, r0, r1, r2);
        }
      } else {
        return fixnum.Int64._negate(r0, r1, r2);
      }
    }
  };
  (fixnum.Int64._bits = function(l, m, h) {
    this[_l] = l;
    this[_m] = m;
    this[_h] = h;
  }).prototype = fixnum.Int64.prototype;
  dart.addTypeTests(fixnum.Int64);
  fixnum.Int64[dart.implements] = () => [fixnum.IntX];
  dart.setMethodSignature(fixnum.Int64, () => ({
    __proto__: dart.getMethods(fixnum.Int64.__proto__),
    '+': dart.fnType(fixnum.Int64, [dart.dynamic]),
    '-': dart.fnType(fixnum.Int64, [dart.dynamic]),
    _negate: dart.fnType(fixnum.Int64, []),
    '*': dart.fnType(fixnum.Int64, [dart.dynamic]),
    '%': dart.fnType(fixnum.Int64, [dart.dynamic]),
    '~/': dart.fnType(fixnum.Int64, [dart.dynamic]),
    remainder: dart.fnType(fixnum.Int64, [dart.dynamic]),
    '&': dart.fnType(fixnum.Int64, [dart.dynamic]),
    '|': dart.fnType(fixnum.Int64, [dart.dynamic]),
    '^': dart.fnType(fixnum.Int64, [dart.dynamic]),
    '~': dart.fnType(fixnum.Int64, []),
    '<<': dart.fnType(fixnum.Int64, [core.int]),
    '>>': dart.fnType(fixnum.Int64, [core.int]),
    shiftRightUnsigned: dart.fnType(fixnum.Int64, [core.int]),
    compareTo: dart.fnType(core.int, [dart.dynamic]),
    [$compareTo]: dart.fnType(core.int, [dart.dynamic]),
    [_compareTo]: dart.fnType(core.int, [dart.dynamic]),
    '<': dart.fnType(core.bool, [dart.dynamic]),
    '<=': dart.fnType(core.bool, [dart.dynamic]),
    '>': dart.fnType(core.bool, [dart.dynamic]),
    '>=': dart.fnType(core.bool, [dart.dynamic]),
    abs: dart.fnType(fixnum.Int64, []),
    clamp: dart.fnType(fixnum.Int64, [dart.dynamic, dart.dynamic]),
    numberOfLeadingZeros: dart.fnType(core.int, []),
    numberOfTrailingZeros: dart.fnType(core.int, []),
    toSigned: dart.fnType(fixnum.Int64, [core.int]),
    toUnsigned: dart.fnType(fixnum.Int64, [core.int]),
    toBytes: dart.fnType(core.List$(core.int), []),
    toDouble: dart.fnType(core.double, []),
    toInt: dart.fnType(core.int, []),
    toInt32: dart.fnType(fixnum.Int32, []),
    toInt64: dart.fnType(fixnum.Int64, []),
    toHexString: dart.fnType(core.String, []),
    toRadixString: dart.fnType(core.String, [core.int]),
    [_toRadixString]: dart.fnType(core.String, [core.int]),
    toDebugString: dart.fnType(core.String, []),
    [_hexDigit]: dart.fnType(core.String, [core.int])
  }));
  dart.setStaticMethodSignature(fixnum.Int64, () => ({
    parseRadix: dart.fnType(fixnum.Int64, [core.String, core.int]),
    _parseRadix: dart.fnType(fixnum.Int64, [core.String, core.int]),
    parseInt: dart.fnType(fixnum.Int64, [core.String]),
    parseHex: dart.fnType(fixnum.Int64, [core.String]),
    _promote: dart.fnType(fixnum.Int64, [dart.dynamic]),
    _masked: dart.fnType(fixnum.Int64, [core.int, core.int, core.int]),
    _sub: dart.fnType(fixnum.Int64, [core.int, core.int, core.int, core.int, core.int, core.int]),
    _negate: dart.fnType(fixnum.Int64, [core.int, core.int, core.int]),
    _shiftRight: dart.fnType(core.int, [core.int, core.int]),
    _divide: dart.fnType(fixnum.Int64, [fixnum.Int64, dart.dynamic, core.int]),
    _divideHelper: dart.fnType(fixnum.Int64, [core.int, core.int, core.int, core.bool, core.int, core.int, core.int, core.bool, core.int])
  }));
  dart.setGetterSignature(fixnum.Int64, () => ({
    __proto__: dart.getGetters(fixnum.Int64.__proto__),
    isEven: dart.fnType(core.bool, []),
    isMaxValue: dart.fnType(core.bool, []),
    isMinValue: dart.fnType(core.bool, []),
    isNegative: dart.fnType(core.bool, []),
    isOdd: dart.fnType(core.bool, []),
    isZero: dart.fnType(core.bool, []),
    bitLength: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(fixnum.Int64, () => ({
    __proto__: dart.getFields(fixnum.Int64.__proto__),
    [_l]: dart.finalFieldType(core.int),
    [_m]: dart.finalFieldType(core.int),
    [_h]: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(fixnum.Int64, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(fixnum.Int64, ['hashCode']);
  dart.defineLazy(fixnum.Int64, {
    /*fixnum.Int64._BITS*/get _BITS() {
      return 22;
    },
    /*fixnum.Int64._BITS01*/get _BITS01() {
      return 44;
    },
    /*fixnum.Int64._BITS2*/get _BITS2() {
      return 20;
    },
    /*fixnum.Int64._MASK*/get _MASK() {
      return 4194303;
    },
    /*fixnum.Int64._MASK2*/get _MASK2() {
      return 1048575;
    },
    /*fixnum.Int64._SIGN_BIT*/get _SIGN_BIT() {
      return 19;
    },
    /*fixnum.Int64._SIGN_BIT_MASK*/get _SIGN_BIT_MASK() {
      return 1 << 19;
    },
    /*fixnum.Int64.MAX_VALUE*/get MAX_VALUE() {
      return dart.const(new fixnum.Int64._bits(4194303, 4194303, 1048575 >> 1));
    },
    /*fixnum.Int64.MIN_VALUE*/get MIN_VALUE() {
      return dart.const(new fixnum.Int64._bits(0, 0, 524288));
    },
    /*fixnum.Int64.ZERO*/get ZERO() {
      return dart.const(new fixnum.Int64._bits(0, 0, 0));
    },
    /*fixnum.Int64.ONE*/get ONE() {
      return dart.const(new fixnum.Int64._bits(1, 0, 0));
    },
    /*fixnum.Int64.TWO*/get TWO() {
      return dart.const(new fixnum.Int64._bits(2, 0, 0));
    },
    /*fixnum.Int64._fatRadixTable*/get _fatRadixTable() {
      return dart.constList([0, 0, 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2, 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3, 4 * 4 * 4 * 4 * 4 * 4 * 4 * 4 * 4 * 4, 5 * 5 * 5 * 5 * 5 * 5 * 5 * 5, 6 * 6 * 6 * 6 * 6 * 6 * 6, 7 * 7 * 7 * 7 * 7 * 7 * 7, 8 * 8 * 8 * 8 * 8 * 8, 9 * 9 * 9 * 9 * 9 * 9, 10 * 10 * 10 * 10 * 10 * 10, 11 * 11 * 11 * 11 * 11, 12 * 12 * 12 * 12 * 12, 13 * 13 * 13 * 13 * 13, 14 * 14 * 14 * 14 * 14, 15 * 15 * 15 * 15 * 15, 16 * 16 * 16 * 16 * 16, 17 * 17 * 17 * 17, 18 * 18 * 18 * 18, 19 * 19 * 19 * 19, 20 * 20 * 20 * 20, 21 * 21 * 21 * 21, 22 * 22 * 22 * 22, 23 * 23 * 23 * 23, 24 * 24 * 24 * 24, 25 * 25 * 25 * 25, 26 * 26 * 26 * 26, 27 * 27 * 27 * 27, 28 * 28 * 28 * 28, 29 * 29 * 29 * 29, 30 * 30 * 30 * 30, 31 * 31 * 31 * 31, 32 * 32 * 32 * 32, 33 * 33 * 33, 34 * 34 * 34, 35 * 35 * 35, 36 * 36 * 36], core.int);
    },
    /*fixnum.Int64._RETURN_DIV*/get _RETURN_DIV() {
      return 1;
    },
    /*fixnum.Int64._RETURN_REM*/get _RETURN_REM() {
      return 2;
    },
    /*fixnum.Int64._RETURN_MOD*/get _RETURN_MOD() {
      return 3;
    }
  });
  dart.trackLibraries("packages/fixnum/fixnum.ddc", {
    "package:fixnum/fixnum.dart": fixnum
  }, '{"version":3,"sourceRoot":"","sources":["src/intx.dart","src/int32.dart","src/int64.dart"],"names":[],"mappings":"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","file":"fixnum.ddc.js"}');
  // Exports:
  return {
    fixnum: fixnum
  };
});

//# sourceMappingURL=fixnum.ddc.js.map
