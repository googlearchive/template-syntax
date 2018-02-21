// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'scorecard.dart';
export 'scorecard.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_ripple/material_ripple.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular_components/utils/browser/events/events.dart';
import 'package:angular_components/utils/color/color.dart';
import 'package:angular_components/utils/color/palette.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref2;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref3;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref4;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref5;
import 'package:angular_components/utils/color/color.template.dart' as _ref6;
import 'package:angular_components/utils/color/palette.template.dart' as _ref7;
import 'package:angular_components/scorecard/scorecard.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'scorecard.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../material_ripple/material_ripple.template.dart' as import12;
import '../material_ripple/material_ripple.dart' as import13;
import '../material_icon/material_icon.template.dart' as import14;
import '../material_icon/material_icon.dart' as import15;
import '../utils/browser/dom_service/dom_service.dart' as import16;

const List<dynamic> styles$ScorecardComponent = const [import0.styles];

class ViewScorecardComponent0 extends AppView<import2.ScorecardComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_7;
  import5.Element _el_1;
  import5.Text _text_2;
  import5.Element _el_3;
  import5.Text _text_4;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_7;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_7;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_7;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_7;
  var _expr_8;
  bool _expr_9;
  bool _expr_10;
  bool _expr_11;
  var _expr_12;
  bool _expr_13;
  bool _expr_14;
  static RenderComponentType _renderType;
  ViewScorecardComponent0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import5.document.createElement('acx-scorecard');
    rootEl.className = 'themeable';
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$ScorecardComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    final import2.ScorecardComponent _ctx = ctx;
    final import5.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_ScorecardComponent1);
    _NgIf_0_7 = new NgIf(_appEl_0, _TemplateRef_0_6);
    var doc = import5.document;
    _el_1 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_1);
    _text_2 = new import5.Text('');
    _el_1.append(_text_2);
    project(_el_1, 0);
    _el_3 = createAndAppend(doc, 'h2', parentRenderNode);
    addShimE(_el_3);
    _text_4 = new import5.Text('');
    _el_3.append(_text_4);
    project(_el_3, 1);
    var _anchor_5 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_5);
    _appEl_5 = new ViewContainer(5, null, this, _anchor_5);
    TemplateRef _TemplateRef_5_6 = new TemplateRef(_appEl_5, viewFactory_ScorecardComponent2);
    _NgIf_5_7 = new NgIf(_appEl_5, _TemplateRef_5_6);
    var _anchor_6 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_6);
    _appEl_6 = new ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_6 = new TemplateRef(_appEl_6, viewFactory_ScorecardComponent3);
    _NgIf_6_7 = new NgIf(_appEl_6, _TemplateRef_6_6);
    var _anchor_7 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_7);
    _appEl_7 = new ViewContainer(7, null, this, _anchor_7);
    TemplateRef _TemplateRef_7_6 = new TemplateRef(_appEl_7, viewFactory_ScorecardComponent5);
    _NgIf_7_7 = new NgIf(_appEl_7, _TemplateRef_7_6);
    project(parentRenderNode, 3);
    init(const [], null);
    rootEl.addEventListener('keyup', eventHandler0(_ctx.resetOutline));
    rootEl.addEventListener('blur', eventHandler0(_ctx.resetOutline));
    rootEl.addEventListener('mousedown', eventHandler0(_ctx.hideOutline));
    rootEl.addEventListener('click', eventHandler0(_ctx.handleClick));
    rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeypress));
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ScorecardComponent _ctx = ctx;
    _NgIf_0_7.ngIf = _ctx.selectable;
    _NgIf_5_7.ngIf = (_ctx.suggestionBefore != null);
    _NgIf_6_7.ngIf = (_ctx.description != null);
    _NgIf_7_7.ngIf = (_ctx.suggestionAfter != null);
    _appEl_0.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    final currVal_1 = (_ctx.label ?? '');
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.tooltip;
    if (!identical(_expr_2, currVal_2)) {
      setProp(_el_3, 'title', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = (_ctx.value ?? '');
    if (!identical(_expr_3, currVal_3)) {
      _text_4.text = currVal_3;
      _expr_3 = currVal_3;
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_5?.destroyNestedViews();
    _appEl_6?.destroyNestedViews();
    _appEl_7?.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_7 = (ctx.selectable ? 0 : null);
    if (!identical(_expr_7, currVal_7)) {
      setAttr(rootEl, 'tabindex', currVal_7?.toString());
      _expr_7 = currVal_7;
    }
    final currVal_8 = (ctx.selectable ? 'button' : null);
    if (!identical(_expr_8, currVal_8)) {
      setAttr(rootEl, 'role', currVal_8?.toString());
      _expr_8 = currVal_8;
    }
    final currVal_9 = ctx.isChangePositive;
    if (!identical(_expr_9, currVal_9)) {
      updateElemClass(rootEl, 'is-change-positive', currVal_9);
      _expr_9 = currVal_9;
    }
    final currVal_10 = ctx.isChangeNegative;
    if (!identical(_expr_10, currVal_10)) {
      updateElemClass(rootEl, 'is-change-negative', currVal_10);
      _expr_10 = currVal_10;
    }
    final currVal_11 = ctx.selectable;
    if (!identical(_expr_11, currVal_11)) {
      updateElemClass(rootEl, 'selectable', currVal_11);
      _expr_11 = currVal_11;
    }
    final currVal_12 = ctx.backgroundStyle;
    if (!identical(_expr_12, currVal_12)) {
      rootEl.style.setProperty('background', currVal_12?.toString());
      _expr_12 = currVal_12;
    }
    final currVal_13 = ctx.extraBig;
    if (!identical(_expr_13, currVal_13)) {
      updateElemClass(rootEl, 'extra-big', currVal_13);
      _expr_13 = currVal_13;
    }
    final currVal_14 = ctx.selected;
    if (!identical(_expr_14, currVal_14)) {
      updateElemClass(rootEl, 'selected', currVal_14);
      _expr_14 = currVal_14;
    }
  }
}

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewScorecardComponent0(parentView, parentIndex);
}

