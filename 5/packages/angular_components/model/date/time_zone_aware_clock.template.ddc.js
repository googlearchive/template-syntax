define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/model/date/time_zone_aware_clock', 'packages/angular/di.template'], function(dart_sdk, reflector, time_zone_aware_clock, di) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const model__date__time_zone_aware_clock = time_zone_aware_clock.model__date__time_zone_aware_clock;
  const di$46template = di.di$46template;
  const _root = Object.create(null);
  const model__date__time_zone_aware_clock$46template = Object.create(_root);
  let SettableTimeZoneToTimeZoneAwareClock = () => (SettableTimeZoneToTimeZoneAwareClock = dart.constFn(dart.fnType(model__date__time_zone_aware_clock.TimeZoneAwareClock, [model__date__time_zone_aware_clock.SettableTimeZone])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(model__date__time_zone_aware_clock$46template, {
    /*model__date__time_zone_aware_clock$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  let const$2;
  model__date__time_zone_aware_clock$46template.initReflector = function() {
    if (dart.test(model__date__time_zone_aware_clock$46template._visited)) {
      return;
    }
    model__date__time_zone_aware_clock$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(model__date__time_zone_aware_clock.TimeZoneAwareClock), dart.fn(p0 => new model__date__time_zone_aware_clock.TimeZoneAwareClock.new(p0), SettableTimeZoneToTimeZoneAwareClock()));
    src__di__reflector.registerDependencies(dart.wrapType(model__date__time_zone_aware_clock.TimeZoneAwareClock), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(model__date__time_zone_aware_clock.SettableTimeZone)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(model__date__time_zone_aware_clock.clockFactory, const$2 || (const$2 = dart.constList([const$1 || (const$1 = dart.constList([dart.wrapType(model__date__time_zone_aware_clock.SettableTimeZone)], core.Object))], ListOfObject())));
    di$46template.initReflector();
  };
  dart.fn(model__date__time_zone_aware_clock$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/date/time_zone_aware_clock.template.ddc", {
    "package:angular_components/model/date/time_zone_aware_clock.template.dart": model__date__time_zone_aware_clock$46template
  }, '{"version":3,"sourceRoot":"","sources":["time_zone_aware_clock.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAgBI,sDAAQ;YAAG;;;;;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAO,kCAAe,CAAC,oEAAkB,EAAE,QAAC,EAAuB,IAAK,IAAI,yDAAkB,CAAC,EAAE;AACjG,IAAO,uCAAoB,CAAC,oEAAkB,EAAE,sCAC9C,oCAAW,kEAAgB;AAE7B,IAAO,uCAAoB,CAAC,+CAAY,EAAE,sCACxC,sCAAW,kEAAgB;AAE7B,IAAM,2BAAa;EACrB","file":"time_zone_aware_clock.template.ddc.js"}');
  // Exports:
  return {
    model__date__time_zone_aware_clock$46template: model__date__time_zone_aware_clock$46template
  };
});

//# sourceMappingURL=time_zone_aware_clock.template.ddc.js.map
