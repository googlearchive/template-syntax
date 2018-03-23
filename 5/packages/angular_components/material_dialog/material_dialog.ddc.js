define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/model/action/async_action', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/src/core/change_detection/change_detector_ref', 'packages/angular_components/laminate/components/modal/modal'], function(dart_sdk, disposer, async_action, lifecycle_hooks, dom_service, change_detector_ref, modal) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__model__action__async_action = async_action.src__model__action__async_action;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const _root = Object.create(null);
  const material_dialog__material_dialog = Object.create(_root);
  const $scrollTop = dartx.scrollTop;
  const $scrollHeight = dartx.scrollHeight;
  let AsyncActionToNull = () => (AsyncActionToNull = dart.constFn(dart.fnType(core.Null, [src__model__action__async_action.AsyncAction])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _domService = Symbol('_domService');
  const _changeDetector = Symbol('_changeDetector');
  const _modal = Symbol('_modal');
  const _disposer = Symbol('_disposer');
  const _mainElement = Symbol('_mainElement');
  const _shouldShowHeader = Symbol('_shouldShowHeader');
  const _shouldShowFooter = Symbol('_shouldShowFooter');
  const _setHeaderFooterScrollBorder = Symbol('_setHeaderFooterScrollBorder');
  material_dialog__material_dialog.MaterialDialogComponent = class MaterialDialogComponent extends core.Object {
    get shouldShowTopScrollStroke() {
      return this[shouldShowTopScrollStroke];
    }
    set shouldShowTopScrollStroke(value) {
      this[shouldShowTopScrollStroke] = value;
    }
    get shouldShowBottomScrollStroke() {
      return this[shouldShowBottomScrollStroke];
    }
    set shouldShowBottomScrollStroke(value) {
      this[shouldShowBottomScrollStroke] = value;
    }
    set main(element) {
      this[_mainElement] = element;
      if (this[_modal] == null) return;
      this[_disposer].addStreamSubscription(src__model__action__async_action.AsyncAction, this[_modal].onOpen.listen(dart.fn(_ => {
        this[_setHeaderFooterScrollBorder]();
      }, AsyncActionToNull())));
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    set hideHeader(shouldHideHeader) {
      return this[_shouldShowHeader] = !dart.test(shouldHideHeader);
    }
    set hideFooter(shouldHideFooter) {
      return this[_shouldShowFooter] = !dart.test(shouldHideFooter);
    }
    get shouldShowHeader() {
      return this[_shouldShowHeader];
    }
    get shouldShowFooter() {
      return this[_shouldShowFooter];
    }
    get shouldShowScrollStrokes() {
      return this[shouldShowScrollStrokes];
    }
    set shouldShowScrollStrokes(value) {
      this[shouldShowScrollStrokes] = value;
    }
    onScroll() {
      return this[_setHeaderFooterScrollBorder]();
    }
    [_setHeaderFooterScrollBorder]() {
      if (!dart.test(this.shouldShowScrollStrokes)) return;
      this[_disposer].addDisposable(utils__disposer__disposer.Disposable, this[_domService].scheduleRead(dart.fn(() => {
        let shouldShowTopScrollStroke = dart.notNull(this[_mainElement][$scrollTop]) > 0 && this.error == null;
        let shouldShowBottomScrollStroke = dart.notNull(this[_mainElement].clientHeight) < dart.notNull(this[_mainElement][$scrollHeight]) && dart.notNull(this[_mainElement][$scrollTop]) < dart.notNull(this[_mainElement][$scrollHeight]) - dart.notNull(this[_mainElement].clientHeight);
        if (shouldShowTopScrollStroke !== this.shouldShowTopScrollStroke || shouldShowBottomScrollStroke !== this.shouldShowBottomScrollStroke) {
          this.shouldShowTopScrollStroke = shouldShowTopScrollStroke;
          this.shouldShowBottomScrollStroke = shouldShowBottomScrollStroke;
          this[_changeDetector].markForCheck();
          this[_changeDetector].detectChanges();
        }
      }, VoidToNull())));
    }
    ngAfterContentChecked() {
      this[_setHeaderFooterScrollBorder]();
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (material_dialog__material_dialog.MaterialDialogComponent.new = function(domService, changeDetector, modal) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_mainElement] = null;
    this[_shouldShowHeader] = true;
    this[_shouldShowFooter] = true;
    this[shouldShowTopScrollStroke] = false;
    this[shouldShowBottomScrollStroke] = false;
    this[error] = null;
    this[shouldShowScrollStrokes] = true;
    this[_domService] = domService;
    this[_changeDetector] = changeDetector;
    this[_modal] = modal;
  }).prototype = material_dialog__material_dialog.MaterialDialogComponent.prototype;
  dart.addTypeTests(material_dialog__material_dialog.MaterialDialogComponent);
  const shouldShowTopScrollStroke = Symbol("MaterialDialogComponent.shouldShowTopScrollStroke");
  const shouldShowBottomScrollStroke = Symbol("MaterialDialogComponent.shouldShowBottomScrollStroke");
  const error = Symbol("MaterialDialogComponent.error");
  const shouldShowScrollStrokes = Symbol("MaterialDialogComponent.shouldShowScrollStrokes");
  material_dialog__material_dialog.MaterialDialogComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterContentChecked, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_dialog__material_dialog.MaterialDialogComponent, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog.MaterialDialogComponent.__proto__),
    onScroll: dart.fnType(dart.void, []),
    [_setHeaderFooterScrollBorder]: dart.fnType(dart.void, []),
    ngAfterContentChecked: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_dialog__material_dialog.MaterialDialogComponent, () => ({
    __proto__: dart.getGetters(material_dialog__material_dialog.MaterialDialogComponent.__proto__),
    shouldShowHeader: dart.fnType(core.bool, []),
    shouldShowFooter: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(material_dialog__material_dialog.MaterialDialogComponent, () => ({
    __proto__: dart.getSetters(material_dialog__material_dialog.MaterialDialogComponent.__proto__),
    main: dart.fnType(dart.void, [html.HtmlElement]),
    hideHeader: dart.fnType(dart.void, [core.bool]),
    hideFooter: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_dialog__material_dialog.MaterialDialogComponent, () => ({
    __proto__: dart.getFields(material_dialog__material_dialog.MaterialDialogComponent.__proto__),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_modal]: dart.finalFieldType(laminate__components__modal__modal.ModalComponent),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_mainElement]: dart.fieldType(html.HtmlElement),
    [_shouldShowHeader]: dart.fieldType(core.bool),
    [_shouldShowFooter]: dart.fieldType(core.bool),
    shouldShowTopScrollStroke: dart.fieldType(core.bool),
    shouldShowBottomScrollStroke: dart.fieldType(core.bool),
    error: dart.fieldType(core.String),
    shouldShowScrollStrokes: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_dialog/material_dialog.ddc", {
    "package:angular_components/material_dialog/material_dialog.dart": material_dialog__material_dialog
  }, '{"version":3,"sourceRoot":"","sources":["material_dialog.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;IA4GO;;;;;;IACA;;;;;;aAMI,OAAmB;AAC1B,wBAAY,GAAG,OAAO;AACtB,UAAI,YAAM,IAAI,MAAM;AACpB,qBAAS,sBAAsB,+CAAC,YAAM,OAAO,OAAO,CAAC,QAAC,CAAC;AACrD,0CAA4B;;IAEhC;IAIO;;;;;;mBAIQ,gBAAqB;YAChC,wBAAiB,GAAG,WAAC,gBAAgB;;mBAI1B,gBAAqB;YAChC,wBAAiB,GAAG,WAAC,gBAAgB;;;YAEZ,wBAAiB;;;YAEjB,wBAAiB;;IAMzC;;;;;;;YAEc,mCAA4B;IAAE;;AAG/C,qBAAK,4BAAuB,GAAE;AAC9B,qBAAS,cAAc,uCAAC,iBAAW,aAAa,CAAC;AAC/C,YAAI,4BACuB,AAAI,aAA3B,kBAAY,YAAU,IAAG,KAAK,UAAK,IAAI;AAC3C,YAAI,+BAC0B,AAA4B,aAAtD,kBAAY,aAAa,iBAAG,kBAAY,eAAa,KAC1B,aAAvB,kBAAY,YAAU,IACQ,aAA1B,kBAAY,eAAa,iBAAG,kBAAY,aAAa;AACjE,YAAI,yBAAyB,KAAI,8BAA8B,IAC3D,4BAA4B,KAAI,iCAAiC,EAAE;AACrE,wCAA8B,GAAG,yBAAyB;AAC1D,2CAAiC,GAAG,4BAA4B;AAChE,UACE,AAAE,kCAAY;UAGd,AAAE,mCAAa;;;IAGvB;;AAME,wCAA4B;IAC9B;;AAIE,qBAAS,QAAQ;IACnB;;2EArES,UAAW,EAAO,cAAe,EAAmB,KAAM;IAT7D,eAAS,GAAG,IAAI,0CAAgB;IAE1B,kBAAY;IACnB,uBAAiB,GAAG;IACpB,uBAAiB,GAAG;IACpB,+BAAyB,GAAG;IAC5B,kCAA4B,GAAG;IAgB7B,WAAK;IAoBP,6BAAuB,GAAG;IAjCtB,iBAAW,GAAX,UAAW;IAAO,qBAAe,GAAf,cAAe;IAAmB,YAAM,GAAN,KAAM;EAAC","file":"material_dialog.ddc.js"}');
  // Exports:
  return {
    material_dialog__material_dialog: material_dialog__material_dialog
  };
});

//# sourceMappingURL=material_dialog.ddc.js.map
