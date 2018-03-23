define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__material_tree__material_tree_expand_state = Object.create(_root);
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _pending = Symbol('_pending');
  const _expanded = Symbol('_expanded');
  const _expandEvents = Symbol('_expandEvents');
  src__material_tree__material_tree_expand_state.MaterialTreeExpandState = class MaterialTreeExpandState extends core.Object {
    get expanded() {
      return this[_expanded];
    }
    set expanded(expanded) {
      if (this[_expanded] == expanded) return;
      this[_expanded] = expanded;
      if (!dart.test(this[_pending])) {
        this[_pending] = true;
        async.scheduleMicrotask(dart.fn(() => {
          this[_pending] = false;
          this[_expandEvents].add(this[_expanded]);
        }, VoidToNull()));
      }
    }
    get expandEvents() {
      return this[_expandEvents].stream.distinct();
    }
  };
  (src__material_tree__material_tree_expand_state.MaterialTreeExpandState.new = function() {
    this[_pending] = false;
    this[_expanded] = false;
    this[_expandEvents] = StreamControllerOfbool().broadcast({sync: true});
  }).prototype = src__material_tree__material_tree_expand_state.MaterialTreeExpandState.prototype;
  dart.addTypeTests(src__material_tree__material_tree_expand_state.MaterialTreeExpandState);
  dart.setGetterSignature(src__material_tree__material_tree_expand_state.MaterialTreeExpandState, () => ({
    __proto__: dart.getGetters(src__material_tree__material_tree_expand_state.MaterialTreeExpandState.__proto__),
    expanded: dart.fnType(core.bool, []),
    expandEvents: dart.fnType(async.Stream$(core.bool), [])
  }));
  dart.setSetterSignature(src__material_tree__material_tree_expand_state.MaterialTreeExpandState, () => ({
    __proto__: dart.getSetters(src__material_tree__material_tree_expand_state.MaterialTreeExpandState.__proto__),
    expanded: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_expand_state.MaterialTreeExpandState, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_expand_state.MaterialTreeExpandState.__proto__),
    [_pending]: dart.fieldType(core.bool),
    [_expanded]: dart.fieldType(core.bool),
    [_expandEvents]: dart.fieldType(StreamControllerOfbool())
  }));
  dart.trackLibraries("packages/angular_components/src/material_tree/material_tree_expand_state.ddc", {
    "package:angular_components/src/material_tree/material_tree_expand_state.dart": src__material_tree__material_tree_expand_state
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_expand_state.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;YAgBuB,gBAAS;;iBACjB,QAAa;AACxB,UAAI,eAAS,IAAI,QAAQ,EAAE;AAC3B,qBAAS,GAAG,QAAQ;AACpB,qBAAK,cAAQ,GAAE;AACb,sBAAQ,GAAG;AAIX,+BAAiB,CAAC;AAChB,wBAAQ,GAAG;AACX,6BAAa,IAAI,CAAC,eAAS;;;IAGjC;;YAIiC,oBAAa,OAAO,SAAS;IAAE;;;IAtB3D,cAAQ,GAAG;IACX,eAAS,GAAG;IAmBM,mBAAa,GAChC,AAAI,kCAA0B,QAAO;EAE3C","file":"material_tree_expand_state.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_expand_state: src__material_tree__material_tree_expand_state
  };
});

//# sourceMappingURL=material_tree_expand_state.ddc.js.map
