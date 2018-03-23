define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_components/material_datepicker/range', 'packages/quiver/time', 'packages/angular/di.template', 'packages/angular_components/material_datepicker/proto/date.pb.template', 'packages/angular_components/material_datepicker/proto/date_range.pb.template', 'packages/angular_components/model/date/date.template'], function(dart_sdk, reflector, range, time, di, date$46pb, date_range$46pb, date) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const material_datepicker__range = range.material_datepicker__range;
  const time$ = time.time;
  const di$46template = di.di$46template;
  const material_datepicker__proto__date$46pb$46template = date$46pb.material_datepicker__proto__date$46pb$46template;
  const material_datepicker__proto__date_range$46pb$46template = date_range$46pb.material_datepicker__proto__date_range$46pb$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const _root = Object.create(null);
  const material_datepicker__range$46template = Object.create(_root);
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(material_datepicker__range$46template, {
    /*material_datepicker__range$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  material_datepicker__range$46template.initReflector = function() {
    if (dart.test(material_datepicker__range$46template._visited)) {
      return;
    }
    material_datepicker__range$46template._visited = true;
    src__di__reflector.registerDependencies(material_datepicker__range.today, const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.yesterday, const$2 || (const$2 = dart.constList([const$1 || (const$1 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.thisWeek, const$4 || (const$4 = dart.constList([const$3 || (const$3 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.lastWeek, const$6 || (const$6 = dart.constList([const$5 || (const$5 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.last7Days, const$8 || (const$8 = dart.constList([const$7 || (const$7 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.last14Days, const$10 || (const$10 = dart.constList([const$9 || (const$9 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.thisMonth, const$12 || (const$12 = dart.constList([const$11 || (const$11 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.lastMonth, const$14 || (const$14 = dart.constList([const$13 || (const$13 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.thisBroadcastMonth, const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.lastBroadcastMonth, const$18 || (const$18 = dart.constList([const$17 || (const$17 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.last30Days, const$20 || (const$20 = dart.constList([const$19 || (const$19 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.thisYear, const$22 || (const$22 = dart.constList([const$21 || (const$21 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.lastYear, const$24 || (const$24 = dart.constList([const$23 || (const$23 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.thisQuarter, const$26 || (const$26 = dart.constList([const$25 || (const$25 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(material_datepicker__range.lastQuarter, const$28 || (const$28 = dart.constList([const$27 || (const$27 = dart.constList([dart.wrapType(time$.Clock)], core.Object))], ListOfObject())));
    di$46template.initReflector();
    material_datepicker__proto__date$46pb$46template.initReflector();
    material_datepicker__proto__date_range$46pb$46template.initReflector();
    model__date__date$46template.initReflector();
  };
  dart.fn(material_datepicker__range$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/material_datepicker/range.template.ddc", {
    "package:angular_components/material_datepicker/range.template.dart": material_datepicker__range$46template
  }, '{"version":3,"sourceRoot":"","sources":["range.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAoBI,8CAAQ;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAEb,kBAAI,8CAAQ,GAAE;AACZ;;AAEF,qDAAW;AAEX,IAAO,uCAAoB,CAAC,gCAAK,EAAE,sCACjC,oCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,oCAAS,EAAE,sCACrC,sCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,mCAAQ,EAAE,sCACpC,sCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,mCAAQ,EAAE,sCACpC,sCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,oCAAS,EAAE,sCACrC,sCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,qCAAU,EAAE,wCACtC,sCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,oCAAS,EAAE,wCACrC,wCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,oCAAS,EAAE,wCACrC,wCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,6CAAkB,EAAE,wCAC9C,wCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,6CAAkB,EAAE,wCAC9C,wCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,qCAAU,EAAE,wCACtC,wCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,mCAAQ,EAAE,wCACpC,wCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,mCAAQ,EAAE,wCACpC,wCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,sCAAW,EAAE,wCACvC,wCAAW,0BAAK;AAElB,IAAO,uCAAoB,CAAC,sCAAW,EAAE,wCACvC,wCAAW,0BAAK;AAElB,IAAM,2BAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,oEAAa;AACnB,IAAM,0CAAa;EACrB","file":"range.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__range$46template: material_datepicker__range$46template
  };
});

//# sourceMappingURL=range.template.ddc.js.map
