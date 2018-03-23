define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/material_tooltip/tooltip_source', 'packages/angular_components/model/action/delayed_action', 'packages/angular_components/utils/browser/feature_detector/feature_detector', 'packages/angular_components/src/material_tooltip/ink_tooltip.template', 'packages/angular_components/src/material_tooltip/ink_tooltip', 'packages/angular_components/src/material_tooltip/tooltip_target', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/change_detection/change_detector_ref', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/laminate/enums/alignment'], function(dart_sdk, disposer, tooltip_source, delayed_action, feature_detector, ink_tooltip, ink_tooltip$, tooltip_target, lifecycle_hooks, app_view, change_detector_ref, tooltip_controller, alignment) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__material_tooltip__tooltip_source = tooltip_source.src__material_tooltip__tooltip_source;
  const model__action__delayed_action = delayed_action.model__action__delayed_action;
  const utils__browser__feature_detector__feature_detector = feature_detector.utils__browser__feature_detector__feature_detector;
  const src__material_tooltip__ink_tooltip$46template = ink_tooltip.src__material_tooltip__ink_tooltip$46template;
  const src__material_tooltip__ink_tooltip = ink_tooltip$.src__material_tooltip__ink_tooltip;
  const src__material_tooltip__tooltip_target = tooltip_target.src__material_tooltip__tooltip_target;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__linker__component_loader = app_view.src__core__linker__component_loader;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const _root = Object.create(null);
  const src__material_tooltip__tooltip = Object.create(_root);
  const $onClick = dartx.onClick;
  const $onBlur = dartx.onBlur;
  const $onFocus = dartx.onFocus;
  const $onMouseOver = dartx.onMouseOver;
  const $onMouseLeave = dartx.onMouseLeave;
  const $on = dartx.on;
  const $onTouchEnd = dartx.onTouchEnd;
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  const _viewLoader = Symbol('_viewLoader');
  const _changeDetector = Symbol('_changeDetector');
  const _window = Symbol('_window');
  const _disposer = Symbol('_disposer');
  const _lastText = Symbol('_lastText');
  const _isInitialized = Symbol('_isInitialized');
  const _tooltip = Symbol('_tooltip');
  const _canShow = Symbol('_canShow');
  const _isShown = Symbol('_isShown');
  const _inkTooltip = Symbol('_inkTooltip');
  const _delayedActivate = Symbol('_delayedActivate');
  const _hostListenersAttached = Symbol('_hostListenersAttached');
  const _componentRef = Symbol('_componentRef');
  const _activate = Symbol('_activate');
  const _attachHostListeners = Symbol('_attachHostListeners');
  const _maybeLoadTooltip = Symbol('_maybeLoadTooltip');
  src__material_tooltip__tooltip.MaterialTooltipDirective = class MaterialTooltipDirective extends src__material_tooltip__tooltip_target.TooltipTarget {
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
    }
    get inLongPress() {
      return this[inLongPress];
    }
    set inLongPress(value) {
      this[inLongPress] = value;
    }
    [_attachHostListeners]() {
      if (dart.test(this[_hostListenersAttached])) return;
      this[_hostListenersAttached] = true;
      this[_disposer].addStreamSubscription(html.MouseEvent, this.element[$onClick].listen(dart.fn(_ => {
        this.hide(true);
      }, MouseEventToNull())));
      this[_disposer].addStreamSubscription(html.Event, this.element[$onBlur].listen(dart.fn(_ => {
        this.hide(true);
      }, EventToNull())));
      this[_disposer].addStreamSubscription(html.Event, this.element[$onFocus].listen(dart.fn(_ => {
        this.show();
      }, EventToNull())));
      if (dart.test(utils__browser__feature_detector__feature_detector.supportsHover(this[_window]))) {
        this[_disposer].addStreamSubscription(html.MouseEvent, this.element[$onMouseOver].listen(dart.fn(_ => {
          this.show();
        }, MouseEventToNull())));
        this[_disposer].addStreamSubscription(html.MouseEvent, this.element[$onMouseLeave].listen(dart.fn(_ => {
          this.hide();
        }, MouseEventToNull())));
      }
      if (dart.test(utils__browser__feature_detector__feature_detector.isHammerLoaded())) {
        this[_disposer].addStreamSubscription(html.Event, this.element[$on]._get('press').listen(dart.bind(this, 'handleLongPress')));
        this[_disposer].addStreamSubscription(html.TouchEvent, this.element[$onTouchEnd].listen(dart.bind(this, 'endLongPress')));
      }
    }
    handleLongPress(_) {
      this.inLongPress = true;
      this.show();
    }
    endLongPress(event) {
      if (dart.test(this.inLongPress)) {
        event.preventDefault();
        this.inLongPress = false;
        this.hide(true);
      }
    }
    show() {
      if (dart.test(this[_isShown]) || !dart.test(this[_canShow])) return;
      this[_isShown] = true;
      this[_maybeLoadTooltip]();
      this[_delayedActivate].start();
    }
    hide(immediate) {
      if (immediate === void 0) immediate = false;
      if (!dart.test(this[_isShown])) return;
      this[_isShown] = false;
      this[_delayedActivate].cancel();
      let t = this[_tooltip];
      t == null ? null : t.deactivate({immediate: immediate});
      let t$ = this[_inkTooltip];
      t$ == null ? null : t$.deactivate();
    }
    [_maybeLoadTooltip]() {
      if (dart.test(this[_isInitialized])) return;
      this[_isInitialized] = true;
      this[_componentRef] = this[_viewLoader].loadNextToLocation(dart.dynamic, src__material_tooltip__ink_tooltip$46template.MaterialInkTooltipComponentNgFactory, this.viewContainerRef);
      this[_inkTooltip] = src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent._check(this[_componentRef].instance);
      this[_disposer].addDisposable(VoidTovoid(), dart.bind(this[_componentRef], 'destroy'));
      let _ = this[_inkTooltip];
      _.text = this[_lastText];
      _.tooltipRef = this;
      if (this.positions != null) {
        this[_inkTooltip].positions = this.positions;
      }
    }
    setTooltip(tooltip) {
      if (this[_tooltip] == null) this[_delayedActivate].start();
      this[_tooltip] = tooltip;
    }
    [_activate]() {
      this[_changeDetector].markForCheck();
      this[_tooltip].activate();
    }
    set text(text) {
      this[_lastText] = text;
      let l = this[_inkTooltip];
      l == null ? null : l.text = text;
    }
    set canShow(value) {
      if (value == this[_canShow]) return;
      if (dart.test(value)) {
        this[_attachHostListeners]();
      } else {
        let t = this[_tooltip];
        t == null ? null : t.deactivate({immediate: true});
        this[_delayedActivate].cancel();
      }
      this[_canShow] = value;
    }
    get positions() {
      return this[positions];
    }
    set positions(value) {
      this[positions] = value;
    }
    ngOnInit() {
      if (dart.test(this[_canShow])) this[_attachHostListeners]();
    }
    ngOnDestroy() {
      let t = this[_tooltip];
      t == null ? null : t.deactivate({immediate: true});
      this[_delayedActivate].cancel();
      this[_disposer].dispose();
    }
  };
  (src__material_tooltip__tooltip.MaterialTooltipDirective.new = function(domPopupSourceFactory, viewContainerRef, element, viewLoader, changeDetector, window) {
    this[_disposer] = new utils__disposer__disposer.Disposer.multi();
    this[_lastText] = null;
    this[_isInitialized] = false;
    this[_tooltip] = null;
    this[_canShow] = true;
    this[_isShown] = false;
    this[_inkTooltip] = null;
    this[_delayedActivate] = null;
    this[inLongPress] = null;
    this[_hostListenersAttached] = false;
    this[_componentRef] = null;
    this[positions] = null;
    this[_viewLoader] = viewLoader;
    this[_changeDetector] = changeDetector;
    this[_window] = window;
    this[element$] = element;
    src__material_tooltip__tooltip.MaterialTooltipDirective.__proto__.new.call(this, domPopupSourceFactory, viewContainerRef, element);
    this.inLongPress = false;
    this[_delayedActivate] = new model__action__delayed_action.DelayedAction.new(src__material_tooltip__tooltip_source.tooltipShowDelay, dart.bind(this, _activate));
  }).prototype = src__material_tooltip__tooltip.MaterialTooltipDirective.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip.MaterialTooltipDirective);
  const element$ = Symbol("MaterialTooltipDirective.element");
  const inLongPress = Symbol("MaterialTooltipDirective.inLongPress");
  const positions = Symbol("MaterialTooltipDirective.positions");
  src__material_tooltip__tooltip.MaterialTooltipDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy, src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.AfterViewInit];
  dart.setMethodSignature(src__material_tooltip__tooltip.MaterialTooltipDirective, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip.MaterialTooltipDirective.__proto__),
    [_attachHostListeners]: dart.fnType(dart.void, []),
    handleLongPress: dart.fnType(dart.void, [html.Event]),
    endLongPress: dart.fnType(dart.void, [html.TouchEvent]),
    show: dart.fnType(dart.void, []),
    hide: dart.fnType(dart.void, [], [core.bool]),
    [_maybeLoadTooltip]: dart.fnType(dart.void, []),
    [_activate]: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(src__material_tooltip__tooltip.MaterialTooltipDirective, () => ({
    __proto__: dart.getSetters(src__material_tooltip__tooltip.MaterialTooltipDirective.__proto__),
    text: dart.fnType(dart.void, [core.String]),
    canShow: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__material_tooltip__tooltip.MaterialTooltipDirective, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip.MaterialTooltipDirective.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_viewLoader]: dart.finalFieldType(src__core__linker__component_loader.ComponentLoader),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_window]: dart.finalFieldType(html.Window),
    [_lastText]: dart.fieldType(core.String),
    [_isInitialized]: dart.fieldType(core.bool),
    [_tooltip]: dart.fieldType(src__material_tooltip__tooltip_controller.Tooltip),
    [_canShow]: dart.fieldType(core.bool),
    [_isShown]: dart.fieldType(core.bool),
    [_inkTooltip]: dart.fieldType(src__material_tooltip__ink_tooltip.MaterialInkTooltipComponent),
    [_delayedActivate]: dart.fieldType(model__action__delayed_action.DelayedAction),
    element: dart.fieldType(html.HtmlElement),
    inLongPress: dart.fieldType(core.bool),
    [_hostListenersAttached]: dart.fieldType(core.bool),
    [_componentRef]: dart.fieldType(src__core__linker__component_factory.ComponentRef),
    positions: dart.fieldType(ListOfRelativePosition())
  }));
  dart.trackLibraries("packages/angular_components/src/material_tooltip/tooltip.ddc", {
    "package:angular_components/src/material_tooltip/tooltip.dart": src__material_tooltip__tooltip
  }, '{"version":3,"sourceRoot":"","sources":["tooltip.dart"],"names":[],"mappings":"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","file":"tooltip.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip: src__material_tooltip__tooltip
  };
});

//# sourceMappingURL=tooltip.ddc.js.map
