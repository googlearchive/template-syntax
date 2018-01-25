// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_components/angular_components.dart';
import 'src/hero.dart';
import 'src/hero_detail_component.dart';
import 'src/hero_form_component.dart';
import 'src/hero_switch_components.dart';
import 'src/click_directive.dart';
import 'src/sizer_component.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;
import 'src/click_directive.template.dart' as _ref3;
import 'src/hero.template.dart' as _ref4;
import 'src/hero_detail_component.template.dart' as _ref5;
import 'src/hero_form_component.template.dart' as _ref6;
import 'src/hero_switch_components.template.dart' as _ref7;
import 'src/sizer_component.template.dart' as _ref8;

import 'package:template_syntax/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import6;
import 'package:angular_forms/src/directives/ng_form.dart' as import7;
import 'src/hero_detail_component.template.dart' as import8;
import 'src/hero_detail_component.dart' as import9;
import 'package:angular/src/common/directives/ng_class.dart' as import10;
import 'src/click_directive.dart' as import11;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import12;
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
import 'package:angular/src/core/linker/element_ref.dart';
import 'src/hero.dart' as import42;
import 'package:angular_components/material_radio/material_radio.template.dart' as import43;
import 'package:angular_components/material_radio/material_radio.dart' as import44;
import 'src/hero_switch_components.template.dart' as import45;
import 'src/hero_switch_components.dart' as import46;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import47;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import48;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import49;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import50;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import51;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import52;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import53;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import54;
import 'package:angular_components/laminate/enums/alignment.dart' as import55;
import 'package:angular_components/utils/browser/window/module.dart' as import56;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import57;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import58;
import 'package:angular_components/utils/disposer/disposer.dart' as import59;
import 'package:angular/src/core/linker/component_loader.dart' as import60;
import 'package:angular_components/laminate/overlay/module.dart' as import61;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import62;

