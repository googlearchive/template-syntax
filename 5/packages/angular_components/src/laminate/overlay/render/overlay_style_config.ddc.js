define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__laminate__overlay__render__overlay_style_config = Object.create(_root);
  const $text = dartx.text;
  const $append = dartx.append;
  const _styleHost = Symbol('_styleHost');
  const _document = Symbol('_document');
  const _stylesRegistered = Symbol('_stylesRegistered');
  src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig = class OverlayStyleConfig extends core.Object {
    registerStyles() {
      if (dart.test(this.stylesRegistered)) return;
      this[_styleHost][$append]((() => {
        let _ = html.StyleElement.new();
        _.id = "__overlay_styles";
        _[$text] = "  #default-acx-overlay-container,\n  .acx-overlay-container {\n    position: absolute;\n\n    /* Disable event captures. This is an invisible container! */\n    pointer-events: none;\n\n    /* Make this full width and height in the viewport. */\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100%;\n\n    /* TODO(google): Use the ACX z-index guide instead. */\n    z-index: 10;\n  }\n\n  .acx-overlay-container > .pane {\n    display: flex;\n    /* TODO(google): verify prefixing flexbox fixes popups in IE */\n    display: -ms-flexbox;\n    position: absolute;\n\n    /* TODO(google): Use the ACX z-index guide instead. */\n    z-index: 11;\n\n    /* Disable event captures. This is an invisible container!\n       Panes that would like to capture events can enable this with .modal. */\n    pointer-events: none;\n  }\n\n  /* Children should have normal events. */\n  .acx-overlay-container > .pane > * { pointer-events: auto; }\n\n  .acx-overlay-container > .pane.modal {\n    justify-content: center;\n    align-items: center;\n    background: rgba(33,33,33,.4);\n    pointer-events: auto;\n\n    /* TODO(google): Pull out into a .fixed class instead. */\n    position: fixed;\n\n    /* Promote the .modal element to its own layer to fix scrolling issues.\n       will-change: transform is preferred, but not yet supported by Edge. */\n    -webkit-backface-visibility: hidden;  /* Safari 9/10 */\n    backface-visibility: hidden;\n  }\n\n  .acx-overlay-container > .pane,\n  .acx-overlay-container > .pane > * {\n    display: flex;\n    display: -ms-flexbox;\n  }\n\n  /* Optional debug mode that highlights the container and individual panes.\n     TODO(google): Pull this into a mixin so it won't get auto-exported. */\n  .acx-overlay-container.debug {\n    background: rgba(255, 0, 0, 0.15);\n  }\n\n  .acx-overlay-container.debug > .pane {\n    background: rgba(0, 0, 2555, 0.15);\n  }\n\n  .acx-overlay-container.debug > .pane.modal {\n    background: rgba(0, 0, 0, 0.30);\n  }\n";
        return _;
      })());
      this[_stylesRegistered] = true;
    }
    get stylesRegistered() {
      if (dart.test(this[_stylesRegistered])) return true;
      let styleNode = this[_document].querySelector(dart.str`#${"__overlay_styles"}`);
      if (styleNode != null) this[_stylesRegistered] = true;
      return this[_stylesRegistered];
    }
  };
  (src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new = function(document) {
    this[_stylesRegistered] = false;
    this[_styleHost] = html.HeadElement._check(document.querySelector('head'));
    this[_document] = document;
  }).prototype = src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.prototype;
  dart.addTypeTests(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig);
  dart.setMethodSignature(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, () => ({
    __proto__: dart.getMethods(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.__proto__),
    registerStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, () => ({
    __proto__: dart.getGetters(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.__proto__),
    stylesRegistered: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, () => ({
    __proto__: dart.getFields(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.__proto__),
    [_styleHost]: dart.finalFieldType(html.HeadElement),
    [_stylesRegistered]: dart.fieldType(core.bool),
    [_document]: dart.fieldType(html.Document)
  }));
  dart.defineLazy(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, {
    /*src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig._styleId*/get _styleId() {
      return "__overlay_styles";
    },
    /*src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.inlinedStyles*/get inlinedStyles() {
      return '  #default-acx-overlay-container,\n  .acx-overlay-container {\n    position: absolute;\n\n    /* Disable event captures. This is an invisible container! */\n    pointer-events: none;\n\n    /* Make this full width and height in the viewport. */\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100%;\n\n    /* TODO(google): Use the ACX z-index guide instead. */\n    z-index: 10;\n  }\n\n  .acx-overlay-container > .pane {\n    display: flex;\n    /* TODO(google): verify prefixing flexbox fixes popups in IE */\n    display: -ms-flexbox;\n    position: absolute;\n\n    /* TODO(google): Use the ACX z-index guide instead. */\n    z-index: 11;\n\n    /* Disable event captures. This is an invisible container!\n       Panes that would like to capture events can enable this with .modal. */\n    pointer-events: none;\n  }\n\n  /* Children should have normal events. */\n  .acx-overlay-container > .pane > * { pointer-events: auto; }\n\n  .acx-overlay-container > .pane.modal {\n    justify-content: center;\n    align-items: center;\n    background: rgba(33,33,33,.4);\n    pointer-events: auto;\n\n    /* TODO(google): Pull out into a .fixed class instead. */\n    position: fixed;\n\n    /* Promote the .modal element to its own layer to fix scrolling issues.\n       will-change: transform is preferred, but not yet supported by Edge. */\n    -webkit-backface-visibility: hidden;  /* Safari 9/10 */\n    backface-visibility: hidden;\n  }\n\n  .acx-overlay-container > .pane,\n  .acx-overlay-container > .pane > * {\n    display: flex;\n    display: -ms-flexbox;\n  }\n\n  /* Optional debug mode that highlights the container and individual panes.\n     TODO(google): Pull this into a mixin so it won\'t get auto-exported. */\n  .acx-overlay-container.debug {\n    background: rgba(255, 0, 0, 0.15);\n  }\n\n  .acx-overlay-container.debug > .pane {\n    background: rgba(0, 0, 2555, 0.15);\n  }\n\n  .acx-overlay-container.debug > .pane.modal {\n    background: rgba(0, 0, 0, 0.30);\n  }\n';
    }
  });
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/render/overlay_style_config.ddc", {
    "package:angular_components/src/laminate/overlay/render/overlay_style_config.dart": src__laminate__overlay__render__overlay_style_config
  }, '{"version":3,"sourceRoot":"","sources":["overlay_style_config.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAiGI,oBAAI,qBAAgB,GAAE;AACtB,sBAAU,SAAO;gBAAC,AAAI,qBAAY;eACzB,kBAAQ;mBACN,m9DAAa;;;AACxB,6BAAiB,GAAG;IACtB;;AAGE,oBAAI,uBAAiB,GAAE,MAAO;AAC9B,UAAI,YAAY,eAAS,cAAc,CAAC,YAAG,kBAAQ;AACnD,UAAI,SAAS,IAAI,MAAM,uBAAiB,GAAG;AAC3C,YAAO,wBAAiB;IAC1B;;0FAjBmB,QAAiB;IAH/B,uBAAiB,GAAG;IAInB,gBAAU,2BAAG,QAAQ,cAAc,CAAC;IACpC,eAAS,GAAG,QAAQ;;;;;;;;;;;;;;;;;;MAhFb,gFAAQ;YAAG;;MAEX,qFAAa;YAAG","file":"overlay_style_config.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__render__overlay_style_config: src__laminate__overlay__render__overlay_style_config
  };
});

//# sourceMappingURL=overlay_style_config.ddc.js.map
