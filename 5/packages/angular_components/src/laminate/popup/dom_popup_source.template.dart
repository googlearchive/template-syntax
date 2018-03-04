// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'dom_popup_source.dart';
export 'dom_popup_source.dart';
import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'package:angular/angular.dart';
import 'package:angular_components/annotations/rtl_annotation.dart';
import 'package:angular_components/laminate/enums/alignment.dart';
import 'package:angular_components/src/laminate/popup/popup_source.dart';
import 'package:angular_components/laminate/ruler/dom_ruler.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/annotations/rtl_annotation.template.dart' as _ref1;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref2;
import 'package:angular_components/laminate/ruler/dom_ruler.template.dart' as _ref3;
import 'package:angular_components/src/laminate/popup/popup_source.template.dart' as _ref4;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(DomPopupSourceFactory, (_i1.DomRuler p0) => new DomPopupSourceFactory(p0));
  _ngRef.registerDependencies(DomPopupSourceFactory, const [
    const [_i1.DomRuler]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
