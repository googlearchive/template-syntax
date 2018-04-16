// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'comparison_range_editor.dart';
export 'comparison_range_editor.dart';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:angular_components/material_datepicker/date_range_input.dart';
import 'package:angular_components/src/material_datepicker/date_range_editor_model.dart';
import 'package:angular_components/material_list/material_list.dart';
import 'package:angular_components/material_list/material_list_item.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/material_select/material_select_item.dart';
import 'package:angular_components/material_toggle/material_toggle.dart';
import 'package:angular_components/model/date/date.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_datepicker/date_range_input.template.dart' as _ref1;
import 'package:angular_components/material_list/material_list.template.dart' as _ref2;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref3;
import 'package:angular_components/material_select/material_dropdown_select.template.dart' as _ref4;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref5;
import 'package:angular_components/material_toggle/material_toggle.template.dart' as _ref6;
import 'package:angular_components/model/date/date.template.dart' as _ref7;
import 'package:angular_components/src/material_datepicker/date_range_editor_model.template.dart' as _ref8;
import 'package:angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'comparison_range_editor.dart' as import2;
import 'dart:html' as import3;
import '../../material_toggle/material_toggle.template.dart' as import4;
import '../../material_toggle/material_toggle.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import14;
import '../../material_select/material_select_item.template.dart' as import15;
import '../../material_select/material_select_item.dart' as import16;
import '../../utils/browser/dom_service/dom_service.dart' as import17;
import '../../mixins/material_dropdown_base.dart' as import18;
import '../../material_select/activation_handler.dart' as import19;
import '../../model/selection/selection_container.dart' as import20;
import '../../model/ui/has_renderer.dart' as import21;
import 'date_range_editor_model.dart' as import22;

const List<dynamic> styles$ComparisonRangeEditorComponent = const [import0.styles];

class ViewComparisonRangeEditorComponent0 extends AppView<import2.ComparisonRangeEditorComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Element _el_3;
  import4.ViewMaterialToggleComponent0 _compView_3;
  import5.MaterialToggleComponent _MaterialToggleComponent_3_5;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  bool _expr_1;
  bool _expr_2;
  String _expr_3;
  static RenderComponentType _renderType;
  ViewComparisonRangeEditorComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('comparison-range-editor');
    _renderType ??= import11.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$ComparisonRangeEditorComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.ComparisonRangeEditorComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'comparison-toggle-section';
    addShimC(_el_0);
    _el_1 = createSpanAndAppend(doc, _el_0);
    _el_1.className = 'compare-header';
    addShimE(_el_1);
    _text_2 = new import3.Text('');
    _el_1.append(_text_2);
    _compView_3 = new import4.ViewMaterialToggleComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    _el_0.append(_el_3);
    _el_3.className = 'comparison-toggle themeable';
    addShimC(_el_3);
    _MaterialToggleComponent_3_5 = new import5.MaterialToggleComponent();
    _compView_3.create(_MaterialToggleComponent_3_5, [const []]);
    final _anchor_4 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_4);
    _appEl_4 = new ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = new TemplateRef(_appEl_4, viewFactory_ComparisonRangeEditorComponent1);
    _NgIf_4_9 = new NgIf(_appEl_4, _TemplateRef_4_8);
    final subscription_0 = _MaterialToggleComponent_3_5.onChecked.listen(eventHandler1(_handle_checkedChange_3_0));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ComparisonRangeEditorComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final bool currVal_1 = !_ctx.model.comparisonSupported;
    if (!identical(_expr_1, currVal_1)) {
      _MaterialToggleComponent_3_5.disabled = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.model.comparisonEnabled;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialToggleComponent_3_5.checked = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.comparisonHeaderMsg;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialToggleComponent_3_5.ariaLabel = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    _NgIf_4_9.ngIf = _ctx.model.comparisonEnabled;
    _appEl_4.detectChangesInNestedViews();
    final currVal_0 = (_ctx.comparisonHeaderMsg ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_3.detectChanges();
    if (firstCheck) {
      _MaterialToggleComponent_3_5.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_4?.destroyNestedViews();
    _compView_3?.destroy();
  }

  void _handle_checkedChange_3_0($event) {
    ctx.model.comparisonEnabled = $event;
  }
}

AppView<import2.ComparisonRangeEditorComponent> viewFactory_ComparisonRangeEditorComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewComparisonRangeEditorComponent0(parentView, parentIndex);
}

