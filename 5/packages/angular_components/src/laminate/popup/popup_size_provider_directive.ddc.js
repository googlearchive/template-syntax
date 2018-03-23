define(['dart_sdk', 'packages/angular_components/src/laminate/popup/popup_size_provider'], function(dart_sdk, popup_size_provider) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__popup__popup_size_provider = popup_size_provider.src__laminate__popup__popup_size_provider;
  const _root = Object.create(null);
  const src__laminate__popup__popup_size_provider_directive = Object.create(_root);
  const $toLowerCase = dartx.toLowerCase;
  const _parentPopupSizeProvider = Symbol('_parentPopupSizeProvider');
  const _maxHeight = Symbol('_maxHeight');
  const _maxWidth = Symbol('_maxWidth');
  src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective = class PopupSizeProviderDirective extends core.Object {
    getMaxWidth(positionX, viewportWidth) {
      return this[_maxWidth] == null ? this[_parentPopupSizeProvider].getMaxWidth(positionX, viewportWidth) : this[_maxWidth].getPixels(viewportWidth);
    }
    getMaxHeight(positionY, viewportHeight) {
      return this[_maxHeight] == null ? this[_parentPopupSizeProvider].getMaxHeight(positionY, viewportHeight) : this[_maxHeight].getPixels(viewportHeight);
    }
  };
  (src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective.new = function(maxHeight, maxWidth, parentPopupSizeProvider) {
    this[_maxHeight] = null;
    this[_maxWidth] = null;
    this[_parentPopupSizeProvider] = parentPopupSizeProvider;
    this[_maxHeight] = maxHeight == null ? null : src__laminate__popup__popup_size_provider_directive._SizeDefinition.fromString(maxHeight);
    this[_maxWidth] = maxWidth == null ? null : src__laminate__popup__popup_size_provider_directive._SizeDefinition.fromString(maxWidth);
    if ((this[_maxHeight] == null || this[_maxWidth] == null) && this[_parentPopupSizeProvider] == null) {
      this[_parentPopupSizeProvider] = new src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider.new(0.7, 0.5);
    }
  }).prototype = src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective);
  src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective[dart.implements] = () => [src__laminate__popup__popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective.__proto__),
    getMaxWidth: dart.fnType(core.num, [core.num, core.num]),
    getMaxHeight: dart.fnType(core.num, [core.num, core.num])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective.__proto__),
    [_maxHeight]: dart.fieldType(src__laminate__popup__popup_size_provider_directive._SizeDefinition),
    [_maxWidth]: dart.fieldType(src__laminate__popup__popup_size_provider_directive._SizeDefinition),
    [_parentPopupSizeProvider]: dart.fieldType(src__laminate__popup__popup_size_provider.PopupSizeProvider)
  }));
  src__laminate__popup__popup_size_provider_directive._SizeDefinition = class _SizeDefinition extends core.Object {
    static fromString(attribute) {
      let match = src__laminate__popup__popup_size_provider_directive._SizeDefinition._parseAttribute.firstMatch(attribute);
      if (match == null) dart.throw(new core.StateError.new(dart.str`Invalid size string: ${attribute}`));
      let size = core.num.parse(match.group(1));
      let unit = match.group(2)[$toLowerCase]();
      switch (unit) {
        case 'px':
        {
          return new src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition.new(size);
        }
        case '%':
        {
          return new src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition.new(size);
        }
        default:
        {
          dart.throw(new core.StateError.new(dart.str`Invalid unit for size string: ${attribute}`));
        }
      }
    }
  };
  (src__laminate__popup__popup_size_provider_directive._SizeDefinition[dart.mixinNew] = function() {
  }).prototype = src__laminate__popup__popup_size_provider_directive._SizeDefinition.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider_directive._SizeDefinition);
  dart.defineLazy(src__laminate__popup__popup_size_provider_directive._SizeDefinition, {
    /*src__laminate__popup__popup_size_provider_directive._SizeDefinition._parseAttribute*/get _parseAttribute() {
      return core.RegExp.new('([\\d.]+)\\s*([^\\d\\s]+)');
    }
  });
  const _size = Symbol('_size');
  src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition = class _PixelSizeDefinition extends core.Object {
    getPixels(viewportSize) {
      return this[_size];
    }
  };
  (src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition.new = function(size) {
    this[_size] = size;
  }).prototype = src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition);
  src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition[dart.implements] = () => [src__laminate__popup__popup_size_provider_directive._SizeDefinition];
  dart.setMethodSignature(src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition.__proto__),
    getPixels: dart.fnType(core.num, [core.num])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition.__proto__),
    [_size]: dart.finalFieldType(core.num)
  }));
  const _percent = Symbol('_percent');
  src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition = class _PercentSizeDefinition extends core.Object {
    getPixels(viewportSize) {
      return dart.notNull(viewportSize) * dart.notNull(this[_percent]) / 100;
    }
  };
  (src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition.new = function(percent) {
    this[_percent] = percent;
  }).prototype = src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition);
  src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition[dart.implements] = () => [src__laminate__popup__popup_size_provider_directive._SizeDefinition];
  dart.setMethodSignature(src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition.__proto__),
    getPixels: dart.fnType(core.num, [core.num])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition.__proto__),
    [_percent]: dart.finalFieldType(core.num)
  }));
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_size_provider_directive.ddc", {
    "package:angular_components/src/laminate/popup/popup_size_provider_directive.dart": src__laminate__popup__popup_size_provider_directive
  }, '{"version":3,"sourceRoot":"","sources":["popup_size_provider_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;gBA8CkB,SAAa,EAAE,aAAiB;YAAK,gBAAS,IAAI,OAC5D,8BAAwB,YAAY,CAAC,SAAS,EAAE,aAAa,IAC7D,eAAS,UAAU,CAAC,aAAa;IAAC;iBAGvB,SAAa,EAAE,cAAkB;YAAK,iBAAU,IAAI,OAC/D,8BAAwB,aAAa,CAAC,SAAS,EAAE,cAAc,IAC/D,gBAAU,UAAU,CAAC,cAAc;IAAC;;iGAxBtC,SAA6C,EAC7C,QAA2C,EACd,uBAAwB;IAPzC,gBAAU;IACV,eAAS;IAMQ,8BAAwB,GAAxB,uBAAwB;AACvD,oBAAU,GACN,SAAS,IAAI,OAAO,OAAO,AAAI,8EAA0B,CAAC,SAAS;AACvE,mBAAS,GACL,QAAQ,IAAI,OAAO,OAAO,AAAI,8EAA0B,CAAC,QAAQ;AAIrE,SAAK,gBAAU,IAAI,QAAQ,eAAS,IAAI,SACpC,8BAAwB,IAAI,MAAM;AACpC,oCAAwB,GAAG,IAAI,yEAA2B,CAAC,KAAK;;EAEpE;;;;;;;;;;;;;;;sBAoBmC,SAAgB;AAAE,AACnD,UAAI,QAAQ,mFAAe,WAAW,CAAC,SAAS;AAChD,UAAI,KAAK,IAAI,MAAM,WAAM,IAAI,mBAAU,CAAC,gCAAuB,SAAS;AACxE,UAAI,OAAO,QAAG,MAAM,CAAC,KAAK,MAAM,CAAC;AACjC,UAAI,OAAO,KAAK,MAAM,CAAC,gBAAc;AACrC,cAAQ,IAAI;YACL;;AACH,gBAAO,KAAI,4EAAoB,CAAC,IAAI;;YACjC;;AACH,gBAAO,KAAI,8EAAsB,CAAC,IAAI;;;;AAEtC,qBAAM,IAAI,mBAAU,CAAC,yCAAgC,SAAS;;;IAEpE;;;;;;MAlBoB,mFAAe;YAAG,AAAI,gBAAM,CAAC;;;;;cA2BnC,YAAgB;YAAK,YAAK;;;2FAFR,IAAK;IAAL,WAAK,GAAL,IAAK;EAAC;;;;;;;;;;;;;cASxB,YAAgB;YAAkB,AAAW,cAAxB,YAAY,iBAAG,cAAQ,IAAG;IAAG;;6FAF9B,OAAQ;IAAR,cAAQ,GAAR,OAAQ;EAAC","file":"popup_size_provider_directive.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_size_provider_directive: src__laminate__popup__popup_size_provider_directive
  };
});

//# sourceMappingURL=popup_size_provider_directive.ddc.js.map
