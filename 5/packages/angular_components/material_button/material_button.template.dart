// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_button.dart';
export 'material_button.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/material_ripple/material_ripple.dart';
import 'package:angular_components/theme/dark_theme.dart';
import 'material_button_base.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_button_base.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref2;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref3;
import 'package:angular_components/theme/dark_theme.template.dart' as _ref4;
import 'package:angular_components/material_button/material_button.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_button.dart' as import2;
import 'dart:html' as import3;
import '../material_ripple/material_ripple.template.dart' as import4;
import '../material_ripple/material_ripple.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import '../theme/dark_theme.dart' as import11;
import 'package:angular/src/core/di/opaque_token.dart' as import12;
import '../button_decorator/button_decorator.dart' as import13;

const List<dynamic> styles$MaterialButtonComponent = const [import0.styles];

class ViewMaterialButtonComponent0 extends AppView<import2.MaterialButtonComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import4.ViewMaterialRippleComponent0 _compView_1;
  import5.MaterialRippleComponent _MaterialRippleComponent_1_5;
  var _expr_0;
  var _expr_1;
  bool _expr_2;
  var _expr_3;
  var _expr_4;
  bool _expr_5;
  var _expr_6;
  static RenderComponentType _renderType;
  ViewMaterialButtonComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-button');
    createAttr(rootEl, 'role', 'button');
    createAttr(rootEl, 'animated', 'true');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialButtonComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialButtonComponent> build() {
    final import2.MaterialButtonComponent _ctx = ctx;
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
    final currVal_1 = ctx.disabledStr;
    if (!identical(_expr_1, currVal_1)) {
      setAttr(rootEl, 'aria-disabled', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = ctx.disabled;
    if (!identical(_expr_2, currVal_2)) {
      updateElemClass(rootEl, 'is-disabled', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = (ctx.disabled ? '' : null);
    if (!identical(_expr_3, currVal_3)) {
      setAttr(rootEl, 'disabled', currVal_3?.toString());
      _expr_3 = currVal_3;
    }
    final currVal_4 = (ctx.raised ? '' : null);
    if (!identical(_expr_4, currVal_4)) {
      setAttr(rootEl, 'raised', currVal_4?.toString());
      _expr_4 = currVal_4;
    }
    final currVal_5 = ctx.visualFocus;
    if (!identical(_expr_5, currVal_5)) {
      updateElemClass(rootEl, 'is-focused', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = ctx.zElevation;
    if (!identical(_expr_6, currVal_6)) {
      setAttr(rootEl, 'elevation', currVal_6?.toString());
      _expr_6 = currVal_6;
    }
  }
}

AppView<import2.MaterialButtonComponent> viewFactory_MaterialButtonComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialButtonComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialButtonComponentHost = const [];

class _ViewMaterialButtonComponentHost0 extends AppView<dynamic> {
  ViewMaterialButtonComponent0 _compView_0;
  import11.AcxDarkTheme _AcxDarkTheme_0_5;
  import2.MaterialButtonComponent _MaterialButtonComponent_0_6;
  _ViewMaterialButtonComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialButtonComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AcxDarkTheme_0_5 = new import11.AcxDarkTheme(this.injectorGet(const import12.OpaqueToken('acxDarkTheme'), viewData.parentIndex, null));
    _MaterialButtonComponent_0_6 = new import2.MaterialButtonComponent(rootEl, _AcxDarkTheme_0_5, _compView_0.ref);
    _compView_0.create(_MaterialButtonComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialButtonComponent>(0, this, rootEl, _MaterialButtonComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import11.AcxDarkTheme) && (0 == nodeIndex))) {
      return _AcxDarkTheme_0_5;
    }
    if (((identical(token, import2.MaterialButtonComponent) || identical(token, import13.ButtonDirective)) && (0 == nodeIndex))) {
      return _MaterialButtonComponent_0_6;
    }
    return notFoundResult;
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

AppView viewFactory_MaterialButtonComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialButtonComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialButtonComponent> MaterialButtonComponentNgFactory = const ComponentFactory<import2.MaterialButtonComponent>('material-button', viewFactory_MaterialButtonComponentHost0, _MaterialButtonComponentMetadata);
const _MaterialButtonComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialButtonComponent, MaterialButtonComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
