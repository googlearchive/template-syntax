// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'module.dart';
export 'module.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/src/material_tooltip/tooltip_controller.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/src/material_tooltip/tooltip_controller.template.dart' as _ref1;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ngRef.registerDependencies(
    createTooltipController,
    const [
      const [
        TooltipController,
        const _ngRef.SkipSelf(),
        const _ngRef.Optional(),
      ],
      const [
        Disposer,
        const _ngRef.Optional(),
      ],
    ],
  );
}
