define(['dart_sdk', 'packages/angular_components/material_datepicker/range', 'packages/intl/intl', 'packages/angular_components/model/date/date'], function(dart_sdk, range, intl, date) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__range = range.material_datepicker__range;
  const intl$ = intl.intl;
  const model__date__date = date.model__date__date;
  const _root = Object.create(null);
  const material_datepicker__comparison = Object.create(_root);
  material_datepicker__comparison.DatepickerComparison = class DatepickerComparison extends core.Object {
    get range() {
      return this[range$];
    }
    set range(value) {
      super.range = value;
    }
    get comparison() {
      return this[comparison$];
    }
    set comparison(value) {
      super.comparison = value;
    }
    get isComparisonEnabled() {
      return this.comparison != null;
    }
    comparesToPreviousPeriod() {
      return this.comparison != null && dart.test(material_datepicker__range.rangeEqual(this.comparison, material_datepicker__comparison.DatepickerComparison._getPreviousRange(this.range)));
    }
    comparesToSamePeriodLastYear() {
      return this.comparison != null && dart.equals(this.comparison.unclamped(), material_datepicker__comparison.DatepickerComparison._getSamePeriodLastYearRange(this.range));
    }
    _equals(o) {
      if (o == null) return false;
      return material_datepicker__comparison.DatepickerComparison.is(o) && dart.test(material_datepicker__range.rangeEqual(this.range, o.range)) && dart.test(material_datepicker__range.rangeEqual(this.comparison, o.comparison));
    }
    get hashCode() {
      return dart.test(this.isComparisonEnabled) ? (dart.notNull(material_datepicker__range.rangeHash(this.range)) ^ dart.notNull(material_datepicker__range.rangeHash(this.comparison))) >>> 0 : material_datepicker__range.rangeHash(this.range);
    }
    toString() {
      return dart.str`DatepickerComparison -- ${this.range} / ${this.comparison}`;
    }
    static _getPreviousRange(range) {
      let prev = range.prev;
      if (prev != null && !dart.test(prev.isPredefined)) {
        return material_datepicker__range.DatepickerDateRange.new(material_datepicker__comparison.DatepickerComparison._prevPeriodMsg(), prev.start, prev.end);
      }
      return prev;
    }
    static _getSamePeriodLastYearRange(range) {
      return material_datepicker__range.DatepickerDateRange.new(material_datepicker__comparison.DatepickerComparison._lastYearMsg(), range.start.add({years: -1}), range.end.add({years: -1}));
    }
    static _prevPeriodMsg() {
      return intl$.Intl.message('Previous period', {name: '_prevPeriodMsg', meaning: 'Name of a date range', desc: 'Generic name for the period before a time range. E.g. if someone ' + 'has selected the last 30 days, this represents the 30 days previous.'});
    }
    static _lastYearMsg() {
      return intl$.Intl.message('Same period last year', {name: '_lastYearMsg', meaning: 'Name of a date range', desc: 'Generic name for a time period matching a selected date range, ' + 'but one year prior. E.g. if someone has selected Feb 2015, this ' + 'represents Feb 2014.'});
    }
  };
  (material_datepicker__comparison.DatepickerComparison.noComparison = function(range) {
    material_datepicker__comparison.DatepickerComparison.custom.call(this, range, null);
  }).prototype = material_datepicker__comparison.DatepickerComparison.prototype;
  (material_datepicker__comparison.DatepickerComparison.previousPeriod = function(range) {
    material_datepicker__comparison.DatepickerComparison.custom.call(this, range, material_datepicker__comparison.DatepickerComparison._getPreviousRange(range));
  }).prototype = material_datepicker__comparison.DatepickerComparison.prototype;
  (material_datepicker__comparison.DatepickerComparison.samePeriodLastYear = function(range) {
    material_datepicker__comparison.DatepickerComparison.custom.call(this, range, material_datepicker__comparison.DatepickerComparison._getSamePeriodLastYearRange(range));
  }).prototype = material_datepicker__comparison.DatepickerComparison.prototype;
  (material_datepicker__comparison.DatepickerComparison.reclamp = function(orig, min, max) {
    material_datepicker__comparison.DatepickerComparison.custom.call(this, (() => {
      let t = orig == null ? null : orig.range;
      let t$ = t == null ? null : t.unclamped();
      return t$ == null ? null : t$.clamp({min: min, max: max});
    })(), (() => {
      let t = orig == null ? null : orig.comparison;
      let t$ = t == null ? null : t.unclamped();
      return t$ == null ? null : t$.clamp({min: min, max: max});
    })());
  }).prototype = material_datepicker__comparison.DatepickerComparison.prototype;
  (material_datepicker__comparison.DatepickerComparison.custom = function(range, comparison) {
    this[range$] = range;
    this[comparison$] = comparison;
  }).prototype = material_datepicker__comparison.DatepickerComparison.prototype;
  dart.addTypeTests(material_datepicker__comparison.DatepickerComparison);
  const range$ = Symbol("DatepickerComparison.range");
  const comparison$ = Symbol("DatepickerComparison.comparison");
  material_datepicker__comparison.DatepickerComparison[dart.implements] = () => [model__date__date.DateRangeComparison];
  dart.setMethodSignature(material_datepicker__comparison.DatepickerComparison, () => ({
    __proto__: dart.getMethods(material_datepicker__comparison.DatepickerComparison.__proto__),
    comparesToPreviousPeriod: dart.fnType(core.bool, []),
    comparesToSamePeriodLastYear: dart.fnType(core.bool, [])
  }));
  dart.setStaticMethodSignature(material_datepicker__comparison.DatepickerComparison, () => ({
    _getPreviousRange: dart.fnType(material_datepicker__range.DatepickerDateRange, [material_datepicker__range.DatepickerDateRange]),
    _getSamePeriodLastYearRange: dart.fnType(material_datepicker__range.DatepickerDateRange, [material_datepicker__range.DatepickerDateRange]),
    _prevPeriodMsg: dart.fnType(core.String, []),
    _lastYearMsg: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(material_datepicker__comparison.DatepickerComparison, () => ({
    __proto__: dart.getGetters(material_datepicker__comparison.DatepickerComparison.__proto__),
    isComparisonEnabled: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(material_datepicker__comparison.DatepickerComparison, () => ({
    __proto__: dart.getFields(material_datepicker__comparison.DatepickerComparison.__proto__),
    range: dart.finalFieldType(material_datepicker__range.DatepickerDateRange),
    comparison: dart.finalFieldType(material_datepicker__range.DatepickerDateRange)
  }));
  dart.defineExtensionMethods(material_datepicker__comparison.DatepickerComparison, ['_equals', 'toString']);
  dart.defineExtensionAccessors(material_datepicker__comparison.DatepickerComparison, ['hashCode']);
  dart.trackLibraries("packages/angular_components/material_datepicker/comparison.ddc", {
    "package:angular_components/material_datepicker/comparison.dart": material_datepicker__comparison
  }, '{"version":3,"sourceRoot":"","sources":["comparison.dart"],"names":[],"mappings":";;;;;;;;;;;IAY4B;;;;;;IAGA;;;;;;;YAmBM,gBAAU,IAAI;IAAI;;YAG9C,AAAmB,gBAAT,IAAI,kBAAQ,qCAAU,CAAC,eAAU,EAAE,sEAAiB,CAAC,UAAK;IAAE;;YAGtE,AAAmB,gBAAT,IAAI,oBACd,eAAU,UAAU,IAAM,gFAA2B,CAAC,UAAK;IAAC;YAE/C,CAAC;UAAD,CAAC;YAEa,yDAD3B,CAAC,eACD,qCAAU,CAAC,UAAK,EAAE,CAAC,MAAM,gBACzB,qCAAU,CAAC,eAAU,EAAE,CAAC,WAAW;IAAC;;uBACpB,wBAAmB,IACjC,CAAiB,aAAjB,oCAAS,CAAC,UAAK,kBAAI,oCAAS,CAAC,eAAU,YACvC,oCAAS,CAAC,UAAK;IAAC;;YACD,oCAA0B,UAAK,MAAI,eAAU;IAAC;6BAKtB,KAAyB;AACpE,UAAI,OAAO,KAAK,KAAK;AACrB,UAAI,IAAI,IAAI,mBAAS,IAAI,aAAa,GAAE;AACtC,cAAO,AAAI,mDAAmB,CAAC,mEAAc,IAAI,IAAI,MAAM,EAAE,IAAI,IAAI;;AAEvE,YAAO,KAAI;IACb;uCAGQ,KAAyB;YAC7B,AAAI,mDAAmB,CACnB,iEAAY,IAAI,KAAK,MAAM,IAAI,SAAQ,CAAC,KAAI,KAAK,IAAI,IAAI,SAAQ,CAAC;IAAG;;YAE3C,WAAI,QAAQ,CAAC,0BACrC,2BACG,8BACH,sEACF;IAAuE;;YAC/C,WAAI,QAAQ,CAAC,gCACnC,yBACG,8BACH,oEACF,qEACA;IAAuB;;gFA7DG,KAAyB;2EACzC,KAAK,EAAE;EAAK;kFAEM,KAAyB;2EAC3C,KAAK,EAAE,sEAAiB,CAAC,KAAK;EAAE;sFAEV,KAAyB;2EAC/C,KAAK,EAAE,gFAA2B,CAAC,KAAK;EAAE;2EAI/B,IAAyB,EAAE,GAAQ,EAAE,GAAQ;;cACxD,IAAI,kBAAJ,IAAI,MAAO;;gDAA0B,GAAG,OAAO,GAAG;;cAC1D,IAAI,kBAAJ,IAAI,WAAY;;gDAA0B,GAAG,OAAO,GAAG;;EAAE;0EAEvC,KAAU,EAAE,UAAe;IAAtB,YAAK,GAAL,KAAK;IAAO,iBAAU,GAAV,UAAU;EAAC","file":"comparison.ddc.js"}');
  // Exports:
  return {
    material_datepicker__comparison: material_datepicker__comparison
  };
});

//# sourceMappingURL=comparison.ddc.js.map
