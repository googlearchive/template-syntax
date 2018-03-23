define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const laminate__overlay__zindexer = Object.create(_root);
  dart.defineLazy(laminate__overlay__zindexer, {
    /*laminate__overlay__zindexer.hoverableAutoIncrement*/get hoverableAutoIncrement() {
      return 1000;
    }
  });
  laminate__overlay__zindexer.ZIndexer = class ZIndexer extends core.Object {
    static _initZIndex() {
      if (dart.global.acxZIndex == null) {
        dart.global.acxZIndex = 1000;
      }
    }
    static new() {
      let t = laminate__overlay__zindexer.ZIndexer._currentInstance;
      return t == null ? laminate__overlay__zindexer.ZIndexer._currentInstance = new laminate__overlay__zindexer.ZIndexer.__() : t;
    }
    pop() {
      return dart.global.acxZIndex = dart.notNull(dart.global.acxZIndex) + 1;
    }
    peek() {
      return dart.global.acxZIndex;
    }
  };
  (laminate__overlay__zindexer.ZIndexer.__ = function() {
    laminate__overlay__zindexer.ZIndexer._initZIndex();
  }).prototype = laminate__overlay__zindexer.ZIndexer.prototype;
  dart.addTypeTests(laminate__overlay__zindexer.ZIndexer);
  dart.setMethodSignature(laminate__overlay__zindexer.ZIndexer, () => ({
    __proto__: dart.getMethods(laminate__overlay__zindexer.ZIndexer.__proto__),
    pop: dart.fnType(core.int, []),
    peek: dart.fnType(core.int, [])
  }));
  dart.setStaticMethodSignature(laminate__overlay__zindexer.ZIndexer, () => ({_initZIndex: dart.fnType(dart.void, [])}));
  dart.defineLazy(laminate__overlay__zindexer.ZIndexer, {
    /*laminate__overlay__zindexer.ZIndexer._currentInstance*/get _currentInstance() {
      return null;
    },
    set _currentInstance(_) {}
  });
  dart.trackLibraries("packages/angular_components/laminate/overlay/zindexer.ddc", {
    "package:angular_components/laminate/overlay/zindexer.dart": laminate__overlay__zindexer
  }, '{"version":3,"sourceRoot":"","sources":["zindexer.dart"],"names":[],"mappings":";;;;;;;;MAkBU,kDAAsB;YAAG;;;;;AAU/B,UAAI,qBAAc,IAAI,MAAM;AAC1B,gCAAiB,IAAsB;;IAE3C;;AAEmB,AACjB,cAAO,qDAAgB;yBAAhB,qDAAgB,GAAK,IAAI,uCAAU;IAC5C;;qCAnCF,aA0CiB,qBAAc,IA1C/B;IA0C+B;;YAGf,sBAAc;;;;AAP1B,oDAAW;EACb;;;;;;;;;MAdgB,qDAAgB","file":"zindexer.ddc.js"}');
  // Exports:
  return {
    laminate__overlay__zindexer: laminate__overlay__zindexer
  };
});

//# sourceMappingURL=zindexer.ddc.js.map
