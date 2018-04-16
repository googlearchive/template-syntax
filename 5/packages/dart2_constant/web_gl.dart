// Copyright (c) 2018, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:web_gl' as web_gl;

const activeAttributes = web_gl.ACTIVE_ATTRIBUTES;
const activeTexture = web_gl.ACTIVE_TEXTURE;
const activeUniforms = web_gl.ACTIVE_UNIFORMS;
const aliasedLineWidthRange = web_gl.ALIASED_LINE_WIDTH_RANGE;
const aliasedPointSizeRange = web_gl.ALIASED_POINT_SIZE_RANGE;
const alpha = web_gl.ALPHA;
const alphaBits = web_gl.ALPHA_BITS;
const always = web_gl.ALWAYS;
const arrayBuffer = web_gl.ARRAY_BUFFER;
const arrayBufferBinding = web_gl.ARRAY_BUFFER_BINDING;
const attachedShaders = web_gl.ATTACHED_SHADERS;
const back = web_gl.BACK;
const blend = web_gl.BLEND;
const blendColor = web_gl.BLEND_COLOR;
const blendDstAlpha = web_gl.BLEND_DST_ALPHA;
const blendDstRgb = web_gl.BLEND_DST_RGB;
const blendEquation = web_gl.BLEND_EQUATION;
const blendEquationAlpha = web_gl.BLEND_EQUATION_ALPHA;
const blendEquationRgb = web_gl.BLEND_EQUATION_RGB;
const blendSrcAlpha = web_gl.BLEND_SRC_ALPHA;
const blendSrcRgb = web_gl.BLEND_SRC_RGB;
const blueBits = web_gl.BLUE_BITS;
const bool = web_gl.BOOL;
const boolVec2 = web_gl.BOOL_VEC2;
const boolVec3 = web_gl.BOOL_VEC3;
const boolVec4 = web_gl.BOOL_VEC4;
const browserDefaultWebgl = web_gl.BROWSER_DEFAULT_WEBGL;
const bufferSize = web_gl.BUFFER_SIZE;
const bufferUsage = web_gl.BUFFER_USAGE;
const byte = web_gl.BYTE;
const ccw = web_gl.CCW;
const clampToEdge = web_gl.CLAMP_TO_EDGE;
const colorAttachment0 = web_gl.COLOR_ATTACHMENT0;
const colorBufferBit = web_gl.COLOR_BUFFER_BIT;
const colorClearValue = web_gl.COLOR_CLEAR_VALUE;
const colorWritemask = web_gl.COLOR_WRITEMASK;
const compileStatus = web_gl.COMPILE_STATUS;
const compressedTextureFormats = web_gl.COMPRESSED_TEXTURE_FORMATS;
const constantAlpha = web_gl.CONSTANT_ALPHA;
const constantColor = web_gl.CONSTANT_COLOR;
const contextLostWebgl = web_gl.CONTEXT_LOST_WEBGL;
const cullFace = web_gl.CULL_FACE;
const cullFaceMode = web_gl.CULL_FACE_MODE;
const currentProgram = web_gl.CURRENT_PROGRAM;
const currentVertexAttrib = web_gl.CURRENT_VERTEX_ATTRIB;
const cw = web_gl.CW;
const decr = web_gl.DECR;
const decrWrap = web_gl.DECR_WRAP;
const deleteStatus = web_gl.DELETE_STATUS;
const depthAttachment = web_gl.DEPTH_ATTACHMENT;
const depthBits = web_gl.DEPTH_BITS;
const depthBufferBit = web_gl.DEPTH_BUFFER_BIT;
const depthClearValue = web_gl.DEPTH_CLEAR_VALUE;
const depthComponent = web_gl.DEPTH_COMPONENT;
const depthComponent16 = web_gl.DEPTH_COMPONENT16;
const depthFunc = web_gl.DEPTH_FUNC;
const depthRange = web_gl.DEPTH_RANGE;
const depthStencil = web_gl.DEPTH_STENCIL;
const depthStencilAttachment = web_gl.DEPTH_STENCIL_ATTACHMENT;
const depthTest = web_gl.DEPTH_TEST;
const depthWritemask = web_gl.DEPTH_WRITEMASK;
const dither = web_gl.DITHER;
const dontCare = web_gl.DONT_CARE;
const dstAlpha = web_gl.DST_ALPHA;
const dstColor = web_gl.DST_COLOR;
const dynamicDraw = web_gl.DYNAMIC_DRAW;
const elementArrayBuffer = web_gl.ELEMENT_ARRAY_BUFFER;
const elementArrayBufferBinding = web_gl.ELEMENT_ARRAY_BUFFER_BINDING;
const equal = web_gl.EQUAL;
const fastest = web_gl.FASTEST;
const float = web_gl.FLOAT;
const floatMat2 = web_gl.FLOAT_MAT2;
const floatMat3 = web_gl.FLOAT_MAT3;
const floatMat4 = web_gl.FLOAT_MAT4;
const floatVec2 = web_gl.FLOAT_VEC2;
const floatVec3 = web_gl.FLOAT_VEC3;
const floatVec4 = web_gl.FLOAT_VEC4;
const fragmentShader = web_gl.FRAGMENT_SHADER;
const framebuffer = web_gl.FRAMEBUFFER;
const framebufferAttachmentObjectName =
    web_gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;
const framebufferAttachmentObjectType =
    web_gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;
const framebufferAttachmentTextureCubeMapFace =
    web_gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;
const framebufferAttachmentTextureLevel =
    web_gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;
const framebufferBinding = web_gl.FRAMEBUFFER_BINDING;
const framebufferComplete = web_gl.FRAMEBUFFER_COMPLETE;
const framebufferIncompleteAttachment =
    web_gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT;
const framebufferIncompleteDimensions =
    web_gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS;
const framebufferIncompleteMissingAttachment =
    web_gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;
