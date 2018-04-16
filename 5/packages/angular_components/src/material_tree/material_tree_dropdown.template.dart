// **************************************************************************
// Generator: Instance of 'Compiler'
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
import 'dart:html' as import3;
import '../../focus/keyboard_only_focus_indicator.dart' as import4;
import '../laminate/popup/popup_source_directive.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../../material_popup/material_popup.template.dart' as import8;
import '../../material_popup/material_popup.dart' as import9;
import '../../content/deferred_content.dart' as import10;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/angular.dart';
import '../../utils/browser/dom_service/dom_service.dart' as import16;
import '../laminate/popup/dom_popup_source.dart' as import17;
import '../../utils/angular/reference/reference.dart' as import18;
import 'package:angular/src/core/linker/template_ref.dart';
import '../laminate/popup/popup_hierarchy.dart' as import20;
import 'package:angular/src/core/zone/ng_zone.dart' as import21;
import '../laminate/overlay/overlay_service.dart' as import22;
import '../../laminate/overlay/zindexer.dart' as import23;
import 'package:angular/src/core/di/opaque_token.dart' as import24;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import26;
import '../laminate/popup/popup_size_provider.dart' as import27;
import 'package:angular/src/core/linker/element_ref.dart';
import '../../content/deferred_content_aware.dart' as import29;
import '../../mixins/material_dropdown_base.dart' as import30;
import '../laminate/popup/popup_ref.dart' as import31;
import '../../material_icon/material_icon.template.dart' as import32;
import '../../material_icon/material_icon.dart' as import33;
import 'material_tree_filter.template.dart' as import34;
import 'material_tree_filter.dart' as import35;
import 'material_tree_root.dart' as import36;
import 'material_tree_impl.template.dart' as import37;
import 'material_tree_impl.dart' as import38;
import '../../focus/focus.dart' as import39;

const List<dynamic> styles$MaterialTreeDropdownComponent = const [import0.styles];

