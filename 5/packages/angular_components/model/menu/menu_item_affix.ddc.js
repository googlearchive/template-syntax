define(['dart_sdk', 'packages/angular_components/model/ui/icon'], function(dart_sdk, icon) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__icon = icon.model__ui__icon;
  const _root = Object.create(null);
  const model__menu__menu_item_affix = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  model__menu__menu_item_affix.MenuItemAffix = class MenuItemAffix extends core.Object {
    get isVisibleOnHover() {
      return this.visibility === model__menu__menu_item_affix.IconVisibility.hover;
    }
    get isVisible() {
      return this.visibility !== model__menu__menu_item_affix.IconVisibility.hidden;
    }
  };
  (model__menu__menu_item_affix.MenuItemAffix.new = function() {
  }).prototype = model__menu__menu_item_affix.MenuItemAffix.prototype;
  dart.addTypeTests(model__menu__menu_item_affix.MenuItemAffix);
  dart.setGetterSignature(model__menu__menu_item_affix.MenuItemAffix, () => ({
    __proto__: dart.getGetters(model__menu__menu_item_affix.MenuItemAffix.__proto__),
    isVisibleOnHover: dart.fnType(core.bool, []),
    isVisible: dart.fnType(core.bool, [])
  }));
  model__menu__menu_item_affix.IconAction = dart.typedef('IconAction', () => dart.fnType(dart.void, []));
  model__menu__menu_item_affix.IconWithAction = class IconWithAction extends model__ui__icon.Icon {
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
    get ariaLabel() {
      return this[ariaLabel$];
    }
    set ariaLabel(value) {
      super.ariaLabel = value;
    }
    get keyCode() {
      return this[keyCode$];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get shouldCloseMenuOnTrigger() {
      return this[shouldCloseMenuOnTrigger$];
    }
    set shouldCloseMenuOnTrigger(value) {
      super.shouldCloseMenuOnTrigger = value;
    }
  };
  (model__menu__menu_item_affix.IconWithAction.new = function(name, action, ariaLabel, keyCode, opts) {
    let shouldCloseMenuOnTrigger = opts && 'shouldCloseMenuOnTrigger' in opts ? opts.shouldCloseMenuOnTrigger : false;
    this[action$] = action;
    this[ariaLabel$] = ariaLabel;
    this[keyCode$] = keyCode;
    this[shouldCloseMenuOnTrigger$] = shouldCloseMenuOnTrigger;
    model__menu__menu_item_affix.IconWithAction.__proto__.new.call(this, name);
  }).prototype = model__menu__menu_item_affix.IconWithAction.prototype;
  dart.addTypeTests(model__menu__menu_item_affix.IconWithAction);
  const action$ = Symbol("IconWithAction.action");
  const ariaLabel$ = Symbol("IconWithAction.ariaLabel");
  const keyCode$ = Symbol("IconWithAction.keyCode");
  const shouldCloseMenuOnTrigger$ = Symbol("IconWithAction.shouldCloseMenuOnTrigger");
  dart.setFieldSignature(model__menu__menu_item_affix.IconWithAction, () => ({
    __proto__: dart.getFields(model__menu__menu_item_affix.IconWithAction.__proto__),
    action: dart.finalFieldType(VoidTovoid()),
    ariaLabel: dart.finalFieldType(core.String),
    keyCode: dart.finalFieldType(core.int),
    shouldCloseMenuOnTrigger: dart.finalFieldType(core.bool)
  }));
  model__menu__menu_item_affix.IconAffix = class IconAffix extends model__menu__menu_item_affix.MenuItemAffix {
    get visibility() {
      return this[visibility$];
    }
    set visibility(value) {
      super.visibility = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get shouldCloseMenuOnTrigger() {
      return model__menu__menu_item_affix.IconWithAction.is(this.icon) && dart.test(model__menu__menu_item_affix.IconWithAction.as(this.icon).shouldCloseMenuOnTrigger);
    }
    hasShortcutKeyCode(keyCode) {
      return model__menu__menu_item_affix.IconWithAction.is(this.icon) && model__menu__menu_item_affix.IconWithAction.as(this.icon).keyCode == keyCode;
    }
    triggerShortcutAction() {
      if (!model__menu__menu_item_affix.IconWithAction.is(this.icon)) return;
      let t = model__menu__menu_item_affix.IconWithAction.as(this.icon).action;
      t == null ? null : dart.dcall(t);
    }
  };
  (model__menu__menu_item_affix.IconAffix.new = function(opts) {
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : model__menu__menu_item_affix.IconVisibility.visible;
    this[icon$] = icon;
    this[visibility$] = visibility;
  }).prototype = model__menu__menu_item_affix.IconAffix.prototype;
  dart.addTypeTests(model__menu__menu_item_affix.IconAffix);
  const visibility$ = Symbol("IconAffix.visibility");
  const icon$ = Symbol("IconAffix.icon");
  dart.setMethodSignature(model__menu__menu_item_affix.IconAffix, () => ({
    __proto__: dart.getMethods(model__menu__menu_item_affix.IconAffix.__proto__),
    hasShortcutKeyCode: dart.fnType(core.bool, [core.int]),
    triggerShortcutAction: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(model__menu__menu_item_affix.IconAffix, () => ({
    __proto__: dart.getGetters(model__menu__menu_item_affix.IconAffix.__proto__),
    shouldCloseMenuOnTrigger: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(model__menu__menu_item_affix.IconAffix, () => ({
    __proto__: dart.getFields(model__menu__menu_item_affix.IconAffix.__proto__),
    visibility: dart.finalFieldType(model__menu__menu_item_affix.IconVisibility),
    icon: dart.finalFieldType(model__ui__icon.Icon)
  }));
  model__menu__menu_item_affix.CaptionAffix = class CaptionAffix extends model__menu__menu_item_affix.MenuItemAffix {
    get visibility() {
      return this[visibility$0];
    }
    set visibility(value) {
      super.visibility = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get shouldCloseMenuOnTrigger() {
      return false;
    }
    hasShortcutKeyCode(keyCode) {
      return false;
    }
    triggerShortcutAction() {}
  };
  (model__menu__menu_item_affix.CaptionAffix.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : model__menu__menu_item_affix.IconVisibility.visible;
    this[text$] = text;
    this[visibility$0] = visibility;
  }).prototype = model__menu__menu_item_affix.CaptionAffix.prototype;
  dart.addTypeTests(model__menu__menu_item_affix.CaptionAffix);
  const visibility$0 = Symbol("CaptionAffix.visibility");
  const text$ = Symbol("CaptionAffix.text");
  dart.setMethodSignature(model__menu__menu_item_affix.CaptionAffix, () => ({
    __proto__: dart.getMethods(model__menu__menu_item_affix.CaptionAffix.__proto__),
    hasShortcutKeyCode: dart.fnType(core.bool, [core.int]),
    triggerShortcutAction: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(model__menu__menu_item_affix.CaptionAffix, () => ({
    __proto__: dart.getGetters(model__menu__menu_item_affix.CaptionAffix.__proto__),
    shouldCloseMenuOnTrigger: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(model__menu__menu_item_affix.CaptionAffix, () => ({
    __proto__: dart.getFields(model__menu__menu_item_affix.CaptionAffix.__proto__),
    visibility: dart.finalFieldType(model__menu__menu_item_affix.IconVisibility),
    text: dart.finalFieldType(core.String)
  }));
  model__menu__menu_item_affix.IconVisibility = class IconVisibility extends core.Object {
    toString() {
      return {
        0: "IconVisibility.hidden",
        1: "IconVisibility.hover",
        2: "IconVisibility.visible"
      }[this.index];
    }
  };
  (model__menu__menu_item_affix.IconVisibility.new = function(x) {
    this.index = x;
  }).prototype = model__menu__menu_item_affix.IconVisibility.prototype;
  dart.addTypeTests(model__menu__menu_item_affix.IconVisibility);
  dart.setFieldSignature(model__menu__menu_item_affix.IconVisibility, () => ({
    __proto__: dart.getFields(model__menu__menu_item_affix.IconVisibility.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(model__menu__menu_item_affix.IconVisibility, ['toString']);
  model__menu__menu_item_affix.IconVisibility.hidden = dart.const(new model__menu__menu_item_affix.IconVisibility.new(0));
  model__menu__menu_item_affix.IconVisibility.hover = dart.const(new model__menu__menu_item_affix.IconVisibility.new(1));
  model__menu__menu_item_affix.IconVisibility.visible = dart.const(new model__menu__menu_item_affix.IconVisibility.new(2));
  model__menu__menu_item_affix.IconVisibility.values = dart.constList([model__menu__menu_item_affix.IconVisibility.hidden, model__menu__menu_item_affix.IconVisibility.hover, model__menu__menu_item_affix.IconVisibility.visible], model__menu__menu_item_affix.IconVisibility);
  dart.trackLibraries("packages/angular_components/model/menu/menu_item_affix.ddc", {
    "package:angular_components/model/menu/menu_item_affix.dart": model__menu__menu_item_affix
  }, '{"version":3,"sourceRoot":"","sources":["menu_item_affix.dart"],"names":[],"mappings":";;;;;;;;;;;YAW+B,gBAAU,KAAI,2CAAc,MAAM;;;YACzC,gBAAU,KAAI,2CAAc,OAAO;;;;EAK3D;;;;;;;;;IAMmB;;;;;;IACJ;;;;;;IACH;;;;;;IAGC;;;;;;;8DAEI,IAAW,EAAE,MAAW,EAAE,SAAc,EAAE,OAAY;QAC3D,wGAA0B;IADH,aAAM,GAAN,MAAM;IAAO,gBAAS,GAAT,SAAS;IAAO,cAAO,GAAP,OAAO;IAC3D,+BAAwB,GAAxB,wBAAwB;AAC5B,yEAAM,IAAI;EAAC;;;;;;;;;;;;;;IAMI;;;;;;IAEV;;;;;;;YAMgB,gDAAvB,SAAI,8DACH,SAAI,0BAA4C;;uBAG7B,OAAW;YACR,gDAAvB,SAAI,KAAsB,+CAAC,SAAI,SAA2B,IAAI,OAAO;;;AAIvE,0DAAI,SAAI,GAAqB;AAC7B,6DAAC,SAAI,QAA0B;;IACjC;;;QAf0B;QAAW,8DAAY,2CAAc,QAAQ;IAA7C,WAAI,GAAJ,IAAI;IAAO,iBAAU,GAAV,UAAU;EAA0B;;;;;;;;;;;;;;;;;;;IAqBpD;;;;;;IAER;;;;;;;YAKwB;IAAK;uBAGlB,OAAW;YAAK;IAAK;6BAGf;;;QATX;QAAW,8DAAY,2CAAc,QAAQ;IAA7C,WAAI,GAAJ,IAAI;IAAO,kBAAU,GAAV,UAAU;EAA0B","file":"menu_item_affix.ddc.js"}');
  // Exports:
  return {
    model__menu__menu_item_affix: model__menu__menu_item_affix
  };
});

//# sourceMappingURL=menu_item_affix.ddc.js.map
