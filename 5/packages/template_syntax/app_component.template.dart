// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_components/angular_components.dart';
import 'src/hero.dart';
import 'src/hero_component.dart';
import 'src/hero_form_component.dart';
import 'src/hero_switch_components.dart';
import 'src/click_directive.dart';
import 'src/sizer_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;
import 'src/click_directive.template.dart' as _ref3;
import 'src/hero.template.dart' as _ref4;
import 'src/hero_component.template.dart' as _ref5;
import 'src/hero_form_component.template.dart' as _ref6;
import 'src/hero_switch_components.template.dart' as _ref7;
import 'src/sizer_component.template.dart' as _ref8;
import 'package:template_syntax/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular_forms/src/directives/ng_form.dart' as import6;
import 'src/hero_component.template.dart' as import7;
import 'src/hero_component.dart' as import8;
import 'package:angular/src/common/directives/ng_class.dart' as import9;
import 'src/click_directive.dart' as import10;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import11;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import12;
import 'package:angular_forms/src/directives/ng_model.dart' as import13;
import 'src/sizer_component.template.dart' as import14;
import 'src/sizer_component.dart' as import15;
import 'package:angular_forms/src/directives/checkbox_value_accessor.dart' as import16;
import 'package:angular/src/common/directives/ng_style.dart' as import17;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_components/material_radio/material_radio_group.template.dart' as import19;
import 'package:angular_components/material_radio/material_radio_group.dart' as import20;
import 'package:angular/src/common/directives/ng_switch.dart' as import21;
import 'src/hero_form_component.template.dart' as import22;
import 'src/hero_form_component.dart' as import23;
import 'package:angular/src/common/pipes/uppercase_pipe.dart' as import24;
import 'dart:core';
import 'package:angular/src/common/pipes/lowercase_pipe.dart' as import26;
import 'package:angular/src/common/pipes/date_pipe.dart' as import27;
import 'package:angular/src/common/pipes/json_pipe.dart' as import28;
import 'package:angular/src/common/pipes/number_pipe.dart' as import29;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import31;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import33;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/zone/ng_zone.dart' as import36;
import 'package:angular_forms/src/directives/control_container.dart' as import37;
import 'package:angular/src/core/di/opaque_token.dart' as import38;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import39;
import 'package:angular_forms/src/directives/ng_control.dart' as import40;
import 'src/hero.dart' as import41;
import 'package:angular_components/material_radio/material_radio.template.dart' as import42;
import 'package:angular_components/material_radio/material_radio.dart' as import43;
import 'src/hero_switch_components.template.dart' as import44;
import 'src/hero_switch_components.dart' as import45;
import 'package:angular_components/laminate/enums/alignment.dart' as import46;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import47;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import48;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import49;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import50;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import51;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import52;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import53;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import54;
import 'package:quiver/time.dart' as import55;
import 'package:angular_components/utils/browser/window/module.dart' as import56;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import57;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import58;
import 'package:angular_components/utils/disposer/disposer.dart' as import59;
import 'package:angular/src/core/linker/component_loader.dart' as import60;
import 'package:angular_components/laminate/overlay/module.dart' as import61;
import 'package:angular_components/laminate/enums/alignment.dart' as import62;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import63;

