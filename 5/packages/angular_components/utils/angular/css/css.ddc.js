define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const utils__angular__css__css = Object.create(_root);
  const $startsWith = dartx.startsWith;
  let StringAndCssClassSetToString = () => (StringAndCssClassSetToString = dart.constFn(dart.fnType(core.String, [core.String, html.CssClassSet])))();
  utils__angular__css__css.constructEncapsulatedCss = function(className, classes) {
    let result = className != null ? className : '';
    for (let i of classes) {
      if (i[$startsWith]('_')) {
        result = result + dart.str` ${i}`;
      }
    }
    return result;
  };
  dart.fn(utils__angular__css__css.constructEncapsulatedCss, StringAndCssClassSetToString());
  dart.trackLibraries("packages/angular_components/utils/angular/css/css.ddc", {
    "package:angular_components/utils/angular/css/css.dart": utils__angular__css__css
  }, '{"version":3,"sourceRoot":"","sources":["css.dart"],"names":[],"mappings":";;;;;;;;;;+DAyBgC,SAAgB,EAAE,OAAmB;AACnE,QAAI,SAAS,SAAS,WAAT,SAAS,GAAI;AAC1B,aAAW,IAAK,QAAO,EAAE;AAEvB,UAAI,CAAC,aAAW,CAAC,MAAM;cAAM,GA7BjC,AA6B2B,MAAM,GAAI,YAAG,CAAC;;;AAEvC,UAAO,OAAM;EACf","file":"css.ddc.js"}');
  // Exports:
  return {
    utils__angular__css__css: utils__angular__css__css
  };
});

//# sourceMappingURL=css.ddc.js.map
