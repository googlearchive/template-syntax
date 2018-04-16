// **************************************************************************
// Generator: Instance of 'Compiler'
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
import 'dart:html' as import3;
import '../material_input/material_input.template.dart' as import4;
import '../material_input/deferred_validator.dart' as import5;
import 'package:angular_forms/src/directives/ng_model.dart' as import6;
import '../material_input/material_input.dart' as import7;
import '../material_input/material_input_default_value_accessor.dart' as import8;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import14;
import 'package:angular_forms/src/directives/ng_control.dart' as import15;
import '../utils/angular/reference/reference.dart' as import16;
import '../focus/focus.dart' as import17;
import '../material_input/base_material_input.dart' as import18;

const List<dynamic> styles$MaterialSelectSearchboxComponent = const [import0.styles];

class ViewMaterialSelectSearchboxComponent0 extends AppView<import2.MaterialSelectSearchboxComponent> {
  bool _query_MaterialInputComponent_1_0_isDirty = true;
  import3.Element _el_0;
  import4.ViewMaterialInputComponent0 _compView_0;
  import5.DeferredValidator _DeferredValidator_0_5;
  List<dynamic> _NgValidators_0_6;
  import6.NgModel _NgModel_0_7;
  import6.NgModel _NgControl_0_8;
  import7.MaterialInputComponent _MaterialInputComponent_0_9;
  import7.MaterialInputComponent _BaseMaterialInput_0_10;
  import8.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_11;
  String _expr_1;
  static RenderComponentType _renderType;
  ViewMaterialSelectSearchboxComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('material-select-searchbox');
    _renderType ??= import12.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialSelectSearchboxComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialSelectSearchboxComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = new import4.ViewMaterialInputComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    _el_0.className = 'searchbox-input themeable';
    createAttr(_el_0, 'leadingGlyph', 'search');
    addShimC(_el_0);
    _DeferredValidator_0_5 = new import5.DeferredValidator();
    _NgValidators_0_6 = [_DeferredValidator_0_5];
    _NgModel_0_7 = new import6.NgModel(_NgValidators_0_6, null);
    _NgControl_0_8 = _NgModel_0_7;
    _MaterialInputComponent_0_9 = new import7.MaterialInputComponent(null, null, null, _NgControl_0_8, _compView_0.ref, _DeferredValidator_0_5);
    _BaseMaterialInput_0_10 = _MaterialInputComponent_0_9;
    _MaterialInputDefaultValueAccessor_0_11 = new import8.MaterialInputDefaultValueAccessor(_BaseMaterialInput_0_10, _NgControl_0_8);
    _compView_0.create(_MaterialInputComponent_0_9, [const []]);
    _el_0.addEventListener('keypress', eventHandler1(ctx.stopSpaceKeyPropagation));
    final subscription_0 = _NgModel_0_7.update.listen(eventHandler1(_handle_ngModelChange_0_2));
    final subscription_1 = _MaterialInputComponent_0_9.onFocus.listen(eventHandler1(ctx.handleFocus));
    ctx.input = _MaterialInputComponent_0_9;
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.DeferredValidator) && (0 == nodeIndex))) {
      return _DeferredValidator_0_5;
    }
    if ((identical(token, const import14.MultiToken('NgValidators')) && (0 == nodeIndex))) {
      return _NgValidators_0_6;
    }
    if ((identical(token, import6.NgModel) && (0 == nodeIndex))) {
      return _NgModel_0_7;
    }
    if ((identical(token, import15.NgControl) && (0 == nodeIndex))) {
      return _NgControl_0_8;
    }
    if ((((identical(token, import7.MaterialInputComponent) || identical(token, import16.ReferenceDirective)) || identical(token, import17.Focusable)) && (0 == nodeIndex))) {
      return _MaterialInputComponent_0_9;
    }
    if ((identical(token, import18.BaseMaterialInput) && (0 == nodeIndex))) {
      return _BaseMaterialInput_0_10;
    }
    if ((identical(token, import8.MaterialInputDefaultValueAccessor) && (0 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_0_11;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialSelectSearchboxComponent _ctx = ctx;
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
      _MaterialInputComponent_0_9.leadingGlyph = 'search';
      changed = true;
    }
    final currVal_1 = _ctx.label;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialInputComponent_0_9.label = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
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
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialInputComponent_0_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_0_11.ngOnDestroy();
  }

  void _handle_ngModelChange_0_2($event) {
    ctx.inputText = $event;
  }
}

AppView<import2.MaterialSelectSearchboxComponent> viewFactory_MaterialSelectSearchboxComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialSelectSearchboxComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialSelectSearchboxComponentHost = const [];

class _ViewMaterialSelectSearchboxComponentHost0 extends AppView<dynamic> {
  ViewMaterialSelectSearchboxComponent0 _compView_0;
  import2.MaterialSelectSearchboxComponent _MaterialSelectSearchboxComponent_0_5;
  _ViewMaterialSelectSearchboxComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialSelectSearchboxComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialSelectSearchboxComponent_0_5 = new import2.MaterialSelectSearchboxComponent();
    _compView_0.create(_MaterialSelectSearchboxComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialSelectSearchboxComponent>(0, this, rootEl, _MaterialSelectSearchboxComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.Focusable) && (0 == nodeIndex))) {
      return _MaterialSelectSearchboxComponent_0_5;
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
    _MaterialSelectSearchboxComponent_0_5.ngOnDestroy();
  }
}

AppView viewFactory_MaterialSelectSearchboxComponentHost0(AppView<dynamic> parentView, int parentIndex) {
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

  _ngRef.registerComponent(MaterialSelectSearchboxComponent, MaterialSelectSearchboxComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