const List<dynamic> styles$AppComponent = const [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  bool _query_noTrackBy_1_0_isDirty = true;
  bool _query_withTrackBy_1_1_isDirty = true;
  import3.AnchorElement _el_0;
  import3.Element _el_1;
  import3.AnchorElement _el_3;
  import3.Element _el_5;
  import3.AnchorElement _el_6;
  import3.Element _el_8;
  import3.AnchorElement _el_9;
  import3.Element _el_11;
  import3.AnchorElement _el_12;
  import3.Element _el_14;
  import3.AnchorElement _el_15;
  import3.Element _el_17;
  import3.AnchorElement _el_18;
  import3.Element _el_20;
  import3.Element _el_21;
  import3.AnchorElement _el_22;
  import3.Element _el_24;
  import3.DivElement _el_25;
  import3.AnchorElement _el_26;
  import3.Element _el_28;
  import3.AnchorElement _el_29;
  import3.Element _el_31;
  import3.AnchorElement _el_32;
  import3.Element _el_34;
  import3.Element _el_35;
  import3.AnchorElement _el_36;
  import3.Element _el_38;
  import3.AnchorElement _el_39;
  import3.Element _el_41;
  import3.Element _el_42;
  import3.DivElement _el_43;
  import3.DivElement _el_45;
  import3.AnchorElement _el_46;
  import3.Element _el_48;
  import3.AnchorElement _el_49;
  import3.Element _el_51;
  import3.AnchorElement _el_52;
  import3.Element _el_54;
  import3.AnchorElement _el_55;
  import3.Element _el_57;
  import3.AnchorElement _el_58;
  import3.Element _el_60;
  import3.DivElement _el_61;
  import3.AnchorElement _el_62;
  import3.Element _el_64;
  import3.AnchorElement _el_65;
  import3.Element _el_67;
  import3.AnchorElement _el_68;
  import3.Element _el_70;
  import3.Element _el_71;
  import3.AnchorElement _el_72;
  import3.Element _el_74;
  import3.AnchorElement _el_75;
  import3.Element _el_77;
  import3.AnchorElement _el_78;
  import3.Element _el_80;
  import3.AnchorElement _el_81;
  import3.Element _el_83;
  import3.Element _el_85;
  import3.AnchorElement _el_86;
  import3.Element _el_88;
  import3.Element _el_89;
  import3.Element _el_90;
  import3.Element _el_92;
  import3.Text _text_94;
  import3.Element _el_95;
  import3.Text _text_96;
  import3.Element _el_97;
  import3.Element _el_98;
  import3.Text _text_100;
  import3.Element _el_101;
  import3.Text _text_103;
  import3.AnchorElement _el_104;
  import3.Element _el_106;
  import3.Element _el_107;
  import3.Element _el_109;
  import3.DivElement _el_111;
  import3.Text _text_112;
  import3.Element _el_113;
  import3.Element _el_115;
  ViewContainer _appEl_117;
  import3.Element _el_118;
  import3.DivElement _el_120;
  import3.InputElement _el_122;
  import3.Text _text_124;
  import3.AnchorElement _el_125;
  import3.Element _el_127;
  import3.Element _el_128;
  import3.Element _el_130;
  import3.DivElement _el_132;
  import3.ButtonElement _el_133;
  import3.Element _el_135;
  import3.DivElement _el_137;
  import3.ButtonElement _el_138;
  import3.Element _el_140;
  import3.DivElement _el_142;
  ViewContainer _appEl_143;
  import5.NgFor _NgFor_143_9;
  import3.Element _el_144;
  import3.DivElement _el_146;
  import3.FormElement _el_147;
  import6.NgForm _NgForm_147_5;
  import3.AnchorElement _el_149;
  import3.Element _el_151;
  import3.Element _el_152;
  import3.DivElement _el_154;
  import3.Element _el_156;
  import3.ButtonElement _el_157;
  import3.Element _el_159;
  import3.Element _el_160;
  import3.DivElement _el_161;
  import3.DivElement _el_162;
  import3.Element _el_164;
  import7.ViewHeroComponent0 _compView_164;
  import8.HeroComponent _HeroComponent_164_5;
  import3.Element _el_165;
  import3.Element _el_166;
  import3.DivElement _el_167;
  import3.ButtonElement _el_168;
  import3.Element _el_170;
  import3.Element _el_171;
  import3.DivElement _el_172;
  import3.Element _el_173;
  import3.Element _el_174;
  import7.ViewHeroComponent0 _compView_174;
  import8.HeroComponent _HeroComponent_174_5;
  import3.DivElement _el_175;
  import9.NgClass _NgClass_175_5;
  import3.Element _el_177;
  import3.Element _el_178;
  import3.ButtonElement _el_179;
  import3.Element _el_181;
  import7.ViewHeroComponent0 _compView_181;
  import8.HeroComponent _HeroComponent_181_5;
  import3.DivElement _el_182;
  import10.ClickDirective _ClickDirective_182_5;
  import3.Text _text_184;
  import3.Element _el_185;
  import3.Element _el_186;
  import3.DivElement _el_187;
  import3.InputElement _el_189;
  import11.DefaultValueAccessor _DefaultValueAccessor_189_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_189_6;
  import13.NgModel _NgModel_189_7;
  import3.Text _text_190;
  import3.Element _el_191;
  import3.Element _el_192;
  import3.ButtonElement _el_193;
  import3.Element _el_195;
  import3.Element _el_196;
  import3.DivElement _el_197;
  import3.Element _el_199;
  import3.Element _el_200;
  import3.ButtonElement _el_201;
  import3.AnchorElement _el_203;
  import3.Element _el_205;
  import3.Element _el_206;
  import3.Element _el_208;
  import3.Element _el_209;
  import3.Element _el_210;
  import3.Element _el_211;
  import3.Element _el_212;
  import3.Element _el_213;
  import3.AnchorElement _el_214;
  import3.Element _el_216;
  import3.Element _el_217;
  import3.ButtonElement _el_219;
  import3.ButtonElement _el_221;
  import3.ButtonElement _el_223;
  import3.Element _el_225;
  import3.Element _el_226;
  import3.ButtonElement _el_227;
  import3.ButtonElement _el_229;
  import3.Element _el_231;
  import3.Element _el_232;
  import3.ButtonElement _el_233;
  import3.ButtonElement _el_235;
  import3.AnchorElement _el_237;
  import3.Element _el_239;
  import3.Element _el_240;
  import3.Element _el_242;
  import3.ButtonElement _el_243;
  import3.DivElement _el_245;
  import9.NgClass _NgClass_245_5;
  import3.Element _el_247;
  import7.ViewHeroComponent0 _compView_247;
  import8.HeroComponent _HeroComponent_247_5;
  import3.Element _el_248;
  import3.Element _el_249;
  import7.ViewHeroComponent0 _compView_249;
  import8.HeroComponent _HeroComponent_249_5;
  import3.Element _el_250;
  import3.Element _el_251;
  import3.Element _el_253;
  import3.Element _el_256;
  import3.Element _el_257;
  import3.Element _el_259;
  import3.Element _el_262;
  import3.Element _el_263;
  import3.Text _text_265;
  import3.Element _el_267;
  import3.Element _el_270;
  import3.Element _el_272;
  import3.Element _el_274;
  import3.Element _el_277;
  import3.Element _el_278;
  import3.Text _text_280;
  import3.Element _el_282;
  import3.Element _el_285;
  import3.Element _el_287;
  import3.Element _el_289;
  import3.AnchorElement _el_292;
  import3.Element _el_294;
  import3.Element _el_295;
  import3.TableElement _el_297;
  import3.Element _el_298;
  import3.Element _el_299;
  import3.Element _el_301;
  import3.Element _el_302;
  import3.Element _el_304;
  import3.Element _el_306;
  import3.ButtonElement _el_307;
  import3.Text _text_308;
  import3.Element _el_310;
  import3.Element _el_311;
  import3.DivElement _el_312;
  import3.ButtonElement _el_313;
  import3.ButtonElement _el_315;
  import3.ButtonElement _el_317;
  import3.AnchorElement _el_319;
  import3.Element _el_321;
  import3.Element _el_322;
  import3.DivElement _el_324;
  import3.DivElement _el_326;
  import3.DivElement _el_328;
  import3.DivElement _el_330;
  import3.DivElement _el_332;
  import3.AnchorElement _el_334;
  import3.Element _el_336;
  import3.Element _el_337;
  import3.ButtonElement _el_339;
  import3.ButtonElement _el_341;
  import3.ButtonElement _el_343;
  import3.ButtonElement _el_345;
  import3.AnchorElement _el_347;
  import3.Element _el_349;
  import3.Element _el_350;
  import3.ButtonElement _el_352;
  import3.ButtonElement _el_354;
  import3.DivElement _el_356;
  import3.DivElement _el_357;
  import10.ClickDirective _ClickDirective_357_5;
  import3.Text _text_359;
  import3.Element _el_360;
  import7.ViewHeroComponent0 _compView_360;
  import8.HeroComponent _HeroComponent_360_5;
  import3.Element _el_361;
  import3.Element _el_362;
  import7.ViewBigHeroComponent0 _compView_362;
  import8.BigHeroComponent _BigHeroComponent_362_5;
  import3.DivElement _el_363;
  import3.DivElement _el_365;
  import3.DivElement _el_367;
  import3.ButtonElement _el_368;
  import3.DivElement _el_370;
  import3.ButtonElement _el_371;
  import3.AnchorElement _el_373;
  import3.Element _el_375;
  import3.Element _el_376;
  import3.DivElement _el_378;
  import3.Element _el_379;
  import14.ViewSizerComponent0 _compView_379;
  import15.SizerComponent _SizerComponent_379_5;
  import3.DivElement _el_380;
  import3.Element _el_382;
  import3.InputElement _el_384;
  import11.DefaultValueAccessor _DefaultValueAccessor_384_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_384_6;
  import13.NgModel _NgModel_384_7;
  import3.Text _text_386;
  import3.Element _el_387;
  import3.DivElement _el_388;
  import3.Element _el_389;
  import3.Element _el_391;
  import14.ViewSizerComponent0 _compView_391;
  import15.SizerComponent _SizerComponent_391_5;
  import3.AnchorElement _el_392;
  import3.Element _el_394;
  import3.Element _el_395;
  import3.Element _el_397;
  import3.Text _text_399;
  import3.InputElement _el_400;
  import3.Element _el_402;
  import3.InputElement _el_403;
  import11.DefaultValueAccessor _DefaultValueAccessor_403_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_403_6;
  import13.NgModel _NgModel_403_7;
  import3.Element _el_405;
  import3.InputElement _el_406;
  import11.DefaultValueAccessor _DefaultValueAccessor_406_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_406_6;
  import13.NgModel _NgModel_406_7;
  import3.Element _el_408;
  import3.InputElement _el_409;
  import11.DefaultValueAccessor _DefaultValueAccessor_409_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_409_6;
  import13.NgModel _NgModel_409_7;
  import3.AnchorElement _el_411;
  import3.Element _el_413;
  import3.Element _el_414;
  import3.Element _el_416;
  import3.Text _text_418;
  import3.DivElement _el_419;
  import9.NgClass _NgClass_419_5;
  import3.Element _el_421;
  import3.Element _el_422;
  import3.InputElement _el_424;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_424_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_424_6;
  import13.NgModel _NgModel_424_7;
  import3.Element _el_425;
  import3.InputElement _el_427;
  import3.Element _el_428;
  import3.InputElement _el_430;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_430_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_430_6;
  import13.NgModel _NgModel_430_7;
  import3.ButtonElement _el_431;
  import3.Element _el_433;
  import3.Element _el_434;
  import3.DivElement _el_435;
  import9.NgClass _NgClass_435_5;
  import3.Text _text_437;
  import3.Text _text_439;
  import3.Text _text_441;
  import3.Element _el_443;
  import3.Element _el_444;
  import3.DivElement _el_445;
  import9.NgClass _NgClass_445_5;
  import3.DivElement _el_447;
  import3.DivElement _el_449;
  import9.NgClass _NgClass_449_5;
  import3.AnchorElement _el_451;
  import3.Element _el_453;
  import3.Element _el_454;
  import3.DivElement _el_456;
  import3.Element _el_458;
  import3.Element _el_460;
  import3.Text _text_462;
  import3.DivElement _el_463;
  import17.NgStyle _NgStyle_463_5;
  import3.Element _el_465;
  import3.Element _el_466;
  import3.InputElement _el_468;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_468_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_468_6;
  import13.NgModel _NgModel_468_7;
  import3.Element _el_470;
  import3.InputElement _el_472;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_472_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_472_6;
  import13.NgModel _NgModel_472_7;
  import3.Element _el_474;
  import3.InputElement _el_476;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_476_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_476_6;
  import13.NgModel _NgModel_476_7;
  import3.ButtonElement _el_477;
  import3.Element _el_479;
  import3.Element _el_480;
  import3.DivElement _el_481;
  import17.NgStyle _NgStyle_481_5;
  import3.Text _text_483;
  import3.Text _text_485;
  import3.Text _text_487;
  import3.AnchorElement _el_489;
  import3.Element _el_491;
  import3.Element _el_492;
  ViewContainer _appEl_494;
  NgIf _NgIf_494_9;
  ViewContainer _appEl_495;
  NgIf _NgIf_495_9;
  ViewContainer _appEl_496;
  NgIf _NgIf_496_9;
  ViewContainer _appEl_497;
  NgIf _NgIf_497_9;
  import3.DivElement _el_498;
  ViewContainer _appEl_500;
  NgIf _NgIf_500_9;
  import3.DivElement _el_501;
  import3.DivElement _el_503;
  import3.Element _el_505;
  import7.ViewHeroComponent0 _compView_505;
  import8.HeroComponent _HeroComponent_505_5;
  import3.DivElement _el_506;
  import3.DivElement _el_508;
  import3.AnchorElement _el_510;
  import3.Element _el_512;
  import3.Element _el_513;
  import3.DivElement _el_515;
  ViewContainer _appEl_516;
  import5.NgFor _NgFor_516_9;
  import3.Element _el_517;
  import3.DivElement _el_518;
  ViewContainer _appEl_519;
  import5.NgFor _NgFor_519_9;
  import3.AnchorElement _el_520;
  import3.Element _el_522;
  import3.DivElement _el_524;
  ViewContainer _appEl_525;
  import5.NgFor _NgFor_525_9;
  import3.AnchorElement _el_526;
  import3.Element _el_528;
  import3.ButtonElement _el_530;
  import3.ButtonElement _el_532;
  import3.ButtonElement _el_534;
  import3.Element _el_536;
  import3.Element _el_537;
  import3.DivElement _el_540;
  ViewContainer _appEl_541;
  import5.NgFor _NgFor_541_9;
  ViewContainer _appEl_542;
  NgIf _NgIf_542_9;
  import3.Element _el_543;
  import3.Element _el_545;
  import3.DivElement _el_547;
  ViewContainer _appEl_548;
  import5.NgFor _NgFor_548_9;
  ViewContainer _appEl_549;
  NgIf _NgIf_549_9;
  import3.AnchorElement _el_550;
  import3.Element _el_552;
  import3.Element _el_553;
  import3.Element _el_555;
  import3.Element _el_557;
  import19.ViewMaterialRadioGroupComponent0 _compView_557;
  import13.NgModel _NgModel_557_5;
  import13.NgModel _NgControl_557_6;
  import20.MaterialRadioGroupComponent _MaterialRadioGroupComponent_557_7;
  bool _query_MaterialRadioComponent_557_0_isDirty = true;
  ViewContainer _appEl_558;
  import5.NgFor _NgFor_558_9;
  import3.Element _el_559;
  import3.Text _text_561;
  import3.Text _text_563;
  import3.DivElement _el_565;
  import21.NgSwitch _NgSwitch_565_5;
  ViewContainer _appEl_566;
  import21.NgSwitchWhen _NgSwitchWhen_566_9;
  ViewContainer _appEl_567;
  import21.NgSwitchWhen _NgSwitchWhen_567_9;
  ViewContainer _appEl_568;
  import21.NgSwitchWhen _NgSwitchWhen_568_9;
  ViewContainer _appEl_569;
  import21.NgSwitchWhen _NgSwitchWhen_569_9;
  ViewContainer _appEl_570;
  import21.NgSwitchDefault _NgSwitchDefault_570_9;
  import3.AnchorElement _el_571;
  import3.Element _el_573;
  import3.Element _el_574;
  import3.InputElement _el_576;
  import3.ButtonElement _el_577;
  import3.ButtonElement _el_579;
  import3.Element _el_580;
  import3.Element _el_582;
  import22.ViewHeroFormComponent0 _compView_582;
  import23.HeroFormComponent _HeroFormComponent_582_5;
  import3.AnchorElement _el_583;
  import3.Element _el_585;
  import3.Element _el_586;
  import3.Element _el_588;
  import3.ButtonElement _el_589;
  import3.Element _el_591;
  import7.ViewHeroComponent0 _compView_591;
  import8.HeroComponent _HeroComponent_591_5;
  import3.DivElement _el_592;
  import10.ClickDirective _ClickDirective_592_5;
  import3.Text _text_594;
  import3.AnchorElement _el_595;
  import3.Element _el_597;
  import3.Element _el_598;
  import3.DivElement _el_600;
  import3.Text _text_602;
  import3.DivElement _el_603;
  import3.Text _text_605;
  import3.DivElement _el_606;
  import3.Text _text_608;
  import3.DivElement _el_609;
  import3.Text _text_610;
  import3.DivElement _el_611;
  import3.Text _text_613;
  import3.DivElement _el_614;
  import3.Element _el_615;
  import3.Text _text_617;
  import3.AnchorElement _el_618;
  import3.Element _el_620;
  import3.Element _el_621;
  import3.Element _el_623;
  import3.DivElement _el_625;
  import3.Text _text_627;
  import3.DivElement _el_628;
  import3.Text _text_630;
  import3.DivElement _el_631;
  import3.Text _text_633;
  ViewContainer _appEl_634;
  NgIf _NgIf_634_9;
  import3.DivElement _el_635;
  import3.Text _text_637;
  import3.AnchorElement _el_638;
  import3.Element _el_640;
  import3.Element _el_641;
  import3.Element _el_643;
  import3.Text _text_645;
  import3.Element _el_647;
  import3.Text _text_649;
  import3.Text _text_651;
  import3.Element _el_653;
  import3.ButtonElement _el_654;
  import3.AnchorElement _el_656;
  var _expr_0;
  var _expr_1;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_8;
  var _expr_10;
  Map<String, dynamic> Function(dynamic) _map_0;
  var _expr_11;
  var _expr_12;
  var _expr_14;
  var _expr_15;
  bool _expr_16;
  var _expr_17;
  var _expr_22;
  var _expr_23;
  var _expr_24;
  var _expr_26;
  var _expr_27;
  var _expr_28;
  var _expr_30;
  var _expr_34;
  var _expr_35;
  var _expr_36;
  var _expr_37;
  var _expr_39;
  var _expr_40;
  var _expr_41;
  var _expr_42;
  String _expr_44;
  bool _expr_45;
  bool _expr_46;
  bool _expr_47;
  var _expr_48;
  var _expr_49;
  var _expr_50;
  var _expr_51;
  var _expr_52;
  var _expr_53;
  var _expr_54;
  var _expr_55;
  var _expr_56;
  var _expr_58;
  var _expr_59;
  var _expr_60;
  var _expr_61;
  var _expr_65;
  var _expr_66;
  var _expr_68;
  var _expr_70;
  var _expr_71;
  var _expr_72;
  var _expr_73;
  var _expr_74;
  Map<String, dynamic> Function(dynamic, dynamic, dynamic) _map_1;
  var _expr_75;
  var _expr_76;
  var _expr_77;
  var _expr_78;
  var _expr_82;
  var _expr_83;
  var _expr_84;
  var _expr_85;
  bool _expr_91;
  bool _expr_92;
  bool _expr_93;
  var _expr_94;
  var _expr_95;
  var _expr_106;
  var _expr_107;
  var _expr_108;
  var _expr_113;
  var _expr_114;
  var _expr_116;
  var _expr_117;
  var _expr_118;
  var _expr_119;
  var _expr_120;
  var _expr_121;
  var _expr_122;
  var _expr_123;
  var _expr_124;
  var _expr_125;
  var _expr_126;
  var _expr_128;
  var _expr_129;
  var _expr_130;
  var _expr_131;
  import24.UpperCasePipe _pipe_uppercase_0;
  String Function(String) _pipe_uppercase_0_0;
  String Function(String) _pipe_uppercase_0_1;
  String Function(String) _pipe_uppercase_0_2;
  import26.LowerCasePipe _pipe_lowercase_1;
  String Function(String) _pipe_lowercase_1_0;
  import27.DatePipe _pipe_date_2;
  String Function(dynamic, String) _pipe_date_2_0;
  String Function(dynamic, String) _pipe_date_2_1;
  import28.JsonPipe _pipe_json_3;
  import29.CurrencyPipe _pipe_currency_4;
  String Function(num, String, bool) _pipe_currency_4_0;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app');
    _renderType ??= import33.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_0, 'id', 'toc');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_1);
    import3.Text _text_2 = new import3.Text('Template Syntax');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_3, 'href', '#interpolation');
    addShimC(_el_3);
    import3.Text _text_4 = new import3.Text('Interpolation');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_5);
    _el_6 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_6, 'href', '#expression-context');
    addShimC(_el_6);
    import3.Text _text_7 = new import3.Text('Expression context');
    _el_6.append(_text_7);
    _el_8 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_8);
    _el_9 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_9, 'href', '#statement-context');
    addShimC(_el_9);
    import3.Text _text_10 = new import3.Text('Statement context');
    _el_9.append(_text_10);
    _el_11 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_11);
    _el_12 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_12, 'href', '#mental-model');
    addShimC(_el_12);
    import3.Text _text_13 = new import3.Text('Mental Model');
    _el_12.append(_text_13);
    _el_14 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_14);
    _el_15 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_15, 'href', '#buttons');
    addShimC(_el_15);
    import3.Text _text_16 = new import3.Text('Buttons');
    _el_15.append(_text_16);
    _el_17 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_17);
    _el_18 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_18, 'href', '#prop-vs-attrib');
    addShimC(_el_18);
    import3.Text _text_19 = new import3.Text('Properties vs. Attributes');
    _el_18.append(_text_19);
    _el_20 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_20);
    _el_21 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_21);
    _el_22 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_22, 'href', '#property-binding');
    addShimC(_el_22);
    import3.Text _text_23 = new import3.Text('Property Binding');
    _el_22.append(_text_23);
    _el_24 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_24);
    _el_25 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_25, 'style', 'margin-left:8px');
    addShimC(_el_25);
    _el_26 = createAndAppend(doc, 'a', _el_25);
    createAttr(_el_26, 'href', '#attribute-binding');
    addShimC(_el_26);
    import3.Text _text_27 = new import3.Text('Attribute Binding');
    _el_26.append(_text_27);
    _el_28 = createAndAppend(doc, 'br', _el_25);
    addShimE(_el_28);
    _el_29 = createAndAppend(doc, 'a', _el_25);
    createAttr(_el_29, 'href', '#class-binding');
    addShimC(_el_29);
    import3.Text _text_30 = new import3.Text('Class Binding');
    _el_29.append(_text_30);
    _el_31 = createAndAppend(doc, 'br', _el_25);
    addShimE(_el_31);
    _el_32 = createAndAppend(doc, 'a', _el_25);
    createAttr(_el_32, 'href', '#style-binding');
    addShimC(_el_32);
    import3.Text _text_33 = new import3.Text('Style Binding');
    _el_32.append(_text_33);
    _el_34 = createAndAppend(doc, 'br', _el_25);
    addShimE(_el_34);
    _el_35 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_35);
    _el_36 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_36, 'href', '#event-binding');
    addShimC(_el_36);
    import3.Text _text_37 = new import3.Text('Event Binding');
    _el_36.append(_text_37);
    _el_38 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_38);
    _el_39 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_39, 'href', '#two-way');
    addShimC(_el_39);
    import3.Text _text_40 = new import3.Text('Two-way Binding');
    _el_39.append(_text_40);
    _el_41 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_41);
    _el_42 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_42);
    _el_43 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_43);
    import3.Text _text_44 = new import3.Text('Directives');
    _el_43.append(_text_44);
    _el_45 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_45, 'style', 'margin-left:8px');
    addShimC(_el_45);
    _el_46 = createAndAppend(doc, 'a', _el_45);
    createAttr(_el_46, 'href', '#ngModel');
    addShimC(_el_46);
    import3.Text _text_47 = new import3.Text('NgModel (two-way) Binding');
    _el_46.append(_text_47);
    _el_48 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_48);
    _el_49 = createAndAppend(doc, 'a', _el_45);
    createAttr(_el_49, 'href', '#ngClass');
    addShimC(_el_49);
    import3.Text _text_50 = new import3.Text('NgClass Binding');
    _el_49.append(_text_50);
    _el_51 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_51);
    _el_52 = createAndAppend(doc, 'a', _el_45);
    createAttr(_el_52, 'href', '#ngStyle');
    addShimC(_el_52);
    import3.Text _text_53 = new import3.Text('NgStyle Binding');
    _el_52.append(_text_53);
    _el_54 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_54);
    _el_55 = createAndAppend(doc, 'a', _el_45);
    createAttr(_el_55, 'href', '#ngIf');
    addShimC(_el_55);
    import3.Text _text_56 = new import3.Text('NgIf');
    _el_55.append(_text_56);
    _el_57 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_57);
    _el_58 = createAndAppend(doc, 'a', _el_45);
    createAttr(_el_58, 'href', '#ngFor');
    addShimC(_el_58);
    import3.Text _text_59 = new import3.Text('NgFor');
    _el_58.append(_text_59);
    _el_60 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_60);
    _el_61 = createDivAndAppend(doc, _el_45);
    createAttr(_el_61, 'style', 'margin-left:8px');
    addShimC(_el_61);
    _el_62 = createAndAppend(doc, 'a', _el_61);
    createAttr(_el_62, 'href', '#ngFor-index');
    addShimC(_el_62);
    import3.Text _text_63 = new import3.Text('NgFor with index');
    _el_62.append(_text_63);
    _el_64 = createAndAppend(doc, 'br', _el_61);
    addShimE(_el_64);
    _el_65 = createAndAppend(doc, 'a', _el_61);
    createAttr(_el_65, 'href', '#ngFor-trackBy');
    addShimC(_el_65);
    import3.Text _text_66 = new import3.Text('NgFor with trackBy');
    _el_65.append(_text_66);
    _el_67 = createAndAppend(doc, 'br', _el_61);
    addShimE(_el_67);
    _el_68 = createAndAppend(doc, 'a', _el_45);
    createAttr(_el_68, 'href', '#ngSwitch');
    addShimC(_el_68);
    import3.Text _text_69 = new import3.Text('NgSwitch');
    _el_68.append(_text_69);
    _el_70 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_70);
    _el_71 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_71);
    _el_72 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_72, 'href', '#ref-vars');
    addShimC(_el_72);
    import3.Text _text_73 = new import3.Text('Template reference variables');
    _el_72.append(_text_73);
    _el_74 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_74);
    _el_75 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_75, 'href', '#inputs-and-outputs');
    addShimC(_el_75);
    import3.Text _text_76 = new import3.Text('Inputs and outputs');
    _el_75.append(_text_76);
    _el_77 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_77);
    _el_78 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_78, 'href', '#pipes');
    addShimC(_el_78);
    import3.Text _text_79 = new import3.Text('Pipes');
    _el_78.append(_text_79);
    _el_80 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_80);
    _el_81 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_81, 'href', '#safe-navigation-operator');
    addShimC(_el_81);
    import3.Text _text_82 = new import3.Text('Safe navigation operator');
    _el_81.append(_text_82);
    _el_83 = createAndAppend(doc, 'i', _el_81);
    addShimE(_el_83);
    import3.Text _text_84 = new import3.Text('?.');
    _el_83.append(_text_84);
    _el_85 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_85);
    _el_86 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_86, 'href', '#enums');
    addShimC(_el_86);
    import3.Text _text_87 = new import3.Text('Enums');
    _el_86.append(_text_87);
    _el_88 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_88);
    _el_89 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_89);
    _el_90 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_90, 'id', 'interpolation');
    addShimE(_el_90);
    import3.Text _text_91 = new import3.Text('Interpolation');
    _el_90.append(_text_91);
    _el_92 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_92);
    import3.Text _text_93 = new import3.Text('My current hero is ');
    _el_92.append(_text_93);
    _text_94 = new import3.Text('');
    _el_92.append(_text_94);
    _el_95 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_95);
    _text_96 = new import3.Text('');
    _el_95.append(_text_96);
    _el_97 = createAndAppend(doc, 'img', _el_95);
    createAttr(_el_97, 'style', 'height:30px');
    addShimE(_el_97);
    _el_98 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_98);
    import3.Text _text_99 = new import3.Text('The sum of 1 + 1 is ');
    _el_98.append(_text_99);
    _text_100 = new import3.Text(import33.interpolate0((1 + 1)));
    _el_98.append(_text_100);
    _el_101 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_101);
    import3.Text _text_102 = new import3.Text('The sum of 1 + 1 is not ');
    _el_101.append(_text_102);
    _text_103 = new import3.Text('');
    _el_101.append(_text_103);
    _el_104 = createAndAppend(doc, 'a', parentRenderNode);
    _el_104.className = 'to-toc';
    createAttr(_el_104, 'href', '#toc');
    addShimC(_el_104);
    import3.Text _text_105 = new import3.Text('top');
    _el_104.append(_text_105);
    _el_106 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_106);
    _el_107 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_107, 'id', 'expression-context');
    addShimE(_el_107);
    import3.Text _text_108 = new import3.Text('Expression context');
    _el_107.append(_text_108);
    _el_109 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_109);
    import3.Text _text_110 = new import3.Text('Component expression context ({{title}}, [hidden]="isUnchanged")');
    _el_109.append(_text_110);
    _el_111 = createDivAndAppend(doc, parentRenderNode);
    _el_111.className = 'context';
    addShimC(_el_111);
    _text_112 = new import3.Text('');
    _el_111.append(_text_112);
    _el_113 = createSpanAndAppend(doc, _el_111);
    addShimE(_el_113);
    import3.Text _text_114 = new import3.Text('changed');
    _el_113.append(_text_114);
    _el_115 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_115);
    import3.Text _text_116 = new import3.Text('Template input variable expression context (let hero)');
    _el_115.append(_text_116);
    final _anchor_117 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_117);
    _appEl_117 = new ViewContainer(117, null, this, _anchor_117);
    TemplateRef _TemplateRef_117_7 = new TemplateRef(_appEl_117, viewFactory_AppComponent1);
    _el_118 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_118);
    import3.Text _text_119 = new import3.Text('Template reference variable expression context (#heroInput)');
    _el_118.append(_text_119);
    _el_120 = createDivAndAppend(doc, parentRenderNode);
    _el_120.className = 'context';
    addShimC(_el_120);
    import3.Text _text_121 = new import3.Text('Type something:');
    _el_120.append(_text_121);
    _el_122 = createAndAppend(doc, 'input', _el_120);
    addShimC(_el_122);
    import3.Text _text_123 = new import3.Text(' ');
    _el_120.append(_text_123);
    _text_124 = new import3.Text('');
    _el_120.append(_text_124);
    _el_125 = createAndAppend(doc, 'a', parentRenderNode);
    _el_125.className = 'to-toc';
    createAttr(_el_125, 'href', '#toc');
    addShimC(_el_125);
    import3.Text _text_126 = new import3.Text('top');
    _el_125.append(_text_126);
    _el_127 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_127);
    _el_128 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_128, 'id', 'statement-context');
    addShimE(_el_128);
    import3.Text _text_129 = new import3.Text('Statement context');
    _el_128.append(_text_129);
    _el_130 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_130);
    import3.Text _text_131 = new import3.Text('Component statement context ( (click)="onSave() )');
    _el_130.append(_text_131);
    _el_132 = createDivAndAppend(doc, parentRenderNode);
    _el_132.className = 'context';
    addShimC(_el_132);
    _el_133 = createAndAppend(doc, 'button', _el_132);
    addShimC(_el_133);
    import3.Text _text_134 = new import3.Text('Delete hero');
    _el_133.append(_text_134);
    _el_135 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_135);
    import3.Text _text_136 = new import3.Text('Template \$event statement context');
    _el_135.append(_text_136);
    _el_137 = createDivAndAppend(doc, parentRenderNode);
    _el_137.className = 'context';
    addShimC(_el_137);
    _el_138 = createAndAppend(doc, 'button', _el_137);
    addShimC(_el_138);
    import3.Text _text_139 = new import3.Text('Save');
    _el_138.append(_text_139);
    _el_140 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_140);
    import3.Text _text_141 = new import3.Text('Template input variable statement context (let hero)');
    _el_140.append(_text_141);
    _el_142 = createDivAndAppend(doc, parentRenderNode);
    _el_142.className = 'context';
    addShimC(_el_142);
    final _anchor_143 = createViewContainerAnchor();
    _el_142.append(_anchor_143);
    _appEl_143 = new ViewContainer(143, 142, this, _anchor_143);
    TemplateRef _TemplateRef_143_8 = new TemplateRef(_appEl_143, viewFactory_AppComponent3);
    _NgFor_143_9 = new import5.NgFor(_appEl_143, _TemplateRef_143_8);
    _el_144 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_144);
    import3.Text _text_145 = new import3.Text('Template reference variable statement context (#heroForm)');
    _el_144.append(_text_145);
    _el_146 = createDivAndAppend(doc, parentRenderNode);
    _el_146.className = 'context';
    addShimC(_el_146);
    _el_147 = createAndAppend(doc, 'form', _el_146);
    addShimC(_el_147);
    _NgForm_147_5 = new import6.NgForm(null);
    import3.Text _text_148 = new import3.Text('...');
    _el_147.append(_text_148);
    _el_149 = createAndAppend(doc, 'a', parentRenderNode);
    _el_149.className = 'to-toc';
    createAttr(_el_149, 'href', '#toc');
    addShimC(_el_149);
    import3.Text _text_150 = new import3.Text('top');
    _el_149.append(_text_150);
    _el_151 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_151);
    _el_152 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_152, 'id', 'mental-model');
    addShimE(_el_152);
    import3.Text _text_153 = new import3.Text('New Mental Model');
    _el_152.append(_text_153);
    _el_154 = createDivAndAppend(doc, parentRenderNode);
    _el_154.className = 'special';
    addShimC(_el_154);
    import3.Text _text_155 = new import3.Text('Mental Model');
    _el_154.append(_text_155);
    _el_156 = createAndAppend(doc, 'img', parentRenderNode);
    createAttr(_el_156, 'src', 'assets/images/hero.png');
    addShimE(_el_156);
    _el_157 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_157, 'disabled', '');
    addShimC(_el_157);
    import3.Text _text_158 = new import3.Text('Save');
    _el_157.append(_text_158);
    _el_159 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_159);
    _el_160 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_160);
    _el_161 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_161);
    _el_162 = createDivAndAppend(doc, _el_161);
    _el_162.className = 'special';
    addShimC(_el_162);
    import3.Text _text_163 = new import3.Text('Mental Model');
    _el_162.append(_text_163);
    _compView_164 = new import7.ViewHeroComponent0(this, 164);
    _el_164 = _compView_164.rootEl;
    _el_161.append(_el_164);
    addShimC(_el_164);
    _HeroComponent_164_5 = new import8.HeroComponent();
    _compView_164.create(_HeroComponent_164_5, []);
    _el_165 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_165);
    _el_166 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_166);
    _el_167 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_167);
    _el_168 = createAndAppend(doc, 'button', _el_167);
    addShimC(_el_168);
    import3.Text _text_169 = new import3.Text('Save');
    _el_168.append(_text_169);
    _el_170 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_170);
    _el_171 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_171);
    _el_172 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_172);
    _el_173 = createAndAppend(doc, 'img', _el_172);
    addShimE(_el_173);
    _compView_174 = new import7.ViewHeroComponent0(this, 174);
    _el_174 = _compView_174.rootEl;
    _el_172.append(_el_174);
    addShimC(_el_174);
    _HeroComponent_174_5 = new import8.HeroComponent();
    _compView_174.create(_HeroComponent_174_5, []);
    _el_175 = createDivAndAppend(doc, _el_172);
    addShimC(_el_175);
    _NgClass_175_5 = new import9.NgClass(_el_175);
    import3.Text _text_176 = new import3.Text('...');
    _el_175.append(_text_176);
    _el_177 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_177);
    _el_178 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_178);
    _el_179 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_179);
    import3.Text _text_180 = new import3.Text('Save');
    _el_179.append(_text_180);
    _compView_181 = new import7.ViewHeroComponent0(this, 181);
    _el_181 = _compView_181.rootEl;
    parentRenderNode.append(_el_181);
    addShimC(_el_181);
    _HeroComponent_181_5 = new import8.HeroComponent();
    _compView_181.create(_HeroComponent_181_5, []);
    _el_182 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_182, 'clickable', '');
    addShimC(_el_182);
    _ClickDirective_182_5 = new import10.ClickDirective(_el_182);
    import3.Text _text_183 = new import3.Text('click me');
    _el_182.append(_text_183);
    _text_184 = new import3.Text('');
    parentRenderNode.append(_text_184);
    _el_185 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_185);
    _el_186 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_186);
    _el_187 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_187);
    import3.Text _text_188 = new import3.Text('Hero Name:');
    _el_187.append(_text_188);
    _el_189 = createAndAppend(doc, 'input', _el_187);
    addShimC(_el_189);
    _DefaultValueAccessor_189_5 = new import11.DefaultValueAccessor(_el_189);
    _NgValueAccessor_189_6 = [_DefaultValueAccessor_189_5];
    _NgModel_189_7 = new import13.NgModel(null, _NgValueAccessor_189_6);
    _text_190 = new import3.Text('');
    _el_187.append(_text_190);
    _el_191 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_191);
    _el_192 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_192);
    _el_193 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_193);
    import3.Text _text_194 = new import3.Text('help');
    _el_193.append(_text_194);
    _el_195 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_195);
    _el_196 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_196);
    _el_197 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_197);
    import3.Text _text_198 = new import3.Text('Special');
    _el_197.append(_text_198);
    _el_199 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_199);
    _el_200 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_200);
    _el_201 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_201);
    import3.Text _text_202 = new import3.Text('button');
    _el_201.append(_text_202);
    _el_203 = createAndAppend(doc, 'a', parentRenderNode);
    _el_203.className = 'to-toc';
    createAttr(_el_203, 'href', '#toc');
    addShimC(_el_203);
    import3.Text _text_204 = new import3.Text('top');
    _el_203.append(_text_204);
    _el_205 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_205);
    _el_206 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_206, 'id', 'prop-vs-attrib');
    addShimE(_el_206);
    import3.Text _text_207 = new import3.Text('Property vs. Attribute (img examples)');
    _el_206.append(_text_207);
    _el_208 = createAndAppend(doc, 'img', parentRenderNode);
    createAttr(_el_208, 'src', 'assets/images/ng-logo.png');
    addShimE(_el_208);
    _el_209 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_209);
    _el_210 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_210);
    _el_211 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_211);
    _el_212 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_212);
    _el_213 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_213);
    _el_214 = createAndAppend(doc, 'a', parentRenderNode);
    _el_214.className = 'to-toc';
    createAttr(_el_214, 'href', '#toc');
    addShimC(_el_214);
    import3.Text _text_215 = new import3.Text('top');
    _el_214.append(_text_215);
    _el_216 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_216);
    _el_217 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_217, 'id', 'buttons');
    addShimE(_el_217);
    import3.Text _text_218 = new import3.Text('Buttons');
    _el_217.append(_text_218);
    _el_219 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_219);
    import3.Text _text_220 = new import3.Text('Enabled (but does nothing)');
    _el_219.append(_text_220);
    _el_221 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_221, 'disabled', '');
    addShimC(_el_221);
    import3.Text _text_222 = new import3.Text('Disabled');
    _el_221.append(_text_222);
    _el_223 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_223, 'disabled', 'false');
    addShimC(_el_223);
    import3.Text _text_224 = new import3.Text('Still disabled');
    _el_223.append(_text_224);
    _el_225 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_225);
    _el_226 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_226);
    _el_227 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_227, 'disabled', '');
    addShimC(_el_227);
    import3.Text _text_228 = new import3.Text('disabled by attribute');
    _el_227.append(_text_228);
    _el_229 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_229);
    import3.Text _text_230 = new import3.Text('disabled by property binding');
    _el_229.append(_text_230);
    _el_231 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_231);
    _el_232 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_232);
    _el_233 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_233);
    import3.Text _text_234 = new import3.Text('Disabled Cancel');
    _el_233.append(_text_234);
    _el_235 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_235);
    import3.Text _text_236 = new import3.Text('Enabled Save');
    _el_235.append(_text_236);
    _el_237 = createAndAppend(doc, 'a', parentRenderNode);
    _el_237.className = 'to-toc';
    createAttr(_el_237, 'href', '#toc');
    addShimC(_el_237);
    import3.Text _text_238 = new import3.Text('top');
    _el_237.append(_text_238);
    _el_239 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_239);
    _el_240 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_240, 'id', 'property-binding');
    addShimE(_el_240);
    import3.Text _text_241 = new import3.Text('Property Binding');
    _el_240.append(_text_241);
    _el_242 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_242);
    _el_243 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_243);
    import3.Text _text_244 = new import3.Text('Cancel is disabled');
    _el_243.append(_text_244);
    _el_245 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_245);
    _NgClass_245_5 = new import9.NgClass(_el_245);
    import3.Text _text_246 = new import3.Text('[ngClass] binding to the classes property');
    _el_245.append(_text_246);
    _compView_247 = new import7.ViewHeroComponent0(this, 247);
    _el_247 = _compView_247.rootEl;
    parentRenderNode.append(_el_247);
    addShimC(_el_247);
    _HeroComponent_247_5 = new import8.HeroComponent();
    _compView_247.create(_HeroComponent_247_5, []);
    _el_248 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_248);
    _compView_249 = new import7.ViewHeroComponent0(this, 249);
    _el_249 = _compView_249.rootEl;
    parentRenderNode.append(_el_249);
    createAttr(_el_249, 'prefix', 'You are my');
    addShimC(_el_249);
    _HeroComponent_249_5 = new import8.HeroComponent();
    _compView_249.create(_HeroComponent_249_5, []);
    _el_250 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_250);
    _el_251 = createAndAppend(doc, 'img', _el_250);
    addShimE(_el_251);
    import3.Text _text_252 = new import3.Text('is the');
    _el_250.append(_text_252);
    _el_253 = createAndAppend(doc, 'i', _el_250);
    addShimE(_el_253);
    import3.Text _text_254 = new import3.Text('interpolated');
    _el_253.append(_text_254);
    import3.Text _text_255 = new import3.Text('image.');
    _el_250.append(_text_255);
    _el_256 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_256);
    _el_257 = createAndAppend(doc, 'img', _el_256);
    addShimE(_el_257);
    import3.Text _text_258 = new import3.Text('is the');
    _el_256.append(_text_258);
    _el_259 = createAndAppend(doc, 'i', _el_256);
    addShimE(_el_259);
    import3.Text _text_260 = new import3.Text('property bound');
    _el_259.append(_text_260);
    import3.Text _text_261 = new import3.Text('image.');
    _el_256.append(_text_261);
    _el_262 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_262);
    _el_263 = createSpanAndAppend(doc, _el_262);
    addShimE(_el_263);
    import3.Text _text_264 = new import3.Text('"');
    _el_263.append(_text_264);
    _text_265 = new import3.Text('');
    _el_263.append(_text_265);
    import3.Text _text_266 = new import3.Text('" is the ');
    _el_263.append(_text_266);
    _el_267 = createAndAppend(doc, 'i', _el_263);
    addShimE(_el_267);
    import3.Text _text_268 = new import3.Text('interpolated');
    _el_267.append(_text_268);
    import3.Text _text_269 = new import3.Text('title.');
    _el_263.append(_text_269);
    _el_270 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_270);
    import3.Text _text_271 = new import3.Text('"');
    _el_270.append(_text_271);
    _el_272 = createSpanAndAppend(doc, _el_270);
    addShimE(_el_272);
    import3.Text _text_273 = new import3.Text('" is the');
    _el_270.append(_text_273);
    _el_274 = createAndAppend(doc, 'i', _el_270);
    addShimE(_el_274);
    import3.Text _text_275 = new import3.Text('property bound');
    _el_274.append(_text_275);
    import3.Text _text_276 = new import3.Text('title.');
    _el_270.append(_text_276);
    _el_277 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_277);
    _el_278 = createSpanAndAppend(doc, _el_277);
    addShimE(_el_278);
    import3.Text _text_279 = new import3.Text('"');
    _el_278.append(_text_279);
    _text_280 = new import3.Text('');
    _el_278.append(_text_280);
    import3.Text _text_281 = new import3.Text('" is the ');
    _el_278.append(_text_281);
    _el_282 = createAndAppend(doc, 'i', _el_278);
    addShimE(_el_282);
    import3.Text _text_283 = new import3.Text('interpolated');
    _el_282.append(_text_283);
    import3.Text _text_284 = new import3.Text('evil title.');
    _el_278.append(_text_284);
    _el_285 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_285);
    import3.Text _text_286 = new import3.Text('"');
    _el_285.append(_text_286);
    _el_287 = createSpanAndAppend(doc, _el_285);
    addShimE(_el_287);
    import3.Text _text_288 = new import3.Text('" is the');
    _el_285.append(_text_288);
    _el_289 = createAndAppend(doc, 'i', _el_285);
    addShimE(_el_289);
    import3.Text _text_290 = new import3.Text('property bound');
    _el_289.append(_text_290);
    import3.Text _text_291 = new import3.Text('evil title.');
    _el_285.append(_text_291);
    _el_292 = createAndAppend(doc, 'a', parentRenderNode);
    _el_292.className = 'to-toc';
    createAttr(_el_292, 'href', '#toc');
    addShimC(_el_292);
    import3.Text _text_293 = new import3.Text('top');
    _el_292.append(_text_293);
    _el_294 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_294);
    _el_295 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_295, 'id', 'attribute-binding');
    addShimE(_el_295);
    import3.Text _text_296 = new import3.Text('Attribute Binding');
    _el_295.append(_text_296);
    _el_297 = createAndAppend(doc, 'table', parentRenderNode);
    createAttr(_el_297, 'border', '1');
    addShimC(_el_297);
    _el_298 = createAndAppend(doc, 'tr', _el_297);
    addShimE(_el_298);
    _el_299 = createAndAppend(doc, 'td', _el_298);
    addShimE(_el_299);
    import3.Text _text_300 = new import3.Text('One-Two');
    _el_299.append(_text_300);
    _el_301 = createAndAppend(doc, 'tr', _el_297);
    addShimE(_el_301);
    _el_302 = createAndAppend(doc, 'td', _el_301);
    addShimE(_el_302);
    import3.Text _text_303 = new import3.Text('Five');
    _el_302.append(_text_303);
    _el_304 = createAndAppend(doc, 'td', _el_301);
    addShimE(_el_304);
    import3.Text _text_305 = new import3.Text('Six');
    _el_304.append(_text_305);
    _el_306 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_306);
    _el_307 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_307);
    _text_308 = new import3.Text('');
    _el_307.append(_text_308);
    import3.Text _text_309 = new import3.Text(' with Aria');
    _el_307.append(_text_309);
    _el_310 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_310);
    _el_311 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_311);
    _el_312 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_312);
    _el_313 = createAndAppend(doc, 'button', _el_312);
    addShimC(_el_313);
    import3.Text _text_314 = new import3.Text('Disabled');
    _el_313.append(_text_314);
    _el_315 = createAndAppend(doc, 'button', _el_312);
    addShimC(_el_315);
    import3.Text _text_316 = new import3.Text('Disabled as well');
    _el_315.append(_text_316);
    _el_317 = createAndAppend(doc, 'button', _el_312);
    createAttr(_el_317, 'disabled', '');
    addShimC(_el_317);
    import3.Text _text_318 = new import3.Text('Enabled (but inert)');
    _el_317.append(_text_318);
    _el_319 = createAndAppend(doc, 'a', parentRenderNode);
    _el_319.className = 'to-toc';
    createAttr(_el_319, 'href', '#toc');
    addShimC(_el_319);
    import3.Text _text_320 = new import3.Text('top');
    _el_319.append(_text_320);
    _el_321 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_321);
    _el_322 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_322, 'id', 'class-binding');
    addShimE(_el_322);
    import3.Text _text_323 = new import3.Text('Class Binding');
    _el_322.append(_text_323);
    _el_324 = createDivAndAppend(doc, parentRenderNode);
    _el_324.className = 'bad curly special';
    addShimC(_el_324);
    import3.Text _text_325 = new import3.Text('Bad curly special');
    _el_324.append(_text_325);
    _el_326 = createDivAndAppend(doc, parentRenderNode);
    _el_326.className = 'bad curly special';
    addShimC(_el_326);
    import3.Text _text_327 = new import3.Text('Bad curly');
    _el_326.append(_text_327);
    _el_328 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_328);
    import3.Text _text_329 = new import3.Text('The class binding is special');
    _el_328.append(_text_329);
    _el_330 = createDivAndAppend(doc, parentRenderNode);
    _el_330.className = 'special';
    addShimC(_el_330);
    import3.Text _text_331 = new import3.Text('This one is not so special');
    _el_330.append(_text_331);
    _el_332 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_332);
    import3.Text _text_333 = new import3.Text('This class binding is special too');
    _el_332.append(_text_333);
    _el_334 = createAndAppend(doc, 'a', parentRenderNode);
    _el_334.className = 'to-toc';
    createAttr(_el_334, 'href', '#toc');
    addShimC(_el_334);
    import3.Text _text_335 = new import3.Text('top');
    _el_334.append(_text_335);
    _el_336 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_336);
    _el_337 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_337, 'id', 'style-binding');
    addShimE(_el_337);
    import3.Text _text_338 = new import3.Text('Style Binding');
    _el_337.append(_text_338);
    _el_339 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_339);
    import3.Text _text_340 = new import3.Text('Red');
    _el_339.append(_text_340);
    _el_341 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_341);
    import3.Text _text_342 = new import3.Text('Save');
    _el_341.append(_text_342);
    _el_343 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_343);
    import3.Text _text_344 = new import3.Text('Big');
    _el_343.append(_text_344);
    _el_345 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_345);
    import3.Text _text_346 = new import3.Text('Small');
    _el_345.append(_text_346);
    _el_347 = createAndAppend(doc, 'a', parentRenderNode);
    _el_347.className = 'to-toc';
    createAttr(_el_347, 'href', '#toc');
    addShimC(_el_347);
    import3.Text _text_348 = new import3.Text('top');
    _el_347.append(_text_348);
    _el_349 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_349);
    _el_350 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_350, 'id', 'event-binding');
    addShimE(_el_350);
    import3.Text _text_351 = new import3.Text('Event Binding');
    _el_350.append(_text_351);
    _el_352 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_352);
    import3.Text _text_353 = new import3.Text('Save');
    _el_352.append(_text_353);
    _el_354 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_354);
    import3.Text _text_355 = new import3.Text('On Save');
    _el_354.append(_text_355);
    _el_356 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_356);
    _el_357 = createDivAndAppend(doc, _el_356);
    createAttr(_el_357, 'clickable', '');
    addShimC(_el_357);
    _ClickDirective_357_5 = new import10.ClickDirective(_el_357);
    import3.Text _text_358 = new import3.Text('click with myClick');
    _el_357.append(_text_358);
    _text_359 = new import3.Text('');
    _el_356.append(_text_359);
    _compView_360 = new import7.ViewHeroComponent0(this, 360);
    _el_360 = _compView_360.rootEl;
    parentRenderNode.append(_el_360);
    addShimC(_el_360);
    _HeroComponent_360_5 = new import8.HeroComponent();
    _compView_360.create(_HeroComponent_360_5, []);
    _el_361 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_361);
    _compView_362 = new import7.ViewBigHeroComponent0(this, 362);
    _el_362 = _compView_362.rootEl;
    parentRenderNode.append(_el_362);
    addShimC(_el_362);
    _BigHeroComponent_362_5 = new import8.BigHeroComponent();
    _compView_362.create(_BigHeroComponent_362_5, []);
    _el_363 = createDivAndAppend(doc, parentRenderNode);
    _el_363.className = 'parent-div';
    createAttr(_el_363, 'clickable', '');
    addShimC(_el_363);
    import3.Text _text_364 = new import3.Text('Click me');
    _el_363.append(_text_364);
    _el_365 = createDivAndAppend(doc, _el_363);
    _el_365.className = 'child-div';
    addShimC(_el_365);
    import3.Text _text_366 = new import3.Text('Click me too!');
    _el_365.append(_text_366);
    _el_367 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_367, 'clickable', '');
    addShimC(_el_367);
    _el_368 = createAndAppend(doc, 'button', _el_367);
    addShimC(_el_368);
    import3.Text _text_369 = new import3.Text('Save, no propagation');
    _el_368.append(_text_369);
    _el_370 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_370, 'clickable', '');
    addShimC(_el_370);
    _el_371 = createAndAppend(doc, 'button', _el_370);
    addShimC(_el_371);
    import3.Text _text_372 = new import3.Text('Save w/ propagation');
    _el_371.append(_text_372);
    _el_373 = createAndAppend(doc, 'a', parentRenderNode);
    _el_373.className = 'to-toc';
    createAttr(_el_373, 'href', '#toc');
    addShimC(_el_373);
    import3.Text _text_374 = new import3.Text('top');
    _el_373.append(_text_374);
    _el_375 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_375);
    _el_376 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_376, 'id', 'two-way');
    addShimE(_el_376);
    import3.Text _text_377 = new import3.Text('Two-way Binding');
    _el_376.append(_text_377);
    _el_378 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_378, 'id', 'two-way-1');
    addShimC(_el_378);
    _compView_379 = new import14.ViewSizerComponent0(this, 379);
    _el_379 = _compView_379.rootEl;
    _el_378.append(_el_379);
    addShimC(_el_379);
    _SizerComponent_379_5 = new import15.SizerComponent();
    _compView_379.create(_SizerComponent_379_5, []);
    _el_380 = createDivAndAppend(doc, _el_378);
    addShimC(_el_380);
    import3.Text _text_381 = new import3.Text('Resizable Text');
    _el_380.append(_text_381);
    _el_382 = createAndAppend(doc, 'label', _el_378);
    addShimE(_el_382);
    import3.Text _text_383 = new import3.Text('FontSize (px):');
    _el_382.append(_text_383);
    _el_384 = createAndAppend(doc, 'input', _el_382);
    addShimC(_el_384);
    _DefaultValueAccessor_384_5 = new import11.DefaultValueAccessor(_el_384);
    _NgValueAccessor_384_6 = [_DefaultValueAccessor_384_5];
    _NgModel_384_7 = new import13.NgModel(null, _NgValueAccessor_384_6);
    import3.Text _text_385 = new import3.Text(' ');
    _el_382.append(_text_385);
    _text_386 = new import3.Text('');
    _el_382.append(_text_386);
    _el_387 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_387);
    _el_388 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_388, 'id', 'two-way-2');
    addShimC(_el_388);
    _el_389 = createAndAppend(doc, 'h3', _el_388);
    addShimE(_el_389);
    import3.Text _text_390 = new import3.Text('De-sugared two-way binding');
    _el_389.append(_text_390);
    _compView_391 = new import14.ViewSizerComponent0(this, 391);
    _el_391 = _compView_391.rootEl;
    _el_388.append(_el_391);
    addShimC(_el_391);
    _SizerComponent_391_5 = new import15.SizerComponent();
    _compView_391.create(_SizerComponent_391_5, []);
    _el_392 = createAndAppend(doc, 'a', parentRenderNode);
    _el_392.className = 'to-toc';
    createAttr(_el_392, 'href', '#toc');
    addShimC(_el_392);
    import3.Text _text_393 = new import3.Text('top');
    _el_392.append(_text_393);
    _el_394 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_394);
    _el_395 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_395, 'id', 'ngModel');
    addShimE(_el_395);
    import3.Text _text_396 = new import3.Text('NgModel (two-way) Binding');
    _el_395.append(_text_396);
    _el_397 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_397);
    import3.Text _text_398 = new import3.Text('Result: ');
    _el_397.append(_text_398);
    _text_399 = new import3.Text('');
    _el_397.append(_text_399);
    _el_400 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_400);
    import3.Text _text_401 = new import3.Text('without NgModel');
    parentRenderNode.append(_text_401);
    _el_402 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_402);
    _el_403 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_403);
    _DefaultValueAccessor_403_5 = new import11.DefaultValueAccessor(_el_403);
    _NgValueAccessor_403_6 = [_DefaultValueAccessor_403_5];
    _NgModel_403_7 = new import13.NgModel(null, _NgValueAccessor_403_6);
    import3.Text _text_404 = new import3.Text('[(ngModel)]');
    parentRenderNode.append(_text_404);
    _el_405 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_405);
    _el_406 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_406);
    _DefaultValueAccessor_406_5 = new import11.DefaultValueAccessor(_el_406);
    _NgValueAccessor_406_6 = [_DefaultValueAccessor_406_5];
    _NgModel_406_7 = new import13.NgModel(null, _NgValueAccessor_406_6);
    import3.Text _text_407 = new import3.Text('(ngModelChange)="...name=\$event"');
    parentRenderNode.append(_text_407);
    _el_408 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_408);
    _el_409 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_409);
    _DefaultValueAccessor_409_5 = new import11.DefaultValueAccessor(_el_409);
    _NgValueAccessor_409_6 = [_DefaultValueAccessor_409_5];
    _NgModel_409_7 = new import13.NgModel(null, _NgValueAccessor_409_6);
    import3.Text _text_410 = new import3.Text('(ngModelChange)="setUppercaseName(\$event)"');
    parentRenderNode.append(_text_410);
    _el_411 = createAndAppend(doc, 'a', parentRenderNode);
    _el_411.className = 'to-toc';
    createAttr(_el_411, 'href', '#toc');
    addShimC(_el_411);
    import3.Text _text_412 = new import3.Text('top');
    _el_411.append(_text_412);
    _el_413 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_413);
    _el_414 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_414, 'id', 'ngClass');
    addShimE(_el_414);
    import3.Text _text_415 = new import3.Text('NgClass Binding');
    _el_414.append(_text_415);
    _el_416 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_416);
    import3.Text _text_417 = new import3.Text('currentClasses is ');
    _el_416.append(_text_417);
    _text_418 = new import3.Text('');
    _el_416.append(_text_418);
    _el_419 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_419);
    _NgClass_419_5 = new import9.NgClass(_el_419);
    import3.Text _text_420 = new import3.Text('This div is initially saveable, unchanged, and special');
    _el_419.append(_text_420);
    _el_421 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_421);
    _el_422 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_422);
    import3.Text _text_423 = new import3.Text('saveable');
    _el_422.append(_text_423);
    _el_424 = createAndAppend(doc, 'input', _el_422);
    createAttr(_el_424, 'type', 'checkbox');
    addShimC(_el_424);
    _CheckboxControlValueAccessor_424_5 = new import16.CheckboxControlValueAccessor(_el_424);
    _NgValueAccessor_424_6 = [_CheckboxControlValueAccessor_424_5];
    _NgModel_424_7 = new import13.NgModel(null, _NgValueAccessor_424_6);
    _el_425 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_425);
    import3.Text _text_426 = new import3.Text('modified:');
    _el_425.append(_text_426);
    _el_427 = createAndAppend(doc, 'input', _el_425);
    createAttr(_el_427, 'type', 'checkbox');
    addShimC(_el_427);
    _el_428 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_428);
    import3.Text _text_429 = new import3.Text('special:');
    _el_428.append(_text_429);
    _el_430 = createAndAppend(doc, 'input', _el_428);
    createAttr(_el_430, 'type', 'checkbox');
    addShimC(_el_430);
    _CheckboxControlValueAccessor_430_5 = new import16.CheckboxControlValueAccessor(_el_430);
    _NgValueAccessor_430_6 = [_CheckboxControlValueAccessor_430_5];
    _NgModel_430_7 = new import13.NgModel(null, _NgValueAccessor_430_6);
    _el_431 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_431);
    import3.Text _text_432 = new import3.Text('Refresh currentClasses');
    _el_431.append(_text_432);
    _el_433 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_433);
    _el_434 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_434);
    _el_435 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_435);
    _NgClass_435_5 = new import9.NgClass(_el_435);
    import3.Text _text_436 = new import3.Text('This div should be ');
    _el_435.append(_text_436);
    _text_437 = new import3.Text('');
    _el_435.append(_text_437);
    import3.Text _text_438 = new import3.Text(' saveable,\n                  ');
    _el_435.append(_text_438);
    _text_439 = new import3.Text('');
    _el_435.append(_text_439);
    import3.Text _text_440 = new import3.Text(' and,\n                  ');
    _el_435.append(_text_440);
    _text_441 = new import3.Text('');
    _el_435.append(_text_441);
    import3.Text _text_442 = new import3.Text(' special after clicking "Refresh".');
    _el_435.append(_text_442);
    _el_443 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_443);
    _el_444 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_444);
    _el_445 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_445);
    _NgClass_445_5 = new import9.NgClass(_el_445);
    import3.Text _text_446 = new import3.Text('This div is special');
    _el_445.append(_text_446);
    _el_447 = createDivAndAppend(doc, parentRenderNode);
    _el_447.className = 'bad curly special';
    addShimC(_el_447);
    import3.Text _text_448 = new import3.Text('Bad curly special');
    _el_447.append(_text_448);
    _el_449 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_449);
    _NgClass_449_5 = new import9.NgClass(_el_449);
    import3.Text _text_450 = new import3.Text('Curly special');
    _el_449.append(_text_450);
    _el_451 = createAndAppend(doc, 'a', parentRenderNode);
    _el_451.className = 'to-toc';
    createAttr(_el_451, 'href', '#toc');
    addShimC(_el_451);
    import3.Text _text_452 = new import3.Text('top');
    _el_451.append(_text_452);
    _el_453 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_453);
    _el_454 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_454, 'id', 'ngStyle');
    addShimE(_el_454);
    import3.Text _text_455 = new import3.Text('NgStyle Binding');
    _el_454.append(_text_455);
    _el_456 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_456);
    import3.Text _text_457 = new import3.Text('This div is x-large or smaller.');
    _el_456.append(_text_457);
    _el_458 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_458);
    import3.Text _text_459 = new import3.Text('[ngStyle] binding to currentStyles - CSS property names');
    _el_458.append(_text_459);
    _el_460 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_460);
    import3.Text _text_461 = new import3.Text('currentStyles is ');
    _el_460.append(_text_461);
    _text_462 = new import3.Text('');
    _el_460.append(_text_462);
    _el_463 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_463);
    _NgStyle_463_5 = new import17.NgStyle(_el_463);
    import3.Text _text_464 = new import3.Text('This div is initially italic, normal weight, and extra large (24px).');
    _el_463.append(_text_464);
    _el_465 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_465);
    _el_466 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_466);
    import3.Text _text_467 = new import3.Text('italic:');
    _el_466.append(_text_467);
    _el_468 = createAndAppend(doc, 'input', _el_466);
    createAttr(_el_468, 'type', 'checkbox');
    addShimC(_el_468);
    _CheckboxControlValueAccessor_468_5 = new import16.CheckboxControlValueAccessor(_el_468);
    _NgValueAccessor_468_6 = [_CheckboxControlValueAccessor_468_5];
    _NgModel_468_7 = new import13.NgModel(null, _NgValueAccessor_468_6);
    import3.Text _text_469 = new import3.Text('|');
    parentRenderNode.append(_text_469);
    _el_470 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_470);
    import3.Text _text_471 = new import3.Text('normal:');
    _el_470.append(_text_471);
    _el_472 = createAndAppend(doc, 'input', _el_470);
    createAttr(_el_472, 'type', 'checkbox');
    addShimC(_el_472);
    _CheckboxControlValueAccessor_472_5 = new import16.CheckboxControlValueAccessor(_el_472);
    _NgValueAccessor_472_6 = [_CheckboxControlValueAccessor_472_5];
    _NgModel_472_7 = new import13.NgModel(null, _NgValueAccessor_472_6);
    import3.Text _text_473 = new import3.Text('|');
    parentRenderNode.append(_text_473);
    _el_474 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_474);
    import3.Text _text_475 = new import3.Text('xlarge:');
    _el_474.append(_text_475);
    _el_476 = createAndAppend(doc, 'input', _el_474);
    createAttr(_el_476, 'type', 'checkbox');
    addShimC(_el_476);
    _CheckboxControlValueAccessor_476_5 = new import16.CheckboxControlValueAccessor(_el_476);
    _NgValueAccessor_476_6 = [_CheckboxControlValueAccessor_476_5];
    _NgModel_476_7 = new import13.NgModel(null, _NgValueAccessor_476_6);
    _el_477 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_477);
    import3.Text _text_478 = new import3.Text('Refresh currentStyles');
    _el_477.append(_text_478);
    _el_479 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_479);
    _el_480 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_480);
    _el_481 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_481);
    _NgStyle_481_5 = new import17.NgStyle(_el_481);
    import3.Text _text_482 = new import3.Text('This div should be ');
    _el_481.append(_text_482);
    _text_483 = new import3.Text('');
    _el_481.append(_text_483);
    import3.Text _text_484 = new import3.Text(',\n                  ');
    _el_481.append(_text_484);
    _text_485 = new import3.Text('');
    _el_481.append(_text_485);
    import3.Text _text_486 = new import3.Text(' and,\n                  ');
    _el_481.append(_text_486);
    _text_487 = new import3.Text('');
    _el_481.append(_text_487);
    import3.Text _text_488 = new import3.Text(' after clicking "Refresh".');
    _el_481.append(_text_488);
    _el_489 = createAndAppend(doc, 'a', parentRenderNode);
    _el_489.className = 'to-toc';
    createAttr(_el_489, 'href', '#toc');
    addShimC(_el_489);
    import3.Text _text_490 = new import3.Text('top');
    _el_489.append(_text_490);
    _el_491 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_491);
    _el_492 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_492, 'id', 'ngIf');
    addShimE(_el_492);
    import3.Text _text_493 = new import3.Text('NgIf Binding');
    _el_492.append(_text_493);
    final _anchor_494 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_494);
    _appEl_494 = new ViewContainer(494, null, this, _anchor_494);
    TemplateRef _TemplateRef_494_8 = new TemplateRef(_appEl_494, viewFactory_AppComponent4);
    _NgIf_494_9 = new NgIf(_appEl_494, _TemplateRef_494_8);
    final _anchor_495 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_495);
    _appEl_495 = new ViewContainer(495, null, this, _anchor_495);
    TemplateRef _TemplateRef_495_8 = new TemplateRef(_appEl_495, viewFactory_AppComponent5);
    _NgIf_495_9 = new NgIf(_appEl_495, _TemplateRef_495_8);
    final _anchor_496 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_496);
    _appEl_496 = new ViewContainer(496, null, this, _anchor_496);
    TemplateRef _TemplateRef_496_8 = new TemplateRef(_appEl_496, viewFactory_AppComponent6);
    _NgIf_496_9 = new NgIf(_appEl_496, _TemplateRef_496_8);
    final _anchor_497 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_497);
    _appEl_497 = new ViewContainer(497, null, this, _anchor_497);
    TemplateRef _TemplateRef_497_8 = new TemplateRef(_appEl_497, viewFactory_AppComponent7);
    _NgIf_497_9 = new NgIf(_appEl_497, _TemplateRef_497_8);
    _el_498 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_498);
    import3.Text _text_499 = new import3.Text('Hero Detail removed from DOM (via template) because isActive is false');
    _el_498.append(_text_499);
    final _anchor_500 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_500);
    _appEl_500 = new ViewContainer(500, null, this, _anchor_500);
    TemplateRef _TemplateRef_500_8 = new TemplateRef(_appEl_500, viewFactory_AppComponent8);
    _NgIf_500_9 = new NgIf(_appEl_500, _TemplateRef_500_8);
    _el_501 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_501);
    import3.Text _text_502 = new import3.Text('Show with class');
    _el_501.append(_text_502);
    _el_503 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_503);
    import3.Text _text_504 = new import3.Text('Hide with class');
    _el_503.append(_text_504);
    _compView_505 = new import7.ViewHeroComponent0(this, 505);
    _el_505 = _compView_505.rootEl;
    parentRenderNode.append(_el_505);
    addShimC(_el_505);
    _HeroComponent_505_5 = new import8.HeroComponent();
    _compView_505.create(_HeroComponent_505_5, []);
    _el_506 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_506);
    import3.Text _text_507 = new import3.Text('Show with style');
    _el_506.append(_text_507);
    _el_508 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_508);
    import3.Text _text_509 = new import3.Text('Hide with style');
    _el_508.append(_text_509);
    _el_510 = createAndAppend(doc, 'a', parentRenderNode);
    _el_510.className = 'to-toc';
    createAttr(_el_510, 'href', '#toc');
    addShimC(_el_510);
    import3.Text _text_511 = new import3.Text('top');
    _el_510.append(_text_511);
    _el_512 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_512);
    _el_513 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_513, 'id', 'ngFor');
    addShimE(_el_513);
    import3.Text _text_514 = new import3.Text('NgFor Binding');
    _el_513.append(_text_514);
    _el_515 = createDivAndAppend(doc, parentRenderNode);
    _el_515.className = 'box';
    addShimC(_el_515);
    final _anchor_516 = createViewContainerAnchor();
    _el_515.append(_anchor_516);
    _appEl_516 = new ViewContainer(516, 515, this, _anchor_516);
    TemplateRef _TemplateRef_516_8 = new TemplateRef(_appEl_516, viewFactory_AppComponent9);
    _NgFor_516_9 = new import5.NgFor(_appEl_516, _TemplateRef_516_8);
    _el_517 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_517);
    _el_518 = createDivAndAppend(doc, parentRenderNode);
    _el_518.className = 'box';
    addShimC(_el_518);
    final _anchor_519 = createViewContainerAnchor();
    _el_518.append(_anchor_519);
    _appEl_519 = new ViewContainer(519, 518, this, _anchor_519);
    TemplateRef _TemplateRef_519_8 = new TemplateRef(_appEl_519, viewFactory_AppComponent10);
    _NgFor_519_9 = new import5.NgFor(_appEl_519, _TemplateRef_519_8);
    _el_520 = createAndAppend(doc, 'a', parentRenderNode);
    _el_520.className = 'to-toc';
    createAttr(_el_520, 'href', '#toc');
    addShimC(_el_520);
    import3.Text _text_521 = new import3.Text('top');
    _el_520.append(_text_521);
    _el_522 = createAndAppend(doc, 'h4', parentRenderNode);
    createAttr(_el_522, 'id', 'ngFor-index');
    addShimE(_el_522);
    import3.Text _text_523 = new import3.Text('*ngFor with index');
    _el_522.append(_text_523);
    _el_524 = createDivAndAppend(doc, parentRenderNode);
    _el_524.className = 'box';
    addShimC(_el_524);
    final _anchor_525 = createViewContainerAnchor();
    _el_524.append(_anchor_525);
    _appEl_525 = new ViewContainer(525, 524, this, _anchor_525);
    TemplateRef _TemplateRef_525_8 = new TemplateRef(_appEl_525, viewFactory_AppComponent11);
    _NgFor_525_9 = new import5.NgFor(_appEl_525, _TemplateRef_525_8);
    _el_526 = createAndAppend(doc, 'a', parentRenderNode);
    _el_526.className = 'to-toc';
    createAttr(_el_526, 'href', '#toc');
    addShimC(_el_526);
    import3.Text _text_527 = new import3.Text('top');
    _el_526.append(_text_527);
    _el_528 = createAndAppend(doc, 'h4', parentRenderNode);
    createAttr(_el_528, 'id', 'ngFor-trackBy');
    addShimE(_el_528);
    import3.Text _text_529 = new import3.Text('*ngFor trackBy');
    _el_528.append(_text_529);
    _el_530 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_530);
    import3.Text _text_531 = new import3.Text('Reset heroes');
    _el_530.append(_text_531);
    _el_532 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_532);
    import3.Text _text_533 = new import3.Text('Change ids');
    _el_532.append(_text_533);
    _el_534 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_534);
    import3.Text _text_535 = new import3.Text('Clear counts');
    _el_534.append(_text_535);
    _el_536 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_536);
    _el_537 = createAndAppend(doc, 'i', _el_536);
    addShimE(_el_537);
    import3.Text _text_538 = new import3.Text('without');
    _el_537.append(_text_538);
    import3.Text _text_539 = new import3.Text('trackBy');
    _el_536.append(_text_539);
    _el_540 = createDivAndAppend(doc, parentRenderNode);
    _el_540.className = 'box';
    addShimC(_el_540);
    final _anchor_541 = createViewContainerAnchor();
    _el_540.append(_anchor_541);
    _appEl_541 = new ViewContainer(541, 540, this, _anchor_541);
    TemplateRef _TemplateRef_541_8 = new TemplateRef(_appEl_541, viewFactory_AppComponent12);
    _NgFor_541_9 = new import5.NgFor(_appEl_541, _TemplateRef_541_8);
    final _anchor_542 = createViewContainerAnchor();
    _el_540.append(_anchor_542);
    _appEl_542 = new ViewContainer(542, 540, this, _anchor_542);
    TemplateRef _TemplateRef_542_8 = new TemplateRef(_appEl_542, viewFactory_AppComponent13);
    _NgIf_542_9 = new NgIf(_appEl_542, _TemplateRef_542_8);
    _el_543 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_543);
    import3.Text _text_544 = new import3.Text('with');
    _el_543.append(_text_544);
    _el_545 = createAndAppend(doc, 'code', _el_543);
    addShimE(_el_545);
    import3.Text _text_546 = new import3.Text('trackBy: trackByHeroId(int, dynamic)');
    _el_545.append(_text_546);
    _el_547 = createDivAndAppend(doc, parentRenderNode);
    _el_547.className = 'box';
    addShimC(_el_547);
    final _anchor_548 = createViewContainerAnchor();
    _el_547.append(_anchor_548);
    _appEl_548 = new ViewContainer(548, 547, this, _anchor_548);
    TemplateRef _TemplateRef_548_8 = new TemplateRef(_appEl_548, viewFactory_AppComponent14);
    _NgFor_548_9 = new import5.NgFor(_appEl_548, _TemplateRef_548_8);
    final _anchor_549 = createViewContainerAnchor();
    _el_547.append(_anchor_549);
    _appEl_549 = new ViewContainer(549, 547, this, _anchor_549);
    TemplateRef _TemplateRef_549_8 = new TemplateRef(_appEl_549, viewFactory_AppComponent15);
    _NgIf_549_9 = new NgIf(_appEl_549, _TemplateRef_549_8);
    _el_550 = createAndAppend(doc, 'a', parentRenderNode);
    _el_550.className = 'to-toc';
    createAttr(_el_550, 'href', '#toc');
    addShimC(_el_550);
    import3.Text _text_551 = new import3.Text('top');
    _el_550.append(_text_551);
    _el_552 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_552);
    _el_553 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_553, 'id', 'ngSwitch');
    addShimE(_el_553);
    import3.Text _text_554 = new import3.Text('NgSwitch Binding');
    _el_553.append(_text_554);
    _el_555 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_555);
    import3.Text _text_556 = new import3.Text('Pick your favorite hero');
    _el_555.append(_text_556);
    _compView_557 = new import19.ViewMaterialRadioGroupComponent0(this, 557);
    _el_557 = _compView_557.rootEl;
    parentRenderNode.append(_el_557);
    addShimC(_el_557);
    _NgModel_557_5 = new import13.NgModel(null, null);
    _NgControl_557_6 = _NgModel_557_5;
    _MaterialRadioGroupComponent_557_7 = new import20.MaterialRadioGroupComponent(parentView.injectorGet(import36.NgZone, viewData.parentIndex), _NgControl_557_6);
    final _anchor_558 = createViewContainerAnchor();
    _appEl_558 = new ViewContainer(558, 557, this, _anchor_558);
    TemplateRef _TemplateRef_558_8 = new TemplateRef(_appEl_558, viewFactory_AppComponent16);
    _NgFor_558_9 = new import5.NgFor(_appEl_558, _TemplateRef_558_8);
    _compView_557.create(_MaterialRadioGroupComponent_557_7, [
      [_appEl_558]
    ]);
    _el_559 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_559);
    import3.Text _text_560 = new import3.Text('Current hero is: ');
    _el_559.append(_text_560);
    _text_561 = new import3.Text('');
    _el_559.append(_text_561);
    import3.Text _text_562 = new import3.Text(' (');
    _el_559.append(_text_562);
    _text_563 = new import3.Text('');
    _el_559.append(_text_563);
    import3.Text _text_564 = new import3.Text(')');
    _el_559.append(_text_564);
    _el_565 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_565);
    _NgSwitch_565_5 = new import21.NgSwitch();
    final _anchor_566 = createViewContainerAnchor();
    _el_565.append(_anchor_566);
    _appEl_566 = new ViewContainer(566, 565, this, _anchor_566);
    TemplateRef _TemplateRef_566_8 = new TemplateRef(_appEl_566, viewFactory_AppComponent17);
    _NgSwitchWhen_566_9 = new import21.NgSwitchWhen(_appEl_566, _TemplateRef_566_8, _NgSwitch_565_5);
    final _anchor_567 = createViewContainerAnchor();
    _el_565.append(_anchor_567);
    _appEl_567 = new ViewContainer(567, 565, this, _anchor_567);
    TemplateRef _TemplateRef_567_8 = new TemplateRef(_appEl_567, viewFactory_AppComponent18);
    _NgSwitchWhen_567_9 = new import21.NgSwitchWhen(_appEl_567, _TemplateRef_567_8, _NgSwitch_565_5);
    final _anchor_568 = createViewContainerAnchor();
    _el_565.append(_anchor_568);
    _appEl_568 = new ViewContainer(568, 565, this, _anchor_568);
    TemplateRef _TemplateRef_568_8 = new TemplateRef(_appEl_568, viewFactory_AppComponent19);
    _NgSwitchWhen_568_9 = new import21.NgSwitchWhen(_appEl_568, _TemplateRef_568_8, _NgSwitch_565_5);
    final _anchor_569 = createViewContainerAnchor();
    _el_565.append(_anchor_569);
    _appEl_569 = new ViewContainer(569, 565, this, _anchor_569);
    TemplateRef _TemplateRef_569_8 = new TemplateRef(_appEl_569, viewFactory_AppComponent20);
    _NgSwitchWhen_569_9 = new import21.NgSwitchWhen(_appEl_569, _TemplateRef_569_8, _NgSwitch_565_5);
    final _anchor_570 = createViewContainerAnchor();
    _el_565.append(_anchor_570);
    _appEl_570 = new ViewContainer(570, 565, this, _anchor_570);
    TemplateRef _TemplateRef_570_8 = new TemplateRef(_appEl_570, viewFactory_AppComponent21);
    _NgSwitchDefault_570_9 = new import21.NgSwitchDefault(_appEl_570, _TemplateRef_570_8, _NgSwitch_565_5);
    _el_571 = createAndAppend(doc, 'a', parentRenderNode);
    _el_571.className = 'to-toc';
    createAttr(_el_571, 'href', '#toc');
    addShimC(_el_571);
    import3.Text _text_572 = new import3.Text('top');
    _el_571.append(_text_572);
    _el_573 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_573);
    _el_574 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_574, 'id', 'ref-vars');
    addShimE(_el_574);
    import3.Text _text_575 = new import3.Text('Template reference variables');
    _el_574.append(_text_575);
    _el_576 = createAndAppend(doc, 'input', parentRenderNode);
    createAttr(_el_576, 'placeholder', 'phone number');
    addShimC(_el_576);
    _el_577 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_577);
    import3.Text _text_578 = new import3.Text('Call');
    _el_577.append(_text_578);
    _el_579 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_579, 'disabled', '');
    addShimC(_el_579);
    _el_580 = createAndAppend(doc, 'h4', parentRenderNode);
    addShimE(_el_580);
    import3.Text _text_581 = new import3.Text('Example Form');
    _el_580.append(_text_581);
    _compView_582 = new import22.ViewHeroFormComponent0(this, 582);
    _el_582 = _compView_582.rootEl;
    parentRenderNode.append(_el_582);
    addShimC(_el_582);
    _HeroFormComponent_582_5 = new import23.HeroFormComponent();
    _compView_582.create(_HeroFormComponent_582_5, []);
    _el_583 = createAndAppend(doc, 'a', parentRenderNode);
    _el_583.className = 'to-toc';
    createAttr(_el_583, 'href', '#toc');
    addShimC(_el_583);
    import3.Text _text_584 = new import3.Text('top');
    _el_583.append(_text_584);
    _el_585 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_585);
    _el_586 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_586, 'id', 'inputs-and-outputs');
    addShimE(_el_586);
    import3.Text _text_587 = new import3.Text('Inputs and Outputs');
    _el_586.append(_text_587);
    _el_588 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_588);
    _el_589 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_589);
    import3.Text _text_590 = new import3.Text('Save');
    _el_589.append(_text_590);
    _compView_591 = new import7.ViewHeroComponent0(this, 591);
    _el_591 = _compView_591.rootEl;
    parentRenderNode.append(_el_591);
    addShimC(_el_591);
    _HeroComponent_591_5 = new import8.HeroComponent();
    _compView_591.create(_HeroComponent_591_5, []);
    _el_592 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_592, 'clickable', '');
    addShimC(_el_592);
    _ClickDirective_592_5 = new import10.ClickDirective(_el_592);
    import3.Text _text_593 = new import3.Text('myClick2');
    _el_592.append(_text_593);
    _text_594 = new import3.Text('');
    parentRenderNode.append(_text_594);
    _el_595 = createAndAppend(doc, 'a', parentRenderNode);
    _el_595.className = 'to-toc';
    createAttr(_el_595, 'href', '#toc');
    addShimC(_el_595);
    import3.Text _text_596 = new import3.Text('top');
    _el_595.append(_text_596);
    _el_597 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_597);
    _el_598 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_598, 'id', 'pipes');
    addShimE(_el_598);
    import3.Text _text_599 = new import3.Text('Pipes');
    _el_598.append(_text_599);
    _el_600 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_600);
    import3.Text _text_601 = new import3.Text('Title through uppercase pipe: ');
    _el_600.append(_text_601);
    _text_602 = new import3.Text('');
    _el_600.append(_text_602);
    _el_603 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_603);
    import3.Text _text_604 = new import3.Text('Title through a pipe chain:\n  ');
    _el_603.append(_text_604);
    _text_605 = new import3.Text('');
    _el_603.append(_text_605);
    _el_606 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_606);
    import3.Text _text_607 = new import3.Text('Birthdate: ');
    _el_606.append(_text_607);
    _text_608 = new import3.Text('');
    _el_606.append(_text_608);
    _el_609 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_609);
    _text_610 = new import3.Text('');
    _el_609.append(_text_610);
    _el_611 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_611);
    import3.Text _text_612 = new import3.Text('Birthdate: ');
    _el_611.append(_text_612);
    _text_613 = new import3.Text('');
    _el_611.append(_text_613);
    _el_614 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_614);
    _el_615 = createAndAppend(doc, 'label', _el_614);
    addShimE(_el_615);
    import3.Text _text_616 = new import3.Text('Price:');
    _el_615.append(_text_616);
    _text_617 = new import3.Text('');
    _el_614.append(_text_617);
    _el_618 = createAndAppend(doc, 'a', parentRenderNode);
    _el_618.className = 'to-toc';
    createAttr(_el_618, 'href', '#toc');
    addShimC(_el_618);
    import3.Text _text_619 = new import3.Text('top');
    _el_618.append(_text_619);
    _el_620 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_620);
    _el_621 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_621, 'id', 'safe-navigation-operator');
    addShimE(_el_621);
    import3.Text _text_622 = new import3.Text('Safe navigation operator');
    _el_621.append(_text_622);
    _el_623 = createAndAppend(doc, 'i', _el_621);
    addShimE(_el_623);
    import3.Text _text_624 = new import3.Text('?.');
    _el_623.append(_text_624);
    _el_625 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_625);
    import3.Text _text_626 = new import3.Text('The title is ');
    _el_625.append(_text_626);
    _text_627 = new import3.Text('');
    _el_625.append(_text_627);
    _el_628 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_628);
    import3.Text _text_629 = new import3.Text('The current hero\'s name is ');
    _el_628.append(_text_629);
    _text_630 = new import3.Text('');
    _el_628.append(_text_630);
    _el_631 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_631);
    import3.Text _text_632 = new import3.Text('The current hero\'s name is ');
    _el_631.append(_text_632);
    _text_633 = new import3.Text('');
    _el_631.append(_text_633);
    final _anchor_634 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_634);
    _appEl_634 = new ViewContainer(634, null, this, _anchor_634);
    TemplateRef _TemplateRef_634_8 = new TemplateRef(_appEl_634, viewFactory_AppComponent22);
    _NgIf_634_9 = new NgIf(_appEl_634, _TemplateRef_634_8);
    _el_635 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_635);
    import3.Text _text_636 = new import3.Text('The null hero\'s name is ');
    _el_635.append(_text_636);
    _text_637 = new import3.Text('');
    _el_635.append(_text_637);
    _el_638 = createAndAppend(doc, 'a', parentRenderNode);
    _el_638.className = 'to-toc';
    createAttr(_el_638, 'href', '#toc');
    addShimC(_el_638);
    import3.Text _text_639 = new import3.Text('top');
    _el_638.append(_text_639);
    _el_640 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_640);
    _el_641 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_641, 'id', 'enums');
    addShimE(_el_641);
    import3.Text _text_642 = new import3.Text('Enums in binding');
    _el_641.append(_text_642);
    _el_643 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_643);
    import3.Text _text_644 = new import3.Text('The name of the Color.red enum is ');
    _el_643.append(_text_644);
    _text_645 = new import3.Text(import33.interpolate0(import2.Color.red));
    _el_643.append(_text_645);
    import3.Text _text_646 = new import3.Text('.');
    _el_643.append(_text_646);
    _el_647 = createAndAppend(doc, 'br', _el_643);
    addShimE(_el_647);
    import3.Text _text_648 = new import3.Text('The current color is ');
    _el_643.append(_text_648);
    _text_649 = new import3.Text('');
    _el_643.append(_text_649);
    import3.Text _text_650 = new import3.Text(' and its index is ');
    _el_643.append(_text_650);
    _text_651 = new import3.Text('');
    _el_643.append(_text_651);
    import3.Text _text_652 = new import3.Text('.');
    _el_643.append(_text_652);
    _el_653 = createAndAppend(doc, 'br', _el_643);
    addShimE(_el_653);
    _el_654 = createAndAppend(doc, 'button', _el_643);
    addShimC(_el_654);
    import3.Text _text_655 = new import3.Text('Enum Toggle');
    _el_654.append(_text_655);
    _el_656 = createAndAppend(doc, 'a', parentRenderNode);
    _el_656.className = 'to-toc';
    createAttr(_el_656, 'href', '#toc');
    addShimC(_el_656);
    import3.Text _text_657 = new import3.Text('top');
    _el_656.append(_text_657);
    _el_120.addEventListener('keyup', eventHandler1(_handle_keyup_120_0));
    _el_133.addEventListener('click', eventHandler0(ctx.deleteHero));
    _el_138.addEventListener('click', eventHandler1(ctx.onSave));
    import33.appViewUtils.eventManager.addEventListener(_el_147, 'submit', eventHandler1(_NgForm_147_5.onSubmit));
    final subscription_0 = _NgForm_147_5.ngSubmit.listen(eventHandler1(_handle_ngSubmit_147_0));
    _map_0 = import33.pureProxy1((p0) {
      return {'special': p0};
    });
    _el_179.addEventListener('click', eventHandler0(ctx.onSave));
    final subscription_1 = _HeroComponent_181_5.deleteRequest.listen(eventHandler0(ctx.deleteHero));
    final subscription_2 = _ClickDirective_182_5.clicks.listen(eventHandler1(_handle_myClick_182_0));
    _el_189.addEventListener('blur', eventHandler0(_DefaultValueAccessor_189_5.touchHandler));
    _el_189.addEventListener('input', eventHandler1(_handle_input_189_2));
    final subscription_3 = _NgModel_189_7.update.listen(eventHandler1(_handle_ngModelChange_189_0));
    _el_233.addEventListener('click', eventHandler1(ctx.onSave));
    _el_235.addEventListener('click', eventHandler1(ctx.onSave));
    _el_352.addEventListener('click', eventHandler0(ctx.onSave));
    _el_354.addEventListener('click', eventHandler0(ctx.onSave));
    final subscription_4 = _ClickDirective_357_5.clicks.listen(eventHandler1(_handle_myClick_357_0));
    final subscription_5 = _HeroComponent_360_5.deleteRequest.listen(eventHandler1(ctx.deleteHero));
    final subscription_6 = _BigHeroComponent_362_5.deleteRequest.listen(eventHandler1(ctx.deleteHero));
    _el_363.addEventListener('click', eventHandler1(ctx.onClickMe));
    _el_367.addEventListener('click', eventHandler0(ctx.onSave));
    _el_368.addEventListener('click', eventHandler1(ctx.onSave));
    _el_370.addEventListener('click', eventHandler0(ctx.onSave));
    _el_371.addEventListener('click', eventHandler0(ctx.onSave));
    final subscription_7 = _SizerComponent_379_5.sizeChange.listen(eventHandler1(_handle_sizeChange_379_0));
    _el_384.addEventListener('blur', eventHandler0(_DefaultValueAccessor_384_5.touchHandler));
    _el_384.addEventListener('input', eventHandler1(_handle_input_384_2));
    final subscription_8 = _NgModel_384_7.update.listen(eventHandler1(_handle_ngModelChange_384_0));
    final subscription_9 = _SizerComponent_391_5.sizeChange.listen(eventHandler1(_handle_sizeChange_391_0));
    _el_400.addEventListener('input', eventHandler1(_handle_input_400_0));
    _el_403.addEventListener('blur', eventHandler0(_DefaultValueAccessor_403_5.touchHandler));
    _el_403.addEventListener('input', eventHandler1(_handle_input_403_2));
    final subscription_10 = _NgModel_403_7.update.listen(eventHandler1(_handle_ngModelChange_403_0));
    _el_406.addEventListener('blur', eventHandler0(_DefaultValueAccessor_406_5.touchHandler));
    _el_406.addEventListener('input', eventHandler1(_handle_input_406_2));
    final subscription_11 = _NgModel_406_7.update.listen(eventHandler1(_handle_ngModelChange_406_0));
    _el_409.addEventListener('blur', eventHandler0(_DefaultValueAccessor_409_5.touchHandler));
    _el_409.addEventListener('input', eventHandler1(_handle_input_409_2));
    final subscription_12 = _NgModel_409_7.update.listen(eventHandler1(ctx.setUppercaseName));
    _el_424.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_424_5.touchHandler));
    _el_424.addEventListener('change', eventHandler1(_handle_change_424_2));
    final subscription_13 = _NgModel_424_7.update.listen(eventHandler1(_handle_ngModelChange_424_0));
    _el_427.addEventListener('change', eventHandler1(_handle_change_427_0));
    _el_430.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_430_5.touchHandler));
    _el_430.addEventListener('change', eventHandler1(_handle_change_430_2));
    final subscription_14 = _NgModel_430_7.update.listen(eventHandler1(_handle_ngModelChange_430_0));
    _el_431.addEventListener('click', eventHandler0(ctx.setCurrentClasses));
    _map_1 = import33.pureProxy3((p0, p1, p2) {
      return {'bad': p0, 'curly': p1, 'special': p2};
    });
    _el_468.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_468_5.touchHandler));
    _el_468.addEventListener('change', eventHandler1(_handle_change_468_2));
    final subscription_15 = _NgModel_468_7.update.listen(eventHandler1(_handle_ngModelChange_468_0));
    _el_472.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_472_5.touchHandler));
    _el_472.addEventListener('change', eventHandler1(_handle_change_472_2));
    final subscription_16 = _NgModel_472_7.update.listen(eventHandler1(_handle_ngModelChange_472_0));
    _el_476.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_476_5.touchHandler));
    _el_476.addEventListener('change', eventHandler1(_handle_change_476_2));
    final subscription_17 = _NgModel_476_7.update.listen(eventHandler1(_handle_ngModelChange_476_0));
    _el_477.addEventListener('click', eventHandler0(ctx.setCurrentStyles));
    _el_530.addEventListener('click', eventHandler0(ctx.resetHeroes));
    _el_532.addEventListener('click', eventHandler0(ctx.changeIds));
    _el_534.addEventListener('click', eventHandler0(ctx.clearTrackByCounts));
    final subscription_18 = _NgModel_557_5.update.listen(eventHandler1(_handle_ngModelChange_557_0));
    _el_577.addEventListener('click', eventHandler1(_handle_click_577_0));
    _el_589.addEventListener('click', eventHandler0(ctx.onSave));
    final subscription_19 = _HeroComponent_591_5.deleteRequest.listen(eventHandler1(ctx.deleteHero));
    final subscription_20 = _ClickDirective_592_5.clicks.listen(eventHandler1(_handle_myClick_592_0));
    _el_654.addEventListener('click', eventHandler0(ctx.colorToggle));
    _pipe_uppercase_0 = new import24.UpperCasePipe();
    _pipe_uppercase_0_0 = import33.pureProxy1(_pipe_uppercase_0.transform);
    _pipe_uppercase_0_1 = import33.pureProxy1(_pipe_uppercase_0.transform);
    _pipe_uppercase_0_2 = import33.pureProxy1(_pipe_uppercase_0.transform);
    _pipe_lowercase_1 = new import26.LowerCasePipe();
    _pipe_lowercase_1_0 = import33.pureProxy1(_pipe_lowercase_1.transform);
    _pipe_date_2 = new import27.DatePipe();
    _pipe_date_2_0 = import33.pureProxy2(_pipe_date_2.transform);
    _pipe_date_2_1 = import33.pureProxy2(_pipe_date_2.transform);
    _pipe_json_3 = new import28.JsonPipe();
    _pipe_currency_4 = new import29.CurrencyPipe();
    _pipe_currency_4_0 = import33.pureProxy3(_pipe_currency_4.transform);
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6, subscription_7, subscription_8, subscription_9, subscription_10, subscription_11, subscription_12, subscription_13, subscription_14, subscription_15, subscription_16, subscription_17, subscription_18, subscription_19, subscription_20]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import6.NgForm) || identical(token, import37.ControlContainer)) && ((147 <= nodeIndex) && (nodeIndex <= 148)))) {
      return _NgForm_147_5;
    }
    if ((identical(token, import11.DefaultValueAccessor) && (189 == nodeIndex))) {
      return _DefaultValueAccessor_189_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (189 == nodeIndex))) {
      return _NgValueAccessor_189_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (189 == nodeIndex))) {
      return _NgModel_189_7;
    }
    if ((identical(token, import11.DefaultValueAccessor) && (384 == nodeIndex))) {
      return _DefaultValueAccessor_384_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (384 == nodeIndex))) {
      return _NgValueAccessor_384_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (384 == nodeIndex))) {
      return _NgModel_384_7;
    }
    if ((identical(token, import11.DefaultValueAccessor) && (403 == nodeIndex))) {
      return _DefaultValueAccessor_403_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (403 == nodeIndex))) {
      return _NgValueAccessor_403_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (403 == nodeIndex))) {
      return _NgModel_403_7;
    }
    if ((identical(token, import11.DefaultValueAccessor) && (406 == nodeIndex))) {
      return _DefaultValueAccessor_406_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (406 == nodeIndex))) {
      return _NgValueAccessor_406_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (406 == nodeIndex))) {
      return _NgModel_406_7;
    }
    if ((identical(token, import11.DefaultValueAccessor) && (409 == nodeIndex))) {
      return _DefaultValueAccessor_409_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (409 == nodeIndex))) {
      return _NgValueAccessor_409_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (409 == nodeIndex))) {
      return _NgModel_409_7;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (424 == nodeIndex))) {
      return _CheckboxControlValueAccessor_424_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (424 == nodeIndex))) {
      return _NgValueAccessor_424_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (424 == nodeIndex))) {
      return _NgModel_424_7;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (430 == nodeIndex))) {
      return _CheckboxControlValueAccessor_430_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (430 == nodeIndex))) {
      return _NgValueAccessor_430_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (430 == nodeIndex))) {
      return _NgModel_430_7;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (468 == nodeIndex))) {
      return _CheckboxControlValueAccessor_468_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (468 == nodeIndex))) {
      return _NgValueAccessor_468_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (468 == nodeIndex))) {
      return _NgModel_468_7;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (472 == nodeIndex))) {
      return _CheckboxControlValueAccessor_472_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (472 == nodeIndex))) {
      return _NgValueAccessor_472_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (472 == nodeIndex))) {
      return _NgModel_472_7;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (476 == nodeIndex))) {
      return _CheckboxControlValueAccessor_476_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (476 == nodeIndex))) {
      return _NgValueAccessor_476_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (476 == nodeIndex))) {
      return _NgModel_476_7;
    }
    if ((identical(token, import13.NgModel) && ((557 <= nodeIndex) && (nodeIndex <= 558)))) {
      return _NgModel_557_5;
    }
    if ((identical(token, import40.NgControl) && ((557 <= nodeIndex) && (nodeIndex <= 558)))) {
      return _NgControl_557_6;
    }
    if ((identical(token, import20.MaterialRadioGroupComponent) && ((557 <= nodeIndex) && (nodeIndex <= 558)))) {
      return _MaterialRadioGroupComponent_557_7;
    }
    if ((identical(token, import21.NgSwitch) && ((565 <= nodeIndex) && (nodeIndex <= 570)))) {
      return _NgSwitch_565_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_heroInput = _el_122;
    final import15.SizerComponent local_mySizer = _SizerComponent_379_5;
    final local_btn = _el_579;
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_143_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_143_9.ngDoCheck();
    if (firstCheck) {
      _HeroComponent_164_5.ngOnInit();
    }
    final currVal_10 = _ctx.currentHero;
    if (!identical(_expr_10, currVal_10)) {
      _HeroComponent_174_5.hero = currVal_10;
      _expr_10 = currVal_10;
    }
    if (firstCheck) {
      _HeroComponent_174_5.ngOnInit();
    }
    final currVal_11 = _map_0(_ctx.isSpecial);
    if (!identical(_expr_11, currVal_11)) {
      _NgClass_175_5.rawClass = currVal_11;
      _expr_11 = currVal_11;
    }
    _NgClass_175_5.ngDoCheck();
    if (firstCheck) {
      _HeroComponent_181_5.ngOnInit();
    }
    changed = false;
    _NgModel_189_7.model = _ctx.name;
    _NgModel_189_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_189_7.ngOnInit();
    }
    final currVal_27 = _ctx.classes;
    if (!identical(_expr_27, currVal_27)) {
      _NgClass_245_5.rawClass = currVal_27;
      _expr_27 = currVal_27;
    }
    _NgClass_245_5.ngDoCheck();
    final currVal_28 = _ctx.currentHero;
    if (!identical(_expr_28, currVal_28)) {
      _HeroComponent_247_5.hero = currVal_28;
      _expr_28 = currVal_28;
    }
    if (firstCheck) {
      _HeroComponent_247_5.ngOnInit();
    }
    if (firstCheck) {
      (_HeroComponent_249_5.prefix = 'You are my');
    }
    final currVal_30 = _ctx.currentHero;
    if (!identical(_expr_30, currVal_30)) {
      _HeroComponent_249_5.hero = currVal_30;
      _expr_30 = currVal_30;
    }
    if (firstCheck) {
      _HeroComponent_249_5.ngOnInit();
    }
    final currVal_53 = _ctx.currentHero;
    if (!identical(_expr_53, currVal_53)) {
      _HeroComponent_360_5.hero = currVal_53;
      _expr_53 = currVal_53;
    }
    if (firstCheck) {
      _HeroComponent_360_5.ngOnInit();
    }
    final currVal_54 = _ctx.currentHero;
    if (!identical(_expr_54, currVal_54)) {
      _BigHeroComponent_362_5.hero = currVal_54;
      _expr_54 = currVal_54;
    }
    if (firstCheck) {
      _BigHeroComponent_362_5.ngOnInit();
    }
    final currVal_55 = _ctx.fontSizePx;
    if (!identical(_expr_55, currVal_55)) {
      _SizerComponent_379_5.size = currVal_55;
      _expr_55 = currVal_55;
    }
    changed = false;
    _NgModel_384_7.model = _ctx.fontSizePx;
    _NgModel_384_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_384_7.ngOnInit();
    }
    final currVal_59 = _ctx.fontSizePx;
    if (!identical(_expr_59, currVal_59)) {
      _SizerComponent_391_5.size = currVal_59;
      _expr_59 = currVal_59;
    }
    changed = false;
    _NgModel_403_7.model = _ctx.currentHero.name;
    _NgModel_403_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_403_7.ngOnInit();
    }
    changed = false;
    _NgModel_406_7.model = _ctx.currentHero.name;
    _NgModel_406_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_406_7.ngOnInit();
    }
    changed = false;
    _NgModel_409_7.model = _ctx.currentHero.name;
    _NgModel_409_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_409_7.ngOnInit();
    }
    final currVal_66 = _ctx.currentClasses;
    if (!identical(_expr_66, currVal_66)) {
      _NgClass_419_5.rawClass = currVal_66;
      _expr_66 = currVal_66;
    }
    _NgClass_419_5.ngDoCheck();
    changed = false;
    _NgModel_424_7.model = _ctx.canSave;
    _NgModel_424_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_424_7.ngOnInit();
    }
    changed = false;
    _NgModel_430_7.model = _ctx.isSpecial;
    _NgModel_430_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_430_7.ngOnInit();
    }
    final currVal_70 = _ctx.currentClasses;
    if (!identical(_expr_70, currVal_70)) {
      _NgClass_435_5.rawClass = currVal_70;
      _expr_70 = currVal_70;
    }
    _NgClass_435_5.ngDoCheck();
    final currVal_74 = (_ctx.isSpecial ? 'special' : '');
    if (!identical(_expr_74, currVal_74)) {
      _NgClass_445_5.rawClass = currVal_74;
      _expr_74 = currVal_74;
    }
    _NgClass_445_5.ngDoCheck();
    final currVal_75 = _map_1(false, true, true);
    if (!identical(_expr_75, currVal_75)) {
      _NgClass_449_5.rawClass = currVal_75;
      _expr_75 = currVal_75;
    }
    _NgClass_449_5.ngDoCheck();
    final currVal_78 = _ctx.currentStyles;
    if (!identical(_expr_78, currVal_78)) {
      _NgStyle_463_5.rawStyle = currVal_78;
      _expr_78 = currVal_78;
    }
    _NgStyle_463_5.ngDoCheck();
    changed = false;
    _NgModel_468_7.model = _ctx.canSave;
    _NgModel_468_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_468_7.ngOnInit();
    }
    changed = false;
    _NgModel_472_7.model = _ctx.isUnchanged;
    _NgModel_472_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_472_7.ngOnInit();
    }
    changed = false;
    _NgModel_476_7.model = _ctx.isSpecial;
    _NgModel_476_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_476_7.ngOnInit();
    }
    final currVal_82 = _ctx.currentStyles;
    if (!identical(_expr_82, currVal_82)) {
      _NgStyle_481_5.rawStyle = currVal_82;
      _expr_82 = currVal_82;
    }
    _NgStyle_481_5.ngDoCheck();
    _NgIf_494_9.ngIf = _ctx.isActive;
    _NgIf_495_9.ngIf = (_ctx.currentHero != null);
    _NgIf_496_9.ngIf = (_ctx.nullHero != null);
    _NgIf_497_9.ngIf = (_ctx.currentHero != null);
    _NgIf_500_9.ngIf = _ctx.isActive;
    if (firstCheck) {
      _HeroComponent_505_5.ngOnInit();
    }
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_516_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_516_9.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_519_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_519_9.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_525_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_525_9.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_541_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_541_9.ngDoCheck();
    _NgIf_542_9.ngIf = (_ctx.heroesNoTrackByCount > 0);
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_548_9.ngForOf = _ctx.heroes);
      }
      if (!identical(_ctx.trackByHeroId, null)) {
        (_NgFor_548_9.ngForTrackBy = _ctx.trackByHeroId);
      }
    }
    _NgFor_548_9.ngDoCheck();
    _NgIf_549_9.ngIf = (_ctx.heroesWithTrackByCount > 0);
    changed = false;
    _NgModel_557_5.model = _ctx.currentHero;
    _NgModel_557_5.ngAfterChanges();
    if (firstCheck) {
      _NgModel_557_5.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_557.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_558_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_558_9.ngDoCheck();
    final currVal_108 = _ctx.currentHero.emotion;
    if (!identical(_expr_108, currVal_108)) {
      _NgSwitch_565_5.ngSwitch = currVal_108;
      _expr_108 = currVal_108;
    }
    if (firstCheck) {
      (_NgSwitchWhen_566_9.ngSwitchCase = 'happy');
    }
    if (firstCheck) {
      (_NgSwitchWhen_567_9.ngSwitchCase = 'sad');
    }
    if (firstCheck) {
      (_NgSwitchWhen_568_9.ngSwitchCase = 'confused');
    }
    if (firstCheck) {
      (_NgSwitchWhen_569_9.ngSwitchCase = 'confused');
    }
    final currVal_114 = _ctx.currentHero;
    if (!identical(_expr_114, currVal_114)) {
      _HeroFormComponent_582_5.hero = currVal_114;
      _expr_114 = currVal_114;
    }
    final currVal_116 = _ctx.currentHero;
    if (!identical(_expr_116, currVal_116)) {
      _HeroComponent_591_5.hero = currVal_116;
      _expr_116 = currVal_116;
    }
    if (firstCheck) {
      _HeroComponent_591_5.ngOnInit();
    }
    _NgIf_634_9.ngIf = (_ctx.nullHero != null);
    _appEl_143.detectChangesInNestedViews();
    _appEl_494.detectChangesInNestedViews();
    _appEl_495.detectChangesInNestedViews();
    _appEl_496.detectChangesInNestedViews();
    _appEl_497.detectChangesInNestedViews();
    _appEl_500.detectChangesInNestedViews();
    _appEl_516.detectChangesInNestedViews();
    _appEl_519.detectChangesInNestedViews();
    _appEl_525.detectChangesInNestedViews();
    _appEl_541.detectChangesInNestedViews();
    _appEl_542.detectChangesInNestedViews();
    _appEl_548.detectChangesInNestedViews();
    _appEl_549.detectChangesInNestedViews();
    _appEl_558.detectChangesInNestedViews();
    _appEl_566.detectChangesInNestedViews();
    _appEl_567.detectChangesInNestedViews();
    _appEl_568.detectChangesInNestedViews();
    _appEl_569.detectChangesInNestedViews();
    _appEl_570.detectChangesInNestedViews();
    _appEl_634.detectChangesInNestedViews();
    if (_query_MaterialRadioComponent_557_0_isDirty) {
      _MaterialRadioGroupComponent_557_7.list = _appEl_558.mapNestedViews((_ViewAppComponent16 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_557_0_isDirty = false;
    }
    if (_query_noTrackBy_1_0_isDirty) {
      ctx.heroesNoTrackBy = _appEl_541.mapNestedViews((_ViewAppComponent12 nestedView) {
        return [nestedView._el_0];
      });
      _query_noTrackBy_1_0_isDirty = false;
    }
    if (_query_withTrackBy_1_1_isDirty) {
      ctx.heroesWithTrackBy = _appEl_548.mapNestedViews((_ViewAppComponent14 nestedView) {
        return [nestedView._el_0];
      });
      _query_withTrackBy_1_1_isDirty = false;
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_557_7.ngAfterContentInit();
    }
    final currVal_0 = import33.interpolate0(_ctx.currentHero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_94.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.title ?? '');
    if (!identical(_expr_1, currVal_1)) {
      _text_96.text = currVal_1;
      _expr_1 = currVal_1;
    }
    if (firstCheck) {
      setProp(_el_97, 'src', import33.appViewUtils.sanitizer.sanitizeUrl((_ctx.heroImageUrl ?? '')));
    }
    final currVal_3 = import33.interpolate0(((1 + 1) + _ctx.getVal()));
    if (!identical(_expr_3, currVal_3)) {
      _text_103.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = (_ctx.title ?? '');
    if (!identical(_expr_4, currVal_4)) {
      _text_112.text = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.isUnchanged;
    if (!identical(_expr_5, currVal_5)) {
      setProp(_el_113, 'hidden', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = import33.interpolate0(local_heroInput.value);
    if (!identical(_expr_6, currVal_6)) {
      _text_124.text = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_8 = _ctx.isUnchanged;
    if (!identical(_expr_8, currVal_8)) {
      setProp(_el_168, 'disabled', currVal_8);
      _expr_8 = currVal_8;
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_173, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    final currVal_12 = (_ctx.clicked ?? '');
    if (!identical(_expr_12, currVal_12)) {
      _text_184.text = currVal_12;
      _expr_12 = currVal_12;
    }
    final currVal_14 = (_ctx.name ?? '');
    if (!identical(_expr_14, currVal_14)) {
      _text_190.text = currVal_14;
      _expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.help;
    if (!identical(_expr_15, currVal_15)) {
      setAttr(_el_193, 'aria-label', currVal_15?.toString());
      _expr_15 = currVal_15;
    }
    final currVal_16 = _ctx.isSpecial;
    if (!identical(_expr_16, currVal_16)) {
      updateClass(_el_197, 'special', currVal_16);
      _expr_16 = currVal_16;
    }
    final currVal_17 = (_ctx.isSpecial ? 'red' : 'green');
    if (!identical(_expr_17, currVal_17)) {
      _el_201.style.setProperty('color', currVal_17?.toString());
      _expr_17 = currVal_17;
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_208, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    if (firstCheck) {
      if (!identical(_ctx.iconUrl, null)) {
        setProp(_el_211, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.iconUrl));
      }
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_212, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    if (firstCheck) {
      if (!identical(_ctx.villainImageUrl, null)) {
        setAttr(_el_213, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.villainImageUrl)?.toString());
      }
    }
    final currVal_22 = _ctx.isUnchanged;
    if (!identical(_expr_22, currVal_22)) {
      setProp(_el_229, 'disabled', currVal_22);
      _expr_22 = currVal_22;
    }
    final currVal_23 = _ctx.isUnchanged;
    if (!identical(_expr_23, currVal_23)) {
      setProp(_el_233, 'disabled', currVal_23);
      _expr_23 = currVal_23;
    }
    final bool currVal_24 = !_ctx.canSave;
    if (!identical(_expr_24, currVal_24)) {
      setProp(_el_235, 'disabled', currVal_24);
      _expr_24 = currVal_24;
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_242, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    final currVal_26 = _ctx.isUnchanged;
    if (!identical(_expr_26, currVal_26)) {
      setProp(_el_243, 'disabled', currVal_26);
      _expr_26 = currVal_26;
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_248, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    if (firstCheck) {
      setProp(_el_251, 'src', import33.appViewUtils.sanitizer.sanitizeUrl((_ctx.heroImageUrl ?? '')));
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_257, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    final currVal_34 = (_ctx.title ?? '');
    if (!identical(_expr_34, currVal_34)) {
      _text_265.text = currVal_34;
      _expr_34 = currVal_34;
    }
    final currVal_35 = _ctx.title;
    if (!identical(_expr_35, currVal_35)) {
      setProp(_el_272, 'innerHTML', import33.appViewUtils.sanitizer.sanitizeHtml(currVal_35));
      _expr_35 = currVal_35;
    }
    final currVal_36 = (_ctx.evilTitle ?? '');
    if (!identical(_expr_36, currVal_36)) {
      _text_280.text = currVal_36;
      _expr_36 = currVal_36;
    }
    final currVal_37 = _ctx.evilTitle;
    if (!identical(_expr_37, currVal_37)) {
      setProp(_el_287, 'innerHTML', import33.appViewUtils.sanitizer.sanitizeHtml(currVal_37));
      _expr_37 = currVal_37;
    }
    if (firstCheck) {
      if (!identical((1 + 1), null)) {
        setAttr(_el_299, 'colspan', (1 + 1)?.toString());
      }
    }
    final currVal_39 = _ctx.actionName;
    if (!identical(_expr_39, currVal_39)) {
      setAttr(_el_307, 'aria-label', currVal_39?.toString());
      _expr_39 = currVal_39;
    }
    final currVal_40 = (_ctx.actionName ?? '');
    if (!identical(_expr_40, currVal_40)) {
      _text_308.text = currVal_40;
      _expr_40 = currVal_40;
    }
    final currVal_41 = _ctx.isUnchanged;
    if (!identical(_expr_41, currVal_41)) {
      setAttr(_el_313, 'disabled', currVal_41?.toString());
      _expr_41 = currVal_41;
    }
    final bool currVal_42 = !_ctx.isUnchanged;
    if (!identical(_expr_42, currVal_42)) {
      setAttr(_el_315, 'disabled', currVal_42?.toString());
      _expr_42 = currVal_42;
    }
    if (firstCheck) {
      setProp(_el_317, 'disabled', false);
    }
    final currVal_44 = _ctx.badCurly;
    if (!identical(_expr_44, currVal_44)) {
      this.updateChildClass(_el_326, currVal_44);
      _expr_44 = currVal_44;
    }
    final currVal_45 = _ctx.isSpecial;
    if (!identical(_expr_45, currVal_45)) {
      updateClass(_el_328, 'special', currVal_45);
      _expr_45 = currVal_45;
    }
    final bool currVal_46 = !_ctx.isSpecial;
    if (!identical(_expr_46, currVal_46)) {
      updateClass(_el_330, 'special', currVal_46);
      _expr_46 = currVal_46;
    }
    final currVal_47 = _ctx.isSpecial;
    if (!identical(_expr_47, currVal_47)) {
      updateClass(_el_332, 'special', currVal_47);
      _expr_47 = currVal_47;
    }
    final currVal_48 = (_ctx.isSpecial ? 'red' : 'green');
    if (!identical(_expr_48, currVal_48)) {
      _el_339.style.setProperty('color', currVal_48?.toString());
      _expr_48 = currVal_48;
    }
    final currVal_49 = (_ctx.canSave ? 'cyan' : 'grey');
    if (!identical(_expr_49, currVal_49)) {
      _el_341.style.setProperty('background-color', currVal_49?.toString());
      _expr_49 = currVal_49;
    }
    final currVal_50 = (_ctx.isSpecial ? 3 : 1);
    if (!identical(_expr_50, currVal_50)) {
      _el_343.style.setProperty('font-size', ((currVal_50?.toString() == null) ? null : (currVal_50?.toString() + 'em')));
      _expr_50 = currVal_50;
    }
    final currVal_51 = (!_ctx.isSpecial ? 150 : 50);
    if (!identical(_expr_51, currVal_51)) {
      _el_345.style.setProperty('font-size', ((currVal_51?.toString() == null) ? null : (currVal_51?.toString() + '%')));
      _expr_51 = currVal_51;
    }
    final currVal_52 = (_ctx.clickMessage ?? '');
    if (!identical(_expr_52, currVal_52)) {
      _text_359.text = currVal_52;
      _expr_52 = currVal_52;
    }
    final currVal_56 = local_mySizer.size;
    if (!identical(_expr_56, currVal_56)) {
      _el_380.style.setProperty('font-size', ((currVal_56?.toString() == null) ? null : (currVal_56?.toString() + 'px')));
      _expr_56 = currVal_56;
    }
    final currVal_58 = import33.interpolate0(_ctx.fontSizePx.runtimeType);
    if (!identical(_expr_58, currVal_58)) {
      _text_386.text = currVal_58;
      _expr_58 = currVal_58;
    }
    final currVal_60 = import33.interpolate0(_ctx.currentHero.name);
    if (!identical(_expr_60, currVal_60)) {
      _text_399.text = currVal_60;
      _expr_60 = currVal_60;
    }
    final currVal_61 = _ctx.currentHero.name;
    if (!identical(_expr_61, currVal_61)) {
      setProp(_el_400, 'value', currVal_61);
      _expr_61 = currVal_61;
    }
    final currVal_65 = import33.interpolate0(_ctx.currentClasses);
    if (!identical(_expr_65, currVal_65)) {
      _text_418.text = currVal_65;
      _expr_65 = currVal_65;
    }
    final bool currVal_68 = !_ctx.isUnchanged;
    if (!identical(_expr_68, currVal_68)) {
      setProp(_el_427, 'checked', currVal_68);
      _expr_68 = currVal_68;
    }
    final currVal_71 = import33.interpolate0((_ctx.canSave ? '' : 'not'));
    if (!identical(_expr_71, currVal_71)) {
      _text_437.text = currVal_71;
      _expr_71 = currVal_71;
    }
    final currVal_72 = import33.interpolate0((_ctx.isUnchanged ? 'unchanged' : 'modified'));
    if (!identical(_expr_72, currVal_72)) {
      _text_439.text = currVal_72;
      _expr_72 = currVal_72;
    }
    final currVal_73 = import33.interpolate0((_ctx.isSpecial ? '' : 'not'));
    if (!identical(_expr_73, currVal_73)) {
      _text_441.text = currVal_73;
      _expr_73 = currVal_73;
    }
    final currVal_76 = (_ctx.isSpecial ? 'x-large' : 'smaller');
    if (!identical(_expr_76, currVal_76)) {
      _el_456.style.setProperty('font-size', currVal_76?.toString());
      _expr_76 = currVal_76;
    }
    final currVal_77 = import33.interpolate0(_ctx.currentStyles);
    if (!identical(_expr_77, currVal_77)) {
      _text_462.text = currVal_77;
      _expr_77 = currVal_77;
    }
    final currVal_83 = import33.interpolate0((_ctx.canSave ? 'italic' : 'plain'));
    if (!identical(_expr_83, currVal_83)) {
      _text_483.text = currVal_83;
      _expr_83 = currVal_83;
    }
    final currVal_84 = import33.interpolate0((_ctx.isUnchanged ? 'normal weight' : 'bold'));
    if (!identical(_expr_84, currVal_84)) {
      _text_485.text = currVal_84;
      _expr_84 = currVal_84;
    }
    final currVal_85 = import33.interpolate0((_ctx.isSpecial ? 'extra large' : 'normal size'));
    if (!identical(_expr_85, currVal_85)) {
      _text_487.text = currVal_85;
      _expr_85 = currVal_85;
    }
    final bool currVal_91 = !_ctx.isSpecial;
    if (!identical(_expr_91, currVal_91)) {
      updateClass(_el_501, 'hidden', currVal_91);
      _expr_91 = currVal_91;
    }
    final currVal_92 = _ctx.isSpecial;
    if (!identical(_expr_92, currVal_92)) {
      updateClass(_el_503, 'hidden', currVal_92);
      _expr_92 = currVal_92;
    }
    final currVal_93 = _ctx.isSpecial;
    if (!identical(_expr_93, currVal_93)) {
      updateElemClass(_el_505, 'hidden', currVal_93);
      _expr_93 = currVal_93;
    }
    final currVal_94 = (_ctx.isSpecial ? 'block' : 'none');
    if (!identical(_expr_94, currVal_94)) {
      _el_506.style.setProperty('display', currVal_94?.toString());
      _expr_94 = currVal_94;
    }
    final currVal_95 = (_ctx.isSpecial ? 'none' : 'block');
    if (!identical(_expr_95, currVal_95)) {
      _el_508.style.setProperty('display', currVal_95?.toString());
      _expr_95 = currVal_95;
    }
    final currVal_106 = import33.interpolate0(_ctx.currentHero.name);
    if (!identical(_expr_106, currVal_106)) {
      _text_561.text = currVal_106;
      _expr_106 = currVal_106;
    }
    final currVal_107 = import33.interpolate0(_ctx.currentHero.id);
    if (!identical(_expr_107, currVal_107)) {
      _text_563.text = currVal_107;
      _expr_107 = currVal_107;
    }
    final currVal_113 = ('disabled by attribute: ' + local_btn.disabled.toString());
    if (!identical(_expr_113, currVal_113)) {
      setProp(_el_579, 'innerHTML', import33.appViewUtils.sanitizer.sanitizeHtml(currVal_113));
      _expr_113 = currVal_113;
    }
    if (firstCheck) {
      if (!identical(_ctx.iconUrl, null)) {
        setProp(_el_588, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.iconUrl));
      }
    }
    final currVal_117 = (_ctx.clickMessage2 ?? '');
    if (!identical(_expr_117, currVal_117)) {
      _text_594.text = currVal_117;
      _expr_117 = currVal_117;
    }
    final currVal_118 = import33.interpolate0(_pipe_uppercase_0_0(_ctx.title));
    if (!identical(_expr_118, currVal_118)) {
      _text_602.text = currVal_118;
      _expr_118 = currVal_118;
    }
    final currVal_119 = import33.interpolate0(_pipe_lowercase_1_0(_pipe_uppercase_0_1(_ctx.title)));
    if (!identical(_expr_119, currVal_119)) {
      _text_605.text = currVal_119;
      _expr_119 = currVal_119;
    }
    final currVal_120 = import33.interpolate0(_pipe_date_2_0(((_ctx.currentHero == null) ? null : _ctx.currentHero.birthdate), 'longDate'));
    if (!identical(_expr_120, currVal_120)) {
      _text_608.text = currVal_120;
      _expr_120 = currVal_120;
    }
    final currVal_121 = import33.interpolate0(_pipe_json_3.transform(_ctx.currentHero));
    if (!identical(_expr_121, currVal_121)) {
      _text_610.text = currVal_121;
      _expr_121 = currVal_121;
    }
    final currVal_122 = import33.interpolate0(_pipe_uppercase_0_2(_pipe_date_2_1(((_ctx.currentHero == null) ? null : _ctx.currentHero.birthdate), 'longDate')));
    if (!identical(_expr_122, currVal_122)) {
      _text_613.text = currVal_122;
      _expr_122 = currVal_122;
    }
    final currVal_123 = import33.interpolate0(_pipe_currency_4_0(_ctx.product['price'], 'USD', true));
    if (!identical(_expr_123, currVal_123)) {
      _text_617.text = currVal_123;
      _expr_123 = currVal_123;
    }
    final currVal_124 = (_ctx.title ?? '');
    if (!identical(_expr_124, currVal_124)) {
      _text_627.text = currVal_124;
      _expr_124 = currVal_124;
    }
    final currVal_125 = import33.interpolate0(((_ctx.currentHero == null) ? null : _ctx.currentHero.name));
    if (!identical(_expr_125, currVal_125)) {
      _text_630.text = currVal_125;
      _expr_125 = currVal_125;
    }
    final currVal_126 = import33.interpolate0(_ctx.currentHero.name);
    if (!identical(_expr_126, currVal_126)) {
      _text_633.text = currVal_126;
      _expr_126 = currVal_126;
    }
    final currVal_128 = import33.interpolate0(((_ctx.nullHero == null) ? null : _ctx.nullHero.name));
    if (!identical(_expr_128, currVal_128)) {
      _text_637.text = currVal_128;
      _expr_128 = currVal_128;
    }
    final currVal_129 = import33.interpolate0(_ctx.color);
    if (!identical(_expr_129, currVal_129)) {
      _text_649.text = currVal_129;
      _expr_129 = currVal_129;
    }
    final currVal_130 = import33.interpolate0(_ctx.color.index);
    if (!identical(_expr_130, currVal_130)) {
      _text_651.text = currVal_130;
      _expr_130 = currVal_130;
    }
    final currVal_131 = _ctx.color.toString().split('.')[1];
    if (!identical(_expr_131, currVal_131)) {
      _el_654.style.setProperty('color', currVal_131?.toString());
      _expr_131 = currVal_131;
    }
    _compView_164.detectChanges();
    _compView_174.detectChanges();
    _compView_181.detectChanges();
    _compView_247.detectChanges();
    _compView_249.detectChanges();
    _compView_360.detectChanges();
    _compView_362.detectChanges();
    _compView_379.detectChanges();
    _compView_391.detectChanges();
    _compView_505.detectChanges();
    _compView_557.detectChanges();
    _compView_582.detectChanges();
    _compView_591.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_143?.destroyNestedViews();
    _appEl_494?.destroyNestedViews();
    _appEl_495?.destroyNestedViews();
    _appEl_496?.destroyNestedViews();
    _appEl_497?.destroyNestedViews();
    _appEl_500?.destroyNestedViews();
    _appEl_516?.destroyNestedViews();
    _appEl_519?.destroyNestedViews();
    _appEl_525?.destroyNestedViews();
    _appEl_541?.destroyNestedViews();
    _appEl_542?.destroyNestedViews();
    _appEl_548?.destroyNestedViews();
    _appEl_549?.destroyNestedViews();
    _appEl_558?.destroyNestedViews();
    _appEl_566?.destroyNestedViews();
    _appEl_567?.destroyNestedViews();
    _appEl_568?.destroyNestedViews();
    _appEl_569?.destroyNestedViews();
    _appEl_570?.destroyNestedViews();
    _appEl_634?.destroyNestedViews();
    _compView_164?.destroy();
    _compView_174?.destroy();
    _compView_181?.destroy();
    _compView_247?.destroy();
    _compView_249?.destroy();
    _compView_360?.destroy();
    _compView_362?.destroy();
    _compView_379?.destroy();
    _compView_391?.destroy();
    _compView_505?.destroy();
    _compView_557?.destroy();
    _compView_582?.destroy();
    _compView_591?.destroy();
    _NgClass_175_5.ngOnDestroy();
    _NgClass_245_5.ngOnDestroy();
    _NgClass_419_5.ngOnDestroy();
    _NgClass_435_5.ngOnDestroy();
    _NgClass_445_5.ngOnDestroy();
    _NgClass_449_5.ngOnDestroy();
    _MaterialRadioGroupComponent_557_7.ngOnDestroy();
  }

  void _handle_keyup_120_0($event) {
    0;
  }

  void _handle_ngSubmit_147_0($event) {
    final local_heroForm = _el_147;
    ctx.onSubmit(local_heroForm);
  }

  void _handle_myClick_182_0($event) {
    ctx.clicked = $event;
  }

  void _handle_ngModelChange_189_0($event) {
    ctx.name = $event;
  }

  void _handle_input_189_2($event) {
    _DefaultValueAccessor_189_5.handleChange($event.target.value);
  }

  void _handle_myClick_357_0($event) {
    ctx.clickMessage = $event;
  }

  void _handle_sizeChange_379_0($event) {
    ctx.fontSizePx = $event;
  }

  void _handle_ngModelChange_384_0($event) {
    ctx.fontSizePx = $event;
  }

  void _handle_input_384_2($event) {
    _DefaultValueAccessor_384_5.handleChange($event.target.value);
  }

  void _handle_sizeChange_391_0($event) {
    ctx.fontSizePx = $event;
  }

  void _handle_input_400_0($event) {
    ctx.currentHero.name = $event.target.value;
  }

  void _handle_ngModelChange_403_0($event) {
    ctx.currentHero.name = $event;
  }

  void _handle_input_403_2($event) {
    _DefaultValueAccessor_403_5.handleChange($event.target.value);
  }

  void _handle_ngModelChange_406_0($event) {
    ctx.currentHero.name = $event;
  }

  void _handle_input_406_2($event) {
    _DefaultValueAccessor_406_5.handleChange($event.target.value);
  }

  void _handle_input_409_2($event) {
    _DefaultValueAccessor_409_5.handleChange($event.target.value);
  }

  void _handle_ngModelChange_424_0($event) {
    ctx.canSave = $event;
  }

  void _handle_change_424_2($event) {
    _CheckboxControlValueAccessor_424_5.handleChange($event.target.checked);
  }

  void _handle_change_427_0($event) {
    ctx.isUnchanged = !ctx.isUnchanged;
  }

  void _handle_ngModelChange_430_0($event) {
    ctx.isSpecial = $event;
  }

  void _handle_change_430_2($event) {
    _CheckboxControlValueAccessor_430_5.handleChange($event.target.checked);
  }

  void _handle_ngModelChange_468_0($event) {
    ctx.canSave = $event;
  }

  void _handle_change_468_2($event) {
    _CheckboxControlValueAccessor_468_5.handleChange($event.target.checked);
  }

  void _handle_ngModelChange_472_0($event) {
    ctx.isUnchanged = $event;
  }

  void _handle_change_472_2($event) {
    _CheckboxControlValueAccessor_472_5.handleChange($event.target.checked);
  }

  void _handle_ngModelChange_476_0($event) {
    ctx.isSpecial = $event;
  }

  void _handle_change_476_2($event) {
    _CheckboxControlValueAccessor_476_5.handleChange($event.target.checked);
  }

  void _handle_ngModelChange_557_0($event) {
    ctx.currentHero = $event;
  }

  void _handle_click_577_0($event) {
    final local_phone = _el_576;
    ctx.callPhone(local_phone.value);
  }

  void _handle_myClick_592_0($event) {
    ctx.clickMessage2 = $event;
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

class _ViewAppComponent1 extends AppView<import2.AppComponent> {
  ViewContainer _appEl_0;
  import5.NgFor _NgFor_0_9;
  _ViewAppComponent1(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    final _anchor_0 = createViewContainerAnchor();
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = new TemplateRef(_appEl_0, viewFactory_AppComponent2);
    _NgFor_0_9 = new import5.NgFor(_appEl_0, _TemplateRef_0_8);
    init0(_appEl_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_0_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_0_9.ngDoCheck();
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent1(parentView, parentIndex);
}

class _ViewAppComponent2 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewAppComponent2(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import41.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate0(local_hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent2(parentView, parentIndex);
}

class _ViewAppComponent3 extends AppView<import2.AppComponent> {
  import3.ButtonElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewAppComponent3(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('button');
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import41.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate0(local_hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  void _handle_click_0_0($event) {
    final import41.Hero local_hero = locals['\$implicit'];
    ctx.deleteHero(local_hero);
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent3(parentView, parentIndex);
}

class _ViewAppComponent4 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import7.ViewHeroComponent0 _compView_0;
  import8.HeroComponent _HeroComponent_0_5;
  _ViewAppComponent4(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import7.ViewHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _HeroComponent_0_5 = new import8.HeroComponent();
    _compView_0.create(_HeroComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _HeroComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent4(parentView, parentIndex);
}

class _ViewAppComponent5 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  var _expr_0;
  _ViewAppComponent5(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    import3.Text _text_1 = new import3.Text('Hello, ');
    _el_0.append(_text_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate0(_ctx.currentHero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent5(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent5(parentView, parentIndex);
}

class _ViewAppComponent6 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  var _expr_0;
  _ViewAppComponent6(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    import3.Text _text_1 = new import3.Text('Hello, ');
    _el_0.append(_text_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate0(_ctx.nullHero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent6(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent6(parentView, parentIndex);
}

class _ViewAppComponent7 extends AppView<import2.AppComponent> {
  import3.Text _text_1;
  var _expr_0;
  _ViewAppComponent7(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    import3.Text _text_0 = new import3.Text('Add ');
    _text_1 = new import3.Text('');
    import3.Text _text_2 = new import3.Text(' with template');
    init([_text_0, _text_1, _text_2], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate0(_ctx.currentHero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent7(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent7(parentView, parentIndex);
}

class _ViewAppComponent8 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import7.ViewHeroComponent0 _compView_0;
  import8.HeroComponent _HeroComponent_0_5;
  _ViewAppComponent8(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import7.ViewHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _HeroComponent_0_5 = new import8.HeroComponent();
    _compView_0.create(_HeroComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _HeroComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent8(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent8(parentView, parentIndex);
}

class _ViewAppComponent9 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewAppComponent9(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import41.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate0(local_hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent9(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent9(parentView, parentIndex);
}

class _ViewAppComponent10 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import7.ViewHeroComponent0 _compView_0;
  import8.HeroComponent _HeroComponent_0_5;
  var _expr_0;
  _ViewAppComponent10(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import7.ViewHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _HeroComponent_0_5 = new import8.HeroComponent();
    _compView_0.create(_HeroComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final import41.Hero local_hero = locals['\$implicit'];
    final currVal_0 = local_hero;
    if (!identical(_expr_0, currVal_0)) {
      _HeroComponent_0_5.hero = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      _HeroComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent10(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent10(parentView, parentIndex);
}

class _ViewAppComponent11 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  import3.Text _text_3;
  var _expr_0;
  var _expr_1;
  _ViewAppComponent11(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    import3.Text _text_2 = new import3.Text(' - ');
    _el_0.append(_text_2);
    _text_3 = new import3.Text('');
    _el_0.append(_text_3);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final int local_i = locals['index'];
    final import41.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate0((local_i + 1));
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import33.interpolate0(local_hero.name);
    if (!identical(_expr_1, currVal_1)) {
      _text_3.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent11(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent11(parentView, parentIndex);
}

class _ViewAppComponent12 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  import3.Text _text_4;
  var _expr_0;
  var _expr_1;
  _ViewAppComponent12(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    import3.Text _text_1 = new import3.Text('(');
    _el_0.append(_text_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    import3.Text _text_3 = new import3.Text(') ');
    _el_0.append(_text_3);
    _text_4 = new import3.Text('');
    _el_0.append(_text_4);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import41.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate0(local_hero.id);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import33.interpolate0(local_hero.name);
    if (!identical(_expr_1, currVal_1)) {
      _text_4.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewAppComponent0)._query_noTrackBy_1_0_isDirty = true;
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent12(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent12(parentView, parentIndex);
}

class _ViewAppComponent13 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  var _expr_0;
  _ViewAppComponent13(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'id', 'noTrackByCnt');
    addShimC(_el_0);
    import3.Text _text_1 = new import3.Text('Hero DOM elements change #');
    _el_0.append(_text_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    import3.Text _text_3 = new import3.Text(' without trackBy');
    _el_0.append(_text_3);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate0(_ctx.heroesNoTrackByCount);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent13(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent13(parentView, parentIndex);
}

class _ViewAppComponent14 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  import3.Text _text_4;
  var _expr_0;
  var _expr_1;
  _ViewAppComponent14(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    import3.Text _text_1 = new import3.Text('(');
    _el_0.append(_text_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    import3.Text _text_3 = new import3.Text(') ');
    _el_0.append(_text_3);
    _text_4 = new import3.Text('');
    _el_0.append(_text_4);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import41.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate0(local_hero.id);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import33.interpolate0(local_hero.name);
    if (!identical(_expr_1, currVal_1)) {
      _text_4.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewAppComponent0)._query_withTrackBy_1_1_isDirty = true;
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent14(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent14(parentView, parentIndex);
}

class _ViewAppComponent15 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  import3.Element _el_4;
  var _expr_0;
  _ViewAppComponent15(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'id', 'withTrackByCnt');
    addShimC(_el_0);
    import3.Text _text_1 = new import3.Text('Hero DOM elements change #');
    _el_0.append(_text_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    import3.Text _text_3 = new import3.Text(' with ');
    _el_0.append(_text_3);
    _el_4 = createAndAppend(doc, 'code', _el_0);
    addShimE(_el_4);
    import3.Text _text_5 = new import3.Text('trackBy: trackByHeroId');
    _el_4.append(_text_5);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate0(_ctx.heroesWithTrackByCount);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent15(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent15(parentView, parentIndex);
}

class _ViewAppComponent16 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import42.ViewMaterialRadioComponent0 _compView_0;
  import43.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_1;
  import3.Text _text_3;
  var _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewAppComponent16(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import42.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import43.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewAppComponent0)._MaterialRadioGroupComponent_557_7, null, null);
    _text_1 = new import3.Text('');
    import3.Text _text_2 = new import3.Text(' (');
    _text_3 = new import3.Text('');
    import3.Text _text_4 = new import3.Text(')');
    _compView_0.create(_MaterialRadioComponent_0_5, [
      [_text_1, _text_2, _text_3, _text_4]
    ]);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import41.Hero local_h = locals['\$implicit'];
    changed = false;
    final currVal_0 = local_h;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialRadioComponent_0_5.value = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = identical(local_h, _ctx.currentHero);
    if (!identical(_expr_1, currVal_1)) {
      _MaterialRadioComponent_0_5.checked = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_2 = import33.interpolate0(local_h.name);
    if (!identical(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = import33.interpolate0(local_h.id);
    if (!identical(_expr_3, currVal_3)) {
      _text_3.text = currVal_3;
      _expr_3 = currVal_3;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewAppComponent0)._query_MaterialRadioComponent_557_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent16(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent16(parentView, parentIndex);
}

class _ViewAppComponent17 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import44.ViewHappyHeroComponent0 _compView_0;
  import45.HappyHeroComponent _HappyHeroComponent_0_5;
  var _expr_0;
  _ViewAppComponent17(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import44.ViewHappyHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _HappyHeroComponent_0_5 = new import45.HappyHeroComponent();
    _compView_0.create(_HappyHeroComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = _ctx.currentHero;
    if (!identical(_expr_0, currVal_0)) {
      _HappyHeroComponent_0_5.hero = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent17(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent17(parentView, parentIndex);
}

class _ViewAppComponent18 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import44.ViewSadHeroComponent0 _compView_0;
  import45.SadHeroComponent _SadHeroComponent_0_5;
  var _expr_0;
  _ViewAppComponent18(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import44.ViewSadHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _SadHeroComponent_0_5 = new import45.SadHeroComponent();
    _compView_0.create(_SadHeroComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = _ctx.currentHero;
    if (!identical(_expr_0, currVal_0)) {
      _SadHeroComponent_0_5.hero = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent18(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent18(parentView, parentIndex);
}

class _ViewAppComponent19 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import44.ViewConfusedHeroComponent0 _compView_0;
  import45.ConfusedHeroComponent _ConfusedHeroComponent_0_5;
  var _expr_0;
  _ViewAppComponent19(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import44.ViewConfusedHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _ConfusedHeroComponent_0_5 = new import45.ConfusedHeroComponent();
    _compView_0.create(_ConfusedHeroComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = _ctx.currentHero;
    if (!identical(_expr_0, currVal_0)) {
      _ConfusedHeroComponent_0_5.hero = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent19(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent19(parentView, parentIndex);
}

class _ViewAppComponent20 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  var _expr_0;
  _ViewAppComponent20(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    import3.Text _text_1 = new import3.Text('Are you as confused as ');
    _el_0.append(_text_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    import3.Text _text_3 = new import3.Text('?');
    _el_0.append(_text_3);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate0(_ctx.currentHero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent20(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent20(parentView, parentIndex);
}

class _ViewAppComponent21 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import44.ViewUnknownHeroComponent0 _compView_0;
  import45.UnknownHeroComponent _UnknownHeroComponent_0_5;
  var _expr_0;
  _ViewAppComponent21(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import44.ViewUnknownHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _UnknownHeroComponent_0_5 = new import45.UnknownHeroComponent();
    _compView_0.create(_UnknownHeroComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = _ctx.currentHero;
    if (!identical(_expr_0, currVal_0)) {
      _UnknownHeroComponent_0_5.hero = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent21(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent21(parentView, parentIndex);
}

class _ViewAppComponent22 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  var _expr_0;
  _ViewAppComponent22(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    import3.Text _text_1 = new import3.Text('The null hero\'s name is ');
    _el_0.append(_text_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate0(_ctx.nullHero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent22(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent22(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  List<import46.RelativePosition> __defaultPopupPositions_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  import47.AcxImperativeViewUtils __AcxImperativeViewUtils_0_9;
  dynamic __Document_0_10;
  import48.DomRuler __DomRuler_0_11;
  import49.Angular2ManagedZone __ManagedZone_0_12;
  dynamic __overlayContainerName_0_13;
  dynamic __overlayContainerParent_0_14;
  dynamic __overlayContainer_0_15;
  bool __overlaySyncDom_0_16;
  bool __overlayRepositionLoop_0_17;
  import50.OverlayStyleConfig __OverlayStyleConfig_0_18;
  import51.ZIndexer __ZIndexer_0_19;
  import52.OverlayDomRenderService __OverlayDomRenderService_0_20;
  import53.OverlayService __OverlayService_0_21;
  import54.DomPopupSourceFactory __DomPopupSourceFactory_0_22;
  import55.Clock __Clock_0_23;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import31.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<import46.RelativePosition> get _defaultPopupPositions_0_6 {
    if ((this.__defaultPopupPositions_0_6 == null)) {
      (__defaultPopupPositions_0_6 = const [const import46.RelativePosition(animationOrigin: 'top center'), const import46.RelativePosition(animationOrigin: 'top right', originX: const import46.Alignment('End', 'flex-end')), const import46.RelativePosition(animationOrigin: 'top left', originX: const import46.Alignment('Start', 'flex-start')), const import46.RelativePosition(animationOrigin: 'bottom center', originY: const import46.Alignment('End', 'flex-end')), const import46.RelativePosition(animationOrigin: 'bottom right', originX: const import46.Alignment('End', 'flex-end'), originY: const import46.Alignment('End', 'flex-end')), const import46.RelativePosition(animationOrigin: 'bottom left', originX: const import46.Alignment('Start', 'flex-start'), originY: const import46.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_6;
  }

  dynamic get _Window_0_7 {
    if ((this.__Window_0_7 == null)) {
      (__Window_0_7 = import56.getWindow());
    }
    return this.__Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((this.__DomService_0_8 == null)) {
      (__DomService_0_8 = import57.createDomService(this.injectorGet(import58.DomService, this.viewData.parentIndex, null), this.injectorGet(import59.Disposer, this.viewData.parentIndex, null), this.injectorGet(import36.NgZone, this.viewData.parentIndex), this._Window_0_7));
    }
    return this.__DomService_0_8;
  }

  import47.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_9 {
    if ((this.__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = new import47.AcxImperativeViewUtils(this.injectorGet(import60.ComponentLoader, this.viewData.parentIndex), this._DomService_0_8));
    }
    return this.__AcxImperativeViewUtils_0_9;
  }

  dynamic get _Document_0_10 {
    if ((this.__Document_0_10 == null)) {
      (__Document_0_10 = import56.getDocument());
    }
    return this.__Document_0_10;
  }

  import48.DomRuler get _DomRuler_0_11 {
    if ((this.__DomRuler_0_11 == null)) {
      (__DomRuler_0_11 = new import48.DomRuler(this._Document_0_10, this._DomService_0_8));
    }
    return this.__DomRuler_0_11;
  }

  import49.Angular2ManagedZone get _ManagedZone_0_12 {
    if ((this.__ManagedZone_0_12 == null)) {
      (__ManagedZone_0_12 = new import49.Angular2ManagedZone(this.injectorGet(import36.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_12;
  }

  dynamic get _overlayContainerName_0_13 {
    if ((this.__overlayContainerName_0_13 == null)) {
      (__overlayContainerName_0_13 = import61.getDefaultContainerName(this.injectorGet(const import38.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_13;
  }

  dynamic get _overlayContainerParent_0_14 {
    if ((this.__overlayContainerParent_0_14 == null)) {
      (__overlayContainerParent_0_14 = import61.getOverlayContainerParent(this._Document_0_10, this.injectorGet(const import38.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_14;
  }

  dynamic get _overlayContainer_0_15 {
    if ((this.__overlayContainer_0_15 == null)) {
      (__overlayContainer_0_15 = import61.getDefaultContainer(this._overlayContainerName_0_13, this._overlayContainerParent_0_14, this.injectorGet(const import38.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_0_15;
  }

  bool get _overlaySyncDom_0_16 {
    if ((this.__overlaySyncDom_0_16 == null)) {
      (__overlaySyncDom_0_16 = true);
    }
    return this.__overlaySyncDom_0_16;
  }

  bool get _overlayRepositionLoop_0_17 {
    if ((this.__overlayRepositionLoop_0_17 == null)) {
      (__overlayRepositionLoop_0_17 = true);
    }
    return this.__overlayRepositionLoop_0_17;
  }

  import50.OverlayStyleConfig get _OverlayStyleConfig_0_18 {
    if ((this.__OverlayStyleConfig_0_18 == null)) {
      (__OverlayStyleConfig_0_18 = new import50.OverlayStyleConfig(this._Document_0_10));
    }
    return this.__OverlayStyleConfig_0_18;
  }

  import51.ZIndexer get _ZIndexer_0_19 {
    if ((this.__ZIndexer_0_19 == null)) {
      (__ZIndexer_0_19 = new import51.ZIndexer());
    }
    return this.__ZIndexer_0_19;
  }

  import52.OverlayDomRenderService get _OverlayDomRenderService_0_20 {
    if ((this.__OverlayDomRenderService_0_20 == null)) {
      (__OverlayDomRenderService_0_20 = new import52.OverlayDomRenderService(this._OverlayStyleConfig_0_18, this._overlayContainer_0_15, this._overlayContainerName_0_13, this._DomRuler_0_11, this._DomService_0_8, this._AcxImperativeViewUtils_0_9, this._overlaySyncDom_0_16, this._overlayRepositionLoop_0_17, this._ZIndexer_0_19));
    }
    return this.__OverlayDomRenderService_0_20;
  }

  import53.OverlayService get _OverlayService_0_21 {
    if ((this.__OverlayService_0_21 == null)) {
      (__OverlayService_0_21 = new import53.OverlayService(this.injectorGet(import36.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_16, this._OverlayDomRenderService_0_20, this.injectorGet(import53.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_21;
  }

  import54.DomPopupSourceFactory get _DomPopupSourceFactory_0_22 {
    if ((this.__DomPopupSourceFactory_0_22 == null)) {
      (__DomPopupSourceFactory_0_22 = new import54.DomPopupSourceFactory(this._DomRuler_0_11));
    }
    return this.__DomPopupSourceFactory_0_22;
  }

  import55.Clock get _Clock_0_23 {
    if ((this.__Clock_0_23 == null)) {
      (__Clock_0_23 = const import55.Clock());
    }
    return this.__Clock_0_23;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = new import2.AppComponent(_compView_0.ref);
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.AppComponent>(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import38.OpaqueToken<List<import62.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_6;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import58.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import47.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_10;
    }
    if ((identical(token, import48.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_11;
    }
    if ((identical(token, import63.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_12;
    }
    if ((identical(token, const import38.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_13;
    }
    if ((identical(token, const import38.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_14;
    }
    if ((identical(token, const import38.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_15;
    }
    if ((identical(token, const import38.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_16;
    }
    if ((identical(token, const import38.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_17;
    }
    if ((identical(token, import50.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_18;
    }
    if ((identical(token, import51.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_19;
    }
    if ((identical(token, import52.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_20;
    }
    if ((identical(token, import53.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_21;
    }
    if ((identical(token, import54.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_22;
    }
    if (((identical(token, import55.Clock) || identical(token, const import38.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (0 == nodeIndex))) {
      return _Clock_0_23;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _AppComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppComponent> AppComponentNgFactory = const ComponentFactory<import2.AppComponent>('my-app', viewFactory_AppComponentHost0, _AppComponentMetadata);
const _AppComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
}
