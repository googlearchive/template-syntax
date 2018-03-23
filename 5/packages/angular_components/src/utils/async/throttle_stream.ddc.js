define(['dart_sdk', 'packages/angular_components/utils/rate_limit_utils/rate_limit_utils', 'packages/angular_components/src/utils/async/rate_limit'], function(dart_sdk, rate_limit_utils, rate_limit) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__rate_limit_utils__rate_limit_utils = rate_limit_utils.utils__rate_limit_utils__rate_limit_utils;
  const src__utils__async__rate_limit = rate_limit.src__utils__async__rate_limit;
  const _root = Object.create(null);
  const src__utils__async__throttle_stream = Object.create(_root);
  let Duration__ToStreamTransformerOfS$T = () => (Duration__ToStreamTransformerOfS$T = dart.constFn(dart.gFnType((S, T) => [async.StreamTransformer$(S, T), [core.Duration], {guaranteeLast: core.bool}])))();
  src__utils__async__throttle_stream.throttleStream = function(S, T, duration, opts) {
    let guaranteeLast = opts && 'guaranteeLast' in opts ? opts.guaranteeLast : true;
    return new (src__utils__async__rate_limit.RateLimitTransformer$(S, T)).new(duration, dart.test(guaranteeLast) ? dart.gbind(utils__rate_limit_utils__rate_limit_utils.throttleGuaranteeLast, dart.dynamic) : dart.gbind(utils__rate_limit_utils__rate_limit_utils.throttle, dart.dynamic));
  };
  dart.fn(src__utils__async__throttle_stream.throttleStream, Duration__ToStreamTransformerOfS$T());
  dart.trackLibraries("packages/angular_components/src/utils/async/throttle_stream.ddc", {
    "package:angular_components/src/utils/async/throttle_stream.dart": src__utils__async__throttle_stream
  }, '{"version":3,"sourceRoot":"","sources":["throttle_stream.dart"],"names":[],"mappings":";;;;;;;;;;;qEA6B6C,QAAiB;QAChD,uEAAe;UACzB,KAAI,+DAA0B,CAC1B,QAAQ,YAAE,aAAa,eAAG,+DAAqB,6BAAG,kDAAQ;EAAC","file":"throttle_stream.ddc.js"}');
  // Exports:
  return {
    src__utils__async__throttle_stream: src__utils__async__throttle_stream
  };
});

//# sourceMappingURL=throttle_stream.ddc.js.map