const framebufferUnsupported = web_gl.FRAMEBUFFER_UNSUPPORTED;
const front = web_gl.FRONT;
const frontAndBack = web_gl.FRONT_AND_BACK;
const frontFace = web_gl.FRONT_FACE;
const funcAdd = web_gl.FUNC_ADD;
const funcReverseSubtract = web_gl.FUNC_REVERSE_SUBTRACT;
const funcSubtract = web_gl.FUNC_SUBTRACT;
const generateMipmapHint = web_gl.GENERATE_MIPMAP_HINT;
const gequal = web_gl.GEQUAL;
const greater = web_gl.GREATER;
const greenBits = web_gl.GREEN_BITS;
const halfFloatOes = web_gl.HALF_FLOAT_OES;
const highFloat = web_gl.HIGH_FLOAT;
const highInt = web_gl.HIGH_INT;
const incr = web_gl.INCR;
const incrWrap = web_gl.INCR_WRAP;
const int = web_gl.INT;
const intVec2 = web_gl.INT_VEC2;
const intVec3 = web_gl.INT_VEC3;
const intVec4 = web_gl.INT_VEC4;
const invalidEnum = web_gl.INVALID_ENUM;
const invalidFramebufferOperation = web_gl.INVALID_FRAMEBUFFER_OPERATION;
const invalidOperation = web_gl.INVALID_OPERATION;
const invalidValue = web_gl.INVALID_VALUE;
const invert = web_gl.INVERT;
const keep = web_gl.KEEP;
const lequal = web_gl.LEQUAL;
const less = web_gl.LESS;
const linear = web_gl.LINEAR;
const linearMipmapLinear = web_gl.LINEAR_MIPMAP_LINEAR;
const linearMipmapNearest = web_gl.LINEAR_MIPMAP_NEAREST;
const lines = web_gl.LINES;
const lineLoop = web_gl.LINE_LOOP;
const lineStrip = web_gl.LINE_STRIP;
const lineWidth = web_gl.LINE_WIDTH;
const linkStatus = web_gl.LINK_STATUS;
const lowFloat = web_gl.LOW_FLOAT;
const lowInt = web_gl.LOW_INT;
const luminance = web_gl.LUMINANCE;
const luminanceAlpha = web_gl.LUMINANCE_ALPHA;
const maxCombinedTextureImageUnits = web_gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
const maxCubeMapTextureSize = web_gl.MAX_CUBE_MAP_TEXTURE_SIZE;
const maxFragmentUniformVectors = web_gl.MAX_FRAGMENT_UNIFORM_VECTORS;
const maxRenderbufferSize = web_gl.MAX_RENDERBUFFER_SIZE;
const maxTextureImageUnits = web_gl.MAX_TEXTURE_IMAGE_UNITS;
const maxTextureSize = web_gl.MAX_TEXTURE_SIZE;
const maxVaryingVectors = web_gl.MAX_VARYING_VECTORS;
const maxVertexAttribs = web_gl.MAX_VERTEX_ATTRIBS;
const maxVertexTextureImageUnits = web_gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
const maxVertexUniformVectors = web_gl.MAX_VERTEX_UNIFORM_VECTORS;
const maxViewportDims = web_gl.MAX_VIEWPORT_DIMS;
const mediumFloat = web_gl.MEDIUM_FLOAT;
const mediumInt = web_gl.MEDIUM_INT;
const mirroredRepeat = web_gl.MIRRORED_REPEAT;
const nearest = web_gl.NEAREST;
const nearestMipmapLinear = web_gl.NEAREST_MIPMAP_LINEAR;
const nearestMipmapNearest = web_gl.NEAREST_MIPMAP_NEAREST;
const never = web_gl.NEVER;
const nicest = web_gl.NICEST;
const none = web_gl.NONE;
const notequal = web_gl.NOTEQUAL;
const noError = web_gl.NO_ERROR;
const one = web_gl.ONE;
const oneMinusConstantAlpha = web_gl.ONE_MINUS_CONSTANT_ALPHA;
const oneMinusConstantColor = web_gl.ONE_MINUS_CONSTANT_COLOR;
const oneMinusDstAlpha = web_gl.ONE_MINUS_DST_ALPHA;
const oneMinusDstColor = web_gl.ONE_MINUS_DST_COLOR;
const oneMinusSrcAlpha = web_gl.ONE_MINUS_SRC_ALPHA;
const oneMinusSrcColor = web_gl.ONE_MINUS_SRC_COLOR;
const outOfMemory = web_gl.OUT_OF_MEMORY;
const packAlignment = web_gl.PACK_ALIGNMENT;
const points = web_gl.POINTS;
const polygonOffsetFactor = web_gl.POLYGON_OFFSET_FACTOR;
const polygonOffsetFill = web_gl.POLYGON_OFFSET_FILL;
const polygonOffsetUnits = web_gl.POLYGON_OFFSET_UNITS;
const redBits = web_gl.RED_BITS;
const renderbuffer = web_gl.RENDERBUFFER;
const renderbufferAlphaSize = web_gl.RENDERBUFFER_ALPHA_SIZE;
const renderbufferBinding = web_gl.RENDERBUFFER_BINDING;
const renderbufferBlueSize = web_gl.RENDERBUFFER_BLUE_SIZE;
const renderbufferDepthSize = web_gl.RENDERBUFFER_DEPTH_SIZE;
const renderbufferGreenSize = web_gl.RENDERBUFFER_GREEN_SIZE;
const renderbufferHeight = web_gl.RENDERBUFFER_HEIGHT;
const renderbufferInternalFormat = web_gl.RENDERBUFFER_INTERNAL_FORMAT;
const renderbufferRedSize = web_gl.RENDERBUFFER_RED_SIZE;
const renderbufferStencilSize = web_gl.RENDERBUFFER_STENCIL_SIZE;
const renderbufferWidth = web_gl.RENDERBUFFER_WIDTH;
const renderer = web_gl.RENDERER;
const repeat = web_gl.REPEAT;
const replace = web_gl.REPLACE;
const rgb = web_gl.RGB;
const rgb565 = web_gl.RGB565;
const rgb5A1 = web_gl.RGB5_A1;
const rgba = web_gl.RGBA;
const rgba4 = web_gl.RGBA4;
const sampler2d = web_gl.SAMPLER_2D;
const samplerCube = web_gl.SAMPLER_CUBE;
const samples = web_gl.SAMPLES;
const sampleAlphaToCoverage = web_gl.SAMPLE_ALPHA_TO_COVERAGE;
const sampleBuffers = web_gl.SAMPLE_BUFFERS;
const sampleCoverage = web_gl.SAMPLE_COVERAGE;
const sampleCoverageInvert = web_gl.SAMPLE_COVERAGE_INVERT;
const sampleCoverageValue = web_gl.SAMPLE_COVERAGE_VALUE;
const scissorBox = web_gl.SCISSOR_BOX;
const scissorTest = web_gl.SCISSOR_TEST;
const shaderType = web_gl.SHADER_TYPE;
const shadingLanguageVersion = web_gl.SHADING_LANGUAGE_VERSION;
const short = web_gl.SHORT;
const srcAlpha = web_gl.SRC_ALPHA;
const srcAlphaSaturate = web_gl.SRC_ALPHA_SATURATE;
const srcColor = web_gl.SRC_COLOR;
const staticDraw = web_gl.STATIC_DRAW;
const stencilAttachment = web_gl.STENCIL_ATTACHMENT;
const stencilBackFail = web_gl.STENCIL_BACK_FAIL;
const stencilBackFunc = web_gl.STENCIL_BACK_FUNC;
const stencilBackPassDepthFail = web_gl.STENCIL_BACK_PASS_DEPTH_FAIL;
const stencilBackPassDepthPass = web_gl.STENCIL_BACK_PASS_DEPTH_PASS;
const stencilBackRef = web_gl.STENCIL_BACK_REF;
const stencilBackValueMask = web_gl.STENCIL_BACK_VALUE_MASK;
const stencilBackWritemask = web_gl.STENCIL_BACK_WRITEMASK;
const stencilBits = web_gl.STENCIL_BITS;
const stencilBufferBit = web_gl.STENCIL_BUFFER_BIT;
const stencilClearValue = web_gl.STENCIL_CLEAR_VALUE;
const stencilFail = web_gl.STENCIL_FAIL;
const stencilFunc = web_gl.STENCIL_FUNC;
const stencilIndex8 = web_gl.STENCIL_INDEX8;
const stencilPassDepthFail = web_gl.STENCIL_PASS_DEPTH_FAIL;
const stencilPassDepthPass = web_gl.STENCIL_PASS_DEPTH_PASS;
const stencilRef = web_gl.STENCIL_REF;
const stencilTest = web_gl.STENCIL_TEST;
const stencilValueMask = web_gl.STENCIL_VALUE_MASK;
const stencilWritemask = web_gl.STENCIL_WRITEMASK;
const streamDraw = web_gl.STREAM_DRAW;
const subpixelBits = web_gl.SUBPIXEL_BITS;
const texture = web_gl.TEXTURE;
const texture0 = web_gl.TEXTURE0;
const texture1 = web_gl.TEXTURE1;
const texture10 = web_gl.TEXTURE10;
const texture11 = web_gl.TEXTURE11;
const texture12 = web_gl.TEXTURE12;
const texture13 = web_gl.TEXTURE13;
const texture14 = web_gl.TEXTURE14;
const texture15 = web_gl.TEXTURE15;
const texture16 = web_gl.TEXTURE16;
const texture17 = web_gl.TEXTURE17;
const texture18 = web_gl.TEXTURE18;
const texture19 = web_gl.TEXTURE19;
const texture2 = web_gl.TEXTURE2;
const texture20 = web_gl.TEXTURE20;
const texture21 = web_gl.TEXTURE21;
const texture22 = web_gl.TEXTURE22;
const texture23 = web_gl.TEXTURE23;
const texture24 = web_gl.TEXTURE24;
const texture25 = web_gl.TEXTURE25;
const texture26 = web_gl.TEXTURE26;
const texture27 = web_gl.TEXTURE27;
const texture28 = web_gl.TEXTURE28;
const texture29 = web_gl.TEXTURE29;
const texture3 = web_gl.TEXTURE3;
const texture30 = web_gl.TEXTURE30;
const texture31 = web_gl.TEXTURE31;
const texture4 = web_gl.TEXTURE4;
const texture5 = web_gl.TEXTURE5;
const texture6 = web_gl.TEXTURE6;
const texture7 = web_gl.TEXTURE7;
const texture8 = web_gl.TEXTURE8;
const texture9 = web_gl.TEXTURE9;
const texture2d = web_gl.TEXTURE_2D;
const textureBinding2d = web_gl.TEXTURE_BINDING_2D;
const textureBindingCubeMap = web_gl.TEXTURE_BINDING_CUBE_MAP;
const textureCubeMap = web_gl.TEXTURE_CUBE_MAP;
const textureCubeMapNegativeX = web_gl.TEXTURE_CUBE_MAP_NEGATIVE_X;
const textureCubeMapNegativeY = web_gl.TEXTURE_CUBE_MAP_NEGATIVE_Y;
const textureCubeMapNegativeZ = web_gl.TEXTURE_CUBE_MAP_NEGATIVE_Z;
const textureCubeMapPositiveX = web_gl.TEXTURE_CUBE_MAP_POSITIVE_X;
const textureCubeMapPositiveY = web_gl.TEXTURE_CUBE_MAP_POSITIVE_Y;
const textureCubeMapPositiveZ = web_gl.TEXTURE_CUBE_MAP_POSITIVE_Z;
const textureMagFilter = web_gl.TEXTURE_MAG_FILTER;
const textureMinFilter = web_gl.TEXTURE_MIN_FILTER;
const textureWrapS = web_gl.TEXTURE_WRAP_S;
const textureWrapT = web_gl.TEXTURE_WRAP_T;
const triangles = web_gl.TRIANGLES;
const triangleFan = web_gl.TRIANGLE_FAN;
const triangleStrip = web_gl.TRIANGLE_STRIP;
const unpackAlignment = web_gl.UNPACK_ALIGNMENT;
const unpackColorspaceConversionWebgl =
    web_gl.UNPACK_COLORSPACE_CONVERSION_WEBGL;
const unpackFlipYWebgl = web_gl.UNPACK_FLIP_Y_WEBGL;
const unpackPremultiplyAlphaWebgl = web_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
const unsignedByte = web_gl.UNSIGNED_BYTE;
const unsignedInt = web_gl.UNSIGNED_INT;
const unsignedShort = web_gl.UNSIGNED_SHORT;
const unsignedShort4444 = web_gl.UNSIGNED_SHORT_4_4_4_4;
const unsignedShort5551 = web_gl.UNSIGNED_SHORT_5_5_5_1;
const unsignedShort565 = web_gl.UNSIGNED_SHORT_5_6_5;
const validateStatus = web_gl.VALIDATE_STATUS;
const vendor = web_gl.VENDOR;
const version = web_gl.VERSION;
const vertexAttribArrayBufferBinding =
    web_gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;
const vertexAttribArrayEnabled = web_gl.VERTEX_ATTRIB_ARRAY_ENABLED;
const vertexAttribArrayNormalized = web_gl.VERTEX_ATTRIB_ARRAY_NORMALIZED;
const vertexAttribArrayPointer = web_gl.VERTEX_ATTRIB_ARRAY_POINTER;
const vertexAttribArraySize = web_gl.VERTEX_ATTRIB_ARRAY_SIZE;
const vertexAttribArrayStride = web_gl.VERTEX_ATTRIB_ARRAY_STRIDE;
const vertexAttribArrayType = web_gl.VERTEX_ATTRIB_ARRAY_TYPE;
const vertexShader = web_gl.VERTEX_SHADER;
const viewport = web_gl.VIEWPORT;
const zero = web_gl.ZERO;

abstract class AngleInstancedArrays {
  static const vertexAttribArrayDivisorAngle =
      web_gl.AngleInstancedArrays.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE;
}

abstract class CompressedTextureAstc {
  static const compressedRgbaAstc10x10Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_10x10_KHR;
  static const compressedRgbaAstc10x5Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_10x5_KHR;
  static const compressedRgbaAstc10x6Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_10x6_KHR;
  static const compressedRgbaAstc10x8Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_10x8_KHR;
  static const compressedRgbaAstc12x10Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_12x10_KHR;
  static const compressedRgbaAstc12x12Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_12x12_KHR;
  static const compressedRgbaAstc4x4Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_4x4_KHR;
  static const compressedRgbaAstc5x4Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_5x4_KHR;
  static const compressedRgbaAstc5x5Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_5x5_KHR;
  static const compressedRgbaAstc6x5Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_6x5_KHR;
  static const compressedRgbaAstc6x6Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_6x6_KHR;
  static const compressedRgbaAstc8x5Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_8x5_KHR;
  static const compressedRgbaAstc8x6Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_8x6_KHR;
  static const compressedRgbaAstc8x8Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_RGBA_ASTC_8x8_KHR;
  static const compressedSrgb8Alpha8Astc10x10Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
  static const compressedSrgb8Alpha8Astc10x5Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
  static const compressedSrgb8Alpha8Astc10x6Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
  static const compressedSrgb8Alpha8Astc10x8Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
  static const compressedSrgb8Alpha8Astc12x10Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
  static const compressedSrgb8Alpha8Astc12x12Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
  static const compressedSrgb8Alpha8Astc4x4Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
  static const compressedSrgb8Alpha8Astc5x4Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
  static const compressedSrgb8Alpha8Astc5x5Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
  static const compressedSrgb8Alpha8Astc6x5Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
  static const compressedSrgb8Alpha8Astc6x6Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
  static const compressedSrgb8Alpha8Astc8x5Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
  static const compressedSrgb8Alpha8Astc8x6Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
  static const compressedSrgb8Alpha8Astc8x8Khr =
      web_gl.CompressedTextureAstc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
}

