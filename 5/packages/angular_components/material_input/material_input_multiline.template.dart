// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_input_multiline.dart';
export 'material_input_multiline.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/utils/angular/properties/properties.dart';
import 'package:angular_components/utils/angular/reference/reference.dart';
import 'package:angular_components/utils/browser/dom_service/angular_2.dart';
import 'base_material_input.dart';
import 'deferred_validator.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'base_material_input.template.dart' as _ref0;
import 'base_material_input.template.dart' as _ref1;
import 'deferred_validator.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'package:angular_components/focus/focus.template.dart' as _ref4;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref5;
import 'package:angular_components/utils/angular/reference/reference.template.dart' as _ref6;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref7;
import 'package:angular_forms/angular_forms.template.dart' as _ref8;
import 'package:angular_components/material_input/material_input.scss.css.shim.dart' as import0;
import 'package:angular_components/material_input/material_input_multiline.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_input_multiline.dart' as import3;
import 'dart:html' as import4;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import5;
import '../focus/focus.dart' as import6;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import7;
import 'package:angular_forms/src/directives/ng_model.dart' as import8;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/element_ref.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import18;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import19;
import 'package:angular_forms/src/directives/ng_control.dart' as import20;
import 'package:angular/src/common/directives/ng_switch.dart' as import21;
import 'deferred_validator.dart' as import22;
import '../utils/browser/dom_service/dom_service.dart' as import23;
import '../utils/angular/reference/reference.dart' as import24;
import 'base_material_input.dart' as import25;

const List<dynamic> styles$MaterialMultilineInputComponent = const [import0.styles, import1.styles];

