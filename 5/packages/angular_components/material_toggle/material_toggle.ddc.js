define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, events, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events = events.utils__browser__events__events;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const material_toggle__material_toggle = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $_set = dartx._set;
  const $attributes = dartx.attributes;
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  const _checked = Symbol('_checked');
  const _controller = Symbol('_controller');
  const _ariaLabel = Symbol('_ariaLabel');
  const _hasFocus = Symbol('_hasFocus');
  const _isHovered = Symbol('_isHovered');
  const _syncAriaPressed = Symbol('_syncAriaPressed');
  const _updateShadowZ = Symbol('_updateShadowZ');
  material_toggle__material_toggle.MaterialToggleComponent = class MaterialToggleComponent extends core.Object {
    get toggleElement() {
      return this[toggleElement];
    }
    set toggleElement(value) {
      this[toggleElement] = value;
    }
    ngAfterViewInit() {
      this[_syncAriaPressed]();
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    set checked(value) {
      this[_checked] = value;
      this[_syncAriaPressed]();
    }
    get checked() {
      return this[_checked];
    }
    get onChecked() {
      return this[_controller].stream;
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    set ariaLabel(value) {
      this[_ariaLabel] = value;
    }
    get ariaLabel() {
      let l = this[_ariaLabel];
      return l != null ? l : this.label;
    }
    get shadow_z() {
      return this[shadow_z];
    }
    set shadow_z(value) {
      this[shadow_z] = value;
    }
    get hasFocus() {
      return this[_hasFocus];
    }
    set hasFocus(value) {
      this[_hasFocus] = value;
      this[_updateShadowZ]();
    }
    get isHovered() {
      return this[_isHovered];
    }
    set isHovered(value) {
      this[_isHovered] = value;
      this[_updateShadowZ]();
    }
    get hasLabel() {
      return this.label != null && this.label[$isNotEmpty];
    }
    [_updateShadowZ]() {
      this.shadow_z = dart.test(this.isHovered) ? 3 : dart.test(this.hasFocus) ? 2 : 1;
    }
    toggleChecked() {
      if (!dart.test(this.disabled)) {
        this.checked = !dart.test(this.checked);
        this[_controller].add(this.checked);
      }
    }
    handleClick(mouseEvent) {
      this.toggleChecked();
      mouseEvent.preventDefault();
      mouseEvent.stopPropagation();
    }
    handleKeyPress(keyEvent) {
      let keyCode = keyEvent.keyCode;
      if (keyCode === html.KeyCode.ENTER || dart.test(utils__browser__events__events.isSpaceKey(keyEvent))) {
        this.toggleChecked();
        keyEvent.preventDefault();
        keyEvent.stopPropagation();
      }
    }
    [_syncAriaPressed]() {
      if (this.toggleElement == null) return;
      this.toggleElement[$attributes][$_set]('aria-pressed', dart.str`${this.checked}`);
    }
  };
  (material_toggle__material_toggle.MaterialToggleComponent.new = function() {
    this[toggleElement] = null;
    this[disabled] = false;
    this[_checked] = false;
    this[_controller] = StreamControllerOfbool().broadcast();
    this[label] = null;
    this[_ariaLabel] = null;
    this[shadow_z] = 1;
    this[_hasFocus] = false;
    this[_isHovered] = false;
  }).prototype = material_toggle__material_toggle.MaterialToggleComponent.prototype;
  dart.addTypeTests(material_toggle__material_toggle.MaterialToggleComponent);
  const toggleElement = Symbol("MaterialToggleComponent.toggleElement");
  const disabled = Symbol("MaterialToggleComponent.disabled");
  const label = Symbol("MaterialToggleComponent.label");
  const shadow_z = Symbol("MaterialToggleComponent.shadow_z");
  material_toggle__material_toggle.MaterialToggleComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit];
  dart.setMethodSignature(material_toggle__material_toggle.MaterialToggleComponent, () => ({
    __proto__: dart.getMethods(material_toggle__material_toggle.MaterialToggleComponent.__proto__),
    ngAfterViewInit: dart.fnType(dart.void, []),
    [_updateShadowZ]: dart.fnType(dart.void, []),
    toggleChecked: dart.fnType(dart.void, []),
    handleClick: dart.fnType(dart.void, [html.MouseEvent]),
    handleKeyPress: dart.fnType(dart.void, [html.KeyboardEvent]),
    [_syncAriaPressed]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_toggle__material_toggle.MaterialToggleComponent, () => ({
    __proto__: dart.getGetters(material_toggle__material_toggle.MaterialToggleComponent.__proto__),
    checked: dart.fnType(core.bool, []),
    onChecked: dart.fnType(async.Stream$(core.bool), []),
    ariaLabel: dart.fnType(core.String, []),
    hasFocus: dart.fnType(core.bool, []),
    isHovered: dart.fnType(core.bool, []),
    hasLabel: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(material_toggle__material_toggle.MaterialToggleComponent, () => ({
    __proto__: dart.getSetters(material_toggle__material_toggle.MaterialToggleComponent.__proto__),
    checked: dart.fnType(dart.void, [core.bool]),
    ariaLabel: dart.fnType(dart.void, [core.String]),
    hasFocus: dart.fnType(dart.void, [core.bool]),
    isHovered: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_toggle__material_toggle.MaterialToggleComponent, () => ({
    __proto__: dart.getFields(material_toggle__material_toggle.MaterialToggleComponent.__proto__),
    toggleElement: dart.fieldType(html.HtmlElement),
    disabled: dart.fieldType(core.bool),
    [_checked]: dart.fieldType(core.bool),
    [_controller]: dart.finalFieldType(StreamControllerOfbool()),
    label: dart.fieldType(core.String),
    [_ariaLabel]: dart.fieldType(core.String),
    shadow_z: dart.fieldType(core.int),
    [_hasFocus]: dart.fieldType(core.bool),
    [_isHovered]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_toggle/material_toggle.ddc", {
    "package:angular_components/material_toggle/material_toggle.dart": material_toggle__material_toggle
  }, '{"version":3,"sourceRoot":"","sources":["material_toggle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;IAmCc;;;;;;;AAIV,4BAAgB;IAClB;IAMK;;;;;;gBAMO,KAAU;AACpB,oBAAQ,GAAG,KAAK;AAChB,4BAAgB;IAClB;;YAEoB,eAAQ;;;YAOE,kBAAW,OAAO;;IAIzC;;;;;;kBAIO,KAAY;AACxB,sBAAU,GAAG,KAAK;IACpB;;cAEwB,gBAAU;6BAAI,UAAK;;IAIvC;;;;;;;YAGiB,gBAAS;;iBACjB,KAAU;AACrB,qBAAS,GAAG,KAAK;AACjB,0BAAc;IAChB;;YAGsB,iBAAU;;kBAClB,KAAU;AACtB,sBAAU,GAAG,KAAK;AAClB,0BAAc;IAChB;;YAEqB,AAAc,WAAT,IAAI,QAAQ,UAAK,aAAW;;;AAGpD,mBAAQ,aAAG,cAAS,IAAG,cAAI,aAAQ,IAAG,IAAI;IAC5C;;AAIE,qBAAK,aAAQ,GAAE;AACb,oBAAO,GAAG,WAAC,YAAO;AAClB,yBAAW,IAAI,CAAC,YAAO;;IAE3B;gBAEiB,UAAqB;AACpC,wBAAa;AACb,gBAAU,eAAe;AACzB,gBAAU,gBAAgB;IAC5B;mBAEoB,QAAsB;AACxC,UAAI,UAAU,QAAQ,QAAQ;AAC9B,UAAI,OAAO,KAAI,YAAO,MAAM,cAAI,yCAAU,CAAC,QAAQ,IAAG;AACpD,0BAAa;AACb,gBAAQ,eAAe;AACvB,gBAAQ,gBAAgB;;IAE5B;;AAGE,UAAI,kBAAa,IAAI,MAAM;AAC3B,wBAAa,aAAW,QAAC,gBAAkB,WAAE,YAAO;IACtD;;;IA7FY,mBAAa;IAWpB,cAAQ,GAAG;IAYX,cAAQ,GAAG;IAEV,iBAAW,GAAG,AAAI,kCAAgC;IAQjD,WAAK;IASL,gBAAU;IAGb,cAAQ,GAAG;IAEV,eAAS,GAAG;IAOZ,gBAAU,GAAG;EAwCpB","file":"material_toggle.ddc.js"}');
  // Exports:
  return {
    material_toggle__material_toggle: material_toggle__material_toggle
  };
});

//# sourceMappingURL=material_toggle.ddc.js.map
