// Copyright (c) 2018, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:isolate' as isolate;

abstract class Isolate {
  static const immediate = isolate.Isolate.immediate;
  static const beforeNextEvent = isolate.Isolate.beforeNextEvent;
}
