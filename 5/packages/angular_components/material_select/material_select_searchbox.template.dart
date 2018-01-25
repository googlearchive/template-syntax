// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_select_searchbox.dart';
export 'material_select_searchbox.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/mixins/focusable_mixin.dart';
import 'package:angular_components/model/selection/select.dart';
import 'package:angular_components/utils/async/async.dart';
import 'package:angular_components/utils/browser/events/events.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/material_input/material_input.template.dart' as _ref2;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref3;
import 'package:angular_components/model/selection/select.template.dart' as _ref4;
import 'package:angular_components/utils/async/async.template.dart' as _ref5;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref6;
import 'package:angular_forms/angular_forms.template.dart' as _ref7;

import 'package:angular_components/material_select/material_select_searchbox.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_select_searchbox.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import '../material_input/material_input.template.dart' as import5;
import '../material_input/deferred_validator.dart' as import6;
import 'package:angular_forms/src/directives/ng_model.dart' as import7;
import '../material_input/material_input.dart' as import8;
import '../material_input/material_input_default_value_accessor.dart' as import9;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import15;
import 'package:angular_forms/src/directives/ng_control.dart' as import16;
import '../utils/angular/reference/reference.dart' as import17;
import '../focus/focus.dart' as import18;
import '../material_input/base_material_input.dart' as import19;

const List<dynamic> styles$MaterialSelectSearchboxComponent = const [import0.styles];

class ViewMaterialSelectSearchboxComponent0 extends AppView<import2.MaterialSelectSearchboxComponent> {
  final import3.QueryList _viewQuery_MaterialInputComponent_0 = new import3.QueryList();
  import4.Element _el_0;
  import5.ViewMaterialInputComponent0 _compView_0;
  import6.DeferredValidator _DeferredValidator_0_4;
  List<dynamic> _NgValidators_0_5;
  import7.NgModel _NgModel_0_6;
  dynamic _NgControl_0_7;
  import8.MaterialInputComponent _MaterialInputComponent_0_8;
  dynamic _BaseMaterialInput_0_9;
  import9.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_10;
  String _expr_1;
  static RenderComponentType _renderType;
  ViewMaterialSelectSearchboxComponent0(AppView<dynamic> parentView, num parentIndex) : super(import11.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('material-select-searchbox');
    _renderType ??= import13.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialSelectSearchboxComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialSelectSearchboxComponent> build() {
    final import4.HtmlElement parentRenderNode = initViewRoot(rootEl);
    _compView_0 = new import5.ViewMaterialInputComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    _el_0.className = 'searchbox-input themeable';
    createAttr(_el_0, 'leadingGlyph', 'search');
    addShimC(_el_0);
    _DeferredValidator_0_4 = new import6.DeferredValidator();
    _NgValidators_0_5 = [_DeferredValidator_0_4];
    _NgModel_0_6 = new import7.NgModel(_NgValidators_0_5, null);
    _NgControl_0_7 = _NgModel_0_6;
    _MaterialInputComponent_0_8 = new import8.MaterialInputComponent(null, null, _NgControl_0_7, _compView_0.ref, _DeferredValidator_0_4);
    _BaseMaterialInput_0_9 = _MaterialInputComponent_0_8;
    _MaterialInputDefaultValueAccessor_0_10 = new import9.MaterialInputDefaultValueAccessor(_BaseMaterialInput_0_9, _NgControl_0_7);
    _compView_0.create(_MaterialInputComponent_0_8, [const []]);
    _el_0.addEventListener('keypress', eventHandler1(ctx.stopSpaceKeyPropagation));
    final subscription_0 = _NgModel_0_6.update.listen(eventHandler1(_handle_ngModelChange_0_2));
    final subscription_1 = _MaterialInputComponent_0_8.onFocus.listen(eventHandler1(ctx.handleFocus));
    _viewQuery_MaterialInputComponent_0.reset([_MaterialInputComponent_0_8]);
    ctx.input = _viewQuery_MaterialInputComponent_0.first;
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import6.DeferredValidator) && (0 == nodeIndex))) {
      return _DeferredValidator_0_4;
    }
    if ((identical(token, const import15.OpaqueToken('NgValidators')) && (0 == nodeIndex))) {
      return _NgValidators_0_5;
    }
    if ((identical(token, import7.NgModel) && (0 == nodeIndex))) {
      return _NgModel_0_6;
    }
    if ((identical(token, import16.NgControl) && (0 == nodeIndex))) {
      return _NgControl_0_7;
    }
    if ((((identical(token, import8.MaterialInputComponent) || identical(token, import17.ReferenceDirective)) || identical(token, import18.Focusable)) && (0 == nodeIndex))) {
      return _MaterialInputComponent_0_8;
    }
    if ((identical(token, import19.BaseMaterialInput) && (0 == nodeIndex))) {
      return _BaseMaterialInput_0_9;
    }
    if ((identical(token, import9.MaterialInputDefaultValueAccessor) && (0 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_0_10;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialSelectSearchboxComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_0_6.model = _ctx.inputText;
    _NgModel_0_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_0_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_0_8.displayBottomPanel = false;
      changed = true;
      _MaterialInputComponent_0_8.leadingGlyph = 'search';
      changed = true;
    }
    final currVal_1 = _ctx.label;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialInputComponent_0_8.label = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialInputComponent_0_8.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialInputComponent_0_8.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_0_10.ngOnDestroy();
  }

  void _handle_ngModelChange_0_2($event) {
    ctx.inputText = $event;
  }
}

AppView<import2.MaterialSelectSearchboxComponent> viewFactory_MaterialSelectSearchboxComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialSelectSearchboxComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialSelectSearchboxComponentHost = const [];

class _ViewMaterialSelectSearchboxComponentHost0 extends AppView<dynamic> {
  ViewMaterialSelectSearchboxComponent0 _compView_0;
  import2.MaterialSelectSearchboxComponent _MaterialSelectSearchboxComponent_0_4;
  _ViewMaterialSelectSearchboxComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import11.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialSelectSearchboxComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialSelectSearchboxComponent_0_4 = new import2.MaterialSelectSearchboxComponent();
    _compView_0.create(_MaterialSelectSearchboxComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialSelectSearchboxComponent>(0, this, rootEl, _MaterialSelectSearchboxComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.MaterialSelectSearchboxComponent) || identical(token, import18.Focusable)) && (0 == nodeIndex))) {
      return _MaterialSelectSearchboxComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialSelectSearchboxComponent_0_4.ngOnDestroy();
  }
}

AppView viewFactory_MaterialSelectSearchboxComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialSelectSearchboxComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialSelectSearchboxComponent> MaterialSelectSearchboxComponentNgFactory = const ComponentFactory<import2.MaterialSelectSearchboxComponent>('material-select-searchbox', viewFactory_MaterialSelectSearchboxComponentHost0, _MaterialSelectSearchboxComponentMetadata);
const _MaterialSelectSearchboxComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ngRef.registerComponent(
    MaterialSelectSearchboxComponent,
    MaterialSelectSearchboxComponentNgFactory,
  );
}
