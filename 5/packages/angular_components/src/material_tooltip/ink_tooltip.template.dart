// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'ink_tooltip.dart';
export 'ink_tooltip.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/laminate/enums/alignment.dart';
import 'package:angular_components/laminate/popup/popup.dart' show PopupSource;
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/material_tooltip/module.dart';
import 'tooltip_controller.dart';
import 'tooltip_target.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content.template.dart' as _ref1;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref2;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref3;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref4;
import 'package:angular_components/material_tooltip/module.template.dart' as _ref5;
import 'tooltip_controller.template.dart' as _ref6;
import 'tooltip_target.template.dart' as _ref7;
import 'package:angular_components/src/material_tooltip/ink_tooltip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'ink_tooltip.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../../material_popup/material_popup.template.dart' as import12;
import '../../material_popup/material_popup.dart' as import13;
import '../../content/deferred_content.dart' as import14;
import '../laminate/popup/popup_hierarchy.dart' as import15;
import 'package:angular/src/core/zone/ng_zone.dart' as import16;
import '../laminate/overlay/overlay_service.dart' as import17;
import '../../laminate/overlay/zindexer.dart' as import18;
import 'package:angular/src/core/di/opaque_token.dart' as import19;
import 'dart:core';
import '../../laminate/enums/alignment.dart' as import21;
import '../laminate/popup/popup_size_provider.dart' as import22;
import 'package:angular/src/core/linker/element_ref.dart';
import '../../content/deferred_content_aware.dart' as import24;
import '../../mixins/material_dropdown_base.dart' as import25;
import '../laminate/popup/popup_ref.dart' as import26;
import '../../material_tooltip/module.dart' as import27;
import 'tooltip_controller.dart' as import28;
import '../../utils/disposer/disposer.dart' as import29;

const List<dynamic> styles$MaterialInkTooltipComponent = const [import0.styles];

class ViewMaterialInkTooltipComponent0 extends AppView<import2.MaterialInkTooltipComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  static RenderComponentType _renderType;
  ViewMaterialInkTooltipComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import8.document.createElement('material-tooltip-text');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialInkTooltipComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialInkTooltipComponent> build() {
    final import8.HtmlElement parentRenderNode = initViewRoot(rootEl);
    import8.Text _text_0 = new import8.Text('        ');
    parentRenderNode.append(_text_0);
    var _anchor_1 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MaterialInkTooltipComponent1);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialInkTooltipComponent _ctx = ctx;
    _NgIf_1_7.ngIf = (_ctx.popupSource != null);
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.MaterialInkTooltipComponent> viewFactory_MaterialInkTooltipComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialInkTooltipComponent0(parentView, parentIndex);
}

class _ViewMaterialInkTooltipComponent1 extends AppView<import2.MaterialInkTooltipComponent> {
  import8.Element _el_0;
  import12.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import13.MaterialPopupComponent _MaterialPopupComponent_0_6;
  dynamic __PopupHierarchy_0_9;
  dynamic __PopupRef_0_10;
  ViewContainer _appEl_2;
  import14.DeferredContentDirective _DeferredContentDirective_2_7;
  var _expr_3;
  var _expr_4;
  bool _expr_6;
  _ViewMaterialInkTooltipComponent1(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInkTooltipComponent0._renderType;
  }
  dynamic get _PopupHierarchy_0_9 {
    if ((this.__PopupHierarchy_0_9 == null)) {
      (__PopupHierarchy_0_9 = import13.getHierarchy(this._MaterialPopupComponent_0_6));
    }
    return this.__PopupHierarchy_0_9;
  }

  dynamic get _PopupRef_0_10 {
    if ((this.__PopupRef_0_10 == null)) {
      (__PopupRef_0_10 = import13.getResolvedPopupRef(this._MaterialPopupComponent_0_6));
    }
    return this.__PopupRef_0_10;
  }

