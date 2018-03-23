define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/popup/popup_ref'], function(dart_sdk, disposer, lifecycle_hooks, dom_service, modal, popup_ref) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const src__laminate__popup__popup_ref = popup_ref.src__laminate__popup__popup_ref;
  const _root = Object.create(null);
  const focus__focus = Object.create(_root);
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  focus__focus.Focusable = class Focusable extends core.Object {};
  (focus__focus.Focusable.new = function() {
  }).prototype = focus__focus.Focusable.prototype;
  dart.addTypeTests(focus__focus.Focusable);
  const _root$ = Symbol('_root');
  focus__focus.RootFocusable = class RootFocusable extends core.Object {
    focus() {
      if (this[_root$] == null) return;
      if (dart.notNull(this[_root$].tabIndex) < 0) {
        this[_root$].tabIndex = -1;
      }
      this[_root$].focus();
    }
    dispose() {
      this[_root$] = null;
    }
  };
  (focus__focus.RootFocusable.new = function(root) {
    this[_root$] = root;
  }).prototype = focus__focus.RootFocusable.prototype;
  dart.addTypeTests(focus__focus.RootFocusable);
  focus__focus.RootFocusable[dart.implements] = () => [focus__focus.Focusable, utils__disposer__disposer.Disposable];
  dart.setMethodSignature(focus__focus.RootFocusable, () => ({
    __proto__: dart.getMethods(focus__focus.RootFocusable.__proto__),
    focus: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(focus__focus.RootFocusable, () => ({
    __proto__: dart.getFields(focus__focus.RootFocusable.__proto__),
    [_root$]: dart.fieldType(html.Element)
  }));
  const _resolvedFocusable = Symbol('_resolvedFocusable');
  focus__focus.ProjectedFocus = class ProjectedFocus extends core.Object {
    focus() {
      if (this[_resolvedFocusable] != null) {
        this[_resolvedFocusable].focus();
        return;
      }
      this.focusDelegate.then(core.Null, dart.fn(delegate => {
        if (!(focus__focus.Focusable.is(delegate) || html.Element.is(delegate))) dart.assertFailed();
        if (focus__focus.Focusable.is(delegate)) {
          this[_resolvedFocusable] = delegate;
        } else {
          this[_resolvedFocusable] = new focus__focus._FocusableElement.new(html.HtmlElement._check(delegate));
        }
        this[_resolvedFocusable].focus();
      }, dynamicToNull()));
    }
  };
  (focus__focus.ProjectedFocus.new = function() {
    this[_resolvedFocusable] = null;
  }).prototype = focus__focus.ProjectedFocus.prototype;
  dart.addTypeTests(focus__focus.ProjectedFocus);
  focus__focus.ProjectedFocus[dart.implements] = () => [focus__focus.Focusable];
  dart.setMethodSignature(focus__focus.ProjectedFocus, () => ({
    __proto__: dart.getMethods(focus__focus.ProjectedFocus.__proto__),
    focus: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(focus__focus.ProjectedFocus, () => ({
    __proto__: dart.getFields(focus__focus.ProjectedFocus.__proto__),
    [_resolvedFocusable]: dart.fieldType(focus__focus.Focusable)
  }));
  focus__focus._FocusableElement = class _FocusableElement extends focus__focus.RootFocusable {};
  (focus__focus._FocusableElement.new = function(element) {
    focus__focus._FocusableElement.__proto__.new.call(this, element);
  }).prototype = focus__focus._FocusableElement.prototype;
  dart.addTypeTests(focus__focus._FocusableElement);
  focus__focus.FocusableItem = class FocusableItem extends core.Object {};
  (focus__focus.FocusableItem.new = function() {
  }).prototype = focus__focus.FocusableItem.prototype;
  dart.addTypeTests(focus__focus.FocusableItem);
  focus__focus.FocusableItem[dart.implements] = () => [focus__focus.Focusable];
  const _preventDefaultDelegate = Symbol('_preventDefaultDelegate');
  focus__focus.FocusMoveEvent = class FocusMoveEvent extends core.Object {
    get focusItem() {
      return this[focusItem$];
    }
    set focusItem(value) {
      super.focusItem = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    preventDefault() {
      if (this[_preventDefaultDelegate] != null) dart.dcall(this[_preventDefaultDelegate]);
    }
    static fromKeyboardEvent(item, kbEvent) {
      let keyCode = kbEvent.keyCode;
      if (!dart.test(focus__focus.FocusMoveEvent._isNextKey(keyCode)) && !dart.test(focus__focus.FocusMoveEvent._isPrevKey(keyCode))) return null;
      let offset = dart.test(focus__focus.FocusMoveEvent._isNextKey(keyCode)) ? 1 : -1;
      return new focus__focus.FocusMoveEvent.new(item, offset, dart.fn(() => {
        kbEvent.preventDefault();
      }, VoidToNull()));
    }
    static _isNextKey(keyCode) {
      return keyCode === html.KeyCode.RIGHT || keyCode === html.KeyCode.DOWN;
    }
    static _isPrevKey(keyCode) {
      return keyCode === html.KeyCode.LEFT || keyCode === html.KeyCode.UP;
    }
  };
  (focus__focus.FocusMoveEvent.new = function(focusItem, offset, preventDefaultDelegate) {
    if (preventDefaultDelegate === void 0) preventDefaultDelegate = null;
    this[focusItem$] = focusItem;
    this[offset$] = offset;
    this[_preventDefaultDelegate] = preventDefaultDelegate;
  }).prototype = focus__focus.FocusMoveEvent.prototype;
  dart.addTypeTests(focus__focus.FocusMoveEvent);
  const focusItem$ = Symbol("FocusMoveEvent.focusItem");
  const offset$ = Symbol("FocusMoveEvent.offset");
  dart.setMethodSignature(focus__focus.FocusMoveEvent, () => ({
    __proto__: dart.getMethods(focus__focus.FocusMoveEvent.__proto__),
    preventDefault: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(focus__focus.FocusMoveEvent, () => ({
    _isNextKey: dart.fnType(core.bool, [core.int]),
    _isPrevKey: dart.fnType(core.bool, [core.int])
  }));
  dart.setFieldSignature(focus__focus.FocusMoveEvent, () => ({
    __proto__: dart.getFields(focus__focus.FocusMoveEvent.__proto__),
    focusItem: dart.finalFieldType(focus__focus.FocusableItem),
    offset: dart.finalFieldType(core.int),
    [_preventDefaultDelegate]: dart.finalFieldType(core.Function)
  }));
  const _domService = Symbol('_domService');
  const _focusable = Symbol('_focusable');
  const _modal = Symbol('_modal');
  const _popupRef = Symbol('_popupRef');
  const _disposer = Symbol('_disposer');
  const _autoFocus = Symbol('_autoFocus');
  const _onModalOrPopupVisibleChanged = Symbol('_onModalOrPopupVisibleChanged');
  focus__focus.AutoFocusDirective = class AutoFocusDirective extends focus__focus.RootFocusable {
    ngOnInit() {
      if (!dart.test(this[_autoFocus])) return;
      if (this[_modal] != null || this[_popupRef] != null) {
        let isVisible = this[_popupRef] != null ? this[_popupRef].isVisible : this[_modal].resolvedOverlayRef.isVisible;
        this[_onModalOrPopupVisibleChanged](isVisible);
        let onVisibleChanged = this[_popupRef] != null ? this[_popupRef].onVisibleChanged : this[_modal].resolvedOverlayRef.onVisibleChanged;
        this[_disposer].addStreamSubscription(core.bool, onVisibleChanged.listen(dart.bind(this, _onModalOrPopupVisibleChanged)));
      } else {
        this[_domService].scheduleWrite(dart.bind(this, 'focus'));
      }
    }
    set autoFocus(value) {
      if (!(this[_autoFocus] == null)) dart.assertFailed();
      this[_autoFocus] = value;
    }
    focus() {
      if (this[_focusable] != null) {
        this[_focusable].focus();
      } else {
        super.focus();
      }
    }
    ngOnDestroy() {
      super.dispose();
      this[_disposer].dispose();
      this[_focusable] = null;
      this[_domService] = null;
      this[_modal] = null;
      this[_popupRef] = null;
    }
    [_onModalOrPopupVisibleChanged](isVisible) {
      if (dart.test(isVisible)) this[_domService].scheduleWrite(dart.bind(this, 'focus'));
    }
  };
  (focus__focus.AutoFocusDirective.new = function(node, domService, focusable, modal, popupRef) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_autoFocus] = null;
    this[_domService] = domService;
    this[_focusable] = focusable;
    this[_modal] = modal;
    this[_popupRef] = popupRef;
    focus__focus.AutoFocusDirective.__proto__.new.call(this, node);
  }).prototype = focus__focus.AutoFocusDirective.prototype;
  dart.addTypeTests(focus__focus.AutoFocusDirective);
  focus__focus.AutoFocusDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(focus__focus.AutoFocusDirective, () => ({
    __proto__: dart.getMethods(focus__focus.AutoFocusDirective.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onModalOrPopupVisibleChanged]: dart.fnType(dart.void, [core.bool])
  }));
  dart.setSetterSignature(focus__focus.AutoFocusDirective, () => ({
    __proto__: dart.getSetters(focus__focus.AutoFocusDirective.__proto__),
    autoFocus: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(focus__focus.AutoFocusDirective, () => ({
    __proto__: dart.getFields(focus__focus.AutoFocusDirective.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_autoFocus]: dart.fieldType(core.bool),
    [_focusable]: dart.fieldType(focus__focus.Focusable),
    [_domService]: dart.fieldType(utils__browser__dom_service__dom_service.DomService),
    [_modal]: dart.fieldType(laminate__components__modal__modal.ModalComponent),
    [_popupRef]: dart.fieldType(src__laminate__popup__popup_ref.PopupRef)
  }));
  focus__focus.FocusableDirective = class FocusableDirective extends focus__focus.RootFocusable {};
  (focus__focus.FocusableDirective.new = function(node) {
    focus__focus.FocusableDirective.__proto__.new.call(this, node);
  }).prototype = focus__focus.FocusableDirective.prototype;
  dart.addTypeTests(focus__focus.FocusableDirective);
  dart.trackLibraries("packages/angular_components/focus/focus.ddc", {
    "package:angular_components/focus/focus.dart": focus__focus
  }, '{"version":3,"sourceRoot":"","sources":["focus.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;EAmBA;;;;;AAUI,UAAI,YAAK,IAAI,MAAM;AAMnB,UAAmB,aAAf,YAAK,SAAS,IAAG,GAAG;AACtB,oBAAK,SAAS,GAAG,CAAC;;AAEpB,kBAAK,MAAM;IACb;;AAIE,kBAAK,GAAG;IACV;;6CAnBmB,IAAK;IAAL,YAAK,GAAL,IAAK;EAAC;;;;;;;;;;;;;;;AA4BvB,UAAI,wBAAkB,IAAI,MAAM;AAC9B,gCAAkB,MAAM;AACxB;;AAEF,wBAAa,KAAK,YAAC,QAAC,QAAQ;AAC1B,cAA6B,0BAAtB,QAAQ,qBAAiB,QAAQ;AACxC,sCAAI,QAAQ,GAAe;AACzB,kCAAkB,GAAG,QAAQ;eACxB;AACL,kCAAkB,GAAG,IAAI,kCAAiB,yBAAC,QAAQ;;AAErD,gCAAkB,MAAM;;IAE5B;;;IAjBU,wBAAkB;EAkB9B;;;;;;;;;;;;iDAGoB,OAAmB;AAAI,4DAAM,OAAO;EAAC;;;;EAWzD;;;;;IAKsB;;;;;;IAGV;;;;;;;AAOR,UAAI,6BAAuB,IAAI,MAAM,wCAAuB;IAC9D;6BASI,IAAkB,EAAE,OAAqB;AAAE,AAC7C,UAAI,UAAU,OAAO,QAAQ;AAC7B,qBAAK,sCAAU,CAAC,OAAO,iBAAM,sCAAU,CAAC,OAAO,IAAG,MAAO;AACzD,UAAI,mBAAS,sCAAU,CAAC,OAAO,KAAI,IAAI,CAAC;AACxC,YAAO,KAAI,+BAAc,CAAC,IAAI,EAAE,MAAM,EAAE;AACtC,eAAO,eAAe;;IAE1B;sBAGuB,OAAW;YAC9B,AAAyB,QAAlB,KAAI,YAAO,MAAM,IAAI,OAAO,KAAI,YAAO,KAAK;;sBAChC,OAAW;YAC9B,AAAwB,QAAjB,KAAI,YAAO,KAAK,IAAI,OAAO,KAAI,YAAO,GAAG;;;8CAlBrC,SAAc,EAAE,MAAW,EAAQ,sBAAuB;QAAvB,sBAAuB,aAAvB,sBAAuB;IAArD,gBAAS,GAAT,SAAS;IAAO,aAAM,GAAN,MAAM;IAAQ,6BAAuB,GAAvB,sBAAuB;EAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+CzE,qBAAK,gBAAU,GAAE;AAEjB,UAAI,YAAM,IAAI,QAAQ,eAAS,IAAI,MAAM;AACvC,YAAI,YAAY,eAAS,IAAI,OACvB,eAAS,UAAU,GACnB,YAAM,mBAAmB,UAAU;AACzC,2CAA6B,CAAC,SAAS;AAEvC,YAAI,mBAAmB,eAAS,IAAI,OAC9B,eAAS,iBAAiB,GAC1B,YAAM,mBAAmB,iBAAiB;AAChD,uBAAS,sBAAsB,YAC3B,gBAAgB,OAAO,CAAC,8CAA6B;aACpD;AACL,yBAAW,cAAc,CAAC,wBAAK;;IAEnC;kBAMc,KAAU;AACtB,YAAO,gBAAU,IAAI;AACrB,sBAAU,GAAG,KAAK;IACpB;;AAIE,UAAI,gBAAU,IAAI,MAAM;AACtB,wBAAU,MAAM;aACX;AACL,mBAAW;;IAEf;;AAIE,mBAAa;AACb,qBAAS,QAAQ;AACjB,sBAAU,GAAG;AACb,uBAAW,GAAG;AACd,kBAAM,GAAG;AACT,qBAAS,GAAG;IACd;oCAEmC,SAAc;AAC/C,oBAAI,SAAS,GAAE,iBAAW,cAAc,CAAC,wBAAK;IAChD;;kDAzDI,IAAgB,EACX,UAAW,EACC,SAAU,EACV,KAAM,EACN,QAAS;IAfxB,eAAS,GAAG,IAAI,0CAAgB;IAEjC,gBAAU;IAUN,iBAAW,GAAX,UAAW;IACC,gBAAU,GAAV,SAAU;IACV,YAAM,GAAN,KAAM;IACN,eAAS,GAAT,QAAS;AACxB,6DAAM,IAAI;EAAC;;;;;;;;;;;;;;;;;;;;;;;kDA8DE,IAAgB;AAAI,6DAAM,IAAI;EAAC","file":"focus.ddc.js"}');
  // Exports:
  return {
    focus__focus: focus__focus
  };
});

//# sourceMappingURL=focus.ddc.js.map
