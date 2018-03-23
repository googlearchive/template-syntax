define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const time$ = Object.create(_root);
  const $modulo = dartx['%'];
  const $truncate = dartx.truncate;
  const $_get = dartx._get;
  const $clamp = dartx.clamp;
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  let intAndintToint = () => (intAndintToint = dart.constFn(dart.fnType(core.int, [core.int, core.int])))();
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  let __Toint = () => (__Toint = dart.constFn(dart.fnType(core.int, [], {year: core.int, month: core.int, day: core.int})))();
  time$.TimeFunction = dart.typedef('TimeFunction', () => dart.fnType(core.DateTime, []));
  time$.systemTime = function() {
    return new core.DateTime.now();
  };
  dart.fn(time$.systemTime, VoidToDateTime());
  const _time = Symbol('_time');
  time$.Clock = class Clock extends core.Object {
    now() {
      return this[_time]();
    }
    agoBy(duration) {
      return this.now().subtract(duration);
    }
    fromNowBy(duration) {
      return this.now().add(duration);
    }
    ago(opts) {
      let days = opts && 'days' in opts ? opts.days : 0;
      let hours = opts && 'hours' in opts ? opts.hours : 0;
      let minutes = opts && 'minutes' in opts ? opts.minutes : 0;
      let seconds = opts && 'seconds' in opts ? opts.seconds : 0;
      let milliseconds = opts && 'milliseconds' in opts ? opts.milliseconds : 0;
      let microseconds = opts && 'microseconds' in opts ? opts.microseconds : 0;
      return this.agoBy(new core.Duration.new({days: days, hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds, microseconds: microseconds}));
    }
    fromNow(opts) {
      let days = opts && 'days' in opts ? opts.days : 0;
      let hours = opts && 'hours' in opts ? opts.hours : 0;
      let minutes = opts && 'minutes' in opts ? opts.minutes : 0;
      let seconds = opts && 'seconds' in opts ? opts.seconds : 0;
      let milliseconds = opts && 'milliseconds' in opts ? opts.milliseconds : 0;
      let microseconds = opts && 'microseconds' in opts ? opts.microseconds : 0;
      return this.fromNowBy(new core.Duration.new({days: days, hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds, microseconds: microseconds}));
    }
    microsAgo(micros) {
      return this.ago({microseconds: micros});
    }
    microsFromNow(micros) {
      return this.fromNow({microseconds: micros});
    }
    millisAgo(millis) {
      return this.ago({milliseconds: millis});
    }
    millisFromNow(millis) {
      return this.fromNow({milliseconds: millis});
    }
    secondsAgo(seconds) {
      return this.ago({seconds: seconds});
    }
    secondsFromNow(seconds) {
      return this.fromNow({seconds: seconds});
    }
    minutesAgo(minutes) {
      return this.ago({minutes: minutes});
    }
    minutesFromNow(minutes) {
      return this.fromNow({minutes: minutes});
    }
    hoursAgo(hours) {
      return this.ago({hours: hours});
    }
    hoursFromNow(hours) {
      return this.fromNow({hours: hours});
    }
    daysAgo(days) {
      return this.ago({days: days});
    }
    daysFromNow(days) {
      return this.fromNow({days: days});
    }
    weeksAgo(weeks) {
      return this.ago({days: 7 * dart.notNull(weeks)});
    }
    weeksFromNow(weeks) {
      return this.fromNow({days: 7 * dart.notNull(weeks)});
    }
    monthsAgo(months) {
      let time = this.now();
      let m = (dart.notNull(time.month) - dart.notNull(months) - 1)[$modulo](12) + 1;
      let y = dart.notNull(time.year) - ((dart.notNull(months) + 12 - dart.notNull(time.month)) / 12)[$truncate]();
      let d = time$.clampDayOfMonth({year: y, month: m, day: time.day});
      return new core.DateTime.new(y, m, d, time.hour, time.minute, time.second, time.millisecond);
    }
    monthsFromNow(months) {
      let time = this.now();
      let m = (dart.notNull(time.month) + dart.notNull(months) - 1)[$modulo](12) + 1;
      let y = dart.notNull(time.year) + ((dart.notNull(months) + dart.notNull(time.month) - 1) / 12)[$truncate]();
      let d = time$.clampDayOfMonth({year: y, month: m, day: time.day});
      return new core.DateTime.new(y, m, d, time.hour, time.minute, time.second, time.millisecond);
    }
    yearsAgo(years) {
      let time = this.now();
      let y = dart.notNull(time.year) - dart.notNull(years);
      let d = time$.clampDayOfMonth({year: y, month: time.month, day: time.day});
      return new core.DateTime.new(y, time.month, d, time.hour, time.minute, time.second, time.millisecond);
    }
    yearsFromNow(years) {
      return this.yearsAgo(-dart.notNull(years));
    }
  };
  (time$.Clock.new = function(timeFunc) {
    if (timeFunc === void 0) timeFunc = time$.systemTime;
    this[_time] = timeFunc;
  }).prototype = time$.Clock.prototype;
  (time$.Clock.fixed = function(time) {
    this[_time] = dart.fn(() => time, VoidToDateTime());
  }).prototype = time$.Clock.prototype;
  dart.addTypeTests(time$.Clock);
  dart.setMethodSignature(time$.Clock, () => ({
    __proto__: dart.getMethods(time$.Clock.__proto__),
    now: dart.fnType(core.DateTime, []),
    agoBy: dart.fnType(core.DateTime, [core.Duration]),
    fromNowBy: dart.fnType(core.DateTime, [core.Duration]),
    ago: dart.fnType(core.DateTime, [], {days: core.int, hours: core.int, minutes: core.int, seconds: core.int, milliseconds: core.int, microseconds: core.int}),
    fromNow: dart.fnType(core.DateTime, [], {days: core.int, hours: core.int, minutes: core.int, seconds: core.int, milliseconds: core.int, microseconds: core.int}),
    microsAgo: dart.fnType(core.DateTime, [core.int]),
    microsFromNow: dart.fnType(core.DateTime, [core.int]),
    millisAgo: dart.fnType(core.DateTime, [core.int]),
    millisFromNow: dart.fnType(core.DateTime, [core.int]),
    secondsAgo: dart.fnType(core.DateTime, [core.int]),
    secondsFromNow: dart.fnType(core.DateTime, [core.int]),
    minutesAgo: dart.fnType(core.DateTime, [core.int]),
    minutesFromNow: dart.fnType(core.DateTime, [core.int]),
    hoursAgo: dart.fnType(core.DateTime, [core.int]),
    hoursFromNow: dart.fnType(core.DateTime, [core.int]),
    daysAgo: dart.fnType(core.DateTime, [core.int]),
    daysFromNow: dart.fnType(core.DateTime, [core.int]),
    weeksAgo: dart.fnType(core.DateTime, [core.int]),
    weeksFromNow: dart.fnType(core.DateTime, [core.int]),
    monthsAgo: dart.fnType(core.DateTime, [core.int]),
    monthsFromNow: dart.fnType(core.DateTime, [core.int]),
    yearsAgo: dart.fnType(core.DateTime, [core.int]),
    yearsFromNow: dart.fnType(core.DateTime, [core.int])
  }));
  dart.setFieldSignature(time$.Clock, () => ({
    __proto__: dart.getFields(time$.Clock.__proto__),
    [_time]: dart.finalFieldType(VoidToDateTime())
  }));
  dart.defineLazy(time$, {
    /*time$.aMicrosecond*/get aMicrosecond() {
      return dart.const(new core.Duration.new({microseconds: 1}));
    },
    /*time$.aMillisecond*/get aMillisecond() {
      return dart.const(new core.Duration.new({milliseconds: 1}));
    },
    /*time$.aSecond*/get aSecond() {
      return dart.const(new core.Duration.new({seconds: 1}));
    },
    /*time$.aMinute*/get aMinute() {
      return dart.const(new core.Duration.new({minutes: 1}));
    },
    /*time$.anHour*/get anHour() {
      return dart.const(new core.Duration.new({hours: 1}));
    },
    /*time$.aDay*/get aDay() {
      return dart.const(new core.Duration.new({days: 1}));
    },
    /*time$.aWeek*/get aWeek() {
      return dart.const(new core.Duration.new({days: 7}));
    }
  });
  dart.defineLazy(time$, {
    /*time$._daysInMonth*/get _daysInMonth() {
      return dart.constList([0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], core.int);
    }
  });
  time$.daysInMonth = function(year, month) {
    return month === core.DateTime.FEBRUARY && dart.test(time$.isLeapYear(year)) ? 29 : time$._daysInMonth[$_get](month);
  };
  dart.fn(time$.daysInMonth, intAndintToint());
  time$.isLeapYear = function(year) {
    return year[$modulo](4) === 0 && (year[$modulo](100) !== 0 || year[$modulo](400) === 0);
  };
  dart.fn(time$.isLeapYear, intTobool());
  time$.clampDayOfMonth = function(opts) {
    let year = opts && 'year' in opts ? opts.year : null;
    let month = opts && 'month' in opts ? opts.month : null;
    let day = opts && 'day' in opts ? opts.day : null;
    return dart.asInt(day[$clamp](1, time$.daysInMonth(year, month)));
  };
  dart.fn(time$.clampDayOfMonth, __Toint());
  dart.trackLibraries("packages/quiver/time.ddc", {
    "package:quiver/time.dart": time$
  }, '{"version":3,"sourceRoot":"","sources":["src/time/clock.dart","src/time/duration_unit_constants.dart","src/time/util.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;UAoByB,KAAI,iBAAY;EAAE;;;;;YA0BvB,YAAK;IAAE;UAGV,QAAiB;YAAK,SAAG,WAAW,CAAC,QAAQ;IAAC;cAG1C,QAAiB;YAAK,SAAG,MAAM,CAAC,QAAQ;IAAC;;UAM/C,4CAAM;UACP,+CAAO;UACP,qDAAS;UACT,qDAAS;UACT,oEAAc;UACd,oEAAc;YACtB,WAAK,CAAC,IAAI,iBAAQ,QACR,IAAI,SACH,KAAK,WACH,OAAO,WACP,OAAO,gBACF,YAAY,gBACZ,YAAY;IAAE;;UAMvB,4CAAM;UACP,+CAAO;UACP,qDAAS;UACT,qDAAS;UACT,oEAAc;UACd,oEAAc;YACtB,eAAS,CAAC,IAAI,iBAAQ,QACZ,IAAI,SACH,KAAK,WACH,OAAO,WACP,OAAO,gBACF,YAAY,gBACZ,YAAY;IAAE;cAGjB,MAAU;YAAK,SAAG,gBAAe,MAAM;IAAC;kBAGpC,MAAU;YAAK,aAAO,gBAAe,MAAM;IAAC;cAGhD,MAAU;YAAK,SAAG,gBAAe,MAAM;IAAC;kBAGpC,MAAU;YAAK,aAAO,gBAAe,MAAM;IAAC;eAG/C,OAAW;YAAK,SAAG,WAAU,OAAO;IAAC;mBAGjC,OAAW;YAAK,aAAO,WAAU,OAAO;IAAC;eAG7C,OAAW;YAAK,SAAG,WAAU,OAAO;IAAC;mBAGjC,OAAW;YAAK,aAAO,WAAU,OAAO;IAAC;aAG/C,KAAS;YAAK,SAAG,SAAQ,KAAK;IAAC;iBAG3B,KAAS;YAAK,aAAO,SAAQ,KAAK;IAAC;YAGxC,IAAQ;YAAK,SAAG,QAAO,IAAI;IAAC;gBAGxB,IAAQ;YAAK,aAAO,QAAO,IAAI;IAAC;aAGnC,KAAS;YAAK,SAAG,QAAO,AAAE,iBAAE,KAAK;IAAC;iBAG9B,KAAS;YAAK,aAAO,QAAO,AAAE,iBAAE,KAAK;IAAC;cAGzC,MAAU;AAC3B,UAAI,OAAO,QAAG;AACd,UAAI,IAA8B,AAAK,CAAnB,AAAS,aAApB,IAAI,MAAM,iBAAG,MAAM,IAAG,YAAK,MAAK;AACzC,UAAI,IAAc,aAAV,IAAI,KAAK,IAA8B,CAxInD,CAwIgC,AAAK,aAAZ,MAAM,IAAG,kBAAK,IAAI,MAAM,KAAK;AAClD,UAAI,IAAI,qBAAe,QAAO,CAAC,SAAS,CAAC,OAAO,IAAI,IAAI;AACxD,YAAO,KAAI,iBAAQ,CACf,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,IAAI,KAAK,EAAE,IAAI,OAAO,EAAE,IAAI,OAAO,EAAE,IAAI,YAAY;IACpE;kBAGuB,MAAU;AAC/B,UAAI,OAAO,QAAG;AACd,UAAI,IAA8B,AAAK,CAAnB,AAAS,aAApB,IAAI,MAAM,iBAAG,MAAM,IAAG,YAAK,MAAK;AACzC,UAAI,IAAc,aAAV,IAAI,KAAK,IAA6B,CAlJlD,CAkJgC,AAAa,aAApB,MAAM,iBAAG,IAAI,MAAM,IAAG,KAAM;AACjD,UAAI,IAAI,qBAAe,QAAO,CAAC,SAAS,CAAC,OAAO,IAAI,IAAI;AACxD,YAAO,KAAI,iBAAQ,CACf,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,IAAI,KAAK,EAAE,IAAI,OAAO,EAAE,IAAI,OAAO,EAAE,IAAI,YAAY;IACpE;aAGkB,KAAS;AACzB,UAAI,OAAO,QAAG;AACd,UAAI,IAAc,aAAV,IAAI,KAAK,iBAAG,KAAK;AACzB,UAAI,IAAI,qBAAe,QAAO,CAAC,SAAS,IAAI,MAAM,OAAO,IAAI,IAAI;AACjE,YAAO,KAAI,iBAAQ,CAAC,CAAC,EAAE,IAAI,MAAM,EAAE,CAAC,EAAE,IAAI,KAAK,EAAE,IAAI,OAAO,EAAE,IAAI,OAAO,EACrE,IAAI,YAAY;IACtB;iBAGsB,KAAS;YAAK,cAAQ,CAAC,cAAC,KAAK;IAAC;;8BA1HvC,QAAkC;6BAArB,WAAW,gBAAU;IAAK,WAAK,GAAG,QAAQ;;gCAGxD,IAAa;IAAI,WAAK,GAAI,cAAM,IAAI;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MC3BpC,kBAAY;YAAG,gBAAM,iBAAQ,gBAAe;;MAC5C,kBAAY;YAAG,gBAAM,iBAAQ,gBAAe;;MAC5C,aAAO;YAAG,gBAAM,iBAAQ,WAAU;;MAClC,aAAO;YAAG,gBAAM,iBAAQ,WAAU;;MAClC,YAAM;YAAG,gBAAM,iBAAQ,SAAQ;;MAC/B,UAAI;YAAG,gBAAM,iBAAQ,QAAO;;MAC5B,WAAK;YAAG,gBAAM,iBAAQ,QAAO;;;;MCJtC,kBAAY;YAAG,iBAAO,GAAG,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI;;;+BAM3D,IAAQ,EAAE,KAAS;UAC/B,AAAC,MAAK,KAAI,aAAQ,SAAS,cAAI,gBAAU,CAAC,IAAI,KAAK,KAAK,kBAAY,QAAC,KAAK;EAAC;;8BAU/D,IAAQ;UACnB,AAAA,AAAK,AAAU,KAAX,UAAG,OAAK,MAAQ,AAAA,AAAK,IAAD,UAAG,SAAO,KAAO,AAAA,AAAK,IAAD,UAAG,SAAO;EAAG;;;QAiB/C;QACA;QACA;sBAEZ,GAAG,QAAM,CAAC,GAAG,iBAAW,CAAC,IAAI,EAAE,KAAK;EAAE","file":"time.ddc.js"}');
  // Exports:
  return {
    time: time$
  };
});

//# sourceMappingURL=time.ddc.js.map
