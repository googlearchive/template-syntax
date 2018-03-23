define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/reorder_list/reorder_events', 'packages/angular_components/utils/keyboard/keyboard', 'packages/quiver/iterables', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/linker/element_ref'], function(dart_sdk, disposer, reorder_events, keyboard, iterables, lifecycle_hooks, ng_zone, element_ref) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const reorder_list__reorder_events = reorder_events.reorder_list__reorder_events;
  const utils__keyboard__keyboard = keyboard.utils__keyboard__keyboard;
  const iterables$ = iterables.iterables;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const _root = Object.create(null);
  const reorder_list__reorder_list = Object.create(_root);
  const $toSet = dartx.toSet;
  const $map = dartx.map;
  const $keys = dartx.keys;
  const $clear = dartx.clear;
  const $length = dartx.length;
  const $first = dartx.first;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $transition = dartx.transition;
  const $transform = dartx.transform;
  const $borderEdge = dartx.borderEdge;
  const $left = dartx.left;
  const $offset = dartx.offset;
  const $right = dartx.right;
  const $top = dartx.top;
  const $sign = dartx.sign;
  const $width = dartx.width;
  const $height = dartx.height;
  const $dataTransfer = dartx.dataTransfer;
  const $onDragStart = dartx.onDragStart;
  const $add = dartx.add;
  const $onDragEnd = dartx.onDragEnd;
  const $onKeyDown = dartx.onKeyDown;
  const $onDragOver = dartx.onDragOver;
  const $onClick = dartx.onClick;
  const $remove = dartx.remove;
  const $toList = dartx.toList;
  const $currentTarget = dartx.currentTarget;
  const $contains = dartx.contains;
  const $classes = dartx.classes;
  const $target = dartx.target;
  const $sort = dartx.sort;
  let StreamControllerOfReorderEvent = () => (StreamControllerOfReorderEvent = dart.constFn(async.StreamController$(reorder_list__reorder_events.ReorderEvent)))();
  let StreamControllerOfint = () => (StreamControllerOfint = dart.constFn(async.StreamController$(core.int)))();
  let StreamControllerOfItemSelectionEvent = () => (StreamControllerOfItemSelectionEvent = dart.constFn(async.StreamController$(reorder_list__reorder_events.ItemSelectionEvent)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  let LinkedMapOfHtmlElement$ListOfStreamSubscription = () => (LinkedMapOfHtmlElement$ListOfStreamSubscription = dart.constFn(_js_helper.LinkedMap$(html.HtmlElement, ListOfStreamSubscription())))();
  let LinkedMapOfHtmlElement$StreamSubscription = () => (LinkedMapOfHtmlElement$StreamSubscription = dart.constFn(_js_helper.LinkedMap$(html.HtmlElement, async.StreamSubscription)))();
  let ReorderItemDirectiveToHtmlElement = () => (ReorderItemDirectiveToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [reorder_list__reorder_list.ReorderItemDirective])))();
  let SetOfHtmlElement = () => (SetOfHtmlElement = dart.constFn(core.Set$(html.HtmlElement)))();
  let ListOfHtmlElement = () => (ListOfHtmlElement = dart.constFn(core.List$(html.HtmlElement)))();
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  let KeyboardEventTovoid = () => (KeyboardEventTovoid = dart.constFn(dart.fnType(dart.void, [html.KeyboardEvent])))();
  let MouseEventTovoid = () => (MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ObjectToNull = () => (ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  let ListOfReorderItemDirective = () => (ListOfReorderItemDirective = dart.constFn(core.List$(reorder_list__reorder_list.ReorderItemDirective)))();
  let MapOfHtmlElement$ListOfStreamSubscription = () => (MapOfHtmlElement$ListOfStreamSubscription = dart.constFn(core.Map$(html.HtmlElement, ListOfStreamSubscription())))();
  let MapOfHtmlElement$StreamSubscription = () => (MapOfHtmlElement$StreamSubscription = dart.constFn(core.Map$(html.HtmlElement, async.StreamSubscription)))();
  const _ngZone = Symbol('_ngZone');
  const _disposer = Symbol('_disposer');
  const _reorder = Symbol('_reorder');
  const _reorderAttempt = Symbol('_reorderAttempt');
  const _delete = Symbol('_delete');
  const _itemSelectionChanged = Symbol('_itemSelectionChanged');
  const _items = Symbol('_items');
  const _subscriptions = Symbol('_subscriptions');
  const _dragSubscriptions = Symbol('_dragSubscriptions');
  const _curTransformY = Symbol('_curTransformY');
  const _itemSizes = Symbol('_itemSizes');
  const _reorderActive = Symbol('_reorderActive');
  const _moveSourceIndex = Symbol('_moveSourceIndex');
  const _currentMoveIndex = Symbol('_currentMoveIndex');
  const _dragSourceElement = Symbol('_dragSourceElement');
  const _selectedElementIndexes = Symbol('_selectedElementIndexes');
  const _pivotItemIndex = Symbol('_pivotItemIndex');
  const _refreshItems = Symbol('_refreshItems');
  const _unTrackAll = Symbol('_unTrackAll');
  const _reorderElements = Symbol('_reorderElements');
  const _horizontalTransformHandler = Symbol('_horizontalTransformHandler');
  const _createReorderEvent = Symbol('_createReorderEvent');
  const _moveItem = Symbol('_moveItem');
  const _subscriptionsForElement = Symbol('_subscriptionsForElement');
  const _onDragStart = Symbol('_onDragStart');
  const _onDragEnd = Symbol('_onDragEnd');
  const _onKeyDown = Symbol('_onKeyDown');
  const _onDragOver = Symbol('_onDragOver');
  const _onClick = Symbol('_onClick');
  const _getIndex = Symbol('_getIndex');
  const _clearSelection = Symbol('_clearSelection');
  const _notifySelectionChange = Symbol('_notifySelectionChange');
  const _resetChildren = Symbol('_resetChildren');
  const _getNewIndex = Symbol('_getNewIndex');
  const _handleShift = Symbol('_handleShift');
  const _handleCtrl = Symbol('_handleCtrl');
  reorder_list__reorder_list.ReorderListComponent = class ReorderListComponent extends core.Object {
    get reorder() {
      return this[_reorder].stream;
    }
    get reorderAttempt() {
      return this[_reorderAttempt].stream;
    }
    get delete() {
      return this[_delete].stream;
    }
    get itemSelectionChanged() {
      return this[_itemSelectionChanged].stream;
    }
    get verticalItems() {
      return this[verticalItems];
    }
    set verticalItems(value) {
      this[verticalItems] = value;
    }
    get multiSelect() {
      return this[multiSelect];
    }
    set multiSelect(value) {
      this[multiSelect] = value;
    }
    get placeholder() {
      return this[placeholder];
    }
    set placeholder(value) {
      this[placeholder] = value;
    }
    set items(value) {
      this[_items] = value;
      this[_refreshItems]();
    }
    [_refreshItems]() {
      let newElements = this[_items][$map](html.HtmlElement, dart.fn(e => e.element, ReorderItemDirectiveToHtmlElement()))[$toSet]();
      let currentlyTracked = SetOfHtmlElement().from(this[_subscriptions][$keys]);
      for (let tracked of currentlyTracked) {
        if (!dart.test(newElements.contains(tracked))) {
          this.unTrack(tracked);
        }
      }
      for (let newElement of newElements) {
        if (!dart.test(currentlyTracked.contains(newElement))) {
          this.track(newElement);
        }
      }
      if (dart.test(this.multiSelect)) this[_selectedElementIndexes][$clear]();
    }
    ngOnDestroy() {
      this[_unTrackAll]();
      this[_disposer].dispose();
    }
    [_unTrackAll]() {
      let keys = ListOfHtmlElement().from(this[_subscriptions][$keys]);
      for (let element of keys) {
        this.unTrack(element);
      }
    }
    [_moveItem](fromIndex, toIndex) {
      let contents = core.List._check(this[_reorderElements]);
      let leftSide = 0;
      let rightSide = 0;
      let childCount = contents[$length];
      if (dart.notNull(childCount) > 0) {
        leftSide = core.int._check(dart.dload(dart.dload(dart.dload(contents[$first], 'parent'), 'offset'), 'left'));
        rightSide = core.int._check(dart.dload(dart.dload(dart.dload(contents[$first], 'parent'), 'offset'), 'right'));
      }
      let nextOffset = null;
      let upperStackSize = 0;
      let moveRight = true;
      for (let i = 0; i < dart.notNull(childCount); i++) {
        let offset = 0;
        let e = html.HtmlElement._check(contents[$_get](i));
        if (i === this[_moveSourceIndex]) {
          offset = -8000;
        } else if (dart.notNull(this[_moveSourceIndex]) < i && i <= dart.notNull(toIndex)) {
          offset = dart.notNull(offset) - dart.notNull(this[_itemSizes][$_get](this[_moveSourceIndex]));
        } else if (dart.notNull(toIndex) <= i && i < dart.notNull(this[_moveSourceIndex])) {
          offset = dart.notNull(offset) + dart.notNull(this[_itemSizes][$_get](this[_moveSourceIndex]));
        }
        if (i !== this[_moveSourceIndex] && i < dart.notNull(toIndex) || i === toIndex && dart.notNull(toIndex) > dart.notNull(this[_moveSourceIndex])) {
          upperStackSize = dart.notNull(upperStackSize) + dart.notNull(this[_itemSizes][$_get](i));
        }
        if (offset != this[_curTransformY][$_get](i)) {
          this[_curTransformY][$_set](i, offset);
          if (e.style[$transition] !== 'transform:all 0.2s ease-out') {
            e.style[$transition] = 'all 0.2s ease-out';
          }
          if (!dart.test(this.verticalItems) && offset !== -8000) {
            nextOffset = this[_horizontalTransformHandler](e, html.Element._check(i === 0 ? null : contents[$_get](i - 1)), offset, nextOffset, leftSide, rightSide);
            if (i === toIndex) {
              moveRight = dart.notNull(offset) > 0;
            }
          } else {
            e.style[$transform] = offset === 0 ? '' : dart.str`translate(0,${offset}px)`;
          }
        }
      }
      if (dart.test(this.verticalItems)) {
        let _ = dart.dload(this.placeholder.nativeElement, 'style');
        dart.dput(_, 'height', dart.str`${this[_dragSourceElement][$borderEdge].height}px`);
        dart.dput(_, 'width', dart.str`${this[_dragSourceElement][$borderEdge].width}px`);
        dart.dput(_, 'top', dart.str`${upperStackSize}px`);
      } else {
        let e = html.HtmlElement._check(contents[$_get](toIndex));
        let left = moveRight ? e[$offset][$left] : dart.notNull(e[$offset][$right]) - dart.notNull(this[_dragSourceElement][$borderEdge].width);
        let _$ = dart.dload(this.placeholder.nativeElement, 'style');
        dart.dput(_$, 'height', dart.str`${this[_dragSourceElement][$borderEdge].height}px`);
        dart.dput(_$, 'width', dart.str`${this[_dragSourceElement][$borderEdge].width}px`);
        dart.dput(_$, 'top', dart.str`${e[$offset][$top]}px`);
        dart.dput(_$, 'left', dart.str`${left}px`);
      }
      this[_reorderAttempt].add(this[_createReorderEvent](this[_moveSourceIndex], toIndex));
    }
    [_horizontalTransformHandler](e, prev, offset, nextOffset, leftSide, rightSide) {
      if (nextOffset != null) {
        if (offset[$sign] === nextOffset[$sign]) {
          offset = nextOffset;
        } else {
          offset = dart.notNull(offset) + dart.notNull(nextOffset);
        }
      }
      if (dart.notNull(e[$offset][$right]) + dart.notNull(offset) > dart.notNull(rightSide)) {
        nextOffset = dart.asInt(e[$offset][$width]);
        e.style[$transform] = dart.str`translate(${-dart.notNull(e[$offset][$left]) + dart.notNull(leftSide)}px,` + dart.str`${e[$offset][$height]}px)`;
      } else if (dart.notNull(e[$offset][$left]) + dart.notNull(offset) < dart.notNull(leftSide)) {
        if (dart.notNull(e[$offset][$width]) < dart.notNull(prev[$offset][$right])) {
          nextOffset = dart.asInt(-dart.notNull(e[$offset][$width]));
          e.style[$transform] = 'translate(' + dart.str`${dart.notNull(prev[$offset][$right]) - dart.notNull(leftSide) + dart.notNull(offset)}px,` + dart.str`${-dart.notNull(e[$offset][$height])}px)`;
        } else {
          nextOffset = 0;
        }
      } else {
        e.style[$transform] = dart.str`translate(${offset}px,0px)`;
      }
      return nextOffset;
    }
    track(element) {
      element.draggable = true;
      let subs = this[_subscriptionsForElement](element);
      subs[$add](element[$onDragStart].listen(dart.fn(e => {
        e[$dataTransfer].setData("Text", element.id);
        e[$dataTransfer].effectAllowed = "copyMove";
        this[_onDragStart](e);
      }, MouseEventToNull())));
      subs[$add](element[$onDragEnd].listen(dart.bind(this, _onDragEnd)));
      subs[$add](element[$onKeyDown].listen(dart.fn(e => this[_onKeyDown](e, element), KeyboardEventTovoid())));
      this[_dragSubscriptions][$_set](element, element[$onDragOver].listen(dart.fn(e => this[_onDragOver](e, element), MouseEventTovoid())));
      if (dart.test(this.multiSelect)) {
        subs[$add](element[$onClick].listen(dart.fn(e => this[_onClick](e, element), MouseEventTovoid())));
      }
    }
    unTrack(element) {
      let subs = this[_subscriptionsForElement](element);
      for (let s of subs) {
        s.cancel();
      }
      this[_subscriptions][$remove](element);
      if (this[_dragSubscriptions][$_get](element) != null) {
        this[_dragSubscriptions][$_get](element).cancel();
      }
      this[_dragSubscriptions][$remove](element);
    }
    get [_reorderElements]() {
      return this[_items][$map](html.HtmlElement, dart.fn(x => x.element, ReorderItemDirectiveToHtmlElement()))[$toList]();
    }
    [_onDragStart](e) {
      if (dart.test(this.multiSelect)) {
        let index = this[_getIndex](html.HtmlElement._check(e[$currentTarget]));
        if (!dart.test(this[_selectedElementIndexes][$contains](index))) {
          this[_clearSelection]();
          this[_selectedElementIndexes][$add](index);
          this[_notifySelectionChange]();
        }
      }
      this[_dragSourceElement] = html.HtmlElement._check(e[$currentTarget]);
      this[_dragSourceElement][$classes].add('reorder-list-dragging-active');
      let contents = this[_reorderElements];
      let childCount = core.int._check(dart.dload(contents, 'length'));
      this[_moveSourceIndex] = core.int._check(dart.dsend(contents, 'indexOf', this[_dragSourceElement]));
      this[_curTransformY] = ListOfint().filled(childCount, 0);
      this[_itemSizes] = ListOfint().new(childCount);
      for (let i = 0; i < dart.notNull(childCount); i++) {
        this[_itemSizes][$_set](i, core.int._check(dart.test(this.verticalItems) ? dart.dload(dart.dload(dart.dindex(contents, i), 'offset'), 'height') : dart.dload(dart.dload(dart.dindex(contents, i), 'offset'), 'width')));
      }
      this[_reorderActive] = true;
      this[_currentMoveIndex] = this[_moveSourceIndex];
      this[_moveItem](this[_currentMoveIndex], this[_currentMoveIndex]);
    }
    [_onDragEnd](e) {
      e.stopPropagation();
      this[_reorderActive] = false;
      this[_dragSourceElement][$classes].remove('reorder-list-dragging-active');
      this[_reorderActive] = false;
      this[_resetChildren]();
      this[_reorder].add(this[_createReorderEvent](this[_moveSourceIndex], this[_currentMoveIndex]));
      if (dart.test(this.multiSelect)) {
        this[_clearSelection]();
        this[_notifySelectionChange]();
      }
    }
    [_onKeyDown](e, element) {
      if ((e.keyCode === html.KeyCode.UP || e.keyCode === html.KeyCode.DOWN) && dart.test(utils__keyboard__keyboard.modifiersKeysFor(e))) {
        let index = this[_getIndex](element);
        if (index === -1) {
          return;
        }
        let newIndex = this[_getNewIndex](e.keyCode, index);
        dart.dsend(dart.dindex(this[_reorderElements], newIndex), 'focus');
        e.preventDefault();
        e.stopPropagation();
      } else if ((e.keyCode === html.KeyCode.UP || e.keyCode === html.KeyCode.DOWN) && dart.test(utils__keyboard__keyboard.modifiersKeysFor(e, {shiftKey: true}))) {
        let index = this[_getIndex](element);
        if (index === -1) {
          return;
        }
        let newIndex = this[_getNewIndex](e.keyCode, index);
        if (newIndex != index) {
          this[_reorder].add(this[_createReorderEvent](index, newIndex));
          this[_ngZone].onEventDone.first.then(core.Null, dart.fn(_ => {
            let element = dart.dindex(this[_reorderElements], newIndex);
            if (dart.test(this.multiSelect)) {
              this[_clearSelection]();
              dart.dsend(dart.dload(element, 'classes'), 'add', reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass);
              this[_selectedElementIndexes][$add](newIndex);
              this[_notifySelectionChange]();
            }
            dart.dsend(element, 'focus');
          }, ObjectToNull()));
        }
        e.preventDefault();
        e.stopPropagation();
      } else if ((e.keyCode === html.KeyCode.DELETE || e.keyCode === html.KeyCode.NUM_DELETE || e.keyCode === html.KeyCode.BACKSPACE) && dart.test(utils__keyboard__keyboard.modifiersKeysFor(e))) {
        if (!dart.equals(html.HtmlElement.as(e[$target]), element)) return;
        let index = this[_getIndex](element);
        if (index === -1) {
          return;
        }
        this.removeAt(index);
        e.stopPropagation();
        e.preventDefault();
      }
    }
    [_onClick](e, element) {
      let index = this[_getIndex](element);
      if (index === -1) {
        return;
      }
      if (dart.test(e.shiftKey)) {
        this[_handleShift](index);
      } else if (dart.test(e.ctrlKey) || dart.test(e.metaKey)) {
        this[_handleCtrl](index, element);
      } else {
        if (!dart.test(this[_selectedElementIndexes][$contains](index))) {
          this[_clearSelection]();
          this[_selectedElementIndexes][$add](index);
        }
        this[_pivotItemIndex] = index;
      }
      this[_notifySelectionChange]();
    }
    removeAt(index) {
      this[_delete].add(index);
      this[_ngZone].onEventDone.first.then(core.Null, dart.fn(_ => {
        if (dart.notNull(index) < dart.notNull(core.num._check(dart.dload(this[_reorderElements], 'length')))) {
          dart.dsend(dart.dindex(this[_reorderElements], index), 'focus');
        } else if (dart.dtest(dart.dload(this[_reorderElements], 'isNotEmpty'))) {
          dart.dsend(dart.dindex(this[_reorderElements], dart.dsend(dart.dload(this[_reorderElements], 'length'), '-', 1)), 'focus');
        }
      }, ObjectToNull()));
    }
    [_notifySelectionChange]() {
      let sources = ListOfint().from(this[_selectedElementIndexes]);
      sources[$sort]();
      this[_itemSelectionChanged].add(new reorder_list__reorder_events.ItemSelectionEvent.new(sources));
    }
    [_handleCtrl](index, element) {
      this[_pivotItemIndex] = index;
      if (dart.test(element[$classes].contains(reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass))) {
        element[$classes].remove(reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass);
        this[_selectedElementIndexes][$remove](index);
      } else {
        element[$classes].add(reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass);
        this[_selectedElementIndexes][$add](index);
      }
    }
    [_handleShift](index) {
      if (this[_pivotItemIndex] == null) {
        this[_pivotItemIndex] = index;
      }
      let indexes = ListOfint().from(iterables$.range(math.min(core.num, this[_pivotItemIndex], index), math.max(core.num, this[_pivotItemIndex], index)));
      indexes[$add](math.max(core.int, this[_pivotItemIndex], index));
      this[_clearSelection]();
      let allElements = this[_reorderElements];
      for (let index of indexes) {
        dart.dsend(dart.dload(dart.dindex(allElements, index), 'classes'), 'add', reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass);
        this[_selectedElementIndexes][$add](index);
      }
    }
    [_clearSelection]() {
      let allElements = this[_reorderElements];
      for (let index of this[_selectedElementIndexes]) {
        dart.dsend(dart.dload(dart.dindex(allElements, index), 'classes'), 'remove', reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass);
      }
      this[_selectedElementIndexes][$clear]();
    }
    [_getNewIndex](keyCode, index) {
      if (keyCode === html.KeyCode.UP && dart.notNull(index) > 0) {
        return dart.notNull(index) - 1;
      } else if (keyCode === html.KeyCode.DOWN && dart.notNull(index) < dart.notNull(core.num._check(dart.dsend(dart.dload(this[_reorderElements], 'length'), '-', 1)))) {
        return dart.notNull(index) + 1;
      } else {
        return index;
      }
    }
    [_onDragOver](event, element) {
      if (dart.equals(this[_dragSourceElement], element)) {
        return;
      }
      let elementIndex = this[_getIndex](element);
      let moveTargetIndex = elementIndex;
      if (dart.notNull(this[_currentMoveIndex]) < dart.notNull(this[_moveSourceIndex]) && dart.notNull(elementIndex) >= dart.notNull(this[_currentMoveIndex])) {
        moveTargetIndex = dart.notNull(moveTargetIndex) + 1;
      }
      if (dart.notNull(this[_currentMoveIndex]) > dart.notNull(this[_moveSourceIndex]) && dart.notNull(elementIndex) <= dart.notNull(this[_currentMoveIndex])) {
        moveTargetIndex = dart.notNull(moveTargetIndex) - 1;
      }
      if (this[_currentMoveIndex] != moveTargetIndex && dart.test(this[_reorderActive]) && moveTargetIndex !== -1) {
        this[_moveItem](this[_currentMoveIndex], moveTargetIndex);
        this[_currentMoveIndex] = moveTargetIndex;
        this[_dragSubscriptions][$_get](element).cancel();
        this[_dragSubscriptions][$_get](element) == null;
        FutureOfNull().delayed(new core.Duration.new({milliseconds: 250}), dart.fn(() => {
          if (this[_subscriptions][$_get](element) != null) {
            this[_dragSubscriptions][$_set](element, element[$onDragOver].listen(dart.fn(e => this[_onDragOver](e, element), MouseEventTovoid())));
          }
        }, VoidToNull()));
      }
    }
    [_getIndex](element) {
      let contents = core.List._check(this[_reorderElements]);
      let childCount = contents[$length];
      for (let i = 0; i < dart.notNull(childCount); i++) {
        if (dart.equals(element, contents[$_get](i))) {
          return i;
        }
      }
      return -1;
    }
    [_createReorderEvent](sourceIndex, destIndex) {
      if (dart.test(this.multiSelect)) {
        let sources = ListOfint().from(this[_selectedElementIndexes]);
        sources[$sort]();
        return new reorder_list__reorder_events.MultiReorderEvent.new(sources, destIndex);
      } else {
        return new reorder_list__reorder_events.ReorderEvent.new(sourceIndex, destIndex);
      }
    }
    [_resetChildren]() {
      if (this[_currentMoveIndex] !== -1) {
        let contents = core.List._check(this[_reorderElements]);
        let childCount = contents[$length];
        for (let i = 0; i < dart.notNull(childCount); i++) {
          let e = html.HtmlElement._check(contents[$_get](i));
          e.style[$transition] = '';
          if (this[_curTransformY][$_get](i) !== 0) {
            e.style[$transform] = '';
          }
        }
      }
    }
    [_subscriptionsForElement](elm) {
      let l = this[_subscriptions][$_get](elm);
      if (l == null) {
        l = JSArrayOfStreamSubscription().of([]);
        this[_subscriptions][$_set](elm, l);
      }
      return l;
    }
    get showPlaceholder() {
      return this[_reorderActive];
    }
  };
  (reorder_list__reorder_list.ReorderListComponent.new = function(ngZone) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_reorder] = StreamControllerOfReorderEvent().broadcast({sync: true});
    this[_reorderAttempt] = StreamControllerOfReorderEvent().broadcast({sync: true});
    this[_delete] = StreamControllerOfint().broadcast({sync: true});
    this[_itemSelectionChanged] = StreamControllerOfItemSelectionEvent().broadcast({sync: true});
    this[verticalItems] = true;
    this[multiSelect] = false;
    this[_items] = null;
    this[_subscriptions] = null;
    this[_dragSubscriptions] = null;
    this[_curTransformY] = null;
    this[_itemSizes] = null;
    this[_reorderActive] = false;
    this[_moveSourceIndex] = -1;
    this[_currentMoveIndex] = -1;
    this[_dragSourceElement] = null;
    this[_selectedElementIndexes] = JSArrayOfint().of([]);
    this[_pivotItemIndex] = null;
    this[placeholder] = null;
    this[_ngZone] = ngZone;
    this[_subscriptions] = new (LinkedMapOfHtmlElement$ListOfStreamSubscription()).new();
    this[_dragSubscriptions] = new (LinkedMapOfHtmlElement$StreamSubscription()).new();
  }).prototype = reorder_list__reorder_list.ReorderListComponent.prototype;
  dart.addTypeTests(reorder_list__reorder_list.ReorderListComponent);
  const verticalItems = Symbol("ReorderListComponent.verticalItems");
  const multiSelect = Symbol("ReorderListComponent.multiSelect");
  const placeholder = Symbol("ReorderListComponent.placeholder");
  reorder_list__reorder_list.ReorderListComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(reorder_list__reorder_list.ReorderListComponent, () => ({
    __proto__: dart.getMethods(reorder_list__reorder_list.ReorderListComponent.__proto__),
    [_refreshItems]: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_unTrackAll]: dart.fnType(dart.void, []),
    [_moveItem]: dart.fnType(dart.void, [core.int, core.int]),
    [_horizontalTransformHandler]: dart.fnType(core.int, [html.HtmlElement, html.Element, core.int, core.int, core.int, core.int]),
    track: dart.fnType(dart.void, [html.HtmlElement]),
    unTrack: dart.fnType(dart.void, [html.HtmlElement]),
    [_onDragStart]: dart.fnType(dart.void, [html.MouseEvent]),
    [_onDragEnd]: dart.fnType(dart.void, [html.MouseEvent]),
    [_onKeyDown]: dart.fnType(dart.void, [html.KeyboardEvent, html.HtmlElement]),
    [_onClick]: dart.fnType(dart.void, [html.MouseEvent, html.HtmlElement]),
    removeAt: dart.fnType(dart.void, [core.int]),
    [_notifySelectionChange]: dart.fnType(dart.void, []),
    [_handleCtrl]: dart.fnType(dart.void, [core.int, html.HtmlElement]),
    [_handleShift]: dart.fnType(dart.void, [core.int]),
    [_clearSelection]: dart.fnType(dart.void, []),
    [_getNewIndex]: dart.fnType(core.int, [core.int, core.int]),
    [_onDragOver]: dart.fnType(dart.void, [html.MouseEvent, html.HtmlElement]),
    [_getIndex]: dart.fnType(core.int, [html.HtmlElement]),
    [_createReorderEvent]: dart.fnType(reorder_list__reorder_events.ReorderEvent, [core.int, core.int]),
    [_resetChildren]: dart.fnType(dart.void, []),
    [_subscriptionsForElement]: dart.fnType(core.List$(async.StreamSubscription), [html.HtmlElement])
  }));
  dart.setGetterSignature(reorder_list__reorder_list.ReorderListComponent, () => ({
    __proto__: dart.getGetters(reorder_list__reorder_list.ReorderListComponent.__proto__),
    reorder: dart.fnType(async.Stream$(reorder_list__reorder_events.ReorderEvent), []),
    reorderAttempt: dart.fnType(async.Stream$(reorder_list__reorder_events.ReorderEvent), []),
    delete: dart.fnType(async.Stream$(core.int), []),
    itemSelectionChanged: dart.fnType(async.Stream$(reorder_list__reorder_events.ItemSelectionEvent), []),
    [_reorderElements]: dart.fnType(dart.dynamic, []),
    showPlaceholder: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(reorder_list__reorder_list.ReorderListComponent, () => ({
    __proto__: dart.getSetters(reorder_list__reorder_list.ReorderListComponent.__proto__),
    items: dart.fnType(dart.void, [ListOfReorderItemDirective()])
  }));
  dart.setFieldSignature(reorder_list__reorder_list.ReorderListComponent, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list.ReorderListComponent.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_reorder]: dart.finalFieldType(StreamControllerOfReorderEvent()),
    [_reorderAttempt]: dart.finalFieldType(StreamControllerOfReorderEvent()),
    [_delete]: dart.finalFieldType(StreamControllerOfint()),
    [_itemSelectionChanged]: dart.finalFieldType(StreamControllerOfItemSelectionEvent()),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    verticalItems: dart.fieldType(core.bool),
    multiSelect: dart.fieldType(core.bool),
    [_items]: dart.fieldType(ListOfReorderItemDirective()),
    [_subscriptions]: dart.fieldType(MapOfHtmlElement$ListOfStreamSubscription()),
    [_dragSubscriptions]: dart.fieldType(MapOfHtmlElement$StreamSubscription()),
    [_curTransformY]: dart.fieldType(ListOfint()),
    [_itemSizes]: dart.fieldType(ListOfint()),
    [_reorderActive]: dart.fieldType(core.bool),
    [_moveSourceIndex]: dart.fieldType(core.int),
    [_currentMoveIndex]: dart.fieldType(core.int),
    [_dragSourceElement]: dart.fieldType(html.HtmlElement),
    [_selectedElementIndexes]: dart.fieldType(ListOfint()),
    [_pivotItemIndex]: dart.fieldType(core.int),
    placeholder: dart.fieldType(src__core__linker__element_ref.ElementRef)
  }));
  dart.defineLazy(reorder_list__reorder_list.ReorderListComponent, {
    /*reorder_list__reorder_list.ReorderListComponent.itemSelectedCssClass*/get itemSelectedCssClass() {
      return 'item-selected';
    }
  });
  reorder_list__reorder_list.ReorderListHandler = dart.typedef('ReorderListHandler', () => dart.fnType(dart.void, [core.int, core.int]));
  reorder_list__reorder_list.ReorderItemDirective = class ReorderItemDirective extends core.Object {
    get element() {
      return this[element];
    }
    set element(value) {
      super.element = value;
    }
  };
  (reorder_list__reorder_list.ReorderItemDirective.new = function(elementRef) {
    this[element] = html.HtmlElement._check(elementRef.nativeElement);
  }).prototype = reorder_list__reorder_list.ReorderItemDirective.prototype;
  dart.addTypeTests(reorder_list__reorder_list.ReorderItemDirective);
  const element = Symbol("ReorderItemDirective.element");
  dart.setFieldSignature(reorder_list__reorder_list.ReorderItemDirective, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list.ReorderItemDirective.__proto__),
    element: dart.finalFieldType(html.HtmlElement)
  }));
  dart.trackLibraries("packages/angular_components/reorder_list/reorder_list.ddc", {
    "package:angular_components/reorder_list/reorder_list.dart": reorder_list__reorder_list
  }, '{"version":3,"sourceRoot":"","sources":["reorder_list.dart"],"names":[],"mappings":"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","file":"reorder_list.ddc.js"}');
  // Exports:
  return {
    reorder_list__reorder_list: reorder_list__reorder_list
  };
});

//# sourceMappingURL=reorder_list.ddc.js.map
