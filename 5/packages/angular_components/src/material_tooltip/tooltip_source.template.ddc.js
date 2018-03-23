define(['dart_sdk', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/src/material_tooltip/tooltip_source', 'packages/angular/angular.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/model/ui/toggle.template'], function(dart_sdk, directive_change_detector, tooltip_source, angular, popup, delayed_action, toggle) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const src__material_tooltip__tooltip_source = tooltip_source.src__material_tooltip__tooltip_source;
  const angular$46template = angular.angular$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const model__action__delayed_action$46template = delayed_action.model__action__delayed_action$46template;
  const model__ui__toggle$46template = toggle.model__ui__toggle$46template;
  const _root = Object.create(null);
  const src__material_tooltip__tooltip_source$46template = Object.create(_root);
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd = class MaterialTooltipSourceDirectiveNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let firstCheck = view.cdState === 0;
      if (firstCheck) {
        el.style[$setProperty]('cursor', 'pointer'[$toString]());
      }
    }
  };
  (src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.new = function(instance) {
    this[instance$] = instance;
    src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.__proto__.new.call(this);
  }).prototype = src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd);
  const instance$ = Symbol("MaterialTooltipSourceDirectiveNgCd.instance");
  dart.setFieldSignature(src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(src__material_tooltip__tooltip_source.MaterialTooltipSourceDirective)
  }));
  dart.defineLazy(src__material_tooltip__tooltip_source$46template, {
    /*src__material_tooltip__tooltip_source$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tooltip__tooltip_source$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__tooltip_source$46template._visited)) {
      return;
    }
    src__material_tooltip__tooltip_source$46template._visited = true;
    angular$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    model__action__delayed_action$46template.initReflector();
    model__ui__toggle$46template.initReflector();
  };
  dart.fn(src__material_tooltip__tooltip_source$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/src/material_tooltip/tooltip_source.template.ddc", {
    "package:angular_components/src/material_tooltip/tooltip_source.template.dart": src__material_tooltip__tooltip_source$46template
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_source.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAuB+C;;;;;;sBAEtB,IAAqB,EAAE,EAAkB;AAC9D,UAAK,aAAc,IAAI,QAAQ,KAAI;AACnC,UAAI,UAAU,EAAE;AACd,UAAE,MAAM,cAAY,CAAC,UAAU,oBAAmB;;IAEtD;;sGANmC,QAAa;IAAR,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;MAS/C,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,0CAAa;EACrB","file":"tooltip_source.template.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip_source$46template: src__material_tooltip__tooltip_source$46template
  };
});

//# sourceMappingURL=tooltip_source.template.ddc.js.map
