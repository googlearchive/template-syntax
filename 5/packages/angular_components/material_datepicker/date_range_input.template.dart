// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'date_range_input.dart';
export 'date_range_input.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:angular_components/material_datepicker/calendar.dart';
import 'package:angular_components/material_datepicker/date_input.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/model/date/date.dart';
import 'package:angular_components/model/observable/observable.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref1;
import 'package:angular_components/material_datepicker/date_input.template.dart' as _ref2;
import 'package:angular_components/material_input/material_input.template.dart' as _ref3;
import 'package:angular_components/model/date/date.template.dart' as _ref4;
import 'package:angular_components/model/observable/observable.template.dart' as _ref5;
import 'package:angular_components/material_datepicker/date_range_input.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'date_range_input.dart' as import2;
import 'dart:html' as import3;
import '../material_input/material_input.template.dart' as import4;
import '../material_input/deferred_validator.dart' as import5;
import '../material_input/material_input.dart' as import6;
import 'date_input.dart' as import7;
import '../material_input/material_input_default_value_accessor.dart' as import8;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import14;
import 'package:quiver/time.dart' as import15;
import '../utils/angular/reference/reference.dart' as import16;
import '../focus/focus.dart' as import17;
import '../material_input/base_material_input.dart' as import18;

const List<dynamic> styles$DateRangeInputComponent = const [import0.styles];

