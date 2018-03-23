define(['dart_sdk', 'packages/angular/src/core/linker/app_view'], function(dart_sdk, app_view) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const _root = Object.create(null);
  const model__ui__has_factory = Object.create(_root);
  model__ui__has_factory.FactoryRenderer$ = dart.generic((T, I) => {
    const FactoryRenderer = dart.typedef('FactoryRenderer', () => dart.fnType(src__core__linker__component_factory.ComponentFactory, [I]));
    return FactoryRenderer;
  });
  model__ui__has_factory.FactoryRenderer = model__ui__has_factory.FactoryRenderer$();
  const _is_HasFactoryRenderer_default = Symbol('_is_HasFactoryRenderer_default');
  model__ui__has_factory.HasFactoryRenderer$ = dart.generic((T, I) => {
    let IToComponentFactory = () => (IToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [I])))();
    class HasFactoryRenderer extends core.Object {
      get factoryRenderer() {
        return this[factoryRenderer];
      }
      set factoryRenderer(value) {
        this[factoryRenderer] = value;
      }
    }
    (HasFactoryRenderer.new = function() {
      this[factoryRenderer] = null;
    }).prototype = HasFactoryRenderer.prototype;
    dart.addTypeTests(HasFactoryRenderer);
    HasFactoryRenderer.prototype[_is_HasFactoryRenderer_default] = true;
    const factoryRenderer = Symbol("HasFactoryRenderer.factoryRenderer");
    dart.setFieldSignature(HasFactoryRenderer, () => ({
      __proto__: dart.getFields(HasFactoryRenderer.__proto__),
      factoryRenderer: dart.fieldType(IToComponentFactory())
    }));
    return HasFactoryRenderer;
  });
  model__ui__has_factory.HasFactoryRenderer = model__ui__has_factory.HasFactoryRenderer$();
  dart.addTypeTests(model__ui__has_factory.HasFactoryRenderer, _is_HasFactoryRenderer_default);
  dart.trackLibraries("packages/angular_components/model/ui/has_factory.ddc", {
    "package:angular_components/model/ui/has_factory.dart": model__ui__has_factory
  }, '{"version":3,"sourceRoot":"","sources":["has_factory.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAoBwB;;;;;;;;2BAAe;IACvC","file":"has_factory.ddc.js"}');
  // Exports:
  return {
    model__ui__has_factory: model__ui__has_factory
  };
});

//# sourceMappingURL=has_factory.ddc.js.map
