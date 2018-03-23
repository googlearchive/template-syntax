// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'date_range_editor.dart';
export 'date_range_editor.dart';
import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:quiver/time.dart';
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/glyph/glyph.dart';
import 'package:angular_components/laminate/popup/popup.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_datepicker/calendar.dart';
import 'package:angular_components/material_datepicker/date_range_input.dart';
import 'package:angular_components/material_datepicker/material_calendar_picker.dart';
import 'package:angular_components/material_datepicker/material_month_picker.dart';
import 'package:angular_components/material_datepicker/module.dart';
import 'package:angular_components/material_datepicker/next_prev_buttons.dart';
import 'package:angular_components/material_datepicker/preset.dart';
import 'package:angular_components/material_datepicker/range.dart';
import 'package:angular_components/src/material_datepicker/comparison_range_editor.dart';
import 'package:angular_components/src/material_datepicker/date_range_editor_model.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/material_ripple/material_ripple.dart';
import 'package:angular_components/material_select/material_select.dart';
import 'package:angular_components/material_select/material_select_item.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/model/date/date.dart';
import 'package:angular_components/model/date/date_formatter.dart';
import 'package:angular_components/model/observable/observable.dart';
import 'package:angular_components/utils/angular/managed_zone/interface.dart';
import 'package:angular_components/utils/angular/properties/properties.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular_components/utils/showhide/showhide.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref3;
import 'package:angular_components/glyph/glyph.template.dart' as _ref4;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref5;
import 'package:angular_components/material_button/material_button.template.dart' as _ref6;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref7;
import 'package:angular_components/material_datepicker/date_range_input.template.dart' as _ref8;
import 'package:angular_components/material_datepicker/material_calendar_picker.template.dart' as _ref9;
import 'package:angular_components/material_datepicker/material_month_picker.template.dart' as _ref10;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref11;
import 'package:angular_components/material_datepicker/next_prev_buttons.template.dart' as _ref12;
import 'package:angular_components/material_datepicker/preset.template.dart' as _ref13;
import 'package:angular_components/material_datepicker/range.template.dart' as _ref14;
import 'package:angular_components/material_input/material_input.template.dart' as _ref15;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref16;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref17;
import 'package:angular_components/material_select/material_select.template.dart' as _ref18;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref19;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref20;
import 'package:angular_components/model/date/date.template.dart' as _ref21;
import 'package:angular_components/model/date/date_formatter.template.dart' as _ref22;
import 'package:angular_components/model/observable/observable.template.dart' as _ref23;
import 'package:angular_components/src/material_datepicker/comparison_range_editor.template.dart' as _ref24;
import 'package:angular_components/src/material_datepicker/date_range_editor_model.template.dart' as _ref25;
import 'package:angular_components/src/material_datepicker/date_range_editor_model.template.dart' as _ref26;
import 'package:angular_components/utils/angular/managed_zone/interface.template.dart' as _ref27;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref28;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref29;
import 'package:angular_components/utils/showhide/showhide.template.dart' as _ref30;
import 'package:angular_components/material_datepicker/date_range_editor.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'date_range_editor.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../material_select/material_select.template.dart' as import12;
import '../material_select/material_select.dart' as import13;
import 'package:angular/src/common/directives/ng_for.dart' as import14;
import '../model/ui/has_renderer.dart' as import15;
import '../model/selection/selection_container.dart' as import16;
import '../material_select/material_select_item.template.dart' as import17;
import '../material_select/material_select_item.dart' as import18;
import '../utils/browser/dom_service/dom_service.dart' as import19;
import '../mixins/material_dropdown_base.dart' as import20;
import '../material_select/activation_handler.dart' as import21;
import '../glyph/glyph.template.dart' as import22;
import '../button_decorator/button_decorator.template.dart' as import23;
import '../glyph/glyph.dart' as import24;
import '../button_decorator/button_decorator.dart' as import25;
import '../src/material_tooltip/tooltip.dart' as import26;
import '../material_tooltip/module.dart' as import27;
import '../src/material_tooltip/tooltip_controller.dart' as import28;
import '../utils/disposer/disposer.dart' as import29;
import '../src/laminate/popup/dom_popup_source.dart' as import30;
import 'preset.dart' as import31;
import '../material_button/material_button.template.dart' as import32;
import '../theme/dark_theme.dart' as import33;
import '../material_button/material_button.dart' as import34;
import '../src/laminate/popup/popup_source_directive.dart' as import35;
import '../material_popup/material_popup.template.dart' as import36;
import '../material_popup/material_popup.dart' as import37;
import 'package:angular/src/core/di/opaque_token.dart' as import38;
import '../utils/angular/reference/reference.dart' as import39;
import '../src/laminate/popup/popup_hierarchy.dart' as import40;
import 'package:angular/src/core/zone/ng_zone.dart' as import41;
import '../src/laminate/overlay/overlay_service.dart' as import42;
import '../laminate/overlay/zindexer.dart' as import43;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import45;
import '../src/laminate/popup/popup_size_provider.dart' as import46;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import48;
import '../src/laminate/popup/popup_ref.dart' as import49;
import '../material_input/material_input.template.dart' as import50;
import '../material_input/deferred_validator.dart' as import51;
import 'package:angular_forms/src/directives/ng_model.dart' as import52;
import '../material_input/material_input.dart' as import53;
import '../material_input/material_input_default_value_accessor.dart' as import54;
import 'package:angular_forms/src/directives/ng_control.dart' as import55;
import '../focus/focus.dart' as import56;
import '../material_input/base_material_input.dart' as import57;
import '../src/material_datepicker/comparison_range_editor.template.dart' as import58;
import '../src/material_datepicker/comparison_range_editor.dart' as import59;
import 'date_range_input.template.dart' as import60;
import 'date_range_input.dart' as import61;
import '../focus/keyboard_only_focus_indicator.dart' as import62;
import 'next_prev_buttons.template.dart' as import63;
import 'next_prev_buttons.dart' as import64;
import 'material_calendar_picker.template.dart' as import65;
import 'material_calendar_picker.dart' as import66;
import '../utils/showhide/showhide.dart' as import67;
import 'package:quiver/time.dart' as import68;
import 'material_month_picker.template.dart' as import69;
import 'material_month_picker.dart' as import70;
import '../src/utils/angular/managed_zone/managed_zone.dart' as import71;

const List<dynamic> styles$DateRangeEditorComponent = const [import0.styles];

