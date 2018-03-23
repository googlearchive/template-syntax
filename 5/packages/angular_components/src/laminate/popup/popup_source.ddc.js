define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment'], function(dart_sdk, alignment) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const _root = Object.create(null);
  const src__laminate__popup__popup_source = Object.create(_root);
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let JSArrayOfRectangleOfnum = () => (JSArrayOfRectangleOfnum = dart.constFn(_interceptors.JSArray$(RectangleOfnum())))();
  let StreamOfRectangleOfnum = () => (StreamOfRectangleOfnum = dart.constFn(async.Stream$(RectangleOfnum())))();
  src__laminate__popup__popup_source.PopupSource = class PopupSource extends core.Object {
    static fromRectangle(rectangle, opts) {
      let alignX = opts && 'alignX' in opts ? opts.alignX : laminate__enums__alignment.Alignment.Start;
      let alignY = opts && 'alignY' in opts ? opts.alignY : laminate__enums__alignment.Alignment.Start;
      return new src__laminate__popup__popup_source._RectanglePopupSource.new(rectangle, {alignOriginX: alignX, alignOriginY: alignY});
    }
  };
  (src__laminate__popup__popup_source.PopupSource[dart.mixinNew] = function() {
  }).prototype = src__laminate__popup__popup_source.PopupSource.prototype;
  dart.addTypeTests(src__laminate__popup__popup_source.PopupSource);
  src__laminate__popup__popup_source.ElementPopupSource = class ElementPopupSource extends core.Object {
    get dimensions() {
      return this.sourceElement.getBoundingClientRect();
    }
  };
  (src__laminate__popup__popup_source.ElementPopupSource.new = function() {
  }).prototype = src__laminate__popup__popup_source.ElementPopupSource.prototype;
  dart.addTypeTests(src__laminate__popup__popup_source.ElementPopupSource);
  src__laminate__popup__popup_source.ElementPopupSource[dart.implements] = () => [src__laminate__popup__popup_source.PopupSource];
  dart.setGetterSignature(src__laminate__popup__popup_source.ElementPopupSource, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_source.ElementPopupSource.__proto__),
    dimensions: dart.fnType(math.Rectangle$(core.num), [])
  }));
  const _predefinedRectangle = Symbol('_predefinedRectangle');
  src__laminate__popup__popup_source._RectanglePopupSource = class _RectanglePopupSource extends core.Object {
    onDimensionsChanged(opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      return StreamOfRectangleOfnum().fromIterable(JSArrayOfRectangleOfnum().of([this[_predefinedRectangle]]));
    }
    get dimensions() {
      return this[_predefinedRectangle];
    }
    set popupId(id) {}
  };
  (src__laminate__popup__popup_source._RectanglePopupSource.new = function(predefinedRectangle, opts) {
    let alignOriginX = opts && 'alignOriginX' in opts ? opts.alignOriginX : null;
    let alignOriginY = opts && 'alignOriginY' in opts ? opts.alignOriginY : null;
    this.isRtl = false;
    this[_predefinedRectangle] = predefinedRectangle;
    this.alignOriginX = alignOriginX;
    this.alignOriginY = alignOriginY;
  }).prototype = src__laminate__popup__popup_source._RectanglePopupSource.prototype;
  dart.addTypeTests(src__laminate__popup__popup_source._RectanglePopupSource);
  src__laminate__popup__popup_source._RectanglePopupSource[dart.implements] = () => [src__laminate__popup__popup_source.PopupSource];
  dart.setMethodSignature(src__laminate__popup__popup_source._RectanglePopupSource, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_source._RectanglePopupSource.__proto__),
    onDimensionsChanged: dart.fnType(async.Stream$(math.Rectangle$(core.num)), [], {track: core.bool})
  }));
  dart.setGetterSignature(src__laminate__popup__popup_source._RectanglePopupSource, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_source._RectanglePopupSource.__proto__),
    dimensions: dart.fnType(math.Rectangle$(core.num), [])
  }));
  dart.setSetterSignature(src__laminate__popup__popup_source._RectanglePopupSource, () => ({
    __proto__: dart.getSetters(src__laminate__popup__popup_source._RectanglePopupSource.__proto__),
    popupId: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_source._RectanglePopupSource, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_source._RectanglePopupSource.__proto__),
    alignOriginX: dart.finalFieldType(laminate__enums__alignment.Alignment),
    alignOriginY: dart.finalFieldType(laminate__enums__alignment.Alignment),
    [_predefinedRectangle]: dart.finalFieldType(RectangleOfnum()),
    isRtl: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_source.ddc", {
    "package:angular_components/src/laminate/popup/popup_source.dart": src__laminate__popup__popup_source
  }, '{"version":3,"sourceRoot":"","sources":["popup_source.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;yBAiBoC,SAAmB;UACtC,kDAAQ,oCAAS,MAAM;UAAY,kDAAQ,oCAAS,MAAM;AAAG,AAC1E,YAAO,KAAI,4DAAqB,CAAC,SAAS,iBACxB,MAAM,gBAAgB,MAAM;IAChD;;;;;;;YAkD4B,mBAAa,sBAAsB;IAAE;;;EACnE;;;;;;;;;;UAgB8C,+CAAO;AAIjD,YAAO,AAAI,sCAA8B,CAAC,8BAAC,0BAAoB;IACjE;;YAG4B,2BAAoB;;gBAMpC,EAAS,GAErB;;2EApB2B,mBAAoB;QACrC;QAAmB;IAclB,UAAK,GAAG;IAfQ,0BAAoB,GAApB,mBAAoB;IACrC,iBAAY,GAAZ,YAAY;IAAO,iBAAY,GAAZ,YAAY;EAAE","file":"popup_source.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_source: src__laminate__popup__popup_source
  };
});

//# sourceMappingURL=popup_source.ddc.js.map
