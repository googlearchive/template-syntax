define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__click_directive = Object.create(_root);
  const $onClick = dartx.onClick;
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  const _onClick = Symbol('_onClick');
  const _toggle = Symbol('_toggle');
  src__click_directive.ClickDirective = class ClickDirective extends core.Object {
    get clicks() {
      return this[_onClick].stream;
    }
  };
  (src__click_directive.ClickDirective.new = function(el) {
    this[_onClick] = StreamControllerOfString().new();
    this[_toggle] = false;
    el[$onClick].listen(dart.fn(e => {
      this[_toggle] = !dart.test(this[_toggle]);
      this[_onClick].add(dart.test(this[_toggle]) ? 'Click!' : '');
    }, EventToNull()));
  }).prototype = src__click_directive.ClickDirective.prototype;
  dart.addTypeTests(src__click_directive.ClickDirective);
  dart.setGetterSignature(src__click_directive.ClickDirective, () => ({
    __proto__: dart.getGetters(src__click_directive.ClickDirective.__proto__),
    clicks: dart.fnType(async.Stream$(core.String), [])
  }));
  dart.setFieldSignature(src__click_directive.ClickDirective, () => ({
    __proto__: dart.getFields(src__click_directive.ClickDirective.__proto__),
    [_onClick]: dart.finalFieldType(StreamControllerOfString()),
    [_toggle]: dart.fieldType(core.bool)
  }));
  src__click_directive.ClickDirective2 = class ClickDirective2 extends core.Object {
    get clicks() {
      return this[_onClick].stream;
    }
  };
  (src__click_directive.ClickDirective2.new = function(el) {
    this[_onClick] = StreamControllerOfString().new();
    this[_toggle] = false;
    el[$onClick].listen(dart.fn(e => {
      this[_toggle] = !dart.test(this[_toggle]);
      this[_onClick].add(dart.test(this[_toggle]) ? 'Click2!' : '');
    }, EventToNull()));
  }).prototype = src__click_directive.ClickDirective2.prototype;
  dart.addTypeTests(src__click_directive.ClickDirective2);
  dart.setGetterSignature(src__click_directive.ClickDirective2, () => ({
    __proto__: dart.getGetters(src__click_directive.ClickDirective2.__proto__),
    clicks: dart.fnType(async.Stream$(core.String), [])
  }));
  dart.setFieldSignature(src__click_directive.ClickDirective2, () => ({
    __proto__: dart.getFields(src__click_directive.ClickDirective2.__proto__),
    [_onClick]: dart.finalFieldType(StreamControllerOfString()),
    [_toggle]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/template_syntax/src/click_directive.ddc", {
    "package:template_syntax/src/click_directive.dart": src__click_directive
  }, '{"version":3,"sourceRoot":"","sources":["click_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;YAU+B,eAAQ,OAAO;;;sDAI7B,EAAU;IAPnB,cAAQ,GAAG,AAAI,8BAAwB;IAKxC,aAAO,GAAG;AAGb,MAAE,UAAQ,OAAO,CAAC,QAAC,CAAO;AACxB,mBAAO,GAAG,WAAC,aAAO;AAClB,oBAAQ,IAAI,WAAC,aAAO,IAAG,WAAW;;EAEtC;;;;;;;;;;;;;YAO6B,eAAQ,OAAO;;;uDAG5B,EAAU;IALpB,cAAQ,GAAG,AAAI,8BAAwB;IAGxC,aAAO,GAAG;AAGb,MAAE,UAAQ,OAAO,CAAC,QAAC,CAAO;AACxB,mBAAO,GAAG,WAAC,aAAO;AAClB,oBAAQ,IAAI,WAAC,aAAO,IAAG,YAAY;;EAEvC","file":"click_directive.ddc.js"}');
  // Exports:
  return {
    src__click_directive: src__click_directive
  };
});

//# sourceMappingURL=click_directive.ddc.js.map
