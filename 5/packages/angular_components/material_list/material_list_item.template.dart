// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_list_item.dart';
export 'material_list_item.dart';
import 'dart:html' as dom;
import 'package:angular/angular.dart';
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/mixins/material_dropdown_base.dart';
import 'package:angular_components/model/a11y/active_item_mixin.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref2;
import 'package:angular_components/model/a11y/active_item_mixin.template.dart' as _ref3;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref4;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref5;
import 'package:angular_components/material_list/material_list_item.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_list_item.dart' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/angular.dart';
import '../utils/browser/dom_service/dom_service.dart' as import9;
import '../mixins/material_dropdown_base.dart' as import10;

const List<dynamic> styles$MaterialListItemComponent = const [import0.styles];

class ViewMaterialListItemComponent0 extends AppView<import2.MaterialListItemComponent> {
  var _expr_0;
  bool _expr_1;
  var _expr_2;
  bool _expr_3;
  bool _expr_4;
  static RenderComponentType _renderType;
  ViewMaterialListItemComponent0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import6.document.createElement('material-list-item');
    createAttr(rootEl, 'role', 'button');
    rootEl.className = 'item';
    _renderType ??= import7.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialListItemComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialListItemComponent> build() {
    final import2.MaterialListItemComponent _ctx = ctx;
    final import6.HtmlElement parentRenderNode = initViewRoot(rootEl);
    project(parentRenderNode, 0);
    init(const [], null);
    rootEl.addEventListener('mouseenter', eventHandler0(_ctx.onMouseEnter));
    rootEl.addEventListener('mouseleave', eventHandler0(_ctx.onMouseLeave));
    rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
    return null;
  }

  void detectHostChanges(bool firstCheck) {
    if (firstCheck) {
      if (!identical(ctx.role, null)) {
        setAttr(rootEl, 'role', ctx.role?.toString());
      }
    }
    final currVal_0 = ctx.tabIndex;
    if (!identical(_expr_0, currVal_0)) {
      setProp(rootEl, 'tabIndex', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = ctx.active;
    if (!identical(_expr_1, currVal_1)) {
      updateElemClass(rootEl, 'active', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = ctx.disabledStr;
    if (!identical(_expr_2, currVal_2)) {
      setAttr(rootEl, 'aria-disabled', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = ctx.disabled;
    if (!identical(_expr_3, currVal_3)) {
      updateElemClass(rootEl, 'is-disabled', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = ctx.disabled;
    if (!identical(_expr_4, currVal_4)) {
      updateElemClass(rootEl, 'disabled', currVal_4);
      _expr_4 = currVal_4;
    }
  }
}

AppView<import2.MaterialListItemComponent> viewFactory_MaterialListItemComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialListItemComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialListItemComponentHost = const [];

class _ViewMaterialListItemComponentHost0 extends AppView<dynamic> {
  ViewMaterialListItemComponent0 _compView_0;
  import2.MaterialListItemComponent _MaterialListItemComponent_0_4;
  _ViewMaterialListItemComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialListItemComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialListItemComponent_0_4 = new import2.MaterialListItemComponent(rootEl, this.injectorGet(import9.DomService, viewData.parentIndex), this.injectorGet(import10.DropdownHandle, viewData.parentIndex, null), null, null);
    _compView_0.create(_MaterialListItemComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialListItemComponent>(0, this, rootEl, _MaterialListItemComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialListItemComponent) && (0 == nodeIndex))) {
      return _MaterialListItemComponent_0_4;
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
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialListItemComponent_0_4.ngOnDestroy();
  }
}

AppView viewFactory_MaterialListItemComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialListItemComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialListItemComponent> MaterialListItemComponentNgFactory = const ComponentFactory<import2.MaterialListItemComponent>('material-list-item', viewFactory_MaterialListItemComponentHost0, _MaterialListItemComponentMetadata);
const _MaterialListItemComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialListItemComponent, MaterialListItemComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