  @override
  ComponentRef<import2.MaterialInkTooltipComponent> build() {
    _compView_0 = new import12.ViewMaterialPopupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'aacmtit-ink-tooltip-shadow';
    createAttr(_el_0, 'enforceSpaceConstraints', '');
    createAttr(_el_0, 'ink', '');
    createAttr(_el_0, 'role', 'tooltip');
    createAttr(_el_0, 'trackLayoutChanges', '');
    addShimC(_el_0);
    _appEl_0 = new ViewContainer(0, null, this, _el_0);
    _MaterialPopupComponent_0_6 = new import13.MaterialPopupComponent(parentView.injectorGet(import15.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import13.MaterialPopupComponent, viewData.parentIndex, null), 'tooltip', parentView.injectorGet(import16.NgZone, viewData.parentIndex), parentView.injectorGet(import17.OverlayService, viewData.parentIndex), parentView.injectorGet(import18.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import19.OpaqueToken<List<import21.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import19.OpaqueToken('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import22.PopupSizeProvider, viewData.parentIndex, null), _compView_0.ref, _appEl_0, new ElementRef(_el_0));
    import8.Text _text_1 = new import8.Text('\n          ');
    var _anchor_2 = ngAnchor.clone(false);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_MaterialInkTooltipComponent2);
    _DeferredContentDirective_2_7 = new import14.DeferredContentDirective(_appEl_2, _TemplateRef_2_6, _MaterialPopupComponent_0_6);
    import8.Text _text_3 = new import8.Text('\n        ');
    _compView_0.create(_MaterialPopupComponent_0_6, [
      const [],
      [_text_1, _appEl_2, _text_3],
      const []
    ]);
    init0(_appEl_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import13.MaterialPopupComponent) || identical(token, import24.DeferredContentAware)) || identical(token, import25.DropdownHandle)) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialPopupComponent_0_6;
    }
    if ((identical(token, import15.PopupHierarchy) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupHierarchy_0_9;
    }
    if ((identical(token, import26.PopupRef) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupRef_0_10;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialInkTooltipComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _MaterialPopupComponent_0_6.autoDismiss = false;
      _MaterialPopupComponent_0_6.enforceSpaceConstraints = true;
      _MaterialPopupComponent_0_6.matchMinSourceWidth = false;
      _MaterialPopupComponent_0_6.trackLayoutChanges = true;
      _MaterialPopupComponent_0_6.inkBackground = true;
    }
    final currVal_3 = _ctx.positions;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialPopupComponent_0_6.preferredPositions = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.popupSource;
    if (!identical(_expr_4, currVal_4)) {
      _MaterialPopupComponent_0_6.source = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_6 = _ctx.showPopup;
    if (!identical(_expr_6, currVal_6)) {
      _MaterialPopupComponent_0_6.visible = currVal_6;
      _expr_6 = currVal_6;
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

AppView<import2.MaterialInkTooltipComponent> viewFactory_MaterialInkTooltipComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialInkTooltipComponent1(parentView, parentIndex);
}

class _ViewMaterialInkTooltipComponent2 extends AppView<import2.MaterialInkTooltipComponent> {
  import8.DivElement _el_0;
  import8.Text _text_2;
  var _expr_0;
  _ViewMaterialInkTooltipComponent2(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInkTooltipComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInkTooltipComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'ink-container';
    addShimC(_el_0);
    import8.Text _text_1 = new import8.Text('\n            ');
    _el_0.append(_text_1);
    _text_2 = new import8.Text('');
    _el_0.append(_text_2);
    project(_el_0, 0);
    import8.Text _text_3 = new import8.Text('\n          ');
    _el_0.append(_text_3);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialInkTooltipComponent _ctx = ctx;
    final currVal_0 = (_ctx.text ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialInkTooltipComponent> viewFactory_MaterialInkTooltipComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialInkTooltipComponent2(parentView, parentIndex);
}

const List<dynamic> styles$MaterialInkTooltipComponentHost = const [];

class _ViewMaterialInkTooltipComponentHost0 extends AppView<dynamic> {
  ViewMaterialInkTooltipComponent0 _compView_0;
  dynamic _TooltipController_0_4;
  import2.MaterialInkTooltipComponent _MaterialInkTooltipComponent_0_5;
  _ViewMaterialInkTooltipComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialInkTooltipComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TooltipController_0_4 = import27.createTooltipController(this.injectorGet(import28.TooltipController, viewData.parentIndex, null), this.injectorGet(import29.Disposer, viewData.parentIndex, null));
    _MaterialInkTooltipComponent_0_5 = new import2.MaterialInkTooltipComponent(_TooltipController_0_4, _compView_0.ref);
    _compView_0.create(_MaterialInkTooltipComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialInkTooltipComponent>(0, this, rootEl, _MaterialInkTooltipComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import28.TooltipController) && (0 == nodeIndex))) {
      return _TooltipController_0_4;
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

AppView viewFactory_MaterialInkTooltipComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialInkTooltipComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialInkTooltipComponent> MaterialInkTooltipComponentNgFactory = const ComponentFactory<import2.MaterialInkTooltipComponent>('material-tooltip-text', viewFactory_MaterialInkTooltipComponentHost0, _MaterialInkTooltipComponentMetadata);
const _MaterialInkTooltipComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialInkTooltipComponent, MaterialInkTooltipComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
