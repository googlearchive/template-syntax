define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const iterables$ = Object.create(_root);
  const $expand = dartx.expand;
  const $lastWhere = dartx.lastWhere;
  const $reduce = dartx.reduce;
  const $iterator = dartx.iterator;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $toString = dartx.toString;
  const $length = dartx.length;
  const $first = dartx.first;
  const $last = dartx.last;
  const $single = dartx.single;
  const $elementAt = dartx.elementAt;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $add = dartx.add;
  const $every = dartx.every;
  let IterableOfIterableOfTToIterableOfT = () => (IterableOfIterableOfTToIterableOfT = dart.constFn(dart.gFnType(T => [core.Iterable$(T), [core.Iterable$(core.Iterable$(T))]])))();
  let IterableOfnum = () => (IterableOfnum = dart.constFn(core.Iterable$(core.num)))();
  let __ToIterableOfnum = () => (__ToIterableOfnum = dart.constFn(dart.fnType(IterableOfnum(), [], [core.num, core.num])))();
  let IteratorOfnum = () => (IteratorOfnum = dart.constFn(core.Iterator$(core.num)))();
  let IterableOfTToIterableOfT = () => (IterableOfTToIterableOfT = dart.constFn(dart.gFnType(T => [core.Iterable$(T), [core.Iterable$(T)]])))();
  let IterableOfEToIterableOfIndexedValueOfE = () => (IterableOfEToIterableOfIndexedValueOfE = dart.constFn(dart.gFnType(E => [core.Iterable$(iterables$.IndexedValue$(E)), [core.Iterable$(E)]])))();
  let IterableOfIterableOfT__ToIterableOfT = () => (IterableOfIterableOfT__ToIterableOfT = dart.constFn(dart.gFnType(T => [core.Iterable$(T), [core.Iterable$(core.Iterable$(T))], [dart.fnType(core.int, [T, T])]])))();
  let IterableOfT__ToT = () => (IterableOfT__ToT = dart.constFn(dart.gFnType(T => [T, [core.Iterable$(T)], [dart.fnType(core.int, [T, T])]])))();
  let IterableOfT__ToT$ = () => (IterableOfT__ToT$ = dart.constFn(dart.gFnType(T => [T, [core.Iterable$(T)], [dart.fnType(core.int, [T, T])]])))();
  let IterableOfT__ToExtentOfT = () => (IterableOfT__ToExtentOfT = dart.constFn(dart.gFnType(T => [iterables$.Extent$(T), [core.Iterable$(T)], [dart.fnType(core.int, [T, T])]])))();
  let JSArrayOfList = () => (JSArrayOfList = dart.constFn(_interceptors.JSArray$(core.List)))();
  let IterableOfList = () => (IterableOfList = dart.constFn(core.Iterable$(core.List)))();
  let IterableAndintToIterableOfList = () => (IterableAndintToIterableOfList = dart.constFn(dart.fnType(IterableOfList(), [core.Iterable, core.int])))();
  let IteratorOfList = () => (IteratorOfList = dart.constFn(core.Iterator$(core.List)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let FnAndFnToIterable = () => (FnAndFnToIterable = dart.constFn(dart.fnType(core.Iterable, [VoidTodynamic(), dynamicTodynamic()])))();
  let SyncIterableOfnum = () => (SyncIterableOfnum = dart.constFn(_js_helper.SyncIterable$(core.num)))();
  let num__ToIterableOfnum = () => (num__ToIterableOfnum = dart.constFn(dart.fnType(IterableOfnum(), [core.num], [core.num, core.num])))();
  let IterableOfIterableOfTToIterableOfListOfT = () => (IterableOfIterableOfTToIterableOfListOfT = dart.constFn(dart.gFnType(T => [core.Iterable$(core.List$(T)), [core.Iterable$(core.Iterable$(T))]])))();
  iterables$.concat = function(T, iterables) {
    return iterables[$expand](T, dart.fn(x => x, dart.fnType(core.Iterable$(T), [core.Iterable$(T)])));
  };
  dart.fn(iterables$.concat, IterableOfIterableOfTToIterableOfT());
  iterables$.count = function(start, step) {
    if (start === void 0) start = 0;
    if (step === void 0) step = 1;
    return new iterables$._Count.new(start, step);
  };
  dart.fn(iterables$.count, __ToIterableOfnum());
  const _is_InfiniteIterable_default = Symbol('_is_InfiniteIterable_default');
  iterables$.InfiniteIterable$ = dart.generic(T => {
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    let TAndTToT = () => (TAndTToT = dart.constFn(dart.fnType(T, [T, T])))();
    let TTobool = () => (TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    class InfiniteIterable extends collection.IterableBase$(T) {
      get isEmpty() {
        return false;
      }
      get isNotEmpty() {
        return true;
      }
      get last() {
        return dart.throw(new core.UnsupportedError.new('last'));
      }
      get length() {
        return dart.throw(new core.UnsupportedError.new('length'));
      }
      get single() {
        return dart.throw(new core.StateError.new('single'));
      }
      every(f) {
        return dart.throw(new core.UnsupportedError.new('every'));
      }
      fold(T1, initialValue, combine) {
        return dart.throw(new core.UnsupportedError.new('fold'));
      }
      forEach(f) {
        return dart.throw(new core.UnsupportedError.new('forEach'));
      }
      join(separator) {
        if (separator === void 0) separator = '';
        return dart.throw(new core.UnsupportedError.new('join'));
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return dart.throw(new core.UnsupportedError.new('lastWhere'));
      }
      reduce(combine) {
        TAndTToT()._check(combine);
        return dart.throw(new core.UnsupportedError.new('reduce'));
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return dart.throw(new core.UnsupportedError.new('toList'));
      }
      toSet() {
        return dart.throw(new core.UnsupportedError.new('toSet'));
      }
    }
    (InfiniteIterable.new = function() {
      InfiniteIterable.__proto__.new.call(this);
    }).prototype = InfiniteIterable.prototype;
    dart.addTypeTests(InfiniteIterable);
    InfiniteIterable.prototype[_is_InfiniteIterable_default] = true;
    dart.setMethodSignature(InfiniteIterable, () => ({
      __proto__: dart.getMethods(InfiniteIterable.__proto__),
      lastWhere: dart.fnType(T, [TTobool()], {orElse: core.Object}),
      [$lastWhere]: dart.fnType(T, [TTobool()], {orElse: core.Object}),
      reduce: dart.fnType(T, [core.Object]),
      [$reduce]: dart.fnType(T, [core.Object])
    }));
    dart.defineExtensionMethods(InfiniteIterable, [
      'every',
      'fold',
      'forEach',
      'join',
      'lastWhere',
      'reduce',
      'toList',
      'toSet'
    ]);
    dart.defineExtensionAccessors(InfiniteIterable, [
      'isEmpty',
      'isNotEmpty',
      'last',
      'length',
      'single'
    ]);
    return InfiniteIterable;
  });
  iterables$.InfiniteIterable = iterables$.InfiniteIterable$();
  dart.addTypeTests(iterables$.InfiniteIterable, _is_InfiniteIterable_default);
  iterables$._Count = class _Count extends iterables$.InfiniteIterable$(core.num) {
    get iterator() {
      return new iterables$._CountIterator.new(this.start, this.step);
    }
  };
  (iterables$._Count.new = function(start, step) {
    this.start = start;
    this.step = step;
    iterables$._Count.__proto__.new.call(this);
  }).prototype = iterables$._Count.prototype;
  dart.addTypeTests(iterables$._Count);
  dart.setGetterSignature(iterables$._Count, () => ({
    __proto__: dart.getGetters(iterables$._Count.__proto__),
    iterator: dart.fnType(core.Iterator$(core.num), []),
    [$iterator]: dart.fnType(core.Iterator$(core.num), [])
  }));
  dart.setFieldSignature(iterables$._Count, () => ({
    __proto__: dart.getFields(iterables$._Count.__proto__),
    start: dart.finalFieldType(core.num),
    step: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionAccessors(iterables$._Count, ['iterator']);
  const _start = Symbol('_start');
  const _step = Symbol('_step');
  const _current = Symbol('_current');
  iterables$._CountIterator = class _CountIterator extends core.Object {
    get current() {
      return this[_current];
    }
    moveNext() {
      this[_current] = this[_current] == null ? this[_start] : dart.notNull(this[_current]) + dart.notNull(this[_step]);
      return true;
    }
  };
  (iterables$._CountIterator.new = function(start, step) {
    this[_current] = null;
    this[_start] = start;
    this[_step] = step;
  }).prototype = iterables$._CountIterator.prototype;
  dart.addTypeTests(iterables$._CountIterator);
  iterables$._CountIterator[dart.implements] = () => [IteratorOfnum()];
  dart.setMethodSignature(iterables$._CountIterator, () => ({
    __proto__: dart.getMethods(iterables$._CountIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(iterables$._CountIterator, () => ({
    __proto__: dart.getGetters(iterables$._CountIterator.__proto__),
    current: dart.fnType(core.num, [])
  }));
  dart.setFieldSignature(iterables$._CountIterator, () => ({
    __proto__: dart.getFields(iterables$._CountIterator.__proto__),
    [_start]: dart.finalFieldType(core.num),
    [_step]: dart.finalFieldType(core.num),
    [_current]: dart.fieldType(core.num)
  }));
  iterables$.cycle = function(T, iterable) {
    return new (iterables$._Cycle$(T)).new(iterable);
  };
  dart.fn(iterables$.cycle, IterableOfTToIterableOfT());
  const _iterable$ = Symbol('_iterable');
  const _is__Cycle_default = Symbol('_is__Cycle_default');
  iterables$._Cycle$ = dart.generic(T => {
    let _CycleIteratorOfT = () => (_CycleIteratorOfT = dart.constFn(iterables$._CycleIterator$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    class _Cycle extends iterables$.InfiniteIterable$(T) {
      get iterator() {
        return new (_CycleIteratorOfT()).new(this[_iterable$]);
      }
      get isEmpty() {
        return this[_iterable$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_iterable$][$isNotEmpty];
      }
    }
    (_Cycle.new = function(iterable) {
      this[_iterable$] = iterable;
      _Cycle.__proto__.new.call(this);
    }).prototype = _Cycle.prototype;
    dart.addTypeTests(_Cycle);
    _Cycle.prototype[_is__Cycle_default] = true;
    dart.setGetterSignature(_Cycle, () => ({
      __proto__: dart.getGetters(_Cycle.__proto__),
      iterator: dart.fnType(core.Iterator$(T), []),
      [$iterator]: dart.fnType(core.Iterator$(T), [])
    }));
    dart.setFieldSignature(_Cycle, () => ({
      __proto__: dart.getFields(_Cycle.__proto__),
      [_iterable$]: dart.finalFieldType(IterableOfT())
    }));
    dart.defineExtensionAccessors(_Cycle, ['iterator', 'isEmpty', 'isNotEmpty']);
    return _Cycle;
  });
  iterables$._Cycle = iterables$._Cycle$();
  dart.addTypeTests(iterables$._Cycle, _is__Cycle_default);
  const _iterator = Symbol('_iterator');
  const _is__CycleIterator_default = Symbol('_is__CycleIterator_default');
  iterables$._CycleIterator$ = dart.generic(T => {
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    class _CycleIterator extends core.Object {
      get current() {
        return this[_iterator].current;
      }
      moveNext() {
        if (!dart.test(this[_iterator].moveNext())) {
          this[_iterator] = this[_iterable$][$iterator];
          return this[_iterator].moveNext();
        }
        return true;
      }
    }
    (_CycleIterator.new = function(_iterable) {
      this[_iterable$] = _iterable;
      this[_iterator] = _iterable[$iterator];
    }).prototype = _CycleIterator.prototype;
    dart.addTypeTests(_CycleIterator);
    _CycleIterator.prototype[_is__CycleIterator_default] = true;
    _CycleIterator[dart.implements] = () => [IteratorOfT()];
    dart.setMethodSignature(_CycleIterator, () => ({
      __proto__: dart.getMethods(_CycleIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_CycleIterator, () => ({
      __proto__: dart.getGetters(_CycleIterator.__proto__),
      current: dart.fnType(T, [])
    }));
    dart.setFieldSignature(_CycleIterator, () => ({
      __proto__: dart.getFields(_CycleIterator.__proto__),
      [_iterable$]: dart.finalFieldType(IterableOfT()),
      [_iterator]: dart.fieldType(IteratorOfT())
    }));
    return _CycleIterator;
  });
  iterables$._CycleIterator = iterables$._CycleIterator$();
  dart.addTypeTests(iterables$._CycleIterator, _is__CycleIterator_default);
  iterables$.enumerate = function(E, iterable) {
    return new (iterables$.EnumerateIterable$(E)).new(iterable);
  };
  dart.lazyFn(iterables$.enumerate, () => IterableOfEToIterableOfIndexedValueOfE());
  const _is_IndexedValue_default = Symbol('_is_IndexedValue_default');
  iterables$.IndexedValue$ = dart.generic(V => {
    class IndexedValue extends core.Object {
      get index() {
        return this[index$];
      }
      set index(value) {
        super.index = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      _equals(o) {
        if (o == null) return false;
        return iterables$.IndexedValue.is(o) && o.index == this.index && dart.equals(o.value, this.value);
      }
      get hashCode() {
        return dart.notNull(this.index) * 31 + dart.notNull(dart.hashCode(this.value));
      }
      toString() {
        return dart.str`(${this.index}, ${this.value})`;
      }
    }
    (IndexedValue.new = function(index, value) {
      this[index$] = index;
      this[value$] = value;
    }).prototype = IndexedValue.prototype;
    dart.addTypeTests(IndexedValue);
    IndexedValue.prototype[_is_IndexedValue_default] = true;
    const index$ = Symbol("IndexedValue.index");
    const value$ = Symbol("IndexedValue.value");
    dart.setMethodSignature(IndexedValue, () => ({
      __proto__: dart.getMethods(IndexedValue.__proto__),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(IndexedValue, () => ({
      __proto__: dart.getGetters(IndexedValue.__proto__),
      hashCode: dart.fnType(core.int, []),
      [$hashCode]: dart.fnType(core.int, [])
    }));
    dart.setFieldSignature(IndexedValue, () => ({
      __proto__: dart.getFields(IndexedValue.__proto__),
      index: dart.finalFieldType(core.int),
      value: dart.finalFieldType(V)
    }));
    dart.defineExtensionMethods(IndexedValue, ['_equals', 'toString']);
    dart.defineExtensionAccessors(IndexedValue, ['hashCode']);
    return IndexedValue;
  });
  iterables$.IndexedValue = iterables$.IndexedValue$();
  dart.addTypeTests(iterables$.IndexedValue, _is_IndexedValue_default);
  const _is_EnumerateIterable_default = Symbol('_is_EnumerateIterable_default');
  iterables$.EnumerateIterable$ = dart.generic(V => {
    let EnumerateIteratorOfV = () => (EnumerateIteratorOfV = dart.constFn(iterables$.EnumerateIterator$(V)))();
    let IndexedValueOfV = () => (IndexedValueOfV = dart.constFn(iterables$.IndexedValue$(V)))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    class EnumerateIterable extends collection.IterableBase$(iterables$.IndexedValue$(V)) {
      get iterator() {
        return new (EnumerateIteratorOfV()).new(this[_iterable$][$iterator]);
      }
      get length() {
        return this[_iterable$][$length];
      }
      get isEmpty() {
        return this[_iterable$][$isEmpty];
      }
      get first() {
        return new (IndexedValueOfV()).new(0, this[_iterable$][$first]);
      }
      get last() {
        return new (IndexedValueOfV()).new(dart.notNull(this.length) - 1, this[_iterable$][$last]);
      }
      get single() {
        return new (IndexedValueOfV()).new(0, this[_iterable$][$single]);
      }
      elementAt(index) {
        return new (IndexedValueOfV()).new(index, this[_iterable$][$elementAt](index));
      }
    }
    (EnumerateIterable.new = function(iterable) {
      this[_iterable$] = iterable;
      EnumerateIterable.__proto__.new.call(this);
    }).prototype = EnumerateIterable.prototype;
    dart.addTypeTests(EnumerateIterable);
    EnumerateIterable.prototype[_is_EnumerateIterable_default] = true;
    dart.setMethodSignature(EnumerateIterable, () => ({
      __proto__: dart.getMethods(EnumerateIterable.__proto__),
      elementAt: dart.fnType(iterables$.IndexedValue$(V), [core.int]),
      [$elementAt]: dart.fnType(iterables$.IndexedValue$(V), [core.int])
    }));
    dart.setGetterSignature(EnumerateIterable, () => ({
      __proto__: dart.getGetters(EnumerateIterable.__proto__),
      iterator: dart.fnType(core.Iterator$(iterables$.IndexedValue$(V)), []),
      [$iterator]: dart.fnType(core.Iterator$(iterables$.IndexedValue$(V)), []),
      length: dart.fnType(core.int, []),
      [$length]: dart.fnType(core.int, []),
      isEmpty: dart.fnType(core.bool, []),
      [$isEmpty]: dart.fnType(core.bool, []),
      first: dart.fnType(iterables$.IndexedValue$(V), []),
      [$first]: dart.fnType(iterables$.IndexedValue$(V), []),
      last: dart.fnType(iterables$.IndexedValue$(V), []),
      [$last]: dart.fnType(iterables$.IndexedValue$(V), []),
      single: dart.fnType(iterables$.IndexedValue$(V), []),
      [$single]: dart.fnType(iterables$.IndexedValue$(V), [])
    }));
    dart.setFieldSignature(EnumerateIterable, () => ({
      __proto__: dart.getFields(EnumerateIterable.__proto__),
      [_iterable$]: dart.finalFieldType(IterableOfV())
    }));
    dart.defineExtensionMethods(EnumerateIterable, ['elementAt']);
    dart.defineExtensionAccessors(EnumerateIterable, [
      'iterator',
      'length',
      'isEmpty',
      'first',
      'last',
      'single'
    ]);
    return EnumerateIterable;
  });
  iterables$.EnumerateIterable = iterables$.EnumerateIterable$();
  dart.addTypeTests(iterables$.EnumerateIterable, _is_EnumerateIterable_default);
  const _index = Symbol('_index');
  const _is_EnumerateIterator_default = Symbol('_is_EnumerateIterator_default');
  iterables$.EnumerateIterator$ = dart.generic(V => {
    let IndexedValueOfV = () => (IndexedValueOfV = dart.constFn(iterables$.IndexedValue$(V)))();
    let IteratorOfV = () => (IteratorOfV = dart.constFn(core.Iterator$(V)))();
    class EnumerateIterator extends core.Iterator$(iterables$.IndexedValue$(V)) {
      get current() {
        return this[_current];
      }
      moveNext() {
        if (dart.test(this[_iterator].moveNext())) {
          this[_current] = new (IndexedValueOfV()).new((() => {
            let x = this[_index];
            this[_index] = dart.notNull(x) + 1;
            return x;
          })(), this[_iterator].current);
          return true;
        }
        this[_current] = null;
        return false;
      }
    }
    (EnumerateIterator.new = function(iterator) {
      this[_index] = 0;
      this[_current] = null;
      this[_iterator] = iterator;
    }).prototype = EnumerateIterator.prototype;
    dart.addTypeTests(EnumerateIterator);
    EnumerateIterator.prototype[_is_EnumerateIterator_default] = true;
    dart.setMethodSignature(EnumerateIterator, () => ({
      __proto__: dart.getMethods(EnumerateIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(EnumerateIterator, () => ({
      __proto__: dart.getGetters(EnumerateIterator.__proto__),
      current: dart.fnType(iterables$.IndexedValue$(V), [])
    }));
    dart.setFieldSignature(EnumerateIterator, () => ({
      __proto__: dart.getFields(EnumerateIterator.__proto__),
      [_iterator]: dart.finalFieldType(IteratorOfV()),
      [_index]: dart.fieldType(core.int),
      [_current]: dart.fieldType(IndexedValueOfV())
    }));
    return EnumerateIterator;
  });
  iterables$.EnumerateIterator = iterables$.EnumerateIterator$();
  dart.addTypeTests(iterables$.EnumerateIterator, _is_EnumerateIterator_default);
  let const$;
  iterables$.merge = function(T, iterables, compare) {
    if (compare === void 0) compare = null;
    return core.Iterable$(T)._check(dart.test(iterables[$isEmpty]) ? const$ || (const$ = dart.constList([], core.Null)) : new (iterables$._Merge$(T)).new(iterables, dart.fnType(core.int, [T, T])._check(compare != null ? compare : dart.tagStatic(core.Comparable, 'compare'))));
  };
  dart.fn(iterables$.merge, IterableOfIterableOfT__ToIterableOfT());
  const _iterables = Symbol('_iterables');
  const _compare = Symbol('_compare');
  const _is__Merge_default = Symbol('_is__Merge_default');
  iterables$._Merge$ = dart.generic(T => {
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToIteratorOfT = () => (IterableOfTToIteratorOfT = dart.constFn(dart.fnType(IteratorOfT(), [IterableOfT()])))();
    let _MergeIteratorOfT = () => (_MergeIteratorOfT = dart.constFn(iterables$._MergeIterator$(T)))();
    let IterableOfIterableOfT = () => (IterableOfIterableOfT = dart.constFn(core.Iterable$(IterableOfT())))();
    let TAndTToint = () => (TAndTToint = dart.constFn(dart.fnType(core.int, [T, T])))();
    class _Merge extends collection.IterableBase$(T) {
      get iterator() {
        return new (_MergeIteratorOfT()).new(this[_iterables][$map](IteratorOfT(), dart.fn(i => i[$iterator], IterableOfTToIteratorOfT()))[$toList]({growable: false}), this[_compare]);
      }
      toString() {
        return dart.toString(this.toList());
      }
    }
    (_Merge.new = function(iterables, compare) {
      this[_iterables] = iterables;
      this[_compare] = compare;
      _Merge.__proto__.new.call(this);
    }).prototype = _Merge.prototype;
    dart.addTypeTests(_Merge);
    _Merge.prototype[_is__Merge_default] = true;
    dart.setGetterSignature(_Merge, () => ({
      __proto__: dart.getGetters(_Merge.__proto__),
      iterator: dart.fnType(core.Iterator$(T), []),
      [$iterator]: dart.fnType(core.Iterator$(T), [])
    }));
    dart.setFieldSignature(_Merge, () => ({
      __proto__: dart.getFields(_Merge.__proto__),
      [_iterables]: dart.finalFieldType(IterableOfIterableOfT()),
      [_compare]: dart.finalFieldType(TAndTToint())
    }));
    dart.defineExtensionMethods(_Merge, ['toString']);
    dart.defineExtensionAccessors(_Merge, ['iterator']);
    return _Merge;
  });
  iterables$._Merge = iterables$._Merge$();
  dart.addTypeTests(iterables$._Merge, _is__Merge_default);
  const _hasCurrent = Symbol('_hasCurrent');
  const _is__IteratorPeeker_default = Symbol('_is__IteratorPeeker_default');
  iterables$._IteratorPeeker$ = dart.generic(T => {
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    class _IteratorPeeker extends core.Object {
      moveNext() {
        this[_hasCurrent] = this[_iterator].moveNext();
      }
      get current() {
        return this[_iterator].current;
      }
    }
    (_IteratorPeeker.new = function(iterator) {
      this[_iterator] = iterator;
      this[_hasCurrent] = iterator.moveNext();
    }).prototype = _IteratorPeeker.prototype;
    dart.addTypeTests(_IteratorPeeker);
    _IteratorPeeker.prototype[_is__IteratorPeeker_default] = true;
    dart.setMethodSignature(_IteratorPeeker, () => ({
      __proto__: dart.getMethods(_IteratorPeeker.__proto__),
      moveNext: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_IteratorPeeker, () => ({
      __proto__: dart.getGetters(_IteratorPeeker.__proto__),
      current: dart.fnType(T, [])
    }));
    dart.setFieldSignature(_IteratorPeeker, () => ({
      __proto__: dart.getFields(_IteratorPeeker.__proto__),
      [_iterator]: dart.finalFieldType(IteratorOfT()),
      [_hasCurrent]: dart.fieldType(core.bool)
    }));
    return _IteratorPeeker;
  });
  iterables$._IteratorPeeker = iterables$._IteratorPeeker$();
  dart.addTypeTests(iterables$._IteratorPeeker, _is__IteratorPeeker_default);
  const _peekers = Symbol('_peekers');
  const _is__MergeIterator_default = Symbol('_is__MergeIterator_default');
  iterables$._MergeIterator$ = dart.generic(T => {
    let _IteratorPeekerOfT = () => (_IteratorPeekerOfT = dart.constFn(iterables$._IteratorPeeker$(T)))();
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let IteratorOfTTo_IteratorPeekerOfT = () => (IteratorOfTTo_IteratorPeekerOfT = dart.constFn(dart.fnType(_IteratorPeekerOfT(), [IteratorOfT()])))();
    let ListOf_IteratorPeekerOfT = () => (ListOf_IteratorPeekerOfT = dart.constFn(core.List$(_IteratorPeekerOfT())))();
    let TAndTToint = () => (TAndTToint = dart.constFn(dart.fnType(core.int, [T, T])))();
    class _MergeIterator extends core.Object {
      moveNext() {
        let minIter = null;
        for (let p of this[_peekers]) {
          if (dart.test(p[_hasCurrent])) {
            if (minIter == null || dart.notNull(this[_compare](p.current, minIter.current)) < 0) {
              minIter = p;
            }
          }
        }
        if (minIter == null) {
          return false;
        }
        this[_current] = minIter.current;
        minIter.moveNext();
        return true;
      }
      get current() {
        return this[_current];
      }
    }
    (_MergeIterator.new = function(iterators, compare) {
      this[_current] = null;
      this[_compare] = compare;
      this[_peekers] = iterators[$map](_IteratorPeekerOfT(), dart.fn(i => new (_IteratorPeekerOfT()).new(i), IteratorOfTTo_IteratorPeekerOfT()))[$toList]();
    }).prototype = _MergeIterator.prototype;
    dart.addTypeTests(_MergeIterator);
    _MergeIterator.prototype[_is__MergeIterator_default] = true;
    _MergeIterator[dart.implements] = () => [IteratorOfT()];
    dart.setMethodSignature(_MergeIterator, () => ({
      __proto__: dart.getMethods(_MergeIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_MergeIterator, () => ({
      __proto__: dart.getGetters(_MergeIterator.__proto__),
      current: dart.fnType(T, [])
    }));
    dart.setFieldSignature(_MergeIterator, () => ({
      __proto__: dart.getFields(_MergeIterator.__proto__),
      [_peekers]: dart.finalFieldType(ListOf_IteratorPeekerOfT()),
      [_compare]: dart.finalFieldType(TAndTToint()),
      [_current]: dart.fieldType(T)
    }));
    return _MergeIterator;
  });
  iterables$._MergeIterator = iterables$._MergeIterator$();
  dart.addTypeTests(iterables$._MergeIterator, _is__MergeIterator_default);
  iterables$.max = function(T, i, compare) {
    if (compare === void 0) compare = null;
    let _compare = dart.fnType(core.int, [T, T])._check(compare != null ? compare : dart.tagStatic(core.Comparable, 'compare'));
    return dart.test(i[$isEmpty]) ? null : i[$reduce](dart.fn((a, b) => dart.notNull(_compare(a, b)) > 0 ? a : b, dart.fnType(T, [T, T])));
  };
  dart.fn(iterables$.max, IterableOfT__ToT());
  iterables$.min = function(T, i, compare) {
    if (compare === void 0) compare = null;
    let _compare = dart.fnType(core.int, [T, T])._check(compare != null ? compare : dart.tagStatic(core.Comparable, 'compare'));
    return dart.test(i[$isEmpty]) ? null : i[$reduce](dart.fn((a, b) => dart.notNull(_compare(a, b)) < 0 ? a : b, dart.fnType(T, [T, T])));
  };
  dart.fn(iterables$.min, IterableOfT__ToT$());
  iterables$.extent = function(T, i, compare) {
    if (compare === void 0) compare = null;
    let _compare = dart.fnType(core.int, [T, T])._check(compare != null ? compare : dart.tagStatic(core.Comparable, 'compare'));
    let iterator = i[$iterator];
    let hasNext = iterator.moveNext();
    if (!dart.test(hasNext)) return new (iterables$.Extent$(T)).new(null, null);
    let max = iterator.current;
    let min = iterator.current;
    while (dart.test(iterator.moveNext())) {
      if (dart.notNull(_compare(max, iterator.current)) < 0) max = iterator.current;
      if (dart.notNull(_compare(min, iterator.current)) > 0) min = iterator.current;
    }
    return new (iterables$.Extent$(T)).new(min, max);
  };
  dart.lazyFn(iterables$.extent, () => IterableOfT__ToExtentOfT());
  const _is_Extent_default = Symbol('_is_Extent_default');
  iterables$.Extent$ = dart.generic(T => {
    class Extent extends core.Object {
      get min() {
        return this[min$];
      }
      set min(value) {
        super.min = value;
      }
      get max() {
        return this[max$];
      }
      set max(value) {
        super.max = value;
      }
    }
    (Extent.new = function(min, max) {
      this[min$] = min;
      this[max$] = max;
    }).prototype = Extent.prototype;
    dart.addTypeTests(Extent);
    Extent.prototype[_is_Extent_default] = true;
    const min$ = Symbol("Extent.min");
    const max$ = Symbol("Extent.max");
    dart.setFieldSignature(Extent, () => ({
      __proto__: dart.getFields(Extent.__proto__),
      min: dart.finalFieldType(T),
      max: dart.finalFieldType(T)
    }));
    return Extent;
  });
  iterables$.Extent = iterables$.Extent$();
  dart.addTypeTests(iterables$.Extent, _is_Extent_default);
  iterables$.partition = function(iterable, size) {
    return dart.test(iterable[$isEmpty]) ? JSArrayOfList().of([]) : new iterables$._Partition.new(iterable, size);
  };
  dart.fn(iterables$.partition, IterableAndintToIterableOfList());
  const _size = Symbol('_size');
  iterables$._Partition = class _Partition extends collection.IterableBase$(core.List) {
    get iterator() {
      return new iterables$._PartitionIterator.new(this[_iterable$][$iterator], this[_size]);
    }
  };
  (iterables$._Partition.new = function(iterable, size) {
    this[_iterable$] = iterable;
    this[_size] = size;
    iterables$._Partition.__proto__.new.call(this);
    if (dart.notNull(this[_size]) <= 0) dart.throw(new core.ArgumentError.new(this[_size]));
  }).prototype = iterables$._Partition.prototype;
  dart.addTypeTests(iterables$._Partition);
  dart.setGetterSignature(iterables$._Partition, () => ({
    __proto__: dart.getGetters(iterables$._Partition.__proto__),
    iterator: dart.fnType(core.Iterator$(core.List), []),
    [$iterator]: dart.fnType(core.Iterator$(core.List), [])
  }));
  dart.setFieldSignature(iterables$._Partition, () => ({
    __proto__: dart.getFields(iterables$._Partition.__proto__),
    [_iterable$]: dart.finalFieldType(core.Iterable),
    [_size]: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionAccessors(iterables$._Partition, ['iterator']);
  iterables$._PartitionIterator = class _PartitionIterator extends core.Object {
    get current() {
      return this[_current];
    }
    moveNext() {
      let newValue = [];
      let count = 0;
      for (; count < dart.notNull(this[_size]) && dart.test(this[_iterator].moveNext()); count++) {
        newValue[$add](this[_iterator].current);
      }
      this[_current] = count > 0 ? newValue : null;
      return this[_current] != null;
    }
  };
  (iterables$._PartitionIterator.new = function(iterator, size) {
    this[_current] = null;
    this[_iterator] = iterator;
    this[_size] = size;
  }).prototype = iterables$._PartitionIterator.prototype;
  dart.addTypeTests(iterables$._PartitionIterator);
  iterables$._PartitionIterator[dart.implements] = () => [IteratorOfList()];
  dart.setMethodSignature(iterables$._PartitionIterator, () => ({
    __proto__: dart.getMethods(iterables$._PartitionIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(iterables$._PartitionIterator, () => ({
    __proto__: dart.getGetters(iterables$._PartitionIterator.__proto__),
    current: dart.fnType(core.List, [])
  }));
  dart.setFieldSignature(iterables$._PartitionIterator, () => ({
    __proto__: dart.getFields(iterables$._PartitionIterator.__proto__),
    [_iterator]: dart.finalFieldType(core.Iterator),
    [_size]: dart.finalFieldType(core.int),
    [_current]: dart.fieldType(core.List)
  }));
  iterables$._Initial$ = dart.generic(T => {
    const _Initial = dart.typedef('_Initial', () => dart.fnType(T, []));
    return _Initial;
  });
  iterables$._Initial = iterables$._Initial$();
  iterables$._Next$ = dart.generic(T => {
    const _Next = dart.typedef('_Next', () => dart.fnType(T, [T]));
    return _Next;
  });
  iterables$._Next = iterables$._Next$();
  iterables$.generate = function(initial, next) {
    return new iterables$.GeneratingIterable.new(initial, next);
  };
  dart.fn(iterables$.generate, FnAndFnToIterable());
  const _is_GeneratingIterable_default = Symbol('_is_GeneratingIterable_default');
  iterables$.GeneratingIterable$ = dart.generic(T => {
    let _GeneratingIteratorOfT = () => (_GeneratingIteratorOfT = dart.constFn(iterables$._GeneratingIterator$(T)))();
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    let TToT = () => (TToT = dart.constFn(dart.fnType(T, [T])))();
    class GeneratingIterable extends collection.IterableBase$(T) {
      get initial() {
        return this[initial$];
      }
      set initial(value) {
        super.initial = value;
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        super.next = value;
      }
      get iterator() {
        return new (_GeneratingIteratorOfT()).new(this.initial(), this.next);
      }
    }
    (GeneratingIterable.new = function(initial, next) {
      this[initial$] = initial;
      this[next$] = next;
      GeneratingIterable.__proto__.new.call(this);
    }).prototype = GeneratingIterable.prototype;
    dart.addTypeTests(GeneratingIterable);
    GeneratingIterable.prototype[_is_GeneratingIterable_default] = true;
    const initial$ = Symbol("GeneratingIterable.initial");
    const next$ = Symbol("GeneratingIterable.next");
    dart.setGetterSignature(GeneratingIterable, () => ({
      __proto__: dart.getGetters(GeneratingIterable.__proto__),
      iterator: dart.fnType(core.Iterator$(T), []),
      [$iterator]: dart.fnType(core.Iterator$(T), [])
    }));
    dart.setFieldSignature(GeneratingIterable, () => ({
      __proto__: dart.getFields(GeneratingIterable.__proto__),
      initial: dart.finalFieldType(VoidToT()),
      next: dart.finalFieldType(TToT())
    }));
    dart.defineExtensionAccessors(GeneratingIterable, ['iterator']);
    return GeneratingIterable;
  });
  iterables$.GeneratingIterable = iterables$.GeneratingIterable$();
  dart.addTypeTests(iterables$.GeneratingIterable, _is_GeneratingIterable_default);
  const _is__GeneratingIterator_default = Symbol('_is__GeneratingIterator_default');
  iterables$._GeneratingIterator$ = dart.generic(T => {
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let TToT = () => (TToT = dart.constFn(dart.fnType(T, [T])))();
    class _GeneratingIterator extends core.Object {
      get current() {
        return dart.test(this.started) ? this.object : null;
      }
      moveNext() {
        if (this.object == null) return false;
        if (dart.test(this.started)) {
          this.object = this.next(this.object);
        } else {
          this.started = true;
        }
        return this.object != null;
      }
    }
    (_GeneratingIterator.new = function(object, next) {
      this.started = false;
      this.object = object;
      this.next = next;
    }).prototype = _GeneratingIterator.prototype;
    dart.addTypeTests(_GeneratingIterator);
    _GeneratingIterator.prototype[_is__GeneratingIterator_default] = true;
    _GeneratingIterator[dart.implements] = () => [IteratorOfT()];
    dart.setMethodSignature(_GeneratingIterator, () => ({
      __proto__: dart.getMethods(_GeneratingIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_GeneratingIterator, () => ({
      __proto__: dart.getGetters(_GeneratingIterator.__proto__),
      current: dart.fnType(T, [])
    }));
    dart.setFieldSignature(_GeneratingIterator, () => ({
      __proto__: dart.getFields(_GeneratingIterator.__proto__),
      next: dart.finalFieldType(TToT()),
      object: dart.fieldType(T),
      started: dart.fieldType(core.bool)
    }));
    return _GeneratingIterator;
  });
  iterables$._GeneratingIterator = iterables$._GeneratingIterator$();
  dart.addTypeTests(iterables$._GeneratingIterator, _is__GeneratingIterator_default);
  iterables$.range = function(start_or_stop, stop, step) {
    return new (SyncIterableOfnum()).new(() => (function* range(stop, step) {
      if (stop === void 0) stop = null;
      if (step === void 0) step = null;
      let start = stop == null ? 0 : start_or_stop;
      let t = stop;
      t == null ? stop = start_or_stop : t;
      let t$ = step;
      t$ == null ? step = 1 : t$;
      if (step === 0) dart.throw(new core.ArgumentError.new('step cannot be 0'));
      if (dart.notNull(step) > 0 && dart.notNull(stop) < dart.notNull(start)) dart.throw(new core.ArgumentError.new('if step is positive,' + ' stop must be greater than start'));
      if (dart.notNull(step) < 0 && dart.notNull(stop) > dart.notNull(start)) dart.throw(new core.ArgumentError.new('if step is negative,' + ' stop must be less than start'));
      for (let value = start; dart.notNull(step) < 0 ? dart.notNull(value) > dart.notNull(stop) : dart.notNull(value) < dart.notNull(stop); value = dart.notNull(value) + dart.notNull(step))
        yield value;
    })(stop, step));
  };
  dart.fn(iterables$.range, num__ToIterableOfnum());
  iterables$.zip = function(T, iterables) {
    return new (_js_helper.SyncIterable$(core.List$(T))).new(function* zip() {
      if (dart.test(iterables[$isEmpty])) return;
      let iterators = iterables[$map](core.Iterator$(T), dart.fn(e => e[$iterator], dart.fnType(core.Iterator$(T), [core.Iterable$(T)])))[$toList]({growable: false});
      while (dart.test(iterators[$every](dart.fn(e => e.moveNext(), dart.fnType(core.bool, [core.Iterator$(T)]))))) {
        yield iterators[$map](T, dart.fn(e => e.current, dart.fnType(T, [core.Iterator$(T)])))[$toList]({growable: false});
      }
    });
  };
  dart.fn(iterables$.zip, IterableOfIterableOfTToIterableOfListOfT());
  dart.trackLibraries("packages/quiver/iterables.ddc", {
    "package:quiver/iterables.dart": iterables$
  }, '{"version":3,"sourceRoot":"","sources":["src/iterables/concat.dart","src/iterables/count.dart","src/iterables/infinite_iterable.dart","src/iterables/cycle.dart","src/iterables/enumerate.dart","src/iterables/merge.dart","src/iterables/min_max.dart","src/iterables/partition.dart","src/iterables/generating_iterable.dart","src/iterables/range.dart","src/iterables/zip.dart"],"names":[],"mappings":"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","file":"iterables.ddc.js"}');
  // Exports:
  return {
    iterables: iterables$
  };
});

//# sourceMappingURL=iterables.ddc.js.map
