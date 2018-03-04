// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'events.dart';
export 'events.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:js/js.dart';
import 'package:js/js_util.dart' as js_util;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
