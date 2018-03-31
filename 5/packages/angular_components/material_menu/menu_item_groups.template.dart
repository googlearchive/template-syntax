// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'menu_item_groups.dart';
export 'menu_item_groups.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:quiver/core.dart' as qc show Optional;
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/focus/focus_activable_item.dart';
import 'package:angular_components/focus/focus_trap.dart';
import 'package:angular_components/highlighted_text/highlighted_text.dart';
import 'package:angular_components/laminate/enums/alignment.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_list/material_list.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/material_menu/menu_item_affix_list.dart';
import 'package:angular_components/material_menu/menu_root.dart';
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/material_select/material_select_item.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/mixins/material_dropdown_base.dart';
import 'package:angular_components/model/a11y/active_item.dart';
import 'package:angular_components/model/action/delayed_action.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/model/menu/selectable_menu.dart';
import 'package:angular_components/model/selection/select.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/ui/highlighted_text_model.dart';
import 'package:angular_components/utils/angular/properties/properties.dart';
import 'package:angular_components/utils/id_generator/id_generator.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/focus/focus_activable_item.template.dart' as _ref4;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref5;
import 'package:angular_components/highlighted_text/highlighted_text.template.dart' as _ref6;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref7;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref8;
import 'package:angular_components/material_list/material_list.template.dart' as _ref9;
import 'package:angular_components/material_menu/material_menu.template.dart' as _ref10;
import 'package:angular_components/material_menu/menu_item_affix_list.template.dart' as _ref11;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref12;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref13;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref14;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref15;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref16;
import 'package:angular_components/model/a11y/active_item.template.dart' as _ref17;
import 'package:angular_components/model/action/delayed_action.template.dart' as _ref18;
import 'package:angular_components/model/menu/menu.template.dart' as _ref19;
import 'package:angular_components/model/menu/selectable_menu.template.dart' as _ref20;
import 'package:angular_components/model/selection/select.template.dart' as _ref21;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref22;
import 'package:angular_components/model/ui/highlighted_text_model.template.dart' as _ref23;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref24;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref25;
import 'package:angular_components/material_menu/menu_item_groups.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'menu_item_groups.dart' as import2;
import 'dart:html' as import3;
import '../focus/focus_trap.template.dart' as import4;
import '../focus/focus_trap.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import7;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../model/menu/menu.dart' as import15;
import '../button_decorator/button_decorator.template.dart' as import16;
import '../button_decorator/button_decorator.dart' as import17;
import '../material_icon/material_icon.template.dart' as import18;
import '../material_icon/material_icon.dart' as import19;
import '../material_select/material_select_item.template.dart' as import20;
import '../focus/focus.dart' as import21;
import '../focus/focus_activable_item.dart' as import22;
import '../src/material_tooltip/tooltip.dart' as import23;
import '../material_select/material_select_item.dart' as import24;
import 'package:angular/src/common/directives/ng_class.dart' as import25;
import '../src/laminate/popup/popup_source_directive.dart' as import26;
import '../material_tooltip/module.dart' as import27;
import '../src/material_tooltip/tooltip_controller.dart' as import28;
import '../utils/disposer/disposer.dart' as import29;
import '../utils/browser/dom_service/dom_service.dart' as import30;
import '../laminate/components/modal/modal.dart' as import31;
import '../src/laminate/popup/popup_ref.dart' as import32;
import '../src/laminate/popup/dom_popup_source.dart' as import33;
import '../mixins/material_dropdown_base.dart' as import34;
import '../material_select/activation_handler.dart' as import35;
import '../utils/angular/reference/reference.dart' as import36;
import '../model/selection/selection_container.dart' as import37;
import '../model/ui/has_renderer.dart' as import38;
import '../highlighted_text/highlighted_text.template.dart' as import39;
import '../highlighted_text/highlighted_text.dart' as import40;
import 'menu_item_affix_list.template.dart' as import41;
import 'menu_item_affix_list.dart' as import42;
import 'menu_root.dart' as import43;
import '../material_popup/material_popup.template.dart' as import44;
import '../material_popup/material_popup.dart' as import45;
import '../content/deferred_content.dart' as import46;
import '../src/laminate/popup/popup_hierarchy.dart' as import47;
import 'package:angular/src/core/zone/ng_zone.dart' as import48;
import '../src/laminate/overlay/overlay_service.dart' as import49;
import '../laminate/overlay/zindexer.dart' as import50;
import 'package:angular/src/core/di/opaque_token.dart' as import51;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import53;
import '../src/laminate/popup/popup_size_provider.dart' as import54;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import56;
import '../material_list/material_list.template.dart' as import57;
import '../material_list/material_list.dart' as import58;
import '../utils/id_generator/id_generator.dart' as import59;

const List<dynamic> styles$MenuItemGroupsComponent = const [import0.styles];

