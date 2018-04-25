// **************************************************************************
// Generator: Instance of 'Compiler'
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
import 'dart:html' as import3;
import '../material_yes_no_buttons/material_yes_no_buttons.dart' as import4;
import '../button_decorator/button_decorator.template.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/angular.dart';
import '../button_decorator/button_decorator.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import '../material_icon/material_icon.template.dart' as import15;
import '../material_icon/material_icon.dart' as import16;
import '../material_yes_no_buttons/material_yes_no_buttons.template.dart' as import17;
import 'package:angular/src/core/zone/ng_zone.dart' as import18;
import '../utils/browser/dom_service/dom_service.dart' as import19;
import '../content/deferred_content_aware.dart' as import20;

const List<dynamic> styles$MaterialExpansionPanel = const [import0.styles];

class ViewMaterialExpansionPanel0 extends AppView<import2.MaterialExpansionPanel> {
  bool _query_mainPanel_1_0_isDirty = true;
  bool _query_mainContent_1_1_isDirty = true;
  bool _query_contentWrapper_1_2_isDirty = true;
  bool _query_expandCollapseButton_1_3_isDirty = true;
  import3.DivElement _el_0;
  import4.KeyUpBoundaryDirective _KeyUpBoundaryDirective_0_5;
  import3.Element _el_1;
  import3.DivElement _el_2;
  import5.ButtonDirectiveNgCd _ButtonDirective_2_5;
  import3.DivElement _el_3;
  import3.Element _el_4;
  import3.Text _text_5;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  import3.DivElement _el_7;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  import3.Element _el_10;
  import3.DivElement _el_11;
  import3.DivElement _el_12;
  import3.DivElement _el_13;
  ViewContainer _appEl_14;
  NgIf _NgIf_14_9;
  ViewContainer _appEl_15;
  NgIf _NgIf_15_9;
  ViewContainer _appEl_16;
  NgIf _NgIf_16_9;
  var _expr_0;
  var _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  bool _expr_6;
  var _expr_7;
  bool _expr_8;
  var _expr_9;
  bool _expr_13;
  bool _expr_14;
  static RenderComponentType _renderType;
  ViewMaterialExpansionPanel0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-expansionpanel');
    _renderType ??= import11.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialExpansionPanel);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'panel themeable';
    createAttr(_el_0, 'keyupBoundary', '');
    createAttr(_el_0, 'role', 'group');
    addShimC(_el_0);
    _KeyUpBoundaryDirective_0_5 = new import4.KeyUpBoundaryDirective(_el_0);
    _el_1 = createAndAppend(doc, 'header', _el_0);
    addShimE(_el_1);
    _el_2 = createDivAndAppend(doc, _el_1);
    createAttr(_el_2, 'buttonDecorator', '');
    _el_2.className = 'header';
    addShimC(_el_2);
    _ButtonDirective_2_5 = new import5.ButtonDirectiveNgCd(new import13.ButtonDirective(_el_2, null));
    _el_3 = createDivAndAppend(doc, _el_2);
    _el_3.className = 'panel-name';
    addShimC(_el_3);
    _el_4 = createAndAppend(doc, 'p', _el_3);
    _el_4.className = 'primary-text';
    addShimE(_el_4);
    _text_5 = new import3.Text('');
    _el_4.append(_text_5);
    final _anchor_6 = createViewContainerAnchor();
    _el_3.append(_anchor_6);
    _appEl_6 = new ViewContainer(6, 3, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = new TemplateRef(_appEl_6, viewFactory_MaterialExpansionPanel1);
    _NgIf_6_9 = new NgIf(_appEl_6, _TemplateRef_6_8);
    project(_el_3, 0);
    _el_7 = createDivAndAppend(doc, _el_2);
    _el_7.className = 'panel-description';
    addShimC(_el_7);
    project(_el_7, 1);
    final _anchor_8 = createViewContainerAnchor();
    _el_2.append(_anchor_8);
    _appEl_8 = new ViewContainer(8, 2, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = new TemplateRef(_appEl_8, viewFactory_MaterialExpansionPanel2);
    _NgIf_8_9 = new NgIf(_appEl_8, _TemplateRef_8_8);
    final _anchor_9 = createViewContainerAnchor();
    _el_1.append(_anchor_9);
    _appEl_9 = new ViewContainer(9, 1, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = new TemplateRef(_appEl_9, viewFactory_MaterialExpansionPanel3);
    _NgIf_9_9 = new NgIf(_appEl_9, _TemplateRef_9_8);
    _el_10 = createAndAppend(doc, 'main', _el_0);
    addShimE(_el_10);
    _el_11 = createDivAndAppend(doc, _el_10);
    addShimC(_el_11);
    _el_12 = createDivAndAppend(doc, _el_11);
    _el_12.className = 'content-wrapper';
    addShimC(_el_12);
    _el_13 = createDivAndAppend(doc, _el_12);
    _el_13.className = 'content';
    addShimC(_el_13);
    project(_el_13, 3);
    final _anchor_14 = createViewContainerAnchor();
    _el_12.append(_anchor_14);
    _appEl_14 = new ViewContainer(14, 12, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = new TemplateRef(_appEl_14, viewFactory_MaterialExpansionPanel4);
    _NgIf_14_9 = new NgIf(_appEl_14, _TemplateRef_14_8);
    final _anchor_15 = createViewContainerAnchor();
    _el_11.append(_anchor_15);
    _appEl_15 = new ViewContainer(15, 11, this, _anchor_15);
    TemplateRef _TemplateRef_15_8 = new TemplateRef(_appEl_15, viewFactory_MaterialExpansionPanel5);
    _NgIf_15_9 = new NgIf(_appEl_15, _TemplateRef_15_8);
    final _anchor_16 = createViewContainerAnchor();
    _el_11.append(_anchor_16);
    _appEl_16 = new ViewContainer(16, 11, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = new TemplateRef(_appEl_16, viewFactory_MaterialExpansionPanel6);
    _NgIf_16_9 = new NgIf(_appEl_16, _TemplateRef_16_8);
    _el_2.addEventListener('click', eventHandler1(_ButtonDirective_2_5.instance.handleClick));
    _el_2.addEventListener('keypress', eventHandler1(_ButtonDirective_2_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_2_5.instance.trigger.listen(eventHandler0(ctx.handleHeaderClick));
    ctx.mainPanel = _el_10;
    ctx.mainContent = _el_11;
    ctx.contentWrapper = _el_12;
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.ButtonDirective) && ((2 <= nodeIndex) && (nodeIndex <= 8)))) {
      return _ButtonDirective_2_5.instance;
    }
    if ((identical(token, import4.KeyUpBoundaryDirective) && ((0 <= nodeIndex) && (nodeIndex <= 16)))) {
      return _KeyUpBoundaryDirective_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialExpansionPanel _ctx = ctx;
    final currVal_8 = _ctx.disabled;
    if (!identical(_expr_8, currVal_8)) {
      _ButtonDirective_2_5.instance.disabled = currVal_8;
      _expr_8 = currVal_8;
    }
    _NgIf_6_9.ngIf = (_ctx.secondaryText != null);
    _NgIf_8_9.ngIf = _ctx.shouldShowExpandIcon;
    _NgIf_9_9.ngIf = !_ctx.shouldShowExpandIcon;
    _NgIf_14_9.ngIf = _ctx.shouldShowHiddenHeaderExpandIcon;
    _NgIf_15_9.ngIf = !_ctx.showSaveCancel;
    _NgIf_16_9.ngIf = _ctx.showSaveCancel;
    _appEl_6.detectChangesInNestedViews();
    _appEl_8.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    _appEl_14.detectChangesInNestedViews();
    _appEl_15.detectChangesInNestedViews();
    _appEl_16.detectChangesInNestedViews();
    if (_query_expandCollapseButton_1_3_isDirty) {
      ctx.expandCollapse = (import11.flattenNodes([
        [_ButtonDirective_2_5.instance],
        _appEl_14.mapNestedViews((_ViewMaterialExpansionPanel4 nestedView) {
          return [nestedView._ButtonDirective_0_5.instance];
        })
      ]).isNotEmpty
          ? import11.flattenNodes([
              [_ButtonDirective_2_5.instance],
              _appEl_14.mapNestedViews((_ViewMaterialExpansionPanel4 nestedView) {
                return [nestedView._ButtonDirective_0_5.instance];
              })
            ]).first
          : null);
      _query_expandCollapseButton_1_3_isDirty = false;
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
    final currVal_4 = (_ctx.isExpanded && _ctx.hideExpandedHeader);
    if (!identical(_expr_4, currVal_4)) {
      updateClass(_el_1, 'hidden', currVal_4);
      _expr_4 = currVal_4;
    }
    final bool currVal_5 = !_ctx.isExpanded;
    if (!identical(_expr_5, currVal_5)) {
      updateClass(_el_2, 'closed', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.disableHeaderExpansion;
    if (!identical(_expr_6, currVal_6)) {
      updateClass(_el_2, 'disable-header-expansion', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.headerMsg;
    if (!identical(_expr_7, currVal_7)) {
      setAttr(_el_2, 'aria-label', currVal_7?.toString());
      _expr_7 = currVal_7;
    }
    _ButtonDirective_2_5.detectHostChanges(this, _el_2);
    final currVal_9 = (_ctx.name ?? '');
    if (!identical(_expr_9, currVal_9)) {
      _text_5.text = currVal_9;
      _expr_9 = currVal_9;
    }
    final bool currVal_13 = !_ctx.isExpanded;
    if (!identical(_expr_13, currVal_13)) {
      updateClass(_el_10, 'hidden', currVal_13);
      _expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.hideExpandedHeader;
    if (!identical(_expr_14, currVal_14)) {
      updateClass(_el_12, 'hidden-header', currVal_14);
      _expr_14 = currVal_14;
    }
  }

  @override
  void destroyInternal() {
    _appEl_6?.destroyNestedViews();
    _appEl_8?.destroyNestedViews();
    _appEl_9?.destroyNestedViews();
    _appEl_14?.destroyNestedViews();
    _appEl_15?.destroyNestedViews();
    _appEl_16?.destroyNestedViews();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialExpansionPanel0(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel1 extends AppView<import2.MaterialExpansionPanel> {
  import3.Element _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewMaterialExpansionPanel1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('p');
    _el_0.className = 'secondary-text';
    addShimE(_el_0);
    _text_1 = new import3.Text('');
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

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialExpansionPanel1(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel2 extends AppView<import2.MaterialExpansionPanel> {
  import3.Element _el_0;
  import15.ViewMaterialIconComponent0 _compView_0;
  import5.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import16.MaterialIconComponent _MaterialIconComponent_0_6;
  bool _expr_0;
  var _expr_1;
  _ViewMaterialExpansionPanel2(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = new import15.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'expand-button';
    addShimC(_el_0);
    _ButtonDirective_0_5 = new import5.ButtonDirectiveNgCd(new import13.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = new import16.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_6, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler0(ctx.handleExpandIconClick));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
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
      _MaterialIconComponent_0_6.icon = currVal_1;
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
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialExpansionPanel2(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel3 extends AppView<import2.MaterialExpansionPanel> {
  import3.DivElement _el_0;
  _ViewMaterialExpansionPanel3(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'action';
    addShimC(_el_0);
    project(_el_0, 2);
    init0(_el_0);
    return null;
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialExpansionPanel3(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel4 extends AppView<import2.MaterialExpansionPanel> {
  import3.Element _el_0;
  import15.ViewMaterialIconComponent0 _compView_0;
  import5.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import16.MaterialIconComponent _MaterialIconComponent_0_6;
  var _expr_0;
  var _expr_1;
  _ViewMaterialExpansionPanel4(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = new import15.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'expand-button';
    addShimC(_el_0);
    _ButtonDirective_0_5 = new import5.ButtonDirectiveNgCd(new import13.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = new import16.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_6, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler0(ctx.collapse));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
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
      _MaterialIconComponent_0_6.icon = currVal_1;
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
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialExpansionPanel0)._query_expandCollapseButton_1_3_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialExpansionPanel4(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel5 extends AppView<import2.MaterialExpansionPanel> {
  import3.DivElement _el_0;
  _ViewMaterialExpansionPanel5(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'toolbelt';
    addShimC(_el_0);
    project(_el_0, 4);
    init0(_el_0);
    return null;
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel5(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialExpansionPanel5(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel6 extends AppView<import2.MaterialExpansionPanel> {
  import3.Element _el_0;
  import17.ViewMaterialYesNoButtonsComponent0 _compView_0;
  import4.MaterialYesNoButtonsComponent _MaterialYesNoButtonsComponent_0_5;
  import4.EnterAcceptsDirective _EnterAcceptsDirective_0_6;
  String _expr_0;
  String _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  _ViewMaterialExpansionPanel6(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialExpansionPanel0._renderType;
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = new import17.ViewMaterialYesNoButtonsComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'action-buttons';
    createAttr(_el_0, 'reverse', '');
    addShimC(_el_0);
    _MaterialYesNoButtonsComponent_0_5 = new import4.MaterialYesNoButtonsComponent();
    _EnterAcceptsDirective_0_6 = new import4.EnterAcceptsDirective(_MaterialYesNoButtonsComponent_0_5, _el_0, (parentView as ViewMaterialExpansionPanel0)._KeyUpBoundaryDirective_0_5);
    _compView_0.create(_MaterialYesNoButtonsComponent_0_5, []);
    final subscription_0 = _MaterialYesNoButtonsComponent_0_5.yes.listen(eventHandler0(ctx.doSave));
    final subscription_1 = _MaterialYesNoButtonsComponent_0_5.no.listen(eventHandler0(ctx.doCancel));
    init([_el_0], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import4.MaterialYesNoButtonsComponent) && (0 == nodeIndex))) {
      return _MaterialYesNoButtonsComponent_0_5;
    }
    if ((identical(token, import4.EnterAcceptsDirective) && (0 == nodeIndex))) {
      return _EnterAcceptsDirective_0_6;
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
      _MaterialYesNoButtonsComponent_0_5.yesText = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.cancelText;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialYesNoButtonsComponent_0_5.noText = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.saveDisabled;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialYesNoButtonsComponent_0_5.yesDisabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.cancelDisplayed;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialYesNoButtonsComponent_0_5.noDisplayed = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.activeSaveCancelAction;
    if (!identical(_expr_4, currVal_4)) {
      _MaterialYesNoButtonsComponent_0_5.pending = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_5 = _ctx.enterAccepts;
    if (!identical(_expr_5, currVal_5)) {
      _EnterAcceptsDirective_0_6.enterAccepts = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _EnterAcceptsDirective_0_6.ngOnDestroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanel6(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialExpansionPanel6(parentView, parentIndex);
}

const List<dynamic> styles$MaterialExpansionPanelHost = const [];

class _ViewMaterialExpansionPanelHost0 extends AppView<dynamic> {
  ViewMaterialExpansionPanel0 _compView_0;
  import2.MaterialExpansionPanel _MaterialExpansionPanel_0_5;
  bool _query_AutoFocusDirective_0_0_isDirty = true;
  _ViewMaterialExpansionPanelHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialExpansionPanel0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialExpansionPanel_0_5 = new import2.MaterialExpansionPanel(this.injectorGet(import18.NgZone, viewData.parentIndex), _compView_0.ref, this.injectorGet(import19.DomService, viewData.parentIndex));
    _compView_0.create(_MaterialExpansionPanel_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialExpansionPanel>(0, this, rootEl, _MaterialExpansionPanel_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.MaterialExpansionPanel) || identical(token, import20.DeferredContentAware)) && (0 == nodeIndex))) {
      return _MaterialExpansionPanel_0_5;
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
      _MaterialExpansionPanel_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialExpansionPanel_0_5.ngOnDestroy();
  }
}

AppView viewFactory_MaterialExpansionPanelHost0(AppView<dynamic> parentView, int parentIndex) {
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