abstract class CompressedTextureAtc {
  static const compressedRgbaAtcExplicitAlphaWebgl =
      web_gl.CompressedTextureAtc.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL;
  static const compressedRgbaAtcInterpolatedAlphaWebgl =
      web_gl.CompressedTextureAtc.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL;
  static const compressedRgbAtcWebgl =
      web_gl.CompressedTextureAtc.COMPRESSED_RGB_ATC_WEBGL;
}

abstract class CompressedTextureETC1 {
  static const compressedRgbEtc1Webgl =
      web_gl.CompressedTextureETC1.COMPRESSED_RGB_ETC1_WEBGL;
}

abstract class CompressedTexturePvrtc {
  static const compressedRgbaPvrtc2bppv1Img =
      web_gl.CompressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
  static const compressedRgbaPvrtc4bppv1Img =
      web_gl.CompressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
  static const compressedRgbPvrtc2bppv1Img =
      web_gl.CompressedTexturePvrtc.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
  static const compressedRgbPvrtc4bppv1Img =
      web_gl.CompressedTexturePvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
}

abstract class CompressedTextureS3TC {
  static const compressedRgbaS3tcDxt1Ext =
      web_gl.CompressedTextureS3TC.COMPRESSED_RGBA_S3TC_DXT1_EXT;
  static const compressedRgbaS3tcDxt3Ext =
      web_gl.CompressedTextureS3TC.COMPRESSED_RGBA_S3TC_DXT3_EXT;
  static const compressedRgbaS3tcDxt5Ext =
      web_gl.CompressedTextureS3TC.COMPRESSED_RGBA_S3TC_DXT5_EXT;
  static const compressedRgbS3tcDxt1Ext =
      web_gl.CompressedTextureS3TC.COMPRESSED_RGB_S3TC_DXT1_EXT;
}

abstract class DebugRendererInfo {
  static const unmaskedRendererWebgl =
      web_gl.DebugRendererInfo.UNMASKED_RENDERER_WEBGL;
  static const unmaskedVendorWebgl =
      web_gl.DebugRendererInfo.UNMASKED_VENDOR_WEBGL;
}

abstract class DepthTexture {
  static const unsignedInt248Webgl =
      web_gl.DepthTexture.UNSIGNED_INT_24_8_WEBGL;
}

abstract class DrawBuffers {
  static const colorAttachment0Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT0_WEBGL;
  static const colorAttachment10Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT10_WEBGL;
  static const colorAttachment11Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT11_WEBGL;
  static const colorAttachment12Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT12_WEBGL;
  static const colorAttachment13Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT13_WEBGL;
  static const colorAttachment14Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT14_WEBGL;
  static const colorAttachment15Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT15_WEBGL;
  static const colorAttachment1Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT1_WEBGL;
  static const colorAttachment2Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT2_WEBGL;
  static const colorAttachment3Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT3_WEBGL;
  static const colorAttachment4Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT4_WEBGL;
  static const colorAttachment5Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT5_WEBGL;
  static const colorAttachment6Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT6_WEBGL;
  static const colorAttachment7Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT7_WEBGL;
  static const colorAttachment8Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT8_WEBGL;
  static const colorAttachment9Webgl =
      web_gl.DrawBuffers.COLOR_ATTACHMENT9_WEBGL;
  static const drawBuffer0Webgl = web_gl.DrawBuffers.DRAW_BUFFER0_WEBGL;
  static const drawBuffer10Webgl = web_gl.DrawBuffers.DRAW_BUFFER10_WEBGL;
  static const drawBuffer11Webgl = web_gl.DrawBuffers.DRAW_BUFFER11_WEBGL;
  static const drawBuffer12Webgl = web_gl.DrawBuffers.DRAW_BUFFER12_WEBGL;
  static const drawBuffer13Webgl = web_gl.DrawBuffers.DRAW_BUFFER13_WEBGL;
  static const drawBuffer14Webgl = web_gl.DrawBuffers.DRAW_BUFFER14_WEBGL;
  static const drawBuffer15Webgl = web_gl.DrawBuffers.DRAW_BUFFER15_WEBGL;
  static const drawBuffer1Webgl = web_gl.DrawBuffers.DRAW_BUFFER1_WEBGL;
  static const drawBuffer2Webgl = web_gl.DrawBuffers.DRAW_BUFFER2_WEBGL;
  static const drawBuffer3Webgl = web_gl.DrawBuffers.DRAW_BUFFER3_WEBGL;
  static const drawBuffer4Webgl = web_gl.DrawBuffers.DRAW_BUFFER4_WEBGL;
  static const drawBuffer5Webgl = web_gl.DrawBuffers.DRAW_BUFFER5_WEBGL;
  static const drawBuffer6Webgl = web_gl.DrawBuffers.DRAW_BUFFER6_WEBGL;
  static const drawBuffer7Webgl = web_gl.DrawBuffers.DRAW_BUFFER7_WEBGL;
  static const drawBuffer8Webgl = web_gl.DrawBuffers.DRAW_BUFFER8_WEBGL;
  static const drawBuffer9Webgl = web_gl.DrawBuffers.DRAW_BUFFER9_WEBGL;
  static const maxColorAttachmentsWebgl =
      web_gl.DrawBuffers.MAX_COLOR_ATTACHMENTS_WEBGL;
  static const maxDrawBuffersWebgl = web_gl.DrawBuffers.MAX_DRAW_BUFFERS_WEBGL;
}

abstract class EXTsRgb {
  static const framebufferAttachmentColorEncodingExt =
      web_gl.EXTsRgb.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT;
  static const srgb8Alpha8Ext = web_gl.EXTsRgb.SRGB8_ALPHA8_EXT;
  static const srgbAlphaExt = web_gl.EXTsRgb.SRGB_ALPHA_EXT;
  static const srgbExt = web_gl.EXTsRgb.SRGB_EXT;
}

abstract class ExtBlendMinMax {
  static const maxExt = web_gl.ExtBlendMinMax.MAX_EXT;
  static const minExt = web_gl.ExtBlendMinMax.MIN_EXT;
}

abstract class ExtDisjointTimerQuery {
  static const currentQueryExt = web_gl.ExtDisjointTimerQuery.CURRENT_QUERY_EXT;
  static const gpuDisjointExt = web_gl.ExtDisjointTimerQuery.GPU_DISJOINT_EXT;
  static const queryCounterBitsExt =
      web_gl.ExtDisjointTimerQuery.QUERY_COUNTER_BITS_EXT;
  static const queryResultAvailableExt =
      web_gl.ExtDisjointTimerQuery.QUERY_RESULT_AVAILABLE_EXT;
  static const queryResultExt = web_gl.ExtDisjointTimerQuery.QUERY_RESULT_EXT;
  static const timestampExt = web_gl.ExtDisjointTimerQuery.TIMESTAMP_EXT;
  static const timeElapsedExt = web_gl.ExtDisjointTimerQuery.TIME_ELAPSED_EXT;
}

abstract class ExtTextureFilterAnisotropic {
  static const maxTextureMaxAnisotropyExt =
      web_gl.ExtTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT;
  static const textureMaxAnisotropyExt =
      web_gl.ExtTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT;
}

abstract class OesStandardDerivatives {
  static const fragmentShaderDerivativeHintOes =
      web_gl.OesStandardDerivatives.FRAGMENT_SHADER_DERIVATIVE_HINT_OES;
}

abstract class OesTextureHalfFloat {
  static const halfFloatOes = web_gl.OesTextureHalfFloat.HALF_FLOAT_OES;
}

abstract class OesVertexArrayObject {
  static const vertexArrayBindingOes =
      web_gl.OesVertexArrayObject.VERTEX_ARRAY_BINDING_OES;
}

