// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'sizer_component.dart';
export 'sizer_component.dart';
import 'dart:async';
import 'dart:math';
import 'package:angular/angular.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;

import 'package:angular/src/core/linker/app_view.dart';
import 'sizer_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';

const List<dynamic> styles$SizerComponent = const [];

class ViewSizerComponent0 extends AppView<import1.SizerComponent> {
  import2.DivElement _el_0;
  import2.ButtonElement _el_1;
  import2.ButtonElement _el_3;
  import2.Element _el_5;
  import2.Text _text_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewSizerComponent0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-sizer');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$SizerComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.SizerComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_1 = createAndAppend(doc, 'button', _el_0);
    import2.Text _text_2 = new import2.Text('-');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'button', _el_0);
    import2.Text _text_4 = new import2.Text('+');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'label', _el_0);
    _text_6 = new import2.Text('');
    _el_5.append(_text_6);
    _el_1.addEventListener('click', eventHandler0(ctx.dec));
    _el_3.addEventListener('click', eventHandler0(ctx.inc));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.SizerComponent _ctx = ctx;
    final currVal_0 = (_ctx.size <= _ctx.minSize);
    if (!identical(_expr_0, currVal_0)) {
      setProp(_el_1, 'disabled', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.size >= _ctx.maxSize);
    if (!identical(_expr_1, currVal_1)) {
      setProp(_el_3, 'disabled', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.size;
    if (!identical(_expr_2, currVal_2)) {
      _el_5.style.setProperty('font-size', ((currVal_2?.toString() == null) ? null : (currVal_2?.toString() + 'px')));
      _expr_2 = currVal_2;
    }
    final currVal_3 = import6.interpolate1('FontSize: ', _ctx.size, 'px');
    if (!identical(_expr_3, currVal_3)) {
      _text_6.text = currVal_3;
      _expr_3 = currVal_3;
    }
  }
}

AppView<import1.SizerComponent> viewFactory_SizerComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewSizerComponent0(parentView, parentIndex);
}

const List<dynamic> styles$SizerComponentHost = const [];

class _ViewSizerComponentHost0 extends AppView<dynamic> {
  ViewSizerComponent0 _compView_0;
  import1.SizerComponent _SizerComponent_0_4;
  _ViewSizerComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewSizerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SizerComponent_0_4 = new import1.SizerComponent();
    _compView_0.create(_SizerComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.SizerComponent>(0, this, rootEl, _SizerComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.SizerComponent) && (0 == nodeIndex))) {
      return _SizerComponent_0_4;
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

AppView viewFactory_SizerComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSizerComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.SizerComponent> SizerComponentNgFactory = const ComponentFactory<import1.SizerComponent>('my-sizer', viewFactory_SizerComponentHost0, _SizerComponentMetadata);
const _SizerComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ngRef.registerComponent(
    SizerComponent,
    SizerComponentNgFactory,
  );
}
