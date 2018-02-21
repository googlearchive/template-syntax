// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'icon_tooltip.dart';
export 'icon_tooltip.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:angular_components/content/deferred_content_aware.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/theme/dark_theme.dart';
import 'paper_tooltip.dart';
import 'tooltip_target.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref1;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref2;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref3;
import 'package:angular_components/theme/dark_theme.template.dart' as _ref4;
import 'paper_tooltip.template.dart' as _ref5;
import 'tooltip_target.template.dart' as _ref6;
import 'package:angular_components/src/material_tooltip/icon_tooltip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'icon_tooltip.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import '../../material_icon/material_icon.template.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'tooltip_target.dart' as import7;
import '../../material_icon/material_icon.dart' as import8;
import '../../focus/keyboard_only_focus_indicator.dart' as import9;
import 'paper_tooltip.template.dart' as import10;
import 'paper_tooltip.dart' as import11;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/angular.dart';
import '../laminate/popup/dom_popup_source.dart' as import17;
import '../../utils/browser/dom_service/dom_service.dart' as import18;
import '../../material_tooltip/module.dart' as import19;
import 'tooltip_controller.dart' as import20;
import '../../utils/disposer/disposer.dart' as import21;
import '../../content/deferred_content_aware.dart' as import22;
import '../../theme/dark_theme.dart' as import23;
import 'package:angular/src/core/di/opaque_token.dart' as import24;

const List<dynamic> styles$MaterialIconTooltipComponent = const [import0.styles];

