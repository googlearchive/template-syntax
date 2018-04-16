// Copyright (c) 2018, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:svg' as svg;

abstract class Angle {
  static const svgAngletypeDeg = svg.Angle.SVG_ANGLETYPE_DEG;
  static const svgAngletypeGrad = svg.Angle.SVG_ANGLETYPE_GRAD;
  static const svgAngletypeRad = svg.Angle.SVG_ANGLETYPE_RAD;
  static const svgAngletypeUnknown = svg.Angle.SVG_ANGLETYPE_UNKNOWN;
  static const svgAngletypeUnspecified = svg.Angle.SVG_ANGLETYPE_UNSPECIFIED;
}

abstract class FEBlendElement {
  static const svgFeblendModeDarken =
      svg.FEBlendElement.SVG_FEBLEND_MODE_DARKEN;
  static const svgFeblendModeLighten =
      svg.FEBlendElement.SVG_FEBLEND_MODE_LIGHTEN;
  static const svgFeblendModeMultiply =
      svg.FEBlendElement.SVG_FEBLEND_MODE_MULTIPLY;
  static const svgFeblendModeNormal =
      svg.FEBlendElement.SVG_FEBLEND_MODE_NORMAL;
  static const svgFeblendModeScreen =
      svg.FEBlendElement.SVG_FEBLEND_MODE_SCREEN;
  static const svgFeblendModeUnknown =
      svg.FEBlendElement.SVG_FEBLEND_MODE_UNKNOWN;
}

abstract class FEColorMatrixElement {
  static const svgFecolormatrixTypeHuerotate =
      svg.FEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_HUEROTATE;
  static const svgFecolormatrixTypeLuminancetoalpha =
      svg.FEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA;
  static const svgFecolormatrixTypeMatrix =
      svg.FEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_MATRIX;
  static const svgFecolormatrixTypeSaturate =
      svg.FEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE;
  static const svgFecolormatrixTypeUnknown =
      svg.FEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_UNKNOWN;
}

abstract class FECompositeElement {
  static const svgFecompositeOperatorArithmetic =
      svg.FECompositeElement.SVG_FECOMPOSITE_OPERATOR_ARITHMETIC;
  static const svgFecompositeOperatorAtop =
      svg.FECompositeElement.SVG_FECOMPOSITE_OPERATOR_ATOP;
  static const svgFecompositeOperatorIn =
      svg.FECompositeElement.SVG_FECOMPOSITE_OPERATOR_IN;
  static const svgFecompositeOperatorOut =
      svg.FECompositeElement.SVG_FECOMPOSITE_OPERATOR_OUT;
  static const svgFecompositeOperatorOver =
      svg.FECompositeElement.SVG_FECOMPOSITE_OPERATOR_OVER;
  static const svgFecompositeOperatorUnknown =
      svg.FECompositeElement.SVG_FECOMPOSITE_OPERATOR_UNKNOWN;
  static const svgFecompositeOperatorXor =
      svg.FECompositeElement.SVG_FECOMPOSITE_OPERATOR_XOR;
}

abstract class FEConvolveMatrixElement {
  static const svgEdgemodeDuplicate =
      svg.FEConvolveMatrixElement.SVG_EDGEMODE_DUPLICATE;
  static const svgEdgemodeNone = svg.FEConvolveMatrixElement.SVG_EDGEMODE_NONE;
  static const svgEdgemodeUnknown =
      svg.FEConvolveMatrixElement.SVG_EDGEMODE_UNKNOWN;
  static const svgEdgemodeWrap = svg.FEConvolveMatrixElement.SVG_EDGEMODE_WRAP;
}

abstract class FEDisplacementMapElement {
  static const svgChannelA = svg.FEDisplacementMapElement.SVG_CHANNEL_A;
  static const svgChannelB = svg.FEDisplacementMapElement.SVG_CHANNEL_B;
  static const svgChannelG = svg.FEDisplacementMapElement.SVG_CHANNEL_G;
  static const svgChannelR = svg.FEDisplacementMapElement.SVG_CHANNEL_R;
  static const svgChannelUnknown =
      svg.FEDisplacementMapElement.SVG_CHANNEL_UNKNOWN;
}

