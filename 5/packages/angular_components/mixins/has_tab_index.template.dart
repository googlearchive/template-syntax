// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'has_tab_index.dart';
export 'has_tab_index.dart';
import 'package:angular/angular.dart';
import 'package:quiver/strings.dart' show isBlank;
import 'package:angular_components/utils/angular/properties/properties.dart' show getInt;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
