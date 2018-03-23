define(['dart_sdk', 'packages/angular_components/framework_stabilizers/testability', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, testability, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework_stabilizers__testability = testability.framework_stabilizers__testability;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const _root = Object.create(null);
  const utils__browser__dom_service__dom_service_webdriver_testability = Object.create(_root);
  let DomServiceToTestability = () => (DomServiceToTestability = dart.constFn(dart.fnType(framework_stabilizers__testability.Testability, [utils__browser__dom_service__dom_service.DomService])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  utils__browser__dom_service__dom_service_webdriver_testability.createDomServiceWebdriverTestability = function(domService) {
    if (dart.test(framework_stabilizers__testability.testabilitiesEnabled)) {
      return new utils__browser__dom_service__dom_service_webdriver_testability.DomServiceWebdriverTestability.__(domService);
    }
    return new framework_stabilizers__testability.NullTestability.new();
  };
  dart.fn(utils__browser__dom_service__dom_service_webdriver_testability.createDomServiceWebdriverTestability, DomServiceToTestability());
  const _domService = Symbol('_domService');
  utils__browser__dom_service__dom_service_webdriver_testability.DomServiceWebdriverTestability = class DomServiceWebdriverTestability extends framework_stabilizers__testability.AbstractTestability {
    get isStable() {
      return this[_domService].isStable;
    }
  };
  (utils__browser__dom_service__dom_service_webdriver_testability.DomServiceWebdriverTestability.__ = function(domService) {
    this[_domService] = domService;
    utils__browser__dom_service__dom_service_webdriver_testability.DomServiceWebdriverTestability.__proto__.new.call(this);
    this[_domService].onQueuesProcessed.listen(dart.fn(_ => this.checkStable(), dynamicTovoid()));
  }).prototype = utils__browser__dom_service__dom_service_webdriver_testability.DomServiceWebdriverTestability.prototype;
  dart.addTypeTests(utils__browser__dom_service__dom_service_webdriver_testability.DomServiceWebdriverTestability);
  dart.setGetterSignature(utils__browser__dom_service__dom_service_webdriver_testability.DomServiceWebdriverTestability, () => ({
    __proto__: dart.getGetters(utils__browser__dom_service__dom_service_webdriver_testability.DomServiceWebdriverTestability.__proto__),
    isStable: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(utils__browser__dom_service__dom_service_webdriver_testability.DomServiceWebdriverTestability, () => ({
    __proto__: dart.getFields(utils__browser__dom_service__dom_service_webdriver_testability.DomServiceWebdriverTestability.__proto__),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService)
  }));
  dart.trackLibraries("packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability.ddc", {
    "package:angular_components/utils/browser/dom_service/dom_service_webdriver_testability.dart": utils__browser__dom_service__dom_service_webdriver_testability
  }, '{"version":3,"sourceRoot":"","sources":["dom_service_webdriver_testability.dart"],"names":[],"mappings":";;;;;;;;;;;iHAOiD,UAAqB;AACpE,kBAAI,uDAAoB,GAAE;AACxB,YAAO,KAAI,gGAAgC,CAAC,UAAU;;AAExD,UAAO,KAAI,sDAAe;EAC5B;;;;;YAYuB,kBAAW,SAAS;;;+GALH,UAAW;IAAX,iBAAW,GAAX,UAAW;;AAC/C,qBAAW,kBAAkB,OAAO,CAAC,QAAC,CAAC,IAAK,gBAAW;EACzD","file":"dom_service_webdriver_testability.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_service__dom_service_webdriver_testability: utils__browser__dom_service__dom_service_webdriver_testability
  };
});

//# sourceMappingURL=dom_service_webdriver_testability.ddc.js.map
