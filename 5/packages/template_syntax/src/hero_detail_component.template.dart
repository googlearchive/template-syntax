// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_detail_component.dart';
export 'hero_detail_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'hero.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_detail_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';
import 'package:angular/src/common/pipes/date_pipe.dart' as import8;
import 'dart:core';
import 'package:angular/src/common/pipes/number_pipe.dart' as import10;

const List<dynamic> styles$HeroDetailComponent = const ['button._ngcontent-%COMP% { margin-left:8px; } div._ngcontent-%COMP% { margin:8px 0; } img._ngcontent-%COMP% { height:24px; }'];

class ViewHeroDetailComponent0 extends AppView<import1.HeroDetailComponent> {
  import2.DivElement _el_0;
  import2.Element _el_1;
  import2.Element _el_2;
  import2.Text _text_3;
  import2.Text _text_5;
  import2.ButtonElement _el_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewHeroDetailComponent0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('hero-detail');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$HeroDetailComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroDetailComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'img', _el_0);
    addShimE(_el_1);
    _el_2 = createSpanAndAppend(doc, _el_0);
    addShimE(_el_2);
    _text_3 = new import2.Text('');
    _el_2.append(_text_3);
    import2.Text _text_4 = new import2.Text(' ');
    _el_2.append(_text_4);
    _text_5 = new import2.Text('');
    _el_2.append(_text_5);
    _el_6 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_6);
    import2.Text _text_7 = new import2.Text('Delete');
    _el_6.append(_text_7);
    _el_6.addEventListener('click', eventHandler0(ctx.delete));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroDetailComponent _ctx = ctx;
    final currVal_0 = (_ctx.heroImageUrl ?? '');
    if (!identical(_expr_0, currVal_0)) {
      setProp(_el_1, 'src', import6.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.lineThrough;
    if (!identical(_expr_1, currVal_1)) {
      _el_2.style.setProperty('text-decoration', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.prefix ?? '');
    if (!identical(_expr_2, currVal_2)) {
      _text_3.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = import6.interpolate0(((_ctx.hero == null) ? null : _ctx.hero.name));
    if (!identical(_expr_3, currVal_3)) {
      _text_5.text = currVal_3;
      _expr_3 = currVal_3;
    }
  }
}

AppView<import1.HeroDetailComponent> viewFactory_HeroDetailComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewHeroDetailComponent0(parentView, parentIndex);
}

const List<dynamic> styles$HeroDetailComponentHost = const [];

class _ViewHeroDetailComponentHost0 extends AppView<dynamic> {
  ViewHeroDetailComponent0 _compView_0;
  import1.HeroDetailComponent _HeroDetailComponent_0_5;
  _ViewHeroDetailComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroDetailComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroDetailComponent_0_5 = new import1.HeroDetailComponent();
    _compView_0.create(_HeroDetailComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroDetailComponent>(0, this, rootEl, _HeroDetailComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _HeroDetailComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_HeroDetailComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroDetailComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroDetailComponent> HeroDetailComponentNgFactory = const ComponentFactory<import1.HeroDetailComponent>('hero-detail', viewFactory_HeroDetailComponentHost0, _HeroDetailComponentMetadata);
const List<dynamic> styles$BigHeroDetailComponent = const ['.detail._ngcontent-%COMP% { border:1px solid black; padding:4px; max-width:450px; }', 'img._ngcontent-%COMP% { float:left; margin-right:8px; height:100px; }'];

class ViewBigHeroDetailComponent0 extends AppView<import1.BigHeroDetailComponent> {
  import2.DivElement _el_0;
  import2.Element _el_1;
  import2.DivElement _el_2;
  import2.Element _el_3;
  import2.Text _text_4;
  import2.DivElement _el_5;
  import2.Text _text_7;
  import2.DivElement _el_8;
  import2.Text _text_10;
  import2.DivElement _el_11;
  import2.Text _text_13;
  import2.DivElement _el_14;
  import2.AnchorElement _el_16;
  import2.Text _text_17;
  import2.DivElement _el_18;
  import2.Text _text_20;
  import2.Element _el_21;
  import2.ButtonElement _el_22;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  import8.DatePipe _pipe_date_0;
  String Function(dynamic, String) _pipe_date_0_0;
  import10.CurrencyPipe _pipe_currency_1;
  String Function(dynamic, String) _pipe_currency_1_0;
  static RenderComponentType _renderType;
  ViewBigHeroDetailComponent0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('big-hero-detail');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$BigHeroDetailComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.BigHeroDetailComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'detail';
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'img', _el_0);
    addShimE(_el_1);
    _el_2 = createDivAndAppend(doc, _el_0);
    addShimC(_el_2);
    _el_3 = createAndAppend(doc, 'b', _el_2);
    addShimE(_el_3);
    _text_4 = new import2.Text('');
    _el_3.append(_text_4);
    _el_5 = createDivAndAppend(doc, _el_0);
    addShimC(_el_5);
    import2.Text _text_6 = new import2.Text('Name: ');
    _el_5.append(_text_6);
    _text_7 = new import2.Text('');
    _el_5.append(_text_7);
    _el_8 = createDivAndAppend(doc, _el_0);
    addShimC(_el_8);
    import2.Text _text_9 = new import2.Text('Emotion: ');
    _el_8.append(_text_9);
    _text_10 = new import2.Text('');
    _el_8.append(_text_10);
    _el_11 = createDivAndAppend(doc, _el_0);
    addShimC(_el_11);
    import2.Text _text_12 = new import2.Text('Birthdate: ');
    _el_11.append(_text_12);
    _text_13 = new import2.Text('');
    _el_11.append(_text_13);
    _el_14 = createDivAndAppend(doc, _el_0);
    addShimC(_el_14);
    import2.Text _text_15 = new import2.Text('Web:');
    _el_14.append(_text_15);
    _el_16 = createAndAppend(doc, 'a', _el_14);
    createAttr(_el_16, 'target', '_blank');
    addShimC(_el_16);
    _text_17 = new import2.Text('');
    _el_16.append(_text_17);
    _el_18 = createDivAndAppend(doc, _el_0);
    addShimC(_el_18);
    import2.Text _text_19 = new import2.Text('Rate/hr: ');
    _el_18.append(_text_19);
    _text_20 = new import2.Text('');
    _el_18.append(_text_20);
    _el_21 = createAndAppend(doc, 'br', _el_0);
    createAttr(_el_21, 'clear', 'all');
    addShimE(_el_21);
    _el_22 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_22);
    import2.Text _text_23 = new import2.Text('Delete');
    _el_22.append(_text_23);
    _el_22.addEventListener('click', eventHandler0(ctx.delete));
    _pipe_date_0 = new import8.DatePipe();
    _pipe_date_0_0 = import6.pureProxy2(_pipe_date_0.transform);
    _pipe_currency_1 = new import10.CurrencyPipe();
    _pipe_currency_1_0 = import6.pureProxy2(_pipe_currency_1.transform);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.BigHeroDetailComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.heroImageUrl);
    if (!identical(_expr_0, currVal_0)) {
      setProp(_el_1, 'src', import6.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      _expr_0 = currVal_0;
    }
    final currVal_1 = import6.interpolate0(((_ctx.hero == null) ? null : _ctx.hero.name));
    if (!identical(_expr_1, currVal_1)) {
      _text_4.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import6.interpolate0(((_ctx.hero == null) ? null : _ctx.hero.name));
    if (!identical(_expr_2, currVal_2)) {
      _text_7.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = import6.interpolate0(((_ctx.hero == null) ? null : _ctx.hero.emotion));
    if (!identical(_expr_3, currVal_3)) {
      _text_10.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = import6.interpolate0(_pipe_date_0_0(((_ctx.hero == null) ? null : _ctx.hero.birthdate), 'longDate'));
    if (!identical(_expr_4, currVal_4)) {
      _text_13.text = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = import6.interpolate0(((_ctx.hero == null) ? null : _ctx.hero.url));
    if (!identical(_expr_5, currVal_5)) {
      setProp(_el_16, 'href', import6.appViewUtils.sanitizer.sanitizeUrl(currVal_5));
      _expr_5 = currVal_5;
    }
    final currVal_6 = import6.interpolate0(((_ctx.hero == null) ? null : _ctx.hero.url));
    if (!identical(_expr_6, currVal_6)) {
      _text_17.text = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = import6.interpolate0(_pipe_currency_1_0(((_ctx.hero == null) ? null : _ctx.hero.rate), 'EUR'));
    if (!identical(_expr_7, currVal_7)) {
      _text_20.text = currVal_7;
      _expr_7 = currVal_7;
    }
  }
}

AppView<import1.BigHeroDetailComponent> viewFactory_BigHeroDetailComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewBigHeroDetailComponent0(parentView, parentIndex);
}

const List<dynamic> styles$BigHeroDetailComponentHost = const [];

class _ViewBigHeroDetailComponentHost0 extends AppView<dynamic> {
  ViewBigHeroDetailComponent0 _compView_0;
  import1.BigHeroDetailComponent _BigHeroDetailComponent_0_5;
  _ViewBigHeroDetailComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewBigHeroDetailComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _BigHeroDetailComponent_0_5 = new import1.BigHeroDetailComponent();
    _compView_0.create(_BigHeroDetailComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.BigHeroDetailComponent>(0, this, rootEl, _BigHeroDetailComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _BigHeroDetailComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_BigHeroDetailComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewBigHeroDetailComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.BigHeroDetailComponent> BigHeroDetailComponentNgFactory = const ComponentFactory<import1.BigHeroDetailComponent>('big-hero-detail', viewFactory_BigHeroDetailComponentHost0, _BigHeroDetailComponentMetadata);
const _HeroDetailComponentMetadata = const [];
const _BigHeroDetailComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroDetailComponent, HeroDetailComponentNgFactory);
  _ngRef.registerComponent(BigHeroDetailComponent, BigHeroDetailComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
