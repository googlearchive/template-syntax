define(['dart_sdk', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/angular/imperative_view/imperative_view'], function(dart_sdk, app_view, disposer, imperative_view) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_container_ref = app_view.src__core__linker__view_container_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__view_ref = app_view.src__core__linker__view_ref;
  const src__core__linker__component_loader = app_view.src__core__linker__component_loader;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const _root = Object.create(null);
  const laminate__portal__portal = Object.create(_root);
  const $forEach = dartx.forEach;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FutureOfComponentRef = () => (FutureOfComponentRef = dart.constFn(async.Future$(src__core__linker__component_factory.ComponentRef)))();
  let FutureOfMapOfString$dynamic = () => (FutureOfMapOfString$dynamic = dart.constFn(async.Future$(MapOfString$dynamic())))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let ComponentRefToComponentRef = () => (ComponentRefToComponentRef = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentRef, [src__core__linker__component_factory.ComponentRef])))();
  let ImperativeViewRefToMapOfString$dynamic = () => (ImperativeViewRefToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [utils__angular__imperative_view__imperative_view.ImperativeViewRef])))();
  let StreamControllerOfTemplatePortalDirective = () => (StreamControllerOfTemplatePortalDirective = dart.constFn(async.StreamController$(laminate__portal__portal.TemplatePortalDirective)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _attachedHost = Symbol('_attachedHost');
  const _is_Portal_default = Symbol('_is_Portal_default');
  laminate__portal__portal.Portal$ = dart.generic(T => {
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class Portal extends core.Object {
      attach(host) {
        if (!(host != null)) dart.assertFailed();
        if (dart.test(this.isAttached)) {
          dart.throw(new core.StateError.new('Already attached to host!'));
        } else {
          this[_attachedHost] = host;
          return FutureOfT().as(host.attach(this));
        }
      }
      detach() {
        let currentHost = this[_attachedHost];
        if (!(currentHost != null)) dart.assertFailed();
        this[_attachedHost] = null;
        return currentHost.detach();
      }
      get isAttached() {
        return this[_attachedHost] != null;
      }
      setAttachedHost(host) {
        this[_attachedHost] = host;
      }
    }
    (Portal.new = function() {
      this[_attachedHost] = null;
    }).prototype = Portal.prototype;
    dart.addTypeTests(Portal);
    Portal.prototype[_is_Portal_default] = true;
    dart.setMethodSignature(Portal, () => ({
      __proto__: dart.getMethods(Portal.__proto__),
      attach: dart.fnType(async.Future$(T), [laminate__portal__portal.PortalHost]),
      detach: dart.fnType(async.Future, []),
      setAttachedHost: dart.fnType(dart.void, [laminate__portal__portal.PortalHost])
    }));
    dart.setGetterSignature(Portal, () => ({
      __proto__: dart.getGetters(Portal.__proto__),
      isAttached: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(Portal, () => ({
      __proto__: dart.getFields(Portal.__proto__),
      [_attachedHost]: dart.fieldType(laminate__portal__portal.PortalHost)
    }));
    return Portal;
  });
  laminate__portal__portal.Portal = laminate__portal__portal.Portal$();
  dart.addTypeTests(laminate__portal__portal.Portal, _is_Portal_default);
  const _is_ComponentPortal_default = Symbol('_is_ComponentPortal_default');
  laminate__portal__portal.ComponentPortal$ = dart.generic(T => {
    let ComponentPortalOfT = () => (ComponentPortalOfT = dart.constFn(laminate__portal__portal.ComponentPortal$(T)))();
    class ComponentPortal extends laminate__portal__portal.Portal$(T) {
      get origin() {
        return this[origin$];
      }
      set origin(value) {
        super.origin = value;
      }
      get componentFactory() {
        return this[componentFactory$];
      }
      set componentFactory(value) {
        super.componentFactory = value;
      }
      clone() {
        return new (ComponentPortalOfT()).new(this.componentFactory, {origin: this.origin});
      }
      get component() {
        return dart.wrapType(T);
      }
    }
    (ComponentPortal.new = function(componentFactory, opts) {
      let origin = opts && 'origin' in opts ? opts.origin : null;
      this[componentFactory$] = componentFactory;
      this[origin$] = origin;
      ComponentPortal.__proto__.new.call(this);
    }).prototype = ComponentPortal.prototype;
    dart.addTypeTests(ComponentPortal);
    ComponentPortal.prototype[_is_ComponentPortal_default] = true;
    const origin$ = Symbol("ComponentPortal.origin");
    const componentFactory$ = Symbol("ComponentPortal.componentFactory");
    dart.setMethodSignature(ComponentPortal, () => ({
      __proto__: dart.getMethods(ComponentPortal.__proto__),
      clone: dart.fnType(laminate__portal__portal.ComponentPortal$(T), [])
    }));
    dart.setGetterSignature(ComponentPortal, () => ({
      __proto__: dart.getGetters(ComponentPortal.__proto__),
      component: dart.fnType(core.Type, [])
    }));
    dart.setFieldSignature(ComponentPortal, () => ({
      __proto__: dart.getFields(ComponentPortal.__proto__),
      origin: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef),
      componentFactory: dart.finalFieldType(src__core__linker__component_factory.ComponentFactory)
    }));
    return ComponentPortal;
  });
  laminate__portal__portal.ComponentPortal = laminate__portal__portal.ComponentPortal$();
  dart.addTypeTests(laminate__portal__portal.ComponentPortal, _is_ComponentPortal_default);
  const _locals = Symbol('_locals');
  let const$;
  let const$0;
  let const$1;
  laminate__portal__portal.TemplatePortal = class TemplatePortal extends laminate__portal__portal.Portal$(core.Map$(core.String, dart.dynamic)) {
    get template() {
      return this[template$];
    }
    set template(value) {
      super.template = value;
    }
    get viewContainer() {
      return this[viewContainer$];
    }
    set viewContainer(value) {
      super.viewContainer = value;
    }
    get origin() {
      return this.viewContainer;
    }
    clone() {
      return new laminate__portal__portal.TemplatePortal.new(this.template, this.viewContainer);
    }
    attach(host, locals) {
      if (locals === void 0) locals = const$0 || (const$0 = dart.constMap(core.String, dart.dynamic, []));
      this[_locals] = locals;
      return super.attach(host);
    }
    detach() {
      this[_locals] = const$1 || (const$1 = dart.constMap(core.String, dart.dynamic, []));
      return super.detach();
    }
    get locals() {
      return this[_locals];
    }
  };
  (laminate__portal__portal.TemplatePortal.new = function(template, viewContainer) {
    this[_locals] = const$ || (const$ = dart.constMap(core.String, dart.dynamic, []));
    this[template$] = template;
    this[viewContainer$] = viewContainer;
    laminate__portal__portal.TemplatePortal.__proto__.new.call(this);
    if (!(this.template != null)) dart.assertFailed();
    if (!(this.viewContainer != null)) dart.assertFailed();
  }).prototype = laminate__portal__portal.TemplatePortal.prototype;
  dart.addTypeTests(laminate__portal__portal.TemplatePortal);
  const template$ = Symbol("TemplatePortal.template");
  const viewContainer$ = Symbol("TemplatePortal.viewContainer");
  dart.setMethodSignature(laminate__portal__portal.TemplatePortal, () => ({
    __proto__: dart.getMethods(laminate__portal__portal.TemplatePortal.__proto__),
    clone: dart.fnType(laminate__portal__portal.TemplatePortal, []),
    attach: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [laminate__portal__portal.PortalHost], [MapOfString$dynamic()]),
    detach: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(laminate__portal__portal.TemplatePortal, () => ({
    __proto__: dart.getGetters(laminate__portal__portal.TemplatePortal.__proto__),
    origin: dart.fnType(dart.dynamic, []),
    locals: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(laminate__portal__portal.TemplatePortal, () => ({
    __proto__: dart.getFields(laminate__portal__portal.TemplatePortal.__proto__),
    [_locals]: dart.fieldType(MapOfString$dynamic()),
    template: dart.finalFieldType(src__core__linker__template_ref.TemplateRef),
    viewContainer: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef)
  }));
  laminate__portal__portal.PortalHost = class PortalHost extends core.Object {};
  (laminate__portal__portal.PortalHost.new = function() {
  }).prototype = laminate__portal__portal.PortalHost.prototype;
  dart.addTypeTests(laminate__portal__portal.PortalHost);
  laminate__portal__portal.PortalHost[dart.implements] = () => [utils__disposer__disposer.Disposable];
  const _attachedPortal = Symbol('_attachedPortal');
  const _detachPortal = Symbol('_detachPortal');
  const _isDisposed = Symbol('_isDisposed');
  laminate__portal__portal.BasePortalHost = class BasePortalHost extends core.Object {
    attach(portal) {
      if (!(portal != null)) dart.assertFailed();
      if (dart.test(this[_isDisposed])) {
        dart.throw(new core.StateError.new('Already disposed.'));
      }
      if (dart.test(this.hasAttached)) {
        dart.throw(new core.StateError.new('Already has attached portal!'));
      }
      if (laminate__portal__portal.ComponentPortal.is(portal)) {
        this[_attachedPortal] = portal;
        return this.attachComponentPortal(portal);
      } else if (laminate__portal__portal.TemplatePortal.is(portal)) {
        this[_attachedPortal] = portal;
        return this.attachTemplatePortal(portal);
      } else if (portal == null) {
        dart.throw(new core.ArgumentError.notNull('portal'));
      } else {
        dart.throw(new core.ArgumentError.value(portal, 'portal'));
      }
    }
    static createLocalsMap(viewRef) {
      return new (IdentityMapOfString$dynamic()).new();
    }
    detach() {
      this[_attachedPortal].setAttachedHost(null);
      this[_attachedPortal] = null;
      if (this[_detachPortal] != null) {
        this[_detachPortal]();
        this[_detachPortal] = null;
      }
      return async.Future.value();
    }
    dispose() {
      if (dart.test(this.hasAttached)) {
        this.detach();
      }
      this[_isDisposed] = true;
    }
    get hasAttached() {
      return this[_attachedPortal] != null;
    }
    setPortalDisposer(fn) {
      if (!(this[_detachPortal] == null)) dart.assertFailed();
      this[_detachPortal] = fn;
    }
  };
  (laminate__portal__portal.BasePortalHost.new = function() {
    this[_attachedPortal] = null;
    this[_detachPortal] = null;
    this[_isDisposed] = false;
  }).prototype = laminate__portal__portal.BasePortalHost.prototype;
  dart.addTypeTests(laminate__portal__portal.BasePortalHost);
  laminate__portal__portal.BasePortalHost[dart.implements] = () => [laminate__portal__portal.PortalHost];
  dart.setMethodSignature(laminate__portal__portal.BasePortalHost, () => ({
    __proto__: dart.getMethods(laminate__portal__portal.BasePortalHost.__proto__),
    attach: dart.fnType(async.Future, [laminate__portal__portal.Portal]),
    detach: dart.fnType(async.Future, []),
    dispose: dart.fnType(dart.void, []),
    setPortalDisposer: dart.fnType(dart.void, [VoidTovoid()])
  }));
  dart.setStaticMethodSignature(laminate__portal__portal.BasePortalHost, () => ({createLocalsMap: dart.fnType(core.Map$(core.String, dart.dynamic), [src__core__linker__view_ref.ViewRef])}));
  dart.setGetterSignature(laminate__portal__portal.BasePortalHost, () => ({
    __proto__: dart.getGetters(laminate__portal__portal.BasePortalHost.__proto__),
    hasAttached: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(laminate__portal__portal.BasePortalHost, () => ({
    __proto__: dart.getFields(laminate__portal__portal.BasePortalHost.__proto__),
    [_attachedPortal]: dart.fieldType(laminate__portal__portal.Portal),
    [_detachPortal]: dart.fieldType(VoidTovoid()),
    [_isDisposed]: dart.fieldType(core.bool)
  }));
  const _delegateHost = Symbol('_delegateHost');
  laminate__portal__portal.DelegatingPortalHost = class DelegatingPortalHost extends core.Object {
    get hasAttached() {
      return this[_delegateHost].hasAttached;
    }
    attach(portal) {
      return this[_delegateHost].attach(portal);
    }
    detach() {
      return this[_delegateHost].detach();
    }
    dispose() {
      this[_delegateHost].dispose();
    }
  };
  (laminate__portal__portal.DelegatingPortalHost.new = function(delegateHost) {
    this[_delegateHost] = delegateHost;
  }).prototype = laminate__portal__portal.DelegatingPortalHost.prototype;
  dart.addTypeTests(laminate__portal__portal.DelegatingPortalHost);
  laminate__portal__portal.DelegatingPortalHost[dart.implements] = () => [laminate__portal__portal.PortalHost];
  dart.setMethodSignature(laminate__portal__portal.DelegatingPortalHost, () => ({
    __proto__: dart.getMethods(laminate__portal__portal.DelegatingPortalHost.__proto__),
    attach: dart.fnType(async.Future, [laminate__portal__portal.Portal]),
    detach: dart.fnType(async.Future, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(laminate__portal__portal.DelegatingPortalHost, () => ({
    __proto__: dart.getGetters(laminate__portal__portal.DelegatingPortalHost.__proto__),
    hasAttached: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(laminate__portal__portal.DelegatingPortalHost, () => ({
    __proto__: dart.getFields(laminate__portal__portal.DelegatingPortalHost.__proto__),
    [_delegateHost]: dart.finalFieldType(laminate__portal__portal.PortalHost)
  }));
  const _componentLoader = Symbol('_componentLoader');
  const _viewContainerRef = Symbol('_viewContainerRef');
  laminate__portal__portal.PortalHostDirective = class PortalHostDirective extends laminate__portal__portal.BasePortalHost {
    attachComponentPortal(portal) {
      portal.setAttachedHost(this);
      let viewContainerRef = this[_viewContainerRef];
      if (portal.origin != null) {
        viewContainerRef = portal.origin;
      }
      let ref = this[_componentLoader].loadNextToLocation(dart.dynamic, portal.componentFactory, viewContainerRef);
      this.setPortalDisposer(dart.bind(ref, 'destroy'));
      return FutureOfComponentRef().value(ref);
    }
    attachTemplatePortal(portal) {
      portal.setAttachedHost(this);
      let viewRef = this[_viewContainerRef].createEmbeddedView(portal.template);
      portal.locals[$forEach](dart.bind(viewRef, 'setLocal'));
      this.setPortalDisposer(dart.bind(this[_viewContainerRef], 'clear'));
      return FutureOfMapOfString$dynamic().value(laminate__portal__portal.BasePortalHost.createLocalsMap(viewRef));
    }
    set portal(portal) {
      if (dart.test(this.hasAttached)) {
        this.detach().then(core.Null, dart.fn(_ => {
          if (portal != null) {
            this.attach(portal);
          }
        }, dynamicToNull()));
      } else {
        if (portal != null) {
          this.attach(portal);
        }
      }
    }
  };
  (laminate__portal__portal.PortalHostDirective.new = function(componentLoader, viewContainerRef) {
    this[_componentLoader] = componentLoader;
    this[_viewContainerRef] = viewContainerRef;
    laminate__portal__portal.PortalHostDirective.__proto__.new.call(this);
  }).prototype = laminate__portal__portal.PortalHostDirective.prototype;
  dart.addTypeTests(laminate__portal__portal.PortalHostDirective);
  dart.setMethodSignature(laminate__portal__portal.PortalHostDirective, () => ({
    __proto__: dart.getMethods(laminate__portal__portal.PortalHostDirective.__proto__),
    attachComponentPortal: dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef), [laminate__portal__portal.ComponentPortal]),
    attachTemplatePortal: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [laminate__portal__portal.TemplatePortal])
  }));
  dart.setSetterSignature(laminate__portal__portal.PortalHostDirective, () => ({
    __proto__: dart.getSetters(laminate__portal__portal.PortalHostDirective.__proto__),
    portal: dart.fnType(dart.void, [laminate__portal__portal.Portal])
  }));
  dart.setFieldSignature(laminate__portal__portal.PortalHostDirective, () => ({
    __proto__: dart.getFields(laminate__portal__portal.PortalHostDirective.__proto__),
    [_componentLoader]: dart.finalFieldType(src__core__linker__component_loader.ComponentLoader),
    [_viewContainerRef]: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef)
  }));
  const _hostElement = Symbol('_hostElement');
  const _imperativeViewUtils = Symbol('_imperativeViewUtils');
  laminate__portal__portal.DomPortalHost = class DomPortalHost extends laminate__portal__portal.BasePortalHost {
    attachComponentPortal(portal) {
      if (portal.origin == null) {
        dart.throw(new core.StateError.new('A component hosted in a DomPortalHost must ' + 'have an `origin` set, since the DOM element itself ' + 'is not an Angular component.'));
      }
      return this[_imperativeViewUtils].insertComponent(portal.componentFactory, portal.origin, this[_hostElement]).then(src__core__linker__component_factory.ComponentRef, dart.fn(ref => {
        this.setPortalDisposer(dart.bind(ref, 'destroy'));
        return ref;
      }, ComponentRefToComponentRef()));
    }
    attachTemplatePortal(portal) {
      return this[_imperativeViewUtils].insertAngularView(this[_hostElement], portal.template, portal.viewContainer).then(MapOfString$dynamic(), dart.fn(ref => {
        portal.locals[$forEach](dart.bind(ref.viewRef, 'setLocal'));
        this.setPortalDisposer(dart.bind(ref, 'dispose'));
        return laminate__portal__portal.BasePortalHost.createLocalsMap(ref.viewRef);
      }, ImperativeViewRefToMapOfString$dynamic()));
    }
  };
  (laminate__portal__portal.DomPortalHost.new = function(hostElement, imperativeViewUtils) {
    this[_hostElement] = hostElement;
    this[_imperativeViewUtils] = imperativeViewUtils;
    laminate__portal__portal.DomPortalHost.__proto__.new.call(this);
  }).prototype = laminate__portal__portal.DomPortalHost.prototype;
  dart.addTypeTests(laminate__portal__portal.DomPortalHost);
  dart.setMethodSignature(laminate__portal__portal.DomPortalHost, () => ({
    __proto__: dart.getMethods(laminate__portal__portal.DomPortalHost.__proto__),
    attachComponentPortal: dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef), [laminate__portal__portal.ComponentPortal]),
    attachTemplatePortal: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [laminate__portal__portal.TemplatePortal])
  }));
  dart.setFieldSignature(laminate__portal__portal.DomPortalHost, () => ({
    __proto__: dart.getFields(laminate__portal__portal.DomPortalHost.__proto__),
    [_hostElement]: dart.finalFieldType(html.HtmlElement),
    [_imperativeViewUtils]: dart.finalFieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils)
  }));
  laminate__portal__portal.OnTemplatePortalReady = dart.typedef('OnTemplatePortalReady', () => dart.fnType(dart.void, [laminate__portal__portal.TemplatePortal]));
  const _ready = Symbol('_ready');
  laminate__portal__portal.TemplatePortalDirective = class TemplatePortalDirective extends laminate__portal__portal.TemplatePortal {
    get ready() {
      return this[_ready].stream;
    }
  };
  (laminate__portal__portal.TemplatePortalDirective.new = function(templateRef, viewContainerRef) {
    this[_ready] = StreamControllerOfTemplatePortalDirective().broadcast();
    laminate__portal__portal.TemplatePortalDirective.__proto__.new.call(this, templateRef, viewContainerRef);
    async.scheduleMicrotask(dart.fn(() => {
      this[_ready].add(this);
    }, VoidToNull()));
  }).prototype = laminate__portal__portal.TemplatePortalDirective.prototype;
  dart.addTypeTests(laminate__portal__portal.TemplatePortalDirective);
  dart.setGetterSignature(laminate__portal__portal.TemplatePortalDirective, () => ({
    __proto__: dart.getGetters(laminate__portal__portal.TemplatePortalDirective.__proto__),
    ready: dart.fnType(async.Stream$(laminate__portal__portal.TemplatePortalDirective), [])
  }));
  dart.setFieldSignature(laminate__portal__portal.TemplatePortalDirective, () => ({
    __proto__: dart.getFields(laminate__portal__portal.TemplatePortalDirective.__proto__),
    [_ready]: dart.finalFieldType(StreamControllerOfTemplatePortalDirective())
  }));
  dart.trackLibraries("packages/angular_components/laminate/portal/portal.ddc", {
    "package:angular_components/laminate/portal/portal.dart": laminate__portal__portal
  }, '{"version":3,"sourceRoot":"","sources":["portal.dart"],"names":[],"mappings":"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","file":"portal.ddc.js"}');
  // Exports:
  return {
    laminate__portal__portal: laminate__portal__portal
  };
});

//# sourceMappingURL=portal.ddc.js.map
