// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'module.dart';
export 'module.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/src/laminate/overlay/overlay_service.dart';
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart';
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart';
import 'package:angular_components/laminate/overlay/zindexer.dart';
import 'package:angular_components/laminate/ruler/dom_ruler.dart';
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart';
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart';
import 'package:angular_components/utils/browser/dom_service/angular_2.dart';
import 'package:angular_components/utils/browser/window/module.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/laminate/overlay/zindexer.template.dart' as _ref1;
import 'package:angular_components/laminate/ruler/dom_ruler.template.dart' as _ref2;
import 'package:angular_components/src/laminate/overlay/overlay_service.template.dart' as _ref3;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.template.dart' as _ref4;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.template.dart' as _ref5;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.template.dart' as _ref6;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.template.dart' as _ref7;
import 'package:angular_components/utils/angular/managed_zone/angular_2.template.dart' as _ref8;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref9;
import 'package:angular_components/utils/browser/window/module.template.dart' as _ref10;
import 'dart:html' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerDependencies(getDefaultContainer, const [
    const [const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>('overlayContainerName'))],
    const [const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>('overlayContainerParent'))],
    const [const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>('overlayContainer')), const _ngRef.SkipSelf(), const _ngRef.Optional()]
  ]);
  _ngRef.registerDependencies(getDefaultContainerName, const [
    const [const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>('overlayContainerName')), const _ngRef.SkipSelf(), const _ngRef.Optional()]
  ]);
  _ngRef.registerDependencies(getDebugContainer, const [
    const [const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>('overlayContainerName'))],
    const [const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>('overlayContainerParent'))]
  ]);
  _ngRef.registerDependencies(getOverlayContainerParent, const [
    const [_i1.Document],
    const [const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>('overlayContainerParent')), const _ngRef.SkipSelf(), const _ngRef.Optional()]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
}
