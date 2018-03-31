// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_time_picker.dart';
export 'material_time_picker.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:quiver/time.dart';
import 'package:angular_components/material_datepicker/module.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/model/a11y/keyboard_handler_mixin.dart';
import 'package:angular_components/model/selection/select.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/string_selection_options.dart';
import 'package:angular_components/utils/angular/properties/properties.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref1;
import 'package:angular_components/material_input/material_input.template.dart' as _ref2;
import 'package:angular_components/material_select/material_dropdown_select.template.dart' as _ref3;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref4;
import 'package:angular_components/model/selection/select.template.dart' as _ref5;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref6;
import 'package:angular_components/model/selection/string_selection_options.template.dart' as _ref7;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref8;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref9;
import 'package:angular_components/material_datepicker/material_time_picker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_time_picker.dart' as import2;
import 'dart:html' as import3;
import '../material_select/material_dropdown_select.template.dart' as import4;
import '../material_select/material_dropdown_select.dart' as import5;
import '../material_input/material_input.template.dart' as import6;
import '../material_input/deferred_validator.dart' as import7;
import 'package:angular_forms/src/directives/ng_model.dart' as import8;
import '../material_input/material_input.dart' as import9;
import '../material_input/material_input_default_value_accessor.dart' as import10;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/angular.dart';
import '../utils/id_generator/id_generator.dart' as import16;
import '../src/laminate/popup/popup_size_provider.dart' as import17;
import 'package:angular/src/core/di/opaque_token.dart' as import18;
import 'package:angular_forms/src/directives/ng_control.dart' as import19;
import '../utils/angular/reference/reference.dart' as import20;
import '../focus/focus.dart' as import21;
import '../material_input/base_material_input.dart' as import22;
import '../mixins/material_dropdown_base.dart' as import23;
import '../model/ui/has_renderer.dart' as import24;
import '../content/deferred_content_aware.dart' as import25;
import '../model/selection/selection_container.dart' as import26;
import '../material_select/activation_handler.dart' as import27;

const List<dynamic> styles$MaterialTimePickerComponent = const [import0.styles];

