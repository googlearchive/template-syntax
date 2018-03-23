define(['dart_sdk', 'packages/angular_components/material_datepicker/comparison', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/model/observable/observable', 'packages/angular_components/model/date/date', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_datepicker/range', 'packages/angular_components/src/material_datepicker/sequential'], function(dart_sdk, comparison, calendar, observable, date, disposer, range, sequential) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__comparison = comparison.material_datepicker__comparison;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const model__observable__observable = observable.model__observable__observable;
  const model__date__date = date.model__date__date;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const material_datepicker__range = range.material_datepicker__range;
  const src__material_datepicker__sequential = sequential.src__material_datepicker__sequential;
  const _root = Object.create(null);
  const src__material_datepicker__date_range_editor_model = Object.create(_root);
  const $contains = dartx.contains;
  const $add = dartx.add;
  let ObservableReferenceOfDatepickerComparison = () => (ObservableReferenceOfDatepickerComparison = dart.constFn(model__observable__observable.ObservableReference$(material_datepicker__comparison.DatepickerComparison)))();
  let ObservableReferenceOfCalendarState = () => (ObservableReferenceOfCalendarState = dart.constFn(model__observable__observable.ObservableReference$(material_datepicker__calendar.CalendarState)))();
  let ObservableReferenceOfDateRange = () => (ObservableReferenceOfDateRange = dart.constFn(model__observable__observable.ObservableReference$(model__date__date.DateRange)))();
  let StreamControllerOfDateRangeChange = () => (StreamControllerOfDateRangeChange = dart.constFn(async.StreamController$(src__material_datepicker__date_range_editor_model.DateRangeChange)))();
  let JSArrayOfComparisonOption = () => (JSArrayOfComparisonOption = dart.constFn(_interceptors.JSArray$(src__material_datepicker__date_range_editor_model.ComparisonOption)))();
  let ObservableReferenceOfbool = () => (ObservableReferenceOfbool = dart.constFn(model__observable__observable.ObservableReference$(core.bool)))();
  let ChangeOfCalendarState = () => (ChangeOfCalendarState = dart.constFn(model__observable__observable.Change$(material_datepicker__calendar.CalendarState)))();
  let SequentialOfDatepickerDateRange = () => (SequentialOfDatepickerDateRange = dart.constFn(src__material_datepicker__sequential.Sequential$(material_datepicker__range.DatepickerDateRange)))();
  let ListOfComparisonOption = () => (ListOfComparisonOption = dart.constFn(core.List$(src__material_datepicker__date_range_editor_model.ComparisonOption)))();
  src__material_datepicker__date_range_editor_model.ComparisonOption = class ComparisonOption extends core.Object {
    toString() {
      return {
        0: "ComparisonOption.previousPeriod",
        1: "ComparisonOption.samePeriodLastYear",
        2: "ComparisonOption.custom"
      }[this.index];
    }
  };
  (src__material_datepicker__date_range_editor_model.ComparisonOption.new = function(x) {
    this.index = x;
  }).prototype = src__material_datepicker__date_range_editor_model.ComparisonOption.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.ComparisonOption);
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.ComparisonOption, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.ComparisonOption.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__material_datepicker__date_range_editor_model.ComparisonOption, ['toString']);
  src__material_datepicker__date_range_editor_model.ComparisonOption.previousPeriod = dart.const(new src__material_datepicker__date_range_editor_model.ComparisonOption.new(0));
  src__material_datepicker__date_range_editor_model.ComparisonOption.samePeriodLastYear = dart.const(new src__material_datepicker__date_range_editor_model.ComparisonOption.new(1));
  src__material_datepicker__date_range_editor_model.ComparisonOption.custom = dart.const(new src__material_datepicker__date_range_editor_model.ComparisonOption.new(2));
  src__material_datepicker__date_range_editor_model.ComparisonOption.values = dart.constList([src__material_datepicker__date_range_editor_model.ComparisonOption.previousPeriod, src__material_datepicker__date_range_editor_model.ComparisonOption.samePeriodLastYear, src__material_datepicker__date_range_editor_model.ComparisonOption.custom], src__material_datepicker__date_range_editor_model.ComparisonOption);
  src__material_datepicker__date_range_editor_model.Action = class Action extends core.Object {
    toString() {
      return {
        0: "Action.dragStart",
        1: "Action.drag",
        2: "Action.dragEnd",
        3: "Action.button",
        4: "Action.textEntry",
        5: "Action.click",
        6: "Action.preview",
        7: "Action.cancel"
      }[this.index];
    }
  };
  (src__material_datepicker__date_range_editor_model.Action.new = function(x) {
    this.index = x;
  }).prototype = src__material_datepicker__date_range_editor_model.Action.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.Action);
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.Action, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.Action.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__material_datepicker__date_range_editor_model.Action, ['toString']);
  src__material_datepicker__date_range_editor_model.Action.dragStart = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(0));
  src__material_datepicker__date_range_editor_model.Action.drag = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(1));
  src__material_datepicker__date_range_editor_model.Action.dragEnd = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(2));
  src__material_datepicker__date_range_editor_model.Action.button = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(3));
  src__material_datepicker__date_range_editor_model.Action.textEntry = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(4));
  src__material_datepicker__date_range_editor_model.Action.click = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(5));
  src__material_datepicker__date_range_editor_model.Action.preview = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(6));
  src__material_datepicker__date_range_editor_model.Action.cancel = dart.const(new src__material_datepicker__date_range_editor_model.Action.new(7));
  src__material_datepicker__date_range_editor_model.Action.values = dart.constList([src__material_datepicker__date_range_editor_model.Action.dragStart, src__material_datepicker__date_range_editor_model.Action.drag, src__material_datepicker__date_range_editor_model.Action.dragEnd, src__material_datepicker__date_range_editor_model.Action.button, src__material_datepicker__date_range_editor_model.Action.textEntry, src__material_datepicker__date_range_editor_model.Action.click, src__material_datepicker__date_range_editor_model.Action.preview, src__material_datepicker__date_range_editor_model.Action.cancel], src__material_datepicker__date_range_editor_model.Action);
  src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration = class DateRangePickerConfiguration extends core.Object {
    toString() {
      return {
        0: "DateRangePickerConfiguration.basic",
        1: "DateRangePickerConfiguration.predefinedRangesOnly",
        2: "DateRangePickerConfiguration.fullyLoaded"
      }[this.index];
    }
  };
  (src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.new = function(x) {
    this.index = x;
  }).prototype = src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration);
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration, ['toString']);
  src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.basic = dart.const(new src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.new(0));
  src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.predefinedRangesOnly = dart.const(new src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.new(1));
  src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.fullyLoaded = dart.const(new src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.new(2));
  src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.values = dart.constList([src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.basic, src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.predefinedRangesOnly, src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.fullyLoaded], src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration);
  src__material_datepicker__date_range_editor_model.HasComparisonRange = class HasComparisonRange extends core.Object {
    get comparisonEnabled() {
      return this[comparisonEnabled];
    }
    set comparisonEnabled(value) {
      this[comparisonEnabled] = value;
    }
    get comparisonOption() {
      return this[comparisonOption];
    }
    set comparisonOption(value) {
      this[comparisonOption] = value;
    }
  };
  (src__material_datepicker__date_range_editor_model.HasComparisonRange.new = function() {
    this[comparisonEnabled] = null;
    this[comparisonOption] = null;
  }).prototype = src__material_datepicker__date_range_editor_model.HasComparisonRange.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.HasComparisonRange);
  const comparisonEnabled = Symbol("HasComparisonRange.comparisonEnabled");
  const comparisonOption = Symbol("HasComparisonRange.comparisonOption");
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.HasComparisonRange, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.HasComparisonRange.__proto__),
    comparisonEnabled: dart.fieldType(core.bool),
    comparisonOption: dart.fieldType(src__material_datepicker__date_range_editor_model.ComparisonOption)
  }));
  src__material_datepicker__date_range_editor_model.DateRangeChange = class DateRangeChange extends core.Object {
    get date() {
      return this[date$];
    }
    set date(value) {
      super.date = value;
    }
    get cause() {
      return this[cause$];
    }
    set cause(value) {
      super.cause = value;
    }
    toString() {
      return dart.str`[${this.date}] with cause ${this.cause}`;
    }
  };
  (src__material_datepicker__date_range_editor_model.DateRangeChange.new = function(date, cause) {
    this[date$] = date;
    this[cause$] = cause;
  }).prototype = src__material_datepicker__date_range_editor_model.DateRangeChange.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.DateRangeChange);
  const date$ = Symbol("DateRangeChange.date");
  const cause$ = Symbol("DateRangeChange.cause");
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.DateRangeChange, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.DateRangeChange.__proto__),
    date: dart.finalFieldType(material_datepicker__comparison.DatepickerComparison),
    cause: dart.finalFieldType(src__material_datepicker__date_range_editor_model.Action)
  }));
  dart.defineExtensionMethods(src__material_datepicker__date_range_editor_model.DateRangeChange, ['toString']);
  src__material_datepicker__date_range_editor_model.ModelState = class ModelState extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get calendarState() {
      return this[calendarState$];
    }
    set calendarState(value) {
      super.calendarState = value;
    }
    get comparisonEnabled() {
      return this[comparisonEnabled$];
    }
    set comparisonEnabled(value) {
      super.comparisonEnabled = value;
    }
    get comparisonOption() {
      return this[comparisonOption$];
    }
    set comparisonOption(value) {
      super.comparisonOption = value;
    }
  };
  (src__material_datepicker__date_range_editor_model.ModelState.new = function(value, calendarState, comparisonEnabled, comparisonOption) {
    this[value$] = value;
    this[calendarState$] = calendarState;
    this[comparisonEnabled$] = comparisonEnabled;
    this[comparisonOption$] = comparisonOption;
  }).prototype = src__material_datepicker__date_range_editor_model.ModelState.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.ModelState);
  const value$ = Symbol("ModelState.value");
  const calendarState$ = Symbol("ModelState.calendarState");
  const comparisonEnabled$ = Symbol("ModelState.comparisonEnabled");
  const comparisonOption$ = Symbol("ModelState.comparisonOption");
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.ModelState, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.ModelState.__proto__),
    value: dart.finalFieldType(material_datepicker__comparison.DatepickerComparison),
    calendarState: dart.finalFieldType(material_datepicker__calendar.CalendarState),
    comparisonEnabled: dart.finalFieldType(core.bool),
    comparisonOption: dart.finalFieldType(src__material_datepicker__date_range_editor_model.ComparisonOption)
  }));
  dart.defineLazy(src__material_datepicker__date_range_editor_model, {
    /*src__material_datepicker__date_range_editor_model._rangeId*/get _rangeId() {
      return 'range';
    },
    /*src__material_datepicker__date_range_editor_model._comparisonId*/get _comparisonId() {
      return 'comparison';
    }
  });
  const _ref = Symbol('_ref');
  const _changes = Symbol('_changes');
  const _disposer = Symbol('_disposer');
  const _validComparisonOptions = Symbol('_validComparisonOptions');
  const _comparisonEnabled = Symbol('_comparisonEnabled');
  const _comparisonOption = Symbol('_comparisonOption');
  const _customComparisonRange = Symbol('_customComparisonRange');
  const _comparisonTitle = Symbol('_comparisonTitle');
  const _lastCause = Symbol('_lastCause');
  const _updateHasNextPrev = Symbol('_updateHasNextPrev');
  const _updateValidComparisonOptions = Symbol('_updateValidComparisonOptions');
  const _setEverything = Symbol('_setEverything');
  const _setPrimaryRange = Symbol('_setPrimaryRange');
  const _setComparisonRange = Symbol('_setComparisonRange');
  const _onCalendarChange = Symbol('_onCalendarChange');
  const _changeValue = Symbol('_changeValue');
  const _withComparison = Symbol('_withComparison');
  const _setComparisonOption = Symbol('_setComparisonOption');
  const _selectionDifferent = Symbol('_selectionDifferent');
  const _buildComparison = Symbol('_buildComparison');
  const _selectionAction = Symbol('_selectionAction');
  const _getValidComparisonOptions = Symbol('_getValidComparisonOptions');
  src__material_datepicker__date_range_editor_model.DateRangeEditorModel = class DateRangeEditorModel extends core.Object {
    get rangeId() {
      return this[rangeId];
    }
    set rangeId(value) {
      super.rangeId = value;
    }
    get comparisonId() {
      return this[comparisonId];
    }
    set comparisonId(value) {
      super.comparisonId = value;
    }
    get calendar() {
      return this[calendar$];
    }
    set calendar(value) {
      super.calendar = value;
    }
    get range() {
      return this[range$];
    }
    set range(value) {
      super.range = value;
    }
    get comparison() {
      return this[comparison$];
    }
    set comparison(value) {
      super.comparison = value;
    }
    get validComparisonOptions() {
      return this[_validComparisonOptions];
    }
    get minDate() {
      return this[minDate$];
    }
    set minDate(value) {
      this[minDate$] = value;
    }
    get maxDate() {
      return this[maxDate$];
    }
    set maxDate(value) {
      this[maxDate$] = value;
    }
    get requireFullPeriods() {
      return this[requireFullPeriods$];
    }
    set requireFullPeriods(value) {
      this[requireFullPeriods$] = value;
    }
    get basic() {
      return this[basic$];
    }
    set basic(value) {
      this[basic$] = value;
    }
    get shouldShowPredefinedList() {
      return this[shouldShowPredefinedList];
    }
    set shouldShowPredefinedList(value) {
      this[shouldShowPredefinedList] = value;
    }
    get shouldShowCustomDateRangeColumn() {
      return this[shouldShowCustomDateRangeColumn];
    }
    set shouldShowCustomDateRangeColumn(value) {
      this[shouldShowCustomDateRangeColumn] = value;
    }
    get value() {
      return this[_ref].value;
    }
    set value(val) {
      this[_ref].value = val;
      if (dart.test(this[_comparisonEnabled])) {
        this[_updateValidComparisonOptions]();
      }
    }
    get changes() {
      return this[_changes].stream;
    }
    get prevRange() {
      let t = this.value;
      let t$ = t == null ? null : t.range;
      return t$ == null ? null : t$.prev;
    }
    get comparisonEnabled() {
      return this[_comparisonEnabled];
    }
    set comparisonEnabled(enabled) {
      this[_comparisonEnabled] = enabled;
      this.calendar.value = this.calendar.value.select(this.rangeId, {previewAnchoredAtStart: this.calendar.value.previewAnchoredAtStart});
      if ((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })() != null) {
        this[_changeValue](this[_withComparison](this.value.range), src__material_datepicker__date_range_editor_model.Action.button);
      }
    }
    get comparisonOption() {
      return this[_comparisonOption];
    }
    set comparisonOption(option) {
      if (dart.test(this.basic) && option === src__material_datepicker__date_range_editor_model.ComparisonOption.custom) {
        this.shouldShowCustomDateRangeColumn = true;
        this.shouldShowPredefinedList = false;
      }
      this[_setComparisonOption](option);
      this.calendar.value = this.calendar.value.select(this.rangeId, {previewAnchoredAtStart: this.calendar.value.previewAnchoredAtStart});
    }
    get comparisonSupported() {
      return src__material_datepicker__date_range_editor_model.DateRangeEditorModel._rangeSupportsComparison((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })());
    }
    get rangeTitle() {
      let t = this.value;
      let t$ = t == null ? null : t.range;
      let l = t$ == null ? null : t$.title;
      return l != null ? l : '';
    }
    get comparisonTitle() {
      return this[_comparisonTitle];
    }
    save() {
      return new src__material_datepicker__date_range_editor_model.ModelState.new(this.value, this.calendar.value, this.comparisonEnabled, this.comparisonOption);
    }
    restore(state) {
      if (state == null) return;
      this[_changeValue](state.value, src__material_datepicker__date_range_editor_model.Action.cancel);
      this.calendar.value = state.calendarState;
      this.comparisonEnabled = state.comparisonEnabled;
      this.comparisonOption = state.comparisonOption;
    }
    selectRange(range) {
      return this[_changeValue](this[_withComparison](range), src__material_datepicker__date_range_editor_model.Action.button);
    }
    get hasNext() {
      return this[hasNext];
    }
    set hasNext(value) {
      this[hasNext] = value;
    }
    next() {
      let t = this.value;
      let t$ = t == null ? null : t.range;
      let next = t$ == null ? null : t$.next;
      if (next == null) return null;
      let amt = model__date__date.daysSpanned(this.value.range.start, next.start, {inclusive: false});
      if (this[_customComparisonRange] != null) {
        this[_customComparisonRange] = material_datepicker__range.DatepickerDateRange.custom(this[_customComparisonRange].start.add({days: amt}), this[_customComparisonRange].end.add({days: amt}));
      }
      this[_changeValue](this[_withComparison](next), src__material_datepicker__date_range_editor_model.Action.button);
      return next;
    }
    get hasPrev() {
      return this[hasPrev];
    }
    set hasPrev(value) {
      this[hasPrev] = value;
    }
    prev() {
      let t = this.value;
      let t$ = t == null ? null : t.range;
      let prev = t$ == null ? null : t$.prev;
      if (prev == null) return null;
      let amt = model__date__date.daysSpanned(prev.start, this.value.range.start, {inclusive: false});
      if (this[_customComparisonRange] != null) {
        this[_customComparisonRange] = material_datepicker__range.DatepickerDateRange.custom(this[_customComparisonRange].start.add({days: -dart.notNull(amt)}), this[_customComparisonRange].end.add({days: -dart.notNull(amt)}));
      }
      this[_changeValue](this[_withComparison](prev), src__material_datepicker__date_range_editor_model.Action.button);
      return prev;
    }
    dispose() {
      this[_disposer].dispose();
      this[_ref].dispose();
      this.calendar.dispose();
      this.range.dispose();
      this.comparison.dispose();
    }
    [_changeValue](val, cause) {
      val = new material_datepicker__comparison.DatepickerComparison.reclamp(val, this.minDate, this.maxDate);
      if (dart.equals(this.value, val) && (cause == null || cause == this[_lastCause])) return;
      this.value = val;
      this[_lastCause] = cause;
      this[_changes].add(new src__material_datepicker__date_range_editor_model.DateRangeChange.new(val, cause));
    }
    [_updateHasNextPrev](newValue) {
      let t = newValue == null ? null : newValue.range;
      let prevRange = t == null ? null : t.prev;
      let t$ = newValue == null ? null : newValue.range;
      let nextRange = t$ == null ? null : t$.next;
      if (dart.test(this.requireFullPeriods)) {
        this.hasPrev.value = prevRange != null && dart.test(model__date__date.rangeContainsRange(new model__date__date.DateRange.new(this.minDate, this.maxDate), prevRange.unclamped()));
        this.hasNext.value = nextRange != null && dart.test(model__date__date.rangeContainsRange(new model__date__date.DateRange.new(this.minDate, this.maxDate), nextRange.unclamped()));
      } else {
        this.hasPrev.value = prevRange != null;
        this.hasNext.value = nextRange != null;
      }
    }
    [_setEverything](newValue) {
      this[_updateHasNextPrev](newValue);
      if (newValue == null) return;
      let range = newValue.range;
      if (range == null) {
        this.range.value = null;
        this.calendar.value = this.calendar.value.clearCurrentSelection();
      } else {
        this.range.value = range.asPlainRange();
        if (dart.test(this[_selectionDifferent](this.calendar.value, this.rangeId, range)) || !dart.test(this.calendar.value.has(this.rangeId))) {
          this.calendar.value = this.calendar.value.setSelection(new material_datepicker__calendar.CalendarSelection.new(this.rangeId, range.start, range.end), {previewAnchoredAtStart: this.calendar.value.previewAnchoredAtStart, cause: material_datepicker__calendar.CausedBy.external});
        }
      }
      let comparison = newValue.comparison;
      if (comparison != null) {
        if (dart.test(this[_selectionDifferent](this.calendar.value, this.comparisonId, comparison)) || !dart.test(this.calendar.value.has(this.comparisonId))) {
          this.calendar.value = this.calendar.value.setSelection(new material_datepicker__calendar.CalendarSelection.new(this.comparisonId, comparison.start, comparison.end), {cause: material_datepicker__calendar.CausedBy.external});
        }
      } else {
        this.calendar.value = this.calendar.value.clearSelection(this.comparisonId);
      }
      this[_comparisonEnabled] = newValue.isComparisonEnabled;
      if (dart.test(this[_comparisonEnabled])) {
        if (dart.test(newValue.comparesToPreviousPeriod())) {
          this[_comparisonOption] = src__material_datepicker__date_range_editor_model.ComparisonOption.previousPeriod;
        } else if (dart.test(newValue.comparesToSamePeriodLastYear())) {
          this[_comparisonOption] = src__material_datepicker__date_range_editor_model.ComparisonOption.samePeriodLastYear;
        } else {
          this[_comparisonOption] = src__material_datepicker__date_range_editor_model.ComparisonOption.custom;
        }
        this[_updateValidComparisonOptions]();
      }
      let hypotheticalComparison = comparison != null ? comparison : this[_buildComparison](range).comparison;
      if (hypotheticalComparison == null) return;
      this.comparison.value = hypotheticalComparison.asPlainRange();
      this[_customComparisonRange] = material_datepicker__range.DatepickerDateRange.custom(hypotheticalComparison.start, hypotheticalComparison.end);
      this[_comparisonTitle] = hypotheticalComparison.title;
    }
    [_setPrimaryRange](range) {
      if (dart.equals((() => {
        let t = this.value;
        let t$ = t == null ? null : t.range;
        return t$ == null ? null : t$.asPlainRange();
      })(), range)) return;
      this[_changeValue](this[_withComparison](material_datepicker__range.DatepickerDateRange.custom(range.start, range.end)), src__material_datepicker__date_range_editor_model.Action.textEntry);
    }
    [_setComparisonRange](range) {
      if (dart.equals((() => {
        let t = this[_customComparisonRange];
        return t == null ? null : t.asPlainRange();
      })(), range)) return;
      this.comparisonOption = src__material_datepicker__date_range_editor_model.ComparisonOption.custom;
      this[_customComparisonRange] = material_datepicker__range.DatepickerDateRange.custom(range == null ? null : range.start, range == null ? null : range.end);
      this[_changeValue](this[_withComparison]((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })()), src__material_datepicker__date_range_editor_model.Action.textEntry);
    }
    [_onCalendarChange](change) {
      let action = this[_selectionAction](change.previous.cause, change.next.cause);
      let newState = change.next;
      let t = this.value;
      let selectedRange = t == null ? null : t.range;
      if (newState.currentSelection == this.rangeId && dart.test(this[_selectionDifferent](newState, this.rangeId, selectedRange))) {
        selectedRange = material_datepicker__range.DatepickerDateRange.custom(newState.selection(this.rangeId).start, newState.selection(this.rangeId).end);
      } else if (newState.currentSelection == this.comparisonId && dart.test(this[_selectionDifferent](newState, this.comparisonId, this[_customComparisonRange]))) {
        this[_setComparisonOption](src__material_datepicker__date_range_editor_model.ComparisonOption.custom);
        this[_customComparisonRange] = material_datepicker__range.DatepickerDateRange.custom(newState.selection(this.comparisonId).start, newState.selection(this.comparisonId).end);
      }
      if (selectedRange != null) {
        this[_changeValue](this[_withComparison](selectedRange), action);
      }
      if (change.next.cause === material_datepicker__calendar.CausedBy.rangeConfirm) {
        let selectId = dart.test(this[_comparisonEnabled]) && this[_comparisonOption] === src__material_datepicker__date_range_editor_model.ComparisonOption.custom && this.calendar.value.currentSelection == this.rangeId ? this.comparisonId : this.rangeId;
        this.calendar.value = this.calendar.value.select(selectId, {previewAnchoredAtStart: this.calendar.value.previewAnchoredAtStart});
      }
    }
    [_setComparisonOption](option) {
      if (this[_comparisonOption] == option) return;
      this[_comparisonOption] = option;
      if ((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })() != null) {
        this[_changeValue](this[_withComparison](this.value.range), src__material_datepicker__date_range_editor_model.Action.button);
        if (!dart.test(this[_comparisonEnabled])) {
          this[_setEverything](this.value);
        }
      }
    }
    [_selectionAction](oldCause, newCause) {
      if (newCause === material_datepicker__calendar.CausedBy.preview) {
        return src__material_datepicker__date_range_editor_model.Action.preview;
      } else if (oldCause === material_datepicker__calendar.CausedBy.drag && newCause === material_datepicker__calendar.CausedBy.drag) {
        return src__material_datepicker__date_range_editor_model.Action.drag;
      } else if (oldCause === material_datepicker__calendar.CausedBy.drag && newCause === material_datepicker__calendar.CausedBy.rangeConfirm) {
        return src__material_datepicker__date_range_editor_model.Action.dragEnd;
      } else if (newCause === material_datepicker__calendar.CausedBy.drag) {
        return src__material_datepicker__date_range_editor_model.Action.dragStart;
      } else if (newCause === material_datepicker__calendar.CausedBy.endpointConfirm || newCause === material_datepicker__calendar.CausedBy.rangeConfirm) {
        return src__material_datepicker__date_range_editor_model.Action.click;
      }
      return null;
    }
    [_selectionDifferent](state, id, range) {
      if (!dart.test(state.has(id))) return false;
      if (range == null) return true;
      return !dart.equals(range.start, state.selection(id).start) || !dart.equals(range.end, state.selection(id).end);
    }
    [_withComparison](range) {
      return dart.test(this[_comparisonEnabled]) ? this[_buildComparison](range) : new material_datepicker__comparison.DatepickerComparison.noComparison(range);
    }
    static _rangeSupportsComparison(range) {
      return range != null && !dart.test(range.isAllTime);
    }
    [_buildComparison](range) {
      if (!dart.test(src__material_datepicker__date_range_editor_model.DateRangeEditorModel._rangeSupportsComparison(range))) {
        return new material_datepicker__comparison.DatepickerComparison.noComparison(range);
      }
      let defaultCustomComparisonRange = material_datepicker__range.DatepickerDateRange.custom(range.start, range.start);
      let validComparisonOptions = this[_getValidComparisonOptions](range);
      if (!dart.test(validComparisonOptions[$contains](this[_comparisonOption]))) {
        return new material_datepicker__comparison.DatepickerComparison.custom(range, (() => {
          let l = this[_customComparisonRange];
          return l != null ? l : defaultCustomComparisonRange;
        })());
      }
      switch (this[_comparisonOption]) {
        case src__material_datepicker__date_range_editor_model.ComparisonOption.previousPeriod:
        {
          return new material_datepicker__comparison.DatepickerComparison.previousPeriod(range);
        }
        case src__material_datepicker__date_range_editor_model.ComparisonOption.samePeriodLastYear:
        {
          return new material_datepicker__comparison.DatepickerComparison.samePeriodLastYear(range);
        }
        case src__material_datepicker__date_range_editor_model.ComparisonOption.custom:
        {
          return new material_datepicker__comparison.DatepickerComparison.custom(range, (() => {
            let l = this[_customComparisonRange];
            return l != null ? l : defaultCustomComparisonRange;
          })());
        }
      }
      dart.throw(new core.ArgumentError.new(this[_comparisonOption]));
    }
    [_updateValidComparisonOptions]() {
      if ((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })() == null || !dart.test(src__material_datepicker__date_range_editor_model.DateRangeEditorModel._rangeSupportsComparison((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })()))) return;
      this[_validComparisonOptions] = this[_getValidComparisonOptions]((() => {
        let t = this.value;
        return t == null ? null : t.range;
      })());
      if (!dart.test(this[_validComparisonOptions][$contains](this[_comparisonOption]))) {
        this[_comparisonOption] = src__material_datepicker__date_range_editor_model.ComparisonOption.custom;
      }
    }
    [_getValidComparisonOptions](range) {
      let options = JSArrayOfComparisonOption().of([]);
      if (range == null || !dart.test(src__material_datepicker__date_range_editor_model.DateRangeEditorModel._rangeSupportsComparison(range))) {
        return options;
      }
      let previousPeriod = new material_datepicker__comparison.DatepickerComparison.previousPeriod(range);
      if ((previousPeriod.comparison == null ? null : previousPeriod.comparison.clamp({min: this.minDate, max: this.maxDate})) != null) {
        options[$add](src__material_datepicker__date_range_editor_model.ComparisonOption.previousPeriod);
      }
      let lastYear = new material_datepicker__comparison.DatepickerComparison.samePeriodLastYear(range);
      if ((lastYear.comparison == null ? null : lastYear.comparison.clamp({min: this.minDate, max: this.maxDate})) != null) {
        options[$add](src__material_datepicker__date_range_editor_model.ComparisonOption.samePeriodLastYear);
      }
      options[$add](src__material_datepicker__date_range_editor_model.ComparisonOption.custom);
      return options;
    }
  };
  (src__material_datepicker__date_range_editor_model.DateRangeEditorModel.new = function(opts) {
    let initialValue = opts && 'initialValue' in opts ? opts.initialValue : null;
    let minDate = opts && 'minDate' in opts ? opts.minDate : null;
    let maxDate = opts && 'maxDate' in opts ? opts.maxDate : null;
    let requireFullPeriods = opts && 'requireFullPeriods' in opts ? opts.requireFullPeriods : false;
    let basic = opts && 'basic' in opts ? opts.basic : false;
    this[rangeId] = "range";
    this[comparisonId] = "comparison";
    this[calendar$] = new (ObservableReferenceOfCalendarState()).new(new material_datepicker__calendar.CalendarState.empty({currentSelection: "range"}), {coalesce: true});
    this[range$] = new (ObservableReferenceOfDateRange()).new(new model__date__date.DateRange.new(null, null), {coalesce: true});
    this[comparison$] = new (ObservableReferenceOfDateRange()).new(new model__date__date.DateRange.new(null, null), {coalesce: true});
    this[_changes] = StreamControllerOfDateRangeChange().broadcast({sync: true});
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_validComparisonOptions] = JSArrayOfComparisonOption().of([]);
    this[_comparisonEnabled] = false;
    this[shouldShowPredefinedList] = true;
    this[shouldShowCustomDateRangeColumn] = true;
    this[_comparisonOption] = src__material_datepicker__date_range_editor_model.ComparisonOption.previousPeriod;
    this[_customComparisonRange] = null;
    this[_comparisonTitle] = '';
    this[_lastCause] = null;
    this[hasNext] = new (ObservableReferenceOfbool()).new(false);
    this[hasPrev] = new (ObservableReferenceOfbool()).new(false);
    this[minDate$] = minDate;
    this[maxDate$] = maxDate;
    this[requireFullPeriods$] = requireFullPeriods;
    this[basic$] = basic;
    this[_ref] = new (ObservableReferenceOfDatepickerComparison()).new(initialValue);
    this[_updateHasNextPrev](initialValue);
    this[_updateValidComparisonOptions]();
    this[_disposer].addFunction(dart.bind(this[_changes], 'close'));
    this[_disposer].addStreamSubscription(material_datepicker__comparison.DatepickerComparison, this[_ref].stream.listen(dart.bind(this, _setEverything)));
    this[_disposer].addStreamSubscription(model__date__date.DateRange, this.range.stream.listen(dart.bind(this, _setPrimaryRange)));
    this[_disposer].addStreamSubscription(model__date__date.DateRange, this.comparison.stream.listen(dart.bind(this, _setComparisonRange)));
    this[_disposer].addStreamSubscription(ChangeOfCalendarState(), this.calendar.changes.listen(dart.bind(this, _onCalendarChange)));
  }).prototype = src__material_datepicker__date_range_editor_model.DateRangeEditorModel.prototype;
  dart.addTypeTests(src__material_datepicker__date_range_editor_model.DateRangeEditorModel);
  const rangeId = Symbol("DateRangeEditorModel.rangeId");
  const comparisonId = Symbol("DateRangeEditorModel.comparisonId");
  const calendar$ = Symbol("DateRangeEditorModel.calendar");
  const range$ = Symbol("DateRangeEditorModel.range");
  const comparison$ = Symbol("DateRangeEditorModel.comparison");
  const minDate$ = Symbol("DateRangeEditorModel.minDate");
  const maxDate$ = Symbol("DateRangeEditorModel.maxDate");
  const requireFullPeriods$ = Symbol("DateRangeEditorModel.requireFullPeriods");
  const basic$ = Symbol("DateRangeEditorModel.basic");
  const shouldShowPredefinedList = Symbol("DateRangeEditorModel.shouldShowPredefinedList");
  const shouldShowCustomDateRangeColumn = Symbol("DateRangeEditorModel.shouldShowCustomDateRangeColumn");
  const hasNext = Symbol("DateRangeEditorModel.hasNext");
  const hasPrev = Symbol("DateRangeEditorModel.hasPrev");
  src__material_datepicker__date_range_editor_model.DateRangeEditorModel[dart.implements] = () => [SequentialOfDatepickerDateRange(), src__material_datepicker__date_range_editor_model.HasComparisonRange];
  dart.setMethodSignature(src__material_datepicker__date_range_editor_model.DateRangeEditorModel, () => ({
    __proto__: dart.getMethods(src__material_datepicker__date_range_editor_model.DateRangeEditorModel.__proto__),
    save: dart.fnType(src__material_datepicker__date_range_editor_model.ModelState, []),
    restore: dart.fnType(dart.void, [src__material_datepicker__date_range_editor_model.ModelState]),
    selectRange: dart.fnType(dart.void, [material_datepicker__range.DatepickerDateRange]),
    next: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    prev: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    dispose: dart.fnType(dart.void, []),
    [_changeValue]: dart.fnType(dart.void, [material_datepicker__comparison.DatepickerComparison, src__material_datepicker__date_range_editor_model.Action]),
    [_updateHasNextPrev]: dart.fnType(dart.void, [material_datepicker__comparison.DatepickerComparison]),
    [_setEverything]: dart.fnType(dart.void, [material_datepicker__comparison.DatepickerComparison]),
    [_setPrimaryRange]: dart.fnType(dart.void, [model__date__date.DateRange]),
    [_setComparisonRange]: dart.fnType(dart.void, [model__date__date.DateRange]),
    [_onCalendarChange]: dart.fnType(dart.void, [ChangeOfCalendarState()]),
    [_setComparisonOption]: dart.fnType(dart.void, [src__material_datepicker__date_range_editor_model.ComparisonOption]),
    [_selectionAction]: dart.fnType(src__material_datepicker__date_range_editor_model.Action, [material_datepicker__calendar.CausedBy, material_datepicker__calendar.CausedBy]),
    [_selectionDifferent]: dart.fnType(core.bool, [material_datepicker__calendar.CalendarState, core.String, model__date__date.DateRange]),
    [_withComparison]: dart.fnType(material_datepicker__comparison.DatepickerComparison, [material_datepicker__range.DatepickerDateRange]),
    [_buildComparison]: dart.fnType(material_datepicker__comparison.DatepickerComparison, [material_datepicker__range.DatepickerDateRange]),
    [_updateValidComparisonOptions]: dart.fnType(dart.void, []),
    [_getValidComparisonOptions]: dart.fnType(core.List$(src__material_datepicker__date_range_editor_model.ComparisonOption), [material_datepicker__range.DatepickerDateRange])
  }));
  dart.setStaticMethodSignature(src__material_datepicker__date_range_editor_model.DateRangeEditorModel, () => ({_rangeSupportsComparison: dart.fnType(core.bool, [material_datepicker__range.DatepickerDateRange])}));
  dart.setGetterSignature(src__material_datepicker__date_range_editor_model.DateRangeEditorModel, () => ({
    __proto__: dart.getGetters(src__material_datepicker__date_range_editor_model.DateRangeEditorModel.__proto__),
    validComparisonOptions: dart.fnType(core.List$(src__material_datepicker__date_range_editor_model.ComparisonOption), []),
    value: dart.fnType(material_datepicker__comparison.DatepickerComparison, []),
    changes: dart.fnType(async.Stream$(src__material_datepicker__date_range_editor_model.DateRangeChange), []),
    prevRange: dart.fnType(material_datepicker__range.DatepickerDateRange, []),
    comparisonEnabled: dart.fnType(core.bool, []),
    comparisonOption: dart.fnType(src__material_datepicker__date_range_editor_model.ComparisonOption, []),
    comparisonSupported: dart.fnType(core.bool, []),
    rangeTitle: dart.fnType(core.String, []),
    comparisonTitle: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(src__material_datepicker__date_range_editor_model.DateRangeEditorModel, () => ({
    __proto__: dart.getSetters(src__material_datepicker__date_range_editor_model.DateRangeEditorModel.__proto__),
    value: dart.fnType(dart.void, [material_datepicker__comparison.DatepickerComparison]),
    comparisonEnabled: dart.fnType(dart.void, [core.bool]),
    comparisonOption: dart.fnType(dart.void, [src__material_datepicker__date_range_editor_model.ComparisonOption])
  }));
  dart.setFieldSignature(src__material_datepicker__date_range_editor_model.DateRangeEditorModel, () => ({
    __proto__: dart.getFields(src__material_datepicker__date_range_editor_model.DateRangeEditorModel.__proto__),
    rangeId: dart.finalFieldType(core.String),
    comparisonId: dart.finalFieldType(core.String),
    [_ref]: dart.finalFieldType(ObservableReferenceOfDatepickerComparison()),
    calendar: dart.finalFieldType(ObservableReferenceOfCalendarState()),
    range: dart.finalFieldType(ObservableReferenceOfDateRange()),
    comparison: dart.finalFieldType(ObservableReferenceOfDateRange()),
    [_changes]: dart.finalFieldType(StreamControllerOfDateRangeChange()),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_validComparisonOptions]: dart.fieldType(ListOfComparisonOption()),
    minDate: dart.fieldType(model__date__date.Date),
    maxDate: dart.fieldType(model__date__date.Date),
    requireFullPeriods: dart.fieldType(core.bool),
    [_comparisonEnabled]: dart.fieldType(core.bool),
    basic: dart.fieldType(core.bool),
    shouldShowPredefinedList: dart.fieldType(core.bool),
    shouldShowCustomDateRangeColumn: dart.fieldType(core.bool),
    [_comparisonOption]: dart.fieldType(src__material_datepicker__date_range_editor_model.ComparisonOption),
    [_customComparisonRange]: dart.fieldType(material_datepicker__range.DatepickerDateRange),
    [_comparisonTitle]: dart.fieldType(core.String),
    [_lastCause]: dart.fieldType(src__material_datepicker__date_range_editor_model.Action),
    hasNext: dart.fieldType(ObservableReferenceOfbool()),
    hasPrev: dart.fieldType(ObservableReferenceOfbool())
  }));
  dart.trackLibraries("packages/angular_components/src/material_datepicker/date_range_editor_model.ddc", {
    "package:angular_components/src/material_datepicker/date_range_editor_model.dart": src__material_datepicker__date_range_editor_model
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor_model.dart"],"names":[],"mappings":"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","file":"date_range_editor_model.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__date_range_editor_model: src__material_datepicker__date_range_editor_model
  };
});

//# sourceMappingURL=date_range_editor_model.ddc.js.map
