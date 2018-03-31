// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_datepicker.dart';
export 'material_datepicker.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:quiver/time.dart';
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/focus/focus_trap.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/glyph/glyph.dart';
import 'package:angular_components/laminate/enums/alignment.dart';
import 'package:angular_components/laminate/popup/popup.dart';
import 'package:angular_components/material_datepicker/calendar.dart';
import 'package:angular_components/material_datepicker/date_input.dart';
import 'package:angular_components/material_datepicker/material_calendar_picker.dart';
import 'package:angular_components/material_datepicker/module.dart';
import 'package:angular_components/material_datepicker/range.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_list/material_list_item.dart';
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/material_select/dropdown_button.dart';
import 'package:angular_components/material_select/material_select_item.dart';
import 'package:angular_components/mixins/focusable_mixin.dart';
import 'package:angular_components/model/a11y/keyboard_handler_mixin.dart';
import 'package:angular_components/model/date/date.dart';
import 'package:angular_components/utils/angular/properties/properties.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref4;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref5;
import 'package:angular_components/glyph/glyph.template.dart' as _ref6;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref7;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref8;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref9;
import 'package:angular_components/material_datepicker/date_input.template.dart' as _ref10;
import 'package:angular_components/material_datepicker/material_calendar_picker.template.dart' as _ref11;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref12;
import 'package:angular_components/material_datepicker/range.template.dart' as _ref13;
import 'package:angular_components/material_input/material_input.template.dart' as _ref14;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref15;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref16;
import 'package:angular_components/material_select/dropdown_button.template.dart' as _ref17;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref18;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref19;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref20;
import 'package:angular_components/model/date/date.template.dart' as _ref21;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref22;
import 'package:angular_components/material_datepicker/material_datepicker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_datepicker.dart' as import2;
import 'dart:html' as import3;
import '../src/laminate/popup/popup_source_directive.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../material_select/dropdown_button.template.dart' as import7;
import '../material_select/dropdown_button.dart' as import8;
import '../material_popup/material_popup.template.dart' as import9;
import '../material_popup/material_popup.dart' as import10;
import '../focus/focus_trap.template.dart' as import11;
import '../focus/focus_trap.dart' as import12;
import '../content/deferred_content.dart' as import13;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import15;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import17;
import 'package:angular/angular.dart';
import '../src/laminate/popup/dom_popup_source.dart' as import19;
import '../utils/angular/reference/reference.dart' as import20;
import 'package:angular/src/core/linker/template_ref.dart';
import '../src/laminate/popup/popup_hierarchy.dart' as import22;
import 'package:angular/src/core/zone/ng_zone.dart' as import23;
import '../src/laminate/overlay/overlay_service.dart' as import24;
import '../laminate/overlay/zindexer.dart' as import25;
import 'package:angular/src/core/di/opaque_token.dart' as import26;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import28;
import '../src/laminate/popup/popup_size_provider.dart' as import29;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import31;
import '../mixins/material_dropdown_base.dart' as import32;
import '../src/laminate/popup/popup_ref.dart' as import33;
import '../material_input/material_input.template.dart' as import34;
import '../material_input/deferred_validator.dart' as import35;
import '../material_input/material_input.dart' as import36;
import '../focus/focus.dart' as import37;
import 'date_input.dart' as import38;
import '../material_input/material_input_default_value_accessor.dart' as import39;
import 'material_calendar_picker.template.dart' as import40;
import 'material_calendar_picker.dart' as import41;
import 'package:angular/src/common/directives/ng_class.dart' as import42;
import '../utils/browser/dom_service/dom_service.dart' as import43;
import '../laminate/components/modal/modal.dart' as import44;
import 'package:quiver/time.dart' as import45;
import '../material_input/base_material_input.dart' as import46;
import 'package:angular/src/common/directives/ng_for.dart' as import47;
import '../material_select/material_select_item.template.dart' as import48;
import '../material_select/material_select_item.dart' as import49;
import '../material_select/activation_handler.dart' as import50;
import '../model/selection/selection_container.dart' as import51;
import '../model/ui/has_renderer.dart' as import52;
import 'range.dart' as import53;

const List<dynamic> styles$MaterialDatepickerComponent = const [import0.styles];