class ViewMaterialTreeDropdownComponent0 extends AppView<import2.MaterialTreeDropdownComponent> {
  bool _query_MaterialTreeFilterComponent_1_0_isDirty = true;
  import3.DivElement _el_0;
  import4.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_5;
  import5.PopupSourceDirective _PopupSourceDirective_0_6;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  import3.Element _el_4;
  import8.ViewMaterialPopupComponent0 _compView_4;
  ViewContainer _appEl_4;
  import9.MaterialPopupComponent _MaterialPopupComponent_4_8;
  dynamic __PopupHierarchy_4_11;
  dynamic __PopupRef_4_12;
  import3.DivElement _el_5;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  import10.DeferredContentDirective _DeferredContentDirective_7_9;
  bool _expr_0;
  var _expr_5;
  var _expr_6;
  bool _expr_8;
  static RenderComponentType _renderType;
  ViewMaterialTreeDropdownComponent0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('material-tree-dropdown');
    _renderType ??= import14.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialTreeDropdownComponent);
    setupComponentType(_renderType);
  }
  dynamic get _PopupHierarchy_4_11 {
    if ((this.__PopupHierarchy_4_11 == null)) {
      (__PopupHierarchy_4_11 = import9.getHierarchy(this._MaterialPopupComponent_4_8));
    }
    return this.__PopupHierarchy_4_11;
  }

  dynamic get _PopupRef_4_12 {
    if ((this.__PopupRef_4_12 == null)) {
      (__PopupRef_4_12 = import9.getResolvedPopupRef(this._MaterialPopupComponent_4_8));
    }
    return this.__PopupRef_4_12;
  }

  @override
  ComponentRef<import2.MaterialTreeDropdownComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'button';
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    createAttr(_el_0, 'popupSource', '');
    addShimC(_el_0);
    _KeyboardOnlyFocusIndicatorDirective_0_5 = new import4.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.injectorGet(import16.DomService, viewData.parentIndex));
    _PopupSourceDirective_0_6 = new import5.PopupSourceDirective(parentView.injectorGet(import17.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import18.ReferenceDirective, viewData.parentIndex, null));
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialTreeDropdownComponent1);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MaterialTreeDropdownComponent2);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    final _anchor_3 = createViewContainerAnchor();
    _el_0.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_MaterialTreeDropdownComponent3);
    _NgIf_3_9 = new NgIf(_appEl_3, _TemplateRef_3_8);
    _compView_4 = new import8.ViewMaterialPopupComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    parentRenderNode.append(_el_4);
    createAttr(_el_4, 'enforceSpaceConstraints', '');
    createAttr(_el_4, 'trackLayoutChanges', '');
    addShimC(_el_4);
    _appEl_4 = new ViewContainer(4, null, this, _el_4);
    _MaterialPopupComponent_4_8 = new import9.MaterialPopupComponent(parentView.injectorGet(import20.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import9.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import21.NgZone, viewData.parentIndex), parentView.injectorGet(import22.OverlayService, viewData.parentIndex), parentView.injectorGet(import23.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import24.OpaqueToken<List<import26.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import24.OpaqueToken('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import27.PopupSizeProvider, viewData.parentIndex, null), _compView_4.ref, _appEl_4, new ElementRef(_el_4));
    _el_5 = doc.createElement('div');
    createAttr(_el_5, 'header', '');
    addShimC(_el_5);
    project(_el_5, 0);
    final _anchor_6 = createViewContainerAnchor();
    _el_5.append(_anchor_6);
    _appEl_6 = new ViewContainer(6, 5, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = new TemplateRef(_appEl_6, viewFactory_MaterialTreeDropdownComponent4);
    _NgIf_6_9 = new NgIf(_appEl_6, _TemplateRef_6_8);
    final _anchor_7 = createViewContainerAnchor();
    _appEl_7 = new ViewContainer(7, 4, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = new TemplateRef(_appEl_7, viewFactory_MaterialTreeDropdownComponent5);
    _DeferredContentDirective_7_9 = new import10.DeferredContentDirective(_appEl_7, _TemplateRef_7_8, _MaterialPopupComponent_4_8);
    _compView_4.create(_MaterialPopupComponent_4_8, [
      [_el_5],
      [_appEl_7],
      const []
    ]);
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_0));
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_1));
    _el_0.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_5.resetOutline));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_5.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_5.hideOutline));
    final subscription_0 = _MaterialPopupComponent_4_8.onVisible.listen(eventHandler1(_handle_visibleChange_4_1));
    final subscription_1 = _MaterialPopupComponent_4_8.onOpened.listen(eventHandler0(ctx.focus));
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import9.MaterialPopupComponent) || identical(token, import29.DeferredContentAware)) || identical(token, import30.DropdownHandle)) && ((4 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _MaterialPopupComponent_4_8;
    }
    if ((identical(token, import20.PopupHierarchy) && ((4 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _PopupHierarchy_4_11;
    }
    if ((identical(token, import31.PopupRef) && ((4 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _PopupRef_4_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeDropdownComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final import5.PopupSourceDirective local_button = _PopupSourceDirective_0_6;
    _NgIf_1_9.ngIf = !_ctx.showFilterInsideButton;
    _NgIf_2_9.ngIf = !_ctx.showFilterInsideButton;
    _NgIf_3_9.ngIf = _ctx.showFilterInsideButton;
    if (firstCheck) {
      _MaterialPopupComponent_4_8.enforceSpaceConstraints = true;
      _MaterialPopupComponent_4_8.trackLayoutChanges = true;
    }
    final currVal_5 = _ctx.popupPositions;
    if (!identical(_expr_5, currVal_5)) {
      _MaterialPopupComponent_4_8.preferredPositions = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = local_button;
    if (!identical(_expr_6, currVal_6)) {
      _MaterialPopupComponent_4_8.source = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_8 = _ctx.visible;
    if (!identical(_expr_8, currVal_8)) {
      _MaterialPopupComponent_4_8.visible = currVal_8;
      _expr_8 = currVal_8;
    }
    _NgIf_6_9.ngIf = (_ctx.supportsFiltering && _ctx.showFilterInsidePopup);
    if (firstCheck) {
      (_DeferredContentDirective_7_9.preserveDimensions = true);
    }
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    if (_query_MaterialTreeFilterComponent_1_0_isDirty) {
      ctx.materialTreeFilterComponent = (import14.flattenNodes([
        _appEl_3.mapNestedViews((_ViewMaterialTreeDropdownComponent3 nestedView) {
          return [nestedView._MaterialTreeFilterComponent_0_5];
        }),
        _appEl_6.mapNestedViews((_ViewMaterialTreeDropdownComponent4 nestedView) {
          return [nestedView._MaterialTreeFilterComponent_0_5];
        })
      ]).isNotEmpty
          ? import14.flattenNodes([
              _appEl_3.mapNestedViews((_ViewMaterialTreeDropdownComponent3 nestedView) {
                return [nestedView._MaterialTreeFilterComponent_0_5];
              }),
              _appEl_6.mapNestedViews((_ViewMaterialTreeDropdownComponent4 nestedView) {
                return [nestedView._MaterialTreeFilterComponent_0_5];
              })
            ]).first
          : null);
      _query_MaterialTreeFilterComponent_1_0_isDirty = false;
    }
    final bool currVal_0 = !_ctx.showFilterInsideButton;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'border', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_4.detectHostChanges(firstCheck);
    _compView_4.detectChanges();
    if (firstCheck) {
      _PopupSourceDirective_0_6.ngAfterViewInit();
    }
    if (firstCheck) {
      _MaterialPopupComponent_4_8.ngAfterViewInit();
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
    _PopupSourceDirective_0_6.ngOnDestroy();
    _DeferredContentDirective_7_9.ngOnDestroy();
    _MaterialPopupComponent_4_8.ngOnDestroy();
  }

  void _handle_focus_0_0($event) {
    ctx.visible = true;
  }

  void _handle_click_0_1($event) {
    ctx.visible = !ctx.visible;
    _KeyboardOnlyFocusIndicatorDirective_0_5.hideOutline();
  }

  void _handle_visibleChange_4_1($event) {
    ctx.visible = $event;
  }
}

AppView<import2.MaterialTreeDropdownComponent> viewFactory_MaterialTreeDropdownComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialTreeDropdownComponent0(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent1 extends AppView<import2.MaterialTreeDropdownComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewMaterialTreeDropdownComponent1(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeDropdownComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'button-text';
    addShimE(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeDropdownComponent _ctx = ctx;
    final currVal_0 = (_ctx.placeholder ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialTreeDropdownComponent> viewFactory_MaterialTreeDropdownComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeDropdownComponent1(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent2 extends AppView<import2.MaterialTreeDropdownComponent> {
  import3.Element _el_0;
  import32.ViewMaterialIconComponent0 _compView_0;
  import33.MaterialIconComponent _MaterialIconComponent_0_5;
  _ViewMaterialTreeDropdownComponent2(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeDropdownComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent> build() {
    _compView_0 = new import32.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'icon';
    createAttr(_el_0, 'icon', 'arrow_drop_down');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = new import33.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_0_5.icon = 'arrow_drop_down';
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

AppView<import2.MaterialTreeDropdownComponent> viewFactory_MaterialTreeDropdownComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeDropdownComponent2(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent3 extends AppView<import2.MaterialTreeDropdownComponent> {
  import3.Element _el_0;
  import34.ViewMaterialTreeFilterComponent0 _compView_0;
  import35.MaterialTreeFilterComponent _MaterialTreeFilterComponent_0_5;
  String _expr_0;
  var _expr_1;
  _ViewMaterialTreeDropdownComponent3(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeDropdownComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent> build() {
    _compView_0 = new import34.ViewMaterialTreeFilterComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialTreeFilterComponent_0_5 = new import35.MaterialTreeFilterComponent(parentView.parentView.injectorGet(import36.MaterialTreeRoot, parentView.viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeFilterComponent_0_5, []);
    final subscription_0 = _MaterialTreeFilterComponent_0_5.onFiltered.listen(eventHandler1(_handle_filter_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeDropdownComponent _ctx = ctx;
    final currVal_0 = _ctx.placeholder;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialTreeFilterComponent_0_5.placeholder = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.filterableOptions;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialTreeFilterComponent_0_5.filterable = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialTreeDropdownComponent0)._query_MaterialTreeFilterComponent_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }

  void _handle_filter_0_0($event) {
    ctx.visible = true;
  }
}

AppView<import2.MaterialTreeDropdownComponent> viewFactory_MaterialTreeDropdownComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeDropdownComponent3(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent4 extends AppView<import2.MaterialTreeDropdownComponent> {
  import3.Element _el_0;
  import34.ViewMaterialTreeFilterComponent0 _compView_0;
  import35.MaterialTreeFilterComponent _MaterialTreeFilterComponent_0_5;
  String _expr_1;
  var _expr_2;
  _ViewMaterialTreeDropdownComponent4(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeDropdownComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent> build() {
    _compView_0 = new import34.ViewMaterialTreeFilterComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'search-box';
    createAttr(_el_0, 'leadingGlyph', 'search');
    addShimC(_el_0);
    _MaterialTreeFilterComponent_0_5 = new import35.MaterialTreeFilterComponent(parentView.parentView.injectorGet(import36.MaterialTreeRoot, parentView.viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeFilterComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeDropdownComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_MaterialTreeFilterComponent_0_5.leadingGlyph = 'search');
    }
    final currVal_1 = _ctx.placeholder;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialTreeFilterComponent_0_5.placeholder = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.filterableOptions;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialTreeFilterComponent_0_5.filterable = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialTreeDropdownComponent0)._query_MaterialTreeFilterComponent_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialTreeDropdownComponent> viewFactory_MaterialTreeDropdownComponent4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeDropdownComponent4(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent5 extends AppView<import2.MaterialTreeDropdownComponent> {
  import3.Element _el_0;
  import37.ViewMaterialTreeComponent0 _compView_0;
  import38.MaterialTreeComponent _MaterialTreeComponent_0_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  _ViewMaterialTreeDropdownComponent5(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeDropdownComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent> build() {
    _compView_0 = new import37.ViewMaterialTreeComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialTreeComponent_0_5 = new import38.MaterialTreeComponent(parentView.parentView.injectorGet(import36.MaterialTreeRoot, parentView.viewData.parentIndex, null), null);
    _compView_0.create(_MaterialTreeComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import36.MaterialTreeRoot) && (0 == nodeIndex))) {
      return _MaterialTreeComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeDropdownComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.expandAll;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialTreeComponent_0_5.expandAll = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.componentRenderer;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialTreeComponent_0_5.componentRenderer = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.itemRenderer;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialTreeComponent_0_5.itemRenderer = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.options;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialTreeComponent_0_5.options = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.selection;
    if (!identical(_expr_4, currVal_4)) {
      _MaterialTreeComponent_0_5.selection = currVal_4;
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

AppView<import2.MaterialTreeDropdownComponent> viewFactory_MaterialTreeDropdownComponent5(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeDropdownComponent5(parentView, parentIndex);
}

const List<dynamic> styles$MaterialTreeDropdownComponentHost = const [];

class _ViewMaterialTreeDropdownComponentHost0 extends AppView<dynamic> {
  ViewMaterialTreeDropdownComponent0 _compView_0;
  import2.MaterialTreeDropdownComponent _MaterialTreeDropdownComponent_0_5;
  _ViewMaterialTreeDropdownComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialTreeDropdownComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeDropdownComponent_0_5 = new import2.MaterialTreeDropdownComponent(this.injectorGet(import16.DomService, viewData.parentIndex));
    _compView_0.create(_MaterialTreeDropdownComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialTreeDropdownComponent>(0, this, rootEl, _MaterialTreeDropdownComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import2.MaterialTreeDropdownComponent) || identical(token, import39.Focusable)) || identical(token, import36.MaterialTreeRoot)) && (0 == nodeIndex))) {
      return _MaterialTreeDropdownComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _MaterialTreeDropdownComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_MaterialTreeDropdownComponentHost0(AppView<dynamic> parentView, int parentIndex) {
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

  _ngRef.registerComponent(MaterialTreeDropdownComponent, MaterialTreeDropdownComponentNgFactory);
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
}
