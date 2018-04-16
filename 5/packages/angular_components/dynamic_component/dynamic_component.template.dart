// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'dynamic_component.dart';
export 'dynamic_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/model/ui/has_renderer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dynamic_component.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import10;

const List<dynamic> styles$DynamicComponent = const [];

class ViewDynamicComponent0 extends AppView<import1.DynamicComponent> {
  bool _query_marker_1_0_isDirty = true;
  ViewContainer _appEl_0;
  TemplateRef _TemplateRef_0_8;
  static RenderComponentType _renderType;
  ViewDynamicComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import7.document.createElement('dynamic-component');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$DynamicComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.DynamicComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    _TemplateRef_0_8 = new TemplateRef(_appEl_0, viewFactory_DynamicComponent1);
    ctx.viewContainerRef = _appEl_0;
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import1.DynamicComponent> viewFactory_DynamicComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewDynamicComponent0(parentView, parentIndex);
}

class _ViewDynamicComponent1 extends AppView<import1.DynamicComponent> {
  _ViewDynamicComponent1(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDynamicComponent0._renderType;
  }
  @override
  ComponentRef<import1.DynamicComponent> build() {
    init(const [], null);
    return null;
  }
}

AppView<import1.DynamicComponent> viewFactory_DynamicComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDynamicComponent1(parentView, parentIndex);
}

const List<dynamic> styles$DynamicComponentHost = const [];

class _ViewDynamicComponentHost0 extends AppView<dynamic> {
  ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import1.DynamicComponent _DynamicComponent_0_8;
  _ViewDynamicComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewDynamicComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _appEl_0 = new ViewContainer(0, null, this, rootEl);
    _DynamicComponent_0_8 = new import1.DynamicComponent(this.injectorGet(import10.SlowComponentLoader, viewData.parentIndex), _compView_0.ref, _appEl_0);
    _compView_0.create(_DynamicComponent_0_8, projectableNodes);
    init0(_appEl_0);
    return new ComponentRef<import1.DynamicComponent>(0, this, rootEl, _DynamicComponent_0_8);
  }

  @override
  void detectChangesInternal() {
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _compView_0?.destroy();
    _DynamicComponent_0_8.ngOnDestroy();
  }
}

AppView viewFactory_DynamicComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDynamicComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.DynamicComponent> DynamicComponentNgFactory = const ComponentFactory<import1.DynamicComponent>('dynamic-component', viewFactory_DynamicComponentHost0, _DynamicComponentMetadata);
const _DynamicComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DynamicComponent, DynamicComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
