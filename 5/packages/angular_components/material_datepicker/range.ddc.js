define(['dart_sdk', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/proto/date_range.pb', 'packages/angular_components/material_datepicker/proto/date.pb', 'packages/quiver/time', 'packages/intl/intl'], function(dart_sdk, date, date_range, date$, time, intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__date__date = date.model__date__date;
  const material_datepicker__proto__date_range$46pb = date_range.material_datepicker__proto__date_range$46pb;
  const material_datepicker__proto__date$46pb = date$.material_datepicker__proto__date$46pb;
  const time$ = time.time;
  const intl$ = intl.intl;
  const _root = Object.create(null);
  const material_datepicker__range = Object.create(_root);
  const $hashCode = dartx.hashCode;
  const $modulo = dartx['%'];
  const $truncate = dartx.truncate;
  let VoidToDatepickerDateRange = () => (VoidToDatepickerDateRange = dart.constFn(dart.fnType(material_datepicker__range.DatepickerDateRange, [])))();
  let DatepickerDateRangeAndFnToDatepickerDateRange = () => (DatepickerDateRangeAndFnToDatepickerDateRange = dart.constFn(dart.fnType(material_datepicker__range.DatepickerDateRange, [material_datepicker__range.DatepickerDateRange, VoidToDatepickerDateRange()])))();
  let DatepickerDateRangeToDatepickerDateRange = () => (DatepickerDateRangeToDatepickerDateRange = dart.constFn(dart.fnType(material_datepicker__range.DatepickerDateRange, [material_datepicker__range.DatepickerDateRange])))();
  let DatepickerDateRange__ToDatepickerDateRange = () => (DatepickerDateRange__ToDatepickerDateRange = dart.constFn(dart.fnType(material_datepicker__range.DatepickerDateRange, [material_datepicker__range.DatepickerDateRange], {min: model__date__date.Date, max: model__date__date.Date})))();
  let DatepickerDateRangeAnddynamicTobool = () => (DatepickerDateRangeAnddynamicTobool = dart.constFn(dart.fnType(core.bool, [material_datepicker__range.DatepickerDateRange, dart.dynamic])))();
  let DatepickerDateRangeToint = () => (DatepickerDateRangeToint = dart.constFn(dart.fnType(core.int, [material_datepicker__range.DatepickerDateRange])))();
  let DatepickerDateRangeToString = () => (DatepickerDateRangeToString = dart.constFn(dart.fnType(core.String, [material_datepicker__range.DatepickerDateRange])))();
  let DatepickerDateRangeToDateRange = () => (DatepickerDateRangeToDateRange = dart.constFn(dart.fnType(model__date__date.DateRange, [material_datepicker__range.DatepickerDateRange])))();
  let DatepickerDateRangeToDatepickerDateRange$ = () => (DatepickerDateRangeToDatepickerDateRange$ = dart.constFn(dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [material_datepicker__range.DatepickerDateRange])))();
  let DateAndDateTodynamic = () => (DateAndDateTodynamic = dart.constFn(dart.fnType(dart.dynamic, [model__date__date.Date, model__date__date.Date])))();
  let DateToDate = () => (DateToDate = dart.constFn(dart.fnType(material_datepicker__proto__date$46pb.Date, [model__date__date.Date])))();
  let DateToDate$ = () => (DateToDate$ = dart.constFn(dart.fnType(model__date__date.Date, [material_datepicker__proto__date$46pb.Date])))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  let ClockToDatepickerDateRange = () => (ClockToDatepickerDateRange = dart.constFn(dart.fnType(material_datepicker__range.DatepickerDateRange, [time$.Clock])))();
  let JSArrayOfDatepickerDateRange = () => (JSArrayOfDatepickerDateRange = dart.constFn(_interceptors.JSArray$(material_datepicker__range.DatepickerDateRange)))();
  let ListOfDatepickerDateRange = () => (ListOfDatepickerDateRange = dart.constFn(core.List$(material_datepicker__range.DatepickerDateRange)))();
  let ClockToListOfDatepickerDateRange = () => (ClockToListOfDatepickerDateRange = dart.constFn(dart.fnType(ListOfDatepickerDateRange(), [time$.Clock])))();
  material_datepicker__range._ifValidRange = function(r, fn) {
    if (r == null || r.start == null || r.end == null) {
      return null;
    }
    return fn();
  };
  dart.lazyFn(material_datepicker__range._ifValidRange, () => DatepickerDateRangeAndFnToDatepickerDateRange());
  material_datepicker__range._genericNext = function(r) {
    return material_datepicker__range._ifValidRange(r, dart.fn(() => material_datepicker__range.DatepickerDateRange.custom(r.end.add({days: 1}), r.end.add({days: model__date__date.daysSpanned(r.start, r.end)})), VoidToDatepickerDateRange()));
  };
  dart.lazyFn(material_datepicker__range._genericNext, () => DatepickerDateRangeToDatepickerDateRange());
  material_datepicker__range._genericPrev = function(r) {
    return material_datepicker__range._ifValidRange(r, dart.fn(() => material_datepicker__range.DatepickerDateRange.custom(r.start.add({days: -dart.notNull(model__date__date.daysSpanned(r.start, r.end))}), r.start.add({days: -1})), VoidToDatepickerDateRange()));
  };
  dart.lazyFn(material_datepicker__range._genericPrev, () => DatepickerDateRangeToDatepickerDateRange());
  material_datepicker__range.RangeFn = dart.typedef('RangeFn', () => dart.fnType(material_datepicker__range.DatepickerDateRange, [material_datepicker__range.DatepickerDateRange]));
  material_datepicker__range.DatepickerDateRange = class DatepickerDateRange extends core.Object {
    static new(title, start, end, opts) {
      let next = opts && 'next' in opts ? opts.next : material_datepicker__range._genericNext;
      let prev = opts && 'prev' in opts ? opts.prev : material_datepicker__range._genericPrev;
      let isPredefined = opts && 'isPredefined' in opts ? opts.isPredefined : false;
      let isAllTime = opts && 'isAllTime' in opts ? opts.isAllTime : false;
      return new material_datepicker__range._BasicDateRange.new(title, start, end, next, prev, isPredefined, isAllTime);
    }
    static custom(start, end) {
      return material_datepicker__range.DatepickerDateRange.new(material_datepicker__range._customDateRangeMsg, start, end);
    }
    static fromProtoBuf(clock, pb) {
      if (dart.test(pb.hasAllTimeRange())) {
        return material_datepicker__range.allTime;
      } else if (dart.test(pb.hasDaysAgo())) {
        return new material_datepicker__range.SingleDayRange.daysAgo(clock, pb.daysAgo);
      } else if (dart.test(pb.hasLastNDays())) {
        return new material_datepicker__range.LastNDaysRange.beforeToday(clock, pb.lastNDays);
      } else if (dart.test(pb.hasLastNDaysToToday())) {
        return new material_datepicker__range.LastNDaysToTodayRange.beforeToday(clock, pb.lastNDaysToToday);
      } else if (dart.test(pb.hasWeeksAgo())) {
        if (dart.test(pb.hasStartWeekday())) {
          return new material_datepicker__range.WeekRange.weeksAgo(clock, pb.weeksAgo, {startWeekday: pb.startWeekday});
        } else {
          return new material_datepicker__range.WeekRange.weeksAgo(clock, pb.weeksAgo);
        }
      } else if (dart.test(pb.hasMonthsAgo())) {
        return new material_datepicker__range.MonthRange.monthsAgo(clock, pb.monthsAgo);
      } else if (dart.test(pb.hasBroadcastMonthsAgo())) {
        return material_datepicker__range.BroadcastMonthRange.monthsAgo(clock, pb.broadcastMonthsAgo);
      } else if (dart.test(pb.hasYearsAgo())) {
        return new material_datepicker__range.YearRange.yearsAgo(clock, pb.yearsAgo);
      }
      return material_datepicker__range.DatepickerDateRange.custom(material_datepicker__range._convertToDate(pb.dateRange.start), material_datepicker__range._convertToDate(pb.dateRange.end));
    }
  };
  (material_datepicker__range.DatepickerDateRange[dart.mixinNew] = function() {
  }).prototype = material_datepicker__range.DatepickerDateRange.prototype;
  dart.addTypeTests(material_datepicker__range.DatepickerDateRange);
  material_datepicker__range.DatepickerDateRange[dart.implements] = () => [model__date__date.DateRange];
  material_datepicker__range._clamp = function(range, opts) {
    let min = opts && 'min' in opts ? opts.min : null;
    let max = opts && 'max' in opts ? opts.max : null;
    if (min != null && max != null) if (!dart.test(min['<='](max))) dart.assertFailed();
    if ((min == null || range.end == null || dart.test(min['<='](range.end))) && (max == null || range.start == null || dart.test(max['>='](range.start)))) {
      return new material_datepicker__range._ClampedDateRange.new(range, {min: min, max: max});
    }
    return null;
  };
  dart.fn(material_datepicker__range._clamp, DatepickerDateRange__ToDatepickerDateRange());
  material_datepicker__range.rangeEqual = function(range, o) {
    return range == null && o == null || material_datepicker__range.DatepickerDateRange.is(range) && material_datepicker__range.DatepickerDateRange.is(o) && range.title == o.title && dart.equals(range.start, o.start) && dart.equals(range.end, o.end);
  };
  dart.fn(material_datepicker__range.rangeEqual, DatepickerDateRangeAnddynamicTobool());
  material_datepicker__range.rangeHash = function(range) {
    return (dart.hashCode(range.title) ^ dart.notNull(dart.hashCode(range.start)) ^ dart.notNull(dart.hashCode(range.end))) >>> 0;
  };
  dart.fn(material_datepicker__range.rangeHash, DatepickerDateRangeToint());
  material_datepicker__range._rangeString = function(range) {
    return dart.str`${range.title} (${range.start}) (${range.end})`;
  };
  dart.fn(material_datepicker__range._rangeString, DatepickerDateRangeToString());
  material_datepicker__range._plainRange = function(range) {
    return new model__date__date.DateRange.new(range.start, range.end);
  };
  dart.fn(material_datepicker__range._plainRange, DatepickerDateRangeToDateRange());
  material_datepicker__range._makeProtoBuf = function(range) {
    return dart.test(range.isAllTime) ? (() => {
      let _ = new material_datepicker__proto__date_range$46pb.DatepickerDateRange.new();
      _.allTimeRange = true;
      return _;
    })() : (() => {
      let _ = new material_datepicker__proto__date_range$46pb.DatepickerDateRange.new();
      _.dateRange = material_datepicker__proto__date_range$46pb.DateRange._check(material_datepicker__range._makeDateRangeProto(range.start, range.end));
      return _;
    })();
  };
  dart.fn(material_datepicker__range._makeProtoBuf, DatepickerDateRangeToDatepickerDateRange$());
  material_datepicker__range._makeDateRangeProto = function(start, end) {
    let _ = new material_datepicker__proto__date_range$46pb.DateRange.new();
    _.start = material_datepicker__range._makeDateProto(start);
    _.end = material_datepicker__range._makeDateProto(end);
    return _;
  };
  dart.fn(material_datepicker__range._makeDateRangeProto, DateAndDateTodynamic());
  material_datepicker__range._makeDateProto = function(date) {
    let _ = new material_datepicker__proto__date$46pb.Date.new();
    _.year = date.year;
    _.month = date.month;
    _.day = date.day;
    return _;
  };
  dart.fn(material_datepicker__range._makeDateProto, DateToDate());
  material_datepicker__range._convertToDate = function(date) {
    return new model__date__date.Date.new(date.year, date.month, date.day);
  };
  dart.fn(material_datepicker__range._convertToDate, DateToDate$());
  const _delegate = Symbol('_delegate');
  const _min = Symbol('_min');
  const _max = Symbol('_max');
  material_datepicker__range._ClampedDateRange = class _ClampedDateRange extends core.Object {
    get title() {
      return this[_delegate].title;
    }
    get isPredefined() {
      return this[_delegate].isPredefined;
    }
    get isAllTime() {
      return this[_delegate].isAllTime;
    }
    get start() {
      let date = this[_delegate].start;
      return date == null || this[_min] != null && dart.test(this[_min]['>'](date)) ? this[_min] : date;
    }
    get end() {
      let date = this[_delegate].end;
      return date == null || this[_max] != null && dart.test(this[_max]['<'](date)) ? this[_max] : date;
    }
    get next() {
      if (this[_max] != null && this[_delegate].end != null && dart.test(this[_delegate].end['>'](this[_max]))) {
        return null;
      }
      let t = this[_delegate].next;
      return t == null ? null : t.clamp({min: this[_min], max: this[_max]});
    }
    get prev() {
      if (this[_min] != null && this[_delegate].start != null && dart.test(this[_delegate].start['<'](this[_min]))) {
        return null;
      }
      let t = this[_delegate].prev;
      return t == null ? null : t.clamp({min: this[_min], max: this[_max]});
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this[_delegate];
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = this[_delegate].toProtoBuf();
      _.dateRange = material_datepicker__proto__date_range$46pb.DateRange._check(material_datepicker__range._makeDateRangeProto(this.start, this.end));
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return dart.test(material_datepicker__range.rangeEqual(this, o)) && material_datepicker__range._ClampedDateRange.is(o) && dart.equals(this[_min], o[_min]) && dart.equals(this[_max], o[_max]);
    }
    get hashCode() {
      return (dart.notNull(material_datepicker__range.rangeHash(this)) ^ dart.notNull(dart.hashCode(this[_min])) ^ dart.notNull(dart.hashCode(this[_max]))) >>> 0;
    }
    toString() {
      return dart.str`${material_datepicker__range._rangeString(this)} (clamped ${this[_min]} - ${this[_max]})`;
    }
  };
  (material_datepicker__range._ClampedDateRange.new = function(delegate, opts) {
    let min = opts && 'min' in opts ? opts.min : null;
    let max = opts && 'max' in opts ? opts.max : null;
    this[_delegate] = delegate;
    this[_min] = min;
    this[_max] = max;
  }).prototype = material_datepicker__range._ClampedDateRange.prototype;
  dart.addTypeTests(material_datepicker__range._ClampedDateRange);
  material_datepicker__range._ClampedDateRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range._ClampedDateRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range._ClampedDateRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setGetterSignature(material_datepicker__range._ClampedDateRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range._ClampedDateRange.__proto__),
    title: dart.fnType(core.String, []),
    isPredefined: dart.fnType(core.bool, []),
    isAllTime: dart.fnType(core.bool, []),
    start: dart.fnType(model__date__date.Date, []),
    end: dart.fnType(model__date__date.Date, []),
    next: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    prev: dart.fnType(material_datepicker__range.DatepickerDateRange, [])
  }));
  dart.setFieldSignature(material_datepicker__range._ClampedDateRange, () => ({
    __proto__: dart.getFields(material_datepicker__range._ClampedDateRange.__proto__),
    [_min]: dart.finalFieldType(model__date__date.Date),
    [_max]: dart.finalFieldType(model__date__date.Date),
    [_delegate]: dart.finalFieldType(material_datepicker__range.DatepickerDateRange)
  }));
  dart.defineExtensionMethods(material_datepicker__range._ClampedDateRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range._ClampedDateRange, ['hashCode']);
  const _next = Symbol('_next');
  const _prev = Symbol('_prev');
  material_datepicker__range._BasicDateRange = class _BasicDateRange extends core.Object {
    get next() {
      return this[_next](this);
    }
    get prev() {
      return this[_prev](this);
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      return material_datepicker__range._makeProtoBuf(this);
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
  };
  (material_datepicker__range._BasicDateRange.new = function(title, start, end, next, prev, isPredefined, isAllTime) {
    this.title = title;
    this.start = start;
    this.end = end;
    this[_next] = next;
    this[_prev] = prev;
    this.isPredefined = isPredefined;
    this.isAllTime = isAllTime;
  }).prototype = material_datepicker__range._BasicDateRange.prototype;
  dart.addTypeTests(material_datepicker__range._BasicDateRange);
  material_datepicker__range._BasicDateRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range._BasicDateRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range._BasicDateRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setGetterSignature(material_datepicker__range._BasicDateRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range._BasicDateRange.__proto__),
    next: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    prev: dart.fnType(material_datepicker__range.DatepickerDateRange, [])
  }));
  dart.setFieldSignature(material_datepicker__range._BasicDateRange, () => ({
    __proto__: dart.getFields(material_datepicker__range._BasicDateRange.__proto__),
    title: dart.finalFieldType(core.String),
    start: dart.finalFieldType(model__date__date.Date),
    end: dart.finalFieldType(model__date__date.Date),
    isPredefined: dart.finalFieldType(core.bool),
    isAllTime: dart.finalFieldType(core.bool),
    [_next]: dart.finalFieldType(DatepickerDateRangeToDatepickerDateRange()),
    [_prev]: dart.finalFieldType(DatepickerDateRangeToDatepickerDateRange())
  }));
  dart.defineExtensionMethods(material_datepicker__range._BasicDateRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range._BasicDateRange, ['hashCode']);
  material_datepicker__range.RangeTitle = dart.typedef('RangeTitle', () => dart.fnType(core.String, [core.int]));
  const _date = Symbol('_date');
  const _ago = Symbol('_ago');
  const _titleFunction = Symbol('_titleFunction');
  let const$;
  let const$0;
  material_datepicker__range.SingleDayRange = class SingleDayRange extends core.Object {
    get title() {
      return this[_titleFunction](this[_ago]);
    }
    get start() {
      return this[_date];
    }
    get end() {
      return this[_date];
    }
    get next() {
      return new material_datepicker__range.SingleDayRange.new(this[_date].add({days: 1}), dart.notNull(this[_ago]) - 1, this[_titleFunction]);
    }
    get prev() {
      return new material_datepicker__range.SingleDayRange.new(this[_date].add({days: -1}), dart.notNull(this[_ago]) + 1, this[_titleFunction]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.daysAgo = this[_ago];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _defaultTitle(daysAgo) {
      return core.String._check(dart.notNull(daysAgo) > 0 ? material_datepicker__range.SingleDayRange._addDaysMsg(daysAgo) : material_datepicker__range.SingleDayRange._daysFromNowMsg(-dart.notNull(daysAgo)));
    }
    static _addDaysMsg(daysAgo) {
      return intl$.Intl.plural(core.int._check(daysAgo), {zero: 'Today', one: 'Yesterday', other: dart.str`${daysAgo} days ago`, name: '_addDaysMsg', args: [daysAgo], desc: 'A date range containing only one day a certain number ' + 'of days in the past.', examples: const$ || (const$ = dart.constMap(core.String, dart.dynamic, ['daysAgo', 2]))});
    }
    static _daysFromNowMsg(daysFromNow) {
      return intl$.Intl.plural(core.int._check(daysFromNow), {zero: 'Today', one: 'Tomorrow', other: dart.str`${daysFromNow} days from now`, name: '_daysFromNowMsg', args: [daysFromNow], desc: 'A date range containing only one day a certain number ' + 'of days in the future.', examples: const$0 || (const$0 = dart.constMap(core.String, dart.dynamic, ['daysFromNow', 2]))});
    }
  };
  (material_datepicker__range.SingleDayRange.new = function(date, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.tagStatic(material_datepicker__range.SingleDayRange, '_defaultTitle');
    this[_date] = date;
    this[_ago] = ago;
    this[_titleFunction] = titleFunction;
  }).prototype = material_datepicker__range.SingleDayRange.prototype;
  (material_datepicker__range.SingleDayRange.daysAgo = function(clock, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.tagStatic(material_datepicker__range.SingleDayRange, '_defaultTitle');
    material_datepicker__range.SingleDayRange.new.call(this, model__date__date.Date.today(time$.Clock._check(clock)).add({days: core.int._check(dart.dsend(ago, '_negate'))}), core.int._check(ago), titleFunction);
  }).prototype = material_datepicker__range.SingleDayRange.prototype;
  dart.addTypeTests(material_datepicker__range.SingleDayRange);
  material_datepicker__range.SingleDayRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.SingleDayRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.SingleDayRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setStaticMethodSignature(material_datepicker__range.SingleDayRange, () => ({
    _defaultTitle: dart.fnType(core.String, [core.int]),
    _addDaysMsg: dart.fnType(dart.dynamic, [dart.dynamic]),
    _daysFromNowMsg: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__range.SingleDayRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.SingleDayRange.__proto__),
    title: dart.fnType(core.String, []),
    start: dart.fnType(model__date__date.Date, []),
    end: dart.fnType(model__date__date.Date, []),
    next: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    prev: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    isPredefined: dart.fnType(core.bool, []),
    isAllTime: dart.fnType(core.bool, []),
    ago: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(material_datepicker__range.SingleDayRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.SingleDayRange.__proto__),
    [_date]: dart.finalFieldType(model__date__date.Date),
    [_ago]: dart.finalFieldType(core.int),
    [_titleFunction]: dart.finalFieldType(intToString())
  }));
  dart.defineExtensionMethods(material_datepicker__range.SingleDayRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.SingleDayRange, ['hashCode']);
  const _start = Symbol('_start');
  const _lengthInDays = Symbol('_lengthInDays');
  let const$1;
  material_datepicker__range.LastNDaysRange = class LastNDaysRange extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get start() {
      return this[_start];
    }
    get end() {
      return this[_start].add({days: dart.notNull(this[_lengthInDays]) - 1});
    }
    get next() {
      return material_datepicker__range._genericNext(this);
    }
    get prev() {
      return material_datepicker__range._genericPrev(this);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get lengthInDays() {
      return this[_lengthInDays];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.lastNDays = this[_lengthInDays];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _lastNDaysMsg(lengthInDays) {
      return intl$.Intl.plural(core.int._check(lengthInDays), {one: 'Yesterday', other: dart.str`Last ${lengthInDays} days`, name: '_lastNDaysMsg', args: [lengthInDays], desc: 'A date range containing the last "lengthInDays" days, ' + 'not including today.', examples: const$1 || (const$1 = dart.constMap(core.String, dart.dynamic, ['lengthInDays', 7]))});
    }
  };
  (material_datepicker__range.LastNDaysRange.new = function(start, lengthInDays, title) {
    if (title === void 0) title = null;
    this[_start] = start;
    this[title$] = core.String._check((() => {
      let l = title;
      return l != null ? l : material_datepicker__range.LastNDaysRange._lastNDaysMsg(lengthInDays);
    })());
    this[_lengthInDays] = lengthInDays;
  }).prototype = material_datepicker__range.LastNDaysRange.prototype;
  (material_datepicker__range.LastNDaysRange.beforeToday = function(clock, lengthInDays, title) {
    if (title === void 0) title = null;
    material_datepicker__range.LastNDaysRange.new.call(this, model__date__date.Date.today(time$.Clock._check(clock)).add({days: core.int._check(dart.dsend(lengthInDays, '_negate'))}), core.int._check(lengthInDays), title);
  }).prototype = material_datepicker__range.LastNDaysRange.prototype;
  dart.addTypeTests(material_datepicker__range.LastNDaysRange);
  const title$ = Symbol("LastNDaysRange.title");
  material_datepicker__range.LastNDaysRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.LastNDaysRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.LastNDaysRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setStaticMethodSignature(material_datepicker__range.LastNDaysRange, () => ({_lastNDaysMsg: dart.fnType(dart.dynamic, [dart.dynamic])}));
  dart.setGetterSignature(material_datepicker__range.LastNDaysRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.LastNDaysRange.__proto__),
    start: dart.fnType(model__date__date.Date, []),
    end: dart.fnType(model__date__date.Date, []),
    next: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    prev: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    isPredefined: dart.fnType(core.bool, []),
    isAllTime: dart.fnType(core.bool, []),
    lengthInDays: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(material_datepicker__range.LastNDaysRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.LastNDaysRange.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    [_lengthInDays]: dart.finalFieldType(core.int),
    title: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(material_datepicker__range.LastNDaysRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.LastNDaysRange, ['hashCode']);
  let const$2;
  material_datepicker__range.LastNDaysToTodayRange = class LastNDaysToTodayRange extends core.Object {
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get start() {
      return this[_start];
    }
    get end() {
      return this[_start].add({days: dart.notNull(this[_lengthInDays]) - 1});
    }
    get next() {
      return material_datepicker__range._genericNext(this);
    }
    get prev() {
      return material_datepicker__range._genericPrev(this);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get lengthInDays() {
      return this[_lengthInDays];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.lastNDaysToToday = this[_lengthInDays];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _lastNDaysToTodayMsg(lengthInDays) {
      return intl$.Intl.plural(core.int._check(lengthInDays), {one: 'Today', other: dart.str`${lengthInDays} days to today`, name: '_lastNDaysToTodayMsg', args: [lengthInDays], desc: 'A date range containing the last "lengthInDays" days, ' + 'ending today.', examples: const$2 || (const$2 = dart.constMap(core.String, dart.dynamic, ['lengthInDays', 7]))});
    }
  };
  (material_datepicker__range.LastNDaysToTodayRange.new = function(start, lengthInDays, title) {
    if (title === void 0) title = null;
    this[_start] = start;
    this[title$0] = core.String._check((() => {
      let l = title;
      return l != null ? l : material_datepicker__range.LastNDaysToTodayRange._lastNDaysToTodayMsg(lengthInDays);
    })());
    this[_lengthInDays] = lengthInDays;
  }).prototype = material_datepicker__range.LastNDaysToTodayRange.prototype;
  (material_datepicker__range.LastNDaysToTodayRange.beforeToday = function(clock, lengthInDays, title) {
    if (title === void 0) title = null;
    material_datepicker__range.LastNDaysToTodayRange.new.call(this, model__date__date.Date.today(time$.Clock._check(clock)).add({days: core.int._check(dart.dsend(dart.dsend(lengthInDays, '-', 1), '_negate'))}), core.int._check(lengthInDays), title);
  }).prototype = material_datepicker__range.LastNDaysToTodayRange.prototype;
  dart.addTypeTests(material_datepicker__range.LastNDaysToTodayRange);
  const title$0 = Symbol("LastNDaysToTodayRange.title");
  material_datepicker__range.LastNDaysToTodayRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.LastNDaysToTodayRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.LastNDaysToTodayRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setStaticMethodSignature(material_datepicker__range.LastNDaysToTodayRange, () => ({_lastNDaysToTodayMsg: dart.fnType(dart.dynamic, [dart.dynamic])}));
  dart.setGetterSignature(material_datepicker__range.LastNDaysToTodayRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.LastNDaysToTodayRange.__proto__),
    start: dart.fnType(model__date__date.Date, []),
    end: dart.fnType(model__date__date.Date, []),
    next: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    prev: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    isPredefined: dart.fnType(core.bool, []),
    isAllTime: dart.fnType(core.bool, []),
    lengthInDays: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(material_datepicker__range.LastNDaysToTodayRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.LastNDaysToTodayRange.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    [_lengthInDays]: dart.finalFieldType(core.int),
    title: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(material_datepicker__range.LastNDaysToTodayRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.LastNDaysToTodayRange, ['hashCode']);
  const _startWeekday = Symbol('_startWeekday');
  let const$3;
  let const$4;
  material_datepicker__range.WeekRange = class WeekRange extends core.Object {
    static _weekStart(date, startWeekday) {
      return date.add({days: -(dart.notNull(date.weekday) - dart.notNull(startWeekday))[$modulo](7)});
    }
    get title() {
      return this[_titleFunction](this[_ago]);
    }
    get start() {
      return this[_start];
    }
    get end() {
      return this[_start].add({days: 6});
    }
    get next() {
      return new material_datepicker__range.WeekRange.new(this[_start].add({days: 7}), dart.notNull(this[_ago]) - 1, this[_titleFunction]);
    }
    get prev() {
      return new material_datepicker__range.WeekRange.new(this[_start].add({days: -7}), dart.notNull(this[_ago]) + 1, this[_titleFunction]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let result = material_datepicker__range._makeProtoBuf(this);
      result.weeksAgo = this[_ago];
      if (this[_startWeekday] != null) {
        result.startWeekday = this[_startWeekday];
      }
      return result;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _defaultTitle(weeksAgo) {
      return core.String._check(dart.notNull(weeksAgo) > 0 ? material_datepicker__range.WeekRange._weeksAgoMsg(weeksAgo) : material_datepicker__range.WeekRange._weeksFromNowMsg(-dart.notNull(weeksAgo)));
    }
    static _weeksAgoMsg(weeksAgo) {
      return intl$.Intl.plural(core.int._check(weeksAgo), {zero: 'This week', one: 'Last week', other: dart.str`${weeksAgo} weeks ago`, name: '_weeksAgoMsg', args: [weeksAgo], desc: 'A date range spanning a single week in the past.', examples: const$3 || (const$3 = dart.constMap(core.String, dart.dynamic, ['weeksAgo', 2]))});
    }
    static _weeksFromNowMsg(weeksFromNow) {
      return intl$.Intl.plural(core.int._check(weeksFromNow), {zero: 'This week', one: 'Next week', other: dart.str`${weeksFromNow} weeks from now`, name: '_weeksFromNowMsg', args: [weeksFromNow], desc: 'A date range spanning a single week in the future.', examples: const$4 || (const$4 = dart.constMap(core.String, dart.dynamic, ['weeksFromNow', 2]))});
    }
  };
  (material_datepicker__range.WeekRange.new = function(start, ago, titleFunction, startWeekday) {
    if (titleFunction === void 0) titleFunction = dart.tagStatic(material_datepicker__range.WeekRange, '_defaultTitle');
    if (startWeekday === void 0) startWeekday = null;
    this[_start] = start;
    this[_ago] = ago;
    this[_titleFunction] = titleFunction;
    this[_startWeekday] = startWeekday;
  }).prototype = material_datepicker__range.WeekRange.prototype;
  (material_datepicker__range.WeekRange.weeksAgo = function(clock, ago, opts) {
    let titleFunction = opts && 'titleFunction' in opts ? opts.titleFunction : dart.tagStatic(material_datepicker__range.WeekRange, '_defaultTitle');
    let startWeekday = opts && 'startWeekday' in opts ? opts.startWeekday : null;
    material_datepicker__range.WeekRange.new.call(this, material_datepicker__range.WeekRange._weekStart(model__date__date.Date.today(time$.Clock._check(clock)), (() => {
      let l = startWeekday;
      return l != null ? l : dart.notNull(new intl$.DateFormat.new().dateSymbols.FIRSTDAYOFWEEK) + 1;
    })()).add({days: dart.asInt(-7 * dart.notNull(core.num._check(ago)))}), core.int._check(ago), titleFunction, startWeekday);
  }).prototype = material_datepicker__range.WeekRange.prototype;
  dart.addTypeTests(material_datepicker__range.WeekRange);
  material_datepicker__range.WeekRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.WeekRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.WeekRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setStaticMethodSignature(material_datepicker__range.WeekRange, () => ({
    _weekStart: dart.fnType(model__date__date.Date, [model__date__date.Date, core.int]),
    _defaultTitle: dart.fnType(core.String, [core.int]),
    _weeksAgoMsg: dart.fnType(dart.dynamic, [dart.dynamic]),
    _weeksFromNowMsg: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__range.WeekRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.WeekRange.__proto__),
    title: dart.fnType(core.String, []),
    start: dart.fnType(model__date__date.Date, []),
    end: dart.fnType(model__date__date.Date, []),
    next: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    prev: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    isPredefined: dart.fnType(core.bool, []),
    isAllTime: dart.fnType(core.bool, []),
    ago: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(material_datepicker__range.WeekRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.WeekRange.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    [_ago]: dart.finalFieldType(core.int),
    [_startWeekday]: dart.finalFieldType(core.int),
    [_titleFunction]: dart.finalFieldType(intToString())
  }));
  dart.defineExtensionMethods(material_datepicker__range.WeekRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.WeekRange, ['hashCode']);
  let const$5;
  let const$6;
  material_datepicker__range.MonthRange = class MonthRange extends core.Object {
    get title() {
      return this[_titleFunction](this[_ago]);
    }
    get start() {
      return this[_start];
    }
    get end() {
      return this[_start].add({months: 1, days: -1});
    }
    get next() {
      return new material_datepicker__range.MonthRange.new(this[_start].add({months: 1}), dart.notNull(this[_ago]) - 1, this[_titleFunction]);
    }
    get prev() {
      return new material_datepicker__range.MonthRange.new(this[_start].add({months: -1}), dart.notNull(this[_ago]) + 1, this[_titleFunction]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.monthsAgo = this[_ago];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _defaultTitle(monthsAgo) {
      return core.String._check(dart.notNull(monthsAgo) > 0 ? material_datepicker__range.MonthRange._monthsAgoMsg(monthsAgo) : material_datepicker__range.MonthRange._monthsFromNowMsg(-dart.notNull(monthsAgo)));
    }
    static _monthsAgoMsg(monthsAgo) {
      return intl$.Intl.plural(core.int._check(monthsAgo), {zero: 'This month', one: 'Last month', other: dart.str`${monthsAgo} months ago`, name: '_monthsAgoMsg', args: [monthsAgo], desc: 'A date range spanning a single month in the past.', examples: const$5 || (const$5 = dart.constMap(core.String, dart.dynamic, ['monthsAgo', 2]))});
    }
    static _monthsFromNowMsg(monthsFromNow) {
      return intl$.Intl.plural(core.int._check(monthsFromNow), {zero: 'This month', one: 'Next month', other: dart.str`${monthsFromNow} months from now`, name: '_monthsFromNowMsg', args: [monthsFromNow], desc: 'A date range spanning a single month in the future.', examples: const$6 || (const$6 = dart.constMap(core.String, dart.dynamic, ['monthsFromNow', 2]))});
    }
  };
  (material_datepicker__range.MonthRange.new = function(start, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.tagStatic(material_datepicker__range.MonthRange, '_defaultTitle');
    this[_ago] = ago;
    this[_titleFunction] = titleFunction;
    this[_start] = new model__date__date.Date.new(start.year, start.month, 1);
  }).prototype = material_datepicker__range.MonthRange.prototype;
  (material_datepicker__range.MonthRange.monthsAgo = function(clock, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.tagStatic(material_datepicker__range.MonthRange, '_defaultTitle');
    material_datepicker__range.MonthRange._monthsAgo.call(this, model__date__date.Date.today(clock), ago, titleFunction);
  }).prototype = material_datepicker__range.MonthRange.prototype;
  (material_datepicker__range.MonthRange._monthsAgo = function(today, ago, titleFunction) {
    material_datepicker__range.MonthRange.new.call(this, new model__date__date.Date.new(today.year, dart.notNull(today.month) - dart.notNull(ago), 1), ago, titleFunction);
  }).prototype = material_datepicker__range.MonthRange.prototype;
  dart.addTypeTests(material_datepicker__range.MonthRange);
  material_datepicker__range.MonthRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.MonthRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.MonthRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setStaticMethodSignature(material_datepicker__range.MonthRange, () => ({
    _defaultTitle: dart.fnType(core.String, [core.int]),
    _monthsAgoMsg: dart.fnType(dart.dynamic, [dart.dynamic]),
    _monthsFromNowMsg: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__range.MonthRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.MonthRange.__proto__),
    title: dart.fnType(core.String, []),
    start: dart.fnType(model__date__date.Date, []),
    end: dart.fnType(model__date__date.Date, []),
    next: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    prev: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    isPredefined: dart.fnType(core.bool, []),
    isAllTime: dart.fnType(core.bool, []),
    ago: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(material_datepicker__range.MonthRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.MonthRange.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    [_ago]: dart.finalFieldType(core.int),
    [_titleFunction]: dart.finalFieldType(intToString())
  }));
  dart.defineExtensionMethods(material_datepicker__range.MonthRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.MonthRange, ['hashCode']);
  const _theFirst = Symbol('_theFirst');
  let const$7;
  let const$8;
  material_datepicker__range.BroadcastMonthRange = class BroadcastMonthRange extends core.Object {
    static _weekStart(date) {
      return date.add({days: 1 - dart.notNull(date.weekday)});
    }
    static _weekEnd(date) {
      return date.add({days: 7 - dart.notNull(date.weekday)});
    }
    static monthsAgo(clock, ago, titleFunction) {
      if (titleFunction === void 0) titleFunction = dart.tagStatic(material_datepicker__range.BroadcastMonthRange, '_defaultTitle');
      let today = model__date__date.Date.today(clock);
      let thisCalendarMonthTheFirst = new model__date__date.Date.new(today.year, today.month, 1);
      let nextCalendarMonthTheFirst = thisCalendarMonthTheFirst.add({months: 1});
      let theFirst = dart.test(nextCalendarMonthTheFirst.isAfter(material_datepicker__range.BroadcastMonthRange._weekEnd(today))) ? thisCalendarMonthTheFirst : nextCalendarMonthTheFirst;
      return new material_datepicker__range.BroadcastMonthRange.__(theFirst.add({months: -dart.notNull(ago)}), ago, titleFunction);
    }
    get title() {
      return this[_titleFunction](this[_ago]);
    }
    get start() {
      return material_datepicker__range.BroadcastMonthRange._weekStart(this[_theFirst]);
    }
    get end() {
      return material_datepicker__range.BroadcastMonthRange._weekStart(this[_theFirst].add({months: 1})).add({days: -1});
    }
    get next() {
      return new material_datepicker__range.BroadcastMonthRange.__(this[_theFirst].add({months: 1}), dart.notNull(this[_ago]) - 1, this[_titleFunction]);
    }
    get prev() {
      return new material_datepicker__range.BroadcastMonthRange.__(this[_theFirst].add({months: -1}), dart.notNull(this[_ago]) + 1, this[_titleFunction]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.broadcastMonthsAgo = this[_ago];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _defaultTitle(broadcastMonthsAgo) {
      return core.String._check(dart.notNull(broadcastMonthsAgo) > 0 ? material_datepicker__range.BroadcastMonthRange._broadcastMonthsAgoMsg(broadcastMonthsAgo) : material_datepicker__range.BroadcastMonthRange._broadcastMonthsFromNowMsg(-dart.notNull(broadcastMonthsAgo)));
    }
    static _broadcastMonthsAgoMsg(broadcastMonthsAgo) {
      return intl$.Intl.plural(core.int._check(broadcastMonthsAgo), {zero: 'This broadcast month', one: 'Last broadcast month', other: dart.str`${broadcastMonthsAgo} broadcast months ago`, name: '_broadcastMonthsAgoMsg', args: [broadcastMonthsAgo], desc: 'A date range spanning a single broadcast month in the past.', examples: const$7 || (const$7 = dart.constMap(core.String, dart.dynamic, ['broadcastMonthsAgo', 2]))});
    }
    static _broadcastMonthsFromNowMsg(broadcastMonthsFromNow) {
      return intl$.Intl.plural(core.int._check(broadcastMonthsFromNow), {zero: 'This broadcast month', one: 'Next broadcast month', other: dart.str`${broadcastMonthsFromNow} broadcast months from now`, name: '_broadcastMonthsFromNowMsg', args: [broadcastMonthsFromNow], desc: 'A date range spanning a single broadcast month in the future.', examples: const$8 || (const$8 = dart.constMap(core.String, dart.dynamic, ['broadcastMonthsFromNow', 2]))});
    }
  };
  (material_datepicker__range.BroadcastMonthRange.__ = function(theFirst, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.tagStatic(material_datepicker__range.BroadcastMonthRange, '_defaultTitle');
    this[_theFirst] = theFirst;
    this[_ago] = ago;
    this[_titleFunction] = titleFunction;
  }).prototype = material_datepicker__range.BroadcastMonthRange.prototype;
  dart.addTypeTests(material_datepicker__range.BroadcastMonthRange);
  material_datepicker__range.BroadcastMonthRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.BroadcastMonthRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.BroadcastMonthRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setStaticMethodSignature(material_datepicker__range.BroadcastMonthRange, () => ({
    _weekStart: dart.fnType(model__date__date.Date, [model__date__date.Date]),
    _weekEnd: dart.fnType(model__date__date.Date, [model__date__date.Date]),
    _defaultTitle: dart.fnType(core.String, [core.int]),
    _broadcastMonthsAgoMsg: dart.fnType(dart.dynamic, [dart.dynamic]),
    _broadcastMonthsFromNowMsg: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__range.BroadcastMonthRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.BroadcastMonthRange.__proto__),
    title: dart.fnType(core.String, []),
    start: dart.fnType(model__date__date.Date, []),
    end: dart.fnType(model__date__date.Date, []),
    next: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    prev: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    isPredefined: dart.fnType(core.bool, []),
    isAllTime: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(material_datepicker__range.BroadcastMonthRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.BroadcastMonthRange.__proto__),
    [_theFirst]: dart.finalFieldType(model__date__date.Date),
    [_ago]: dart.finalFieldType(core.int),
    [_titleFunction]: dart.finalFieldType(intToString())
  }));
  dart.defineExtensionMethods(material_datepicker__range.BroadcastMonthRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.BroadcastMonthRange, ['hashCode']);
  let const$9;
  let const$10;
  material_datepicker__range.YearRange = class YearRange extends core.Object {
    get title() {
      return this[_titleFunction](this[_ago]);
    }
    get start() {
      return this[_start];
    }
    get end() {
      return new model__date__date.Date.new(this[_start].year, 12, 31);
    }
    get next() {
      return new material_datepicker__range.YearRange.new(this[_start].add({years: 1}), dart.notNull(this[_ago]) - 1, this[_titleFunction]);
    }
    get prev() {
      return new material_datepicker__range.YearRange.new(this[_start].add({years: -1}), dart.notNull(this[_ago]) + 1, this[_titleFunction]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.yearsAgo = this[_ago];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _defaultTitle(yearsAgo) {
      return core.String._check(dart.notNull(yearsAgo) > 0 ? material_datepicker__range.YearRange._yearsAgoMsg(yearsAgo) : material_datepicker__range.YearRange._yearsFromNowMsg(-dart.notNull(yearsAgo)));
    }
    static _yearsAgoMsg(yearsAgo) {
      return intl$.Intl.plural(core.int._check(yearsAgo), {zero: 'This year', one: 'Last year', other: dart.str`${yearsAgo} years ago`, name: '_yearsAgoMsg', args: [yearsAgo], desc: 'A date range spanning a single year in the past.', examples: const$9 || (const$9 = dart.constMap(core.String, dart.dynamic, ['yearsAgo', 2]))});
    }
    static _yearsFromNowMsg(yearsFromNow) {
      return intl$.Intl.plural(core.int._check(yearsFromNow), {zero: 'This year', one: 'Next year', other: dart.str`${yearsFromNow} years from now`, name: '_yearsFromNowMsg', args: [yearsFromNow], desc: 'A date range spanning a single year in the future.', examples: const$10 || (const$10 = dart.constMap(core.String, dart.dynamic, ['yearsFromNow', 2]))});
    }
  };
  (material_datepicker__range.YearRange.new = function(start, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.tagStatic(material_datepicker__range.YearRange, '_defaultTitle');
    this[_ago] = ago;
    this[_titleFunction] = titleFunction;
    this[_start] = new model__date__date.Date.new(start.year, 1, 1);
  }).prototype = material_datepicker__range.YearRange.prototype;
  (material_datepicker__range.YearRange.yearsAgo = function(clock, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.tagStatic(material_datepicker__range.YearRange, '_defaultTitle');
    material_datepicker__range.YearRange.new.call(this, model__date__date.Date.today(time$.Clock._check(clock)).add({years: core.int._check(dart.dsend(ago, '_negate'))}), core.int._check(ago), titleFunction);
  }).prototype = material_datepicker__range.YearRange.prototype;
  dart.addTypeTests(material_datepicker__range.YearRange);
  material_datepicker__range.YearRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.YearRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.YearRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setStaticMethodSignature(material_datepicker__range.YearRange, () => ({
    _defaultTitle: dart.fnType(core.String, [core.int]),
    _yearsAgoMsg: dart.fnType(dart.dynamic, [dart.dynamic]),
    _yearsFromNowMsg: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__range.YearRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.YearRange.__proto__),
    title: dart.fnType(core.String, []),
    start: dart.fnType(model__date__date.Date, []),
    end: dart.fnType(model__date__date.Date, []),
    next: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    prev: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    isPredefined: dart.fnType(core.bool, []),
    isAllTime: dart.fnType(core.bool, []),
    ago: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(material_datepicker__range.YearRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.YearRange.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    [_ago]: dart.finalFieldType(core.int),
    [_titleFunction]: dart.finalFieldType(intToString())
  }));
  dart.defineExtensionMethods(material_datepicker__range.YearRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.YearRange, ['hashCode']);
  let const$11;
  let const$12;
  material_datepicker__range.QuarterRange = class QuarterRange extends core.Object {
    get start() {
      return this[start];
    }
    set start(value) {
      super.start = value;
    }
    get title() {
      return this[_titleFunction](this[_ago]);
    }
    get end() {
      return this.start.add({months: 3, days: -1});
    }
    get next() {
      return new material_datepicker__range.QuarterRange.new(this.start.add({months: 3}), dart.notNull(this[_ago]) - 1, this[_titleFunction]);
    }
    get prev() {
      return new material_datepicker__range.QuarterRange.new(this.start.add({months: -3}), dart.notNull(this[_ago]) + 1, this[_titleFunction]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return material_datepicker__range._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return material_datepicker__range._plainRange(this);
    }
    toProtoBuf() {
      let _ = material_datepicker__range._makeProtoBuf(this);
      _.quartersAgo = this[_ago];
      return _;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__range.rangeEqual(this, o);
    }
    get hashCode() {
      return material_datepicker__range.rangeHash(this);
    }
    toString() {
      return material_datepicker__range._rangeString(this);
    }
    static _getStartMonth(start) {
      return ((dart.notNull(start.month) - 1) / 3)[$truncate]() * 3 + 1;
    }
    static _defaultTitle(quartersAgo) {
      return core.String._check(dart.notNull(quartersAgo) > 0 ? material_datepicker__range.QuarterRange._quartersAgoMsg(quartersAgo) : material_datepicker__range.QuarterRange._quartersFromNowMsg(-dart.notNull(quartersAgo)));
    }
    static _quartersAgoMsg(quartersAgo) {
      return intl$.Intl.plural(core.int._check(quartersAgo), {zero: 'This quarter', one: 'Last quarter', other: dart.str`${quartersAgo} quarters ago`, name: '_quartersAgoMsg', args: [quartersAgo], desc: 'A date range spanning a single quarter in the past.', examples: const$11 || (const$11 = dart.constMap(core.String, dart.dynamic, ['quartersAgo', 2]))});
    }
    static _quartersFromNowMsg(quartersFromNow) {
      return intl$.Intl.plural(core.int._check(quartersFromNow), {zero: 'This quarter', one: 'Next quarter', other: dart.str`${quartersFromNow} quarters from now`, name: '_quartersFromNowMsg', args: [quartersFromNow], desc: 'A date range spanning a single quarter in the future.', examples: const$12 || (const$12 = dart.constMap(core.String, dart.dynamic, ['quartersFromNow', 2]))});
    }
  };
  (material_datepicker__range.QuarterRange.new = function(startDate, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.tagStatic(material_datepicker__range.QuarterRange, '_defaultTitle');
    this[_ago] = ago;
    this[_titleFunction] = titleFunction;
    this[start] = new model__date__date.Date.new(startDate.year, material_datepicker__range.QuarterRange._getStartMonth(startDate), 1);
  }).prototype = material_datepicker__range.QuarterRange.prototype;
  (material_datepicker__range.QuarterRange.quartersAgo = function(clock, ago, titleFunction) {
    if (titleFunction === void 0) titleFunction = dart.tagStatic(material_datepicker__range.QuarterRange, '_defaultTitle');
    material_datepicker__range.QuarterRange._quartersAgo.call(this, model__date__date.Date.today(clock), ago, titleFunction);
  }).prototype = material_datepicker__range.QuarterRange.prototype;
  (material_datepicker__range.QuarterRange._quartersAgo = function(today, ago, titleFunction) {
    material_datepicker__range.QuarterRange.new.call(this, new model__date__date.Date.new(today.year, dart.notNull(today.month) - dart.notNull(ago) * 3, 1), ago, titleFunction);
  }).prototype = material_datepicker__range.QuarterRange.prototype;
  dart.addTypeTests(material_datepicker__range.QuarterRange);
  const start = Symbol("QuarterRange.start");
  material_datepicker__range.QuarterRange[dart.implements] = () => [material_datepicker__range.DatepickerDateRange];
  dart.setMethodSignature(material_datepicker__range.QuarterRange, () => ({
    __proto__: dart.getMethods(material_datepicker__range.QuarterRange.__proto__),
    clamp: dart.fnType(material_datepicker__range.DatepickerDateRange, [], {min: model__date__date.Date, max: model__date__date.Date}),
    unclamped: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    asPlainRange: dart.fnType(model__date__date.DateRange, []),
    toProtoBuf: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [])
  }));
  dart.setStaticMethodSignature(material_datepicker__range.QuarterRange, () => ({
    _getStartMonth: dart.fnType(core.int, [model__date__date.Date]),
    _defaultTitle: dart.fnType(core.String, [core.int]),
    _quartersAgoMsg: dart.fnType(dart.dynamic, [dart.dynamic]),
    _quartersFromNowMsg: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__range.QuarterRange, () => ({
    __proto__: dart.getGetters(material_datepicker__range.QuarterRange.__proto__),
    title: dart.fnType(core.String, []),
    end: dart.fnType(model__date__date.Date, []),
    next: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    prev: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    isPredefined: dart.fnType(core.bool, []),
    isAllTime: dart.fnType(core.bool, []),
    ago: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(material_datepicker__range.QuarterRange, () => ({
    __proto__: dart.getFields(material_datepicker__range.QuarterRange.__proto__),
    start: dart.finalFieldType(model__date__date.Date),
    [_ago]: dart.finalFieldType(core.int),
    [_titleFunction]: dart.finalFieldType(intToString())
  }));
  dart.defineExtensionMethods(material_datepicker__range.QuarterRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__range.QuarterRange, ['hashCode']);
  material_datepicker__range.today = function(clock) {
    return new material_datepicker__range.SingleDayRange.daysAgo(clock, 0);
  };
  dart.fn(material_datepicker__range.today, ClockToDatepickerDateRange());
  material_datepicker__range.yesterday = function(clock) {
    return new material_datepicker__range.SingleDayRange.daysAgo(clock, 1);
  };
  dart.fn(material_datepicker__range.yesterday, ClockToDatepickerDateRange());
  material_datepicker__range.thisWeek = function(clock) {
    return new material_datepicker__range.WeekRange.weeksAgo(clock, 0);
  };
  dart.fn(material_datepicker__range.thisWeek, ClockToDatepickerDateRange());
  material_datepicker__range.lastWeek = function(clock) {
    return new material_datepicker__range.WeekRange.weeksAgo(clock, 1);
  };
  dart.fn(material_datepicker__range.lastWeek, ClockToDatepickerDateRange());
  material_datepicker__range.last7Days = function(clock) {
    return new material_datepicker__range.LastNDaysRange.beforeToday(clock, 7);
  };
  dart.fn(material_datepicker__range.last7Days, ClockToDatepickerDateRange());
  material_datepicker__range.last14Days = function(clock) {
    return new material_datepicker__range.LastNDaysRange.beforeToday(clock, 14);
  };
  dart.fn(material_datepicker__range.last14Days, ClockToDatepickerDateRange());
  material_datepicker__range.thisMonth = function(clock) {
    return new material_datepicker__range.MonthRange.monthsAgo(clock, 0);
  };
  dart.fn(material_datepicker__range.thisMonth, ClockToDatepickerDateRange());
  material_datepicker__range.lastMonth = function(clock) {
    return new material_datepicker__range.MonthRange.monthsAgo(clock, 1);
  };
  dart.fn(material_datepicker__range.lastMonth, ClockToDatepickerDateRange());
  material_datepicker__range.thisBroadcastMonth = function(clock) {
    return material_datepicker__range.BroadcastMonthRange.monthsAgo(clock, 0);
  };
  dart.fn(material_datepicker__range.thisBroadcastMonth, ClockToDatepickerDateRange());
  material_datepicker__range.lastBroadcastMonth = function(clock) {
    return material_datepicker__range.BroadcastMonthRange.monthsAgo(clock, 1);
  };
  dart.fn(material_datepicker__range.lastBroadcastMonth, ClockToDatepickerDateRange());
  material_datepicker__range.last30Days = function(clock) {
    return new material_datepicker__range.LastNDaysRange.beforeToday(clock, 30);
  };
  dart.fn(material_datepicker__range.last30Days, ClockToDatepickerDateRange());
  material_datepicker__range.thisYear = function(clock) {
    return new material_datepicker__range.YearRange.yearsAgo(clock, 0);
  };
  dart.fn(material_datepicker__range.thisYear, ClockToDatepickerDateRange());
  material_datepicker__range.lastYear = function(clock) {
    return new material_datepicker__range.YearRange.yearsAgo(clock, 1);
  };
  dart.fn(material_datepicker__range.lastYear, ClockToDatepickerDateRange());
  material_datepicker__range.thisQuarter = function(clock) {
    return new material_datepicker__range.QuarterRange.quartersAgo(clock, 0);
  };
  dart.fn(material_datepicker__range.thisQuarter, ClockToDatepickerDateRange());
  material_datepicker__range.lastQuarter = function(clock) {
    return new material_datepicker__range.QuarterRange.quartersAgo(clock, 1);
  };
  dart.fn(material_datepicker__range.lastQuarter, ClockToDatepickerDateRange());
  dart.defineLazy(material_datepicker__range, {
    /*material_datepicker__range.allTime*/get allTime() {
      return material_datepicker__range.DatepickerDateRange.new(core.String._check(material_datepicker__range._allTimeMsg), null, null, {isPredefined: true, isAllTime: true});
    },
    set allTime(_) {}
  });
  material_datepicker__range.commonRanges = function(clock) {
    return JSArrayOfDatepickerDateRange().of([material_datepicker__range.today(clock), material_datepicker__range.yesterday(clock), material_datepicker__range.thisWeek(clock), material_datepicker__range.lastWeek(clock), material_datepicker__range.thisMonth(clock), material_datepicker__range.lastMonth(clock), material_datepicker__range.allTime]);
  };
  dart.fn(material_datepicker__range.commonRanges, ClockToListOfDatepickerDateRange());
  dart.copyProperties(material_datepicker__range, {
    get _customDateRangeMsg() {
      return intl$.Intl.message('Custom', {name: '_customDateRangeMsg', meaning: 'Name of a date range', desc: 'Name of a user-specified date range, as opposed to a predefined ' + 'date range like "Last 7 days"'});
    }
  });
  dart.copyProperties(material_datepicker__range, {
    get _allTimeMsg() {
      return intl$.Intl.message('All time', {name: '_allTimeMsg', desc: 'A date range containing the entire lifetime of the account.'});
    }
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/range.ddc", {
    "package:angular_components/material_datepicker/range.dart": material_datepicker__range
  }, '{"version":3,"sourceRoot":"","sources":["range.dart"],"names":[],"mappings":"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","file":"range.ddc.js"}');
  // Exports:
  return {
    material_datepicker__range: material_datepicker__range
  };
});

//# sourceMappingURL=range.ddc.js.map
