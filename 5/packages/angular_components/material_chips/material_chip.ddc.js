define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer', 'packages/intl/intl', 'packages/angular_components/focus/focus', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/utils/id_generator/id_generator'], function(dart_sdk, has_renderer, intl, focus, selection_model, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const intl$ = intl.intl;
  const focus__focus = focus.focus__focus;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const _root = Object.create(null);
  const material_chips__material_chip = Object.create(_root);
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  const _itemRenderer = Symbol('_itemRenderer');
  const _value = Symbol('_value');
  const _label = Symbol('_label');
  const _remove = Symbol('_remove');
  const _uuid = Symbol('_uuid');
  const _genLabel = Symbol('_genLabel');
  material_chips__material_chip.MaterialChipComponent = class MaterialChipComponent extends focus__focus.RootFocusable {
    get chipDeleteButtonMessage() {
      return intl$.Intl.message('Delete', {name: 'chipDeleteButtonMessage', desc: 'Label for a button which removes the item when clicked.', meaning: 'Label for a button which removes the item when clicked.'});
    }
    get selectionModel() {
      return this[selectionModel];
    }
    set selectionModel(value) {
      this[selectionModel] = value;
    }
    get removable() {
      return this[removable];
    }
    set removable(value) {
      this[removable] = value;
    }
    get hasLeftIcon() {
      return this[hasLeftIcon];
    }
    set hasLeftIcon(value) {
      this[hasLeftIcon] = value;
    }
    set itemRenderer(value) {
      this[_itemRenderer] = value;
      this[_genLabel]();
    }
    get itemRenderer() {
      return this[_itemRenderer];
    }
    set value(val) {
      this[_value] = val;
      this[_genLabel]();
    }
    get value() {
      return this[_value];
    }
    [_genLabel]() {
      if (this[_value] == null) {
        this[_label] = null;
      } else if (!(this[_itemRenderer] === model__ui__has_renderer.nullRenderer)) {
        this[_label] = dart.dcall(this.itemRenderer, this[_value]);
      }
    }
    get label() {
      return this[_label];
    }
    get remove() {
      return this[_remove].stream;
    }
    removeChip(event) {
      let t = this.selectionModel;
      t == null ? null : t.deselect(this.value);
      this[_remove].add(this.value);
      dart.dsend(event, 'preventDefault');
      dart.dsend(event, 'stopPropagation');
    }
    get uuid() {
      if (this[_uuid] == null) {
        this[_uuid] = material_chips__material_chip._idGenerator.nextId();
      }
      return this[_uuid];
    }
  };
  (material_chips__material_chip.MaterialChipComponent.new = function(root) {
    this[selectionModel] = null;
    this[removable] = true;
    this[hasLeftIcon] = false;
    this[_itemRenderer] = model__ui__has_renderer.nullRenderer;
    this[_value] = null;
    this[_label] = null;
    this[_remove] = async.StreamController.new({sync: true});
    this[_uuid] = null;
    material_chips__material_chip.MaterialChipComponent.__proto__.new.call(this, root);
  }).prototype = material_chips__material_chip.MaterialChipComponent.prototype;
  dart.addTypeTests(material_chips__material_chip.MaterialChipComponent);
  const selectionModel = Symbol("MaterialChipComponent.selectionModel");
  const removable = Symbol("MaterialChipComponent.removable");
  const hasLeftIcon = Symbol("MaterialChipComponent.hasLeftIcon");
  material_chips__material_chip.MaterialChipComponent[dart.implements] = () => [model__ui__has_renderer.HasRenderer];
  dart.setMethodSignature(material_chips__material_chip.MaterialChipComponent, () => ({
    __proto__: dart.getMethods(material_chips__material_chip.MaterialChipComponent.__proto__),
    [_genLabel]: dart.fnType(dart.void, []),
    removeChip: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_chips__material_chip.MaterialChipComponent, () => ({
    __proto__: dart.getGetters(material_chips__material_chip.MaterialChipComponent.__proto__),
    chipDeleteButtonMessage: dart.fnType(core.String, []),
    itemRenderer: dart.fnType(dart.fnType(core.String, [dart.dynamic]), []),
    value: dart.fnType(dart.dynamic, []),
    label: dart.fnType(core.String, []),
    remove: dart.fnType(async.Stream, []),
    uuid: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(material_chips__material_chip.MaterialChipComponent, () => ({
    __proto__: dart.getSetters(material_chips__material_chip.MaterialChipComponent.__proto__),
    itemRenderer: dart.fnType(dart.void, [dynamicToString()]),
    value: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_chips__material_chip.MaterialChipComponent, () => ({
    __proto__: dart.getFields(material_chips__material_chip.MaterialChipComponent.__proto__),
    selectionModel: dart.fieldType(model__selection__selection_model.SelectionModel),
    removable: dart.fieldType(core.bool),
    hasLeftIcon: dart.fieldType(core.bool),
    [_itemRenderer]: dart.fieldType(dynamicToString()),
    [_value]: dart.fieldType(dart.dynamic),
    [_label]: dart.fieldType(core.String),
    [_remove]: dart.finalFieldType(async.StreamController),
    [_uuid]: dart.fieldType(core.String)
  }));
  dart.defineLazy(material_chips__material_chip, {
    /*material_chips__material_chip._idGenerator*/get _idGenerator() {
      return new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID();
    }
  });
  dart.trackLibraries("packages/angular_components/material_chips/material_chip.ddc", {
    "package:angular_components/material_chips/material_chip.dart": material_chips__material_chip
  }, '{"version":3,"sourceRoot":"","sources":["material_chip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;YAiDwC,WAAI,QAAQ,CAAC,iBACzC,iCACA,oEACG;IAA0D;IAUxD;;;;;;IAIV;;;;;;IAIA;;;;;;qBAWY,KAAkB;AACjC,yBAAa,GAAG,KAAK;AACrB,qBAAS;IACX;;YAIiC,oBAAa;;cAOpC,GAAG;AACX,kBAAM,GAAG,GAAG;AACZ,qBAAS;IACX;;YAGqB,aAAM;;;AAIzB,UAAI,YAAM,IAAI,MAAM;AAClB,oBAAM,GAAG;YACJ,OAAK,AAAU,mBAAa,KAAE,oCAAY,GAAG;AAClD,oBAAM,cAAG,iBAAY,EAAC,YAAM;;IAEhC;;YAGoB,aAAM;;;YAIL,cAAO,OAAO;;eAGc,KAAK;AACpD,iCAAc;oCAAW,UAAK;AAC9B,mBAAO,IAAI,CAAC,UAAK;AACjB,sBAAK;AACL,sBAAK;IACP;;AAIE,UAAI,WAAK,IAAI,MAAM;AACjB,mBAAK,GAAG,0CAAY,OAAO;;AAE7B,YAAO,YAAK;IACd;;sEAtFsB,IAAY;IAenB,oBAAc;IAIxB,eAAS,GAAG;IAIZ,iBAAW,GAAG;IAgBN,mBAAa,GAAG,oCAAY;IAcjC,YAAM;IAYP,YAAM;IAMP,aAAO,GAAG,AAAI,0BAAyB,QAAO;IAS7C,WAAK;AAhF0B,iFAAM,IAAI;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAyF7C,0CAAY;YAAG,KAAI,gEAA8B","file":"material_chip.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chip: material_chips__material_chip
  };
});

//# sourceMappingURL=material_chip.ddc.js.map
