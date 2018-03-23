define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, disposer, lifecycle_hooks, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const _root = Object.create(null);
  const src__scorecard__scorecard_bar = Object.create(_root);
  const $toString = dartx.toString;
  const $abs = dartx.abs;
  const $parent = dartx.parent;
  const $scrollHeight = dartx.scrollHeight;
  const $scrollWidth = dartx.scrollWidth;
  const $transform = dartx.transform;
  const $isNotEmpty = dartx.isNotEmpty;
  const $children = dartx.children;
  const $length = dartx.length;
  const $floor = dartx.floor;
  const $querySelectorAll = dartx.querySelectorAll;
  const $getPropertyValue = dartx.getPropertyValue;
  const $getComputedStyle = dartx.getComputedStyle;
  const $replaceAll = dartx.replaceAll;
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringTodouble = () => (StringTodouble = dart.constFn(dart.fnType(core.double, [core.String])))();
  const _domService = Symbol('_domService');
  const _element = Symbol('_element');
  const _refreshController = Symbol('_refreshController');
  const _disposer = Symbol('_disposer');
  const _isRtl = Symbol('_isRtl');
  const _isVertical = Symbol('_isVertical');
  const _clientSize = Symbol('_clientSize');
  const _scrollSize = Symbol('_scrollSize');
  const _scrollingMove = Symbol('_scrollingMove');
  const _transform = Symbol('_transform');
  const _buttonSize = Symbol('_buttonSize');
  const _readElement = Symbol('_readElement');
  const _getButtonSize = Symbol('_getButtonSize');
  const _updateTransform = Symbol('_updateTransform');
  src__scorecard__scorecard_bar.ScorecardBarDirective = class ScorecardBarDirective extends core.Object {
    ngOnInit() {
      this[_disposer].addDisposable(utils__disposer__disposer.Disposable, this[_domService].scheduleRead(dart.bind(this, _readElement)));
      this[_disposer].addDisposable(async.StreamSubscription, this[_domService].trackLayoutChange(core.String, dart.fn(() => dart.toString(this.currentClientSize) + ' ' + dart.toString(this.currentScrollSize), VoidToString()), dart.fn(_ => {
        this[_readElement]({windowResize: true});
        this[_refreshController].add(true);
      }, dynamicToNull()), {runInAngularZone: true}));
    }
    ngOnDestroy() {
      return this[_disposer].dispose();
    }
    ngAfterViewChecked() {
      this[_getButtonSize]();
    }
    get refreshStream() {
      return this[_refreshController].stream;
    }
    set isVertical(value) {
      this[_isVertical] = core.bool._check(value);
    }
    get isScrollable() {
      return this[_clientSize] != null && this[_scrollSize] != null && dart.notNull(this[_clientSize]) < dart.notNull(this[_scrollSize]);
    }
    get atStart() {
      return this[_transform] === 0;
    }
    get atEnd() {
      return this[_clientSize] != null ? this[_transform][$abs]() + dart.notNull(this[_clientSize]) >= dart.notNull(this[_scrollSize]) : false;
    }
    get currentClientSize() {
      return dart.test(this[_isVertical]) ? this[_element][$parent].clientHeight : this[_element][$parent].clientWidth;
    }
    get currentScrollSize() {
      return dart.test(this[_isVertical]) ? this[_element][$scrollHeight] : this[_element][$scrollWidth];
    }
    get transformAxis() {
      return dart.test(this[_isVertical]) ? 'Y' : 'X';
    }
    get currentTransformSize() {
      return this[_transform][$abs]();
    }
    get currentButtonSize() {
      return this[_buttonSize];
    }
    scrollBack() {
      this[_disposer].addDisposable(utils__disposer__disposer.Disposable, this[_domService].scheduleRead(dart.fn(() => {
        this[_readElement]();
        let newValue = this[_scrollingMove];
        if (!(dart.notNull(this[_buttonSize]) > 0)) dart.assertFailed();
        if (dart.test(this.atEnd)) {
          newValue = dart.notNull(newValue) - dart.notNull(this[_buttonSize]);
        }
        if (this[_transform][$abs]() - dart.notNull(newValue) < 0) {
          newValue = this[_transform][$abs]();
        }
        if (dart.test(this[_isVertical]) || !dart.test(this[_isRtl])) {
          this[_transform] = dart.notNull(this[_transform]) + dart.notNull(newValue);
        } else {
          this[_transform] = dart.notNull(this[_transform]) - dart.notNull(newValue);
        }
        this[_updateTransform]();
      }, VoidToNull())));
    }
    scrollForward() {
      this[_disposer].addDisposable(utils__disposer__disposer.Disposable, this[_domService].scheduleRead(dart.fn(() => {
        this[_readElement]();
        let newValue = this[_scrollingMove];
        if (!(dart.notNull(this[_buttonSize]) > 0)) dart.assertFailed();
        if (dart.test(this.atStart)) {
          newValue = dart.notNull(newValue) - dart.notNull(this[_buttonSize]);
        }
        if (dart.notNull(this[_scrollSize]) + dart.notNull(this[_transform]) < dart.notNull(newValue) + dart.notNull(this[_clientSize])) {
          newValue = dart.notNull(this[_scrollSize]) + dart.notNull(this[_transform]) - dart.notNull(this[_clientSize]);
        }
        if (dart.test(this[_isVertical]) || !dart.test(this[_isRtl])) {
          this[_transform] = dart.notNull(this[_transform]) - dart.notNull(newValue);
        } else {
          this[_transform] = dart.notNull(this[_transform]) + dart.notNull(newValue);
        }
        this[_updateTransform]();
      }, VoidToNull())));
    }
    reset() {
      if (this[_transform] !== 0) {
        this[_transform] = 0;
        this[_updateTransform]();
      }
      this[_disposer].addDisposable(utils__disposer__disposer.Disposable, this[_domService].scheduleRead(dart.fn(() => {
        this[_readElement]();
        this[_refreshController].add(true);
      }, VoidToNull())));
    }
    [_updateTransform]() {
      this[_disposer].addDisposable(utils__disposer__disposer.Disposable, this[_domService].scheduleWrite(dart.fn(() => {
        this[_element].style[$transform] = dart.str`translate${this.transformAxis}(${this[_transform]}px)`;
        this[_refreshController].add(true);
      }, VoidToNull())));
    }
    [_readElement](opts) {
      let windowResize = opts && 'windowResize' in opts ? opts.windowResize : false;
      if (!dart.test(this[_domService].isReadingDom)) dart.assertFailed();
      this[_clientSize] = this.currentClientSize;
      this[_scrollSize] = this.currentScrollSize;
      if (dart.dtest(windowResize) && !dart.test(this.isScrollable) && this[_transform] !== 0) {
        this.reset();
        return;
      }
      this[_getButtonSize]();
      if (dart.test(this[_element][$children][$isNotEmpty]) && dart.notNull(this[_scrollSize]) > 0) {
        let avg = dart.notNull(this[_scrollSize]) / dart.notNull(this[_element][$children][$length]);
        let temp = ((dart.notNull(this[_clientSize]) - dart.notNull(this[_buttonSize]) * 2) / avg)[$floor]();
        this[_scrollingMove] = (temp * avg)[$floor]();
      } else {
        this[_scrollingMove] = this[_clientSize];
      }
    }
    [_getButtonSize]() {
      if (this[_buttonSize] === 0) {
        let buttons = this[_element][$parent][$querySelectorAll](html.Element, '.scroll-button');
        for (let button of buttons) {
          let dimension = dart.test(this[_isVertical]) ? 'height' : 'width';
          let size = button[$getComputedStyle]()[$getPropertyValue](dimension);
          if (size !== 'auto') {
            this[_buttonSize] = core.double.parse(size[$replaceAll](core.RegExp.new('[^0-9.]'), ''), dart.fn(_ => 0.0, StringTodouble()))[$floor]();
            break;
          }
        }
      }
    }
  };
  (src__scorecard__scorecard_bar.ScorecardBarDirective.new = function(domService, element, isRtl) {
    this[_refreshController] = StreamControllerOfbool().broadcast();
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_isRtl] = null;
    this[_isVertical] = null;
    this[_clientSize] = null;
    this[_scrollSize] = null;
    this[_scrollingMove] = null;
    this[_transform] = 0;
    this[_buttonSize] = 0;
    this[_domService] = domService;
    this[_element] = element;
    this[_isRtl] = isRtl != null ? isRtl : false;
  }).prototype = src__scorecard__scorecard_bar.ScorecardBarDirective.prototype;
  dart.addTypeTests(src__scorecard__scorecard_bar.ScorecardBarDirective);
  src__scorecard__scorecard_bar.ScorecardBarDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy, src__core__metadata__lifecycle_hooks.AfterViewChecked];
  dart.setMethodSignature(src__scorecard__scorecard_bar.ScorecardBarDirective, () => ({
    __proto__: dart.getMethods(src__scorecard__scorecard_bar.ScorecardBarDirective.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewChecked: dart.fnType(dart.void, []),
    scrollBack: dart.fnType(dart.void, []),
    scrollForward: dart.fnType(dart.void, []),
    reset: dart.fnType(dart.void, []),
    [_updateTransform]: dart.fnType(dart.void, []),
    [_readElement]: dart.fnType(dart.void, [], {windowResize: dart.dynamic}),
    [_getButtonSize]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__scorecard__scorecard_bar.ScorecardBarDirective, () => ({
    __proto__: dart.getGetters(src__scorecard__scorecard_bar.ScorecardBarDirective.__proto__),
    refreshStream: dart.fnType(async.Stream$(core.bool), []),
    isScrollable: dart.fnType(core.bool, []),
    atStart: dart.fnType(core.bool, []),
    atEnd: dart.fnType(core.bool, []),
    currentClientSize: dart.fnType(core.int, []),
    currentScrollSize: dart.fnType(core.int, []),
    transformAxis: dart.fnType(core.String, []),
    currentTransformSize: dart.fnType(core.int, []),
    currentButtonSize: dart.fnType(core.int, [])
  }));
  dart.setSetterSignature(src__scorecard__scorecard_bar.ScorecardBarDirective, () => ({
    __proto__: dart.getSetters(src__scorecard__scorecard_bar.ScorecardBarDirective.__proto__),
    isVertical: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__scorecard__scorecard_bar.ScorecardBarDirective, () => ({
    __proto__: dart.getFields(src__scorecard__scorecard_bar.ScorecardBarDirective.__proto__),
    [_refreshController]: dart.finalFieldType(StreamControllerOfbool()),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_element]: dart.finalFieldType(html.HtmlElement),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_isRtl]: dart.fieldType(core.bool),
    [_isVertical]: dart.fieldType(core.bool),
    [_clientSize]: dart.fieldType(core.int),
    [_scrollSize]: dart.fieldType(core.int),
    [_scrollingMove]: dart.fieldType(core.int),
    [_transform]: dart.fieldType(core.int),
    [_buttonSize]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/angular_components/src/scorecard/scorecard_bar.ddc", {
    "package:angular_components/src/scorecard/scorecard_bar.dart": src__scorecard__scorecard_bar
  }, '{"version":3,"sourceRoot":"","sources":["scorecard_bar.dart"],"names":[],"mappings":"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","file":"scorecard_bar.ddc.js"}');
  // Exports:
  return {
    src__scorecard__scorecard_bar: src__scorecard__scorecard_bar
  };
});

//# sourceMappingURL=scorecard_bar.ddc.js.map
