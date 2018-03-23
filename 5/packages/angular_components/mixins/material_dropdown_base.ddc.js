define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/content/deferred_content_aware'], function(dart_sdk, alignment, deferred_content_aware) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const _root = Object.create(null);
  const mixins__material_dropdown_base = Object.create(_root);
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  mixins__material_dropdown_base.DropdownHandle = class DropdownHandle extends core.Object {
    get autoDismiss() {
      return this[autoDismiss];
    }
    set autoDismiss(value) {
      this[autoDismiss] = value;
    }
  };
  (mixins__material_dropdown_base.DropdownHandle.new = function() {
    this[autoDismiss] = null;
  }).prototype = mixins__material_dropdown_base.DropdownHandle.prototype;
  dart.addTypeTests(mixins__material_dropdown_base.DropdownHandle);
  const autoDismiss = Symbol("DropdownHandle.autoDismiss");
  dart.setFieldSignature(mixins__material_dropdown_base.DropdownHandle, () => ({
    __proto__: dart.getFields(mixins__material_dropdown_base.DropdownHandle.__proto__),
    autoDismiss: dart.fieldType(core.bool)
  }));
  const _visibleStream = Symbol('_visibleStream');
  const _contentVisible = Symbol('_contentVisible');
  const _visible = Symbol('_visible');
  mixins__material_dropdown_base.MaterialDropdownBase = class MaterialDropdownBase extends core.Object {
    get visibleStream() {
      return this[_visibleStream].stream;
    }
    get enforceSpaceConstraints() {
      return this[enforceSpaceConstraints];
    }
    set enforceSpaceConstraints(value) {
      this[enforceSpaceConstraints] = value;
    }
    get constrainToViewport() {
      return this[constrainToViewport];
    }
    set constrainToViewport(value) {
      this[constrainToViewport] = value;
    }
    get popupMatchInputWidth() {
      return this[popupMatchInputWidth];
    }
    set popupMatchInputWidth(value) {
      this[popupMatchInputWidth] = value;
    }
    get slide() {
      return this[slide];
    }
    set slide(value) {
      this[slide] = value;
    }
    get autoDismiss() {
      return this[autoDismiss$];
    }
    set autoDismiss(value) {
      this[autoDismiss$] = value;
    }
    get visible() {
      return this[_visible];
    }
    set visible(value) {
      let vis = value;
      if (dart.test(vis) && this[_visible] != vis) {
        this[_contentVisible].add(true);
      }
      this[_visible] = vis;
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
    onVisible(vis) {
      this[_visibleStream].add(vis);
      this.visible = vis;
      if (!dart.test(vis)) {
        this[_contentVisible].add(false);
      }
    }
    close() {
      this.visible = false;
    }
    open() {
      this.visible = true;
    }
    toggle() {
      this.visible = !dart.test(this.visible);
    }
    get contentVisible() {
      return this[_contentVisible].stream;
    }
  };
  (mixins__material_dropdown_base.MaterialDropdownBase.new = function() {
    this[_visibleStream] = StreamControllerOfbool().broadcast({sync: true});
    this[_contentVisible] = StreamControllerOfbool().broadcast({sync: true});
    this[enforceSpaceConstraints] = false;
    this[constrainToViewport] = false;
    this[popupMatchInputWidth] = true;
    this[slide] = null;
    this[autoDismiss$] = true;
    this[_visible] = false;
    this[preferredPositions] = laminate__enums__alignment.RelativePosition.InlinePositions;
  }).prototype = mixins__material_dropdown_base.MaterialDropdownBase.prototype;
  dart.addTypeTests(mixins__material_dropdown_base.MaterialDropdownBase);
  const enforceSpaceConstraints = Symbol("MaterialDropdownBase.enforceSpaceConstraints");
  const constrainToViewport = Symbol("MaterialDropdownBase.constrainToViewport");
  const popupMatchInputWidth = Symbol("MaterialDropdownBase.popupMatchInputWidth");
  const slide = Symbol("MaterialDropdownBase.slide");
  const autoDismiss$ = Symbol("MaterialDropdownBase.autoDismiss");
  const preferredPositions = Symbol("MaterialDropdownBase.preferredPositions");
  mixins__material_dropdown_base.MaterialDropdownBase[dart.implements] = () => [mixins__material_dropdown_base.DropdownHandle, content__deferred_content_aware.DeferredContentAware];
  dart.setMethodSignature(mixins__material_dropdown_base.MaterialDropdownBase, () => ({
    __proto__: dart.getMethods(mixins__material_dropdown_base.MaterialDropdownBase.__proto__),
    onVisible: dart.fnType(dart.void, [core.bool]),
    close: dart.fnType(dart.void, []),
    open: dart.fnType(dart.void, []),
    toggle: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(mixins__material_dropdown_base.MaterialDropdownBase, () => ({
    __proto__: dart.getGetters(mixins__material_dropdown_base.MaterialDropdownBase.__proto__),
    visibleStream: dart.fnType(async.Stream$(core.bool), []),
    visible: dart.fnType(core.bool, []),
    contentVisible: dart.fnType(async.Stream$(core.bool), [])
  }));
  dart.setSetterSignature(mixins__material_dropdown_base.MaterialDropdownBase, () => ({
    __proto__: dart.getSetters(mixins__material_dropdown_base.MaterialDropdownBase.__proto__),
    visible: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(mixins__material_dropdown_base.MaterialDropdownBase, () => ({
    __proto__: dart.getFields(mixins__material_dropdown_base.MaterialDropdownBase.__proto__),
    [_visibleStream]: dart.finalFieldType(StreamControllerOfbool()),
    [_contentVisible]: dart.finalFieldType(StreamControllerOfbool()),
    enforceSpaceConstraints: dart.fieldType(core.bool),
    constrainToViewport: dart.fieldType(core.bool),
    popupMatchInputWidth: dart.fieldType(core.bool),
    slide: dart.fieldType(core.String),
    autoDismiss: dart.fieldType(core.bool),
    [_visible]: dart.fieldType(core.bool),
    preferredPositions: dart.fieldType(core.List)
  }));
  dart.trackLibraries("packages/angular_components/mixins/material_dropdown_base.ddc", {
    "package:angular_components/mixins/material_dropdown_base.dart": mixins__material_dropdown_base
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_base.dart"],"names":[],"mappings":";;;;;;;;;;;;IAkBO;;;;;;;;qBAAW;EAClB;;;;;;;;;;;;YAmBoC,qBAAc,OAAO;;IAKlD;;;;;;IAIA;;;;;;IAIA;;;;;;IAIE;;;;;;IAEF;;;;;;;YAGe,eAAQ;;gBAEhB,KAAU;AACpB,UAAK,MAAM,KAAK;AAEhB,oBAAI,GAAG,KAAI,cAAQ,IAAI,GAAG,EAAE;AAC1B,6BAAe,IAAI,CAAC;;AAEtB,oBAAQ,GAAG,GAAG;IAChB;IAIc;;;;;;cAEC,GAAQ;AACrB,0BAAc,IAAI,CAAC,GAAG;AACtB,kBAAO,GAAG,GAAG;AAGb,qBAAK,GAAG,GAAE;AACR,6BAAe,IAAI,CAAC;;IAExB;;AAGE,kBAAO,GAAG;IACZ;;AAGE,kBAAO,GAAG;IACZ;;AAGE,kBAAO,GAAG,WAAC,YAAO;IACpB;;YAGmC,sBAAe,OAAO;;;;IA3DnD,oBAAc,GAAG,AAAI,kCAAgC,QAAO;IAC5D,qBAAe,GAAG,AAAI,kCAAgC,QAAO;IAG9D,6BAAuB,GAAG;IAI1B,yBAAmB,GAAG;IAItB,0BAAoB,GAAG;IAIrB,WAAK;IAEP,kBAAW,GAAG;IAEd,cAAQ,GAAG;IAcF,wBAAkB,GAAG,2CAAgB,gBAAgB;EA0BrE","file":"material_dropdown_base.ddc.js"}');
  // Exports:
  return {
    mixins__material_dropdown_base: mixins__material_dropdown_base
  };
});

//# sourceMappingURL=material_dropdown_base.ddc.js.map
