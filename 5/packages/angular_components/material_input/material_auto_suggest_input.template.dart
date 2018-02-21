// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_auto_suggest_input.dart';
export 'material_auto_suggest_input.dart';
import 'dart:async';
import 'dart:html' as html;
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/dynamic_component/dynamic_component.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/laminate/enums/alignment.dart';
import 'package:angular_components/laminate/popup/popup.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/input_wrapper.dart';
import 'package:angular_components/material_list/material_list.dart';
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/material_select/material_select_base.dart';
import 'package:angular_components/material_select/material_select_dropdown_item.dart';
import 'package:angular_components/material_spinner/material_spinner.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/mixins/highlight_assistant_mixin.dart';
import 'package:angular_components/mixins/material_dropdown_base.dart';
import 'package:angular_components/model/a11y/active_item.dart';
import 'package:angular_components/model/a11y/keyboard_handler_mixin.dart';
import 'package:angular_components/model/selection/select.dart';
import 'package:angular_components/model/selection/selection_container.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/selection/string_selection_options.dart';
import 'package:angular_components/model/ui/has_factory.dart';
import 'package:angular_components/model/ui/highlight_provider.dart';
import 'package:angular_components/model/ui/template_support.dart';
import 'package:angular_components/stop_propagation/stop_propagation.dart';
import 'package:angular_components/utils/angular/properties/properties.dart';
import 'package:angular_components/utils/async/async.dart';
import 'package:angular_components/utils/id_generator/id_generator.dart';
import 'material_input.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_input.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref2;
import 'package:angular_components/content/deferred_content.template.dart' as _ref3;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref4;
import 'package:angular_components/focus/focus.template.dart' as _ref5;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref6;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref7;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref8;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref9;
import 'package:angular_components/material_input/input_wrapper.template.dart' as _ref10;
import 'package:angular_components/material_list/material_list.template.dart' as _ref11;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref12;
import 'package:angular_components/material_select/material_select_base.template.dart' as _ref13;
import 'package:angular_components/material_select/material_select_dropdown_item.template.dart' as _ref14;
import 'package:angular_components/material_spinner/material_spinner.template.dart' as _ref15;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref16;
import 'package:angular_components/mixins/highlight_assistant_mixin.template.dart' as _ref17;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref18;
import 'package:angular_components/model/a11y/active_item.template.dart' as _ref19;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref20;
import 'package:angular_components/model/selection/select.template.dart' as _ref21;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref22;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref23;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref24;
import 'package:angular_components/model/selection/string_selection_options.template.dart' as _ref25;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref26;
import 'package:angular_components/model/ui/highlight_provider.template.dart' as _ref27;
import 'package:angular_components/model/ui/template_support.template.dart' as _ref28;
import 'package:angular_components/stop_propagation/stop_propagation.template.dart' as _ref29;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref30;
import 'package:angular_components/utils/async/async.template.dart' as _ref31;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref32;
import 'package:angular_forms/angular_forms.template.dart' as _ref33;
import 'package:angular_components/material_input/material_auto_suggest_input.scss.css.shim.dart' as import0;
import 'package:angular_components/material_input/material_input_wrapper.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_auto_suggest_input.dart' as import3;
import 'package:angular/src/core/linker/query_list.dart' as import4;
import 'dart:html' as import5;
import 'material_input.template.dart' as import6;
import 'deferred_validator.dart' as import7;
import 'package:angular_forms/src/directives/ng_model.dart' as import8;
import 'material_input.dart' as import9;
import 'material_input_default_value_accessor.dart' as import10;
import '../src/laminate/popup/popup_source_directive.dart' as import11;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../material_popup/material_popup.template.dart' as import14;
import '../material_popup/material_popup.dart' as import15;
import '../focus/keyboard_only_focus_indicator.dart' as import16;
import '../content/deferred_content.dart' as import17;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import19;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import21;
import 'package:angular/angular.dart';
import '../src/laminate/popup/dom_popup_source.dart' as import23;
import 'package:angular/src/core/linker/template_ref.dart';
import '../src/laminate/popup/popup_hierarchy.dart' as import25;
import 'package:angular/src/core/zone/ng_zone.dart' as import26;
import '../src/laminate/overlay/overlay_service.dart' as import27;
import '../laminate/overlay/zindexer.dart' as import28;
import 'package:angular/src/core/di/opaque_token.dart' as import29;
import 'dart:core';
import '../laminate/enums/alignment.dart' as import31;
import '../src/laminate/popup/popup_size_provider.dart' as import32;
import 'package:angular/src/core/linker/element_ref.dart';
import '../utils/browser/dom_service/dom_service.dart' as import34;
import 'package:angular_forms/src/directives/ng_control.dart' as import35;
import '../focus/focus.dart' as import36;
import 'base_material_input.dart' as import37;
import '../utils/angular/reference/reference.dart' as import38;
import '../content/deferred_content_aware.dart' as import39;
import '../mixins/material_dropdown_base.dart' as import40;
import '../src/laminate/popup/popup_ref.dart' as import41;
import '../material_icon/material_icon.template.dart' as import42;
import '../button_decorator/button_decorator.template.dart' as import43;
import '../material_icon/material_icon.dart' as import44;
import '../src/material_tooltip/tooltip.dart' as import45;
import '../stop_propagation/stop_propagation.dart' as import46;
import '../material_tooltip/module.dart' as import47;
import '../src/material_tooltip/tooltip_controller.dart' as import48;
import '../utils/disposer/disposer.dart' as import49;
import '../button_decorator/button_decorator.dart' as import50;
import '../material_spinner/material_spinner.template.dart' as import51;
import '../material_spinner/material_spinner.dart' as import52;
import '../material_list/material_list.template.dart' as import53;
import '../material_list/material_list.dart' as import54;
import 'package:angular/src/common/directives/ng_for.dart' as import55;
import '../model/selection/selection_options.dart' as import56;
import '../dynamic_component/dynamic_component.template.dart' as import57;
import '../dynamic_component/dynamic_component.dart' as import58;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import59;
import '../material_select/material_select_dropdown_item.template.dart' as import60;
import '../material_select/material_select_dropdown_item.dart' as import61;
import '../material_select/activation_handler.dart' as import62;
import '../model/selection/selection_container.dart' as import63;
import '../model/ui/has_renderer.dart' as import64;
import '../utils/id_generator/id_generator.dart' as import65;
import '../model/ui/highlight_provider.dart' as import66;
import '../model/ui/has_factory.dart' as import67;

