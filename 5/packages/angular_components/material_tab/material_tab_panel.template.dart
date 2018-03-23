// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_tab_panel.dart';
export 'material_tab_panel.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'fixed_material_tab_strip.dart';
import 'material_tab.dart';
import 'tab_change_event.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'fixed_material_tab_strip.template.dart' as _ref0;
import 'material_tab.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'tab_change_event.template.dart' as _ref3;
import 'package:angular_components/material_tab/material_tab_panel.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tab_panel.dart' as import2;
import 'dart:html' as import3;
import 'fixed_material_tab_strip.template.dart' as import4;
import 'fixed_material_tab_strip.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import11;

const List<dynamic> styles$MaterialTabPanelComponent = const [import0.styles];

class ViewMaterialTabPanelComponent0 extends AppView<import2.MaterialTabPanelComponent> {
  import3.Element _el_0;
  import4.ViewFixedMaterialTabStripComponent0 _compView_0;
  import5.FixedMaterialTabStripComponent _FixedMaterialTabStripComponent_0_5;
  var _expr_0;
  int _expr_1;
  var _expr_2;
  static RenderComponentType _renderType;
  ViewMaterialTabPanelComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-tab-panel');
    rootEl.className = 'themeable';
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialTabPanelComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialTabPanelComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = new import4.ViewFixedMaterialTabStripComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _FixedMaterialTabStripComponent_0_5 = new import5.FixedMaterialTabStripComponent(_compView_0.ref, parentView.injectorGet(const import11.OpaqueToken('isRtl'), viewData.parentIndex, null));
    _compView_0.create(_FixedMaterialTabStripComponent_0_5, []);
    project(parentRenderNode, 0);
    final subscription_0 = _FixedMaterialTabStripComponent_0_5.beforeTabChange.listen(eventHandler1(ctx.onBeforeTabChange));
    final subscription_1 = _FixedMaterialTabStripComponent_0_5.tabChange.listen(eventHandler1(ctx.onTabChange));
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.FixedMaterialTabStripComponent) && (0 == nodeIndex))) {
      return _FixedMaterialTabStripComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTabPanelComponent _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.tabIds;
    if (!identical(_expr_0, currVal_0)) {
      _FixedMaterialTabStripComponent_0_5.tabIds = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.activeTabIndex;
    if (!identical(_expr_1, currVal_1)) {
      _FixedMaterialTabStripComponent_0_5.activeTabIndex = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.tabLabels;
    if (!identical(_expr_2, currVal_2)) {
      _FixedMaterialTabStripComponent_0_5.tabLabels = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
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

AppView<import2.MaterialTabPanelComponent> viewFactory_MaterialTabPanelComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialTabPanelComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialTabPanelComponentHost = const [];

class _ViewMaterialTabPanelComponentHost0 extends AppView<dynamic> {
  ViewMaterialTabPanelComponent0 _compView_0;
  import2.MaterialTabPanelComponent _MaterialTabPanelComponent_0_5;
  bool _query_Tab_0_0_isDirty = true;
  _ViewMaterialTabPanelComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialTabPanelComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTabPanelComponent_0_5 = new import2.MaterialTabPanelComponent(_compView_0.ref);
    _MaterialTabPanelComponent_0_5.tabs = [];
    _compView_0.create(_MaterialTabPanelComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialTabPanelComponent>(0, this, rootEl, _MaterialTabPanelComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialTabPanelComponent) && (0 == nodeIndex))) {
      return _MaterialTabPanelComponent_0_5;
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
      _MaterialTabPanelComponent_0_5.ngAfterContentInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_MaterialTabPanelComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTabPanelComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialTabPanelComponent> MaterialTabPanelComponentNgFactory = const ComponentFactory<import2.MaterialTabPanelComponent>('material-tab-panel', viewFactory_MaterialTabPanelComponentHost0, _MaterialTabPanelComponentMetadata);
const _MaterialTabPanelComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTabPanelComponent, MaterialTabPanelComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
