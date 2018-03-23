define(['dart_sdk', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/mixins/has_tab_index.template', 'packages/angular_components/utils/browser/events/events.template'], function(dart_sdk, directive_change_detector, button_decorator, angular, focus, has_tab_index, events) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const mixins__has_tab_index$46template = has_tab_index.mixins__has_tab_index$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const _root = Object.create(null);
  const button_decorator__button_decorator$46template = Object.create(_root);
  const $toString = dartx.toString;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  button_decorator__button_decorator$46template.ButtonDirectiveNgCd = class ButtonDirectiveNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.tabIndex;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setProp(el, 'tabIndex', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.instance.disabledStr;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(el, 'aria-disabled', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.instance.disabled;
      if (!(this[_expr_2] == currVal_2)) {
        this.updateElemClass(el, 'is-disabled', currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
  };
  (button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[instance$] = instance;
    button_decorator__button_decorator$46template.ButtonDirectiveNgCd.__proto__.new.call(this);
  }).prototype = button_decorator__button_decorator$46template.ButtonDirectiveNgCd.prototype;
  dart.addTypeTests(button_decorator__button_decorator$46template.ButtonDirectiveNgCd);
  const instance$ = Symbol("ButtonDirectiveNgCd.instance");
  dart.setFieldSignature(button_decorator__button_decorator$46template.ButtonDirectiveNgCd, () => ({
    __proto__: dart.getFields(button_decorator__button_decorator$46template.ButtonDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(button_decorator__button_decorator.ButtonDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(button_decorator__button_decorator$46template, {
    /*button_decorator__button_decorator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  button_decorator__button_decorator$46template.initReflector = function() {
    if (dart.test(button_decorator__button_decorator$46template._visited)) {
      return;
    }
    button_decorator__button_decorator$46template._visited = true;
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    mixins__has_tab_index$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
  };
  dart.fn(button_decorator__button_decorator$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/button_decorator/button_decorator.template.ddc", {
    "package:angular_components/button_decorator/button_decorator.template.dart": button_decorator__button_decorator$46template
  }, '{"version":3,"sourceRoot":"","sources":["button_decorator.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAuBgC;;;;;;sBAKP,IAAqB,EAAE,EAAkB;AAC9D,UAAM,YAAY,aAAQ,SAAS;AACnC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,oBAAO,CAAC,EAAE,EAAE,YAAY,SAAS;AACjC,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,aAAQ,YAAY;AACtC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,oBAAO,CAAC,EAAE,EAAE,iBAAiB,SAAS,gCAAT,SAAS;AACtC,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,aAAQ,SAAS;AACnC,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,EAAE,EAAE,eAAe,SAAS;AAC5C,qBAAO,GAAG,SAAS;;IAEvB;;oFAjBoB,QAAa;IAH7B,aAAO;IACP,aAAO;IACN,aAAO;IACa,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;;;MAoBhC,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,8CAAa;AACnB,IAAM,uDAAa;EACrB","file":"button_decorator.template.ddc.js"}');
  // Exports:
  return {
    button_decorator__button_decorator$46template: button_decorator__button_decorator$46template
  };
});

//# sourceMappingURL=button_decorator.template.ddc.js.map
