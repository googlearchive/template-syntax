define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const strings = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $trim = dartx.trim;
  const $isNotEmpty = dartx.isNotEmpty;
  const $runes = dartx.runes;
  const $truncate = dartx.truncate;
  const $substring = dartx.substring;
  const $toLowerCase = dartx.toLowerCase;
  const $compareTo = dartx.compareTo;
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let StringAndint__ToString = () => (StringAndint__ToString = dart.constFn(dart.fnType(core.String, [core.String, core.int], [core.int])))();
  let StringBufferAndStringAndintTovoid = () => (StringBufferAndStringAndintTovoid = dart.constFn(dart.fnType(dart.void, [core.StringBuffer, core.String, core.int])))();
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  let StringAndintAndStringToString = () => (StringAndintAndStringToString = dart.constFn(dart.fnType(core.String, [core.String, core.int, core.String])))();
  let StringAndStringTobool = () => (StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))();
  let StringAndStringToint = () => (StringAndStringToint = dart.constFn(dart.fnType(core.int, [core.String, core.String])))();
  strings.isBlank = function(s) {
    return s == null || s[$trim]()[$isEmpty];
  };
  dart.fn(strings.isBlank, StringTobool());
  strings.isEmpty = function(s) {
    return s == null || s[$isEmpty];
  };
  dart.fn(strings.isEmpty, StringTobool());
  strings.isNotEmpty = function(s) {
    return s != null && s[$isNotEmpty];
  };
  dart.fn(strings.isNotEmpty, StringTobool());
  strings.reverse = function(s) {
    if (s == null || s === '') return s;
    let sb = new core.StringBuffer.new();
    let runes = s[$runes].iterator;
    runes.reset(s.length);
    while (dart.test(runes.movePrevious())) {
      sb.writeCharCode(runes.current);
    }
    return sb.toString();
  };
  dart.fn(strings.reverse, StringToString());
  strings.loop = function(s, from, to) {
    if (to === void 0) to = null;
    if (s == null || s === '') {
      dart.throw(new core.ArgumentError.new('Input string cannot be null or empty'));
    }
    if (to != null && dart.notNull(to) < dart.notNull(from)) {
      return strings.loop(strings.reverse(s), -dart.notNull(from), -dart.notNull(to));
    }
    let len = s.length;
    let leftFrag = dart.notNull(from) >= 0 ? (dart.notNull(from) / len)[$truncate]() : ((dart.notNull(from) - len) / len)[$truncate]();
    if (to == null) {
      to = (leftFrag + 1) * len;
    }
    let rightFrag = dart.notNull(to) - 1 >= 0 ? (dart.notNull(to) / len)[$truncate]() : ((dart.notNull(to) - len) / len)[$truncate]();
    let fragOffset = rightFrag - leftFrag - 1;
    if (fragOffset === -1) {
      return s[$substring](dart.notNull(from) - leftFrag * len, dart.notNull(to) - rightFrag * len);
    }
    let sink = new core.StringBuffer.new(s[$substring](dart.notNull(from) - leftFrag * len));
    strings._repeat(sink, s, fragOffset);
    sink.write(s[$substring](0, dart.notNull(to) - rightFrag * len));
    return sink.toString();
  };
  dart.fn(strings.loop, StringAndint__ToString());
  strings._repeat = function(sink, s, times) {
    for (let i = 0; i < dart.notNull(times); i++) {
      sink.write(s);
    }
  };
  dart.fn(strings._repeat, StringBufferAndStringAndintTovoid());
  strings.isDigit = function(rune) {
    return (dart.notNull(rune) ^ 48) >>> 0 <= 9;
  };
  dart.fn(strings.isDigit, intTobool());
  strings.isWhitespace = function(rune) {
    return dart.notNull(rune) >= 9 && dart.notNull(rune) <= 13 || rune === 32 || rune === 133 || rune === 160 || rune === 5760 || rune === 6158 || dart.notNull(rune) >= 8192 && dart.notNull(rune) <= 8202 || rune === 8232 || rune === 8233 || rune === 8239 || rune === 8287 || rune === 12288 || rune === 65279;
  };
  dart.fn(strings.isWhitespace, intTobool());
  strings.center = function(input, width, fill) {
    if (fill == null || fill.length === 0) {
      dart.throw(new core.ArgumentError.new('fill cannot be null or empty'));
    }
    if (input == null) input = '';
    if (input.length >= dart.notNull(width)) return input;
    let padding = dart.notNull(width) - input.length;
    if ((padding / 2)[$truncate]() > 0) {
      input = dart.notNull(strings.loop(fill, 0, (padding / 2)[$truncate]())) + dart.notNull(input);
    }
    return dart.notNull(input) + dart.notNull(strings.loop(fill, input.length - dart.notNull(width), 0));
  };
  dart.fn(strings.center, StringAndintAndStringToString());
  strings.equalsIgnoreCase = function(a, b) {
    return a == null && b == null || a != null && b != null && a[$toLowerCase]() === b[$toLowerCase]();
  };
  dart.fn(strings.equalsIgnoreCase, StringAndStringTobool());
  strings.compareIgnoreCase = function(a, b) {
    return a[$toLowerCase]()[$compareTo](b[$toLowerCase]());
  };
  dart.fn(strings.compareIgnoreCase, StringAndStringToint());
  dart.trackLibraries("packages/quiver/strings.ddc", {
    "package:quiver/strings.dart": strings
  }, '{"version":3,"sourceRoot":"","sources":["strings.dart"],"names":[],"mappings":"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","file":"strings.ddc.js"}');
  // Exports:
  return {
    strings: strings
  };
});

//# sourceMappingURL=strings.ddc.js.map
