// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'glyph.dart';
export 'glyph.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/icon.template.dart' as _ref1;
import 'package:angular_components/glyph/glyph.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'glyph.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/angular.dart';

const List<dynamic> styles$GlyphComponent = const [import0.styles];

class ViewGlyphComponent0 extends AppView<import2.GlyphComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewGlyphComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('glyph');
    _renderType ??= import7.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$GlyphComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.GlyphComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'i', parentRenderNode);
    createAttr(_el_0, 'aria-hidden', 'true');
    _el_0.className = 'glyph-i';
    addShimE(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.GlyphComponent _ctx = ctx;
    final currVal_0 = _ctx.useMaterialIconsExtended;
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'material-icons', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.iconName ?? '');
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.GlyphComponent> viewFactory_GlyphComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewGlyphComponent0(parentView, parentIndex);
}

const List<dynamic> styles$GlyphComponentHost = const [];

class _ViewGlyphComponentHost0 extends AppView<dynamic> {
  ViewGlyphComponent0 _compView_0;
  import2.GlyphComponent _GlyphComponent_0_5;
  _ViewGlyphComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewGlyphComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _GlyphComponent_0_5 = new import2.GlyphComponent(rootEl);
    _compView_0.create(_GlyphComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.GlyphComponent>(0, this, rootEl, _GlyphComponent_0_5);
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

AppView viewFactory_GlyphComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewGlyphComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.GlyphComponent> GlyphComponentNgFactory = const ComponentFactory<import2.GlyphComponent>('glyph', viewFactory_GlyphComponentHost0, _GlyphComponentMetadata);
const _GlyphComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(GlyphComponent, GlyphComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
