// Copyright (c) 2018, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:web_sql' as web_sql;

abstract class SqlError {
  static const constraintErr = web_sql.SqlError.CONSTRAINT_ERR;
  static const databaseErr = web_sql.SqlError.DATABASE_ERR;
  static const quotaErr = web_sql.SqlError.QUOTA_ERR;
  static const syntaxErr = web_sql.SqlError.SYNTAX_ERR;
  static const timeoutErr = web_sql.SqlError.TIMEOUT_ERR;
  static const tooLargeErr = web_sql.SqlError.TOO_LARGE_ERR;
  static const unknownErr = web_sql.SqlError.UNKNOWN_ERR;
  static const versionErr = web_sql.SqlError.VERSION_ERR;
}
