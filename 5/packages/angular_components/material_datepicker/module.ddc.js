define(['dart_sdk', 'packages/quiver/time', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/laminate/popup/module', 'packages/angular/src/di/providers', 'packages/angular_components/model/date/time_zone_aware_clock', 'packages/angular_components/material_datepicker/model', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/comparison', 'packages/angular_components/material_datepicker/range'], function(dart_sdk, time, opaque_token, module, providers, time_zone_aware_clock, model, date, comparison, range) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const time$ = time.time;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const laminate__popup__module = module.laminate__popup__module;
  const src__di__providers = providers.src__di__providers;
  const model__date__time_zone_aware_clock = time_zone_aware_clock.model__date__time_zone_aware_clock;
  const material_datepicker__model = model.material_datepicker__model;
  const model__date__date = date.model__date__date;
  const material_datepicker__comparison = comparison.material_datepicker__comparison;
  const material_datepicker__range = range.material_datepicker__range;
  const _root = Object.create(null);
  const material_datepicker__module = Object.create(_root);
  let DatepickerComparisonAndDatepickerDateRangeToDatepickerModel = () => (DatepickerComparisonAndDatepickerDateRangeToDatepickerModel = dart.constFn(dart.fnType(material_datepicker__model.DatepickerModel, [material_datepicker__comparison.DatepickerComparison, material_datepicker__range.DatepickerDateRange])))();
  let DatepickerModelToDatepickerSelection = () => (DatepickerModelToDatepickerSelection = dart.constFn(dart.fnType(model__date__date.DatepickerSelection, [material_datepicker__model.DatepickerModel])))();
  dart.defineLazy(material_datepicker__module, {
    /*material_datepicker__module.clockValue*/get clockValue() {
      return dart.const(new time$.Clock.new());
    },
    /*material_datepicker__module.datepickerClock*/get datepickerClock() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'));
    },
    /*material_datepicker__module.datepickerBindings*/get datepickerBindings() {
      return dart.constList([laminate__popup__module.popupBindings, material_datepicker__module._legacyClockBinding, dart.const(src__di__providers.Provider.new(material_datepicker__module.datepickerClock, {useExisting: dart.wrapType(time$.Clock)}))], core.Object);
    },
    /*material_datepicker__module.timeZoneAwareDatepickerProviders*/get timeZoneAwareDatepickerProviders() {
      return dart.constList([material_datepicker__module._legacyClockBinding, model__date__time_zone_aware_clock.timeZoneAwareClockProviders, dart.const(src__di__providers.Provider.new(material_datepicker__module.datepickerClock, {useExisting: model__date__time_zone_aware_clock.timeZoneAwareClock}))], core.Object);
    },
    /*material_datepicker__module._legacyClockBinding*/get _legacyClockBinding() {
      return dart.const(src__di__providers.Provider.new(dart.wrapType(time$.Clock), {useValue: material_datepicker__module.clockValue}));
    },
    /*material_datepicker__module.defaultDateRange*/get defaultDateRange() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('defaultDateRange'));
    },
    /*material_datepicker__module.defaultDateComparison*/get defaultDateComparison() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('defaultDateComparison'));
    },
    /*material_datepicker__module.globalDateRangeBindings*/get globalDateRangeBindings() {
      return dart.constList([dart.const(src__di__providers.Provider.new(dart.wrapType(material_datepicker__model.DatepickerModel), {useFactory: material_datepicker__module.modelFactory})), dart.const(src__di__providers.Provider.new(dart.wrapType(model__date__date.DatepickerSelection), {useFactory: material_datepicker__module.selectionFactory}))], src__di__providers.Provider);
    }
  });
  material_datepicker__module.modelFactory = function(cmp, range) {
    return new material_datepicker__model.DatepickerModel.new(cmp != null ? cmp : new material_datepicker__comparison.DatepickerComparison.noComparison(range));
  };
  dart.fn(material_datepicker__module.modelFactory, DatepickerComparisonAndDatepickerDateRangeToDatepickerModel());
  material_datepicker__module.selectionFactory = function(model) {
    return new model__date__date.DatepickerSelection.wrap(model);
  };
  dart.fn(material_datepicker__module.selectionFactory, DatepickerModelToDatepickerSelection());
  dart.trackLibraries("packages/angular_components/material_datepicker/module.ddc", {
    "package:angular_components/material_datepicker/module.dart": material_datepicker__module
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAYM,sCAAU;YAAG,gBAAM,eAAK;;MAExB,2CAAe;YAAG,gBAAM,2CAAW,CACrC;;MAOE,8CAAkB;YAAG,iBACzB,qCAAa,EACb,+CAAmB,EACnB,WAAM,+BAAQ,CAAC,2CAAe,gBAAe,0BAAK;;MAc9C,4DAAgC;YAAG,iBACvC,+CAAmB,EACnB,8DAA2B,EAC3B,WAAM,+BAAQ,CAAC,2CAAe,gBAAe,qDAAkB;;MAM3D,+CAAmB;YAAG,YAAM,+BAAQ,CAAC,0BAAK,aAAY,sCAAU;;MAEhE,4CAAgB;YAAG,gBAAM,2CAAW,CAAC;;MACrC,iDAAqB;YAAG,gBAAM,2CAAW,CAAC;;MAoB1C,mDAAuB;YAAG,iBAC9B,WAAM,+BAAQ,CAAC,yDAAe,eAAc,wCAAY,KACxD,WAAM,+BAAQ,CAAC,oDAAmB,eAAc,4CAAgB;;;sDAK1D,GAAmE,EACnE,KAA+D;UACnE,KAAI,8CAAe,CAAC,GAAG,WAAH,GAAG,GAAI,IAAI,iEAAiC,CAAC,KAAK;EAAE;;0DAGvC,KAAqB;UACtD,KAAI,0CAAwB,CAAC,KAAK;EAAC","file":"module.ddc.js"}');
  // Exports:
  return {
    material_datepicker__module: material_datepicker__module
  };
});

//# sourceMappingURL=module.ddc.js.map
