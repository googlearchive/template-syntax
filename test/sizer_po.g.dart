// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'sizer_po.dart';

// **************************************************************************
// PageObjectGenerator
// **************************************************************************

// ignore_for_file: private_collision_in_mixin_application
class $SizerPO extends SizerPO with $$SizerPO {
  PageLoaderElement $__root__;
  $SizerPO.create(PageLoaderElement currentContext)
      : $__root__ = currentContext {
    $__root__.addCheckers([]);
  }
  int get fontSizeFromLabelText {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('SizerPO', 'fontSizeFromLabelText');
    }
    final returnMe = super.fontSizeFromLabelText;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('SizerPO', 'fontSizeFromLabelText');
    }
    return returnMe;
  }

  int get fontSizeFromStyle {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('SizerPO', 'fontSizeFromStyle');
    }
    final returnMe = super.fontSizeFromStyle;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('SizerPO', 'fontSizeFromStyle');
    }
    return returnMe;
  }

  Future<void> dec() {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('SizerPO', 'dec');
    }
    final returnMe = super.dec();
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('SizerPO', 'dec');
    }
    return returnMe;
  }

  Future<void> inc() {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('SizerPO', 'inc');
    }
    final returnMe = super.inc();
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('SizerPO', 'inc');
    }
    return returnMe;
  }

  int _toInt(String s) {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('SizerPO', '_toInt');
    }
    final returnMe = super._toInt(s);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('SizerPO', '_toInt');
    }
    return returnMe;
  }
}

class $$SizerPO {
  PageLoaderElement $__root__;
  PageLoaderMouse __mouse__;
  PageLoaderElement get $root => $__root__;
  PageLoaderElement get _fontSize {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('SizerPO', '_fontSize');
    }
    final element = $__root__.createElement(const ByTagName('label'), [], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('SizerPO', '_fontSize');
    }
    return returnMe;
  }

  PageLoaderElement get _dec {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('SizerPO', '_dec');
    }
    final element = $__root__.createElement(
        const ByTagName('button'), [const WithVisibleText('-')], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('SizerPO', '_dec');
    }
    return returnMe;
  }

  PageLoaderElement get _inc {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('SizerPO', '_inc');
    }
    final element = $__root__.createElement(
        const ByTagName('button'), [const WithVisibleText('+')], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('SizerPO', '_inc');
    }
    return returnMe;
  }
}