abstract class RenderingContext {
  static const activeAttributes = web_gl.RenderingContext.ACTIVE_ATTRIBUTES;
  static const activeTexture = web_gl.RenderingContext.ACTIVE_TEXTURE;
  static const activeUniforms = web_gl.RenderingContext.ACTIVE_UNIFORMS;
  static const aliasedLineWidthRange =
      web_gl.RenderingContext.ALIASED_LINE_WIDTH_RANGE;
  static const aliasedPointSizeRange =
      web_gl.RenderingContext.ALIASED_POINT_SIZE_RANGE;
  static const alpha = web_gl.RenderingContext.ALPHA;
  static const alphaBits = web_gl.RenderingContext.ALPHA_BITS;
  static const always = web_gl.RenderingContext.ALWAYS;
  static const arrayBuffer = web_gl.RenderingContext.ARRAY_BUFFER;
  static const arrayBufferBinding =
      web_gl.RenderingContext.ARRAY_BUFFER_BINDING;
  static const attachedShaders = web_gl.RenderingContext.ATTACHED_SHADERS;
  static const back = web_gl.RenderingContext.BACK;
  static const blend = web_gl.RenderingContext.BLEND;
  static const blendColor = web_gl.RenderingContext.BLEND_COLOR;
  static const blendDstAlpha = web_gl.RenderingContext.BLEND_DST_ALPHA;
  static const blendDstRgb = web_gl.RenderingContext.BLEND_DST_RGB;
  static const blendEquation = web_gl.RenderingContext.BLEND_EQUATION;
  static const blendEquationAlpha =
      web_gl.RenderingContext.BLEND_EQUATION_ALPHA;
  static const blendEquationRgb = web_gl.RenderingContext.BLEND_EQUATION_RGB;
  static const blendSrcAlpha = web_gl.RenderingContext.BLEND_SRC_ALPHA;
  static const blendSrcRgb = web_gl.RenderingContext.BLEND_SRC_RGB;
  static const blueBits = web_gl.RenderingContext.BLUE_BITS;
  static const bool = web_gl.RenderingContext.BOOL;
  static const boolVec2 = web_gl.RenderingContext.BOOL_VEC2;
  static const boolVec3 = web_gl.RenderingContext.BOOL_VEC3;
  static const boolVec4 = web_gl.RenderingContext.BOOL_VEC4;
  static const browserDefaultWebgl =
      web_gl.RenderingContext.BROWSER_DEFAULT_WEBGL;
  static const bufferSize = web_gl.RenderingContext.BUFFER_SIZE;
  static const bufferUsage = web_gl.RenderingContext.BUFFER_USAGE;
  static const byte = web_gl.RenderingContext.BYTE;
  static const ccw = web_gl.RenderingContext.CCW;
  static const clampToEdge = web_gl.RenderingContext.CLAMP_TO_EDGE;
  static const colorAttachment0 = web_gl.RenderingContext.COLOR_ATTACHMENT0;
  static const colorBufferBit = web_gl.RenderingContext.COLOR_BUFFER_BIT;
  static const colorClearValue = web_gl.RenderingContext.COLOR_CLEAR_VALUE;
  static const colorWritemask = web_gl.RenderingContext.COLOR_WRITEMASK;
  static const compileStatus = web_gl.RenderingContext.COMPILE_STATUS;
  static const compressedTextureFormats =
      web_gl.RenderingContext.COMPRESSED_TEXTURE_FORMATS;
  static const constantAlpha = web_gl.RenderingContext.CONSTANT_ALPHA;
  static const constantColor = web_gl.RenderingContext.CONSTANT_COLOR;
  static const contextLostWebgl = web_gl.RenderingContext.CONTEXT_LOST_WEBGL;
  static const cullFace = web_gl.RenderingContext.CULL_FACE;
  static const cullFaceMode = web_gl.RenderingContext.CULL_FACE_MODE;
  static const currentProgram = web_gl.RenderingContext.CURRENT_PROGRAM;
  static const currentVertexAttrib =
      web_gl.RenderingContext.CURRENT_VERTEX_ATTRIB;
  static const cw = web_gl.RenderingContext.CW;
  static const decr = web_gl.RenderingContext.DECR;
  static const decrWrap = web_gl.RenderingContext.DECR_WRAP;
  static const deleteStatus = web_gl.RenderingContext.DELETE_STATUS;
  static const depthAttachment = web_gl.RenderingContext.DEPTH_ATTACHMENT;
  static const depthBits = web_gl.RenderingContext.DEPTH_BITS;
  static const depthBufferBit = web_gl.RenderingContext.DEPTH_BUFFER_BIT;
  static const depthClearValue = web_gl.RenderingContext.DEPTH_CLEAR_VALUE;
  static const depthComponent = web_gl.RenderingContext.DEPTH_COMPONENT;
  static const depthComponent16 = web_gl.RenderingContext.DEPTH_COMPONENT16;
  static const depthFunc = web_gl.RenderingContext.DEPTH_FUNC;
  static const depthRange = web_gl.RenderingContext.DEPTH_RANGE;
  static const depthStencil = web_gl.RenderingContext.DEPTH_STENCIL;
  static const depthStencilAttachment =
      web_gl.RenderingContext.DEPTH_STENCIL_ATTACHMENT;
  static const depthTest = web_gl.RenderingContext.DEPTH_TEST;
  static const depthWritemask = web_gl.RenderingContext.DEPTH_WRITEMASK;
  static const dither = web_gl.RenderingContext.DITHER;
  static const dontCare = web_gl.RenderingContext.DONT_CARE;
  static const dstAlpha = web_gl.RenderingContext.DST_ALPHA;
  static const dstColor = web_gl.RenderingContext.DST_COLOR;
  static const dynamicDraw = web_gl.RenderingContext.DYNAMIC_DRAW;
  static const elementArrayBuffer =
      web_gl.RenderingContext.ELEMENT_ARRAY_BUFFER;
  static const elementArrayBufferBinding =
      web_gl.RenderingContext.ELEMENT_ARRAY_BUFFER_BINDING;
  static const equal = web_gl.RenderingContext.EQUAL;
  static const fastest = web_gl.RenderingContext.FASTEST;
  static const float = web_gl.RenderingContext.FLOAT;
  static const floatMat2 = web_gl.RenderingContext.FLOAT_MAT2;
  static const floatMat3 = web_gl.RenderingContext.FLOAT_MAT3;
  static const floatMat4 = web_gl.RenderingContext.FLOAT_MAT4;
  static const floatVec2 = web_gl.RenderingContext.FLOAT_VEC2;
  static const floatVec3 = web_gl.RenderingContext.FLOAT_VEC3;
  static const floatVec4 = web_gl.RenderingContext.FLOAT_VEC4;
  static const fragmentShader = web_gl.RenderingContext.FRAGMENT_SHADER;
  static const framebuffer = web_gl.RenderingContext.FRAMEBUFFER;
  static const framebufferAttachmentObjectName =
      web_gl.RenderingContext.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;
  static const framebufferAttachmentObjectType =
      web_gl.RenderingContext.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;
  static const framebufferAttachmentTextureCubeMapFace =
      web_gl.RenderingContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;
  static const framebufferAttachmentTextureLevel =
      web_gl.RenderingContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;
  static const framebufferBinding = web_gl.RenderingContext.FRAMEBUFFER_BINDING;
  static const framebufferComplete =
      web_gl.RenderingContext.FRAMEBUFFER_COMPLETE;
  static const framebufferIncompleteAttachment =
      web_gl.RenderingContext.FRAMEBUFFER_INCOMPLETE_ATTACHMENT;
  static const framebufferIncompleteDimensions =
      web_gl.RenderingContext.FRAMEBUFFER_INCOMPLETE_DIMENSIONS;
  static const framebufferIncompleteMissingAttachment =
      web_gl.RenderingContext.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;
  static const framebufferUnsupported =
      web_gl.RenderingContext.FRAMEBUFFER_UNSUPPORTED;
  static const front = web_gl.RenderingContext.FRONT;
  static const frontAndBack = web_gl.RenderingContext.FRONT_AND_BACK;
  static const frontFace = web_gl.RenderingContext.FRONT_FACE;
  static const funcAdd = web_gl.RenderingContext.FUNC_ADD;
  static const funcReverseSubtract =
      web_gl.RenderingContext.FUNC_REVERSE_SUBTRACT;
  static const funcSubtract = web_gl.RenderingContext.FUNC_SUBTRACT;
  static const generateMipmapHint =
      web_gl.RenderingContext.GENERATE_MIPMAP_HINT;
  static const gequal = web_gl.RenderingContext.GEQUAL;
  static const greater = web_gl.RenderingContext.GREATER;
  static const greenBits = web_gl.RenderingContext.GREEN_BITS;
  static const highFloat = web_gl.RenderingContext.HIGH_FLOAT;
  static const highInt = web_gl.RenderingContext.HIGH_INT;
  static const implementationColorReadFormat =
      web_gl.RenderingContext.IMPLEMENTATION_COLOR_READ_FORMAT;
  static const implementationColorReadType =
      web_gl.RenderingContext.IMPLEMENTATION_COLOR_READ_TYPE;
  static const incr = web_gl.RenderingContext.INCR;
  static const incrWrap = web_gl.RenderingContext.INCR_WRAP;
  static const int = web_gl.RenderingContext.INT;
  static const intVec2 = web_gl.RenderingContext.INT_VEC2;
  static const intVec3 = web_gl.RenderingContext.INT_VEC3;
  static const intVec4 = web_gl.RenderingContext.INT_VEC4;
  static const invalidEnum = web_gl.RenderingContext.INVALID_ENUM;
  static const invalidFramebufferOperation =
      web_gl.RenderingContext.INVALID_FRAMEBUFFER_OPERATION;
  static const invalidOperation = web_gl.RenderingContext.INVALID_OPERATION;
  static const invalidValue = web_gl.RenderingContext.INVALID_VALUE;
  static const invert = web_gl.RenderingContext.INVERT;
  static const keep = web_gl.RenderingContext.KEEP;
  static const lequal = web_gl.RenderingContext.LEQUAL;
  static const less = web_gl.RenderingContext.LESS;
  static const linear = web_gl.RenderingContext.LINEAR;
  static const linearMipmapLinear =
      web_gl.RenderingContext.LINEAR_MIPMAP_LINEAR;
  static const linearMipmapNearest =
      web_gl.RenderingContext.LINEAR_MIPMAP_NEAREST;
  static const lines = web_gl.RenderingContext.LINES;
  static const lineLoop = web_gl.RenderingContext.LINE_LOOP;
  static const lineStrip = web_gl.RenderingContext.LINE_STRIP;
  static const lineWidth = web_gl.RenderingContext.LINE_WIDTH;
  static const linkStatus = web_gl.RenderingContext.LINK_STATUS;
  static const lowFloat = web_gl.RenderingContext.LOW_FLOAT;
  static const lowInt = web_gl.RenderingContext.LOW_INT;
  static const luminance = web_gl.RenderingContext.LUMINANCE;
  static const luminanceAlpha = web_gl.RenderingContext.LUMINANCE_ALPHA;
  static const maxCombinedTextureImageUnits =
      web_gl.RenderingContext.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
  static const maxCubeMapTextureSize =
      web_gl.RenderingContext.MAX_CUBE_MAP_TEXTURE_SIZE;
  static const maxFragmentUniformVectors =
      web_gl.RenderingContext.MAX_FRAGMENT_UNIFORM_VECTORS;
  static const maxRenderbufferSize =
      web_gl.RenderingContext.MAX_RENDERBUFFER_SIZE;
  static const maxTextureImageUnits =
      web_gl.RenderingContext.MAX_TEXTURE_IMAGE_UNITS;
  static const maxTextureSize = web_gl.RenderingContext.MAX_TEXTURE_SIZE;
  static const maxVaryingVectors = web_gl.RenderingContext.MAX_VARYING_VECTORS;
  static const maxVertexAttribs = web_gl.RenderingContext.MAX_VERTEX_ATTRIBS;
  static const maxVertexTextureImageUnits =
      web_gl.RenderingContext.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
  static const maxVertexUniformVectors =
      web_gl.RenderingContext.MAX_VERTEX_UNIFORM_VECTORS;
  static const maxViewportDims = web_gl.RenderingContext.MAX_VIEWPORT_DIMS;
  static const mediumFloat = web_gl.RenderingContext.MEDIUM_FLOAT;
  static const mediumInt = web_gl.RenderingContext.MEDIUM_INT;
  static const mirroredRepeat = web_gl.RenderingContext.MIRRORED_REPEAT;
  static const nearest = web_gl.RenderingContext.NEAREST;
  static const nearestMipmapLinear =
      web_gl.RenderingContext.NEAREST_MIPMAP_LINEAR;
  static const nearestMipmapNearest =
      web_gl.RenderingContext.NEAREST_MIPMAP_NEAREST;
  static const never = web_gl.RenderingContext.NEVER;
  static const nicest = web_gl.RenderingContext.NICEST;
  static const none = web_gl.RenderingContext.NONE;
  static const notequal = web_gl.RenderingContext.NOTEQUAL;
  static const noError = web_gl.RenderingContext.NO_ERROR;
  static const one = web_gl.RenderingContext.ONE;
  static const oneMinusConstantAlpha =
      web_gl.RenderingContext.ONE_MINUS_CONSTANT_ALPHA;
  static const oneMinusConstantColor =
      web_gl.RenderingContext.ONE_MINUS_CONSTANT_COLOR;
  static const oneMinusDstAlpha = web_gl.RenderingContext.ONE_MINUS_DST_ALPHA;
  static const oneMinusDstColor = web_gl.RenderingContext.ONE_MINUS_DST_COLOR;
  static const oneMinusSrcAlpha = web_gl.RenderingContext.ONE_MINUS_SRC_ALPHA;
  static const oneMinusSrcColor = web_gl.RenderingContext.ONE_MINUS_SRC_COLOR;
  static const outOfMemory = web_gl.RenderingContext.OUT_OF_MEMORY;
  static const packAlignment = web_gl.RenderingContext.PACK_ALIGNMENT;
  static const points = web_gl.RenderingContext.POINTS;
  static const polygonOffsetFactor =
      web_gl.RenderingContext.POLYGON_OFFSET_FACTOR;
  static const polygonOffsetFill = web_gl.RenderingContext.POLYGON_OFFSET_FILL;
  static const polygonOffsetUnits =
      web_gl.RenderingContext.POLYGON_OFFSET_UNITS;
  static const redBits = web_gl.RenderingContext.RED_BITS;
  static const renderbuffer = web_gl.RenderingContext.RENDERBUFFER;
  static const renderbufferAlphaSize =
      web_gl.RenderingContext.RENDERBUFFER_ALPHA_SIZE;
  static const renderbufferBinding =
      web_gl.RenderingContext.RENDERBUFFER_BINDING;
  static const renderbufferBlueSize =
      web_gl.RenderingContext.RENDERBUFFER_BLUE_SIZE;
  static const renderbufferDepthSize =
      web_gl.RenderingContext.RENDERBUFFER_DEPTH_SIZE;
  static const renderbufferGreenSize =
      web_gl.RenderingContext.RENDERBUFFER_GREEN_SIZE;
  static const renderbufferHeight = web_gl.RenderingContext.RENDERBUFFER_HEIGHT;
  static const renderbufferInternalFormat =
      web_gl.RenderingContext.RENDERBUFFER_INTERNAL_FORMAT;
  static const renderbufferRedSize =
      web_gl.RenderingContext.RENDERBUFFER_RED_SIZE;
  static const renderbufferStencilSize =
      web_gl.RenderingContext.RENDERBUFFER_STENCIL_SIZE;
  static const renderbufferWidth = web_gl.RenderingContext.RENDERBUFFER_WIDTH;
  static const renderer = web_gl.RenderingContext.RENDERER;
  static const repeat = web_gl.RenderingContext.REPEAT;
  static const replace = web_gl.RenderingContext.REPLACE;
  static const rgb = web_gl.RenderingContext.RGB;
  static const rgb565 = web_gl.RenderingContext.RGB565;
  static const rgb5A1 = web_gl.RenderingContext.RGB5_A1;
  static const rgba = web_gl.RenderingContext.RGBA;
  static const rgba4 = web_gl.RenderingContext.RGBA4;
  static const sampler2d = web_gl.RenderingContext.SAMPLER_2D;
  static const samplerCube = web_gl.RenderingContext.SAMPLER_CUBE;
  static const samples = web_gl.RenderingContext.SAMPLES;
  static const sampleAlphaToCoverage =
      web_gl.RenderingContext.SAMPLE_ALPHA_TO_COVERAGE;
  static const sampleBuffers = web_gl.RenderingContext.SAMPLE_BUFFERS;
  static const sampleCoverage = web_gl.RenderingContext.SAMPLE_COVERAGE;
  static const sampleCoverageInvert =
      web_gl.RenderingContext.SAMPLE_COVERAGE_INVERT;
  static const sampleCoverageValue =
      web_gl.RenderingContext.SAMPLE_COVERAGE_VALUE;
  static const scissorBox = web_gl.RenderingContext.SCISSOR_BOX;
  static const scissorTest = web_gl.RenderingContext.SCISSOR_TEST;
  static const shaderType = web_gl.RenderingContext.SHADER_TYPE;
  static const shadingLanguageVersion =
      web_gl.RenderingContext.SHADING_LANGUAGE_VERSION;
  static const short = web_gl.RenderingContext.SHORT;
  static const srcAlpha = web_gl.RenderingContext.SRC_ALPHA;
  static const srcAlphaSaturate = web_gl.RenderingContext.SRC_ALPHA_SATURATE;
  static const srcColor = web_gl.RenderingContext.SRC_COLOR;
  static const staticDraw = web_gl.RenderingContext.STATIC_DRAW;
  static const stencilAttachment = web_gl.RenderingContext.STENCIL_ATTACHMENT;
  static const stencilBackFail = web_gl.RenderingContext.STENCIL_BACK_FAIL;
  static const stencilBackFunc = web_gl.RenderingContext.STENCIL_BACK_FUNC;
  static const stencilBackPassDepthFail =
      web_gl.RenderingContext.STENCIL_BACK_PASS_DEPTH_FAIL;
  static const stencilBackPassDepthPass =
      web_gl.RenderingContext.STENCIL_BACK_PASS_DEPTH_PASS;
  static const stencilBackRef = web_gl.RenderingContext.STENCIL_BACK_REF;
  static const stencilBackValueMask =
      web_gl.RenderingContext.STENCIL_BACK_VALUE_MASK;
  static const stencilBackWritemask =
      web_gl.RenderingContext.STENCIL_BACK_WRITEMASK;
  static const stencilBits = web_gl.RenderingContext.STENCIL_BITS;
  static const stencilBufferBit = web_gl.RenderingContext.STENCIL_BUFFER_BIT;
  static const stencilClearValue = web_gl.RenderingContext.STENCIL_CLEAR_VALUE;
  static const stencilFail = web_gl.RenderingContext.STENCIL_FAIL;
  static const stencilFunc = web_gl.RenderingContext.STENCIL_FUNC;
  static const stencilIndex8 = web_gl.RenderingContext.STENCIL_INDEX8;
  static const stencilPassDepthFail =
      web_gl.RenderingContext.STENCIL_PASS_DEPTH_FAIL;
  static const stencilPassDepthPass =
      web_gl.RenderingContext.STENCIL_PASS_DEPTH_PASS;
  static const stencilRef = web_gl.RenderingContext.STENCIL_REF;
  static const stencilTest = web_gl.RenderingContext.STENCIL_TEST;
  static const stencilValueMask = web_gl.RenderingContext.STENCIL_VALUE_MASK;
  static const stencilWritemask = web_gl.RenderingContext.STENCIL_WRITEMASK;
  static const streamDraw = web_gl.RenderingContext.STREAM_DRAW;
  static const subpixelBits = web_gl.RenderingContext.SUBPIXEL_BITS;
  static const texture = web_gl.RenderingContext.TEXTURE;
  static const texture0 = web_gl.RenderingContext.TEXTURE0;
  static const texture1 = web_gl.RenderingContext.TEXTURE1;
  static const texture10 = web_gl.RenderingContext.TEXTURE10;
  static const texture11 = web_gl.RenderingContext.TEXTURE11;
  static const texture12 = web_gl.RenderingContext.TEXTURE12;
  static const texture13 = web_gl.RenderingContext.TEXTURE13;
  static const texture14 = web_gl.RenderingContext.TEXTURE14;
  static const texture15 = web_gl.RenderingContext.TEXTURE15;
  static const texture16 = web_gl.RenderingContext.TEXTURE16;
  static const texture17 = web_gl.RenderingContext.TEXTURE17;
  static const texture18 = web_gl.RenderingContext.TEXTURE18;
  static const texture19 = web_gl.RenderingContext.TEXTURE19;
  static const texture2 = web_gl.RenderingContext.TEXTURE2;
  static const texture20 = web_gl.RenderingContext.TEXTURE20;
  static const texture21 = web_gl.RenderingContext.TEXTURE21;
  static const texture22 = web_gl.RenderingContext.TEXTURE22;
  static const texture23 = web_gl.RenderingContext.TEXTURE23;
  static const texture24 = web_gl.RenderingContext.TEXTURE24;
  static const texture25 = web_gl.RenderingContext.TEXTURE25;
  static const texture26 = web_gl.RenderingContext.TEXTURE26;
  static const texture27 = web_gl.RenderingContext.TEXTURE27;
  static const texture28 = web_gl.RenderingContext.TEXTURE28;
  static const texture29 = web_gl.RenderingContext.TEXTURE29;
  static const texture3 = web_gl.RenderingContext.TEXTURE3;
  static const texture30 = web_gl.RenderingContext.TEXTURE30;
  static const texture31 = web_gl.RenderingContext.TEXTURE31;
  static const texture4 = web_gl.RenderingContext.TEXTURE4;
  static const texture5 = web_gl.RenderingContext.TEXTURE5;
  static const texture6 = web_gl.RenderingContext.TEXTURE6;
  static const texture7 = web_gl.RenderingContext.TEXTURE7;
  static const texture8 = web_gl.RenderingContext.TEXTURE8;
  static const texture9 = web_gl.RenderingContext.TEXTURE9;
  static const texture2d = web_gl.RenderingContext.TEXTURE_2D;
  static const textureBinding2d = web_gl.RenderingContext.TEXTURE_BINDING_2D;
  static const textureBindingCubeMap =
      web_gl.RenderingContext.TEXTURE_BINDING_CUBE_MAP;
  static const textureCubeMap = web_gl.RenderingContext.TEXTURE_CUBE_MAP;
  static const textureCubeMapNegativeX =
      web_gl.RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_X;
  static const textureCubeMapNegativeY =
      web_gl.RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Y;
  static const textureCubeMapNegativeZ =
      web_gl.RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Z;
  static const textureCubeMapPositiveX =
      web_gl.RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_X;
  static const textureCubeMapPositiveY =
      web_gl.RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Y;
  static const textureCubeMapPositiveZ =
      web_gl.RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Z;
  static const textureMagFilter = web_gl.RenderingContext.TEXTURE_MAG_FILTER;
  static const textureMinFilter = web_gl.RenderingContext.TEXTURE_MIN_FILTER;
  static const textureWrapS = web_gl.RenderingContext.TEXTURE_WRAP_S;
  static const textureWrapT = web_gl.RenderingContext.TEXTURE_WRAP_T;
  static const triangles = web_gl.RenderingContext.TRIANGLES;
  static const triangleFan = web_gl.RenderingContext.TRIANGLE_FAN;
  static const triangleStrip = web_gl.RenderingContext.TRIANGLE_STRIP;
  static const unpackAlignment = web_gl.RenderingContext.UNPACK_ALIGNMENT;
  static const unpackColorspaceConversionWebgl =
      web_gl.RenderingContext.UNPACK_COLORSPACE_CONVERSION_WEBGL;
  static const unpackFlipYWebgl = web_gl.RenderingContext.UNPACK_FLIP_Y_WEBGL;
  static const unpackPremultiplyAlphaWebgl =
      web_gl.RenderingContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
  static const unsignedByte = web_gl.RenderingContext.UNSIGNED_BYTE;
  static const unsignedInt = web_gl.RenderingContext.UNSIGNED_INT;
  static const unsignedShort = web_gl.RenderingContext.UNSIGNED_SHORT;
  static const unsignedShort4444 =
      web_gl.RenderingContext.UNSIGNED_SHORT_4_4_4_4;
  static const unsignedShort5551 =
      web_gl.RenderingContext.UNSIGNED_SHORT_5_5_5_1;
  static const unsignedShort565 = web_gl.RenderingContext.UNSIGNED_SHORT_5_6_5;
  static const validateStatus = web_gl.RenderingContext.VALIDATE_STATUS;
  static const vendor = web_gl.RenderingContext.VENDOR;
  static const version = web_gl.RenderingContext.VERSION;
  static const vertexAttribArrayBufferBinding =
      web_gl.RenderingContext.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;
  static const vertexAttribArrayEnabled =
      web_gl.RenderingContext.VERTEX_ATTRIB_ARRAY_ENABLED;
  static const vertexAttribArrayNormalized =
      web_gl.RenderingContext.VERTEX_ATTRIB_ARRAY_NORMALIZED;
  static const vertexAttribArrayPointer =
      web_gl.RenderingContext.VERTEX_ATTRIB_ARRAY_POINTER;
  static const vertexAttribArraySize =
      web_gl.RenderingContext.VERTEX_ATTRIB_ARRAY_SIZE;
  static const vertexAttribArrayStride =
      web_gl.RenderingContext.VERTEX_ATTRIB_ARRAY_STRIDE;
  static const vertexAttribArrayType =
      web_gl.RenderingContext.VERTEX_ATTRIB_ARRAY_TYPE;
  static const vertexShader = web_gl.RenderingContext.VERTEX_SHADER;
  static const viewport = web_gl.RenderingContext.VIEWPORT;
  static const zero = web_gl.RenderingContext.ZERO;
}

