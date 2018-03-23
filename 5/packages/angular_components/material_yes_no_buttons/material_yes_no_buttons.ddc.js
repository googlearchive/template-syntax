define(['dart_sdk', 'packages/intl/intl', 'packages/angular_components/material_button/material_button', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, intl, material_button, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const material_button__material_button = material_button.material_button__material_button;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const material_yes_no_buttons__material_yes_no_buttons = Object.create(_root);
  let StreamControllerOfUIEvent = () => (StreamControllerOfUIEvent = dart.constFn(async.StreamController$(html.UIEvent)))();
  let StreamOfKeyboardEvent = () => (StreamOfKeyboardEvent = dart.constFn(async.Stream$(html.KeyboardEvent)))();
  const _yes = Symbol('_yes');
  const _no = Symbol('_no');
  material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent = class MaterialYesNoButtonsComponent extends core.Object {
    get yes() {
      return this[_yes].stream;
    }
    get no() {
      return this[_no].stream;
    }
    get yesText() {
      return this[yesText];
    }
    set yesText(value) {
      this[yesText] = value;
    }
    get noText() {
      return this[noText];
    }
    set noText(value) {
      this[noText] = value;
    }
    get yesHighlighted() {
      return this[yesHighlighted];
    }
    set yesHighlighted(value) {
      this[yesHighlighted] = value;
    }
    get raised() {
      return this[raised];
    }
    set raised(value) {
      this[raised] = value;
    }
    get yesRaised() {
      return this[yesRaised];
    }
    set yesRaised(value) {
      this[yesRaised] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get yesDisabled() {
      return this[yesDisabled];
    }
    set yesDisabled(value) {
      this[yesDisabled] = value;
    }
    get yesDisplayed() {
      return this[yesDisplayed];
    }
    set yesDisplayed(value) {
      this[yesDisplayed] = value;
    }
    get noDisplayed() {
      return this[noDisplayed];
    }
    set noDisplayed(value) {
      this[noDisplayed] = value;
    }
    get pending() {
      return this[pending];
    }
    set pending(value) {
      this[pending] = value;
    }
    get yesButton() {
      return this[yesButton];
    }
    set yesButton(value) {
      this[yesButton] = value;
    }
    get noButton() {
      return this[noButton];
    }
    set noButton(value) {
      this[noButton] = value;
    }
    onYes(event) {
      this[_yes].add(event);
    }
    onNo(event) {
      this[_no].add(event);
    }
    static get _msgYes() {
      return intl$.Intl.message('Yes', {name: '_msgYes', desc: 'Text on yes button.', meaning: 'Text on yes button.'});
    }
    static get _msgNo() {
      return intl$.Intl.message('No', {name: '_msgNo', desc: 'Text on no button.', meaning: 'Text on no button.'});
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.new = function() {
    this[_yes] = StreamControllerOfUIEvent().broadcast();
    this[_no] = StreamControllerOfUIEvent().broadcast();
    this[yesText] = material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent._msgYes;
    this[noText] = material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent._msgNo;
    this[yesHighlighted] = false;
    this[raised] = false;
    this[yesRaised] = false;
    this[disabled] = false;
    this[yesDisabled] = false;
    this[yesDisplayed] = true;
    this[noDisplayed] = true;
    this[pending] = false;
    this[yesButton] = null;
    this[noButton] = null;
  }).prototype = material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent);
  const yesText = Symbol("MaterialYesNoButtonsComponent.yesText");
  const noText = Symbol("MaterialYesNoButtonsComponent.noText");
  const yesHighlighted = Symbol("MaterialYesNoButtonsComponent.yesHighlighted");
  const raised = Symbol("MaterialYesNoButtonsComponent.raised");
  const yesRaised = Symbol("MaterialYesNoButtonsComponent.yesRaised");
  const disabled = Symbol("MaterialYesNoButtonsComponent.disabled");
  const yesDisabled = Symbol("MaterialYesNoButtonsComponent.yesDisabled");
  const yesDisplayed = Symbol("MaterialYesNoButtonsComponent.yesDisplayed");
  const noDisplayed = Symbol("MaterialYesNoButtonsComponent.noDisplayed");
  const pending = Symbol("MaterialYesNoButtonsComponent.pending");
  const yesButton = Symbol("MaterialYesNoButtonsComponent.yesButton");
  const noButton = Symbol("MaterialYesNoButtonsComponent.noButton");
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.__proto__),
    onYes: dart.fnType(dart.void, [html.UIEvent]),
    onNo: dart.fnType(dart.void, [html.UIEvent])
  }));
  dart.setGetterSignature(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent, () => ({
    __proto__: dart.getGetters(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.__proto__),
    yes: dart.fnType(async.Stream$(html.UIEvent), []),
    no: dart.fnType(async.Stream$(html.UIEvent), [])
  }));
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.__proto__),
    [_yes]: dart.finalFieldType(StreamControllerOfUIEvent()),
    [_no]: dart.finalFieldType(StreamControllerOfUIEvent()),
    yesText: dart.fieldType(core.String),
    noText: dart.fieldType(core.String),
    yesHighlighted: dart.fieldType(core.bool),
    raised: dart.fieldType(core.bool),
    yesRaised: dart.fieldType(core.bool),
    disabled: dart.fieldType(core.bool),
    yesDisabled: dart.fieldType(core.bool),
    yesDisplayed: dart.fieldType(core.bool),
    noDisplayed: dart.fieldType(core.bool),
    pending: dart.fieldType(core.bool),
    yesButton: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    noButton: dart.fieldType(material_button__material_button.MaterialButtonComponent)
  }));
  material_yes_no_buttons__material_yes_no_buttons.MaterialSaveCancelButtonsDirective = class MaterialSaveCancelButtonsDirective extends core.Object {
    static get _msgSave() {
      return intl$.Intl.message('Save', {name: '_msgSave', desc: 'Text on save button.', meaning: 'Text on save button.'});
    }
    static get _msgCancel() {
      return intl$.Intl.message('Cancel', {name: '_msgCancel', desc: 'Text on cancel button.', meaning: 'Text on cancel button.'});
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons.MaterialSaveCancelButtonsDirective.new = function(yesNo) {
    yesNo.yesText = material_yes_no_buttons__material_yes_no_buttons.MaterialSaveCancelButtonsDirective._msgSave;
    yesNo.noText = material_yes_no_buttons__material_yes_no_buttons.MaterialSaveCancelButtonsDirective._msgCancel;
  }).prototype = material_yes_no_buttons__material_yes_no_buttons.MaterialSaveCancelButtonsDirective.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons.MaterialSaveCancelButtonsDirective);
  material_yes_no_buttons__material_yes_no_buttons.MaterialSubmitCancelButtonsDirective = class MaterialSubmitCancelButtonsDirective extends material_yes_no_buttons__material_yes_no_buttons.MaterialSaveCancelButtonsDirective {
    static get _msgSubmit() {
      return intl$.Intl.message('Submit', {name: '_msgSubmit', desc: 'Text on submit button.', meaning: 'Text on submit button.'});
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons.MaterialSubmitCancelButtonsDirective.new = function(yesNo) {
    material_yes_no_buttons__material_yes_no_buttons.MaterialSubmitCancelButtonsDirective.__proto__.new.call(this, yesNo);
    yesNo.yesText = material_yes_no_buttons__material_yes_no_buttons.MaterialSubmitCancelButtonsDirective._msgSubmit;
  }).prototype = material_yes_no_buttons__material_yes_no_buttons.MaterialSubmitCancelButtonsDirective.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons.MaterialSubmitCancelButtonsDirective);
  const _subscription = Symbol('_subscription');
  const _onMatchingKeyUp = Symbol('_onMatchingKeyUp');
  const _isKeyUpMatching = Symbol('_isKeyUpMatching');
  material_yes_no_buttons__material_yes_no_buttons.BoundaryAwareKeyUpDirective = class BoundaryAwareKeyUpDirective extends core.Object {
    ngOnDestroy() {
      this[_subscription].cancel();
      this[_subscription] = null;
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons.BoundaryAwareKeyUpDirective.new = function(element, boundary) {
    this[_subscription] = null;
    let l = boundary == null ? null : boundary.keyUpStream;
    let keyUpStream = l != null ? l : html.Element.keyUpEvent.forElement(element);
    this[_subscription] = keyUpStream.where(dart.bind(this, _isKeyUpMatching)).listen(dart.bind(this, _onMatchingKeyUp));
  }).prototype = material_yes_no_buttons__material_yes_no_buttons.BoundaryAwareKeyUpDirective.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons.BoundaryAwareKeyUpDirective);
  material_yes_no_buttons__material_yes_no_buttons.BoundaryAwareKeyUpDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons.BoundaryAwareKeyUpDirective, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons.BoundaryAwareKeyUpDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons.BoundaryAwareKeyUpDirective, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons.BoundaryAwareKeyUpDirective.__proto__),
    [_subscription]: dart.fieldType(async.StreamSubscription)
  }));
  material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective = class KeyUpBoundaryDirective extends core.Object {
    get keyUpStream() {
      return this[keyUpStream];
    }
    set keyUpStream(value) {
      super.keyUpStream = value;
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective.new = function(element) {
    this[keyUpStream] = html.Element.keyUpEvent.forElement(element);
  }).prototype = material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective);
  const keyUpStream = Symbol("KeyUpBoundaryDirective.keyUpStream");
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective.__proto__),
    keyUpStream: dart.finalFieldType(StreamOfKeyboardEvent())
  }));
  const _yesNo = Symbol('_yesNo');
  material_yes_no_buttons__material_yes_no_buttons.EscapeCancelsDirective = class EscapeCancelsDirective extends material_yes_no_buttons__material_yes_no_buttons.BoundaryAwareKeyUpDirective {
    get noButton() {
      return this[_yesNo].noButton;
    }
    [_isKeyUpMatching](event) {
      if (event.keyCode !== html.KeyCode.ESC) return false;
      if (this.noButton == null || dart.test(this.noButton.disabled)) return false;
      return true;
    }
    [_onMatchingKeyUp](event) {
      return this[_yesNo].onNo(event);
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons.EscapeCancelsDirective.new = function(yesNo, element, boundary) {
    this[_yesNo] = yesNo;
    material_yes_no_buttons__material_yes_no_buttons.EscapeCancelsDirective.__proto__.new.call(this, element, boundary);
  }).prototype = material_yes_no_buttons__material_yes_no_buttons.EscapeCancelsDirective.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons.EscapeCancelsDirective);
  material_yes_no_buttons__material_yes_no_buttons.EscapeCancelsDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons.EscapeCancelsDirective, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons.EscapeCancelsDirective.__proto__),
    [_isKeyUpMatching]: dart.fnType(core.bool, [html.KeyboardEvent]),
    [_onMatchingKeyUp]: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setGetterSignature(material_yes_no_buttons__material_yes_no_buttons.EscapeCancelsDirective, () => ({
    __proto__: dart.getGetters(material_yes_no_buttons__material_yes_no_buttons.EscapeCancelsDirective.__proto__),
    noButton: dart.fnType(material_button__material_button.MaterialButtonComponent, [])
  }));
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons.EscapeCancelsDirective, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons.EscapeCancelsDirective.__proto__),
    [_yesNo]: dart.finalFieldType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent)
  }));
  material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective = class EnterAcceptsDirective extends material_yes_no_buttons__material_yes_no_buttons.BoundaryAwareKeyUpDirective {
    get yesButton() {
      return this[_yesNo].yesButton;
    }
    get noButton() {
      return this[_yesNo].noButton;
    }
    get enterAccepts() {
      return this[enterAccepts];
    }
    set enterAccepts(value) {
      this[enterAccepts] = value;
    }
    [_isKeyUpMatching](event) {
      if (!dart.test(this.enterAccepts)) return false;
      if (event.keyCode !== html.KeyCode.ENTER) return false;
      if (this.yesButton == null || dart.test(this.yesButton.disabled)) return false;
      if (this.noButton != null && dart.test(this.noButton.focused)) return false;
      return true;
    }
    [_onMatchingKeyUp](event) {
      return this[_yesNo].onYes(event);
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective.new = function(yesNo, element, boundary) {
    this[enterAccepts] = true;
    this[_yesNo] = yesNo;
    material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective.__proto__.new.call(this, element, boundary);
  }).prototype = material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective);
  const enterAccepts = Symbol("EnterAcceptsDirective.enterAccepts");
  material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective.__proto__),
    [_isKeyUpMatching]: dart.fnType(core.bool, [html.KeyboardEvent]),
    [_onMatchingKeyUp]: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setGetterSignature(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective, () => ({
    __proto__: dart.getGetters(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective.__proto__),
    yesButton: dart.fnType(material_button__material_button.MaterialButtonComponent, []),
    noButton: dart.fnType(material_button__material_button.MaterialButtonComponent, [])
  }));
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective.__proto__),
    [_yesNo]: dart.finalFieldType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent),
    enterAccepts: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.ddc", {
    "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.dart": material_yes_no_buttons__material_yes_no_buttons
  }, '{"version":3,"sourceRoot":"","sources":["material_yes_no_buttons.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;YAyC6B,WAAI,OAAO;;;YAOZ,UAAG,OAAO;;IAO7B;;;;;;IAMA;;;;;;IAMF;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAUA;;;;;;IAGmB;;;;;;IAGA;;;;;;UAEb,KAAa;AACtB,gBAAI,IAAI,CAAC,KAAK;IAChB;SAEU,KAAa;AACrB,eAAG,IAAI,CAAC,KAAK;IACf;;YAE6B,WAAI,QAAQ,CAAC,cAChC,iBACA,gCACG;IAAsB;;YAEP,WAAI,QAAQ,CAAC,aAC/B,gBACA,+BACG;IAAqB;;;IA/F5B,UAAI,GAAG,AAAI,qCAAmC;IAO9C,SAAG,GAAG,AAAI,qCAAmC;IAM5C,aAAO,GAAG,sFAAO;IAMjB,YAAM,GAAG,qFAAM;IAMjB,oBAAc,GAAG;IAMjB,YAAM,GAAG;IAMT,eAAS,GAAG;IAMZ,cAAQ,GAAG;IAMX,iBAAW,GAAG;IAMd,kBAAY,GAAG;IAMf,iBAAW,GAAG;IAUd,aAAO,GAAG;IAGS,eAAS;IAGT,cAAQ;EAmBlC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YAagC,WAAI,QAAQ,CAAC,eACjC,kBACA,iCACG;IAAuB;;YAEJ,WAAI,QAAQ,CAAC,iBACnC,oBACA,mCACG;IAAyB;;sGAbH,KAAmC;AACpE,SAAK,QAAQ,GAAG,4FAAQ;AACxB,SAAK,OAAO,GAAG,8FAAU;EAC3B;;;;YAyBgC,WAAI,QAAQ,CAAC,iBACnC,oBACA,mCACG;IAAyB;;wGARD,KAAmC;AAClE,mHAAM,KAAK;AACf,SAAK,QAAQ,GAAG,gGAAU;EAC5B;;;;;;;AAyBE,yBAAa,OAAO;AACpB,yBAAa,GAAG;IAClB;;+FAXI,OAAe,EAAE,QAA2C;IAH7C,mBAAa;AAI9B,YACI,QAAQ,kBAAR,QAAQ,YAAa;QADG,8BACC,YAAO,WAAW,WAAW,CAAC,OAAO;AAClE,uBAAa,GACT,WAAW,MAAM,CAAC,iCAAgB,QAAQ,CAAC,iCAAgB;EACjE;;;;;;;;;;;;IAyB4B;;;;;;;0FAEL,OAAe;IAChC,iBAAW,GAAG,YAAO,WAAW,WAAW,CAAC,OAAO;EAAC;;;;;;;;;;YAclB,aAAM,SAAS;;uBAOjC,KAAmB;AACvC,UAAI,KAAK,QAAQ,KAAI,YAAO,IAAI,EAAE,MAAO;AAEzC,UAAI,aAAQ,IAAI,kBAAQ,aAAQ,SAAS,GAAE,MAAO;AAElD,YAAO;IACT;uBAGsB,KAAmB;YAAK,aAAM,KAAK,CAAC,KAAK;IAAC;;0FAbvD,KAAM,EAAE,OAAe,EAAE,QAA2C;IAApE,YAAM,GAAN,KAAM;AACT,qGAAM,OAAO,EAAE,QAAQ;EAAC;;;;;;;;;;;;;;;;;;YA0BW,aAAM,UAAU;;;YACjB,aAAM,SAAS;;IAQlD;;;;;;uBAGiB,KAAmB;AACvC,qBAAK,iBAAY,GAAE,MAAO;AAC1B,UAAI,KAAK,QAAQ,KAAI,YAAO,MAAM,EAAE,MAAO;AAE3C,UAAI,cAAS,IAAI,kBAAQ,cAAS,SAAS,GAAE,MAAO;AAGpD,UAAI,aAAQ,IAAI,kBAAQ,aAAQ,QAAQ,GAAE,MAAO;AAEjD,YAAO;IACT;uBAGsB,KAAmB;YAAK,aAAM,MAAM,CAAC,KAAK;IAAC;;yFArBxD,KAAM,EAAE,OAAe,EAAE,QAA2C;IAKxE,kBAAY,GAAG;IALX,YAAM,GAAN,KAAM;AACT,oGAAM,OAAO,EAAE,QAAQ;EAAC","file":"material_yes_no_buttons.ddc.js"}');
  // Exports:
  return {
    material_yes_no_buttons__material_yes_no_buttons: material_yes_no_buttons__material_yes_no_buttons
  };
});

//# sourceMappingURL=material_yes_no_buttons.ddc.js.map
