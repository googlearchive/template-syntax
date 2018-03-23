// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'model.dart';
export 'model.dart';
import 'package:angular/di.dart';
import 'package:angular_components/model/observable/observable.dart';
import 'comparison.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'comparison.template.dart' as _ref0;
import 'comparison.template.dart' as _ref1;
import 'package:angular/di.template.dart' as _ref2;
import 'package:angular_components/model/observable/observable.template.dart' as _ref3;
import 'range.template.dart' as _ref4;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(DatepickerModel, () => new DatepickerModel());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
