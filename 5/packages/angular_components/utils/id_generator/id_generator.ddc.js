define(['dart_sdk', 'packages/uuid/uuid'], function(dart_sdk, uuid) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const uuid$ = uuid.uuid;
  const _root = Object.create(null);
  const utils__id_generator__id_generator = Object.create(_root);
  utils__id_generator__id_generator.IdGenerator = class IdGenerator extends core.Object {};
  (utils__id_generator__id_generator.IdGenerator.new = function() {
  }).prototype = utils__id_generator__id_generator.IdGenerator.prototype;
  dart.addTypeTests(utils__id_generator__id_generator.IdGenerator);
  const _prefix = Symbol('_prefix');
  const _seq = Symbol('_seq');
  utils__id_generator__id_generator.SequentialIdGenerator = class SequentialIdGenerator extends core.Object {
    nextId() {
      return dart.str`${this[_prefix]}--${(() => {
        let x = this[_seq];
        this[_seq] = dart.notNull(x) + 1;
        return x;
      })()}`;
    }
  };
  (utils__id_generator__id_generator.SequentialIdGenerator.new = function(prefix) {
    this[_seq] = 0;
    this[_prefix] = prefix;
  }).prototype = utils__id_generator__id_generator.SequentialIdGenerator.prototype;
  (utils__id_generator__id_generator.SequentialIdGenerator.fromUUID = function() {
    utils__id_generator__id_generator.SequentialIdGenerator.new.call(this, core.String._check(utils__id_generator__id_generator.SequentialIdGenerator._uuid.v4()));
  }).prototype = utils__id_generator__id_generator.SequentialIdGenerator.prototype;
  dart.addTypeTests(utils__id_generator__id_generator.SequentialIdGenerator);
  utils__id_generator__id_generator.SequentialIdGenerator[dart.implements] = () => [utils__id_generator__id_generator.IdGenerator];
  dart.setMethodSignature(utils__id_generator__id_generator.SequentialIdGenerator, () => ({
    __proto__: dart.getMethods(utils__id_generator__id_generator.SequentialIdGenerator.__proto__),
    nextId: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(utils__id_generator__id_generator.SequentialIdGenerator, () => ({
    __proto__: dart.getFields(utils__id_generator__id_generator.SequentialIdGenerator.__proto__),
    [_prefix]: dart.finalFieldType(core.String),
    [_seq]: dart.fieldType(core.int)
  }));
  dart.defineLazy(utils__id_generator__id_generator.SequentialIdGenerator, {
    /*utils__id_generator__id_generator.SequentialIdGenerator._uuid*/get _uuid() {
      return new uuid$.Uuid.new();
    },
    set _uuid(_) {}
  });
  dart.trackLibraries("packages/angular_components/utils/id_generator/id_generator.ddc", {
    "package:angular_components/utils/id_generator/id_generator.dart": utils__id_generator__id_generator
  }, '{"version":3,"sourceRoot":"","sources":["id_generator.dart"],"names":[],"mappings":";;;;;;;;;;EAUA;;;;;;YA2BqB,YAAE,aAAO;gBAAI,UAAI;uCArCtC;;;IAqC0C;;0EAZb,MAAO;IAR9B,UAAI,GAAG;IAQgB,aAAO,GAAP,MAAO;EAAC;;8FASK,6DAAK,GAAG;EAAG;;;;;;;;;;;;;MAnBvC,6DAAK;YAAG,KAAI,cAAI","file":"id_generator.ddc.js"}');
  // Exports:
  return {
    utils__id_generator__id_generator: utils__id_generator__id_generator
  };
});

//# sourceMappingURL=id_generator.ddc.js.map
