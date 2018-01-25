// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'dom_ruler.dart';
export 'dom_ruler.dart';
import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'package:angular/angular.dart';
import 'package:angular_components/src/laminate/ruler/ruler_interface.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/src/laminate/ruler/ruler_interface.template.dart' as _ref1;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ngRef.registerFactory(
    DomRuler,
    (Document p0, DomService p1) => new DomRuler(p0, p1),
  );
  _ngRef.registerDependencies(
    DomRuler,
    const [
      const [
        Document,
      ],
      const [
        DomService,
      ],
    ],
  );

  _ngRef.registerFactory(
    DomRulerImpl,
    (Document p0, DomService p1) => new DomRulerImpl(p0, p1),
  );
  _ngRef.registerDependencies(
    DomRulerImpl,
    const [
      const [
        Document,
      ],
      const [
        DomService,
      ],
    ],
  );
}
