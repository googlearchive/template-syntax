define(['dart_sdk', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/model/observable/observable', 'packages/angular_components/src/material_datepicker/calendar_listener', 'packages/quiver/time', 'packages/angular_components/model/date/date', 'packages/angular_components/src/material_datepicker/enum_parsing', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/intl/intl'], function(dart_sdk, calendar, observable, calendar_listener, time, date, enum_parsing, lifecycle_hooks, intl) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const model__observable__observable = observable.model__observable__observable;
  const src__material_datepicker__calendar_listener = calendar_listener.src__material_datepicker__calendar_listener;
  const time$ = time.time;
  const model__date__date = date.model__date__date;
  const src__material_datepicker__enum_parsing = enum_parsing.src__material_datepicker__enum_parsing;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const intl$ = intl.intl;
  const _root = Object.create(null);
  const material_datepicker__material_month_picker = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $text = dartx.text;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $isEmpty = dartx.isEmpty;
  const $firstWhere = dartx.firstWhere;
  const $querySelectorAll = dartx.querySelectorAll;
  const $classes = dartx.classes;
  const $parent = dartx.parent;
  const $first = dartx.first;
  const $scrollTop = dartx.scrollTop;
  const $addEventListener = dartx.addEventListener;
  const $removeEventListener = dartx.removeEventListener;
  const $target = dartx.target;
  let ObservableReferenceOfCalendarState = () => (ObservableReferenceOfCalendarState = dart.constFn(model__observable__observable.ObservableReference$(material_datepicker__calendar.CalendarState)))();
  let CalendarSelectionTobool = () => (CalendarSelectionTobool = dart.constFn(dart.fnType(core.bool, [material_datepicker__calendar.CalendarSelection])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let EventTodynamic = () => (EventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Event])))();
  const _model = Symbol('_model');
  const _mode = Symbol('_mode');
  const _today = Symbol('_today');
  const _scroller = Symbol('_scroller');
  const _container = Symbol('_container');
  const _inputListener = Symbol('_inputListener');
  const _calendarStream = Symbol('_calendarStream');
  const _clickListener = Symbol('_clickListener');
  const _mouseDownListener = Symbol('_mouseDownListener');
  const _mouseMoveListener = Symbol('_mouseMoveListener');
  const _mouseLeaveListener = Symbol('_mouseLeaveListener');
  const _onCalendarChange = Symbol('_onCalendarChange');
  const _scrollToSelection = Symbol('_scrollToSelection');
  const _resetHighlights = Symbol('_resetHighlights');
  const _renderHighlights = Symbol('_renderHighlights');
  const _renderHover = Symbol('_renderHover');
  const _monthSelector = Symbol('_monthSelector');
  let const$;
  let const$0;
  const _highlightElements = Symbol('_highlightElements');
  const _renderRange = Symbol('_renderRange');
  const _canSelectDate = Symbol('_canSelectDate');
  const _renderAllYears = Symbol('_renderAllYears');
  const _addEventListeners = Symbol('_addEventListeners');
  const _removeEventListeners = Symbol('_removeEventListeners');
  const _onClick = Symbol('_onClick');
  const _onMouseDown = Symbol('_onMouseDown');
  const _onMouseMove = Symbol('_onMouseMove');
  const _onMouseLeave = Symbol('_onMouseLeave');
  const _extractDate = Symbol('_extractDate');
  material_datepicker__material_month_picker.MaterialMonthPickerComponent = class MaterialMonthPickerComponent extends core.Object {
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
    get minDate() {
      return this[minDate];
    }
    set minDate(value) {
      this[minDate] = value;
    }
    get maxDate() {
      return this[maxDate];
    }
    set maxDate(value) {
      this[maxDate] = value;
    }
    get mode() {
      return this[_mode];
    }
    static _createYearTemplate() {
      let template = html.DocumentFragment.new();
      material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearTemplateContainer.className = 'year';
      template[$append](material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearTemplateContainer);
      material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearTemplateTitle.className = 'year-title';
      material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearTemplateContainer[$append](material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearTemplateTitle);
      let monthTemplate = html.DivElement.new();
      monthTemplate.className = 'month';
      for (let i = 0; i < 12; i++) {
        let month = html.HtmlElement._check(monthTemplate[$clone](true));
        month.setAttribute("data-month", dart.str`${i + 1}`);
        month[$text] = material_datepicker__material_month_picker.MaterialMonthPickerComponent._monthNames[$_get](i);
        material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearTemplateContainer[$append](month);
      }
      return template;
    }
    static _renderYear(year) {
      material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearTemplateContainer.setAttribute("data-year", dart.toString(year));
      material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearTemplateTitle[$text] = dart.toString(year);
      return html.DocumentFragment._check(material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearTemplate[$clone](true));
    }
    [_scrollToSelection]() {
      if (dart.test(this.state.selections[$isEmpty])) return;
      let currentSelection = this.state.selections[$firstWhere](dart.fn(s => s.id == this.state.currentSelection, CalendarSelectionTobool()), {orElse: dart.fn(() => null, VoidToNull())});
      if (currentSelection == null) return;
      this.scrollToYear(dart.test(this.state.previewAnchoredAtStart) ? currentSelection.end.year : currentSelection.start.year);
    }
    [_onCalendarChange](state) {
      if (state.cause === material_datepicker__calendar.CausedBy.external) {
        this[_scrollToSelection]();
      }
      this[_resetHighlights]();
      this[_renderHighlights]();
      this[_renderHover]();
    }
    [_resetHighlights]() {
      for (let element of this[_container][$querySelectorAll](html.HtmlElement, '.year-title')) {
        element.className = 'year-title';
      }
      for (let element of this[_container][$querySelectorAll](html.HtmlElement, '.month:not(.disabled)')) {
        element.className = 'month';
      }
    }
    [_renderRange](selection) {
      let start = null;
      let end = null;
      start = html.HtmlElement._check(this[_container].querySelector(this[_monthSelector](selection.start)));
      if (start == null) return;
      start[$classes].addAll(const$ || (const$ = dart.constList(['boundary', 'start'], core.String)));
      end = html.HtmlElement._check(this[_container].querySelector(this[_monthSelector](selection.end)));
      if (end == null) return;
      end[$classes].addAll(const$0 || (const$0 = dart.constList(['boundary', 'end'], core.String)));
      if (dart.equals(start, end)) return;
      let range = html.Range.new();
      range.setStartBefore(start);
      range.setEndAfter(end);
      this[_highlightElements](start, html.HtmlElement._check(end.nextElementSibling));
      let startContainer = html.HtmlElement._check(range.startContainer);
      let endContainer = html.HtmlElement._check(range.endContainer);
      for (let year = html.HtmlElement._check(startContainer.nextElementSibling); year != null && !dart.equals(year, endContainer.nextElementSibling); year = html.HtmlElement._check(year.nextElementSibling)) {
        this[_highlightElements](html.HtmlElement._check(year.firstChild), html.HtmlElement._check(end.nextElementSibling));
      }
    }
    [_highlightElements](start, end) {
      for (let element = start; element != null && !dart.equals(element, end); element = html.HtmlElement._check(element.nextElementSibling)) {
        element[$classes].add('highlight');
      }
    }
    [_renderHighlights]() {
      for (let selection of this.state.selections) {
        this[_renderRange](selection);
      }
    }
    [_renderHover]() {
      let element = html.HtmlElement._check(this[_container].querySelector('.month.hover'));
      if (element != null) element[$classes].remove('hover');
      if (this[_model].value.preview != null) {
        element = html.HtmlElement._check(this[_container].querySelector(this[_monthSelector](this[_model].value.preview)));
        if (element != null) element[$classes].add('hover');
      }
    }
    [_canSelectDate](date) {
      if (date == null) return false;
      return dart.notNull(material_datepicker__calendar.compareDatesAtResolution(date, this.minDate, this.state.resolution)) >= 0 && dart.notNull(material_datepicker__calendar.compareDatesAtResolution(date, this.maxDate, this.state.resolution)) <= 0;
    }
    [_monthSelector](date) {
      return dart.str`.year[${"data-year"}="${date.year}"] ` + dart.str`.month[${"data-month"}="${date.month}"]`;
    }
    set container(container) {
      this[_container] = html.HtmlElement._check(container);
      this[_scroller] = html.HtmlElement._check(container[$parent]);
    }
    ngOnInit() {
      this[_calendarStream] = this[_model].stream.listen(dart.bind(this, _onCalendarChange));
      if (this[_mode] === material_datepicker__calendar.CalendarSelectionMode.SINGLE_DATE) {
        this[_inputListener] = src__material_datepicker__calendar_listener.CalendarListener.singleDate(this[_model]);
      } else if (this[_mode] === material_datepicker__calendar.CalendarSelectionMode.DATE_RANGE) {
        this[_inputListener] = src__material_datepicker__calendar_listener.CalendarListener.dateRange(this[_model]);
      }
    }
    ngAfterViewInit() {
      let initialDate = dart.test(this.state.selections[$isEmpty]) ? this[_today] : this.state.selections[$first].start;
      this[_renderAllYears]();
      this.scrollToYear(initialDate.year);
      this[_addEventListeners]();
    }
    ngOnDestroy() {
      let t = this[_calendarStream];
      t == null ? null : t.cancel();
      this[_removeEventListeners]();
    }
    scrollToYear(year) {
      this[_scroller][$scrollTop] = (dart.notNull(year) - dart.notNull(this.minDate.year)) * 144;
    }
    [_renderAllYears]() {
      for (let i = this.minDate.year; dart.notNull(i) <= dart.notNull(this.maxDate.year); i = dart.notNull(i) + 1) {
        this[_container][$append](material_datepicker__material_month_picker.MaterialMonthPickerComponent._renderYear(i));
      }
      let element = null;
      for (let i = 1; i < dart.notNull(this.minDate.month); i++) {
        element = html.HtmlElement._check(this[_container].querySelector(this[_monthSelector](new model__date__date.Date.new(this.minDate.year, i, 1))));
        element[$classes].add('disabled');
      }
      for (let i = dart.notNull(this.maxDate.month) + 1; i <= 12; i++) {
        element = html.HtmlElement._check(this[_container].querySelector(this[_monthSelector](new model__date__date.Date.new(this.maxDate.year, i, 1))));
        element[$classes].add('disabled');
      }
    }
    [_addEventListeners]() {
      let _ = this[_container];
      _[$addEventListener]('click', this[_clickListener] = dart.bind(this, _onClick));
      _[$addEventListener]('mousedown', this[_mouseDownListener] = dart.bind(this, _onMouseDown));
      _[$addEventListener]('mousemove', this[_mouseMoveListener] = dart.bind(this, _onMouseMove));
      _[$addEventListener]('mouseleave', this[_mouseLeaveListener] = dart.bind(this, _onMouseLeave));
    }
    [_removeEventListeners]() {
      let _ = this[_container];
      _[$removeEventListener]('click', this[_clickListener]);
      _[$removeEventListener]('mousedown', this[_mouseDownListener]);
      _[$removeEventListener]('mousemove', this[_mouseMoveListener]);
      _[$removeEventListener]('mouseleave', this[_mouseLeaveListener]);
    }
    [_extractDate](event) {
      let target = event[$target];
      if (!html.HtmlElement.is(target)) return null;
      let monthElement = html.HtmlElement._check(target);
      let month = monthElement.getAttribute("data-month");
      if (month == null) return null;
      let year = monthElement[$parent].getAttribute("data-year");
      if (year == null) return null;
      return new model__date__date.Date.new(core.int.parse(year), core.int.parse(month), 1);
    }
    [_onClick](event) {
      let date = this[_extractDate](event);
      if (dart.test(this[_canSelectDate](date))) {
        this[_inputListener].onClick(date);
      }
    }
    [_onMouseDown](event) {
      let date = this[_extractDate](event);
      if (dart.test(this[_canSelectDate](date))) {
        this[_inputListener].onMouseDown(date);
      }
    }
    [_onMouseMove](event) {
      let date = this[_extractDate](event);
      if (dart.test(this[_canSelectDate](date))) {
        this[_inputListener].onMouseMove(date);
      }
    }
    [_onMouseLeave](event) {
      let date = this[_extractDate](event);
      if (dart.test(this[_canSelectDate](date))) {
        this[_inputListener].onMouseLeave(date);
      }
    }
  };
  (material_datepicker__material_month_picker.MaterialMonthPickerComponent.new = function(clock, mode) {
    this[_model] = new (ObservableReferenceOfCalendarState()).new(new material_datepicker__calendar.CalendarState.empty(), {coalesce: true});
    this[minDate] = null;
    this[maxDate] = null;
    this[_mode] = material_datepicker__calendar.CalendarSelectionMode.NONE;
    this[_today] = null;
    this[_scroller] = null;
    this[_container] = null;
    this[_inputListener] = new src__material_datepicker__calendar_listener.CalendarListener.noop();
    this[_calendarStream] = null;
    this[_clickListener] = null;
    this[_mouseDownListener] = null;
    this[_mouseMoveListener] = null;
    this[_mouseLeaveListener] = null;
    let t = clock;
    t == null ? clock = new time$.Clock.new() : t;
    let now = clock.now();
    this.minDate = new model__date__date.Date.new(dart.notNull(now.year) - 10, core.DateTime.JANUARY, 1);
    this.maxDate = new model__date__date.Date.new(dart.notNull(now.year) + 10, core.DateTime.DECEMBER, 31);
    this[_today] = model__date__date.Date.today(clock);
    if (mode != null && mode[$isNotEmpty]) {
      this[_mode] = material_datepicker__calendar.CalendarSelectionMode._check(src__material_datepicker__enum_parsing.fuzzyParseEnum(material_datepicker__calendar.CalendarSelectionMode.values, mode));
    }
  }).prototype = material_datepicker__material_month_picker.MaterialMonthPickerComponent.prototype;
  dart.addTypeTests(material_datepicker__material_month_picker.MaterialMonthPickerComponent);
  const minDate = Symbol("MaterialMonthPickerComponent.minDate");
  const maxDate = Symbol("MaterialMonthPickerComponent.maxDate");
  material_datepicker__material_month_picker.MaterialMonthPickerComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_datepicker__material_month_picker.MaterialMonthPickerComponent, () => ({
    __proto__: dart.getMethods(material_datepicker__material_month_picker.MaterialMonthPickerComponent.__proto__),
    [_scrollToSelection]: dart.fnType(dart.void, []),
    [_onCalendarChange]: dart.fnType(dart.void, [material_datepicker__calendar.CalendarState]),
    [_resetHighlights]: dart.fnType(dart.void, []),
    [_renderRange]: dart.fnType(dart.void, [material_datepicker__calendar.CalendarSelection]),
    [_highlightElements]: dart.fnType(dart.void, [html.HtmlElement, html.HtmlElement]),
    [_renderHighlights]: dart.fnType(dart.void, []),
    [_renderHover]: dart.fnType(dart.void, []),
    [_canSelectDate]: dart.fnType(core.bool, [model__date__date.Date]),
    [_monthSelector]: dart.fnType(core.String, [model__date__date.Date]),
    ngOnInit: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    scrollToYear: dart.fnType(dart.void, [core.int]),
    [_renderAllYears]: dart.fnType(dart.void, []),
    [_addEventListeners]: dart.fnType(dart.void, []),
    [_removeEventListeners]: dart.fnType(dart.void, []),
    [_extractDate]: dart.fnType(model__date__date.Date, [html.Event]),
    [_onClick]: dart.fnType(dart.void, [html.Event]),
    [_onMouseDown]: dart.fnType(dart.void, [html.Event]),
    [_onMouseMove]: dart.fnType(dart.void, [html.Event]),
    [_onMouseLeave]: dart.fnType(dart.void, [html.Event])
  }));
  dart.setStaticMethodSignature(material_datepicker__material_month_picker.MaterialMonthPickerComponent, () => ({
    _createYearTemplate: dart.fnType(html.DocumentFragment, []),
    _renderYear: dart.fnType(html.DocumentFragment, [core.int])
  }));
  dart.setGetterSignature(material_datepicker__material_month_picker.MaterialMonthPickerComponent, () => ({
    __proto__: dart.getGetters(material_datepicker__material_month_picker.MaterialMonthPickerComponent.__proto__),
    state: dart.fnType(material_datepicker__calendar.CalendarState, []),
    stateChange: dart.fnType(async.Stream$(material_datepicker__calendar.CalendarState), []),
    mode: dart.fnType(material_datepicker__calendar.CalendarSelectionMode, [])
  }));
  dart.setSetterSignature(material_datepicker__material_month_picker.MaterialMonthPickerComponent, () => ({
    __proto__: dart.getSetters(material_datepicker__material_month_picker.MaterialMonthPickerComponent.__proto__),
    state: dart.fnType(dart.void, [material_datepicker__calendar.CalendarState]),
    container: dart.fnType(dart.void, [html.Element])
  }));
  dart.setFieldSignature(material_datepicker__material_month_picker.MaterialMonthPickerComponent, () => ({
    __proto__: dart.getFields(material_datepicker__material_month_picker.MaterialMonthPickerComponent.__proto__),
    [_model]: dart.fieldType(ObservableReferenceOfCalendarState()),
    minDate: dart.fieldType(model__date__date.Date),
    maxDate: dart.fieldType(model__date__date.Date),
    [_mode]: dart.fieldType(material_datepicker__calendar.CalendarSelectionMode),
    [_today]: dart.fieldType(model__date__date.Date),
    [_scroller]: dart.fieldType(html.HtmlElement),
    [_container]: dart.fieldType(html.HtmlElement),
    [_inputListener]: dart.fieldType(src__material_datepicker__calendar_listener.CalendarListener),
    [_calendarStream]: dart.fieldType(async.StreamSubscription),
    [_clickListener]: dart.fieldType(EventTodynamic()),
    [_mouseDownListener]: dart.fieldType(EventTodynamic()),
    [_mouseMoveListener]: dart.fieldType(EventTodynamic()),
    [_mouseLeaveListener]: dart.fieldType(EventTodynamic())
  }));
  dart.defineLazy(material_datepicker__material_month_picker.MaterialMonthPickerComponent, {
    /*material_datepicker__material_month_picker.MaterialMonthPickerComponent._monthHeight*/get _monthHeight() {
      return 36;
    },
    /*material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearHeight*/get _yearHeight() {
      return 4 * 36;
    },
    /*material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearAttribute*/get _yearAttribute() {
      return 'data-year';
    },
    /*material_datepicker__material_month_picker.MaterialMonthPickerComponent._monthAttribute*/get _monthAttribute() {
      return 'data-month';
    },
    /*material_datepicker__material_month_picker.MaterialMonthPickerComponent._monthNames*/get _monthNames() {
      return new intl$.DateFormat.new().dateSymbols.SHORTMONTHS;
    },
    /*material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearTemplate*/get _yearTemplate() {
      return material_datepicker__material_month_picker.MaterialMonthPickerComponent._createYearTemplate();
    },
    /*material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearTemplateContainer*/get _yearTemplateContainer() {
      return html.DivElement.new();
    },
    /*material_datepicker__material_month_picker.MaterialMonthPickerComponent._yearTemplateTitle*/get _yearTemplateTitle() {
      return html.HeadingElement.h2();
    }
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/material_month_picker.ddc", {
    "package:angular_components/material_datepicker/material_month_picker.dart": material_datepicker__material_month_picker
  }, '{"version":3,"sourceRoot":"","sources":["material_month_picker.dart"],"names":[],"mappings":"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","file":"material_month_picker.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_month_picker: material_datepicker__material_month_picker
  };
});

//# sourceMappingURL=material_month_picker.ddc.js.map
