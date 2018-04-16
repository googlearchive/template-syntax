// Copyright (c) 2018, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:convert' as convert;

const ascii = convert.ascii;
const base64 = convert.base64;
const base64Url = convert.base64Url;
const htmlEscape = convert.htmlEscape;

abstract class HtmlEscapeMode {
  static const unknown = convert.HtmlEscapeMode.unknown;
  static const attribute = convert.HtmlEscapeMode.attribute;
  static const sqAttribute = convert.HtmlEscapeMode.sqAttribute;
  static const element = convert.HtmlEscapeMode.element;
}

const json = convert.json;
const latin1 = convert.latin1;
const unicodeReplacementCharacterRune = convert.unicodeReplacementCharacterRune;
const unicodeBomCharacterRune = convert.unicodeBomCharacterRune;
const utf8 = convert.utf8;
