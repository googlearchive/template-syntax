define(['dart_sdk', 'packages/angular_components/highlighted_text/highlighted_value', 'packages/angular_components/highlighted_text/highlighted_value.template', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/model/selection/select', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/highlight_assistant', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/highlight_provider', 'packages/angular_components/model/ui/highlighted_text_model'], function(dart_sdk, highlighted_value, highlighted_value$, app_view, select, has_renderer, highlight_assistant, selection_container, highlight_provider, highlighted_text_model) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const highlighted_text__highlighted_value = highlighted_value.highlighted_text__highlighted_value;
  const highlighted_text__highlighted_value$46template = highlighted_value$.highlighted_text__highlighted_value$46template;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const model__selection__select = select.model__selection__select;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__ui__highlight_assistant = highlight_assistant.model__ui__highlight_assistant;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__highlight_provider = highlight_provider.model__ui__highlight_provider;
  const model__ui__highlighted_text_model = highlighted_text_model.model__ui__highlighted_text_model;
  const _root = Object.create(null);
  const mixins__highlight_assistant_mixin = Object.create(_root);
  let dynamicToType = () => (dynamicToType = dart.constFn(dart.fnType(core.Type, [dart.dynamic])))();
  let ComponentFactoryOfHighlightedValueComponent = () => (ComponentFactoryOfHighlightedValueComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(highlighted_text__highlighted_value.HighlightedValueComponent)))();
  let dynamicToComponentFactoryOfHighlightedValueComponent = () => (dynamicToComponentFactoryOfHighlightedValueComponent = dart.constFn(dart.fnType(ComponentFactoryOfHighlightedValueComponent(), [dart.dynamic])))();
  let ListOfHighlightedTextSegment = () => (ListOfHighlightedTextSegment = dart.constFn(core.List$(model__ui__highlighted_text_model.HighlightedTextSegment)))();
  let StringAnddynamicToListOfHighlightedTextSegment = () => (StringAnddynamicToListOfHighlightedTextSegment = dart.constFn(dart.fnType(ListOfHighlightedTextSegment(), [core.String, dart.dynamic])))();
  let dynamicToType$ = () => (dynamicToType$ = dart.constFn(dart.fnType(core.Type, [dart.dynamic])))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  const _highlightAssistant = Symbol('_highlightAssistant');
  const _optionHighlighter = Symbol('_optionHighlighter');
  const _highlightMatchFromStartOfWord = Symbol('_highlightMatchFromStartOfWord');
  const _highlightRenderer = Symbol('_highlightRenderer');
  mixins__highlight_assistant_mixin.HighlightAssistantMixin = class HighlightAssistantMixin extends core.Object {
    get highlightComponentRenderer() {
      return this[highlightComponentRenderer];
    }
    set highlightComponentRenderer(value) {
      super.highlightComponentRenderer = value;
    }
    get highlightFactoryRenderer() {
      return this[highlightFactoryRenderer];
    }
    set highlightFactoryRenderer(value) {
      super.highlightFactoryRenderer = value;
    }
    get optionHighlighter() {
      return this[_optionHighlighter];
    }
    set optionHighlighter(value) {
      this[_optionHighlighter] = value;
      this[_highlightAssistant] = null;
    }
    set highlightMatchFromStartOfWord(value) {
      this[_highlightMatchFromStartOfWord] = value;
      this[_highlightAssistant] = null;
    }
    get highlightQuery() {
      return core.String._check(model__selection__select.Filterable.is(this.options) ? (() => {
        let l = model__selection__select.Filterable.as(this.options).currentQuery;
        return l != null ? l : '';
      })() : '');
    }
    get [_highlightRenderer]() {
      if ((this.componentRenderer == null || dart.equals(this.componentRenderer, this.highlightComponentRenderer)) && (this.factoryRenderer == null || dart.equals(this.factoryRenderer, this.highlightFactoryRenderer))) {
        let l = this.itemRenderer;
        return l != null ? l : model__ui__has_renderer.defaultItemRenderer;
      }
      return model__ui__has_renderer.defaultItemRenderer;
    }
    highlightOption(item) {
      let t = this[_highlightAssistant];
      t == null ? this[_highlightAssistant] = new model__ui__highlight_assistant.HighlightAssistant.new({optionHighlighter: this.optionHighlighter, matchFromStartOfWord: this[_highlightMatchFromStartOfWord]}) : t;
      return this[_highlightAssistant].highlightOption(this.highlightQuery, item, this[_highlightRenderer]);
    }
  };
  (mixins__highlight_assistant_mixin.HighlightAssistantMixin.new = function() {
    this[highlightComponentRenderer] = dart.fn(_ => dart.wrapType(highlighted_text__highlighted_value.HighlightedValueComponent), dynamicToType());
    this[highlightFactoryRenderer] = dart.fn(_ => highlighted_text__highlighted_value$46template.HighlightedValueComponentNgFactory, dynamicToComponentFactoryOfHighlightedValueComponent());
    this[_highlightAssistant] = null;
    this[_optionHighlighter] = null;
    this[_highlightMatchFromStartOfWord] = false;
  }).prototype = mixins__highlight_assistant_mixin.HighlightAssistantMixin.prototype;
  dart.addTypeTests(mixins__highlight_assistant_mixin.HighlightAssistantMixin);
  const highlightComponentRenderer = Symbol("HighlightAssistantMixin.highlightComponentRenderer");
  const highlightFactoryRenderer = Symbol("HighlightAssistantMixin.highlightFactoryRenderer");
  mixins__highlight_assistant_mixin.HighlightAssistantMixin[dart.implements] = () => [model__selection__selection_container.SelectionContainer, model__ui__highlight_provider.HighlightProvider];
  dart.setMethodSignature(mixins__highlight_assistant_mixin.HighlightAssistantMixin, () => ({
    __proto__: dart.getMethods(mixins__highlight_assistant_mixin.HighlightAssistantMixin.__proto__),
    highlightOption: dart.fnType(core.List$(model__ui__highlighted_text_model.HighlightedTextSegment), [core.Object])
  }));
  dart.setGetterSignature(mixins__highlight_assistant_mixin.HighlightAssistantMixin, () => ({
    __proto__: dart.getGetters(mixins__highlight_assistant_mixin.HighlightAssistantMixin.__proto__),
    optionHighlighter: dart.fnType(dart.fnType(core.List$(model__ui__highlighted_text_model.HighlightedTextSegment), [core.String, dart.dynamic]), []),
    highlightQuery: dart.fnType(core.String, []),
    [_highlightRenderer]: dart.fnType(dart.fnType(core.String, [dart.dynamic]), [])
  }));
  dart.setSetterSignature(mixins__highlight_assistant_mixin.HighlightAssistantMixin, () => ({
    __proto__: dart.getSetters(mixins__highlight_assistant_mixin.HighlightAssistantMixin.__proto__),
    optionHighlighter: dart.fnType(dart.void, [StringAnddynamicToListOfHighlightedTextSegment()]),
    highlightMatchFromStartOfWord: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(mixins__highlight_assistant_mixin.HighlightAssistantMixin, () => ({
    __proto__: dart.getFields(mixins__highlight_assistant_mixin.HighlightAssistantMixin.__proto__),
    highlightComponentRenderer: dart.finalFieldType(dynamicToType$()),
    highlightFactoryRenderer: dart.finalFieldType(dynamicToComponentFactory()),
    [_highlightAssistant]: dart.fieldType(model__ui__highlight_assistant.HighlightAssistant),
    [_optionHighlighter]: dart.fieldType(StringAnddynamicToListOfHighlightedTextSegment()),
    [_highlightMatchFromStartOfWord]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/mixins/highlight_assistant_mixin.ddc", {
    "package:angular_components/mixins/highlight_assistant_mixin.dart": mixins__highlight_assistant_mixin
  }, '{"version":3,"sourceRoot":"","sources":["highlight_assistant_mixin.dart"],"names":[],"mappings":";;;;;;QAsBa,8CAAS;;;;;;;;;;;;;;;;;;;;;;IAHI;;;;;;IAEF;;;;;;;YAWe,yBAAkB;;0BAEjC,KAAiB;AACrC,8BAAkB,GAAG,KAAK;AAC1B,+BAAmB,GAAG;IACxB;sCAKkC,KAAU;AAC1C,0CAA8B,GAAG,KAAK;AACtC,+BAAmB,GAAG;IACxB;;uEAII,YAAO,IAAiB;uDAAC,YAAO,cAA4B;+BAAI;aAAK;IAAE;;AAGzE,WAAK,sBAAiB,IAAI,oBAClB,sBAAiB,EAAI,+BAA0B,OAClD,oBAAe,IAAI,oBAChB,oBAAe,EAAI,6BAAwB,IAAG;AACpD,gBAAO,iBAAY;+BAAI,2CAAmB;;AAE5C,YAAO,4CAAmB;IAC5B;oBAG6C,IAAW;AACtD,uCAAmB;8CAAK,IAAI,qDAAkB,qBACvB,sBAAiB,wBACd,oCAA8B;AACxD,YAAO,0BAAmB,gBAAgB,CACtC,mBAAc,EAAE,IAAI,EAAE,wBAAkB;IAC9C;;;IAjDwB,gCAA0B,GAC9C,QAAC,CAAC,IAAK,4EAAyB;IACd,8BAAwB,GAC1C,QAAC,CAAC,IAAK,AAAU,8CAAD,mCAAmC;IAEpC,yBAAmB;IAO1B,wBAAkB;IASzB,oCAA8B,GAAG;EA6BxC","file":"highlight_assistant_mixin.ddc.js"}');
  // Exports:
  return {
    mixins__highlight_assistant_mixin: mixins__highlight_assistant_mixin
  };
});

//# sourceMappingURL=highlight_assistant_mixin.ddc.js.map
