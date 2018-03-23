define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const utils__keyboard__keyboard = Object.create(_root);
  let KeyboardEvent__Tobool = () => (KeyboardEvent__Tobool = dart.constFn(dart.fnType(core.bool, [html.KeyboardEvent], {shiftKey: core.bool, ctrlKey: core.bool, altKey: core.bool, metaKey: core.bool})))();
  utils__keyboard__keyboard.modifiersKeysFor = function(event, opts) {
    let shiftKey = opts && 'shiftKey' in opts ? opts.shiftKey : false;
    let ctrlKey = opts && 'ctrlKey' in opts ? opts.ctrlKey : false;
    let altKey = opts && 'altKey' in opts ? opts.altKey : false;
    let metaKey = opts && 'metaKey' in opts ? opts.metaKey : false;
    return event.shiftKey == shiftKey && event.altKey == altKey && event.ctrlKey == ctrlKey && event.metaKey == metaKey;
  };
  dart.fn(utils__keyboard__keyboard.modifiersKeysFor, KeyboardEvent__Tobool());
  dart.trackLibraries("packages/angular_components/utils/keyboard/keyboard.ddc", {
    "package:angular_components/utils/keyboard/keyboard.dart": utils__keyboard__keyboard
  }, '{"version":3,"sourceRoot":"","sources":["keyboard.dart"],"names":[],"mappings":";;;;;;;;;wDAWsB,KAAmB;QAC/B,wDAAU;QACX,qDAAS;QACT,kDAAQ;QACR,qDAAS;AAChB,UAAQ,AAEuB,MAFlB,SAAS,IAAI,QAAQ,IAC7B,KAAK,OAAO,IAAI,MAAM,IACtB,KAAK,QAAQ,IAAI,OAAO,IACxB,KAAK,QAAQ,IAAI,OAAO;EAC/B","file":"keyboard.ddc.js"}');
  // Exports:
  return {
    utils__keyboard__keyboard: utils__keyboard__keyboard
  };
});

//# sourceMappingURL=keyboard.ddc.js.map
