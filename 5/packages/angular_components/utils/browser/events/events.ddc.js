define(['dart_sdk', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/utils/browser/feature_detector/feature_detector'], function(dart_sdk, element_ref, feature_detector) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const math = dart_sdk.math;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const utils__browser__feature_detector__feature_detector = feature_detector.utils__browser__feature_detector__feature_detector;
  const _root = Object.create(null);
  const utils__browser__events__events = Object.create(_root);
  const $target = dartx.target;
  const $parent = dartx.parent;
  const $onMouseUp = dartx.onMouseUp;
  const $onClick = dartx.onClick;
  const $addEventListener = dartx.addEventListener;
  const $removeEventListener = dartx.removeEventListener;
  const $containsKey = dartx.containsKey;
  const $attributes = dartx.attributes;
  const $toLowerCase = dartx.toLowerCase;
  const $classes = dartx.classes;
  let KeyboardEventTobool = () => (KeyboardEventTobool = dart.constFn(dart.fnType(core.bool, [html.KeyboardEvent])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let MouseEventTobool = () => (MouseEventTobool = dart.constFn(dart.fnType(core.bool, [html.MouseEvent])))();
  let FnToFn = () => (FnToFn = dart.constFn(dart.gFnType(T => [dart.fnType(core.bool, [T]), [dart.fnType(core.bool, [T])]])))();
  let NodeTobool = () => (NodeTobool = dart.constFn(dart.fnType(core.bool, [html.Node])))();
  let StreamOfEvent = () => (StreamOfEvent = dart.constFn(async.Stream$(html.Event)))();
  let dynamicToStreamOfEvent = () => (dynamicToStreamOfEvent = dart.constFn(dart.fnType(StreamOfEvent(), [dart.dynamic])))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StreamControllerOfEvent = () => (StreamControllerOfEvent = dart.constFn(async.StreamController$(html.Event)))();
  let NodeTobool$ = () => (NodeTobool$ = dart.constFn(dart.fnType(core.bool, [html.Node])))();
  let FnToStreamOfEvent = () => (FnToStreamOfEvent = dart.constFn(dart.fnType(StreamOfEvent(), [NodeTobool$()])))();
  let IterableOfIntersectionObserverEntry = () => (IterableOfIntersectionObserverEntry = dart.constFn(core.Iterable$(html.IntersectionObserverEntry)))();
  let IterableOfResizeObserverEntry = () => (IterableOfResizeObserverEntry = dart.constFn(core.Iterable$(dart.anonymousJSType("ResizeObserverEntry"))))();
  let IterableOfResizeObserverEntryAndResizeObserverToNull = () => (IterableOfResizeObserverEntryAndResizeObserverToNull = dart.constFn(dart.fnType(core.Null, [IterableOfResizeObserverEntry(), dart.lazyJSType(() => dart.global.ResizeObserver, "ResizeObserver")])))();
  let IterableOfResizeObserverEntryAndResizeObserverTovoid = () => (IterableOfResizeObserverEntryAndResizeObserverTovoid = dart.constFn(dart.fnType(dart.void, [IterableOfResizeObserverEntry(), dart.lazyJSType(() => dart.global.ResizeObserver, "ResizeObserver")])))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let StreamControllerOfRectangleOfnum = () => (StreamControllerOfRectangleOfnum = dart.constFn(async.StreamController$(RectangleOfnum())))();
  let StreamOfRectangleOfnum = () => (StreamOfRectangleOfnum = dart.constFn(async.Stream$(RectangleOfnum())))();
  let ElementToStreamOfRectangleOfnum = () => (ElementToStreamOfRectangleOfnum = dart.constFn(dart.fnType(StreamOfRectangleOfnum(), [html.Element])))();
  let ElementAndStringTobool = () => (ElementAndStringTobool = dart.constFn(dart.fnType(core.bool, [html.Element, core.String])))();
  let ElementAndStringToElement = () => (ElementAndStringToElement = dart.constFn(dart.fnType(html.Element, [html.Element, core.String])))();
  let ElementAndNodeTobool = () => (ElementAndNodeTobool = dart.constFn(dart.fnType(core.bool, [html.Element, html.Node])))();
  let NodeAndNodeToint = () => (NodeAndNodeToint = dart.constFn(dart.fnType(core.int, [html.Node, html.Node])))();
  utils__browser__events__events.isSpaceKey = function(event) {
    return event.keyCode !== 0 ? event.keyCode === html.KeyCode.SPACE : event.key === ' ';
  };
  dart.fn(utils__browser__events__events.isSpaceKey, KeyboardEventTobool());
  utils__browser__events__events.isKeyboardTrigger = function(event) {
    return event.keyCode === html.KeyCode.ENTER || dart.test(utils__browser__events__events.isSpaceKey(event));
  };
  dart.fn(utils__browser__events__events.isKeyboardTrigger, KeyboardEventTobool());
  utils__browser__events__events.modifierKeyUsed = function(event) {
    if (!html.KeyboardEvent.is(event) && !html.MouseEvent.is(event)) {
      dart.throw(new core.ArgumentError.new(dart.str`${event} is not supported`));
    }
    return dart.dtest(dart.dload(event, 'ctrlKey')) || dart.dtest(dart.dload(event, 'shiftKey'));
  };
  dart.fn(utils__browser__events__events.modifierKeyUsed, dynamicTobool());
  utils__browser__events__events.isStandardMouseEvent = function(event) {
    return !(event.button !== 0 || dart.test(event.altKey) || dart.test(event.ctrlKey) || dart.test(event.metaKey));
  };
  dart.fn(utils__browser__events__events.isStandardMouseEvent, MouseEventTobool());
  utils__browser__events__events.Predicate$ = dart.generic(T => {
    const Predicate = dart.typedef('Predicate', () => dart.fnType(core.bool, [T]));
    return Predicate;
  });
  utils__browser__events__events.Predicate = utils__browser__events__events.Predicate$();
  utils__browser__events__events.not = function(T, predicate) {
    return dart.fn(value => !dart.test(predicate(value)), dart.fnType(core.bool, [T]));
  };
  dart.fn(utils__browser__events__events.not, FnToFn());
  utils__browser__events__events.triggersOutside = function(element) {
    if (src__core__linker__element_ref.ElementRef.is(element)) element = dart.dload(element, 'nativeElement');
    return utils__browser__events__events.triggersOutsideAny(dart.fn(node => dart.equals(node, element), NodeTobool()));
  };
  dart.fn(utils__browser__events__events.triggersOutside, dynamicToStreamOfEvent());
  utils__browser__events__events.triggersOutsideAny = function(checkNodeInside) {
    let controller = null;
    let clickListener = null;
    let mouseUpListener = null;
    let listener = null;
    controller = StreamControllerOfEvent().broadcast({sync: true, onListen: dart.fn(() => {
        if (!(clickListener == null)) dart.assertFailed();
        if (!(mouseUpListener == null)) dart.assertFailed();
        let lastEvent = null;
        listener = dart.fn(e => {
          lastEvent = e;
          let node = html.Node.as(e[$target]);
          while (node != null) {
            if (dart.test(checkNodeInside(node))) {
              return;
            } else {
              node = node[$parent];
            }
          }
          controller.add(e);
        }, EventToNull());
        mouseUpListener = html.document[$onMouseUp].listen(listener);
        clickListener = html.document[$onClick].listen(dart.fn(e => {
          if ((() => {
            let t = lastEvent;
            return t == null ? null : t.type;
          })() === 'mouseup' && dart.equals(e[$target], (() => {
            let t = lastEvent;
            return t == null ? null : t[$target];
          })())) return;
          listener(e);
        }, MouseEventToNull()));
        html.document[$addEventListener]('focus', listener, true);
        html.document[$addEventListener]('touchend', listener);
      }, VoidToNull()), onCancel: dart.fn(() => {
        clickListener.cancel();
        clickListener = null;
        mouseUpListener.cancel();
        mouseUpListener = null;
        html.document[$removeEventListener]('focus', listener, true);
        html.document[$removeEventListener]('touchend', listener);
      }, VoidToNull())});
    return controller.stream;
  };
  dart.fn(utils__browser__events__events.triggersOutsideAny, FnToStreamOfEvent());
  utils__browser__events__events.IntersectionObserverCallback = dart.typedef('IntersectionObserverCallback', () => dart.fnType(dart.void, [IterableOfIntersectionObserverEntry(), dart.lazyJSType(() => dart.global.IntersectionObserver, "IntersectionObserver")]));
  utils__browser__events__events.ResizeObserverCallback = dart.typedef('ResizeObserverCallback', () => dart.fnType(dart.void, [IterableOfResizeObserverEntry(), dart.lazyJSType(() => dart.global.ResizeObserver, "ResizeObserver")]));
  utils__browser__events__events.onResize = function(element) {
    if (!dart.test(utils__browser__feature_detector__feature_detector.supportsResizeObserver)) dart.assertFailed('ResizeObserver support is required');
    let controller = null;
    let observer = null;
    controller = StreamControllerOfRectangleOfnum().broadcast({sync: true, onListen: dart.fn(() => {
        observer = new dart.global.ResizeObserver(js.allowInterop(IterableOfResizeObserverEntryAndResizeObserverTovoid(), dart.fn((entries, _) => {
          for (let entry of entries) {
            controller.add(entry.contentRect);
          }
        }, IterableOfResizeObserverEntryAndResizeObserverToNull())));
        observer.observe(element);
      }, VoidToNull()), onCancel: dart.fn(() => {
        observer.disconnect();
      }, VoidToNull())});
    return controller.stream;
  };
  dart.fn(utils__browser__events__events.onResize, ElementToStreamOfRectangleOfnum());
  utils__browser__events__events.anyParentHasAttribute = function(target, attribute) {
    while (target != null) {
      if (dart.test(target[$attributes][$containsKey](attribute))) {
        return true;
      }
      target = target[$parent];
    }
    return false;
  };
  dart.fn(utils__browser__events__events.anyParentHasAttribute, ElementAndStringTobool());
  utils__browser__events__events.anyParentHasTag = function(target, componentTag) {
    componentTag = componentTag[$toLowerCase]();
    while (target != null) {
      if (target.tagName[$toLowerCase]() === componentTag) {
        return true;
      }
      target = target[$parent];
    }
    return false;
  };
  dart.fn(utils__browser__events__events.anyParentHasTag, ElementAndStringTobool());
  utils__browser__events__events.anyParentHasClass = function(target, className) {
    return utils__browser__events__events.closestWithClass(target, className) != null;
  };
  dart.fn(utils__browser__events__events.anyParentHasClass, ElementAndStringTobool());
  utils__browser__events__events.closestWithClass = function(target, className) {
    while (target != null) {
      if (dart.test(target[$attributes][$containsKey]("class")) && dart.test(target[$classes].contains(className))) {
        return target;
      }
      target = target[$parent];
    }
    return null;
  };
  dart.fn(utils__browser__events__events.closestWithClass, ElementAndStringToElement());
  utils__browser__events__events.isParentOf = function(element, node) {
    while (node != null) {
      if (dart.equals(node, element)) {
        return true;
      } else {
        node = node[$parent];
      }
    }
    return false;
  };
  dart.fn(utils__browser__events__events.isParentOf, ElementAndNodeTobool());
  utils__browser__events__events.compareDocumentPosition = function(a, b) {
    let bitmask = core.int._check(js_util.callMethod(a, 'compareDocumentPosition', [b]));
    if ((dart.notNull(bitmask) & 4) !== 0 || (dart.notNull(bitmask) & 16) !== 0) {
      return -1;
    } else if ((dart.notNull(bitmask) & 2) !== 0 || (dart.notNull(bitmask) & 8) !== 0) {
      return 1;
    } else {
      return 0;
    }
  };
  dart.fn(utils__browser__events__events.compareDocumentPosition, NodeAndNodeToint());
  dart.trackLibraries("packages/angular_components/utils/browser/events/events.ddc", {
    "package:angular_components/utils/browser/events/events.dart": utils__browser__events__events
  }, '{"version":3,"sourceRoot":"","sources":["events.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uDAmBgB,KAAmB;AAEjC,UAAO,MAAK,QAAQ,KAAI,IAAI,KAAK,QAAQ,KAAI,YAAO,MAAM,GAAG,KAAK,IAAI,KAAI;EAC5E;;8DAEuB,KAAmB;UACtC,AAA+B,MAA1B,QAAQ,KAAI,YAAO,MAAM,cAAI,yCAAU,CAAC,KAAK;EAAC;;4DAElC,KAA8C;AACjE,+BAAI,KAAK,yBAAsB,KAAK,GAAiB;AACnD,iBAAM,IAAI,sBAAa,CAAC,WAAE,KAAK;;AAEjC,UAAsB,uBAAd,KAAK,uCAAY,KAAK;EAChC;;iEAI0B,KAAgB;UACtC,GAAE,KAAK,OAAO,KAAI,eAAK,KAAK,OAAO,eAAI,KAAK,QAAQ,eAAI,KAAK,QAAQ;EAAC;;;;;;;mDAItD,SAAsB;UAAK,SAAC,KAAK,IAAK,WAAC,SAAS,CAAC,KAAK;EAAC;;4DAG7C,OAA0C;AACtE,qDAAI,OAAO,GAAgB,OAAO,cAAG,OAAO;AAC5C,UAAO,kDAAkB,CAAC,QAAC,IAAI,gBAAK,IAAI,EAAI,OAAO;EACrD;;+DAIiC,eAA+B;AAC9D,QAAwB;AACxB,QAA+B;AAC/B,QAA+B;AAC/B,QAAc;AAEd,cAAU,GAAG,AAAI,mCAA0B,QACjC,gBACI;AACR,cAAO,aAAa,IAAI;AACxB,cAAO,eAAe,IAAI;AAE1B,YAAM;AAEN,gBAAQ,GAAG,QAAC,CAAO;AACjB,mBAAS,GAAG,CAAC;AACb,cAAI,oBAAO,CAAC,SAAO;AACnB,iBAAO,IAAI,IAAI,MAAM;AACnB,0BAAI,eAAe,CAAC,IAAI,IAAG;AACzB;mBACK;AACL,kBAAI,GAAG,IAAI,SAAO;;;AAGtB,oBAAU,IAAI,CAAC,CAAC;;AAMlB,uBAAe,GAAG,aAAQ,YAAU,OAAO,CAAC,QAAQ;AAIpD,qBAAa,GAAG,aAAQ,UAAQ,OAAO,CAAC,QAAC,CAAY;AAGnD;oBAAI,SAAS;;mBAAU,yBAAa,CAAC,SAAO;oBAAI,SAAS;;iBACvD;AACF,kBAAQ,CAAC,CAAC;;AAMZ,qBAAQ,mBAAiB,CAAC,SAAS,QAAQ,EAAE;AAI7C,qBAAQ,mBAAiB,CAAC,YAAY,QAAQ;kCAEtC;AACR,qBAAa,OAAO;AACpB,qBAAa,GAAG;AAChB,uBAAe,OAAO;AACtB,uBAAe,GAAG;AAClB,qBAAQ,sBAAoB,CAAC,SAAS,QAAQ,EAAE;AAChD,qBAAQ,sBAAoB,CAAC,YAAY,QAAQ;;AAEvD,UAAO,WAAU,OAAO;EAC1B;;;;qDAoJ2B,OAAe;AACxC,mBAAO,yEAAsB,qBAAE;AAC/B,QAA4B;AAC5B,QAAe;AACf,cAAU,GAAG,AAAI,4CAAqC,QAC5C,gBACI;AACR,gBAAQ,GAAG,IAAI,0BAAc,CAAC,eAAY,yDAAC,SAAC,OAAO,EAAE,CAAC;AACpD,mBAAS,QAAS,QAAO,EAAE;AACzB,sBAAU,IAAI,CAAC,KAAK,YAAY;;;AAGpC,gBAAQ,QAAQ,CAAC,OAAO;kCAEhB;AACR,gBAAQ,WAAW;;AAEzB,UAAO,WAAU,OAAO;EAC1B;;kEAQ2B,MAAc,EAAE,SAAgB;AACzD,WAAO,MAAM,IAAI,MAAM;AACrB,oBAAI,MAAM,aAAW,cAAY,CAAC,SAAS,IAAG;AAC5C,cAAO;;AAET,YAAM,GAAG,MAAM,SAAO;;AAExB,UAAO;EACT;;4DAOqB,MAAc,EAAE,YAAmB;AACtD,gBAAY,GAAG,YAAY,cAAY;AACvC,WAAO,MAAM,IAAI,MAAM;AACrB,UAAI,MAAM,QAAQ,cAAY,OAAM,YAAY,EAAE;AAChD,cAAO;;AAET,YAAM,GAAG,MAAM,SAAO;;AAExB,UAAO;EACT;;8DAQuB,MAAc,EAAE,SAAgB;UACnD,gDAAgB,CAAC,MAAM,EAAE,SAAS,KAAK;EAAI;;6DAGtB,MAAc,EAAE,SAAgB;AACvD,WAAO,MAAM,IAAI,MAAM;AACrB,oBAAI,MAAM,aAAW,cAAY,CAAC,uBAC9B,MAAM,UAAQ,SAAS,CAAC,SAAS,IAAG;AACtC,cAAO,OAAM;;AAEf,YAAM,GAAG,MAAM,SAAO;;AAExB,UAAO;EACT;;uDAGgB,OAAe,EAAE,IAAS;AACxC,WAAO,IAAI,IAAI,MAAM;AACnB,sBAAI,IAAI,EAAI,OAAO,GAAE;AACnB,cAAO;aACF;AACL,YAAI,GAAG,IAAI,SAAO;;;AAGtB,UAAO;EACT;;oEAS4B,CAAM,EAAE,CAAM;AACxC,QAAI,0BAAU,AAAQ,kBAAU,CAAC,CAAC,EAAE,2BAA2B,CAAC,CAAC;AACjE,QAAI,CAAS,aAAR,OAAO,IAAG,OAAM,KAAK,CAAS,aAAR,OAAO,IAAG,QAAO,GAAG;AAE7C,YAAO,EAAC;UACH,KAAI,CAAS,aAAR,OAAO,IAAG,OAAM,KAAK,CAAS,aAAR,OAAO,IAAG,OAAM,GAAG;AAEnD,YAAO;WACF;AACL,YAAO;;EAEX","file":"events.ddc.js"}');
  // Exports:
  return {
    utils__browser__events__events: utils__browser__events__events
  };
});

//# sourceMappingURL=events.ddc.js.map
