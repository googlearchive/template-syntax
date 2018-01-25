// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'menu_popup.dart';
export 'menu_popup.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/popup/popup.dart';
import 'package:angular_components/material_list/material_list.dart';
import 'package:angular_components/material_menu/menu_item_groups.dart';
import 'package:angular_components/material_menu/menu_popup_wrapper.dart';
import 'package:angular_components/material_menu/menu_root.dart';
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/model/menu/menu.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref3;
import 'package:angular_components/material_list/material_list.template.dart' as _ref4;
import 'package:angular_components/material_menu/menu_item_groups.template.dart' as _ref5;
import 'package:angular_components/material_menu/menu_popup_wrapper.template.dart' as _ref6;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref7;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref8;
import 'package:angular_components/model/menu/menu.template.dart' as _ref9;

import 'package:angular_components/material_menu/menu_popup.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'menu_popup.dart' as import2;
import 'dart:html' as import3;
import '../material_popup/material_popup.template.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import '../material_popup/material_popup.dart' as import6;
import '../content/deferred_content.dart' as import7;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/angular.dart';
import '../src/laminate/popup/popup_hierarchy.dart' as import13;
import 'package:angular/src/core/zone/ng_zone.dart' as import14;
import '../src/laminate/overlay/overlay_service.dart' as import15;
import '../laminate/overlay/zindexer.dart' as import16;
import 'package:angular/src/core/di/opaque_token.dart' as import17;
import '../src/laminate/popup/popup_size_provider.dart' as import18;
import 'package:angular/src/core/linker/element_ref.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../mixins/material_dropdown_base.dart' as import21;
import '../src/laminate/popup/popup_ref.dart' as import22;
import '../content/deferred_content_aware.dart' as import23;
import '../material_list/material_list.template.dart' as import24;
import '../material_list/material_list.dart' as import25;
import 'menu_item_groups.template.dart' as import26;
import '../focus/focus.dart' as import27;
import 'menu_root.dart' as import28;
import 'menu_item_groups.dart' as import29;
import '../utils/browser/dom_service/dom_service.dart' as import30;
import '../laminate/components/modal/modal.dart' as import31;
import '../utils/id_generator/id_generator.dart' as import32;

const List<dynamic> styles$MenuPopupComponent = const [import0.styles];

