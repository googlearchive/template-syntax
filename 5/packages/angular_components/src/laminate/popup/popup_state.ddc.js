define(['dart_sdk', 'packages/observable/src/observable_map', 'packages/observable/src/records', 'packages/angular_components/src/laminate/popup/popup_source', 'packages/quiver/core', 'packages/observable/src/change_notifier'], function(dart_sdk, observable_map, records, popup_source, core, change_notifier) {
  'use strict';
  const core$ = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__observable_map = observable_map.src__observable_map;
  const src__records = records.src__records;
  const src__laminate__popup__popup_source = popup_source.src__laminate__popup__popup_source;
  const core$0 = core.core;
  const src__observable = change_notifier.src__observable;
  const _root = Object.create(null);
  const src__laminate__popup__popup_state = Object.create(_root);
  const $add = dartx.add;
  let LinkedMapOfSymbol$dynamic = () => (LinkedMapOfSymbol$dynamic = dart.constFn(_js_helper.LinkedMap$(core$.Symbol, dart.dynamic)))();
  let ObservableMapOfSymbol$dynamic = () => (ObservableMapOfSymbol$dynamic = dart.constFn(src__observable_map.ObservableMap$(core$.Symbol, dart.dynamic)))();
  let ObservableMapOfSymbol$Object = () => (ObservableMapOfSymbol$Object = dart.constFn(src__observable_map.ObservableMap$(core$.Symbol, core$.Object)))();
  let JSArrayOfChangeRecord = () => (JSArrayOfChangeRecord = dart.constFn(_interceptors.JSArray$(src__records.ChangeRecord)))();
  let ListOfChangeRecord = () => (ListOfChangeRecord = dart.constFn(core$.List$(src__records.ChangeRecord)))();
  let ListOfChangeRecordToListOfChangeRecord = () => (ListOfChangeRecordToListOfChangeRecord = dart.constFn(dart.fnType(ListOfChangeRecord(), [ListOfChangeRecord()])))();
  const _backingMap = Symbol('_backingMap');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  src__laminate__popup__popup_state.PopupState = class PopupState extends src__observable.Observable$(src__records.ChangeRecord) {
    static new(opts) {
      let autoDismiss = opts && 'autoDismiss' in opts ? opts.autoDismiss : true;
      let enforceSpaceConstraints = opts && 'enforceSpaceConstraints' in opts ? opts.enforceSpaceConstraints : false;
      let matchMinSourceWidth = opts && 'matchMinSourceWidth' in opts ? opts.matchMinSourceWidth : false;
      let offsetX = opts && 'offsetX' in opts ? opts.offsetX : 0;
      let offsetY = opts && 'offsetY' in opts ? opts.offsetY : 0;
      let preferredPositions = opts && 'preferredPositions' in opts ? opts.preferredPositions : const$ || (const$ = dart.constList([], dart.dynamic));
      let source = opts && 'source' in opts ? opts.source : null;
      let trackLayoutChanges = opts && 'trackLayoutChanges' in opts ? opts.trackLayoutChanges : true;
      let constrainToViewport = opts && 'constrainToViewport' in opts ? opts.constrainToViewport : true;
      return new src__laminate__popup__popup_state.PopupState.__(ObservableMapOfSymbol$dynamic().from(new (LinkedMapOfSymbol$dynamic()).from([const$0 || (const$0 = dart.const(core$.Symbol.new('autoDismiss'))), autoDismiss, const$1 || (const$1 = dart.const(core$.Symbol.new('enforceSpaceConstraints'))), enforceSpaceConstraints, const$2 || (const$2 = dart.const(core$.Symbol.new('matchMinSourceWidth'))), matchMinSourceWidth, const$3 || (const$3 = dart.const(core$.Symbol.new('offsetX'))), offsetX, const$4 || (const$4 = dart.const(core$.Symbol.new('offsetY'))), offsetY, const$5 || (const$5 = dart.const(core$.Symbol.new('preferredPositions'))), preferredPositions, const$6 || (const$6 = dart.const(core$.Symbol.new('source'))), source, const$7 || (const$7 = dart.const(core$.Symbol.new('trackLayoutChanges'))), trackLayoutChanges, const$8 || (const$8 = dart.const(core$.Symbol.new('constrainToViewport'))), constrainToViewport])));
    }
    static from(other) {
      if (other == null) return src__laminate__popup__popup_state.PopupState.new();
      return new src__laminate__popup__popup_state.PopupState.__(ObservableMapOfSymbol$Object().from(other[_backingMap]));
    }
    get changes() {
      return this[_backingMap].changes.map(ListOfChangeRecord(), dart.fn(records => {
        let propertyRecords = JSArrayOfChangeRecord().of([]);
        for (let record of records) {
          if (src__records.MapChangeRecord.is(record)) {
            propertyRecords[$add](new src__records.PropertyChangeRecord.new(this, core$.Symbol._check(record.key), record.oldValue, record.newValue));
          }
        }
        return propertyRecords;
      }, ListOfChangeRecordToListOfChangeRecord()));
    }
    get autoDismiss() {
      return core$.bool._check(this[_backingMap]._get(const$9 || (const$9 = dart.const(core$.Symbol.new('autoDismiss')))));
    }
    set autoDismiss(autoDismiss) {
      this[_backingMap]._set(const$10 || (const$10 = dart.const(core$.Symbol.new('autoDismiss'))), autoDismiss);
    }
    get enforceSpaceConstraints() {
      return core$.bool._check(this[_backingMap]._get(const$11 || (const$11 = dart.const(core$.Symbol.new('enforceSpaceConstraints')))));
    }
    set enforceSpaceConstraints(enforceSpaceConstraints) {
      this[_backingMap]._set(const$12 || (const$12 = dart.const(core$.Symbol.new('enforceSpaceConstraints'))), enforceSpaceConstraints);
    }
    get matchMinSourceWidth() {
      return core$.bool._check(this[_backingMap]._get(const$13 || (const$13 = dart.const(core$.Symbol.new('matchMinSourceWidth')))));
    }
    set matchMinSourceWidth(matchMinSourceWidth) {
      this[_backingMap]._set(const$14 || (const$14 = dart.const(core$.Symbol.new('matchMinSourceWidth'))), matchMinSourceWidth);
    }
    get source() {
      return src__laminate__popup__popup_source.PopupSource._check(this[_backingMap]._get(const$15 || (const$15 = dart.const(core$.Symbol.new('source')))));
    }
    set source(source) {
      this[_backingMap]._set(const$16 || (const$16 = dart.const(core$.Symbol.new('source'))), source);
    }
    get offsetX() {
      return core$.int._check(this[_backingMap]._get(const$17 || (const$17 = dart.const(core$.Symbol.new('offsetX')))));
    }
    set offsetX(offsetX) {
      this[_backingMap]._set(const$18 || (const$18 = dart.const(core$.Symbol.new('offsetX'))), offsetX);
    }
    get offsetY() {
      return core$.int._check(this[_backingMap]._get(const$19 || (const$19 = dart.const(core$.Symbol.new('offsetY')))));
    }
    set offsetY(offsetY) {
      this[_backingMap]._set(const$20 || (const$20 = dart.const(core$.Symbol.new('offsetY'))), offsetY);
    }
    get preferredPositions() {
      return core$.Iterable._check(this[_backingMap]._get(const$21 || (const$21 = dart.const(core$.Symbol.new('preferredPositions')))));
    }
    set preferredPositions(preferredPositions) {
      this[_backingMap]._set(const$22 || (const$22 = dart.const(core$.Symbol.new('preferredPositions'))), preferredPositions);
    }
    get trackLayoutChanges() {
      return core$.bool._check(this[_backingMap]._get(const$23 || (const$23 = dart.const(core$.Symbol.new('trackLayoutChanges')))));
    }
    set trackLayoutChanges(trackLayoutChanges) {
      this[_backingMap]._set(const$24 || (const$24 = dart.const(core$.Symbol.new('trackLayoutChanges'))), trackLayoutChanges);
    }
    get constrainToViewport() {
      return core$.bool._check(this[_backingMap]._get(const$25 || (const$25 = dart.const(core$.Symbol.new('constrainToViewport')))));
    }
    set constrainToViewport(constrainToViewport) {
      this[_backingMap]._set(const$26 || (const$26 = dart.const(core$.Symbol.new('constrainToViewport'))), constrainToViewport);
    }
    _equals(o) {
      if (o == null) return false;
      return src__laminate__popup__popup_state.PopupState.is(o) && o.autoDismiss == this.autoDismiss && o.enforceSpaceConstraints == this.enforceSpaceConstraints && o.matchMinSourceWidth == this.matchMinSourceWidth && dart.equals(o.source, this.source) && o.offsetX == this.offsetX && o.offsetY == this.offsetY && dart.equals(o.preferredPositions, this.preferredPositions) && o.trackLayoutChanges == this.trackLayoutChanges && o.constrainToViewport == this.constrainToViewport;
    }
    get hashCode() {
      return core$0.hashObjects([this.autoDismiss, this.enforceSpaceConstraints, this.matchMinSourceWidth, this.source, this.offsetX, this.offsetY, this.preferredPositions, this.trackLayoutChanges, this.constrainToViewport]);
    }
    toString() {
      return 'PopupState ' + dart.notNull(dart.toString(this[_backingMap]));
    }
  };
  (src__laminate__popup__popup_state.PopupState.__ = function(backingMap) {
    this[_backingMap] = backingMap;
    src__laminate__popup__popup_state.PopupState.__proto__.new.call(this);
  }).prototype = src__laminate__popup__popup_state.PopupState.prototype;
  dart.addTypeTests(src__laminate__popup__popup_state.PopupState);
  dart.setGetterSignature(src__laminate__popup__popup_state.PopupState, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_state.PopupState.__proto__),
    changes: dart.fnType(async.Stream$(core$.List$(src__records.ChangeRecord)), []),
    autoDismiss: dart.fnType(core$.bool, []),
    enforceSpaceConstraints: dart.fnType(core$.bool, []),
    matchMinSourceWidth: dart.fnType(core$.bool, []),
    source: dart.fnType(src__laminate__popup__popup_source.PopupSource, []),
    offsetX: dart.fnType(core$.int, []),
    offsetY: dart.fnType(core$.int, []),
    preferredPositions: dart.fnType(core$.Iterable, []),
    trackLayoutChanges: dart.fnType(core$.bool, []),
    constrainToViewport: dart.fnType(core$.bool, [])
  }));
  dart.setSetterSignature(src__laminate__popup__popup_state.PopupState, () => ({
    __proto__: dart.getSetters(src__laminate__popup__popup_state.PopupState.__proto__),
    autoDismiss: dart.fnType(dart.void, [core$.bool]),
    enforceSpaceConstraints: dart.fnType(dart.void, [core$.bool]),
    matchMinSourceWidth: dart.fnType(dart.void, [core$.bool]),
    source: dart.fnType(dart.void, [src__laminate__popup__popup_source.PopupSource]),
    offsetX: dart.fnType(dart.void, [core$.int]),
    offsetY: dart.fnType(dart.void, [core$.int]),
    preferredPositions: dart.fnType(dart.void, [core$.Iterable]),
    trackLayoutChanges: dart.fnType(dart.void, [core$.bool]),
    constrainToViewport: dart.fnType(dart.void, [core$.bool])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_state.PopupState, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_state.PopupState.__proto__),
    [_backingMap]: dart.finalFieldType(ObservableMapOfSymbol$Object())
  }));
  dart.defineExtensionMethods(src__laminate__popup__popup_state.PopupState, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__laminate__popup__popup_state.PopupState, ['hashCode']);
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_state.ddc", {
    "package:angular_components/src/laminate/popup/popup_state.dart": src__laminate__popup__popup_state
  }, '{"version":3,"sourceRoot":"","sources":["popup_state.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAsBY,iEAAa;UACd,qGAAyB;UACzB,yFAAqB;UACtB,qDAAS;UACT,qDAAS;UACJ,sFAAoB;UACjB;UACP,sFAAoB;UACpB,yFAAqB;AAAO,AACnC,YAAO,KAAI,+CAAY,CAAC,AAAI,oCAAmC,CAAC,wCAC9D,oEAAc,WAAW,EACzB,gFAA0B,uBAAuB,EACjD,4EAAsB,mBAAmB,EACzC,gEAAU,OAAO,EACjB,gEAAU,OAAO,EACjB,2EAAqB,kBAAkB,EACvC,+DAAS,MAAM,EACf,2EAAqB,kBAAkB,EACvC,4EAAsB,mBAAmB;IAE7C;gBAGwB,KAAgB;AAAE,AAExC,UAAI,KAAK,IAAI,MAAM,MAAO,AAAI,iDAAU;AACxC,YAAO,KAAI,+CAAY,CAAC,AAAI,mCAAkB,CAAC,KAAK,aAAY;IAClE;;YAK0C,kBAAW,QAAQ,IAAI,uBAAC,QAAC,OAAO;AAGpE,YAAI,kBAAkB;AACtB,iBAAS,SAAU,QAAO,EAAE;AAC1B,8CAAI,MAAM,GAAqB;AAC7B,2BAAe,MAAI,CAAC,IAAI,qCAAoB,CACxC,0BAAM,MAAM,IAAI,GAAE,MAAM,SAAS,EAAE,MAAM,SAAS;;;AAG1D,cAAO,gBAAe;;IACtB;;+BAIkB,iBAAW,MAAC;IAAa;oBACjC,WAAgB;AAC9B,uBAAW,MAAC,sEAAgB,WAAW;IACzC;;+BAKoC,iBAAW,MAAC;IAAyB;gCAC7C,uBAA4B;AACtD,uBAAW,MAAC,kFAA4B,uBAAuB;IACjE;;+BAGgC,iBAAW,MAAC;IAAqB;4BACzC,mBAAwB;AAC9C,uBAAW,MAAC,8EAAwB,mBAAmB;IACzD;;mEAO0B,iBAAW,MAAC;IAAQ;eACnC,MAAkB;AAC3B,uBAAW,MAAC,iEAAW,MAAM;IAC/B;;8BAGmB,iBAAW,MAAC;IAAS;gBAC5B,OAAW;AACrB,uBAAW,MAAC,kEAAY,OAAO;IACjC;;8BAGmB,iBAAW,MAAC;IAAS;gBAC5B,OAAW;AACrB,uBAAW,MAAC,kEAAY,OAAO;IACjC;;mCAQI,iBAAW,MAAC;IAAoB;2BACb,kBAA2B;AAChD,uBAAW,MAAC,6EAAuB,kBAAkB;IACvD;;+BAG+B,iBAAW,MAAC;IAAoB;2BACxC,kBAAuB;AAC5C,uBAAW,MAAC,6EAAuB,kBAAkB;IACvD;;+BAEgC,iBAAW,MAAC;IAAqB;4BACzC,mBAAwB;AAC9C,uBAAW,MAAC,8EAAwB,mBAAmB;IACzD;YAGiB,CAAC;UAAD,CAAC;YAS6B,iDAR3C,CAAC,KACD,CAAC,YAAY,IAAI,gBAAW,IAC5B,CAAC,wBAAwB,IAAI,4BAAuB,IACpD,CAAC,oBAAoB,IAAI,wBAAmB,gBAC5C,CAAC,OAAO,EAAI,WAAM,KAClB,CAAC,QAAQ,IAAI,YAAO,IACpB,CAAC,QAAQ,IAAI,YAAO,gBACpB,CAAC,mBAAmB,EAAI,uBAAkB,KAC1C,CAAC,mBAAmB,IAAI,uBAAkB,IAC1C,CAAC,oBAAoB,IAAI,wBAAmB;;;YAG5B,mBAAW,CAAC,CAC1B,gBAAW,EACX,4BAAuB,EACvB,wBAAmB,EACnB,WAAM,EACN,YAAO,EACP,YAAO,EACP,uBAAkB,EAClB,uBAAkB,EAClB,wBAAmB;IACnB;;YAGe,AAAc,4CAAE,iBAAW;IAAW;;8DA5GzC,UAAW;IAAX,iBAAW,GAAX,UAAW;;EAAC","file":"popup_state.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_state: src__laminate__popup__popup_state
  };
});

//# sourceMappingURL=popup_state.ddc.js.map
