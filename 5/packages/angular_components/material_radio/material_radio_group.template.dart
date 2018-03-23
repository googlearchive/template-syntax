// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_radio_group.dart';
export 'material_radio_group.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/material_radio/material_radio.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/material_radio/material_radio.template.dart' as _ref2;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_forms/angular_forms.template.dart' as _ref5;
import 'package:angular_components/material_radio/material_radio_group.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_radio_group.dart' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/core/zone/ng_zone.dart' as import9;

const List<dynamic> styles$MaterialRadioGroupComponent = const [import0.styles];

class ViewMaterialRadioGroupComponent0 extends AppView<import2.MaterialRadioGroupComponent> {
  static RenderComponentType _renderType;
  ViewMaterialRadioGroupComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import6.document.createElement('material-radio-group');
    createAttr(rootEl, 'role', 'radiogroup');
    rootEl.tabIndex = -1;
    _renderType ??= import7.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialRadioGroupComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialRadioGroupComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    project(parentRenderNode, 0);
    init(const [], null);
    return null;
  }
}

AppView<import2.MaterialRadioGroupComponent> viewFactory_MaterialRadioGroupComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialRadioGroupComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialRadioGroupComponentHost = const [];

class _ViewMaterialRadioGroupComponentHost0 extends AppView<dynamic> {
  ViewMaterialRadioGroupComponent0 _compView_0;
  import2.MaterialRadioGroupComponent _MaterialRadioGroupComponent_0_5;
  bool _query_MaterialRadioComponent_0_0_isDirty = true;
  _ViewMaterialRadioGroupComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialRadioGroupComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialRadioGroupComponent_0_5 = new import2.MaterialRadioGroupComponent(this.injectorGet(import9.NgZone, viewData.parentIndex), null);
    _MaterialRadioGroupComponent_0_5.list = [];
    _compView_0.create(_MaterialRadioGroupComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialRadioGroupComponent>(0, this, rootEl, _MaterialRadioGroupComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialRadioGroupComponent) && (0 == nodeIndex))) {
      return _MaterialRadioGroupComponent_0_5;
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
      _MaterialRadioGroupComponent_0_5.ngAfterContentInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioGroupComponent_0_5.ngOnDestroy();
  }
}

AppView viewFactory_MaterialRadioGroupComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialRadioGroupComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialRadioGroupComponent> MaterialRadioGroupComponentNgFactory = const ComponentFactory<import2.MaterialRadioGroupComponent>('material-radio-group', viewFactory_MaterialRadioGroupComponentHost0, _MaterialRadioGroupComponentMetadata);
const _MaterialRadioGroupComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialRadioGroupComponent, MaterialRadioGroupComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
