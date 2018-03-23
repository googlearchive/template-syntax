define(['dart_sdk', 'packages/collection/src/equality', 'packages/observable/src/records', 'packages/observable/src/internal'], function(dart_sdk, equality, records, internal) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__equality = equality.src__equality;
  const src__records = records.src__records;
  const src__internal = internal.src__internal;
  const _root = Object.create(null);
  const src__differs = Object.create(_root);
  const $length = dartx.length;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $reversed = dartx.reversed;
  const $sublist = dartx.sublist;
  const $removeAt = dartx.removeAt;
  const $toList = dartx.toList;
  const $getRange = dartx.getRange;
  const $insertAll = dartx.insertAll;
  const $addAll = dartx.addAll;
  const $insert = dartx.insert;
  const $containsKey = dartx.containsKey;
  const $forEach = dartx.forEach;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfListOfint = () => (ListOfListOfint = dart.constFn(core.List$(ListOfint())))();
  let ListOfEAndintAndint__ToListOfListOfint = () => (ListOfEAndintAndint__ToListOfListOfint = dart.constFn(dart.gFnType(E => [ListOfListOfint(), [core.List$(E), core.int, core.int, core.List$(E), core.int, core.int]])))();
  let JSArrayOf_Edit = () => (JSArrayOf_Edit = dart.constFn(_interceptors.JSArray$(src__differs._Edit)))();
  let IterableOf_Edit = () => (IterableOf_Edit = dart.constFn(core.Iterable$(src__differs._Edit)))();
  let ListOfListOfintToIterableOf_Edit = () => (ListOfListOfintToIterableOf_Edit = dart.constFn(dart.fnType(IterableOf_Edit(), [ListOfListOfint()])))();
  let EqualityOfEAndListOfEAndListOfE__Toint = () => (EqualityOfEAndListOfEAndListOfE__Toint = dart.constFn(dart.gFnType(E => [core.int, [src__equality.Equality$(E), core.List$(E), core.List$(E), core.int]])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ListOfEAndEqualityOfEAndint__ToListOfListChangeRecordOfE = () => (ListOfEAndEqualityOfEAndint__ToListOfListChangeRecordOfE = dart.constFn(dart.gFnType(E => [core.List$(src__records.ListChangeRecord$(E)), [core.List$(E), src__equality.Equality$(E), core.int, core.int, core.List$(E), core.int, core.int]])))();
  let intAndintAndint__Toint = () => (intAndintAndint__Toint = dart.constFn(dart.fnType(core.int, [core.int, core.int, core.int, core.int])))();
  let ListOfListChangeRecordOfEAndListChangeRecordOfETovoid = () => (ListOfListChangeRecordOfEAndListChangeRecordOfETovoid = dart.constFn(dart.gFnType(E => [dart.void, [core.List$(src__records.ListChangeRecord$(E)), src__records.ListChangeRecord$(E)]])))();
  let ListOfEAndListOfListChangeRecordOfEToListOfListChangeRecordOfE = () => (ListOfEAndListOfListChangeRecordOfEToListOfListChangeRecordOfE = dart.constFn(dart.gFnType(E => [core.List$(src__records.ListChangeRecord$(E)), [core.List$(E), core.List$(src__records.ListChangeRecord$(E))]])))();
  let ListOfEAndListOfListChangeRecordOfE__ToListOfListChangeRecordOfE = () => (ListOfEAndListOfListChangeRecordOfE__ToListOfListChangeRecordOfE = dart.constFn(dart.gFnType(E => [core.List$(src__records.ListChangeRecord$(E)), [core.List$(E), core.List$(src__records.ListChangeRecord$(E))], [src__equality.Equality$(E)]])))();
  const _is_Differ_default = Symbol('_is_Differ_default');
  src__differs.Differ$ = dart.generic(E => {
    class Differ extends core.Object {}
    (Differ.new = function() {
    }).prototype = Differ.prototype;
    dart.addTypeTests(Differ);
    Differ.prototype[_is_Differ_default] = true;
    return Differ;
  });
  src__differs.Differ = src__differs.Differ$();
  dart.addTypeTests(src__differs.Differ, _is_Differ_default);
  const _equality = Symbol('_equality');
  const _is_EqualityDiffer_default = Symbol('_is_EqualityDiffer_default');
  src__differs.EqualityDiffer$ = dart.generic(E => {
    let DefaultEqualityOfE = () => (DefaultEqualityOfE = dart.constFn(src__equality.DefaultEquality$(E)))();
    let IdentityEqualityOfE = () => (IdentityEqualityOfE = dart.constFn(src__equality.IdentityEquality$(E)))();
    let DifferOfE = () => (DifferOfE = dart.constFn(src__differs.Differ$(E)))();
    let EqualityOfE = () => (EqualityOfE = dart.constFn(src__equality.Equality$(E)))();
    class EqualityDiffer extends core.Object {
      diff(oldValue, newValue) {
        E._check(oldValue);
        E._check(newValue);
        return dart.test(this[_equality].equals(oldValue, newValue)) ? src__records.ChangeRecord.NONE : src__records.ChangeRecord.ANY;
      }
    }
    (EqualityDiffer.new = function(equality) {
      if (equality === void 0) equality = dart.const(new (DefaultEqualityOfE()).new());
      this[_equality] = equality;
    }).prototype = EqualityDiffer.prototype;
    (EqualityDiffer.identity = function() {
      this[_equality] = dart.const(new (IdentityEqualityOfE()).new());
    }).prototype = EqualityDiffer.prototype;
    dart.addTypeTests(EqualityDiffer);
    EqualityDiffer.prototype[_is_EqualityDiffer_default] = true;
    EqualityDiffer[dart.implements] = () => [DifferOfE()];
    dart.setMethodSignature(EqualityDiffer, () => ({
      __proto__: dart.getMethods(EqualityDiffer.__proto__),
      diff: dart.fnType(core.List$(src__records.ChangeRecord), [core.Object, core.Object])
    }));
    dart.setFieldSignature(EqualityDiffer, () => ({
      __proto__: dart.getFields(EqualityDiffer.__proto__),
      [_equality]: dart.finalFieldType(EqualityOfE())
    }));
    return EqualityDiffer;
  });
  src__differs.EqualityDiffer = src__differs.EqualityDiffer$();
  dart.addTypeTests(src__differs.EqualityDiffer, _is_EqualityDiffer_default);
  const _is_ListDiffer_default = Symbol('_is_ListDiffer_default');
  src__differs.ListDiffer$ = dart.generic(E => {
    let DefaultEqualityOfE = () => (DefaultEqualityOfE = dart.constFn(src__equality.DefaultEquality$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let DifferOfListOfE = () => (DifferOfListOfE = dart.constFn(src__differs.Differ$(ListOfE())))();
    let EqualityOfE = () => (EqualityOfE = dart.constFn(src__equality.Equality$(E)))();
    class ListDiffer extends core.Object {
      diff(e1, e2) {
        ListOfE()._check(e1);
        ListOfE()._check(e2);
        return src__differs._calcSplices(E, e2, this[_equality], 0, e2[$length], e1, 0, e1[$length]);
      }
    }
    (ListDiffer.new = function(equality) {
      if (equality === void 0) equality = dart.const(new (DefaultEqualityOfE()).new());
      this[_equality] = equality;
    }).prototype = ListDiffer.prototype;
    dart.addTypeTests(ListDiffer);
    ListDiffer.prototype[_is_ListDiffer_default] = true;
    ListDiffer[dart.implements] = () => [DifferOfListOfE()];
    dart.setMethodSignature(ListDiffer, () => ({
      __proto__: dart.getMethods(ListDiffer.__proto__),
      diff: dart.fnType(core.List$(src__records.ListChangeRecord$(E)), [core.Object, core.Object])
    }));
    dart.setFieldSignature(ListDiffer, () => ({
      __proto__: dart.getFields(ListDiffer.__proto__),
      [_equality]: dart.finalFieldType(EqualityOfE())
    }));
    return ListDiffer;
  });
  src__differs.ListDiffer = src__differs.ListDiffer$();
  dart.addTypeTests(src__differs.ListDiffer, _is_ListDiffer_default);
  src__differs._Edit = class _Edit extends core.Object {
    toString() {
      return {
        0: "_Edit.leave",
        1: "_Edit.update",
        2: "_Edit.add",
        3: "_Edit.delete"
      }[this.index];
    }
  };
  (src__differs._Edit.new = function(x) {
    this.index = x;
  }).prototype = src__differs._Edit.prototype;
  dart.addTypeTests(src__differs._Edit);
  dart.setFieldSignature(src__differs._Edit, () => ({
    __proto__: dart.getFields(src__differs._Edit.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__differs._Edit, ['toString']);
  src__differs._Edit.leave = dart.const(new src__differs._Edit.new(0));
  src__differs._Edit.update = dart.const(new src__differs._Edit.new(1));
  src__differs._Edit.add = dart.const(new src__differs._Edit.new(2));
  src__differs._Edit.delete = dart.const(new src__differs._Edit.new(3));
  src__differs._Edit.values = dart.constList([src__differs._Edit.leave, src__differs._Edit.update, src__differs._Edit.add, src__differs._Edit.delete], src__differs._Edit);
  src__differs._calcEditDistance = function(E, current, currentStart, currentEnd, old, oldStart, oldEnd) {
    let rowCount = dart.notNull(oldEnd) - dart.notNull(oldStart) + 1;
    let columnCount = dart.notNull(currentEnd) - dart.notNull(currentStart) + 1;
    let distances = ListOfListOfint().new(rowCount);
    for (let i = 0; i < rowCount; i++) {
      distances[$_set](i, ListOfint().new(columnCount));
      distances[$_get](i)[$_set](0, i);
    }
    for (let j = 0; j < columnCount; j++) {
      distances[$_get](0)[$_set](j, j);
    }
    for (let i = 1; i < rowCount; i++) {
      for (let j = 1; j < columnCount; j++) {
        if (dart.equals(old[$_get](dart.notNull(oldStart) + i - 1), current[$_get](dart.notNull(currentStart) + j - 1))) {
          distances[$_get](i)[$_set](j, distances[$_get](i - 1)[$_get](j - 1));
        } else {
          let north = dart.notNull(distances[$_get](i - 1)[$_get](j)) + 1;
          let west = dart.notNull(distances[$_get](i)[$_get](j - 1)) + 1;
          distances[$_get](i)[$_set](j, math.min(core.int, north, west));
        }
      }
    }
    return distances;
  };
  dart.fn(src__differs._calcEditDistance, ListOfEAndintAndint__ToListOfListOfint());
  src__differs._spliceOperationsFromEditDistances = function(distances) {
    let i = dart.notNull(distances[$length]) - 1;
    let j = dart.notNull(distances[$_get](0)[$length]) - 1;
    let current = distances[$_get](i)[$_get](j);
    let edits = JSArrayOf_Edit().of([]);
    while (i > 0 || j > 0) {
      if (i === 0) {
        edits[$add](src__differs._Edit.add);
        j--;
        continue;
      }
      if (j === 0) {
        edits[$add](src__differs._Edit.delete);
        i--;
        continue;
      }
      let northWest = distances[$_get](i - 1)[$_get](j - 1);
      let west = distances[$_get](i - 1)[$_get](j);
      let north = distances[$_get](i)[$_get](j - 1);
      let min = math.min(core.int, math.min(core.int, west, north), northWest);
      if (min === northWest) {
        if (northWest == current) {
          edits[$add](src__differs._Edit.leave);
        } else {
          edits[$add](src__differs._Edit.update);
          current = northWest;
        }
        i--;
        j--;
      } else if (min === west) {
        edits[$add](src__differs._Edit.delete);
        i--;
        current = west;
      } else {
        edits[$add](src__differs._Edit.add);
        j--;
        current = north;
      }
    }
    return edits[$reversed];
  };
  dart.fn(src__differs._spliceOperationsFromEditDistances, ListOfListOfintToIterableOf_Edit());
  src__differs._sharedPrefix = function(E, equality, e1, e2, searchLength) {
    for (let i = 0; i < dart.notNull(searchLength); i++) {
      if (!dart.test(equality.equals(e1[$_get](i), e2[$_get](i)))) {
        return i;
      }
    }
    return searchLength;
  };
  dart.fn(src__differs._sharedPrefix, EqualityOfEAndListOfEAndListOfE__Toint());
  src__differs._sharedSuffix = function(E, equality, e1, e2, searchLength) {
    let index1 = e1[$length];
    let index2 = e2[$length];
    let count = 0;
    while (count < dart.notNull(searchLength) && dart.test(equality.equals(e1[$_get](index1 = dart.notNull(index1) - 1), e2[$_get](index2 = dart.notNull(index2) - 1)))) {
      count++;
    }
    return count;
  };
  dart.fn(src__differs._sharedSuffix, EqualityOfEAndListOfEAndListOfE__Toint());
  src__differs._calcSplices = function(E, current, equality, currentStart, currentEnd, old, oldStart, oldEnd) {
    let prefixCount = 0;
    let suffixCount = 0;
    let minLength = math.min(core.int, dart.notNull(currentEnd) - dart.notNull(currentStart), dart.notNull(oldEnd) - dart.notNull(oldStart));
    if (currentStart === 0 && oldStart === 0) {
      prefixCount = src__differs._sharedPrefix(E, equality, current, old, minLength);
    }
    if (currentEnd == current[$length] && oldEnd == old[$length]) {
      suffixCount = src__differs._sharedSuffix(E, equality, current, old, minLength - dart.notNull(prefixCount));
    }
    currentStart = dart.notNull(currentStart) + dart.notNull(prefixCount);
    oldStart = dart.notNull(oldStart) + dart.notNull(prefixCount);
    currentEnd = dart.notNull(currentEnd) - dart.notNull(suffixCount);
    oldEnd = dart.notNull(oldEnd) - dart.notNull(suffixCount);
    if (dart.notNull(currentEnd) - dart.notNull(currentStart) === 0 && dart.notNull(oldEnd) - dart.notNull(oldStart) === 0) {
      return dart.constList([], src__records.ListChangeRecord$(E));
    }
    if (currentStart == currentEnd) {
      let spliceRemoved = old[$sublist](oldStart, oldEnd);
      return _interceptors.JSArray$(src__records.ListChangeRecord$(E)).of([new (src__records.ListChangeRecord$(E)).remove(current, currentStart, spliceRemoved)]);
    }
    if (oldStart == oldEnd) {
      return _interceptors.JSArray$(src__records.ListChangeRecord$(E)).of([new (src__records.ListChangeRecord$(E)).add(current, currentStart, dart.notNull(currentEnd) - dart.notNull(currentStart))]);
    }
    let ops = src__differs._spliceOperationsFromEditDistances(src__differs._calcEditDistance(E, current, currentStart, currentEnd, old, oldStart, oldEnd));
    let spliceIndex = -1;
    let spliceRemovals = _interceptors.JSArray$(E).of([]);
    let spliceAddedCount = 0;
    function hasSplice() {
      return spliceIndex !== -1;
    }
    dart.fn(hasSplice, VoidTobool());
    function resetSplice() {
      spliceIndex = -1;
      spliceRemovals = _interceptors.JSArray$(E).of([]);
      spliceAddedCount = 0;
    }
    dart.fn(resetSplice, VoidTovoid());
    let splices = _interceptors.JSArray$(src__records.ListChangeRecord$(E)).of([]);
    let index = currentStart;
    let oldIndex = oldStart;
    for (let op of ops) {
      switch (op) {
        case src__differs._Edit.leave:
        {
          if (dart.test(hasSplice())) {
            splices[$add](src__records.ListChangeRecord$(E).new(current, spliceIndex, {removed: spliceRemovals, addedCount: spliceAddedCount}));
            resetSplice();
          }
          index = dart.notNull(index) + 1;
          oldIndex = dart.notNull(oldIndex) + 1;
          break;
        }
        case src__differs._Edit.update:
        {
          if (!dart.test(hasSplice())) {
            spliceIndex = index;
          }
          spliceAddedCount++;
          index = dart.notNull(index) + 1;
          spliceRemovals[$add](old[$_get](oldIndex));
          oldIndex = dart.notNull(oldIndex) + 1;
          break;
        }
        case src__differs._Edit.add:
        {
          if (!dart.test(hasSplice())) {
            spliceIndex = index;
          }
          spliceAddedCount++;
          index = dart.notNull(index) + 1;
          break;
        }
        case src__differs._Edit.delete:
        {
          if (!dart.test(hasSplice())) {
            spliceIndex = index;
          }
          spliceRemovals[$add](old[$_get](oldIndex));
          oldIndex = dart.notNull(oldIndex) + 1;
          break;
        }
      }
    }
    if (dart.test(hasSplice())) {
      splices[$add](src__records.ListChangeRecord$(E).new(current, spliceIndex, {removed: spliceRemovals, addedCount: spliceAddedCount}));
    }
    if (!dart.test(dart.fn(() => {
      splices = core.List$(src__records.ListChangeRecord$(E)).unmodifiable(splices);
      return true;
    }, VoidTobool())())) dart.assertFailed();
    return splices;
  };
  dart.fn(src__differs._calcSplices, ListOfEAndEqualityOfEAndint__ToListOfListChangeRecordOfE());
  src__differs._intersect = function(start1, end1, start2, end2) {
    return math.min(core.int, end1, end2) - math.max(core.int, start1, start2);
  };
  dart.fn(src__differs._intersect, intAndintAndint__Toint());
  src__differs._mergeSplices = function(E, splices, record) {
    let spliceIndex = record.index;
    let spliceRemoved = record.removed;
    let spliceAdded = record.addedCount;
    let inserted = false;
    let insertionOffset = 0;
    for (let i = 0; i < dart.notNull(splices[$length]); i++) {
      let current = splices[$_get](i);
      current = splices[$_set](i, src__records.ListChangeRecord$(E).new(current.object, dart.notNull(current.index) + insertionOffset, {removed: current.removed, addedCount: current.addedCount}));
      if (inserted) continue;
      let intersectCount = src__differs._intersect(spliceIndex, dart.notNull(spliceIndex) + dart.notNull(spliceRemoved[$length]), current.index, dart.notNull(current.index) + dart.notNull(current.addedCount));
      if (dart.notNull(intersectCount) >= 0) {
        splices[$removeAt](i);
        i--;
        insertionOffset = insertionOffset - (dart.notNull(current.addedCount) - dart.notNull(current.removed[$length]));
        spliceAdded = dart.notNull(spliceAdded) + (dart.notNull(current.addedCount) - dart.notNull(intersectCount));
        let deleteCount = dart.notNull(spliceRemoved[$length]) + dart.notNull(current.removed[$length]) - dart.notNull(intersectCount);
        if (spliceAdded === 0 && deleteCount === 0) {
          inserted = true;
        } else {
          let removed = current.removed[$toList]();
          if (dart.notNull(spliceIndex) < dart.notNull(current.index)) {
            removed[$insertAll](0, spliceRemoved[$getRange](0, dart.notNull(current.index) - dart.notNull(spliceIndex)));
          }
          if (dart.notNull(spliceIndex) + dart.notNull(spliceRemoved[$length]) > dart.notNull(current.index) + dart.notNull(current.addedCount)) {
            removed[$addAll](spliceRemoved[$getRange](dart.notNull(current.index) + dart.notNull(current.addedCount) - dart.notNull(spliceIndex), spliceRemoved[$length]));
          }
          spliceRemoved = removed;
          if (dart.notNull(current.index) < dart.notNull(spliceIndex)) {
            spliceIndex = current.index;
          }
        }
      } else if (dart.notNull(spliceIndex) < dart.notNull(current.index)) {
        inserted = true;
        splices[$insert](i, src__records.ListChangeRecord$(E).new(record.object, spliceIndex, {removed: spliceRemoved, addedCount: spliceAdded}));
        i++;
        let offset = dart.notNull(spliceAdded) - dart.notNull(spliceRemoved[$length]);
        current = splices[$_set](i, src__records.ListChangeRecord$(E).new(current.object, dart.notNull(current.index) + offset, {removed: current.removed, addedCount: current.addedCount}));
        insertionOffset = insertionOffset + offset;
      }
    }
    if (!inserted) {
      splices[$add](src__records.ListChangeRecord$(E).new(record.object, spliceIndex, {removed: spliceRemoved, addedCount: spliceAdded}));
    }
  };
  dart.fn(src__differs._mergeSplices, ListOfListChangeRecordOfEAndListChangeRecordOfETovoid());
  src__differs._createInitialSplices = function(E, list, records) {
    let splices = _interceptors.JSArray$(src__records.ListChangeRecord$(E)).of([]);
    for (let i = 0; i < dart.notNull(records[$length]); i++) {
      src__differs._mergeSplices(E, splices, records[$_get](i));
    }
    return splices;
  };
  dart.fn(src__differs._createInitialSplices, ListOfEAndListOfListChangeRecordOfEToListOfListChangeRecordOfE());
  src__differs.projectListSplices = function(E, list, records, equality) {
    if (equality === void 0) equality = null;
    let t = equality;
    t == null ? equality = new (src__equality.DefaultEquality$(E)).new() : t;
    if (dart.notNull(records[$length]) <= 1) return records;
    let splices = _interceptors.JSArray$(src__records.ListChangeRecord$(E)).of([]);
    let initialSplices = src__differs._createInitialSplices(E, list, records);
    for (let splice of initialSplices) {
      if (splice.addedCount === 1 && splice.removed[$length] === 1) {
        if (!dart.equals(splice.removed[$_get](0), list[$_get](splice.index))) {
          splices[$add](splice);
        }
        continue;
      }
      splices[$addAll](src__differs._calcSplices(E, list, equality, splice.index, dart.notNull(splice.index) + dart.notNull(splice.addedCount), splice.removed, 0, splice.removed[$length]));
    }
    return splices;
  };
  dart.fn(src__differs.projectListSplices, ListOfEAndListOfListChangeRecordOfE__ToListOfListChangeRecordOfE());
  const _is_MapDiffer_default = Symbol('_is_MapDiffer_default');
  src__differs.MapDiffer$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let MapChangeRecordOfK$V = () => (MapChangeRecordOfK$V = dart.constFn(src__records.MapChangeRecord$(K, V)))();
    let JSArrayOfMapChangeRecordOfK$V = () => (JSArrayOfMapChangeRecordOfK$V = dart.constFn(_interceptors.JSArray$(MapChangeRecordOfK$V())))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core.Null, [K, V])))();
    let DifferOfMapOfK$V = () => (DifferOfMapOfK$V = dart.constFn(src__differs.Differ$(MapOfK$V())))();
    class MapDiffer extends core.Object {
      diff(oldValue, newValue) {
        MapOfK$V()._check(oldValue);
        MapOfK$V()._check(newValue);
        if (oldValue == newValue) {
          return dart.constList([], MapChangeRecordOfK$V());
        }
        let changes = JSArrayOfMapChangeRecordOfK$V().of([]);
        oldValue[$forEach](dart.fn((oldK, oldV) => {
          let newV = newValue[$_get](oldK);
          if (newV == null && !dart.test(newValue[$containsKey](oldK))) {
            changes[$add](new (MapChangeRecordOfK$V()).remove(oldK, oldV));
          } else if (!dart.equals(newV, oldV)) {
            changes[$add](new (MapChangeRecordOfK$V()).new(oldK, oldV, newV));
          }
        }, KAndVToNull()));
        newValue[$forEach](dart.fn((newK, newV) => {
          if (!dart.test(oldValue[$containsKey](newK))) {
            changes[$add](new (MapChangeRecordOfK$V()).insert(newK, newV));
          }
        }, KAndVToNull()));
        return src__internal.freezeInDevMode(MapChangeRecordOfK$V(), changes);
      }
    }
    (MapDiffer.new = function() {
    }).prototype = MapDiffer.prototype;
    dart.addTypeTests(MapDiffer);
    MapDiffer.prototype[_is_MapDiffer_default] = true;
    MapDiffer[dart.implements] = () => [DifferOfMapOfK$V()];
    dart.setMethodSignature(MapDiffer, () => ({
      __proto__: dart.getMethods(MapDiffer.__proto__),
      diff: dart.fnType(core.List$(src__records.MapChangeRecord$(K, V)), [core.Object, core.Object])
    }));
    return MapDiffer;
  });
  src__differs.MapDiffer = src__differs.MapDiffer$();
  dart.addTypeTests(src__differs.MapDiffer, _is_MapDiffer_default);
  dart.trackLibraries("packages/observable/src/differs.ddc", {
    "package:observable/src/differs.dart": src__differs
  }, '{"version":3,"sourceRoot":"","sources":["differs.dart","differs/list_differ.dart","differs/map_differ.dart"],"names":[],"mappings":"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","file":"differs.ddc.js"}');
  // Exports:
  return {
    src__differs: src__differs
  };
});

//# sourceMappingURL=differs.ddc.js.map
