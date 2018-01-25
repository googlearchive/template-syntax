// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_fab_menu.dart';
export 'material_fab_menu.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/enums/alignment.dart';
import 'package:angular_components/laminate/popup/popup.dart';
import 'package:angular_components/material_button/material_fab.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_list/material_list_item.dart';
import 'package:angular_components/material_menu/menu_root.dart';
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/mixins/track_layout_changes.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/model/observable/observable.dart';
import 'menu_item_groups.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'menu_item_groups.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref4;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref5;
import 'package:angular_components/material_button/material_fab.template.dart' as _ref6;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref7;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref8;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref9;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref10;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref11;
import 'package:angular_components/mixins/track_layout_changes.template.dart' as _ref12;
import 'package:angular_components/model/menu/menu.template.dart' as _ref13;
import 'package:angular_components/model/observable/observable.template.dart' as _ref14;

import 'package:angular_components/material_menu/material_fab_menu.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_fab_menu.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import '../material_button/material_fab.template.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import '../material_button/material_fab.dart' as import7;
import '../src/material_tooltip/tooltip.dart' as import8;
import '../src/laminate/popup/popup_source_directive.dart' as import9;
import '../material_icon/material_icon.template.dart' as import10;
import '../material_icon/material_icon.dart' as import11;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import14;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import16;
import 'package:angular/angular.dart';
import '../material_tooltip/module.dart' as import18;
import '../src/material_tooltip/tooltip_controller.dart' as import19;
import '../utils/disposer/disposer.dart' as import20;
import '../src/laminate/popup/dom_popup_source.dart' as import21;
import '../utils/angular/reference/reference.dart' as import22;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/element_ref.dart';
import '../material_popup/material_popup.template.dart' as import25;
import '../material_popup/material_popup.dart' as import26;
import '../content/deferred_content.dart' as import27;
import '../src/laminate/popup/popup_hierarchy.dart' as import28;
import 'package:angular/src/core/zone/ng_zone.dart' as import29;
import '../src/laminate/overlay/overlay_service.dart' as import30;
import '../laminate/overlay/zindexer.dart' as import31;
import 'package:angular/src/core/di/opaque_token.dart' as import32;
import '../src/laminate/popup/popup_size_provider.dart' as import33;
import '../mixins/material_dropdown_base.dart' as import34;
import '../src/laminate/popup/popup_ref.dart' as import35;
import '../content/deferred_content_aware.dart' as import36;
import '../material_list/material_list_item.template.dart' as import37;
import '../material_list/material_list_item.dart' as import38;
import 'menu_item_groups.template.dart' as import39;
import '../focus/focus.dart' as import40;
import 'menu_root.dart' as import41;
import 'menu_item_groups.dart' as import42;
import '../utils/browser/dom_service/dom_service.dart' as import43;
import '../laminate/components/modal/modal.dart' as import44;
import '../utils/id_generator/id_generator.dart' as import45;

const List<dynamic> styles$MaterialFabMenuComponent = const [import0.styles];

