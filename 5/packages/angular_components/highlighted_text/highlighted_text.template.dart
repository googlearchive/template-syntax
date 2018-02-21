// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'highlighted_text.dart';
export 'highlighted_text.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/model/ui/highlighted_text_model.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/highlighted_text_model.template.dart' as _ref1;
import 'package:angular_components/highlighted_text/highlighted_text.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'highlighted_text.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../model/ui/highlighted_text_model.dart' as import12;

const List<dynamic> styles$HighlightedTextComponent = const [import0.styles];

class ViewHighlightedTextComponent0 extends AppView<import2.HighlightedTextComponent> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_7;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewHighlightedTextComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import8.document.createElement('highlighted-text');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$HighlightedTextComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.HighlightedTextComponent> build() {
    final import8.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_HighlightedTextComponent1);
    _NgFor_0_7 = new import4.NgFor(_appEl_0, _TemplateRef_0_6);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.HighlightedTextComponent _ctx = ctx;
    final currVal_0 = _ctx.segments;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_0_7.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_0_7.ngDoCheck();
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import2.HighlightedTextComponent> viewFactory_HighlightedTextComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewHighlightedTextComponent0(parentView, parentIndex);
}

class _ViewHighlightedTextComponent1 extends AppView<import2.HighlightedTextComponent> {
  import8.Element _el_0;
  import8.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewHighlightedTextComponent1(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHighlightedTextComponent0._renderType;
  }
  @override
  ComponentRef<import2.HighlightedTextComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'text-segment';
    addShimE(_el_0);
    _text_1 = new import8.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import12.HighlightedTextSegment local_segment = locals['\$implicit'];
    final currVal_0 = local_segment.isHighlighted;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'segment-highlight', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate0(local_segment.text);
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.HighlightedTextComponent> viewFactory_HighlightedTextComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHighlightedTextComponent1(parentView, parentIndex);
}

const List<dynamic> styles$HighlightedTextComponentHost = const [];

class _ViewHighlightedTextComponentHost0 extends AppView<dynamic> {
  ViewHighlightedTextComponent0 _compView_0;
  import2.HighlightedTextComponent _HighlightedTextComponent_0_4;
  _ViewHighlightedTextComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHighlightedTextComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HighlightedTextComponent_0_4 = new import2.HighlightedTextComponent();
    _compView_0.create(_HighlightedTextComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.HighlightedTextComponent>(0, this, rootEl, _HighlightedTextComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.HighlightedTextComponent) && (0 == nodeIndex))) {
      return _HighlightedTextComponent_0_4;
    }
    return notFoundResult;
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
  }
}

AppView viewFactory_HighlightedTextComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHighlightedTextComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.HighlightedTextComponent> HighlightedTextComponentNgFactory = const ComponentFactory<import2.HighlightedTextComponent>('highlighted-text', viewFactory_HighlightedTextComponentHost0, _HighlightedTextComponentMetadata);
const _HighlightedTextComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HighlightedTextComponent, HighlightedTextComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
