define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const model__a11y__active_item_mixin = Object.create(_root);
  const $scrollIntoView = dartx.scrollIntoView;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _active = Symbol('_active');
  const _hasHover = Symbol('_hasHover');
  model__a11y__active_item_mixin.ActiveItemMixin = class ActiveItemMixin extends core.Object {
    get active() {
      return this[_active];
    }
    set active(value) {
      if (value == this[_active]) return;
      this[_active] = value;
      if (dart.test(this[_active]) && !dart.test(this[_hasHover])) {
        this.domService.scheduleWrite(dart.fn(() => {
          try {
            let options = js_util.newObject();
            js_util.setProperty(options, 'block', 'nearest');
            js_util.setProperty(options, 'inline', 'nearest');
            js_util.callMethod(this.element, 'scrollIntoView', [options]);
          } catch (_) {
            this.element[$scrollIntoView]();
          }
        }, VoidToNull()));
      }
    }
    onMouseEnter() {
      this[_hasHover] = true;
    }
    onMouseLeave() {
      this[_hasHover] = false;
    }
  };
  (model__a11y__active_item_mixin.ActiveItemMixin.new = function() {
    this[_active] = false;
    this[_hasHover] = false;
  }).prototype = model__a11y__active_item_mixin.ActiveItemMixin.prototype;
  dart.addTypeTests(model__a11y__active_item_mixin.ActiveItemMixin);
  dart.setMethodSignature(model__a11y__active_item_mixin.ActiveItemMixin, () => ({
    __proto__: dart.getMethods(model__a11y__active_item_mixin.ActiveItemMixin.__proto__),
    onMouseEnter: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(model__a11y__active_item_mixin.ActiveItemMixin, () => ({
    __proto__: dart.getGetters(model__a11y__active_item_mixin.ActiveItemMixin.__proto__),
    active: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(model__a11y__active_item_mixin.ActiveItemMixin, () => ({
    __proto__: dart.getSetters(model__a11y__active_item_mixin.ActiveItemMixin.__proto__),
    active: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(model__a11y__active_item_mixin.ActiveItemMixin, () => ({
    __proto__: dart.getFields(model__a11y__active_item_mixin.ActiveItemMixin.__proto__),
    [_active]: dart.fieldType(core.bool),
    [_hasHover]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/model/a11y/active_item_mixin.ddc", {
    "package:angular_components/model/a11y/active_item_mixin.dart": model__a11y__active_item_mixin
  }, '{"version":3,"sourceRoot":"","sources":["active_item_mixin.dart"],"names":[],"mappings":";;;;;;;;;;;;;;YA0BqB,cAAO;;eAGf,KAAU;AACnB,UAAI,KAAK,IAAI,aAAO,EAAE;AACtB,mBAAO,GAAG,KAAK;AACf,oBAAI,aAAO,gBAAK,eAAS,GAAE;AACzB,uBAAU,cAAc,CAAC;AACvB,cAAI;AACF,gBAAI,UAAU,AAAQ,iBAAS;AAC/B,YAAQ,mBAAW,CAAC,OAAO,EAAE,SAAS;AACtC,YAAQ,mBAAW,CAAC,OAAO,EAAE,UAAU;AACvC,YAAQ,kBAAU,CAAC,YAAO,EAAE,kBAAkB,CAAC,OAAO;mBAC/C;AAAG,AACV,wBAAO,iBAAe;;;;IAI9B;;AAOE,qBAAS,GAAG;IACd;;AAIE,qBAAS,GAAG;IACd;;;IAnCK,aAAO,GAAG;IAyBV,eAAS,GAAG;EAWnB","file":"active_item_mixin.ddc.js"}');
  // Exports:
  return {
    model__a11y__active_item_mixin: model__a11y__active_item_mixin
  };
});

//# sourceMappingURL=active_item_mixin.ddc.js.map