class ViewMaterialFabMenuComponent0 extends AppView<import2.MaterialFabMenuComponent> {
  final import3.QueryList _viewQuery_content_0 = new import3.QueryList();
  import4.Element _el_1;
  import5.ViewMaterialFabComponent0 _compView_1;
  ViewContainer _appEl_1;
  import7.MaterialFabComponent _MaterialFabComponent_1_6;
  import8.MaterialTooltipDirective _MaterialTooltipDirective_1_7;
  import9.PopupSourceDirective _PopupSourceDirective_1_8;
  dynamic __TooltipController_1_9;
  import4.Element _el_3;
  import10.ViewMaterialIconComponent0 _compView_3;
  import11.MaterialIconComponent _MaterialIconComponent_3_4;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_7;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  String _expr_6;
  bool _expr_7;
  var _expr_8;
  static RenderComponentType _renderType;
  ViewMaterialFabMenuComponent0(AppView<dynamic> parentView, num parentIndex) : super(import14.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import4.document.createElement('material-fab-menu');
    _renderType ??= import16.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialFabMenuComponent);
    setupComponentType(_renderType);
  }
  dynamic get _TooltipController_1_9 {
    if ((this.__TooltipController_1_9 == null)) {
      (__TooltipController_1_9 = import18.createTooltipController(this.parentView.injectorGet(import19.TooltipController, this.viewData.parentIndex, null), this.parentView.injectorGet(import20.Disposer, this.viewData.parentIndex, null)));
    }
    return this.__TooltipController_1_9;
  }

  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    final import4.HtmlElement parentRenderNode = initViewRoot(rootEl);
    import4.Text _text_0 = new import4.Text('\n');
    parentRenderNode.append(_text_0);
    _compView_1 = new import5.ViewMaterialFabComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    createAttr(_el_1, 'popupSource', '');
    createAttr(_el_1, 'raised', '');
    addShimC(_el_1);
    _appEl_1 = new ViewContainer(1, null, this, _el_1);
    _MaterialFabComponent_1_6 = new import7.MaterialFabComponent(_el_1, _compView_1.ref);
    _MaterialTooltipDirective_1_7 = new import8.MaterialTooltipDirective(parentView.injectorGet(import21.DomPopupSourceFactory, viewData.parentIndex), _appEl_1, _el_1, _appEl_1, ref, parentView.injectorGet(import4.Window, viewData.parentIndex));
    _PopupSourceDirective_1_8 = new import9.PopupSourceDirective(parentView.injectorGet(import21.DomPopupSourceFactory, viewData.parentIndex), _el_1, parentView.injectorGet(import22.ReferenceDirective, viewData.parentIndex, null));
    import4.Text _text_2 = new import4.Text('\n  ');
    _compView_3 = new import10.ViewMaterialIconComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    addShimC(_el_3);
    _MaterialIconComponent_3_4 = new import11.MaterialIconComponent(_el_3);
    _compView_3.create(_MaterialIconComponent_3_4, []);
    import4.Text _text_4 = new import4.Text('\n');
    _compView_1.create(_MaterialFabComponent_1_6, [
      [_text_2, _el_3, _text_4]
    ]);
    import4.Text _text_5 = new import4.Text('\n');
    parentRenderNode.append(_text_5);
    var _anchor_6 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_6);
    _appEl_6 = new ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_6 = new TemplateRef(_appEl_6, viewFactory_MaterialFabMenuComponent1);
    _NgIf_6_7 = new NgIf(_appEl_6, _TemplateRef_6_6);
    import4.Text _text_7 = new import4.Text('\n');
    parentRenderNode.append(_text_7);
    final subscription_0 = _MaterialFabComponent_1_6.trigger.listen(eventHandler0(ctx.trigger));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import9.PopupSourceDirective) && ((1 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _PopupSourceDirective_1_8;
    }
    if ((identical(token, import19.TooltipController) && ((1 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _TooltipController_1_9;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialFabMenuComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialFabComponent_1_6.raised = true;
      changed = true;
    }
    final bool currVal_3 = !_ctx.isFabEnabled;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialFabComponent_1_6.disabled = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.tooltipPositions, null)) {
        (_MaterialTooltipDirective_1_7.positions = _ctx.tooltipPositions);
      }
    }
    final currVal_6 = _ctx.tooltip;
    if (!identical(_expr_6, currVal_6)) {
      _MaterialTooltipDirective_1_7.text = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.hasTooltip;
    if (!identical(_expr_7, currVal_7)) {
      _MaterialTooltipDirective_1_7.canShow = currVal_7;
      _expr_7 = currVal_7;
    }
    if (firstCheck) {
      _MaterialTooltipDirective_1_7.ngOnInit();
    }
    changed = false;
    final currVal_8 = _ctx.glyph;
    if (!identical(_expr_8, currVal_8)) {
      _MaterialIconComponent_3_4.icon = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    _NgIf_6_7.ngIf = _ctx.hasMenu;
    _appEl_1.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    if (_viewQuery_content_0.dirty) {
      _viewQuery_content_0.reset([
        _appEl_6.mapNestedViews((_ViewMaterialFabMenuComponent1 nestedView) {
          return nestedView._appEl_2.mapNestedViews((_ViewMaterialFabMenuComponent2 nestedView) {
            return [new ElementRef(nestedView._el_0)];
          });
        })
      ]);
      ctx.contentElementRef = _viewQuery_content_0.first;
    }
    final currVal_0 = _ctx.isFabHidden;
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_1, 'invisible', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaLabel;
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_1, 'aria-label', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.naviId;
    if (!identical(_expr_2, currVal_2)) {
      setAttr(_el_1, 'navi-id', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_3.detectChanges();
    if (firstCheck) {
      _MaterialTooltipDirective_1_7.ngAfterViewInit();
    }
    if (firstCheck) {
      _PopupSourceDirective_1_8.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_6?.destroyNestedViews();
    _compView_1?.destroy();
    _compView_3?.destroy();
    _MaterialTooltipDirective_1_7.ngOnDestroy();
    _PopupSourceDirective_1_8.ngOnDestroy();
  }
}

AppView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialFabMenuComponent0(parentView, parentIndex);
}

class _ViewMaterialFabMenuComponent1 extends AppView<import2.MaterialFabMenuComponent> {
  import4.Element _el_0;
  import25.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import26.MaterialPopupComponent _MaterialPopupComponent_0_6;
  dynamic __PopupRef_0_8;
  dynamic _DeferredContentAware_0_9;
  dynamic __PopupHierarchy_0_10;
  ViewContainer _appEl_2;
  import27.DeferredContentDirective _DeferredContentDirective_2_7;
  var _expr_2;
  var _expr_3;
  bool _expr_4;
  bool _expr_5;
  _ViewMaterialFabMenuComponent1(AppView<dynamic> parentView, num parentIndex) : super(import14.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialFabMenuComponent0._renderType;
  }
  dynamic get _PopupRef_0_8 {
    if ((this.__PopupRef_0_8 == null)) {
      (__PopupRef_0_8 = import26.getResolvedPopupRef(this._MaterialPopupComponent_0_6));
    }
    return this.__PopupRef_0_8;
  }

  dynamic get _PopupHierarchy_0_10 {
    if ((this.__PopupHierarchy_0_10 == null)) {
      (__PopupHierarchy_0_10 = import26.getHierarchy(this._MaterialPopupComponent_0_6));
    }
    return this.__PopupHierarchy_0_10;
  }

  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    _compView_0 = new import25.ViewMaterialPopupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'autoDismiss', '');
    createAttr(_el_0, 'enforceSpaceConstraints', '');
    addShimC(_el_0);
    _appEl_0 = new ViewContainer(0, null, this, _el_0);
    _MaterialPopupComponent_0_6 = new import26.MaterialPopupComponent(parentView.injectorGet(import28.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import26.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import29.NgZone, viewData.parentIndex), parentView.injectorGet(import30.OverlayService, viewData.parentIndex), parentView.injectorGet(import31.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import32.OpaqueToken('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import32.OpaqueToken('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import33.PopupSizeProvider, viewData.parentIndex, null), _compView_0.ref, _appEl_0, new ElementRef(_el_0));
    _DeferredContentAware_0_9 = _MaterialPopupComponent_0_6;
    import4.Text _text_1 = new import4.Text('\n  ');
    var _anchor_2 = ngAnchor.clone(false);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_MaterialFabMenuComponent2);
    _DeferredContentDirective_2_7 = new import27.DeferredContentDirective(_appEl_2, _TemplateRef_2_6, _DeferredContentAware_0_9);
    import4.Text _text_3 = new import4.Text('\n');
    _compView_0.create(_MaterialPopupComponent_0_6, [
      const [],
      [_text_1, _appEl_2, _text_3],
      const []
    ]);
    final subscription_0 = _MaterialPopupComponent_0_6.onClose.listen(eventHandler0(ctx.onPopupClosed));
    final subscription_1 = _MaterialPopupComponent_0_6.onOpened.listen(eventHandler0(ctx.onPopupOpened));
    init([_appEl_0], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import26.MaterialPopupComponent) || identical(token, import34.DropdownHandle)) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialPopupComponent_0_6;
    }
    if ((identical(token, import35.PopupRef) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupRef_0_8;
    }
    if ((identical(token, import36.DeferredContentAware) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _DeferredContentAware_0_9;
    }
    if ((identical(token, import28.PopupHierarchy) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupHierarchy_0_10;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialFabMenuComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_source = (parentView as ViewMaterialFabMenuComponent0)._PopupSourceDirective_1_8;
    if (firstCheck) {
      _MaterialPopupComponent_0_6.autoDismiss = true;
      _MaterialPopupComponent_0_6.enforceSpaceConstraints = true;
      _MaterialPopupComponent_0_6.hasBox = false;
    }
    final currVal_2 = _ctx.preferredPopupPositions;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialPopupComponent_0_6.preferredPositions = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_source;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialPopupComponent_0_6.source = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.trackLayoutChanges;
    if (!identical(_expr_4, currVal_4)) {
      _MaterialPopupComponent_0_6.trackLayoutChanges = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.showPopup;
    if (!identical(_expr_5, currVal_5)) {
      _MaterialPopupComponent_0_6.visible = currVal_5;
      _expr_5 = currVal_5;
    }
    if (firstCheck) {
      (_DeferredContentDirective_2_7.preserveDimensions = true);
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialPopupComponent_0_6.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _compView_0?.destroy();
    _DeferredContentDirective_2_7.ngOnDestroy();
    _MaterialPopupComponent_0_6.ngOnDestroy();
  }
}

AppView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialFabMenuComponent1(parentView, parentIndex);
}

class _ViewMaterialFabMenuComponent2 extends AppView<import2.MaterialFabMenuComponent> {
  import4.DivElement _el_0;
  import4.DivElement _el_2;
  import4.Element _el_4;
  import37.ViewMaterialListItemComponent0 _compView_4;
  import38.MaterialListItemComponent _MaterialListItemComponent_4_4;
  import4.Element _el_6;
  import10.ViewMaterialIconComponent0 _compView_6;
  import11.MaterialIconComponent _MaterialIconComponent_6_4;
  import4.Element _el_9;
  import39.ViewMenuItemGroupsComponent0 _compView_9;
  import40.AutoFocusDirective _AutoFocusDirective_9_4;
  import41.MenuRootDirective _MenuRootDirective_9_5;
  dynamic _MenuRoot_9_6;
  import42.MenuItemGroupsComponent _MenuItemGroupsComponent_9_7;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  var _expr_7;
  _ViewMaterialFabMenuComponent2(AppView<dynamic> parentView, num parentIndex) : super(import14.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialFabMenuComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'menu-content';
    createAttr(_el_0, 'elevation', '2');
    addShimC(_el_0);
    import4.Text _text_1 = new import4.Text('\n    ');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, _el_0);
    _el_2.className = 'content-wrapper';
    addShimC(_el_2);
    import4.Text _text_3 = new import4.Text('\n      ');
    _el_2.append(_text_3);
    _compView_4 = new import37.ViewMaterialListItemComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    _el_2.append(_el_4);
    _el_4.className = 'close-menu item';
    addShimC(_el_4);
    _MaterialListItemComponent_4_4 = new import38.MaterialListItemComponent(_el_4, parentView.parentView.injectorGet(import43.DomService, parentView.viewData.parentIndex), (parentView as _ViewMaterialFabMenuComponent1)._MaterialPopupComponent_0_6, null, null);
    import4.Text _text_5 = new import4.Text('\n        ');
    _compView_6 = new import10.ViewMaterialIconComponent0(this, 6);
    _el_6 = _compView_6.rootEl;
    _el_6.className = 'material-list-item-primary';
    createAttr(_el_6, 'icon', 'close');
    addShimC(_el_6);
    _MaterialIconComponent_6_4 = new import11.MaterialIconComponent(_el_6);
    _compView_6.create(_MaterialIconComponent_6_4, []);
    import4.Text _text_7 = new import4.Text('\n      ');
    _compView_4.create(_MaterialListItemComponent_4_4, [
      [_text_5, _el_6, _text_7]
    ]);
    import4.Text _text_8 = new import4.Text('\n      ');
    _el_2.append(_text_8);
    _compView_9 = new import39.ViewMenuItemGroupsComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    _el_2.append(_el_9);
    createAttr(_el_9, 'autoFocus', '');
    _el_9.className = 'menu-groups';
    createAttr(_el_9, 'menu-root', '');
    createAttr(_el_9, 'preventCloseOnPressLeft', '');
    addShimC(_el_9);
    _AutoFocusDirective_9_4 = new import40.AutoFocusDirective(_el_9, parentView.parentView.injectorGet(import43.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import40.Focusable, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import44.ModalComponent, parentView.viewData.parentIndex, null), (parentView as _ViewMaterialFabMenuComponent1)._PopupRef_0_8);
    _MenuRootDirective_9_5 = new import41.MenuRootDirective((parentView as _ViewMaterialFabMenuComponent1)._MaterialPopupComponent_0_6);
    _MenuRoot_9_6 = _MenuRootDirective_9_5;
    _MenuItemGroupsComponent_9_7 = new import42.MenuItemGroupsComponent(_MenuRoot_9_6, _compView_9.ref, (parentView as _ViewMaterialFabMenuComponent1)._MaterialPopupComponent_0_6, parentView.parentView.injectorGet(import45.IdGenerator, parentView.viewData.parentIndex, null));
    import4.Text _text_10 = new import4.Text('\n      ');
    _compView_9.create(_MenuItemGroupsComponent_9_7, []);
    import4.Text _text_11 = new import4.Text('\n    ');
    _el_2.append(_text_11);
    import4.Text _text_12 = new import4.Text('\n  ');
    _el_0.append(_text_12);
    final subscription_0 = _MaterialListItemComponent_4_4.trigger.listen(eventHandler0(ctx.hideMenu));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import38.MaterialListItemComponent) && ((4 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _MaterialListItemComponent_4_4;
    }
    if ((identical(token, import41.MenuRootDirective) && ((9 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MenuRootDirective_9_5;
    }
    if ((identical(token, import41.MenuRoot) && ((9 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MenuRoot_9_6;
    }
    if ((identical(token, import42.MenuItemGroupsComponent) && ((9 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MenuItemGroupsComponent_9_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialFabMenuComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialListItemComponent_4_4.closeOnActivate = false;
      changed = true;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_6_4.icon = 'close';
      changed = true;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    if (firstCheck) {
      (_AutoFocusDirective_9_4.autoFocus = true);
    }
    if (firstCheck) {
      _AutoFocusDirective_9_4.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MenuItemGroupsComponent_9_7.preventCloseOnPressLeft = '';
      changed = true;
    }
    final currVal_7 = _ctx.menuItem.subMenu;
    if (!identical(_expr_7, currVal_7)) {
      _MenuItemGroupsComponent_9_7.menu = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    if (firstCheck) {
      _MenuItemGroupsComponent_9_7.ngOnInit();
    }
    final currVal_0 = _ctx.menuVisible;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.closing;
    if (!identical(_expr_1, currVal_1)) {
      updateClass(_el_0, 'closing', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.menuVisible;
    if (!identical(_expr_2, currVal_2)) {
      updateClass(_el_2, 'visible', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.closing;
    if (!identical(_expr_3, currVal_3)) {
      updateClass(_el_2, 'closing', currVal_3);
      _expr_3 = currVal_3;
    }
    _compView_4.detectHostChanges(firstCheck);
    _compView_4.detectChanges();
    _compView_6.detectChanges();
    _compView_9.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView.parentView as ViewMaterialFabMenuComponent0)._viewQuery_content_0.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_4?.destroy();
    _compView_6?.destroy();
    _compView_9?.destroy();
    _MaterialListItemComponent_4_4.ngOnDestroy();
    _AutoFocusDirective_9_4.ngOnDestroy();
    _MenuItemGroupsComponent_9_7.ngOnDestroy();
  }
}

AppView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialFabMenuComponent2(parentView, parentIndex);
}

const List<dynamic> styles$MaterialFabMenuComponentHost = const [];

class _ViewMaterialFabMenuComponentHost0 extends AppView<dynamic> {
  ViewMaterialFabMenuComponent0 _compView_0;
  import2.MaterialFabMenuComponent _MaterialFabMenuComponent_0_4;
  _ViewMaterialFabMenuComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import14.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialFabMenuComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialFabMenuComponent_0_4 = new import2.MaterialFabMenuComponent(_compView_0.ref);
    _compView_0.create(_MaterialFabMenuComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialFabMenuComponent>(0, this, rootEl, _MaterialFabMenuComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialFabMenuComponent) && (0 == nodeIndex))) {
      return _MaterialFabMenuComponent_0_4;
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
    _MaterialFabMenuComponent_0_4.ngOnDestroy();
  }
}

AppView viewFactory_MaterialFabMenuComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialFabMenuComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialFabMenuComponent> MaterialFabMenuComponentNgFactory = const ComponentFactory<import2.MaterialFabMenuComponent>('material-fab-menu', viewFactory_MaterialFabMenuComponentHost0, _MaterialFabMenuComponentMetadata);
const _MaterialFabMenuComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
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
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
  _ref14.initReflector();
  _ngRef.registerComponent(
    MaterialFabMenuComponent,
    MaterialFabMenuComponentNgFactory,
  );
}
