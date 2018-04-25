// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_calendar_picker.dart';
export 'material_calendar_picker.dart';
import 'dart:async';
import 'dart:html';
import 'dart:js_util';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:quiver/time.dart';
import 'package:angular_components/material_datepicker/calendar.dart';
import 'package:angular_components/material_datepicker/module.dart';
import 'package:angular_components/model/date/date.dart';
import 'package:angular_components/model/observable/observable.dart';
import 'package:angular_components/utils/browser/feature_detector/feature_detector.dart' show isEdge, isFirefox;
import '../src/material_datepicker/calendar_listener.dart';
import '../src/material_datepicker/enum_parsing.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../src/material_datepicker/calendar_listener.template.dart' as _ref0;
import '../src/material_datepicker/enum_parsing.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref3;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref4;
import 'package:angular_components/model/date/date.template.dart' as _ref5;
import 'package:angular_components/model/observable/observable.template.dart' as _ref6;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref7;
import 'package:angular_components/material_datepicker/material_calendar_picker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_calendar_picker.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'dart:core';
import 'package:angular/src/core/di/opaque_token.dart' as import13;
import 'package:quiver/time.dart' as import14;

const List<dynamic> styles$MaterialCalendarPickerComponent = const [import0.styles];

class ViewMaterialCalendarPickerComponent0 extends AppView<import2.MaterialCalendarPickerComponent> {
  bool _query_container_1_0_isDirty = true;
  import3.Element _el_0;
  ViewContainer _appEl_1;
  import5.NgFor _NgFor_1_9;
  import3.DivElement _el_2;
  import3.DivElement _el_3;
  var _expr_0;
  bool _expr_1;
  static RenderComponentType _renderType;
  ViewMaterialCalendarPickerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-calendar-picker');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialCalendarPickerComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialCalendarPickerComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'header', parentRenderNode);
    _el_0.className = 'header';
    addShimE(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialCalendarPickerComponent1);
    _NgFor_1_9 = new import5.NgFor(_appEl_1, _TemplateRef_1_8);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    _el_2.className = 'scroll-container';
    addShimC(_el_2);
    _el_3 = createDivAndAppend(doc, _el_2);
    _el_3.className = 'calendar-container';
    addShimC(_el_3);
    ctx.container = _el_3;
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialCalendarPickerComponent _ctx = ctx;
    final currVal_0 = _ctx.dayNames;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_1_9.ngDoCheck();
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_1 = ctx.compact;
    if (!identical(_expr_1, currVal_1)) {
      updateElemClass(rootEl, 'compact', currVal_1);
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.MaterialCalendarPickerComponent> viewFactory_MaterialCalendarPickerComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialCalendarPickerComponent0(parentView, parentIndex);
}

class _ViewMaterialCalendarPickerComponent1 extends AppView<import2.MaterialCalendarPickerComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewMaterialCalendarPickerComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialCalendarPickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialCalendarPickerComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'header-day';
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final String local_name = locals['\$implicit'];
    final currVal_0 = import9.interpolate0(local_name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialCalendarPickerComponent> viewFactory_MaterialCalendarPickerComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialCalendarPickerComponent1(parentView, parentIndex);
}

const List<dynamic> styles$MaterialCalendarPickerComponentHost = const [];

class _ViewMaterialCalendarPickerComponentHost0 extends AppView<dynamic> {
  ViewMaterialCalendarPickerComponent0 _compView_0;
  import2.MaterialCalendarPickerComponent _MaterialCalendarPickerComponent_0_5;
  _ViewMaterialCalendarPickerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialCalendarPickerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialCalendarPickerComponent_0_5 = new import2.MaterialCalendarPickerComponent(this.injectorGet(const import13.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null), this.injectorGet(import14.Clock, viewData.parentIndex), null);
    _compView_0.create(_MaterialCalendarPickerComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialCalendarPickerComponent>(0, this, rootEl, _MaterialCalendarPickerComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      _MaterialCalendarPickerComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialCalendarPickerComponent_0_5.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialCalendarPickerComponent_0_5.ngOnDestroy();
  }
}

AppView viewFactory_MaterialCalendarPickerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialCalendarPickerComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialCalendarPickerComponent> MaterialCalendarPickerComponentNgFactory = const ComponentFactory<import2.MaterialCalendarPickerComponent>('material-calendar-picker', viewFactory_MaterialCalendarPickerComponentHost0, _MaterialCalendarPickerComponentMetadata);
const _MaterialCalendarPickerComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialCalendarPickerComponent, MaterialCalendarPickerComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
