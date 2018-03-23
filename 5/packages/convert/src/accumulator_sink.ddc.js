define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__accumulator_sink = Object.create(_root);
  const $clear = dartx.clear;
  const $add = dartx.add;
  const _events = Symbol('_events');
  const _isClosed = Symbol('_isClosed');
  const _is_AccumulatorSink_default = Symbol('_is_AccumulatorSink_default');
  src__accumulator_sink.AccumulatorSink$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let UnmodifiableListViewOfT = () => (UnmodifiableListViewOfT = dart.constFn(collection.UnmodifiableListView$(T)))();
    let SinkOfT = () => (SinkOfT = dart.constFn(core.Sink$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class AccumulatorSink extends core.Object {
      get events() {
        return new (UnmodifiableListViewOfT()).new(this[_events]);
      }
      get isClosed() {
        return this[_isClosed];
      }
      clear() {
        this[_events][$clear]();
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_isClosed])) {
          dart.throw(new core.StateError.new("Can't add to a closed sink."));
        }
        this[_events][$add](event);
      }
      close() {
        this[_isClosed] = true;
      }
    }
    (AccumulatorSink.new = function() {
      this[_events] = JSArrayOfT().of([]);
      this[_isClosed] = false;
    }).prototype = AccumulatorSink.prototype;
    dart.addTypeTests(AccumulatorSink);
    AccumulatorSink.prototype[_is_AccumulatorSink_default] = true;
    AccumulatorSink[dart.implements] = () => [SinkOfT()];
    dart.setMethodSignature(AccumulatorSink, () => ({
      __proto__: dart.getMethods(AccumulatorSink.__proto__),
      clear: dart.fnType(dart.void, []),
      add: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(AccumulatorSink, () => ({
      __proto__: dart.getGetters(AccumulatorSink.__proto__),
      events: dart.fnType(core.List$(T), []),
      isClosed: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(AccumulatorSink, () => ({
      __proto__: dart.getFields(AccumulatorSink.__proto__),
      [_events]: dart.finalFieldType(ListOfT()),
      [_isClosed]: dart.fieldType(core.bool)
    }));
    return AccumulatorSink;
  });
  src__accumulator_sink.AccumulatorSink = src__accumulator_sink.AccumulatorSink$();
  dart.addTypeTests(src__accumulator_sink.AccumulatorSink, _is_AccumulatorSink_default);
  dart.trackLibraries("packages/convert/src/accumulator_sink.ddc", {
    "package:convert/src/accumulator_sink.dart": src__accumulator_sink
  }, '{"version":3,"sourceRoot":"","sources":["accumulator_sink.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;cAWwB,KAAI,+BAAoB,CAAC,aAAO;MAAC;;cAIlC,gBAAS;;;AAO5B,qBAAO,QAAM;MACf;UAES,KAAO;iBAAL;AACT,sBAAI,eAAS,GAAE;AACb,qBAAM,IAAI,mBAAU,CAAC;;AAGvB,qBAAO,MAAI,CAAC,KAAK;MACnB;;AAGE,uBAAS,GAAG;MACd;;;MAvBM,aAAO,GAAG;MAIZ,eAAS,GAAG;IAoBlB","file":"accumulator_sink.ddc.js"}');
  // Exports:
  return {
    src__accumulator_sink: src__accumulator_sink
  };
});

//# sourceMappingURL=accumulator_sink.ddc.js.map
