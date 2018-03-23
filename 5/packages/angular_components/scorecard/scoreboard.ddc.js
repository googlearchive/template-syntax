define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/utils/color/palette', 'packages/angular_components/scorecard/scorecard', 'packages/intl/intl', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/src/scorecard/scorecard_bar', 'packages/angular/src/core/change_detection/change_detector_ref', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, disposer, selection_model, palette, scorecard, intl, lifecycle_hooks, scorecard_bar, change_detector_ref, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const utils__color__palette = palette.utils__color__palette;
  const scorecard__scorecard = scorecard.scorecard__scorecard;
  const intl$ = intl.intl;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__scorecard__scorecard_bar = scorecard_bar.src__scorecard__scorecard_bar;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const _root = Object.create(null);
  const scorecard__scoreboard = Object.create(_root);
  const $offsetTop = dartx.offsetTop;
  const $offsetHeight = dartx.offsetHeight;
  const $offsetLeft = dartx.offsetLeft;
  const $first = dartx.first;
  const $_get = dartx._get;
  const $modulo = dartx['%'];
  const $length = dartx.length;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $minWidth = dartx.minWidth;
  const $replaceAll = dartx.replaceAll;
  const $width = dartx.width;
  const $getComputedStyle = dartx.getComputedStyle;
  const $isEmpty = dartx.isEmpty;
  let boolTovoid = () => (boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))();
  let StreamSubscriptionOfbool = () => (StreamSubscriptionOfbool = dart.constFn(async.StreamSubscription$(core.bool)))();
  let ScorecardComponentToHtmlElement = () => (ScorecardComponentToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [scorecard__scorecard.ScorecardComponent])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfScorecardComponent = () => (ListOfScorecardComponent = dart.constFn(core.List$(scorecard__scorecard.ScorecardComponent)))();
  const _domService = Symbol('_domService');
  const _changeDetector = Symbol('_changeDetector');
  const _disposer = Symbol('_disposer');
  const _cardSelectionDisposer = Symbol('_cardSelectionDisposer');
  const _selectionModel = Symbol('_selectionModel');
  const _scorecards = Symbol('_scorecards');
  const _scorecardBar = Symbol('_scorecardBar');
  const _enableUniformWidths = Symbol('_enableUniformWidths');
  const _initialized = Symbol('_initialized');
  const _atScorecardBarStart = Symbol('_atScorecardBarStart');
  const _atScorecardBarEnd = Symbol('_atScorecardBarEnd');
  const _onScorecardsChange = Symbol('_onScorecardsChange');
  const _refreshArrows = Symbol('_refreshArrows');
  const _resetTabIndex = Symbol('_resetTabIndex');
  const _updatedSelected = Symbol('_updatedSelected');
  const _scorecardOffset = Symbol('_scorecardOffset');
  const _makeScorecardsUniformWidth = Symbol('_makeScorecardsUniformWidth');
  scorecard__scoreboard.ScoreboardComponent = class ScoreboardComponent extends core.Object {
    get chevronBack() {
      return this[chevronBack];
    }
    set chevronBack(value) {
      this[chevronBack] = value;
    }
    get chevronForward() {
      return this[chevronForward];
    }
    set chevronForward(value) {
      this[chevronForward] = value;
    }
    get isScrollable() {
      return dart.test(this.scrollable) && (() => {
        let t = this[_scorecardBar];
        let l = t == null ? null : t.isScrollable;
        return l != null ? l : false;
      })();
    }
    get atScorecardBarStart() {
      return this[_atScorecardBarStart];
    }
    get atScorecardBarEnd() {
      return this[_atScorecardBarEnd];
    }
    get backIconType() {
      return dart.test(this.isVertical) ? 'expand_less' : this.chevronBack;
    }
    get forwardIconType() {
      return dart.test(this.isVertical) ? 'expand_more' : this.chevronForward;
    }
    set scoreCards(value) {
      this[_scorecards] = value;
      if (dart.test(this[_initialized])) async.scheduleMicrotask(dart.bind(this, _onScorecardsChange));
    }
    ngOnInit() {
      switch (this.type) {
        case scorecard__scoreboard.ScoreboardType.toggle:
        case scorecard__scoreboard.ScoreboardType.radio:
        case scorecard__scoreboard.ScoreboardType.custom:
        {
          this[_selectionModel] = model__selection__selection_model.SelectionModel.withList();
          break;
        }
        case scorecard__scoreboard.ScoreboardType.selectable:
        {
          this[_selectionModel] = model__selection__selection_model.SelectionModel.withList({allowMulti: true});
          break;
        }
        default:
        {
          this[_selectionModel] = model__selection__selection_model.SelectionModel.new();
          break;
        }
      }
      if (!dart.test(this[_initialized])) {
        this[_initialized] = true;
        async.scheduleMicrotask(dart.bind(this, _onScorecardsChange));
      }
    }
    ngOnDestroy() {
      this[_disposer].dispose();
      this[_cardSelectionDisposer].dispose();
    }
    set scorecardBar(value) {
      this[_scorecardBar] = value;
      this[_disposer].addDisposable(StreamSubscriptionOfbool(), this[_scorecardBar].refreshStream.listen(dart.fn(_ => this[_refreshArrows](), boolTovoid())));
    }
    get type() {
      return this[type];
    }
    set type(value) {
      this[type] = value;
    }
    get scrollable() {
      return this[scrollable];
    }
    set scrollable(value) {
      this[scrollable] = value;
    }
    get resetOnCardChanges() {
      return this[resetOnCardChanges];
    }
    set resetOnCardChanges(value) {
      this[resetOnCardChanges] = value;
    }
    get isVertical() {
      return this[isVertical];
    }
    set isVertical(value) {
      this[isVertical] = value;
    }
    scrollBack() {
      this[_scorecardBar].scrollBack();
      this[_resetTabIndex]();
    }
    scrollForward() {
      this[_scorecardBar].scrollForward();
      this[_resetTabIndex]();
    }
    selectionChange(selectedScorecard) {
      if (dart.test(this[_selectionModel].isSelected(selectedScorecard))) {
        if (this.type !== scorecard__scoreboard.ScoreboardType.radio) {
          this[_selectionModel].deselect(selectedScorecard);
        }
      } else {
        this[_selectionModel].select(selectedScorecard);
      }
      this[_updatedSelected]();
    }
    [_refreshArrows]() {
      if (dart.test(this.scrollable)) {
        let t = this[_scorecardBar];
        let l = t == null ? null : t.atStart;
        this[_atScorecardBarStart] = l != null ? l : false;
        let t$ = this[_scorecardBar];
        let l$ = t$ == null ? null : t$.atEnd;
        this[_atScorecardBarEnd] = l$ != null ? l$ : false;
        this[_changeDetector].markForCheck();
        if (dart.test(this.scrollable)) {
          this[_resetTabIndex]();
        }
      }
    }
    [_resetTabIndex]() {
      for (let component of this[_scorecards]) {
        let offset = this[_scorecardOffset](component.element);
        let scoreCardBarEndPosition = dart.notNull(this[_scorecardBar].currentTransformSize) + dart.notNull(this[_scorecardBar].currentClientSize) - dart.notNull(this[_scorecardBar].currentButtonSize);
        if (dart.notNull(offset) < scoreCardBarEndPosition && dart.notNull(offset) > dart.notNull(this[_scorecardBar].currentTransformSize)) {
          component.element.tabIndex = 0;
        } else {
          component.element.tabIndex = -1;
        }
      }
    }
    [_scorecardOffset](element) {
      return dart.test(this.isVertical) ? dart.notNull(element[$offsetTop]) + dart.notNull(element[$offsetHeight]) : element[$offsetLeft];
    }
    [_onScorecardsChange]() {
      this[_cardSelectionDisposer].dispose();
      if (dart.test(this[_enableUniformWidths])) this[_makeScorecardsUniformWidth]();
      for (let scorecard of this[_scorecards]) {
        scorecard.selectable = this.type === scorecard__scoreboard.ScoreboardType.custom ? scorecard.selectable : this.type !== scorecard__scoreboard.ScoreboardType.standard;
        if (!dart.test(this.resetOnCardChanges) && dart.test(scorecard.selected)) {
          this[_selectionModel].select(scorecard);
        }
        this[_cardSelectionDisposer].addDisposable(StreamSubscriptionOfbool(), scorecard.selectedChange.listen(dart.fn(_ => this.selectionChange(scorecard), boolTovoid())));
      }
      if (dart.test(this.resetOnCardChanges)) this[_selectionModel].clear();
      if (this.type === scorecard__scoreboard.ScoreboardType.radio && dart.test(this[_selectionModel].isEmpty)) {
        this[_selectionModel].select(this[_scorecards][$first]);
      }
      this[_updatedSelected]();
      if (dart.test(this.scrollable)) {
        let t = this[_scorecardBar];
        t == null ? null : t.reset();
      }
      if (this.type === scorecard__scoreboard.ScoreboardType.selectable) {
        let i = 0;
        for (let scorecard of this[_scorecards]) {
          let t$ = scorecard.selectedColor;
          t$ == null ? scorecard.selectedColor = utils__color__palette.chartingPalette[$_get](i[$modulo](utils__color__palette.chartingPalette[$length])) : t$;
          i++;
        }
      }
      this[_refreshArrows]();
    }
    [_makeScorecardsUniformWidth]() {
      let scorecardsElem = this[_scorecards][$map](html.HtmlElement, dart.fn(scorecard => scorecard.element, ScorecardComponentToHtmlElement()))[$toList]();
      let width = 0.0;
      this[_disposer].addDisposable(utils__disposer__disposer.Disposable, this[_domService].scheduleWrite(dart.fn(() => {
        for (let element of scorecardsElem) {
          element.style[$minWidth] = '';
        }
        this[_disposer].addDisposable(utils__disposer__disposer.Disposable, this[_domService].scheduleRead(dart.fn(() => {
          for (let element of scorecardsElem) {
            let elemWidth = element[$getComputedStyle]()[$width][$replaceAll](core.RegExp.new('[^0-9.]'), '');
            let elemWidthValue = elemWidth[$isEmpty] ? 0.0 : core.double.parse(elemWidth);
            if (dart.notNull(elemWidthValue) > dart.notNull(width)) width = elemWidthValue;
          }
          width = dart.notNull(width) + 1;
          this[_disposer].addDisposable(utils__disposer__disposer.Disposable, this[_domService].scheduleWrite(dart.fn(() => {
            for (let element of scorecardsElem) {
              element.style[$minWidth] = dart.str`${width}px`;
            }
            this[_refreshArrows]();
          }, VoidToNull())));
        }, VoidToNull())));
      }, VoidToNull())));
    }
    [_updatedSelected]() {
      for (let scorecard of this[_scorecards]) {
        if (dart.test(scorecard.selectable)) {
          scorecard.selected = this[_selectionModel].isSelected(scorecard);
        }
      }
    }
    get scrollScorecardBarForward() {
      return intl$.Intl.message('Scroll scorecard bar forward', {name: 'scrollScorecardBarForward', desc: 'Aria label of a button that scrolls the scorecard bar horizontally' + ' forward. Forward is, to the right in left-to-right layouts' + ' and to the left in right-to-left layouts.'});
    }
    get scrollScorecardBarBack() {
      return intl$.Intl.message('Scroll scorecard bar backward', {name: 'scrollScorecardBarBack', desc: 'Aria label of a button that scrolls the scorecard bar horizontally' + ' backward. Backward is, to the left in left-to-right layouts' + ' and to the right in right-to-left layouts.'});
    }
  };
  (scorecard__scoreboard.ScoreboardComponent.new = function(enableUniformWidths, domService, changeDetector) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_cardSelectionDisposer] = new utils__disposer__disposer.Disposer.multi();
    this[_selectionModel] = null;
    this[_scorecards] = null;
    this[_scorecardBar] = null;
    this[chevronBack] = "chevron_left";
    this[chevronForward] = "chevron_right";
    this[_enableUniformWidths] = null;
    this[_initialized] = false;
    this[_atScorecardBarStart] = false;
    this[_atScorecardBarEnd] = false;
    this[type] = scorecard__scoreboard.ScoreboardType.standard;
    this[scrollable] = false;
    this[resetOnCardChanges] = false;
    this[isVertical] = false;
    this[_domService] = domService;
    this[_changeDetector] = changeDetector;
    this[_enableUniformWidths] = enableUniformWidths !== 'false';
  }).prototype = scorecard__scoreboard.ScoreboardComponent.prototype;
  dart.addTypeTests(scorecard__scoreboard.ScoreboardComponent);
  const chevronBack = Symbol("ScoreboardComponent.chevronBack");
  const chevronForward = Symbol("ScoreboardComponent.chevronForward");
  const type = Symbol("ScoreboardComponent.type");
  const scrollable = Symbol("ScoreboardComponent.scrollable");
  const resetOnCardChanges = Symbol("ScoreboardComponent.resetOnCardChanges");
  const isVertical = Symbol("ScoreboardComponent.isVertical");
  scorecard__scoreboard.ScoreboardComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(scorecard__scoreboard.ScoreboardComponent, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard.ScoreboardComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    scrollBack: dart.fnType(dart.void, []),
    scrollForward: dart.fnType(dart.void, []),
    selectionChange: dart.fnType(dart.void, [scorecard__scorecard.ScorecardComponent]),
    [_refreshArrows]: dart.fnType(dart.void, []),
    [_resetTabIndex]: dart.fnType(dart.void, []),
    [_scorecardOffset]: dart.fnType(core.int, [html.HtmlElement]),
    [_onScorecardsChange]: dart.fnType(dart.void, []),
    [_makeScorecardsUniformWidth]: dart.fnType(dart.void, []),
    [_updatedSelected]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(scorecard__scoreboard.ScoreboardComponent, () => ({
    __proto__: dart.getGetters(scorecard__scoreboard.ScoreboardComponent.__proto__),
    isScrollable: dart.fnType(core.bool, []),
    atScorecardBarStart: dart.fnType(core.bool, []),
    atScorecardBarEnd: dart.fnType(core.bool, []),
    backIconType: dart.fnType(core.String, []),
    forwardIconType: dart.fnType(core.String, []),
    scrollScorecardBarForward: dart.fnType(core.String, []),
    scrollScorecardBarBack: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(scorecard__scoreboard.ScoreboardComponent, () => ({
    __proto__: dart.getSetters(scorecard__scoreboard.ScoreboardComponent.__proto__),
    scoreCards: dart.fnType(dart.void, [ListOfScorecardComponent()]),
    scorecardBar: dart.fnType(dart.void, [src__scorecard__scorecard_bar.ScorecardBarDirective])
  }));
  dart.setFieldSignature(scorecard__scoreboard.ScoreboardComponent, () => ({
    __proto__: dart.getFields(scorecard__scoreboard.ScoreboardComponent.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_cardSelectionDisposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_selectionModel]: dart.fieldType(model__selection__selection_model.SelectionModel),
    [_scorecards]: dart.fieldType(ListOfScorecardComponent()),
    [_scorecardBar]: dart.fieldType(src__scorecard__scorecard_bar.ScorecardBarDirective),
    chevronBack: dart.fieldType(core.String),
    chevronForward: dart.fieldType(core.String),
    [_enableUniformWidths]: dart.fieldType(core.bool),
    [_initialized]: dart.fieldType(core.bool),
    [_atScorecardBarStart]: dart.fieldType(core.bool),
    [_atScorecardBarEnd]: dart.fieldType(core.bool),
    type: dart.fieldType(scorecard__scoreboard.ScoreboardType),
    scrollable: dart.fieldType(core.bool),
    resetOnCardChanges: dart.fieldType(core.bool),
    isVertical: dart.fieldType(core.bool)
  }));
  dart.defineLazy(scorecard__scoreboard.ScoreboardComponent, {
    /*scorecard__scoreboard.ScoreboardComponent.chevronLeft*/get chevronLeft() {
      return 'chevron_left';
    },
    /*scorecard__scoreboard.ScoreboardComponent.chevronRight*/get chevronRight() {
      return 'chevron_right';
    }
  });
  scorecard__scoreboard.ScoreboardType = class ScoreboardType extends core.Object {
    toString() {
      return {
        0: "ScoreboardType.standard",
        1: "ScoreboardType.selectable",
        2: "ScoreboardType.toggle",
        3: "ScoreboardType.radio",
        4: "ScoreboardType.custom"
      }[this.index];
    }
  };
  (scorecard__scoreboard.ScoreboardType.new = function(x) {
    this.index = x;
  }).prototype = scorecard__scoreboard.ScoreboardType.prototype;
  dart.addTypeTests(scorecard__scoreboard.ScoreboardType);
  dart.setFieldSignature(scorecard__scoreboard.ScoreboardType, () => ({
    __proto__: dart.getFields(scorecard__scoreboard.ScoreboardType.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(scorecard__scoreboard.ScoreboardType, ['toString']);
  scorecard__scoreboard.ScoreboardType.standard = dart.const(new scorecard__scoreboard.ScoreboardType.new(0));
  scorecard__scoreboard.ScoreboardType.selectable = dart.const(new scorecard__scoreboard.ScoreboardType.new(1));
  scorecard__scoreboard.ScoreboardType.toggle = dart.const(new scorecard__scoreboard.ScoreboardType.new(2));
  scorecard__scoreboard.ScoreboardType.radio = dart.const(new scorecard__scoreboard.ScoreboardType.new(3));
  scorecard__scoreboard.ScoreboardType.custom = dart.const(new scorecard__scoreboard.ScoreboardType.new(4));
  scorecard__scoreboard.ScoreboardType.values = dart.constList([scorecard__scoreboard.ScoreboardType.standard, scorecard__scoreboard.ScoreboardType.selectable, scorecard__scoreboard.ScoreboardType.toggle, scorecard__scoreboard.ScoreboardType.radio, scorecard__scoreboard.ScoreboardType.custom], scorecard__scoreboard.ScoreboardType);
  dart.trackLibraries("packages/angular_components/scorecard/scoreboard.ddc", {
    "package:angular_components/scorecard/scoreboard.dart": scorecard__scoreboard
  }, '{"version":3,"sourceRoot":"","sources":["scoreboard.dart"],"names":[],"mappings":"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","file":"scoreboard.ddc.js"}');
  // Exports:
  return {
    scorecard__scoreboard: scorecard__scoreboard
  };
});

//# sourceMappingURL=scoreboard.ddc.js.map
