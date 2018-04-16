// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_select.dart';
export 'material_select.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/material_list/material_list.dart';
import 'package:angular_components/model/selection/select.dart';
import 'package:angular_components/model/selection/selection_container.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/ui/has_renderer.dart';
import 'package:angular_components/model/ui/has_factory.dart';
import 'package:angular_components/model/ui/template_support.dart';
import 'package:angular_components/utils/angular/properties/properties.dart';
import 'material_select_base.dart';
import 'material_select_item.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_select_base.template.dart' as _ref0;
import 'material_select_item.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/material_list/material_list.template.dart' as _ref3;
import 'package:angular_components/model/selection/select.template.dart' as _ref4;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref5;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref6;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref7;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref8;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref9;
import 'package:angular_components/model/ui/template_support.template.dart' as _ref10;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref11;
import 'package:angular_components/material_select/material_select.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_select.dart' as import2;
import 'dart:html' as import3;
import '../material_list/material_list.template.dart' as import4;
import '../material_list/material_list.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import14;
import '../model/selection/selection_options.dart' as import15;
import 'material_select_item.template.dart' as import16;
import 'material_select_item.dart' as import17;
import '../utils/browser/dom_service/dom_service.dart' as import18;
import '../mixins/material_dropdown_base.dart' as import19;
import 'activation_handler.dart' as import20;
import '../model/selection/selection_container.dart' as import21;
import '../model/ui/has_renderer.dart' as import22;

const List<dynamic> styles$MaterialSelectComponent = const [import0.styles];

class ViewMaterialSelectComponent0 extends AppView<import2.MaterialSelectComponent> {
  import3.Element _el_0;
  import4.ViewMaterialListComponent0 _compView_0;
  import5.MaterialListComponent _MaterialListComponent_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  var _expr_0;
  var _expr_2;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewMaterialSelectComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('material-select');
    createAttr(rootEl, 'role', 'listbox');
    _renderType ??= import11.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialSelectComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialSelectComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = new import4.ViewMaterialListComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _MaterialListComponent_0_5 = new import5.MaterialListComponent();
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialSelectComponent1);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    _compView_0.create(_MaterialListComponent_0_5, [
      <dynamic>[projectableNodes[0]]..addAll([_appEl_1])
    ]);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialSelectComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_0 = _ctx.width;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialListComponent_0_5.width = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _NgIf_1_9.ngIf = (_ctx.options != null);
    _appEl_1.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _compView_0?.destroy();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_2 = ctx.isMultiSelect;
    if (!identical(_expr_2, currVal_2)) {
      setAttr(rootEl, 'aria-multiselectable', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = ctx.disabledStr;
    if (!identical(_expr_3, currVal_3)) {
      setAttr(rootEl, 'aria-disabled', currVal_3?.toString());
      _expr_3 = currVal_3;
    }
  }
}

AppView<import2.MaterialSelectComponent> viewFactory_MaterialSelectComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialSelectComponent0(parentView, parentIndex);
}

class _ViewMaterialSelectComponent1 extends AppView<import2.MaterialSelectComponent> {
  import3.DivElement _el_0;
  ViewContainer _appEl_1;
  import14.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewMaterialSelectComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'options-wrapper';
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialSelectComponent2);
    _NgFor_1_9 = new import14.NgFor(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialSelectComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.trackByIndexFn, null)) {
        (_NgFor_1_9.ngForTrackBy = _ctx.trackByIndexFn);
      }
    }
    final currVal_0 = _ctx.options.optionGroups;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_1_9.ngDoCheck();
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.MaterialSelectComponent> viewFactory_MaterialSelectComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialSelectComponent1(parentView, parentIndex);
}

class _ViewMaterialSelectComponent2 extends AppView<import2.MaterialSelectComponent> {
  import3.DivElement _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  bool _expr_0;
  _ViewMaterialSelectComponent2(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'group', '');
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialSelectComponent3);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import15.OptionGroup<dynamic> local_group = locals['\$implicit'];
    _NgIf_1_9.ngIf = local_group.isNotEmpty;
    _appEl_1.detectChangesInNestedViews();
    final currVal_0 = local_group.isEmpty;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'empty', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.MaterialSelectComponent> viewFactory_MaterialSelectComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialSelectComponent2(parentView, parentIndex);
}

