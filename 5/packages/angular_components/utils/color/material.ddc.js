define(['dart_sdk', 'packages/angular_components/utils/color/color'], function(dart_sdk, color) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__color__color = color.utils__color__color;
  const _root = Object.create(null);
  const utils__color__material = Object.create(_root);
  dart.defineLazy(utils__color__material, {
    /*utils__color__material.transparent*/get transparent() {
      return dart.const(new utils__color__color.Color.rgba(0, 0, 0, 0));
    },
    /*utils__color__material.black*/get black() {
      return dart.const(new utils__color__color.Color.rgb(0, 0, 0));
    },
    /*utils__color__material.white*/get white() {
      return dart.const(new utils__color__color.Color.rgb(255, 255, 255));
    },
    /*utils__color__material.opacityStrong*/get opacityStrong() {
      return 0.87;
    },
    /*utils__color__material.opacityLight*/get opacityLight() {
      return 0.54;
    },
    /*utils__color__material.opacityLighter*/get opacityLighter() {
      return 0.38;
    },
    /*utils__color__material.opacityLightest*/get opacityLightest() {
      return 0.26;
    },
    /*utils__color__material.darkOpacityStrong*/get darkOpacityStrong() {
      return 1;
    },
    /*utils__color__material.darkOpacityLight*/get darkOpacityLight() {
      return 0.7;
    },
    /*utils__color__material.darkOpacityLighter*/get darkOpacityLighter() {
      return 0.5;
    },
    /*utils__color__material.darkOpacityLightest*/get darkOpacityLightest() {
      return 0.3;
    },
    /*utils__color__material.rippleOpacity*/get rippleOpacity() {
      return 0.16;
    },
    /*utils__color__material.dividerOpacity*/get dividerOpacity() {
      return 0.12;
    },
    /*utils__color__material.transparentBlack*/get transparentBlack() {
      return dart.const(new utils__color__color.Color.rgba(0, 0, 0, utils__color__material.opacityStrong));
    },
    /*utils__color__material.transparentWhite*/get transparentWhite() {
      return dart.const(new utils__color__color.Color.rgba(255, 255, 255, 1));
    },
    /*utils__color__material.lightTransparentBlack*/get lightTransparentBlack() {
      return dart.const(new utils__color__color.Color.rgba(0, 0, 0, utils__color__material.opacityLight));
    },
    /*utils__color__material.lightTransparentWhite*/get lightTransparentWhite() {
      return dart.const(new utils__color__color.Color.rgba(255, 255, 255, utils__color__material.darkOpacityLight));
    },
    /*utils__color__material.lighterTransparentBlack*/get lighterTransparentBlack() {
      return dart.const(new utils__color__color.Color.rgba(0, 0, 0, utils__color__material.opacityLighter));
    },
    /*utils__color__material.lighterTransparentWhite*/get lighterTransparentWhite() {
      return dart.const(new utils__color__color.Color.rgba(255, 255, 255, utils__color__material.darkOpacityLighter));
    },
    /*utils__color__material.lightestTransparentBlack*/get lightestTransparentBlack() {
      return dart.const(new utils__color__color.Color.rgba(0, 0, 0, utils__color__material.opacityLightest));
    },
    /*utils__color__material.lightestTransparentWhite*/get lightestTransparentWhite() {
      return dart.const(new utils__color__color.Color.rgba(255, 255, 255, utils__color__material.darkOpacityLightest));
    },
    /*utils__color__material.borderLight*/get borderLight() {
      return dart.const(new utils__color__color.Color.rgba(0, 0, 0, utils__color__material.dividerOpacity));
    },
    /*utils__color__material.borderDark*/get borderDark() {
      return dart.const(new utils__color__color.Color.rgba(255, 255, 255, utils__color__material.dividerOpacity));
    },
    /*utils__color__material.borderDottedLight*/get borderDottedLight() {
      return utils__color__material.lightestTransparentBlack;
    },
    /*utils__color__material.textPrimary*/get textPrimary() {
      return utils__color__material.transparentBlack;
    },
    /*utils__color__material.textSecondary*/get textSecondary() {
      return utils__color__material.lightTransparentBlack;
    },
    /*utils__color__material.textHint*/get textHint() {
      return utils__color__material.lighterTransparentBlack;
    },
    /*utils__color__material.textDisabled*/get textDisabled() {
      return utils__color__material.lighterTransparentBlack;
    },
    /*utils__color__material.textDivider*/get textDivider() {
      return utils__color__material.borderLight;
    },
    /*utils__color__material.textDarkPrimary*/get textDarkPrimary() {
      return utils__color__material.transparentWhite;
    },
    /*utils__color__material.textDarkSecondary*/get textDarkSecondary() {
      return utils__color__material.lightTransparentWhite;
    },
    /*utils__color__material.textDarkHint*/get textDarkHint() {
      return utils__color__material.lighterTransparentWhite;
    },
    /*utils__color__material.textDarkDisabled*/get textDarkDisabled() {
      return utils__color__material.lighterTransparentWhite;
    },
    /*utils__color__material.textDarkDivider*/get textDarkDivider() {
      return utils__color__material.borderDark;
    },
    /*utils__color__material.iconFocused*/get iconFocused() {
      return utils__color__material.transparentBlack;
    },
    /*utils__color__material.icon*/get icon() {
      return utils__color__material.lightTransparentBlack;
    },
    /*utils__color__material.iconInactive*/get iconInactive() {
      return utils__color__material.lighterTransparentBlack;
    },
    /*utils__color__material.iconDarkFocused*/get iconDarkFocused() {
      return utils__color__material.transparentWhite;
    },
    /*utils__color__material.iconDark*/get iconDark() {
      return utils__color__material.lightTransparentWhite;
    },
    /*utils__color__material.iconDarkInactive*/get iconDarkInactive() {
      return utils__color__material.lighterTransparentWhite;
    },
    /*utils__color__material.scrollbarThumb*/get scrollbarThumb() {
      return utils__color__material.lightestTransparentBlack;
    },
    /*utils__color__material.scrollbarBackground*/get scrollbarBackground() {
      return dart.const(new utils__color__color.Color.rgba(0, 0, 0, 0));
    },
    /*utils__color__material.scrollbarBackgroundHover*/get scrollbarBackgroundHover() {
      return dart.const(new utils__color__color.Color.rgba(0, 0, 0, 0.12));
    },
    /*utils__color__material.red50*/get red50() {
      return dart.const(new utils__color__color.Color.rgb(251, 233, 231));
    },
    /*utils__color__material.red100*/get red100() {
      return dart.const(new utils__color__color.Color.rgb(244, 199, 195));
    },
    /*utils__color__material.red200*/get red200() {
      return dart.const(new utils__color__color.Color.rgb(237, 162, 155));
    },
    /*utils__color__material.red300*/get red300() {
      return dart.const(new utils__color__color.Color.rgb(230, 124, 115));
    },
    /*utils__color__material.red400*/get red400() {
      return dart.const(new utils__color__color.Color.rgb(224, 96, 85));
    },
    /*utils__color__material.red500*/get red500() {
      return dart.const(new utils__color__color.Color.rgb(219, 68, 55));
    },
    /*utils__color__material.red600*/get red600() {
      return dart.const(new utils__color__color.Color.rgb(210, 63, 49));
    },
    /*utils__color__material.red700*/get red700() {
      return dart.const(new utils__color__color.Color.rgb(197, 57, 41));
    },
    /*utils__color__material.red800*/get red800() {
      return dart.const(new utils__color__color.Color.rgb(185, 50, 33));
    },
    /*utils__color__material.red900*/get red900() {
      return dart.const(new utils__color__color.Color.rgb(165, 39, 20));
    },
    /*utils__color__material.redA100*/get redA100() {
      return dart.const(new utils__color__color.Color.rgb(255, 138, 128));
    },
    /*utils__color__material.redA200*/get redA200() {
      return dart.const(new utils__color__color.Color.rgb(255, 82, 82));
    },
    /*utils__color__material.redA400*/get redA400() {
      return dart.const(new utils__color__color.Color.rgb(255, 23, 68));
    },
    /*utils__color__material.redA700*/get redA700() {
      return dart.const(new utils__color__color.Color.rgb(213, 0, 0));
    },
    /*utils__color__material.red*/get red() {
      return utils__color__material.red500;
    },
    /*utils__color__material.pink50*/get pink50() {
      return dart.const(new utils__color__color.Color.rgb(252, 228, 236));
    },
    /*utils__color__material.pink100*/get pink100() {
      return dart.const(new utils__color__color.Color.rgb(248, 187, 208));
    },
    /*utils__color__material.pink200*/get pink200() {
      return dart.const(new utils__color__color.Color.rgb(244, 143, 177));
    },
    /*utils__color__material.pink300*/get pink300() {
      return dart.const(new utils__color__color.Color.rgb(240, 98, 146));
    },
    /*utils__color__material.pink400*/get pink400() {
      return dart.const(new utils__color__color.Color.rgb(236, 64, 122));
    },
    /*utils__color__material.pink500*/get pink500() {
      return dart.const(new utils__color__color.Color.rgb(233, 30, 99));
    },
    /*utils__color__material.pink600*/get pink600() {
      return dart.const(new utils__color__color.Color.rgb(216, 27, 96));
    },
    /*utils__color__material.pink700*/get pink700() {
      return dart.const(new utils__color__color.Color.rgb(194, 24, 91));
    },
    /*utils__color__material.pink800*/get pink800() {
      return dart.const(new utils__color__color.Color.rgb(173, 20, 87));
    },
    /*utils__color__material.pink900*/get pink900() {
      return dart.const(new utils__color__color.Color.rgb(136, 14, 79));
    },
    /*utils__color__material.pinkA100*/get pinkA100() {
      return dart.const(new utils__color__color.Color.rgb(255, 128, 171));
    },
    /*utils__color__material.pinkA200*/get pinkA200() {
      return dart.const(new utils__color__color.Color.rgb(255, 64, 129));
    },
    /*utils__color__material.pinkA400*/get pinkA400() {
      return dart.const(new utils__color__color.Color.rgb(245, 0, 87));
    },
    /*utils__color__material.pinkA700*/get pinkA700() {
      return dart.const(new utils__color__color.Color.rgb(197, 17, 98));
    },
    /*utils__color__material.pink*/get pink() {
      return utils__color__material.pink500;
    },
    /*utils__color__material.purple50*/get purple50() {
      return dart.const(new utils__color__color.Color.rgb(243, 229, 245));
    },
    /*utils__color__material.purple100*/get purple100() {
      return dart.const(new utils__color__color.Color.rgb(225, 190, 231));
    },
    /*utils__color__material.purple200*/get purple200() {
      return dart.const(new utils__color__color.Color.rgb(206, 147, 216));
    },
    /*utils__color__material.purple300*/get purple300() {
      return dart.const(new utils__color__color.Color.rgb(186, 104, 200));
    },
    /*utils__color__material.purple400*/get purple400() {
      return dart.const(new utils__color__color.Color.rgb(171, 71, 188));
    },
    /*utils__color__material.purple500*/get purple500() {
      return dart.const(new utils__color__color.Color.rgb(156, 39, 176));
    },
    /*utils__color__material.purple600*/get purple600() {
      return dart.const(new utils__color__color.Color.rgb(142, 36, 170));
    },
    /*utils__color__material.purple700*/get purple700() {
      return dart.const(new utils__color__color.Color.rgb(123, 31, 162));
    },
    /*utils__color__material.purple800*/get purple800() {
      return dart.const(new utils__color__color.Color.rgb(106, 27, 154));
    },
    /*utils__color__material.purple900*/get purple900() {
      return dart.const(new utils__color__color.Color.rgb(74, 20, 140));
    },
    /*utils__color__material.purpleA100*/get purpleA100() {
      return dart.const(new utils__color__color.Color.rgb(234, 128, 252));
    },
    /*utils__color__material.purpleA200*/get purpleA200() {
      return dart.const(new utils__color__color.Color.rgb(224, 64, 251));
    },
    /*utils__color__material.purpleA400*/get purpleA400() {
      return dart.const(new utils__color__color.Color.rgb(213, 0, 249));
    },
    /*utils__color__material.purpleA700*/get purpleA700() {
      return dart.const(new utils__color__color.Color.rgb(170, 0, 255));
    },
    /*utils__color__material.purple*/get purple() {
      return utils__color__material.purple500;
    },
    /*utils__color__material.deepPurple50*/get deepPurple50() {
      return dart.const(new utils__color__color.Color.rgb(237, 231, 246));
    },
    /*utils__color__material.deepPurple100*/get deepPurple100() {
      return dart.const(new utils__color__color.Color.rgb(209, 196, 233));
    },
    /*utils__color__material.deepPurple200*/get deepPurple200() {
      return dart.const(new utils__color__color.Color.rgb(179, 157, 219));
    },
    /*utils__color__material.deepPurple300*/get deepPurple300() {
      return dart.const(new utils__color__color.Color.rgb(149, 117, 205));
    },
    /*utils__color__material.deepPurple400*/get deepPurple400() {
      return dart.const(new utils__color__color.Color.rgb(126, 87, 194));
    },
    /*utils__color__material.deepPurple500*/get deepPurple500() {
      return dart.const(new utils__color__color.Color.rgb(103, 58, 183));
    },
    /*utils__color__material.deepPurple600*/get deepPurple600() {
      return dart.const(new utils__color__color.Color.rgb(94, 53, 177));
    },
    /*utils__color__material.deepPurple700*/get deepPurple700() {
      return dart.const(new utils__color__color.Color.rgb(81, 45, 168));
    },
    /*utils__color__material.deepPurple800*/get deepPurple800() {
      return dart.const(new utils__color__color.Color.rgb(69, 39, 160));
    },
    /*utils__color__material.deepPurple900*/get deepPurple900() {
      return dart.const(new utils__color__color.Color.rgb(49, 27, 146));
    },
    /*utils__color__material.deepPurpleA100*/get deepPurpleA100() {
      return dart.const(new utils__color__color.Color.rgb(179, 136, 255));
    },
    /*utils__color__material.deepPurpleA200*/get deepPurpleA200() {
      return dart.const(new utils__color__color.Color.rgb(124, 77, 255));
    },
    /*utils__color__material.deepPurpleA400*/get deepPurpleA400() {
      return dart.const(new utils__color__color.Color.rgb(101, 31, 255));
    },
    /*utils__color__material.deepPurpleA700*/get deepPurpleA700() {
      return dart.const(new utils__color__color.Color.rgb(98, 0, 234));
    },
    /*utils__color__material.deepPurple*/get deepPurple() {
      return utils__color__material.deepPurple500;
    },
    /*utils__color__material.indigo50*/get indigo50() {
      return dart.const(new utils__color__color.Color.rgb(232, 234, 246));
    },
    /*utils__color__material.indigo100*/get indigo100() {
      return dart.const(new utils__color__color.Color.rgb(197, 202, 233));
    },
    /*utils__color__material.indigo200*/get indigo200() {
      return dart.const(new utils__color__color.Color.rgb(159, 168, 218));
    },
    /*utils__color__material.indigo300*/get indigo300() {
      return dart.const(new utils__color__color.Color.rgb(121, 134, 203));
    },
    /*utils__color__material.indigo400*/get indigo400() {
      return dart.const(new utils__color__color.Color.rgb(92, 107, 192));
    },
    /*utils__color__material.indigo500*/get indigo500() {
      return dart.const(new utils__color__color.Color.rgb(63, 81, 181));
    },
    /*utils__color__material.indigo600*/get indigo600() {
      return dart.const(new utils__color__color.Color.rgb(57, 73, 171));
    },
    /*utils__color__material.indigo700*/get indigo700() {
      return dart.const(new utils__color__color.Color.rgb(48, 63, 159));
    },
    /*utils__color__material.indigo800*/get indigo800() {
      return dart.const(new utils__color__color.Color.rgb(40, 53, 147));
    },
    /*utils__color__material.indigo900*/get indigo900() {
      return dart.const(new utils__color__color.Color.rgb(26, 35, 126));
    },
    /*utils__color__material.indigoA100*/get indigoA100() {
      return dart.const(new utils__color__color.Color.rgb(140, 158, 255));
    },
    /*utils__color__material.indigoA200*/get indigoA200() {
      return dart.const(new utils__color__color.Color.rgb(83, 109, 254));
    },
    /*utils__color__material.indigoA400*/get indigoA400() {
      return dart.const(new utils__color__color.Color.rgb(61, 90, 254));
    },
    /*utils__color__material.indigoA700*/get indigoA700() {
      return dart.const(new utils__color__color.Color.rgb(48, 79, 254));
    },
    /*utils__color__material.indigo*/get indigo() {
      return utils__color__material.indigo500;
    },
    /*utils__color__material.blue50*/get blue50() {
      return dart.const(new utils__color__color.Color.rgb(232, 240, 254));
    },
    /*utils__color__material.blue100*/get blue100() {
      return dart.const(new utils__color__color.Color.rgb(198, 218, 252));
    },
    /*utils__color__material.blue200*/get blue200() {
      return dart.const(new utils__color__color.Color.rgb(161, 194, 250));
    },
    /*utils__color__material.blue300*/get blue300() {
      return dart.const(new utils__color__color.Color.rgb(123, 170, 247));
    },
    /*utils__color__material.blue400*/get blue400() {
      return dart.const(new utils__color__color.Color.rgb(94, 151, 246));
    },
    /*utils__color__material.blue500*/get blue500() {
      return dart.const(new utils__color__color.Color.rgb(66, 133, 244));
    },
    /*utils__color__material.blue600*/get blue600() {
      return dart.const(new utils__color__color.Color.rgb(59, 120, 231));
    },
    /*utils__color__material.blue700*/get blue700() {
      return dart.const(new utils__color__color.Color.rgb(51, 103, 214));
    },
    /*utils__color__material.blue800*/get blue800() {
      return dart.const(new utils__color__color.Color.rgb(42, 86, 198));
    },
    /*utils__color__material.blue900*/get blue900() {
      return dart.const(new utils__color__color.Color.rgb(28, 58, 169));
    },
    /*utils__color__material.blueA100*/get blueA100() {
      return dart.const(new utils__color__color.Color.rgb(130, 177, 255));
    },
    /*utils__color__material.blueA200*/get blueA200() {
      return dart.const(new utils__color__color.Color.rgb(68, 138, 255));
    },
    /*utils__color__material.blueA400*/get blueA400() {
      return dart.const(new utils__color__color.Color.rgb(41, 121, 255));
    },
    /*utils__color__material.blueA700*/get blueA700() {
      return dart.const(new utils__color__color.Color.rgb(41, 98, 255));
    },
    /*utils__color__material.blue*/get blue() {
      return utils__color__material.blue500;
    },
    /*utils__color__material.lightBlue50*/get lightBlue50() {
      return dart.const(new utils__color__color.Color.rgb(225, 245, 254));
    },
    /*utils__color__material.lightBlue100*/get lightBlue100() {
      return dart.const(new utils__color__color.Color.rgb(179, 229, 252));
    },
    /*utils__color__material.lightBlue200*/get lightBlue200() {
      return dart.const(new utils__color__color.Color.rgb(129, 212, 250));
    },
    /*utils__color__material.lightBlue300*/get lightBlue300() {
      return dart.const(new utils__color__color.Color.rgb(79, 195, 247));
    },
    /*utils__color__material.lightBlue400*/get lightBlue400() {
      return dart.const(new utils__color__color.Color.rgb(41, 182, 246));
    },
    /*utils__color__material.lightBlue500*/get lightBlue500() {
      return dart.const(new utils__color__color.Color.rgb(3, 169, 244));
    },
    /*utils__color__material.lightBlue600*/get lightBlue600() {
      return dart.const(new utils__color__color.Color.rgb(3, 155, 229));
    },
    /*utils__color__material.lightBlue700*/get lightBlue700() {
      return dart.const(new utils__color__color.Color.rgb(2, 136, 209));
    },
    /*utils__color__material.lightBlue800*/get lightBlue800() {
      return dart.const(new utils__color__color.Color.rgb(2, 119, 189));
    },
    /*utils__color__material.lightBlue900*/get lightBlue900() {
      return dart.const(new utils__color__color.Color.rgb(1, 87, 155));
    },
    /*utils__color__material.lightBlueA100*/get lightBlueA100() {
      return dart.const(new utils__color__color.Color.rgb(128, 216, 255));
    },
    /*utils__color__material.lightBlueA200*/get lightBlueA200() {
      return dart.const(new utils__color__color.Color.rgb(64, 196, 255));
    },
    /*utils__color__material.lightBlueA400*/get lightBlueA400() {
      return dart.const(new utils__color__color.Color.rgb(0, 176, 255));
    },
    /*utils__color__material.lightBlueA700*/get lightBlueA700() {
      return dart.const(new utils__color__color.Color.rgb(0, 145, 234));
    },
    /*utils__color__material.lightBlue*/get lightBlue() {
      return utils__color__material.lightBlue500;
    },
    /*utils__color__material.cyan50*/get cyan50() {
      return dart.const(new utils__color__color.Color.rgb(224, 247, 250));
    },
    /*utils__color__material.cyan100*/get cyan100() {
      return dart.const(new utils__color__color.Color.rgb(178, 235, 242));
    },
    /*utils__color__material.cyan200*/get cyan200() {
      return dart.const(new utils__color__color.Color.rgb(128, 222, 234));
    },
    /*utils__color__material.cyan300*/get cyan300() {
      return dart.const(new utils__color__color.Color.rgb(77, 208, 225));
    },
    /*utils__color__material.cyan400*/get cyan400() {
      return dart.const(new utils__color__color.Color.rgb(38, 198, 218));
    },
    /*utils__color__material.cyan500*/get cyan500() {
      return dart.const(new utils__color__color.Color.rgb(0, 188, 212));
    },
    /*utils__color__material.cyan600*/get cyan600() {
      return dart.const(new utils__color__color.Color.rgb(0, 172, 193));
    },
    /*utils__color__material.cyan700*/get cyan700() {
      return dart.const(new utils__color__color.Color.rgb(0, 151, 167));
    },
    /*utils__color__material.cyan800*/get cyan800() {
      return dart.const(new utils__color__color.Color.rgb(0, 131, 143));
    },
    /*utils__color__material.cyan900*/get cyan900() {
      return dart.const(new utils__color__color.Color.rgb(0, 96, 100));
    },
    /*utils__color__material.cyanA100*/get cyanA100() {
      return dart.const(new utils__color__color.Color.rgb(132, 255, 255));
    },
    /*utils__color__material.cyanA200*/get cyanA200() {
      return dart.const(new utils__color__color.Color.rgb(24, 255, 255));
    },
    /*utils__color__material.cyanA400*/get cyanA400() {
      return dart.const(new utils__color__color.Color.rgb(0, 229, 255));
    },
    /*utils__color__material.cyanA700*/get cyanA700() {
      return dart.const(new utils__color__color.Color.rgb(0, 184, 212));
    },
    /*utils__color__material.cyan*/get cyan() {
      return utils__color__material.cyan500;
    },
    /*utils__color__material.teal50*/get teal50() {
      return dart.const(new utils__color__color.Color.rgb(224, 242, 241));
    },
    /*utils__color__material.teal100*/get teal100() {
      return dart.const(new utils__color__color.Color.rgb(178, 223, 219));
    },
    /*utils__color__material.teal200*/get teal200() {
      return dart.const(new utils__color__color.Color.rgb(128, 203, 196));
    },
    /*utils__color__material.teal300*/get teal300() {
      return dart.const(new utils__color__color.Color.rgb(77, 182, 172));
    },
    /*utils__color__material.teal400*/get teal400() {
      return dart.const(new utils__color__color.Color.rgb(38, 166, 154));
    },
    /*utils__color__material.teal500*/get teal500() {
      return dart.const(new utils__color__color.Color.rgb(0, 150, 136));
    },
    /*utils__color__material.teal600*/get teal600() {
      return dart.const(new utils__color__color.Color.rgb(0, 137, 123));
    },
    /*utils__color__material.teal700*/get teal700() {
      return dart.const(new utils__color__color.Color.rgb(0, 121, 107));
    },
    /*utils__color__material.teal800*/get teal800() {
      return dart.const(new utils__color__color.Color.rgb(0, 105, 92));
    },
    /*utils__color__material.teal900*/get teal900() {
      return dart.const(new utils__color__color.Color.rgb(0, 77, 64));
    },
    /*utils__color__material.tealA100*/get tealA100() {
      return dart.const(new utils__color__color.Color.rgb(167, 255, 235));
    },
    /*utils__color__material.tealA200*/get tealA200() {
      return dart.const(new utils__color__color.Color.rgb(100, 255, 218));
    },
    /*utils__color__material.tealA400*/get tealA400() {
      return dart.const(new utils__color__color.Color.rgb(29, 233, 182));
    },
    /*utils__color__material.tealA700*/get tealA700() {
      return dart.const(new utils__color__color.Color.rgb(0, 191, 165));
    },
    /*utils__color__material.teal*/get teal() {
      return utils__color__material.teal500;
    },
    /*utils__color__material.green50*/get green50() {
      return dart.const(new utils__color__color.Color.rgb(226, 243, 235));
    },
    /*utils__color__material.green100*/get green100() {
      return dart.const(new utils__color__color.Color.rgb(183, 225, 205));
    },
    /*utils__color__material.green200*/get green200() {
      return dart.const(new utils__color__color.Color.rgb(135, 206, 172));
    },
    /*utils__color__material.green300*/get green300() {
      return dart.const(new utils__color__color.Color.rgb(87, 187, 138));
    },
    /*utils__color__material.green400*/get green400() {
      return dart.const(new utils__color__color.Color.rgb(51, 172, 113));
    },
    /*utils__color__material.green500*/get green500() {
      return dart.const(new utils__color__color.Color.rgb(15, 157, 88));
    },
    /*utils__color__material.green600*/get green600() {
      return dart.const(new utils__color__color.Color.rgb(13, 144, 79));
    },
    /*utils__color__material.green700*/get green700() {
      return dart.const(new utils__color__color.Color.rgb(11, 128, 67));
    },
    /*utils__color__material.green800*/get green800() {
      return dart.const(new utils__color__color.Color.rgb(9, 113, 56));
    },
    /*utils__color__material.green900*/get green900() {
      return dart.const(new utils__color__color.Color.rgb(5, 85, 36));
    },
    /*utils__color__material.greenA100*/get greenA100() {
      return dart.const(new utils__color__color.Color.rgb(185, 246, 202));
    },
    /*utils__color__material.greenA200*/get greenA200() {
      return dart.const(new utils__color__color.Color.rgb(105, 240, 174));
    },
    /*utils__color__material.greenA400*/get greenA400() {
      return dart.const(new utils__color__color.Color.rgb(0, 230, 118));
    },
    /*utils__color__material.greenA700*/get greenA700() {
      return dart.const(new utils__color__color.Color.rgb(0, 200, 83));
    },
    /*utils__color__material.green*/get green() {
      return utils__color__material.green500;
    },
    /*utils__color__material.lightGreen50*/get lightGreen50() {
      return dart.const(new utils__color__color.Color.rgb(241, 248, 233));
    },
    /*utils__color__material.lightGreen100*/get lightGreen100() {
      return dart.const(new utils__color__color.Color.rgb(220, 237, 200));
    },
    /*utils__color__material.lightGreen200*/get lightGreen200() {
      return dart.const(new utils__color__color.Color.rgb(197, 225, 165));
    },
    /*utils__color__material.lightGreen300*/get lightGreen300() {
      return dart.const(new utils__color__color.Color.rgb(174, 213, 129));
    },
    /*utils__color__material.lightGreen400*/get lightGreen400() {
      return dart.const(new utils__color__color.Color.rgb(156, 204, 101));
    },
    /*utils__color__material.lightGreen500*/get lightGreen500() {
      return dart.const(new utils__color__color.Color.rgb(139, 195, 74));
    },
    /*utils__color__material.lightGreen600*/get lightGreen600() {
      return dart.const(new utils__color__color.Color.rgb(124, 179, 66));
    },
    /*utils__color__material.lightGreen700*/get lightGreen700() {
      return dart.const(new utils__color__color.Color.rgb(104, 159, 56));
    },
    /*utils__color__material.lightGreen800*/get lightGreen800() {
      return dart.const(new utils__color__color.Color.rgb(85, 139, 47));
    },
    /*utils__color__material.lightGreen900*/get lightGreen900() {
      return dart.const(new utils__color__color.Color.rgb(51, 105, 30));
    },
    /*utils__color__material.lightGreenA100*/get lightGreenA100() {
      return dart.const(new utils__color__color.Color.rgb(204, 255, 144));
    },
    /*utils__color__material.lightGreenA200*/get lightGreenA200() {
      return dart.const(new utils__color__color.Color.rgb(178, 255, 89));
    },
    /*utils__color__material.lightGreenA400*/get lightGreenA400() {
      return dart.const(new utils__color__color.Color.rgb(118, 255, 3));
    },
    /*utils__color__material.lightGreenA700*/get lightGreenA700() {
      return dart.const(new utils__color__color.Color.rgb(100, 221, 23));
    },
    /*utils__color__material.lightGreen*/get lightGreen() {
      return utils__color__material.lightGreen500;
    },
    /*utils__color__material.lime50*/get lime50() {
      return dart.const(new utils__color__color.Color.rgb(249, 251, 231));
    },
    /*utils__color__material.lime100*/get lime100() {
      return dart.const(new utils__color__color.Color.rgb(240, 244, 195));
    },
    /*utils__color__material.lime200*/get lime200() {
      return dart.const(new utils__color__color.Color.rgb(230, 238, 156));
    },
    /*utils__color__material.lime300*/get lime300() {
      return dart.const(new utils__color__color.Color.rgb(220, 231, 117));
    },
    /*utils__color__material.lime400*/get lime400() {
      return dart.const(new utils__color__color.Color.rgb(212, 225, 87));
    },
    /*utils__color__material.lime500*/get lime500() {
      return dart.const(new utils__color__color.Color.rgb(205, 220, 57));
    },
    /*utils__color__material.lime600*/get lime600() {
      return dart.const(new utils__color__color.Color.rgb(192, 202, 51));
    },
    /*utils__color__material.lime700*/get lime700() {
      return dart.const(new utils__color__color.Color.rgb(175, 180, 43));
    },
    /*utils__color__material.lime800*/get lime800() {
      return dart.const(new utils__color__color.Color.rgb(158, 157, 36));
    },
    /*utils__color__material.lime900*/get lime900() {
      return dart.const(new utils__color__color.Color.rgb(130, 119, 23));
    },
    /*utils__color__material.limeA100*/get limeA100() {
      return dart.const(new utils__color__color.Color.rgb(244, 255, 129));
    },
    /*utils__color__material.limeA200*/get limeA200() {
      return dart.const(new utils__color__color.Color.rgb(238, 255, 65));
    },
    /*utils__color__material.limeA400*/get limeA400() {
      return dart.const(new utils__color__color.Color.rgb(198, 255, 0));
    },
    /*utils__color__material.limeA700*/get limeA700() {
      return dart.const(new utils__color__color.Color.rgb(174, 234, 0));
    },
    /*utils__color__material.lime*/get lime() {
      return utils__color__material.lime500;
    },
    /*utils__color__material.yellow50*/get yellow50() {
      return dart.const(new utils__color__color.Color.rgb(254, 246, 224));
    },
    /*utils__color__material.yellow100*/get yellow100() {
      return dart.const(new utils__color__color.Color.rgb(252, 232, 178));
    },
    /*utils__color__material.yellow200*/get yellow200() {
      return dart.const(new utils__color__color.Color.rgb(250, 218, 128));
    },
    /*utils__color__material.yellow300*/get yellow300() {
      return dart.const(new utils__color__color.Color.rgb(247, 203, 77));
    },
    /*utils__color__material.yellow400*/get yellow400() {
      return dart.const(new utils__color__color.Color.rgb(246, 191, 38));
    },
    /*utils__color__material.yellow500*/get yellow500() {
      return dart.const(new utils__color__color.Color.rgb(244, 180, 0));
    },
    /*utils__color__material.yellow600*/get yellow600() {
      return dart.const(new utils__color__color.Color.rgb(242, 166, 0));
    },
    /*utils__color__material.yellow700*/get yellow700() {
      return dart.const(new utils__color__color.Color.rgb(240, 147, 0));
    },
    /*utils__color__material.yellow800*/get yellow800() {
      return dart.const(new utils__color__color.Color.rgb(238, 129, 0));
    },
    /*utils__color__material.yellow900*/get yellow900() {
      return dart.const(new utils__color__color.Color.rgb(234, 97, 0));
    },
    /*utils__color__material.yellowA100*/get yellowA100() {
      return dart.const(new utils__color__color.Color.rgb(255, 222, 128));
    },
    /*utils__color__material.yellowA200*/get yellowA200() {
      return dart.const(new utils__color__color.Color.rgb(255, 205, 64));
    },
    /*utils__color__material.yellowA400*/get yellowA400() {
      return dart.const(new utils__color__color.Color.rgb(255, 188, 0));
    },
    /*utils__color__material.yellowA700*/get yellowA700() {
      return dart.const(new utils__color__color.Color.rgb(255, 158, 0));
    },
    /*utils__color__material.yellow*/get yellow() {
      return utils__color__material.yellow500;
    },
    /*utils__color__material.orange50*/get orange50() {
      return dart.const(new utils__color__color.Color.rgb(255, 243, 224));
    },
    /*utils__color__material.orange100*/get orange100() {
      return dart.const(new utils__color__color.Color.rgb(255, 224, 178));
    },
    /*utils__color__material.orange200*/get orange200() {
      return dart.const(new utils__color__color.Color.rgb(255, 204, 128));
    },
    /*utils__color__material.orange300*/get orange300() {
      return dart.const(new utils__color__color.Color.rgb(255, 183, 77));
    },
    /*utils__color__material.orange400*/get orange400() {
      return dart.const(new utils__color__color.Color.rgb(255, 167, 38));
    },
    /*utils__color__material.orange500*/get orange500() {
      return dart.const(new utils__color__color.Color.rgb(255, 152, 0));
    },
    /*utils__color__material.orange600*/get orange600() {
      return dart.const(new utils__color__color.Color.rgb(251, 140, 0));
    },
    /*utils__color__material.orange700*/get orange700() {
      return dart.const(new utils__color__color.Color.rgb(245, 124, 0));
    },
    /*utils__color__material.orange800*/get orange800() {
      return dart.const(new utils__color__color.Color.rgb(239, 108, 0));
    },
    /*utils__color__material.orange900*/get orange900() {
      return dart.const(new utils__color__color.Color.rgb(230, 81, 0));
    },
    /*utils__color__material.orangeA100*/get orangeA100() {
      return dart.const(new utils__color__color.Color.rgb(255, 209, 128));
    },
    /*utils__color__material.orangeA200*/get orangeA200() {
      return dart.const(new utils__color__color.Color.rgb(255, 171, 64));
    },
    /*utils__color__material.orangeA400*/get orangeA400() {
      return dart.const(new utils__color__color.Color.rgb(255, 145, 0));
    },
    /*utils__color__material.orangeA700*/get orangeA700() {
      return dart.const(new utils__color__color.Color.rgb(255, 109, 0));
    },
    /*utils__color__material.orange*/get orange() {
      return utils__color__material.orange500;
    },
    /*utils__color__material.deepOrange50*/get deepOrange50() {
      return dart.const(new utils__color__color.Color.rgb(251, 233, 231));
    },
    /*utils__color__material.deepOrange100*/get deepOrange100() {
      return dart.const(new utils__color__color.Color.rgb(255, 204, 188));
    },
    /*utils__color__material.deepOrange200*/get deepOrange200() {
      return dart.const(new utils__color__color.Color.rgb(255, 171, 145));
    },
    /*utils__color__material.deepOrange300*/get deepOrange300() {
      return dart.const(new utils__color__color.Color.rgb(255, 138, 101));
    },
    /*utils__color__material.deepOrange400*/get deepOrange400() {
      return dart.const(new utils__color__color.Color.rgb(255, 112, 67));
    },
    /*utils__color__material.deepOrange500*/get deepOrange500() {
      return dart.const(new utils__color__color.Color.rgb(255, 87, 34));
    },
    /*utils__color__material.deepOrange600*/get deepOrange600() {
      return dart.const(new utils__color__color.Color.rgb(244, 81, 30));
    },
    /*utils__color__material.deepOrange700*/get deepOrange700() {
      return dart.const(new utils__color__color.Color.rgb(230, 74, 25));
    },
    /*utils__color__material.deepOrange800*/get deepOrange800() {
      return dart.const(new utils__color__color.Color.rgb(216, 67, 21));
    },
    /*utils__color__material.deepOrange900*/get deepOrange900() {
      return dart.const(new utils__color__color.Color.rgb(191, 54, 12));
    },
    /*utils__color__material.deepOrangeA100*/get deepOrangeA100() {
      return dart.const(new utils__color__color.Color.rgb(255, 158, 128));
    },
    /*utils__color__material.deepOrangeA200*/get deepOrangeA200() {
      return dart.const(new utils__color__color.Color.rgb(255, 110, 64));
    },
    /*utils__color__material.deepOrangeA400*/get deepOrangeA400() {
      return dart.const(new utils__color__color.Color.rgb(255, 61, 0));
    },
    /*utils__color__material.deepOrangeA700*/get deepOrangeA700() {
      return dart.const(new utils__color__color.Color.rgb(221, 44, 0));
    },
    /*utils__color__material.deepOrange*/get deepOrange() {
      return utils__color__material.deepOrange500;
    },
    /*utils__color__material.brown50*/get brown50() {
      return dart.const(new utils__color__color.Color.rgb(239, 235, 233));
    },
    /*utils__color__material.brown100*/get brown100() {
      return dart.const(new utils__color__color.Color.rgb(215, 204, 200));
    },
    /*utils__color__material.brown200*/get brown200() {
      return dart.const(new utils__color__color.Color.rgb(188, 170, 164));
    },
    /*utils__color__material.brown300*/get brown300() {
      return dart.const(new utils__color__color.Color.rgb(161, 136, 127));
    },
    /*utils__color__material.brown400*/get brown400() {
      return dart.const(new utils__color__color.Color.rgb(141, 110, 99));
    },
    /*utils__color__material.brown500*/get brown500() {
      return dart.const(new utils__color__color.Color.rgb(121, 85, 72));
    },
    /*utils__color__material.brown600*/get brown600() {
      return dart.const(new utils__color__color.Color.rgb(109, 76, 65));
    },
    /*utils__color__material.brown700*/get brown700() {
      return dart.const(new utils__color__color.Color.rgb(93, 64, 55));
    },
    /*utils__color__material.brown800*/get brown800() {
      return dart.const(new utils__color__color.Color.rgb(78, 52, 46));
    },
    /*utils__color__material.brown900*/get brown900() {
      return dart.const(new utils__color__color.Color.rgb(62, 39, 35));
    },
    /*utils__color__material.brown*/get brown() {
      return utils__color__material.brown500;
    },
    /*utils__color__material.grey50*/get grey50() {
      return dart.const(new utils__color__color.Color.rgb(250, 250, 250));
    },
    /*utils__color__material.grey100*/get grey100() {
      return dart.const(new utils__color__color.Color.rgb(245, 245, 245));
    },
    /*utils__color__material.grey200*/get grey200() {
      return dart.const(new utils__color__color.Color.rgb(238, 238, 238));
    },
    /*utils__color__material.grey300*/get grey300() {
      return dart.const(new utils__color__color.Color.rgb(224, 224, 224));
    },
    /*utils__color__material.grey400*/get grey400() {
      return dart.const(new utils__color__color.Color.rgb(189, 189, 189));
    },
    /*utils__color__material.grey500*/get grey500() {
      return dart.const(new utils__color__color.Color.rgb(158, 158, 158));
    },
    /*utils__color__material.grey600*/get grey600() {
      return dart.const(new utils__color__color.Color.rgb(117, 117, 117));
    },
    /*utils__color__material.grey700*/get grey700() {
      return dart.const(new utils__color__color.Color.rgb(97, 97, 97));
    },
    /*utils__color__material.grey800*/get grey800() {
      return dart.const(new utils__color__color.Color.rgb(66, 66, 66));
    },
    /*utils__color__material.grey900*/get grey900() {
      return dart.const(new utils__color__color.Color.rgb(33, 33, 33));
    },
    /*utils__color__material.grey*/get grey() {
      return utils__color__material.grey500;
    },
    /*utils__color__material.gray50*/get gray50() {
      return utils__color__material.grey50;
    },
    /*utils__color__material.gray100*/get gray100() {
      return utils__color__material.grey100;
    },
    /*utils__color__material.gray200*/get gray200() {
      return utils__color__material.grey200;
    },
    /*utils__color__material.gray300*/get gray300() {
      return utils__color__material.grey300;
    },
    /*utils__color__material.gray400*/get gray400() {
      return utils__color__material.grey400;
    },
    /*utils__color__material.gray500*/get gray500() {
      return utils__color__material.grey500;
    },
    /*utils__color__material.gray600*/get gray600() {
      return utils__color__material.grey600;
    },
    /*utils__color__material.gray700*/get gray700() {
      return utils__color__material.grey700;
    },
    /*utils__color__material.gray800*/get gray800() {
      return utils__color__material.grey800;
    },
    /*utils__color__material.gray900*/get gray900() {
      return utils__color__material.grey900;
    },
    /*utils__color__material.gray*/get gray() {
      return utils__color__material.gray500;
    },
    /*utils__color__material.blueGrey50*/get blueGrey50() {
      return dart.const(new utils__color__color.Color.rgb(236, 239, 241));
    },
    /*utils__color__material.blueGrey100*/get blueGrey100() {
      return dart.const(new utils__color__color.Color.rgb(207, 216, 220));
    },
    /*utils__color__material.blueGrey200*/get blueGrey200() {
      return dart.const(new utils__color__color.Color.rgb(176, 190, 197));
    },
    /*utils__color__material.blueGrey300*/get blueGrey300() {
      return dart.const(new utils__color__color.Color.rgb(144, 164, 174));
    },
    /*utils__color__material.blueGrey400*/get blueGrey400() {
      return dart.const(new utils__color__color.Color.rgb(120, 144, 156));
    },
    /*utils__color__material.blueGrey500*/get blueGrey500() {
      return dart.const(new utils__color__color.Color.rgb(96, 125, 139));
    },
    /*utils__color__material.blueGrey600*/get blueGrey600() {
      return dart.const(new utils__color__color.Color.rgb(84, 110, 122));
    },
    /*utils__color__material.blueGrey700*/get blueGrey700() {
      return dart.const(new utils__color__color.Color.rgb(69, 90, 100));
    },
    /*utils__color__material.blueGrey800*/get blueGrey800() {
      return dart.const(new utils__color__color.Color.rgb(55, 71, 79));
    },
    /*utils__color__material.blueGrey900*/get blueGrey900() {
      return dart.const(new utils__color__color.Color.rgb(38, 50, 56));
    },
    /*utils__color__material.blueGrey*/get blueGrey() {
      return utils__color__material.blueGrey500;
    },
    /*utils__color__material.vanillaRed50*/get vanillaRed50() {
      return dart.const(new utils__color__color.Color.rgb(253, 224, 220));
    },
    /*utils__color__material.vanillaRed100*/get vanillaRed100() {
      return dart.const(new utils__color__color.Color.rgb(249, 189, 187));
    },
    /*utils__color__material.vanillaRed200*/get vanillaRed200() {
      return dart.const(new utils__color__color.Color.rgb(246, 153, 136));
    },
    /*utils__color__material.vanillaRed300*/get vanillaRed300() {
      return dart.const(new utils__color__color.Color.rgb(243, 108, 96));
    },
    /*utils__color__material.vanillaRed400*/get vanillaRed400() {
      return dart.const(new utils__color__color.Color.rgb(232, 78, 64));
    },
    /*utils__color__material.vanillaRed500*/get vanillaRed500() {
      return dart.const(new utils__color__color.Color.rgb(229, 28, 35));
    },
    /*utils__color__material.vanillaRed600*/get vanillaRed600() {
      return dart.const(new utils__color__color.Color.rgb(221, 25, 29));
    },
    /*utils__color__material.vanillaRed700*/get vanillaRed700() {
      return dart.const(new utils__color__color.Color.rgb(208, 23, 22));
    },
    /*utils__color__material.vanillaRed800*/get vanillaRed800() {
      return dart.const(new utils__color__color.Color.rgb(196, 20, 17));
    },
    /*utils__color__material.vanillaRed900*/get vanillaRed900() {
      return dart.const(new utils__color__color.Color.rgb(176, 18, 10));
    },
    /*utils__color__material.vanillaRedA100*/get vanillaRedA100() {
      return dart.const(new utils__color__color.Color.rgb(255, 121, 151));
    },
    /*utils__color__material.vanillaRedA200*/get vanillaRedA200() {
      return dart.const(new utils__color__color.Color.rgb(255, 81, 119));
    },
    /*utils__color__material.vanillaRedA400*/get vanillaRedA400() {
      return dart.const(new utils__color__color.Color.rgb(255, 45, 111));
    },
    /*utils__color__material.vanillaRedA700*/get vanillaRedA700() {
      return dart.const(new utils__color__color.Color.rgb(224, 0, 50));
    },
    /*utils__color__material.vanillaRed*/get vanillaRed() {
      return utils__color__material.vanillaRed500;
    },
    /*utils__color__material.vanillaGreen50*/get vanillaGreen50() {
      return dart.const(new utils__color__color.Color.rgb(208, 248, 206));
    },
    /*utils__color__material.vanillaGreen100*/get vanillaGreen100() {
      return dart.const(new utils__color__color.Color.rgb(163, 233, 164));
    },
    /*utils__color__material.vanillaGreen200*/get vanillaGreen200() {
      return dart.const(new utils__color__color.Color.rgb(114, 213, 114));
    },
    /*utils__color__material.vanillaGreen300*/get vanillaGreen300() {
      return dart.const(new utils__color__color.Color.rgb(66, 189, 65));
    },
    /*utils__color__material.vanillaGreen400*/get vanillaGreen400() {
      return dart.const(new utils__color__color.Color.rgb(43, 175, 43));
    },
    /*utils__color__material.vanillaGreen500*/get vanillaGreen500() {
      return dart.const(new utils__color__color.Color.rgb(37, 155, 36));
    },
    /*utils__color__material.vanillaGreen600*/get vanillaGreen600() {
      return dart.const(new utils__color__color.Color.rgb(10, 143, 8));
    },
    /*utils__color__material.vanillaGreen700*/get vanillaGreen700() {
      return dart.const(new utils__color__color.Color.rgb(10, 126, 7));
    },
    /*utils__color__material.vanillaGreen800*/get vanillaGreen800() {
      return dart.const(new utils__color__color.Color.rgb(5, 111, 0));
    },
    /*utils__color__material.vanillaGreen900*/get vanillaGreen900() {
      return dart.const(new utils__color__color.Color.rgb(13, 83, 2));
    },
    /*utils__color__material.vanillaGreenA100*/get vanillaGreenA100() {
      return dart.const(new utils__color__color.Color.rgb(162, 247, 141));
    },
    /*utils__color__material.vanillaGreenA200*/get vanillaGreenA200() {
      return dart.const(new utils__color__color.Color.rgb(90, 241, 88));
    },
    /*utils__color__material.vanillaGreenA400*/get vanillaGreenA400() {
      return dart.const(new utils__color__color.Color.rgb(20, 231, 21));
    },
    /*utils__color__material.vanillaGreenA700*/get vanillaGreenA700() {
      return dart.const(new utils__color__color.Color.rgb(18, 199, 0));
    },
    /*utils__color__material.vanillaGreen*/get vanillaGreen() {
      return utils__color__material.vanillaGreen500;
    },
    /*utils__color__material.vanillaBlue50*/get vanillaBlue50() {
      return dart.const(new utils__color__color.Color.rgb(231, 233, 253));
    },
    /*utils__color__material.vanillaBlue100*/get vanillaBlue100() {
      return dart.const(new utils__color__color.Color.rgb(208, 217, 255));
    },
    /*utils__color__material.vanillaBlue200*/get vanillaBlue200() {
      return dart.const(new utils__color__color.Color.rgb(175, 191, 255));
    },
    /*utils__color__material.vanillaBlue300*/get vanillaBlue300() {
      return dart.const(new utils__color__color.Color.rgb(145, 167, 255));
    },
    /*utils__color__material.vanillaBlue400*/get vanillaBlue400() {
      return dart.const(new utils__color__color.Color.rgb(115, 143, 254));
    },
    /*utils__color__material.vanillaBlue500*/get vanillaBlue500() {
      return dart.const(new utils__color__color.Color.rgb(86, 119, 252));
    },
    /*utils__color__material.vanillaBlue600*/get vanillaBlue600() {
      return dart.const(new utils__color__color.Color.rgb(78, 108, 239));
    },
    /*utils__color__material.vanillaBlue700*/get vanillaBlue700() {
      return dart.const(new utils__color__color.Color.rgb(69, 94, 222));
    },
    /*utils__color__material.vanillaBlue800*/get vanillaBlue800() {
      return dart.const(new utils__color__color.Color.rgb(59, 80, 206));
    },
    /*utils__color__material.vanillaBlue900*/get vanillaBlue900() {
      return dart.const(new utils__color__color.Color.rgb(42, 54, 177));
    },
    /*utils__color__material.vanillaBlueA100*/get vanillaBlueA100() {
      return dart.const(new utils__color__color.Color.rgb(166, 186, 255));
    },
    /*utils__color__material.vanillaBlueA200*/get vanillaBlueA200() {
      return dart.const(new utils__color__color.Color.rgb(104, 137, 255));
    },
    /*utils__color__material.vanillaBlueA400*/get vanillaBlueA400() {
      return dart.const(new utils__color__color.Color.rgb(77, 115, 255));
    },
    /*utils__color__material.vanillaBlueA700*/get vanillaBlueA700() {
      return dart.const(new utils__color__color.Color.rgb(77, 105, 255));
    },
    /*utils__color__material.vanillaBlue*/get vanillaBlue() {
      return utils__color__material.vanillaBlue500;
    },
    /*utils__color__material.vanillaYellow50*/get vanillaYellow50() {
      return dart.const(new utils__color__color.Color.rgb(255, 253, 231));
    },
    /*utils__color__material.vanillaYellow100*/get vanillaYellow100() {
      return dart.const(new utils__color__color.Color.rgb(255, 249, 196));
    },
    /*utils__color__material.vanillaYellow200*/get vanillaYellow200() {
      return dart.const(new utils__color__color.Color.rgb(255, 245, 157));
    },
    /*utils__color__material.vanillaYellow300*/get vanillaYellow300() {
      return dart.const(new utils__color__color.Color.rgb(255, 241, 118));
    },
    /*utils__color__material.vanillaYellow400*/get vanillaYellow400() {
      return dart.const(new utils__color__color.Color.rgb(255, 238, 88));
    },
    /*utils__color__material.vanillaYellow500*/get vanillaYellow500() {
      return dart.const(new utils__color__color.Color.rgb(255, 235, 59));
    },
    /*utils__color__material.vanillaYellow600*/get vanillaYellow600() {
      return dart.const(new utils__color__color.Color.rgb(253, 216, 53));
    },
    /*utils__color__material.vanillaYellow700*/get vanillaYellow700() {
      return dart.const(new utils__color__color.Color.rgb(251, 192, 45));
    },
    /*utils__color__material.vanillaYellow800*/get vanillaYellow800() {
      return dart.const(new utils__color__color.Color.rgb(249, 168, 37));
    },
    /*utils__color__material.vanillaYellow900*/get vanillaYellow900() {
      return dart.const(new utils__color__color.Color.rgb(245, 127, 23));
    },
    /*utils__color__material.vanillaYellowA100*/get vanillaYellowA100() {
      return dart.const(new utils__color__color.Color.rgb(255, 255, 141));
    },
    /*utils__color__material.vanillaYellowA200*/get vanillaYellowA200() {
      return dart.const(new utils__color__color.Color.rgb(255, 255, 0));
    },
    /*utils__color__material.vanillaYellowA400*/get vanillaYellowA400() {
      return dart.const(new utils__color__color.Color.rgb(255, 234, 0));
    },
    /*utils__color__material.vanillaYellowA700*/get vanillaYellowA700() {
      return dart.const(new utils__color__color.Color.rgb(255, 214, 0));
    },
    /*utils__color__material.vanillaYellow*/get vanillaYellow() {
      return utils__color__material.vanillaYellow500;
    },
    /*utils__color__material.amber50*/get amber50() {
      return dart.const(new utils__color__color.Color.rgb(255, 248, 225));
    },
    /*utils__color__material.amber100*/get amber100() {
      return dart.const(new utils__color__color.Color.rgb(255, 236, 179));
    },
    /*utils__color__material.amber200*/get amber200() {
      return dart.const(new utils__color__color.Color.rgb(255, 224, 130));
    },
    /*utils__color__material.amber300*/get amber300() {
      return dart.const(new utils__color__color.Color.rgb(255, 213, 79));
    },
    /*utils__color__material.amber400*/get amber400() {
      return dart.const(new utils__color__color.Color.rgb(255, 202, 40));
    },
    /*utils__color__material.amber500*/get amber500() {
      return dart.const(new utils__color__color.Color.rgb(255, 193, 7));
    },
    /*utils__color__material.amber600*/get amber600() {
      return dart.const(new utils__color__color.Color.rgb(255, 179, 0));
    },
    /*utils__color__material.amber700*/get amber700() {
      return dart.const(new utils__color__color.Color.rgb(255, 160, 0));
    },
    /*utils__color__material.amber800*/get amber800() {
      return dart.const(new utils__color__color.Color.rgb(255, 143, 0));
    },
    /*utils__color__material.amber900*/get amber900() {
      return dart.const(new utils__color__color.Color.rgb(255, 111, 0));
    },
    /*utils__color__material.amberA100*/get amberA100() {
      return dart.const(new utils__color__color.Color.rgb(255, 229, 127));
    },
    /*utils__color__material.amberA200*/get amberA200() {
      return dart.const(new utils__color__color.Color.rgb(255, 215, 64));
    },
    /*utils__color__material.amberA400*/get amberA400() {
      return dart.const(new utils__color__color.Color.rgb(255, 196, 0));
    },
    /*utils__color__material.amberA700*/get amberA700() {
      return dart.const(new utils__color__color.Color.rgb(255, 171, 0));
    },
    /*utils__color__material.amber*/get amber() {
      return utils__color__material.amber500;
    },
    /*utils__color__material.linkDefault*/get linkDefault() {
      return utils__color__material.blue700;
    },
    /*utils__color__material.linkVisited*/get linkVisited() {
      return utils__color__material.deepPurple500;
    },
    /*utils__color__material.linkActive*/get linkActive() {
      return utils__color__material.red700;
    }
  });
  dart.trackLibraries("packages/angular_components/utils/color/material.ddc", {
    "package:angular_components/utils/color/material.dart": utils__color__material
  }, '{"version":3,"sourceRoot":"","sources":["material.dart"],"names":[],"mappings":";;;;;;;;;MAOM,kCAAW;YAAG,gBAAM,8BAAU,CAAC,GAAG,GAAG,GAAG;;MAOxC,4BAAK;YAAG,gBAAM,6BAAS,CAAC,GAAG,GAAG;;MAC9B,4BAAK;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAGlC,oCAAa;YAAG;;MAChB,mCAAY;YAAG;;MACf,qCAAc;YAAG;;MACjB,sCAAe;YAAG;;MAGlB,wCAAiB;YAAG;;MACpB,uCAAgB;YAAG;;MACnB,yCAAkB;YAAG;;MACrB,0CAAmB;YAAG;;MAEtB,oCAAa;YAAG;;MAChB,qCAAc;YAAG;;MAGjB,uCAAgB;YAAG,gBAAM,8BAAU,CAAC,GAAG,GAAG,GAAG,oCAAa;;MAC1D,uCAAgB;YAAG,gBAAM,8BAAU,CAAC,KAAK,KAAK,KAAK,CAAiB;;MACpE,4CAAqB;YAAG,gBAAM,8BAAU,CAAC,GAAG,GAAG,GAAG,mCAAY;;MAC9D,4CAAqB;YAAG,gBAAM,8BAAU,CAAC,KAAK,KAAK,KAAK,uCAAgB;;MACxE,8CAAuB;YAAG,gBAAM,8BAAU,CAAC,GAAG,GAAG,GAAG,qCAAc;;MAClE,8CAAuB;YACzB,gBAAM,8BAAU,CAAC,KAAK,KAAK,KAAK,yCAAkB;;MAChD,+CAAwB;YAAG,gBAAM,8BAAU,CAAC,GAAG,GAAG,GAAG,sCAAe;;MACpE,+CAAwB;YAC1B,gBAAM,8BAAU,CAAC,KAAK,KAAK,KAAK,0CAAmB;;MAGjD,kCAAW;YAAG,gBAAM,8BAAU,CAAC,GAAG,GAAG,GAAG,qCAAc;;MACtD,iCAAU;YAAG,gBAAM,8BAAU,CAAC,KAAK,KAAK,KAAK,qCAAc;;MAC3D,wCAAiB;YAAG,gDAAwB;;MAI5C,kCAAW;YAAG,wCAAgB;;MAC9B,oCAAa;YAAG,6CAAqB;;MACrC,+BAAQ;YAAG,+CAAuB;;MAClC,mCAAY;YAAG,+CAAuB;;MACtC,kCAAW;YAAG,mCAAW;;MAEzB,sCAAe;YAAG,wCAAgB;;MAClC,wCAAiB;YAAG,6CAAqB;;MACzC,mCAAY;YAAG,+CAAuB;;MACtC,uCAAgB;YAAG,+CAAuB;;MAC1C,sCAAe;YAAG,kCAAU;;MAI5B,kCAAW;YAAG,wCAAgB;;MAC9B,2BAAI;YAAG,6CAAqB;;MAC5B,mCAAY;YAAG,+CAAuB;;MAEtC,sCAAe;YAAG,wCAAgB;;MAClC,+BAAQ;YAAG,6CAAqB;;MAChC,uCAAgB;YAAG,+CAAuB;;MAG1C,qCAAc;YAAG,gDAAwB;;MACzC,0CAAmB;YAAG,gBAAM,8BAAU,CAAC,GAAG,GAAG,GAAG;;MAChD,+CAAwB;YAAG,gBAAM,8BAAU,CAAC,GAAG,GAAG,GAAG;;MAGrD,4BAAK;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAClC,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACnC,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACnC,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACnC,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAClC,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAClC,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAClC,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAClC,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAClC,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAElC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,GAAG;;MAClC,0BAAG;YAAG,8BAAM;;MAGZ,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAEnC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,GAAG;;MACnC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACpC,2BAAI;YAAG,+BAAO;;MAGd,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACrC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACrC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACrC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACrC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACrC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MAEpC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACvC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACtC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,GAAG;;MACrC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,GAAG;;MACrC,6BAAM;YAAG,iCAAS;;MAGlB,mCAAY;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACxC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACxC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACxC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MAExC,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAC1C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAC1C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,IAAI,GAAG;;MACxC,iCAAU;YAAG,qCAAa;;MAG1B,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACrC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACpC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACpC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACpC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACpC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MAEpC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACvC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACtC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACrC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACrC,6BAAM;YAAG,iCAAS;;MAGlB,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MAClC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MAElC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACnC,2BAAI;YAAG,+BAAO;;MAGd,kCAAW;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACxC,mCAAY;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACzC,mCAAY;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACzC,mCAAY;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACxC,mCAAY;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACxC,mCAAY;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MACvC,mCAAY;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MACvC,mCAAY;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MACvC,mCAAY;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MACvC,mCAAY;YAAG,gBAAM,6BAAS,CAAC,GAAG,IAAI;;MAEtC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MACxC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MACxC,gCAAS;YAAG,oCAAY;;MAGxB,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MAClC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MAClC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MAClC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MAClC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,GAAG,IAAI;;MAEjC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MACnC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MACnC,2BAAI;YAAG,+BAAO;;MAGd,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MAClC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MAClC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MAClC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MAClC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,GAAG,IAAI;;MAEjC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MACnC,2BAAI;YAAG,+BAAO;;MAGd,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MACnC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,GAAG,IAAI;;MAElC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MACpC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MACpC,4BAAK;YAAG,gCAAQ;;MAGhB,mCAAY;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAEzC,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,iCAAU;YAAG,qCAAa;;MAG1B,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAEpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,2BAAI;YAAG,+BAAO;;MAGd,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAErC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACvC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACvC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACvC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACvC,6BAAM;YAAG,iCAAS;;MAGlB,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAErC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACvC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACvC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACvC,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACvC,6BAAM;YAAG,iCAAS;;MAGlB,mCAAY;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAEzC,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAC1C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAC1C,iCAAU;YAAG,qCAAa;;MAG1B,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACnC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACnC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACnC,4BAAK;YAAG,gCAAQ;;MAGhB,6BAAM;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACnC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MAClC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MAClC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MAClC,2BAAI;YAAG,+BAAO;;MAEd,6BAAM;YAAG,8BAAM;;MACf,8BAAO;YAAG,+BAAO;;MACjB,8BAAO;YAAG,+BAAO;;MACjB,8BAAO;YAAG,+BAAO;;MACjB,8BAAO;YAAG,+BAAO;;MACjB,8BAAO;YAAG,+BAAO;;MACjB,8BAAO;YAAG,+BAAO;;MACjB,8BAAO;YAAG,+BAAO;;MACjB,8BAAO;YAAG,+BAAO;;MACjB,8BAAO;YAAG,+BAAO;;MACjB,2BAAI;YAAG,+BAAO;;MAGd,iCAAU;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACvC,kCAAW;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACxC,kCAAW;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACxC,kCAAW;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACxC,kCAAW;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACxC,kCAAW;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACvC,kCAAW;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MACvC,kCAAW;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACtC,kCAAW;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACtC,kCAAW;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACtC,+BAAQ;YAAG,mCAAW;;MAKtB,mCAAY;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MACzC,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAEzC,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAC1C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,IAAI;;MAC1C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,GAAG;;MACzC,iCAAU;YAAG,qCAAa;;MAG1B,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,sCAAe;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC5C,sCAAe;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC5C,sCAAe;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAC3C,sCAAe;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAC3C,sCAAe;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAC3C,sCAAe;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAC3C,sCAAe;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAC3C,sCAAe;YAAG,gBAAM,6BAAS,CAAC,GAAG,KAAK;;MAC1C,sCAAe;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MAE1C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC7C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAC5C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAC5C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAC5C,mCAAY;YAAG,uCAAe;;MAG9B,oCAAa;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC1C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC3C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAC1C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAC1C,qCAAc;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACzC,qCAAc;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MACzC,qCAAc;YAAG,gBAAM,6BAAS,CAAC,IAAI,IAAI;;MAEzC,sCAAe;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC5C,sCAAe;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC5C,sCAAe;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAC3C,sCAAe;YAAG,gBAAM,6BAAS,CAAC,IAAI,KAAK;;MAC3C,kCAAW;YAAG,sCAAc;;MAG5B,sCAAe;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC5C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC7C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC7C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC7C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC7C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC7C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC7C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC7C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC7C,uCAAgB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAE7C,wCAAiB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC9C,wCAAiB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC9C,wCAAiB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC9C,wCAAiB;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAC9C,oCAAa;YAAG,wCAAgB;;MAGhC,8BAAO;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACpC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACrC,+BAAQ;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MAErC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,gCAAS;YAAG,gBAAM,6BAAS,CAAC,KAAK,KAAK;;MACtC,4BAAK;YAAG,gCAAQ;;MAGhB,kCAAW;YAAG,+BAAO;;MACrB,kCAAW;YAAG,qCAAa;;MAC3B,iCAAU;YAAG,8BAAM","file":"material.ddc.js"}');
  // Exports:
  return {
    utils__color__material: utils__color__material
  };
});

//# sourceMappingURL=material.ddc.js.map
