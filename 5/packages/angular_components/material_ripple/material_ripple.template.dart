// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_ripple.dart';
export 'material_ripple.dart';
import 'dart:html';
import 'dart:math';
import 'package:angular/angular.dart';
import 'package:angular_components/utils/browser/events/events.dart';
import 'package:angular_components/utils/browser/feature_detector/feature_detector.dart' show supportsAnimationApi;
import 'package:angular_components/utils/color/material.dart' show rippleOpacity;
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref1;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref2;
import 'package:angular_components/utils/color/material.template.dart' as _ref3;

import 'package:angular_components/material_ripple/material_ripple.scss.css.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_ripple.dart' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/angular.dart';

const List<dynamic> styles$MaterialRippleComponent = const [import0.styles];

class ViewMaterialRippleComponent0 extends AppView<import2.MaterialRippleComponent> {
  static RenderComponentType _renderType;
  ViewMaterialRippleComponent0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import6.document.createElement('material-ripple');
    _renderType ??= import7.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$MaterialRippleComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialRippleComponent> build() {
    final import6.HtmlElement parentRenderNode = initViewRoot(rootEl);
    init(const [], null);
    return null;
  }
}

AppView<import2.MaterialRippleComponent> viewFactory_MaterialRippleComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialRippleComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialRippleComponentHost = const [];

class _ViewMaterialRippleComponentHost0 extends AppView<dynamic> {
  ViewMaterialRippleComponent0 _compView_0;
  import2.MaterialRippleComponent _MaterialRippleComponent_0_4;
  _ViewMaterialRippleComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialRippleComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialRippleComponent_0_4 = new import2.MaterialRippleComponent(rootEl);
    _compView_0.create(_MaterialRippleComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialRippleComponent>(0, this, rootEl, _MaterialRippleComponent_0_4);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRippleComponent_0_4.ngOnDestroy();
  }
}

AppView viewFactory_MaterialRippleComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialRippleComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialRippleComponent> MaterialRippleComponentNgFactory = const ComponentFactory<import2.MaterialRippleComponent>('material-ripple', viewFactory_MaterialRippleComponentHost0, _MaterialRippleComponentMetadata);
const _MaterialRippleComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ngRef.registerComponent(
    MaterialRippleComponent,
    MaterialRippleComponentNgFactory,
  );
}
