define(['dart_sdk', 'packages/angular_components/highlighted_text/highlighted_text.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/highlighted_text/highlighted_value', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular_components/model/ui/highlight_provider', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/highlighted_text/highlighted_text.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/highlight_provider.template', 'packages/angular_components/model/ui/highlighted_text_model.template'], function(dart_sdk, highlighted_text$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_for, highlighted_value, highlighted_text_model, highlight_provider, reflector, angular, highlighted_text, has_renderer, highlight_provider$, highlighted_text_model$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const highlighted_text__highlighted_text$46scss$46css$46shim = highlighted_text$46scss$46css.highlighted_text__highlighted_text$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const highlighted_text__highlighted_value = highlighted_value.highlighted_text__highlighted_value;
  const model__ui__highlighted_text_model = highlighted_text_model.model__ui__highlighted_text_model;
  const model__ui__highlight_provider = highlight_provider.model__ui__highlight_provider;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const highlighted_text__highlighted_text$46template = highlighted_text.highlighted_text__highlighted_text$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const model__ui__highlight_provider$46template = highlight_provider$.model__ui__highlight_provider$46template;
  const model__ui__highlighted_text_model$46template = highlighted_text_model$.model__ui__highlighted_text_model$46template;
  const _root = Object.create(null);
  const highlighted_text__highlighted_value$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHighlightedValueComponent = () => (AppViewOfHighlightedValueComponent = dart.constFn(src__core__linker__app_view.AppView$(highlighted_text__highlighted_value.HighlightedValueComponent)))();
  let AppViewAndintToAppViewOfHighlightedValueComponent = () => (AppViewAndintToAppViewOfHighlightedValueComponent = dart.constFn(dart.fnType(AppViewOfHighlightedValueComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHighlightedValueComponent = () => (ComponentRefOfHighlightedValueComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_value.HighlightedValueComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHighlightedValueComponent = () => (ComponentFactoryOfHighlightedValueComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(highlighted_text__highlighted_value.HighlightedValueComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(highlighted_text__highlighted_value$46template, {
    /*highlighted_text__highlighted_value$46template.styles$HighlightedValueComponent*/get styles$HighlightedValueComponent() {
      return dart.constList([highlighted_text__highlighted_text$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0 = class ViewHighlightedValueComponent0 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_value.HighlightedValueComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponent1);
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.segments;
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
  (highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('highlight-value'));
    let t = highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0._renderType;
    t == null ? highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, highlighted_text__highlighted_value$46template.styles$HighlightedValueComponent) : t;
    this.setupComponentType(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0._renderType);
  }).prototype = highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.prototype;
  dart.addTypeTests(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0);
  dart.setMethodSignature(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_value.HighlightedValueComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0, {
    /*highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponent0 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.new(parentView, parentIndex);
  };
  dart.fn(highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponent0, AppViewAndintToAppViewOfHighlightedValueComponent());
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _expr_1 = Symbol('_expr_1');
  highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1 = class _ViewHighlightedValueComponent1 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_value.HighlightedValueComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this[_el_0].className = 'text-segment';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_segment = model__ui__highlighted_text_model.HighlightedTextSegment._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_segment.isHighlighted;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), 'segment-highlight', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_segment.text);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_1][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0._renderType;
  }).prototype = highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1.prototype;
  dart.addTypeTests(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1);
  dart.setMethodSignature(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_value.HighlightedValueComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponent1 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_value$46template._ViewHighlightedValueComponent1.new(parentView, parentIndex);
  };
  dart.fn(highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponent1, AppViewAndintToAppViewOfHighlightedValueComponent());
  dart.defineLazy(highlighted_text__highlighted_value$46template, {
    /*highlighted_text__highlighted_value$46template.styles$HighlightedValueComponentHost*/get styles$HighlightedValueComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HighlightedValueComponent_0_5 = Symbol('_HighlightedValueComponent_0_5');
  highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0 = class _ViewHighlightedValueComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HighlightedValueComponent_0_5] = new highlighted_text__highlighted_value.HighlightedValueComponent.new(model__ui__highlight_provider.HighlightProvider._check(this.injectorGet(dart.wrapType(model__ui__highlight_provider.HighlightProvider), this.viewData.parentIndex)));
      this[_compView_0].create(this[_HighlightedValueComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHighlightedValueComponent()).new(0, this, this.rootEl, this[_HighlightedValueComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(highlighted_text__highlighted_value.HighlightedValueComponent) && 0 === nodeIndex) {
        return this[_HighlightedValueComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HighlightedValueComponent_0_5] = null;
    highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0.prototype;
  dart.addTypeTests(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0);
  dart.setMethodSignature(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(highlighted_text__highlighted_value$46template.ViewHighlightedValueComponent0),
    [_HighlightedValueComponent_0_5]: dart.fieldType(highlighted_text__highlighted_value.HighlightedValueComponent)
  }));
  highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponentHost0 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_value$46template._ViewHighlightedValueComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(highlighted_text__highlighted_value$46template, {
    /*highlighted_text__highlighted_value$46template.HighlightedValueComponentNgFactory*/get HighlightedValueComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHighlightedValueComponent()).new('highlight-value', highlighted_text__highlighted_value$46template.viewFactory_HighlightedValueComponentHost0, highlighted_text__highlighted_value$46template._HighlightedValueComponentMetadata));
    },
    /*highlighted_text__highlighted_value$46template._HighlightedValueComponentMetadata*/get _HighlightedValueComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*highlighted_text__highlighted_value$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  highlighted_text__highlighted_value$46template.initReflector = function() {
    if (dart.test(highlighted_text__highlighted_value$46template._visited)) {
      return;
    }
    highlighted_text__highlighted_value$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(highlighted_text__highlighted_value.HighlightedValueComponent), highlighted_text__highlighted_value$46template.HighlightedValueComponentNgFactory);
    angular$46template.initReflector();
    highlighted_text__highlighted_text$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    model__ui__highlight_provider$46template.initReflector();
    model__ui__highlighted_text_model$46template.initReflector();
  };
  dart.fn(highlighted_text__highlighted_value$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_value.template.ddc", {
    "package:angular_components/highlighted_text/highlighted_value.template.dart": highlighted_text__highlighted_value$46template
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_value.template.dart"],"names":[],"mappings":";;;;QA0Fc,IAAO;;;QAzDyC,sDAAO;;;;QASjD,iCAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MATP,+EAAgC;YAAG,iBAAO,AAAQ,sDAAD,OAAO;;;;;;;;;AAcxE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,sBAAgB,SAAO,CAAC,SAAS;AACjC,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACrD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,qFAAsC;AAC/F,sBAAU,GAAG,IAAI,yCAAa,CAAC,cAAQ,EAAE,gBAAgB;AACzD,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAwC,OAAO,QAAG;AAClD,UAAM,YAAY,IAAI,SAAS;AAC/B,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,sBAAU,UAAU;AACpB,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;IACV;;gGAjC+B,UAA2B,EAAE,WAAe;IAJ7D,cAAQ;IACR,gBAAU;IACpB,aAAO;AAEoE,2GAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC/K,eAAM,GAAG,AAiDC,IAAO,oBAjDR,AAAQ,AAiDP,IAAO,SAjDQ,gBAAc,CAAC;AACxC,qGAAW;gBAAX,yFAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,+EAAgC;AACtH,2BAAkB,CAAC,yFAAW;EAChC;;;;;;;;;;;;;;;MAL2B,yFAAW;;;;;mGAqC0C,UAA2B,EAAE,WAAe;AAC5H,UAAO,KAAI,iFAA8B,CAAC,UAAU,EAAE,WAAW;EACnE;;;;;;;AAYI,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,mBAAO,GAJG,AAIA,AAAI,IAJG,SAIS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAsC,gFAAgB,WAAM,QAAC;AAC7D,UAAM,YAAY,aAAa,cAAc;AAC7C,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,wBAAW,CAfH,AAeI,IAfG,oBAeH,WAAK,GAAE,qBAAqB,SAAS;AACjD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAlEU,AAkEE,AAAQ,iCAlEH,aAkEe,CAAC,aAAa,KAAK;AACzD,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;iGA5BgC,UAA2B,EAAE,WAAe;IAJ5D,WAAK;IACR,aAAO;IACf,aAAO;IACR,aAAO;AACqE,4GAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACjM,sBAAa,GAAG,6EAA8B,YAAY;EAC5D;;;;;;;;;4BAGY,IAAO;8BAAP,IAAO;;;;mGA0B6D,UAA2B,EAAE,WAAe;AAC5H,UAAO,KAAI,kFAA+B,CAAC,UAAU,EAAE,WAAW;EACpE;;;MAEoB,mFAAoC;YAAG;;;;;;;AAQvD,uBAAW,GAAG,IAAI,iFAA8B,CAAC,MAAM;AACvD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,0CAA8B,GAAG,IAAI,iEAAiC,wDAAC,gBAAgB,CAAU,8DAAiB,EAAE,aAAQ,YAAY;AACxI,uBAAW,OAAO,CAAC,oCAA8B,EAAE,qBAAgB;AACnE,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,+CAA+C,CAAC,GAAG,MAAM,WAAM,EAAE,oCAA8B;IAC5G;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAU,4EAAyB,IAAM,MAAK,SAAS,EAAI;AAC7E,cAAO,qCAA8B;;AAEvC,YAAO,eAAc;IACvB;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;qGA3BoC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,oCAA8B;AACoB,gHAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;uGA8BjI,UAA2B,EAAE,WAAe;AAC7F,UAAO,KAAI,sFAAmC,CAAC,UAAU,EAAE,WAAW;EACxE;;;MAE0D,iFAAkC;YAAG,gBAAM,mDAAmD,CAAC,mBAAmB,yFAA0C,EAAE,iFAAkC;;MACpP,iFAAkC;YAAG;;MACvC,uDAAQ;YAAG;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAO,oCAAiB,CAAC,4EAAyB,EAAE,iFAAkC;AACtF,IAAM,gCAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,0DAAa;EACrB","file":"highlighted_value.template.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_value$46template: highlighted_text__highlighted_value$46template
  };
});

//# sourceMappingURL=highlighted_value.template.ddc.js.map
