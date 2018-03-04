// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'has_factory.dart';
export 'has_factory.dart';
import 'package:angular/angular.dart' show ComponentFactory;
import 'has_renderer.dart';
import 'has_renderer.template.dart' as _ref0;
import 'has_renderer.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
