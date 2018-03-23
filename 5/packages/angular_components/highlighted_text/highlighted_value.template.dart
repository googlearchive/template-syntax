// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'highlighted_value.dart';
export 'highlighted_value.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/highlighted_text/highlighted_text.dart';
import 'package:angular_components/model/ui/has_renderer.dart';
import 'package:angular_components/model/ui/highlight_provider.dart';
import 'package:angular_components/model/ui/highlighted_text_model.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/highlighted_text/highlighted_text.template.dart' as _ref1;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref2;
import 'package:angular_components/model/ui/highlight_provider.template.dart' as _ref3;
import 'package:angular_components/model/ui/highlighted_text_model.template.dart' as _ref4;
import 'package:angular_components/highlighted_text/highlighted_text.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'highlighted_value.dart' as import2;
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
import '../model/ui/highlight_provider.dart' as import13;

const List<dynamic> styles$HighlightedValueComponent = const [import0.styles];

class ViewHighlightedValueComponent0 extends AppView<import2.HighlightedValueComponent> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewHighlightedValueComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import8.document.createElement('highlight-value');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$HighlightedValueComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.HighlightedValueComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = new TemplateRef(_appEl_0, viewFactory_HighlightedValueComponent1);
    _NgFor_0_9 = new import4.NgFor(_appEl_0, _TemplateRef_0_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.HighlightedValueComponent _ctx = ctx;
    final currVal_0 = _ctx.segments;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_0_9.ngDoCheck();
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import2.HighlightedValueComponent> viewFactory_HighlightedValueComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewHighlightedValueComponent0(parentView, parentIndex);
}

class _ViewHighlightedValueComponent1 extends AppView<import2.HighlightedValueComponent> {
  import8.Element _el_0;
  import8.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewHighlightedValueComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHighlightedValueComponent0._renderType;
  }
  @override
  ComponentRef<import2.HighlightedValueComponent> build() {
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

AppView<import2.HighlightedValueComponent> viewFactory_HighlightedValueComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHighlightedValueComponent1(parentView, parentIndex);
}

const List<dynamic> styles$HighlightedValueComponentHost = const [];

class _ViewHighlightedValueComponentHost0 extends AppView<dynamic> {
  ViewHighlightedValueComponent0 _compView_0;
  import2.HighlightedValueComponent _HighlightedValueComponent_0_5;
  _ViewHighlightedValueComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHighlightedValueComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HighlightedValueComponent_0_5 = new import2.HighlightedValueComponent(this.injectorGet(import13.HighlightProvider, viewData.parentIndex));
    _compView_0.create(_HighlightedValueComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.HighlightedValueComponent>(0, this, rootEl, _HighlightedValueComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.HighlightedValueComponent) && (0 == nodeIndex))) {
      return _HighlightedValueComponent_0_5;
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
  }
}

AppView viewFactory_HighlightedValueComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHighlightedValueComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.HighlightedValueComponent> HighlightedValueComponentNgFactory = const ComponentFactory<import2.HighlightedValueComponent>('highlight-value', viewFactory_HighlightedValueComponentHost0, _HighlightedValueComponentMetadata);
const _HighlightedValueComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HighlightedValueComponent, HighlightedValueComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
