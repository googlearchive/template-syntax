define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/selection/select', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/material_tree/material_tree_root', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/focus/focus', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/src/material_tree/material_tree_filter', 'packages/angular_components/laminate/enums/alignment'], function(dart_sdk, selection_model, select, has_renderer, selection_container, material_dropdown_base, material_tree_root, lifecycle_hooks, focus, selection_options, dom_service, material_tree_filter, alignment) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const model__selection__select = select.model__selection__select;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__material_tree__material_tree_root = material_tree_root.src__material_tree__material_tree_root;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const focus__focus = focus.focus__focus;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const src__material_tree__material_tree_filter = material_tree_filter.src__material_tree__material_tree_filter;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const _root = Object.create(null);
  const src__material_tree__material_tree_dropdown = Object.create(_root);
  const $first = dartx.first;
  let dynamicToType = () => (dynamicToType = dart.constFn(dart.fnType(core.Type, [dart.dynamic])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  const _domService = Symbol('_domService');
  const _expandAll = Symbol('_expandAll');
  const _placeholder = Symbol('_placeholder');
  const _visible = Symbol('_visible');
  let const$;
  const _maybeFocusFilterComponent = Symbol('_maybeFocusFilterComponent');
  const SelectionContainer_DropdownHandle$ = class SelectionContainer_DropdownHandle extends model__selection__selection_container.SelectionContainer {};
  (SelectionContainer_DropdownHandle$.new = function() {
    mixins__material_dropdown_base.DropdownHandle.new.call(this);
    SelectionContainer_DropdownHandle$.__proto__.new.call(this);
  }).prototype = SelectionContainer_DropdownHandle$.prototype;
  dart.mixinMembers(SelectionContainer_DropdownHandle$, mixins__material_dropdown_base.DropdownHandle);
  const SelectionContainer_MaterialTreeRoot$ = class SelectionContainer_MaterialTreeRoot extends SelectionContainer_DropdownHandle$ {};
  (SelectionContainer_MaterialTreeRoot$.new = function() {
    src__material_tree__material_tree_root.MaterialTreeRoot.new.call(this);
    SelectionContainer_MaterialTreeRoot$.__proto__.new.call(this);
  }).prototype = SelectionContainer_MaterialTreeRoot$.prototype;
  dart.mixinMembers(SelectionContainer_MaterialTreeRoot$, src__material_tree__material_tree_root.MaterialTreeRoot);
  src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent = class MaterialTreeDropdownComponent extends SelectionContainer_MaterialTreeRoot$ {
    get materialTreeFilterComponent() {
      return this[materialTreeFilterComponent];
    }
    set materialTreeFilterComponent(value) {
      this[materialTreeFilterComponent] = value;
    }
    set expandAll(value) {
      this[_expandAll] = value;
    }
    get showFilterInsidePopup() {
      return this[showFilterInsidePopup];
    }
    set showFilterInsidePopup(value) {
      this[showFilterInsidePopup] = value;
    }
    get shouldExpandAllWhenFiltered() {
      return this[shouldExpandAllWhenFiltered];
    }
    set shouldExpandAllWhenFiltered(value) {
      this[shouldExpandAllWhenFiltered] = value;
    }
    get showFilterInsideButton() {
      return dart.test(this.supportsFiltering) && !dart.test(this.showFilterInsidePopup);
    }
    get filterableOptions() {
      return model__selection__select.Filterable.is(this.options) ? model__selection__select.Filterable.as(this.options) : dart.throw(new core.StateError.new('The SlectionOptions provided should implement Filterable'));
    }
    get expandAll() {
      return dart.test(this[_expandAll]) || dart.test(this.isFiltered) && dart.test(this.shouldExpandAllWhenFiltered);
    }
    get placeholder() {
      if (!model__selection__selection_model.MultiSelectionModel.is(this.selection) && dart.test(this.selection.isNotEmpty)) {
        return dart.dcall((() => {
          let l = this.itemRenderer;
          return l != null ? l : model__ui__has_renderer.defaultItemRenderer;
        })(), this.selection.selectedValues[$first]);
      }
      return this[_placeholder];
    }
    get optimizeForDropdown() {
      return this[optimizeForDropdown];
    }
    set optimizeForDropdown(value) {
      super.optimizeForDropdown = value;
    }
    set componentRenderer(value) {
      super.componentRenderer = value;
    }
    get componentRenderer() {
      return super.componentRenderer;
    }
    set itemRenderer(value) {
      super.itemRenderer = value;
    }
    get itemRenderer() {
      return super.itemRenderer;
    }
    set options(value) {
      super.options = value;
    }
    get options() {
      return super.options;
    }
    set selection(value) {
      super.selection = value;
    }
    get selection() {
      return super.selection;
    }
    set placeholder(placeholder) {
      this[_placeholder] = placeholder != null ? placeholder : "Select";
    }
    get popupPositions() {
      return dart.test(this.showFilterInsideButton) ? src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent._popupPositionsOffset : src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent._popupPositionsInline;
    }
    get visible() {
      return this[_visible];
    }
    set visible(val) {
      if (this[_visible] != val) {
        this[_visible] = val;
        if (dart.test(this.showFilterInsidePopup) && !dart.test(this[_visible])) {
          let t = this.materialTreeFilterComponent;
          t == null ? null : t.clear();
        }
      }
    }
    open() {
      this.visible = true;
    }
    close() {
      this.visible = false;
    }
    toggle() {
      this.visible = !dart.test(this.visible);
    }
    ngOnInit() {
      this[_maybeFocusFilterComponent]();
    }
    focus() {
      this.open();
      this[_maybeFocusFilterComponent]();
    }
    [_maybeFocusFilterComponent]() {
      return async.async(dart.dynamic, (function* _maybeFocusFilterComponent() {
        if (dart.test(this.visible) && dart.test(this.supportsFiltering)) {
          yield this[_domService].nextFrame;
          let t = this.materialTreeFilterComponent;
          t == null ? null : t.focus();
        }
      }).bind(this));
    }
  };
  (src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent.new = function(domService) {
    this[_expandAll] = false;
    this[_placeholder] = "Select";
    this[_visible] = false;
    this[materialTreeFilterComponent] = null;
    this[showFilterInsidePopup] = false;
    this[shouldExpandAllWhenFiltered] = true;
    this[optimizeForDropdown] = true;
    this[_domService] = domService;
    src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent.__proto__.new.call(this);
    this.selection = const$ || (const$ = dart.const(model__selection__selection_model.SelectionModel.new()));
  }).prototype = src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent.prototype;
  dart.addTypeTests(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent);
  const materialTreeFilterComponent = Symbol("MaterialTreeDropdownComponent.materialTreeFilterComponent");
  const showFilterInsidePopup = Symbol("MaterialTreeDropdownComponent.showFilterInsidePopup");
  const shouldExpandAllWhenFiltered = Symbol("MaterialTreeDropdownComponent.shouldExpandAllWhenFiltered");
  const optimizeForDropdown = Symbol("MaterialTreeDropdownComponent.optimizeForDropdown");
  src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, focus__focus.Focusable];
  dart.setMethodSignature(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent.__proto__),
    open: dart.fnType(dart.void, []),
    close: dart.fnType(dart.void, []),
    toggle: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.dynamic, []),
    focus: dart.fnType(dart.void, []),
    [_maybeFocusFilterComponent]: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent, () => ({
    __proto__: dart.getGetters(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent.__proto__),
    showFilterInsideButton: dart.fnType(core.bool, []),
    filterableOptions: dart.fnType(model__selection__select.Filterable, []),
    expandAll: dart.fnType(core.bool, []),
    placeholder: dart.fnType(core.String, []),
    popupPositions: dart.fnType(core.List, []),
    visible: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent, () => ({
    __proto__: dart.getSetters(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent.__proto__),
    expandAll: dart.fnType(dart.void, [core.bool]),
    componentRenderer: dart.fnType(dart.void, [dynamicToType()]),
    itemRenderer: dart.fnType(dart.void, [dynamicToString()]),
    options: dart.fnType(dart.void, [model__selection__selection_options.SelectionOptions]),
    selection: dart.fnType(dart.void, [model__selection__selection_model.SelectionModel]),
    placeholder: dart.fnType(dart.void, [core.String]),
    visible: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent.__proto__),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_expandAll]: dart.fieldType(core.bool),
    [_placeholder]: dart.fieldType(core.String),
    [_visible]: dart.fieldType(core.bool),
    materialTreeFilterComponent: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent),
    showFilterInsidePopup: dart.fieldType(core.bool),
    shouldExpandAllWhenFiltered: dart.fieldType(core.bool),
    optimizeForDropdown: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent, {
    /*src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent._popupPositionsOffset*/get _popupPositionsOffset() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentBottomLeft, laminate__enums__alignment.RelativePosition.AdjacentBottomEdge, laminate__enums__alignment.RelativePosition.AdjacentTopLeft, laminate__enums__alignment.RelativePosition.AdjacentTopEdge], dart.dynamic);
    },
    /*src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent._popupPositionsInline*/get _popupPositionsInline() {
      return laminate__enums__alignment.RelativePosition.InlinePositions;
    },
    /*src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent._DEFAULT_PLACEHOLDER*/get _DEFAULT_PLACEHOLDER() {
      return 'Select';
    }
  });
  dart.trackLibraries("packages/angular_components/src/material_tree/material_tree_dropdown.ddc", {
    "package:angular_components/src/material_tree/material_tree_dropdown.dart": src__material_tree__material_tree_dropdown
  }, '{"version":3,"sourceRoot":"","sources":["material_tree_dropdown.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuE8B;;;;;;kBAGd,KAAU;AACtB,sBAAU,GAAG,KAAK;IACpB;IAGK;;;;;;IAGA;;;;;;;YAGiB,WAAlB,sBAAiB,gBAAK,0BAAqB;;;oDAEX,YAAO,2CACrC,YAAO,IACP,WAAM,IAAI,mBAAU,CAClB;IAA2D;;YAGpD,WAAX,gBAAU,eAAK,eAAU,eAAI,gCAA2B;IAAC;;AAG3D,oEAAI,cAAS,eAA4B,cAAS,WAAW,GAAE;AAC7D,cAAO;kBAAC,iBAAY;iCAChB,2CAAmB;cAAE,cAAS,eAAe,QAAM;;AAEzD,YAAO,mBAAY;IACrB;IAGW;;;;;;0BAQW,KAAuB;AAC3C,6BAAuB,GAAG,KAAK;IACjC;;;;qBAIiB,KAAkB;AACjC,wBAAkB,GAAG,KAAK;IAC5B;;;;gBAIY,KAAsB;AAChC,mBAAa,GAAG,KAAK;IACvB;;;;kBAIc,KAAoB;AAChC,qBAAe,GAAG,KAAK;IACzB;;;;oBAGgB,WAAkB;AAChC,wBAAY,GAAG,WAAW,WAAX,WAAW,GAAI,QAAoB;IACpD;;AAGE,uBAAO,2BAAsB,IACvB,8FAAqB,GACrB,8FAAqB;IAC7B;;YAEoB,eAAQ;;gBAGhB,GAAQ;AAClB,UAAI,cAAQ,IAAI,GAAG,EAAE;AACnB,sBAAQ,GAAG,GAAG;AACd,sBAAI,0BAAqB,gBAAK,cAAQ,GAAE;AACtC,kDAA2B;;;;IAGjC;;AAIE,kBAAO,GAAG;IACZ;;AAIE,kBAAO,GAAG;IACZ;;AAIE,kBAAO,GAAG,WAAC,YAAO;IACpB;;AAIE,sCAA0B;IAC5B;;AAIE,eAAI;AACJ,sCAA0B;IAC5B;;AAEoC;AAClC,sBAAI,YAAO,eAAI,sBAAiB,GAAE;AAChC,gBAAM,iBAAW,UAAU;AAC3B,kDAA2B;;;MAE/B;;;2FAlFmC,UAAW;IAxCzC,gBAAU,GAAG;IACX,kBAAY,GAAG,QAAoB;IACrC,cAAQ,GAAG;IAGY,iCAA2B;IAQlD,2BAAqB,GAAG;IAGxB,iCAA2B,GAAG;IAsBxB,yBAAmB,GAAG;IAEE,iBAAW,GAAX,UAAW;;AAC5C,kBAAS,GAAG,+BAAM,oDAAc;EAClC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAxDI,8FAAqB;YAAG,iBAC1B,2CAAgB,mBAAmB,EACnC,2CAAgB,mBAAmB,EACnC,2CAAgB,gBAAgB,EAChC,2CAAgB,gBAAgB;;MAIE,8FAAqB;YACrD,4CAAgB,gBAAgB;;MAEhB,6FAAoB;YAAG","file":"material_tree_dropdown.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_dropdown: src__material_tree__material_tree_dropdown
  };
});

//# sourceMappingURL=material_tree_dropdown.ddc.js.map
