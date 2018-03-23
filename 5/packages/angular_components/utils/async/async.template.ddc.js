define(['dart_sdk', 'packages/angular_components/src/utils/async/async_update_scheduler.template', 'packages/angular_components/src/utils/async/async_where.template', 'packages/angular_components/src/utils/async/debounce_stream.template', 'packages/angular_components/src/utils/async/disposable_future.template', 'packages/angular_components/src/utils/async/lazy_stream_controller.template', 'packages/angular_components/src/utils/async/priority_stream_iterator.template', 'packages/angular_components/src/utils/async/simple_stream.template', 'packages/angular_components/src/utils/async/throttle_stream.template', 'packages/angular_components/src/utils/async/zoned_async.template'], function(dart_sdk, async_update_scheduler, async_where, debounce_stream, disposable_future, lazy_stream_controller, priority_stream_iterator, simple_stream, throttle_stream, zoned_async) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils__async__async_update_scheduler$46template = async_update_scheduler.src__utils__async__async_update_scheduler$46template;
  const src__utils__async__async_where$46template = async_where.src__utils__async__async_where$46template;
  const src__utils__async__debounce_stream$46template = debounce_stream.src__utils__async__debounce_stream$46template;
  const src__utils__async__disposable_future$46template = disposable_future.src__utils__async__disposable_future$46template;
  const src__utils__async__lazy_stream_controller$46template = lazy_stream_controller.src__utils__async__lazy_stream_controller$46template;
  const src__utils__async__priority_stream_iterator$46template = priority_stream_iterator.src__utils__async__priority_stream_iterator$46template;
  const src__utils__async__simple_stream$46template = simple_stream.src__utils__async__simple_stream$46template;
  const src__utils__async__throttle_stream$46template = throttle_stream.src__utils__async__throttle_stream$46template;
  const src__utils__async__zoned_async$46template = zoned_async.src__utils__async__zoned_async$46template;
  const _root = Object.create(null);
  const utils__async__async$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(utils__async__async$46template, {
    /*utils__async__async$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__async__async$46template.initReflector = function() {
    if (dart.test(utils__async__async$46template._visited)) {
      return;
    }
    utils__async__async$46template._visited = true;
    src__utils__async__async_update_scheduler$46template.initReflector();
    src__utils__async__async_where$46template.initReflector();
    src__utils__async__debounce_stream$46template.initReflector();
    src__utils__async__disposable_future$46template.initReflector();
    src__utils__async__lazy_stream_controller$46template.initReflector();
    src__utils__async__priority_stream_iterator$46template.initReflector();
    src__utils__async__simple_stream$46template.initReflector();
    src__utils__async__throttle_stream$46template.initReflector();
    src__utils__async__zoned_async$46template.initReflector();
  };
  dart.fn(utils__async__async$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_components/utils/async/async.template.ddc", {
    "package:angular_components/utils/async/async.template.dart": utils__async__async$46template
  }, '{"version":3,"sourceRoot":"","sources":["async.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAiBI,uCAAQ;YAAG;;;;;AAEb,kBAAI,uCAAQ,GAAE;AACZ;;AAEF,8CAAW;AAEX,IAAM,kEAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,kEAAa;AACnB,IAAM,oEAAa;AACnB,IAAM,yDAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,uDAAa;EACrB","file":"async.template.ddc.js"}');
  // Exports:
  return {
    utils__async__async$46template: utils__async__async$46template
  };
});

//# sourceMappingURL=async.template.ddc.js.map
