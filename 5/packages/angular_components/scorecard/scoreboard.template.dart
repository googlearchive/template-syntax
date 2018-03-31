// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'scoreboard.dart';
export 'scoreboard.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/utils/browser/dom_service/angular_2.dart';
import 'package:angular_components/utils/color/palette.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'scorecard.dart';
import 'package:angular_components/src/scorecard/scorecard_bar.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_button/material_button.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref2;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref3;
import 'package:angular_components/src/scorecard/scorecard_bar.template.dart' as _ref4;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref5;
import 'package:angular_components/utils/color/palette.template.dart' as _ref6;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref7;
import 'scorecard.template.dart' as _ref8;
import 'package:angular_components/scorecard/scoreboard.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'scoreboard.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../src/scorecard/scorecard_bar.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../utils/browser/dom_service/dom_service.dart' as import13;
import 'package:angular/src/core/di/opaque_token.dart' as import14;
import '../material_button/material_button.template.dart' as import15;
import '../theme/dark_theme.dart' as import16;
import '../material_button/material_button.dart' as import17;
import '../material_icon/material_icon.template.dart' as import18;
import '../material_icon/material_icon.dart' as import19;
import '../button_decorator/button_decorator.dart' as import20;

const List<dynamic> styles$ScoreboardComponent = const [import0.styles];

class ViewScoreboardComponent0 extends AppView<import2.ScoreboardComponent> {
  bool _query_ScorecardBarDirective_1_0_isDirty = true;
  import3.DivElement _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import3.DivElement _el_2;
  import6.ScorecardBarDirective _ScorecardBarDirective_2_5;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  bool _expr_0;
  bool _expr_1;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewScoreboardComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('acx-scoreboard');
    _renderType ??= import10.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$ScoreboardComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.ScoreboardComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'acx-scoreboard';
    addShimC(_el_0);
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_ScoreboardComponent1);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    _el_2 = createDivAndAppend(doc, _el_0);
    _el_2.className = 'scorecard-bar';
    createAttr(_el_2, 'scorecardBar', '');
    addShimC(_el_2);
    _ScorecardBarDirective_2_5 = new import6.ScorecardBarDirective(parentView.injectorGet(import13.DomService, viewData.parentIndex), _el_2, parentView.injectorGet(const import14.OpaqueToken('isRtl'), viewData.parentIndex, null));
    project(_el_2, 0);
    var _anchor_3 = ngAnchor.clone(false);
    _el_0.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_ScoreboardComponent2);
    _NgIf_3_9 = new NgIf(_appEl_3, _TemplateRef_3_8);
    ctx.scorecardBar = _ScorecardBarDirective_2_5;
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ScoreboardComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    _NgIf_1_9.ngIf = _ctx.isScrollable;
    final currVal_3 = _ctx.isVertical;
    if (!identical(_expr_3, currVal_3)) {
      _ScorecardBarDirective_2_5.isVertical = currVal_3;
      _expr_3 = currVal_3;
    }
    if (firstCheck) {
      _ScorecardBarDirective_2_5.ngOnInit();
    }
    _NgIf_3_9.ngIf = _ctx.isScrollable;
    _appEl_1.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    final bool currVal_0 = !_ctx.isVertical;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'acx-scoreboard-horizontal', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isVertical;
    if (!identical(_expr_1, currVal_1)) {
      updateClass(_el_0, 'acx-scoreboard-vertical', currVal_1);
      _expr_1 = currVal_1;
    }
    _ScorecardBarDirective_2_5.ngAfterViewChecked();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
    _ScorecardBarDirective_2_5.ngOnDestroy();
  }
}

AppView<import2.ScoreboardComponent> viewFactory_ScoreboardComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewScoreboardComponent0(parentView, parentIndex);
}

