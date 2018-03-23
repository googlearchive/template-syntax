define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__laminate__popup__popup_size_provider = Object.create(_root);
  src__laminate__popup__popup_size_provider.PopupSizeProvider = class PopupSizeProvider extends core.Object {};
  (src__laminate__popup__popup_size_provider.PopupSizeProvider.new = function() {
  }).prototype = src__laminate__popup__popup_size_provider.PopupSizeProvider.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider.PopupSizeProvider);
  const _maxWidthPercentage = Symbol('_maxWidthPercentage');
  const _maxHeightPercentage = Symbol('_maxHeightPercentage');
  src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider = class PercentagePopupSizeProvider extends core.Object {
    getMaxWidth(_, viewportWidth) {
      return dart.notNull(viewportWidth) * dart.notNull(this[_maxWidthPercentage]);
    }
    getMaxHeight(_, viewportHeight) {
      return dart.notNull(viewportHeight) * dart.notNull(this[_maxHeightPercentage]);
    }
  };
  (src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider.new = function(maxWidthPercentage, maxHeightPercentage) {
    if (maxWidthPercentage === void 0) maxWidthPercentage = null;
    if (maxHeightPercentage === void 0) maxHeightPercentage = null;
    this[_maxWidthPercentage] = maxWidthPercentage != null ? maxWidthPercentage : 0.7;
    this[_maxHeightPercentage] = maxHeightPercentage != null ? maxHeightPercentage : 0.5;
  }).prototype = src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider);
  src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider[dart.implements] = () => [src__laminate__popup__popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider.__proto__),
    getMaxWidth: dart.fnType(core.num, [core.num, core.num]),
    getMaxHeight: dart.fnType(core.num, [core.num, core.num])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider.__proto__),
    [_maxWidthPercentage]: dart.finalFieldType(core.num),
    [_maxHeightPercentage]: dart.finalFieldType(core.num)
  }));
  const _maxWidth = Symbol('_maxWidth');
  const _maxHeight = Symbol('_maxHeight');
  src__laminate__popup__popup_size_provider.FixedPopupSizeProvider = class FixedPopupSizeProvider extends core.Object {
    getMaxWidth(_, __) {
      return this[_maxWidth];
    }
    getMaxHeight(_, __) {
      return this[_maxHeight];
    }
  };
  (src__laminate__popup__popup_size_provider.FixedPopupSizeProvider.new = function(maxWidth, maxHeight) {
    this[_maxWidth] = maxWidth;
    this[_maxHeight] = maxHeight;
  }).prototype = src__laminate__popup__popup_size_provider.FixedPopupSizeProvider.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider.FixedPopupSizeProvider);
  src__laminate__popup__popup_size_provider.FixedPopupSizeProvider[dart.implements] = () => [src__laminate__popup__popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(src__laminate__popup__popup_size_provider.FixedPopupSizeProvider, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_size_provider.FixedPopupSizeProvider.__proto__),
    getMaxWidth: dart.fnType(core.num, [core.num, core.num]),
    getMaxHeight: dart.fnType(core.num, [core.num, core.num])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_size_provider.FixedPopupSizeProvider, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_size_provider.FixedPopupSizeProvider.__proto__),
    [_maxWidth]: dart.finalFieldType(core.num),
    [_maxHeight]: dart.finalFieldType(core.num)
  }));
  dart.defineLazy(src__laminate__popup__popup_size_provider, {
    /*src__laminate__popup__popup_size_provider.unboundedPopupSize*/get unboundedPopupSize() {
      return dart.const(new src__laminate__popup__popup_size_provider.FixedPopupSizeProvider.new(null, null));
    }
  });
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_size_provider.ddc", {
    "package:angular_components/src/laminate/popup/popup_size_provider.dart": src__laminate__popup__popup_size_provider
  }, '{"version":3,"sourceRoot":"","sources":["popup_size_provider.dart"],"names":[],"mappings":";;;;;;;;;EAgBA;;;;;gBAckB,CAAK,EAAE,aAAiB;YACtB,cAAd,aAAa,iBAAG,yBAAmB;;iBAGtB,CAAK,EAAE,cAAkB;YACvB,cAAf,cAAc,iBAAG,0BAAoB;;;wFAVpC,kBAAsB,EAAE,mBAAuB;uCAA3C;wCAAwB;IAC3B,yBAAmB,GAAG,kBAAkB,WAAlB,kBAAkB,GAAI;IAC5C,0BAAoB,GAAG,mBAAmB,WAAnB,mBAAmB,GAAI;EAAG;;;;;;;;;;;;;;;;gBAqBvC,CAAK,EAAE,EAAM;YAAK,gBAAS;;iBAG1B,CAAK,EAAE,EAAM;YAAK,iBAAU;;;mFANX,QAAS,EAAO,SAAU;IAA1B,eAAS,GAAT,QAAS;IAAO,gBAAU,GAAV,SAAU;EAAC;;;;;;;;;;;;;;MAUzD,4DAAkB;YAAG,gBAAM,oEAAsB,CAAC,MAAM","file":"popup_size_provider.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_size_provider: src__laminate__popup__popup_size_provider
  };
});

//# sourceMappingURL=popup_size_provider.ddc.js.map
