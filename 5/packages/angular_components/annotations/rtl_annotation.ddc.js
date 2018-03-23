define(['dart_sdk', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/di/providers'], function(dart_sdk, opaque_token, providers) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__di__providers = providers.src__di__providers;
  const _root = Object.create(null);
  const annotations__rtl_annotation = Object.create(_root);
  let DocumentTobool = () => (DocumentTobool = dart.constFn(dart.fnType(core.bool, [html.Document])))();
  dart.defineLazy(annotations__rtl_annotation, {
    /*annotations__rtl_annotation.rtlToken*/get rtlToken() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('isRtl'));
    },
    /*annotations__rtl_annotation.rtlProvider*/get rtlProvider() {
      return dart.const(src__di__providers.Provider.new(annotations__rtl_annotation.rtlToken, {useFactory: annotations__rtl_annotation.determineRtl, deps: dart.constList([dart.wrapType(html.Document)], core.Object)}));
    }
  });
  annotations__rtl_annotation.determineRtl = function(document) {
    return document.documentElement.dir === 'rtl' || html.HtmlDocument.as(document).body.dir === 'rtl';
  };
  dart.fn(annotations__rtl_annotation.determineRtl, DocumentTobool());
  dart.trackLibraries("packages/angular_components/annotations/rtl_annotation.ddc", {
    "package:angular_components/annotations/rtl_annotation.dart": annotations__rtl_annotation
  }, '{"version":3,"sourceRoot":"","sources":["rtl_annotation.dart"],"names":[],"mappings":";;;;;;;;;;;;MAcM,oCAAQ;YAAG,gBAAM,2CAAW,CAAC;;MAE7B,uCAAW;YACb,YAAM,+BAAQ,CAAC,oCAAQ,eAAc,wCAAY,QAAQ,gBAAO,4BAAQ;;;sDAG1D,QAAiB;UAC/B,AAAsC,SAA9B,gBAAgB,IAAI,KAAI,SAChC,qBAAC,QAAQ,MAAsB,IAAI,KAAI;EAAK","file":"rtl_annotation.ddc.js"}');
  // Exports:
  return {
    annotations__rtl_annotation: annotations__rtl_annotation
  };
});

//# sourceMappingURL=rtl_annotation.ddc.js.map
