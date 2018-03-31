// **************************************************************************
// Generator: Instance of 'Compiler'
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
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_button/material_button.template.dart' as _ref1;
import 'package:angular_components/material_spinner/material_spinner.template.dart' as _ref2;
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_yes_no_buttons.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../material_spinner/material_spinner.template.dart' as import12;
import '../material_spinner/material_spinner.dart' as import13;
import '../material_button/material_button.template.dart' as import14;
import '../theme/dark_theme.dart' as import15;
import '../material_button/material_button.dart' as import16;
import 'package:angular/src/core/di/opaque_token.dart' as import17;
import '../button_decorator/button_decorator.dart' as import18;

const List<dynamic> styles$MaterialYesNoButtonsComponent = const [import0.styles];

class ViewMaterialYesNoButtonsComponent0 extends AppView<import2.MaterialYesNoButtonsComponent> {
  bool _query_yesButton_1_0_isDirty = true;
  bool _query_noButton_1_1_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  static RenderComponentType _renderType;
  ViewMaterialYesNoButtonsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import8.document.createElement('material-yes-no-buttons');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialYesNoButtonsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = new TemplateRef(_appEl_0, viewFactory_MaterialYesNoButtonsComponent1);
    _NgIf_0_9 = new NgIf(_appEl_0, _TemplateRef_0_8);
    var _anchor_1 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialYesNoButtonsComponent2);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    var _anchor_2 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MaterialYesNoButtonsComponent3);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialYesNoButtonsComponent _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.pending;
    _NgIf_1_9.ngIf = (!_ctx.pending && _ctx.yesDisplayed);
    _NgIf_2_9.ngIf = (!_ctx.pending && _ctx.noDisplayed);
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    if (_query_yesButton_1_0_isDirty) {
      ctx.yesButton = (_appEl_1.mapNestedViews((_ViewMaterialYesNoButtonsComponent2 nestedView) {
        return [nestedView._MaterialButtonComponent_0_6];
      }).isNotEmpty
          ? _appEl_1.mapNestedViews((_ViewMaterialYesNoButtonsComponent2 nestedView) {
              return [nestedView._MaterialButtonComponent_0_6];
            }).first
          : null);
      _query_yesButton_1_0_isDirty = false;
    }
    if (_query_noButton_1_1_isDirty) {
      ctx.noButton = (_appEl_2.mapNestedViews((_ViewMaterialYesNoButtonsComponent3 nestedView) {
        return [nestedView._MaterialButtonComponent_0_6];
      }).isNotEmpty
          ? _appEl_2.mapNestedViews((_ViewMaterialYesNoButtonsComponent3 nestedView) {
              return [nestedView._MaterialButtonComponent_0_6];
            }).first
          : null);
      _query_noButton_1_1_isDirty = false;
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
  }
}

AppView<import2.MaterialYesNoButtonsComponent> viewFactory_MaterialYesNoButtonsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialYesNoButtonsComponent0(parentView, parentIndex);
}

class _ViewMaterialYesNoButtonsComponent1 extends AppView<import2.MaterialYesNoButtonsComponent> {
  import8.DivElement _el_0;
  import8.Element _el_1;
  import12.ViewMaterialSpinnerComponent0 _compView_1;
  import13.MaterialSpinnerComponent _MaterialSpinnerComponent_1_5;
  _ViewMaterialYesNoButtonsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialYesNoButtonsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'btn spinner';
    addShimC(_el_0);
    _compView_1 = new import12.ViewMaterialSpinnerComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _MaterialSpinnerComponent_1_5 = new import13.MaterialSpinnerComponent();
    _compView_1.create(_MaterialSpinnerComponent_1_5, []);
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

AppView<import2.MaterialYesNoButtonsComponent> viewFactory_MaterialYesNoButtonsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialYesNoButtonsComponent1(parentView, parentIndex);
}

class _ViewMaterialYesNoButtonsComponent2 extends AppView<import2.MaterialYesNoButtonsComponent> {
  import8.Element _el_0;
  import14.ViewMaterialButtonComponent0 _compView_0;
  import15.AcxDarkTheme _AcxDarkTheme_0_5;
  import16.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import8.Text _text_1;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  var _expr_3;
  _ViewMaterialYesNoButtonsComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialYesNoButtonsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    _compView_0 = new import14.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'btn btn-yes';
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = new import15.AcxDarkTheme(parentView.injectorGet(const import17.OpaqueToken('acxDarkTheme'), viewData.parentIndex, null));
    _MaterialButtonComponent_0_6 = new import16.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    _text_1 = new import8.Text('');
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(ctx.onYes));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import15.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_5;
    }
    if (((identical(token, import16.MaterialButtonComponent) || identical(token, import18.ButtonDirective)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_6;
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
      _MaterialButtonComponent_0_6.disabled = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.yesRaised || _ctx.raised);
    if (!identical(_expr_2, currVal_2)) {
      _MaterialButtonComponent_0_6.raised = currVal_2;
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
    final currVal_3 = (_ctx.yesText ?? '');
    if (!identical(_expr_3, currVal_3)) {
      _text_1.text = currVal_3;
      _expr_3 = currVal_3;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialYesNoButtonsComponent0)._query_yesButton_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialYesNoButtonsComponent> viewFactory_MaterialYesNoButtonsComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialYesNoButtonsComponent2(parentView, parentIndex);
}

class _ViewMaterialYesNoButtonsComponent3 extends AppView<import2.MaterialYesNoButtonsComponent> {
  import8.Element _el_0;
  import14.ViewMaterialButtonComponent0 _compView_0;
  import15.AcxDarkTheme _AcxDarkTheme_0_5;
  import16.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import8.Text _text_1;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  _ViewMaterialYesNoButtonsComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialYesNoButtonsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    _compView_0 = new import14.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'btn btn-no';
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = new import15.AcxDarkTheme(parentView.injectorGet(const import17.OpaqueToken('acxDarkTheme'), viewData.parentIndex, null));
    _MaterialButtonComponent_0_6 = new import16.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    _text_1 = new import8.Text('');
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(ctx.onNo));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import15.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_5;
    }
    if (((identical(token, import16.MaterialButtonComponent) || identical(token, import18.ButtonDirective)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_6;
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
      _MaterialButtonComponent_0_6.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.raised;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialButtonComponent_0_6.raised = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_2 = (_ctx.noText ?? '');
    if (!identical(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialYesNoButtonsComponent0)._query_noButton_1_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialYesNoButtonsComponent> viewFactory_MaterialYesNoButtonsComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialYesNoButtonsComponent3(parentView, parentIndex);
}

const List<dynamic> styles$MaterialYesNoButtonsComponentHost = const [];

class _ViewMaterialYesNoButtonsComponentHost0 extends AppView<dynamic> {
  ViewMaterialYesNoButtonsComponent0 _compView_0;
  import2.MaterialYesNoButtonsComponent _MaterialYesNoButtonsComponent_0_5;
  _ViewMaterialYesNoButtonsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialYesNoButtonsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialYesNoButtonsComponent_0_5 = new import2.MaterialYesNoButtonsComponent();
    _compView_0.create(_MaterialYesNoButtonsComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialYesNoButtonsComponent>(0, this, rootEl, _MaterialYesNoButtonsComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialYesNoButtonsComponent) && (0 == nodeIndex))) {
      return _MaterialYesNoButtonsComponent_0_5;
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

AppView viewFactory_MaterialYesNoButtonsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
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

  _ngRef.registerComponent(MaterialYesNoButtonsComponent, MaterialYesNoButtonsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
