define(['dart_sdk', 'packages/angular_components/model/selection/select', 'packages/angular_components/src/material_tree/material_tree_root', 'packages/angular_components/material_input/material_input', 'packages/angular_components/src/utils/async/disposable_future'], function(dart_sdk, select, material_tree_root, material_input, disposable_future) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__select = select.model__selection__select;
  const src__material_tree__material_tree_root = material_tree_root.src__material_tree__material_tree_root;
  const material_input__material_input = material_input.material_input__material_input;
  const src__utils__async__disposable_future = disposable_future.src__utils__async__disposable_future;
  const _root = Object.create(null);
  const src__material_tree__material_tree_filter = Object.create(_root);
  const $toString = dartx.toString;
  const $isNotEmpty = dartx.isNotEmpty;
  const _treeRoot = Symbol('_treeRoot');
  const _onFocusController = Symbol('_onFocusController');
  const _onFilteredController = Symbol('_onFilteredController');
  const _filterable = Symbol('_filterable');
  const _inputText = Symbol('_inputText');
  const _lastFilterFuture = Symbol('_lastFilterFuture');
  const _updateVisibleItems = Symbol('_updateVisibleItems');
  src__material_tree__material_tree_filter.MaterialTreeFilterComponent = class MaterialTreeFilterComponent extends core.Object {
    get materialInput() {
      return this[materialInput];
    }
    set materialInput(value) {
      this[materialInput] = value;
    }
    get inputText() {
      return this[_inputText];
    }
    set inputText(inputText) {
      if (this[_inputText] != inputText) {
        this[_inputText] = inputText;
        this[_updateVisibleItems]();
      }
    }
    get leadingGlyph() {
      return this[leadingGlyph];
    }
    set leadingGlyph(value) {
      this[leadingGlyph] = value;
    }
    set filterable(filterable) {
      if (!dart.equals(this[_filterable], filterable)) {
        this[_filterable] = filterable;
        let query = filterable.currentQuery;
        if (query != null) {
          this[_inputText] = dart.toString(query);
        }
        this[_updateVisibleItems]();
      }
    }
    get hasFilterable() {
      return this[_filterable] != null;
    }
    handleFocus() {
      this[_onFocusController].add(null);
    }
    focus() {
      this.materialInput.focus();
    }
    clear() {
      this.inputText = '';
    }
    get onFocus() {
      return this[_onFocusController].stream;
    }
    get onFiltered() {
      return this[_onFilteredController].stream;
    }
    get placeholder() {
      return this[placeholder];
    }
    set placeholder(value) {
      this[placeholder] = value;
    }
    [_updateVisibleItems]() {
      let t = this[_lastFilterFuture];
      t == null ? null : t.dispose();
      this[_lastFilterFuture] = this[_filterable].filter(this[_inputText]);
      this[_treeRoot].isFiltered = this[_inputText][$isNotEmpty];
      this[_onFilteredController].add(null);
    }
  };
  (src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new = function(treeRoot) {
    this[_onFocusController] = async.StreamController.broadcast({sync: true});
    this[_onFilteredController] = async.StreamController.broadcast({sync: true});
    this[materialInput] = null;
    this[_filterable] = null;
    this[_inputText] = '';
    this[_lastFilterFuture] = null;
    this[leadingGlyph] = null;
    this[placeholder] = null;
    this[_treeRoot] = treeRoot;
    if ((this[_treeRoot] == null ? null : this[_treeRoot].supportsFiltering) === true) {
      this.filterable = model__selection__select.Filterable.as(this[_treeRoot].options);
    }
  }).prototype = src__material_tree__material_tree_filter.MaterialTreeFilterComponent.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter.MaterialTreeFilterComponent);
  const materialInput = Symbol("MaterialTreeFilterComponent.materialInput");
  const leadingGlyph = Symbol("MaterialTreeFilterComponent.leadingGlyph");
  const placeholder = Symbol("MaterialTreeFilterComponent.placeholder");
  dart.setMethodSignature(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter.MaterialTreeFilterComponent.__proto__),
    handleFocus: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    clear: dart.fnType(dart.void, []),
    [_updateVisibleItems]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, () => ({
    __proto__: dart.getGetters(src__material_tree__material_tree_filter.MaterialTreeFilterComponent.__proto__),
    inputText: dart.fnType(core.String, []),
    hasFilterable: dart.fnType(core.bool, []),
    onFocus: dart.fnType(async.Stream, []),
    onFiltered: dart.fnType(async.Stream, [])
  }));
  dart.setSetterSignature(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, () => ({
    __proto__: dart.getSetters(src__material_tree__material_tree_filter.MaterialTreeFilterComponent.__proto__),
    inputText: dart.fnType(dart.void, [core.String]),
    filterable: dart.fnType(dart.void, [model__selection__select.Filterable])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter.MaterialTreeFilterComponent.__proto__),
    [_onFocusController]: dart.finalFieldType(async.StreamController),
    [_onFilteredController]: dart.finalFieldType(async.StreamController),
    [_treeRoot]: dart.finalFieldType(src__material_tree__material_tree_root.MaterialTreeRoot),
    materialInput: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_filterable]: dart.fieldType(model__selection__select.Filterable),
    [_inputText]: dart.fieldType(core.String),
    [_lastFilterFuture]: dart.fieldType(src__utils__async__disposable_future.DisposableFuture),
    leadingGlyph: dart.fieldType(core.String),
    placeholder: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/src/material_tree/material_tree_filter.ddc", {
    "package:angular_components/src/material_tree/material_tree_filter.dart": src__material_tree__material_tree_filter
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_filter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IA6ByB;;;;;;;YAgBC,iBAAU;;kBACpB,SAAgB;AAC5B,UAAI,gBAAU,IAAI,SAAS,EAAE;AAC3B,wBAAU,GAAG,SAAS;AACtB,iCAAmB;;IAEvB;IAIO;;;;;;mBAIQ,UAAqB;AAClC,uBAAI,iBAAW,EAAI,UAAU,GAAE;AAC7B,yBAAW,GAAG,UAAU;AACxB,YAAI,QAAQ,UAAU,aAAa;AACnC,YAAI,KAAK,IAAI,MAAM;AACjB,0BAAU,iBAAG,KAAK;;AAEpB,iCAAmB;;IAEvB;;YAG0B,kBAAW,IAAI;IAAI;;AAG3C,8BAAkB,IAAI,CAAC;IACzB;;AAGE,wBAAa,MAAM;IACrB;;AAGE,oBAAS,GAAG;IACd;;YAGsB,yBAAkB,OAAO;;;YAItB,4BAAqB,OAAO;;IAG9C;;;;;;;AAGL,qCAAiB;;AACjB,6BAAiB,GAAG,iBAAW,OAAO,CAAC,gBAAU;AACjD,qBAAS,WAAW,GAAG,gBAAU,aAAW;AAC5C,iCAAqB,IAAI,CAAC;IAC5B;;uFA9D6C,QAAS;IAhB/B,wBAAkB,GACrC,AAAI,gCAA0B,QAAO;IAClB,2BAAqB,GACxC,AAAI,gCAA0B,QAAO;IAIlB,mBAAa;IAEzB,iBAAW;IACf,gBAAU,GAAG;IAGH,uBAAiB;IAoB3B,kBAAY;IAsCZ,iBAAW;IAvD2B,eAAS,GAAT,QAAS;AACpD,SAAI,eAAS,kBAAT,eAAS,kBAAmB,MAAI,MAAM;AACxC,qBAAU,0CAAG,eAAS,QAAQ;;EAElC","file":"material_tree_filter.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_filter: src__material_tree__material_tree_filter
  };
});

//# sourceMappingURL=material_tree_filter.ddc.js.map
