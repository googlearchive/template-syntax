// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_chips.dart';
export 'material_chips.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/material_chips/material_chip.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/ui/has_renderer.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_chips/material_chip.template.dart' as _ref1;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref2;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_components/material_chips/material_chips.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_chips.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'material_chip.template.dart' as import12;
import 'material_chip.dart' as import13;

const List<dynamic> styles$MaterialChipsComponent = const [import0.styles];

class ViewMaterialChipsComponent0 extends AppView<import2.MaterialChipsComponent> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_7;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewMaterialChipsComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import8.document.createElement('material-chips');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialChipsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialChipsComponent> build() {
    final import8.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_MaterialChipsComponent1);
    _NgFor_0_7 = new import4.NgFor(_appEl_0, _TemplateRef_0_6);
    project(parentRenderNode, 0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialChipsComponent _ctx = ctx;
    final currVal_0 = _ctx.selectedItems;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_0_7.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_0_7.ngDoCheck();
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import2.MaterialChipsComponent> viewFactory_MaterialChipsComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialChipsComponent0(parentView, parentIndex);
}

class _ViewMaterialChipsComponent1 extends AppView<import2.MaterialChipsComponent> {
  import8.Element _el_0;
  import12.ViewMaterialChipComponent0 _compView_0;
  import13.MaterialChipComponent _MaterialChipComponent_0_4;
  var _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewMaterialChipsComponent1(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialChipsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialChipsComponent> build() {
    _compView_0 = new import12.ViewMaterialChipComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialChipComponent_0_4 = new import13.MaterialChipComponent(_el_0);
    _compView_0.create(_MaterialChipComponent_0_4, [const [], const []]);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialChipsComponent _ctx = ctx;
    bool changed = false;
    final dynamic local_chip = locals['\$implicit'];
    changed = false;
    final currVal_0 = _ctx.selectionModel;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialChipComponent_0_4.selectionModel = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.removable;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialChipComponent_0_4.removable = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.itemRenderer;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialChipComponent_0_4.itemRenderer = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_chip;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialChipComponent_0_4.value = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
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

AppView<import2.MaterialChipsComponent> viewFactory_MaterialChipsComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialChipsComponent1(parentView, parentIndex);
}

const List<dynamic> styles$MaterialChipsComponentHost = const [];

class _ViewMaterialChipsComponentHost0 extends AppView<dynamic> {
  ViewMaterialChipsComponent0 _compView_0;
  import2.MaterialChipsComponent _MaterialChipsComponent_0_4;
  _ViewMaterialChipsComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialChipsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialChipsComponent_0_4 = new import2.MaterialChipsComponent(_compView_0.ref);
    _compView_0.create(_MaterialChipsComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialChipsComponent>(0, this, rootEl, _MaterialChipsComponent_0_4);
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
    _MaterialChipsComponent_0_4.ngOnDestroy();
  }
}

AppView viewFactory_MaterialChipsComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialChipsComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialChipsComponent> MaterialChipsComponentNgFactory = const ComponentFactory<import2.MaterialChipsComponent>('material-chips', viewFactory_MaterialChipsComponentHost0, _MaterialChipsComponentMetadata);
const _MaterialChipsComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialChipsComponent, MaterialChipsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
