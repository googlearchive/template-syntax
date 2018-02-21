// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_expansionpanel.dart';
export 'material_expansionpanel.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/content/deferred_content_aware.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.dart';
import 'package:angular_components/model/action/async_action.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref4;
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart' as _ref5;
import 'package:angular_components/model/action/async_action.template.dart' as _ref6;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref7;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref8;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_expansionpanel.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import '../material_yes_no_buttons/material_yes_no_buttons.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/element_ref.dart';
import '../button_decorator/button_decorator.template.dart' as import15;
import '../button_decorator/button_decorator.dart' as import16;
import '../material_icon/material_icon.template.dart' as import17;
import '../material_icon/material_icon.dart' as import18;
import '../material_yes_no_buttons/material_yes_no_buttons.template.dart' as import19;
import 'package:angular/src/core/zone/ng_zone.dart' as import20;
import '../utils/browser/dom_service/dom_service.dart' as import21;
import '../content/deferred_content_aware.dart' as import22;

const List<dynamic> styles$MaterialExpansionPanel = const [import0.styles];

class ViewMaterialExpansionPanel0 extends AppView<import2.MaterialExpansionPanel> {
  final import3.QueryList _viewQuery_mainPanel_0 = new import3.QueryList();
  final import3.QueryList _viewQuery_mainContent_1 = new import3.QueryList();
  final import3.QueryList _viewQuery_contentWrapper_2 = new import3.QueryList();
  final import3.QueryList _viewQuery_expandCollapseButton_3 = new import3.QueryList();
  import4.DivElement _el_0;
  import5.KeyUpBoundaryDirective _KeyUpBoundaryDirective_0_4;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  import4.Element _el_2;
  import4.DivElement _el_3;
  import4.DivElement _el_4;
  import4.DivElement _el_5;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_7;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_7;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_7;
  var _expr_0;
  var _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_5;
  bool _expr_6;
  static RenderComponentType _renderType;
  ViewMaterialExpansionPanel0(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import4.document.createElement('material-expansionpanel');
    _renderType ??= import11.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialExpansionPanel);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final import4.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import4.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'panel themeable';
    createAttr(_el_0, 'keyupBoundary', '');
    createAttr(_el_0, 'role', 'group');
    addShimC(_el_0);
    _KeyUpBoundaryDirective_0_4 = new import5.KeyUpBoundaryDirective(_el_0);
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MaterialExpansionPanel1);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    _el_2 = createAndAppend(doc, 'main', _el_0);
    addShimE(_el_2);
    _el_3 = createDivAndAppend(doc, _el_2);
    addShimC(_el_3);
    _el_4 = createDivAndAppend(doc, _el_3);
    _el_4.className = 'content-wrapper';
    addShimC(_el_4);
    _el_5 = createDivAndAppend(doc, _el_4);
    _el_5.className = 'content';
    addShimC(_el_5);
    project(_el_5, 2);
    var _anchor_6 = ngAnchor.clone(false);
    _el_4.append(_anchor_6);
    _appEl_6 = new ViewContainer(6, 4, this, _anchor_6);
    TemplateRef _TemplateRef_6_6 = new TemplateRef(_appEl_6, viewFactory_MaterialExpansionPanel4);
    _NgIf_6_7 = new NgIf(_appEl_6, _TemplateRef_6_6);
    var _anchor_7 = ngAnchor.clone(false);
    _el_3.append(_anchor_7);
    _appEl_7 = new ViewContainer(7, 3, this, _anchor_7);
    TemplateRef _TemplateRef_7_6 = new TemplateRef(_appEl_7, viewFactory_MaterialExpansionPanel5);
    _NgIf_7_7 = new NgIf(_appEl_7, _TemplateRef_7_6);
    var _anchor_8 = ngAnchor.clone(false);
    _el_3.append(_anchor_8);
    _appEl_8 = new ViewContainer(8, 3, this, _anchor_8);
    TemplateRef _TemplateRef_8_6 = new TemplateRef(_appEl_8, viewFactory_MaterialExpansionPanel6);
    _NgIf_8_7 = new NgIf(_appEl_8, _TemplateRef_8_6);
    _viewQuery_mainPanel_0.reset([new ElementRef(_el_2)]);
    ctx.mainPanel = _viewQuery_mainPanel_0.first;
    _viewQuery_mainContent_1.reset([new ElementRef(_el_3)]);
    ctx.mainContent = _viewQuery_mainContent_1.first;
    _viewQuery_contentWrapper_2.reset([new ElementRef(_el_4)]);
    ctx.contentWrapper = _viewQuery_contentWrapper_2.first;
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.KeyUpBoundaryDirective) && ((0 <= nodeIndex) && (nodeIndex <= 8)))) {
      return _KeyUpBoundaryDirective_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    _NgIf_1_7.ngIf = (!_ctx.isExpanded || !_ctx.hideExpandedHeader);
    _NgIf_6_7.ngIf = _ctx.shouldShowHiddenHeaderExpandIcon;
    _NgIf_7_7.ngIf = !_ctx.showSaveCancel;
    _NgIf_8_7.ngIf = _ctx.showSaveCancel;
    _appEl_1.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_8.detectChangesInNestedViews();
    if (_viewQuery_expandCollapseButton_3.dirty) {
      _viewQuery_expandCollapseButton_3.reset([
        _appEl_1.mapNestedViews((_ViewMaterialExpansionPanel1 nestedView) {
          return [nestedView._ButtonDirective_0_4.instance];
        }),
        _appEl_6.mapNestedViews((_ViewMaterialExpansionPanel4 nestedView) {
          return [nestedView._ButtonDirective_0_4.instance];
        })
      ]);
      ctx.expandCollapse = _viewQuery_expandCollapseButton_3.first;
    }
    final currVal_0 = _ctx.name;
    if (!identical(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-label', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isExpanded;
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_0, 'aria-expanded', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.isExpanded;
    if (!identical(_expr_2, currVal_2)) {
      updateClass(_el_0, 'open', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.anotherExpanded;
    if (!identical(_expr_3, currVal_3)) {
      updateClass(_el_0, 'background', currVal_3);
      _expr_3 = currVal_3;
    }
    final bool currVal_5 = !_ctx.isExpanded;
    if (!identical(_expr_5, currVal_5)) {
      updateClass(_el_2, 'hidden', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.hideExpandedHeader;
    if (!identical(_expr_6, currVal_6)) {
      updateClass(_el_4, 'hidden-header', currVal_6);
      _expr_6 = currVal_6;
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_6?.destroyNestedViews();
    _appEl_7?.destroyNestedViews();
    _appEl_8?.destroyNestedViews();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialExpansionPanel0(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel1 extends AppView<import2.MaterialExpansionPanel> {
  import4.Element _el_0;
  import15.ButtonDirectiveNgCd _ButtonDirective_0_4;
  import4.DivElement _el_1;
  import4.Element _el_2;
  import4.Text _text_3;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_7;
  import4.DivElement _el_5;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_7;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  bool _expr_3;
  var _expr_4;
  _ViewMaterialExpansionPanel1(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('header');
    createAttr(_el_0, 'buttonDecorator', '');
    createAttr(_el_0, 'role', 'button');
    addShimE(_el_0);
    _ButtonDirective_0_4 = new import15.ButtonDirectiveNgCd(new import16.ButtonDirective(_el_0));
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'panel-name';
    addShimC(_el_1);
    _el_2 = createAndAppend(doc, 'p', _el_1);
    _el_2.className = 'primary-text';
    addShimE(_el_2);
    _text_3 = new import4.Text('');
    _el_2.append(_text_3);
    var _anchor_4 = ngAnchor.clone(false);
    _el_1.append(_anchor_4);
    _appEl_4 = new ViewContainer(4, 1, this, _anchor_4);
    TemplateRef _TemplateRef_4_6 = new TemplateRef(_appEl_4, viewFactory_MaterialExpansionPanel2);
    _NgIf_4_7 = new NgIf(_appEl_4, _TemplateRef_4_6);
    project(_el_1, 0);
    _el_5 = createDivAndAppend(doc, _el_0);
    _el_5.className = 'panel-description';
    addShimC(_el_5);
    project(_el_5, 1);
    var _anchor_6 = ngAnchor.clone(false);
    _el_0.append(_anchor_6);
    _appEl_6 = new ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_6 = new TemplateRef(_appEl_6, viewFactory_MaterialExpansionPanel3);
    _NgIf_6_7 = new NgIf(_appEl_6, _TemplateRef_6_6);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_4.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_4.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_4.instance.trigger.listen(eventHandler0(ctx.handleHeaderClick));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.ButtonDirective) && ((0 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _ButtonDirective_0_4.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    final currVal_3 = _ctx.disabled;
    if (!identical(_expr_3, currVal_3)) {
      _ButtonDirective_0_4.instance.disabled = currVal_3;
      _expr_3 = currVal_3;
    }
    _NgIf_4_7.ngIf = (_ctx.secondaryText != null);
    _NgIf_6_7.ngIf = _ctx.shouldShowExpandIcon;
    _appEl_4.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    final bool currVal_0 = !_ctx.isExpanded;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'closed', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disableHeaderExpansion;
    if (!identical(_expr_1, currVal_1)) {
      updateClass(_el_0, 'disable-header-expansion', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.headerMsg;
    if (!identical(_expr_2, currVal_2)) {
      setAttr(_el_0, 'aria-label', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    _ButtonDirective_0_4.detectHostChanges(this, _el_0);
    final currVal_4 = (_ctx.name ?? '');
    if (!identical(_expr_4, currVal_4)) {
      _text_3.text = currVal_4;
      _expr_4 = currVal_4;
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialExpansionPanel0)._viewQuery_expandCollapseButton_3.setDirty();
  }

  @override
  void destroyInternal() {
    _appEl_4?.destroyNestedViews();
    _appEl_6?.destroyNestedViews();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialExpansionPanel1(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel2 extends AppView<import2.MaterialExpansionPanel> {
  import4.Element _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewMaterialExpansionPanel2(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('p');
    _el_0.className = 'secondary-text';
    addShimE(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    final currVal_0 = (_ctx.secondaryText ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialExpansionPanel2(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel3 extends AppView<import2.MaterialExpansionPanel> {
  import4.Element _el_0;
  import17.ViewMaterialIconComponent0 _compView_0;
  import15.ButtonDirectiveNgCd _ButtonDirective_0_4;
  import18.MaterialIconComponent _MaterialIconComponent_0_5;
  bool _expr_0;
  var _expr_1;
  _ViewMaterialExpansionPanel3(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = new import17.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'expand-button';
    createAttr(_el_0, 'role', 'button');
    addShimC(_el_0);
    _ButtonDirective_0_4 = new import15.ButtonDirectiveNgCd(new import16.ButtonDirective(_el_0));
    _MaterialIconComponent_0_5 = new import18.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_5, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_4.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_4.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_4.instance.trigger.listen(eventHandler0(ctx.handleExpandIconClick));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_4.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_1 = _ctx.expandIcon;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialIconComponent_0_5.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.shouldFlipExpandIcon;
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'expand-more', currVal_0);
      _expr_0 = currVal_0;
    }
    _ButtonDirective_0_4.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialExpansionPanel3(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel4 extends AppView<import2.MaterialExpansionPanel> {
  import4.Element _el_0;
  import17.ViewMaterialIconComponent0 _compView_0;
  import15.ButtonDirectiveNgCd _ButtonDirective_0_4;
  import18.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  var _expr_1;
  _ViewMaterialExpansionPanel4(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = new import17.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'expand-button';
    createAttr(_el_0, 'role', 'button');
    addShimC(_el_0);
    _ButtonDirective_0_4 = new import15.ButtonDirectiveNgCd(new import16.ButtonDirective(_el_0));
    _MaterialIconComponent_0_5 = new import18.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_5, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_4.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_4.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_4.instance.trigger.listen(eventHandler0(ctx.collapse));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_4.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_1 = _ctx.expandIcon;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialIconComponent_0_5.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.closePanelMsg;
    if (!identical(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-label', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    _ButtonDirective_0_4.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialExpansionPanel0)._viewQuery_expandCollapseButton_3.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel4(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialExpansionPanel4(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel5 extends AppView<import2.MaterialExpansionPanel> {
  import4.DivElement _el_0;
  _ViewMaterialExpansionPanel5(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'toolbelt';
    addShimC(_el_0);
    project(_el_0, 3);
    init0(_el_0);
    return null;
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel5(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialExpansionPanel5(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel6 extends AppView<import2.MaterialExpansionPanel> {
  import4.Element _el_0;
  import19.ViewMaterialYesNoButtonsComponent0 _compView_0;
  import5.MaterialYesNoButtonsComponent _MaterialYesNoButtonsComponent_0_4;
  import5.EnterAcceptsDirective _EnterAcceptsDirective_0_5;
  String _expr_0;
  String _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  _ViewMaterialExpansionPanel6(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = new import19.ViewMaterialYesNoButtonsComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'action-buttons';
    createAttr(_el_0, 'reverse', '');
    addShimC(_el_0);
    _MaterialYesNoButtonsComponent_0_4 = new import5.MaterialYesNoButtonsComponent();
    _EnterAcceptsDirective_0_5 = new import5.EnterAcceptsDirective(_MaterialYesNoButtonsComponent_0_4, _el_0, (parentView as ViewMaterialExpansionPanel0)._KeyUpBoundaryDirective_0_4);
    _compView_0.create(_MaterialYesNoButtonsComponent_0_4, []);
    final subscription_0 = _MaterialYesNoButtonsComponent_0_4.yes.listen(eventHandler0(ctx.doSave));
    final subscription_1 = _MaterialYesNoButtonsComponent_0_4.no.listen(eventHandler0(ctx.doCancel));
    init([_el_0], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.MaterialYesNoButtonsComponent) && (0 == nodeIndex))) {
      return _MaterialYesNoButtonsComponent_0_4;
    }
    if ((identical(token, import5.EnterAcceptsDirective) && (0 == nodeIndex))) {
      return _EnterAcceptsDirective_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.saveText;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialYesNoButtonsComponent_0_4.yesText = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.cancelText;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialYesNoButtonsComponent_0_4.noText = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.saveDisabled;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialYesNoButtonsComponent_0_4.yesDisabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.activeSaveCancelAction;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialYesNoButtonsComponent_0_4.pending = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_4 = _ctx.enterAccepts;
    if (!identical(_expr_4, currVal_4)) {
      _EnterAcceptsDirective_0_5.enterAccepts = currVal_4;
      _expr_4 = currVal_4;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _EnterAcceptsDirective_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel6(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialExpansionPanel6(parentView, parentIndex);
}

const List<dynamic> styles$MaterialExpansionPanelHost = const [];

class _ViewMaterialExpansionPanelHost0 extends AppView<dynamic> {
  ViewMaterialExpansionPanel0 _compView_0;
  import2.MaterialExpansionPanel _MaterialExpansionPanel_0_4;
  final import3.QueryList _query_AutoFocusDirective_0_0 = new import3.QueryList();
  _ViewMaterialExpansionPanelHost0(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialExpansionPanel0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialExpansionPanel_0_4 = new import2.MaterialExpansionPanel(this.injectorGet(import20.NgZone, viewData.parentIndex), _compView_0.ref, this.injectorGet(import21.DomService, viewData.parentIndex));
    _query_AutoFocusDirective_0_0.reset([]);
    _MaterialExpansionPanel_0_4.autoFocusChild = _query_AutoFocusDirective_0_0.first;
    _compView_0.create(_MaterialExpansionPanel_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialExpansionPanel>(0, this, rootEl, _MaterialExpansionPanel_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.MaterialExpansionPanel) || identical(token, import22.DeferredContentAware)) && (0 == nodeIndex))) {
      return _MaterialExpansionPanel_0_4;
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
    if (firstCheck) {
      _MaterialExpansionPanel_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialExpansionPanel_0_4.ngOnDestroy();
  }
}

AppView viewFactory_MaterialExpansionPanelHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialExpansionPanelHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialExpansionPanel> MaterialExpansionPanelNgFactory = const ComponentFactory<import2.MaterialExpansionPanel>('material-expansionpanel', viewFactory_MaterialExpansionPanelHost0, _MaterialExpansionPanelMetadata);
const _MaterialExpansionPanelMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialExpansionPanel, MaterialExpansionPanelNgFactory);
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
