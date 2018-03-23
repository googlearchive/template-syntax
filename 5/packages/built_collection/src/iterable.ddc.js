define(['dart_sdk', 'packages/quiver/core', 'packages/collection/src/empty_unmodifiable_set', 'packages/built_collection/src/internal/copy_on_write_set', 'packages/built_collection/src/internal/copy_on_write_list'], function(dart_sdk, core, empty_unmodifiable_set, copy_on_write_set, copy_on_write_list) {
  'use strict';
  const core$ = dart_sdk.core;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$0 = core.core;
  const src__unmodifiable_wrappers = empty_unmodifiable_set.src__unmodifiable_wrappers;
  const src__internal__copy_on_write_set = copy_on_write_set.src__internal__copy_on_write_set;
  const src__internal__copy_on_write_list = copy_on_write_list.src__internal__copy_on_write_list;
  const _root = Object.create(null);
  const src__iterable = Object.create(_root);
  const src__set = Object.create(_root);
  const src__list = Object.create(_root);
  const $toList = dartx.toList;
  const $hashCode = dartx.hashCode;
  const $sort = dartx.sort;
  const $_equals = dartx._equals;
  const $toString = dartx.toString;
  const $cast = dartx.cast;
  const $retype = dartx.retype;
  const $followedBy = dartx.followedBy;
  const $whereType = dartx.whereType;
  const $map = dartx.map;
  const $where = dartx.where;
  const $expand = dartx.expand;
  const $contains = dartx.contains;
  const $forEach = dartx.forEach;
  const $reduce = dartx.reduce;
  const $fold = dartx.fold;
  const $every = dartx.every;
  const $join = dartx.join;
  const $any = dartx.any;
  const $toSet = dartx.toSet;
  const $take = dartx.take;
  const $takeWhile = dartx.takeWhile;
  const $skip = dartx.skip;
  const $skipWhile = dartx.skipWhile;
  const $firstWhere = dartx.firstWhere;
  const $lastWhere = dartx.lastWhere;
  const $singleWhere = dartx.singleWhere;
  const $elementAt = dartx.elementAt;
  const $length = dartx.length;
  const $iterator = dartx.iterator;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $last = dartx.last;
  const $single = dartx.single;
  const $_get = dartx._get;
  const $reversed = dartx.reversed;
  const $indexOf = dartx.indexOf;
  const $lastIndexOf = dartx.lastIndexOf;
  const $sublist = dartx.sublist;
  const $getRange = dartx.getRange;
  const $asMap = dartx.asMap;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $addAll = dartx.addAll;
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
  let IterableOfObject = () => (IterableOfObject = dart.constFn(core$.Iterable$(core$.Object)))();
  let BuiltSetOfObject = () => (BuiltSetOfObject = dart.constFn(src__set.BuiltSet$(core$.Object)))();
  const _is_BuiltIterable_default = Symbol('_is_BuiltIterable_default');
  src__iterable.BuiltIterable$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    class BuiltIterable extends core$.Object {
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
    }
    (BuiltIterable.new = function() {
    }).prototype = BuiltIterable.prototype;
    BuiltIterable.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltIterable);
    BuiltIterable.prototype[_is_BuiltIterable_default] = true;
    BuiltIterable[dart.implements] = () => [IterableOfE()];
    return BuiltIterable;
  });
  src__iterable.BuiltIterable = src__iterable.BuiltIterable$();
  dart.addTypeTests(src__iterable.BuiltIterable, _is_BuiltIterable_default);
  const _overridenHashCode = Symbol('_overridenHashCode');
  const _set = Symbol('_set');
  const _setFactory = Symbol('_setFactory');
  const _hashCode = Symbol('_hashCode');
  let const$;
  const _is_BuiltSet_default = Symbol('_is_BuiltSet_default');
  src__set.BuiltSet$ = dart.generic(E => {
    let BuiltSetOfE = () => (BuiltSetOfE = dart.constFn(src__set.BuiltSet$(E)))();
    let _BuiltSetOfE = () => (_BuiltSetOfE = dart.constFn(src__set._BuiltSet$(E)))();
    let SetBuilderOfE = () => (SetBuilderOfE = dart.constFn(src__set.SetBuilder$(E)))();
    let BuiltListOfE = () => (BuiltListOfE = dart.constFn(src__list.BuiltList$(E)))();
    let EToint = () => (EToint = dart.constFn(dart.fnType(core$.int, [E])))();
    let UnmodifiableSetViewOfE = () => (UnmodifiableSetViewOfE = dart.constFn(src__unmodifiable_wrappers.UnmodifiableSetView$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    let CopyOnWriteSetOfE = () => (CopyOnWriteSetOfE = dart.constFn(src__internal__copy_on_write_set.CopyOnWriteSet$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let BuiltIterableOfE = () => (BuiltIterableOfE = dart.constFn(src__iterable.BuiltIterable$(E)))();
    let SetBuilderOfETodynamic = () => (SetBuilderOfETodynamic = dart.constFn(dart.fnType(dart.dynamic, [SetBuilderOfE()])))();
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core$.bool, [E])))();
    let ETovoid = () => (ETovoid = dart.constFn(dart.fnType(dart.void, [E])))();
    let SetOfE = () => (SetOfE = dart.constFn(core$.Set$(E)))();
    let VoidToSetOfE = () => (VoidToSetOfE = dart.constFn(dart.fnType(SetOfE(), [])))();
    class BuiltSet extends core$.Object {
      static new(iterable) {
        if (iterable === void 0) iterable = const$ || (const$ = dart.constList([], dart.dynamic));
        if (src__set._BuiltSet.is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(E)))) {
          return BuiltSetOfE().as(iterable);
        } else {
          return new (_BuiltSetOfE()).copyAndCheck(iterable);
        }
      }
      static build(updates) {
        return (() => {
          let _ = SetBuilderOfE().new();
          _.update(updates);
          return _;
        })().build();
      }
      toBuilder() {
        return new (SetBuilderOfE())._fromBuiltSet(_BuiltSetOfE()._check(this));
      }
      rebuild(updates) {
        return (() => {
          let _ = this.toBuilder();
          _.update(updates);
          return _;
        })().build();
      }
      toBuiltList() {
        return BuiltListOfE().new(this);
      }
      toBuiltSet() {
        return this;
      }
      get hashCode() {
        if (this[_hashCode] == null) {
          this[_hashCode] = core$0.hashObjects((() => {
            let _ = this[_set].map(core$.int, dart.fn(e => dart.hashCode(e), EToint()))[$toList]({growable: false});
            _[$sort]();
            return _;
          })());
        }
        return this[_hashCode];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__set.BuiltSet.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        return this.containsAll(IterableOfObject()._check(other));
      }
      toString() {
        return dart.toString(this[_set]);
      }
      asSet() {
        return new (UnmodifiableSetViewOfE()).new(this[_set]);
      }
      get length() {
        return this[_set].length;
      }
      containsAll(other) {
        return this[_set].containsAll(other);
      }
      difference(other) {
        return new (_BuiltSetOfE()).withSafeSet(this[_setFactory], this[_set].difference(other[_set]));
      }
      intersection(other) {
        return new (_BuiltSetOfE()).withSafeSet(this[_setFactory], this[_set].intersection(other[_set]));
      }
      lookup(object) {
        return this[_set].lookup(object);
      }
      union(other) {
        BuiltSetOfE()._check(other);
        return new (_BuiltSetOfE()).withSafeSet(this[_setFactory], this[_set].union(other[_set]));
      }
      get iterator() {
        return this[_set].iterator;
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
      cast(T) {
        dart.throw(new core$.UnimplementedError.new('cast'));
      }
      retype(T) {
        dart.throw(new core$.UnimplementedError.new('retype'));
      }
      followedBy(other) {
        IterableOfE()._check(other);
        dart.throw(new core$.UnimplementedError.new('followedBy'));
      }
      whereType(T) {
        dart.throw(new core$.UnimplementedError.new('whereType'));
      }
      map(T, f) {
        return this[_set].map(T, f);
      }
      where(test) {
        return this[_set].where(test);
      }
      expand(T, f) {
        return this[_set].expand(T, f);
      }
      contains(element) {
        return this[_set].contains(element);
      }
      forEach(f) {
        return this[_set].forEach(f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_set].reduce(combine);
      }
      fold(T, initialValue, combine) {
        return this[_set].fold(T, initialValue, combine);
      }
      every(test) {
        return this[_set].every(test);
      }
      join(separator) {
        if (separator === void 0) separator = '';
        return this[_set].join(separator);
      }
      any(test) {
        return this[_set].any(test);
      }
      toSet() {
        return new (CopyOnWriteSetOfE()).new(this[_set], this[_setFactory]);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_set].toList({growable: growable});
      }
      get isEmpty() {
        return this[_set].isEmpty;
      }
      get isNotEmpty() {
        return this[_set].isNotEmpty;
      }
      take(n) {
        return this[_set].take(n);
      }
      takeWhile(test) {
        return this[_set].takeWhile(test);
      }
      skip(n) {
        return this[_set].skip(n);
      }
      skipWhile(test) {
        return this[_set].skipWhile(test);
      }
      get first() {
        return this[_set].first;
      }
      get last() {
        return this[_set].last;
      }
      get single() {
        return this[_set].single;
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set].firstWhere(test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set].lastWhere(test, {orElse: orElse});
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        if (orElse != null) dart.throw(new core$.UnimplementedError.new('singleWhere:orElse'));
        return this[_set].singleWhere(test);
      }
      elementAt(index) {
        return this[_set].elementAt(index);
      }
    }
    (BuiltSet.__ = function(setFactory, set) {
      this[_hashCode] = null;
      this[_setFactory] = setFactory;
      this[_set] = set;
      if (dart.equals(dart.wrapType(E), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new('explicit element type required, for example "new BuiltSet<int>"'));
      }
    }).prototype = BuiltSet.prototype;
    BuiltSet.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltSet);
    BuiltSet.prototype[_is_BuiltSet_default] = true;
    BuiltSet[dart.implements] = () => [IterableOfE(), BuiltIterableOfE()];
    dart.setMethodSignature(BuiltSet, () => ({
      __proto__: dart.getMethods(BuiltSet.__proto__),
      toBuilder: dart.fnType(src__set.SetBuilder$(E), []),
      rebuild: dart.fnType(src__set.BuiltSet$(E), [SetBuilderOfETodynamic()]),
      toBuiltList: dart.fnType(src__list.BuiltList$(E), []),
      toBuiltSet: dart.fnType(src__set.BuiltSet$(E), []),
      _equals: dart.fnType(core$.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core$.bool, [dart.dynamic]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      asSet: dart.fnType(core$.Set$(E), []),
      containsAll: dart.fnType(core$.bool, [IterableOfObject()]),
      difference: dart.fnType(src__set.BuiltSet$(E), [BuiltSetOfObject()]),
      intersection: dart.fnType(src__set.BuiltSet$(E), [BuiltSetOfObject()]),
      lookup: dart.fnType(E, [core$.Object]),
      union: dart.fnType(src__set.BuiltSet$(E), [core$.Object]),
      cast: dart.gFnType(T => [src__set.BuiltSet$(T), []]),
      [$cast]: dart.gFnType(T => [src__set.BuiltSet$(T), []]),
      retype: dart.gFnType(T => [src__set.BuiltSet$(T), []]),
      [$retype]: dart.gFnType(T => [src__set.BuiltSet$(T), []]),
      followedBy: dart.fnType(core$.Iterable$(E), [core$.Object]),
      [$followedBy]: dart.fnType(core$.Iterable$(E), [core$.Object]),
      whereType: dart.gFnType(T => [core$.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core$.Iterable$(T), []]),
      map: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(T, [E])]]),
      where: dart.fnType(core$.Iterable$(E), [ETobool()]),
      [$where]: dart.fnType(core$.Iterable$(E), [ETobool()]),
      expand: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(core$.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(core$.Iterable$(T), [E])]]),
      contains: dart.fnType(core$.bool, [core$.Object]),
      [$contains]: dart.fnType(core$.bool, [core$.Object]),
      forEach: dart.fnType(dart.void, [ETovoid()]),
      [$forEach]: dart.fnType(dart.void, [ETovoid()]),
      reduce: dart.fnType(E, [core$.Object]),
      [$reduce]: dart.fnType(E, [core$.Object]),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      every: dart.fnType(core$.bool, [ETobool()]),
      [$every]: dart.fnType(core$.bool, [ETobool()]),
      join: dart.fnType(core$.String, [], [core$.String]),
      [$join]: dart.fnType(core$.String, [], [core$.String]),
      any: dart.fnType(core$.bool, [ETobool()]),
      [$any]: dart.fnType(core$.bool, [ETobool()]),
      toSet: dart.fnType(core$.Set$(E), []),
      [$toSet]: dart.fnType(core$.Set$(E), []),
      toList: dart.fnType(core$.List$(E), [], {growable: core$.bool}),
      [$toList]: dart.fnType(core$.List$(E), [], {growable: core$.bool}),
      take: dart.fnType(core$.Iterable$(E), [core$.int]),
      [$take]: dart.fnType(core$.Iterable$(E), [core$.int]),
      takeWhile: dart.fnType(core$.Iterable$(E), [ETobool()]),
      [$takeWhile]: dart.fnType(core$.Iterable$(E), [ETobool()]),
      skip: dart.fnType(core$.Iterable$(E), [core$.int]),
      [$skip]: dart.fnType(core$.Iterable$(E), [core$.int]),
      skipWhile: dart.fnType(core$.Iterable$(E), [ETobool()]),
      [$skipWhile]: dart.fnType(core$.Iterable$(E), [ETobool()]),
      firstWhere: dart.fnType(E, [ETobool()], {orElse: core$.Object}),
      [$firstWhere]: dart.fnType(E, [ETobool()], {orElse: core$.Object}),
      lastWhere: dart.fnType(E, [ETobool()], {orElse: core$.Object}),
      [$lastWhere]: dart.fnType(E, [ETobool()], {orElse: core$.Object}),
      singleWhere: dart.fnType(E, [ETobool()], {orElse: core$.Object}),
      [$singleWhere]: dart.fnType(E, [ETobool()], {orElse: core$.Object}),
      elementAt: dart.fnType(E, [core$.int]),
      [$elementAt]: dart.fnType(E, [core$.int])
    }));
    dart.setGetterSignature(BuiltSet, () => ({
      __proto__: dart.getGetters(BuiltSet.__proto__),
      hashCode: dart.fnType(core$.int, []),
      [$hashCode]: dart.fnType(core$.int, []),
      length: dart.fnType(core$.int, []),
      [$length]: dart.fnType(core$.int, []),
      iterator: dart.fnType(core$.Iterator$(E), []),
      [$iterator]: dart.fnType(core$.Iterator$(E), []),
      isEmpty: dart.fnType(core$.bool, []),
      [$isEmpty]: dart.fnType(core$.bool, []),
      isNotEmpty: dart.fnType(core$.bool, []),
      [$isNotEmpty]: dart.fnType(core$.bool, []),
      first: dart.fnType(E, []),
      [$first]: dart.fnType(E, []),
      last: dart.fnType(E, []),
      [$last]: dart.fnType(E, []),
      single: dart.fnType(E, []),
      [$single]: dart.fnType(E, [])
    }));
    dart.setFieldSignature(BuiltSet, () => ({
      __proto__: dart.getFields(BuiltSet.__proto__),
      [_setFactory]: dart.finalFieldType(VoidToSetOfE()),
      [_set]: dart.finalFieldType(SetOfE()),
      [_hashCode]: dart.fieldType(core$.int)
    }));
    dart.defineExtensionMethods(BuiltSet, [
      '_equals',
      'toString',
      'cast',
      'retype',
      'followedBy',
      'whereType',
      'map',
      'where',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'every',
      'join',
      'any',
      'toSet',
      'toList',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'singleWhere',
      'elementAt'
    ]);
    dart.defineExtensionAccessors(BuiltSet, [
      'hashCode',
      'length',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single'
    ]);
    return BuiltSet;
  });
  src__set.BuiltSet = src__set.BuiltSet$();
  dart.addTypeTests(src__set.BuiltSet, _is_BuiltSet_default);
  const _is__BuiltSet_default = Symbol('_is__BuiltSet_default');
  src__set._BuiltSet$ = dart.generic(E => {
    let _HashSetOfE = () => (_HashSetOfE = dart.constFn(collection._HashSet$(E)))();
    class _BuiltSet extends src__set.BuiltSet$(E) {
      hasExactElementType(type) {
        return dart.equals(dart.wrapType(E), type);
      }
    }
    (_BuiltSet.withSafeSet = function(setFactory, set) {
      _BuiltSet.__proto__.__.call(this, setFactory, set);
    }).prototype = _BuiltSet.prototype;
    (_BuiltSet.copyAndCheck = function(iterable) {
      _BuiltSet.__proto__.__.call(this, null, new (_HashSetOfE()).new());
      for (let element of iterable) {
        if (E.is(element)) {
          this[_set].add(element);
        } else {
          dart.throw(new core$.ArgumentError.new(dart.str`iterable contained invalid element: ${element}`));
        }
      }
    }).prototype = _BuiltSet.prototype;
    dart.addTypeTests(_BuiltSet);
    _BuiltSet.prototype[_is__BuiltSet_default] = true;
    dart.setMethodSignature(_BuiltSet, () => ({
      __proto__: dart.getMethods(_BuiltSet.__proto__),
      hasExactElementType: dart.fnType(core$.bool, [core$.Type])
    }));
    return _BuiltSet;
  });
  src__set._BuiltSet = src__set._BuiltSet$();
  dart.addTypeTests(src__set._BuiltSet, _is__BuiltSet_default);
  const _is_OverriddenHashcodeBuiltSet_default = Symbol('_is_OverriddenHashcodeBuiltSet_default');
  src__set.OverriddenHashcodeBuiltSet$ = dart.generic(T => {
    class OverriddenHashcodeBuiltSet extends src__set._BuiltSet$(T) {
      get hashCode() {
        return this[_overridenHashCode];
      }
    }
    (OverriddenHashcodeBuiltSet.new = function(iterable, overridenHashCode) {
      this[_overridenHashCode] = overridenHashCode;
      OverriddenHashcodeBuiltSet.__proto__.copyAndCheck.call(this, iterable);
    }).prototype = OverriddenHashcodeBuiltSet.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltSet);
    OverriddenHashcodeBuiltSet.prototype[_is_OverriddenHashcodeBuiltSet_default] = true;
    dart.setFieldSignature(OverriddenHashcodeBuiltSet, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltSet.__proto__),
      [_overridenHashCode]: dart.finalFieldType(core$.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltSet, ['hashCode']);
    return OverriddenHashcodeBuiltSet;
  });
  src__set.OverriddenHashcodeBuiltSet = src__set.OverriddenHashcodeBuiltSet$();
  dart.addTypeTests(src__set.OverriddenHashcodeBuiltSet, _is_OverriddenHashcodeBuiltSet_default);
  src__set._SetFactory$ = dart.generic(E => {
    const _SetFactory = dart.typedef('_SetFactory', () => dart.fnType(core$.Set$(E), []));
    return _SetFactory;
  });
  src__set._SetFactory = src__set._SetFactory$();
  const _setOwner = Symbol('_setOwner');
  const _checkGenericTypeParameter = Symbol('_checkGenericTypeParameter');
  let const$0;
  const _withOwner = Symbol('_withOwner');
  const _createSet = Symbol('_createSet');
  const _setSafeSet = Symbol('_setSafeSet');
  const _checkElement = Symbol('_checkElement');
  const _safeSet = Symbol('_safeSet');
  const _checkElements = Symbol('_checkElements');
  const _is_SetBuilder_default = Symbol('_is_SetBuilder_default');
  src__set.SetBuilder$ = dart.generic(E => {
    let SetBuilderOfE = () => (SetBuilderOfE = dart.constFn(src__set.SetBuilder$(E)))();
    let _BuiltSetOfE = () => (_BuiltSetOfE = dart.constFn(src__set._BuiltSet$(E)))();
    let SetOfE = () => (SetOfE = dart.constFn(core$.Set$(E)))();
    let VoidToSetOfE = () => (VoidToSetOfE = dart.constFn(dart.fnType(SetOfE(), [])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    let EToE = () => (EToE = dart.constFn(dart.fnType(E, [E])))();
    let EToIterableOfE = () => (EToIterableOfE = dart.constFn(dart.fnType(IterableOfE(), [E])))();
    let _HashSetOfE = () => (_HashSetOfE = dart.constFn(collection._HashSet$(E)))();
    let SetBuilderOfETodynamic = () => (SetBuilderOfETodynamic = dart.constFn(dart.fnType(dart.dynamic, [SetBuilderOfE()])))();
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core$.bool, [E])))();
    class SetBuilder extends core$.Object {
      static new(iterable) {
        if (iterable === void 0) iterable = const$0 || (const$0 = dart.constList([], dart.dynamic));
        let _ = new (SetBuilderOfE())._uninitialized();
        _.replace(iterable);
        return _;
      }
      build() {
        if (this[_setOwner] == null) {
          this[_setOwner] = new (_BuiltSetOfE()).withSafeSet(this[_setFactory], this[_set]);
        }
        return this[_setOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(iterable) {
        if (_BuiltSetOfE().is(iterable) && dart.equals(iterable[_setFactory], this[_setFactory])) {
          this[_withOwner](iterable);
        } else {
          let set = this[_createSet]();
          for (let element of iterable) {
            if (E.is(element)) {
              set.add(element);
            } else {
              dart.throw(new core$.ArgumentError.new(dart.str`iterable contained invalid element: ${element}`));
            }
          }
          this[_setSafeSet](set);
        }
      }
      withBase(base) {
        VoidToSetOfE()._check(base);
        if (base == null) {
          dart.throw(new core$.ArgumentError.notNull('base'));
        }
        this[_setFactory] = base;
        this[_setSafeSet]((() => {
          let _ = this[_createSet]();
          _.addAll(this[_set]);
          return _;
        })());
      }
      withDefaultBase() {
        this[_setFactory] = null;
        this[_setSafeSet]((() => {
          let _ = this[_createSet]();
          _.addAll(this[_set]);
          return _;
        })());
      }
      add(value) {
        E._check(value);
        this[_checkElement](value);
        this[_safeSet].add(value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_checkElements](iterable);
        this[_safeSet].addAll(iterable);
      }
      clear() {
        this[_safeSet].clear();
      }
      remove(value) {
        this[_safeSet].remove(value);
      }
      removeAll(elements) {
        this[_safeSet].removeAll(elements);
      }
      removeWhere(test) {
        this[_safeSet].removeWhere(test);
      }
      retainAll(elements) {
        this[_safeSet].retainAll(elements);
      }
      retainWhere(test) {
        this[_safeSet].retainWhere(test);
      }
      map(f) {
        EToE()._check(f);
        let result = this[_createSet]();
        result.addAll(this[_set].map(E, f));
        this[_checkElements](result);
        this[_setSafeSet](result);
      }
      where(test) {
        return this.retainWhere(test);
      }
      expand(f) {
        EToIterableOfE()._check(f);
        let result = this[_createSet]();
        result.addAll(this[_set].expand(E, f));
        this[_checkElements](result);
        this[_setSafeSet](result);
      }
      take(n) {
        this[_setSafeSet]((() => {
          let _ = this[_createSet]();
          _.addAll(this[_set].take(n));
          return _;
        })());
      }
      takeWhile(test) {
        this[_setSafeSet]((() => {
          let _ = this[_createSet]();
          _.addAll(this[_set].takeWhile(test));
          return _;
        })());
      }
      skip(n) {
        this[_setSafeSet]((() => {
          let _ = this[_createSet]();
          _.addAll(this[_set].skip(n));
          return _;
        })());
      }
      skipWhile(test) {
        this[_setSafeSet]((() => {
          let _ = this[_createSet]();
          _.addAll(this[_set].skipWhile(test));
          return _;
        })());
      }
      [_withOwner](setOwner) {
        _BuiltSetOfE()._check(setOwner);
        if (!dart.equals(setOwner[_setFactory], this[_setFactory])) dart.assertFailed("Can't reuse a built set that uses a different base");
        this[_set] = setOwner[_set];
        this[_setOwner] = setOwner;
      }
      [_setSafeSet](set) {
        SetOfE()._check(set);
        this[_setOwner] = null;
        this[_set] = set;
      }
      get [_safeSet]() {
        if (this[_setOwner] != null) {
          let _ = this[_createSet]();
          _.addAll(this[_set]);
          this[_set] = _;
          this[_setOwner] = null;
        }
        return this[_set];
      }
      [_createSet]() {
        return this[_setFactory] != null ? this[_setFactory]() : new (_HashSetOfE()).new();
      }
      [_checkGenericTypeParameter]() {
        if (dart.equals(dart.wrapType(E), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new('explicit element type required, ' + 'for example "new SetBuilder<int>"'));
        }
      }
      [_checkElement](element) {
        E._check(element);
        if (element == null) {
          dart.throw(new core$.ArgumentError.new('null element'));
        }
      }
      [_checkElements](elements) {
        for (let element of elements) {
          if (!E.is(element)) {
            dart.throw(new core$.ArgumentError.new(dart.str`invalid element: ${element}`));
          }
        }
      }
    }
    (SetBuilder._uninitialized = function() {
      this[_setFactory] = null;
      this[_set] = null;
      this[_setOwner] = null;
      this[_checkGenericTypeParameter]();
    }).prototype = SetBuilder.prototype;
    (SetBuilder._fromBuiltSet = function(set) {
      this[_setFactory] = set[_setFactory];
      this[_set] = set[_set];
      this[_setOwner] = set;
    }).prototype = SetBuilder.prototype;
    dart.addTypeTests(SetBuilder);
    SetBuilder.prototype[_is_SetBuilder_default] = true;
    dart.setMethodSignature(SetBuilder, () => ({
      __proto__: dart.getMethods(SetBuilder.__proto__),
      build: dart.fnType(src__set.BuiltSet$(E), []),
      update: dart.fnType(dart.void, [SetBuilderOfETodynamic()]),
      replace: dart.fnType(dart.void, [core$.Iterable]),
      withBase: dart.fnType(dart.void, [core$.Object]),
      withDefaultBase: dart.fnType(dart.void, []),
      add: dart.fnType(dart.void, [core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(dart.void, [core$.Object]),
      removeAll: dart.fnType(dart.void, [IterableOfObject()]),
      removeWhere: dart.fnType(dart.void, [ETobool()]),
      retainAll: dart.fnType(dart.void, [IterableOfObject()]),
      retainWhere: dart.fnType(dart.void, [ETobool()]),
      map: dart.fnType(dart.void, [core$.Object]),
      where: dart.fnType(dart.void, [ETobool()]),
      expand: dart.fnType(dart.void, [core$.Object]),
      take: dart.fnType(dart.void, [core$.int]),
      takeWhile: dart.fnType(dart.void, [ETobool()]),
      skip: dart.fnType(dart.void, [core$.int]),
      skipWhile: dart.fnType(dart.void, [ETobool()]),
      [_withOwner]: dart.fnType(dart.void, [core$.Object]),
      [_setSafeSet]: dart.fnType(dart.void, [core$.Object]),
      [_createSet]: dart.fnType(core$.Set$(E), []),
      [_checkGenericTypeParameter]: dart.fnType(dart.void, []),
      [_checkElement]: dart.fnType(dart.void, [core$.Object]),
      [_checkElements]: dart.fnType(dart.void, [core$.Iterable])
    }));
    dart.setGetterSignature(SetBuilder, () => ({
      __proto__: dart.getGetters(SetBuilder.__proto__),
      [_safeSet]: dart.fnType(core$.Set$(E), [])
    }));
    dart.setFieldSignature(SetBuilder, () => ({
      __proto__: dart.getFields(SetBuilder.__proto__),
      [_setFactory]: dart.fieldType(VoidToSetOfE()),
      [_set]: dart.fieldType(SetOfE()),
      [_setOwner]: dart.fieldType(_BuiltSetOfE())
    }));
    return SetBuilder;
  });
  src__set.SetBuilder = src__set.SetBuilder$();
  dart.addTypeTests(src__set.SetBuilder, _is_SetBuilder_default);
  const _overridenHashCode$ = Symbol('_overridenHashCode');
  let const$1;
  const _list = Symbol('_list');
  const _hashCode$ = Symbol('_hashCode');
  let const$2;
  const _is_BuiltList_default = Symbol('_is_BuiltList_default');
  src__list.BuiltList$ = dart.generic(E => {
    let BuiltListOfE = () => (BuiltListOfE = dart.constFn(src__list.BuiltList$(E)))();
    let _BuiltListOfE = () => (_BuiltListOfE = dart.constFn(src__list._BuiltList$(E)))();
    let ListBuilderOfE = () => (ListBuilderOfE = dart.constFn(src__list.ListBuilder$(E)))();
    let BuiltSetOfE = () => (BuiltSetOfE = dart.constFn(src__set.BuiltSet$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core$.List$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    let CopyOnWriteListOfE = () => (CopyOnWriteListOfE = dart.constFn(src__internal__copy_on_write_list.CopyOnWriteList$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let BuiltIterableOfE = () => (BuiltIterableOfE = dart.constFn(src__iterable.BuiltIterable$(E)))();
    let ListBuilderOfETodynamic = () => (ListBuilderOfETodynamic = dart.constFn(dart.fnType(dart.dynamic, [ListBuilderOfE()])))();
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core$.bool, [E])))();
    let ETovoid = () => (ETovoid = dart.constFn(dart.fnType(dart.void, [E])))();
    class BuiltList extends core$.Object {
      static new(iterable) {
        if (iterable === void 0) iterable = const$2 || (const$2 = dart.constList([], dart.dynamic));
        if (src__list._BuiltList.is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(E)))) {
          return BuiltListOfE().as(iterable);
        } else {
          return new (_BuiltListOfE()).copyAndCheck(iterable);
        }
      }
      static build(updates) {
        return (() => {
          let _ = ListBuilderOfE().new();
          _.update(updates);
          return _;
        })().build();
      }
      toBuilder() {
        return ListBuilderOfE().new(this);
      }
      rebuild(updates) {
        return (() => {
          let _ = this.toBuilder();
          _.update(updates);
          return _;
        })().build();
      }
      toBuiltList() {
        return this;
      }
      toBuiltSet() {
        return BuiltSetOfE().new(this);
      }
      get hashCode() {
        if (this[_hashCode$] == null) {
          this[_hashCode$] = core$0.hashObjects(this[_list]);
        }
        return this[_hashCode$];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__list.BuiltList.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let i = 0; i !== this.length; ++i) {
          if (!dart.equals(dart.dindex(other, i), this._get(i))) return false;
        }
        return true;
      }
      toString() {
        return dart.toString(this[_list]);
      }
      asList() {
        return ListOfE().unmodifiable(this[_list]);
      }
      _get(index) {
        return this[_list][$_get](index);
      }
      get length() {
        return this[_list][$length];
      }
      get reversed() {
        return this[_list][$reversed];
      }
      indexOf(element, start) {
        E._check(element);
        if (start === void 0) start = 0;
        return this[_list][$indexOf](element, start);
      }
      lastIndexOf(element, start) {
        E._check(element);
        if (start === void 0) start = null;
        return this[_list][$lastIndexOf](element, start);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        return new (_BuiltListOfE()).withSafeList(this[_list][$sublist](start, end));
      }
      getRange(start, end) {
        return this[_list][$getRange](start, end);
      }
      asMap() {
        return this[_list][$asMap]();
      }
      get iterator() {
        return this[_list][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
      map(T, f) {
        return this[_list][$map](T, f);
      }
      where(test) {
        return this[_list][$where](test);
      }
      whereType(T) {
        dart.throw(new core$.UnimplementedError.new('whereType'));
      }
      expand(T, f) {
        return this[_list][$expand](T, f);
      }
      contains(element) {
        return this[_list][$contains](element);
      }
      forEach(f) {
        return this[_list][$forEach](f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_list][$reduce](combine);
      }
      fold(T, initialValue, combine) {
        return this[_list][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        dart.throw(new core$.UnimplementedError.new('followedBy'));
      }
      every(test) {
        return this[_list][$every](test);
      }
      join(separator) {
        if (separator === void 0) separator = '';
        return this[_list][$join](separator);
      }
      any(test) {
        return this[_list][$any](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return new (CopyOnWriteListOfE()).new(this[_list], growable);
      }
      toSet() {
        return this[_list][$toSet]();
      }
      get isEmpty() {
        return this[_list][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list][$isNotEmpty];
      }
      take(n) {
        return this[_list][$take](n);
      }
      takeWhile(test) {
        return this[_list][$takeWhile](test);
      }
      skip(n) {
        return this[_list][$skip](n);
      }
      skipWhile(test) {
        return this[_list][$skipWhile](test);
      }
      get first() {
        return this[_list][$first];
      }
      get last() {
        return this[_list][$last];
      }
      get single() {
        return this[_list][$single];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list][$firstWhere](test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list][$lastWhere](test, {orElse: orElse});
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        if (orElse != null) dart.throw(new core$.UnimplementedError.new('singleWhere:orElse'));
        return this[_list][$singleWhere](test);
      }
      elementAt(index) {
        return this[_list][$elementAt](index);
      }
      cast(T) {
        dart.throw(new core$.UnimplementedError.new('cast'));
      }
      retype(T) {
        dart.throw(new core$.UnimplementedError.new('retype'));
      }
    }
    (BuiltList.__ = function(list) {
      this[_hashCode$] = null;
      this[_list] = list;
      if (dart.equals(dart.wrapType(E), dart.wrapType(dart.dynamic))) {
        dart.throw(new core$.UnsupportedError.new('explicit element type required, for example "new BuiltList<int>"'));
      }
    }).prototype = BuiltList.prototype;
    BuiltList.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltList);
    BuiltList.prototype[_is_BuiltList_default] = true;
    BuiltList[dart.implements] = () => [IterableOfE(), BuiltIterableOfE()];
    dart.setMethodSignature(BuiltList, () => ({
      __proto__: dart.getMethods(BuiltList.__proto__),
      toBuilder: dart.fnType(src__list.ListBuilder$(E), []),
      rebuild: dart.fnType(src__list.BuiltList$(E), [ListBuilderOfETodynamic()]),
      toBuiltList: dart.fnType(src__list.BuiltList$(E), []),
      toBuiltSet: dart.fnType(src__set.BuiltSet$(E), []),
      _equals: dart.fnType(core$.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core$.bool, [dart.dynamic]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      asList: dart.fnType(core$.List$(E), []),
      _get: dart.fnType(E, [core$.int]),
      indexOf: dart.fnType(core$.int, [core$.Object], [core$.int]),
      lastIndexOf: dart.fnType(core$.int, [core$.Object], [core$.int]),
      sublist: dart.fnType(src__list.BuiltList$(E), [core$.int], [core$.int]),
      getRange: dart.fnType(core$.Iterable$(E), [core$.int, core$.int]),
      asMap: dart.fnType(core$.Map$(core$.int, E), []),
      map: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(T, [E])]]),
      where: dart.fnType(core$.Iterable$(E), [ETobool()]),
      [$where]: dart.fnType(core$.Iterable$(E), [ETobool()]),
      whereType: dart.gFnType(T => [core$.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core$.Iterable$(T), []]),
      expand: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(core$.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core$.Iterable$(T), [dart.fnType(core$.Iterable$(T), [E])]]),
      contains: dart.fnType(core$.bool, [core$.Object]),
      [$contains]: dart.fnType(core$.bool, [core$.Object]),
      forEach: dart.fnType(dart.void, [ETovoid()]),
      [$forEach]: dart.fnType(dart.void, [ETovoid()]),
      reduce: dart.fnType(E, [core$.Object]),
      [$reduce]: dart.fnType(E, [core$.Object]),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      followedBy: dart.fnType(core$.Iterable$(E), [core$.Object]),
      [$followedBy]: dart.fnType(core$.Iterable$(E), [core$.Object]),
      every: dart.fnType(core$.bool, [ETobool()]),
      [$every]: dart.fnType(core$.bool, [ETobool()]),
      join: dart.fnType(core$.String, [], [core$.String]),
      [$join]: dart.fnType(core$.String, [], [core$.String]),
      any: dart.fnType(core$.bool, [ETobool()]),
      [$any]: dart.fnType(core$.bool, [ETobool()]),
      toList: dart.fnType(core$.List$(E), [], {growable: core$.bool}),
      [$toList]: dart.fnType(core$.List$(E), [], {growable: core$.bool}),
      toSet: dart.fnType(core$.Set$(E), []),
      [$toSet]: dart.fnType(core$.Set$(E), []),
      take: dart.fnType(core$.Iterable$(E), [core$.int]),
      [$take]: dart.fnType(core$.Iterable$(E), [core$.int]),
      takeWhile: dart.fnType(core$.Iterable$(E), [ETobool()]),
      [$takeWhile]: dart.fnType(core$.Iterable$(E), [ETobool()]),
      skip: dart.fnType(core$.Iterable$(E), [core$.int]),
      [$skip]: dart.fnType(core$.Iterable$(E), [core$.int]),
      skipWhile: dart.fnType(core$.Iterable$(E), [ETobool()]),
      [$skipWhile]: dart.fnType(core$.Iterable$(E), [ETobool()]),
      firstWhere: dart.fnType(E, [ETobool()], {orElse: core$.Object}),
      [$firstWhere]: dart.fnType(E, [ETobool()], {orElse: core$.Object}),
      lastWhere: dart.fnType(E, [ETobool()], {orElse: core$.Object}),
      [$lastWhere]: dart.fnType(E, [ETobool()], {orElse: core$.Object}),
      singleWhere: dart.fnType(E, [ETobool()], {orElse: core$.Object}),
      [$singleWhere]: dart.fnType(E, [ETobool()], {orElse: core$.Object}),
      elementAt: dart.fnType(E, [core$.int]),
      [$elementAt]: dart.fnType(E, [core$.int]),
      cast: dart.gFnType(T => [src__list.BuiltList$(T), []]),
      [$cast]: dart.gFnType(T => [src__list.BuiltList$(T), []]),
      retype: dart.gFnType(T => [src__list.BuiltList$(T), []]),
      [$retype]: dart.gFnType(T => [src__list.BuiltList$(T), []])
    }));
    dart.setGetterSignature(BuiltList, () => ({
      __proto__: dart.getGetters(BuiltList.__proto__),
      hashCode: dart.fnType(core$.int, []),
      [$hashCode]: dart.fnType(core$.int, []),
      length: dart.fnType(core$.int, []),
      [$length]: dart.fnType(core$.int, []),
      reversed: dart.fnType(core$.Iterable$(E), []),
      iterator: dart.fnType(core$.Iterator$(E), []),
      [$iterator]: dart.fnType(core$.Iterator$(E), []),
      isEmpty: dart.fnType(core$.bool, []),
      [$isEmpty]: dart.fnType(core$.bool, []),
      isNotEmpty: dart.fnType(core$.bool, []),
      [$isNotEmpty]: dart.fnType(core$.bool, []),
      first: dart.fnType(E, []),
      [$first]: dart.fnType(E, []),
      last: dart.fnType(E, []),
      [$last]: dart.fnType(E, []),
      single: dart.fnType(E, []),
      [$single]: dart.fnType(E, [])
    }));
    dart.setFieldSignature(BuiltList, () => ({
      __proto__: dart.getFields(BuiltList.__proto__),
      [_list]: dart.finalFieldType(ListOfE()),
      [_hashCode$]: dart.fieldType(core$.int)
    }));
    dart.defineExtensionMethods(BuiltList, [
      '_equals',
      'toString',
      'map',
      'where',
      'whereType',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'followedBy',
      'every',
      'join',
      'any',
      'toList',
      'toSet',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'singleWhere',
      'elementAt',
      'cast',
      'retype'
    ]);
    dart.defineExtensionAccessors(BuiltList, [
      'hashCode',
      'length',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single'
    ]);
    return BuiltList;
  });
  src__list.BuiltList = src__list.BuiltList$();
  dart.addTypeTests(src__list.BuiltList, _is_BuiltList_default);
  const _is__BuiltList_default = Symbol('_is__BuiltList_default');
  src__list._BuiltList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core$.List$(E)))();
    class _BuiltList extends src__list.BuiltList$(E) {
      hasExactElementType(type) {
        return dart.equals(dart.wrapType(E), type);
      }
    }
    (_BuiltList.withSafeList = function(list) {
      _BuiltList.__proto__.__.call(this, list);
    }).prototype = _BuiltList.prototype;
    (_BuiltList.copyAndCheck = function(iterable) {
      if (iterable === void 0) iterable = const$1 || (const$1 = dart.constList([], dart.dynamic));
      _BuiltList.__proto__.__.call(this, ListOfE().from(iterable, {growable: false}));
      for (let element of this[_list]) {
        if (!E.is(element)) {
          dart.throw(new core$.ArgumentError.new(dart.str`iterable contained invalid element: ${element}`));
        }
      }
    }).prototype = _BuiltList.prototype;
    dart.addTypeTests(_BuiltList);
    _BuiltList.prototype[_is__BuiltList_default] = true;
    dart.setMethodSignature(_BuiltList, () => ({
      __proto__: dart.getMethods(_BuiltList.__proto__),
      hasExactElementType: dart.fnType(core$.bool, [core$.Type])
    }));
    return _BuiltList;
  });
  src__list._BuiltList = src__list._BuiltList$();
  dart.addTypeTests(src__list._BuiltList, _is__BuiltList_default);
  const _is_OverriddenHashcodeBuiltList_default = Symbol('_is_OverriddenHashcodeBuiltList_default');
  src__list.OverriddenHashcodeBuiltList$ = dart.generic(T => {
    class OverriddenHashcodeBuiltList extends src__list._BuiltList$(T) {
      get hashCode() {
        return this[_overridenHashCode$];
      }
    }
    (OverriddenHashcodeBuiltList.new = function(iterable, overridenHashCode) {
      this[_overridenHashCode$] = overridenHashCode;
      OverriddenHashcodeBuiltList.__proto__.copyAndCheck.call(this, iterable);
    }).prototype = OverriddenHashcodeBuiltList.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltList);
    OverriddenHashcodeBuiltList.prototype[_is_OverriddenHashcodeBuiltList_default] = true;
    dart.setFieldSignature(OverriddenHashcodeBuiltList, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltList.__proto__),
      [_overridenHashCode$]: dart.finalFieldType(core$.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltList, ['hashCode']);
    return OverriddenHashcodeBuiltList;
  });
  src__list.OverriddenHashcodeBuiltList = src__list.OverriddenHashcodeBuiltList$();
  dart.addTypeTests(src__list.OverriddenHashcodeBuiltList, _is_OverriddenHashcodeBuiltList_default);
  const _listOwner = Symbol('_listOwner');
  const _checkGenericTypeParameter$ = Symbol('_checkGenericTypeParameter');
  let const$3;
  const _setOwner$ = Symbol('_setOwner');
  const _setSafeList = Symbol('_setSafeList');
  const _checkElement$ = Symbol('_checkElement');
  const _safeList = Symbol('_safeList');
  const _checkElements$ = Symbol('_checkElements');
  const _is_ListBuilder_default = Symbol('_is_ListBuilder_default');
  src__list.ListBuilder$ = dart.generic(E => {
    let ListBuilderOfE = () => (ListBuilderOfE = dart.constFn(src__list.ListBuilder$(E)))();
    let _BuiltListOfE = () => (_BuiltListOfE = dart.constFn(src__list._BuiltList$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core$.List$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    let EToE = () => (EToE = dart.constFn(dart.fnType(E, [E])))();
    let EToIterableOfE = () => (EToIterableOfE = dart.constFn(dart.fnType(IterableOfE(), [E])))();
    let ListBuilderOfETodynamic = () => (ListBuilderOfETodynamic = dart.constFn(dart.fnType(dart.dynamic, [ListBuilderOfE()])))();
    let EAndEToint = () => (EAndEToint = dart.constFn(dart.fnType(core$.int, [E, E])))();
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core$.bool, [E])))();
    class ListBuilder extends core$.Object {
      static new(iterable) {
        if (iterable === void 0) iterable = const$3 || (const$3 = dart.constList([], dart.dynamic));
        let _ = new (ListBuilderOfE())._uninitialized();
        _.replace(iterable);
        return _;
      }
      build() {
        if (this[_listOwner] == null) {
          this[_setOwner$](new (_BuiltListOfE()).withSafeList(this[_list]));
        }
        return this[_listOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(iterable) {
        if (_BuiltListOfE().is(iterable)) {
          this[_setOwner$](iterable);
        } else {
          this[_setSafeList](ListOfE().from(iterable));
        }
      }
      _get(index) {
        return this[_list][$_get](index);
      }
      _set(index, element) {
        E._check(element);
        this[_checkElement$](element);
        this[_safeList][$_set](index, element);
        return element;
      }
      add(value) {
        E._check(value);
        this[_checkElement$](value);
        this[_safeList][$add](value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_checkElements$](iterable);
        this[_safeList][$addAll](iterable);
      }
      reverse() {
        this[_list] = this[_list][$reversed][$toList]({growable: true});
        this[_listOwner] = null;
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        this[_safeList][$sort](compare);
      }
      shuffle(random) {
        if (random === void 0) random = null;
        this[_safeList][$shuffle](random);
      }
      clear() {
        this[_safeList][$clear]();
      }
      insert(index, element) {
        E._check(element);
        this[_checkElement$](element);
        this[_safeList][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_checkElements$](iterable);
        this[_safeList][$insertAll](index, iterable);
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_checkElements$](iterable);
        this[_safeList][$setAll](index, iterable);
      }
      remove(value) {
        this[_safeList][$remove](value);
      }
      removeAt(index) {
        this[_safeList][$removeAt](index);
      }
      removeLast() {
        this[_safeList][$removeLast]();
      }
      removeWhere(test) {
        this[_safeList][$removeWhere](test);
      }
      retainWhere(test) {
        this[_safeList][$retainWhere](test);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        this[_setSafeList](this[_list][$sublist](start, end));
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        this[_checkElements$](iterable);
        this[_safeList][$setRange](start, end, iterable, skipCount);
      }
      removeRange(start, end) {
        this[_safeList][$removeRange](start, end);
      }
      fillRange(start, end, fillValue) {
        E._check(fillValue);
        this[_checkElement$](fillValue);
        this[_safeList][$fillRange](start, end, fillValue);
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        this[_checkElements$](iterable);
        this[_safeList][$replaceRange](start, end, iterable);
      }
      map(f) {
        EToE()._check(f);
        let result = this[_list][$map](E, f)[$toList]({growable: true});
        this[_checkElements$](result);
        this[_setSafeList](result);
      }
      where(test) {
        return this.retainWhere(test);
      }
      expand(f) {
        EToIterableOfE()._check(f);
        let result = this[_list][$expand](E, f)[$toList]({growable: true});
        this[_checkElements$](result);
        this[_setSafeList](result);
      }
      take(n) {
        this[_setSafeList](this[_list] = this[_list][$take](n)[$toList]({growable: true}));
      }
      takeWhile(test) {
        this[_setSafeList](this[_list] = this[_list][$takeWhile](test)[$toList]({growable: true}));
      }
      skip(n) {
        this[_setSafeList](this[_list][$skip](n)[$toList]({growable: true}));
      }
      skipWhile(test) {
        this[_setSafeList](this[_list][$skipWhile](test)[$toList]({growable: true}));
      }
      [_setOwner$](listOwner) {
        _BuiltListOfE()._check(listOwner);
        this[_list] = listOwner[_list];
        this[_listOwner] = listOwner;
      }
      [_setSafeList](list) {
        ListOfE()._check(list);
        this[_list] = list;
        this[_listOwner] = null;
      }
      get [_safeList]() {
        if (this[_listOwner] != null) {
          this[_setSafeList](ListOfE().from(this[_list], {growable: true}));
        }
        return this[_list];
      }
      [_checkGenericTypeParameter$]() {
        if (dart.equals(dart.wrapType(E), dart.wrapType(dart.dynamic))) {
          dart.throw(new core$.UnsupportedError.new('explicit element type required, ' + 'for example "new ListBuilder<int>"'));
        }
      }
      [_checkElement$](element) {
        E._check(element);
        if (element == null) {
          dart.throw(new core$.ArgumentError.new('null element'));
        }
      }
      [_checkElements$](elements) {
        for (let element of elements) {
          if (!E.is(element)) {
            dart.throw(new core$.ArgumentError.new(dart.str`invalid element: ${element}`));
          }
        }
      }
    }
    (ListBuilder._uninitialized = function() {
      this[_list] = null;
      this[_listOwner] = null;
      this[_checkGenericTypeParameter$]();
    }).prototype = ListBuilder.prototype;
    dart.addTypeTests(ListBuilder);
    ListBuilder.prototype[_is_ListBuilder_default] = true;
    dart.setMethodSignature(ListBuilder, () => ({
      __proto__: dart.getMethods(ListBuilder.__proto__),
      build: dart.fnType(src__list.BuiltList$(E), []),
      update: dart.fnType(dart.void, [ListBuilderOfETodynamic()]),
      replace: dart.fnType(dart.void, [core$.Iterable]),
      _get: dart.fnType(E, [core$.int]),
      _set: dart.fnType(dart.void, [core$.int, core$.Object]),
      add: dart.fnType(dart.void, [core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      reverse: dart.fnType(dart.void, []),
      sort: dart.fnType(dart.void, [], [EAndEToint()]),
      shuffle: dart.fnType(dart.void, [], [math.Random]),
      clear: dart.fnType(dart.void, []),
      insert: dart.fnType(dart.void, [core$.int, core$.Object]),
      insertAll: dart.fnType(dart.void, [core$.int, core$.Object]),
      setAll: dart.fnType(dart.void, [core$.int, core$.Object]),
      remove: dart.fnType(dart.void, [core$.Object]),
      removeAt: dart.fnType(dart.void, [core$.int]),
      removeLast: dart.fnType(dart.void, []),
      removeWhere: dart.fnType(dart.void, [ETobool()]),
      retainWhere: dart.fnType(dart.void, [ETobool()]),
      sublist: dart.fnType(dart.void, [core$.int], [core$.int]),
      setRange: dart.fnType(dart.void, [core$.int, core$.int, core$.Object], [core$.int]),
      removeRange: dart.fnType(dart.void, [core$.int, core$.int]),
      fillRange: dart.fnType(dart.void, [core$.int, core$.int, core$.Object]),
      replaceRange: dart.fnType(dart.void, [core$.int, core$.int, core$.Object]),
      map: dart.fnType(dart.void, [core$.Object]),
      where: dart.fnType(dart.void, [ETobool()]),
      expand: dart.fnType(dart.void, [core$.Object]),
      take: dart.fnType(dart.void, [core$.int]),
      takeWhile: dart.fnType(dart.void, [ETobool()]),
      skip: dart.fnType(dart.void, [core$.int]),
      skipWhile: dart.fnType(dart.void, [ETobool()]),
      [_setOwner$]: dart.fnType(dart.void, [core$.Object]),
      [_setSafeList]: dart.fnType(dart.void, [core$.Object]),
      [_checkGenericTypeParameter$]: dart.fnType(dart.void, []),
      [_checkElement$]: dart.fnType(dart.void, [core$.Object]),
      [_checkElements$]: dart.fnType(dart.void, [core$.Iterable])
    }));
    dart.setGetterSignature(ListBuilder, () => ({
      __proto__: dart.getGetters(ListBuilder.__proto__),
      [_safeList]: dart.fnType(core$.List$(E), [])
    }));
    dart.setFieldSignature(ListBuilder, () => ({
      __proto__: dart.getFields(ListBuilder.__proto__),
      [_list]: dart.fieldType(ListOfE()),
      [_listOwner]: dart.fieldType(_BuiltListOfE())
    }));
    return ListBuilder;
  });
  src__list.ListBuilder = src__list.ListBuilder$();
  dart.addTypeTests(src__list.ListBuilder, _is_ListBuilder_default);
  dart.trackLibraries("packages/built_collection/src/iterable.ddc", {
    "package:built_collection/src/iterable.dart": src__iterable,
    "package:built_collection/src/set.dart": src__set,
    "package:built_collection/src/list.dart": src__list
  }, '{"version":3,"sourceRoot":"","sources":["iterable/built_iterable.dart","set/built_set.dart","set.dart","set/set_builder.dart","list/built_list.dart","list.dart","list/list_builder.dart"],"names":[],"mappings":"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","file":"iterable.ddc.js"}');
  // Exports:
  return {
    src__iterable: src__iterable,
    src__set: src__set,
    src__list: src__list
  };
});

//# sourceMappingURL=iterable.ddc.js.map
