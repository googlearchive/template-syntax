// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_temporary_drawer.dart';
export 'material_temporary_drawer.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/content/deferred_content_aware.dart';
import 'material_drawer_base.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_drawer_base.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref2;
import 'package:angular_components/app_layout/material_temporary_drawer.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_temporary_drawer.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/angular.dart';
import '../content/deferred_content_aware.dart' as import9;

const List<dynamic> styles$MaterialTemporaryDrawerComponent = const [import0.styles];

class ViewMaterialTemporaryDrawerComponent0 extends AppView<import2.MaterialTemporaryDrawerComponent> {
  import3.DivElement _el_0;
  bool _expr_0;
  bool _expr_1;
  static RenderComponentType _renderType;
  ViewMaterialTemporaryDrawerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-drawer');
    _renderType ??= import7.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialTemporaryDrawerComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialTemporaryDrawerComponent> build() {
    final import2.MaterialTemporaryDrawerComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'drawer-content';
    addShimC(_el_0);
    project(_el_0, 0);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init(const [], null);
    _rootEl.addEventListener('click', eventHandler0(_ctx.toggle));
    return null;
  }

  void _handle_click_0_0($event) {
    $event.stopPropagation();
  }

  void detectHostChanges(bool firstCheck) {
    final bool currVal_0 = !ctx.visible;
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(rootEl, 'mat-drawer-collapsed', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = ctx.visible;
    if (!identical(_expr_1, currVal_1)) {
      updateElemClass(rootEl, 'mat-drawer-expanded', currVal_1);
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.MaterialTemporaryDrawerComponent> viewFactory_MaterialTemporaryDrawerComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewMaterialTemporaryDrawerComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialTemporaryDrawerComponentHost = const [];

class _ViewMaterialTemporaryDrawerComponentHost0 extends AppView<dynamic> {
  ViewMaterialTemporaryDrawerComponent0 _compView_0;
  import2.MaterialTemporaryDrawerComponent _MaterialTemporaryDrawerComponent_0_5;
  _ViewMaterialTemporaryDrawerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialTemporaryDrawerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTemporaryDrawerComponent_0_5 = new import2.MaterialTemporaryDrawerComponent();
    _compView_0.create(_MaterialTemporaryDrawerComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialTemporaryDrawerComponent>(0, this, rootEl, _MaterialTemporaryDrawerComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.MaterialTemporaryDrawerComponent) || identical(token, import9.DeferredContentAware)) && (0 == nodeIndex))) {
      return _MaterialTemporaryDrawerComponent_0_5;
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
    if (firstCheck) {
      _MaterialTemporaryDrawerComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_MaterialTemporaryDrawerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewMaterialTemporaryDrawerComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialTemporaryDrawerComponent> MaterialTemporaryDrawerComponentNgFactory = const ComponentFactory<import2.MaterialTemporaryDrawerComponent>('material-drawer[temporary]', viewFactory_MaterialTemporaryDrawerComponentHost0, _MaterialTemporaryDrawerComponentMetadata);
const _MaterialTemporaryDrawerComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTemporaryDrawerComponent, MaterialTemporaryDrawerComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
