define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/model/a11y/active_item_mixin', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, disposer, button_decorator, active_item_mixin, lifecycle_hooks, material_dropdown_base, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const model__a11y__active_item_mixin = active_item_mixin.model__a11y__active_item_mixin;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const _root = Object.create(null);
  const material_list__material_list_item = Object.create(_root);
  let StreamSubscriptionOfUIEvent = () => (StreamSubscriptionOfUIEvent = dart.constFn(async.StreamSubscription$(html.UIEvent)))();
  const _dropdown = Symbol('_dropdown');
  const _hostTabIndex = Symbol('_hostTabIndex');
  const _disposer = Symbol('_disposer');
  const ButtonDirective_ActiveItemMixin$ = class ButtonDirective_ActiveItemMixin extends button_decorator__button_decorator.ButtonDirective {};
  (ButtonDirective_ActiveItemMixin$.new = function(element) {
    model__a11y__active_item_mixin.ActiveItemMixin.new.call(this);
    ButtonDirective_ActiveItemMixin$.__proto__.new.call(this, element);
  }).prototype = ButtonDirective_ActiveItemMixin$.prototype;
  dart.mixinMembers(ButtonDirective_ActiveItemMixin$, model__a11y__active_item_mixin.ActiveItemMixin);
  material_list__material_list_item.MaterialListItemComponent = class MaterialListItemComponent extends ButtonDirective_ActiveItemMixin$ {
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    get hostTabIndex() {
      return this[_hostTabIndex];
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
    }
    get domService() {
      return this[domService$];
    }
    set domService(value) {
      this[domService$] = value;
    }
    get closeOnActivate() {
      return this[closeOnActivate];
    }
    set closeOnActivate(value) {
      this[closeOnActivate] = value;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
    handleActivate(_) {
      if (dart.test(this.closeOnActivate)) {
        this[_dropdown] == null ? null : this[_dropdown].close();
      }
    }
  };
  (material_list__material_list_item.MaterialListItemComponent.new = function(element, domService, dropdown, hostTabIndex, role) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[closeOnActivate] = true;
    this[element$] = element;
    this[domService$] = domService;
    this[_dropdown] = dropdown;
    this[_hostTabIndex] = hostTabIndex;
    this[role$] = role != null ? role : 'button';
    material_list__material_list_item.MaterialListItemComponent.__proto__.new.call(this, element);
    if (this[_dropdown] != null) {
      this[_disposer].addDisposable(StreamSubscriptionOfUIEvent(), this.trigger.listen(dart.bind(this, 'handleActivate')));
    }
  }).prototype = material_list__material_list_item.MaterialListItemComponent.prototype;
  dart.addTypeTests(material_list__material_list_item.MaterialListItemComponent);
  const role$ = Symbol("MaterialListItemComponent.role");
  const element$ = Symbol("MaterialListItemComponent.element");
  const domService$ = Symbol("MaterialListItemComponent.domService");
  const closeOnActivate = Symbol("MaterialListItemComponent.closeOnActivate");
  material_list__material_list_item.MaterialListItemComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_list__material_list_item.MaterialListItemComponent, () => ({
    __proto__: dart.getMethods(material_list__material_list_item.MaterialListItemComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    handleActivate: dart.fnType(dart.void, [html.UIEvent])
  }));
  dart.setFieldSignature(material_list__material_list_item.MaterialListItemComponent, () => ({
    __proto__: dart.getFields(material_list__material_list_item.MaterialListItemComponent.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_dropdown]: dart.finalFieldType(mixins__material_dropdown_base.DropdownHandle),
    role: dart.finalFieldType(core.String),
    [_hostTabIndex]: dart.finalFieldType(core.String),
    element: dart.fieldType(html.HtmlElement),
    domService: dart.fieldType(utils__browser__dom_service__dom_service.DomService),
    closeOnActivate: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_list/material_list_item.ddc", {
    "package:angular_components/material_list/material_list_item.dart": material_list__material_list_item
  }, '{"version":3,"sourceRoot":"","sources":["material_list_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IA6De;;;;;;;YAKc,oBAAa;;IAGxB;;;;;;IAGL;;;;;;IAkBN;;;;;;;AAIH,qBAAS,QAAQ;IACnB;mBAEoB,CAAa;AAC/B,oBAAI,oBAAe,GAAE;uBAAS,kBAAT,eAAS,MAAO;;IACvC;;8EAxBI,OAAY,EACZ,UAAe,EACE,QAAS,EACE,YAAa,EACzC,IAA8B;IApB5B,eAAS,GAAG,IAAI,0CAAgB;IA+BjC,qBAAe,GAAG;IAfd,cAAO,GAAP,OAAO;IACP,iBAAU,GAAV,UAAU;IACE,eAAS,GAAT,QAAS;IACE,mBAAa,GAAb,YAAa;IAElC,WAAI,GAAG,IAAI,WAAJ,IAAI,GAAI;AACpB,yFAAM,OAAO;AACjB,QAAI,eAAS,IAAI,MAAM;AACrB,qBAAS,cAAc,gCAAC,YAAO,OAAO,CAAC,iCAAc;;EAEzD","file":"material_list_item.ddc.js"}');
  // Exports:
  return {
    material_list__material_list_item: material_list__material_list_item
  };
});

//# sourceMappingURL=material_list_item.ddc.js.map
