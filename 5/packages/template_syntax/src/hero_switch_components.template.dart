// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_switch_components.dart';
export 'hero_switch_components.dart';
import 'package:angular/angular.dart';
import 'hero.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_switch_components.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';

const List<dynamic> styles$HappyHeroComponent = const [];

class ViewHappyHeroComponent0 extends AppView<import1.HappyHeroComponent> {
  import2.Text _text_1;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewHappyHeroComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('happy-hero');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$HappyHeroComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HappyHeroComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    import2.Text _text_0 = new import2.Text('Wow. You like ');
    parentRenderNode.append(_text_0);
    _text_1 = new import2.Text('');
    parentRenderNode.append(_text_1);
    import2.Text _text_2 = new import2.Text('. What a happy hero ... just like you.');
    parentRenderNode.append(_text_2);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.HappyHeroComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.HappyHeroComponent> viewFactory_HappyHeroComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewHappyHeroComponent0(parentView, parentIndex);
}

const List<dynamic> styles$HappyHeroComponentHost = const [];

class _ViewHappyHeroComponentHost0 extends AppView<dynamic> {
  ViewHappyHeroComponent0 _compView_0;
  import1.HappyHeroComponent _HappyHeroComponent_0_5;
  _ViewHappyHeroComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHappyHeroComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HappyHeroComponent_0_5 = new import1.HappyHeroComponent();
    _compView_0.create(_HappyHeroComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HappyHeroComponent>(0, this, rootEl, _HappyHeroComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_HappyHeroComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHappyHeroComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HappyHeroComponent> HappyHeroComponentNgFactory = const ComponentFactory<import1.HappyHeroComponent>('happy-hero', viewFactory_HappyHeroComponentHost0, _HappyHeroComponentMetadata);
const List<dynamic> styles$SadHeroComponent = const [];

class ViewSadHeroComponent0 extends AppView<import1.SadHeroComponent> {
  import2.Text _text_1;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewSadHeroComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('sad-hero');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$SadHeroComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.SadHeroComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    import2.Text _text_0 = new import2.Text('You like ');
    parentRenderNode.append(_text_0);
    _text_1 = new import2.Text('');
    parentRenderNode.append(_text_1);
    import2.Text _text_2 = new import2.Text('? Such a sad hero. Are you sad too?');
    parentRenderNode.append(_text_2);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.SadHeroComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.SadHeroComponent> viewFactory_SadHeroComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewSadHeroComponent0(parentView, parentIndex);
}

const List<dynamic> styles$SadHeroComponentHost = const [];

class _ViewSadHeroComponentHost0 extends AppView<dynamic> {
  ViewSadHeroComponent0 _compView_0;
  import1.SadHeroComponent _SadHeroComponent_0_5;
  _ViewSadHeroComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewSadHeroComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SadHeroComponent_0_5 = new import1.SadHeroComponent();
    _compView_0.create(_SadHeroComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.SadHeroComponent>(0, this, rootEl, _SadHeroComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_SadHeroComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSadHeroComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.SadHeroComponent> SadHeroComponentNgFactory = const ComponentFactory<import1.SadHeroComponent>('sad-hero', viewFactory_SadHeroComponentHost0, _SadHeroComponentMetadata);
const List<dynamic> styles$ConfusedHeroComponent = const [];

class ViewConfusedHeroComponent0 extends AppView<import1.ConfusedHeroComponent> {
  import2.Text _text_1;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewConfusedHeroComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('confused-hero');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ConfusedHeroComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ConfusedHeroComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    import2.Text _text_0 = new import2.Text('Are you as confused as ');
    parentRenderNode.append(_text_0);
    _text_1 = new import2.Text('');
    parentRenderNode.append(_text_1);
    import2.Text _text_2 = new import2.Text('?');
    parentRenderNode.append(_text_2);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.ConfusedHeroComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ConfusedHeroComponent> viewFactory_ConfusedHeroComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewConfusedHeroComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ConfusedHeroComponentHost = const [];

class _ViewConfusedHeroComponentHost0 extends AppView<dynamic> {
  ViewConfusedHeroComponent0 _compView_0;
  import1.ConfusedHeroComponent _ConfusedHeroComponent_0_5;
  _ViewConfusedHeroComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewConfusedHeroComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ConfusedHeroComponent_0_5 = new import1.ConfusedHeroComponent();
    _compView_0.create(_ConfusedHeroComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ConfusedHeroComponent>(0, this, rootEl, _ConfusedHeroComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_ConfusedHeroComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewConfusedHeroComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ConfusedHeroComponent> ConfusedHeroComponentNgFactory = const ComponentFactory<import1.ConfusedHeroComponent>('confused-hero', viewFactory_ConfusedHeroComponentHost0, _ConfusedHeroComponentMetadata);
const List<dynamic> styles$UnknownHeroComponent = const [];

class ViewUnknownHeroComponent0 extends AppView<import1.UnknownHeroComponent> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewUnknownHeroComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('unknown-hero');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$UnknownHeroComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.UnknownHeroComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.UnknownHeroComponent _ctx = ctx;
    final currVal_0 = (_ctx.message ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.UnknownHeroComponent> viewFactory_UnknownHeroComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewUnknownHeroComponent0(parentView, parentIndex);
}

const List<dynamic> styles$UnknownHeroComponentHost = const [];

class _ViewUnknownHeroComponentHost0 extends AppView<dynamic> {
  ViewUnknownHeroComponent0 _compView_0;
  import1.UnknownHeroComponent _UnknownHeroComponent_0_5;
  _ViewUnknownHeroComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewUnknownHeroComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _UnknownHeroComponent_0_5 = new import1.UnknownHeroComponent();
    _compView_0.create(_UnknownHeroComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.UnknownHeroComponent>(0, this, rootEl, _UnknownHeroComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_UnknownHeroComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewUnknownHeroComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.UnknownHeroComponent> UnknownHeroComponentNgFactory = const ComponentFactory<import1.UnknownHeroComponent>('unknown-hero', viewFactory_UnknownHeroComponentHost0, _UnknownHeroComponentMetadata);
const _HappyHeroComponentMetadata = const [];
const _SadHeroComponentMetadata = const [];
const _ConfusedHeroComponentMetadata = const [];
const _UnknownHeroComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HappyHeroComponent, HappyHeroComponentNgFactory);
  _ngRef.registerComponent(SadHeroComponent, SadHeroComponentNgFactory);
  _ngRef.registerComponent(ConfusedHeroComponent, ConfusedHeroComponentNgFactory);
  _ngRef.registerComponent(UnknownHeroComponent, UnknownHeroComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
