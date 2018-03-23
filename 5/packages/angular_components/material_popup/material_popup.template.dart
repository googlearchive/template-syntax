// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_popup.dart';
export 'material_popup.dart';
import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'package:angular/angular.dart';
import 'package:meta/meta.dart';
import 'package:angular_components/content/deferred_content_aware.dart';
import 'package:angular_components/laminate/enums/alignment.dart';
import 'package:angular_components/laminate/enums/visibility.dart' as visibility;
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/laminate/overlay/overlay.dart';
import 'package:angular_components/laminate/overlay/zindexer.dart';
import 'package:angular_components/laminate/popup/module.dart';
import 'package:angular_components/laminate/popup/popup.dart';
import 'package:angular_components/mixins/material_dropdown_base.dart';
import 'package:angular_components/model/ui/toggle.dart';
import 'package:angular_components/utils/async/async.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular_components/utils/id_generator/id_generator.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref1;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref2;
import 'package:angular_components/laminate/enums/visibility.template.dart' as _ref3;
import 'package:angular_components/laminate/overlay/module.template.dart' as _ref4;
import 'package:angular_components/laminate/overlay/overlay.template.dart' as _ref5;
import 'package:angular_components/laminate/overlay/zindexer.template.dart' as _ref6;
import 'package:angular_components/laminate/popup/module.template.dart' as _ref7;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref8;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref9;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref10;
import 'package:angular_components/model/ui/toggle.template.dart' as _ref11;
import 'package:angular_components/utils/async/async.template.dart' as _ref12;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref13;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref14;
import 'package:angular_components/material_popup/material_popup.dart' as _i1;
import 'package:angular_components/material_popup/material_popup.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_popup.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import '../src/laminate/popup/popup_hierarchy.dart' as import11;
import 'package:angular/src/core/zone/ng_zone.dart' as import12;
import '../src/laminate/overlay/overlay_service.dart' as import13;
import '../laminate/overlay/zindexer.dart' as import14;
import 'package:angular/src/core/di/opaque_token.dart' as import15;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import17;
import '../src/laminate/popup/popup_size_provider.dart' as import18;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import20;
import '../mixins/material_dropdown_base.dart' as import21;
import '../src/laminate/popup/popup_ref.dart' as import22;

const List<dynamic> styles$MaterialPopupComponent = const [import0.styles];

