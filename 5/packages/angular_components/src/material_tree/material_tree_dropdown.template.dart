// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_tree_dropdown.dart';
export 'material_tree_dropdown.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/laminate/enums/alignment.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/src/material_tree/material_tree_filter.dart';
import 'package:angular_components/src/material_tree/material_tree_root.dart';
import 'package:angular_components/mixins/material_dropdown_base.dart';
import 'package:angular_components/model/selection/select.dart';
import 'package:angular_components/model/selection/selection_container.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/ui/has_renderer.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'material_tree_impl.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_tree_impl.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref4;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref5;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref6;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref7;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref8;
import 'package:angular_components/model/selection/select.template.dart' as _ref9;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref10;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref11;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref12;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref13;
import 'package:angular_components/src/material_tree/material_tree_filter.template.dart' as _ref14;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref15;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref16;

import 'package:angular_components/src/material_tree/material_tree_dropdown.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tree_dropdown.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import '../../focus/keyboard_only_focus_indicator.dart' as import5;
import '../laminate/popup/popup_source_directive.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../../material_popup/material_popup.template.dart' as import9;
import '../../material_popup/material_popup.dart' as import10;
import '../../content/deferred_content.dart' as import11;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/angular.dart';
import '../../utils/browser/dom_service/dom_service.dart' as import17;
import '../laminate/popup/dom_popup_source.dart' as import18;
import '../../utils/angular/reference/reference.dart' as import19;
import 'package:angular/src/core/linker/template_ref.dart';
import '../laminate/popup/popup_hierarchy.dart' as import21;
import 'package:angular/src/core/zone/ng_zone.dart' as import22;
import '../laminate/overlay/overlay_service.dart' as import23;
import '../../laminate/overlay/zindexer.dart' as import24;
import 'package:angular/src/core/di/opaque_token.dart' as import25;
import '../laminate/popup/popup_size_provider.dart' as import26;
import 'package:angular/src/core/linker/element_ref.dart';
import '../../mixins/material_dropdown_base.dart' as import28;
import '../../content/deferred_content_aware.dart' as import29;
import '../laminate/popup/popup_ref.dart' as import30;
import '../../material_icon/material_icon.template.dart' as import31;
import '../../material_icon/material_icon.dart' as import32;
import 'material_tree_filter.template.dart' as import33;
import 'material_tree_filter.dart' as import34;
import 'material_tree_root.dart' as import35;
import 'material_tree_impl.template.dart' as import36;
import 'material_tree_impl.dart' as import37;
import '../../focus/focus.dart' as import38;

const List<dynamic> styles$MaterialTreeDropdownComponent = const [import0.styles];

