define(['dart_sdk', 'packages/angular_components/material_chips/material_chips.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/material_chips/material_chips', 'packages/angular_components/material_chips/material_chip.template', 'packages/angular_components/material_chips/material_chip', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_chips$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_for, material_chips, material_chip, material_chip$, has_renderer, reflector, angular, selection_model, has_renderer$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_chips__material_chips$46scss$46css$46shim = material_chips$46scss$46css.material_chips__material_chips$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const material_chips__material_chips = material_chips.material_chips__material_chips;
  const material_chips__material_chip$46template = material_chip.material_chips__material_chip$46template;
  const material_chips__material_chip = material_chip$.material_chips__material_chip;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__ui__has_renderer$46template = has_renderer$.model__ui__has_renderer$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_chips__material_chips$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialChipsComponent = () => (AppViewOfMaterialChipsComponent = dart.constFn(src__core__linker__app_view.AppView$(material_chips__material_chips.MaterialChipsComponent)))();
  let AppViewAndintToAppViewOfMaterialChipsComponent = () => (AppViewAndintToAppViewOfMaterialChipsComponent = dart.constFn(dart.fnType(AppViewOfMaterialChipsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialChipsComponent = () => (ComponentRefOfMaterialChipsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_chips__material_chips.MaterialChipsComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialChipsComponent = () => (ComponentFactoryOfMaterialChipsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_chips__material_chips.MaterialChipsComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_chips__material_chips$46template, {
    /*material_chips__material_chips$46template.styles$MaterialChipsComponent*/get styles$MaterialChipsComponent() {
      return dart.constList([material_chips__material_chips$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  material_chips__material_chips$46template.ViewMaterialChipsComponent0 = class ViewMaterialChipsComponent0 extends src__core__linker__app_view.AppView$(material_chips__material_chips.MaterialChipsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], material_chips__material_chips$46template.viewFactory_MaterialChipsComponent1);
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.project(parentRenderNode, 0);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.selectedItems;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_0_9].ngDoCheck();
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (material_chips__material_chips$46template.ViewMaterialChipsComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    material_chips__material_chips$46template.ViewMaterialChipsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-chips'));
    let t = material_chips__material_chips$46template.ViewMaterialChipsComponent0._renderType;
    t == null ? material_chips__material_chips$46template.ViewMaterialChipsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_chips__material_chips$46template.styles$MaterialChipsComponent) : t;
    this.setupComponentType(material_chips__material_chips$46template.ViewMaterialChipsComponent0._renderType);
  }).prototype = material_chips__material_chips$46template.ViewMaterialChipsComponent0.prototype;
  dart.addTypeTests(material_chips__material_chips$46template.ViewMaterialChipsComponent0);
  dart.setMethodSignature(material_chips__material_chips$46template.ViewMaterialChipsComponent0, () => ({
    __proto__: dart.getMethods(material_chips__material_chips$46template.ViewMaterialChipsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chips.MaterialChipsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_chips__material_chips$46template.ViewMaterialChipsComponent0, () => ({
    __proto__: dart.getFields(material_chips__material_chips$46template.ViewMaterialChipsComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_chips__material_chips$46template.ViewMaterialChipsComponent0, {
    /*material_chips__material_chips$46template.ViewMaterialChipsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_chips__material_chips$46template.viewFactory_MaterialChipsComponent0 = function(parentView, parentIndex) {
    return new material_chips__material_chips$46template.ViewMaterialChipsComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_chips__material_chips$46template.viewFactory_MaterialChipsComponent0, AppViewAndintToAppViewOfMaterialChipsComponent());
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialChipComponent_0_5 = Symbol('_MaterialChipComponent_0_5');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$0;
  let const$1;
  material_chips__material_chips$46template._ViewMaterialChipsComponent1 = class _ViewMaterialChipsComponent1 extends src__core__linker__app_view.AppView$(material_chips__material_chips.MaterialChipsComponent) {
    build() {
      this[_compView_0] = new material_chips__material_chip$46template.ViewMaterialChipComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialChipComponent_0_5] = new material_chips__material_chip.MaterialChipComponent.new(this[_el_0]);
      this[_compView_0].create(this[_MaterialChipComponent_0_5], [const$0 || (const$0 = dart.constList([], dart.dynamic)), const$1 || (const$1 = dart.constList([], dart.dynamic))]);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(model__ui__has_renderer.HasRenderer) && 0 === nodeIndex) {
        return this[_MaterialChipComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_chip = this.locals[$_get]('$implicit');
      changed = false;
      let currVal_0 = _ctx.selectionModel;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_MaterialChipComponent_0_5].selectionModel = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.removable;
      if (!(this[_expr_1] == currVal_1)) {
        this[_MaterialChipComponent_0_5].removable = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.itemRenderer;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_MaterialChipComponent_0_5].itemRenderer = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_chip;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_MaterialChipComponent_0_5].value = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
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
  (material_chips__material_chips$46template._ViewMaterialChipsComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialChipComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_chips__material_chips$46template._ViewMaterialChipsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_chips__material_chips$46template.ViewMaterialChipsComponent0._renderType;
  }).prototype = material_chips__material_chips$46template._ViewMaterialChipsComponent1.prototype;
  dart.addTypeTests(material_chips__material_chips$46template._ViewMaterialChipsComponent1);
  dart.setMethodSignature(material_chips__material_chips$46template._ViewMaterialChipsComponent1, () => ({
    __proto__: dart.getMethods(material_chips__material_chips$46template._ViewMaterialChipsComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chips.MaterialChipsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_chips__material_chips$46template._ViewMaterialChipsComponent1, () => ({
    __proto__: dart.getFields(material_chips__material_chips$46template._ViewMaterialChipsComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_chips__material_chip$46template.ViewMaterialChipComponent0),
    [_MaterialChipComponent_0_5]: dart.fieldType(material_chips__material_chip.MaterialChipComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  material_chips__material_chips$46template.viewFactory_MaterialChipsComponent1 = function(parentView, parentIndex) {
    return new material_chips__material_chips$46template._ViewMaterialChipsComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_chips__material_chips$46template.viewFactory_MaterialChipsComponent1, AppViewAndintToAppViewOfMaterialChipsComponent());
  dart.defineLazy(material_chips__material_chips$46template, {
    /*material_chips__material_chips$46template.styles$MaterialChipsComponentHost*/get styles$MaterialChipsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialChipsComponent_0_5 = Symbol('_MaterialChipsComponent_0_5');
  material_chips__material_chips$46template._ViewMaterialChipsComponentHost0 = class _ViewMaterialChipsComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_chips__material_chips$46template.ViewMaterialChipsComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialChipsComponent_0_5] = new material_chips__material_chips.MaterialChipsComponent.new(this[_compView_0].ref);
      this[_compView_0].create(this[_MaterialChipsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialChipsComponent()).new(0, this, this.rootEl, this[_MaterialChipsComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(model__ui__has_renderer.HasRenderer) && 0 === nodeIndex) {
        return this[_MaterialChipsComponent_0_5];
      }
      return notFoundResult;
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
      this[_MaterialChipsComponent_0_5].ngOnDestroy();
    }
  };
  (material_chips__material_chips$46template._ViewMaterialChipsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialChipsComponent_0_5] = null;
    material_chips__material_chips$46template._ViewMaterialChipsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_chips__material_chips$46template._ViewMaterialChipsComponentHost0.prototype;
  dart.addTypeTests(material_chips__material_chips$46template._ViewMaterialChipsComponentHost0);
  dart.setMethodSignature(material_chips__material_chips$46template._ViewMaterialChipsComponentHost0, () => ({
    __proto__: dart.getMethods(material_chips__material_chips$46template._ViewMaterialChipsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_chips__material_chips$46template._ViewMaterialChipsComponentHost0, () => ({
    __proto__: dart.getFields(material_chips__material_chips$46template._ViewMaterialChipsComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_chips__material_chips$46template.ViewMaterialChipsComponent0),
    [_MaterialChipsComponent_0_5]: dart.fieldType(material_chips__material_chips.MaterialChipsComponent)
  }));
  material_chips__material_chips$46template.viewFactory_MaterialChipsComponentHost0 = function(parentView, parentIndex) {
    return new material_chips__material_chips$46template._ViewMaterialChipsComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_chips__material_chips$46template.viewFactory_MaterialChipsComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_chips__material_chips$46template, {
    /*material_chips__material_chips$46template.MaterialChipsComponentNgFactory*/get MaterialChipsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialChipsComponent()).new('material-chips', material_chips__material_chips$46template.viewFactory_MaterialChipsComponentHost0, material_chips__material_chips$46template._MaterialChipsComponentMetadata));
    },
    /*material_chips__material_chips$46template._MaterialChipsComponentMetadata*/get _MaterialChipsComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_chips__material_chips$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_chips__material_chips$46template.initReflector = function() {
    if (dart.test(material_chips__material_chips$46template._visited)) {
      return;
    }
    material_chips__material_chips$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_chips__material_chips.MaterialChipsComponent), material_chips__material_chips$46template.MaterialChipsComponentNgFactory);
    angular$46template.initReflector();
    material_chips__material_chip$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.fn(material_chips__material_chips$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_chips/material_chips.template.ddc", {
    "package:angular_components/material_chips/material_chips.template.dart": material_chips__material_chips$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_chips.template.dart"],"names":[],"mappings":";;;;QA0Ca,IAAO;;;QARuC,kDAAO;;;;QAS9C,iCAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MATP,uEAA6B;YAAG,iBAAO,AAAQ,kDAAD,OAAO;;;;;;;;;AAcrE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,sBAAgB,SAAO,CAAC,SAAS;AACjC,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACrD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,6EAAmC;AAC5F,sBAAU,GAAG,IAAI,yCAAa,CAAC,cAAQ,EAAE,gBAAgB;AACzD,kBAAO,CAAC,gBAAgB,EAAE;AAC1B,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAqC,OAAO,QAAG;AAC/C,UAAM,YAAY,IAAI,cAAc;AACpC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,sBAAU,UAAU;AACpB,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;IACV;;wFAlC4B,UAA2B,EAAE,WAAe;IAJ1D,cAAQ;IACR,gBAAU;IACpB,aAAO;AAEiE,mGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AAC1K,eAAM,GAAG,IAAO,oBAAP,AAAA,AAAQ,IAAD,SAAS,gBAAc,CAAC;AACxC,6FAAW;gBAAX,iFAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,uEAA6B;AACnH,2BAAkB,CAAC,iFAAW;EAChC;;;;;;;;;;;;;;;MAL2B,iFAAW;;;;;2FAsCoC,UAA2B,EAAE,WAAe;AACtH,UAAO,KAAI,yEAA2B,CAAC,UAAU,EAAE,WAAW;EAChE;;;;;;;;;;;;AAeI,uBAAW,GAAG,IAAI,uEAAmC,CAAC,MAAM;AAC5D,iBAAK,GAAG,iBAAW,OAAO;AAC1B,mBAAQ,CAvDC,AAuDA,IAvDO,oBAuDP,WAAK;AACd,sCAA0B,GAAG,IAAI,uDAA8B,CAAC,WAAK;AACrE,uBAAW,OAAO,CAAC,gCAA0B,EAAE,CAAC,yDAAU;AAC1D,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAW,kDAAW,IAAM,MAAK,SAAS,EAAI;AAChE,cAAO,iCAA0B;;AAEnC,YAAO,eAAc;IACvB;;AAIE,UAAqC,OAAO,QAAG;AAC/C,UAAK,UAAU;AACf,UAAc,aAAa,WAAM,QAAC;AAClC,aAAO,GAAG;AACV,UAAM,YAAY,IAAI,eAAe;AACrC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wCAA0B,eAAe,GAAG,SAAS;AACrD,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU;AAChC,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,wCAA0B,UAAU,GAAG,SAAS;AAChD,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,aAAa;AACnC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wCAA0B,aAAa,GAAG,SAAS;AACnD,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,UAAU;AAC5B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wCAA0B,MAAM,GAAG,SAAS;AAC5C,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;yFA7D6B,UAA2B,EAAE,WAAe;IAPzD,WAAK;IACe,iBAAW;IAChB,gCAA0B;IACrD,aAAO;IACN,aAAO;IACR,aAAO;IACP,aAAO;AACkE,oGAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC9L,sBAAa,GAAG,qEAA2B,YAAY;EACzD;;;;;;;;;;;4BAlDW,IAAO;;;;;;;;2FAgHwD,UAA2B,EAAE,WAAe;AACtH,UAAO,KAAI,0EAA4B,CAAC,UAAU,EAAE,WAAW;EACjE;;;MAEoB,2EAAiC;YAAG;;;;;;AAQpD,uBAAW,GAAG,IAAI,yEAA2B,CAAC,MAAM;AACpD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,uCAA2B,GAAG,IAAI,yDAA8B,CAAC,iBAAW,IAAI;AAChF,uBAAW,OAAO,CAAC,iCAA2B,EAAE,qBAAgB;AAChE,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,4CAA4C,CAAC,GAAG,MAAM,WAAM,EAAE,iCAA2B;IACtG;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAW,kDAAW,IAAM,MAAK,SAAS,EAAI;AAChE,cAAO,kCAA2B;;AAEpC,YAAO,eAAc;IACvB;;AAIE,UAAK,UAAU;AACf,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;AACX,uCAA2B,YAAY;IACzC;;6FAhCiC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,iCAA2B;AACuB,wGAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;+FAmCjI,UAA2B,EAAE,WAAe;AAC1F,UAAO,KAAI,8EAAgC,CAAC,UAAU,EAAE,WAAW;EACrE;;;MAEuD,yEAA+B;YAAG,gBAAM,gDAAgD,CAAC,kBAAkB,iFAAuC,EAAE,yEAA+B;;MACpO,yEAA+B;YAAG;;MACpC,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAO,oCAAiB,CAAC,oEAAsB,EAAE,yEAA+B;AAChF,IAAM,gCAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,kDAAa;EACrB","file":"material_chips.template.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chips$46template: material_chips__material_chips$46template
  };
});

//# sourceMappingURL=material_chips.template.ddc.js.map