abstract class FEMorphologyElement {
  static const svgMorphologyOperatorDilate =
      svg.FEMorphologyElement.SVG_MORPHOLOGY_OPERATOR_DILATE;
  static const svgMorphologyOperatorErode =
      svg.FEMorphologyElement.SVG_MORPHOLOGY_OPERATOR_ERODE;
  static const svgMorphologyOperatorUnknown =
      svg.FEMorphologyElement.SVG_MORPHOLOGY_OPERATOR_UNKNOWN;
}

abstract class FETurbulenceElement {
  static const svgStitchtypeNostitch =
      svg.FETurbulenceElement.SVG_STITCHTYPE_NOSTITCH;
  static const svgStitchtypeStitch =
      svg.FETurbulenceElement.SVG_STITCHTYPE_STITCH;
  static const svgStitchtypeUnknown =
      svg.FETurbulenceElement.SVG_STITCHTYPE_UNKNOWN;
  static const svgTurbulenceTypeFractalnoise =
      svg.FETurbulenceElement.SVG_TURBULENCE_TYPE_FRACTALNOISE;
  static const svgTurbulenceTypeTurbulence =
      svg.FETurbulenceElement.SVG_TURBULENCE_TYPE_TURBULENCE;
  static const svgTurbulenceTypeUnknown =
      svg.FETurbulenceElement.SVG_TURBULENCE_TYPE_UNKNOWN;
}

abstract class Length {
  static const svgLengthtypeCm = svg.Length.SVG_LENGTHTYPE_CM;
  static const svgLengthtypeEms = svg.Length.SVG_LENGTHTYPE_EMS;
  static const svgLengthtypeExs = svg.Length.SVG_LENGTHTYPE_EXS;
  static const svgLengthtypeIn = svg.Length.SVG_LENGTHTYPE_IN;
  static const svgLengthtypeMm = svg.Length.SVG_LENGTHTYPE_MM;
  static const svgLengthtypeNumber = svg.Length.SVG_LENGTHTYPE_NUMBER;
  static const svgLengthtypePc = svg.Length.SVG_LENGTHTYPE_PC;
  static const svgLengthtypePercentage = svg.Length.SVG_LENGTHTYPE_PERCENTAGE;
  static const svgLengthtypePt = svg.Length.SVG_LENGTHTYPE_PT;
  static const svgLengthtypePx = svg.Length.SVG_LENGTHTYPE_PX;
  static const svgLengthtypeUnknown = svg.Length.SVG_LENGTHTYPE_UNKNOWN;
}

abstract class MarkerElement {
  static const svgMarkerunitsStrokewidth =
      svg.MarkerElement.SVG_MARKERUNITS_STROKEWIDTH;
  static const svgMarkerunitsUnknown =
      svg.MarkerElement.SVG_MARKERUNITS_UNKNOWN;
  static const svgMarkerunitsUserspaceonuse =
      svg.MarkerElement.SVG_MARKERUNITS_USERSPACEONUSE;
  static const svgMarkerOrientAngle = svg.MarkerElement.SVG_MARKER_ORIENT_ANGLE;
  static const svgMarkerOrientAuto = svg.MarkerElement.SVG_MARKER_ORIENT_AUTO;
  static const svgMarkerOrientUnknown =
      svg.MarkerElement.SVG_MARKER_ORIENT_UNKNOWN;
}

