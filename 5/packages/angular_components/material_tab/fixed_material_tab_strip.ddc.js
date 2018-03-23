define(['dart_sdk', 'packages/angular_components/material_tab/tab_change_event', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, tab_change_event, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tab__tab_change_event = tab_change_event.material_tab__tab_change_event;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_tab__fixed_material_tab_strip = Object.create(_root);
  const $elementAt = dartx.elementAt;
  const $length = dartx.length;
  let StreamControllerOfTabChangeEvent = () => (StreamControllerOfTabChangeEvent = dart.constFn(async.StreamController$(material_tab__tab_change_event.TabChangeEvent)))();
  let StreamControllerOfint = () => (StreamControllerOfint = dart.constFn(async.StreamController$(core.int)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  const _changeDetector = Symbol('_changeDetector');
  const _transitionAmount = Symbol('_transitionAmount');
  const _activeTabIndex = Symbol('_activeTabIndex');
  const _tabIndicatorTransform = Symbol('_tabIndicatorTransform');
  const _tabLabels = Symbol('_tabLabels');
  const _beforeTabChange = Symbol('_beforeTabChange');
  const _tabChange = Symbol('_tabChange');
  const _activeTabIndexChange = Symbol('_activeTabIndexChange');
  const _updateTabIndicatorTransform = Symbol('_updateTabIndicatorTransform');
  material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent = class FixedMaterialTabStripComponent extends core.Object {
    get beforeTabChange() {
      return this[_beforeTabChange].stream;
    }
    get tabChange() {
      return this[_tabChange].stream;
    }
    set activeTabIndex(value) {
      if (this[_activeTabIndex] != value) {
        this[_activeTabIndex] = value;
        this[_updateTabIndicatorTransform]();
        this[_changeDetector].markForCheck();
      }
    }
    get activeTabIndex() {
      return this[_activeTabIndex];
    }
    get activeTabIndexChange() {
      return this[_activeTabIndexChange].stream;
    }
    set tabLabels(labels) {
      this[_tabLabels] = labels;
      this[_updateTabIndicatorTransform]();
    }
    get tabLabels() {
      return this[_tabLabels];
    }
    get tabIds() {
      return this[tabIds];
    }
    set tabIds(value) {
      this[tabIds] = value;
    }
    static _calculateTransitionAmount(isRtl) {
      return dart.test(isRtl) ? -100 : 100;
    }
    get tabIndicatorTransform() {
      return this[_tabIndicatorTransform];
    }
    switchTo(index) {
      if (index == this.activeTabIndex) return;
      let event = new material_tab__tab_change_event.TabChangeEvent.new(this.activeTabIndex, index);
      this[_beforeTabChange].add(event);
      if (dart.test(event.defaultPrevented)) return;
      this.activeTabIndex = index;
      this[_tabChange].add(event);
      this[_activeTabIndexChange].add(this.activeTabIndex);
    }
    activeStr(index) {
      return dart.str`${this.activeTabIndex == index}`;
    }
    tabId(index) {
      let t = this.tabIds;
      return t == null ? null : t[$elementAt](index);
    }
    [_updateTabIndicatorTransform]() {
      let width = this[_tabLabels] != null ? 1 / dart.notNull(this[_tabLabels][$length]) : 0;
      let location = dart.notNull(this[_activeTabIndex]) * width * dart.notNull(this[_transitionAmount]);
      this[_tabIndicatorTransform] = dart.str`translateX(${location}%) scaleX(${width})`;
    }
  };
  (material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.new = function(changeDetector, isRtl) {
    this[_activeTabIndex] = 0;
    this[_tabIndicatorTransform] = null;
    this[_tabLabels] = null;
    this[_beforeTabChange] = StreamControllerOfTabChangeEvent().broadcast({sync: true});
    this[_tabChange] = StreamControllerOfTabChangeEvent().broadcast({sync: true});
    this[_activeTabIndexChange] = StreamControllerOfint().broadcast();
    this[tabIds] = null;
    this[_changeDetector] = changeDetector;
    this[_transitionAmount] = material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent._calculateTransitionAmount(isRtl != null ? isRtl : false);
    this[_updateTabIndicatorTransform]();
  }).prototype = material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.prototype;
  dart.addTypeTests(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent);
  const tabIds = Symbol("FixedMaterialTabStripComponent.tabIds");
  dart.setMethodSignature(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent, () => ({
    __proto__: dart.getMethods(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.__proto__),
    switchTo: dart.fnType(dart.void, [core.int]),
    activeStr: dart.fnType(core.String, [core.int]),
    tabId: dart.fnType(core.String, [core.int]),
    [_updateTabIndicatorTransform]: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent, () => ({_calculateTransitionAmount: dart.fnType(core.int, [core.bool])}));
  dart.setGetterSignature(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent, () => ({
    __proto__: dart.getGetters(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.__proto__),
    beforeTabChange: dart.fnType(async.Stream$(material_tab__tab_change_event.TabChangeEvent), []),
    tabChange: dart.fnType(async.Stream$(material_tab__tab_change_event.TabChangeEvent), []),
    activeTabIndex: dart.fnType(core.int, []),
    activeTabIndexChange: dart.fnType(async.Stream$(core.int), []),
    tabLabels: dart.fnType(core.List$(core.String), []),
    tabIndicatorTransform: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent, () => ({
    __proto__: dart.getSetters(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.__proto__),
    activeTabIndex: dart.fnType(dart.void, [core.int]),
    tabLabels: dart.fnType(dart.void, [ListOfString()])
  }));
  dart.setFieldSignature(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent, () => ({
    __proto__: dart.getFields(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.__proto__),
    [_transitionAmount]: dart.finalFieldType(core.int),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_activeTabIndex]: dart.fieldType(core.int),
    [_tabIndicatorTransform]: dart.fieldType(core.String),
    [_tabLabels]: dart.fieldType(ListOfString()),
    [_beforeTabChange]: dart.finalFieldType(StreamControllerOfTabChangeEvent()),
    [_tabChange]: dart.finalFieldType(StreamControllerOfTabChangeEvent()),
    [_activeTabIndexChange]: dart.finalFieldType(StreamControllerOfint()),
    tabIds: dart.fieldType(ListOfString())
  }));
  dart.trackLibraries("packages/angular_components/material_tab/fixed_material_tab_strip.ddc", {
    "package:angular_components/material_tab/fixed_material_tab_strip.dart": material_tab__fixed_material_tab_strip
  }, '{"version":3,"sourceRoot":"","sources":["fixed_material_tab_strip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;YAoDgD,uBAAgB,OAAO;;;YAM7B,iBAAU,OAAO;;uBAOtC,KAAS;AAC1B,UAAI,qBAAe,IAAI,KAAK,EAAE;AAC5B,6BAAe,GAAG,KAAK;AACvB,0CAA4B;AAC5B,6BAAe,aAAa;;IAEhC;;YAE0B,sBAAe;;;YAKD,4BAAqB,OAAO;;kBAKtD,MAAmB;AAC/B,sBAAU,GAAG,MAAM;AACnB,wCAA4B;IAC9B;;YAE8B,iBAAU;;IAI3B;;;;;;sCAQyB,KAAU;AAC9C,uBAAO,KAAK,IAAG,CAAC,MAAM;IACxB;;YAEoC,6BAAsB;;aAE5C,KAAS;AACrB,UAAI,KAAK,IAAI,mBAAc,EAAE;AAC7B,UAAI,QAAQ,IAAI,iDAAc,CAAC,mBAAc,EAAE,KAAK;AACpD,4BAAgB,IAAI,CAAC,KAAK;AAC1B,oBAAI,KAAK,iBAAiB,GAAE;AAC5B,yBAAc,GAAG,KAAK;AACtB,sBAAU,IAAI,CAAC,KAAK;AACpB,iCAAqB,IAAI,CAAC,mBAAc;IAC1C;cAEiB,KAAS;AACxB,YAAO,YAAG,mBAAc,IAAI,KAAK;IACnC;UAEa,KAAS;cAAK,WAAM;8CAAY,KAAK;IAAC;;AAGjD,UAAI,QAAQ,gBAAU,IAAI,OAAO,AAAE,iBAAE,gBAAU,SAAO,IAAG;AACzD,UAAI,WAA2B,AAAQ,aAAxB,qBAAe,IAAG,KAAK,gBAAG,uBAAiB;AAC1D,kCAAsB,GAAG,sBAAa,QAAQ,aAAW,KAAK;IAChE;;wFA/BS,cAAe,EAAE,KAAwC;IArD9D,qBAAe,GAAG;IACf,4BAAsB;IAChB,gBAAU;IASjB,sBAAgB,GAClB,AAAI,4CAA0C,QAAO;IAKnD,gBAAU,GAAG,AAAI,4CAA0C,QAAO;IAoBlE,2BAAqB,GAAG,AAAI,iCAA+B;IAapD,YAAM;IAGV,qBAAe,GAAf,cAAe;IAClB,uBAAiB,GAAG,gGAA0B,CAAC,KAAK,WAAL,KAAK,GAAI;AAC5D,sCAA4B;EAC9B","file":"fixed_material_tab_strip.ddc.js"}');
  // Exports:
  return {
    material_tab__fixed_material_tab_strip: material_tab__fixed_material_tab_strip
  };
});

//# sourceMappingURL=fixed_material_tab_strip.ddc.js.map
