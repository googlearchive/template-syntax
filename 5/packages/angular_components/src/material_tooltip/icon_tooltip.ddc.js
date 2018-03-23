define(['dart_sdk', 'packages/intl/intl', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/src/material_tooltip/tooltip_target'], function(dart_sdk, intl, deferred_content_aware, tooltip_target) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__material_tooltip__tooltip_target = tooltip_target.src__material_tooltip__tooltip_target;
  const _root = Object.create(null);
  const src__material_tooltip__icon_tooltip = Object.create(_root);
  src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent = class MaterialIconTooltipComponent extends core.Object {
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
    }
    get icon() {
      return this[icon];
    }
    set icon(value) {
      super.icon = value;
    }
    get iconSize() {
      return this[iconSize];
    }
    set iconSize(value) {
      super.iconSize = value;
    }
    get tooltipBehavior() {
      return this[tooltipBehavior];
    }
    set tooltipBehavior(value) {
      this[tooltipBehavior] = value;
    }
    get contentVisible() {
      return this.tooltipBehavior.tooltipActivate;
    }
    get helpTooltipLabel() {
      return intl$.Intl.message('Mouseover, click, press Enter key or Space key on this icon for more ' + 'information.', {name: 'MaterialIconTooltipComponent_helpTooltipLabel', desc: 'Label for help icon which shows help content.'});
    }
  };
  (src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.new = function(darkTheme, element, type, size) {
    this[element$] = null;
    this[tooltipBehavior] = null;
    this[icon] = dart.str`${type != null ? type : "help"}_outline`;
    this[iconSize] = size != null ? size : 'medium';
    if (!(type === 'help' || type === 'info' || type === 'error' || type == null)) dart.assertFailed();
    if (!(this.iconSize === 'x-small' || this.iconSize === 'small' || this.iconSize === 'medium' || this.iconSize === 'large' || this.iconSize === 'x-large' || this.iconSize === '')) dart.assertFailed();
    this.element = element;
    darkTheme.themeElement(element);
  }).prototype = src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.prototype;
  dart.addTypeTests(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent);
  const element$ = Symbol("MaterialIconTooltipComponent.element");
  const icon = Symbol("MaterialIconTooltipComponent.icon");
  const iconSize = Symbol("MaterialIconTooltipComponent.iconSize");
  const tooltipBehavior = Symbol("MaterialIconTooltipComponent.tooltipBehavior");
  src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent[dart.implements] = () => [content__deferred_content_aware.DeferredContentAware];
  dart.setGetterSignature(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent, () => ({
    __proto__: dart.getGetters(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.__proto__),
    contentVisible: dart.fnType(async.Stream$(core.bool), []),
    helpTooltipLabel: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent, () => ({
    __proto__: dart.getFields(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.__proto__),
    element: dart.fieldType(html.HtmlElement),
    icon: dart.finalFieldType(core.String),
    iconSize: dart.finalFieldType(core.String),
    tooltipBehavior: dart.fieldType(src__material_tooltip__tooltip_target.TooltipBehavior)
  }));
  dart.trackLibraries("packages/angular_components/src/material_tooltip/icon_tooltip.ddc", {
    "package:angular_components/src/material_tooltip/icon_tooltip.dart": src__material_tooltip__icon_tooltip
  }, '{"version":3,"sourceRoot":"","sources":["icon_tooltip.dart"],"names":[],"mappings":";;;;;;;;;;;;;IA2Dc;;;;;;IAIC;;;;;;IAGA;;;;;;IAkBG;;;;;;;YAGmB,qBAAe,gBAAgB;;;YAEnC,WAAI,QAAQ,CACvC,0EACA,uBACM,uDACA;IAAgD;;mFAzB7B,SAAsB,EAAE,OAAmB,EACpE,IAA8B,EAAE,IAA8B;IAVtD,cAAO;IAyBH,qBAAe;IAdzB,UAAI,GAAG,WAAG,IAAI,WAAJ,IAAI,GAAI;IAClB,cAAQ,GAAG,IAAI,WAAJ,IAAI,GAAI;AACvB,UAAO,AAAoD,IAAhD,KAAI,UAAU,IAAI,KAAI,UAAU,IAAI,KAAI,WAAW,IAAI,IAAI;AACtE,UAAO,AAImB,aAJX,KAAI,aACf,aAAQ,KAAI,WACZ,aAAQ,KAAI,YACZ,aAAQ,KAAI,WACZ,aAAQ,KAAI,aACZ,aAAQ,KAAI;AAChB,gBAAY,GAAG,OAAO;AACtB,aAAS,aAAa,CAAC,OAAO;EAChC","file":"icon_tooltip.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__icon_tooltip: src__material_tooltip__icon_tooltip
  };
});

//# sourceMappingURL=icon_tooltip.ddc.js.map
