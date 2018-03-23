define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/has_factory', 'packages/angular/src/core/linker/app_view'], function(dart_sdk, selection_model, selection_options, has_renderer, has_factory, app_view) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__ui__has_factory = has_factory.model__ui__has_factory;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const _root = Object.create(null);
  const model__selection__selection_container = Object.create(_root);
  let HasComponentRendererOfRendersValue$dynamic = () => (HasComponentRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_renderer.HasComponentRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  let HasFactoryRendererOfRendersValue$dynamic = () => (HasFactoryRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_factory.HasFactoryRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  let dynamicToType = () => (dynamicToType = dart.constFn(dart.fnType(core.Type, [dart.dynamic])))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  const _selection = Symbol('_selection');
  const _options = Symbol('_options');
  const _itemRenderer = Symbol('_itemRenderer');
  const _componentRenderer = Symbol('_componentRenderer');
  const _factoryRenderer = Symbol('_factoryRenderer');
  const _is_SelectionContainer_default = Symbol('_is_SelectionContainer_default');
  model__selection__selection_container.SelectionContainer$ = dart.generic(T => {
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let SelectionOptionsOfT = () => (SelectionOptionsOfT = dart.constFn(model__selection__selection_options.SelectionOptions$(T)))();
    let HasRendererOfT = () => (HasRendererOfT = dart.constFn(model__ui__has_renderer.HasRenderer$(T)))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class SelectionContainer extends core.Object {
      get selection() {
        return this[_selection];
      }
      set selection(value) {
        SelectionModelOfT()._check(value);
        this[_selection] = value;
      }
      get options() {
        return this[_options];
      }
      set options(value) {
        SelectionOptionsOfT()._check(value);
        this[_options] = value;
      }
      get itemRenderer() {
        return this[_itemRenderer];
      }
      set itemRenderer(value) {
        this[_itemRenderer] = value;
      }
      get componentRenderer() {
        return this[_componentRenderer];
      }
      set componentRenderer(value) {
        this[_componentRenderer] = value;
      }
      get factoryRenderer() {
        return this[_factoryRenderer];
      }
      set factoryRenderer(value) {
        this[_factoryRenderer] = value;
      }
    }
    (SelectionContainer.new = function() {
      this[_selection] = null;
      this[_options] = null;
      this[_itemRenderer] = null;
      this[_componentRenderer] = null;
      this[_factoryRenderer] = null;
    }).prototype = SelectionContainer.prototype;
    dart.addTypeTests(SelectionContainer);
    SelectionContainer.prototype[_is_SelectionContainer_default] = true;
    SelectionContainer[dart.implements] = () => [HasRendererOfT(), HasComponentRendererOfRendersValue$dynamic(), HasFactoryRendererOfRendersValue$dynamic()];
    dart.setGetterSignature(SelectionContainer, () => ({
      __proto__: dart.getGetters(SelectionContainer.__proto__),
      selection: dart.fnType(model__selection__selection_model.SelectionModel$(T), []),
      options: dart.fnType(model__selection__selection_options.SelectionOptions$(T), []),
      itemRenderer: dart.fnType(dart.fnType(core.String, [T]), []),
      componentRenderer: dart.fnType(dart.fnType(core.Type, [dart.dynamic]), []),
      factoryRenderer: dart.fnType(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic]), [])
    }));
    dart.setSetterSignature(SelectionContainer, () => ({
      __proto__: dart.getSetters(SelectionContainer.__proto__),
      selection: dart.fnType(dart.void, [SelectionModelOfT()]),
      options: dart.fnType(dart.void, [SelectionOptionsOfT()]),
      itemRenderer: dart.fnType(dart.void, [TToString()]),
      componentRenderer: dart.fnType(dart.void, [dynamicToType()]),
      factoryRenderer: dart.fnType(dart.void, [dynamicToComponentFactory()])
    }));
    dart.setFieldSignature(SelectionContainer, () => ({
      __proto__: dart.getFields(SelectionContainer.__proto__),
      [_selection]: dart.fieldType(SelectionModelOfT()),
      [_options]: dart.fieldType(SelectionOptionsOfT()),
      [_itemRenderer]: dart.fieldType(TToString()),
      [_componentRenderer]: dart.fieldType(dynamicToType()),
      [_factoryRenderer]: dart.fieldType(dynamicToComponentFactory())
    }));
    return SelectionContainer;
  });
  model__selection__selection_container.SelectionContainer = model__selection__selection_container.SelectionContainer$();
  dart.addTypeTests(model__selection__selection_container.SelectionContainer, _is_SelectionContainer_default);
  const _value = Symbol('_value');
  const _is_SelectionItem_default = Symbol('_is_SelectionItem_default');
  model__selection__selection_container.SelectionItem$ = dart.generic(T => {
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let HasRendererOfT = () => (HasRendererOfT = dart.constFn(model__ui__has_renderer.HasRenderer$(T)))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class SelectionItem extends core.Object {
      get selection() {
        return this[_selection];
      }
      set selection(value) {
        SelectionModelOfT()._check(value);
        this[_selection] = value;
      }
      get value() {
        return this[_value];
      }
      set value(value) {
        T._check(value);
        this[_value] = value;
      }
      get itemRenderer() {
        return this[_itemRenderer];
      }
      set itemRenderer(value) {
        this[_itemRenderer] = value;
      }
    }
    (SelectionItem.new = function() {
      this[_selection] = null;
      this[_value] = null;
      this[_itemRenderer] = null;
    }).prototype = SelectionItem.prototype;
    dart.addTypeTests(SelectionItem);
    SelectionItem.prototype[_is_SelectionItem_default] = true;
    SelectionItem[dart.implements] = () => [HasRendererOfT()];
    dart.setGetterSignature(SelectionItem, () => ({
      __proto__: dart.getGetters(SelectionItem.__proto__),
      selection: dart.fnType(model__selection__selection_model.SelectionModel$(T), []),
      value: dart.fnType(T, []),
      itemRenderer: dart.fnType(dart.fnType(core.String, [T]), [])
    }));
    dart.setSetterSignature(SelectionItem, () => ({
      __proto__: dart.getSetters(SelectionItem.__proto__),
      selection: dart.fnType(dart.void, [SelectionModelOfT()]),
      value: dart.fnType(dart.void, [T]),
      itemRenderer: dart.fnType(dart.void, [TToString()])
    }));
    dart.setFieldSignature(SelectionItem, () => ({
      __proto__: dart.getFields(SelectionItem.__proto__),
      [_selection]: dart.fieldType(SelectionModelOfT()),
      [_value]: dart.fieldType(T),
      [_itemRenderer]: dart.fieldType(TToString())
    }));
    return SelectionItem;
  });
  model__selection__selection_container.SelectionItem = model__selection__selection_container.SelectionItem$();
  dart.addTypeTests(model__selection__selection_container.SelectionItem, _is_SelectionItem_default);
  dart.trackLibraries("packages/angular_components/model/selection/selection_container.ddc", {
    "package:angular_components/model/selection/selection_container.dart": model__selection__selection_container
  }, '{"version":3,"sourceRoot":"","sources":["selection_container.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;cAcqC,iBAAU;;oBAC/B,KAAuB;mCAAL;AAC9B,wBAAU,GAAG,KAAK;MACpB;;cAImC,eAAQ;;kBAC/B,KAAyB;qCAAL;AAC9B,sBAAQ,GAAG,KAAK;MAClB;;cAMoC,oBAAa;;uBAEhC,KAAqB;AACpC,2BAAa,GAAG,KAAK;MACvB;;cAM2C,yBAAkB;;4BAIvC,KAAuB;AAC3C,gCAAkB,GAAG,KAAK;MAC5B;;cAMuC,uBAAgB;;0BAEnC,KAAqB;AACvC,8BAAgB,GAAG,KAAK;MAC1B;;;MA3CkB,gBAAU;MAOR,cAAQ;MAQZ,mBAAa;MAUX,wBAAkB;MAYpB,sBAAgB;IAOlC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cAMqC,iBAAU;;oBAC/B,KAAuB;mCAAL;AAC9B,wBAAU,GAAG,KAAK;MACpB;;cAIe,aAAM;;gBACX,KAAO;iBAAL;AACV,oBAAM,GAAG,KAAK;MAChB;;cAMoC,oBAAa;;uBAEhC,KAAqB;AACpC,2BAAa,GAAG,KAAK;MACvB;;;MArBkB,gBAAU;MAO1B,YAAM;MAQQ,mBAAa;IAO/B","file":"selection_container.ddc.js"}');
  // Exports:
  return {
    model__selection__selection_container: model__selection__selection_container
  };
});

//# sourceMappingURL=selection_container.ddc.js.map
