define(['dart_sdk', 'packages/angular_components/src/laminate/ruler/ruler_interface', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, ruler_interface, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__ruler__ruler_interface = ruler_interface.src__laminate__ruler__ruler_interface;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const _root = Object.create(null);
  const laminate__ruler__dom_ruler = Object.create(_root);
  const $offset = dartx.offset;
  const $isNotEmpty = dartx.isNotEmpty;
  const $where = dartx.where;
  const $classes = dartx.classes;
  const $setProperty = dartx.setProperty;
  let RulerOfElement = () => (RulerOfElement = dart.constFn(src__laminate__ruler__ruler_interface.Ruler$(html.Element)))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let FutureOfRectangleOfnum = () => (FutureOfRectangleOfnum = dart.constFn(async.Future$(RectangleOfnum())))();
  let StreamOfRectangleOfnum = () => (StreamOfRectangleOfnum = dart.constFn(async.Stream$(RectangleOfnum())))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  laminate__ruler__dom_ruler.DomRuler = class DomRuler extends core.Object {
    static new(document, domService) {
      return new laminate__ruler__dom_ruler.DomRulerImpl.new(document, domService);
    }
  };
  (laminate__ruler__dom_ruler.DomRuler[dart.mixinNew] = function() {
  }).prototype = laminate__ruler__dom_ruler.DomRuler.prototype;
  dart.addTypeTests(laminate__ruler__dom_ruler.DomRuler);
  laminate__ruler__dom_ruler.DomRuler[dart.implements] = () => [RulerOfElement()];
  const _document = Symbol('_document');
  const _domService = Symbol('_domService');
  let const$;
  let const$0;
  let const$1;
  laminate__ruler__dom_ruler.DomRulerImpl = class DomRulerImpl extends src__laminate__ruler__ruler_interface.RulerBase$(html.Element) {
    canSyncWrite(element) {
      html.Element._check(element);
      if (html.HtmlDocument.is(this[_document])) {
        return !dart.test(html.HtmlDocument.as(this[_document]).body.contains(element));
      }
      return !dart.test(this[_document].contains(element));
    }
    get onLayoutChanged() {
      return this[_domService].onLayoutChanged;
    }
    onRead() {
      return this[_domService].onRead();
    }
    onWrite() {
      return this[_domService].onWrite();
    }
    measure(element, opts) {
      html.Element._check(element);
      let offset = opts && 'offset' in opts ? opts.offset : false;
      if (dart.test(this.canSyncWrite(element))) {
        return FutureOfRectangleOfnum().value(const$ || (const$ = dart.const(new (RectangleOfnum()).new(0, 0, 0, 0))));
      }
      return super.measure(element, {offset: offset});
    }
    measureSync(element, opts) {
      html.Element._check(element);
      let offset = opts && 'offset' in opts ? opts.offset : false;
      if (dart.test(offset)) {
        return element[$offset];
      }
      return element.getBoundingClientRect();
    }
    track(element) {
      html.Element._check(element);
      if (dart.test(this.canSyncWrite(element))) {
        return StreamOfRectangleOfnum().fromIterable(const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new (RectangleOfnum()).new(0, 0, 0, 0)))], RectangleOfnum())));
      }
      return super.track(element);
    }
    removeCssClassesSync(element, classes) {
      html.Element._check(element);
      element[$classes].removeAll(classes[$where](dart.fn(c => c[$isNotEmpty], StringTobool())));
    }
    addCssClassesSync(element, classes) {
      html.Element._check(element);
      element[$classes].addAll(classes[$where](dart.fn(c => c[$isNotEmpty], StringTobool())));
    }
    clearCssPropertiesSync(element) {
      html.Element._check(element);
      element.style.cssText = '';
    }
    setCssPropertySync(element, propertyName, propertyValue) {
      html.Element._check(element);
      element.style[$setProperty](propertyName, core.String._check(propertyValue));
    }
  };
  (laminate__ruler__dom_ruler.DomRulerImpl.new = function(document, domService) {
    this[_document] = document;
    this[_domService] = domService;
    laminate__ruler__dom_ruler.DomRulerImpl.__proto__.new.call(this);
  }).prototype = laminate__ruler__dom_ruler.DomRulerImpl.prototype;
  dart.addTypeTests(laminate__ruler__dom_ruler.DomRulerImpl);
  laminate__ruler__dom_ruler.DomRulerImpl[dart.implements] = () => [laminate__ruler__dom_ruler.DomRuler];
  dart.setMethodSignature(laminate__ruler__dom_ruler.DomRulerImpl, () => ({
    __proto__: dart.getMethods(laminate__ruler__dom_ruler.DomRulerImpl.__proto__),
    canSyncWrite: dart.fnType(core.bool, [core.Object]),
    onRead: dart.fnType(async.Future, []),
    onWrite: dart.fnType(async.Future, []),
    measure: dart.fnType(async.Future$(math.Rectangle$(core.num)), [core.Object], {offset: core.bool}),
    measureSync: dart.fnType(math.Rectangle$(core.num), [core.Object], {offset: core.bool}),
    track: dart.fnType(async.Stream$(math.Rectangle$(core.num)), [core.Object]),
    removeCssClassesSync: dart.fnType(dart.void, [core.Object, ListOfString()]),
    addCssClassesSync: dart.fnType(dart.void, [core.Object, ListOfString()]),
    clearCssPropertiesSync: dart.fnType(dart.void, [core.Object]),
    setCssPropertySync: dart.fnType(dart.void, [core.Object, core.String, dart.dynamic])
  }));
  dart.setGetterSignature(laminate__ruler__dom_ruler.DomRulerImpl, () => ({
    __proto__: dart.getGetters(laminate__ruler__dom_ruler.DomRulerImpl.__proto__),
    onLayoutChanged: dart.fnType(async.Stream, [])
  }));
  dart.setFieldSignature(laminate__ruler__dom_ruler.DomRulerImpl, () => ({
    __proto__: dart.getFields(laminate__ruler__dom_ruler.DomRulerImpl.__proto__),
    [_document]: dart.finalFieldType(html.Document),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService)
  }));
  dart.trackLibraries("packages/angular_components/laminate/ruler/dom_ruler.ddc", {
    "package:angular_components/laminate/ruler/dom_ruler.dart": laminate__ruler__dom_ruler
  }, '{"version":3,"sourceRoot":"","sources":["dom_ruler.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;eAoBmB,QAAiB,EAAE,UAAqB;AAAI,6DAA5C,QAAiB,EAAE,UAAqB;IAAgB;;;;;;;;;;;;iBAYvD,OAAe;0BAAP;AACxB,+BAAI,eAAS,GAAkB;AAC7B,cAAO,YAAC,qBAAC,eAAS,MAAsB,SAAS,CAAC,OAAO;;AAE3D,YAAO,YAAC,eAAS,SAAS,CAAC,OAAO;IACpC;;YAG8B,kBAAW,gBAAgB;;;YAGtC,kBAAW,OAAO;IAAE;;YAGnB,kBAAW,QAAQ;IAAE;YAGf,OAAe;0BAAP;UAAe,kDAAQ;AACvD,oBAAI,iBAAY,CAAC,OAAO,IAAG;AAGzB,cAAO,AAAI,+BAAuB,CAAC,mCAAM,sBAAS,CAAC,GAAG,GAAG,GAAG;;AAE9D,YAAO,cAAa,CAAC,OAAO,WAAU,MAAM;IAC9C;gBAGsB,OAAe;0BAAP;UAAe,kDAAQ;AAGnD,oBAAI,MAAM,GAAE;AACV,cAAO,QAAO,SAAO;;AAEvB,YAAO,QAAO,sBAAsB;IACtC;UAGwB,OAAe;0BAAP;AAC9B,oBAAI,iBAAY,CAAC,OAAO,IAAG;AAGzB,cAAO,AAAI,sCAA8B,CACrC,sCAAO,qCAAM,sBAAS,CAAC,GAAG,GAAG,GAAG;;AAEtC,YAAO,YAAW,CAAC,OAAO;IAC5B;yBAG0B,OAAe,EAAE,OAAoB;0BAA7B;AAChC,aAAO,UAAQ,UAAU,CAAC,OAAO,QAAM,CAAC,QAAC,CAAC,IAAK,CAAC,aAAW;IAC7D;sBAGuB,OAAe,EAAE,OAAoB;0BAA7B;AAC7B,aAAO,UAAQ,OAAO,CAAC,OAAO,QAAM,CAAC,QAAC,CAAC,IAAK,CAAC,aAAW;IAC1D;2BAG4B,OAAe;0BAAP;AAClC,aAAO,MAAM,QAAQ,GAAG;IAC1B;uBAGwB,OAAe,EAAE,YAAmB,EAAE,aAAa;0BAA3C;AAC9B,aAAO,MAAM,cAAY,CAAC,YAAY,qBAAE,aAAa;IACvD;;0DApEkB,QAAS,EAAO,UAAW;IAA3B,eAAS,GAAT,QAAS;IAAO,iBAAW,GAAX,UAAW;;EAAC","file":"dom_ruler.ddc.js"}');
  // Exports:
  return {
    laminate__ruler__dom_ruler: laminate__ruler__dom_ruler
  };
});

//# sourceMappingURL=dom_ruler.ddc.js.map
