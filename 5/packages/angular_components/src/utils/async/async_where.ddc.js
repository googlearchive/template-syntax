define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils__async__async_where = Object.create(_root);
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let ListOfTAndFnToStreamOfT = () => (ListOfTAndFnToStreamOfT = dart.constFn(dart.gFnType(T => [async.Stream$(T), [core.List$(T), dart.fnType(FutureOfbool(), [T])]])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let ListOfTAndFn__ToFutureOfT = () => (ListOfTAndFn__ToFutureOfT = dart.constFn(dart.gFnType(T => [async.Future$(T), [core.List$(T), dart.fnType(FutureOfbool(), [T])], {orElse: VoidTodynamic()}])))();
  let ListOfTAndFnToFutureOfT = () => (ListOfTAndFnToFutureOfT = dart.constFn(dart.gFnType(T => [async.Future$(T), [core.List$(T), dart.fnType(FutureOfbool(), [T])]])))();
  src__utils__async__async_where.asyncWhere = function(T, items, filter) {
    return dart.asyncStar(T, function* asyncWhere(stream) {
      for (let item of items) {
        if (dart.test(yield filter(item))) {
          if (stream.add(item)) return;
          yield;
        }
      }
    });
  };
  dart.fn(src__utils__async__async_where.asyncWhere, ListOfTAndFnToStreamOfT());
  src__utils__async__async_where.asyncFirst = function(T, items, filter, opts) {
    let orElse = opts && 'orElse' in opts ? opts.orElse : null;
    return src__utils__async__async_where.asyncWhere(T, items, filter).firstWhere(dart.fn(_ => true, dart.fnType(core.bool, [T])), {orElse: dart.fnType(T, [])._check(orElse)}).then(T, dart.fn(x => x, dart.fnType(T, [T])));
  };
  dart.fn(src__utils__async__async_where.asyncFirst, ListOfTAndFn__ToFutureOfT());
  src__utils__async__async_where.asyncSingle = function(T, items, filter) {
    return src__utils__async__async_where.asyncWhere(T, items, filter).single;
  };
  dart.fn(src__utils__async__async_where.asyncSingle, ListOfTAndFnToFutureOfT());
  dart.trackLibraries("packages/angular_components/src/utils/async/async_where.ddc", {
    "package:angular_components/src/utils/async/async_where.dart": src__utils__async__async_where
  }, '{"version":3,"sourceRoot":"","sources":["async_where.dart"],"names":[],"mappings":";;;;;;;;;;;;;0DAYwB,KAAa,EAAE,MAA2B;AAAE;AAClE,eAAS,OAAQ,MAAK,EAAE;AACtB,sBAAI,MAAM,MAAM,CAAC,IAAI,IAAG;AACtB,yBAAM,IAAI;UAAV;;;IAGN;;;0DAYwB,KAAa,EAAE,MAA2B;QACzD;UACL,0CAAU,IAAI,KAAK,EAAE,MAAM,YACZ,CAAC,QAAC,CAAC,IAAK,uEAAc,MAAM,QAClC,IAAC,QAAC,CAAC,IAAK,CAAC;EAAC;;2DAUE,KAAa,EAAE,MAA2B;UAC/D,0CAAU,IAAI,KAAK,EAAE,MAAM,QAAQ","file":"async_where.ddc.js"}');
  // Exports:
  return {
    src__utils__async__async_where: src__utils__async__async_where
  };
});

//# sourceMappingURL=async_where.ddc.js.map
