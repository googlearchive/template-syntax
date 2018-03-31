// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_fab.dart';
export 'material_fab.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/material_ripple/material_ripple.dart';
import 'material_button_base.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_button_base.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref2;
import 'package:angular_components/material_button/material_fab.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_fab.dart' as import2;
import 'dart:html' as import3;
import '../material_ripple/material_ripple.template.dart' as import4;
import '../material_ripple/material_ripple.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';

const List<dynamic> styles$MaterialFabComponent = const [import0.styles];

class ViewMaterialFabComponent0 extends AppView<import2.MaterialFabComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import4.ViewMaterialRippleComponent0 _compView_1;
  import5.MaterialRippleComponent _MaterialRippleComponent_1_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  var _expr_4;
  var _expr_5;
  bool _expr_6;
  bool _expr_7;
  static RenderComponentType _renderType;
  ViewMaterialFabComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-fab');
    createAttr(rootEl, 'animated', 'true');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialFabComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialFabComponent> build() {
    final import2.MaterialFabComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'content';
    addShimC(_el_0);
    project(_el_0, 0);
    _compView_1 = new import4.ViewMaterialRippleComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    addShimC(_el_1);
    _MaterialRippleComponent_1_5 = new import5.MaterialRippleComponent(_el_1);
    _compView_1.create(_MaterialRippleComponent_1_5, []);
    _el_1.addEventListener('mousedown', eventHandler1(ctx.onMouseDown));
    _el_1.addEventListener('mouseup', eventHandler1(ctx.onMouseUp));
    init(const [], null);
    _rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
    _rootEl.addEventListener('mousedown', eventHandler1(_ctx.onMouseDown));
    _rootEl.addEventListener('mouseup', eventHandler1(_ctx.onMouseUp));
    _rootEl.addEventListener('focus', eventHandler1(_ctx.onFocus));
    _rootEl.addEventListener('blur', eventHandler1(_ctx.onBlur));
    return null;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    changed = false;
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
    _MaterialRippleComponent_1_5.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_0 = ctx.tabIndex;
    if (!identical(_expr_0, currVal_0)) {
      setProp(rootEl, 'tabIndex', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = ctx.role;
    if (!identical(_expr_1, currVal_1)) {
      setAttr(rootEl, 'role', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = ctx.disabledStr;
    if (!identical(_expr_2, currVal_2)) {
      setAttr(rootEl, 'aria-disabled', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = ctx.disabled;
    if (!identical(_expr_3, currVal_3)) {
      updateElemClass(rootEl, 'is-disabled', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = (ctx.disabled ? '' : null);
    if (!identical(_expr_4, currVal_4)) {
      setAttr(rootEl, 'disabled', currVal_4?.toString());
      _expr_4 = currVal_4;
    }
    final currVal_5 = (ctx.raised ? '' : null);
    if (!identical(_expr_5, currVal_5)) {
      setAttr(rootEl, 'raised', currVal_5?.toString());
      _expr_5 = currVal_5;
    }
    final currVal_6 = ctx.visualFocus;
    if (!identical(_expr_6, currVal_6)) {
      updateElemClass(rootEl, 'is-focused', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = ctx.isPressed;
    if (!identical(_expr_7, currVal_7)) {
      updateElemClass(rootEl, 'is-pressed', currVal_7);
      _expr_7 = currVal_7;
    }
  }
}

AppView<import2.MaterialFabComponent> viewFactory_MaterialFabComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialFabComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialFabComponentHost = const [];

class _ViewMaterialFabComponentHost0 extends AppView<dynamic> {
  ViewMaterialFabComponent0 _compView_0;
  import2.MaterialFabComponent _MaterialFabComponent_0_5;
  _ViewMaterialFabComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialFabComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialFabComponent_0_5 = new import2.MaterialFabComponent(rootEl, _compView_0.ref);
    _compView_0.create(_MaterialFabComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialFabComponent>(0, this, rootEl, _MaterialFabComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_MaterialFabComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialFabComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialFabComponent> MaterialFabComponentNgFactory = const ComponentFactory<import2.MaterialFabComponent>('material-fab', viewFactory_MaterialFabComponentHost0, _MaterialFabComponentMetadata);
const _MaterialFabComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialFabComponent, MaterialFabComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
