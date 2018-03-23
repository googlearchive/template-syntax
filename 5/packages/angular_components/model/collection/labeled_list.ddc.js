define(['dart_sdk', 'packages/collection/src/empty_unmodifiable_set', 'packages/angular_components/model/ui/display_name'], function(dart_sdk, empty_unmodifiable_set, display_name) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__wrappers = empty_unmodifiable_set.src__wrappers;
  const model__ui__display_name = display_name.model__ui__display_name;
  const _root = Object.create(null);
  const model__collection__labeled_list = Object.create(_root);
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let VoidToString$ = () => (VoidToString$ = dart.constFn(dart.fnType(core.String, [])))();
  model__collection__labeled_list.LabelFunction = dart.typedef('LabelFunction', () => dart.fnType(core.String, []));
  const _labelFcn = Symbol('_labelFcn');
  const _is_LabeledList_default = Symbol('_is_LabeledList_default');
  model__collection__labeled_list.LabeledList$ = dart.generic(T => {
    class LabeledList extends src__wrappers.DelegatingList$(T) {
      get hasLabel() {
        return this[_labelFcn] != null;
      }
      get uiDisplayName() {
        return this[_labelFcn] != null ? this[_labelFcn]() : null;
      }
    }
    (LabeledList.new = function(items, labelFcn) {
      if (labelFcn === void 0) labelFcn = null;
      this[_labelFcn] = labelFcn;
      LabeledList.__proto__.new.call(this, items);
    }).prototype = LabeledList.prototype;
    (LabeledList.withLabelFunction = function(items, labelFcn) {
      if (labelFcn === void 0) labelFcn = null;
      LabeledList.new.call(this, items, labelFcn);
    }).prototype = LabeledList.prototype;
    (LabeledList.withLabel = function(items, label) {
      if (label === void 0) label = null;
      LabeledList.new.call(this, items, label != null ? dart.fn(() => label, VoidToString()) : null);
    }).prototype = LabeledList.prototype;
    dart.addTypeTests(LabeledList);
    LabeledList.prototype[_is_LabeledList_default] = true;
    LabeledList[dart.implements] = () => [model__ui__display_name.HasUIDisplayName];
    dart.setGetterSignature(LabeledList, () => ({
      __proto__: dart.getGetters(LabeledList.__proto__),
      hasLabel: dart.fnType(core.bool, []),
      uiDisplayName: dart.fnType(core.String, [])
    }));
    dart.setFieldSignature(LabeledList, () => ({
      __proto__: dart.getFields(LabeledList.__proto__),
      [_labelFcn]: dart.finalFieldType(VoidToString$())
    }));
    return LabeledList;
  });
  model__collection__labeled_list.LabeledList = model__collection__labeled_list.LabeledList$();
  dart.addTypeTests(model__collection__labeled_list.LabeledList, _is_LabeledList_default);
  dart.trackLibraries("packages/angular_components/model/collection/labeled_list.ddc", {
    "package:angular_components/model/collection/labeled_list.dart": model__collection__labeled_list
  }, '{"version":3,"sourceRoot":"","sources":["labeled_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;cAeuB,gBAAS,IAAI;MAAI;;cAGV,gBAAS,IAAI,OAAO,eAAS,KAAK;MAAI;;gCAEtD,KAAa,EAAQ,QAAS;UAAT,QAAS,aAAT,QAAS;MAAT,eAAS,GAAT,QAAS;AAAK,2CAAM,KAAK;IAAC;8CAE7B,KAAa,EAAG,QAAsB;+BAAR;iCACjD,KAAK,EAAE,QAAQ;IAAC;sCAEL,KAAa,EAAG,KAAY;4BAAL;iCAClC,KAAK,EAAE,KAAK,IAAI,OAAQ,cAAM,KAAK,oBAAI;IAAK","file":"labeled_list.ddc.js"}');
  // Exports:
  return {
    model__collection__labeled_list: model__collection__labeled_list
  };
});

//# sourceMappingURL=labeled_list.ddc.js.map
