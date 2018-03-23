define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__internal__copy_on_write_set = Object.create(_root);
  const $any = dartx.any;
  const $cast = dartx.cast;
  const $contains = dartx.contains;
  const $elementAt = dartx.elementAt;
  const $every = dartx.every;
  const $expand = dartx.expand;
  const $firstWhere = dartx.firstWhere;
  const $fold = dartx.fold;
  const $followedBy = dartx.followedBy;
  const $forEach = dartx.forEach;
  const $join = dartx.join;
  const $lastWhere = dartx.lastWhere;
  const $map = dartx.map;
  const $reduce = dartx.reduce;
  const $retype = dartx.retype;
  const $singleWhere = dartx.singleWhere;
  const $skip = dartx.skip;
  const $skipWhile = dartx.skipWhile;
  const $take = dartx.take;
  const $takeWhile = dartx.takeWhile;
  const $toList = dartx.toList;
  const $toSet = dartx.toSet;
  const $where = dartx.where;
  const $whereType = dartx.whereType;
  const $toString = dartx.toString;
  const $length = dartx.length;
  const $first = dartx.first;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $iterator = dartx.iterator;
  const $last = dartx.last;
  const $single = dartx.single;
  let SetOfObject = () => (SetOfObject = dart.constFn(core.Set$(core.Object)))();
  let IterableOfObject = () => (IterableOfObject = dart.constFn(core.Iterable$(core.Object)))();
  src__internal__copy_on_write_set._SetFactory$ = dart.generic(E => {
    const _SetFactory = dart.typedef('_SetFactory', () => dart.fnType(core.Set$(E), []));
    return _SetFactory;
  });
  src__internal__copy_on_write_set._SetFactory = src__internal__copy_on_write_set._SetFactory$();
  const _set = Symbol('_set');
  const _setFactory = Symbol('_setFactory');
  const _copyBeforeWrite = Symbol('_copyBeforeWrite');
  const _maybeCopyBeforeWrite = Symbol('_maybeCopyBeforeWrite');
  const _is_CopyOnWriteSet_default = Symbol('_is_CopyOnWriteSet_default');
  src__internal__copy_on_write_set.CopyOnWriteSet$ = dart.generic(E => {
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    let ETovoid = () => (ETovoid = dart.constFn(dart.fnType(dart.void, [E])))();
    let VoidToSetOfE = () => (VoidToSetOfE = dart.constFn(dart.fnType(SetOfE(), [])))();
    class CopyOnWriteSet extends core.Object {
      get length() {
        return this[_set].length;
      }
      lookup(object) {
        return this[_set].lookup(object);
      }
      intersection(other) {
        return this[_set].intersection(other);
      }
      union(other) {
        SetOfE()._check(other);
        return this[_set].union(other);
      }
      difference(other) {
        return this[_set].difference(other);
      }
      containsAll(other) {
        return this[_set].containsAll(other);
      }
      any(test) {
        return this[_set].any(test);
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new('cast'));
      }
      contains(element) {
        return this[_set].contains(element);
      }
      elementAt(index) {
        return this[_set].elementAt(index);
      }
      every(test) {
        return this[_set].every(test);
      }
      expand(T, f) {
        return this[_set].expand(T, f);
      }
      get first() {
        return this[_set].first;
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set].firstWhere(test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_set].fold(T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        dart.throw(new core.UnimplementedError.new('followedBy'));
      }
      forEach(f) {
        return this[_set].forEach(f);
      }
      get isEmpty() {
        return this[_set].isEmpty;
      }
      get isNotEmpty() {
        return this[_set].isNotEmpty;
      }
      get iterator() {
        return this[_set].iterator;
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_set].join(separator);
      }
      get last() {
        return this[_set].last;
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set].lastWhere(test, {orElse: orElse});
      }
      map(T, f) {
        return this[_set].map(T, f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_set].reduce(combine);
      }
      retype(T) {
        dart.throw(new core.UnimplementedError.new('retype'));
      }
      get single() {
        return this[_set].single;
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        if (orElse != null) dart.throw(new core.UnimplementedError.new('singleWhere:orElse'));
        return this[_set].singleWhere(test);
      }
      skip(count) {
        return this[_set].skip(count);
      }
      skipWhile(test) {
        return this[_set].skipWhile(test);
      }
      take(count) {
        return this[_set].take(count);
      }
      takeWhile(test) {
        return this[_set].takeWhile(test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_set].toList({growable: growable});
      }
      toSet() {
        return this[_set].toSet();
      }
      where(test) {
        return this[_set].where(test);
      }
      whereType(T) {
        dart.throw(new core.UnimplementedError.new('whereType'));
      }
      add(value) {
        E._check(value);
        this[_maybeCopyBeforeWrite]();
        return this[_set].add(value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite]();
        this[_set].addAll(iterable);
      }
      clear() {
        this[_maybeCopyBeforeWrite]();
        this[_set].clear();
      }
      remove(value) {
        this[_maybeCopyBeforeWrite]();
        return this[_set].remove(value);
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite]();
        this[_set].removeWhere(test);
      }
      retainWhere(test) {
        this[_maybeCopyBeforeWrite]();
        this[_set].retainWhere(test);
      }
      removeAll(elements) {
        this[_maybeCopyBeforeWrite]();
        this[_set].removeAll(elements);
      }
      retainAll(elements) {
        this[_maybeCopyBeforeWrite]();
        this[_set].retainAll(elements);
      }
      toString() {
        return dart.toString(this[_set]);
      }
      [_maybeCopyBeforeWrite]() {
        if (!dart.test(this[_copyBeforeWrite])) return;
        this[_copyBeforeWrite] = false;
        this[_set] = this[_setFactory] != null ? (() => {
          let _ = this[_setFactory]();
          _.addAll(this[_set]);
          return _;
        })() : SetOfE().from(this[_set]);
      }
    }
    (CopyOnWriteSet.new = function(set, setFactory) {
      if (setFactory === void 0) setFactory = null;
      this[_set] = set;
      this[_setFactory] = setFactory;
      this[_copyBeforeWrite] = true;
    }).prototype = CopyOnWriteSet.prototype;
    dart.addTypeTests(CopyOnWriteSet);
    CopyOnWriteSet.prototype[_is_CopyOnWriteSet_default] = true;
    CopyOnWriteSet[dart.implements] = () => [SetOfE()];
    dart.setMethodSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getMethods(CopyOnWriteSet.__proto__),
      lookup: dart.fnType(E, [core.Object]),
      intersection: dart.fnType(core.Set$(E), [SetOfObject()]),
      union: dart.fnType(core.Set$(E), [core.Object]),
      difference: dart.fnType(core.Set$(E), [SetOfObject()]),
      containsAll: dart.fnType(core.bool, [IterableOfObject()]),
      any: dart.fnType(core.bool, [ETobool()]),
      [$any]: dart.fnType(core.bool, [ETobool()]),
      cast: dart.gFnType(T => [core.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []]),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int]),
      every: dart.fnType(core.bool, [ETobool()]),
      [$every]: dart.fnType(core.bool, [ETobool()]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      firstWhere: dart.fnType(E, [ETobool()], {orElse: core.Object}),
      [$firstWhere]: dart.fnType(E, [ETobool()], {orElse: core.Object}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      followedBy: dart.fnType(core.Iterable$(E), [core.Object]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [core.Object]),
      forEach: dart.fnType(dart.void, [ETovoid()]),
      [$forEach]: dart.fnType(dart.void, [ETovoid()]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      lastWhere: dart.fnType(E, [ETobool()], {orElse: core.Object}),
      [$lastWhere]: dart.fnType(E, [ETobool()], {orElse: core.Object}),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      reduce: dart.fnType(E, [core.Object]),
      [$reduce]: dart.fnType(E, [core.Object]),
      retype: dart.gFnType(T => [core.Set$(T), []]),
      [$retype]: dart.gFnType(T => [core.Set$(T), []]),
      singleWhere: dart.fnType(E, [ETobool()], {orElse: core.Object}),
      [$singleWhere]: dart.fnType(E, [ETobool()], {orElse: core.Object}),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [ETobool()]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [ETobool()]),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [ETobool()]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [ETobool()]),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      where: dart.fnType(core.Iterable$(E), [ETobool()]),
      [$where]: dart.fnType(core.Iterable$(E), [ETobool()]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []]),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [core.Object]),
      removeWhere: dart.fnType(dart.void, [ETobool()]),
      retainWhere: dart.fnType(dart.void, [ETobool()]),
      removeAll: dart.fnType(dart.void, [IterableOfObject()]),
      retainAll: dart.fnType(dart.void, [IterableOfObject()]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      [_maybeCopyBeforeWrite]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getGetters(CopyOnWriteSet.__proto__),
      length: dart.fnType(core.int, []),
      [$length]: dart.fnType(core.int, []),
      first: dart.fnType(E, []),
      [$first]: dart.fnType(E, []),
      isEmpty: dart.fnType(core.bool, []),
      [$isEmpty]: dart.fnType(core.bool, []),
      isNotEmpty: dart.fnType(core.bool, []),
      [$isNotEmpty]: dart.fnType(core.bool, []),
      iterator: dart.fnType(core.Iterator$(E), []),
      [$iterator]: dart.fnType(core.Iterator$(E), []),
      last: dart.fnType(E, []),
      [$last]: dart.fnType(E, []),
      single: dart.fnType(E, []),
      [$single]: dart.fnType(E, [])
    }));
    dart.setFieldSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getFields(CopyOnWriteSet.__proto__),
      [_setFactory]: dart.finalFieldType(VoidToSetOfE()),
      [_copyBeforeWrite]: dart.fieldType(core.bool),
      [_set]: dart.fieldType(SetOfE())
    }));
    dart.defineExtensionMethods(CopyOnWriteSet, [
      'any',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'join',
      'lastWhere',
      'map',
      'reduce',
      'retype',
      'singleWhere',
      'skip',
      'skipWhile',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      'toString'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteSet, [
      'length',
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'single'
    ]);
    return CopyOnWriteSet;
  });
  src__internal__copy_on_write_set.CopyOnWriteSet = src__internal__copy_on_write_set.CopyOnWriteSet$();
  dart.addTypeTests(src__internal__copy_on_write_set.CopyOnWriteSet, _is_CopyOnWriteSet_default);
  dart.trackLibraries("packages/built_collection/src/internal/copy_on_write_set.ddc", {
    "package:built_collection/src/internal/copy_on_write_set.dart": src__internal__copy_on_write_set
  }, '{"version":3,"sourceRoot":"","sources":["copy_on_write_set.dart"],"names":[],"mappings":"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","file":"copy_on_write_set.ddc.js"}');
  // Exports:
  return {
    src__internal__copy_on_write_set: src__internal__copy_on_write_set
  };
});

//# sourceMappingURL=copy_on_write_set.ddc.js.map
