// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_form_component.dart';
export 'hero_form_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'hero.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_form_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular_forms/src/directives/ng_form.dart' as import3;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import4;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import5;
import 'package:angular_forms/src/directives/ng_control_name.dart' as import6;
import 'package:angular_forms/src/directives/validators.dart' as import7;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular_forms/src/validators.dart' as import13;
import 'package:angular/src/core/di/opaque_token.dart' as import14;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import15;
import 'package:angular_forms/src/directives/ng_control.dart' as import16;
import 'package:angular_forms/src/directives/control_container.dart' as import17;

const List<dynamic> styles$HeroFormComponent = const ['button._ngcontent-%COMP% { margin:6px 0; } #heroForm._ngcontent-%COMP% { border:1px solid black; margin:20px 0; padding:8px; max-width:350px; }'];

class ViewHeroFormComponent0 extends AppView<import1.HeroFormComponent> {
  bool _query_heroForm_1_0_isDirty = true;
  import2.DivElement _el_0;
  import2.FormElement _el_1;
  import3.NgForm _NgForm_1_5;
  import3.NgForm _ControlContainer_1_6;
  import2.DivElement _el_2;
  import2.Element _el_3;
  import2.InputElement _el_5;
  List<dynamic> _NgValidators_5_5;
  import4.DefaultValueAccessor _DefaultValueAccessor_5_6;
  List<import5.ControlValueAccessor<dynamic>> _NgValueAccessor_5_7;
  import6.NgControlName _NgControlName_5_8;
  import7.RequiredValidator _RequiredValidator_5_9;
  import2.ButtonElement _el_6;
  import2.DivElement _el_8;
  import2.Text _text_9;
  var _expr_0;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  static RenderComponentType _renderType;
  ViewHeroFormComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('hero-form');
    _renderType ??= import11.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$HeroFormComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroFormComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_0, 'id', 'heroForm');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'form', _el_0);
    addShimC(_el_1);
    _NgForm_1_5 = new import3.NgForm(null);
    _ControlContainer_1_6 = _NgForm_1_5;
    _el_2 = createDivAndAppend(doc, _el_1);
    _el_2.className = 'form-group';
    addShimC(_el_2);
    _el_3 = createAndAppend(doc, 'label', _el_2);
    createAttr(_el_3, 'for', 'name');
    addShimE(_el_3);
    import2.Text _text_4 = new import2.Text('Name');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'input', _el_3);
    _el_5.className = 'form-control';
    createAttr(_el_5, 'ngControl', 'name');
    createAttr(_el_5, 'required', '');
    addShimC(_el_5);
    _NgValidators_5_5 = [import13.Validators.required];
    _DefaultValueAccessor_5_6 = new import4.DefaultValueAccessor(_el_5);
    _NgValueAccessor_5_7 = [_DefaultValueAccessor_5_6];
    _NgControlName_5_8 = new import6.NgControlName(_ControlContainer_1_6, _NgValidators_5_5, _NgValueAccessor_5_7);
    _RequiredValidator_5_9 = new import7.RequiredValidator();
    _el_6 = createAndAppend(doc, 'button', _el_1);
    createAttr(_el_6, 'type', 'submit');
    addShimC(_el_6);
    import2.Text _text_7 = new import2.Text('Submit');
    _el_6.append(_text_7);
    _el_8 = createDivAndAppend(doc, _el_0);
    addShimC(_el_8);
    _text_9 = new import2.Text('');
    _el_8.append(_text_9);
    import11.appViewUtils.eventManager.addEventListener(_el_1, 'submit', eventHandler1(_NgForm_1_5.onSubmit));
    final subscription_0 = _NgForm_1_5.ngSubmit.listen(eventHandler1(_handle_ngSubmit_1_0));
    _el_5.addEventListener('blur', eventHandler0(_DefaultValueAccessor_5_6.touchHandler));
    _el_5.addEventListener('input', eventHandler1(_handle_input_5_2));
    final subscription_1 = _NgControlName_5_8.update.listen(eventHandler1(_handle_ngModelChange_5_0));
    ctx.form = _NgForm_1_5;
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import14.MultiToken('NgValidators')) && (5 == nodeIndex))) {
      return _NgValidators_5_5;
    }
    if ((identical(token, const import14.MultiToken<import15.ControlValueAccessor>('NgValueAccessor')) && (5 == nodeIndex))) {
      return _NgValueAccessor_5_7;
    }
    if ((identical(token, import16.NgControl) && (5 == nodeIndex))) {
      return _NgControlName_5_8;
    }
    if ((identical(token, import3.NgForm) && ((1 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _NgForm_1_5;
    }
    if ((identical(token, import17.ControlContainer) && ((1 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _ControlContainer_1_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroFormComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import3.NgForm local_heroForm = _NgForm_1_5;
    changed = false;
    if (firstCheck) {
      _NgControlName_5_8.name = 'name';
      changed = true;
    }
    final currVal_0 = _ctx.hero.name;
    if (!identical(_expr_0, currVal_0)) {
      _NgControlName_5_8.model = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _NgControlName_5_8.ngAfterChanges();
    }
    final bool currVal_2 = !local_heroForm.form.valid;
    if (!identical(_expr_2, currVal_2)) {
      setProp(_el_6, 'disabled', currVal_2);
      _expr_2 = currVal_2;
    }
    final bool currVal_3 = !local_heroForm.form.valid;
    if (!identical(_expr_3, currVal_3)) {
      setProp(_el_8, 'hidden', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = (_ctx.submitMessage ?? '');
    if (!identical(_expr_4, currVal_4)) {
      _text_9.text = currVal_4;
      _expr_4 = currVal_4;
    }
  }

  @override
  void destroyInternal() {
    _NgControlName_5_8.ngOnDestroy();
  }

  void _handle_ngSubmit_1_0($event) {
    final import3.NgForm local_heroForm = _NgForm_1_5;
    ctx.onSubmit(local_heroForm);
  }

  void _handle_ngModelChange_5_0($event) {
    ctx.hero.name = $event;
  }

  void _handle_input_5_2($event) {
    _DefaultValueAccessor_5_6.handleChange($event.target.value);
  }
}

AppView<import1.HeroFormComponent> viewFactory_HeroFormComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewHeroFormComponent0(parentView, parentIndex);
}

const List<dynamic> styles$HeroFormComponentHost = const [];

class _ViewHeroFormComponentHost0 extends AppView<dynamic> {
  ViewHeroFormComponent0 _compView_0;
  import1.HeroFormComponent _HeroFormComponent_0_5;
  _ViewHeroFormComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroFormComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroFormComponent_0_5 = new import1.HeroFormComponent();
    _compView_0.create(_HeroFormComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroFormComponent>(0, this, rootEl, _HeroFormComponent_0_5);
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

AppView viewFactory_HeroFormComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroFormComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroFormComponent> HeroFormComponentNgFactory = const ComponentFactory<import1.HeroFormComponent>('hero-form', viewFactory_HeroFormComponentHost0, _HeroFormComponentMetadata);
const _HeroFormComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroFormComponent, HeroFormComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
