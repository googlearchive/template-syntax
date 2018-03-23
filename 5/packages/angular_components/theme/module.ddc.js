define(['dart_sdk', 'packages/angular/src/core/di/opaque_token'], function(dart_sdk, opaque_token) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const _root = Object.create(null);
  const theme__module = Object.create(_root);
  dart.defineLazy(theme__module, {
    /*theme__module.darkThemeToken*/get darkThemeToken() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('acxDarkTheme'));
    }
  });
  dart.trackLibraries("packages/angular_components/theme/module.ddc", {
    "package:angular_components/theme/module.dart": theme__module
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;MAOM,4BAAc;YAAG,gBAAM,2CAAW,CAAC","file":"module.ddc.js"}');
  // Exports:
  return {
    theme__module: theme__module
  };
});

//# sourceMappingURL=module.ddc.js.map
