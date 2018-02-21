// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'button_decorator.dart';
export 'button_decorator.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/mixins/has_tab_index.dart';
import 'package:angular_components/utils/browser/events/events.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/mixins/has_tab_index.template.dart' as _ref2;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref3;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'button_decorator.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dart:html' as import3;

class ButtonDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.ButtonDirective instance;
  var _expr_0;
  var _expr_1;
  bool _expr_2;
  ButtonDirectiveNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    final currVal_0 = instance.tabIndex;
    if (!identical(_expr_0, currVal_0)) {
      setProp(el, 'tabIndex', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = instance.disabledStr;
    if (!identical(_expr_1, currVal_1)) {
      setAttr(el, 'aria-disabled', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = instance.disabled;
    if (!identical(_expr_2, currVal_2)) {
      updateElemClass(el, 'is-disabled', currVal_2);
      _expr_2 = currVal_2;
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
