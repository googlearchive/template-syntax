define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/model/observable/observable'], function(dart_sdk, disposer, date, calendar, observable) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const model__date__date = date.model__date__date;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const model__observable__observable = observable.model__observable__observable;
  const _root = Object.create(null);
  const src__material_datepicker__calendar_listener = Object.create(_root);
  const $onMouseUp = dartx.onMouseUp;
  let ObservableReferenceOfCalendarState = () => (ObservableReferenceOfCalendarState = dart.constFn(model__observable__observable.ObservableReference$(material_datepicker__calendar.CalendarState)))();
  let CalendarStateToNull = () => (CalendarStateToNull = dart.constFn(dart.fnType(core.Null, [material_datepicker__calendar.CalendarState])))();
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  src__material_datepicker__calendar_listener.CalendarListener = class CalendarListener extends core.Object {
    onClick(day) {}
    onMouseDown(day) {}
    onMouseMove(day) {}
    onMouseLeave(day) {}
    onKeypress() {}
    dispose() {}
    static singleDate(model) {
      return new src__material_datepicker__calendar_listener._DateListener.new(model);
    }
    static dateRange(model) {
      return new src__material_datepicker__calendar_listener._RangeListener.new(model);
    }
  };
  (src__material_datepicker__calendar_listener.CalendarListener.noop = function() {
  }).prototype = src__material_datepicker__calendar_listener.CalendarListener.prototype;
  dart.addTypeTests(src__material_datepicker__calendar_listener.CalendarListener);
  src__material_datepicker__calendar_listener.CalendarListener[dart.implements] = () => [utils__disposer__disposer.Disposable];
  dart.setMethodSignature(src__material_datepicker__calendar_listener.CalendarListener, () => ({
    __proto__: dart.getMethods(src__material_datepicker__calendar_listener.CalendarListener.__proto__),
    onClick: dart.fnType(dart.void, [model__date__date.Date]),
    onMouseDown: dart.fnType(dart.void, [model__date__date.Date]),
    onMouseMove: dart.fnType(dart.void, [model__date__date.Date]),
    onMouseLeave: dart.fnType(dart.void, [model__date__date.Date]),
    onKeypress: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  src__material_datepicker__calendar_listener._DateListener = class _DateListener extends core.Object {
    onClick(day) {
      this.model.value = this.model.value.setCurrentSelection(day, day);
    }
    onMouseMove(day) {
      this.model.value = this.model.value.updateCurrentPreview(day);
    }
    onKeypress() {}
    onMouseDown(day) {}
    onMouseLeave(day) {}
    dispose() {}
  };
  (src__material_datepicker__calendar_listener._DateListener.new = function(model) {
    this.model = model;
  }).prototype = src__material_datepicker__calendar_listener._DateListener.prototype;
  dart.addTypeTests(src__material_datepicker__calendar_listener._DateListener);
  src__material_datepicker__calendar_listener._DateListener[dart.implements] = () => [src__material_datepicker__calendar_listener.CalendarListener];
  dart.setMethodSignature(src__material_datepicker__calendar_listener._DateListener, () => ({
    __proto__: dart.getMethods(src__material_datepicker__calendar_listener._DateListener.__proto__),
    onClick: dart.fnType(dart.void, [model__date__date.Date]),
    onMouseMove: dart.fnType(dart.void, [model__date__date.Date]),
    onKeypress: dart.fnType(dart.void, []),
    onMouseDown: dart.fnType(dart.void, [model__date__date.Date]),
    onMouseLeave: dart.fnType(dart.void, [model__date__date.Date]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_datepicker__calendar_listener._DateListener, () => ({
    __proto__: dart.getFields(src__material_datepicker__calendar_listener._DateListener.__proto__),
    model: dart.finalFieldType(ObservableReferenceOfCalendarState())
  }));
  src__material_datepicker__calendar_listener._DragState = class _DragState extends core.Object {
    toString() {
      return {
        0: "_DragState.canPreview",
        1: "_DragState.pendingGrabOrClick",
        2: "_DragState.pendingDragOrClick",
        3: "_DragState.dragging"
      }[this.index];
    }
  };
  (src__material_datepicker__calendar_listener._DragState.new = function(x) {
    this.index = x;
  }).prototype = src__material_datepicker__calendar_listener._DragState.prototype;
  dart.addTypeTests(src__material_datepicker__calendar_listener._DragState);
  dart.setFieldSignature(src__material_datepicker__calendar_listener._DragState, () => ({
    __proto__: dart.getFields(src__material_datepicker__calendar_listener._DragState.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__material_datepicker__calendar_listener._DragState, ['toString']);
  src__material_datepicker__calendar_listener._DragState.canPreview = dart.const(new src__material_datepicker__calendar_listener._DragState.new(0));
  src__material_datepicker__calendar_listener._DragState.pendingGrabOrClick = dart.const(new src__material_datepicker__calendar_listener._DragState.new(1));
  src__material_datepicker__calendar_listener._DragState.pendingDragOrClick = dart.const(new src__material_datepicker__calendar_listener._DragState.new(2));
  src__material_datepicker__calendar_listener._DragState.dragging = dart.const(new src__material_datepicker__calendar_listener._DragState.new(3));
  src__material_datepicker__calendar_listener._DragState.values = dart.constList([src__material_datepicker__calendar_listener._DragState.canPreview, src__material_datepicker__calendar_listener._DragState.pendingGrabOrClick, src__material_datepicker__calendar_listener._DragState.pendingDragOrClick, src__material_datepicker__calendar_listener._DragState.dragging], src__material_datepicker__calendar_listener._DragState);
  const _disposer = Symbol('_disposer');
  const _consecutiveClicks = Symbol('_consecutiveClicks');
  const _initSelectionPreview = Symbol('_initSelectionPreview');
  const _datesEqual = Symbol('_datesEqual');
  const _grabExistingRange = Symbol('_grabExistingRange');
  src__material_datepicker__calendar_listener._RangeListener = class _RangeListener extends core.Object {
    [_datesEqual](a, b) {
      return material_datepicker__calendar.datesEqualAtResolution(a, b, this.model.value.resolution);
    }
    [_initSelectionPreview]() {
      this.previewedSelection = this.model.value.currentSelection;
      this[_consecutiveClicks] = 0;
    }
    [_grabExistingRange](d) {
      if (this.state !== src__material_datepicker__calendar_listener._DragState.canPreview) {
        return false;
      }
      for (let selection of this.model.value.selections) {
        if (selection.start == null || selection.end == null) {
          continue;
        }
        if (dart.test(this[_datesEqual](d, selection.start))) {
          this.state = src__material_datepicker__calendar_listener._DragState.pendingGrabOrClick;
          this.dragAnchor = selection.end;
          this.selectionPendingGrab = selection.id;
          return true;
        }
        if (dart.test(this[_datesEqual](d, selection.end))) {
          this.state = src__material_datepicker__calendar_listener._DragState.pendingGrabOrClick;
          this.dragAnchor = selection.start;
          this.selectionPendingGrab = selection.id;
          return true;
        }
      }
      return false;
    }
    confirmPreviewedSelection() {
      if (this.model.value.preview == null) return;
      this[_consecutiveClicks] = dart.notNull(this[_consecutiveClicks]) + 1;
      this.model.value = this.model.value.confirmPreview({confirmRange: dart.notNull(this[_consecutiveClicks]) >= 2});
    }
    onMouseDown(day) {
      if (!dart.test(this[_grabExistingRange](day))) {
        this.state = src__material_datepicker__calendar_listener._DragState.pendingDragOrClick;
        this.dragAnchor = day;
      }
      this[_disposer].addStreamSubscription(html.MouseEvent, html.document[$onMouseUp].take(1).listen(dart.fn(_ => {
        if (this.state === src__material_datepicker__calendar_listener._DragState.dragging) {
          this.model.value = new material_datepicker__calendar.CalendarState.new({selections: this.model.value.selections, currentSelection: this.model.value.currentSelection, cause: material_datepicker__calendar.CausedBy.rangeConfirm, resolution: this.model.value.resolution});
        }
        this.state = src__material_datepicker__calendar_listener._DragState.canPreview;
        this.dragAnchor = null;
      }, MouseEventToNull())));
    }
    onClick(day) {
      if (dart.test(this.model.value.has(this.model.value.currentSelection))) {
        this.updateActiveDragOrPreview(day);
        this.confirmPreviewedSelection();
      } else {
        this.model.value = this.model.value.setCurrentSelection(day, day, {cause: material_datepicker__calendar.CausedBy.endpointConfirm, previewAnchoredAtStart: true});
        this[_consecutiveClicks] = 1;
      }
      this.state = src__material_datepicker__calendar_listener._DragState.canPreview;
      this.dragAnchor = null;
    }
    onMouseMove(day) {
      this.updateActiveDragOrPreview(day);
    }
    updateActiveDragOrPreview(day) {
      if (!dart.equals(day, this.dragAnchor) && this.state !== src__material_datepicker__calendar_listener._DragState.canPreview) {
        if (this.state === src__material_datepicker__calendar_listener._DragState.pendingGrabOrClick && dart.test(this.model.value.has(this.model.value.currentSelection))) {
          if (!(this.selectionPendingGrab != null)) dart.assertFailed();
          this.model.value = this.model.value.select(this.selectionPendingGrab);
          this.selectionPendingGrab = null;
        }
        this.state = src__material_datepicker__calendar_listener._DragState.dragging;
      }
      this.model.value = this.state === src__material_datepicker__calendar_listener._DragState.dragging ? this.model.value.updateDrag(day, this.dragAnchor) : this.model.value.updateCurrentPreview(day);
    }
    onMouseLeave(day) {
      if (this.state === src__material_datepicker__calendar_listener._DragState.canPreview) {
        this.model.value = this.model.value.cancelCurrentPreview();
      }
    }
    onKeypress() {}
    dispose() {
      return this[_disposer].dispose();
    }
  };
  (src__material_datepicker__calendar_listener._RangeListener.new = function(model) {
    this[_disposer] = new utils__disposer__disposer.Disposer.multi();
    this.state = src__material_datepicker__calendar_listener._DragState.canPreview;
    this.dragAnchor = null;
    this.previewedSelection = null;
    this.selectionPendingGrab = null;
    this[_consecutiveClicks] = 0;
    this.model = model;
    this[_initSelectionPreview]();
    this[_disposer].addStreamSubscription(material_datepicker__calendar.CalendarState, this.model.stream.listen(dart.fn(s => {
      if (s.currentSelection != this.previewedSelection) {
        this[_initSelectionPreview]();
        this[_consecutiveClicks] = 0;
      } else if (s.cause === material_datepicker__calendar.CausedBy.external || s.cause === material_datepicker__calendar.CausedBy.drag) {
        this[_consecutiveClicks] = 0;
      }
    }, CalendarStateToNull())));
  }).prototype = src__material_datepicker__calendar_listener._RangeListener.prototype;
  dart.addTypeTests(src__material_datepicker__calendar_listener._RangeListener);
  src__material_datepicker__calendar_listener._RangeListener[dart.implements] = () => [src__material_datepicker__calendar_listener.CalendarListener];
  dart.setMethodSignature(src__material_datepicker__calendar_listener._RangeListener, () => ({
    __proto__: dart.getMethods(src__material_datepicker__calendar_listener._RangeListener.__proto__),
    [_datesEqual]: dart.fnType(core.bool, [model__date__date.Date, model__date__date.Date]),
    [_initSelectionPreview]: dart.fnType(dart.void, []),
    [_grabExistingRange]: dart.fnType(core.bool, [model__date__date.Date]),
    confirmPreviewedSelection: dart.fnType(dart.void, []),
    onMouseDown: dart.fnType(dart.void, [model__date__date.Date]),
    onClick: dart.fnType(dart.void, [model__date__date.Date]),
    onMouseMove: dart.fnType(dart.void, [model__date__date.Date]),
    updateActiveDragOrPreview: dart.fnType(dart.void, [model__date__date.Date]),
    onMouseLeave: dart.fnType(dart.void, [model__date__date.Date]),
    onKeypress: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_datepicker__calendar_listener._RangeListener, () => ({
    __proto__: dart.getFields(src__material_datepicker__calendar_listener._RangeListener.__proto__),
    model: dart.finalFieldType(ObservableReferenceOfCalendarState()),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    state: dart.fieldType(src__material_datepicker__calendar_listener._DragState),
    dragAnchor: dart.fieldType(model__date__date.Date),
    previewedSelection: dart.fieldType(core.String),
    selectionPendingGrab: dart.fieldType(core.String),
    [_consecutiveClicks]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/angular_components/src/material_datepicker/calendar_listener.ddc", {
    "package:angular_components/src/material_datepicker/calendar_listener.dart": src__material_datepicker__calendar_listener
  }, '{"version":3,"sourceRoot":"","sources":["calendar_listener.dart"],"names":[],"mappings":"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","file":"calendar_listener.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__calendar_listener: src__material_datepicker__calendar_listener
  };
});

//# sourceMappingURL=calendar_listener.ddc.js.map
