define(['dart_sdk', 'packages/angular_components/model/ui/highlighted_text_model'], function(dart_sdk, highlighted_text_model) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__highlighted_text_model = highlighted_text_model.model__ui__highlighted_text_model;
  const _root = Object.create(null);
  const model__ui__highlight_assistant = Object.create(_root);
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $split = dartx.split;
  let ListOfHighlightedTextSegment = () => (ListOfHighlightedTextSegment = dart.constFn(core.List$(model__ui__highlighted_text_model.HighlightedTextSegment)))();
  let MapOfdynamic$ListOfHighlightedTextSegment = () => (MapOfdynamic$ListOfHighlightedTextSegment = dart.constFn(core.Map$(dart.dynamic, ListOfHighlightedTextSegment())))();
  let IdentityMapOfString$MapOfdynamic$ListOfHighlightedTextSegment = () => (IdentityMapOfString$MapOfdynamic$ListOfHighlightedTextSegment = dart.constFn(_js_helper.IdentityMap$(core.String, MapOfdynamic$ListOfHighlightedTextSegment())))();
  let LinkedMapOfdynamic$ListOfHighlightedTextSegment = () => (LinkedMapOfdynamic$ListOfHighlightedTextSegment = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, ListOfHighlightedTextSegment())))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let MapOfString$MapOfdynamic$ListOfHighlightedTextSegment = () => (MapOfString$MapOfdynamic$ListOfHighlightedTextSegment = dart.constFn(core.Map$(core.String, MapOfdynamic$ListOfHighlightedTextSegment())))();
  let StringAnddynamicToListOfHighlightedTextSegment = () => (StringAnddynamicToListOfHighlightedTextSegment = dart.constFn(dart.fnType(ListOfHighlightedTextSegment(), [core.String, dart.dynamic])))();
  const _optionHighlighter = Symbol('_optionHighlighter');
  const _matchFromStartOfWord = Symbol('_matchFromStartOfWord');
  const _highlightCache = Symbol('_highlightCache');
  const __textHighlighter = Symbol('__textHighlighter');
  const _textHighlighter = Symbol('_textHighlighter');
  model__ui__highlight_assistant.HighlightAssistant = class HighlightAssistant extends core.Object {
    get [_textHighlighter]() {
      let t = this[__textHighlighter];
      return t == null ? this[__textHighlighter] = new model__ui__highlighted_text_model.TextHighlighter.new({matchFromStartOfWord: this[_matchFromStartOfWord]}) : t;
    }
    highlightOption(_lastQuery, item, itemRenderer) {
      let t = this[_highlightCache][$_get](_lastQuery);
      let _queryHighlightCache = t == null ? this[_highlightCache][$_set](_lastQuery, new (LinkedMapOfdynamic$ListOfHighlightedTextSegment()).new()) : t;
      let value = _queryHighlightCache[$_get](item);
      if (value == null) {
        value = this[_optionHighlighter] != null ? dart.dcall(this[_optionHighlighter], _lastQuery, item) : this[_textHighlighter].highlight(dart.dcall(itemRenderer, item), _lastQuery[$split](model__ui__highlight_assistant.HighlightAssistant._separatorRegex));
        _queryHighlightCache[$_set](item, value);
      }
      return value;
    }
  };
  (model__ui__highlight_assistant.HighlightAssistant.new = function(opts) {
    let optionHighlighter = opts && 'optionHighlighter' in opts ? opts.optionHighlighter : null;
    let matchFromStartOfWord = opts && 'matchFromStartOfWord' in opts ? opts.matchFromStartOfWord : false;
    this[_highlightCache] = new (IdentityMapOfString$MapOfdynamic$ListOfHighlightedTextSegment()).new();
    this[__textHighlighter] = null;
    this[_optionHighlighter] = optionHighlighter;
    this[_matchFromStartOfWord] = matchFromStartOfWord;
  }).prototype = model__ui__highlight_assistant.HighlightAssistant.prototype;
  dart.addTypeTests(model__ui__highlight_assistant.HighlightAssistant);
  dart.setMethodSignature(model__ui__highlight_assistant.HighlightAssistant, () => ({
    __proto__: dart.getMethods(model__ui__highlight_assistant.HighlightAssistant.__proto__),
    highlightOption: dart.fnType(core.List$(model__ui__highlighted_text_model.HighlightedTextSegment), [core.String, dart.dynamic, dynamicToString()])
  }));
  dart.setGetterSignature(model__ui__highlight_assistant.HighlightAssistant, () => ({
    __proto__: dart.getGetters(model__ui__highlight_assistant.HighlightAssistant.__proto__),
    [_textHighlighter]: dart.fnType(model__ui__highlighted_text_model.TextHighlighter, [])
  }));
  dart.setFieldSignature(model__ui__highlight_assistant.HighlightAssistant, () => ({
    __proto__: dart.getFields(model__ui__highlight_assistant.HighlightAssistant.__proto__),
    [_highlightCache]: dart.finalFieldType(MapOfString$MapOfdynamic$ListOfHighlightedTextSegment()),
    [_optionHighlighter]: dart.finalFieldType(StringAnddynamicToListOfHighlightedTextSegment()),
    [__textHighlighter]: dart.fieldType(model__ui__highlighted_text_model.TextHighlighter),
    [_matchFromStartOfWord]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(model__ui__highlight_assistant.HighlightAssistant, {
    /*model__ui__highlight_assistant.HighlightAssistant._separatorRegex*/get _separatorRegex() {
      return core.RegExp.new('[,\\s]+');
    }
  });
  dart.trackLibraries("packages/angular_components/model/ui/highlight_assistant.ddc", {
    "package:angular_components/model/ui/highlight_assistant.dart": model__ui__highlight_assistant
  }, '{"version":3,"sourceRoot":"","sources":["highlight_assistant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;cAqB0C,uBAAiB;mDACrD,IAAI,qDAAe,wBAAuB,2BAAqB;IAAC;oBAahE,UAAiB,EAAE,IAAY,EAAE,YAAyB;AAC5D,cAA2B,qBAAe,QAAC,UAAU;UAAjD,mCAAuB,qBAAe,QAAC,UAAU,EAAM;AAC3D,UAAI,QAAQ,oBAAoB,QAAC,IAAI;AACrC,UAAI,KAAK,IAAI,MAAM;AACjB,aAAK,GAAI,wBAAkB,IAAI,kBACzB,wBAAkB,EAAC,UAAU,EAAE,IAAI,IACnC,sBAAgB,UAAU,YACxB,YAAY,EAAC,IAAI,GAAG,UAAU,QAAM,CAAC,iEAAe;AAC5D,4BAAoB,QAAC,IAAI,EAAI,KAAK;;AAEpC,YAAO,MAAK;IACd;;;QAhBiB;QAAwB,4FAAsB;IAlBzD,qBAAe,GACjB;IAKY,uBAAiB;IAa3B,wBAAkB,GAAG,iBAAiB;IACtC,2BAAqB,GAAG,oBAAoB;;;;;;;;;;;;;;;;;;;MAvB9B,iEAAe;YAAG,AAAI,gBAAM,CAAC","file":"highlight_assistant.ddc.js"}');
  // Exports:
  return {
    model__ui__highlight_assistant: model__ui__highlight_assistant
  };
});

//# sourceMappingURL=highlight_assistant.ddc.js.map
