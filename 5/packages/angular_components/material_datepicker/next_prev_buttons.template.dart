// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'next_prev_buttons.dart';
export 'next_prev_buttons.dart';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:angular_components/glyph/glyph.dart';
import 'package:angular_components/src/material_datepicker/sequential.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/glyph/glyph.template.dart' as _ref1;
import 'package:angular_components/src/material_datepicker/sequential.template.dart' as _ref2;
import 'package:angular_components/src/material_datepicker/sequential.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_components/material_datepicker/next_prev_buttons.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'next_prev_buttons.dart' as import2;
import 'dart:html' as import3;
import '../glyph/glyph.template.dart' as import4;
import '../glyph/glyph.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';

const List<dynamic> styles$NextPrevComponent = const [import0.styles];

class ViewNextPrevComponent0 extends AppView<import2.NextPrevComponent> {
  import3.ButtonElement _el_0;
  import3.Element _el_1;
  import4.ViewGlyphComponent0 _compView_1;
  import5.GlyphComponent _GlyphComponent_1_5;
  import3.ButtonElement _el_2;
  import3.Element _el_3;
  import4.ViewGlyphComponent0 _compView_3;
  import5.GlyphComponent _GlyphComponent_3_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  bool _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  static RenderComponentType _renderType;
  ViewNextPrevComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('next-prev-buttons');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$NextPrevComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.NextPrevComponent> build() {
    final import2.NextPrevComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'button', parentRenderNode);
    _el_0.className = 'prev';
    addShimC(_el_0);
    _compView_1 = new import4.ViewGlyphComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'icon', 'navigate_before');
    addShimC(_el_1);
    _GlyphComponent_1_5 = new import5.GlyphComponent(_el_1);
    _compView_1.create(_GlyphComponent_1_5, []);
    _el_2 = createAndAppend(doc, 'button', parentRenderNode);
    _el_2.className = 'next';
    addShimC(_el_2);
    _compView_3 = new import4.ViewGlyphComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    _el_2.append(_el_3);
    createAttr(_el_3, 'icon', 'navigate_next');
    addShimC(_el_3);
    _GlyphComponent_3_5 = new import5.GlyphComponent(_el_3);
    _compView_3.create(_GlyphComponent_3_5, []);
    _el_0.addEventListener('click', eventHandler0(ctx.prev));
    _el_2.addEventListener('click', eventHandler0(ctx.next));
    init(const [], null);
    _rootEl.addEventListener('click', eventHandler1(_handle_click__));
    _rootEl.addEventListener('keypress', eventHandler1(_handle_keypress__));
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.NextPrevComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _GlyphComponent_1_5.icon = 'navigate_before';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _GlyphComponent_3_5.icon = 'navigate_next';
      changed = true;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    final currVal_0 = _ctx.isPrevDisabled;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'disabled', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate0(_ctx.isPrevDisabled);
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_0, 'aria-disabled', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = import9.interpolate0((_ctx.isPrevDisabled ? (0 - 1) : 0));
    if (!identical(_expr_2, currVal_2)) {
      setAttr(_el_0, 'tabindex', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.prevLabel;
    if (!identical(_expr_3, currVal_3)) {
      setAttr(_el_1, 'aria-label', currVal_3?.toString());
      _expr_3 = currVal_3;
    }
    final currVal_5 = _ctx.isNextDisabled;
    if (!identical(_expr_5, currVal_5)) {
      updateClass(_el_2, 'disabled', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = import9.interpolate0(_ctx.isNextDisabled);
    if (!identical(_expr_6, currVal_6)) {
      setAttr(_el_2, 'aria-disabled', currVal_6?.toString());
      _expr_6 = currVal_6;
    }
    final currVal_7 = import9.interpolate0((_ctx.isNextDisabled ? (0 - 1) : 0));
    if (!identical(_expr_7, currVal_7)) {
      setAttr(_el_2, 'tabindex', currVal_7?.toString());
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.nextLabel;
    if (!identical(_expr_8, currVal_8)) {
      setAttr(_el_3, 'aria-label', currVal_8?.toString());
      _expr_8 = currVal_8;
    }
    _compView_1.detectChanges();
    _compView_3.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
    _compView_3?.destroy();
  }

  bool _handle_click__($event) {
    return $event.stopPropagation();
  }

  bool _handle_keypress__($event) {
    return $event.stopPropagation();
  }
}

AppView<import2.NextPrevComponent> viewFactory_NextPrevComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewNextPrevComponent0(parentView, parentIndex);
}

const List<dynamic> styles$NextPrevComponentHost = const [];

class _ViewNextPrevComponentHost0 extends AppView<dynamic> {
  ViewNextPrevComponent0 _compView_0;
  import2.NextPrevComponent _NextPrevComponent_0_5;
  _ViewNextPrevComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewNextPrevComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _NextPrevComponent_0_5 = new import2.NextPrevComponent(_compView_0.ref);
    _compView_0.create(_NextPrevComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.NextPrevComponent>(0, this, rootEl, _NextPrevComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.NextPrevComponent) && (0 == nodeIndex))) {
      return _NextPrevComponent_0_5;
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
    _NextPrevComponent_0_5.ngOnDestroy();
  }
}

AppView viewFactory_NextPrevComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewNextPrevComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.NextPrevComponent> NextPrevComponentNgFactory = const ComponentFactory<import2.NextPrevComponent>('next-prev-buttons', viewFactory_NextPrevComponentHost0, _NextPrevComponentMetadata);
const _NextPrevComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(NextPrevComponent, NextPrevComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
