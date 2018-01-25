// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_progress.dart';
export 'material_progress.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/utils/browser/feature_detector/feature_detector.dart' show supportsAnimationApi;
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref1;

import 'package:angular_components/material_progress/material_progress.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_progress.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';

const List<dynamic> styles$MaterialProgressComponent = const [import0.styles];

class ViewMaterialProgressComponent0 extends AppView<import2.MaterialProgressComponent> {
  final import3.QueryList _viewQuery_primary_0 = new import3.QueryList();
  final import3.QueryList _viewQuery_secondary_1 = new import3.QueryList();
  import4.DivElement _el_0;
  import4.DivElement _el_1;
  import4.DivElement _el_2;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  bool _expr_4;
  var _expr_5;
  var _expr_6;
  static RenderComponentType _renderType;
  ViewMaterialProgressComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import4.document.createElement('material-progress');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialProgressComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialProgressComponent> build() {
    final import4.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import4.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'progress-container';
    createAttr(_el_0, 'role', 'progressbar');
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'secondary-progress';
    addShimC(_el_1);
    _el_2 = createDivAndAppend(doc, _el_0);
    _el_2.className = 'active-progress';
    addShimC(_el_2);
    _viewQuery_primary_0.reset([_el_2]);
    ctx.primary = _viewQuery_primary_0.first;
    _viewQuery_secondary_1.reset([_el_1]);
    ctx.secondary = _viewQuery_secondary_1.first;
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialProgressComponent _ctx = ctx;
    final currVal_0 = import8.interpolate0(_ctx.min);
    if (!identical(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-valuemin', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = import8.interpolate0(_ctx.max);
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_0, 'aria-valuemax', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.ariaValue;
    if (!identical(_expr_2, currVal_2)) {
      setAttr(_el_0, 'aria-valuenow', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.indeterminate;
    if (!identical(_expr_3, currVal_3)) {
      updateClass(_el_0, 'indeterminate', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.useFallbackAnimation;
    if (!identical(_expr_4, currVal_4)) {
      updateClass(_el_0, 'fallback', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.secondaryTransform;
    if (!identical(_expr_5, currVal_5)) {
      _el_1.style.setProperty('transform', currVal_5?.toString());
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.primaryTransform;
    if (!identical(_expr_6, currVal_6)) {
      _el_2.style.setProperty('transform', currVal_6?.toString());
      _expr_6 = currVal_6;
    }
  }
}

AppView<import2.MaterialProgressComponent> viewFactory_MaterialProgressComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialProgressComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialProgressComponentHost = const [];

class _ViewMaterialProgressComponentHost0 extends AppView<dynamic> {
  ViewMaterialProgressComponent0 _compView_0;
  import2.MaterialProgressComponent _MaterialProgressComponent_0_4;
  _ViewMaterialProgressComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialProgressComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialProgressComponent_0_4 = new import2.MaterialProgressComponent(null, _compView_0.ref, rootEl);
    _compView_0.create(_MaterialProgressComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialProgressComponent>(0, this, rootEl, _MaterialProgressComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialProgressComponent) && (0 == nodeIndex))) {
      return _MaterialProgressComponent_0_4;
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
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialProgressComponent_0_4.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialProgressComponent_0_4.ngOnDestroy();
  }
}

AppView viewFactory_MaterialProgressComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialProgressComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialProgressComponent> MaterialProgressComponentNgFactory = const ComponentFactory<import2.MaterialProgressComponent>('material-progress', viewFactory_MaterialProgressComponentHost0, _MaterialProgressComponentMetadata);
const _MaterialProgressComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ngRef.registerComponent(
    MaterialProgressComponent,
    MaterialProgressComponentNgFactory,
  );
}