class _ViewScoreboardComponent1 extends AppView<import2.ScoreboardComponent> {
  import3.Element _el_0;
  import15.ViewMaterialButtonComponent0 _compView_0;
  import16.AcxDarkTheme _AcxDarkTheme_0_5;
  import17.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import3.Element _el_1;
  import18.ViewMaterialIconComponent0 _compView_1;
  import19.MaterialIconComponent _MaterialIconComponent_1_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewScoreboardComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewScoreboardComponent0._renderType;
  }
  @override
  ComponentRef<import2.ScoreboardComponent> build() {
    _compView_0 = new import15.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'scroll-button scroll-back-button';
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = new import16.AcxDarkTheme(parentView.parentView.injectorGet(const import14.OpaqueToken('acxDarkTheme'), parentView.viewData.parentIndex, null));
    _MaterialButtonComponent_0_6 = new import17.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    _compView_1 = new import18.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = new import19.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler0(ctx.scrollBack));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_5;
    }
    if (((identical(token, import17.MaterialButtonComponent) || identical(token, import20.ButtonDirective)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.ScoreboardComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    final currVal_2 = _ctx.backIconType;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialIconComponent_1_5.icon = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.atScorecardBarStart;
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'hide', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = _ctx.scrollScorecardBarBack;
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_1, 'aria-label', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_1?.destroy();
  }
}

AppView<import2.ScoreboardComponent> viewFactory_ScoreboardComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewScoreboardComponent1(parentView, parentIndex);
}

class _ViewScoreboardComponent2 extends AppView<import2.ScoreboardComponent> {
  import3.Element _el_0;
  import15.ViewMaterialButtonComponent0 _compView_0;
  import16.AcxDarkTheme _AcxDarkTheme_0_5;
  import17.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import3.Element _el_1;
  import18.ViewMaterialIconComponent0 _compView_1;
  import19.MaterialIconComponent _MaterialIconComponent_1_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewScoreboardComponent2(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewScoreboardComponent0._renderType;
  }
  @override
  ComponentRef<import2.ScoreboardComponent> build() {
    _compView_0 = new import15.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'scroll-button scroll-forward-button';
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = new import16.AcxDarkTheme(parentView.parentView.injectorGet(const import14.OpaqueToken('acxDarkTheme'), parentView.viewData.parentIndex, null));
    _MaterialButtonComponent_0_6 = new import17.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    _compView_1 = new import18.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = new import19.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler0(ctx.scrollForward));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_5;
    }
    if (((identical(token, import17.MaterialButtonComponent) || identical(token, import20.ButtonDirective)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.ScoreboardComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    final currVal_2 = _ctx.forwardIconType;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialIconComponent_1_5.icon = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.atScorecardBarEnd;
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'hide', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = _ctx.scrollScorecardBarForward;
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_1, 'aria-label', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_1?.destroy();
  }
}

AppView<import2.ScoreboardComponent> viewFactory_ScoreboardComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewScoreboardComponent2(parentView, parentIndex);
}

const List<dynamic> styles$ScoreboardComponentHost = const [];

class _ViewScoreboardComponentHost0 extends AppView<dynamic> {
  ViewScoreboardComponent0 _compView_0;
  import2.ScoreboardComponent _ScoreboardComponent_0_5;
  bool _query_ScorecardComponent_0_0_isDirty = true;
  _ViewScoreboardComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewScoreboardComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ScoreboardComponent_0_5 = new import2.ScoreboardComponent(null, this.injectorGet(import13.DomService, viewData.parentIndex), _compView_0.ref);
    _ScoreboardComponent_0_5.scoreCards = [];
    _compView_0.create(_ScoreboardComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.ScoreboardComponent>(0, this, rootEl, _ScoreboardComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      _ScoreboardComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _ScoreboardComponent_0_5.ngOnDestroy();
  }
}

AppView viewFactory_ScoreboardComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewScoreboardComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.ScoreboardComponent> ScoreboardComponentNgFactory = const ComponentFactory<import2.ScoreboardComponent>('acx-scoreboard', viewFactory_ScoreboardComponentHost0, _ScoreboardComponentMetadata);
const _ScoreboardComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ScoreboardComponent, ScoreboardComponentNgFactory);
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
