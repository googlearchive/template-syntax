// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'debounce_stream.dart';
export 'debounce_stream.dart';
import 'dart:async';
import 'package:angular_components/utils/rate_limit_utils/rate_limit_utils.dart' show debounce;
import 'rate_limit.dart';
import 'package:angular_components/utils/rate_limit_utils/rate_limit_utils.template.dart' as _ref0;
import 'rate_limit.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
