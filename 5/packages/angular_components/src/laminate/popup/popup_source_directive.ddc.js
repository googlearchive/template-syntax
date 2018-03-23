define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/src/laminate/popup/popup_source', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference'], function(dart_sdk, alignment, popup_source, lifecycle_hooks, dom_popup_source, reference) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__laminate__popup__popup_source = popup_source.src__laminate__popup__popup_source;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const _root = Object.create(null);
  const src__laminate__popup__popup_source_directive = Object.create(_root);
  const _domPopupSourceFactory = Symbol('_domPopupSourceFactory');
  const _element = Symbol('_element');
  const _referenceDirective = Symbol('_referenceDirective');
  const _alignOriginX = Symbol('_alignOriginX');
  const _alignOriginY = Symbol('_alignOriginY');
  const _popupSource = Symbol('_popupSource');
  const _popupId = Symbol('_popupId');
  const _updateSource = Symbol('_updateSource');
  src__laminate__popup__popup_source_directive.PopupSourceDirective = class PopupSourceDirective extends core.Object {
    ngOnDestroy() {
      this[_element] = null;
      this[_popupSource] = null;
      this[_referenceDirective] = null;
    }
    ngAfterViewInit() {
      this[_element] = html.HtmlElement._check((() => {
        let t = this[_referenceDirective];
        let t$ = t == null ? null : t.elementRef;
        let l = t$ == null ? null : t$.nativeElement;
        return l != null ? l : this[_element];
      })());
      this[_updateSource]();
    }
    get sourceElement() {
      return this[_element];
    }
    get alignOriginX() {
      return this[_popupSource].alignOriginX;
    }
    set alignX(align) {
      this[_alignOriginX] = laminate__enums__alignment.Alignment.parse(align);
      this[_updateSource]();
    }
    get alignOriginY() {
      return this[_popupSource].alignOriginY;
    }
    set alignY(align) {
      this[_alignOriginY] = laminate__enums__alignment.Alignment.parse(align);
      this[_updateSource]();
    }
    onDimensionsChanged(opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      return this[_popupSource].onDimensionsChanged({track: track}).distinct();
    }
    get dimensions() {
      let t = this[_popupSource];
      return t == null ? null : t.dimensions;
    }
    get isRtl() {
      return this[_popupSource].isRtl;
    }
    set popupId(id) {
      this[_popupId] = id;
      let l = this[_popupSource];
      l == null ? null : l.popupId = id;
    }
    [_updateSource]() {
      this[_popupSource] = this[_domPopupSourceFactory].createPopupSource(this[_element], {alignOriginX: this[_alignOriginX], alignOriginY: this[_alignOriginY]});
      if (this[_popupId] != null) {
        this[_popupSource].popupId = this[_popupId];
      }
    }
  };
  (src__laminate__popup__popup_source_directive.PopupSourceDirective.new = function(domPopupSourceFactory, element, referenceDirective) {
    this[_alignOriginX] = laminate__enums__alignment.Alignment.Start;
    this[_alignOriginY] = laminate__enums__alignment.Alignment.Start;
    this[_popupSource] = null;
    this[_popupId] = null;
    this[_domPopupSourceFactory] = domPopupSourceFactory;
    this[_element] = element;
    this[_referenceDirective] = referenceDirective;
  }).prototype = src__laminate__popup__popup_source_directive.PopupSourceDirective.prototype;
  dart.addTypeTests(src__laminate__popup__popup_source_directive.PopupSourceDirective);
  src__laminate__popup__popup_source_directive.PopupSourceDirective[dart.implements] = () => [src__laminate__popup__popup_source.ElementPopupSource, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__laminate__popup__popup_source_directive.PopupSourceDirective, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_source_directive.PopupSourceDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.dynamic, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    onDimensionsChanged: dart.fnType(async.Stream$(math.Rectangle$(core.num)), [], {track: core.bool}),
    [_updateSource]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__laminate__popup__popup_source_directive.PopupSourceDirective, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_source_directive.PopupSourceDirective.__proto__),
    sourceElement: dart.fnType(html.HtmlElement, []),
    alignOriginX: dart.fnType(laminate__enums__alignment.Alignment, []),
    alignOriginY: dart.fnType(laminate__enums__alignment.Alignment, []),
    dimensions: dart.fnType(math.Rectangle$(core.num), []),
    isRtl: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(src__laminate__popup__popup_source_directive.PopupSourceDirective, () => ({
    __proto__: dart.getSetters(src__laminate__popup__popup_source_directive.PopupSourceDirective.__proto__),
    alignX: dart.fnType(dart.void, [core.String]),
    alignY: dart.fnType(dart.void, [core.String]),
    popupId: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_source_directive.PopupSourceDirective, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_source_directive.PopupSourceDirective.__proto__),
    [_domPopupSourceFactory]: dart.finalFieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [_element]: dart.fieldType(html.HtmlElement),
    [_referenceDirective]: dart.fieldType(utils__angular__reference__reference.ReferenceDirective),
    [_alignOriginX]: dart.fieldType(laminate__enums__alignment.Alignment),
    [_alignOriginY]: dart.fieldType(laminate__enums__alignment.Alignment),
    [_popupSource]: dart.fieldType(src__laminate__popup__popup_source.PopupSource),
    [_popupId]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_source_directive.ddc", {
    "package:angular_components/src/laminate/popup/popup_source_directive.dart": src__laminate__popup__popup_source_directive
  }, '{"version":3,"sourceRoot":"","sources":["popup_source_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AA+CI,oBAAQ,GAAG;AACX,wBAAY,GAAG;AACf,+BAAmB,GAAG;IACxB;;AAKE,oBAAQ;gBAAG,yBAAmB;;;+BAA+B,cAAQ;;AACrE,yBAAa;IACf;;YAGiC,eAAQ;;;YAGX,mBAAY,aAAa;;eAG5C,KAAY;AACrB,yBAAa,GAAG,AAAI,0CAAe,CAAC,KAAK;AACzC,yBAAa;IACf;;YAG8B,mBAAY,aAAa;;eAG5C,KAAY;AACrB,yBAAa,GAAG,AAAI,0CAAe,CAAC,KAAK;AACzC,yBAAa;IACf;;UAGiD,+CAAO;AACtD,YAAO,mBAAY,oBAAoB,SAAQ,KAAK,WAAU;IAChE;;cAG4B,kBAAY;;IAAY;;YAGlC,mBAAY,MAAM;;gBAGxB,EAAS;AACnB,oBAAQ,GAAG,EAAE;AACb,gCAAY;qCAAY,EAAE;IAC5B;;AAGE,wBAAY,GAAG,4BAAsB,kBAAkB,CACrD,cAAQ,iBACM,mBAAa,gBACb,mBAAa;AAG7B,UAAI,cAAQ,IAAI,MAAM;AACpB,0BAAY,QAAQ,GAAG,cAAQ;;IAEnC;;oFAjE0B,qBAAsB,EAAO,OAAQ,EAC1C,kBAAmB;IAP9B,mBAAa,GAAG,oCAAS,MAAM;IAC/B,mBAAa,GAAG,oCAAS,MAAM;IAE7B,kBAAY;IACjB,cAAQ;IAEW,4BAAsB,GAAtB,qBAAsB;IAAO,cAAQ,GAAR,OAAQ;IAC1C,yBAAmB,GAAnB,kBAAmB;EAAC","file":"popup_source_directive.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_source_directive: src__laminate__popup__popup_source_directive
  };
});

//# sourceMappingURL=popup_source_directive.ddc.js.map