const List<dynamic> styles$MaterialAutoSuggestInputComponent = const [import0.styles, import1.styles];

class ViewMaterialAutoSuggestInputComponent0 extends AppView<import3.MaterialAutoSuggestInputComponent> {
  final import4.QueryList _viewQuery_MaterialInputComponent_0 = new import4.QueryList();
  import5.Element _el_0;
  import6.ViewMaterialInputComponent0 _compView_0;
  import7.DeferredValidator _DeferredValidator_0_4;
  List<dynamic> _NgValidators_0_5;
  import8.NgModel _NgModel_0_6;
  dynamic _NgControl_0_7;
  import9.MaterialInputComponent _MaterialInputComponent_0_8;
  dynamic _BaseMaterialInput_0_9;
  import10.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_10;
  dynamic _ReferenceDirective_0_11;
  import11.PopupSourceDirective _PopupSourceDirective_0_12;
  import5.Element _el_1;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_7;
  import5.Element _el_3;
  import14.ViewMaterialPopupComponent0 _compView_3;
  ViewContainer _appEl_3;
  import15.MaterialPopupComponent _MaterialPopupComponent_3_6;
  dynamic __PopupHierarchy_3_9;
  dynamic __PopupRef_3_10;
  import5.DivElement _el_4;
  import16.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_4_4;
  ViewContainer _appEl_5;
  import17.CachingDeferredContentDirective _CachingDeferredContentDirective_5_7;
  import5.DivElement _el_6;
  import16.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_6_4;
  var _expr_2;
  var _expr_3;
  String _expr_5;
  int _expr_6;
  bool _expr_7;
  bool _expr_8;
  bool _expr_9;
  String _expr_10;
  var _expr_11;
  String _expr_12;
  var _expr_13;
  var _expr_14;
  bool _expr_15;
  bool _expr_16;
  String _expr_17;
  String _expr_18;
  String _expr_19;
  String _expr_20;
  bool _expr_21;
  String _expr_24;
  bool _expr_25;
  bool _expr_26;
  bool _expr_27;
  var _expr_28;
  var _expr_29;
  bool _expr_31;
  String _expr_32;
  static RenderComponentType _renderType;
  ViewMaterialAutoSuggestInputComponent0(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import5.document.createElement('material-auto-suggest-input');
    _renderType ??= import21.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialAutoSuggestInputComponent);
    setupComponentType(_renderType);
  }
  dynamic get _PopupHierarchy_3_9 {
    if ((this.__PopupHierarchy_3_9 == null)) {
      (__PopupHierarchy_3_9 = import15.getHierarchy(this._MaterialPopupComponent_3_6));
    }
    return this.__PopupHierarchy_3_9;
  }

  dynamic get _PopupRef_3_10 {
    if ((this.__PopupRef_3_10 == null)) {
      (__PopupRef_3_10 = import15.getResolvedPopupRef(this._MaterialPopupComponent_3_6));
    }
    return this.__PopupRef_3_10;
  }

  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent> build() {
    final import5.HtmlElement parentRenderNode = initViewRoot(rootEl);
    _compView_0 = new import6.ViewMaterialInputComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    createAttr(_el_0, 'alignPositionY', 'after');
    createAttr(_el_0, 'aria-autocomplete', 'list');
    createAttr(_el_0, 'popupSource', '');
    createAttr(_el_0, 'role', 'combobox');
    addShimC(_el_0);
    _DeferredValidator_0_4 = new import7.DeferredValidator();
    _NgValidators_0_5 = [_DeferredValidator_0_4];
    _NgModel_0_6 = new import8.NgModel(_NgValidators_0_5, null);
    _NgControl_0_7 = _NgModel_0_6;
    _MaterialInputComponent_0_8 = new import9.MaterialInputComponent(null, null, _NgControl_0_7, _compView_0.ref, _DeferredValidator_0_4);
    _BaseMaterialInput_0_9 = _MaterialInputComponent_0_8;
    _MaterialInputDefaultValueAccessor_0_10 = new import10.MaterialInputDefaultValueAccessor(_BaseMaterialInput_0_9, _NgControl_0_7);
    _ReferenceDirective_0_11 = _MaterialInputComponent_0_8;
    _PopupSourceDirective_0_12 = new import11.PopupSourceDirective(parentView.injectorGet(import23.DomPopupSourceFactory, viewData.parentIndex), _el_0, _ReferenceDirective_0_11);
    var doc = import5.document;
    _el_1 = doc.createElement('span');
    createAttr(_el_1, 'trailing', '');
    addShimE(_el_1);
    var _anchor_2 = ngAnchor.clone(false);
    _el_1.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_MaterialAutoSuggestInputComponent1);
    _NgIf_2_7 = new NgIf(_appEl_2, _TemplateRef_2_6);
    project(_el_1, 0);
    _compView_0.create(_MaterialInputComponent_0_8, [
      [_el_1]
    ]);
    _compView_3 = new import14.ViewMaterialPopupComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    createAttr(_el_3, 'trackLayoutChanges', '');
    addShimC(_el_3);
    _appEl_3 = new ViewContainer(3, null, this, _el_3);
    _MaterialPopupComponent_3_6 = new import15.MaterialPopupComponent(parentView.injectorGet(import25.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import15.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import26.NgZone, viewData.parentIndex), parentView.injectorGet(import27.OverlayService, viewData.parentIndex), parentView.injectorGet(import28.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import29.OpaqueToken<List<import31.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import29.OpaqueToken('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import32.PopupSizeProvider, viewData.parentIndex, null), _compView_3.ref, _appEl_3, new ElementRef(_el_3));
    _el_4 = doc.createElement('div');
    createAttr(_el_4, 'header', '');
    createAttr(_el_4, 'keyboardOnlyFocusIndicator', '');
    createAttr(_el_4, 'tabIndex', '-1');
    addShimC(_el_4);
    _KeyboardOnlyFocusIndicatorDirective_4_4 = new import16.KeyboardOnlyFocusIndicatorDirective(_el_4, parentView.injectorGet(import34.DomService, viewData.parentIndex));
    project(_el_4, 1);
    var _anchor_5 = ngAnchor.clone(false);
    _appEl_5 = new ViewContainer(5, 3, this, _anchor_5);
    TemplateRef _TemplateRef_5_6 = new TemplateRef(_appEl_5, viewFactory_MaterialAutoSuggestInputComponent2);
    _CachingDeferredContentDirective_5_7 = new import17.CachingDeferredContentDirective(_appEl_5, _TemplateRef_5_6, _MaterialPopupComponent_3_6);
    _el_6 = doc.createElement('div');
    createAttr(_el_6, 'footer', '');
    createAttr(_el_6, 'keyboardOnlyFocusIndicator', '');
    createAttr(_el_6, 'tabIndex', '-1');
    addShimC(_el_6);
    _KeyboardOnlyFocusIndicatorDirective_6_4 = new import16.KeyboardOnlyFocusIndicatorDirective(_el_6, parentView.injectorGet(import34.DomService, viewData.parentIndex));
    project(_el_6, 2);
    _compView_3.create(_MaterialPopupComponent_3_6, [
      [_el_4],
      [_appEl_5],
      [_el_6]
    ]);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_1));
    _el_0.addEventListener('keydown', eventHandler1(ctx.onKeyDown));
    _el_0.addEventListener('keypress', eventHandler1(ctx.onKeyPress));
    _el_0.addEventListener('keyup', eventHandler1(ctx.onKeyUp));
    final subscription_0 = _NgModel_0_6.update.listen(eventHandler1(_handle_ngModelChange_0_0));
    final subscription_1 = _MaterialInputComponent_0_8.onFocus.listen(eventHandler1(ctx.handleFocus));
    final subscription_2 = _MaterialInputComponent_0_8.onBlur.listen(eventHandler1(ctx.handleBlur));
    final subscription_3 = _MaterialPopupComponent_3_6.onVisible.listen(eventHandler1(_handle_visibleChange_3_0));
    _el_4.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_4_4.resetOutline));
    _el_4.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_4_4.resetOutline));
    _el_4.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_4_4.hideOutline));
    _el_4.addEventListener('click', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_4_4.hideOutline));
    _el_6.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_6_4.resetOutline));
    _el_6.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_6_4.resetOutline));
    _el_6.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_6_4.hideOutline));
    _el_6.addEventListener('click', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_6_4.hideOutline));
    _viewQuery_MaterialInputComponent_0.reset([_MaterialInputComponent_0_8]);
    ctx.input = _viewQuery_MaterialInputComponent_0.first;
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import7.DeferredValidator) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _DeferredValidator_0_4;
    }
    if ((identical(token, const import29.OpaqueToken('NgValidators')) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _NgValidators_0_5;
    }
    if ((identical(token, import8.NgModel) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _NgModel_0_6;
    }
    if ((identical(token, import35.NgControl) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _NgControl_0_7;
    }
    if (((identical(token, import9.MaterialInputComponent) || identical(token, import36.Focusable)) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _MaterialInputComponent_0_8;
    }
    if ((identical(token, import37.BaseMaterialInput) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _BaseMaterialInput_0_9;
    }
    if ((identical(token, import10.MaterialInputDefaultValueAccessor) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _MaterialInputDefaultValueAccessor_0_10;
    }
    if ((identical(token, import38.ReferenceDirective) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _ReferenceDirective_0_11;
    }
    if ((identical(token, import11.PopupSourceDirective) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _PopupSourceDirective_0_12;
    }
    if ((identical(token, import16.KeyboardOnlyFocusIndicatorDirective) && (4 == nodeIndex))) {
      return _KeyboardOnlyFocusIndicatorDirective_4_4;
    }
    if ((identical(token, import16.KeyboardOnlyFocusIndicatorDirective) && (6 == nodeIndex))) {
      return _KeyboardOnlyFocusIndicatorDirective_6_4;
    }
    if ((((identical(token, import15.MaterialPopupComponent) || identical(token, import39.DeferredContentAware)) || identical(token, import40.DropdownHandle)) && ((3 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialPopupComponent_3_6;
    }
    if ((identical(token, import25.PopupHierarchy) && ((3 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _PopupHierarchy_3_9;
    }
    if ((identical(token, import41.PopupRef) && ((3 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _PopupRef_3_10;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialAutoSuggestInputComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_input = _PopupSourceDirective_0_12;
    changed = false;
    _NgModel_0_6.model = _ctx.inputText;
    _NgModel_0_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_0_6.ngOnInit();
    }
    changed = false;
    final currVal_5 = _ctx.label;
    if (!identical(_expr_5, currVal_5)) {
      _MaterialInputComponent_0_8.label = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.maxCount;
    if (!identical(_expr_6, currVal_6)) {
      _MaterialInputComponent_0_8.maxCount = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.displayBottomPanel;
    if (!identical(_expr_7, currVal_7)) {
      _MaterialInputComponent_0_8.displayBottomPanel = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.floatingLabel;
    if (!identical(_expr_8, currVal_8)) {
      _MaterialInputComponent_0_8.floatingLabel = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.disabled;
    if (!identical(_expr_9, currVal_9)) {
      _MaterialInputComponent_0_8.disabled = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.errorText;
    if (!identical(_expr_10, currVal_10)) {
      _MaterialInputComponent_0_8.error = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.hintText;
    if (!identical(_expr_11, currVal_11)) {
      _MaterialInputComponent_0_8.hintText = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.requiredErrorMsg;
    if (!identical(_expr_12, currVal_12)) {
      _MaterialInputComponent_0_8.requiredErrorMsg = currVal_12;
      changed = true;
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.checkValid;
    if (!identical(_expr_13, currVal_13)) {
      _MaterialInputComponent_0_8.checkValid = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.characterCounter;
    if (!identical(_expr_14, currVal_14)) {
      _MaterialInputComponent_0_8.characterCounter = currVal_14;
      changed = true;
      _expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.showHintOnlyOnFocus;
    if (!identical(_expr_15, currVal_15)) {
      _MaterialInputComponent_0_8.showHintOnlyOnFocus = currVal_15;
      changed = true;
      _expr_15 = currVal_15;
    }
    final currVal_16 = _ctx.required;
    if (!identical(_expr_16, currVal_16)) {
      _MaterialInputComponent_0_8.required = currVal_16;
      changed = true;
      _expr_16 = currVal_16;
    }
    final currVal_17 = _ctx.leadingGlyph;
    if (!identical(_expr_17, currVal_17)) {
      _MaterialInputComponent_0_8.leadingGlyph = currVal_17;
      changed = true;
      _expr_17 = currVal_17;
    }
    final currVal_18 = _ctx.trailingGlyph;
    if (!identical(_expr_18, currVal_18)) {
      _MaterialInputComponent_0_8.trailingGlyph = currVal_18;
      changed = true;
      _expr_18 = currVal_18;
    }
    final currVal_19 = _ctx.leadingText;
    if (!identical(_expr_19, currVal_19)) {
      _MaterialInputComponent_0_8.leadingText = currVal_19;
      changed = true;
      _expr_19 = currVal_19;
    }
    final currVal_20 = _ctx.trailingText;
    if (!identical(_expr_20, currVal_20)) {
      _MaterialInputComponent_0_8.trailingText = currVal_20;
      changed = true;
      _expr_20 = currVal_20;
    }
    final currVal_21 = _ctx.rightAlign;
    if (!identical(_expr_21, currVal_21)) {
      _MaterialInputComponent_0_8.rightAlign = currVal_21;
      changed = true;
      _expr_21 = currVal_21;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (_PopupSourceDirective_0_12.alignY = 'after');
    }
    _NgIf_2_7.ngIf = _ctx.showClearIcon;
    if (firstCheck) {
      (_MaterialPopupComponent_3_6.trackLayoutChanges = true);
    }
    final currVal_25 = _ctx.autoDismiss;
    if (!identical(_expr_25, currVal_25)) {
      _MaterialPopupComponent_3_6.autoDismiss = currVal_25;
      _expr_25 = currVal_25;
    }
    final currVal_26 = _ctx.enforceSpaceConstraints;
    if (!identical(_expr_26, currVal_26)) {
      _MaterialPopupComponent_3_6.enforceSpaceConstraints = currVal_26;
      _expr_26 = currVal_26;
    }
    final currVal_27 = _ctx.popupMatchInputWidth;
    if (!identical(_expr_27, currVal_27)) {
      _MaterialPopupComponent_3_6.matchMinSourceWidth = currVal_27;
      _expr_27 = currVal_27;
    }
    final currVal_28 = _ctx.popupPositions;
    if (!identical(_expr_28, currVal_28)) {
      _MaterialPopupComponent_3_6.preferredPositions = currVal_28;
      _expr_28 = currVal_28;
    }
    final currVal_29 = local_input;
    if (!identical(_expr_29, currVal_29)) {
      _MaterialPopupComponent_3_6.source = currVal_29;
      _expr_29 = currVal_29;
    }
    final currVal_31 = _ctx.showPopup;
    if (!identical(_expr_31, currVal_31)) {
      _MaterialPopupComponent_3_6.visible = currVal_31;
      _expr_31 = currVal_31;
    }
    final currVal_32 = _ctx.slide;
    if (!identical(_expr_32, currVal_32)) {
      _MaterialPopupComponent_3_6.slide = currVal_32;
      _expr_32 = currVal_32;
    }
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.inputId, null)) {
        setProp(_el_0, 'id', _ctx.inputId);
      }
      if (!identical(_ctx.popupId, null)) {
        setAttr(_el_0, 'aria-owns', _ctx.popupId?.toString());
      }
    }
    final currVal_2 = _ctx.activeModel.activeId;
    if (!identical(_expr_2, currVal_2)) {
      setAttr(_el_0, 'aria-activedescendant', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.showPopup;
    if (!identical(_expr_3, currVal_3)) {
      setAttr(_el_0, 'aria-expanded', currVal_3?.toString());
      _expr_3 = currVal_3;
    }
    final currVal_24 = (_ctx.popupShadowCssClass ?? '');
    if (!identical(_expr_24, currVal_24)) {
      _compView_3.updateChildClass(_el_3, currVal_24);
      _expr_24 = currVal_24;
    }
    _compView_3.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_3.detectChanges();
    if (firstCheck) {
      _MaterialInputComponent_0_8.ngAfterViewInit();
    }
    if (firstCheck) {
      _PopupSourceDirective_0_12.ngAfterViewInit();
    }
    if (firstCheck) {
      _MaterialPopupComponent_3_6.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
    _appEl_5?.destroyNestedViews();
    _compView_0?.destroy();
    _compView_3?.destroy();
    _MaterialInputComponent_0_8.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_0_10.ngOnDestroy();
    _PopupSourceDirective_0_12.ngOnDestroy();
    _CachingDeferredContentDirective_5_7.ngOnDestroy();
    _MaterialPopupComponent_3_6.ngOnDestroy();
  }

  void _handle_ngModelChange_0_0($event) {
    ctx.inputText = $event;
    ctx.showPopup = true;
  }

  void _handle_click_0_1($event) {
    ctx.showPopup = true;
    $event.stopPropagation();
  }

  void _handle_visibleChange_3_0($event) {
    ctx.showPopup = $event;
  }
}

AppView<import3.MaterialAutoSuggestInputComponent> viewFactory_MaterialAutoSuggestInputComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialAutoSuggestInputComponent0(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent1 extends AppView<import3.MaterialAutoSuggestInputComponent> {
  import5.Element _el_0;
  import42.ViewMaterialIconComponent0 _compView_0;
  ViewContainer _appEl_0;
  import43.ButtonDirectiveNgCd _ButtonDirective_0_6;
  import16.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_7;
  import44.MaterialIconComponent _MaterialIconComponent_0_8;
  import45.MaterialTooltipDirective _MaterialTooltipDirective_0_9;
  import46.StopPropagationDirective _StopPropagationDirective_0_10;
  dynamic __TooltipController_0_11;
  String _expr_1;
  bool _expr_2;
  _ViewMaterialAutoSuggestInputComponent1(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  dynamic get _TooltipController_0_11 {
    if ((this.__TooltipController_0_11 == null)) {
      (__TooltipController_0_11 = import47.createTooltipController(this.parentView.parentView.injectorGet(import48.TooltipController, this.parentView.viewData.parentIndex, null), this.parentView.parentView.injectorGet(import49.Disposer, this.parentView.viewData.parentIndex, null)));
    }
    return this.__TooltipController_0_11;
  }

  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent> build() {
    _compView_0 = new import42.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'clear-icon';
    createAttr(_el_0, 'icon', 'clear');
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    createAttr(_el_0, 'role', 'button');
    createAttr(_el_0, 'stopPropagation', '');
    addShimC(_el_0);
    _appEl_0 = new ViewContainer(0, null, this, _el_0);
    _ButtonDirective_0_6 = new import43.ButtonDirectiveNgCd(new import50.ButtonDirective(_el_0));
    _KeyboardOnlyFocusIndicatorDirective_0_7 = new import16.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.injectorGet(import34.DomService, parentView.viewData.parentIndex));
    _MaterialIconComponent_0_8 = new import44.MaterialIconComponent(_el_0);
    _MaterialTooltipDirective_0_9 = new import45.MaterialTooltipDirective(parentView.parentView.injectorGet(import23.DomPopupSourceFactory, parentView.viewData.parentIndex), _appEl_0, _el_0, _appEl_0, ref, parentView.parentView.injectorGet(import5.Window, parentView.viewData.parentIndex));
    _StopPropagationDirective_0_10 = new import46.StopPropagationDirective(_el_0);
    _compView_0.create(_MaterialIconComponent_0_8, []);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_1));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_6.instance.handleKeyPress));
    _el_0.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_7.resetOutline));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_7.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_7.hideOutline));
    final subscription_0 = _ButtonDirective_0_6.instance.trigger.listen(eventHandler0(ctx.onClearIcon));
    init([_appEl_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import50.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_6.instance;
    }
    if ((identical(token, import16.KeyboardOnlyFocusIndicatorDirective) && (0 == nodeIndex))) {
      return _KeyboardOnlyFocusIndicatorDirective_0_7;
    }
    if ((identical(token, import48.TooltipController) && (0 == nodeIndex))) {
      return _TooltipController_0_11;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialAutoSuggestInputComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_0_8.icon = 'clear';
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_1 = _ctx.clearIconTooltip;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialTooltipDirective_0_9.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hasClearIconTooltip;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialTooltipDirective_0_9.canShow = currVal_2;
      _expr_2 = currVal_2;
    }
    if (firstCheck) {
      _MaterialTooltipDirective_0_9.ngOnInit();
    }
    _appEl_0.detectChangesInNestedViews();
    _ButtonDirective_0_6.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialTooltipDirective_0_9.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _compView_0?.destroy();
    _MaterialTooltipDirective_0_9.ngOnDestroy();
    _StopPropagationDirective_0_10.ngOnDestroy();
  }

  void _handle_click_0_1($event) {
    _ButtonDirective_0_6.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_0_7.hideOutline();
  }
}

AppView<import3.MaterialAutoSuggestInputComponent> viewFactory_MaterialAutoSuggestInputComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialAutoSuggestInputComponent1(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent2 extends AppView<import3.MaterialAutoSuggestInputComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_7;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_7;
  _ViewMaterialAutoSuggestInputComponent2(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent> build() {
    var _anchor_0 = ngAnchor.clone(false);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_MaterialAutoSuggestInputComponent3);
    _NgIf_0_7 = new NgIf(_appEl_0, _TemplateRef_0_6);
    var _anchor_1 = ngAnchor.clone(false);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MaterialAutoSuggestInputComponent4);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    var _anchor_2 = ngAnchor.clone(false);
    _appEl_2 = new ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_MaterialAutoSuggestInputComponent5);
    _NgIf_2_7 = new NgIf(_appEl_2, _TemplateRef_2_6);
    init([_appEl_0, _appEl_1, _appEl_2], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialAutoSuggestInputComponent _ctx = ctx;
    _NgIf_0_7.ngIf = _ctx.showLoadingSpinner;
    _NgIf_1_7.ngIf = _ctx.showEmptyPlaceholder;
    _NgIf_2_7.ngIf = _ctx.hasOptions;
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

AppView<import3.MaterialAutoSuggestInputComponent> viewFactory_MaterialAutoSuggestInputComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialAutoSuggestInputComponent2(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent3 extends AppView<import3.MaterialAutoSuggestInputComponent> {
  import5.DivElement _el_0;
  import5.Element _el_1;
  import51.ViewMaterialSpinnerComponent0 _compView_1;
  import52.MaterialSpinnerComponent _MaterialSpinnerComponent_1_4;
  _ViewMaterialAutoSuggestInputComponent3(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent> build() {
    var doc = import5.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'loading';
    addShimC(_el_0);
    _compView_1 = new import51.ViewMaterialSpinnerComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _MaterialSpinnerComponent_1_4 = new import52.MaterialSpinnerComponent();
    _compView_1.create(_MaterialSpinnerComponent_1_4, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
  }
}

AppView<import3.MaterialAutoSuggestInputComponent> viewFactory_MaterialAutoSuggestInputComponent3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialAutoSuggestInputComponent3(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent4 extends AppView<import3.MaterialAutoSuggestInputComponent> {
  import5.DivElement _el_0;
  import5.Text _text_1;
  var _expr_0;
  _ViewMaterialAutoSuggestInputComponent4(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent> build() {
    var doc = import5.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'empty';
    addShimC(_el_0);
    _text_1 = new import5.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialAutoSuggestInputComponent _ctx = ctx;
    final currVal_0 = (_ctx.emptyPlaceholder ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import3.MaterialAutoSuggestInputComponent> viewFactory_MaterialAutoSuggestInputComponent4(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialAutoSuggestInputComponent4(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent5 extends AppView<import3.MaterialAutoSuggestInputComponent> {
  import5.Element _el_0;
  import53.ViewMaterialListComponent0 _compView_0;
  import16.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_4;
  import54.MaterialListComponent _MaterialListComponent_0_5;
  ViewContainer _appEl_1;
  import55.NgFor _NgFor_1_7;
  var _expr_0;
  var _expr_3;
  var _expr_4;
  _ViewMaterialAutoSuggestInputComponent5(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent> build() {
    _compView_0 = new import53.ViewMaterialListComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'suggestion-list';
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    createAttr(_el_0, 'role', 'listbox');
    createAttr(_el_0, 'tabIndex', '-1');
    addShimC(_el_0);
    _KeyboardOnlyFocusIndicatorDirective_0_4 = new import16.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.injectorGet(import34.DomService, parentView.parentView.viewData.parentIndex));
    _MaterialListComponent_0_5 = new import54.MaterialListComponent();
    var _anchor_1 = ngAnchor.clone(false);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MaterialAutoSuggestInputComponent6);
    _NgFor_1_7 = new import55.NgFor(_appEl_1, _TemplateRef_1_6);
    _compView_0.create(_MaterialListComponent_0_5, [
      [_appEl_1]
    ]);
    _el_0.addEventListener('mouseleave', eventHandler1(_handle_mouseleave_0_0));
    _el_0.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.resetOutline));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.hideOutline));
    _el_0.addEventListener('click', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.hideOutline));
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.KeyboardOnlyFocusIndicatorDirective) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _KeyboardOnlyFocusIndicatorDirective_0_4;
    }
    if ((identical(token, import54.MaterialListComponent) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialListComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialAutoSuggestInputComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_3 = _ctx.width;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialListComponent_0_5.width = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.trackByIndexFn, null)) {
        (_NgFor_1_7.ngForTrackBy = _ctx.trackByIndexFn);
      }
    }
    final currVal_4 = _ctx.visibleSuggestionGroups;
    if (!identical(_expr_4, currVal_4)) {
      _NgFor_1_7.ngForOf = currVal_4;
      _expr_4 = currVal_4;
    }
    _NgFor_1_7.ngDoCheck();
    _appEl_1.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.inputId, null)) {
        setAttr(_el_0, 'aria-labelledby', _ctx.inputId?.toString());
      }
      if (!identical(_ctx.popupId, null)) {
        setProp(_el_0, 'id', _ctx.popupId);
      }
    }
    final currVal_0 = _ctx.isMultiSelect;
    if (!identical(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-multiselectable', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _compView_0?.destroy();
  }

  void _handle_mouseleave_0_0($event) {
    ctx.activeModel.activate(null);
  }
}

AppView<import3.MaterialAutoSuggestInputComponent> viewFactory_MaterialAutoSuggestInputComponent5(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialAutoSuggestInputComponent5(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent6 extends AppView<import3.MaterialAutoSuggestInputComponent> {
  import5.DivElement _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_7;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_7;
  ViewContainer _appEl_4;
  import55.NgFor _NgFor_4_7;
  var _expr_3;
  _ViewMaterialAutoSuggestInputComponent6(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent> build() {
    var doc = import5.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'list-group';
    createAttr(_el_0, 'group', '');
    addShimC(_el_0);
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MaterialAutoSuggestInputComponent7);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    var _anchor_2 = ngAnchor.clone(false);
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_MaterialAutoSuggestInputComponent8);
    _NgIf_2_7 = new NgIf(_appEl_2, _TemplateRef_2_6);
    var _anchor_3 = ngAnchor.clone(false);
    _el_0.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_6 = new TemplateRef(_appEl_3, viewFactory_MaterialAutoSuggestInputComponent9);
    _NgIf_3_7 = new NgIf(_appEl_3, _TemplateRef_3_6);
    var _anchor_4 = ngAnchor.clone(false);
    _el_0.append(_anchor_4);
    _appEl_4 = new ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_6 = new TemplateRef(_appEl_4, viewFactory_MaterialAutoSuggestInputComponent10);
    _NgFor_4_7 = new import55.NgFor(_appEl_4, _TemplateRef_4_6);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialAutoSuggestInputComponent _ctx = ctx;
    final import56.OptionGroup<dynamic> local_suggestionGroup = locals['\$implicit'];
    _NgIf_1_7.ngIf = (local_suggestionGroup.hasLabel && !_ctx.hasCustomLabelRenderer);
    _NgIf_2_7.ngIf = _ctx.hasCustomLabelRenderer;
    _NgIf_3_7.ngIf = (local_suggestionGroup.isEmpty && local_suggestionGroup.hasEmptyLabel);
    final currVal_3 = local_suggestionGroup;
    if (!identical(_expr_3, currVal_3)) {
      _NgFor_4_7.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    _NgFor_4_7.ngDoCheck();
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

AppView<import3.MaterialAutoSuggestInputComponent> viewFactory_MaterialAutoSuggestInputComponent6(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialAutoSuggestInputComponent6(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent7 extends AppView<import3.MaterialAutoSuggestInputComponent> {
  import5.Element _el_0;
  import5.Text _text_1;
  var _expr_0;
  _ViewMaterialAutoSuggestInputComponent7(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent> build() {
    var doc = import5.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'list-group-label';
    createAttr(_el_0, 'label', '');
    addShimE(_el_0);
    _text_1 = new import5.Text('');
    _el_0.append(_text_1);
    _el_0.addEventListener('mouseenter', eventHandler1(_handle_mouseenter_0_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import56.OptionGroup<dynamic> local_suggestionGroup = parentView.locals['\$implicit'];
    final currVal_0 = import21.interpolate0(local_suggestionGroup.uiDisplayName);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  void _handle_mouseenter_0_0($event) {
    ctx.activeModel.activate(null);
  }
}

AppView<import3.MaterialAutoSuggestInputComponent> viewFactory_MaterialAutoSuggestInputComponent7(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialAutoSuggestInputComponent7(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent8 extends AppView<import3.MaterialAutoSuggestInputComponent> {
  import5.Element _el_0;
  import57.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import58.DynamicComponent _DynamicComponent_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialAutoSuggestInputComponent8(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent> build() {
    _compView_0 = new import57.ViewDynamicComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _appEl_0 = new ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_6 = new import58.DynamicComponent(parentView.parentView.parentView.parentView.parentView.injectorGet(import59.SlowComponentLoader, parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_0.ref, _appEl_0);
    _compView_0.create(_DynamicComponent_0_6, []);
    _el_0.addEventListener('mouseenter', eventHandler1(_handle_mouseenter_0_0));
    init0(_appEl_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import58.DynamicComponent) && (0 == nodeIndex))) {
      return _DynamicComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialAutoSuggestInputComponent _ctx = ctx;
    bool changed = false;
    final import56.OptionGroup<dynamic> local_suggestionGroup = parentView.locals['\$implicit'];
    changed = false;
    final currVal_0 = ((_ctx.labelRenderer != null) ? _ctx.labelRenderer(local_suggestionGroup) : null);
    if (!identical(_expr_0, currVal_0)) {
      _DynamicComponent_0_6.componentType = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = ((_ctx.labelFactory != null) ? _ctx.labelFactory(local_suggestionGroup) : null);
    if (!identical(_expr_1, currVal_1)) {
      _DynamicComponent_0_6.componentFactory = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = local_suggestionGroup;
    if (!identical(_expr_2, currVal_2)) {
      _DynamicComponent_0_6.value = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _DynamicComponent_0_6.ngAfterChanges();
    }
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _compView_0?.destroy();
    _DynamicComponent_0_6.ngOnDestroy();
  }

  void _handle_mouseenter_0_0($event) {
    ctx.activeModel.activate(null);
  }
}

AppView<import3.MaterialAutoSuggestInputComponent> viewFactory_MaterialAutoSuggestInputComponent8(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialAutoSuggestInputComponent8(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent9 extends AppView<import3.MaterialAutoSuggestInputComponent> {
  import5.Element _el_0;
  import60.ViewMaterialSelectDropdownItemComponent0 _compView_0;
  import16.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_4;
  import61.MaterialSelectDropdownItemComponent _MaterialSelectDropdownItemComponent_0_5;
  var _expr_1;
  _ViewMaterialAutoSuggestInputComponent9(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent> build() {
    _compView_0 = new import60.ViewMaterialSelectDropdownItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    addShimC(_el_0);
    _KeyboardOnlyFocusIndicatorDirective_0_4 = new import16.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import34.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex));
    _MaterialSelectDropdownItemComponent_0_5 = new import61.MaterialSelectDropdownItemComponent(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import34.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex), null, (parentView.parentView.parentView.parentView as ViewMaterialAutoSuggestInputComponent0)._MaterialPopupComponent_3_6, parentView.parentView.parentView.parentView.parentView.injectorGet(import62.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref);
    _compView_0.create(_MaterialSelectDropdownItemComponent_0_5, [const []]);
    _el_0.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.resetOutline));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.hideOutline));
    _el_0.addEventListener('click', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.hideOutline));
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.KeyboardOnlyFocusIndicatorDirective) && (0 == nodeIndex))) {
      return _KeyboardOnlyFocusIndicatorDirective_0_4;
    }
    if ((((identical(token, import61.MaterialSelectDropdownItemComponent) || identical(token, import63.SelectionItem)) || identical(token, import64.HasRenderer)) && (0 == nodeIndex))) {
      return _MaterialSelectDropdownItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final import56.OptionGroup<dynamic> local_suggestionGroup = parentView.locals['\$implicit'];
    if (firstCheck) {
      (_MaterialSelectDropdownItemComponent_0_5.disabled = true);
    }
    final currVal_1 = local_suggestionGroup.emptyLabel;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialSelectDropdownItemComponent_0_5.value = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialSelectDropdownItemComponent_0_5.ngOnDestroy();
  }
}

AppView<import3.MaterialAutoSuggestInputComponent> viewFactory_MaterialAutoSuggestInputComponent9(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialAutoSuggestInputComponent9(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent10 extends AppView<import3.MaterialAutoSuggestInputComponent> {
  import5.Element _el_0;
  import60.ViewMaterialSelectDropdownItemComponent0 _compView_0;
  import16.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_4;
  import61.MaterialSelectDropdownItemComponent _MaterialSelectDropdownItemComponent_0_5;
  var _expr_0;
  bool _expr_1;
  bool _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  bool _expr_8;
  var _expr_9;
  var _expr_10;
  _ViewMaterialAutoSuggestInputComponent10(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent> build() {
    _compView_0 = new import60.ViewMaterialSelectDropdownItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'list-item item';
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    addShimC(_el_0);
    _KeyboardOnlyFocusIndicatorDirective_0_4 = new import16.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import34.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex));
    _MaterialSelectDropdownItemComponent_0_5 = new import61.MaterialSelectDropdownItemComponent(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import34.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex), null, (parentView.parentView.parentView.parentView as ViewMaterialAutoSuggestInputComponent0)._MaterialPopupComponent_3_6, parentView.parentView.parentView.parentView.parentView.injectorGet(import62.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref);
    _compView_0.create(_MaterialSelectDropdownItemComponent_0_5, [const []]);
    _el_0.addEventListener('mouseenter', eventHandler1(_handle_mouseenter_0_0));
    _el_0.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.resetOutline));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.hideOutline));
    _el_0.addEventListener('click', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_4.hideOutline));
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.KeyboardOnlyFocusIndicatorDirective) && (0 == nodeIndex))) {
      return _KeyboardOnlyFocusIndicatorDirective_0_4;
    }
    if ((((identical(token, import61.MaterialSelectDropdownItemComponent) || identical(token, import63.SelectionItem)) || identical(token, import64.HasRenderer)) && (0 == nodeIndex))) {
      return _MaterialSelectDropdownItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import3.MaterialAutoSuggestInputComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_suggestion = locals['\$implicit'];
    final local_popup = (parentView.parentView.parentView.parentView as ViewMaterialAutoSuggestInputComponent0)._MaterialPopupComponent_3_6;
    final currVal_1 = (local_popup.showPopup && _ctx.activeModel.isActive(local_suggestion));
    if (!identical(_expr_1, currVal_1)) {
      _MaterialSelectDropdownItemComponent_0_5.active = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.isOptionDisabled(local_suggestion);
    if (!identical(_expr_2, currVal_2)) {
      _MaterialSelectDropdownItemComponent_0_5.disabled = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.componentRenderer;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialSelectDropdownItemComponent_0_5.componentRenderer = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.factoryRenderer;
    if (!identical(_expr_4, currVal_4)) {
      _MaterialSelectDropdownItemComponent_0_5.factoryRenderer = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = local_suggestion;
    if (!identical(_expr_5, currVal_5)) {
      _MaterialSelectDropdownItemComponent_0_5.value = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.hideCheckbox;
    if (!identical(_expr_6, currVal_6)) {
      _MaterialSelectDropdownItemComponent_0_5.hideCheckbox = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.itemRenderer;
    if (!identical(_expr_7, currVal_7)) {
      _MaterialSelectDropdownItemComponent_0_5.itemRenderer = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.isMultiSelect;
    if (!identical(_expr_8, currVal_8)) {
      _MaterialSelectDropdownItemComponent_0_5.deselectOnActivate = currVal_8;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.selection;
    if (!identical(_expr_9, currVal_9)) {
      _MaterialSelectDropdownItemComponent_0_5.selection = currVal_9;
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.closeOnActivate;
    if (!identical(_expr_10, currVal_10)) {
      _MaterialSelectDropdownItemComponent_0_5.closeOnActivate = currVal_10;
      _expr_10 = currVal_10;
    }
    final currVal_0 = _ctx.activeModel.id(local_suggestion);
    if (!identical(_expr_0, currVal_0)) {
      setAttr(_el_0, 'id', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialSelectDropdownItemComponent_0_5.ngOnDestroy();
  }

  void _handle_mouseenter_0_0($event) {
    final local_suggestion = locals['\$implicit'];
    ctx.activeModel.activate(local_suggestion);
  }
}

AppView<import3.MaterialAutoSuggestInputComponent> viewFactory_MaterialAutoSuggestInputComponent10(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialAutoSuggestInputComponent10(parentView, parentIndex);
}

const List<dynamic> styles$MaterialAutoSuggestInputComponentHost = const [];

class _ViewMaterialAutoSuggestInputComponentHost0 extends AppView<dynamic> {
  ViewMaterialAutoSuggestInputComponent0 _compView_0;
  import3.MaterialAutoSuggestInputComponent _MaterialAutoSuggestInputComponent_0_4;
  _ViewMaterialAutoSuggestInputComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import19.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialAutoSuggestInputComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialAutoSuggestInputComponent_0_4 = new import3.MaterialAutoSuggestInputComponent(null, this.injectorGet(import65.IdGenerator, viewData.parentIndex, null), this.injectorGet(import32.PopupSizeProvider, viewData.parentIndex, null));
    _compView_0.create(_MaterialAutoSuggestInputComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import3.MaterialAutoSuggestInputComponent>(0, this, rootEl, _MaterialAutoSuggestInputComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((((((((identical(token, import3.MaterialAutoSuggestInputComponent) || identical(token, import64.HasRenderer)) || identical(token, import63.SelectionContainer)) || identical(token, import66.HighlightProvider)) || identical(token, import40.DropdownHandle)) || identical(token, import64.HasComponentRenderer)) || identical(token, import67.HasFactoryRenderer)) || identical(token, import36.Focusable)) || identical(token, import32.PopupSizeProvider)) && (0 == nodeIndex))) {
      return _MaterialAutoSuggestInputComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _MaterialAutoSuggestInputComponent_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialAutoSuggestInputComponent_0_4.ngOnDestroy();
  }
}

AppView viewFactory_MaterialAutoSuggestInputComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialAutoSuggestInputComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import3.MaterialAutoSuggestInputComponent> MaterialAutoSuggestInputComponentNgFactory = const ComponentFactory<import3.MaterialAutoSuggestInputComponent>('material-auto-suggest-input', viewFactory_MaterialAutoSuggestInputComponentHost0, _MaterialAutoSuggestInputComponentMetadata);
const _MaterialAutoSuggestInputComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialAutoSuggestInputComponent, MaterialAutoSuggestInputComponentNgFactory);
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
  _ref14.initReflector();
  _ref15.initReflector();
  _ref16.initReflector();
  _ref17.initReflector();
  _ref18.initReflector();
  _ref19.initReflector();
  _ref20.initReflector();
  _ref21.initReflector();
  _ref22.initReflector();
  _ref23.initReflector();
  _ref24.initReflector();
  _ref25.initReflector();
  _ref26.initReflector();
  _ref27.initReflector();
  _ref28.initReflector();
  _ref29.initReflector();
  _ref30.initReflector();
  _ref31.initReflector();
  _ref32.initReflector();
  _ref33.initReflector();
}
