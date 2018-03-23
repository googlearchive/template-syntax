define(['dart_sdk', 'packages/angular_components/model/ui/template_support', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/material_select/material_select_base', 'packages/angular_components/model/selection/selection_options', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/selection/selection_container'], function(dart_sdk, template_support, selectable, properties, material_select_base, selection_options, app_view, selection_model, selection_container) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__template_support = template_support.model__ui__template_support;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const material_select__material_select_base = material_select_base.material_select__material_select_base;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const _root = Object.create(null);
  const material_select__material_select = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicToType = () => (dynamicToType = dart.constFn(dart.fnType(core.Type, [dart.dynamic])))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let ListOfSelectionItem = () => (ListOfSelectionItem = dart.constFn(core.List$(model__selection__selection_container.SelectionItem)))();
  const _selectItems = Symbol('_selectItems');
  const _disabled = Symbol('_disabled');
  const _itemRenderer = Symbol('_itemRenderer');
  const _refreshItems = Symbol('_refreshItems');
  material_select__material_select.MaterialSelectComponent = class MaterialSelectComponent extends material_select__material_select_base.MaterialSelectBase {
    get trackByIndexFn() {
      return this[trackByIndexFn];
    }
    set trackByIndexFn(value) {
      super.trackByIndexFn = value;
    }
    set options(value) {
      super.options = value;
    }
    get options() {
      return super.options;
    }
    set width(value) {
      super.width = value;
    }
    get width() {
      return super.width;
    }
    set componentRenderer(value) {
      super.componentRenderer = value;
    }
    get componentRenderer() {
      return super.componentRenderer;
    }
    set factoryRenderer(value) {
      super.factoryRenderer = value;
    }
    get factoryRenderer() {
      return super.factoryRenderer;
    }
    set selection(value) {
      super.selection = value;
      this[_refreshItems]();
    }
    get selection() {
      return super.selection;
    }
    isOptionDisabled(item) {
      if (src__model__selection__interfaces__selectable.Selectable.is(this.options)) {
        return src__model__selection__interfaces__selectable.Selectable.as(this.options).getSelectable(item) !== src__model__selection__interfaces__selectable.SelectableOption.Selectable;
      }
      return false;
    }
    set disabled(value) {
      this[_disabled] = utils__angular__properties__properties.getBool(value);
    }
    get disabled() {
      return this[_disabled];
    }
    get disabledStr() {
      return dart.str`${this[_disabled]}`;
    }
    get itemRenderer() {
      return this[_itemRenderer];
    }
    set itemRenderer(value) {
      this[_itemRenderer] = value;
      this[_refreshItems]();
    }
    set selectItems(value) {
      if (value != null) {
        async.scheduleMicrotask(dart.fn(() => {
          this[_selectItems] = value;
          this[_refreshItems]();
        }, VoidToNull()));
      }
    }
    [_refreshItems]() {
      if (this[_selectItems] == null) return;
      if (this.selection != null) {
        for (let item of this[_selectItems]) {
          item.selection = this.selection;
        }
      }
      if (this.itemRenderer != null) {
        for (let item of this[_selectItems]) {
          item.itemRenderer = this.itemRenderer;
        }
      }
    }
  };
  (material_select__material_select.MaterialSelectComponent.new = function() {
    this[_selectItems] = null;
    this[trackByIndexFn] = model__ui__template_support.indexIdentityFn;
    this[_disabled] = false;
    this[_itemRenderer] = null;
    material_select__material_select.MaterialSelectComponent.__proto__.new.call(this);
  }).prototype = material_select__material_select.MaterialSelectComponent.prototype;
  dart.addTypeTests(material_select__material_select.MaterialSelectComponent);
  const trackByIndexFn = Symbol("MaterialSelectComponent.trackByIndexFn");
  dart.setMethodSignature(material_select__material_select.MaterialSelectComponent, () => ({
    __proto__: dart.getMethods(material_select__material_select.MaterialSelectComponent.__proto__),
    isOptionDisabled: dart.fnType(core.bool, [core.Object]),
    [_refreshItems]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_select__material_select.MaterialSelectComponent, () => ({
    __proto__: dart.getGetters(material_select__material_select.MaterialSelectComponent.__proto__),
    selection: dart.fnType(model__selection__selection_model.SelectionModel, []),
    disabled: dart.fnType(core.bool, []),
    disabledStr: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(material_select__material_select.MaterialSelectComponent, () => ({
    __proto__: dart.getSetters(material_select__material_select.MaterialSelectComponent.__proto__),
    options: dart.fnType(dart.void, [model__selection__selection_options.SelectionOptions]),
    componentRenderer: dart.fnType(dart.void, [dynamicToType()]),
    factoryRenderer: dart.fnType(dart.void, [dynamicToComponentFactory()]),
    selection: dart.fnType(dart.void, [model__selection__selection_model.SelectionModel]),
    disabled: dart.fnType(dart.void, [dart.dynamic]),
    itemRenderer: dart.fnType(dart.void, [dynamicToString()]),
    selectItems: dart.fnType(dart.void, [ListOfSelectionItem()])
  }));
  dart.setFieldSignature(material_select__material_select.MaterialSelectComponent, () => ({
    __proto__: dart.getFields(material_select__material_select.MaterialSelectComponent.__proto__),
    [_selectItems]: dart.fieldType(ListOfSelectionItem()),
    trackByIndexFn: dart.finalFieldType(core.Function),
    [_disabled]: dart.fieldType(core.bool),
    [_itemRenderer]: dart.fieldType(dynamicToString())
  }));
  dart.trackLibraries("packages/angular_components/material_select/material_select.ddc", {
    "package:angular_components/material_select/material_select.dart": material_select__material_select
  }, '{"version":3,"sourceRoot":"","sources":["material_select.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IA2DiB;;;;;;gBAMH,KAAsB;AAChC,mBAAa,GAAG,KAAK;IACvB;;;;cAIU,KAAK;AACb,iBAAW,GAAG,KAAK;IACrB;;;;0BAIsB,KAAuB;AAC3C,6BAAuB,GAAG,KAAK;IACjC;;;;wBAIoB,KAAqB;AACvC,2BAAqB,GAAG,KAAK;IAC/B;;;;kBAKc,KAAK;AACjB,qBAAe,GAAG,KAAK;AACvB,yBAAa;IACf;;YAGgC,gBAAe;;qBAIzB,IAAW;AAC/B,sEAAI,YAAO,GAAgB;AACzB,cAAO,6DAAC,YAAO,eAA6B,CAAC,IAAI,MAC7C,8DAAgB,WAAW;;AAEjC,YAAO;IACT;iBAGa,KAAK;AAChB,qBAAS,GAAG,8CAAO,CAAC,KAAK;IAC3B;;YAEqB,gBAAS;;;YAEJ,YAAE,eAAS;IAAC;;YAGL,oBAAa;;qBAI7B,KAAkB;AACjC,yBAAa,GAAG,KAAK;AACrB,yBAAa;IACf;oBAGgB,KAAyB;AACvC,UAAI,KAAK,IAAI,MAAM;AAGjB,+BAAiB,CAAC;AAChB,4BAAY,GAAG,KAAK;AACpB,6BAAa;;;IAGnB;;AAGE,UAAI,kBAAY,IAAI,MAAM;AAC1B,UAAI,cAAS,IAAI,MAAM;AACrB,iBAAmB,OAAQ,mBAAY,EAAE;AACvC,cAAI,UAAU,GAAG,cAAS;;;AAG9B,UAAI,iBAAY,IAAI,MAAM;AACxB,iBAAmB,OAAQ,mBAAY,EAAE;AACvC,cAAI,aAAa,GAAG,iBAAY;;;IAGtC;;;IAhGoB,kBAAY;IAIjB,oBAAc,GAAG,2CAAe;IAE1C,eAAS,GAAG;IA0DJ,mBAAa;;EAiC5B","file":"material_select.ddc.js"}');
  // Exports:
  return {
    material_select__material_select: material_select__material_select
  };
});

//# sourceMappingURL=material_select.ddc.js.map
