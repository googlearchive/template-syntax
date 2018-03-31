import 'dart:async';
import 'package:angular/angular.dart';

import 'hero.dart';

@Component(
  selector: 'my-hero',
  styles: ['button {margin-left: 8px} div {margin: 8px 0} img {height:24px}'],
  template: '''
    <div>
      <img src="{{heroImageUrl}}">
      <span [style.text-decoration]="lineThrough">
        {{prefix}} {{hero?.name}}
      </span>
      <button (click)="delete()">Delete</button>
    </div>
  ''',
)
class HeroComponent implements OnInit {
  @Input()
  Hero hero;
  final _deleteRequest = new StreamController<Hero>();
  @Output()
  Stream<Hero> get deleteRequest => _deleteRequest.stream;

  // heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
  // Public Domain terms of use: http://www.wpclipart.com/terms.html
  String heroImageUrl = 'assets/images/hero.png';
  String lineThrough = '';
  @Input()
  String prefix = '';

  @override
  void ngOnInit() {
    if (hero == null)
      hero = new Hero(null, '', 'Zzzzzz'); // default sleeping hero
  }

  void delete() {
    _deleteRequest.add(hero);
    lineThrough = lineThrough.isNotEmpty ? '' : 'line-through';
  }
}

@Component(
  selector: 'my-big-hero',
  template: '''
    <div class="detail">
      <img src="{{heroImageUrl}}">
      <div><b>{{hero?.name}}</b></div>
      <div>Name: {{hero?.name}}</div>
      <div>Emotion: {{hero?.emotion}}</div>
      <div>Birthdate: {{hero?.birthdate | date:'longDate'}}</div>
      <div>Web: <a href="{{hero?.url}}" target="_blank">{{hero?.url}}</a></div>
      <div>Rate/hr: {{hero?.rate | currency:'EUR'}}</div>
      <br clear="all">
      <button (click)="delete()">Delete</button>
    </div>
  ''',
  styles: [
    '.detail { border: 1px solid black; padding: 4px; max-width: 450px; }',
    'img     { float: left; margin-right: 8px; height: 100px; }'
  ],
  pipes: [commonPipes],
)
class BigHeroComponent extends HeroComponent {
  @override
  void delete() => _deleteRequest.add(hero);
}