class ViewMenuPopupComponent0 extends AppView<import2.MenuPopupComponent> {
  import3.Element _el_1;
  import4.ViewMaterialPopupComponent0 _compView_1;
  ViewContainer _appEl_1;
  import6.MaterialPopupComponent _MaterialPopupComponent_1_6;
  dynamic __PopupRef_1_7;
  dynamic _DeferredContentAware_1_9;
  dynamic __PopupHierarchy_1_10;
  ViewContainer _appEl_4;
  import7.DeferredContentDirective _DeferredContentDirective_4_7;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  static RenderComponentType _renderType;
  ViewMenuPopupComponent0(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('menu-popup');
    _renderType ??= import11.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MenuPopupComponent);
    setupComponentType(_renderType);
  }
  dynamic get _PopupRef_1_7 {
    if ((this.__PopupRef_1_7 == null)) {
      (__PopupRef_1_7 = import6.getResolvedPopupRef(this._MaterialPopupComponent_1_6));
    }
    return this.__PopupRef_1_7;
  }

  dynamic get _PopupHierarchy_1_10 {
    if ((this.__PopupHierarchy_1_10 == null)) {
      (__PopupHierarchy_1_10 = import6.getHierarchy(this._MaterialPopupComponent_1_6));
    }
    return this.__PopupHierarchy_1_10;
  }

  @override
  ComponentRef<import2.MenuPopupComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    import3.Text _text_0 = new import3.Text('\n');
    parentRenderNode.append(_text_0);
    _compView_1 = new import4.ViewMaterialPopupComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    createAttr(_el_1, 'enforceSpaceConstraints', '');
    addShimC(_el_1);
    _appEl_1 = new ViewContainer(1, null, this, _el_1);
    _MaterialPopupComponent_1_6 = new import6.MaterialPopupComponent(parentView.injectorGet(import13.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import6.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import14.NgZone, viewData.parentIndex), parentView.injectorGet(import15.OverlayService, viewData.parentIndex), parentView.injectorGet(import16.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import17.OpaqueToken('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import17.OpaqueToken('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import18.PopupSizeProvider, viewData.parentIndex, null), _compView_1.ref, _appEl_1, new ElementRef(_el_1));
    _DeferredContentAware_1_9 = _MaterialPopupComponent_1_6;
    import3.Text _text_2 = new import3.Text('\n  ');
    import3.Text _text_3 = new import3.Text('\n  ');
    var _anchor_4 = ngAnchor.clone(false);
    _appEl_4 = new ViewContainer(4, 1, this, _anchor_4);
    TemplateRef _TemplateRef_4_6 = new TemplateRef(_appEl_4, viewFactory_MenuPopupComponent1);
    _DeferredContentDirective_4_7 = new import7.DeferredContentDirective(_appEl_4, _TemplateRef_4_6, _DeferredContentAware_1_9);
    import3.Text _text_5 = new import3.Text('\n');
    _compView_1.create(_MaterialPopupComponent_1_6, [
      const [],
      <dynamic>[_text_2]..addAll(projectableNodes[0])..addAll([_text_3, _appEl_4, _text_5]),
      const []
    ]);
    import3.Text _text_6 = new import3.Text('\n');
    parentRenderNode.append(_text_6);
    final subscription_0 = _MaterialPopupComponent_1_6.onVisible.listen(eventHandler1(_handle_visibleChange_1_0));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import6.MaterialPopupComponent) || identical(token, import21.DropdownHandle)) && ((1 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _MaterialPopupComponent_1_6;
    }
    if ((identical(token, import22.PopupRef) && ((1 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _PopupRef_1_7;
    }
    if ((identical(token, import23.DeferredContentAware) && ((1 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _DeferredContentAware_1_9;
    }
    if ((identical(token, import13.PopupHierarchy) && ((1 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _PopupHierarchy_1_10;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuPopupComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_MaterialPopupComponent_1_6.enforceSpaceConstraints = true);
    }
    final currVal_1 = _ctx.preferredPositions;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialPopupComponent_1_6.preferredPositions = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.popupSource;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialPopupComponent_1_6.source = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isExpanded;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialPopupComponent_1_6.visible = currVal_3;
      _expr_3 = currVal_3;
    }
    if (firstCheck) {
      (_DeferredContentDirective_4_7.preserveDimensions = true);
    }
    _appEl_1.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _compView_1.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    if (firstCheck) {
      _MaterialPopupComponent_1_6.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_4?.destroyNestedViews();
    _compView_1?.destroy();
    _DeferredContentDirective_4_7.ngOnDestroy();
    _MaterialPopupComponent_1_6.ngOnDestroy();
  }

  void _handle_visibleChange_1_0($event) {
    ctx.isExpanded = $event;
  }
}

AppView<import2.MenuPopupComponent> viewFactory_MenuPopupComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMenuPopupComponent0(parentView, parentIndex);
}

class _ViewMenuPopupComponent1 extends AppView<import2.MenuPopupComponent> {
  import3.Element _el_0;
  import24.ViewMaterialListComponent0 _compView_0;
  import25.MaterialListComponent _MaterialListComponent_0_4;
  import3.Element _el_2;
  import26.ViewMenuItemGroupsComponent0 _compView_2;
  import27.AutoFocusDirective _AutoFocusDirective_2_4;
  import28.MenuRootDirective _MenuRootDirective_2_5;
  dynamic _MenuRoot_2_6;
  import29.MenuItemGroupsComponent _MenuItemGroupsComponent_2_7;
  var _expr_0;
  var _expr_2;
  _ViewMenuPopupComponent1(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuPopupComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuPopupComponent> build() {
    _compView_0 = new import24.ViewMaterialListComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'item-group-list';
    addShimC(_el_0);
    _MaterialListComponent_0_4 = new import25.MaterialListComponent();
    import3.Text _text_1 = new import3.Text('\n    ');
    _compView_2 = new import26.ViewMenuItemGroupsComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    createAttr(_el_2, 'autoFocus', '');
    createAttr(_el_2, 'menu-root', '');
    createAttr(_el_2, 'preventCloseOnPressLeft', '');
    addShimC(_el_2);
    _AutoFocusDirective_2_4 = new import27.AutoFocusDirective(_el_2, parentView.parentView.injectorGet(import30.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import27.Focusable, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import31.ModalComponent, parentView.viewData.parentIndex, null), (parentView as ViewMenuPopupComponent0)._PopupRef_1_7);
    _MenuRootDirective_2_5 = new import28.MenuRootDirective((parentView as ViewMenuPopupComponent0)._MaterialPopupComponent_1_6);
    _MenuRoot_2_6 = _MenuRootDirective_2_5;
    _MenuItemGroupsComponent_2_7 = new import29.MenuItemGroupsComponent(_MenuRoot_2_6, _compView_2.ref, (parentView as ViewMenuPopupComponent0)._MaterialPopupComponent_1_6, parentView.parentView.injectorGet(import32.IdGenerator, parentView.viewData.parentIndex, null));
    import3.Text _text_3 = new import3.Text('\n    ');
    _compView_2.create(_MenuItemGroupsComponent_2_7, []);
    import3.Text _text_4 = new import3.Text('\n  ');
    _compView_0.create(_MaterialListComponent_0_4, [
      [_text_1, _el_2, _text_4]
    ]);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import28.MenuRootDirective) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MenuRootDirective_2_5;
    }
    if ((identical(token, import28.MenuRoot) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MenuRoot_2_6;
    }
    if ((identical(token, import29.MenuItemGroupsComponent) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MenuItemGroupsComponent_2_7;
    }
    if ((identical(token, import25.MaterialListComponent) && ((0 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _MaterialListComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuPopupComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_0 = _ctx.width;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialListComponent_0_4.width = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (_AutoFocusDirective_2_4.autoFocus = true);
    }
    if (firstCheck) {
      _AutoFocusDirective_2_4.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MenuItemGroupsComponent_2_7.preventCloseOnPressLeft = '';
      changed = true;
    }
    final currVal_2 = _ctx.menu;
    if (!identical(_expr_2, currVal_2)) {
      _MenuItemGroupsComponent_2_7.menu = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    if (firstCheck) {
      _MenuItemGroupsComponent_2_7.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_2?.destroy();
    _AutoFocusDirective_2_4.ngOnDestroy();
    _MenuItemGroupsComponent_2_7.ngOnDestroy();
  }
}

AppView<import2.MenuPopupComponent> viewFactory_MenuPopupComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMenuPopupComponent1(parentView, parentIndex);
}

const List<dynamic> styles$MenuPopupComponentHost = const [];

class _ViewMenuPopupComponentHost0 extends AppView<dynamic> {
  ViewMenuPopupComponent0 _compView_0;
  import2.MenuPopupComponent _MenuPopupComponent_0_4;
  _ViewMenuPopupComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMenuPopupComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MenuPopupComponent_0_4 = new import2.MenuPopupComponent();
    _compView_0.create(_MenuPopupComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MenuPopupComponent>(0, this, rootEl, _MenuPopupComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MenuPopupComponent) && (0 == nodeIndex))) {
      return _MenuPopupComponent_0_4;
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

AppView viewFactory_MenuPopupComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMenuPopupComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MenuPopupComponent> MenuPopupComponentNgFactory = const ComponentFactory<import2.MenuPopupComponent>('menu-popup', viewFactory_MenuPopupComponentHost0, _MenuPopupComponentMetadata);
const _MenuPopupComponentMetadata = const [];
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
  _ngRef.registerComponent(
    MenuPopupComponent,
    MenuPopupComponentNgFactory,
  );
}
