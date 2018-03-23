define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/model/action/async_action', 'packages/angular_components/material_expansionpanel/material_expansionpanel', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, disposer, async_action, material_expansionpanel, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__model__action__async_action = async_action.src__model__action__async_action;
  const material_expansionpanel__material_expansionpanel = material_expansionpanel.material_expansionpanel__material_expansionpanel;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const material_expansionpanel__material_expansionpanel_set = Object.create(_root);
  const $forEach = dartx.forEach;
  let AsyncActionOfbool = () => (AsyncActionOfbool = dart.constFn(src__model__action__async_action.AsyncAction$(core.bool)))();
  let AsyncActionOfboolTovoid = () => (AsyncActionOfboolTovoid = dart.constFn(dart.fnType(dart.void, [AsyncActionOfbool()])))();
  let StreamSubscriptionOfAsyncActionOfbool = () => (StreamSubscriptionOfAsyncActionOfbool = dart.constFn(async.StreamSubscription$(AsyncActionOfbool())))();
  let MaterialExpansionPanelToNull = () => (MaterialExpansionPanelToNull = dart.constFn(dart.fnType(core.Null, [material_expansionpanel__material_expansionpanel.MaterialExpansionPanel])))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let ListOfMaterialExpansionPanel = () => (ListOfMaterialExpansionPanel = dart.constFn(core.List$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  const _panelDisposer = Symbol('_panelDisposer');
  const _openPanel = Symbol('_openPanel');
  const _panels = Symbol('_panels');
  const _onPanelsChange = Symbol('_onPanelsChange');
  const _onPanelOpen = Symbol('_onPanelOpen');
  const _onPanelClose = Symbol('_onPanelClose');
  const _setOpenPanel = Symbol('_setOpenPanel');
  material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet = class MaterialExpansionPanelSet extends core.Object {
    set panels(value) {
      this[_panels] = value;
      this[_onPanelsChange]();
    }
    ngOnDestroy() {
      this[_panelDisposer].dispose();
    }
    [_onPanelsChange]() {
      this[_panelDisposer].dispose();
      this[_openPanel] = null;
      this[_panels][$forEach](dart.fn(panel => {
        if (dart.test(panel.isExpanded)) {
          if (this[_openPanel] != null) {
            dart.throw(new core.StateError.new("Should only have one panel open at a time"));
          }
          this[_openPanel] = panel;
        }
        this[_panelDisposer].addDisposable(StreamSubscriptionOfAsyncActionOfbool(), panel.open.listen(dart.fn(event => this[_onPanelOpen](panel, event), AsyncActionOfboolTovoid())));
        this[_panelDisposer].addDisposable(StreamSubscriptionOfAsyncActionOfbool(), panel.close.listen(dart.fn(event => this[_onPanelClose](panel, event), AsyncActionOfboolTovoid())));
        this[_panelDisposer].addDisposable(StreamSubscriptionOfAsyncActionOfbool(), panel.cancel.listen(dart.fn(event => this[_onPanelClose](panel, event), AsyncActionOfboolTovoid())));
        if (dart.test(panel.closeOnSave)) {
          this[_panelDisposer].addDisposable(StreamSubscriptionOfAsyncActionOfbool(), panel.save.listen(dart.fn(event => this[_onPanelClose](panel, event), AsyncActionOfboolTovoid())));
        }
      }, MaterialExpansionPanelToNull()));
    }
    [_onPanelOpen](panel, event) {
      if (this[_openPanel] != null) {
        if (dart.test(this[_openPanel].activeSaveCancelAction)) {
          event.cancel();
          return;
        }
        event.cancelIf(this[_openPanel].collapse({byUserAction: false}).then(core.bool, dart.fn(success => {
          if (dart.test(success)) {
            this[_setOpenPanel](panel);
          }
          return !dart.test(success);
        }, boolTobool())));
      } else {
        this[_setOpenPanel](panel);
      }
    }
    [_onPanelClose](panel, e) {
      e.onDone.then(core.Null, dart.fn(success => {
        if (dart.test(success) && dart.equals(this[_openPanel], panel)) {
          this[_setOpenPanel](null);
        }
      }, boolToNull()));
    }
    [_setOpenPanel](panel) {
      for (let p of this[_panels]) {
        if (!dart.equals(p, panel)) p.anotherExpanded = panel != null;
      }
      this[_openPanel] = panel;
    }
  };
  (material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet.new = function() {
    this[_panelDisposer] = new utils__disposer__disposer.Disposer.multi();
    this[_openPanel] = null;
    this[_panels] = null;
  }).prototype = material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet);
  material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onPanelsChange]: dart.fnType(dart.void, []),
    [_onPanelOpen]: dart.fnType(dart.void, [material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, AsyncActionOfbool()]),
    [_onPanelClose]: dart.fnType(dart.void, [material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, AsyncActionOfbool()]),
    [_setOpenPanel]: dart.fnType(dart.void, [material_expansionpanel__material_expansionpanel.MaterialExpansionPanel])
  }));
  dart.setSetterSignature(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet, () => ({
    __proto__: dart.getSetters(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet.__proto__),
    panels: dart.fnType(dart.void, [ListOfMaterialExpansionPanel()])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet.__proto__),
    [_panelDisposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_openPanel]: dart.fieldType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel),
    [_panels]: dart.fieldType(ListOfMaterialExpansionPanel())
  }));
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel_set.ddc", {
    "package:angular_components/material_expansionpanel/material_expansionpanel_set.dart": material_expansionpanel__material_expansionpanel_set
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel_set.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;eAuBa,KAAkC;AAC3C,mBAAO,GAAG,KAAK;AACf,2BAAe;IACjB;;AAIE,0BAAc,QAAQ;IACxB;;AAGE,0BAAc,QAAQ;AACtB,sBAAU,GAAG;AACb,mBAAO,UAAQ,CAAC,QAAC,KAAK;AACpB,sBAAI,KAAK,WAAW,GAAE;AACpB,cAAI,gBAAU,IAAI,MAAM;AACtB,uBAAM,IAAI,mBAAU,CAAC;;AAEvB,0BAAU,GAAG,KAAK;;AAEpB,4BAAc,cAAc,0CACxB,KAAK,KAAK,OAAO,CAAC,QAAC,KAAK,IAAK,kBAAY,CAAC,KAAK,EAAE,KAAK;AAC1D,4BAAc,cAAc,0CACxB,KAAK,MAAM,OAAO,CAAC,QAAC,KAAK,IAAK,mBAAa,CAAC,KAAK,EAAE,KAAK;AAC5D,4BAAc,cAAc,0CACxB,KAAK,OAAO,OAAO,CAAC,QAAC,KAAK,IAAK,mBAAa,CAAC,KAAK,EAAE,KAAK;AAC7D,sBAAI,KAAK,YAAY,GAAE;AACrB,8BAAc,cAAc,0CACxB,KAAK,KAAK,OAAO,CAAC,QAAC,KAAK,IAAK,mBAAa,CAAC,KAAK,EAAE,KAAK;;;IAGjE;mBAEkB,KAA4B,EAAE,KAAuB;AACrE,UAAI,gBAAU,IAAI,MAAM;AACtB,sBAAI,gBAAU,uBAAuB,GAAE;AAGrC,eAAK,OAAO;AACZ;;AAGF,aAAK,SAAS,CAAC,gBAAU,SAAS,gBAAe,YAAW,YAAC,QAAC,OAAO;AACnE,wBAAI,OAAO,GAAE;AACX,+BAAa,CAAC,KAAK;;AAErB,gBAAO,YAAC,OAAO;;aAEZ;AACL,2BAAa,CAAC,KAAK;;IAEvB;oBAEmB,KAA4B,EAAE,CAAmB;AAClE,OAAC,OAAO,KAAK,YAAC,QAAC,OAAO;AACpB,sBAAI,OAAO,iBAAI,gBAAU,EAAI,KAAK,GAAE;AAClC,6BAAa,CAAC;;;IAGpB;oBAEmB,KAA4B;AAC7C,eAA4B,IAAK,cAAO,EAAE;AACxC,yBAAI,CAAC,EAAI,KAAK,GAAE,CAAC,gBAAgB,GAAI,KAAK,IAAI;;AAEhD,sBAAU,GAAG,KAAK;IACpB;;;IAvEM,oBAAc,GAAG,IAAI,wCAAc;IAClB,gBAAU;IACJ,aAAO;EAsEtC","file":"material_expansionpanel_set.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel_set: material_expansionpanel__material_expansionpanel_set
  };
});

//# sourceMappingURL=material_expansionpanel_set.ddc.js.map
