// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'reorder_list.dart';
export 'reorder_list.dart';
import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'package:angular/angular.dart';
import 'package:quiver/iterables.dart' show range;
import 'package:angular_components/reorder_list/reorder_events.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular_components/utils/keyboard/keyboard.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/reorder_list/reorder_events.template.dart' as _ref1;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref2;
import 'package:angular_components/utils/keyboard/keyboard.template.dart' as _ref3;
import 'reorder_events.template.dart' as _ref4;
import 'package:angular_components/reorder_list/reorder_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'reorder_list.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/element_ref.dart';
import 'package:angular/src/core/zone/ng_zone.dart' as import11;

const List<dynamic> styles$ReorderListComponent = const [import0.styles];

class ViewReorderListComponent0 extends AppView<import2.ReorderListComponent> {
  final import3.QueryList _viewQuery_placeholder_0 = new import3.QueryList();
  import4.DivElement _el_0;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  static RenderComponentType _renderType;
  ViewReorderListComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('reorder-list');
    createAttr(rootEl, 'role', 'list');
    rootEl.className = 'themeable';
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$ReorderListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.ReorderListComponent> build() {
    final import4.HtmlElement parentRenderNode = initViewRoot(rootEl);
    project(parentRenderNode, 0);
    var doc = import4.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'placeholder';
    addShimC(_el_0);
    project(_el_0, 1);
    _viewQuery_placeholder_0.reset([new ElementRef(_el_0)]);
    ctx.placeholder = _viewQuery_placeholder_0.first;
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ReorderListComponent _ctx = ctx;
    final bool currVal_0 = !_ctx.showPlaceholder;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'hidden', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_1 = ctx.verticalItems;
    if (!identical(_expr_1, currVal_1)) {
      updateElemClass(rootEl, 'vertical', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = ctx.multiSelect;
    if (!identical(_expr_2, currVal_2)) {
      updateElemClass(rootEl, 'multiselect', currVal_2);
      _expr_2 = currVal_2;
    }
  }
}

AppView<import2.ReorderListComponent> viewFactory_ReorderListComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewReorderListComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ReorderListComponentHost = const [];

class _ViewReorderListComponentHost0 extends AppView<dynamic> {
  ViewReorderListComponent0 _compView_0;
  import2.ReorderListComponent _ReorderListComponent_0_4;
  final import3.QueryList _query_ReorderItemDirective_0_0 = new import3.QueryList();
  _ViewReorderListComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewReorderListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ReorderListComponent_0_4 = new import2.ReorderListComponent(this.injectorGet(import11.NgZone, viewData.parentIndex));
    _compView_0.create(_ReorderListComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.ReorderListComponent>(0, this, rootEl, _ReorderListComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.ReorderListComponent) && (0 == nodeIndex))) {
      return _ReorderListComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (_query_ReorderItemDirective_0_0.dirty) {
      _query_ReorderItemDirective_0_0.reset([]);
      _ReorderListComponent_0_4.items = _query_ReorderItemDirective_0_0;
      _query_ReorderItemDirective_0_0.notifyOnChanges();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _ReorderListComponent_0_4.ngOnDestroy();
  }
}

AppView viewFactory_ReorderListComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewReorderListComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.ReorderListComponent> ReorderListComponentNgFactory = const ComponentFactory<import2.ReorderListComponent>('reorder-list', viewFactory_ReorderListComponentHost0, _ReorderListComponentMetadata);
const _ReorderListComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ReorderListComponent, ReorderListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
