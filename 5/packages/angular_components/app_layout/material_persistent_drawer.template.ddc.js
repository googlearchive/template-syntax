define(['dart_sdk', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/app_layout/material_persistent_drawer', 'packages/angular_components/app_layout/material_drawer_base.template', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template'], function(dart_sdk, directive_change_detector, material_persistent_drawer, material_drawer_base, angular, deferred_content_aware) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const app_layout__material_persistent_drawer = material_persistent_drawer.app_layout__material_persistent_drawer;
  const app_layout__material_drawer_base$46template = material_drawer_base.app_layout__material_drawer_base$46template;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware.content__deferred_content_aware$46template;
  const _root = Object.create(null);
  const app_layout__material_persistent_drawer$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  app_layout__material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd = class MaterialPersistentDrawerDirectiveNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = !dart.test(this.instance.visible);
      if (!(this[_expr_0] === currVal_0)) {
        this.updateElemClass(el, 'mat-drawer-collapsed', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.instance.visible;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateElemClass(el, 'mat-drawer-expanded', currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (app_layout__material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[instance$] = instance;
    app_layout__material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.__proto__.new.call(this);
  }).prototype = app_layout__material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.prototype;
  dart.addTypeTests(app_layout__material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd);
  const instance$ = Symbol("MaterialPersistentDrawerDirectiveNgCd.instance");
  dart.setFieldSignature(app_layout__material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd, () => ({
    __proto__: dart.getFields(app_layout__material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(app_layout__material_persistent_drawer.MaterialPersistentDrawerDirective),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(app_layout__material_persistent_drawer$46template, {
    /*app_layout__material_persistent_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_layout__material_persistent_drawer$46template.initReflector = function() {
    if (dart.test(app_layout__material_persistent_drawer$46template._visited)) {
      return;
    }
    app_layout__material_persistent_drawer$46template._visited = true;
    app_layout__material_drawer_base$46template.initReflector();
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
  };
  dart.fn(app_layout__material_persistent_drawer$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/app_layout/material_persistent_drawer.template.ddc", {
    "package:angular_components/app_layout/material_persistent_drawer.template.dart": app_layout__material_persistent_drawer$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_persistent_drawer.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAmBkD;;;;;;sBAIzB,IAAqB,EAAE,EAAkB;AAC9D,UAAW,YAAY,WAAC,aAAQ,QAAQ;AACxC,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,EAAE,EAAE,wBAAwB,SAAS;AACrD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,aAAQ,QAAQ;AAClC,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,EAAE,EAAE,uBAAuB,SAAS;AACpD,qBAAO,GAAG,SAAS;;IAEvB;;0GAZsC,QAAa;IAF9C,aAAO;IACP,aAAO;IAC+B,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;;MAelD,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAM,yDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,wDAAa;EACrB","file":"material_persistent_drawer.template.ddc.js"}');
  // Exports:
  return {
    app_layout__material_persistent_drawer$46template: app_layout__material_persistent_drawer$46template
  };
});

//# sourceMappingURL=material_persistent_drawer.template.ddc.js.map
