define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__hero = Object.create(_root);
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfHero = () => (JSArrayOfHero = dart.constFn(_interceptors.JSArray$(src__hero.Hero)))();
  src__hero.Hero = class Hero extends core.Object {
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get emotion() {
      return this[emotion$];
    }
    set emotion(value) {
      this[emotion$] = value;
    }
    get birthdate() {
      return this[birthdate$];
    }
    set birthdate(value) {
      this[birthdate$] = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      this[url$] = value;
    }
    get rate() {
      return this[rate$];
    }
    set rate(value) {
      this[rate$] = value;
    }
    static copy(h) {
      return new src__hero.Hero.new(h.id, h.name, h.emotion, h.birthdate, h.url, h.rate);
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(['id', this.id, 'name', this.name, 'emotion', this.emotion, 'birthdate', dart.toString(this.birthdate), 'url', this.url, 'rate', this.rate]);
    }
    toString() {
      return dart.str`${this.name} (rate: ${this.rate})`;
    }
  };
  (src__hero.Hero.new = function(_id, name, emotion, birthdate, url, rate) {
    if (name === void 0) name = null;
    if (emotion === void 0) emotion = null;
    if (birthdate === void 0) birthdate = null;
    if (url === void 0) url = null;
    if (rate === void 0) rate = 100;
    this[name$] = name;
    this[emotion$] = emotion;
    this[birthdate$] = birthdate;
    this[url$] = url;
    this[rate$] = rate;
    this[id] = _id != null ? _id : (() => {
      let x = src__hero.Hero._nextId;
      src__hero.Hero._nextId = dart.notNull(x) + 1;
      return x;
    })();
  }).prototype = src__hero.Hero.prototype;
  dart.addTypeTests(src__hero.Hero);
  const id = Symbol("Hero.id");
  const name$ = Symbol("Hero.name");
  const emotion$ = Symbol("Hero.emotion");
  const birthdate$ = Symbol("Hero.birthdate");
  const url$ = Symbol("Hero.url");
  const rate$ = Symbol("Hero.rate");
  dart.setMethodSignature(src__hero.Hero, () => ({
    __proto__: dart.getMethods(src__hero.Hero.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__hero.Hero, () => ({
    __proto__: dart.getFields(src__hero.Hero.__proto__),
    id: dart.fieldType(core.int),
    name: dart.fieldType(core.String),
    emotion: dart.fieldType(core.String),
    birthdate: dart.fieldType(core.DateTime),
    url: dart.fieldType(core.String),
    rate: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(src__hero.Hero, ['toString']);
  dart.defineLazy(src__hero.Hero, {
    /*src__hero.Hero._nextId*/get _nextId() {
      return 0;
    },
    set _nextId(_) {},
    /*src__hero.Hero.mockHeroes*/get mockHeroes() {
      return JSArrayOfHero().of([new src__hero.Hero.new(null, 'Hercules', 'happy', new core.DateTime.new(1970, 1, 25), 'http://www.imdb.com/title/tt0065832/', 325), new src__hero.Hero.new(null, 'Mr. Nice', 'happy'), new src__hero.Hero.new(null, 'Narco', 'sad'), new src__hero.Hero.new(null, 'Windstorm', 'confused'), new src__hero.Hero.new(null, 'Magneta')]);
    }
  });
  dart.trackLibraries("packages/template_syntax/src/hero.ddc", {
    "package:template_syntax/src/hero.dart": src__hero
  }, '{"version":3,"sourceRoot":"","sources":["hero.dart"],"names":[],"mappings":";;;;;;;;;;;;IAYM;;;;;;IACG;;;;;;IACA;;;;;;IACE;;;;;;IACF;;;;;;IACH;;;;;;gBAMc,CAAM;AAAE,YACtB,KAAI,kBAAI,CAAC,CAAC,GAAG,EAAE,CAAC,KAAK,EAAE,CAAC,QAAQ,EAAE,CAAC,UAAU,EAAE,CAAC,IAAI,EAAE,CAAC,KAAK;IAAC;;YAEhC,2CAC3B,MAAM,OAAE,EACR,QAAQ,SAAI,EACZ,WAAW,YAAO,EAClB,2BAAa,cAAS,GACtB,OAAO,QAAG,EACV,QAAQ,SAAI;IACb;;YAGgB,YAAE,SAAI,WAAS,SAAI;IAAE;;iCAjBrC,GAAO,EACP,IAAS,EAAE,OAAY,EAAE,SAAc,EAAE,GAAQ,EAAE,IAAe;yBAA7D;4BAAW;8BAAc;wBAAgB;yBAAU,OAAO;IAA1D,WAAI,GAAJ,IAAI;IAAO,cAAO,GAAP,OAAO;IAAO,gBAAS,GAAT,SAAS;IAAO,UAAG,GAAH,GAAG;IAAO,WAAI,GAAJ,IAAI;IACtD,QAAE,GAAG,GAAG,WAAH,GAAG;cAAI,sBAAO;MAAP,sBAAO,qBArBhC;;;EAqBkC;;;;;;;;;;;;;;;;;;;;;;;MApBrB,sBAAO;YAAG;;;MAEG,yBAAU;YAAG,qBACnC,IAAI,kBAAI,CAAC,MAAM,YAAY,SAAS,IAAI,iBAAQ,CAAC,MAAM,GAAG,KACtD,wCAAwC,MAC5C,IAAI,kBAAI,CAAC,MAAM,YAAY,UAC3B,IAAI,kBAAI,CAAC,MAAM,SAAS,QACxB,IAAI,kBAAI,CAAC,MAAM,aAAa,aAC5B,IAAI,kBAAI,CAAC,MAAM","file":"hero.ddc.js"}');
  // Exports:
  return {
    src__hero: src__hero
  };
});

//# sourceMappingURL=hero.ddc.js.map
