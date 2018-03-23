// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_date_range_picker.dart';
export 'material_date_range_picker.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:quiver/time.dart';
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/focus/focus_trap.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/glyph/glyph.dart';
import 'package:angular_components/laminate/enums/alignment.dart';
import 'package:angular_components/laminate/popup/popup.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_datepicker/comparison.dart';
import 'package:angular_components/material_datepicker/date_range_editor.dart';
import 'package:angular_components/material_datepicker/module.dart';
import 'package:angular_components/material_datepicker/next_prev_buttons.dart';
import 'package:angular_components/material_datepicker/preset.dart';
import 'package:angular_components/material_datepicker/range.dart';
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/material_select/dropdown_button.dart';
import 'package:angular_components/model/a11y/keyboard_handler_mixin.dart';
import 'package:angular_components/model/date/date.dart';
import 'package:angular_components/model/date/date_formatter.dart';
import 'package:angular_components/model/observable/observable.dart';
import 'package:angular_components/utils/angular/properties/properties.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref3;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref4;
import 'package:angular_components/glyph/glyph.template.dart' as _ref5;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref6;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref7;
import 'package:angular_components/material_button/material_button.template.dart' as _ref8;
import 'package:angular_components/material_datepicker/comparison.template.dart' as _ref9;
import 'package:angular_components/material_datepicker/date_range_editor.template.dart' as _ref10;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref11;
import 'package:angular_components/material_datepicker/next_prev_buttons.template.dart' as _ref12;
import 'package:angular_components/material_datepicker/preset.template.dart' as _ref13;
import 'package:angular_components/material_datepicker/range.template.dart' as _ref14;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref15;
import 'package:angular_components/material_select/dropdown_button.template.dart' as _ref16;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref17;
import 'package:angular_components/model/date/date.template.dart' as _ref18;
import 'package:angular_components/model/date/date_formatter.template.dart' as _ref19;
import 'package:angular_components/model/observable/observable.template.dart' as _ref20;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref21;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref22;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref23;
import 'package:angular_components/material_datepicker/material_date_range_picker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_date_range_picker.dart' as import2;
import 'dart:html' as import3;
import '../button_decorator/button_decorator.template.dart' as import4;
import '../focus/keyboard_only_focus_indicator.dart' as import5;
import '../src/laminate/popup/popup_source_directive.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../material_select/dropdown_button.template.dart' as import9;
import '../material_select/dropdown_button.dart' as import10;
import '../material_popup/material_popup.template.dart' as import11;
import '../material_popup/material_popup.dart' as import12;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import14;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import16;
import 'package:angular/angular.dart';
import '../button_decorator/button_decorator.dart' as import18;
import '../utils/browser/dom_service/dom_service.dart' as import19;
import '../src/laminate/popup/dom_popup_source.dart' as import20;
import '../utils/angular/reference/reference.dart' as import21;
import 'package:angular/src/core/linker/template_ref.dart';
import '../src/laminate/popup/popup_hierarchy.dart' as import23;
import 'package:angular/src/core/zone/ng_zone.dart' as import24;
import '../src/laminate/overlay/overlay_service.dart' as import25;
import '../laminate/overlay/zindexer.dart' as import26;
import 'package:angular/src/core/di/opaque_token.dart' as import27;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import29;
import '../src/laminate/popup/popup_size_provider.dart' as import30;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import32;
import '../mixins/material_dropdown_base.dart' as import33;
import '../src/laminate/popup/popup_ref.dart' as import34;
import 'next_prev_buttons.template.dart' as import35;
import 'next_prev_buttons.dart' as import36;
import '../focus/focus_trap.template.dart' as import37;
import '../focus/focus_trap.dart' as import38;
import 'date_range_editor.template.dart' as import39;
import 'date_range_editor.dart' as import40;
import '../material_button/material_button.template.dart' as import41;
import '../theme/dark_theme.dart' as import42;
import '../material_button/material_button.dart' as import43;
import '../src/utils/angular/managed_zone/managed_zone.dart' as import44;
import 'package:quiver/time.dart' as import45;

const List<dynamic> styles$MaterialDateRangePickerComponent = const [import0.styles];

