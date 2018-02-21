// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'focus_item.dart';
export 'focus_item.dart';
import 'dart:async';
import 'dart:html' show KeyboardEvent, HtmlElement;
import 'package:angular/angular.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'focus_item.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dart:html' as import3;

class FocusItemDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.FocusItemDirective instance;
  var _expr_0;
  FocusItemDirectiveNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    bool firstCheck = (view.cdState == 0);
    if (firstCheck) {
      if (!identical(instance.role, null)) {
        setAttr(el, 'role', instance.role?.toString());
      }
    }
    final currVal_0 = instance.tabIndex;
    if (!identical(_expr_0, currVal_0)) {
      setAttr(el, 'tabindex', currVal_0?.toString());
      _expr_0 = currVal_0;
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
}
