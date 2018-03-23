define(['dart_sdk', 'packages/angular/src/di/providers'], function(dart_sdk, providers) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__providers = providers.src__di__providers;
  const _root = Object.create(null);
  const utils__browser__window__module = Object.create(_root);
  const $location = dartx.location;
  let VoidToDocument = () => (VoidToDocument = dart.constFn(dart.fnType(html.Document, [])))();
  let VoidToWindow = () => (VoidToWindow = dart.constFn(dart.fnType(html.Window, [])))();
  let WindowToLocation = () => (WindowToLocation = dart.constFn(dart.fnType(html.Location, [html.Window])))();
  utils__browser__window__module.getDocument = function() {
    return html.document;
  };
  dart.fn(utils__browser__window__module.getDocument, VoidToDocument());
  utils__browser__window__module.getWindow = function() {
    return html.window;
  };
  dart.fn(utils__browser__window__module.getWindow, VoidToWindow());
  dart.defineLazy(utils__browser__window__module, {
    /*utils__browser__window__module.windowBindings*/get windowBindings() {
      return dart.constList([dart.const(src__di__providers.Provider.new(dart.wrapType(html.Document), {useFactory: utils__browser__window__module.getDocument})), dart.const(src__di__providers.Provider.new(dart.wrapType(html.Window), {useFactory: utils__browser__window__module.getWindow}))], src__di__providers.Provider);
    }
  });
  utils__browser__window__module.getLocation = function(window) {
    return window[$location];
  };
  dart.fn(utils__browser__window__module.getLocation, WindowToLocation());
  dart.defineLazy(utils__browser__window__module, {
    /*utils__browser__window__module.locationBindings*/get locationBindings() {
      return dart.constList([dart.const(src__di__providers.Provider.new(dart.wrapType(html.Location), {useFactory: utils__browser__window__module.getLocation}))], src__di__providers.Provider);
    }
  });
  dart.trackLibraries("packages/angular_components/utils/browser/window/module.ddc", {
    "package:angular_components/utils/browser/window/module.dart": utils__browser__window__module
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;UAc0B,cAAQ;;;;UAMZ,YAAM;;;;MAOtB,6CAAc;YAAG,iBAGrB,WAAM,+BAAQ,CAAC,4BAAQ,eAAc,0CAAW,KAChD,WAAM,+BAAQ,CAAC,0BAAM,eAAc,wCAAS;;;wDAWzB,MAAa;UAAK,OAAM,WAAS;;;;MAGhD,+CAAgB;YAAG,iBACvB,WAAM,+BAAQ,CAAC,4BAAQ,eAAc,0CAAW","file":"module.ddc.js"}');
  // Exports:
  return {
    utils__browser__window__module: utils__browser__window__module
  };
});

//# sourceMappingURL=module.ddc.js.map