class ViewDateRangeEditorComponent0 extends AppView<import2.DateRangeEditorComponent> {
  bool _query_MaterialCalendarPickerComponent_1_0_isDirty = true;
  bool _query_MaterialMonthPickerComponent_1_1_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  bool _expr_2;
  static RenderComponentType _renderType;
  ViewDateRangeEditorComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import8.document.createElement('date-range-editor');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$DateRangeEditorComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = new TemplateRef(_appEl_0, viewFactory_DateRangeEditorComponent1);
    _NgIf_0_9 = new NgIf(_appEl_0, _TemplateRef_0_8);
    var _anchor_1 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_DateRangeEditorComponent11);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.presets.isNotEmpty && _ctx.shouldShowPredefinedList);
    _NgIf_1_9.ngIf = (_ctx.supportsCustomRange && _ctx.shouldShowCustomDateRangeColumn);
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    if (_query_MaterialCalendarPickerComponent_1_0_isDirty) {
      ctx.calendarPicker = (_appEl_1.mapNestedViews((_ViewDateRangeEditorComponent11 nestedView) {
        return nestedView._appEl_10.mapNestedViews((_ViewDateRangeEditorComponent18 nestedView) {
          return [nestedView._MaterialCalendarPickerComponent_0_5];
        });
      }).isNotEmpty
          ? _appEl_1.mapNestedViews((_ViewDateRangeEditorComponent11 nestedView) {
              return nestedView._appEl_10.mapNestedViews((_ViewDateRangeEditorComponent18 nestedView) {
                return [nestedView._MaterialCalendarPickerComponent_0_5];
              });
            }).first
          : null);
      _query_MaterialCalendarPickerComponent_1_0_isDirty = false;
    }
    if (_query_MaterialMonthPickerComponent_1_1_isDirty) {
      ctx.monthSelector = (_appEl_1.mapNestedViews((_ViewDateRangeEditorComponent11 nestedView) {
        return nestedView._appEl_11.mapNestedViews((_ViewDateRangeEditorComponent19 nestedView) {
          return [nestedView._MaterialMonthPickerComponent_0_5];
        });
      }).isNotEmpty
          ? _appEl_1.mapNestedViews((_ViewDateRangeEditorComponent11 nestedView) {
              return nestedView._appEl_11.mapNestedViews((_ViewDateRangeEditorComponent19 nestedView) {
                return [nestedView._MaterialMonthPickerComponent_0_5];
              });
            }).first
          : null);
      _query_MaterialMonthPickerComponent_1_1_isDirty = false;
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_1?.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_2 = ctx.compact;
    if (!identical(_expr_2, currVal_2)) {
      updateElemClass(rootEl, 'compact', currVal_2);
      _expr_2 = currVal_2;
    }
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewDateRangeEditorComponent0(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent1 extends AppView<import2.DateRangeEditorComponent> {
  import8.Element _el_0;
  import12.ViewMaterialSelectComponent0 _compView_0;
  import13.MaterialSelectComponent _MaterialSelectComponent_0_5;
  bool _query_SelectionItem_0_0_isDirty = true;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  import8.DivElement _el_3;
  ViewContainer _appEl_4;
  import14.NgFor _NgFor_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  bool _expr_0;
  var _expr_4;
  _ViewDateRangeEditorComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = new import12.ViewMaterialSelectComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'preset-list';
    addShimC(_el_0);
    _MaterialSelectComponent_0_5 = new import13.MaterialSelectComponent();
    var _anchor_1 = ngAnchor.clone(false);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_DateRangeEditorComponent2);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    var _anchor_2 = ngAnchor.clone(false);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_DateRangeEditorComponent3);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    var doc = import8.document;
    _el_3 = doc.createElement('div');
    _el_3.className = 'group';
    addShimC(_el_3);
    var _anchor_4 = ngAnchor.clone(false);
    _el_3.append(_anchor_4);
    _appEl_4 = new ViewContainer(4, 3, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = new TemplateRef(_appEl_4, viewFactory_DateRangeEditorComponent6);
    _NgFor_4_9 = new import14.NgFor(_appEl_4, _TemplateRef_4_8);
    var _anchor_5 = ngAnchor.clone(false);
    _appEl_5 = new ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = new TemplateRef(_appEl_5, viewFactory_DateRangeEditorComponent9);
    _NgIf_5_9 = new NgIf(_appEl_5, _TemplateRef_5_8);
    var _anchor_6 = ngAnchor.clone(false);
    _appEl_6 = new ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = new TemplateRef(_appEl_6, viewFactory_DateRangeEditorComponent10);
    _NgIf_6_9 = new NgIf(_appEl_6, _TemplateRef_6_8);
    _compView_0.create(_MaterialSelectComponent_0_5, [
      [_appEl_1, _appEl_2, _el_3, _appEl_5, _appEl_6]
    ]);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import13.MaterialSelectComponent) || identical(token, import15.HasRenderer)) || identical(token, import16.SelectionContainer)) && ((0 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialSelectComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_MaterialSelectComponent_0_5.width = 0);
    }
    _NgIf_1_9.ngIf = _ctx.supportsClearRange;
    _NgIf_2_9.ngIf = _ctx.supportsCustomRange;
    final currVal_4 = _ctx.presets;
    if (!identical(_expr_4, currVal_4)) {
      _NgFor_4_9.ngForOf = currVal_4;
      _expr_4 = currVal_4;
    }
    _NgFor_4_9.ngDoCheck();
    _NgIf_5_9.ngIf = _ctx.supportsDaysInputs;
    _NgIf_6_9.ngIf = _ctx.supportsComparison;
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    if (_query_SelectionItem_0_0_isDirty) {
      _MaterialSelectComponent_0_5.selectItems = import9.flattenNodes([
        _appEl_1.mapNestedViews((_ViewDateRangeEditorComponent2 nestedView) {
          return [nestedView._SelectionItem_1_6];
        }),
        _appEl_2.mapNestedViews((_ViewDateRangeEditorComponent3 nestedView) {
          return [nestedView._SelectionItem_1_6];
        }),
        _appEl_4.mapNestedViews((_ViewDateRangeEditorComponent6 nestedView) {
          return import9.flattenNodes([
            [nestedView._SelectionItem_0_10],
            nestedView._appEl_2.mapNestedViews((_ViewDateRangeEditorComponent7 nestedView) {
              return nestedView._appEl_3.mapNestedViews((_ViewDateRangeEditorComponent8 nestedView) {
                return [nestedView._SelectionItem_0_10];
              });
            })
          ]);
        }),
        _appEl_5.mapNestedViews((_ViewDateRangeEditorComponent9 nestedView) {
          return [nestedView._SelectionItem_1_6, nestedView._SelectionItem_5_6];
        })
      ]);
      _query_SelectionItem_0_0_isDirty = false;
    }
    final currVal_0 = _ctx.isBasic;
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'basic-preset-list', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _appEl_4?.destroyNestedViews();
    _appEl_5?.destroyNestedViews();
    _appEl_6?.destroyNestedViews();
    _compView_0?.destroy();
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent1(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent2 extends AppView<import2.DateRangeEditorComponent> {
  import8.DivElement _el_0;
  import8.Element _el_1;
  import17.ViewMaterialSelectItemComponent0 _compView_1;
  import18.MaterialSelectItemComponent _MaterialSelectItemComponent_1_5;
  import18.MaterialSelectItemComponent _SelectionItem_1_6;
  import8.Text _text_2;
  var _expr_0;
  _ViewDateRangeEditorComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'group';
    addShimC(_el_0);
    _compView_1 = new import17.ViewMaterialSelectItemComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _MaterialSelectItemComponent_1_5 = new import18.MaterialSelectItemComponent(_el_1, parentView.parentView.injectorGet(import19.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import20.DropdownHandle, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import21.ActivationHandler, parentView.viewData.parentIndex, null), _compView_1.ref);
    _SelectionItem_1_6 = _MaterialSelectItemComponent_1_5;
    _text_2 = new import8.Text('');
    _compView_1.create(_MaterialSelectItemComponent_1_5, [
      [_text_2]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_1_5.trigger.listen(eventHandler1(ctx.onClearRangeClicked));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import18.MaterialSelectItemComponent) || identical(token, import15.HasRenderer)) && ((1 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _MaterialSelectItemComponent_1_5;
    }
    if ((identical(token, import16.SelectionItem) && ((1 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _SelectionItem_1_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    _compView_1.detectHostChanges(firstCheck);
    final currVal_0 = (_ctx.clearRangeMsg ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_1.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as _ViewDateRangeEditorComponent1)._query_SelectionItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
    _MaterialSelectItemComponent_1_5.ngOnDestroy();
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent2(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent3 extends AppView<import2.DateRangeEditorComponent> {
  import8.DivElement _el_0;
  import8.Element _el_1;
  import17.ViewMaterialSelectItemComponent0 _compView_1;
  import18.MaterialSelectItemComponent _MaterialSelectItemComponent_1_5;
  import18.MaterialSelectItemComponent _SelectionItem_1_6;
  import8.DivElement _el_2;
  import8.Text _text_3;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  var _expr_0;
  bool _expr_2;
  bool _expr_3;
  var _expr_4;
  _ViewDateRangeEditorComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'group';
    addShimC(_el_0);
    _compView_1 = new import17.ViewMaterialSelectItemComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'closeOnActivate', 'false');
    addShimC(_el_1);
    _MaterialSelectItemComponent_1_5 = new import18.MaterialSelectItemComponent(_el_1, parentView.parentView.injectorGet(import19.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import20.DropdownHandle, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import21.ActivationHandler, parentView.viewData.parentIndex, null), _compView_1.ref);
    _SelectionItem_1_6 = _MaterialSelectItemComponent_1_5;
    _el_2 = doc.createElement('div');
    addShimC(_el_2);
    _text_3 = new import8.Text('');
    _el_2.append(_text_3);
    var _anchor_4 = ngAnchor.clone(false);
    _el_2.append(_anchor_4);
    _appEl_4 = new ViewContainer(4, 2, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = new TemplateRef(_appEl_4, viewFactory_DateRangeEditorComponent4);
    _NgIf_4_9 = new NgIf(_appEl_4, _TemplateRef_4_8);
    var _anchor_5 = ngAnchor.clone(false);
    _appEl_5 = new ViewContainer(5, 1, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = new TemplateRef(_appEl_5, viewFactory_DateRangeEditorComponent5);
    _NgIf_5_9 = new NgIf(_appEl_5, _TemplateRef_5_8);
    _compView_1.create(_MaterialSelectItemComponent_1_5, [
      [_el_2, _appEl_5]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_1_5.trigger.listen(eventHandler0(ctx.onCustomClicked));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import18.MaterialSelectItemComponent) || identical(token, import15.HasRenderer)) && ((1 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _MaterialSelectItemComponent_1_5;
    }
    if ((identical(token, import16.SelectionItem) && ((1 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _SelectionItem_1_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_MaterialSelectItemComponent_1_5.closeOnActivate = 'false');
    }
    final currVal_0 = _ctx.isCustomRangeSelected;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_1_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgIf_4_9.ngIf = (_ctx.isBasic && _ctx.isCustomRangeSelected);
    _NgIf_5_9.ngIf = _ctx.isBasic;
    _appEl_4.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _compView_1.detectHostChanges(firstCheck);
    final currVal_2 = (_ctx.isBasic && !_ctx.isCustomRangeSelected);
    if (!identical(_expr_2, currVal_2)) {
      updateClass(_el_2, 'custom-tab-left', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = (_ctx.isBasic && _ctx.isCustomRangeSelected);
    if (!identical(_expr_3, currVal_3)) {
      updateClass(_el_2, 'custom_tab-left-selected', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = (_ctx.customRangeMsg ?? '');
    if (!identical(_expr_4, currVal_4)) {
      _text_3.text = currVal_4;
      _expr_4 = currVal_4;
    }
    _compView_1.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as _ViewDateRangeEditorComponent1)._query_SelectionItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_4?.destroyNestedViews();
    _appEl_5?.destroyNestedViews();
    _compView_1?.destroy();
    _MaterialSelectItemComponent_1_5.ngOnDestroy();
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent3(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent4 extends AppView<import2.DateRangeEditorComponent> {
  import8.DivElement _el_0;
  import8.Text _text_1;
  var _expr_0;
  _ViewDateRangeEditorComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'custom_range_desc';
    addShimC(_el_0);
    _text_1 = new import8.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    final currVal_0 = (_ctx.customRangeDescription ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent4(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent5 extends AppView<import2.DateRangeEditorComponent> {
  import8.Element _el_0;
  import22.ViewGlyphComponent0 _compView_0;
  import23.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import24.GlyphComponent _GlyphComponent_0_6;
  _ViewDateRangeEditorComponent5(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = new import22.ViewGlyphComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'expend-more';
    createAttr(_el_0, 'icon', 'expand_more');
    createAttr(_el_0, 'role', 'button');
    addShimC(_el_0);
    _ButtonDirective_0_5 = new import23.ButtonDirectiveNgCd(new import25.ButtonDirective(_el_0));
    _GlyphComponent_0_6 = new import24.GlyphComponent(_el_0);
    _compView_0.create(_GlyphComponent_0_6, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import25.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _GlyphComponent_0_6.icon = 'expand_more';
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent5(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent5(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent6 extends AppView<import2.DateRangeEditorComponent> {
  import8.Element _el_0;
  import17.ViewMaterialSelectItemComponent0 _compView_0;
  ViewContainer _appEl_0;
  import18.MaterialSelectItemComponent _MaterialSelectItemComponent_0_8;
  import26.MaterialTooltipDirective _MaterialTooltipDirective_0_9;
  import18.MaterialSelectItemComponent _SelectionItem_0_10;
  dynamic __TooltipController_0_11;
  import8.Text _text_1;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  bool _expr_0;
  var _expr_1;
  String _expr_3;
  bool _expr_4;
  var _expr_5;
  _ViewDateRangeEditorComponent6(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  dynamic get _TooltipController_0_11 {
    if ((this.__TooltipController_0_11 == null)) {
      (__TooltipController_0_11 = import27.createTooltipController(this.parentView.parentView.injectorGet(import28.TooltipController, this.parentView.viewData.parentIndex, null), this.parentView.parentView.injectorGet(import29.Disposer, this.parentView.viewData.parentIndex, null)));
    }
    return this.__TooltipController_0_11;
  }

  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = new import17.ViewMaterialSelectItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'closeOnActivate', 'false');
    addShimC(_el_0);
    _appEl_0 = new ViewContainer(0, null, this, _el_0);
    _MaterialSelectItemComponent_0_8 = new import18.MaterialSelectItemComponent(_el_0, parentView.parentView.injectorGet(import19.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import20.DropdownHandle, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import21.ActivationHandler, parentView.viewData.parentIndex, null), _compView_0.ref);
    _MaterialTooltipDirective_0_9 = new import26.MaterialTooltipDirective(parentView.parentView.injectorGet(import30.DomPopupSourceFactory, parentView.viewData.parentIndex), _appEl_0, _el_0, _appEl_0, _compView_0.ref, parentView.parentView.injectorGet(import8.Window, parentView.viewData.parentIndex));
    _SelectionItem_0_10 = _MaterialSelectItemComponent_0_8;
    _text_1 = new import8.Text('');
    var _anchor_2 = ngAnchor.clone(false);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_DateRangeEditorComponent7);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    _compView_0.create(_MaterialSelectItemComponent_0_8, [
      [_text_1, _appEl_2]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_0_8.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_appEl_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import18.MaterialSelectItemComponent) || identical(token, import15.HasRenderer)) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _MaterialSelectItemComponent_0_8;
    }
    if ((identical(token, import16.SelectionItem) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _SelectionItem_0_10;
    }
    if ((identical(token, import28.TooltipController) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _TooltipController_0_11;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final import31.DatepickerPreset local_preset = locals['\$implicit'];
    if (firstCheck) {
      (_MaterialSelectItemComponent_0_8.closeOnActivate = 'false');
    }
    final bool currVal_0 = !_ctx.isValid(local_preset);
    if (!identical(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_8.disabled = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelected(local_preset.range);
    if (!identical(_expr_1, currVal_1)) {
      _MaterialSelectItemComponent_0_8.selected = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_3 = _ctx.rangeDisabledTooltip;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialTooltipDirective_0_9.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final bool currVal_4 = !_ctx.isValid(local_preset);
    if (!identical(_expr_4, currVal_4)) {
      _MaterialTooltipDirective_0_9.canShow = currVal_4;
      _expr_4 = currVal_4;
    }
    if (firstCheck) {
      _MaterialTooltipDirective_0_9.ngOnInit();
    }
    _NgIf_2_9.ngIf = ((local_preset.alternatives != null) && local_preset.alternatives.isNotEmpty);
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    final currVal_5 = import9.interpolate0(local_preset.title);
    if (!identical(_expr_5, currVal_5)) {
      _text_1.text = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialTooltipDirective_0_9.ngAfterViewInit();
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as _ViewDateRangeEditorComponent1)._query_SelectionItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _compView_0?.destroy();
    _MaterialSelectItemComponent_0_8.ngOnDestroy();
    _MaterialTooltipDirective_0_9.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final import31.DatepickerPreset local_preset = locals['\$implicit'];
    ctx.onRangeClicked($event, local_preset.range);
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent6(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent6(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent7 extends AppView<import2.DateRangeEditorComponent> {
  import8.Element _el_0;
  import32.ViewMaterialButtonComponent0 _compView_0;
  import33.AcxDarkTheme _AcxDarkTheme_0_5;
  import34.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import35.PopupSourceDirective _PopupSourceDirective_0_7;
  import8.Element _el_1;
  import22.ViewGlyphComponent0 _compView_1;
  import24.GlyphComponent _GlyphComponent_1_5;
  import8.Element _el_2;
  import36.ViewMaterialPopupComponent0 _compView_2;
  ViewContainer _appEl_2;
  import37.MaterialPopupComponent _MaterialPopupComponent_2_8;
  dynamic __PopupHierarchy_2_11;
  dynamic __PopupRef_2_12;
  ViewContainer _appEl_3;
  import14.NgFor _NgFor_3_9;
  var _expr_5;
  var _expr_6;
  _ViewDateRangeEditorComponent7(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  dynamic get _PopupHierarchy_2_11 {
    if ((this.__PopupHierarchy_2_11 == null)) {
      (__PopupHierarchy_2_11 = import37.getHierarchy(this._MaterialPopupComponent_2_8));
    }
    return this.__PopupHierarchy_2_11;
  }

  dynamic get _PopupRef_2_12 {
    if ((this.__PopupRef_2_12 == null)) {
      (__PopupRef_2_12 = import37.getResolvedPopupRef(this._MaterialPopupComponent_2_8));
    }
    return this.__PopupRef_2_12;
  }

  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = new import32.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'alignPositionX', 'after');
    createAttr(_el_0, 'alignPositionY', 'start');
    _el_0.className = 'preset-dropdown-button';
    createAttr(_el_0, 'icon', '');
    createAttr(_el_0, 'popupSource', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = new import33.AcxDarkTheme(parentView.parentView.parentView.injectorGet(const import38.OpaqueToken('acxDarkTheme'), parentView.parentView.viewData.parentIndex, null));
    _MaterialButtonComponent_0_6 = new import34.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref);
    _PopupSourceDirective_0_7 = new import35.PopupSourceDirective(parentView.parentView.parentView.injectorGet(import30.DomPopupSourceFactory, parentView.parentView.viewData.parentIndex), _el_0, parentView.parentView.parentView.injectorGet(import39.ReferenceDirective, parentView.parentView.viewData.parentIndex, null));
    _compView_1 = new import22.ViewGlyphComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    createAttr(_el_1, 'icon', 'arrow_drop_down');
    addShimC(_el_1);
    _GlyphComponent_1_5 = new import24.GlyphComponent(_el_1);
    _compView_1.create(_GlyphComponent_1_5, []);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    _compView_2 = new import36.ViewMaterialPopupComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    addShimC(_el_2);
    _appEl_2 = new ViewContainer(2, null, this, _el_2);
    _MaterialPopupComponent_2_8 = new import37.MaterialPopupComponent(parentView.parentView.parentView.injectorGet(import40.PopupHierarchy, parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.injectorGet(import37.MaterialPopupComponent, parentView.parentView.viewData.parentIndex, null), null, parentView.parentView.parentView.injectorGet(import41.NgZone, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(import42.OverlayService, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(import43.ZIndexer, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(const import38.OpaqueToken<List<import45.RelativePosition>>('defaultPopupPositions'), parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(const import38.OpaqueToken('overlayRepositionLoop'), parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(import46.PopupSizeProvider, parentView.parentView.viewData.parentIndex, null), _compView_2.ref, _appEl_2, new ElementRef(_el_2));
    var _anchor_3 = ngAnchor.clone(false);
    _appEl_3 = new ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_DateRangeEditorComponent8);
    _NgFor_3_9 = new import14.NgFor(_appEl_3, _TemplateRef_3_8);
    _compView_2.create(_MaterialPopupComponent_2_8, [
      const [],
      [_appEl_3],
      const []
    ]);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    _el_0.addEventListener('keypress', eventHandler1(_handle_keypress_0_1));
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_2));
    init([_el_0, _appEl_2], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import33.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_5;
    }
    if (((identical(token, import34.MaterialButtonComponent) || identical(token, import25.ButtonDirective)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_6;
    }
    if ((identical(token, import35.PopupSourceDirective) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _PopupSourceDirective_0_7;
    }
    if ((((identical(token, import37.MaterialPopupComponent) || identical(token, import20.DropdownHandle)) || identical(token, import48.DeferredContentAware)) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialPopupComponent_2_8;
    }
    if ((identical(token, import40.PopupHierarchy) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupHierarchy_2_11;
    }
    if ((identical(token, import49.PopupRef) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupRef_2_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import35.PopupSourceDirective local_menuSource = _PopupSourceDirective_0_7;
    final import31.DatepickerPreset local_preset = parentView.locals['\$implicit'];
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      _PopupSourceDirective_0_7.alignX = 'after';
      _PopupSourceDirective_0_7.alignY = 'start';
    }
    changed = false;
    if (firstCheck) {
      _GlyphComponent_1_5.icon = 'arrow_drop_down';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if (firstCheck) {
      _MaterialPopupComponent_2_8.offsetX = 9;
      if (!identical((0 - 4), null)) {
        (_MaterialPopupComponent_2_8.offsetY = (0 - 4));
      }
    }
    final currVal_5 = local_menuSource;
    if (!identical(_expr_5, currVal_5)) {
      _MaterialPopupComponent_2_8.source = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = local_preset.alternatives;
    if (!identical(_expr_6, currVal_6)) {
      _NgFor_3_9.ngForOf = currVal_6;
      _expr_6 = currVal_6;
    }
    _NgFor_3_9.ngDoCheck();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_2.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
    _compView_2.detectChanges();
    if (firstCheck) {
      _PopupSourceDirective_0_7.ngAfterViewInit();
    }
    if (firstCheck) {
      _MaterialPopupComponent_2_8.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
    _compView_0?.destroy();
    _compView_1?.destroy();
    _compView_2?.destroy();
    _PopupSourceDirective_0_7.ngOnDestroy();
    _MaterialPopupComponent_2_8.ngOnDestroy();
  }

  void _handle_click_0_0($event) {
    $event.stopPropagation();
  }

  void _handle_keypress_0_1($event) {
    $event.stopPropagation();
  }

  void _handle_trigger_0_2($event) {
    final import37.MaterialPopupComponent local_popup = _MaterialPopupComponent_2_8;
    local_popup.toggle();
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent7(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent7(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent8 extends AppView<import2.DateRangeEditorComponent> {
  import8.Element _el_0;
  import17.ViewMaterialSelectItemComponent0 _compView_0;
  ViewContainer _appEl_0;
  import18.MaterialSelectItemComponent _MaterialSelectItemComponent_0_8;
  import26.MaterialTooltipDirective _MaterialTooltipDirective_0_9;
  import18.MaterialSelectItemComponent _SelectionItem_0_10;
  dynamic __TooltipController_0_12;
  import8.Text _text_1;
  bool _expr_0;
  var _expr_1;
  String _expr_3;
  bool _expr_4;
  var _expr_5;
  _ViewDateRangeEditorComponent8(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  dynamic get _TooltipController_0_12 {
    if ((this.__TooltipController_0_12 == null)) {
      (__TooltipController_0_12 = import27.createTooltipController((this.parentView.parentView as _ViewDateRangeEditorComponent6)._TooltipController_0_11, this.parentView.parentView.parentView.parentView.injectorGet(import29.Disposer, this.parentView.parentView.parentView.viewData.parentIndex, null)));
    }
    return this.__TooltipController_0_12;
  }

  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = new import17.ViewMaterialSelectItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'preset-dropdown-item item';
    createAttr(_el_0, 'closeOnActivate', 'false');
    addShimC(_el_0);
    _appEl_0 = new ViewContainer(0, null, this, _el_0);
    _MaterialSelectItemComponent_0_8 = new import18.MaterialSelectItemComponent(_el_0, parentView.parentView.parentView.parentView.injectorGet(import19.DomService, parentView.parentView.parentView.viewData.parentIndex), (parentView as _ViewDateRangeEditorComponent7)._MaterialPopupComponent_2_8, parentView.parentView.parentView.parentView.injectorGet(import21.ActivationHandler, parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref);
    _MaterialTooltipDirective_0_9 = new import26.MaterialTooltipDirective(parentView.parentView.parentView.parentView.injectorGet(import30.DomPopupSourceFactory, parentView.parentView.parentView.viewData.parentIndex), _appEl_0, _el_0, _appEl_0, _compView_0.ref, parentView.parentView.parentView.parentView.injectorGet(import8.Window, parentView.parentView.parentView.viewData.parentIndex));
    _SelectionItem_0_10 = _MaterialSelectItemComponent_0_8;
    _text_1 = new import8.Text('');
    _compView_0.create(_MaterialSelectItemComponent_0_8, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_0_8.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_appEl_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import18.MaterialSelectItemComponent) || identical(token, import15.HasRenderer)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialSelectItemComponent_0_8;
    }
    if ((identical(token, import16.SelectionItem) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _SelectionItem_0_10;
    }
    if ((identical(token, import28.TooltipController) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _TooltipController_0_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_alternative = locals['\$implicit'];
    if (firstCheck) {
      (_MaterialSelectItemComponent_0_8.closeOnActivate = 'false');
    }
    final bool currVal_0 = !_ctx.isValid(local_alternative);
    if (!identical(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_8.disabled = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isAlternativePresetSelected(local_alternative);
    if (!identical(_expr_1, currVal_1)) {
      _MaterialSelectItemComponent_0_8.selected = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_3 = _ctx.rangeDisabledTooltip;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialTooltipDirective_0_9.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final bool currVal_4 = !_ctx.isValid(local_alternative);
    if (!identical(_expr_4, currVal_4)) {
      _MaterialTooltipDirective_0_9.canShow = currVal_4;
      _expr_4 = currVal_4;
    }
    if (firstCheck) {
      _MaterialTooltipDirective_0_9.ngOnInit();
    }
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    final currVal_5 = import9.interpolate0(local_alternative.shortTitle);
    if (!identical(_expr_5, currVal_5)) {
      _text_1.text = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialTooltipDirective_0_9.ngAfterViewInit();
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView.parentView.parentView as _ViewDateRangeEditorComponent1)._query_SelectionItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _compView_0?.destroy();
    _MaterialSelectItemComponent_0_8.ngOnDestroy();
    _MaterialTooltipDirective_0_9.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final import31.DatepickerPreset local_preset = parentView.parentView.locals['\$implicit'];
    final local_alternative = locals['\$implicit'];
    ctx.onAlternativePresetClicked($event, local_preset, local_alternative);
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent8(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent8(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent9 extends AppView<import2.DateRangeEditorComponent> {
  import8.DivElement _el_0;
  import8.Element _el_1;
  import17.ViewMaterialSelectItemComponent0 _compView_1;
  import18.MaterialSelectItemComponent _MaterialSelectItemComponent_1_5;
  import18.MaterialSelectItemComponent _SelectionItem_1_6;
  import8.Element _el_2;
  import50.ViewMaterialInputComponent0 _compView_2;
  import51.DeferredValidator _DeferredValidator_2_5;
  List<dynamic> _NgValidators_2_6;
  import52.NgModel _NgModel_2_7;
  import52.NgModel _NgControl_2_8;
  import53.MaterialInputComponent _MaterialInputComponent_2_9;
  import53.MaterialInputComponent _BaseMaterialInput_2_10;
  import54.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_2_11;
  import8.Element _el_3;
  import8.Text _text_4;
  import8.Element _el_5;
  import17.ViewMaterialSelectItemComponent0 _compView_5;
  import18.MaterialSelectItemComponent _MaterialSelectItemComponent_5_5;
  import18.MaterialSelectItemComponent _SelectionItem_5_6;
  import8.Element _el_6;
  import50.ViewMaterialInputComponent0 _compView_6;
  import51.DeferredValidator _DeferredValidator_6_5;
  List<dynamic> _NgValidators_6_6;
  import52.NgModel _NgModel_6_7;
  import52.NgModel _NgControl_6_8;
  import53.MaterialInputComponent _MaterialInputComponent_6_9;
  import53.MaterialInputComponent _BaseMaterialInput_6_10;
  import54.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_6_11;
  import8.Element _el_7;
  import8.Text _text_8;
  var _expr_0;
  int _expr_3;
  var _expr_5;
  var _expr_6;
  int _expr_9;
  var _expr_11;
  _ViewDateRangeEditorComponent9(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'days group';
    addShimC(_el_0);
    _compView_1 = new import17.ViewMaterialSelectItemComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    _el_1.className = 'days-input days-to-today item';
    createAttr(_el_1, 'closeOnActivate', 'false');
    addShimC(_el_1);
    _MaterialSelectItemComponent_1_5 = new import18.MaterialSelectItemComponent(_el_1, parentView.parentView.injectorGet(import19.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import20.DropdownHandle, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import21.ActivationHandler, parentView.viewData.parentIndex, null), _compView_1.ref);
    _SelectionItem_1_6 = _MaterialSelectItemComponent_1_5;
    _compView_2 = new import50.ViewMaterialInputComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    addShimC(_el_2);
    _DeferredValidator_2_5 = new import51.DeferredValidator();
    _NgValidators_2_6 = [_DeferredValidator_2_5];
    _NgModel_2_7 = new import52.NgModel(_NgValidators_2_6, null);
    _NgControl_2_8 = _NgModel_2_7;
    _MaterialInputComponent_2_9 = new import53.MaterialInputComponent(null, null, _NgControl_2_8, _compView_2.ref, _DeferredValidator_2_5);
    _BaseMaterialInput_2_10 = _MaterialInputComponent_2_9;
    _MaterialInputDefaultValueAccessor_2_11 = new import54.MaterialInputDefaultValueAccessor(_BaseMaterialInput_2_10, _NgControl_2_8);
    _compView_2.create(_MaterialInputComponent_2_9, [const []]);
    _el_3 = doc.createElement('span');
    addShimE(_el_3);
    _text_4 = new import8.Text('');
    _el_3.append(_text_4);
    _compView_1.create(_MaterialSelectItemComponent_1_5, [
      [_el_2, _el_3]
    ]);
    _compView_5 = new import17.ViewMaterialSelectItemComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    _el_0.append(_el_5);
    _el_5.className = 'days-input days-to-yesterday item';
    createAttr(_el_5, 'closeOnActivate', 'false');
    addShimC(_el_5);
    _MaterialSelectItemComponent_5_5 = new import18.MaterialSelectItemComponent(_el_5, parentView.parentView.injectorGet(import19.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import20.DropdownHandle, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import21.ActivationHandler, parentView.viewData.parentIndex, null), _compView_5.ref);
    _SelectionItem_5_6 = _MaterialSelectItemComponent_5_5;
    _compView_6 = new import50.ViewMaterialInputComponent0(this, 6);
    _el_6 = _compView_6.rootEl;
    addShimC(_el_6);
    _DeferredValidator_6_5 = new import51.DeferredValidator();
    _NgValidators_6_6 = [_DeferredValidator_6_5];
    _NgModel_6_7 = new import52.NgModel(_NgValidators_6_6, null);
    _NgControl_6_8 = _NgModel_6_7;
    _MaterialInputComponent_6_9 = new import53.MaterialInputComponent(null, null, _NgControl_6_8, _compView_6.ref, _DeferredValidator_6_5);
    _BaseMaterialInput_6_10 = _MaterialInputComponent_6_9;
    _MaterialInputDefaultValueAccessor_6_11 = new import54.MaterialInputDefaultValueAccessor(_BaseMaterialInput_6_10, _NgControl_6_8);
    _compView_6.create(_MaterialInputComponent_6_9, [const []]);
    _el_7 = doc.createElement('span');
    addShimE(_el_7);
    _text_8 = new import8.Text('');
    _el_7.append(_text_8);
    _compView_5.create(_MaterialSelectItemComponent_5_5, [
      [_el_6, _el_7]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_1_5.trigger.listen(eventHandler1(_handle_trigger_1_0));
    _el_2.addEventListener('click', eventHandler1(_handle_click_2_0));
    final subscription_1 = _NgModel_2_7.update.listen(eventHandler1(_handle_ngModelChange_2_1));
    final subscription_2 = _MaterialSelectItemComponent_5_5.trigger.listen(eventHandler1(_handle_trigger_5_0));
    _el_6.addEventListener('click', eventHandler1(_handle_click_6_0));
    final subscription_3 = _NgModel_6_7.update.listen(eventHandler1(_handle_ngModelChange_6_1));
    init([_el_0], [subscription_0, subscription_1, subscription_2, subscription_3]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import51.DeferredValidator) && (2 == nodeIndex))) {
      return _DeferredValidator_2_5;
    }
    if ((identical(token, const import38.MultiToken('NgValidators')) && (2 == nodeIndex))) {
      return _NgValidators_2_6;
    }
    if ((identical(token, import52.NgModel) && (2 == nodeIndex))) {
      return _NgModel_2_7;
    }
    if ((identical(token, import55.NgControl) && (2 == nodeIndex))) {
      return _NgControl_2_8;
    }
    if ((((identical(token, import53.MaterialInputComponent) || identical(token, import39.ReferenceDirective)) || identical(token, import56.Focusable)) && (2 == nodeIndex))) {
      return _MaterialInputComponent_2_9;
    }
    if ((identical(token, import57.BaseMaterialInput) && (2 == nodeIndex))) {
      return _BaseMaterialInput_2_10;
    }
    if ((identical(token, import54.MaterialInputDefaultValueAccessor) && (2 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_2_11;
    }
    if (((identical(token, import18.MaterialSelectItemComponent) || identical(token, import15.HasRenderer)) && ((1 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _MaterialSelectItemComponent_1_5;
    }
    if ((identical(token, import16.SelectionItem) && ((1 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _SelectionItem_1_6;
    }
    if ((identical(token, import51.DeferredValidator) && (6 == nodeIndex))) {
      return _DeferredValidator_6_5;
    }
    if ((identical(token, const import38.MultiToken('NgValidators')) && (6 == nodeIndex))) {
      return _NgValidators_6_6;
    }
    if ((identical(token, import52.NgModel) && (6 == nodeIndex))) {
      return _NgModel_6_7;
    }
    if ((identical(token, import55.NgControl) && (6 == nodeIndex))) {
      return _NgControl_6_8;
    }
    if ((((identical(token, import53.MaterialInputComponent) || identical(token, import39.ReferenceDirective)) || identical(token, import56.Focusable)) && (6 == nodeIndex))) {
      return _MaterialInputComponent_6_9;
    }
    if ((identical(token, import57.BaseMaterialInput) && (6 == nodeIndex))) {
      return _BaseMaterialInput_6_10;
    }
    if ((identical(token, import54.MaterialInputDefaultValueAccessor) && (6 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_6_11;
    }
    if (((identical(token, import18.MaterialSelectItemComponent) || identical(token, import15.HasRenderer)) && ((5 <= nodeIndex) && (nodeIndex <= 8)))) {
      return _MaterialSelectItemComponent_5_5;
    }
    if ((identical(token, import16.SelectionItem) && ((5 <= nodeIndex) && (nodeIndex <= 8)))) {
      return _SelectionItem_5_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_MaterialSelectItemComponent_1_5.closeOnActivate = 'false');
    }
    final currVal_0 = _ctx.isSelected(_ctx.daysToTodayRange);
    if (!identical(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_1_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    changed = false;
    _NgModel_2_7.model = _ctx.daysToToday;
    _NgModel_2_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_2_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_2_9.displayBottomPanel = false;
      changed = true;
    }
    final currVal_3 = _ctx.maxDaysInputLength;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialInputComponent_2_9.maxCount = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    if (firstCheck) {
      (_MaterialSelectItemComponent_5_5.closeOnActivate = 'false');
    }
    final currVal_6 = _ctx.isSelected(_ctx.daysToYesterdayRange);
    if (!identical(_expr_6, currVal_6)) {
      _MaterialSelectItemComponent_5_5.selected = currVal_6;
      _expr_6 = currVal_6;
    }
    changed = false;
    _NgModel_6_7.model = _ctx.daysToYesterday;
    _NgModel_6_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_6_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_6_9.displayBottomPanel = false;
      changed = true;
    }
    final currVal_9 = _ctx.maxDaysInputLength;
    if (!identical(_expr_9, currVal_9)) {
      _MaterialInputComponent_6_9.maxCount = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    _compView_1.detectHostChanges(firstCheck);
    final currVal_5 = (_ctx.daysToTodayMsg ?? '');
    if (!identical(_expr_5, currVal_5)) {
      _text_4.text = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_5.detectHostChanges(firstCheck);
    final currVal_11 = (_ctx.daysToYesterdayMsg ?? '');
    if (!identical(_expr_11, currVal_11)) {
      _text_8.text = currVal_11;
      _expr_11 = currVal_11;
    }
    _compView_1.detectChanges();
    _compView_2.detectChanges();
    _compView_5.detectChanges();
    _compView_6.detectChanges();
    if (firstCheck) {
      _MaterialInputComponent_2_9.ngAfterViewInit();
    }
    if (firstCheck) {
      _MaterialInputComponent_6_9.ngAfterViewInit();
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as _ViewDateRangeEditorComponent1)._query_SelectionItem_0_0_isDirty = true;
    (parentView as _ViewDateRangeEditorComponent1)._query_SelectionItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
    _compView_2?.destroy();
    _compView_5?.destroy();
    _compView_6?.destroy();
    _MaterialInputComponent_2_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_2_11.ngOnDestroy();
    _MaterialSelectItemComponent_1_5.ngOnDestroy();
    _MaterialInputComponent_6_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_6_11.ngOnDestroy();
    _MaterialSelectItemComponent_5_5.ngOnDestroy();
  }

  void _handle_trigger_1_0($event) {
    ctx.onRangeClicked($event, ctx.daysToTodayRange);
  }

  void _handle_click_2_0($event) {
    $event.stopPropagation();
  }

  void _handle_ngModelChange_2_1($event) {
    ctx.daysToToday = $event;
  }

  void _handle_trigger_5_0($event) {
    ctx.onRangeClicked($event, ctx.daysToYesterdayRange);
  }

  void _handle_click_6_0($event) {
    $event.stopPropagation();
  }

  void _handle_ngModelChange_6_1($event) {
    ctx.daysToYesterday = $event;
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent9(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent9(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent10 extends AppView<import2.DateRangeEditorComponent> {
  import8.DivElement _el_0;
  import8.Element _el_1;
  import58.ViewComparisonRangeEditorComponent0 _compView_1;
  import59.ComparisonRangeEditorComponent _ComparisonRangeEditorComponent_1_5;
  var _expr_0;
  _ViewDateRangeEditorComponent10(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'comparison group';
    addShimC(_el_0);
    _compView_1 = new import58.ViewComparisonRangeEditorComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _ComparisonRangeEditorComponent_1_5 = new import59.ComparisonRangeEditorComponent();
    _compView_1.create(_ComparisonRangeEditorComponent_1_5, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import59.ComparisonRangeEditorComponent) && (1 == nodeIndex))) {
      return _ComparisonRangeEditorComponent_1_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    final currVal_0 = _ctx.model;
    if (!identical(_expr_0, currVal_0)) {
      _ComparisonRangeEditorComponent_1_5.model = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent10(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent10(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent11 extends AppView<import2.DateRangeEditorComponent> {
  import8.DivElement _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import8.Comment _anchor_2;
  import8.DivElement _el_2_0;
  import8.DivElement _el_3;
  import8.Element _el_4;
  import60.ViewDateRangeInputComponent0 _compView_4;
  import61.DateRangeInputComponent _DateRangeInputComponent_4_5;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  import8.Comment _anchor_8;
  import8.DivElement _el_8_0;
  import8.DivElement _el_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_9;
  bool _expr_1 = false;
  String _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  bool _expr_6;
  var _expr_7;
  bool _expr_11 = false;
  bool _expr_12;
  _ViewDateRangeEditorComponent11(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'right-column';
    addShimC(_el_0);
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_DateRangeEditorComponent12);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    _anchor_2 = ngAnchor.clone(false);
    _el_0.append(_anchor_2);
    _el_3 = createDivAndAppend(doc, _el_0);
    _el_3.className = 'range-input';
    addShimC(_el_3);
    _compView_4 = new import60.ViewDateRangeInputComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    _el_3.append(_el_4);
    _el_4.className = 'range';
    addShimC(_el_4);
    _DateRangeInputComponent_4_5 = new import61.DateRangeInputComponent(_compView_4.ref);
    _compView_4.create(_DateRangeInputComponent_4_5, []);
    var _anchor_5 = ngAnchor.clone(false);
    _el_0.append(_anchor_5);
    _appEl_5 = new ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = new TemplateRef(_appEl_5, viewFactory_DateRangeEditorComponent14);
    _NgIf_5_9 = new NgIf(_appEl_5, _TemplateRef_5_8);
    var _anchor_6 = ngAnchor.clone(false);
    _el_0.append(_anchor_6);
    _appEl_6 = new ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = new TemplateRef(_appEl_6, viewFactory_DateRangeEditorComponent15);
    _NgIf_6_9 = new NgIf(_appEl_6, _TemplateRef_6_8);
    var _anchor_7 = ngAnchor.clone(false);
    _el_0.append(_anchor_7);
    _appEl_7 = new ViewContainer(7, 0, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = new TemplateRef(_appEl_7, viewFactory_DateRangeEditorComponent16);
    _NgIf_7_9 = new NgIf(_appEl_7, _TemplateRef_7_8);
    _anchor_8 = ngAnchor.clone(false);
    _el_0.append(_anchor_8);
    _el_9 = createDivAndAppend(doc, _el_0);
    _el_9.className = 'picker-container';
    addShimC(_el_9);
    var _anchor_10 = ngAnchor.clone(false);
    _el_9.append(_anchor_10);
    _appEl_10 = new ViewContainer(10, 9, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = new TemplateRef(_appEl_10, viewFactory_DateRangeEditorComponent18);
    _NgIf_10_9 = new NgIf(_appEl_10, _TemplateRef_10_8);
    var _anchor_11 = ngAnchor.clone(false);
    _el_9.append(_anchor_11);
    _appEl_11 = new ViewContainer(11, 9, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = new TemplateRef(_appEl_11, viewFactory_DateRangeEditorComponent19);
    _NgIf_11_9 = new NgIf(_appEl_11, _TemplateRef_11_8);
    final subscription_0 = _DateRangeInputComponent_4_5.rangeChange.listen(eventHandler1(_handle_rangeChange_4_1));
    final subscription_1 = _DateRangeInputComponent_4_5.stateChange.listen(eventHandler1(_handle_stateChange_4_0));
    init([_el_0], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import61.DateRangeInputComponent) && (4 == nodeIndex))) {
      return _DateRangeInputComponent_4_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_1_9.ngIf = _ctx.isBasic;
    final currVal_1 = (_ctx.isBasic == true);
    if (!identical(_expr_1, currVal_1)) {
      if (currVal_1) {
        var doc = import8.document;
        _el_2_0 = doc.createElement('div');
        _el_2_0.className = 'content-separator';
        addShimC(_el_2_0);
        addInlinedNodes(_anchor_2, [_el_2_0]);
      } else {
        removeInlinedNodes([_el_2_0]);
      }
      _expr_1 = currVal_1;
    }
    changed = false;
    final currVal_2 = _ctx.model.rangeId;
    if (!identical(_expr_2, currVal_2)) {
      _DateRangeInputComponent_4_5.rangeId = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.maxDate;
    if (!identical(_expr_3, currVal_3)) {
      _DateRangeInputComponent_4_5.maxDate = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.minDate;
    if (!identical(_expr_4, currVal_4)) {
      _DateRangeInputComponent_4_5.minDate = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.model.range.value;
    if (!identical(_expr_5, currVal_5)) {
      _DateRangeInputComponent_4_5.range = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.isClearRangeSelected;
    if (!identical(_expr_6, currVal_6)) {
      _DateRangeInputComponent_4_5.isClearRangeSelected = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.model.calendar.value;
    if (!identical(_expr_7, currVal_7)) {
      _DateRangeInputComponent_4_5.state = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if (firstCheck) {
      _DateRangeInputComponent_4_5.ngOnInit();
    }
    _NgIf_5_9.ngIf = _ctx.model.comparisonEnabled;
    _NgIf_6_9.ngIf = _ctx.model.comparisonEnabled;
    _NgIf_7_9.ngIf = _ctx.supportsMonthSelector;
    final bool currVal_11 = (!_ctx.isCalendarCreated == true);
    if (!identical(_expr_11, currVal_11)) {
      if (currVal_11) {
        var doc = import8.document;
        _el_8_0 = doc.createElement('div');
        _el_8_0.className = 'calendar-placeholder';
        addShimC(_el_8_0);
        addInlinedNodes(_anchor_8, [_el_8_0]);
      } else {
        removeInlinedNodes([_el_8_0]);
      }
      _expr_11 = currVal_11;
    }
    _NgIf_10_9.ngIf = _ctx.isCalendarCreated;
    _NgIf_11_9.ngIf = _ctx.supportsMonthSelector;
    _appEl_1.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    _appEl_11.detectChangesInNestedViews();
    final currVal_12 = _ctx.compact;
    if (!identical(_expr_12, currVal_12)) {
      updateClass(_el_9, 'compact', currVal_12);
      _expr_12 = currVal_12;
    }
    _compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_5?.destroyNestedViews();
    _appEl_6?.destroyNestedViews();
    _appEl_7?.destroyNestedViews();
    _appEl_10?.destroyNestedViews();
    _appEl_11?.destroyNestedViews();
    _compView_4?.destroy();
    _DateRangeInputComponent_4_5.ngOnDestroy();
  }

  void _handle_stateChange_4_0($event) {
    ctx.model.calendar.value = $event;
  }

  void _handle_rangeChange_4_1($event) {
    ctx.model.range.value = $event;
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent11(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent11(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent12 extends AppView<import2.DateRangeEditorComponent> {
  import8.DivElement _el_0;
  import23.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import8.DivElement _el_1;
  import8.Text _text_2;
  import8.Element _el_3;
  import22.ViewGlyphComponent0 _compView_3;
  import24.GlyphComponent _GlyphComponent_3_5;
  var _expr_0;
  _ViewDateRangeEditorComponent12(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'button-decorator';
    createAttr(_el_0, 'role', 'button');
    addShimC(_el_0);
    _ButtonDirective_0_5 = new import23.ButtonDirectiveNgCd(new import25.ButtonDirective(_el_0));
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'custom-tab-right';
    addShimC(_el_1);
    _text_2 = new import8.Text('');
    _el_1.append(_text_2);
    _compView_3 = new import22.ViewGlyphComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    _el_0.append(_el_3);
    _el_3.className = 'expand-less';
    createAttr(_el_3, 'icon', 'expand_less');
    addShimC(_el_3);
    _GlyphComponent_3_5 = new import24.GlyphComponent(_el_3);
    _compView_3.create(_GlyphComponent_3_5, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler0(ctx.disableCustomMode));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import25.ButtonDirective) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _GlyphComponent_3_5.icon = 'expand_less';
      changed = true;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
    final currVal_0 = (_ctx.customRangeMsg ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_3.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_3?.destroy();
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent12(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent12(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent14 extends AppView<import2.DateRangeEditorComponent> {
  import8.DivElement _el_0;
  import8.Text _text_1;
  var _expr_0;
  _ViewDateRangeEditorComponent14(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'range-title';
    addShimC(_el_0);
    _text_1 = new import8.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    final currVal_0 = (_ctx.comparisonHeaderMsg ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent14(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent14(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent15 extends AppView<import2.DateRangeEditorComponent> {
  import8.DivElement _el_0;
  import8.Element _el_1;
  import60.ViewDateRangeInputComponent0 _compView_1;
  import61.DateRangeInputComponent _DateRangeInputComponent_1_5;
  String _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  bool _expr_4;
  var _expr_5;
  _ViewDateRangeEditorComponent15(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'range-input';
    addShimC(_el_0);
    _compView_1 = new import60.ViewDateRangeInputComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    _el_1.className = 'comparison inputs';
    addShimC(_el_1);
    _DateRangeInputComponent_1_5 = new import61.DateRangeInputComponent(_compView_1.ref);
    _compView_1.create(_DateRangeInputComponent_1_5, []);
    final subscription_0 = _DateRangeInputComponent_1_5.rangeChange.listen(eventHandler1(_handle_rangeChange_1_1));
    final subscription_1 = _DateRangeInputComponent_1_5.stateChange.listen(eventHandler1(_handle_stateChange_1_0));
    init([_el_0], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import61.DateRangeInputComponent) && (1 == nodeIndex))) {
      return _DateRangeInputComponent_1_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_0 = _ctx.model.comparisonId;
    if (!identical(_expr_0, currVal_0)) {
      _DateRangeInputComponent_1_5.rangeId = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.model.maxDate;
    if (!identical(_expr_1, currVal_1)) {
      _DateRangeInputComponent_1_5.maxDate = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.model.minDate;
    if (!identical(_expr_2, currVal_2)) {
      _DateRangeInputComponent_1_5.minDate = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.model.comparison.value;
    if (!identical(_expr_3, currVal_3)) {
      _DateRangeInputComponent_1_5.range = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.isClearRangeSelected;
    if (!identical(_expr_4, currVal_4)) {
      _DateRangeInputComponent_1_5.isClearRangeSelected = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.model.calendar.value;
    if (!identical(_expr_5, currVal_5)) {
      _DateRangeInputComponent_1_5.state = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if (firstCheck) {
      _DateRangeInputComponent_1_5.ngOnInit();
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
    _DateRangeInputComponent_1_5.ngOnDestroy();
  }

  void _handle_stateChange_1_0($event) {
    ctx.model.calendar.value = $event;
  }

  void _handle_rangeChange_1_1($event) {
    ctx.model.comparison.value = $event;
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent15(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent15(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent16 extends AppView<import2.DateRangeEditorComponent> {
  import8.DivElement _el_0;
  import8.DivElement _el_1;
  import23.ButtonDirectiveNgCd _ButtonDirective_1_5;
  import62.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_1_6;
  import8.Element _el_2;
  import8.Text _text_3;
  import8.Element _el_4;
  import22.ViewGlyphComponent0 _compView_4;
  import24.GlyphComponent _GlyphComponent_4_5;
  import8.Element _el_5;
  import63.ViewNextPrevComponent0 _compView_5;
  import64.NextPrevComponent _NextPrevComponent_5_5;
  var _expr_0;
  bool _expr_1;
  var _expr_3;
  _ViewDateRangeEditorComponent16(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'month-selector-toolbar';
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    createAttr(_el_1, 'buttonDecorator', '');
    _el_1.className = 'month-selector-dropdown';
    createAttr(_el_1, 'keyboardOnlyFocusIndicator', '');
    createAttr(_el_1, 'role', 'button');
    addShimC(_el_1);
    _ButtonDirective_1_5 = new import23.ButtonDirectiveNgCd(new import25.ButtonDirective(_el_1));
    _KeyboardOnlyFocusIndicatorDirective_1_6 = new import62.KeyboardOnlyFocusIndicatorDirective(_el_1, parentView.parentView.injectorGet(import19.DomService, parentView.viewData.parentIndex));
    _el_2 = createSpanAndAppend(doc, _el_1);
    _el_2.className = 'visible-month';
    addShimE(_el_2);
    _text_3 = new import8.Text('');
    _el_2.append(_text_3);
    _compView_4 = new import22.ViewGlyphComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    _el_1.append(_el_4);
    _el_4.className = 'month-selector-dropdown-icon';
    createAttr(_el_4, 'icon', 'arrow_drop_down');
    addShimC(_el_4);
    _GlyphComponent_4_5 = new import24.GlyphComponent(_el_4);
    _compView_4.create(_GlyphComponent_4_5, []);
    _compView_5 = new import63.ViewNextPrevComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    _el_0.append(_el_5);
    _el_5.className = 'next-prev-range';
    addShimC(_el_5);
    _NextPrevComponent_5_5 = new import64.NextPrevComponent(_compView_5.ref);
    _compView_5.create(_NextPrevComponent_5_5, []);
    _el_1.addEventListener('click', eventHandler1(_handle_click_1_1));
    _el_1.addEventListener('keypress', eventHandler1(_ButtonDirective_1_5.instance.handleKeyPress));
    _el_1.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_1_6.resetOutline));
    _el_1.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_1_6.resetOutline));
    _el_1.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_1_6.hideOutline));
    final subscription_0 = _ButtonDirective_1_5.instance.trigger.listen(eventHandler0(ctx.onMonthSelectorDropdownClicked));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import25.ButtonDirective) && ((1 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _ButtonDirective_1_5.instance;
    }
    if ((identical(token, import62.KeyboardOnlyFocusIndicatorDirective) && ((1 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _KeyboardOnlyFocusIndicatorDirective_1_6;
    }
    if ((identical(token, import64.NextPrevComponent) && (5 == nodeIndex))) {
      return _NextPrevComponent_5_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _GlyphComponent_4_5.icon = 'arrow_drop_down';
      changed = true;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    changed = false;
    final currVal_3 = _ctx.nextPrevModel;
    if (!identical(_expr_3, currVal_3)) {
      _NextPrevComponent_5_5.model = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    _ButtonDirective_1_5.detectHostChanges(this, _el_1);
    final currVal_0 = (_ctx.visibleMonthName ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_3.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.showMonthSelector;
    if (!identical(_expr_1, currVal_1)) {
      updateElemClass(_el_4, 'flipped', currVal_1);
      _expr_1 = currVal_1;
    }
    _compView_4.detectChanges();
    _compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_4?.destroy();
    _compView_5?.destroy();
    _NextPrevComponent_5_5.ngOnDestroy();
  }

  void _handle_click_1_1($event) {
    _ButtonDirective_1_5.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_1_6.hideOutline();
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent16(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent16(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent18 extends AppView<import2.DateRangeEditorComponent> {
  import8.Element _el_0;
  import65.ViewMaterialCalendarPickerComponent0 _compView_0;
  import66.MaterialCalendarPickerComponent _MaterialCalendarPickerComponent_0_5;
  import67.ShowHideDirective _ShowHideDirective_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  bool _expr_6;
  _ViewDateRangeEditorComponent18(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = new import65.ViewMaterialCalendarPickerComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'picker calendar';
    createAttr(_el_0, 'mode', 'date-range');
    addShimC(_el_0);
    _MaterialCalendarPickerComponent_0_5 = new import66.MaterialCalendarPickerComponent(parentView.parentView.injectorGet(const import38.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import68.Clock, parentView.viewData.parentIndex), 'date-range');
    _ShowHideDirective_0_6 = new import67.ShowHideDirective(_el_0, parentView.parentView.injectorGet(import19.DomService, parentView.viewData.parentIndex));
    _compView_0.create(_MaterialCalendarPickerComponent_0_5, []);
    final subscription_0 = _MaterialCalendarPickerComponent_0_5.stateChange.listen(eventHandler1(_handle_stateChange_0_1));
    final subscription_1 = _MaterialCalendarPickerComponent_0_5.visibleMonth.listen(eventHandler1(ctx.onVisibleMonthChange));
    init([_el_0], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import66.MaterialCalendarPickerComponent) && (0 == nodeIndex))) {
      return _MaterialCalendarPickerComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_1 = _ctx.model.calendar.value;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialCalendarPickerComponent_0_5.state = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.allowHighlightUpdates;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialCalendarPickerComponent_0_5.allowHighlightUpdates = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.minDate;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialCalendarPickerComponent_0_5.minDate = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.maxDate;
    if (!identical(_expr_4, currVal_4)) {
      _MaterialCalendarPickerComponent_0_5.maxDate = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.compact;
    if (!identical(_expr_5, currVal_5)) {
      _MaterialCalendarPickerComponent_0_5.compact = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      _MaterialCalendarPickerComponent_0_5.ngOnInit();
    }
    final bool currVal_6 = !_ctx.showMonthSelector;
    if (!identical(_expr_6, currVal_6)) {
      _ShowHideDirective_0_6.visible = currVal_6;
      _expr_6 = currVal_6;
    }
    if (firstCheck) {
      _ShowHideDirective_0_6.ngOnInit();
    }
    final currVal_0 = _ctx.popupHandle;
    if (!identical(_expr_0, currVal_0)) {
      setProp(_el_0, 'popupHandle', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialCalendarPickerComponent_0_5.ngAfterViewInit();
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView.parentView as ViewDateRangeEditorComponent0)._query_MaterialCalendarPickerComponent_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialCalendarPickerComponent_0_5.ngOnDestroy();
    _ShowHideDirective_0_6.ngOnDestroy();
  }

  void _handle_stateChange_0_1($event) {
    ctx.model.calendar.value = $event;
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent18(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent18(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent19 extends AppView<import2.DateRangeEditorComponent> {
  import8.Element _el_0;
  import69.ViewMaterialMonthPickerComponent0 _compView_0;
  import70.MaterialMonthPickerComponent _MaterialMonthPickerComponent_0_5;
  import67.ShowHideDirective _ShowHideDirective_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  _ViewDateRangeEditorComponent19(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDateRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = new import69.ViewMaterialMonthPickerComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'picker month-selector';
    createAttr(_el_0, 'mode', 'single-date');
    addShimC(_el_0);
    _MaterialMonthPickerComponent_0_5 = new import70.MaterialMonthPickerComponent(parentView.parentView.injectorGet(const import38.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex, null), 'single-date');
    _ShowHideDirective_0_6 = new import67.ShowHideDirective(_el_0, parentView.parentView.injectorGet(import19.DomService, parentView.viewData.parentIndex));
    _compView_0.create(_MaterialMonthPickerComponent_0_5, []);
    final subscription_0 = _MaterialMonthPickerComponent_0_5.stateChange.listen(eventHandler1(_handle_stateChange_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import70.MaterialMonthPickerComponent) && (0 == nodeIndex))) {
      return _MaterialMonthPickerComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DateRangeEditorComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_0 = _ctx.minDate;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialMonthPickerComponent_0_5.minDate = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.maxDate;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialMonthPickerComponent_0_5.maxDate = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.monthSelectorState;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialMonthPickerComponent_0_5.state = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      _MaterialMonthPickerComponent_0_5.ngOnInit();
    }
    final currVal_3 = _ctx.showMonthSelector;
    if (!identical(_expr_3, currVal_3)) {
      _ShowHideDirective_0_6.visible = currVal_3;
      _expr_3 = currVal_3;
    }
    if (firstCheck) {
      _ShowHideDirective_0_6.ngOnInit();
    }
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialMonthPickerComponent_0_5.ngAfterViewInit();
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView.parentView as ViewDateRangeEditorComponent0)._query_MaterialMonthPickerComponent_1_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialMonthPickerComponent_0_5.ngOnDestroy();
    _ShowHideDirective_0_6.ngOnDestroy();
  }

  void _handle_stateChange_0_0($event) {
    ctx.monthSelectorState = $event;
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponent19(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponent19(parentView, parentIndex);
}

const List<dynamic> styles$DateRangeEditorComponentHost = const [];

class _ViewDateRangeEditorComponentHost0 extends AppView<dynamic> {
  ViewDateRangeEditorComponent0 _compView_0;
  import2.DateRangeEditorComponent _DateRangeEditorComponent_0_5;
  _ViewDateRangeEditorComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewDateRangeEditorComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DateRangeEditorComponent_0_5 = new import2.DateRangeEditorComponent(new ElementRef(rootEl), this.injectorGet(import19.DomService, viewData.parentIndex), this.injectorGet(import71.ManagedZone, viewData.parentIndex), this.injectorGet(import2.DateRangeEditorHost, viewData.parentIndex, null), this.injectorGet(const import38.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null), this.injectorGet(import68.Clock, viewData.parentIndex));
    _compView_0.create(_DateRangeEditorComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.DateRangeEditorComponent>(0, this, rootEl, _DateRangeEditorComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.DateRangeEditorComponent) && (0 == nodeIndex))) {
      return _DateRangeEditorComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _DateRangeEditorComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (firstCheck) {
      _DateRangeEditorComponent_0_5.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_DateRangeEditorComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewDateRangeEditorComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.DateRangeEditorComponent> DateRangeEditorComponentNgFactory = const ComponentFactory<import2.DateRangeEditorComponent>('date-range-editor', viewFactory_DateRangeEditorComponentHost0, _DateRangeEditorComponentMetadata);
const _DateRangeEditorComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DateRangeEditorComponent, DateRangeEditorComponentNgFactory);
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
}
