// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'angular_2.dart';
export 'angular_2.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular/experimental.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service_webdriver_testability.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/experimental.template.dart' as _ref1;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref2;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref3;
import 'package:angular_components/utils/browser/dom_service/dom_service_webdriver_testability.template.dart' as _ref4;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref5;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as _i1;
import 'package:angular_components/utils/disposer/disposer.dart' as _i2;
import 'package:angular/src/core/zone/ng_zone.dart' as _i3;
import 'dart:html' as _i4;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerDependencies(createDomService, const [
    const [_i1.DomService, const _ngRef.SkipSelf(), const _ngRef.Optional()],
    const [_i2.Disposer, const _ngRef.Optional()],
    const [_i3.NgZone],
    const [_i4.Window]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
