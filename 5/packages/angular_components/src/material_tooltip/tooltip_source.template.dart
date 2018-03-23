// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'tooltip_source.dart';
export 'tooltip_source.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:angular_components/laminate/popup/popup.dart' show DomPopupSourceFactory, PopupSourceDirective, PopupRef;
import 'package:angular_components/model/action/delayed_action.dart';
import 'package:angular_components/model/ui/toggle.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref1;
import 'package:angular_components/model/action/delayed_action.template.dart' as _ref2;
import 'package:angular_components/model/ui/toggle.template.dart' as _ref3;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'tooltip_source.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dart:html' as import3;

class MaterialTooltipSourceDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.MaterialTooltipSourceDirective instance;
  MaterialTooltipSourceDirectiveNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    bool firstCheck = (view.cdState == 0);
    if (firstCheck) {
      el.style.setProperty('cursor', 'pointer'?.toString());
    }
  }
}

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
