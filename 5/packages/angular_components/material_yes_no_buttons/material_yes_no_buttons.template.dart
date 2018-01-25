// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_yes_no_buttons.dart';
export 'material_yes_no_buttons.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_spinner/material_spinner.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_button/material_button.template.dart' as _ref1;
import 'package:angular_components/material_spinner/material_spinner.template.dart' as _ref2;

import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_yes_no_buttons.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import9;
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../material_spinner/material_spinner.template.dart' as import13;
import '../material_spinner/material_spinner.dart' as import14;
import '../material_button/material_button.template.dart' as import15;
import '../theme/dark_theme.dart' as import16;
import '../material_button/material_button.dart' as import17;
import 'package:angular/src/core/di/opaque_token.dart' as import18;
import '../button_decorator/button_decorator.dart' as import19;

const List<dynamic> styles$MaterialYesNoButtonsComponent = const [import0.styles];

class ViewMaterialYesNoButtonsComponent0 extends AppView<import2.MaterialYesNoButtonsComponent> {
  final import3.QueryList _viewQuery_yesButton_0 = new import3.QueryList();
  final import3.QueryList _viewQuery_noButton_1 = new import3.QueryList();
  ViewContainer _appEl_0;
  NgIf _NgIf_0_7;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_7;
  static RenderComponentType _renderType;
  ViewMaterialYesNoButtonsComponent0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import9.document.createElement('material-yes-no-buttons');
    _renderType ??= import10.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialYesNoButtonsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    final import9.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_MaterialYesNoButtonsComponent1);
    _NgIf_0_7 = new NgIf(_appEl_0, _TemplateRef_0_6);
    var _anchor_1 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MaterialYesNoButtonsComponent2);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    var _anchor_2 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_MaterialYesNoButtonsComponent3);
    _NgIf_2_7 = new NgIf(_appEl_2, _TemplateRef_2_6);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialYesNoButtonsComponent _ctx = ctx;
    _NgIf_0_7.ngIf = _ctx.pending;
    _NgIf_1_7.ngIf = (!_ctx.pending && _ctx.yesDisplayed);
    _NgIf_2_7.ngIf = (!_ctx.pending && _ctx.noDisplayed);
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    if (_viewQuery_yesButton_0.dirty) {
      _viewQuery_yesButton_0.reset([
        _appEl_1.mapNestedViews((_ViewMaterialYesNoButtonsComponent2 nestedView) {
          return [nestedView._MaterialButtonComponent_0_5];
        })
      ]);
      ctx.yesButton = _viewQuery_yesButton_0.first;
    }
    if (_viewQuery_noButton_1.dirty) {
      _viewQuery_noButton_1.reset([
        _appEl_2.mapNestedViews((_ViewMaterialYesNoButtonsComponent3 nestedView) {
          return [nestedView._MaterialButtonComponent_0_5];
        })
      ]);
      ctx.noButton = _viewQuery_noButton_1.first;
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
  }
}

AppView<import2.MaterialYesNoButtonsComponent> viewFactory_MaterialYesNoButtonsComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialYesNoButtonsComponent0(parentView, parentIndex);
}

class _ViewMaterialYesNoButtonsComponent1 extends AppView<import2.MaterialYesNoButtonsComponent> {
  import9.DivElement _el_0;
  import9.Element _el_1;
  import13.ViewMaterialSpinnerComponent0 _compView_1;
  import14.MaterialSpinnerComponent _MaterialSpinnerComponent_1_4;
  _ViewMaterialYesNoButtonsComponent1(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialYesNoButtonsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    var doc = import9.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'btn spinner';
    addShimC(_el_0);
    _compView_1 = new import13.ViewMaterialSpinnerComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _MaterialSpinnerComponent_1_4 = new import14.MaterialSpinnerComponent();
    _compView_1.create(_MaterialSpinnerComponent_1_4, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
  }
}

AppView<import2.MaterialYesNoButtonsComponent> viewFactory_MaterialYesNoButtonsComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialYesNoButtonsComponent1(parentView, parentIndex);
}

