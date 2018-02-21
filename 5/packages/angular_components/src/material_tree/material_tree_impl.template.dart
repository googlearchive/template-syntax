// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_tree_impl.dart';
export 'material_tree_impl.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/src/material_tree/group/material_tree_group.dart';
import 'package:angular_components/src/material_tree/group/material_tree_group_flat.dart';
import 'package:angular_components/src/material_tree/material_tree_rendering_options.dart';
import 'package:angular_components/src/material_tree/material_tree_root.dart';
import 'package:angular_components/model/selection/select.dart';
import 'package:angular_components/model/selection/selection_container.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/ui/has_factory.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/selection/select.template.dart' as _ref1;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref2;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref3;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref4;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref5;
import 'package:angular_components/src/material_tree/group/material_tree_group.template.dart' as _ref6;
import 'package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart' as _ref7;
import 'package:angular_components/src/material_tree/material_tree_rendering_options.template.dart' as _ref8;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref9;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tree_impl.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import11;
import 'group/material_tree_group.template.dart' as import12;
import 'group/material_tree_group.dart' as import13;
import 'material_tree_root.dart' as import14;
import '../../mixins/material_dropdown_base.dart' as import15;
import 'package:angular/src/core/di/opaque_token.dart' as import16;
import '../../model/selection/selection_options.dart' as import17;
import 'group/material_tree_group_flat.template.dart' as import18;
import 'group/material_tree_group_flat.dart' as import19;

const List<dynamic> styles$MaterialTreeComponent = const [];

