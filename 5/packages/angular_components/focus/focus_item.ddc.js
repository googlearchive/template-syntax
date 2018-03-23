define(['dart_sdk', 'packages/angular_components/focus/focus'], function(dart_sdk, focus) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus__focus = focus.focus__focus;
  const _root = Object.create(null);
  const focus__focus_item = Object.create(_root);
  let StreamControllerOfFocusMoveEvent = () => (StreamControllerOfFocusMoveEvent = dart.constFn(async.StreamController$(focus__focus.FocusMoveEvent)))();
  const _focusMoveCtrl = Symbol('_focusMoveCtrl');
  focus__focus_item.FocusItemDirective = class FocusItemDirective extends focus__focus.RootFocusable {
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    get tabIndex() {
      return this[tabIndex];
    }
    set tabIndex(value) {
      this[tabIndex] = value;
    }
    get focusmove() {
      return this[_focusMoveCtrl].stream;
    }
    keydown(event) {
      let focusEvent = focus__focus.FocusMoveEvent.fromKeyboardEvent(this, event);
      if (focusEvent != null) {
        this[_focusMoveCtrl].add(focusEvent);
      }
    }
    set tabbable(value) {
      this.tabIndex = dart.test(value) ? '0' : '-1';
    }
  };
  (focus__focus_item.FocusItemDirective.new = function(element, role) {
    this[tabIndex] = '0';
    this[_focusMoveCtrl] = StreamControllerOfFocusMoveEvent().broadcast({sync: true});
    this[role$] = role != null ? role : 'listitem';
    focus__focus_item.FocusItemDirective.__proto__.new.call(this, element);
  }).prototype = focus__focus_item.FocusItemDirective.prototype;
  dart.addTypeTests(focus__focus_item.FocusItemDirective);
  const role$ = Symbol("FocusItemDirective.role");
  const tabIndex = Symbol("FocusItemDirective.tabIndex");
  focus__focus_item.FocusItemDirective[dart.implements] = () => [focus__focus.FocusableItem];
  dart.setMethodSignature(focus__focus_item.FocusItemDirective, () => ({
    __proto__: dart.getMethods(focus__focus_item.FocusItemDirective.__proto__),
    keydown: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setGetterSignature(focus__focus_item.FocusItemDirective, () => ({
    __proto__: dart.getGetters(focus__focus_item.FocusItemDirective.__proto__),
    focusmove: dart.fnType(async.Stream$(focus__focus.FocusMoveEvent), [])
  }));
  dart.setSetterSignature(focus__focus_item.FocusItemDirective, () => ({
    __proto__: dart.getSetters(focus__focus_item.FocusItemDirective.__proto__),
    tabbable: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(focus__focus_item.FocusItemDirective, () => ({
    __proto__: dart.getFields(focus__focus_item.FocusItemDirective.__proto__),
    role: dart.finalFieldType(core.String),
    tabIndex: dart.fieldType(core.String),
    [_focusMoveCtrl]: dart.finalFieldType(StreamControllerOfFocusMoveEvent())
  }));
  dart.trackLibraries("packages/angular_components/focus/focus_item.ddc", {
    "package:angular_components/focus/focus_item.dart": focus__focus_item
  }, '{"version":3,"sourceRoot":"","sources":["focus_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;IA8Be;;;;;;IAON;;;;;;;YAKiC,qBAAc,OAAO;;YAGhD,KAAmB;AAC9B,UAAI,aAAa,AAAI,6CAAgC,CAAC,MAAM,KAAK;AACjE,UAAI,UAAU,IAAI,MAAM;AACtB,4BAAc,IAAI,CAAC,UAAU;;IAEjC;iBAGa,KAAU;AACrB,mBAAQ,aAAG,KAAK,IAAG,MAAM;IAC3B;;uDAvBmB,OAAmB,EAAE,IAA8B;IAK/D,cAAQ,GAAG;IAEZ,oBAAc,GAChB,AAAI,4CAA0C,QAAO;IAP9C,WAAI,GAAG,IAAI,WAAJ,IAAI,GAAI;AACpB,kEAAM,OAAO;EAAC","file":"focus_item.ddc.js"}');
  // Exports:
  return {
    focus__focus_item: focus__focus_item
  };
});

//# sourceMappingURL=focus_item.ddc.js.map
