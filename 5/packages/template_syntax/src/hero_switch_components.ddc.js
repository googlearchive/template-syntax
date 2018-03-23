define(['dart_sdk', 'packages/template_syntax/src/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const src__hero_switch_components = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  src__hero_switch_components.HappyHeroComponent = class HappyHeroComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
  };
  (src__hero_switch_components.HappyHeroComponent.new = function() {
    this[hero$] = null;
  }).prototype = src__hero_switch_components.HappyHeroComponent.prototype;
  dart.addTypeTests(src__hero_switch_components.HappyHeroComponent);
  const hero$ = Symbol("HappyHeroComponent.hero");
  dart.setFieldSignature(src__hero_switch_components.HappyHeroComponent, () => ({
    __proto__: dart.getFields(src__hero_switch_components.HappyHeroComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero)
  }));
  src__hero_switch_components.SadHeroComponent = class SadHeroComponent extends core.Object {
    get hero() {
      return this[hero$0];
    }
    set hero(value) {
      this[hero$0] = value;
    }
  };
  (src__hero_switch_components.SadHeroComponent.new = function() {
    this[hero$0] = null;
  }).prototype = src__hero_switch_components.SadHeroComponent.prototype;
  dart.addTypeTests(src__hero_switch_components.SadHeroComponent);
  const hero$0 = Symbol("SadHeroComponent.hero");
  dart.setFieldSignature(src__hero_switch_components.SadHeroComponent, () => ({
    __proto__: dart.getFields(src__hero_switch_components.SadHeroComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero)
  }));
  src__hero_switch_components.ConfusedHeroComponent = class ConfusedHeroComponent extends core.Object {
    get hero() {
      return this[hero$1];
    }
    set hero(value) {
      this[hero$1] = value;
    }
  };
  (src__hero_switch_components.ConfusedHeroComponent.new = function() {
    this[hero$1] = null;
  }).prototype = src__hero_switch_components.ConfusedHeroComponent.prototype;
  dart.addTypeTests(src__hero_switch_components.ConfusedHeroComponent);
  const hero$1 = Symbol("ConfusedHeroComponent.hero");
  dart.setFieldSignature(src__hero_switch_components.ConfusedHeroComponent, () => ({
    __proto__: dart.getFields(src__hero_switch_components.ConfusedHeroComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero)
  }));
  src__hero_switch_components.UnknownHeroComponent = class UnknownHeroComponent extends core.Object {
    get hero() {
      return this[hero$2];
    }
    set hero(value) {
      this[hero$2] = value;
    }
    get message() {
      return this.hero != null && this.hero.name[$isNotEmpty] ? dart.str`${this.hero.name} is strange and mysterious.` : 'Are you feeling indecisive?';
    }
  };
  (src__hero_switch_components.UnknownHeroComponent.new = function() {
    this[hero$2] = null;
  }).prototype = src__hero_switch_components.UnknownHeroComponent.prototype;
  dart.addTypeTests(src__hero_switch_components.UnknownHeroComponent);
  const hero$2 = Symbol("UnknownHeroComponent.hero");
  dart.setGetterSignature(src__hero_switch_components.UnknownHeroComponent, () => ({
    __proto__: dart.getGetters(src__hero_switch_components.UnknownHeroComponent.__proto__),
    message: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__hero_switch_components.UnknownHeroComponent, () => ({
    __proto__: dart.getFields(src__hero_switch_components.UnknownHeroComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero)
  }));
  dart.defineLazy(src__hero_switch_components, {
    /*src__hero_switch_components.heroSwitchComponents*/get heroSwitchComponents() {
      return dart.constList([dart.wrapType(src__hero_switch_components.HappyHeroComponent), dart.wrapType(src__hero_switch_components.SadHeroComponent), dart.wrapType(src__hero_switch_components.ConfusedHeroComponent), dart.wrapType(src__hero_switch_components.UnknownHeroComponent)], dart.dynamic);
    }
  });
  dart.trackLibraries("packages/template_syntax/src/hero_switch_components.ddc", {
    "package:template_syntax/src/hero_switch_components.dart": src__hero_switch_components
  }, '{"version":3,"sourceRoot":"","sources":["hero_switch_components.dart"],"names":[],"mappings":";;;;;;;;;;IASO;;;;;;;;eAAI;EACX;;;;;;;;IAQO;;;;;;;;gBAAI;EACX;;;;;;;;IAQO;;;;;;;;gBAAI;EACX;;;;;;;;IAQO;;;;;;;YAEiB,UAAI,IAAI,QAAQ,SAAI,KAAK,aAAW,GACpD,WAAG,SAAI,KAAK,gCACZ;IAA6B;;;IAJ9B,YAAI;EAKX;;;;;;;;;;;;MAEW,gDAAoB;YAAG,iBAChC,6DAAkB,EAClB,2DAAgB,EAChB,gEAAqB,EACrB,+DAAoB","file":"hero_switch_components.ddc.js"}');
  // Exports:
  return {
    src__hero_switch_components: src__hero_switch_components
  };
});

//# sourceMappingURL=hero_switch_components.ddc.js.map
