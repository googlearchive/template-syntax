// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_radio.dart';
export 'material_radio.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:meta/meta.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_radio/material_radio_group.dart';
import 'package:angular_components/material_ripple/material_ripple.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/utils/browser/events/events.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref2;
import 'package:angular_components/material_radio/material_radio_group.template.dart' as _ref3;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref4;
import 'package:angular_components/model/ui/icon.template.dart' as _ref5;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref6;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref7;
import 'package:angular_forms/angular_forms.template.dart' as _ref8;
import 'package:angular_components/material_radio/material_radio.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_radio.dart' as import2;
import 'dart:html' as import3;
import '../material_icon/material_icon.template.dart' as import4;
import '../material_icon/material_icon.dart' as import5;
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
import 'material_radio_group.dart' as import16;

const List<dynamic> styles$MaterialRadioComponent = const [import0.styles];

class ViewMaterialRadioComponent0 extends AppView<import2.MaterialRadioComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import4.ViewMaterialIconComponent0 _compView_1;
  import5.MaterialIconComponent _MaterialIconComponent_1_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  import3.DivElement _el_3;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  var _expr_3;
  bool _expr_6;
  var _expr_7;
  var _expr_8;
  static RenderComponentType _renderType;
  ViewMaterialRadioComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-radio');
    rootEl.className = 'themeable';
    _renderType ??= import11.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialRadioComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialRadioComponent> build() {
    final import2.MaterialRadioComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'icon-container';
    addShimC(_el_0);
    _compView_1 = new import4.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'aria-hidden', 'true');
    _el_1.className = 'icon';
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = new import5.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MaterialRadioComponent1);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    _el_3 = createDivAndAppend(doc, parentRenderNode);
    _el_3.className = 'content';
    addShimC(_el_3);
    project(_el_3, 0);
    init(const [], null);
    _rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
    _rootEl.addEventListener('keydown', eventHandler1(_ctx.handleKeyDown));
    _rootEl.addEventListener('keyup', eventHandler1(_ctx.handleKeyUp));
    _rootEl.addEventListener('focus', eventHandler0(_ctx.onFocus));
    _rootEl.addEventListener('blur', eventHandler0(_ctx.onBlur));
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialRadioComponent _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_3 = _ctx.icon;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialIconComponent_1_5.icon = currVal_3;
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
    final currVal_1 = _ctx.checked;
    if (!identical(_expr_1, currVal_1)) {
      updateClass(_el_0, 'checked', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (!identical(_expr_2, currVal_2)) {
      updateClass(_el_0, 'disabled', currVal_2);
      _expr_2 = currVal_2;
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
    final currVal_7 = ctx.tabIndex;
    if (!identical(_expr_7, currVal_7)) {
      setAttr(rootEl, 'tabindex', currVal_7?.toString());
      _expr_7 = currVal_7;
    }
    final currVal_8 = ctx.disabled;
    if (!identical(_expr_8, currVal_8)) {
      setAttr(rootEl, 'aria-disabled', currVal_8?.toString());
      _expr_8 = currVal_8;
    }
  }
}

AppView<import2.MaterialRadioComponent> viewFactory_MaterialRadioComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialRadioComponent0(parentView, parentIndex);
}

class _ViewMaterialRadioComponent1 extends AppView<import2.MaterialRadioComponent> {
  import3.Element _el_0;
  import14.ViewMaterialRippleComponent0 _compView_0;
  import15.MaterialRippleComponent _MaterialRippleComponent_0_5;
  _ViewMaterialRadioComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialRadioComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialRadioComponent> build() {
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
    bool changed = false;
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRippleComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialRadioComponent> viewFactory_MaterialRadioComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialRadioComponent1(parentView, parentIndex);
}

const List<dynamic> styles$MaterialRadioComponentHost = const [];

class _ViewMaterialRadioComponentHost0 extends AppView<dynamic> {
  ViewMaterialRadioComponent0 _compView_0;
  import2.MaterialRadioComponent _MaterialRadioComponent_0_5;
  _ViewMaterialRadioComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialRadioComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialRadioComponent_0_5 = new import2.MaterialRadioComponent(rootEl, _compView_0.ref, this.injectorGet(import16.MaterialRadioGroupComponent, viewData.parentIndex, null), null, null);
    _compView_0.create(_MaterialRadioComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialRadioComponent>(0, this, rootEl, _MaterialRadioComponent_0_5);
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
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }
}

AppView viewFactory_MaterialRadioComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialRadioComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialRadioComponent> MaterialRadioComponentNgFactory = const ComponentFactory<import2.MaterialRadioComponent>('material-radio', viewFactory_MaterialRadioComponentHost0, _MaterialRadioComponentMetadata);
const _MaterialRadioComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialRadioComponent, MaterialRadioComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
}
