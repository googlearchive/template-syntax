define(['dart_sdk', 'packages/angular_components/utils/color/material', 'packages/angular_components/utils/color/color'], function(dart_sdk, material, color) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__color__material = material.utils__color__material;
  const utils__color__color = color.utils__color__color;
  const _root = Object.create(null);
  const utils__color__palette = Object.create(_root);
  dart.defineLazy(utils__color__palette, {
    /*utils__color__palette.chartingPalette*/get chartingPalette() {
      return dart.constList([utils__color__material.blue500, utils__color__material.red500, utils__color__material.yellow500, utils__color__material.green500, utils__color__material.purple400, utils__color__material.cyan600, utils__color__material.deepOrange400, utils__color__material.lime800, utils__color__material.indigo400, utils__color__material.pink300, utils__color__material.teal700, utils__color__material.pink700], utils__color__color.Color);
    }
  });
  dart.trackLibraries("packages/angular_components/utils/color/palette.ddc", {
    "package:angular_components/utils/color/palette.dart": utils__color__palette
  }, '{"version":3,"sourceRoot":"","sources":["palette.dart"],"names":[],"mappings":";;;;;;;;;;MAQM,qCAAe;YAAG,iBACtB,8BAAO,EACP,6BAAM,EACN,gCAAS,EACT,+BAAQ,EACR,gCAAS,EACT,8BAAO,EACP,oCAAa,EACb,8BAAO,EACP,gCAAS,EACT,8BAAO,EACP,8BAAO,EACP,8BAAO","file":"palette.ddc.js"}');
  // Exports:
  return {
    utils__color__palette: utils__color__palette
  };
});

//# sourceMappingURL=palette.ddc.js.map
