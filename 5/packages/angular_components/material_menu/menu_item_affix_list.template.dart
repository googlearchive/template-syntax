// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'menu_item_affix_list.dart';
export 'menu_item_affix_list.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:observable/observable.dart';
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_menu/menu_root.dart';
import 'package:angular_components/model/menu/menu_item_affix.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref2;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref3;
import 'package:angular_components/model/menu/menu_item_affix.template.dart' as _ref4;
import 'package:angular_components/model/ui/icon.template.dart' as _ref5;
import 'package:angular_components/material_menu/menu_item_affix_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'menu_item_affix_list.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import12;
import '../model/menu/menu_item_affix.dart' as import13;
import '../material_icon/material_icon.template.dart' as import14;
import '../button_decorator/button_decorator.template.dart' as import15;
import '../material_icon/material_icon.dart' as import16;
import '../button_decorator/button_decorator.dart' as import17;
import 'menu_root.dart' as import18;

const List<dynamic> styles$MenuItemAffixListComponent = const [import0.styles];

class ViewMenuItemAffixListComponent0 extends AppView<import2.MenuItemAffixListComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  static RenderComponentType _renderType;
  ViewMenuItemAffixListComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import8.document.createElement('menu-item-affix-list');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MenuItemAffixListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    final import8.HtmlElement parentRenderNode = initViewRoot(rootEl);
    import8.Text _text_0 = new import8.Text('\n');
    parentRenderNode.append(_text_0);
    var _anchor_1 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MenuItemAffixListComponent1);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    import8.Text _text_2 = new import8.Text('\n');
    parentRenderNode.append(_text_2);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuItemAffixListComponent _ctx = ctx;
    _NgIf_1_7.ngIf = _ctx.hasAffixes;
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMenuItemAffixListComponent0(parentView, parentIndex);
}