class _ViewScorecardComponent1 extends AppView<import2.ScorecardComponent> {
  import5.Element _el_0;
  import12.ViewMaterialRippleComponent0 _compView_0;
  import13.MaterialRippleComponent _MaterialRippleComponent_0_4;
  _ViewScorecardComponent1(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewScorecardComponent0._renderType;
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    _compView_0 = new import12.ViewMaterialRippleComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRippleComponent_0_4 = new import13.MaterialRippleComponent(_el_0);
    _compView_0.create(_MaterialRippleComponent_0_4, []);
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
    _MaterialRippleComponent_0_4.ngOnDestroy();
  }
}

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewScorecardComponent1(parentView, parentIndex);
}

class _ViewScorecardComponent2 extends AppView<import2.ScorecardComponent> {
  import5.Element _el_0;
  import5.Text _text_1;
  var _expr_0;
  _ViewScorecardComponent2(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewScorecardComponent0._renderType;
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    var doc = import5.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'suggestion before';
    addShimE(_el_0);
    _text_1 = new import5.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ScorecardComponent _ctx = ctx;
    final currVal_0 = (_ctx.suggestionBefore ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewScorecardComponent2(parentView, parentIndex);
}

class _ViewScorecardComponent3 extends AppView<import2.ScorecardComponent> {
  import5.Element _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  import5.Text _text_3;
  var _expr_1;
  _ViewScorecardComponent3(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewScorecardComponent0._renderType;
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    var doc = import5.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'description';
    addShimE(_el_0);
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_ScorecardComponent4);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    import5.Text _text_2 = new import5.Text('\n   ');
    _el_0.append(_text_2);
    _text_3 = new import5.Text('');
    _el_0.append(_text_3);
    import5.Text _text_4 = new import5.Text(' \n  ');
    _el_0.append(_text_4);
    project(_el_0, 2);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ScorecardComponent _ctx = ctx;
    _NgIf_1_7.ngIf = ((_ctx.changeGlyph && (_ctx.description != '')) && !_ctx.isChangeNeutral);
    _appEl_1.detectChangesInNestedViews();
    final currVal_1 = (_ctx.description ?? '');
    if (!identical(_expr_1, currVal_1)) {
      _text_3.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponent3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewScorecardComponent3(parentView, parentIndex);
}

class _ViewScorecardComponent4 extends AppView<import2.ScorecardComponent> {
  import5.Element _el_0;
  import14.ViewMaterialIconComponent0 _compView_0;
  import15.MaterialIconComponent _MaterialIconComponent_0_4;
  var _expr_0;
  _ViewScorecardComponent4(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewScorecardComponent0._renderType;
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    _compView_0 = new import14.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'change-glyph';
    createAttr(_el_0, 'size', 'small');
    addShimC(_el_0);
    _MaterialIconComponent_0_4 = new import15.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ScorecardComponent _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.changeGlyphIcon;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialIconComponent_0_4.icon = currVal_0;
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

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponent4(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewScorecardComponent4(parentView, parentIndex);
}

class _ViewScorecardComponent5 extends AppView<import2.ScorecardComponent> {
  import5.Element _el_0;
  import5.Text _text_1;
  var _expr_0;
  _ViewScorecardComponent5(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewScorecardComponent0._renderType;
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    var doc = import5.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'suggestion after';
    addShimE(_el_0);
    _text_1 = new import5.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ScorecardComponent _ctx = ctx;
    final currVal_0 = (_ctx.suggestionAfter ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponent5(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewScorecardComponent5(parentView, parentIndex);
}

const List<dynamic> styles$ScorecardComponentHost = const [];

class _ViewScorecardComponentHost0 extends AppView<dynamic> {
  ViewScorecardComponent0 _compView_0;
  import2.ScorecardComponent _ScorecardComponent_0_4;
  _ViewScorecardComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewScorecardComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ScorecardComponent_0_4 = new import2.ScorecardComponent(_compView_0.ref, rootEl, this.injectorGet(import16.DomService, viewData.parentIndex));
    _compView_0.create(_ScorecardComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.ScorecardComponent>(0, this, rootEl, _ScorecardComponent_0_4);
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

AppView viewFactory_ScorecardComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewScorecardComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.ScorecardComponent> ScorecardComponentNgFactory = const ComponentFactory<import2.ScorecardComponent>('acx-scorecard', viewFactory_ScorecardComponentHost0, _ScorecardComponentMetadata);
const _ScorecardComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ScorecardComponent, ScorecardComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
