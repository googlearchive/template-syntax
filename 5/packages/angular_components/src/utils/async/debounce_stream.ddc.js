define(['dart_sdk', 'packages/angular_components/utils/rate_limit_utils/rate_limit_utils', 'packages/angular_components/src/utils/async/rate_limit'], function(dart_sdk, rate_limit_utils, rate_limit) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__rate_limit_utils__rate_limit_utils = rate_limit_utils.utils__rate_limit_utils__rate_limit_utils;
  const src__utils__async__rate_limit = rate_limit.src__utils__async__rate_limit;
  const _root = Object.create(null);
  const src__utils__async__debounce_stream = Object.create(_root);
  let DurationToStreamTransformerOfS$T = () => (DurationToStreamTransformerOfS$T = dart.constFn(dart.gFnType((S, T) => [async.StreamTransformer$(S, T), [core.Duration]])))();
  src__utils__async__debounce_stream.debounceStream = function(S, T, duration) {
    return new (src__utils__async__rate_limit.RateLimitTransformer$(S, T)).new(duration, dart.gbind(utils__rate_limit_utils__rate_limit_utils.debounce, dart.dynamic));
  };
  dart.fn(src__utils__async__debounce_stream.debounceStream, DurationToStreamTransformerOfS$T());
  dart.trackLibraries("packages/angular_components/src/utils/async/debounce_stream.ddc", {
    "package:angular_components/src/utils/async/debounce_stream.dart": src__utils__async__debounce_stream
  }, '{"version":3,"sourceRoot":"","sources":["debounce_stream.dart"],"names":[],"mappings":";;;;;;;;;;;qEA6B6C,QAAiB;UAC1D,KAAI,+DAA0B,CAAC,QAAQ,aAAE,kDAAQ;EAAC","file":"debounce_stream.ddc.js"}');
  // Exports:
  return {
    src__utils__async__debounce_stream: src__utils__async__debounce_stream
  };
});

//# sourceMappingURL=debounce_stream.ddc.js.map
