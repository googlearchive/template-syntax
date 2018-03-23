define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/menu/menu_item_affix', 'packages/observable/src/observable_list', 'packages/built_collection/src/iterable', 'packages/quiver/strings', 'packages/observable/src/change_notifier', 'packages/angular_components/model/menu/menu', 'packages/angular_components/model/ui/icon'], function(dart_sdk, selection_model, selectable, has_renderer, menu_item_affix, observable_list, iterable, strings, change_notifier, menu, icon) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__menu__menu_item_affix = menu_item_affix.model__menu__menu_item_affix;
  const src__observable_list = observable_list.src__observable_list;
  const src__list = iterable.src__list;
  const strings$ = strings.strings;
  const src__change_notifier = change_notifier.src__change_notifier;
  const model__menu__menu = menu.model__menu__menu;
  const model__ui__icon = icon.model__ui__icon;
  const _root = Object.create(null);
  const model__menu__selectable_menu = Object.create(_root);
  let ObservableListOfMenuItemAffix = () => (ObservableListOfMenuItemAffix = dart.constFn(src__observable_list.ObservableList$(model__menu__menu_item_affix.MenuItemAffix)))();
  let BuiltListOfString = () => (BuiltListOfString = dart.constFn(src__list.BuiltList$(core.String)))();
  let MenuItemAffixTobool = () => (MenuItemAffixTobool = dart.constFn(dart.fnType(core.bool, [model__menu__menu_item_affix.MenuItemAffix])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _action = Symbol('_action');
  const _selectableState = Symbol('_selectableState');
  const _secondaryIconVisibility = Symbol('_secondaryIconVisibility');
  let const$;
  let const$0;
  let const$1;
  const _is_SelectableMenuItem_default = Symbol('_is_SelectableMenuItem_default');
  model__menu__selectable_menu.SelectableMenuItem$ = dart.generic(ItemType => {
    let ItemTypeToString = () => (ItemTypeToString = dart.constFn(dart.fnType(core.String, [ItemType])))();
    class SelectableMenuItem extends src__change_notifier.PropertyChangeNotifier {
      get itemRenderer() {
        return this[itemRenderer$];
      }
      set itemRenderer(value) {
        super.itemRenderer = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get shouldSelectOnItemClick() {
        return this[shouldSelectOnItemClick$];
      }
      set shouldSelectOnItemClick(value) {
        super.shouldSelectOnItemClick = value;
      }
      get icon() {
        return this[icon$];
      }
      set icon(value) {
        super.icon = value;
      }
      get secondaryIcon() {
        return this[secondaryIcon$];
      }
      set secondaryIcon(value) {
        super.secondaryIcon = value;
      }
      get subMenu() {
        return this[subMenu$];
      }
      set subMenu(value) {
        super.subMenu = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get itemSuffixes() {
        return this[itemSuffixes$];
      }
      set itemSuffixes(value) {
        super.itemSuffixes = value;
      }
      get cssClasses() {
        return this[cssClasses$];
      }
      set cssClasses(value) {
        super.cssClasses = value;
      }
      get label() {
        return this.itemRenderer(this.value);
      }
      get nullAwareActionHandler() {
        let l = this[_action];
        return l != null ? l : model__menu__selectable_menu._noOp;
      }
      get hasIcon() {
        return this.icon != null;
      }
      get hasSecondaryIcon() {
        return this.itemSuffixes.any(dart.fn(suffix => suffix.isVisible, MenuItemAffixTobool()));
      }
      get hasSecondaryHoverIcon() {
        return this.uiHoverIcon != null;
      }
      get hasSubMenu() {
        return this.subMenu != null;
      }
      get showTooltip() {
        return strings$.isNotEmpty(this.tooltip);
      }
      get uiIcon() {
        return this.icon;
      }
      get uiHoverIcon() {
        let suffix = this.itemSuffixes.firstWhere(dart.fn(suffix => model__menu__menu_item_affix.IconAffix.is(suffix) && dart.test(suffix.isVisibleOnHover), MenuItemAffixTobool()), {orElse: dart.fn(() => null, VoidToNull())});
        return model__menu__menu_item_affix.IconAffix.as(suffix).icon;
      }
      get uiDisplayName() {
        return this.label;
      }
      get enabled() {
        return this.selectableState === src__model__selection__interfaces__selectable.SelectableOption.Selectable;
      }
      set enabled(value) {
        this.selectableState = dart.test(value) ? src__model__selection__interfaces__selectable.SelectableOption.Selectable : src__model__selection__interfaces__selectable.SelectableOption.Disabled;
      }
      get action() {
        return this[_action];
      }
      set action(value) {
        if (dart.equals(value, this[_action])) return;
        this[_action] = value;
        this.notifyPropertyChange(core.Function, const$0 || (const$0 = dart.const(core.Symbol.new('action'))), this[_action], value);
      }
      get secondaryIconVisibility() {
        return this[_secondaryIconVisibility];
      }
      get selectableState() {
        return this[_selectableState];
      }
      set selectableState(value) {
        if (value == this[_selectableState]) return;
        this[_selectableState] = value;
        this.notifyPropertyChange(src__model__selection__interfaces__selectable.SelectableOption, const$1 || (const$1 = dart.const(core.Symbol.new('selectableState'))), this[_selectableState], value);
      }
    }
    (SelectableMenuItem.new = function(opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      let itemRenderer = opts && 'itemRenderer' in opts ? opts.itemRenderer : model__ui__has_renderer.defaultItemRenderer;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let secondaryIcon = opts && 'secondaryIcon' in opts ? opts.secondaryIcon : null;
      let subMenu = opts && 'subMenu' in opts ? opts.subMenu : null;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let cssClasses = opts && 'cssClasses' in opts ? opts.cssClasses : null;
      let action = opts && 'action' in opts ? opts.action : model__menu__selectable_menu._noOp;
      let selectableState = opts && 'selectableState' in opts ? opts.selectableState : src__model__selection__interfaces__selectable.SelectableOption.Selectable;
      let shouldSelectOnItemClick = opts && 'shouldSelectOnItemClick' in opts ? opts.shouldSelectOnItemClick : null;
      let itemSuffixes = opts && 'itemSuffixes' in opts ? opts.itemSuffixes : null;
      this[value$] = value;
      this[itemRenderer$] = itemRenderer;
      this[icon$] = icon;
      this[secondaryIcon$] = secondaryIcon;
      this[subMenu$] = subMenu;
      this[tooltip$] = tooltip;
      this[_action] = action;
      this[_selectableState] = selectableState;
      this[_secondaryIconVisibility] = model__menu__menu_item_affix.IconVisibility.visible;
      this[shouldSelectOnItemClick$] = shouldSelectOnItemClick != null ? shouldSelectOnItemClick : subMenu == null;
      this[itemSuffixes$] = itemSuffixes != null ? itemSuffixes : new (ObservableListOfMenuItemAffix()).new();
      this[cssClasses$] = BuiltListOfString().new(core.Iterable._check(cssClasses != null ? cssClasses : const$ || (const$ = dart.constList([], dart.dynamic))));
      SelectableMenuItem.__proto__.new.call(this);
      if (this.secondaryIcon != null) {
        this.itemSuffixes.add(new model__menu__menu_item_affix.IconAffix.new({icon: this.secondaryIcon, visibility: this[_secondaryIconVisibility]}));
      }
    }).prototype = SelectableMenuItem.prototype;
    dart.addTypeTests(SelectableMenuItem);
    SelectableMenuItem.prototype[_is_SelectableMenuItem_default] = true;
    const itemRenderer$ = Symbol("SelectableMenuItem.itemRenderer");
    const value$ = Symbol("SelectableMenuItem.value");
    const shouldSelectOnItemClick$ = Symbol("SelectableMenuItem.shouldSelectOnItemClick");
    const icon$ = Symbol("SelectableMenuItem.icon");
    const secondaryIcon$ = Symbol("SelectableMenuItem.secondaryIcon");
    const subMenu$ = Symbol("SelectableMenuItem.subMenu");
    const tooltip$ = Symbol("SelectableMenuItem.tooltip");
    const itemSuffixes$ = Symbol("SelectableMenuItem.itemSuffixes");
    const cssClasses$ = Symbol("SelectableMenuItem.cssClasses");
    SelectableMenuItem[dart.implements] = () => [model__menu__menu.MenuItem];
    dart.setGetterSignature(SelectableMenuItem, () => ({
      __proto__: dart.getGetters(SelectableMenuItem.__proto__),
      label: dart.fnType(core.String, []),
      nullAwareActionHandler: dart.fnType(core.Function, []),
      hasIcon: dart.fnType(core.bool, []),
      hasSecondaryIcon: dart.fnType(core.bool, []),
      hasSecondaryHoverIcon: dart.fnType(core.bool, []),
      hasSubMenu: dart.fnType(core.bool, []),
      showTooltip: dart.fnType(core.bool, []),
      uiIcon: dart.fnType(model__ui__icon.Icon, []),
      uiHoverIcon: dart.fnType(model__ui__icon.Icon, []),
      uiDisplayName: dart.fnType(core.String, []),
      enabled: dart.fnType(core.bool, []),
      action: dart.fnType(core.Function, []),
      secondaryIconVisibility: dart.fnType(model__menu__menu_item_affix.IconVisibility, []),
      selectableState: dart.fnType(src__model__selection__interfaces__selectable.SelectableOption, [])
    }));
    dart.setSetterSignature(SelectableMenuItem, () => ({
      __proto__: dart.getSetters(SelectableMenuItem.__proto__),
      enabled: dart.fnType(dart.void, [core.bool]),
      action: dart.fnType(dart.void, [core.Function]),
      selectableState: dart.fnType(dart.void, [src__model__selection__interfaces__selectable.SelectableOption])
    }));
    dart.setFieldSignature(SelectableMenuItem, () => ({
      __proto__: dart.getFields(SelectableMenuItem.__proto__),
      [_action]: dart.fieldType(core.Function),
      [_secondaryIconVisibility]: dart.fieldType(model__menu__menu_item_affix.IconVisibility),
      [_selectableState]: dart.fieldType(src__model__selection__interfaces__selectable.SelectableOption),
      itemRenderer: dart.finalFieldType(ItemTypeToString()),
      value: dart.finalFieldType(ItemType),
      shouldSelectOnItemClick: dart.finalFieldType(core.bool),
      icon: dart.finalFieldType(model__ui__icon.Icon),
      secondaryIcon: dart.finalFieldType(model__ui__icon.Icon),
      subMenu: dart.finalFieldType(model__menu__menu.MenuModel),
      tooltip: dart.finalFieldType(core.String),
      itemSuffixes: dart.finalFieldType(ObservableListOfMenuItemAffix()),
      cssClasses: dart.finalFieldType(BuiltListOfString())
    }));
    return SelectableMenuItem;
  });
  model__menu__selectable_menu.SelectableMenuItem = model__menu__selectable_menu.SelectableMenuItem$();
  dart.addTypeTests(model__menu__selectable_menu.SelectableMenuItem, _is_SelectableMenuItem_default);
  const _is_MenuItemGroupWithSelection_default = Symbol('_is_MenuItemGroupWithSelection_default');
  model__menu__selectable_menu.MenuItemGroupWithSelection$ = dart.generic(SelectionItemType => {
    let SelectableOfSelectionItemType = () => (SelectableOfSelectionItemType = dart.constFn(src__model__selection__interfaces__selectable.Selectable$(SelectionItemType)))();
    let SelectionModelOfSelectionItemType = () => (SelectionModelOfSelectionItemType = dart.constFn(model__selection__selection_model.SelectionModel$(SelectionItemType)))();
    class MenuItemGroupWithSelection extends model__menu__menu.MenuItemGroup$(model__menu__selectable_menu.SelectableMenuItem$(SelectionItemType)) {
      get selectionModel() {
        return this[selectionModel$];
      }
      set selectionModel(value) {
        super.selectionModel = value;
      }
      get shouldCloseMenuOnSelection() {
        return this[shouldCloseMenuOnSelection$];
      }
      set shouldCloseMenuOnSelection(value) {
        super.shouldCloseMenuOnSelection = value;
      }
      get isMultiSelect() {
        return model__selection__selection_model.MultiSelectionModel.is(this.selectionModel);
      }
      getSelectable(item) {
        SelectionItemType._check(item);
        for (let menuItem of this) {
          if (dart.equals(menuItem.value, item)) return menuItem.selectableState;
        }
        return src__model__selection__interfaces__selectable.SelectableOption.Selectable;
      }
    }
    (MenuItemGroupWithSelection.new = function(opts) {
      let items = opts && 'items' in opts ? opts.items : null;
      let selectionModel = opts && 'selectionModel' in opts ? opts.selectionModel : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let shouldCloseMenuOnSelection = opts && 'shouldCloseMenuOnSelection' in opts ? opts.shouldCloseMenuOnSelection : null;
      this[selectionModel$] = selectionModel;
      let l = shouldCloseMenuOnSelection;
      this[shouldCloseMenuOnSelection$] = l != null ? l : !model__selection__selection_model.MultiSelectionModel.is(selectionModel);
      MenuItemGroupWithSelection.__proto__.new.call(this, items, label);
    }).prototype = MenuItemGroupWithSelection.prototype;
    dart.addTypeTests(MenuItemGroupWithSelection);
    MenuItemGroupWithSelection.prototype[_is_MenuItemGroupWithSelection_default] = true;
    const selectionModel$ = Symbol("MenuItemGroupWithSelection.selectionModel");
    const shouldCloseMenuOnSelection$ = Symbol("MenuItemGroupWithSelection.shouldCloseMenuOnSelection");
    MenuItemGroupWithSelection[dart.implements] = () => [SelectableOfSelectionItemType()];
    dart.setMethodSignature(MenuItemGroupWithSelection, () => ({
      __proto__: dart.getMethods(MenuItemGroupWithSelection.__proto__),
      getSelectable: dart.fnType(src__model__selection__interfaces__selectable.SelectableOption, [core.Object])
    }));
    dart.setGetterSignature(MenuItemGroupWithSelection, () => ({
      __proto__: dart.getGetters(MenuItemGroupWithSelection.__proto__),
      isMultiSelect: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(MenuItemGroupWithSelection, () => ({
      __proto__: dart.getFields(MenuItemGroupWithSelection.__proto__),
      selectionModel: dart.finalFieldType(SelectionModelOfSelectionItemType()),
      shouldCloseMenuOnSelection: dart.finalFieldType(core.bool)
    }));
    return MenuItemGroupWithSelection;
  });
  model__menu__selectable_menu.MenuItemGroupWithSelection = model__menu__selectable_menu.MenuItemGroupWithSelection$();
  dart.addTypeTests(model__menu__selectable_menu.MenuItemGroupWithSelection, _is_MenuItemGroupWithSelection_default);
  model__menu__selectable_menu._noOp = function() {
  };
  dart.fn(model__menu__selectable_menu._noOp, VoidTovoid());
  dart.trackLibraries("packages/angular_components/model/menu/selectable_menu.ddc", {
    "package:angular_components/model/menu/selectable_menu.dart": model__menu__selectable_menu
  }, '{"version":3,"sourceRoot":"","sources":["selectable_menu.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA+D+B;;;;;;MAMd;;;;;;MAOJ;;;;;;MAGA;;;;;;MAGA;;;;;;MAGK;;;;;;MAGH;;;;;;MAGuB;;;;;;MAGZ;;;;;;;cA2BJ,kBAAY,CAAC,UAAK;MAAC;;gBAGA,aAAO;+BAAI,kCAAK;;;cAGnC,UAAI,IAAI;MAAI;;cAGH,kBAAY,IAAI,CAAC,QAAC,MAAM,IAAK,MAAM,UAAU;MAAC;;cAGzC,iBAAW,IAAI;MAAI;;cAG9B,aAAO,IAAI;MAAI;;cAGd,oBAAU,CAAC,YAAO;MAAC;;cAGxB,UAAI;;;AAIrB,YAAM,SAAS,iBAAY,WAAW,CAClC,QAAC,MAAM,IAAyB,0CAApB,MAAM,eAAiB,MAAM,iBAAiB,oCAClD,cAAM;AAClB,yDAAQ,MAAM,MAAmB;MACnC;;cAG4B,WAAK;;;cAGb,qBAAe,KAAI,8DAAgB,WAAW;;kBAGtD,KAAU;AACpB,4BAAe,aACX,KAAK,IAAG,8DAAgB,WAAW,GAAG,8DAAgB,SAAS;MACrE;;cAGuB,cAAO;;iBAGnB,KAAc;AACvB,wBAAI,KAAK,EAAI,aAAO,GAAE;AAEtB,qBAAO,GAAG,KAAK;AACf,iCAAoB,gBAAC,8DAAS,aAAO,EAAE,KAAK;MAC9C;;cAM8C,+BAAwB;;;cAG9B,uBAAgB;;0BAEpC,KAAsB;AACxC,YAAI,KAAK,IAAI,sBAAgB,EAAE;AAE/B,8BAAgB,GAAG,KAAK;AACxB,iCAAoB,iEAAC,uEAAkB,sBAAgB,EAAE,KAAK;MAChE;;;UA5FoB;UACX,oEAAc,2CAAmB;UACjC;UAC+C;UAC/C;UACA;UACY;UACR,kDAAQ,kCAAK;UACL,6EAAiB,8DAAgB,WAAW;UACxD;UACyB;MAVd,YAAK,GAAL,KAAK;MAChB,mBAAY,GAAZ,YAAY;MACZ,WAAI,GAAJ,IAAI;MAC2C,oBAAa,GAAb,aAAa;MAC5D,cAAO,GAAP,OAAO;MACP,cAAO,GAAP,OAAO;MAMV,aAAO,GAAG,MAAM;MAChB,sBAAgB,GAAG,eAAe;MAClC,8BAAwB,GAAG,2CAAc,QAAQ;MACjD,8BAAuB,GAAG,uBAAuB,WAAvB,uBAAuB,GAAI,OAAO,IAAI;MAChE,mBAAY,GAAG,YAAY,WAAZ,YAAY,GAAI,IAAI,qCAA6B;MAChE,iBAAU,GAAG,AAAI,uBAAiB,sBAAC,UAAU,WAAV,UAAU,GAAI;;AACrD,UAAI,kBAAa,IAAI,MAAM;AACzB,yBAAiB,IAAI,CAAC,IAAI,0CAAS,QACzB,kBAAa,cAAc,8BAAwB;;IAEjE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAhGwC;;;;;;MAG7B;;;;;;;wEAgBe,mBAAc;MAAuB;oBAGhC,IAAsB;iCAAJ;AAC/C,iBAAW,WAAY,OAAM;AAC3B,0BAAI,QAAQ,MAAM,EAAI,IAAI,GAAE,MAAO,SAAQ,gBAAgB;;AAG7D,cAAO,+DAAgB,WAAW;MACpC;;;UAtB2D;UACxC;UACR;UACF;MAFU,qBAAc,GAAd,cAAc;cAGE,0BAA0B;MAAvD,iCAA0B,6EACtB,cAAc;AAClB,0DAAM,KAAK,EAAE,KAAK;IAAC;;;;;;;;;;;;;;;;;;;;;;;;EA8Jb","file":"selectable_menu.ddc.js"}');
  // Exports:
  return {
    model__menu__selectable_menu: model__menu__selectable_menu
  };
});

//# sourceMappingURL=selectable_menu.ddc.js.map
