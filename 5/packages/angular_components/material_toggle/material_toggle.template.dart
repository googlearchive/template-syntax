// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_toggle.dart';
export 'material_toggle.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:meta/meta.dart';
import 'package:angular_components/utils/browser/events/events.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref1;
import 'package:angular_components/material_toggle/material_toggle.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_toggle.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';

const List<dynamic> styles$MaterialToggleComponent = const [import0.styles];

class ViewMaterialToggleComponent0 extends AppView<import2.MaterialToggleComponent> {
  bool _query_toggle_1_0_isDirty = true;
  import3.DivElement _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import3.DivElement _el_2;
  import3.DivElement _el_3;
  import3.DivElement _el_4;
  import3.DivElement _el_5;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_6;
  var _expr_7;
  static RenderComponentType _renderType;
  ViewMaterialToggleComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-toggle');
    rootEl.className = 'themeable';
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialToggleComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialToggleComponent> build() {
    final import2.MaterialToggleComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'material-toggle';
    createAttr(_el_0, 'role', 'button');
    addShimC(_el_0);
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialToggleComponent1);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    _el_2 = createDivAndAppend(doc, _el_0);
    _el_2.className = 'tgl-container';
    addShimC(_el_2);
    _el_3 = createDivAndAppend(doc, _el_2);
    createAttr(_el_3, 'animated', '');
    _el_3.className = 'tgl-bar';
    addShimC(_el_3);
    _el_4 = createDivAndAppend(doc, _el_2);
    _el_4.className = 'tgl-btn-container';
    addShimC(_el_4);
    _el_5 = createDivAndAppend(doc, _el_4);
    createAttr(_el_5, 'animated', '');
    _el_5.className = 'tgl-btn';
    addShimC(_el_5);
    project(_el_5, 0);
    _el_0.addEventListener('blur', eventHandler1(_handle_blur_0_0));
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_1));
    _el_0.addEventListener('mouseenter', eventHandler1(_handle_mouseenter_0_2));
    _el_0.addEventListener('mouseleave', eventHandler1(_handle_mouseleave_0_3));
    ctx.toggleElement = _el_0;
    init(const [], null);
    _rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialToggleComponent _ctx = ctx;
    _NgIf_1_9.ngIf = _ctx.hasLabel;
    _appEl_1.detectChangesInNestedViews();
    final currVal_0 = _ctx.checked;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'checked', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disabled;
    if (!identical(_expr_1, currVal_1)) {
      updateClass(_el_0, 'disabled', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.disabled ? '-1' : '0');
    if (!identical(_expr_2, currVal_2)) {
      setAttr(_el_0, 'tabindex', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = import9.interpolate0(_ctx.disabled);
    if (!identical(_expr_3, currVal_3)) {
      setAttr(_el_0, 'aria-disabled', currVal_3?.toString());
      _expr_3 = currVal_3;
    }
    final currVal_4 = (_ctx.ariaLabel ?? '');
    if (!identical(_expr_4, currVal_4)) {
      setAttr(_el_0, 'aria-label', currVal_4?.toString());
      _expr_4 = currVal_4;
    }
    final currVal_6 = import9.interpolate0(_ctx.shadow_z);
    if (!identical(_expr_6, currVal_6)) {
      setAttr(_el_3, 'elevation', currVal_6?.toString());
      _expr_6 = currVal_6;
    }
    final currVal_7 = import9.interpolate0(_ctx.shadow_z);
    if (!identical(_expr_7, currVal_7)) {
      setAttr(_el_5, 'elevation', currVal_7?.toString());
      _expr_7 = currVal_7;
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }

  void _handle_blur_0_0($event) {
    ctx.hasFocus = false;
  }

  void _handle_focus_0_1($event) {
    ctx.hasFocus = true;
  }

  void _handle_mouseenter_0_2($event) {
    ctx.isHovered = true;
  }

  void _handle_mouseleave_0_3($event) {
    ctx.isHovered = false;
  }
}

AppView<import2.MaterialToggleComponent> viewFactory_MaterialToggleComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialToggleComponent0(parentView, parentIndex);
}

class _ViewMaterialToggleComponent1 extends AppView<import2.MaterialToggleComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewMaterialToggleComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialToggleComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialToggleComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'tgl-lbl';
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialToggleComponent _ctx = ctx;
    final currVal_0 = (_ctx.label ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialToggleComponent> viewFactory_MaterialToggleComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialToggleComponent1(parentView, parentIndex);
}

const List<dynamic> styles$MaterialToggleComponentHost = const [];

class _ViewMaterialToggleComponentHost0 extends AppView<dynamic> {
  ViewMaterialToggleComponent0 _compView_0;
  import2.MaterialToggleComponent _MaterialToggleComponent_0_5;
  _ViewMaterialToggleComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialToggleComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialToggleComponent_0_5 = new import2.MaterialToggleComponent();
    _compView_0.create(_MaterialToggleComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialToggleComponent>(0, this, rootEl, _MaterialToggleComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialToggleComponent_0_5.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_MaterialToggleComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialToggleComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialToggleComponent> MaterialToggleComponentNgFactory = const ComponentFactory<import2.MaterialToggleComponent>('material-toggle', viewFactory_MaterialToggleComponentHost0, _MaterialToggleComponentMetadata);
const _MaterialToggleComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialToggleComponent, MaterialToggleComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
