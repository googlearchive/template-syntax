define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__sizer_component = Object.create(_root);
  let StreamControllerOfint = () => (StreamControllerOfint = dart.constFn(async.StreamController$(core.int)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  dart.defineLazy(src__sizer_component, {
    /*src__sizer_component._minSize*/get _minSize() {
      return 8;
    },
    /*src__sizer_component._maxSize*/get _maxSize() {
      return 8 * 5;
    }
  });
  const _size = Symbol('_size');
  const _sizeChange = Symbol('_sizeChange');
  src__sizer_component.SizerComponent = class SizerComponent extends core.Object {
    get minSize() {
      return this[minSize];
    }
    set minSize(value) {
      super.minSize = value;
    }
    get maxSize() {
      return this[maxSize];
    }
    set maxSize(value) {
      super.maxSize = value;
    }
    get size() {
      return this[_size];
    }
    set size(val) {
      let z = core.int.is(val) ? val : core.int.parse(core.String._check(val), {onError: dart.fn(_ => null, StringToNull())});
      if (z != null) this[_size] = math.min(core.int, this.maxSize, math.max(core.int, this.minSize, z));
    }
    get sizeChange() {
      return this[_sizeChange].stream;
    }
    dec() {
      return this.resize(-1);
    }
    inc() {
      return this.resize(1);
    }
    resize(delta) {
      this.size = dart.notNull(this.size) + dart.notNull(delta);
      this[_sizeChange].add(this.size);
    }
  };
  (src__sizer_component.SizerComponent.new = function() {
    this[minSize] = 8;
    this[maxSize] = 40;
    this[_size] = 8 * 2;
    this[_sizeChange] = StreamControllerOfint().new();
  }).prototype = src__sizer_component.SizerComponent.prototype;
  dart.addTypeTests(src__sizer_component.SizerComponent);
  const minSize = Symbol("SizerComponent.minSize");
  const maxSize = Symbol("SizerComponent.maxSize");
  dart.setMethodSignature(src__sizer_component.SizerComponent, () => ({
    __proto__: dart.getMethods(src__sizer_component.SizerComponent.__proto__),
    dec: dart.fnType(dart.void, []),
    inc: dart.fnType(dart.void, []),
    resize: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__sizer_component.SizerComponent, () => ({
    __proto__: dart.getGetters(src__sizer_component.SizerComponent.__proto__),
    size: dart.fnType(core.int, []),
    sizeChange: dart.fnType(async.Stream$(core.int), [])
  }));
  dart.setSetterSignature(src__sizer_component.SizerComponent, () => ({
    __proto__: dart.getSetters(src__sizer_component.SizerComponent.__proto__),
    size: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__sizer_component.SizerComponent, () => ({
    __proto__: dart.getFields(src__sizer_component.SizerComponent.__proto__),
    minSize: dart.finalFieldType(core.int),
    maxSize: dart.finalFieldType(core.int),
    [_size]: dart.fieldType(core.int),
    [_sizeChange]: dart.finalFieldType(StreamControllerOfint())
  }));
  dart.trackLibraries("packages/template_syntax/src/sizer_component.ddc", {
    "package:template_syntax/src/sizer_component.dart": src__sizer_component
  }, '{"version":3,"sourceRoot":"","sources":["sizer_component.dart"],"names":[],"mappings":";;;;;;;;;;;;MAIM,6BAAQ;YAAG;;MACX,6BAAQ;YAAG,AAAS,EAAD,GAAG;;;;;;IAahB;;;;;;IAAoB;;;;;;;YAGd,YAAK;;aAEQ,GAAG;AAC9B,UAAI,gBAAI,GAAG,IAAU,GAAG,GAAG,QAAG,MAAM,oBAAC,GAAG,aAAW,QAAC,CAAC,IAAK;AAC1D,UAAI,CAAC,IAAI,MAAM,WAAK,GAAG,QAAG,WAAC,YAAO,EAAE,QAAG,WAAC,YAAO,EAAE,CAAC;IACpD;;YAI8B,kBAAW,OAAO;;;YAElC,YAAM,CAAC,CAAC;IAAE;;YACV,YAAM,CAAC;IAAE;WAEX,KAAS;AACnB,eAAI,GAAQ,aAAL,SAAI,iBAAG,KAAK;AACnB,uBAAW,IAAI,CAAC,SAAI;IACtB;;;IApBU,aAAO,GAAG,CAAQ;IAAE,aAAO,GAAG,EAAQ;IAE5C,WAAK,GAAG,AAAS,CAAD,GAAG;IAQjB,iBAAW,GAAG,AAAI,2BAAqB;EAW/C","file":"sizer_component.ddc.js"}');
  // Exports:
  return {
    src__sizer_component: src__sizer_component
  };
});

//# sourceMappingURL=sizer_component.ddc.js.map