abstract class RenderingContext2 {
  static const activeAttributes = web_gl.RenderingContext2.ACTIVE_ATTRIBUTES;
  static const activeTexture = web_gl.RenderingContext2.ACTIVE_TEXTURE;
  static const activeUniforms = web_gl.RenderingContext2.ACTIVE_UNIFORMS;
  static const aliasedLineWidthRange =
      web_gl.RenderingContext2.ALIASED_LINE_WIDTH_RANGE;
  static const aliasedPointSizeRange =
      web_gl.RenderingContext2.ALIASED_POINT_SIZE_RANGE;
  static const alpha = web_gl.RenderingContext2.ALPHA;
  static const alphaBits = web_gl.RenderingContext2.ALPHA_BITS;
  static const always = web_gl.RenderingContext2.ALWAYS;
  static const arrayBuffer = web_gl.RenderingContext2.ARRAY_BUFFER;
  static const arrayBufferBinding =
      web_gl.RenderingContext2.ARRAY_BUFFER_BINDING;
  static const attachedShaders = web_gl.RenderingContext2.ATTACHED_SHADERS;
  static const back = web_gl.RenderingContext2.BACK;
  static const blend = web_gl.RenderingContext2.BLEND;
  static const blendColor = web_gl.RenderingContext2.BLEND_COLOR;
  static const blendDstAlpha = web_gl.RenderingContext2.BLEND_DST_ALPHA;
  static const blendDstRgb = web_gl.RenderingContext2.BLEND_DST_RGB;
  static const blendEquation = web_gl.RenderingContext2.BLEND_EQUATION;
  static const blendEquationAlpha =
      web_gl.RenderingContext2.BLEND_EQUATION_ALPHA;
  static const blendEquationRgb = web_gl.RenderingContext2.BLEND_EQUATION_RGB;
  static const blendSrcAlpha = web_gl.RenderingContext2.BLEND_SRC_ALPHA;
  static const blendSrcRgb = web_gl.RenderingContext2.BLEND_SRC_RGB;
  static const blueBits = web_gl.RenderingContext2.BLUE_BITS;
  static const bool = web_gl.RenderingContext2.BOOL;
  static const boolVec2 = web_gl.RenderingContext2.BOOL_VEC2;
  static const boolVec3 = web_gl.RenderingContext2.BOOL_VEC3;
  static const boolVec4 = web_gl.RenderingContext2.BOOL_VEC4;
  static const browserDefaultWebgl =
      web_gl.RenderingContext2.BROWSER_DEFAULT_WEBGL;
  static const bufferSize = web_gl.RenderingContext2.BUFFER_SIZE;
  static const bufferUsage = web_gl.RenderingContext2.BUFFER_USAGE;
  static const byte = web_gl.RenderingContext2.BYTE;
  static const ccw = web_gl.RenderingContext2.CCW;
  static const clampToEdge = web_gl.RenderingContext2.CLAMP_TO_EDGE;
  static const colorAttachment0 = web_gl.RenderingContext2.COLOR_ATTACHMENT0;
  static const colorBufferBit = web_gl.RenderingContext2.COLOR_BUFFER_BIT;
  static const colorClearValue = web_gl.RenderingContext2.COLOR_CLEAR_VALUE;
  static const colorWritemask = web_gl.RenderingContext2.COLOR_WRITEMASK;
  static const compileStatus = web_gl.RenderingContext2.COMPILE_STATUS;
  static const compressedTextureFormats =
      web_gl.RenderingContext2.COMPRESSED_TEXTURE_FORMATS;
  static const constantAlpha = web_gl.RenderingContext2.CONSTANT_ALPHA;
  static const constantColor = web_gl.RenderingContext2.CONSTANT_COLOR;
  static const contextLostWebgl = web_gl.RenderingContext2.CONTEXT_LOST_WEBGL;
  static const cullFace = web_gl.RenderingContext2.CULL_FACE;
  static const cullFaceMode = web_gl.RenderingContext2.CULL_FACE_MODE;
  static const currentProgram = web_gl.RenderingContext2.CURRENT_PROGRAM;
  static const currentVertexAttrib =
      web_gl.RenderingContext2.CURRENT_VERTEX_ATTRIB;
  static const cw = web_gl.RenderingContext2.CW;
  static const decr = web_gl.RenderingContext2.DECR;
  static const decrWrap = web_gl.RenderingContext2.DECR_WRAP;
  static const deleteStatus = web_gl.RenderingContext2.DELETE_STATUS;
  static const depthAttachment = web_gl.RenderingContext2.DEPTH_ATTACHMENT;
  static const depthBits = web_gl.RenderingContext2.DEPTH_BITS;
  static const depthBufferBit = web_gl.RenderingContext2.DEPTH_BUFFER_BIT;
  static const depthClearValue = web_gl.RenderingContext2.DEPTH_CLEAR_VALUE;
  static const depthComponent = web_gl.RenderingContext2.DEPTH_COMPONENT;
  static const depthComponent16 = web_gl.RenderingContext2.DEPTH_COMPONENT16;
  static const depthFunc = web_gl.RenderingContext2.DEPTH_FUNC;
  static const depthRange = web_gl.RenderingContext2.DEPTH_RANGE;
  static const depthStencil = web_gl.RenderingContext2.DEPTH_STENCIL;
  static const depthStencilAttachment =
      web_gl.RenderingContext2.DEPTH_STENCIL_ATTACHMENT;
  static const depthTest = web_gl.RenderingContext2.DEPTH_TEST;
  static const depthWritemask = web_gl.RenderingContext2.DEPTH_WRITEMASK;
  static const dither = web_gl.RenderingContext2.DITHER;
  static const dontCare = web_gl.RenderingContext2.DONT_CARE;
  static const dstAlpha = web_gl.RenderingContext2.DST_ALPHA;
  static const dstColor = web_gl.RenderingContext2.DST_COLOR;
  static const dynamicDraw = web_gl.RenderingContext2.DYNAMIC_DRAW;
  static const elementArrayBuffer =
      web_gl.RenderingContext2.ELEMENT_ARRAY_BUFFER;
  static const elementArrayBufferBinding =
      web_gl.RenderingContext2.ELEMENT_ARRAY_BUFFER_BINDING;
  static const equal = web_gl.RenderingContext2.EQUAL;
  static const fastest = web_gl.RenderingContext2.FASTEST;
  static const float = web_gl.RenderingContext2.FLOAT;
  static const floatMat2 = web_gl.RenderingContext2.FLOAT_MAT2;
  static const floatMat3 = web_gl.RenderingContext2.FLOAT_MAT3;
  static const floatMat4 = web_gl.RenderingContext2.FLOAT_MAT4;
  static const floatVec2 = web_gl.RenderingContext2.FLOAT_VEC2;
  static const floatVec3 = web_gl.RenderingContext2.FLOAT_VEC3;
  static const floatVec4 = web_gl.RenderingContext2.FLOAT_VEC4;
  static const fragmentShader = web_gl.RenderingContext2.FRAGMENT_SHADER;
  static const framebuffer = web_gl.RenderingContext2.FRAMEBUFFER;
  static const framebufferAttachmentObjectName =
      web_gl.RenderingContext2.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;
  static const framebufferAttachmentObjectType =
      web_gl.RenderingContext2.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;
  static const framebufferAttachmentTextureCubeMapFace =
      web_gl.RenderingContext2.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;
  static const framebufferAttachmentTextureLevel =
      web_gl.RenderingContext2.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;
  static const framebufferBinding =
      web_gl.RenderingContext2.FRAMEBUFFER_BINDING;
  static const framebufferComplete =
      web_gl.RenderingContext2.FRAMEBUFFER_COMPLETE;
  static const framebufferIncompleteAttachment =
      web_gl.RenderingContext2.FRAMEBUFFER_INCOMPLETE_ATTACHMENT;
  static const framebufferIncompleteDimensions =
      web_gl.RenderingContext2.FRAMEBUFFER_INCOMPLETE_DIMENSIONS;
  static const framebufferIncompleteMissingAttachment =
      web_gl.RenderingContext2.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;
  static const framebufferUnsupported =
      web_gl.RenderingContext2.FRAMEBUFFER_UNSUPPORTED;
  static const front = web_gl.RenderingContext2.FRONT;
  static const frontAndBack = web_gl.RenderingContext2.FRONT_AND_BACK;
  static const frontFace = web_gl.RenderingContext2.FRONT_FACE;
  static const funcAdd = web_gl.RenderingContext2.FUNC_ADD;
  static const funcReverseSubtract =
      web_gl.RenderingContext2.FUNC_REVERSE_SUBTRACT;
  static const funcSubtract = web_gl.RenderingContext2.FUNC_SUBTRACT;
  static const generateMipmapHint =
      web_gl.RenderingContext2.GENERATE_MIPMAP_HINT;
  static const gequal = web_gl.RenderingContext2.GEQUAL;
  static const greater = web_gl.RenderingContext2.GREATER;
  static const greenBits = web_gl.RenderingContext2.GREEN_BITS;
  static const highFloat = web_gl.RenderingContext2.HIGH_FLOAT;
  static const highInt = web_gl.RenderingContext2.HIGH_INT;
  static const implementationColorReadFormat =
      web_gl.RenderingContext2.IMPLEMENTATION_COLOR_READ_FORMAT;
  static const implementationColorReadType =
      web_gl.RenderingContext2.IMPLEMENTATION_COLOR_READ_TYPE;
  static const incr = web_gl.RenderingContext2.INCR;
  static const incrWrap = web_gl.RenderingContext2.INCR_WRAP;
  static const int = web_gl.RenderingContext2.INT;
  static const intVec2 = web_gl.RenderingContext2.INT_VEC2;
  static const intVec3 = web_gl.RenderingContext2.INT_VEC3;
  static const intVec4 = web_gl.RenderingContext2.INT_VEC4;
  static const invalidEnum = web_gl.RenderingContext2.INVALID_ENUM;
  static const invalidFramebufferOperation =
      web_gl.RenderingContext2.INVALID_FRAMEBUFFER_OPERATION;
  static const invalidOperation = web_gl.RenderingContext2.INVALID_OPERATION;
  static const invalidValue = web_gl.RenderingContext2.INVALID_VALUE;
  static const invert = web_gl.RenderingContext2.INVERT;
  static const keep = web_gl.RenderingContext2.KEEP;
  static const lequal = web_gl.RenderingContext2.LEQUAL;
  static const less = web_gl.RenderingContext2.LESS;
  static const linear = web_gl.RenderingContext2.LINEAR;
  static const linearMipmapLinear =
      web_gl.RenderingContext2.LINEAR_MIPMAP_LINEAR;
  static const linearMipmapNearest =
      web_gl.RenderingContext2.LINEAR_MIPMAP_NEAREST;
  static const lines = web_gl.RenderingContext2.LINES;
  static const lineLoop = web_gl.RenderingContext2.LINE_LOOP;
  static const lineStrip = web_gl.RenderingContext2.LINE_STRIP;
  static const lineWidth = web_gl.RenderingContext2.LINE_WIDTH;
  static const linkStatus = web_gl.RenderingContext2.LINK_STATUS;
  static const lowFloat = web_gl.RenderingContext2.LOW_FLOAT;
  static const lowInt = web_gl.RenderingContext2.LOW_INT;
  static const luminance = web_gl.RenderingContext2.LUMINANCE;
  static const luminanceAlpha = web_gl.RenderingContext2.LUMINANCE_ALPHA;
  static const maxCombinedTextureImageUnits =
      web_gl.RenderingContext2.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
  static const maxCubeMapTextureSize =
      web_gl.RenderingContext2.MAX_CUBE_MAP_TEXTURE_SIZE;
  static const maxFragmentUniformVectors =
      web_gl.RenderingContext2.MAX_FRAGMENT_UNIFORM_VECTORS;
  static const maxRenderbufferSize =
      web_gl.RenderingContext2.MAX_RENDERBUFFER_SIZE;
  static const maxTextureImageUnits =
      web_gl.RenderingContext2.MAX_TEXTURE_IMAGE_UNITS;
  static const maxTextureSize = web_gl.RenderingContext2.MAX_TEXTURE_SIZE;
  static const maxVaryingVectors = web_gl.RenderingContext2.MAX_VARYING_VECTORS;
  static const maxVertexAttribs = web_gl.RenderingContext2.MAX_VERTEX_ATTRIBS;
  static const maxVertexTextureImageUnits =
      web_gl.RenderingContext2.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
  static const maxVertexUniformVectors =
      web_gl.RenderingContext2.MAX_VERTEX_UNIFORM_VECTORS;
  static const maxViewportDims = web_gl.RenderingContext2.MAX_VIEWPORT_DIMS;
  static const mediumFloat = web_gl.RenderingContext2.MEDIUM_FLOAT;
  static const mediumInt = web_gl.RenderingContext2.MEDIUM_INT;
  static const mirroredRepeat = web_gl.RenderingContext2.MIRRORED_REPEAT;
  static const nearest = web_gl.RenderingContext2.NEAREST;
  static const nearestMipmapLinear =
      web_gl.RenderingContext2.NEAREST_MIPMAP_LINEAR;
  static const nearestMipmapNearest =
      web_gl.RenderingContext2.NEAREST_MIPMAP_NEAREST;
  static const never = web_gl.RenderingContext2.NEVER;
  static const nicest = web_gl.RenderingContext2.NICEST;
  static const none = web_gl.RenderingContext2.NONE;
  static const notequal = web_gl.RenderingContext2.NOTEQUAL;
  static const noError = web_gl.RenderingContext2.NO_ERROR;
  static const one = web_gl.RenderingContext2.ONE;
  static const oneMinusConstantAlpha =
      web_gl.RenderingContext2.ONE_MINUS_CONSTANT_ALPHA;
  static const oneMinusConstantColor =
      web_gl.RenderingContext2.ONE_MINUS_CONSTANT_COLOR;
  static const oneMinusDstAlpha = web_gl.RenderingContext2.ONE_MINUS_DST_ALPHA;
  static const oneMinusDstColor = web_gl.RenderingContext2.ONE_MINUS_DST_COLOR;
  static const oneMinusSrcAlpha = web_gl.RenderingContext2.ONE_MINUS_SRC_ALPHA;
  static const oneMinusSrcColor = web_gl.RenderingContext2.ONE_MINUS_SRC_COLOR;
  static const outOfMemory = web_gl.RenderingContext2.OUT_OF_MEMORY;
  static const packAlignment = web_gl.RenderingContext2.PACK_ALIGNMENT;
  static const points = web_gl.RenderingContext2.POINTS;
  static const polygonOffsetFactor =
      web_gl.RenderingContext2.POLYGON_OFFSET_FACTOR;
  static const polygonOffsetFill = web_gl.RenderingContext2.POLYGON_OFFSET_FILL;
  static const polygonOffsetUnits =
      web_gl.RenderingContext2.POLYGON_OFFSET_UNITS;
  static const redBits = web_gl.RenderingContext2.RED_BITS;
  static const renderbuffer = web_gl.RenderingContext2.RENDERBUFFER;
  static const renderbufferAlphaSize =
      web_gl.RenderingContext2.RENDERBUFFER_ALPHA_SIZE;
  static const renderbufferBinding =
      web_gl.RenderingContext2.RENDERBUFFER_BINDING;
  static const renderbufferBlueSize =
      web_gl.RenderingContext2.RENDERBUFFER_BLUE_SIZE;
  static const renderbufferDepthSize =
      web_gl.RenderingContext2.RENDERBUFFER_DEPTH_SIZE;
  static const renderbufferGreenSize =
      web_gl.RenderingContext2.RENDERBUFFER_GREEN_SIZE;
  static const renderbufferHeight =
      web_gl.RenderingContext2.RENDERBUFFER_HEIGHT;
  static const renderbufferInternalFormat =
      web_gl.RenderingContext2.RENDERBUFFER_INTERNAL_FORMAT;
  static const renderbufferRedSize =
      web_gl.RenderingContext2.RENDERBUFFER_RED_SIZE;
  static const renderbufferStencilSize =
      web_gl.RenderingContext2.RENDERBUFFER_STENCIL_SIZE;
  static const renderbufferWidth = web_gl.RenderingContext2.RENDERBUFFER_WIDTH;
  static const renderer = web_gl.RenderingContext2.RENDERER;
  static const repeat = web_gl.RenderingContext2.REPEAT;
  static const replace = web_gl.RenderingContext2.REPLACE;
  static const rgb = web_gl.RenderingContext2.RGB;
  static const rgb565 = web_gl.RenderingContext2.RGB565;
  static const rgb5A1 = web_gl.RenderingContext2.RGB5_A1;
  static const rgba = web_gl.RenderingContext2.RGBA;
  static const rgba4 = web_gl.RenderingContext2.RGBA4;
  static const sampler2d = web_gl.RenderingContext2.SAMPLER_2D;
  static const samplerCube = web_gl.RenderingContext2.SAMPLER_CUBE;
  static const samples = web_gl.RenderingContext2.SAMPLES;
  static const sampleAlphaToCoverage =
      web_gl.RenderingContext2.SAMPLE_ALPHA_TO_COVERAGE;
  static const sampleBuffers = web_gl.RenderingContext2.SAMPLE_BUFFERS;
  static const sampleCoverage = web_gl.RenderingContext2.SAMPLE_COVERAGE;
  static const sampleCoverageInvert =
      web_gl.RenderingContext2.SAMPLE_COVERAGE_INVERT;
  static const sampleCoverageValue =
      web_gl.RenderingContext2.SAMPLE_COVERAGE_VALUE;
  static const scissorBox = web_gl.RenderingContext2.SCISSOR_BOX;
  static const scissorTest = web_gl.RenderingContext2.SCISSOR_TEST;
  static const shaderType = web_gl.RenderingContext2.SHADER_TYPE;
  static const shadingLanguageVersion =
      web_gl.RenderingContext2.SHADING_LANGUAGE_VERSION;
  static const short = web_gl.RenderingContext2.SHORT;
  static const srcAlpha = web_gl.RenderingContext2.SRC_ALPHA;
  static const srcAlphaSaturate = web_gl.RenderingContext2.SRC_ALPHA_SATURATE;
  static const srcColor = web_gl.RenderingContext2.SRC_COLOR;
  static const staticDraw = web_gl.RenderingContext2.STATIC_DRAW;
  static const stencilAttachment = web_gl.RenderingContext2.STENCIL_ATTACHMENT;
  static const stencilBackFail = web_gl.RenderingContext2.STENCIL_BACK_FAIL;
  static const stencilBackFunc = web_gl.RenderingContext2.STENCIL_BACK_FUNC;
  static const stencilBackPassDepthFail =
      web_gl.RenderingContext2.STENCIL_BACK_PASS_DEPTH_FAIL;
  static const stencilBackPassDepthPass =
      web_gl.RenderingContext2.STENCIL_BACK_PASS_DEPTH_PASS;
  static const stencilBackRef = web_gl.RenderingContext2.STENCIL_BACK_REF;
  static const stencilBackValueMask =
      web_gl.RenderingContext2.STENCIL_BACK_VALUE_MASK;
  static const stencilBackWritemask =
      web_gl.RenderingContext2.STENCIL_BACK_WRITEMASK;
  static const stencilBits = web_gl.RenderingContext2.STENCIL_BITS;
  static const stencilBufferBit = web_gl.RenderingContext2.STENCIL_BUFFER_BIT;
  static const stencilClearValue = web_gl.RenderingContext2.STENCIL_CLEAR_VALUE;
  static const stencilFail = web_gl.RenderingContext2.STENCIL_FAIL;
  static const stencilFunc = web_gl.RenderingContext2.STENCIL_FUNC;
  static const stencilIndex8 = web_gl.RenderingContext2.STENCIL_INDEX8;
  static const stencilPassDepthFail =
      web_gl.RenderingContext2.STENCIL_PASS_DEPTH_FAIL;
  static const stencilPassDepthPass =
      web_gl.RenderingContext2.STENCIL_PASS_DEPTH_PASS;
  static const stencilRef = web_gl.RenderingContext2.STENCIL_REF;
  static const stencilTest = web_gl.RenderingContext2.STENCIL_TEST;
  static const stencilValueMask = web_gl.RenderingContext2.STENCIL_VALUE_MASK;
  static const stencilWritemask = web_gl.RenderingContext2.STENCIL_WRITEMASK;
  static const streamDraw = web_gl.RenderingContext2.STREAM_DRAW;
  static const subpixelBits = web_gl.RenderingContext2.SUBPIXEL_BITS;
  static const texture = web_gl.RenderingContext2.TEXTURE;
  static const texture0 = web_gl.RenderingContext2.TEXTURE0;
  static const texture1 = web_gl.RenderingContext2.TEXTURE1;
  static const texture10 = web_gl.RenderingContext2.TEXTURE10;
  static const texture11 = web_gl.RenderingContext2.TEXTURE11;
  static const texture12 = web_gl.RenderingContext2.TEXTURE12;
  static const texture13 = web_gl.RenderingContext2.TEXTURE13;
  static const texture14 = web_gl.RenderingContext2.TEXTURE14;
  static const texture15 = web_gl.RenderingContext2.TEXTURE15;
  static const texture16 = web_gl.RenderingContext2.TEXTURE16;
  static const texture17 = web_gl.RenderingContext2.TEXTURE17;
  static const texture18 = web_gl.RenderingContext2.TEXTURE18;
  static const texture19 = web_gl.RenderingContext2.TEXTURE19;
  static const texture2 = web_gl.RenderingContext2.TEXTURE2;
  static const texture20 = web_gl.RenderingContext2.TEXTURE20;
  static const texture21 = web_gl.RenderingContext2.TEXTURE21;
  static const texture22 = web_gl.RenderingContext2.TEXTURE22;
  static const texture23 = web_gl.RenderingContext2.TEXTURE23;
  static const texture24 = web_gl.RenderingContext2.TEXTURE24;
  static const texture25 = web_gl.RenderingContext2.TEXTURE25;
  static const texture26 = web_gl.RenderingContext2.TEXTURE26;
  static const texture27 = web_gl.RenderingContext2.TEXTURE27;
  static const texture28 = web_gl.RenderingContext2.TEXTURE28;
  static const texture29 = web_gl.RenderingContext2.TEXTURE29;
  static const texture3 = web_gl.RenderingContext2.TEXTURE3;
  static const texture30 = web_gl.RenderingContext2.TEXTURE30;
  static const texture31 = web_gl.RenderingContext2.TEXTURE31;
  static const texture4 = web_gl.RenderingContext2.TEXTURE4;
  static const texture5 = web_gl.RenderingContext2.TEXTURE5;
  static const texture6 = web_gl.RenderingContext2.TEXTURE6;
  static const texture7 = web_gl.RenderingContext2.TEXTURE7;
  static const texture8 = web_gl.RenderingContext2.TEXTURE8;
  static const texture9 = web_gl.RenderingContext2.TEXTURE9;
  static const texture2d = web_gl.RenderingContext2.TEXTURE_2D;
  static const textureBinding2d = web_gl.RenderingContext2.TEXTURE_BINDING_2D;
  static const textureBindingCubeMap =
      web_gl.RenderingContext2.TEXTURE_BINDING_CUBE_MAP;
  static const textureCubeMap = web_gl.RenderingContext2.TEXTURE_CUBE_MAP;
  static const textureCubeMapNegativeX =
      web_gl.RenderingContext2.TEXTURE_CUBE_MAP_NEGATIVE_X;
  static const textureCubeMapNegativeY =
      web_gl.RenderingContext2.TEXTURE_CUBE_MAP_NEGATIVE_Y;
  static const textureCubeMapNegativeZ =
      web_gl.RenderingContext2.TEXTURE_CUBE_MAP_NEGATIVE_Z;
  static const textureCubeMapPositiveX =
      web_gl.RenderingContext2.TEXTURE_CUBE_MAP_POSITIVE_X;
  static const textureCubeMapPositiveY =
      web_gl.RenderingContext2.TEXTURE_CUBE_MAP_POSITIVE_Y;
  static const textureCubeMapPositiveZ =
      web_gl.RenderingContext2.TEXTURE_CUBE_MAP_POSITIVE_Z;
  static const textureMagFilter = web_gl.RenderingContext2.TEXTURE_MAG_FILTER;
  static const textureMinFilter = web_gl.RenderingContext2.TEXTURE_MIN_FILTER;
  static const textureWrapS = web_gl.RenderingContext2.TEXTURE_WRAP_S;
  static const textureWrapT = web_gl.RenderingContext2.TEXTURE_WRAP_T;
  static const triangles = web_gl.RenderingContext2.TRIANGLES;
  static const triangleFan = web_gl.RenderingContext2.TRIANGLE_FAN;
  static const triangleStrip = web_gl.RenderingContext2.TRIANGLE_STRIP;
  static const unpackAlignment = web_gl.RenderingContext2.UNPACK_ALIGNMENT;
  static const unpackColorspaceConversionWebgl =
      web_gl.RenderingContext2.UNPACK_COLORSPACE_CONVERSION_WEBGL;
  static const unpackFlipYWebgl = web_gl.RenderingContext2.UNPACK_FLIP_Y_WEBGL;
  static const unpackPremultiplyAlphaWebgl =
      web_gl.RenderingContext2.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
  static const unsignedByte = web_gl.RenderingContext2.UNSIGNED_BYTE;
  static const unsignedInt = web_gl.RenderingContext2.UNSIGNED_INT;
  static const unsignedShort = web_gl.RenderingContext2.UNSIGNED_SHORT;
  static const unsignedShort4444 =
      web_gl.RenderingContext2.UNSIGNED_SHORT_4_4_4_4;
  static const unsignedShort5551 =
      web_gl.RenderingContext2.UNSIGNED_SHORT_5_5_5_1;
  static const unsignedShort565 = web_gl.RenderingContext2.UNSIGNED_SHORT_5_6_5;
  static const validateStatus = web_gl.RenderingContext2.VALIDATE_STATUS;
  static const vendor = web_gl.RenderingContext2.VENDOR;
  static const version = web_gl.RenderingContext2.VERSION;
  static const vertexAttribArrayBufferBinding =
      web_gl.RenderingContext2.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;
  static const vertexAttribArrayEnabled =
      web_gl.RenderingContext2.VERTEX_ATTRIB_ARRAY_ENABLED;
  static const vertexAttribArrayNormalized =
      web_gl.RenderingContext2.VERTEX_ATTRIB_ARRAY_NORMALIZED;
  static const vertexAttribArrayPointer =
      web_gl.RenderingContext2.VERTEX_ATTRIB_ARRAY_POINTER;
  static const vertexAttribArraySize =
      web_gl.RenderingContext2.VERTEX_ATTRIB_ARRAY_SIZE;
  static const vertexAttribArrayStride =
      web_gl.RenderingContext2.VERTEX_ATTRIB_ARRAY_STRIDE;
  static const vertexAttribArrayType =
      web_gl.RenderingContext2.VERTEX_ATTRIB_ARRAY_TYPE;
  static const vertexShader = web_gl.RenderingContext2.VERTEX_SHADER;
  static const viewport = web_gl.RenderingContext2.VIEWPORT;
  static const zero = web_gl.RenderingContext2.ZERO;
}
