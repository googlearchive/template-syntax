// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_dialog.dart';
export 'material_dialog.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/focus/focus_trap.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref1;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref2;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_components/material_dialog/material_dialog.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_dialog.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import '../focus/focus_trap.template.dart' as import5;
import '../focus/focus_trap.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../utils/browser/dom_service/dom_service.dart' as import15;
import '../laminate/components/modal/modal.dart' as import16;

const List<dynamic> styles$MaterialDialogComponent = const [import0.styles];

class ViewMaterialDialogComponent0 extends AppView<import2.MaterialDialogComponent> {
  final import3.QueryList _viewQuery_main_0 = new import3.QueryList();
  import4.Element _el_0;
  import5.ViewFocusTrapComponent0 _compView_0;
  import6.FocusTrapComponent _FocusTrapComponent_0_4;
  final import3.QueryList _query_AutoFocusDirective_0_0 = new import3.QueryList();
  import4.DivElement _el_1;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_7;
  import4.DivElement _el_3;
  import4.Text _text_4;
  import4.Element _el_5;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_7;
  bool _expr_1;
  var _expr_2;
  bool _expr_3;
  bool _expr_4;
  static RenderComponentType _renderType;
  ViewMaterialDialogComponent0(AppView<dynamic> parentView, num parentIndex) : super(import10.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import4.document.createElement('material-dialog');
    _renderType ??= import12.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialDialogComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialDialogComponent> build() {
    final import4.HtmlElement parentRenderNode = initViewRoot(rootEl);
    _compView_0 = new import5.ViewFocusTrapComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _FocusTrapComponent_0_4 = new import6.FocusTrapComponent();
    var doc = import4.document;
    _el_1 = doc.createElement('div');
    _el_1.className = 'wrapper';
    addShimC(_el_1);
    var _anchor_2 = ngAnchor.clone(false);
    _el_1.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_MaterialDialogComponent1);
    _NgIf_2_7 = new NgIf(_appEl_2, _TemplateRef_2_6);
    _el_3 = createDivAndAppend(doc, _el_1);
    _el_3.className = 'error';
    addShimC(_el_3);
    _text_4 = new import4.Text('');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'main', _el_1);
    addShimE(_el_5);
    project(_el_5, 1);
    var _anchor_6 = ngAnchor.clone(false);
    _el_1.append(_anchor_6);
    _appEl_6 = new ViewContainer(6, 1, this, _anchor_6);
    TemplateRef _TemplateRef_6_6 = new TemplateRef(_appEl_6, viewFactory_MaterialDialogComponent2);
    _NgIf_6_7 = new NgIf(_appEl_6, _TemplateRef_6_6);
    _query_AutoFocusDirective_0_0.reset([]);
    _FocusTrapComponent_0_4.autoFocus = _query_AutoFocusDirective_0_0.first;
    _compView_0.create(_FocusTrapComponent_0_4, [
      [_el_1]
    ]);
    _el_5.addEventListener('scroll', eventHandler0(ctx.onScroll));
    _viewQuery_main_0.reset([_el_5]);
    ctx.main = _viewQuery_main_0.first;
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import6.FocusTrapComponent) && ((0 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _FocusTrapComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDialogComponent _ctx = ctx;
    _NgIf_2_7.ngIf = _ctx.shouldShowHeader;
    _NgIf_6_7.ngIf = _ctx.shouldShowFooter;
    _appEl_2.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    final currVal_1 = (_ctx.error != null);
    if (!identical(_expr_1, currVal_1)) {
      updateClass(_el_3, 'expanded', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.error ?? '');
    if (!identical(_expr_2, currVal_2)) {
      _text_4.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.shouldShowTopScrollStroke;
    if (!identical(_expr_3, currVal_3)) {
      updateClass(_el_5, 'top-scroll-stroke', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.shouldShowBottomScrollStroke;
    if (!identical(_expr_4, currVal_4)) {
      updateClass(_el_5, 'bottom-scroll-stroke', currVal_4);
      _expr_4 = currVal_4;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
    _appEl_6?.destroyNestedViews();
    _compView_0?.destroy();
    _FocusTrapComponent_0_4.ngOnDestroy();
  }
}

AppView<import2.MaterialDialogComponent> viewFactory_MaterialDialogComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialDialogComponent0(parentView, parentIndex);
}

class _ViewMaterialDialogComponent1 extends AppView<import2.MaterialDialogComponent> {
  import4.Element _el_0;
  _ViewMaterialDialogComponent1(AppView<dynamic> parentView, num parentIndex) : super(import10.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDialogComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDialogComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('header');
    addShimE(_el_0);
    project(_el_0, 0);
    init0(_el_0);
    return null;
  }
}

AppView<import2.MaterialDialogComponent> viewFactory_MaterialDialogComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialDialogComponent1(parentView, parentIndex);
}

class _ViewMaterialDialogComponent2 extends AppView<import2.MaterialDialogComponent> {
  import4.Element _el_0;
  _ViewMaterialDialogComponent2(AppView<dynamic> parentView, num parentIndex) : super(import10.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDialogComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDialogComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('footer');
    addShimE(_el_0);
    project(_el_0, 2);
    init0(_el_0);
    return null;
  }
}

AppView<import2.MaterialDialogComponent> viewFactory_MaterialDialogComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialDialogComponent2(parentView, parentIndex);
}

const List<dynamic> styles$MaterialDialogComponentHost = const [];

class _ViewMaterialDialogComponentHost0 extends AppView<dynamic> {
  ViewMaterialDialogComponent0 _compView_0;
  import2.MaterialDialogComponent _MaterialDialogComponent_0_4;
  _ViewMaterialDialogComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import10.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialDialogComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialDialogComponent_0_4 = new import2.MaterialDialogComponent(this.injectorGet(import15.DomService, viewData.parentIndex), _compView_0.ref, this.injectorGet(import16.ModalComponent, viewData.parentIndex, null));
    _compView_0.create(_MaterialDialogComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialDialogComponent>(0, this, rootEl, _MaterialDialogComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialDialogComponent) && (0 == nodeIndex))) {
      return _MaterialDialogComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _MaterialDialogComponent_0_4.ngAfterContentChecked();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialDialogComponent_0_4.ngOnDestroy();
  }
}

AppView viewFactory_MaterialDialogComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialDialogComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialDialogComponent> MaterialDialogComponentNgFactory = const ComponentFactory<import2.MaterialDialogComponent>('material-dialog', viewFactory_MaterialDialogComponentHost0, _MaterialDialogComponentMetadata);
const _MaterialDialogComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDialogComponent, MaterialDialogComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
