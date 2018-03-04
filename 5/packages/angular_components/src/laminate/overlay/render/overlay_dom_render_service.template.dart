// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'overlay_dom_render_service.dart';
export 'overlay_dom_render_service.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart' hide Visibility;
import 'package:angular_components/laminate/enums/visibility.dart';
import 'package:angular_components/src/laminate/overlay/overlay_state.dart';
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart';
import 'package:angular_components/laminate/overlay/zindexer.dart';
import 'package:angular_components/laminate/portal/portal.dart';
import 'package:angular_components/laminate/ruler/dom_ruler.dart';
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/laminate/enums/visibility.template.dart' as _ref1;
import 'package:angular_components/laminate/overlay/zindexer.template.dart' as _ref2;
import 'package:angular_components/laminate/portal/portal.template.dart' as _ref3;
import 'package:angular_components/laminate/ruler/dom_ruler.template.dart' as _ref4;
import 'package:angular_components/src/laminate/overlay/overlay_state.template.dart' as _ref5;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.template.dart' as _ref6;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.template.dart' as _ref7;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref8;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as _i1;
import 'dart:html' as _i2;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as _i3;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as _i4;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as _i5;
import 'package:angular_components/laminate/overlay/zindexer.dart' as _i6;
import 'package:angular/src/core/di/opaque_token.dart' as _i7;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(OverlayDomRenderService, (_i1.OverlayStyleConfig p0, _i2.HtmlElement p1, String p2, _i3.DomRuler p3, _i4.DomService p4, _i5.AcxImperativeViewUtils p5, bool p6, bool p7, _i6.ZIndexer p8) => new OverlayDomRenderService(p0, p1, p2, p3, p4, p5, p6, p7, p8));
  _ngRef.registerDependencies(OverlayDomRenderService, const [
    const [_i1.OverlayStyleConfig],
    const [const _ngRef.Inject(const _i7.OpaqueToken<dynamic>('overlayContainer'))],
    const [const _ngRef.Inject(const _i7.OpaqueToken<dynamic>('overlayContainerName'))],
    const [_i3.DomRuler],
    const [_i4.DomService],
    const [_i5.AcxImperativeViewUtils],
    const [const _ngRef.Inject(const _i7.OpaqueToken<dynamic>('overlaySyncDom'))],
    const [const _ngRef.Inject(const _i7.OpaqueToken<dynamic>('overlayRepositionLoop'))],
    const [_i6.ZIndexer]
  ]);
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
