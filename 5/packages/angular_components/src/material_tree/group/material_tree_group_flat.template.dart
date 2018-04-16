// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_tree_group_flat.dart';
export 'material_tree_group_flat.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/dynamic_component/dynamic_component.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/material_radio/material_radio.dart';
import 'package:angular_components/material_radio/material_radio_group.dart';
import 'package:angular_components/src/material_tree/material_tree_node.dart';
import 'package:angular_components/src/material_tree/material_tree_root.dart';
import 'package:angular_components/mixins/material_dropdown_base.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref2;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as _ref3;
import 'package:angular_components/material_radio/material_radio.template.dart' as _ref4;
import 'package:angular_components/material_radio/material_radio_group.template.dart' as _ref5;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref6;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref7;
import 'package:angular_components/src/material_tree/material_tree_node.template.dart' as _ref8;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref9;
import 'package:angular_components/src/material_tree/group/material_tree_group_flat_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tree_group_flat.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../../../dynamic_component/dynamic_component.template.dart' as import13;
import '../../../dynamic_component/dynamic_component.dart' as import14;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import15;
import '../material_tree_root.dart' as import16;
import 'package:angular_components/src/material_tree/group/material_tree_group_flat_radio.scss.css.shim.dart' as import17;
import '../../../material_radio/material_radio_group.template.dart' as import18;
import '../../../material_radio/material_radio_group.dart' as import19;
import 'package:angular/src/core/zone/ng_zone.dart' as import20;
import '../../../material_radio/material_radio.template.dart' as import21;
import '../../../material_radio/material_radio.dart' as import22;
import '../../../mixins/material_dropdown_base.dart' as import23;
import 'package:angular_components/src/material_tree/group/material_tree_group_flat_check.scss.css.shim.dart' as import24;
import '../../../material_checkbox/material_checkbox.template.dart' as import25;
import '../../../material_checkbox/material_checkbox.dart' as import26;

const List<dynamic> styles$MaterialTreeGroupFlatListComponent = const [import0.styles];

class ViewMaterialTreeGroupFlatListComponent0 extends AppView<import2.MaterialTreeGroupFlatListComponent> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewMaterialTreeGroupFlatListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import8.document.createElement('material-tree-group-flat-list');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialTreeGroupFlatListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatListComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = new TemplateRef(_appEl_0, viewFactory_MaterialTreeGroupFlatListComponent1);
    _NgFor_0_9 = new import4.NgFor(_appEl_0, _TemplateRef_0_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupFlatListComponent _ctx = ctx;
    final currVal_0 = _ctx.group;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_0_9.ngDoCheck();
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    if (firstCheck) {
      if (!identical(ctx.isMaterialTreeGroup, null)) {
        updateElemClass(rootEl, 'material-tree-group', ctx.isMaterialTreeGroup);
      }
    }
  }
}

AppView<import2.MaterialTreeGroupFlatListComponent> viewFactory_MaterialTreeGroupFlatListComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialTreeGroupFlatListComponent0(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatListComponent1 extends AppView<import2.MaterialTreeGroupFlatListComponent> {
  import8.DivElement _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewMaterialTreeGroupFlatListComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupFlatListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatListComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'material-tree-option';
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialTreeGroupFlatListComponent2);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MaterialTreeGroupFlatListComponent3);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupFlatListComponent _ctx = ctx;
    _NgIf_1_9.ngIf = _ctx.useComponentRenderer;
    _NgIf_2_9.ngIf = !_ctx.useComponentRenderer;
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
  }
}

