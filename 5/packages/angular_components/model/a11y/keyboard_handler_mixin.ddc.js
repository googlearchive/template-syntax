define(['dart_sdk', 'packages/angular_components/utils/browser/events/events'], function(dart_sdk, events) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events = events.utils__browser__events__events;
  const _root = Object.create(null);
  const model__a11y__keyboard_handler_mixin = Object.create(_root);
  model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin = class KeyboardHandlerMixin extends core.Object {
    get isRtl() {
      return this[isRtl];
    }
    set isRtl(value) {
      this[isRtl] = value;
    }
    onKeyPress(event) {
      if (event.keyCode === html.KeyCode.ENTER) {
        this.handleEnterKey(event);
      } else if (dart.test(utils__browser__events__events.isSpaceKey(event))) {
        this.handleSpaceKey(event);
      } else if (event.charCode !== 0) {
        this.handleCharCodeKey(event);
      }
    }
    onKeyDown(event) {
      switch (event.keyCode) {
        case html.KeyCode.UP:
        {
          this.handleUpKey(event);
          break;
        }
        case html.KeyCode.DOWN:
        {
          this.handleDownKey(event);
          break;
        }
        case html.KeyCode.LEFT:
        {
          if (this.isRtl === true) {
            this.handleRightKey(event);
          } else {
            this.handleLeftKey(event);
          }
          break;
        }
        case html.KeyCode.RIGHT:
        {
          if (this.isRtl === true) {
            this.handleLeftKey(event);
          } else {
            this.handleRightKey(event);
          }
          break;
        }
        case html.KeyCode.PAGE_UP:
        {
          this.handlePageUp(event);
          break;
        }
        case html.KeyCode.PAGE_DOWN:
        {
          this.handlePageDown(event);
          break;
        }
        case html.KeyCode.HOME:
        {
          this.handleHomeKey(event);
          break;
        }
        case html.KeyCode.END:
        {
          this.handleEndKey(event);
          break;
        }
        case html.KeyCode.BACKSPACE:
        {
          this.handleBackspaceKey(event);
          break;
        }
        case html.KeyCode.DELETE:
        {
          this.handleDeleteKey(event);
          break;
        }
      }
    }
    onKeyUp(event) {
      if (event.keyCode === html.KeyCode.ESC) {
        this.handleEscapeKey(event);
      }
    }
    handleEnterKey(event) {}
    handleSpaceKey(event) {}
    handleEscapeKey(event) {}
    handleUpKey(event) {}
    handleDownKey(event) {}
    handleLeftKey(event) {}
    handleRightKey(event) {}
    handlePageUp(event) {}
    handlePageDown(event) {}
    handleHomeKey(event) {}
    handleEndKey(event) {}
    handleBackspaceKey(event) {}
    handleDeleteKey(event) {}
    handleCharCodeKey(event) {}
  };
  (model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin.new = function() {
    this[isRtl] = null;
  }).prototype = model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin.prototype;
  dart.addTypeTests(model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin);
  const isRtl = Symbol("KeyboardHandlerMixin.isRtl");
  dart.setMethodSignature(model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin, () => ({
    __proto__: dart.getMethods(model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin.__proto__),
    onKeyPress: dart.fnType(dart.void, [html.KeyboardEvent]),
    onKeyDown: dart.fnType(dart.void, [html.KeyboardEvent]),
    onKeyUp: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleEnterKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleSpaceKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleEscapeKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleUpKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleDownKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleLeftKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleRightKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    handlePageUp: dart.fnType(dart.void, [html.KeyboardEvent]),
    handlePageDown: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleHomeKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleEndKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleBackspaceKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleDeleteKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleCharCodeKey: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setFieldSignature(model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin, () => ({
    __proto__: dart.getFields(model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin.__proto__),
    isRtl: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/model/a11y/keyboard_handler_mixin.ddc", {
    "package:angular_components/model/a11y/keyboard_handler_mixin.dart": model__a11y__keyboard_handler_mixin
  }, '{"version":3,"sourceRoot":"","sources":["keyboard_handler_mixin.dart"],"names":[],"mappings":";;;;;;;;;;IAuCO;;;;;;eAGW,KAAmB;AACjC,UAAI,KAAK,QAAQ,KAAI,YAAO,MAAM,EAAE;AAClC,2BAAc,CAAC,KAAK;YACf,eAAI,yCAAU,CAAC,KAAK,IAAG;AAC5B,2BAAc,CAAC,KAAK;YACf,KAAI,KAAK,SAAS,KAAI,GAAG;AAC9B,8BAAiB,CAAC,KAAK;;IAE3B;cAGe,KAAmB;AAChC,cAAQ,KAAK,QAAQ;YACd,aAAO,GAAG;;AACb,0BAAW,CAAC,KAAK;AACjB;;YACG,aAAO,KAAK;;AACf,4BAAa,CAAC,KAAK;AACnB;;YACG,aAAO,KAAK;;AACf,cAAI,UAAK,KAAI,MAAM;AACjB,+BAAc,CAAC,KAAK;iBACf;AACL,8BAAa,CAAC,KAAK;;AAErB;;YACG,aAAO,MAAM;;AAChB,cAAI,UAAK,KAAI,MAAM;AACjB,8BAAa,CAAC,KAAK;iBACd;AACL,+BAAc,CAAC,KAAK;;AAEtB;;YACG,aAAO,QAAQ;;AAClB,2BAAY,CAAC,KAAK;AAClB;;YACG,aAAO,UAAU;;AACpB,6BAAc,CAAC,KAAK;AACpB;;YACG,aAAO,KAAK;;AACf,4BAAa,CAAC,KAAK;AACnB;;YACG,aAAO,IAAI;;AACd,2BAAY,CAAC,KAAK;AAClB;;YACG,aAAO,UAAU;;AACpB,iCAAkB,CAAC,KAAK;AACxB;;YACG,aAAO,OAAO;;AACjB,8BAAe,CAAC,KAAK;AACrB;;;IAEN;YAGa,KAAmB;AAC9B,UAAI,KAAK,QAAQ,KAAI,YAAO,IAAI,EAAE;AAChC,4BAAe,CAAC,KAAK;;IAEzB;mBAIoB,KAAmB,GAAG;mBAEtB,KAAmB,GAAG;oBAErB,KAAmB,GAAG;gBAE1B,KAAmB,GAAG;kBAEpB,KAAmB,GAAG;kBAEtB,KAAmB,GAAG;mBAErB,KAAmB,GAAG;iBAExB,KAAmB,GAAG;mBAEpB,KAAmB,GAAG;kBAEvB,KAAmB,GAAG;iBAEvB,KAAmB,GAAG;uBAEhB,KAAmB,GAAG;oBAEzB,KAAmB,GAAG;sBAEpB,KAAmB,GAAG;;;IA5FxC,WAAK;EA6FZ","file":"keyboard_handler_mixin.ddc.js"}');
  // Exports:
  return {
    model__a11y__keyboard_handler_mixin: model__a11y__keyboard_handler_mixin
  };
});

//# sourceMappingURL=keyboard_handler_mixin.ddc.js.map
