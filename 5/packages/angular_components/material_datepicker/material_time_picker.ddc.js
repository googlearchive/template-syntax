define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/intl/intl', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/quiver/time', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/selection/string_selection_options'], function(dart_sdk, disposer, intl, selection_model, properties, keyboard_handler_mixin, lifecycle_hooks, time, selectable, string_selection_options) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const intl$ = intl.intl;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const model__a11y__keyboard_handler_mixin = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const time$ = time.time;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const model__selection__string_selection_options = string_selection_options.model__selection__string_selection_options;
  const _root = Object.create(null);
  const material_datepicker__material_time_picker = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $last = dartx.last;
  const $first = dartx.first;
  const $trim = dartx.trim;
  const $isEmpty = dartx.isEmpty;
  const $where = dartx.where;
  const $addAll = dartx.addAll;
  let StreamControllerOfDateTime = () => (StreamControllerOfDateTime = dart.constFn(async.StreamController$(core.DateTime)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let SelectionModelOfDateTime = () => (SelectionModelOfDateTime = dart.constFn(model__selection__selection_model.SelectionModel$(core.DateTime)))();
  let ListOfDateTime = () => (ListOfDateTime = dart.constFn(core.List$(core.DateTime)))();
  let SelectionChangeRecordOfDateTime = () => (SelectionChangeRecordOfDateTime = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(core.DateTime)))();
  let ListOfSelectionChangeRecordOfDateTime = () => (ListOfSelectionChangeRecordOfDateTime = dart.constFn(core.List$(SelectionChangeRecordOfDateTime())))();
  let ListOfSelectionChangeRecordOfDateTimeToNull = () => (ListOfSelectionChangeRecordOfDateTimeToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecordOfDateTime()])))();
  let JSArrayOfDateFormat = () => (JSArrayOfDateFormat = dart.constFn(_interceptors.JSArray$(intl$.DateFormat)))();
  let DateFormatTobool = () => (DateFormatTobool = dart.constFn(dart.fnType(core.bool, [intl$.DateFormat])))();
  let ListOfDateFormat = () => (ListOfDateFormat = dart.constFn(core.List$(intl$.DateFormat)))();
  const _clock = Symbol('_clock');
  const _disposer = Symbol('_disposer');
  const _timeChangeController = Symbol('_timeChangeController');
  const _time = Symbol('_time');
  const _disabled = Symbol('_disabled');
  const _required = Symbol('_required');
  const _utc = Symbol('_utc');
  const _popupVisibleController = Symbol('_popupVisibleController');
  const _popupVisible = Symbol('_popupVisible');
  const _maxTime = Symbol('_maxTime');
  const _minTime = Symbol('_minTime');
  const _validateTime = Symbol('_validateTime');
  const _parseAndTrySetTime = Symbol('_parseAndTrySetTime');
  const _parseTime = Symbol('_parseTime');
  const _parseTimeOfFormats = Symbol('_parseTimeOfFormats');
  let const$;
  let const$0;
  material_datepicker__material_time_picker.MaterialTimePickerComponent = class MaterialTimePickerComponent extends model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin {
    static _utcTime(hour, minute) {
      if (minute === void 0) minute = 0;
      return new core.DateTime.utc(material_datepicker__material_time_picker.MaterialTimePickerComponent._unixEpoch.year, material_datepicker__material_time_picker.MaterialTimePickerComponent._unixEpoch.month, material_datepicker__material_time_picker.MaterialTimePickerComponent._unixEpoch.day, hour, minute);
    }
    static _localTime(hour, minute) {
      if (minute === void 0) minute = 0;
      return new core.DateTime.new(material_datepicker__material_time_picker.MaterialTimePickerComponent._unixEpoch.year, material_datepicker__material_time_picker.MaterialTimePickerComponent._unixEpoch.month, material_datepicker__material_time_picker.MaterialTimePickerComponent._unixEpoch.day, hour, minute);
    }
    static _withEpochDate(input) {
      if (input == null) return null;
      return dart.test(input.isUtc) ? material_datepicker__material_time_picker.MaterialTimePickerComponent._utcTime(input.hour, input.minute) : material_datepicker__material_time_picker.MaterialTimePickerComponent._localTime(input.hour, input.minute);
    }
    get displayErrorPanel() {
      return this[displayErrorPanel];
    }
    set displayErrorPanel(value) {
      this[displayErrorPanel] = value;
    }
    get inputError() {
      return this[inputError];
    }
    set inputError(value) {
      this[inputError] = value;
    }
    get outputFormat() {
      return this[outputFormat];
    }
    set outputFormat(value) {
      this[outputFormat] = value;
    }
    set time(value) {
      value = dart.test(this.utc) ? value == null ? null : value.toUtc() : value == null ? null : value.toLocal();
      if ((value == null ? null : value.hour) != (() => {
        let t = this[_time];
        return t == null ? null : t.hour;
      })() || (value == null ? null : value.minute) != (() => {
        let t = this[_time];
        return t == null ? null : t.minute;
      })() || (value == null ? null : value.isUtc) != (() => {
        let t = this[_time];
        return t == null ? null : t.isUtc;
      })()) {
        this[_time] = material_datepicker__material_time_picker.MaterialTimePickerComponent._withEpochDate(value);
        this[_timeChangeController].add(this[_time]);
      }
      this.setInputErrorText(this[_validateTime](this[_time]));
      this.timeInputText = this[_time] == null ? "" : this.renderTime(this[_time]);
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get time() {
      return this[_time];
    }
    get disabled() {
      return this[_disabled];
    }
    set disabled(value) {
      return this[_disabled] = utils__angular__properties__properties.getBool(value);
    }
    get required() {
      return this[_required];
    }
    set required(value) {
      return this[_required] = utils__angular__properties__properties.getBool(value);
    }
    get utc() {
      return this[_utc];
    }
    set utc(value) {
      this[_utc] = utils__angular__properties__properties.getBool(value);
      this.timeOptions = new material_datepicker__material_time_picker.TimeSelectionOptions.new(ListOfDateTime().generate(24, dart.test(this[_utc]) ? dart.tagStatic(material_datepicker__material_time_picker.MaterialTimePickerComponent, '_utcTime') : dart.tagStatic(material_datepicker__material_time_picker.MaterialTimePickerComponent, '_localTime')));
      this.time = this[_time];
    }
    get popupVisibleChange() {
      return this[_popupVisibleController].stream;
    }
    get popupVisible() {
      return this[_popupVisible];
    }
    set popupVisible(visible) {
      this[_popupVisible] = dart.test(visible) && !dart.test(this.disabled);
      this[_popupVisibleController].add(this[_popupVisible]);
    }
    get maxTime() {
      return this[_maxTime];
    }
    set maxTime(value) {
      this[_maxTime] = material_datepicker__material_time_picker.MaterialTimePickerComponent._withEpochDate(value);
      this.timeOptions.maxTime = this[_maxTime];
      if (this[_validateTime](this[_time]) != null) {
        this.time = null;
      }
    }
    get minTime() {
      return this[_minTime];
    }
    set minTime(value) {
      this[_minTime] = material_datepicker__material_time_picker.MaterialTimePickerComponent._withEpochDate(value);
      this.timeOptions.minTime = this[_minTime];
      if (this[_validateTime](this[_time]) != null) {
        this.time = null;
      }
    }
    get timeChange() {
      return this[_timeChangeController].stream;
    }
    get dropdownText() {
      return this.time != null ? this.renderTime(this.time) : this.dropdownPlaceholderMsg;
    }
    get timeOptions() {
      return this[timeOptions];
    }
    set timeOptions(value) {
      this[timeOptions] = value;
    }
    get selectedTime() {
      return this[selectedTime];
    }
    set selectedTime(value) {
      this[selectedTime] = value;
    }
    get timeInputText() {
      return this[timeInputText];
    }
    set timeInputText(value) {
      this[timeInputText] = value;
    }
    renderTime(time) {
      return this.outputFormat.format(time);
    }
    ngOnInit() {
      this[_disposer].addStreamSubscription(ListOfSelectionChangeRecordOfDateTime(), this.selectedTime.selectionChanges.listen(dart.fn(change => {
        if (dart.test(change[$last].added[$isNotEmpty])) {
          this.time = this.selectedTime.selectedValues[$first];
        }
      }, ListOfSelectionChangeRecordOfDateTimeToNull())));
    }
    setTimeToNowIfUnset() {
      if (!dart.test(this.disabled) && this.time == null) {
        this.time = material_datepicker__material_time_picker.MaterialTimePickerComponent._withEpochDate(this[_clock].now());
      }
    }
    onTextChange(text) {
      this[_parseAndTrySetTime](text);
      this.selectedTime.clear();
    }
    onBlur() {
      this[_parseAndTrySetTime](this.timeInputText[$trim](), {setAsCurrent: true});
    }
    setInputErrorText(errorText) {
      this.displayErrorPanel = errorText != null;
      this.inputError = errorText;
    }
    [_parseAndTrySetTime](timeText, opts) {
      let setAsCurrent = opts && 'setAsCurrent' in opts ? opts.setAsCurrent : false;
      let parsed = this[_parseTime](timeText);
      if (dart.test(setAsCurrent)) {
        this.time = this.inputError == null ? parsed : this[_time];
      }
      return this[_time];
    }
    [_parseTime](timeText) {
      if (timeText[$trim]()[$isEmpty]) {
        this.setInputErrorText(dart.test(this.required) ? this.inputPlaceholderMsg : null);
        return null;
      }
      let formatsToParse = JSArrayOfDateFormat().of([this.outputFormat]);
      formatsToParse[$addAll](material_datepicker__material_time_picker.MaterialTimePickerComponent._supportedTimeFormats[$where](dart.fn(f => !dart.equals(this.outputFormat.pattern, f.pattern), DateFormatTobool())));
      let parsed = this[_parseTimeOfFormats](timeText, formatsToParse);
      if (parsed == null) {
        this.setInputErrorText(this.inputPlaceholderMsg);
      } else {
        this.setInputErrorText(this[_validateTime](parsed));
      }
      return parsed;
    }
    [_parseTimeOfFormats](timeText, formats) {
      let trimmed = timeText[$trim]();
      for (let format of formats) {
        try {
          let parsed = format.parseLoose(trimmed, this.utc);
          if (parsed != null) {
            return material_datepicker__material_time_picker.MaterialTimePickerComponent._withEpochDate(parsed);
          }
        } catch (e) {
          if (core.FormatException.is(e)) {
          } else
            throw e;
        }
      }
      return null;
    }
    [_validateTime](value) {
      if (value == null) {
        return dart.test(this.required) ? this.inputPlaceholderMsg : null;
      }
      if (this.minTime != null && dart.test(value.isBefore(this.minTime))) {
        return this.timeIsTooEarlyMsg(this.renderTime(this.minTime));
      } else if (this.maxTime != null && dart.test(value.isAfter(this.maxTime))) {
        return this.timeIsTooLateMsg(this.renderTime(this.maxTime));
      }
      return null;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
    onInputBoxKeyDown(event) {
      event.stopPropagation();
    }
    handleSpaceKey(event) {
      event.stopPropagation();
    }
    handleEnterKey(event) {
      this.popupVisible = false;
      event.stopPropagation();
    }
    get dropdownPlaceholderMsg() {
      return intl$.Intl.message('Select time', {name: 'MaterialTimePickerComponent_dropdownPlaceholderMsg', desc: 'Placeholder text for an empty time picker dropdown button.'});
    }
    get inputPlaceholderMsg() {
      return intl$.Intl.message('Enter time', {name: 'MaterialTimePickerComponent_inputPlaceholderMsg', desc: 'Placeholder text for an empty time picker input box.'});
    }
    timeIsTooEarlyMsg(minimumTime) {
      return intl$.Intl.message(dart.str`Enter ${minimumTime} or later`, {name: 'timeIsTooEarlyMsg', args: [minimumTime], examples: const$ || (const$ = dart.constMap(core.String, dart.dynamic, ['minimumTime', '13:35'])), meaning: 'Error message', desc: 'Displayed when the user enters a valid time, but it\'s before the ' + 'minimum time accepted by the time input field.'});
    }
    timeIsTooLateMsg(maximumTime) {
      return intl$.Intl.message(dart.str`Enter ${maximumTime} or earlier`, {name: 'timeIsTooLateMsg', args: [maximumTime], examples: const$0 || (const$0 = dart.constMap(core.String, dart.dynamic, ['maximumTime', '23:59'])), meaning: 'Error message', desc: 'Displayed when the user enters a valid time, but it\'s after the ' + 'maximum time accepted by the time input field.'});
    }
  };
  (material_datepicker__material_time_picker.MaterialTimePickerComponent.new = function(clock) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_timeChangeController] = StreamControllerOfDateTime().broadcast();
    this[_time] = null;
    this[displayErrorPanel] = null;
    this[inputError] = null;
    this[outputFormat] = new intl$.DateFormat.jm();
    this[error] = null;
    this[_disabled] = false;
    this[_required] = false;
    this[_utc] = false;
    this[_popupVisibleController] = StreamControllerOfbool().broadcast();
    this[_popupVisible] = false;
    this[_maxTime] = null;
    this[_minTime] = null;
    this[timeOptions] = null;
    this[selectedTime] = SelectionModelOfDateTime().withList();
    this[timeInputText] = "";
    this[_clock] = clock;
    material_datepicker__material_time_picker.MaterialTimePickerComponent.__proto__.new.call(this);
    this.timeOptions = new material_datepicker__material_time_picker.TimeSelectionOptions.new(ListOfDateTime().generate(24, dart.tagStatic(material_datepicker__material_time_picker.MaterialTimePickerComponent, '_localTime')));
  }).prototype = material_datepicker__material_time_picker.MaterialTimePickerComponent.prototype;
  dart.addTypeTests(material_datepicker__material_time_picker.MaterialTimePickerComponent);
  const displayErrorPanel = Symbol("MaterialTimePickerComponent.displayErrorPanel");
  const inputError = Symbol("MaterialTimePickerComponent.inputError");
  const outputFormat = Symbol("MaterialTimePickerComponent.outputFormat");
  const error = Symbol("MaterialTimePickerComponent.error");
  const timeOptions = Symbol("MaterialTimePickerComponent.timeOptions");
  const selectedTime = Symbol("MaterialTimePickerComponent.selectedTime");
  const timeInputText = Symbol("MaterialTimePickerComponent.timeInputText");
  material_datepicker__material_time_picker.MaterialTimePickerComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_datepicker__material_time_picker.MaterialTimePickerComponent, () => ({
    __proto__: dart.getMethods(material_datepicker__material_time_picker.MaterialTimePickerComponent.__proto__),
    renderTime: dart.fnType(core.String, [core.DateTime]),
    ngOnInit: dart.fnType(dart.void, []),
    setTimeToNowIfUnset: dart.fnType(dart.void, []),
    onTextChange: dart.fnType(dart.void, [core.String]),
    onBlur: dart.fnType(dart.void, []),
    setInputErrorText: dart.fnType(dart.void, [core.String]),
    [_parseAndTrySetTime]: dart.fnType(core.DateTime, [core.String], {setAsCurrent: core.bool}),
    [_parseTime]: dart.fnType(core.DateTime, [core.String]),
    [_parseTimeOfFormats]: dart.fnType(core.DateTime, [core.String, ListOfDateFormat()]),
    [_validateTime]: dart.fnType(core.String, [core.DateTime]),
    ngOnDestroy: dart.fnType(dart.void, []),
    onInputBoxKeyDown: dart.fnType(dart.void, [html.KeyboardEvent]),
    timeIsTooEarlyMsg: dart.fnType(core.String, [core.String]),
    timeIsTooLateMsg: dart.fnType(core.String, [core.String])
  }));
  dart.setStaticMethodSignature(material_datepicker__material_time_picker.MaterialTimePickerComponent, () => ({
    _utcTime: dart.fnType(core.DateTime, [core.int], [core.int]),
    _localTime: dart.fnType(core.DateTime, [core.int], [core.int]),
    _withEpochDate: dart.fnType(core.DateTime, [core.DateTime])
  }));
  dart.setGetterSignature(material_datepicker__material_time_picker.MaterialTimePickerComponent, () => ({
    __proto__: dart.getGetters(material_datepicker__material_time_picker.MaterialTimePickerComponent.__proto__),
    time: dart.fnType(core.DateTime, []),
    disabled: dart.fnType(core.bool, []),
    required: dart.fnType(core.bool, []),
    utc: dart.fnType(core.bool, []),
    popupVisibleChange: dart.fnType(async.Stream$(core.bool), []),
    popupVisible: dart.fnType(core.bool, []),
    maxTime: dart.fnType(core.DateTime, []),
    minTime: dart.fnType(core.DateTime, []),
    timeChange: dart.fnType(async.Stream$(core.DateTime), []),
    dropdownText: dart.fnType(core.String, []),
    dropdownPlaceholderMsg: dart.fnType(core.String, []),
    inputPlaceholderMsg: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(material_datepicker__material_time_picker.MaterialTimePickerComponent, () => ({
    __proto__: dart.getSetters(material_datepicker__material_time_picker.MaterialTimePickerComponent.__proto__),
    time: dart.fnType(dart.void, [core.DateTime]),
    disabled: dart.fnType(dart.void, [dart.dynamic]),
    required: dart.fnType(dart.void, [dart.dynamic]),
    utc: dart.fnType(dart.void, [dart.dynamic]),
    popupVisible: dart.fnType(dart.void, [core.bool]),
    maxTime: dart.fnType(dart.void, [core.DateTime]),
    minTime: dart.fnType(dart.void, [core.DateTime])
  }));
  dart.setFieldSignature(material_datepicker__material_time_picker.MaterialTimePickerComponent, () => ({
    __proto__: dart.getFields(material_datepicker__material_time_picker.MaterialTimePickerComponent.__proto__),
    [_clock]: dart.finalFieldType(time$.Clock),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_timeChangeController]: dart.finalFieldType(StreamControllerOfDateTime()),
    [_time]: dart.fieldType(core.DateTime),
    displayErrorPanel: dart.fieldType(core.bool),
    inputError: dart.fieldType(core.String),
    outputFormat: dart.fieldType(intl$.DateFormat),
    error: dart.fieldType(core.String),
    [_disabled]: dart.fieldType(core.bool),
    [_required]: dart.fieldType(core.bool),
    [_utc]: dart.fieldType(core.bool),
    [_popupVisibleController]: dart.finalFieldType(StreamControllerOfbool()),
    [_popupVisible]: dart.fieldType(core.bool),
    [_maxTime]: dart.fieldType(core.DateTime),
    [_minTime]: dart.fieldType(core.DateTime),
    timeOptions: dart.fieldType(material_datepicker__material_time_picker.TimeSelectionOptions),
    selectedTime: dart.fieldType(SelectionModelOfDateTime()),
    timeInputText: dart.fieldType(core.String)
  }));
  dart.defineLazy(material_datepicker__material_time_picker.MaterialTimePickerComponent, {
    /*material_datepicker__material_time_picker.MaterialTimePickerComponent._unixEpoch*/get _unixEpoch() {
      return new core.DateTime.new(1970, core.DateTime.JANUARY, 1, 0, 0);
    },
    /*material_datepicker__material_time_picker.MaterialTimePickerComponent._supportedTimeFormats*/get _supportedTimeFormats() {
      return JSArrayOfDateFormat().of([new intl$.DateFormat.jm(), new intl$.DateFormat.Hm(), new intl$.DateFormat.jms(), new intl$.DateFormat.Hms()]);
    }
  });
  material_datepicker__material_time_picker.TimeSelectionOptions = class TimeSelectionOptions extends model__selection__string_selection_options.StringSelectionOptions$(core.DateTime) {
    set minTime(time) {
      return this[_minTime] = time;
    }
    set maxTime(time) {
      return this[_maxTime] = time;
    }
    getSelectable(item) {
      return core.DateTime.is(item) && (this[_minTime] != null && dart.test(item.isBefore(this[_minTime])) || this[_maxTime] != null && dart.test(item.isAfter(this[_maxTime]))) ? src__model__selection__interfaces__selectable.SelectableOption.Disabled : src__model__selection__interfaces__selectable.SelectableOption.Selectable;
    }
  };
  (material_datepicker__material_time_picker.TimeSelectionOptions.new = function(options) {
    this[_minTime] = null;
    this[_maxTime] = null;
    material_datepicker__material_time_picker.TimeSelectionOptions.__proto__.new.call(this, options);
  }).prototype = material_datepicker__material_time_picker.TimeSelectionOptions.prototype;
  dart.addTypeTests(material_datepicker__material_time_picker.TimeSelectionOptions);
  material_datepicker__material_time_picker.TimeSelectionOptions[dart.implements] = () => [src__model__selection__interfaces__selectable.Selectable];
  dart.setMethodSignature(material_datepicker__material_time_picker.TimeSelectionOptions, () => ({
    __proto__: dart.getMethods(material_datepicker__material_time_picker.TimeSelectionOptions.__proto__),
    getSelectable: dart.fnType(src__model__selection__interfaces__selectable.SelectableOption, [dart.dynamic])
  }));
  dart.setSetterSignature(material_datepicker__material_time_picker.TimeSelectionOptions, () => ({
    __proto__: dart.getSetters(material_datepicker__material_time_picker.TimeSelectionOptions.__proto__),
    minTime: dart.fnType(dart.void, [core.DateTime]),
    maxTime: dart.fnType(dart.void, [core.DateTime])
  }));
  dart.setFieldSignature(material_datepicker__material_time_picker.TimeSelectionOptions, () => ({
    __proto__: dart.getFields(material_datepicker__material_time_picker.TimeSelectionOptions.__proto__),
    [_minTime]: dart.fieldType(core.DateTime),
    [_maxTime]: dart.fieldType(core.DateTime)
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/material_time_picker.ddc", {
    "package:angular_components/material_datepicker/material_time_picker.dart": material_datepicker__material_time_picker
  }, '{"version":3,"sourceRoot":"","sources":["material_time_picker.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBAoC2B,IAAQ,EAAG,MAAc;6BAAV,SAAS;YAAO,KAAI,iBAAY,CACpE,gFAAU,KAAK,EAAE,gFAAU,MAAM,EAAE,gFAAU,IAAI,EAAE,IAAI,EAAE,MAAM;IAAC;sBAEzC,IAAQ,EAAG,MAAc;6BAAV,SAAS;YAAO,KAAI,iBAAQ,CAClE,gFAAU,KAAK,EAAE,gFAAU,MAAM,EAAE,gFAAU,IAAI,EAAE,IAAI,EAAE,MAAM;IAAC;0BAErC,KAAc;AAC3C,UAAI,KAAK,IAAI,MAAM,MAAO;AAC1B,uBAAO,KAAK,MAAM,IACZ,8EAAQ,CAAC,KAAK,KAAK,EAAE,KAAK,OAAO,IACjC,gFAAU,CAAC,KAAK,KAAK,EAAE,KAAK,OAAO;IAC3C;IAcK;;;;;;IACE;;;;;;IAMI;;;;;;aAMF,KAAc;AACrB,WAAK,aAAG,QAAG,IAAG,KAAK,kBAAL,KAAK,MAAO,KAAK,KAAK,kBAAL,KAAK,QAAS;AAG7C,WAAK,KAAK,kBAAL,KAAK,KAAM;gBAAI,WAAK;;eACrB,KAAK,kBAAL,KAAK,OAAQ;gBAAI,WAAK;;eACtB,KAAK,kBAAL,KAAK,MAAO;gBAAI,WAAK;;YAAU;AACjC,mBAAK,GAAG,oFAAc,CAAC,KAAK;AAC5B,mCAAqB,IAAI,CAAC,WAAK;;AAEjC,4BAAiB,CAAC,mBAAa,CAAC,WAAK;AACrC,wBAAa,GAAG,WAAK,IAAI,OAAO,KAAK,eAAU,CAAC,WAAK;IACvD;IAMO;;;;;;;YAEc,YAAK;;;YAEL,gBAAS;;iBAKjB,KAAa;YAAK,gBAAS,GAAG,8CAAO,CAAC,KAAK;IAAC;;YAGpC,gBAAS;;iBAOjB,KAAa;YAAK,gBAAS,GAAG,8CAAO,CAAC,KAAK;IAAC;;YAEzC,WAAI;;YAOZ,KAAa;AACnB,gBAAI,GAAG,8CAAO,CAAC,KAAK;AAEpB,sBAAW,GAAG,IAAI,kEAAoB,CAClC,AAAI,yBAAuB,CAAC,cAAI,UAAI,IAAG,iGAAQ,GAAG,mGAAU;AAEhE,eAAI,GAAG,WAAK;IACd;;YAMuC,8BAAuB,OAAO;;;YAG5C,oBAAa;;qBAKrB,OAAY;AAE3B,yBAAa,GAAW,UAAR,OAAO,gBAAK,aAAQ;AACpC,mCAAuB,IAAI,CAAC,mBAAa;IAC3C;;YAGwB,eAAQ;;gBAIpB,KAAc;AACxB,oBAAQ,GAAG,oFAAc,CAAC,KAAK;AAC/B,sBAAW,QAAQ,GAAG,cAAQ;AAG9B,UAAI,mBAAa,CAAC,WAAK,KAAK,MAAM;AAChC,iBAAI,GAAG;;IAEX;;YAGwB,eAAQ;;gBAIpB,KAAc;AACxB,oBAAQ,GAAG,oFAAc,CAAC,KAAK;AAC/B,sBAAW,QAAQ,GAAG,cAAQ;AAG9B,UAAI,mBAAa,CAAC,WAAK,KAAK,MAAM;AAChC,iBAAI,GAAG;;IAEX;;YAMmC,4BAAqB,OAAO;;;YAG3D,UAAI,IAAI,OAAO,eAAU,CAAC,SAAI,IAAI,2BAAsB;;IACvC;;;;;;IACI;;;;;;IAClB;;;;;;eACW,IAAa;YAAK,kBAAY,OAAO,CAAC,IAAI;IAAC;;AAS3D,qBAAS,sBACiB,0CAAC,iBAAY,iBAAiB,OAAO,CAAC,QAAC,MAAM;AAGrE,sBAAI,MAAM,OAAK,MAAM,aAAW,GAAE;AAChC,mBAAI,GAAG,iBAAY,eAAe,QAAM;;;IAG9C;;AAIE,qBAAK,aAAQ,KAAI,SAAI,IAAI,MAAM;AAC7B,iBAAI,GAAG,oFAAc,CAAC,YAAM,IAAI;;IAEpC;iBAGkB,IAAW;AAC3B,+BAAmB,CAAC,IAAI;AACxB,uBAAY,MAAM;IACpB;;AAIE,+BAAmB,CAAC,kBAAa,OAAK,mBAAkB;IAC1D;sBAEuB,SAAgB;AACrC,4BAAiB,GAAI,SAAS,IAAI;AAClC,qBAAU,GAAG,SAAS;IACxB;0BAI6B,QAAe;UAAQ,oEAAc;AAChE,UAAM,SAAS,gBAAU,CAAC,QAAQ;AAClC,oBAAI,YAAY,GAAE;AAChB,iBAAI,GAAG,eAAU,IAAI,OAAO,MAAM,GAAG,WAAK;;AAE5C,YAAO,YAAK;IACd;iBAOoB,QAAe;AACjC,UAAI,QAAQ,OAAK,YAAU,EAAE;AAC3B,8BAAiB,WAAC,aAAQ,IAAG,wBAAmB,GAAG;AACnD,cAAO;;AAGT,UAAM,iBAAiB,0BAAC,iBAAY;AACpC,oBAAc,SAAO,CAAC,2FAAqB,QACjC,CAAC,QAAC,CAAY,iBAAK,iBAAY,QAAQ,EAAI,CAAC,QAAQ;AAE9D,UAAS,SAAS,yBAAmB,CAAC,QAAQ,EAAE,cAAc;AAC9D,UAAI,MAAM,IAAI,MAAM;AAClB,8BAAiB,CAAC,wBAAmB;aAChC;AACL,8BAAiB,CAAC,mBAAa,CAAC,MAAM;;AAExC,YAAO,OAAM;IACf;0BAM6B,QAAe,EAAE,OAAwB;AACpE,UAAM,UAAU,QAAQ,OAAK;AAC7B,eAAW,SAAU,QAAO,EAAE;AAC5B,YAAI;AACF,cAAM,SAAS,MAAM,WAAW,CAAC,OAAO,EAAE,QAAG;AAC7C,cAAI,MAAM,IAAI,MAAM;AAClB,kBAAO,qFAAc,CAAC,MAAM;;;AAE9B,0CAAmB;;;;;AAIvB,YAAO;IACT;oBAKqB,KAAc;AACjC,UAAI,KAAK,IAAI,MAAM;AACjB,yBAAO,aAAQ,IAAG,wBAAmB,GAAG;;AAG1C,UAAI,YAAO,IAAI,kBAAQ,KAAK,SAAS,CAAC,YAAO,IAAG;AAC9C,cAAO,uBAAiB,CAAC,eAAU,CAAC,YAAO;YACtC,KAAI,YAAO,IAAI,kBAAQ,KAAK,QAAQ,CAAC,YAAO,IAAG;AACpD,cAAO,sBAAgB,CAAC,eAAU,CAAC,YAAO;;AAE5C,YAAO;IACT;;AAIE,qBAAS,QAAQ;IACnB;sBAIuB,KAAmB;AACxC,WAAK,gBAAgB;IACvB;mBAKoB,KAAmB;AACrC,WAAK,gBAAgB;IACvB;mBAKoB,KAAmB;AACrC,uBAAY,GAAG;AACf,WAAK,gBAAgB;IACvB;;YAEqC,WAAI,QAAQ,CAAC,sBACxC,4DACA;IAA6D;;YAErC,WAAI,QAAQ,CAAC,qBACrC,yDACA;IAAuD;sBAExC,WAAkB;YAAK,WAAI,QAAQ,CACxD,iBAAQ,WAAW,oBACb,2BACA,CAAC,WAAW,aACR,8DAAO,eAAe,qBACvB,uBACH,uEACF;IAAiD;qBAEjC,WAAkB;YAAK,WAAI,QAAQ,CACvD,iBAAQ,WAAW,sBACb,0BACA,CAAC,WAAW,aACR,gEAAO,eAAe,qBACvB,uBACH,sEACF;IAAiD;;wFA/JC,KAAM;IApI1D,eAAS,GAAG,IAAI,0CAAgB;IAChC,2BAAqB,GAAG,AAAI,sCAAoC;IAC7D,WAAK;IACT,uBAAiB;IACf,gBAAU;IAMN,kBAAY,GAAG,IAAI,mBAAa;IAwBpC,WAAK;IAKP,eAAS,GAAG;IAMZ,eAAS,GAAG;IAWZ,UAAI,GAAG;IAeN,6BAAuB,GAAG,AAAI,kCAAgC;IAM/D,mBAAa,GAAG;IAYZ,cAAQ;IAeR,cAAQ;IAuBI,iBAAW;IACP,kBAAY,GAAG,AAAI,mCAAuB;IAC5D,mBAAa,GAAG;IAGmC,YAAM,GAAN,KAAM;;AAC9D,oBAAW,GACP,IAAI,kEAAoB,CAAC,AAAI,yBAAuB,CAAC,IAAI,mGAAU;EACzE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAhJa,gFAAU;YAAG,KAAI,iBAAQ,CAAC,MAAM,aAAQ,QAAQ,EAAE,GAAG,GAAG;;MACxD,2FAAqB;YAAG,2BACnC,IAAI,mBAAa,IACjB,IAAI,mBAAa,IACjB,IAAI,oBAAc,IAClB,IAAI,oBAAc;;;;gBAoTR,IAAa;YAAK,eAAQ,GAAG,IAAI;;gBACjC,IAAa;YAAK,eAAQ,GAAG,IAAI;;kBAGd,IAAI;AACjC,8BAAO,IAAI,MACD,cAAQ,IAAI,kBAAQ,IAAI,SAAS,CAAC,cAAQ,MACvC,cAAQ,IAAI,kBAAQ,IAAI,QAAQ,CAAC,cAAQ,MAChD,8DAAgB,SAAS,GACzB,8DAAgB,WAAW;IACnC;;iFAZqB,OAAsB;IAHlC,cAAQ;IACR,cAAQ;AAE8B,4FAAM,OAAO;EAAC","file":"material_time_picker.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_time_picker: material_datepicker__material_time_picker
  };
});

//# sourceMappingURL=material_time_picker.ddc.js.map
