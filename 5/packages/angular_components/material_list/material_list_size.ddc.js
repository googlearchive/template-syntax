define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const material_list__material_list_size = Object.create(_root);
  let const$;
  material_list__material_list_size.MaterialListSize = class MaterialListSize extends core.Object {
    static get values() {
      return const$ || (const$ = dart.constList(["auto", "x-small", "small", "medium", "large", "x-large"], core.String));
    }
  };
  (material_list__material_list_size.MaterialListSize.new = function() {
  }).prototype = material_list__material_list_size.MaterialListSize.prototype;
  dart.addTypeTests(material_list__material_list_size.MaterialListSize);
  dart.defineLazy(material_list__material_list_size.MaterialListSize, {
    /*material_list__material_list_size.MaterialListSize.auto*/get auto() {
      return 'auto';
    },
    /*material_list__material_list_size.MaterialListSize.xSmall*/get xSmall() {
      return 'x-small';
    },
    /*material_list__material_list_size.MaterialListSize.small*/get small() {
      return 'small';
    },
    /*material_list__material_list_size.MaterialListSize.medium*/get medium() {
      return 'medium';
    },
    /*material_list__material_list_size.MaterialListSize.large*/get large() {
      return 'large';
    },
    /*material_list__material_list_size.MaterialListSize.xLarge*/get xLarge() {
      return 'x-large';
    }
  });
  dart.trackLibraries("packages/angular_components/material_list/material_list_size.ddc", {
    "package:angular_components/material_list/material_list_size.dart": material_list__material_list_size
  }, '{"version":3,"sourceRoot":"","sources":["material_list_size.dart"],"names":[],"mappings":";;;;;;;;;;YAcM,qCAAe,MAAI,EAAE,SAAM,EAAE,OAAK,EAAE,QAAM,EAAE,OAAK,EAAE,SAAM;IAAC;;;EAChE;;;MARsB,uDAAI;YAAG;;MACP,yDAAM;YAAG;;MACT,wDAAK;YAAG;;MACR,yDAAM;YAAG;;MACT,wDAAK;YAAG;;MACR,yDAAM;YAAG","file":"material_list_size.ddc.js"}');
  // Exports:
  return {
    material_list__material_list_size: material_list__material_list_size
  };
});

//# sourceMappingURL=material_list_size.ddc.js.map
