define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__internal = Object.create(_root);
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let ListOfEToListOfE = () => (ListOfEToListOfE = dart.constFn(dart.gFnType(E => [core.List$(E), [core.List$(E)]])))();
  src__internal.freezeInDevMode = function(E, list) {
    if (list == null) return dart.constList([], E);
    if (!dart.test(dart.fn(() => {
      list = core.List$(E).unmodifiable(list);
      return true;
    }, VoidTobool())())) dart.assertFailed();
    return list;
  };
  dart.fn(src__internal.freezeInDevMode, ListOfEToListOfE());
  dart.trackLibraries("packages/observable/src/internal.ddc", {
    "package:observable/src/internal.dart": src__internal
  }, '{"version":3,"sourceRoot":"","sources":["internal.dart"],"names":[],"mappings":";;;;;;;;;8CAI2B,IAAY;AACrC,QAAI,IAAI,IAAI,MAAM,MAAO;AACzB,mBAAO;AACL,UAAI,GAAG,AAAI,0BAAoB,CAAC,IAAI;AACpC,YAAO;;AAET,UAAO,KAAI;EACb","file":"internal.ddc.js"}');
  // Exports:
  return {
    src__internal: src__internal
  };
});

//# sourceMappingURL=internal.ddc.js.map
