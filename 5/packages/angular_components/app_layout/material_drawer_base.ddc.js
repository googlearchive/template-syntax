define(['dart_sdk', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, deferred_content_aware, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const app_layout__material_drawer_base = Object.create(_root);
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  dart.defineLazy(app_layout__material_drawer_base, {
    /*app_layout__material_drawer_base.animationDuration*/get animationDuration() {
      return dart.const(new core.Duration.new({milliseconds: 500}));
    }
  });
  const _visible = Symbol('_visible');
  const _visibleChange = Symbol('_visibleChange');
  app_layout__material_drawer_base.MaterialDrawerBase = class MaterialDrawerBase extends core.Object {
    get visible() {
      return this[_visible];
    }
    set visible(value) {
      if (value == this[_visible]) return;
      this[_visible] = value;
      if (!dart.test(this[_visible])) {
        async.Timer.new(app_layout__material_drawer_base.animationDuration, dart.fn(() => {
          if (!dart.test(this[_visible])) this[_visibleChange].add(this[_visible]);
        }, VoidToNull()));
      } else {
        this[_visibleChange].add(this[_visible]);
      }
    }
    get contentVisible() {
      return this[_visibleChange].stream;
    }
    toggle() {
      this.visible = !dart.test(this.visible);
    }
    ngOnInit() {
      this[_visibleChange].add(this[_visible]);
    }
  };
  (app_layout__material_drawer_base.MaterialDrawerBase.new = function(opts) {
    let visible = opts && 'visible' in opts ? opts.visible : true;
    this[_visibleChange] = StreamControllerOfbool().broadcast({sync: true});
    this[_visible] = visible;
  }).prototype = app_layout__material_drawer_base.MaterialDrawerBase.prototype;
  dart.addTypeTests(app_layout__material_drawer_base.MaterialDrawerBase);
  app_layout__material_drawer_base.MaterialDrawerBase[dart.implements] = () => [content__deferred_content_aware.DeferredContentAware, src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(app_layout__material_drawer_base.MaterialDrawerBase, () => ({
    __proto__: dart.getMethods(app_layout__material_drawer_base.MaterialDrawerBase.__proto__),
    toggle: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(app_layout__material_drawer_base.MaterialDrawerBase, () => ({
    __proto__: dart.getGetters(app_layout__material_drawer_base.MaterialDrawerBase.__proto__),
    visible: dart.fnType(core.bool, []),
    contentVisible: dart.fnType(async.Stream$(core.bool), [])
  }));
  dart.setSetterSignature(app_layout__material_drawer_base.MaterialDrawerBase, () => ({
    __proto__: dart.getSetters(app_layout__material_drawer_base.MaterialDrawerBase.__proto__),
    visible: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(app_layout__material_drawer_base.MaterialDrawerBase, () => ({
    __proto__: dart.getFields(app_layout__material_drawer_base.MaterialDrawerBase.__proto__),
    [_visible]: dart.fieldType(core.bool),
    [_visibleChange]: dart.finalFieldType(StreamControllerOfbool())
  }));
  dart.trackLibraries("packages/angular_components/app_layout/material_drawer_base.ddc", {
    "package:angular_components/app_layout/material_drawer_base.dart": app_layout__material_drawer_base
  }, '{"version":3,"sourceRoot":"","sources":["material_drawer_base.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAWM,kDAAiB;YAAG,gBAAM,iBAAQ,gBAAe;;;;;;;YAQjC,eAAQ;;gBAGhB,KAAU;AACpB,UAAI,KAAK,IAAI,cAAQ,EAAE;AACvB,oBAAQ,GAAG,KAAK;AAEhB,qBAAK,cAAQ,GAAE;AAEb,QAAI,eAAK,CAAC,kDAAiB,EAAE;AAG3B,yBAAK,cAAQ,GAAE,oBAAc,IAAI,CAAC,cAAQ;;aAEvC;AAEL,4BAAc,IAAI,CAAC,cAAQ;;IAE/B;;YASmC,qBAAc,OAAO;;;AAItD,kBAAO,GAAG,WAAC,YAAO;IACpB;;AAIE,0BAAc,IAAI,CAAC,cAAQ;IAC7B;;;QA1CyB,qDAAU;IAyB7B,oBAAc,GAAG,AAAI,kCAAgC,QAAO;IAzBtB,cAAQ,GAAG,OAAO","file":"material_drawer_base.ddc.js"}');
  // Exports:
  return {
    app_layout__material_drawer_base: app_layout__material_drawer_base
  };
});

//# sourceMappingURL=material_drawer_base.ddc.js.map
