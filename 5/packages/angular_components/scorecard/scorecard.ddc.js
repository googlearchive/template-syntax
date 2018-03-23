define(['dart_sdk', 'packages/angular_components/utils/color/palette', 'packages/angular_components/utils/browser/events/events', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular/src/core/change_detection/change_detector_ref', 'packages/angular_components/utils/color/color'], function(dart_sdk, palette, events, keyboard_only_focus_indicator, change_detector_ref, color) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__color__palette = palette.utils__color__palette;
  const utils__browser__events__events = events.utils__browser__events__events;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const utils__color__color = color.utils__color__color;
  const _root = Object.create(null);
  const scorecard__scorecard = Object.create(_root);
  const $toUpperCase = dartx.toUpperCase;
  const $_get = dartx._get;
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  const _changeDetector = Symbol('_changeDetector');
  const _selectionController = Symbol('_selectionController');
  const _isChangePositive = Symbol('_isChangePositive');
  const _isChangeNegative = Symbol('_isChangeNegative');
  const _isChangeNeutral = Symbol('_isChangeNeutral');
  const _selectable = Symbol('_selectable');
  scorecard__scorecard.ScorecardComponent = class ScorecardComponent extends focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective {
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get tooltip() {
      return this[tooltip];
    }
    set tooltip(value) {
      this[tooltip] = value;
    }
    get changeGlyph() {
      return this[changeGlyph];
    }
    set changeGlyph(value) {
      this[changeGlyph] = value;
    }
    get suggestionBefore() {
      return this[suggestionBefore];
    }
    set suggestionBefore(value) {
      this[suggestionBefore] = value;
    }
    get description() {
      return this[description];
    }
    set description(value) {
      this[description] = value;
    }
    get suggestionAfter() {
      return this[suggestionAfter];
    }
    set suggestionAfter(value) {
      this[suggestionAfter] = value;
    }
    get extraBig() {
      return this[extraBig];
    }
    set extraBig(value) {
      this[extraBig] = value;
    }
    set changeType(changeType) {
      this[_isChangePositive] = this[_isChangeNegative] = this[_isChangeNeutral] = false;
      switch ((changeType != null ? changeType : "NEUTRAL")[$toUpperCase]()) {
        case "POSITIVE":
        {
          this[_isChangePositive] = true;
          break;
        }
        case "NEGATIVE":
        {
          this[_isChangeNegative] = true;
          break;
        }
        case "NEUTRAL":
        {
          this[_isChangeNeutral] = true;
          break;
        }
        default:
        {
          dart.throw(new core.ArgumentError.value(changeType, 'changeType'));
        }
      }
    }
    get isChangePositive() {
      return this[_isChangePositive];
    }
    get isChangeNegative() {
      return this[_isChangeNegative];
    }
    get isChangeNeutral() {
      return this[_isChangeNeutral];
    }
    get changeGlyphIcon() {
      if (!!dart.test(this.isChangeNeutral)) dart.assertFailed();
      return dart.test(this.isChangePositive) ? "arrow_upward" : "arrow_downward";
    }
    get selected() {
      return this[selected];
    }
    set selected(value) {
      this[selected] = value;
    }
    get selectable() {
      return this[_selectable];
    }
    set selectable(selectable) {
      this[_selectable] = selectable;
      this[_changeDetector].markForCheck();
    }
    get selectedColor() {
      return this[selectedColor];
    }
    set selectedColor(value) {
      this[selectedColor] = value;
    }
    get selectedChange() {
      return this[_selectionController].stream;
    }
    get backgroundStyle() {
      return dart.test(this.selected) ? (() => {
        let t = this.selectedColor;
        let l = t == null ? null : t.hexString;
        return l != null ? l : utils__color__palette.chartingPalette[$_get](0).hexString;
      })() : 'inherit';
    }
    handleClick() {
      this.hideOutline();
      if (dart.test(this.selectable)) {
        this.selected = !dart.test(this.selected);
        this[_selectionController].add(this.selected);
      }
    }
    handleKeypress(event) {
      let keyCode = event.keyCode;
      if (dart.test(this.selectable) && (keyCode === html.KeyCode.ENTER || dart.test(utils__browser__events__events.isSpaceKey(event)))) {
        event.preventDefault();
        this.handleClick();
      }
    }
  };
  (scorecard__scorecard.ScorecardComponent.new = function(changeDetector, element, domService) {
    this[_selectionController] = StreamControllerOfbool().broadcast({sync: true});
    this[_isChangePositive] = false;
    this[_isChangeNegative] = false;
    this[_isChangeNeutral] = true;
    this[_selectable] = false;
    this[label] = null;
    this[value$] = null;
    this[tooltip] = null;
    this[changeGlyph] = false;
    this[suggestionBefore] = null;
    this[description] = null;
    this[suggestionAfter] = null;
    this[extraBig] = false;
    this[selected] = false;
    this[selectedColor] = null;
    this[_changeDetector] = changeDetector;
    this[element$] = element;
    scorecard__scorecard.ScorecardComponent.__proto__.new.call(this, element, domService);
  }).prototype = scorecard__scorecard.ScorecardComponent.prototype;
  dart.addTypeTests(scorecard__scorecard.ScorecardComponent);
  const element$ = Symbol("ScorecardComponent.element");
  const label = Symbol("ScorecardComponent.label");
  const value$ = Symbol("ScorecardComponent.value");
  const tooltip = Symbol("ScorecardComponent.tooltip");
  const changeGlyph = Symbol("ScorecardComponent.changeGlyph");
  const suggestionBefore = Symbol("ScorecardComponent.suggestionBefore");
  const description = Symbol("ScorecardComponent.description");
  const suggestionAfter = Symbol("ScorecardComponent.suggestionAfter");
  const extraBig = Symbol("ScorecardComponent.extraBig");
  const selected = Symbol("ScorecardComponent.selected");
  const selectedColor = Symbol("ScorecardComponent.selectedColor");
  dart.setMethodSignature(scorecard__scorecard.ScorecardComponent, () => ({
    __proto__: dart.getMethods(scorecard__scorecard.ScorecardComponent.__proto__),
    handleClick: dart.fnType(dart.void, []),
    handleKeypress: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setGetterSignature(scorecard__scorecard.ScorecardComponent, () => ({
    __proto__: dart.getGetters(scorecard__scorecard.ScorecardComponent.__proto__),
    isChangePositive: dart.fnType(core.bool, []),
    isChangeNegative: dart.fnType(core.bool, []),
    isChangeNeutral: dart.fnType(core.bool, []),
    changeGlyphIcon: dart.fnType(core.String, []),
    selectable: dart.fnType(core.bool, []),
    selectedChange: dart.fnType(async.Stream$(core.bool), []),
    backgroundStyle: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(scorecard__scorecard.ScorecardComponent, () => ({
    __proto__: dart.getSetters(scorecard__scorecard.ScorecardComponent.__proto__),
    changeType: dart.fnType(dart.void, [core.String]),
    selectable: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(scorecard__scorecard.ScorecardComponent, () => ({
    __proto__: dart.getFields(scorecard__scorecard.ScorecardComponent.__proto__),
    [_selectionController]: dart.finalFieldType(StreamControllerOfbool()),
    [_isChangePositive]: dart.fieldType(core.bool),
    [_isChangeNegative]: dart.fieldType(core.bool),
    [_isChangeNeutral]: dart.fieldType(core.bool),
    [_selectable]: dart.fieldType(core.bool),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    element: dart.finalFieldType(html.HtmlElement),
    label: dart.fieldType(core.String),
    value: dart.fieldType(core.String),
    tooltip: dart.fieldType(core.String),
    changeGlyph: dart.fieldType(core.bool),
    suggestionBefore: dart.fieldType(core.String),
    description: dart.fieldType(core.String),
    suggestionAfter: dart.fieldType(core.String),
    extraBig: dart.fieldType(core.bool),
    selected: dart.fieldType(core.bool),
    selectedColor: dart.fieldType(utils__color__color.Color)
  }));
  dart.defineLazy(scorecard__scorecard.ScorecardComponent, {
    /*scorecard__scorecard.ScorecardComponent.changeTypePositive*/get changeTypePositive() {
      return 'POSITIVE';
    },
    /*scorecard__scorecard.ScorecardComponent.changeTypeNegative*/get changeTypeNegative() {
      return 'NEGATIVE';
    },
    /*scorecard__scorecard.ScorecardComponent.changeTypeNeutral*/get changeTypeNeutral() {
      return 'NEUTRAL';
    }
  });
  dart.trackLibraries("packages/angular_components/scorecard/scorecard.ddc", {
    "package:angular_components/scorecard/scorecard.dart": scorecard__scorecard
  }, '{"version":3,"sourceRoot":"","sources":["scorecard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;IAoGoB;;;;;;IAMX;;;;;;IAIA;;;;;;IAIA;;;;;;IAKF;;;;;;IAIE;;;;;;IAIA;;;;;;IAIA;;;;;;IAKF;;;;;;mBASU,UAAiB;AAE9B,6BAAiB,GAAG,uBAAiB,GAAG,sBAAgB,GAAG;AAC3D,cAAQ,CAAC,UAAU,WAAV,UAAU,GAAI,SAAiB,eAAa;YAC9C,WAAkB;;AACrB,iCAAiB,GAAG;AACpB;;YACG,WAAkB;;AACrB,iCAAiB,GAAG;AACpB;;YACG,UAAiB;;AACpB,gCAAgB,GAAG;AACnB;;;;AAEA,qBAAM,IAAI,wBAAmB,CAAC,UAAU,EAAE;;;IAEhD;;YAI6B,wBAAiB;;;YAIjB,wBAAiB;;;YAGlB,uBAAgB;;;AAI1C,WAAO,WAAC,oBAAe;AACvB,uBAAO,qBAAgB,IAAG,iBAAiB;IAC7C;IAKK;;;;;;;YAIkB,kBAAW;;mBAGnB,UAAe;AAC5B,uBAAW,GAAG,UAAU;AAMxB,2BAAe,aAAa;IAC9B;IAIM;;;;;;;YAI6B,2BAAoB,OAAO;;;uBAMhC,aAAQ;gBAChC,kBAAa;;+BAAe,qCAAe,QAAC,YAAY;aACxD;IAAS;;AAIb,sBAAW;AACX,oBAAI,eAAU,GAAE;AACd,qBAAQ,GAAG,WAAC,aAAQ;AACpB,kCAAoB,IAAI,CAAC,aAAQ;;IAErC;mBAGoB,KAAmB;AACrC,UAAI,UAAU,KAAK,QAAQ;AAC3B,oBAAI,eAAU,MAAK,OAAO,KAAI,YAAO,MAAM,cAAI,yCAAU,CAAC,KAAK,KAAI;AACjE,aAAK,eAAe;AACpB,wBAAW;;IAEf;;0DAnIwB,cAAe,EAAE,OAAY,EAAE,UAAqB;IAV/C,0BAAoB,GAC7C,AAAI,kCAAgC,QAAO;IAE1C,uBAAiB,GAAG;IACpB,uBAAiB,GAAG;IACpB,sBAAgB,GAAG;IACnB,iBAAW,GAAG;IASZ,WAAK;IAIL,YAAK;IAIL,aAAO;IAKT,iBAAW,GAAG;IAIZ,sBAAgB;IAIhB,iBAAW;IAIX,qBAAe;IAKjB,cAAQ,GAAG;IA+CX,cAAQ,GAAG;IAmBV,mBAAa;IArGK,qBAAe,GAAf,cAAe;IAAO,cAAO,GAAP,OAAO;AAC/C,qEAAM,OAAO,EAAE,UAAU;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAfnB,0DAAkB;YAAG;;MACrB,0DAAkB;YAAG;;MACrB,yDAAiB;YAAG","file":"scorecard.ddc.js"}');
  // Exports:
  return {
    scorecard__scorecard: scorecard__scorecard
  };
});

//# sourceMappingURL=scorecard.ddc.js.map
