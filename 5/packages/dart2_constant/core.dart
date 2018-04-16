// Copyright (c) 2018, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:core' as core;

abstract class DateTime {
  static const monday = core.DateTime.monday;
  static const tuesday = core.DateTime.tuesday;
  static const wednesday = core.DateTime.wednesday;
  static const thursday = core.DateTime.thursday;
  static const friday = core.DateTime.friday;
  static const saturday = core.DateTime.saturday;
  static const sunday = core.DateTime.sunday;
  static const daysPerWeek = core.DateTime.daysPerWeek;
  static const january = core.DateTime.january;
  static const february = core.DateTime.february;
  static const march = core.DateTime.march;
  static const april = core.DateTime.april;
  static const may = core.DateTime.may;
  static const june = core.DateTime.june;
  static const july = core.DateTime.july;
  static const august = core.DateTime.august;
  static const september = core.DateTime.september;
  static const october = core.DateTime.october;
  static const november = core.DateTime.november;
  static const december = core.DateTime.december;
  static const monthsPerYear = core.DateTime.monthsPerYear;
}

abstract class double {
  static const nan = core.double.nan;
  static const infinity = core.double.infinity;
  static const negativeInfinity = core.double.negativeInfinity;
  static const minPositive = core.double.minPositive;
  static const maxFinite = core.double.maxFinite;
}

abstract class Duration {
  static const microsecondsPerMillisecond =
      core.Duration.microsecondsPerMillisecond;
  static const millisecondsPerSecond = core.Duration.millisecondsPerSecond;
  static const secondsPerMinute = core.Duration.secondsPerMinute;
  static const minutesPerHour = core.Duration.minutesPerHour;
  static const hoursPerDay = core.Duration.hoursPerDay;
  static const microsecondsPerSecond = core.Duration.microsecondsPerSecond;
  static const microsecondsPerMinute = core.Duration.microsecondsPerMinute;
  static const microsecondsPerHour = core.Duration.microsecondsPerHour;
  static const microsecondsPerDay = core.Duration.microsecondsPerDay;
  static const millisecondsPerMinute = core.Duration.millisecondsPerMinute;
  static const millisecondsPerHour = core.Duration.millisecondsPerHour;
  static const millisecondsPerDay = core.Duration.millisecondsPerDay;
  static const secondsPerHour = core.Duration.secondsPerHour;
  static const secondsPerDay = core.Duration.secondsPerDay;
  static const minutesPerDay = core.Duration.minutesPerDay;
  static const zero = core.Duration.zero;
}
