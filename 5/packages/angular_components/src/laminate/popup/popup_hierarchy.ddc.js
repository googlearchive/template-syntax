define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular/src/core/linker/element_ref'], function(dart_sdk, events, element_ref) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events = events.utils__browser__events__events;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const _root = Object.create(null);
  const src__laminate__popup__popup_hierarchy = Object.create(_root);
  const $clear = dartx.clear;
  const $isEmpty = dartx.isEmpty;
  const $add = dartx.add;
  const $remove = dartx.remove;
  const $querySelectorAll = dartx.querySelectorAll;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $target = dartx.target;
  let JSArrayOfPopupHierarchyElement = () => (JSArrayOfPopupHierarchyElement = dart.constFn(_interceptors.JSArray$(src__laminate__popup__popup_hierarchy.PopupHierarchyElement)))();
  let ListOfPopupHierarchyElement = () => (ListOfPopupHierarchyElement = dart.constFn(core.List$(src__laminate__popup__popup_hierarchy.PopupHierarchyElement)))();
  const _visiblePopupStack = Symbol('_visiblePopupStack');
  const _rootPane = Symbol('_rootPane');
  const _dismissListener = Symbol('_dismissListener');
  const _disposeDismissListener = Symbol('_disposeDismissListener');
  const _onTriggersOutside = Symbol('_onTriggersOutside');
  const _attach = Symbol('_attach');
  const _detach = Symbol('_detach');
  src__laminate__popup__popup_hierarchy.PopupHierarchy = class PopupHierarchy extends core.Object {
    closeHierarchy() {
      for (let popup of this[_visiblePopupStack]) {
        popup.onDismiss();
      }
      this[_visiblePopupStack][$clear]();
      this[_disposeDismissListener]();
    }
    [_attach](child) {
      if (dart.test(this[_visiblePopupStack][$isEmpty])) {
        this[_rootPane] = utils__browser__events__events.closestWithClass(html.Element._check(child.elementRef.nativeElement), 'pane');
      }
      this[_visiblePopupStack][$add](child);
      if (this[_dismissListener] == null) {
        this[_dismissListener] = utils__browser__events__events.triggersOutside(null).listen(dart.bind(this, _onTriggersOutside));
      }
    }
    [_disposeDismissListener]() {
      this[_dismissListener].cancel();
      this[_dismissListener] = null;
    }
    [_detach](child) {
      if (dart.test(this[_visiblePopupStack][$remove](child)) && dart.test(this[_visiblePopupStack][$isEmpty])) {
        this[_rootPane] = null;
        this[_disposeDismissListener]();
      }
    }
    [_onTriggersOutside](event) {
      let modalPanes = html.document[$querySelectorAll](html.Element, '.acx-overlay-container .pane.modal.visible');
      if (dart.test(modalPanes.isNotEmpty)) {
        if (!dart.equals(this[_rootPane], modalPanes.first)) return;
      }
      for (let i = dart.notNull(this[_visiblePopupStack][$length]) - 1; i >= 0; i--) {
        let current = this[_visiblePopupStack][$_get](i);
        if (current.container == null) continue;
        if (dart.test(utils__browser__events__events.isParentOf(current.container, html.Node._check(event[$target])))) return;
        for (let blockerElement of current.autoDismissBlockers) {
          if (dart.test(utils__browser__events__events.isParentOf(blockerElement, html.Node._check(event[$target])))) return;
        }
        if (dart.test(current.autoDismiss)) current.onDismiss();
      }
    }
  };
  (src__laminate__popup__popup_hierarchy.PopupHierarchy.new = function() {
    this[_visiblePopupStack] = JSArrayOfPopupHierarchyElement().of([]);
    this[_rootPane] = null;
    this[_dismissListener] = null;
  }).prototype = src__laminate__popup__popup_hierarchy.PopupHierarchy.prototype;
  dart.addTypeTests(src__laminate__popup__popup_hierarchy.PopupHierarchy);
  dart.setMethodSignature(src__laminate__popup__popup_hierarchy.PopupHierarchy, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_hierarchy.PopupHierarchy.__proto__),
    closeHierarchy: dart.fnType(dart.void, []),
    [_attach]: dart.fnType(dart.void, [src__laminate__popup__popup_hierarchy.PopupHierarchyElement]),
    [_disposeDismissListener]: dart.fnType(dart.void, []),
    [_detach]: dart.fnType(dart.void, [src__laminate__popup__popup_hierarchy.PopupHierarchyElement]),
    [_onTriggersOutside]: dart.fnType(dart.void, [html.Event])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_hierarchy.PopupHierarchy, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_hierarchy.PopupHierarchy.__proto__),
    [_visiblePopupStack]: dart.finalFieldType(ListOfPopupHierarchyElement()),
    [_rootPane]: dart.fieldType(html.Element),
    [_dismissListener]: dart.fieldType(async.StreamSubscription)
  }));
  src__laminate__popup__popup_hierarchy.PopupHierarchyElement = class PopupHierarchyElement extends core.Object {
    get elementRef() {
      return null;
    }
    attachToVisibleHierarchy() {
      this.hierarchy[_attach](this);
    }
    detachFromVisibleHierarchy() {
      this.hierarchy[_detach](this);
    }
  };
  (src__laminate__popup__popup_hierarchy.PopupHierarchyElement.new = function() {
  }).prototype = src__laminate__popup__popup_hierarchy.PopupHierarchyElement.prototype;
  dart.addTypeTests(src__laminate__popup__popup_hierarchy.PopupHierarchyElement);
  dart.setMethodSignature(src__laminate__popup__popup_hierarchy.PopupHierarchyElement, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_hierarchy.PopupHierarchyElement.__proto__),
    attachToVisibleHierarchy: dart.fnType(dart.void, []),
    detachFromVisibleHierarchy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__laminate__popup__popup_hierarchy.PopupHierarchyElement, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_hierarchy.PopupHierarchyElement.__proto__),
    elementRef: dart.fnType(src__core__linker__element_ref.ElementRef, [])
  }));
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_hierarchy.ddc", {
    "package:angular_components/src/laminate/popup/popup_hierarchy.dart": src__laminate__popup__popup_hierarchy
  }, '{"version":3,"sourceRoot":"","sources":["popup_hierarchy.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsBI,eAAS,QAAS,yBAAkB,EAAE;AACpC,aAAK,UAAU;;AAGjB,8BAAkB,QAAM;AACxB,mCAAuB;IACzB;cAEa,KAA2B;AACtC,oBAAI,wBAAkB,UAAQ,GAAE;AAC9B,uBAAS,GACL,AAAO,+CAAgB,qBAAC,KAAK,WAAW,cAAc,GAAE;;AAE9D,8BAAkB,MAAI,CAAC,KAAK;AAE5B,UAAI,sBAAgB,IAAI,MAAM;AAE5B,8BAAgB,GACZ,AAAO,8CAAe,CAAC,YAAY,CAAC,mCAAkB;;IAE9D;;AAGE,4BAAgB,OAAO;AACvB,4BAAgB,GAAG;IACrB;cAEa,KAA2B;AACtC,oBAAI,wBAAkB,SAAO,CAAC,KAAK,gBAAK,wBAAkB,UAAQ,GAAE;AAClE,uBAAS,GAAG;AACZ,qCAAuB;;IAE3B;yBAEwB,KAAW;AAKjC,UAAI,aACA,aAAQ,mBAAiB,eAAC;AAC9B,oBAAI,UAAU,WAAW,GAAE;AAEzB,yBAAI,eAAS,EAAI,UAAU,MAAM,GAAE;;AAGrC,eAAS,IAA8B,aAA1B,wBAAkB,SAAO,IAAG,GAAG,AAAE,CAAD,IAAI,GAAG,CAAC,IAAI;AACvD,YAAM,UAAU,wBAAkB,QAAC,CAAC;AACpC,YAAI,OAAO,UAAU,IAAI,MAAM;AAE/B,sBAAI,AAAO,yCAAU,CAAC,OAAO,UAAU,mBAAE,KAAK,SAAO,KAAG;AAExD,iBAAS,iBAAkB,QAAO,oBAAoB,EAAE;AACtD,wBAAI,AAAO,yCAAU,CAAC,cAAc,mBAAE,KAAK,SAAO,KAAG;;AAGvD,sBAAI,OAAO,YAAY,GAAE,OAAO,UAAU;;IAE9C;;;IAnEM,wBAAkB,GAAG;IAGnB,eAAS;IAEE,sBAAgB;EA+DrC;;;;;;;;;;;;;;;;;;YAU+B;IAAI;;AAS/B,oBAAS,SAAQ,CAAC;IACpB;;AAGE,oBAAS,SAAQ,CAAC;IACpB;;;EAGF","file":"popup_hierarchy.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_hierarchy: src__laminate__popup__popup_hierarchy
  };
});

//# sourceMappingURL=popup_hierarchy.ddc.js.map
