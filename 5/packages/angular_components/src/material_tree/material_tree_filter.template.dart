// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_tree_filter.dart';
export 'material_tree_filter.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/src/material_tree/material_tree_root.dart';
import 'package:angular_components/model/selection/select.dart';
import 'package:angular_components/utils/async/async.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_input/material_input.template.dart' as _ref1;
import 'package:angular_components/model/selection/select.template.dart' as _ref2;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref3;
import 'package:angular_components/utils/async/async.template.dart' as _ref4;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tree_filter.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../../material_input/material_input.template.dart' as import11;
import '../../material_input/deferred_validator.dart' as import12;
import 'package:angular_forms/src/directives/ng_model.dart' as import13;
import '../../material_input/material_input.dart' as import14;
import '../../material_input/material_input_default_value_accessor.dart' as import15;
import 'package:angular/src/core/di/opaque_token.dart' as import16;
import 'package:angular_forms/src/directives/ng_control.dart' as import17;
import '../../utils/angular/reference/reference.dart' as import18;
import '../../focus/focus.dart' as import19;
import '../../material_input/base_material_input.dart' as import20;
import 'material_tree_root.dart' as import21;

const List<dynamic> styles$MaterialTreeFilterComponent = const [];

class ViewMaterialTreeFilterComponent0 extends AppView<import1.MaterialTreeFilterComponent> {
  bool _query_materialInput_1_0_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static RenderComponentType _renderType;
  ViewMaterialTreeFilterComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import7.document.createElement('material-tree-filter');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$MaterialTreeFilterComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.MaterialTreeFilterComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = new TemplateRef(_appEl_0, viewFactory_MaterialTreeFilterComponent1);
    _NgIf_0_9 = new NgIf(_appEl_0, _TemplateRef_0_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialTreeFilterComponent _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.hasFilterable;
    _appEl_0.detectChangesInNestedViews();
    if (_query_materialInput_1_0_isDirty) {
      ctx.materialInput = (_appEl_0.mapNestedViews((_ViewMaterialTreeFilterComponent1 nestedView) {
        return [nestedView._MaterialInputComponent_0_9];
      }).isNotEmpty
          ? _appEl_0.mapNestedViews((_ViewMaterialTreeFilterComponent1 nestedView) {
              return [nestedView._MaterialInputComponent_0_9];
            }).first
          : null);
      _query_materialInput_1_0_isDirty = false;
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import1.MaterialTreeFilterComponent> viewFactory_MaterialTreeFilterComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialTreeFilterComponent0(parentView, parentIndex);
}

class _ViewMaterialTreeFilterComponent1 extends AppView<import1.MaterialTreeFilterComponent> {
  import7.Element _el_0;
  import11.ViewMaterialInputComponent0 _compView_0;
  import12.DeferredValidator _DeferredValidator_0_5;
  List<dynamic> _NgValidators_0_6;
  import13.NgModel _NgModel_0_7;
  import13.NgModel _NgControl_0_8;
  import14.MaterialInputComponent _MaterialInputComponent_0_9;
  import14.MaterialInputComponent _BaseMaterialInput_0_10;
  import15.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_11;
  String _expr_1;
  String _expr_3;
  _ViewMaterialTreeFilterComponent1(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeFilterComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeFilterComponent> build() {
    _compView_0 = new import11.ViewMaterialInputComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'style', 'width: 100%;');
    _DeferredValidator_0_5 = new import12.DeferredValidator();
    _NgValidators_0_6 = [_DeferredValidator_0_5];
    _NgModel_0_7 = new import13.NgModel(_NgValidators_0_6, null);
    _NgControl_0_8 = _NgModel_0_7;
    _MaterialInputComponent_0_9 = new import14.MaterialInputComponent(null, null, _NgControl_0_8, _compView_0.ref, _DeferredValidator_0_5);
    _BaseMaterialInput_0_10 = _MaterialInputComponent_0_9;
    _MaterialInputDefaultValueAccessor_0_11 = new import15.MaterialInputDefaultValueAccessor(_BaseMaterialInput_0_10, _NgControl_0_8);
    _compView_0.create(_MaterialInputComponent_0_9, [const []]);
    final subscription_0 = _MaterialInputComponent_0_9.onFocus.listen(eventHandler0(ctx.handleFocus));
    final subscription_1 = _MaterialInputComponent_0_9.onKeypress.listen(eventHandler1(_handle_inputKeyPress_0_1));
    init([_el_0], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import12.DeferredValidator) && (0 == nodeIndex))) {
      return _DeferredValidator_0_5;
    }
    if ((identical(token, const import16.MultiToken('NgValidators')) && (0 == nodeIndex))) {
      return _NgValidators_0_6;
    }
    if ((identical(token, import13.NgModel) && (0 == nodeIndex))) {
      return _NgModel_0_7;
    }
    if ((identical(token, import17.NgControl) && (0 == nodeIndex))) {
      return _NgControl_0_8;
    }
    if ((((identical(token, import14.MaterialInputComponent) || identical(token, import18.ReferenceDirective)) || identical(token, import19.Focusable)) && (0 == nodeIndex))) {
      return _MaterialInputComponent_0_9;
    }
    if ((identical(token, import20.BaseMaterialInput) && (0 == nodeIndex))) {
      return _BaseMaterialInput_0_10;
    }
    if ((identical(token, import15.MaterialInputDefaultValueAccessor) && (0 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_0_11;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialTreeFilterComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_0_7.model = _ctx.inputText;
    _NgModel_0_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_0_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_0_9.displayBottomPanel = false;
      changed = true;
    }
    final currVal_1 = _ctx.placeholder;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialInputComponent_0_9.label = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_3 = _ctx.leadingGlyph;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialInputComponent_0_9.leadingGlyph = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialInputComponent_0_9.ngAfterViewInit();
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialTreeFilterComponent0)._query_materialInput_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialInputComponent_0_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_0_11.ngOnDestroy();
  }

  void _handle_inputKeyPress_0_1($event) {
    ctx.inputText = $event;
  }
}

AppView<import1.MaterialTreeFilterComponent> viewFactory_MaterialTreeFilterComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeFilterComponent1(parentView, parentIndex);
}

const List<dynamic> styles$MaterialTreeFilterComponentHost = const [];

class _ViewMaterialTreeFilterComponentHost0 extends AppView<dynamic> {
  ViewMaterialTreeFilterComponent0 _compView_0;
  import1.MaterialTreeFilterComponent _MaterialTreeFilterComponent_0_5;
  _ViewMaterialTreeFilterComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialTreeFilterComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeFilterComponent_0_5 = new import1.MaterialTreeFilterComponent(this.injectorGet(import21.MaterialTreeRoot, viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeFilterComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.MaterialTreeFilterComponent>(0, this, rootEl, _MaterialTreeFilterComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_MaterialTreeFilterComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTreeFilterComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.MaterialTreeFilterComponent> MaterialTreeFilterComponentNgFactory = const ComponentFactory<import1.MaterialTreeFilterComponent>('material-tree-filter', viewFactory_MaterialTreeFilterComponentHost0, _MaterialTreeFilterComponentMetadata);
const _MaterialTreeFilterComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeFilterComponent, MaterialTreeFilterComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
