define(['dart_sdk', 'packages/angular_components/material_icon/material_icon.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_icon/material_icon', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/model/ui/icon.template'], function(dart_sdk, material_icon$46scss$46css, view_type, constants, view, app_view_utils, app_view, material_icon, reflector, angular, icon) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_icon__material_icon$46scss$46css$46shim = material_icon$46scss$46css.material_icon__material_icon$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_icon__material_icon = material_icon.material_icon__material_icon;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const _root = Object.create(null);
  const material_icon__material_icon$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialIconComponent = () => (AppViewOfMaterialIconComponent = dart.constFn(src__core__linker__app_view.AppView$(material_icon__material_icon.MaterialIconComponent)))();
  let AppViewAndintToAppViewOfMaterialIconComponent = () => (AppViewAndintToAppViewOfMaterialIconComponent = dart.constFn(dart.fnType(AppViewOfMaterialIconComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialIconComponent = () => (ComponentRefOfMaterialIconComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_icon__material_icon.MaterialIconComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialIconComponent = () => (ComponentFactoryOfMaterialIconComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_icon__material_icon.MaterialIconComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_icon__material_icon$46template, {
    /*material_icon__material_icon$46template.styles$MaterialIconComponent*/get styles$MaterialIconComponent() {
      return dart.constList([material_icon__material_icon$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  material_icon__material_icon$46template.ViewMaterialIconComponent0 = class ViewMaterialIconComponent0 extends src__core__linker__app_view.AppView$(material_icon__material_icon.MaterialIconComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'i', parentRenderNode);
      this.createAttr(this[_el_0], 'aria-hidden', 'true');
      this[_el_0].className = 'material-icon-i material-icons';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.iconName;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_icon__material_icon$46template.ViewMaterialIconComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_icon__material_icon$46template.ViewMaterialIconComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-icon'));
    let t = material_icon__material_icon$46template.ViewMaterialIconComponent0._renderType;
    t == null ? material_icon__material_icon$46template.ViewMaterialIconComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_icon__material_icon$46template.styles$MaterialIconComponent) : t;
    this.setupComponentType(material_icon__material_icon$46template.ViewMaterialIconComponent0._renderType);
  }).prototype = material_icon__material_icon$46template.ViewMaterialIconComponent0.prototype;
  dart.addTypeTests(material_icon__material_icon$46template.ViewMaterialIconComponent0);
  dart.setMethodSignature(material_icon__material_icon$46template.ViewMaterialIconComponent0, () => ({
    __proto__: dart.getMethods(material_icon__material_icon$46template.ViewMaterialIconComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_icon__material_icon.MaterialIconComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_icon__material_icon$46template.ViewMaterialIconComponent0, () => ({
    __proto__: dart.getFields(material_icon__material_icon$46template.ViewMaterialIconComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_icon__material_icon$46template.ViewMaterialIconComponent0, {
    /*material_icon__material_icon$46template.ViewMaterialIconComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_icon__material_icon$46template.viewFactory_MaterialIconComponent0 = function(parentView, parentIndex) {
    return new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_icon__material_icon$46template.viewFactory_MaterialIconComponent0, AppViewAndintToAppViewOfMaterialIconComponent());
  dart.defineLazy(material_icon__material_icon$46template, {
    /*material_icon__material_icon$46template.styles$MaterialIconComponentHost*/get styles$MaterialIconComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialIconComponent_0_5 = Symbol('_MaterialIconComponent_0_5');
  material_icon__material_icon$46template._ViewMaterialIconComponentHost0 = class _ViewMaterialIconComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(this.rootEl);
      this[_compView_0].create(this[_MaterialIconComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialIconComponent()).new(0, this, this.rootEl, this[_MaterialIconComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_icon__material_icon$46template._ViewMaterialIconComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    material_icon__material_icon$46template._ViewMaterialIconComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_icon__material_icon$46template._ViewMaterialIconComponentHost0.prototype;
  dart.addTypeTests(material_icon__material_icon$46template._ViewMaterialIconComponentHost0);
  dart.setMethodSignature(material_icon__material_icon$46template._ViewMaterialIconComponentHost0, () => ({
    __proto__: dart.getMethods(material_icon__material_icon$46template._ViewMaterialIconComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_icon__material_icon$46template._ViewMaterialIconComponentHost0, () => ({
    __proto__: dart.getFields(material_icon__material_icon$46template._ViewMaterialIconComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  material_icon__material_icon$46template.viewFactory_MaterialIconComponentHost0 = function(parentView, parentIndex) {
    return new material_icon__material_icon$46template._ViewMaterialIconComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_icon__material_icon$46template.viewFactory_MaterialIconComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_icon__material_icon$46template, {
    /*material_icon__material_icon$46template.MaterialIconComponentNgFactory*/get MaterialIconComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialIconComponent()).new('material-icon', material_icon__material_icon$46template.viewFactory_MaterialIconComponentHost0, material_icon__material_icon$46template._MaterialIconComponentMetadata));
    },
    /*material_icon__material_icon$46template._MaterialIconComponentMetadata*/get _MaterialIconComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_icon__material_icon$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_icon__material_icon$46template.initReflector = function() {
    if (dart.test(material_icon__material_icon$46template._visited)) {
      return;
    }
    material_icon__material_icon$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_icon__material_icon.MaterialIconComponent), material_icon__material_icon$46template.MaterialIconComponentNgFactory);
    angular$46template.initReflector();
    model__ui__icon$46template.initReflector();
  };
  dart.fn(material_icon__material_icon$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_icon/material_icon.template.ddc", {
    "package:angular_components/material_icon/material_icon.template.dart": material_icon__material_icon$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_icon.template.dart"],"names":[],"mappings":";;;;QAuCc,IAAO;;;QAhBqC,gDAAO;;;;QAS7C,iCAAO;;;;;;;;;;;;;;;;;;;;MATP,oEAA4B;YAAG,iBAAO,AAAQ,gDAAD,OAAO;;;;;;;;;AAcpE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,qBAAU,CAAC,WAAK,EAAE,eAAe;AACjC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,mBAAO,GALG,AAKA,AAAI,IALG,SAKS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAoC,OAAO,QAAG;AAC9C,cAAmB,IAAI,SAAS;UAA1B,4BAA8B;AACpC,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,GAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;qFA5B2B,UAA2B,EAAE,WAAe;IAJvD,WAAK;IACR,aAAO;IAChB,aAAO;AAEgE,gGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AACzK,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,0FAAW;gBAAX,8EAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,oEAA4B;AAClH,2BAAkB,CAAC,8EAAW;EAChC;;;;;;;;;4BAKY,IAAO;8BAAP,IAAO;;;;MAVQ,8EAAW;;;;;wFAgCkC,UAA2B,EAAE,WAAe;AACpH,UAAO,KAAI,sEAA0B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;MAEoB,wEAAgC;YAAG;;;;;;;AAQnD,uBAAW,GAAG,IAAI,sEAA0B,CAAC,MAAM;AACnD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,sCAA0B,GAAG,IAAI,sDAA6B,CAAC,WAAM;AACrE,uBAAW,OAAO,CAAC,gCAA0B,EAAE,qBAAgB;AAC/D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,2CAA2C,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACpG;;AAIE,UAAK,UAAU;AACf,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;0FAvBgC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,gCAA0B;AACwB,qGAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;4FA0BjI,UAA2B,EAAE,WAAe;AACzF,UAAO,KAAI,2EAA+B,CAAC,UAAU,EAAE,WAAW;EACpE;;;MAEsD,sEAA8B;YAAG,gBAAM,+CAA+C,CAAC,iBAAiB,8EAAsC,EAAE,sEAA8B;;MAC9N,sEAA8B;YAAG;;MACnC,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAO,oCAAiB,CAAC,iEAAqB,EAAE,sEAA8B;AAC9E,IAAM,gCAAa;AACnB,IAAM,wCAAa;EACrB","file":"material_icon.template.ddc.js"}');
  // Exports:
  return {
    material_icon__material_icon$46template: material_icon__material_icon$46template
  };
});

//# sourceMappingURL=material_icon.template.ddc.js.map
