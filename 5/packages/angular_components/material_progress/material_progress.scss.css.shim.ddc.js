define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const material_progress__material_progress$46scss$46css$46shim = Object.create(_root);
  dart.defineLazy(material_progress__material_progress$46scss$46css$46shim, {
    /*material_progress__material_progress$46scss$46css$46shim.styles*/get styles() {
      return dart.constList(['._nghost-%COMP% { display:inline-block; width:100%; height:4px; } .progress-container._ngcontent-%COMP% { position:relative; height:100%; background-color:#e0e0e0; overflow:hidden; } ._nghost-%COMP%[dir=rtl] .progress-container._ngcontent-%COMP%,[dir=rtl] ._nghost-%COMP% .progress-container._ngcontent-%COMP% { transform:scaleX(-1); } .progress-container.indeterminate._ngcontent-%COMP% { background-color:#c6dafc; } .progress-container.indeterminate._ngcontent-%COMP% > .secondary-progress._ngcontent-%COMP% { background-color:#4285f4; } .active-progress._ngcontent-%COMP%,.secondary-progress._ngcontent-%COMP% { transform-origin:left center; transform:scaleX(0); position:absolute; top:0; transition:transform 218ms cubic-bezier(0.4, 0, 0.2, 1); right:0; bottom:0; left:0; will-change:transform; } .active-progress._ngcontent-%COMP% { background-color:#4285f4; } .secondary-progress._ngcontent-%COMP% { background-color:#a1c2fa; } .progress-container.indeterminate.fallback._ngcontent-%COMP% > .active-progress._ngcontent-%COMP% { animation-name:indeterminate-active-progress; animation-duration:2000ms; animation-iteration-count:infinite; animation-timing-function:linear; } .progress-container.indeterminate.fallback._ngcontent-%COMP% > .secondary-progress._ngcontent-%COMP% { animation-name:indeterminate-secondary-progress; animation-duration:2000ms; animation-iteration-count:infinite; animation-timing-function:linear; } @keyframes indeterminate-active-progress{ 0%{ transform:translate(0%) scaleX(0); } 25%{ transform:translate(0%) scaleX(0.5); } 50%{ transform:translate(25%) scaleX(0.75); } 75%{ transform:translate(100%) scaleX(0); } 100%{ transform:translate(100%) scaleX(0); } } @keyframes indeterminate-secondary-progress{ 0%{ transform:translate(0%) scaleX(0); } 60%{ transform:translate(0%) scaleX(0); } 80%{ transform:translate(0%) scaleX(0.6); } 100%{ transform:translate(100%) scaleX(0.1); } }'], dart.dynamic);
    }
  });
  dart.trackLibraries("packages/angular_components/material_progress/material_progress.scss.css.shim.ddc", {
    "package:angular_components/material_progress/material_progress.scss.css.shim.dart": material_progress__material_progress$46scss$46css$46shim
  }, '{"version":3,"sourceRoot":"","sources":["material_progress.scss.css.shim.dart"],"names":[],"mappings":";;;;;;;;MAGoB,+DAAM;YAAG,iBAAO","file":"material_progress.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    material_progress__material_progress$46scss$46css$46shim: material_progress__material_progress$46scss$46css$46shim
  };
});

//# sourceMappingURL=material_progress.scss.css.shim.ddc.js.map
