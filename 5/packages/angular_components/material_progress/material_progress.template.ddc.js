define(['dart_sdk', 'packages/angular_components/material_progress/material_progress.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_progress/material_progress', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template'], function(dart_sdk, material_progress$46scss$46css, view_type, constants, view, app_view_utils, app_view, material_progress, reflector, angular, feature_detector) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_progress__material_progress$46scss$46css$46shim = material_progress$46scss$46css.material_progress__material_progress$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_progress__material_progress = material_progress.material_progress__material_progress;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const utils__browser__feature_detector__feature_detector$46template = feature_detector.utils__browser__feature_detector__feature_detector$46template;
  const _root = Object.create(null);
  const material_progress__material_progress$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialProgressComponent = () => (AppViewOfMaterialProgressComponent = dart.constFn(src__core__linker__app_view.AppView$(material_progress__material_progress.MaterialProgressComponent)))();
  let AppViewAndintToAppViewOfMaterialProgressComponent = () => (AppViewAndintToAppViewOfMaterialProgressComponent = dart.constFn(dart.fnType(AppViewOfMaterialProgressComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialProgressComponent = () => (ComponentRefOfMaterialProgressComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_progress__material_progress.MaterialProgressComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialProgressComponent = () => (ComponentFactoryOfMaterialProgressComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_progress__material_progress.MaterialProgressComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_progress__material_progress$46template, {
    /*material_progress__material_progress$46template.styles$MaterialProgressComponent*/get styles$MaterialProgressComponent() {
      return dart.constList([material_progress__material_progress$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_primary_1_0_isDirty = Symbol('_query_primary_1_0_isDirty');
  const _query_secondary_1_1_isDirty = Symbol('_query_secondary_1_1_isDirty');
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  let const$;
  material_progress__material_progress$46template.ViewMaterialProgressComponent0 = class ViewMaterialProgressComponent0 extends src__core__linker__app_view.AppView$(material_progress__material_progress.MaterialProgressComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'progress-container';
      this.createAttr(this[_el_0], 'role', 'progressbar');
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'secondary-progress';
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_2].className = 'active-progress';
      this.addShimC(this[_el_2]);
      this.ctx.primary = this[_el_2];
      this.ctx.secondary = this[_el_1];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.ariaValue;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(this[_el_0], 'aria-valuenow', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.indeterminate;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateClass(this[_el_0], 'indeterminate', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.useFallbackAnimation;
      if (!(this[_expr_2] == currVal_2)) {
        this.updateClass(this[_el_0], 'fallback', currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.min);
      if (!core.identical(this[_expr_3], currVal_3)) {
        this.setAttr(this[_el_0], 'aria-valuemin', currVal_3 == null ? null : dart.toString(currVal_3));
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = src__core__linker__app_view_utils.interpolate0(_ctx.max);
      if (!core.identical(this[_expr_4], currVal_4)) {
        this.setAttr(this[_el_0], 'aria-valuemax', currVal_4 == null ? null : dart.toString(currVal_4));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.secondaryTransform;
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_el_1].style[$setProperty]('transform', currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.primaryTransform;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_el_2].style[$setProperty]('transform', currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
    }
  };
  (material_progress__material_progress$46template.ViewMaterialProgressComponent0.new = function(parentView, parentIndex) {
    this[_query_primary_1_0_isDirty] = true;
    this[_query_secondary_1_1_isDirty] = true;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_progress__material_progress$46template.ViewMaterialProgressComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-progress'));
    let t = material_progress__material_progress$46template.ViewMaterialProgressComponent0._renderType;
    t == null ? material_progress__material_progress$46template.ViewMaterialProgressComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_progress__material_progress$46template.styles$MaterialProgressComponent) : t;
    this.setupComponentType(material_progress__material_progress$46template.ViewMaterialProgressComponent0._renderType);
  }).prototype = material_progress__material_progress$46template.ViewMaterialProgressComponent0.prototype;
  dart.addTypeTests(material_progress__material_progress$46template.ViewMaterialProgressComponent0);
  dart.setMethodSignature(material_progress__material_progress$46template.ViewMaterialProgressComponent0, () => ({
    __proto__: dart.getMethods(material_progress__material_progress$46template.ViewMaterialProgressComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_progress__material_progress.MaterialProgressComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_progress__material_progress$46template.ViewMaterialProgressComponent0, () => ({
    __proto__: dart.getFields(material_progress__material_progress$46template.ViewMaterialProgressComponent0.__proto__),
    [_query_primary_1_0_isDirty]: dart.fieldType(core.bool),
    [_query_secondary_1_1_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_progress__material_progress$46template.ViewMaterialProgressComponent0, {
    /*material_progress__material_progress$46template.ViewMaterialProgressComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_progress__material_progress$46template.viewFactory_MaterialProgressComponent0 = function(parentView, parentIndex) {
    return new material_progress__material_progress$46template.ViewMaterialProgressComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_progress__material_progress$46template.viewFactory_MaterialProgressComponent0, AppViewAndintToAppViewOfMaterialProgressComponent());
  dart.defineLazy(material_progress__material_progress$46template, {
    /*material_progress__material_progress$46template.styles$MaterialProgressComponentHost*/get styles$MaterialProgressComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialProgressComponent_0_5 = Symbol('_MaterialProgressComponent_0_5');
  material_progress__material_progress$46template._ViewMaterialProgressComponentHost0 = class _ViewMaterialProgressComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_progress__material_progress$46template.ViewMaterialProgressComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialProgressComponent_0_5] = new material_progress__material_progress.MaterialProgressComponent.new(null, this[_compView_0].ref, this.rootEl);
      this[_compView_0].create(this[_MaterialProgressComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialProgressComponent()).new(0, this, this.rootEl, this[_MaterialProgressComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_progress__material_progress.MaterialProgressComponent) && 0 === nodeIndex) {
        return this[_MaterialProgressComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialProgressComponent_0_5].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialProgressComponent_0_5].ngOnDestroy();
    }
  };
  (material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialProgressComponent_0_5] = null;
    material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.prototype;
  dart.addTypeTests(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0);
  dart.setMethodSignature(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0, () => ({
    __proto__: dart.getMethods(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0, () => ({
    __proto__: dart.getFields(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_progress__material_progress$46template.ViewMaterialProgressComponent0),
    [_MaterialProgressComponent_0_5]: dart.fieldType(material_progress__material_progress.MaterialProgressComponent)
  }));
  material_progress__material_progress$46template.viewFactory_MaterialProgressComponentHost0 = function(parentView, parentIndex) {
    return new material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_progress__material_progress$46template.viewFactory_MaterialProgressComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_progress__material_progress$46template, {
    /*material_progress__material_progress$46template.MaterialProgressComponentNgFactory*/get MaterialProgressComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialProgressComponent()).new('material-progress', material_progress__material_progress$46template.viewFactory_MaterialProgressComponentHost0, material_progress__material_progress$46template._MaterialProgressComponentMetadata));
    },
    /*material_progress__material_progress$46template._MaterialProgressComponentMetadata*/get _MaterialProgressComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_progress__material_progress$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_progress__material_progress$46template.initReflector = function() {
    if (dart.test(material_progress__material_progress$46template._visited)) {
      return;
    }
    material_progress__material_progress$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_progress__material_progress.MaterialProgressComponent), material_progress__material_progress$46template.MaterialProgressComponentNgFactory);
    angular$46template.initReflector();
    utils__browser__feature_detector__feature_detector$46template.initReflector();
  };
  dart.fn(material_progress__material_progress$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_progress/material_progress.template.ddc", {
    "package:angular_components/material_progress/material_progress.template.dart": material_progress__material_progress$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_progress.template.dart"],"names":[],"mappings":"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","file":"material_progress.template.ddc.js"}');
  // Exports:
  return {
    material_progress__material_progress$46template: material_progress__material_progress$46template
  };
});

//# sourceMappingURL=material_progress.template.ddc.js.map
