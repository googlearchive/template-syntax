define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_select/material_select_item', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, has_renderer, material_select_item, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const material_select__material_select_item = material_select_item.material_select__material_select_item;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const material_select__material_select_dropdown_item = Object.create(_root);
  material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent = class MaterialSelectDropdownItemComponent extends material_select__material_select_item.MaterialSelectItemComponent {
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    preventTextSelectionIfShiftKey(e) {
      if (dart.test(e.shiftKey)) e.preventDefault();
    }
  };
  (material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.new = function(element, domService, role, dropdown, activationHandler, cdRef) {
    this[role$] = role != null ? role : 'button';
    material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.__proto__.new.call(this, element, domService, dropdown, activationHandler, cdRef);
    this.itemRenderer = model__ui__has_renderer.defaultItemRenderer;
  }).prototype = material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.prototype;
  dart.addTypeTests(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent);
  const role$ = Symbol("MaterialSelectDropdownItemComponent.role");
  material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent, () => ({
    __proto__: dart.getMethods(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.__proto__),
    preventTextSelectionIfShiftKey: dart.fnType(dart.void, [html.MouseEvent])
  }));
  dart.setFieldSignature(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent, () => ({
    __proto__: dart.getFields(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.__proto__),
    role: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/material_select/material_select_dropdown_item.ddc", {
    "package:angular_components/material_select/material_select_dropdown_item.dart": material_select__material_select_dropdown_item
  }, '{"version":3,"sourceRoot":"","sources":["material_select_dropdown_item.dart"],"names":[],"mappings":";;;;;;;;;;;;IAyDe;;;;;;mCAcuB,CAAY;AAC9C,oBAAI,CAAC,SAAS,GAAE,CAAC,eAAe;IAClC;;qGAbI,OAAmB,EACnB,UAAqB,EACrB,IAA8B,EAC9B,QAAmC,EACnC,iBAA+C,EAC/C,KAAuB;IAChB,WAAI,GAAG,IAAI,WAAJ,IAAI,GAAI;AACpB,gHAAM,OAAO,EAAE,UAAU,EAAE,QAAQ,EAAE,iBAAiB,EAAE,KAAK;AACjE,qBAAiB,GAAG,2CAAmB;EACzC","file":"material_select_dropdown_item.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_dropdown_item: material_select__material_select_dropdown_item
  };
});

//# sourceMappingURL=material_select_dropdown_item.ddc.js.map
