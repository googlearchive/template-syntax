define(['dart_sdk', 'packages/convert/src/hex', 'packages/uuid/uuid_util', 'packages/crypto/src/sha1'], function(dart_sdk, hex, uuid_util, sha1) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hex = hex.src__hex;
  const uuid_util$ = uuid_util.uuid_util;
  const src__sha1 = sha1.src__sha1;
  const _root = Object.create(null);
  const uuid = Object.create(_root);
  const $add = dartx.add;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $toLowerCase = dartx.toLowerCase;
  const $substring = dartx.substring;
  const $codeUnits = dartx.codeUnits;
  const $addAll = dartx.addAll;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfSymbol$dynamic = () => (MapOfSymbol$dynamic = dart.constFn(core.Map$(core.Symbol, dart.dynamic)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let MapOfString$int = () => (MapOfString$int = dart.constFn(core.Map$(core.String, core.int)))();
  const _seedBytes = Symbol('_seedBytes');
  const _nodeId = Symbol('_nodeId');
  const _clockSeq = Symbol('_clockSeq');
  const _lastMSecs = Symbol('_lastMSecs');
  const _lastNSecs = Symbol('_lastNSecs');
  const _byteToHex = Symbol('_byteToHex');
  const _hexToByte = Symbol('_hexToByte');
  let const$;
  uuid.Uuid = class Uuid extends core.Object {
    parse(uuid, opts) {
      let buffer = opts && 'buffer' in opts ? opts.buffer : null;
      let offset = opts && 'offset' in opts ? opts.offset : 0;
      let i = offset, ii = 0;
      buffer = buffer != null ? buffer : ListOfint().new(16);
      let regex = core.RegExp.new('[0-9a-f]{2}');
      for (let match of regex.allMatches(uuid[$toLowerCase]())) {
        if (ii < 16) {
          let hex = uuid[$toLowerCase]()[$substring](match.start, match.end);
          buffer[$_set](dart.notNull(i) + ii++, this[_hexToByte][$_get](hex));
        }
      }
      while (ii < 16) {
        buffer[$_set](dart.notNull(i) + ii++, 0);
      }
      return buffer;
    }
    unparse(buffer, opts) {
      let offset = opts && 'offset' in opts ? opts.offset : 0;
      let i = offset;
      return dart.str`${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}` + dart.str`${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}-` + dart.str`${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}-` + dart.str`${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}-` + dart.str`${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}-` + dart.str`${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}` + dart.str`${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}` + dart.str`${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}${this[_byteToHex][$_get](core.int._check(buffer[$_get]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })())))}`;
    }
    v1(opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let buffer = opts && 'buffer' in opts ? opts.buffer : null;
      let offset = opts && 'offset' in opts ? opts.offset : 0;
      let i = offset;
      let buf = buffer != null ? buffer : core.List.new(16);
      options = options != null ? options : new _js_helper.LinkedMap.new();
      let clockSeq = options[$_get]('clockSeq') != null ? options[$_get]('clockSeq') : this[_clockSeq];
      let mSecs = options[$_get]('mSecs') != null ? options[$_get]('mSecs') : new core.DateTime.now().millisecondsSinceEpoch;
      let nSecs = options[$_get]('nSecs') != null ? options[$_get]('nSecs') : dart.notNull(this[_lastNSecs]) + 1;
      let dt = dart.dsend(dart.dsend(mSecs, '-', this[_lastMSecs]), '+', dart.dsend(dart.dsend(nSecs, '-', this[_lastNSecs]), '/', 10000));
      if (dart.dtest(dart.dsend(dt, '<', 0)) && options[$_get]('clockSeq') == null) {
        clockSeq = dart.dsend(dart.dsend(clockSeq, '+', 1), '&', 16383);
      }
      if ((dart.dtest(dart.dsend(dt, '<', 0)) || dart.dtest(dart.dsend(mSecs, '>', this[_lastMSecs]))) && options[$_get]('nSecs') == null) {
        nSecs = 0;
      }
      if (dart.dtest(dart.dsend(nSecs, '>=', 10000))) {
        dart.throw(core.Exception.new('uuid.v1(): Can\'t create more than 10M uuids/sec'));
      }
      this[_lastMSecs] = core.int._check(mSecs);
      this[_lastNSecs] = core.int._check(nSecs);
      this[_clockSeq] = clockSeq;
      mSecs = dart.dsend(mSecs, '+', 12219292800000);
      let tl = dart.dsend(dart.dsend(dart.dsend(dart.dsend(mSecs, '&', 268435455), '*', 10000), '+', nSecs), '%', 4294967296);
      buf[$_set]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })(), dart.dsend(dart.dsend(tl, '>>', 24), '&', 255));
      buf[$_set]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })(), dart.dsend(dart.dsend(tl, '>>', 16), '&', 255));
      buf[$_set]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })(), dart.dsend(dart.dsend(tl, '>>', 8), '&', 255));
      buf[$_set]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })(), dart.dsend(tl, '&', 255));
      let tmh = dart.dsend(dart.dsend(dart.dsend(mSecs, '~/', 4294967296), '*', 10000), '&', 268435455);
      buf[$_set]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })(), dart.dsend(dart.dsend(tmh, '>>', 8), '&', 255));
      buf[$_set]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })(), dart.dsend(tmh, '&', 255));
      buf[$_set]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })(), dart.dsend(dart.dsend(dart.dsend(tmh, '>>', 24), '&', 15), '|', 16));
      buf[$_set]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })(), dart.dsend(dart.dsend(tmh, '>>', 16), '&', 255));
      buf[$_set]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })(), dart.dsend(dart.dsend(clockSeq, '>>', 8), '|', 128));
      buf[$_set]((() => {
        let x = i;
        i = dart.notNull(x) + 1;
        return x;
      })(), dart.dsend(clockSeq, '&', 255));
      let node = options[$_get]('node') != null ? options[$_get]('node') : this[_nodeId];
      for (let n = 0; n < 6; n++) {
        buf[$_set](dart.notNull(i) + n, dart.dindex(node, n));
      }
      return buffer != null ? buffer : this.unparse(buf);
    }
    v4(opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let buffer = opts && 'buffer' in opts ? opts.buffer : null;
      let offset = opts && 'offset' in opts ? opts.offset : 0;
      let i = offset;
      options = options != null ? options : new (IdentityMapOfString$dynamic()).new();
      let positionalArgs = options[$_get]('positionalArgs') != null ? options[$_get]('positionalArgs') : [];
      let namedArgs = options[$_get]('namedArgs') != null ? MapOfSymbol$dynamic().as(options[$_get]('namedArgs')) : const$ || (const$ = dart.constMap(core.Symbol, dart.dynamic, []));
      let rng = options[$_get]('rng') != null ? core.Function.apply(core.Function._check(options[$_get]('rng')), core.List._check(positionalArgs), namedArgs) : uuid_util$.UuidUtil.mathRNG();
      let rnds = options[$_get]('random') != null ? options[$_get]('random') : rng;
      dart.dsetindex(rnds, 6, dart.dsend(dart.dsend(dart.dindex(rnds, 6), '&', 15), '|', 64));
      dart.dsetindex(rnds, 8, dart.dsend(dart.dsend(dart.dindex(rnds, 8), '&', 63), '|', 128));
      if (buffer != null) {
        for (let j = 0; j < 16; j++) {
          buffer[$_set](dart.notNull(i) + j, dart.dindex(rnds, j));
        }
      }
      return buffer != null ? buffer : this.unparse(core.List._check(rnds));
    }
    v5(namespace, name, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let buffer = opts && 'buffer' in opts ? opts.buffer : null;
      let offset = opts && 'offset' in opts ? opts.offset : 0;
      let i = offset;
      options = options != null ? options : new _js_helper.LinkedMap.new();
      let useRandom = options[$_get]('randomNamespace') != null ? options[$_get]('randomNamespace') : true;
      let blankNS = dart.dtest(useRandom) ? this.v4() : "00000000-0000-0000-0000-000000000000";
      namespace = core.String._check(namespace != null ? namespace : blankNS);
      name = name != null ? name : '';
      let bytes = this.parse(namespace);
      let nameBytes = JSArrayOfint().of([]);
      for (let singleChar of name[$codeUnits]) {
        nameBytes[$add](singleChar);
      }
      let hashBytes = src__sha1.sha1.convert((() => {
        let _ = ListOfint().from(bytes);
        _[$addAll](nameBytes);
        return _;
      })()).bytes;
      hashBytes[$_set](6, dart.dsend(dart.dsend(hashBytes[$_get](6), '&', 15), '|', 80));
      hashBytes[$_set](8, dart.dsend(dart.dsend(hashBytes[$_get](8), '&', 63), '|', 128));
      if (buffer != null) {
        for (let j = 0; j < 16; j++) {
          buffer[$_set](dart.notNull(i) + j, hashBytes[$_get](j));
        }
      }
      return buffer != null ? buffer : this.unparse(hashBytes);
    }
  };
  (uuid.Uuid.new = function() {
    this[_seedBytes] = null;
    this[_nodeId] = null;
    this[_clockSeq] = null;
    this[_lastMSecs] = 0;
    this[_lastNSecs] = 0;
    this[_byteToHex] = null;
    this[_hexToByte] = null;
    this[_byteToHex] = ListOfString().new(256);
    this[_hexToByte] = new (IdentityMapOfString$int()).new();
    for (let i = 0; i < 256; i++) {
      let hex = JSArrayOfint().of([]);
      hex[$add](i);
      this[_byteToHex][$_set](i, src__hex.hex.encode(hex));
      this[_hexToByte][$_set](this[_byteToHex][$_get](i), i);
    }
    this[_seedBytes] = uuid_util$.UuidUtil.mathRNG();
    this[_nodeId] = [dart.dsend(dart.dindex(this[_seedBytes], 0), '|', 1), dart.dindex(this[_seedBytes], 1), dart.dindex(this[_seedBytes], 2), dart.dindex(this[_seedBytes], 3), dart.dindex(this[_seedBytes], 4), dart.dindex(this[_seedBytes], 5)];
    this[_clockSeq] = dart.dsend(dart.dsend(dart.dsend(dart.dindex(this[_seedBytes], 6), '<<', 8), '|', dart.dindex(this[_seedBytes], 7)), '&', 262143);
  }).prototype = uuid.Uuid.prototype;
  dart.addTypeTests(uuid.Uuid);
  dart.setMethodSignature(uuid.Uuid, () => ({
    __proto__: dart.getMethods(uuid.Uuid.__proto__),
    parse: dart.fnType(core.List$(core.int), [core.String], {buffer: ListOfint(), offset: core.int}),
    unparse: dart.fnType(core.String, [core.List], {offset: core.int}),
    v1: dart.fnType(dart.dynamic, [], {options: core.Map, buffer: core.List, offset: core.int}),
    v4: dart.fnType(dart.dynamic, [], {options: MapOfString$dynamic(), buffer: core.List, offset: core.int}),
    v5: dart.fnType(dart.dynamic, [core.String, core.String], {options: core.Map, buffer: core.List, offset: core.int})
  }));
  dart.setFieldSignature(uuid.Uuid, () => ({
    __proto__: dart.getFields(uuid.Uuid.__proto__),
    [_seedBytes]: dart.fieldType(dart.dynamic),
    [_nodeId]: dart.fieldType(dart.dynamic),
    [_clockSeq]: dart.fieldType(dart.dynamic),
    [_lastMSecs]: dart.fieldType(core.int),
    [_lastNSecs]: dart.fieldType(core.int),
    [_byteToHex]: dart.fieldType(ListOfString()),
    [_hexToByte]: dart.fieldType(MapOfString$int())
  }));
  dart.defineLazy(uuid.Uuid, {
    /*uuid.Uuid.TAU*/get TAU() {
      return 2 * math.PI;
    },
    /*uuid.Uuid.NAMESPACE_DNS*/get NAMESPACE_DNS() {
      return '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
    },
    /*uuid.Uuid.NAMESPACE_URL*/get NAMESPACE_URL() {
      return '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
    },
    /*uuid.Uuid.NAMESPACE_OID*/get NAMESPACE_OID() {
      return '6ba7b812-9dad-11d1-80b4-00c04fd430c8';
    },
    /*uuid.Uuid.NAMESPACE_X500*/get NAMESPACE_X500() {
      return '6ba7b814-9dad-11d1-80b4-00c04fd430c8';
    },
    /*uuid.Uuid.NAMESPACE_NIL*/get NAMESPACE_NIL() {
      return '00000000-0000-0000-0000-000000000000';
    }
  });
  dart.trackLibraries("packages/uuid/uuid.ddc", {
    "package:uuid/uuid.dart": uuid
  }, '{"version":3,"sourceRoot":"","sources":["uuid.dart"],"names":[],"mappings":"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","file":"uuid.ddc.js"}');
  // Exports:
  return {
    uuid: uuid
  };
});

//# sourceMappingURL=uuid.ddc.js.map
