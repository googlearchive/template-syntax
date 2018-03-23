define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/di/providers', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/src/laminate/popup/dom_popup_source'], function(dart_sdk, alignment, opaque_token, providers, module, dom_popup_source) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__di__providers = providers.src__di__providers;
  const laminate__overlay__module = module.laminate__overlay__module;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const _root = Object.create(null);
  const laminate__popup__module = Object.create(_root);
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let ProviderOfListOfRelativePosition = () => (ProviderOfListOfRelativePosition = dart.constFn(src__di__providers.Provider$(ListOfRelativePosition())))();
  dart.defineLazy(laminate__popup__module, {
    /*laminate__popup__module.inlinePositions*/get inlinePositions() {
      return laminate__enums__alignment.RelativePosition.InlinePositions;
    },
    /*laminate__popup__module.defaultPopupPositions*/get defaultPopupPositions() {
      return dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions'));
    },
    /*laminate__popup__module.popupBindings*/get popupBindings() {
      return dart.constList([dart.const(ProviderOfListOfRelativePosition().new(laminate__popup__module.defaultPopupPositions, {useValue: laminate__popup__module.inlinePositions})), laminate__overlay__module.overlayBindings, dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory)], core.Object);
    },
    /*laminate__popup__module.popupDebugBindings*/get popupDebugBindings() {
      return dart.constList([dart.const(ProviderOfListOfRelativePosition().new(laminate__popup__module.defaultPopupPositions, {useValue: laminate__popup__module.inlinePositions})), laminate__overlay__module.overlayDebugBindings, dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory)], core.Object);
    }
  });
  dart.trackLibraries("packages/angular_components/laminate/popup/module.ddc", {
    "package:angular_components/laminate/popup/module.dart": laminate__popup__module
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MASM,uCAAe;YAAG,4CAAgB,gBAAgB;;MAKlD,6CAAqB;YAAG,gBAAM,2CAAmC,CACrE;;MAMI,qCAAa;YAAG,iBAEpB,WAAM,sCAAgC,CACpC,6CAAqB,aACX,uCAAe,KAE3B,yCAAe,EACf,2EAAqB;;MAMjB,0CAAkB;YAAG,iBAEzB,WAAM,sCAAgC,CACpC,6CAAqB,aACX,uCAAe,KAE3B,8CAAoB,EACpB,2EAAqB","file":"module.ddc.js"}');
  // Exports:
  return {
    laminate__popup__module: laminate__popup__module
  };
});

//# sourceMappingURL=module.ddc.js.map
