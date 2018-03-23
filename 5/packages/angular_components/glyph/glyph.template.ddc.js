define(['dart_sdk', 'packages/angular_components/glyph/glyph.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/glyph/glyph', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/model/ui/icon.template'], function(dart_sdk, glyph$46scss$46css, view_type, constants, view, app_view_utils, app_view, glyph, reflector, angular, icon) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const glyph__glyph$46scss$46css$46shim = glyph$46scss$46css.glyph__glyph$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const glyph__glyph = glyph.glyph__glyph;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const _root = Object.create(null);
  const glyph__glyph$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfGlyphComponent = () => (AppViewOfGlyphComponent = dart.constFn(src__core__linker__app_view.AppView$(glyph__glyph.GlyphComponent)))();
  let AppViewAndintToAppViewOfGlyphComponent = () => (AppViewAndintToAppViewOfGlyphComponent = dart.constFn(dart.fnType(AppViewOfGlyphComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfGlyphComponent = () => (ComponentRefOfGlyphComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(glyph__glyph.GlyphComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfGlyphComponent = () => (ComponentFactoryOfGlyphComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(glyph__glyph.GlyphComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(glyph__glyph$46template, {
    /*glyph__glyph$46template.styles$GlyphComponent*/get styles$GlyphComponent() {
      return dart.constList([glyph__glyph$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  glyph__glyph$46template.ViewGlyphComponent0 = class ViewGlyphComponent0 extends src__core__linker__app_view.AppView$(glyph__glyph.GlyphComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'i', parentRenderNode);
      this.createAttr(this[_el_0], 'aria-hidden', 'true');
      this[_el_0].className = 'glyph-i';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.useMaterialIconsExtended;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), 'material-icons', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let l = _ctx.iconName;
      let currVal_1 = l != null ? l : '';
      if (!(this[_expr_1] === currVal_1)) {
        this[_text_1][$text] = currVal_1;
        this[_expr_1] = currVal_1;
      }
    }
  };
  (glyph__glyph$46template.ViewGlyphComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    glyph__glyph$46template.ViewGlyphComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('glyph'));
    let t = glyph__glyph$46template.ViewGlyphComponent0._renderType;
    t == null ? glyph__glyph$46template.ViewGlyphComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, glyph__glyph$46template.styles$GlyphComponent) : t;
    this.setupComponentType(glyph__glyph$46template.ViewGlyphComponent0._renderType);
  }).prototype = glyph__glyph$46template.ViewGlyphComponent0.prototype;
  dart.addTypeTests(glyph__glyph$46template.ViewGlyphComponent0);
  dart.setMethodSignature(glyph__glyph$46template.ViewGlyphComponent0, () => ({
    __proto__: dart.getMethods(glyph__glyph$46template.ViewGlyphComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(glyph__glyph.GlyphComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(glyph__glyph$46template.ViewGlyphComponent0, () => ({
    __proto__: dart.getFields(glyph__glyph$46template.ViewGlyphComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(glyph__glyph$46template.ViewGlyphComponent0, {
    /*glyph__glyph$46template.ViewGlyphComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  glyph__glyph$46template.viewFactory_GlyphComponent0 = function(parentView, parentIndex) {
    return new glyph__glyph$46template.ViewGlyphComponent0.new(parentView, parentIndex);
  };
  dart.fn(glyph__glyph$46template.viewFactory_GlyphComponent0, AppViewAndintToAppViewOfGlyphComponent());
  dart.defineLazy(glyph__glyph$46template, {
    /*glyph__glyph$46template.styles$GlyphComponentHost*/get styles$GlyphComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _GlyphComponent_0_5 = Symbol('_GlyphComponent_0_5');
  glyph__glyph$46template._ViewGlyphComponentHost0 = class _ViewGlyphComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_GlyphComponent_0_5] = new glyph__glyph.GlyphComponent.new(this.rootEl);
      this[_compView_0].create(this[_GlyphComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfGlyphComponent()).new(0, this, this.rootEl, this[_GlyphComponent_0_5]);
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
  (glyph__glyph$46template._ViewGlyphComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_GlyphComponent_0_5] = null;
    glyph__glyph$46template._ViewGlyphComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = glyph__glyph$46template._ViewGlyphComponentHost0.prototype;
  dart.addTypeTests(glyph__glyph$46template._ViewGlyphComponentHost0);
  dart.setMethodSignature(glyph__glyph$46template._ViewGlyphComponentHost0, () => ({
    __proto__: dart.getMethods(glyph__glyph$46template._ViewGlyphComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(glyph__glyph$46template._ViewGlyphComponentHost0, () => ({
    __proto__: dart.getFields(glyph__glyph$46template._ViewGlyphComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_0_5]: dart.fieldType(glyph__glyph.GlyphComponent)
  }));
  glyph__glyph$46template.viewFactory_GlyphComponentHost0 = function(parentView, parentIndex) {
    return new glyph__glyph$46template._ViewGlyphComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(glyph__glyph$46template.viewFactory_GlyphComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(glyph__glyph$46template, {
    /*glyph__glyph$46template.GlyphComponentNgFactory*/get GlyphComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfGlyphComponent()).new('glyph', glyph__glyph$46template.viewFactory_GlyphComponentHost0, glyph__glyph$46template._GlyphComponentMetadata));
    },
    /*glyph__glyph$46template._GlyphComponentMetadata*/get _GlyphComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*glyph__glyph$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  glyph__glyph$46template.initReflector = function() {
    if (dart.test(glyph__glyph$46template._visited)) {
      return;
    }
    glyph__glyph$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(glyph__glyph.GlyphComponent), glyph__glyph$46template.GlyphComponentNgFactory);
    angular$46template.initReflector();
    model__ui__icon$46template.initReflector();
  };
  dart.fn(glyph__glyph$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/glyph/glyph.template.ddc", {
    "package:angular_components/glyph/glyph.template.dart": glyph__glyph$46template
  }, '{"version":3,"sourceRoot":"","sources":["glyph.template.dart"],"names":[],"mappings":";;;;QAwCc,IAAO;;;QAjB8B,gCAAO;;;;QAUtC,iCAAO;;;;;;;;;;;;;;;;;;;;MAVP,6CAAqB;YAAG,iBAAO,AAAQ,gCAAD,OAAO;;;;;;;;;;AAe7D,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,qBAAU,CAAC,WAAK,EAAE,eAAe;AACjC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,mBAAO,GALG,AAKA,AAAI,IALG,SAKS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAA6B,OAAO,QAAG;AACvC,UAAM,YAAY,IAAI,yBAAyB;AAC/C,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,wBAAW,CAhBH,AAgBI,IAhBG,oBAgBH,WAAK,GAAE,kBAAkB,SAAS;AAC9C,qBAAO,GAAG,SAAS;;AAErB,cAAmB,IAAI,SAAS;UAA1B,4BAA8B;AACpC,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,GAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;8DAjCoB,UAA2B,EAAE,WAAe;IALhD,WAAK;IACR,aAAO;IACf,aAAO;IACR,aAAO;AAEyD,yEAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AAClK,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,mEAAW;gBAAX,uDAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,6CAAqB;AAC3G,2BAAkB,CAAC,uDAAW;EAChC;;;;;;;;;4BAKY,IAAO;8BAAP,IAAO;;;;;MAVQ,uDAAW;;;;;iEAqCoB,UAA2B,EAAE,WAAe;AACtG,UAAO,KAAI,+CAAmB,CAAC,UAAU,EAAE,WAAW;EACxD;;;MAEoB,iDAAyB;YAAG;;;;;;;AAQ5C,uBAAW,GAAG,IAAI,+CAAmB,CAAC,MAAM;AAC5C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,+BAAmB,GAAG,IAAI,+BAAsB,CAAC,WAAM;AACvD,uBAAW,OAAO,CAAC,yBAAmB,EAAE,qBAAgB;AACxD,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,oCAAoC,CAAC,GAAG,MAAM,WAAM,EAAE,yBAAmB;IACtF;;AAIE,UAAK,UAAU;AACf,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;mEAvByB,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,yBAAmB;AAC+B,8EAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;qEA0BjI,UAA2B,EAAE,WAAe;AAClF,UAAO,KAAI,oDAAwB,CAAC,UAAU,EAAE,WAAW;EAC7D;;;MAE+C,+CAAuB;YAAG,gBAAM,wCAAwC,CAAC,SAAS,uDAA+B,EAAE,+CAAuB;;MACnL,+CAAuB;YAAG;;MAC5B,gCAAQ;YAAG;;;;;AAEb,kBAAI,gCAAQ,GAAE;AACZ;;AAEF,uCAAW;AAEX,IAAO,oCAAiB,CAAC,0CAAc,EAAE,+CAAuB;AAChE,IAAM,gCAAa;AACnB,IAAM,wCAAa;EACrB","file":"glyph.template.ddc.js"}');
  // Exports:
  return {
    glyph__glyph$46template: glyph__glyph$46template
  };
});

//# sourceMappingURL=glyph.template.ddc.js.map
