define(['dart_sdk', 'packages/angular_components/model/ui/icon'], function(dart_sdk, icon) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__icon = icon.model__ui__icon;
  const _root = Object.create(null);
  const glyph__glyph = Object.create(_root);
  const $contains = dartx.contains;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  dart.defineLazy(glyph__glyph, {
    /*glyph__glyph._flippedIcons*/get _flippedIcons() {
      return dart.constList(['chevron_left', 'chevron_right', 'navigate_before', 'navigate_next', 'last_page', 'first_page', 'open_in_new', 'star_half', 'exit_to_app'], core.String);
    }
  });
  const _element = Symbol('_element');
  const _icon = Symbol('_icon');
  const _iconSet = Symbol('_iconSet');
  const _useMaterialIconsExtended = Symbol('_useMaterialIconsExtended');
  const _isIconModel = Symbol('_isIconModel');
  glyph__glyph.GlyphComponent = class GlyphComponent extends core.Object {
    set icon(value) {
      this[_icon] = value;
      if (dart.test(glyph__glyph._flippedIcons[$contains](this.iconName))) {
        this[_element].setAttribute('flip', '');
      }
    }
    get icon() {
      return this[_icon];
    }
    get [_isIconModel]() {
      return model__ui__icon.Icon.is(this.icon);
    }
    get iconName() {
      return core.String._check(dart.test(this[_isIconModel]) ? dart.dload(this.icon, 'name') : this.icon);
    }
    get iconSet() {
      return this[_iconSet] == null ? "material-icons-extended" : this[_iconSet];
    }
    set iconSet(value) {
      if (!(value == null || value === "material-icons-extended")) dart.assertFailed();
      this[_iconSet] = value;
    }
    get useMaterialIconsExtended() {
      return this[_useMaterialIconsExtended];
    }
  };
  (glyph__glyph.GlyphComponent.new = function(element) {
    this[_icon] = null;
    this[_iconSet] = null;
    this[_useMaterialIconsExtended] = true;
    this[_element] = element;
  }).prototype = glyph__glyph.GlyphComponent.prototype;
  dart.addTypeTests(glyph__glyph.GlyphComponent);
  dart.setGetterSignature(glyph__glyph.GlyphComponent, () => ({
    __proto__: dart.getGetters(glyph__glyph.GlyphComponent.__proto__),
    icon: dart.fnType(dart.dynamic, []),
    [_isIconModel]: dart.fnType(core.bool, []),
    iconName: dart.fnType(core.String, []),
    iconSet: dart.fnType(core.String, []),
    useMaterialIconsExtended: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(glyph__glyph.GlyphComponent, () => ({
    __proto__: dart.getSetters(glyph__glyph.GlyphComponent.__proto__),
    icon: dart.fnType(dart.void, [dart.dynamic]),
    iconSet: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(glyph__glyph.GlyphComponent, () => ({
    __proto__: dart.getFields(glyph__glyph.GlyphComponent.__proto__),
    [_icon]: dart.fieldType(dart.dynamic),
    [_iconSet]: dart.fieldType(core.String),
    [_useMaterialIconsExtended]: dart.fieldType(core.bool),
    [_element]: dart.finalFieldType(html.HtmlElement)
  }));
  dart.defineLazy(glyph__glyph.GlyphComponent, {
    /*glyph__glyph.GlyphComponent._materialIconsExtended*/get _materialIconsExtended() {
      return 'material-icons-extended';
    }
  });
  glyph__glyph.GlyphSize = class GlyphSize extends core.Object {
    get values() {
      return JSArrayOfString().of(["", "x-small", "small", "medium", "large", "x-large"]);
    }
  };
  (glyph__glyph.GlyphSize.new = function() {
  }).prototype = glyph__glyph.GlyphSize.prototype;
  dart.addTypeTests(glyph__glyph.GlyphSize);
  dart.setGetterSignature(glyph__glyph.GlyphSize, () => ({
    __proto__: dart.getGetters(glyph__glyph.GlyphSize.__proto__),
    values: dart.fnType(core.List$(core.String), [])
  }));
  dart.defineLazy(glyph__glyph.GlyphSize, {
    /*glyph__glyph.GlyphSize.DEFAULT*/get DEFAULT() {
      return '';
    },
    /*glyph__glyph.GlyphSize.X_SMALL*/get X_SMALL() {
      return 'x-small';
    },
    /*glyph__glyph.GlyphSize.SMALL*/get SMALL() {
      return 'small';
    },
    /*glyph__glyph.GlyphSize.MEDIUM*/get MEDIUM() {
      return 'medium';
    },
    /*glyph__glyph.GlyphSize.LARGE*/get LARGE() {
      return 'large';
    },
    /*glyph__glyph.GlyphSize.X_LARGE*/get X_LARGE() {
      return 'x-large';
    }
  });
  dart.trackLibraries("packages/angular_components/glyph/glyph.ddc", {
    "package:angular_components/glyph/glyph.dart": glyph__glyph
  }, '{"version":3,"sourceRoot":"","sources":["glyph.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAYmB,0BAAa;YAAG,iBACjC,gBACA,iBACA,mBACA,iBACA,aACA,cACA,eACA,aACA;;;;;;;;;aA4CS,KAAa;AACpB,iBAAK,GAAG,KAAK;AACb,oBAAI,0BAAa,WAAS,CAAC,aAAQ,IAAG;AACpC,sBAAQ,aAAa,CAAC,QAAQ;;IAElC;;YAEoB,YAAK;;;qCAGA,SAAI;IAAQ;;0CAEd,kBAAY,eAAG,SAAI,YAAQ,SAAI;;;YAKhC,eAAQ,IAAI,OAAO,yBAAsB,GAAG,cAAQ;;gBAM9D,KAAY;AACtB,YAAO,AAAc,KAAT,IAAI,QAAQ,KAAK,KAAI,yBAAsB;AACvD,oBAAQ,GAAG,KAAK;IAClB;;YAIqC,gCAAyB;;;8CAI1C,OAAQ;IA1BxB,WAAK;IAOF,cAAQ;IAaV,+BAAyB,GAAG;IAMb,cAAQ,GAAR,OAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;MAxCT,kDAAsB;YAAG;;;;;YAmDlB,uBAAC,EAAO,EAAE,SAAO,EAAE,OAAK,EAAE,QAAM,EAAE,OAAK,EAAE,SAAO;IAAC;;;EAC9E;;;;;;;MAPe,8BAAO;YAAG;;MACV,8BAAO;YAAG;;MACV,4BAAK;YAAG;;MACR,6BAAM;YAAG;;MACT,4BAAK;YAAG;;MACR,8BAAO;YAAG","file":"glyph.ddc.js"}');
  // Exports:
  return {
    glyph__glyph: glyph__glyph
  };
});

//# sourceMappingURL=glyph.ddc.js.map