class ViewMaterialDateRangePickerComponent0 extends AppView<import2.MaterialDateRangePickerComponent> {
  bool _query_focusOnClose_1_0_isDirty = true;
  bool _query_MaterialPopupComponent_1_1_isDirty = true;
  import3.DivElement _el_0;
  import4.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import5.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  import6.PopupSourceDirective _PopupSourceDirective_0_7;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import3.Element _el_2;
  import3.Element _el_3;
  import9.ViewDropdownButtonComponent0 _compView_3;
  import10.DropdownButtonComponent _DropdownButtonComponent_3_5;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  import3.Element _el_6;
  import11.ViewMaterialPopupComponent0 _compView_6;
  ViewContainer _appEl_6;
  import12.MaterialPopupComponent _MaterialPopupComponent_6_8;
  dynamic __PopupHierarchy_6_11;
  dynamic __PopupRef_6_12;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  String _expr_1;
  bool _expr_2;
  String _expr_3;
  var _expr_7;
  var _expr_8;
  bool _expr_10;
  bool _expr_11;
  static RenderComponentType _renderType;
  ViewMaterialDateRangePickerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('material-date-range-picker');
    _renderType ??= import16.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialDateRangePickerComponent);
    setupComponentType(_renderType);
  }
  dynamic get _PopupHierarchy_6_11 {
    if ((this.__PopupHierarchy_6_11 == null)) {
      (__PopupHierarchy_6_11 = import12.getHierarchy(this._MaterialPopupComponent_6_8));
    }
    return this.__PopupHierarchy_6_11;
  }

  dynamic get _PopupRef_6_12 {
    if ((this.__PopupRef_6_12 == null)) {
      (__PopupRef_6_12 = import12.getResolvedPopupRef(this._MaterialPopupComponent_6_8));
    }
    return this.__PopupRef_6_12;
  }

  @override
  ComponentRef<import2.MaterialDateRangePickerComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'main-content';
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    createAttr(_el_0, 'popupSource', '');
    createAttr(_el_0, 'role', 'button');
    addShimC(_el_0);
    _ButtonDirective_0_5 = new import4.ButtonDirectiveNgCd(new import18.ButtonDirective(_el_0));
    _KeyboardOnlyFocusIndicatorDirective_0_6 = new import5.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.injectorGet(import19.DomService, viewData.parentIndex));
    _PopupSourceDirective_0_7 = new import6.PopupSourceDirective(parentView.injectorGet(import20.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import21.ReferenceDirective, viewData.parentIndex, null));
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MaterialDateRangePickerComponent1);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    _el_2 = createSpanAndAppend(doc, _el_0);
    _el_2.className = 'main-line';
    addShimE(_el_2);
    _compView_3 = new import9.ViewDropdownButtonComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    _el_2.append(_el_3);
    _el_3.className = 'menu-lookalike primary-range';
    addShimC(_el_3);
    _DropdownButtonComponent_3_5 = new import10.DropdownButtonComponent();
    _compView_3.create(_DropdownButtonComponent_3_5, [const []]);
    var _anchor_4 = ngAnchor.clone(false);
    _el_2.append(_anchor_4);
    _appEl_4 = new ViewContainer(4, 2, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = new TemplateRef(_appEl_4, viewFactory_MaterialDateRangePickerComponent2);
    _NgIf_4_9 = new NgIf(_appEl_4, _TemplateRef_4_8);
    var _anchor_5 = ngAnchor.clone(false);
    _el_0.append(_anchor_5);
    _appEl_5 = new ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = new TemplateRef(_appEl_5, viewFactory_MaterialDateRangePickerComponent3);
    _NgIf_5_9 = new NgIf(_appEl_5, _TemplateRef_5_8);
    _compView_6 = new import11.ViewMaterialPopupComponent0(this, 6);
    _el_6 = _compView_6.rootEl;
    parentRenderNode.append(_el_6);
    createAttr(_el_6, 'enforceSpaceConstraints', '');
    addShimC(_el_6);
    _appEl_6 = new ViewContainer(6, null, this, _el_6);
    _MaterialPopupComponent_6_8 = new import12.MaterialPopupComponent(parentView.injectorGet(import23.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import12.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import24.NgZone, viewData.parentIndex), parentView.injectorGet(import25.OverlayService, viewData.parentIndex), parentView.injectorGet(import26.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import27.OpaqueToken<List<import29.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import27.OpaqueToken('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import30.PopupSizeProvider, viewData.parentIndex, null), _compView_6.ref, _appEl_6, new ElementRef(_el_6));
    var _anchor_7 = ngAnchor.clone(false);
    _appEl_7 = new ViewContainer(7, 6, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = new TemplateRef(_appEl_7, viewFactory_MaterialDateRangePickerComponent4);
    _NgIf_7_9 = new NgIf(_appEl_7, _TemplateRef_7_8);
    _compView_6.create(_MaterialPopupComponent_6_8, [
      const [],
      [_appEl_7],
      const []
    ]);
    _el_0.addEventListener('focus', eventHandler0(ctx.initEditor));
    _el_0.addEventListener('mouseenter', eventHandler0(ctx.initEditor));
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_3));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    _el_0.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.hideOutline));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler0(ctx.open));
    final subscription_1 = _MaterialPopupComponent_6_8.onOpen.listen(eventHandler0(ctx.open));
    final subscription_2 = _MaterialPopupComponent_6_8.onClose.listen(eventHandler0(ctx.close));
    ctx.focusOnClose = _KeyboardOnlyFocusIndicatorDirective_0_6;
    ctx.popup = _MaterialPopupComponent_6_8;
    init(const [], [subscription_0, subscription_1, subscription_2]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import10.DropdownButtonComponent) && (3 == nodeIndex))) {
      return _DropdownButtonComponent_3_5;
    }
    if ((identical(token, import18.ButtonDirective) && ((0 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _ButtonDirective_0_5.instance;
    }
    if ((identical(token, import5.KeyboardOnlyFocusIndicatorDirective) && ((0 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _KeyboardOnlyFocusIndicatorDirective_0_6;
    }
    if ((identical(token, import6.PopupSourceDirective) && ((0 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _PopupSourceDirective_0_7;
    }
    if ((((identical(token, import12.MaterialPopupComponent) || identical(token, import32.DeferredContentAware)) || identical(token, import33.DropdownHandle)) && ((6 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _MaterialPopupComponent_6_8;
    }
    if ((identical(token, import23.PopupHierarchy) && ((6 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _PopupHierarchy_6_11;
    }
    if ((identical(token, import34.PopupRef) && ((6 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _PopupRef_6_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDateRangePickerComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import6.PopupSourceDirective local_button = _PopupSourceDirective_0_7;
    _NgIf_1_9.ngIf = (_ctx.hasTitle && _ctx.presets.isNotEmpty);
    changed = false;
    final currVal_1 = _ctx.formattedRange;
    if (!identical(_expr_1, currVal_1)) {
      _DropdownButtonComponent_3_5.buttonText = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (!identical(_expr_2, currVal_2)) {
      _DropdownButtonComponent_3_5.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.error;
    if (!identical(_expr_3, currVal_3)) {
      _DropdownButtonComponent_3_5.error = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    _NgIf_4_9.ngIf = _ctx.showNextPrevButtons;
    _NgIf_5_9.ngIf = _ctx.hasComparison;
    if (firstCheck) {
      (_MaterialPopupComponent_6_8.enforceSpaceConstraints = true);
    }
    final currVal_7 = _ctx.overlapAlignments;
    if (!identical(_expr_7, currVal_7)) {
      _MaterialPopupComponent_6_8.preferredPositions = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = local_button;
    if (!identical(_expr_8, currVal_8)) {
      _MaterialPopupComponent_6_8.source = currVal_8;
      _expr_8 = currVal_8;
    }
    _NgIf_7_9.ngIf = _ctx.isEditorCreated;
    _appEl_1.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
    _compView_6.detectHostChanges(firstCheck);
    _compView_3.detectChanges();
    _compView_6.detectChanges();
    if (firstCheck) {
      _PopupSourceDirective_0_7.ngAfterViewInit();
    }
    if (firstCheck) {
      _MaterialPopupComponent_6_8.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_4?.destroyNestedViews();
    _appEl_5?.destroyNestedViews();
    _appEl_6?.destroyNestedViews();
    _appEl_7?.destroyNestedViews();
    _compView_3?.destroy();
    _compView_6?.destroy();
    _PopupSourceDirective_0_7.ngOnDestroy();
    _MaterialPopupComponent_6_8.ngOnDestroy();
  }

  void _handle_click_0_3($event) {
    _ButtonDirective_0_5.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_0_6.hideOutline();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_10 = ctx.compact;
    if (!identical(_expr_10, currVal_10)) {
      updateElemClass(rootEl, 'compact', currVal_10);
      _expr_10 = currVal_10;
    }
    final currVal_11 = ctx.disabled;
    if (!identical(_expr_11, currVal_11)) {
      updateElemClass(rootEl, 'disabled', currVal_11);
      _expr_11 = currVal_11;
    }
  }
}

AppView<import2.MaterialDateRangePickerComponent> viewFactory_MaterialDateRangePickerComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialDateRangePickerComponent0(parentView, parentIndex);
}

class _ViewMaterialDateRangePickerComponent1 extends AppView<import2.MaterialDateRangePickerComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewMaterialDateRangePickerComponent1(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDateRangePickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDateRangePickerComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'range-title';
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDateRangePickerComponent _ctx = ctx;
    final currVal_0 = (_ctx.rangeTitle ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialDateRangePickerComponent> viewFactory_MaterialDateRangePickerComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialDateRangePickerComponent1(parentView, parentIndex);
}

class _ViewMaterialDateRangePickerComponent2 extends AppView<import2.MaterialDateRangePickerComponent> {
  import3.Element _el_0;
  import35.ViewNextPrevComponent0 _compView_0;
  import36.NextPrevComponent _NextPrevComponent_0_5;
  bool _expr_0;
  _ViewMaterialDateRangePickerComponent2(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDateRangePickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDateRangePickerComponent> build() {
    _compView_0 = new import35.ViewNextPrevComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'next-prev-buttons';
    addShimC(_el_0);
    _NextPrevComponent_0_5 = new import36.NextPrevComponent(_compView_0.ref);
    _compView_0.create(_NextPrevComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import36.NextPrevComponent) && (0 == nodeIndex))) {
      return _NextPrevComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDateRangePickerComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.model, null)) {
        _NextPrevComponent_0_5.model = _ctx.model;
        changed = true;
      }
    }
    final currVal_0 = _ctx.disabled;
    if (!identical(_expr_0, currVal_0)) {
      _NextPrevComponent_0_5.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _NextPrevComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialDateRangePickerComponent> viewFactory_MaterialDateRangePickerComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialDateRangePickerComponent2(parentView, parentIndex);
}

class _ViewMaterialDateRangePickerComponent3 extends AppView<import2.MaterialDateRangePickerComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewMaterialDateRangePickerComponent3(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDateRangePickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDateRangePickerComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'comparison-title';
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDateRangePickerComponent _ctx = ctx;
    final currVal_0 = (_ctx.formattedComparison ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialDateRangePickerComponent> viewFactory_MaterialDateRangePickerComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialDateRangePickerComponent3(parentView, parentIndex);
}

class _ViewMaterialDateRangePickerComponent4 extends AppView<import2.MaterialDateRangePickerComponent> {
  import3.Element _el_0;
  import37.ViewFocusTrapComponent0 _compView_0;
  import38.FocusTrapComponent _FocusTrapComponent_0_5;
  bool _query_AutoFocusDirective_0_0_isDirty = true;
  import3.Element _el_1;
  import39.ViewDateRangeEditorComponent0 _compView_1;
  import40.DateRangeEditorComponent _DateRangeEditorComponent_1_5;
  import3.DivElement _el_2;
  import3.DivElement _el_3;
  import3.Element _el_5;
  import41.ViewMaterialButtonComponent0 _compView_5;
  import42.AcxDarkTheme _AcxDarkTheme_5_5;
  import43.MaterialButtonComponent _MaterialButtonComponent_5_6;
  import3.Text _text_6;
  import3.Element _el_7;
  import41.ViewMaterialButtonComponent0 _compView_7;
  import42.AcxDarkTheme _AcxDarkTheme_7_5;
  import43.MaterialButtonComponent _MaterialButtonComponent_7_6;
  import3.Text _text_8;
  bool _expr_0;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  bool _expr_13;
  var _expr_14;
  var _expr_15;
  _ViewMaterialDateRangePickerComponent4(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDateRangePickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDateRangePickerComponent> build() {
    _compView_0 = new import37.ViewFocusTrapComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'popup-contents';
    addShimC(_el_0);
    _FocusTrapComponent_0_5 = new import38.FocusTrapComponent();
    _compView_1 = new import39.ViewDateRangeEditorComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    addShimC(_el_1);
    _DateRangeEditorComponent_1_5 = new import40.DateRangeEditorComponent(new ElementRef(_el_1), parentView.parentView.injectorGet(import19.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import44.ManagedZone, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import40.DateRangeEditorHost, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(const import27.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import45.Clock, parentView.viewData.parentIndex));
    _compView_1.create(_DateRangeEditorComponent_1_5, []);
    var doc = import3.document;
    _el_2 = doc.createElement('div');
    _el_2.className = 'apply-bar';
    addShimC(_el_2);
    _el_3 = createDivAndAppend(doc, _el_2);
    _el_3.className = 'separator';
    addShimC(_el_3);
    import3.Text _text_4 = new import3.Text(' ');
    _el_3.append(_text_4);
    _compView_5 = new import41.ViewMaterialButtonComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    _el_2.append(_el_5);
    _el_5.className = 'cancel';
    addShimC(_el_5);
    _AcxDarkTheme_5_5 = new import42.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken('acxDarkTheme'), parentView.viewData.parentIndex, null));
    _MaterialButtonComponent_5_6 = new import43.MaterialButtonComponent(_el_5, _AcxDarkTheme_5_5, _compView_5.ref);
    _text_6 = new import3.Text('');
    _compView_5.create(_MaterialButtonComponent_5_6, [
      [_text_6]
    ]);
    _compView_7 = new import41.ViewMaterialButtonComponent0(this, 7);
    _el_7 = _compView_7.rootEl;
    _el_2.append(_el_7);
    _el_7.className = 'apply';
    addShimC(_el_7);
    _AcxDarkTheme_7_5 = new import42.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken('acxDarkTheme'), parentView.viewData.parentIndex, null));
    _MaterialButtonComponent_7_6 = new import43.MaterialButtonComponent(_el_7, _AcxDarkTheme_7_5, _compView_7.ref);
    _text_8 = new import3.Text('');
    _compView_7.create(_MaterialButtonComponent_7_6, [
      [_text_8]
    ]);
    _compView_0.create(_FocusTrapComponent_0_5, [
      <dynamic>[_el_1]..addAll(projectableNodes[0])..addAll([_el_2])
    ]);
    _el_0.addEventListener('keypress', eventHandler1(ctx.onKeyPress));
    _el_0.addEventListener('keydown', eventHandler1(ctx.onKeyDown));
    _el_0.addEventListener('keyup', eventHandler1(ctx.onKeyUp));
    final subscription_0 = _DateRangeEditorComponent_1_5.presetRangeSelected.listen(eventHandler1(ctx.onRangeClicked));
    final subscription_1 = _MaterialButtonComponent_5_6.trigger.listen(eventHandler1(_handle_trigger_5_0));
    final subscription_2 = _MaterialButtonComponent_7_6.trigger.listen(eventHandler1(_handle_trigger_7_0));
    init([_el_0], [subscription_0, subscription_1, subscription_2]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import40.DateRangeEditorComponent) && (1 == nodeIndex))) {
      return _DateRangeEditorComponent_1_5;
    }
    if ((identical(token, import42.AcxDarkTheme) && ((5 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _AcxDarkTheme_5_5;
    }
    if (((identical(token, import43.MaterialButtonComponent) || identical(token, import18.ButtonDirective)) && ((5 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialButtonComponent_5_6;
    }
    if ((identical(token, import42.AcxDarkTheme) && ((7 <= nodeIndex) && (nodeIndex <= 8)))) {
      return _AcxDarkTheme_7_5;
    }
    if (((identical(token, import43.MaterialButtonComponent) || identical(token, import18.ButtonDirective)) && ((7 <= nodeIndex) && (nodeIndex <= 8)))) {
      return _MaterialButtonComponent_7_6;
    }
    if ((identical(token, import38.FocusTrapComponent) && ((0 <= nodeIndex) && (nodeIndex <= 8)))) {
      return _FocusTrapComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDateRangePickerComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.model, null)) {
        (_DateRangeEditorComponent_1_5.model = _ctx.model);
      }
    }
    final currVal_2 = _ctx.supportsClearRange;
    if (!identical(_expr_2, currVal_2)) {
      _DateRangeEditorComponent_1_5.supportsClearRange = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.supportsCustomRange;
    if (!identical(_expr_3, currVal_3)) {
      _DateRangeEditorComponent_1_5.supportsCustomRange = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.relativeDaysToToday;
    if (!identical(_expr_4, currVal_4)) {
      _DateRangeEditorComponent_1_5.relativeDaysToToday = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.allowHighlightUpdates;
    if (!identical(_expr_5, currVal_5)) {
      _DateRangeEditorComponent_1_5.allowHighlightUpdates = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.supportsComparison;
    if (!identical(_expr_6, currVal_6)) {
      _DateRangeEditorComponent_1_5.supportsComparison = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.compact;
    if (!identical(_expr_7, currVal_7)) {
      _DateRangeEditorComponent_1_5.compact = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.supportsDaysInputs;
    if (!identical(_expr_8, currVal_8)) {
      _DateRangeEditorComponent_1_5.supportsDaysInputs = currVal_8;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.presets;
    if (!identical(_expr_9, currVal_9)) {
      _DateRangeEditorComponent_1_5.presets = currVal_9;
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.minDate;
    if (!identical(_expr_10, currVal_10)) {
      _DateRangeEditorComponent_1_5.minDate = currVal_10;
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.maxDate;
    if (!identical(_expr_11, currVal_11)) {
      _DateRangeEditorComponent_1_5.maxDate = currVal_11;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.isCalendarCreated;
    if (!identical(_expr_12, currVal_12)) {
      _DateRangeEditorComponent_1_5.isCalendarCreated = currVal_12;
      _expr_12 = currVal_12;
    }
    if (firstCheck) {
      _DateRangeEditorComponent_1_5.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_7.markAsCheckOnce();
    }
    final currVal_0 = _ctx.compact;
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'compact', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_1.detectHostChanges(firstCheck);
    final currVal_13 = _ctx.applyBarVisible;
    if (!identical(_expr_13, currVal_13)) {
      updateClass(_el_2, 'visible', currVal_13);
      _expr_13 = currVal_13;
    }
    _compView_5.detectHostChanges(firstCheck);
    final currVal_14 = (_ctx.cancelButtonMsg ?? '');
    if (!identical(_expr_14, currVal_14)) {
      _text_6.text = currVal_14;
      _expr_14 = currVal_14;
    }
    _compView_7.detectHostChanges(firstCheck);
    final currVal_15 = (_ctx.applyButtonMsg ?? '');
    if (!identical(_expr_15, currVal_15)) {
      _text_8.text = currVal_15;
      _expr_15 = currVal_15;
    }
    _compView_0.detectChanges();
    _compView_1.detectChanges();
    _compView_5.detectChanges();
    _compView_7.detectChanges();
    if (firstCheck) {
      _DateRangeEditorComponent_1_5.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_1?.destroy();
    _compView_5?.destroy();
    _compView_7?.destroy();
    _FocusTrapComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_5_0($event) {
    ctx.cancel();
    $event.preventDefault();
  }

  void _handle_trigger_7_0($event) {
    ctx.apply($event);
    $event.preventDefault();
  }
}

AppView<import2.MaterialDateRangePickerComponent> viewFactory_MaterialDateRangePickerComponent4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialDateRangePickerComponent4(parentView, parentIndex);
}

const List<dynamic> styles$MaterialDateRangePickerComponentHost = const [];

class _ViewMaterialDateRangePickerComponentHost0 extends AppView<dynamic> {
  ViewMaterialDateRangePickerComponent0 _compView_0;
  import2.MaterialDateRangePickerComponent _MaterialDateRangePickerComponent_0_5;
  _ViewMaterialDateRangePickerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialDateRangePickerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialDateRangePickerComponent_0_5 = new import2.MaterialDateRangePickerComponent(this.injectorGet(const import27.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null), this.injectorGet(import45.Clock, viewData.parentIndex), this.injectorGet(import19.DomService, viewData.parentIndex), this.injectorGet(import24.NgZone, viewData.parentIndex));
    _compView_0.create(_MaterialDateRangePickerComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialDateRangePickerComponent>(0, this, rootEl, _MaterialDateRangePickerComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.MaterialDateRangePickerComponent) || identical(token, import40.DateRangeEditorHost)) && (0 == nodeIndex))) {
      return _MaterialDateRangePickerComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _MaterialDateRangePickerComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialDateRangePickerComponent_0_5.ngOnDestroy();
  }
}

AppView viewFactory_MaterialDateRangePickerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialDateRangePickerComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialDateRangePickerComponent> MaterialDateRangePickerComponentNgFactory = const ComponentFactory<import2.MaterialDateRangePickerComponent>('material-date-range-picker', viewFactory_MaterialDateRangePickerComponentHost0, _MaterialDateRangePickerComponentMetadata);
const _MaterialDateRangePickerComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDateRangePickerComponent, MaterialDateRangePickerComponentNgFactory);
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
}
