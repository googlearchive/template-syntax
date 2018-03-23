define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const model__collection__combined_list = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $every = dartx.every;
  const $isNotEmpty = dartx.isNotEmpty;
  const $any = dartx.any;
  const $length = dartx.length;
  const $fold = dartx.fold;
  const $_get = dartx._get;
  const $_set = dartx._set;
  let ListTobool = () => (ListTobool = dart.constFn(dart.fnType(core.bool, [core.List])))();
  let intAndListToint = () => (intAndListToint = dart.constFn(dart.fnType(core.int, [core.int, core.List])))();
  const _lists = Symbol('_lists');
  const _is_CombinedList_default = Symbol('_is_CombinedList_default');
  model__collection__combined_list.CombinedList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let ListOfListOfE = () => (ListOfListOfE = dart.constFn(core.List$(ListOfE())))();
    class CombinedList extends collection.ListMixin$(E) {
      get isEmpty() {
        return this[_lists][$every](dart.fn(list => list[$isEmpty], ListTobool()));
      }
      get isNotEmpty() {
        return this[_lists][$any](dart.fn(list => list[$isNotEmpty], ListTobool()));
      }
      get length() {
        return this[_lists][$fold](core.int, 0, dart.fn((sum, list) => dart.notNull(sum) + dart.notNull(list[$length]), intAndListToint()));
      }
      _get(index) {
        for (let i = 0; i < dart.notNull(this[_lists][$length]); i++) {
          let list = this[_lists][$_get](i);
          if (dart.notNull(index) < dart.notNull(list[$length])) return list[$_get](index);
          index = dart.notNull(index) - dart.notNull(list[$length]);
        }
        dart.throw(new core.StateError.new(dart.str`Index out of range: ${index} (${this.length})`));
      }
      _set(index, value) {
        (() => {
          E._check(value);
          for (let i = 0; i < dart.notNull(this[_lists][$length]); i++) {
            let list = this[_lists][$_get](i);
            if (dart.notNull(index) < dart.notNull(list[$length])) {
              list[$_set](index, value);
              return;
            }
            index = dart.notNull(index) - dart.notNull(list[$length]);
          }
          dart.throw(new core.StateError.new(dart.str`Index out of range: ${index} (${this.length})`));
        })();
        return value;
      }
      set length(newLength) {
        return dart.throw(new core.UnimplementedError.new());
      }
    }
    (CombinedList.new = function(lists) {
      this[_lists] = lists;
    }).prototype = CombinedList.prototype;
    dart.addTypeTests(CombinedList);
    CombinedList.prototype[_is_CombinedList_default] = true;
    dart.setMethodSignature(CombinedList, () => ({
      __proto__: dart.getMethods(CombinedList.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object])
    }));
    dart.setGetterSignature(CombinedList, () => ({
      __proto__: dart.getGetters(CombinedList.__proto__),
      length: dart.fnType(core.int, []),
      [$length]: dart.fnType(core.int, [])
    }));
    dart.setSetterSignature(CombinedList, () => ({
      __proto__: dart.getSetters(CombinedList.__proto__),
      length: dart.fnType(dart.void, [core.int]),
      [$length]: dart.fnType(dart.void, [core.int])
    }));
    dart.setFieldSignature(CombinedList, () => ({
      __proto__: dart.getFields(CombinedList.__proto__),
      [_lists]: dart.finalFieldType(ListOfListOfE())
    }));
    dart.defineExtensionMethods(CombinedList, ['_get', '_set']);
    dart.defineExtensionAccessors(CombinedList, ['isEmpty', 'isNotEmpty', 'length']);
    return CombinedList;
  });
  model__collection__combined_list.CombinedList = model__collection__combined_list.CombinedList$();
  dart.addTypeTests(model__collection__combined_list.CombinedList, _is_CombinedList_default);
  dart.trackLibraries("packages/angular_components/model/collection/combined_list.ddc", {
    "package:angular_components/model/collection/combined_list.dart": model__collection__combined_list
  }, '{"version":3,"sourceRoot":"","sources":["combined_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;cAasB,aAAM,QAAM,CAAC,QAAC,IAAS,IAAK,IAAI,UAAQ;MAAC;;cAGtC,aAAM,MAAI,CAAC,QAAC,IAAS,IAAK,IAAI,aAAW;MAAC;;cAG/C,aAAM,OAAK,WAAC,GAAG,SAAC,GAAO,EAAE,IAAS,KAAS,aAAJ,GAAG,iBAAG,IAAI,SAAO;MAAC;WAG7D,KAAS;AACrB,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,YAAM,SAAO,GAAE,CAAC,IAAI;AACtC,cAAQ,OAAO,YAAM,QAAC,CAAC;AACvB,cAAU,aAAN,KAAK,iBAAG,IAAI,SAAO,GAAE,MAAO,KAAI,QAAC,KAAK;AAC1C,eAAK,GA1BX,aA0BM,KAAK,iBAAI,IAAI,SAAO;;AAEtB,mBAAM,IAAI,mBAAU,CAAC,+BAAsB,KAAK,KAAG,WAAM;MAC3D;WAGkB,KAAS,EAAE,KAAO;;mBAAL;AAC7B,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,YAAM,SAAO,GAAE,CAAC,IAAI;AACtC,gBAAQ,OAAO,YAAM,QAAC,CAAC;AACvB,gBAAU,aAAN,KAAK,iBAAG,IAAI,SAAO,GAAE;AACvB,kBAAI,QAAC,KAAK,EAAI,KAAK;AACnB;;AAEF,iBAAK,GAvCX,aAuCM,KAAK,iBAAI,IAAI,SAAO;;AAEtB,qBAAM,IAAI,mBAAU,CAAC,+BAAsB,KAAK,KAAG,WAAM;;cAT9B,MAAO;MAUpC;iBAGW,SAAa;cAAK,YAAM,IAAI,2BAAkB;MAAE;;iCAnCzC,KAAM;MAAN,YAAM,GAAN,KAAM;IAAC","file":"combined_list.ddc.js"}');
  // Exports:
  return {
    model__collection__combined_list: model__collection__combined_list
  };
});

//# sourceMappingURL=combined_list.ddc.js.map
