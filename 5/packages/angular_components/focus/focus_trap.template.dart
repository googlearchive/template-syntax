// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'focus_trap.dart';
export 'focus_trap.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/utils/browser/dom_iterator/dom_iterator.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/utils/browser/dom_iterator/dom_iterator.template.dart' as _ref2;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref3;
import 'package:angular_components/focus/focus_trap.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'focus_trap.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';

const List<dynamic> styles$FocusTrapComponent = const [import0.styles];

class ViewFocusTrapComponent0 extends AppView<import2.FocusTrapComponent> {
  final import3.QueryList _viewQuery_FocusContentWrapper_0 = new import3.QueryList();
  import4.DivElement _el_0;
  import4.DivElement _el_1;
  import2.FocusContentWrapper _FocusContentWrapper_1_4;
  import4.DivElement _el_2;
  static RenderComponentType _renderType;
  ViewFocusTrapComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import4.document.createElement('focus-trap');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$FocusTrapComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.FocusTrapComponent> build() {
    final import4.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import4.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.tabIndex = 0;
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_1, 'focusContentWrapper', '');
    createAttr(_el_1, 'style', 'outline: none');
    _el_1.tabIndex = -1;
    addShimC(_el_1);
    _FocusContentWrapper_1_4 = new import2.FocusContentWrapper(_el_1);
    project(_el_1, 0);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    _el_2.tabIndex = 0;
    addShimC(_el_2);
    _el_0.addEventListener('focus', eventHandler0(ctx.focusLast));
    _el_2.addEventListener('focus', eventHandler0(ctx.focusFirst));
    _viewQuery_FocusContentWrapper_0.reset([_FocusContentWrapper_1_4]);
    ctx.content = _viewQuery_FocusContentWrapper_0.first;
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.FocusContentWrapper) && (1 == nodeIndex))) {
      return _FocusContentWrapper_1_4;
    }
    return notFoundResult;
  }
}

AppView<import2.FocusTrapComponent> viewFactory_FocusTrapComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewFocusTrapComponent0(parentView, parentIndex);
}

const List<dynamic> styles$FocusTrapComponentHost = const [];

class _ViewFocusTrapComponentHost0 extends AppView<dynamic> {
  ViewFocusTrapComponent0 _compView_0;
  import2.FocusTrapComponent _FocusTrapComponent_0_4;
  final import3.QueryList _query_AutoFocusDirective_0_0 = new import3.QueryList();
  _ViewFocusTrapComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewFocusTrapComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _FocusTrapComponent_0_4 = new import2.FocusTrapComponent();
    _query_AutoFocusDirective_0_0.reset([]);
    _FocusTrapComponent_0_4.autoFocus = _query_AutoFocusDirective_0_0.first;
    _compView_0.create(_FocusTrapComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.FocusTrapComponent>(0, this, rootEl, _FocusTrapComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.FocusTrapComponent) && (0 == nodeIndex))) {
      return _FocusTrapComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _FocusTrapComponent_0_4.ngOnDestroy();
  }
}

AppView viewFactory_FocusTrapComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewFocusTrapComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.FocusTrapComponent> FocusTrapComponentNgFactory = const ComponentFactory<import2.FocusTrapComponent>('focus-trap', viewFactory_FocusTrapComponentHost0, _FocusTrapComponentMetadata);
const _FocusTrapComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(FocusTrapComponent, FocusTrapComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
