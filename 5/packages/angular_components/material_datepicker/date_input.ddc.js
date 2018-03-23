define(['dart_sdk', 'packages/intl/intl', 'packages/angular_components/model/date/date', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/material_datepicker/calendar', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/quiver/time', 'packages/angular_components/material_input/material_input'], function(dart_sdk, intl, date, disposer, properties, calendar, lifecycle_hooks, time, material_input) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const model__date__date = date.model__date__date;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const time$ = time.time;
  const material_input__material_input = material_input.material_input__material_input;
  const _root = Object.create(null);
  const material_datepicker__date_input = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $any = dartx.any;
  const $isEmpty = dartx.isEmpty;
  const $trim = dartx.trim;
  const $truncate = dartx.truncate;
  let JSArrayOfDateFormat = () => (JSArrayOfDateFormat = dart.constFn(_interceptors.JSArray$(intl$.DateFormat)))();
  let StreamControllerOfDate = () => (StreamControllerOfDate = dart.constFn(async.StreamController$(model__date__date.Date)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let DateFormatTobool = () => (DateFormatTobool = dart.constFn(dart.fnType(core.bool, [intl$.DateFormat])))();
  let JSArrayOfDate = () => (JSArrayOfDate = dart.constFn(_interceptors.JSArray$(model__date__date.Date)))();
  let ListOfDateFormat = () => (ListOfDateFormat = dart.constFn(core.List$(intl$.DateFormat)))();
  const _input = Symbol('_input');
  const _clock = Symbol('_clock');
  const _inputFormats = Symbol('_inputFormats');
  const _dayInputFormatsWithoutYear = Symbol('_dayInputFormatsWithoutYear');
  const _monthInputFormatsWithoutDay = Symbol('_monthInputFormatsWithoutDay');
  const _monthInputFormatsMonthOnly = Symbol('_monthInputFormatsMonthOnly');
  const _defaultMonthFormat = Symbol('_defaultMonthFormat');
  const _defaultDayFormat = Symbol('_defaultDayFormat');
  const _dateFormat = Symbol('_dateFormat');
  const _maxDate = Symbol('_maxDate');
  const _minDate = Symbol('_minDate');
  const _date = Symbol('_date');
  const _isRangeEnd = Symbol('_isRangeEnd');
  const _disposer = Symbol('_disposer');
  const _controller = Symbol('_controller');
  const _cachedResult = Symbol('_cachedResult');
  const _cachedInput = Symbol('_cachedInput');
  const _cachedMinDate = Symbol('_cachedMinDate');
  const _cachedMaxDate = Symbol('_cachedMaxDate');
  const _lastParse = Symbol('_lastParse');
  const _parseDate = Symbol('_parseDate');
  const _parseDateCached = Symbol('_parseDateCached');
  const _trySetDate = Symbol('_trySetDate');
  const _clampDate = Symbol('_clampDate');
  const _parseDateUsingFormatList = Symbol('_parseDateUsingFormatList');
  const _guessYear = Symbol('_guessYear');
  const _guessCentury = Symbol('_guessCentury');
  let const$;
  let const$0;
  material_datepicker__date_input.DateInputDirective = class DateInputDirective extends core.Object {
    set dateFormat(value) {
      this[_dateFormat] = value;
      this[_input].inputText = (() => {
        let t = this[_date];
        let l = t == null ? null : t.format(this.dateFormat);
        return l != null ? l : '';
      })();
    }
    get dateFormat() {
      if (this[_dateFormat] != null) {
        return this[_dateFormat];
      } else {
        return dart.test(this.isMonthInput) ? this[_defaultMonthFormat] : this[_defaultDayFormat];
      }
    }
    set maxDate(date) {
      if (date == null || dart.equals(date, this[_maxDate])) return;
      this[_maxDate] = date;
      if (!dart.equals(this[_lastParse], this[_date])) this[_trySetDate](this[_lastParse], {setAsCurrent: true});
    }
    get maxDate() {
      return this[_maxDate];
    }
    set minDate(date) {
      if (date == null || dart.equals(date, this[_minDate])) return;
      this[_minDate] = date;
      if (!dart.equals(this[_lastParse], this[_date])) this[_trySetDate](this[_lastParse], {setAsCurrent: true});
    }
    get minDate() {
      return this[_minDate];
    }
    set date(date) {
      this[_date] = this[_clampDate](date);
      let t = this[_date];
      let l = t == null ? null : t.format(this.dateFormat);
      let text = l != null ? l : '';
      if (this[_input].inputText !== text) {
        let valid = !dart.test(this[_input].required) || text[$isNotEmpty];
        this[_input].inputChange(text, valid, valid ? null : this.invalidDateMsg);
      }
    }
    get date() {
      return this[_date];
    }
    set rangeEnd(isRangeEnd) {
      this[_isRangeEnd] = utils__angular__properties__properties.getBool(isRangeEnd);
    }
    get dateChange() {
      return this[_controller].stream;
    }
    get isMonthInput() {
      return this[isMonthInput];
    }
    set isMonthInput(value) {
      this[isMonthInput] = value;
    }
    ngOnDestroy() {
      return this[_disposer].dispose();
    }
    [_clampDate](date) {
      if (date != null && dart.test(this.isMonthInput)) {
        if (dart.test(this[_isRangeEnd])) {
          return material_datepicker__calendar.lastDayOfMonth(date);
        } else {
          return material_datepicker__calendar.firstDayOfMonth(date);
        }
      }
      return date;
    }
    [_parseDateUsingFormatList](input, formatList) {
      let date = null;
      formatList[$any](dart.fn(format => {
        try {
          date = model__date__date.Date.parseLoose(input, format);
          date = this[_clampDate](date);
          return true;
        } catch (e) {
          if (core.FormatException.is(e)) {
            return false;
          } else if (core.ArgumentError.is(e)) {
            return false;
          } else
            throw e;
        }
      }, DateFormatTobool()));
      return date;
    }
    [_parseDateCached](input) {
      let minOrMaxDateChanged = !dart.equals(this.minDate, this[_cachedMinDate]) || !dart.equals(this.maxDate, this[_cachedMaxDate]);
      if (minOrMaxDateChanged) {
        this[_cachedMinDate] = this.minDate;
        this[_cachedMaxDate] = this.maxDate;
      }
      if (input != this[_cachedInput] || input[$isNotEmpty] && minOrMaxDateChanged) {
        this[_cachedResult] = this[_parseDate](input, {setAsCurrent: false});
        this[_cachedInput] = input;
      }
      return this[_cachedResult];
    }
    [_parseDate](input, opts) {
      let setAsCurrent = opts && 'setAsCurrent' in opts ? opts.setAsCurrent : false;
      if (input[$trim]()[$isEmpty]) {
        this[_lastParse] = null;
        if (dart.test(this[_input].required)) {
          return this.invalidDateMsg;
        }
      } else {
        if (dart.test(this.isMonthInput)) {
          let l = this[_parseDateUsingFormatList](input, this[_inputFormats]);
          let l$ = l != null ? l : this[_parseDateUsingFormatList](input, this[_monthInputFormatsWithoutDay]);
          this[_lastParse] = l$ != null ? l$ : this[_guessYear](this[_parseDateUsingFormatList](input, this[_monthInputFormatsMonthOnly]));
        } else {
          let l$0 = this[_parseDateUsingFormatList](input, this[_inputFormats]);
          this[_lastParse] = l$0 != null ? l$0 : this[_guessYear](this[_parseDateUsingFormatList](input, this[_dayInputFormatsWithoutYear]));
        }
        if (this[_lastParse] == null) {
          return this.invalidDateMsg;
        }
      }
      if (this[_lastParse] != null && dart.notNull(this[_lastParse].year) < 100) {
        this[_lastParse] = new model__date__date.Date.new(this[_guessCentury](this[_lastParse].year), this[_lastParse].month, this[_lastParse].day);
      }
      return this[_trySetDate](this[_lastParse], {setAsCurrent: setAsCurrent});
    }
    [_trySetDate](date, opts) {
      let setAsCurrent = opts && 'setAsCurrent' in opts ? opts.setAsCurrent : false;
      if (dart.test(setAsCurrent)) {
        this[_input].inputText = (() => {
          let l = date == null ? null : date.format(this.dateFormat);
          return l != null ? l : '';
        })();
      }
      if (date != null) {
        if (dart.test(date['<'](this.minDate))) {
          return this.dateIsTooEarlyMsg(this.minDate.format(this.dateFormat));
        } else if (dart.test(date['>'](this.maxDate))) {
          return this.dateIsTooLateMsg(this.maxDate.format(this.dateFormat));
        }
      }
      if (dart.test(setAsCurrent)) {
        if (dart.test(this.isMonthInput) && date != null && this[_date] != null && date.month == this[_date].month && date.year == this[_date].year) {
          date = this[_date];
        } else {
          this[_date] = date;
        }
        this[_controller].add(date);
      }
      return null;
    }
    [_guessCentury](year, opts) {
      let lookahead = opts && 'lookahead' in opts ? opts.lookahead : 20;
      let currentYear = this[_clock].now().year;
      let currentCentury = (dart.notNull(currentYear) / 100)[$truncate]();
      let guess = dart.notNull(year) + currentCentury * 100;
      if (guess - dart.notNull(currentYear) > dart.notNull(lookahead)) {
        guess = guess - 100;
      }
      return guess;
    }
    [_guessYear](date) {
      if (date == null) return null;
      let thisYear = new model__date__date.Date.new(this[_clock].now().year, date.month, date.day);
      for (let candidate of JSArrayOfDate().of([thisYear, thisYear.add({years: 1}), thisYear.add({years: -1})])) {
        if (dart.test(candidate['>='](this.minDate)) && dart.test(candidate['<='](this.maxDate))) {
          return candidate;
        }
      }
      return thisYear;
    }
    get invalidDateMsg() {
      return intl$.Intl.message('Enter a date', {name: 'invalidDateMsg', meaning: 'Error message', desc: 'Displayed when the user types text into a date input field which ' + 'isn\'t recognized as a valid date.'});
    }
    dateIsTooEarlyMsg(minimumDate) {
      return intl$.Intl.message(dart.str`Enter ${minimumDate} or later`, {name: 'dateIsTooEarlyMsg', args: [minimumDate], examples: const$ || (const$ = dart.constMap(core.String, dart.dynamic, ['minimumDate', 'Jan 1, 2005'])), meaning: 'Error message', desc: 'Displayed when the user enters a valid date, but it\'s before the ' + 'minimum date accepted by the date input field.'});
    }
    dateIsTooLateMsg(maximumDate) {
      return intl$.Intl.message(dart.str`Enter ${maximumDate} or earlier`, {name: 'dateIsTooLateMsg', args: [maximumDate], examples: const$0 || (const$0 = dart.constMap(core.String, dart.dynamic, ['maximumDate', 'Dec 31, 2025'])), meaning: 'Error message', desc: 'Displayed when the user enters a valid date, but it\'s after the ' + 'maximum date accepted by the date input field.'});
    }
  };
  (material_datepicker__date_input.DateInputDirective.new = function(clock, legacyClock, input) {
    this[_inputFormats] = JSArrayOfDateFormat().of([new intl$.DateFormat.yMMMd(), new intl$.DateFormat.yMd(), new intl$.DateFormat.yMEd(), new intl$.DateFormat.yMMMEd(), new intl$.DateFormat.yMMMMd(), new intl$.DateFormat.yMMMMEEEEd(), new intl$.DateFormat.new('yyyy-MM-dd')]);
    this[_dayInputFormatsWithoutYear] = JSArrayOfDateFormat().of([new intl$.DateFormat.MMMd(), new intl$.DateFormat.Md(), new intl$.DateFormat.MEd(), new intl$.DateFormat.MMMEd(), new intl$.DateFormat.MMMMd(), new intl$.DateFormat.MMMMEEEEd()]);
    this[_monthInputFormatsWithoutDay] = JSArrayOfDateFormat().of([new intl$.DateFormat.yMMM(), new intl$.DateFormat.yM(), new intl$.DateFormat.yMMMM(), new intl$.DateFormat.new('yyyy-MM')]);
    this[_monthInputFormatsMonthOnly] = JSArrayOfDateFormat().of([new intl$.DateFormat.MMM(), new intl$.DateFormat.M(), new intl$.DateFormat.MMMM()]);
    this[_defaultMonthFormat] = new intl$.DateFormat.yMMM();
    this[_defaultDayFormat] = new intl$.DateFormat.yMMMd();
    this[_dateFormat] = null;
    this[_maxDate] = new model__date__date.Date.new(9999, core.DateTime.DECEMBER, 31);
    this[_minDate] = new model__date__date.Date.new(1000, core.DateTime.JANUARY, 1);
    this[_date] = null;
    this[_isRangeEnd] = false;
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_controller] = StreamControllerOfDate().broadcast();
    this[isMonthInput] = false;
    this[_cachedResult] = null;
    this[_cachedInput] = '';
    this[_cachedMinDate] = null;
    this[_cachedMaxDate] = null;
    this[_lastParse] = null;
    this[_input] = input;
    this[_clock] = clock != null ? clock : legacyClock;
    this[_disposer].addStreamSubscription(core.String, this[_input].onChange.listen(dart.fn(input => this[_parseDate](input, {setAsCurrent: true}), StringToString())));
    this[_input].checkValid = dart.fn(input => this[_parseDateCached](input), StringToString());
    this[_input].requiredErrorMsg = this.invalidDateMsg;
  }).prototype = material_datepicker__date_input.DateInputDirective.prototype;
  dart.addTypeTests(material_datepicker__date_input.DateInputDirective);
  const isMonthInput = Symbol("DateInputDirective.isMonthInput");
  material_datepicker__date_input.DateInputDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_datepicker__date_input.DateInputDirective, () => ({
    __proto__: dart.getMethods(material_datepicker__date_input.DateInputDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_clampDate]: dart.fnType(model__date__date.Date, [model__date__date.Date]),
    [_parseDateUsingFormatList]: dart.fnType(model__date__date.Date, [core.String, ListOfDateFormat()]),
    [_parseDateCached]: dart.fnType(core.String, [core.String]),
    [_parseDate]: dart.fnType(core.String, [core.String], {setAsCurrent: core.bool}),
    [_trySetDate]: dart.fnType(core.String, [model__date__date.Date], {setAsCurrent: core.bool}),
    [_guessCentury]: dart.fnType(core.int, [core.int], {lookahead: core.int}),
    [_guessYear]: dart.fnType(model__date__date.Date, [model__date__date.Date]),
    dateIsTooEarlyMsg: dart.fnType(core.String, [core.String]),
    dateIsTooLateMsg: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(material_datepicker__date_input.DateInputDirective, () => ({
    __proto__: dart.getGetters(material_datepicker__date_input.DateInputDirective.__proto__),
    dateFormat: dart.fnType(intl$.DateFormat, []),
    maxDate: dart.fnType(model__date__date.Date, []),
    minDate: dart.fnType(model__date__date.Date, []),
    date: dart.fnType(model__date__date.Date, []),
    dateChange: dart.fnType(async.Stream$(model__date__date.Date), []),
    invalidDateMsg: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(material_datepicker__date_input.DateInputDirective, () => ({
    __proto__: dart.getSetters(material_datepicker__date_input.DateInputDirective.__proto__),
    dateFormat: dart.fnType(dart.void, [intl$.DateFormat]),
    maxDate: dart.fnType(dart.void, [model__date__date.Date]),
    minDate: dart.fnType(dart.void, [model__date__date.Date]),
    date: dart.fnType(dart.void, [model__date__date.Date]),
    rangeEnd: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__date_input.DateInputDirective, () => ({
    __proto__: dart.getFields(material_datepicker__date_input.DateInputDirective.__proto__),
    [_inputFormats]: dart.finalFieldType(ListOfDateFormat()),
    [_dayInputFormatsWithoutYear]: dart.finalFieldType(ListOfDateFormat()),
    [_monthInputFormatsWithoutDay]: dart.finalFieldType(ListOfDateFormat()),
    [_monthInputFormatsMonthOnly]: dart.finalFieldType(ListOfDateFormat()),
    [_defaultMonthFormat]: dart.finalFieldType(intl$.DateFormat),
    [_defaultDayFormat]: dart.finalFieldType(intl$.DateFormat),
    [_dateFormat]: dart.fieldType(intl$.DateFormat),
    [_maxDate]: dart.fieldType(model__date__date.Date),
    [_minDate]: dart.fieldType(model__date__date.Date),
    [_date]: dart.fieldType(model__date__date.Date),
    [_isRangeEnd]: dart.fieldType(core.bool),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_controller]: dart.finalFieldType(StreamControllerOfDate()),
    isMonthInput: dart.fieldType(core.bool),
    [_clock]: dart.finalFieldType(time$.Clock),
    [_input]: dart.finalFieldType(material_input__material_input.MaterialInputComponent),
    [_cachedResult]: dart.fieldType(core.String),
    [_cachedInput]: dart.fieldType(core.String),
    [_cachedMinDate]: dart.fieldType(model__date__date.Date),
    [_cachedMaxDate]: dart.fieldType(model__date__date.Date),
    [_lastParse]: dart.fieldType(model__date__date.Date)
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/date_input.ddc", {
    "package:angular_components/material_datepicker/date_input.dart": material_datepicker__date_input
  }, '{"version":3,"sourceRoot":"","sources":["date_input.dart"],"names":[],"mappings":"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","file":"date_input.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_input: material_datepicker__date_input
  };
});

//# sourceMappingURL=date_input.ddc.js.map
