// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_input.dart';
export 'material_input.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:quiver/strings.dart' show isNotEmpty;
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/utils/angular/properties/properties.dart';
import 'package:angular_components/utils/angular/reference/reference.dart';
import 'base_material_input.dart';
import 'deferred_validator.dart';
import 'material_input_default_value_accessor.dart';
import 'material_input_multiline.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'base_material_input.template.dart' as _ref0;
import 'base_material_input.template.dart' as _ref1;
import 'deferred_validator.template.dart' as _ref2;
import 'material_input_default_value_accessor.template.dart' as _ref3;
import 'material_input_default_value_accessor.template.dart' as _ref4;
import 'material_input_multiline.template.dart' as _ref5;
import 'material_input_multiline.template.dart' as _ref6;
import 'package:angular/angular.template.dart' as _ref7;
import 'package:angular_components/focus/focus.template.dart' as _ref8;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref9;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref10;
import 'package:angular_components/utils/angular/reference/reference.template.dart' as _ref11;
import 'package:angular_forms/angular_forms.template.dart' as _ref12;
import 'package:angular_forms/angular_forms.template.dart' as _ref13;
import 'package:angular_components/material_input/material_input.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_input.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import6;
import '../focus/focus.dart' as import7;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import8;
import 'package:angular_forms/src/directives/ng_model.dart' as import9;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/element_ref.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import17;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import18;
import 'package:angular_forms/src/directives/ng_control.dart' as import19;
import '../material_icon/material_icon.template.dart' as import20;
import '../material_icon/material_icon.dart' as import21;
import 'package:angular/src/common/directives/ng_switch.dart' as import22;
import 'deferred_validator.dart' as import23;
import '../utils/angular/reference/reference.dart' as import24;
import 'base_material_input.dart' as import25;

const List<dynamic> styles$MaterialInputComponent = const [import0.styles];

