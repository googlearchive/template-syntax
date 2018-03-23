define(['dart_sdk', 'packages/angular_components/material_spinner/material_spinner.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_spinner/material_spinner', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, material_spinner$46scss$46css, view_type, constants, view, app_view_utils, app_view, material_spinner, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_spinner__material_spinner$46scss$46css$46shim = material_spinner$46scss$46css.material_spinner__material_spinner$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_spinner__material_spinner = material_spinner.material_spinner__material_spinner;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const material_spinner__material_spinner$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialSpinnerComponent = () => (AppViewOfMaterialSpinnerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_spinner__material_spinner.MaterialSpinnerComponent)))();
  let AppViewAndintToAppViewOfMaterialSpinnerComponent = () => (AppViewAndintToAppViewOfMaterialSpinnerComponent = dart.constFn(dart.fnType(AppViewOfMaterialSpinnerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialSpinnerComponent = () => (ComponentRefOfMaterialSpinnerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_spinner__material_spinner.MaterialSpinnerComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialSpinnerComponent = () => (ComponentFactoryOfMaterialSpinnerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_spinner__material_spinner.MaterialSpinnerComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_spinner__material_spinner$46template, {
    /*material_spinner__material_spinner$46template.styles$MaterialSpinnerComponent*/get styles$MaterialSpinnerComponent() {
      return dart.constList([material_spinner__material_spinner$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  let const$;
  material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0 = class ViewMaterialSpinnerComponent0 extends src__core__linker__app_view.AppView$(material_spinner__material_spinner.MaterialSpinnerComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'spinner';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'circle left';
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_2].className = 'circle right';
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_3].className = 'circle gap';
      this.addShimC(this[_el_3]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-spinner'));
    let t = material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._renderType;
    t == null ? material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_spinner__material_spinner$46template.styles$MaterialSpinnerComponent) : t;
    this.setupComponentType(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._renderType);
  }).prototype = material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.prototype;
  dart.addTypeTests(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0);
  dart.setMethodSignature(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0, () => ({
    __proto__: dart.getMethods(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_spinner__material_spinner.MaterialSpinnerComponent), [])
  }));
  dart.setFieldSignature(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0, () => ({
    __proto__: dart.getFields(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0, {
    /*material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_spinner__material_spinner$46template.viewFactory_MaterialSpinnerComponent0 = function(parentView, parentIndex) {
    return new material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_spinner__material_spinner$46template.viewFactory_MaterialSpinnerComponent0, AppViewAndintToAppViewOfMaterialSpinnerComponent());
  dart.defineLazy(material_spinner__material_spinner$46template, {
    /*material_spinner__material_spinner$46template.styles$MaterialSpinnerComponentHost*/get styles$MaterialSpinnerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialSpinnerComponent_0_5 = Symbol('_MaterialSpinnerComponent_0_5');
  material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0 = class _ViewMaterialSpinnerComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialSpinnerComponent_0_5] = new material_spinner__material_spinner.MaterialSpinnerComponent.new();
      this[_compView_0].create(this[_MaterialSpinnerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialSpinnerComponent()).new(0, this, this.rootEl, this[_MaterialSpinnerComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSpinnerComponent_0_5] = null;
    material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.prototype;
  dart.addTypeTests(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0);
  dart.setMethodSignature(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0, () => ({
    __proto__: dart.getMethods(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0, () => ({
    __proto__: dart.getFields(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0),
    [_MaterialSpinnerComponent_0_5]: dart.fieldType(material_spinner__material_spinner.MaterialSpinnerComponent)
  }));
  material_spinner__material_spinner$46template.viewFactory_MaterialSpinnerComponentHost0 = function(parentView, parentIndex) {
    return new material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_spinner__material_spinner$46template.viewFactory_MaterialSpinnerComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_spinner__material_spinner$46template, {
    /*material_spinner__material_spinner$46template.MaterialSpinnerComponentNgFactory*/get MaterialSpinnerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSpinnerComponent()).new('material-spinner', material_spinner__material_spinner$46template.viewFactory_MaterialSpinnerComponentHost0, material_spinner__material_spinner$46template._MaterialSpinnerComponentMetadata));
    },
    /*material_spinner__material_spinner$46template._MaterialSpinnerComponentMetadata*/get _MaterialSpinnerComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_spinner__material_spinner$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_spinner__material_spinner$46template.initReflector = function() {
    if (dart.test(material_spinner__material_spinner$46template._visited)) {
      return;
    }
    material_spinner__material_spinner$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_spinner__material_spinner.MaterialSpinnerComponent), material_spinner__material_spinner$46template.MaterialSpinnerComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(material_spinner__material_spinner$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_spinner/material_spinner.template.ddc", {
    "package:angular_components/material_spinner/material_spinner.template.dart": material_spinner__material_spinner$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_spinner.template.dart"],"names":[],"mappings":";;;;QAqCc,IAAO;;;QAjBwC,sDAAO;;;;QAUhD,iCAAO;;;;;;;;;;;;;;;;;MAVP,6EAA+B;YAAG,iBAAO,AAAQ,sDAAD,OAAO;;;;;;;;;;AAevE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AAChD,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACrC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACrC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACrC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;8FAxB8B,UAA2B,EAAE,WAAe;IALvD,WAAK;IACL,WAAK;IACL,WAAK;IACL,WAAK;AAEsD,yGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AAC5K,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,mGAAW;gBAAX,uFAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,6EAA+B;AACrH,2BAAkB,CAAC,uFAAW;EAChC;;;;;;;;4BAKY,IAAO;4BAAP,IAAO;4BAAP,IAAO;4BAAP,IAAO;;;MAVQ,uFAAW;;;;;iGA4BwC,UAA2B,EAAE,WAAe;AAC1H,UAAO,KAAI,+EAA6B,CAAC,UAAU,EAAE,WAAW;EAClE;;;MAEoB,iFAAmC;YAAG;;;;;;;AAQtD,uBAAW,GAAG,IAAI,+EAA6B,CAAC,MAAM;AACtD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,yCAA6B,GAAG,IAAI,+DAAgC;AACpE,uBAAW,OAAO,CAAC,mCAA6B,EAAE,qBAAgB;AAClE,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,8CAA8C,CAAC,GAAG,MAAM,WAAM,EAAE,mCAA6B;IAC1G;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;mGAnBmC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,mCAA6B;AACqB,8GAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;qGAsBjI,UAA2B,EAAE,WAAe;AAC5F,UAAO,KAAI,oFAAkC,CAAC,UAAU,EAAE,WAAW;EACvE;;;MAEyD,+EAAiC;YAAG,gBAAM,kDAAkD,CAAC,oBAAoB,uFAAyC,EAAE,+EAAiC;;MAChP,+EAAiC;YAAG;;MACtC,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAO,oCAAiB,CAAC,0EAAwB,EAAE,+EAAiC;AACpF,IAAM,gCAAa;EACrB","file":"material_spinner.template.ddc.js"}');
  // Exports:
  return {
    material_spinner__material_spinner$46template: material_spinner__material_spinner$46template
  };
});

//# sourceMappingURL=material_spinner.template.ddc.js.map
