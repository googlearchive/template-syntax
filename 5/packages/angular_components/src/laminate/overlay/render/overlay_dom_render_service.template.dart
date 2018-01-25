// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
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
// Required for initReflector().
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

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ngRef.registerFactory(
    OverlayDomRenderService,
    (OverlayStyleConfig p0, HtmlElement p1, String p2, DomRuler p3, DomService p4, AcxImperativeViewUtils p5, bool p6, bool p7, ZIndexer p8) => new OverlayDomRenderService(p0, p1, p2, p3, p4, p5, p6, p7, p8),
  );
  _ngRef.registerDependencies(
    OverlayDomRenderService,
    const [
      const [
        OverlayStyleConfig,
      ],
      const [
        const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>(r'overlayContainer')),
      ],
      const [
        const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>(r'overlayContainerName')),
      ],
      const [
        DomRuler,
      ],
      const [
        DomService,
      ],
      const [
        AcxImperativeViewUtils,
      ],
      const [
        const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>(r'overlaySyncDom')),
      ],
      const [
        const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>(r'overlayRepositionLoop')),
      ],
      const [
        ZIndexer,
      ],
    ],
  );
}