class ViewMaterialTimePickerComponent0 extends AppView<import2.MaterialTimePickerComponent> {
  import3.Element _el_0;
  import4.ViewMaterialDropdownSelectComponent0 _compView_0;
  import5.MaterialDropdownSelectComponent _MaterialDropdownSelectComponent_0_5;
  import3.DivElement _el_1;
  import3.DivElement _el_2;
  import3.Element _el_3;
  import6.ViewMaterialInputComponent0 _compView_3;
  import7.DeferredValidator _DeferredValidator_3_5;
  List<dynamic> _NgValidators_3_6;
  import8.NgModel _NgModel_3_7;
  import8.NgModel _NgControl_3_8;
  import9.MaterialInputComponent _MaterialInputComponent_3_9;
  import9.MaterialInputComponent _BaseMaterialInput_3_10;
  import10.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_3_11;
  String _expr_0;
  bool _expr_1;
  bool _expr_4;
  String _expr_5;
  var _expr_7;
  var _expr_8;
  String _expr_10;
  bool _expr_11;
  bool _expr_12;
  String _expr_13;
  String _expr_14;
  bool _expr_15;
  static RenderComponentType _renderType;
  ViewMaterialTimePickerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-time-picker');
    _renderType ??= import14.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialTimePickerComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialTimePickerComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = new import4.ViewMaterialDropdownSelectComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _MaterialDropdownSelectComponent_0_5 = new import5.MaterialDropdownSelectComponent(parentView.injectorGet(import16.IdGenerator, viewData.parentIndex, null), parentView.injectorGet(import17.PopupSizeProvider, viewData.parentIndex, null), parentView.injectorGet(const import18.OpaqueToken('isRtl'), viewData.parentIndex, null), null, _el_0);
    var doc = import3.document;
    _el_1 = doc.createElement('div');
    createAttr(_el_1, 'header', '');
    addShimC(_el_1);
    _el_2 = createDivAndAppend(doc, _el_1);
    _el_2.className = 'time-input-box';
    addShimC(_el_2);
    _compView_3 = new import6.ViewMaterialInputComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    _el_2.append(_el_3);
    createAttr(_el_3, 'type', 'text');
    addShimC(_el_3);
    _DeferredValidator_3_5 = new import7.DeferredValidator();
    _NgValidators_3_6 = [_DeferredValidator_3_5];
    _NgModel_3_7 = new import8.NgModel(_NgValidators_3_6, null);
    _NgControl_3_8 = _NgModel_3_7;
    _MaterialInputComponent_3_9 = new import9.MaterialInputComponent('text', null, _NgControl_3_8, _compView_3.ref, _DeferredValidator_3_5);
    _BaseMaterialInput_3_10 = _MaterialInputComponent_3_9;
    _MaterialInputDefaultValueAccessor_3_11 = new import10.MaterialInputDefaultValueAccessor(_BaseMaterialInput_3_10, _NgControl_3_8);
    _compView_3.create(_MaterialInputComponent_3_9, [const []]);
    _compView_0.create(_MaterialDropdownSelectComponent_0_5, [
      const [],
      [_el_1],
      const [],
      const [],
      const [],
      const []
    ]);
    final subscription_0 = _MaterialDropdownSelectComponent_0_5.visibleStream.listen(eventHandler1(_handle_visibleChange_0_0));
    _el_1.addEventListener('keypress', eventHandler1(ctx.onKeyPress));
    _el_1.addEventListener('keydown', eventHandler1(ctx.onInputBoxKeyDown));
    final subscription_1 = _NgModel_3_7.update.listen(eventHandler1(_handle_ngModelChange_3_2));
    final subscription_2 = _MaterialInputComponent_3_9.onKeypress.listen(eventHandler1(ctx.onTextChange));
    final subscription_3 = _MaterialInputComponent_3_9.onBlur.listen(eventHandler0(ctx.onBlur));
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import7.DeferredValidator) && (3 == nodeIndex))) {
      return _DeferredValidator_3_5;
    }
    if ((identical(token, const import18.MultiToken('NgValidators')) && (3 == nodeIndex))) {
      return _NgValidators_3_6;
    }
    if ((identical(token, import8.NgModel) && (3 == nodeIndex))) {
      return _NgModel_3_7;
    }
    if ((identical(token, import19.NgControl) && (3 == nodeIndex))) {
      return _NgControl_3_8;
    }
    if ((((identical(token, import9.MaterialInputComponent) || identical(token, import20.ReferenceDirective)) || identical(token, import21.Focusable)) && (3 == nodeIndex))) {
      return _MaterialInputComponent_3_9;
    }
    if ((identical(token, import22.BaseMaterialInput) && (3 == nodeIndex))) {
      return _BaseMaterialInput_3_10;
    }
    if ((identical(token, import10.MaterialInputDefaultValueAccessor) && (3 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_3_11;
    }
    if ((((((((identical(token, import5.MaterialDropdownSelectComponent) || identical(token, import23.DropdownHandle)) || identical(token, import24.HasRenderer)) || identical(token, import25.DeferredContentAware)) || identical(token, import26.SelectionContainer)) || identical(token, import17.PopupSizeProvider)) || identical(token, import27.ActivationHandler)) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialDropdownSelectComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTimePickerComponent _ctx = ctx;
    bool changed = false;
    Map<String, SimpleChange> changes;
    bool firstCheck = (this.cdState == 0);
    changes = null;
    if (firstCheck) {
      _MaterialDropdownSelectComponent_0_5.popupMatchInputWidth = false;
      changes ??= {};
      changes['popupMatchInputWidth'] = new SimpleChange(null, false);
      _MaterialDropdownSelectComponent_0_5.slide = 'y';
      changes ??= {};
      changes['slide'] = new SimpleChange(null, 'y');
      if (!identical(_ctx.renderTime, null)) {
        _MaterialDropdownSelectComponent_0_5.itemRenderer = _ctx.renderTime;
        changes ??= {};
        changes['itemRenderer'] = new SimpleChange(null, _ctx.renderTime);
      }
    }
    final currVal_0 = _ctx.dropdownText;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialDropdownSelectComponent_0_5.buttonText = currVal_0;
      changes ??= <String, SimpleChange>{};
      changes['buttonText'] = new SimpleChange(_expr_0, currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disabled;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialDropdownSelectComponent_0_5.disabled = currVal_1;
      changes ??= <String, SimpleChange>{};
      changes['disabled'] = new SimpleChange(_expr_1, currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_4 = _ctx.popupVisible;
    if (!identical(_expr_4, currVal_4)) {
      _MaterialDropdownSelectComponent_0_5.visible = currVal_4;
      changes ??= <String, SimpleChange>{};
      changes['visible'] = new SimpleChange(_expr_4, currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.error;
    if (!identical(_expr_5, currVal_5)) {
      _MaterialDropdownSelectComponent_0_5.error = currVal_5;
      changes ??= <String, SimpleChange>{};
      changes['error'] = new SimpleChange(_expr_5, currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_7 = _ctx.timeOptions;
    if (!identical(_expr_7, currVal_7)) {
      _MaterialDropdownSelectComponent_0_5.options = currVal_7;
      changes ??= <String, SimpleChange>{};
      changes['options'] = new SimpleChange(_expr_7, currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.selectedTime;
    if (!identical(_expr_8, currVal_8)) {
      _MaterialDropdownSelectComponent_0_5.selection = currVal_8;
      changes ??= <String, SimpleChange>{};
      changes['selection'] = new SimpleChange(_expr_8, currVal_8);
      _expr_8 = currVal_8;
    }
    if (!identical(changes, null)) {
      _MaterialDropdownSelectComponent_0_5.ngOnChanges(changes);
    }
    changed = false;
    _NgModel_3_7.model = _ctx.timeInputText;
    _NgModel_3_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_3_7.ngOnInit();
    }
    changed = false;
    final currVal_10 = _ctx.inputPlaceholderMsg;
    if (!identical(_expr_10, currVal_10)) {
      _MaterialInputComponent_3_9.label = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.displayErrorPanel;
    if (!identical(_expr_11, currVal_11)) {
      _MaterialInputComponent_3_9.displayBottomPanel = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.disabled;
    if (!identical(_expr_12, currVal_12)) {
      _MaterialInputComponent_3_9.disabled = currVal_12;
      changed = true;
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.inputError;
    if (!identical(_expr_13, currVal_13)) {
      _MaterialInputComponent_3_9.error = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.inputPlaceholderMsg;
    if (!identical(_expr_14, currVal_14)) {
      _MaterialInputComponent_3_9.requiredErrorMsg = currVal_14;
      changed = true;
      _expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.required;
    if (!identical(_expr_15, currVal_15)) {
      _MaterialInputComponent_3_9.required = currVal_15;
      changed = true;
      _expr_15 = currVal_15;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    _compView_3.detectChanges();
    if (firstCheck) {
      _MaterialInputComponent_3_9.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_3?.destroy();
    _MaterialInputComponent_3_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_3_11.ngOnDestroy();
    _MaterialDropdownSelectComponent_0_5.ngOnDestroy();
  }

  void _handle_visibleChange_0_0($event) {
    ctx.popupVisible = $event;
  }

  void _handle_ngModelChange_3_2($event) {
    ctx.timeInputText = $event;
  }
}

AppView<import2.MaterialTimePickerComponent> viewFactory_MaterialTimePickerComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialTimePickerComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialTimePickerComponentHost = const [];

class _ViewMaterialTimePickerComponentHost0 extends AppView<dynamic> {
  ViewMaterialTimePickerComponent0 _compView_0;
  import2.MaterialTimePickerComponent _MaterialTimePickerComponent_0_5;
  _ViewMaterialTimePickerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialTimePickerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTimePickerComponent_0_5 = new import2.MaterialTimePickerComponent(this.injectorGet(const import18.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex));
    _compView_0.create(_MaterialTimePickerComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialTimePickerComponent>(0, this, rootEl, _MaterialTimePickerComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      _MaterialTimePickerComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialTimePickerComponent_0_5.ngOnDestroy();
  }
}

AppView viewFactory_MaterialTimePickerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTimePickerComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialTimePickerComponent> MaterialTimePickerComponentNgFactory = const ComponentFactory<import2.MaterialTimePickerComponent>('material-time-picker', viewFactory_MaterialTimePickerComponentHost0, _MaterialTimePickerComponentMetadata);
const _MaterialTimePickerComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTimePickerComponent, MaterialTimePickerComponentNgFactory);
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
