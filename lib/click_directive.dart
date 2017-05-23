import 'dart:async';
import 'dart:html';

import 'package:angular2/angular2.dart';

@Directive(selector: '[myClick]')
class ClickDirective {
  final _onClick = new StreamController<String>();
  // @Output(alias) propertyName = ...
  @Output('myClick')
  Stream<String> get clicks => _onClick.stream;

  bool _toggle = false;

  ClickDirective(ElementRef el) {
    Element nativeEl = el.nativeElement;
    nativeEl.onClick.listen((Event e) {
      _toggle = !_toggle;
      _onClick.add(_toggle ? 'Click!' : '');
    });
  }
}

@Directive(selector: '[myClick2]',
    // ...
    outputs: const ['clicks:myClick'] // propertyName:alias
    )
class ClickDirective2 {
  final _onClick = new StreamController<String>();
  Stream<String> get clicks => _onClick.stream;
  bool _toggle = false;

  ClickDirective2(ElementRef el) {
    el.nativeElement.onClick.listen((Event e) {
      _toggle = !_toggle;
      _onClick.add(_toggle ? 'Click2!' : '');
    });
  }
}