abstract class PreserveAspectRatio {
  static const svgMeetorsliceMeet =
      svg.PreserveAspectRatio.SVG_MEETORSLICE_MEET;
  static const svgMeetorsliceSlice =
      svg.PreserveAspectRatio.SVG_MEETORSLICE_SLICE;
  static const svgMeetorsliceUnknown =
      svg.PreserveAspectRatio.SVG_MEETORSLICE_UNKNOWN;
  static const svgPreserveaspectratioNone =
      svg.PreserveAspectRatio.SVG_PRESERVEASPECTRATIO_NONE;
  static const svgPreserveaspectratioUnknown =
      svg.PreserveAspectRatio.SVG_PRESERVEASPECTRATIO_UNKNOWN;
  static const svgPreserveaspectratioXmaxymax =
      svg.PreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMAX;
  static const svgPreserveaspectratioXmaxymid =
      svg.PreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMID;
  static const svgPreserveaspectratioXmaxymin =
      svg.PreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMIN;
  static const svgPreserveaspectratioXmidymax =
      svg.PreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMAX;
  static const svgPreserveaspectratioXmidymid =
      svg.PreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMID;
  static const svgPreserveaspectratioXmidymin =
      svg.PreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMIN;
  static const svgPreserveaspectratioXminymax =
      svg.PreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMAX;
  static const svgPreserveaspectratioXminymid =
      svg.PreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMID;
  static const svgPreserveaspectratioXminymin =
      svg.PreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMIN;
}

abstract class TextContentElement {
  static const lengthadjustSpacing =
      svg.TextContentElement.LENGTHADJUST_SPACING;
  static const lengthadjustSpacingandglyphs =
      svg.TextContentElement.LENGTHADJUST_SPACINGANDGLYPHS;
  static const lengthadjustUnknown =
      svg.TextContentElement.LENGTHADJUST_UNKNOWN;
}

abstract class TextPathElement {
  static const textpathMethodtypeAlign =
      svg.TextPathElement.TEXTPATH_METHODTYPE_ALIGN;
  static const textpathMethodtypeStretch =
      svg.TextPathElement.TEXTPATH_METHODTYPE_STRETCH;
  static const textpathMethodtypeUnknown =
      svg.TextPathElement.TEXTPATH_METHODTYPE_UNKNOWN;
  static const textpathSpacingtypeAuto =
      svg.TextPathElement.TEXTPATH_SPACINGTYPE_AUTO;
  static const textpathSpacingtypeExact =
      svg.TextPathElement.TEXTPATH_SPACINGTYPE_EXACT;
  static const textpathSpacingtypeUnknown =
      svg.TextPathElement.TEXTPATH_SPACINGTYPE_UNKNOWN;
}

abstract class Transform {
  static const svgTransformMatrix = svg.Transform.SVG_TRANSFORM_MATRIX;
  static const svgTransformRotate = svg.Transform.SVG_TRANSFORM_ROTATE;
  static const svgTransformScale = svg.Transform.SVG_TRANSFORM_SCALE;
  static const svgTransformSkewx = svg.Transform.SVG_TRANSFORM_SKEWX;
  static const svgTransformSkewy = svg.Transform.SVG_TRANSFORM_SKEWY;
  static const svgTransformTranslate = svg.Transform.SVG_TRANSFORM_TRANSLATE;
  static const svgTransformUnknown = svg.Transform.SVG_TRANSFORM_UNKNOWN;
}

abstract class UnitTypes {
  static const svgUnitTypeObjectboundingbox =
      svg.UnitTypes.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX;
  static const svgUnitTypeUnknown = svg.UnitTypes.SVG_UNIT_TYPE_UNKNOWN;
  static const svgUnitTypeUserspaceonuse =
      svg.UnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE;
}

abstract class ZoomAndPan {
  static const svgZoomandpanDisable = svg.ZoomAndPan.SVG_ZOOMANDPAN_DISABLE;
  static const svgZoomandpanMagnify = svg.ZoomAndPan.SVG_ZOOMANDPAN_MAGNIFY;
  static const svgZoomandpanUnknown = svg.ZoomAndPan.SVG_ZOOMANDPAN_UNKNOWN;
}
