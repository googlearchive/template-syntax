define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const reorder_list__reorder_events = Object.create(_root);
  const $_get = dartx._get;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  reorder_list__reorder_events.ReorderEvent = class ReorderEvent extends core.Object {
    get sourceIndex() {
      return this[sourceIndex$];
    }
    set sourceIndex(value) {
      super.sourceIndex = value;
    }
    get destIndex() {
      return this[destIndex$];
    }
    set destIndex(value) {
      super.destIndex = value;
    }
  };
  (reorder_list__reorder_events.ReorderEvent.new = function(sourceIndex, destIndex) {
    this[sourceIndex$] = sourceIndex;
    this[destIndex$] = destIndex;
  }).prototype = reorder_list__reorder_events.ReorderEvent.prototype;
  dart.addTypeTests(reorder_list__reorder_events.ReorderEvent);
  const sourceIndex$ = Symbol("ReorderEvent.sourceIndex");
  const destIndex$ = Symbol("ReorderEvent.destIndex");
  dart.setFieldSignature(reorder_list__reorder_events.ReorderEvent, () => ({
    __proto__: dart.getFields(reorder_list__reorder_events.ReorderEvent.__proto__),
    sourceIndex: dart.finalFieldType(core.int),
    destIndex: dart.finalFieldType(core.int)
  }));
  reorder_list__reorder_events.MultiReorderEvent = class MultiReorderEvent extends reorder_list__reorder_events.ReorderEvent {
    get sourceIndexes() {
      return this[sourceIndexes$];
    }
    set sourceIndexes(value) {
      super.sourceIndexes = value;
    }
  };
  (reorder_list__reorder_events.MultiReorderEvent.new = function(sourceIndexes, destIndex) {
    this[sourceIndexes$] = sourceIndexes;
    reorder_list__reorder_events.MultiReorderEvent.__proto__.new.call(this, sourceIndexes[$_get](0), destIndex);
  }).prototype = reorder_list__reorder_events.MultiReorderEvent.prototype;
  dart.addTypeTests(reorder_list__reorder_events.MultiReorderEvent);
  const sourceIndexes$ = Symbol("MultiReorderEvent.sourceIndexes");
  dart.setFieldSignature(reorder_list__reorder_events.MultiReorderEvent, () => ({
    __proto__: dart.getFields(reorder_list__reorder_events.MultiReorderEvent.__proto__),
    sourceIndexes: dart.finalFieldType(ListOfint())
  }));
  reorder_list__reorder_events.ItemSelectionEvent = class ItemSelectionEvent extends core.Object {
    get selectedIndexes() {
      return this[selectedIndexes];
    }
    set selectedIndexes(value) {
      super.selectedIndexes = value;
    }
  };
  (reorder_list__reorder_events.ItemSelectionEvent.new = function(indexes) {
    this[selectedIndexes] = ListOfint().unmodifiable(indexes);
  }).prototype = reorder_list__reorder_events.ItemSelectionEvent.prototype;
  dart.addTypeTests(reorder_list__reorder_events.ItemSelectionEvent);
  const selectedIndexes = Symbol("ItemSelectionEvent.selectedIndexes");
  dart.setFieldSignature(reorder_list__reorder_events.ItemSelectionEvent, () => ({
    __proto__: dart.getFields(reorder_list__reorder_events.ItemSelectionEvent.__proto__),
    selectedIndexes: dart.finalFieldType(ListOfint())
  }));
  dart.trackLibraries("packages/angular_components/reorder_list/reorder_events.ddc", {
    "package:angular_components/reorder_list/reorder_events.dart": reorder_list__reorder_events
  }, '{"version":3,"sourceRoot":"","sources":["reorder_events.dart"],"names":[],"mappings":";;;;;;;;;;IAMY;;;;;;IACA;;;;;;;4DAEG,WAAgB,EAAE,SAAc;IAA3B,kBAAW,GAAX,WAAW;IAAO,gBAAS,GAAT,SAAS;EAAC;;;;;;;;;;IAQ9B;;;;;;;iEAEE,aAAuB,EAAE,SAAa;IAClD,oBAAa,GAAG,aAAa;AAC7B,4EAAM,aAAa,QAAC,IAAI,SAAS;EAAC;;;;;;;;IAMxB;;;;;;;kEAEG,OAAiB;IAC9B,qBAAe,GAAG,AAAI,wBAAsB,CAAC,OAAO;EAAC","file":"reorder_events.ddc.js"}');
  // Exports:
  return {
    reorder_list__reorder_events: reorder_list__reorder_events
  };
});

//# sourceMappingURL=reorder_events.ddc.js.map
