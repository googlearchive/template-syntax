define(['dart_sdk', 'packages/angular_components/laminate/enums/visibility', 'packages/angular_components/laminate/enums/position'], function(dart_sdk, visibility, position) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__visibility = visibility.laminate__enums__visibility;
  const laminate__enums__position = position.laminate__enums__position;
  const _root = Object.create(null);
  const src__laminate__ruler__ruler_interface = Object.create(_root);
  const $abs = dartx.abs;
  const $top = dartx.top;
  const $left = dartx.left;
  const $width = dartx.width;
  const $height = dartx.height;
  const $round = dartx.round;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ExpandoOfListOfString = () => (ExpandoOfListOfString = dart.constFn(core.Expando$(ListOfString())))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let dynamicToRectangleOfnum = () => (dynamicToRectangleOfnum = dart.constFn(dart.fnType(RectangleOfnum(), [dart.dynamic])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StreamControllerOfRectangleOfnum = () => (StreamControllerOfRectangleOfnum = dart.constFn(async.StreamController$(RectangleOfnum())))();
  let numAndnumTobool = () => (numAndnumTobool = dart.constFn(dart.fnType(core.bool, [core.num, core.num])))();
  let RectangleOfnumAndRectangleOfnumTobool = () => (RectangleOfnumAndRectangleOfnumTobool = dart.constFn(dart.fnType(core.bool, [RectangleOfnum(), RectangleOfnum()])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let StringAnddynamicToNull = () => (StringAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [core.String, dart.dynamic])))();
  const _is_Ruler_default = Symbol('_is_Ruler_default');
  src__laminate__ruler__ruler_interface.Ruler$ = dart.generic(E => {
    class Ruler extends core.Object {}
    (Ruler.new = function() {
    }).prototype = Ruler.prototype;
    dart.addTypeTests(Ruler);
    Ruler.prototype[_is_Ruler_default] = true;
    return Ruler;
  });
  src__laminate__ruler__ruler_interface.Ruler = src__laminate__ruler__ruler_interface.Ruler$();
  dart.addTypeTests(src__laminate__ruler__ruler_interface.Ruler, _is_Ruler_default);
  const _addedCssClasses = Symbol('_addedCssClasses');
  const _is_RulerBase_default = Symbol('_is_RulerBase_default');
  src__laminate__ruler__ruler_interface.RulerBase$ = dart.generic(E => {
    let RulerOfE = () => (RulerOfE = dart.constFn(src__laminate__ruler__ruler_interface.Ruler$(E)))();
    class RulerBase extends core.Object {
      measure(element, opts) {
        E._check(element);
        let offset = opts && 'offset' in opts ? opts.offset : false;
        return this.onRead().then(RectangleOfnum(), dart.fn(_ => this.measureSync(element, {offset: offset}), dynamicToRectangleOfnum()));
      }
      track(element) {
        E._check(element);
        let controller = null;
        let subscription = null;
        controller = StreamControllerOfRectangleOfnum().new({sync: true, onListen: dart.fn(() => {
            this.measure(element).then(dart.void, dart.bind(controller, 'add'));
            subscription = this.onLayoutChanged.listen(dart.fn(_ => {
              controller.add(this.measureSync(element));
            }, dynamicToNull()), {onDone: dart.fn(() => {
                controller.close();
              }, VoidToNull())});
          }, VoidToNull()), onCancel: dart.fn(() => {
            subscription.cancel();
          }, VoidToNull())});
        return controller.stream.distinct(dart.fn((previous, next) => {
          if (previous == null || next == null) return previous == next;
          function withinEpsilon(a, b) {
            return (dart.notNull(a) - dart.notNull(b))[$abs]() < 0.01;
          }
          dart.fn(withinEpsilon, numAndnumTobool());
          return dart.test(withinEpsilon(previous[$top], next[$top])) && dart.test(withinEpsilon(previous[$left], next[$left])) && dart.test(withinEpsilon(previous[$width], next[$width])) && dart.test(withinEpsilon(previous[$height], next[$height]));
        }, RectangleOfnumAndRectangleOfnumTobool()));
      }
      update(element, opts) {
        E._check(element);
        let cssClasses = opts && 'cssClasses' in opts ? opts.cssClasses : null;
        let visibility = opts && 'visibility' in opts ? opts.visibility : null;
        let position = opts && 'position' in opts ? opts.position : null;
        let width = opts && 'width' in opts ? opts.width : null;
        let height = opts && 'height' in opts ? opts.height : null;
        let left = opts && 'left' in opts ? opts.left : null;
        let top = opts && 'top' in opts ? opts.top : null;
        let right = opts && 'right' in opts ? opts.right : null;
        let bottom = opts && 'bottom' in opts ? opts.bottom : null;
        let zIndex = opts && 'zIndex' in opts ? opts.zIndex : null;
        let useCssTransform = opts && 'useCssTransform' in opts ? opts.useCssTransform : true;
        const doSyncUpdate = (function() {
          this.updateSync(element, {cssClasses: cssClasses, visibility: visibility, position: position, width: width, height: height, top: top, left: left, right: right, bottom: bottom, zIndex: zIndex, useCssTransform: useCssTransform});
        }).bind(this);
        dart.fn(doSyncUpdate, VoidTovoid());
        if (dart.test(this.canSyncWrite(element))) {
          doSyncUpdate();
          return async.Future.value();
        }
        return this.onWrite().then(dart.dynamic, dart.fn(_ => doSyncUpdate(), dynamicTovoid()));
      }
      updateSync(element, opts) {
        E._check(element);
        let cssClasses = opts && 'cssClasses' in opts ? opts.cssClasses : null;
        let visibility = opts && 'visibility' in opts ? opts.visibility : null;
        let position = opts && 'position' in opts ? opts.position : null;
        let width = opts && 'width' in opts ? opts.width : null;
        let height = opts && 'height' in opts ? opts.height : null;
        let left = opts && 'left' in opts ? opts.left : null;
        let top = opts && 'top' in opts ? opts.top : null;
        let right = opts && 'right' in opts ? opts.right : null;
        let bottom = opts && 'bottom' in opts ? opts.bottom : null;
        let zIndex = opts && 'zIndex' in opts ? opts.zIndex : null;
        let useCssTransform = opts && 'useCssTransform' in opts ? opts.useCssTransform : true;
        let setProperty = (name, value) => {
          this.setCssPropertySync(element, name, value);
        };
        dart.fn(setProperty, StringAnddynamicToNull());
        dart.dcall(setProperty, 'display', null);
        dart.dcall(setProperty, 'visibility', null);
        if (visibility != null && !dart.equals(visibility, laminate__enums__visibility.Visibility.Visible)) {
          visibility.apply(setProperty);
        }
        if (cssClasses != null) {
          let lastCssClasses = this[_addedCssClasses]._get(element);
          if (lastCssClasses != null) {
            this.removeCssClassesSync(element, lastCssClasses);
          }
          this.addCssClassesSync(element, cssClasses);
          this[_addedCssClasses]._set(element, cssClasses);
        }
        if (width != null) {
          dart.dcall(setProperty, 'width', width === 0 ? '0' : dart.str`${width}px`);
        } else {
          dart.dcall(setProperty, 'width', null);
        }
        if (height != null) {
          dart.dcall(setProperty, 'height', height === 0 ? '0' : dart.str`${height}px`);
        } else {
          dart.dcall(setProperty, 'height', null);
        }
        position == null ? null : position.apply(setProperty);
        if (dart.test(useCssTransform)) {
          let buffer = new core.StringBuffer.new();
          if (left != null) {
            dart.dcall(setProperty, 'left', '0');
            buffer.write(dart.str`translateX(${left[$round]()}px) `);
          } else {
            dart.dcall(setProperty, 'left', null);
          }
          if (top != null) {
            dart.dcall(setProperty, 'top', '0');
            buffer.write(dart.str`translateY(${top[$round]()}px)`);
          } else {
            dart.dcall(setProperty, 'top', null);
          }
          dart.dcall(setProperty, 'transform', buffer.toString());
          dart.dcall(setProperty, '-webkit-transform', buffer.toString());
          if (dart.test(buffer.isNotEmpty)) {
            dart.dcall(setProperty, 'transform', buffer.toString());
            dart.dcall(setProperty, '-webkit-transform', buffer.toString());
          }
        } else {
          if (left != null) {
            dart.dcall(setProperty, 'left', left === 0 ? '0' : dart.str`${left}px`);
          } else {
            dart.dcall(setProperty, 'left', null);
          }
          if (top != null) {
            dart.dcall(setProperty, 'top', top === 0 ? '0' : dart.str`${top}px`);
          } else {
            dart.dcall(setProperty, 'top', null);
          }
          dart.dcall(setProperty, 'transform', null);
          dart.dcall(setProperty, '-webkit-transform', null);
        }
        if (right != null) {
          dart.dcall(setProperty, 'right', right === 0 ? '0' : dart.str`${right}px`);
        } else {
          dart.dcall(setProperty, 'right', null);
        }
        if (bottom != null) {
          dart.dcall(setProperty, 'bottom', bottom === 0 ? '0' : dart.str`${bottom}px`);
        } else {
          dart.dcall(setProperty, 'bottom', null);
        }
        if (zIndex != null) {
          dart.dcall(setProperty, 'z-index', dart.str`${zIndex}`);
        } else {
          dart.dcall(setProperty, 'z-index', null);
        }
        if (visibility != null && dart.equals(visibility, laminate__enums__visibility.Visibility.Visible)) {
          visibility.apply(setProperty);
        }
      }
    }
    (RulerBase.new = function() {
      this[_addedCssClasses] = new (ExpandoOfListOfString()).new();
    }).prototype = RulerBase.prototype;
    dart.addTypeTests(RulerBase);
    RulerBase.prototype[_is_RulerBase_default] = true;
    RulerBase[dart.implements] = () => [RulerOfE()];
    dart.setMethodSignature(RulerBase, () => ({
      __proto__: dart.getMethods(RulerBase.__proto__),
      measure: dart.fnType(async.Future$(math.Rectangle$(core.num)), [core.Object], {offset: core.bool}),
      track: dart.fnType(async.Stream$(math.Rectangle$(core.num)), [core.Object]),
      update: dart.fnType(async.Future, [core.Object], {cssClasses: ListOfString(), visibility: laminate__enums__visibility.Visibility, position: laminate__enums__position.Position, width: core.num, height: core.num, left: core.num, top: core.num, right: core.num, bottom: core.num, zIndex: core.num, useCssTransform: core.bool}),
      updateSync: dart.fnType(dart.void, [core.Object], {cssClasses: ListOfString(), visibility: laminate__enums__visibility.Visibility, position: laminate__enums__position.Position, width: core.num, height: core.num, left: core.num, top: core.num, right: core.num, bottom: core.num, zIndex: core.num, useCssTransform: core.bool})
    }));
    dart.setFieldSignature(RulerBase, () => ({
      __proto__: dart.getFields(RulerBase.__proto__),
      [_addedCssClasses]: dart.finalFieldType(ExpandoOfListOfString())
    }));
    return RulerBase;
  });
  src__laminate__ruler__ruler_interface.RulerBase = src__laminate__ruler__ruler_interface.RulerBase$();
  dart.addTypeTests(src__laminate__ruler__ruler_interface.RulerBase, _is_RulerBase_default);
  dart.trackLibraries("packages/angular_components/src/laminate/ruler/ruler_interface.ddc", {
    "package:angular_components/src/laminate/ruler/ruler_interface.dart": src__laminate__ruler__ruler_interface
  }, '{"version":3,"sourceRoot":"","sources":["ruler_interface.dart"],"names":[],"mappings":"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","file":"ruler_interface.ddc.js"}');
  // Exports:
  return {
    src__laminate__ruler__ruler_interface: src__laminate__ruler__ruler_interface
  };
});

//# sourceMappingURL=ruler_interface.ddc.js.map
