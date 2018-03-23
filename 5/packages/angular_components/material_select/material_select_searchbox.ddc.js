define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/model/selection/select', 'packages/angular_components/material_input/material_input', 'packages/angular_components/src/utils/async/disposable_future'], function(dart_sdk, events, focusable_mixin, lifecycle_hooks, select, material_input, disposable_future) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events = events.utils__browser__events__events;
  const mixins__focusable_mixin = focusable_mixin.mixins__focusable_mixin;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const model__selection__select = select.model__selection__select;
  const material_input__material_input = material_input.material_input__material_input;
  const src__utils__async__disposable_future = disposable_future.src__utils__async__disposable_future;
  const _root = Object.create(null);
  const material_select__material_select_searchbox = Object.create(_root);
  const _filterable = Symbol('_filterable');
  const _inputText = Symbol('_inputText');
  const _lastFilterFuture = Symbol('_lastFilterFuture');
  const _filter = Symbol('_filter');
  material_select__material_select_searchbox.MaterialSelectSearchboxComponent = class MaterialSelectSearchboxComponent extends mixins__focusable_mixin.FocusableMixin {
    get inputText() {
      return this[_inputText];
    }
    set inputText(text) {
      if (this[_inputText] != text) {
        this[_inputText] = text;
        this[_filter]();
      }
    }
    set filterable(callback) {
      if (!dart.equals(this[_filterable], callback)) {
        this[_filterable] = callback;
        this[_filter]();
      }
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    [_filter]() {
      let t = this[_lastFilterFuture];
      t == null ? null : t.dispose();
      this[_lastFilterFuture] = this[_filterable].filter((() => {
        let l = this[_inputText];
        return l != null ? l : '';
      })());
    }
    set input(input) {
      this.focusable = input;
    }
    stopSpaceKeyPropagation(keyboardEvent) {
      if (dart.test(utils__browser__events__events.isSpaceKey(keyboardEvent))) {
        keyboardEvent.stopPropagation();
      }
    }
    ngOnDestroy() {
      let t = this[_lastFilterFuture];
      t == null ? null : t.dispose();
      this[_lastFilterFuture] = null;
    }
  };
  (material_select__material_select_searchbox.MaterialSelectSearchboxComponent.new = function() {
    this[_filterable] = null;
    this[_inputText] = '';
    this[_lastFilterFuture] = null;
    this[label] = null;
    material_select__material_select_searchbox.MaterialSelectSearchboxComponent.__proto__.new.call(this);
  }).prototype = material_select__material_select_searchbox.MaterialSelectSearchboxComponent.prototype;
  dart.addTypeTests(material_select__material_select_searchbox.MaterialSelectSearchboxComponent);
  const label = Symbol("MaterialSelectSearchboxComponent.label");
  material_select__material_select_searchbox.MaterialSelectSearchboxComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_select__material_select_searchbox.MaterialSelectSearchboxComponent, () => ({
    __proto__: dart.getMethods(material_select__material_select_searchbox.MaterialSelectSearchboxComponent.__proto__),
    [_filter]: dart.fnType(dart.void, []),
    stopSpaceKeyPropagation: dart.fnType(dart.void, [html.KeyboardEvent]),
    ngOnDestroy: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(material_select__material_select_searchbox.MaterialSelectSearchboxComponent, () => ({
    __proto__: dart.getGetters(material_select__material_select_searchbox.MaterialSelectSearchboxComponent.__proto__),
    inputText: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(material_select__material_select_searchbox.MaterialSelectSearchboxComponent, () => ({
    __proto__: dart.getSetters(material_select__material_select_searchbox.MaterialSelectSearchboxComponent.__proto__),
    inputText: dart.fnType(dart.void, [core.String]),
    filterable: dart.fnType(dart.void, [model__selection__select.Filterable]),
    input: dart.fnType(dart.void, [material_input__material_input.MaterialInputComponent])
  }));
  dart.setFieldSignature(material_select__material_select_searchbox.MaterialSelectSearchboxComponent, () => ({
    __proto__: dart.getFields(material_select__material_select_searchbox.MaterialSelectSearchboxComponent.__proto__),
    [_filterable]: dart.fieldType(model__selection__select.Filterable),
    [_inputText]: dart.fieldType(core.String),
    [_lastFilterFuture]: dart.fieldType(src__utils__async__disposable_future.DisposableFuture),
    label: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/material_select/material_select_searchbox.ddc", {
    "package:angular_components/material_select/material_select_searchbox.dart": material_select__material_select_searchbox
  }, '{"version":3,"sourceRoot":"","sources":["material_select_searchbox.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;YAsC0B,iBAAU;;kBACpB,IAAW;AACvB,UAAI,gBAAU,IAAI,IAAI,EAAE;AACtB,wBAAU,GAAG,IAAI;AACjB,qBAAO;;IAEX;mBAIe,QAAmB;AAChC,uBAAI,iBAAW,EAAI,QAAQ,GAAE;AAC3B,yBAAW,GAAG,QAAQ;AACtB,qBAAO;;IAEX;IAGO;;;;;;;AAGL,qCAAiB;;AACjB,6BAAiB,GAAG,iBAAW,OAAO;gBAAC,gBAAU;+BAAI;;IACvD;cAGU,KAA4B;AACpC,oBAAS,GAAG,KAAK;IACnB;4BAI6B,aAA2B;AACtD,oBAAI,yCAAU,CAAC,aAAa,IAAG;AAC7B,qBAAa,gBAAgB;;IAEjC;;AAIE,qCAAiB;;AACjB,6BAAiB,GAAG;IACtB;;;IAjDW,iBAAW;IACf,gBAAU,GAAG;IAGH,uBAAiB;IAqB3B,WAAK;;EAyBd","file":"material_select_searchbox.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_searchbox: material_select__material_select_searchbox
  };
});

//# sourceMappingURL=material_select_searchbox.ddc.js.map
