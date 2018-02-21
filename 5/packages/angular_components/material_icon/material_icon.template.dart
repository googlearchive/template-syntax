// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_icon.dart';
export 'material_icon.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/icon.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_icon.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/angular.dart';

const List<dynamic> styles$MaterialIconComponent = const [import0.styles];

class ViewMaterialIconComponent0 extends AppView<import2.MaterialIconComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewMaterialIconComponent0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-icon');
    _renderType ??= import7.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$MaterialIconComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialIconComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'i', parentRenderNode);
    createAttr(_el_0, 'aria-hidden', 'true');
    _el_0.className = 'material-icon-i material-icons';
    addShimE(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialIconComponent _ctx = ctx;
    final currVal_0 = (_ctx.iconName ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialIconComponent> viewFactory_MaterialIconComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewMaterialIconComponent0(parentView, parentIndex);
}

const List<dynamic> styles$MaterialIconComponentHost = const [];

class _ViewMaterialIconComponentHost0 extends AppView<dynamic> {
  ViewMaterialIconComponent0 _compView_0;
  import2.MaterialIconComponent _MaterialIconComponent_0_4;
  _ViewMaterialIconComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewMaterialIconComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialIconComponent_0_4 = new import2.MaterialIconComponent(rootEl);
    _compView_0.create(_MaterialIconComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.MaterialIconComponent>(0, this, rootEl, _MaterialIconComponent_0_4);
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
  }
}

AppView viewFactory_MaterialIconComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewMaterialIconComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialIconComponent> MaterialIconComponentNgFactory = const ComponentFactory<import2.MaterialIconComponent>('material-icon', viewFactory_MaterialIconComponentHost0, _MaterialIconComponentMetadata);
const _MaterialIconComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialIconComponent, MaterialIconComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
