define(['dart_sdk', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/model/observable/observable', 'packages/intl/intl', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, date, calendar, observable, intl, lifecycle_hooks, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__date__date = date.model__date__date;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const model__observable__observable = observable.model__observable__observable;
  const intl$ = intl.intl;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_datepicker__date_range_input = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  let StreamControllerOfDateRange = () => (StreamControllerOfDateRange = dart.constFn(async.StreamController$(model__date__date.DateRange)))();
  let ObservableReferenceOfCalendarState = () => (ObservableReferenceOfCalendarState = dart.constFn(model__observable__observable.ObservableReference$(material_datepicker__calendar.CalendarState)))();
  const _changeDetector = Symbol('_changeDetector');
  const _calendarStream = Symbol('_calendarStream');
  const _controller = Symbol('_controller');
  const _isClearRangeSelected = Symbol('_isClearRangeSelected');
  const _range = Symbol('_range');
  const _model = Symbol('_model');
  const _onCalendarChange = Symbol('_onCalendarChange');
  material_datepicker__date_range_input.DateRangeInputComponent = class DateRangeInputComponent extends core.Object {
    ngOnInit() {
      this[_calendarStream] = this[_model].stream.listen(dart.bind(this, _onCalendarChange));
    }
    ngOnDestroy() {
      let t = this[_calendarStream];
      t == null ? null : t.cancel();
    }
    [_onCalendarChange](state) {
      this[_changeDetector].markForCheck();
    }
    onStartFocused() {
      if (this.state.currentSelection == this.rangeId && !dart.test(this.state.previewAnchoredAtStart)) return;
      this[_model].value = this.state.select(this.rangeId, {previewAnchoredAtStart: false});
    }
    onEndFocused() {
      if (this.state.currentSelection == this.rangeId && dart.test(this.state.previewAnchoredAtStart)) return;
      this[_model].value = this.state.select(this.rangeId, {previewAnchoredAtStart: true});
    }
    get isStartActive() {
      return this.state.currentSelection == this.rangeId && dart.test(this.state.selections[$isNotEmpty]) && !dart.test(this.state.previewAnchoredAtStart);
    }
    get isEndActive() {
      return this.state.currentSelection == this.rangeId && dart.test(this.state.selections[$isNotEmpty]) && dart.test(this.state.previewAnchoredAtStart);
    }
    get rangeChange() {
      return this[_controller].stream;
    }
    set range(range) {
      if (!dart.equals(range, this[_range]) && (range == null ? null : range.start) != null && (range == null ? null : range.end) != null) {
        this[_controller].add(range);
      }
      this[_range] = range != null ? range : new model__date__date.DateRange.new(null, null);
    }
    set isClearRangeSelected(value) {
      this[_isClearRangeSelected] = value;
    }
    get isDateInputRequired() {
      return !dart.test(this[_isClearRangeSelected]);
    }
    get range() {
      return this[_range];
    }
    set state(state) {
      this[_model].value = state;
      if (this[_calendarStream] == null) this[_onCalendarChange](state);
    }
    get state() {
      return this[_model].value;
    }
    get stateChange() {
      return this[_model].stream;
    }
    get rangeId() {
      return this[rangeId];
    }
    set rangeId(value) {
      this[rangeId] = value;
    }
    get start() {
      return this.range.start;
    }
    set start(date) {
      if (!dart.equals(this.range.start, date)) {
        this.range = new model__date__date.DateRange.new(date, this.range.end);
      }
    }
    get end() {
      return this.range.end;
    }
    set end(date) {
      if (!dart.equals(this.range.end, date)) {
        this.range = new model__date__date.DateRange.new(this.range.start, date);
      }
    }
    get startMaxDate() {
      let l = this.end;
      return l != null ? l : this.maxDate;
    }
    get endMinDate() {
      let l = this.start;
      return l != null ? l : this.minDate;
    }
    get dateFormat() {
      return this[dateFormat];
    }
    set dateFormat(value) {
      this[dateFormat] = value;
    }
    get activeDateFormat() {
      return this[activeDateFormat];
    }
    set activeDateFormat(value) {
      this[activeDateFormat] = value;
    }
    get startDateFormat() {
      return dart.test(this.isStartActive) ? this.activeDateFormat : this.dateFormat;
    }
    get endDateFormat() {
      return dart.test(this.isEndActive) ? this.activeDateFormat : this.dateFormat;
    }
    get maxDate() {
      return this[maxDate];
    }
    set maxDate(value) {
      this[maxDate] = value;
    }
    get minDate() {
      return this[minDate];
    }
    set minDate(value) {
      this[minDate] = value;
    }
    get startDateMsg() {
      return intl$.Intl.message('Start date', {name: 'DateRangeInputComponent_startDateMsg', desc: 'ARIA label for the input specifying the start of the date range'});
    }
    get endDateMsg() {
      return intl$.Intl.message('End date', {name: 'DateRangeInputComponent_endDateMsg', desc: 'ARIA label for the input specifying the end of the date range'});
    }
  };
  (material_datepicker__date_range_input.DateRangeInputComponent.new = function(changeDetector) {
    this[_calendarStream] = null;
    this[_controller] = StreamControllerOfDateRange().broadcast();
    this[_isClearRangeSelected] = false;
    this[_range] = new model__date__date.DateRange.new(null, null);
    this[_model] = new (ObservableReferenceOfCalendarState()).new(new material_datepicker__calendar.CalendarState.empty(), {coalesce: true});
    this[rangeId] = null;
    this[dateFormat] = new intl$.DateFormat.yMMMd();
    this[activeDateFormat] = new intl$.DateFormat.yMd();
    this[maxDate] = new model__date__date.Date.new(9999, core.DateTime.DECEMBER, 31);
    this[minDate] = new model__date__date.Date.new(1000, core.DateTime.JANUARY, 1);
    this[_changeDetector] = changeDetector;
  }).prototype = material_datepicker__date_range_input.DateRangeInputComponent.prototype;
  dart.addTypeTests(material_datepicker__date_range_input.DateRangeInputComponent);
  const rangeId = Symbol("DateRangeInputComponent.rangeId");
  const dateFormat = Symbol("DateRangeInputComponent.dateFormat");
  const activeDateFormat = Symbol("DateRangeInputComponent.activeDateFormat");
  const maxDate = Symbol("DateRangeInputComponent.maxDate");
  const minDate = Symbol("DateRangeInputComponent.minDate");
  material_datepicker__date_range_input.DateRangeInputComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_datepicker__date_range_input.DateRangeInputComponent, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_input.DateRangeInputComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onCalendarChange]: dart.fnType(dart.void, [material_datepicker__calendar.CalendarState]),
    onStartFocused: dart.fnType(dart.void, []),
    onEndFocused: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker__date_range_input.DateRangeInputComponent, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_input.DateRangeInputComponent.__proto__),
    isStartActive: dart.fnType(core.bool, []),
    isEndActive: dart.fnType(core.bool, []),
    rangeChange: dart.fnType(async.Stream$(model__date__date.DateRange), []),
    isDateInputRequired: dart.fnType(core.bool, []),
    range: dart.fnType(model__date__date.DateRange, []),
    state: dart.fnType(material_datepicker__calendar.CalendarState, []),
    stateChange: dart.fnType(async.Stream$(material_datepicker__calendar.CalendarState), []),
    start: dart.fnType(model__date__date.Date, []),
    end: dart.fnType(model__date__date.Date, []),
    startMaxDate: dart.fnType(model__date__date.Date, []),
    endMinDate: dart.fnType(model__date__date.Date, []),
    startDateFormat: dart.fnType(intl$.DateFormat, []),
    endDateFormat: dart.fnType(intl$.DateFormat, []),
    startDateMsg: dart.fnType(core.String, []),
    endDateMsg: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(material_datepicker__date_range_input.DateRangeInputComponent, () => ({
    __proto__: dart.getSetters(material_datepicker__date_range_input.DateRangeInputComponent.__proto__),
    range: dart.fnType(dart.void, [model__date__date.DateRange]),
    isClearRangeSelected: dart.fnType(dart.void, [core.bool]),
    state: dart.fnType(dart.void, [material_datepicker__calendar.CalendarState]),
    start: dart.fnType(dart.void, [model__date__date.Date]),
    end: dart.fnType(dart.void, [model__date__date.Date])
  }));
  dart.setFieldSignature(material_datepicker__date_range_input.DateRangeInputComponent, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_input.DateRangeInputComponent.__proto__),
    [_changeDetector]: dart.fieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_calendarStream]: dart.fieldType(async.StreamSubscription),
    [_controller]: dart.finalFieldType(StreamControllerOfDateRange()),
    [_isClearRangeSelected]: dart.fieldType(core.bool),
    [_range]: dart.fieldType(model__date__date.DateRange),
    [_model]: dart.fieldType(ObservableReferenceOfCalendarState()),
    rangeId: dart.fieldType(core.String),
    dateFormat: dart.fieldType(intl$.DateFormat),
    activeDateFormat: dart.fieldType(intl$.DateFormat),
    maxDate: dart.fieldType(model__date__date.Date),
    minDate: dart.fieldType(model__date__date.Date)
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_input.ddc", {
    "package:angular_components/material_datepicker/date_range_input.dart": material_datepicker__date_range_input
  }, '{"version":3,"sourceRoot":"","sources":["date_range_input.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;AAsEI,2BAAe,GAAG,YAAM,OAAO,OAAO,CAAC,kCAAiB;IAC1D;;AAIE,mCAAe;;IACjB;wBAEuB,KAAmB;AACxC,2BAAe,aAAa;IAC9B;;AAGE,UAAI,UAAK,iBAAiB,IAAI,YAAO,eAAK,UAAK,uBAAuB,GACpE;AACF,kBAAM,MAAM,GAAG,UAAK,OAAO,CAAC,YAAO,2BAA0B;IAC/D;;AAGE,UAAI,UAAK,iBAAiB,IAAI,YAAO,cAAI,UAAK,uBAAuB,GACnE;AACF,kBAAM,MAAM,GAAG,UAAK,OAAO,CAAC,YAAO,2BAA0B;IAC/D;;YAGI,AAC4B,WADvB,iBAAiB,IAAI,YAAO,cACjC,UAAK,WAAW,aAAW,gBAC1B,UAAK,uBAAuB;;;YAG7B,AAC4B,WADvB,iBAAiB,IAAI,YAAO,cACjC,UAAK,WAAW,aAAW,eAC3B,UAAK,uBAAuB;;;YAKK,kBAAW,OAAO;;cAK7C,KAAe;AACvB,uBAAI,KAAK,EAAI,YAAM,MAAI,KAAK,kBAAL,KAAK,MAAO,KAAI,SAAQ,KAAK,kBAAL,KAAK,IAAK,KAAI,MAAM;AAEjE,yBAAW,IAAI,CAAC,KAAK;;AAEvB,kBAAM,GAAG,KAAK,WAAL,KAAK,GAAI,IAAI,+BAAS,CAAC,MAAM;IACxC;6BAIyB,KAAU;AACjC,iCAAqB,GAAG,KAAK;IAC/B;;YAKgC,YAAC,2BAAqB;;;YAG/B,aAAM;;cAKnB,KAAmB;AAC3B,kBAAM,MAAM,GAAG,KAAK;AACpB,UAAI,qBAAe,IAAI,MAAM,uBAAiB,CAAC,KAAK;IACtD;;YAE2B,aAAM,MAAM;;;YAOE,aAAM,OAAO;;IAI/C;;;;;;;YAEW,WAAK,MAAM;;cACnB,IAAS;AACjB,uBAAI,UAAK,MAAM,EAAI,IAAI,GAAE;AACvB,kBAAK,GAAG,IAAI,+BAAS,CAAC,IAAI,EAAE,UAAK,IAAI;;IAEzC;;YAEgB,WAAK,IAAI;;YACjB,IAAS;AACf,uBAAI,UAAK,IAAI,EAAI,IAAI,GAAE;AACrB,kBAAK,GAAG,IAAI,+BAAS,CAAC,UAAK,MAAM,EAAE,IAAI;;IAE3C;;cAMyB,QAAG;6BAAI,YAAO;;;cAChB,UAAK;6BAAI,YAAO;;IAK5B;;;;;;IAMA;;;;;;;uBAGP,kBAAa,IAAG,qBAAgB,GAAG,eAAU;;;uBAEjB,gBAAW,IAAG,qBAAgB,GAAG,eAAU;;IAKtE;;;;;;IAKA;;;;;;;YAEsB,WAAI,QAAQ,CAAC,qBAC9B,8CACA;IAAkE;;YAEnD,WAAI,QAAQ,CAAC,mBAC5B,4CACA;IAAgE;;gFA9I7C,cAAe;IAFzB,qBAAe;IA4C5B,iBAAW,GAAG,AAAI,uCAAqC;IAYxD,2BAAqB,GAAG;IAWnB,YAAM,GAAG,IAAI,+BAAS,CAAC,MAAM;IAYJ,YAAM,GACrC,IAAI,0CAAmB,CAAC,IAAI,iDAAmB,eAAc;IAS1D,aAAO;IA0BH,gBAAU,GAAG,IAAI,sBAAgB;IAMjC,sBAAgB,GAAG,IAAI,oBAAc;IAU3C,aAAO,GAAG,IAAI,0BAAI,CAAC,MAAM,aAAQ,SAAS,EAAE;IAK5C,aAAO,GAAG,IAAI,0BAAI,CAAC,MAAM,aAAQ,QAAQ,EAAE;IAtInB,qBAAe,GAAf,cAAe;EAAC","file":"date_range_input.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_input: material_datepicker__date_range_input
  };
});

//# sourceMappingURL=date_range_input.ddc.js.map
