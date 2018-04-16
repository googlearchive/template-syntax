// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_checkbox.dart';
export 'material_checkbox.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:meta/meta.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/glyph/glyph.dart';
import 'package:angular_components/material_ripple/material_ripple.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/utils/browser/events/events.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/glyph/glyph.template.dart' as _ref2;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref3;
import 'package:angular_components/model/ui/icon.template.dart' as _ref4;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref5;
import 'package:angular_forms/angular_forms.template.dart' as _ref6;
import 'package:angular_components/material_checkbox/material_checkbox.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_checkbox.dart' as import2;
import 'dart:html' as import3;
import '../glyph/glyph.template.dart' as import4;
import '../glyph/glyph.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../material_ripple/material_ripple.template.dart' as import14;
import '../material_ripple/material_ripple.dart' as import15;

const List<dynamic> styles$MaterialCheckboxComponent = const [import0.styles];

class ViewMaterialCheckboxComponent0 extends AppView<import2.MaterialCheckboxComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import4.ViewGlyphComponent0 _compView_1;
  import5.GlyphComponent _GlyphComponent_1_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  import3.DivElement _el_3;
  import3.Text _text_4;
  bool _expr_0;
  var _expr_1;
  bool _expr_2;
  var _expr_3;
  var _expr_5;
  bool _expr_6;
  var _expr_7;
  var _expr_9;
  var _expr_10;
  static RenderComponentType _renderType;
  ViewMaterialCheckboxComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-checkbox');
    rootEl.className = 'themeable';
    _renderType ??= import11.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialCheckboxComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialCheckboxComponent> build() {
    final import2.MaterialCheckboxComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'icon-container';
    addShimC(_el_0);
    _compView_1 = new import4.ViewGlyphComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'aria-hidden', 'true');
    _el_1.className = 'icon';
    addShimC(_el_1);
    _GlyphComponent_1_5 = new import5.GlyphComponent(_el_1);
    _compView_1.create(_GlyphComponent_1_5, []);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MaterialCheckboxComponent1);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    _el_3 = createDivAndAppend(doc, parentRenderNode);
    _el_3.className = 'content';
    addShimC(_el_3);
    _text_4 = new import3.Text('');
    _el_3.append(_text_4);
    project(_el_3, 0);
    init(const [], null);
    _rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
    _rootEl.addEventListener('keyup', eventHandler1(_ctx.handleKeyUp));
    _rootEl.addEventListener('focus', eventHandler1(_ctx.handleFocus));
    _rootEl.addEventListener('mousedown', eventHandler1(_ctx.handleMouseDown));
    _rootEl.addEventListener('blur', eventHandler1(_ctx.handleBlur));
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialCheckboxComponent _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_3 = _ctx.icon;
    if (!identical(_expr_3, currVal_3)) {
      _GlyphComponent_1_5.icon = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _NgIf_2_9.ngIf = !_ctx.disabled;
    _appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.showFocus;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'focus', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.themeColor;
    if (!identical(_expr_1, currVal_1)) {
      _el_1.style.setProperty('color', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.checked || _ctx.indeterminate);
    if (!identical(_expr_2, currVal_2)) {
      updateElemClass(_el_1, 'filled', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_5 = (_ctx.label ?? '');
    if (!identical(_expr_5, currVal_5)) {
      _text_4.text = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
    _compView_1?.destroy();
  }

  void detectHostChanges(bool firstCheck) {
    if (firstCheck) {
      if (!identical(ctx.role, null)) {
        setAttr(rootEl, 'role', ctx.role?.toString());
      }
    }
    final currVal_6 = ctx.disabled;
    if (!identical(_expr_6, currVal_6)) {
      updateElemClass(rootEl, 'disabled', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = ctx.disabled;
    if (!identical(_expr_7, currVal_7)) {
      setAttr(rootEl, 'aria-disabled', currVal_7?.toString());
      _expr_7 = currVal_7;
    }
    final currVal_9 = ctx.tabIndex;
    if (!identical(_expr_9, currVal_9)) {
      setAttr(rootEl, 'tabindex', currVal_9?.toString());
      _expr_9 = currVal_9;
    }
    final currVal_10 = ctx.label;
    if (!identical(_expr_10, currVal_10)) {
      setAttr(rootEl, 'aria-label', currVal_10?.toString());
      _expr_10 = currVal_10;
    }
  }
}

AppView<import2.MaterialCheckboxComponent> viewFactory_MaterialCheckboxComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialCheckboxComponent0(parentView, parentIndex);
}

class _ViewMaterialCheckboxComponent1 extends AppView<import2.MaterialCheckboxComponent> {
  import3.Element _el_0;
  import14.ViewMaterialRippleComponent0 _compView_0;
  import15.MaterialRippleComponent _MaterialRippleComponent_0_5;
  var _expr_0;
  _ViewMaterialCheckboxComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialCheckboxComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialCheckboxComponent> build() {
    _compView_0 = new import14.ViewMaterialRippleComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'ripple';
    addShimC(_el_0);
    _MaterialRippleComponent_0_5 = new import15.MaterialRippleComponent(_el_0);
    _compView_0.create(_MaterialRippleComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialCheckboxComponent _ctx = ctx;
    bool changed = false;
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.rippleColor;
    if (!identical(_expr_0, currVal_0)) {
      _el_0.style.setProperty('color', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRippleComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialCheckboxComponent> viewFactory_MaterialCheckboxComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialCheckboxComponent1(parentView, parentIndex);
}

const List<dynamic> styles$MaterialCheckboxComponentHost = const [];

class _ViewMaterialCheckboxComponentHost0 extends AppView<dynamic> {
  ViewMaterialCheckboxComponent0 _compView_0;
  import2.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  _ViewMaterialCheckboxComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialCheckboxComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialCheckboxComponent_0_5 = new import2.MaterialCheckboxComponent(rootEl, _compView_0.ref, null, null, null);
    _compView_0.create(_MaterialCheckboxComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialCheckboxComponent>(0, this, rootEl, _MaterialCheckboxComponent_0_5);
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

AppView viewFactory_MaterialCheckboxComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialCheckboxComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialCheckboxComponent> MaterialCheckboxComponentNgFactory = const ComponentFactory<import2.MaterialCheckboxComponent>('material-checkbox', viewFactory_MaterialCheckboxComponentHost0, _MaterialCheckboxComponentMetadata);
const _MaterialCheckboxComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialCheckboxComponent, MaterialCheckboxComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
