define(['dart_sdk', 'packages/quiver/core'], function(dart_sdk, core) {
  'use strict';
  const core$ = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$0 = core.core;
  const _root = Object.create(null);
  const model__ui__highlighted_text_model = Object.create(_root);
  const $toLowerCase = dartx.toLowerCase;
  const $isEmpty = dartx.isEmpty;
  const $indexOf = dartx.indexOf;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $codeUnitAt = dartx.codeUnitAt;
  let ListOfint = () => (ListOfint = dart.constFn(core$.List$(core$.int)))();
  let JSArrayOfHighlightedTextSegment = () => (JSArrayOfHighlightedTextSegment = dart.constFn(_interceptors.JSArray$(model__ui__highlighted_text_model.HighlightedTextSegment)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core$.Null, [core$.bool])))();
  let ListOfString = () => (ListOfString = dart.constFn(core$.List$(core$.String)))();
  model__ui__highlighted_text_model.Highlighter$ = dart.generic(T => {
    const Highlighter = dart.typedef('Highlighter', () => dart.fnType(core$.List$(model__ui__highlighted_text_model.HighlightedTextSegment), [core$.String, T]));
    return Highlighter;
  });
  model__ui__highlighted_text_model.Highlighter = model__ui__highlighted_text_model.Highlighter$();
  model__ui__highlighted_text_model.HighlightedTextSegment = class HighlightedTextSegment extends core$.Object {
    get isHighlighted() {
      return this[isHighlighted$];
    }
    set isHighlighted(value) {
      super.isHighlighted = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    _equals(other) {
      if (other == null) return false;
      return model__ui__highlighted_text_model.HighlightedTextSegment.is(other) && this.isHighlighted == other.isHighlighted && this.text == other.text;
    }
    get hashCode() {
      return core$0.hash2(this.isHighlighted, this.text);
    }
    toString() {
      return dart.test(this.isHighlighted) ? dart.str`*${this.text}*` : this.text;
    }
  };
  (model__ui__highlighted_text_model.HighlightedTextSegment.new = function(text, isHighlighted) {
    this[text$] = text;
    this[isHighlighted$] = isHighlighted;
  }).prototype = model__ui__highlighted_text_model.HighlightedTextSegment.prototype;
  dart.addTypeTests(model__ui__highlighted_text_model.HighlightedTextSegment);
  const isHighlighted$ = Symbol("HighlightedTextSegment.isHighlighted");
  const text$ = Symbol("HighlightedTextSegment.text");
  dart.setFieldSignature(model__ui__highlighted_text_model.HighlightedTextSegment, () => ({
    __proto__: dart.getFields(model__ui__highlighted_text_model.HighlightedTextSegment.__proto__),
    isHighlighted: dart.finalFieldType(core$.bool),
    text: dart.finalFieldType(core$.String)
  }));
  dart.defineExtensionMethods(model__ui__highlighted_text_model.HighlightedTextSegment, ['_equals', 'toString']);
  dart.defineExtensionAccessors(model__ui__highlighted_text_model.HighlightedTextSegment, ['hashCode']);
  const _applyMarkers = Symbol('_applyMarkers');
  model__ui__highlighted_text_model.TextHighlighter = class TextHighlighter extends core$.Object {
    get caseSensitive() {
      return this[caseSensitive$];
    }
    set caseSensitive(value) {
      super.caseSensitive = value;
    }
    get matchFromStartOfWord() {
      return this[matchFromStartOfWord$];
    }
    set matchFromStartOfWord(value) {
      super.matchFromStartOfWord = value;
    }
    highlight(text, tokens) {
      return this[_applyMarkers](text, this.getMarkers(text, tokens));
    }
    getMarkers(text, tokens) {
      let _matchText = dart.test(this.caseSensitive) ? text : text[$toLowerCase]();
      let markers = ListOfint().filled(_matchText.length, 0);
      for (let token of tokens) {
        if (token[$isEmpty]) continue;
        if (!dart.test(this.caseSensitive)) {
          token = token[$toLowerCase]();
        }
        let index = 0;
        while (true) {
          index = _matchText[$indexOf](token, index);
          if (index === -1) {
            break;
          } else {
            let wrapperToken = index !== 0 ? _matchText[$_get](index - 1) : null;
            if (!dart.test(this.matchFromStartOfWord) || index === 0 || wrapperToken === "(" || wrapperToken === " " || wrapperToken === "[") {
              markers[$_set](index, math.max(core$.int, markers[$_get](index), token.length));
            }
            index = index + token.length;
          }
        }
      }
      return markers;
    }
    [_applyMarkers](text, markers) {
      let segments = JSArrayOfHighlightedTextSegment().of([]);
      let currentSegment = new core$.StringBuffer.new();
      function commitSegment(highlight) {
        segments[$add](new model__ui__highlighted_text_model.HighlightedTextSegment.new(currentSegment.toString(), highlight));
        currentSegment.clear();
      }
      dart.fn(commitSegment, boolToNull());
      let ink = 0, inkPrevious = 0, i = 0, caseOffset = 0;
      while (i < text.length) {
        ink = math.max(core$.int, math.max(core$.int, 0, inkPrevious - 1), markers[$_get](i + caseOffset));
        if (i > 0 && ink > 0 !== inkPrevious > 0) {
          commitSegment(inkPrevious > 0);
        }
        currentSegment.writeCharCode(text[$codeUnitAt](i));
        let lowercaseChar = text[$_get](i)[$toLowerCase]();
        if (!dart.test(this.caseSensitive) && text[$_get](i) !== lowercaseChar && lowercaseChar.length > text[$_get](i).length) {
          let lengthDiff = lowercaseChar.length - text[$_get](i).length;
          caseOffset = caseOffset + lengthDiff;
          ink = ink - lengthDiff;
        }
        inkPrevious = ink;
        i++;
      }
      commitSegment(inkPrevious > 0);
      return segments;
    }
  };
  (model__ui__highlighted_text_model.TextHighlighter.new = function(opts) {
    let caseSensitive = opts && 'caseSensitive' in opts ? opts.caseSensitive : false;
    let matchFromStartOfWord = opts && 'matchFromStartOfWord' in opts ? opts.matchFromStartOfWord : true;
    this[caseSensitive$] = caseSensitive;
    this[matchFromStartOfWord$] = matchFromStartOfWord;
  }).prototype = model__ui__highlighted_text_model.TextHighlighter.prototype;
  dart.addTypeTests(model__ui__highlighted_text_model.TextHighlighter);
  const caseSensitive$ = Symbol("TextHighlighter.caseSensitive");
  const matchFromStartOfWord$ = Symbol("TextHighlighter.matchFromStartOfWord");
  dart.setMethodSignature(model__ui__highlighted_text_model.TextHighlighter, () => ({
    __proto__: dart.getMethods(model__ui__highlighted_text_model.TextHighlighter.__proto__),
    highlight: dart.fnType(core$.List$(model__ui__highlighted_text_model.HighlightedTextSegment), [core$.String, ListOfString()]),
    getMarkers: dart.fnType(core$.List$(core$.int), [core$.String, ListOfString()]),
    [_applyMarkers]: dart.fnType(core$.List$(model__ui__highlighted_text_model.HighlightedTextSegment), [core$.String, ListOfint()])
  }));
  dart.setFieldSignature(model__ui__highlighted_text_model.TextHighlighter, () => ({
    __proto__: dart.getFields(model__ui__highlighted_text_model.TextHighlighter.__proto__),
    caseSensitive: dart.finalFieldType(core$.bool),
    matchFromStartOfWord: dart.finalFieldType(core$.bool)
  }));
  dart.trackLibraries("packages/angular_components/model/ui/highlighted_text_model.ddc", {
    "package:angular_components/model/ui/highlighted_text_model.dart": model__ui__highlighted_text_model
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_text_model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;IAgBa;;;;;;IACE;;;;;;YAKD,KAAK;UAAL,KAAK;YAEwB,6DADrC,KAAK,KACL,kBAAa,IAAI,KAAK,cAAc,IACpC,SAAI,IAAI,KAAK,KAAK;;;YAGF,aAAK,CAAC,kBAAa,EAAE,SAAI;IAAC;;uBAGzB,kBAAa,IAAG,YAAG,SAAI,MAAK,SAAI;;;2EAZ9B,IAAS,EAAE,aAAkB;IAAxB,WAAI,GAAJ,IAAI;IAAO,oBAAa,GAAb,aAAa;EAAC;;;;;;;;;;;;;IAmB1C;;;;;;IACA;;;;;;cAK4B,IAAW,EAAE,MAAmB;YACnE,oBAAa,CAAC,IAAI,EAAE,eAAU,CAAC,IAAI,EAAE,MAAM;IAAE;eAe5B,IAAW,EAAE,MAAmB;AACnD,UAAI,uBAAa,kBAAa,IAAG,IAAI,GAAG,IAAI,cAAY;AACxD,UAAU,UAAU,AAAI,kBAAW,CAAC,UAAU,OAAO,EAAE;AAEvD,eAAY,QAAS,OAAM,EAAE;AAG3B,YAAI,KAAK,UAAQ,EAAE;AACnB,uBAAK,kBAAa,GAAE;AAClB,eAAK,GAAG,KAAK,cAAY;;AAE3B,YAAI,QAAQ;AACZ,eAAO,MAAM;AACX,eAAK,GAAG,UAAU,UAAQ,CAAC,KAAK,EAAE,KAAK;AACvC,cAAI,KAAK,KAAI,CAAC,GAAG;AACf;iBACK;AACL,gBAAO,eAAe,KAAK,KAAI,IAAI,UAAU,QAAC,AAAM,KAAD,GAAG,KAAK;AAC3D,2BAAK,yBAAoB,KACpB,KAAK,KAAI,KAMN,YAAY,KAAI,OAChB,YAAY,KAAI,OAChB,YAAY,KAAI,KAAM;AAC5B,qBAAO,QAAC,KAAK,EAAI,QAAG,YAAC,OAAO,QAAC,KAAK,GAAG,KAAK,OAAO;;AAEnD,iBAAK,GA1Ff,AA0FU,KAAK,GAAI,KAAK,OAAO;;;;AAI3B,YAAO,QAAO;IAChB;oBAI2C,IAAW,EAAE,OAAiB;AACvE,UAAI,WAAW;AACf,UAAI,iBAAiB,IAAI,sBAAY;AAErC,6BAAc,SAAc;AAC1B,gBAAQ,MAAI,CACR,IAAI,4DAAsB,CAAC,cAAc,SAAS,IAAI,SAAS;AACnE,sBAAc,MAAM;;cAHtB;AAMA,UAAI,MAAM,GAAG,cAAc,GAAG,IAAI,GAAG,aAAa;AAElD,aAAO,AAAE,CAAD,GAAG,IAAI,OAAO,EAAE;AAGtB,WAAG,GAAG,QAAG,YAAC,QAAG,YAAC,GAAG,AAAY,WAAD,GAAG,IAAI,OAAO,QAAC,AAAE,CAAD,GAAG,UAAU;AAGzD,YAAI,AAAE,CAAD,GAAG,KAAK,AAAC,AAAI,GAAD,GAAG,MAAO,AAAY,WAAD,GAAG,GAAI;AAC3C,uBAAa,CAAC,AAAY,WAAD,GAAG;;AAE9B,sBAAc,cAAc,CAAC,IAAI,aAAW,CAAC,CAAC;AAK9C,YAAI,gBAAgB,IAAI,QAAC,CAAC,eAAa;AACvC,uBAAK,kBAAa,KACd,IAAI,QAAC,CAAC,MAAK,aAAa,IACxB,AAAqB,aAAR,OAAO,GAAG,IAAI,QAAC,CAAC,QAAQ,EAAE;AACzC,cAAI,aAAa,AAAqB,aAAR,OAAO,GAAG,IAAI,QAAC,CAAC,QAAQ;AAMtD,oBAAU,GAvIlB,AAuIQ,UAAU,GAAI,UAAU;AAIxB,aAAG,GA3IX,AA2IQ,GAAG,GAAI,UAAU;;AAGnB,mBAAW,GAAG,GAAG;AACjB,SAAC;;AAEH,mBAAa,CAAC,AAAY,WAAD,GAAG;AAE5B,YAAO,SAAQ;IACjB;;;QA1GU,uEAAe;QAAY,4FAAsB;IAAjD,oBAAa,GAAb,aAAa;IAAc,2BAAoB,GAApB,oBAAoB;EAAQ","file":"highlighted_text_model.ddc.js"}');
  // Exports:
  return {
    model__ui__highlighted_text_model: model__ui__highlighted_text_model
  };
});

//# sourceMappingURL=highlighted_text_model.ddc.js.map
