define(['dart_sdk', 'packages/collection/src/equality', 'packages/convert/src/hex'], function(dart_sdk, equality, hex) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__equality = equality.src__equality;
  const src__hex = hex.src__hex;
  const _root = Object.create(null);
  const src__digest = Object.create(_root);
  const $_equals = dartx._equals;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let const$;
  let const$0;
  src__digest.Digest = class Digest extends core.Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    _equals(other) {
      if (other == null) return false;
      return src__digest.Digest.is(other) && dart.test((const$ || (const$ = dart.const(new src__equality.ListEquality.new()))).equals(this.bytes, other.bytes));
    }
    get hashCode() {
      return (const$0 || (const$0 = dart.const(new src__equality.ListEquality.new()))).hash(this.bytes);
    }
    toString() {
      return src__hex.hex.encode(this.bytes);
    }
  };
  (src__digest.Digest.new = function(bytes) {
    this[bytes$] = bytes;
  }).prototype = src__digest.Digest.prototype;
  dart.addTypeTests(src__digest.Digest);
  const bytes$ = Symbol("Digest.bytes");
  dart.setMethodSignature(src__digest.Digest, () => ({
    __proto__: dart.getMethods(src__digest.Digest.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(src__digest.Digest, () => ({
    __proto__: dart.getFields(src__digest.Digest.__proto__),
    bytes: dart.finalFieldType(ListOfint())
  }));
  dart.defineExtensionMethods(src__digest.Digest, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__digest.Digest, ['hashCode']);
  dart.trackLibraries("packages/crypto/src/digest.ddc", {
    "package:crypto/src/digest.dart": src__digest
  }, '{"version":3,"sourceRoot":"","sources":["digest.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAUkB;;;;;;YASC,KAAY;UAAZ,KAAY;YACT,uBAAhB,KAAK,gBAAc,mCAAM,8BAAY,YAAS,CAAC,UAAK,EAAE,KAAK,MAAM;IAAC;;cAGlD,qCAAM,8BAAY,UAAO,CAAC,UAAK;IAAC;;YAI/B,aAAG,OAAO,CAAC,UAAK;IAAC;;qCAf/B,KAAU;IAAL,YAAK,GAAL,KAAK;EAAC","file":"digest.ddc.js"}');
  // Exports:
  return {
    src__digest: src__digest
  };
});

//# sourceMappingURL=digest.ddc.js.map
