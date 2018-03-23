define(['dart_sdk', 'packages/angular_forms/src/directives/ng_form', 'packages/template_syntax/src/hero'], function(dart_sdk, ng_form, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__ng_form = ng_form.src__directives__ng_form;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const src__hero_form_component = Object.create(_root);
  const _submitMessage = Symbol('_submitMessage');
  src__hero_form_component.HeroFormComponent = class HeroFormComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
    get form() {
      return this[form];
    }
    set form(value) {
      this[form] = value;
    }
    get submitMessage() {
      if (!dart.test(this.form.valid)) this[_submitMessage] = '';
      return this[_submitMessage];
    }
    onSubmit(form) {
      this[_submitMessage] = dart.str`Submitted. Form value is ${form.value}.`;
    }
  };
  (src__hero_form_component.HeroFormComponent.new = function() {
    this[hero$] = null;
    this[form] = null;
    this[_submitMessage] = '';
  }).prototype = src__hero_form_component.HeroFormComponent.prototype;
  dart.addTypeTests(src__hero_form_component.HeroFormComponent);
  const hero$ = Symbol("HeroFormComponent.hero");
  const form = Symbol("HeroFormComponent.form");
  dart.setMethodSignature(src__hero_form_component.HeroFormComponent, () => ({
    __proto__: dart.getMethods(src__hero_form_component.HeroFormComponent.__proto__),
    onSubmit: dart.fnType(dart.void, [src__directives__ng_form.NgForm])
  }));
  dart.setGetterSignature(src__hero_form_component.HeroFormComponent, () => ({
    __proto__: dart.getGetters(src__hero_form_component.HeroFormComponent.__proto__),
    submitMessage: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__hero_form_component.HeroFormComponent, () => ({
    __proto__: dart.getFields(src__hero_form_component.HeroFormComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero),
    form: dart.fieldType(src__directives__ng_form.NgForm),
    [_submitMessage]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/template_syntax/src/hero_form_component.ddc", {
    "package:template_syntax/src/hero_form_component.dart": src__hero_form_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_form_component.dart"],"names":[],"mappings":";;;;;;;;;;;IAiBO;;;;;;IAEE;;;;;;;AAIL,qBAAK,SAAI,MAAM,GAAE,oBAAc,GAAG;AAClC,YAAO,qBAAc;IACvB;aAEc,IAAW;AACvB,0BAAc,GAAG,oCAA4B,IAAI,MAAM;IACzD;;;IAZK,WAAI;IAEF,UAAI;IACJ,oBAAc,GAAG;EAU1B","file":"hero_form_component.ddc.js"}');
  // Exports:
  return {
    src__hero_form_component: src__hero_form_component
  };
});

//# sourceMappingURL=hero_form_component.ddc.js.map
