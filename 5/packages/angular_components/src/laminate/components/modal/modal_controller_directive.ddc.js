define(['dart_sdk', 'packages/angular_components/laminate/portal/portal', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/src/laminate/overlay/overlay_ref'], function(dart_sdk, portal, lifecycle_hooks, overlay_ref) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__portal__portal = portal.laminate__portal__portal;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__laminate__overlay__overlay_ref = overlay_ref.src__laminate__overlay__overlay_ref;
  const _root = Object.create(null);
  const src__laminate__components__modal__modal_controller_directive = Object.create(_root);
  src__laminate__components__modal__modal_controller_directive.ModalControllerDirective = class ModalControllerDirective extends laminate__portal__portal.TemplatePortal {
    ngOnDestroy() {
      if (dart.test(this.isAttached)) {
        this.detach();
      }
    }
    set overlay(overlayRef) {
      if (overlayRef == null) {
        if (dart.test(this.isAttached)) {
          this.detach();
        }
      } else {
        overlayRef.attach(this);
      }
    }
  };
  (src__laminate__components__modal__modal_controller_directive.ModalControllerDirective.new = function(templateRef, viewContainerRef) {
    src__laminate__components__modal__modal_controller_directive.ModalControllerDirective.__proto__.new.call(this, templateRef, viewContainerRef);
  }).prototype = src__laminate__components__modal__modal_controller_directive.ModalControllerDirective.prototype;
  dart.addTypeTests(src__laminate__components__modal__modal_controller_directive.ModalControllerDirective);
  src__laminate__components__modal__modal_controller_directive.ModalControllerDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__laminate__components__modal__modal_controller_directive.ModalControllerDirective, () => ({
    __proto__: dart.getMethods(src__laminate__components__modal__modal_controller_directive.ModalControllerDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(src__laminate__components__modal__modal_controller_directive.ModalControllerDirective, () => ({
    __proto__: dart.getSetters(src__laminate__components__modal__modal_controller_directive.ModalControllerDirective.__proto__),
    overlay: dart.fnType(dart.void, [src__laminate__overlay__overlay_ref.OverlayRef])
  }));
  dart.trackLibraries("packages/angular_components/src/laminate/components/modal/modal_controller_directive.ddc", {
    "package:angular_components/src/laminate/components/modal/modal_controller_directive.dart": src__laminate__components__modal__modal_controller_directive
  }, '{"version":3,"sourceRoot":"","sources":["modal_controller_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;AAqBI,oBAAI,eAAU,GAAE;AACd,mBAAM;;IAEV;gBAIY,UAAqB;AAC/B,UAAI,UAAU,IAAI,MAAM;AACtB,sBAAI,eAAU,GAAE;AACd,qBAAW;;aAER;AACL,kBAAU,OAAO,CAAC;;IAEtB;;wGApBI,WAAuB,EAAE,gBAAiC;AACxD,mHAAM,WAAW,EAAE,gBAAgB;EAAC","file":"modal_controller_directive.ddc.js"}');
  // Exports:
  return {
    src__laminate__components__modal__modal_controller_directive: src__laminate__components__modal__modal_controller_directive
  };
});

//# sourceMappingURL=modal_controller_directive.ddc.js.map
