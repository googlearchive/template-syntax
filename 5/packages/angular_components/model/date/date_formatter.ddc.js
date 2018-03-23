define(['dart_sdk', 'packages/intl/intl', 'packages/angular_components/model/date/date'], function(dart_sdk, intl, date) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const model__date__date = date.model__date__date;
  const _root = Object.create(null);
  const model__date__date_formatter = Object.create(_root);
  let DateToString = () => (DateToString = dart.constFn(dart.fnType(core.String, [model__date__date.Date])))();
  let DateRangeToString = () => (DateRangeToString = dart.constFn(dart.fnType(core.String, [model__date__date.DateRange])))();
  dart.defineLazy(model__date__date_formatter, {
    /*model__date__date_formatter._dayFmt*/get _dayFmt() {
      return new intl$.DateFormat.d();
    },
    /*model__date__date_formatter._dateFmt*/get _dateFmt() {
      return new intl$.DateFormat.yMMMd();
    },
    /*model__date__date_formatter._yearFmt*/get _yearFmt() {
      return new intl$.DateFormat.y();
    },
    /*model__date__date_formatter._monthFmt*/get _monthFmt() {
      return new intl$.DateFormat.MMM();
    }
  });
  model__date__date_formatter.formatDate = function(date) {
    let l = date == null ? null : date.format(model__date__date_formatter._dateFmt);
    return l != null ? l : '';
  };
  dart.fn(model__date__date_formatter.formatDate, DateToString());
  model__date__date_formatter.formatRange = function(range) {
    if (range == null) return '';
    if (range.start == null && range.end == null) return model__date__date_formatter._DateFormatterMessages._allTimeMsg;
    if (dart.equals(range.start, range.end)) return model__date__date_formatter.formatDate(range.start);
    if (range.start == null || range.end == null || range.start.year != range.end.year) {
      return model__date__date_formatter._DateFormatterMessages._formatArbitraryRange(model__date__date_formatter.formatDate(range.start), model__date__date_formatter.formatDate(range.end));
    }
    if (range.start.month != range.end.month) {
      return model__date__date_formatter._DateFormatterMessages._formatSameYearRange(range.start.format(model__date__date_formatter._monthFmt), range.start.format(model__date__date_formatter._dayFmt), range.end.format(model__date__date_formatter._monthFmt), range.end.format(model__date__date_formatter._dayFmt), range.start.format(model__date__date_formatter._yearFmt));
    }
    return model__date__date_formatter._DateFormatterMessages._formatSameMonthRange(range.start.format(model__date__date_formatter._monthFmt), range.start.format(model__date__date_formatter._dayFmt), range.end.format(model__date__date_formatter._dayFmt), range.start.format(model__date__date_formatter._yearFmt));
  };
  dart.fn(model__date__date_formatter.formatRange, DateRangeToString());
  let const$;
  let const$0;
  let const$1;
  model__date__date_formatter._DateFormatterMessages = class _DateFormatterMessages extends core.Object {
    static get _allTimeMsg() {
      return intl$.Intl.message('All time', {name: '_allTimeMsg', desc: 'Indicates that the selected date range has no start or end'});
    }
    static _formatSameYearRange(month1, day1, month2, day2, year) {
      return intl$.Intl.message(dart.str`${month1} ${day1} – ${month2} ${day2}, ${year}`, {name: '_DateFormatterMessages__formatSameYearRange', desc: 'Date range format when a range starts and ends in the same ' + 'year. Please reorder and adjust punctuation as appropriate for ' + 'the locale. Do not include time units such as 년 or 年.', args: [month1, day1, month2, day2, year], examples: const$ || (const$ = dart.constMap(core.String, dart.dynamic, ['month1', 'Jul', 'day1', '25', 'month2', 'Aug', 'day2', '3', 'year', '2015']))});
    }
    static _formatSameMonthRange(month, day1, day2, year) {
      return intl$.Intl.message(dart.str`${month} ${day1} – ${day2}, ${year}`, {name: '_DateFormatterMessages__formatSameMonthRange', desc: 'Date range format when a range starts and ends in the same ' + 'month. Please reorder and adjust punctuation as appropriate ' + 'for the locale. Do not include time units such as 년 or 年.', args: [month, day1, day2, year], examples: const$0 || (const$0 = dart.constMap(core.String, dart.dynamic, ['month', 'Jul', 'day1', '25', 'day2', '29', 'year', '2015']))});
    }
    static _formatArbitraryRange(start, end) {
      return intl$.Intl.message(dart.str`${start} – ${end}`, {name: '_DateFormatterMessages__formatArbitraryRange', desc: 'Date range containing two arbitrary dates which can fall in ' + 'different years. Please reorder and adjust punctuation as ' + 'appropriate for the locale, if necessary. Do not include ' + 'time units such as 년 or 年.', args: [start, end], examples: const$1 || (const$1 = dart.constMap(core.String, dart.dynamic, ['start', 'Jul 27, 2015', 'end', 'Aug 3, 2015']))});
    }
  };
  (model__date__date_formatter._DateFormatterMessages.new = function() {
  }).prototype = model__date__date_formatter._DateFormatterMessages.prototype;
  dart.addTypeTests(model__date__date_formatter._DateFormatterMessages);
  dart.setStaticMethodSignature(model__date__date_formatter._DateFormatterMessages, () => ({
    _formatSameYearRange: dart.fnType(core.String, [core.String, core.String, core.String, core.String, core.String]),
    _formatSameMonthRange: dart.fnType(core.String, [core.String, core.String, core.String, core.String]),
    _formatArbitraryRange: dart.fnType(core.String, [core.String, core.String])
  }));
  dart.trackLibraries("packages/angular_components/model/date/date_formatter.ddc", {
    "package:angular_components/model/date/date_formatter.dart": model__date__date_formatter
  }, '{"version":3,"sourceRoot":"","sources":["date_formatter.dart"],"names":[],"mappings":";;;;;;;;;;;;MAOM,mCAAO;YAAG,KAAI,kBAAY;;MAC1B,oCAAQ;YAAG,KAAI,sBAAgB;;MAC/B,oCAAQ;YAAG,KAAI,kBAAY;;MAC3B,qCAAS;YAAG,KAAI,oBAAc;;;oDAGlB,IAAS;YAAK,IAAI,kBAAJ,IAAI,OAAQ,CAAC,oCAAQ;2BAAK;EAAE;;qDACzC,KAAe;AAChC,QAAI,KAAK,IAAI,MAAM,MAAO;AAC1B,QAAI,KAAK,MAAM,IAAI,QAAQ,KAAK,IAAI,IAAI,MACtC,MAAO,mDAAsB,YAAY;AAC3C,oBAAI,KAAK,MAAM,EAAI,KAAK,IAAI,GAAE,MAAO,uCAAU,CAAC,KAAK,MAAM;AAE3D,QAAK,KAAK,MAAM,IAAI,QAAQ,KAAK,IAAI,IAAI,QACrC,KAAK,MAAM,KAAK,IAAI,KAAK,IAAI,KAAK,EAAE;AACtC,YAAO,mDAAsB,sBAAsB,CAC/C,sCAAU,CAAC,KAAK,MAAM,GAAG,sCAAU,CAAC,KAAK,IAAI;;AAEnD,QAAI,KAAK,MAAM,MAAM,IAAI,KAAK,IAAI,MAAM,EAAE;AACxC,YAAO,mDAAsB,qBAAqB,CAC9C,KAAK,MAAM,OAAO,CAAC,qCAAS,GAC5B,KAAK,MAAM,OAAO,CAAC,mCAAO,GAC1B,KAAK,IAAI,OAAO,CAAC,qCAAS,GAC1B,KAAK,IAAI,OAAO,CAAC,mCAAO,GACxB,KAAK,MAAM,OAAO,CAAC,oCAAQ;;AAEjC,UAAO,mDAAsB,sBAAsB,CAC/C,KAAK,MAAM,OAAO,CAAC,qCAAS,GAC5B,KAAK,MAAM,OAAO,CAAC,mCAAO,GAC1B,KAAK,IAAI,OAAO,CAAC,mCAAO,GACxB,KAAK,MAAM,OAAO,CAAC,oCAAQ;EACjC;;;;;;;YAGmC,WAAI,QAAQ,CAAC,mBACpC,qBACA;IAA6D;gCAKpC,MAAa,EAAE,IAAW,EAAE,MAAa,EACpE,IAAW,EAAE,IAAW;YAC5B,WAAI,QAAQ,CAAC,WAAE,MAAM,IAAE,IAAI,MAAI,MAAM,IAAE,IAAI,KAAG,IAAI,WACxC,qDACA,gEACF,oEACA,+DACE,CACJ,MAAM,EACN,IAAI,EACJ,MAAM,EACN,IAAI,EACJ,IAAI,aAEI,8DACR,UAAU,OACV,QAAQ,MACR,UAAU,OACV,QAAQ,KACR,QAAQ;IACR;iCAGF,KAAY,EAAE,IAAW,EAAE,IAAW,EAAE,IAAW;YACvD,WAAI,QAAQ,CAAC,WAAE,KAAK,IAAE,IAAI,MAAI,IAAI,KAAG,IAAI,WAC/B,sDACA,gEACF,iEACA,mEACE,CACJ,KAAK,EACL,IAAI,EACJ,IAAI,EACJ,IAAI,aAEI,gEACR,SAAS,OACT,QAAQ,MACR,QAAQ,MACR,QAAQ;IACR;iCAE0B,KAAY,EAAE,GAAU;YACxD,WAAI,QAAQ,CAAC,WAAE,KAAK,MAAI,GAAG,WACjB,sDACA,iEACF,+DACA,8DACA,oCACE,CAAC,KAAK,EAAE,GAAG,aACP,gEAAO,SAAS,gBAAgB,OAAO;IAAe;;;EAC1E","file":"date_formatter.ddc.js"}');
  // Exports:
  return {
    model__date__date_formatter: model__date__date_formatter
  };
});

//# sourceMappingURL=date_formatter.ddc.js.map
