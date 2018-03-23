define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/laminate/popup/popup_state', 'packages/angular_components/src/utils/async/throttle_stream', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/model/ui/toggle', 'packages/angular_components/src/laminate/popup/popup_source', 'packages/angular_components/laminate/enums/visibility', 'packages/angular_components/src/utils/async/debounce_stream', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/src/laminate/popup/popup_interface', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/popup_size_provider', 'packages/angular/src/core/change_detection/change_detector_ref', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/src/laminate/popup/popup_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/utils/id_generator/id_generator'], function(dart_sdk, disposer, popup_state, throttle_stream, popup_hierarchy, toggle, popup_source, visibility, debounce_stream, alignment, popup_interface, deferred_content_aware, lifecycle_hooks, material_dropdown_base, popup_size_provider, change_detector_ref, app_view, ng_zone, overlay_service, overlay_ref, element_ref, popup_ref, zindexer, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__laminate__popup__popup_state = popup_state.src__laminate__popup__popup_state;
  const src__utils__async__throttle_stream = throttle_stream.src__utils__async__throttle_stream;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const model__ui__toggle = toggle.model__ui__toggle;
  const src__laminate__popup__popup_source = popup_source.src__laminate__popup__popup_source;
  const laminate__enums__visibility = visibility.laminate__enums__visibility;
  const src__utils__async__debounce_stream = debounce_stream.src__utils__async__debounce_stream;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__laminate__popup__popup_interface = popup_interface.src__laminate__popup__popup_interface;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__laminate__popup__popup_size_provider = popup_size_provider.src__laminate__popup__popup_size_provider;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const src__core__linker__view_container_ref = app_view.src__core__linker__view_container_ref;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_service.src__laminate__overlay__overlay_service;
  const src__laminate__overlay__overlay_ref = overlay_ref.src__laminate__overlay__overlay_ref;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const src__laminate__popup__popup_ref = popup_ref.src__laminate__popup__popup_ref;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const _root = Object.create(null);
  const material_popup__material_popup = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $onResize = dartx.onResize;
  const $cancelAnimationFrame = dartx.cancelAnimationFrame;
  const $append = dartx.append;
  const $display = dartx.display;
  const $visibility = dartx.visibility;
  const $every = dartx.every;
  const $_get = dartx._get;
  const $round = dartx.round;
  const $left = dartx.left;
  const $top = dartx.top;
  const $width = dartx.width;
  const $height = dartx.height;
  const $requestAnimationFrame = dartx.requestAnimationFrame;
  const $transform = dartx.transform;
  const $topLeft = dartx.topLeft;
  const $first = dartx.first;
  const $bottomRight = dartx.bottomRight;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $right = dartx.right;
  const $bottom = dartx.bottom;
  let StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  let MutableRectangleOfnum = () => (MutableRectangleOfnum = dart.constFn(math.MutableRectangle$(core.num)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let CompleterOfRectangleOfnum = () => (CompleterOfRectangleOfnum = dart.constFn(async.Completer$(RectangleOfnum())))();
  let StreamSubscriptionOfRectangleOfnum = () => (StreamSubscriptionOfRectangleOfnum = dart.constFn(async.StreamSubscription$(RectangleOfnum())))();
  let StreamSubscriptionOfRectangleOfnumToNull = () => (StreamSubscriptionOfRectangleOfnumToNull = dart.constFn(dart.fnType(core.Null, [StreamSubscriptionOfRectangleOfnum()])))();
  let StreamOfRectangleOfnum = () => (StreamOfRectangleOfnum = dart.constFn(async.Stream$(RectangleOfnum())))();
  let JSArrayOfStreamOfRectangleOfnum = () => (JSArrayOfStreamOfRectangleOfnum = dart.constFn(_interceptors.JSArray$(StreamOfRectangleOfnum())))();
  let RectangleOfnumTobool = () => (RectangleOfnumTobool = dart.constFn(dart.fnType(core.bool, [RectangleOfnum()])))();
  let ListOfRectangleOfnum = () => (ListOfRectangleOfnum = dart.constFn(core.List$(RectangleOfnum())))();
  let ListOfRectangleOfnumToNull = () => (ListOfRectangleOfnumToNull = dart.constFn(dart.fnType(core.Null, [ListOfRectangleOfnum()])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let MaterialPopupComponentToPopupHierarchy = () => (MaterialPopupComponentToPopupHierarchy = dart.constFn(dart.fnType(src__laminate__popup__popup_hierarchy.PopupHierarchy, [material_popup__material_popup.MaterialPopupComponent])))();
  let MaterialPopupComponentToPopupRef = () => (MaterialPopupComponentToPopupRef = dart.constFn(dart.fnType(src__laminate__popup__popup_ref.PopupRef, [material_popup__material_popup.MaterialPopupComponent])))();
  let VoidToNull$ = () => (VoidToNull$ = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfStreamOfTToStreamOfListOfT = () => (ListOfStreamOfTToStreamOfListOfT = dart.constFn(dart.gFnType(T => [async.Stream$(core.List$(T)), [core.List$(async.Stream$(T))]])))();
  let IterableToIterable = () => (IterableToIterable = dart.constFn(dart.fnType(core.Iterable, [core.Iterable])))();
  let RectangleOfnum__ToRectangleOfnum = () => (RectangleOfnum__ToRectangleOfnum = dart.constFn(dart.fnType(RectangleOfnum(), [RectangleOfnum()], {width: core.num, height: core.num})))();
  let RectangleOfnum__ToRectangleOfnum$ = () => (RectangleOfnum__ToRectangleOfnum$ = dart.constFn(dart.fnType(RectangleOfnum(), [RectangleOfnum()], {top: core.num, left: core.num})))();
  let RectangleOfnumAndRectangleOfnumToRectangleOfnum = () => (RectangleOfnumAndRectangleOfnumToRectangleOfnum = dart.constFn(dart.fnType(RectangleOfnum(), [RectangleOfnum(), RectangleOfnum()])))();
  const _hierarchy = Symbol('_hierarchy');
  const _ngZone = Symbol('_ngZone');
  const _overlayService = Symbol('_overlayService');
  const _zIndexer = Symbol('_zIndexer');
  const _defaultPreferredPositions = Symbol('_defaultPreferredPositions');
  const _useRepositionLoop = Symbol('_useRepositionLoop');
  const _popupSizeProvider = Symbol('_popupSizeProvider');
  const _changeDetector = Symbol('_changeDetector');
  const _viewContainer = Symbol('_viewContainer');
  const _onOpened = Symbol('_onOpened');
  const _onContentVisible = Symbol('_onContentVisible');
  const _disposer = Symbol('_disposer');
  const _alignmentPosition = Symbol('_alignmentPosition');
  const _layoutChangeSub = Symbol('_layoutChangeSub');
  const _layoutInternalSub = Symbol('_layoutInternalSub');
  const _windowResizeSub = Symbol('_windowResizeSub');
  const _overlayRef = Symbol('_overlayRef');
  const _uniqueId = Symbol('_uniqueId');
  const _resolvedPopupRef = Symbol('_resolvedPopupRef');
  const _viewInitialized = Symbol('_viewInitialized');
  const _animationTimer = Symbol('_animationTimer');
  const _isOpening = Symbol('_isOpening');
  const _initialSourceDimensions = Symbol('_initialSourceDimensions');
  const _repositionOffsetX = Symbol('_repositionOffsetX');
  const _repositionOffsetY = Symbol('_repositionOffsetY');
  const _repositionLoopId = Symbol('_repositionLoopId');
  const _zIndex = Symbol('_zIndex');
  const _slide = Symbol('_slide');
  const _matchMinSourceWidth = Symbol('_matchMinSourceWidth');
  const _isVisible = Symbol('_isVisible');
  const _initViewportRect = Symbol('_initViewportRect');
  const _updateOverlayCssClass = Symbol('_updateOverlayCssClass');
  const _initView = Symbol('_initView');
  const _open = Symbol('_open');
  const _close = Symbol('_close');
  const _updatePopupMaxSize = Symbol('_updatePopupMaxSize');
  const _onPopupOpened = Symbol('_onPopupOpened');
  const _schedulePositionUpdate = Symbol('_schedulePositionUpdate');
  let const$;
  const _startRepositionLoop = Symbol('_startRepositionLoop');
  const _stopRepositionLoop = Symbol('_stopRepositionLoop');
  const _onPopupClosed = Symbol('_onPopupClosed');
  const _sourceDimensions = Symbol('_sourceDimensions');
  const _reposition = Symbol('_reposition');
  const _preferredPositions = Symbol('_preferredPositions');
  const _getBestPosition = Symbol('_getBestPosition');
  const Object_PopupBase$ = class Object_PopupBase extends core.Object {};
  (Object_PopupBase$.new = function() {
  }).prototype = Object_PopupBase$.prototype;
  dart.mixinMembers(Object_PopupBase$, src__laminate__popup__popup_interface.PopupBase);
  const Object_PopupEvents$ = class Object_PopupEvents extends Object_PopupBase$ {};
  (Object_PopupEvents$.new = function() {
    src__laminate__popup__popup_interface.PopupEvents.new.call(this);
  }).prototype = Object_PopupEvents$.prototype;
  dart.mixinMembers(Object_PopupEvents$, src__laminate__popup__popup_interface.PopupEvents);
  const Object_PopupHierarchyElement$ = class Object_PopupHierarchyElement extends Object_PopupEvents$ {};
  (Object_PopupHierarchyElement$.new = function() {
    Object_PopupHierarchyElement$.__proto__.new.call(this);
  }).prototype = Object_PopupHierarchyElement$.prototype;
  dart.mixinMembers(Object_PopupHierarchyElement$, src__laminate__popup__popup_hierarchy.PopupHierarchyElement);
  material_popup__material_popup.MaterialPopupComponent = class MaterialPopupComponent extends Object_PopupHierarchyElement$ {
    get onOpened() {
      return this[_onOpened].stream;
    }
    get elementRef() {
      return this[elementRef$];
    }
    set elementRef(value) {
      super.elementRef = value;
    }
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    get autoDismiss() {
      return this.state.autoDismiss;
    }
    set autoDismiss(value) {
      super.autoDismiss = value;
    }
    get showPopup() {
      return this[showPopup];
    }
    set showPopup(value) {
      this[showPopup] = value;
    }
    get z() {
      return this[z];
    }
    set z(value) {
      this[z] = value;
    }
    get transformOrigin() {
      let t = this[_alignmentPosition];
      return t == null ? null : t.animationOrigin;
    }
    get zIndex() {
      return this[_zIndex];
    }
    get slide() {
      return this[_slide];
    }
    set slide(value) {
      this[_slide] = (() => {
        let l = value == null ? null : value[$isNotEmpty];
        return l != null ? l : false;
      })() ? value : null;
      if (!(this[_slide] == null || this.slide === 'x' || this.slide === 'y')) dart.assertFailed();
    }
    set popupSizeProvider(value) {
      this[_popupSizeProvider] = value;
    }
    get maxHeight() {
      return this[maxHeight];
    }
    set maxHeight(value) {
      this[maxHeight] = value;
    }
    get maxWidth() {
      return this[maxWidth];
    }
    set maxWidth(value) {
      this[maxWidth] = value;
    }
    get matchMinSourceWidth() {
      return this[_matchMinSourceWidth];
    }
    set matchMinSourceWidth(value) {
      this[_matchMinSourceWidth] = super.matchMinSourceWidth = value;
    }
    get inkBackground() {
      return this[inkBackground];
    }
    set inkBackground(value) {
      this[inkBackground] = value;
    }
    get hasBox() {
      return this[hasBox];
    }
    set hasBox(value) {
      this[hasBox] = value;
    }
    [_initViewportRect]() {
      if (material_popup__material_popup.MaterialPopupComponent._viewportRect != null) return;
      material_popup__material_popup.MaterialPopupComponent._viewportRect = new (MutableRectangleOfnum()).new(0, 0, html.window.innerWidth, html.window.innerHeight);
      this[_ngZone].runOutsideAngular(dart.fn(() => {
        html.window[$onResize].transform(dart.dynamic, src__utils__async__throttle_stream.throttleStream(html.Event, dart.dynamic, material_popup__material_popup.MaterialPopupComponent._resizeThrottleDuration, {guaranteeLast: true})).listen(dart.fn(_ => {
          material_popup__material_popup.MaterialPopupComponent._viewportRect.width = html.window.innerWidth;
          material_popup__material_popup.MaterialPopupComponent._viewportRect.height = html.window.innerHeight;
        }, dynamicToNull()));
      }, VoidToNull()));
    }
    get contentVisible() {
      return this[_onContentVisible].stream.distinct();
    }
    get hierarchy() {
      let l = this[_hierarchy];
      this[_hierarchy] = l != null ? l : new src__laminate__popup__popup_hierarchy.PopupHierarchy.new();
      return this[_hierarchy];
    }
    ngAfterViewInit() {
      this[_updateOverlayCssClass]();
    }
    [_updateOverlayCssClass]() {
      if (this[_overlayRef] == null) return;
      let hostClassName = dart.dload(this.elementRef.nativeElement, 'className');
      this[_overlayRef].overlayElement.className = dart.notNull(this[_overlayRef].overlayElement.className) + dart.str` ${hostClassName}`;
    }
    ngOnDestroy() {
      if (this[_repositionLoopId] != null) {
        html.window[$cancelAnimationFrame](this[_repositionLoopId]);
      }
      let t = this[_layoutInternalSub];
      t == null ? null : t.cancel();
      let t$ = this[_layoutChangeSub];
      t$ == null ? null : t$.cancel();
      let t$0 = this[_windowResizeSub];
      t$0 == null ? null : t$0.cancel();
      this[_disposer].dispose();
      let t$1 = this[_animationTimer];
      t$1 == null ? null : t$1.cancel();
      this[_isVisible] = false;
      this.onVisibleController.add(false);
    }
    get state() {
      return this[state];
    }
    set state(value) {
      super.state = value;
    }
    get paneId() {
      let t = this[_overlayRef];
      return t == null ? null : t.uniqueId;
    }
    get uniqueId() {
      return this[_uniqueId];
    }
    get templateRef() {
      return this[templateRef];
    }
    set templateRef(value) {
      this[templateRef] = value;
    }
    [_initView]() {
      if (!(this[_viewInitialized] === false)) dart.assertFailed();
      this[_overlayRef] = this[_overlayService].createOverlayRefSync();
      this[_disposer].addFunction(dart.bind(this[_overlayRef], 'dispose'));
      this[_zIndex] = this[_zIndexer].pop();
      let view = this[_viewContainer].createEmbeddedView(this.templateRef);
      for (let node of view.rootNodes) {
        this[_overlayRef].overlayElement[$append](node);
      }
      this[_updateOverlayCssClass]();
      this[_viewInitialized] = true;
    }
    set visible(visible) {
      if (dart.test(visible)) {
        if (!dart.test(this[_viewInitialized])) {
          this[_initView]();
          async.scheduleMicrotask(dart.bind(this, _open));
        } else {
          this[_open]();
        }
      } else if (dart.test(this[_viewInitialized])) {
        this[_close]();
      }
    }
    get isVisible() {
      return this[_isVisible];
    }
    toggle() {
      this.visible = !dart.test(this.isVisible);
    }
    open() {
      this.visible = true;
    }
    close() {
      this.visible = false;
    }
    get container() {
      let t = this[_overlayRef];
      return t == null ? null : t.overlayElement;
    }
    set source(source) {
      super.source = source;
      source.popupId = this.uniqueId;
      if (model__ui__toggle.Toggler.is(source)) {
        model__ui__toggle.Toggler.as(source).toggleable = new material_popup__material_popup._DeferredToggleable.new(this);
      }
    }
    get autoDismissBlockers() {
      let sourceElement = src__laminate__popup__popup_source.ElementPopupSource.is(this.state.source) ? src__laminate__popup__popup_source.ElementPopupSource.as(this.state.source).sourceElement : null;
      return sourceElement != null ? JSArrayOfElement().of([sourceElement]) : JSArrayOfElement().of([]);
    }
    onDismiss() {
      return this.close();
    }
    [_open]() {
      if (dart.test(this[_isOpening])) return async.Future.value();
      this[_isOpening] = true;
      let t = this[_animationTimer];
      t == null ? null : t.cancel();
      this.onOpenController.add(null);
      if (!dart.test(this[_isOpening])) return async.Future.value();
      if (!dart.test(this[_viewInitialized])) {
        dart.throw(new core.StateError.new('No content is attached.'));
      } else if (this.state.source == null) {
        dart.throw(new core.StateError.new('Cannot open popup: no source set.'));
      }
      this[_updatePopupMaxSize]();
      this[_overlayRef].state.visibility = laminate__enums__visibility.Visibility.Hidden;
      let _ = this[_overlayRef].overlayElement.style;
      _[$display] = '';
      _[$visibility] = 'hidden';
      this[_onContentVisible].add(true);
      this[_changeDetector].markForCheck();
      let initialData = CompleterOfRectangleOfnum().new();
      let popupContentsLayoutStream = this[_overlayRef].measureSizeChanges().asBroadcastStream({onCancel: dart.fn(sub => {
          this[_layoutInternalSub] = sub;
        }, StreamSubscriptionOfRectangleOfnumToNull())});
      let popupSourceLayoutStream = this.state.source.onDimensionsChanged({track: this.state.trackLayoutChanges});
      if (!dart.test(this.state.trackLayoutChanges)) {
        popupContentsLayoutStream = popupContentsLayoutStream.take(1);
      }
      let mergedLayoutStream = material_popup__material_popup._mergeStreams(RectangleOfnum(), JSArrayOfStreamOfRectangleOfnum().of([popupContentsLayoutStream, popupSourceLayoutStream]));
      this[_layoutChangeSub] = mergedLayoutStream.listen(dart.fn(layoutRects => {
        if (dart.test(layoutRects[$every](dart.fn(r => r != null, RectangleOfnumTobool())))) {
          if (!dart.test(initialData.isCompleted)) {
            this[_onPopupOpened]();
            initialData.complete(null);
          }
          this[_initialSourceDimensions] = null;
          this[_schedulePositionUpdate](layoutRects[$_get](0), layoutRects[$_get](1));
        }
      }, ListOfRectangleOfnumToNull()));
      if (this[_popupSizeProvider] != null) {
        this[_windowResizeSub] = html.window[$onResize].transform(dart.dynamic, src__utils__async__debounce_stream.debounceStream(html.Event, dart.dynamic, const$ || (const$ = dart.const(new core.Duration.new({milliseconds: 200}))))).listen(dart.fn(_ => {
          this[_updatePopupMaxSize]();
        }, dynamicToNull()));
      }
      return initialData.future;
    }
    [_onPopupOpened]() {
      if (!dart.test(this[_isOpening])) return;
      this.showPopup = true;
      this[_changeDetector].markForCheck();
      if (dart.test(this.state.trackLayoutChanges) && dart.test(this[_useRepositionLoop])) {
        this[_startRepositionLoop]();
      }
      this.attachToVisibleHierarchy();
      if (dart.test(this.hasBox)) {
        this[_animationTimer] = async.Timer.new(material_popup__material_popup.MaterialPopupComponent.SLIDE_DELAY, dart.fn(() => {
          this[_animationTimer] = null;
          this[_isVisible] = true;
          this.onVisibleController.add(true);
          this[_onOpened].add(null);
        }, VoidToNull()));
      } else {
        async.Timer.run(dart.fn(() => {
          if (!dart.test(this[_isOpening])) return;
          this[_isVisible] = true;
          this.onVisibleController.add(true);
          this[_onOpened].add(null);
        }, VoidToNull()));
      }
    }
    [_close]() {
      if (!dart.test(this[_isOpening])) return;
      this[_isOpening] = false;
      let t = this[_animationTimer];
      t == null ? null : t.cancel();
      this.onCloseController.add(null);
      if (dart.test(this[_isOpening])) return;
      let t$ = this[_layoutInternalSub];
      t$ == null ? null : t$.cancel();
      let t$0 = this[_layoutChangeSub];
      t$0 == null ? null : t$0.cancel();
      let t$1 = this[_windowResizeSub];
      t$1 == null ? null : t$1.cancel();
      if (this[_repositionLoopId] != null) {
        this[_stopRepositionLoop]();
      }
      this.detachFromVisibleHierarchy();
      this.showPopup = false;
      this[_changeDetector].markForCheck();
      if (dart.test(this.hasBox)) {
        this[_animationTimer] = async.Timer.new(material_popup__material_popup.MaterialPopupComponent.SLIDE_DELAY, dart.fn(() => {
          this[_animationTimer] = null;
          this[_onPopupClosed]();
        }, VoidToNull()));
      } else {
        this[_onPopupClosed]();
      }
    }
    [_onPopupClosed]() {
      this[_onContentVisible].add(false);
      this[_changeDetector].markForCheck();
      this[_overlayRef].state.visibility = laminate__enums__visibility.Visibility.None;
      this[_overlayRef].overlayElement.style[$display] = 'none';
      this[_isVisible] = false;
      this.onVisibleController.add(false);
    }
    get [_sourceDimensions]() {
      let t = this.state.source;
      let sourceDimensions = t == null ? null : t.dimensions;
      if (sourceDimensions == null) return null;
      let containerRect = this[_overlayRef].containerElement == null ? null : this[_overlayRef].containerElement.getBoundingClientRect();
      if (containerRect == null) return null;
      return new (RectangleOfnum()).new((dart.notNull(sourceDimensions[$left]) - dart.notNull(containerRect[$left]))[$round](), (dart.notNull(sourceDimensions[$top]) - dart.notNull(containerRect[$top]))[$round](), sourceDimensions[$width][$round](), sourceDimensions[$height][$round]());
    }
    [_startRepositionLoop]() {
      this[_ngZone].runOutsideAngular(dart.fn(() => {
        this[_repositionLoopId] = html.window[$requestAnimationFrame](dart.bind(this, _reposition));
      }, VoidToNull()));
    }
    [_stopRepositionLoop]() {
      html.window[$cancelAnimationFrame](this[_repositionLoopId]);
      this[_repositionLoopId] = null;
      if (this[_repositionOffsetX] !== 0 || this[_repositionOffsetY] !== 0) {
        this[_overlayRef].state.left = dart.notNull(this[_overlayRef].state.left) + dart.notNull(this[_repositionOffsetX]);
        this[_overlayRef].state.top = dart.notNull(this[_overlayRef].state.top) + dart.notNull(this[_repositionOffsetY]);
        this[_repositionOffsetX] = this[_repositionOffsetY] = 0;
      }
    }
    [_reposition](_) {
      this[_repositionLoopId] = html.window[$requestAnimationFrame](dart.bind(this, _reposition));
      let sourceDimensions = this[_sourceDimensions];
      if (sourceDimensions == null) return;
      let t = this[_initialSourceDimensions];
      t == null ? this[_initialSourceDimensions] = sourceDimensions : t;
      let newOffsetX = (dart.notNull(sourceDimensions[$left]) - dart.notNull(this[_initialSourceDimensions][$left]))[$round]();
      let newOffsetY = (dart.notNull(sourceDimensions[$top]) - dart.notNull(this[_initialSourceDimensions][$top]))[$round]();
      let scrollShiftX = newOffsetX - dart.notNull(this[_repositionOffsetX]);
      let scrollShiftY = newOffsetY - dart.notNull(this[_repositionOffsetY]);
      this[_repositionOffsetX] = newOffsetX;
      this[_repositionOffsetY] = newOffsetY;
      if (dart.test(this.state.constrainToViewport)) {
        let popupRect = this[_overlayRef].overlayElement.getBoundingClientRect();
        popupRect = material_popup__material_popup._shiftRectangle(popupRect, {left: scrollShiftX, top: scrollShiftY});
        let viewportShift = material_popup__material_popup._shiftRectangleToFitWithin(popupRect, material_popup__material_popup.MaterialPopupComponent._viewportRect);
        this[_repositionOffsetX] = dart.notNull(this[_repositionOffsetX]) + dart.notNull(viewportShift[$left]);
        this[_repositionOffsetY] = dart.notNull(this[_repositionOffsetY]) + dart.notNull(viewportShift[$top]);
      }
      this[_overlayRef].overlayElement.style[$transform] = dart.str`translate(${this[_repositionOffsetX]}px, ${this[_repositionOffsetY]}px)`;
    }
    [_updatePopupMaxSize]() {
      if (this[_popupSizeProvider] == null) return;
      this.maxHeight = this[_popupSizeProvider].getMaxHeight((() => {
        let l = this[_overlayRef].state.top;
        return l != null ? l : 0;
      })(), material_popup__material_popup.MaterialPopupComponent._viewportRect.height);
      this.maxWidth = this[_popupSizeProvider].getMaxWidth((() => {
        let l = this[_overlayRef].state.left;
        return l != null ? l : 0;
      })(), material_popup__material_popup.MaterialPopupComponent._viewportRect.width);
    }
    get [_preferredPositions]() {
      return dart.test(material_popup__material_popup._flatten(this.state.preferredPositions)[$isNotEmpty]) ? this.state.preferredPositions : this[_defaultPreferredPositions];
    }
    [_getBestPosition](contentRect, sourceRect, containerRect) {
      if (!dart.test(this.state.enforceSpaceConstraints)) dart.assertFailed();
      let containerOffset = containerRect[$topLeft];
      let positions = material_popup__material_popup._flatten(this[_preferredPositions]);
      let bestPosition = positions[$first];
      let bestOverlap = 0.0;
      for (let position of positions) {
        if (this.state.source.isRtl === true) {
          position = dart.dsend(position, 'flipRelativePosition');
        }
        let containerPos = new (RectangleOfnum()).new(core.num._check(dart.dsend(dart.dload(position, 'originX'), 'calcLeft', sourceRect, contentRect)), core.num._check(dart.dsend(dart.dload(position, 'originY'), 'calcTop', sourceRect, contentRect)), contentRect[$width], contentRect[$height]);
        let screenPos = RectangleOfnum().fromPoints(containerPos[$topLeft]['+'](containerOffset), containerPos[$bottomRight]['+'](containerOffset));
        if (dart.test(material_popup__material_popup.MaterialPopupComponent._viewportRect.containsRectangle(screenPos))) {
          bestPosition = position;
          break;
        }
        let overlapRect = material_popup__material_popup.MaterialPopupComponent._viewportRect.intersection(screenPos);
        if (overlapRect == null) continue;
        let overlap = dart.notNull(overlapRect[$width]) * dart.notNull(overlapRect[$height]);
        if (overlap > dart.notNull(bestOverlap)) {
          bestOverlap = overlap;
          bestPosition = position;
        }
      }
      return laminate__enums__alignment.RelativePosition._check(bestPosition);
    }
    [_schedulePositionUpdate](contentClientRect, sourceClientRect) {
      return async.async(dart.dynamic, (function* _schedulePositionUpdate() {
        let position = null;
        let containerRect = (yield this[_overlayService].measureContainer());
        let isRtl = this.state.source.isRtl === true;
        this[_overlayRef].state.width = null;
        if (dart.test(this.state.matchMinSourceWidth)) {
          this[_overlayRef].state.minWidth = sourceClientRect[$width];
        }
        if (dart.test(this.state.matchMinSourceWidth)) {
          contentClientRect = material_popup__material_popup._resizeRectangle(contentClientRect, {width: math.max(core.num, sourceClientRect[$width], contentClientRect[$width])});
        }
        if (dart.test(this.state.enforceSpaceConstraints)) {
          position = this[_getBestPosition](contentClientRect, sourceClientRect, containerRect);
        }
        if (position == null) {
          position = new laminate__enums__alignment.RelativePosition.new({originX: this.state.source.alignOriginX, originY: this.state.source.alignOriginY});
          if (isRtl) {
            position = position.flipRelativePosition();
          }
        }
        let offsetX = isRtl ? dart.notNull(containerRect[$left]) - dart.notNull(this.state.offsetX) : dart.notNull(this.state.offsetX) - dart.notNull(containerRect[$left]);
        let offsetY = dart.notNull(this.state.offsetY) - dart.notNull(containerRect[$top]);
        this[_overlayRef].state.left = dart.notNull(position.originX.calcLeft(sourceClientRect, contentClientRect)) + offsetX;
        this[_overlayRef].state.top = dart.notNull(position.originY.calcTop(sourceClientRect, contentClientRect)) + offsetY;
        this[_overlayRef].state.visibility = laminate__enums__visibility.Visibility.Visible;
        let _ = this[_overlayRef].overlayElement.style;
        _[$visibility] = 'visible';
        _[$display] = '';
        this[_alignmentPosition] = position;
        this[_updatePopupMaxSize]();
      }).bind(this));
    }
  };
  (material_popup__material_popup.MaterialPopupComponent.new = function(hierarchy, parentPopup, role, ngZone, overlayService, zIndexer, defaultPreferredPositions, useRepositionLoop, popupSizeProvider, changeDetector, viewContainer, elementRef) {
    this[_onOpened] = StreamControllerOfNull().broadcast({sync: true});
    this[_onContentVisible] = StreamControllerOfbool().broadcast({sync: true});
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_alignmentPosition] = null;
    this[_layoutChangeSub] = null;
    this[_layoutInternalSub] = null;
    this[_windowResizeSub] = null;
    this[_overlayRef] = null;
    this[_uniqueId] = material_popup__material_popup.MaterialPopupComponent._idGenerator.nextId();
    this[_resolvedPopupRef] = null;
    this[_viewInitialized] = false;
    this[_animationTimer] = null;
    this[_isOpening] = false;
    this[_initialSourceDimensions] = null;
    this[_repositionOffsetX] = 0;
    this[_repositionOffsetY] = 0;
    this[_repositionLoopId] = null;
    this[showPopup] = false;
    this[z] = 2;
    this[_zIndex] = null;
    this[_slide] = null;
    this[maxHeight] = null;
    this[maxWidth] = null;
    this[_matchMinSourceWidth] = false;
    this[inkBackground] = false;
    this[hasBox] = true;
    this[state] = src__laminate__popup__popup_state.PopupState.new();
    this[templateRef] = null;
    this[_isVisible] = false;
    this[_hierarchy] = hierarchy;
    this[_ngZone] = ngZone;
    this[_overlayService] = overlayService;
    this[_zIndexer] = zIndexer;
    this[_defaultPreferredPositions] = defaultPreferredPositions;
    this[_useRepositionLoop] = useRepositionLoop;
    this[_popupSizeProvider] = popupSizeProvider;
    this[_changeDetector] = changeDetector;
    this[_viewContainer] = viewContainer;
    this[elementRef$] = elementRef;
    this[role$] = role != null ? role : 'dialog';
    material_popup__material_popup.MaterialPopupComponent.__proto__.new.call(this);
    if (parentPopup != null) {
      parentPopup.onClose.listen(dart.fn(_ => this.close(), ObjectTovoid()));
    }
    this[_resolvedPopupRef] = new material_popup__material_popup.MaterialPopupRef.new(this);
    this[_initViewportRect]();
  }).prototype = material_popup__material_popup.MaterialPopupComponent.prototype;
  dart.addTypeTests(material_popup__material_popup.MaterialPopupComponent);
  const elementRef$ = Symbol("MaterialPopupComponent.elementRef");
  const role$ = Symbol("MaterialPopupComponent.role");
  const showPopup = Symbol("MaterialPopupComponent.showPopup");
  const z = Symbol("MaterialPopupComponent.z");
  const maxHeight = Symbol("MaterialPopupComponent.maxHeight");
  const maxWidth = Symbol("MaterialPopupComponent.maxWidth");
  const inkBackground = Symbol("MaterialPopupComponent.inkBackground");
  const hasBox = Symbol("MaterialPopupComponent.hasBox");
  const state = Symbol("MaterialPopupComponent.state");
  const templateRef = Symbol("MaterialPopupComponent.templateRef");
  material_popup__material_popup.MaterialPopupComponent[dart.implements] = () => [src__laminate__popup__popup_interface.PopupInterface, content__deferred_content_aware.DeferredContentAware, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy, mixins__material_dropdown_base.DropdownHandle];
  dart.setMethodSignature(material_popup__material_popup.MaterialPopupComponent, () => ({
    __proto__: dart.getMethods(material_popup__material_popup.MaterialPopupComponent.__proto__),
    [_initViewportRect]: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    [_updateOverlayCssClass]: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_initView]: dart.fnType(dart.void, []),
    toggle: dart.fnType(dart.void, []),
    open: dart.fnType(dart.void, []),
    close: dart.fnType(dart.void, []),
    onDismiss: dart.fnType(dart.void, []),
    [_open]: dart.fnType(async.Future, []),
    [_onPopupOpened]: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, []),
    [_onPopupClosed]: dart.fnType(dart.void, []),
    [_startRepositionLoop]: dart.fnType(dart.void, []),
    [_stopRepositionLoop]: dart.fnType(dart.void, []),
    [_reposition]: dart.fnType(dart.void, [dart.dynamic]),
    [_updatePopupMaxSize]: dart.fnType(dart.void, []),
    [_getBestPosition]: dart.fnType(laminate__enums__alignment.RelativePosition, [RectangleOfnum(), RectangleOfnum(), RectangleOfnum()]),
    [_schedulePositionUpdate]: dart.fnType(async.Future, [RectangleOfnum(), RectangleOfnum()])
  }));
  dart.setGetterSignature(material_popup__material_popup.MaterialPopupComponent, () => ({
    __proto__: dart.getGetters(material_popup__material_popup.MaterialPopupComponent.__proto__),
    onOpened: dart.fnType(async.Stream$(core.Null), []),
    autoDismiss: dart.fnType(core.bool, []),
    transformOrigin: dart.fnType(core.String, []),
    zIndex: dart.fnType(core.int, []),
    slide: dart.fnType(core.String, []),
    matchMinSourceWidth: dart.fnType(core.bool, []),
    contentVisible: dart.fnType(async.Stream$(core.bool), []),
    hierarchy: dart.fnType(src__laminate__popup__popup_hierarchy.PopupHierarchy, []),
    paneId: dart.fnType(core.String, []),
    uniqueId: dart.fnType(core.String, []),
    isVisible: dart.fnType(core.bool, []),
    container: dart.fnType(html.Element, []),
    autoDismissBlockers: dart.fnType(core.List$(html.Element), []),
    [_sourceDimensions]: dart.fnType(math.Rectangle$(core.num), []),
    [_preferredPositions]: dart.fnType(core.Iterable, [])
  }));
  dart.setSetterSignature(material_popup__material_popup.MaterialPopupComponent, () => ({
    __proto__: dart.getSetters(material_popup__material_popup.MaterialPopupComponent.__proto__),
    slide: dart.fnType(dart.void, [core.String]),
    popupSizeProvider: dart.fnType(dart.void, [src__laminate__popup__popup_size_provider.PopupSizeProvider]),
    visible: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_popup__material_popup.MaterialPopupComponent, () => ({
    __proto__: dart.getFields(material_popup__material_popup.MaterialPopupComponent.__proto__),
    [_onOpened]: dart.finalFieldType(StreamControllerOfNull()),
    [_onContentVisible]: dart.finalFieldType(StreamControllerOfbool()),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_viewContainer]: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_overlayService]: dart.finalFieldType(src__laminate__overlay__overlay_service.OverlayService),
    [_hierarchy]: dart.fieldType(src__laminate__popup__popup_hierarchy.PopupHierarchy),
    [_defaultPreferredPositions]: dart.finalFieldType(ListOfRelativePosition()),
    [_alignmentPosition]: dart.fieldType(laminate__enums__alignment.RelativePosition),
    [_layoutChangeSub]: dart.fieldType(async.StreamSubscription),
    [_layoutInternalSub]: dart.fieldType(async.StreamSubscription),
    [_windowResizeSub]: dart.fieldType(async.StreamSubscription),
    [_overlayRef]: dart.fieldType(src__laminate__overlay__overlay_ref.OverlayRef),
    elementRef: dart.finalFieldType(src__core__linker__element_ref.ElementRef),
    role: dart.finalFieldType(core.String),
    [_uniqueId]: dart.finalFieldType(core.String),
    [_resolvedPopupRef]: dart.fieldType(src__laminate__popup__popup_ref.PopupRef),
    [_viewInitialized]: dart.fieldType(core.bool),
    [_animationTimer]: dart.fieldType(async.Timer),
    [_isOpening]: dart.fieldType(core.bool),
    [_useRepositionLoop]: dart.finalFieldType(core.bool),
    [_initialSourceDimensions]: dart.fieldType(RectangleOfnum()),
    [_repositionOffsetX]: dart.fieldType(core.int),
    [_repositionOffsetY]: dart.fieldType(core.int),
    [_repositionLoopId]: dart.fieldType(core.int),
    showPopup: dart.fieldType(core.bool),
    z: dart.fieldType(core.int),
    [_zIndex]: dart.fieldType(core.int),
    [_zIndexer]: dart.finalFieldType(laminate__overlay__zindexer.ZIndexer),
    [_slide]: dart.fieldType(core.String),
    [_popupSizeProvider]: dart.fieldType(src__laminate__popup__popup_size_provider.PopupSizeProvider),
    maxHeight: dart.fieldType(core.num),
    maxWidth: dart.fieldType(core.num),
    [_matchMinSourceWidth]: dart.fieldType(core.bool),
    inkBackground: dart.fieldType(core.bool),
    hasBox: dart.fieldType(core.bool),
    state: dart.finalFieldType(src__laminate__popup__popup_state.PopupState),
    templateRef: dart.fieldType(src__core__linker__template_ref.TemplateRef),
    [_isVisible]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_popup__material_popup.MaterialPopupComponent, {
    /*material_popup__material_popup.MaterialPopupComponent.SLIDE_DELAY*/get SLIDE_DELAY() {
      return dart.const(new core.Duration.new({milliseconds: 150}));
    },
    /*material_popup__material_popup.MaterialPopupComponent._idGenerator*/get _idGenerator() {
      return new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID();
    },
    /*material_popup__material_popup.MaterialPopupComponent._viewportRect*/get _viewportRect() {
      return null;
    },
    set _viewportRect(_) {},
    /*material_popup__material_popup.MaterialPopupComponent._resizeThrottleDuration*/get _resizeThrottleDuration() {
      return dart.const(new core.Duration.new({milliseconds: 100}));
    }
  });
  material_popup__material_popup.getHierarchy = function(c) {
    return c.hierarchy;
  };
  dart.fn(material_popup__material_popup.getHierarchy, MaterialPopupComponentToPopupHierarchy());
  material_popup__material_popup.getResolvedPopupRef = function(c) {
    return c[_resolvedPopupRef];
  };
  dart.fn(material_popup__material_popup.getResolvedPopupRef, MaterialPopupComponentToPopupRef());
  const _popupComponent = Symbol('_popupComponent');
  material_popup__material_popup.MaterialPopupRef = class MaterialPopupRef extends core.Object {
    get isVisible() {
      return this[_popupComponent].isVisible;
    }
    get onVisibleChanged() {
      return this[_popupComponent].onVisible;
    }
  };
  (material_popup__material_popup.MaterialPopupRef.new = function(popupComponent) {
    this[_popupComponent] = popupComponent;
  }).prototype = material_popup__material_popup.MaterialPopupRef.prototype;
  dart.addTypeTests(material_popup__material_popup.MaterialPopupRef);
  material_popup__material_popup.MaterialPopupRef[dart.implements] = () => [src__laminate__popup__popup_ref.PopupRef];
  dart.setGetterSignature(material_popup__material_popup.MaterialPopupRef, () => ({
    __proto__: dart.getGetters(material_popup__material_popup.MaterialPopupRef.__proto__),
    isVisible: dart.fnType(core.bool, []),
    onVisibleChanged: dart.fnType(async.Stream$(core.bool), [])
  }));
  dart.setFieldSignature(material_popup__material_popup.MaterialPopupRef, () => ({
    __proto__: dart.getFields(material_popup__material_popup.MaterialPopupRef.__proto__),
    [_popupComponent]: dart.finalFieldType(material_popup__material_popup.MaterialPopupComponent)
  }));
  material_popup__material_popup._DeferredToggleable = class _DeferredToggleable extends model__ui__toggle.Toggleable {
    get isOn() {
      return this[_popupComponent].isVisible;
    }
    set isOn(state) {
      this[_popupComponent].visible = state;
    }
  };
  (material_popup__material_popup._DeferredToggleable.new = function(popupComponent) {
    this[_popupComponent] = popupComponent;
    material_popup__material_popup._DeferredToggleable.__proto__.new.call(this);
  }).prototype = material_popup__material_popup._DeferredToggleable.prototype;
  dart.addTypeTests(material_popup__material_popup._DeferredToggleable);
  dart.setFieldSignature(material_popup__material_popup._DeferredToggleable, () => ({
    __proto__: dart.getFields(material_popup__material_popup._DeferredToggleable.__proto__),
    [_popupComponent]: dart.finalFieldType(material_popup__material_popup.MaterialPopupComponent)
  }));
  material_popup__material_popup._mergeStreams = function(T, streams) {
    let streamSubscriptions = core.List$(async.StreamSubscription$(T)).new(streams[$length]);
    let cachedResults = core.List$(T).new(streams[$length]);
    let streamController = null;
    streamController = async.StreamController$(core.List$(T)).broadcast({sync: true, onListen: dart.fn(() => {
        let i = 0;
        streams[$forEach](dart.fn(stream => {
          let n = i++;
          streamSubscriptions[$_set](n, stream.listen(dart.fn(result => {
            cachedResults[$_set](n, result);
            streamController.add(cachedResults);
          }, dart.fnType(core.Null, [T]))));
        }, dart.fnType(core.Null, [async.Stream$(T)])));
      }, VoidToNull$()), onCancel: dart.fn(() => {
        for (let sub of streamSubscriptions) {
          sub.cancel();
        }
      }, VoidToNull$())});
    return streamController.stream;
  };
  dart.fn(material_popup__material_popup._mergeStreams, ListOfStreamOfTToStreamOfListOfT());
  material_popup__material_popup._flatten = function(nested) {
    return new _js_helper.SyncIterable.new(function* _flatten() {
      for (let item of nested) {
        if (core.Iterable.is(item)) {
          yield* material_popup__material_popup._flatten(item);
        } else {
          yield item;
        }
      }
    });
  };
  dart.fn(material_popup__material_popup._flatten, IterableToIterable());
  material_popup__material_popup._resizeRectangle = function(rect, opts) {
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    return new (RectangleOfnum()).new(rect[$left], rect[$top], width != null ? width : rect[$width], height != null ? height : rect[$height]);
  };
  dart.fn(material_popup__material_popup._resizeRectangle, RectangleOfnum__ToRectangleOfnum());
  material_popup__material_popup._shiftRectangle = function(rect, opts) {
    let top = opts && 'top' in opts ? opts.top : 0;
    let left = opts && 'left' in opts ? opts.left : 0;
    return new (RectangleOfnum()).new(dart.notNull(rect[$left]) + dart.notNull(left), dart.notNull(rect[$top]) + dart.notNull(top), rect[$width], rect[$height]);
  };
  dart.fn(material_popup__material_popup._shiftRectangle, RectangleOfnum__ToRectangleOfnum$());
  material_popup__material_popup._shiftRectangleToFitWithin = function(rect, container) {
    let x = 0;
    let y = 0;
    if (dart.notNull(rect[$left]) < dart.notNull(container[$left])) {
      x = dart.notNull(container[$left]) - dart.notNull(rect[$left]);
    } else if (dart.notNull(rect[$right]) > dart.notNull(container[$right])) {
      x = math.max(core.num, dart.notNull(container[$right]) - dart.notNull(rect[$right]), dart.notNull(container[$left]) - dart.notNull(rect[$left]));
    }
    if (dart.notNull(rect[$top]) < dart.notNull(container[$top])) {
      y = dart.notNull(container[$top]) - dart.notNull(rect[$top]);
    } else if (dart.notNull(rect[$bottom]) > dart.notNull(container[$bottom])) {
      y = math.max(core.num, dart.notNull(container[$bottom]) - dart.notNull(rect[$bottom]), dart.notNull(container[$top]) - dart.notNull(rect[$top]));
    }
    return new (RectangleOfnum()).new(x[$round](), y[$round](), 0, 0);
  };
  dart.fn(material_popup__material_popup._shiftRectangleToFitWithin, RectangleOfnumAndRectangleOfnumToRectangleOfnum());
  dart.trackLibraries("packages/angular_components/material_popup/material_popup.ddc", {
    "package:angular_components/material_popup/material_popup.dart": material_popup__material_popup
  }, '{"version":3,"sourceRoot":"","sources":["material_popup.dart"],"names":[],"mappings":"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","file":"material_popup.ddc.js"}');
  // Exports:
  return {
    material_popup__material_popup: material_popup__material_popup
  };
});

//# sourceMappingURL=material_popup.ddc.js.map
