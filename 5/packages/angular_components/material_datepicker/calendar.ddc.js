define(['dart_sdk', 'packages/angular_components/model/date/date', 'packages/collection/src/equality', 'packages/intl/intl'], function(dart_sdk, date, equality, intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__date__date = date.model__date__date;
  const src__equality = equality.src__equality;
  const intl$ = intl.intl;
  const _root = Object.create(null);
  const material_datepicker__calendar = Object.create(_root);
  const $toList = dartx.toList;
  const $expand = dartx.expand;
  const $where = dartx.where;
  const $addAll = dartx.addAll;
  const $map = dartx.map;
  const $forEach = dartx.forEach;
  const $isNotEmpty = dartx.isNotEmpty;
  const $compareTo = dartx.compareTo;
  const $hashCode = dartx.hashCode;
  const $first = dartx.first;
  const $any = dartx.any;
  const $singleWhere = dartx.singleWhere;
  const $_get = dartx._get;
  const $floor = dartx.floor;
  const $modulo = dartx['%'];
  const $truncate = dartx.truncate;
  const $round = dartx.round;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let CalendarSelectionToListOfString = () => (CalendarSelectionToListOfString = dart.constFn(dart.fnType(ListOfString(), [material_datepicker__calendar.CalendarSelection])))();
  let CalendarSelectionTobool = () => (CalendarSelectionTobool = dart.constFn(dart.fnType(core.bool, [material_datepicker__calendar.CalendarSelection])))();
  let CalendarSelectionToString = () => (CalendarSelectionToString = dart.constFn(dart.fnType(core.String, [material_datepicker__calendar.CalendarSelection])))();
  let ListOfCalendarSelection = () => (ListOfCalendarSelection = dart.constFn(core.List$(material_datepicker__calendar.CalendarSelection)))();
  let HighlightTobool = () => (HighlightTobool = dart.constFn(dart.fnType(core.bool, [material_datepicker__calendar.Highlight])))();
  let HighlightToListOfString = () => (HighlightToListOfString = dart.constFn(dart.fnType(ListOfString(), [material_datepicker__calendar.Highlight])))();
  let JSArrayOfCalendarSelection = () => (JSArrayOfCalendarSelection = dart.constFn(_interceptors.JSArray$(material_datepicker__calendar.CalendarSelection)))();
  let SyncIterableOfHighlight = () => (SyncIterableOfHighlight = dart.constFn(_js_helper.SyncIterable$(material_datepicker__calendar.Highlight)))();
  let ListOfHighlight = () => (ListOfHighlight = dart.constFn(core.List$(material_datepicker__calendar.Highlight)))();
  let DateAndDateAndCalendarResolutionTobool = () => (DateAndDateAndCalendarResolutionTobool = dart.constFn(dart.fnType(core.bool, [model__date__date.Date, model__date__date.Date, material_datepicker__calendar.CalendarResolution])))();
  let DateAndDateAndCalendarResolutionToint = () => (DateAndDateAndCalendarResolutionToint = dart.constFn(dart.fnType(core.int, [model__date__date.Date, model__date__date.Date, material_datepicker__calendar.CalendarResolution])))();
  let DateToDate = () => (DateToDate = dart.constFn(dart.fnType(model__date__date.Date, [model__date__date.Date])))();
  let CalendarSelectionToCalendarSelection = () => (CalendarSelectionToCalendarSelection = dart.constFn(dart.fnType(material_datepicker__calendar.CalendarSelection, [material_datepicker__calendar.CalendarSelection])))();
  let JSArrayOfCalendarWeek = () => (JSArrayOfCalendarWeek = dart.constFn(_interceptors.JSArray$(material_datepicker__calendar.CalendarWeek)))();
  let CalendarWeekTovoid = () => (CalendarWeekTovoid = dart.constFn(dart.fnType(dart.void, [material_datepicker__calendar.CalendarWeek])))();
  let SyncIterableOfCalendarWeek = () => (SyncIterableOfCalendarWeek = dart.constFn(_js_helper.SyncIterable$(material_datepicker__calendar.CalendarWeek)))();
  let ListOfCalendarWeek = () => (ListOfCalendarWeek = dart.constFn(core.List$(material_datepicker__calendar.CalendarWeek)))();
  let intToCalendarMonth = () => (intToCalendarMonth = dart.constFn(dart.fnType(material_datepicker__calendar.CalendarMonth, [core.int])))();
  let ListOfCalendarMonth = () => (ListOfCalendarMonth = dart.constFn(core.List$(material_datepicker__calendar.CalendarMonth)))();
  let JSArrayOfCalendarDay = () => (JSArrayOfCalendarDay = dart.constFn(_interceptors.JSArray$(material_datepicker__calendar.CalendarDay)))();
  let CalendarDayTovoid = () => (CalendarDayTovoid = dart.constFn(dart.fnType(dart.void, [material_datepicker__calendar.CalendarDay])))();
  let DateToCalendarDay = () => (DateToCalendarDay = dart.constFn(dart.fnType(material_datepicker__calendar.CalendarDay, [model__date__date.Date])))();
  let SyncIterableOfDate = () => (SyncIterableOfDate = dart.constFn(_js_helper.SyncIterable$(model__date__date.Date)))();
  let ListOfCalendarDay = () => (ListOfCalendarDay = dart.constFn(core.List$(material_datepicker__calendar.CalendarDay)))();
  let JSArrayOfCalendarMonth = () => (JSArrayOfCalendarMonth = dart.constFn(_interceptors.JSArray$(material_datepicker__calendar.CalendarMonth)))();
  let CalendarMonthTovoid = () => (CalendarMonthTovoid = dart.constFn(dart.fnType(dart.void, [material_datepicker__calendar.CalendarMonth])))();
  let intToDate = () => (intToDate = dart.constFn(dart.fnType(model__date__date.Date, [core.int])))();
  let IterableOfDate = () => (IterableOfDate = dart.constFn(core.Iterable$(model__date__date.Date)))();
  let CalendarMonthTobool = () => (CalendarMonthTobool = dart.constFn(dart.fnType(core.bool, [material_datepicker__calendar.CalendarMonth])))();
  let SyncIterableOfCalendarMonth = () => (SyncIterableOfCalendarMonth = dart.constFn(_js_helper.SyncIterable$(material_datepicker__calendar.CalendarMonth)))();
  let intToCalendarYear = () => (intToCalendarYear = dart.constFn(dart.fnType(material_datepicker__calendar.CalendarYear, [core.int])))();
  let ListOfCalendarYear = () => (ListOfCalendarYear = dart.constFn(core.List$(material_datepicker__calendar.CalendarYear)))();
  const _classes = Symbol('_classes');
  const _boundaryClasses = Symbol('_boundaryClasses');
  material_datepicker__calendar.CalendarDay = class CalendarDay extends core.Object {
    get date() {
      return this[date$];
    }
    set date(value) {
      super.date = value;
    }
    updateClasses(state) {
      this[_classes] = state != null ? this[_boundaryClasses](state)[$toList]() : JSArrayOfString().of([]);
    }
    get day() {
      return this.date.day;
    }
    get classes() {
      return this[_classes];
    }
    [_boundaryClasses](state) {
      return state.selections[$where](dart.fn(r => dart.equals(r.start, this.date) || dart.equals(r.end, this.date), CalendarSelectionTobool()))[$expand](core.String, dart.fn(r => JSArrayOfString().of(['boundary', dart.str`boundary-${r.id}`]), CalendarSelectionToListOfString()));
    }
  };
  (material_datepicker__calendar.CalendarDay.new = function(date, state) {
    this[_classes] = null;
    this[date$] = date;
    this.updateClasses(state);
  }).prototype = material_datepicker__calendar.CalendarDay.prototype;
  dart.addTypeTests(material_datepicker__calendar.CalendarDay);
  const date$ = Symbol("CalendarDay.date");
  dart.setMethodSignature(material_datepicker__calendar.CalendarDay, () => ({
    __proto__: dart.getMethods(material_datepicker__calendar.CalendarDay.__proto__),
    updateClasses: dart.fnType(dart.void, [material_datepicker__calendar.CalendarState]),
    [_boundaryClasses]: dart.fnType(core.Iterable$(core.String), [material_datepicker__calendar.CalendarState])
  }));
  dart.setGetterSignature(material_datepicker__calendar.CalendarDay, () => ({
    __proto__: dart.getGetters(material_datepicker__calendar.CalendarDay.__proto__),
    day: dart.fnType(core.int, []),
    classes: dart.fnType(core.List$(core.String), [])
  }));
  dart.setFieldSignature(material_datepicker__calendar.CalendarDay, () => ({
    __proto__: dart.getFields(material_datepicker__calendar.CalendarDay.__proto__),
    date: dart.finalFieldType(model__date__date.Date),
    [_classes]: dart.fieldType(ListOfString())
  }));
  const _initClasses = Symbol('_initClasses');
  const _positionClasses = Symbol('_positionClasses');
  const _colorClasses = Symbol('_colorClasses');
  material_datepicker__calendar.Highlight = class Highlight extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get containedRanges() {
      return this[containedRanges$];
    }
    set containedRanges(value) {
      super.containedRanges = value;
    }
    get classIndexOffset() {
      return this[classIndexOffset$];
    }
    set classIndexOffset(value) {
      super.classIndexOffset = value;
    }
    get group() {
      return this[group$];
    }
    set group(value) {
      super.group = value;
    }
    get classes() {
      let l = this[_classes];
      return l != null ? l : this[_initClasses]();
    }
    [_initClasses]() {
      let _ = JSArrayOfString().of(['highlight']);
      _[$addAll](this[_positionClasses]());
      _[$addAll](this[_colorClasses]());
      this[_classes] = _;
      return this[_classes];
    }
    [_positionClasses]() {
      return JSArrayOfString().of([dart.str`start-${dart.notNull(this.start) + dart.notNull(this.classIndexOffset)}`, dart.str`end-${dart.notNull(this.end) + dart.notNull(this.classIndexOffset)}`]);
    }
    [_colorClasses]() {
      return this.containedRanges[$map](core.String, dart.fn(r => dart.str`highlight-${r.id}`, CalendarSelectionToString()));
    }
    toString() {
      return dart.str`Highlight on ${this.containedRanges} (${this.start} - ${this.end})`;
    }
  };
  (material_datepicker__calendar.Highlight.new = function(start, end, containedRanges, opts) {
    let classIndexOffset = opts && 'classIndexOffset' in opts ? opts.classIndexOffset : 0;
    let group = opts && 'group' in opts ? opts.group : 0;
    this[_classes] = null;
    this[start$] = start;
    this[end$] = end;
    this[containedRanges$] = containedRanges;
    this[classIndexOffset$] = classIndexOffset;
    this[group$] = group;
  }).prototype = material_datepicker__calendar.Highlight.prototype;
  dart.addTypeTests(material_datepicker__calendar.Highlight);
  const start$ = Symbol("Highlight.start");
  const end$ = Symbol("Highlight.end");
  const containedRanges$ = Symbol("Highlight.containedRanges");
  const classIndexOffset$ = Symbol("Highlight.classIndexOffset");
  const group$ = Symbol("Highlight.group");
  dart.setMethodSignature(material_datepicker__calendar.Highlight, () => ({
    __proto__: dart.getMethods(material_datepicker__calendar.Highlight.__proto__),
    [_initClasses]: dart.fnType(core.List$(core.String), []),
    [_positionClasses]: dart.fnType(core.List$(core.String), []),
    [_colorClasses]: dart.fnType(core.Iterable$(core.String), [])
  }));
  dart.setGetterSignature(material_datepicker__calendar.Highlight, () => ({
    __proto__: dart.getGetters(material_datepicker__calendar.Highlight.__proto__),
    classes: dart.fnType(core.List$(core.String), [])
  }));
  dart.setFieldSignature(material_datepicker__calendar.Highlight, () => ({
    __proto__: dart.getFields(material_datepicker__calendar.Highlight.__proto__),
    start: dart.finalFieldType(core.int),
    end: dart.finalFieldType(core.int),
    containedRanges: dart.finalFieldType(ListOfCalendarSelection()),
    classIndexOffset: dart.finalFieldType(core.int),
    group: dart.finalFieldType(core.int),
    [_classes]: dart.fieldType(ListOfString())
  }));
  dart.defineExtensionMethods(material_datepicker__calendar.Highlight, ['toString']);
  const _state = Symbol('_state');
  const _highlights = Symbol('_highlights');
  const _mergedHighlights = Symbol('_mergedHighlights');
  const _updateHighlights = Symbol('_updateHighlights');
  const _matching = Symbol('_matching');
  const _generateHighlights = Symbol('_generateHighlights');
  material_datepicker__calendar._HasHighlights = class _HasHighlights extends core.Object {
    static _matchingRangesEq(a, b) {
      return core.bool._check(dart.dcall(material_datepicker__calendar._HasHighlights._setEq, a.containedRanges[$map](core.String, dart.fn(r => r.id, CalendarSelectionToString())), b.containedRanges[$map](core.String, dart.fn(r => r.id, CalendarSelectionToString()))));
    }
    get highlights() {
      return this[_highlights];
    }
    highlightsInGroup(group) {
      return this.highlights[$where](dart.fn(h => h.group == group, HighlightTobool()));
    }
    [_updateHighlights]() {
      this[_highlights] = this[_mergedHighlights]()[$toList]();
      this[_highlights][$forEach](dart.fn(h => h.classes, HighlightToListOfString()));
    }
    [_matching](a, b) {
      let t = this[_state];
      let l = t == null ? null : t.selections;
      let selections = l != null ? l : JSArrayOfCalendarSelection().of([]);
      return selections[$where](dart.fn(r => dart.test(this[_state].highlighted(r.id, a)) && dart.test(this[_state].highlighted(r.id, b)), CalendarSelectionTobool()))[$toList]();
    }
    [_mergedHighlights]() {
      return new (SyncIterableOfHighlight()).new((function* _mergedHighlights() {
        let current = new material_datepicker__calendar.Highlight.new(0, 0, JSArrayOfCalendarSelection().of([]));
        for (let h of this[_generateHighlights]()) {
          if (dart.test(material_datepicker__calendar._HasHighlights._matchingRangesEq(h, current))) {
            current = new material_datepicker__calendar.Highlight.new(current.start, h.end, h.containedRanges);
          } else {
            if (dart.test(current.containedRanges[$isNotEmpty])) {
              yield current;
            }
            current = h;
          }
        }
        if (dart.test(current.containedRanges[$isNotEmpty])) {
          yield current;
        }
      }).bind(this));
    }
  };
  (material_datepicker__calendar._HasHighlights.new = function(state) {
    this[_highlights] = null;
    this[_state] = state;
  }).prototype = material_datepicker__calendar._HasHighlights.prototype;
  dart.addTypeTests(material_datepicker__calendar._HasHighlights);
  dart.setMethodSignature(material_datepicker__calendar._HasHighlights, () => ({
    __proto__: dart.getMethods(material_datepicker__calendar._HasHighlights.__proto__),
    highlightsInGroup: dart.fnType(core.Iterable$(material_datepicker__calendar.Highlight), [core.int]),
    [_updateHighlights]: dart.fnType(dart.void, []),
    [_matching]: dart.fnType(core.List$(material_datepicker__calendar.CalendarSelection), [model__date__date.Date, model__date__date.Date]),
    [_mergedHighlights]: dart.fnType(core.Iterable$(material_datepicker__calendar.Highlight), [])
  }));
  dart.setStaticMethodSignature(material_datepicker__calendar._HasHighlights, () => ({_matchingRangesEq: dart.fnType(core.bool, [material_datepicker__calendar.Highlight, material_datepicker__calendar.Highlight])}));
  dart.setGetterSignature(material_datepicker__calendar._HasHighlights, () => ({
    __proto__: dart.getGetters(material_datepicker__calendar._HasHighlights.__proto__),
    highlights: dart.fnType(core.List$(material_datepicker__calendar.Highlight), [])
  }));
  dart.setFieldSignature(material_datepicker__calendar._HasHighlights, () => ({
    __proto__: dart.getFields(material_datepicker__calendar._HasHighlights.__proto__),
    [_state]: dart.fieldType(material_datepicker__calendar.CalendarState),
    [_highlights]: dart.fieldType(ListOfHighlight())
  }));
  dart.defineLazy(material_datepicker__calendar._HasHighlights, {
    /*material_datepicker__calendar._HasHighlights._setEq*/get _setEq() {
      return dart.bind(new src__equality.UnorderedIterableEquality.new(), 'equals');
    }
  });
  material_datepicker__calendar.CalendarResolution = class CalendarResolution extends core.Object {
    toString() {
      return {
        0: "CalendarResolution.days",
        1: "CalendarResolution.weeks",
        2: "CalendarResolution.months",
        3: "CalendarResolution.years"
      }[this.index];
    }
  };
  (material_datepicker__calendar.CalendarResolution.new = function(x) {
    this.index = x;
  }).prototype = material_datepicker__calendar.CalendarResolution.prototype;
  dart.addTypeTests(material_datepicker__calendar.CalendarResolution);
  dart.setFieldSignature(material_datepicker__calendar.CalendarResolution, () => ({
    __proto__: dart.getFields(material_datepicker__calendar.CalendarResolution.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(material_datepicker__calendar.CalendarResolution, ['toString']);
  material_datepicker__calendar.CalendarResolution.days = dart.const(new material_datepicker__calendar.CalendarResolution.new(0));
  material_datepicker__calendar.CalendarResolution.weeks = dart.const(new material_datepicker__calendar.CalendarResolution.new(1));
  material_datepicker__calendar.CalendarResolution.months = dart.const(new material_datepicker__calendar.CalendarResolution.new(2));
  material_datepicker__calendar.CalendarResolution.years = dart.const(new material_datepicker__calendar.CalendarResolution.new(3));
  material_datepicker__calendar.CalendarResolution.values = dart.constList([material_datepicker__calendar.CalendarResolution.days, material_datepicker__calendar.CalendarResolution.weeks, material_datepicker__calendar.CalendarResolution.months, material_datepicker__calendar.CalendarResolution.years], material_datepicker__calendar.CalendarResolution);
  material_datepicker__calendar.CalendarSelectionMode = class CalendarSelectionMode extends core.Object {
    toString() {
      return {
        0: "CalendarSelectionMode.NONE",
        1: "CalendarSelectionMode.SINGLE_DATE",
        2: "CalendarSelectionMode.DATE_RANGE"
      }[this.index];
    }
  };
  (material_datepicker__calendar.CalendarSelectionMode.new = function(x) {
    this.index = x;
  }).prototype = material_datepicker__calendar.CalendarSelectionMode.prototype;
  dart.addTypeTests(material_datepicker__calendar.CalendarSelectionMode);
  dart.setFieldSignature(material_datepicker__calendar.CalendarSelectionMode, () => ({
    __proto__: dart.getFields(material_datepicker__calendar.CalendarSelectionMode.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(material_datepicker__calendar.CalendarSelectionMode, ['toString']);
  material_datepicker__calendar.CalendarSelectionMode.NONE = dart.const(new material_datepicker__calendar.CalendarSelectionMode.new(0));
  material_datepicker__calendar.CalendarSelectionMode.SINGLE_DATE = dart.const(new material_datepicker__calendar.CalendarSelectionMode.new(1));
  material_datepicker__calendar.CalendarSelectionMode.DATE_RANGE = dart.const(new material_datepicker__calendar.CalendarSelectionMode.new(2));
  material_datepicker__calendar.CalendarSelectionMode.values = dart.constList([material_datepicker__calendar.CalendarSelectionMode.NONE, material_datepicker__calendar.CalendarSelectionMode.SINGLE_DATE, material_datepicker__calendar.CalendarSelectionMode.DATE_RANGE], material_datepicker__calendar.CalendarSelectionMode);
  material_datepicker__calendar.datesEqualAtResolution = function(a, b, resolution) {
    switch (resolution) {
      case material_datepicker__calendar.CalendarResolution.years:
      {
        return a.year == b.year;
      }
      case material_datepicker__calendar.CalendarResolution.months:
      {
        return a.year == b.year && a.month == b.month;
      }
      case material_datepicker__calendar.CalendarResolution.days:
      {
        return dart.equals(a, b);
      }
      case material_datepicker__calendar.CalendarResolution.weeks:
      default:
      {
        dart.throw(new core.ArgumentError.new(dart.str`Equality not supported at resolution: ${resolution}`));
      }
    }
  };
  dart.fn(material_datepicker__calendar.datesEqualAtResolution, DateAndDateAndCalendarResolutionTobool());
  material_datepicker__calendar.compareDatesAtResolution = function(a, b, resolution) {
    switch (resolution) {
      case material_datepicker__calendar.CalendarResolution.years:
      {
        return a.year[$compareTo](b.year);
      }
      case material_datepicker__calendar.CalendarResolution.months:
      {
        if (a.year == b.year) return a.month[$compareTo](b.month);
        return a.year[$compareTo](b.year);
      }
      case material_datepicker__calendar.CalendarResolution.days:
      {
        return a.compareTo(b);
      }
      case material_datepicker__calendar.CalendarResolution.weeks:
      default:
      {
        dart.throw(new core.ArgumentError.new(dart.str`Comparison not supported at resolution: ${resolution}`));
      }
    }
  };
  dart.fn(material_datepicker__calendar.compareDatesAtResolution, DateAndDateAndCalendarResolutionToint());
  material_datepicker__calendar.CalendarSelection = class CalendarSelection extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get start() {
      return this[start$0];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$0];
    }
    set end(value) {
      super.end = value;
    }
    contains(date) {
      return date != null && (this.start == null || !dart.test(date.isBefore(this.start))) && (this.end == null || !dart.test(date.isAfter(this.end)));
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      min = min != null ? min : this.start;
      max = max != null ? max : this.end;
      if (min != null) {
        min = model__date__date.laterOf(min, this.start != null ? this.start : min);
      }
      if (max != null) {
        max = model__date__date.earlierOf(max, this.end != null ? this.end : max);
      }
      return new material_datepicker__calendar.CalendarSelection.new(this.id, min, max);
    }
    toString() {
      return dart.str`${this.id} (${this.start} - ${this.end})`;
    }
    get hashCode() {
      return (dart.hashCode(this.id) ^ dart.notNull(dart.hashCode(this.start)) ^ dart.notNull(dart.hashCode(this.end))) >>> 0;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__calendar.CalendarSelection.is(o) && o.id == this.id && dart.equals(o.start, this.start) && dart.equals(o.end, this.end);
    }
  };
  (material_datepicker__calendar.CalendarSelection.new = function(id, start, end) {
    this[id$] = id;
    this[start$0] = start;
    this[end$0] = end;
  }).prototype = material_datepicker__calendar.CalendarSelection.prototype;
  (material_datepicker__calendar.CalendarSelection.guessOrder = function(id, a, b) {
    material_datepicker__calendar.CalendarSelection.new.call(this, id, model__date__date.earlierOf(a, b), model__date__date.laterOf(a, b));
  }).prototype = material_datepicker__calendar.CalendarSelection.prototype;
  dart.addTypeTests(material_datepicker__calendar.CalendarSelection);
  const id$ = Symbol("CalendarSelection.id");
  const start$0 = Symbol("CalendarSelection.start");
  const end$0 = Symbol("CalendarSelection.end");
  dart.setMethodSignature(material_datepicker__calendar.CalendarSelection, () => ({
    __proto__: dart.getMethods(material_datepicker__calendar.CalendarSelection.__proto__),
    contains: dart.fnType(core.bool, [model__date__date.Date]),
    clamp: dart.fnType(material_datepicker__calendar.CalendarSelection, [], {min: model__date__date.Date, max: model__date__date.Date})
  }));
  dart.setFieldSignature(material_datepicker__calendar.CalendarSelection, () => ({
    __proto__: dart.getFields(material_datepicker__calendar.CalendarSelection.__proto__),
    id: dart.finalFieldType(core.String),
    start: dart.finalFieldType(model__date__date.Date),
    end: dart.finalFieldType(model__date__date.Date)
  }));
  dart.defineExtensionMethods(material_datepicker__calendar.CalendarSelection, ['toString', '_equals']);
  dart.defineExtensionAccessors(material_datepicker__calendar.CalendarSelection, ['hashCode']);
  material_datepicker__calendar.firstDayOfMonth = function(date) {
    return date == null ? null : new model__date__date.Date.new(date.year, date.month, 1);
  };
  dart.fn(material_datepicker__calendar.firstDayOfMonth, DateToDate());
  material_datepicker__calendar.lastDayOfMonth = function(date) {
    return date == null ? null : new model__date__date.Date.new(date.year, dart.notNull(date.month) + 1, 1).add({days: -1});
  };
  dart.fn(material_datepicker__calendar.lastDayOfMonth, DateToDate());
  material_datepicker__calendar.CausedBy = class CausedBy extends core.Object {
    toString() {
      return {
        0: "CausedBy.external",
        1: "CausedBy.preview",
        2: "CausedBy.drag",
        3: "CausedBy.endpointConfirm",
        4: "CausedBy.rangeConfirm"
      }[this.index];
    }
  };
  (material_datepicker__calendar.CausedBy.new = function(x) {
    this.index = x;
  }).prototype = material_datepicker__calendar.CausedBy.prototype;
  dart.addTypeTests(material_datepicker__calendar.CausedBy);
  dart.setFieldSignature(material_datepicker__calendar.CausedBy, () => ({
    __proto__: dart.getFields(material_datepicker__calendar.CausedBy.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(material_datepicker__calendar.CausedBy, ['toString']);
  material_datepicker__calendar.CausedBy.external = dart.const(new material_datepicker__calendar.CausedBy.new(0));
  material_datepicker__calendar.CausedBy.preview = dart.const(new material_datepicker__calendar.CausedBy.new(1));
  material_datepicker__calendar.CausedBy.drag = dart.const(new material_datepicker__calendar.CausedBy.new(2));
  material_datepicker__calendar.CausedBy.endpointConfirm = dart.const(new material_datepicker__calendar.CausedBy.new(3));
  material_datepicker__calendar.CausedBy.rangeConfirm = dart.const(new material_datepicker__calendar.CausedBy.new(4));
  material_datepicker__calendar.CausedBy.values = dart.constList([material_datepicker__calendar.CausedBy.external, material_datepicker__calendar.CausedBy.preview, material_datepicker__calendar.CausedBy.drag, material_datepicker__calendar.CausedBy.endpointConfirm, material_datepicker__calendar.CausedBy.rangeConfirm], material_datepicker__calendar.CausedBy);
  const _resolutionAtLeast = Symbol('_resolutionAtLeast');
  material_datepicker__calendar.CalendarState = class CalendarState extends core.Object {
    get resolution() {
      return this[resolution$];
    }
    set resolution(value) {
      super.resolution = value;
    }
    get selections() {
      return this[selections$];
    }
    set selections(value) {
      super.selections = value;
    }
    get currentSelection() {
      return this[currentSelection$];
    }
    set currentSelection(value) {
      super.currentSelection = value;
    }
    get cause() {
      return this[cause$];
    }
    set cause(value) {
      super.cause = value;
    }
    get preview() {
      return this[preview$];
    }
    set preview(value) {
      super.preview = value;
    }
    get previewAnchoredAtStart() {
      return this[previewAnchoredAtStart$];
    }
    set previewAnchoredAtStart(value) {
      super.previewAnchoredAtStart = value;
    }
    has(id) {
      return this.selections[$any](dart.fn(s => s.id == id, CalendarSelectionTobool()));
    }
    selection(id) {
      return this.selections[$singleWhere](dart.fn(s => s.id == id, CalendarSelectionTobool()));
    }
    highlighted(id, date) {
      if (!(date != null)) dart.assertFailed();
      if (this.preview != null && this.currentSelection == id) {
        let current = this.selection(this.currentSelection);
        let anchor = dart.test(this.previewAnchoredAtStart) ? current.start : current.end;
        let previewStart = model__date__date.earlierOf(this.preview, anchor);
        let previewEnd = model__date__date.laterOf(this.preview, anchor);
        return !dart.test(date.isBefore(previewStart)) && !dart.test(date.isAfter(previewEnd));
      } else {
        return this.selection(id).contains(date);
      }
    }
    static _adaptSelections(selections, resolution) {
      if (dart.notNull(resolution.index) < dart.notNull(material_datepicker__calendar.CalendarResolution.months.index)) {
        return selections;
      }
      return selections[$map](material_datepicker__calendar.CalendarSelection, dart.fn(selection => new material_datepicker__calendar.CalendarSelection.new(selection.id, material_datepicker__calendar.firstDayOfMonth(selection.start), material_datepicker__calendar.lastDayOfMonth(selection.end)), CalendarSelectionToCalendarSelection()))[$toList]();
    }
    select(id, opts) {
      let previewAnchoredAtStart = opts && 'previewAnchoredAtStart' in opts ? opts.previewAnchoredAtStart : false;
      return new material_datepicker__calendar.CalendarState.new({selections: this.selections, currentSelection: id, cause: material_datepicker__calendar.CausedBy.external, previewAnchoredAtStart: previewAnchoredAtStart, resolution: this.resolution});
    }
    setSelection(val, opts) {
      let cause = opts && 'cause' in opts ? opts.cause : material_datepicker__calendar.CausedBy.external;
      let previewAnchoredAtStart = opts && 'previewAnchoredAtStart' in opts ? opts.previewAnchoredAtStart : false;
      let newSelections = JSArrayOfCalendarSelection().of([val]);
      newSelections[$addAll](this.selections[$where](dart.fn(s => s.id != val.id, CalendarSelectionTobool())));
      return new material_datepicker__calendar.CalendarState.new({selections: newSelections, currentSelection: this.currentSelection, cause: cause, previewAnchoredAtStart: previewAnchoredAtStart, resolution: this.resolution});
    }
    updateDrag(a, b) {
      return this.setSelection(new material_datepicker__calendar.CalendarSelection.guessOrder(this.currentSelection, a, b), {cause: material_datepicker__calendar.CausedBy.drag});
    }
    updateCurrentPreview(newPreviewTarget) {
      if (!(newPreviewTarget != null)) dart.assertFailed();
      return new material_datepicker__calendar.CalendarState.new({selections: this.selections, currentSelection: this.currentSelection, cause: material_datepicker__calendar.CausedBy.preview, preview: newPreviewTarget, previewAnchoredAtStart: this.previewAnchoredAtStart, resolution: this.resolution});
    }
    cancelCurrentPreview() {
      return this.preview == null ? this : new material_datepicker__calendar.CalendarState.new({selections: this.selections, currentSelection: this.currentSelection, cause: material_datepicker__calendar.CausedBy.preview, preview: null, previewAnchoredAtStart: this.previewAnchoredAtStart, resolution: this.resolution});
    }
    setCurrentSelection(a, b, opts) {
      let cause = opts && 'cause' in opts ? opts.cause : material_datepicker__calendar.CausedBy.rangeConfirm;
      let previewAnchoredAtStart = opts && 'previewAnchoredAtStart' in opts ? opts.previewAnchoredAtStart : false;
      return this.setSelection(new material_datepicker__calendar.CalendarSelection.guessOrder(this.currentSelection, a, b), {cause: cause, previewAnchoredAtStart: previewAnchoredAtStart});
    }
    clearCurrentSelection() {
      return this.clearSelection(this.currentSelection);
    }
    confirmPreview(opts) {
      let confirmRange = opts && 'confirmRange' in opts ? opts.confirmRange : false;
      let current = this.selection(this.currentSelection);
      let anchor = dart.test(this.previewAnchoredAtStart) ? current.start : current.end;
      if (!(this.preview != null && anchor != null)) dart.assertFailed();
      let cause = dart.test(confirmRange) ? material_datepicker__calendar.CausedBy.rangeConfirm : material_datepicker__calendar.CausedBy.endpointConfirm;
      if (dart.test(this.previewAnchoredAtStart)) {
        if (dart.test(this.preview['<='](anchor))) {
          return this.setSelection(new material_datepicker__calendar.CalendarSelection.new(this.currentSelection, this.preview, this.preview), {cause: cause, previewAnchoredAtStart: true});
        } else {
          return this.setSelection(new material_datepicker__calendar.CalendarSelection.guessOrder(this.currentSelection, this.preview, anchor), {cause: cause, previewAnchoredAtStart: false});
        }
      } else {
        let rangeLengthInDays = model__date__date.daysSpanned(current.start, current.end, {inclusive: false});
        return this.setSelection(new material_datepicker__calendar.CalendarSelection.new(this.currentSelection, this.preview, this.preview.add({days: rangeLengthInDays})), {cause: cause, previewAnchoredAtStart: true});
      }
    }
    clearSelection(id) {
      return dart.test(this.has(id)) ? new material_datepicker__calendar.CalendarState.new({selections: this.selections[$where](dart.fn(s => s.id != id, CalendarSelectionTobool()))[$toList](), currentSelection: this.currentSelection, cause: material_datepicker__calendar.CausedBy.external, resolution: this.resolution}) : this;
    }
    [_resolutionAtLeast](minimumResolution) {
      return dart.notNull(this.resolution.index) >= dart.notNull(minimumResolution.index);
    }
    toString() {
      return dart.str`ranges: ${this.selections} / current: ${this.currentSelection} / cause: ${this.cause} / ` + dart.str`resolution: ${this.resolution} / ` + dart.str`preview ${dart.test(this.previewAnchoredAtStart) ? "start" : "end"} - ${this.preview}`;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__calendar.CalendarState.is(o) && this.currentSelection == o.currentSelection && this.cause == o.cause && dart.equals(this.preview, o.preview) && this.previewAnchoredAtStart == o.previewAnchoredAtStart && this.resolution == o.resolution && dart.dtest(dart.dcall(material_datepicker__calendar.CalendarState._setEq, this.selections, o.selections));
    }
  };
  (material_datepicker__calendar.CalendarState.new = function(opts) {
    let selections = opts && 'selections' in opts ? opts.selections : null;
    let currentSelection = opts && 'currentSelection' in opts ? opts.currentSelection : null;
    let cause = opts && 'cause' in opts ? opts.cause : null;
    let preview = opts && 'preview' in opts ? opts.preview : null;
    let previewAnchoredAtStart = opts && 'previewAnchoredAtStart' in opts ? opts.previewAnchoredAtStart : false;
    let resolution = opts && 'resolution' in opts ? opts.resolution : material_datepicker__calendar.CalendarResolution.days;
    this[currentSelection$] = currentSelection;
    this[cause$] = cause;
    this[preview$] = preview;
    this[previewAnchoredAtStart$] = previewAnchoredAtStart;
    this[selections$] = material_datepicker__calendar.CalendarState._adaptSelections((() => {
      let l = selections;
      return l != null ? l : JSArrayOfCalendarSelection().of([]);
    })(), material_datepicker__calendar.CalendarResolution._check(resolution));
    this[resolution$] = material_datepicker__calendar.CalendarResolution._check(resolution);
  }).prototype = material_datepicker__calendar.CalendarState.prototype;
  (material_datepicker__calendar.CalendarState.empty = function(opts) {
    let currentSelection = opts && 'currentSelection' in opts ? opts.currentSelection : 'default';
    let resolution = opts && 'resolution' in opts ? opts.resolution : material_datepicker__calendar.CalendarResolution.days;
    material_datepicker__calendar.CalendarState.new.call(this, {selections: JSArrayOfCalendarSelection().of([]), currentSelection: currentSelection, cause: material_datepicker__calendar.CausedBy.external, resolution: resolution});
  }).prototype = material_datepicker__calendar.CalendarState.prototype;
  (material_datepicker__calendar.CalendarState.selected = function(selections, opts) {
    let resolution = opts && 'resolution' in opts ? opts.resolution : material_datepicker__calendar.CalendarResolution.days;
    let cause = opts && 'cause' in opts ? opts.cause : material_datepicker__calendar.CausedBy.external;
    material_datepicker__calendar.CalendarState.new.call(this, {cause: material_datepicker__calendar.CausedBy._check(cause), selections: selections, currentSelection: selections[$first].id, resolution: resolution});
  }).prototype = material_datepicker__calendar.CalendarState.prototype;
  dart.addTypeTests(material_datepicker__calendar.CalendarState);
  const resolution$ = Symbol("CalendarState.resolution");
  const selections$ = Symbol("CalendarState.selections");
  const currentSelection$ = Symbol("CalendarState.currentSelection");
  const cause$ = Symbol("CalendarState.cause");
  const preview$ = Symbol("CalendarState.preview");
  const previewAnchoredAtStart$ = Symbol("CalendarState.previewAnchoredAtStart");
  dart.setMethodSignature(material_datepicker__calendar.CalendarState, () => ({
    __proto__: dart.getMethods(material_datepicker__calendar.CalendarState.__proto__),
    has: dart.fnType(core.bool, [core.String]),
    selection: dart.fnType(material_datepicker__calendar.CalendarSelection, [core.String]),
    highlighted: dart.fnType(core.bool, [core.String, model__date__date.Date]),
    select: dart.fnType(material_datepicker__calendar.CalendarState, [core.String], {previewAnchoredAtStart: core.bool}),
    setSelection: dart.fnType(material_datepicker__calendar.CalendarState, [material_datepicker__calendar.CalendarSelection], {cause: material_datepicker__calendar.CausedBy, previewAnchoredAtStart: core.bool}),
    updateDrag: dart.fnType(material_datepicker__calendar.CalendarState, [model__date__date.Date, model__date__date.Date]),
    updateCurrentPreview: dart.fnType(material_datepicker__calendar.CalendarState, [model__date__date.Date]),
    cancelCurrentPreview: dart.fnType(material_datepicker__calendar.CalendarState, []),
    setCurrentSelection: dart.fnType(material_datepicker__calendar.CalendarState, [model__date__date.Date, model__date__date.Date], {cause: material_datepicker__calendar.CausedBy, previewAnchoredAtStart: core.bool}),
    clearCurrentSelection: dart.fnType(material_datepicker__calendar.CalendarState, []),
    confirmPreview: dart.fnType(material_datepicker__calendar.CalendarState, [], {confirmRange: core.bool}),
    clearSelection: dart.fnType(material_datepicker__calendar.CalendarState, [core.String]),
    [_resolutionAtLeast]: dart.fnType(core.bool, [material_datepicker__calendar.CalendarResolution])
  }));
  dart.setStaticMethodSignature(material_datepicker__calendar.CalendarState, () => ({_adaptSelections: dart.fnType(core.List$(material_datepicker__calendar.CalendarSelection), [ListOfCalendarSelection(), material_datepicker__calendar.CalendarResolution])}));
  dart.setFieldSignature(material_datepicker__calendar.CalendarState, () => ({
    __proto__: dart.getFields(material_datepicker__calendar.CalendarState.__proto__),
    resolution: dart.finalFieldType(material_datepicker__calendar.CalendarResolution),
    selections: dart.finalFieldType(ListOfCalendarSelection()),
    currentSelection: dart.finalFieldType(core.String),
    cause: dart.finalFieldType(material_datepicker__calendar.CausedBy),
    preview: dart.finalFieldType(model__date__date.Date),
    previewAnchoredAtStart: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(material_datepicker__calendar.CalendarState, ['toString', '_equals']);
  dart.defineLazy(material_datepicker__calendar.CalendarState, {
    /*material_datepicker__calendar.CalendarState._setEq*/get _setEq() {
      return dart.bind(new src__equality.UnorderedIterableEquality.new(), 'equals');
    }
  });
  const _start = Symbol('_start');
  const _title = Symbol('_title');
  const _weeks = Symbol('_weeks');
  const _generateWeeks = Symbol('_generateWeeks');
  material_datepicker__calendar.CalendarMonth = class CalendarMonth extends core.Object {
    get startingWeekday() {
      return this[startingWeekday$];
    }
    set startingWeekday(value) {
      super.startingWeekday = value;
    }
    get calendarState() {
      return this[calendarState];
    }
    set calendarState(value) {
      this[calendarState] = value;
    }
    get start() {
      return this[_start];
    }
    get year() {
      return this[_start].year;
    }
    get month() {
      return this[_start].month;
    }
    get title() {
      return this[_title];
    }
    get weeks() {
      return this[_weeks];
    }
    get classes() {
      return this[_classes];
    }
    update(state) {
      this.calendarState = state;
      if (this.weeks != null) {
        this.weeks[$forEach](dart.fn(w => w.update(state), CalendarWeekTovoid()));
      }
      if (state == null || state.resolution !== material_datepicker__calendar.CalendarResolution.months) {
        this[_classes] = JSArrayOfString().of([]);
      } else {
        this[_classes] = state.selections[$where](dart.fn(selection => dart.test(this.containsDate(selection.start)) || dart.test(this.containsDate(selection.end)), CalendarSelectionTobool()))[$expand](core.String, dart.fn(selection => JSArrayOfString().of(['boundary', dart.str`boundary-${selection.id}`]), CalendarSelectionToListOfString()))[$toList]();
      }
    }
    get displayTitleInline() {
      return dart.notNull(this[_weeks][$_get](0).numBlankDays) >= 3;
    }
    addMonths(months) {
      let newYear = dart.notNull(this.year) + (dart.notNull(months) / 12)[$floor]();
      let newMonth = dart.notNull(this.month) + months[$modulo](12);
      if (newMonth > 12) {
        newYear++;
        newMonth = newMonth - 12;
      }
      return new material_datepicker__calendar.CalendarMonth.new(newYear, newMonth, {state: this.calendarState, startingWeekday: this.startingWeekday});
    }
    deltaMonths(other) {
      return (dart.notNull(other.year) - dart.notNull(this.year)) * 12 + dart.notNull(other.month) - dart.notNull(this.month);
    }
    getRowIndex(day) {
      let position = dart.notNull(day) - 1 + dart.notNull(this.weeks[$first].numBlankDays);
      let row = (position / 7)[$truncate]();
      return dart.test(this.displayTitleInline) ? row : row + 1;
    }
    containsDate(date) {
      return date.year == this.year && date.month == this.month;
    }
    [_generateWeeks]() {
      return new (SyncIterableOfCalendarWeek()).new((function* _generateWeeks() {
        let week = new material_datepicker__calendar.CalendarWeek.new(this[_start], this.calendarState, this.startingWeekday);
        while (week != null) {
          yield week;
          week = week.next;
        }
      }).bind(this));
    }
    get next() {
      if (dart.notNull(this.month) < core.DateTime.DECEMBER) {
        return this.addMonths(1);
      }
      return null;
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__calendar.CalendarMonth.is(o) && dart.equals(o[_start], this[_start]);
    }
    get hashCode() {
      return dart.hashCode(this[_start]);
    }
    toString() {
      return dart.str`${this.title} (${dart.toString(this[_start])})`;
    }
  };
  (material_datepicker__calendar.CalendarMonth.new = function(year, month, opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    let startingWeekday = opts && 'startingWeekday' in opts ? opts.startingWeekday : core.DateTime.MONDAY;
    this[_title] = null;
    this[_weeks] = null;
    this[_classes] = JSArrayOfString().of([]);
    this[startingWeekday$] = startingWeekday;
    this[_start] = new model__date__date.Date.new(year, month);
    this[calendarState] = state;
    this[_title] = this[_start].format(new intl$.DateFormat.yMMM());
    if ((() => {
      let l = state == null ? null : state[_resolutionAtLeast](material_datepicker__calendar.CalendarResolution.months);
      return l != null ? l : false;
    })()) {
      this[_weeks] = JSArrayOfCalendarWeek().of([]);
    } else {
      this[_weeks] = this[_generateWeeks]()[$toList]();
    }
    this.update(state);
  }).prototype = material_datepicker__calendar.CalendarMonth.prototype;
  (material_datepicker__calendar.CalendarMonth.fromDate = function(date, opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    let startingWeekday = opts && 'startingWeekday' in opts ? opts.startingWeekday : core.DateTime.MONDAY;
    material_datepicker__calendar.CalendarMonth.new.call(this, date.year, date.month, {state: state, startingWeekday: startingWeekday});
  }).prototype = material_datepicker__calendar.CalendarMonth.prototype;
  (material_datepicker__calendar.CalendarMonth.fromTime = function(time, opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    let startingWeekday = opts && 'startingWeekday' in opts ? opts.startingWeekday : core.DateTime.MONDAY;
    material_datepicker__calendar.CalendarMonth.new.call(this, time.year, time.month, {state: state, startingWeekday: startingWeekday});
  }).prototype = material_datepicker__calendar.CalendarMonth.prototype;
  dart.addTypeTests(material_datepicker__calendar.CalendarMonth);
  const startingWeekday$ = Symbol("CalendarMonth.startingWeekday");
  const calendarState = Symbol("CalendarMonth.calendarState");
  dart.setMethodSignature(material_datepicker__calendar.CalendarMonth, () => ({
    __proto__: dart.getMethods(material_datepicker__calendar.CalendarMonth.__proto__),
    update: dart.fnType(dart.void, [material_datepicker__calendar.CalendarState]),
    addMonths: dart.fnType(material_datepicker__calendar.CalendarMonth, [core.int]),
    deltaMonths: dart.fnType(core.int, [material_datepicker__calendar.CalendarMonth]),
    getRowIndex: dart.fnType(core.int, [core.int]),
    containsDate: dart.fnType(core.bool, [model__date__date.Date]),
    [_generateWeeks]: dart.fnType(core.Iterable$(material_datepicker__calendar.CalendarWeek), [])
  }));
  dart.setGetterSignature(material_datepicker__calendar.CalendarMonth, () => ({
    __proto__: dart.getGetters(material_datepicker__calendar.CalendarMonth.__proto__),
    start: dart.fnType(model__date__date.Date, []),
    year: dart.fnType(core.int, []),
    month: dart.fnType(core.int, []),
    title: dart.fnType(core.String, []),
    weeks: dart.fnType(core.List$(material_datepicker__calendar.CalendarWeek), []),
    classes: dart.fnType(core.List$(core.String), []),
    displayTitleInline: dart.fnType(core.bool, []),
    next: dart.fnType(material_datepicker__calendar.CalendarMonth, [])
  }));
  dart.setFieldSignature(material_datepicker__calendar.CalendarMonth, () => ({
    __proto__: dart.getFields(material_datepicker__calendar.CalendarMonth.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    startingWeekday: dart.finalFieldType(core.int),
    [_title]: dart.fieldType(core.String),
    calendarState: dart.fieldType(material_datepicker__calendar.CalendarState),
    [_weeks]: dart.fieldType(ListOfCalendarWeek()),
    [_classes]: dart.fieldType(ListOfString())
  }));
  dart.defineExtensionMethods(material_datepicker__calendar.CalendarMonth, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__calendar.CalendarMonth, ['hashCode']);
  material_datepicker__calendar.MonthRange = class MonthRange extends core.Object {
    get start() {
      return this[start$1];
    }
    set start(value) {
      super.start = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    static within(min, max, length, opts) {
      let tryToStartAt = opts && 'tryToStartAt' in opts ? opts.tryToStartAt : null;
      if (dart.notNull(length) < 1) {
        dart.throw(new core.ArgumentError.value(length, 'length', 'must be at least 1'));
      }
      if (min == null) {
        dart.throw(new core.ArgumentError.notNull('min'));
      }
      if (max == null) {
        dart.throw(new core.ArgumentError.notNull('max'));
      }
      let months = dart.notNull(min.deltaMonths(max)) + 1;
      if (months < 1) {
        dart.throw(new core.ArgumentError.new('max must not be before min'));
      }
      let l = tryToStartAt == null ? null : tryToStartAt.start;
      let start = l != null ? l : min.start;
      if (dart.notNull(length) > months) length = months;
      if (dart.test(start['<'](min.start))) {
        start = min.start;
      }
      let end = start.add({months: dart.notNull(length) - 1});
      if (dart.test(end['>'](max.start))) {
        start = max.start.add({months: -(dart.notNull(length) - 1)});
      }
      return new material_datepicker__calendar.MonthRange.new(start, length);
    }
    toList(state, startingWeekday) {
      let startMonth = new material_datepicker__calendar.CalendarMonth.new(this.start.year, this.start.month, {state: state, startingWeekday: startingWeekday});
      return ListOfCalendarMonth().generate(this.length, dart.fn(i => startMonth.addMonths(i), intToCalendarMonth()));
    }
  };
  (material_datepicker__calendar.MonthRange.new = function(start, length) {
    this[start$1] = start;
    this[length$] = length;
  }).prototype = material_datepicker__calendar.MonthRange.prototype;
  dart.addTypeTests(material_datepicker__calendar.MonthRange);
  const start$1 = Symbol("MonthRange.start");
  const length$ = Symbol("MonthRange.length");
  dart.setMethodSignature(material_datepicker__calendar.MonthRange, () => ({
    __proto__: dart.getMethods(material_datepicker__calendar.MonthRange.__proto__),
    toList: dart.fnType(core.List$(material_datepicker__calendar.CalendarMonth), [material_datepicker__calendar.CalendarState, core.int])
  }));
  dart.setFieldSignature(material_datepicker__calendar.MonthRange, () => ({
    __proto__: dart.getFields(material_datepicker__calendar.MonthRange.__proto__),
    start: dart.finalFieldType(model__date__date.Date),
    length: dart.finalFieldType(core.int)
  }));
  const _startingWeekday = Symbol('_startingWeekday');
  const _days = Symbol('_days');
  const _spacers = Symbol('_spacers');
  const _end = Symbol('_end');
  const _endOfMonth = Symbol('_endOfMonth');
  const _generateDays = Symbol('_generateDays');
  const _iterateDays = Symbol('_iterateDays');
  material_datepicker__calendar.CalendarWeek = class CalendarWeek extends material_datepicker__calendar._HasHighlights {
    get days() {
      return this[_days];
    }
    get numDays() {
      return 7 - (dart.notNull(this[_start].weekday) - 1 - (dart.notNull(this[_startingWeekday]) - 1))[$modulo](7);
    }
    get numBlankDays() {
      return 7 - dart.notNull(this.numDays);
    }
    get spacers() {
      return this[_spacers];
    }
    get highlights() {
      return this[_highlights];
    }
    update(state) {
      this[_state] = state;
      this.days[$forEach](dart.fn(d => d.updateClasses(state), CalendarDayTovoid()));
      this[_updateHighlights]();
    }
    get next() {
      if (dart.test(this[_end].isBefore(this[_endOfMonth]))) {
        return new material_datepicker__calendar.CalendarWeek.new(this[_end].add({days: 1}), this[_state], this[_startingWeekday]);
      }
      return null;
    }
    [_generateDays]() {
      return this[_iterateDays]()[$map](material_datepicker__calendar.CalendarDay, dart.fn(d => new material_datepicker__calendar.CalendarDay.new(d, this[_state]), DateToCalendarDay()));
    }
    [_generateHighlights]() {
      return new (SyncIterableOfHighlight()).new((function* _generateHighlights() {
        let last = this[_start].add({days: -1});
        let lastPos = 0;
        let pos = dart.notNull(this.numBlankDays) + 1;
        for (let day of this[_iterateDays]()) {
          yield new material_datepicker__calendar.Highlight.new(lastPos, pos, this[_matching](last, day));
          last = day;
          lastPos = pos;
          pos++;
        }
        let day = this[_end].add({days: 1});
        yield new material_datepicker__calendar.Highlight.new(lastPos, 8, this[_matching](last, day));
      }).bind(this));
    }
    [_iterateDays]() {
      return new (SyncIterableOfDate()).new((function* _iterateDays() {
        let day = this[_start];
        while (!dart.test(day.isAfter(this[_end]))) {
          yield day;
          day = day.add({days: 1});
        }
      }).bind(this));
    }
    get [_endOfMonth]() {
      return new model__date__date.Date.new(this[_start].year, dart.notNull(this[_start].month) + 1, 0);
    }
  };
  (material_datepicker__calendar.CalendarWeek.new = function(start, state, startingWeekday) {
    if (startingWeekday === void 0) startingWeekday = core.DateTime.MONDAY;
    this[_days] = null;
    this[_spacers] = null;
    this[_end] = null;
    this[_start] = start;
    this[_startingWeekday] = startingWeekday;
    material_datepicker__calendar.CalendarWeek.__proto__.new.call(this, state);
    this[_end] = this[_start].add({days: dart.notNull(this.numDays) - 1});
    if (dart.test(this[_end].isAfter(this[_endOfMonth]))) {
      this[_end] = this[_endOfMonth];
    }
    if ((() => {
      let l = state == null ? null : state[_resolutionAtLeast](material_datepicker__calendar.CalendarResolution.weeks);
      return l != null ? l : false;
    })()) {
      this[_days] = JSArrayOfCalendarDay().of([]);
    } else {
      this[_days] = this[_generateDays]()[$toList]();
    }
    this[_spacers] = core.List.new(this.numBlankDays);
    this[_updateHighlights]();
  }).prototype = material_datepicker__calendar.CalendarWeek.prototype;
  dart.addTypeTests(material_datepicker__calendar.CalendarWeek);
  dart.setMethodSignature(material_datepicker__calendar.CalendarWeek, () => ({
    __proto__: dart.getMethods(material_datepicker__calendar.CalendarWeek.__proto__),
    update: dart.fnType(dart.void, [material_datepicker__calendar.CalendarState]),
    [_generateDays]: dart.fnType(core.Iterable$(material_datepicker__calendar.CalendarDay), []),
    [_generateHighlights]: dart.fnType(core.Iterable$(material_datepicker__calendar.Highlight), []),
    [_iterateDays]: dart.fnType(core.Iterable$(model__date__date.Date), [])
  }));
  dart.setGetterSignature(material_datepicker__calendar.CalendarWeek, () => ({
    __proto__: dart.getGetters(material_datepicker__calendar.CalendarWeek.__proto__),
    days: dart.fnType(core.List$(material_datepicker__calendar.CalendarDay), []),
    numDays: dart.fnType(core.int, []),
    numBlankDays: dart.fnType(core.int, []),
    spacers: dart.fnType(core.List, []),
    next: dart.fnType(material_datepicker__calendar.CalendarWeek, []),
    [_endOfMonth]: dart.fnType(model__date__date.Date, [])
  }));
  dart.setFieldSignature(material_datepicker__calendar.CalendarWeek, () => ({
    __proto__: dart.getFields(material_datepicker__calendar.CalendarWeek.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    [_startingWeekday]: dart.finalFieldType(core.int),
    [_days]: dart.fieldType(ListOfCalendarDay()),
    [_spacers]: dart.fieldType(core.List),
    [_end]: dart.fieldType(model__date__date.Date)
  }));
  const _months = Symbol('_months');
  const _generateMonths = Symbol('_generateMonths');
  const _monthDates = Symbol('_monthDates');
  const _mergedHighlights$ = Symbol("_mergedHighlights");
  material_datepicker__calendar.CalendarYear = class CalendarYear extends material_datepicker__calendar._HasHighlights {
    get startingWeekday() {
      return this[startingWeekday$0];
    }
    set startingWeekday(value) {
      super.startingWeekday = value;
    }
    get start() {
      return this[_start];
    }
    get year() {
      return this[_start].year;
    }
    get title() {
      return this[_title];
    }
    get months() {
      return this[_months];
    }
    get highlights() {
      return this[_highlights];
    }
    update(state) {
      this[_state] = state;
      if (this.months != null) {
        this.months[$forEach](dart.fn(m => m.update(state), CalendarMonthTovoid()));
      }
      this[_updateHighlights]();
    }
    static _isMonthInRow(month, row) {
      if (row === 0) {
        return dart.notNull(month) <= 6;
      }
      if (row === 1) {
        return dart.notNull(month) > 6;
      }
      return false;
    }
    [_mergedHighlights]() {
      return new (SyncIterableOfHighlight()).new((function* _mergedHighlights() {
        for (let highlight of this[_mergedHighlights$]()) {
          if (dart.test(material_datepicker__calendar.CalendarYear._isMonthInRow(highlight.start, 0)) && dart.test(material_datepicker__calendar.CalendarYear._isMonthInRow(highlight.end, 1))) {
            yield new material_datepicker__calendar.Highlight.new(highlight.start, 7, highlight.containedRanges, {group: 0});
            yield new material_datepicker__calendar.Highlight.new(6, highlight.end, highlight.containedRanges, {classIndexOffset: -6, group: 1});
          } else if (dart.test(material_datepicker__calendar.CalendarYear._isMonthInRow(highlight.start, 1))) {
            yield new material_datepicker__calendar.Highlight.new(highlight.start, highlight.end, highlight.containedRanges, {classIndexOffset: -6, group: 1});
          } else {
            yield new material_datepicker__calendar.Highlight.new(highlight.start, highlight.end, highlight.containedRanges, {group: 0});
          }
        }
      }).bind(this));
    }
    [_generateHighlights]() {
      return new (SyncIterableOfHighlight()).new((function* _generateHighlights() {
        let last = this[_start].add({months: -1});
        let lastPos = 0;
        let pos = 1;
        for (let month of this[_monthDates]()) {
          yield new material_datepicker__calendar.Highlight.new(lastPos, pos, this[_matching](last, month));
          last = month;
          lastPos = pos;
          pos++;
        }
        yield new material_datepicker__calendar.Highlight.new(lastPos, 13, this[_matching](last, this[_start].add({months: 12})));
      }).bind(this));
    }
    [_monthDates]() {
      return IterableOfDate().generate(12, dart.fn(offset => this[_start].add({months: offset}), intToDate()));
    }
    monthsInRow(row) {
      return this.months[$where](dart.fn(m => material_datepicker__calendar.CalendarYear._isMonthInRow(m.month, row), CalendarMonthTobool()));
    }
    addYears(years) {
      return new material_datepicker__calendar.CalendarYear.new(dart.notNull(this.year) + dart.notNull(years), this[_state], {startingWeekday: this.startingWeekday});
    }
    getRowIndex(month, opts) {
      let monthsPerRow = opts && 'monthsPerRow' in opts ? opts.monthsPerRow : 4;
      return ((dart.notNull(month) - 1) / dart.notNull(monthsPerRow))[$round]();
    }
    get next() {
      return this.addYears(1);
    }
    deltaYears(other) {
      return dart.notNull(other.year) - dart.notNull(this.year);
    }
    [_generateMonths]() {
      return new (SyncIterableOfCalendarMonth()).new((function* _generateMonths() {
        let month = new material_datepicker__calendar.CalendarMonth.new(this.year, core.DateTime.JANUARY, {state: this[_state], startingWeekday: this.startingWeekday});
        while (month != null) {
          yield month;
          month = month.next;
        }
      }).bind(this));
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__calendar.CalendarYear.is(o) && dart.equals(o[_start], this[_start]);
    }
    get hashCode() {
      return dart.hashCode(this[_start]);
    }
    toString() {
      return this.title;
    }
    [_mergedHighlights$]() {
      return super[_mergedHighlights]();
    }
  };
  (material_datepicker__calendar.CalendarYear.new = function(year, state, opts) {
    let startingWeekday = opts && 'startingWeekday' in opts ? opts.startingWeekday : core.DateTime.MONDAY;
    this[_title] = null;
    this[_months] = null;
    this[startingWeekday$0] = startingWeekday;
    this[_start] = new model__date__date.Date.new(year);
    material_datepicker__calendar.CalendarYear.__proto__.new.call(this, state);
    this[_title] = this[_start].format(new intl$.DateFormat.y());
    if ((() => {
      let l = state == null ? null : state[_resolutionAtLeast](material_datepicker__calendar.CalendarResolution.years);
      return l != null ? l : false;
    })()) {
      this[_months] = JSArrayOfCalendarMonth().of([]);
    } else {
      this[_months] = this[_generateMonths]()[$toList]();
    }
    this[_updateHighlights]();
  }).prototype = material_datepicker__calendar.CalendarYear.prototype;
  (material_datepicker__calendar.CalendarYear.fromDate = function(date, opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    let startingWeekday = opts && 'startingWeekday' in opts ? opts.startingWeekday : core.DateTime.MONDAY;
    material_datepicker__calendar.CalendarYear.new.call(this, date.year, state, {startingWeekday: startingWeekday});
  }).prototype = material_datepicker__calendar.CalendarYear.prototype;
  (material_datepicker__calendar.CalendarYear.fromTime = function(time, opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    let startingWeekday = opts && 'startingWeekday' in opts ? opts.startingWeekday : core.DateTime.MONDAY;
    material_datepicker__calendar.CalendarYear.new.call(this, time.year, state, {startingWeekday: startingWeekday});
  }).prototype = material_datepicker__calendar.CalendarYear.prototype;
  dart.addTypeTests(material_datepicker__calendar.CalendarYear);
  const startingWeekday$0 = Symbol("CalendarYear.startingWeekday");
  dart.setMethodSignature(material_datepicker__calendar.CalendarYear, () => ({
    __proto__: dart.getMethods(material_datepicker__calendar.CalendarYear.__proto__),
    update: dart.fnType(dart.void, [material_datepicker__calendar.CalendarState]),
    [_generateHighlights]: dart.fnType(core.Iterable$(material_datepicker__calendar.Highlight), []),
    [_monthDates]: dart.fnType(core.Iterable$(model__date__date.Date), []),
    monthsInRow: dart.fnType(core.Iterable$(material_datepicker__calendar.CalendarMonth), [core.int]),
    addYears: dart.fnType(material_datepicker__calendar.CalendarYear, [core.int]),
    getRowIndex: dart.fnType(core.int, [core.int], {monthsPerRow: core.int}),
    deltaYears: dart.fnType(core.int, [material_datepicker__calendar.CalendarYear]),
    [_generateMonths]: dart.fnType(core.Iterable$(material_datepicker__calendar.CalendarMonth), [])
  }));
  dart.setStaticMethodSignature(material_datepicker__calendar.CalendarYear, () => ({_isMonthInRow: dart.fnType(core.bool, [core.int, core.int])}));
  dart.setGetterSignature(material_datepicker__calendar.CalendarYear, () => ({
    __proto__: dart.getGetters(material_datepicker__calendar.CalendarYear.__proto__),
    start: dart.fnType(model__date__date.Date, []),
    year: dart.fnType(core.int, []),
    title: dart.fnType(core.String, []),
    months: dart.fnType(core.List$(material_datepicker__calendar.CalendarMonth), []),
    next: dart.fnType(material_datepicker__calendar.CalendarYear, [])
  }));
  dart.setFieldSignature(material_datepicker__calendar.CalendarYear, () => ({
    __proto__: dart.getFields(material_datepicker__calendar.CalendarYear.__proto__),
    [_start]: dart.finalFieldType(model__date__date.Date),
    startingWeekday: dart.finalFieldType(core.int),
    [_title]: dart.fieldType(core.String),
    [_months]: dart.fieldType(ListOfCalendarMonth())
  }));
  dart.defineExtensionMethods(material_datepicker__calendar.CalendarYear, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__calendar.CalendarYear, ['hashCode']);
  dart.defineLazy(material_datepicker__calendar.CalendarYear, {
    /*material_datepicker__calendar.CalendarYear._monthsPerRow*/get _monthsPerRow() {
      return 6;
    },
    /*material_datepicker__calendar.CalendarYear._afterFirstRow*/get _afterFirstRow() {
      return 6 + 1;
    },
    /*material_datepicker__calendar.CalendarYear._beforeSecondRow*/get _beforeSecondRow() {
      return 6;
    }
  });
  material_datepicker__calendar.YearRange = class YearRange extends core.Object {
    get start() {
      return this[start$2];
    }
    set start(value) {
      super.start = value;
    }
    get length() {
      return this[length$0];
    }
    set length(value) {
      super.length = value;
    }
    static within(min, max, length, opts) {
      let tryToStartAt = opts && 'tryToStartAt' in opts ? opts.tryToStartAt : null;
      if (dart.notNull(length) < 1) {
        dart.throw(new core.ArgumentError.value(length, 'length', 'must be at least 1'));
      }
      if (min == null) {
        dart.throw(new core.ArgumentError.notNull('min'));
      }
      if (max == null) {
        dart.throw(new core.ArgumentError.notNull('max'));
      }
      let years = dart.notNull(min.deltaYears(max)) + 1;
      if (years < 1) {
        dart.throw(new core.ArgumentError.new('max must not be before min'));
      }
      let l = tryToStartAt == null ? null : tryToStartAt.start;
      let start = l != null ? l : min.start;
      if (dart.notNull(length) > years) length = years;
      if (dart.test(start['<'](min.start))) {
        start = min.start;
      }
      let end = start.add({years: dart.notNull(length) - 1});
      if (dart.test(end['>'](max.start))) {
        start = max.start.add({years: -(dart.notNull(length) - 1)});
      }
      return new material_datepicker__calendar.YearRange.new(start, length);
    }
    toList(state, startingWeekday) {
      let startYear = new material_datepicker__calendar.CalendarYear.new(this.start.year, state, {startingWeekday: startingWeekday});
      return ListOfCalendarYear().generate(this.length, dart.fn(i => startYear.addYears(i), intToCalendarYear()));
    }
  };
  (material_datepicker__calendar.YearRange.new = function(start, length) {
    this[start$2] = start;
    this[length$0] = length;
  }).prototype = material_datepicker__calendar.YearRange.prototype;
  dart.addTypeTests(material_datepicker__calendar.YearRange);
  const start$2 = Symbol("YearRange.start");
  const length$0 = Symbol("YearRange.length");
  dart.setMethodSignature(material_datepicker__calendar.YearRange, () => ({
    __proto__: dart.getMethods(material_datepicker__calendar.YearRange.__proto__),
    toList: dart.fnType(core.List$(material_datepicker__calendar.CalendarYear), [material_datepicker__calendar.CalendarState, core.int])
  }));
  dart.setFieldSignature(material_datepicker__calendar.YearRange, () => ({
    __proto__: dart.getFields(material_datepicker__calendar.YearRange.__proto__),
    start: dart.finalFieldType(model__date__date.Date),
    length: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/calendar.ddc", {
    "package:angular_components/material_datepicker/calendar.dart": material_datepicker__calendar
  }, '{"version":3,"sourceRoot":"","sources":["../src/material_datepicker/calendar/day.dart","../src/material_datepicker/calendar/highlight.dart","../src/material_datepicker/calendar/model.dart","../src/material_datepicker/calendar/month.dart","../src/material_datepicker/calendar/week.dart","../src/material_datepicker/calendar/year.dart"],"names":[],"mappings":"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","file":"calendar.ddc.js"}');
  // Exports:
  return {
    material_datepicker__calendar: material_datepicker__calendar
  };
});

//# sourceMappingURL=calendar.ddc.js.map
