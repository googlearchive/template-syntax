define(['dart_sdk', 'packages/template_syntax/src/hero', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, hero, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const src__hero_component = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  let StreamControllerOfHero = () => (StreamControllerOfHero = dart.constFn(async.StreamController$(src__hero.Hero)))();
  const _deleteRequest = Symbol('_deleteRequest');
  src__hero_component.HeroComponent = class HeroComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
    get deleteRequest() {
      return this[_deleteRequest].stream;
    }
    get heroImageUrl() {
      return this[heroImageUrl];
    }
    set heroImageUrl(value) {
      this[heroImageUrl] = value;
    }
    get lineThrough() {
      return this[lineThrough];
    }
    set lineThrough(value) {
      this[lineThrough] = value;
    }
    get prefix() {
      return this[prefix];
    }
    set prefix(value) {
      this[prefix] = value;
    }
    ngOnInit() {
      if (this.hero == null) this.hero = new src__hero.Hero.new(null, '', 'Zzzzzz');
    }
    delete() {
      this[_deleteRequest].add(this.hero);
      this.lineThrough = this.lineThrough[$isNotEmpty] ? '' : 'line-through';
    }
  };
  (src__hero_component.HeroComponent.new = function() {
    this[hero$] = null;
    this[_deleteRequest] = StreamControllerOfHero().new();
    this[heroImageUrl] = 'assets/images/hero.png';
    this[lineThrough] = '';
    this[prefix] = '';
  }).prototype = src__hero_component.HeroComponent.prototype;
  dart.addTypeTests(src__hero_component.HeroComponent);
  const hero$ = Symbol("HeroComponent.hero");
  const heroImageUrl = Symbol("HeroComponent.heroImageUrl");
  const lineThrough = Symbol("HeroComponent.lineThrough");
  const prefix = Symbol("HeroComponent.prefix");
  src__hero_component.HeroComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__hero_component.HeroComponent, () => ({
    __proto__: dart.getMethods(src__hero_component.HeroComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    delete: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__hero_component.HeroComponent, () => ({
    __proto__: dart.getGetters(src__hero_component.HeroComponent.__proto__),
    deleteRequest: dart.fnType(async.Stream$(src__hero.Hero), [])
  }));
  dart.setFieldSignature(src__hero_component.HeroComponent, () => ({
    __proto__: dart.getFields(src__hero_component.HeroComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero),
    [_deleteRequest]: dart.finalFieldType(StreamControllerOfHero()),
    heroImageUrl: dart.fieldType(core.String),
    lineThrough: dart.fieldType(core.String),
    prefix: dart.fieldType(core.String)
  }));
  src__hero_component.BigHeroComponent = class BigHeroComponent extends src__hero_component.HeroComponent {
    delete() {
      return this[_deleteRequest].add(this.hero);
    }
  };
  (src__hero_component.BigHeroComponent.new = function() {
    src__hero_component.BigHeroComponent.__proto__.new.call(this);
  }).prototype = src__hero_component.BigHeroComponent.prototype;
  dart.addTypeTests(src__hero_component.BigHeroComponent);
  dart.trackLibraries("packages/template_syntax/src/hero_component.ddc", {
    "package:template_syntax/src/hero_component.dart": src__hero_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAoBO;;;;;;;YAG6B,qBAAc,OAAO;;IAIhD;;;;;;IACA;;;;;;IAEA;;;;;;;AAIL,UAAI,SAAI,IAAI,MACV,SAAI,GAAG,IAAI,kBAAI,CAAC,MAAM,IAAI;IAC9B;;AAGE,0BAAc,IAAI,CAAC,SAAI;AACvB,sBAAW,GAAG,gBAAW,aAAW,GAAG,KAAK;IAC9C;;;IArBK,WAAI;IACH,oBAAc,GAAG,AAAI,4BAAsB;IAM1C,kBAAY,GAAG;IACf,iBAAW,GAAG;IAEd,YAAM,GAAG;EAYlB;;;;;;;;;;;;;;;;;;;;;;;;;;YAyBmB,qBAAc,IAAI,CAAC,SAAI;IAAC;;;;EAC3C","file":"hero_component.ddc.js"}');
  // Exports:
  return {
    src__hero_component: src__hero_component
  };
});

//# sourceMappingURL=hero_component.ddc.js.map