class ViewMaterialDatepickerComponent0 extends AppView<import2.MaterialDatepickerComponent> {
  bool _query_DropdownButtonComponent_1_0_isDirty = true;
  bool _query_MaterialInputComponent_1_1_isDirty = true;
  import3.DivElement _el_0;
  import4.PopupSourceDirective _PopupSourceDirective_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import3.Element _el_2;
  import7.ViewDropdownButtonComponent0 _compView_2;
  import8.DropdownButtonComponent _DropdownButtonComponent_2_5;
  import3.Element _el_3;
  import9.ViewMaterialPopupComponent0 _compView_3;
  ViewContainer _appEl_3;
  import10.MaterialPopupComponent _MaterialPopupComponent_3_8;
  dynamic __PopupRef_3_10;
  dynamic __PopupHierarchy_3_12;
  import3.Element _el_4;
  import11.ViewFocusTrapComponent0 _compView_4;
  import12.FocusTrapComponent _FocusTrapComponent_4_5;
  bool _query_AutoFocusDirective_4_0_isDirty = true;
  ViewContainer _appEl_5;
  import13.DeferredContentDirective _DeferredContentDirective_5_9;
  String _expr_1;
  bool _expr_2;
  String _expr_3;
  var _expr_5;
  var _expr_6;
  bool _expr_7;
  bool _expr_9;
  static RenderComponentType _renderType;
  ViewMaterialDatepickerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('material-datepicker');
    _renderType ??= import17.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialDatepickerComponent);
    setupComponentType(_renderType);
  }
  dynamic get _PopupRef_3_10 {
    if ((this.__PopupRef_3_10 == null)) {
      (__PopupRef_3_10 = import10.getResolvedPopupRef(this._MaterialPopupComponent_3_8));
    }
    return this.__PopupRef_3_10;
  }

  dynamic get _PopupHierarchy_3_12 {
    if ((this.__PopupHierarchy_3_12 == null)) {
      (__PopupHierarchy_3_12 = import10.getHierarchy(this._MaterialPopupComponent_3_8));
    }
    return this.__PopupHierarchy_3_12;
  }

  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'main-content';
    createAttr(_el_0, 'popupSource', '');
    addShimC(_el_0);
    _PopupSourceDirective_0_5 = new import4.PopupSourceDirective(parentView.injectorGet(import19.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import20.ReferenceDirective, viewData.parentIndex, null));
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialDatepickerComponent1);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    _compView_2 = new import7.ViewDropdownButtonComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    _el_2.className = 'menu-lookalike primary-range';
    addShimC(_el_2);
    _DropdownButtonComponent_2_5 = new import8.DropdownButtonComponent();
    _compView_2.create(_DropdownButtonComponent_2_5, [const []]);
    _compView_3 = new import9.ViewMaterialPopupComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    createAttr(_el_3, 'enforceSpaceConstraints', '');
    addShimC(_el_3);
    _appEl_3 = new ViewContainer(3, null, this, _el_3);
    _MaterialPopupComponent_3_8 = new import10.MaterialPopupComponent(parentView.injectorGet(import22.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import10.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import23.NgZone, viewData.parentIndex), parentView.injectorGet(import24.OverlayService, viewData.parentIndex), parentView.injectorGet(import25.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import26.OpaqueToken<List<import28.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import26.OpaqueToken('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import29.PopupSizeProvider, viewData.parentIndex, null), _compView_3.ref, _appEl_3, new ElementRef(_el_3));
    _compView_4 = new import11.ViewFocusTrapComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    addShimC(_el_4);
    _FocusTrapComponent_4_5 = new import12.FocusTrapComponent();
    var _anchor_5 = ngAnchor.clone(false);
    _appEl_5 = new ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = new TemplateRef(_appEl_5, viewFactory_MaterialDatepickerComponent2);
    _DeferredContentDirective_5_9 = new import13.DeferredContentDirective(_appEl_5, _TemplateRef_5_8, _MaterialPopupComponent_3_8);
    _compView_4.create(_FocusTrapComponent_4_5, [
      [_appEl_5]
    ]);
    _compView_3.create(_MaterialPopupComponent_3_8, [
      const [],
      [_el_4],
      const []
    ]);
    final subscription_0 = _DropdownButtonComponent_2_5.trigger.listen(eventHandler0(ctx.onTrigger));
    final subscription_1 = _MaterialPopupComponent_3_8.onVisible.listen(eventHandler1(_handle_visibleChange_3_0));
    _el_4.addEventListener('keypress', eventHandler1(ctx.onKeyPress));
    _el_4.addEventListener('keydown', eventHandler1(ctx.onKeyDown));
    _el_4.addEventListener('keyup', eventHandler1(ctx.onKeyUp));
    ctx.dropdownButton = _DropdownButtonComponent_2_5;
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import10.MaterialPopupComponent) || identical(token, import31.DeferredContentAware)) || identical(token, import32.DropdownHandle)) && ((3 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _MaterialPopupComponent_3_8;
    }
    if ((identical(token, import33.PopupRef) && ((3 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _PopupRef_3_10;
    }
    if ((identical(token, import22.PopupHierarchy) && ((3 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _PopupHierarchy_3_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDatepickerComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import4.PopupSourceDirective local_container = _PopupSourceDirective_0_5;
    _NgIf_1_9.ngIf = _ctx.presetDates.isNotEmpty;
    changed = false;
    final currVal_1 = _ctx.formattedDate;
    if (!identical(_expr_1, currVal_1)) {
      _DropdownButtonComponent_2_5.buttonText = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (!identical(_expr_2, currVal_2)) {
      _DropdownButtonComponent_2_5.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.error;
    if (!identical(_expr_3, currVal_3)) {
      _DropdownButtonComponent_2_5.error = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    if (firstCheck) {
      (_MaterialPopupComponent_3_8.enforceSpaceConstraints = true);
    }
    final currVal_5 = _ctx.preferredPositions;
    if (!identical(_expr_5, currVal_5)) {
      _MaterialPopupComponent_3_8.preferredPositions = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = local_container;
    if (!identical(_expr_6, currVal_6)) {
      _MaterialPopupComponent_3_8.source = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.popupVisible;
    if (!identical(_expr_7, currVal_7)) {
      _MaterialPopupComponent_3_8.visible = currVal_7;
      _expr_7 = currVal_7;
    }
    if (firstCheck) {
      (_DeferredContentDirective_5_9.preserveDimensions = true);
    }
    _appEl_1.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    if (_query_AutoFocusDirective_4_0_isDirty) {
      _FocusTrapComponent_4_5.autoFocus = (_appEl_5.mapNestedViews((_ViewMaterialDatepickerComponent2 nestedView) {
        return [nestedView._AutoFocusDirective_4_8];
      }).isNotEmpty
          ? _appEl_5.mapNestedViews((_ViewMaterialDatepickerComponent2 nestedView) {
              return [nestedView._AutoFocusDirective_4_8];
            }).first
          : null);
      _query_AutoFocusDirective_4_0_isDirty = false;
    }
    if (_query_MaterialInputComponent_1_1_isDirty) {
      ctx.textInput = (_appEl_5.mapNestedViews((_ViewMaterialDatepickerComponent2 nestedView) {
        return [nestedView._MaterialInputComponent_4_6];
      }).isNotEmpty
          ? _appEl_5.mapNestedViews((_ViewMaterialDatepickerComponent2 nestedView) {
              return [nestedView._MaterialInputComponent_4_6];
            }).first
          : null);
      _query_MaterialInputComponent_1_1_isDirty = false;
    }
    _compView_3.detectHostChanges(firstCheck);
    _compView_2.detectChanges();
    _compView_3.detectChanges();
    _compView_4.detectChanges();
    if (firstCheck) {
      _PopupSourceDirective_0_5.ngAfterViewInit();
    }
    if (firstCheck) {
      _MaterialPopupComponent_3_8.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
    _appEl_5?.destroyNestedViews();
    _compView_2?.destroy();
    _compView_3?.destroy();
    _compView_4?.destroy();
    _PopupSourceDirective_0_5.ngOnDestroy();
    _DeferredContentDirective_5_9.ngOnDestroy();
    _FocusTrapComponent_4_5.ngOnDestroy();
    _MaterialPopupComponent_3_8.ngOnDestroy();
  }

  void _handle_visibleChange_3_0($event) {
    ctx.popupVisible = $event;
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_9 = ctx.compact;
    if (!identical(_expr_9, currVal_9)) {
      updateElemClass(rootEl, 'compact', currVal_9);
      _expr_9 = currVal_9;
    }
  }
}

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialDatepickerComponent0(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent1 extends AppView<import2.MaterialDatepickerComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewMaterialDatepickerComponent1(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDatepickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'primary-label';
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDatepickerComponent _ctx = ctx;
    final currVal_0 = (_ctx.labelMsg ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialDatepickerComponent1(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent2 extends AppView<import2.MaterialDatepickerComponent> {
  import3.DivElement _el_0;
  import3.DivElement _el_1;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  import3.DivElement _el_3;
  import3.Element _el_4;
  import34.ViewMaterialInputComponent0 _compView_4;
  import35.DeferredValidator _DeferredValidator_4_5;
  import36.MaterialInputComponent _MaterialInputComponent_4_6;
  import36.MaterialInputComponent _Focusable_4_7;
  import37.AutoFocusDirective _AutoFocusDirective_4_8;
  import38.DateInputDirective _DateInputDirective_4_9;
  import36.MaterialInputComponent _BaseMaterialInput_4_10;
  import39.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_4_11;
  List<dynamic> __NgValidators_4_12;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  import3.Element _el_6;
  import40.ViewMaterialCalendarPickerComponent0 _compView_6;
  import41.MaterialCalendarPickerComponent _MaterialCalendarPickerComponent_6_5;
  import42.NgClass _NgClass_6_6;
  bool _expr_0;
  String _expr_2;
  bool _expr_3;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_15;
  _ViewMaterialDatepickerComponent2(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDatepickerComponent0._renderType;
  }
  List<dynamic> get _NgValidators_4_12 {
    if ((this.__NgValidators_4_12 == null)) {
      (__NgValidators_4_12 = [this._DeferredValidator_4_5]);
    }
    return this.__NgValidators_4_12;
  }

  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'popup-content';
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'inner-label-wrapper';
    addShimC(_el_1);
    var _anchor_2 = ngAnchor.clone(false);
    _el_1.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MaterialDatepickerComponent3);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    _el_3 = createDivAndAppend(doc, _el_0);
    _el_3.className = 'date-input';
    addShimC(_el_3);
    _compView_4 = new import34.ViewMaterialInputComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    _el_3.append(_el_4);
    createAttr(_el_4, 'autoFocus', '');
    createAttr(_el_4, 'dateParsing', '');
    createAttr(_el_4, 'type', 'text');
    addShimC(_el_4);
    _DeferredValidator_4_5 = new import35.DeferredValidator();
    _MaterialInputComponent_4_6 = new import36.MaterialInputComponent('text', null, null, _compView_4.ref, _DeferredValidator_4_5);
    _Focusable_4_7 = _MaterialInputComponent_4_6;
    _AutoFocusDirective_4_8 = new import37.AutoFocusDirective(_el_4, parentView.parentView.injectorGet(import43.DomService, parentView.viewData.parentIndex), _Focusable_4_7, parentView.parentView.injectorGet(import44.ModalComponent, parentView.viewData.parentIndex, null), (parentView as ViewMaterialDatepickerComponent0)._PopupRef_3_10);
    _DateInputDirective_4_9 = new import38.DateInputDirective(parentView.parentView.injectorGet(const import26.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import45.Clock, parentView.viewData.parentIndex), _MaterialInputComponent_4_6);
    _BaseMaterialInput_4_10 = _MaterialInputComponent_4_6;
    _MaterialInputDefaultValueAccessor_4_11 = new import39.MaterialInputDefaultValueAccessor(_BaseMaterialInput_4_10, null);
    _compView_4.create(_MaterialInputComponent_4_6, [const []]);
    var _anchor_5 = ngAnchor.clone(false);
    _el_0.append(_anchor_5);
    _appEl_5 = new ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = new TemplateRef(_appEl_5, viewFactory_MaterialDatepickerComponent4);
    _NgIf_5_9 = new NgIf(_appEl_5, _TemplateRef_5_8);
    _compView_6 = new import40.ViewMaterialCalendarPickerComponent0(this, 6);
    _el_6 = _compView_6.rootEl;
    _el_0.append(_el_6);
    _el_6.className = 'calendar-picker';
    createAttr(_el_6, 'mode', 'single-date');
    addShimC(_el_6);
    _MaterialCalendarPickerComponent_6_5 = new import41.MaterialCalendarPickerComponent(parentView.parentView.injectorGet(const import26.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import45.Clock, parentView.viewData.parentIndex), 'single-date');
    _NgClass_6_6 = new import42.NgClass(_el_6);
    _compView_6.create(_MaterialCalendarPickerComponent_6_5, []);
    final subscription_0 = _DateInputDirective_4_9.dateChange.listen(eventHandler1(ctx.setDateFromInput));
    final subscription_1 = _MaterialCalendarPickerComponent_6_5.stateChange.listen(eventHandler1(_handle_stateChange_6_0));
    init([_el_0], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import35.DeferredValidator) && (4 == nodeIndex))) {
      return _DeferredValidator_4_5;
    }
    if (((identical(token, import36.MaterialInputComponent) || identical(token, import20.ReferenceDirective)) && (4 == nodeIndex))) {
      return _MaterialInputComponent_4_6;
    }
    if ((identical(token, import37.Focusable) && (4 == nodeIndex))) {
      return _Focusable_4_7;
    }
    if ((identical(token, import46.BaseMaterialInput) && (4 == nodeIndex))) {
      return _BaseMaterialInput_4_10;
    }
    if ((identical(token, import39.MaterialInputDefaultValueAccessor) && (4 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_4_11;
    }
    if ((identical(token, const import26.MultiToken('NgValidators')) && (4 == nodeIndex))) {
      return _NgValidators_4_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDatepickerComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_2_9.ngIf = _ctx.presetDates.isNotEmpty;
    changed = false;
    final currVal_2 = _ctx.placeholderMsg;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialInputComponent_4_6.label = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.required;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialInputComponent_4_6.required = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if (firstCheck) {
      (_AutoFocusDirective_4_8.autoFocus = true);
    }
    if (firstCheck) {
      _AutoFocusDirective_4_8.ngOnInit();
    }
    final currVal_5 = _ctx.outputFormat;
    if (!identical(_expr_5, currVal_5)) {
      _DateInputDirective_4_9.dateFormat = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.maxDate;
    if (!identical(_expr_6, currVal_6)) {
      _DateInputDirective_4_9.maxDate = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.minDate;
    if (!identical(_expr_7, currVal_7)) {
      _DateInputDirective_4_9.minDate = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.date;
    if (!identical(_expr_8, currVal_8)) {
      _DateInputDirective_4_9.date = currVal_8;
      _expr_8 = currVal_8;
    }
    _NgIf_5_9.ngIf = _ctx.presetDates.isNotEmpty;
    changed = false;
    final currVal_10 = _ctx.calendar;
    if (!identical(_expr_10, currVal_10)) {
      _MaterialCalendarPickerComponent_6_5.state = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.minDate;
    if (!identical(_expr_11, currVal_11)) {
      _MaterialCalendarPickerComponent_6_5.minDate = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.maxDate;
    if (!identical(_expr_12, currVal_12)) {
      _MaterialCalendarPickerComponent_6_5.maxDate = currVal_12;
      changed = true;
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.compact;
    if (!identical(_expr_13, currVal_13)) {
      _MaterialCalendarPickerComponent_6_5.compact = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    if (firstCheck) {
      _MaterialCalendarPickerComponent_6_5.ngOnInit();
    }
    if (firstCheck) {
      (_NgClass_6_6.initialClasses = 'calendar-picker');
    }
    final currVal_15 = _ctx.calendarWeekRowsStyle;
    if (!identical(_expr_15, currVal_15)) {
      _NgClass_6_6.rawClass = currVal_15;
      _expr_15 = currVal_15;
    }
    _NgClass_6_6.ngDoCheck();
    _appEl_2.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    final currVal_0 = _ctx.compact;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'compact', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_6.detectHostChanges(firstCheck);
    _compView_4.detectChanges();
    _compView_6.detectChanges();
    if (firstCheck) {
      _MaterialInputComponent_4_6.ngAfterViewInit();
    }
    if (firstCheck) {
      _MaterialCalendarPickerComponent_6_5.ngAfterViewInit();
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewMaterialDatepickerComponent0)._query_MaterialInputComponent_1_1_isDirty = true;
    (parentView as ViewMaterialDatepickerComponent0)._query_AutoFocusDirective_4_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
    _appEl_5?.destroyNestedViews();
    _compView_4?.destroy();
    _compView_6?.destroy();
    _MaterialInputComponent_4_6.ngOnDestroy();
    _AutoFocusDirective_4_8.ngOnDestroy();
    _DateInputDirective_4_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_4_11.ngOnDestroy();
    _MaterialCalendarPickerComponent_6_5.ngOnDestroy();
    _NgClass_6_6.ngOnDestroy();
  }

  void _handle_stateChange_6_0($event) {
    ctx.calendar = $event;
  }
}

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialDatepickerComponent2(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent3 extends AppView<import2.MaterialDatepickerComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewMaterialDatepickerComponent3(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDatepickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'inner-label';
    addShimE(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDatepickerComponent _ctx = ctx;
    final currVal_0 = (_ctx.labelMsg ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialDatepickerComponent3(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent4 extends AppView<import2.MaterialDatepickerComponent> {
  import3.DivElement _el_0;
  ViewContainer _appEl_1;
  import47.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewMaterialDatepickerComponent4(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDatepickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'preset-dates-wrapper';
    addShimC(_el_0);
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialDatepickerComponent5);
    _NgFor_1_9 = new import47.NgFor(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDatepickerComponent _ctx = ctx;
    final currVal_0 = _ctx.presetDates;
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

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponent4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialDatepickerComponent4(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent5 extends AppView<import2.MaterialDatepickerComponent> {
  import3.Element _el_0;
  import48.ViewMaterialSelectItemComponent0 _compView_0;
  import49.MaterialSelectItemComponent _MaterialSelectItemComponent_0_5;
  import3.Text _text_1;
  var _expr_0;
  var _expr_2;
  _ViewMaterialDatepickerComponent5(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDatepickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    _compView_0 = new import48.ViewMaterialSelectItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'closeOnActivate', 'false');
    addShimC(_el_0);
    _MaterialSelectItemComponent_0_5 = new import49.MaterialSelectItemComponent(_el_0, parentView.parentView.parentView.parentView.injectorGet(import43.DomService, parentView.parentView.parentView.viewData.parentIndex), (parentView.parentView.parentView as ViewMaterialDatepickerComponent0)._MaterialPopupComponent_3_8, parentView.parentView.parentView.parentView.injectorGet(import50.ActivationHandler, parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref, null);
    _text_1 = new import3.Text('');
    _compView_0.create(_MaterialSelectItemComponent_0_5, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_0_5.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import51.SelectionItem) || identical(token, import52.HasRenderer)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDatepickerComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final import53.SingleDayRange local_presetDate = locals['\$implicit'];
    if (firstCheck) {
      (_MaterialSelectItemComponent_0_5.closeOnActivate = 'false');
    }
    final currVal_0 = _ctx.isPresetDateSelected(local_presetDate);
    if (!identical(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_2 = import17.interpolate0(local_presetDate.title);
    if (!identical(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialSelectItemComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final import53.SingleDayRange local_presetDate = locals['\$implicit'];
    ctx.onPresetClicked(local_presetDate);
  }
}

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponent5(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialDatepickerComponent5(parentView, parentIndex);
}

const List<dynamic> styles$MaterialDatepickerComponentHost = const [];

class _ViewMaterialDatepickerComponentHost0 extends AppView<dynamic> {
  ViewMaterialDatepickerComponent0 _compView_0;
  import2.MaterialDatepickerComponent _MaterialDatepickerComponent_0_5;
  _ViewMaterialDatepickerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialDatepickerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialDatepickerComponent_0_5 = new import2.MaterialDatepickerComponent(this.injectorGet(const import26.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null));
    _compView_0.create(_MaterialDatepickerComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialDatepickerComponent>(0, this, rootEl, _MaterialDatepickerComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialDatepickerComponent) && (0 == nodeIndex))) {
      return _MaterialDatepickerComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialDatepickerComponent_0_5.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_MaterialDatepickerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialDatepickerComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialDatepickerComponent> MaterialDatepickerComponentNgFactory = const ComponentFactory<import2.MaterialDatepickerComponent>('material-datepicker', viewFactory_MaterialDatepickerComponentHost0, _MaterialDatepickerComponentMetadata);
const _MaterialDatepickerComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDatepickerComponent, MaterialDatepickerComponentNgFactory);
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
}
