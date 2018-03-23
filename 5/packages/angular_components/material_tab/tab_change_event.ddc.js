define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const material_tab__tab_change_event = Object.create(_root);
  dart.defineLazy(material_tab__tab_change_event, {
    /*material_tab__tab_change_event.noSelectionIndex*/get noSelectionIndex() {
      return -1;
    }
  });
  material_tab__tab_change_event.TabChangeEvent = class TabChangeEvent extends core.Object {
    get oldIndex() {
      return this[oldIndex$];
    }
    set oldIndex(value) {
      super.oldIndex = value;
    }
    get oldSubIndex() {
      return this[oldSubIndex$];
    }
    set oldSubIndex(value) {
      super.oldSubIndex = value;
    }
    get newIndex() {
      return this[newIndex$];
    }
    set newIndex(value) {
      super.newIndex = value;
    }
    get newSubIndex() {
      return this[newSubIndex$];
    }
    set newSubIndex(value) {
      super.newSubIndex = value;
    }
    get defaultPrevented() {
      return this[defaultPrevented];
    }
    set defaultPrevented(value) {
      this[defaultPrevented] = value;
    }
    preventDefault() {
      this.defaultPrevented = true;
    }
    get isDeEmphasizedTabChange() {
      return this.oldSubIndex !== -1 || this.newSubIndex !== -1;
    }
    toString() {
      return dart.str`TabChangeEvent: [${this.oldIndex}:${this.oldSubIndex}] => [${this.newIndex}:${this.newSubIndex}]`;
    }
  };
  (material_tab__tab_change_event.TabChangeEvent.new = function(oldIndex, newIndex, opts) {
    let oldSubIndex = opts && 'oldSubIndex' in opts ? opts.oldSubIndex : -1;
    let newSubIndex = opts && 'newSubIndex' in opts ? opts.newSubIndex : -1;
    this[defaultPrevented] = false;
    this[oldIndex$] = oldIndex;
    this[newIndex$] = newIndex;
    this[oldSubIndex$] = oldSubIndex;
    this[newSubIndex$] = newSubIndex;
  }).prototype = material_tab__tab_change_event.TabChangeEvent.prototype;
  dart.addTypeTests(material_tab__tab_change_event.TabChangeEvent);
  const oldIndex$ = Symbol("TabChangeEvent.oldIndex");
  const oldSubIndex$ = Symbol("TabChangeEvent.oldSubIndex");
  const newIndex$ = Symbol("TabChangeEvent.newIndex");
  const newSubIndex$ = Symbol("TabChangeEvent.newSubIndex");
  const defaultPrevented = Symbol("TabChangeEvent.defaultPrevented");
  dart.setMethodSignature(material_tab__tab_change_event.TabChangeEvent, () => ({
    __proto__: dart.getMethods(material_tab__tab_change_event.TabChangeEvent.__proto__),
    preventDefault: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_tab__tab_change_event.TabChangeEvent, () => ({
    __proto__: dart.getGetters(material_tab__tab_change_event.TabChangeEvent.__proto__),
    isDeEmphasizedTabChange: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(material_tab__tab_change_event.TabChangeEvent, () => ({
    __proto__: dart.getFields(material_tab__tab_change_event.TabChangeEvent.__proto__),
    oldIndex: dart.finalFieldType(core.int),
    oldSubIndex: dart.finalFieldType(core.int),
    newIndex: dart.finalFieldType(core.int),
    newSubIndex: dart.finalFieldType(core.int),
    defaultPrevented: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(material_tab__tab_change_event.TabChangeEvent, ['toString']);
  dart.trackLibraries("packages/angular_components/material_tab/tab_change_event.ddc", {
    "package:angular_components/material_tab/tab_change_event.dart": material_tab__tab_change_event
  }, '{"version":3,"sourceRoot":"","sources":["tab_change_event.dart"],"names":[],"mappings":";;;;;;;;MAKU,+CAAgB;YAAG,EAAC;;;;IAUlB;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACL;;;;;;;AAMH,2BAAgB,GAAG;IACrB;;YAII,AAAgC,iBAArB,KAAI,EAAgB,IAAI,gBAAW,KAAI,EAAgB;;;YAIlE,6BAAmB,aAAQ,IAAE,gBAAW,SAAO,aAAQ,IAAE,gBAAW;IAAE;;gEAb3D,QAAa,EAAE,QAAa;QACjC,iEAAa,EAAgB;QAAO,iEAAa,EAAgB;IAHtE,sBAAgB,GAAG;IAEJ,eAAQ,GAAR,QAAQ;IAAO,eAAQ,GAAR,QAAQ;IACjC,kBAAW,GAAX,WAAW;IAAyB,kBAAW,GAAX,WAAW;EAAoB","file":"tab_change_event.ddc.js"}');
  // Exports:
  return {
    material_tab__tab_change_event: material_tab__tab_change_event
  };
});

//# sourceMappingURL=tab_change_event.ddc.js.map
