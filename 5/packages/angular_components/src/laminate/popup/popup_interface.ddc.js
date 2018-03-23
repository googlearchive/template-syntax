define(['dart_sdk', 'packages/angular_components/src/laminate/popup/popup_source'], function(dart_sdk, popup_source) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__popup__popup_source = popup_source.src__laminate__popup__popup_source;
  const _root = Object.create(null);
  const src__laminate__popup__popup_interface = Object.create(_root);
  let StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  src__laminate__popup__popup_interface.PopupInterface = class PopupInterface extends core.Object {};
  (src__laminate__popup__popup_interface.PopupInterface.new = function() {
  }).prototype = src__laminate__popup__popup_interface.PopupInterface.prototype;
  dart.addTypeTests(src__laminate__popup__popup_interface.PopupInterface);
  src__laminate__popup__popup_interface.PopupEvents = class PopupEvents extends core.Object {
    get onOpen() {
      return this.onOpenController.stream;
    }
    get onOpenController() {
      return this[onOpenController];
    }
    set onOpenController(value) {
      super.onOpenController = value;
    }
    get onClose() {
      return this.onCloseController.stream;
    }
    get onCloseController() {
      return this[onCloseController];
    }
    set onCloseController(value) {
      super.onCloseController = value;
    }
    get onVisible() {
      return this.onVisibleController.stream;
    }
    get onVisibleController() {
      return this[onVisibleController];
    }
    set onVisibleController(value) {
      super.onVisibleController = value;
    }
  };
  (src__laminate__popup__popup_interface.PopupEvents.new = function() {
    this[onOpenController] = StreamControllerOfNull().broadcast({sync: true});
    this[onCloseController] = StreamControllerOfNull().broadcast({sync: true});
    this[onVisibleController] = StreamControllerOfbool().broadcast({sync: true});
  }).prototype = src__laminate__popup__popup_interface.PopupEvents.prototype;
  dart.addTypeTests(src__laminate__popup__popup_interface.PopupEvents);
  const onOpenController = Symbol("PopupEvents.onOpenController");
  const onCloseController = Symbol("PopupEvents.onCloseController");
  const onVisibleController = Symbol("PopupEvents.onVisibleController");
  dart.setGetterSignature(src__laminate__popup__popup_interface.PopupEvents, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_interface.PopupEvents.__proto__),
    onOpen: dart.fnType(async.Stream$(core.Null), []),
    onClose: dart.fnType(async.Stream$(core.Null), []),
    onVisible: dart.fnType(async.Stream$(core.bool), [])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_interface.PopupEvents, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_interface.PopupEvents.__proto__),
    onOpenController: dart.finalFieldType(StreamControllerOfNull()),
    onCloseController: dart.finalFieldType(StreamControllerOfNull()),
    onVisibleController: dart.finalFieldType(StreamControllerOfbool())
  }));
  src__laminate__popup__popup_interface.PopupBase = class PopupBase extends core.Object {
    set autoDismiss(autoDismiss) {
      this.state.autoDismiss = autoDismiss;
    }
    set enforceSpaceConstraints(enforceSpaceConstraints) {
      this.state.enforceSpaceConstraints = enforceSpaceConstraints;
    }
    set matchMinSourceWidth(matchMinSourceWidth) {
      this.state.matchMinSourceWidth = matchMinSourceWidth;
    }
    set offsetX(offsetX) {
      this.state.offsetX = offsetX;
    }
    set offsetY(offsetY) {
      this.state.offsetY = offsetY;
    }
    set preferredPositions(preferredPositions) {
      this.state.preferredPositions = preferredPositions;
    }
    set source(source) {
      this.state.source = source;
    }
    set trackLayoutChanges(trackLayoutChanges) {
      this.state.trackLayoutChanges = trackLayoutChanges;
    }
    set constrainToViewport(constrainToViewport) {
      this.state.constrainToViewport = constrainToViewport;
    }
  };
  (src__laminate__popup__popup_interface.PopupBase.new = function() {
  }).prototype = src__laminate__popup__popup_interface.PopupBase.prototype;
  dart.addTypeTests(src__laminate__popup__popup_interface.PopupBase);
  src__laminate__popup__popup_interface.PopupBase[dart.implements] = () => [src__laminate__popup__popup_interface.PopupInterface];
  dart.setSetterSignature(src__laminate__popup__popup_interface.PopupBase, () => ({
    __proto__: dart.getSetters(src__laminate__popup__popup_interface.PopupBase.__proto__),
    autoDismiss: dart.fnType(dart.void, [core.bool]),
    enforceSpaceConstraints: dart.fnType(dart.void, [core.bool]),
    matchMinSourceWidth: dart.fnType(dart.void, [core.bool]),
    offsetX: dart.fnType(dart.void, [core.int]),
    offsetY: dart.fnType(dart.void, [core.int]),
    preferredPositions: dart.fnType(dart.void, [core.Iterable]),
    source: dart.fnType(dart.void, [src__laminate__popup__popup_source.PopupSource]),
    trackLayoutChanges: dart.fnType(dart.void, [core.bool]),
    constrainToViewport: dart.fnType(dart.void, [core.bool])
  }));
  src__laminate__popup__popup_interface.PopupComposite = class PopupComposite extends core.Object {
    get autoDismiss() {
      return this[autoDismiss];
    }
    set autoDismiss(value) {
      this[autoDismiss] = value;
    }
    get enforceSpaceConstraints() {
      return this[enforceSpaceConstraints];
    }
    set enforceSpaceConstraints(value) {
      this[enforceSpaceConstraints] = value;
    }
    get matchMinSourceWidth() {
      return this[matchMinSourceWidth];
    }
    set matchMinSourceWidth(value) {
      this[matchMinSourceWidth] = value;
    }
    get offsetX() {
      return this[offsetX];
    }
    set offsetX(value) {
      this[offsetX] = value;
    }
    get offsetY() {
      return this[offsetY];
    }
    set offsetY(value) {
      this[offsetY] = value;
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
    get source() {
      return this[source];
    }
    set source(value) {
      this[source] = value;
    }
    get trackLayoutChanges() {
      return this[trackLayoutChanges];
    }
    set trackLayoutChanges(value) {
      this[trackLayoutChanges] = value;
    }
    get constrainToViewport() {
      return this[constrainToViewport];
    }
    set constrainToViewport(value) {
      this[constrainToViewport] = value;
    }
    get visible() {
      return this[visible];
    }
    set visible(value) {
      this[visible] = value;
    }
    toggle() {
      this.visible = !dart.test(this.visible);
    }
  };
  (src__laminate__popup__popup_interface.PopupComposite.new = function() {
    this[autoDismiss] = true;
    this[enforceSpaceConstraints] = false;
    this[matchMinSourceWidth] = true;
    this[offsetX] = 0;
    this[offsetY] = 0;
    this[preferredPositions] = dart.constList([], dart.dynamic);
    this[source] = null;
    this[trackLayoutChanges] = true;
    this[constrainToViewport] = true;
    this[visible] = false;
  }).prototype = src__laminate__popup__popup_interface.PopupComposite.prototype;
  dart.addTypeTests(src__laminate__popup__popup_interface.PopupComposite);
  const autoDismiss = Symbol("PopupComposite.autoDismiss");
  const enforceSpaceConstraints = Symbol("PopupComposite.enforceSpaceConstraints");
  const matchMinSourceWidth = Symbol("PopupComposite.matchMinSourceWidth");
  const offsetX = Symbol("PopupComposite.offsetX");
  const offsetY = Symbol("PopupComposite.offsetY");
  const preferredPositions = Symbol("PopupComposite.preferredPositions");
  const source = Symbol("PopupComposite.source");
  const trackLayoutChanges = Symbol("PopupComposite.trackLayoutChanges");
  const constrainToViewport = Symbol("PopupComposite.constrainToViewport");
  const visible = Symbol("PopupComposite.visible");
  src__laminate__popup__popup_interface.PopupComposite[dart.implements] = () => [src__laminate__popup__popup_interface.PopupInterface];
  dart.setMethodSignature(src__laminate__popup__popup_interface.PopupComposite, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_interface.PopupComposite.__proto__),
    toggle: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_interface.PopupComposite, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_interface.PopupComposite.__proto__),
    autoDismiss: dart.fieldType(core.bool),
    enforceSpaceConstraints: dart.fieldType(core.bool),
    matchMinSourceWidth: dart.fieldType(core.bool),
    offsetX: dart.fieldType(core.int),
    offsetY: dart.fieldType(core.int),
    preferredPositions: dart.fieldType(core.Iterable),
    source: dart.fieldType(src__laminate__popup__popup_source.PopupSource),
    trackLayoutChanges: dart.fieldType(core.bool),
    constrainToViewport: dart.fieldType(core.bool),
    visible: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_interface.ddc", {
    "package:angular_components/src/laminate/popup/popup_interface.dart": src__laminate__popup__popup_interface
  }, '{"version":3,"sourceRoot":"","sources":["popup_interface.dart"],"names":[],"mappings":";;;;;;;;;;;;;EA+EA;;;;YAS6B,sBAAgB,OAAO;;IACrB;;;;;;;YAGD,uBAAiB,OAAO;;IACvB;;;;;;;YAGC,yBAAmB,OAAO;;IAC3B;;;;;;;;IARA,sBAAgB,GACzC,AAAI,kCAAgC,QAAO;IAGlB,uBAAiB,GAC1C,AAAI,kCAAgC,QAAO;IAGlB,yBAAmB,GAC5C,AAAI,kCAAgC,QAAO;EACjD;;;;;;;;;;;;;;;;;;oBAQkB,WAAgB;AAC9B,gBAAK,YAAY,GAAG,WAAW;IACjC;gCAG4B,uBAA4B;AACtD,gBAAK,wBAAwB,GAAG,uBAAuB;IACzD;4BAGwB,mBAAwB;AAC9C,gBAAK,oBAAoB,GAAG,mBAAmB;IACjD;gBAGY,OAAW;AACrB,gBAAK,QAAQ,GAAG,OAAO;IACzB;gBAGY,OAAW;AACrB,gBAAK,QAAQ,GAAG,OAAO;IACzB;2BAGuB,kBAA2B;AAChD,gBAAK,mBAAmB,GAAG,kBAAkB;IAC/C;eAGW,MAAkB;AAC3B,gBAAK,OAAO,GAAG,MAAM;IACvB;2BAGuB,kBAAuB;AAC5C,gBAAK,mBAAmB,GAAG,kBAAkB;IAC/C;4BAGwB,mBAAwB;AAC9C,gBAAK,oBAAoB,GAAG,mBAAmB;IACjD;;;EACF;;;;;;;;;;;;;;;;IASO;;;;;;IAGA;;;;;;IAGA;;;;;;IAGD;;;;;;IAGA;;;;;;IAGK;;;;;;IAGG;;;;;;IAGP;;;;;;IAGA;;;;;;IAGA;;;;;;;AAIH,kBAAO,GAAG,WAAC,YAAO;IACpB;;;IAhCK,iBAAW,GAAG;IAGd,6BAAuB,GAAG;IAG1B,yBAAmB,GAAG;IAGvB,aAAO,GAAG;IAGV,aAAO,GAAG;IAGL,wBAAkB,GAAG;IAGlB,YAAM;IAGb,wBAAkB,GAAG;IAGrB,yBAAmB,GAAG;IAGtB,aAAO,GAAG;EAMjB","file":"popup_interface.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_interface: src__laminate__popup__popup_interface
  };
});

//# sourceMappingURL=popup_interface.ddc.js.map
