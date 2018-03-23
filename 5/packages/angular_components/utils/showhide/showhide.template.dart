// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'showhide.dart';
export 'showhide.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:async/async.dart' show StreamQueue;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
