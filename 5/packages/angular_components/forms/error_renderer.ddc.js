define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const forms__error_renderer = Object.create(_root);
  const $keys = dartx.keys;
  const $containsKey = dartx.containsKey;
  const $_set = dartx._set;
  const $_get = dartx._get;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let MapOfString$dynamicToMapOfString$dynamic = () => (MapOfString$dynamicToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [MapOfString$dynamic()])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let MapOfString$StringToFn = () => (MapOfString$StringToFn = dart.constFn(dart.fnType(MapOfString$dynamicToMapOfString$dynamic(), [MapOfString$String()])))();
  let MapOfString$StringAndMapOfString$dynamicToMapOfString$dynamic = () => (MapOfString$StringAndMapOfString$dynamicToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [MapOfString$String(), MapOfString$dynamic()])))();
  forms__error_renderer.ErrorFn = dart.typedef('ErrorFn', () => dart.fnType(core.Map$(core.String, dart.dynamic), [MapOfString$dynamic()]));
  forms__error_renderer.replaceErrors = function(overrides) {
    return dart.fn(errors => forms__error_renderer._replaceErrorsImpl(overrides, errors), MapOfString$dynamicToMapOfString$dynamic());
  };
  dart.fn(forms__error_renderer.replaceErrors, MapOfString$StringToFn());
  forms__error_renderer._replaceErrorsImpl = function(overrides, errors) {
    let result = MapOfString$dynamic().from(errors);
    for (let error of errors[$keys]) {
      if (dart.test(overrides[$containsKey](error))) result[$_set](error, overrides[$_get](error));
    }
    return result;
  };
  dart.fn(forms__error_renderer._replaceErrorsImpl, MapOfString$StringAndMapOfString$dynamicToMapOfString$dynamic());
  dart.trackLibraries("packages/angular_components/forms/error_renderer.ddc", {
    "package:angular_components/forms/error_renderer.dart": forms__error_renderer
  }, '{"version":3,"sourceRoot":"","sources":["error_renderer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;iDAUsB,SAA6B;UAC/C,SAAC,MAAM,IAAK,wCAAkB,CAAC,SAAS,EAAE,MAAM;EAAC;;sDAGjD,SAA6B,EAAE,MAA2B;AAC5D,QAAM,SAAS,AAAI,0BAAyB,CAAC,MAAM;AACnD,aAAS,QAAS,OAAM,OAAK,EAAE;AAC7B,oBAAI,SAAS,cAAY,CAAC,KAAK,IAAG,MAAM,QAAC,KAAK,EAAI,SAAS,QAAC,KAAK;;AAEnE,UAAO,OAAM;EACf","file":"error_renderer.ddc.js"}');
  // Exports:
  return {
    forms__error_renderer: forms__error_renderer
  };
});

//# sourceMappingURL=error_renderer.ddc.js.map