class _ViewMenuItemAffixListComponent1 extends AppView<import2.MenuItemAffixListComponent> {
  ViewContainer _appEl_1;
  import12.NgFor _NgFor_1_7;
  var _expr_0;
  _ViewMenuItemAffixListComponent1(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemAffixListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    import8.Text _text_0 = new import8.Text('\n  ');
    var _anchor_1 = ngAnchor.clone(false);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MenuItemAffixListComponent2);
    _NgFor_1_7 = new import12.NgFor(_appEl_1, _TemplateRef_1_6);
    import8.Text _text_2 = new import8.Text('\n');
    init([_text_0, _appEl_1, _text_2], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuItemAffixListComponent _ctx = ctx;
    final currVal_0 = _ctx.affixes;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_1_7.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_1_7.ngDoCheck();
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMenuItemAffixListComponent1(parentView, parentIndex);
}

class _ViewMenuItemAffixListComponent2 extends AppView<import2.MenuItemAffixListComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  _ViewMenuItemAffixListComponent2(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemAffixListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    import8.Text _text_0 = new import8.Text('\n    ');
    var _anchor_1 = ngAnchor.clone(false);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MenuItemAffixListComponent3);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    import8.Text _text_2 = new import8.Text('\n  ');
    init([_text_0, _appEl_1, _text_2], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import13.MenuItemAffix local_affix = locals['\$implicit'];
    _NgIf_1_7.ngIf = local_affix.isVisible;
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMenuItemAffixListComponent2(parentView, parentIndex);
}

class _ViewMenuItemAffixListComponent3 extends AppView<import2.MenuItemAffixListComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_7;
  _ViewMenuItemAffixListComponent3(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemAffixListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    import8.Text _text_0 = new import8.Text('\n      ');
    var _anchor_1 = ngAnchor.clone(false);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_MenuItemAffixListComponent4);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    import8.Text _text_2 = new import8.Text('\n      ');
    var _anchor_3 = ngAnchor.clone(false);
    _appEl_3 = new ViewContainer(3, null, this, _anchor_3);
    TemplateRef _TemplateRef_3_6 = new TemplateRef(_appEl_3, viewFactory_MenuItemAffixListComponent5);
    _NgIf_3_7 = new NgIf(_appEl_3, _TemplateRef_3_6);
    import8.Text _text_4 = new import8.Text('\n    ');
    init([_text_0, _appEl_1, _text_2, _appEl_3, _text_4], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuItemAffixListComponent _ctx = ctx;
    final import13.MenuItemAffix local_affix = parentView.locals['\$implicit'];
    _NgIf_1_7.ngIf = _ctx.isIconAffix(local_affix);
    _NgIf_3_7.ngIf = _ctx.isCaptionAffix(local_affix);
    _appEl_1.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponent3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMenuItemAffixListComponent3(parentView, parentIndex);
}

class _ViewMenuItemAffixListComponent4 extends AppView<import2.MenuItemAffixListComponent> {
  import8.Element _el_0;
  import14.ViewMaterialIconComponent0 _compView_0;
  import15.ButtonDirectiveNgCd _ButtonDirective_0_4;
  import16.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  var _expr_5;
  _ViewMenuItemAffixListComponent4(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemAffixListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    _compView_0 = new import14.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'baseline', '');
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'material-list-item-primary secondary-icon';
    createAttr(_el_0, 'role', 'button');
    addShimC(_el_0);
    _ButtonDirective_0_4 = new import15.ButtonDirectiveNgCd(new import17.ButtonDirective(_el_0));
    _MaterialIconComponent_0_5 = new import16.MaterialIconComponent(_el_0);
    import8.Text _text_1 = new import8.Text('\n      ');
    _compView_0.create(_MaterialIconComponent_0_5, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_4.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_4.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_4.instance.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.ButtonDirective) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _ButtonDirective_0_4.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuItemAffixListComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import13.MenuItemAffix local_affix = parentView.parentView.locals['\$implicit'];
    final bool currVal_4 = !_ctx.isActionIconAffix(local_affix);
    if (!identical(_expr_4, currVal_4)) {
      _ButtonDirective_0_4.instance.disabled = currVal_4;
      _expr_4 = currVal_4;
    }
    changed = false;
    final currVal_5 = _ctx.getIcon(local_affix);
    if (!identical(_expr_5, currVal_5)) {
      _MaterialIconComponent_0_5.icon = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      updateElemClass(_el_0, 'action-icon', false);
    }
    final currVal_0 = _ctx.getActionIconAriaLabel(_ctx.getIcon(local_affix));
    if (!identical(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-label', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final bool currVal_2 = !_ctx.isActionIconAffix(local_affix);
    if (!identical(_expr_2, currVal_2)) {
      updateElemClass(_el_0, 'disabled', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_affix.isVisibleOnHover;
    if (!identical(_expr_3, currVal_3)) {
      updateElemClass(_el_0, 'hover-icon', currVal_3);
      _expr_3 = currVal_3;
    }
    _ButtonDirective_0_4.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }

  void _handle_trigger_0_0($event) {
    final import13.MenuItemAffix local_affix = parentView.parentView.locals['\$implicit'];
    ctx.handleActionIconTrigger(ctx.getIcon(local_affix), $event);
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponent4(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMenuItemAffixListComponent4(parentView, parentIndex);
}

class _ViewMenuItemAffixListComponent5 extends AppView<import2.MenuItemAffixListComponent> {
  import8.Element _el_0;
  import8.Text _text_2;
  var _expr_0;
  _ViewMenuItemAffixListComponent5(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemAffixListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'material-list-item-primary caption-text';
    addShimE(_el_0);
    import8.Text _text_1 = new import8.Text('\n        ');
    _el_0.append(_text_1);
    _text_2 = new import8.Text('');
    _el_0.append(_text_2);
    import8.Text _text_3 = new import8.Text('\n      ');
    _el_0.append(_text_3);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuItemAffixListComponent _ctx = ctx;
    final import13.MenuItemAffix local_affix = parentView.parentView.locals['\$implicit'];
    final currVal_0 = import9.interpolate0(_ctx.getText(local_affix));
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponent5(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMenuItemAffixListComponent5(parentView, parentIndex);
}

const List<dynamic> styles$MenuItemAffixListComponentHost = const [];

class _ViewMenuItemAffixListComponentHost0 extends AppView<dynamic> {
  ViewMenuItemAffixListComponent0 _compView_0;
  import2.MenuItemAffixListComponent _MenuItemAffixListComponent_0_4;
  _ViewMenuItemAffixListComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMenuItemAffixListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MenuItemAffixListComponent_0_4 = new import2.MenuItemAffixListComponent(_compView_0.ref, this.injectorGet(import18.MenuRoot, viewData.parentIndex, null));
    _compView_0.create(_MenuItemAffixListComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MenuItemAffixListComponent>(0, this, rootEl, _MenuItemAffixListComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MenuItemAffixListComponent) && (0 == nodeIndex))) {
      return _MenuItemAffixListComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MenuItemAffixListComponent_0_4.ngOnDestroy();
  }
}

AppView viewFactory_MenuItemAffixListComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMenuItemAffixListComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MenuItemAffixListComponent> MenuItemAffixListComponentNgFactory = const ComponentFactory<import2.MenuItemAffixListComponent>('menu-item-affix-list', viewFactory_MenuItemAffixListComponentHost0, _MenuItemAffixListComponentMetadata);
const _MenuItemAffixListComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MenuItemAffixListComponent, MenuItemAffixListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
