define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__internal__copy_on_write_list = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $any = dartx.any;
  const $asMap = dartx.asMap;
  const $contains = dartx.contains;
  const $elementAt = dartx.elementAt;
  const $every = dartx.every;
  const $expand = dartx.expand;
  const $first = dartx.first;
  const $firstWhere = dartx.firstWhere;
  const $fold = dartx.fold;
  const $forEach = dartx.forEach;
  const $getRange = dartx.getRange;
  const $indexOf = dartx.indexOf;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $iterator = dartx.iterator;
  const $join = dartx.join;
  const $last = dartx.last;
  const $lastIndexOf = dartx.lastIndexOf;
  const $lastWhere = dartx.lastWhere;
  const $map = dartx.map;
  const $reduce = dartx.reduce;
  const $reversed = dartx.reversed;
  const $single = dartx.single;
  const $singleWhere = dartx.singleWhere;
  const $skip = dartx.skip;
  const $skipWhile = dartx.skipWhile;
  const $sublist = dartx.sublist;
  const $take = dartx.take;
  const $takeWhile = dartx.takeWhile;
  const $toList = dartx.toList;
  const $toSet = dartx.toSet;
  const $where = dartx.where;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  const $sort = dartx.sort;
  const $shuffle = dartx.shuffle;
  const $clear = dartx.clear;
  const $insert = dartx.insert;
  const $insertAll = dartx.insertAll;
  const $setAll = dartx.setAll;
  const $remove = dartx.remove;
  const $removeAt = dartx.removeAt;
  const $removeLast = dartx.removeLast;
  const $removeWhere = dartx.removeWhere;
  const $retainWhere = dartx.retainWhere;
  const $setRange = dartx.setRange;
  const $removeRange = dartx.removeRange;
  const $fillRange = dartx.fillRange;
  const $replaceRange = dartx.replaceRange;
  const $toString = dartx.toString;
  const $plus = dartx['+'];
  const $cast = dartx.cast;
  const $followedBy = dartx.followedBy;
  const $indexWhere = dartx.indexWhere;
  const $lastIndexWhere = dartx.lastIndexWhere;
  const $retype = dartx.retype;
  const $whereType = dartx.whereType;
  const _list = Symbol('_list');
  const _growable = Symbol('_growable');
  const _copyBeforeWrite = Symbol('_copyBeforeWrite');
  const _maybeCopyBeforeWrite = Symbol('_maybeCopyBeforeWrite');
  const _is_CopyOnWriteList_default = Symbol('_is_CopyOnWriteList_default');
  src__internal__copy_on_write_list.CopyOnWriteList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    let ETovoid = () => (ETovoid = dart.constFn(dart.fnType(dart.void, [E])))();
    let EAndEToint = () => (EAndEToint = dart.constFn(dart.fnType(core.int, [E, E])))();
    class CopyOnWriteList extends core.Object {
      get length() {
        return this[_list][$length];
      }
      _get(index) {
        return this[_list][$_get](index);
      }
      ['+'](other) {
        ListOfE()._check(other);
        dart.throw(new core.UnimplementedError.new('+'));
      }
      any(test) {
        return this[_list][$any](test);
      }
      asMap() {
        return this[_list][$asMap]();
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new('cast'));
      }
      contains(element) {
        return this[_list][$contains](element);
      }
      elementAt(index) {
        return this[_list][$elementAt](index);
      }
      every(test) {
        return this[_list][$every](test);
      }
      expand(T, f) {
        return this[_list][$expand](T, f);
      }
      get first() {
        return this[_list][$first];
      }
      set first(element) {
        E._check(element);
        if (dart.test(this.isEmpty)) dart.throw(core.RangeError.index(0, this));
        this._set(0, element);
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_list][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        dart.throw(new core.UnimplementedError.new('followedBy'));
      }
      forEach(f) {
        return this[_list][$forEach](f);
      }
      getRange(start, end) {
        return this[_list][$getRange](start, end);
      }
      indexOf(element, start) {
        E._check(element);
        if (start === void 0) start = 0;
        return this[_list][$indexOf](element, start);
      }
      indexWhere(test, start) {
        if (start === void 0) start = 0;
        dart.throw(new core.UnimplementedError.new('indexWhere'));
      }
      get isEmpty() {
        return this[_list][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list][$isNotEmpty];
      }
      get iterator() {
        return this[_list][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_list][$join](separator);
      }
      get last() {
        return this[_list][$last];
      }
      set last(element) {
        E._check(element);
        if (dart.test(this.isEmpty)) dart.throw(core.RangeError.index(0, this));
        this._set(dart.notNull(this.length) - 1, element);
      }
      lastIndexOf(element, start) {
        E._check(element);
        if (start === void 0) start = null;
        return this[_list][$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start) {
        if (start === void 0) start = null;
        dart.throw(new core.UnimplementedError.new('lastIndexWhere'));
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list][$lastWhere](test, {orElse: orElse});
      }
      map(T, f) {
        return this[_list][$map](T, f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_list][$reduce](combine);
      }
      retype(T) {
        dart.throw(new core.UnimplementedError.new('retype'));
      }
      get reversed() {
        return this[_list][$reversed];
      }
      get single() {
        return this[_list][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        if (orElse != null) dart.throw(new core.UnimplementedError.new('singleWhere:orElse'));
        return this[_list][$singleWhere](test);
      }
      skip(count) {
        return this[_list][$skip](count);
      }
      skipWhile(test) {
        return this[_list][$skipWhile](test);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        return this[_list][$sublist](start, end);
      }
      take(count) {
        return this[_list][$take](count);
      }
      takeWhile(test) {
        return this[_list][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_list][$toList]({growable: growable});
      }
      toSet() {
        return this[_list][$toSet]();
      }
      where(test) {
        return this[_list][$where](test);
      }
      whereType(T) {
        dart.throw(new core.UnimplementedError.new('whereType'));
      }
      set length(length) {
        this[_maybeCopyBeforeWrite]();
        this[_list][$length] = length;
      }
      _set(index, element) {
        E._check(element);
        this[_maybeCopyBeforeWrite]();
        this[_list][$_set](index, element);
        return element;
      }
      add(value) {
        E._check(value);
        this[_maybeCopyBeforeWrite]();
        this[_list][$add](value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite]();
        this[_list][$addAll](iterable);
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        this[_maybeCopyBeforeWrite]();
        this[_list][$sort](compare);
      }
      shuffle(random) {
        if (random === void 0) random = null;
        this[_maybeCopyBeforeWrite]();
        this[_list][$shuffle](random);
      }
      clear() {
        this[_maybeCopyBeforeWrite]();
        this[_list][$clear]();
      }
      insert(index, element) {
        E._check(element);
        this[_maybeCopyBeforeWrite]();
        this[_list][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite]();
        this[_list][$insertAll](index, iterable);
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite]();
        this[_list][$setAll](index, iterable);
      }
      remove(value) {
        this[_maybeCopyBeforeWrite]();
        return this[_list][$remove](value);
      }
      removeAt(index) {
        this[_maybeCopyBeforeWrite]();
        return this[_list][$removeAt](index);
      }
      removeLast() {
        this[_maybeCopyBeforeWrite]();
        return this[_list][$removeLast]();
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite]();
        this[_list][$removeWhere](test);
      }
      retainWhere(test) {
        this[_maybeCopyBeforeWrite]();
        this[_list][$retainWhere](test);
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        this[_maybeCopyBeforeWrite]();
        this[_list][$setRange](start, end, iterable, skipCount);
      }
      removeRange(start, end) {
        this[_maybeCopyBeforeWrite]();
        this[_list][$removeRange](start, end);
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        E._check(fillValue);
        this[_maybeCopyBeforeWrite]();
        this[_list][$fillRange](start, end, fillValue);
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite]();
        this[_list][$replaceRange](start, end, iterable);
      }
      toString() {
        return dart.toString(this[_list]);
      }
      [_maybeCopyBeforeWrite]() {
        if (!dart.test(this[_copyBeforeWrite])) return;
        this[_copyBeforeWrite] = false;
        this[_list] = ListOfE().from(this[_list], {growable: this[_growable]});
      }
    }
    (CopyOnWriteList.new = function(list, growable) {
      this[_list] = list;
      this[_growable] = growable;
      this[_copyBeforeWrite] = true;
    }).prototype = CopyOnWriteList.prototype;
    CopyOnWriteList.prototype[dart.isList] = true;
    dart.addTypeTests(CopyOnWriteList);
    CopyOnWriteList.prototype[_is_CopyOnWriteList_default] = true;
    CopyOnWriteList[dart.implements] = () => [ListOfE()];
    dart.setMethodSignature(CopyOnWriteList, () => ({
      __proto__: dart.getMethods(CopyOnWriteList.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      '+': dart.fnType(core.List$(E), [core.Object]),
      [$plus]: dart.fnType(core.List$(E), [core.Object]),
      any: dart.fnType(core.bool, [ETobool()]),
      [$any]: dart.fnType(core.bool, [ETobool()]),
      asMap: dart.fnType(core.Map$(core.int, E), []),
      [$asMap]: dart.fnType(core.Map$(core.int, E), []),
      cast: dart.gFnType(T => [core.List$(T), []]),
      [$cast]: dart.gFnType(T => [core.List$(T), []]),
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
      getRange: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      [$getRange]: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      indexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$indexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      indexWhere: dart.fnType(core.int, [ETobool()], [core.int]),
      [$indexWhere]: dart.fnType(core.int, [ETobool()], [core.int]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      lastIndexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$lastIndexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      lastIndexWhere: dart.fnType(core.int, [ETobool()], [core.int]),
      [$lastIndexWhere]: dart.fnType(core.int, [ETobool()], [core.int]),
      lastWhere: dart.fnType(E, [ETobool()], {orElse: core.Object}),
      [$lastWhere]: dart.fnType(E, [ETobool()], {orElse: core.Object}),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      reduce: dart.fnType(E, [core.Object]),
      [$reduce]: dart.fnType(E, [core.Object]),
      retype: dart.gFnType(T => [core.List$(T), []]),
      [$retype]: dart.gFnType(T => [core.List$(T), []]),
      singleWhere: dart.fnType(E, [ETobool()], {orElse: core.Object}),
      [$singleWhere]: dart.fnType(E, [ETobool()], {orElse: core.Object}),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [ETobool()]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [ETobool()]),
      sublist: dart.fnType(core.List$(E), [core.int], [core.int]),
      [$sublist]: dart.fnType(core.List$(E), [core.int], [core.int]),
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
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      sort: dart.fnType(dart.void, [], [EAndEToint()]),
      [$sort]: dart.fnType(dart.void, [], [EAndEToint()]),
      shuffle: dart.fnType(dart.void, [], [math.Random]),
      [$shuffle]: dart.fnType(dart.void, [], [math.Random]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      setAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$setAll]: dart.fnType(dart.void, [core.int, core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      [$remove]: dart.fnType(core.bool, [core.Object]),
      removeAt: dart.fnType(E, [core.int]),
      [$removeAt]: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      [$removeLast]: dart.fnType(E, []),
      removeWhere: dart.fnType(dart.void, [ETobool()]),
      [$removeWhere]: dart.fnType(dart.void, [ETobool()]),
      retainWhere: dart.fnType(dart.void, [ETobool()]),
      [$retainWhere]: dart.fnType(dart.void, [ETobool()]),
      setRange: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      fillRange: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      [$fillRange]: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      [_maybeCopyBeforeWrite]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteList, () => ({
      __proto__: dart.getGetters(CopyOnWriteList.__proto__),
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
      reversed: dart.fnType(core.Iterable$(E), []),
      [$reversed]: dart.fnType(core.Iterable$(E), []),
      single: dart.fnType(E, []),
      [$single]: dart.fnType(E, [])
    }));
    dart.setSetterSignature(CopyOnWriteList, () => ({
      __proto__: dart.getSetters(CopyOnWriteList.__proto__),
      first: dart.fnType(dart.void, [E]),
      [$first]: dart.fnType(dart.void, [E]),
      last: dart.fnType(dart.void, [E]),
      [$last]: dart.fnType(dart.void, [E]),
      length: dart.fnType(dart.void, [core.int]),
      [$length]: dart.fnType(dart.void, [core.int])
    }));
    dart.setFieldSignature(CopyOnWriteList, () => ({
      __proto__: dart.getFields(CopyOnWriteList.__proto__),
      [_copyBeforeWrite]: dart.fieldType(core.bool),
      [_growable]: dart.fieldType(core.bool),
      [_list]: dart.fieldType(ListOfE())
    }));
    dart.defineExtensionMethods(CopyOnWriteList, [
      '_get',
      '+',
      'any',
      'asMap',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'getRange',
      'indexOf',
      'indexWhere',
      'join',
      'lastIndexOf',
      'lastIndexWhere',
      'lastWhere',
      'map',
      'reduce',
      'retype',
      'singleWhere',
      'skip',
      'skipWhile',
      'sublist',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      '_set',
      'add',
      'addAll',
      'sort',
      'shuffle',
      'clear',
      'insert',
      'insertAll',
      'setAll',
      'remove',
      'removeAt',
      'removeLast',
      'removeWhere',
      'retainWhere',
      'setRange',
      'removeRange',
      'fillRange',
      'replaceRange',
      'toString'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteList, [
      'length',
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'reversed',
      'single'
    ]);
    return CopyOnWriteList;
  });
  src__internal__copy_on_write_list.CopyOnWriteList = src__internal__copy_on_write_list.CopyOnWriteList$();
  dart.addTypeTests(src__internal__copy_on_write_list.CopyOnWriteList, _is_CopyOnWriteList_default);
  dart.trackLibraries("packages/built_collection/src/internal/copy_on_write_list.ddc", {
    "package:built_collection/src/internal/copy_on_write_list.dart": src__internal__copy_on_write_list
  }, '{"version":3,"sourceRoot":"","sources":["copy_on_write_list.dart"],"names":[],"mappings":"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","file":"copy_on_write_list.ddc.js"}');
  // Exports:
  return {
    src__internal__copy_on_write_list: src__internal__copy_on_write_list
  };
});

//# sourceMappingURL=copy_on_write_list.ddc.js.map
