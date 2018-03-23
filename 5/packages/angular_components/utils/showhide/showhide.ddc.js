define(['dart_sdk', 'packages/async/async', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, async, lifecycle_hooks, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async$ = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__stream_queue = async.src__stream_queue;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const _root = Object.create(null);
  const utils__showhide__showhide = Object.create(_root);
  const $onTransitionEnd = dartx.onTransitionEnd;
  const $classes = dartx.classes;
  const $transitionDuration = dartx.transitionDuration;
  const $getComputedStyle = dartx.getComputedStyle;
  const $isEmpty = dartx.isEmpty;
  const $floor = dartx.floor;
  let StreamControllerOfElement = () => (StreamControllerOfElement = dart.constFn(async$.StreamController$(html.Element)))();
  let StreamQueueOfTransitionEvent = () => (StreamQueueOfTransitionEvent = dart.constFn(src__stream_queue.StreamQueue$(html.TransitionEvent)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let numToNull = () => (numToNull = dart.constFn(dart.fnType(core.Null, [core.num])))();
  let __Tovoid = () => (__Tovoid = dart.constFn(dart.fnType(dart.void, [], [dart.dynamic])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async$.Future$(dart.void)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _element = Symbol('_element');
  const _domService = Symbol('_domService');
  const _transitionEndQueue = Symbol('_transitionEndQueue');
  const _initialized = Symbol('_initialized');
  const _initialWritePending = Symbol('_initialWritePending');
  const _hiding = Symbol('_hiding');
  const _onHide = Symbol('_onHide');
  const _onShow = Symbol('_onShow');
  const _onShowEnd = Symbol('_onShowEnd');
  const _onHideEnd = Symbol('_onHideEnd');
  const _stopHiding = Symbol('_stopHiding');
  const _show = Symbol('_show');
  const _hide = Symbol('_hide');
  const _removeNgHide = Symbol('_removeNgHide');
  const _onTransitionEnd = Symbol('_onTransitionEnd');
  const _hideIfHiding = Symbol('_hideIfHiding');
  utils__showhide__showhide.ShowHideDirective = class ShowHideDirective extends core.Object {
    ngOnInit() {
      this[_initialized] = true;
    }
    ngOnDestroy() {
      this[_stopHiding]();
    }
    get onHide() {
      return this[_onHide].stream;
    }
    get onShow() {
      return this[_onShow].stream;
    }
    get onShowEnd() {
      return this[_onShowEnd].stream;
    }
    get onHideEnd() {
      return this[_onHideEnd].stream;
    }
    set visible(value) {
      if (dart.test(this[_initialized])) {
        dart.test(value) ? this[_show]() : this[_hide]();
      } else {
        this[_initialWritePending] = true;
        this[_domService].scheduleWrite(dart.fn(() => {
          this[_element][$classes].toggle(utils__showhide__showhide.ShowHideDirective.NG_HIDE_CLASS, !dart.test(value));
          this[_element][$classes].toggle(utils__showhide__showhide.ShowHideDirective.NG_HIDDEN_CLASS, !dart.test(value));
          this[_initialWritePending] = false;
        }, VoidToNull()));
      }
    }
    [_show]() {
      this[_stopHiding]();
      this[_domService].scheduleRead(dart.fn(() => {
        if (dart.test(this[_initialWritePending]) || dart.test(this[_element][$classes].contains(utils__showhide__showhide.ShowHideDirective.NG_HIDDEN_CLASS))) {
          this[_domService].scheduleWrite(dart.fn(() => {
            this[_element][$classes].remove(utils__showhide__showhide.ShowHideDirective.NG_HIDDEN_CLASS);
          }, VoidToNull()));
          this[_domService].nextFrame.then(core.Null, dart.fn(_ => {
            this[_removeNgHide]();
          }, numToNull()));
        } else {
          this[_removeNgHide]();
        }
      }, VoidToNull()));
    }
    [_removeNgHide]() {
      if (dart.test(this[_hiding])) return;
      this[_domService].scheduleWrite(dart.fn(() => {
        this[_element][$classes].remove(utils__showhide__showhide.ShowHideDirective.NG_HIDE_CLASS);
        this[_onShow].add(this[_element]);
      }, VoidToNull()));
      this[_onTransitionEnd](dart.fn(() => {
        this[_onShowEnd].add(this[_element]);
      }, VoidToNull()));
    }
    [_onTransitionEnd](callback) {
      this[_domService].scheduleRead(dart.fn(() => {
        let finished = false;
        function complete(_) {
          if (_ === void 0) _ = null;
          if (!finished) {
            finished = true;
            callback();
          }
        }
        dart.fn(complete, __Tovoid());
        let duration = utils__showhide__showhide.ShowHideDirective._transitionDurationMs(this[_element]);
        if (dart.notNull(duration) > 0) {
          this[_transitionEndQueue].next.then(dart.void, complete);
        }
        let timeout = new core.Duration.new({milliseconds: dart.notNull(duration) + dart.notNull(utils__showhide__showhide.ShowHideDirective.TRANSITION_TIMEOUT_MS)});
        FutureOfvoid().delayed(timeout, complete);
      }, VoidToNull()));
    }
    [_hide]() {
      this[_hiding] = true;
      this[_domService].scheduleWrite(dart.fn(() => {
        this[_element][$classes].add(utils__showhide__showhide.ShowHideDirective.NG_HIDE_CLASS);
        this[_onHide].add(this[_element]);
      }, VoidToNull()));
      this[_onTransitionEnd](dart.bind(this, _hideIfHiding));
    }
    [_hideIfHiding]() {
      if (dart.test(this[_hiding])) {
        this[_domService].scheduleWrite(dart.fn(() => {
          this[_element][$classes].add(utils__showhide__showhide.ShowHideDirective.NG_HIDDEN_CLASS);
        }, VoidToNull()));
        this[_onHideEnd].add(this[_element]);
        this[_hiding] = false;
      }
      this[_stopHiding]();
    }
    [_stopHiding]() {
      this[_hiding] = false;
    }
    static _transitionDurationMs(element) {
      let duration = element[$getComputedStyle]()[$transitionDuration];
      if (duration == null || duration[$isEmpty]) return 0;
      let matches = core.RegExp.new("([0-9.]+)([ms]+)").matchAsPrefix(duration);
      if (matches == null || dart.notNull(matches.groupCount) < 2) return 0;
      let value = core.double.parse(matches._get(1));
      let unit = matches._get(2);
      if (unit === "s") return (dart.notNull(value) * 1000)[$floor]();
      if (unit === "ms") return value[$floor]();
      return 0;
    }
  };
  (utils__showhide__showhide.ShowHideDirective.new = function(element, domService) {
    this[_transitionEndQueue] = null;
    this[_initialized] = false;
    this[_initialWritePending] = false;
    this[_hiding] = true;
    this[_onHide] = StreamControllerOfElement().broadcast({sync: true});
    this[_onShow] = StreamControllerOfElement().broadcast({sync: true});
    this[_onShowEnd] = StreamControllerOfElement().broadcast({sync: true});
    this[_onHideEnd] = StreamControllerOfElement().broadcast({sync: true});
    this[_element] = element;
    this[_domService] = domService;
    this[_transitionEndQueue] = StreamQueueOfTransitionEvent().new(this[_element][$onTransitionEnd]);
  }).prototype = utils__showhide__showhide.ShowHideDirective.prototype;
  dart.addTypeTests(utils__showhide__showhide.ShowHideDirective);
  utils__showhide__showhide.ShowHideDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(utils__showhide__showhide.ShowHideDirective, () => ({
    __proto__: dart.getMethods(utils__showhide__showhide.ShowHideDirective.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_show]: dart.fnType(dart.void, []),
    [_removeNgHide]: dart.fnType(dart.void, []),
    [_onTransitionEnd]: dart.fnType(dart.void, [VoidTovoid()]),
    [_hide]: dart.fnType(dart.void, []),
    [_hideIfHiding]: dart.fnType(dart.void, []),
    [_stopHiding]: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(utils__showhide__showhide.ShowHideDirective, () => ({_transitionDurationMs: dart.fnType(core.int, [html.Element])}));
  dart.setGetterSignature(utils__showhide__showhide.ShowHideDirective, () => ({
    __proto__: dart.getGetters(utils__showhide__showhide.ShowHideDirective.__proto__),
    onHide: dart.fnType(async$.Stream$(html.Element), []),
    onShow: dart.fnType(async$.Stream$(html.Element), []),
    onShowEnd: dart.fnType(async$.Stream$(html.Element), []),
    onHideEnd: dart.fnType(async$.Stream$(html.Element), [])
  }));
  dart.setSetterSignature(utils__showhide__showhide.ShowHideDirective, () => ({
    __proto__: dart.getSetters(utils__showhide__showhide.ShowHideDirective.__proto__),
    visible: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(utils__showhide__showhide.ShowHideDirective, () => ({
    __proto__: dart.getFields(utils__showhide__showhide.ShowHideDirective.__proto__),
    [_element]: dart.finalFieldType(html.Element),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_transitionEndQueue]: dart.fieldType(StreamQueueOfTransitionEvent()),
    [_initialized]: dart.fieldType(core.bool),
    [_initialWritePending]: dart.fieldType(core.bool),
    [_hiding]: dart.fieldType(core.bool),
    [_onHide]: dart.fieldType(StreamControllerOfElement()),
    [_onShow]: dart.fieldType(StreamControllerOfElement()),
    [_onShowEnd]: dart.fieldType(StreamControllerOfElement()),
    [_onHideEnd]: dart.fieldType(StreamControllerOfElement())
  }));
  dart.defineLazy(utils__showhide__showhide.ShowHideDirective, {
    /*utils__showhide__showhide.ShowHideDirective.NG_HIDE_CLASS*/get NG_HIDE_CLASS() {
      return 'ng-hide';
    },
    set NG_HIDE_CLASS(_) {},
    /*utils__showhide__showhide.ShowHideDirective.NG_HIDDEN_CLASS*/get NG_HIDDEN_CLASS() {
      return 'ng-hidden';
    },
    set NG_HIDDEN_CLASS(_) {},
    /*utils__showhide__showhide.ShowHideDirective.TRANSITION_TIMEOUT_MS*/get TRANSITION_TIMEOUT_MS() {
      return 16;
    },
    set TRANSITION_TIMEOUT_MS(_) {}
  });
  dart.trackLibraries("packages/angular_components/utils/showhide/showhide.ddc", {
    "package:angular_components/utils/showhide/showhide.dart": utils__showhide__showhide
  }, '{"version":3,"sourceRoot":"","sources":["showhide.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuCI,wBAAY,GAAG;IACjB;;AAIE,uBAAW;IACb;;YAI8B,cAAO,OAAO;;;YAKd,cAAO,OAAO;;;YAKX,iBAAU,OAAO;;;YAKjB,iBAAU,OAAO;;gBAItC,KAAU;AACpB,oBAAI,kBAAY,GAAE;AAChB,uBAAK,IAAG,WAAK,KAAK,WAAK;aAClB;AACL,kCAAoB,GAAG;AACvB,yBAAW,cAAc,CAAC;AACxB,wBAAQ,UAAQ,OAAO,CAAC,yDAAa,EAAE,WAAC,KAAK;AAC7C,wBAAQ,UAAQ,OAAO,CAAC,2DAAe,EAAE,WAAC,KAAK;AAC/C,oCAAoB,GAAG;;;IAG7B;;AAGE,uBAAW;AACX,uBAAW,aAAa,CAAC;AACvB,sBAAI,0BAAoB,eAAI,cAAQ,UAAQ,SAAS,CAAC,2DAAe,IAAG;AACtE,2BAAW,cAAc,CAAC;AACxB,0BAAQ,UAAQ,OAAO,CAAC,2DAAe;;AAKzC,2BAAW,UAAU,KAAK,YAAC,QAAC,CAAC;AAC3B,+BAAa;;eAEV;AACL,6BAAa;;;IAGnB;;AAGE,oBAAI,aAAO,GAAE;AACb,uBAAW,cAAc,CAAC;AACxB,sBAAQ,UAAQ,OAAO,CAAC,yDAAa;AACrC,qBAAO,IAAI,CAAC,cAAQ;;AAEtB,4BAAgB,CAAC;AACf,wBAAU,IAAI,CAAC,cAAQ;;IAE3B;uBAEsB,QAAe;AACnC,uBAAW,aAAa,CAAC;AACvB,YAAK,WAAW;AAChB,iBAAK,SAAU,CAAC;4BAAD;AACb,eAAK,QAAQ,EAAE;AACb,oBAAQ,GAAG;AACX,oBAAQ;;;gBAHP;AAOL,YAAI,WAAW,iEAAqB,CAAC,cAAQ;AAC7C,YAAa,aAAT,QAAQ,IAAG,GAAG;AAChB,mCAAmB,KAAK,KAAK,YAAC,QAAQ;;AAIxC,YAAS,UACL,IAAI,iBAAQ,gBAAwB,aAAT,QAAQ,iBAAG,iEAAqB;AAC/D,QAAI,sBAAc,CAAC,OAAO,EAAE,QAAQ;;IAExC;;AAGE,mBAAO,GAAG;AACV,uBAAW,cAAc,CAAC;AACxB,sBAAQ,UAAQ,IAAI,CAAC,yDAAa;AAClC,qBAAO,IAAI,CAAC,cAAQ;;AAEtB,4BAAgB,CAAC,8BAAa;IAChC;;AAKE,oBAAI,aAAO,GAAE;AACX,yBAAW,cAAc,CAAC;AACxB,wBAAQ,UAAQ,IAAI,CAAC,2DAAe;;AAEtC,wBAAU,IAAI,CAAC,cAAQ;AACvB,qBAAO,GAAG;;AAEZ,uBAAW;IACb;;AAGE,mBAAO,GAAG;IACZ;iCAEiC,OAAe;AAC9C,UAAO,WAAW,OAAO,mBAAiB,uBAAqB;AAC/D,UAAI,QAAQ,IAAI,QAAQ,QAAQ,UAAQ,EAAE,MAAO;AAIjD,UAAM,UAAU,AAAI,eAAM,CAAC,iCAAkC,CAAC,QAAQ;AACtE,UAAI,OAAO,IAAI,QAA2B,aAAnB,OAAO,WAAW,IAAG,GAAG,MAAO;AAEtD,UAAO,QAAQ,WAAM,MAAM,CAAC,OAAO,MAAC;AACpC,UAAO,OAAO,OAAO,MAAC;AACtB,UAAI,IAAI,KAAI,KAAK,MAAO,EAAO,aAAN,KAAK,IAAG,aAAW;AAC5C,UAAI,IAAI,KAAI,MAAM,MAAO,MAAK,QAAM;AACpC,YAAO;IACT;;8DA5IuB,OAAQ,EAAO,UAAW;IANpB,yBAAmB;IAE3C,kBAAY,GAAG;IACf,0BAAoB,GAAG;IACvB,aAAO,GAAG;IAmBX,aAAO,GAAG,AAAI,qCAAmC,QAAO;IAKxD,aAAO,GAAG,AAAI,qCAAmC,QAAO;IAKxD,gBAAU,GAAG,AAAI,qCAAmC,QAAO;IAK3D,gBAAU,GAAG,AAAI,qCAAmC,QAAO;IAhCxC,cAAQ,GAAR,OAAQ;IAAO,iBAAW,GAAX,UAAW;AAC/C,6BAAmB,GAAG,AAAI,kCAAW,CAAC,cAAQ,kBAAgB;EAChE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAfc,yDAAa;YAAG;;;MAChB,2DAAe;YAAG;;;MAErB,iEAAqB;YAAG","file":"showhide.ddc.js"}');
  // Exports:
  return {
    utils__showhide__showhide: utils__showhide__showhide
  };
});

//# sourceMappingURL=showhide.ddc.js.map
