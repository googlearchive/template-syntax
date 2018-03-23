define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/accepts_width'], function(dart_sdk, selection_model, properties, has_renderer, selection_container, accepts_width) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__accepts_width = accepts_width.model__ui__accepts_width;
  const _root = Object.create(null);
  const material_select__material_select_base = Object.create(_root);
  const _width = Symbol('_width');
  material_select__material_select_base.MaterialSelectBase = class MaterialSelectBase extends model__selection__selection_container.SelectionContainer {
    get isMultiSelect() {
      return model__selection__selection_model.MultiSelectionModel.is(this.selection);
    }
    get isSingleSelect() {
      return !dart.test(this.isMultiSelect);
    }
    get width() {
      return this[_width];
    }
    set width(val) {
      this[_width] = utils__angular__properties__properties.getInt(val, {defaultValue: 0});
      if (!(dart.notNull(this[_width]) >= 0 && dart.notNull(this[_width]) <= 5)) dart.assertFailed();
    }
    get itemRenderer() {
      let l = super.itemRenderer;
      return l != null ? l : model__ui__has_renderer.defaultItemRenderer;
    }
    set itemRenderer(value) {
      super.itemRenderer = value;
    }
  };
  (material_select__material_select_base.MaterialSelectBase.new = function() {
    this[_width] = 0;
    material_select__material_select_base.MaterialSelectBase.__proto__.new.call(this);
  }).prototype = material_select__material_select_base.MaterialSelectBase.prototype;
  dart.addTypeTests(material_select__material_select_base.MaterialSelectBase);
  material_select__material_select_base.MaterialSelectBase[dart.implements] = () => [model__ui__accepts_width.AcceptsWidth];
  dart.setGetterSignature(material_select__material_select_base.MaterialSelectBase, () => ({
    __proto__: dart.getGetters(material_select__material_select_base.MaterialSelectBase.__proto__),
    isMultiSelect: dart.fnType(core.bool, []),
    isSingleSelect: dart.fnType(core.bool, []),
    width: dart.fnType(core.int, []),
    itemRenderer: dart.fnType(dart.fnType(core.String, [dart.dynamic]), [])
  }));
  dart.setSetterSignature(material_select__material_select_base.MaterialSelectBase, () => ({
    __proto__: dart.getSetters(material_select__material_select_base.MaterialSelectBase.__proto__),
    width: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_select__material_select_base.MaterialSelectBase, () => ({
    __proto__: dart.getFields(material_select__material_select_base.MaterialSelectBase.__proto__),
    [_width]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/angular_components/material_select/material_select_base.ddc", {
    "package:angular_components/material_select/material_select_base.dart": material_select__material_select_base
  }, '{"version":3,"sourceRoot":"","sources":["material_select_base.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;sEAuB4B,cAAS;IAAuB;;YAC/B,YAAC,kBAAa;;;YAQxB,aAAM;;cACb,GAAG;AACX,kBAAM,GAAG,6CAAM,CAAC,GAAG,iBAAgB;AACnC,YAAc,AAAK,aAAZ,YAAM,KAAI,KAAY,aAAP,YAAM,KAAI;IAClC;;cAKiC,kBAAkB;6BAAI,2CAAmB;;;;;;;IAHtE,YAAM,GAAG;;EAIf","file":"material_select_base.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_base: material_select__material_select_base
  };
});

//# sourceMappingURL=material_select_base.ddc.js.map