class ViewDateRangeInputComponent0 extends AppView<import2.DateRangeInputComponent> {
  import3.Element _el_0;
  import4.ViewMaterialInputComponent0 _compView_0;
  import5.DeferredValidator _DeferredValidator_0_5;
  import6.MaterialInputComponent _MaterialInputComponent_0_6;
  import7.DateInputDirective _DateInputDirective_0_7;
  import6.MaterialInputComponent _BaseMaterialInput_0_8;
  import8.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_9;
  List<dynamic> __NgValidators_0_10;
  import3.Element _el_1;
  import3.Element _el_3;
  import4.ViewMaterialInputComponent0 _compView_3;
  import5.DeferredValidator _DeferredValidator_3_5;
  import6.MaterialInputComponent _MaterialInputComponent_3_6;
  import7.DateInputDirective _DateInputDirective_3_7;
  import6.MaterialInputComponent _BaseMaterialInput_3_8;
  import8.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_3_9;
  List<dynamic> __NgValidators_3_10;
  bool _expr_0;
  String _expr_1;
  bool _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  bool _expr_7;
  String _expr_8;
  bool _expr_9;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  var _expr_13;
  static RenderComponentType _renderType;
  ViewDateRangeInputComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('date-range-input');
    _renderType ??= import12.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$DateRangeInputComponent);
    setupComponentType(_renderType);
  }
  List<dynamic> get _NgValidators_0_10 {
    if ((this.__NgValidators_0_10 == null)) {
      (__NgValidators_0_10 = [this._DeferredValidator_0_5]);
    }
    return this.__NgValidators_0_10;
  }

  List<dynamic> get _NgValidators_3_10 {
    if ((this.__NgValidators_3_10 == null)) {
      (__NgValidators_3_10 = [this._DeferredValidator_3_5]);
    }
    return this.__NgValidators_3_10;
  }

  @override
  ComponentRef<import2.DateRangeInputComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = new import4.ViewMaterialInputComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    _el_0.className = 'start date-input themeable';
    createAttr(_el_0, 'dateParsing', '');
    addShimC(_el_0);
    _DeferredValidator_0_5 = new import5.DeferredValidator();
    _MaterialInputComponent_0_6 = new import6.MaterialInputComponent(null, null, null, _compView_0.ref, _DeferredValidator_0_5);
    _DateInputDirective_0_7 = new import7.DateInputDirective(parentView.injectorGet(const import14.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null), parentView.injectorGet(import15.Clock, viewData.parentIndex), _MaterialInputComponent_0_6);
    _BaseMaterialInput_0_8 = _MaterialInputComponent_0_6;
    _MaterialInputDefaultValueAccessor_0_9 = new import8.MaterialInputDefaultValueAccessor(_BaseMaterialInput_0_8, null);
    _compView_0.create(_MaterialInputComponent_0_6, [const []]);
    var doc = import3.document;
    _el_1 = createSpanAndAppend(doc, parentRenderNode);
    _el_1.className = 'separator';
    addShimE(_el_1);
    import3.Text _text_2 = new import3.Text('—');
    _el_1.append(_text_2);
    _compView_3 = new import4.ViewMaterialInputComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    _el_3.className = 'end date-input themeable';
    createAttr(_el_3, 'dateParsing', '');
    addShimC(_el_3);
    _DeferredValidator_3_5 = new import5.DeferredValidator();
    _MaterialInputComponent_3_6 = new import6.MaterialInputComponent(null, null, null, _compView_3.ref, _DeferredValidator_3_5);
    _DateInputDirective_3_7 = new import7.DateInputDirective(parentView.injectorGet(const import14.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null), parentView.injectorGet(import15.Clock, viewData.parentIndex), _MaterialInputComponent_3_6);
    _BaseMaterialInput_3_8 = _MaterialInputComponent_3_6;
    _MaterialInputDefaultValueAccessor_3_9 = new import8.MaterialInputDefaultValueAccessor(_BaseMaterialInput_3_8, null);
    _compView_3.create(_MaterialInputComponent_3_6, [const []]);
    final subscription_0 = _MaterialInputComponent_0_6.onFocus.listen(eventHandler0(ctx.onStartFocused));
    final subscription_1 = _DateInputDirective_0_7.dateChange.listen(eventHandler1(_handle_dateChange_0_1));
    final subscription_2 = _MaterialInputComponent_3_6.onFocus.listen(eventHandler0(ctx.onEndFocused));
    final subscription_3 = _DateInputDirective_3_7.dateChange.listen(eventHandler1(_handle_dateChange_3_1));
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.DeferredValidator) && (0 == nodeIndex))) {
      return _DeferredValidator_0_5;
    }
    if ((((identical(token, import6.MaterialInputComponent) || identical(token, import16.ReferenceDirective)) || identical(token, import17.Focusable)) && (0 == nodeIndex))) {
      return _MaterialInputComponent_0_6;
    }
    if ((identical(token, import7.DateInputDirective) && (0 == nodeIndex))) {
      return _DateInputDirective_0_7;
    }
    if ((identical(token, import18.BaseMaterialInput) && (0 == nodeIndex))) {
      return _BaseMaterialInput_0_8;
    }
    if ((identical(token, import8.MaterialInputDefaultValueAccessor) && (0 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_0_9;
    }
    if ((identical(token, const import14.MultiToken('NgValidators')) && (0 == nodeIndex))) {
      return _NgValidators_0_10;
    }
    if ((identical(token, import5.DeferredValidator) && (3 == nodeIndex))) {
      return _DeferredValidator_3_5;
    }
    if ((((identical(token, import6.MaterialInputComponent) || identical(token, import16.ReferenceDirective)) || identical(token, import17.Focusable)) && (3 == nodeIndex))) {
      return _MaterialInputComponent_3_6;
    }
    if ((identical(token, import7.DateInputDirective) && (3 == nodeIndex))) {
      return _DateInputDirective_3_7;
    }
    if ((identical(token, import18.BaseMaterialInput) && (3 == nodeIndex))) {
      return _BaseMaterialInput_3_8;
    }
    if ((identical(token, import8.MaterialInputDefaultValueAccessor) && (3 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_3_9;
    }
    if ((identical(token, const import14.MultiToken('NgValidators')) && (3 == nodeIndex))) {
      return _NgValidators_3_10;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeInputComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_1 = _ctx.startDateMsg;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialInputComponent_0_6.label = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.isDateInputRequired;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialInputComponent_0_6.required = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_3 = _ctx.startDateFormat;
    if (!identical(_expr_3, currVal_3)) {
      _DateInputDirective_0_7.dateFormat = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.startMaxDate;
    if (!identical(_expr_4, currVal_4)) {
      _DateInputDirective_0_7.maxDate = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.minDate;
    if (!identical(_expr_5, currVal_5)) {
      _DateInputDirective_0_7.minDate = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.start;
    if (!identical(_expr_6, currVal_6)) {
      _DateInputDirective_0_7.date = currVal_6;
      _expr_6 = currVal_6;
    }
    changed = false;
    final currVal_8 = _ctx.endDateMsg;
    if (!identical(_expr_8, currVal_8)) {
      _MaterialInputComponent_3_6.label = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.isDateInputRequired;
    if (!identical(_expr_9, currVal_9)) {
      _MaterialInputComponent_3_6.required = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    if (firstCheck) {
      (_DateInputDirective_3_7.rangeEnd = true);
    }
    final currVal_10 = _ctx.endDateFormat;
    if (!identical(_expr_10, currVal_10)) {
      _DateInputDirective_3_7.dateFormat = currVal_10;
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.maxDate;
    if (!identical(_expr_11, currVal_11)) {
      _DateInputDirective_3_7.maxDate = currVal_11;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.endMinDate;
    if (!identical(_expr_12, currVal_12)) {
      _DateInputDirective_3_7.minDate = currVal_12;
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.end;
    if (!identical(_expr_13, currVal_13)) {
      _DateInputDirective_3_7.date = currVal_13;
      _expr_13 = currVal_13;
    }
    final currVal_0 = _ctx.isStartActive;
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'active', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_7 = _ctx.isEndActive;
    if (!identical(_expr_7, currVal_7)) {
      updateElemClass(_el_3, 'active', currVal_7);
      _expr_7 = currVal_7;
    }
    _compView_0.detectChanges();
    _compView_3.detectChanges();
    if (firstCheck) {
      _MaterialInputComponent_0_6.ngAfterViewInit();
    }
    if (firstCheck) {
      _MaterialInputComponent_3_6.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_3?.destroy();
    _MaterialInputComponent_0_6.ngOnDestroy();
    _DateInputDirective_0_7.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_0_9.ngOnDestroy();
    _MaterialInputComponent_3_6.ngOnDestroy();
    _DateInputDirective_3_7.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_3_9.ngOnDestroy();
  }

  void _handle_dateChange_0_1($event) {
    ctx.start = $event;
  }

  void _handle_dateChange_3_1($event) {
    ctx.end = $event;
  }
}

AppView<import2.DateRangeInputComponent> viewFactory_DateRangeInputComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewDateRangeInputComponent0(parentView, parentIndex);
}

const List<dynamic> styles$DateRangeInputComponentHost = const [];

class _ViewDateRangeInputComponentHost0 extends AppView<dynamic> {
  ViewDateRangeInputComponent0 _compView_0;
  import2.DateRangeInputComponent _DateRangeInputComponent_0_5;
  _ViewDateRangeInputComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewDateRangeInputComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DateRangeInputComponent_0_5 = new import2.DateRangeInputComponent(_compView_0.ref);
    _compView_0.create(_DateRangeInputComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.DateRangeInputComponent>(0, this, rootEl, _DateRangeInputComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.DateRangeInputComponent) && (0 == nodeIndex))) {
      return _DateRangeInputComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      _DateRangeInputComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _DateRangeInputComponent_0_5.ngOnDestroy();
  }
}

AppView viewFactory_DateRangeInputComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeInputComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.DateRangeInputComponent> DateRangeInputComponentNgFactory = const ComponentFactory<import2.DateRangeInputComponent>('date-range-input', viewFactory_DateRangeInputComponentHost0, _DateRangeInputComponentMetadata);
const _DateRangeInputComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DateRangeInputComponent, DateRangeInputComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
