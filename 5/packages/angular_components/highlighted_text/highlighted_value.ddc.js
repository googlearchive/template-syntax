define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular_components/model/ui/highlight_provider'], function(dart_sdk, has_renderer, highlighted_text_model, highlight_provider) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__ui__highlighted_text_model = highlighted_text_model.model__ui__highlighted_text_model;
  const model__ui__highlight_provider = highlight_provider.model__ui__highlight_provider;
  const _root = Object.create(null);
  const highlighted_text__highlighted_value = Object.create(_root);
  const _highLighter = Symbol('_highLighter');
  highlighted_text__highlighted_value.HighlightedValueComponent = class HighlightedValueComponent extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get segments() {
      return this[_highLighter].highlightOption(this.value);
    }
  };
  (highlighted_text__highlighted_value.HighlightedValueComponent.new = function(highLighter) {
    this[value$] = null;
    this[_highLighter] = highLighter;
  }).prototype = highlighted_text__highlighted_value.HighlightedValueComponent.prototype;
  dart.addTypeTests(highlighted_text__highlighted_value.HighlightedValueComponent);
  const value$ = Symbol("HighlightedValueComponent.value");
  highlighted_text__highlighted_value.HighlightedValueComponent[dart.implements] = () => [model__ui__has_renderer.RendersValue];
  dart.setGetterSignature(highlighted_text__highlighted_value.HighlightedValueComponent, () => ({
    __proto__: dart.getGetters(highlighted_text__highlighted_value.HighlightedValueComponent.__proto__),
    segments: dart.fnType(core.List$(model__ui__highlighted_text_model.HighlightedTextSegment), [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_value.HighlightedValueComponent, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_value.HighlightedValueComponent.__proto__),
    [_highLighter]: dart.finalFieldType(model__ui__highlight_provider.HighlightProvider),
    value: dart.fieldType(core.Object)
  }));
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_value.ddc", {
    "package:angular_components/highlighted_text/highlighted_value.dart": highlighted_text__highlighted_value
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_value.dart"],"names":[],"mappings":";;;;;;;;;;;;IA0BS;;;;;;;AAQL,YAAO,mBAAY,gBAAgB,CAAC,UAAK;IAC3C;;gFAP+B,WAAY;IAFpC,YAAK;IAEmB,kBAAY,GAAZ,WAAY;EAAC","file":"highlighted_value.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_value: highlighted_text__highlighted_value
  };
});

//# sourceMappingURL=highlighted_value.ddc.js.map
