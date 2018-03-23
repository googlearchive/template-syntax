define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/src/utils/async/disposable_future', 'packages/angular_components/model/selection/select'], function(dart_sdk, has_renderer, selection_options, disposable_future, select) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const src__utils__async__disposable_future = disposable_future.src__utils__async__disposable_future;
  const model__selection__select = select.model__selection__select;
  const _root = Object.create(null);
  const model__selection__string_selection_options = Object.create(_root);
  const $toLowerCase = dartx.toLowerCase;
  const $replaceAll = dartx.replaceAll;
  const $toString = dartx.toString;
  const $add = dartx.add;
  const $isNotEmpty = dartx.isNotEmpty;
  const $take = dartx.take;
  const $toList = dartx.toList;
  const $contains = dartx.contains;
  const $forEach = dartx.forEach;
  const $compareTo = dartx.compareTo;
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let StringToString$ = () => (StringToString$ = dart.constFn(dart.fnType(core.String, [core.String])))();
  let FnToFn = () => (FnToFn = dart.constFn(dart.gFnType(T => [dart.fnType(core.String, [T]), [StringToString$()]])))();
  let DisposableFutureOfbool = () => (DisposableFutureOfbool = dart.constFn(src__utils__async__disposable_future.DisposableFuture$(core.bool)))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  model__selection__string_selection_options._stringFormatSuggestion = function(value) {
    return value[$replaceAll](' ', '')[$toLowerCase]();
  };
  dart.fn(model__selection__string_selection_options._stringFormatSuggestion, StringToString());
  model__selection__string_selection_options._defaultRenderer = function(T, sanitizeString) {
    return model__ui__has_renderer.newCachingItemRenderer(T, dart.fn(value => sanitizeString(dart.toString(value)), dart.fnType(core.String, [T])));
  };
  dart.fn(model__selection__string_selection_options._defaultRenderer, FnToFn());
  model__selection__string_selection_options.StringSuggestionFilter$ = dart.generic(T => {
    const StringSuggestionFilter = dart.typedef('StringSuggestionFilter', () => dart.fnType(core.bool, [T, core.String]));
    return StringSuggestionFilter;
  });
  model__selection__string_selection_options.StringSuggestionFilter = model__selection__string_selection_options.StringSuggestionFilter$();
  const _toFilterableString = Symbol('_toFilterableString');
  const _shouldSort = Symbol('_shouldSort');
  const _sanitizeString = Symbol('_sanitizeString');
  const _currentQuery = Symbol('_currentQuery');
  const _currentLimit = Symbol('_currentLimit');
  const _optionGroups = Symbol('_optionGroups');
  const _suggestionFilter = Symbol('_suggestionFilter');
  const _sortFn = Symbol('_sortFn');
  const _is_StringSelectionOptions_default = Symbol('_is_StringSelectionOptions_default');
  model__selection__string_selection_options.StringSelectionOptions$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    let JSArrayOfOptionGroupOfT = () => (JSArrayOfOptionGroupOfT = dart.constFn(_interceptors.JSArray$(OptionGroupOfT())))();
    let TTobool = () => (TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    let ListOfOptionGroupOfT = () => (ListOfOptionGroupOfT = dart.constFn(core.List$(OptionGroupOfT())))();
    let OptionGroupOfTToNull = () => (OptionGroupOfTToNull = dart.constFn(dart.fnType(core.Null, [OptionGroupOfT()])))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    let TAndStringTobool = () => (TAndStringTobool = dart.constFn(dart.fnType(core.bool, [T, core.String])))();
    class StringSelectionOptions extends model__selection__selection_options.SelectionOptions$(T) {
      filter(query, opts) {
        let limit = opts && 'limit' in opts ? opts.limit : -1;
        this[_currentLimit] = dart.notNull(limit) < 1 ? 9007199254740992 : limit;
        this[_currentQuery] = core.String.as(query);
        this.refilter();
        return DisposableFutureOfbool().fromValue(true);
      }
      get filterApplied() {
        return this.currentQuery != null;
      }
      refilter() {
        let filtered = JSArrayOfOptionGroupOfT().of([]);
        let count = 0;
        let filterQuery = this[_currentQuery] == null ? '' : this[_sanitizeString](this[_currentQuery]);
        for (let group of this[_optionGroups]) {
          if (dart.notNull(count) >= dart.notNull(this.currentLimit)) break;
          let filteredGroup = this.filterOptionGroup(group, filterQuery, dart.notNull(this.currentLimit) - dart.notNull(count));
          count = dart.notNull(count) + dart.notNull(filteredGroup.length);
          filtered[$add](filteredGroup);
        }
        super.optionGroups = filtered;
      }
      filterOptionGroup(group, filterQuery, limit) {
        OptionGroupOfT()._check(group);
        let list = null;
        if (filterQuery[$isNotEmpty]) {
          list = group.where(dart.fn(suggestion => this[_suggestionFilter](suggestion, filterQuery), TTobool()))[$take](limit);
        } else {
          list = group.take(limit);
        }
        let filteredGroup = new (OptionGroupOfT()).withLabelFunction(list[$toList]({growable: false}), dart.fn(() => group.uiDisplayName, VoidToString()), group.emptyLabel != null ? dart.fn(() => group.emptyLabel, VoidToString()) : null);
        return filteredGroup;
      }
      filterOption(option, filterQuery) {
        T._check(option);
        return this[_sanitizeString](this[_toFilterableString](option))[$contains](filterQuery);
      }
      get currentQuery() {
        return this[_currentQuery];
      }
      get currentLimit() {
        return this[_currentLimit];
      }
      get unfilteredOptionGroups() {
        return this[_optionGroups];
      }
      set optionGroups(value) {
        ListOfOptionGroupOfT()._check(value);
        if (dart.test(this[_shouldSort])) {
          value[$forEach](dart.fn(optionGroup => {
            optionGroup.sort(dart.bind(this, _sortFn));
          }, OptionGroupOfTToNull()));
        }
        this[_optionGroups] = value;
        super.optionGroups = value;
        if (dart.test(this.filterApplied)) {
          this.refilter();
        }
      }
      get optionGroups() {
        return super.optionGroups;
      }
      [_sortFn](a, b) {
        T._check(a);
        T._check(b);
        return this[_toFilterableString](a)[$compareTo](this[_toFilterableString](b));
      }
    }
    (StringSelectionOptions.new = function(options, opts) {
      let toFilterableString = opts && 'toFilterableString' in opts ? opts.toFilterableString : null;
      let suggestionFilter = opts && 'suggestionFilter' in opts ? opts.suggestionFilter : null;
      let sanitizeString = opts && 'sanitizeString' in opts ? opts.sanitizeString : model__selection__string_selection_options._stringFormatSuggestion;
      let shouldSort = opts && 'shouldSort' in opts ? opts.shouldSort : false;
      StringSelectionOptions.withOptionGroups.call(this, JSArrayOfOptionGroupOfT().of([new (OptionGroupOfT()).new(options)]), {toFilterableString: toFilterableString, suggestionFilter: suggestionFilter, sanitizeString: sanitizeString, shouldSort: shouldSort});
    }).prototype = StringSelectionOptions.prototype;
    (StringSelectionOptions.withOptionGroups = function(optionGroups, opts) {
      let toFilterableString = opts && 'toFilterableString' in opts ? opts.toFilterableString : null;
      let suggestionFilter = opts && 'suggestionFilter' in opts ? opts.suggestionFilter : null;
      let sanitizeString = opts && 'sanitizeString' in opts ? opts.sanitizeString : model__selection__string_selection_options._stringFormatSuggestion;
      let shouldSort = opts && 'shouldSort' in opts ? opts.shouldSort : false;
      this[_currentQuery] = null;
      this[_currentLimit] = -1;
      this[_optionGroups] = null;
      this[_suggestionFilter] = null;
      this[_toFilterableString] = toFilterableString != null ? toFilterableString : model__selection__string_selection_options._defaultRenderer(T, sanitizeString);
      this[_shouldSort] = shouldSort;
      this[_sanitizeString] = sanitizeString;
      StringSelectionOptions.__proto__.new.call(this, optionGroups);
      this[_suggestionFilter] = suggestionFilter != null ? suggestionFilter : dart.bind(this, 'filterOption');
    }).prototype = StringSelectionOptions.prototype;
    dart.addTypeTests(StringSelectionOptions);
    StringSelectionOptions.prototype[_is_StringSelectionOptions_default] = true;
    StringSelectionOptions[dart.implements] = () => [model__selection__select.Filterable];
    dart.setMethodSignature(StringSelectionOptions, () => ({
      __proto__: dart.getMethods(StringSelectionOptions.__proto__),
      filter: dart.fnType(src__utils__async__disposable_future.DisposableFuture$(core.bool), [core.Object], {limit: core.int}),
      refilter: dart.fnType(dart.void, []),
      filterOptionGroup: dart.fnType(model__selection__selection_options.OptionGroup$(T), [core.Object, core.String, core.int]),
      filterOption: dart.fnType(core.bool, [core.Object, core.String]),
      [_sortFn]: dart.fnType(core.int, [core.Object, core.Object])
    }));
    dart.setGetterSignature(StringSelectionOptions, () => ({
      __proto__: dart.getGetters(StringSelectionOptions.__proto__),
      filterApplied: dart.fnType(core.bool, []),
      currentQuery: dart.fnType(core.Object, []),
      currentLimit: dart.fnType(core.int, []),
      unfilteredOptionGroups: dart.fnType(core.List$(model__selection__selection_options.OptionGroup$(T)), [])
    }));
    dart.setFieldSignature(StringSelectionOptions, () => ({
      __proto__: dart.getFields(StringSelectionOptions.__proto__),
      [_currentQuery]: dart.fieldType(core.String),
      [_currentLimit]: dart.fieldType(core.int),
      [_optionGroups]: dart.fieldType(ListOfOptionGroupOfT()),
      [_toFilterableString]: dart.finalFieldType(TToString()),
      [_suggestionFilter]: dart.fieldType(TAndStringTobool()),
      [_sanitizeString]: dart.finalFieldType(StringToString$()),
      [_shouldSort]: dart.finalFieldType(core.bool)
    }));
    return StringSelectionOptions;
  });
  model__selection__string_selection_options.StringSelectionOptions = model__selection__string_selection_options.StringSelectionOptions$();
  dart.defineLazy(model__selection__string_selection_options.StringSelectionOptions, {
    /*model__selection__string_selection_options.StringSelectionOptions.UNLIMITED*/get UNLIMITED() {
      return 9007199254740992;
    }
  });
  dart.addTypeTests(model__selection__string_selection_options.StringSelectionOptions, _is_StringSelectionOptions_default);
  dart.trackLibraries("packages/angular_components/model/selection/string_selection_options.ddc", {
    "package:angular_components/model/selection/string_selection_options.dart": model__selection__string_selection_options
  }, '{"version":3,"sourceRoot":"","sources":["string_selection_options.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;gFAW+B,KAAY;UACvC,MAAK,aAAW,CAAC,KAAK,iBAAe;EAAE;;4EAEP,cAAmC;UACnE,+CAAsB,IAAI,QAAC,KAAO,IAAK,cAAc,eAAC,KAAK;EAAa;;;;;;;;;;;;;;;;;;;;;;;;;aAyF5C,KAAY;YAAO,+CAAO,CAAC;AACvD,2BAAa,GAAG,AAAM,aAAN,KAAK,IAAG,IAAI,gBAAS,GAAG,KAAK;AAC7C,2BAAa,kBAAG,KAAK;AACrB,qBAAQ;AACR,cAAO,AAAI,mCAA0B,CAAC;MACxC;;cAG0B,kBAAY,IAAI;MAAI;;AAI5C,YAAqB,WAAW;AAChC,YAAI,QAAQ;AACZ,YAAO,cACH,mBAAa,IAAI,OAAO,KAAK,qBAAe,CAAC,mBAAa;AAC9D,iBAAS,QAAS,oBAAa,EAAE;AAC/B,cAAU,aAAN,KAAK,kBAAI,iBAAY,GAAE;AAC3B,cAAI,gBACA,sBAAiB,CAAC,KAAK,EAAE,WAAW,EAAe,aAAb,iBAAY,iBAAG,KAAK;AAC9D,eAAK,GA5HX,aA4HM,KAAK,iBAAI,aAAa,OAAO;AAC7B,kBAAQ,MAAI,CAAC,aAAa;;AAE5B,0BAAkB,GAAG,QAAQ;MAC/B;wBAII,KAAoB,EAAE,WAAkB,EAAE,KAAS;gCAApC;AACjB,YAAY;AACZ,YAAI,WAAW,aAAW,EAAE;AAI1B,cAAI,GAAG,KAAK,MACF,CAAC,QAAC,UAAU,IAAK,uBAAiB,CAAC,UAAU,EAAE,WAAW,qBAC3D,CAAC,KAAK;eACV;AACL,cAAI,GAAG,KAAK,KAAK,CAAC,KAAK;;AAEzB,YAAI,gBAAgB,IAAI,oCAAgC,CACpD,IAAI,SAAO,YAAW,SACtB,cAAM,KAAK,cAAc,mBACzB,KAAK,WAAW,IAAI,OAAO,cAAM,KAAK,WAAW,oBAAG;AAExD,cAAO,cAAa;MACtB;mBAGkB,MAAQ,EAAE,WAAkB;iBAA1B;AAGlB,cAAO,sBAAe,CAAC,yBAAmB,CAAC,MAAM,aAAW,CAAC,WAAW;MAC1E;;cAG2B,oBAAa;;;cAGhB,oBAAa;;;cAEc,oBAAa;;uBAG/C,KAA0B;sCAAL;AAEpC,sBAAI,iBAAW,GAAE;AACf,eAAK,UAAQ,CAAC,QAAC,WAAW;AACxB,uBAAW,KAAK,CAAC,wBAAO;;;AAI5B,2BAAa,GAAG,KAAK;AACrB,0BAAkB,GAAG,KAAK;AAC1B,sBAAI,kBAAa,GAAE;AACjB,uBAAQ;;MAEZ;;;;gBAEY,CAAG,EAAE,CAAG;iBAAN;iBAAK;cACf,0BAAmB,CAAC,CAAC,aAAW,CAAC,yBAAmB,CAAC,CAAC;MAAE;;2CAjHrC,OAAe;UACjB;UACS;UACL,0EAAgB,kEAAuB;UACvD,8DAAY;yDACO,8BAAC,IAAI,sBAAW,CAAC,OAAO,0BACtB,kBAAkB,oBACpB,gBAAgB,kBAClB,cAAc,cAClB,UAAU;IAAC;wDAEO,YAAiC;UACpD;UACS;UACL,0EAAgB,kEAAuB;UACvD,8DAAY;MA3Cd,mBAAa;MAGhB,mBAAa,GAAG,CAAC;MAEA,mBAAa;MAOR,uBAAiB;MAgCrC,yBAAmB,GACf,kBAAkB,WAAlB,kBAAkB,GAAI,2DAAgB,IAAC,cAAc;MACzD,iBAAW,GAAG,UAAU;MACxB,qBAAe,GAAG,cAAc;AAChC,sDAAM,YAAY;AACtB,6BAAiB,GACb,gBAAgB,IAAI,OAAO,gBAAgB,GAAG,+BAAY;IAChE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAtDiB,2EAAS;YAAG","file":"string_selection_options.ddc.js"}');
  // Exports:
  return {
    model__selection__string_selection_options: model__selection__string_selection_options
  };
});

//# sourceMappingURL=string_selection_options.ddc.js.map