class ViewMaterialTreeComponent0 extends AppView<import1.MaterialTreeComponent> {
  bool _query_MaterialTreeGroupComponent_1_0_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_7;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  static RenderComponentType _renderType;
  ViewMaterialTreeComponent0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import7.document.createElement('material-tree');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$MaterialTreeComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    final import7.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_MaterialTreeComponent1);
    _NgIf_0_7 = new NgIf(_appEl_0, _TemplateRef_0_6);
    var _anchor_1 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MaterialTreeComponent3);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialTreeComponent _ctx = ctx;
    _NgIf_0_7.ngIf = _ctx.supportsHierarchy;
    _NgIf_1_7.ngIf = !_ctx.supportsHierarchy;
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    if (_query_MaterialTreeGroupComponent_1_0_isDirty) {
      ctx.treeGroupNodes = _appEl_0.mapNestedViews((_ViewMaterialTreeComponent1 nestedView) {
        return nestedView._appEl_0.mapNestedViews((_ViewMaterialTreeComponent2 nestedView) {
          return [nestedView._MaterialTreeGroupComponent_0_4];
        });
      });
      _query_MaterialTreeGroupComponent_1_0_isDirty = false;
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_1?.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_2 = ctx.role;
    if (!identical(_expr_2, currVal_2)) {
      setAttr(rootEl, 'role', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = (ctx.showFlatCheck ? 'true' : 'false');
    if (!identical(_expr_3, currVal_3)) {
      setAttr(rootEl, 'aria-multiselectable', currVal_3?.toString());
      _expr_3 = currVal_3;
    }
    final currVal_4 = (ctx.showFlatList ? 'true' : 'false');
    if (!identical(_expr_4, currVal_4)) {
      setAttr(rootEl, 'aria-readonly', currVal_4?.toString());
      _expr_4 = currVal_4;
    }
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialTreeComponent0(parentView, parentIndex);
}

class _ViewMaterialTreeComponent1 extends AppView<import1.MaterialTreeComponent> {
  ViewContainer _appEl_0;
  import11.NgFor _NgFor_0_7;
  var _expr_0;
  _ViewMaterialTreeComponent1(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    var _anchor_0 = ngAnchor.clone(false);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_MaterialTreeComponent2);
    _NgFor_0_7 = new import11.NgFor(_appEl_0, _TemplateRef_0_6);
    init0(_appEl_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialTreeComponent _ctx = ctx;
    final currVal_0 = _ctx.options.optionGroups;
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

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeComponent1(parentView, parentIndex);
}

class _ViewMaterialTreeComponent2 extends AppView<import1.MaterialTreeComponent> {
  import7.Element _el_0;
  import12.ViewMaterialTreeGroupComponent0 _compView_0;
  import13.MaterialTreeGroupComponent _MaterialTreeGroupComponent_0_4;
  var _expr_0;
  int _expr_1;
  bool _expr_2;
  _ViewMaterialTreeComponent2(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.EMBEDDED, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    _compView_0 = new import12.ViewMaterialTreeGroupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _MaterialTreeGroupComponent_0_4 = new import13.MaterialTreeGroupComponent(parentView.injectorGet(import14.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref, parentView.injectorGet(import15.DropdownHandle, viewData.parentIndex, null), parentView.injectorGet(const import16.OpaqueToken('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeGroupComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.MaterialTreeGroupComponent) && (0 == nodeIndex))) {
      return _MaterialTreeGroupComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialTreeComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final import17.OptionGroup<dynamic> local_group = locals['\$implicit'];
    final int local_optionIndex = locals['index'];
    final currVal_0 = local_group;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialTreeGroupComponent_0_4.group = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.maxInitialOptionsShown(local_group, local_optionIndex);
    if (!identical(_expr_1, currVal_1)) {
      _MaterialTreeGroupComponent_0_4.maxInitialOptionsShown = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.shouldExpand(local_group, local_optionIndex);
    if (!identical(_expr_2, currVal_2)) {
      _MaterialTreeGroupComponent_0_4.expandAll = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView.parentView as ViewMaterialTreeComponent0)._query_MaterialTreeGroupComponent_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialTreeGroupComponent_0_4.ngOnDestroy();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeComponent2(parentView, parentIndex);
}

class _ViewMaterialTreeComponent3 extends AppView<import1.MaterialTreeComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_7;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_7;
  _ViewMaterialTreeComponent3(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    var _anchor_0 = ngAnchor.clone(false);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_MaterialTreeComponent4);
    _NgIf_0_7 = new NgIf(_appEl_0, _TemplateRef_0_6);
    var _anchor_1 = ngAnchor.clone(false);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MaterialTreeComponent6);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    var _anchor_2 = ngAnchor.clone(false);
    _appEl_2 = new ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_MaterialTreeComponent8);
    _NgIf_2_7 = new NgIf(_appEl_2, _TemplateRef_2_6);
    init([_appEl_0, _appEl_1, _appEl_2], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialTreeComponent _ctx = ctx;
    _NgIf_0_7.ngIf = _ctx.showFlatList;
    _NgIf_1_7.ngIf = _ctx.showFlatRadio;
    _NgIf_2_7.ngIf = _ctx.showFlatCheck;
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeComponent3(parentView, parentIndex);
}

class _ViewMaterialTreeComponent4 extends AppView<import1.MaterialTreeComponent> {
  ViewContainer _appEl_0;
  import11.NgFor _NgFor_0_7;
  var _expr_0;
  _ViewMaterialTreeComponent4(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    var _anchor_0 = ngAnchor.clone(false);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_MaterialTreeComponent5);
    _NgFor_0_7 = new import11.NgFor(_appEl_0, _TemplateRef_0_6);
    init0(_appEl_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialTreeComponent _ctx = ctx;
    final currVal_0 = _ctx.options.optionGroups;
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

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent4(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeComponent4(parentView, parentIndex);
}

class _ViewMaterialTreeComponent5 extends AppView<import1.MaterialTreeComponent> {
  import7.Element _el_0;
  import18.ViewMaterialTreeGroupFlatListComponent0 _compView_0;
  import19.MaterialTreeGroupFlatListComponent _MaterialTreeGroupFlatListComponent_0_4;
  var _expr_0;
  _ViewMaterialTreeComponent5(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    _compView_0 = new import18.ViewMaterialTreeGroupFlatListComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _MaterialTreeGroupFlatListComponent_0_4 = new import19.MaterialTreeGroupFlatListComponent(parentView.injectorGet(import14.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref);
    _compView_0.create(_MaterialTreeGroupFlatListComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.MaterialTreeGroupFlatListComponent) && (0 == nodeIndex))) {
      return _MaterialTreeGroupFlatListComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final import17.OptionGroup<dynamic> local_group = locals['\$implicit'];
    final currVal_0 = local_group;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialTreeGroupFlatListComponent_0_4.group = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent5(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeComponent5(parentView, parentIndex);
}

class _ViewMaterialTreeComponent6 extends AppView<import1.MaterialTreeComponent> {
  ViewContainer _appEl_0;
  import11.NgFor _NgFor_0_7;
  var _expr_0;
  _ViewMaterialTreeComponent6(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    var _anchor_0 = ngAnchor.clone(false);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_MaterialTreeComponent7);
    _NgFor_0_7 = new import11.NgFor(_appEl_0, _TemplateRef_0_6);
    init0(_appEl_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialTreeComponent _ctx = ctx;
    final currVal_0 = _ctx.options.optionGroups;
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

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent6(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeComponent6(parentView, parentIndex);
}

class _ViewMaterialTreeComponent7 extends AppView<import1.MaterialTreeComponent> {
  import7.Element _el_0;
  import18.ViewMaterialTreeGroupFlatRadioComponent0 _compView_0;
  import19.MaterialTreeGroupFlatRadioComponent _MaterialTreeGroupFlatRadioComponent_0_4;
  var _expr_0;
  _ViewMaterialTreeComponent7(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    _compView_0 = new import18.ViewMaterialTreeGroupFlatRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _MaterialTreeGroupFlatRadioComponent_0_4 = new import19.MaterialTreeGroupFlatRadioComponent(parentView.injectorGet(import14.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref, parentView.injectorGet(import15.DropdownHandle, viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeGroupFlatRadioComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.MaterialTreeGroupFlatRadioComponent) && (0 == nodeIndex))) {
      return _MaterialTreeGroupFlatRadioComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final import17.OptionGroup<dynamic> local_group = locals['\$implicit'];
    final currVal_0 = local_group;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialTreeGroupFlatRadioComponent_0_4.group = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent7(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeComponent7(parentView, parentIndex);
}

class _ViewMaterialTreeComponent8 extends AppView<import1.MaterialTreeComponent> {
  ViewContainer _appEl_0;
  import11.NgFor _NgFor_0_7;
  var _expr_0;
  _ViewMaterialTreeComponent8(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    var _anchor_0 = ngAnchor.clone(false);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_MaterialTreeComponent9);
    _NgFor_0_7 = new import11.NgFor(_appEl_0, _TemplateRef_0_6);
    init0(_appEl_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialTreeComponent _ctx = ctx;
    final currVal_0 = _ctx.options.optionGroups;
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

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent8(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeComponent8(parentView, parentIndex);
}

class _ViewMaterialTreeComponent9 extends AppView<import1.MaterialTreeComponent> {
  import7.Element _el_0;
  import18.ViewMaterialTreeGroupFlatCheckComponent0 _compView_0;
  import19.MaterialTreeGroupFlatCheckComponent _MaterialTreeGroupFlatCheckComponent_0_4;
  var _expr_0;
  _ViewMaterialTreeComponent9(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    _compView_0 = new import18.ViewMaterialTreeGroupFlatCheckComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _MaterialTreeGroupFlatCheckComponent_0_4 = new import19.MaterialTreeGroupFlatCheckComponent(parentView.injectorGet(import14.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref, parentView.injectorGet(import15.DropdownHandle, viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeGroupFlatCheckComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.MaterialTreeGroupFlatCheckComponent) && (0 == nodeIndex))) {
      return _MaterialTreeGroupFlatCheckComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final import17.OptionGroup<dynamic> local_group = locals['\$implicit'];
    final currVal_0 = local_group;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialTreeGroupFlatCheckComponent_0_4.group = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent9(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeComponent9(parentView, parentIndex);
}

const List<dynamic> styles$MaterialTreeComponentHost = const [];

class _ViewMaterialTreeComponentHost0 extends AppView<dynamic> {
  ViewMaterialTreeComponent0 _compView_0;
  import1.MaterialTreeComponent _MaterialTreeComponent_0_4;
  _ViewMaterialTreeComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialTreeComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeComponent_0_4 = new import1.MaterialTreeComponent(this.injectorGet(import14.MaterialTreeRoot, viewData.parentIndex, null), null);
    _compView_0.create(_MaterialTreeComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.MaterialTreeComponent>(0, this, rootEl, _MaterialTreeComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import1.MaterialTreeComponent) || identical(token, import14.MaterialTreeRoot)) && (0 == nodeIndex))) {
      return _MaterialTreeComponent_0_4;
    }
    return notFoundResult;
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

AppView viewFactory_MaterialTreeComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialTreeComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.MaterialTreeComponent> MaterialTreeComponentNgFactory = const ComponentFactory<import1.MaterialTreeComponent>('material-tree', viewFactory_MaterialTreeComponentHost0, _MaterialTreeComponentMetadata);
const _MaterialTreeComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeComponent, MaterialTreeComponentNgFactory);
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
