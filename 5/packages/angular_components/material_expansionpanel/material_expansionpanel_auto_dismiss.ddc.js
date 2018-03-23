define(['dart_sdk', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/material_expansionpanel/material_expansionpanel'], function(dart_sdk, lifecycle_hooks, material_expansionpanel) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const material_expansionpanel__material_expansionpanel = material_expansionpanel.material_expansionpanel__material_expansionpanel;
  const _root = Object.create(null);
  const material_expansionpanel__material_expansionpanel_auto_dismiss = Object.create(_root);
  const $onMouseUp = dartx.onMouseUp;
  const $target = dartx.target;
  const $toLowerCase = dartx.toLowerCase;
  const $parent = dartx.parent;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StreamControllerOfEvent = () => (StreamControllerOfEvent = dart.constFn(async.StreamController$(html.Event)))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let EventToFutureOfbool = () => (EventToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [html.Event])))();
  let StreamSubscriptionOfEvent = () => (StreamSubscriptionOfEvent = dart.constFn(async.StreamSubscription$(html.Event)))();
  let StreamSubscriptionOfMouseEvent = () => (StreamSubscriptionOfMouseEvent = dart.constFn(async.StreamSubscription$(html.MouseEvent)))();
  const _expansionPanel = Symbol('_expansionPanel');
  const _overlayContainerToken = Symbol('_overlayContainerToken');
  const _element = Symbol('_element');
  const _clicksOutsideController = Symbol('_clicksOutsideController');
  const _clicksOutsideSubscription = Symbol('_clicksOutsideSubscription');
  const _mouseUpListener = Symbol('_mouseUpListener');
  const _onMouseUp = Symbol('_onMouseUp');
  material_expansionpanel__material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss = class MaterialExpansionPanelAutoDismiss extends core.Object {
    onExpandedChanged(expand) {
      let t = this[_clicksOutsideSubscription];
      t == null ? null : t.cancel();
      if (dart.test(expand)) {
        this[_clicksOutsideSubscription] = this[_clicksOutsideController].stream.listen(dart.fn(e => this[_expansionPanel].collapse({byUserAction: false}), EventToFutureOfbool()));
      }
    }
    ngOnDestroy() {
      let t = this[_clicksOutsideSubscription];
      t == null ? null : t.cancel();
    }
    [_onMouseUp](e) {
      let node = html.Element.as(e[$target]);
      while (node != null) {
        let tagName = node.tagName[$toLowerCase]();
        if (dart.equals(node, this[_element])) {
          return;
        } else if (dart.equals(node, this[_overlayContainerToken])) {
          return;
        } else if (tagName === 'body') {
          this[_clicksOutsideController].add(e);
          return;
        } else if (tagName === 'material-button' || tagName === 'dropdown-button' || tagName === 'input' || tagName === 'a') {
          return;
        }
        node = node[$parent];
      }
    }
  };
  (material_expansionpanel__material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss.new = function(expansionPanel, overlayContainerToken, element) {
    this[_clicksOutsideController] = null;
    this[_clicksOutsideSubscription] = null;
    this[_mouseUpListener] = null;
    this[_expansionPanel] = expansionPanel;
    this[_overlayContainerToken] = overlayContainerToken;
    this[_element] = element;
    this[_clicksOutsideController] = StreamControllerOfEvent().broadcast({sync: true, onListen: dart.fn(() => {
        this[_mouseUpListener] = html.document[$onMouseUp].listen(dart.bind(this, _onMouseUp));
      }, VoidToNull()), onCancel: dart.fn(() => {
        this[_mouseUpListener].cancel();
        this[_mouseUpListener] = null;
      }, VoidToNull())});
  }).prototype = material_expansionpanel__material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss);
  material_expansionpanel__material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss.__proto__),
    onExpandedChanged: dart.fnType(dart.void, [core.bool]),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onMouseUp]: dart.fnType(dart.void, [html.MouseEvent])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss.__proto__),
    [_expansionPanel]: dart.finalFieldType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel),
    [_overlayContainerToken]: dart.finalFieldType(html.Element),
    [_element]: dart.finalFieldType(html.HtmlElement),
    [_clicksOutsideController]: dart.fieldType(StreamControllerOfEvent()),
    [_clicksOutsideSubscription]: dart.fieldType(StreamSubscriptionOfEvent()),
    [_mouseUpListener]: dart.fieldType(StreamSubscriptionOfMouseEvent())
  }));
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.ddc", {
    "package:angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.dart": material_expansionpanel__material_expansionpanel_auto_dismiss
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel_auto_dismiss.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;sBAyDyB,MAAW;AAChC,8CAA0B;;AAC1B,oBAAI,MAAM,GAAE;AACV,wCAA0B,GAAG,8BAAwB,OAAO,OACjD,CAAC,QAAC,CAAC,IAAK,qBAAe,SAAS,gBAAe;;IAE9D;;AAIE,8CAA0B;;IAC5B;iBAEgB,CAAY;AAC1B,UAAI,uBAAO,CAAC,SAAO;AACnB,aAAO,IAAI,IAAI,MAAM;AACnB,YAAI,UAAU,IAAI,QAAQ,cAAY;AACtC,wBAAI,IAAI,EAAI,cAAa,GAAE;AAEzB;cACK,iBAAI,IAAI,EAAI,4BAAsB,GAAE;AAEzC;cACK,KAAI,OAAO,KAAI,QAAQ;AAK5B,wCAAwB,IAAI,CAAC,CAAC;AAC9B;cACK,KAAI,OAAO,KAAI,qBAClB,OAAO,KAAI,qBACX,OAAO,KAAI,WACX,OAAO,KAAI,KAAK;AAElB;;AAEF,YAAI,GAAG,IAAI,SAAO;;IAOtB;;kHA3DS,cAAe,EAC4B,qBAAsB,EACjE,OAAQ;IAPO,8BAAwB;IACtB,gCAA0B;IACrB,sBAAgB;IAGtC,qBAAe,GAAf,cAAe;IAC4B,4BAAsB,GAAtB,qBAAsB;IACjE,cAAQ,GAAR,OAAQ;AACf,kCAAwB,GAAG,AAAI,mCAA0B,QAC/C,gBACI;AACR,8BAAgB,GAAG,aAAQ,YAAU,OAAO,CAAC,2BAAU;kCAE/C;AACR,8BAAgB,OAAO;AACvB,8BAAgB,GAAG;;EAE3B","file":"material_expansionpanel_auto_dismiss.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel_auto_dismiss: material_expansionpanel__material_expansionpanel_auto_dismiss
  };
});

//# sourceMappingURL=material_expansionpanel_auto_dismiss.ddc.js.map