class _ViewComparisonRangeEditorComponent1 extends AppView<import2.ComparisonRangeEditorComponent> {
  import3.DivElement _el_0;
  ViewContainer _appEl_1;
  import14.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewComparisonRangeEditorComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewComparisonRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.ComparisonRangeEditorComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_ComparisonRangeEditorComponent2);
    _NgFor_1_9 = new import14.NgFor(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ComparisonRangeEditorComponent _ctx = ctx;
    final currVal_0 = _ctx.model.validComparisonOptions;
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

AppView<import2.ComparisonRangeEditorComponent> viewFactory_ComparisonRangeEditorComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewComparisonRangeEditorComponent1(parentView, parentIndex);
}

class _ViewComparisonRangeEditorComponent2 extends AppView<import2.ComparisonRangeEditorComponent> {
  import3.Element _el_0;
  import15.ViewMaterialSelectItemComponent0 _compView_0;
  import16.MaterialSelectItemComponent _MaterialSelectItemComponent_0_5;
  import3.Text _text_1;
  var _expr_0;
  var _expr_2;
  _ViewComparisonRangeEditorComponent2(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewComparisonRangeEditorComponent0._renderType;
  }
  @override
  ComponentRef<import2.ComparisonRangeEditorComponent> build() {
    _compView_0 = new import15.ViewMaterialSelectItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'closeOnActivate', 'false');
    addShimC(_el_0);
    _MaterialSelectItemComponent_0_5 = new import16.MaterialSelectItemComponent(_el_0, parentView.parentView.injectorGet(import17.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import18.DropdownHandle, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import19.ActivationHandler, parentView.viewData.parentIndex, null), _compView_0.ref, null);
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
    if (((identical(token, import20.SelectionItem) || identical(token, import21.HasRenderer)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.ComparisonRangeEditorComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final import22.ComparisonOption local_option = locals['\$implicit'];
    if (firstCheck) {
      (_MaterialSelectItemComponent_0_5.closeOnActivate = 'false');
    }
    final currVal_0 = (_ctx.model.comparisonOption == local_option);
    if (!identical(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_2 = import11.interpolate0(_ctx.comparisonOptionMsg(local_option));
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
    final import22.ComparisonOption local_option = locals['\$implicit'];
    ctx.model.comparisonOption = local_option;
  }
}

AppView<import2.ComparisonRangeEditorComponent> viewFactory_ComparisonRangeEditorComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewComparisonRangeEditorComponent2(parentView, parentIndex);
}

const List<dynamic> styles$ComparisonRangeEditorComponentHost = const [];

class _ViewComparisonRangeEditorComponentHost0 extends AppView<dynamic> {
  ViewComparisonRangeEditorComponent0 _compView_0;
  import2.ComparisonRangeEditorComponent _ComparisonRangeEditorComponent_0_5;
  _ViewComparisonRangeEditorComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewComparisonRangeEditorComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ComparisonRangeEditorComponent_0_5 = new import2.ComparisonRangeEditorComponent();
    _compView_0.create(_ComparisonRangeEditorComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.ComparisonRangeEditorComponent>(0, this, rootEl, _ComparisonRangeEditorComponent_0_5);
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

AppView viewFactory_ComparisonRangeEditorComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewComparisonRangeEditorComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.ComparisonRangeEditorComponent> ComparisonRangeEditorComponentNgFactory = const ComponentFactory<import2.ComparisonRangeEditorComponent>('comparison-range-editor', viewFactory_ComparisonRangeEditorComponentHost0, _ComparisonRangeEditorComponentMetadata);
const _ComparisonRangeEditorComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ComparisonRangeEditorComponent, ComparisonRangeEditorComponentNgFactory);
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
