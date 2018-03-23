define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils = Object.create(_root);
  const $leftShift = dartx['<<'];
  const $rightShift = dartx['>>'];
  let intAndintToint = () => (intAndintToint = dart.constFn(dart.fnType(core.int, [core.int, core.int])))();
  dart.defineLazy(src__utils, {
    /*src__utils.mask32*/get mask32() {
      return 4294967295;
    },
    /*src__utils.bitsPerByte*/get bitsPerByte() {
      return 8;
    },
    /*src__utils.bytesPerWord*/get bytesPerWord() {
      return 4;
    }
  });
  src__utils.add32 = function(x, y) {
    return (dart.notNull(x) + dart.notNull(y) & 4294967295) >>> 0;
  };
  dart.fn(src__utils.add32, intAndintToint());
  src__utils.rotl32 = function(val, shift) {
    let modShift = dart.notNull(shift) & 31;
    return (val[$leftShift](modShift) & 4294967295 | ((dart.notNull(val) & 4294967295) >>> 0)[$rightShift](32 - modShift)) >>> 0;
  };
  dart.fn(src__utils.rotl32, intAndintToint());
  dart.trackLibraries("packages/crypto/src/utils.ddc", {
    "package:crypto/src/utils.dart": src__utils
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;MAKM,iBAAM;YAAG;;MAGT,sBAAW;YAAG;;MAGd,uBAAY;YAAG;;;8BAGX,CAAK,EAAE,CAAK;UAAK,EAAG,AAAK,aAAP,CAAC,iBAAG,CAAC,IAAI,UAAM;;;+BAIhC,GAAO,EAAE,KAAS;AAC3B,QAAI,WAAiB,aAAN,KAAK,IAAG;AACvB,UAAO,EAAE,AAAI,AAAa,AAAU,GAAxB,aAAI,QAAQ,IAAI,UAAM,GAAoB,CAAd,CAAI,aAAJ,GAAG,IAAG,UAAM,sBAAM,AAAG,KAAE,QAAQ;EACzE","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: src__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
