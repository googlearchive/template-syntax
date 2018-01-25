// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'overlay_service.dart';
export 'overlay_service.dart';
import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'package:angular/angular.dart';
import 'package:logging/logging.dart';
import 'package:angular_components/src/laminate/overlay/overlay_ref.dart';
import 'package:angular_components/src/laminate/overlay/overlay_state.dart';
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/src/laminate/overlay/overlay_ref.template.dart' as _ref1;
import 'package:angular_components/src/laminate/overlay/overlay_state.template.dart' as _ref2;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.template.dart' as _ref3;

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
  _ngRef.registerFactory(
    OverlayService,
    (NgZone p0, bool p1, OverlayDomRenderService p2, OverlayService p3) => new OverlayService(p0, p1, p2, p3),
  );
  _ngRef.registerDependencies(
    OverlayService,
    const [
      const [
        NgZone,
      ],
      const [
        const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>(r'overlaySyncDom')),
      ],
      const [
        OverlayDomRenderService,
      ],
      const [
        OverlayService,
        const _ngRef.SkipSelf(),
        const _ngRef.Optional(),
      ],
    ],
  );
}
