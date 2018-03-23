define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const model__ui__template_support = Object.create(_root);
  let numAnddynamicTonum = () => (numAnddynamicTonum = dart.constFn(dart.fnType(core.num, [core.num, dart.dynamic])))();
  dart.defineLazy(model__ui__template_support, {
    /*model__ui__template_support.indexIdentityFn*/get indexIdentityFn() {
      return dart.fn((index, _) => index, numAnddynamicTonum());
    }
  });
  dart.trackLibraries("packages/angular_components/model/ui/template_support.ddc", {
    "package:angular_components/model/ui/template_support.dart": model__ui__template_support
  }, '{"version":3,"sourceRoot":"","sources":["template_support.dart"],"names":[],"mappings":";;;;;;;;;MAQgB,2CAAe;YAAG,UAAC,KAAS,EAAE,CAAS,KAAK,KAAK","file":"template_support.ddc.js"}');
  // Exports:
  return {
    model__ui__template_support: model__ui__template_support
  };
});

//# sourceMappingURL=template_support.ddc.js.map
