define(['dart_sdk', 'packages/angular_components/material_datepicker/material_calendar_picker.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular/src/core/linker/element_ref', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular/src/core/di/opaque_token', 'packages/quiver/time', 'packages/angular/src/di/reflector', 'packages/angular_components/src/material_datepicker/calendar_listener.template', 'packages/angular_components/src/material_datepicker/enum_parsing.template', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template'], function(dart_sdk, material_calendar_picker$46scss$46css, view_type, constants, view, app_view_utils, app_view, ng_for, element_ref, material_calendar_picker, opaque_token, time, reflector, calendar_listener, enum_parsing, angular, calendar, module, date, observable, properties, feature_detector) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_calendar_picker$46scss$46css$46shim = material_calendar_picker$46scss$46css.material_datepicker__material_calendar_picker$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const material_datepicker__material_calendar_picker = material_calendar_picker.material_datepicker__material_calendar_picker;
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
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const utils__browser__feature_detector__feature_detector$46template = feature_detector.utils__browser__feature_detector__feature_detector$46template;
  const _root = Object.create(null);
  const material_datepicker__material_calendar_picker$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialCalendarPickerComponent = () => (AppViewOfMaterialCalendarPickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let AppViewAndintToAppViewOfMaterialCalendarPickerComponent = () => (AppViewAndintToAppViewOfMaterialCalendarPickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialCalendarPickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfMaterialCalendarPickerComponent = () => (ComponentRefOfMaterialCalendarPickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialCalendarPickerComponent = () => (ComponentFactoryOfMaterialCalendarPickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__material_calendar_picker$46template, {
    /*material_datepicker__material_calendar_picker$46template.styles$MaterialCalendarPickerComponent*/get styles$MaterialCalendarPickerComponent() {
      return dart.constList([material_datepicker__material_calendar_picker$46scss$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_container_1_0_isDirty = Symbol('_query_container_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0 = class ViewMaterialCalendarPickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'header', parentRenderNode);
      this[_el_0].className = 'header';
      this.addShimE(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent1);
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_2].className = 'scroll-container';
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this[_el_3].className = 'calendar-container';
      this.addShimC(this[_el_3]);
      this.ctx.container = new src__core__linker__element_ref.ElementRef.new(this[_el_3]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.dayNames;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_1_9].ngDoCheck();
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let currVal_1 = this.ctx.compact;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateElemClass(this.rootEl, 'compact', currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new = function(parentView, parentIndex) {
    this[_query_container_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('material-calendar-picker'));
    let t = material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._renderType;
    t == null ? material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__material_calendar_picker$46template.styles$MaterialCalendarPickerComponent) : t;
    this.setupComponentType(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._renderType);
  }).prototype = material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0);
  dart.setMethodSignature(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__),
    [_query_container_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, {
    /*material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent0, AppViewAndintToAppViewOfMaterialCalendarPickerComponent());
  const _text_1 = Symbol('_text_1');
  material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1 = class _ViewMaterialCalendarPickerComponent1 extends src__core__linker__app_view.AppView$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_el_0].className = 'header-day';
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_name = core.String._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._renderType;
  }).prototype = material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.prototype;
  dart.addTypeTests(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1);
  dart.setMethodSignature(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1, () => ({
    __proto__: dart.getMethods(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1, () => ({
    __proto__: dart.getFields(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent1 = function(parentView, parentIndex) {
    return new material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent1, AppViewAndintToAppViewOfMaterialCalendarPickerComponent());
  dart.defineLazy(material_datepicker__material_calendar_picker$46template, {
    /*material_datepicker__material_calendar_picker$46template.styles$MaterialCalendarPickerComponentHost*/get styles$MaterialCalendarPickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialCalendarPickerComponent_0_5 = Symbol('_MaterialCalendarPickerComponent_0_5');
  let const$0;
  material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0 = class _ViewMaterialCalendarPickerComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialCalendarPickerComponent_0_5] = new material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.new(time$.Clock._check(this.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))), this.viewData.parentIndex, null)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), null);
      this[_compView_0].create(this[_MaterialCalendarPickerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialCalendarPickerComponent()).new(0, this, this.rootEl, this[_MaterialCalendarPickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent) && 0 === nodeIndex) {
        return this[_MaterialCalendarPickerComponent_0_5];
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
        this[_MaterialCalendarPickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (firstCheck) {
        this[_MaterialCalendarPickerComponent_0_5].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialCalendarPickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialCalendarPickerComponent_0_5] = null;
    material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0),
    [_MaterialCalendarPickerComponent_0_5]: dart.fieldType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)
  }));
  material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(material_datepicker__material_calendar_picker$46template, {
    /*material_datepicker__material_calendar_picker$46template.MaterialCalendarPickerComponentNgFactory*/get MaterialCalendarPickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialCalendarPickerComponent()).new('material-calendar-picker', material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponentHost0, material_datepicker__material_calendar_picker$46template._MaterialCalendarPickerComponentMetadata));
    },
    /*material_datepicker__material_calendar_picker$46template._MaterialCalendarPickerComponentMetadata*/get _MaterialCalendarPickerComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*material_datepicker__material_calendar_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_calendar_picker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_calendar_picker$46template._visited)) {
      return;
    }
    material_datepicker__material_calendar_picker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), material_datepicker__material_calendar_picker$46template.MaterialCalendarPickerComponentNgFactory);
    src__material_datepicker__calendar_listener$46template.initReflector();
    src__material_datepicker__enum_parsing$46template.initReflector();
    angular$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    model__date__date$46template.initReflector();
    model__observable__observable$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    utils__browser__feature_detector__feature_detector$46template.initReflector();
  };
  dart.fn(material_datepicker__material_calendar_picker$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/material_calendar_picker.template.ddc", {
    "package:angular_components/material_datepicker/material_calendar_picker.template.dart": material_datepicker__material_calendar_picker$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_calendar_picker.template.dart"],"names":[],"mappings":"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","file":"material_calendar_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_calendar_picker$46template: material_datepicker__material_calendar_picker$46template
  };
});

//# sourceMappingURL=material_calendar_picker.template.ddc.js.map
