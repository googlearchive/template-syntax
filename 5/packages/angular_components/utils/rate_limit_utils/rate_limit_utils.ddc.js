define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const utils__rate_limit_utils__rate_limit_utils = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FnAndDurationToFn = () => (FnAndDurationToFn = dart.constFn(dart.gFnType(T => [dart.fnType(async.Future, [T]), [dart.fnType(dart.dynamic, [T]), core.Duration]])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FnAndDurationToFn$ = () => (FnAndDurationToFn$ = dart.constFn(dart.fnType(VoidToFuture(), [VoidTovoid(), core.Duration])))();
  let FnAndDurationToFn$0 = () => (FnAndDurationToFn$0 = dart.constFn(dart.gFnType(T => [dart.fnType(dart.dynamic, [T]), [dart.fnType(dart.dynamic, [T]), core.Duration]])))();
  let FnAndDurationToFn$1 = () => (FnAndDurationToFn$1 = dart.constFn(dart.gFnType(T => [dart.fnType(dart.dynamic, [T]), [dart.fnType(dart.dynamic, [T]), core.Duration]])))();
  let VoidToNull$ = () => (VoidToNull$ = dart.constFn(dart.fnType(core.Null, [])))();
  let FnAndDuration__ToFn = () => (FnAndDuration__ToFn = dart.constFn(dart.gFnType(T => [dart.fnType(dart.dynamic, [T]), [dart.fnType(dart.dynamic, [T]), core.Duration], {guaranteeLast: core.bool}])))();
  utils__rate_limit_utils__rate_limit_utils.UnaryFunction$ = dart.generic(T => {
    const UnaryFunction = dart.typedef('UnaryFunction', () => dart.fnType(dart.dynamic, [T]));
    return UnaryFunction;
  });
  utils__rate_limit_utils__rate_limit_utils.UnaryFunction = utils__rate_limit_utils__rate_limit_utils.UnaryFunction$();
  utils__rate_limit_utils__rate_limit_utils.DebouncedFunction$ = dart.generic(T => {
    const DebouncedFunction = dart.typedef('DebouncedFunction', () => dart.fnType(async.Future, [T]));
    return DebouncedFunction;
  });
  utils__rate_limit_utils__rate_limit_utils.DebouncedFunction = utils__rate_limit_utils__rate_limit_utils.DebouncedFunction$();
  utils__rate_limit_utils__rate_limit_utils.DebouncedNullaryFunction = dart.typedef('DebouncedNullaryFunction', () => dart.fnType(async.Future, []));
  utils__rate_limit_utils__rate_limit_utils.RateLimitStrategy$ = dart.generic(T => {
    const RateLimitStrategy = dart.typedef('RateLimitStrategy', () => dart.fnType(dart.fnType(dart.dynamic, [T]), [dart.fnType(dart.dynamic, [T]), core.Duration]));
    return RateLimitStrategy;
  });
  utils__rate_limit_utils__rate_limit_utils.RateLimitStrategy = utils__rate_limit_utils__rate_limit_utils.RateLimitStrategy$();
  utils__rate_limit_utils__rate_limit_utils.debounce = function(T, delegate, delay) {
    let timer = null;
    let completer = null;
    return dart.fn(argument => {
      let t = timer;
      t == null ? null : t.cancel();
      let t$ = completer;
      t$ == null ? completer = async.Completer.new() : t$;
      timer = async.Timer.new(delay, dart.fn(() => {
        completer.complete(delegate(argument));
        completer = null;
        timer = null;
      }, VoidToNull()));
      return completer.future;
    }, dart.fnType(async.Future, [T]));
  };
  dart.fn(utils__rate_limit_utils__rate_limit_utils.debounce, FnAndDurationToFn());
  utils__rate_limit_utils__rate_limit_utils.debounceNullary = function(callback, delay) {
    let func = utils__rate_limit_utils__rate_limit_utils.debounce(dart.dynamic, dart.fn(_ => callback(), dynamicTovoid()), delay);
    return dart.fn(() => dart.dcall(func, null), VoidToFuture());
  };
  dart.fn(utils__rate_limit_utils__rate_limit_utils.debounceNullary, FnAndDurationToFn$());
  utils__rate_limit_utils__rate_limit_utils.throttle = function(T, delegate, interval) {
    return utils__rate_limit_utils__rate_limit_utils._throttle(T, delegate, interval, {guaranteeLast: false});
  };
  dart.fn(utils__rate_limit_utils__rate_limit_utils.throttle, FnAndDurationToFn$0());
  utils__rate_limit_utils__rate_limit_utils.throttleGuaranteeLast = function(T, delegate, interval) {
    return utils__rate_limit_utils__rate_limit_utils._throttle(T, delegate, interval, {guaranteeLast: true});
  };
  dart.fn(utils__rate_limit_utils__rate_limit_utils.throttleGuaranteeLast, FnAndDurationToFn$1());
  utils__rate_limit_utils__rate_limit_utils._throttle = function(T, delegate, interval, opts) {
    let guaranteeLast = opts && 'guaranteeLast' in opts ? opts.guaranteeLast : null;
    let onCooldown = false;
    let hasLastArg = false;
    let lastArg = null;
    let self = null;
    self = dart.fn(argument => {
      if (!onCooldown) {
        onCooldown = true;
        async.Timer.new(interval, dart.fn(() => {
          onCooldown = false;
          if (hasLastArg) {
            self(T._check(lastArg));
            hasLastArg = false;
          }
        }, VoidToNull$()));
        delegate(argument);
      } else if (dart.test(guaranteeLast)) {
        lastArg = argument;
        hasLastArg = true;
      }
    }, dart.fnType(core.Null, [T]));
    return self;
  };
  dart.fn(utils__rate_limit_utils__rate_limit_utils._throttle, FnAndDuration__ToFn());
  dart.trackLibraries("packages/angular_components/utils/rate_limit_utils/rate_limit_utils.ddc", {
    "package:angular_components/utils/rate_limit_utils/rate_limit_utils.dart": utils__rate_limit_utils__rate_limit_utils
  }, '{"version":3,"sourceRoot":"","sources":["rate_limit_utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mEAyBiC,QAAyB,EAAE,KAAc;AACxE,QAAM;AACN,QAAU;AAEV,UAAO,SAAC,QAAQ;AACd,mBAAK;;AACL,wBAAS;mBAAT,SAAS,GAAK,AAAI,mBAAS;AAC3B,WAAK,GAAG,AAAI,eAAK,CAAC,KAAK,EAAE;AACvB,iBAAS,SAAS,CAAC,QAAQ,CAAC,QAAQ;AACpC,iBAAS,GAAG;AACZ,aAAK,GAAG;;AAEV,YAAO,UAAS,OAAO;;EAE3B;;uEAGyC,QAAe,EAAE,KAAc;AACtE,QAAI,OAAW,kDAAQ,eAAC,QAAC,CAAC,IAAK,QAAQ,sBAAI,KAAK;AAChD,UAAO,0BAAM,IAAQ,EAAC;EACxB;;mEAK6B,QAAyB,EAAE,QAAiB;UACrE,oDAAS,IAAC,QAAQ,EAAE,QAAQ,kBAAiB;EAAM;;gFAM/C,QAAyB,EAAE,QAAiB;UAChD,oDAAS,IAAC,QAAQ,EAAE,QAAQ,kBAAiB;EAAK;;oEAExB,QAAyB,EAAE,QAAiB;QACtD;AAClB,QAAK,aAAa;AAClB,QAAK,aAAa;AAClB,QAAI;AACJ,QAAiB;AACjB,QAAI,GAAG,QAAC,QAAQ;AACd,WAAK,UAAU,EAAE;AACf,kBAAU,GAAG;AACb,QAAI,eAAK,CAAC,QAAQ,EAAE;AAClB,oBAAU,GAAG;AACb,cAAI,UAAU,EAAE;AACd,gBAAI,UAAC,OAAO;AACZ,sBAAU,GAAG;;;AAGjB,gBAAQ,CAAC,QAAQ;YACZ,eAAI,aAAa,GAAE;AACxB,eAAO,GAAG,QAAQ;AAClB,kBAAU,GAAG;;;AAGjB,UAAO,KAAI;EACb","file":"rate_limit_utils.ddc.js"}');
  // Exports:
  return {
    utils__rate_limit_utils__rate_limit_utils: utils__rate_limit_utils__rate_limit_utils
  };
});

//# sourceMappingURL=rate_limit_utils.ddc.js.map