class ViewMaterialPopupComponent0 extends AppView<import2.MaterialPopupComponent> {
  bool _query_template_1_0_isDirty = true;
  ViewContainer _appEl_1;
  TemplateRef _TemplateRef_1_7;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewMaterialPopupComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import8.document.createElement('material-popup');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialPopupComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialPopupComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    import8.Text _text_0 = new import8.Text('\n');
    parentRenderNode.append(_text_0);
    var _anchor_1 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    _TemplateRef_1_7 = new TemplateRef(_appEl_1, viewFactory_MaterialPopupComponent1);
    import8.Text _text_2 = new import8.Text('\n');
    parentRenderNode.append(_text_2);
    ctx.templateRef = _TemplateRef_1_7;
    init(const [], null);
    return null;
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_0 = ctx.paneId;
    if (!identical(_expr_0, currVal_0)) {
      setAttr(rootEl, 'pane-id', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialPopupComponent> viewFactory_MaterialPopupComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialPopupComponent0(parentView, parentIndex);
}

class _ViewMaterialPopupComponent1 extends AppView<import2.MaterialPopupComponent> {
  import8.DivElement _el_1;
  import8.DivElement _el_3;
  import8.DivElement _el_5;
  import8.Element _el_7;
  import8.Element _el_11;
  import8.Element _el_15;
  var _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  bool _expr_7;
  var _expr_8;
  var _expr_10;
  var _expr_11;
  _ViewMaterialPopupComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialPopupComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialPopupComponent> build() {
    import8.Text _text_0 = new import8.Text('\n  ');
    var doc = import8.document;
    _el_1 = doc.createElement('div');
    _el_1.className = 'popup-wrapper mixin';
    addShimC(_el_1);
    import8.Text _text_2 = new import8.Text('\n      ');
    _el_1.append(_text_2);
    _el_3 = createDivAndAppend(doc, _el_1);
    _el_3.className = 'popup';
    addShimC(_el_3);
    import8.Text _text_4 = new import8.Text('\n          ');
    _el_3.append(_text_4);
    _el_5 = createDivAndAppend(doc, _el_3);
    _el_5.className = 'material-popup-content content';
    addShimC(_el_5);
    import8.Text _text_6 = new import8.Text('\n              ');
    _el_5.append(_text_6);
    _el_7 = createAndAppend(doc, 'header', _el_5);
    addShimE(_el_7);
    import8.Text _text_8 = new import8.Text('\n                  ');
    _el_7.append(_text_8);
    project(_el_7, 0);
    import8.Text _text_9 = new import8.Text('\n              ');
    _el_7.append(_text_9);
    import8.Text _text_10 = new import8.Text('\n              ');
    _el_5.append(_text_10);
    _el_11 = createAndAppend(doc, 'main', _el_5);
    addShimE(_el_11);
    import8.Text _text_12 = new import8.Text('\n                  ');
    _el_11.append(_text_12);
    project(_el_11, 1);
    import8.Text _text_13 = new import8.Text('\n              ');
    _el_11.append(_text_13);
    import8.Text _text_14 = new import8.Text('\n              ');
    _el_5.append(_text_14);
    _el_15 = createAndAppend(doc, 'footer', _el_5);
    addShimE(_el_15);
    import8.Text _text_16 = new import8.Text('\n                  ');
    _el_15.append(_text_16);
    project(_el_15, 2);
    import8.Text _text_17 = new import8.Text('\n              ');
    _el_15.append(_text_17);
    import8.Text _text_18 = new import8.Text('\n          ');
    _el_5.append(_text_18);
    import8.Text _text_19 = new import8.Text('\n      ');
    _el_3.append(_text_19);
    import8.Text _text_20 = new import8.Text('\n  ');
    _el_1.append(_text_20);
    import8.Text _text_21 = new import8.Text('\n');
    init([_text_0, _el_1, _text_21], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialPopupComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      setAttr(_el_1, 'role', (_ctx.role ?? '')?.toString());
    }
    final currVal_0 = _ctx.z;
    if (!identical(_expr_0, currVal_0)) {
      setAttr(_el_1, 'elevation', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.hasBox;
    if (!identical(_expr_1, currVal_1)) {
      updateClass(_el_1, 'shadow', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.matchMinSourceWidth;
    if (!identical(_expr_2, currVal_2)) {
      updateClass(_el_1, 'full-width', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.inkBackground;
    if (!identical(_expr_3, currVal_3)) {
      updateClass(_el_1, 'ink', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.slide;
    if (!identical(_expr_4, currVal_4)) {
      setAttr(_el_1, 'slide', currVal_4?.toString());
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.zIndex;
    if (!identical(_expr_5, currVal_5)) {
      setAttr(_el_1, 'z-index', currVal_5?.toString());
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.transformOrigin;
    if (!identical(_expr_6, currVal_6)) {
      _el_1.style.setProperty('transform-origin', currVal_6?.toString());
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.showPopup;
    if (!identical(_expr_7, currVal_7)) {
      updateClass(_el_1, 'visible', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = (_ctx.uniqueId ?? '');
    if (!identical(_expr_8, currVal_8)) {
      setProp(_el_1, 'id', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_10 = _ctx.maxHeight;
    if (!identical(_expr_10, currVal_10)) {
      _el_3.style.setProperty('max-height', ((currVal_10?.toString() == null) ? null : (currVal_10?.toString() + 'px')));
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.maxWidth;
    if (!identical(_expr_11, currVal_11)) {
      _el_3.style.setProperty('max-width', ((currVal_11?.toString() == null) ? null : (currVal_11?.toString() + 'px')));
      _expr_11 = currVal_11;
    }
  }
}

AppView<import2.MaterialPopupComponent> viewFactory_MaterialPopupComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialPopupComponent1(parentView, parentIndex);
}

const List<dynamic> styles$MaterialPopupComponentHost = const [];

class _ViewMaterialPopupComponentHost0 extends AppView<dynamic> {
  ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import2.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupHierarchy_0_11;
  dynamic __PopupRef_0_12;
  _ViewMaterialPopupComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _PopupHierarchy_0_11 {
    if ((this.__PopupHierarchy_0_11 == null)) {
      (__PopupHierarchy_0_11 = import2.getHierarchy(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupHierarchy_0_11;
  }

  dynamic get _PopupRef_0_12 {
    if ((this.__PopupRef_0_12 == null)) {
      (__PopupRef_0_12 = import2.getResolvedPopupRef(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupRef_0_12;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialPopupComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _appEl_0 = new ViewContainer(0, null, this, rootEl);
    _MaterialPopupComponent_0_8 = new import2.MaterialPopupComponent(this.injectorGet(import11.PopupHierarchy, viewData.parentIndex, null), this.injectorGet(import2.MaterialPopupComponent, viewData.parentIndex, null), null, this.injectorGet(import12.NgZone, viewData.parentIndex), this.injectorGet(import13.OverlayService, viewData.parentIndex), this.injectorGet(import14.ZIndexer, viewData.parentIndex), this.injectorGet(const import15.OpaqueToken<List<import17.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), this.injectorGet(const import15.OpaqueToken('overlayRepositionLoop'), viewData.parentIndex), this.injectorGet(import18.PopupSizeProvider, viewData.parentIndex, null), _compView_0.ref, _appEl_0, new ElementRef(rootEl));
    _compView_0.create(_MaterialPopupComponent_0_8, projectableNodes);
    init0(_appEl_0);
    return new ComponentRef<import2.MaterialPopupComponent>(0, this, rootEl, _MaterialPopupComponent_0_8);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import2.MaterialPopupComponent) || identical(token, import20.DeferredContentAware)) || identical(token, import21.DropdownHandle)) && (0 == nodeIndex))) {
      return _MaterialPopupComponent_0_8;
    }
    if ((identical(token, import11.PopupHierarchy) && (0 == nodeIndex))) {
      return _PopupHierarchy_0_11;
    }
    if ((identical(token, import22.PopupRef) && (0 == nodeIndex))) {
      return _PopupRef_0_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialPopupComponent_0_8.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _compView_0?.destroy();
    _MaterialPopupComponent_0_8.ngOnDestroy();
  }
}

AppView viewFactory_MaterialPopupComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialPopupComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialPopupComponent> MaterialPopupComponentNgFactory = const ComponentFactory<import2.MaterialPopupComponent>('material-popup', viewFactory_MaterialPopupComponentHost0, _MaterialPopupComponentMetadata);
const _MaterialPopupComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialPopupComponent, MaterialPopupComponentNgFactory);
  _ngRef.registerDependencies(getHierarchy, const [
    const [_i1.MaterialPopupComponent]
  ]);
  _ngRef.registerDependencies(getResolvedPopupRef, const [
    const [_i1.MaterialPopupComponent]
  ]);
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
}
