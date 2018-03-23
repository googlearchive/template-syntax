define(['dart_sdk', 'packages/crypto/src/sha256', 'packages/uuid/aes'], function(dart_sdk, sha256, aes) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__sha256 = sha256.src__sha256;
  const aes$ = aes.aes;
  const _root = Object.create(null);
  const uuid_util = Object.create(_root);
  const $toInt = dartx.toInt;
  const $floor = dartx.floor;
  const $_set = dartx._set;
  const $sublist = dartx.sublist;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  uuid_util.UuidUtil = class UuidUtil extends core.Object {
    static mathRNG(opts) {
      let seed = opts && 'seed' in opts ? opts.seed : null;
      let rand = null, b = ListOfint().new(16);
      let _rand = seed == null ? math.Random.new() : math.Random.new(seed);
      for (let i = 0; i < 16; i++) {
        if ((i & 3) === 0) {
          rand = (dart.notNull(_rand.nextDouble()) * 4294967296)[$floor]()[$toInt]();
        }
        b[$_set](i, core.int._check(dart.dsend(dart.dsend(rand, '>>', (i & 3) << 3), '&', 255)));
      }
      return b;
    }
    static cryptoRNG() {
      let nBytes = 32;
      let pwBytes = core.List.new(nBytes);
      let bytes = uuid_util.UuidUtil.mathRNG();
      pwBytes = src__sha256.sha256.convert(bytes).bytes[$sublist](0, nBytes);
      return aes$.AES.cipher(pwBytes, aes$.AES.keyExpansion(pwBytes));
    }
  };
  (uuid_util.UuidUtil.new = function() {
  }).prototype = uuid_util.UuidUtil.prototype;
  dart.addTypeTests(uuid_util.UuidUtil);
  dart.setStaticMethodSignature(uuid_util.UuidUtil, () => ({
    mathRNG: dart.fnType(core.List$(core.int), [], {seed: core.int}),
    cryptoRNG: dart.fnType(core.List, [])
  }));
  dart.trackLibraries("packages/uuid/uuid_util.ddc", {
    "package:uuid/uuid_util.dart": uuid_util
  }, '{"version":3,"sourceRoot":"","sources":["uuid_util.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;UAUgC,4CAAM;AAClC,UAAI,aAAM,IAAI,AAAI,eAAS,CAAC;AAE5B,UAAI,QAAQ,AAAC,IAAI,IAAI,OAAQ,AAAI,eAAM,KAAK,AAAI,eAAM,CAAC,IAAI;AAC3D,eAAQ,IAAI,GAAG,AAAE,CAAD,GAAG,IAAI,CAAC,IAAI;AAC1B,YAAI,CAAC,AAAE,CAAD,GAAG,OAAS,GAAG;AACnB,cAAI,GAAG,CAAoB,aAAnB,KAAK,WAAW,MAAK,mBAAkB,UAAQ;;AAEzD,SAAC,QAAC,CAAC,EAAI,gBAA0B,WAArB,WAAL,IAAI,QAAgB,CAAV,AAAE,CAAD,GAAG,MAAS,SAAK;;AAGrC,YAAO,EAAC;IACV;;AAME,UAAI,SAAS;AACb,UAAI,UAAU,AAAI,aAAI,CAAC,MAAM;AAE7B,UAAI,QAAQ,0BAAO;AACnB,aAAO,GAAG,kBAAM,QAAQ,CAAC,KAAK,OAAO,UAAQ,CAAC,GAAG,MAAM;AAEvD,YAAO,SAAG,OAAO,CAAC,OAAO,EAAE,QAAG,aAAa,CAAC,OAAO;IACrD;;;EACF","file":"uuid_util.ddc.js"}');
  // Exports:
  return {
    uuid_util: uuid_util
  };
});

//# sourceMappingURL=uuid_util.ddc.js.map
