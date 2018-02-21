// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'tab_button.dart';
export 'tab_button.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/material_button/material_button_base.dart';
import 'package:angular_components/material_ripple/material_ripple.dart';
import 'package:angular_components/material_tab/tab_mixin.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_button/material_button_base.template.dart' as _ref1;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref2;
import 'package:angular_components/material_tab/tab_mixin.template.dart' as _ref3;
import 'package:angular_components/material_tab/tab_button.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'tab_button.dart' as import2;
import 'dart:html' as import3;
import '../material_ripple/material_ripple.template.dart' as import4;
import '../material_ripple/material_ripple.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';

const List<dynamic> styles$TabButtonComponent = const [import0.styles];

class ViewTabButtonComponent0 extends AppView<import2.TabButtonComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  import3.Element _el_2;
  import4.ViewMaterialRippleComponent0 _compView_2;
  import5.MaterialRippleComponent _MaterialRippleComponent_2_4;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  static RenderComponentType _renderType;
  ViewTabButtonComponent0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('tab-button');
    createAttr(rootEl, 'role', 'tab');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$TabButtonComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.TabButtonComponent> build() {
    final import2.TabButtonComponent _ctx = ctx;
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'content';
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    _compView_2 = new import4.ViewMaterialRippleComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    addShimC(_el_2);
    _MaterialRippleComponent_2_4 = new import5.MaterialRippleComponent(_el_2);
    _compView_2.create(_MaterialRippleComponent_2_4, []);
    init(const [], null);
    rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
    rootEl.addEventListener('mousedown', eventHandler1(_ctx.onMouseDown));
    rootEl.addEventListener('mouseup', eventHandler1(_ctx.onMouseUp));
    rootEl.addEventListener('focus', eventHandler1(_ctx.onFocus));
    rootEl.addEventListener('blur', eventHandler1(_ctx.onBlur));
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.TabButtonComponent _ctx = ctx;
    bool changed = false;
    changed = false;
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    final currVal_0 = import9.interpolate0(_ctx.label);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2?.destroy();
    _MaterialRippleComponent_2_4.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_1 = ctx.tabIndex;
    if (!identical(_expr_1, currVal_1)) {
      setProp(rootEl, 'tabIndex', currVal_1);
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
    final currVal_4 = ctx.visualFocus;
    if (!identical(_expr_4, currVal_4)) {
      updateElemClass(rootEl, 'focus', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = (ctx.isActive || ctx.isMouseDown);
    if (!identical(_expr_5, currVal_5)) {
      updateElemClass(rootEl, 'active', currVal_5);
      _expr_5 = currVal_5;
    }
  }
}

AppView<import2.TabButtonComponent> viewFactory_TabButtonComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewTabButtonComponent0(parentView, parentIndex);
}

const List<dynamic> styles$TabButtonComponentHost = const [];

class _ViewTabButtonComponentHost0 extends AppView<dynamic> {
  ViewTabButtonComponent0 _compView_0;
  import2.TabButtonComponent _TabButtonComponent_0_4;
  _ViewTabButtonComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewTabButtonComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TabButtonComponent_0_4 = new import2.TabButtonComponent(rootEl);
    _compView_0.create(_TabButtonComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.TabButtonComponent>(0, this, rootEl, _TabButtonComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.TabButtonComponent) && (0 == nodeIndex))) {
      return _TabButtonComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_TabButtonComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewTabButtonComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.TabButtonComponent> TabButtonComponentNgFactory = const ComponentFactory<import2.TabButtonComponent>('tab-button', viewFactory_TabButtonComponentHost0, _TabButtonComponentMetadata);
const _TabButtonComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(TabButtonComponent, TabButtonComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
