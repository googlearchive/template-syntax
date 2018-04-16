// **************************************************************************
// Generator: Instance of 'Compiler'
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
import 'dart:html' as import3;
import '../../material_icon/material_icon.template.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'tooltip_target.dart' as import6;
import '../../material_icon/material_icon.dart' as import7;
import '../../focus/keyboard_only_focus_indicator.dart' as import8;
import 'paper_tooltip.template.dart' as import9;
import 'paper_tooltip.dart' as import10;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/angular.dart';
import '../laminate/popup/dom_popup_source.dart' as import16;
import '../../utils/browser/dom_service/dom_service.dart' as import17;
import '../../material_tooltip/module.dart' as import18;
import 'tooltip_controller.dart' as import19;
import '../../utils/disposer/disposer.dart' as import20;
import '../../content/deferred_content_aware.dart' as import21;
import '../../theme/dark_theme.dart' as import22;
import 'package:angular/src/core/di/opaque_token.dart' as import23;

const List<dynamic> styles$MaterialIconTooltipComponent = const [import0.styles];

class ViewMaterialIconTooltipComponent0 extends AppView<import2.MaterialIconTooltipComponent> {
  bool _query_tooltipRef_1_0_isDirty = true;
  import3.Element _el_1;
  import4.ViewMaterialIconComponent0 _compView_1;
  ViewContainer _appEl_1;
  import6.ClickableTooltipTargetDirective _ClickableTooltipTargetDirective_1_8;
  import7.MaterialIconComponent _MaterialIconComponent_1_9;
  import8.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_1_10;
  import3.Element _el_4;
  import9.ViewMaterialPaperTooltipComponent0 _compView_4;
  dynamic _TooltipController_4_5;
  import10.MaterialPaperTooltipComponent _MaterialPaperTooltipComponent_4_6;
  dynamic __Tooltip_4_7;
  var _expr_1;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewMaterialIconTooltipComponent0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-icon-tooltip');
    _renderType ??= import14.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialIconTooltipComponent);
    setupComponentType(_renderType);
  }
  dynamic get _Tooltip_4_7 {
    if ((this.__Tooltip_4_7 == null)) {
      (__Tooltip_4_7 = import10.getTooltipHandle(this._MaterialPaperTooltipComponent_4_6));
    }
    return this.__Tooltip_4_7;
  }

  @override
  ComponentRef<import2.MaterialIconTooltipComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    import3.Text _text_0 = new import3.Text('    ');
    parentRenderNode.append(_text_0);
    _compView_1 = new import4.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    createAttr(_el_1, 'clickableTooltipTarget', '');
    createAttr(_el_1, 'keyboardOnlyFocusIndicator', '');
    _el_1.tabIndex = 0;
    addShimC(_el_1);
    _appEl_1 = new ViewContainer(1, null, this, _el_1);
    _ClickableTooltipTargetDirective_1_8 = new import6.ClickableTooltipTargetDirective(parentView.injectorGet(import16.DomPopupSourceFactory, viewData.parentIndex), _appEl_1, _el_1, _compView_1.ref);
    _MaterialIconComponent_1_9 = new import7.MaterialIconComponent(_el_1);
    _KeyboardOnlyFocusIndicatorDirective_1_10 = new import8.KeyboardOnlyFocusIndicatorDirective(_el_1, parentView.injectorGet(import17.DomService, viewData.parentIndex));
    import3.Text _text_2 = new import3.Text('\n    ');
    _compView_1.create(_MaterialIconComponent_1_9, []);
    import3.Text _text_3 = new import3.Text('\n    ');
    parentRenderNode.append(_text_3);
    _compView_4 = new import9.ViewMaterialPaperTooltipComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    parentRenderNode.append(_el_4);
    addShimC(_el_4);
    _TooltipController_4_5 = import18.createTooltipController(parentView.injectorGet(import19.TooltipController, viewData.parentIndex, null), parentView.injectorGet(import20.Disposer, viewData.parentIndex, null));
    _MaterialPaperTooltipComponent_4_6 = new import10.MaterialPaperTooltipComponent(_TooltipController_4_5, _compView_4.ref, _el_4, null);
    import3.Text _text_5 = new import3.Text('\n      ');
    import3.Text _text_6 = new import3.Text('\n    ');
    _compView_4.create(_MaterialPaperTooltipComponent_4_6, [
      const [],
      <dynamic>[_text_5]..addAll(projectableNodes[0])..addAll([_text_6]),
      const []
    ]);
    _el_1.addEventListener('mouseover', eventHandler0(_ClickableTooltipTargetDirective_1_8.onMouseOver));
    _el_1.addEventListener('mouseleave', eventHandler0(_ClickableTooltipTargetDirective_1_8.onMouseLeave));
    _el_1.addEventListener('click', eventHandler1(_handle_click_1_2));
    _el_1.addEventListener('keypress', eventHandler1(_ClickableTooltipTargetDirective_1_8.kbTrigger));
    _el_1.addEventListener('blur', eventHandler1(_handle_blur_1_4));
    _el_1.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_1_10.resetOutline));
    _el_1.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_1_10.hideOutline));
    ctx.tooltipBehavior = _ClickableTooltipTargetDirective_1_8;
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.TooltipController) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _TooltipController_4_5;
    }
    if (((identical(token, import10.MaterialPaperTooltipComponent) || identical(token, import21.DeferredContentAware)) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialPaperTooltipComponent_4_6;
    }
    if ((identical(token, import19.Tooltip) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _Tooltip_4_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialIconTooltipComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import6.ClickableTooltipTargetDirective local_tooltipRef = _ClickableTooltipTargetDirective_1_8;
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.icon, null)) {
        _MaterialIconComponent_1_9.icon = _ctx.icon;
        changed = true;
      }
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    final currVal_3 = local_tooltipRef;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialPaperTooltipComponent_4_6.tooltipRef = currVal_3;
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
      _ClickableTooltipTargetDirective_1_8.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _compView_1?.destroy();
    _compView_4?.destroy();
    _ClickableTooltipTargetDirective_1_8.ngOnDestroy();
  }

  void _handle_click_1_2($event) {
    _ClickableTooltipTargetDirective_1_8.onClick();
    _KeyboardOnlyFocusIndicatorDirective_1_10.hideOutline();
  }

  void _handle_blur_1_4($event) {
    _ClickableTooltipTargetDirective_1_8.onBlur($event);
    _KeyboardOnlyFocusIndicatorDirective_1_10.resetOutline();
  }
}

