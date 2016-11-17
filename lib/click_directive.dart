import 'dart:html';

import 'package:angular2/core.dart';

@Directive(selector: '[myClick]')
class MyClickDirective {
  // @Output(alias) [type info] propertyName = ...
  @Output('myClick')
  final EventEmitter clicks = new EventEmitter<String>();

  bool _toggle = false;

  MyClickDirective(ElementRef el) {
    Element nativeEl = el.nativeElement;
    nativeEl.onClick.listen((Event e) {
      _toggle = !_toggle;
      clicks.emit(_toggle ? 'Click!' : '');
    });
  }
}

@Directive(selector: '[myClick2]',
    // ...
    outputs: const ['clicks:myClick']) // propertyName:alias
class MyClickDirective2 {
  final EventEmitter clicks = new EventEmitter<String>();
  bool _toggle = false;

  MyClickDirective2(ElementRef el) {
    el.nativeElement.onClick.listen((Event e) {
      _toggle = !_toggle;
      clicks.emit(_toggle ? 'Click2!' : '');
    });
  }
}
