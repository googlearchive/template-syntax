define(['dart_sdk', 'packages/angular_components/material_datepicker/preset', 'packages/angular_components/src/material_datepicker/date_range_editor_model', 'packages/angular_components/material_datepicker/comparison', 'packages/angular_components/model/observable/observable', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/date/date', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/material_datepicker/range', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/date/date_formatter', 'packages/intl/intl', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/material_popup/material_popup'], function(dart_sdk, preset, date_range_editor_model, comparison, observable, disposer, date, alignment, range, properties, date_formatter, intl, keyboard_handler_mixin, lifecycle_hooks, date_range_editor, keyboard_only_focus_indicator, dom_service, ng_zone, material_popup) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__preset = preset.material_datepicker__preset;
  const src__material_datepicker__date_range_editor_model = date_range_editor_model.src__material_datepicker__date_range_editor_model;
  const material_datepicker__comparison = comparison.material_datepicker__comparison;
  const model__observable__observable = observable.model__observable__observable;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const model__date__date = date.model__date__date;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const material_datepicker__range = range.material_datepicker__range;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const model__date__date_formatter = date_formatter.model__date__date_formatter;
  const intl$ = intl.intl;
  const model__a11y__keyboard_handler_mixin = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const material_datepicker__date_range_editor = date_range_editor.material_datepicker__date_range_editor;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const _root = Object.create(null);
  const material_datepicker__material_date_range_picker = Object.create(_root);
  const $toList = dartx.toList;
  const $map = dartx.map;
  let JSArrayOfDatepickerPreset = () => (JSArrayOfDatepickerPreset = dart.constFn(_interceptors.JSArray$(material_datepicker__preset.DatepickerPreset)))();
  let ObservableReferenceOfDatepickerComparison = () => (ObservableReferenceOfDatepickerComparison = dart.constFn(model__observable__observable.ObservableReference$(material_datepicker__comparison.DatepickerComparison)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let DatepickerDateRangeToDatepickerPreset = () => (DatepickerDateRangeToDatepickerPreset = dart.constFn(dart.fnType(material_datepicker__preset.DatepickerPreset, [material_datepicker__range.DatepickerDateRange])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let DatepickerComparisonToNull = () => (DatepickerComparisonToNull = dart.constFn(dart.fnType(core.Null, [material_datepicker__comparison.DatepickerComparison])))();
  let StreamSubscriptionOfDatepickerComparison = () => (StreamSubscriptionOfDatepickerComparison = dart.constFn(async.StreamSubscription$(material_datepicker__comparison.DatepickerComparison)))();
  let DateRangeChangeToDatepickerComparison = () => (DateRangeChangeToDatepickerComparison = dart.constFn(dart.fnType(material_datepicker__comparison.DatepickerComparison, [src__material_datepicker__date_range_editor_model.DateRangeChange])))();
  let StreamSubscriptionOfbool = () => (StreamSubscriptionOfbool = dart.constFn(async.StreamSubscription$(core.bool)))();
  let DateRangeChangeTobool = () => (DateRangeChangeTobool = dart.constFn(dart.fnType(core.bool, [src__material_datepicker__date_range_editor_model.DateRangeChange])))();
  let StreamSubscriptionOfDateRangeChange = () => (StreamSubscriptionOfDateRangeChange = dart.constFn(async.StreamSubscription$(src__material_datepicker__date_range_editor_model.DateRangeChange)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let numToNull = () => (numToNull = dart.constFn(dart.fnType(core.Null, [core.num])))();
  let ListOfDatepickerDateRange = () => (ListOfDatepickerDateRange = dart.constFn(core.List$(material_datepicker__range.DatepickerDateRange)))();
  let ListOfDatepickerPreset = () => (ListOfDatepickerPreset = dart.constFn(core.List$(material_datepicker__preset.DatepickerPreset)))();
  const _domService = Symbol('_domService');
  const _ngZone = Symbol('_ngZone');
  const _dateRangeEditor = Symbol('_dateRangeEditor');
  const _focusOnDateRangeEditorInit = Symbol('_focusOnDateRangeEditorInit');
  const _supportsComparison = Symbol('_supportsComparison');
  const _showNextPrevButtons = Symbol('_showNextPrevButtons');
  const _supportsDaysInputs = Symbol('_supportsDaysInputs');
  const _compact = Symbol('_compact');
  const _disabled = Symbol('_disabled');
  const _minDate = Symbol('_minDate');
  const _maxDate = Symbol('_maxDate');
  const _customPlaceHolderMsg = Symbol('_customPlaceHolderMsg');
  const _lastState = Symbol('_lastState');
  const _popupVisible = Symbol('_popupVisible');
  const _isEditorCreated = Symbol('_isEditorCreated');
  const _isCalendarCreated = Symbol('_isCalendarCreated');
  const _isApplying = Symbol('_isApplying');
  const _disposer = Symbol('_disposer');
  const _onPopupVisible = Symbol('_onPopupVisible');
  const _formattedRange = Symbol('_formattedRange');
  const _formattedComparison = Symbol('_formattedComparison');
  const _placeHolderMsg = Symbol('_placeHolderMsg');
  const _maybeStripComparison = Symbol('_maybeStripComparison');
  const _isPreset = Symbol('_isPreset');
  const _updateFormattedRanges = Symbol('_updateFormattedRanges');
  const _showApplyBar = Symbol('_showApplyBar');
  const _initCalendar = Symbol('_initCalendar');
  const _getFormattedRange = Symbol('_getFormattedRange');
  const _compareMsg = Symbol('_compareMsg');
  const _getFormattedComparison = Symbol('_getFormattedComparison');
  const _applyButtonMsg = Symbol('_applyButtonMsg');
  let const$;
  material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent = class MaterialDateRangePickerComponent extends model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin {
    get overlapAlignments() {
      return laminate__enums__alignment.RelativePosition.overlapAlignments;
    }
    set predefinedRanges(ranges) {
      this.presets = ranges[$map](material_datepicker__preset.DatepickerPreset, dart.fn(range => material_datepicker__preset.DatepickerPreset.fromRange(range), DatepickerDateRangeToDatepickerPreset()))[$toList]();
    }
    get presets() {
      return this[presets];
    }
    set presets(value) {
      this[presets] = value;
    }
    get supportsClearRange() {
      return this[supportsClearRange];
    }
    set supportsClearRange(value) {
      this[supportsClearRange] = value;
    }
    get supportsCustomRange() {
      return this.configuration === src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.fullyLoaded || this.configuration === src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.basic;
    }
    get isBasic() {
      return this.configuration === src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.basic;
    }
    get relativeDaysToToday() {
      return this[relativeDaysToToday];
    }
    set relativeDaysToToday(value) {
      this[relativeDaysToToday] = value;
    }
    get configuration() {
      return this[configuration];
    }
    set configuration(value) {
      this[configuration] = value;
    }
    get selection() {
      return this[selection];
    }
    set selection(value) {
      this[selection] = value;
    }
    set supportsComparison(value) {
      this[_supportsComparison] = utils__angular__properties__properties.getBool(value);
      if (!dart.test(this.supportsComparison) && (() => {
        let t = this.selection.value;
        return t == null ? null : t.comparison;
      })() != null) {
        this.selection.value = new material_datepicker__comparison.DatepickerComparison.noComparison(this.selection.value.range);
      }
    }
    get supportsComparison() {
      return this[_supportsComparison];
    }
    set showNextPrevButtons(value) {
      this[_showNextPrevButtons] = utils__angular__properties__properties.getBool(value);
    }
    get showNextPrevButtons() {
      return this[_showNextPrevButtons];
    }
    set supportsDaysInputs(value) {
      this[_supportsDaysInputs] = utils__angular__properties__properties.getBool(value);
    }
    get supportsDaysInputs() {
      return this[_supportsDaysInputs];
    }
    set compact(value) {
      this[_compact] = utils__angular__properties__properties.getBool(value);
    }
    get compact() {
      return this[_compact];
    }
    get applyButtonLabel() {
      return this[applyButtonLabel];
    }
    set applyButtonLabel(value) {
      this[applyButtonLabel] = value;
    }
    set disabled(value) {
      this[_disabled] = utils__angular__properties__properties.getBool(value);
      if (dart.test(this[_popupVisible]) && dart.test(this.disabled)) this.close();
    }
    get disabled() {
      return this[_disabled];
    }
    set minDate(date) {
      this[_minDate] = date;
      this.model.minDate = this[_minDate];
    }
    get minDate() {
      return this[_minDate];
    }
    set maxDate(date) {
      this[_maxDate] = date;
      this.model.maxDate = this[_maxDate];
    }
    get maxDate() {
      return this[_maxDate];
    }
    set requireFullPeriods(requireFullPeriods) {
      this.model.requireFullPeriods = requireFullPeriods;
    }
    get requireFullPeriods() {
      return this.model.requireFullPeriods;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    set placeHolderMsg(msg) {
      if (msg == null) return;
      this[_customPlaceHolderMsg] = msg;
    }
    get placeHolderMsg() {
      let l = this[_customPlaceHolderMsg];
      return l != null ? l : this[_placeHolderMsg];
    }
    get focusOnClose() {
      return this[focusOnClose];
    }
    set focusOnClose(value) {
      this[focusOnClose] = value;
    }
    get model() {
      return this[model];
    }
    set model(value) {
      super.model = value;
    }
    get applyBarVisible() {
      return this[applyBarVisible];
    }
    set applyBarVisible(value) {
      this[applyBarVisible] = value;
    }
    get isEditorCreated() {
      return this[_isEditorCreated];
    }
    get isCalendarCreated() {
      return this[_isCalendarCreated];
    }
    get allowHighlightUpdates() {
      return this[allowHighlightUpdates];
    }
    set allowHighlightUpdates(value) {
      this[allowHighlightUpdates] = value;
    }
    get range() {
      return this.selection.value;
    }
    set range(cmp) {
      this.selection.value = this[_maybeStripComparison](cmp);
    }
    get rangeChange() {
      return this.selection.stream;
    }
    get onPopupVisible() {
      return this[_onPopupVisible].stream;
    }
    ngOnInit() {
      this.model.minDate = this.minDate;
      this.model.maxDate = this.maxDate;
      this.model.requireFullPeriods = this.requireFullPeriods;
      this.model.basic = this.isBasic;
      if (this.selection.value != null) this.model.value = this[_maybeStripComparison](this.selection.value);
      this[_disposer].addFunction(dart.bind(this.model, 'dispose'));
      const _needsApply = (function(modelValue) {
        return !dart.equals(modelValue, this.selection.value) || !dart.test(this[_isPreset](material_datepicker__comparison.DatepickerComparison._check(modelValue)));
      }).bind(this);
      dart.fn(_needsApply, dynamicTobool());
      this[_updateFormattedRanges](this.selection.value);
      let _ = this[_disposer];
      _.addDisposable(StreamSubscriptionOfDatepickerComparison(), this.selection.stream.listen(dart.fn(v => {
        this.model.value = this[_maybeStripComparison](v);
        this[_updateFormattedRanges](v);
      }, DatepickerComparisonToNull())));
      _.addDisposable(StreamSubscriptionOfbool(), this.model.changes.map(material_datepicker__comparison.DatepickerComparison, dart.fn(v => v.date, DateRangeChangeToDatepickerComparison())).map(core.bool, _needsApply).listen(dart.bind(this, _showApplyBar)));
      _.addDisposable(StreamSubscriptionOfDateRangeChange(), this.model.changes.where(dart.fn(_ => !dart.test(this[_popupVisible]), DateRangeChangeTobool())).listen(dart.fn(v => this.selection.value = v.date, DateRangeChangeToDatepickerComparison())));
    }
    ngOnDestroy() {
      return this[_disposer].dispose();
    }
    get popup() {
      return this[popup];
    }
    set popup(value) {
      this[popup] = value;
    }
    open() {
      if (dart.test(this[_popupVisible]) || dart.test(this.disabled)) return;
      this[_popupVisible] = true;
      this[_onPopupVisible].add(true);
      this.popup.open();
      this.initEditor();
      this[_domService].nextFrame.then(core.Null, dart.fn(_ => {
        this[_domService].nextFrame.then(core.Null, dart.fn(_ => {
          if (!dart.test(this[_popupVisible])) return;
          this[_ngZone].run(core.Null, dart.fn(() => {
            this.allowHighlightUpdates = true;
            this[_showApplyBar](!dart.test(this[_isPreset](this.selection.value)));
            this[_lastState] = this.model.save();
            this.model.value = new material_datepicker__comparison.DatepickerComparison.reclamp(this.model.value, this.minDate, this.maxDate);
            this.model.minDate = this.minDate;
            this.model.maxDate = this.maxDate;
            this[_initCalendar]();
            this.setFocusToDateRangeEditor();
          }, VoidToNull()));
        }, numToNull()));
      }, numToNull()));
    }
    close() {
      if (!dart.test(this[_popupVisible])) return;
      this[_popupVisible] = false;
      this[_onPopupVisible].add(false);
      this.popup.close();
      this[_domService].nextFrame.then(core.Null, dart.fn(_ => {
        if (dart.test(this[_popupVisible])) return;
        this[_ngZone].run(core.Null, dart.fn(() => {
          if (!dart.test(this[_isApplying])) {
            this.model.restore(this[_lastState]);
            this.selection.value = this[_lastState].value;
            this[_showApplyBar](!dart.test(this[_isPreset](this[_lastState].value)));
          }
          this[_isApplying] = false;
        }, VoidToNull()));
      }, numToNull()));
    }
    handleEscapeKey(event) {
      this.close();
      this.focusOnClose.focus();
    }
    [_isPreset](cmp) {
      return (cmp == null ? null : cmp.comparison) == null && (() => {
        let t = cmp == null ? null : cmp.range;
        return t == null ? null : t.isPredefined;
      })() === true;
    }
    [_showApplyBar](b) {
      this.applyBarVisible = b;
    }
    onRangeClicked(event) {
      let shouldCloseEagerly = dart.test(this[_isPreset](this.model.value)) || this.model.value.range == null && this.model.value.comparison == null;
      if (shouldCloseEagerly) {
        this.allowHighlightUpdates = false;
        this.apply(event);
      }
    }
    apply(event) {
      this[_isApplying] = true;
      this.selection.value = this.model.value;
      this.close();
      this.focusOnClose.focus(event);
    }
    cancel() {
      this.model.restore(this[_lastState]);
      this.selection.value = this[_lastState].value;
      this[_showApplyBar](!dart.test(this[_isPreset](this[_lastState].value)));
      this.close();
      this.focusOnClose.focus();
    }
    get hasTitle() {
      return (() => {
        let t = this.selection.value;
        let t$ = t == null ? null : t.range;
        return t$ == null ? null : t$.title;
      })() != null;
    }
    get rangeTitle() {
      let t = this.selection.value;
      let t$ = t == null ? null : t.range;
      let l = t$ == null ? null : t$.title;
      return l != null ? l : '';
    }
    get formattedRange() {
      return this[_formattedRange];
    }
    [_getFormattedRange](value) {
      return (value == null ? null : value.range) != null ? model__date__date_formatter.formatRange(value.range) : this.placeHolderMsg;
    }
    get hasComparison() {
      return (() => {
        let t = this.selection.value;
        return t == null ? null : t.comparison;
      })() != null;
    }
    get formattedComparison() {
      return this[_formattedComparison];
    }
    [_getFormattedComparison](value) {
      return this[_compareMsg](model__date__date_formatter.formatRange(value == null ? null : value.comparison));
    }
    [_updateFormattedRanges](value) {
      this[_formattedRange] = this[_getFormattedRange](value);
      this[_formattedComparison] = this[_getFormattedComparison](value);
    }
    dateRangeEditorCreated(editor) {
      this[_dateRangeEditor] = editor;
      if (this[_dateRangeEditor] != null && dart.test(this[_focusOnDateRangeEditorInit])) {
        this[_focusOnDateRangeEditorInit] = false;
        this[_dateRangeEditor].focus();
      }
    }
    setFocusToDateRangeEditor() {
      if (this[_dateRangeEditor] != null) {
        this[_dateRangeEditor].focus();
      } else {
        this[_focusOnDateRangeEditorInit] = true;
      }
    }
    initEditor() {
      this[_isEditorCreated] = true;
    }
    [_initCalendar]() {
      this[_isCalendarCreated] = true;
    }
    [_maybeStripComparison](cmp) {
      if (cmp != null && dart.test(cmp.isComparisonEnabled) && !dart.test(this.supportsComparison)) {
        return new material_datepicker__comparison.DatepickerComparison.noComparison(cmp.range);
      } else {
        return cmp;
      }
    }
    get cancelButtonMsg() {
      return intl$.Intl.message('Cancel', {meaning: 'Button in a date picker', desc: 'Label for a "cancel" button -- abandon the current date selection ' + 'and go back to whatever it was before the user opened the date picker'});
    }
    get applyButtonMsg() {
      let l = this.applyButtonLabel;
      return l != null ? l : this[_applyButtonMsg];
    }
    get [_applyButtonMsg]() {
      return intl$.Intl.message('Apply', {name: '_applyButtonMsg', meaning: 'Button in a date picker', desc: 'Label for an "Apply" button -- accept and apply the date range ' + 'seen in the date picker.'});
    }
    [_compareMsg](to) {
      return intl$.Intl.message(dart.str`Compared: ${to}`, {name: '_compareMsg', desc: 'Indicates what date range the current date range is compared to', args: [to], examples: const$ || (const$ = dart.constMap(core.String, dart.dynamic, ['to', 'Jul 21, 2014 - Aug 3, 2015']))});
    }
    get [_placeHolderMsg]() {
      return intl$.Intl.message('Select a date range', {name: '_placeHolderMsg', desc: 'Placeholder text for a date range picker with an empty range.'});
    }
  };
  (material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.new = function(clock, legacyClock, domService, ngZone) {
    this[_dateRangeEditor] = null;
    this[_focusOnDateRangeEditorInit] = false;
    this[presets] = JSArrayOfDatepickerPreset().of([]);
    this[supportsClearRange] = false;
    this[relativeDaysToToday] = false;
    this[configuration] = src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration.fullyLoaded;
    this[selection] = new (ObservableReferenceOfDatepickerComparison()).new(null);
    this[_supportsComparison] = true;
    this[_showNextPrevButtons] = true;
    this[_supportsDaysInputs] = true;
    this[_compact] = !dart.test(html.window.matchMedia("(pointer: coarse)").matches);
    this[applyButtonLabel] = null;
    this[_disabled] = false;
    this[_minDate] = null;
    this[_maxDate] = null;
    this[error] = null;
    this[_customPlaceHolderMsg] = null;
    this[focusOnClose] = null;
    this[model] = new src__material_datepicker__date_range_editor_model.DateRangeEditorModel.new();
    this[_lastState] = null;
    this[_popupVisible] = false;
    this[applyBarVisible] = false;
    this[_isEditorCreated] = false;
    this[_isCalendarCreated] = false;
    this[allowHighlightUpdates] = true;
    this[_isApplying] = false;
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_onPopupVisible] = StreamControllerOfbool().broadcast();
    this[popup] = null;
    this[_formattedRange] = null;
    this[_formattedComparison] = null;
    this[_domService] = domService;
    this[_ngZone] = ngZone;
    material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.__proto__.new.call(this);
    let t = clock;
    t == null ? clock = legacyClock : t;
    let now = clock.now();
    this.minDate = new model__date__date.Date.new(dart.notNull(now.year) - 10, core.DateTime.JANUARY, 1);
    this.maxDate = new model__date__date.Date.new(dart.notNull(now.year) + 10, core.DateTime.DECEMBER, 31);
  }).prototype = material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent);
  const presets = Symbol("MaterialDateRangePickerComponent.presets");
  const supportsClearRange = Symbol("MaterialDateRangePickerComponent.supportsClearRange");
  const relativeDaysToToday = Symbol("MaterialDateRangePickerComponent.relativeDaysToToday");
  const configuration = Symbol("MaterialDateRangePickerComponent.configuration");
  const selection = Symbol("MaterialDateRangePickerComponent.selection");
  const applyButtonLabel = Symbol("MaterialDateRangePickerComponent.applyButtonLabel");
  const error = Symbol("MaterialDateRangePickerComponent.error");
  const focusOnClose = Symbol("MaterialDateRangePickerComponent.focusOnClose");
  const model = Symbol("MaterialDateRangePickerComponent.model");
  const applyBarVisible = Symbol("MaterialDateRangePickerComponent.applyBarVisible");
  const allowHighlightUpdates = Symbol("MaterialDateRangePickerComponent.allowHighlightUpdates");
  const popup = Symbol("MaterialDateRangePickerComponent.popup");
  material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy, material_datepicker__date_range_editor.DateRangeEditorHost];
  dart.setMethodSignature(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    open: dart.fnType(dart.void, []),
    close: dart.fnType(dart.void, []),
    [_isPreset]: dart.fnType(core.bool, [material_datepicker__comparison.DatepickerComparison]),
    [_showApplyBar]: dart.fnType(dart.void, [core.bool]),
    onRangeClicked: dart.fnType(dart.void, [html.UIEvent]),
    apply: dart.fnType(dart.void, [html.UIEvent]),
    cancel: dart.fnType(dart.void, []),
    [_getFormattedRange]: dart.fnType(core.String, [material_datepicker__comparison.DatepickerComparison]),
    [_getFormattedComparison]: dart.fnType(core.String, [material_datepicker__comparison.DatepickerComparison]),
    [_updateFormattedRanges]: dart.fnType(dart.void, [material_datepicker__comparison.DatepickerComparison]),
    dateRangeEditorCreated: dart.fnType(dart.void, [material_datepicker__date_range_editor.DateRangeEditorComponent]),
    setFocusToDateRangeEditor: dart.fnType(dart.void, []),
    initEditor: dart.fnType(dart.void, []),
    [_initCalendar]: dart.fnType(dart.void, []),
    [_maybeStripComparison]: dart.fnType(material_datepicker__comparison.DatepickerComparison, [material_datepicker__comparison.DatepickerComparison]),
    [_compareMsg]: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent, () => ({
    __proto__: dart.getGetters(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.__proto__),
    overlapAlignments: dart.fnType(core.List$(laminate__enums__alignment.RelativePosition), []),
    supportsCustomRange: dart.fnType(core.bool, []),
    isBasic: dart.fnType(core.bool, []),
    supportsComparison: dart.fnType(core.bool, []),
    showNextPrevButtons: dart.fnType(core.bool, []),
    supportsDaysInputs: dart.fnType(core.bool, []),
    compact: dart.fnType(core.bool, []),
    disabled: dart.fnType(core.bool, []),
    minDate: dart.fnType(model__date__date.Date, []),
    maxDate: dart.fnType(model__date__date.Date, []),
    requireFullPeriods: dart.fnType(core.bool, []),
    placeHolderMsg: dart.fnType(core.String, []),
    isEditorCreated: dart.fnType(core.bool, []),
    isCalendarCreated: dart.fnType(core.bool, []),
    range: dart.fnType(material_datepicker__comparison.DatepickerComparison, []),
    rangeChange: dart.fnType(async.Stream$(material_datepicker__comparison.DatepickerComparison), []),
    onPopupVisible: dart.fnType(async.Stream$(core.bool), []),
    hasTitle: dart.fnType(core.bool, []),
    rangeTitle: dart.fnType(core.String, []),
    formattedRange: dart.fnType(core.String, []),
    hasComparison: dart.fnType(core.bool, []),
    formattedComparison: dart.fnType(core.String, []),
    cancelButtonMsg: dart.fnType(core.String, []),
    applyButtonMsg: dart.fnType(core.String, []),
    [_applyButtonMsg]: dart.fnType(core.String, []),
    [_placeHolderMsg]: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent, () => ({
    __proto__: dart.getSetters(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.__proto__),
    predefinedRanges: dart.fnType(dart.void, [ListOfDatepickerDateRange()]),
    supportsComparison: dart.fnType(dart.void, [dart.dynamic]),
    showNextPrevButtons: dart.fnType(dart.void, [dart.dynamic]),
    supportsDaysInputs: dart.fnType(dart.void, [dart.dynamic]),
    compact: dart.fnType(dart.void, [dart.dynamic]),
    disabled: dart.fnType(dart.void, [dart.dynamic]),
    minDate: dart.fnType(dart.void, [model__date__date.Date]),
    maxDate: dart.fnType(dart.void, [model__date__date.Date]),
    requireFullPeriods: dart.fnType(dart.void, [core.bool]),
    placeHolderMsg: dart.fnType(dart.void, [core.String]),
    range: dart.fnType(dart.void, [material_datepicker__comparison.DatepickerComparison])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.__proto__),
    [_dateRangeEditor]: dart.fieldType(material_datepicker__date_range_editor.DateRangeEditorComponent),
    [_focusOnDateRangeEditorInit]: dart.fieldType(core.bool),
    presets: dart.fieldType(ListOfDatepickerPreset()),
    supportsClearRange: dart.fieldType(core.bool),
    relativeDaysToToday: dart.fieldType(core.bool),
    configuration: dart.fieldType(src__material_datepicker__date_range_editor_model.DateRangePickerConfiguration),
    selection: dart.fieldType(ObservableReferenceOfDatepickerComparison()),
    [_supportsComparison]: dart.fieldType(core.bool),
    [_showNextPrevButtons]: dart.fieldType(core.bool),
    [_supportsDaysInputs]: dart.fieldType(core.bool),
    [_compact]: dart.fieldType(core.bool),
    applyButtonLabel: dart.fieldType(core.String),
    [_disabled]: dart.fieldType(core.bool),
    [_minDate]: dart.fieldType(model__date__date.Date),
    [_maxDate]: dart.fieldType(model__date__date.Date),
    error: dart.fieldType(core.String),
    [_customPlaceHolderMsg]: dart.fieldType(core.String),
    focusOnClose: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    model: dart.finalFieldType(src__material_datepicker__date_range_editor_model.DateRangeEditorModel),
    [_lastState]: dart.fieldType(src__material_datepicker__date_range_editor_model.ModelState),
    [_popupVisible]: dart.fieldType(core.bool),
    applyBarVisible: dart.fieldType(core.bool),
    [_isEditorCreated]: dart.fieldType(core.bool),
    [_isCalendarCreated]: dart.fieldType(core.bool),
    allowHighlightUpdates: dart.fieldType(core.bool),
    [_isApplying]: dart.fieldType(core.bool),
    [_disposer]: dart.fieldType(utils__disposer__disposer.Disposer),
    [_onPopupVisible]: dart.finalFieldType(StreamControllerOfbool()),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    popup: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [_formattedRange]: dart.fieldType(core.String),
    [_formattedComparison]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_range_picker.ddc", {
    "package:angular_components/material_datepicker/material_date_range_picker.dart": material_datepicker__material_date_range_picker
  }, '{"version":3,"sourceRoot":"","sources":["material_date_range_picker.dart"],"names":[],"mappings":"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","file":"material_date_range_picker.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_range_picker: material_datepicker__material_date_range_picker
  };
});

//# sourceMappingURL=material_date_range_picker.ddc.js.map
