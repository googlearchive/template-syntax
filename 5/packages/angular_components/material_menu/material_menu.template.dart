// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_menu.dart';
export 'material_menu.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_menu/menu_popup.dart';
import 'package:angular_components/material_menu/menu_popup_wrapper.dart';
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/mixins/focusable_mixin.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/material_button/material_button.template.dart' as _ref2;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref3;
import 'package:angular_components/material_menu/menu_popup.template.dart' as _ref4;
import 'package:angular_components/material_menu/menu_popup_wrapper.template.dart' as _ref5;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref6;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref7;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref8;
import 'package:angular_components/model/menu/menu.template.dart' as _ref9;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref10;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_menu.dart' as import1;
import 'dart:html' as import2;
import '../material_button/material_button.template.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import '../theme/dark_theme.dart' as import5;
import '../material_button/material_button.dart' as import6;
import '../src/material_tooltip/tooltip.dart' as import7;
import '../src/laminate/popup/popup_source_directive.dart' as import8;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/angular.dart';
import '../material_tooltip/module.dart' as import15;
import '../src/material_tooltip/tooltip_controller.dart' as import16;
import '../utils/disposer/disposer.dart' as import17;
import 'package:angular/src/core/di/opaque_token.dart' as import18;
import '../src/laminate/popup/dom_popup_source.dart' as import19;
import '../utils/angular/reference/reference.dart' as import20;
import 'package:angular/src/core/linker/template_ref.dart';
import '../button_decorator/button_decorator.dart' as import22;
import '../material_icon/material_icon.template.dart' as import23;
import '../material_icon/material_icon.dart' as import24;
import 'menu_popup.template.dart' as import25;
import 'menu_popup.dart' as import26;

const List<dynamic> styles$MaterialMenuComponent = const [];

