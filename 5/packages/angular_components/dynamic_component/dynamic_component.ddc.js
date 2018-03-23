define(['dart_sdk', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/linker/dynamic_component_loader', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, app_view, has_renderer, lifecycle_hooks, dynamic_component_loader, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__view_container_ref = app_view.src__core__linker__view_container_ref;
  const src__core__linker__component_loader = app_view.src__core__linker__component_loader;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__linker__dynamic_component_loader = dynamic_component_loader.src__core__linker__dynamic_component_loader;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const dynamic_component__dynamic_component = Object.create(_root);
  let StreamControllerOfComponentRef = () => (StreamControllerOfComponentRef = dart.constFn(async.StreamController$(src__core__linker__component_factory.ComponentRef)))();
  let ComponentRefToNull = () => (ComponentRefToNull = dart.constFn(dart.fnType(core.Null, [src__core__linker__component_factory.ComponentRef])))();
  const _slowComponentLoader = Symbol('_slowComponentLoader');
  const _changeDetectorRef = Symbol('_changeDetectorRef');
  const _componentLoader = Symbol('_componentLoader');
  const _onLoadController = Symbol('_onLoadController');
  const _viewContainerRef = Symbol('_viewContainerRef');
  const _loadDeferred = Symbol('_loadDeferred');
  const _childComponent = Symbol('_childComponent');
  const _componentType = Symbol('_componentType');
  const _typeChanged = Symbol('_typeChanged');
  const _componentFactory = Symbol('_componentFactory');
  const _factoryChanged = Symbol('_factoryChanged');
  const _value = Symbol('_value');
  const _valueChanged = Symbol('_valueChanged');
  const _initialize = Symbol('_initialize');
  const _disposeChildComponent = Symbol('_disposeChildComponent');
  const _updateChildComponent = Symbol('_updateChildComponent');
  dynamic_component__dynamic_component.DynamicComponent = class DynamicComponent extends core.Object {
    set viewContainerRef(value) {
      this[_viewContainerRef] = value;
      if (dart.test(this[_loadDeferred])) {
        this[_initialize]();
        this[_loadDeferred] = false;
      }
    }
    get onLoad() {
      return this[_onLoadController].stream;
    }
    get childComponent() {
      return this[_childComponent];
    }
    ngOnDestroy() {
      this[_disposeChildComponent]();
      this[_viewContainerRef] = null;
    }
    [_disposeChildComponent]() {
      let t = this[_childComponent];
      t == null ? null : t.destroy();
      this[_childComponent] = null;
    }
    set componentType(dartType) {
      if (!dart.equals(this[_componentType], dartType)) this[_typeChanged] = true;
      this[_componentType] = dartType;
    }
    set componentFactory(component) {
      if (!dart.equals(this[_componentFactory], component)) this[_factoryChanged] = true;
      this[_componentFactory] = component;
    }
    set value(s) {
      this[_value] = s;
      this[_valueChanged] = true;
    }
    ngAfterChanges() {
      if (dart.test(this[_factoryChanged]) || dart.test(this[_typeChanged])) {
        this[_disposeChildComponent]();
        if (this[_viewContainerRef] != null) {
          this[_initialize]();
        } else {
          this[_loadDeferred] = true;
        }
      } else if (dart.test(this[_valueChanged])) {
        this[_updateChildComponent]();
      }
      this[_valueChanged] = this[_factoryChanged] = this[_typeChanged] = false;
    }
    [_initialize]() {
      if (this[_componentFactory] != null) {
        if (this[_childComponent] != null) {
          dart.throw('Attempting to overwrite a dynamic component');
        }
        this[_childComponent] = this[_componentLoader].loadNextToLocation(dart.dynamic, this[_componentFactory], this[_viewContainerRef]);
        this[_onLoadController].add(this[_childComponent]);
        this[_updateChildComponent]();
      } else if (this[_componentType] != null) {
        let loadType = this[_componentType];
        this[_slowComponentLoader].loadNextToLocation(dart.dynamic, loadType, this[_viewContainerRef]).then(core.Null, dart.fn(componentRef => {
          if (!dart.equals(loadType, this[_componentType])) {
            componentRef.destroy();
            return;
          }
          if (this[_childComponent] != null) {
            dart.throw('Attempting to overwrite a dynamic component');
          }
          this[_childComponent] = componentRef;
          this[_onLoadController].add(componentRef);
          this[_updateChildComponent]();
        }, ComponentRefToNull()));
      }
    }
    [_updateChildComponent]() {
      this[_changeDetectorRef].markForCheck();
      if (this[_childComponent] != null) {
        if (model__ui__has_renderer.RendersValue.is(this[_childComponent].instance)) {
          dart.dput(this[_childComponent].instance, 'value', this[_value]);
        }
      }
    }
  };
  (dynamic_component__dynamic_component.DynamicComponent.new = function(slowComponentLoader, changeDetectorRef, componentLoader) {
    this[_onLoadController] = StreamControllerOfComponentRef().new();
    this[_viewContainerRef] = null;
    this[_loadDeferred] = false;
    this[_childComponent] = null;
    this[_componentType] = null;
    this[_typeChanged] = false;
    this[_componentFactory] = null;
    this[_factoryChanged] = false;
    this[_value] = null;
    this[_valueChanged] = false;
    this[_slowComponentLoader] = slowComponentLoader;
    this[_changeDetectorRef] = changeDetectorRef;
    this[_componentLoader] = componentLoader;
  }).prototype = dynamic_component__dynamic_component.DynamicComponent.prototype;
  dart.addTypeTests(dynamic_component__dynamic_component.DynamicComponent);
  dynamic_component__dynamic_component.DynamicComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy, src__core__metadata__lifecycle_hooks.AfterChanges];
  dart.setMethodSignature(dynamic_component__dynamic_component.DynamicComponent, () => ({
    __proto__: dart.getMethods(dynamic_component__dynamic_component.DynamicComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_disposeChildComponent]: dart.fnType(dart.void, []),
    ngAfterChanges: dart.fnType(dart.void, []),
    [_initialize]: dart.fnType(dart.void, []),
    [_updateChildComponent]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dynamic_component__dynamic_component.DynamicComponent, () => ({
    __proto__: dart.getGetters(dynamic_component__dynamic_component.DynamicComponent.__proto__),
    onLoad: dart.fnType(async.Stream$(src__core__linker__component_factory.ComponentRef), []),
    childComponent: dart.fnType(src__core__linker__component_factory.ComponentRef, [])
  }));
  dart.setSetterSignature(dynamic_component__dynamic_component.DynamicComponent, () => ({
    __proto__: dart.getSetters(dynamic_component__dynamic_component.DynamicComponent.__proto__),
    viewContainerRef: dart.fnType(dart.void, [src__core__linker__view_container_ref.ViewContainerRef]),
    componentType: dart.fnType(dart.void, [core.Type]),
    componentFactory: dart.fnType(dart.void, [src__core__linker__component_factory.ComponentFactory]),
    value: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(dynamic_component__dynamic_component.DynamicComponent, () => ({
    __proto__: dart.getFields(dynamic_component__dynamic_component.DynamicComponent.__proto__),
    [_slowComponentLoader]: dart.finalFieldType(src__core__linker__dynamic_component_loader.SlowComponentLoader),
    [_componentLoader]: dart.finalFieldType(src__core__linker__component_loader.ComponentLoader),
    [_changeDetectorRef]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_onLoadController]: dart.finalFieldType(StreamControllerOfComponentRef()),
    [_viewContainerRef]: dart.fieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_loadDeferred]: dart.fieldType(core.bool),
    [_childComponent]: dart.fieldType(src__core__linker__component_factory.ComponentRef),
    [_componentType]: dart.fieldType(core.Type),
    [_typeChanged]: dart.fieldType(core.bool),
    [_componentFactory]: dart.fieldType(src__core__linker__component_factory.ComponentFactory),
    [_factoryChanged]: dart.fieldType(core.bool),
    [_value]: dart.fieldType(core.Object),
    [_valueChanged]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/dynamic_component/dynamic_component.ddc", {
    "package:angular_components/dynamic_component/dynamic_component.dart": dynamic_component__dynamic_component
  }, '{"version":3,"sourceRoot":"","sources":["dynamic_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yBAqCuB,KAAsB;AACzC,6BAAiB,GAAG,KAAK;AACzB,oBAAI,mBAAa,GAAE;AACjB,yBAAW;AACX,2BAAa,GAAG;;IAEpB;;YAamC,wBAAiB,OAAO;;;YAMxB,sBAAe;;;AAIhD,kCAAsB;AACtB,6BAAiB,GAAG;IACtB;;AAGE,mCAAe;;AACf,2BAAe,GAAG;IACpB;sBAKkB,QAAa;AAC7B,uBAAI,oBAAc,EAAI,QAAQ,GAAE,kBAAY,GAAG;AAC/C,0BAAc,GAAG,QAAQ;IAC3B;yBAIqB,SAA0B;AAC7C,uBAAI,uBAAiB,EAAI,SAAS,GAAE,qBAAe,GAAG;AACtD,6BAAiB,GAAG,SAAS;IAC/B;cAKU,CAAS;AACjB,kBAAM,GAAG,CAAC;AACV,yBAAa,GAAG;IAClB;;AAIE,oBAAI,qBAAe,eAAI,kBAAY,GAAE;AACnC,oCAAsB;AACtB,YAAI,uBAAiB,IAAI,MAAM;AAC7B,2BAAW;eACN;AACL,6BAAa,GAAG;;YAEb,eAAI,mBAAa,GAAE;AAGxB,mCAAqB;;AAEvB,yBAAa,GAAG,qBAAe,GAAG,kBAAY,GAAG;IACnD;;AAGE,UAAI,uBAAiB,IAAI,MAAM;AAC7B,YAAI,qBAAe,IAAI,MAAM;AAC3B,qBAAM;;AAGR,6BAAe,GAAG,sBAAgB,mBAAmB,eACjD,uBAAiB,EAAE,uBAAiB;AACxC,+BAAiB,IAAI,CAAC,qBAAe;AACrC,mCAAqB;YAChB,KAAI,oBAAc,IAAI,MAAM;AAEjC,YAAK,WAAW,oBAAc;AAC9B,kCAAoB,mBACG,eAAC,QAAQ,EAAE,uBAAiB,MAC1C,YAAC,QAAC,YAAyB;AAClC,2BAAI,QAAQ,EAAI,oBAAc,GAAE;AAG9B,wBAAY,QAAQ;AACpB;;AAEF,cAAI,qBAAe,IAAI,MAAM;AAC3B,uBAAM;;AAER,+BAAe,GAAG,YAAY;AAC9B,iCAAiB,IAAI,CAAC,YAAY;AAClC,qCAAqB;;;IAG3B;;AAGE,8BAAkB,aAAa;AAE/B,UAAI,qBAAe,IAAI,MAAM;AAC3B,oDAAI,qBAAe,SAAS,GAAkB;AAC5C,yCAAe,SAAS,WAAS,YAAM;;;IAG7C;;wEAjGsB,mBAAoB,EAAO,iBAAkB,EAC1D,eAAgB;IA5BnB,uBAAiB,GAAG,AAAI,oCAA8B;IAE3C,uBAAiB;IAC7B,mBAAa,GAAG;IAWR,qBAAe;IACvB,oBAAc;IACd,kBAAY,GAAG;IACH,uBAAiB;IAC7B,qBAAe,GAAG;IAChB,YAAM;IACR,mBAAa,GAAG;IAOC,0BAAoB,GAApB,mBAAoB;IAAO,wBAAkB,GAAlB,iBAAkB;IAC1D,sBAAgB,GAAhB,eAAgB;EAAC","file":"dynamic_component.ddc.js"}');
  // Exports:
  return {
    dynamic_component__dynamic_component: dynamic_component__dynamic_component
  };
});

//# sourceMappingURL=dynamic_component.ddc.js.map
