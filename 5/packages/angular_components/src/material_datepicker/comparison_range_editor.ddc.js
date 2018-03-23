define(['dart_sdk', 'packages/angular_components/src/material_datepicker/date_range_editor_model', 'packages/intl/intl'], function(dart_sdk, date_range_editor_model, intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_datepicker__date_range_editor_model = date_range_editor_model.src__material_datepicker__date_range_editor_model;
  const intl$ = intl.intl;
  const _root = Object.create(null);
  const src__material_datepicker__comparison_range_editor = Object.create(_root);
  let JSArrayOfComparisonOption = () => (JSArrayOfComparisonOption = dart.constFn(_interceptors.JSArray$(src__material_datepicker__date_range_editor_model.ComparisonOption)))();
  let ListOfComparisonOption = () => (ListOfComparisonOption = dart.constFn(core.List$(src__material_datepicker__date_range_editor_model.ComparisonOption)))();
  const _previousPeriodMsg = Symbol('_previousPeriodMsg');
  src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent = class ComparisonRangeEditorComponent extends core.Object {
    get model() {
      return this[model];
    }
    set model(value) {
      this[model] = value;
    }
    get options() {
      return this[options];
    }
    set options(value) {
      super.options = value;
    }
    get comparisonHeaderMsg() {
      return intl$.Intl.message('Compare', {name: 'comparisonHeaderMsg', desc: 'Label for a toggle that turns time comparison on/off.'});
    }
    get previousPeriodMsg() {
      let prev = this.model.prevRange;
      return (prev == null ? null : prev.isPredefined) === true ? prev.title : this[_previousPeriodMsg];
    }
    get [_previousPeriodMsg]() {
      return intl$.Intl.message('Previous period', {name: '_previousPeriodMsg', meaning: 'Name for a time comparison option', desc: 'Setting to compare the selected date range with the previous ' + 'period. E.g. if the selected range were May, this would be April.'});
    }
    get samePeriodLastYearMsg() {
      return intl$.Intl.message('Previous year', {name: 'samePeriodLastYearMsg', meaning: 'Name for a time comparison option', desc: 'Setting to compare the selected date range with the same range ' + 'last year. E.g. if the selected range were May 2015, this would be ' + 'May 2014.'});
    }
    get customMsg() {
      return intl$.Intl.message('Custom', {name: 'customMsg', meaning: 'Name for a time comparison option', desc: 'Setting to compare the selected date range with another arbitrary ' + 'user-selected date range.'});
    }
    comparisonOptionMsg(option) {
      switch (option) {
        case src__material_datepicker__date_range_editor_model.ComparisonOption.previousPeriod:
        {
          return this.previousPeriodMsg;
        }
        case src__material_datepicker__date_range_editor_model.ComparisonOption.samePeriodLastYear:
        {
          return this.samePeriodLastYearMsg;
        }
        case src__material_datepicker__date_range_editor_model.ComparisonOption.custom:
        {
          return this.customMsg;
        }
        default:
        {
          return '<unknown comparison option>';
        }
      }
    }
  };
  (src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.new = function() {
    this[model] = null;
    this[options] = JSArrayOfComparisonOption().of([src__material_datepicker__date_range_editor_model.ComparisonOption.previousPeriod, src__material_datepicker__date_range_editor_model.ComparisonOption.samePeriodLastYear, src__material_datepicker__date_range_editor_model.ComparisonOption.custom]);
  }).prototype = src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent);
  const model = Symbol("ComparisonRangeEditorComponent.model");
  const options = Symbol("ComparisonRangeEditorComponent.options");
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.__proto__),
    comparisonOptionMsg: dart.fnType(core.String, [src__material_datepicker__date_range_editor_model.ComparisonOption])
  }));
  dart.setGetterSignature(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent, () => ({
    __proto__: dart.getGetters(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.__proto__),
    comparisonHeaderMsg: dart.fnType(core.String, []),
    previousPeriodMsg: dart.fnType(core.String, []),
    [_previousPeriodMsg]: dart.fnType(core.String, []),
    samePeriodLastYearMsg: dart.fnType(core.String, []),
    customMsg: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.__proto__),
    model: dart.fieldType(src__material_datepicker__date_range_editor_model.HasComparisonRange),
    options: dart.finalFieldType(ListOfComparisonOption())
  }));
  dart.trackLibraries("packages/angular_components/src/material_datepicker/comparison_range_editor.ddc", {
    "package:angular_components/src/material_datepicker/comparison_range_editor.dart": src__material_datepicker__comparison_range_editor
  }, '{"version":3,"sourceRoot":"","sources":["comparison_range_editor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IA4CqB;;;;;;IAEU;;;;;;;YAMK,WAAI,QAAQ,CAAC,kBACrC,6BACA;IAAwD;;AAKhE,UAAI,OAAO,UAAK,UAAU;AAC1B,cAAO,IAAI,kBAAJ,IAAI,aAAc,MAAI,OAAO,IAAI,MAAM,GAAG,wBAAkB;IACrE;;YAEiC,WAAI,QAAQ,CAAC,0BACpC,+BACG,2CACH,kEACF;IAAoE;;YAExC,WAAI,QAAQ,CAAC,wBACvC,kCACG,2CACH,oEACF,wEACA;IAAY;;YAEI,WAAI,QAAQ,CAAC,iBAC3B,sBACG,2CACH,uEACF;IAA4B;wBAET,MAAuB;AAChD,cAAQ,MAAM;YACP,mEAAgB,eAAe;;AAClC,gBAAO,uBAAiB;;YACrB,mEAAgB,mBAAmB;;AACtC,gBAAO,2BAAqB;;YACzB,mEAAgB,OAAO;;AAC1B,gBAAO,eAAS;;;;AAEhB,gBAAO;;;IAEb;;;IAjDmB,WAAK;IAEK,aAAO,GAAG,gCACrC,kEAAgB,eAAe,EAC/B,kEAAgB,mBAAmB,EACnC,kEAAgB,OAAO;EA6C3B","file":"comparison_range_editor.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__comparison_range_editor: src__material_datepicker__comparison_range_editor
  };
});

//# sourceMappingURL=comparison_range_editor.ddc.js.map