class ViewMaterialMenuComponent0 extends AppView<import1.MaterialMenuComponent> {
  bool _query_MaterialButtonComponent_1_0_isDirty = true;
  bool _query_MenuPopupComponent_1_1_isDirty = true;
  import2.Element _el_1;
  import3.ViewMaterialButtonComponent0 _compView_1;
  ViewContainer _appEl_1;
  import5.AcxDarkTheme _AcxDarkTheme_1_8;
  import6.MaterialButtonComponent _MaterialButtonComponent_1_9;
  import7.MaterialTooltipDirective _MaterialTooltipDirective_1_10;
  import8.PopupSourceDirective _PopupSourceDirective_1_11;
  dynamic __TooltipController_1_13;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  var _expr_0;
  var _expr_1;
  bool _expr_2;
  String _expr_3;
  bool _expr_4;
  static RenderComponentType _renderType;
  ViewMaterialMenuComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import2.document.createElement('material-menu');
    _renderType ??= import13.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$MaterialMenuComponent);
    setupComponentType(_renderType);
  }
  dynamic get _TooltipController_1_13 {
    if ((this.__TooltipController_1_13 == null)) {
      (__TooltipController_1_13 = import15.createTooltipController(this.parentView.injectorGet(import16.TooltipController, this.viewData.parentIndex, null), this.parentView.injectorGet(import17.Disposer, this.viewData.parentIndex, null)));
    }
    return this.__TooltipController_1_13;
  }

  @override
  ComponentRef<import1.MaterialMenuComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    import2.Text _text_0 = new import2.Text('\n');
    parentRenderNode.append(_text_0);
    _compView_1 = new import3.ViewMaterialButtonComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    _el_1.className = 'trigger-button';
    createAttr(_el_1, 'popupSource', '');
    _appEl_1 = new ViewContainer(1, null, this, _el_1);
    _AcxDarkTheme_1_8 = new import5.AcxDarkTheme(parentView.injectorGet(const import18.OpaqueToken('acxDarkTheme'), viewData.parentIndex, null));
    _MaterialButtonComponent_1_9 = new import6.MaterialButtonComponent(_el_1, _AcxDarkTheme_1_8, _compView_1.ref, null);
    _MaterialTooltipDirective_1_10 = new import7.MaterialTooltipDirective(parentView.injectorGet(import19.DomPopupSourceFactory, viewData.parentIndex), _appEl_1, _el_1, _appEl_1, _compView_1.ref, parentView.injectorGet(import2.Window, viewData.parentIndex));
    _PopupSourceDirective_1_11 = new import8.PopupSourceDirective(parentView.injectorGet(import19.DomPopupSourceFactory, viewData.parentIndex), _el_1, parentView.injectorGet(import20.ReferenceDirective, viewData.parentIndex, null));
    import2.Text _text_2 = new import2.Text('\n  ');
    var _anchor_3 = ngAnchor.clone(false);
    _appEl_3 = new ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_MaterialMenuComponent1);
    _NgIf_3_9 = new NgIf(_appEl_3, _TemplateRef_3_8);
    import2.Text _text_4 = new import2.Text('\n  ');
    var _anchor_5 = ngAnchor.clone(false);
    _appEl_5 = new ViewContainer(5, 1, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = new TemplateRef(_appEl_5, viewFactory_MaterialMenuComponent2);
    _NgIf_5_9 = new NgIf(_appEl_5, _TemplateRef_5_8);
    import2.Text _text_6 = new import2.Text('\n  ');
    import2.Text _text_7 = new import2.Text('\n');
    _compView_1.create(_MaterialButtonComponent_1_9, [
      <dynamic>[_text_2, _appEl_3, _text_4, _appEl_5, _text_6]..addAll(projectableNodes[0])..addAll([_text_7])
    ]);
    import2.Text _text_8 = new import2.Text('\n');
    parentRenderNode.append(_text_8);
    var _anchor_9 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_9);
    _appEl_9 = new ViewContainer(9, null, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = new TemplateRef(_appEl_9, viewFactory_MaterialMenuComponent3);
    _NgIf_9_9 = new NgIf(_appEl_9, _TemplateRef_9_8);
    import2.Text _text_10 = new import2.Text('\n');
    parentRenderNode.append(_text_10);
    final subscription_0 = _MaterialButtonComponent_1_9.trigger.listen(eventHandler0(ctx.handleButtonClick));
    ctx.button = _MaterialButtonComponent_1_9;
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.AcxDarkTheme) && ((1 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _AcxDarkTheme_1_8;
    }
    if (((identical(token, import6.MaterialButtonComponent) || identical(token, import22.ButtonDirective)) && ((1 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _MaterialButtonComponent_1_9;
    }
    if ((identical(token, import16.TooltipController) && ((1 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _TooltipController_1_13;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialMenuComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_2 = _ctx.disabled;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialButtonComponent_1_9.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_3 = _ctx.tooltipText;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialTooltipDirective_1_10.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.hasTooltip;
    if (!identical(_expr_4, currVal_4)) {
      _MaterialTooltipDirective_1_10.canShow = currVal_4;
      _expr_4 = currVal_4;
    }
    if (firstCheck) {
      _MaterialTooltipDirective_1_10.ngOnInit();
    }
    _NgIf_3_9.ngIf = (_ctx.menu.uiIcon != null);
    _NgIf_5_9.ngIf = (_ctx.buttonText != null);
    _NgIf_9_9.ngIf = _ctx.hasSubmenu;
    _appEl_1.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    if (_query_MenuPopupComponent_1_1_isDirty) {
      ctx.menuPopup = (_appEl_9.mapNestedViews((_ViewMaterialMenuComponent3 nestedView) {
        return [nestedView._MenuPopupComponent_0_5];
      }).isNotEmpty
          ? _appEl_9.mapNestedViews((_ViewMaterialMenuComponent3 nestedView) {
              return [nestedView._MenuPopupComponent_0_5];
            }).first
          : null);
      _query_MenuPopupComponent_1_1_isDirty = false;
    }
    final currVal_0 = _ctx.ariaLabel;
    if (!identical(_expr_0, currVal_0)) {
      setAttr(_el_1, 'aria-label', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.hasIcon;
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_1, 'icon', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    if (firstCheck) {
      _MaterialTooltipDirective_1_10.ngAfterViewInit();
    }
    if (firstCheck) {
      _PopupSourceDirective_1_11.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
    _appEl_5?.destroyNestedViews();
    _appEl_9?.destroyNestedViews();
    _compView_1?.destroy();
    _MaterialTooltipDirective_1_10.ngOnDestroy();
    _PopupSourceDirective_1_11.ngOnDestroy();
  }
}

AppView<import1.MaterialMenuComponent> viewFactory_MaterialMenuComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialMenuComponent0(parentView, parentIndex);
}

class _ViewMaterialMenuComponent1 extends AppView<import1.MaterialMenuComponent> {
  import2.Element _el_0;
  import23.ViewMaterialIconComponent0 _compView_0;
  import24.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  _ViewMaterialMenuComponent1(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMenuComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialMenuComponent> build() {
    _compView_0 = new import23.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _MaterialIconComponent_0_5 = new import24.MaterialIconComponent(_el_0);
    import2.Text _text_1 = new import2.Text('\n  ');
    _compView_0.create(_MaterialIconComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialMenuComponent _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.menu.uiIcon;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialIconComponent_0_5.icon = currVal_0;
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

AppView<import1.MaterialMenuComponent> viewFactory_MaterialMenuComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialMenuComponent1(parentView, parentIndex);
}

class _ViewMaterialMenuComponent2 extends AppView<import1.MaterialMenuComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewMaterialMenuComponent2(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMenuComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialMenuComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('span');
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialMenuComponent _ctx = ctx;
    final currVal_0 = (_ctx.buttonText ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.MaterialMenuComponent> viewFactory_MaterialMenuComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialMenuComponent2(parentView, parentIndex);
}

class _ViewMaterialMenuComponent3 extends AppView<import1.MaterialMenuComponent> {
  import2.Element _el_0;
  import25.ViewMenuPopupComponent0 _compView_0;
  import26.MenuPopupComponent _MenuPopupComponent_0_5;
  import8.PopupSourceDirective _PopupSourceDirective_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  _ViewMaterialMenuComponent3(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMenuComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialMenuComponent> build() {
    _compView_0 = new import25.ViewMenuPopupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _MenuPopupComponent_0_5 = new import26.MenuPopupComponent();
    _PopupSourceDirective_0_6 = new import8.PopupSourceDirective(parentView.injectorGet(import19.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import20.ReferenceDirective, viewData.parentIndex, null));
    import2.Text _text_1 = new import2.Text('\n  ');
    import2.Text _text_2 = new import2.Text('\n');
    _compView_0.create(_MenuPopupComponent_0_5, [
      <dynamic>[_text_1]..addAll(projectableNodes[1])..addAll([_text_2])
    ]);
    final subscription_0 = _MenuPopupComponent_0_5.isExpandedChange.listen(eventHandler1(_handle_isExpandedChange_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialMenuComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_toggle = (parentView as ViewMaterialMenuComponent0)._PopupSourceDirective_1_11;
    changed = false;
    final currVal_0 = _ctx.menu;
    if (!identical(_expr_0, currVal_0)) {
      _MenuPopupComponent_0_5.menu = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.preferredPositions;
    if (!identical(_expr_1, currVal_1)) {
      _MenuPopupComponent_0_5.preferredPositions = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.isExpanded;
    if (!identical(_expr_2, currVal_2)) {
      _MenuPopupComponent_0_5.isExpanded = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.width;
    if (!identical(_expr_3, currVal_3)) {
      _MenuPopupComponent_0_5.width = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = local_toggle;
    if (!identical(_expr_4, currVal_4)) {
      _MenuPopupComponent_0_5.popupSource = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if (firstCheck) {
      _PopupSourceDirective_0_6.ngAfterViewInit();
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialMenuComponent0)._query_MenuPopupComponent_1_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _PopupSourceDirective_0_6.ngOnDestroy();
  }

  void _handle_isExpandedChange_0_0($event) {
    ctx.isExpanded = $event;
  }
}

AppView<import1.MaterialMenuComponent> viewFactory_MaterialMenuComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialMenuComponent3(parentView, parentIndex);
}

const List<dynamic> styles$MaterialMenuComponentHost = const [];

class _ViewMaterialMenuComponentHost0 extends AppView<dynamic> {
  ViewMaterialMenuComponent0 _compView_0;
  import1.MaterialMenuComponent _MaterialMenuComponent_0_5;
  _ViewMaterialMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialMenuComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialMenuComponent_0_5 = new import1.MaterialMenuComponent();
    _compView_0.create(_MaterialMenuComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.MaterialMenuComponent>(0, this, rootEl, _MaterialMenuComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialMenuComponent_0_5.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialMenuComponent_0_5.ngOnDestroy();
  }
}

AppView viewFactory_MaterialMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialMenuComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.MaterialMenuComponent> MaterialMenuComponentNgFactory = const ComponentFactory<import1.MaterialMenuComponent>('material-menu', viewFactory_MaterialMenuComponentHost0, _MaterialMenuComponentMetadata);
const _MaterialMenuComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialMenuComponent, MaterialMenuComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
}
