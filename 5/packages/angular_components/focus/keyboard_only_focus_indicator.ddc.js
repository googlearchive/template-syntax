define(['dart_sdk', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const _root = Object.create(null);
  const focus__keyboard_only_focus_indicator = Object.create(_root);
  const $outline = dartx.outline;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _element = Symbol('_element');
  const _domService = Symbol('_domService');
  focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective = class KeyboardOnlyFocusIndicatorDirective extends core.Object {
    resetOutline() {
      this[_domService].scheduleWrite(dart.fn(() => {
        this[_element].style[$outline] = '';
      }, VoidToNull()));
    }
    hideOutline() {
      this[_domService].scheduleWrite(dart.fn(() => {
        this[_element].style[$outline] = 'none';
      }, VoidToNull()));
    }
    focus(event) {
      if (event === void 0) event = null;
      this[_domService].scheduleWrite(dart.fn(() => {
        this[_element].focus();
      }, VoidToNull()));
      if (html.MouseEvent.is(event)) {
        this.hideOutline();
      } else {
        this.resetOutline();
      }
    }
  };
  (focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new = function(element, domService) {
    this[_element] = element;
    this[_domService] = domService;
  }).prototype = focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.prototype;
  dart.addTypeTests(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective);
  dart.setMethodSignature(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, () => ({
    __proto__: dart.getMethods(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.__proto__),
    resetOutline: dart.fnType(dart.void, []),
    hideOutline: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, [], [html.UIEvent])
  }));
  dart.setFieldSignature(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, () => ({
    __proto__: dart.getFields(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.__proto__),
    [_element]: dart.finalFieldType(html.HtmlElement),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService)
  }));
  dart.trackLibraries("packages/angular_components/focus/keyboard_only_focus_indicator.ddc", {
    "package:angular_components/focus/keyboard_only_focus_indicator.dart": focus__keyboard_only_focus_indicator
  }, '{"version":3,"sourceRoot":"","sources":["keyboard_only_focus_indicator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AA2BI,uBAAW,cAAc,CAAC;AACxB,sBAAQ,MAAM,UAAQ,GAAG;;IAE7B;;AAKE,uBAAW,cAAc,CAAC;AACxB,sBAAQ,MAAM,UAAQ,GAAG;;IAE7B;UAiBY,KAAa;4BAAL;AAClB,uBAAW,cAAc,CAAC;AACxB,sBAAQ,MAAM;;AAEhB,6BAAI,KAAK,GAAgB;AACvB,wBAAW;aACN;AACL,yBAAY;;IAEhB;;2FA1CyC,OAAQ,EAAO,UAAW;IAA1B,cAAQ,GAAR,OAAQ;IAAO,iBAAW,GAAX,UAAW;EAAC","file":"keyboard_only_focus_indicator.ddc.js"}');
  // Exports:
  return {
    focus__keyboard_only_focus_indicator: focus__keyboard_only_focus_indicator
  };
});

//# sourceMappingURL=keyboard_only_focus_indicator.ddc.js.map
