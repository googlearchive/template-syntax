define(['dart_sdk', 'packages/angular_components/src/utils/async/disposable_future'], function(dart_sdk, disposable_future) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils__async__disposable_future = disposable_future.src__utils__async__disposable_future;
  const _root = Object.create(null);
  const model__selection__select = Object.create(_root);
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  model__selection__select.CountGetter = dart.typedef('CountGetter', () => dart.fnType(core.int, []));
  model__selection__select.Predicate$ = dart.generic(T => {
    const Predicate = dart.typedef('Predicate', () => dart.fnType(core.bool, [T]));
    return Predicate;
  });
  model__selection__select.Predicate = model__selection__select.Predicate$();
  dart.defineLazy(model__selection__select, {
    /*model__selection__select.alwaysTrue*/get alwaysTrue() {
      return dart.fn(_ => true, dynamicTobool());
    },
    set alwaysTrue(_) {},
    /*model__selection__select.alwaysFalse*/get alwaysFalse() {
      return dart.fn(_ => false, dynamicTobool());
    },
    set alwaysFalse(_) {}
  });
  model__selection__select.Filterable = class Filterable extends core.Object {};
  (model__selection__select.Filterable.new = function() {
  }).prototype = model__selection__select.Filterable.prototype;
  dart.addTypeTests(model__selection__select.Filterable);
  let const$;
  const _is_Parent_default = Symbol('_is_Parent_default');
  model__selection__select.Parent$ = dart.generic((P, C) => {
    let DisposableFutureOfC = () => (DisposableFutureOfC = dart.constFn(src__utils__async__disposable_future.DisposableFuture$(C)))();
    class Parent extends core.Object {
      hasChildren(item) {
        P._check(item);
        return false;
      }
      childrenOf(parent, filterQuery) {
        P._check(parent);
        if (filterQuery === void 0) filterQuery = null;
        return DisposableFutureOfC().fromValue(C.as(const$ || (const$ = dart.constList([], dart.dynamic))));
      }
    }
    (Parent.new = function() {
    }).prototype = Parent.prototype;
    dart.addTypeTests(Parent);
    Parent.prototype[_is_Parent_default] = true;
    dart.setMethodSignature(Parent, () => ({
      __proto__: dart.getMethods(Parent.__proto__),
      hasChildren: dart.fnType(core.bool, [core.Object]),
      childrenOf: dart.fnType(src__utils__async__disposable_future.DisposableFuture$(C), [core.Object], [core.Object])
    }));
    return Parent;
  });
  model__selection__select.Parent = model__selection__select.Parent$();
  dart.addTypeTests(model__selection__select.Parent, _is_Parent_default);
  dart.trackLibraries("packages/angular_components/model/selection/select.ddc", {
    "package:angular_components/model/selection/select.dart": model__selection__select
  }, '{"version":3,"sourceRoot":"","sources":["select.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAcU,mCAAU;YAAG,SAAC,CAAC,IAAK;;;MACpB,oCAAW;YAAG,SAAC,CAAC,IAAK;;;;;;EA8B/B;;;;;;;kBAImB,IAAM;iBAAJ;cAAS;MAAK;iBAIF,MAAQ,EAAG,WAAkB;iBAA3B;oCAAgB;cAC7C,AAAI,gCAA0B,MAAC;MAAc;;;IACnD","file":"select.ddc.js"}');
  // Exports:
  return {
    model__selection__select: model__selection__select
  };
});

//# sourceMappingURL=select.ddc.js.map