class ViewMaterialTreeDropdownComponent0 extends AppView<import2.MaterialTreeDropdownComponent> {
  final import3.QueryList _viewQuery_MaterialTreeFilterComponent_0 = new import3.QueryList();
  import4.DivElement _el_0;
  import5.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_4;
  import6.PopupSourceDirective _PopupSourceDirective_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_7;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_7;
  import4.Element _el_4;
  import9.ViewMaterialPopupComponent0 _compView_4;
  ViewContainer _appEl_4;
  import10.MaterialPopupComponent _MaterialPopupComponent_4_6;
  dynamic _DeferredContentAware_4_7;
  dynamic __PopupHierarchy_4_9;
  dynamic __PopupRef_4_10;
  import4.DivElement _el_5;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_7;
  ViewContainer _appEl_7;
  import11.DeferredContentDirective _DeferredContentDirective_7_7;
  bool _expr_0;
  var _expr_5;
  var _expr_6;
  bool _expr_8;
  static RenderComponentType _renderType;
  ViewMaterialTreeDropdownComponent0(AppView<dynamic> parentView, num parentIndex) : super(import13.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('material-tree-dropdown');
    _renderType ??= import15.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialTreeDropdownComponent);
    setupComponentType(_renderType);
  }
  dynamic get _PopupHierarchy_4_9 {
    if ((this.__PopupHierarchy_4_9 == null)) {
      (__PopupHierarchy_4_9 = import10.getHierarchy(this._MaterialPopupComponent_4_6));
    }
    return this.__PopupHierarchy_4_9;
  }

  dynamic get _PopupRef_4_10 {
    if ((this.__PopupRef_4_10 == null)) {
      (__PopupRef_4_10 = import10.getResolvedPopupRef(this._MaterialPopupComponent_4_6));
    }
    return this.__PopupRef_4_10;
  }

  @override
  ComponentRef<import2.MaterialTreeDropdownComponent> build() {
    final import4.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import4.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'button';
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    createAttr(_el_0, 'popupSource', '');
    addShimC(_el_0);
    _KeyboardOnlyFocusIndicatorDirective_0_4 = new import5.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.injectorGet(import17.DomService, viewData.parentIndex));
    _PopupSourceDirective_0_5 = new import6.PopupSourceDirective(parentView.injectorGet(import18.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import19.ReferenceDirective, viewData.parentIndex, null));
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MaterialTreeDropdownComponent1);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    var _anchor_2 = ngAnchor.clone(false);
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_MaterialTreeDropdownComponent2);
    _NgIf_2_7 = new NgIf(_appEl_2, _TemplateRef_2_6);
    var _anchor_3 = ngAnchor.clone(false);
    _el_0.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_6 = new TemplateRef(_appEl_3, viewFactory_MaterialTreeDropdownComponent3);
    _NgIf_3_7 = new NgIf(_appEl_3, _TemplateRef_3_6);
    _compView_4 = new import9.ViewMaterialPopupComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    parentRenderNode.append(_el_4);
    createAttr(_el_4, 'enforceSpaceConstraints', '');
    createAttr(_el_4, 'trackLayoutChanges', '');
    addShimC(_el_4);
    _appEl_4 = new ViewContainer(4, null, this, _el_4);
    _MaterialPopupComponent_4_6 = new import10.MaterialPopupComponent(parentView.injectorGet(import21.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import10.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import22.NgZone, viewData.parentIndex), parentView.injectorGet(import23.OverlayService, viewData.parentIndex), parentView.injectorGet(import24.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import25.OpaqueToken('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import25.OpaqueToken('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import26.PopupSizeProvider, viewData.parentIndex, null), _compView_4.ref, _appEl_4, new ElementRef(_el_4));
    _DeferredContentAware_4_7 = _MaterialPopupComponent_4_6;
    _el_5 = doc.createElement('div');
    createAttr(_el_5, 'header', '');
    addShimC(_el_5);
    project(_el_5, 0);
    var _anchor_6 = ngAnchor.clone(false);
    _el_5.append(_anchor_6);
    _appEl_6 = new ViewContainer(6, 5, this, _anchor_6);
    TemplateRef _TemplateRef_6_6 = new TemplateRef(_appEl_6, viewFactory_MaterialTreeDropdownComponent4);
    _NgIf_6_7 = new NgIf(_appEl_6, _TemplateRef_6_6);
    var _anchor_7 = ngAnchor.clone(false);
    _appEl_7 = new ViewContainer(7, 4, this, _anchor_7);
    TemplateRef _TemplateRef_7_6 = new TemplateRef(_appEl_7, viewFactory_MaterialTreeDropdownComponent5);
    _DeferredContentDirective_7_7 = new import11.DeferredContentDirective(_appEl_7, _TemplateRef_7_6, _DeferredContentAware_4_7);
    _compView_4.create(_MaterialPopupComponent_4_6, [
      [_el_5],
      [_appEl_7],
      const []
    ]);
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_0));
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_1));
    _el_0.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.resetOutline));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.hideOutline));
    final subscription_0 = _MaterialPopupComponent_4_6.onVisible.listen(eventHandler1(_handle_visibleChange_4_0));
    final subscription_1 = _MaterialPopupComponent_4_6.onOpened.listen(eventHandler0(ctx.focus));
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.KeyboardOnlyFocusIndicatorDirective) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _KeyboardOnlyFocusIndicatorDirective_0_4;
    }
    if ((identical(token, import6.PopupSourceDirective) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupSourceDirective_0_5;
    }
    if (((identical(token, import10.MaterialPopupComponent) || identical(token, import28.DropdownHandle)) && ((4 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _MaterialPopupComponent_4_6;
    }
    if ((identical(token, import29.DeferredContentAware) && ((4 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _DeferredContentAware_4_7;
    }
    if ((identical(token, import21.PopupHierarchy) && ((4 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _PopupHierarchy_4_9;
    }
    if ((identical(token, import30.PopupRef) && ((4 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _PopupRef_4_10;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeDropdownComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_button = _PopupSourceDirective_0_5;
    _NgIf_1_7.ngIf = !_ctx.showFilterInsideButton;
    _NgIf_2_7.ngIf = !_ctx.showFilterInsideButton;
    _NgIf_3_7.ngIf = _ctx.showFilterInsideButton;
    if (firstCheck) {
      _MaterialPopupComponent_4_6.enforceSpaceConstraints = true;
      _MaterialPopupComponent_4_6.trackLayoutChanges = true;
    }
    final currVal_5 = _ctx.popupPositions;
    if (!identical(_expr_5, currVal_5)) {
      _MaterialPopupComponent_4_6.preferredPositions = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = local_button;
    if (!identical(_expr_6, currVal_6)) {
      _MaterialPopupComponent_4_6.source = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_8 = _ctx.visible;
    if (!identical(_expr_8, currVal_8)) {
      _MaterialPopupComponent_4_6.visible = currVal_8;
      _expr_8 = currVal_8;
    }
    _NgIf_6_7.ngIf = (_ctx.supportsFiltering && _ctx.showFilterInsidePopup);
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    if (_viewQuery_MaterialTreeFilterComponent_0.dirty) {
      _viewQuery_MaterialTreeFilterComponent_0.reset([
        _appEl_3.mapNestedViews((_ViewMaterialTreeDropdownComponent3 nestedView) {
          return [nestedView._MaterialTreeFilterComponent_0_4];
        }),
        _appEl_6.mapNestedViews((_ViewMaterialTreeDropdownComponent4 nestedView) {
          return [nestedView._MaterialTreeFilterComponent_0_4];
        })
      ]);
      ctx.materialTreeFilterComponent = _viewQuery_MaterialTreeFilterComponent_0.first;
    }
    final bool currVal_0 = !_ctx.showFilterInsideButton;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'border', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_4.detectHostChanges(firstCheck);
    _compView_4.detectChanges();
    if (firstCheck) {
      _PopupSourceDirective_0_5.ngAfterViewInit();
    }
    if (firstCheck) {
      _MaterialPopupComponent_4_6.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
    _appEl_4?.destroyNestedViews();
    _appEl_6?.destroyNestedViews();
    _appEl_7?.destroyNestedViews();
    _compView_4?.destroy();
    _PopupSourceDirective_0_5.ngOnDestroy();
    _DeferredContentDirective_7_7.ngOnDestroy();
    _MaterialPopupComponent_4_6.ngOnDestroy();
  }

  void _handle_focus_0_0($event) {
    ctx.visible = true;
  }

  void _handle_click_0_1($event) {
    ctx.visible = !ctx.visible;
    _KeyboardOnlyFocusIndicatorDirective_0_4.hideOutline();
  }

  void _handle_visibleChange_4_0($event) {
    ctx.visible = $event;
  }
}

AppView<import2.MaterialTreeDropdownComponent> viewFactory_MaterialTreeDropdownComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialTreeDropdownComponent0(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent1 extends AppView<import2.MaterialTreeDropdownComponent> {
  import4.Element _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewMaterialTreeDropdownComponent1(AppView<dynamic> parentView, num parentIndex) : super(import13.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeDropdownComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'button-text';
    addShimE(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeDropdownComponent _ctx = ctx;
    final currVal_0 = import15.interpolate0(_ctx.placeholder);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialTreeDropdownComponent> viewFactory_MaterialTreeDropdownComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeDropdownComponent1(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent2 extends AppView<import2.MaterialTreeDropdownComponent> {
  import4.Element _el_0;
  import31.ViewMaterialIconComponent0 _compView_0;
  import32.MaterialIconComponent _MaterialIconComponent_0_4;
  _ViewMaterialTreeDropdownComponent2(AppView<dynamic> parentView, num parentIndex) : super(import13.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeDropdownComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent> build() {
    _compView_0 = new import31.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'icon';
    createAttr(_el_0, 'icon', 'arrow_drop_down');
    addShimC(_el_0);
    _MaterialIconComponent_0_4 = new import32.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_0_4.icon = 'arrow_drop_down';
      changed = true;
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

AppView<import2.MaterialTreeDropdownComponent> viewFactory_MaterialTreeDropdownComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeDropdownComponent2(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent3 extends AppView<import2.MaterialTreeDropdownComponent> {
  import4.Element _el_0;
  import33.ViewMaterialTreeFilterComponent0 _compView_0;
  import34.MaterialTreeFilterComponent _MaterialTreeFilterComponent_0_4;
  String _expr_0;
  var _expr_1;
  _ViewMaterialTreeDropdownComponent3(AppView<dynamic> parentView, num parentIndex) : super(import13.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeDropdownComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent> build() {
    _compView_0 = new import33.ViewMaterialTreeFilterComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialTreeFilterComponent_0_4 = new import34.MaterialTreeFilterComponent(parentView.parentView.injectorGet(import35.MaterialTreeRoot, parentView.viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeFilterComponent_0_4, []);
    final subscription_0 = _MaterialTreeFilterComponent_0_4.onFiltered.listen(eventHandler1(_handle_filter_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeDropdownComponent _ctx = ctx;
    final currVal_0 = _ctx.placeholder;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialTreeFilterComponent_0_4.placeholder = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.filterableOptions;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialTreeFilterComponent_0_4.filterable = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialTreeDropdownComponent0)._viewQuery_MaterialTreeFilterComponent_0.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }

  void _handle_filter_0_0($event) {
    ctx.visible = true;
  }
}

AppView<import2.MaterialTreeDropdownComponent> viewFactory_MaterialTreeDropdownComponent3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeDropdownComponent3(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent4 extends AppView<import2.MaterialTreeDropdownComponent> {
  import4.Element _el_0;
  import33.ViewMaterialTreeFilterComponent0 _compView_0;
  import34.MaterialTreeFilterComponent _MaterialTreeFilterComponent_0_4;
  String _expr_1;
  var _expr_2;
  _ViewMaterialTreeDropdownComponent4(AppView<dynamic> parentView, num parentIndex) : super(import13.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeDropdownComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent> build() {
    _compView_0 = new import33.ViewMaterialTreeFilterComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'search-box';
    createAttr(_el_0, 'leadingGlyph', 'search');
    addShimC(_el_0);
    _MaterialTreeFilterComponent_0_4 = new import34.MaterialTreeFilterComponent(parentView.parentView.injectorGet(import35.MaterialTreeRoot, parentView.viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeFilterComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeDropdownComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_MaterialTreeFilterComponent_0_4.leadingGlyph = 'search');
    }
    final currVal_1 = _ctx.placeholder;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialTreeFilterComponent_0_4.placeholder = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.filterableOptions;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialTreeFilterComponent_0_4.filterable = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialTreeDropdownComponent0)._viewQuery_MaterialTreeFilterComponent_0.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialTreeDropdownComponent> viewFactory_MaterialTreeDropdownComponent4(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeDropdownComponent4(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent5 extends AppView<import2.MaterialTreeDropdownComponent> {
  import4.Element _el_0;
  import36.ViewMaterialTreeComponent0 _compView_0;
  import37.MaterialTreeComponent _MaterialTreeComponent_0_4;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  _ViewMaterialTreeDropdownComponent5(AppView<dynamic> parentView, num parentIndex) : super(import13.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeDropdownComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent> build() {
    _compView_0 = new import36.ViewMaterialTreeComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialTreeComponent_0_4 = new import37.MaterialTreeComponent(parentView.parentView.injectorGet(import35.MaterialTreeRoot, parentView.viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import37.MaterialTreeComponent) || identical(token, import35.MaterialTreeRoot)) && (0 == nodeIndex))) {
      return _MaterialTreeComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeDropdownComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.expandAll;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialTreeComponent_0_4.expandAll = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.componentRenderer;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialTreeComponent_0_4.componentRenderer = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.itemRenderer;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialTreeComponent_0_4.itemRenderer = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.options;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialTreeComponent_0_4.options = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.selection;
    if (!identical(_expr_4, currVal_4)) {
      _MaterialTreeComponent_0_4.selection = currVal_4;
      _expr_4 = currVal_4;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialTreeDropdownComponent> viewFactory_MaterialTreeDropdownComponent5(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeDropdownComponent5(parentView, parentIndex);
}

const List<dynamic> styles$MaterialTreeDropdownComponentHost = const [];

class _ViewMaterialTreeDropdownComponentHost0 extends AppView<dynamic> {
  ViewMaterialTreeDropdownComponent0 _compView_0;
  import2.MaterialTreeDropdownComponent _MaterialTreeDropdownComponent_0_4;
  _ViewMaterialTreeDropdownComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import13.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialTreeDropdownComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeDropdownComponent_0_4 = new import2.MaterialTreeDropdownComponent(this.injectorGet(import17.DomService, viewData.parentIndex));
    _compView_0.create(_MaterialTreeDropdownComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialTreeDropdownComponent>(0, this, rootEl, _MaterialTreeDropdownComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import2.MaterialTreeDropdownComponent) || identical(token, import38.Focusable)) || identical(token, import35.MaterialTreeRoot)) && (0 == nodeIndex))) {
      return _MaterialTreeDropdownComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _MaterialTreeDropdownComponent_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_MaterialTreeDropdownComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeDropdownComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialTreeDropdownComponent> MaterialTreeDropdownComponentNgFactory = const ComponentFactory<import2.MaterialTreeDropdownComponent>('material-tree-dropdown', viewFactory_MaterialTreeDropdownComponentHost0, _MaterialTreeDropdownComponentMetadata);
const _MaterialTreeDropdownComponentMetadata = const [];
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
  _ref15.initReflector();
  _ref16.initReflector();
  _ngRef.registerComponent(
    MaterialTreeDropdownComponent,
    MaterialTreeDropdownComponentNgFactory,
  );
}
