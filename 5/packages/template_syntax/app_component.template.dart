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
import 'src/hero_detail_component.dart';
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
import 'src/hero_detail_component.template.dart' as _ref5;
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
import 'src/hero_detail_component.template.dart' as import7;
import 'src/hero_detail_component.dart' as import8;
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
import 'package:angular/src/core/linker/element_ref.dart';
import 'src/hero.dart' as import42;
import 'package:angular_components/material_radio/material_radio.template.dart' as import43;
import 'package:angular_components/material_radio/material_radio.dart' as import44;
import 'src/hero_switch_components.template.dart' as import45;
import 'src/hero_switch_components.dart' as import46;
import 'package:angular_components/laminate/enums/alignment.dart' as import47;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import48;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import49;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import50;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import51;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import52;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import53;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import54;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import55;
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
  import7.ViewHeroDetailComponent0 _compView_164;
  import8.HeroDetailComponent _HeroDetailComponent_164_5;
  import3.Element _el_165;
  import3.Element _el_166;
  import3.DivElement _el_167;
  import3.ButtonElement _el_168;
  import3.Element _el_170;
  import3.Element _el_171;
  import3.DivElement _el_172;
  import3.Element _el_173;
  import3.Element _el_174;
  import7.ViewHeroDetailComponent0 _compView_174;
  import8.HeroDetailComponent _HeroDetailComponent_174_5;
  import3.DivElement _el_175;
  import9.NgClass _NgClass_175_5;
  import3.Element _el_176;
  import3.Element _el_177;
  import3.ButtonElement _el_178;
  import3.Element _el_180;
  import7.ViewHeroDetailComponent0 _compView_180;
  import8.HeroDetailComponent _HeroDetailComponent_180_5;
  import3.DivElement _el_181;
  import10.ClickDirective _ClickDirective_181_5;
  import3.Text _text_183;
  import3.Element _el_184;
  import3.Element _el_185;
  import3.DivElement _el_186;
  import3.InputElement _el_188;
  import11.DefaultValueAccessor _DefaultValueAccessor_188_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_188_6;
  import13.NgModel _NgModel_188_7;
  import3.Text _text_189;
  import3.Element _el_190;
  import3.Element _el_191;
  import3.ButtonElement _el_192;
  import3.Element _el_194;
  import3.Element _el_195;
  import3.DivElement _el_196;
  import3.Element _el_198;
  import3.Element _el_199;
  import3.ButtonElement _el_200;
  import3.AnchorElement _el_202;
  import3.Element _el_204;
  import3.Element _el_205;
  import3.Element _el_207;
  import3.Element _el_208;
  import3.Element _el_209;
  import3.Element _el_210;
  import3.Element _el_211;
  import3.Element _el_212;
  import3.AnchorElement _el_213;
  import3.Element _el_215;
  import3.Element _el_216;
  import3.ButtonElement _el_218;
  import3.ButtonElement _el_220;
  import3.ButtonElement _el_222;
  import3.Element _el_224;
  import3.Element _el_225;
  import3.ButtonElement _el_226;
  import3.ButtonElement _el_228;
  import3.Element _el_230;
  import3.Element _el_231;
  import3.ButtonElement _el_232;
  import3.ButtonElement _el_234;
  import3.AnchorElement _el_236;
  import3.Element _el_238;
  import3.Element _el_239;
  import3.Element _el_241;
  import3.ButtonElement _el_242;
  import3.DivElement _el_244;
  import9.NgClass _NgClass_244_5;
  import3.Element _el_246;
  import7.ViewHeroDetailComponent0 _compView_246;
  import8.HeroDetailComponent _HeroDetailComponent_246_5;
  import3.Element _el_247;
  import3.Element _el_248;
  import7.ViewHeroDetailComponent0 _compView_248;
  import8.HeroDetailComponent _HeroDetailComponent_248_5;
  import3.Element _el_249;
  import3.Element _el_250;
  import3.Element _el_252;
  import3.Element _el_255;
  import3.Element _el_256;
  import3.Element _el_258;
  import3.Element _el_261;
  import3.Element _el_262;
  import3.Text _text_264;
  import3.Element _el_266;
  import3.Element _el_269;
  import3.Element _el_271;
  import3.Element _el_273;
  import3.Element _el_276;
  import3.Element _el_277;
  import3.Text _text_279;
  import3.Element _el_281;
  import3.Element _el_284;
  import3.Element _el_286;
  import3.Element _el_288;
  import3.AnchorElement _el_291;
  import3.Element _el_293;
  import3.Element _el_294;
  import3.TableElement _el_296;
  import3.Element _el_297;
  import3.Element _el_298;
  import3.Element _el_300;
  import3.Element _el_301;
  import3.Element _el_303;
  import3.Element _el_305;
  import3.ButtonElement _el_306;
  import3.Text _text_307;
  import3.Element _el_309;
  import3.Element _el_310;
  import3.DivElement _el_311;
  import3.ButtonElement _el_312;
  import3.ButtonElement _el_314;
  import3.ButtonElement _el_316;
  import3.AnchorElement _el_318;
  import3.Element _el_320;
  import3.Element _el_321;
  import3.DivElement _el_323;
  import3.DivElement _el_325;
  import3.DivElement _el_327;
  import3.DivElement _el_329;
  import3.DivElement _el_331;
  import3.AnchorElement _el_333;
  import3.Element _el_335;
  import3.Element _el_336;
  import3.ButtonElement _el_338;
  import3.ButtonElement _el_340;
  import3.ButtonElement _el_342;
  import3.ButtonElement _el_344;
  import3.AnchorElement _el_346;
  import3.Element _el_348;
  import3.Element _el_349;
  import3.ButtonElement _el_351;
  import3.ButtonElement _el_353;
  import3.DivElement _el_355;
  import3.DivElement _el_356;
  import10.ClickDirective _ClickDirective_356_5;
  import3.Text _text_358;
  import3.Element _el_359;
  import7.ViewHeroDetailComponent0 _compView_359;
  import8.HeroDetailComponent _HeroDetailComponent_359_5;
  import3.Element _el_360;
  import3.Element _el_361;
  import7.ViewBigHeroDetailComponent0 _compView_361;
  import8.BigHeroDetailComponent _BigHeroDetailComponent_361_5;
  import3.DivElement _el_362;
  import3.DivElement _el_364;
  import3.DivElement _el_366;
  import3.ButtonElement _el_367;
  import3.DivElement _el_369;
  import3.ButtonElement _el_370;
  import3.AnchorElement _el_372;
  import3.Element _el_374;
  import3.Element _el_375;
  import3.DivElement _el_377;
  import3.Element _el_378;
  import14.ViewSizerComponent0 _compView_378;
  import15.SizerComponent _SizerComponent_378_5;
  import3.DivElement _el_379;
  import3.Element _el_381;
  import3.InputElement _el_383;
  import11.DefaultValueAccessor _DefaultValueAccessor_383_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_383_6;
  import13.NgModel _NgModel_383_7;
  import3.Text _text_385;
  import3.Element _el_386;
  import3.DivElement _el_387;
  import3.Element _el_388;
  import3.Element _el_390;
  import14.ViewSizerComponent0 _compView_390;
  import15.SizerComponent _SizerComponent_390_5;
  import3.AnchorElement _el_391;
  import3.Element _el_393;
  import3.Element _el_394;
  import3.Element _el_396;
  import3.Text _text_398;
  import3.InputElement _el_399;
  import3.Element _el_401;
  import3.InputElement _el_402;
  import11.DefaultValueAccessor _DefaultValueAccessor_402_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_402_6;
  import13.NgModel _NgModel_402_7;
  import3.Element _el_404;
  import3.InputElement _el_405;
  import11.DefaultValueAccessor _DefaultValueAccessor_405_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_405_6;
  import13.NgModel _NgModel_405_7;
  import3.Element _el_407;
  import3.InputElement _el_408;
  import11.DefaultValueAccessor _DefaultValueAccessor_408_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_408_6;
  import13.NgModel _NgModel_408_7;
  import3.AnchorElement _el_410;
  import3.Element _el_412;
  import3.Element _el_413;
  import3.Element _el_415;
  import3.Text _text_417;
  import3.DivElement _el_418;
  import9.NgClass _NgClass_418_5;
  import3.Element _el_420;
  import3.Element _el_421;
  import3.InputElement _el_423;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_423_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_423_6;
  import13.NgModel _NgModel_423_7;
  import3.Element _el_425;
  import3.InputElement _el_427;
  import3.Element _el_429;
  import3.InputElement _el_431;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_431_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_431_6;
  import13.NgModel _NgModel_431_7;
  import3.ButtonElement _el_432;
  import3.Element _el_434;
  import3.Element _el_435;
  import3.DivElement _el_436;
  import9.NgClass _NgClass_436_5;
  import3.Text _text_438;
  import3.Text _text_440;
  import3.Text _text_442;
  import3.Element _el_444;
  import3.Element _el_445;
  import3.DivElement _el_446;
  import9.NgClass _NgClass_446_5;
  import3.DivElement _el_448;
  import3.DivElement _el_450;
  import9.NgClass _NgClass_450_5;
  import3.AnchorElement _el_452;
  import3.Element _el_454;
  import3.Element _el_455;
  import3.DivElement _el_457;
  import3.Element _el_459;
  import3.Element _el_461;
  import3.Text _text_463;
  import3.DivElement _el_464;
  import17.NgStyle _NgStyle_464_5;
  import3.Element _el_466;
  import3.Element _el_467;
  import3.InputElement _el_469;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_469_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_469_6;
  import13.NgModel _NgModel_469_7;
  import3.Element _el_471;
  import3.InputElement _el_473;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_473_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_473_6;
  import13.NgModel _NgModel_473_7;
  import3.Element _el_475;
  import3.InputElement _el_477;
  import16.CheckboxControlValueAccessor _CheckboxControlValueAccessor_477_5;
  List<import12.ControlValueAccessor<dynamic>> _NgValueAccessor_477_6;
  import13.NgModel _NgModel_477_7;
  import3.ButtonElement _el_478;
  import3.Element _el_480;
  import3.Element _el_481;
  import3.DivElement _el_482;
  import17.NgStyle _NgStyle_482_5;
  import3.Text _text_484;
  import3.Text _text_486;
  import3.Text _text_488;
  import3.AnchorElement _el_490;
  import3.Element _el_492;
  import3.Element _el_493;
  ViewContainer _appEl_495;
  NgIf _NgIf_495_9;
  ViewContainer _appEl_496;
  NgIf _NgIf_496_9;
  ViewContainer _appEl_497;
  NgIf _NgIf_497_9;
  ViewContainer _appEl_498;
  NgIf _NgIf_498_9;
  import3.DivElement _el_499;
  ViewContainer _appEl_501;
  NgIf _NgIf_501_9;
  import3.DivElement _el_502;
  import3.DivElement _el_504;
  import3.Element _el_506;
  import7.ViewHeroDetailComponent0 _compView_506;
  import8.HeroDetailComponent _HeroDetailComponent_506_5;
  import3.DivElement _el_507;
  import3.DivElement _el_509;
  import3.AnchorElement _el_511;
  import3.Element _el_513;
  import3.Element _el_514;
  import3.DivElement _el_516;
  ViewContainer _appEl_517;
  import5.NgFor _NgFor_517_9;
  import3.Element _el_518;
  import3.DivElement _el_519;
  ViewContainer _appEl_520;
  import5.NgFor _NgFor_520_9;
  import3.AnchorElement _el_521;
  import3.Element _el_523;
  import3.DivElement _el_525;
  ViewContainer _appEl_526;
  import5.NgFor _NgFor_526_9;
  import3.AnchorElement _el_527;
  import3.Element _el_529;
  import3.ButtonElement _el_531;
  import3.ButtonElement _el_533;
  import3.ButtonElement _el_535;
  import3.Element _el_537;
  import3.Element _el_538;
  import3.DivElement _el_541;
  ViewContainer _appEl_542;
  import5.NgFor _NgFor_542_9;
  ViewContainer _appEl_543;
  NgIf _NgIf_543_9;
  import3.Element _el_544;
  import3.Element _el_546;
  import3.DivElement _el_548;
  ViewContainer _appEl_549;
  import5.NgFor _NgFor_549_9;
  ViewContainer _appEl_550;
  NgIf _NgIf_550_9;
  import3.Element _el_551;
  import3.Element _el_553;
  import3.DivElement _el_555;
  ViewContainer _appEl_556;
  import5.NgFor _NgFor_556_9;
  import3.AnchorElement _el_557;
  import3.Element _el_559;
  import3.Element _el_560;
  import3.Element _el_562;
  import3.Element _el_564;
  import19.ViewMaterialRadioGroupComponent0 _compView_564;
  import13.NgModel _NgModel_564_5;
  import13.NgModel _NgControl_564_6;
  import20.MaterialRadioGroupComponent _MaterialRadioGroupComponent_564_7;
  bool _query_MaterialRadioComponent_564_0_isDirty = true;
  ViewContainer _appEl_565;
  import5.NgFor _NgFor_565_9;
  import3.Element _el_566;
  import3.Text _text_568;
  import3.Text _text_570;
  import3.DivElement _el_572;
  import21.NgSwitch _NgSwitch_572_5;
  ViewContainer _appEl_573;
  import21.NgSwitchWhen _NgSwitchWhen_573_9;
  ViewContainer _appEl_574;
  import21.NgSwitchWhen _NgSwitchWhen_574_9;
  ViewContainer _appEl_575;
  import21.NgSwitchWhen _NgSwitchWhen_575_9;
  ViewContainer _appEl_576;
  import21.NgSwitchWhen _NgSwitchWhen_576_9;
  ViewContainer _appEl_577;
  import21.NgSwitchDefault _NgSwitchDefault_577_9;
  import3.AnchorElement _el_578;
  import3.Element _el_580;
  import3.Element _el_581;
  import3.InputElement _el_583;
  import3.ButtonElement _el_584;
  import3.ButtonElement _el_586;
  import3.Element _el_587;
  import3.Element _el_589;
  import22.ViewHeroFormComponent0 _compView_589;
  import23.HeroFormComponent _HeroFormComponent_589_5;
  import3.AnchorElement _el_590;
  import3.Element _el_592;
  import3.Element _el_593;
  import3.Element _el_595;
  import3.ButtonElement _el_596;
  import3.Element _el_598;
  import7.ViewHeroDetailComponent0 _compView_598;
  import8.HeroDetailComponent _HeroDetailComponent_598_5;
  import3.DivElement _el_599;
  import10.ClickDirective _ClickDirective_599_5;
  import3.Text _text_601;
  import3.AnchorElement _el_602;
  import3.Element _el_604;
  import3.Element _el_605;
  import3.DivElement _el_607;
  import3.Text _text_609;
  import3.DivElement _el_610;
  import3.Text _text_612;
  import3.DivElement _el_613;
  import3.Text _text_615;
  import3.DivElement _el_616;
  import3.Text _text_617;
  import3.DivElement _el_618;
  import3.Text _text_620;
  import3.DivElement _el_621;
  import3.Element _el_622;
  import3.Text _text_624;
  import3.AnchorElement _el_625;
  import3.Element _el_627;
  import3.Element _el_628;
  import3.Element _el_630;
  import3.DivElement _el_632;
  import3.Text _text_634;
  import3.DivElement _el_635;
  import3.Text _text_637;
  import3.DivElement _el_638;
  import3.Text _text_640;
  ViewContainer _appEl_641;
  NgIf _NgIf_641_9;
  import3.DivElement _el_642;
  import3.Text _text_644;
  import3.AnchorElement _el_645;
  import3.Element _el_647;
  import3.Element _el_648;
  import3.Element _el_650;
  import3.Text _text_652;
  import3.Element _el_654;
  import3.Text _text_656;
  import3.Text _text_658;
  import3.Element _el_660;
  import3.ButtonElement _el_661;
  import3.AnchorElement _el_663;
  var _expr_0;
  var _expr_1;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_9;
  var _expr_11;
  var _map_0;
  var _expr_12;
  var _expr_13;
  var _expr_15;
  var _expr_16;
  bool _expr_17;
  var _expr_18;
  var _expr_23;
  var _expr_24;
  var _expr_25;
  var _expr_27;
  var _expr_28;
  var _expr_29;
  var _expr_31;
  var _expr_35;
  var _expr_36;
  var _expr_37;
  var _expr_38;
  var _expr_39;
  var _expr_40;
  var _expr_41;
  var _expr_42;
  var _expr_43;
  String _expr_45;
  bool _expr_46;
  bool _expr_47;
  bool _expr_48;
  var _expr_49;
  var _expr_50;
  var _expr_51;
  var _expr_52;
  var _expr_53;
  var _expr_54;
  var _expr_55;
  var _expr_56;
  var _expr_57;
  var _expr_59;
  var _expr_60;
  var _expr_61;
  var _expr_62;
  var _expr_66;
  var _expr_67;
  var _expr_69;
  var _expr_71;
  var _expr_72;
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
  var _expr_85;
  var _expr_86;
  bool _expr_92;
  bool _expr_93;
  bool _expr_94;
  var _expr_95;
  var _expr_96;
  var _expr_109;
  var _expr_110;
  var _expr_111;
  var _expr_116;
  var _expr_117;
  var _expr_119;
  var _expr_120;
  var _expr_121;
  var _expr_122;
  var _expr_123;
  var _expr_124;
  var _expr_125;
  var _expr_126;
  var _expr_127;
  var _expr_128;
  var _expr_129;
  var _expr_131;
  var _expr_132;
  var _expr_133;
  var _expr_134;
  var _expr_135;
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
    rootEl = import3.document.createElement('my-app');
    _renderType ??= import33.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
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
    _text_100 = new import3.Text('');
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
    var _anchor_117 = ngAnchor.clone(false);
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
    var _anchor_143 = ngAnchor.clone(false);
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
    _compView_164 = new import7.ViewHeroDetailComponent0(this, 164);
    _el_164 = _compView_164.rootEl;
    _el_161.append(_el_164);
    addShimC(_el_164);
    _HeroDetailComponent_164_5 = new import8.HeroDetailComponent();
    _compView_164.create(_HeroDetailComponent_164_5, []);
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
    _compView_174 = new import7.ViewHeroDetailComponent0(this, 174);
    _el_174 = _compView_174.rootEl;
    _el_172.append(_el_174);
    addShimC(_el_174);
    _HeroDetailComponent_174_5 = new import8.HeroDetailComponent();
    _compView_174.create(_HeroDetailComponent_174_5, []);
    _el_175 = createDivAndAppend(doc, _el_172);
    addShimC(_el_175);
    _NgClass_175_5 = new import9.NgClass(_el_175);
    _el_176 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_176);
    _el_177 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_177);
    _el_178 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_178);
    import3.Text _text_179 = new import3.Text('Save');
    _el_178.append(_text_179);
    _compView_180 = new import7.ViewHeroDetailComponent0(this, 180);
    _el_180 = _compView_180.rootEl;
    parentRenderNode.append(_el_180);
    addShimC(_el_180);
    _HeroDetailComponent_180_5 = new import8.HeroDetailComponent();
    _compView_180.create(_HeroDetailComponent_180_5, []);
    _el_181 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_181, 'clickable', '');
    addShimC(_el_181);
    _ClickDirective_181_5 = new import10.ClickDirective(_el_181);
    import3.Text _text_182 = new import3.Text('click me');
    _el_181.append(_text_182);
    _text_183 = new import3.Text('');
    parentRenderNode.append(_text_183);
    _el_184 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_184);
    _el_185 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_185);
    _el_186 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_186);
    import3.Text _text_187 = new import3.Text('Hero Name:');
    _el_186.append(_text_187);
    _el_188 = createAndAppend(doc, 'input', _el_186);
    addShimC(_el_188);
    _DefaultValueAccessor_188_5 = new import11.DefaultValueAccessor(_el_188);
    _NgValueAccessor_188_6 = [_DefaultValueAccessor_188_5];
    _NgModel_188_7 = new import13.NgModel(null, _NgValueAccessor_188_6);
    _text_189 = new import3.Text('');
    _el_186.append(_text_189);
    _el_190 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_190);
    _el_191 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_191);
    _el_192 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_192);
    import3.Text _text_193 = new import3.Text('help');
    _el_192.append(_text_193);
    _el_194 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_194);
    _el_195 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_195);
    _el_196 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_196);
    import3.Text _text_197 = new import3.Text('Special');
    _el_196.append(_text_197);
    _el_198 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_198);
    _el_199 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_199);
    _el_200 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_200);
    import3.Text _text_201 = new import3.Text('button');
    _el_200.append(_text_201);
    _el_202 = createAndAppend(doc, 'a', parentRenderNode);
    _el_202.className = 'to-toc';
    createAttr(_el_202, 'href', '#toc');
    addShimC(_el_202);
    import3.Text _text_203 = new import3.Text('top');
    _el_202.append(_text_203);
    _el_204 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_204);
    _el_205 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_205, 'id', 'prop-vs-attrib');
    addShimE(_el_205);
    import3.Text _text_206 = new import3.Text('Property vs. Attribute (img examples)');
    _el_205.append(_text_206);
    _el_207 = createAndAppend(doc, 'img', parentRenderNode);
    createAttr(_el_207, 'src', 'assets/images/ng-logo.png');
    addShimE(_el_207);
    _el_208 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_208);
    _el_209 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_209);
    _el_210 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_210);
    _el_211 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_211);
    _el_212 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_212);
    _el_213 = createAndAppend(doc, 'a', parentRenderNode);
    _el_213.className = 'to-toc';
    createAttr(_el_213, 'href', '#toc');
    addShimC(_el_213);
    import3.Text _text_214 = new import3.Text('top');
    _el_213.append(_text_214);
    _el_215 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_215);
    _el_216 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_216, 'id', 'buttons');
    addShimE(_el_216);
    import3.Text _text_217 = new import3.Text('Buttons');
    _el_216.append(_text_217);
    _el_218 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_218);
    import3.Text _text_219 = new import3.Text('Enabled (but does nothing)');
    _el_218.append(_text_219);
    _el_220 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_220, 'disabled', '');
    addShimC(_el_220);
    import3.Text _text_221 = new import3.Text('Disabled');
    _el_220.append(_text_221);
    _el_222 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_222, 'disabled', 'false');
    addShimC(_el_222);
    import3.Text _text_223 = new import3.Text('Still disabled');
    _el_222.append(_text_223);
    _el_224 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_224);
    _el_225 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_225);
    _el_226 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_226, 'disabled', '');
    addShimC(_el_226);
    import3.Text _text_227 = new import3.Text('disabled by attribute');
    _el_226.append(_text_227);
    _el_228 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_228);
    import3.Text _text_229 = new import3.Text('disabled by property binding');
    _el_228.append(_text_229);
    _el_230 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_230);
    _el_231 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_231);
    _el_232 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_232);
    import3.Text _text_233 = new import3.Text('Disabled Cancel');
    _el_232.append(_text_233);
    _el_234 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_234);
    import3.Text _text_235 = new import3.Text('Enabled Save');
    _el_234.append(_text_235);
    _el_236 = createAndAppend(doc, 'a', parentRenderNode);
    _el_236.className = 'to-toc';
    createAttr(_el_236, 'href', '#toc');
    addShimC(_el_236);
    import3.Text _text_237 = new import3.Text('top');
    _el_236.append(_text_237);
    _el_238 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_238);
    _el_239 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_239, 'id', 'property-binding');
    addShimE(_el_239);
    import3.Text _text_240 = new import3.Text('Property Binding');
    _el_239.append(_text_240);
    _el_241 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_241);
    _el_242 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_242);
    import3.Text _text_243 = new import3.Text('Cancel is disabled');
    _el_242.append(_text_243);
    _el_244 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_244);
    _NgClass_244_5 = new import9.NgClass(_el_244);
    import3.Text _text_245 = new import3.Text('[ngClass] binding to the classes property');
    _el_244.append(_text_245);
    _compView_246 = new import7.ViewHeroDetailComponent0(this, 246);
    _el_246 = _compView_246.rootEl;
    parentRenderNode.append(_el_246);
    addShimC(_el_246);
    _HeroDetailComponent_246_5 = new import8.HeroDetailComponent();
    _compView_246.create(_HeroDetailComponent_246_5, []);
    _el_247 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_247);
    _compView_248 = new import7.ViewHeroDetailComponent0(this, 248);
    _el_248 = _compView_248.rootEl;
    parentRenderNode.append(_el_248);
    createAttr(_el_248, 'prefix', 'You are my');
    addShimC(_el_248);
    _HeroDetailComponent_248_5 = new import8.HeroDetailComponent();
    _compView_248.create(_HeroDetailComponent_248_5, []);
    _el_249 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_249);
    _el_250 = createAndAppend(doc, 'img', _el_249);
    addShimE(_el_250);
    import3.Text _text_251 = new import3.Text('is the');
    _el_249.append(_text_251);
    _el_252 = createAndAppend(doc, 'i', _el_249);
    addShimE(_el_252);
    import3.Text _text_253 = new import3.Text('interpolated');
    _el_252.append(_text_253);
    import3.Text _text_254 = new import3.Text('image.');
    _el_249.append(_text_254);
    _el_255 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_255);
    _el_256 = createAndAppend(doc, 'img', _el_255);
    addShimE(_el_256);
    import3.Text _text_257 = new import3.Text('is the');
    _el_255.append(_text_257);
    _el_258 = createAndAppend(doc, 'i', _el_255);
    addShimE(_el_258);
    import3.Text _text_259 = new import3.Text('property bound');
    _el_258.append(_text_259);
    import3.Text _text_260 = new import3.Text('image.');
    _el_255.append(_text_260);
    _el_261 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_261);
    _el_262 = createSpanAndAppend(doc, _el_261);
    addShimE(_el_262);
    import3.Text _text_263 = new import3.Text('"');
    _el_262.append(_text_263);
    _text_264 = new import3.Text('');
    _el_262.append(_text_264);
    import3.Text _text_265 = new import3.Text('" is the ');
    _el_262.append(_text_265);
    _el_266 = createAndAppend(doc, 'i', _el_262);
    addShimE(_el_266);
    import3.Text _text_267 = new import3.Text('interpolated');
    _el_266.append(_text_267);
    import3.Text _text_268 = new import3.Text('title.');
    _el_262.append(_text_268);
    _el_269 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_269);
    import3.Text _text_270 = new import3.Text('"');
    _el_269.append(_text_270);
    _el_271 = createSpanAndAppend(doc, _el_269);
    addShimE(_el_271);
    import3.Text _text_272 = new import3.Text('" is the');
    _el_269.append(_text_272);
    _el_273 = createAndAppend(doc, 'i', _el_269);
    addShimE(_el_273);
    import3.Text _text_274 = new import3.Text('property bound');
    _el_273.append(_text_274);
    import3.Text _text_275 = new import3.Text('title.');
    _el_269.append(_text_275);
    _el_276 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_276);
    _el_277 = createSpanAndAppend(doc, _el_276);
    addShimE(_el_277);
    import3.Text _text_278 = new import3.Text('"');
    _el_277.append(_text_278);
    _text_279 = new import3.Text('');
    _el_277.append(_text_279);
    import3.Text _text_280 = new import3.Text('" is the ');
    _el_277.append(_text_280);
    _el_281 = createAndAppend(doc, 'i', _el_277);
    addShimE(_el_281);
    import3.Text _text_282 = new import3.Text('interpolated');
    _el_281.append(_text_282);
    import3.Text _text_283 = new import3.Text('evil title.');
    _el_277.append(_text_283);
    _el_284 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_284);
    import3.Text _text_285 = new import3.Text('"');
    _el_284.append(_text_285);
    _el_286 = createSpanAndAppend(doc, _el_284);
    addShimE(_el_286);
    import3.Text _text_287 = new import3.Text('" is the');
    _el_284.append(_text_287);
    _el_288 = createAndAppend(doc, 'i', _el_284);
    addShimE(_el_288);
    import3.Text _text_289 = new import3.Text('property bound');
    _el_288.append(_text_289);
    import3.Text _text_290 = new import3.Text('evil title.');
    _el_284.append(_text_290);
    _el_291 = createAndAppend(doc, 'a', parentRenderNode);
    _el_291.className = 'to-toc';
    createAttr(_el_291, 'href', '#toc');
    addShimC(_el_291);
    import3.Text _text_292 = new import3.Text('top');
    _el_291.append(_text_292);
    _el_293 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_293);
    _el_294 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_294, 'id', 'attribute-binding');
    addShimE(_el_294);
    import3.Text _text_295 = new import3.Text('Attribute Binding');
    _el_294.append(_text_295);
    _el_296 = createAndAppend(doc, 'table', parentRenderNode);
    createAttr(_el_296, 'border', '1');
    addShimC(_el_296);
    _el_297 = createAndAppend(doc, 'tr', _el_296);
    addShimE(_el_297);
    _el_298 = createAndAppend(doc, 'td', _el_297);
    addShimE(_el_298);
    import3.Text _text_299 = new import3.Text('One-Two');
    _el_298.append(_text_299);
    _el_300 = createAndAppend(doc, 'tr', _el_296);
    addShimE(_el_300);
    _el_301 = createAndAppend(doc, 'td', _el_300);
    addShimE(_el_301);
    import3.Text _text_302 = new import3.Text('Five');
    _el_301.append(_text_302);
    _el_303 = createAndAppend(doc, 'td', _el_300);
    addShimE(_el_303);
    import3.Text _text_304 = new import3.Text('Six');
    _el_303.append(_text_304);
    _el_305 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_305);
    _el_306 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_306);
    _text_307 = new import3.Text('');
    _el_306.append(_text_307);
    import3.Text _text_308 = new import3.Text(' with Aria');
    _el_306.append(_text_308);
    _el_309 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_309);
    _el_310 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_310);
    _el_311 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_311);
    _el_312 = createAndAppend(doc, 'button', _el_311);
    addShimC(_el_312);
    import3.Text _text_313 = new import3.Text('Disabled');
    _el_312.append(_text_313);
    _el_314 = createAndAppend(doc, 'button', _el_311);
    addShimC(_el_314);
    import3.Text _text_315 = new import3.Text('Disabled as well');
    _el_314.append(_text_315);
    _el_316 = createAndAppend(doc, 'button', _el_311);
    createAttr(_el_316, 'disabled', '');
    addShimC(_el_316);
    import3.Text _text_317 = new import3.Text('Enabled (but inert)');
    _el_316.append(_text_317);
    _el_318 = createAndAppend(doc, 'a', parentRenderNode);
    _el_318.className = 'to-toc';
    createAttr(_el_318, 'href', '#toc');
    addShimC(_el_318);
    import3.Text _text_319 = new import3.Text('top');
    _el_318.append(_text_319);
    _el_320 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_320);
    _el_321 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_321, 'id', 'class-binding');
    addShimE(_el_321);
    import3.Text _text_322 = new import3.Text('Class Binding');
    _el_321.append(_text_322);
    _el_323 = createDivAndAppend(doc, parentRenderNode);
    _el_323.className = 'bad curly special';
    addShimC(_el_323);
    import3.Text _text_324 = new import3.Text('Bad curly special');
    _el_323.append(_text_324);
    _el_325 = createDivAndAppend(doc, parentRenderNode);
    _el_325.className = 'bad curly special';
    addShimC(_el_325);
    import3.Text _text_326 = new import3.Text('Bad curly');
    _el_325.append(_text_326);
    _el_327 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_327);
    import3.Text _text_328 = new import3.Text('The class binding is special');
    _el_327.append(_text_328);
    _el_329 = createDivAndAppend(doc, parentRenderNode);
    _el_329.className = 'special';
    addShimC(_el_329);
    import3.Text _text_330 = new import3.Text('This one is not so special');
    _el_329.append(_text_330);
    _el_331 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_331);
    import3.Text _text_332 = new import3.Text('This class binding is special too');
    _el_331.append(_text_332);
    _el_333 = createAndAppend(doc, 'a', parentRenderNode);
    _el_333.className = 'to-toc';
    createAttr(_el_333, 'href', '#toc');
    addShimC(_el_333);
    import3.Text _text_334 = new import3.Text('top');
    _el_333.append(_text_334);
    _el_335 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_335);
    _el_336 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_336, 'id', 'style-binding');
    addShimE(_el_336);
    import3.Text _text_337 = new import3.Text('Style Binding');
    _el_336.append(_text_337);
    _el_338 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_338);
    import3.Text _text_339 = new import3.Text('Red');
    _el_338.append(_text_339);
    _el_340 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_340);
    import3.Text _text_341 = new import3.Text('Save');
    _el_340.append(_text_341);
    _el_342 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_342);
    import3.Text _text_343 = new import3.Text('Big');
    _el_342.append(_text_343);
    _el_344 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_344);
    import3.Text _text_345 = new import3.Text('Small');
    _el_344.append(_text_345);
    _el_346 = createAndAppend(doc, 'a', parentRenderNode);
    _el_346.className = 'to-toc';
    createAttr(_el_346, 'href', '#toc');
    addShimC(_el_346);
    import3.Text _text_347 = new import3.Text('top');
    _el_346.append(_text_347);
    _el_348 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_348);
    _el_349 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_349, 'id', 'event-binding');
    addShimE(_el_349);
    import3.Text _text_350 = new import3.Text('Event Binding');
    _el_349.append(_text_350);
    _el_351 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_351);
    import3.Text _text_352 = new import3.Text('Save');
    _el_351.append(_text_352);
    _el_353 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_353);
    import3.Text _text_354 = new import3.Text('On Save');
    _el_353.append(_text_354);
    _el_355 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_355);
    _el_356 = createDivAndAppend(doc, _el_355);
    createAttr(_el_356, 'clickable', '');
    addShimC(_el_356);
    _ClickDirective_356_5 = new import10.ClickDirective(_el_356);
    import3.Text _text_357 = new import3.Text('click with myClick');
    _el_356.append(_text_357);
    _text_358 = new import3.Text('');
    _el_355.append(_text_358);
    _compView_359 = new import7.ViewHeroDetailComponent0(this, 359);
    _el_359 = _compView_359.rootEl;
    parentRenderNode.append(_el_359);
    addShimC(_el_359);
    _HeroDetailComponent_359_5 = new import8.HeroDetailComponent();
    _compView_359.create(_HeroDetailComponent_359_5, []);
    _el_360 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_360);
    _compView_361 = new import7.ViewBigHeroDetailComponent0(this, 361);
    _el_361 = _compView_361.rootEl;
    parentRenderNode.append(_el_361);
    addShimC(_el_361);
    _BigHeroDetailComponent_361_5 = new import8.BigHeroDetailComponent();
    _compView_361.create(_BigHeroDetailComponent_361_5, []);
    _el_362 = createDivAndAppend(doc, parentRenderNode);
    _el_362.className = 'parent-div';
    createAttr(_el_362, 'clickable', '');
    addShimC(_el_362);
    import3.Text _text_363 = new import3.Text('Click me');
    _el_362.append(_text_363);
    _el_364 = createDivAndAppend(doc, _el_362);
    _el_364.className = 'child-div';
    addShimC(_el_364);
    import3.Text _text_365 = new import3.Text('Click me too!');
    _el_364.append(_text_365);
    _el_366 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_366, 'clickable', '');
    addShimC(_el_366);
    _el_367 = createAndAppend(doc, 'button', _el_366);
    addShimC(_el_367);
    import3.Text _text_368 = new import3.Text('Save, no propagation');
    _el_367.append(_text_368);
    _el_369 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_369, 'clickable', '');
    addShimC(_el_369);
    _el_370 = createAndAppend(doc, 'button', _el_369);
    addShimC(_el_370);
    import3.Text _text_371 = new import3.Text('Save w/ propagation');
    _el_370.append(_text_371);
    _el_372 = createAndAppend(doc, 'a', parentRenderNode);
    _el_372.className = 'to-toc';
    createAttr(_el_372, 'href', '#toc');
    addShimC(_el_372);
    import3.Text _text_373 = new import3.Text('top');
    _el_372.append(_text_373);
    _el_374 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_374);
    _el_375 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_375, 'id', 'two-way');
    addShimE(_el_375);
    import3.Text _text_376 = new import3.Text('Two-way Binding');
    _el_375.append(_text_376);
    _el_377 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_377, 'id', 'two-way-1');
    addShimC(_el_377);
    _compView_378 = new import14.ViewSizerComponent0(this, 378);
    _el_378 = _compView_378.rootEl;
    _el_377.append(_el_378);
    addShimC(_el_378);
    _SizerComponent_378_5 = new import15.SizerComponent();
    _compView_378.create(_SizerComponent_378_5, []);
    _el_379 = createDivAndAppend(doc, _el_377);
    addShimC(_el_379);
    import3.Text _text_380 = new import3.Text('Resizable Text');
    _el_379.append(_text_380);
    _el_381 = createAndAppend(doc, 'label', _el_377);
    addShimE(_el_381);
    import3.Text _text_382 = new import3.Text('FontSize (px):');
    _el_381.append(_text_382);
    _el_383 = createAndAppend(doc, 'input', _el_381);
    addShimC(_el_383);
    _DefaultValueAccessor_383_5 = new import11.DefaultValueAccessor(_el_383);
    _NgValueAccessor_383_6 = [_DefaultValueAccessor_383_5];
    _NgModel_383_7 = new import13.NgModel(null, _NgValueAccessor_383_6);
    import3.Text _text_384 = new import3.Text(' ');
    _el_381.append(_text_384);
    _text_385 = new import3.Text('');
    _el_381.append(_text_385);
    _el_386 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_386);
    _el_387 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_387, 'id', 'two-way-2');
    addShimC(_el_387);
    _el_388 = createAndAppend(doc, 'h3', _el_387);
    addShimE(_el_388);
    import3.Text _text_389 = new import3.Text('De-sugared two-way binding');
    _el_388.append(_text_389);
    _compView_390 = new import14.ViewSizerComponent0(this, 390);
    _el_390 = _compView_390.rootEl;
    _el_387.append(_el_390);
    addShimC(_el_390);
    _SizerComponent_390_5 = new import15.SizerComponent();
    _compView_390.create(_SizerComponent_390_5, []);
    _el_391 = createAndAppend(doc, 'a', parentRenderNode);
    _el_391.className = 'to-toc';
    createAttr(_el_391, 'href', '#toc');
    addShimC(_el_391);
    import3.Text _text_392 = new import3.Text('top');
    _el_391.append(_text_392);
    _el_393 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_393);
    _el_394 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_394, 'id', 'ngModel');
    addShimE(_el_394);
    import3.Text _text_395 = new import3.Text('NgModel (two-way) Binding');
    _el_394.append(_text_395);
    _el_396 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_396);
    import3.Text _text_397 = new import3.Text('Result: ');
    _el_396.append(_text_397);
    _text_398 = new import3.Text('');
    _el_396.append(_text_398);
    _el_399 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_399);
    import3.Text _text_400 = new import3.Text('without NgModel');
    parentRenderNode.append(_text_400);
    _el_401 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_401);
    _el_402 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_402);
    _DefaultValueAccessor_402_5 = new import11.DefaultValueAccessor(_el_402);
    _NgValueAccessor_402_6 = [_DefaultValueAccessor_402_5];
    _NgModel_402_7 = new import13.NgModel(null, _NgValueAccessor_402_6);
    import3.Text _text_403 = new import3.Text('[(ngModel)]');
    parentRenderNode.append(_text_403);
    _el_404 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_404);
    _el_405 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_405);
    _DefaultValueAccessor_405_5 = new import11.DefaultValueAccessor(_el_405);
    _NgValueAccessor_405_6 = [_DefaultValueAccessor_405_5];
    _NgModel_405_7 = new import13.NgModel(null, _NgValueAccessor_405_6);
    import3.Text _text_406 = new import3.Text('(ngModelChange)="...name=\$event"');
    parentRenderNode.append(_text_406);
    _el_407 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_407);
    _el_408 = createAndAppend(doc, 'input', parentRenderNode);
    addShimC(_el_408);
    _DefaultValueAccessor_408_5 = new import11.DefaultValueAccessor(_el_408);
    _NgValueAccessor_408_6 = [_DefaultValueAccessor_408_5];
    _NgModel_408_7 = new import13.NgModel(null, _NgValueAccessor_408_6);
    import3.Text _text_409 = new import3.Text('(ngModelChange)="setUppercaseName(\$event)"');
    parentRenderNode.append(_text_409);
    _el_410 = createAndAppend(doc, 'a', parentRenderNode);
    _el_410.className = 'to-toc';
    createAttr(_el_410, 'href', '#toc');
    addShimC(_el_410);
    import3.Text _text_411 = new import3.Text('top');
    _el_410.append(_text_411);
    _el_412 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_412);
    _el_413 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_413, 'id', 'ngClass');
    addShimE(_el_413);
    import3.Text _text_414 = new import3.Text('NgClass Binding');
    _el_413.append(_text_414);
    _el_415 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_415);
    import3.Text _text_416 = new import3.Text('currentClasses is ');
    _el_415.append(_text_416);
    _text_417 = new import3.Text('');
    _el_415.append(_text_417);
    _el_418 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_418);
    _NgClass_418_5 = new import9.NgClass(_el_418);
    import3.Text _text_419 = new import3.Text('This div is initially saveable, unchanged, and special');
    _el_418.append(_text_419);
    _el_420 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_420);
    _el_421 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_421);
    import3.Text _text_422 = new import3.Text('saveable');
    _el_421.append(_text_422);
    _el_423 = createAndAppend(doc, 'input', _el_421);
    createAttr(_el_423, 'type', 'checkbox');
    addShimC(_el_423);
    _CheckboxControlValueAccessor_423_5 = new import16.CheckboxControlValueAccessor(_el_423);
    _NgValueAccessor_423_6 = [_CheckboxControlValueAccessor_423_5];
    _NgModel_423_7 = new import13.NgModel(null, _NgValueAccessor_423_6);
    import3.Text _text_424 = new import3.Text('|');
    parentRenderNode.append(_text_424);
    _el_425 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_425);
    import3.Text _text_426 = new import3.Text('modified:');
    _el_425.append(_text_426);
    _el_427 = createAndAppend(doc, 'input', _el_425);
    createAttr(_el_427, 'type', 'checkbox');
    addShimC(_el_427);
    import3.Text _text_428 = new import3.Text('|');
    parentRenderNode.append(_text_428);
    _el_429 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_429);
    import3.Text _text_430 = new import3.Text('special:');
    _el_429.append(_text_430);
    _el_431 = createAndAppend(doc, 'input', _el_429);
    createAttr(_el_431, 'type', 'checkbox');
    addShimC(_el_431);
    _CheckboxControlValueAccessor_431_5 = new import16.CheckboxControlValueAccessor(_el_431);
    _NgValueAccessor_431_6 = [_CheckboxControlValueAccessor_431_5];
    _NgModel_431_7 = new import13.NgModel(null, _NgValueAccessor_431_6);
    _el_432 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_432);
    import3.Text _text_433 = new import3.Text('Refresh currentClasses');
    _el_432.append(_text_433);
    _el_434 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_434);
    _el_435 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_435);
    _el_436 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_436);
    _NgClass_436_5 = new import9.NgClass(_el_436);
    import3.Text _text_437 = new import3.Text('This div should be ');
    _el_436.append(_text_437);
    _text_438 = new import3.Text('');
    _el_436.append(_text_438);
    import3.Text _text_439 = new import3.Text(' saveable,\n                  ');
    _el_436.append(_text_439);
    _text_440 = new import3.Text('');
    _el_436.append(_text_440);
    import3.Text _text_441 = new import3.Text(' and,\n                  ');
    _el_436.append(_text_441);
    _text_442 = new import3.Text('');
    _el_436.append(_text_442);
    import3.Text _text_443 = new import3.Text(' special after clicking "Refresh".');
    _el_436.append(_text_443);
    _el_444 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_444);
    _el_445 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_445);
    _el_446 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_446);
    _NgClass_446_5 = new import9.NgClass(_el_446);
    import3.Text _text_447 = new import3.Text('This div is special');
    _el_446.append(_text_447);
    _el_448 = createDivAndAppend(doc, parentRenderNode);
    _el_448.className = 'bad curly special';
    addShimC(_el_448);
    import3.Text _text_449 = new import3.Text('Bad curly special');
    _el_448.append(_text_449);
    _el_450 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_450);
    _NgClass_450_5 = new import9.NgClass(_el_450);
    import3.Text _text_451 = new import3.Text('Curly special');
    _el_450.append(_text_451);
    _el_452 = createAndAppend(doc, 'a', parentRenderNode);
    _el_452.className = 'to-toc';
    createAttr(_el_452, 'href', '#toc');
    addShimC(_el_452);
    import3.Text _text_453 = new import3.Text('top');
    _el_452.append(_text_453);
    _el_454 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_454);
    _el_455 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_455, 'id', 'ngStyle');
    addShimE(_el_455);
    import3.Text _text_456 = new import3.Text('NgStyle Binding');
    _el_455.append(_text_456);
    _el_457 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_457);
    import3.Text _text_458 = new import3.Text('This div is x-large or smaller.');
    _el_457.append(_text_458);
    _el_459 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_459);
    import3.Text _text_460 = new import3.Text('[ngStyle] binding to currentStyles - CSS property names');
    _el_459.append(_text_460);
    _el_461 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_461);
    import3.Text _text_462 = new import3.Text('currentStyles is ');
    _el_461.append(_text_462);
    _text_463 = new import3.Text('');
    _el_461.append(_text_463);
    _el_464 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_464);
    _NgStyle_464_5 = new import17.NgStyle(_el_464);
    import3.Text _text_465 = new import3.Text('This div is initially italic, normal weight, and extra large (24px).');
    _el_464.append(_text_465);
    _el_466 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_466);
    _el_467 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_467);
    import3.Text _text_468 = new import3.Text('italic:');
    _el_467.append(_text_468);
    _el_469 = createAndAppend(doc, 'input', _el_467);
    createAttr(_el_469, 'type', 'checkbox');
    addShimC(_el_469);
    _CheckboxControlValueAccessor_469_5 = new import16.CheckboxControlValueAccessor(_el_469);
    _NgValueAccessor_469_6 = [_CheckboxControlValueAccessor_469_5];
    _NgModel_469_7 = new import13.NgModel(null, _NgValueAccessor_469_6);
    import3.Text _text_470 = new import3.Text('|');
    parentRenderNode.append(_text_470);
    _el_471 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_471);
    import3.Text _text_472 = new import3.Text('normal:');
    _el_471.append(_text_472);
    _el_473 = createAndAppend(doc, 'input', _el_471);
    createAttr(_el_473, 'type', 'checkbox');
    addShimC(_el_473);
    _CheckboxControlValueAccessor_473_5 = new import16.CheckboxControlValueAccessor(_el_473);
    _NgValueAccessor_473_6 = [_CheckboxControlValueAccessor_473_5];
    _NgModel_473_7 = new import13.NgModel(null, _NgValueAccessor_473_6);
    import3.Text _text_474 = new import3.Text('|');
    parentRenderNode.append(_text_474);
    _el_475 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_475);
    import3.Text _text_476 = new import3.Text('xlarge:');
    _el_475.append(_text_476);
    _el_477 = createAndAppend(doc, 'input', _el_475);
    createAttr(_el_477, 'type', 'checkbox');
    addShimC(_el_477);
    _CheckboxControlValueAccessor_477_5 = new import16.CheckboxControlValueAccessor(_el_477);
    _NgValueAccessor_477_6 = [_CheckboxControlValueAccessor_477_5];
    _NgModel_477_7 = new import13.NgModel(null, _NgValueAccessor_477_6);
    _el_478 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_478);
    import3.Text _text_479 = new import3.Text('Refresh currentStyles');
    _el_478.append(_text_479);
    _el_480 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_480);
    _el_481 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_481);
    _el_482 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_482);
    _NgStyle_482_5 = new import17.NgStyle(_el_482);
    import3.Text _text_483 = new import3.Text('This div should be ');
    _el_482.append(_text_483);
    _text_484 = new import3.Text('');
    _el_482.append(_text_484);
    import3.Text _text_485 = new import3.Text(',\n                  ');
    _el_482.append(_text_485);
    _text_486 = new import3.Text('');
    _el_482.append(_text_486);
    import3.Text _text_487 = new import3.Text(' and,\n                  ');
    _el_482.append(_text_487);
    _text_488 = new import3.Text('');
    _el_482.append(_text_488);
    import3.Text _text_489 = new import3.Text(' after clicking "Refresh".');
    _el_482.append(_text_489);
    _el_490 = createAndAppend(doc, 'a', parentRenderNode);
    _el_490.className = 'to-toc';
    createAttr(_el_490, 'href', '#toc');
    addShimC(_el_490);
    import3.Text _text_491 = new import3.Text('top');
    _el_490.append(_text_491);
    _el_492 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_492);
    _el_493 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_493, 'id', 'ngIf');
    addShimE(_el_493);
    import3.Text _text_494 = new import3.Text('NgIf Binding');
    _el_493.append(_text_494);
    var _anchor_495 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_495);
    _appEl_495 = new ViewContainer(495, null, this, _anchor_495);
    TemplateRef _TemplateRef_495_8 = new TemplateRef(_appEl_495, viewFactory_AppComponent4);
    _NgIf_495_9 = new NgIf(_appEl_495, _TemplateRef_495_8);
    var _anchor_496 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_496);
    _appEl_496 = new ViewContainer(496, null, this, _anchor_496);
    TemplateRef _TemplateRef_496_8 = new TemplateRef(_appEl_496, viewFactory_AppComponent5);
    _NgIf_496_9 = new NgIf(_appEl_496, _TemplateRef_496_8);
    var _anchor_497 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_497);
    _appEl_497 = new ViewContainer(497, null, this, _anchor_497);
    TemplateRef _TemplateRef_497_8 = new TemplateRef(_appEl_497, viewFactory_AppComponent6);
    _NgIf_497_9 = new NgIf(_appEl_497, _TemplateRef_497_8);
    var _anchor_498 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_498);
    _appEl_498 = new ViewContainer(498, null, this, _anchor_498);
    TemplateRef _TemplateRef_498_8 = new TemplateRef(_appEl_498, viewFactory_AppComponent7);
    _NgIf_498_9 = new NgIf(_appEl_498, _TemplateRef_498_8);
    _el_499 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_499);
    import3.Text _text_500 = new import3.Text('Hero Detail removed from DOM (via template) because isActive is false');
    _el_499.append(_text_500);
    var _anchor_501 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_501);
    _appEl_501 = new ViewContainer(501, null, this, _anchor_501);
    TemplateRef _TemplateRef_501_8 = new TemplateRef(_appEl_501, viewFactory_AppComponent8);
    _NgIf_501_9 = new NgIf(_appEl_501, _TemplateRef_501_8);
    _el_502 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_502);
    import3.Text _text_503 = new import3.Text('Show with class');
    _el_502.append(_text_503);
    _el_504 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_504);
    import3.Text _text_505 = new import3.Text('Hide with class');
    _el_504.append(_text_505);
    _compView_506 = new import7.ViewHeroDetailComponent0(this, 506);
    _el_506 = _compView_506.rootEl;
    parentRenderNode.append(_el_506);
    addShimC(_el_506);
    _HeroDetailComponent_506_5 = new import8.HeroDetailComponent();
    _compView_506.create(_HeroDetailComponent_506_5, []);
    _el_507 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_507);
    import3.Text _text_508 = new import3.Text('Show with style');
    _el_507.append(_text_508);
    _el_509 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_509);
    import3.Text _text_510 = new import3.Text('Hide with style');
    _el_509.append(_text_510);
    _el_511 = createAndAppend(doc, 'a', parentRenderNode);
    _el_511.className = 'to-toc';
    createAttr(_el_511, 'href', '#toc');
    addShimC(_el_511);
    import3.Text _text_512 = new import3.Text('top');
    _el_511.append(_text_512);
    _el_513 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_513);
    _el_514 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_514, 'id', 'ngFor');
    addShimE(_el_514);
    import3.Text _text_515 = new import3.Text('NgFor Binding');
    _el_514.append(_text_515);
    _el_516 = createDivAndAppend(doc, parentRenderNode);
    _el_516.className = 'box';
    addShimC(_el_516);
    var _anchor_517 = ngAnchor.clone(false);
    _el_516.append(_anchor_517);
    _appEl_517 = new ViewContainer(517, 516, this, _anchor_517);
    TemplateRef _TemplateRef_517_8 = new TemplateRef(_appEl_517, viewFactory_AppComponent9);
    _NgFor_517_9 = new import5.NgFor(_appEl_517, _TemplateRef_517_8);
    _el_518 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_518);
    _el_519 = createDivAndAppend(doc, parentRenderNode);
    _el_519.className = 'box';
    addShimC(_el_519);
    var _anchor_520 = ngAnchor.clone(false);
    _el_519.append(_anchor_520);
    _appEl_520 = new ViewContainer(520, 519, this, _anchor_520);
    TemplateRef _TemplateRef_520_8 = new TemplateRef(_appEl_520, viewFactory_AppComponent10);
    _NgFor_520_9 = new import5.NgFor(_appEl_520, _TemplateRef_520_8);
    _el_521 = createAndAppend(doc, 'a', parentRenderNode);
    _el_521.className = 'to-toc';
    createAttr(_el_521, 'href', '#toc');
    addShimC(_el_521);
    import3.Text _text_522 = new import3.Text('top');
    _el_521.append(_text_522);
    _el_523 = createAndAppend(doc, 'h4', parentRenderNode);
    createAttr(_el_523, 'id', 'ngFor-index');
    addShimE(_el_523);
    import3.Text _text_524 = new import3.Text('*ngFor with index');
    _el_523.append(_text_524);
    _el_525 = createDivAndAppend(doc, parentRenderNode);
    _el_525.className = 'box';
    addShimC(_el_525);
    var _anchor_526 = ngAnchor.clone(false);
    _el_525.append(_anchor_526);
    _appEl_526 = new ViewContainer(526, 525, this, _anchor_526);
    TemplateRef _TemplateRef_526_8 = new TemplateRef(_appEl_526, viewFactory_AppComponent11);
    _NgFor_526_9 = new import5.NgFor(_appEl_526, _TemplateRef_526_8);
    _el_527 = createAndAppend(doc, 'a', parentRenderNode);
    _el_527.className = 'to-toc';
    createAttr(_el_527, 'href', '#toc');
    addShimC(_el_527);
    import3.Text _text_528 = new import3.Text('top');
    _el_527.append(_text_528);
    _el_529 = createAndAppend(doc, 'h4', parentRenderNode);
    createAttr(_el_529, 'id', 'ngFor-trackBy');
    addShimE(_el_529);
    import3.Text _text_530 = new import3.Text('*ngFor trackBy');
    _el_529.append(_text_530);
    _el_531 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_531);
    import3.Text _text_532 = new import3.Text('Reset heroes');
    _el_531.append(_text_532);
    _el_533 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_533);
    import3.Text _text_534 = new import3.Text('Change ids');
    _el_533.append(_text_534);
    _el_535 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_535);
    import3.Text _text_536 = new import3.Text('Clear counts');
    _el_535.append(_text_536);
    _el_537 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_537);
    _el_538 = createAndAppend(doc, 'i', _el_537);
    addShimE(_el_538);
    import3.Text _text_539 = new import3.Text('without');
    _el_538.append(_text_539);
    import3.Text _text_540 = new import3.Text('trackBy');
    _el_537.append(_text_540);
    _el_541 = createDivAndAppend(doc, parentRenderNode);
    _el_541.className = 'box';
    addShimC(_el_541);
    var _anchor_542 = ngAnchor.clone(false);
    _el_541.append(_anchor_542);
    _appEl_542 = new ViewContainer(542, 541, this, _anchor_542);
    TemplateRef _TemplateRef_542_8 = new TemplateRef(_appEl_542, viewFactory_AppComponent12);
    _NgFor_542_9 = new import5.NgFor(_appEl_542, _TemplateRef_542_8);
    var _anchor_543 = ngAnchor.clone(false);
    _el_541.append(_anchor_543);
    _appEl_543 = new ViewContainer(543, 541, this, _anchor_543);
    TemplateRef _TemplateRef_543_8 = new TemplateRef(_appEl_543, viewFactory_AppComponent13);
    _NgIf_543_9 = new NgIf(_appEl_543, _TemplateRef_543_8);
    _el_544 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_544);
    import3.Text _text_545 = new import3.Text('with');
    _el_544.append(_text_545);
    _el_546 = createAndAppend(doc, 'code', _el_544);
    addShimE(_el_546);
    import3.Text _text_547 = new import3.Text('trackBy: trackByHeroes(int, Hero)');
    _el_546.append(_text_547);
    _el_548 = createDivAndAppend(doc, parentRenderNode);
    _el_548.className = 'box';
    addShimC(_el_548);
    var _anchor_549 = ngAnchor.clone(false);
    _el_548.append(_anchor_549);
    _appEl_549 = new ViewContainer(549, 548, this, _anchor_549);
    TemplateRef _TemplateRef_549_8 = new TemplateRef(_appEl_549, viewFactory_AppComponent14);
    _NgFor_549_9 = new import5.NgFor(_appEl_549, _TemplateRef_549_8);
    var _anchor_550 = ngAnchor.clone(false);
    _el_548.append(_anchor_550);
    _appEl_550 = new ViewContainer(550, 548, this, _anchor_550);
    TemplateRef _TemplateRef_550_8 = new TemplateRef(_appEl_550, viewFactory_AppComponent15);
    _NgIf_550_9 = new NgIf(_appEl_550, _TemplateRef_550_8);
    _el_551 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_551);
    import3.Text _text_552 = new import3.Text('with');
    _el_551.append(_text_552);
    _el_553 = createAndAppend(doc, 'code', _el_551);
    addShimE(_el_553);
    import3.Text _text_554 = new import3.Text('trackById: trackById(int, dynamic)');
    _el_553.append(_text_554);
    _el_555 = createDivAndAppend(doc, parentRenderNode);
    _el_555.className = 'box';
    addShimC(_el_555);
    var _anchor_556 = ngAnchor.clone(false);
    _el_555.append(_anchor_556);
    _appEl_556 = new ViewContainer(556, 555, this, _anchor_556);
    TemplateRef _TemplateRef_556_8 = new TemplateRef(_appEl_556, viewFactory_AppComponent16);
    _NgFor_556_9 = new import5.NgFor(_appEl_556, _TemplateRef_556_8);
    _el_557 = createAndAppend(doc, 'a', parentRenderNode);
    _el_557.className = 'to-toc';
    createAttr(_el_557, 'href', '#toc');
    addShimC(_el_557);
    import3.Text _text_558 = new import3.Text('top');
    _el_557.append(_text_558);
    _el_559 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_559);
    _el_560 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_560, 'id', 'ngSwitch');
    addShimE(_el_560);
    import3.Text _text_561 = new import3.Text('NgSwitch Binding');
    _el_560.append(_text_561);
    _el_562 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_562);
    import3.Text _text_563 = new import3.Text('Pick your favorite hero');
    _el_562.append(_text_563);
    _compView_564 = new import19.ViewMaterialRadioGroupComponent0(this, 564);
    _el_564 = _compView_564.rootEl;
    parentRenderNode.append(_el_564);
    addShimC(_el_564);
    _NgModel_564_5 = new import13.NgModel(null, null);
    _NgControl_564_6 = _NgModel_564_5;
    _MaterialRadioGroupComponent_564_7 = new import20.MaterialRadioGroupComponent(parentView.injectorGet(import36.NgZone, viewData.parentIndex), _NgControl_564_6);
    var _anchor_565 = ngAnchor.clone(false);
    _appEl_565 = new ViewContainer(565, 564, this, _anchor_565);
    TemplateRef _TemplateRef_565_8 = new TemplateRef(_appEl_565, viewFactory_AppComponent17);
    _NgFor_565_9 = new import5.NgFor(_appEl_565, _TemplateRef_565_8);
    _compView_564.create(_MaterialRadioGroupComponent_564_7, [
      [_appEl_565]
    ]);
    _el_566 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_566);
    import3.Text _text_567 = new import3.Text('Current hero is: ');
    _el_566.append(_text_567);
    _text_568 = new import3.Text('');
    _el_566.append(_text_568);
    import3.Text _text_569 = new import3.Text(' (');
    _el_566.append(_text_569);
    _text_570 = new import3.Text('');
    _el_566.append(_text_570);
    import3.Text _text_571 = new import3.Text(')');
    _el_566.append(_text_571);
    _el_572 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_572);
    _NgSwitch_572_5 = new import21.NgSwitch();
    var _anchor_573 = ngAnchor.clone(false);
    _el_572.append(_anchor_573);
    _appEl_573 = new ViewContainer(573, 572, this, _anchor_573);
    TemplateRef _TemplateRef_573_8 = new TemplateRef(_appEl_573, viewFactory_AppComponent18);
    _NgSwitchWhen_573_9 = new import21.NgSwitchWhen(_appEl_573, _TemplateRef_573_8, _NgSwitch_572_5);
    var _anchor_574 = ngAnchor.clone(false);
    _el_572.append(_anchor_574);
    _appEl_574 = new ViewContainer(574, 572, this, _anchor_574);
    TemplateRef _TemplateRef_574_8 = new TemplateRef(_appEl_574, viewFactory_AppComponent19);
    _NgSwitchWhen_574_9 = new import21.NgSwitchWhen(_appEl_574, _TemplateRef_574_8, _NgSwitch_572_5);
    var _anchor_575 = ngAnchor.clone(false);
    _el_572.append(_anchor_575);
    _appEl_575 = new ViewContainer(575, 572, this, _anchor_575);
    TemplateRef _TemplateRef_575_8 = new TemplateRef(_appEl_575, viewFactory_AppComponent20);
    _NgSwitchWhen_575_9 = new import21.NgSwitchWhen(_appEl_575, _TemplateRef_575_8, _NgSwitch_572_5);
    var _anchor_576 = ngAnchor.clone(false);
    _el_572.append(_anchor_576);
    _appEl_576 = new ViewContainer(576, 572, this, _anchor_576);
    TemplateRef _TemplateRef_576_8 = new TemplateRef(_appEl_576, viewFactory_AppComponent21);
    _NgSwitchWhen_576_9 = new import21.NgSwitchWhen(_appEl_576, _TemplateRef_576_8, _NgSwitch_572_5);
    var _anchor_577 = ngAnchor.clone(false);
    _el_572.append(_anchor_577);
    _appEl_577 = new ViewContainer(577, 572, this, _anchor_577);
    TemplateRef _TemplateRef_577_8 = new TemplateRef(_appEl_577, viewFactory_AppComponent22);
    _NgSwitchDefault_577_9 = new import21.NgSwitchDefault(_appEl_577, _TemplateRef_577_8, _NgSwitch_572_5);
    _el_578 = createAndAppend(doc, 'a', parentRenderNode);
    _el_578.className = 'to-toc';
    createAttr(_el_578, 'href', '#toc');
    addShimC(_el_578);
    import3.Text _text_579 = new import3.Text('top');
    _el_578.append(_text_579);
    _el_580 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_580);
    _el_581 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_581, 'id', 'ref-vars');
    addShimE(_el_581);
    import3.Text _text_582 = new import3.Text('Template reference variables');
    _el_581.append(_text_582);
    _el_583 = createAndAppend(doc, 'input', parentRenderNode);
    createAttr(_el_583, 'placeholder', 'phone number');
    addShimC(_el_583);
    _el_584 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_584);
    import3.Text _text_585 = new import3.Text('Call');
    _el_584.append(_text_585);
    _el_586 = createAndAppend(doc, 'button', parentRenderNode);
    createAttr(_el_586, 'disabled', '');
    addShimC(_el_586);
    _el_587 = createAndAppend(doc, 'h4', parentRenderNode);
    addShimE(_el_587);
    import3.Text _text_588 = new import3.Text('Example Form');
    _el_587.append(_text_588);
    _compView_589 = new import22.ViewHeroFormComponent0(this, 589);
    _el_589 = _compView_589.rootEl;
    parentRenderNode.append(_el_589);
    addShimC(_el_589);
    _HeroFormComponent_589_5 = new import23.HeroFormComponent();
    _compView_589.create(_HeroFormComponent_589_5, []);
    _el_590 = createAndAppend(doc, 'a', parentRenderNode);
    _el_590.className = 'to-toc';
    createAttr(_el_590, 'href', '#toc');
    addShimC(_el_590);
    import3.Text _text_591 = new import3.Text('top');
    _el_590.append(_text_591);
    _el_592 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_592);
    _el_593 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_593, 'id', 'inputs-and-outputs');
    addShimE(_el_593);
    import3.Text _text_594 = new import3.Text('Inputs and Outputs');
    _el_593.append(_text_594);
    _el_595 = createAndAppend(doc, 'img', parentRenderNode);
    addShimE(_el_595);
    _el_596 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_596);
    import3.Text _text_597 = new import3.Text('Save');
    _el_596.append(_text_597);
    _compView_598 = new import7.ViewHeroDetailComponent0(this, 598);
    _el_598 = _compView_598.rootEl;
    parentRenderNode.append(_el_598);
    addShimC(_el_598);
    _HeroDetailComponent_598_5 = new import8.HeroDetailComponent();
    _compView_598.create(_HeroDetailComponent_598_5, []);
    _el_599 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_599, 'clickable', '');
    addShimC(_el_599);
    _ClickDirective_599_5 = new import10.ClickDirective(_el_599);
    import3.Text _text_600 = new import3.Text('myClick2');
    _el_599.append(_text_600);
    _text_601 = new import3.Text('');
    parentRenderNode.append(_text_601);
    _el_602 = createAndAppend(doc, 'a', parentRenderNode);
    _el_602.className = 'to-toc';
    createAttr(_el_602, 'href', '#toc');
    addShimC(_el_602);
    import3.Text _text_603 = new import3.Text('top');
    _el_602.append(_text_603);
    _el_604 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_604);
    _el_605 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_605, 'id', 'pipes');
    addShimE(_el_605);
    import3.Text _text_606 = new import3.Text('Pipes');
    _el_605.append(_text_606);
    _el_607 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_607);
    import3.Text _text_608 = new import3.Text('Title through uppercase pipe: ');
    _el_607.append(_text_608);
    _text_609 = new import3.Text('');
    _el_607.append(_text_609);
    _el_610 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_610);
    import3.Text _text_611 = new import3.Text('Title through a pipe chain:\n  ');
    _el_610.append(_text_611);
    _text_612 = new import3.Text('');
    _el_610.append(_text_612);
    _el_613 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_613);
    import3.Text _text_614 = new import3.Text('Birthdate: ');
    _el_613.append(_text_614);
    _text_615 = new import3.Text('');
    _el_613.append(_text_615);
    _el_616 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_616);
    _text_617 = new import3.Text('');
    _el_616.append(_text_617);
    _el_618 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_618);
    import3.Text _text_619 = new import3.Text('Birthdate: ');
    _el_618.append(_text_619);
    _text_620 = new import3.Text('');
    _el_618.append(_text_620);
    _el_621 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_621);
    _el_622 = createAndAppend(doc, 'label', _el_621);
    addShimE(_el_622);
    import3.Text _text_623 = new import3.Text('Price:');
    _el_622.append(_text_623);
    _text_624 = new import3.Text('');
    _el_621.append(_text_624);
    _el_625 = createAndAppend(doc, 'a', parentRenderNode);
    _el_625.className = 'to-toc';
    createAttr(_el_625, 'href', '#toc');
    addShimC(_el_625);
    import3.Text _text_626 = new import3.Text('top');
    _el_625.append(_text_626);
    _el_627 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_627);
    _el_628 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_628, 'id', 'safe-navigation-operator');
    addShimE(_el_628);
    import3.Text _text_629 = new import3.Text('Safe navigation operator');
    _el_628.append(_text_629);
    _el_630 = createAndAppend(doc, 'i', _el_628);
    addShimE(_el_630);
    import3.Text _text_631 = new import3.Text('?.');
    _el_630.append(_text_631);
    _el_632 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_632);
    import3.Text _text_633 = new import3.Text('The title is ');
    _el_632.append(_text_633);
    _text_634 = new import3.Text('');
    _el_632.append(_text_634);
    _el_635 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_635);
    import3.Text _text_636 = new import3.Text('The current hero\'s name is ');
    _el_635.append(_text_636);
    _text_637 = new import3.Text('');
    _el_635.append(_text_637);
    _el_638 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_638);
    import3.Text _text_639 = new import3.Text('The current hero\'s name is ');
    _el_638.append(_text_639);
    _text_640 = new import3.Text('');
    _el_638.append(_text_640);
    var _anchor_641 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_641);
    _appEl_641 = new ViewContainer(641, null, this, _anchor_641);
    TemplateRef _TemplateRef_641_8 = new TemplateRef(_appEl_641, viewFactory_AppComponent23);
    _NgIf_641_9 = new NgIf(_appEl_641, _TemplateRef_641_8);
    _el_642 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_642);
    import3.Text _text_643 = new import3.Text('The null hero\'s name is ');
    _el_642.append(_text_643);
    _text_644 = new import3.Text('');
    _el_642.append(_text_644);
    _el_645 = createAndAppend(doc, 'a', parentRenderNode);
    _el_645.className = 'to-toc';
    createAttr(_el_645, 'href', '#toc');
    addShimC(_el_645);
    import3.Text _text_646 = new import3.Text('top');
    _el_645.append(_text_646);
    _el_647 = createAndAppend(doc, 'hr', parentRenderNode);
    addShimE(_el_647);
    _el_648 = createAndAppend(doc, 'h2', parentRenderNode);
    createAttr(_el_648, 'id', 'enums');
    addShimE(_el_648);
    import3.Text _text_649 = new import3.Text('Enums in binding');
    _el_648.append(_text_649);
    _el_650 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_650);
    import3.Text _text_651 = new import3.Text('The name of the Color.red enum is ');
    _el_650.append(_text_651);
    _text_652 = new import3.Text('');
    _el_650.append(_text_652);
    import3.Text _text_653 = new import3.Text('.');
    _el_650.append(_text_653);
    _el_654 = createAndAppend(doc, 'br', _el_650);
    addShimE(_el_654);
    import3.Text _text_655 = new import3.Text('The current color is ');
    _el_650.append(_text_655);
    _text_656 = new import3.Text('');
    _el_650.append(_text_656);
    import3.Text _text_657 = new import3.Text(' and its index is ');
    _el_650.append(_text_657);
    _text_658 = new import3.Text('');
    _el_650.append(_text_658);
    import3.Text _text_659 = new import3.Text('.');
    _el_650.append(_text_659);
    _el_660 = createAndAppend(doc, 'br', _el_650);
    addShimE(_el_660);
    _el_661 = createAndAppend(doc, 'button', _el_650);
    addShimC(_el_661);
    import3.Text _text_662 = new import3.Text('Enum Toggle');
    _el_661.append(_text_662);
    _el_663 = createAndAppend(doc, 'a', parentRenderNode);
    _el_663.className = 'to-toc';
    createAttr(_el_663, 'href', '#toc');
    addShimC(_el_663);
    import3.Text _text_664 = new import3.Text('top');
    _el_663.append(_text_664);
    _el_120.addEventListener('keyup', eventHandler1(_handle_keyup_120_0));
    _el_133.addEventListener('click', eventHandler0(ctx.deleteHero));
    _el_138.addEventListener('click', eventHandler1(ctx.onSave));
    import33.appViewUtils.eventManager.addEventListener(_el_147, 'submit', eventHandler1(_NgForm_147_5.onSubmit));
    final subscription_0 = _NgForm_147_5.ngSubmit.listen(eventHandler1(_handle_ngSubmit_147_0));
    _map_0 = import33.pureProxy1((p0) {
      return {'special': p0};
    });
    _el_178.addEventListener('click', eventHandler0(ctx.onSave));
    final subscription_1 = _HeroDetailComponent_180_5.deleteRequest.listen(eventHandler0(ctx.deleteHero));
    final subscription_2 = _ClickDirective_181_5.clicks.listen(eventHandler1(_handle_myClick_181_0));
    _el_188.addEventListener('input', eventHandler1(_handle_input_188_1));
    _el_188.addEventListener('blur', eventHandler0(_DefaultValueAccessor_188_5.touchHandler));
    final subscription_3 = _NgModel_188_7.update.listen(eventHandler1(_handle_ngModelChange_188_0));
    _el_232.addEventListener('click', eventHandler1(ctx.onSave));
    _el_234.addEventListener('click', eventHandler1(ctx.onSave));
    _el_351.addEventListener('click', eventHandler0(ctx.onSave));
    _el_353.addEventListener('click', eventHandler0(ctx.onSave));
    final subscription_4 = _ClickDirective_356_5.clicks.listen(eventHandler1(_handle_myClick_356_0));
    final subscription_5 = _HeroDetailComponent_359_5.deleteRequest.listen(eventHandler1(ctx.deleteHero));
    final subscription_6 = _BigHeroDetailComponent_361_5.deleteRequest.listen(eventHandler1(ctx.deleteHero));
    _el_362.addEventListener('click', eventHandler1(ctx.onClickMe));
    _el_366.addEventListener('click', eventHandler0(ctx.onSave));
    _el_367.addEventListener('click', eventHandler1(ctx.onSave));
    _el_369.addEventListener('click', eventHandler0(ctx.onSave));
    _el_370.addEventListener('click', eventHandler0(ctx.onSave));
    final subscription_7 = _SizerComponent_378_5.sizeChange.listen(eventHandler1(_handle_sizeChange_378_0));
    _el_383.addEventListener('input', eventHandler1(_handle_input_383_1));
    _el_383.addEventListener('blur', eventHandler0(_DefaultValueAccessor_383_5.touchHandler));
    final subscription_8 = _NgModel_383_7.update.listen(eventHandler1(_handle_ngModelChange_383_0));
    final subscription_9 = _SizerComponent_390_5.sizeChange.listen(eventHandler1(_handle_sizeChange_390_0));
    _el_399.addEventListener('input', eventHandler1(_handle_input_399_0));
    _el_402.addEventListener('input', eventHandler1(_handle_input_402_1));
    _el_402.addEventListener('blur', eventHandler0(_DefaultValueAccessor_402_5.touchHandler));
    final subscription_10 = _NgModel_402_7.update.listen(eventHandler1(_handle_ngModelChange_402_0));
    _el_405.addEventListener('input', eventHandler1(_handle_input_405_1));
    _el_405.addEventListener('blur', eventHandler0(_DefaultValueAccessor_405_5.touchHandler));
    final subscription_11 = _NgModel_405_7.update.listen(eventHandler1(_handle_ngModelChange_405_0));
    _el_408.addEventListener('input', eventHandler1(_handle_input_408_1));
    _el_408.addEventListener('blur', eventHandler0(_DefaultValueAccessor_408_5.touchHandler));
    final subscription_12 = _NgModel_408_7.update.listen(eventHandler1(ctx.setUppercaseName));
    _el_423.addEventListener('change', eventHandler1(_handle_change_423_1));
    _el_423.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_423_5.touchHandler));
    final subscription_13 = _NgModel_423_7.update.listen(eventHandler1(_handle_ngModelChange_423_0));
    _el_427.addEventListener('change', eventHandler1(_handle_change_427_0));
    _el_431.addEventListener('change', eventHandler1(_handle_change_431_1));
    _el_431.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_431_5.touchHandler));
    final subscription_14 = _NgModel_431_7.update.listen(eventHandler1(_handle_ngModelChange_431_0));
    _el_432.addEventListener('click', eventHandler0(ctx.setCurrentClasses));
    _map_1 = import33.pureProxy3((p0, p1, p2) {
      return {'bad': p0, 'curly': p1, 'special': p2};
    });
    _el_469.addEventListener('change', eventHandler1(_handle_change_469_1));
    _el_469.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_469_5.touchHandler));
    final subscription_15 = _NgModel_469_7.update.listen(eventHandler1(_handle_ngModelChange_469_0));
    _el_473.addEventListener('change', eventHandler1(_handle_change_473_1));
    _el_473.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_473_5.touchHandler));
    final subscription_16 = _NgModel_473_7.update.listen(eventHandler1(_handle_ngModelChange_473_0));
    _el_477.addEventListener('change', eventHandler1(_handle_change_477_1));
    _el_477.addEventListener('blur', eventHandler0(_CheckboxControlValueAccessor_477_5.touchHandler));
    final subscription_17 = _NgModel_477_7.update.listen(eventHandler1(_handle_ngModelChange_477_0));
    _el_478.addEventListener('click', eventHandler0(ctx.setCurrentStyles));
    _el_531.addEventListener('click', eventHandler0(ctx.resetHeroes));
    _el_533.addEventListener('click', eventHandler0(ctx.changeIds));
    _el_535.addEventListener('click', eventHandler0(ctx.clearTrackByCounts));
    final subscription_18 = _NgModel_564_5.update.listen(eventHandler1(_handle_ngModelChange_564_0));
    _el_584.addEventListener('click', eventHandler1(_handle_click_584_0));
    _el_596.addEventListener('click', eventHandler0(ctx.onSave));
    final subscription_19 = _HeroDetailComponent_598_5.deleteRequest.listen(eventHandler1(ctx.deleteHero));
    final subscription_20 = _ClickDirective_599_5.clicks.listen(eventHandler1(_handle_myClick_599_0));
    _el_661.addEventListener('click', eventHandler0(ctx.colorToggle));
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
    if ((identical(token, import11.DefaultValueAccessor) && (188 == nodeIndex))) {
      return _DefaultValueAccessor_188_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (188 == nodeIndex))) {
      return _NgValueAccessor_188_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (188 == nodeIndex))) {
      return _NgModel_188_7;
    }
    if ((identical(token, import11.DefaultValueAccessor) && (383 == nodeIndex))) {
      return _DefaultValueAccessor_383_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (383 == nodeIndex))) {
      return _NgValueAccessor_383_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (383 == nodeIndex))) {
      return _NgModel_383_7;
    }
    if ((identical(token, import11.DefaultValueAccessor) && (402 == nodeIndex))) {
      return _DefaultValueAccessor_402_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (402 == nodeIndex))) {
      return _NgValueAccessor_402_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (402 == nodeIndex))) {
      return _NgModel_402_7;
    }
    if ((identical(token, import11.DefaultValueAccessor) && (405 == nodeIndex))) {
      return _DefaultValueAccessor_405_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (405 == nodeIndex))) {
      return _NgValueAccessor_405_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (405 == nodeIndex))) {
      return _NgModel_405_7;
    }
    if ((identical(token, import11.DefaultValueAccessor) && (408 == nodeIndex))) {
      return _DefaultValueAccessor_408_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (408 == nodeIndex))) {
      return _NgValueAccessor_408_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (408 == nodeIndex))) {
      return _NgModel_408_7;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (423 == nodeIndex))) {
      return _CheckboxControlValueAccessor_423_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (423 == nodeIndex))) {
      return _NgValueAccessor_423_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (423 == nodeIndex))) {
      return _NgModel_423_7;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (431 == nodeIndex))) {
      return _CheckboxControlValueAccessor_431_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (431 == nodeIndex))) {
      return _NgValueAccessor_431_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (431 == nodeIndex))) {
      return _NgModel_431_7;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (469 == nodeIndex))) {
      return _CheckboxControlValueAccessor_469_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (469 == nodeIndex))) {
      return _NgValueAccessor_469_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (469 == nodeIndex))) {
      return _NgModel_469_7;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (473 == nodeIndex))) {
      return _CheckboxControlValueAccessor_473_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (473 == nodeIndex))) {
      return _NgValueAccessor_473_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (473 == nodeIndex))) {
      return _NgModel_473_7;
    }
    if ((identical(token, import16.CheckboxControlValueAccessor) && (477 == nodeIndex))) {
      return _CheckboxControlValueAccessor_477_5;
    }
    if ((identical(token, const import38.MultiToken<import39.ControlValueAccessor>('NgValueAccessor')) && (477 == nodeIndex))) {
      return _NgValueAccessor_477_6;
    }
    if (((identical(token, import13.NgModel) || identical(token, import40.NgControl)) && (477 == nodeIndex))) {
      return _NgModel_477_7;
    }
    if ((identical(token, import13.NgModel) && ((564 <= nodeIndex) && (nodeIndex <= 565)))) {
      return _NgModel_564_5;
    }
    if ((identical(token, import40.NgControl) && ((564 <= nodeIndex) && (nodeIndex <= 565)))) {
      return _NgControl_564_6;
    }
    if ((identical(token, import20.MaterialRadioGroupComponent) && ((564 <= nodeIndex) && (nodeIndex <= 565)))) {
      return _MaterialRadioGroupComponent_564_7;
    }
    if ((identical(token, import21.NgSwitch) && ((572 <= nodeIndex) && (nodeIndex <= 577)))) {
      return _NgSwitch_572_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_heroInput = _el_122;
    final import15.SizerComponent local_mySizer = _SizerComponent_378_5;
    final local_btn = _el_586;
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_143_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_143_9.ngDoCheck();
    if (firstCheck) {
      _HeroDetailComponent_164_5.ngOnInit();
    }
    final currVal_11 = _ctx.currentHero;
    if (!identical(_expr_11, currVal_11)) {
      _HeroDetailComponent_174_5.hero = currVal_11;
      _expr_11 = currVal_11;
    }
    if (firstCheck) {
      _HeroDetailComponent_174_5.ngOnInit();
    }
    final currVal_12 = _map_0(_ctx.isSpecial);
    if (!identical(_expr_12, currVal_12)) {
      _NgClass_175_5.rawClass = currVal_12;
      _expr_12 = currVal_12;
    }
    _NgClass_175_5.ngDoCheck();
    if (firstCheck) {
      _HeroDetailComponent_180_5.ngOnInit();
    }
    changed = false;
    _NgModel_188_7.model = _ctx.name;
    _NgModel_188_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_188_7.ngOnInit();
    }
    final currVal_28 = _ctx.classes;
    if (!identical(_expr_28, currVal_28)) {
      _NgClass_244_5.rawClass = currVal_28;
      _expr_28 = currVal_28;
    }
    _NgClass_244_5.ngDoCheck();
    final currVal_29 = _ctx.currentHero;
    if (!identical(_expr_29, currVal_29)) {
      _HeroDetailComponent_246_5.hero = currVal_29;
      _expr_29 = currVal_29;
    }
    if (firstCheck) {
      _HeroDetailComponent_246_5.ngOnInit();
    }
    if (firstCheck) {
      (_HeroDetailComponent_248_5.prefix = 'You are my');
    }
    final currVal_31 = _ctx.currentHero;
    if (!identical(_expr_31, currVal_31)) {
      _HeroDetailComponent_248_5.hero = currVal_31;
      _expr_31 = currVal_31;
    }
    if (firstCheck) {
      _HeroDetailComponent_248_5.ngOnInit();
    }
    final currVal_54 = _ctx.currentHero;
    if (!identical(_expr_54, currVal_54)) {
      _HeroDetailComponent_359_5.hero = currVal_54;
      _expr_54 = currVal_54;
    }
    if (firstCheck) {
      _HeroDetailComponent_359_5.ngOnInit();
    }
    final currVal_55 = _ctx.currentHero;
    if (!identical(_expr_55, currVal_55)) {
      _BigHeroDetailComponent_361_5.hero = currVal_55;
      _expr_55 = currVal_55;
    }
    if (firstCheck) {
      _BigHeroDetailComponent_361_5.ngOnInit();
    }
    final currVal_56 = _ctx.fontSizePx;
    if (!identical(_expr_56, currVal_56)) {
      _SizerComponent_378_5.size = currVal_56;
      _expr_56 = currVal_56;
    }
    changed = false;
    _NgModel_383_7.model = _ctx.fontSizePx;
    _NgModel_383_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_383_7.ngOnInit();
    }
    final currVal_60 = _ctx.fontSizePx;
    if (!identical(_expr_60, currVal_60)) {
      _SizerComponent_390_5.size = currVal_60;
      _expr_60 = currVal_60;
    }
    changed = false;
    _NgModel_402_7.model = _ctx.currentHero.name;
    _NgModel_402_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_402_7.ngOnInit();
    }
    changed = false;
    _NgModel_405_7.model = _ctx.currentHero.name;
    _NgModel_405_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_405_7.ngOnInit();
    }
    changed = false;
    _NgModel_408_7.model = _ctx.currentHero.name;
    _NgModel_408_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_408_7.ngOnInit();
    }
    final currVal_67 = _ctx.currentClasses;
    if (!identical(_expr_67, currVal_67)) {
      _NgClass_418_5.rawClass = currVal_67;
      _expr_67 = currVal_67;
    }
    _NgClass_418_5.ngDoCheck();
    changed = false;
    _NgModel_423_7.model = _ctx.canSave;
    _NgModel_423_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_423_7.ngOnInit();
    }
    changed = false;
    _NgModel_431_7.model = _ctx.isSpecial;
    _NgModel_431_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_431_7.ngOnInit();
    }
    final currVal_71 = _ctx.currentClasses;
    if (!identical(_expr_71, currVal_71)) {
      _NgClass_436_5.rawClass = currVal_71;
      _expr_71 = currVal_71;
    }
    _NgClass_436_5.ngDoCheck();
    final currVal_75 = (_ctx.isSpecial ? 'special' : '');
    if (!identical(_expr_75, currVal_75)) {
      _NgClass_446_5.rawClass = currVal_75;
      _expr_75 = currVal_75;
    }
    _NgClass_446_5.ngDoCheck();
    final currVal_76 = _map_1(false, true, true);
    if (!identical(_expr_76, currVal_76)) {
      _NgClass_450_5.rawClass = currVal_76;
      _expr_76 = currVal_76;
    }
    _NgClass_450_5.ngDoCheck();
    final currVal_79 = _ctx.currentStyles;
    if (!identical(_expr_79, currVal_79)) {
      _NgStyle_464_5.rawStyle = currVal_79;
      _expr_79 = currVal_79;
    }
    _NgStyle_464_5.ngDoCheck();
    changed = false;
    _NgModel_469_7.model = _ctx.canSave;
    _NgModel_469_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_469_7.ngOnInit();
    }
    changed = false;
    _NgModel_473_7.model = _ctx.isUnchanged;
    _NgModel_473_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_473_7.ngOnInit();
    }
    changed = false;
    _NgModel_477_7.model = _ctx.isSpecial;
    _NgModel_477_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_477_7.ngOnInit();
    }
    final currVal_83 = _ctx.currentStyles;
    if (!identical(_expr_83, currVal_83)) {
      _NgStyle_482_5.rawStyle = currVal_83;
      _expr_83 = currVal_83;
    }
    _NgStyle_482_5.ngDoCheck();
    _NgIf_495_9.ngIf = _ctx.isActive;
    _NgIf_496_9.ngIf = (_ctx.currentHero != null);
    _NgIf_497_9.ngIf = (_ctx.nullHero != null);
    _NgIf_498_9.ngIf = (_ctx.currentHero != null);
    _NgIf_501_9.ngIf = _ctx.isActive;
    if (firstCheck) {
      _HeroDetailComponent_506_5.ngOnInit();
    }
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_517_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_517_9.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_520_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_520_9.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_526_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_526_9.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_542_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_542_9.ngDoCheck();
    _NgIf_543_9.ngIf = (_ctx.heroesNoTrackByCount > 0);
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_549_9.ngForOf = _ctx.heroes);
      }
      if (!identical(_ctx.trackByHeroes, null)) {
        (_NgFor_549_9.ngForTrackBy = _ctx.trackByHeroes);
      }
    }
    _NgFor_549_9.ngDoCheck();
    _NgIf_550_9.ngIf = (_ctx.heroesWithTrackByCount > 0);
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_556_9.ngForOf = _ctx.heroes);
      }
      if (!identical(_ctx.trackById, null)) {
        (_NgFor_556_9.ngForTrackBy = _ctx.trackById);
      }
    }
    _NgFor_556_9.ngDoCheck();
    changed = false;
    _NgModel_564_5.model = _ctx.currentHero;
    _NgModel_564_5.ngAfterChanges();
    if (firstCheck) {
      _NgModel_564_5.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_564.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_565_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_565_9.ngDoCheck();
    final currVal_111 = _ctx.currentHero.emotion;
    if (!identical(_expr_111, currVal_111)) {
      _NgSwitch_572_5.ngSwitch = currVal_111;
      _expr_111 = currVal_111;
    }
    if (firstCheck) {
      (_NgSwitchWhen_573_9.ngSwitchCase = 'happy');
    }
    if (firstCheck) {
      (_NgSwitchWhen_574_9.ngSwitchCase = 'sad');
    }
    if (firstCheck) {
      (_NgSwitchWhen_575_9.ngSwitchCase = 'confused');
    }
    if (firstCheck) {
      (_NgSwitchWhen_576_9.ngSwitchCase = 'confused');
    }
    final currVal_117 = _ctx.currentHero;
    if (!identical(_expr_117, currVal_117)) {
      _HeroFormComponent_589_5.hero = currVal_117;
      _expr_117 = currVal_117;
    }
    final currVal_119 = _ctx.currentHero;
    if (!identical(_expr_119, currVal_119)) {
      _HeroDetailComponent_598_5.hero = currVal_119;
      _expr_119 = currVal_119;
    }
    if (firstCheck) {
      _HeroDetailComponent_598_5.ngOnInit();
    }
    _NgIf_641_9.ngIf = (_ctx.nullHero != null);
    _appEl_143.detectChangesInNestedViews();
    _appEl_495.detectChangesInNestedViews();
    _appEl_496.detectChangesInNestedViews();
    _appEl_497.detectChangesInNestedViews();
    _appEl_498.detectChangesInNestedViews();
    _appEl_501.detectChangesInNestedViews();
    _appEl_517.detectChangesInNestedViews();
    _appEl_520.detectChangesInNestedViews();
    _appEl_526.detectChangesInNestedViews();
    _appEl_542.detectChangesInNestedViews();
    _appEl_543.detectChangesInNestedViews();
    _appEl_549.detectChangesInNestedViews();
    _appEl_550.detectChangesInNestedViews();
    _appEl_556.detectChangesInNestedViews();
    _appEl_565.detectChangesInNestedViews();
    _appEl_573.detectChangesInNestedViews();
    _appEl_574.detectChangesInNestedViews();
    _appEl_575.detectChangesInNestedViews();
    _appEl_576.detectChangesInNestedViews();
    _appEl_577.detectChangesInNestedViews();
    _appEl_641.detectChangesInNestedViews();
    if (_query_MaterialRadioComponent_564_0_isDirty) {
      _MaterialRadioGroupComponent_564_7.list = _appEl_565.mapNestedViews((_ViewAppComponent17 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_564_0_isDirty = false;
    }
    if (_query_noTrackBy_1_0_isDirty) {
      ctx.heroesNoTrackBy = _appEl_542.mapNestedViews((_ViewAppComponent12 nestedView) {
        return [new ElementRef(nestedView._el_0)];
      });
      _query_noTrackBy_1_0_isDirty = false;
    }
    if (_query_withTrackBy_1_1_isDirty) {
      ctx.heroesWithTrackBy = _appEl_549.mapNestedViews((_ViewAppComponent14 nestedView) {
        return [new ElementRef(nestedView._el_0)];
      });
      _query_withTrackBy_1_1_isDirty = false;
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_564_7.ngAfterContentInit();
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
    final currVal_3 = import33.interpolate0((1 + 1));
    if (!identical(_expr_3, currVal_3)) {
      _text_100.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = import33.interpolate0(((1 + 1) + _ctx.getVal()));
    if (!identical(_expr_4, currVal_4)) {
      _text_103.text = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = (_ctx.title ?? '');
    if (!identical(_expr_5, currVal_5)) {
      _text_112.text = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.isUnchanged;
    if (!identical(_expr_6, currVal_6)) {
      setProp(_el_113, 'hidden', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = import33.interpolate0(local_heroInput.value);
    if (!identical(_expr_7, currVal_7)) {
      _text_124.text = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_9 = _ctx.isUnchanged;
    if (!identical(_expr_9, currVal_9)) {
      setProp(_el_168, 'disabled', currVal_9);
      _expr_9 = currVal_9;
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_173, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    final currVal_13 = (_ctx.clicked ?? '');
    if (!identical(_expr_13, currVal_13)) {
      _text_183.text = currVal_13;
      _expr_13 = currVal_13;
    }
    final currVal_15 = (_ctx.name ?? '');
    if (!identical(_expr_15, currVal_15)) {
      _text_189.text = currVal_15;
      _expr_15 = currVal_15;
    }
    final currVal_16 = _ctx.help;
    if (!identical(_expr_16, currVal_16)) {
      setAttr(_el_192, 'aria-label', currVal_16?.toString());
      _expr_16 = currVal_16;
    }
    final currVal_17 = _ctx.isSpecial;
    if (!identical(_expr_17, currVal_17)) {
      updateClass(_el_196, 'special', currVal_17);
      _expr_17 = currVal_17;
    }
    final currVal_18 = (_ctx.isSpecial ? 'red' : 'green');
    if (!identical(_expr_18, currVal_18)) {
      _el_200.style.setProperty('color', currVal_18?.toString());
      _expr_18 = currVal_18;
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_207, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    if (firstCheck) {
      if (!identical(_ctx.iconUrl, null)) {
        setProp(_el_210, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.iconUrl));
      }
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_211, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    if (firstCheck) {
      if (!identical(_ctx.villainImageUrl, null)) {
        setAttr(_el_212, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.villainImageUrl)?.toString());
      }
    }
    final currVal_23 = _ctx.isUnchanged;
    if (!identical(_expr_23, currVal_23)) {
      setProp(_el_228, 'disabled', currVal_23);
      _expr_23 = currVal_23;
    }
    final currVal_24 = _ctx.isUnchanged;
    if (!identical(_expr_24, currVal_24)) {
      setProp(_el_232, 'disabled', currVal_24);
      _expr_24 = currVal_24;
    }
    final bool currVal_25 = !_ctx.canSave;
    if (!identical(_expr_25, currVal_25)) {
      setProp(_el_234, 'disabled', currVal_25);
      _expr_25 = currVal_25;
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_241, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    final currVal_27 = _ctx.isUnchanged;
    if (!identical(_expr_27, currVal_27)) {
      setProp(_el_242, 'disabled', currVal_27);
      _expr_27 = currVal_27;
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_247, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    if (firstCheck) {
      setProp(_el_250, 'src', import33.appViewUtils.sanitizer.sanitizeUrl((_ctx.heroImageUrl ?? '')));
    }
    if (firstCheck) {
      if (!identical(_ctx.heroImageUrl, null)) {
        setProp(_el_256, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.heroImageUrl));
      }
    }
    final currVal_35 = (_ctx.title ?? '');
    if (!identical(_expr_35, currVal_35)) {
      _text_264.text = currVal_35;
      _expr_35 = currVal_35;
    }
    final currVal_36 = _ctx.title;
    if (!identical(_expr_36, currVal_36)) {
      setProp(_el_271, 'innerHTML', import33.appViewUtils.sanitizer.sanitizeHtml(currVal_36));
      _expr_36 = currVal_36;
    }
    final currVal_37 = (_ctx.evilTitle ?? '');
    if (!identical(_expr_37, currVal_37)) {
      _text_279.text = currVal_37;
      _expr_37 = currVal_37;
    }
    final currVal_38 = _ctx.evilTitle;
    if (!identical(_expr_38, currVal_38)) {
      setProp(_el_286, 'innerHTML', import33.appViewUtils.sanitizer.sanitizeHtml(currVal_38));
      _expr_38 = currVal_38;
    }
    final currVal_39 = (1 + 1);
    if (!identical(_expr_39, currVal_39)) {
      setAttr(_el_298, 'colspan', currVal_39?.toString());
      _expr_39 = currVal_39;
    }
    final currVal_40 = _ctx.actionName;
    if (!identical(_expr_40, currVal_40)) {
      setAttr(_el_306, 'aria-label', currVal_40?.toString());
      _expr_40 = currVal_40;
    }
    final currVal_41 = (_ctx.actionName ?? '');
    if (!identical(_expr_41, currVal_41)) {
      _text_307.text = currVal_41;
      _expr_41 = currVal_41;
    }
    final currVal_42 = _ctx.isUnchanged;
    if (!identical(_expr_42, currVal_42)) {
      setAttr(_el_312, 'disabled', currVal_42?.toString());
      _expr_42 = currVal_42;
    }
    final bool currVal_43 = !_ctx.isUnchanged;
    if (!identical(_expr_43, currVal_43)) {
      setAttr(_el_314, 'disabled', currVal_43?.toString());
      _expr_43 = currVal_43;
    }
    if (firstCheck) {
      setProp(_el_316, 'disabled', false);
    }
    final currVal_45 = _ctx.badCurly;
    if (!identical(_expr_45, currVal_45)) {
      this.updateChildClass(_el_325, currVal_45);
      _expr_45 = currVal_45;
    }
    final currVal_46 = _ctx.isSpecial;
    if (!identical(_expr_46, currVal_46)) {
      updateClass(_el_327, 'special', currVal_46);
      _expr_46 = currVal_46;
    }
    final bool currVal_47 = !_ctx.isSpecial;
    if (!identical(_expr_47, currVal_47)) {
      updateClass(_el_329, 'special', currVal_47);
      _expr_47 = currVal_47;
    }
    final currVal_48 = _ctx.isSpecial;
    if (!identical(_expr_48, currVal_48)) {
      updateClass(_el_331, 'special', currVal_48);
      _expr_48 = currVal_48;
    }
    final currVal_49 = (_ctx.isSpecial ? 'red' : 'green');
    if (!identical(_expr_49, currVal_49)) {
      _el_338.style.setProperty('color', currVal_49?.toString());
      _expr_49 = currVal_49;
    }
    final currVal_50 = (_ctx.canSave ? 'cyan' : 'grey');
    if (!identical(_expr_50, currVal_50)) {
      _el_340.style.setProperty('background-color', currVal_50?.toString());
      _expr_50 = currVal_50;
    }
    final currVal_51 = (_ctx.isSpecial ? 3 : 1);
    if (!identical(_expr_51, currVal_51)) {
      _el_342.style.setProperty('font-size', ((currVal_51?.toString() == null) ? null : (currVal_51?.toString() + 'em')));
      _expr_51 = currVal_51;
    }
    final currVal_52 = (!_ctx.isSpecial ? 150 : 50);
    if (!identical(_expr_52, currVal_52)) {
      _el_344.style.setProperty('font-size', ((currVal_52?.toString() == null) ? null : (currVal_52?.toString() + '%')));
      _expr_52 = currVal_52;
    }
    final currVal_53 = (_ctx.clickMessage ?? '');
    if (!identical(_expr_53, currVal_53)) {
      _text_358.text = currVal_53;
      _expr_53 = currVal_53;
    }
    final currVal_57 = local_mySizer.size;
    if (!identical(_expr_57, currVal_57)) {
      _el_379.style.setProperty('font-size', ((currVal_57?.toString() == null) ? null : (currVal_57?.toString() + 'px')));
      _expr_57 = currVal_57;
    }
    final currVal_59 = import33.interpolate0(_ctx.fontSizePx.runtimeType);
    if (!identical(_expr_59, currVal_59)) {
      _text_385.text = currVal_59;
      _expr_59 = currVal_59;
    }
    final currVal_61 = import33.interpolate0(_ctx.currentHero.name);
    if (!identical(_expr_61, currVal_61)) {
      _text_398.text = currVal_61;
      _expr_61 = currVal_61;
    }
    final currVal_62 = _ctx.currentHero.name;
    if (!identical(_expr_62, currVal_62)) {
      setProp(_el_399, 'value', currVal_62);
      _expr_62 = currVal_62;
    }
    final currVal_66 = import33.interpolate0(_ctx.currentClasses);
    if (!identical(_expr_66, currVal_66)) {
      _text_417.text = currVal_66;
      _expr_66 = currVal_66;
    }
    final bool currVal_69 = !_ctx.isUnchanged;
    if (!identical(_expr_69, currVal_69)) {
      setProp(_el_427, 'value', currVal_69);
      _expr_69 = currVal_69;
    }
    final currVal_72 = import33.interpolate0((_ctx.canSave ? '' : 'not'));
    if (!identical(_expr_72, currVal_72)) {
      _text_438.text = currVal_72;
      _expr_72 = currVal_72;
    }
    final currVal_73 = import33.interpolate0((_ctx.isUnchanged ? 'unchanged' : 'modified'));
    if (!identical(_expr_73, currVal_73)) {
      _text_440.text = currVal_73;
      _expr_73 = currVal_73;
    }
    final currVal_74 = import33.interpolate0((_ctx.isSpecial ? '' : 'not'));
    if (!identical(_expr_74, currVal_74)) {
      _text_442.text = currVal_74;
      _expr_74 = currVal_74;
    }
    final currVal_77 = (_ctx.isSpecial ? 'x-large' : 'smaller');
    if (!identical(_expr_77, currVal_77)) {
      _el_457.style.setProperty('font-size', currVal_77?.toString());
      _expr_77 = currVal_77;
    }
    final currVal_78 = import33.interpolate0(_ctx.currentStyles);
    if (!identical(_expr_78, currVal_78)) {
      _text_463.text = currVal_78;
      _expr_78 = currVal_78;
    }
    final currVal_84 = import33.interpolate0((_ctx.canSave ? 'italic' : 'plain'));
    if (!identical(_expr_84, currVal_84)) {
      _text_484.text = currVal_84;
      _expr_84 = currVal_84;
    }
    final currVal_85 = import33.interpolate0((_ctx.isUnchanged ? 'normal weight' : 'bold'));
    if (!identical(_expr_85, currVal_85)) {
      _text_486.text = currVal_85;
      _expr_85 = currVal_85;
    }
    final currVal_86 = import33.interpolate0((_ctx.isSpecial ? 'extra large' : 'normal size'));
    if (!identical(_expr_86, currVal_86)) {
      _text_488.text = currVal_86;
      _expr_86 = currVal_86;
    }
    final bool currVal_92 = !_ctx.isSpecial;
    if (!identical(_expr_92, currVal_92)) {
      updateClass(_el_502, 'hidden', currVal_92);
      _expr_92 = currVal_92;
    }
    final currVal_93 = _ctx.isSpecial;
    if (!identical(_expr_93, currVal_93)) {
      updateClass(_el_504, 'hidden', currVal_93);
      _expr_93 = currVal_93;
    }
    final currVal_94 = _ctx.isSpecial;
    if (!identical(_expr_94, currVal_94)) {
      updateElemClass(_el_506, 'hidden', currVal_94);
      _expr_94 = currVal_94;
    }
    final currVal_95 = (_ctx.isSpecial ? 'block' : 'none');
    if (!identical(_expr_95, currVal_95)) {
      _el_507.style.setProperty('display', currVal_95?.toString());
      _expr_95 = currVal_95;
    }
    final currVal_96 = (_ctx.isSpecial ? 'none' : 'block');
    if (!identical(_expr_96, currVal_96)) {
      _el_509.style.setProperty('display', currVal_96?.toString());
      _expr_96 = currVal_96;
    }
    final currVal_109 = import33.interpolate0(_ctx.currentHero.name);
    if (!identical(_expr_109, currVal_109)) {
      _text_568.text = currVal_109;
      _expr_109 = currVal_109;
    }
    final currVal_110 = import33.interpolate0(_ctx.currentHero.id);
    if (!identical(_expr_110, currVal_110)) {
      _text_570.text = currVal_110;
      _expr_110 = currVal_110;
    }
    final currVal_116 = ('disabled by attribute: ' + local_btn.disabled.toString());
    if (!identical(_expr_116, currVal_116)) {
      setProp(_el_586, 'innerHTML', import33.appViewUtils.sanitizer.sanitizeHtml(currVal_116));
      _expr_116 = currVal_116;
    }
    if (firstCheck) {
      if (!identical(_ctx.iconUrl, null)) {
        setProp(_el_595, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(_ctx.iconUrl));
      }
    }
    final currVal_120 = (_ctx.clickMessage2 ?? '');
    if (!identical(_expr_120, currVal_120)) {
      _text_601.text = currVal_120;
      _expr_120 = currVal_120;
    }
    final currVal_121 = import33.interpolate0(_pipe_uppercase_0_0(_ctx.title));
    if (!identical(_expr_121, currVal_121)) {
      _text_609.text = currVal_121;
      _expr_121 = currVal_121;
    }
    final currVal_122 = import33.interpolate0(_pipe_lowercase_1_0(_pipe_uppercase_0_1(_ctx.title)));
    if (!identical(_expr_122, currVal_122)) {
      _text_612.text = currVal_122;
      _expr_122 = currVal_122;
    }
    final currVal_123 = import33.interpolate0(_pipe_date_2_0(((_ctx.currentHero == null) ? null : _ctx.currentHero.birthdate), 'longDate'));
    if (!identical(_expr_123, currVal_123)) {
      _text_615.text = currVal_123;
      _expr_123 = currVal_123;
    }
    final currVal_124 = import33.interpolate0(_pipe_json_3.transform(_ctx.currentHero));
    if (!identical(_expr_124, currVal_124)) {
      _text_617.text = currVal_124;
      _expr_124 = currVal_124;
    }
    final currVal_125 = import33.interpolate0(_pipe_uppercase_0_2(_pipe_date_2_1(((_ctx.currentHero == null) ? null : _ctx.currentHero.birthdate), 'longDate')));
    if (!identical(_expr_125, currVal_125)) {
      _text_620.text = currVal_125;
      _expr_125 = currVal_125;
    }
    final currVal_126 = import33.interpolate0(_pipe_currency_4_0(_ctx.product['price'], 'USD', true));
    if (!identical(_expr_126, currVal_126)) {
      _text_624.text = currVal_126;
      _expr_126 = currVal_126;
    }
    final currVal_127 = (_ctx.title ?? '');
    if (!identical(_expr_127, currVal_127)) {
      _text_634.text = currVal_127;
      _expr_127 = currVal_127;
    }
    final currVal_128 = import33.interpolate0(((_ctx.currentHero == null) ? null : _ctx.currentHero.name));
    if (!identical(_expr_128, currVal_128)) {
      _text_637.text = currVal_128;
      _expr_128 = currVal_128;
    }
    final currVal_129 = import33.interpolate0(_ctx.currentHero.name);
    if (!identical(_expr_129, currVal_129)) {
      _text_640.text = currVal_129;
      _expr_129 = currVal_129;
    }
    final currVal_131 = import33.interpolate0(((_ctx.nullHero == null) ? null : _ctx.nullHero.name));
    if (!identical(_expr_131, currVal_131)) {
      _text_644.text = currVal_131;
      _expr_131 = currVal_131;
    }
    final currVal_132 = import33.interpolate0(import2.Color.red);
    if (!identical(_expr_132, currVal_132)) {
      _text_652.text = currVal_132;
      _expr_132 = currVal_132;
    }
    final currVal_133 = import33.interpolate0(_ctx.color);
    if (!identical(_expr_133, currVal_133)) {
      _text_656.text = currVal_133;
      _expr_133 = currVal_133;
    }
    final currVal_134 = import33.interpolate0(_ctx.color.index);
    if (!identical(_expr_134, currVal_134)) {
      _text_658.text = currVal_134;
      _expr_134 = currVal_134;
    }
    final currVal_135 = _ctx.color.toString().split('.')[1];
    if (!identical(_expr_135, currVal_135)) {
      _el_661.style.setProperty('color', currVal_135?.toString());
      _expr_135 = currVal_135;
    }
    _compView_164.detectChanges();
    _compView_174.detectChanges();
    _compView_180.detectChanges();
    _compView_246.detectChanges();
    _compView_248.detectChanges();
    _compView_359.detectChanges();
    _compView_361.detectChanges();
    _compView_378.detectChanges();
    _compView_390.detectChanges();
    _compView_506.detectChanges();
    _compView_564.detectChanges();
    _compView_589.detectChanges();
    _compView_598.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_143?.destroyNestedViews();
    _appEl_495?.destroyNestedViews();
    _appEl_496?.destroyNestedViews();
    _appEl_497?.destroyNestedViews();
    _appEl_498?.destroyNestedViews();
    _appEl_501?.destroyNestedViews();
    _appEl_517?.destroyNestedViews();
    _appEl_520?.destroyNestedViews();
    _appEl_526?.destroyNestedViews();
    _appEl_542?.destroyNestedViews();
    _appEl_543?.destroyNestedViews();
    _appEl_549?.destroyNestedViews();
    _appEl_550?.destroyNestedViews();
    _appEl_556?.destroyNestedViews();
    _appEl_565?.destroyNestedViews();
    _appEl_573?.destroyNestedViews();
    _appEl_574?.destroyNestedViews();
    _appEl_575?.destroyNestedViews();
    _appEl_576?.destroyNestedViews();
    _appEl_577?.destroyNestedViews();
    _appEl_641?.destroyNestedViews();
    _compView_164?.destroy();
    _compView_174?.destroy();
    _compView_180?.destroy();
    _compView_246?.destroy();
    _compView_248?.destroy();
    _compView_359?.destroy();
    _compView_361?.destroy();
    _compView_378?.destroy();
    _compView_390?.destroy();
    _compView_506?.destroy();
    _compView_564?.destroy();
    _compView_589?.destroy();
    _compView_598?.destroy();
    _NgClass_175_5.ngOnDestroy();
    _NgClass_244_5.ngOnDestroy();
    _NgClass_418_5.ngOnDestroy();
    _NgClass_436_5.ngOnDestroy();
    _NgClass_446_5.ngOnDestroy();
    _NgClass_450_5.ngOnDestroy();
    _MaterialRadioGroupComponent_564_7.ngOnDestroy();
  }

  void _handle_keyup_120_0($event) {
    0;
  }

  void _handle_ngSubmit_147_0($event) {
    final local_heroForm = _el_147;
    ctx.onSubmit(local_heroForm);
  }

  void _handle_myClick_181_0($event) {
    ctx.clicked = $event;
  }

  void _handle_ngModelChange_188_0($event) {
    ctx.name = $event;
  }

  void _handle_input_188_1($event) {
    _DefaultValueAccessor_188_5.onChange($event.target.value);
  }

  void _handle_myClick_356_0($event) {
    ctx.clickMessage = $event;
  }

  void _handle_sizeChange_378_0($event) {
    ctx.fontSizePx = $event;
  }

  void _handle_ngModelChange_383_0($event) {
    ctx.fontSizePx = $event;
  }

  void _handle_input_383_1($event) {
    _DefaultValueAccessor_383_5.onChange($event.target.value);
  }

  void _handle_sizeChange_390_0($event) {
    ctx.fontSizePx = $event;
  }

  void _handle_input_399_0($event) {
    ctx.currentHero.name = $event.target.value;
  }

  void _handle_ngModelChange_402_0($event) {
    ctx.currentHero.name = $event;
  }

  void _handle_input_402_1($event) {
    _DefaultValueAccessor_402_5.onChange($event.target.value);
  }

  void _handle_ngModelChange_405_0($event) {
    ctx.currentHero.name = $event;
  }

  void _handle_input_405_1($event) {
    _DefaultValueAccessor_405_5.onChange($event.target.value);
  }

  void _handle_input_408_1($event) {
    _DefaultValueAccessor_408_5.onChange($event.target.value);
  }

  void _handle_ngModelChange_423_0($event) {
    ctx.canSave = $event;
  }

  void _handle_change_423_1($event) {
    _CheckboxControlValueAccessor_423_5.onChange($event.target.checked);
  }

  void _handle_change_427_0($event) {
    ctx.isUnchanged = !ctx.isUnchanged;
  }

  void _handle_ngModelChange_431_0($event) {
    ctx.isSpecial = $event;
  }

  void _handle_change_431_1($event) {
    _CheckboxControlValueAccessor_431_5.onChange($event.target.checked);
  }

  void _handle_ngModelChange_469_0($event) {
    ctx.canSave = $event;
  }

  void _handle_change_469_1($event) {
    _CheckboxControlValueAccessor_469_5.onChange($event.target.checked);
  }

  void _handle_ngModelChange_473_0($event) {
    ctx.isUnchanged = $event;
  }

  void _handle_change_473_1($event) {
    _CheckboxControlValueAccessor_473_5.onChange($event.target.checked);
  }

  void _handle_ngModelChange_477_0($event) {
    ctx.isSpecial = $event;
  }

  void _handle_change_477_1($event) {
    _CheckboxControlValueAccessor_477_5.onChange($event.target.checked);
  }

  void _handle_ngModelChange_564_0($event) {
    ctx.currentHero = $event;
  }

  void _handle_click_584_0($event) {
    final local_phone = _el_583;
    ctx.callPhone(local_phone.value);
  }

  void _handle_myClick_599_0($event) {
    ctx.clickMessage2 = $event;
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

class _ViewAppComponent1 extends AppView<import2.AppComponent> {
  ViewContainer _appEl_0;
  import5.NgFor _NgFor_0_9;
  _ViewAppComponent1(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var _anchor_0 = ngAnchor.clone(false);
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

AppView<import2.AppComponent> viewFactory_AppComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent1(parentView, parentIndex);
}

class _ViewAppComponent2 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewAppComponent2(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
  import3.ButtonElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewAppComponent3(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
  import3.Element _el_0;
  import7.ViewHeroDetailComponent0 _compView_0;
  import8.HeroDetailComponent _HeroDetailComponent_0_5;
  _ViewAppComponent4(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import7.ViewHeroDetailComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _HeroDetailComponent_0_5 = new import8.HeroDetailComponent();
    _compView_0.create(_HeroDetailComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _HeroDetailComponent_0_5.ngOnInit();
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
  import3.DivElement _el_0;
  import3.Text _text_2;
  var _expr_0;
  _ViewAppComponent5(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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

AppView<import2.AppComponent> viewFactory_AppComponent5(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent5(parentView, parentIndex);
}

class _ViewAppComponent6 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  var _expr_0;
  _ViewAppComponent6(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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

AppView<import2.AppComponent> viewFactory_AppComponent6(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent6(parentView, parentIndex);
}

class _ViewAppComponent7 extends AppView<import2.AppComponent> {
  import3.Text _text_1;
  var _expr_0;
  _ViewAppComponent7(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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

AppView<import2.AppComponent> viewFactory_AppComponent7(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent7(parentView, parentIndex);
}

class _ViewAppComponent8 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import7.ViewHeroDetailComponent0 _compView_0;
  import8.HeroDetailComponent _HeroDetailComponent_0_5;
  _ViewAppComponent8(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import7.ViewHeroDetailComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _HeroDetailComponent_0_5 = new import8.HeroDetailComponent();
    _compView_0.create(_HeroDetailComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _HeroDetailComponent_0_5.ngOnInit();
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
  import3.DivElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewAppComponent9(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
  import3.Element _el_0;
  import7.ViewHeroDetailComponent0 _compView_0;
  import8.HeroDetailComponent _HeroDetailComponent_0_5;
  var _expr_0;
  _ViewAppComponent10(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import7.ViewHeroDetailComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _HeroDetailComponent_0_5 = new import8.HeroDetailComponent();
    _compView_0.create(_HeroDetailComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final import42.Hero local_hero = locals['\$implicit'];
    final currVal_0 = local_hero;
    if (!identical(_expr_0, currVal_0)) {
      _HeroDetailComponent_0_5.hero = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      _HeroDetailComponent_0_5.ngOnInit();
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
  import3.DivElement _el_0;
  import3.Text _text_1;
  import3.Text _text_3;
  var _expr_0;
  var _expr_1;
  _ViewAppComponent11(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    final import42.Hero local_hero = locals['\$implicit'];
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

AppView<import2.AppComponent> viewFactory_AppComponent11(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent11(parentView, parentIndex);
}

class _ViewAppComponent12 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  import3.Text _text_4;
  var _expr_0;
  var _expr_1;
  _ViewAppComponent12(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    final import42.Hero local_hero = locals['\$implicit'];
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

AppView<import2.AppComponent> viewFactory_AppComponent12(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent12(parentView, parentIndex);
}

class _ViewAppComponent13 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  var _expr_0;
  _ViewAppComponent13(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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

AppView<import2.AppComponent> viewFactory_AppComponent13(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent13(parentView, parentIndex);
}

class _ViewAppComponent14 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  import3.Text _text_4;
  var _expr_0;
  var _expr_1;
  _ViewAppComponent14(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    final import42.Hero local_hero = locals['\$implicit'];
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

AppView<import2.AppComponent> viewFactory_AppComponent14(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent14(parentView, parentIndex);
}

class _ViewAppComponent15 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  import3.Element _el_4;
  var _expr_0;
  _ViewAppComponent15(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    import3.Text _text_5 = new import3.Text('trackBy: trackByHeroes');
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

AppView<import2.AppComponent> viewFactory_AppComponent15(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent15(parentView, parentIndex);
}

class _ViewAppComponent16 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  import3.Text _text_4;
  var _expr_0;
  var _expr_1;
  _ViewAppComponent16(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    final import42.Hero local_hero = locals['\$implicit'];
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
}

AppView<import2.AppComponent> viewFactory_AppComponent16(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent16(parentView, parentIndex);
}

class _ViewAppComponent17 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import43.ViewMaterialRadioComponent0 _compView_0;
  import44.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_1;
  import3.Text _text_3;
  var _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewAppComponent17(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import43.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import44.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewAppComponent0)._MaterialRadioGroupComponent_564_7, null, null);
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
    final import42.Hero local_h = locals['\$implicit'];
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
    (parentView as ViewAppComponent0)._query_MaterialRadioComponent_564_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent17(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent17(parentView, parentIndex);
}

class _ViewAppComponent18 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import45.ViewHappyHeroComponent0 _compView_0;
  import46.HappyHeroComponent _HappyHeroComponent_0_5;
  var _expr_0;
  _ViewAppComponent18(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import45.ViewHappyHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _HappyHeroComponent_0_5 = new import46.HappyHeroComponent();
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

AppView<import2.AppComponent> viewFactory_AppComponent18(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent18(parentView, parentIndex);
}

class _ViewAppComponent19 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import45.ViewSadHeroComponent0 _compView_0;
  import46.SadHeroComponent _SadHeroComponent_0_5;
  var _expr_0;
  _ViewAppComponent19(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import45.ViewSadHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _SadHeroComponent_0_5 = new import46.SadHeroComponent();
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

AppView<import2.AppComponent> viewFactory_AppComponent19(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent19(parentView, parentIndex);
}

class _ViewAppComponent20 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import45.ViewConfusedHeroComponent0 _compView_0;
  import46.ConfusedHeroComponent _ConfusedHeroComponent_0_5;
  var _expr_0;
  _ViewAppComponent20(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import45.ViewConfusedHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _ConfusedHeroComponent_0_5 = new import46.ConfusedHeroComponent();
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

AppView<import2.AppComponent> viewFactory_AppComponent20(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent20(parentView, parentIndex);
}

class _ViewAppComponent21 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  var _expr_0;
  _ViewAppComponent21(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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

AppView<import2.AppComponent> viewFactory_AppComponent21(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent21(parentView, parentIndex);
}

class _ViewAppComponent22 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import45.ViewUnknownHeroComponent0 _compView_0;
  import46.UnknownHeroComponent _UnknownHeroComponent_0_5;
  var _expr_0;
  _ViewAppComponent22(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new import45.ViewUnknownHeroComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _UnknownHeroComponent_0_5 = new import46.UnknownHeroComponent();
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

AppView<import2.AppComponent> viewFactory_AppComponent22(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent22(parentView, parentIndex);
}

class _ViewAppComponent23 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  var _expr_0;
  _ViewAppComponent23(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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

AppView<import2.AppComponent> viewFactory_AppComponent23(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent23(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  List<import47.RelativePosition> __defaultPopupPositions_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  import48.AcxImperativeViewUtils __AcxImperativeViewUtils_0_9;
  dynamic __Document_0_10;
  import49.DomRuler __DomRuler_0_11;
  import50.Angular2ManagedZone __ManagedZone_0_12;
  dynamic __overlayContainerName_0_13;
  dynamic __overlayContainerParent_0_14;
  dynamic __overlayContainer_0_15;
  bool __overlaySyncDom_0_16;
  bool __overlayRepositionLoop_0_17;
  import51.OverlayStyleConfig __OverlayStyleConfig_0_18;
  import52.ZIndexer __ZIndexer_0_19;
  import53.OverlayDomRenderService __OverlayDomRenderService_0_20;
  import54.OverlayService __OverlayService_0_21;
  import55.DomPopupSourceFactory __DomPopupSourceFactory_0_22;
  _ViewAppComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import31.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<import47.RelativePosition> get _defaultPopupPositions_0_6 {
    if ((this.__defaultPopupPositions_0_6 == null)) {
      (__defaultPopupPositions_0_6 = const [const import47.RelativePosition(animationOrigin: 'top center'), const import47.RelativePosition(animationOrigin: 'top right', originX: const import47.Alignment('End', 'flex-end')), const import47.RelativePosition(animationOrigin: 'top left', originX: const import47.Alignment('Start', 'flex-start')), const import47.RelativePosition(animationOrigin: 'bottom center', originY: const import47.Alignment('End', 'flex-end')), const import47.RelativePosition(animationOrigin: 'bottom right', originX: const import47.Alignment('End', 'flex-end'), originY: const import47.Alignment('End', 'flex-end')), const import47.RelativePosition(animationOrigin: 'bottom left', originX: const import47.Alignment('Start', 'flex-start'), originY: const import47.Alignment('End', 'flex-end'))]);
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

  import48.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_9 {
    if ((this.__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = new import48.AcxImperativeViewUtils(this.injectorGet(import60.ComponentLoader, this.viewData.parentIndex), this._DomService_0_8));
    }
    return this.__AcxImperativeViewUtils_0_9;
  }

  dynamic get _Document_0_10 {
    if ((this.__Document_0_10 == null)) {
      (__Document_0_10 = import56.getDocument());
    }
    return this.__Document_0_10;
  }

  import49.DomRuler get _DomRuler_0_11 {
    if ((this.__DomRuler_0_11 == null)) {
      (__DomRuler_0_11 = new import49.DomRuler(this._Document_0_10, this._DomService_0_8));
    }
    return this.__DomRuler_0_11;
  }

  import50.Angular2ManagedZone get _ManagedZone_0_12 {
    if ((this.__ManagedZone_0_12 == null)) {
      (__ManagedZone_0_12 = new import50.Angular2ManagedZone(this.injectorGet(import36.NgZone, this.viewData.parentIndex)));
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

  import51.OverlayStyleConfig get _OverlayStyleConfig_0_18 {
    if ((this.__OverlayStyleConfig_0_18 == null)) {
      (__OverlayStyleConfig_0_18 = new import51.OverlayStyleConfig(this._Document_0_10));
    }
    return this.__OverlayStyleConfig_0_18;
  }

  import52.ZIndexer get _ZIndexer_0_19 {
    if ((this.__ZIndexer_0_19 == null)) {
      (__ZIndexer_0_19 = new import52.ZIndexer());
    }
    return this.__ZIndexer_0_19;
  }

  import53.OverlayDomRenderService get _OverlayDomRenderService_0_20 {
    if ((this.__OverlayDomRenderService_0_20 == null)) {
      (__OverlayDomRenderService_0_20 = new import53.OverlayDomRenderService(this._OverlayStyleConfig_0_18, this._overlayContainer_0_15, this._overlayContainerName_0_13, this._DomRuler_0_11, this._DomService_0_8, this._AcxImperativeViewUtils_0_9, this._overlaySyncDom_0_16, this._overlayRepositionLoop_0_17, this._ZIndexer_0_19));
    }
    return this.__OverlayDomRenderService_0_20;
  }

  import54.OverlayService get _OverlayService_0_21 {
    if ((this.__OverlayService_0_21 == null)) {
      (__OverlayService_0_21 = new import54.OverlayService(this.injectorGet(import36.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_16, this._OverlayDomRenderService_0_20, this.injectorGet(import54.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_21;
  }

  import55.DomPopupSourceFactory get _DomPopupSourceFactory_0_22 {
    if ((this.__DomPopupSourceFactory_0_22 == null)) {
      (__DomPopupSourceFactory_0_22 = new import55.DomPopupSourceFactory(this._DomRuler_0_11));
    }
    return this.__DomPopupSourceFactory_0_22;
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
    if ((identical(token, import48.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_10;
    }
    if ((identical(token, import49.DomRuler) && (0 == nodeIndex))) {
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
    if ((identical(token, import51.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_18;
    }
    if ((identical(token, import52.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_19;
    }
    if ((identical(token, import53.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_20;
    }
    if ((identical(token, import54.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_21;
    }
    if ((identical(token, import55.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_22;
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
