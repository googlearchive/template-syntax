define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/display_name'], function(dart_sdk, has_renderer, display_name) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__ui__display_name = display_name.model__ui__display_name;
  const _root = Object.create(null);
  const material_select__display_name = Object.create(_root);
  let HasRendererTovoid = () => (HasRendererTovoid = dart.constFn(dart.fnType(dart.void, [model__ui__has_renderer.HasRenderer])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  material_select__display_name.displayNameRendererDirective = function(hasRenderer) {
    if (hasRenderer != null) hasRenderer.itemRenderer = material_select__display_name._displayNameRenderer;
  };
  dart.fn(material_select__display_name.displayNameRendererDirective, HasRendererTovoid());
  dart.defineLazy(material_select__display_name, {
    /*material_select__display_name._displayNameRenderer*/get _displayNameRenderer() {
      return dart.fn(item => model__ui__display_name.HasUIDisplayName.as(item).uiDisplayName, dynamicToString());
    }
  });
  dart.trackLibraries("packages/angular_components/material_select/display_name.ddc", {
    "package:angular_components/material_select/display_name.dart": material_select__display_name
  }, '{"version":3,"sourceRoot":"","sources":["display_name.dart"],"names":[],"mappings":";;;;;;;;;;;wEAWkC,WAAuB;AACvD,QAAI,WAAW,IAAI,MAAM,WAAW,aAAa,GAAG,kDAAoB;EAC1E;;;MAEM,kDAAoB;YACtB,SAAC,IAAY,gDAAM,IAAI,eAAmC","file":"display_name.ddc.js"}');
  // Exports:
  return {
    material_select__display_name: material_select__display_name
  };
});

//# sourceMappingURL=display_name.ddc.js.map
