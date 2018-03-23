define(['dart_sdk', 'packages/angular_components/material_tab/tab_change_event', 'packages/angular_components/material_tab/material_tab', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, tab_change_event, material_tab, lifecycle_hooks, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tab__tab_change_event = tab_change_event.material_tab__tab_change_event;
  const material_tab__material_tab = material_tab.material_tab__material_tab;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_tab__material_tab_panel = Object.create(_root);
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $indexOf = dartx.indexOf;
  const $_get = dartx._get;
  const $length = dartx.length;
  let StreamControllerOfTabChangeEvent = () => (StreamControllerOfTabChangeEvent = dart.constFn(async.StreamController$(material_tab__tab_change_event.TabChangeEvent)))();
  let TabToString = () => (TabToString = dart.constFn(dart.fnType(core.String, [material_tab__material_tab.Tab])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfTab = () => (ListOfTab = dart.constFn(core.List$(material_tab__material_tab.Tab)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  const _changeDetector = Symbol('_changeDetector');
  const _initialzed = Symbol('_initialzed');
  const _previousActiveTab = Symbol('_previousActiveTab');
  const _beforeTabChange = Symbol('_beforeTabChange');
  const _tabChange = Symbol('_tabChange');
  const _activeTabIndex = Symbol('_activeTabIndex');
  const _tabs = Symbol('_tabs');
  const _tabLabels = Symbol('_tabLabels');
  const _tabIds = Symbol('_tabIds');
  const _setActiveTab = Symbol('_setActiveTab');
  const _initTabs = Symbol('_initTabs');
  const _activeTab = Symbol('_activeTab');
  material_tab__material_tab_panel.MaterialTabPanelComponent = class MaterialTabPanelComponent extends core.Object {
    get beforeTabChange() {
      return this[_beforeTabChange].stream;
    }
    get tabChange() {
      return this[_tabChange].stream;
    }
    get centerTabs() {
      return this[centerTabs];
    }
    set centerTabs(value) {
      this[centerTabs] = value;
    }
    set activeTabIndex(index) {
      if (this[_tabs] != null) {
        this[_setActiveTab](core.int._check(index), true);
      } else {
        this[_activeTabIndex] = core.int._check(index);
      }
    }
    get activeTabIndex() {
      return this[_activeTabIndex];
    }
    ngAfterContentInit() {
      this[_initialzed] = true;
      this[_initTabs]();
    }
    set tabs(tabs) {
      this[_previousActiveTab] = this[_tabs] != null ? this[_activeTab] : null;
      this[_tabs] = tabs;
      if (dart.test(this[_initialzed])) this[_initTabs]();
    }
    [_initTabs]() {
      this[_tabLabels] = this[_tabs][$map](core.String, dart.fn(t => t.label, TabToString()))[$toList]();
      this[_tabIds] = this[_tabs][$map](core.String, dart.fn(t => t.tabId, TabToString()))[$toList]();
      async.scheduleMicrotask(dart.fn(() => {
        this[_changeDetector].markForCheck();
        if (this[_previousActiveTab] != null) {
          this[_activeTabIndex] = this[_tabs][$indexOf](this[_previousActiveTab]);
          this[_previousActiveTab] = null;
          if (this[_activeTabIndex] === -1) {
            this[_activeTabIndex] = 0;
          } else {
            return;
          }
        }
        this[_activeTab].activate();
      }, VoidToNull()));
    }
    get [_activeTab]() {
      return this[_tabs][$_get](this[_activeTabIndex]);
    }
    get tabLabels() {
      return this[_tabLabels];
    }
    get tabIds() {
      return this[_tabIds];
    }
    [_setActiveTab](i, focusTab) {
      if (!(dart.notNull(i) >= 0 && dart.notNull(i) < dart.notNull(this[_tabs][$length]))) dart.assertFailed();
      let t = this[_activeTab];
      t == null ? null : t.deactivate();
      this[_activeTabIndex] = i;
      this[_activeTab].activate();
      this[_changeDetector].markForCheck();
      if (!dart.test(focusTab)) return;
      this[_activeTab].focus();
    }
    onBeforeTabChange(e) {
      this[_beforeTabChange].add(e);
    }
    onTabChange(e) {
      this.activeTabIndex = e.newIndex;
      this[_tabChange].add(e);
    }
  };
  (material_tab__material_tab_panel.MaterialTabPanelComponent.new = function(changeDetector) {
    this[_initialzed] = false;
    this[_previousActiveTab] = null;
    this[_beforeTabChange] = StreamControllerOfTabChangeEvent().broadcast({sync: true});
    this[_tabChange] = StreamControllerOfTabChangeEvent().broadcast({sync: true});
    this[centerTabs] = false;
    this[_activeTabIndex] = 0;
    this[_tabs] = null;
    this[_tabLabels] = null;
    this[_tabIds] = null;
    this[_changeDetector] = changeDetector;
  }).prototype = material_tab__material_tab_panel.MaterialTabPanelComponent.prototype;
  dart.addTypeTests(material_tab__material_tab_panel.MaterialTabPanelComponent);
  const centerTabs = Symbol("MaterialTabPanelComponent.centerTabs");
  material_tab__material_tab_panel.MaterialTabPanelComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterContentInit];
  dart.setMethodSignature(material_tab__material_tab_panel.MaterialTabPanelComponent, () => ({
    __proto__: dart.getMethods(material_tab__material_tab_panel.MaterialTabPanelComponent.__proto__),
    ngAfterContentInit: dart.fnType(dart.void, []),
    [_initTabs]: dart.fnType(dart.void, []),
    [_setActiveTab]: dart.fnType(dart.void, [core.int, core.bool]),
    onBeforeTabChange: dart.fnType(dart.void, [material_tab__tab_change_event.TabChangeEvent]),
    onTabChange: dart.fnType(dart.void, [material_tab__tab_change_event.TabChangeEvent])
  }));
  dart.setGetterSignature(material_tab__material_tab_panel.MaterialTabPanelComponent, () => ({
    __proto__: dart.getGetters(material_tab__material_tab_panel.MaterialTabPanelComponent.__proto__),
    beforeTabChange: dart.fnType(async.Stream$(material_tab__tab_change_event.TabChangeEvent), []),
    tabChange: dart.fnType(async.Stream$(material_tab__tab_change_event.TabChangeEvent), []),
    activeTabIndex: dart.fnType(core.int, []),
    [_activeTab]: dart.fnType(material_tab__material_tab.Tab, []),
    tabLabels: dart.fnType(core.List$(core.String), []),
    tabIds: dart.fnType(core.List$(core.String), [])
  }));
  dart.setSetterSignature(material_tab__material_tab_panel.MaterialTabPanelComponent, () => ({
    __proto__: dart.getSetters(material_tab__material_tab_panel.MaterialTabPanelComponent.__proto__),
    activeTabIndex: dart.fnType(dart.void, [dart.dynamic]),
    tabs: dart.fnType(dart.void, [ListOfTab()])
  }));
  dart.setFieldSignature(material_tab__material_tab_panel.MaterialTabPanelComponent, () => ({
    __proto__: dart.getFields(material_tab__material_tab_panel.MaterialTabPanelComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_initialzed]: dart.fieldType(core.bool),
    [_previousActiveTab]: dart.fieldType(material_tab__material_tab.Tab),
    [_beforeTabChange]: dart.finalFieldType(StreamControllerOfTabChangeEvent()),
    [_tabChange]: dart.finalFieldType(StreamControllerOfTabChangeEvent()),
    centerTabs: dart.fieldType(core.bool),
    [_activeTabIndex]: dart.fieldType(core.int),
    [_tabs]: dart.fieldType(ListOfTab()),
    [_tabLabels]: dart.fieldType(ListOfString()),
    [_tabIds]: dart.fieldType(ListOfString())
  }));
  dart.trackLibraries("packages/angular_components/material_tab/material_tab_panel.ddc", {
    "package:angular_components/material_tab/material_tab_panel.dart": material_tab__material_tab_panel
  }, '{"version":3,"sourceRoot":"","sources":["material_tab_panel.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YAgDgD,uBAAgB,OAAO;;;YAM7B,iBAAU,OAAO;;IAOpD;;;;;;uBAMc,KAAK;AAEtB,UAAI,WAAK,IAAI,MAAM;AACjB,2BAAa,iBAAC,KAAK,GAAE;aAChB;AAEL,6BAAe,mBAAG,KAAK;;IAE3B;;YAG0B,sBAAe;;;AAMvC,uBAAW,GAAG;AACd,qBAAS;IACX;aAGS,IAAc;AACrB,8BAAkB,GAAG,AAAC,WAAK,IAAI,OAAQ,gBAAU,GAAG;AACpD,iBAAK,GAAG,IAAI;AAGZ,oBAAI,iBAAW,GAAE,eAAS;IAC5B;;AAGE,sBAAU,GAAG,WAAK,MAAI,cAAC,QAAC,CAAC,IAAK,CAAC,MAAM,0BAAQ;AAC7C,mBAAO,GAAG,WAAK,MAAI,cAAC,QAAC,CAAC,IAAK,CAAC,MAAM,0BAAQ;AAI1C,6BAAiB,CAAC;AAChB,6BAAe,aAAa;AAE5B,YAAI,wBAAkB,IAAI,MAAM;AAC9B,+BAAe,GAAG,WAAK,UAAQ,CAAC,wBAAkB;AAClD,kCAAkB,GAAG;AACrB,cAAI,qBAAe,KAAI,CAAC,GAAG;AAEzB,iCAAe,GAAG;iBACb;AAEL;;;AAGJ,wBAAU,SAAS;;IAEvB;;YAGsB,YAAK,QAAC,qBAAe;IAAC;;YAGd,iBAAU;;;YAGb,cAAO;;oBAEf,CAAK,EAAE,QAAa;AACrC,YAAS,AAAK,aAAP,CAAC,KAAI,KAAO,aAAF,CAAC,iBAAG,WAAK,SAAO;AACjC,8BAAU;;AACV,2BAAe,GAAG,CAAC;AACnB,sBAAU,SAAS;AACnB,2BAAe,aAAa;AAE5B,qBAAK,QAAQ,GAAE;AACf,sBAAU,MAAM;IAClB;sBAGuB,CAAgB;AACrC,4BAAgB,IAAI,CAAC,CAAC;IACxB;gBAGiB,CAAgB;AAC/B,yBAAc,GAAG,CAAC,SAAS;AAC3B,sBAAU,IAAI,CAAC,CAAC;IAClB;;6EAtE+B,cAAe;IAzCzC,iBAAW,GAAG;IACf,wBAAkB;IAShB,sBAAgB,GAClB,AAAI,4CAA0C,QAAO;IAKnD,gBAAU,GAAG,AAAI,4CAA0C,QAAO;IAMnE,gBAAU,GAAG;IAgBd,qBAAe,GAAG;IA4CZ,WAAK;IAGF,gBAAU;IAGV,aAAO;IA/CW,qBAAe,GAAf,cAAe;EAAC","file":"material_tab_panel.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab_panel: material_tab__material_tab_panel
  };
});

//# sourceMappingURL=material_tab_panel.ddc.js.map
