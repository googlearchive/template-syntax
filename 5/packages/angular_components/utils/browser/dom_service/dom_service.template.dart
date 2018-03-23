// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'dom_service.dart';
export 'dom_service.dart';
import 'dart:async';
import 'dart:html';
import 'dart:math' show max, min;
import 'package:angular/angular.dart';
import 'package:meta/meta.dart';
import 'package:angular_components/utils/async/async.dart';
import 'package:angular_components/utils/disposer/disposable_callback.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/async/async.template.dart' as _ref1;
import 'package:angular_components/utils/disposer/disposable_callback.template.dart' as _ref2;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref3;

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
}