AppView<import2.MaterialTreeGroupFlatListComponent> viewFactory_MaterialTreeGroupFlatListComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeGroupFlatListComponent1(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatListComponent2 extends AppView<import2.MaterialTreeGroupFlatListComponent> {
  import8.Element _el_0;
  import13.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import14.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupFlatListComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupFlatListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatListComponent> build() {
    _compView_0 = new import13.ViewDynamicComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'item component';
    addShimC(_el_0);
    _appEl_0 = new ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_8 = new import14.DynamicComponent(parentView.parentView.injectorGet(import15.SlowComponentLoader, parentView.viewData.parentIndex), _compView_0.ref, _appEl_0);
    _compView_0.create(_DynamicComponent_0_8, []);
    init0(_appEl_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupFlatListComponent _ctx = ctx;
    bool changed = false;
    final dynamic local_option = parentView.locals['\$implicit'];
    changed = false;
    final currVal_0 = _ctx.getComponentType(local_option);
    if (!identical(_expr_0, currVal_0)) {
      _DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.getComponentFactory(local_option);
    if (!identical(_expr_1, currVal_1)) {
      _DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = local_option;
    if (!identical(_expr_2, currVal_2)) {
      _DynamicComponent_0_8.value = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _DynamicComponent_0_8.ngAfterChanges();
    }
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _compView_0?.destroy();
    _DynamicComponent_0_8.ngOnDestroy();
  }
}

AppView<import2.MaterialTreeGroupFlatListComponent> viewFactory_MaterialTreeGroupFlatListComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeGroupFlatListComponent2(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatListComponent3 extends AppView<import2.MaterialTreeGroupFlatListComponent> {
  import8.Element _el_0;
  import8.Text _text_1;
  var _expr_0;
  _ViewMaterialTreeGroupFlatListComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupFlatListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatListComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'item text';
    addShimE(_el_0);
    _text_1 = new import8.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupFlatListComponent _ctx = ctx;
    final dynamic local_option = parentView.locals['\$implicit'];
    final currVal_0 = import9.interpolate0(_ctx.getOptionAsText(local_option));
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialTreeGroupFlatListComponent> viewFactory_MaterialTreeGroupFlatListComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeGroupFlatListComponent3(parentView, parentIndex);
}

const List<dynamic> styles$MaterialTreeGroupFlatListComponentHost = const [];

class _ViewMaterialTreeGroupFlatListComponentHost0 extends AppView<dynamic> {
  ViewMaterialTreeGroupFlatListComponent0 _compView_0;
  import2.MaterialTreeGroupFlatListComponent _MaterialTreeGroupFlatListComponent_0_5;
  _ViewMaterialTreeGroupFlatListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialTreeGroupFlatListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeGroupFlatListComponent_0_5 = new import2.MaterialTreeGroupFlatListComponent(this.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref);
    _compView_0.create(_MaterialTreeGroupFlatListComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialTreeGroupFlatListComponent>(0, this, rootEl, _MaterialTreeGroupFlatListComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_MaterialTreeGroupFlatListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeGroupFlatListComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialTreeGroupFlatListComponent> MaterialTreeGroupFlatListComponentNgFactory = const ComponentFactory<import2.MaterialTreeGroupFlatListComponent>('material-tree-group-flat-list', viewFactory_MaterialTreeGroupFlatListComponentHost0, _MaterialTreeGroupFlatListComponentMetadata);
const List<dynamic> styles$MaterialTreeGroupFlatRadioComponent = const [import17.styles];

class ViewMaterialTreeGroupFlatRadioComponent0 extends AppView<import2.MaterialTreeGroupFlatRadioComponent> {
  import8.Element _el_0;
  import18.ViewMaterialRadioGroupComponent0 _compView_0;
  import19.MaterialRadioGroupComponent _MaterialRadioGroupComponent_0_5;
  bool _query_MaterialRadioComponent_0_0_isDirty = true;
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewMaterialTreeGroupFlatRadioComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import8.document.createElement('material-tree-group-flat-radio');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialTreeGroupFlatRadioComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatRadioComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = new import18.ViewMaterialRadioGroupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _MaterialRadioGroupComponent_0_5 = new import19.MaterialRadioGroupComponent(parentView.injectorGet(import20.NgZone, viewData.parentIndex), null);
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialTreeGroupFlatRadioComponent1);
    _NgFor_1_9 = new import4.NgFor(_appEl_1, _TemplateRef_1_8);
    _compView_0.create(_MaterialRadioGroupComponent_0_5, [
      [_appEl_1]
    ]);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.MaterialRadioGroupComponent) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialRadioGroupComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupFlatRadioComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.selectionModel, null)) {
        _MaterialRadioGroupComponent_0_5.valueSelection = _ctx.selectionModel;
        changed = true;
      }
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_1 = _ctx.group;
    if (!identical(_expr_1, currVal_1)) {
      _NgFor_1_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    _NgFor_1_9.ngDoCheck();
    _appEl_1.detectChangesInNestedViews();
    if (_query_MaterialRadioComponent_0_0_isDirty) {
      _MaterialRadioGroupComponent_0_5.list = _appEl_1.mapNestedViews((_ViewMaterialTreeGroupFlatRadioComponent1 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_0_0_isDirty = false;
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_0_5.ngAfterContentInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _compView_0?.destroy();
    _MaterialRadioGroupComponent_0_5.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    if (firstCheck) {
      if (!identical(ctx.isMaterialTreeGroup, null)) {
        updateElemClass(rootEl, 'material-tree-group', ctx.isMaterialTreeGroup);
      }
    }
  }
}

AppView<import2.MaterialTreeGroupFlatRadioComponent> viewFactory_MaterialTreeGroupFlatRadioComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialTreeGroupFlatRadioComponent0(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatRadioComponent1 extends AppView<import2.MaterialTreeGroupFlatRadioComponent> {
  import8.Element _el_0;
  import21.ViewMaterialRadioComponent0 _compView_0;
  import22.MaterialRadioComponent _MaterialRadioComponent_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  bool _expr_3;
  _ViewMaterialTreeGroupFlatRadioComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupFlatRadioComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatRadioComponent> build() {
    _compView_0 = new import21.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'material-tree-option tree-selection-state themeable';
    createAttr(_el_0, 'role', 'option');
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import22.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewMaterialTreeGroupFlatRadioComponent0)._MaterialRadioGroupComponent_0_5, null, 'option');
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialTreeGroupFlatRadioComponent2);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = createViewContainerAnchor();
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MaterialTreeGroupFlatRadioComponent3);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    _compView_0.create(_MaterialRadioComponent_0_5, [
      [_appEl_1, _appEl_2]
    ]);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupFlatRadioComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final dynamic local_option = locals['\$implicit'];
    changed = false;
    final currVal_2 = local_option;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialRadioComponent_0_5.value = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isReadOnly;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialRadioComponent_0_5.disabled = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _NgIf_1_9.ngIf = _ctx.useComponentRenderer;
    _NgIf_2_9.ngIf = !_ctx.useComponentRenderer;
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.isSelected(local_option);
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelectable(local_option);
    if (!identical(_expr_1, currVal_1)) {
      updateElemClass(_el_0, 'selectable', currVal_1);
      _expr_1 = currVal_1;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialTreeGroupFlatRadioComponent0)._query_MaterialRadioComponent_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _compView_0?.destroy();
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialTreeGroupFlatRadioComponent> viewFactory_MaterialTreeGroupFlatRadioComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeGroupFlatRadioComponent1(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatRadioComponent2 extends AppView<import2.MaterialTreeGroupFlatRadioComponent> {
  import8.Element _el_0;
  import13.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import14.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupFlatRadioComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupFlatRadioComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatRadioComponent> build() {
    _compView_0 = new import13.ViewDynamicComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'item component';
    addShimC(_el_0);
    _appEl_0 = new ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_8 = new import14.DynamicComponent(parentView.parentView.parentView.injectorGet(import15.SlowComponentLoader, parentView.parentView.viewData.parentIndex), _compView_0.ref, _appEl_0);
    _compView_0.create(_DynamicComponent_0_8, []);
    init0(_appEl_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupFlatRadioComponent _ctx = ctx;
    bool changed = false;
    final dynamic local_option = parentView.locals['\$implicit'];
    changed = false;
    final currVal_0 = _ctx.getComponentType(local_option);
    if (!identical(_expr_0, currVal_0)) {
      _DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.getComponentFactory(local_option);
    if (!identical(_expr_1, currVal_1)) {
      _DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = local_option;
    if (!identical(_expr_2, currVal_2)) {
      _DynamicComponent_0_8.value = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _DynamicComponent_0_8.ngAfterChanges();
    }
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _compView_0?.destroy();
    _DynamicComponent_0_8.ngOnDestroy();
  }
}

AppView<import2.MaterialTreeGroupFlatRadioComponent> viewFactory_MaterialTreeGroupFlatRadioComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeGroupFlatRadioComponent2(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatRadioComponent3 extends AppView<import2.MaterialTreeGroupFlatRadioComponent> {
  import8.Element _el_0;
  import8.Text _text_1;
  var _expr_0;
  _ViewMaterialTreeGroupFlatRadioComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupFlatRadioComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatRadioComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'item text';
    addShimE(_el_0);
    _text_1 = new import8.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupFlatRadioComponent _ctx = ctx;
    final dynamic local_option = parentView.locals['\$implicit'];
    final currVal_0 = import9.interpolate0(_ctx.getOptionAsText(local_option));
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialTreeGroupFlatRadioComponent> viewFactory_MaterialTreeGroupFlatRadioComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeGroupFlatRadioComponent3(parentView, parentIndex);
}

const List<dynamic> styles$MaterialTreeGroupFlatRadioComponentHost = const [];

class _ViewMaterialTreeGroupFlatRadioComponentHost0 extends AppView<dynamic> {
  ViewMaterialTreeGroupFlatRadioComponent0 _compView_0;
  import2.MaterialTreeGroupFlatRadioComponent _MaterialTreeGroupFlatRadioComponent_0_5;
  _ViewMaterialTreeGroupFlatRadioComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialTreeGroupFlatRadioComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeGroupFlatRadioComponent_0_5 = new import2.MaterialTreeGroupFlatRadioComponent(this.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref, this.injectorGet(import23.DropdownHandle, viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeGroupFlatRadioComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialTreeGroupFlatRadioComponent>(0, this, rootEl, _MaterialTreeGroupFlatRadioComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_MaterialTreeGroupFlatRadioComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeGroupFlatRadioComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialTreeGroupFlatRadioComponent> MaterialTreeGroupFlatRadioComponentNgFactory = const ComponentFactory<import2.MaterialTreeGroupFlatRadioComponent>('material-tree-group-flat-radio', viewFactory_MaterialTreeGroupFlatRadioComponentHost0, _MaterialTreeGroupFlatRadioComponentMetadata);
const List<dynamic> styles$MaterialTreeGroupFlatCheckComponent = const [import24.styles];

class ViewMaterialTreeGroupFlatCheckComponent0 extends AppView<import2.MaterialTreeGroupFlatCheckComponent> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewMaterialTreeGroupFlatCheckComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import8.document.createElement('material-tree-group-flat-check');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialTreeGroupFlatCheckComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatCheckComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = new TemplateRef(_appEl_0, viewFactory_MaterialTreeGroupFlatCheckComponent1);
    _NgFor_0_9 = new import4.NgFor(_appEl_0, _TemplateRef_0_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupFlatCheckComponent _ctx = ctx;
    final currVal_0 = _ctx.group;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_0_9.ngDoCheck();
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    if (firstCheck) {
      if (!identical(ctx.isMaterialTreeGroup, null)) {
        updateElemClass(rootEl, 'material-tree-group', ctx.isMaterialTreeGroup);
      }
    }
  }
}

AppView<import2.MaterialTreeGroupFlatCheckComponent> viewFactory_MaterialTreeGroupFlatCheckComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialTreeGroupFlatCheckComponent0(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatCheckComponent1 extends AppView<import2.MaterialTreeGroupFlatCheckComponent> {
  import8.Element _el_0;
  import25.ViewMaterialCheckboxComponent0 _compView_0;
  import26.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  _ViewMaterialTreeGroupFlatCheckComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupFlatCheckComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatCheckComponent> build() {
    _compView_0 = new import25.ViewMaterialCheckboxComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'material-tree-option tree-selection-state themeable';
    createAttr(_el_0, 'role', 'option');
    addShimC(_el_0);
    _MaterialCheckboxComponent_0_5 = new import26.MaterialCheckboxComponent(_el_0, _compView_0.ref, null, null, 'option');
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialTreeGroupFlatCheckComponent2);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = createViewContainerAnchor();
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MaterialTreeGroupFlatCheckComponent3);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    _compView_0.create(_MaterialCheckboxComponent_0_5, [
      [_appEl_1, _appEl_2]
    ]);
    final subscription_0 = _MaterialCheckboxComponent_0_5.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupFlatCheckComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final dynamic local_option = locals['\$implicit'];
    changed = false;
    final currVal_2 = (_ctx.isReadOnly || _ctx.showDisabledCheckbox(local_option));
    if (!identical(_expr_2, currVal_2)) {
      _MaterialCheckboxComponent_0_5.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isSelected(local_option);
    if (!identical(_expr_3, currVal_3)) {
      _MaterialCheckboxComponent_0_5.checked = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _NgIf_1_9.ngIf = _ctx.useComponentRenderer;
    _NgIf_2_9.ngIf = !_ctx.useComponentRenderer;
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.isSelected(local_option);
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelectable(local_option);
    if (!identical(_expr_1, currVal_1)) {
      updateElemClass(_el_0, 'selectable', currVal_1);
      _expr_1 = currVal_1;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _compView_0?.destroy();
  }

  void _handle_checkedChange_0_0($event) {
    final dynamic local_option = locals['\$implicit'];
    ctx.setSelectionState(local_option, $event);
  }
}

AppView<import2.MaterialTreeGroupFlatCheckComponent> viewFactory_MaterialTreeGroupFlatCheckComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeGroupFlatCheckComponent1(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatCheckComponent2 extends AppView<import2.MaterialTreeGroupFlatCheckComponent> {
  import8.Element _el_0;
  import13.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import14.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupFlatCheckComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupFlatCheckComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatCheckComponent> build() {
    _compView_0 = new import13.ViewDynamicComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'item component';
    addShimC(_el_0);
    _appEl_0 = new ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_8 = new import14.DynamicComponent(parentView.parentView.injectorGet(import15.SlowComponentLoader, parentView.viewData.parentIndex), _compView_0.ref, _appEl_0);
    _compView_0.create(_DynamicComponent_0_8, []);
    init0(_appEl_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupFlatCheckComponent _ctx = ctx;
    bool changed = false;
    final dynamic local_option = parentView.locals['\$implicit'];
    changed = false;
    final currVal_0 = _ctx.getComponentType(local_option);
    if (!identical(_expr_0, currVal_0)) {
      _DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.getComponentFactory(local_option);
    if (!identical(_expr_1, currVal_1)) {
      _DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = local_option;
    if (!identical(_expr_2, currVal_2)) {
      _DynamicComponent_0_8.value = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _DynamicComponent_0_8.ngAfterChanges();
    }
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _compView_0?.destroy();
    _DynamicComponent_0_8.ngOnDestroy();
  }
}

AppView<import2.MaterialTreeGroupFlatCheckComponent> viewFactory_MaterialTreeGroupFlatCheckComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeGroupFlatCheckComponent2(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatCheckComponent3 extends AppView<import2.MaterialTreeGroupFlatCheckComponent> {
  import8.Element _el_0;
  import8.Text _text_1;
  var _expr_0;
  _ViewMaterialTreeGroupFlatCheckComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupFlatCheckComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatCheckComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'item text';
    addShimE(_el_0);
    _text_1 = new import8.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupFlatCheckComponent _ctx = ctx;
    final dynamic local_option = parentView.locals['\$implicit'];
    final currVal_0 = import9.interpolate0(_ctx.getOptionAsText(local_option));
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialTreeGroupFlatCheckComponent> viewFactory_MaterialTreeGroupFlatCheckComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeGroupFlatCheckComponent3(parentView, parentIndex);
}

const List<dynamic> styles$MaterialTreeGroupFlatCheckComponentHost = const [];

class _ViewMaterialTreeGroupFlatCheckComponentHost0 extends AppView<dynamic> {
  ViewMaterialTreeGroupFlatCheckComponent0 _compView_0;
  import2.MaterialTreeGroupFlatCheckComponent _MaterialTreeGroupFlatCheckComponent_0_5;
  _ViewMaterialTreeGroupFlatCheckComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialTreeGroupFlatCheckComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeGroupFlatCheckComponent_0_5 = new import2.MaterialTreeGroupFlatCheckComponent(this.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref, this.injectorGet(import23.DropdownHandle, viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeGroupFlatCheckComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialTreeGroupFlatCheckComponent>(0, this, rootEl, _MaterialTreeGroupFlatCheckComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_MaterialTreeGroupFlatCheckComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeGroupFlatCheckComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialTreeGroupFlatCheckComponent> MaterialTreeGroupFlatCheckComponentNgFactory = const ComponentFactory<import2.MaterialTreeGroupFlatCheckComponent>('material-tree-group-flat-check', viewFactory_MaterialTreeGroupFlatCheckComponentHost0, _MaterialTreeGroupFlatCheckComponentMetadata);
const _MaterialTreeGroupFlatListComponentMetadata = const [];
const _MaterialTreeGroupFlatRadioComponentMetadata = const [];
const _MaterialTreeGroupFlatCheckComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeGroupFlatListComponent, MaterialTreeGroupFlatListComponentNgFactory);
  _ngRef.registerComponent(MaterialTreeGroupFlatRadioComponent, MaterialTreeGroupFlatRadioComponentNgFactory);
  _ngRef.registerComponent(MaterialTreeGroupFlatCheckComponent, MaterialTreeGroupFlatCheckComponentNgFactory);
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
}
