// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_slider.dart';
export 'material_slider.dart';
import 'dart:async';
import 'dart:html';
import 'dart:math' as math;
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:quiver/check.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref1;
import 'package:angular_components/material_slider/material_slider.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_slider.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/angular.dart';
import '../utils/browser/dom_service/dom_service.dart' as import9;

const List<dynamic> styles$MaterialSliderComponent = const [import0.styles];

class ViewMaterialSliderComponent0 extends AppView<import2.MaterialSliderComponent> {
  bool _query_container_1_0_isDirty = true;
  import3.DivElement _el_0;
  import3.DivElement _el_1;
  import3.DivElement _el_2;
  import3.DivElement _el_3;
  import3.DivElement _el_4;
  import3.DivElement _el_5;
  import3.DivElement _el_6;
  import3.DivElement _el_7;
  import3.DivElement _el_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  bool _expr_6;
  var _expr_7;
  static RenderComponentType _renderType;
  ViewMaterialSliderComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-slider');
    _renderType ??= import7.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialSliderComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialSliderComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'container';
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'track-container left-track-container';
    addShimC(_el_1);
    _el_2 = createDivAndAppend(doc, _el_1);
    _el_2.className = 'track';
    addShimC(_el_2);
    _el_3 = createDivAndAppend(doc, _el_0);
    _el_3.className = 'knob';
    createAttr(_el_3, 'role', 'slider');
    _el_3.tabIndex = 1;
    addShimC(_el_3);
    _el_4 = createDivAndAppend(doc, _el_3);
    _el_4.className = 'knob-real';
    addShimC(_el_4);
    _el_5 = createDivAndAppend(doc, _el_3);
    _el_5.className = 'knob-hover-shadow';
    addShimC(_el_5);
    _el_6 = createDivAndAppend(doc, _el_3);
    _el_6.className = 'knob-drag-shadow';
    addShimC(_el_6);
    _el_7 = createDivAndAppend(doc, _el_0);
    _el_7.className = 'track-container right-track-container';
    addShimC(_el_7);
    _el_8 = createDivAndAppend(doc, _el_7);
    _el_8.className = 'track';
    addShimC(_el_8);
    _el_1.addEventListener('mousedown', eventHandler1(ctx.mouseDown));
    _el_3.addEventListener('keydown', eventHandler1(ctx.knobKeyDown));
    _el_3.addEventListener('mousedown', eventHandler1(ctx.mouseDown));
    _el_7.addEventListener('mousedown', eventHandler1(ctx.mouseDown));
    ctx.container = _el_0;
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialSliderComponent _ctx = ctx;
    final currVal_0 = _ctx.progressPercent;
    if (!identical(_expr_0, currVal_0)) {
      _el_1.style.setProperty('width', ((currVal_0?.toString() == null) ? null : (currVal_0?.toString() + '%')));
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.isRtl ? 0 : (0 - 8));
    if (!identical(_expr_1, currVal_1)) {
      _el_3.style.setProperty('margin-left', ((currVal_1?.toString() == null) ? null : (currVal_1?.toString() + 'px')));
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.isRtl ? (0 - 8) : 0);
    if (!identical(_expr_2, currVal_2)) {
      _el_3.style.setProperty('margin-right', ((currVal_2?.toString() == null) ? null : (currVal_2?.toString() + 'px')));
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.min;
    if (!identical(_expr_3, currVal_3)) {
      setAttr(_el_3, 'aria-valuemin', currVal_3?.toString());
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.max;
    if (!identical(_expr_4, currVal_4)) {
      setAttr(_el_3, 'aria-valuemax', currVal_4?.toString());
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.value;
    if (!identical(_expr_5, currVal_5)) {
      setAttr(_el_3, 'aria-valuenow', currVal_5?.toString());
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.isDragging;
    if (!identical(_expr_6, currVal_6)) {
      updateClass(_el_6, 'is-dragging', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = import7.interpolate1('calc(', (100 - _ctx.progressPercent), '% + 8px)');
    if (!identical(_expr_7, currVal_7)) {
      _el_7.style.setProperty('width', currVal_7?.toString());
      _expr_7 = currVal_7;
    }
  }
}

AppView<import2.MaterialSliderComponent> viewFactory_MaterialSliderComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialSliderComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialSliderComponentHost = const [];

class _ViewMaterialSliderComponentHost0 extends AppView<dynamic> {
  ViewMaterialSliderComponent0 _compView_0;
  import2.MaterialSliderComponent _MaterialSliderComponent_0_5;
  _ViewMaterialSliderComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialSliderComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialSliderComponent_0_5 = new import2.MaterialSliderComponent(_compView_0.ref, this.injectorGet(import9.DomService, viewData.parentIndex));
    _compView_0.create(_MaterialSliderComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialSliderComponent>(0, this, rootEl, _MaterialSliderComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialSliderComponent) && (0 == nodeIndex))) {
      return _MaterialSliderComponent_0_5;
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

AppView viewFactory_MaterialSliderComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialSliderComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialSliderComponent> MaterialSliderComponentNgFactory = const ComponentFactory<import2.MaterialSliderComponent>('material-slider', viewFactory_MaterialSliderComponentHost0, _MaterialSliderComponentMetadata);
const _MaterialSliderComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSliderComponent, MaterialSliderComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
