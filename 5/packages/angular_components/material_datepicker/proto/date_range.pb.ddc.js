define(['dart_sdk', 'packages/protobuf/protobuf', 'packages/angular_components/material_datepicker/proto/date.pb'], function(dart_sdk, protobuf, date) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf$ = protobuf.protobuf;
  const material_datepicker__proto__date$46pb = date.material_datepicker__proto__date$46pb;
  const _root = Object.create(null);
  const material_datepicker__proto__date_range$46pb = Object.create(_root);
  let PbListOfDatepickerDateRange = () => (PbListOfDatepickerDateRange = dart.constFn(protobuf$.PbList$(material_datepicker__proto__date_range$46pb.DatepickerDateRange)))();
  let PbListOfDateRange = () => (PbListOfDateRange = dart.constFn(protobuf$.PbList$(material_datepicker__proto__date_range$46pb.DateRange)))();
  material_datepicker__proto__date_range$46pb.DatepickerDateRange = class DatepickerDateRange extends protobuf$.GeneratedMessage {
    clone() {
      let _ = new material_datepicker__proto__date_range$46pb.DatepickerDateRange.new();
      _.mergeFromMessage(this);
      return _;
    }
    get info_() {
      return material_datepicker__proto__date_range$46pb.DatepickerDateRange._i;
    }
    static create() {
      return new material_datepicker__proto__date_range$46pb.DatepickerDateRange.new();
    }
    static createRepeated() {
      return new (PbListOfDatepickerDateRange()).new();
    }
    static getDefault() {
      if (material_datepicker__proto__date_range$46pb.DatepickerDateRange._defaultInstance == null) material_datepicker__proto__date_range$46pb.DatepickerDateRange._defaultInstance = new material_datepicker__proto__date_range$46pb._ReadonlyDatepickerDateRange.new();
      return material_datepicker__proto__date_range$46pb.DatepickerDateRange._defaultInstance;
    }
    static $checkItem(v) {
      if (!material_datepicker__proto__date_range$46pb.DatepickerDateRange.is(v)) protobuf$.checkItemFailed(v, 'DatepickerDateRange');
    }
    get dateRange() {
      return this.$_getN(material_datepicker__proto__date_range$46pb.DateRange, 0);
    }
    set dateRange(v) {
      this.setField(1, v);
    }
    hasDateRange() {
      return this.$_has(0);
    }
    clearDateRange() {
      return this.clearField(1);
    }
    get daysAgo() {
      return this.$_get(core.int, 1, 0);
    }
    set daysAgo(v) {
      this.$_setUnsignedInt32(1, v);
    }
    hasDaysAgo() {
      return this.$_has(1);
    }
    clearDaysAgo() {
      return this.clearField(2);
    }
    get weeksAgo() {
      return this.$_get(core.int, 2, 0);
    }
    set weeksAgo(v) {
      this.$_setUnsignedInt32(2, v);
    }
    hasWeeksAgo() {
      return this.$_has(2);
    }
    clearWeeksAgo() {
      return this.clearField(3);
    }
    get monthsAgo() {
      return this.$_get(core.int, 3, 0);
    }
    set monthsAgo(v) {
      this.$_setUnsignedInt32(3, v);
    }
    hasMonthsAgo() {
      return this.$_has(3);
    }
    clearMonthsAgo() {
      return this.clearField(4);
    }
    get yearsAgo() {
      return this.$_get(core.int, 4, 0);
    }
    set yearsAgo(v) {
      this.$_setUnsignedInt32(4, v);
    }
    hasYearsAgo() {
      return this.$_has(4);
    }
    clearYearsAgo() {
      return this.clearField(5);
    }
    get lastNDays() {
      return this.$_get(core.int, 5, 0);
    }
    set lastNDays(v) {
      this.$_setUnsignedInt32(5, v);
    }
    hasLastNDays() {
      return this.$_has(5);
    }
    clearLastNDays() {
      return this.clearField(6);
    }
    get allTimeRange() {
      return this.$_get(core.bool, 6, false);
    }
    set allTimeRange(v) {
      this.$_setBool(6, v);
    }
    hasAllTimeRange() {
      return this.$_has(6);
    }
    clearAllTimeRange() {
      return this.clearField(7);
    }
    get broadcastMonthsAgo() {
      return this.$_get(core.int, 7, 0);
    }
    set broadcastMonthsAgo(v) {
      this.$_setUnsignedInt32(7, v);
    }
    hasBroadcastMonthsAgo() {
      return this.$_has(7);
    }
    clearBroadcastMonthsAgo() {
      return this.clearField(8);
    }
    get lastNDaysToToday() {
      return this.$_get(core.int, 8, 0);
    }
    set lastNDaysToToday(v) {
      this.$_setUnsignedInt32(8, v);
    }
    hasLastNDaysToToday() {
      return this.$_has(8);
    }
    clearLastNDaysToToday() {
      return this.clearField(9);
    }
    get quartersAgo() {
      return this.$_get(core.int, 9, 0);
    }
    set quartersAgo(v) {
      this.$_setUnsignedInt32(9, v);
    }
    hasQuartersAgo() {
      return this.$_has(9);
    }
    clearQuartersAgo() {
      return this.clearField(10);
    }
    get startWeekday() {
      return this.$_get(core.int, 10, 0);
    }
    set startWeekday(v) {
      this.$_setUnsignedInt32(10, v);
    }
    hasStartWeekday() {
      return this.$_has(10);
    }
    clearStartWeekday() {
      return this.clearField(11);
    }
  };
  (material_datepicker__proto__date_range$46pb.DatepickerDateRange.new = function() {
    material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__.new.call(this);
  }).prototype = material_datepicker__proto__date_range$46pb.DatepickerDateRange.prototype;
  (material_datepicker__proto__date_range$46pb.DatepickerDateRange.fromBuffer = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__.fromBuffer.call(this, i, r);
  }).prototype = material_datepicker__proto__date_range$46pb.DatepickerDateRange.prototype;
  (material_datepicker__proto__date_range$46pb.DatepickerDateRange.fromJson = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__.fromJson.call(this, i, r);
  }).prototype = material_datepicker__proto__date_range$46pb.DatepickerDateRange.prototype;
  dart.addTypeTests(material_datepicker__proto__date_range$46pb.DatepickerDateRange);
  dart.setMethodSignature(material_datepicker__proto__date_range$46pb.DatepickerDateRange, () => ({
    __proto__: dart.getMethods(material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__),
    clone: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, []),
    hasDateRange: dart.fnType(core.bool, []),
    clearDateRange: dart.fnType(dart.void, []),
    hasDaysAgo: dart.fnType(core.bool, []),
    clearDaysAgo: dart.fnType(dart.void, []),
    hasWeeksAgo: dart.fnType(core.bool, []),
    clearWeeksAgo: dart.fnType(dart.void, []),
    hasMonthsAgo: dart.fnType(core.bool, []),
    clearMonthsAgo: dart.fnType(dart.void, []),
    hasYearsAgo: dart.fnType(core.bool, []),
    clearYearsAgo: dart.fnType(dart.void, []),
    hasLastNDays: dart.fnType(core.bool, []),
    clearLastNDays: dart.fnType(dart.void, []),
    hasAllTimeRange: dart.fnType(core.bool, []),
    clearAllTimeRange: dart.fnType(dart.void, []),
    hasBroadcastMonthsAgo: dart.fnType(core.bool, []),
    clearBroadcastMonthsAgo: dart.fnType(dart.void, []),
    hasLastNDaysToToday: dart.fnType(core.bool, []),
    clearLastNDaysToToday: dart.fnType(dart.void, []),
    hasQuartersAgo: dart.fnType(core.bool, []),
    clearQuartersAgo: dart.fnType(dart.void, []),
    hasStartWeekday: dart.fnType(core.bool, []),
    clearStartWeekday: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(material_datepicker__proto__date_range$46pb.DatepickerDateRange, () => ({
    create: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, []),
    createRepeated: dart.fnType(protobuf$.PbList$(material_datepicker__proto__date_range$46pb.DatepickerDateRange), []),
    getDefault: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, []),
    $checkItem: dart.fnType(dart.void, [material_datepicker__proto__date_range$46pb.DatepickerDateRange])
  }));
  dart.setGetterSignature(material_datepicker__proto__date_range$46pb.DatepickerDateRange, () => ({
    __proto__: dart.getGetters(material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__),
    info_: dart.fnType(protobuf$.BuilderInfo, []),
    dateRange: dart.fnType(material_datepicker__proto__date_range$46pb.DateRange, []),
    daysAgo: dart.fnType(core.int, []),
    weeksAgo: dart.fnType(core.int, []),
    monthsAgo: dart.fnType(core.int, []),
    yearsAgo: dart.fnType(core.int, []),
    lastNDays: dart.fnType(core.int, []),
    allTimeRange: dart.fnType(core.bool, []),
    broadcastMonthsAgo: dart.fnType(core.int, []),
    lastNDaysToToday: dart.fnType(core.int, []),
    quartersAgo: dart.fnType(core.int, []),
    startWeekday: dart.fnType(core.int, [])
  }));
  dart.setSetterSignature(material_datepicker__proto__date_range$46pb.DatepickerDateRange, () => ({
    __proto__: dart.getSetters(material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__),
    dateRange: dart.fnType(dart.void, [material_datepicker__proto__date_range$46pb.DateRange]),
    daysAgo: dart.fnType(dart.void, [core.int]),
    weeksAgo: dart.fnType(dart.void, [core.int]),
    monthsAgo: dart.fnType(dart.void, [core.int]),
    yearsAgo: dart.fnType(dart.void, [core.int]),
    lastNDays: dart.fnType(dart.void, [core.int]),
    allTimeRange: dart.fnType(dart.void, [core.bool]),
    broadcastMonthsAgo: dart.fnType(dart.void, [core.int]),
    lastNDaysToToday: dart.fnType(dart.void, [core.int]),
    quartersAgo: dart.fnType(dart.void, [core.int]),
    startWeekday: dart.fnType(dart.void, [core.int])
  }));
  dart.defineLazy(material_datepicker__proto__date_range$46pb.DatepickerDateRange, {
    /*material_datepicker__proto__date_range$46pb.DatepickerDateRange._i*/get _i() {
      let _ = new protobuf$.BuilderInfo.new('DatepickerDateRange');
      _.a(material_datepicker__proto__date_range$46pb.DateRange, 1, 'dateRange', protobuf$.PbFieldType.OM, dart.tagStatic(material_datepicker__proto__date_range$46pb.DateRange, 'getDefault'), dart.tagStatic(material_datepicker__proto__date_range$46pb.DateRange, 'create'));
      _.a(core.int, 2, 'daysAgo', protobuf$.PbFieldType.O3);
      _.a(core.int, 3, 'weeksAgo', protobuf$.PbFieldType.O3);
      _.a(core.int, 4, 'monthsAgo', protobuf$.PbFieldType.O3);
      _.a(core.int, 5, 'yearsAgo', protobuf$.PbFieldType.O3);
      _.a(core.int, 6, 'lastNDays', protobuf$.PbFieldType.O3);
      _.aOB(7, 'allTimeRange');
      _.a(core.int, 8, 'broadcastMonthsAgo', protobuf$.PbFieldType.O3);
      _.a(core.int, 9, 'lastNDaysToToday', protobuf$.PbFieldType.O3);
      _.a(core.int, 10, 'quartersAgo', protobuf$.PbFieldType.O3);
      _.a(core.int, 11, 'startWeekday', protobuf$.PbFieldType.O3);
      _.hasRequiredFields = false;
      return _;
    },
    /*material_datepicker__proto__date_range$46pb.DatepickerDateRange._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  const DatepickerDateRange_ReadonlyMessageMixin$ = class DatepickerDateRange_ReadonlyMessageMixin extends material_datepicker__proto__date_range$46pb.DatepickerDateRange {};
  (DatepickerDateRange_ReadonlyMessageMixin$.new = function() {
    DatepickerDateRange_ReadonlyMessageMixin$.__proto__.new.call(this);
  }).prototype = DatepickerDateRange_ReadonlyMessageMixin$.prototype;
  (DatepickerDateRange_ReadonlyMessageMixin$.fromBuffer = function(i, r) {
    DatepickerDateRange_ReadonlyMessageMixin$.__proto__.fromBuffer.call(this, i, r);
  }).prototype = DatepickerDateRange_ReadonlyMessageMixin$.prototype;
  (DatepickerDateRange_ReadonlyMessageMixin$.fromJson = function(i, r) {
    DatepickerDateRange_ReadonlyMessageMixin$.__proto__.fromJson.call(this, i, r);
  }).prototype = DatepickerDateRange_ReadonlyMessageMixin$.prototype;
  dart.mixinMembers(DatepickerDateRange_ReadonlyMessageMixin$, protobuf$.ReadonlyMessageMixin);
  material_datepicker__proto__date_range$46pb._ReadonlyDatepickerDateRange = class _ReadonlyDatepickerDateRange extends DatepickerDateRange_ReadonlyMessageMixin$ {};
  (material_datepicker__proto__date_range$46pb._ReadonlyDatepickerDateRange.new = function() {
    material_datepicker__proto__date_range$46pb._ReadonlyDatepickerDateRange.__proto__.new.call(this);
  }).prototype = material_datepicker__proto__date_range$46pb._ReadonlyDatepickerDateRange.prototype;
  dart.addTypeTests(material_datepicker__proto__date_range$46pb._ReadonlyDatepickerDateRange);
  material_datepicker__proto__date_range$46pb.DateRange = class DateRange extends protobuf$.GeneratedMessage {
    clone() {
      let _ = new material_datepicker__proto__date_range$46pb.DateRange.new();
      _.mergeFromMessage(this);
      return _;
    }
    get info_() {
      return material_datepicker__proto__date_range$46pb.DateRange._i;
    }
    static create() {
      return new material_datepicker__proto__date_range$46pb.DateRange.new();
    }
    static createRepeated() {
      return new (PbListOfDateRange()).new();
    }
    static getDefault() {
      if (material_datepicker__proto__date_range$46pb.DateRange._defaultInstance == null) material_datepicker__proto__date_range$46pb.DateRange._defaultInstance = new material_datepicker__proto__date_range$46pb._ReadonlyDateRange.new();
      return material_datepicker__proto__date_range$46pb.DateRange._defaultInstance;
    }
    static $checkItem(v) {
      if (!material_datepicker__proto__date_range$46pb.DateRange.is(v)) protobuf$.checkItemFailed(v, 'DateRange');
    }
    get start() {
      return this.$_getN(material_datepicker__proto__date$46pb.Date, 0);
    }
    set start(v) {
      this.setField(1, v);
    }
    hasStart() {
      return this.$_has(0);
    }
    clearStart() {
      return this.clearField(1);
    }
    get end() {
      return this.$_getN(material_datepicker__proto__date$46pb.Date, 1);
    }
    set end(v) {
      this.setField(2, v);
    }
    hasEnd() {
      return this.$_has(1);
    }
    clearEnd() {
      return this.clearField(2);
    }
  };
  (material_datepicker__proto__date_range$46pb.DateRange.new = function() {
    material_datepicker__proto__date_range$46pb.DateRange.__proto__.new.call(this);
  }).prototype = material_datepicker__proto__date_range$46pb.DateRange.prototype;
  (material_datepicker__proto__date_range$46pb.DateRange.fromBuffer = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date_range$46pb.DateRange.__proto__.fromBuffer.call(this, i, r);
  }).prototype = material_datepicker__proto__date_range$46pb.DateRange.prototype;
  (material_datepicker__proto__date_range$46pb.DateRange.fromJson = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date_range$46pb.DateRange.__proto__.fromJson.call(this, i, r);
  }).prototype = material_datepicker__proto__date_range$46pb.DateRange.prototype;
  dart.addTypeTests(material_datepicker__proto__date_range$46pb.DateRange);
  dart.setMethodSignature(material_datepicker__proto__date_range$46pb.DateRange, () => ({
    __proto__: dart.getMethods(material_datepicker__proto__date_range$46pb.DateRange.__proto__),
    clone: dart.fnType(material_datepicker__proto__date_range$46pb.DateRange, []),
    hasStart: dart.fnType(core.bool, []),
    clearStart: dart.fnType(dart.void, []),
    hasEnd: dart.fnType(core.bool, []),
    clearEnd: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(material_datepicker__proto__date_range$46pb.DateRange, () => ({
    create: dart.fnType(material_datepicker__proto__date_range$46pb.DateRange, []),
    createRepeated: dart.fnType(protobuf$.PbList$(material_datepicker__proto__date_range$46pb.DateRange), []),
    getDefault: dart.fnType(material_datepicker__proto__date_range$46pb.DateRange, []),
    $checkItem: dart.fnType(dart.void, [material_datepicker__proto__date_range$46pb.DateRange])
  }));
  dart.setGetterSignature(material_datepicker__proto__date_range$46pb.DateRange, () => ({
    __proto__: dart.getGetters(material_datepicker__proto__date_range$46pb.DateRange.__proto__),
    info_: dart.fnType(protobuf$.BuilderInfo, []),
    start: dart.fnType(material_datepicker__proto__date$46pb.Date, []),
    end: dart.fnType(material_datepicker__proto__date$46pb.Date, [])
  }));
  dart.setSetterSignature(material_datepicker__proto__date_range$46pb.DateRange, () => ({
    __proto__: dart.getSetters(material_datepicker__proto__date_range$46pb.DateRange.__proto__),
    start: dart.fnType(dart.void, [material_datepicker__proto__date$46pb.Date]),
    end: dart.fnType(dart.void, [material_datepicker__proto__date$46pb.Date])
  }));
  dart.defineLazy(material_datepicker__proto__date_range$46pb.DateRange, {
    /*material_datepicker__proto__date_range$46pb.DateRange._i*/get _i() {
      let _ = new protobuf$.BuilderInfo.new('DateRange');
      _.a(material_datepicker__proto__date$46pb.Date, 1, 'start', protobuf$.PbFieldType.OM, dart.tagStatic(material_datepicker__proto__date$46pb.Date, 'getDefault'), dart.tagStatic(material_datepicker__proto__date$46pb.Date, 'create'));
      _.a(material_datepicker__proto__date$46pb.Date, 2, 'end', protobuf$.PbFieldType.OM, dart.tagStatic(material_datepicker__proto__date$46pb.Date, 'getDefault'), dart.tagStatic(material_datepicker__proto__date$46pb.Date, 'create'));
      _.hasRequiredFields = false;
      return _;
    },
    /*material_datepicker__proto__date_range$46pb.DateRange._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  const DateRange_ReadonlyMessageMixin$ = class DateRange_ReadonlyMessageMixin extends material_datepicker__proto__date_range$46pb.DateRange {};
  (DateRange_ReadonlyMessageMixin$.new = function() {
    DateRange_ReadonlyMessageMixin$.__proto__.new.call(this);
  }).prototype = DateRange_ReadonlyMessageMixin$.prototype;
  (DateRange_ReadonlyMessageMixin$.fromBuffer = function(i, r) {
    DateRange_ReadonlyMessageMixin$.__proto__.fromBuffer.call(this, i, r);
  }).prototype = DateRange_ReadonlyMessageMixin$.prototype;
  (DateRange_ReadonlyMessageMixin$.fromJson = function(i, r) {
    DateRange_ReadonlyMessageMixin$.__proto__.fromJson.call(this, i, r);
  }).prototype = DateRange_ReadonlyMessageMixin$.prototype;
  dart.mixinMembers(DateRange_ReadonlyMessageMixin$, protobuf$.ReadonlyMessageMixin);
  material_datepicker__proto__date_range$46pb._ReadonlyDateRange = class _ReadonlyDateRange extends DateRange_ReadonlyMessageMixin$ {};
  (material_datepicker__proto__date_range$46pb._ReadonlyDateRange.new = function() {
    material_datepicker__proto__date_range$46pb._ReadonlyDateRange.__proto__.new.call(this);
  }).prototype = material_datepicker__proto__date_range$46pb._ReadonlyDateRange.prototype;
  dart.addTypeTests(material_datepicker__proto__date_range$46pb._ReadonlyDateRange);
  dart.trackLibraries("packages/angular_components/material_datepicker/proto/date_range.pb.ddc", {
    "package:angular_components/material_datepicker/proto/date_range.pb.dart": material_datepicker__proto__date_range$46pb
  }, '{"version":3,"sourceRoot":"","sources":["date_range.pb.dart"],"names":[],"mappings":"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","file":"date_range.pb.ddc.js"}');
  // Exports:
  return {
    material_datepicker__proto__date_range$46pb: material_datepicker__proto__date_range$46pb
  };
});

//# sourceMappingURL=date_range.pb.ddc.js.map
