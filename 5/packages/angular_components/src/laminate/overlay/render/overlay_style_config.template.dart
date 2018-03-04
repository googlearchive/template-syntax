// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'overlay_style_config.dart';
export 'overlay_style_config.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'dart:html' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(OverlayStyleConfig, (_i1.Document p0) => new OverlayStyleConfig(p0));
  _ngRef.registerDependencies(OverlayStyleConfig, const [
    const [_i1.Document]
  ]);
  _ref0.initReflector();
}