class _ViewMaterialSelectComponent3 extends AppView<import2.MaterialSelectComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  import14.NgFor _NgFor_1_9;
  var _expr_1;
  _ViewMaterialSelectComponent3(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectComponent> build() {
    final _anchor_0 = createViewContainerAnchor();
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = new TemplateRef(_appEl_0, viewFactory_MaterialSelectComponent4);
    _NgIf_0_9 = new NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialSelectComponent5);
    _NgFor_1_9 = new import14.NgFor(_appEl_1, _TemplateRef_1_8);
    init([_appEl_0, _appEl_1], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import15.OptionGroup<dynamic> local_group = parentView.locals['\$implicit'];
    _NgIf_0_9.ngIf = local_group.hasLabel;
    final currVal_1 = local_group;
    if (!identical(_expr_1, currVal_1)) {
      _NgFor_1_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    _NgFor_1_9.ngDoCheck();
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.MaterialSelectComponent> viewFactory_MaterialSelectComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialSelectComponent3(parentView, parentIndex);
}

class _ViewMaterialSelectComponent4 extends AppView<import2.MaterialSelectComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewMaterialSelectComponent4(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('span');
    createAttr(_el_0, 'label', '');
    addShimE(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import15.OptionGroup<dynamic> local_group = parentView.parentView.locals['\$implicit'];
    final currVal_0 = import11.interpolate0(local_group.uiDisplayName);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialSelectComponent> viewFactory_MaterialSelectComponent4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialSelectComponent4(parentView, parentIndex);
}

class _ViewMaterialSelectComponent5 extends AppView<import2.MaterialSelectComponent> {
  import3.Element _el_0;
  import16.ViewMaterialSelectItemComponent0 _compView_0;
  import17.MaterialSelectItemComponent _MaterialSelectItemComponent_0_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  _ViewMaterialSelectComponent5(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectComponent> build() {
    _compView_0 = new import16.ViewMaterialSelectItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialSelectItemComponent_0_5 = new import17.MaterialSelectItemComponent(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import18.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGet(import19.DropdownHandle, parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.injectorGet(import20.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref, null);
    _compView_0.create(_MaterialSelectItemComponent_0_5, [const []]);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import21.SelectionItem) || identical(token, import22.HasRenderer)) && (0 == nodeIndex))) {
      return _MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialSelectComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_item = locals['\$implicit'];
    final currVal_0 = (_ctx.disabled || _ctx.isOptionDisabled(local_item));
    if (!identical(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_5.disabled = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.componentRenderer;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialSelectItemComponent_0_5.componentRenderer = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.factoryRenderer;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialSelectItemComponent_0_5.factoryRenderer = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_item;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialSelectItemComponent_0_5.value = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.itemRenderer;
    if (!identical(_expr_4, currVal_4)) {
      _MaterialSelectItemComponent_0_5.itemRenderer = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.selection;
    if (!identical(_expr_5, currVal_5)) {
      _MaterialSelectItemComponent_0_5.selection = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialSelectItemComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialSelectComponent> viewFactory_MaterialSelectComponent5(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialSelectComponent5(parentView, parentIndex);
}

const List<dynamic> styles$MaterialSelectComponentHost = const [];

class _ViewMaterialSelectComponentHost0 extends AppView<dynamic> {
  ViewMaterialSelectComponent0 _compView_0;
  import2.MaterialSelectComponent _MaterialSelectComponent_0_5;
  bool _query_SelectionItem_0_0_isDirty = true;
  _ViewMaterialSelectComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialSelectComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialSelectComponent_0_5 = new import2.MaterialSelectComponent();
    _MaterialSelectComponent_0_5.selectItems = [];
    _compView_0.create(_MaterialSelectComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialSelectComponent>(0, this, rootEl, _MaterialSelectComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import22.HasRenderer) || identical(token, import21.SelectionContainer)) && (0 == nodeIndex))) {
      return _MaterialSelectComponent_0_5;
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

AppView viewFactory_MaterialSelectComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialSelectComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialSelectComponent> MaterialSelectComponentNgFactory = const ComponentFactory<import2.MaterialSelectComponent>('material-select', viewFactory_MaterialSelectComponentHost0, _MaterialSelectComponentMetadata);
const _MaterialSelectComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSelectComponent, MaterialSelectComponentNgFactory);
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
}
