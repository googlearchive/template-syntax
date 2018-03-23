define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils__async__rate_limit = Object.create(_root);
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let FnAndDurationToFn = () => (FnAndDurationToFn = dart.constFn(dart.fnType(dynamicTodynamic(), [dynamicTodynamic(), core.Duration])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let EventSinkTo_RateLimitSink = () => (EventSinkTo_RateLimitSink = dart.constFn(dart.fnType(src__utils__async__rate_limit._RateLimitSink, [async.EventSink])))();
  src__utils__async__rate_limit._AddEventFn = dart.typedef('_AddEventFn', () => dart.fnType(dart.void, [dart.dynamic]));
  const _outputSink = Symbol('_outputSink');
  const _duration = Symbol('_duration');
  const _rateLimitStrategy = Symbol('_rateLimitStrategy');
  const _addEvent = Symbol('_addEvent');
  src__utils__async__rate_limit._RateLimitSink = class _RateLimitSink extends core.Object {
    add(event) {
      dart.dcall(this[_addEvent], event);
    }
    addError(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      this[_outputSink].addError(error, stackTrace);
    }
    close() {
      this[_outputSink].close();
    }
  };
  (src__utils__async__rate_limit._RateLimitSink.new = function(outputSink, duration, rateLimitStrategy) {
    this[_addEvent] = null;
    this[_outputSink] = outputSink;
    this[_duration] = duration;
    this[_rateLimitStrategy] = rateLimitStrategy;
    this[_addEvent] = this[_rateLimitStrategy](dart.bind(this[_outputSink], 'add'), this[_duration]);
  }).prototype = src__utils__async__rate_limit._RateLimitSink.prototype;
  dart.addTypeTests(src__utils__async__rate_limit._RateLimitSink);
  src__utils__async__rate_limit._RateLimitSink[dart.implements] = () => [async.EventSink];
  dart.setMethodSignature(src__utils__async__rate_limit._RateLimitSink, () => ({
    __proto__: dart.getMethods(src__utils__async__rate_limit._RateLimitSink.__proto__),
    add: dart.fnType(dart.void, [dart.dynamic]),
    addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__utils__async__rate_limit._RateLimitSink, () => ({
    __proto__: dart.getFields(src__utils__async__rate_limit._RateLimitSink.__proto__),
    [_outputSink]: dart.finalFieldType(async.EventSink),
    [_duration]: dart.finalFieldType(core.Duration),
    [_rateLimitStrategy]: dart.finalFieldType(FnAndDurationToFn()),
    [_addEvent]: dart.fieldType(dynamicTovoid())
  }));
  const _is_RateLimitTransformer_default = Symbol('_is_RateLimitTransformer_default');
  src__utils__async__rate_limit.RateLimitTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class RateLimitTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        return StreamOfT().eventTransformed(stream, dart.fn(sink => new src__utils__async__rate_limit._RateLimitSink.new(sink, this[_duration], this[_rateLimitStrategy]), EventSinkTo_RateLimitSink()));
      }
    }
    (RateLimitTransformer.new = function(duration, rateLimitStrategy) {
      this[_duration] = duration;
      this[_rateLimitStrategy] = rateLimitStrategy;
      RateLimitTransformer.__proto__.new.call(this);
    }).prototype = RateLimitTransformer.prototype;
    dart.addTypeTests(RateLimitTransformer);
    RateLimitTransformer.prototype[_is_RateLimitTransformer_default] = true;
    dart.setMethodSignature(RateLimitTransformer, () => ({
      __proto__: dart.getMethods(RateLimitTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(RateLimitTransformer, () => ({
      __proto__: dart.getFields(RateLimitTransformer.__proto__),
      [_duration]: dart.finalFieldType(core.Duration),
      [_rateLimitStrategy]: dart.finalFieldType(FnAndDurationToFn())
    }));
    return RateLimitTransformer;
  });
  src__utils__async__rate_limit.RateLimitTransformer = src__utils__async__rate_limit.RateLimitTransformer$();
  dart.addTypeTests(src__utils__async__rate_limit.RateLimitTransformer, _is_RateLimitTransformer_default);
  dart.trackLibraries("packages/angular_components/src/utils/async/rate_limit.ddc", {
    "package:angular_components/src/utils/async/rate_limit.dart": src__utils__async__rate_limit
  }, '{"version":3,"sourceRoot":"","sources":["rate_limit.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;QA4BW,KAAK;AACZ,gCAAS,EAAC,KAAK;IACjB;aAGc,KAAK,EAAG,UAAqB;iCAAV;AAC/B,uBAAW,SAAS,CAAC,KAAK,EAAE,UAAU;IACxC;;AAIE,uBAAW,MAAM;IACnB;;+DAjBoB,UAAW,EAAO,QAAS,EAAO,iBAAkB;IAF5D,eAAS;IAED,iBAAW,GAAX,UAAW;IAAO,eAAS,GAAT,QAAS;IAAO,wBAAkB,GAAlB,iBAAkB;AACtE,mBAAS,GAAG,wBAAkB,WAAC,iBAAW,UAAM,eAAS;EAC3D;;;;;;;;;;;;;;;;;;;;;WA2Be,MAAgB;2BAAN;cAAW,AAAI,6BAAuB,CAC3D,MAAM,EACN,QAAC,IAAc,IACX,IAAI,gDAAc,CAAC,IAAI,EAAE,eAAS,EAAE,wBAAkB;MAAE;;yCANtC,QAAS,EAAO,iBAAkB;MAAlC,eAAS,GAAT,QAAS;MAAO,wBAAkB,GAAlB,iBAAkB;;IAAC","file":"rate_limit.ddc.js"}');
  // Exports:
  return {
    src__utils__async__rate_limit: src__utils__async__rate_limit
  };
});

//# sourceMappingURL=rate_limit.ddc.js.map
