define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator', 'packages/collection/src/equality'], function(dart_sdk, id_generator, equality) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const src__equality = equality.src__equality;
  const _root = Object.create(null);
  const model__a11y__active_item = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $clear = dartx.clear;
  const $indexOf = dartx.indexOf;
  const $isEmpty = dartx.isEmpty;
  const $_get = dartx._get;
  const $length = dartx.length;
  const $containsKey = dartx.containsKey;
  const $_set = dartx._set;
  const _idGenerator = Symbol('_idGenerator');
  const _modelChanged = Symbol('_modelChanged');
  const _ids = Symbol('_ids');
  const _items = Symbol('_items');
  const _loop = Symbol('_loop');
  const _activeIndex = Symbol('_activeIndex');
  let const$;
  const _is_ActiveItemModel_default = Symbol('_is_ActiveItemModel_default');
  model__a11y__active_item.ActiveItemModel$ = dart.generic(T => {
    let LinkedMapOfT$String = () => (LinkedMapOfT$String = dart.constFn(_js_helper.LinkedMap$(T, core.String)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let MapOfT$String = () => (MapOfT$String = dart.constFn(core.Map$(T, core.String)))();
    class ActiveItemModel extends core.Object {
      get modelChanged() {
        return this[_modelChanged].stream;
      }
      get activeId() {
        return this.id(this.activeItem);
      }
      isActive(item) {
        T._check(item);
        return dart.equals(this.activeItem, item);
      }
      set items(itemList) {
        ListOfT()._check(itemList);
        if (dart.test((const$ || (const$ = dart.const(new src__equality.ListEquality.new()))).equals(itemList, this[_items]))) return;
        this[_ids][$clear]();
        let _lastActive = this.activeItem;
        this[_items] = ListOfT().unmodifiable(itemList);
        if (_lastActive != null) {
          let last = this[_items][$indexOf](_lastActive);
          if (last !== -1) {
            this[_activeIndex] = last;
            return;
          }
        }
        this[_activeIndex] = 0;
        this[_modelChanged].add(null);
      }
      get activeItem() {
        return dart.test(this[_items][$isEmpty]) || this[_activeIndex] === -1 ? null : this[_items][$_get](this[_activeIndex]);
      }
      activateNext() {
        if (dart.test(this[_items][$isEmpty])) {
          this[_activeIndex] = -1;
        } else if (dart.notNull(this[_activeIndex]) < dart.notNull(this[_items][$length]) - 1) {
          this[_activeIndex] = dart.notNull(this[_activeIndex]) + 1;
        } else if (dart.test(this[_loop])) {
          this[_activeIndex] = 0;
        }
        this[_modelChanged].add(null);
      }
      get peekNext() {
        if (dart.test(this[_items][$isNotEmpty]) && dart.notNull(this[_activeIndex]) < dart.notNull(this[_items][$length]) - 1) {
          return this[_items][$_get](dart.notNull(this[_activeIndex]) + 1);
        } else if (dart.test(this[_items][$isNotEmpty]) && dart.test(this[_loop])) {
          return this[_items][$_get](0);
        } else {
          return null;
        }
      }
      activatePrevious() {
        if (dart.test(this[_items][$isEmpty])) {
          this[_activeIndex] = -1;
        } else if (dart.notNull(this[_activeIndex]) > 0) {
          this[_activeIndex] = dart.notNull(this[_activeIndex]) - 1;
        } else if (dart.test(this[_loop])) {
          this[_activeIndex] = dart.notNull(this[_items][$length]) - 1;
        }
        this[_modelChanged].add(null);
      }
      activateFirst() {
        this[_activeIndex] = dart.test(this[_items][$isEmpty]) ? -1 : 0;
        this[_modelChanged].add(null);
      }
      activateLast() {
        this[_activeIndex] = dart.test(this[_items][$isEmpty]) ? -1 : dart.notNull(this[_items][$length]) - 1;
        this[_modelChanged].add(null);
      }
      activate(value) {
        T._check(value);
        this[_activeIndex] = this[_items][$indexOf](value);
        this[_modelChanged].add(null);
      }
      id(item) {
        T._check(item);
        if (!dart.test(this[_ids][$containsKey](item))) {
          this[_ids][$_set](item, this[_idGenerator].nextId());
        }
        return this[_ids][$_get](item);
      }
    }
    (ActiveItemModel.new = function(idGenerator, opts) {
      let loop = opts && 'loop' in opts ? opts.loop : false;
      let items = opts && 'items' in opts ? opts.items : dart.constList([], T);
      this[_modelChanged] = async.StreamController.broadcast({sync: true});
      this[_ids] = new (LinkedMapOfT$String()).new();
      this[_items] = null;
      this[_loop] = null;
      this[_activeIndex] = -1;
      this[_idGenerator] = idGenerator != null ? idGenerator : new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID();
      this[_loop] = loop;
      this[_items] = items;
      if (dart.test(this[_items][$isNotEmpty])) this[_activeIndex] = 0;
    }).prototype = ActiveItemModel.prototype;
    dart.addTypeTests(ActiveItemModel);
    ActiveItemModel.prototype[_is_ActiveItemModel_default] = true;
    dart.setMethodSignature(ActiveItemModel, () => ({
      __proto__: dart.getMethods(ActiveItemModel.__proto__),
      isActive: dart.fnType(core.bool, [core.Object]),
      activateNext: dart.fnType(dart.void, []),
      activatePrevious: dart.fnType(dart.void, []),
      activateFirst: dart.fnType(dart.void, []),
      activateLast: dart.fnType(dart.void, []),
      activate: dart.fnType(dart.void, [core.Object]),
      id: dart.fnType(core.String, [core.Object])
    }));
    dart.setGetterSignature(ActiveItemModel, () => ({
      __proto__: dart.getGetters(ActiveItemModel.__proto__),
      modelChanged: dart.fnType(async.Stream, []),
      activeId: dart.fnType(core.String, []),
      activeItem: dart.fnType(T, []),
      peekNext: dart.fnType(T, [])
    }));
    dart.setSetterSignature(ActiveItemModel, () => ({
      __proto__: dart.getSetters(ActiveItemModel.__proto__),
      items: dart.fnType(dart.void, [ListOfT()])
    }));
    dart.setFieldSignature(ActiveItemModel, () => ({
      __proto__: dart.getFields(ActiveItemModel.__proto__),
      [_modelChanged]: dart.finalFieldType(async.StreamController),
      [_ids]: dart.finalFieldType(MapOfT$String()),
      [_idGenerator]: dart.finalFieldType(utils__id_generator__id_generator.IdGenerator),
      [_items]: dart.fieldType(ListOfT()),
      [_loop]: dart.fieldType(core.bool),
      [_activeIndex]: dart.fieldType(core.int)
    }));
    return ActiveItemModel;
  });
  model__a11y__active_item.ActiveItemModel = model__a11y__active_item.ActiveItemModel$();
  dart.addTypeTests(model__a11y__active_item.ActiveItemModel, _is_ActiveItemModel_default);
  dart.trackLibraries("packages/angular_components/model/a11y/active_item.ddc", {
    "package:angular_components/model/a11y/active_item.dart": model__a11y__active_item
  }, '{"version":3,"sourceRoot":"","sources":["active_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cAyC6B,oBAAa,OAAO;;;cAIxB,QAAE,CAAC,eAAU;MAAC;eAGvB,IAAM;iBAAJ;2BAAS,eAAU,EAAI,IAAI;;gBAOjC,QAAgB;yBAAR;AAChB,uBAAI,mCAAM,8BAAY,YAAS,CAAC,QAAQ,EAAE,YAAM,IAAG;AAEnD,kBAAI,QAAM;AACV,YAAI,cAAc,eAAU;AAE5B,oBAAM,GAAG,AAAI,sBAAiB,CAAC,QAAQ;AACvC,YAAI,WAAW,IAAI,MAAM;AACvB,cAAI,OAAO,YAAM,UAAQ,CAAC,WAAW;AACrC,cAAI,IAAI,KAAI,CAAC,GAAG;AACd,8BAAY,GAAG,IAAI;AACnB;;;AAGJ,0BAAY,GAAG;AACf,2BAAa,IAAI,CAAC;MACpB;;yBAII,YAAM,UAAQ,KAAI,kBAAY,KAAI,CAAC,IAAI,OAAO,YAAM,QAAC,kBAAY;MAAC;;AAKpE,sBAAI,YAAM,UAAQ,GAAE;AAClB,4BAAY,GAAG,CAAC;cACX,KAAiB,aAAb,kBAAY,IAAiB,aAAd,YAAM,SAAO,IAAG,GAAG;AAC3C,4BAAY,gBAAZ,kBAAY,IAnFlB;cAoFW,eAAI,WAAK,GAAE;AAChB,4BAAY,GAAG;;AAEjB,2BAAa,IAAI,CAAC;MACpB;;AAIE,sBAAI,YAAM,aAAW,KAAiB,aAAb,kBAAY,IAAiB,aAAd,YAAM,SAAO,IAAG,GAAG;AACzD,gBAAO,aAAM,QAAc,aAAb,kBAAY,IAAG;cACxB,eAAI,YAAM,aAAW,eAAI,WAAK,GAAE;AACrC,gBAAO,aAAM,QAAC;eACT;AACL,gBAAO;;MAEX;;AAKE,sBAAI,YAAM,UAAQ,GAAE;AAClB,4BAAY,GAAG,CAAC;cACX,KAAiB,aAAb,kBAAY,IAAG,GAAG;AAC3B,4BAAY,gBAAZ,kBAAY,IA3GlB;cA4GW,eAAI,WAAK,GAAE;AAChB,4BAAY,GAAiB,aAAd,YAAM,SAAO,IAAG;;AAEjC,2BAAa,IAAI,CAAC;MACpB;;AAIE,0BAAY,aAAG,YAAM,UAAQ,IAAG,CAAC,IAAI;AACrC,2BAAa,IAAI,CAAC;MACpB;;AAIE,0BAAY,aAAG,YAAM,UAAQ,IAAG,CAAC,IAAkB,aAAd,YAAM,SAAO,IAAG;AACrD,2BAAa,IAAI,CAAC;MACpB;eAIc,KAAO;iBAAL;AACd,0BAAY,GAAG,YAAM,UAAQ,CAAC,KAAK;AACnC,2BAAa,IAAI,CAAC;MACpB;SAGU,IAAM;iBAAJ;AACV,uBAAK,UAAI,cAAY,CAAC,IAAI,IAAG;AAC3B,oBAAI,QAAC,IAAI,EAAI,kBAAY,OAAO;;AAElC,cAAO,WAAI,QAAC,IAAI;MAClB;;oCA3GgB,WAAuB;UAC7B,4CAAM;UAAe,+CAAO;MAShC,mBAAa,GAAG,AAAI,gCAA0B,QAAO;MAmGtC,UAAI,GAAG;MAEpB,YAAM;MACT,WAAK;MACN,kBAAY,GAAG,CAAC;MA/Gd,kBAAY,GAAG,WAAW,WAAX,WAAW,GAAI,IAAI,gEAA8B;AACpE,iBAAK,GAAG,IAAI;AACZ,kBAAM,GAAG,KAAK;AACd,oBAAI,YAAM,aAAW,GAAE,kBAAY,GAAG;IACxC","file":"active_item.ddc.js"}');
  // Exports:
  return {
    model__a11y__active_item: model__a11y__active_item
  };
});

//# sourceMappingURL=active_item.ddc.js.map
