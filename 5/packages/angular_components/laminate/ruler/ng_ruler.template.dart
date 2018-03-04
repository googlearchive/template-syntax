// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'ng_ruler.dart';
export 'ng_ruler.dart';
import 'dart:async';
import 'dart:math';
import 'package:angular/angular.dart' hide Visibility;
import 'package:angular_components/laminate/enums/position.dart';
import 'package:angular_components/laminate/enums/visibility.dart';
import 'package:angular_components/laminate/ruler/dom_ruler.dart';
import 'package:angular_components/src/laminate/ruler/ruler_interface.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/laminate/enums/position.template.dart' as _ref1;
import 'package:angular_components/laminate/enums/visibility.template.dart' as _ref2;
import 'package:angular_components/laminate/ruler/dom_ruler.template.dart' as _ref3;
import 'package:angular_components/src/laminate/ruler/ruler_interface.template.dart' as _ref4;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(NgRuler, (_i1.DomRuler p0) => new NgRuler(p0));
  _ngRef.registerDependencies(NgRuler, const [
    const [_i1.DomRuler]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