AppView<import2.MaterialIconTooltipComponent> viewFactory_MaterialIconTooltipComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialIconTooltipComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialIconTooltipComponentHost = const [];

class _ViewMaterialIconTooltipComponentHost0 extends AppView<dynamic> {
  ViewMaterialIconTooltipComponent0 _compView_0;
  import22.AcxDarkTheme _AcxDarkTheme_0_5;
  import2.MaterialIconTooltipComponent _MaterialIconTooltipComponent_0_6;
  _ViewMaterialIconTooltipComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialIconTooltipComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AcxDarkTheme_0_5 = new import22.AcxDarkTheme(this.injectorGet(const import23.OpaqueToken('acxDarkTheme'), viewData.parentIndex, null));
    _MaterialIconTooltipComponent_0_6 = new import2.MaterialIconTooltipComponent(_AcxDarkTheme_0_5, rootEl, null, null);
    _compView_0.create(_MaterialIconTooltipComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialIconTooltipComponent>(0, this, rootEl, _MaterialIconTooltipComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.AcxDarkTheme) && (0 == nodeIndex))) {
      return _AcxDarkTheme_0_5;
    }
    if ((identical(token, import21.DeferredContentAware) && (0 == nodeIndex))) {
      return _MaterialIconTooltipComponent_0_6;
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

AppView viewFactory_MaterialIconTooltipComponentHost0(AppView<dynamic> parentView, int parentIndex) {
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
