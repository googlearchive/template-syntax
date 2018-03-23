define(['dart_sdk', 'packages/angular_components/model/ui/highlighted_text_model'], function(dart_sdk, highlighted_text_model) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__highlighted_text_model = highlighted_text_model.model__ui__highlighted_text_model;
  const _root = Object.create(null);
  const highlighted_text__highlighted_text = Object.create(_root);
  let ListOfHighlightedTextSegment = () => (ListOfHighlightedTextSegment = dart.constFn(core.List$(model__ui__highlighted_text_model.HighlightedTextSegment)))();
  highlighted_text__highlighted_text.HighlightedTextComponent = class HighlightedTextComponent extends core.Object {
    get segments() {
      return this[segments];
    }
    set segments(value) {
      this[segments] = value;
    }
  };
  (highlighted_text__highlighted_text.HighlightedTextComponent.new = function() {
    this[segments] = null;
  }).prototype = highlighted_text__highlighted_text.HighlightedTextComponent.prototype;
  dart.addTypeTests(highlighted_text__highlighted_text.HighlightedTextComponent);
  const segments = Symbol("HighlightedTextComponent.segments");
  dart.setFieldSignature(highlighted_text__highlighted_text.HighlightedTextComponent, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_text.HighlightedTextComponent.__proto__),
    segments: dart.fieldType(ListOfHighlightedTextSegment())
  }));
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_text.ddc", {
    "package:angular_components/highlighted_text/highlighted_text.dart": highlighted_text__highlighted_text
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_text.dart"],"names":[],"mappings":";;;;;;;;;;IAgC+B;;;;;;;;kBAAQ;EACvC","file":"highlighted_text.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_text: highlighted_text__highlighted_text
  };
});

//# sourceMappingURL=highlighted_text.ddc.js.map
