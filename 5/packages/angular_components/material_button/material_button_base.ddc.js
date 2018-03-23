define(['dart_sdk', 'packages/angular_components/button_decorator/button_decorator'], function(dart_sdk, button_decorator) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const _root = Object.create(null);
  const material_button__material_button_base = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _focused = Symbol('_focused');
  const _clickFocused = Symbol('_clickFocused');
  const _isMouseDown = Symbol('_isMouseDown');
  const _setFocused = Symbol('_setFocused');
  material_button__material_button_base.MaterialButtonBase = class MaterialButtonBase extends button_decorator__button_decorator.ButtonDirective {
    get raised() {
      return this[raised];
    }
    set raised(value) {
      this[raised] = value;
    }
    get focused() {
      return dart.test(this[_focused]) || dart.test(this[_clickFocused]);
    }
    get visualFocus() {
      return this[_focused];
    }
    get isMouseDown() {
      return this[_isMouseDown];
    }
    get zElevation() {
      return dart.test(this[_isMouseDown]) || dart.test(this[_focused]) ? 2 : 1;
    }
    [_setFocused](newValue) {
      async.scheduleMicrotask(dart.fn(() => {
        if (this[_focused] != newValue) {
          this[_focused] = newValue;
          this.focusedStateChanged();
        }
      }, VoidToNull()));
    }
    focusedStateChanged() {}
    onMouseDown(_) {
      this[_clickFocused] = true;
      this[_isMouseDown] = true;
    }
    onMouseUp(_) {
      this[_isMouseDown] = false;
    }
    onFocus(event) {
      if (dart.test(this[_clickFocused])) return;
      this[_setFocused](true);
    }
    onBlur(event) {
      if (dart.test(this[_clickFocused])) this[_clickFocused] = false;
      this[_setFocused](false);
    }
  };
  (material_button__material_button_base.MaterialButtonBase.new = function(element) {
    this[_focused] = false;
    this[_clickFocused] = false;
    this[_isMouseDown] = false;
    this[raised] = false;
    material_button__material_button_base.MaterialButtonBase.__proto__.new.call(this, element);
  }).prototype = material_button__material_button_base.MaterialButtonBase.prototype;
  dart.addTypeTests(material_button__material_button_base.MaterialButtonBase);
  const raised = Symbol("MaterialButtonBase.raised");
  dart.setMethodSignature(material_button__material_button_base.MaterialButtonBase, () => ({
    __proto__: dart.getMethods(material_button__material_button_base.MaterialButtonBase.__proto__),
    [_setFocused]: dart.fnType(dart.void, [core.bool]),
    focusedStateChanged: dart.fnType(dart.void, []),
    onMouseDown: dart.fnType(dart.void, [dart.dynamic]),
    onMouseUp: dart.fnType(dart.void, [dart.dynamic]),
    onFocus: dart.fnType(dart.void, [html.UIEvent]),
    onBlur: dart.fnType(dart.void, [html.UIEvent])
  }));
  dart.setGetterSignature(material_button__material_button_base.MaterialButtonBase, () => ({
    __proto__: dart.getGetters(material_button__material_button_base.MaterialButtonBase.__proto__),
    focused: dart.fnType(core.bool, []),
    visualFocus: dart.fnType(core.bool, []),
    isMouseDown: dart.fnType(core.bool, []),
    zElevation: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(material_button__material_button_base.MaterialButtonBase, () => ({
    __proto__: dart.getFields(material_button__material_button_base.MaterialButtonBase.__proto__),
    [_focused]: dart.fieldType(core.bool),
    [_clickFocused]: dart.fieldType(core.bool),
    [_isMouseDown]: dart.fieldType(core.bool),
    raised: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_button__material_button_base.MaterialButtonBase, {
    /*material_button__material_button_base.MaterialButtonBase.lowElevation*/get lowElevation() {
      return 1;
    },
    /*material_button__material_button_base.MaterialButtonBase.mediumElevation*/get mediumElevation() {
      return 2;
    }
  });
  dart.trackLibraries("packages/angular_components/material_button/material_button_base.ddc", {
    "package:angular_components/material_button/material_button_base.dart": material_button__material_button_base
  }, '{"version":3,"sourceRoot":"","sources":["material_button_base.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAkCO;;;;;;;YAGwB,WAAT,cAAQ,eAAI,mBAAa;;;YAGrB,eAAQ;;;YAGR,mBAAY;;;uBAMhC,kBAAY,eAAI,cAAQ,IAAG,CAAe,GAAG,CAAY;;kBAM5C,QAAa;AAC5B,6BAAiB,CAAC;AAChB,YAAI,cAAQ,IAAI,QAAQ,EAAE;AACxB,wBAAQ,GAAG,QAAQ;AACnB,kCAAmB;;;IAGzB;2BAG4B;gBAIX,CAAC;AAChB,yBAAa,GAAG;AAChB,wBAAY,GAAG;IACjB;cAIe,CAAC;AACd,wBAAY,GAAG;IACjB;YAIa,KAAa;AACxB,oBAAI,mBAAa,GAAE;AACnB,uBAAW,CAAC;IACd;WAIY,KAAa;AACvB,oBAAI,mBAAa,GAAE,mBAAa,GAAG;AAEnC,uBAAW,CAAC;IACd;;2EA1CmB,OAAmB;IAvBjC,cAAQ,GAAG;IACX,mBAAa,GAAG;IAChB,kBAAY,GAAG;IAIf,YAAM,GAAG;AAiB4B,sFAAM,OAAO;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;MA1B3C,qEAAY;YAAG;;MACf,wEAAe;YAAG","file":"material_button_base.ddc.js"}');
  // Exports:
  return {
    material_button__material_button_base: material_button__material_button_base
  };
});

//# sourceMappingURL=material_button_base.ddc.js.map
