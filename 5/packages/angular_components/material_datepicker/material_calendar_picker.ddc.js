define(['dart_sdk', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/model/observable/observable', 'packages/angular_components/model/date/date', 'packages/angular_components/src/material_datepicker/calendar_listener', 'packages/angular_components/src/material_datepicker/enum_parsing', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/utils/browser/feature_detector/feature_detector', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/linker/element_ref', 'packages/intl/intl'], function(dart_sdk, calendar, observable, date, calendar_listener, enum_parsing, properties, feature_detector, lifecycle_hooks, element_ref, intl) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const model__observable__observable = observable.model__observable__observable;
  const model__date__date = date.model__date__date;
  const src__material_datepicker__calendar_listener = calendar_listener.src__material_datepicker__calendar_listener;
  const src__material_datepicker__enum_parsing = enum_parsing.src__material_datepicker__enum_parsing;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const utils__browser__feature_detector__feature_detector = feature_detector.utils__browser__feature_detector__feature_detector;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const intl$ = intl.intl;
  const _root = Object.create(null);
  const material_datepicker__material_calendar_picker = Object.create(_root);
  const $remainder = dartx.remainder;
  const $truncate = dartx.truncate;
  const $_get = dartx._get;
  const $isNotEmpty = dartx.isNotEmpty;
  const $append = dartx.append;
  const $appendText = dartx.appendText;
  const $clone = dartx.clone;
  const $ceil = dartx.ceil;
  const $target = dartx.target;
  const $split = dartx.split;
  const $add = dartx.add;
  const $height = dartx.height;
  const $parent = dartx.parent;
  const $scrollTop = dartx.scrollTop;
  const $text = dartx.text;
  const $toString = dartx.toString;
  const $isEmpty = dartx.isEmpty;
  const $contains = dartx.contains;
  const $where = dartx.where;
  const $clear = dartx.clear;
  const $first = dartx.first;
  const $last = dartx.last;
  const $classes = dartx.classes;
  const $querySelectorAll = dartx.querySelectorAll;
  const $length = dartx.length;
  const $firstWhere = dartx.firstWhere;
  const $requestAnimationFrame = dartx.requestAnimationFrame;
  const $removeEventListener = dartx.removeEventListener;
  const $addEventListener = dartx.addEventListener;
  const $sublist = dartx.sublist;
  const $addAll = dartx.addAll;
  const $replaceFirst = dartx.replaceFirst;
  const $toList = dartx.toList;
  const $map = dartx.map;
  let intAndintAndintToint = () => (intAndintAndintToint = dart.constFn(dart.fnType(core.int, [core.int, core.int, core.int])))();
  let ObservableReferenceOfCalendarState = () => (ObservableReferenceOfCalendarState = dart.constFn(model__observable__observable.ObservableReference$(material_datepicker__calendar.CalendarState)))();
  let StreamControllerOfDate = () => (StreamControllerOfDate = dart.constFn(async.StreamController$(model__date__date.Date)))();
  let JSArrayOf_Month = () => (JSArrayOf_Month = dart.constFn(_interceptors.JSArray$(material_datepicker__material_calendar_picker._Month)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let _MonthTobool = () => (_MonthTobool = dart.constFn(dart.fnType(core.bool, [material_datepicker__material_calendar_picker._Month])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfCalendarSelection = () => (JSArrayOfCalendarSelection = dart.constFn(_interceptors.JSArray$(material_datepicker__calendar.CalendarSelection)))();
  let CalendarSelectionTobool = () => (CalendarSelectionTobool = dart.constFn(dart.fnType(core.bool, [material_datepicker__calendar.CalendarSelection])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let numToNull = () => (numToNull = dart.constFn(dart.fnType(core.Null, [core.num])))();
  let ListOf_Month = () => (ListOf_Month = dart.constFn(core.List$(material_datepicker__material_calendar_picker._Month)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let EventTodynamic = () => (EventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Event])))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  dart.defineLazy(material_datepicker__material_calendar_picker, {
    /*material_datepicker__material_calendar_picker._dayOfWeekTable*/get _dayOfWeekTable() {
      return dart.constList([0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4], core.int);
    }
  });
  material_datepicker__material_calendar_picker._dayOfWeek = function(year, month, day) {
    if (dart.notNull(month) < 3) {
      year = dart.notNull(year) - 1;
    }
    year = 65535 & dart.notNull(year);
    return dart.asInt((dart.notNull(year) + (dart.notNull(year) / 4)[$truncate]() - (dart.notNull(year) / 100)[$truncate]() + (dart.notNull(year) / 400)[$truncate]() + dart.notNull(material_datepicker__material_calendar_picker._dayOfWeekTable[$_get](dart.notNull(month) - 1)) + dart.notNull(day))[$remainder](7));
  };
  dart.fn(material_datepicker__material_calendar_picker._dayOfWeek, intAndintAndintToint());
  const _model = Symbol('_model');
  const _visibleMonthController = Symbol('_visibleMonthController');
  const _allowHighlightUpdates = Symbol('_allowHighlightUpdates');
  const _minDate = Symbol('_minDate');
  const _minMonth = Symbol('_minMonth');
  const _maxDate = Symbol('_maxDate');
  const _maxMonth = Symbol('_maxMonth');
  const _compact = Symbol('_compact');
  const _mode = Symbol('_mode');
  const _today = Symbol('_today');
  const _isRenderScheduled = Symbol('_isRenderScheduled');
  const _renderedMonths = Symbol('_renderedMonths');
  const _renderedOffsets = Symbol('_renderedOffsets');
  const _scroller = Symbol('_scroller');
  const _container = Symbol('_container');
  const _scrollTop = Symbol('_scrollTop');
  const _inputListener = Symbol('_inputListener');
  const _calendarStream = Symbol('_calendarStream');
  const _scrollListener = Symbol('_scrollListener');
  const _clickListener = Symbol('_clickListener');
  const _mouseDownListener = Symbol('_mouseDownListener');
  const _mouseMoveListener = Symbol('_mouseMoveListener');
  const _mouseOutListener = Symbol('_mouseOutListener');
  const _onCalendarChange = Symbol('_onCalendarChange');
  const _rowHeightPx = Symbol('_rowHeightPx');
  const _monthHeight = Symbol('_monthHeight');
  const _rangeHeight = Symbol('_rangeHeight');
  const _monthAtOffset = Symbol('_monthAtOffset');
  const _canSelectDate = Symbol('_canSelectDate');
  const _extractDate = Symbol('_extractDate');
  const _monthsSurrounding = Symbol('_monthsSurrounding');
  const _resetContainerHeight = Symbol('_resetContainerHeight');
  const _scrollToMonth = Symbol('_scrollToMonth');
  const _setText = Symbol('_setText');
  const _dateAttributeValue = Symbol('_dateAttributeValue');
  const _renderMonth = Symbol('_renderMonth');
  const _renderHighlights = Symbol('_renderHighlights');
  const _renderToday = Symbol('_renderToday');
  const _renderHover = Symbol('_renderHover');
  const _renderVisible = Symbol('_renderVisible');
  const _slotSelector = Symbol('_slotSelector');
  const _highlightElements = Symbol('_highlightElements');
  const _renderRange = Symbol('_renderRange');
  const _highlightElement = Symbol('_highlightElement');
  const _resetHighlights = Symbol('_resetHighlights');
  const _ensureSelectionIsVisible = Symbol('_ensureSelectionIsVisible');
  const _initialDate = Symbol('_initialDate');
  const _initializeEvents = Symbol('_initializeEvents');
  const _initializePanels = Symbol('_initializePanels');
  const _onScroll = Symbol('_onScroll');
  const _onClick = Symbol('_onClick');
  const _onMouseDown = Symbol('_onMouseDown');
  const _onMouseMove = Symbol('_onMouseMove');
  const _onMouseOut = Symbol('_onMouseOut');
  material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent = class MaterialCalendarPickerComponent extends core.Object {
    static _rotateDayOfWeek(numDays, dayOfWeek) {
      return dart.asInt((dart.notNull(dayOfWeek) + dart.notNull(numDays))[$remainder](7));
    }
    static _dayOfWeekIndex(dayOfWeek) {
      return material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._rotateDayOfWeek(-dart.notNull(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._firstDayOfWeek), dayOfWeek);
    }
    static _createMonthTemplate() {
      let template = html.DocumentFragment.new();
      let container = html.DivElement.new();
      container.className = 'month';
      template[$append](container);
      let title = html.HeadingElement.h2();
      title.className = 'month-title';
      title[$appendText]('');
      container[$append](title);
      let slotTemplate = html.DivElement.new();
      slotTemplate.className = 'day-slot';
      slotTemplate[$appendText]('');
      let slot = null;
      for (let i = 0; i < 6 * 7; i++) {
        slot = slotTemplate[$clone](true);
        container[$append](html.Node._check(slot));
      }
      return template;
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
    get visibleMonth() {
      return this[_visibleMonthController].stream;
    }
    set allowHighlightUpdates(value) {
      let nowAllowed = utils__angular__properties__properties.getBool(value);
      if (this[_allowHighlightUpdates] != nowAllowed) {
        this[_allowHighlightUpdates] = nowAllowed;
        if (dart.test(nowAllowed)) this[_onCalendarChange](this[_model].value);
      }
    }
    get allowHighlightUpdates() {
      return this[_allowHighlightUpdates];
    }
    set minDate(newDate) {
      this[_minDate] = newDate;
      this[_minMonth] = new material_datepicker__material_calendar_picker._Month.fromDate(this[_minDate]);
    }
    get minDate() {
      return this[_minDate];
    }
    set maxDate(newDate) {
      this[_maxDate] = newDate;
      this[_maxMonth] = new material_datepicker__material_calendar_picker._Month.fromDate(this[_maxDate]);
    }
    get maxDate() {
      return this[_maxDate];
    }
    set compact(value) {
      this[_compact] = utils__angular__properties__properties.getBool(value);
    }
    get compact() {
      return this[_compact];
    }
    get mode() {
      return this[_mode];
    }
    get dayNames() {
      return material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._dayNames;
    }
    get [_rowHeightPx]() {
      return dart.test(this.compact) ? 36 : 48;
    }
    [_monthHeight](month) {
      let startOffset = material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._dayOfWeekIndex(month.startDay);
      if (dart.notNull(startOffset) < 3) {
        startOffset = dart.notNull(startOffset) + 7;
      }
      let slots = dart.notNull(startOffset) + dart.notNull(month.days);
      let rows = (slots / 7)[$ceil]();
      return rows * dart.notNull(this[_rowHeightPx]);
    }
    [_rangeHeight](start, end) {
      if (dart.test(end['<'](start))) return -dart.notNull(this[_rangeHeight](end, start));
      let total = 0;
      for (let month = start.copy(); dart.test(month['<'](end)); month.next()) {
        total = dart.notNull(total) + dart.notNull(this[_monthHeight](month));
      }
      return total;
    }
    [_monthAtOffset](offset) {
      let month = null;
      let total = 0;
      for (month = this[_minMonth].copy(); dart.notNull(total) < dart.notNull(offset) && dart.dtest(dart.dsend(month, '<', this[_maxMonth])); dart.dsend(month, 'next')) {
        total = dart.notNull(total) + dart.notNull(this[_monthHeight](material_datepicker__material_calendar_picker._Month._check(month)));
      }
      let previousMonthVisiblePx = dart.notNull(total) - dart.notNull(offset);
      if (previousMonthVisiblePx / dart.notNull(this[_monthHeight](material_datepicker__material_calendar_picker._Month._check(dart.dsend(month, 'add', -1)))) > material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._inViewThreshold) {
        dart.dsend(month, 'prev');
      }
      return material_datepicker__material_calendar_picker._Month._check(month);
    }
    [_canSelectDate](date) {
      if (date == null) return false;
      return dart.test(date['>='](this.minDate)) && dart.test(date['<='](this.maxDate));
    }
    [_extractDate](event) {
      let slot = event[$target];
      if (!html.HtmlElement.is(slot)) return null;
      let dateText = html.HtmlElement.as(slot).getAttribute("data-date");
      if (dateText == null) return null;
      let parts = dateText[$split]("-");
      let year = core.int.parse(parts[$_get](0));
      let month = core.int.parse(parts[$_get](1));
      let day = core.int.parse(parts[$_get](2));
      return new model__date__date.Date.new(year, month, day);
    }
    [_monthsSurrounding](baseline) {
      let start = baseline.add(-2);
      let end = baseline.add(2);
      let result = JSArrayOf_Month().of([]);
      for (let month = start; dart.test(month['<='](end)); month.next()) {
        result[$add](month.copy());
      }
      return result;
    }
    [_resetContainerHeight]() {
      let totalHeight = dart.notNull(this[_rangeHeight](this[_minMonth], this[_maxMonth])) + dart.notNull(this[_monthHeight](this[_maxMonth]));
      this[_container].style[$height] = dart.str`${totalHeight}px`;
    }
    [_scrollToMonth](month) {
      this[_container][$parent][$scrollTop] = this[_rangeHeight](this[_minMonth], month);
    }
    scrollToDate(date) {
      this[_scrollToMonth](new material_datepicker__material_calendar_picker._Month.fromDate(date));
    }
    [_setText](slot, text) {
      if (dart.test(utils__browser__feature_detector__feature_detector.isEdge)) {
        slot[$text] = text;
      } else {
        js_util.setProperty(slot.firstChild, 'nodeValue', text);
      }
    }
    [_renderMonth](month, container) {
      let startIndex = material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._dayOfWeekIndex(month.startDay);
      if (dart.notNull(startIndex) < 3) {
        startIndex = dart.notNull(startIndex) + 7;
      }
      let daysInMonth = month.days;
      let title = html.HtmlElement._check(container.firstChild);
      this[_setText](title, month.title);
      let isFirstMonth = dart.equals(month, this[_minMonth]);
      let isLastMonth = dart.equals(month, this[_maxMonth]);
      let slot = html.HtmlElement._check(title.nextElementSibling);
      for (let i = 1; i <= 7 * 6; i++) {
        let day = i - dart.notNull(startIndex);
        if (day <= 0 || day > dart.notNull(daysInMonth)) {
          slot.className = 'day-slot invisible';
        } else if (isFirstMonth && day < dart.notNull(this[_minDate].day) || isLastMonth && day > dart.notNull(this[_maxDate].day)) {
          slot.className = 'day-slot disabled';
          if (dart.test(utils__browser__feature_detector__feature_detector.isFirefox)) {
            this[_setText](slot, day[$toString]());
          }
        } else {
          slot.className = 'day-slot visible';
          slot.setAttribute("data-date", this[_dateAttributeValue](month.year, month.month, day));
          if (dart.test(utils__browser__feature_detector__feature_detector.isFirefox)) {
            this[_setText](slot, day[$toString]());
          }
        }
        slot = html.HtmlElement._check(slot.nextElementSibling);
      }
    }
    [_renderVisible]() {
      let baseline = null;
      let offset = null;
      if (dart.test(this[_renderedMonths][$isEmpty])) {
        baseline = this[_monthAtOffset](this[_scrollTop]);
        offset = this[_rangeHeight](this[_minMonth], material_datepicker__material_calendar_picker._Month._check(dart.dsend(baseline, 'add', -2)));
      } else {
        offset = this[_renderedOffsets][$_get](2);
        if (dart.notNull(offset) >= dart.notNull(this[_scrollTop])) {
          baseline = this[_renderedMonths][$_get](2).copy();
          while (dart.notNull(offset) >= dart.notNull(this[_scrollTop]) && dart.dtest(dart.dsend(baseline, '>=', this[_minMonth]))) {
            dart.dsend(baseline, 'prev');
            offset = dart.notNull(offset) - dart.notNull(this[_monthHeight](material_datepicker__material_calendar_picker._Month._check(baseline)));
          }
        }
        for ((() => {
          let t = baseline;
          return t == null ? baseline = this[_renderedMonths][$_get](2).copy() : t;
        })(); dart.notNull(offset) < dart.notNull(this[_scrollTop]) && dart.dtest(dart.dsend(baseline, '<', this[_maxMonth])); dart.dsend(baseline, 'next')) {
          offset = dart.notNull(offset) + dart.notNull(this[_monthHeight](material_datepicker__material_calendar_picker._Month._check(baseline)));
        }
        let previousMonthVisiblePx = dart.notNull(offset) - dart.notNull(this[_scrollTop]);
        let previousMonthHeight = this[_monthHeight](material_datepicker__material_calendar_picker._Month._check(dart.dsend(baseline, 'add', -1)));
        if (previousMonthVisiblePx / dart.notNull(previousMonthHeight) > material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._inViewThreshold) {
          offset = dart.notNull(offset) - dart.notNull(previousMonthHeight);
          dart.dsend(baseline, 'prev');
        }
        offset = dart.notNull(offset) + dart.notNull(this[_rangeHeight](material_datepicker__material_calendar_picker._Month._check(baseline), material_datepicker__material_calendar_picker._Month._check(dart.dsend(baseline, 'add', -2))));
      }
      let visibleMonths = this[_monthsSurrounding](material_datepicker__material_calendar_picker._Month._check(baseline));
      let neededMonths = visibleMonths[$where](dart.fn(m => !dart.test(this[_renderedMonths][$contains](m)), _MonthTobool()));
      if (dart.test(neededMonths[$isEmpty])) return;
      this[_renderedOffsets][$clear]();
      let panel = html.HtmlElement._check(this[_container].firstChild);
      for (let month of visibleMonths) {
        this[_renderMonth](month, panel);
        panel.style.cssText = dart.str`transform: translateY(${offset}px)`;
        this[_renderedOffsets][$add](offset);
        panel = html.HtmlElement._check(panel.nextElementSibling);
        offset = dart.notNull(offset) + dart.notNull(this[_monthHeight](month));
      }
      if (dart.test(utils__browser__feature_detector__feature_detector.isEdge)) {
        let fragment = html.DocumentFragment.new();
        for (let month = html.HtmlElement._check(this[_container].firstChild); month != null; month = html.HtmlElement._check(this[_container].firstChild)) {
          fragment[$append](month);
        }
        this[_container][$append](fragment);
      }
      this[_renderedMonths] = visibleMonths;
      this[_renderHighlights]();
      this[_renderToday]();
      this[_renderHover]();
      this[_visibleMonthController].add(model__date__date.Date._check(dart.dload(baseline, 'start')));
    }
    [_slotSelector](date) {
      let value = this[_dateAttributeValue](date.year, date.month, date.day);
      return dart.str`.day-slot.visible[${"data-date"}="${value}"]`;
    }
    [_dateAttributeValue](year, month, day) {
      return dart.str`${year}${"-"}${month}${"-"}${day}`;
    }
    [_renderRange](selection) {
      if (dart.test(selection.start['>'](selection.end))) return;
      let start = null;
      let end = null;
      let startMonth = new material_datepicker__material_calendar_picker._Month.fromDate(selection.start);
      let endMonth = new material_datepicker__material_calendar_picker._Month.fromDate(selection.end);
      let highlightClass = dart.str`highlight-${selection.id}`;
      let boundaryClass = dart.str`boundary-${selection.id}`;
      if (dart.test(startMonth['>='](this[_renderedMonths][$first])) && dart.test(startMonth['<='](this[_renderedMonths][$last]))) {
        start = html.HtmlElement._check(this[_container].querySelector(this[_slotSelector](selection.start)));
        if (start == null) return;
        start[$classes].add('boundary');
        start[$classes].add(boundaryClass);
        start[$classes].add('start');
      } else if (dart.test(startMonth['<'](this[_renderedMonths][$first])) && dart.test(endMonth['>='](this[_renderedMonths][$first]))) {
        start = html.HtmlElement._check(this[_container].querySelector('.month:first-of-type .day-slot:first-of-type'));
      }
      if (dart.test(endMonth['>='](this[_renderedMonths][$first])) && dart.test(endMonth['<='](this[_renderedMonths][$last]))) {
        end = html.HtmlElement._check(this[_container].querySelector(this[_slotSelector](selection.end)));
        if (end == null) return;
        end[$classes].add('boundary');
        end[$classes].add(boundaryClass);
        end[$classes].add('end');
      } else if (dart.test(startMonth['<='](this[_renderedMonths][$last])) && dart.test(endMonth['>'](this[_renderedMonths][$last]))) {
        end = html.HtmlElement._check(this[_container].querySelector('.month:last-of-type .day-slot:last-of-type'));
      }
      if (start == null && end == null) return;
      if (selection.id == this.state.currentSelection) {
        if (dart.test(this.state.previewAnchoredAtStart) && end != null) {
          end[$classes].add('active');
        } else if (start != null) {
          start[$classes].add('active');
        }
      }
      let range = html.Range.new();
      range.setStartBefore(start);
      range.setEndAfter(end);
      this[_highlightElements](start, html.HtmlElement._check(end.nextElementSibling), highlightClass);
      let startContainer = html.HtmlElement._check(range.startContainer);
      let endContainer = html.HtmlElement._check(range.endContainer);
      for (let month = html.HtmlElement._check(startContainer.nextElementSibling); month != null && !dart.equals(month, endContainer.nextElementSibling); month = html.HtmlElement._check(month.nextElementSibling)) {
        this[_highlightElements](html.HtmlElement._check(month.firstChild), html.HtmlElement._check(end.nextElementSibling), highlightClass);
      }
    }
    [_highlightElements](start, end, highlightClass) {
      for (let current = start; current != null && !dart.equals(current, end); current = html.HtmlElement._check(current.nextElementSibling)) {
        this[_highlightElement](current, highlightClass);
      }
    }
    [_highlightElement](el, highlightClass) {
      el[$classes].add('highlight');
      el[$classes].add(highlightClass);
    }
    [_resetHighlights]() {
      let classes = JSArrayOfString().of(['visible', 'invisible', 'hidden']);
      for (let className of classes) {
        let selector = dart.str`.day-slot.${className}`;
        for (let el of this[_container][$querySelectorAll](html.HtmlElement, selector)) {
          el.className = dart.str`day-slot ${className}`;
        }
      }
    }
    [_renderHighlights]() {
      let selections = JSArrayOfCalendarSelection().of([]);
      for (let selection of this.state.selections) {
        selections[$add](selection.clamp({min: this.minDate, max: this.maxDate}));
      }
      if (this.state.preview != null && dart.test(this.state.has(this.state.currentSelection))) {
        let previewState = this.state.confirmPreview();
        let previewRange = previewState.selection(previewState.currentSelection).clamp({min: this.minDate, max: this.maxDate});
        selections[$add](new material_datepicker__calendar.CalendarSelection.new('preview', previewRange.start, previewRange.end));
      }
      for (let selection of selections) {
        this[_renderRange](selection);
      }
      if (dart.notNull(selections[$length]) <= 1) return;
      for (let i = 0; i < dart.notNull(selections[$length]); i++) {
        for (let j = 0; j < dart.notNull(selections[$length]); j++) {
          if (i === j) continue;
          let a = selections[$_get](i);
          let b = selections[$_get](j);
          if (dart.test(a.contains(b.start)) && dart.test(a.start['<'](b.start))) {
            let start = html.HtmlElement._check(this[_container].querySelector(this[_slotSelector](b.start)));
            if (start != null) {
              start[$classes].add('left');
              start[$classes].add(dart.str`left-${a.id}`);
            }
          }
          if (dart.test(a.contains(b.end)) && dart.test(a.end['>'](b.end))) {
            let end = html.HtmlElement._check(this[_container].querySelector(this[_slotSelector](b.end)));
            if (end != null) {
              end[$classes].add('right');
              end[$classes].add(dart.str`right-${a.id}`);
            }
          }
        }
      }
    }
    [_renderToday]() {
      let el = html.HtmlElement._check(this[_container].querySelector('.day-slot.today'));
      if (el != null) el[$classes].remove('today');
      el = html.HtmlElement._check(this[_container].querySelector(this[_slotSelector](this[_today])));
      if (el != null) el[$classes].add('today');
    }
    [_renderHover]() {
      let el = html.HtmlElement._check(this[_container].querySelector('.day-slot.hover'));
      if (el != null) el[$classes].remove('hover');
      if (this[_model].value.preview != null) {
        el = html.HtmlElement._check(this[_container].querySelector(this[_slotSelector](this[_model].value.preview)));
        if (el != null) el[$classes].add('hover');
      }
    }
    [_ensureSelectionIsVisible]() {
      if (dart.test(this[_renderedMonths][$isEmpty])) return;
      if (dart.test(this.state.selections[$isEmpty])) return;
      let currentSelection = this.state.selections[$firstWhere](dart.fn(s => s.id == this.state.currentSelection, CalendarSelectionTobool()), {orElse: dart.fn(() => null, VoidToNull())});
      if (currentSelection == null) return;
      let startMonth = new material_datepicker__material_calendar_picker._Month.fromDate(currentSelection.start);
      let endMonth = new material_datepicker__material_calendar_picker._Month.fromDate(currentSelection.end);
      let middleMonth = this[_renderedMonths][$_get](2);
      if (dart.test(startMonth['>'](middleMonth)) || dart.test(endMonth['<'](middleMonth))) {
        this[_scrollToMonth](dart.test(this.state.previewAnchoredAtStart) ? endMonth : startMonth);
      }
    }
    [_onCalendarChange](state) {
      if (dart.test(this.allowHighlightUpdates)) {
        if (state.cause === material_datepicker__calendar.CausedBy.external) {
          this[_ensureSelectionIsVisible]();
        }
        if (!dart.test(this[_isRenderScheduled])) {
          html.window[$requestAnimationFrame](dart.fn(_ => {
            this[_resetHighlights]();
            this[_renderHighlights]();
            this[_renderToday]();
            this[_renderHover]();
          }, numToNull()));
        }
      }
    }
    get [_initialDate]() {
      return dart.test(this.state.selections[$isEmpty]) ? this[_today] : this.state.selections[$_get](0).start;
    }
    set container(containerRef) {
      this[_container] = html.HtmlElement._check(containerRef.nativeElement);
      this[_scroller] = html.HtmlElement._check(this[_container][$parent]);
    }
    ngOnInit() {
      this[_calendarStream] = this[_model].stream.listen(dart.bind(this, _onCalendarChange));
      if (this[_mode] === material_datepicker__calendar.CalendarSelectionMode.SINGLE_DATE) {
        this[_inputListener] = src__material_datepicker__calendar_listener.CalendarListener.singleDate(this[_model]);
      }
      if (this[_mode] === material_datepicker__calendar.CalendarSelectionMode.DATE_RANGE) {
        this[_inputListener] = src__material_datepicker__calendar_listener.CalendarListener.dateRange(this[_model]);
      }
    }
    ngAfterViewInit() {
      this[_initializeEvents]();
      this[_resetContainerHeight]();
      this[_scrollToMonth](new material_datepicker__material_calendar_picker._Month.fromDate(this[_initialDate]));
      html.window[$requestAnimationFrame](dart.fn(_ => {
        this[_initializePanels]();
        this[_isRenderScheduled] = false;
      }, numToNull()));
    }
    ngOnDestroy() {
      let t = this[_calendarStream];
      t == null ? null : t.cancel();
      this[_scroller][$removeEventListener]('scroll', this[_scrollListener]);
      let _ = this[_container];
      _[$removeEventListener]('click', this[_clickListener]);
      _[$removeEventListener]('mousedown', this[_mouseDownListener]);
      _[$removeEventListener]('mousemove', this[_mouseMoveListener]);
      _[$removeEventListener]('mouseout', this[_mouseOutListener]);
    }
    [_initializePanels]() {
      if (!dart.test(utils__browser__feature_detector__feature_detector.isFirefox)) {
        this[_container][$classes].add('not-firefox');
      }
      for (let i = -2; i <= 2; i++) {
        this[_container][$append](material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._monthTemplate[$clone](true));
      }
      this[_renderVisible]();
    }
    [_initializeEvents]() {
      this[_scroller][$addEventListener]('scroll', this[_scrollListener] = dart.bind(this, _onScroll));
      let _ = this[_container];
      _[$addEventListener]('click', this[_clickListener] = dart.bind(this, _onClick));
      _[$addEventListener]('mousedown', this[_mouseDownListener] = dart.bind(this, _onMouseDown));
      _[$addEventListener]('mousemove', this[_mouseMoveListener] = dart.bind(this, _onMouseMove));
      _[$addEventListener]('mouseout', this[_mouseOutListener] = dart.bind(this, _onMouseOut));
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
    [_onMouseOut](event) {
      let date = this[_extractDate](event);
      if (dart.test(this[_canSelectDate](date))) {
        this[_inputListener].onMouseLeave(date);
      }
    }
    [_onScroll](event) {
      this[_scrollTop] = this[_scroller][$scrollTop];
      if (dart.test(this[_isRenderScheduled])) return;
      this[_isRenderScheduled] = true;
      html.window[$requestAnimationFrame](dart.fn(_ => {
        this[_renderVisible]();
        this[_isRenderScheduled] = false;
      }, numToNull()));
    }
  };
  (material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.new = function(clock, legacyClock, mode) {
    this[_model] = new (ObservableReferenceOfCalendarState()).new(new material_datepicker__calendar.CalendarState.empty(), {coalesce: true});
    this[_visibleMonthController] = StreamControllerOfDate().broadcast();
    this[_allowHighlightUpdates] = true;
    this[_minDate] = null;
    this[_minMonth] = null;
    this[_maxDate] = null;
    this[_maxMonth] = null;
    this[_compact] = false;
    this[_mode] = material_datepicker__calendar.CalendarSelectionMode.NONE;
    this[_today] = null;
    this[_isRenderScheduled] = true;
    this[_renderedMonths] = JSArrayOf_Month().of([]);
    this[_renderedOffsets] = JSArrayOfint().of([]);
    this[_scroller] = null;
    this[_container] = null;
    this[_scrollTop] = 0;
    this[_inputListener] = new src__material_datepicker__calendar_listener.CalendarListener.noop();
    this[_calendarStream] = null;
    this[_scrollListener] = null;
    this[_clickListener] = null;
    this[_mouseDownListener] = null;
    this[_mouseMoveListener] = null;
    this[_mouseOutListener] = null;
    let t = clock;
    t == null ? clock = legacyClock : t;
    this[_today] = model__date__date.Date.today(clock);
    let now = clock.now();
    this.minDate = new model__date__date.Date.new(dart.notNull(now.year) - 10, core.DateTime.JANUARY, 1);
    this.maxDate = new model__date__date.Date.new(dart.notNull(now.year) + 10, core.DateTime.DECEMBER, 31);
    if (mode != null && mode[$isNotEmpty]) {
      this[_mode] = material_datepicker__calendar.CalendarSelectionMode._check(src__material_datepicker__enum_parsing.fuzzyParseEnum(material_datepicker__calendar.CalendarSelectionMode.values, mode));
    }
  }).prototype = material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.prototype;
  dart.addTypeTests(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent);
  material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, () => ({
    __proto__: dart.getMethods(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.__proto__),
    [_monthHeight]: dart.fnType(core.int, [material_datepicker__material_calendar_picker._Month]),
    [_rangeHeight]: dart.fnType(core.int, [material_datepicker__material_calendar_picker._Month, material_datepicker__material_calendar_picker._Month]),
    [_monthAtOffset]: dart.fnType(material_datepicker__material_calendar_picker._Month, [core.int]),
    [_canSelectDate]: dart.fnType(core.bool, [model__date__date.Date]),
    [_extractDate]: dart.fnType(model__date__date.Date, [html.Event]),
    [_monthsSurrounding]: dart.fnType(core.List$(material_datepicker__material_calendar_picker._Month), [material_datepicker__material_calendar_picker._Month]),
    [_resetContainerHeight]: dart.fnType(dart.void, []),
    [_scrollToMonth]: dart.fnType(dart.void, [material_datepicker__material_calendar_picker._Month]),
    scrollToDate: dart.fnType(dart.void, [model__date__date.Date]),
    [_setText]: dart.fnType(dart.void, [html.HtmlElement, core.String]),
    [_renderMonth]: dart.fnType(dart.void, [material_datepicker__material_calendar_picker._Month, html.HtmlElement]),
    [_renderVisible]: dart.fnType(dart.void, []),
    [_slotSelector]: dart.fnType(core.String, [model__date__date.Date]),
    [_dateAttributeValue]: dart.fnType(core.String, [core.int, core.int, core.int]),
    [_renderRange]: dart.fnType(dart.void, [material_datepicker__calendar.CalendarSelection]),
    [_highlightElements]: dart.fnType(dart.void, [html.HtmlElement, html.HtmlElement, core.String]),
    [_highlightElement]: dart.fnType(dart.void, [html.HtmlElement, core.String]),
    [_resetHighlights]: dart.fnType(dart.void, []),
    [_renderHighlights]: dart.fnType(dart.void, []),
    [_renderToday]: dart.fnType(dart.void, []),
    [_renderHover]: dart.fnType(dart.void, []),
    [_ensureSelectionIsVisible]: dart.fnType(dart.void, []),
    [_onCalendarChange]: dart.fnType(dart.void, [material_datepicker__calendar.CalendarState]),
    ngOnInit: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_initializePanels]: dart.fnType(dart.void, []),
    [_initializeEvents]: dart.fnType(dart.void, []),
    [_onClick]: dart.fnType(dart.void, [html.Event]),
    [_onMouseDown]: dart.fnType(dart.void, [html.Event]),
    [_onMouseMove]: dart.fnType(dart.void, [html.Event]),
    [_onMouseOut]: dart.fnType(dart.void, [html.Event]),
    [_onScroll]: dart.fnType(dart.void, [html.Event])
  }));
  dart.setStaticMethodSignature(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, () => ({
    _rotateDayOfWeek: dart.fnType(core.int, [core.int, core.int]),
    _dayOfWeekIndex: dart.fnType(core.int, [core.int]),
    _createMonthTemplate: dart.fnType(html.DocumentFragment, [])
  }));
  dart.setGetterSignature(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, () => ({
    __proto__: dart.getGetters(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.__proto__),
    state: dart.fnType(material_datepicker__calendar.CalendarState, []),
    stateChange: dart.fnType(async.Stream$(material_datepicker__calendar.CalendarState), []),
    visibleMonth: dart.fnType(async.Stream$(model__date__date.Date), []),
    allowHighlightUpdates: dart.fnType(core.bool, []),
    minDate: dart.fnType(model__date__date.Date, []),
    maxDate: dart.fnType(model__date__date.Date, []),
    compact: dart.fnType(core.bool, []),
    mode: dart.fnType(material_datepicker__calendar.CalendarSelectionMode, []),
    dayNames: dart.fnType(core.List$(core.String), []),
    [_rowHeightPx]: dart.fnType(core.int, []),
    [_initialDate]: dart.fnType(model__date__date.Date, [])
  }));
  dart.setSetterSignature(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, () => ({
    __proto__: dart.getSetters(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.__proto__),
    state: dart.fnType(dart.void, [material_datepicker__calendar.CalendarState]),
    allowHighlightUpdates: dart.fnType(dart.void, [dart.dynamic]),
    minDate: dart.fnType(dart.void, [model__date__date.Date]),
    maxDate: dart.fnType(dart.void, [model__date__date.Date]),
    compact: dart.fnType(dart.void, [dart.dynamic]),
    container: dart.fnType(dart.void, [src__core__linker__element_ref.ElementRef])
  }));
  dart.setFieldSignature(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, () => ({
    __proto__: dart.getFields(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.__proto__),
    [_model]: dart.fieldType(ObservableReferenceOfCalendarState()),
    [_visibleMonthController]: dart.finalFieldType(StreamControllerOfDate()),
    [_allowHighlightUpdates]: dart.fieldType(core.bool),
    [_minDate]: dart.fieldType(model__date__date.Date),
    [_minMonth]: dart.fieldType(material_datepicker__material_calendar_picker._Month),
    [_maxDate]: dart.fieldType(model__date__date.Date),
    [_maxMonth]: dart.fieldType(material_datepicker__material_calendar_picker._Month),
    [_compact]: dart.fieldType(core.bool),
    [_mode]: dart.fieldType(material_datepicker__calendar.CalendarSelectionMode),
    [_today]: dart.fieldType(model__date__date.Date),
    [_isRenderScheduled]: dart.fieldType(core.bool),
    [_renderedMonths]: dart.fieldType(ListOf_Month()),
    [_renderedOffsets]: dart.fieldType(ListOfint()),
    [_scroller]: dart.fieldType(html.HtmlElement),
    [_container]: dart.fieldType(html.HtmlElement),
    [_scrollTop]: dart.fieldType(core.int),
    [_inputListener]: dart.fieldType(src__material_datepicker__calendar_listener.CalendarListener),
    [_calendarStream]: dart.fieldType(async.StreamSubscription),
    [_scrollListener]: dart.fieldType(EventTodynamic()),
    [_clickListener]: dart.fieldType(EventTodynamic()),
    [_mouseDownListener]: dart.fieldType(EventTodynamic()),
    [_mouseMoveListener]: dart.fieldType(EventTodynamic()),
    [_mouseOutListener]: dart.fieldType(EventTodynamic())
  }));
  dart.defineLazy(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, {
    /*material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.DATE_HEIGHT_PX*/get DATE_HEIGHT_PX() {
      return 48;
    },
    /*material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.DATE_COMPACT_HEIGHT_PX*/get DATE_COMPACT_HEIGHT_PX() {
      return 36;
    },
    /*material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.WEEK_ROWS_IN_MONTH*/get WEEK_ROWS_IN_MONTH() {
      return 6;
    },
    /*material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._overdraw*/get _overdraw() {
      return 2;
    },
    /*material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._inViewThreshold*/get _inViewThreshold() {
      return 0.5;
    },
    /*material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._monthTitleWidth*/get _monthTitleWidth() {
      return 3;
    },
    /*material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._dateAttribute*/get _dateAttribute() {
      return 'data-date';
    },
    /*material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._dateSeparator*/get _dateSeparator() {
      return '-';
    },
    /*material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._firstDayOfWeek*/get _firstDayOfWeek() {
      return material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._rotateDayOfWeek(1, new intl$.DateFormat.new().dateSymbols.FIRSTDAYOFWEEK);
    },
    /*material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._defaultDayNames*/get _defaultDayNames() {
      return new intl$.DateFormat.new().dateSymbols.STANDALONENARROWWEEKDAYS;
    },
    /*material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._dayNames*/get _dayNames() {
      let _ = material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._defaultDayNames[$sublist](material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._firstDayOfWeek);
      _[$addAll](material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._defaultDayNames[$sublist](0, material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._firstDayOfWeek));
      return _;
    },
    /*material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._monthTemplate*/get _monthTemplate() {
      return material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent._createMonthTemplate();
    }
  });
  material_datepicker__material_calendar_picker._Month = class _Month extends core.Object {
    next() {
      if ((this.month = dart.notNull(this.month) + 1) > 12) {
        this.year = dart.notNull(this.year) + 1;
        this.month = 1;
      }
    }
    prev() {
      if ((this.month = dart.notNull(this.month) - 1) < 1) {
        this.year = dart.notNull(this.year) - 1;
        this.month = 12;
      }
    }
    copy() {
      return new material_datepicker__material_calendar_picker._Month.new(this.year, this.month);
    }
    add(months) {
      let result = this.copy();
      let increment = dart.bind(result, 'next');
      if (dart.notNull(months) < 0) {
        months = -dart.notNull(months);
        increment = dart.bind(result, 'prev');
      }
      for (let i = 0; i < dart.notNull(months); i++)
        increment();
      return result;
    }
    get title() {
      return material_datepicker__material_calendar_picker._Month._monthNames[$_get](dart.notNull(this.month) - 1)[$replaceFirst](dart.str`${9999}`, dart.str`${this.year}`);
    }
    get startDay() {
      return material_datepicker__material_calendar_picker._dayOfWeek(this.year, this.month, 1);
    }
    get days() {
      if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) {
        return 30;
      } else if (this.month === 2) {
        let isLeapYear = this.year[$remainder](4) === 0 && this.year[$remainder](100) !== 0 || this.year[$remainder](400) === 0;
        return isLeapYear ? 29 : 28;
      } else {
        return 31;
      }
    }
    get start() {
      return new model__date__date.Date.new(this.year, this.month, 1);
    }
    get end() {
      return new model__date__date.Date.new(this.year, this.month, this.days);
    }
    _equals(o) {
      if (o == null) return false;
      return core.identical(this.year, dart.dload(o, 'year')) && core.identical(this.month, dart.dload(o, 'month'));
    }
    ['<'](o) {
      return dart.notNull(this.year) < dart.notNull(core.num._check(dart.dload(o, 'year'))) || core.identical(this.year, dart.dload(o, 'year')) && dart.notNull(this.month) < dart.notNull(core.num._check(dart.dload(o, 'month')));
    }
    ['>'](o) {
      return dart.notNull(this.year) > dart.notNull(core.num._check(dart.dload(o, 'year'))) || core.identical(this.year, dart.dload(o, 'year')) && dart.notNull(this.month) > dart.notNull(core.num._check(dart.dload(o, 'month')));
    }
    ['<='](o) {
      return this._equals(o) || dart.test(this['<'](o));
    }
    ['>='](o) {
      return this._equals(o) || dart.test(this['>'](o));
    }
    toString() {
      return dart.str`${this.year}-${this.month}`;
    }
  };
  (material_datepicker__material_calendar_picker._Month.new = function(year, month) {
    this.year = year;
    this.month = month;
  }).prototype = material_datepicker__material_calendar_picker._Month.prototype;
  (material_datepicker__material_calendar_picker._Month.fromDate = function(date) {
    this.year = date.year;
    this.month = date.month;
  }).prototype = material_datepicker__material_calendar_picker._Month.prototype;
  dart.addTypeTests(material_datepicker__material_calendar_picker._Month);
  dart.setMethodSignature(material_datepicker__material_calendar_picker._Month, () => ({
    __proto__: dart.getMethods(material_datepicker__material_calendar_picker._Month.__proto__),
    next: dart.fnType(dart.void, []),
    prev: dart.fnType(dart.void, []),
    copy: dart.fnType(material_datepicker__material_calendar_picker._Month, []),
    add: dart.fnType(material_datepicker__material_calendar_picker._Month, [core.int]),
    '<': dart.fnType(core.bool, [dart.dynamic]),
    '>': dart.fnType(core.bool, [dart.dynamic]),
    '<=': dart.fnType(core.bool, [dart.dynamic]),
    '>=': dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__material_calendar_picker._Month, () => ({
    __proto__: dart.getGetters(material_datepicker__material_calendar_picker._Month.__proto__),
    title: dart.fnType(core.String, []),
    startDay: dart.fnType(core.int, []),
    days: dart.fnType(core.int, []),
    start: dart.fnType(model__date__date.Date, []),
    end: dart.fnType(model__date__date.Date, [])
  }));
  dart.setFieldSignature(material_datepicker__material_calendar_picker._Month, () => ({
    __proto__: dart.getFields(material_datepicker__material_calendar_picker._Month.__proto__),
    year: dart.fieldType(core.int),
    month: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(material_datepicker__material_calendar_picker._Month, ['_equals', 'toString']);
  dart.defineLazy(material_datepicker__material_calendar_picker._Month, {
    /*material_datepicker__material_calendar_picker._Month._yearPlaceholder*/get _yearPlaceholder() {
      return 9999;
    },
    /*material_datepicker__material_calendar_picker._Month._monthFormatter*/get _monthFormatter() {
      return new intl$.DateFormat.yMMM();
    },
    /*material_datepicker__material_calendar_picker._Month._monthNames*/get _monthNames() {
      return ListOfint().generate(12, dart.fn(i => dart.notNull(i) + 1, intToint()))[$map](core.String, dart.fn(i => material_datepicker__material_calendar_picker._Month._monthFormatter.format(new core.DateTime.new(9999, i)), intToString()))[$toList]();
    }
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/material_calendar_picker.ddc", {
    "package:angular_components/material_datepicker/material_calendar_picker.dart": material_datepicker__material_calendar_picker
  }, '{"version":3,"sourceRoot":"","sources":["material_calendar_picker.dart"],"names":[],"mappings":"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","file":"material_calendar_picker.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_calendar_picker: material_datepicker__material_calendar_picker
  };
});

//# sourceMappingURL=material_calendar_picker.ddc.js.map
