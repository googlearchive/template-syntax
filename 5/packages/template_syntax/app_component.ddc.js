define(['dart_sdk', 'packages/template_syntax/src/hero', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, hero, lifecycle_hooks, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const app_component = Object.create(_root);
  const $_get = dartx._get;
  const $contains = dartx.contains;
  const $every = dartx.every;
  const $forEach = dartx.forEach;
  const $target = dartx.target;
  const $innerHtml = dartx.innerHtml;
  const $clear = dartx.clear;
  const $add = dartx.add;
  const $toUpperCase = dartx.toUpperCase;
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let JSArrayOfHero = () => (JSArrayOfHero = dart.constFn(_interceptors.JSArray$(src__hero.Hero)))();
  let IdentityMapOfString$bool = () => (IdentityMapOfString$bool = dart.constFn(_js_helper.IdentityMap$(core.String, core.bool)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ElementTobool = () => (ElementTobool = dart.constFn(dart.fnType(core.bool, [html.Element])))();
  let HeroToint = () => (HeroToint = dart.constFn(dart.fnType(core.int, [src__hero.Hero])))();
  let HeroTovoid = () => (HeroTovoid = dart.constFn(dart.fnType(dart.void, [src__hero.Hero])))();
  let ListOfElement = () => (ListOfElement = dart.constFn(core.List$(html.Element)))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero.Hero)))();
  let MapOfString$bool = () => (MapOfString$bool = dart.constFn(core.Map$(core.String, core.bool)))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  app_component.Color = class Color extends core.Object {
    toString() {
      return {
        0: "Color.red",
        1: "Color.green",
        2: "Color.blue"
      }[this.index];
    }
  };
  (app_component.Color.new = function(x) {
    this.index = x;
  }).prototype = app_component.Color.prototype;
  dart.addTypeTests(app_component.Color);
  dart.setFieldSignature(app_component.Color, () => ({
    __proto__: dart.getFields(app_component.Color.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(app_component.Color, ['toString']);
  app_component.Color.red = dart.const(new app_component.Color.new(0));
  app_component.Color.green = dart.const(new app_component.Color.new(1));
  app_component.Color.blue = dart.const(new app_component.Color.new(2));
  app_component.Color.values = dart.constList([app_component.Color.red, app_component.Color.green, app_component.Color.blue], app_component.Color);
  app_component.AppComponent = class AppComponent extends core.Object {
    get cd() {
      return this[cd$];
    }
    set cd(value) {
      this[cd$] = value;
    }
    ngOnInit() {
      this.resetHeroes();
      this.setCurrentClasses();
      this.setCurrentStyles();
    }
    get prevHeroesNoTrackBy() {
      return this[prevHeroesNoTrackBy];
    }
    set prevHeroesNoTrackBy(value) {
      this[prevHeroesNoTrackBy] = value;
    }
    set heroesNoTrackBy(elements) {
      let isSame = elements[$every](dart.fn(e => this.prevHeroesNoTrackBy[$contains](e), ElementTobool()));
      if (dart.test(isSame)) return;
      this.prevHeroesNoTrackBy = elements;
      this.heroesNoTrackByCount = dart.notNull(this.heroesNoTrackByCount) + 1;
      this.cd.detectChanges();
    }
    get prevHeroesWithTrackBy() {
      return this[prevHeroesWithTrackBy];
    }
    set prevHeroesWithTrackBy(value) {
      this[prevHeroesWithTrackBy] = value;
    }
    set heroesWithTrackBy(elements) {
      let isSame = elements[$every](dart.fn(e => this.prevHeroesWithTrackBy[$contains](e), ElementTobool()));
      if (dart.test(isSame)) return;
      this.prevHeroesWithTrackBy = elements;
      this.heroesWithTrackByCount = dart.notNull(this.heroesWithTrackByCount) + 1;
      this.cd.detectChanges();
    }
    get actionName() {
      return this[actionName];
    }
    set actionName(value) {
      this[actionName] = value;
    }
    get badCurly() {
      return this[badCurly];
    }
    set badCurly(value) {
      this[badCurly] = value;
    }
    get classes() {
      return this[classes];
    }
    set classes(value) {
      this[classes] = value;
    }
    get help() {
      return this[help];
    }
    set help(value) {
      this[help] = value;
    }
    alert(msg) {
      if (msg === void 0) msg = null;
      return html.window.alert(msg);
    }
    callFax(value) {
      return this.alert(dart.str`Faxing ${value} ...`);
    }
    callPhone(value) {
      return this.alert(dart.str`Calling ${value} ...`);
    }
    get canSave() {
      return this[canSave];
    }
    set canSave(value) {
      this[canSave] = value;
    }
    changeIds() {
      this.resetHeroes();
      this.heroes[$forEach](dart.fn(h => {
        return h.id = dart.notNull(h.id) + 10 * (() => {
          let x = this.heroIdIncrement;
          this.heroIdIncrement = dart.notNull(x) + 1;
          return x;
        })();
      }, HeroToint()));
      this.heroesWithTrackByCountReset = -1;
    }
    clearTrackByCounts() {
      let trackByCountReset = this.heroesWithTrackByCountReset;
      this.resetHeroes();
      this.heroesNoTrackByCount = -1;
      this.heroesWithTrackByCount = trackByCountReset;
      this.heroIdIncrement = 1;
    }
    get clicked() {
      return this[clicked];
    }
    set clicked(value) {
      this[clicked] = value;
    }
    get clickMessage() {
      return this[clickMessage];
    }
    set clickMessage(value) {
      this[clickMessage] = value;
    }
    get clickMessage2() {
      return this[clickMessage2];
    }
    set clickMessage2(value) {
      this[clickMessage2] = value;
    }
    get color() {
      return this[color];
    }
    set color(value) {
      this[color] = value;
    }
    colorToggle() {
      this.color = this.color === app_component.Color.red ? app_component.Color.blue : app_component.Color.red;
    }
    get currentHero() {
      return this[currentHero];
    }
    set currentHero(value) {
      this[currentHero] = value;
    }
    deleteHero(hero) {
      if (hero === void 0) hero = null;
      this.alert(dart.str`Deleted ${(() => {
        let l = hero == null ? null : hero.name;
        return l != null ? l : 'the hero';
      })()}.`);
    }
    get evilTitle() {
      return this[evilTitle];
    }
    set evilTitle(value) {
      this[evilTitle] = value;
    }
    get fontSizePx() {
      return this[fontSizePx];
    }
    set fontSizePx(value) {
      this[fontSizePx] = value;
    }
    get title() {
      return this[title];
    }
    set title(value) {
      this[title] = value;
    }
    getVal() {
      return 2;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      super.heroes = value;
    }
    get heroesNoTrackByCount() {
      return this[heroesNoTrackByCount];
    }
    set heroesNoTrackByCount(value) {
      this[heroesNoTrackByCount] = value;
    }
    get heroesWithTrackByCount() {
      return this[heroesWithTrackByCount];
    }
    set heroesWithTrackByCount(value) {
      this[heroesWithTrackByCount] = value;
    }
    get heroesWithTrackByCountReset() {
      return this[heroesWithTrackByCountReset];
    }
    set heroesWithTrackByCountReset(value) {
      this[heroesWithTrackByCountReset] = value;
    }
    get heroIdIncrement() {
      return this[heroIdIncrement];
    }
    set heroIdIncrement(value) {
      this[heroIdIncrement] = value;
    }
    get heroImageUrl() {
      return this[heroImageUrl];
    }
    set heroImageUrl(value) {
      super.heroImageUrl = value;
    }
    get villainImageUrl() {
      return this[villainImageUrl];
    }
    set villainImageUrl(value) {
      super.villainImageUrl = value;
    }
    get iconUrl() {
      return this[iconUrl];
    }
    set iconUrl(value) {
      super.iconUrl = value;
    }
    get isActive() {
      return this[isActive];
    }
    set isActive(value) {
      this[isActive] = value;
    }
    get isSpecial() {
      return this[isSpecial];
    }
    set isSpecial(value) {
      this[isSpecial] = value;
    }
    get isUnchanged() {
      return this[isUnchanged];
    }
    set isUnchanged(value) {
      this[isUnchanged] = value;
    }
    get nullHero() {
      return this[nullHero];
    }
    set nullHero(value) {
      super.nullHero = value;
    }
    onClickMe(event) {
      let el = html.HtmlElement._check(event == null ? null : event[$target]);
      let evtMsg = event != null ? dart.str`Event target class is ${el.className}.` : '';
      this.alert(dart.str`Click me.${evtMsg}`);
    }
    onSave(event) {
      if (event === void 0) event = null;
      let el = html.HtmlElement._check(event == null ? null : event[$target]);
      let evtMsg = event != null ? dart.str` Event target is ${el[$innerHtml]}.` : '';
      this.alert(dart.str`Saved.${evtMsg}`);
      event == null ? null : event.stopPropagation();
    }
    onSubmit(form) {}
    get product() {
      return this[product];
    }
    set product(value) {
      this[product] = value;
    }
    resetHeroes() {
      this.heroes[$clear]();
      src__hero.Hero.mockHeroes[$forEach](dart.fn(hero => this.heroes[$add](src__hero.Hero.copy(hero)), HeroTovoid()));
      this.currentHero = this.heroes[$_get](0);
      this.heroesWithTrackByCountReset = 0;
    }
    setUppercaseName(name) {
      this.currentHero.name = name[$toUpperCase]();
    }
    get currentClasses() {
      return this[currentClasses];
    }
    set currentClasses(value) {
      this[currentClasses] = value;
    }
    setCurrentClasses() {
      this.currentClasses = new (IdentityMapOfString$bool()).from(['saveable', this.canSave, 'modified', !dart.test(this.isUnchanged), 'special', this.isSpecial]);
    }
    get currentStyles() {
      return this[currentStyles];
    }
    set currentStyles(value) {
      this[currentStyles] = value;
    }
    setCurrentStyles() {
      this.currentStyles = new (IdentityMapOfString$String()).from(['font-style', dart.test(this.canSave) ? 'italic' : 'normal', 'font-weight', !dart.test(this.isUnchanged) ? 'bold' : 'normal', 'font-size', dart.test(this.isSpecial) ? '24px' : '12px']);
    }
    trackByHeroes(index, hero) {
      return hero.id;
    }
    trackById(index, item) {
      return core.int._check(dart.dload(item, 'id'));
    }
  };
  (app_component.AppComponent.new = function(cd) {
    this[prevHeroesNoTrackBy] = JSArrayOfElement().of([]);
    this[prevHeroesWithTrackBy] = JSArrayOfElement().of([]);
    this[actionName] = 'Go for it';
    this[badCurly] = 'bad curly';
    this[classes] = 'special';
    this[help] = '';
    this[canSave] = true;
    this[clicked] = '';
    this[clickMessage] = '';
    this[clickMessage2] = '';
    this[color] = app_component.Color.red;
    this[currentHero] = null;
    this[evilTitle] = 'Template <script>alert("evil never sleeps")</script>Syntax';
    this[fontSizePx] = '16';
    this[title] = 'Template Syntax';
    this[name] = src__hero.Hero.mockHeroes[$_get](0).name;
    this[hero$] = null;
    this[heroes] = JSArrayOfHero().of([]);
    this[heroesNoTrackByCount] = -1;
    this[heroesWithTrackByCount] = -1;
    this[heroesWithTrackByCountReset] = 0;
    this[heroIdIncrement] = 1;
    this[heroImageUrl] = 'assets/images/hero.png';
    this[villainImageUrl] = 'assets/images/villain.png';
    this[iconUrl] = 'assets/images/ng-logo.png';
    this[isActive] = false;
    this[isSpecial] = true;
    this[isUnchanged] = true;
    this[nullHero] = null;
    this[product] = new _js_helper.LinkedMap.from(['name', 'frimfram', 'price', 42]);
    this[currentClasses] = new (IdentityMapOfString$bool()).new();
    this[currentStyles] = new (IdentityMapOfString$String()).new();
    this[cd$] = cd;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const cd$ = Symbol("AppComponent.cd");
  const prevHeroesNoTrackBy = Symbol("AppComponent.prevHeroesNoTrackBy");
  const prevHeroesWithTrackBy = Symbol("AppComponent.prevHeroesWithTrackBy");
  const actionName = Symbol("AppComponent.actionName");
  const badCurly = Symbol("AppComponent.badCurly");
  const classes = Symbol("AppComponent.classes");
  const help = Symbol("AppComponent.help");
  const canSave = Symbol("AppComponent.canSave");
  const clicked = Symbol("AppComponent.clicked");
  const clickMessage = Symbol("AppComponent.clickMessage");
  const clickMessage2 = Symbol("AppComponent.clickMessage2");
  const color = Symbol("AppComponent.color");
  const currentHero = Symbol("AppComponent.currentHero");
  const evilTitle = Symbol("AppComponent.evilTitle");
  const fontSizePx = Symbol("AppComponent.fontSizePx");
  const title = Symbol("AppComponent.title");
  const name = Symbol("AppComponent.name");
  const hero$ = Symbol("AppComponent.hero");
  const heroes = Symbol("AppComponent.heroes");
  const heroesNoTrackByCount = Symbol("AppComponent.heroesNoTrackByCount");
  const heroesWithTrackByCount = Symbol("AppComponent.heroesWithTrackByCount");
  const heroesWithTrackByCountReset = Symbol("AppComponent.heroesWithTrackByCountReset");
  const heroIdIncrement = Symbol("AppComponent.heroIdIncrement");
  const heroImageUrl = Symbol("AppComponent.heroImageUrl");
  const villainImageUrl = Symbol("AppComponent.villainImageUrl");
  const iconUrl = Symbol("AppComponent.iconUrl");
  const isActive = Symbol("AppComponent.isActive");
  const isSpecial = Symbol("AppComponent.isSpecial");
  const isUnchanged = Symbol("AppComponent.isUnchanged");
  const nullHero = Symbol("AppComponent.nullHero");
  const product = Symbol("AppComponent.product");
  const currentClasses = Symbol("AppComponent.currentClasses");
  const currentStyles = Symbol("AppComponent.currentStyles");
  app_component.AppComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(app_component.AppComponent, () => ({
    __proto__: dart.getMethods(app_component.AppComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    alert: dart.fnType(dart.void, [], [core.String]),
    callFax: dart.fnType(dart.void, [core.String]),
    callPhone: dart.fnType(dart.void, [core.String]),
    changeIds: dart.fnType(dart.void, []),
    clearTrackByCounts: dart.fnType(dart.void, []),
    colorToggle: dart.fnType(dart.void, []),
    deleteHero: dart.fnType(dart.void, [], [src__hero.Hero]),
    getVal: dart.fnType(core.int, []),
    onClickMe: dart.fnType(dart.void, [html.UIEvent]),
    onSave: dart.fnType(dart.void, [], [html.UIEvent]),
    onSubmit: dart.fnType(dart.void, [dart.dynamic]),
    resetHeroes: dart.fnType(dart.void, []),
    setUppercaseName: dart.fnType(dart.void, [core.String]),
    setCurrentClasses: dart.fnType(dart.void, []),
    setCurrentStyles: dart.fnType(dart.void, []),
    trackByHeroes: dart.fnType(core.int, [core.int, src__hero.Hero]),
    trackById: dart.fnType(core.int, [core.int, dart.dynamic])
  }));
  dart.setSetterSignature(app_component.AppComponent, () => ({
    __proto__: dart.getSetters(app_component.AppComponent.__proto__),
    heroesNoTrackBy: dart.fnType(dart.void, [ListOfElement()]),
    heroesWithTrackBy: dart.fnType(dart.void, [ListOfElement()])
  }));
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    cd: dart.fieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    prevHeroesNoTrackBy: dart.fieldType(ListOfElement()),
    prevHeroesWithTrackBy: dart.fieldType(ListOfElement()),
    actionName: dart.fieldType(core.String),
    badCurly: dart.fieldType(core.String),
    classes: dart.fieldType(core.String),
    help: dart.fieldType(core.String),
    canSave: dart.fieldType(core.bool),
    clicked: dart.fieldType(core.String),
    clickMessage: dart.fieldType(core.String),
    clickMessage2: dart.fieldType(core.String),
    color: dart.fieldType(app_component.Color),
    currentHero: dart.fieldType(src__hero.Hero),
    evilTitle: dart.fieldType(core.String),
    fontSizePx: dart.fieldType(dart.dynamic),
    title: dart.fieldType(core.String),
    name: dart.fieldType(core.String),
    hero: dart.fieldType(src__hero.Hero),
    heroes: dart.finalFieldType(ListOfHero()),
    heroesNoTrackByCount: dart.fieldType(core.int),
    heroesWithTrackByCount: dart.fieldType(core.int),
    heroesWithTrackByCountReset: dart.fieldType(core.int),
    heroIdIncrement: dart.fieldType(core.int),
    heroImageUrl: dart.finalFieldType(core.String),
    villainImageUrl: dart.finalFieldType(core.String),
    iconUrl: dart.finalFieldType(core.String),
    isActive: dart.fieldType(core.bool),
    isSpecial: dart.fieldType(core.bool),
    isUnchanged: dart.fieldType(core.bool),
    nullHero: dart.finalFieldType(src__hero.Hero),
    product: dart.fieldType(core.Map),
    currentClasses: dart.fieldType(MapOfString$bool()),
    currentStyles: dart.fieldType(MapOfString$String())
  }));
  dart.trackLibraries("packages/template_syntax/app_component.ddc", {
    "package:template_syntax/app_component.dart": app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":"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","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
