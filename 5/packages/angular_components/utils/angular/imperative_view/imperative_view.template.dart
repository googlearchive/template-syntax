// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'imperative_view.dart';
export 'imperative_view.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref1;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref2;
import 'package:angular/src/core/linker/component_loader.dart' as _i1;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as _i2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(AcxImperativeViewUtils, (_i1.ComponentLoader p0, _i2.DomService p1) => new AcxImperativeViewUtils(p0, p1));
  _ngRef.registerDependencies(AcxImperativeViewUtils, const [
    const [_i1.ComponentLoader],
    const [_i2.DomService]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