class ViewMenuItemGroupsComponent0 extends AppView<import2.MenuItemGroupsComponent> {
  bool _query_FocusableActivateItem_1_0_isDirty = true;
  import3.Element _el_1;
  import4.ViewFocusTrapComponent0 _compView_1;
  import5.FocusTrapComponent _FocusTrapComponent_1_5;
  bool _query_AutoFocusDirective_1_0_isDirty = true;
  ViewContainer _appEl_3;
  import7.NgFor _NgFor_3_9;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  static RenderComponentType _renderType;
  ViewMenuItemGroupsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('menu-item-groups');
    _renderType ??= import11.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MenuItemGroupsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final import2.MenuItemGroupsComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    import3.Text _text_0 = new import3.Text('\n');
    parentRenderNode.append(_text_0);
    _compView_1 = new import4.ViewFocusTrapComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    addShimC(_el_1);
    _FocusTrapComponent_1_5 = new import5.FocusTrapComponent();
    import3.Text _text_2 = new import3.Text('\n  ');
    var _anchor_3 = ngAnchor.clone(false);
    _appEl_3 = new ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_MenuItemGroupsComponent1);
    _NgFor_3_9 = new import7.NgFor(_appEl_3, _TemplateRef_3_8);
    import3.Text _text_4 = new import3.Text('\n');
    _compView_1.create(_FocusTrapComponent_1_5, [
      [_text_2, _appEl_3, _text_4]
    ]);
    import3.Text _text_5 = new import3.Text('\n');
    parentRenderNode.append(_text_5);
    _el_1.addEventListener('focus', eventHandler1(ctx.onFocus));
    init(const [], null);
    _rootEl.addEventListener('mouseover', eventHandler1(_ctx.onMouseOver));
    _rootEl.addEventListener('mouseout', eventHandler1(_ctx.onMouseOut));
    _rootEl.addEventListener('keydown', eventHandler1(_ctx.handleKeydown));
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuItemGroupsComponent _ctx = ctx;
    final currVal_2 = _ctx.menu.itemGroups;
    if (!identical(_expr_2, currVal_2)) {
      _NgFor_3_9.ngForOf = currVal_2;
      _expr_2 = currVal_2;
    }
    _NgFor_3_9.ngDoCheck();
    _appEl_3.detectChangesInNestedViews();
    if (_query_AutoFocusDirective_1_0_isDirty) {
      _FocusTrapComponent_1_5.autoFocus = (_appEl_3.mapNestedViews((_ViewMenuItemGroupsComponent1 nestedView) {
        return nestedView._appEl_4.mapNestedViews((_ViewMenuItemGroupsComponent4 nestedView) {
          return nestedView._appEl_1.mapNestedViews((_ViewMenuItemGroupsComponent5 nestedView) {
            return nestedView._appEl_1.mapNestedViews((_ViewMenuItemGroupsComponent6 nestedView) {
              return import11.flattenNodes([
                [nestedView._AutoFocusDirective_1_8],
                nestedView._appEl_14.mapNestedViews((_ViewMenuItemGroupsComponent12 nestedView) {
                  return nestedView._appEl_2.mapNestedViews((_ViewMenuItemGroupsComponent13 nestedView) {
                    return [nestedView._AutoFocusDirective_2_5];
                  });
                })
              ]);
            });
          });
        });
      }).isNotEmpty
          ? _appEl_3.mapNestedViews((_ViewMenuItemGroupsComponent1 nestedView) {
              return nestedView._appEl_4.mapNestedViews((_ViewMenuItemGroupsComponent4 nestedView) {
                return nestedView._appEl_1.mapNestedViews((_ViewMenuItemGroupsComponent5 nestedView) {
                  return nestedView._appEl_1.mapNestedViews((_ViewMenuItemGroupsComponent6 nestedView) {
                    return import11.flattenNodes([
                      [nestedView._AutoFocusDirective_1_8],
                      nestedView._appEl_14.mapNestedViews((_ViewMenuItemGroupsComponent12 nestedView) {
                        return nestedView._appEl_2.mapNestedViews((_ViewMenuItemGroupsComponent13 nestedView) {
                          return [nestedView._AutoFocusDirective_2_5];
                        });
                      })
                    ]);
                  });
                });
              });
            }).first
          : null);
      _query_AutoFocusDirective_1_0_isDirty = false;
    }
    if (_query_FocusableActivateItem_1_0_isDirty) {
      ctx.focusableItems = _appEl_3.mapNestedViews((_ViewMenuItemGroupsComponent1 nestedView) {
        return nestedView._appEl_4.mapNestedViews((_ViewMenuItemGroupsComponent4 nestedView) {
          return nestedView._appEl_1.mapNestedViews((_ViewMenuItemGroupsComponent5 nestedView) {
            return nestedView._appEl_1.mapNestedViews((_ViewMenuItemGroupsComponent6 nestedView) {
              return [nestedView._FocusableActivateItem_1_14];
            });
          });
        });
      });
      _query_FocusableActivateItem_1_0_isDirty = false;
    }
    final currVal_0 = _ctx.isMouseDriven;
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_1, 'mouse-driven', currVal_0);
      _expr_0 = currVal_0;
    }
    final bool currVal_1 = !_ctx.isMouseDriven;
    if (!identical(_expr_1, currVal_1)) {
      updateElemClass(_el_1, 'keyboard-driven', currVal_1);
      _expr_1 = currVal_1;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_3?.destroyNestedViews();
    _compView_1?.destroy();
    _FocusTrapComponent_1_5.ngOnDestroy();
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMenuItemGroupsComponent0(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent1 extends AppView<import2.MenuItemGroupsComponent> {
  import3.DivElement _el_0;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  bool _expr_0;
  bool _expr_1;
  _ViewMenuItemGroupsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'group';
    createAttr(_el_0, 'group', '');
    createAttr(_el_0, 'role', 'menu');
    addShimC(_el_0);
    import3.Text _text_1 = new import3.Text('\n    ');
    _el_0.append(_text_1);
    var _anchor_2 = ngAnchor.clone(false);
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MenuItemGroupsComponent2);
    _NgIf_2_9 = new NgIf(_appEl_2, _TemplateRef_2_8);
    import3.Text _text_3 = new import3.Text('\n    ');
    _el_0.append(_text_3);
    var _anchor_4 = ngAnchor.clone(false);
    _el_0.append(_anchor_4);
    _appEl_4 = new ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = new TemplateRef(_appEl_4, viewFactory_MenuItemGroupsComponent4);
    _NgIf_4_9 = new NgIf(_appEl_4, _TemplateRef_4_8);
    import3.Text _text_5 = new import3.Text('\n  ');
    _el_0.append(_text_5);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import15.MenuItemGroup<dynamic> local_group = locals['\$implicit'];
    _NgIf_2_9.ngIf = local_group.hasLabel;
    _NgIf_4_9.ngIf = (!local_group.isCollapsible || local_group.isExpanded);
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    final currVal_0 = local_group.hasSeparator;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'has-separator', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_group.hasLabel;
    if (!identical(_expr_1, currVal_1)) {
      updateClass(_el_0, 'has-label', currVal_1);
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
    _appEl_4?.destroyNestedViews();
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent1(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent2 extends AppView<import2.MenuItemGroupsComponent> {
  import3.DivElement _el_0;
  import16.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import3.DivElement _el_2;
  import3.Text _text_4;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  bool _expr_0;
  var _expr_1;
  _ViewMenuItemGroupsComponent2(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'group-header';
    addShimC(_el_0);
    _ButtonDirective_0_5 = new import16.ButtonDirectiveNgCd(new import17.ButtonDirective(_el_0, null));
    import3.Text _text_1 = new import3.Text('\n      ');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, _el_0);
    _el_2.className = 'group-label';
    addShimC(_el_2);
    import3.Text _text_3 = new import3.Text('\n        ');
    _el_2.append(_text_3);
    _text_4 = new import3.Text('');
    _el_2.append(_text_4);
    import3.Text _text_5 = new import3.Text('\n      ');
    _el_2.append(_text_5);
    import3.Text _text_6 = new import3.Text('\n      ');
    _el_0.append(_text_6);
    var _anchor_7 = ngAnchor.clone(false);
    _el_0.append(_anchor_7);
    _appEl_7 = new ViewContainer(7, 0, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = new TemplateRef(_appEl_7, viewFactory_MenuItemGroupsComponent3);
    _NgIf_7_9 = new NgIf(_appEl_7, _TemplateRef_7_8);
    import3.Text _text_8 = new import3.Text('\n    ');
    _el_0.append(_text_8);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.ButtonDirective) && ((0 <= nodeIndex) && (nodeIndex <= 8)))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import15.MenuItemGroup<dynamic> local_group = parentView.locals['\$implicit'];
    _NgIf_7_9.ngIf = local_group.isCollapsible;
    _appEl_7.detectChangesInNestedViews();
    final currVal_0 = local_group.isCollapsible;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'is-collapsible', currVal_0);
      _expr_0 = currVal_0;
    }
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
    final currVal_1 = import11.interpolate0(local_group.uiDisplayName);
    if (!identical(_expr_1, currVal_1)) {
      _text_4.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_7?.destroyNestedViews();
  }

  void _handle_trigger_0_0($event) {
    final import15.MenuItemGroup<dynamic> local_group = parentView.locals['\$implicit'];
    ctx.toggleExpansionIfCollapsible(local_group);
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent2(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent3 extends AppView<import2.MenuItemGroupsComponent> {
  import3.Element _el_0;
  import18.ViewMaterialIconComponent0 _compView_0;
  import19.MaterialIconComponent _MaterialIconComponent_0_5;
  bool _expr_0;
  var _expr_1;
  _ViewMenuItemGroupsComponent3(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    _compView_0 = new import18.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'expansion-icon';
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = new import19.MaterialIconComponent(_el_0);
    import3.Text _text_1 = new import3.Text('\n      ');
    _compView_0.create(_MaterialIconComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    final import15.MenuItemGroup<dynamic> local_group = parentView.parentView.locals['\$implicit'];
    changed = false;
    final currVal_1 = (local_group.isExpanded ? 'expand_less' : 'expand_more');
    if (!identical(_expr_1, currVal_1)) {
      _MaterialIconComponent_0_5.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = local_group.isExpanded;
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'expanded', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent3(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent4 extends AppView<import2.MenuItemGroupsComponent> {
  ViewContainer _appEl_1;
  import7.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewMenuItemGroupsComponent4(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    import3.Text _text_0 = new import3.Text('\n      ');
    var _anchor_1 = ngAnchor.clone(false);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MenuItemGroupsComponent5);
    _NgFor_1_9 = new import7.NgFor(_appEl_1, _TemplateRef_1_8);
    import3.Text _text_2 = new import3.Text('\n    ');
    init([_text_0, _appEl_1, _text_2], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import15.MenuItemGroup<dynamic> local_group = parentView.locals['\$implicit'];
    final currVal_0 = local_group;
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

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent4(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent5 extends AppView<import2.MenuItemGroupsComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewMenuItemGroupsComponent5(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    import3.Text _text_0 = new import3.Text('\n        ');
    var _anchor_1 = ngAnchor.clone(false);
    _appEl_1 = new ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = new TemplateRef(_appEl_1, viewFactory_MenuItemGroupsComponent6);
    _NgIf_1_9 = new NgIf(_appEl_1, _TemplateRef_1_8);
    import3.Text _text_2 = new import3.Text('\n      ');
    init([_text_0, _appEl_1, _text_2], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuItemGroupsComponent _ctx = ctx;
    final local_item = locals['\$implicit'];
    _NgIf_1_9.ngIf = _ctx.isItemVisible(local_item);
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent5(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent5(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent6 extends AppView<import2.MenuItemGroupsComponent> {
  import3.Element _el_1;
  import20.ViewMaterialSelectItemComponent0 _compView_1;
  ViewContainer _appEl_1;
  import21.AutoFocusDirective _AutoFocusDirective_1_8;
  import22.FocusActivableItemDirective _FocusActivableItemDirective_1_9;
  import23.MaterialTooltipDirective _MaterialTooltipDirective_1_10;
  import24.MaterialSelectItemComponent _MaterialSelectItemComponent_1_11;
  import25.NgClass _NgClass_1_12;
  import26.PopupSourceDirective _PopupSourceDirective_1_13;
  import22.FocusActivableItemDirective _FocusableActivateItem_1_14;
  dynamic __TooltipController_1_17;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_9;
  ViewContainer _appEl_14;
  NgIf _NgIf_14_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  var _expr_4;
  var _expr_5;
  bool _expr_6;
  String _expr_7;
  var _expr_8;
  String _expr_9;
  bool _expr_10;
  bool _expr_11;
  bool _expr_12;
  var _expr_13;
  bool _expr_15;
  var _expr_16;
  var _expr_19;
  _ViewMenuItemGroupsComponent6(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  dynamic get _TooltipController_1_17 {
    if ((this.__TooltipController_1_17 == null)) {
      (__TooltipController_1_17 = import27.createTooltipController(this.parentView.parentView.parentView.parentView.parentView.injectorGet(import28.TooltipController, this.parentView.parentView.parentView.parentView.viewData.parentIndex, null), this.parentView.parentView.parentView.parentView.parentView.injectorGet(import29.Disposer, this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)));
    }
    return this.__TooltipController_1_17;
  }

  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    import3.Text _text_0 = new import3.Text('\n          ');
    _compView_1 = new import20.ViewMaterialSelectItemComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_1.className = 'menu-item item';
    createAttr(_el_1, 'closeOnActivate', 'false');
    createAttr(_el_1, 'popupSource', '');
    createAttr(_el_1, 'role', 'menuitem');
    createAttr(_el_1, 'useCheckMarks', 'true');
    addShimC(_el_1);
    _appEl_1 = new ViewContainer(1, null, this, _el_1);
    _AutoFocusDirective_1_8 = new import21.AutoFocusDirective(_el_1, parentView.parentView.parentView.parentView.parentView.injectorGet(import30.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGet(import21.Focusable, parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.injectorGet(import31.ModalComponent, parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.injectorGet(import32.PopupRef, parentView.parentView.parentView.parentView.viewData.parentIndex, null));
    _FocusActivableItemDirective_1_9 = new import22.FocusActivableItemDirective(_el_1);
    _MaterialTooltipDirective_1_10 = new import23.MaterialTooltipDirective(parentView.parentView.parentView.parentView.parentView.injectorGet(import33.DomPopupSourceFactory, parentView.parentView.parentView.parentView.viewData.parentIndex), _appEl_1, _el_1, _appEl_1, _compView_1.ref, parentView.parentView.parentView.parentView.parentView.injectorGet(import3.Window, parentView.parentView.parentView.parentView.viewData.parentIndex));
    _MaterialSelectItemComponent_1_11 = new import24.MaterialSelectItemComponent(_el_1, parentView.parentView.parentView.parentView.parentView.injectorGet(import30.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGet(import34.DropdownHandle, parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.injectorGet(import35.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_1.ref, 'menuitem');
    _NgClass_1_12 = new import25.NgClass(_el_1);
    _PopupSourceDirective_1_13 = new import26.PopupSourceDirective(parentView.parentView.parentView.parentView.parentView.injectorGet(import33.DomPopupSourceFactory, parentView.parentView.parentView.parentView.viewData.parentIndex), _el_1, parentView.parentView.parentView.parentView.parentView.injectorGet(import36.ReferenceDirective, parentView.parentView.parentView.parentView.viewData.parentIndex, null));
    _FocusableActivateItem_1_14 = _FocusActivableItemDirective_1_9;
    import3.Text _text_2 = new import3.Text('\n            ');
    var _anchor_3 = ngAnchor.clone(false);
    _appEl_3 = new ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_MenuItemGroupsComponent7);
    _NgIf_3_9 = new NgIf(_appEl_3, _TemplateRef_3_8);
    import3.Text _text_4 = new import3.Text('\n            ');
    var _anchor_5 = ngAnchor.clone(false);
    _appEl_5 = new ViewContainer(5, 1, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = new TemplateRef(_appEl_5, viewFactory_MenuItemGroupsComponent8);
    _NgIf_5_9 = new NgIf(_appEl_5, _TemplateRef_5_8);
    import3.Text _text_6 = new import3.Text('\n            ');
    var _anchor_7 = ngAnchor.clone(false);
    _appEl_7 = new ViewContainer(7, 1, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = new TemplateRef(_appEl_7, viewFactory_MenuItemGroupsComponent9);
    _NgIf_7_9 = new NgIf(_appEl_7, _TemplateRef_7_8);
    import3.Text _text_8 = new import3.Text('\n            ');
    var _anchor_9 = ngAnchor.clone(false);
    _appEl_9 = new ViewContainer(9, 1, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = new TemplateRef(_appEl_9, viewFactory_MenuItemGroupsComponent10);
    _NgIf_9_9 = new NgIf(_appEl_9, _TemplateRef_9_8);
    import3.Text _text_10 = new import3.Text('\n            ');
    var _anchor_11 = ngAnchor.clone(false);
    _appEl_11 = new ViewContainer(11, 1, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = new TemplateRef(_appEl_11, viewFactory_MenuItemGroupsComponent11);
    _NgIf_11_9 = new NgIf(_appEl_11, _TemplateRef_11_8);
    import3.Text _text_12 = new import3.Text('\n          ');
    _compView_1.create(_MaterialSelectItemComponent_1_11, [
      [_text_2, _appEl_3, _text_4, _appEl_5, _text_6, _appEl_7, _text_8, _appEl_9, _text_10, _appEl_11, _text_12]
    ]);
    import3.Text _text_13 = new import3.Text('\n          ');
    var _anchor_14 = ngAnchor.clone(false);
    _appEl_14 = new ViewContainer(14, null, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = new TemplateRef(_appEl_14, viewFactory_MenuItemGroupsComponent12);
    _NgIf_14_9 = new NgIf(_appEl_14, _TemplateRef_14_8);
    import3.Text _text_15 = new import3.Text('\n        ');
    final subscription_0 = _MaterialSelectItemComponent_1_11.trigger.listen(eventHandler1(_handle_trigger_1_0));
    init([_text_0, _appEl_1, _text_13, _appEl_14, _text_15], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import37.SelectionItem) || identical(token, import38.HasRenderer)) && ((1 <= nodeIndex) && (nodeIndex <= 12)))) {
      return _MaterialSelectItemComponent_1_11;
    }
    if ((identical(token, import22.FocusableActivateItem) && ((1 <= nodeIndex) && (nodeIndex <= 12)))) {
      return _FocusableActivateItem_1_14;
    }
    if ((identical(token, import28.TooltipController) && ((1 <= nodeIndex) && (nodeIndex <= 12)))) {
      return _TooltipController_1_17;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuItemGroupsComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final int local_i = parentView.parentView.parentView.locals['index'];
    final int local_j = parentView.locals['index'];
    final local_item = parentView.locals['\$implicit'];
    final import15.MenuItemGroup<dynamic> local_group = parentView.parentView.parentView.locals['\$implicit'];
    final currVal_6 = _ctx.hasAutoFocus(((_ctx.activeModel == null) ? null : _ctx.activeModel.id(local_item)));
    if (!identical(_expr_6, currVal_6)) {
      _AutoFocusDirective_1_8.autoFocus = currVal_6;
      _expr_6 = currVal_6;
    }
    if (firstCheck) {
      _AutoFocusDirective_1_8.ngOnInit();
    }
    final currVal_7 = ((_ctx.activeModel == null) ? null : _ctx.activeModel.id(local_item));
    if (!identical(_expr_7, currVal_7)) {
      _FocusActivableItemDirective_1_9.key = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.tooltipPositions;
    if (!identical(_expr_8, currVal_8)) {
      _MaterialTooltipDirective_1_10.positions = currVal_8;
      _expr_8 = currVal_8;
    }
    final currVal_9 = local_item.tooltip;
    if (!identical(_expr_9, currVal_9)) {
      _MaterialTooltipDirective_1_10.text = currVal_9;
      _expr_9 = currVal_9;
    }
    final currVal_10 = local_item.showTooltip;
    if (!identical(_expr_10, currVal_10)) {
      _MaterialTooltipDirective_1_10.canShow = currVal_10;
      _expr_10 = currVal_10;
    }
    if (firstCheck) {
      _MaterialTooltipDirective_1_10.ngOnInit();
    }
    if (firstCheck) {
      _MaterialSelectItemComponent_1_11.useCheckMarks = 'true';
      _MaterialSelectItemComponent_1_11.closeOnActivate = 'false';
    }
    final currVal_11 = _ctx.isItemActive(local_item);
    if (!identical(_expr_11, currVal_11)) {
      _MaterialSelectItemComponent_1_11.active = currVal_11;
      _expr_11 = currVal_11;
    }
    final bool currVal_12 = !local_item.enabled;
    if (!identical(_expr_12, currVal_12)) {
      _MaterialSelectItemComponent_1_11.disabled = currVal_12;
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.getItemValue(local_item);
    if (!identical(_expr_13, currVal_13)) {
      _MaterialSelectItemComponent_1_11.value = currVal_13;
      _expr_13 = currVal_13;
    }
    final currVal_15 = _ctx.shouldSelectItemOnClick(local_item);
    if (!identical(_expr_15, currVal_15)) {
      _MaterialSelectItemComponent_1_11.selectOnActivate = currVal_15;
      _expr_15 = currVal_15;
    }
    final currVal_16 = _ctx.getSelectionModel(local_group);
    if (!identical(_expr_16, currVal_16)) {
      _MaterialSelectItemComponent_1_11.selection = currVal_16;
      _expr_16 = currVal_16;
    }
    if (firstCheck) {
      (_NgClass_1_12.initialClasses = 'menu-item');
    }
    final currVal_19 = local_item.cssClasses;
    if (!identical(_expr_19, currVal_19)) {
      _NgClass_1_12.rawClass = currVal_19;
      _expr_19 = currVal_19;
    }
    _NgClass_1_12.ngDoCheck();
    _NgIf_3_9.ngIf = local_item.hasIcon;
    _NgIf_5_9.ngIf = _ctx.hasHighlight;
    _NgIf_7_9.ngIf = !_ctx.hasHighlight;
    _NgIf_9_9.ngIf = local_item.itemSuffixes.isNotEmpty;
    _NgIf_11_9.ngIf = local_item.hasSubMenu;
    _NgIf_14_9.ngIf = local_item.hasSubMenu;
    _appEl_1.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    _appEl_11.detectChangesInNestedViews();
    _appEl_14.detectChangesInNestedViews();
    final currVal_0 = local_i;
    if (!identical(_expr_0, currVal_0)) {
      setAttr(_el_1, 'data-group-index', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_j;
    if (!identical(_expr_1, currVal_1)) {
      setAttr(_el_1, 'data-item-index', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = ((_ctx.activeModel == null) ? null : _ctx.activeModel.id(local_item));
    if (!identical(_expr_2, currVal_2)) {
      setAttr(_el_1, 'id', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isSubMenuVisible(local_item);
    if (!identical(_expr_3, currVal_3)) {
      updateElemClass(_el_1, 'is-menu-parent', currVal_3);
      _expr_3 = currVal_3;
    }
    final bool currVal_4 = !local_item.enabled;
    if (!identical(_expr_4, currVal_4)) {
      setAttr(_el_1, 'aria-disabled', currVal_4?.toString());
      _expr_4 = currVal_4;
    }
    final currVal_5 = local_item.hasSubMenu;
    if (!identical(_expr_5, currVal_5)) {
      setAttr(_el_1, 'aria-haspopup', currVal_5?.toString());
      _expr_5 = currVal_5;
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    if (firstCheck) {
      _MaterialTooltipDirective_1_10.ngAfterViewInit();
    }
    if (firstCheck) {
      _PopupSourceDirective_1_13.ngAfterViewInit();
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView.parentView.parentView.parentView as ViewMenuItemGroupsComponent0)._query_AutoFocusDirective_1_0_isDirty = true;
    (parentView.parentView.parentView.parentView as ViewMenuItemGroupsComponent0)._query_FocusableActivateItem_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
    _appEl_5?.destroyNestedViews();
    _appEl_7?.destroyNestedViews();
    _appEl_9?.destroyNestedViews();
    _appEl_11?.destroyNestedViews();
    _appEl_14?.destroyNestedViews();
    _compView_1?.destroy();
    _AutoFocusDirective_1_8.ngOnDestroy();
    _MaterialTooltipDirective_1_10.ngOnDestroy();
    _MaterialSelectItemComponent_1_11.ngOnDestroy();
    _NgClass_1_12.ngOnDestroy();
    _PopupSourceDirective_1_13.ngOnDestroy();
  }

  void _handle_trigger_1_0($event) {
    final local_item = parentView.locals['\$implicit'];
    final import15.MenuItemGroup<dynamic> local_group = parentView.parentView.parentView.locals['\$implicit'];
    ctx.handleSelectItemTrigger(local_item, local_group, $event);
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent6(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent6(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent7 extends AppView<import2.MenuItemGroupsComponent> {
  import3.Element _el_0;
  import18.ViewMaterialIconComponent0 _compView_0;
  import19.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  _ViewMenuItemGroupsComponent7(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    _compView_0 = new import18.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'material-list-item-primary';
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = new import19.MaterialIconComponent(_el_0);
    import3.Text _text_1 = new import3.Text('\n            ');
    _compView_0.create(_MaterialIconComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    final local_item = parentView.parentView.locals['\$implicit'];
    changed = false;
    final currVal_0 = local_item.icon;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialIconComponent_0_5.icon = currVal_0;
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
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent7(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent7(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent8 extends AppView<import2.MenuItemGroupsComponent> {
  import3.Element _el_0;
  import3.Element _el_2;
  import39.ViewHighlightedTextComponent0 _compView_2;
  import40.HighlightedTextComponent _HighlightedTextComponent_2_5;
  var _expr_0;
  _ViewMenuItemGroupsComponent8(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'menu-item-label';
    addShimE(_el_0);
    import3.Text _text_1 = new import3.Text('\n              ');
    _el_0.append(_text_1);
    _compView_2 = new import39.ViewHighlightedTextComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    addShimC(_el_2);
    _HighlightedTextComponent_2_5 = new import40.HighlightedTextComponent();
    import3.Text _text_3 = new import3.Text('\n              ');
    _compView_2.create(_HighlightedTextComponent_2_5, []);
    import3.Text _text_4 = new import3.Text('\n            ');
    _el_0.append(_text_4);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuItemGroupsComponent _ctx = ctx;
    bool changed = false;
    final local_item = parentView.parentView.locals['\$implicit'];
    changed = false;
    final currVal_0 = _ctx.highlighted(local_item.uiDisplayName);
    if (!identical(_expr_0, currVal_0)) {
      _HighlightedTextComponent_2_5.segments = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2?.destroy();
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent8(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent8(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent9 extends AppView<import2.MenuItemGroupsComponent> {
  import3.Element _el_0;
  import3.Text _text_2;
  var _expr_0;
  _ViewMenuItemGroupsComponent9(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'menu-item-label';
    addShimE(_el_0);
    import3.Text _text_1 = new import3.Text('\n              ');
    _el_0.append(_text_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    import3.Text _text_3 = new import3.Text('\n            ');
    _el_0.append(_text_3);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final local_item = parentView.parentView.locals['\$implicit'];
    final currVal_0 = import11.interpolate0(local_item.uiDisplayName);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent9(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent9(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent10 extends AppView<import2.MenuItemGroupsComponent> {
  import3.Element _el_0;
  import41.ViewMenuItemAffixListComponent0 _compView_0;
  import42.MenuItemAffixListComponent _MenuItemAffixListComponent_0_5;
  bool _expr_0;
  var _expr_1;
  _ViewMenuItemGroupsComponent10(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    _compView_0 = new import41.ViewMenuItemAffixListComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'suffix-list';
    addShimC(_el_0);
    _MenuItemAffixListComponent_0_5 = new import42.MenuItemAffixListComponent(_compView_0.ref, parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import43.MenuRoot, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null));
    import3.Text _text_1 = new import3.Text('\n            ');
    _compView_0.create(_MenuItemAffixListComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    final local_item = parentView.parentView.locals['\$implicit'];
    changed = false;
    final bool currVal_0 = !local_item.enabled;
    if (!identical(_expr_0, currVal_0)) {
      _MenuItemAffixListComponent_0_5.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_item.itemSuffixes;
    if (!identical(_expr_1, currVal_1)) {
      _MenuItemAffixListComponent_0_5.items = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MenuItemAffixListComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent10(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent10(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent11 extends AppView<import2.MenuItemGroupsComponent> {
  import3.Element _el_0;
  import18.ViewMaterialIconComponent0 _compView_0;
  import19.MaterialIconComponent _MaterialIconComponent_0_5;
  _ViewMenuItemGroupsComponent11(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    _compView_0 = new import18.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'material-list-item-secondary submenu-icon';
    createAttr(_el_0, 'icon', 'arrow_drop_down');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = new import19.MaterialIconComponent(_el_0);
    import3.Text _text_1 = new import3.Text('\n            ');
    _compView_0.create(_MaterialIconComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_0_5.icon = 'arrow_drop_down';
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent11(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent11(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent12 extends AppView<import2.MenuItemGroupsComponent> {
  import3.Element _el_0;
  import44.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import45.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupRef_0_10;
  dynamic __PopupHierarchy_0_12;
  ViewContainer _appEl_2;
  import46.DeferredContentDirective _DeferredContentDirective_2_9;
  var _expr_2;
  var _expr_3;
  bool _expr_4;
  _ViewMenuItemGroupsComponent12(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  dynamic get _PopupRef_0_10 {
    if ((this.__PopupRef_0_10 == null)) {
      (__PopupRef_0_10 = import45.getResolvedPopupRef(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupRef_0_10;
  }

  dynamic get _PopupHierarchy_0_12 {
    if ((this.__PopupHierarchy_0_12 == null)) {
      (__PopupHierarchy_0_12 = import45.getHierarchy(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupHierarchy_0_12;
  }

  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    _compView_0 = new import44.ViewMaterialPopupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'enforceSpaceConstraints', '');
    addShimC(_el_0);
    _appEl_0 = new ViewContainer(0, null, this, _el_0);
    _MaterialPopupComponent_0_8 = new import45.MaterialPopupComponent(parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import47.PopupHierarchy, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import45.MaterialPopupComponent, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), null, parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import48.NgZone, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import49.OverlayService, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import50.ZIndexer, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const import51.OpaqueToken<List<import53.RelativePosition>>('defaultPopupPositions'), parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const import51.OpaqueToken('overlayRepositionLoop'), parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import54.PopupSizeProvider, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref, _appEl_0, new ElementRef(_el_0));
    import3.Text _text_1 = new import3.Text('\n            ');
    var _anchor_2 = ngAnchor.clone(false);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = new TemplateRef(_appEl_2, viewFactory_MenuItemGroupsComponent13);
    _DeferredContentDirective_2_9 = new import46.DeferredContentDirective(_appEl_2, _TemplateRef_2_8, _MaterialPopupComponent_0_8);
    import3.Text _text_3 = new import3.Text('\n          ');
    _compView_0.create(_MaterialPopupComponent_0_8, [
      const [],
      [_text_1, _appEl_2, _text_3],
      const []
    ]);
    final subscription_0 = _MaterialPopupComponent_0_8.onVisible.listen(eventHandler1(_handle_visibleChange_0_0));
    init([_appEl_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import45.MaterialPopupComponent) || identical(token, import56.DeferredContentAware)) || identical(token, import34.DropdownHandle)) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialPopupComponent_0_8;
    }
    if ((identical(token, import32.PopupRef) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupRef_0_10;
    }
    if ((identical(token, import47.PopupHierarchy) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupHierarchy_0_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuItemGroupsComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_subMenuSource = (parentView as _ViewMenuItemGroupsComponent6)._PopupSourceDirective_1_13;
    final local_item = parentView.parentView.locals['\$implicit'];
    if (firstCheck) {
      _MaterialPopupComponent_0_8.autoDismiss = false;
      _MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
    }
    final currVal_2 = _ctx.preferredSubMenuPositions;
    if (!identical(_expr_2, currVal_2)) {
      _MaterialPopupComponent_0_8.preferredPositions = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_subMenuSource;
    if (!identical(_expr_3, currVal_3)) {
      _MaterialPopupComponent_0_8.source = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.isSubMenuVisible(local_item);
    if (!identical(_expr_4, currVal_4)) {
      _MaterialPopupComponent_0_8.visible = currVal_4;
      _expr_4 = currVal_4;
    }
    if (firstCheck) {
      (_DeferredContentDirective_2_9.preserveDimensions = true);
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (firstCheck) {
      _MaterialPopupComponent_0_8.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _compView_0?.destroy();
    _DeferredContentDirective_2_9.ngOnDestroy();
    _MaterialPopupComponent_0_8.ngOnDestroy();
  }

  void _handle_visibleChange_0_0($event) {
    final local_item = parentView.parentView.locals['\$implicit'];
    ctx.onSubMenuVisibilityChanged(local_item, $event);
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent12(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent12(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent13 extends AppView<import2.MenuItemGroupsComponent> {
  import3.Element _el_0;
  import57.ViewMaterialListComponent0 _compView_0;
  import58.MaterialListComponent _MaterialListComponent_0_5;
  import3.Element _el_2;
  ViewMenuItemGroupsComponent0 _compView_2;
  import21.AutoFocusDirective _AutoFocusDirective_2_5;
  import2.MenuItemGroupsComponent _MenuItemGroupsComponent_2_6;
  var _expr_0;
  var _expr_2;
  var _expr_3;
  _ViewMenuItemGroupsComponent13(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemGroupsComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    _compView_0 = new import57.ViewMaterialListComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'item-group-list';
    addShimC(_el_0);
    _MaterialListComponent_0_5 = new import58.MaterialListComponent();
    import3.Text _text_1 = new import3.Text('\n              ');
    _compView_2 = new ViewMenuItemGroupsComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    createAttr(_el_2, 'autoFocus', '');
    addShimC(_el_2);
    _AutoFocusDirective_2_5 = new import21.AutoFocusDirective(_el_2, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import30.DomService, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import21.Focusable, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import31.ModalComponent, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), (parentView as _ViewMenuItemGroupsComponent12)._PopupRef_0_10);
    _MenuItemGroupsComponent_2_6 = new import2.MenuItemGroupsComponent(parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import43.MenuRoot, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_2.ref, (parentView as _ViewMenuItemGroupsComponent12)._MaterialPopupComponent_0_8, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import59.IdGenerator, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null));
    import3.Text _text_3 = new import3.Text('\n              ');
    _compView_2.create(_MenuItemGroupsComponent_2_6, []);
    import3.Text _text_4 = new import3.Text('\n            ');
    _compView_0.create(_MaterialListComponent_0_5, [
      [_text_1, _el_2, _text_4]
    ]);
    final subscription_0 = _MenuItemGroupsComponent_2_6.selected.listen(eventHandler1(ctx.onSubMenuItemSelected));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuItemGroupsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_item = parentView.parentView.parentView.locals['\$implicit'];
    changed = false;
    final currVal_0 = _ctx.menu.width;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialListComponent_0_5.width = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (_AutoFocusDirective_2_5.autoFocus = true);
    }
    if (firstCheck) {
      _AutoFocusDirective_2_5.ngOnInit();
    }
    changed = false;
    final currVal_2 = local_item.subMenu;
    if (!identical(_expr_2, currVal_2)) {
      _MenuItemGroupsComponent_2_6.menu = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isKeyboardOpenedSubmenu;
    if (!identical(_expr_3, currVal_3)) {
      _MenuItemGroupsComponent_2_6.activateFirstItemOnInit = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    if (firstCheck) {
      _MenuItemGroupsComponent_2_6.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_2.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView.parentView.parentView.parentView.parentView.parentView as ViewMenuItemGroupsComponent0)._query_AutoFocusDirective_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_2?.destroy();
    _AutoFocusDirective_2_5.ngOnDestroy();
    _MenuItemGroupsComponent_2_6.ngOnDestroy();
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponent13(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponent13(parentView, parentIndex);
}

const List<dynamic> styles$MenuItemGroupsComponentHost = const [];

class _ViewMenuItemGroupsComponentHost0 extends AppView<dynamic> {
  ViewMenuItemGroupsComponent0 _compView_0;
  import2.MenuItemGroupsComponent _MenuItemGroupsComponent_0_5;
  _ViewMenuItemGroupsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMenuItemGroupsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MenuItemGroupsComponent_0_5 = new import2.MenuItemGroupsComponent(this.injectorGet(import43.MenuRoot, viewData.parentIndex), _compView_0.ref, this.injectorGet(import34.DropdownHandle, viewData.parentIndex, null), this.injectorGet(import59.IdGenerator, viewData.parentIndex, null));
    _compView_0.create(_MenuItemGroupsComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MenuItemGroupsComponent>(0, this, rootEl, _MenuItemGroupsComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      _MenuItemGroupsComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MenuItemGroupsComponent_0_5.ngOnDestroy();
  }
}

AppView viewFactory_MenuItemGroupsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMenuItemGroupsComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MenuItemGroupsComponent> MenuItemGroupsComponentNgFactory = const ComponentFactory<import2.MenuItemGroupsComponent>('menu-item-groups', viewFactory_MenuItemGroupsComponentHost0, _MenuItemGroupsComponentMetadata);
const _MenuItemGroupsComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MenuItemGroupsComponent, MenuItemGroupsComponentNgFactory);
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
}
