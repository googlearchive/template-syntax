define(['dart_sdk', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/focus/focus_item', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template'], function(dart_sdk, directive_change_detector, focus_item, angular, focus) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const focus__focus_item = focus_item.focus__focus_item;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const _root = Object.create(null);
  const focus__focus_item$46template = Object.create(_root);
  const $toString = dartx.toString;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _expr_1 = Symbol('_expr_1');
  focus__focus_item$46template.FocusItemDirectiveNgCd = class FocusItemDirectiveNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let firstCheck = view.cdState === 0;
      if (firstCheck) {
        if (!(this.instance.role == null)) {
          this.setAttr(el, 'role', this.instance.role == null ? null : dart.toString(this.instance.role));
        }
      }
      let currVal_1 = this.instance.tabIndex;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setAttr(el, 'tabindex', currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
    }
  };
  (focus__focus_item$46template.FocusItemDirectiveNgCd.new = function(instance) {
    this[_expr_1] = null;
    this[instance$] = instance;
    focus__focus_item$46template.FocusItemDirectiveNgCd.__proto__.new.call(this);
  }).prototype = focus__focus_item$46template.FocusItemDirectiveNgCd.prototype;
  dart.addTypeTests(focus__focus_item$46template.FocusItemDirectiveNgCd);
  const instance$ = Symbol("FocusItemDirectiveNgCd.instance");
  dart.setFieldSignature(focus__focus_item$46template.FocusItemDirectiveNgCd, () => ({
    __proto__: dart.getFields(focus__focus_item$46template.FocusItemDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(focus__focus_item.FocusItemDirective),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(focus__focus_item$46template, {
    /*focus__focus_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  focus__focus_item$46template.initReflector = function() {
    if (dart.test(focus__focus_item$46template._visited)) {
      return;
    }
    focus__focus_item$46template._visited = true;
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
  };
  dart.fn(focus__focus_item$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/focus/focus_item.template.ddc", {
    "package:angular_components/focus/focus_item.template.dart": focus__focus_item$46template
  }, '{"version":3,"sourceRoot":"","sources":["focus_item.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAmBmC;;;;;;sBAGV,IAAqB,EAAE,EAAkB;AAC9D,UAAK,aAAc,IAAI,QAAQ,KAAI;AACnC,UAAI,UAAU,EAAE;AACd,cAAK,AAAU,aAAQ,KAAK,IAAE,OAAO;AACnC,sBAAO,CAAC,EAAE,EAAE,QAAQ,aAAQ,KAAK,gCAAb,aAAQ,KAAK;;;AAGrC,UAAM,YAAY,aAAQ,SAAS;AACnC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,oBAAO,CAAC,EAAE,EAAE,YAAY,SAAS,gCAAT,SAAS;AACjC,qBAAO,GAAG,SAAS;;IAEvB;;sEAbuB,QAAa;IADhC,aAAO;IACiB,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;MAgBnC,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,qCAAa;EACrB","file":"focus_item.template.ddc.js"}');
  // Exports:
  return {
    focus__focus_item$46template: focus__focus_item$46template
  };
});

//# sourceMappingURL=focus_item.template.ddc.js.map
