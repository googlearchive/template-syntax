define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/focus/focus', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/zone/ng_zone'], function(dart_sdk, disposer, focus, lifecycle_hooks, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const focus__focus = focus.focus__focus;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const _root = Object.create(null);
  const focus__focus_list = Object.create(_root);
  const $length = dartx.length;
  const $clear = dartx.clear;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $indexOf = dartx.indexOf;
  const $modulo = dartx['%'];
  const $clamp = dartx.clamp;
  const $_get = dartx._get;
  let JSArrayOfFocusableItem = () => (JSArrayOfFocusableItem = dart.constFn(_interceptors.JSArray$(focus__focus.FocusableItem)))();
  let StreamSubscriptionOfFocusMoveEvent = () => (StreamSubscriptionOfFocusMoveEvent = dart.constFn(async.StreamSubscription$(focus__focus.FocusMoveEvent)))();
  let FocusableItemToNull = () => (FocusableItemToNull = dart.constFn(dart.fnType(core.Null, [focus__focus.FocusableItem])))();
  let ObjectToNull = () => (ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))();
  let ListOfFocusableItem = () => (ListOfFocusableItem = dart.constFn(core.List$(focus__focus.FocusableItem)))();
  const _ngZone = Symbol('_ngZone');
  const _disposer = Symbol('_disposer');
  const _children = Symbol('_children');
  const _length = Symbol('_length');
  const _moveFocus = Symbol('_moveFocus');
  focus__focus_list.FocusListDirective = class FocusListDirective extends core.Object {
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    get [_length]() {
      return this[_children][$length];
    }
    get loop() {
      return this[loop];
    }
    set loop(value) {
      this[loop] = value;
    }
    set listItems(listItems) {
      this[_children][$clear]();
      this[_disposer].dispose();
      listItems[$forEach](dart.fn(i => {
        this[_children][$add](i);
        this[_disposer].addDisposable(StreamSubscriptionOfFocusMoveEvent(), i.focusmove.listen(dart.bind(this, _moveFocus)));
      }, FocusableItemToNull()));
      this[_ngZone].onEventDone.first.then(core.Null, dart.fn(_ => {
        this[_children][$forEach](dart.fn(c => {
          c.tabbable = false;
        }, FocusableItemToNull()));
        if (dart.test(this[_children][$isNotEmpty])) {
          this[_children][$first].tabbable = true;
        }
      }, ObjectToNull()));
    }
    [_moveFocus](event) {
      let i = this[_children][$indexOf](event.focusItem);
      if (i !== -1) {
        this.focus(dart.notNull(i) + dart.notNull(event.offset));
      }
      event.preventDefault();
    }
    focus(index) {
      if (this[_length] === 0) return;
      let newIndex = null;
      if (dart.test(this.loop)) {
        newIndex = index[$modulo](this[_length]);
      } else {
        newIndex = index[$clamp](0, dart.notNull(this[_length]) - 1);
      }
      this[_children][$_get](core.int._check(newIndex)).focus();
      this[_children][$forEach](dart.fn(i => {
        i.tabbable = false;
      }, FocusableItemToNull()));
      this[_children][$_get](core.int._check(newIndex)).tabbable = true;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (focus__focus_list.FocusListDirective.new = function(ngZone, role) {
    this[_disposer] = new utils__disposer__disposer.Disposer.multi();
    this[_children] = JSArrayOfFocusableItem().of([]);
    this[loop] = false;
    this[_ngZone] = ngZone;
    let l = role;
    this[role$] = l != null ? l : 'list';
  }).prototype = focus__focus_list.FocusListDirective.prototype;
  dart.addTypeTests(focus__focus_list.FocusListDirective);
  const role$ = Symbol("FocusListDirective.role");
  const loop = Symbol("FocusListDirective.loop");
  focus__focus_list.FocusListDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(focus__focus_list.FocusListDirective, () => ({
    __proto__: dart.getMethods(focus__focus_list.FocusListDirective.__proto__),
    [_moveFocus]: dart.fnType(dart.void, [focus__focus.FocusMoveEvent]),
    focus: dart.fnType(dart.void, [core.int]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(focus__focus_list.FocusListDirective, () => ({
    __proto__: dart.getGetters(focus__focus_list.FocusListDirective.__proto__),
    [_length]: dart.fnType(core.int, [])
  }));
  dart.setSetterSignature(focus__focus_list.FocusListDirective, () => ({
    __proto__: dart.getSetters(focus__focus_list.FocusListDirective.__proto__),
    listItems: dart.fnType(dart.void, [ListOfFocusableItem()])
  }));
  dart.setFieldSignature(focus__focus_list.FocusListDirective, () => ({
    __proto__: dart.getFields(focus__focus_list.FocusListDirective.__proto__),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    role: dart.finalFieldType(core.String),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_children]: dart.finalFieldType(ListOfFocusableItem()),
    loop: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/focus/focus_list.ddc", {
    "package:angular_components/focus/focus_list.dart": focus__focus_list
  }, '{"version":3,"sourceRoot":"","sources":["focus_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuCe;;;;;;;YAGM,gBAAS,SAAO;;IAQ9B;;;;;;kBAGS,SAA6B;AACzC,qBAAS,QAAM;AACf,qBAAS,QAAQ;AACjB,eAAS,UAAQ,CAAC,QAAC,CAAC;AAClB,uBAAS,MAAI,CAAC,CAAC;AACf,uBAAS,cAAc,uCAAC,CAAC,UAAU,OAAO,CAAC,2BAAU;;AAIvD,mBAAO,YAAY,MAAM,KAAK,YAAC,QAAC,CAAC;AAC/B,uBAAS,UAAQ,CAAC,QAAC,CAAC;AAClB,WAAC,SAAS,GAAG;;AAEf,sBAAI,eAAS,aAAW,GAAE;AACxB,yBAAS,QAAM,SAAS,GAAG;;;IAGjC;iBAEgB,KAAoB;AAClC,UAAI,IAAI,eAAS,UAAQ,CAAC,KAAK,UAAU;AACzC,UAAI,CAAC,KAAI,CAAC,GAAG;AACX,kBAAK,CAAG,aAAF,CAAC,iBAAG,KAAK,OAAO;;AAExB,WAAK,eAAe;IACtB;UAEW,KAAS;AAClB,UAAI,aAAO,KAAI,GAAG;AAClB,UAAI;AACJ,oBAAI,SAAI,GAAE;AACR,gBAAQ,GAAG,AAAM,KAAD,UAAG,aAAO;aACrB;AACL,gBAAQ,GAAG,KAAK,QAAM,CAAC,GAAW,aAAR,aAAO,IAAG;;AAEtC,qBAAS,wBAAC,QAAQ,QAAO;AACzB,qBAAS,UAAQ,CAAC,QAAC,CAAC;AAClB,SAAC,SAAS,GAAG;;AAEf,qBAAS,wBAAC,QAAQ,WAAU,GAAG;IACjC;;AAIE,qBAAS,QAAQ;IACnB;;uDAtDwB,MAAO,EAAE,IAA8B;IAJzD,eAAS,GAAG,IAAI,wCAAc;IAC9B,eAAS,GAAG;IASb,UAAI,GAAG;IANY,aAAO,GAAP,MAAO;YACb,IAAI;IAAX,WAAI,mBAAW;EAAM","file":"focus_list.ddc.js"}');
  // Exports:
  return {
    focus__focus_list: focus__focus_list
  };
});

//# sourceMappingURL=focus_list.ddc.js.map
