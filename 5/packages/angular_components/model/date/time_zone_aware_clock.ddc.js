define(['dart_sdk', 'packages/logging/logging', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/di/providers', 'packages/quiver/time'], function(dart_sdk, logging, opaque_token, providers, time) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging$ = logging.logging;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__di__providers = providers.src__di__providers;
  const time$ = time.time;
  const _root = Object.create(null);
  const model__date__time_zone_aware_clock = Object.create(_root);
  const $isNaN = dartx.isNaN;
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  let SettableTimeZoneToClock = () => (SettableTimeZoneToClock = dart.constFn(dart.fnType(time$.Clock, [model__date__time_zone_aware_clock.SettableTimeZone])))();
  let VoidToSettableTimeZone = () => (VoidToSettableTimeZone = dart.constFn(dart.fnType(model__date__time_zone_aware_clock.SettableTimeZone, [])))();
  let CompleterOfNull = () => (CompleterOfNull = dart.constFn(async.Completer$(core.Null)))();
  dart.defineLazy(model__date__time_zone_aware_clock, {
    /*model__date__time_zone_aware_clock._logger*/get _logger() {
      return logging$.Logger.new("third_party.dart_src.acx.model.date.time_zone_aware_clock");
    },
    /*model__date__time_zone_aware_clock.timeZoneAwareClock*/get timeZoneAwareClock() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('timeZoneAwareClock'));
    },
    /*model__date__time_zone_aware_clock.timeZoneAwareClockProviders*/get timeZoneAwareClockProviders() {
      return dart.constList([dart.const(src__di__providers.Provider.new(dart.wrapType(model__date__time_zone_aware_clock.SettableTimeZone), {useFactory: model__date__time_zone_aware_clock.settableTimeZoneFactory})), dart.wrapType(model__date__time_zone_aware_clock.TimeZoneAwareClock), dart.const(src__di__providers.Provider.new(model__date__time_zone_aware_clock.timeZoneAwareClock, {useExisting: dart.wrapType(model__date__time_zone_aware_clock.TimeZoneAwareClock)}))], core.Object);
    }
  });
  const _now = Symbol('_now');
  model__date__time_zone_aware_clock.TimeZoneAwareClock = class TimeZoneAwareClock extends time$.Clock {
    toString() {
      return 'TimeZoneAwareClock';
    }
  };
  (model__date__time_zone_aware_clock.TimeZoneAwareClock.new = function(timeZone) {
    model__date__time_zone_aware_clock.TimeZoneAwareClock.__proto__.new.call(this, dart.bind(timeZone, _now));
  }).prototype = model__date__time_zone_aware_clock.TimeZoneAwareClock.prototype;
  (model__date__time_zone_aware_clock.TimeZoneAwareClock.fixed = function(time) {
    model__date__time_zone_aware_clock.TimeZoneAwareClock.__proto__.new.call(this, dart.fn(() => time, VoidToDateTime()));
  }).prototype = model__date__time_zone_aware_clock.TimeZoneAwareClock.prototype;
  dart.addTypeTests(model__date__time_zone_aware_clock.TimeZoneAwareClock);
  dart.defineExtensionMethods(model__date__time_zone_aware_clock.TimeZoneAwareClock, ['toString']);
  model__date__time_zone_aware_clock.clockFactory = function(timeZone) {
    return new model__date__time_zone_aware_clock.TimeZoneAwareClock.new(timeZone);
  };
  dart.lazyFn(model__date__time_zone_aware_clock.clockFactory, () => SettableTimeZoneToClock());
  model__date__time_zone_aware_clock.settableTimeZoneFactory = function() {
    return new model__date__time_zone_aware_clock.SettableTimeZone.new();
  };
  dart.lazyFn(model__date__time_zone_aware_clock.settableTimeZoneFactory, () => VoidToSettableTimeZone());
  const _time = Symbol('_time');
  const _initialized = Symbol('_initialized');
  const _offsetFromUtc = Symbol('_offsetFromUtc');
  model__date__time_zone_aware_clock.SettableTimeZone = class SettableTimeZone extends core.Object {
    get offsetFromUtc() {
      return this[_offsetFromUtc];
    }
    set offsetFromUtc(newOffset) {
      if (newOffset != null && newOffset.inMicroseconds == null) {
        dart.throw(new core.ArgumentError.value(newOffset, 'newOffset' + 'holds a null or undefined value'));
      }
      if (newOffset != null && newOffset.inMicroseconds[$isNaN]) {
        dart.throw(new core.ArgumentError.value(newOffset, 'newOffset' + 'is NaN!'));
      }
      if (!dart.test(this[_initialized].isCompleted) && newOffset != null) {
        this[_initialized].complete();
      }
      this[_offsetFromUtc] = newOffset;
    }
    get isInitialized() {
      return this[_offsetFromUtc] != null;
    }
    get onInit() {
      return this[_initialized].future;
    }
    [_now]() {
      let systemTime = this[_time]();
      if (this.offsetFromUtc != null) {
        if (systemTime.timeZoneOffset.inMicroseconds == null) {
          dart.throw(new core.StateError.new(dart.str`System time has a null or undefined timezone offset! ${systemTime}`));
        }
        if (systemTime.timeZoneOffset.inMicroseconds[$isNaN]) {
          dart.throw(new core.StateError.new(dart.str`System time has a NaN timezone offset! ${systemTime}`));
        }
        let offset = this.offsetFromUtc['-'](systemTime.timeZoneOffset);
        if (offset.inMicroseconds == null) {
          dart.throw(new core.StateError.new('Computed time offset is null or undefined! ' + dart.str`${this.offsetFromUtc} - ${systemTime.timeZoneOffset} = ${offset}`));
        }
        if (offset.inMicroseconds[$isNaN]) {
          dart.throw(new core.StateError.new('Computed time offset is NaN! ' + dart.str`${this.offsetFromUtc} - ${systemTime.timeZoneOffset} = ${offset}`));
        }
        return systemTime.add(offset);
      } else {
        model__date__time_zone_aware_clock._logger.severe("not initialized with time zone data");
        return systemTime;
      }
    }
  };
  (model__date__time_zone_aware_clock.SettableTimeZone.new = function(timeFunc) {
    if (timeFunc === void 0) timeFunc = time$.systemTime;
    this[_initialized] = CompleterOfNull().new();
    this[_offsetFromUtc] = null;
    this[_time] = timeFunc;
  }).prototype = model__date__time_zone_aware_clock.SettableTimeZone.prototype;
  dart.addTypeTests(model__date__time_zone_aware_clock.SettableTimeZone);
  dart.setMethodSignature(model__date__time_zone_aware_clock.SettableTimeZone, () => ({
    __proto__: dart.getMethods(model__date__time_zone_aware_clock.SettableTimeZone.__proto__),
    [_now]: dart.fnType(core.DateTime, [])
  }));
  dart.setGetterSignature(model__date__time_zone_aware_clock.SettableTimeZone, () => ({
    __proto__: dart.getGetters(model__date__time_zone_aware_clock.SettableTimeZone.__proto__),
    offsetFromUtc: dart.fnType(core.Duration, []),
    isInitialized: dart.fnType(core.bool, []),
    onInit: dart.fnType(async.Future$(core.Null), [])
  }));
  dart.setSetterSignature(model__date__time_zone_aware_clock.SettableTimeZone, () => ({
    __proto__: dart.getSetters(model__date__time_zone_aware_clock.SettableTimeZone.__proto__),
    offsetFromUtc: dart.fnType(dart.void, [core.Duration])
  }));
  dart.setFieldSignature(model__date__time_zone_aware_clock.SettableTimeZone, () => ({
    __proto__: dart.getFields(model__date__time_zone_aware_clock.SettableTimeZone.__proto__),
    [_time]: dart.finalFieldType(VoidToDateTime()),
    [_initialized]: dart.finalFieldType(CompleterOfNull()),
    [_offsetFromUtc]: dart.fieldType(core.Duration)
  }));
  dart.trackLibraries("packages/angular_components/model/date/time_zone_aware_clock.ddc", {
    "package:angular_components/model/date/time_zone_aware_clock.dart": model__date__time_zone_aware_clock
  }, '{"version":3,"sourceRoot":"","sources":["time_zone_aware_clock.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAWM,0CAAO;YACT,AAAI,oBAAM,CAAC;;MAOT,qDAAkB;YAAG,gBAAM,2CAAW,CAAC;;MAIvC,8DAA2B;YAAG,iBAClC,WAAM,+BAAQ,CAAC,kEAAgB,eAAc,0DAAuB,KACpE,oEAAkB,EAClB,WAAM,+BAAQ,CAAC,qDAAkB,gBAAe,oEAAkB;;;;;;YA+B7C;IAAoB;;wEAPtB,QAAyB;AAAI,6FAAM,QAAQ;EAAM;0EAI3C,IAAa;AAAI,mFAAM,cAAM,IAAI;EAAC;;;6DAO1C,QAAyB;UACxC,KAAI,yDAAkB,CAAC,QAAQ;EAAC;;;UAKU,KAAI,uDAAgB;EAAE;;;;;;;YAYpC,qBAAc;;sBAC1B,SAAkB;AAClC,UAAI,SAAS,IAAI,QAAQ,SAAS,eAAe,IAAI,MAAM;AACzD,mBAAM,IAAI,wBAAmB,CACzB,SAAS,EAAE,cAAY;;AAE7B,UAAI,SAAS,IAAI,QAAQ,SAAS,eAAe,QAAM,EAAE;AACvD,mBAAM,IAAI,wBAAmB,CAAC,SAAS,EAAE,cAAY;;AAGvD,qBAAK,kBAAY,YAAY,KAAI,SAAS,IAAI,MAAM;AAClD,0BAAY,SAAS;;AAEvB,0BAAc,GAAG,SAAS;IAC5B;;YAK0B,qBAAc,IAAI;IAAI;;YAIrB,mBAAY,OAAO;;;AAU5C,UAAI,aAAa,WAAK;AACtB,UAAI,kBAAa,IAAI,MAAM;AACzB,YAAI,UAAU,eAAe,eAAe,IAAI,MAAM;AACpD,qBAAM,IAAI,mBAAU,CAChB,gEAAuD,UAAU;;AAEvE,YAAI,UAAU,eAAe,eAAe,QAAM,EAAE;AAClD,qBAAM,IAAI,mBAAU,CAChB,kDAAyC,UAAU;;AAIzD,YAAI,SAAS,AAAc,kBAAD,MAAG,UAAU,eAAe;AACtD,YAAI,MAAM,eAAe,IAAI,MAAM;AACjC,qBAAM,IAAI,mBAAU,CAAC,gDACjB,WAAE,kBAAa,MAAK,UAAU,eAAe,MAAK,MAAM;;AAE9D,YAAI,MAAM,eAAe,QAAM,EAAE;AAC/B,qBAAM,IAAI,mBAAU,CAAC,kCACjB,WAAE,kBAAa,MAAK,UAAU,eAAe,MAAK,MAAM;;AAE9D,cAAO,WAAU,IAAI,CAAC,MAAM;aACvB;AAGL,kDAAO,OAAO,CAAC;AACf,cAAO,WAAU;;IAErB;;sEAlCkB,QAAkC;6BAArB,WAAW,gBAAU;IAjC9C,kBAAY,GAAG,AAAI,qBAAe;IAsB/B,oBAAc;IAWkC,WAAK,GAAG,QAAQ","file":"time_zone_aware_clock.ddc.js"}');
  // Exports:
  return {
    model__date__time_zone_aware_clock: model__date__time_zone_aware_clock
  };
});

//# sourceMappingURL=time_zone_aware_clock.ddc.js.map
