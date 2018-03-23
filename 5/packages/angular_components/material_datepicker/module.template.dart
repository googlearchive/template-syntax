// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'module.dart';
export 'module.dart';
import 'package:angular/angular.dart';
import 'package:quiver/time.dart';
import 'package:angular_components/laminate/popup/module.dart';
import 'package:angular_components/model/date/date.dart';
import 'package:angular_components/model/date/time_zone_aware_clock.dart';
import 'model.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'model.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/laminate/popup/module.template.dart' as _ref2;
import 'package:angular_components/model/date/date.template.dart' as _ref3;
import 'package:angular_components/model/date/time_zone_aware_clock.template.dart' as _ref4;
import 'package:angular/src/core/di/opaque_token.dart' as _i1;
import 'package:angular_components/material_datepicker/model.dart' as _i2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerDependencies(modelFactory, const [
    const [const _ngRef.Inject(const _i1.OpaqueToken<dynamic>('defaultDateComparison')), const _ngRef.Optional()],
    const [const _ngRef.Inject(const _i1.OpaqueToken<dynamic>('defaultDateRange')), const _ngRef.Optional()]
  ]);
  _ngRef.registerDependencies(selectionFactory, const [
    const [_i2.DatepickerModel]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
