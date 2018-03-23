define(['dart_sdk', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/di/injector/empty', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer'], function(dart_sdk, app_view, empty, dom_service, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_ref = app_view.src__core__linker__view_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__view_container_ref = app_view.src__core__linker__view_container_ref;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_loader = app_view.src__core__linker__component_loader;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const _root = Object.create(null);
  const utils__angular__imperative_view__imperative_view = Object.create(_root);
  const $first = dartx.first;
  const $append = dartx.append;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicToImperativeViewRef = () => (dynamicToImperativeViewRef = dart.constFn(dart.fnType(utils__angular__imperative_view__imperative_view.ImperativeViewRef, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _componentLoader = Symbol('_componentLoader');
  const _domService = Symbol('_domService');
  utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils = class AcxImperativeViewUtils extends core.Object {
    insertComponent(componentFactory, viewContainer, intoDomElement, opts) {
      return async.async(src__core__linker__component_factory.ComponentRef, (function* insertComponent() {
        let injector = opts && 'injector' in opts ? opts.injector : null;
        let ref = this[_componentLoader].loadNextToLocation(dart.dynamic, componentFactory, viewContainer, {injector: injector != null ? injector : viewContainer.parentInjector});
        yield this[_domService].onWrite();
        let rootNodes = src__core__linker__view_ref.EmbeddedViewRef.as(ref.hostView).rootNodes;
        intoDomElement[$append](rootNodes[$first]);
        return ref;
      }).bind(this));
    }
    insertAngularView(intoDomElement, templateRef, viewContainer) {
      return this[_domService].onWrite().then(utils__angular__imperative_view__imperative_view.ImperativeViewRef, dart.fn(_ => {
        let viewRef = viewContainer.createEmbeddedView(templateRef);
        for (let rootNode of viewRef.rootNodes) {
          intoDomElement[$append](rootNode);
        }
        return new utils__angular__imperative_view__imperative_view.ImperativeViewRef.__(viewRef, dart.fn(() => {
          let index = viewContainer.indexOf(viewRef);
          if (dart.notNull(index) > -1) viewContainer.remove(index);
        }, VoidToNull()));
      }, dynamicToImperativeViewRef()));
    }
  };
  (utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new = function(componentLoader, domService) {
    this[_componentLoader] = componentLoader;
    this[_domService] = domService;
  }).prototype = utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.prototype;
  dart.addTypeTests(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils);
  dart.setMethodSignature(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, () => ({
    __proto__: dart.getMethods(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.__proto__),
    insertComponent: dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef), [src__core__linker__component_factory.ComponentFactory, src__core__linker__view_container_ref.ViewContainerRef, html.HtmlElement], {injector: src__di__injector__injector.Injector}),
    insertAngularView: dart.fnType(async.Future$(utils__angular__imperative_view__imperative_view.ImperativeViewRef), [html.HtmlElement, src__core__linker__template_ref.TemplateRef, src__core__linker__view_container_ref.ViewContainerRef])
  }));
  dart.setFieldSignature(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, () => ({
    __proto__: dart.getFields(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.__proto__),
    [_componentLoader]: dart.finalFieldType(src__core__linker__component_loader.ComponentLoader),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService)
  }));
  const _disposeFn = Symbol('_disposeFn');
  utils__angular__imperative_view__imperative_view.ImperativeViewRef = class ImperativeViewRef extends core.Object {
    get viewRef() {
      return this[viewRef$];
    }
    set viewRef(value) {
      super.viewRef = value;
    }
    dispose() {
      this[_disposeFn]();
    }
  };
  (utils__angular__imperative_view__imperative_view.ImperativeViewRef.__ = function(viewRef, disposeFn) {
    this[viewRef$] = viewRef;
    this[_disposeFn] = disposeFn;
  }).prototype = utils__angular__imperative_view__imperative_view.ImperativeViewRef.prototype;
  dart.addTypeTests(utils__angular__imperative_view__imperative_view.ImperativeViewRef);
  const viewRef$ = Symbol("ImperativeViewRef.viewRef");
  utils__angular__imperative_view__imperative_view.ImperativeViewRef[dart.implements] = () => [utils__disposer__disposer.Disposable];
  dart.setMethodSignature(utils__angular__imperative_view__imperative_view.ImperativeViewRef, () => ({
    __proto__: dart.getMethods(utils__angular__imperative_view__imperative_view.ImperativeViewRef.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(utils__angular__imperative_view__imperative_view.ImperativeViewRef, () => ({
    __proto__: dart.getFields(utils__angular__imperative_view__imperative_view.ImperativeViewRef.__proto__),
    [_disposeFn]: dart.finalFieldType(VoidTovoid()),
    viewRef: dart.finalFieldType(src__core__linker__view_ref.EmbeddedViewRef)
  }));
  dart.trackLibraries("packages/angular_components/utils/angular/imperative_view/imperative_view.ddc", {
    "package:angular_components/utils/angular/imperative_view/imperative_view.dart": utils__angular__imperative_view__imperative_view
  }, '{"version":3,"sourceRoot":"","sources":["imperative_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;oBAsEuC,gBAAiC,EAClE,aAA8B,EAAE,cAA0B;AACrC;YAAX;AACZ,YAAa,MAAM,sBAAgB,mBAAmB,eAClD,gBAAgB,EAAE,aAAa,aACrB,QAAQ,WAAR,QAAQ,GAAI,aAAa,eAAe;AACtD,cAAM,iBAAW,QAAQ;AACzB,YAAM,2DAAa,GAAG,SAAS,WAA8B;AAC7D,sBAAc,SAAO,CAAC,SAAS,QAAM;AACrC,cAAO,IAAG;MACZ;;sBAQ4C,cAA0B,EAClE,WAAuB,EAAE,aAA8B;AACzD,YAAO,kBAAW,QAAQ,OAAO,qEAAC,QAAC,CAAC;AAClC,YAAI,UAAU,aAAa,mBAAmB,CAAC,WAAW;AAC1D,iBAAW,WAAY,QAAO,UAAU,EAAE;AACxC,wBAAc,SAAO,CAAC,QAAQ;;AAEhC,cAAO,KAAI,qEAAmB,CAAC,OAAO,EAAE;AACtC,cAAI,QAAQ,aAAa,QAAQ,CAAC,OAAO;AACzC,cAAU,aAAN,KAAK,IAAG,CAAC,GAAG,aAAa,OAAO,CAAC,KAAK;;;IAGhD;;0FAlC4B,eAAgB,EAAO,UAAW;IAAlC,sBAAgB,GAAhB,eAAgB;IAAO,iBAAW,GAAX,UAAW;EAAC;;;;;;;;;;;;;;IAwCzC;;;;;;;AAMpB,sBAAU;IACZ;;oFALoB,OAAY,EAAO,SAAU;IAAxB,cAAO,GAAP,OAAO;IAAO,gBAAU,GAAV,SAAU;EAAC","file":"imperative_view.ddc.js"}');
  // Exports:
  return {
    utils__angular__imperative_view__imperative_view: utils__angular__imperative_view__imperative_view
  };
});

//# sourceMappingURL=imperative_view.ddc.js.map
