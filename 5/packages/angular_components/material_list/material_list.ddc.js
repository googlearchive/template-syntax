define(['dart_sdk', 'packages/angular_components/material_list/material_list_size', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/ui/accepts_width'], function(dart_sdk, material_list_size, properties, accepts_width) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_list__material_list_size = material_list_size.material_list__material_list_size;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const model__ui__accepts_width = accepts_width.model__ui__accepts_width;
  const _root = Object.create(null);
  const material_list__material_list = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  material_list__material_list.MaterialListComponent = class MaterialListComponent extends core.Object {
    get size() {
      return this[size];
    }
    set size(value) {
      this[size] = value;
    }
    set width(val) {
      val = utils__angular__properties__properties.getInt(val);
      if (dart.dtest(dart.dsend(val, '>=', 0)) && dart.dtest(dart.dsend(val, '<', material_list__material_list_size.MaterialListSize.values[$length]))) {
        this.size = material_list__material_list_size.MaterialListSize.values[$_get](core.int._check(val));
      }
    }
  };
  (material_list__material_list.MaterialListComponent.new = function() {
    this[size] = material_list__material_list_size.MaterialListSize.auto;
  }).prototype = material_list__material_list.MaterialListComponent.prototype;
  dart.addTypeTests(material_list__material_list.MaterialListComponent);
  const size = Symbol("MaterialListComponent.size");
  material_list__material_list.MaterialListComponent[dart.implements] = () => [model__ui__accepts_width.AcceptsWidth];
  dart.setSetterSignature(material_list__material_list.MaterialListComponent, () => ({
    __proto__: dart.getSetters(material_list__material_list.MaterialListComponent.__proto__),
    width: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_list__material_list.MaterialListComponent, () => ({
    __proto__: dart.getFields(material_list__material_list.MaterialListComponent.__proto__),
    size: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/material_list/material_list.ddc", {
    "package:angular_components/material_list/material_list.dart": material_list__material_list
  }, '{"version":3,"sourceRoot":"","sources":["material_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;IA8ES;;;;;;cAUG,GAAG;AACX,SAAG,GAAG,6CAAM,CAAC,GAAG;AAChB,qBAAQ,WAAJ,GAAG,QAAI,kBAAS,WAAJ,GAAG,OAAG,kDAAgB,OAAO,SAAO,IAAE;AACpD,iBAAI,GAAG,kDAAgB,OAAO,wBAAC,GAAG;;IAEtC;;;IAfO,UAAI,GAAG,kDAAgB,KAAK;EAgBrC","file":"material_list.ddc.js"}');
  // Exports:
  return {
    material_list__material_list: material_list__material_list
  };
});

//# sourceMappingURL=material_list.ddc.js.map
