define(['dart_sdk', 'packages/angular_components/focus/focus'], function(dart_sdk, focus) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus__focus = focus.focus__focus;
  const _root = Object.create(null);
  const mixins__focusable_mixin = Object.create(_root);
  let StreamControllerOfFocusEvent = () => (StreamControllerOfFocusEvent = dart.constFn(async.StreamController$(html.FocusEvent)))();
  const _onFocus = Symbol('_onFocus');
  const _focusable = Symbol('_focusable');
  const _focusPending = Symbol('_focusPending');
  mixins__focusable_mixin.FocusableMixin = class FocusableMixin extends core.Object {
    get onFocus() {
      return this[_onFocus].stream;
    }
    set focusable(component) {
      this[_focusable] = component;
      if (dart.test(this[_focusPending]) && component != null) {
        this[_focusPending] = false;
        this[_focusable].focus();
      }
    }
    focus() {
      if (this[_focusable] == null) {
        this[_focusPending] = true;
      } else {
        this[_focusable].focus();
      }
    }
    handleFocus(event) {
      this[_onFocus].add(event);
    }
  };
  (mixins__focusable_mixin.FocusableMixin.new = function() {
    this[_onFocus] = StreamControllerOfFocusEvent().broadcast({sync: true});
    this[_focusable] = null;
    this[_focusPending] = false;
  }).prototype = mixins__focusable_mixin.FocusableMixin.prototype;
  dart.addTypeTests(mixins__focusable_mixin.FocusableMixin);
  mixins__focusable_mixin.FocusableMixin[dart.implements] = () => [focus__focus.Focusable];
  dart.setMethodSignature(mixins__focusable_mixin.FocusableMixin, () => ({
    __proto__: dart.getMethods(mixins__focusable_mixin.FocusableMixin.__proto__),
    focus: dart.fnType(dart.void, []),
    handleFocus: dart.fnType(dart.void, [html.FocusEvent])
  }));
  dart.setGetterSignature(mixins__focusable_mixin.FocusableMixin, () => ({
    __proto__: dart.getGetters(mixins__focusable_mixin.FocusableMixin.__proto__),
    onFocus: dart.fnType(async.Stream$(html.FocusEvent), [])
  }));
  dart.setSetterSignature(mixins__focusable_mixin.FocusableMixin, () => ({
    __proto__: dart.getSetters(mixins__focusable_mixin.FocusableMixin.__proto__),
    focusable: dart.fnType(dart.void, [focus__focus.Focusable])
  }));
  dart.setFieldSignature(mixins__focusable_mixin.FocusableMixin, () => ({
    __proto__: dart.getFields(mixins__focusable_mixin.FocusableMixin.__proto__),
    [_onFocus]: dart.finalFieldType(StreamControllerOfFocusEvent()),
    [_focusable]: dart.fieldType(focus__focus.Focusable),
    [_focusPending]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/mixins/focusable_mixin.ddc", {
    "package:angular_components/mixins/focusable_mixin.dart": mixins__focusable_mixin
  }, '{"version":3,"sourceRoot":"","sources":["focusable_mixin.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;YAaoC,eAAQ,OAAO;;kBAOnC,SAAmB;AAC/B,sBAAU,GAAG,SAAS;AACtB,oBAAI,mBAAa,KAAI,SAAS,IAAI,MAAM;AACtC,2BAAa,GAAG;AAChB,wBAAU,MAAM;;IAEpB;;AAIE,UAAI,gBAAU,IAAI,MAAM;AACtB,2BAAa,GAAG;aACX;AACL,wBAAU,MAAM;;IAEpB;gBAEiB,KAAgB;AAC/B,oBAAQ,IAAI,CAAC,KAAK;IACpB;;;IAzBmC,cAAQ,GACvC,AAAI,wCAAsC,QAAO;IAE3C,gBAAU;IACf,mBAAa,GAAG;EAsBvB","file":"focusable_mixin.ddc.js"}');
  // Exports:
  return {
    mixins__focusable_mixin: mixins__focusable_mixin
  };
});

//# sourceMappingURL=focusable_mixin.ddc.js.map
