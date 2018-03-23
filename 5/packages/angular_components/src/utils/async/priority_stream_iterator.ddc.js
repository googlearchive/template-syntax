define(['dart_sdk', 'packages/collection/src/priority_queue'], function(dart_sdk, priority_queue) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__priority_queue = priority_queue.src__priority_queue;
  const _root = Object.create(null);
  const src__utils__async__priority_stream_iterator = Object.create(_root);
  const $compareTo = dartx.compareTo;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $clear = dartx.clear;
  const $remove = dartx.remove;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $isEmpty = dartx.isEmpty;
  const $length = dartx.length;
  const $toList = dartx.toList;
  const $keys = dartx.keys;
  const $sort = dartx.sort;
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let VoidToFn = () => (VoidToFn = dart.constFn(dart.gFnType(T => [dart.fnType(core.int, [T, T]), []], T => [core.Comparable])))();
  const _iterator = Symbol('_iterator');
  const _queue = Symbol('_queue');
  const _current = Symbol('_current');
  const _next = Symbol('_next');
  const _accumulateValues = Symbol('_accumulateValues');
  const _clear = Symbol('_clear');
  const _getNextValue = Symbol('_getNextValue');
  const _is_PriorityStreamIterator_default = Symbol('_is_PriorityStreamIterator_default');
  src__utils__async__priority_stream_iterator.PriorityStreamIterator$ = dart.generic(T => {
    let StreamIteratorOfT = () => (StreamIteratorOfT = dart.constFn(async.StreamIterator$(T)))();
    let _StablePriorityQueueOfT = () => (_StablePriorityQueueOfT = dart.constFn(src__utils__async__priority_stream_iterator._StablePriorityQueue$(T)))();
    let PriorityQueueOfT = () => (PriorityQueueOfT = dart.constFn(src__priority_queue.PriorityQueue$(T)))();
    class PriorityStreamIterator extends core.Object {
      moveNext() {
        if (dart.test(this[_queue].isNotEmpty)) {
          this[_current] = this[_queue].removeFirst();
          return FutureOfbool().value(true);
        }
        this[_current] = null;
        return this[_next].then(core.bool, dart.fn(_ => {
          if (dart.test(_)) {
            this[_current] = this[_queue].removeFirst();
          }
          return _;
        }, boolTobool()));
      }
      get current() {
        return this[_current];
      }
      cancel() {
        this[_clear]();
        return this[_iterator].cancel();
      }
      [_accumulateValues]() {
        (this[_next] = this[_getNextValue]()).then(core.Null, dart.fn(_ => {
          if (dart.test(_)) {
            this[_accumulateValues]();
          }
        }, boolToNull()));
      }
      [_getNextValue]() {
        return this[_iterator].moveNext().then(core.bool, dart.fn(_ => {
          if (dart.test(_)) {
            this[_queue].add(this[_iterator].current);
          }
          return _;
        }, boolTobool()));
      }
      [_clear]() {
        this[_current] = null;
        this[_queue].clear();
      }
    }
    (PriorityStreamIterator.new = function(stream, comparison) {
      if (comparison === void 0) comparison = null;
      this[_current] = null;
      this[_next] = null;
      this[_iterator] = StreamIteratorOfT().new(stream);
      this[_queue] = new (_StablePriorityQueueOfT()).new(comparison);
      this[_accumulateValues]();
    }).prototype = PriorityStreamIterator.prototype;
    dart.addTypeTests(PriorityStreamIterator);
    PriorityStreamIterator.prototype[_is_PriorityStreamIterator_default] = true;
    PriorityStreamIterator[dart.implements] = () => [StreamIteratorOfT()];
    dart.setMethodSignature(PriorityStreamIterator, () => ({
      __proto__: dart.getMethods(PriorityStreamIterator.__proto__),
      moveNext: dart.fnType(async.Future$(core.bool), []),
      cancel: dart.fnType(async.Future, []),
      [_accumulateValues]: dart.fnType(dart.void, []),
      [_getNextValue]: dart.fnType(async.Future$(core.bool), []),
      [_clear]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(PriorityStreamIterator, () => ({
      __proto__: dart.getGetters(PriorityStreamIterator.__proto__),
      current: dart.fnType(T, [])
    }));
    dart.setFieldSignature(PriorityStreamIterator, () => ({
      __proto__: dart.getFields(PriorityStreamIterator.__proto__),
      [_iterator]: dart.finalFieldType(StreamIteratorOfT()),
      [_queue]: dart.finalFieldType(PriorityQueueOfT()),
      [_current]: dart.fieldType(T),
      [_next]: dart.fieldType(FutureOfbool())
    }));
    return PriorityStreamIterator;
  });
  src__utils__async__priority_stream_iterator.PriorityStreamIterator = src__utils__async__priority_stream_iterator.PriorityStreamIterator$();
  dart.addTypeTests(src__utils__async__priority_stream_iterator.PriorityStreamIterator, _is_PriorityStreamIterator_default);
  const _is__StablePriorityQueue_default = Symbol('_is__StablePriorityQueue_default');
  src__utils__async__priority_stream_iterator._StablePriorityQueue$ = dart.generic(T => {
    let _OrderedComparatorOfT = () => (_OrderedComparatorOfT = dart.constFn(src__utils__async__priority_stream_iterator._OrderedComparator$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    class _StablePriorityQueue extends src__priority_queue.HeapPriorityQueue$(T) {
      add(el) {
        T._check(el);
        this.comparator.add(el);
        super.add(el);
      }
      addAll(elements) {
        IterableOfT()._check(elements);
        this.comparator.addAll(elements);
        super.addAll(elements);
      }
      remove(el) {
        T._check(el);
        let result = super.remove(el);
        this.comparator.remove(el);
        return result;
      }
      removeAll() {
        let result = super.removeAll();
        this.comparator.clear();
        return result;
      }
      removeFirst() {
        let el = super.removeFirst();
        this.comparator.remove(el);
        return el;
      }
      clear() {
        super.clear();
        this.comparator.clear();
      }
    }
    (_StablePriorityQueue.new = function(comparison) {
      if (comparison === void 0) comparison = null;
      _StablePriorityQueue.__.call(this, new (_OrderedComparatorOfT()).new(comparison != null ? comparison : src__utils__async__priority_stream_iterator._defaultComparator(T)));
    }).prototype = _StablePriorityQueue.prototype;
    (_StablePriorityQueue.__ = function(comparator) {
      this.comparator = comparator;
      _StablePriorityQueue.__proto__.new.call(this, comparator);
    }).prototype = _StablePriorityQueue.prototype;
    dart.addTypeTests(_StablePriorityQueue);
    _StablePriorityQueue.prototype[_is__StablePriorityQueue_default] = true;
    dart.setMethodSignature(_StablePriorityQueue, () => ({
      __proto__: dart.getMethods(_StablePriorityQueue.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object])
    }));
    dart.setFieldSignature(_StablePriorityQueue, () => ({
      __proto__: dart.getFields(_StablePriorityQueue.__proto__),
      comparator: dart.finalFieldType(_OrderedComparatorOfT())
    }));
    return _StablePriorityQueue;
  });
  src__utils__async__priority_stream_iterator._StablePriorityQueue = src__utils__async__priority_stream_iterator._StablePriorityQueue$();
  dart.addTypeTests(src__utils__async__priority_stream_iterator._StablePriorityQueue, _is__StablePriorityQueue_default);
  src__utils__async__priority_stream_iterator._defaultComparator = function(T) {
    return dart.fn((a, b) => a[$compareTo](b), dart.fnType(core.int, [T, T]));
  };
  dart.fn(src__utils__async__priority_stream_iterator._defaultComparator, VoidToFn());
  const _comparison = Symbol('_comparison');
  const _ordinalByElement = Symbol('_ordinalByElement');
  const _nextOrdinal = Symbol('_nextOrdinal');
  const _renumerate = Symbol('_renumerate');
  const _compareOrder = Symbol('_compareOrder');
  const _is__OrderedComparator_default = Symbol('_is__OrderedComparator_default');
  src__utils__async__priority_stream_iterator._OrderedComparator$ = dart.generic(T => {
    let LinkedMapOfT$int = () => (LinkedMapOfT$int = dart.constFn(_js_helper.LinkedMap$(T, core.int)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let TAndTToint = () => (TAndTToint = dart.constFn(dart.fnType(core.int, [T, T])))();
    let MapOfT$int = () => (MapOfT$int = dart.constFn(core.Map$(T, core.int)))();
    class _OrderedComparator extends core.Object {
      add(el) {
        T._check(el);
        this[_ordinalByElement][$_set](el, (() => {
          let x = this[_nextOrdinal];
          this[_nextOrdinal] = dart.notNull(x) + 1;
          return x;
        })());
      }
      addAll(elements) {
        IterableOfT()._check(elements);
        return elements[$forEach](dart.bind(this, 'add'));
      }
      clear() {
        this[_ordinalByElement][$clear]();
        this[_nextOrdinal] = 0;
      }
      remove(el) {
        T._check(el);
        this[_ordinalByElement][$remove](el);
        this[_renumerate]();
      }
      call(a, b) {
        T._check(a);
        T._check(b);
        let result = this[_comparison](a, b);
        return result !== 0 ? result : this[_compareOrder](a, b);
      }
      [_compareOrder](a, b) {
        T._check(a);
        T._check(b);
        if (!dart.test(this[_ordinalByElement][$containsKey](a)) || !dart.test(this[_ordinalByElement][$containsKey](b))) {
          dart.throw(new core.StateError.new("Comparing elements that weren't registered with the comparator."));
        }
        return dart.notNull(this[_ordinalByElement][$_get](a)) - dart.notNull(this[_ordinalByElement][$_get](b));
      }
      [_renumerate]() {
        if (dart.test(this[_ordinalByElement][$isEmpty])) {
          this[_nextOrdinal] = 0;
        }
        if (dart.notNull(this[_nextOrdinal]) > dart.notNull(this[_ordinalByElement][$length]) + 1000000) {
          let orderedElements = this[_ordinalByElement][$keys][$toList]({growable: false});
          orderedElements[$sort](dart.bind(this, _compareOrder));
          this.clear();
          this.addAll(orderedElements);
        }
      }
    }
    _OrderedComparator.prototype[dart._runtimeType] = _OrderedComparator;
    (_OrderedComparator.new = function callableClass(comparison) {
      if (typeof this !== "function") {
        function self(...args) {
          return self.call.apply(self, args);
        }
        self.__proto__ = this.__proto__;
        callableClass.call(self, comparison);
        return self;
      }
      this[_ordinalByElement] = new (LinkedMapOfT$int()).new();
      this[_nextOrdinal] = 0;
      this[_comparison] = comparison;
    }).prototype = _OrderedComparator.prototype;
    dart.addTypeTests(_OrderedComparator);
    _OrderedComparator.prototype[_is__OrderedComparator_default] = true;
    _OrderedComparator[dart.implements] = () => [core.Function];
    dart.setMethodSignature(_OrderedComparator, () => ({
      __proto__: dart.getMethods(_OrderedComparator.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(dart.void, [core.Object]),
      call: dart.fnType(core.int, [core.Object, core.Object]),
      [_compareOrder]: dart.fnType(core.int, [core.Object, core.Object]),
      [_renumerate]: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_OrderedComparator, () => ({
      __proto__: dart.getFields(_OrderedComparator.__proto__),
      [_comparison]: dart.finalFieldType(TAndTToint()),
      [_ordinalByElement]: dart.finalFieldType(MapOfT$int()),
      [_nextOrdinal]: dart.fieldType(core.int)
    }));
    return _OrderedComparator;
  });
  src__utils__async__priority_stream_iterator._OrderedComparator = src__utils__async__priority_stream_iterator._OrderedComparator$();
  dart.defineLazy(src__utils__async__priority_stream_iterator._OrderedComparator, {
    /*src__utils__async__priority_stream_iterator._OrderedComparator.RENUMERATE_THRESHOLD*/get RENUMERATE_THRESHOLD() {
      return 1000000;
    }
  });
  dart.addTypeTests(src__utils__async__priority_stream_iterator._OrderedComparator, _is__OrderedComparator_default);
  dart.trackLibraries("packages/angular_components/src/utils/async/priority_stream_iterator.ddc", {
    "package:angular_components/src/utils/async/priority_stream_iterator.dart": src__utils__async__priority_stream_iterator
  }, '{"version":3,"sourceRoot":"","sources":["priority_stream_iterator.dart"],"names":[],"mappings":"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","file":"priority_stream_iterator.ddc.js"}');
  // Exports:
  return {
    src__utils__async__priority_stream_iterator: src__utils__async__priority_stream_iterator
  };
});

//# sourceMappingURL=priority_stream_iterator.ddc.js.map