class _ViewMaterialYesNoButtonsComponent2 extends AppView<import2.MaterialYesNoButtonsComponent> {
  import9.Element _el_0;
  import15.ViewMaterialButtonComponent0 _compView_0;
  import16.AcxDarkTheme _AcxDarkTheme_0_4;
  import17.MaterialButtonComponent _MaterialButtonComponent_0_5;
  import9.Text _text_1;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  var _expr_3;
  _ViewMaterialYesNoButtonsComponent2(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialYesNoButtonsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    _compView_0 = new import15.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'btn btn-yes';
    addShimC(_el_0);
    _AcxDarkTheme_0_4 = new import16.AcxDarkTheme(parentView.injectorGet(const import18.OpaqueToken('acxDarkTheme'), viewData.parentIndex, null));
    _MaterialButtonComponent_0_5 = new import17.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_4, _compView_0.ref);
    _text_1 = new import9.Text('');
    _compView_0.create(_MaterialButtonComponent_0_5, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_5.trigger.listen(eventHandler1(ctx.onYes));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_4;
    }
    if (((identical(token, import17.MaterialButtonComponent) || identical(token, import19.ButtonDirective)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialYesNoButtonsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_1 = (_ctx.yesDisabled || _ctx.disabled);
    if (!identical(_expr_1, currVal_1)) {
      _MaterialButtonComponent_0_5.disabled = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.yesRaised || _ctx.raised);
    if (!identical(_expr_2, currVal_2)) {
      _MaterialButtonComponent_0_5.raised = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.yesHighlighted;
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'highlighted', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_3 = import10.interpolate0(_ctx.yesText);
    if (!identical(_expr_3, currVal_3)) {
      _text_1.text = currVal_3;
      _expr_3 = currVal_3;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialYesNoButtonsComponent0)._viewQuery_yesButton_0.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialYesNoButtonsComponent> viewFactory_MaterialYesNoButtonsComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialYesNoButtonsComponent2(parentView, parentIndex);
}

class _ViewMaterialYesNoButtonsComponent3 extends AppView<import2.MaterialYesNoButtonsComponent> {
  import9.Element _el_0;
  import15.ViewMaterialButtonComponent0 _compView_0;
  import16.AcxDarkTheme _AcxDarkTheme_0_4;
  import17.MaterialButtonComponent _MaterialButtonComponent_0_5;
  import9.Text _text_1;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  _ViewMaterialYesNoButtonsComponent3(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialYesNoButtonsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    _compView_0 = new import15.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'btn btn-no';
    addShimC(_el_0);
    _AcxDarkTheme_0_4 = new import16.AcxDarkTheme(parentView.injectorGet(const import18.OpaqueToken('acxDarkTheme'), viewData.parentIndex, null));
    _MaterialButtonComponent_0_5 = new import17.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_4, _compView_0.ref);
    _text_1 = new import9.Text('');
    _compView_0.create(_MaterialButtonComponent_0_5, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_5.trigger.listen(eventHandler1(ctx.onNo));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_4;
    }
    if (((identical(token, import17.MaterialButtonComponent) || identical(token, import19.ButtonDirective)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialYesNoButtonsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_0 = _ctx.disabled;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialButtonComponent_0_5.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.raised;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialButtonComponent_0_5.raised = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_2 = import10.interpolate0(_ctx.noText);
    if (!identical(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialYesNoButtonsComponent0)._viewQuery_noButton_1.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialYesNoButtonsComponent> viewFactory_MaterialYesNoButtonsComponent3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialYesNoButtonsComponent3(parentView, parentIndex);
}

const List<dynamic> styles$MaterialYesNoButtonsComponentHost = const [];

class _ViewMaterialYesNoButtonsComponentHost0 extends AppView<dynamic> {
  ViewMaterialYesNoButtonsComponent0 _compView_0;
  import2.MaterialYesNoButtonsComponent _MaterialYesNoButtonsComponent_0_4;
  _ViewMaterialYesNoButtonsComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialYesNoButtonsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialYesNoButtonsComponent_0_4 = new import2.MaterialYesNoButtonsComponent();
    _compView_0.create(_MaterialYesNoButtonsComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialYesNoButtonsComponent>(0, this, rootEl, _MaterialYesNoButtonsComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialYesNoButtonsComponent) && (0 == nodeIndex))) {
      return _MaterialYesNoButtonsComponent_0_4;
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

AppView viewFactory_MaterialYesNoButtonsComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialYesNoButtonsComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialYesNoButtonsComponent> MaterialYesNoButtonsComponentNgFactory = const ComponentFactory<import2.MaterialYesNoButtonsComponent>('material-yes-no-buttons', viewFactory_MaterialYesNoButtonsComponentHost0, _MaterialYesNoButtonsComponentMetadata);
const _MaterialYesNoButtonsComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ngRef.registerComponent(
    MaterialYesNoButtonsComponent,
    MaterialYesNoButtonsComponentNgFactory,
  );
}