const List<dynamic> styles$AppComponent = const [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  final import3.QueryList _viewQuery_noTrackBy_0 = new import3.QueryList();
  final import3.QueryList _viewQuery_withTrackBy_1 = new import3.QueryList();
  import4.AnchorElement _el_0;
  import4.Element _el_1;
  import4.AnchorElement _el_3;
  import4.Element _el_5;
  import4.AnchorElement _el_6;
  import4.Element _el_8;
  import4.AnchorElement _el_9;
  import4.Element _el_11;
  import4.AnchorElement _el_12;
  import4.Element _el_14;
  import4.AnchorElement _el_15;
  import4.Element _el_17;
  import4.AnchorElement _el_18;
  import4.Element _el_20;
  import4.Element _el_21;
  import4.AnchorElement _el_22;
  import4.Element _el_24;
  import4.DivElement _el_25;
  import4.AnchorElement _el_26;
  import4.Element _el_28;
  import4.AnchorElement _el_29;
  import4.Element _el_31;
  import4.AnchorElement _el_32;
  import4.Element _el_34;
  import4.Element _el_35;
  import4.AnchorElement _el_36;
  import4.Element _el_38;
  import4.AnchorElement _el_39;
  import4.Element _el_41;
  import4.Element _el_42;
  import4.DivElement _el_43;
  import4.DivElement _el_45;
  import4.AnchorElement _el_46;
  import4.Element _el_48;
  import4.AnchorElement _el_49;
  import4.Element _el_51;
  import4.AnchorElement _el_52;
  import4.Element _el_54;
  import4.AnchorElement _el_55;
  import4.Element _el_57;
  import4.AnchorElement _el_58;
  import4.Element _el_60;
  import4.DivElement _el_61;
  import4.AnchorElement _el_62;
  import4.Element _el_64;
  import4.AnchorElement _el_65;
  import4.Element _el_67;
  import4.AnchorElement _el_68;
  import4.Element _el_70;
  import4.Element _el_71;
  import4.AnchorElement _el_72;
  import4.Element _el_74;
  import4.AnchorElement _el_75;
  import4.Element _el_77;
  import4.AnchorElement _el_78;
  import4.Element _el_80;
  import4.AnchorElement _el_81;
  import4.Element _el_83;
  import4.Element _el_85;
  import4.AnchorElement _el_86;
  import4.Element _el_88;
  import4.Element _el_89;
  import4.Element _el_90;
  import4.Element _el_92;
  import4.Text _text_93;
  import4.Element _el_94;
  import4.Text _text_95;
  import4.Element _el_96;
  import4.Element _el_97;
  import4.Text _text_98;
  import4.Element _el_99;
  import4.Text _text_100;
  import4.AnchorElement _el_101;
  import4.Element _el_103;
  import4.Element _el_104;
  import4.Element _el_106;
  import4.Text _text_107;
  import4.DivElement _el_108;
  import4.Text _text_109;
  import4.Element _el_110;
  import4.Element _el_112;
  ViewContainer _appEl_114;
  import4.Element _el_115;
  import4.DivElement _el_117;
  import4.InputElement _el_119;
  import4.Text _text_120;
  import4.AnchorElement _el_121;
  import4.Element _el_123;
  import4.Element _el_124;
  import4.Element _el_126;
  import4.DivElement _el_128;
  import4.ButtonElement _el_129;
  import4.Element _el_131;
  import4.DivElement _el_133;
  import4.ButtonElement _el_134;
  import4.Element _el_136;
  import4.DivElement _el_138;
  ViewContainer _appEl_139;
  import6.NgFor _NgFor_139_7;
  import4.Element _el_140;
  import4.DivElement _el_142;
  import4.FormElement _el_143;
  import7.NgForm _NgForm_143_4;
  import4.AnchorElement _el_145;
  import4.Element _el_147;
  import4.Element _el_148;
  import4.DivElement _el_150;
  import4.Element _el_152;
  import4.ButtonElement _el_153;
  import4.Element _el_155;
  import4.Element _el_156;
  import4.DivElement _el_157;
  import4.DivElement _el_158;
  import4.Element _el_160;
  import8.ViewHeroDetailComponent0 _compView_160;
  import9.HeroDetailComponent _HeroDetailComponent_160_4;
  import4.Element _el_161;
  import4.Element _el_162;
  import4.DivElement _el_163;
  import4.ButtonElement _el_164;
  import4.Element _el_166;
  import4.Element _el_167;
  import4.DivElement _el_168;
  import4.Element _el_169;
  import4.Element _el_170;
  import8.ViewHeroDetailComponent0 _compView_170;
  import9.HeroDetailComponent _HeroDetailComponent_170_4;
  import4.DivElement _el_171;
  import10.NgClass _NgClass_171_4;
  import4.Element _el_172;
  import4.Element _el_173;
  import4.ButtonElement _el_174;
  import4.Element _el_176;
  import8.ViewHeroDetailComponent0 _compView_176;
  import9.HeroDetailComponent _HeroDetailComponent_176_4;
  import4.DivElement _el_177;
  import11.ClickDirective _ClickDirective_177_4;
  import4.Text _text_179;
  import4.Element _el_180;
  import4.Element _el_181;
  import4.DivElement _el_182;
  import4.InputElement _el_184;
  import12.DefaultValueAccessor _DefaultValueAccessor_184_4;
  List<dynamic> _NgValueAccessor_184_5;
  import13.NgModel _NgModel_184_6;
  import4.Text _text_185;
  import4.Element _el_186;
  import4.Element _el_187;
  import4.ButtonElement _el_188;
  import4.Element _el_190;
  import4.Element _el_191;
  import4.DivElement _el_192;
  import4.Element _el_194;
  import4.Element _el_195;
  import4.ButtonElement _el_196;
  import4.AnchorElement _el_198;
  import4.Element _el_200;
  import4.Element _el_201;
  import4.Element _el_203;
  import4.Element _el_204;
  import4.Element _el_205;
  import4.Element _el_206;
  import4.Element _el_207;
  import4.Element _el_208;
  import4.AnchorElement _el_209;
  import4.Element _el_211;
  import4.Element _el_212;
  import4.ButtonElement _el_214;
  import4.ButtonElement _el_216;
  import4.ButtonElement _el_218;
  import4.Element _el_220;
  import4.Element _el_221;
  import4.ButtonElement _el_222;
  import4.ButtonElement _el_224;
  import4.Element _el_226;
  import4.Element _el_227;
  import4.ButtonElement _el_228;
  import4.ButtonElement _el_230;
  import4.AnchorElement _el_232;
  import4.Element _el_234;
  import4.Element _el_235;
  import4.Element _el_237;
  import4.ButtonElement _el_238;
  import4.DivElement _el_240;
  import10.NgClass _NgClass_240_4;
  import4.Element _el_242;
  import8.ViewHeroDetailComponent0 _compView_242;
  import9.HeroDetailComponent _HeroDetailComponent_242_4;
  import4.Element _el_243;
  import4.Element _el_244;
  import8.ViewHeroDetailComponent0 _compView_244;
  import9.HeroDetailComponent _HeroDetailComponent_244_4;
  import4.Element _el_245;
  import4.Element _el_246;
  import4.Element _el_248;
  import4.Element _el_251;
  import4.Element _el_252;
  import4.Element _el_254;
  import4.Element _el_257;
  import4.Element _el_258;
  import4.Text _text_259;
  import4.Element _el_260;
  import4.Element _el_263;
  import4.Element _el_265;
  import4.Element _el_267;
  import4.Element _el_270;
  import4.Element _el_271;
  import4.Text _text_272;
  import4.Element _el_273;
  import4.Element _el_276;
  import4.Element _el_278;
  import4.Element _el_280;
  import4.AnchorElement _el_283;
  import4.Element _el_285;
  import4.Element _el_286;
  import4.TableElement _el_288;
  import4.Element _el_289;
  import4.Element _el_290;
  import4.Element _el_291;
  import4.Element _el_293;
  import4.Element _el_294;
  import4.Element _el_296;
  import4.Element _el_298;
  import4.ButtonElement _el_299;
  import4.Text _text_300;
  import4.Element _el_301;
  import4.Element _el_302;
  import4.DivElement _el_303;
  import4.ButtonElement _el_304;
  import4.ButtonElement _el_306;
  import4.ButtonElement _el_308;
  import4.AnchorElement _el_310;
  import4.Element _el_312;
  import4.Element _el_313;
  import4.DivElement _el_315;
  import4.DivElement _el_317;
  import4.DivElement _el_319;
  import4.DivElement _el_321;
  import4.DivElement _el_323;
  import4.AnchorElement _el_325;
  import4.Element _el_327;
  import4.Element _el_328;
  import4.ButtonElement _el_330;
  import4.ButtonElement _el_332;
  import4.ButtonElement _el_334;
  import4.ButtonElement _el_336;
  import4.AnchorElement _el_338;
  import4.Element _el_340;
  import4.Element _el_341;
  import4.ButtonElement _el_343;
  import4.ButtonElement _el_345;
  import4.DivElement _el_347;
  import4.DivElement _el_348;
  import11.ClickDirective _ClickDirective_348_4;
  import4.Text _text_350;
  import4.Element _el_351;
  import8.ViewHeroDetailComponent0 _compView_351;
  import9.HeroDetailComponent _HeroDetailComponent_351_4;
  import4.Element _el_352;
  import4.Element _el_353;
  import8.ViewBigHeroDetailComponent0 _compView_353;
  import9.BigHeroDetailComponent _BigHeroDetailComponent_353_4;
  import4.DivElement _el_354;
  import4.DivElement _el_356;
  import4.DivElement _el_358;
  import4.ButtonElement _el_359;
  import4.DivElement _el_361;
  import4.ButtonElement _el_362;
  import4.AnchorElement _el_364;
  import4.Element _el_366;
  import4.Element _el_367;
  import4.DivElement _el_369;
  import4.Element _el_370;
  import14.ViewSizerComponent0 _compView_370;
  import15.SizerComponent _SizerComponent_370_4;
  import4.DivElement _el_371;
  import4.Element _el_373;
  import4.InputElement _el_375;
  import12.DefaultValueAccessor _DefaultValueAccessor_375_4;
  List<dynamic> _NgValueAccessor_375_5;
  import13.NgModel _NgModel_375_6;
  import4.Text _text_376;
  import4.Element _el_377;
  import4.DivElement _el_378;
  import4.Element _el_379;
  import4.Element _el_381;
  import14.ViewSizerComponent0 _compView_381;
  import15.SizerComponent _SizerComponent_381_4;
  import4.AnchorElement _el_382;
  import4.Element _el_384;
  import4.Element _el_385;
  import4.Element _el_387;
  import4.Text _text_388;
  import4.InputElement _el_389;
  import4.Element _el_391;
  import4.InputElement _el_392;
  import12.DefaultValueAccessor _DefaultValueAccessor_392_4;
  List<dynamic> _NgValueAccessor_392_5;
  import13.NgModel _NgModel_392_6;
  import4.Element _el_394;
  import4.InputElement _el_395;
  import12.DefaultValueAccessor _DefaultValueAccessor_395_4;
  List<dynamic> _NgValueAccessor_395_5;
  import13.NgModel _NgModel_395_6;
  import4.Element _el_397;
  import4.InputElement _el_398;
  import12.DefaultValueAccessor _DefaultValueAccessor_398_4;
  List<dynamic> _NgValueAccessor_398_5;
  import13.NgModel _NgModel_398_6;
  import4.Element _el_400;
  import4.InputElement _el_401;
  import12.DefaultValueAccessor _DefaultValueAccessor_401_4;
  List<dynamic> _NgValueAccessor_401_5;
  import13.NgModel _NgModel_401_6;
  import4.AnchorElement _el_403;
  import4.Element _el_405;
  import4.Element _el_406;
  import4.Element _el_408;
  import4.Text _text_409;
  import4.DivElement _el_410;
  import10.NgClass _NgClass_410_4;
  import4.Element _el_412;
  import4.Element _el_413;
  import4.InputElement _el_415;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_415_4;
  List<dynamic> _NgValueAccessor_415_5;
  import13.NgModel _NgModel_415_6;
  import4.Element _el_417;
  import4.InputElement _el_419;
  import4.Element _el_421;
  import4.InputElement _el_423;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_423_4;
  List<dynamic> _NgValueAccessor_423_5;
  import13.NgModel _NgModel_423_6;
  import4.ButtonElement _el_424;
  import4.Element _el_426;
  import4.Element _el_427;
  import4.DivElement _el_428;
  import10.NgClass _NgClass_428_4;
  import4.Text _text_429;
  import4.Element _el_430;
  import4.Element _el_431;
  import4.DivElement _el_432;
  import10.NgClass _NgClass_432_4;
  import4.DivElement _el_434;
  import4.DivElement _el_436;
  import10.NgClass _NgClass_436_4;
  import4.AnchorElement _el_438;
  import4.Element _el_440;
  import4.Element _el_441;
  import4.DivElement _el_443;
  import4.Element _el_445;
  import4.Element _el_447;
  import4.Text _text_448;
  import4.DivElement _el_449;
  import17.NgStyle _NgStyle_449_4;
  import4.Element _el_451;
  import4.Element _el_452;
  import4.InputElement _el_454;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_454_4;
  List<dynamic> _NgValueAccessor_454_5;
  import13.NgModel _NgModel_454_6;
  import4.Element _el_456;
  import4.InputElement _el_458;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_458_4;
  List<dynamic> _NgValueAccessor_458_5;
  import13.NgModel _NgModel_458_6;
  import4.Element _el_460;
  import4.InputElement _el_462;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_462_4;
  List<dynamic> _NgValueAccessor_462_5;
  import13.NgModel _NgModel_462_6;
  import4.ButtonElement _el_463;
  import4.Element _el_465;
  import4.Element _el_466;
  import4.DivElement _el_467;
  import17.NgStyle _NgStyle_467_4;
  import4.Text _text_468;
  import4.AnchorElement _el_469;
  import4.Element _el_471;
  import4.Element _el_472;
  ViewContainer _appEl_474;
  NgIf _NgIf_474_7;
  ViewContainer _appEl_475;
  NgIf _NgIf_475_7;
  ViewContainer _appEl_476;
  NgIf _NgIf_476_7;
  ViewContainer _appEl_477;
  NgIf _NgIf_477_7;
  import4.DivElement _el_478;
  ViewContainer _appEl_480;
  NgIf _NgIf_480_7;
  import4.DivElement _el_481;
  import4.DivElement _el_483;
  import4.Element _el_485;
  import8.ViewHeroDetailComponent0 _compView_485;
  import9.HeroDetailComponent _HeroDetailComponent_485_4;
  import4.DivElement _el_486;
  import4.DivElement _el_488;
  import4.AnchorElement _el_490;
  import4.Element _el_492;
  import4.Element _el_493;
  import4.DivElement _el_495;
  ViewContainer _appEl_496;
  import6.NgFor _NgFor_496_7;
  import4.Element _el_497;
  import4.DivElement _el_498;
  ViewContainer _appEl_499;
  import6.NgFor _NgFor_499_7;
  import4.AnchorElement _el_500;
  import4.Element _el_502;
  import4.Element _el_504;
  import4.Element _el_506;
  import4.DivElement _el_509;
  ViewContainer _appEl_510;
  import6.NgFor _NgFor_510_7;
  import4.Element _el_511;
  import4.Element _el_513;
  import4.DivElement _el_516;
  ViewContainer _appEl_517;
  import6.NgFor _NgFor_517_7;
  import4.AnchorElement _el_518;
  import4.Element _el_520;
  import4.ButtonElement _el_522;
  import4.ButtonElement _el_524;
  import4.ButtonElement _el_526;
  import4.Element _el_528;
  import4.Element _el_529;
  import4.DivElement _el_532;
  ViewContainer _appEl_533;
  import6.NgFor _NgFor_533_7;
  ViewContainer _appEl_534;
  NgIf _NgIf_534_7;
  import4.Element _el_535;
  import4.DivElement _el_537;
  ViewContainer _appEl_538;
  import6.NgFor _NgFor_538_7;
  ViewContainer _appEl_539;
  NgIf _NgIf_539_7;
  import4.Element _el_540;
  import4.Element _el_541;
  import4.Element _el_542;
  import4.Element _el_543;
  import4.Element _el_545;
  import4.DivElement _el_548;
  ViewContainer _appEl_549;
  import6.NgFor _NgFor_549_7;
  import4.Element _el_550;
  import4.Element _el_552;
  import4.DivElement _el_555;
  ViewContainer _appEl_556;
  import6.NgFor _NgFor_556_7;
  import4.Element _el_557;
  import4.Element _el_559;
  import4.DivElement _el_562;
  ViewContainer _appEl_563;
  import6.NgFor _NgFor_563_7;
  import4.Element _el_564;
  import4.Element _el_566;
  import4.DivElement _el_569;
  ViewContainer _appEl_570;
  import6.NgFor _NgFor_570_7;
  import4.AnchorElement _el_571;
  import4.Element _el_573;
  import4.Element _el_574;
  import4.Element _el_576;
  import4.Element _el_578;
  import19.ViewMaterialRadioGroupComponent0 _compView_578;
  import13.NgModel _NgModel_578_4;
  dynamic _NgControl_578_5;
  import20.MaterialRadioGroupComponent _MaterialRadioGroupComponent_578_6;
  final import3.QueryList _query_MaterialRadioComponent_578_0 = new import3.QueryList();
  ViewContainer _appEl_579;
  import6.NgFor _NgFor_579_7;
  import4.Element _el_580;
  import4.Text _text_581;
  import4.DivElement _el_582;
  import21.NgSwitch _NgSwitch_582_4;
  ViewContainer _appEl_583;
  import21.NgSwitchWhen _NgSwitchWhen_583_7;
  ViewContainer _appEl_584;
  import21.NgSwitchWhen _NgSwitchWhen_584_7;
  ViewContainer _appEl_585;
  import21.NgSwitchWhen _NgSwitchWhen_585_7;
  ViewContainer _appEl_586;
  import21.NgSwitchWhen _NgSwitchWhen_586_7;
  ViewContainer _appEl_587;
  import21.NgSwitchDefault _NgSwitchDefault_587_7;
  import4.AnchorElement _el_588;
  import4.Element _el_590;
  import4.Element _el_591;
  import4.InputElement _el_593;
  import4.ButtonElement _el_594;
  import4.InputElement _el_596;
  import4.ButtonElement _el_597;
  import4.ButtonElement _el_599;
  import4.Element _el_600;
  import4.Element _el_602;
  import22.ViewHeroFormComponent0 _compView_602;
  import23.HeroFormComponent _HeroFormComponent_602_4;
  import4.AnchorElement _el_603;
  import4.Element _el_605;
  import4.Element _el_606;
  import4.Element _el_608;
  import4.ButtonElement _el_609;
  import4.Element _el_611;
  import8.ViewHeroDetailComponent0 _compView_611;
  import9.HeroDetailComponent _HeroDetailComponent_611_4;
  import4.DivElement _el_612;
  import11.ClickDirective _ClickDirective_612_4;
  import4.Text _text_614;
  import4.AnchorElement _el_615;
  import4.Element _el_617;
  import4.Element _el_618;
  import4.DivElement _el_620;
  import4.Text _text_621;
  import4.DivElement _el_622;
  import4.Text _text_623;
  import4.DivElement _el_624;
  import4.Text _text_625;
  import4.DivElement _el_626;
  import4.Text _text_627;
  import4.DivElement _el_628;
  import4.Text _text_629;
  import4.DivElement _el_630;
  import4.Element _el_631;
  import4.Text _text_633;
  import4.AnchorElement _el_634;
  import4.Element _el_636;
  import4.Element _el_637;
  import4.Element _el_639;
  import4.DivElement _el_641;
  import4.Text _text_642;
  import4.DivElement _el_643;
  import4.Text _text_644;
  import4.DivElement _el_645;
  import4.Text _text_646;
  ViewContainer _appEl_647;
  NgIf _NgIf_647_7;
  import4.DivElement _el_648;
  import4.Text _text_649;
  import4.AnchorElement _el_650;
  import4.Element _el_652;
  import4.Element _el_653;
  import4.Element _el_655;
  import4.Text _text_656;
  import4.Element _el_657;
  import4.Text _text_658;
  import4.Element _el_659;
  import4.ButtonElement _el_660;
  import4.AnchorElement _el_662;
  var _expr_0;
  var _expr_1;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_10;
  var _expr_12;
  var _map_0;
  var _expr_13;
  var _expr_14;
  var _expr_16;
  var _expr_17;
  bool _expr_18;
  var _expr_19;
  var _expr_24;
  var _expr_25;
  var _expr_26;
  var _expr_28;
  var _expr_29;
  var _expr_30;
  var _expr_32;
  var _expr_36;
  var _expr_37;
  var _expr_38;
  var _expr_39;
  var _expr_40;
  var _expr_41;
  var _expr_42;
  var _expr_43;
  var _expr_44;
  String _expr_46;
  bool _expr_47;
  bool _expr_48;
  bool _expr_49;
  var _expr_50;
  var _expr_51;
  var _expr_52;
  var _expr_53;
  var _expr_54;
  var _expr_55;
  var _expr_56;
  var _expr_57;
  var _expr_58;
  var _expr_60;
  var _expr_61;
  var _expr_62;
  var _expr_63;
  var _expr_68;
  var _expr_69;
  var _expr_71;
  var _expr_73;
  var _expr_74;
  var _expr_75;
  var _map_1;
  var _expr_76;
  var _expr_77;
  var _expr_78;
  var _expr_79;
  var _expr_83;
  var _expr_84;
  bool _expr_90;
  bool _expr_91;
  bool _expr_92;
  var _expr_93;
  var _expr_94;
  var _expr_114;
  var _expr_115;
  var _expr_120;
  var _expr_121;
  var _expr_123;
  var _expr_124;
  var _expr_125;
  var _expr_126;
  var _expr_127;
  var _expr_128;
  var _expr_129;
  var _expr_130;
  var _expr_131;
  var _expr_132;
  var _expr_133;
  var _expr_135;
  var _expr_136;
  var _expr_137;
  var _expr_138;
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
  String Function(dynamic, String, bool) _pipe_currency_4_0;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('my-app');
    _renderType ??= import33.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    final import4.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import4.document;
    _el_0 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_0, 'id', 'toc');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_1);
    import4.Text _text_2 = new import4.Text('Template Syntax');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_3, 'href', '#interpolation');
    addShimC(_el_3);
    import4.Text _text_4 = new import4.Text('Interpolation');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_5);
    _el_6 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_6, 'href', '#expression-context');
    addShimC(_el_6);
    import4.Text _text_7 = new import4.Text('Expression context');
    _el_6.append(_text_7);
    _el_8 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_8);
    _el_9 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_9, 'href', '#statement-context');
    addShimC(_el_9);
    import4.Text _text_10 = new import4.Text('Statement context');
    _el_9.append(_text_10);
    _el_11 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_11);
    _el_12 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_12, 'href', '#mental-model');
    addShimC(_el_12);
    import4.Text _text_13 = new import4.Text('Mental Model');
    _el_12.append(_text_13);
    _el_14 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_14);
    _el_15 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_15, 'href', '#buttons');
    addShimC(_el_15);
    import4.Text _text_16 = new import4.Text('Buttons');
    _el_15.append(_text_16);
    _el_17 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_17);
    _el_18 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_18, 'href', '#prop-vs-attrib');
    addShimC(_el_18);
    import4.Text _text_19 = new import4.Text('Properties vs. Attributes');
    _el_18.append(_text_19);
    _el_20 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_20);
    _el_21 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_21);
    _el_22 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_22, 'href', '#property-binding');
    addShimC(_el_22);
    import4.Text _text_23 = new import4.Text('Property Binding');
    _el_22.append(_text_23);
    _el_24 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_24);
    _el_25 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_25, 'style', 'margin-left:8px');
    addShimC(_el_25);
    _el_26 = createAndAppend(doc, 'a', _el_25);
    createAttr(_el_26, 'href', '#attribute-binding');
    addShimC(_el_26);
    import4.Text _text_27 = new import4.Text('Attribute Binding');
    _el_26.append(_text_27);
    _el_28 = createAndAppend(doc, 'br', _el_25);
    addShimE(_el_28);
    _el_29 = createAndAppend(doc, 'a', _el_25);
    createAttr(_el_29, 'href', '#class-binding');
    addShimC(_el_29);
    import4.Text _text_30 = new import4.Text('Class Binding');
    _el_29.append(_text_30);
    _el_31 = createAndAppend(doc, 'br', _el_25);
    addShimE(_el_31);
    _el_32 = createAndAppend(doc, 'a', _el_25);
    createAttr(_el_32, 'href', '#style-binding');
    addShimC(_el_32);
    import4.Text _text_33 = new import4.Text('Style Binding');
    _el_32.append(_text_33);
    _el_34 = createAndAppend(doc, 'br', _el_25);
    addShimE(_el_34);
    _el_35 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_35);
    _el_36 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_36, 'href', '#event-binding');
    addShimC(_el_36);
    import4.Text _text_37 = new import4.Text('Event Binding');
    _el_36.append(_text_37);
    _el_38 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_38);
    _el_39 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_39, 'href', '#two-way');
    addShimC(_el_39);
    import4.Text _text_40 = new import4.Text('Two-way Binding');
    _el_39.append(_text_40);
    _el_41 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_41);
    _el_42 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_42);
    _el_43 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_43);
    import4.Text _text_44 = new import4.Text('Directives');
    _el_43.append(_text_44);
    _el_45 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_45, 'style', 'margin-left:8px');
    addShimC(_el_45);
    _el_46 = createAndAppend(doc, 'a', _el_45);
    createAttr(_el_46, 'href', '#ngModel');
    addShimC(_el_46);
    import4.Text _text_47 = new import4.Text('NgModel (two-way) Binding');
    _el_46.append(_text_47);
    _el_48 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_48);
    _el_49 = createAndAppend(doc, 'a', _el_45);
    createAttr(_el_49, 'href', '#ngClass');
    addShimC(_el_49);
    import4.Text _text_50 = new import4.Text('NgClass Binding');
    _el_49.append(_text_50);
    _el_51 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_51);
    _el_52 = createAndAppend(doc, 'a', _el_45);
    createAttr(_el_52, 'href', '#ngStyle');
    addShimC(_el_52);
    import4.Text _text_53 = new import4.Text('NgStyle Binding');
    _el_52.append(_text_53);
    _el_54 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_54);
    _el_55 = createAndAppend(doc, 'a', _el_45);
    createAttr(_el_55, 'href', '#ngIf');
    addShimC(_el_55);
    import4.Text _text_56 = new import4.Text('NgIf');
    _el_55.append(_text_56);
    _el_57 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_57);
    _el_58 = createAndAppend(doc, 'a', _el_45);
    createAttr(_el_58, 'href', '#ngFor');
    addShimC(_el_58);
    import4.Text _text_59 = new import4.Text('NgFor');
    _el_58.append(_text_59);
    _el_60 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_60);
    _el_61 = createDivAndAppend(doc, _el_45);
    createAttr(_el_61, 'style', 'margin-left:8px');
    addShimC(_el_61);
    _el_62 = createAndAppend(doc, 'a', _el_61);
    createAttr(_el_62, 'href', '#ngFor-index');
    addShimC(_el_62);
    import4.Text _text_63 = new import4.Text('NgFor with index');
    _el_62.append(_text_63);
    _el_64 = createAndAppend(doc, 'br', _el_61);
    addShimE(_el_64);
    _el_65 = createAndAppend(doc, 'a', _el_61);
    createAttr(_el_65, 'href', '#ngFor-trackBy');
    addShimC(_el_65);
    import4.Text _text_66 = new import4.Text('NgFor with trackBy');
    _el_65.append(_text_66);
    _el_67 = createAndAppend(doc, 'br', _el_61);
    addShimE(_el_67);
    _el_68 = createAndAppend(doc, 'a', _el_45);
    createAttr(_el_68, 'href', '#ngSwitch');
    addShimC(_el_68);
    import4.Text _text_69 = new import4.Text('NgSwitch');
    _el_68.append(_text_69);
    _el_70 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_70);
    _el_71 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_71);
    _el_72 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_72, 'href', '#ref-vars');
    addShimC(_el_72);
    import4.Text _text_73 = new import4.Text('Template reference variables');
    _el_72.append(_text_73);
    _el_74 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_74);
    _el_75 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_75, 'href', '#inputs-and-outputs');
    addShimC(_el_75);
    import4.Text _text_76 = new import4.Text('Inputs and outputs');
    _el_75.append(_text_76);
    _el_77 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_77);
    _el_78 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_78, 'href', '#pipes');
    addShimC(_el_78);
    import4.Text _text_79 = new import4.Text('Pipes');
    _el_78.append(_text_79);
    _el_80 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_80);
    _el_81 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_81, 'href', '#safe-navigation-operator');
    addShimC(_el_81);
    import4.Text _text_82 = new import4.Text('Safe navigation operator');
    _el_81.append(_text_82);
    _el_83 = createAndAppend(doc, 'i', _el_81);
    addShimE(_el_83);
    import4.Text _text_84 = new import4.Text('?.');
    _el_83.append(_text_84);
    _el_85 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_85);
    _el_86 = createAndAppend(doc, 'a', parentRenderNode);
    createAttr(_el_86, 'href', '#enums');
    addShimC(_el_86);
    import4.Text _text_87 = new import4.Text('Enums');
    _el_86.append(_text_87);
    _el_88 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_88);
    _el_89 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_89);
    _el_90 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_90, 'id', 'interpolation');
    addShimE(_el_90);
    import4.Text _text_91 = new import4.Text('Interpolation');
    _el_90.append(_text_91);
    _el_92 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_92);
    _text_93 = new import4.Text('');
    _el_92.append(_text_93);
    _el_94 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_94);
    _text_95 = new import4.Text('');
    _el_94.append(_text_95);
    _el_96 = createAndAppend(doc, 'img', _el_94);
    createAttr(_el_96, 'style', 'height:30px');
    addShimE(_el_96);
    _el_97 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_97);
    _text_98 = new import4.Text('');
    _el_97.append(_text_98);
    _el_99 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_99);
    _text_100 = new import4.Text('');
    _el_99.append(_text_100);
    _el_101 = createAndAppend(doc, 'a', parentRenderNode);
    _el_101.className = 'to-toc';
    createAttr(_el_101, 'href', '#toc');
    addShimC(_el_101);
    import4.Text _text_102 = new import4.Text('top');
    _el_101.append(_text_102);
    _el_103 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_103);
    _el_104 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_104, 'id', 'expression-context');
    addShimE(_el_104);
    import4.Text _text_105 = new import4.Text('Expression context');
    _el_104.append(_text_105);
    _el_106 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_106);
    _text_107 = new import4.Text('');
    _el_106.append(_text_107);
    _el_108 = createDivAndAppend(doc, parentRenderNode);
    _el_108.className = 'context';
    addShimC(_el_108);
    _text_109 = new import4.Text('');
    _el_108.append(_text_109);
    _el_110 = createSpanAndAppend(doc, _el_108);
    addShimE(_el_110);
    import4.Text _text_111 = new import4.Text('changed');
    _el_110.append(_text_111);
    _el_112 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_112);
    import4.Text _text_113 = new import4.Text('Template input variable expression context (let hero)');
    _el_112.append(_text_113);
    var _anchor_114 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_114);
    _appEl_114 = new ViewContainer(114, null, this, _anchor_114);
    TemplateRef _TemplateRef_114_5 = new TemplateRef(_appEl_114, viewFactory_AppComponent1);
    _el_115 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_115);
    import4.Text _text_116 = new import4.Text('Template reference variable expression context (#heroInput)');
    _el_115.append(_text_116);
    _el_117 = createDivAndAppend(doc, parentRenderNode);
    _el_117.className = 'context';
    addShimC(_el_117);
    import4.Text _text_118 = new import4.Text('Type something:');
    _el_117.append(_text_118);
    _el_119 = createAndAppend(doc, 'input', _el_117);
    addShimC(_el_119);
    _text_120 = new import4.Text('');
    _el_117.append(_text_120);
    _el_121 = createAndAppend(doc, 'a', parentRenderNode);
    _el_121.className = 'to-toc';
    createAttr(_el_121, 'href', '#toc');
    addShimC(_el_121);
    import4.Text _text_122 = new import4.Text('top');
    _el_121.append(_text_122);
    _el_123 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_123);
    _el_124 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_124, 'id', 'statement-context');
    addShimE(_el_124);
    import4.Text _text_125 = new import4.Text('Statement context');
    _el_124.append(_text_125);
    _el_126 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_126);
    import4.Text _text_127 = new import4.Text('Component statement context ( (click)="onSave() )');
    _el_126.append(_text_127);
    _el_128 = createDivAndAppend(doc, parentRenderNode);
    _el_128.className = 'context';
    addShimC(_el_128);
    _el_129 = createAndAppend(doc, 'button', _el_128);
    addShimC(_el_129);
    import4.Text _text_130 = new import4.Text('Delete hero');
    _el_129.append(_text_130);
    _el_131 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_131);
    import4.Text _text_132 = new import4.Text('Template \$event statement context');
    _el_131.append(_text_132);
    _el_133 = createDivAndAppend(doc, parentRenderNode);
    _el_133.className = 'context';
    addShimC(_el_133);
    _el_134 = createAndAppend(doc, 'button', _el_133);
    addShimC(_el_134);
    import4.Text _text_135 = new import4.Text('Save');
    _el_134.append(_text_135);
    _el_136 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_136);
    import4.Text _text_137 = new import4.Text('Template input variable statement context (let hero)');
    _el_136.append(_text_137);
    _el_138 = createDivAndAppend(doc, parentRenderNode);
    _el_138.className = 'context';
    addShimC(_el_138);
    var _anchor_139 = ngAnchor.clone(false);
    _el_138.append(_anchor_139);
    _appEl_139 = new ViewContainer(139, 138, this, _anchor_139);
    TemplateRef _TemplateRef_139_6 = new TemplateRef(_appEl_139, viewFactory_AppComponent3);
    _NgFor_139_7 = new import6.NgFor(_appEl_139, _TemplateRef_139_6);
    _el_140 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_140);
    import4.Text _text_141 = new import4.Text('Template reference variable statement context (#heroForm)');
    _el_140.append(_text_141);
    _el_142 = createDivAndAppend(doc, parentRenderNode);
    _el_142.className = 'context';
    addShimC(_el_142);
    _el_143 = createAndAppend(doc, 'form', _el_142);
    addShimC(_el_143);
    _NgForm_143_4 = new import7.NgForm(null);
    import4.Text _text_144 = new import4.Text('...');
    _el_143.append(_text_144);
    _el_145 = createAndAppend(doc, 'a', parentRenderNode);
    _el_145.className = 'to-toc';
    createAttr(_el_145, 'href', '#toc');
    addShimC(_el_145);
    import4.Text _text_146 = new import4.Text('top');
    _el_145.append(_text_146);
    _el_147 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_147);
    _el_148 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_148, 'id', 'mental-model');
    addShimE(_el_148);
    import4.Text _text_149 = new import4.Text('New Mental Model');
    _el_148.append(_text_149);
    _el_150 = createDivAndAppend(doc, parentRenderNode);
    _el_150.className = 'special';
    addShimC(_el_150);
    import4.Text _text_151 = new import4.Text('Mental Model');
    _el_150.append(_text_151);
    _el_152 = createAndAppend(doc, 'img', parentRenderNode);
    createAttr(_el_152, 'src', 'assets/images/hero.png');
    addShimE(_el_152);
    _el_153 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_153, 'disabled', '');
    addShimC(_el_153);
    import4.Text _text_154 = new import4.Text('Save');
    _el_153.append(_text_154);
    _el_155 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_155);
    _el_156 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_156);
    _el_157 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_157);
    _el_158 = createDivAndAppend(doc, _el_157);
    _el_158.className = 'special';
    addShimC(_el_158);
    import4.Text _text_159 = new import4.Text('Mental Model');
    _el_158.append(_text_159);
    _compView_160 = new import8.ViewHeroDetailComponent0(this, 160);
    _el_160 = _compView_160.rootEl;
    _el_157.append(_el_160);
    addShimC(_el_160);
    _HeroDetailComponent_160_4 = new import9.HeroDetailComponent();
    _compView_160.create(_HeroDetailComponent_160_4, []);
    _el_161 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_161);
    _el_162 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_162);
    _el_163 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_163);
    _el_164 = createAndAppend(doc, 'button', _el_163);
    addShimC(_el_164);
    import4.Text _text_165 = new import4.Text('Save');
    _el_164.append(_text_165);
    _el_166 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_166);
    _el_167 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_167);
    _el_168 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_168);
    _el_169 = createAndAppend(doc, 'img', _el_168);
    addShimE(_el_169);
    _compView_170 = new import8.ViewHeroDetailComponent0(this, 170);
    _el_170 = _compView_170.rootEl;
    _el_168.append(_el_170);
    addShimC(_el_170);
    _HeroDetailComponent_170_4 = new import9.HeroDetailComponent();
    _compView_170.create(_HeroDetailComponent_170_4, []);
    _el_171 = createDivAndAppend(doc, _el_168);
    addShimC(_el_171);
    _NgClass_171_4 = new import10.NgClass(_el_171);
    _el_172 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_172);
    _el_173 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_173);
    _el_174 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_174);
    import4.Text _text_175 = new import4.Text('Save');
    _el_174.append(_text_175);
    _compView_176 = new import8.ViewHeroDetailComponent0(this, 176);
    _el_176 = _compView_176.rootEl;
    parentRenderNode.append(_el_176);
    addShimC(_el_176);
    _HeroDetailComponent_176_4 = new import9.HeroDetailComponent();
    _compView_176.create(_HeroDetailComponent_176_4, []);
    _el_177 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_177, 'clickable', '');
    addShimC(_el_177);
    _ClickDirective_177_4 = new import11.ClickDirective(_el_177);
    import4.Text _text_178 = new import4.Text('click me');
    _el_177.append(_text_178);
    _text_179 = new import4.Text('');
    parentRenderNode.append(_text_179);
    _el_180 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_180);
    _el_181 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_181);
    _el_182 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_182);
    import4.Text _text_183 = new import4.Text('Hero Name:');
    _el_182.append(_text_183);
    _el_184 = createAndAppend(doc, 'input', _el_182);
    addShimC(_el_184);
    _DefaultValueAccessor_184_4 = new import12.DefaultValueAccessor(_el_184);
    _NgValueAccessor_184_5 = [_DefaultValueAccessor_184_4];
    _NgModel_184_6 = new import13.NgModel(null, _NgValueAccessor_184_5);
    _text_185 = new import4.Text('');
    _el_182.append(_text_185);
    _el_186 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_186);
    _el_187 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_187);
    _el_188 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_188);
    import4.Text _text_189 = new import4.Text('help');
    _el_188.append(_text_189);
    _el_190 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_190);
    _el_191 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_191);
    _el_192 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_192);
    import4.Text _text_193 = new import4.Text('Special');
    _el_192.append(_text_193);
    _el_194 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_194);
    _el_195 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_195);
    _el_196 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_196);
    import4.Text _text_197 = new import4.Text('button');
    _el_196.append(_text_197);
    _el_198 = createAndAppend(doc, 'a', parentRenderNode);
    _el_198.className = 'to-toc';
    createAttr(_el_198, 'href', '#toc');
    addShimC(_el_198);
    import4.Text _text_199 = new import4.Text('top');
    _el_198.append(_text_199);
    _el_200 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_200);
    _el_201 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_201, 'id', 'prop-vs-attrib');
    addShimE(_el_201);
    import4.Text _text_202 = new import4.Text('Property vs. Attribute (img examples)');
    _el_201.append(_text_202);
    _el_203 = createAndAppend(doc, 'img', parentRenderNode);
    createAttr(_el_203, 'src', 'assets/images/ng-logo.png');
    addShimE(_el_203);
    _el_204 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_204);
    _el_205 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_205);
    _el_206 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_206);
    _el_207 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_207);
    _el_208 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_208);
    _el_209 = createAndAppend(doc, 'a', parentRenderNode);
    _el_209.className = 'to-toc';
    createAttr(_el_209, 'href', '#toc');
    addShimC(_el_209);
    import4.Text _text_210 = new import4.Text('top');
    _el_209.append(_text_210);
    _el_211 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_211);
    _el_212 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_212, 'id', 'buttons');
    addShimE(_el_212);
    import4.Text _text_213 = new import4.Text('Buttons');
    _el_212.append(_text_213);
    _el_214 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_214);
    import4.Text _text_215 = new import4.Text('Enabled (but does nothing)');
    _el_214.append(_text_215);
    _el_216 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_216, 'disabled', '');
    addShimC(_el_216);
    import4.Text _text_217 = new import4.Text('Disabled');
    _el_216.append(_text_217);
    _el_218 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_218, 'disabled', 'false');
    addShimC(_el_218);
    import4.Text _text_219 = new import4.Text('Still disabled');
    _el_218.append(_text_219);
    _el_220 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_220);
    _el_221 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_221);
    _el_222 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_222, 'disabled', '');
    addShimC(_el_222);
    import4.Text _text_223 = new import4.Text('disabled by attribute');
    _el_222.append(_text_223);
    _el_224 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_224);
    import4.Text _text_225 = new import4.Text('disabled by property binding');
    _el_224.append(_text_225);
    _el_226 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_226);
    _el_227 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_227);
    _el_228 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_228);
    import4.Text _text_229 = new import4.Text('Disabled Cancel');
    _el_228.append(_text_229);
    _el_230 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_230);
    import4.Text _text_231 = new import4.Text('Enabled Save');
    _el_230.append(_text_231);
    _el_232 = createAndAppend(doc, 'a', parentRenderNode);
    _el_232.className = 'to-toc';
    createAttr(_el_232, 'href', '#toc');
    addShimC(_el_232);
    import4.Text _text_233 = new import4.Text('top');
    _el_232.append(_text_233);
    _el_234 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_234);
    _el_235 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_235, 'id', 'property-binding');
    addShimE(_el_235);
    import4.Text _text_236 = new import4.Text('Property Binding');
    _el_235.append(_text_236);
    _el_237 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_237);
    _el_238 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_238);
    import4.Text _text_239 = new import4.Text('Cancel is disabled');
    _el_238.append(_text_239);
    _el_240 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_240);
    _NgClass_240_4 = new import10.NgClass(_el_240);
    import4.Text _text_241 = new import4.Text('[ngClass] binding to the classes property');
    _el_240.append(_text_241);
    _compView_242 = new import8.ViewHeroDetailComponent0(this, 242);
    _el_242 = _compView_242.rootEl;
    parentRenderNode.append(_el_242);
    addShimC(_el_242);
    _HeroDetailComponent_242_4 = new import9.HeroDetailComponent();
    _compView_242.create(_HeroDetailComponent_242_4, []);
    _el_243 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_243);
    _compView_244 = new import8.ViewHeroDetailComponent0(this, 244);
    _el_244 = _compView_244.rootEl;
    parentRenderNode.append(_el_244);
    createAttr(_el_244, 'prefix', 'You are my');
    addShimC(_el_244);
    _HeroDetailComponent_244_4 = new import9.HeroDetailComponent();
    _compView_244.create(_HeroDetailComponent_244_4, []);
    _el_245 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_245);
    _el_246 = createAndAppend(doc, 'img', _el_245);
    addShimE(_el_246);
    import4.Text _text_247 = new import4.Text('is the');
    _el_245.append(_text_247);
    _el_248 = createAndAppend(doc, 'i', _el_245);
    addShimE(_el_248);
    import4.Text _text_249 = new import4.Text('interpolated');
    _el_248.append(_text_249);
    import4.Text _text_250 = new import4.Text('image.');
    _el_245.append(_text_250);
    _el_251 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_251);
    _el_252 = createAndAppend(doc, 'img', _el_251);
    addShimE(_el_252);
    import4.Text _text_253 = new import4.Text('is the');
    _el_251.append(_text_253);
    _el_254 = createAndAppend(doc, 'i', _el_251);
    addShimE(_el_254);
    import4.Text _text_255 = new import4.Text('property bound');
    _el_254.append(_text_255);
    import4.Text _text_256 = new import4.Text('image.');
    _el_251.append(_text_256);
    _el_257 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_257);
    _el_258 = createSpanAndAppend(doc, _el_257);
    addShimE(_el_258);
    _text_259 = new import4.Text('');
    _el_258.append(_text_259);
    _el_260 = createAndAppend(doc, 'i', _el_258);
    addShimE(_el_260);
    import4.Text _text_261 = new import4.Text('interpolated');
    _el_260.append(_text_261);
    import4.Text _text_262 = new import4.Text('title.');
    _el_258.append(_text_262);
    _el_263 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_263);
    import4.Text _text_264 = new import4.Text('"');
    _el_263.append(_text_264);
    _el_265 = createSpanAndAppend(doc, _el_263);
    addShimE(_el_265);
    import4.Text _text_266 = new import4.Text('" is the');
    _el_263.append(_text_266);
    _el_267 = createAndAppend(doc, 'i', _el_263);
    addShimE(_el_267);
    import4.Text _text_268 = new import4.Text('property bound');
    _el_267.append(_text_268);
    import4.Text _text_269 = new import4.Text('title.');
    _el_263.append(_text_269);
    _el_270 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_270);
    _el_271 = createSpanAndAppend(doc, _el_270);
    addShimE(_el_271);
    _text_272 = new import4.Text('');
    _el_271.append(_text_272);
    _el_273 = createAndAppend(doc, 'i', _el_271);
    addShimE(_el_273);
    import4.Text _text_274 = new import4.Text('interpolated');
    _el_273.append(_text_274);
    import4.Text _text_275 = new import4.Text('evil title.');
    _el_271.append(_text_275);
    _el_276 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_276);
    import4.Text _text_277 = new import4.Text('"');
    _el_276.append(_text_277);
    _el_278 = createSpanAndAppend(doc, _el_276);
    addShimE(_el_278);
    import4.Text _text_279 = new import4.Text('" is the');
    _el_276.append(_text_279);
    _el_280 = createAndAppend(doc, 'i', _el_276);
    addShimE(_el_280);
    import4.Text _text_281 = new import4.Text('property bound');
    _el_280.append(_text_281);
    import4.Text _text_282 = new import4.Text('evil title.');
    _el_276.append(_text_282);
    _el_283 = createAndAppend(doc, 'a', parentRenderNode);
    _el_283.className = 'to-toc';
    createAttr(_el_283, 'href', '#toc');
    addShimC(_el_283);
    import4.Text _text_284 = new import4.Text('top');
    _el_283.append(_text_284);
    _el_285 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_285);
    _el_286 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_286, 'id', 'attribute-binding');
    addShimE(_el_286);
    import4.Text _text_287 = new import4.Text('Attribute Binding');
    _el_286.append(_text_287);
    _el_288 = createAndAppend(doc, 'table', parentRenderNode);
    createAttr(_el_288, 'border', '1');
    addShimC(_el_288);
    _el_289 = createAndAppend(doc, 'tbody', _el_288);
    addShimE(_el_289);
    _el_290 = createAndAppend(doc, 'tr', _el_289);
    addShimE(_el_290);
    _el_291 = createAndAppend(doc, 'td', _el_290);
    addShimE(_el_291);
    import4.Text _text_292 = new import4.Text('One-Two');
    _el_291.append(_text_292);
    _el_293 = createAndAppend(doc, 'tr', _el_289);
    addShimE(_el_293);
    _el_294 = createAndAppend(doc, 'td', _el_293);
    addShimE(_el_294);
    import4.Text _text_295 = new import4.Text('Five');
    _el_294.append(_text_295);
    _el_296 = createAndAppend(doc, 'td', _el_293);
    addShimE(_el_296);
    import4.Text _text_297 = new import4.Text('Six');
    _el_296.append(_text_297);
    _el_298 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_298);
    _el_299 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_299);
    _text_300 = new import4.Text('');
    _el_299.append(_text_300);
    _el_301 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_301);
    _el_302 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_302);
    _el_303 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_303);
    _el_304 = createAndAppend(doc, 'button', _el_303);
    addShimC(_el_304);
    import4.Text _text_305 = new import4.Text('Disabled');
    _el_304.append(_text_305);
    _el_306 = createAndAppend(doc, 'button', _el_303);
    addShimC(_el_306);
    import4.Text _text_307 = new import4.Text('Disabled as well');
    _el_306.append(_text_307);
    _el_308 = createAndAppend(doc, 'button', _el_303);
    createAttr(_el_308, 'disabled', '');
    addShimC(_el_308);
    import4.Text _text_309 = new import4.Text('Enabled (but inert)');
    _el_308.append(_text_309);
    _el_310 = createAndAppend(doc, 'a', parentRenderNode);
    _el_310.className = 'to-toc';
    createAttr(_el_310, 'href', '#toc');
    addShimC(_el_310);
    import4.Text _text_311 = new import4.Text('top');
    _el_310.append(_text_311);
    _el_312 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_312);
    _el_313 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_313, 'id', 'class-binding');
    addShimE(_el_313);
    import4.Text _text_314 = new import4.Text('Class Binding');
    _el_313.append(_text_314);
    _el_315 = createDivAndAppend(doc, parentRenderNode);
    _el_315.className = 'bad curly special';
    addShimC(_el_315);
    import4.Text _text_316 = new import4.Text('Bad curly special');
    _el_315.append(_text_316);
    _el_317 = createDivAndAppend(doc, parentRenderNode);
    _el_317.className = 'bad curly special';
    addShimC(_el_317);
    import4.Text _text_318 = new import4.Text('Bad curly');
    _el_317.append(_text_318);
    _el_319 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_319);
    import4.Text _text_320 = new import4.Text('The class binding is special');
    _el_319.append(_text_320);
    _el_321 = createDivAndAppend(doc, parentRenderNode);
    _el_321.className = 'special';
    addShimC(_el_321);
    import4.Text _text_322 = new import4.Text('This one is not so special');
    _el_321.append(_text_322);
    _el_323 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_323);
    import4.Text _text_324 = new import4.Text('This class binding is special too');
    _el_323.append(_text_324);
    _el_325 = createAndAppend(doc, 'a', parentRenderNode);
    _el_325.className = 'to-toc';
    createAttr(_el_325, 'href', '#toc');
    addShimC(_el_325);
    import4.Text _text_326 = new import4.Text('top');
    _el_325.append(_text_326);
    _el_327 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_327);
    _el_328 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_328, 'id', 'style-binding');
    addShimE(_el_328);
    import4.Text _text_329 = new import4.Text('Style Binding');
    _el_328.append(_text_329);
    _el_330 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_330);
    import4.Text _text_331 = new import4.Text('Red');
    _el_330.append(_text_331);
    _el_332 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_332);
    import4.Text _text_333 = new import4.Text('Save');
    _el_332.append(_text_333);
    _el_334 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_334);
    import4.Text _text_335 = new import4.Text('Big');
    _el_334.append(_text_335);
    _el_336 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_336);
    import4.Text _text_337 = new import4.Text('Small');
    _el_336.append(_text_337);
    _el_338 = createAndAppend(doc, 'a', parentRenderNode);
    _el_338.className = 'to-toc';
    createAttr(_el_338, 'href', '#toc');
    addShimC(_el_338);
    import4.Text _text_339 = new import4.Text('top');
    _el_338.append(_text_339);
    _el_340 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_340);
    _el_341 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_341, 'id', 'event-binding');
    addShimE(_el_341);
    import4.Text _text_342 = new import4.Text('Event Binding');
    _el_341.append(_text_342);
    _el_343 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_343);
    import4.Text _text_344 = new import4.Text('Save');
    _el_343.append(_text_344);
    _el_345 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_345);
    import4.Text _text_346 = new import4.Text('On Save');
    _el_345.append(_text_346);
    _el_347 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_347);
    _el_348 = createDivAndAppend(doc, _el_347);
    createAttr(_el_348, 'clickable', '');
    addShimC(_el_348);
    _ClickDirective_348_4 = new import11.ClickDirective(_el_348);
    import4.Text _text_349 = new import4.Text('click with myClick');
    _el_348.append(_text_349);
    _text_350 = new import4.Text('');
    _el_347.append(_text_350);
    _compView_351 = new import8.ViewHeroDetailComponent0(this, 351);
    _el_351 = _compView_351.rootEl;
    parentRenderNode.append(_el_351);
    addShimC(_el_351);
    _HeroDetailComponent_351_4 = new import9.HeroDetailComponent();
    _compView_351.create(_HeroDetailComponent_351_4, []);
    _el_352 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_352);
    _compView_353 = new import8.ViewBigHeroDetailComponent0(this, 353);
    _el_353 = _compView_353.rootEl;
    parentRenderNode.append(_el_353);
    addShimC(_el_353);
    _BigHeroDetailComponent_353_4 = new import9.BigHeroDetailComponent();
    _compView_353.create(_BigHeroDetailComponent_353_4, []);
    _el_354 = createDivAndAppend(doc, parentRenderNode);
    _el_354.className = 'parent-div';
    createAttr(_el_354, 'clickable', '');
    addShimC(_el_354);
    import4.Text _text_355 = new import4.Text('Click me');
    _el_354.append(_text_355);
    _el_356 = createDivAndAppend(doc, _el_354);
    _el_356.className = 'child-div';
    addShimC(_el_356);
    import4.Text _text_357 = new import4.Text('Click me too!');
    _el_356.append(_text_357);
    _el_358 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_358, 'clickable', '');
    addShimC(_el_358);
    _el_359 = createAndAppend(doc, 'button', _el_358);
    addShimC(_el_359);
    import4.Text _text_360 = new import4.Text('Save, no propagation');
    _el_359.append(_text_360);
    _el_361 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_361, 'clickable', '');
    addShimC(_el_361);
    _el_362 = createAndAppend(doc, 'button', _el_361);
    addShimC(_el_362);
    import4.Text _text_363 = new import4.Text('Save w/ propagation');
    _el_362.append(_text_363);
    _el_364 = createAndAppend(doc, 'a', parentRenderNode);
    _el_364.className = 'to-toc';
    createAttr(_el_364, 'href', '#toc');
    addShimC(_el_364);
    import4.Text _text_365 = new import4.Text('top');
    _el_364.append(_text_365);
    _el_366 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_366);
    _el_367 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_367, 'id', 'two-way');
    addShimE(_el_367);
    import4.Text _text_368 = new import4.Text('Two-way Binding');
    _el_367.append(_text_368);
    _el_369 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_369, 'id', 'two-way-1');
    addShimC(_el_369);
    _compView_370 = new import14.ViewSizerComponent0(this, 370);
    _el_370 = _compView_370.rootEl;
    _el_369.append(_el_370);
    addShimC(_el_370);
    _SizerComponent_370_4 = new import15.SizerComponent();
    _compView_370.create(_SizerComponent_370_4, []);
    _el_371 = createDivAndAppend(doc, _el_369);
    addShimC(_el_371);
    import4.Text _text_372 = new import4.Text('Resizable Text');
    _el_371.append(_text_372);
    _el_373 = createAndAppend(doc, 'label', _el_369);
    addShimE(_el_373);
    import4.Text _text_374 = new import4.Text('FontSize (px):');
    _el_373.append(_text_374);
    _el_375 = createAndAppend(doc, 'input', _el_373);
    addShimC(_el_375);
    _DefaultValueAccessor_375_4 = new import12.DefaultValueAccessor(_el_375);
    _NgValueAccessor_375_5 = [_DefaultValueAccessor_375_4];
    _NgModel_375_6 = new import13.NgModel(null, _NgValueAccessor_375_5);
    _text_376 = new import4.Text('');
    _el_373.append(_text_376);
    _el_377 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_377);
    _el_378 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_378, 'id', 'two-way-2');
    addShimC(_el_378);
    _el_379 = createAndAppend(doc, 'h3', _el_378);
    addShimE(_el_379);
    import4.Text _text_380 = new import4.Text('De-sugared two-way binding');
    _el_379.append(_text_380);
    _compView_381 = new import14.ViewSizerComponent0(this, 381);
    _el_381 = _compView_381.rootEl;
    _el_378.append(_el_381);
    addShimC(_el_381);
    _SizerComponent_381_4 = new import15.SizerComponent();
    _compView_381.create(_SizerComponent_381_4, []);
    _el_382 = createAndAppend(doc, 'a', parentRenderNode);
    _el_382.className = 'to-toc';
    createAttr(_el_382, 'href', '#toc');
    addShimC(_el_382);
    import4.Text _text_383 = new import4.Text('top');
    _el_382.append(_text_383);
    _el_384 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_384);
    _el_385 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_385, 'id', 'ngModel');
    addShimE(_el_385);
    import4.Text _text_386 = new import4.Text('NgModel (two-way) Binding');
    _el_385.append(_text_386);
    _el_387 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_387);
    _text_388 = new import4.Text('');
    _el_387.append(_text_388);
    _el_389 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_389);
    import4.Text _text_390 = new import4.Text('without NgModel');
    parentRenderNode.append(_text_390);
    _el_391 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_391);
    _el_392 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_392);
    _DefaultValueAccessor_392_4 = new import12.DefaultValueAccessor(_el_392);
    _NgValueAccessor_392_5 = [_DefaultValueAccessor_392_4];
    _NgModel_392_6 = new import13.NgModel(null, _NgValueAccessor_392_5);
    import4.Text _text_393 = new import4.Text('[(ngModel)]');
    parentRenderNode.append(_text_393);
    _el_394 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_394);
    _el_395 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_395);
    _DefaultValueAccessor_395_4 = new import12.DefaultValueAccessor(_el_395);
    _NgValueAccessor_395_5 = [_DefaultValueAccessor_395_4];
    _NgModel_395_6 = new import13.NgModel(null, _NgValueAccessor_395_5);
    import4.Text _text_396 = new import4.Text('bindon-ngModel');
    parentRenderNode.append(_text_396);
    _el_397 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_397);
    _el_398 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_398);
    _DefaultValueAccessor_398_4 = new import12.DefaultValueAccessor(_el_398);
    _NgValueAccessor_398_5 = [_DefaultValueAccessor_398_4];
    _NgModel_398_6 = new import13.NgModel(null, _NgValueAccessor_398_5);
    import4.Text _text_399 = new import4.Text('(ngModelChange)="...name=\$event"');
    parentRenderNode.append(_text_399);
    _el_400 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_400);
    _el_401 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_401);
    _DefaultValueAccessor_401_4 = new import12.DefaultValueAccessor(_el_401);
    _NgValueAccessor_401_5 = [_DefaultValueAccessor_401_4];
    _NgModel_401_6 = new import13.NgModel(null, _NgValueAccessor_401_5);
    import4.Text _text_402 = new import4.Text('(ngModelChange)="setUppercaseName(\$event)"');
    parentRenderNode.append(_text_402);
    _el_403 = createAndAppend(doc, 'a', parentRenderNode);
    _el_403.className = 'to-toc';
    createAttr(_el_403, 'href', '#toc');
    addShimC(_el_403);
    import4.Text _text_404 = new import4.Text('top');
    _el_403.append(_text_404);
    _el_405 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_405);
    _el_406 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_406, 'id', 'ngClass');
    addShimE(_el_406);
    import4.Text _text_407 = new import4.Text('NgClass Binding');
    _el_406.append(_text_407);
    _el_408 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_408);
    _text_409 = new import4.Text('');
    _el_408.append(_text_409);
    _el_410 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_410);
    _NgClass_410_4 = new import10.NgClass(_el_410);
    import4.Text _text_411 = new import4.Text('This div is initially saveable, unchanged, and special');
    _el_410.append(_text_411);
    _el_412 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_412);
    _el_413 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_413);
    import4.Text _text_414 = new import4.Text('saveable');
    _el_413.append(_text_414);
    _el_415 = createAndAppend(doc, 'input', _el_413);
    createAttr(_el_415, 'type', 'checkbox');
    addShimC(_el_415);
    _CheckboxControlValueAccessor_415_4 = new import16.CheckboxControlValueAccessor(_el_415);
    _NgValueAccessor_415_5 = [_CheckboxControlValueAccessor_415_4];
    _NgModel_415_6 = new import13.NgModel(null, _NgValueAccessor_415_5);
    import4.Text _text_416 = new import4.Text('|');
    parentRenderNode.append(_text_416);
    _el_417 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_417);
    import4.Text _text_418 = new import4.Text('modified:');
    _el_417.append(_text_418);
    _el_419 = createAndAppend(doc, 'input', _el_417);
    createAttr(_el_419, 'type', 'checkbox');
    addShimC(_el_419);
    import4.Text _text_420 = new import4.Text('|');
    parentRenderNode.append(_text_420);
    _el_421 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_421);
    import4.Text _text_422 = new import4.Text('special:');
    _el_421.append(_text_422);
    _el_423 = createAndAppend(doc, 'input', _el_421);
    createAttr(_el_423, 'type', 'checkbox');
    addShimC(_el_423);
    _CheckboxControlValueAccessor_423_4 = new import16.CheckboxControlValueAccessor(_el_423);
    _NgValueAccessor_423_5 = [_CheckboxControlValueAccessor_423_4];
    _NgModel_423_6 = new import13.NgModel(null, _NgValueAccessor_423_5);
    _el_424 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_424);
    import4.Text _text_425 = new import4.Text('Refresh currentClasses');
    _el_424.append(_text_425);
    _el_426 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_426);
    _el_427 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_427);
    _el_428 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_428);
    _NgClass_428_4 = new import10.NgClass(_el_428);
    _text_429 = new import4.Text('');
    _el_428.append(_text_429);
    _el_430 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_430);
    _el_431 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_431);
    _el_432 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_432);
    _NgClass_432_4 = new import10.NgClass(_el_432);
    import4.Text _text_433 = new import4.Text('This div is special');
    _el_432.append(_text_433);
    _el_434 = createDivAndAppend(doc, parentRenderNode);
    _el_434.className = 'bad curly special';
    addShimC(_el_434);
    import4.Text _text_435 = new import4.Text('Bad curly special');
    _el_434.append(_text_435);
    _el_436 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_436);
    _NgClass_436_4 = new import10.NgClass(_el_436);
    import4.Text _text_437 = new import4.Text('Curly special');
    _el_436.append(_text_437);
    _el_438 = createAndAppend(doc, 'a', parentRenderNode);
    _el_438.className = 'to-toc';
    createAttr(_el_438, 'href', '#toc');
    addShimC(_el_438);
    import4.Text _text_439 = new import4.Text('top');
    _el_438.append(_text_439);
    _el_440 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_440);
    _el_441 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_441, 'id', 'ngStyle');
    addShimE(_el_441);
    import4.Text _text_442 = new import4.Text('NgStyle Binding');
    _el_441.append(_text_442);
    _el_443 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_443);
    import4.Text _text_444 = new import4.Text('This div is x-large or smaller.');
    _el_443.append(_text_444);
    _el_445 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_445);
    import4.Text _text_446 = new import4.Text('[ngStyle] binding to currentStyles - CSS property names');
    _el_445.append(_text_446);
    _el_447 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_447);
    _text_448 = new import4.Text('');
    _el_447.append(_text_448);
    _el_449 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_449);
    _NgStyle_449_4 = new import17.NgStyle(_el_449);
    import4.Text _text_450 = new import4.Text('This div is initially italic, normal weight, and extra large (24px).');
    _el_449.append(_text_450);
    _el_451 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_451);
    _el_452 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_452);
    import4.Text _text_453 = new import4.Text('italic:');
    _el_452.append(_text_453);
    _el_454 = createAndAppend(doc, 'input', _el_452);
    createAttr(_el_454, 'type', 'checkbox');
    addShimC(_el_454);
    _CheckboxControlValueAccessor_454_4 = new import16.CheckboxControlValueAccessor(_el_454);
    _NgValueAccessor_454_5 = [_CheckboxControlValueAccessor_454_4];
    _NgModel_454_6 = new import13.NgModel(null, _NgValueAccessor_454_5);
    import4.Text _text_455 = new import4.Text('|');
    parentRenderNode.append(_text_455);
    _el_456 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_456);
    import4.Text _text_457 = new import4.Text('normal:');
    _el_456.append(_text_457);
    _el_458 = createAndAppend(doc, 'input', _el_456);
    createAttr(_el_458, 'type', 'checkbox');
    addShimC(_el_458);
    _CheckboxControlValueAccessor_458_4 = new import16.CheckboxControlValueAccessor(_el_458);
    _NgValueAccessor_458_5 = [_CheckboxControlValueAccessor_458_4];
    _NgModel_458_6 = new import13.NgModel(null, _NgValueAccessor_458_5);
    import4.Text _text_459 = new import4.Text('|');
    parentRenderNode.append(_text_459);
    _el_460 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_460);
    import4.Text _text_461 = new import4.Text('xlarge:');
    _el_460.append(_text_461);
    _el_462 = createAndAppend(doc, 'input', _el_460);
    createAttr(_el_462, 'type', 'checkbox');
    addShimC(_el_462);
    _CheckboxControlValueAccessor_462_4 = new import16.CheckboxControlValueAccessor(_el_462);
    _NgValueAccessor_462_5 = [_CheckboxControlValueAccessor_462_4];
    _NgModel_462_6 = new import13.NgModel(null, _NgValueAccessor_462_5);
    _el_463 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_463);
    import4.Text _text_464 = new import4.Text('Refresh currentStyles');
    _el_463.append(_text_464);
    _el_465 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_465);
    _el_466 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_466);
    _el_467 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_467);
    _NgStyle_467_4 = new import17.NgStyle(_el_467);
    _text_468 = new import4.Text('');
    _el_467.append(_text_468);
    _el_469 = createAndAppend(doc, 'a', parentRenderNode);
    _el_469.className = 'to-toc';
    createAttr(_el_469, 'href', '#toc');
    addShimC(_el_469);
    import4.Text _text_470 = new import4.Text('top');
    _el_469.append(_text_470);
    _el_471 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_471);
    _el_472 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_472, 'id', 'ngIf');
    addShimE(_el_472);
    import4.Text _text_473 = new import4.Text('NgIf Binding');
    _el_472.append(_text_473);
    var _anchor_474 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_474);
    _appEl_474 = new ViewContainer(474, null, this, _anchor_474);
    TemplateRef _TemplateRef_474_6 = new TemplateRef(_appEl_474, viewFactory_AppComponent4);
    _NgIf_474_7 = new NgIf(_appEl_474, _TemplateRef_474_6);
    var _anchor_475 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_475);
    _appEl_475 = new ViewContainer(475, null, this, _anchor_475);
    TemplateRef _TemplateRef_475_6 = new TemplateRef(_appEl_475, viewFactory_AppComponent5);
    _NgIf_475_7 = new NgIf(_appEl_475, _TemplateRef_475_6);
    var _anchor_476 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_476);
    _appEl_476 = new ViewContainer(476, null, this, _anchor_476);
    TemplateRef _TemplateRef_476_6 = new TemplateRef(_appEl_476, viewFactory_AppComponent6);
    _NgIf_476_7 = new NgIf(_appEl_476, _TemplateRef_476_6);
    var _anchor_477 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_477);
    _appEl_477 = new ViewContainer(477, null, this, _anchor_477);
    TemplateRef _TemplateRef_477_6 = new TemplateRef(_appEl_477, viewFactory_AppComponent7);
    _NgIf_477_7 = new NgIf(_appEl_477, _TemplateRef_477_6);
    _el_478 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_478);
    import4.Text _text_479 = new import4.Text('Hero Detail removed from DOM (via template) because isActive is false');
    _el_478.append(_text_479);
    var _anchor_480 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_480);
    _appEl_480 = new ViewContainer(480, null, this, _anchor_480);
    TemplateRef _TemplateRef_480_6 = new TemplateRef(_appEl_480, viewFactory_AppComponent8);
    _NgIf_480_7 = new NgIf(_appEl_480, _TemplateRef_480_6);
    _el_481 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_481);
    import4.Text _text_482 = new import4.Text('Show with class');
    _el_481.append(_text_482);
    _el_483 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_483);
    import4.Text _text_484 = new import4.Text('Hide with class');
    _el_483.append(_text_484);
    _compView_485 = new import8.ViewHeroDetailComponent0(this, 485);
    _el_485 = _compView_485.rootEl;
    parentRenderNode.append(_el_485);
    addShimC(_el_485);
    _HeroDetailComponent_485_4 = new import9.HeroDetailComponent();
    _compView_485.create(_HeroDetailComponent_485_4, []);
    _el_486 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_486);
    import4.Text _text_487 = new import4.Text('Show with style');
    _el_486.append(_text_487);
    _el_488 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_488);
    import4.Text _text_489 = new import4.Text('Hide with style');
    _el_488.append(_text_489);
    _el_490 = createAndAppend(doc, 'a', parentRenderNode);
    _el_490.className = 'to-toc';
    createAttr(_el_490, 'href', '#toc');
    addShimC(_el_490);
    import4.Text _text_491 = new import4.Text('top');
    _el_490.append(_text_491);
    _el_492 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_492);
    _el_493 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_493, 'id', 'ngFor');
    addShimE(_el_493);
    import4.Text _text_494 = new import4.Text('NgFor Binding');
    _el_493.append(_text_494);
    _el_495 = createDivAndAppend(doc, parentRenderNode);
    _el_495.className = 'box';
    addShimC(_el_495);
    var _anchor_496 = ngAnchor.clone(false);
    _el_495.append(_anchor_496);
    _appEl_496 = new ViewContainer(496, 495, this, _anchor_496);
    TemplateRef _TemplateRef_496_6 = new TemplateRef(_appEl_496, viewFactory_AppComponent9);
    _NgFor_496_7 = new import6.NgFor(_appEl_496, _TemplateRef_496_6);
    _el_497 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_497);
    _el_498 = createDivAndAppend(doc, parentRenderNode);
    _el_498.className = 'box';
    addShimC(_el_498);
    var _anchor_499 = ngAnchor.clone(false);
    _el_498.append(_anchor_499);
    _appEl_499 = new ViewContainer(499, 498, this, _anchor_499);
    TemplateRef _TemplateRef_499_6 = new TemplateRef(_appEl_499, viewFactory_AppComponent10);
    _NgFor_499_7 = new import6.NgFor(_appEl_499, _TemplateRef_499_6);
    _el_500 = createAndAppend(doc, 'a', parentRenderNode);
    _el_500.className = 'to-toc';
    createAttr(_el_500, 'href', '#toc');
    addShimC(_el_500);
    import4.Text _text_501 = new import4.Text('top');
    _el_500.append(_text_501);
    _el_502 = createAndAppend(doc, 'h4', parentRenderNode);
    createAttr(_el_502, 'id', 'ngFor-index');
    addShimE(_el_502);
    import4.Text _text_503 = new import4.Text('*ngFor with index');
    _el_502.append(_text_503);
    _el_504 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_504);
    import4.Text _text_505 = new import4.Text('with');
    _el_504.append(_text_505);
    _el_506 = createAndAppend(doc, 'i', _el_504);
    addShimE(_el_506);
    import4.Text _text_507 = new import4.Text('semi-colon');
    _el_506.append(_text_507);
    import4.Text _text_508 = new import4.Text('separator');
    _el_504.append(_text_508);
    _el_509 = createDivAndAppend(doc, parentRenderNode);
    _el_509.className = 'box';
    addShimC(_el_509);
    var _anchor_510 = ngAnchor.clone(false);
    _el_509.append(_anchor_510);
    _appEl_510 = new ViewContainer(510, 509, this, _anchor_510);
    TemplateRef _TemplateRef_510_6 = new TemplateRef(_appEl_510, viewFactory_AppComponent11);
    _NgFor_510_7 = new import6.NgFor(_appEl_510, _TemplateRef_510_6);
    _el_511 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_511);
    import4.Text _text_512 = new import4.Text('with');
    _el_511.append(_text_512);
    _el_513 = createAndAppend(doc, 'i', _el_511);
    addShimE(_el_513);
    import4.Text _text_514 = new import4.Text('comma');
    _el_513.append(_text_514);
    import4.Text _text_515 = new import4.Text('separator');
    _el_511.append(_text_515);
    _el_516 = createDivAndAppend(doc, parentRenderNode);
    _el_516.className = 'box';
    addShimC(_el_516);
    var _anchor_517 = ngAnchor.clone(false);
    _el_516.append(_anchor_517);
    _appEl_517 = new ViewContainer(517, 516, this, _anchor_517);
    TemplateRef _TemplateRef_517_6 = new TemplateRef(_appEl_517, viewFactory_AppComponent12);
    _NgFor_517_7 = new import6.NgFor(_appEl_517, _TemplateRef_517_6);
    _el_518 = createAndAppend(doc, 'a', parentRenderNode);
    _el_518.className = 'to-toc';
    createAttr(_el_518, 'href', '#toc');
    addShimC(_el_518);
    import4.Text _text_519 = new import4.Text('top');
    _el_518.append(_text_519);
    _el_520 = createAndAppend(doc, 'h4', parentRenderNode);
    createAttr(_el_520, 'id', 'ngFor-trackBy');
    addShimE(_el_520);
    import4.Text _text_521 = new import4.Text('*ngFor trackBy');
    _el_520.append(_text_521);
    _el_522 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_522);
    import4.Text _text_523 = new import4.Text('Reset heroes');
    _el_522.append(_text_523);
    _el_524 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_524);
    import4.Text _text_525 = new import4.Text('Change ids');
    _el_524.append(_text_525);
    _el_526 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_526);
    import4.Text _text_527 = new import4.Text('Clear counts');
    _el_526.append(_text_527);
    _el_528 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_528);
    _el_529 = createAndAppend(doc, 'i', _el_528);
    addShimE(_el_529);
    import4.Text _text_530 = new import4.Text('without');
    _el_529.append(_text_530);
    import4.Text _text_531 = new import4.Text('trackBy');
    _el_528.append(_text_531);
    _el_532 = createDivAndAppend(doc, parentRenderNode);
    _el_532.className = 'box';
    addShimC(_el_532);
    var _anchor_533 = ngAnchor.clone(false);
    _el_532.append(_anchor_533);
    _appEl_533 = new ViewContainer(533, 532, this, _anchor_533);
    TemplateRef _TemplateRef_533_6 = new TemplateRef(_appEl_533, viewFactory_AppComponent13);
    _NgFor_533_7 = new import6.NgFor(_appEl_533, _TemplateRef_533_6);
    var _anchor_534 = ngAnchor.clone(false);
    _el_532.append(_anchor_534);
    _appEl_534 = new ViewContainer(534, 532, this, _anchor_534);
    TemplateRef _TemplateRef_534_6 = new TemplateRef(_appEl_534, viewFactory_AppComponent14);
    _NgIf_534_7 = new NgIf(_appEl_534, _TemplateRef_534_6);
    _el_535 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_535);
    import4.Text _text_536 = new import4.Text('with trackBy');
    _el_535.append(_text_536);
    _el_537 = createDivAndAppend(doc, parentRenderNode);
    _el_537.className = 'box';
    addShimC(_el_537);
    var _anchor_538 = ngAnchor.clone(false);
    _el_537.append(_anchor_538);
    _appEl_538 = new ViewContainer(538, 537, this, _anchor_538);
    TemplateRef _TemplateRef_538_6 = new TemplateRef(_appEl_538, viewFactory_AppComponent15);
    _NgFor_538_7 = new import6.NgFor(_appEl_538, _TemplateRef_538_6);
    var _anchor_539 = ngAnchor.clone(false);
    _el_537.append(_anchor_539);
    _appEl_539 = new ViewContainer(539, 537, this, _anchor_539);
    TemplateRef _TemplateRef_539_6 = new TemplateRef(_appEl_539, viewFactory_AppComponent16);
    _NgIf_539_7 = new NgIf(_appEl_539, _TemplateRef_539_6);
    _el_540 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_540);
    _el_541 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_541);
    _el_542 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_542);
    _el_543 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_543);
    import4.Text _text_544 = new import4.Text('with trackBy and');
    _el_543.append(_text_544);
    _el_545 = createAndAppend(doc, 'i', _el_543);
    addShimE(_el_545);
    import4.Text _text_546 = new import4.Text('semi-colon');
    _el_545.append(_text_546);
    import4.Text _text_547 = new import4.Text('separator');
    _el_543.append(_text_547);
    _el_548 = createDivAndAppend(doc, parentRenderNode);
    _el_548.className = 'box';
    addShimC(_el_548);
    var _anchor_549 = ngAnchor.clone(false);
    _el_548.append(_anchor_549);
    _appEl_549 = new ViewContainer(549, 548, this, _anchor_549);
    TemplateRef _TemplateRef_549_6 = new TemplateRef(_appEl_549, viewFactory_AppComponent17);
    _NgFor_549_7 = new import6.NgFor(_appEl_549, _TemplateRef_549_6);
    _el_550 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_550);
    import4.Text _text_551 = new import4.Text('with trackBy and');
    _el_550.append(_text_551);
    _el_552 = createAndAppend(doc, 'i', _el_550);
    addShimE(_el_552);
    import4.Text _text_553 = new import4.Text('comma');
    _el_552.append(_text_553);
    import4.Text _text_554 = new import4.Text('separator');
    _el_550.append(_text_554);
    _el_555 = createDivAndAppend(doc, parentRenderNode);
    _el_555.className = 'box';
    addShimC(_el_555);
    var _anchor_556 = ngAnchor.clone(false);
    _el_555.append(_anchor_556);
    _appEl_556 = new ViewContainer(556, 555, this, _anchor_556);
    TemplateRef _TemplateRef_556_6 = new TemplateRef(_appEl_556, viewFactory_AppComponent18);
    _NgFor_556_7 = new import6.NgFor(_appEl_556, _TemplateRef_556_6);
    _el_557 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_557);
    import4.Text _text_558 = new import4.Text('with trackBy and');
    _el_557.append(_text_558);
    _el_559 = createAndAppend(doc, 'i', _el_557);
    addShimE(_el_559);
    import4.Text _text_560 = new import4.Text('space');
    _el_559.append(_text_560);
    import4.Text _text_561 = new import4.Text('separator');
    _el_557.append(_text_561);
    _el_562 = createDivAndAppend(doc, parentRenderNode);
    _el_562.className = 'box';
    addShimC(_el_562);
    var _anchor_563 = ngAnchor.clone(false);
    _el_562.append(_anchor_563);
    _appEl_563 = new ViewContainer(563, 562, this, _anchor_563);
    TemplateRef _TemplateRef_563_6 = new TemplateRef(_appEl_563, viewFactory_AppComponent19);
    _NgFor_563_7 = new import6.NgFor(_appEl_563, _TemplateRef_563_6);
    _el_564 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_564);
    import4.Text _text_565 = new import4.Text('with');
    _el_564.append(_text_565);
    _el_566 = createAndAppend(doc, 'i', _el_564);
    addShimE(_el_566);
    import4.Text _text_567 = new import4.Text('generic');
    _el_566.append(_text_567);
    import4.Text _text_568 = new import4.Text('trackById function');
    _el_564.append(_text_568);
    _el_569 = createDivAndAppend(doc, parentRenderNode);
    _el_569.className = 'box';
    addShimC(_el_569);
    var _anchor_570 = ngAnchor.clone(false);
    _el_569.append(_anchor_570);
    _appEl_570 = new ViewContainer(570, 569, this, _anchor_570);
    TemplateRef _TemplateRef_570_6 = new TemplateRef(_appEl_570, viewFactory_AppComponent20);
    _NgFor_570_7 = new import6.NgFor(_appEl_570, _TemplateRef_570_6);
    _el_571 = createAndAppend(doc, 'a', parentRenderNode);
    _el_571.className = 'to-toc';
    createAttr(_el_571, 'href', '#toc');
    addShimC(_el_571);
    import4.Text _text_572 = new import4.Text('top');
    _el_571.append(_text_572);
    _el_573 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_573);
    _el_574 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_574, 'id', 'ngSwitch');
    addShimE(_el_574);
    import4.Text _text_575 = new import4.Text('NgSwitch Binding');
    _el_574.append(_text_575);
    _el_576 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_576);
    import4.Text _text_577 = new import4.Text('Pick your favorite hero');
    _el_576.append(_text_577);
    _compView_578 = new import19.ViewMaterialRadioGroupComponent0(this, 578);
    _el_578 = _compView_578.rootEl;
    parentRenderNode.append(_el_578);
    addShimC(_el_578);
    _NgModel_578_4 = new import13.NgModel(null, null);
    _NgControl_578_5 = _NgModel_578_4;
    _MaterialRadioGroupComponent_578_6 = new import20.MaterialRadioGroupComponent(parentView.injectorGet(import36.NgZone, viewData.parentIndex), _NgControl_578_5);
    var _anchor_579 = ngAnchor.clone(false);
    _appEl_579 = new ViewContainer(579, 578, this, _anchor_579);
    TemplateRef _TemplateRef_579_6 = new TemplateRef(_appEl_579, viewFactory_AppComponent21);
    _NgFor_579_7 = new import6.NgFor(_appEl_579, _TemplateRef_579_6);
    _compView_578.create(_MaterialRadioGroupComponent_578_6, [
      [_appEl_579]
    ]);
    _el_580 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_580);
    _text_581 = new import4.Text('');
    _el_580.append(_text_581);
    _el_582 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_582);
    _NgSwitch_582_4 = new import21.NgSwitch();
    var _anchor_583 = ngAnchor.clone(false);
    _el_582.append(_anchor_583);
    _appEl_583 = new ViewContainer(583, 582, this, _anchor_583);
    TemplateRef _TemplateRef_583_6 = new TemplateRef(_appEl_583, viewFactory_AppComponent22);
    _NgSwitchWhen_583_7 = new import21.NgSwitchWhen(_appEl_583, _TemplateRef_583_6, _NgSwitch_582_4);
    var _anchor_584 = ngAnchor.clone(false);
    _el_582.append(_anchor_584);
    _appEl_584 = new ViewContainer(584, 582, this, _anchor_584);
    TemplateRef _TemplateRef_584_6 = new TemplateRef(_appEl_584, viewFactory_AppComponent23);
    _NgSwitchWhen_584_7 = new import21.NgSwitchWhen(_appEl_584, _TemplateRef_584_6, _NgSwitch_582_4);
    var _anchor_585 = ngAnchor.clone(false);
    _el_582.append(_anchor_585);
    _appEl_585 = new ViewContainer(585, 582, this, _anchor_585);
    TemplateRef _TemplateRef_585_6 = new TemplateRef(_appEl_585, viewFactory_AppComponent24);
    _NgSwitchWhen_585_7 = new import21.NgSwitchWhen(_appEl_585, _TemplateRef_585_6, _NgSwitch_582_4);
    var _anchor_586 = ngAnchor.clone(false);
    _el_582.append(_anchor_586);
    _appEl_586 = new ViewContainer(586, 582, this, _anchor_586);
    TemplateRef _TemplateRef_586_6 = new TemplateRef(_appEl_586, viewFactory_AppComponent25);
    _NgSwitchWhen_586_7 = new import21.NgSwitchWhen(_appEl_586, _TemplateRef_586_6, _NgSwitch_582_4);
    var _anchor_587 = ngAnchor.clone(false);
    _el_582.append(_anchor_587);
    _appEl_587 = new ViewContainer(587, 582, this, _anchor_587);
    TemplateRef _TemplateRef_587_6 = new TemplateRef(_appEl_587, viewFactory_AppComponent26);
    _NgSwitchDefault_587_7 = new import21.NgSwitchDefault(_appEl_587, _TemplateRef_587_6, _NgSwitch_582_4);
    _el_588 = createAndAppend(doc, 'a', parentRenderNode);
    _el_588.className = 'to-toc';
    createAttr(_el_588, 'href', '#toc');
    addShimC(_el_588);
    import4.Text _text_589 = new import4.Text('top');
    _el_588.append(_text_589);
    _el_590 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_590);
    _el_591 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_591, 'id', 'ref-vars');
    addShimE(_el_591);
    import4.Text _text_592 = new import4.Text('Template reference variables');
    _el_591.append(_text_592);
    _el_593 = createAndAppend(doc, 'input', parentRenderNode);
    createAttr(_el_593, 'placeholder', 'phone number');
    addShimC(_el_593);
    _el_594 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_594);
    import4.Text _text_595 = new import4.Text('Call');
    _el_594.append(_text_595);
    _el_596 = createAndAppend(doc, 'input', parentRenderNode);
    createAttr(_el_596, 'placeholder', 'fax number');
    addShimC(_el_596);
    _el_597 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_597);
    import4.Text _text_598 = new import4.Text('Fax');
    _el_597.append(_text_598);
    _el_599 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_599, 'disabled', '');
    addShimC(_el_599);
    _el_600 = createAndAppend(doc, 'h4', parentRenderNode);
    addShimE(_el_600);
    import4.Text _text_601 = new import4.Text('Example Form');
    _el_600.append(_text_601);
    _compView_602 = new import22.ViewHeroFormComponent0(this, 602);
    _el_602 = _compView_602.rootEl;
    parentRenderNode.append(_el_602);
    addShimC(_el_602);
    _HeroFormComponent_602_4 = new import23.HeroFormComponent();
    _compView_602.create(_HeroFormComponent_602_4, []);
    _el_603 = createAndAppend(doc, 'a', parentRenderNode);
    _el_603.className = 'to-toc';
    createAttr(_el_603, 'href', '#toc');
    addShimC(_el_603);
    import4.Text _text_604 = new import4.Text('top');
    _el_603.append(_text_604);
    _el_605 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_605);
    _el_606 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_606, 'id', 'inputs-and-outputs');
    addShimE(_el_606);
    import4.Text _text_607 = new import4.Text('Inputs and Outputs');
    _el_606.append(_text_607);
    _el_608 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_608);
    _el_609 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_609);
    import4.Text _text_610 = new import4.Text('Save');
    _el_609.append(_text_610);
    _compView_611 = new import8.ViewHeroDetailComponent0(this, 611);
    _el_611 = _compView_611.rootEl;
    parentRenderNode.append(_el_611);
    addShimC(_el_611);
    _HeroDetailComponent_611_4 = new import9.HeroDetailComponent();
    _compView_611.create(_HeroDetailComponent_611_4, []);
    _el_612 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_612, 'clickable', '');
    addShimC(_el_612);
    _ClickDirective_612_4 = new import11.ClickDirective(_el_612);
    import4.Text _text_613 = new import4.Text('myClick2');
    _el_612.append(_text_613);
    _text_614 = new import4.Text('');
    parentRenderNode.append(_text_614);
    _el_615 = createAndAppend(doc, 'a', parentRenderNode);
    _el_615.className = 'to-toc';
    createAttr(_el_615, 'href', '#toc');
    addShimC(_el_615);
    import4.Text _text_616 = new import4.Text('top');
    _el_615.append(_text_616);
    _el_617 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_617);
    _el_618 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_618, 'id', 'pipes');
    addShimE(_el_618);
    import4.Text _text_619 = new import4.Text('Pipes');
    _el_618.append(_text_619);
    _el_620 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_620);
    _text_621 = new import4.Text('');
    _el_620.append(_text_621);
    _el_622 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_622);
    _text_623 = new import4.Text('');
    _el_622.append(_text_623);
    _el_624 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_624);
    _text_625 = new import4.Text('');
    _el_624.append(_text_625);
    _el_626 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_626);
    _text_627 = new import4.Text('');
    _el_626.append(_text_627);
    _el_628 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_628);
    _text_629 = new import4.Text('');
    _el_628.append(_text_629);
    _el_630 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_630);
    _el_631 = createAndAppend(doc, 'label', _el_630);
    addShimE(_el_631);
    import4.Text _text_632 = new import4.Text('Price:');
    _el_631.append(_text_632);
    _text_633 = new import4.Text('');
    _el_630.append(_text_633);
    _el_634 = createAndAppend(doc, 'a', parentRenderNode);
    _el_634.className = 'to-toc';
    createAttr(_el_634, 'href', '#toc');
    addShimC(_el_634);
    import4.Text _text_635 = new import4.Text('top');
    _el_634.append(_text_635);
    _el_636 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_636);
    _el_637 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_637, 'id', 'safe-navigation-operator');
    addShimE(_el_637);
    import4.Text _text_638 = new import4.Text('Safe navigation operator');
    _el_637.append(_text_638);
    _el_639 = createAndAppend(doc, 'i', _el_637);
    addShimE(_el_639);
    import4.Text _text_640 = new import4.Text('?.');
    _el_639.append(_text_640);
    _el_641 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_641);
    _text_642 = new import4.Text('');
    _el_641.append(_text_642);
    _el_643 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_643);
    _text_644 = new import4.Text('');
    _el_643.append(_text_644);
    _el_645 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_645);
    _text_646 = new import4.Text('');
    _el_645.append(_text_646);
    var _anchor_647 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_647);
    _appEl_647 = new ViewContainer(647, null, this, _anchor_647);
    TemplateRef _TemplateRef_647_6 = new TemplateRef(_appEl_647, viewFactory_AppComponent27);
    _NgIf_647_7 = new NgIf(_appEl_647, _TemplateRef_647_6);
    _el_648 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_648);
    _text_649 = new import4.Text('');
    _el_648.append(_text_649);
    _el_650 = createAndAppend(doc, 'a', parentRenderNode);
    _el_650.className = 'to-toc';
    createAttr(_el_650, 'href', '#toc');
    addShimC(_el_650);
    import4.Text _text_651 = new import4.Text('top');
    _el_650.append(_text_651);
    _el_652 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_652);
    _el_653 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_653, 'id', 'enums');
    addShimE(_el_653);
    import4.Text _text_654 = new import4.Text('Enums in binding');
    _el_653.append(_text_654);
    _el_655 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_655);
    _text_656 = new import4.Text('');
    _el_655.append(_text_656);
    _el_657 = createAndAppend(doc, 'br', _el_655);
    addShimE(_el_657);
    _text_658 = new import4.Text('');
    _el_655.append(_text_658);
    _el_659 = createAndAppend(doc, 'br', _el_655);
    addShimE(_el_659);
    _el_660 = createAndAppend(doc, 'button', _el_655);
    addShimC(_el_660);
    import4.Text _text_661 = new import4.Text('Enum Toggle');
    _el_660.append(_text_661);
    _el_662 = createAndAppend(doc, 'a', parentRenderNode);
    _el_662.className = 'to-toc';
    createAttr(_el_662, 'href', '#toc');
    addShimC(_el_662);
    import4.Text _text_663 = new import4.Text('top');
    _el_662.append(_text_663);
    _el_117.addEventListener('keyup', eventHandler1(_handle_keyup_117_0));
    _el_129.addEventListener('click', eventHandler0(ctx.deleteHero));
    _el_134.addEventListener('click', eventHandler1(ctx.onSave));
    import33.appViewUtils.eventManager.addEventListener(_el_143, 'submit', eventHandler1(_NgForm_143_4.onSubmit));
    final subscription_0 = _NgForm_143_4.ngSubmit.listen(eventHandler1(_handle_ngSubmit_143_0));
    _map_0 = import33.pureProxy1((p0) {
      return {'special': p0};
    });
    _el_174.addEventListener('click', eventHandler0(ctx.onSave));
    final subscription_1 = _HeroDetailComponent_176_4.deleteRequest.listen(eventHandler0(ctx.deleteHero));
    final subscription_2 = _ClickDirective_177_4.clicks.listen(eventHandler1(_handle_myClick_177_0));
    _el_184.addEventListener('input', eventHandler1(_handle_input_184_1));
    _el_184.addEventListener('blur', eventHandler0(_DefaultValueAccessor_184_4.touchHandler));
    final subscription_3 = _NgModel_184_6.update.listen(eventHandler1(_handle_ngModelChange_184_0));
    _el_228.addEventListener('click', eventHandler1(ctx.onSave));
    _el_230.addEventListener('click', eventHandler1(ctx.onSave));
    _el_343.addEventListener('click', eventHandler0(ctx.onSave));
    _el_345.addEventListener('click', eventHandler0(ctx.onSave));
    final subscription_4 = _ClickDirective_348_4.clicks.listen(eventHandler1(_handle_myClick_348_0));
    final subscription_5 = _HeroDetailComponent_351_4.deleteRequest.listen(eventHandler1(ctx.deleteHero));
    final subscription_6 = _BigHeroDetailComponent_353_4.deleteRequest.listen(eventHandler1(ctx.deleteHero));
    _el_354.addEventListener('click', eventHandler1(ctx.onClickMe));
    _el_358.addEventListener('click', eventHandler0(ctx.onSave));
    _el_359.addEventListener('click', eventHandler1(ctx.onSave));
    _el_361.addEventListener('click', eventHandler0(ctx.onSave));
    _el_362.addEventListener('click', eventHandler0(ctx.onSave));
    final subscription_7 = _SizerComponent_370_4.sizeChange.listen(eventHandler1(_handle_sizeChange_370_0));
    _el_375.addEventListener('input', eventHandler1(_handle_input_375_1));
    _el_375.addEventListener('blur', eventHandler0(_DefaultValueAccessor_375_4.touchHandler));
    final subscription_8 = _NgModel_375_6.update.listen(eventHandler1(_handle_ngModelChange_375_0));
    final subscription_9 = _SizerComponent_381_4.sizeChange.listen(eventHandler1(_handle_sizeChange_381_0));
    _el_389.addEventListener('input', eventHandler1(_handle_input_389_0));
    _el_392.addEventListener('input', eventHandler1(_handle_input_392_1));
    _el_392.addEventListener('blur', eventHandler0(_DefaultValueAccessor_392_4.touchHandler));
    final subscription_10 = _NgModel_392_6.update.listen(eventHandler1(_handle_ngModelChange_392_0));
    _el_395.addEventListener('input', eventHandler1(_handle_input_395_1));
    _el_395.addEventListener('blur', eventHandler0(_DefaultValueAccessor_395_4.touchHandler));
    final subscription_11 = _NgModel_395_6.update.listen(eventHandler1(_handle_ngModelChange_395_0));
    _el_398.addEventListener('input', eventHandler1(_handle_input_398_1));
    _el_398.addEventListener('blur', eventHandler0(_DefaultValueAccessor_398_4.touchHandler));
    final subscription_12 = _NgModel_398_6.update.listen(eventHandler1(_handle_ngModelChange_398_0));
    _el_401.addEventListener('input', eventHandler1(_handle_input_401_1));
    _el_401.addEventListener('blur', eventHandler0(_DefaultValueAccessor_401_4.touchHandler));
    final subscription_13 = _NgModel_401_6.update.listen(eventHandler1(ctx.setUppercaseName));
    _el_415.addEventListener('change', eventHandler1(_handle_change_415_1));
    _el_415.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_415_4.touchHandler));
    final subscription_14 = _NgModel_415_6.update.listen(eventHandler1(_handle_ngModelChange_415_0));
    _el_419.addEventListener('change', eventHandler1(_handle_change_419_0));
    _el_423.addEventListener('change', eventHandler1(_handle_change_423_1));
    _el_423.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_423_4.touchHandler));
    final subscription_15 = _NgModel_423_6.update.listen(eventHandler1(_handle_ngModelChange_423_0));
    _el_424.addEventListener('click', eventHandler0(ctx.setCurrentClasses));
    _map_1 = import33.pureProxy3((p0, p1, p2) {
      return {'bad': p0, 'curly': p1, 'special': p2};
    });
    _el_454.addEventListener('change', eventHandler1(_handle_change_454_1));
    _el_454.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_454_4.touchHandler));
    final subscription_16 = _NgModel_454_6.update.listen(eventHandler1(_handle_ngModelChange_454_0));
    _el_458.addEventListener('change', eventHandler1(_handle_change_458_1));
    _el_458.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_458_4.touchHandler));
    final subscription_17 = _NgModel_458_6.update.listen(eventHandler1(_handle_ngModelChange_458_0));
    _el_462.addEventListener('change', eventHandler1(_handle_change_462_1));
    _el_462.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_462_4.touchHandler));
    final subscription_18 = _NgModel_462_6.update.listen(eventHandler1(_handle_ngModelChange_462_0));
    _el_463.addEventListener('click', eventHandler0(ctx.setCurrentStyles));
    _el_522.addEventListener('click', eventHandler0(ctx.resetHeroes));
    _el_524.addEventListener('click', eventHandler0(ctx.changeIds));
    _el_526.addEventListener('click', eventHandler0(ctx.clearTrackByCounts));
    final subscription_19 = _NgModel_578_4.update.listen(eventHandler1(_handle_ngModelChange_578_0));
    _el_594.addEventListener('click', eventHandler1(_handle_click_594_0));
    _el_597.addEventListener('click', eventHandler1(_handle_click_597_0));
    _el_609.addEventListener('click', eventHandler0(ctx.onSave));
    final subscription_20 = _HeroDetailComponent_611_4.deleteRequest.listen(eventHandler1(ctx.deleteHero));
    final subscription_21 = _ClickDirective_612_4.clicks.listen(eventHandler1(_handle_myClick_612_0));
    _el_660.addEventListener('click', eventHandler0(ctx.colorToggle));
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
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6, subscription_7, subscription_8, subscription_9, subscription_10, subscription_11, subscription_12, subscription_13, subscription_14, subscription_15, subscription_16, subscription_17, subscription_18, subscription_19, subscription_20, subscription_21]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import7.NgForm) || identical(token, import37.ControlContainer)) && ((143 <= nodeIndex) && (nodeIndex <= 144)))) {
      return _NgForm_143_4;
    }
    if ((identical(token, import9.HeroDetailComponent) && (160 == nodeIndex))) {
      return _HeroDetailComponent_160_4;
    }
    if ((identical(token, import9.HeroDetailComponent) && (170 == nodeIndex))) {
      return _HeroDetailComponent_170_4;
    }
    if ((identical(token, import9.HeroDetailComponent) && (176 == nodeIndex))) {
      return _HeroDetailComponent_176_4;
    }
    if ((identical(token, import11.ClickDirective) && ((177 <= nodeIndex) && (nodeIndex <= 178)))) {
      return _ClickDirective_177_4;
    }
    if ((identical(token, import12.DefaultValueAccessor) && (184 == nodeIndex))) {
      return _DefaultValueAccessor_184_4;
    }
    if ((identical(token, const import38.OpaqueToken<import39.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (184 == nodeIndex))) {
      return _NgValueAccessor_184_5;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (184 == nodeIndex))) {
      return _NgModel_184_6;
    }
    if ((identical(token, import9.HeroDetailComponent) && (242 == nodeIndex))) {
      return _HeroDetailComponent_242_4;
    }
    if ((identical(token, import9.HeroDetailComponent) && (244 == nodeIndex))) {
      return _HeroDetailComponent_244_4;
    }
    if ((identical(token, import11.ClickDirective) && ((348 <= nodeIndex) && (nodeIndex <= 349)))) {
      return _ClickDirective_348_4;
    }
    if ((identical(token, import9.HeroDetailComponent) && (351 == nodeIndex))) {
      return _HeroDetailComponent_351_4;
    }
    if ((identical(token, import9.BigHeroDetailComponent) && (353 == nodeIndex))) {
      return _BigHeroDetailComponent_353_4;
    }
    if ((identical(token, import15.SizerComponent) && (370 == nodeIndex))) {
      return _SizerComponent_370_4;
    }
    if ((identical(token, import12.DefaultValueAccessor) && (375 == nodeIndex))) {
      return _DefaultValueAccessor_375_4;
    }
    if ((identical(token, const import38.OpaqueToken<import39.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (375 == nodeIndex))) {
      return _NgValueAccessor_375_5;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (375 == nodeIndex))) {
      return _NgModel_375_6;
    }
    if ((identical(token, import15.SizerComponent) && (381 == nodeIndex))) {
      return _SizerComponent_381_4;
    }
    if ((identical(token, import12.DefaultValueAccessor) && (392 == nodeIndex))) {
      return _DefaultValueAccessor_392_4;
    }
    if ((identical(token, const import38.OpaqueToken<import39.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (392 == nodeIndex))) {
      return _NgValueAccessor_392_5;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (392 == nodeIndex))) {
      return _NgModel_392_6;
    }
    if ((identical(token, import12.DefaultValueAccessor) && (395 == nodeIndex))) {
      return _DefaultValueAccessor_395_4;
    }
    if ((identical(token, const import38.OpaqueToken<import39.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (395 == nodeIndex))) {
      return _NgValueAccessor_395_5;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (395 == nodeIndex))) {
      return _NgModel_395_6;
    }
    if ((identical(token, import12.DefaultValueAccessor) && (398 == nodeIndex))) {
      return _DefaultValueAccessor_398_4;
    }
    if ((identical(token, const import38.OpaqueToken<import39.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (398 == nodeIndex))) {
      return _NgValueAccessor_398_5;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (398 == nodeIndex))) {
      return _NgModel_398_6;
    }
    if ((identical(token, import12.DefaultValueAccessor) && (401 == nodeIndex))) {
      return _DefaultValueAccessor_401_4;
    }
    if ((identical(token, const import38.OpaqueToken<import39.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (401 == nodeIndex))) {
      return _NgValueAccessor_401_5;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (401 == nodeIndex))) {
      return _NgModel_401_6;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (415 == nodeIndex))) {
      return _CheckboxControlValueAccessor_415_4;
    }
    if ((identical(token, const import38.OpaqueToken<import39.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (415 == nodeIndex))) {
      return _NgValueAccessor_415_5;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (415 == nodeIndex))) {
      return _NgModel_415_6;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (423 == nodeIndex))) {
      return _CheckboxControlValueAccessor_423_4;
    }
    if ((identical(token, const import38.OpaqueToken<import39.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (423 == nodeIndex))) {
      return _NgValueAccessor_423_5;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (423 == nodeIndex))) {
      return _NgModel_423_6;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (454 == nodeIndex))) {
      return _CheckboxControlValueAccessor_454_4;
    }
    if ((identical(token, const import38.OpaqueToken<import39.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (454 == nodeIndex))) {
      return _NgValueAccessor_454_5;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (454 == nodeIndex))) {
      return _NgModel_454_6;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (458 == nodeIndex))) {
      return _CheckboxControlValueAccessor_458_4;
    }
    if ((identical(token, const import38.OpaqueToken<import39.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (458 == nodeIndex))) {
      return _NgValueAccessor_458_5;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (458 == nodeIndex))) {
      return _NgModel_458_6;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (462 == nodeIndex))) {
      return _CheckboxControlValueAccessor_462_4;
    }
    if ((identical(token, const import38.OpaqueToken<import39.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (462 == nodeIndex))) {
      return _NgValueAccessor_462_5;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (462 == nodeIndex))) {
      return _NgModel_462_6;
    }
    if ((identical(token, import9.HeroDetailComponent) && (485 == nodeIndex))) {
      return _HeroDetailComponent_485_4;
    }
    if ((identical(token, import13.NgModel) && ((578 <= nodeIndex) && (nodeIndex <= 579)))) {
      return _NgModel_578_4;
    }
    if ((identical(token, import40.NgControl) && ((578 <= nodeIndex) && (nodeIndex <= 579)))) {
      return _NgControl_578_5;
    }
    if ((identical(token, import20.MaterialRadioGroupComponent) && ((578 <= nodeIndex) && (nodeIndex <= 579)))) {
      return _MaterialRadioGroupComponent_578_6;
    }
    if ((identical(token, import21.NgSwitch) && ((582 <= nodeIndex) && (nodeIndex <= 587)))) {
      return _NgSwitch_582_4;
    }
    if ((identical(token, import23.HeroFormComponent) && (602 == nodeIndex))) {
      return _HeroFormComponent_602_4;
    }
    if ((identical(token, import9.HeroDetailComponent) && (611 == nodeIndex))) {
      return _HeroDetailComponent_611_4;
    }
    if ((identical(token, import11.ClickDirective) && ((612 <= nodeIndex) && (nodeIndex <= 613)))) {
      return _ClickDirective_612_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_heroInput = _el_119;
    final local_mySizer = _SizerComponent_370_4;
    final local_btn = _el_599;
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_139_7.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_139_7.ngDoCheck();
    if (firstCheck) {
      _HeroDetailComponent_160_4.ngOnInit();
    }
    final currVal_12 = _ctx.currentHero;
    if (!identical(_expr_12, currVal_12)) {
      _HeroDetailComponent_170_4.hero = currVal_12;
      _expr_12 = currVal_12;
    }
    if (firstCheck) {
      _HeroDetailComponent_170_4.ngOnInit();
    }
    final currVal_13 = _map_0(_ctx.isSpecial);
    if (!identical(_expr_13, currVal_13)) {
      _NgClass_171_4.rawClass = currVal_13;
      _expr_13 = currVal_13;
    }
    _NgClass_171_4.ngDoCheck();
    if (firstCheck) {
      _HeroDetailComponent_176_4.ngOnInit();
    }
    changed = false;
    _NgModel_184_6.model = _ctx.name;
    _NgModel_184_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_184_6.ngOnInit();
    }
    final currVal_29 = _ctx.classes;
    if (!identical(_expr_29, currVal_29)) {
      _NgClass_240_4.rawClass = currVal_29;
      _expr_29 = currVal_29;
    }
    _NgClass_240_4.ngDoCheck();
    final currVal_30 = _ctx.currentHero;
    if (!identical(_expr_30, currVal_30)) {
      _HeroDetailComponent_242_4.hero = currVal_30;
      _expr_30 = currVal_30;
    }
    if (firstCheck) {
      _HeroDetailComponent_242_4.ngOnInit();
    }
    if (firstCheck) {
      (_HeroDetailComponent_244_4.prefix = 'You are my');
    }
    final currVal_32 = _ctx.currentHero;
    if (!identical(_expr_32, currVal_32)) {
      _HeroDetailComponent_244_4.hero = currVal_32;
      _expr_32 = currVal_32;
    }
    if (firstCheck) {
      _HeroDetailComponent_244_4.ngOnInit();
    }
    final currVal_55 = _ctx.currentHero;
    if (!identical(_expr_55, currVal_55)) {
      _HeroDetailComponent_351_4.hero = currVal_55;
      _expr_55 = currVal_55;
    }
    if (firstCheck) {
      _HeroDetailComponent_351_4.ngOnInit();
    }
    final currVal_56 = _ctx.currentHero;
    if (!identical(_expr_56, currVal_56)) {
      _BigHeroDetailComponent_353_4.hero = currVal_56;
      _expr_56 = currVal_56;
    }
    if (firstCheck) {
      _BigHeroDetailComponent_353_4.ngOnInit();
    }
    final currVal_57 = _ctx.fontSizePx;
    if (!identical(_expr_57, currVal_57)) {
      _SizerComponent_370_4.size = currVal_57;
      _expr_57 = currVal_57;
    }
    changed = false;
    _NgModel_375_6.model = _ctx.fontSizePx;
    _NgModel_375_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_375_6.ngOnInit();
    }
    final currVal_61 = _ctx.fontSizePx;
    if (!identical(_expr_61, currVal_61)) {
      _SizerComponent_381_4.size = currVal_61;
      _expr_61 = currVal_61;
    }
    changed = false;
    _NgModel_392_6.model = _ctx.currentHero.name;
    _NgModel_392_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_392_6.ngOnInit();
    }
    changed = false;
    _NgModel_395_6.model = _ctx.currentHero.name;
    _NgModel_395_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_395_6.ngOnInit();
    }
    changed = false;
    _NgModel_398_6.model = _ctx.currentHero.name;
    _NgModel_398_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_398_6.ngOnInit();
    }
    changed = false;
    _NgModel_401_6.model = _ctx.currentHero.name;
    _NgModel_401_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_401_6.ngOnInit();
    }
    final currVal_69 = _ctx.currentClasses;
    if (!identical(_expr_69, currVal_69)) {
      _NgClass_410_4.rawClass = currVal_69;
      _expr_69 = currVal_69;
    }
    _NgClass_410_4.ngDoCheck();
    changed = false;
    _NgModel_415_6.model = _ctx.canSave;
    _NgModel_415_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_415_6.ngOnInit();
    }
    changed = false;
    _NgModel_423_6.model = _ctx.isSpecial;
    _NgModel_423_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_423_6.ngOnInit();
    }
    final currVal_73 = _ctx.currentClasses;
    if (!identical(_expr_73, currVal_73)) {
      _NgClass_428_4.rawClass = currVal_73;
      _expr_73 = currVal_73;
    }
    _NgClass_428_4.ngDoCheck();
    final currVal_75 = (_ctx.isSpecial ? 'special' : '');
    if (!identical(_expr_75, currVal_75)) {
      _NgClass_432_4.rawClass = currVal_75;
      _expr_75 = currVal_75;
    }
    _NgClass_432_4.ngDoCheck();
    final currVal_76 = _map_1(false, true, true);
    if (!identical(_expr_76, currVal_76)) {
      _NgClass_436_4.rawClass = currVal_76;
      _expr_76 = currVal_76;
    }
    _NgClass_436_4.ngDoCheck();
    final currVal_79 = _ctx.currentStyles;
    if (!identical(_expr_79, currVal_79)) {
      _NgStyle_449_4.rawStyle = currVal_79;
      _expr_79 = currVal_79;
    }
    _NgStyle_449_4.ngDoCheck();
    changed = false;
    _NgModel_454_6.model = _ctx.canSave;
    _NgModel_454_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_454_6.ngOnInit();
    }
    changed = false;
    _NgModel_458_6.model = _ctx.isUnchanged;
    _NgModel_458_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_458_6.ngOnInit();
    }
    changed = false;
    _NgModel_462_6.model = _ctx.isSpecial;
    _NgModel_462_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_462_6.ngOnInit();
    }
    final currVal_83 = _ctx.currentStyles;
    if (!identical(_expr_83, currVal_83)) {
      _NgStyle_467_4.rawStyle = currVal_83;
      _expr_83 = currVal_83;
    }
    _NgStyle_467_4.ngDoCheck();
    _NgIf_474_7.ngIf = _ctx.isActive;
    _NgIf_475_7.ngIf = (_ctx.currentHero != null);
    _NgIf_476_7.ngIf = (_ctx.nullHero != null);
    _NgIf_477_7.ngIf = (_ctx.currentHero != null);
    _NgIf_480_7.ngIf = _ctx.isActive;
    if (firstCheck) {
      _HeroDetailComponent_485_4.ngOnInit();
    }
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_496_7.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_496_7.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_499_7.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_499_7.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_510_7.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_510_7.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_517_7.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_517_7.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_533_7.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_533_7.ngDoCheck();
    _NgIf_534_7.ngIf = (_ctx.heroesNoTrackByCount > 0);
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_538_7.ngForOf = _ctx.heroes);
      }
      if (!identical(_ctx.trackByHeroes, null)) {
        (_NgFor_538_7.ngForTrackBy = _ctx.trackByHeroes);
      }
    }
    _NgFor_538_7.ngDoCheck();
    _NgIf_539_7.ngIf = (_ctx.heroesWithTrackByCount > 0);
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_549_7.ngForOf = _ctx.heroes);
      }
      if (!identical(_ctx.trackByHeroes, null)) {
        (_NgFor_549_7.ngForTrackBy = _ctx.trackByHeroes);
      }
    }
    _NgFor_549_7.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_556_7.ngForOf = _ctx.heroes);
      }
      if (!identical(_ctx.trackByHeroes, null)) {
        (_NgFor_556_7.ngForTrackBy = _ctx.trackByHeroes);
      }
    }
    _NgFor_556_7.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_563_7.ngForOf = _ctx.heroes);
      }
      if (!identical(_ctx.trackByHeroes, null)) {
        (_NgFor_563_7.ngForTrackBy = _ctx.trackByHeroes);
      }
    }
    _NgFor_563_7.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_570_7.ngForOf = _ctx.heroes);
      }
      if (!identical(_ctx.trackById, null)) {
        (_NgFor_570_7.ngForTrackBy = _ctx.trackById);
      }
    }
    _NgFor_570_7.ngDoCheck();
    changed = false;
    _NgModel_578_4.model = _ctx.currentHero;
    _NgModel_578_4.ngAfterChanges();
    if (firstCheck) {
      _NgModel_578_4.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_578.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_579_7.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_579_7.ngDoCheck();
    final currVal_115 = _ctx.currentHero.emotion;
    if (!identical(_expr_115, currVal_115)) {
      _NgSwitch_582_4.ngSwitch = currVal_115;
      _expr_115 = currVal_115;
    }
    if (firstCheck) {
      (_NgSwitchWhen_583_7.ngSwitchCase = 'happy');
    }
    if (firstCheck) {
      (_NgSwitchWhen_584_7.ngSwitchCase = 'sad');
    }
    if (firstCheck) {
      (_NgSwitchWhen_585_7.ngSwitchCase = 'confused');
    }
    if (firstCheck) {
      (_NgSwitchWhen_586_7.ngSwitchCase = 'confused');
    }
    final currVal_121 = _ctx.currentHero;
    if (!identical(_expr_121, currVal_121)) {
      _HeroFormComponent_602_4.hero = currVal_121;
      _expr_121 = currVal_121;
    }
    final currVal_123 = _ctx.currentHero;
    if (!identical(_expr_123, currVal_123)) {
      _HeroDetailComponent_611_4.hero = currVal_123;
      _expr_123 = currVal_123;
    }
    if (firstCheck) {
      _HeroDetailComponent_611_4.ngOnInit();
    }
    _NgIf_647_7.ngIf = (_ctx.nullHero != null);
    _appEl_139.detectChangesInNestedViews();
    _appEl_474.detectChangesInNestedViews();
    _appEl_475.detectChangesInNestedViews();
    _appEl_476.detectChangesInNestedViews();
    _appEl_477.detectChangesInNestedViews();
    _appEl_480.detectChangesInNestedViews();
    _appEl_496.detectChangesInNestedViews();
    _appEl_499.detectChangesInNestedViews();
    _appEl_510.detectChangesInNestedViews();
    _appEl_517.detectChangesInNestedViews();
    _appEl_533.detectChangesInNestedViews();
    _appEl_534.detectChangesInNestedViews();
    _appEl_538.detectChangesInNestedViews();
    _appEl_539.detectChangesInNestedViews();
    _appEl_549.detectChangesInNestedViews();
    _appEl_556.detectChangesInNestedViews();
    _appEl_563.detectChangesInNestedViews();
    _appEl_570.detectChangesInNestedViews();
    _appEl_579.detectChangesInNestedViews();
    _appEl_583.detectChangesInNestedViews();
    _appEl_584.detectChangesInNestedViews();
    _appEl_585.detectChangesInNestedViews();
    _appEl_586.detectChangesInNestedViews();
    _appEl_587.detectChangesInNestedViews();
    _appEl_647.detectChangesInNestedViews();
    if (_query_MaterialRadioComponent_578_0.dirty) {
      _query_MaterialRadioComponent_578_0.reset([
        _appEl_579.mapNestedViews((_ViewAppComponent21 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_578_6.list = _query_MaterialRadioComponent_578_0;
      _query_MaterialRadioComponent_578_0.notifyOnChanges();
    }
    if (_viewQuery_noTrackBy_0.dirty) {
      _viewQuery_noTrackBy_0.reset([
        _appEl_533.mapNestedViews((_ViewAppComponent13 nestedView) {
          return [new ElementRef(nestedView._el_0)];
        })
      ]);
      ctx.heroesNoTrackBy = _viewQuery_noTrackBy_0;
      _viewQuery_noTrackBy_0.notifyOnChanges();
    }
    if (_viewQuery_withTrackBy_1.dirty) {
      _viewQuery_withTrackBy_1.reset([
        _appEl_538.mapNestedViews((_ViewAppComponent15 nestedView) {
          return [new ElementRef(nestedView._el_0)];
        })
      ]);
      ctx.heroesWithTrackBy = _viewQuery_withTrackBy_1;
      _viewQuery_withTrackBy_1.notifyOnChanges();
    }
    final currVal_0 = import33.interpolate1('My current hero is ', _ctx.currentHero.name, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_93.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import33.interpolate0(_ctx.title);
    if (!identical(_expr_1, currVal_1)) {
      _text_95.text = currVal_1;
      _expr_1 = currVal_1;
    }
    if (firstCheck) {
      setProp(_el_96, 'src', import33.appViewUtils.sanitizer.sanitizeUrl((_ctx.heroImageUrl ?? '')));
    }
    final currVal_3 = import33.interpolate1('The sum of 1 + 1 is ', (1 + 1), '');
    if (!identical(_expr_3, currVal_3)) {
      _text_98.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = import33.interpolate1('The sum of 1 + 1 is not ', ((1 + 1) + _ctx.getVal()), '');
    if (!identical(_expr_4, currVal_4)) {
      _text_100.text = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = import33.interpolate1('Component expression context (', _ctx.title, ', [hidden]="isUnchanged")');
    if (!identical(_expr_5, currVal_5)) {
      _text_107.text = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = import33.interpolate0(_ctx.title);
    if (!identical(_expr_6, currVal_6)) {
      _text_109.text = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.isUnchanged;
    if (!identical(_expr_7, currVal_7)) {
      setProp(_el_110, 'hidden', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = import33.interpolate1(' ', local_heroInput.value, '');
    if (!identical(_expr_8, currVal_8)) {
      _text_120.text = currVal_8;
      _expr_8 = currVal_8;
    }
    final currVal_10 = _ctx.isUnchanged;
    if (!identical(_expr_10, currVal_10)) {
      setProp(_el_164, 'disabled', currVal_10);
      _expr_10 = currVal_10;
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_169, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    final currVal_14 = import33.interpolate0(_ctx.clicked);
    if (!identical(_expr_14, currVal_14)) {
      _text_179.text = currVal_14;
      _expr_14 = currVal_14;
    }
    final currVal_16 = import33.interpolate0(_ctx.name);
    if (!identical(_expr_16, currVal_16)) {
      _text_185.text = currVal_16;
      _expr_16 = currVal_16;
    }
    final currVal_17 = _ctx.help;
    if (!identical(_expr_17, currVal_17)) {
      setAttr(_el_188, 'aria-label', currVal_17?.toString());
      _expr_17 = currVal_17;
    }
    final currVal_18 = _ctx.isSpecial;
    if (!identical(_expr_18, currVal_18)) {
      updateClass(_el_192, 'special', currVal_18);
      _expr_18 = currVal_18;
    }
    final currVal_19 = (_ctx.isSpecial ? 'red' : 'green');
    if (!identical(_expr_19, currVal_19)) {
      _el_196.style.setProperty('color', currVal_19?.toString());
      _expr_19 = currVal_19;
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_203, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    if (firstCheck) {
      if (!identical(_ctx.iconUrl, null)) {
        setProp(_el_206, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.iconUrl));
      }
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_207, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    if (firstCheck) {
      if (!identical(_ctx.villainImageUrl, null)) {
        setAttr(_el_208, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.villainImageUrl)?.toString());
      }
    }
    final currVal_24 = _ctx.isUnchanged;
    if (!identical(_expr_24, currVal_24)) {
      setProp(_el_224, 'disabled', currVal_24);
      _expr_24 = currVal_24;
    }
    final currVal_25 = _ctx.isUnchanged;
    if (!identical(_expr_25, currVal_25)) {
      setProp(_el_228, 'disabled', currVal_25);
      _expr_25 = currVal_25;
    }
    final bool currVal_26 = !_ctx.canSave;
    if (!identical(_expr_26, currVal_26)) {
      setProp(_el_230, 'disabled', currVal_26);
      _expr_26 = currVal_26;
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_237, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    final currVal_28 = _ctx.isUnchanged;
    if (!identical(_expr_28, currVal_28)) {
      setProp(_el_238, 'disabled', currVal_28);
      _expr_28 = currVal_28;
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_243, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    if (firstCheck) {
      setProp(_el_246, 'src', import33.appViewUtils.sanitizer.sanitizeUrl((_ctx.heroImageUrl ?? '')));
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_252, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    final currVal_36 = import33.interpolate1('"', _ctx.title, '" is the ');
    if (!identical(_expr_36, currVal_36)) {
      _text_259.text = currVal_36;
      _expr_36 = currVal_36;
    }
    final currVal_37 = _ctx.title;
    if (!identical(_expr_37, currVal_37)) {
      setProp(_el_265, 'innerHTML', import33.appViewUtils.sanitizer.sanitizeHtml(currVal_37));
      _expr_37 = currVal_37;
    }
    final currVal_38 = import33.interpolate1('"', _ctx.evilTitle, '" is the ');
    if (!identical(_expr_38, currVal_38)) {
      _text_272.text = currVal_38;
      _expr_38 = currVal_38;
    }
    final currVal_39 = _ctx.evilTitle;
    if (!identical(_expr_39, currVal_39)) {
      setProp(_el_278, 'innerHTML', import33.appViewUtils.sanitizer.sanitizeHtml(currVal_39));
      _expr_39 = currVal_39;
    }
    final currVal_40 = (1 + 1);
    if (!identical(_expr_40, currVal_40)) {
      setAttr(_el_291, 'colspan', currVal_40?.toString());
      _expr_40 = currVal_40;
    }
    final currVal_41 = _ctx.actionName;
    if (!identical(_expr_41, currVal_41)) {
      setAttr(_el_299, 'aria-label', currVal_41?.toString());
      _expr_41 = currVal_41;
    }
    final currVal_42 = import33.interpolate1('', _ctx.actionName, ' with Aria');
    if (!identical(_expr_42, currVal_42)) {
      _text_300.text = currVal_42;
      _expr_42 = currVal_42;
    }
    final currVal_43 = _ctx.isUnchanged;
    if (!identical(_expr_43, currVal_43)) {
      setAttr(_el_304, 'disabled', currVal_43?.toString());
      _expr_43 = currVal_43;
    }
    final bool currVal_44 = !_ctx.isUnchanged;
    if (!identical(_expr_44, currVal_44)) {
      setAttr(_el_306, 'disabled', currVal_44?.toString());
      _expr_44 = currVal_44;
    }
    if (firstCheck) {
      setProp(_el_308, 'disabled', false);
    }
    final currVal_46 = _ctx.badCurly;
    if (!identical(_expr_46, currVal_46)) {
      this.updateChildClass(_el_317, currVal_46);
      _expr_46 = currVal_46;
    }
    final currVal_47 = _ctx.isSpecial;
    if (!identical(_expr_47, currVal_47)) {
      updateClass(_el_319, 'special', currVal_47);
      _expr_47 = currVal_47;
    }
    final bool currVal_48 = !_ctx.isSpecial;
    if (!identical(_expr_48, currVal_48)) {
      updateClass(_el_321, 'special', currVal_48);
      _expr_48 = currVal_48;
    }
    final currVal_49 = _ctx.isSpecial;
    if (!identical(_expr_49, currVal_49)) {
      updateClass(_el_323, 'special', currVal_49);
      _expr_49 = currVal_49;
    }
    final currVal_50 = (_ctx.isSpecial ? 'red' : 'green');
    if (!identical(_expr_50, currVal_50)) {
      _el_330.style.setProperty('color', currVal_50?.toString());
      _expr_50 = currVal_50;
    }
    final currVal_51 = (_ctx.canSave ? 'cyan' : 'grey');
    if (!identical(_expr_51, currVal_51)) {
      _el_332.style.setProperty('background-color', currVal_51?.toString());
      _expr_51 = currVal_51;
    }
    final currVal_52 = (_ctx.isSpecial ? 3 : 1);
    if (!identical(_expr_52, currVal_52)) {
      _el_334.style.setProperty('font-size', ((currVal_52?.toString() == null) ? null : (currVal_52?.toString() + 'em')));
      _expr_52 = currVal_52;
    }
    final currVal_53 = (!_ctx.isSpecial ? 150 : 50);
    if (!identical(_expr_53, currVal_53)) {
      _el_336.style.setProperty('font-size', ((currVal_53?.toString() == null) ? null : (currVal_53?.toString() + '%')));
      _expr_53 = currVal_53;
    }
    final currVal_54 = import33.interpolate0(_ctx.clickMessage);
    if (!identical(_expr_54, currVal_54)) {
      _text_350.text = currVal_54;
      _expr_54 = currVal_54;
    }
    final currVal_58 = local_mySizer.size;
    if (!identical(_expr_58, currVal_58)) {
      _el_371.style.setProperty('font-size', ((currVal_58?.toString() == null) ? null : (currVal_58?.toString() + 'px')));
      _expr_58 = currVal_58;
    }
    final currVal_60 = import33.interpolate1(' ', _ctx.fontSizePx.runtimeType, '');
    if (!identical(_expr_60, currVal_60)) {
      _text_376.text = currVal_60;
      _expr_60 = currVal_60;
    }
    final currVal_62 = import33.interpolate1('Result: ', _ctx.currentHero.name, '');
    if (!identical(_expr_62, currVal_62)) {
      _text_388.text = currVal_62;
      _expr_62 = currVal_62;
    }
    final currVal_63 = _ctx.currentHero.name;
    if (!identical(_expr_63, currVal_63)) {
      setProp(_el_389, 'value', currVal_63);
      _expr_63 = currVal_63;
    }
    final currVal_68 = import33.interpolate1('currentClasses is ', _ctx.currentClasses, '');
    if (!identical(_expr_68, currVal_68)) {
      _text_409.text = currVal_68;
      _expr_68 = currVal_68;
    }
    final bool currVal_71 = !_ctx.isUnchanged;
    if (!identical(_expr_71, currVal_71)) {
      setProp(_el_419, 'value', currVal_71);
      _expr_71 = currVal_71;
    }
    final currVal_74 = import33.interpolate3('This div should be ', (_ctx.canSave ? '' : 'not'), ' saveable,\n                  ', (_ctx.isUnchanged ? 'unchanged' : 'modified'), ' and,\n                  ', (_ctx.isSpecial ? '' : 'not'), ' special after clicking "Refresh".');
    if (!identical(_expr_74, currVal_74)) {
      _text_429.text = currVal_74;
      _expr_74 = currVal_74;
    }
    final currVal_77 = (_ctx.isSpecial ? 'x-large' : 'smaller');
    if (!identical(_expr_77, currVal_77)) {
      _el_443.style.setProperty('font-size', currVal_77?.toString());
      _expr_77 = currVal_77;
    }
    final currVal_78 = import33.interpolate1('currentStyles is ', _ctx.currentStyles, '');
    if (!identical(_expr_78, currVal_78)) {
      _text_448.text = currVal_78;
      _expr_78 = currVal_78;
    }
    final currVal_84 = import33.interpolate3('This div should be ', (_ctx.canSave ? 'italic' : 'plain'), ',\n                  ', (_ctx.isUnchanged ? 'normal weight' : 'bold'), ' and,\n                  ', (_ctx.isSpecial ? 'extra large' : 'normal size'), ' after clicking "Refresh".');
    if (!identical(_expr_84, currVal_84)) {
      _text_468.text = currVal_84;
      _expr_84 = currVal_84;
    }
    final bool currVal_90 = !_ctx.isSpecial;
    if (!identical(_expr_90, currVal_90)) {
      updateClass(_el_481, 'hidden', currVal_90);
      _expr_90 = currVal_90;
    }
    final currVal_91 = _ctx.isSpecial;
    if (!identical(_expr_91, currVal_91)) {
      updateClass(_el_483, 'hidden', currVal_91);
      _expr_91 = currVal_91;
    }
    final currVal_92 = _ctx.isSpecial;
    if (!identical(_expr_92, currVal_92)) {
      updateElemClass(_el_485, 'hidden', currVal_92);
      _expr_92 = currVal_92;
    }
    final currVal_93 = (_ctx.isSpecial ? 'block' : 'none');
    if (!identical(_expr_93, currVal_93)) {
      _el_486.style.setProperty('display', currVal_93?.toString());
      _expr_93 = currVal_93;
    }
    final currVal_94 = (_ctx.isSpecial ? 'none' : 'block');
    if (!identical(_expr_94, currVal_94)) {
      _el_488.style.setProperty('display', currVal_94?.toString());
      _expr_94 = currVal_94;
    }
    final currVal_114 = import33.interpolate2('Current hero is: ', _ctx.currentHero.name, ' (', _ctx.currentHero.id, ')');
    if (!identical(_expr_114, currVal_114)) {
      _text_581.text = currVal_114;
      _expr_114 = currVal_114;
    }
    final currVal_120 = ('disabled by attribute: ' + local_btn.disabled.toString());
    if (!identical(_expr_120, currVal_120)) {
      setProp(_el_599, 'innerHTML', import33.appViewUtils.sanitizer.sanitizeHtml(currVal_120));
      _expr_120 = currVal_120;
    }
    if (firstCheck) {
      if (!identical(_ctx.iconUrl, null)) {
        setProp(_el_608, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.iconUrl));
      }
    }
    final currVal_124 = import33.interpolate0(_ctx.clickMessage2);
    if (!identical(_expr_124, currVal_124)) {
      _text_614.text = currVal_124;
      _expr_124 = currVal_124;
    }
    final currVal_125 = import33.interpolate1('Title through uppercase pipe: ', _pipe_uppercase_0_0(_ctx.title), '');
    if (!identical(_expr_125, currVal_125)) {
      _text_621.text = currVal_125;
      _expr_125 = currVal_125;
    }
    final currVal_126 = import33.interpolate1('Title through a pipe chain:  ', _pipe_lowercase_1_0(_pipe_uppercase_0_1(_ctx.title)), '');
    if (!identical(_expr_126, currVal_126)) {
      _text_623.text = currVal_126;
      _expr_126 = currVal_126;
    }
    final currVal_127 = import33.interpolate1('Birthdate: ', _pipe_date_2_0(((_ctx.currentHero == null) ? null : _ctx.currentHero.birthdate), 'longDate'), '');
    if (!identical(_expr_127, currVal_127)) {
      _text_625.text = currVal_127;
      _expr_127 = currVal_127;
    }
    final currVal_128 = import33.interpolate0(_pipe_json_3.transform(_ctx.currentHero));
    if (!identical(_expr_128, currVal_128)) {
      _text_627.text = currVal_128;
      _expr_128 = currVal_128;
    }
    final currVal_129 = import33.interpolate1('Birthdate: ', _pipe_uppercase_0_2(_pipe_date_2_1(((_ctx.currentHero == null) ? null : _ctx.currentHero.birthdate), 'longDate')), '');
    if (!identical(_expr_129, currVal_129)) {
      _text_629.text = currVal_129;
      _expr_129 = currVal_129;
    }
    final currVal_130 = import33.interpolate0(_pipe_currency_4_0(_ctx.product['price'], 'USD', true));
    if (!identical(_expr_130, currVal_130)) {
      _text_633.text = currVal_130;
      _expr_130 = currVal_130;
    }
    final currVal_131 = import33.interpolate1('The title is ', _ctx.title, '');
    if (!identical(_expr_131, currVal_131)) {
      _text_642.text = currVal_131;
      _expr_131 = currVal_131;
    }
    final currVal_132 = import33.interpolate1('The current hero\'s name is ', ((_ctx.currentHero == null) ? null : _ctx.currentHero.name), '');
    if (!identical(_expr_132, currVal_132)) {
      _text_644.text = currVal_132;
      _expr_132 = currVal_132;
    }
    final currVal_133 = import33.interpolate1('The current hero\'s name is ', _ctx.currentHero.name, '');
    if (!identical(_expr_133, currVal_133)) {
      _text_646.text = currVal_133;
      _expr_133 = currVal_133;
    }
    final currVal_135 = import33.interpolate1('The null hero\'s name is ', ((_ctx.nullHero == null) ? null : _ctx.nullHero.name), '');
    if (!identical(_expr_135, currVal_135)) {
      _text_649.text = currVal_135;
      _expr_135 = currVal_135;
    }
    final currVal_136 = import33.interpolate1('The name of the Color.red enum is ', import2.Color.red, '.');
    if (!identical(_expr_136, currVal_136)) {
      _text_656.text = currVal_136;
      _expr_136 = currVal_136;
    }
    final currVal_137 = import33.interpolate2('The current color is ', _ctx.color, ' and its index is ', _ctx.color.index, '.');
    if (!identical(_expr_137, currVal_137)) {
      _text_658.text = currVal_137;
      _expr_137 = currVal_137;
    }
    final currVal_138 = _ctx.color.toString().split('.')[1];
    if (!identical(_expr_138, currVal_138)) {
      _el_660.style.setProperty('color', currVal_138?.toString());
      _expr_138 = currVal_138;
    }
    _compView_160.detectChanges();
    _compView_170.detectChanges();
    _compView_176.detectChanges();
    _compView_242.detectChanges();
    _compView_244.detectChanges();
    _compView_351.detectChanges();
    _compView_353.detectChanges();
    _compView_370.detectChanges();
    _compView_381.detectChanges();
    _compView_485.detectChanges();
    _compView_578.detectChanges();
    _compView_602.detectChanges();
    _compView_611.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_139?.destroyNestedViews();
    _appEl_474?.destroyNestedViews();
    _appEl_475?.destroyNestedViews();
    _appEl_476?.destroyNestedViews();
    _appEl_477?.destroyNestedViews();
    _appEl_480?.destroyNestedViews();
    _appEl_496?.destroyNestedViews();
    _appEl_499?.destroyNestedViews();
    _appEl_510?.destroyNestedViews();
    _appEl_517?.destroyNestedViews();
    _appEl_533?.destroyNestedViews();
    _appEl_534?.destroyNestedViews();
    _appEl_538?.destroyNestedViews();
    _appEl_539?.destroyNestedViews();
    _appEl_549?.destroyNestedViews();
    _appEl_556?.destroyNestedViews();
    _appEl_563?.destroyNestedViews();
    _appEl_570?.destroyNestedViews();
    _appEl_579?.destroyNestedViews();
    _appEl_583?.destroyNestedViews();
    _appEl_584?.destroyNestedViews();
    _appEl_585?.destroyNestedViews();
    _appEl_586?.destroyNestedViews();
    _appEl_587?.destroyNestedViews();
    _appEl_647?.destroyNestedViews();
    _compView_160?.destroy();
    _compView_170?.destroy();
    _compView_176?.destroy();
    _compView_242?.destroy();
    _compView_244?.destroy();
    _compView_351?.destroy();
    _compView_353?.destroy();
    _compView_370?.destroy();
    _compView_381?.destroy();
    _compView_485?.destroy();
    _compView_578?.destroy();
    _compView_602?.destroy();
    _compView_611?.destroy();
    _NgClass_171_4.ngOnDestroy();
    _NgClass_240_4.ngOnDestroy();
    _NgClass_410_4.ngOnDestroy();
    _NgClass_428_4.ngOnDestroy();
    _NgClass_432_4.ngOnDestroy();
    _NgClass_436_4.ngOnDestroy();
    _MaterialRadioGroupComponent_578_6.ngOnDestroy();
  }

  void _handle_keyup_117_0($event) {
    0;
  }

  void _handle_ngSubmit_143_0($event) {
    final local_heroForm = _el_143;
    ctx.onSubmit(local_heroForm);
  }

  void _handle_myClick_177_0($event) {
    ctx.clicked = $event;
  }

  void _handle_ngModelChange_184_0($event) {
    ctx.name = $event;
  }

  void _handle_input_184_1($event) {
    _DefaultValueAccessor_184_4.onChange($event.target.value);
  }

  void _handle_myClick_348_0($event) {
    ctx.clickMessage = $event;
  }

  void _handle_sizeChange_370_0($event) {
    ctx.fontSizePx = $event;
  }

  void _handle_ngModelChange_375_0($event) {
    ctx.fontSizePx = $event;
  }

  void _handle_input_375_1($event) {
    _DefaultValueAccessor_375_4.onChange($event.target.value);
  }

  void _handle_sizeChange_381_0($event) {
    ctx.fontSizePx = $event;
  }

  void _handle_input_389_0($event) {
    ctx.currentHero.name = $event.target.value;
  }

  void _handle_ngModelChange_392_0($event) {
    ctx.currentHero.name = $event;
  }

  void _handle_input_392_1($event) {
    _DefaultValueAccessor_392_4.onChange($event.target.value);
  }

  void _handle_ngModelChange_395_0($event) {
    ctx.currentHero.name = $event;
  }

  void _handle_input_395_1($event) {
    _DefaultValueAccessor_395_4.onChange($event.target.value);
  }

  void _handle_ngModelChange_398_0($event) {
    ctx.currentHero.name = $event;
  }

  void _handle_input_398_1($event) {
    _DefaultValueAccessor_398_4.onChange($event.target.value);
  }

  void _handle_input_401_1($event) {
    _DefaultValueAccessor_401_4.onChange($event.target.value);
  }

  void _handle_ngModelChange_415_0($event) {
    ctx.canSave = $event;
  }

  void _handle_change_415_1($event) {
    _CheckboxControlValueAccessor_415_4.onChange($event.target.checked);
  }

  void _handle_change_419_0($event) {
    ctx.isUnchanged = !ctx.isUnchanged;
  }

  void _handle_ngModelChange_423_0($event) {
    ctx.isSpecial = $event;
  }

  void _handle_change_423_1($event) {
    _CheckboxControlValueAccessor_423_4.onChange($event.target.checked);
  }

  void _handle_ngModelChange_454_0($event) {
    ctx.canSave = $event;
  }

  void _handle_change_454_1($event) {
    _CheckboxControlValueAccessor_454_4.onChange($event.target.checked);
  }

  void _handle_ngModelChange_458_0($event) {
    ctx.isUnchanged = $event;
  }

  void _handle_change_458_1($event) {
    _CheckboxControlValueAccessor_458_4.onChange($event.target.checked);
  }

  void _handle_ngModelChange_462_0($event) {
    ctx.isSpecial = $event;
  }

  void _handle_change_462_1($event) {
    _CheckboxControlValueAccessor_462_4.onChange($event.target.checked);
  }

  void _handle_ngModelChange_578_0($event) {
    ctx.currentHero = $event;
  }

  void _handle_click_594_0($event) {
    final local_phone = _el_593;
    ctx.callPhone(local_phone.value);
  }

  void _handle_click_597_0($event) {
    final local_fax = _el_596;
    ctx.callFax(local_fax.value);
  }

  void _handle_myClick_612_0($event) {
    ctx.clickMessage2 = $event;
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

class _ViewAppComponent1 extends AppView<import2.AppComponent> {
  ViewContainer _appEl_0;
  import6.NgFor _NgFor_0_7;
  _ViewAppComponent1(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var _anchor_0 = ngAnchor.clone(false);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_AppComponent2);
    _NgFor_0_7 = new import6.NgFor(_appEl_0, _TemplateRef_0_6);
    init0(_appEl_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_0_7.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_0_7.ngDoCheck();
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent1(parentView, parentIndex);
}

class _ViewAppComponent2 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent2(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate0(local_hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent2(parentView, parentIndex);
}

class _ViewAppComponent3 extends AppView<import2.AppComponent> {
  import4.ButtonElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent3(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('button');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate0(local_hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  void _handle_click_0_0($event) {
    final import42.Hero local_hero = locals['\$implicit'];
    ctx.deleteHero(local_hero);
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent3(parentView, parentIndex);
}

class _ViewAppComponent4 extends AppView<import2.AppComponent> {
  import4.Element _el_0;
  import8.ViewHeroDetailComponent0 _compView_0;
  import9.HeroDetailComponent _HeroDetailComponent_0_4;
  _ViewAppComponent4(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import8.ViewHeroDetailComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _HeroDetailComponent_0_4 = new import9.HeroDetailComponent();
    _compView_0.create(_HeroDetailComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import9.HeroDetailComponent) && (0 == nodeIndex))) {
      return _HeroDetailComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _HeroDetailComponent_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent4(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent4(parentView, parentIndex);
}

class _ViewAppComponent5 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent5(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate1('Hello, ', _ctx.currentHero.name, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent5(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent5(parentView, parentIndex);
}

class _ViewAppComponent6 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent6(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate1('Hello, ', _ctx.nullHero.name, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent6(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent6(parentView, parentIndex);
}

class _ViewAppComponent7 extends AppView<import2.AppComponent> {
  import4.Text _text_0;
  var _expr_0;
  _ViewAppComponent7(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _text_0 = new import4.Text('');
    init0(_text_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate1('Add ', _ctx.currentHero.name, ' with template');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent7(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent7(parentView, parentIndex);
}

class _ViewAppComponent8 extends AppView<import2.AppComponent> {
  import4.Element _el_0;
  import8.ViewHeroDetailComponent0 _compView_0;
  import9.HeroDetailComponent _HeroDetailComponent_0_4;
  _ViewAppComponent8(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import8.ViewHeroDetailComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _HeroDetailComponent_0_4 = new import9.HeroDetailComponent();
    _compView_0.create(_HeroDetailComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import9.HeroDetailComponent) && (0 == nodeIndex))) {
      return _HeroDetailComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _HeroDetailComponent_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent8(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent8(parentView, parentIndex);
}

class _ViewAppComponent9 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent9(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate0(local_hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent9(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent9(parentView, parentIndex);
}

class _ViewAppComponent10 extends AppView<import2.AppComponent> {
  import4.Element _el_0;
  import8.ViewHeroDetailComponent0 _compView_0;
  import9.HeroDetailComponent _HeroDetailComponent_0_4;
  var _expr_0;
  _ViewAppComponent10(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import8.ViewHeroDetailComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _HeroDetailComponent_0_4 = new import9.HeroDetailComponent();
    _compView_0.create(_HeroDetailComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import9.HeroDetailComponent) && (0 == nodeIndex))) {
      return _HeroDetailComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = local_hero;
    if (!identical(_expr_0, currVal_0)) {
      _HeroDetailComponent_0_4.hero = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      _HeroDetailComponent_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent10(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent10(parentView, parentIndex);
}

class _ViewAppComponent11 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent11(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final int local_i = locals['index'];
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate2('', (local_i + 1), ' - ', local_hero.name, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent11(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent11(parentView, parentIndex);
}

class _ViewAppComponent12 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent12(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final int local_i = locals['index'];
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate2('', (local_i + 1), ' - ', local_hero.name, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent12(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent12(parentView, parentIndex);
}

class _ViewAppComponent13 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent13(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate2('(', local_hero.id, ') ', local_hero.name, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewAppComponent0)._viewQuery_noTrackBy_0.setDirty();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent13(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent13(parentView, parentIndex);
}

class _ViewAppComponent14 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent14(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'id', 'noTrackByCnt');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate1('Hero DOM elements change #', _ctx.heroesNoTrackByCount, ' without trackBy');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent14(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent14(parentView, parentIndex);
}

class _ViewAppComponent15 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent15(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate2('(', local_hero.id, ') ', local_hero.name, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewAppComponent0)._viewQuery_withTrackBy_1.setDirty();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent15(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent15(parentView, parentIndex);
}

class _ViewAppComponent16 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent16(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'id', 'withTrackByCnt');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate1('Hero DOM elements change #', _ctx.heroesWithTrackByCount, ' with trackBy');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent16(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent16(parentView, parentIndex);
}

class _ViewAppComponent17 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent17(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate2('(', local_hero.id, ') ', local_hero.name, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent17(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent17(parentView, parentIndex);
}

class _ViewAppComponent18 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent18(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate2('(', local_hero.id, ') ', local_hero.name, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent18(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent18(parentView, parentIndex);
}

class _ViewAppComponent19 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent19(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate2('(', local_hero.id, ') ', local_hero.name, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent19(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent19(parentView, parentIndex);
}

class _ViewAppComponent20 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent20(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import33.interpolate2('(', local_hero.id, ') ', local_hero.name, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent20(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent20(parentView, parentIndex);
}

class _ViewAppComponent21 extends AppView<import2.AppComponent> {
  import4.Element _el_0;
  import43.ViewMaterialRadioComponent0 _compView_0;
  import44.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import4.Text _text_1;
  var _expr_0;
  bool _expr_1;
  var _expr_2;
  _ViewAppComponent21(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import43.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import44.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewAppComponent0)._MaterialRadioGroupComponent_578_6, null, null);
    _text_1 = new import4.Text('');
    _compView_0.create(_MaterialRadioComponent_0_4, [
      [_text_1]
    ]);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import42.Hero local_h = locals['\$implicit'];
    changed = false;
    final currVal_0 = local_h;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialRadioComponent_0_4.value = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = identical(local_h, _ctx.currentHero);
    if (!identical(_expr_1, currVal_1)) {
      _MaterialRadioComponent_0_4.checked = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_2 = import33.interpolate2('', local_h.name, ' (', local_h.id, ')');
    if (!identical(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewAppComponent0)._query_MaterialRadioComponent_578_0.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_4.ngOnDestroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent21(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent21(parentView, parentIndex);
}

class _ViewAppComponent22 extends AppView<import2.AppComponent> {
  import4.Element _el_0;
  import45.ViewHappyHeroComponent0 _compView_0;
  import46.HappyHeroComponent _HappyHeroComponent_0_4;
  var _expr_0;
  _ViewAppComponent22(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import45.ViewHappyHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _HappyHeroComponent_0_4 = new import46.HappyHeroComponent();
    _compView_0.create(_HappyHeroComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import46.HappyHeroComponent) && (0 == nodeIndex))) {
      return _HappyHeroComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = _ctx.currentHero;
    if (!identical(_expr_0, currVal_0)) {
      _HappyHeroComponent_0_4.hero = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent22(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent22(parentView, parentIndex);
}

class _ViewAppComponent23 extends AppView<import2.AppComponent> {
  import4.Element _el_0;
  import45.ViewSadHeroComponent0 _compView_0;
  import46.SadHeroComponent _SadHeroComponent_0_4;
  var _expr_0;
  _ViewAppComponent23(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import45.ViewSadHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _SadHeroComponent_0_4 = new import46.SadHeroComponent();
    _compView_0.create(_SadHeroComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import46.SadHeroComponent) && (0 == nodeIndex))) {
      return _SadHeroComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = _ctx.currentHero;
    if (!identical(_expr_0, currVal_0)) {
      _SadHeroComponent_0_4.hero = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent23(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent23(parentView, parentIndex);
}

class _ViewAppComponent24 extends AppView<import2.AppComponent> {
  import4.Element _el_0;
  import45.ViewConfusedHeroComponent0 _compView_0;
  import46.ConfusedHeroComponent _ConfusedHeroComponent_0_4;
  var _expr_0;
  _ViewAppComponent24(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import45.ViewConfusedHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _ConfusedHeroComponent_0_4 = new import46.ConfusedHeroComponent();
    _compView_0.create(_ConfusedHeroComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import46.ConfusedHeroComponent) && (0 == nodeIndex))) {
      return _ConfusedHeroComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = _ctx.currentHero;
    if (!identical(_expr_0, currVal_0)) {
      _ConfusedHeroComponent_0_4.hero = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent24(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent24(parentView, parentIndex);
}

class _ViewAppComponent25 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent25(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate1('Are you as confused as ', _ctx.currentHero.name, '?');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent25(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent25(parentView, parentIndex);
}

class _ViewAppComponent26 extends AppView<import2.AppComponent> {
  import4.Element _el_0;
  import45.ViewUnknownHeroComponent0 _compView_0;
  import46.UnknownHeroComponent _UnknownHeroComponent_0_4;
  var _expr_0;
  _ViewAppComponent26(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import45.ViewUnknownHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _UnknownHeroComponent_0_4 = new import46.UnknownHeroComponent();
    _compView_0.create(_UnknownHeroComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import46.UnknownHeroComponent) && (0 == nodeIndex))) {
      return _UnknownHeroComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = _ctx.currentHero;
    if (!identical(_expr_0, currVal_0)) {
      _UnknownHeroComponent_0_4.hero = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent26(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent26(parentView, parentIndex);
}

class _ViewAppComponent27 extends AppView<import2.AppComponent> {
  import4.DivElement _el_0;
  import4.Text _text_1;
  var _expr_0;
  _ViewAppComponent27(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import4.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import4.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = import33.interpolate1('The null hero\'s name is ', _ctx.nullHero.name, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent27(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent27(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_4;
  List<dynamic> __defaultPopupPositions_0_5;
  dynamic __Window_0_6;
  dynamic __DomService_0_7;
  import47.AcxImperativeViewUtils __AcxImperativeViewUtils_0_8;
  dynamic __Document_0_9;
  import48.DomRuler __DomRuler_0_10;
  import49.Angular2ManagedZone __ManagedZone_0_11;
  dynamic __overlayContainerName_0_12;
  dynamic __overlayContainerParent_0_13;
  dynamic __overlayContainer_0_14;
  bool __overlaySyncDom_0_15;
  bool __overlayRepositionLoop_0_16;
  import50.OverlayStyleConfig __OverlayStyleConfig_0_17;
  import51.ZIndexer __ZIndexer_0_18;
  import52.OverlayDomRenderService __OverlayDomRenderService_0_19;
  import53.OverlayService __OverlayService_0_20;
  import54.DomPopupSourceFactory __DomPopupSourceFactory_0_21;
  _ViewAppComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<dynamic> get _defaultPopupPositions_0_5 {
    if ((this.__defaultPopupPositions_0_5 == null)) {
      (__defaultPopupPositions_0_5 = const [const import55.RelativePosition(animationOrigin: 'top center'), const import55.RelativePosition(animationOrigin: 'top right', originX: const import55.Alignment('End', 'flex-end')), const import55.RelativePosition(animationOrigin: 'top left', originX: const import55.Alignment('Start', 'flex-start')), const import55.RelativePosition(animationOrigin: 'bottom center', originY: const import55.Alignment('End', 'flex-end')), const import55.RelativePosition(animationOrigin: 'bottom right', originX: const import55.Alignment('End', 'flex-end'), originY: const import55.Alignment('End', 'flex-end')), const import55.RelativePosition(animationOrigin: 'bottom left', originX: const import55.Alignment('Start', 'flex-start'), originY: const import55.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_5;
  }

  dynamic get _Window_0_6 {
    if ((this.__Window_0_6 == null)) {
      (__Window_0_6 = import56.getWindow());
    }
    return this.__Window_0_6;
  }

  dynamic get _DomService_0_7 {
    if ((this.__DomService_0_7 == null)) {
      (__DomService_0_7 = import57.createDomService(this.injectorGet(import58.DomService, this.viewData.parentIndex, null), this.injectorGet(import59.Disposer, this.viewData.parentIndex, null), this.injectorGet(import36.NgZone, this.viewData.parentIndex), this._Window_0_6));
    }
    return this.__DomService_0_7;
  }

  import47.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_8 {
    if ((this.__AcxImperativeViewUtils_0_8 == null)) {
      (__AcxImperativeViewUtils_0_8 = new import47.AcxImperativeViewUtils(this.injectorGet(import60.ComponentLoader, this.viewData.parentIndex), this._DomService_0_7));
    }
    return this.__AcxImperativeViewUtils_0_8;
  }

  dynamic get _Document_0_9 {
    if ((this.__Document_0_9 == null)) {
      (__Document_0_9 = import56.getDocument());
    }
    return this.__Document_0_9;
  }

  import48.DomRuler get _DomRuler_0_10 {
    if ((this.__DomRuler_0_10 == null)) {
      (__DomRuler_0_10 = new import48.DomRuler(this._Document_0_9, this._DomService_0_7));
    }
    return this.__DomRuler_0_10;
  }

  import49.Angular2ManagedZone get _ManagedZone_0_11 {
    if ((this.__ManagedZone_0_11 == null)) {
      (__ManagedZone_0_11 = new import49.Angular2ManagedZone(this.injectorGet(import36.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_11;
  }

  dynamic get _overlayContainerName_0_12 {
    if ((this.__overlayContainerName_0_12 == null)) {
      (__overlayContainerName_0_12 = import61.getDefaultContainerName(this.injectorGet(const import38.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_12;
  }

  dynamic get _overlayContainerParent_0_13 {
    if ((this.__overlayContainerParent_0_13 == null)) {
      (__overlayContainerParent_0_13 = import61.getOverlayContainerParent(this._Document_0_9, this.injectorGet(const import38.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_13;
  }

  dynamic get _overlayContainer_0_14 {
    if ((this.__overlayContainer_0_14 == null)) {
      (__overlayContainer_0_14 = import61.getDefaultContainer(this._overlayContainerName_0_12, this._overlayContainerParent_0_13, this.injectorGet(const import38.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_0_14;
  }

  bool get _overlaySyncDom_0_15 {
    if ((this.__overlaySyncDom_0_15 == null)) {
      (__overlaySyncDom_0_15 = true);
    }
    return this.__overlaySyncDom_0_15;
  }

  bool get _overlayRepositionLoop_0_16 {
    if ((this.__overlayRepositionLoop_0_16 == null)) {
      (__overlayRepositionLoop_0_16 = false);
    }
    return this.__overlayRepositionLoop_0_16;
  }

  import50.OverlayStyleConfig get _OverlayStyleConfig_0_17 {
    if ((this.__OverlayStyleConfig_0_17 == null)) {
      (__OverlayStyleConfig_0_17 = new import50.OverlayStyleConfig(this._Document_0_9));
    }
    return this.__OverlayStyleConfig_0_17;
  }

  import51.ZIndexer get _ZIndexer_0_18 {
    if ((this.__ZIndexer_0_18 == null)) {
      (__ZIndexer_0_18 = new import51.ZIndexer());
    }
    return this.__ZIndexer_0_18;
  }

  import52.OverlayDomRenderService get _OverlayDomRenderService_0_19 {
    if ((this.__OverlayDomRenderService_0_19 == null)) {
      (__OverlayDomRenderService_0_19 = new import52.OverlayDomRenderService(this._OverlayStyleConfig_0_17, this._overlayContainer_0_14, this._overlayContainerName_0_12, this._DomRuler_0_10, this._DomService_0_7, this._AcxImperativeViewUtils_0_8, this._overlaySyncDom_0_15, this._overlayRepositionLoop_0_16, this._ZIndexer_0_18));
    }
    return this.__OverlayDomRenderService_0_19;
  }

  import53.OverlayService get _OverlayService_0_20 {
    if ((this.__OverlayService_0_20 == null)) {
      (__OverlayService_0_20 = new import53.OverlayService(this.injectorGet(import36.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_15, this._OverlayDomRenderService_0_19, this.injectorGet(import53.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_20;
  }

  import54.DomPopupSourceFactory get _DomPopupSourceFactory_0_21 {
    if ((this.__DomPopupSourceFactory_0_21 == null)) {
      (__DomPopupSourceFactory_0_21 = new import54.DomPopupSourceFactory(this._DomRuler_0_10));
    }
    return this.__DomPopupSourceFactory_0_21;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_4 = new import2.AppComponent();
    _compView_0.create(_AppComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.AppComponent>(0, this, rootEl, _AppComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.AppComponent) && (0 == nodeIndex))) {
      return _AppComponent_0_4;
    }
    if ((identical(token, const import38.OpaqueToken('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_5;
    }
    if ((identical(token, import4.Window) && (0 == nodeIndex))) {
      return _Window_0_6;
    }
    if ((identical(token, import58.DomService) && (0 == nodeIndex))) {
      return _DomService_0_7;
    }
    if ((identical(token, import47.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_8;
    }
    if ((identical(token, import4.Document) && (0 == nodeIndex))) {
      return _Document_0_9;
    }
    if ((identical(token, import48.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_10;
    }
    if ((identical(token, import62.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_11;
    }
    if ((identical(token, const import38.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_12;
    }
    if ((identical(token, const import38.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_13;
    }
    if ((identical(token, const import38.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_14;
    }
    if ((identical(token, const import38.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_15;
    }
    if ((identical(token, const import38.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_16;
    }
    if ((identical(token, import50.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_17;
    }
    if ((identical(token, import51.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_18;
    }
    if ((identical(token, import52.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_19;
    }
    if ((identical(token, import53.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_20;
    }
    if ((identical(token, import54.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_21;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _AppComponent_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
    if (firstCheck) {
      _AppComponent_0_4.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, num parentIndex) {
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
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ngRef.registerComponent(
    AppComponent,
    AppComponentNgFactory,
  );
}