class ViewMaterialInputComponent0 extends AppView<import2.MaterialInputComponent> {
  bool _query_FocusableDirective_1_0_isDirty = true;
  bool _query_inputEl_1_1_isDirty = true;
  bool _query_popupSourceEl_1_2_isDirty = true;
  import3.DivElement _el_0;
  import3.DivElement _el_1;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  import3.Element _el_4;
  import3.DivElement _el_5;
  import3.Element _el_6;
  import3.Text _text_7;
  import3.InputElement _el_8;
  import6.DefaultValueAccessor _DefaultValueAccessor_8_5;
  import7.FocusableDirective _FocusableDirective_8_6;
  List<import8.ControlValueAccessor<dynamic>> _NgValueAccessor_8_7;
  import9.NgModel _NgModel_8_8;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  import3.DivElement _el_11;
  import3.DivElement _el_12;
  import3.DivElement _el_13;
  import3.DivElement _el_14;
  ViewContainer _appEl_15;
  NgIf _NgIf_15_9;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  bool _expr_6;
  bool _expr_7;
  bool _expr_8;
  bool _expr_9;
  var _expr_10;
  bool _expr_11;
  bool _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  var _expr_17;
  var _expr_18;
  var _expr_19;
  var _expr_20;
  var _expr_21;
  bool _expr_25;
  bool _expr_26;
  bool _expr_27;
  bool _expr_28;
  bool _expr_29;
  bool _expr_30;
  static RenderComponentType _renderType;
  ViewMaterialInputComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-input');
    rootEl.className = 'themeable';
    createAttr(rootEl, 'tabIndex', '-1');
    _renderType ??= import13.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialInputComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    final import2.MaterialInputComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'baseline';
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'top-section';
    addShimC(_el_1);
    final _anchor_2 = createViewContainerAnchor();
    _el_1.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MaterialInputComponent1);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    final _anchor_3 = createViewContainerAnchor();
    _el_1.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_MaterialInputComponent2);
    _NgIf_3_9 = new NgIf(_appEl_3, _TemplateRef_3_8);
    _el_4 = createAndAppend(doc, 'label', _el_1);
    _el_4.className = 'input-container';
    addShimE(_el_4);
    _el_5 = createDivAndAppend(doc, _el_4);
    createAttr(_el_5, 'aria-hidden', 'true');
    _el_5.className = 'label';
    addShimC(_el_5);
    _el_6 = createSpanAndAppend(doc, _el_5);
    _el_6.className = 'label-text';
    addShimE(_el_6);
    _text_7 = new import3.Text('');
    _el_6.append(_text_7);
    _el_8 = createAndAppend(doc, 'input', _el_4);
    _el_8.className = 'input';
    createAttr(_el_8, 'focusableElement', '');
    addShimC(_el_8);
    _DefaultValueAccessor_8_5 = new import6.DefaultValueAccessor(_el_8);
    _FocusableDirective_8_6 = new import7.FocusableDirective(_el_8);
    _NgValueAccessor_8_7 = [_DefaultValueAccessor_8_5];
    _NgModel_8_8 = new import9.NgModel(null, _NgValueAccessor_8_7);
    final _anchor_9 = createViewContainerAnchor();
    _el_1.append(_anchor_9);
    _appEl_9 = new ViewContainer(9, 1, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = new TemplateRef(_appEl_9, viewFactory_MaterialInputComponent3);
    _NgIf_9_9 = new NgIf(_appEl_9, _TemplateRef_9_8);
    final _anchor_10 = createViewContainerAnchor();
    _el_1.append(_anchor_10);
    _appEl_10 = new ViewContainer(10, 1, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = new TemplateRef(_appEl_10, viewFactory_MaterialInputComponent4);
    _NgIf_10_9 = new NgIf(_appEl_10, _TemplateRef_10_8);
    project(_el_1, 0);
    _el_11 = createDivAndAppend(doc, _el_0);
    _el_11.className = 'underline';
    addShimC(_el_11);
    _el_12 = createDivAndAppend(doc, _el_11);
    _el_12.className = 'disabled-underline';
    addShimC(_el_12);
    _el_13 = createDivAndAppend(doc, _el_11);
    _el_13.className = 'unfocused-underline';
    addShimC(_el_13);
    _el_14 = createDivAndAppend(doc, _el_11);
    _el_14.className = 'focused-underline';
    addShimC(_el_14);
    final _anchor_15 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_15);
    _appEl_15 = new ViewContainer(15, null, this, _anchor_15);
    TemplateRef _TemplateRef_15_8 = new TemplateRef(_appEl_15, viewFactory_MaterialInputComponent5);
    _NgIf_15_9 = new NgIf(_appEl_15, _TemplateRef_15_8);
    _el_8.addEventListener('blur', eventHandler1(_handle_blur_8_0));
    _el_8.addEventListener('change', eventHandler1(_handle_change_8_1));
    _el_8.addEventListener('focus', eventHandler1(ctx.inputFocusAction));
    _el_8.addEventListener('input', eventHandler1(_handle_input_8_3));
    ctx.focusable = _FocusableDirective_8_6;
    ctx.inputEl = new ElementRef(_el_8);
    ctx.popupSourceEl = new ElementRef(_el_0);
    init(const [], null);
    _rootEl.addEventListener('focus', eventHandler0(_ctx.focus));
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import6.DefaultValueAccessor) && (8 == nodeIndex))) {
      return _DefaultValueAccessor_8_5;
    }
    if ((identical(token, const import17.MultiToken<import18.ControlValueAccessor>('NgValueAccessor')) && (8 == nodeIndex))) {
      return _NgValueAccessor_8_7;
    }
    if (((identical(token, import9.NgModel) || identical(token, import19.NgControl)) && (8 == nodeIndex))) {
      return _NgModel_8_8;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialInputComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_2_9.ngIf = _ctx.hasLeadingGlyph;
    _NgIf_3_9.ngIf = _ctx.hasLeadingText;
    changed = false;
    _NgModel_8_8.model = _ctx.inputText;
    _NgModel_8_8.ngAfterChanges();
    if (firstCheck) {
      _NgModel_8_8.ngOnInit();
    }
    _NgIf_9_9.ngIf = _ctx.hasTrailingText;
    _NgIf_10_9.ngIf = _ctx.hasTrailingGlyph;
    _NgIf_15_9.ngIf = _ctx.displayBottomPanel;
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    _appEl_15.detectChangesInNestedViews();
    final currVal_2 = _ctx.floatingLabel;
    if (!identical(_expr_2, currVal_2)) {
      updateClass(_el_4, 'floated-label', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.rightAlign;
    if (!identical(_expr_3, currVal_3)) {
      updateClass(_el_5, 'right-align', currVal_3);
      _expr_3 = currVal_3;
    }
    final bool currVal_4 = !_ctx.labelVisible;
    if (!identical(_expr_4, currVal_4)) {
      updateClass(_el_6, 'invisible', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.labelAnimated;
    if (!identical(_expr_5, currVal_5)) {
      updateClass(_el_6, 'animated', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.labelAnimationReset;
    if (!identical(_expr_6, currVal_6)) {
      updateClass(_el_6, 'reset', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.disabled;
    if (!identical(_expr_7, currVal_7)) {
      updateClass(_el_6, 'disabled', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = (_ctx.focused && _ctx.floatingLabelVisible);
    if (!identical(_expr_8, currVal_8)) {
      updateClass(_el_6, 'focused', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_9 = (_ctx.invalid && _ctx.floatingLabelVisible);
    if (!identical(_expr_9, currVal_9)) {
      updateClass(_el_6, 'invalid', currVal_9);
      _expr_9 = currVal_9;
    }
    final currVal_10 = import13.interpolate0(_ctx.label);
    if (!identical(_expr_10, currVal_10)) {
      _text_7.text = currVal_10;
      _expr_10 = currVal_10;
    }
    if (firstCheck) {
      if (!identical(_ctx.inputRole, null)) {
        setAttr(_el_8, 'role', _ctx.inputRole?.toString());
      }
    }
    final currVal_11 = _ctx.disabled;
    if (!identical(_expr_11, currVal_11)) {
      updateClass(_el_8, 'disabledInput', currVal_11);
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.rightAlign;
    if (!identical(_expr_12, currVal_12)) {
      updateClass(_el_8, 'right-align', currVal_12);
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.type;
    if (!identical(_expr_13, currVal_13)) {
      setProp(_el_8, 'type', currVal_13);
      _expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.multiple;
    if (!identical(_expr_14, currVal_14)) {
      setProp(_el_8, 'multiple', currVal_14);
      _expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.disabled;
    if (!identical(_expr_15, currVal_15)) {
      setProp(_el_8, 'readOnly', currVal_15);
      _expr_15 = currVal_15;
    }
    final currVal_17 = _ctx.inputAriaOwns;
    if (!identical(_expr_17, currVal_17)) {
      setAttr(_el_8, 'aria-owns', currVal_17?.toString());
      _expr_17 = currVal_17;
    }
    final currVal_18 = _ctx.inputAriaActivedescendent;
    if (!identical(_expr_18, currVal_18)) {
      setAttr(_el_8, 'aria-activedescendant', currVal_18?.toString());
      _expr_18 = currVal_18;
    }
    final currVal_19 = _ctx.inputAriaExpanded;
    if (!identical(_expr_19, currVal_19)) {
      setAttr(_el_8, 'aria-expanded', currVal_19?.toString());
      _expr_19 = currVal_19;
    }
    final currVal_20 = _ctx.inputAriaAutocomplete;
    if (!identical(_expr_20, currVal_20)) {
      setAttr(_el_8, 'aria-autocomplete', currVal_20?.toString());
      _expr_20 = currVal_20;
    }
    final currVal_21 = _ctx.inputAriaHasPopup;
    if (!identical(_expr_21, currVal_21)) {
      setAttr(_el_8, 'aria-haspopup', currVal_21?.toString());
      _expr_21 = currVal_21;
    }
    final bool currVal_25 = !_ctx.disabled;
    if (!identical(_expr_25, currVal_25)) {
      updateClass(_el_12, 'invisible', currVal_25);
      _expr_25 = currVal_25;
    }
    final currVal_26 = _ctx.disabled;
    if (!identical(_expr_26, currVal_26)) {
      updateClass(_el_13, 'invisible', currVal_26);
      _expr_26 = currVal_26;
    }
    final currVal_27 = _ctx.invalid;
    if (!identical(_expr_27, currVal_27)) {
      updateClass(_el_13, 'invalid', currVal_27);
      _expr_27 = currVal_27;
    }
    final bool currVal_28 = (!_ctx.focused || _ctx.disabled);
    if (!identical(_expr_28, currVal_28)) {
      updateClass(_el_14, 'invisible', currVal_28);
      _expr_28 = currVal_28;
    }
    final currVal_29 = _ctx.invalid;
    if (!identical(_expr_29, currVal_29)) {
      updateClass(_el_14, 'invalid', currVal_29);
      _expr_29 = currVal_29;
    }
    final currVal_30 = _ctx.underlineAnimated;
    if (!identical(_expr_30, currVal_30)) {
      updateClass(_el_14, 'animated', currVal_30);
      _expr_30 = currVal_30;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
    _appEl_9?.destroyNestedViews();
    _appEl_10?.destroyNestedViews();
    _appEl_15?.destroyNestedViews();
  }

  void _handle_blur_8_0($event) {
    final local_inputEl = _el_8;
    ctx.inputBlurAction($event, local_inputEl.validity.valid, local_inputEl.validationMessage);
    _DefaultValueAccessor_8_5.touchHandler();
  }

  void _handle_change_8_1($event) {
    final local_inputEl = _el_8;
    ctx.inputChange(local_inputEl.value, local_inputEl.validity.valid, local_inputEl.validationMessage);
    $event.stopPropagation();
  }

  void _handle_input_8_3($event) {
    final local_inputEl = _el_8;
    ctx.inputKeypress(local_inputEl.value, local_inputEl.validity.valid, local_inputEl.validationMessage);
    _DefaultValueAccessor_8_5.handleChange($event.target.value);
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialInputComponent0(parentView, parentIndex);
}

class _ViewMaterialInputComponent1 extends AppView<import2.MaterialInputComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import20.ViewMaterialIconComponent0 _compView_1;
  import21.MaterialIconComponent _MaterialIconComponent_1_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialInputComponent1(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'leading-text';
    addShimE(_el_0);
    _compView_1 = new import20.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    _el_1.className = 'glyph leading';
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = new import21.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialInputComponent _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_2 = (_ctx.leadingGlyph ?? '');
    if (!identical(_expr_2, currVal_2)) {
      _MaterialIconComponent_1_5.icon = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.floatingLabel;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disabled;
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_1, 'disabled', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialInputComponent1(parentView, parentIndex);
}

class _ViewMaterialInputComponent2 extends AppView<import2.MaterialInputComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewMaterialInputComponent2(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'leading-text';
    addShimE(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialInputComponent _ctx = ctx;
    final currVal_0 = _ctx.floatingLabel;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.leadingText ?? '');
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialInputComponent2(parentView, parentIndex);
}

class _ViewMaterialInputComponent3 extends AppView<import2.MaterialInputComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewMaterialInputComponent3(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'trailing-text';
    addShimE(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialInputComponent _ctx = ctx;
    final currVal_0 = _ctx.floatingLabel;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.trailingText ?? '');
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialInputComponent3(parentView, parentIndex);
}

class _ViewMaterialInputComponent4 extends AppView<import2.MaterialInputComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import20.ViewMaterialIconComponent0 _compView_1;
  import21.MaterialIconComponent _MaterialIconComponent_1_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialInputComponent4(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'trailing-text';
    addShimE(_el_0);
    _compView_1 = new import20.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    _el_1.className = 'glyph trailing';
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = new import21.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialInputComponent _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_2 = (_ctx.trailingGlyph ?? '');
    if (!identical(_expr_2, currVal_2)) {
      _MaterialIconComponent_1_5.icon = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.floatingLabel;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disabled;
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_1, 'disabled', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialInputComponent4(parentView, parentIndex);
}

class _ViewMaterialInputComponent5 extends AppView<import2.MaterialInputComponent> {
  import3.DivElement _el_0;
  import22.NgSwitch _NgSwitch_0_5;
  ViewContainer _appEl_1;
  import22.NgSwitchWhen _NgSwitchWhen_1_9;
  ViewContainer _appEl_2;
  import22.NgSwitchWhen _NgSwitchWhen_2_9;
  ViewContainer _appEl_3;
  import22.NgSwitchWhen _NgSwitchWhen_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewMaterialInputComponent5(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'bottom-section';
    addShimC(_el_0);
    _NgSwitch_0_5 = new import22.NgSwitch();
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialInputComponent6);
    _NgSwitchWhen_1_9 = new import22.NgSwitchWhen(_appEl_1, _TemplateRef_1_8, _NgSwitch_0_5);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MaterialInputComponent7);
    _NgSwitchWhen_2_9 = new import22.NgSwitchWhen(_appEl_2, _TemplateRef_2_8, _NgSwitch_0_5);
    final _anchor_3 = createViewContainerAnchor();
    _el_0.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_MaterialInputComponent8);
    _NgSwitchWhen_3_9 = new import22.NgSwitchWhen(_appEl_3, _TemplateRef_3_8, _NgSwitch_0_5);
    final _anchor_4 = createViewContainerAnchor();
    _el_0.append(_anchor_4);
    _appEl_4 = new ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = new TemplateRef(_appEl_4, viewFactory_MaterialInputComponent9);
    _NgIf_4_9 = new NgIf(_appEl_4, _TemplateRef_4_8);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.NgSwitch) && ((0 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _NgSwitch_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialInputComponent _ctx = ctx;
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

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent5(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialInputComponent5(parentView, parentIndex);
}

class _ViewMaterialInputComponent6 extends AppView<import2.MaterialInputComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewMaterialInputComponent6(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'error-text';
    createAttr(_el_0, 'role', 'alert');
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialInputComponent _ctx = ctx;
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
    final currVal_2 = import13.interpolate0(!_ctx.invalid);
    if (!identical(_expr_2, currVal_2)) {
      setAttr(_el_0, 'aria-hidden', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = import13.interpolate0(_ctx.errorMessage);
    if (!identical(_expr_3, currVal_3)) {
      _text_1.text = currVal_3;
      _expr_3 = currVal_3;
    }
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent6(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialInputComponent6(parentView, parentIndex);
}

class _ViewMaterialInputComponent7 extends AppView<import2.MaterialInputComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewMaterialInputComponent7(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'hint-text';
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialInputComponent _ctx = ctx;
    final currVal_0 = import13.interpolate0(_ctx.hintText);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent7(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialInputComponent7(parentView, parentIndex);
}

class _ViewMaterialInputComponent8 extends AppView<import2.MaterialInputComponent> {
  import3.DivElement _el_0;
  _ViewMaterialInputComponent8(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'spaceholder';
    _el_0.tabIndex = -1;
    addShimC(_el_0);
    import3.Text _text_1 = new import3.Text('\n     \n  ');
    _el_0.append(_text_1);
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_0));
    init0(_el_0);
    return null;
  }

  void _handle_focus_0_0($event) {
    $event.stopPropagation();
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent8(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialInputComponent8(parentView, parentIndex);
}

class _ViewMaterialInputComponent9 extends AppView<import2.MaterialInputComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewMaterialInputComponent9(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'aria-hidden', 'true');
    _el_0.className = 'counter';
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialInputComponent _ctx = ctx;
    final currVal_0 = _ctx.invalid;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'invalid', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import13.interpolate0(_ctx.msgCharacterCounter(_ctx.inputTextLength, _ctx.maxCount));
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent9(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialInputComponent9(parentView, parentIndex);
}

const List<dynamic> styles$MaterialInputComponentHost = const [];

class _ViewMaterialInputComponentHost0 extends AppView<dynamic> {
  ViewMaterialInputComponent0 _compView_0;
  import23.DeferredValidator _DeferredValidator_0_5;
  import2.MaterialInputComponent _MaterialInputComponent_0_6;
  List<dynamic> __NgValidators_0_7;
  _ViewMaterialInputComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<dynamic> get _NgValidators_0_7 {
    if ((this.__NgValidators_0_7 == null)) {
      (__NgValidators_0_7 = [this._DeferredValidator_0_5]);
    }
    return this.__NgValidators_0_7;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialInputComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DeferredValidator_0_5 = new import23.DeferredValidator();
    _MaterialInputComponent_0_6 = new import2.MaterialInputComponent(null, null, null, null, _compView_0.ref, _DeferredValidator_0_5);
    _compView_0.create(_MaterialInputComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialInputComponent>(0, this, rootEl, _MaterialInputComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import23.DeferredValidator) && (0 == nodeIndex))) {
      return _DeferredValidator_0_5;
    }
    if (((((identical(token, import2.MaterialInputComponent) || identical(token, import24.ReferenceDirective)) || identical(token, import7.Focusable)) || identical(token, import25.BaseMaterialInput)) && (0 == nodeIndex))) {
      return _MaterialInputComponent_0_6;
    }
    if ((identical(token, const import17.MultiToken('NgValidators')) && (0 == nodeIndex))) {
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
      _MaterialInputComponent_0_6.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialInputComponent_0_6.ngOnDestroy();
  }
}

AppView viewFactory_MaterialInputComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialInputComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialInputComponent> MaterialInputComponentNgFactory = const ComponentFactory<import2.MaterialInputComponent>('material-input:not(material-input[multiline])', viewFactory_MaterialInputComponentHost0, _MaterialInputComponentMetadata);
const _MaterialInputComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialInputComponent, MaterialInputComponentNgFactory);
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
  _ref12.initReflector();
  _ref13.initReflector();
}
