define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const model__formatters__formatter = Object.create(_root);
  const _is_Formatter_default = Symbol('_is_Formatter_default');
  model__formatters__formatter.Formatter$ = dart.generic(T => {
    class Formatter extends core.Object {}
    (Formatter.new = function() {
    }).prototype = Formatter.prototype;
    dart.addTypeTests(Formatter);
    Formatter.prototype[_is_Formatter_default] = true;
    return Formatter;
  });
  model__formatters__formatter.Formatter = model__formatters__formatter.Formatter$();
  dart.addTypeTests(model__formatters__formatter.Formatter, _is_Formatter_default);
  dart.trackLibraries("packages/angular_components/model/formatters/formatter.ddc", {
    "package:angular_components/model/formatters/formatter.dart": model__formatters__formatter
  }, '{"version":3,"sourceRoot":"","sources":["formatter.dart"],"names":[],"mappings":";;;;;;;;;;;IAOA","file":"formatter.ddc.js"}');
  // Exports:
  return {
    model__formatters__formatter: model__formatters__formatter
  };
});

//# sourceMappingURL=formatter.ddc.js.map
