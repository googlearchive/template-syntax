define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const material_tab__tab_mixin = Object.create(_root);
  const $offsetWidth = dartx.offsetWidth;
  const $offsetLeft = dartx.offsetLeft;
  const $width = dartx.width;
  const $isNotEmpty = dartx.isNotEmpty;
  const _label = Symbol('_label');
  const _textWidth = Symbol('_textWidth');
  material_tab__tab_mixin.TabMixin = class TabMixin extends core.Object {
    get label() {
      return this[_label];
    }
    set label(label) {
      this[_textWidth] = 0;
      this[_label] = label;
    }
    get offsetWidth() {
      return this.nativeElement[$offsetWidth];
    }
    get offsetLeft() {
      return this.nativeElement[$offsetLeft];
    }
    get width() {
      return this.nativeElement.style[$width];
    }
    set width(width) {
      return this.nativeElement.style[$width] = width;
    }
    get textWidth() {
      return this[_textWidth];
    }
    updateTextWidth() {
      if (this[_textWidth] === 0) {
        this[_textWidth] = this.offsetWidth;
      }
    }
    tryClearWidth() {
      if (this[_textWidth] === 0 && this.width[$isNotEmpty]) {
        this.width = '';
      }
    }
  };
  (material_tab__tab_mixin.TabMixin.new = function() {
    this[_label] = null;
    this[_textWidth] = 0;
  }).prototype = material_tab__tab_mixin.TabMixin.prototype;
  dart.addTypeTests(material_tab__tab_mixin.TabMixin);
  dart.setMethodSignature(material_tab__tab_mixin.TabMixin, () => ({
    __proto__: dart.getMethods(material_tab__tab_mixin.TabMixin.__proto__),
    updateTextWidth: dart.fnType(dart.void, []),
    tryClearWidth: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_tab__tab_mixin.TabMixin, () => ({
    __proto__: dart.getGetters(material_tab__tab_mixin.TabMixin.__proto__),
    label: dart.fnType(core.String, []),
    offsetWidth: dart.fnType(core.int, []),
    offsetLeft: dart.fnType(core.int, []),
    width: dart.fnType(core.String, []),
    textWidth: dart.fnType(core.int, [])
  }));
  dart.setSetterSignature(material_tab__tab_mixin.TabMixin, () => ({
    __proto__: dart.getSetters(material_tab__tab_mixin.TabMixin.__proto__),
    label: dart.fnType(dart.void, [core.String]),
    width: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(material_tab__tab_mixin.TabMixin, () => ({
    __proto__: dart.getFields(material_tab__tab_mixin.TabMixin.__proto__),
    [_label]: dart.fieldType(core.String),
    [_textWidth]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/angular_components/material_tab/tab_mixin.ddc", {
    "package:angular_components/material_tab/tab_mixin.dart": material_tab__tab_mixin
  }, '{"version":3,"sourceRoot":"","sources":["tab_mixin.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;YAoBsB,aAAM;;cAEhB,KAAY;AACpB,sBAAU,GAAG;AACb,kBAAM,GAAG,KAAK;IAChB;;YAIuB,mBAAa,cAAY;;;YAG1B,mBAAa,aAAW;;;YAG1B,mBAAa,MAAM,QAAM;;cACnC,KAAY;YAAK,mBAAa,MAAM,QAAM,GAAG,KAAK;;;YAGvC,iBAAU;;;AAM7B,UAAI,gBAAU,KAAI,GAAG;AACnB,wBAAU,GAAG,gBAAW;;IAE5B;;AAME,UAAI,gBAAU,KAAI,KAAK,UAAK,aAAW,EAAE;AACvC,kBAAK,GAAG;;IAEZ;;;IA/CO,YAAM;IACT,gBAAU,GAAG;EA+CnB","file":"tab_mixin.ddc.js"}');
  // Exports:
  return {
    material_tab__tab_mixin: material_tab__tab_mixin
  };
});

//# sourceMappingURL=tab_mixin.ddc.js.map