class ViewMaterialIconTooltipComponent0 extends AppView<import2.MaterialIconTooltipComponent> {
  final import3.QueryList _viewQuery_tooltipRef_0 = new import3.QueryList();
  import4.Element _el_1;
  import5.ViewMaterialIconComponent0 _compView_1;
  ViewContainer _appEl_1;
  import7.ClickableTooltipTargetDirective _ClickableTooltipTargetDirective_1_6;
  import8.MaterialIconComponent _MaterialIconComponent_1_7;
  import9.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_1_8;
  import4.Element _el_4;
  import10.ViewMaterialPaperTooltipComponent0 _compView_4;
  dynamic _TooltipController_4_4;
  import11.MaterialPaperTooltipComponent _MaterialPaperTooltipComponent_4_5;
  dynamic __Tooltip_4_6;
  var _expr_1;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewMaterialIconTooltipComponent0(AppView<dynamic> parentView, num parentIndex) : super(import13.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import4.document.createElement('material-icon-tooltip');
    _renderType ??= import15.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialIconTooltipComponent);
    setupComponentType(_renderType);
  }
  dynamic get _Tooltip_4_6 {
    if ((this.__Tooltip_4_6 == null)) {
      (__Tooltip_4_6 = import11.getTooltipHandle(this._MaterialPaperTooltipComponent_4_5));
    }
    return this.__Tooltip_4_6;
  }

  @override
  ComponentRef<import2.MaterialIconTooltipComponent> build() {
    final import4.HtmlElement parentRenderNode = initViewRoot(rootEl);
    import4.Text _text_0 = new import4.Text('    ');
    parentRenderNode.append(_text_0);
    _compView_1 = new import5.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    createAttr(_el_1, 'clickableTooltipTarget', '');
    createAttr(_el_1, 'keyboardOnlyFocusIndicator', '');
    _el_1.tabIndex = 0;
    addShimC(_el_1);
    _appEl_1 = new ViewContainer(1, null, this, _el_1);
    _ClickableTooltipTargetDirective_1_6 = new import7.ClickableTooltipTargetDirective(parentView.injectorGet(import17.DomPopupSourceFactory, viewData.parentIndex), _appEl_1, _el_1, ref);
    _MaterialIconComponent_1_7 = new import8.MaterialIconComponent(_el_1);
    _KeyboardOnlyFocusIndicatorDirective_1_8 = new import9.KeyboardOnlyFocusIndicatorDirective(_el_1, parentView.injectorGet(import18.DomService, viewData.parentIndex));
    import4.Text _text_2 = new import4.Text('\n    ');
    _compView_1.create(_MaterialIconComponent_1_7, []);
    import4.Text _text_3 = new import4.Text('\n    ');
    parentRenderNode.append(_text_3);
    _compView_4 = new import10.ViewMaterialPaperTooltipComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    parentRenderNode.append(_el_4);
    addShimC(_el_4);
    _TooltipController_4_4 = import19.createTooltipController(parentView.injectorGet(import20.TooltipController, viewData.parentIndex, null), parentView.injectorGet(import21.Disposer, viewData.parentIndex, null));
    _MaterialPaperTooltipComponent_4_5 = new import11.MaterialPaperTooltipComponent(_TooltipController_4_4, _compView_4.ref);
    import4.Text _text_5 = new import4.Text('\n      ');
    import4.Text _text_6 = new import4.Text('\n    ');
    _compView_4.create(_MaterialPaperTooltipComponent_4_5, [
      const [],
      <dynamic>[_text_5]..addAll(projectableNodes[0])..addAll([_text_6]),
      const []
    ]);
    _el_1.addEventListener('mouseover', eventHandler0(_ClickableTooltipTargetDirective_1_6.onMouseOver));
    _el_1.addEventListener('mouseleave', eventHandler0(_ClickableTooltipTargetDirective_1_6.onMouseLeave));
    _el_1.addEventListener('click', eventHandler1(_handle_click_1_2));
    _el_1.addEventListener('keypress', eventHandler1(_ClickableTooltipTargetDirective_1_6.kbTrigger));
    _el_1.addEventListener('blur', eventHandler1(_handle_blur_1_4));
    _el_1.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_1_8.resetOutline));
    _el_1.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_1_8.hideOutline));
    _viewQuery_tooltipRef_0.reset([_ClickableTooltipTargetDirective_1_6]);
    ctx.tooltipBehavior = _viewQuery_tooltipRef_0.first;
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import7.ClickableTooltipTargetDirective) && ((1 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _ClickableTooltipTargetDirective_1_6;
    }
    if ((identical(token, import9.KeyboardOnlyFocusIndicatorDirective) && ((1 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _KeyboardOnlyFocusIndicatorDirective_1_8;
    }
    if ((identical(token, import20.TooltipController) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _TooltipController_4_4;
    }
    if (((identical(token, import11.MaterialPaperTooltipComponent) || identical(token, import22.DeferredContentAware)) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialPaperTooltipComponent_4_5;
    }
    if ((identical(token, import20.Tooltip) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _Tooltip_4_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialIconTooltipComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_tooltipRef = _ClickableTooltipTargetDirective_1_6;
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.icon, null)) {
        _MaterialIconComponent_1_7.icon = _ctx.icon;
        changed = true;
      }
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    final currVal_3 = local_tooltipRef;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialPaperTooltipComponent_4_5.tooltipRef = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    _appEl_1.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.iconSize, null)) {
        setAttr(_el_1, 'size', _ctx.iconSize?.toString());
      }
    }
    final currVal_1 = _ctx.helpTooltipLabel;
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_1, 'aria-label', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    _compView_1.detectChanges();
    _compView_4.detectChanges();
    if (firstCheck) {
      _ClickableTooltipTargetDirective_1_6.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _compView_1?.destroy();
    _compView_4?.destroy();
    _ClickableTooltipTargetDirective_1_6.ngOnDestroy();
  }

  void _handle_click_1_2($event) {
    _ClickableTooltipTargetDirective_1_6.onClick();
    _KeyboardOnlyFocusIndicatorDirective_1_8.hideOutline();
  }

  void _handle_blur_1_4($event) {
    _ClickableTooltipTargetDirective_1_6.onBlur($event);
    _KeyboardOnlyFocusIndicatorDirective_1_8.resetOutline();
  }
}

AppView<import2.MaterialIconTooltipComponent> viewFactory_MaterialIconTooltipComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialIconTooltipComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialIconTooltipComponentHost = const [];

class _ViewMaterialIconTooltipComponentHost0 extends AppView<dynamic> {
  ViewMaterialIconTooltipComponent0 _compView_0;
  import23.AcxDarkTheme _AcxDarkTheme_0_4;
  import2.MaterialIconTooltipComponent _MaterialIconTooltipComponent_0_5;
  _ViewMaterialIconTooltipComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import13.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialIconTooltipComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AcxDarkTheme_0_4 = new import23.AcxDarkTheme(this.injectorGet(const import24.OpaqueToken('acxDarkTheme'), viewData.parentIndex, null));
    _MaterialIconTooltipComponent_0_5 = new import2.MaterialIconTooltipComponent(_AcxDarkTheme_0_4, rootEl, null, null);
    _compView_0.create(_MaterialIconTooltipComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialIconTooltipComponent>(0, this, rootEl, _MaterialIconTooltipComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import23.AcxDarkTheme) && (0 == nodeIndex))) {
      return _AcxDarkTheme_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_MaterialIconTooltipComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialIconTooltipComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialIconTooltipComponent> MaterialIconTooltipComponentNgFactory = const ComponentFactory<import2.MaterialIconTooltipComponent>('material-icon-tooltip', viewFactory_MaterialIconTooltipComponentHost0, _MaterialIconTooltipComponentMetadata);
const _MaterialIconTooltipComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialIconTooltipComponent, MaterialIconTooltipComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
