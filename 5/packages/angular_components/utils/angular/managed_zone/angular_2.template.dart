// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'angular_2.dart';
export 'angular_2.dart';
import 'dart:async';
import 'package:angular/di.dart';
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/di.template.dart' as _ref0;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.template.dart' as _ref1;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.template.dart' as _ref2;
import 'package:angular/src/core/zone/ng_zone.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(Angular2ManagedZone, (_i1.NgZone p0) => new Angular2ManagedZone(p0));
  _ngRef.registerDependencies(Angular2ManagedZone, const [
    const [_i1.NgZone]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
