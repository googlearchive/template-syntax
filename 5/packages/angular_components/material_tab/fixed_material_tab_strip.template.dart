// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'fixed_material_tab_strip.dart';
export 'fixed_material_tab_strip.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/annotations/rtl_annotation.dart';
import 'package:angular_components/focus/focus_item.dart';
import 'package:angular_components/focus/focus_list.dart';
import 'tab_button.dart';
import 'tab_change_event.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/annotations/rtl_annotation.template.dart' as _ref1;
import 'package:angular_components/focus/focus_item.template.dart' as _ref2;
import 'package:angular_components/focus/focus_list.template.dart' as _ref3;
import 'tab_button.template.dart' as _ref4;
import 'tab_change_event.template.dart' as _ref5;
import 'package:angular_components/material_tab/fixed_material_tab_strip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'fixed_material_tab_strip.dart' as import2;
import 'dart:html' as import3;
import '../focus/focus_list.template.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/angular.dart';
import '../focus/focus_list.dart' as import12;
import 'package:angular/src/core/zone/ng_zone.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import 'tab_button.template.dart' as import15;
import '../focus/focus_item.template.dart' as import16;
import 'tab_button.dart' as import17;
import '../focus/focus_item.dart' as import18;
import '../focus/focus.dart' as import19;
import 'dart:core';
import 'package:angular/src/core/di/opaque_token.dart' as import21;

const List<dynamic> styles$FixedMaterialTabStripComponent = const [import0.styles];

class ViewFixedMaterialTabStripComponent0 extends AppView<import2.FixedMaterialTabStripComponent> {
  import3.DivElement _el_0;
  import4.FocusListDirectiveNgCd _FocusListDirective_0_5;
  bool _query_FocusableItem_0_0_isDirty = true;
  import3.DivElement _el_1;
  ViewContainer _appEl_2;
  import6.NgFor _NgFor_2_9;
  var _expr_0;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewFixedMaterialTabStripComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-tab-strip');
    rootEl.className = 'themeable';
    _renderType ??= import10.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$FixedMaterialTabStripComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.FixedMaterialTabStripComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'navi-bar';
    createAttr(_el_0, 'focusList', '');
    createAttr(_el_0, 'role', 'tablist');
    addShimC(_el_0);
    _FocusListDirective_0_5 = new import4.FocusListDirectiveNgCd(new import12.FocusListDirective(parentView.injectorGet(import13.NgZone, viewData.parentIndex), 'tablist'));
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'tab-indicator';
    addShimC(_el_1);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_FixedMaterialTabStripComponent1);
    _NgFor_2_9 = new import6.NgFor(_appEl_2, _TemplateRef_2_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.FixedMaterialTabStripComponent _ctx = ctx;
    final currVal_1 = _ctx.tabLabels;
    if (!identical(_expr_1, currVal_1)) {
      _NgFor_2_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    _NgFor_2_9.ngDoCheck();
    _appEl_2.detectChangesInNestedViews();
    if (_query_FocusableItem_0_0_isDirty) {
      _FocusListDirective_0_5.instance.listItems = _appEl_2.mapNestedViews((_ViewFixedMaterialTabStripComponent1 nestedView) {
        return [nestedView._FocusableItem_0_7];
      });
      _query_FocusableItem_0_0_isDirty = false;
    }
    _FocusListDirective_0_5.detectHostChanges(this, _el_0);
    final currVal_0 = _ctx.tabIndicatorTransform;
    if (!identical(_expr_0, currVal_0)) {
      _el_1.style.setProperty('transform', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
    _FocusListDirective_0_5.instance.ngOnDestroy();
  }
}

AppView<import2.FixedMaterialTabStripComponent> viewFactory_FixedMaterialTabStripComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewFixedMaterialTabStripComponent0(parentView, parentIndex);
}

class _ViewFixedMaterialTabStripComponent1 extends AppView<import2.FixedMaterialTabStripComponent> {
  import3.Element _el_0;
  import15.ViewTabButtonComponent0 _compView_0;
  import16.FocusItemDirectiveNgCd _FocusItemDirective_0_5;
  import17.TabButtonComponent _TabButtonComponent_0_6;
  import18.FocusItemDirective _FocusableItem_0_7;
  var _expr_0;
  var _expr_1;
  String _expr_2;
  bool _expr_3;
  _ViewFixedMaterialTabStripComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewFixedMaterialTabStripComponent0._renderType;
  }
  @override
  ComponentRef<import2.FixedMaterialTabStripComponent> build() {
    _compView_0 = new import15.ViewTabButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'tab-button';
    createAttr(_el_0, 'focusItem', '');
    createAttr(_el_0, 'role', 'tab');
    addShimC(_el_0);
    _FocusItemDirective_0_5 = new import16.FocusItemDirectiveNgCd(new import18.FocusItemDirective(_el_0, 'tab'));
    _TabButtonComponent_0_6 = new import17.TabButtonComponent(_el_0);
    _FocusableItem_0_7 = _FocusItemDirective_0_5.instance;
    _compView_0.create(_TabButtonComponent_0_6, []);
    _el_0.addEventListener('keydown', eventHandler1(_FocusItemDirective_0_5.instance.keydown));
    final subscription_0 = _TabButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.FocusableItem) && (0 == nodeIndex))) {
      return _FocusableItem_0_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.FixedMaterialTabStripComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final int local_idx = locals['index'];
    final String local_tabLabel = locals['\$implicit'];
    final currVal_2 = local_tabLabel;
    if (!identical(_expr_2, currVal_2)) {
      _TabButtonComponent_0_6.label = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = (_ctx.activeTabIndex == local_idx);
    if (!identical(_expr_3, currVal_3)) {
      _TabButtonComponent_0_6.isActive = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_0 = _ctx.tabId(local_idx);
    if (!identical(_expr_0, currVal_0)) {
      setProp(_el_0, 'id', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.activeStr(local_idx);
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_0, 'aria-selected', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    _FocusItemDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewFixedMaterialTabStripComponent0)._query_FocusableItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }

  void _handle_trigger_0_0($event) {
    final int local_idx = locals['index'];
    ctx.switchTo(local_idx);
  }
}

AppView<import2.FixedMaterialTabStripComponent> viewFactory_FixedMaterialTabStripComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewFixedMaterialTabStripComponent1(parentView, parentIndex);
}

const List<dynamic> styles$FixedMaterialTabStripComponentHost = const [];

class _ViewFixedMaterialTabStripComponentHost0 extends AppView<dynamic> {
  ViewFixedMaterialTabStripComponent0 _compView_0;
  import2.FixedMaterialTabStripComponent _FixedMaterialTabStripComponent_0_5;
  _ViewFixedMaterialTabStripComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewFixedMaterialTabStripComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _FixedMaterialTabStripComponent_0_5 = new import2.FixedMaterialTabStripComponent(_compView_0.ref, this.injectorGet(const import21.OpaqueToken('isRtl'), viewData.parentIndex, null));
    _compView_0.create(_FixedMaterialTabStripComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.FixedMaterialTabStripComponent>(0, this, rootEl, _FixedMaterialTabStripComponent_0_5);
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

AppView viewFactory_FixedMaterialTabStripComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewFixedMaterialTabStripComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.FixedMaterialTabStripComponent> FixedMaterialTabStripComponentNgFactory = const ComponentFactory<import2.FixedMaterialTabStripComponent>('material-tab-strip', viewFactory_FixedMaterialTabStripComponentHost0, _FixedMaterialTabStripComponentMetadata);
const _FixedMaterialTabStripComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(FixedMaterialTabStripComponent, FixedMaterialTabStripComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
