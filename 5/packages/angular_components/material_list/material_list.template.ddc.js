define(['dart_sdk', 'packages/angular_components/material_list/material_list.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/material_list/material_list', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/di/reflector', 'packages/angular_components/material_list/material_list_size.template', 'packages/angular/angular.template', 'packages/angular_components/model/ui/accepts_width.template', 'packages/angular_components/utils/angular/properties/properties.template'], function(dart_sdk, material_list$46scss$46css, view_type, constants, view, app_view_utils, material_list, app_view, reflector, material_list_size, angular, accepts_width, properties) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_list__material_list$46scss$46css$46shim = material_list$46scss$46css.material_list__material_list$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const material_list__material_list = material_list.material_list__material_list;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__di__reflector = reflector.src__di__reflector;
  const material_list__material_list_size$46template = material_list_size.material_list__material_list_size$46template;
  const angular$46template = angular.angular$46template;
  const model__ui__accepts_width$46template = accepts_width.model__ui__accepts_width$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const _root = Object.create(null);
  const material_list__material_list$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialListComponent = () => (AppViewOfMaterialListComponent = dart.constFn(src__core__linker__app_view.AppView$(material_list__material_list.MaterialListComponent)))();
  let AppViewAndintToAppViewOfMaterialListComponent = () => (AppViewAndintToAppViewOfMaterialListComponent = dart.constFn(dart.fnType(AppViewOfMaterialListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialListComponent = () => (ComponentRefOfMaterialListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_list__material_list.MaterialListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialListComponent = () => (ComponentFactoryOfMaterialListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_list__material_list.MaterialListComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_list__material_list$46template, {
    /*material_list__material_list$46template.styles$MaterialListComponent*/get styles$MaterialListComponent() {
      return dart.constList([material_list__material_list$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _expr_0 = Symbol('_expr_0');
  let const$;
  material_list__material_list$46template.ViewMaterialListComponent0 = class ViewMaterialListComponent0 extends src__core__linker__app_view.AppView$(material_list__material_list.MaterialListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.project(parentRenderNode, 0);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectHostChanges(firstCheck) {
      let currVal_0 = this.ctx.size;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this.rootEl, 'size', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_list__material_list$46template.ViewMaterialListComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    material_list__material_list$46template.ViewMaterialListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-list'));
    let t = material_list__material_list$46template.ViewMaterialListComponent0._renderType;
    t == null ? material_list__material_list$46template.ViewMaterialListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_list__material_list$46template.styles$MaterialListComponent) : t;
    this.setupComponentType(material_list__material_list$46template.ViewMaterialListComponent0._renderType);
  }).prototype = material_list__material_list$46template.ViewMaterialListComponent0.prototype;
  dart.addTypeTests(material_list__material_list$46template.ViewMaterialListComponent0);
  dart.setMethodSignature(material_list__material_list$46template.ViewMaterialListComponent0, () => ({
    __proto__: dart.getMethods(material_list__material_list$46template.ViewMaterialListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_list__material_list.MaterialListComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_list__material_list$46template.ViewMaterialListComponent0, () => ({
    __proto__: dart.getFields(material_list__material_list$46template.ViewMaterialListComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_list__material_list$46template.ViewMaterialListComponent0, {
    /*material_list__material_list$46template.ViewMaterialListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_list__material_list$46template.viewFactory_MaterialListComponent0 = function(parentView, parentIndex) {
    return new material_list__material_list$46template.ViewMaterialListComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_list__material_list$46template.viewFactory_MaterialListComponent0, AppViewAndintToAppViewOfMaterialListComponent());
  dart.defineLazy(material_list__material_list$46template, {
    /*material_list__material_list$46template.styles$MaterialListComponentHost*/get styles$MaterialListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialListComponent_0_5 = Symbol('_MaterialListComponent_0_5');
  material_list__material_list$46template._ViewMaterialListComponentHost0 = class _ViewMaterialListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialListComponent_0_5] = new material_list__material_list.MaterialListComponent.new();
      this[_compView_0].create(this[_MaterialListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialListComponent()).new(0, this, this.rootEl, this[_MaterialListComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_list__material_list.MaterialListComponent) && 0 === nodeIndex) {
        return this[_MaterialListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_list__material_list$46template._ViewMaterialListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialListComponent_0_5] = null;
    material_list__material_list$46template._ViewMaterialListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_list__material_list$46template._ViewMaterialListComponentHost0.prototype;
  dart.addTypeTests(material_list__material_list$46template._ViewMaterialListComponentHost0);
  dart.setMethodSignature(material_list__material_list$46template._ViewMaterialListComponentHost0, () => ({
    __proto__: dart.getMethods(material_list__material_list$46template._ViewMaterialListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_list__material_list$46template._ViewMaterialListComponentHost0, () => ({
    __proto__: dart.getFields(material_list__material_list$46template._ViewMaterialListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_0_5]: dart.fieldType(material_list__material_list.MaterialListComponent)
  }));
  material_list__material_list$46template.viewFactory_MaterialListComponentHost0 = function(parentView, parentIndex) {
    return new material_list__material_list$46template._ViewMaterialListComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_list__material_list$46template.viewFactory_MaterialListComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_list__material_list$46template, {
    /*material_list__material_list$46template.MaterialListComponentNgFactory*/get MaterialListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialListComponent()).new('material-list', material_list__material_list$46template.viewFactory_MaterialListComponentHost0, material_list__material_list$46template._MaterialListComponentMetadata));
    },
    /*material_list__material_list$46template._MaterialListComponentMetadata*/get _MaterialListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_list__material_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_list__material_list$46template.initReflector = function() {
    if (dart.test(material_list__material_list$46template._visited)) {
      return;
    }
    material_list__material_list$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_list__material_list.MaterialListComponent), material_list__material_list$46template.MaterialListComponentNgFactory);
    material_list__material_list_size$46template.initReflector();
    material_list__material_list_size$46template.initReflector();
    angular$46template.initReflector();
    model__ui__accepts_width$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
  };
  dart.fn(material_list__material_list$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_list/material_list.template.ddc", {
    "package:angular_components/material_list/material_list.template.dart": material_list__material_list$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_list.template.dart"],"names":[],"mappings":";;;;QAiCa,IAAO;;;QANsC,gDAAO;;;;QAO7C,iCAAO;;;;;;;;;;;;;;;;;;;;;MAPP,oEAA4B;YAAG,iBAAO,AAAQ,gDAAD,OAAO;;;;;;;AAYpE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,kBAAO,CAAC,gBAAgB,EAAE;AAC1B,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;sBAEuB,UAAe;AACpC,UAAM,YAAY,QAAG,KAAK;AAC1B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,oBAAO,CAAC,WAAM,EAAE,QAAQ,SAAS,gCAAT,SAAS;AACjC,qBAAO,GAAG,SAAS;;IAEvB;;qFApB2B,UAA2B,EAAE,WAAe;IAFnE,aAAO;AAEgE,gGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AACzK,eAAM,GAAG,IAAO,oBAAP,AAAA,AAAQ,IAAD,SAAS,gBAAc,CAAC;AACxC,0FAAW;gBAAX,8EAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,oEAA4B;AAClH,2BAAkB,CAAC,8EAAW;EAChC;;;;;;;;;;;;MAL2B,8EAAW;;;;;wFAwBkC,UAA2B,EAAE,WAAe;AACpH,UAAO,KAAI,sEAA0B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;MAEoB,wEAAgC;YAAG;;;;;;;AAQnD,uBAAW,GAAG,IAAI,sEAA0B,CAAC,MAAM;AACnD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,sCAA0B,GAAG,IAAI,sDAA6B;AAC9D,uBAAW,OAAO,CAAC,gCAA0B,EAAE,qBAAgB;AAC/D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,2CAA2C,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACpG;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAU,iEAAqB,IAAM,MAAK,SAAS,EAAI;AACzE,cAAO,iCAA0B;;AAEnC,YAAO,eAAc;IACvB;;AAIE,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;0FAjCgC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,gCAA0B;AACwB,qGAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;4FAoCjI,UAA2B,EAAE,WAAe;AACzF,UAAO,KAAI,2EAA+B,CAAC,UAAU,EAAE,WAAW;EACpE;;;MAEsD,sEAA8B;YAAG,gBAAM,+CAA+C,CAAC,iBAAiB,8EAAsC,EAAE,sEAA8B;;MAC9N,sEAA8B;YAAG;;MACnC,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAO,oCAAiB,CAAC,iEAAqB,EAAE,sEAA8B;AAC9E,IAAM,0DAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,+DAAa;EACrB","file":"material_list.template.ddc.js"}');
  // Exports:
  return {
    material_list__material_list$46template: material_list__material_list$46template
  };
});

//# sourceMappingURL=material_list.template.ddc.js.map
