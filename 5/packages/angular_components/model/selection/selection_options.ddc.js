define(['dart_sdk', 'packages/angular_components/model/collection/labeled_list', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/observable/observable'], function(dart_sdk, labeled_list, disposer, observable) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__collection__labeled_list = labeled_list.model__collection__labeled_list;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const model__observable__observable = observable.model__observable__observable;
  const _root = Object.create(null);
  const src__model__selection__delegating_selection_options = Object.create(_root);
  const model__selection__selection_options = Object.create(_root);
  const $toList = dartx.toList;
  const $expand = dartx.expand;
  const $any = dartx.any;
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let VoidToString$ = () => (VoidToString$ = dart.constFn(dart.fnType(core.String, [])))();
  const _options = Symbol('_options');
  const _is_DelegatingSelectionOptions_default = Symbol('_is_DelegatingSelectionOptions_default');
  src__model__selection__delegating_selection_options.DelegatingSelectionOptions$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    let ListOfOptionGroupOfT = () => (ListOfOptionGroupOfT = dart.constFn(core.List$(OptionGroupOfT())))();
    let SelectionOptionsOfT = () => (SelectionOptionsOfT = dart.constFn(model__selection__selection_options.SelectionOptions$(T)))();
    class DelegatingSelectionOptions extends core.Object {
      get optionGroups() {
        return this[_options].optionGroups;
      }
      set optionGroups(groups) {
        ListOfOptionGroupOfT()._check(groups);
        this[_options].optionGroups = groups;
      }
      dispose() {
        this[_options].dispose();
      }
      get isNotEmpty() {
        return this[_options].isNotEmpty;
      }
      get optionsList() {
        return this[_options].optionsList;
      }
      get stream() {
        return this[_options].stream;
      }
    }
    (DelegatingSelectionOptions.new = function(options) {
      this[_options] = options;
    }).prototype = DelegatingSelectionOptions.prototype;
    dart.addTypeTests(DelegatingSelectionOptions);
    DelegatingSelectionOptions.prototype[_is_DelegatingSelectionOptions_default] = true;
    DelegatingSelectionOptions[dart.implements] = () => [SelectionOptionsOfT()];
    dart.setMethodSignature(DelegatingSelectionOptions, () => ({
      __proto__: dart.getMethods(DelegatingSelectionOptions.__proto__),
      dispose: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(DelegatingSelectionOptions, () => ({
      __proto__: dart.getGetters(DelegatingSelectionOptions.__proto__),
      optionGroups: dart.fnType(core.List$(model__selection__selection_options.OptionGroup$(T)), []),
      isNotEmpty: dart.fnType(core.bool, []),
      optionsList: dart.fnType(core.List$(T), []),
      stream: dart.fnType(async.Stream$(core.List$(model__selection__selection_options.OptionGroup$(T))), [])
    }));
    dart.setSetterSignature(DelegatingSelectionOptions, () => ({
      __proto__: dart.getSetters(DelegatingSelectionOptions.__proto__),
      optionGroups: dart.fnType(dart.void, [ListOfOptionGroupOfT()])
    }));
    dart.setFieldSignature(DelegatingSelectionOptions, () => ({
      __proto__: dart.getFields(DelegatingSelectionOptions.__proto__),
      [_options]: dart.fieldType(SelectionOptionsOfT())
    }));
    return DelegatingSelectionOptions;
  });
  src__model__selection__delegating_selection_options.DelegatingSelectionOptions = src__model__selection__delegating_selection_options.DelegatingSelectionOptions$();
  dart.addTypeTests(src__model__selection__delegating_selection_options.DelegatingSelectionOptions, _is_DelegatingSelectionOptions_default);
  const _emptyLabelFcn = Symbol('_emptyLabelFcn');
  const _is_OptionGroup_default = Symbol('_is_OptionGroup_default');
  model__selection__selection_options.OptionGroup$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    class OptionGroup extends model__collection__labeled_list.LabeledList$(T) {
      get emptyLabel() {
        return this[_emptyLabelFcn] != null ? this[_emptyLabelFcn]() : null;
      }
      get hasEmptyLabel() {
        return this[_emptyLabelFcn] != null;
      }
      slicedOptionGroup(start, end) {
        let subListItems = this.sublist(start, end);
        return new (OptionGroupOfT()).withLabelFunction(subListItems, dart.test(this.hasLabel) ? null : dart.fn(() => this.uiDisplayName, VoidToString()), this[_emptyLabelFcn]);
      }
    }
    (OptionGroup.new = function(items, labelFcn) {
      if (labelFcn === void 0) labelFcn = null;
      this[_emptyLabelFcn] = null;
      OptionGroup.__proto__.new.call(this, items, labelFcn);
    }).prototype = OptionGroup.prototype;
    (OptionGroup.withLabelFunction = function(items, labelFcn, emptyLabelFcn) {
      if (labelFcn === void 0) labelFcn = null;
      if (emptyLabelFcn === void 0) emptyLabelFcn = null;
      this[_emptyLabelFcn] = emptyLabelFcn;
      OptionGroup.__proto__.withLabelFunction.call(this, items, labelFcn);
    }).prototype = OptionGroup.prototype;
    (OptionGroup.withLabel = function(items, label, emptyLabel) {
      if (label === void 0) label = null;
      if (emptyLabel === void 0) emptyLabel = null;
      this[_emptyLabelFcn] = emptyLabel != null ? dart.fn(() => emptyLabel, VoidToString()) : null;
      OptionGroup.__proto__.withLabel.call(this, items, label);
    }).prototype = OptionGroup.prototype;
    dart.addTypeTests(OptionGroup);
    OptionGroup.prototype[_is_OptionGroup_default] = true;
    dart.setMethodSignature(OptionGroup, () => ({
      __proto__: dart.getMethods(OptionGroup.__proto__),
      slicedOptionGroup: dart.fnType(model__selection__selection_options.OptionGroup$(T), [core.int, core.int])
    }));
    dart.setGetterSignature(OptionGroup, () => ({
      __proto__: dart.getGetters(OptionGroup.__proto__),
      emptyLabel: dart.fnType(core.String, []),
      hasEmptyLabel: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(OptionGroup, () => ({
      __proto__: dart.getFields(OptionGroup.__proto__),
      [_emptyLabelFcn]: dart.fieldType(VoidToString$())
    }));
    return OptionGroup;
  });
  model__selection__selection_options.OptionGroup = model__selection__selection_options.OptionGroup$();
  dart.addTypeTests(model__selection__selection_options.OptionGroup, _is_OptionGroup_default);
  const _is_GroupedOptions_default = Symbol('_is_GroupedOptions_default');
  model__selection__selection_options.GroupedOptions$ = dart.generic(T => {
    class GroupedOptions extends core.Object {
      dispose() {}
    }
    (GroupedOptions.new = function() {
    }).prototype = GroupedOptions.prototype;
    dart.addTypeTests(GroupedOptions);
    GroupedOptions.prototype[_is_GroupedOptions_default] = true;
    GroupedOptions[dart.implements] = () => [utils__disposer__disposer.Disposable];
    dart.setMethodSignature(GroupedOptions, () => ({
      __proto__: dart.getMethods(GroupedOptions.__proto__),
      dispose: dart.fnType(dart.void, [])
    }));
    return GroupedOptions;
  });
  model__selection__selection_options.GroupedOptions = model__selection__selection_options.GroupedOptions$();
  dart.addTypeTests(model__selection__selection_options.GroupedOptions, _is_GroupedOptions_default);
  const _controller = Symbol('_controller');
  const _flattenedList = Symbol('_flattenedList');
  const _optionGroups = Symbol('_optionGroups');
  const _setOptions = Symbol('_setOptions');
  const _is_SelectionOptions_default = Symbol('_is_SelectionOptions_default');
  model__selection__selection_options.SelectionOptions$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    let ListOfOptionGroupOfT = () => (ListOfOptionGroupOfT = dart.constFn(core.List$(OptionGroupOfT())))();
    let StreamControllerOfListOfOptionGroupOfT = () => (StreamControllerOfListOfOptionGroupOfT = dart.constFn(async.StreamController$(ListOfOptionGroupOfT())))();
    let JSArrayOfOptionGroupOfT = () => (JSArrayOfOptionGroupOfT = dart.constFn(_interceptors.JSArray$(OptionGroupOfT())))();
    let _FutureSelectionOptionsOfT = () => (_FutureSelectionOptionsOfT = dart.constFn(model__selection__selection_options._FutureSelectionOptions$(T)))();
    let _StreamSelectionOptionsOfT = () => (_StreamSelectionOptionsOfT = dart.constFn(model__selection__selection_options._StreamSelectionOptions$(T)))();
    let OptionGroupOfTToOptionGroupOfT = () => (OptionGroupOfTToOptionGroupOfT = dart.constFn(dart.fnType(OptionGroupOfT(), [OptionGroupOfT()])))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let OptionGroupOfTTobool = () => (OptionGroupOfTTobool = dart.constFn(dart.fnType(core.bool, [OptionGroupOfT()])))();
    let ObserveAwareOfListOfOptionGroupOfT = () => (ObserveAwareOfListOfOptionGroupOfT = dart.constFn(model__observable__observable.ObserveAware$(ListOfOptionGroupOfT())))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class SelectionOptions extends model__selection__selection_options.GroupedOptions$(T) {
      static fromFuture(optionGroupListFuture) {
        return new (_FutureSelectionOptionsOfT()).new(optionGroupListFuture);
      }
      static fromStream(optionGroupListStream) {
        return new (_StreamSelectionOptionsOfT()).new(optionGroupListStream);
      }
      get stream() {
        return this[_controller].stream;
      }
      get optionGroups() {
        return this[_optionGroups];
      }
      set optionGroups(value) {
        ListOfOptionGroupOfT()._check(value);
        let oldValue = this[_optionGroups];
        if (!dart.equals(oldValue, value)) {
          this[_optionGroups] = value;
          this[_flattenedList] = this[_optionGroups] != null ? this[_optionGroups][$expand](T, dart.fn(i => i, OptionGroupOfTToOptionGroupOfT()))[$toList]() : JSArrayOfT().of([]);
          this[_controller].add(this[_optionGroups]);
        }
      }
      get optionsList() {
        return this[_flattenedList];
      }
      get isNotEmpty() {
        return this.optionGroups[$any](dart.fn(group => group.isNotEmpty, OptionGroupOfTTobool()));
      }
      [_setOptions](newOptions) {
        ListOfOptionGroupOfT()._check(newOptions);
        this.optionGroups = newOptions;
      }
      dispose() {
        this[_controller].close();
        super.dispose();
      }
    }
    (SelectionOptions.new = function(optionGroups) {
      this[_controller] = StreamControllerOfListOfOptionGroupOfT().broadcast({sync: true});
      this[_flattenedList] = null;
      this[_optionGroups] = null;
      this.optionGroups = optionGroups;
    }).prototype = SelectionOptions.prototype;
    (SelectionOptions.fromList = function(options, opts) {
      let label = opts && 'label' in opts ? opts.label : null;
      SelectionOptions.new.call(this, JSArrayOfOptionGroupOfT().of([new (OptionGroupOfT()).withLabel(options, label)]));
    }).prototype = SelectionOptions.prototype;
    (SelectionOptions.withOptionGroups = function(optionGroups) {
      SelectionOptions.new.call(this, optionGroups);
    }).prototype = SelectionOptions.prototype;
    dart.addTypeTests(SelectionOptions);
    SelectionOptions.prototype[_is_SelectionOptions_default] = true;
    SelectionOptions[dart.implements] = () => [ObserveAwareOfListOfOptionGroupOfT()];
    dart.setMethodSignature(SelectionOptions, () => ({
      __proto__: dart.getMethods(SelectionOptions.__proto__),
      [_setOptions]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(SelectionOptions, () => ({
      __proto__: dart.getGetters(SelectionOptions.__proto__),
      stream: dart.fnType(async.Stream$(core.List$(model__selection__selection_options.OptionGroup$(T))), []),
      optionGroups: dart.fnType(core.List$(model__selection__selection_options.OptionGroup$(T)), []),
      optionsList: dart.fnType(core.List$(T), []),
      isNotEmpty: dart.fnType(core.bool, [])
    }));
    dart.setSetterSignature(SelectionOptions, () => ({
      __proto__: dart.getSetters(SelectionOptions.__proto__),
      optionGroups: dart.fnType(dart.void, [ListOfOptionGroupOfT()])
    }));
    dart.setFieldSignature(SelectionOptions, () => ({
      __proto__: dart.getFields(SelectionOptions.__proto__),
      [_controller]: dart.finalFieldType(StreamControllerOfListOfOptionGroupOfT()),
      [_flattenedList]: dart.fieldType(ListOfT()),
      [_optionGroups]: dart.fieldType(ListOfOptionGroupOfT())
    }));
    return SelectionOptions;
  });
  model__selection__selection_options.SelectionOptions = model__selection__selection_options.SelectionOptions$();
  dart.addTypeTests(model__selection__selection_options.SelectionOptions, _is_SelectionOptions_default);
  const _is__FutureSelectionOptions_default = Symbol('_is__FutureSelectionOptions_default');
  model__selection__selection_options._FutureSelectionOptions$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    let JSArrayOfOptionGroupOfT = () => (JSArrayOfOptionGroupOfT = dart.constFn(_interceptors.JSArray$(OptionGroupOfT())))();
    class _FutureSelectionOptions extends model__selection__selection_options.SelectionOptions$(T) {}
    (_FutureSelectionOptions.new = function(optionGroupListFuture) {
      _FutureSelectionOptions.__proto__.new.call(this, JSArrayOfOptionGroupOfT().of([]));
      optionGroupListFuture.then(dart.void, dart.bind(this, _setOptions));
    }).prototype = _FutureSelectionOptions.prototype;
    dart.addTypeTests(_FutureSelectionOptions);
    _FutureSelectionOptions.prototype[_is__FutureSelectionOptions_default] = true;
    return _FutureSelectionOptions;
  });
  model__selection__selection_options._FutureSelectionOptions = model__selection__selection_options._FutureSelectionOptions$();
  dart.addTypeTests(model__selection__selection_options._FutureSelectionOptions, _is__FutureSelectionOptions_default);
  const _streamSub = Symbol('_streamSub');
  const _is__StreamSelectionOptions_default = Symbol('_is__StreamSelectionOptions_default');
  model__selection__selection_options._StreamSelectionOptions$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    let JSArrayOfOptionGroupOfT = () => (JSArrayOfOptionGroupOfT = dart.constFn(_interceptors.JSArray$(OptionGroupOfT())))();
    class _StreamSelectionOptions extends model__selection__selection_options.SelectionOptions$(T) {
      dispose() {
        let t = this[_streamSub];
        t == null ? null : t.cancel();
      }
    }
    (_StreamSelectionOptions.new = function(optionGroupListStream) {
      this[_streamSub] = null;
      _StreamSelectionOptions.__proto__.new.call(this, JSArrayOfOptionGroupOfT().of([]));
      this[_streamSub] = optionGroupListStream.listen(dart.bind(this, _setOptions));
    }).prototype = _StreamSelectionOptions.prototype;
    dart.addTypeTests(_StreamSelectionOptions);
    _StreamSelectionOptions.prototype[_is__StreamSelectionOptions_default] = true;
    dart.setFieldSignature(_StreamSelectionOptions, () => ({
      __proto__: dart.getFields(_StreamSelectionOptions.__proto__),
      [_streamSub]: dart.fieldType(async.StreamSubscription)
    }));
    return _StreamSelectionOptions;
  });
  model__selection__selection_options._StreamSelectionOptions = model__selection__selection_options._StreamSelectionOptions$();
  dart.addTypeTests(model__selection__selection_options._StreamSelectionOptions, _is__StreamSelectionOptions_default);
  dart.trackLibraries("packages/angular_components/model/selection/selection_options.ddc", {
    "package:angular_components/src/model/selection/delegating_selection_options.dart": src__model__selection__delegating_selection_options,
    "package:angular_components/model/selection/selection_options.dart": model__selection__selection_options
  }, '{"version":3,"sourceRoot":"","sources":["../../src/model/selection/delegating_selection_options.dart","selection_options.dart","../../src/model/selection/future_selection_options_impl.dart","../../src/model/selection/stream_selection_options_impl.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;cAe2C,eAAQ,aAAa;;uBAG7C,MAA2B;sCAAN;AACpC,sBAAQ,aAAa,GAAG,MAAM;MAChC;;AAIE,sBAAQ,QAAQ;MAClB;;cAGuB,eAAQ,WAAW;;;cAGf,eAAQ,YAAY;;;cAGJ,eAAQ,OAAO;;;+CAtB1B,OAAQ;MAAR,cAAQ,GAAR,OAAQ;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cCOhB,qBAAc,IAAI,OAAO,oBAAc,KAAK;MAAI;;cAI/C,qBAAc,IAAI;MAAI;wBAcf,KAAS,EAAE,GAAO;AACjD,YAAQ,eAAe,YAAY,CAAC,KAAK,EAAE,GAAG;AAE9C,cAAO,KAAI,oCAA6B,CACpC,YAAY,YAAE,aAAQ,IAAG,OAAO,cAAM,kBAAa,mBAAE,oBAAc;MACzE;;gCAjBY,KAAa,EAAG,QAAsB;+BAAR;MAJ5B,oBAAc;AAI2B,2CAAM,KAAK,EAAE,QAAQ;IAAC;8CAE/C,KAAa,EACtC,QAAsB,EAAO,aAAc;+BAA7B;UAAe,aAAc,aAAd,aAAc;MAAd,oBAAc,GAAd,aAAc;AAC1C,yDAAwB,KAAK,EAAE,QAAQ;IAAC;sCAExB,KAAa,EAAG,KAAY,EAAE,UAAiB;4BAAxB;iCAAc;MACrD,oBAAc,GAAG,UAAU,IAAI,OAAQ,cAAM,UAAU,oBAAI;AAC3D,iDAAgB,KAAK,EAAE,KAAK;IAAC;;;;;;;;;;;;;;;;;;;;;;;iBA8BnB;;;IAClB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wBAoCU,qBAAkD;AAAE,cACxD,KAAI,kCAA0B,CAAC,qBAAqB;MAAC;wBAQjD,qBAAkD;AAAE,cACxD,KAAI,kCAA0B,CAAC,qBAAqB;MAAC;;cAId,kBAAW,OAAO;;;cAGpB,oBAAa;;uBAGrC,KAA0B;sCAAL;AACpC,YAAI,WAAW,mBAAa;AAC5B,yBAAI,QAAQ,EAAI,KAAK,GAAE;AACrB,6BAAa,GAAG,KAAK;AACrB,8BAAc,GAAG,mBAAa,IAAI,OAC5B,mBAAa,SAAO,IAAC,QAAC,CAAC,IAAK,CAAC,6CAAQ,KACrC;AACN,2BAAW,IAAI,CAAC,mBAAa;;MAEjC;;cAI2B,qBAAc;;;cAGlB,kBAAY,MAAI,CAAC,QAAC,KAAK,IAAK,KAAK,WAAW;MAAC;oBAEnD,UAA+B;sCAAV;AACpC,yBAAY,GAAG,UAAU;MAC3B;;AAIE,yBAAW,MAAM;AACjB,qBAAa;MACf;;qCA7DiB,YAAiC;MAP5C,iBAAW,GACb,AAAI,kDAAgD,QAAO;MAEvD,oBAAc;MACD,mBAAa;AAIhC,uBAAiB,GAAG,YAAY;IAClC;0CAI0B,OAAe;UAAU;sCACxC,8BAAiB,IAAI,4BAAwB,CAAC,OAAO,EAAE,KAAK;IAAG;kDAGxC,YAAiC;sCACxD,YAAY;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4CCzFA,qBAAkD;AACpE,uDAAM;AACV,2BAAqB,KAAK,YAAC,4BAAW;IACxC;;;;;;;;;;;;;;ACKE,gCAAU;;MACZ;;4CARwB,qBAAkD;MADvD,gBAAU;AAEvB,uDAAM;AACV,sBAAU,GAAG,qBAAqB,OAAO,CAAC,4BAAW;IACvD","file":"selection_options.ddc.js"}');
  // Exports:
  return {
    src__model__selection__delegating_selection_options: src__model__selection__delegating_selection_options,
    model__selection__selection_options: model__selection__selection_options
  };
});

//# sourceMappingURL=selection_options.ddc.js.map
