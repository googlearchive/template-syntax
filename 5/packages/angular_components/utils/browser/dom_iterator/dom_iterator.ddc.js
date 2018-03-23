define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const utils__browser__dom_iterator__dom_iterator = Object.create(_root);
  const $length = dartx.length;
  const $children = dartx.children;
  const $parent = dartx.parent;
  const $_get = dartx._get;
  let IteratorOfElement = () => (IteratorOfElement = dart.constFn(core.Iterator$(html.Element)))();
  let ElementToElement = () => (ElementToElement = dart.constFn(dart.fnType(html.Element, [html.Element])))();
  let ListBaseOfElement = () => (ListBaseOfElement = dart.constFn(collection.ListBase$(html.Element)))();
  const _element = Symbol('_element');
  const _startingElement = Symbol('_startingElement');
  const _reverse = Symbol('_reverse');
  const _scope = Symbol('_scope');
  const _wraps = Symbol('_wraps');
  const _navigateBackward = Symbol('_navigateBackward');
  const _navigateForward = Symbol('_navigateForward');
  utils__browser__dom_iterator__dom_iterator.DomTreeIterator = class DomTreeIterator extends core.Object {
    reversed(opts) {
      let wraps = opts && 'wraps' in opts ? opts.wraps : null;
      return new utils__browser__dom_iterator__dom_iterator.DomTreeIterator.new(this[_element], {reverse: !dart.test(this[_reverse]), scope: this[_scope], wraps: core.bool._check(wraps != null ? wraps : this[_wraps])});
    }
    get current() {
      return this[_element];
    }
    moveNext() {
      if (this[_element] == null) {
        return false;
      }
      if (dart.equals(this[_element], this[_scope]) && this[_element][$children][$length] === 0) {
        this[_element] == null;
        return false;
      }
      if (dart.test(this[_reverse])) {
        this[_navigateBackward]();
      } else {
        this[_navigateForward]();
      }
      if (dart.equals(this[_element], this[_startingElement])) {
        this[_element] = null;
      }
      return this[_element] != null;
    }
    [_navigateBackward]() {
      if (dart.equals(this[_element], this[_scope])) {
        if (dart.test(this[_wraps])) {
          this[_element] = utils__browser__dom_iterator__dom_iterator.lastDescendant(this[_scope]);
        } else {
          this[_element] = null;
        }
      } else if (this[_element][$parent] == null) {
        this[_element] = null;
      } else if (dart.equals(this[_element], utils__browser__dom_iterator__dom_iterator._firstChild(this[_element][$parent]))) {
        this[_element] = this[_element][$parent];
      } else {
        this[_element] = this[_element].previousElementSibling;
        while (dart.notNull(this[_element][$children][$length]) > 0) {
          this[_element] = utils__browser__dom_iterator__dom_iterator._lastChild(this[_element]);
        }
      }
    }
    [_navigateForward]() {
      if (dart.notNull(this[_element][$children][$length]) > 0) {
        this[_element] = utils__browser__dom_iterator__dom_iterator._firstChild(this[_element]);
      } else {
        while (this[_element][$parent] != null && !dart.equals(this[_element][$parent], this[_scope]) && dart.equals(this[_element], utils__browser__dom_iterator__dom_iterator._lastChild(this[_element][$parent]))) {
          this[_element] = this[_element][$parent];
        }
        if (this[_element][$parent] == null || dart.equals(this[_element][$parent], this[_scope]) && dart.equals(this[_element], utils__browser__dom_iterator__dom_iterator._lastChild(this[_element][$parent]))) {
          if (dart.test(this[_wraps])) {
            this[_element] = this[_scope];
          } else {
            this[_element] = null;
          }
        } else {
          this[_element] = this[_element].nextElementSibling;
        }
      }
    }
  };
  (utils__browser__dom_iterator__dom_iterator.DomTreeIterator.new = function(element, opts) {
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let scope = opts && 'scope' in opts ? opts.scope : null;
    let wraps = opts && 'wraps' in opts ? opts.wraps : false;
    this[_element] = html.Element._check(element);
    this[_startingElement] = html.Element._check(element);
    this[_reverse] = reverse;
    this[_scope] = scope;
    this[_wraps] = wraps;
    if (dart.test(this[_wraps]) && this[_scope] == null) {
      dart.throw(core.Exception.new('global wrapping is disallowed, scope is required'));
    }
    if (this[_scope] != null && !dart.test(this[_scope].contains(this[_element]))) {
      dart.throw(core.Exception.new('if scope is set, ' + 'starting element should be inside of scope'));
    }
  }).prototype = utils__browser__dom_iterator__dom_iterator.DomTreeIterator.prototype;
  dart.addTypeTests(utils__browser__dom_iterator__dom_iterator.DomTreeIterator);
  utils__browser__dom_iterator__dom_iterator.DomTreeIterator[dart.implements] = () => [IteratorOfElement()];
  dart.setMethodSignature(utils__browser__dom_iterator__dom_iterator.DomTreeIterator, () => ({
    __proto__: dart.getMethods(utils__browser__dom_iterator__dom_iterator.DomTreeIterator.__proto__),
    reversed: dart.fnType(utils__browser__dom_iterator__dom_iterator.DomTreeIterator, [], {wraps: dart.dynamic}),
    moveNext: dart.fnType(core.bool, []),
    [_navigateBackward]: dart.fnType(dart.dynamic, []),
    [_navigateForward]: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(utils__browser__dom_iterator__dom_iterator.DomTreeIterator, () => ({
    __proto__: dart.getGetters(utils__browser__dom_iterator__dom_iterator.DomTreeIterator.__proto__),
    current: dart.fnType(html.Element, [])
  }));
  dart.setFieldSignature(utils__browser__dom_iterator__dom_iterator.DomTreeIterator, () => ({
    __proto__: dart.getFields(utils__browser__dom_iterator__dom_iterator.DomTreeIterator.__proto__),
    [_reverse]: dart.finalFieldType(core.bool),
    [_wraps]: dart.finalFieldType(core.bool),
    [_startingElement]: dart.finalFieldType(html.Element),
    [_scope]: dart.finalFieldType(html.Element),
    [_element]: dart.fieldType(html.Element)
  }));
  utils__browser__dom_iterator__dom_iterator.lastDescendant = function(scope) {
    let current = scope;
    while (dart.notNull(current[$children][$length]) > 0) {
      current = utils__browser__dom_iterator__dom_iterator._lastChild(current);
    }
    return current;
  };
  dart.fn(utils__browser__dom_iterator__dom_iterator.lastDescendant, ElementToElement());
  utils__browser__dom_iterator__dom_iterator._firstChild = function(element) {
    return element[$children][$_get](0);
  };
  dart.fn(utils__browser__dom_iterator__dom_iterator._firstChild, ElementToElement());
  utils__browser__dom_iterator__dom_iterator._lastChild = function(element) {
    let children = ListBaseOfElement()._check(element[$children]);
    return children._get(dart.notNull(children.length) - 1);
  };
  dart.fn(utils__browser__dom_iterator__dom_iterator._lastChild, ElementToElement());
  dart.trackLibraries("packages/angular_components/utils/browser/dom_iterator/dom_iterator.ddc", {
    "package:angular_components/utils/browser/dom_iterator/dom_iterator.dart": utils__browser__dom_iterator__dom_iterator
  }, '{"version":3,"sourceRoot":"","sources":["dom_iterator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;UAkD4B;AACxB,YAAO,KAAI,8DAAe,CAAC,cAAQ,YACtB,WAAC,cAAQ,UAAS,YAAM,0BAAS,KAAK,WAAL,KAAK,GAAI,YAAM;IAC/D;;YAIuB,eAAQ;;;AAK7B,UAAI,cAAQ,IAAI,MAAM;AACpB,cAAO;;AAGT,sBAAI,cAAQ,EAAI,YAAM,KAAI,cAAQ,WAAS,SAAO,KAAI,GAAG;AACvD,sBAAQ,IAAI;AACZ,cAAO;;AAGT,oBAAI,cAAQ,GAAE;AACZ,+BAAiB;aACZ;AACL,8BAAgB;;AAGlB,sBAAI,cAAQ,EAAI,sBAAgB,GAAE;AAChC,sBAAQ,GAAG;;AAGb,YAAQ,eAAQ,IAAI;IACtB;;AAqBE,sBAAI,cAAQ,EAAI,YAAM,GAAE;AAEtB,sBAAI,YAAM,GAAE;AACV,wBAAQ,GAAG,yDAAc,CAAC,YAAM;eAC3B;AACL,wBAAQ,GAAG;;YAER,KAAI,cAAQ,SAAO,IAAI,MAAM;AAElC,sBAAQ,GAAG;YACN,iBAAI,cAAQ,EAAI,sDAAW,CAAC,cAAQ,SAAO,IAAG;AAEnD,sBAAQ,GAAG,cAAQ,SAAO;aACrB;AAEL,sBAAQ,GAAG,cAAQ,uBAAuB;AAC1C,eAAgC,aAAzB,cAAQ,WAAS,SAAO,IAAG,GAAG;AACnC,wBAAQ,GAAG,qDAAU,CAAC,cAAQ;;;IAGpC;;AAsBE,UAA6B,aAAzB,cAAQ,WAAS,SAAO,IAAG,GAAG;AAEhC,sBAAQ,GAAG,sDAAW,CAAC,cAAQ;aAC1B;AAEL,eAAO,cAAQ,SAAO,IAAI,qBACtB,cAAQ,SAAO,EAAI,YAAM,iBACzB,cAAQ,EAAI,qDAAU,CAAC,cAAQ,SAAO,IAAG;AAC3C,wBAAQ,GAAG,cAAQ,SAAO;;AAG5B,YAAI,cAAQ,SAAO,IAAI,oBAClB,cAAQ,SAAO,EAAI,YAAM,iBACtB,cAAQ,EAAI,qDAAU,CAAC,cAAQ,SAAO,IAAI;AAChD,wBAAI,YAAM,GAAE;AACV,0BAAQ,GAAG,YAAM;iBACZ;AACL,0BAAQ,GAAG;;eAER;AACL,wBAAQ,GAAG,cAAQ,mBAAmB;;;IAG5C;;6EA3IgB,OAAO;QACb,qDAAS;QAAe;QAAY,+CAAO;IAC/C,cAAQ,uBAAG,OAAO;IAClB,sBAAgB,uBAAG,OAAO;IAC1B,cAAQ,GAAG,OAAO;IAClB,YAAM,GAAG,KAAK;IACd,YAAM,GAAG,KAAK;AAClB,kBAAI,YAAM,KAAI,YAAM,IAAI,MAAM;AAC5B,iBAAM,AAAI,kBAAS,CAAC;;AAEtB,QAAI,YAAM,IAAI,mBAAS,YAAM,SAAS,CAAC,cAAQ,IAAG;AAChD,iBAAM,AAAI,kBAAS,CAAC,sBAChB;;EAER;;;;;;;;;;;;;;;;;;;;;;uEAiIqB,KAAa;AAClC,QAAQ,UAAU,KAAK;AACvB,WAA+B,aAAxB,OAAO,WAAS,SAAO,IAAG,GAAG;AAClC,aAAO,GAAG,qDAAU,CAAC,OAAO;;AAE9B,UAAO,QAAO;EAChB;;oEAEoB,OAAe;UAAK,QAAO,WAAS,QAAC;EAAE;;mEAExC,OAAe;AAChC,QAAkB,sCAAW,OAAO,WAAS;AAC7C,UAAO,SAAQ,MAAiB,aAAhB,QAAQ,OAAO,IAAG;EACpC","file":"dom_iterator.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_iterator__dom_iterator: utils__browser__dom_iterator__dom_iterator
  };
});

//# sourceMappingURL=dom_iterator.ddc.js.map
