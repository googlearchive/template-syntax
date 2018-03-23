define(['dart_sdk', 'packages/angular_components/model/menu/menu_item_affix', 'packages/observable/src/records', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/model/ui/icon', 'packages/observable/src/observable_list', 'packages/angular/src/core/change_detection/change_detector_ref', 'packages/angular_components/material_menu/menu_root'], function(dart_sdk, menu_item_affix, records, lifecycle_hooks, icon, observable_list, change_detector_ref, menu_root) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__menu__menu_item_affix = menu_item_affix.model__menu__menu_item_affix;
  const src__records = records.src__records;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const model__ui__icon = icon.model__ui__icon;
  const src__observable_list = observable_list.src__observable_list;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const material_menu__menu_root = menu_root.material_menu__menu_root;
  const _root = Object.create(null);
  const material_menu__menu_item_affix_list = Object.create(_root);
  let ListChangeRecordOfMenuItemAffix = () => (ListChangeRecordOfMenuItemAffix = dart.constFn(src__records.ListChangeRecord$(model__menu__menu_item_affix.MenuItemAffix)))();
  let ListOfListChangeRecordOfMenuItemAffix = () => (ListOfListChangeRecordOfMenuItemAffix = dart.constFn(core.List$(ListChangeRecordOfMenuItemAffix())))();
  let ListOfListChangeRecordOfMenuItemAffixToNull = () => (ListOfListChangeRecordOfMenuItemAffixToNull = dart.constFn(dart.fnType(core.Null, [ListOfListChangeRecordOfMenuItemAffix()])))();
  let ObservableListOfMenuItemAffix = () => (ObservableListOfMenuItemAffix = dart.constFn(src__observable_list.ObservableList$(model__menu__menu_item_affix.MenuItemAffix)))();
  const _cdRef = Symbol('_cdRef');
  const _menuRoot = Symbol('_menuRoot');
  const _itemChangeStreamSub = Symbol('_itemChangeStreamSub');
  const _items = Symbol('_items');
  const _disabled = Symbol('_disabled');
  material_menu__menu_item_affix_list.MenuItemAffixListComponent = class MenuItemAffixListComponent extends core.Object {
    set disabled(disabled) {
      this[_disabled] = disabled;
    }
    set items(items) {
      this[_items] = items;
      let t = this[_itemChangeStreamSub];
      t == null ? null : t.cancel();
      let t$ = items == null ? null : items.listChanges;
      this[_itemChangeStreamSub] = t$ == null ? null : t$.listen(dart.fn(_ => {
        this[_cdRef].markForCheck();
      }, ListOfListChangeRecordOfMenuItemAffixToNull()));
    }
    get hasAffixes() {
      let t = this[_items];
      let l = t == null ? null : t.isNotEmpty;
      return l != null ? l : false;
    }
    get affixes() {
      return this[_items];
    }
    ngOnDestroy() {
      let t = this[_itemChangeStreamSub];
      t == null ? null : t.cancel();
    }
    isIconAffix(item) {
      return model__menu__menu_item_affix.IconAffix.is(item);
    }
    isActionIconAffix(item) {
      return model__menu__menu_item_affix.IconAffix.is(item) && model__menu__menu_item_affix.IconWithAction.is(item.icon);
    }
    isCaptionAffix(item) {
      return model__menu__menu_item_affix.CaptionAffix.is(item);
    }
    getActionIconAriaLabel(icon) {
      return model__menu__menu_item_affix.IconWithAction.is(icon) ? icon.ariaLabel : null;
    }
    handleActionIconTrigger(icon, event) {
      if (dart.test(this[_disabled])) return;
      if (model__menu__menu_item_affix.IconWithAction.is(icon)) {
        icon.action == null ? null : dart.dcall(icon.action);
        event.stopPropagation();
        if (dart.test(icon.shouldCloseMenuOnTrigger)) {
          this[_menuRoot] == null ? null : this[_menuRoot].closeHierarchy();
        }
      }
    }
    getIcon(affix) {
      let iconAffix = model__menu__menu_item_affix.IconAffix._check(affix);
      return iconAffix.icon;
    }
    getText(affix) {
      let captionAffix = model__menu__menu_item_affix.CaptionAffix._check(affix);
      return captionAffix.text;
    }
  };
  (material_menu__menu_item_affix_list.MenuItemAffixListComponent.new = function(cdRef, menuRoot) {
    this[_itemChangeStreamSub] = null;
    this[_items] = null;
    this[_disabled] = false;
    this[_cdRef] = cdRef;
    this[_menuRoot] = menuRoot;
  }).prototype = material_menu__menu_item_affix_list.MenuItemAffixListComponent.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list.MenuItemAffixListComponent);
  material_menu__menu_item_affix_list.MenuItemAffixListComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_menu__menu_item_affix_list.MenuItemAffixListComponent, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list.MenuItemAffixListComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    isIconAffix: dart.fnType(core.bool, [model__menu__menu_item_affix.MenuItemAffix]),
    isActionIconAffix: dart.fnType(core.bool, [model__menu__menu_item_affix.MenuItemAffix]),
    isCaptionAffix: dart.fnType(core.bool, [model__menu__menu_item_affix.MenuItemAffix]),
    getActionIconAriaLabel: dart.fnType(core.String, [model__ui__icon.Icon]),
    handleActionIconTrigger: dart.fnType(dart.void, [model__ui__icon.Icon, html.Event]),
    getIcon: dart.fnType(model__ui__icon.Icon, [model__menu__menu_item_affix.MenuItemAffix]),
    getText: dart.fnType(core.String, [model__menu__menu_item_affix.MenuItemAffix])
  }));
  dart.setGetterSignature(material_menu__menu_item_affix_list.MenuItemAffixListComponent, () => ({
    __proto__: dart.getGetters(material_menu__menu_item_affix_list.MenuItemAffixListComponent.__proto__),
    hasAffixes: dart.fnType(core.bool, []),
    affixes: dart.fnType(core.Iterable$(model__menu__menu_item_affix.MenuItemAffix), [])
  }));
  dart.setSetterSignature(material_menu__menu_item_affix_list.MenuItemAffixListComponent, () => ({
    __proto__: dart.getSetters(material_menu__menu_item_affix_list.MenuItemAffixListComponent.__proto__),
    disabled: dart.fnType(dart.void, [core.bool]),
    items: dart.fnType(dart.void, [ObservableListOfMenuItemAffix()])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list.MenuItemAffixListComponent, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list.MenuItemAffixListComponent.__proto__),
    [_cdRef]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_itemChangeStreamSub]: dart.fieldType(async.StreamSubscription),
    [_items]: dart.fieldType(ObservableListOfMenuItemAffix()),
    [_menuRoot]: dart.finalFieldType(material_menu__menu_root.MenuRoot),
    [_disabled]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_menu/menu_item_affix_list.ddc", {
    "package:angular_components/material_menu/menu_item_affix_list.dart": material_menu__menu_item_affix_list
  }, '{"version":3,"sourceRoot":"","sources":["menu_item_affix_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;iBAoDe,QAAa;AACxB,qBAAS,GAAG,QAAQ;IACtB;cAIU,KAAmC;AAC3C,kBAAW,GAAG,KAAK;AAEnB,wCAAoB;;AAEpB,eAAuB,KAAK,kBAAL,KAAK,YAAa;gCAArB,iCAA8B,QAAC,CAAC;AAClD,oBAAM,aAAa;;IAEvB;;cAEuB,YAAM;;6BAAgB;IAAK;;YAEX,aAAM;;;AAI3C,wCAAoB;;IACtB;gBAEiB,IAAkB;uDAAK,IAAI;IAAa;sBAClC,IAAkB;YACnB,2CAAlB,IAAI,oDAAiB,IAAI,KAAK;IAAkB;mBAEhC,IAAkB;0DAAK,IAAI;IAAgB;2BAEjC,IAAS;4DACnC,IAAI,IAAqB,IAAI,UAAU,GAAG;IAAI;4BAErB,IAAS,EAAE,KAAW;AACjD,oBAAI,eAAS,GAAE;AAEf,yDAAI,IAAI,GAAoB;AAC1B,YAAI,OAAO,6BAAX,IAAI,OAAO;AACX,aAAK,gBAAgB;AAErB,sBAAI,IAAI,yBAAyB,GAAE;yBAAS,kBAAT,eAAS,eAAgB;;;IAEhE;YAEa,KAAmB;AAC9B,UAAU,0DAAY,KAAK;AAC3B,YAAO,UAAS,KAAK;IACvB;YAEe,KAAmB;AAChC,UAAa,gEAAe,KAAK;AACjC,YAAO,aAAY,KAAK;IAC1B;;iFAxDgC,KAAM,EAAmB,QAAS;IAX/C,0BAAoB;IAET,YAAM;IAO/B,eAAS,GAAG;IAEe,YAAM,GAAN,KAAM;IAAmB,eAAS,GAAT,QAAS;EAAC","file":"menu_item_affix_list.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_item_affix_list: material_menu__menu_item_affix_list
  };
});

//# sourceMappingURL=menu_item_affix_list.ddc.js.map
