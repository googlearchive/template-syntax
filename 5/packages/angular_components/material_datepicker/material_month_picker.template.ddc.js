define(['dart_sdk', 'packages/angular_components/material_datepicker/material_month_picker.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/angular/src/core/di/opaque_token', 'packages/quiver/time', 'packages/angular/src/di/reflector', 'packages/angular_components/src/material_datepicker/calendar_listener.template', 'packages/angular_components/src/material_datepicker/enum_parsing.template', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template'], function(dart_sdk, material_month_picker$46scss$46css, view_type, constants, view, app_view_utils, app_view, material_month_picker, opaque_token, time, reflector, calendar_listener, enum_parsing, angular, calendar, module, date, observable) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_month_picker$46scss$46css$46shim = material_month_picker$46scss$46css.material_datepicker__material_month_picker$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const material_datepicker__material_month_picker = material_month_picker.material_datepicker__material_month_picker;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const time$ = time.time;
  const src__di__reflector = reflector.src__di__reflector;
  const src__material_datepicker__calendar_listener$46template = calendar_listener.src__material_datepicker__calendar_listener$46template;
  const src__material_datepicker__enum_parsing$46template = enum_parsing.src__material_datepicker__enum_parsing$46template;
  const angular$46template = angular.angular$46template;
  const material_datepicker__calendar$46template = calendar.material_datepicker__calendar$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const _root = Object.create(null);
  const material_datepicker__material_month_picker$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialMonthPickerComponent = () => (AppViewOfMaterialMonthPickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_month_picker.MaterialMonthPickerComponent)))();
  let AppViewAndintToAppViewOfMaterialMonthPickerComponent = () => (AppViewAndintToAppViewOfMaterialMonthPickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialMonthPickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialMonthPickerComponent = () => (ComponentRefOfMaterialMonthPickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_month_picker.MaterialMonthPickerComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialMonthPickerComponent = () => (ComponentFactoryOfMaterialMonthPickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_month_picker.MaterialMonthPickerComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__material_month_picker$46template, {
    /*material_datepicker__material_month_picker$46template.styles$MaterialMonthPickerComponent*/get styles$MaterialMonthPickerComponent() {
      return dart.constList([material_datepicker__material_month_picker$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_container_1_0_isDirty = Symbol('_query_container_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  let const$;
  material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0 = class ViewMaterialMonthPickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_month_picker.MaterialMonthPickerComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'scroll-container';
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'calendar-container';
      this.addShimC(this[_el_1]);
      this.ctx.container = this[_el_1];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.new = function(parentView, parentIndex) {
    this[_query_container_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_el_1] = null;
    material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-month-picker'));
    let t = material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0._renderType;
    t == null ? material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__material_month_picker$46template.styles$MaterialMonthPickerComponent) : t;
    this.setupComponentType(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0._renderType);
  }).prototype = material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0);
  dart.setMethodSignature(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_month_picker.MaterialMonthPickerComponent), [])
  }));
  dart.setFieldSignature(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.__proto__),
    [_query_container_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0, {
    /*material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__material_month_picker$46template.viewFactory_MaterialMonthPickerComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_month_picker$46template.viewFactory_MaterialMonthPickerComponent0, AppViewAndintToAppViewOfMaterialMonthPickerComponent());
  dart.defineLazy(material_datepicker__material_month_picker$46template, {
    /*material_datepicker__material_month_picker$46template.styles$MaterialMonthPickerComponentHost*/get styles$MaterialMonthPickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialMonthPickerComponent_0_5 = Symbol('_MaterialMonthPickerComponent_0_5');
  let const$0;
  material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0 = class _ViewMaterialMonthPickerComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialMonthPickerComponent_0_5] = new material_datepicker__material_month_picker.MaterialMonthPickerComponent.new(time$.Clock._check(this.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.viewData.parentIndex, null)), null);
      this[_compView_0].create(this[_MaterialMonthPickerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialMonthPickerComponent()).new(0, this, this.rootEl, this[_MaterialMonthPickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__material_month_picker.MaterialMonthPickerComponent) && 0 === nodeIndex) {
        return this[_MaterialMonthPickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialMonthPickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialMonthPickerComponent_0_5].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialMonthPickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialMonthPickerComponent_0_5] = null;
    material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0),
    [_MaterialMonthPickerComponent_0_5]: dart.fieldType(material_datepicker__material_month_picker.MaterialMonthPickerComponent)
  }));
  material_datepicker__material_month_picker$46template.viewFactory_MaterialMonthPickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_month_picker$46template.viewFactory_MaterialMonthPickerComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_datepicker__material_month_picker$46template, {
    /*material_datepicker__material_month_picker$46template.MaterialMonthPickerComponentNgFactory*/get MaterialMonthPickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialMonthPickerComponent()).new('material-month-picker', material_datepicker__material_month_picker$46template.viewFactory_MaterialMonthPickerComponentHost0, material_datepicker__material_month_picker$46template._MaterialMonthPickerComponentMetadata));
    },
    /*material_datepicker__material_month_picker$46template._MaterialMonthPickerComponentMetadata*/get _MaterialMonthPickerComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_datepicker__material_month_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_month_picker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_month_picker$46template._visited)) {
      return;
    }
    material_datepicker__material_month_picker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_month_picker.MaterialMonthPickerComponent), material_datepicker__material_month_picker$46template.MaterialMonthPickerComponentNgFactory);
    src__material_datepicker__calendar_listener$46template.initReflector();
    src__material_datepicker__enum_parsing$46template.initReflector();
    angular$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    model__date__date$46template.initReflector();
    model__observable__observable$46template.initReflector();
  };
  dart.fn(material_datepicker__material_month_picker$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/material_month_picker.template.ddc", {
    "package:angular_components/material_datepicker/material_month_picker.template.dart": material_datepicker__material_month_picker$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_month_picker.template.dart"],"names":[],"mappings":"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","file":"material_month_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_month_picker$46template: material_datepicker__material_month_picker$46template
  };
});

//# sourceMappingURL=material_month_picker.template.ddc.js.map
