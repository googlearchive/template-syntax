define(['dart_sdk', 'packages/protobuf/protobuf'], function(dart_sdk, protobuf) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf$ = protobuf.protobuf;
  const _root = Object.create(null);
  const material_datepicker__proto__date$46pb = Object.create(_root);
  let PbListOfDate = () => (PbListOfDate = dart.constFn(protobuf$.PbList$(material_datepicker__proto__date$46pb.Date)))();
  material_datepicker__proto__date$46pb.Date = class Date extends protobuf$.GeneratedMessage {
    clone() {
      let _ = new material_datepicker__proto__date$46pb.Date.new();
      _.mergeFromMessage(this);
      return _;
    }
    get info_() {
      return material_datepicker__proto__date$46pb.Date._i;
    }
    static create() {
      return new material_datepicker__proto__date$46pb.Date.new();
    }
    static createRepeated() {
      return new (PbListOfDate()).new();
    }
    static getDefault() {
      if (material_datepicker__proto__date$46pb.Date._defaultInstance == null) material_datepicker__proto__date$46pb.Date._defaultInstance = new material_datepicker__proto__date$46pb._ReadonlyDate.new();
      return material_datepicker__proto__date$46pb.Date._defaultInstance;
    }
    static $checkItem(v) {
      if (!material_datepicker__proto__date$46pb.Date.is(v)) protobuf$.checkItemFailed(v, 'Date');
    }
    get year() {
      return this.$_get(core.int, 0, 0);
    }
    set year(v) {
      this.$_setUnsignedInt32(0, v);
    }
    hasYear() {
      return this.$_has(0);
    }
    clearYear() {
      return this.clearField(1);
    }
    get month() {
      return this.$_get(core.int, 1, 0);
    }
    set month(v) {
      this.$_setUnsignedInt32(1, v);
    }
    hasMonth() {
      return this.$_has(1);
    }
    clearMonth() {
      return this.clearField(2);
    }
    get day() {
      return this.$_get(core.int, 2, 0);
    }
    set day(v) {
      this.$_setUnsignedInt32(2, v);
    }
    hasDay() {
      return this.$_has(2);
    }
    clearDay() {
      return this.clearField(3);
    }
  };
  (material_datepicker__proto__date$46pb.Date.new = function() {
    material_datepicker__proto__date$46pb.Date.__proto__.new.call(this);
  }).prototype = material_datepicker__proto__date$46pb.Date.prototype;
  (material_datepicker__proto__date$46pb.Date.fromBuffer = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date$46pb.Date.__proto__.fromBuffer.call(this, i, r);
  }).prototype = material_datepicker__proto__date$46pb.Date.prototype;
  (material_datepicker__proto__date$46pb.Date.fromJson = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date$46pb.Date.__proto__.fromJson.call(this, i, r);
  }).prototype = material_datepicker__proto__date$46pb.Date.prototype;
  dart.addTypeTests(material_datepicker__proto__date$46pb.Date);
  dart.setMethodSignature(material_datepicker__proto__date$46pb.Date, () => ({
    __proto__: dart.getMethods(material_datepicker__proto__date$46pb.Date.__proto__),
    clone: dart.fnType(material_datepicker__proto__date$46pb.Date, []),
    hasYear: dart.fnType(core.bool, []),
    clearYear: dart.fnType(dart.void, []),
    hasMonth: dart.fnType(core.bool, []),
    clearMonth: dart.fnType(dart.void, []),
    hasDay: dart.fnType(core.bool, []),
    clearDay: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(material_datepicker__proto__date$46pb.Date, () => ({
    create: dart.fnType(material_datepicker__proto__date$46pb.Date, []),
    createRepeated: dart.fnType(protobuf$.PbList$(material_datepicker__proto__date$46pb.Date), []),
    getDefault: dart.fnType(material_datepicker__proto__date$46pb.Date, []),
    $checkItem: dart.fnType(dart.void, [material_datepicker__proto__date$46pb.Date])
  }));
  dart.setGetterSignature(material_datepicker__proto__date$46pb.Date, () => ({
    __proto__: dart.getGetters(material_datepicker__proto__date$46pb.Date.__proto__),
    info_: dart.fnType(protobuf$.BuilderInfo, []),
    year: dart.fnType(core.int, []),
    month: dart.fnType(core.int, []),
    day: dart.fnType(core.int, [])
  }));
  dart.setSetterSignature(material_datepicker__proto__date$46pb.Date, () => ({
    __proto__: dart.getSetters(material_datepicker__proto__date$46pb.Date.__proto__),
    year: dart.fnType(dart.void, [core.int]),
    month: dart.fnType(dart.void, [core.int]),
    day: dart.fnType(dart.void, [core.int])
  }));
  dart.defineLazy(material_datepicker__proto__date$46pb.Date, {
    /*material_datepicker__proto__date$46pb.Date._i*/get _i() {
      let _ = new protobuf$.BuilderInfo.new('Date');
      _.a(core.int, 1, 'year', protobuf$.PbFieldType.O3);
      _.a(core.int, 2, 'month', protobuf$.PbFieldType.O3);
      _.a(core.int, 3, 'day', protobuf$.PbFieldType.O3);
      _.hasRequiredFields = false;
      return _;
    },
    /*material_datepicker__proto__date$46pb.Date._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  const Date_ReadonlyMessageMixin$ = class Date_ReadonlyMessageMixin extends material_datepicker__proto__date$46pb.Date {};
  (Date_ReadonlyMessageMixin$.new = function() {
    Date_ReadonlyMessageMixin$.__proto__.new.call(this);
  }).prototype = Date_ReadonlyMessageMixin$.prototype;
  (Date_ReadonlyMessageMixin$.fromBuffer = function(i, r) {
    Date_ReadonlyMessageMixin$.__proto__.fromBuffer.call(this, i, r);
  }).prototype = Date_ReadonlyMessageMixin$.prototype;
  (Date_ReadonlyMessageMixin$.fromJson = function(i, r) {
    Date_ReadonlyMessageMixin$.__proto__.fromJson.call(this, i, r);
  }).prototype = Date_ReadonlyMessageMixin$.prototype;
  dart.mixinMembers(Date_ReadonlyMessageMixin$, protobuf$.ReadonlyMessageMixin);
  material_datepicker__proto__date$46pb._ReadonlyDate = class _ReadonlyDate extends Date_ReadonlyMessageMixin$ {};
  (material_datepicker__proto__date$46pb._ReadonlyDate.new = function() {
    material_datepicker__proto__date$46pb._ReadonlyDate.__proto__.new.call(this);
  }).prototype = material_datepicker__proto__date$46pb._ReadonlyDate.prototype;
  dart.addTypeTests(material_datepicker__proto__date$46pb._ReadonlyDate);
  dart.trackLibraries("packages/angular_components/material_datepicker/proto/date.pb.ddc", {
    "package:angular_components/material_datepicker/proto/date.pb.dart": material_datepicker__proto__date$46pb
  }, '{"version":3,"sourceRoot":"","sources":["date.pb.dart"],"names":[],"mappings":";;;;;;;;;;;cAuBkB,IAAI,8CAAI;yBAAqB;;IAAK;;YACzB,8CAAE;;;YACH,KAAI,8CAAI;IAAE;;YACM,KAAI,oBAAY;IAAE;;AAExD,UAAI,2DAAgB,IAAI,MAAM,2DAAgB,GAAG,IAAI,uDAAa;AAClE,YAAO,4DAAgB;IACzB;sBAGuB,CAAM;AAC3B,yDAAI,CAAC,GAAW,yBAAe,CAAC,CAAC,EAAE;IACrC;;YAEgB,WAAK,WAAC,GAAG;IAAE;aAClB,CAAK;AACZ,6BAAkB,CAAC,GAAG,CAAC;IACzB;;YAEkB,WAAK,CAAC;IAAE;;YACN,gBAAU,CAAC;IAAE;;YAEhB,WAAK,WAAC,GAAG;IAAE;cAClB,CAAK;AACb,6BAAkB,CAAC,GAAG,CAAC;IACzB;;YAEmB,WAAK,CAAC;IAAE;;YACN,gBAAU,CAAC;IAAE;;YAEnB,WAAK,WAAC,GAAG;IAAE;YAClB,CAAK;AACX,6BAAkB,CAAC,GAAG,CAAC;IACzB;;YAEiB,WAAK,CAAC;IAAE;;YACN,gBAAU,CAAC;IAAE;;;AAzCvB;EAAO;oEACA,CAAW,EAAG,CAA6C;sBAA3B,IAAI,2BAAiB,MAAM;AACrE,+EAAiB,CAAC,EAAE,CAAC;EAAC;kEACd,CAAQ,EAAG,CAA6C;sBAA3B,IAAI,2BAAiB,MAAM;AAChE,6EAAe,CAAC,EAAE,CAAC;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAVD,6CAAE;cAAG,IAAI,yBAAW,CAAC;oBACnC,GAAG,QAAQ,qBAAW,GAAG;oBACzB,GAAG,SAAS,qBAAW,GAAG;oBAC1B,GAAG,OAAO,qBAAW,GAAG;4BACX;;;MAgBZ,2DAAgB;;;;;;;;;;;;;;;;;;;EA8B8B","file":"date.pb.ddc.js"}');
  // Exports:
  return {
    material_datepicker__proto__date$46pb: material_datepicker__proto__date$46pb
  };
});

//# sourceMappingURL=date.pb.ddc.js.map