class ViewMaterialMultilineInputComponent0 extends AppView<import3.MaterialMultilineInputComponent> {
  bool _query_FocusableDirective_1_0_isDirty = true;
  bool _query_lineHeightMeasure_1_1_isDirty = true;
  bool _query_textareaEl_1_2_isDirty = true;
  bool _query_popupSourceEl_1_3_isDirty = true;
  import4.DivElement _el_0;
  import4.DivElement _el_1;
  import4.DivElement _el_2;
  import4.DivElement _el_3;
  import4.Element _el_4;
  import4.Text _text_5;
  import4.DivElement _el_6;
  import4.DivElement _el_7;
  import4.Text _text_8;
  import4.DivElement _el_9;
  import4.Element _el_10;
  import4.TextAreaElement _el_11;
  import5.DefaultValueAccessor _DefaultValueAccessor_11_5;
  import6.FocusableDirective _FocusableDirective_11_6;
  List<import7.ControlValueAccessor<dynamic>> _NgValueAccessor_11_7;
  import8.NgModel _NgModel_11_8;
  import4.DivElement _el_12;
  import4.DivElement _el_13;
  import4.DivElement _el_14;
  import4.DivElement _el_15;
  ViewContainer _appEl_16;
  NgIf _NgIf_16_9;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  bool _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  bool _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  bool _expr_16;
  bool _expr_17;
  bool _expr_18;
  bool _expr_19;
  bool _expr_20;
  bool _expr_21;
  static RenderComponentType _renderType;
  ViewMaterialMultilineInputComponent0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import4.document.createElement('material-input');
    rootEl.className = 'themeable';
    createAttr(rootEl, 'tabIndex', '-1');
    _renderType ??= import14.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialMultilineInputComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    final import3.MaterialMultilineInputComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import4.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import4.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'baseline';
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'top-section';
    addShimC(_el_1);
    _el_2 = createDivAndAppend(doc, _el_1);
    _el_2.className = 'input-container';
    addShimC(_el_2);
    _el_3 = createDivAndAppend(doc, _el_2);
    createAttr(_el_3, 'aria-hidden', 'true');
    _el_3.className = 'label';
    addShimC(_el_3);
    _el_4 = createSpanAndAppend(doc, _el_3);
    _el_4.className = 'label-text';
    addShimE(_el_4);
    _text_5 = new import4.Text('');
    _el_4.append(_text_5);
    _el_6 = createDivAndAppend(doc, _el_2);
    addShimC(_el_6);
    _el_7 = createDivAndAppend(doc, _el_6);
    createAttr(_el_7, 'aria-hidden', 'true');
    _el_7.className = 'mirror-text';
    addShimC(_el_7);
    _text_8 = new import4.Text('');
    _el_7.append(_text_8);
    _el_9 = createDivAndAppend(doc, _el_6);
    createAttr(_el_9, 'aria-hidden', 'true');
    _el_9.className = 'line-height-measure';
    addShimC(_el_9);
    _el_10 = createAndAppend(doc, 'br', _el_9);
    addShimE(_el_10);
    _el_11 = createAndAppend(doc, 'textarea', _el_6);
    _el_11.className = 'textarea';
    createAttr(_el_11, 'focusableElement', '');
    addShimC(_el_11);
    _DefaultValueAccessor_11_5 = new import5.DefaultValueAccessor(_el_11);
    _FocusableDirective_11_6 = new import6.FocusableDirective(_el_11);
    _NgValueAccessor_11_7 = [_DefaultValueAccessor_11_5];
    _NgModel_11_8 = new import8.NgModel(null, _NgValueAccessor_11_7);
    project(_el_1, 0);
    _el_12 = createDivAndAppend(doc, _el_0);
    _el_12.className = 'underline';
    addShimC(_el_12);
    _el_13 = createDivAndAppend(doc, _el_12);
    _el_13.className = 'disabled-underline';
    addShimC(_el_13);
    _el_14 = createDivAndAppend(doc, _el_12);
    _el_14.className = 'unfocused-underline';
    addShimC(_el_14);
    _el_15 = createDivAndAppend(doc, _el_12);
    _el_15.className = 'focused-underline';
    addShimC(_el_15);
    final _anchor_16 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_16);
    _appEl_16 = new ViewContainer(16, null, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = new TemplateRef(_appEl_16, viewFactory_MaterialMultilineInputComponent1);
    _NgIf_16_9 = new NgIf(_appEl_16, _TemplateRef_16_8);
    _el_11.addEventListener('blur', eventHandler1(_handle_blur_11_0));
    _el_11.addEventListener('change', eventHandler1(_handle_change_11_1));
    _el_11.addEventListener('focus', eventHandler1(ctx.inputFocusAction));
    _el_11.addEventListener('input', eventHandler1(_handle_input_11_3));
    ctx.focusable = _FocusableDirective_11_6;
    ctx.lineHeightMeasure = new ElementRef(_el_9);
    ctx.textareaEl = new ElementRef(_el_11);
    ctx.popupSourceEl = new ElementRef(_el_0);
    init(const [], null);
    _rootEl.addEventListener('focus', eventHandler0(_ctx.focus));
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.DefaultValueAccessor) && (11 == nodeIndex))) {
      return _DefaultValueAccessor_11_5;
    }
    if ((identical(token, const import18.MultiToken<import19.ControlValueAccessor>('NgValueAccessor')) && (11 == nodeIndex))) {
      return _NgValueAccessor_11_7;
    }
    if (((identical(token, import8.NgModel) || identical(token, import20.NgControl)) && (11 == nodeIndex))) {
      return _NgModel_11_8;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialMultilineInputComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_11_8.model = _ctx.inputText;
    _NgModel_11_8.ngAfterChanges();
    if (firstCheck) {
      _NgModel_11_8.ngOnInit();
    }
    _NgIf_16_9.ngIf = _ctx.displayBottomPanel;
    _appEl_16.detectChangesInNestedViews();
    final currVal_0 = _ctx.floatingLabel;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_2, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.rows > 1);
    if (!identical(_expr_1, currVal_1)) {
      updateClass(_el_4, 'multiline', currVal_1);
      _expr_1 = currVal_1;
    }
    final bool currVal_2 = !_ctx.labelVisible;
    if (!identical(_expr_2, currVal_2)) {
      updateClass(_el_4, 'invisible', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.labelAnimated;
    if (!identical(_expr_3, currVal_3)) {
      updateClass(_el_4, 'animated', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.labelAnimationReset;
    if (!identical(_expr_4, currVal_4)) {
      updateClass(_el_4, 'reset', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = (_ctx.focused && _ctx.floatingLabelVisible);
    if (!identical(_expr_5, currVal_5)) {
      updateClass(_el_4, 'focused', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = (_ctx.invalid && _ctx.floatingLabelVisible);
    if (!identical(_expr_6, currVal_6)) {
      updateClass(_el_4, 'invalid', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = import14.interpolate0(_ctx.label);
    if (!identical(_expr_7, currVal_7)) {
      _text_5.text = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.minInputHeight;
    if (!identical(_expr_8, currVal_8)) {
      _el_7.style.setProperty('min-height', ((currVal_8?.toString() == null) ? null : (currVal_8?.toString() + 'px')));
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.maxInputHeight;
    if (!identical(_expr_9, currVal_9)) {
      _el_7.style.setProperty('max-height', ((currVal_9?.toString() == null) ? null : (currVal_9?.toString() + 'px')));
      _expr_9 = currVal_9;
    }
    final currVal_10 = (_ctx.mirrorText ?? '');
    if (!identical(_expr_10, currVal_10)) {
      _text_8.text = currVal_10;
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.disabled;
    if (!identical(_expr_11, currVal_11)) {
      updateClass(_el_11, 'disabledInput', currVal_11);
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.ariaLabel;
    if (!identical(_expr_12, currVal_12)) {
      setAttr(_el_11, 'aria-label', currVal_12?.toString());
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.disabled;
    if (!identical(_expr_13, currVal_13)) {
      setProp(_el_11, 'readOnly', currVal_13);
      _expr_13 = currVal_13;
    }
    final currVal_14 = import14.interpolate0(_ctx.invalid);
    if (!identical(_expr_14, currVal_14)) {
      setAttr(_el_11, 'aria-invalid', currVal_14?.toString());
      _expr_14 = currVal_14;
    }
    final bool currVal_16 = !_ctx.disabled;
    if (!identical(_expr_16, currVal_16)) {
      updateClass(_el_13, 'invisible', currVal_16);
      _expr_16 = currVal_16;
    }
    final currVal_17 = _ctx.disabled;
    if (!identical(_expr_17, currVal_17)) {
      updateClass(_el_14, 'invisible', currVal_17);
      _expr_17 = currVal_17;
    }
    final currVal_18 = _ctx.invalid;
    if (!identical(_expr_18, currVal_18)) {
      updateClass(_el_14, 'invalid', currVal_18);
      _expr_18 = currVal_18;
    }
    final bool currVal_19 = (!_ctx.focused || _ctx.disabled);
    if (!identical(_expr_19, currVal_19)) {
      updateClass(_el_15, 'invisible', currVal_19);
      _expr_19 = currVal_19;
    }
    final currVal_20 = _ctx.invalid;
    if (!identical(_expr_20, currVal_20)) {
      updateClass(_el_15, 'invalid', currVal_20);
      _expr_20 = currVal_20;
    }
    final currVal_21 = _ctx.underlineAnimated;
    if (!identical(_expr_21, currVal_21)) {
      updateClass(_el_15, 'animated', currVal_21);
      _expr_21 = currVal_21;
    }
  }

  @override
  void destroyInternal() {
    _appEl_16?.destroyNestedViews();
  }

  void _handle_blur_11_0($event) {
    final local_textareaEl = _el_11;
    ctx.inputBlurAction($event, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
    _DefaultValueAccessor_11_5.touchHandler();
  }

  void _handle_change_11_1($event) {
    final local_textareaEl = _el_11;
    ctx.inputChange(local_textareaEl.value, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
    $event.stopPropagation();
  }

  void _handle_input_11_3($event) {
    final local_textareaEl = _el_11;
    ctx.inputKeypress(local_textareaEl.value, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
    _DefaultValueAccessor_11_5.handleChange($event.target.value);
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialMultilineInputComponent0(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent1 extends AppView<import3.MaterialMultilineInputComponent> {
  import4.DivElement _el_0;
  import21.NgSwitch _NgSwitch_0_5;
  ViewContainer _appEl_1;
  import21.NgSwitchWhen _NgSwitchWhen_1_9;
  ViewContainer _appEl_2;
  import21.NgSwitchWhen _NgSwitchWhen_2_9;
  ViewContainer _appEl_3;
  import21.NgSwitchWhen _NgSwitchWhen_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewMaterialMultilineInputComponent1(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMultilineInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'bottom-section';
    addShimC(_el_0);
    _NgSwitch_0_5 = new import21.NgSwitch();
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialMultilineInputComponent2);
    _NgSwitchWhen_1_9 = new import21.NgSwitchWhen(_appEl_1, _TemplateRef_1_8, _NgSwitch_0_5);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MaterialMultilineInputComponent3);
    _NgSwitchWhen_2_9 = new import21.NgSwitchWhen(_appEl_2, _TemplateRef_2_8, _NgSwitch_0_5);
    final _anchor_3 = createViewContainerAnchor();
    _el_0.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_MaterialMultilineInputComponent4);
    _NgSwitchWhen_3_9 = new import21.NgSwitchWhen(_appEl_3, _TemplateRef_3_8, _NgSwitch_0_5);
    final _anchor_4 = createViewContainerAnchor();
    _el_0.append(_anchor_4);
    _appEl_4 = new ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = new TemplateRef(_appEl_4, viewFactory_MaterialMultilineInputComponent5);
    _NgIf_4_9 = new NgIf(_appEl_4, _TemplateRef_4_8);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import21.NgSwitch) && ((0 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _NgSwitch_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialMultilineInputComponent _ctx = ctx;
    final currVal_0 = _ctx.bottomPanelState;
    if (!identical(_expr_0, currVal_0)) {
      _NgSwitch_0_5.ngSwitch = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.errorState;
    if (!identical(_expr_1, currVal_1)) {
      _NgSwitchWhen_1_9.ngSwitchWhen = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hintState;
    if (!identical(_expr_2, currVal_2)) {
      _NgSwitchWhen_2_9.ngSwitchWhen = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.emptyState;
    if (!identical(_expr_3, currVal_3)) {
      _NgSwitchWhen_3_9.ngSwitchWhen = currVal_3;
      _expr_3 = currVal_3;
    }
    _NgIf_4_9.ngIf = ((_ctx.maxCount != null) || _ctx.showCharacterCount);
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
    _appEl_4?.destroyNestedViews();
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialMultilineInputComponent1(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent2 extends AppView<import3.MaterialMultilineInputComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewMaterialMultilineInputComponent2(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMultilineInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'error-text';
    createAttr(_el_0, 'role', 'alert');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialMultilineInputComponent _ctx = ctx;
    final currVal_0 = _ctx.focused;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'focused', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.invalid;
    if (!identical(_expr_1, currVal_1)) {
      updateClass(_el_0, 'invalid', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = import14.interpolate0(!_ctx.invalid);
    if (!identical(_expr_2, currVal_2)) {
      setAttr(_el_0, 'aria-hidden', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = import14.interpolate0(_ctx.errorMessage);
    if (!identical(_expr_3, currVal_3)) {
      _text_1.text = currVal_3;
      _expr_3 = currVal_3;
    }
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialMultilineInputComponent2(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent3 extends AppView<import3.MaterialMultilineInputComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewMaterialMultilineInputComponent3(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMultilineInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'hint-text';
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialMultilineInputComponent _ctx = ctx;
    final currVal_0 = import14.interpolate0(_ctx.hintText);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialMultilineInputComponent3(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent4 extends AppView<import3.MaterialMultilineInputComponent> {
  import4.DivElement _el_0;
  _ViewMaterialMultilineInputComponent4(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMultilineInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'spaceholder';
    _el_0.tabIndex = -1;
    addShimC(_el_0);
    import4.Text _text_1 = new import4.Text('\n     \n  ');
    _el_0.append(_text_1);
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_0));
    init0(_el_0);
    return null;
  }

  void _handle_focus_0_0($event) {
    $event.stopPropagation();
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialMultilineInputComponent4(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent5 extends AppView<import3.MaterialMultilineInputComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewMaterialMultilineInputComponent5(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMultilineInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'aria-hidden', 'true');
    _el_0.className = 'counter';
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialMultilineInputComponent _ctx = ctx;
    final currVal_0 = _ctx.invalid;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'invalid', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import14.interpolate0(_ctx.msgCharacterCounter(_ctx.inputTextLength, _ctx.maxCount));
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent5(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialMultilineInputComponent5(parentView, parentIndex);
}

const List<dynamic> styles$MaterialMultilineInputComponentHost = const [];

class _ViewMaterialMultilineInputComponentHost0 extends AppView<dynamic> {
  ViewMaterialMultilineInputComponent0 _compView_0;
  import22.DeferredValidator _DeferredValidator_0_5;
  import3.MaterialMultilineInputComponent _MaterialMultilineInputComponent_0_6;
  List<dynamic> __NgValidators_0_7;
  _ViewMaterialMultilineInputComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<dynamic> get _NgValidators_0_7 {
    if ((this.__NgValidators_0_7 == null)) {
      (__NgValidators_0_7 = [this._DeferredValidator_0_5]);
    }
    return this.__NgValidators_0_7;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialMultilineInputComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DeferredValidator_0_5 = new import22.DeferredValidator();
    _MaterialMultilineInputComponent_0_6 = new import3.MaterialMultilineInputComponent(null, _compView_0.ref, _DeferredValidator_0_5, this.injectorGet(import23.DomService, viewData.parentIndex));
    _compView_0.create(_MaterialMultilineInputComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import3.MaterialMultilineInputComponent>(0, this, rootEl, _MaterialMultilineInputComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.DeferredValidator) && (0 == nodeIndex))) {
      return _DeferredValidator_0_5;
    }
    if (((((identical(token, import3.MaterialMultilineInputComponent) || identical(token, import24.ReferenceDirective)) || identical(token, import6.Focusable)) || identical(token, import25.BaseMaterialInput)) && (0 == nodeIndex))) {
      return _MaterialMultilineInputComponent_0_6;
    }
    if ((identical(token, const import18.MultiToken('NgValidators')) && (0 == nodeIndex))) {
      return _NgValidators_0_7;
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
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialMultilineInputComponent_0_6.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialMultilineInputComponent_0_6.ngOnDestroy();
  }
}

AppView viewFactory_MaterialMultilineInputComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialMultilineInputComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import3.MaterialMultilineInputComponent> MaterialMultilineInputComponentNgFactory = const ComponentFactory<import3.MaterialMultilineInputComponent>('material-input[multiline]', viewFactory_MaterialMultilineInputComponentHost0, _MaterialMultilineInputComponentMetadata);
const _MaterialMultilineInputComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialMultilineInputComponent, MaterialMultilineInputComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
}
