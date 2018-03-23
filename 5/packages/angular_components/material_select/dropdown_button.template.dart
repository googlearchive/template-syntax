// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'dropdown_button.dart';
export 'dropdown_button.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/glyph/glyph.dart';
import 'package:angular_components/mixins/button_wrapper.dart';
import 'package:angular_components/mixins/focusable_mixin.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref2;
import 'package:angular_components/glyph/glyph.template.dart' as _ref3;
import 'package:angular_components/mixins/button_wrapper.template.dart' as _ref4;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref5;
import 'package:angular_components/button_decorator/button_decorator.scss.css.shim.dart' as import0;
import 'package:angular_components/material_select/dropdown_button.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dropdown_button.dart' as import3;
import 'dart:html' as import4;
import '../button_decorator/button_decorator.template.dart' as import5;
import '../focus/keyboard_only_focus_indicator.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;
import 'package:angular/angular.dart';
import '../button_decorator/button_decorator.dart' as import14;
import '../utils/browser/dom_service/dom_service.dart' as import15;
import 'package:angular/src/core/linker/template_ref.dart';
import '../glyph/glyph.template.dart' as import17;
import '../glyph/glyph.dart' as import18;

const List<dynamic> styles$DropdownButtonComponent = const [import0.styles, import1.styles];

class ViewDropdownButtonComponent0 extends AppView<import3.DropdownButtonComponent> {
  bool _query_ButtonDirective_1_0_isDirty = true;
  import4.DivElement _el_0;
  import5.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import6.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  var _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  static RenderComponentType _renderType;
  ViewDropdownButtonComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import4.document.createElement('dropdown-button');
    _renderType ??= import12.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$DropdownButtonComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import3.DropdownButtonComponent> build() {
    final _rootEl = rootEl;
    final import4.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import4.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'button';
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    createAttr(_el_0, 'role', 'button');
    addShimC(_el_0);
    _ButtonDirective_0_5 = new import5.ButtonDirectiveNgCd(new import14.ButtonDirective(_el_0));
    _KeyboardOnlyFocusIndicatorDirective_0_6 = new import6.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.injectorGet(import15.DomService, viewData.parentIndex));
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_DropdownButtonComponent1);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    project(_el_0, 0);
    var _anchor_2 = ngAnchor.clone(false);
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_DropdownButtonComponent2);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    var _anchor_3 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, null, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_DropdownButtonComponent3);
    _NgIf_3_9 = new NgIf(_appEl_3, _TemplateRef_3_8);
    _el_0.addEventListener('focus', eventHandler1(ctx.handleFocus));
    _el_0.addEventListener('blur', eventHandler1(_handle_blur_0_1));
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_2));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    _el_0.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.hideOutline));
    ctx.button = _ButtonDirective_0_5.instance;
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import14.ButtonDirective) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _ButtonDirective_0_5.instance;
    }
    if ((identical(token, import6.KeyboardOnlyFocusIndicatorDirective) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _KeyboardOnlyFocusIndicatorDirective_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import3.DropdownButtonComponent _ctx = ctx;
    final currVal_3 = _ctx.disabled;
    if (!identical(_expr_3, currVal_3)) {
      _ButtonDirective_0_5.instance.disabled = currVal_3;
      _expr_3 = currVal_3;
    }
    _NgIf_1_9.ngIf = (_ctx.buttonText != null);
    _NgIf_2_9.ngIf = (_ctx.buttonIcon != null);
    _NgIf_3_9.ngIf = _ctx.invalid;
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    final currVal_0 = _ctx.buttonAriaLabel;
    if (!identical(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-label', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.showButtonBorder;
    if (!identical(_expr_1, currVal_1)) {
      updateClass(_el_0, 'border', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.invalid;
    if (!identical(_expr_2, currVal_2)) {
      updateClass(_el_0, 'invalid', currVal_2);
      _expr_2 = currVal_2;
    }
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
  }

  void _handle_blur_0_1($event) {
    ctx.handleBlur($event);
    _KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline();
  }

  void _handle_click_0_2($event) {
    _ButtonDirective_0_5.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_0_6.hideOutline();
  }
}

AppView<import3.DropdownButtonComponent> viewFactory_DropdownButtonComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewDropdownButtonComponent0(parentView, parentIndex);
}

class _ViewDropdownButtonComponent1 extends AppView<import3.DropdownButtonComponent> {
  import4.Element _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewDropdownButtonComponent1(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDropdownButtonComponent0._renderType;
  }
  @override
  ComponentRef<import3.DropdownButtonComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'button-text';
    addShimE(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.DropdownButtonComponent _ctx = ctx;
    final currVal_0 = import12.interpolate0(_ctx.buttonText);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import3.DropdownButtonComponent> viewFactory_DropdownButtonComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDropdownButtonComponent1(parentView, parentIndex);
}

class _ViewDropdownButtonComponent2 extends AppView<import3.DropdownButtonComponent> {
  import4.Element _el_0;
  import17.ViewGlyphComponent0 _compView_0;
  import18.GlyphComponent _GlyphComponent_0_5;
  var _expr_0;
  _ViewDropdownButtonComponent2(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDropdownButtonComponent0._renderType;
  }
  @override
  ComponentRef<import3.DropdownButtonComponent> build() {
    _compView_0 = new import17.ViewGlyphComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'icon';
    addShimC(_el_0);
    _GlyphComponent_0_5 = new import18.GlyphComponent(_el_0);
    _compView_0.create(_GlyphComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.DropdownButtonComponent _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.buttonIcon;
    if (!identical(_expr_0, currVal_0)) {
      _GlyphComponent_0_5.icon = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
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

AppView<import3.DropdownButtonComponent> viewFactory_DropdownButtonComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDropdownButtonComponent2(parentView, parentIndex);
}

class _ViewDropdownButtonComponent3 extends AppView<import3.DropdownButtonComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewDropdownButtonComponent3(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDropdownButtonComponent0._renderType;
  }
  @override
  ComponentRef<import3.DropdownButtonComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'error-text';
    createAttr(_el_0, 'role', 'alert');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.DropdownButtonComponent _ctx = ctx;
    final currVal_0 = _ctx.invalid;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'invalid', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import12.interpolate0(!_ctx.invalid);
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_0, 'aria-hidden', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.error ?? '');
    if (!identical(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }
}

AppView<import3.DropdownButtonComponent> viewFactory_DropdownButtonComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDropdownButtonComponent3(parentView, parentIndex);
}

const List<dynamic> styles$DropdownButtonComponentHost = const [];

class _ViewDropdownButtonComponentHost0 extends AppView<dynamic> {
  ViewDropdownButtonComponent0 _compView_0;
  import3.DropdownButtonComponent _DropdownButtonComponent_0_5;
  _ViewDropdownButtonComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewDropdownButtonComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DropdownButtonComponent_0_5 = new import3.DropdownButtonComponent();
    _compView_0.create(_DropdownButtonComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import3.DropdownButtonComponent>(0, this, rootEl, _DropdownButtonComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import3.DropdownButtonComponent) && (0 == nodeIndex))) {
      return _DropdownButtonComponent_0_5;
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

AppView viewFactory_DropdownButtonComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDropdownButtonComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import3.DropdownButtonComponent> DropdownButtonComponentNgFactory = const ComponentFactory<import3.DropdownButtonComponent>('dropdown-button', viewFactory_DropdownButtonComponentHost0, _DropdownButtonComponentMetadata);
const _DropdownButtonComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DropdownButtonComponent, DropdownButtonComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
