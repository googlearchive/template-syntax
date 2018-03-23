define(['dart_sdk', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular_components/laminate/enums/alignment'], function(dart_sdk, popup_size_provider, alignment) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__popup__popup_size_provider = popup_size_provider.src__laminate__popup__popup_size_provider;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const _root = Object.create(null);
  const src__laminate__popup__popup_position_mixin = Object.create(_root);
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  src__laminate__popup__popup_position_mixin.PopupPosition = class PopupPosition extends core.Object {};
  (src__laminate__popup__popup_position_mixin.PopupPosition.new = function() {
  }).prototype = src__laminate__popup__popup_position_mixin.PopupPosition.prototype;
  dart.addTypeTests(src__laminate__popup__popup_position_mixin.PopupPosition);
  dart.defineLazy(src__laminate__popup__popup_position_mixin.PopupPosition, {
    /*src__laminate__popup__popup_position_mixin.PopupPosition.AUTO*/get AUTO() {
      return '';
    },
    /*src__laminate__popup__popup_position_mixin.PopupPosition.ABOVE*/get ABOVE() {
      return 'above';
    },
    /*src__laminate__popup__popup_position_mixin.PopupPosition.BELOW*/get BELOW() {
      return 'below';
    }
  });
  const _popupPosition = Symbol('_popupPosition');
  const _popupPositions = Symbol('_popupPositions');
  let const$;
  let const$0;
  let const$1;
  src__laminate__popup__popup_position_mixin.PopupPositionMixin = class PopupPositionMixin extends core.Object {
    get delegatePopupSizeProvider() {
      return this[delegatePopupSizeProvider];
    }
    set delegatePopupSizeProvider(value) {
      this[delegatePopupSizeProvider] = value;
    }
    getMaxWidth(positionX, viewportWidth) {
      return this.delegatePopupSizeProvider.getMaxHeight(positionX, viewportWidth);
    }
    getMaxHeight(positionY, viewportHeight) {
      let maxHeight = this.delegatePopupSizeProvider.getMaxHeight(positionY, viewportHeight);
      if (this[_popupPosition] === src__laminate__popup__popup_position_mixin.PopupPosition.BELOW) {
        return math.max(core.num, 40, math.min(core.num, dart.notNull(viewportHeight) - dart.notNull(positionY) - 4, maxHeight));
      } else {
        return maxHeight;
      }
    }
    get popupPositions() {
      return this[_popupPositions];
    }
    set popupPosition(position) {
      this[_popupPosition] = position;
      switch (this[_popupPosition]) {
        case src__laminate__popup__popup_position_mixin.PopupPosition.ABOVE:
        {
          this[_popupPositions] = const$ || (const$ = dart.constList([laminate__enums__alignment.RelativePosition.AdjacentTopLeft, laminate__enums__alignment.RelativePosition.AdjacentTopRight], laminate__enums__alignment.RelativePosition));
          break;
        }
        case src__laminate__popup__popup_position_mixin.PopupPosition.BELOW:
        {
          this[_popupPositions] = const$0 || (const$0 = dart.constList([laminate__enums__alignment.RelativePosition.AdjacentBottomLeft, laminate__enums__alignment.RelativePosition.AdjacentBottomRight], laminate__enums__alignment.RelativePosition));
          break;
        }
        case src__laminate__popup__popup_position_mixin.PopupPosition.AUTO:
        default:
        {
          this[_popupPositions] = const$1 || (const$1 = dart.constList([], laminate__enums__alignment.RelativePosition));
        }
      }
    }
  };
  (src__laminate__popup__popup_position_mixin.PopupPositionMixin.new = function() {
    this[delegatePopupSizeProvider] = new src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider.new();
    this[_popupPosition] = src__laminate__popup__popup_position_mixin.PopupPosition.AUTO;
    this[_popupPositions] = dart.constList([], laminate__enums__alignment.RelativePosition);
  }).prototype = src__laminate__popup__popup_position_mixin.PopupPositionMixin.prototype;
  dart.addTypeTests(src__laminate__popup__popup_position_mixin.PopupPositionMixin);
  const delegatePopupSizeProvider = Symbol("PopupPositionMixin.delegatePopupSizeProvider");
  src__laminate__popup__popup_position_mixin.PopupPositionMixin[dart.implements] = () => [src__laminate__popup__popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(src__laminate__popup__popup_position_mixin.PopupPositionMixin, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_position_mixin.PopupPositionMixin.__proto__),
    getMaxWidth: dart.fnType(core.num, [core.num, core.num]),
    getMaxHeight: dart.fnType(core.num, [core.num, core.num])
  }));
  dart.setGetterSignature(src__laminate__popup__popup_position_mixin.PopupPositionMixin, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_position_mixin.PopupPositionMixin.__proto__),
    popupPositions: dart.fnType(core.List$(laminate__enums__alignment.RelativePosition), [])
  }));
  dart.setSetterSignature(src__laminate__popup__popup_position_mixin.PopupPositionMixin, () => ({
    __proto__: dart.getSetters(src__laminate__popup__popup_position_mixin.PopupPositionMixin.__proto__),
    popupPosition: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_position_mixin.PopupPositionMixin, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_position_mixin.PopupPositionMixin.__proto__),
    delegatePopupSizeProvider: dart.fieldType(src__laminate__popup__popup_size_provider.PopupSizeProvider),
    [_popupPosition]: dart.fieldType(core.String),
    [_popupPositions]: dart.fieldType(ListOfRelativePosition())
  }));
  dart.defineLazy(src__laminate__popup__popup_position_mixin.PopupPositionMixin, {
    /*src__laminate__popup__popup_position_mixin.PopupPositionMixin._EDGE_SPACE_PX*/get _EDGE_SPACE_PX() {
      return 4;
    },
    /*src__laminate__popup__popup_position_mixin.PopupPositionMixin._MIN_HEIGHT_PX*/get _MIN_HEIGHT_PX() {
      return 40;
    }
  });
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_position_mixin.ddc", {
    "package:angular_components/src/laminate/popup/popup_position_mixin.dart": src__laminate__popup__popup_position_mixin
  }, '{"version":3,"sourceRoot":"","sources":["popup_position_mixin.dart"],"names":[],"mappings":";;;;;;;;;;;;;EAcA;;;MAHsB,6DAAI;YAAG;;MACP,8DAAK;YAAG;;MACR,8DAAK;YAAG;;;;;;;;;IAWV;;;;;;gBAIF,SAAa,EAAE,aAAiB;YAC5C,+BAAyB,aAAa,CAAC,SAAS,EAAE,aAAa;IAAC;iBAGnD,SAAa,EAAE,cAAkB;AAChD,UAAI,YACA,8BAAyB,aAAa,CAAC,SAAS,EAAE,cAAc;AACpE,UAAI,oBAAc,KAAI,wDAAa,MAAM,EAAE;AAGzC,cAAO,SAAG,WAAC,EAAc,EACrB,QAAG,WAAgB,AAAY,aAA3B,cAAc,iBAAG,SAAS,IAAG,CAAc,EAAE,SAAS;aACzD;AACL,cAAO,UAAS;;IAEpB;;YAM6C,sBAAe;;sBAG1C,QAAe;AAC/B,0BAAc,GAAG,QAAQ;AACzB,cAAQ,oBAAc;YACf,yDAAa,MAAM;;AACtB,+BAAe,GAAG,oCAChB,2CAAgB,gBAAgB,EAChC,2CAAgB,iBAAiB;AAEnC;;YACG,yDAAa,MAAM;;AACtB,+BAAe,GAAG,sCAChB,2CAAgB,mBAAmB,EACnC,2CAAgB,oBAAoB;AAEtC;;YACG,yDAAa,KAAK;;;AAErB,+BAAe,GAAG;;;IAExB;;;IA/CkB,+BAAyB,GACvC,IAAI,yEAA2B;IAoB5B,oBAAc,GAAG,wDAAa,KAAK;IAEnB,qBAAe,GAAG;EAyB3C;;;;;;;;;;;;;;;;;;;;;;;;MArDe,4EAAc;YAAG;;MAGjB,4EAAc;YAAG","file":"popup_position_mixin.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_position_mixin: src__laminate__popup__popup_position_mixin
  };
});

//# sourceMappingURL=popup_position_mixin.ddc.js.map
