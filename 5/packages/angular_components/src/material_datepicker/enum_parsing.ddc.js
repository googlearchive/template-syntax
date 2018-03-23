define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__material_datepicker__enum_parsing = Object.create(_root);
  const $replaceAll = dartx.replaceAll;
  const $toUpperCase = dartx.toUpperCase;
  const $toString = dartx.toString;
  const $firstWhere = dartx.firstWhere;
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let ListAndStringTodynamic = () => (ListAndStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.List, core.String])))();
  src__material_datepicker__enum_parsing.fuzzyParseEnum = function(values, val) {
    let valAsRegex = val[$toUpperCase]()[$replaceAll]('.', '\\.')[$replaceAll](core.RegExp.new('[_-]'), '[-_]');
    let regex = core.RegExp.new(valAsRegex + '$');
    return values[$firstWhere](dart.fn(v => regex.hasMatch(dart.toString(v)[$toUpperCase]()), dynamicTobool()));
  };
  dart.fn(src__material_datepicker__enum_parsing.fuzzyParseEnum, ListAndStringTodynamic());
  dart.trackLibraries("packages/angular_components/src/material_datepicker/enum_parsing.ddc", {
    "package:angular_components/src/material_datepicker/enum_parsing.dart": src__material_datepicker__enum_parsing
  }, '{"version":3,"sourceRoot":"","sources":["enum_parsing.dart"],"names":[],"mappings":";;;;;;;;;;;;;mEAQuB,MAAW,EAAE,GAAU;AAC5C,QAAI,aAAa,GAAG,cACJ,eACD,CAAC,KAAK,mBACN,CAAC,AAAI,eAAM,CAAC,SAAU;AACrC,QAAI,QAAQ,AAAI,eAAM,CAAC,AAAW,UAAD,GAAG;AACpC,UAAO,OAAM,aAAW,CAAC,QAAC,CAAC,IAAK,KAAK,SAAS,eAAC,CAAC,eAAuB;EACzE","file":"enum_parsing.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__enum_parsing: src__material_datepicker__enum_parsing
  };
});

//# sourceMappingURL=enum_parsing.ddc.js.map
