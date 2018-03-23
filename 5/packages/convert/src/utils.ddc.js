define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils = Object.create(_root);
  const $_get = dartx._get;
  const $padLeft = dartx.padLeft;
  const $toRadixString = dartx.toRadixString;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfintAndintToint = () => (ListOfintAndintToint = dart.constFn(dart.fnType(core.int, [ListOfint(), core.int])))();
  src__utils.digitForCodeUnit = function(codeUnits, index) {
    let codeUnit = codeUnits[$_get](index);
    let digit = (48 ^ dart.notNull(codeUnit)) >>> 0;
    if (digit <= 9) {
      if (digit >= 0) return digit;
    } else {
      let letter = (32 | dart.notNull(codeUnit)) >>> 0;
      if (97 <= letter && letter <= 102) return letter - 97 + 10;
    }
    dart.throw(new core.FormatException.new("Invalid hexadecimal code unit " + dart.str`U+${codeUnit[$toRadixString](16)[$padLeft](4, '0')}.`, codeUnits, index));
  };
  dart.fn(src__utils.digitForCodeUnit, ListOfintAndintToint());
  dart.trackLibraries("packages/convert/src/utils.ddc", {
    "package:convert/src/utils.dart": src__utils
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;yCAYqB,SAAmB,EAAE,KAAS;AAQjD,QAAI,WAAW,SAAS,QAAC,KAAK;AAC9B,QAAI,QAAQ,CAAA,AAAG,EAAD,gBAAG,QAAQ;AACzB,QAAI,AAAM,KAAD,IAAI,GAAG;AACd,UAAI,AAAM,KAAD,IAAI,GAAG,MAAO,MAAK;WACvB;AAKL,UAAI,SAAS,CAAA,AAAK,kBAAE,QAAQ;AAC5B,UAAI,AAAG,EAAD,IAAI,MAAM,IAAI,AAAO,MAAD,IAAI,GAAE,EAAE,MAAO,AAAO,AAAK,OAAN,GAAG,EAAE,GAAG;;AAGzD,eAAM,IAAI,wBAAe,CACrB,mCACI,aAAK,QAAQ,gBAAc,CAAC,aAAW,CAAC,GAAG,SAC/C,SAAS,EAAE,KAAK;EACtB","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: src__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
